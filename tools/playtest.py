#!/usr/bin/env python3
"""Слід · плейтест: проходить уроки в справжньому браузері (Playwright + Chromium), відповідаючи правильно,
і перевіряє, що кожне завдання зараховано, а на сторінці немає JS-помилок.
Запуск:  python3 tools/playtest.py            — усі уроки
         python3 tools/playtest.py --section g6s1 [--shots]   — один розділ або тест рівня (--section dg6) (+ скриншоти в reports/shots/)
         --port N — фіксований порт (типово вільний, тож плейтести можна запускати паралельно)
Потрібно: pip install playwright && playwright install chromium  (або вже встановлений Chromium)."""
import asyncio, functools, http.server, os, sys, threading
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = sys.argv[1:]
ONLY = ARGS[ARGS.index("--section") + 1] if "--section" in ARGS else None
SHOTS = "--shots" in ARGS
PORT = int(ARGS[ARGS.index("--port") + 1]) if "--port" in ARGS else 0   # 0 — вільний порт, можна запускати паралельно

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), functools.partial(Q, directory=ROOT))
PORT = srv.server_address[1]
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
    elif t == "answer": await pg.fill("#numIn", str(s["answer"]).replace(".", ",")); await pg.dispatch_event("#numIn", "input")
    elif t == "fracin": await pg.fill("#numIn", f"{s['answer']}/{s['den']}" if s.get("hideDen") else str(s["answer"]))
    elif t == "number":
        v = s["answer"]; txt = (str(int(v)) if float(v).is_integer() else repr(v)).replace(".", ",")
        await pg.fill("#numIn", txt); await pg.dispatch_event("#numIn", "input")
    elif t == "lab": await pg.evaluate("sol => window.__slidLab.set(sol)", s["solution"])

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
                        if t not in ("intro", "info", "explore") and "ok" not in cls and "info" not in cls:
                            errs.append(f"{c['id']} {l['id']} екран {si+1} ({t}): правильну відповідь не зараховано")
                        if t not in ("intro", "info", "explore"): await pg.click("#action")
                    await pg.wait_for_timeout(80); await pg.click("#action")
                    await pg.click('[data-tab="path"]'); await pg.click('[data-tab="path"]')
                    played += 1
        # тести рівня (SLID.diag): усе правильно → план без кроків; усе «Ще не знаю» → у плані є кроки, кожен веде на наявний урок.
        # Baseline-опори (уроків молодших класів немає) кроків не дають: вони мають бути в plan.base, а кнопка — відкрити урок класу.
        diags = 0
        for c in subjects:
            for d in c.get("diags", []):
                if ONLY and d["id"] != ONLY: continue
                for mode in ("ok", "skip"):
                    await pg.evaluate(f"localStorage.setItem('slid.v1', JSON.stringify({{grade:{d['grade']}}}))")
                    await pg.goto(f"http://127.0.0.1:{PORT}/index.html")
                    await pg.click(f'[data-diag="{c["id"]}"]'); await pg.click("[data-diag-go]")
                    shown = 0
                    while await pg.is_visible("#skip"):
                        i = await pg.evaluate("(() => { const S = JSON.parse(localStorage.getItem('slid.v1')), d = SLID_SUBJECTS.flatMap(c => c.diags).find(x => x.id === '%s'); return SLID_LEARN.nextItem(d, (S.diagRun || {})[d.id] || {}); })()" % d["id"])
                        if mode == "ok": await answer(pg, d["items"][i]); await pg.click("#action")
                        else: await pg.click("#skip")
                        shown += 1
                        if shown > len(d["items"]): errs.append(f"{c['id']} {d['id']}: тест не закінчується"); break
                    plan = await pg.evaluate("JSON.parse(localStorage.getItem('slid.v1')).plan['%s']" % c["id"])
                    todo = [st for st in (plan or {}).get("steps", []) if not st.get("done")]
                    base = (plan or {}).get("base", [])
                    pre_lessons = any(t["kind"] != "cur" and not t.get("baseline") for t in d["topics"])
                    pre_base = sorted(t["id"] for t in d["topics"] if t.get("baseline"))
                    if not plan: errs.append(f"{c['id']} {d['id']} ({mode}): план не збережено")
                    elif mode == "ok" and (todo or base or shown != len(d["items"])): errs.append(f"{c['id']} {d['id']}: усі відповіді правильні, але в плані {len(todo)} кроків (показано {shown} з {len(d['items'])} завдань) — якусь відповідь не зараховано")
                    elif mode == "skip" and pre_lessons and not todo: errs.append(f"{c['id']} {d['id']}: усе пропущено, а план порожній")
                    elif mode == "skip" and sorted(b["topic"] for b in base) != pre_base: errs.append(f"{c['id']} {d['id']}: усе пропущено, а baseline-прогалини {pre_base} не видно в плані ({base})")
                    await pg.click("#action"); await pg.wait_for_timeout(80)
                    if mode == "skip" and await pg.is_hidden("#player"): errs.append(f"{c['id']} {d['id']}: перший крок плану чи перший урок класу не відкрився")
                diags += 1
        await b.close()
        print(f"Пройдено уроків: {played}, тестів рівня: {diags}")
        for e in errs: print("ПОМИЛКА ", e)
        sys.exit(1 if errs else 0)

asyncio.run(main())
