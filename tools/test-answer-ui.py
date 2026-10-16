"""Browser regressions for diagnostic controls and practice answer formats.
Run: python3 tools/test-answer-ui.py (requires Playwright Chromium).
"""
import asyncio
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
        await page.fill('#numIn', str(screen['answer']).replace('.', ','))
        await page.dispatch_event('#numIn', 'input')
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
          if(!c.diags.some(d=>d.id==='dg7')) c.diags.push({id:'dg7',grade:7,title:'Тест 7: fixture',why:'Контрольований тест перемикання класу.',
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

async def main():
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page(viewport={"width":400, "height":860})
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            await page.add_init_script("localStorage.setItem('slid.v1',JSON.stringify({grade:6,unlockAll:true}))")
            await page.goto(f"http://127.0.0.1:{server.server_address[1]}/index.html")
            await page.evaluate("""() => {
              const c=SLID_SUBJECTS.find(c=>c.id==='math'), d=c.diags[0];
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
              const c=SLID_SUBJECTS.find(c=>c.id==='math'); c.pools=c.pools.slice(0,1);
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
            print('Diagnostic controls and 6 practice answer formats: green')
    finally:
        server.shutdown()

asyncio.run(main())
