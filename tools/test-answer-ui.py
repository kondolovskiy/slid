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
            await browser.close()
            print('Diagnostic controls and 6 practice answer formats: green')
    finally:
        server.shutdown()

asyncio.run(main())
