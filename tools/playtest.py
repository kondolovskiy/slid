#!/usr/bin/env python3
"""Слід · плейтест: проходить уроки в справжньому браузері (Playwright + Chromium), відповідаючи правильно,
і перевіряє, що кожне завдання зараховано, а на сторінці немає JS-помилок.
Запуск:  python3 tools/playtest.py            — усі уроки
         python3 tools/playtest.py --section g6s1 [--shots]   — один розділ (+ скриншоти в reports/shots/)
Потрібно: pip install playwright && playwright install chromium  (або вже встановлений Chromium)."""
import asyncio, functools, http.server, os, sys, threading
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = sys.argv[1:]
ONLY = ARGS[ARGS.index("--section") + 1] if "--section" in ARGS else None
SHOTS = "--shots" in ARGS
PORT = 8791

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), functools.partial(Q, directory=ROOT))
threading.Thread(target=srv.serve_forever, daemon=True).start()

async def answer(pg, s):
    t = s["type"]
    if t == "choice": await pg.click(f'#stage .opt[data-k="{s.get("correct", 0)}"]')
    elif t == "multi":
        for k in s["correct"]: await pg.click(f'#stage .opt[data-k="{k}"]')
    elif t == "sort":
        for r, it in enumerate(s["items"]): await pg.click(f'#stage [data-r="{r}"][data-b="{it[1]}"]')
    elif t == "order":
        for k in range(len(s["items"])): await pg.click(f'#ord .opt[data-k="{k}"]')
    elif t == "slider": await pg.eval_on_selector("#rng", f"e=>{{e.value={s['answer']};e.dispatchEvent(new Event('input'))}}")
    elif t == "align":
        off = s["sample"]["endYear"] - s["sample"]["len"] + 1 - s["ref"]["from"]
        await pg.eval_on_selector("#alrng", f"e=>{{e.value={off};e.dispatchEvent(new Event('input'))}}")
    elif t == "shade":
        for k in range(s["target"]): await pg.click(f'#shade [data-p="{k}"]')
    elif t == "numline": await pg.eval_on_selector("#nlrng", f"e=>{{e.value={s['answer']};e.dispatchEvent(new Event('input'))}}")
    elif t in ("number", "fracin"): await pg.fill("#numIn", str(s["answer"]))

async def main():
    async with async_playwright() as p:
        kw = {"executable_path": "/opt/pw-browsers/chromium"} if os.path.exists("/opt/pw-browsers/chromium") and not os.environ.get("PW_DEFAULT") else {}
        try: b = await p.chromium.launch(**kw)
        except Exception: b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 400, "height": 860})
        errs = []
        pg.on("pageerror", lambda e: errs.append(f"JS: {e}"))
        await pg.route("**/fonts.googleapis.com/**", lambda r: r.abort())
        await pg.goto(f"http://127.0.0.1:{PORT}/index.html")
        subjects = await pg.evaluate("SLID_SUBJECTS")
        played = 0
        for c in subjects:
            for k, sec in enumerate(c["sections"]):
                if not sec.get("lessons") or (ONLY and sec["id"] != ONLY): continue
                await pg.evaluate(f"localStorage.setItem('slid.v1', JSON.stringify({{grade:{sec['grade']},unlockAll:true}}))")
                await pg.goto(f"http://127.0.0.1:{PORT}/index.html")
                for i, l in enumerate(sec["lessons"]):
                    await pg.click(f'button[data-subject="{c["id"]}"]'); await pg.click(f'[data-topic="{k}"]')
                    await pg.click(f'[data-open="{i}"]'); await pg.click("#go")
                    for si, s in enumerate(l["screens"]):
                        t = s["type"]
                        if SHOTS:
                            os.makedirs(os.path.join(ROOT, "reports/shots"), exist_ok=True)
                            await pg.wait_for_timeout(350); await pg.screenshot(path=os.path.join(ROOT, f"reports/shots/{l['id']}-{si+1}.png"))
                        await answer(pg, s); await pg.click("#action")
                        cls = await pg.get_attribute("#dock", "class")
                        if t not in ("intro", "info") and "ok" not in cls and "info" not in cls:
                            errs.append(f"{c['id']} {l['id']} екран {si+1} ({t}): правильну відповідь не зараховано")
                        if t not in ("intro", "info"): await pg.click("#action")
                    await pg.wait_for_timeout(80); await pg.click("#action")
                    await pg.click('[data-tab="path"]'); await pg.click('[data-tab="path"]')
                    played += 1
        await b.close()
        print(f"Пройдено уроків: {played}")
        for e in errs: print("ПОМИЛКА ", e)
        sys.exit(1 if errs else 0)

asyncio.run(main())
