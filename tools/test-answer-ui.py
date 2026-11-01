"""Content acceptance and browser regressions for diagnostics, pools and grade context.
Run: python3 tools/test-answer-ui.py --grade 6 (requires Playwright Chromium).
Filters/strict mode and fixture boundaries: docs/PERSONALIZATION_QA.md.
"""
import argparse
import asyncio
import json
import os
import subprocess
import functools
import http.server
import pathlib
import re
import threading
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

async def answer_context_screen(page, screen):
    """Answer real prerequisite screens and the controlled diagnostic/pool fixture."""
    kind = screen['type']
    if kind == 'choice':
        await page.click(f'#stage .opt[data-k="{screen["correct"]}"]')
    elif kind == 'answer' and screen.get('answerKind') == 'quantity':
        await page.fill('#numIn', await page.evaluate('s => SLID_LEARN.ansText(s)', screen))
        await page.dispatch_event('#numIn', 'input')
    elif kind == 'answer' and screen.get('answerKind') == 'divrem':
        await page.fill('#numIn', f"{screen['answer'][0]} ост. {screen['answer'][1]}")
        await page.dispatch_event('#numIn', 'input')
    elif kind == 'number' or kind == 'answer':
        sep = ' : ' if screen.get('answerKind') == 'ratio' else '; '
        await page.fill('#numIn', (sep.join(map(str, screen['answer'])) if isinstance(screen['answer'], list) else str(screen['answer'])).replace('.', ','))
        await page.dispatch_event('#numIn', 'input')
    elif kind == 'multi':
        for k in screen['correct']:
            await page.click(f'#stage .opt[data-k="{k}"]')
    elif kind == 'order':
        for k in range(len(screen['items'])):
            await page.click(f'#ord .opt[data-k="{k}"]')
    elif kind == 'shade':
        for k in range(screen['target']):
            await page.click(f'#shade [data-p="{k}"]')
    elif kind == 'numline':
        await page.eval_on_selector('#nlrng', "(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'))}", screen['answer'])
    elif kind == 'fracin':
        value = f"{screen['answer']}/{screen['den']}" if screen.get('hideDen') else str(screen['answer'])
        await page.fill('#numIn', value)
    elif kind == 'sort':
        for i, item in enumerate(screen['items']):
            await page.click(f'#stage [data-r="{i}"][data-b="{item[1]}"]')
    elif kind == 'lab':
        await page.evaluate('sol => window.__slidLab.set(sol)', screen['solution'])
    elif kind not in ('intro', 'info', 'explore'):
        raise AssertionError(f'Unsupported prerequisite screen: {kind}')

async def grade_context_checks(browser, url):
    context = await browser.new_context(viewport={'width': 400, 'height': 860})
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda route: route.abort())
    async def state():
        return await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")
    async def install():
        await page.evaluate("""() => {
          const c=SLID_SUBJECTS.find(c=>c.id==='math');
          c.diags=c.diags.filter(d=>d.id!=='dg7');c.pools=c.pools.filter(p=>p.id!=='pms2');
          c.diags.push({id:'dg7',grade:7,title:'Тест 7: fixture',why:'Контрольований тест перемикання класу.',
            topics:[{id:'pre',title:'Повторення',kind:'pre',lessons:['g6m4l3'],for:['g7m1']},
                    {id:'cur',title:'Рівняння',kind:'cur',lessons:['g7m1l1']}],
            items:[{topic:'pre',type:'number',sk:'num',title:'2',answer:2},
                   {topic:'pre',type:'number',sk:'num',title:'3',answer:3},
                   {topic:'cur',type:'number',sk:'eq',title:'4',answer:4}]});
        }""")
    async def change_grade(grade):
        await page.click('[data-tab="profile"]')
        await page.click(f'[data-grade="{grade}"]')
    async def play_prerequisite():
        screens = await page.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id==='ms2l4').screens")
        for screen in screens:
            await answer_context_screen(page, screen)
            await page.click('#action')
            if screen['type'] not in ('intro', 'info', 'explore'):
                assert 'ok' in await page.locator('#dock').get_attribute('class') or screen.get('hyp')
                await page.click('#action')
    # A dg6 run saved before revision 2 (no diagRunRev): verdicts of revised cur probes are dropped on load,
    # the other answers and their order stay, and the revised probes are asked again (learn.js resumeDiag).
    await page.goto(url)
    await page.evaluate("""() => {
      const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:false,diagRun:{dg6:Object.fromEntries(d.items.map((_,i)=>[i,1]).slice(0,26))}}));
    }""")
    await page.reload()
    legacy = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      return {keys:Object.keys(S.diagRun.dg6).map(Number),rev:S.diagRunRev.dg6,revised:d.items.flatMap((it,i)=>it.rev?[i]:[]),next:SLID_LEARN.nextItem(d,S.diagRun.dg6)};}""")
    assert legacy['rev'] == 2 and set(legacy['revised']) & set(legacy['keys']) == set(), legacy
    assert legacy['keys'] == [i for i in range(26) if i not in legacy['revised']] and legacy['next'] == legacy['revised'][0], legacy
    assert 'Продовжити тест' in await page.locator('#view').inner_text()
    await page.evaluate("localStorage.clear()")
    # tests-diag-rev-p2 P2-1: a run STARTED in revision 2 through the player (no diagRunRev planted by the test) remembers its
    # revision: answers to revised probes survive a reload. Regression guard for startDiag writing diagRunRev (learn.js resumeDiag);
    # without it the reload would treat the run as revision 1 and drop these verdicts.
    await page.goto(url)
    await page.evaluate("localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:false}))")
    await page.reload()
    # review P3-2 (smoke): the sk migration mark is in the saved state after load with empty errs. The final save() of app.js
    # also writes S.skFix, so this alone does not catch the old `if (migrateSk(S)) save()` — sk_mark_saved_checks does (p3b).
    fixed = (await state()).get('skFix')
    assert fixed == await page.evaluate("SLID_LEARN.SK_MIGRATIONS.map(f=>f.id)"), fixed
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    rev_items = await page.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6').items.flatMap((it,i)=>it.rev?[i]:[])")
    assert rev_items, rev_items
    answered = []
    while not set(rev_items[:2]) <= set(answered):
        screen, i = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
          const i=SLID_LEARN.nextItem(d,(S.diagRun||{}).dg6||{});return [d.items[i],i];}""")
        assert i >= 0 and i not in answered, (i, answered)
        await answer_context_screen(page, screen); await page.click('#action'); answered.append(i)
    before_reload = await state()
    assert before_reload['diagRunRev']['dg6'] == 2, before_reload.get('diagRunRev')
    assert all(before_reload['diagRun']['dg6'][str(i)] == 1 for i in rev_items[:2]), before_reload['diagRun']['dg6']
    await page.click('#pClose'); await page.reload()
    after_reload = await state()
    assert after_reload['diagRunRev']['dg6'] == 2 and after_reload['diagRun']['dg6'] == before_reload['diagRun']['dg6'], (before_reload['diagRun'], after_reload['diagRun'])
    assert 'Продовжити тест' in await page.locator('#view').inner_text()
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    nxt = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');return SLID_LEARN.nextItem(d,S.diagRun.dg6);}""")
    assert nxt not in answered and (await state())['diagRun']['dg6'] == before_reload['diagRun']['dg6'], nxt
    await page.click('#pClose')
    await page.evaluate("localStorage.clear()")
    # A real dg6 partial run of the current revision, paused just before its second dec-ops item.
    await page.goto(url)
    # A new profile can choose a grade and defer the diagnostic.
    await page.click('[data-grade="6"]')
    await page.click('[data-diag-skip="dg6"]')
    assert (await state())['grade'] == 6 and (await state())['diagSkip']['dg6'] is True
    await page.evaluate("""() => {
      const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      const at=d.items.map((it,i)=>it.topic==='dec-ops'?i:-1).filter(i=>i>=0).pop();
      const res=Object.fromEntries(Array.from({length:at},(_,i)=>[i,1]));
      localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:false,diagRun:{dg6:res},diagRunRev:{dg6:SLID_LEARN.diagRev(d)}}));
    }""")
    await page.reload(); await install()
    original6 = (await state())['diagRun']['dg6']
    await change_grade(7)
    assert '7 клас' in await page.locator('#view').inner_text()
    await page.click('[data-diag-go]')
    await page.fill('#numIn', '2'); await page.click('#action')
    await page.click('#pClose')
    assert (await state())['diagRun']['dg6'] == original6
    await change_grade(6)
    assert 'Продовжити тест' in await page.locator('#view').inner_text()
    await page.click('[data-diag-go]')
    await page.click('#skip')  # shaky dec-ops => precise ms2l4 step
    while await page.locator('#skip').is_visible():
        screen = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');return d.items[SLID_LEARN.nextItem(d,S.diagRun.dg6)];}""")
        await answer_context_screen(page, screen); await page.click('#action')
    saved = await state()
    assert [step['l'] for step in saved['plan']['math']['steps']] == ['ms2l4']
    assert saved['diagRun']['dg7'] == {'0': 1}
    # A pool added after authoring the application; it is not production content.
    pool_script = """() => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools.push({id:'pms2',section:'ms2',sources:[{id:'fixture',title:'Контрольована QA-вправа'}],items:[{id:'context1',lesson:'ms2l4',lvl:1,sk:'dec',src:'fixture №1',type:'answer',title:'0,4 · 3',answer:1.2,steps:['0,4 · 3 = 1,2.']},{id:'locked',lesson:'ms2l3',lvl:1,sk:'dec',src:'fixture №2',type:'answer',title:'1 + 1',answer:2,steps:['2.']}]});}"""
    await page.evaluate(pool_script)
    # The older uncompleted prerequisite is still unavailable before its lesson.
    assert await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),c=SLID_SUBJECTS.find(c=>c.id==='math');return SLID_LEARN.practiceItems(S,c).some(it=>it.key==='pms2:context1');}""") is False
    await page.click('#action')  # first plan step -> real ms2l4, not a shortened lesson
    await play_prerequisite()
    assert (await state())['grade'] == 6
    assert await page.locator('#stage [data-practice="ms2l4"]').count() == 1
    # engine-decisions-1101: теми pre «ok» і cur «знайоме» з dg6 тепер відкриті в тренуванні й дали б повторення в цій сесії;
    # сценарій — про контекст класу (одна вправа ms2l4), тож лишаємо тільки пул pms2 (відкриття тем з тесту — decisions_1101_checks)
    await page.evaluate("() => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools=c.pools.filter(p=>p.id==='pms2');}")
    await page.click('#stage [data-practice="ms2l4"]')
    await page.fill('#numIn', '1,2'); await page.click('#action')
    assert 'ok' in await page.locator('#dock').get_attribute('class')
    await page.click('#action'); await page.click('#action')
    current = await state()
    assert current['seen']['pms2:context1'] == 1 and 'pms2:locked' not in current['seen']
    assert current['srs']['ms2l4']['box'] == 1 and current['grade'] == 6
    assert 'Твій план' in await page.locator('#view').inner_text() and '6 клас' in await page.locator('#view').inner_text()
    # Finish grade 7, then return to grade 6: neither plan nor known may be mixed.
    await change_grade(7); await page.click('[data-diag-go]')
    for value in ('3', '4'):
        await page.fill('#numIn', value); await page.click('#action')
    assert (await state())['plan']['math']['known'] == ['g7m1l1']
    await page.click('#action')
    await change_grade(6)
    assert (await state())['plan']['math']['grade'] == 6
    assert 'g7m1l1' not in (await state())['plan']['math']['known']
    saved6 = (await state())['plan']['math']
    await page.reload(); await install()
    assert (await state())['plan']['math'] == saved6
    assert (await state())['seen']['pms2:context1'] == 1
    assert 'ms2l4' in (await state())['srs']
    # Retest starts a fresh run while keeping the previous completed result/plan.
    await page.click('button[data-subject="math"]'); await page.click('[data-plan="math"]')
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    assert (await state())['diagRun'].get('dg6', {}) == {}
    assert (await state())['diag']['dg6']['done'] is True
    await page.click('#skip'); await page.click('#pClose')
    assert (await state())['diagRun']['dg6'] == {'0': -1}
    # A second pass with no pool reports that honestly; adding it later opens it.
    await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1'));S.plan.math.steps=[{l:'ms2l4',src:'diag',why:'shaky',done:false}];S.planByGrade.math[6]=S.plan.math;delete S.lessons.ms2l4;localStorage.setItem('slid.v1',JSON.stringify(S));}""")
    await page.reload(); await install()
    await page.click('[data-plan="math"]'); await page.click('[data-lesson="ms2l4"]')
    await play_prerequisite()
    assert await page.locator('#stage [data-practice="ms2l4"]').count() == 0
    assert 'Тренувальних задач до цієї теми поки немає' in await page.locator('#stage').inner_text()
    await page.click('#action')
    await page.evaluate(pool_script)
    await page.click('[data-goto="math"]'); await page.click('[data-practice-view="math"]')
    assert await page.locator('[data-practice="ms2l4"]').count() == 1
    assert await page.locator('[data-practice="ms2l3"]').count() == 0
    # Legacy migration: a grade-6 plan already stored while profile says grade 7.
    await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1'));S.grade=7;S.plan.math=S.planByGrade.math[6];delete S.plan.math.grade;delete S.planByGrade;localStorage.setItem('slid.v1',JSON.stringify(S));}""")
    await page.reload(); await install()
    assert (await state())['planByGrade']['math']['6']['diag'] == 'dg6'
    await change_grade(7)  # fixture dg7 metadata was installed after the reload
    assert (await state())['plan']['math']['grade'] == 7  # rebuilt from saved dg7
    await change_grade(6)
    assert (await state())['plan']['math']['diag'] == 'dg6'
    assert not errors, errors
    await context.close()
    print('Grade context, real dg6 -> ms2l4 -> fixture pms2, late pool and reload: green')

DAY = '2026-10-16'

async def qa_page(browser, url, seed, touch=False):
    context = await browser.new_context(viewport={'width': 400, 'height': 860}, has_touch=touch)
    # Freeze the calendar for SRS/age windows, including across reloads.
    await context.add_init_script("""{const D=Date;window.Date=class extends D {
      constructor(...a){super(...(a.length?a:['2026-10-16T12:00:00Z']));}
      static now(){return new D('2026-10-16T12:00:00Z').getTime();}
    };}""")
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda route: route.abort())
    await page.goto(url)
    await page.evaluate('s => localStorage.setItem("slid.v1",JSON.stringify(s))', seed)
    await page.reload()
    page.set_default_timeout(7000)
    return context, page, errors

async def saved_state(page):
    return await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")

async def practice_queue(page, focus=None):
    # Match app.js: ties in SRS dates follow curriculum order, not pool item order.
    return await page.evaluate("""focus => {
      const c=SLID_SUBJECTS.find(c=>c.id==='math'),S=JSON.parse(localStorage.getItem('slid.v1')),order=new Map();
      SLID_SUBJECTS.forEach(c=>c.sections.forEach(s=>(s.lessons||[]).forEach(l=>order.set(l.id,order.size))));
      return SLID_LEARN.pickSession(S,{items:SLID_LEARN.practiceItems(S,c).filter(it=>S.lessons[it.lesson]?.done||S.unlockAll),
        focus,n:6,day:'2026-10-16',order:id=>order.get(id)??1e9});
    }""", focus)

async def diagnostic_checks(browser, url, diag):
    for mode in ('ok', 'gap', 'shaky', 'skip'):
        context, page, errors = await qa_page(browser, url, {'grade': diag['grade'], 'unlockAll': False})
        await page.click('[data-diag="math"]')
        await page.click('[data-diag-skip]')
        assert (await saved_state(page))['diagSkip'][diag['id']]
        await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
        pre = next(t for t in diag['topics'] if t['kind'] == 'pre')
        pair = [i for i, it in enumerate(diag['items']) if it['topic'] == pre['id']]
        if mode == 'gap' and diag['items'][pair[0]]['type'] not in ('number', 'choice'):
            raise AssertionError(f"Unsupported wrong-answer driver: {diag['id']}/{pair[0]}")
        shown = []
        before = await saved_state(page)
        while await page.locator('#skip').is_visible():
            i = await page.evaluate("id => {const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id===id),S=JSON.parse(localStorage.getItem('slid.v1'));return SLID_LEARN.nextItem(d,S.diagRun[id]||{});}", diag['id'])
            assert i not in shown and 0 <= i < len(diag['items'])
            shown.append(i)
            it = diag['items'][i]
            assert not await page.locator('#fbTitle').inner_text()
            assert not await page.locator('#fbText').inner_text()
            assert not await page.locator('#pCombo').inner_text()
            assert await page.locator('#hintHost .hint').count() == 0
            assert await page.locator('#shcount:visible, #nlval:visible').count() == 0
            if mode == 'skip' or (mode == 'shaky' and i == pair[-1]):
                await page.click('#skip')
            else:
                if mode == 'gap' and i == pair[0]:
                    if it['type'] == 'number':
                        await page.fill('#numIn', str(float(it['answer']) + 12345))
                    else:
                        await page.click(f'#stage .opt[data-k="{(it["correct"] + 1) % len(it["opts"])}"]')
                else:
                    await answer_context_screen(page, it)
                await page.click('#action')
            state = await saved_state(page)
            if 'diagRun' in state and diag['id'] in state['diagRun']:
                for key in ('xp', 'bestCombo', 'skills', 'mast', 'errs', 'skw'):
                    assert state[key] == before[key], (diag['id'], mode, key)
                if len(shown) == 1:
                    partial = state['diagRun'][diag['id']]
                    await page.click('#pClose'); await page.reload()
                    assert (await saved_state(page))['diagRun'][diag['id']] == partial
                    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
        result = (await saved_state(page))['diag'][diag['id']]
        expected = 'gap' if mode in ('gap', 'skip') else 'shaky' if mode == 'shaky' else 'ok'
        assert result['topics'][pre['id']] == expected, (mode, result)
        if mode == 'ok':
            assert len(shown) == len(diag['items']) and all(v == 1 for v in result['res'].values())
        if mode in ('gap', 'skip'):
            assert pair[-1] not in shown
        if mode == 'gap':
            assert result['res'][str(pair[0])] == 0
        if mode == 'skip':
            assert len(shown) == len(diag['topics']) and all(v == -1 for v in result['res'].values())
        if pre.get('baseline'):
            # No grade 1-3 lessons: the gap stays visible in plan.base and never becomes a step.
            plan = (await saved_state(page))['plan']['math']
            assert (pre['id'] in [b['topic'] for b in plan.get('base', [])]) == (mode != 'ok'), (mode, plan)
            assert all(st.get('topic') != pre['id'] for st in plan['steps'])
        await page.click('#pClose')
        await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
        assert (await saved_state(page))['diagRun'].get(diag['id'], {}) == {}
        assert (await saved_state(page))['diag'][diag['id']] == result
        assert not errors, errors
        await context.close()
        print(f"{diag['id']}: {mode}, {len(shown)} відповідей, resume/retest green", flush=True)

async def pool_checks(browser, url, pool):
    # Isolated chunks let every real item reach the actual renderer/checker, including seen items.
    count = 0
    context, page, errors = await qa_page(browser, url, {'grade': pool['_grade'], 'unlockAll': False})
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
    for lesson in {it['lesson'] for it in pool['items']}:
        assert await page.locator(f'[data-practice="{lesson}"]').count() == 0
    for offset in range(0, len(pool['items']), 6):
        chunk = pool['items'][offset:offset+6]
        seed = {'grade': pool['_grade'], 'unlockAll': False,
                'lessons': {it['lesson']: {'done': True, 'stars': 2} for it in chunk},
                'srs': {it['lesson']: {'box': 0, 'due': DAY} for it in chunk}}
        await page.evaluate('s=>localStorage.setItem("slid.v1",JSON.stringify(s))', seed)
        await page.reload()
        await page.evaluate("""arg=>{const c=SLID_SUBJECTS.find(c=>c.id==='math'), p=c.pools.find(p=>p.id===arg.id);
          c.pools=[p];p.items=arg.items;}""", {'id': pool['id'], 'items': chunk})
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
        ordered = await practice_queue(page)
        assert len(ordered) == len(chunk)
        for it in ordered:
            assert 'Джерело:' in await page.locator('#stage').inner_text()
            await answer_context_screen(page, it); await page.click('#action')
            assert 'ok' in await page.locator('#dock').get_attribute('class'), (pool['id'], it['id'])
            assert await page.locator('#fbText .steps').count() == 1
            assert len(await page.locator('#fbText .steps > span').all_text_contents()) == len(it['steps'])
            assert (await saved_state(page))['seen'][it['key']] == 1
            await page.click('#action')
            count += 1
        state = await saved_state(page)
        assert 'тренування завершено' in (await page.locator('#stage').inner_text()).lower()
        for lesson in {it['lesson'] for it in chunk}:
            assert state['srs'][lesson] == {'box': 1, 'due': '2026-10-19'}
        # Verify persistence via the actual service worker, not merely a second online navigation.
        await page.evaluate("Promise.race([navigator.serviceWorker.ready,new Promise((_,reject)=>setTimeout(()=>reject(new Error('SW cache install timeout')),15000))])")
        await page.reload()
        await page.wait_for_function('!!navigator.serviceWorker.controller')
        await context.set_offline(True); await page.reload()
        assert (await saved_state(page))['seen'] == state['seen']
        assert await page.locator('button[data-subject="math"]').count() == 1
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
        await page.click(f'[data-practice="{chunk[0]["lesson"]}"]')
        assert await page.locator('#stage h2').count() == 1
        await context.set_offline(False)
    assert not errors, errors
    await context.close()
    print(f"{pool['id']}: locked/open, {count} вправ, steps/source, SRS/reload/offline green", flush=True)
    return count

# Symbolic answer kinds (engine-math-pool-answer-formats): fixture items, not production content.
# Each: fields, first attempt and the expected dock text, then an equivalent correct record.
FORMAT_FIXTURES = [
    ({'answerKind': 'ratio', 'answer': '3 : 5', 'reduced': True}, '6 : 10', 'натуральними', '3:5'),
    ({'answerKind': 'coordinates2', 'answer': [5, -2]}, '(-2; 5)', 'Зміни відповідь', 'A(5; −2)'),
    ({'answerKind': 'coordinates3', 'answer': '(2; -1; 3)'}, '(2; -1)', 'Зміни відповідь', '(2; -1; 3)'),
    # coordinates2 with expression components (engine-coordinates2-expression, mer9g №13.5(4)).
    ({'answerKind': 'coordinates2', 'answer': '(p - m; k - n)'}, '(m - p; k - n)', 'Зміни відповідь', 'A(−m + p; −n + k)'),
    ({'answerKind': 'coordinates2', 'answer': '(2a; b^2)', 'form': 'simplified'}, '(a + a; b^2)', 'можна спростити', '(a·2; b²)'),
    ({'answerKind': 'exactRoot', 'answer': '2√3'}, '√12', 'з-під кореня', '√3·2'),
    ({'answerKind': 'intervalSet', 'answer': '(-∞; 1] ∪ [4; +∞)'}, '(-∞; 1) ∪ (4; +∞)', 'Зміни відповідь', 'x ∈ [4; +∞) ∪ (−∞; 1]'),
    ({'answerKind': 'list', 'answer': '(-1 ± √5)/2'}, '0,62; -1,62', 'Зміни відповідь', '(−1 − √5)/2; (−1 + √5)/2'),
    ({'answerKind': 'expression', 'answer': '3a - 2b + 5', 'form': 'expanded'}, '3(a + 1) - 2b + 2', 'Розкрий дужки', '5 − 2b + 3a'),
    ({'answerKind': 'expression', 'answer': '(x - 2)(x + 2)', 'form': 'factored'}, 'x^2 - 4', 'на множники', '(x + 2)(x − 2)'),
    ({'answerKind': 'expression', 'answer': '(x - 2)^2 + (y + 1)^2 = 9'}, '(x - 2)^2 + (y - 1)^2 = 9', 'Зміни відповідь', 'x² − 4x + y² + 2y − 4 = 0'),
    ({'answerKind': 'periodicSet', 'answer': '(-1)^k · π/6 + πk'}, 'π/6 + πk', 'Зміни відповідь', 'x = π/6 + 2πn; 5π/6 + 2πn, n ∈ Z'),
    # engine-math-answer-formats-followup: own unit typed in the field, foreign unit, unreduced root fraction, k/6p, root key in grade 6.
    ({'answerKind': 'list', 'answer': '70; 110', 'unit': '°'}, '70°; 120°', 'Зміни відповідь', '110°; 70°'),
    ({'answer': '7', 'unit': 'см'}, '7 мм', 'Перевір одиницю', '7 см'),
    ({'answerKind': 'exactRoot', 'answer': '-3 + √14'}, '(-6 + 2√14)/2', 'Скороти дріб', '√14 − 3'),
    ({'answerKind': 'expression', 'answer': 'k/(6p)', 'form': 'reduced'}, 'k/6p', 'в дужки', 'k/(6p)'),
    ({'answerKind': 'coordinates2', 'answer': '(√2; 1)'}, '(1; √2)', 'Зміни відповідь', '(√2; 1)'),
    ({'answerKind': 'expression', 'answer': 'x'}, '((((x+1)^12)^12)^12)^12', 'занадто складний', 'x'),
    # engine-math-answer-kinds-new: time, quantity, decimals, improper, multiset, prefixes, periodic decimal, units.
    ({'answerKind': 'time', 'answer': '9:55'}, '9:5', 'двома цифрами', '9 год 55 хв'),
    ({'answerKind': 'time', 'answer': '21:05'}, '2105', 'двокрапку', '21.05'),
    ({'answerKind': 'quantity', 'answer': 245, 'units': ['м', 'см'], 'form': 'compound'}, '245 см', 'спершу більші', '2 м. 45 см.'),
    ({'answerKind': 'quantity', 'answer': 200, 'units': ['год', 'хв']}, '3 кг 20 г', 'Перевір одиницю', '200 хв'),
    ({'answerKind': 'quantity', 'answer': 1200, 'units': ['кг', 'г']}, '1200', 'Допиши одиниці', '1,2 кг'),
    ({'answer': '37,0', 'decimals': 1}, '37', 'одним знаком після коми', '37.0'),
    ({'answer': '3,1', 'decimals': 1, 'tol': 0.05}, '3,14', 'одним знаком після коми', '3,1'),
    ({'answer': '9/4', 'form': 'improper'}, '2 1/4', 'неправильним дробом', '18/8'),
    ({'answerKind': 'list', 'answer': '2; 2; 3', 'multiset': True}, '2; 3', 'Зміни відповідь', '3; 2; 2'),
    # «AB =» — лише коли умова питає саме про вектор AB (engine-learn-list-prefixes-p3, назва з умови)
    ({'answerKind': 'coordinates2', 'answer': '(4; -1)', 'body': '<p>Знайди координати вектора $\\vec{AB}$.</p>'}, '(-1; 4)', 'Зміни відповідь', 'AB = (4; −1)'),
    ({'answer': '-1/3'}, 'x = -0,(4)', 'Зміни відповідь', 'x = −0,(3)'),
    ({'answer': '60', 'unit': 'грн'}, '61 мм', 'Зміни відповідь', '60 грн.'),
]

async def answer_format_checks(browser, url):
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': True, 'lessons': {}, 'srs': {}, 'seen': {}})
    checked, helps = 0, []
    for offset in range(0, len(FORMAT_FIXTURES) + 1, 6):
        batch = FORMAT_FIXTURES[offset:offset + 6]
        if not batch:
            break
        await page.reload()
        await page.evaluate("""([fx,offset]) => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools=c.pools.filter(p=>p.id==='pg6m1');
          c.pools[0].items=fx.map((f,i)=>({...f[0],id:'fmt'+(offset+i),lesson:'g6m1l1',lvl:1,sk:'num',src:c.pools[0].sources[0].id+' №1',type:'answer',title:'Формат '+i,steps:['Пояснення.']}));
          const E=c.pools[0].items.flatMap(it=>SLID_LEARN.validatePool({...c.pools[0],items:[it]},{sections:new Map([['g6m1',{grade:6,lessons:['g6m1l1']}]]),skills:c.skills}));
          if(E.length) throw new Error(E.join('; '));}""", [[list(x) for x in batch], offset])
        await page.click('[data-tab="path"]')
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
        for it in await practice_queue(page):
            fields, wrong, message, right = FORMAT_FIXTURES[int(it['id'][3:])]
            sym = await page.locator('.anskeys.sym').count()
            assert sym == (0 if fields.get('answerKind', 'number') in ('list', 'number') else 1), fields
            if fields.get('answerKind') == 'periodicSet':
                assert await page.locator('#answerUnit').inner_text() == 'k ∈ ℤ'
            if fields.get('answerKind') == 'coordinates2':
                helps.append(await page.locator('#stage .anskeys + .fix').inner_text())
            await page.fill('#numIn', wrong); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
            dock = await page.locator('#dock').inner_text()
            assert 'bad' in await page.locator('#dock').get_attribute('class') and message in dock, (fields, dock)
            ins = await page.locator('#stage .anskeys button').evaluate_all('bs => bs.map(b => b.dataset.ins)')
            # «√» before grade 8 (the fixtures are a grade-6 pool) only when the key itself has a root (QA 7 кл. D-3)
            if fields.get('answerKind') in ('coordinates2', 'coordinates3', 'exactRoot', 'expression'):
                assert ('√' in ins) == ('√' in str(fields['answer'])), (fields, ins)
            if fields.get('answerKind') == 'coordinates2':
                letters = sorted(set(re.findall(r'[a-z]', str(fields['answer']))))
                if letters:
                    # Expression components: ^, · and the key's variable letters next to the coordinate keys.
                    assert ins == ['(', ';', ')', '-', '/', '^', '·', *letters], ins
                    assert '(2a; b − 1)' in helps[-1] and '(p − m; k − n)' not in helps[-1], helps[-1]
                else:
                    assert ins == ['(', ';', ')', '-', '/', *(['√'] if '√' in str(fields['answer']) else [])], ins
            if fields.get('answerKind') == 'list' and fields.get('unit'):
                assert await page.locator('#answerUnit').inner_text() == fields['unit']
            if fields.get('answerKind') == 'time':
                # «:» inserts at the caret; the format example under the field is never the key itself.
                assert ins == [':'], ins
                help_text = await page.locator('#stage .anskeys + .fix').inner_text()
                assert re.search(r'\d{1,2}:\d{2}', help_text) and fields['answer'] not in help_text, help_text
                assert await page.get_attribute('#numIn', 'inputmode') == 'decimal'
                await page.fill('#numIn', '955'); await page.eval_on_selector('#numIn', 'e=>e.setSelectionRange(1,1)')
                await page.click('.anskeys button[data-ins=":"]')
                assert await page.input_value('#numIn') == '9:55'
                await page.fill('#numIn', '')
            if fields.get('answerKind') == 'quantity':
                # Unit buttons from the larger unit; no number in the hint under the field.
                assert ins == sorted(fields['units'], key=lambda u: -['мм', 'см', 'м', 'г', 'кг', 'с', 'хв', 'год'].index(u)), ins
                help_text = await page.locator('#stage .anskeys + .fix').inner_text()
                assert not re.search(r'\d', help_text) and all(u in help_text for u in fields['units']), help_text
            if 'decimals' in fields or fields.get('form') == 'improper':
                assert sym == 0 and await page.locator('#stage .anskeys').count() == 1
                # own hint under the field (learn.js numberHelp), not the generic «Мішане число — через пробіл: 2 1/3»
                help_text = await page.locator('#stage .anskeys + .fix').inner_text()
                assert 'Мішане число' not in help_text and ('знаком після коми' in help_text if 'decimals' in fields else 'без цілої частини' in help_text), help_text
            if fields['answer'] == '(p - m; k - n)':
                # Variable keys insert at the caret: (|; k − n) + p − m → (p-m; k − n).
                await page.fill('#numIn', '(; k − n)'); await page.eval_on_selector('#numIn', 'e=>e.setSelectionRange(1,1)')
                for key in ('p', '-', 'm'):
                    await page.click(f'.anskeys button[data-ins="{key}"]')
                assert await page.input_value('#numIn') == '(p-m; k - n)', await page.input_value('#numIn')
                await page.fill('#numIn', '')
            if fields.get('answerKind') == 'exactRoot':
                # Symbolic keys insert at the caret, not at the end: 2|3 + √ → 2√3.
                await page.fill('#numIn', '23'); await page.eval_on_selector('#numIn', 'e=>e.setSelectionRange(1,1)')
                await page.click('.anskeys button[data-ins="√"]')
                assert await page.input_value('#numIn') == '2√3'
                await page.fill('#numIn', '')
            await page.fill('#numIn', right); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
            assert 'ok' in await page.locator('#dock').get_attribute('class'), (fields, right, await page.locator('#dock').inner_text())
            await page.click('#action'); checked += 1
    # The examples in the coordinates2 field hints (numeric and expression) must not be the answer of any real exercise:
    # every «(…)» in a hint is checked against every coordinates2 key of all pools, diagnostics and lesson screens.
    assert len(helps) == 5 and len(set(helps)) == 2, helps
    # «Підказка ≠ ключ» (рев'ю followup P3-3): приклади витягуються автоматично з усіх текстів, які дитина бачить у вправі —
    # підказки під полем (SLID_ANS_UI.field: help для класу й ключа вправи) і текстів form/bad (SLID_LEARN.hintTexts) —
    # і жоден не має зараховуватися (checkAns ≠ bad) як відповідь самої вправи. Перевіряються всі answer-вправи змісту
    # (пули, екрани уроків) і fixture-вправи цього файла (time, quantity… яких у змісті ще немає).
    await page.reload()
    hits = await page.evaluate(r"""(fx) => {
      // Приклад — сусідні «математичні» токени між роздільниками: кириличне слово (крім слова між цифрами: «3 ост. 2», «2 м 45 см»;
      // сполучник «чи», «або», «і», «й», «та», «а» між цифрами — роздільник, рев'ю kinds-new P3-2), тире, кінцева пунктуація
      // на глибині дужок 0. «2 : 3», «(3; −2)», «[2; 5), (−∞; 3]» лишаються цілими.
      const examples = text => {
        const toks = String(text).split(/\s+/).filter(Boolean), out = []; let cur = [], depth = 0;
        const cyr = t => /^[«(]*[\u0400-\u04ff'’ʼ-]+[.,:;!?»)]*$/.test(t), flush = () => { if (cur.length) out.push(cur.join(' ')); cur = []; };
        const conj = t => /^(?:чи|або|і|й|та|а)[,.]?$/i.test(t);
        toks.forEach((t, i) => {
          const prevDigit = i > 0 && /\d[.,]?$/.test(toks[i - 1]), nextDigit = i + 1 < toks.length && /^[(\-−]?\d/.test(toks[i + 1]);
          if ((cyr(t) && (!(prevDigit && nextDigit) || conj(t))) || t === '—' || t === '–') return flush();
          for (const c of t) { if ('([{'.includes(c)) depth++; else if (')]}'.includes(c)) depth = Math.max(0, depth - 1); }
          cur.push(t.replace(/^«/, ''));
          if (/[^,.:;!?]+[,.:;!?»]$/.test(t) && depth === 0 && !(cyr(t) && nextDigit)) flush();
        });
        flush();
        return out.map(w => w.replace(/[,.:;!?»]+$/, '').replace(/^[\^·*/]+\s*/, '').trim()).filter(w => /[\dπ√]|^[A-Za-z(]/.test(w));
      };
      // сам витяг: сполучник між прикладами розділяє їх, слово-одиниця між цифрами — ні (як і раніше, кінцева одиниця відпадає; інакше збіг «6 : 10» з ключем мовчки проходить)
      const self = [['наприклад 2 : 3 чи 6 : 10', ['2 : 3', '6 : 10']], ['наприклад 2 : 3 або 6 : 10.', ['2 : 3', '6 : 10']], ['запиши 3 ост. 2 і 5 ост. 1', ['3 ост. 2', '5 ост. 1']],
        ['наприклад 2 м 45 см', ['2 м 45']], ['наприклад 1,5 та 2', ['1,5', '2']]].filter(([t, e]) => JSON.stringify(examples(t)) !== JSON.stringify(e)).map(([t]) => 'витяг прикладів: ' + t + ' → ' + JSON.stringify(examples(t)));
      if (self.length) return self;
      const math = SLID_SUBJECTS.find(c => c.id === 'math'), items = [];
      for (const c of SLID_SUBJECTS) {
        for (const p of c.pools || []) { const sec = c.sections.find(s => s.id === p.section); p.items.forEach(it => it.type === 'answer' && items.push([it, sec?.grade ?? 0, false, p.id + ':' + it.id])); }
        for (const sec of c.sections) for (const l of sec.lessons || []) l.screens.forEach((it, i) => it.type === 'answer' && items.push([it, sec.grade, !!sec.signed, l.id + '#' + i]));
        // тест рівня (engine-diag-answer-kinds): підказка під полем видна й у тесті (form/bad-тексти — ні, але звіряємо все)
        for (const d of c.diags || []) d.items.forEach((it, i) => it.type === 'answer' && items.push([it, d.grade, d.signed !== false, d.id + '#' + i]));
      }
      fx.forEach((f, i) => items.push([{ ...f[0], type: 'answer' }, 6, false, 'fixture' + i]));
      // проби, щоб витяг побачив підказки, яких зараз не показує жодна вправа змісту (десятковий ключ 4 кл., factors)
      items.push([{ type: 'answer', answer: '0,7' }, 4, false, 'probe-dec4'], [{ type: 'answer', answerKind: 'factors', answer: '2 · 7' }, 6, false, 'probe-factors']);
      const kinds = new Set(items.map(([it]) => it.answerKind || 'number'));
      if (items.length < 900 || !['expression', 'coordinates2', 'exactRoot', 'list', 'time', 'quantity', 'divrem', 'ratio'].every(k => kinds.has(k))) return ['мало вправ: ' + items.length + ' ' + [...kinds]];
      const cache = new Map(), seen = new Set(), out = [];
      for (const [it, grade, signed, id] of items) {
        const texts = [SLID_ANS_UI.field(it, grade, signed).help, ...SLID_LEARN.hintTexts(it)];
        for (const t of texts) { if (!cache.has(t)) cache.set(t, examples(t)); for (const e of cache.get(t)) { seen.add(e);
          if (SLID_LEARN.checkAns(it, e) !== 'bad') out.push(id + ': «' + e + '» ← ' + JSON.stringify(it.answer) + ' у «' + t + '»'); } }
      }
      // витяг справді знаходить приклади всіх форматів (інакше перевірка порожня)
      const need = ['7/12', '2 1/3', '2,5', '(3; −2)', '(1; −2; 3)', '(2a; b − 1)', '3√5', '√2/2', '4π', '2 : 3', '[2; 5)', '(−∞; 3]', '(x^2)', '(3ab)', '(a + 1)/(a − 1)',
        'π/6 + 2πk', '2^3 · 5', '3 ост. 2', '1/(3y)', '1/3y', '7:05'];
      return need.filter(e => !seen.has(e)).map(e => 'не витягнуто приклад: ' + e).concat(out);
    }""", [[x[0]] for x in FORMAT_FIXTURES])
    assert hits == [], hits
    # SLID_ANS_UI — deep-frozen copy (review followup P3-4): changing it does not reach the player.
    frozen = await page.evaluate("""() => { 'use strict'; let threw = 0;
      for (const f of [() => { SLID_ANS_UI.ratio[1] = 'x'; }, () => { SLID_ANS_UI.ratio[0].push('x'); }, () => { SLID_ANS_UI.time = []; }]) { try { f(); } catch (e) { threw++; } }
      return [threw, Object.isFrozen(SLID_ANS_UI), SLID_ANS_UI.ratio[1].includes('2 : 3')]; }""")
    assert frozen == [3, True, True], frozen
    # Two wrong attempts reveal the ordered key in its canonical spelling.
    await page.reload()
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools=c.pools.filter(p=>p.id==='pg6m1');const p=c.pools[0];
      p.items=[{id:'reveal',lesson:'g6m1l1',lvl:1,sk:'num',src:p.sources[0].id+' №1',type:'answer',title:'Точка',answerKind:'coordinates2',answer:[3,-2],steps:['Пояснення.']}];}""")
    await page.click('[data-tab="path"]')
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
    for attempt in ('(-2; 3)', '(-3; 2)'):  # the second try needs a changed answer
        await page.fill('#numIn', attempt); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
    host = await page.locator('#hintHost').inner_text()
    assert 'Правильна відповідь' in host and re.search(r'3\s*;\s*[−-]\s*2', host), host
    await page.reload()
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools=c.pools.filter(p=>p.id==='pg6m1');const p=c.pools[0];
      p.items=[{id:'revealq',lesson:'g6m1l1',lvl:1,sk:'num',src:p.sources[0].id+' №1',type:'answer',title:'Довжина',answerKind:'quantity',answer:245,units:['см','м'],form:'compound',steps:['Пояснення.']}];}""")
    await page.click('[data-tab="path"]')
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
    for attempt in ('2 м 40 см', '2 м 50 см'):
        await page.fill('#numIn', attempt); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
    host = await page.locator('#hintHost').inner_text()
    assert 'Правильна відповідь: 2 м 45 см' in host, host
    assert not errors, errors
    await context.close()
    assert checked == len(FORMAT_FIXTURES)
    print(f'Формати відповідей: {checked} fixture-вправ (form/bad → еквівалентний запис), reveal green', flush=True)

async def content_checks(browser, url, report):
    count = 0
    for diag in report['diags']:
        await diagnostic_checks(browser, url, diag)
    for pool in report['pools']:
        # Grade comes from the registry, not the spelling of a pool id.
        probe = await browser.new_page()
        await probe.goto(url)
        pool['_grade'] = await probe.evaluate("id=>SLID_SUBJECTS.find(c=>c.id==='math').sections.find(s=>s.id===id).grade", pool['section'])
        await probe.close()
        count += await pool_checks(browser, url, pool)
    assert report['diags'] or count, 'Нуль браузерних перевірок'
    print(f"Реальні об’єкти: {len(report['diags'])} діагностик, {len(report['pools'])} пулів, {count} вправ", flush=True)

async def session_checks(browser, url):
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False,
        'lessons': {'g6m1l1': {'done': True}, 'g6m1l2': {'done': True}, 'g6m1l3': {'done': True}},
        'seen': {'pg6m1:f0': 1, 'pg6m1:f1': 0},
        'srs': {'g6m1l2': {'box': 2, 'due': DAY}, 'g6m1l3': {'box': 2, 'due': DAY}}})
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=Array.from({length:8},(_,i)=>({id:'f'+i,lesson:i<6?'g6m1l1':i===6?'g6m1l2':'g6m1l3',
        lvl:1,sk:'divis',src:p.sources[0].id+' №QA',type:'answer',title:'QA fixture: 2 + 3',answer:5,
        hint:'Додай два і три.',steps:['2 + 3 = 5.']}));}""")
    # Known-good is left out before unseen/failed; focus 4 + review 2, no duplicates.
    picked = await practice_queue(page, 'g6m1l1')
    assert len(picked) == 6 and len({it['key'] for it in picked}) == 6
    assert sum(it['lesson'] == 'g6m1l1' for it in picked) == 4
    assert sum(it.get('review', False) for it in picked) == 2
    assert 'pg6m1:f0' not in [it['key'] for it in picked]
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice="g6m1l1"]')
    for i, it in enumerate(picked):
        if i < 2:
            await page.fill('#numIn', '99'); await page.click('#action')
            assert 'Підказка:' in await page.locator('#hintHost').inner_text()
            assert await page.locator('#fbText .steps').count() == 0
        await page.fill('#numIn', '5'); await page.click('#action')
        assert 'ok' in await page.locator('#dock').get_attribute('class')
        assert (await saved_state(page))['seen'][it['key']] == (0 if i < 2 else 1)
        await page.click('#action')
    state = await saved_state(page)
    assert state['srs']['g6m1l1'] == {'box': 0, 'due': '2026-10-17'}
    assert state['srs']['g6m1l2'] == {'box': 3, 'due': '2026-11-01'}
    assert any(s['l'] == 'g6m1l1' and s['src'] == 'err' for s in state['plan']['math']['steps'])
    # An exhausted pool remains repeatable, and a small pool never duplicates items.
    sizes = await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),S=JSON.parse(localStorage.getItem('slid.v1')),items=SLID_LEARN.practiceItems(S,c);
      items.forEach(it=>S.seen[it.key]=1);
      const pick=a=>SLID_LEARN.pickSession(S,{items:a,focus:'g6m1l1',n:6,day:'2026-10-16'}).map(it=>it.key);
      return [pick(items),pick(items.slice(0,1)),pick([])];}""")
    assert len(sizes[0]) == 6 and len(set(sizes[0])) == 6
    assert len(sizes[1]) == 1 and sizes[2] == []
    assert not errors, errors
    await context.close()
    print('Session fixture: 4+2, priority, hint/retry, errors -> plan, small/exhausted, fixed SRS green', flush=True)
    print('Reversed-order pool fixture (different answers, equal due dates):', flush=True)
    await pool_checks(browser, url, {'id': 'pg6m1', '_grade': 6, 'items': [
        {'id': 'qa-later', 'lesson': 'g6m1l2', 'lvl': 1, 'sk': 'divis', 'src': 'qa №2',
         'type': 'answer', 'title': 'QA fixture: 4 + 3', 'answer': 7, 'steps': ['4 + 3 = 7.']},
        {'id': 'qa-earlier', 'lesson': 'g6m1l1', 'lvl': 1, 'sk': 'divis', 'src': 'qa №1',
         'type': 'answer', 'title': 'QA fixture: 2 + 3', 'answer': 5, 'steps': ['2 + 3 = 5.']}
    ]})

async def divrem_checks(browser, url):
    """Quotient + remainder answer: partial answer hint, key button, zero remainder, reveal."""
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': True})
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math');c.pools=c.pools.filter(p=>p.id==='pg6m1');
      c.pools[0].items=[{answer:[3,2],title:'17 : 5',hint:'5 · 3 = 15.'},{answer:[5,0],title:'35 : 7'},{answer:[7,1],title:'50 : 7',unit:'шт.'}]
        .map((it,i)=>({...it,id:'dr'+i,lesson:'g6m1l1',lvl:1,sk:'num',src:c.pools[0].sources[0].id+' №1',type:'answer',answerKind:'divrem',steps:['Перевірка множенням.']}));}""")
    await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
    assert await page.locator('#numIn').get_attribute('inputmode') == 'numeric'
    await page.click('.anskeys button')  # empty field: the button inserts nothing
    assert await page.input_value('#numIn') == ''
    await page.fill('#numIn', '3'); await page.click('#action')
    assert 'Допиши остачу' in await page.locator('#dock').inner_text()
    await page.click('.anskeys button'); await page.click('.anskeys button')  # second press is ignored
    await page.locator('#numIn').press_sequentially('2')
    assert await page.input_value('#numIn') == '3 ост. 2'
    await page.click('#action')
    assert 'ok' in await page.locator('#dock').get_attribute('class'); await page.click('#action')
    await page.fill('#numIn', '5'); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
    assert 'ok' in await page.locator('#dock').get_attribute('class'); await page.click('#action')
    for wrong in ('7 ост. 2', '7 ост. 3'):
        await page.fill('#numIn', wrong); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
    assert 'Правильна відповідь: 7 (ост. 1) шт.' in await page.locator('#stage').inner_text(), await page.locator('#stage').inner_text()
    assert not errors, errors
    await context.close()
    print('divrem fixture: partial hint, key, zero remainder, reveal green', flush=True)

BASELINE_FIXTURE = """() => {
  const c=SLID_SUBJECTS.find(c=>c.id==='math');
  c.diags=c.diags.filter(d=>d.grade!==4);
  c.diags.push({id:'dg4',grade:4,title:'Тест 4: fixture',why:'Контрольований baseline-тест.',status:'draft',
    topics:[{id:'place',title:'Розряди до тисячі',kind:'pre',baseline:true,lessons:[],for:['g4m1','g4m2']},
            {id:'mul',title:'Табличне множення',kind:'pre',baseline:true,lessons:[],for:['g4m3','m4s1']},
            {id:'cur-g4m1',title:'Класи і розряди',kind:'cur',lessons:['g4m1l1']}],
    items:[{topic:'place',type:'number',sk:'num',title:'Скільки сотень у 305?',answer:3},
           {topic:'mul',type:'number',sk:'num',title:'6 · 7',answer:42},
           {topic:'place',type:'number',sk:'num',title:'Запиши: 4 сотні 7 десятків',answer:470},
           {topic:'mul',type:'number',sk:'num',title:'? · 8 = 56',answer:7},
           {topic:'cur-g4m1',type:'number',sk:'num',title:'Скільки класів у 35 207?',answer:2}]});
}"""

async def baseline_checks(browser, url):
    """Grade 4 baseline without lessons of grades 1-3: fixture dg4 (not content), real g4 lessons."""
    lessons = {'g4m2l1': None, 'm4a': None}
    for mode, expect_base, expect_title, start in (
            ('ok', [], 'Міцна база', None),
            ('skip', [('place', 'gap', 'g4m2l1'), ('mul', 'gap', 'm4a')], 'Почнемо з основ', 'g4m2l1'),
            ('mixed', [('mul', 'shaky', 'm4a')], 'Добра база', 'm4a')):
        context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': False})
        await page.evaluate(BASELINE_FIXTURE)
        await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
        await page.click('[data-diag="math"]')
        assert 'які вміння варто потренувати' in await page.locator('#view').inner_text()
        await page.click('[data-diag-go]')
        while await page.locator('#skip').is_visible():
            i = await page.evaluate("() => {const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg4'),S=JSON.parse(localStorage.getItem('slid.v1'));return SLID_LEARN.nextItem(d,S.diagRun.dg4||{});}")
            item = await page.evaluate("i => SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg4').items[i]", i)
            if mode == 'skip' or (mode == 'mixed' and i == 3):
                await page.click('#skip'); continue
            await answer_context_screen(page, item); await page.click('#action')
        saved = await saved_state(page)
        plan = saved['plan']['math']
        assert plan['steps'] == [], (mode, plan)
        assert [(b['topic'], b['why'], b['next']) for b in plan['base']] == expect_base, (mode, plan)
        assert saved['planByGrade']['math']['4']['base'] == plan['base']
        end = await page.locator('#stage').inner_text()
        assert expect_title in end, (mode, end)
        assert ('Міцна база' in end) == (mode == 'ok'), (mode, end)
        dock = await page.locator('#action').inner_text()
        if start:
            assert 'учителем або дорослим' in end and all(t in end for t in ('Табличне множення',)), end
            assert dock == 'До першого уроку', dock
            rows = await page.locator('#stage [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)')
            assert rows == [start], rows
            if lessons[start] is None:
                lessons[start] = await page.evaluate("id => SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id===id).screens[0].title", start)
            await page.click('#action')
            assert await page.locator('#player').is_visible()
            assert lessons[start] in await page.locator('#stage').inner_text(), (start, lessons[start])
            await page.click('#pClose'); await page.click('#pClose')  # a lesson asks to confirm exit
            assert await page.locator('#player').is_hidden()
            # Opening the grade-4 lesson does not close a baseline gap.
            assert (await saved_state(page))['plan']['math']['base'] == plan['base']
            # Closing the lesson returns to the plan; the home card keeps the gap visible too.
            view = await page.locator('#view').inner_text()
            assert 'Уроків на повторення в застосунку зараз немає' in view and 'Табличне множення' in view, view
            ids = await page.locator('#view [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)')
            assert ids == [start], ids
            await page.click('#view [data-up]')
            card = await page.locator('#view .plancard').inner_text()
            assert 'Потренуй з учителем або дорослим' in card and 'Табличне множення' in card, card
            assert await page.locator('#view .plancard [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)') == [start]
            # A retest with all answers right clears the baseline gaps.
            await page.click('#view .plancard [data-plan="math"]')
            await page.click('#view [data-diag="math"]'); await page.click('[data-diag-go]')
            while await page.locator('#skip').is_visible():
                i = await page.evaluate("() => {const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg4'),S=JSON.parse(localStorage.getItem('slid.v1'));return SLID_LEARN.nextItem(d,S.diagRun.dg4||{});}")
                await answer_context_screen(page, await page.evaluate("i => SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg4').items[i]", i))
                await page.click('#action')
            assert (await saved_state(page))['plan']['math']['base'] == []
        else:
            assert dock == 'До уроків', dock
            assert await page.locator('#stage [data-lesson]').count() == 0
            await page.click('#action')
            assert await page.locator('#player').is_hidden()
        assert not errors, errors
        await context.close()
        print(f"dg4 baseline fixture: {mode} green", flush=True)

async def baseline_compat_checks(browser, url):
    """A plan saved by the PR #6 build stored base[].l instead of next: it must still lead to the lesson."""
    old_plan = {'diag': 'dg4', 'grade': 4, 'date': '2026-10-15', 'topics': {'place': 'ok', 'mul': 'gap', 'cur-g4m1': 'new'},
                'steps': [], 'known': [], 'base': [{'topic': 'mul', 'why': 'gap', 'l': 'm4a'}]}
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': False, 'plan': {'math': old_plan}, 'planByGrade': {'math': {'4': old_plan}}})
    await page.evaluate(BASELINE_FIXTURE)
    await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
    card = await page.locator('#view .plancard').inner_text()
    assert 'Табличне множення' in card, card
    assert await page.locator('#view .plancard [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)') == ['m4a']
    await page.click('#view .plancard [data-plan="math"]')
    assert await page.locator('#view [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)') == ['m4a']
    assert not errors, errors
    await context.close()
    print('baseline compat: saved plan with l green', flush=True)

SPACER = "() => { const d=document.createElement('div'); d.className='qa-spacer'; d.style.height='3000px'; document.querySelector('#stage .screen').appendChild(d); const p=document.querySelector('#player'); p.scrollTop=p.scrollHeight; return p.scrollTop; }"

async def scroll_long(page):
    """Make the current screen long and scroll to its bottom, as a child would on a long task."""
    top = await page.evaluate(SPACER)
    assert top > 500, top

async def player_top(page):
    return await page.evaluate("document.querySelector('#player').scrollTop")

async def focus_id(page):
    return await page.evaluate("document.activeElement && (document.activeElement.id || document.activeElement.tagName)")

async def player_qa_checks(browser, url):
    """QA 4-5 кл. (engine-player-qa-fixes): summary from top, retry only after a change, focus on the action,
    modal player, source without a doubled page, number keys by grade/key, home start point."""
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': False,
        'lessons': {'g4m1l1': {'done': True, 'stars': 2}}, 'srs': {'g4m1l1': {'box': 0, 'due': DAY}}})
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg4m1');c.pools=[p];const sid=p.sources[0].id;
      p.items=[
        {id:'q-page',answer:5,src:sid+' с. 56, №1',srcPage:56,title:'2 + 3'},
        {id:'q-int',answer:3826,src:sid+' №2',srcPage:9,title:'3452 + 374',hint:'Додай порозрядно.'},
        {id:'q-frac',answer:'3/5',fractionOnly:true,src:sid+' №3',title:'Яка частина?'},
        {id:'q-choice',type:'choice',opts:['більше','менше','рівно'],correct:1,src:sid+' №4',title:'Порівняй'},
        {id:'q-comma',answer:12,src:sid+' №5',title:'7 + 5'}]
        .map(it=>({type:'answer',lesson:'g4m1l1',lvl:1,sk:p.items[0].sk,steps:['Пояснення.'],...it}));}""")
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
    # Modal player: the background is inert and Tab never leaves the player.
    assert await page.evaluate("document.querySelector('#app').inert && document.querySelector('#tabs').inert")
    for _ in range(14):
        await page.keyboard.press('Tab')
        assert await page.evaluate("!document.activeElement || !document.activeElement.closest('#app,#tabs')"), await focus_id(page)
    queue = await practice_queue(page)
    assert len(queue) == 5
    for n, it in enumerate(queue):
        stage = await page.locator('#stage').inner_text()
        note = await page.locator('#stage .srcnote').inner_text()
        ins = await page.locator('#stage .anskeys button').evaluate_all('bs => bs.map(b => b.dataset.ins)')
        if it['id'] == 'q-page':
            assert note.count('с. 56') == 1, note
        if it['id'] == 'q-int':
            assert '№2, с. 9' in note, note
            # Grade 4, integer key: no «−», «/», space or fraction hint.
            assert ins == [] and 'Дріб' not in stage and 'Мішане' not in stage, (ins, stage)
            await page.wait_for_function("document.activeElement && document.activeElement.id==='numIn'")
            await page.keyboard.type('3800'); await page.keyboard.press('Enter')
            assert 'bad' in await page.locator('#dock').get_attribute('class')
            assert await page.locator('#action').is_disabled() and await page.locator('#action').inner_text() == 'Спробувати ще раз'
            assert await focus_id(page) == 'numIn'
            # The disabled retry explains itself (aria-live dock text, and as the button's description).
            assert 'Зміни відповідь' in await page.locator('#fbText').inner_text()
            assert await page.locator('#action').get_attribute('aria-describedby') == 'fbText'
            # A second Enter (or click) with the same answer does not spend the second try.
            await page.keyboard.press('Enter')
            await page.locator('#action').click(force=True)
            assert 'Правильна відповідь' not in await page.locator('#hintHost').inner_text()
            assert it['key'] not in (await saved_state(page)).get('seen', {})
            assert 'Підказка:' in await page.locator('#hintHost').inner_text()
            # Typing the same value again keeps it disabled; a changed value enables the check.
            await page.fill('#numIn', '3800')
            assert await page.locator('#action').is_disabled()
            # The same number written differently is the same answer: no new try, and the dock says why.
            for same in ('3800,', '03800', ' 3800 ', '3 800', '3800,0'):
                await page.fill('#numIn', same)
                assert await page.locator('#action').is_disabled(), same
                assert 'та сама відповідь' in await page.locator('#fbText').inner_text(), same
            await page.keyboard.press('Enter')
            assert 'Правильна відповідь' not in await page.locator('#hintHost').inner_text()
            await page.fill('#numIn', '3801')
            assert await page.locator('#action').is_enabled()
            await page.keyboard.press('Enter')
            assert 'Правильна відповідь' in await page.locator('#hintHost').inner_text()
            assert (await saved_state(page))['seen'][it['key']] == 0
        elif it['id'] == 'q-choice':
            # Wrong pick is the last option: after the check focus is on it, not on option «А».
            await page.click('#stage .opt[data-k="2"]'); await page.click('#action')
            assert 'bad' in await page.locator('#dock').get_attribute('class')
            assert await page.evaluate("document.activeElement.dataset.k") == '2', await focus_id(page)
            assert 'Обери інший варіант' in await page.locator('#fbText').inner_text()
            await page.click('#stage .opt[data-k="2"]')
            assert await page.locator('#action').is_disabled()
            assert 'та сама відповідь' in await page.locator('#fbText').inner_text()
            await page.click('#stage .opt[data-k="0"]')
            assert await page.locator('#action').is_enabled()
            await page.click('#stage .opt[data-k="2"]')
            assert await page.locator('#action').is_disabled()
            await page.click('#stage .opt[data-k="1"]'); await page.click('#action')
            assert 'ok' in await page.locator('#dock').get_attribute('class')
        elif it['id'] == 'q-comma':
            # «12,» does not parse (bad). «12» has the same fingerprint, but a correct answer is never blocked.
            await page.wait_for_function("document.activeElement && document.activeElement.id==='numIn'")
            await page.keyboard.type('12,'); await page.keyboard.press('Enter')
            assert 'bad' in await page.locator('#dock').get_attribute('class')
            await page.fill('#numIn', '12')
            assert await page.locator('#action').is_enabled()
            await page.keyboard.press('Enter')
            assert 'ok' in await page.locator('#dock').get_attribute('class')
        else:
            if it['id'] == 'q-frac':
                # A fraction key in grade 4 shows «/» and the fraction hint, still without «−».
                assert '/' in ins and '-' not in ins and 'Дріб' in stage, (ins, stage)
            if it['id'] == 'q-page':
                assert ins == [], ins
            await page.wait_for_function("document.activeElement && document.activeElement.id==='numIn'")
            await page.keyboard.type(str(it['answer'])); await page.keyboard.press('Enter')
            assert 'ok' in await page.locator('#dock').get_attribute('class'), (it['id'], await page.input_value('#numIn'), await page.locator('#dock').inner_text())
        # After the check focus is on «Далі», so Enter goes on.
        assert await focus_id(page) == 'action', await focus_id(page)
        if n == len(queue) - 1:
            await scroll_long(page)
        await page.keyboard.press('Enter')
    assert 'тренування завершено' in (await page.locator('#stage').inner_text()).lower()
    assert await player_top(page) == 0
    assert await focus_id(page) == 'action'
    await page.keyboard.press('Enter')
    assert await page.locator('#player').is_hidden()
    assert await page.evaluate("!document.querySelector('#app').inert && !document.querySelector('#tabs').inert")
    assert not errors, errors
    await context.close()
    # Lesson summary also opens from the top: real g4m1l2, its last screen made long.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    k = await page.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').sections.findIndex(s=>s.id==='g4m1')")
    screens = await page.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id==='g4m1l2').screens")
    await page.click('button[data-subject="math"]'); await page.click(f'[data-topic="{k}"]')
    await page.click('[data-open="1"]'); await page.click('#go')
    for i, screen in enumerate(screens):
        assert await player_top(page) == 0, (i, await player_top(page))
        await answer_context_screen(page, screen)
        graded = screen['type'] not in ('intro', 'info', 'explore')
        if graded:
            await page.click('#action')
            assert await focus_id(page) == 'action', (i, await focus_id(page))
        else:
            assert await focus_id(page) == 'action', (i, await focus_id(page))
        if i == len(screens) - 1:
            await scroll_long(page)
        await page.click('#action')
    assert 'урок пройдено' in (await page.locator('#stage').inner_text()).lower()
    assert await player_top(page) == 0
    assert await focus_id(page) == 'action'
    assert not errors, errors
    await context.close()
    # Diagnostic summary from the top (fixture dg4; every screen made long before answering).
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': False})
    await page.evaluate(BASELINE_FIXTURE)
    await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    while await page.locator('#skip').is_visible():
        assert await player_top(page) == 0
        await scroll_long(page)
        await page.click('#skip')
    assert 'Почнемо з основ' in await page.locator('#stage').inner_text()
    assert await player_top(page) == 0
    assert await focus_id(page) == 'action'
    # Home: «Продовжити» starts where the plan does (baseline start g4m2l1), not at a lesson the test marked known.
    await page.click('#pClose')
    await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
    start = await page.locator('#view .cont[data-start]').get_attribute('data-start')
    lesson = await page.evaluate("v => {const [c,k,i]=v.split('|');return SLID_SUBJECTS.find(x=>x.id===c).sections[+k].lessons[+i].id;}", start)
    plan_row = await page.locator('#view .plancard [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)')
    assert plan_row == ['g4m2l1'] and lesson == 'g4m2l1', (plan_row, lesson)
    assert not errors, errors
    await context.close()
    # Without a baseline gap, known lessons are skipped: the first grade-6 lesson known -> continue with the second.
    probe = await browser.new_page(); await probe.goto(url)
    first6 = await probe.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').sections.find(s=>s.grade===6&&s.lessons).lessons.slice(0,2).map(l=>l.id)")
    await probe.close()
    plan6 = {'diag': 'dg6', 'grade': 6, 'date': DAY, 'topics': {}, 'steps': [], 'known': [first6[0]], 'base': []}
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'subject': 'math', 'unlockAll': False, 'diag': {'dg6': {'done': True, 'res': {}, 'topics': {}, 'date': DAY}},
        'plan': {'math': plan6}, 'planByGrade': {'math': {'6': plan6}}})
    start = await page.locator('#view .cont[data-start]').get_attribute('data-start')
    lesson = await page.evaluate("v => {const [c,k,i]=v.split('|');return SLID_SUBJECTS.find(x=>x.id===c).sections[+k].lessons[+i].id;}", start)
    assert lesson == first6[1], (lesson, first6)
    assert not errors, errors
    await context.close()
    # With unfinished plan steps «Продовжити» opens the first step, exactly like the plan card row.
    probe = await browser.new_page(); await probe.goto(url)
    step = await probe.evaluate("SLID_SUBJECTS.find(c=>c.id==='math').sections.find(s=>s.grade===5&&s.lessons).lessons[0].id")
    await probe.close()
    plan6s = {**plan6, 'steps': [{'l': step, 'why': 'errors', 'src': 'err', 'n': 2, 'of': 3, 'done': False, 'date': DAY}]}
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'subject': 'math', 'unlockAll': False, 'diag': {'dg6': {'done': True, 'res': {}, 'topics': {}, 'date': DAY}},
        'plan': {'math': plan6s}, 'planByGrade': {'math': {'6': plan6s}}})
    plan_row = await page.locator('#view .plancard [data-lesson]').evaluate_all('bs => bs.map(b => b.dataset.lesson)')
    cont = page.locator('#view .cont').filter(has_text='Продовжити')
    assert plan_row == [step] and await cont.get_attribute('data-lesson') == step, (plan_row, await cont.evaluate('b => b.outerHTML'))
    await cont.click()
    title = await page.evaluate("id => SLID_SUBJECTS.flatMap(c=>c.sections).flatMap(s=>s.lessons||[]).find(l=>l.id===id).screens[0].title", step)
    assert await page.locator('#player').is_visible() and title in await page.locator('#stage').inner_text()
    assert not errors, errors
    await context.close()
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'subject': 'math', 'unlockAll': False, 'diag': {'dg6': {'done': True, 'res': {}, 'topics': {}, 'date': DAY}},
        'plan': {'math': plan6}, 'planByGrade': {'math': {'6': plan6}}})
    # Grade 6 practice keeps «−» and «/» for every number answer (the sign/fraction is not given away).
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=[{id:'k6',lesson:'g6m1l1',lvl:1,sk:p.items[0].sk,src:p.sources[0].id+' №1',type:'answer',title:'2 + 3',answer:5,steps:['5.']}];}""")
    await page.evaluate("()=>{const S=JSON.parse(localStorage.getItem('slid.v1'));S.lessons={g6m1l1:{done:true}};localStorage.setItem('slid.v1',JSON.stringify(S));}")
    await page.reload()
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=[{id:'k6',lesson:'g6m1l1',lvl:1,sk:p.items[0].sk,src:p.sources[0].id+' №1',type:'answer',title:'2 + 3',answer:5,steps:['5.']}];}""")
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice-mix]')
    ins = await page.locator('#stage .anskeys button').evaluate_all('bs => bs.map(b => b.dataset.ins)')
    assert ins == ['-', '/', ' '], ins
    print('Player QA fixes: summary top x3, retry after change (input/choice, same value), focus/modal, source page, number keys, home start (plan steps) green', flush=True)
    assert not errors, errors
    await context.close()

async def open_lesson_at(page, lesson, at):
    """Open a real lesson from its section page and answer the screens before index `at` correctly."""
    k, i, screens = await page.evaluate("""id => {const c=SLID_SUBJECTS.find(c=>c.id==='math');const k=c.sections.findIndex(s=>(s.lessons||[]).some(l=>l.id===id));
      const L=c.sections[k].lessons;const i=L.findIndex(l=>l.id===id);return [k,i,L[i].screens];}""", lesson)
    await page.click('button[data-subject="math"]'); await page.click(f'[data-topic="{k}"]')
    await page.click(f'[data-open="{i}"]'); await page.click('#go')
    for screen in screens[:at]:
        await answer_context_screen(page, screen)
        if screen['type'] not in ('intro', 'info', 'explore'):
            await page.click('#action')
        await page.click('#action')
    return screens

async def player_focus_checks(browser, url):
    """engine-player-focus-followup: after a mistake focus never lands on ✕ (labs with SVG-only input), and after a tap
    the answer field is not refocused (the on-screen keyboard would cover the hint)."""
    for lesson, at in (('g4m2l1', 4), ('g4m2l2', 6)):
        context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
        screens = await open_lesson_at(page, lesson, at)
        assert screens[at]['type'] == 'lab', (lesson, at, screens[at]['type'])
        await page.click('#action')   # the untouched model is wrong
        assert 'bad' in await page.locator('#dock').get_attribute('class')
        assert await page.locator('#action').is_disabled()
        active = await page.evaluate("(a => a.id || a.className || a.tagName)(document.activeElement)")
        assert active != 'pClose' and await page.evaluate("document.activeElement.closest('#stage') !== null"), (lesson, active)
        # Two quick Enters (the old trap: the first arms ✕, the second closes the lesson) keep the child in the lesson.
        await page.keyboard.press('Enter'); await page.keyboard.press('Enter')
        assert await page.locator('#player').is_visible(), lesson
        assert await page.locator('#stage [data-lab], #stage #labHost').count() > 0
        assert 'Зміни модель' in await page.locator('#fbText').inner_text()
        assert not errors, errors
        await context.close()
    # Touch: a tap on «Перевірити» does not put focus (and the keyboard) back into the field; the hint stays in view.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True}, touch=True)
    screens = await open_lesson_at(page, 'g4m2l1', 6)
    assert screens[6]['type'] == 'number'
    await page.tap('#numIn'); await page.fill('#numIn', '1'); await page.dispatch_event('#numIn', 'input')
    await page.tap('#action')
    assert 'bad' in await page.locator('#dock').get_attribute('class')
    assert await focus_id(page) != 'numIn', await focus_id(page)
    if screens[6].get('hint'):
        box = await page.locator('#hintHost .hint').bounding_box(); dock = await page.locator('#dock').bounding_box()
        assert box and box['y'] + box['height'] <= dock['y'] + 1, (box, dock)
    await page.fill('#numIn', '2'); await page.dispatch_event('#numIn', 'input')
    assert await page.locator('#action').is_enabled()
    assert not errors, errors
    await context.close()
    print('Player focus follow-up: no focus on ✕ after a lab mistake (g4m2l1#4, g4m2l2#6), touch keeps the field unfocused: green', flush=True)

async def active_desc(page):
    return await page.evaluate("(a => a ? (a.id || a.getAttribute('class') || a.tagName) : null)(document.activeElement)")

async def player_a11y_checks(browser, url):
    """engine-player-a11y-followup: labs changed only by touching the SVG work from the keyboard; on a coarse-pointer
    device (phone, tablet) the field is neither autofocused nor refocused after Enter from the on-screen keyboard;
    image credits are labelled by site; fig/shade aria-labels agree with the number of parts."""
    # Column addition g4m2l1#4: digits only by tapping the SVG. After the mistake focus is on the first digit cell
    # (units), typing a digit keeps focus on that cell through the re-render, Tab goes to the next one.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    screens = await open_lesson_at(page, 'g4m2l1', 4)
    sol = screens[4]['solution']
    await page.click('#action')
    assert 'bad' in await page.locator('#dock').get_attribute('class')
    assert await page.evaluate("document.activeElement.classList.contains('lab-h') && document.activeElement.dataset.h==='0'"), await active_desc(page)
    assert await page.evaluate("document.activeElement.getAttribute('role')") == 'spinbutton'
    assert 'розряд одиниць' in await page.evaluate("document.activeElement.getAttribute('aria-label')")
    n = await page.locator('#stage .lab-h').count()
    assert n == len(sol), (n, sol)
    for i in range(n):
        assert await page.evaluate("document.activeElement.dataset.h") == str(i), await active_desc(page)
        await page.keyboard.press(str(sol[f'd{i}']))
        assert await page.evaluate("document.activeElement.dataset.h") == str(i), ('focus lost on re-render', await active_desc(page))
        assert await page.evaluate("document.activeElement.getAttribute('aria-valuetext')") == str(sol[f'd{i}'])
        if i < n - 1:
            await page.keyboard.press('Tab')
    assert await page.evaluate("window.__slidLab.get()") == {**sol}, await page.evaluate("window.__slidLab.get()")
    assert await page.locator('#action').is_enabled()
    await page.focus('#action'); await page.keyboard.press('Enter')
    assert 'ok' in await page.locator('#dock').get_attribute('class')
    assert await page.locator('#stage .lab-h[tabindex="0"]').count() == 0   # locked model leaves Tab order
    assert not errors, errors
    await context.close()
    # Time line g4m4l1#4: the point moves only by dragging. Tab reaches it, arrows move it a step (10 min).
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    screens = await open_lesson_at(page, 'g4m4l1', 4)
    lab = screens[4]['lab']; start, step = lab['params']['t']['start'], lab['params']['t']['step']
    await page.focus('#stage .screen')
    for _ in range(12):
        await page.keyboard.press('Tab')
        if await page.evaluate("document.activeElement.classList.contains('lab-h')"):
            break
    assert await page.evaluate("document.activeElement.getAttribute('role')") == 'slider', await active_desc(page)
    assert 'Точка P' in await page.evaluate("document.activeElement.getAttribute('aria-label')")
    presses = round((screens[4]['solution']['t'] - start) / step)
    for _ in range(presses):
        await page.keyboard.press('ArrowRight')
    assert await page.evaluate("document.activeElement.getAttribute('aria-valuetext')") == '16:30'
    await page.click('#action')
    assert 'ok' in await page.locator('#dock').get_attribute('class'), await page.evaluate("window.__slidLab.get()")
    assert not errors, errors
    await context.close()
    # Coarse pointer (has_touch → pointer: coarse): no autofocus on a number screen (Android would open the keyboard
    # before the child reads the task), and Enter from the on-screen keyboard does not put focus back into the field.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True}, touch=True)
    assert await page.evaluate("matchMedia('(pointer: coarse)').matches")
    screens = await open_lesson_at(page, 'g4m2l1', 6)
    assert screens[6]['type'] == 'number'
    await page.wait_for_timeout(600)   # the old autofocus fired after 350 ms
    assert await focus_id(page) != 'numIn', await focus_id(page)
    assert await page.evaluate("document.activeElement.classList.contains('screen')"), await active_desc(page)
    await page.tap('#numIn'); await page.keyboard.type('1'); await page.keyboard.press('Enter')
    assert 'bad' in await page.locator('#dock').get_attribute('class')
    assert await focus_id(page) != 'numIn', ('Enter from the on-screen keyboard refocused the field', await focus_id(page))
    assert await page.evaluate("document.activeElement.closest('#stage') !== null"), await active_desc(page)
    if screens[6].get('hint'):
        box = await page.locator('#hintHost .hint').bounding_box(); dock = await page.locator('#dock').bounding_box()
        assert box and box['y'] + box['height'] <= dock['y'] + 1, (box, dock)
    assert not errors, errors
    await context.close()
    # Profile → image sources: «Вікісховище» only for Commons links, otherwise the site (UN digital library in g11s5).
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    await page.click('[data-tab="profile"]')
    links = await page.eval_on_selector_all('.credits a', 'as=>as.map(a=>[a.textContent, a.getAttribute("href")])')
    assert len(links) > 100, len(links)
    wrong = [l for l in links if (l[0] == 'Вікісховище') != ('commons.wikimedia.org' in l[1] or 'upload.wikimedia.org' in l[1])]
    assert not wrong, wrong[:5]
    assert ['digitallibrary.un.org', 'https://digitallibrary.un.org/record/3965290'] in links, [l for l in links if 'un.org' in l[1]]
    assert not errors, errors
    await context.close()
    # aria-label of fig circle/circles and shade: «на 2 рівні частини», «на 5 рівних частин», «на 21 рівну частину».
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    cases = [({'kind': 'circle', 'n': 2, 'k': 1}, 'Круг на 2 рівні частини, зафарбовано 1'),
             ({'kind': 'circle', 'n': 5, 'k': 1}, 'Круг на 5 рівних частин, зафарбовано 1'),
             ({'kind': 'circle', 'n': 21, 'k': 1}, 'Круг на 21 рівну частину, зафарбовано 1'),
             ({'kind': 'circles', 'n': 3, 'k': 4, 'count': 2}, 'Круг на 3 частини, зафарбовано 3')]
    for figure, label in cases:
        await page.evaluate("""f => {const l=SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id==='g4m2l1');
          l.screens[0]={...l.screens[0],fig:f,img:undefined,svg:undefined,lab:undefined};}""", figure)
        await open_lesson_at(page, 'g4m2l1', 0)
        got = await page.eval_on_selector_all('#stage figure svg', 'ss=>ss.map(s=>s.getAttribute("aria-label"))')
        assert got and got[0] == label, (figure, got)
        await page.reload()
    assert not errors, errors
    await context.close()
    print('Player a11y follow-up: lab digits/point from the keyboard (g4m2l1#4, g4m4l1#4), coarse pointer without autofocus/refocus, credits by site, fig plural: green', flush=True)

BAD_ATTRS = """root => [...document.querySelectorAll(root+' *')].flatMap(el=>[...el.attributes]
  .filter(a=>/[<>$]|class=/.test(a.value) && !['Чи a<b?','Ціна 5 $'].includes(a.value)).map(a=>el.tagName+'['+a.name+']='+a.value))"""

async def attr_math_checks(browser, url):
    """engine-lesson-title-aria: fmt() runs over assembled HTML, so `$…$` from content must never reach an attribute
    (aria-label of lesson buttons/sheet, img alt, badge title, href). Attributes get plain readable text instead."""
    context, page, errors = await qa_page(browser, url, {'grade': 8, 'unlockAll': True})
    k, lessons = await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),k=c.sections.findIndex(s=>s.id==='g8m3');
      const L=c.sections[k].lessons;
      // fixture titles: content no longer has `$` in g8m3 titles (fix-math-tex-content), the engine must still cope
      L[1].title='Де живе $\\\\sqrt{2}$?'; L[3].title='Графік $y = \\\\sqrt{x}$';
      L[2].title='Чи a<b?';   // P3-2: назва — текст (видно через esc), не HTML: «<b» не тег
      L[1].screens[0]={...L[1].screens[0],img:'icons/icon-192.png',cap:'Квадрат зі стороною $\\\\sqrt{2}$ і площею <i>$x^2$</i>, $x_1$ і log<sub>2</sub> 8',
        note:{text:'Примітка',links:[['Джерело','https://example.org/a$b$c'],['Скрипт',' javascript:alert(1)']]}};
      const b=c.badges&&c.badges[0]; if(b) b.desc='Знайди $x^2 = 81$ і $1/2 + 1/3$';
      // P3-1: одиночний $ в атрибуті не має спаровуватися з формулою у видимому тексті після нього
      const b2=SLID_SUBJECTS.flatMap(s=>s.badges||[]).find(x=>x!==b); if(b2){ b2.desc='Ціна 5 $'; b2.name='Знак $x$'; }
      (c.credits||(c.credits=[])).unshift(['QA','автор','CC0','https://example.org/$x$'],['QA2','автор','CC0','javascript:alert(1)']);
      return [k, L.map(l=>l.title)];}""")
    assert '$' in lessons[1] and '$' in lessons[3], lessons
    await page.click('button[data-subject="math"]'); await page.click(f'[data-topic="{k}"]')
    labels = await page.eval_on_selector_all('.nbtn', 'bs=>bs.map(b=>[b.getAttribute("aria-label"), b.innerText.trim()])')
    assert [l for l, _ in labels][1:4:2] == ['Де живе √2?', 'Графік y = √x'], labels
    assert labels[2][0] == 'Чи a<b?', labels
    assert all(not text for _, text in labels), labels   # the old bug leaked «2 ?">» as visible button text
    assert await page.locator('.nlabel .m .sqrt').count() == 2   # the visible label still renders the formula
    assert not await page.evaluate(BAD_ATTRS, '#view'), await page.evaluate(BAD_ATTRS, '#view')
    await page.click('[data-open="1"]')
    assert await page.get_attribute('#sheetHost [role="dialog"]', 'aria-label') == 'Де живе √2?'
    assert await page.locator('#sheetHost h2 .sqrt').count() == 1
    assert not await page.evaluate(BAD_ATTRS, '#sheetHost'), await page.evaluate(BAD_ATTRS, '#sheetHost')
    await page.click('#go')
    assert await page.get_attribute('#stage figure img', 'alt') == 'Квадрат зі стороною √2 і площею x², x₁ і log₂ 8'
    assert await page.locator('#stage figcaption .m').count() == 3
    hrefs = await page.eval_on_selector_all('#stage .note a', 'as=>as.map(a=>a.getAttribute("href"))')
    assert hrefs == ['https://example.org/a%24b%24c', '#'], hrefs   # P3-4: лише http(s)
    assert not await page.evaluate(BAD_ATTRS, '#stage'), await page.evaluate(BAD_ATTRS, '#stage')
    await page.click('#pClose')
    if await page.locator('#pClose').is_visible(): await page.click('#pClose')
    await page.click('[data-tab="progress"]')
    if await page.evaluate("!!SLID_SUBJECTS.find(c=>c.id==='math').badges?.length"):
        titles = await page.eval_on_selector_all('.bdg', 'bs=>bs.map(b=>b.title)')
        assert 'Знайди x² = 81 і 1/2 + 1/3' in titles, titles
        assert 'Ціна 5 $' in titles, titles   # без &#36; fmt спарував би цей $ з «Знак $x$» і зламав атрибут
        assert await page.locator('.bdg .m').count() == 1, 'Знак $x$: формула в назві значка не відрендерилась'
    assert not await page.evaluate(BAD_ATTRS, '#view'), await page.evaluate(BAD_ATTRS, '#view')
    await page.click('[data-tab="profile"]')
    assert await page.locator('.credits a[href="https://example.org/%24x%24"]').count() == 1
    assert await page.locator('.credits a[href="#"]').count() == 1
    assert not await page.evaluate(BAD_ATTRS, '#view'), await page.evaluate(BAD_ATTRS, '#view')
    assert not errors, errors
    await context.close()
    print('Formulas in attributes (g8m3 lesson buttons/sheet, img alt, badge title, href): plain text, green', flush=True)

ROOT_INDEX_JS = r"""(fs) => fs.map(f => {
  const host = document.createElement('p'); host.className = 'm'; host.innerHTML = SLID_MATH.mathHTML(f); document.querySelector('#view').prepend(host);
  const box = el => el.getBoundingClientRect(), r = document.createRange(), textBox = n => { r.selectNodeContents(n); return r.getBoundingClientRect(); };
  const ix = box(host.querySelector('.root-index')), rd = box(host.querySelector('.radicand')), co = host.firstChild.nodeType === 3 ? textBox(host.firstChild) : null;
  const ref = document.createElement('p'); ref.className = 'm'; ref.innerHTML = SLID_MATH.mathHTML('2^3'); document.querySelector('#view').prepend(ref);
  const sp = box(ref.querySelector('sup')), b = textBox(ref.firstChild), fs = parseFloat(getComputedStyle(host).fontSize);
  host.remove(); ref.remove();
  return { f, fs, gap: co && ix.left - co.right, before: rd.left - ix.right, ixTop: co && ix.top - co.top, ixMid: co && (ix.bottom - co.top) / co.height, supTop: sp.top - b.top };
})"""

async def root_index_checks(browser, url):
    """engine-math-answer-g11-issues P2-1: the root index sits in the hook of «√», not at power height right after a coefficient
    (2\\sqrt[3]{2} must not read as «2³√2»). Geometry in the real app CSS at 320 px, light and dark theme; real g10m3 formulas."""
    for theme in ('light', 'dark'):
        context, page, errors = await qa_page(browser, url, {'grade': 10, 'theme': theme})
        await page.set_viewport_size({'width': 320, 'height': 700})
        await page.evaluate('t => document.documentElement.setAttribute("data-theme", t)', theme)
        rows = await page.evaluate(ROOT_INDEX_JS, ['2\\sqrt[3]{2}', '0,3\\sqrt[3]{1000}', '5\\sqrt[8]{256}', '0,5\\sqrt[3]{-64}', '6 \\cdot (-\\sqrt[10]{6})^{10}', '\\sqrt[3]{x^2}'])
        for x in rows:
            assert x['before'] >= 0, x                                    # index before the radicand (inside the hook), not after «√»
            if x['gap'] is None: continue
            assert x['gap'] >= 1, x                                       # a gap after the coefficient: «2 ³√2», not «2³√2»
            assert x['ixTop'] - x['supTop'] >= 0.15 * x['fs'], x          # clearly lower than a power superscript (2³)
            assert x['ixMid'] > 0.5, x                                    # bottom of the index below the coefficient's midline
        assert not errors, errors
        await context.close()
    print('Root index (g10m3 2∛2, 0,3∛1000, 5·⁸√256; 320 px, light/dark): in the hook of √, apart from the coefficient, green', flush=True)

FALLBACK_CHROMIUM = '/opt/pw-browsers/chromium'

async def launch_browser(p, path=None):
    """--browser / SLID_BROWSER wins; otherwise the same fallback as playtest.py (preinstalled Chromium, then Playwright's own)."""
    if path:
        return await p.chromium.launch(executable_path=path)
    if os.path.exists(FALLBACK_CHROMIUM) and not os.environ.get('PW_DEFAULT'):
        try:
            return await p.chromium.launch(executable_path=FALLBACK_CHROMIUM)
        except Exception:
            pass
    return await p.chromium.launch()

async def main():
    parser = argparse.ArgumentParser(description='Діагностики/пули: реальний контент і контрольовані регресії')
    parser.add_argument('--grade', type=int, choices=range(4, 12))
    parser.add_argument('--diag')
    parser.add_argument('--pool')
    parser.add_argument('--strict', action='store_true')
    parser.add_argument('--suite', choices=['all', 'content', 'regression'], default='all')
    parser.add_argument('--browser', default=os.environ.get('SLID_BROWSER'))
    options = parser.parse_args()
    if options.suite == 'regression' and (options.grade or options.diag or options.pool or options.strict):
        parser.error('Фільтри/strict застосовуються до content, а не лише fixtures')
    args = ['node', str(ROOT / 'tools/personalization-qa.mjs'), '--json']
    for flag in ('grade', 'diag', 'pool'):
        if getattr(options, flag) is not None:
            args += ['--' + flag, str(getattr(options, flag))]
    if options.strict:
        args.append('--strict')
    proc = subprocess.run(args, capture_output=True, text=True)
    if not proc.stdout:
        raise SystemExit(proc.stderr or 'Порожня інвентаризація')
    report = json.loads(proc.stdout)
    print(f"Матриця {report['version']}: {report['counts']}", flush=True)
    print(f"Бракує: {len(report['missing'])}; optional: {len(report['optional'])}; pending: {len(report['pending'])}", flush=True)
    if proc.returncode:
        for line in report['errors'] + report['missing'] + report['unsupported']:
            print(line)
        raise SystemExit(proc.returncode)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        async with async_playwright() as p:
            browser = await launch_browser(p, options.browser)
            url = f"http://127.0.0.1:{server.server_address[1]}/index.html"
            if options.suite in ("all", "content"):
                await content_checks(browser, url, report)
            if options.suite in ("all", "regression"):
                await session_checks(browser, url)
                page = await browser.new_page(viewport={"width":400, "height":860})
                errors = []
                page.on("pageerror", lambda error: errors.append(str(error)))
                await page.add_init_script("localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:true}))")
                await page.goto(f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await page.evaluate("""() => {
                  const c=SLID_SUBJECTS.find(c=>c.id==='math'), d=c.diags.find(d=>d.id==='dg6');
                  d.items=[
                    {type:'shade',title:'Зафарбуй',shape:'bar',n:10,target:3,topic:'a',sk:'frac'},
                    {type:'numline',title:'Постав точку',max:2,den:4,answer:5,topic:'b',sk:'frac'},
                    {type:'fracin',title:'Запиши дріб',expr:'1/4 + 1/6',answer:5,den:12,hideDen:true,topic:'c',sk:'ops'},
                    {type:'number',title:'Запиши число',answer:8,topic:'e',sk:'num'}];
                  d.topics=d.items.map(it=>({id:it.topic,title:it.title,kind:'cur',lessons:['g6m1l1']}));
                }""")
                await page.click('[data-diag="math"]')
                await page.click('[data-diag-go]')
                assert await page.locator('#shcount').is_hidden()
                for i in range(3):
                    await page.click(f'#shade [data-p="{i}"]')
                await page.click('#action')
                assert await page.locator('#nlval').is_hidden()
                await page.eval_on_selector('#nlrng', "e=>{e.value=5;e.dispatchEvent(new Event('input'))}")
                await page.click('#action')
                assert await page.locator('#stage .numbox .de').count() == 0
                await page.fill('#numIn', '5/12')
                await page.click('#action')
                assert await page.locator('#numSign').is_visible()
                await page.fill('#numIn', '8')
                await page.click('#action')
                assert await page.locator('#stage').inner_text() and not errors, errors
                result = await page.evaluate("JSON.parse(localStorage.getItem('slid.v1')).diag.dg6.res")
                assert all(value == 1 for value in result.values()), result
                await page.click('#pClose')
                await page.click('[data-tab="path"]')
                await page.click('[data-tab="path"]')
                await page.evaluate("""() => {
                  const c=SLID_SUBJECTS.find(c=>c.id==='math'); c.pools=c.pools.filter(p=>p.id==='pg6m1');
                  c.pools[0].items=[
                    {answerKind:'comparison',answer:'>',title:'Порівняй'},
                    {answerKind:'list',answer:[1,2,3],title:'Перелік'},
                    {answerKind:'factors',answer:'2^3 · 3',title:'Множники'},
                    {answer:3.14,tol:0.01,title:'Округли'},
                    {answer:'2/5',fractionOnly:true,reduced:true,title:'Скороти'},
                    {answer:2,unit:'яблук',unitForms:['яблуко','яблука','яблук'],srcPage:42,adapted:true,title:'Одиниці',fig:{kind:'circle',n:4,k:1}}]
                    .map((it,i)=>({...it,id:'ui'+i,lesson:'g6m1l1',lvl:1,sk:'num',src:c.pools[0].sources[0].id+' №1',type:'answer',steps:['Пояснення відповіді.']}));
                }""")
                assert not errors, errors
                assert await page.locator('button[data-subject="math"]').count(), await page.locator('body').inner_text()
                await page.click('button[data-subject="math"]')
                await page.click('[data-practice-view="math"]')
                await page.click('[data-practice-mix]')
                for answer in ['>', '3; 1; 2', '3 * 2^3', '3,145', '2/5', '2']:
                    if answer == '2/5':
                        await page.fill('#numIn', '0,4')
                        await page.click('#action')
                        assert 'звичайним дробом' in await page.locator('#dock').inner_text()
                    if answer == '3; 1; 2':
                        # list: the field turns «.» into «,» on input, so «1.2» and «1,2» are literally the same entry here
                        # (the LEARN.answerSig collision from the focus review is reachable only through the API, not the field)
                        await page.fill('#numIn', '1.2')
                        assert await page.input_value('#numIn') == '1,2', await page.input_value('#numIn')
                    await page.fill('#numIn', answer)
                    if answer == '2':
                        assert await page.locator('#answerUnit').inner_text() == 'яблука'
                        assert 'с. 42' in await page.locator('#stage').inner_text()
                        assert 'адаптовано' in await page.locator('#stage').inner_text()
                        assert await page.locator('#stage svg').count() > 0
                    await page.click('#action')
                    assert 'ok' in (await page.locator('#dock').get_attribute('class'))
                    await page.click('#action')
                assert not errors, errors
                await grade_context_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await baseline_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await baseline_compat_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await answer_format_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await divrem_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await player_qa_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await player_focus_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await attr_math_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await root_index_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await player_a11y_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await player_a11y_p3_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await diag_answer_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await sk_mark_saved_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await srs_retest_p3_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await gen_diag_srs_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await decisions_1101_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await evidence_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await half_credit_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
                await hyp_checks(browser, f"http://127.0.0.1:{server.server_address[1]}/index.html")
            await browser.close()
            print('Обрані браузерні сценарії: green')
    finally:
        server.shutdown()

async def diag_answer_checks(browser, url):
    """engine-diag-answer-kinds: answer з answerKind time / quantity / decimals у тесті рівня через справжній плеєр.
    Вердикт без фідбеку (ні fb, ні is-ok/is-bad, ні підказки form/bad, без другої спроби); OK для checkAns «ok» і «form» без
    вимоги вигляду (decimals «37»; рішення людини 2026-11-01, engine-decisions-1101); вимаганий вигляд (compound «245 см») —
    півбала з поясненням, це — half_credit_checks (engine-diag-half-credit); підказка формату під полем не видає ключа; збережений запуск ред. 1 після заміни завдання на answer (rev 2)
    відкидає старий вердикт цього завдання, решту — ні (resumeDiag у startDiag)."""
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False,
        'diagRun': {'dg6': {'0': 1, '3': 0}}, 'diagRunRev': {'dg6': 1}})
    await page.evaluate("""() => {
      const c=SLID_SUBJECTS.find(c=>c.id==='math'), d=c.diags.find(d=>d.id==='dg6');
      d.items=[
        {type:'answer',answerKind:'time',answer:'10:05',title:'Коли закінчився урок?',body:'<p>Урок почався о 9:20 і тривав 45 хв.</p>',topic:'t',sk:'meas',rev:3},
        {type:'answer',answerKind:'quantity',answer:245,units:['см','м'],form:'compound',title:'Запиши в метрах і сантиметрах',body:'<p>245 см — це скільки м і см?</p>',topic:'q',sk:'meas'},
        {type:'answer',answer:'37,0',decimals:1,title:'Температура',body:'<p>Запиши з одним знаком після коми.</p>',topic:'d',sk:'num'},
        {type:'answer',answerKind:'quantity',answer:150,units:['хв','год'],title:'Скільки хвилин?',body:'<p>2 год 30 хв — це скільки хвилин?</p>',topic:'m',sk:'meas'}];
      d.topics=d.items.map(it=>({id:it.topic,title:it.title,kind:'cur',lessons:['g6m1l1']}));
    }""")
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    # The real dg6 is revision 2 (boot already moved this run to 2: its indices 0 and 3 were not revised). The fixture's item 0
    # has rev 3 > 2: startDiag (resumeDiag, in memory; written with the next answer) drops its old verdict and asks it again,
    # item 3 (no rev) keeps its BAD — checked in storage after the first answer below.
    assert (await saved_state(page))['diagRun']['dg6'] == {'0': 1, '3': 0}
    async def no_feedback():
        assert not await page.locator('#fbTitle').inner_text() and not await page.locator('#fbText').inner_text()
        assert await page.locator('#hintHost .hint').count() == 0
        assert await page.locator('#stage .is-ok, #stage .is-bad').count() == 0
    plan = [('10:05', 1, 'time'), ('2 м 45 см', 1, 'quantity'), ('37', 1, 'form')]
    for i, (value, verdict, why) in enumerate(plan):
        item = await page.evaluate("i => SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6').items[i]", i)
        assert await page.locator('#stage h2').inner_text() == item['title'], (i, await page.locator('#stage h2').inner_text())
        help_text = await page.locator('#stage .fix').last.inner_text()
        assert help_text and await page.evaluate("([s, t]) => !t.includes(SLID_LEARN.ansText ? SLID_LEARN.ansText(s) : String(s.answer))", [item, help_text]), (i, help_text)
        if why == 'time':
            assert await page.locator('#stage .anskeys button[data-ins=":"]').count() == 1
        if why == 'form':
            assert await page.evaluate("([s, v]) => SLID_LEARN.checkAns(s, v)", [item, value]) == 'form', (i, value)
        await page.fill('#numIn', value); await page.dispatch_event('#numIn', 'input')
        await no_feedback()
        await page.click('#action')
        await no_feedback()
        st = await saved_state(page)
        if i == len(plan) - 1:   # the last open item finishes the test: the run moves to S.diag (checked below)
            assert 'dg6' not in st['diagRun'] and st['diag']['dg6']['res'][str(i)] == verdict, st['diag']
            continue
        assert st['diagRun']['dg6'][str(i)] == verdict and st['diagRunRev']['dg6'] == 3, (i, value, st['diagRun']['dg6'])
        if i == 0:   # item 0 was asked first (its rev-1 verdict was dropped), item 3 kept its BAD
            assert st['diagRun']['dg6'] == {'0': 1, '3': 0}, st['diagRun']
        if i == 0:   # resume after a reload: the answer survives, the run continues at the next item
            await page.click('#pClose'); await page.reload()
            await page.evaluate("""() => { const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
              d.items=[{type:'answer',answerKind:'time',answer:'10:05',title:'Коли закінчився урок?',topic:'t',sk:'meas',rev:3},
                {type:'answer',answerKind:'quantity',answer:245,units:['см','м'],form:'compound',title:'Запиши в метрах і сантиметрах',topic:'q',sk:'meas'},
                {type:'answer',answer:'37,0',decimals:1,title:'Температура',topic:'d',sk:'num'},
                {type:'answer',answerKind:'quantity',answer:150,units:['хв','год'],title:'Скільки хвилин?',topic:'m',sk:'meas'}];
              d.topics=d.items.map(it=>({id:it.topic,title:it.title,kind:'cur',lessons:['g6m1l1']})); }""")
            assert (await saved_state(page))['diagRun']['dg6'] == {'0': 1, '3': 0}
            await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    result = (await saved_state(page))['diag']['dg6']
    assert result['res'] == {'0': 1, '1': 1, '2': 1, '3': 0} and result['rev'] == 3, result
    assert not errors, errors
    await context.close()
    print('diag answer (time/quantity/decimals): verdicts без фідбеку, form → OK, rev 3 — green', flush=True)

async def sk_mark_saved_checks(browser, url):
    """P3-2 (рев'ю engine-learn-list-prefixes-p3), мутаційний сторож: позначку skFix app.js зберігає одразу після migrateSk,
    навіть коли нічого не перенесено. Підсумковий save() наприкінці app.js теж пише skFix, тож перевіряємо саме
    момент: між поверненням migrateSk і наступним викликом SLID_LEARN має бути setItem зі skFix (стара умова
    `if (migrateSk(S)) save()` тут не пише нічого)."""
    context = await browser.new_context()
    await context.add_init_script("""(() => {
      const log = window.__skLog = []; const set = Storage.prototype.setItem;
      Storage.prototype.setItem = function(k, v) { log.push(['set', String(v).includes('"skFix"')]); return set.call(this, k, v); };
      let L;
      Object.defineProperty(window, 'SLID_LEARN', { configurable: true, get: () => L, set: v => {
        L = new Proxy(v, { get: (o, k) => typeof o[k] === 'function' ? (...a) => { log.push(['call', k]); const r = o[k](...a); if (k === 'migrateSk') log.push(['ret', k]); return r; } : o[k] }); } });
    })()""")
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda route: route.abort())
    await page.goto(url)
    await page.evaluate("localStorage.setItem('slid.v1', JSON.stringify({grade:6, unlockAll:false, errs:[]}))")
    await page.reload()
    log = await page.evaluate("window.__skLog")
    at = next(i for i, e in enumerate(log) if e == ['ret', 'migrateSk'])
    nxt = next((i for i in range(at + 1, len(log)) if log[i][0] == 'call'), len(log))
    between = log[at + 1:nxt]
    assert ['set', True] in between, (log[max(0, at - 2):nxt + 2])
    assert (await page.evaluate("JSON.parse(localStorage.getItem('slid.v1')).skFix")) == await page.evaluate("SLID_LEARN.SK_MIGRATIONS.map(f=>f.id)")
    # already migrated profile: no extra save is needed at that point (the condition is a change, not «always»)
    await page.reload()
    log = await page.evaluate("window.__skLog")
    at = next(i for i, e in enumerate(log) if e == ['ret', 'migrateSk'])
    nxt = next((i for i in range(at + 1, len(log)) if log[i][0] == 'call'), len(log))
    assert not [e for e in log[at + 1:nxt] if e[0] == 'set'], log[at:nxt + 1]
    assert not errors, errors
    await context.close()
    print('skFix: позначку збережено одразу після migrateSk — green', flush=True)

async def open_screen_only(page, lesson, at):
    """Open screen `at` of a real lesson right after its intro (screens in between are dropped in this page only),
    so the check does not depend on how earlier screens are answered. Returns the screen."""
    await page.evaluate("""([id, at]) => {const l=SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id===id);
      l.screens=[l.screens[0], l.screens[at]];}""", [lesson, at])
    return (await open_lesson_at(page, lesson, 1))[1]

async def make_point_dead(page, lesson, at, point):
    """Fixture: turn a draggable point's bare-parameter coordinates into expressions (`(dy)+0`), so no input moves it.
    Content no longer has dead points (fix-math-dead-drag-points), the engine must still treat them right.
    Fails loudly when nothing was rewritten (point gone, or moved to `at: [...]`), so a later assertion is not the first clue."""
    changed = await page.evaluate("""([id, at, pt]) => {const l=SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id===id);
      const P=l?.screens?.[at]?.lab?.points?.[pt]; if (!P) return -1; let n=0;
      for (const k of ['x','y']) if (typeof P[k]==='string') { P[k]='('+P[k]+')+0'; n++; } return n;}""", [lesson, at, point])
    assert changed >= 1, f'make_point_dead: {lesson} screen {at} point {point}: ' + ('no such point' if changed < 0 else 'no string coordinate to rewrite (content changed?)')

async def player_a11y_p3_checks(browser, url):
    """engine-player-a11y-p3: a point that no input moves is not a Tab stop (g8m2l1#2, g8m4l1#6), the number line
    reads values instead of letters (g4m1l3#2), Home/End/PageUp/PageDown on a handle (g4m4l1#4), rotating a solid
    from the keyboard and leaving Tab after the model locks (g4m5l4#5). Screen numbers are 0-based here."""
    # Dead point D (x: "1", y: "1+dx", drag: true) next to the working point E: only E is focusable, with its own data-h.
    context, page, errors = await qa_page(browser, url, {'grade': 8, 'unlockAll': True})
    await make_point_dead(page, 'g8m4l1', 6, 'D')
    await open_screen_only(page, 'g8m4l1', 6)
    labels = await page.eval_on_selector_all('#stage .lab-h', 'hs=>hs.map(h=>[h.dataset.h,h.getAttribute("aria-label")])')
    assert len(labels) == 1 and labels[0][1].startswith('Точка E') and labels[0][0] == '1', labels
    assert await page.get_attribute('#stage .lab-stage svg', 'role') == 'group'
    await page.focus('#stage .screen')
    for _ in range(12):
        await page.keyboard.press('Tab')
        if await page.evaluate("document.activeElement.classList.contains('lab-h') || document.activeElement.id==='action'"):
            break
    assert (await page.evaluate("document.activeElement.getAttribute('aria-label')") or '').startswith('Точка E'), await active_desc(page)
    before = await page.evaluate("window.__slidLab.get()")
    await page.keyboard.press('ArrowRight')
    assert await page.evaluate("window.__slidLab.get()") != before, 'E must still move from the keyboard'
    assert await page.evaluate("document.activeElement.dataset.h") == '1', await active_desc(page)   # focus survives the re-render
    assert not errors, errors
    await context.close()
    # Only a dead point: no Tab stop at all, and the SVG is a plain image again.
    context, page, errors = await qa_page(browser, url, {'grade': 8, 'unlockAll': True})
    await make_point_dead(page, 'g8m2l1', 2, 'D')
    await open_screen_only(page, 'g8m2l1', 2)
    assert await page.locator('#stage .lab-h').count() == 0
    assert await page.get_attribute('#stage .lab-stage svg', 'role') == 'img'
    assert not errors, errors
    await context.close()
    # Number line with letter labels: «A, 3500», not «A».
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    await open_screen_only(page, 'g4m1l3', 2)
    vt = await page.eval_on_selector_all('#stage .lab-h', 'hs=>hs.map(h=>h.getAttribute("aria-valuetext"))')
    assert vt and all(', ' in v and any(ch.isdigit() for ch in v) for v in vt), vt
    assert not errors, errors
    await context.close()
    # Home/End/PageUp/PageDown on the time point (g4m4l1#4): bounds and a big step, the page does not scroll.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    scr = await open_screen_only(page, 'g4m4l1', 4)
    t = scr['lab']['params']['t']
    await page.focus('#stage .lab-h')
    y0 = await page.evaluate("document.querySelector('#stage').scrollTop + window.scrollY")
    tv = lambda: page.evaluate("window.__slidLab.get().t")
    await page.keyboard.press('Home'); assert abs(await tv() - t['min']) < 1e-6, (await tv(), t)
    await page.keyboard.press('End'); assert abs(await tv() - t['max']) < 1e-6, (await tv(), t)
    await page.keyboard.press('PageDown'); v = (await page.evaluate("window.__slidLab.get()"))['t']
    assert t['min'] <= v < t['max'] - t.get('step', 1) * 1.5, (v, t)
    await page.keyboard.press('PageUp'); assert abs(await tv() - t['max']) < 1e-6, (await tv(), t)
    assert await page.evaluate("document.querySelector('#stage').scrollTop + window.scrollY") == y0
    assert await page.evaluate("document.activeElement.classList.contains('lab-h')"), await active_desc(page)
    assert not errors, errors
    await context.close()
    # Rotating solid (graded lab g4m5l4#5): the SVG is a Tab stop with a hint, arrows turn it, after «ok» it leaves Tab.
    context, page, errors = await qa_page(browser, url, {'grade': 4, 'unlockAll': True})
    scr = await open_screen_only(page, 'g4m5l4', 5)
    svg = '#stage .lab-stage svg'
    assert await page.get_attribute(svg, 'tabindex') == '0'
    assert 'Стрілки обертають тіло' in (await page.get_attribute(svg, 'aria-label') or '')
    await page.focus(svg)
    for key in ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']:
        b = await page.inner_html(svg); await page.keyboard.press(key)
        assert await page.inner_html(svg) != b, f'{key} must rotate the solid'
        assert await page.evaluate(f"document.activeElement === document.querySelector('{svg}')"), await active_desc(page)
    b = await page.inner_html(svg); await page.keyboard.press('Home'); await page.keyboard.press('PageUp')
    assert await page.inner_html(svg) == b   # other keys leave the view alone
    sol = scr['solution']
    for pid, val in sol.items():   # the real path: sliders in the panel
        await page.eval_on_selector(f'#stage input[data-p="{pid}"]', "(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'))}", val)
    await page.click('#action')
    assert 'ok' in await page.locator('#dock').get_attribute('class'), await page.evaluate("window.__slidLab.get()")
    assert await page.get_attribute(svg, 'tabindex') == '-1'
    b = await page.inner_html(svg); await page.focus(svg); await page.keyboard.press('ArrowLeft')
    assert await page.inner_html(svg) == b, 'a locked solid must not rotate from the keyboard'
    assert not errors, errors
    await context.close()
    print('Player a11y P3: dead point off Tab (g8m4l1#6, g8m2l1#2), number-line values (g4m1l3#2), Home/End/PageUp/PageDown (g4m4l1#4), solid rotation keys and lock (g4m5l4#5): green', flush=True)

async def srs_retest_p3_checks(browser, url):
    """engine-srs-retest-p3 (P3 приймання reports/qa/math-personalization-release.md).
    P3-1: тема, чий пул з'явився після уроку (урок пройдено, запису SRS немає), після першої вдалої сесії стає в коробку 1
    (3 дні), як тема, пройдена з пулом (srsInit → box 0 → вдала сесія → box 1). Старий код давав box 0 (завтра).
    P3-2: перерваний повторний dg6 після завершеного результату видно на головній («Продовжити тест»), і з планом без кроків,
    і поряд з карткою плану з кроками; завершений тест без перерваного запуску карток не додає (як раніше)."""
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False,
        'lessons': {'g6m1l1': {'done': True}, 'g6m1l2': {'done': True}},
        'srs': {'g6m1l2': {'box': 0, 'due': DAY}}})  # g6m1l2 — як після уроку з пулом (srsInit учора); g6m1l1 — пул з'явився пізніше
    await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=Array.from({length:6},(_,i)=>({id:'s'+i,lesson:i<3?'g6m1l1':'g6m1l2',
        lvl:1,sk:'divis',src:p.sources[0].id+' №QA',type:'answer',title:'QA fixture: 2 + 3',answer:5,steps:['2 + 3 = 5.']}));}""")
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
    assert '2 теми чекають на повторення' in await page.locator('#view').inner_text(), await page.locator('#view').inner_text()
    await page.click('[data-practice-mix]')
    for _ in range(6):
        await page.fill('#numIn', '5'); await page.click('#action')
        assert 'ok' in await page.locator('#dock').get_attribute('class')
        await page.click('#action')
    end = await page.locator('#stage').inner_text()
    state = await saved_state(page)
    assert state['srs'] == {'g6m1l1': {'box': 1, 'due': '2026-10-19'}, 'g6m1l2': {'box': 1, 'due': '2026-10-19'}}, state['srs']
    assert end.count('Повернемося до теми через 3 дні') == 2, end
    assert not errors, errors
    await context.close()
    # P3-2: dg6 завершено (усе правильно → план без кроків), повторний запуск перервано після 2 відповідей.
    async def seeded(wrong):
        context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False})
        await page.evaluate("""wrong => {const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
          const res=Object.fromEntries(d.items.map((it,i)=>[i,wrong.includes(d.topics.find(t=>t.id===it.topic)?.kind)?0:1]));
          const S={grade:6,unlockAll:false,diag:{},plan:{},planByGrade:{}};
          SLID_LEARN.finishDiag(S,'math',d,res,{}); localStorage.setItem('slid.v1',JSON.stringify(S));}""", wrong)
        await page.reload()
        return context, page, errors
    for wrong, steps in (([], False), (['pre'], True)):
        context, page, errors = await seeded(wrong)
        st0 = await saved_state(page)
        has_steps = any(not x.get('done') for x in st0['plan']['math']['steps'])
        assert has_steps == steps, st0['plan']
        view = await page.locator('#view').inner_text()
        assert 'Продовжити тест' not in view and (await page.locator('#view [data-diag="math"]').count()) == 0, view[:300]  # без перерваного запуску — як раніше
        await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1'));S.diagRun={dg6:{0:1,1:0}};S.diagRunRev={dg6:2};
          localStorage.setItem('slid.v1',JSON.stringify(S));}""")
        await page.reload()
        view = await page.locator('#view').inner_text()
        assert 'Продовжити тест' in view and 'Оновимо твій план' in view, view[:400]
        assert (await page.locator('#view .plancard').count() == 1) == steps, view[:400]
        await page.click('button[data-subject="math"]')
        assert 'Продовжити тест' in await page.locator('#view').inner_text()
        await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
        await page.click('#view [data-diag="math"]')
        assert 'Продовжити тест' in await page.locator('[data-diag-go]').inner_text()
        await page.click('[data-diag-go]')
        nxt = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');return SLID_LEARN.nextItem(d,S.diagRun.dg6);}""")
        assert nxt not in (0, 1) and nxt >= 0, nxt
        await page.click('#pClose')
        st1 = await saved_state(page)
        assert st1['diag'] == st0['diag'] and st1['diagRun']['dg6'] == {'0': 1, '1': 0} and st1['plan']['math'] == st0['plan']['math'], st1
        assert not errors, errors
        await context.close()
    # P3 рев'ю engine-srs-retest-p3 (engine-practice-pool): план з помилок, тест не починали → лише картка плану, без запрошення до тесту
    # (мутація planOrDiag = pc + diagInvite(c) раніше виживала). Головна й сторінка предмета.
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False})
    await page.evaluate("""() => {const S={grade:6,unlockAll:false,diag:{},plan:{},planByGrade:{},mast:{},errs:[],skw:{}};
      SLID_LEARN.syncPlan(S,'math',[{l:'g6m1l2',why:'topic',n:2,of:3}],'2026-10-16',{grade:6});
      localStorage.setItem('slid.v1',JSON.stringify(S));}""")
    await page.reload()
    st = await saved_state(page)
    assert st['plan']['math']['steps'][0]['src'] == 'err' and not st.get('diagRun') and not (st.get('diag') or {}).get('dg6'), st
    for where in ('home', 'subject'):
        if where == 'subject':
            await page.click('button[data-subject="math"]')
        view = await page.locator('#view').inner_text()
        assert await page.locator('#view .plancard').count() == 1, (where, view[:400])
        assert await page.locator('#view [data-diag="math"]').count() == 0 and 'Продовжити тест' not in view, (where, view[:400])
    assert not errors, errors
    await context.close()
    print('SRS late pool (box 1, 3 дні як з пулом) і «Продовжити тест» повторного dg6 на головній (план без кроків / з кроками); план з помилок без тесту — без запрошення: green', flush=True)

async def gen_diag_srs_checks(browser, url):
    """engine-practice-pool. (1) Генератор gen у справжньому плеєрі тренування (fixture, не зміст): умова з підставленими числами,
    ключ набору зараховується, хибне число — ні, seen/SRS — під тим самим ключем pool:id, кожна сесія — новий prN.
    (2) Початкові коробки SRS з нового результату dg6 через справжній кінець тесту: pre ok → box 2 (7 днів), shaky → box 0;
    gap — без запису; наявний запис уроку не змінено."""
    import re as _re
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False, 'lessons': {'g6m1l1': {'done': True}}})
    fixture = """() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=[{id:'gq',lesson:'g6m1l1',lvl:1,sk:'divis',src:p.sources[0].id+' №QA',adapted:true,type:'answer',title:'Добуток {a} і {b}',
        body:'<p>Обчисли.</p>',steps:['{a} · {b} = {a*b}.'],gen:{vars:{a:{min:2,max:9},b:{min:11,max:19}},answer:'a*b'}}];}"""
    for sess in (1, 2):
        await page.evaluate(fixture)
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
        await page.click('[data-practice="g6m1l1"]')
        stage = await page.locator('#stage').inner_text()
        m = _re.search(r'Добуток (\d+) і (\d+)', stage)
        assert m and '{' not in stage, stage
        a, b = int(m.group(1)), int(m.group(2))
        assert 2 <= a <= 9 and 11 <= b <= 19, (a, b)
        await page.fill('#numIn', str(a * b + 1)); await page.click('#action')
        assert 'ok' not in (await page.locator('#dock').get_attribute('class') or '').split(), 'хибне ok'
        if not await page.locator('#numIn').is_editable():
            await page.click('#action')
        await page.fill('#numIn', str(a * b)); await page.click('#action')
        assert 'ok' in (await page.locator('#dock').get_attribute('class') or '').split(), 'ключ набору не зараховано'
        await page.click('#action')
        st = await saved_state(page)
        assert list(st['seen']) == ['pg6m1:gq'] and st['seen']['pg6m1:gq'] == 0 and st['prN'] == sess, st
        assert list(st['srs']) == ['g6m1l1'] and st['srs']['g6m1l1']['box'] == 0, st['srs']
        await page.goto(url)
    assert not errors, errors
    await context.close()
    # (2) dg6: усі відповіді, крім останньої, у перерваному запуску; складніше завдання однієї pre-теми — неправильно; останнє — «Ще не знаю»
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False})
    exp = await page.evaluate("""() => {const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      const pre=d.topics.filter(t=>t.kind==='pre'&&!t.baseline&&(t.lessons||[]).length), last=d.items.length-1;
      const sh=pre.find(t=>d.items.findLastIndex(it=>it.topic===t.id)!==last && d.items.filter(it=>it.topic===t.id).length===2);
      const res={}, seen=new Set(); d.items.forEach((it,i)=>{ res[i]= it.topic===sh.id&&seen.has(it.topic)? 0 : 1; seen.add(it.topic); });
      const run=Object.fromEntries(Object.entries(res).filter(([i])=>+i!==last)); res[last]=-1;
      const tp=SLID_LEARN.topicStatus(d,res), box={};
      for(const t of pre) for(const l of t.lessons) { const b={ok:2,shaky:0,gap:-1}[tp[t.id]]; box[l]=Math.min(box[l]??9,b); }
      // engine-diag-half-credit P3-2: cur «знайоме» — box 2, як ok (урок відкрито тестом, без запису він одразу «чекав би повторення»)
      for(const t of d.topics.filter(t=>t.kind==='cur')) for(const l of t.lessons||[]) { const b={known:2,new:-1}[tp[t.id]]; box[l]=Math.min(box[l]??9,b); }
      const S=JSON.parse(localStorage.getItem('slid.v1')); S.diagRun={dg6:run}; S.diagRunRev={dg6:SLID_LEARN.diagRev(d)};
      const keep=Object.keys(box).find(l=>box[l]===2); S.srs={[keep]:{box:4,due:'2026-12-01'}}; localStorage.setItem('slid.v1',JSON.stringify(S));
      return {box,keep,shaky:sh.id,st:tp[sh.id]};}""")
    assert exp['st'] == 'shaky', exp
    await page.reload()
    await page.click('button[data-subject="math"]')
    await page.click('#view [data-diag="math"]'); await page.click('[data-diag-go]')
    await page.click('#skip')
    st = await saved_state(page)
    assert st['diag']['dg6']['done'], st['diag']
    want = {l: ({'box': 4, 'due': '2026-12-01'} if l == exp['keep'] else {'box': b, 'due': {2: '2026-10-23', 0: '2026-10-17'}[b], 'src': 'diag', 'diag': 'dg6', 'rev': st['diag']['dg6']['rev']})
            for l, b in exp['box'].items() if b >= 0 or l == exp['keep']}
    assert st['srs'] == want, (st['srs'], want)
    assert any(v.get('box') == 0 for v in st['srs'].values()) and sum(1 for v in st['srs'].values() if v.get('box') == 2) >= 1, st['srs']
    assert not errors, errors
    await context.close()
    print('gen у плеєрі тренування (набір, хибне число — ні, ключ pool:id, prN) і початкові коробки SRS з нового dg6: green', flush=True)

async def decisions_1101_checks(browser, url):
    """engine-decisions-1101 (рішення людини 2026-11-01) через справжній плеєр і екрани.
    (1) Тест рівня: «form» без вимоги вигляду (0,75 при fractionOnly) — OK, хибний корінь (√577 при «Обчисли √576») — BAD,
    обидва без фідбеку (вимаганий вигляд і незавершений корінь, зокрема копія з умови, — півбала, half_credit_checks, engine-diag-half-credit).
    (2) Тренування pg9m6 c02: «A₁(-3; 0)» для образу точки A — ok; «B₁(-3; 0)» — form, як раніше.
    (3) dg7 через finishDiag: тема pre «ok» (g6m4l3) відкрита в тренуванні без уроку (головна, предмет, екран тренування, сесія,
    коробка 2 з тесту); shaky (g6m4l4) і gap (g6m5l1) уроків 6 класу немає; cur «знайоме» відкрито, cur без «знайоме» — закрито;
    старий профіль з планом лише з помилок (diag: null) — тренування не відкриває, як раніше."""
    # (1)
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False})
    await page.evaluate("""() => { const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      d.items=[{type:'answer',answer:24,title:'Корінь',body:'<p>Обчисли $\\\\sqrt{576}$.</p>',topic:'r',sk:'num'},
        {type:'answer',answer:'3/4',fractionOnly:true,title:'Частина класу',body:'<p>Яку частину класу становлять 18 учнів з 24? Запиши звичайним дробом.</p>',topic:'f',sk:'frac'}];
      d.topics=d.items.map(it=>({id:it.topic,title:it.title,kind:'cur',lessons:['g6m1l1']})); }""")
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    for value, want in (('√577', 'bad'), ('0,75', 'form')):
        item = await page.evaluate("t => SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6').items.find(it=>it.title===t)", await page.locator('#stage h2').inner_text())
        assert await page.evaluate("([s, v]) => SLID_LEARN.checkAns(s, v)", [item, value]) == want, (value, item)
        await page.fill('#numIn', value); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
        assert not await page.locator('#fbTitle').inner_text() and await page.locator('#hintHost .hint').count() == 0
    res = (await saved_state(page))['diag']['dg6']['res']
    assert res == {'0': 0, '1': 1}, res
    assert not errors, errors
    await context.close()
    # (2)
    context, page, errors = await qa_page(browser, url, {'grade': 9, 'unlockAll': True})
    async def practice_c02(value):
        await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg9m6');c.pools=[p];p.items=p.items.filter(it=>it.id==='c02');}""")
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
        await page.click(f'#view [data-practice="{await page.evaluate("() => SLID_SUBJECTS.find(c=>c.id===\'math\').pools[0].items[0].lesson")}"]')
        assert 'образ точки' in await page.locator('#stage').inner_text()
        await page.fill('#numIn', value); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
        dock = (await page.locator('#dock').get_attribute('class') or '').split()
        hint = await page.locator('#dock').inner_text()
        await page.goto(url)
        return 'ok' in dock, hint
    ok, hint = await practice_c02('A₁(-3; 0)')
    assert ok, hint
    ok, hint = await practice_c02('B₁(-3; 0)')
    assert not ok and 'Назву з індексом чи штрихом' in hint, hint
    assert not errors, errors
    await context.close()
    # (3)
    context, page, errors = await qa_page(browser, url, {'grade': 7, 'unlockAll': False})
    exp = await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),d=c.diags.find(d=>d.id==='dg7');
      const seen=new Set(), res={};
      d.items.forEach((it,i)=>{ const second=seen.has(it.topic); seen.add(it.topic);
        res[i]= it.topic==='sign-mul'? (second?0:1) : it.topic==='brackets'? 0 : 1; });
      const cur=d.topics.filter(t=>t.kind==='cur'), off=cur[cur.length-1];
      d.items.forEach((it,i)=>{ if(it.topic===off.id) res[i]=0; });
      const S={grade:7,unlockAll:false,diag:{},plan:{},planByGrade:{},lessons:{},srs:{},mast:{},errs:[],skw:{}};
      const secs=c.sections, has=id=>{const s=secs.find(s=>(s.lessons||[]).some(l=>l.id===id)); return !!s && s.grade<=7;};
      const plan=SLID_LEARN.finishDiag(S,'math',d,res,{grade:7,diags:c.diags,day:'2026-10-16',hasLesson:has});
      localStorage.setItem('slid.v1',JSON.stringify(S));
      const pooled=new Set(c.pools.flatMap(p=>p.items.map(it=>it.lesson)));
      return {topics:plan.topics, known:plan.known.filter(l=>pooled.has(l)), off:off.lessons.filter(l=>pooled.has(l)&&!plan.known.includes(l)), srs:S.srs};}""")
    assert exp['topics']['sign-add'] == 'ok' and exp['topics']['sign-mul'] == 'shaky' and exp['topics']['brackets'] == 'gap', exp['topics']
    assert exp['srs']['g6m4l3']['box'] == 2 and exp['known'] and exp['off'], exp
    await page.reload()
    assert await page.locator('#view [data-practice-view="math"]').count() == 1, 'головна: тренування не видно'
    await page.click('button[data-subject="math"]')
    entry = await page.locator('[data-practice-view="math"]').inner_text()
    assert 'Відкрито' in entry, entry
    await page.click('[data-practice-view="math"]')
    for l in ['g6m4l3'] + exp['known']:
        assert await page.locator(f'#view [data-practice="{l}"]').count() == 1, l
    for l in ('g6m4l4', 'g6m5l1'):
        assert await page.locator(f'#view [data-practice="{l}"]').count() == 0, l
    for l in exp['off']:
        assert await page.locator(f'#view [data-practice="{l}"]').count() == 0, l
    assert await page.locator('#view [data-practice="g6m4l3"] .strength i.on').count() == 3
    await page.click('#view [data-practice="g6m4l3"]')
    stage = await page.locator('#stage').inner_text()
    assert 'тренування' in stage.lower() and await page.locator('#numIn').count() == 1, stage[:300]
    await page.click('#pClose')
    st = await saved_state(page)
    assert not st['lessons'].get('g6m4l3') and st['srs']['g6m4l3']['box'] == 2 and st['grade'] == 7, st['srs']
    assert not errors, errors
    await context.close()
    # старий профіль: план лише з помилок, тесту не було — нічого не відкрито
    context, page, errors = await qa_page(browser, url, {'grade': 7, 'unlockAll': False,
        'plan': {'math': {'diag': None, 'steps': [{'l': 'g6m4l3', 'src': 'err'}], 'known': []}}})
    assert await page.locator('#view [data-practice-view="math"]').count() == 0
    assert await page.evaluate("""() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),S=JSON.parse(localStorage.getItem('slid.v1'));
      return SLID_LEARN.practiceItems(S,c,{grade:7,diags:c.diags,day:'2026-10-16'}).some(it=>it.lesson==='g6m4l3');}""") is False
    assert not errors, errors
    await context.close()
    print('decisions-1101: form без вимоги вигляду у тесті → OK (хибний √ — BAD), A₁ для образу A, тренування тем ok з тесту без уроку (старий профіль — як раніше): green', flush=True)

async def half_credit_checks(browser, url):
    """engine-diag-half-credit (рішення людини й методичне правило 2026-11-01) через справжній плеєр тесту рівня.
    Вимаганий умовою вигляд не показано (6/8 при «нескоротним дробом», «245 см» при form:'compound') чи корінь не обчислено (√576 при 24) — півбала (0,5):
    вердикт збережено одразу, короткий екран-пояснення (dock info, текст formHint), поле заблоковано, без «Ще не знаю» й без
    другої спроби; закритий на поясненні тест продовжується з наступного завдання. HALF — не провал теми: складніше завдання
    тієї самої теми показують. Інший запис без вимоги вигляду (37 при decimals 1) — OK, хибна відповідь — BAD, обидва без
    фідбеку. Підсумок: тема з HALF — «хитко» (shaky), cur з HALF — не «знайоме». Старий збережений результат (1/0/-1) читається."""
    fixture = """() => { const c=SLID_SUBJECTS.find(c=>c.id==='math'), d=c.diags.find(d=>d.id==='dg6'), pre=d.topics.find(t=>t.kind==='pre');
      d.items=[{type:'answer',answer:5,title:'База',body:'<p>Скільки буде $2 + 3$?</p>',topic:'g',sk:'num'},
        {type:'answer',answer:'3/4',reduced:true,title:'Частина класу',body:'<p>Яку частину класу становлять 18 учнів з 24? Запиши нескоротним дробом.</p>',topic:'f',sk:'frac'},
        {type:'answer',answer:12,title:'Складніше',body:'<p>Скільки буде $3 · 4$?</p>',topic:'g',sk:'num'},
        {type:'answer',answer:24,title:'Сторона квадрата',body:'<p>Площа квадрата — 576 см². Знайди його сторону в сантиметрах.</p>',topic:'r',sk:'num'},
        {type:'answer',answer:'2/3',reduced:true,title:'Ще дріб',body:'<p>Скороти дріб $8/12$.</p>',topic:'f',sk:'frac'},
        {type:'answer',answer:'37,0',decimals:1,title:'Температура',body:'<p>Запиши з одним знаком після коми: 37 градусів.</p>',topic:'d',sk:'num'},
        {type:'answer',answerKind:'quantity',answer:245,units:['см','м'],form:'compound',title:'Метри й сантиметри',body:'<p>245 см — це скільки м і см?</p>',topic:'q',sk:'meas'},
        {type:'answer',answer:24,title:'Корінь',body:'<p>Обчисли $\\\\sqrt{576}$.</p>',topic:'c',sk:'num'}];
      d.topics=[{id:'g',title:'Додавання',kind:'pre',lessons:pre.lessons},{id:'f',title:'Дроби',kind:'pre',lessons:pre.lessons},{id:'r',title:'Корінь',kind:'pre',lessons:pre.lessons},
        {id:'d',title:'Десяткові',kind:'cur',lessons:['g6m1l1']},{id:'q',title:'Величини',kind:'cur',lessons:['g6m1l1']},{id:'c',title:'Обчислення',kind:'cur',lessons:['g6m1l2']}]; }"""
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False})
    await page.evaluate(fixture)
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    item = lambda t: page.evaluate("t => SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6').items.find(it=>it.title===t)", t)
    async def answer(title, value):
        assert await page.locator('#stage h2').inner_text() == title, (title, await page.locator('#stage h2').inner_text())
        await page.fill('#numIn', value); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
    async def half_screen(title, value, idx):
        it = await item(title)
        assert await page.evaluate("([s, v]) => SLID_LEARN.diagVerdict(s, v)", [it, value]) == 0.5, (title, value)
        assert 'info' in (await page.locator('#dock').get_attribute('class') or '').split()
        assert await page.locator('#fbTitle').inner_text() == 'Зараховано півбала.'
        assert await page.locator('#fbText').inner_text() == await page.evaluate("([s, v]) => SLID_LEARN.formHint(s, v)", [it, value])
        assert await page.locator('#stage .is-ok, #stage .is-bad').count() == 0 and await page.locator('#hintHost .hint').count() == 0
        assert await page.locator('#numIn').is_disabled() and await page.locator('#skip').is_hidden()
        assert await page.locator('#action').inner_text() == 'Далі' and await page.locator('#action').is_enabled()
        assert (await saved_state(page))['diagRun']['dg6'][str(idx)] == 0.5   # saved at once, before «Далі»
    async def no_feedback():
        assert not await page.locator('#fbTitle').inner_text() and not await page.locator('#fbText').inner_text()
        assert await page.locator('#stage .is-ok, #stage .is-bad').count() == 0 and await page.locator('#hintHost .hint').count() == 0
    await answer('База', '4'); await no_feedback()
    await answer('Частина класу', '6/8'); await half_screen('Частина класу', '6/8', 1)
    # «Далі» goes to the next item of the test (LEARN.nextItem), not to the next screen: «Складніше» of the failed topic «g» is skipped
    await page.click('#action')
    await answer('Сторона квадрата', '√576'); await half_screen('Сторона квадрата', '√576', 3)
    # closed on the explanation: no second attempt — the test resumes at the next item
    await page.click('#pClose'); await page.reload(); await page.evaluate(fixture)
    await page.click('[data-diag="math"]'); await page.click('[data-diag-go]')
    # HALF on the base item of «f» is not a failed topic: its harder item is asked
    await answer('Ще дріб', '2/3'); await no_feedback()
    await answer('Температура', '37'); await no_feedback()
    # compound (form:'compound'): «245 см» — значення правильне, вимаганого «м і см» немає — півбала з поясненням
    await answer('Метри й сантиметри', '245 см'); await half_screen('Метри й сантиметри', '245 см', 6)
    assert 'м і см' in await page.locator('#fbText').inner_text()
    await page.click('#action')
    # дослівна копія кореня з умови — теж півбала з поясненням (рішення людини 2026-11-01); «Далі» завершує тест
    await answer('Корінь', '√576'); await half_screen('Корінь', '√576', 7)
    assert 'Це вираз з умови' in await page.locator('#fbText').inner_text()
    await page.click('#action')
    st = await saved_state(page)
    assert st['diag']['dg6']['res'] == {'0': 0, '1': 0.5, '3': 0.5, '4': 1, '5': 1, '6': 0.5, '7': 0.5}, st['diag']['dg6']
    assert st['diag']['dg6']['topics'] == {'g': 'gap', 'f': 'shaky', 'r': 'shaky', 'd': 'known', 'q': 'new', 'c': 'new'}, st['diag']['dg6']['topics']
    assert await page.locator('#stage .endhero').count() == 1
    # Evidence V2 (docs/EVIDENCE.md): HALF — подія answer з verdict "half" і res 0,5, одна на завдання (без другої спроби)
    ev = await page.evaluate("async () => window.SLID_EVIDENCE ? (await SLID_EVIDENCE.export()).events.filter(e => e.type === 'answer' && e.d.mode === 'diag').map(e => e.d) : null")
    assert ev, 'app/evidence.js не завантажено або журнал порожній'
    if True:
        got = [(e['i'], e['verdict'], e.get('res')) for e in ev]
        assert got == [(0, 'bad', 0), (1, 'half', 0.5), (3, 'half', 0.5), (4, 'ok', 1), (5, 'form', 1), (6, 'half', 0.5), (7, 'half', 0.5)], got
        assert next(e for e in ev if e['i'] == 1)['raw'] == '6/8'
    assert not errors, errors
    await context.close()
    # an old saved result (verdicts 1/0/-1, no HALF) reads as before
    context, page, errors = await qa_page(browser, url, {'grade': 6, 'unlockAll': False, 'diag': {'dg6': {'done': True, 'date': '2026-10-01', 'res': {'0': 1, '1': 0, '2': -1}}}})
    got = await page.evaluate("""() => { const c=SLID_SUBJECTS.find(c=>c.id==='math'), d=c.diags.find(d=>d.id==='dg6'), S=JSON.parse(localStorage.getItem('slid.v1'));
      const p=SLID_LEARN.planFor(S,'math',{grade:6,diags:c.diags}); return [JSON.stringify(p.topics), JSON.stringify(SLID_LEARN.topicStatus(d,{0:1,1:0,2:-1}))]; }""")
    assert got[0] == got[1], got
    await page.click('button[data-subject="math"]')
    assert not errors, errors
    await context.close()
    print('half-credit: півбала з поясненням (вимаганий вигляд, √ не обчислено), далі наступне завдання; старий res — як раніше: green', flush=True)

async def evidence_checks(browser, url):
    """engine-evidence-v2 (docs/EVIDENCE.md): журнал подій у IndexedDB. Той самий маршрут (тренування з помилкою й підказкою,
    тест рівня dg6 з «Ще не знаю», перший крок плану — справжній урок, перемикання класу 6 → 7 → 6) у трьох режимах:
    з IndexedDB, без неї (доступ кидає SecurityError, як у приватному режимі) і без модуля app/evidence.js. Стан slid.v1
    (record/detect: mast, errs, skw; SRS, seen, план, тест) — однаковий у всіх трьох, помилок сторінки немає. З IndexedDB:
    схема подій, спроби (номер, підказка, вердикт, сирий запис, час), події srs/plan/grade, без імені; журнал переживає
    перезавантаження (seq продовжується, нова sid). Офлайн: зі service worker cv = VERSION із sw.js, після set_offline і
    перезавантаження з кешу події пишуться (net: 0) і лишаються після ще одного перезавантаження."""
    import re as _re
    seed = {'name': 'Тарас', 'grade': 6, 'unlockAll': False, 'lessons': {'g6m1l1': {'done': True}}}
    freeze = """{const D=Date;window.Date=class extends D {constructor(...a){super(...(a.length?a:['2026-10-16T12:00:00Z']));}
      static now(){return new D('2026-10-16T12:00:00Z').getTime();}};}"""
    no_idb = "Object.defineProperty(window,'indexedDB',{configurable:true,get(){throw new DOMException('blocked','SecurityError');}});"
    fixture = """() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=[0,1,2].map(i=>({id:'ev'+i,lesson:'g6m1l1',lvl:1,sk:'divis',src:p.sources[0].id+' №QA',type:'answer',title:'QA: 2 + 3',answer:5,
        hint:'Додай два і три.',steps:['2 + 3 = 5.']}));
      // рев'ю P3-4: два завдання dg6 — типу answer (у справжніх тестах рівня його ще немає), щоб журнал бачив bad і form
      const d=c.diags.find(d=>d.id==='dg6');
      d.items[0]={...d.items[0],type:'answer',answer:8,title:'QA: 4 + 4'};
      d.items[3]={...d.items[3],type:'answer',answer:3.5,decimals:2,title:'QA: 7 : 2 (до сотих)'};}"""
    async def screen_of(page, lid):
        return await page.evaluate("id=>SLID_SUBJECTS.find(c=>c.id==='math').sections.flatMap(s=>s.lessons||[]).find(l=>l.id===id).screens", lid)
    async def route(mode):
        context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='block')
        await context.add_init_script(freeze)
        if mode == 'noidb':
            await context.add_init_script(no_idb)
        page = await context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
        if mode == 'nomodule':
            await page.route('**/app/evidence.js', lambda r: r.abort())
        await page.goto(url)
        await page.evaluate('s => localStorage.setItem("slid.v1",JSON.stringify(s))', seed)
        await page.reload()
        page.set_default_timeout(7000)
        assert await page.evaluate("!!window.SLID_EVIDENCE") == (mode != 'nomodule'), mode
        # 1) тренування: перша вправа — хибна відповідь, підказка, друга спроба правильна
        await page.evaluate(fixture)
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice="g6m1l1"]')
        for i in range(3):
            if i == 0:
                await page.fill('#numIn', '99'); await page.click('#action')
                assert 'Підказка:' in await page.locator('#hintHost').inner_text()
            await page.fill('#numIn', '5'); await page.click('#action'); await page.click('#action')
        await page.click('#action')   # «Готово»
        # 2) тест рівня dg6: чотири відповіді (перша — хибна, четверта — правильне значення в неналежному записі: form → OK),
        #    далі «Ще не знаю» до кінця. Остання спроба тренування — ok: застарілий lastAns дав би ok замість bad (рев'ю P3-4)
        await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
        await page.click('button[data-subject="math"]')
        await page.click('#view [data-diag="math"]'); await page.click('[data-diag-go]')
        k, asked = 0, []
        while await page.locator('#skip').is_visible():
            i_item = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
              const i=SLID_LEARN.nextItem(d,(S.diagRun||{}).dg6||{}); return [i, d.items[i]];}""")
            typed = {0: ('99', 'bad'), 3: ('3,5', 'form')}.get(i_item[0]) if k < 4 else None
            asked.append((i_item[0], i_item[1]['type'], i_item[1].get('topic'), typed[1] if typed else 'ok' if k < 4 else 'skip'))
            if typed:
                assert i_item[1]['type'] == 'answer', i_item
                await page.fill('#numIn', typed[0]); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
            elif k < 4:
                await answer_context_screen(page, i_item[1]); await page.click('#action')
            else:
                await page.click('#skip')
            k += 1
        assert [a[3] for a in asked[:4]] == ['bad', 'ok', 'ok', 'form'], asked[:4]
        # 3) перший крок плану — справжній урок, усе правильно
        lid = await page.locator('#stage [data-lesson]').first.get_attribute('data-lesson')
        await page.locator('#stage [data-lesson]').first.click()
        for scr in await screen_of(page, lid):
            if scr['type'] == 'slider':
                await page.eval_on_selector('#rng', "(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'))}", scr['answer'])
            else:
                await answer_context_screen(page, scr)
            await page.click('#action')
            if scr['type'] not in ('intro', 'info', 'explore'):
                await page.click('#action')
        assert await page.locator('.bigstars').count() == 1, (lid, await page.locator('#stage').inner_text())
        await page.click('#action')
        # 4) клас 6 → 7 → 6
        for g in (7, 6):
            await page.click('[data-tab="profile"]'); await page.click(f'[data-grade="{g}"]')
        await page.click('[data-tab="path"]')
        state = await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")
        return context, page, errors, state, lid, asked
    states = {}
    for mode in ('idb', 'noidb', 'nomodule'):
        context, page, errors, state, lid, asked = await route(mode)
        assert not errors, (mode, errors)
        states[mode] = state
        if mode == 'noidb':
            assert await page.evaluate("SLID_EVIDENCE.enabled") is False
            st = await page.evaluate("SLID_EVIDENCE.stats()")
            assert st['enabled'] is False and st['queued'] == 0, st
            assert (await page.evaluate("SLID_EVIDENCE.export()"))['events'] == []
        if mode == 'idb':
            data = await page.evaluate("SLID_EVIDENCE.export()")
            ev = data['events']
            types = [e['type'] for e in ev]
            for t in ('boot', 'practice_start', 'screen', 'answer', 'practice_end', 'srs', 'diag_start', 'diag_end', 'plan', 'lesson_start', 'lesson_end', 'grade', 'close'):
                assert t in types, (t, sorted(set(types)))
            seqs = [e['seq'] for e in ev]
            assert seqs == list(range(1, len(ev) + 1)), seqs[:20]
            for e in ev:
                assert e['v'] == 1 and e['synced'] == 0 and e['did'] and e['pid'] and e['sid'] and isinstance(e['t'], int) and isinstance(e['ms'], int), e
                assert e['cv'] is None, e   # service worker заблоковано
            assert 'Тарас' not in json.dumps(data, ensure_ascii=False), 'ім\'я потрапило в журнал'
            pr = [e['d'] for e in ev if e['type'] == 'answer' and e['d']['mode'] == 'practice']
            assert [(a['try'], a['verdict'], a['raw'], a['hint'], a['final']) for a in pr[:3]] == [(1, 'bad', '99', False, False), (2, 'ok', '5', True, True), (1, 'ok', '5', False, True)], pr[:3]
            assert all(a['key'].startswith('pg6m1:ev') and a['l'] == 'g6m1l1' and a['type'] == 'answer' and a['sk'] == 'divis' for a in pr), pr
            assert all(isinstance(e.get('dt'), int) and e['dt'] >= 0 for e in ev if e['type'] == 'answer'), 'dt'
            dg = [e['d'] for e in ev if e['type'] == 'answer' and e['d']['mode'] == 'diag']
            assert dg and all(a['l'] == 'dg6' and a['hint'] is False for a in dg), dg[:2]
            assert [a['verdict'] for a in dg].count('skip') == len(dg) - 4 and all(a['res'] == -1 for a in dg if a['verdict'] == 'skip'), [a['verdict'] for a in dg]
            # кожна спроба тесту — про те завдання, яке дитина бачила, з її вердиктом
            assert [(a['i'], a['type'], a['topic'], a['verdict']) for a in dg] == asked, ([(a['i'], a['verdict']) for a in dg], asked)
            assert [(a['verdict'], a['res']) for a in dg[:4]] == [('bad', 0), ('ok', 1), ('ok', 1), ('form', 1)] and [dg[0]['raw'], dg[3]['raw']] == ['99', '3,5'], dg[:4]
            assert not [e for e in ev if isinstance(e['d'], dict) and e['d'].get('trunc')], 'обрізані події'
            assert (await page.evaluate("SLID_EVIDENCE.stats()"))['truncated'] == 0
            de = next(e['d'] for e in ev if e['type'] == 'diag_end')
            assert de['diag'] == 'dg6' and de['res'] == state['diag']['dg6']['res'] and de['topics'] == state['diag']['dg6']['topics'], de
            le = next(e['d'] for e in ev if e['type'] == 'lesson_end')
            assert le['l'] == lid and le['graded'] == le['first'] and le['acc'] == 1, le
            g = [e['d'] for e in ev if e['type'] == 'grade']
            assert g == [{'from': 6, 'to': 7}, {'from': 7, 'to': 6}], g
            srs_by = [e for e in ev if e['type'] == 'srs']
            assert all(1 <= e['d']['part'] <= e['d']['parts'] for e in srs_by), [e['d'] for e in srs_by]
            assert all(isinstance(e.get('by'), int) for e in srs_by), srs_by
            last_srs = {}
            for e in srs_by:
                for ch in e['d']['ch']:
                    last_srs[ch['l']] = ch['to']
            assert all(last_srs[l] == state['srs'].get(l) for l in last_srs), (last_srs, state['srs'])
            # перезавантаження: журнал на місці, seq продовжується, нова сесія
            await page.reload()
            again = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
            assert [e['seq'] for e in again[:len(ev)]] == seqs and again[len(ev)]['type'] == 'boot' and again[len(ev)]['seq'] == len(ev) + 1, again[len(ev):len(ev) + 2]
            assert again[len(ev)]['sid'] != ev[-1]['sid'] and again[len(ev)]['did'] == ev[0]['did'], 'sid/did'
            st = await page.evaluate("SLID_EVIDENCE.stats()")
            assert st['enabled'] and st['count'] == len(again) and st['unsynced'] == len(again) and st['dropped'] == 0, st
            assert await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))") == state, 'перезавантаження змінило стан'
            # подія перед переходом зі сторінки (рев'ю P3-1): транзакція в pagehide не встигає, рятує синхронна копія черги
            n0 = len(again)
            await page.evaluate("SLID_EVIDENCE.flush()")
            await page.evaluate("SLID_EVIDENCE.log('qa_lastgasp', {x: 1})")
            await page.goto('about:blank')
            await page.goto(url)
            after = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
            gasp = [e for e in after if e['type'] == 'qa_lastgasp']
            assert len(gasp) == 1 and gasp[0]['d'] == {'x': 1}, [e['type'] for e in after[n0 - 2:]]
            assert await page.evaluate("localStorage.getItem(SLID_EVIDENCE._core.PENDING)") is None
            assert len({e['eid'] for e in after}) == len(after) and [e['seq'] for e in after] == list(range(1, len(after) + 1)), 'дублікати/пропуски seq'
            assert await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))") == state, 'відновлення черги змінило стан'
            # справжня IndexedDB: ротація з малим лімітом, seq у новому екземплярі, дубль eid (окрема база, не журнал)
            rot = await page.evaluate("""async () => { const K=SLID_EVIDENCE._core, name='slid-evidence-qa', lim={...SLID_EVIDENCE.LIMITS,max:10,keep:6,batch:4};
              await new Promise(ok=>{ const r=indexedDB.deleteDatabase(name); r.onsuccess=r.onerror=r.onblocked=ok; });
              const J=K.create(K.idbBackend(indexedDB,name),K.env,lim); for(let i=0;i<25;i++) J.log('screen',{i}); await J.flush(); await J.flush();
              const a=(await J.export()).events.map(e=>e.seq);
              const J2=K.create(K.idbBackend(indexedDB,name),K.env,lim); J2.log('boot',{}); await J2.flush(); await J2.flush();
              const b=(await J2.export()).events;
              const dup=K.idbBackend(indexedDB,name); await dup.init(); const added=await dup.append([{...b[b.length-1], seq:undefined}]);
              const c=(await J2.export()).events.length;
              return {a, b:b.map(e=>e.seq), added, c, cb:b.length}; }""")
            assert 6 <= len(rot['a']) <= 10 and rot['a'] == list(range(26 - len(rot['a']), 26)), rot
            assert rot['b'][-1] == 26 and rot['added'] == 0 and rot['c'] == rot['cb'], rot
        await context.close()
    assert states['idb'] == states['noidb'] == states['nomodule'], [k for k in states['idb'] if not (states['idb'][k] == states['noidb'].get(k) == states['nomodule'].get(k))]
    assert states['idb']['errs'] and states['idb']['mast'] and states['idb']['srs'] and states['idb']['plan']['math']['steps'], 'маршрут не зачепив record/SRS/план'
    # офлайн: service worker, cv = VERSION, події пишуться без мережі й переживають перезавантаження
    ver = _re.search(r'VERSION = "(\w+)"', (ROOT / 'sw.js').read_text()).group(1)
    context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='allow')
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
    page.set_default_timeout(15000)
    await page.goto(url)
    await page.evaluate("navigator.serviceWorker.ready")
    await page.reload()
    await page.wait_for_function("!!navigator.serviceWorker.controller")
    await page.evaluate('s => localStorage.setItem("slid.v1",JSON.stringify(s))', seed)
    await page.reload()
    await page.wait_for_function("!!navigator.serviceWorker.controller")
    await page.evaluate("SLID_EVIDENCE.flush()")
    on = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
    assert on and on[-1]['cv'] == ver and on[-1]['net'] == 1, (on[-1:], ver)
    await context.set_offline(True)
    await page.reload()
    assert await page.evaluate("navigator.onLine") is False
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]')
    await page.locator('[data-practice]').first.click()
    await page.click('#pClose'); await page.click('#pClose')
    await page.evaluate("SLID_EVIDENCE.flush()")
    off = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
    new = off[len(on):]
    assert {e['type'] for e in new} >= {'boot', 'practice_start', 'screen', 'close'} and all(e['net'] == 0 and e['cv'] == ver for e in new), new
    await page.reload()
    kept = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
    assert [e['seq'] for e in kept[:len(off)]] == [e['seq'] for e in off] and kept[len(off)]['type'] == 'boot', 'офлайн-події не збереглися'
    assert not errors, errors
    await context.close()
    # «Пізніше» тесту рівня (рішення людини 2026-11-01): подія diag_later; localStorage переповнено копією черги журналу —
    # slid.v1 все одно зберігається, ключ slid.evidence.pending поступається (рев'ю P3-6)
    context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='block')
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
    await page.goto(url)
    await page.evaluate('s => localStorage.setItem("slid.v1",JSON.stringify(s))', seed)
    await page.reload()
    page.set_default_timeout(7000)
    await page.click('button[data-subject="math"]'); await page.click('#view [data-diag="math"]'); await page.click('[data-diag-go]')
    await page.click('#skip')
    i_item = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      return d.items[SLID_LEARN.nextItem(d,(S.diagRun||{}).dg6||{})];}""")
    await answer_context_screen(page, i_item); await page.click('#action')
    await page.click('#pClose')   # тест рівня закривається одним ✕ (прогрес збережено)
    assert len((await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))"))['diagRun']['dg6']) == 2
    await page.evaluate("SLID_EVIDENCE.flush()")
    # сторонні ключі того самого origin резерв save() не чіпає: він видаляє лише slid.evidence.pending, не localStorage.clear() (рев'ю P3-7)
    await page.evaluate("localStorage.setItem('qa.foreign', 'keep')")
    filled = await page.evaluate("""() => { const K=SLID_EVIDENCE._core.PENDING; let lo=0, hi=12e6;
      while (hi - lo > 1) { const mid=Math.floor((lo + hi) / 2); try { localStorage.setItem(K, '"' + 'x'.repeat(mid) + '"'); lo = mid; } catch (e) { hi = mid; } }
      localStorage.setItem(K, '"' + 'x'.repeat(lo) + '"');
      let full = false; try { localStorage.setItem('slid.qa', 'xx'); } catch (e) { full = true; } localStorage.removeItem('slid.qa'); return [lo, full]; }""")
    assert filled[1] and filled[0] > 100000, filled
    await page.click('[data-diag-skip="dg6"]')
    st = await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")
    assert st['diagSkip'] == {'dg6': True} and len(st['diagRun']['dg6']) == 2, 'переповнене сховище: slid.v1 не збережено'
    assert await page.evaluate("localStorage.getItem(SLID_EVIDENCE._core.PENDING)") is None
    assert await page.evaluate("localStorage.getItem('qa.foreign')") == 'keep', 'резерв save() видалив сторонній ключ localStorage'
    later = [e['d'] for e in (await page.evaluate("SLID_EVIDENCE.export()"))['events'] if e['type'] == 'diag_later']
    assert later == [{'c': 'math', 'diag': 'dg6', 'answered': 2, 'skipped': 1}], later
    await page.evaluate("SLID_EVIDENCE.log('qa_after', {}); SLID_EVIDENCE.stash()")   # місце знову є: копія черги працює
    assert len(await page.evaluate("JSON.parse(localStorage.getItem(SLID_EVIDENCE._core.PENDING))")) >= 1
    await page.evaluate("SLID_EVIDENCE.flush()")
    assert await page.evaluate("localStorage.getItem(SLID_EVIDENCE._core.PENDING)") is None, 'записане не прибрано з копії черги'
    assert not errors, errors
    await context.close()
    print(f'Журнал подій (IndexedDB): схема, спроби, srs/plan/grade, без імені, перезавантаження, офлайн (cv {ver}); стан однаковий з журналом, без IndexedDB і без модуля; «Пізніше» і переповнене сховище: green', flush=True)

async def hyp_checks(browser, url):
    """engine-hyp-e2-shadow (docs/design/diag-hypothesis-math.md §2.3, §3.3): тіньові гіпотези app/hyp.js. Той самий маршрут на
    справжньому змісті (урок g6m1l1 з двома помилками → тренування з помилками → нове тренування, перша спроба хибна й вкладку
    перезавантажено → тест рівня dg6 з хибними відповідями й «Ще не знаю» → наступного дня тренування) у чотирьох режимах: з hyp.js,
    без нього, без IndexedDB і без app/evidence.js. slid.v1 і тексти доку однакові в усіх; slid.hyp — окремий ключ (без hyp.js його
    немає). З IndexedDB події hyp_* застосунку збігаються з tools/hyp-replay.mjs на експорті того самого журналу (окрім hid/prb і
    persist), відкладене відкриття переживає перезавантаження, hyp_* не змінюють by. Окремо: form/badHint — тексти доку однакові з
    hyp.js і без, у журналі fc і hyp_fmt; переповнене сховище — slid.v1 записано, slid.hyp очищено, далі persist: 0; «Скинути
    прогрес» — hyp_close reset зі старим pid до reset, ключ видалено; офлайн — hyp.js із кешу service worker."""
    import tempfile
    freeze = """{const D=Date, at=(()=>{ try { return localStorage.getItem('qa.now') || '2026-10-16T12:00:00Z'; } catch (e) { return '2026-10-16T12:00:00Z'; } })(), T=new D(at).getTime();
      window.Date=class extends D {constructor(...a){super(...(a.length?a:[T]));} static now(){return T;}};}"""
    no_idb = "Object.defineProperty(window,'indexedDB',{configurable:true,get(){throw new DOMException('blocked','SecurityError');}});"
    items_js = """() => { const m=SLID_SUBJECTS.find(c=>c.id==='math'), out={};
      for (const p of m.pools) for (const it of p.items) (out[it.title] ||= []).push({...it, key:p.id+':'+it.id}); return out; }"""
    async def dock(page):
        return await page.evaluate("[document.querySelector('#fbTitle').innerHTML, document.querySelector('#fbText').innerHTML]")
    async def current(page, by_title):
        title = (await page.locator('#stage h2').first.inner_text()).strip()
        found = by_title.get(title)
        assert found and len(found) == 1, (title, found and len(found))
        return found[0]
    async def typed(page, value):
        await page.fill('#numIn', value); await page.dispatch_event('#numIn', 'input')
    async def practice(page, by_title, wrong, docks, n=None):
        """wrong(k, item) → список хибних записів перед правильним (≤ 2: друга хибна — фінальна)."""
        k = 0
        while await page.locator('#stage h2').count() and (n is None or k < n):
            it = await current(page, by_title)
            ws = wrong(k, it)
            for j, w in enumerate(ws):
                await typed(page, w); await page.click('#action'); docks.append(await dock(page))
            if len(ws) < 2:
                await answer_context_screen(page, it); await page.click('#action'); docks.append(await dock(page))
            await page.click('#action'); k += 1
        return k
    async def route(mode):
        context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='block')
        await context.add_init_script(freeze)
        if mode == 'noidb':
            await context.add_init_script(no_idb)
        page = await context.new_page()
        errors, docks = [], []
        page.on('pageerror', lambda error: errors.append(str(error)))
        await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
        if mode == 'nohyp':
            await page.route('**/app/hyp.js', lambda r: r.abort())
        if mode == 'noev':
            await page.route('**/app/evidence.js', lambda r: r.abort())
        page.set_default_timeout(7000)
        await page.goto(url)
        await page.evaluate("localStorage.clear(); localStorage.setItem('slid.v1', JSON.stringify({grade:6}))")
        await page.reload()
        assert await page.evaluate("!!window.SLID_HYP") == (mode != 'nohyp'), mode
        by_title = await page.evaluate(items_js)
        # 1) урок g6m1l1: choice (екран 2) і number (екран 8) — з другої спроби
        screens = await open_lesson_at(page, 'g6m1l1', 0)
        for i, scr in enumerate(screens):
            if i == 2:
                await page.click('#stage .opt[data-k="0"]'); await page.click('#action'); docks.append(await dock(page))
            if i == 8:
                await typed(page, '7'); await page.click('#action'); docks.append(await dock(page))
            await answer_context_screen(page, scr)
            await page.click('#action')
            if scr['type'] not in ('intro', 'info', 'explore'):
                docks.append(await dock(page)); await page.click('#action')
        assert await page.locator('.bigstars').count() == 1
        # 2) тренування з кінця уроку: 1-ша — хибна, потім правильна (S10+); 2-га — дві хибні (S10−, фінальна); решта правильні
        await page.click('#stage [data-practice="g6m1l1"]')
        def w1(k, it):
            num = it.get('answerKind') != 'list'
            return (['999'] if num else ['1; 2; 3']) if k == 0 else (['998', '997'] if num else ['1; 2', '1; 9']) if k == 1 else []
        assert await practice(page, by_title, w1, docks) >= 4
        # 3) нове тренування: перша спроба хибна, вкладку перезавантажено (відкриття гіпотези чекає другої спроби — pend у slid.hyp)
        await page.click('#again')
        it = await current(page, by_title)
        await typed(page, '9999' if it.get('answerKind') != 'list' else '7; 8'); await page.click('#action'); docks.append(await dock(page))
        await page.reload()
        if mode != 'nohyp':
            pend = await page.evaluate("JSON.parse(localStorage.getItem('slid.hyp')||'null')?.pend?.a?.item?.key")
            assert pend == it['key'], ('pend після перезавантаження', pend, it['key'])
        # 4) тест рівня dg6: №0 «48» (мутант ord-ltr), №3 «7»; ще дві правильні, далі «Ще не знаю»; підсумок — закрити ✕
        await page.click('button[data-subject="math"]'); await page.click('#view [data-diag="math"]'); await page.click('[data-diag-go]')
        k = 0
        while await page.locator('#skip').is_visible():
            i_item = await page.evaluate("""() => {const S=JSON.parse(localStorage.getItem('slid.v1')),d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
              const i=SLID_LEARN.nextItem(d,(S.diagRun||{}).dg6||{}); return [i, d.items[i]];}""")
            bad = {0: '48', 3: '7'}.get(i_item[0])
            if bad and k < 6:
                await typed(page, bad); await page.click('#action')
            elif k < 4:
                await answer_context_screen(page, i_item[1]); await page.click('#action')
            else:
                await page.click('#skip')
            k += 1
        await page.click('#pClose')
        # 5) наступного дня: тренування, усе правильно — природні перевірки гіпотез учорашнього дня
        await page.evaluate("localStorage.setItem('qa.now', '2026-10-17T12:00:00Z')")
        await page.reload()
        by_title = await page.evaluate(items_js)
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice="g6m1l1"]')
        # остання вправа — хибна з першої спроби (нова гіпотеза пари), далі урок пари знову ≥ 65 % в іншій сесії → superseded
        await practice(page, by_title, lambda k, it: (['999'] if it.get('answerKind') != 'list' else ['1; 2; 3']) if k == 5 else [], docks)
        await page.click('#action')   # «Готово»
        await page.click('[data-tab="path"]'); await page.click('[data-tab="path"]')
        for scr in await open_lesson_at(page, 'g6m1l1', 0):
            await answer_context_screen(page, scr)
            await page.click('#action')
            if scr['type'] not in ('intro', 'info', 'explore'):
                docks.append(await dock(page)); await page.click('#action')
        assert await page.locator('.bigstars').count() == 1
        await page.click('#action')
        state = await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")
        hyp = await page.evaluate("JSON.parse(localStorage.getItem('slid.hyp')||'null')")
        return context, page, errors, state, hyp, docks
    states, docks_by = {}, {}
    for mode in ('hyp', 'nohyp', 'noidb', 'noev'):
        context, page, errors, state, hyp, docks = await route(mode)
        assert not errors, (mode, errors)
        states[mode], docks_by[mode] = state, docks
        if mode == 'nohyp':
            assert hyp is None, 'без hyp.js slid.hyp не пишеться'
        else:
            assert hyp and hyp['v'] == 1 and hyp['rv'] == 'hyp-1' and hyp['closed'] and isinstance(hyp['scr'], int), (mode, hyp and list(hyp))
            assert len(json.dumps(hyp)) < 25000, len(json.dumps(hyp))
        if mode == 'hyp':
            data = await page.evaluate("SLID_EVIDENCE.export()")
            ev = data['events']
            hev = [e for e in ev if e['type'].startswith('hyp_')]
            kinds = {e['type'] for e in hev}
            assert kinds >= {'hyp_open', 'hyp_probe', 'hyp_close'}, kinds
            assert all('by' not in e for e in hev), 'hyp_* з by'
            opens = [e['d'] for e in hev if e['type'] == 'hyp_open']
            assert {o['at']['mode'] for o in opens} == {'lesson', 'practice', 'diag'} and all(o['persist'] == 1 for o in opens), [o['at'] for o in opens]
            assert [e['d']['why'] for e in hev if e['type'] == 'hyp_close' and e['d']['why'] == 'superseded'], 'superseded (урок пари знову)'
            # відкладене відкриття (pend) пережило перезавантаження: hyp_open цієї спроби — після boot нового завантаження
            boots = [e['seq'] for e in ev if e['type'] == 'boot']
            ps = [e for e in hev if e['type'] == 'hyp_open' and e['d']['at']['mode'] == 'practice' and boots[1] < e['seq'] < boots[2]]
            assert ps, 'гіпотезу, що чекала другої спроби, втрачено при перезавантаженні'
            # hyp_* пасивні для cause: by кожної події srs/plan/grade — n явної події (не hyp_*); srs після practice_end — by = practice_end
            by_n = {(e['sid'], e['n']): e['type'] for e in ev}
            derived = [e for e in ev if e['type'] in ('srs', 'plan', 'grade')]
            assert derived and all(not by_n[(e['sid'], e['by'])].startswith('hyp_') for e in derived), [(e['type'], by_n.get((e['sid'], e['by']))) for e in derived]
            assert any(by_n[(e['sid'], e['by'])] == 'practice_end' for e in derived if e['type'] == 'srs'), 'srs після practice_end'
            ans = [e['d'] for e in ev if e['type'] == 'answer']
            assert all('lvl' in a for a in ans) and any(a.get('lvl') == 1 for a in ans if a['mode'] == 'practice'), 'item.lvl'
            assert all('ans' in a or a.get('ansCut') for a in ans if a['type'] in ('choice', 'multi', 'number', 'answer')), [a for a in ans if 'ans' not in a][:2]
            # застосунок = реплей на тому самому журналі
            with tempfile.TemporaryDirectory() as d:
                f = pathlib.Path(d) / 'log.json'; f.write_text(json.dumps(data))
                out = subprocess.run(['node', str(ROOT / 'tools/hyp-replay.mjs'), str(f), '--events'], capture_output=True, text=True, check=True).stdout
            rep = json.loads(out)
            def norm(evs):
                ids, res = {}, []
                def nid(x):
                    return ids.setdefault(x, f"#{len(ids)}") if x else x
                for e in evs:
                    dd = json.loads(json.dumps(e['d']))
                    dd.pop('persist', None)
                    for k in ('hid', 'prb'):
                        if k in dd: dd[k] = nid(dd[k])
                    res.append((e['type'], dd))
                return res
            app_n, rep_n = norm(hev), norm(rep)
            assert app_n == rep_n, ('застосунок ≠ реплей', next(((i, a, b) for i, (a, b) in enumerate(zip(app_n, rep_n)) if a != b), (len(app_n), len(rep_n))))
            assert len(app_n) >= 20, len(app_n)
            n_hyp = len(app_n)
        await context.close()
    assert states['hyp'] == states['nohyp'] == states['noidb'] == states['noev'], [k for k in states['hyp'] if not (states['hyp'][k] == states['nohyp'].get(k) == states['noidb'].get(k) == states['noev'].get(k))]
    assert docks_by['hyp'] == docks_by['nohyp'] == docks_by['noidb'] == docks_by['noev'], 'тексти доку різняться'
    assert (states['hyp']['errs'] or states['hyp']['mast']) and states['hyp']['srs'] and states['hyp']['seen'] and states['hyp']['diag'].get('dg6'), ('маршрут не зачепив record/SRS/тест', {k: bool(states['hyp'].get(k)) for k in ('errs', 'srs', 'seen', 'diag')})

    # form / badHint (фікстура пулу): тексти доку однакові з hyp.js і без; у журналі fc і hyp_fmt; переповнене сховище; «Скинути прогрес»
    fixture = """() => {const c=SLID_SUBJECTS.find(c=>c.id==='math'),p=c.pools.find(p=>p.id==='pg6m1');c.pools=[p];
      p.items=[{answer:'2/5',fractionOnly:true,reduced:true,title:'QA: скороти 4/10'},{answer:5,unit:'см',title:'QA: довжина'},{answer:8,title:'$20 - 4 * 3$'},
        {answer:'17/20',title:'$1/4 + 3/5$'},{answer:12,title:'QA: 3 · 4'},{answer:7,title:'QA: 3 + 4'}]
        .map((it,i)=>({...it,id:'hq'+i,lesson:'g6m1l1',lvl:1,sk:'divis',src:p.sources[0].id+' №HQ'+i,type:'answer',hint:'Подумай ще.',steps:['Пояснення.']}));}"""
    wrong = {'QA: скороти 4/10': ['4/10', '0,4'], 'QA: довжина': ['5 кг'], '$20 - 4 * 3$': ['48'], '$1/4 + 3/5$': ['4/9', '1/2']}
    async def fixture_route(mode):
        context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='block')
        await context.add_init_script(freeze)
        page = await context.new_page()
        errors, docks = [], []
        page.on('pageerror', lambda error: errors.append(str(error)))
        await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
        if mode == 'nohyp':
            await page.route('**/app/hyp.js', lambda r: r.abort())
        page.set_default_timeout(7000)
        await page.goto(url)
        await page.evaluate("localStorage.clear(); localStorage.setItem('slid.v1', JSON.stringify({grade:6, lessons:{g6m1l1:{done:true}}}))")
        await page.reload()
        await page.evaluate(fixture)
        await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice="g6m1l1"]')
        for _ in range(6):
            src = re.search(r'№HQ(\d)', await page.locator('#stage').inner_text()).group(1)
            it = await page.evaluate("i=>SLID_SUBJECTS.find(c=>c.id==='math').pools[0].items[i]", int(src))
            ws = wrong.get(it['title'], [])
            for w in ws:
                await typed(page, w); await page.click('#action'); docks.append(await dock(page))
            if len(ws) < 2:
                await answer_context_screen(page, it); await page.click('#action'); docks.append(await dock(page))
            await page.click('#action')
        return context, page, errors, docks   # підсумок тренування лишається відкритим (#again)
    fx = {}
    for mode in ('hyp', 'nohyp'):
        context, page, errors, docks = await fixture_route(mode)
        assert not errors, (mode, errors)
        fx[mode] = docks
        if mode == 'hyp':
            ev = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
            forms = [e['d'] for e in ev if e['type'] == 'answer' and e['d']['verdict'] == 'form']
            fmts = [e['d'] for e in ev if e['type'] == 'hyp_fmt']
            # fc у кожній form-спробі; hyp_fmt — лише для першої спроби (P1), з тим самим кодом
            assert forms and all(a.get('fc') for a in forms) and [(a['key'], a['fc']) for a in forms if a['try'] == 1] == [(f['key'], f['fc']) for f in fmts], (forms, fmts)
            # переповнене сховище: наступна відповідь — slid.v1 записано (seen), slid.hyp поступився й очищений, далі persist: 0
            assert await page.evaluate("!!localStorage.getItem('slid.hyp')"), 'slid.hyp до переповнення'
            await page.click('#again')
            await typed(page, '123456'); await page.click('#action')   # перша спроба: pend записано в slid.hyp
            assert await page.evaluate("!!JSON.parse(localStorage.getItem('slid.hyp')||'null')?.pend"), 'pend у slid.hyp'
            await page.evaluate("""() => { let lo=0, hi=12e6;
              while (hi - lo > 1) { const mid=Math.floor((lo + hi) / 2); try { localStorage.setItem('qa.fill', 'x'.repeat(mid)); lo = mid; } catch (e) { hi = mid; } }
              localStorage.setItem('qa.fill', 'x'.repeat(lo)); }""")
            src = re.search(r'№HQ(\d)', await page.locator('#stage').inner_text()).group(1)
            it = await page.evaluate("i=>SLID_SUBJECTS.find(c=>c.id==='math').pools[0].items[i]", int(src))
            key = 'pg6m1:hq' + src
            errs0 = len(await page.evaluate("JSON.parse(localStorage.getItem('slid.v1')).errs"))
            await typed(page, '654321'); await page.click('#action')   # фінальна: slid.v1 росте — місце звільняє лише видалення slid.hyp
            st = await page.evaluate("JSON.parse(localStorage.getItem('slid.v1'))")
            assert len(st['errs']) == errs0 + 1 and st['seen'].get(key) == 0, ('переповнене сховище: slid.v1 не записано', errs0, len(st['errs']))
            assert await page.evaluate("localStorage.getItem('qa.fill')"), 'заповнювач на місці'
            assert await page.evaluate("localStorage.getItem('slid.hyp')") is None, 'slid.hyp не очищено'
            await page.click('#action')
            await page.evaluate("SLID_EVIDENCE.flush()")
            ev = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
            last_open = [e['d'] for e in ev if e['type'] == 'hyp_open'][-1]
            assert last_open['at']['key'] == key and last_open['persist'] == 0, last_open
            await page.evaluate("localStorage.removeItem('qa.fill')")
            # «Скинути прогрес»: reset для відкритих — до події reset, зі старим pid; ключ slid.hyp видалено
            await page.click('#pClose'); await page.click('#pClose')
            await page.click('[data-tab="profile"]'); await page.click('#reset'); await page.click('#reset')
            await page.evaluate("SLID_EVIDENCE.flush()")
            ev = (await page.evaluate("SLID_EVIDENCE.export()"))['events']
            r = next(e for e in ev if e['type'] == 'reset')
            closes = [e for e in ev if e['type'] == 'hyp_close' and e['d']['why'] == 'reset']
            assert closes and all(e['seq'] < r['seq'] and e['pid'] == r['pid'] for e in closes), [(e['seq'], e['pid']) for e in closes]
            assert await page.evaluate("localStorage.getItem('slid.hyp')") is None, 'slid.hyp після скидання'
        await context.close()
    assert fx['hyp'] == fx['nohyp'], [(a, b) for a, b in zip(fx['hyp'], fx['nohyp']) if a != b]
    assert any('скоро' in t[1].lower() or 'дроб' in t[1].lower() for t in fx['hyp']), fx['hyp']

    # офлайн: app/hyp.js у кеші service worker, тінь працює без мережі
    sw = (ROOT / 'sw.js').read_text()
    assert '"./app/hyp.js"' in sw
    context = await browser.new_context(viewport={'width': 400, 'height': 860}, service_workers='allow')
    page = await context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    await page.route('**/fonts.googleapis.com/**', lambda r: r.abort())
    page.set_default_timeout(15000)
    await page.goto(url)
    await page.evaluate("navigator.serviceWorker.ready")
    await page.reload()
    await page.wait_for_function("!!navigator.serviceWorker.controller")
    await page.evaluate("localStorage.setItem('slid.v1', JSON.stringify({grade:6, lessons:{g6m1l1:{done:true}}}))")
    await context.set_offline(True)
    await page.reload()
    assert await page.evaluate("navigator.onLine") is False and await page.evaluate("!!window.SLID_HYP")
    by_title = await page.evaluate(items_js)
    await page.click('button[data-subject="math"]'); await page.click('[data-practice-view="math"]'); await page.click('[data-practice="g6m1l1"]')
    it = await current(page, by_title)
    await typed(page, '9999' if it.get('answerKind') != 'list' else '7; 8'); await page.click('#action')
    await answer_context_screen(page, it); await page.click('#action')
    hyp = await page.evaluate("JSON.parse(localStorage.getItem('slid.hyp')||'null')")
    assert hyp and [h['key'] for h in hyp['open']] == [it['key']], hyp and hyp['open']
    assert not errors, errors
    await context.close()
    print(f'Гіпотези (тінь E2): slid.v1 і тексти доку однакові з hyp.js / без нього / без IndexedDB / без журналу; застосунок = реплей ({n_hyp} подій hyp_*); pend переживає перезавантаження; form/badHint, переповнене сховище, «Скинути прогрес», офлайн: green', flush=True)

asyncio.run(main())
