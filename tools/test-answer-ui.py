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
    ({'answerKind': 'ratio', 'answer': '2 : 3', 'reduced': True}, '4 : 6', 'натуральними', '2:3'),
    ({'answerKind': 'coordinates2', 'answer': [3, -2]}, '(-2; 3)', 'Зміни відповідь', 'A(3; −2)'),
    ({'answerKind': 'coordinates3', 'answer': '(1; -2; 3)'}, '(1; -2)', 'Зміни відповідь', '(1; -2; 3)'),
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
            assert sym == (0 if fields['answerKind'] == 'list' else 1), fields
            if fields['answerKind'] == 'periodicSet':
                assert await page.locator('#answerUnit').inner_text() == 'k ∈ ℤ'
            if fields['answerKind'] == 'coordinates2':
                helps.append(await page.locator('#stage .anskeys + .fix').inner_text())
            await page.fill('#numIn', wrong); await page.dispatch_event('#numIn', 'input'); await page.click('#action')
            dock = await page.locator('#dock').inner_text()
            assert 'bad' in await page.locator('#dock').get_attribute('class') and message in dock, (fields, dock)
            ins = await page.locator('#stage .anskeys button').evaluate_all('bs => bs.map(b => b.dataset.ins)')
            if fields['answerKind'] == 'coordinates2':
                letters = sorted(set(re.findall(r'[a-z]', str(fields['answer']))))
                if letters:
                    # Expression components: ^, · and the key's variable letters next to the coordinate keys.
                    assert ins == ['(', ';', ')', '-', '/', '√', '^', '·', *letters], ins
                    assert '(2a; b − 1)' in helps[-1] and '(p − m; k − n)' not in helps[-1], helps[-1]
                else:
                    assert ins == ['(', ';', ')', '-', '/', '√'], ins
            if fields['answer'] == '(p - m; k - n)':
                # Variable keys insert at the caret: (|; k − n) + p − m → (p-m; k − n).
                await page.fill('#numIn', '(; k − n)'); await page.eval_on_selector('#numIn', 'e=>e.setSelectionRange(1,1)')
                for key in ('p', '-', 'm'):
                    await page.click(f'.anskeys button[data-ins="{key}"]')
                assert await page.input_value('#numIn') == '(p-m; k - n)', await page.input_value('#numIn')
                await page.fill('#numIn', '')
            if fields['answerKind'] == 'exactRoot':
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
    assert len(helps) == 3 and len(set(helps)) == 2, helps
    await page.reload()
    hits = await page.evaluate("""(helps) => {const ex=[...new Set(helps.flatMap(h=>h.match(/\\([^()]*;[^()]*\\)/g)||[]))];
      const items=SLID_SUBJECTS.flatMap(c=>(c.pools||[]).flatMap(p=>p.items).concat((c.diags||[]).flatMap(d=>d.items),
        c.sections.flatMap(s=>(s.lessons||[]).flatMap(l=>l.screens||[])))).filter(it=>it.answerKind==='coordinates2');
      if(ex.length<2||items.length<40) return ['мало прикладів чи ключів: '+ex.length+'/'+items.length];
      return items.flatMap(it=>ex.filter(e=>SLID_LEARN.checkAns(it,e)!=='bad').map(e=>e+' ← '+JSON.stringify(it.answer)));}""", helps)
    assert hits == [], hits
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
            await browser.close()
            print('Обрані браузерні сценарії: green')
    finally:
        server.shutdown()

asyncio.run(main())
