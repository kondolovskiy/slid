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
    elif kind == 'number' or kind == 'answer':
        await page.fill('#numIn', ('; '.join(map(str, screen['answer'])) if isinstance(screen['answer'], list) else str(screen['answer'])).replace('.', ','))
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
    # A real dg6 partial run, paused just before its second dec-ops item.
    await page.goto(url)
    # A new profile can choose a grade and defer the diagnostic.
    await page.click('[data-grade="6"]')
    await page.click('[data-diag-skip="dg6"]')
    assert (await state())['grade'] == 6 and (await state())['diagSkip']['dg6'] is True
    await page.evaluate("""() => {
      const d=SLID_SUBJECTS.find(c=>c.id==='math').diags.find(d=>d.id==='dg6');
      const at=d.items.map((it,i)=>it.topic==='dec-ops'?i:-1).filter(i=>i>=0).pop();
      const res=Object.fromEntries(Array.from({length:at},(_,i)=>[i,1]));
      localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:false,diagRun:{dg6:res}}));
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

async def qa_page(browser, url, seed):
    context = await browser.new_context(viewport={'width': 400, 'height': 860})
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
            browser = await p.chromium.launch(**({'executable_path': options.browser} if options.browser else {}))
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
            await browser.close()
            print('Обрані браузерні сценарії: green')
    finally:
        server.shutdown()

asyncio.run(main())
