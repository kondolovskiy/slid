#!/usr/bin/env python3
"""Слід · плейтест: проходить уроки в справжньому браузері (Playwright + Chromium), відповідаючи правильно,
і перевіряє, що кожне завдання зараховано, а на сторінці немає JS-помилок.
Запуск:  python3 tools/playtest.py            — усі уроки
         python3 tools/playtest.py --section g6s1 [--shots]   — один розділ або тест рівня (--section dg6) (+ скриншоти в reports/shots/)
         python3 tools/playtest.py --section g6s1,dg6,u7s6    — кілька id через кому, по черзі в одному браузері (CI: tools/playtest-pick.mjs)
         Невідомий id (немає розділу з уроками чи тесту рівня) — помилка, код 2: зелений прогін нуля уроків не видає себе за перевірку.
         Незарахована правильна відповідь — «ПОМИЛКА  не зараховано: урок, екран, відповідь, клас #dock, #action» (tools/verdict.py), урок
         не догравається, прогін іде далі; TimeoutError на #action після цього — уже не вердикт, а справді флейк чи зламаний плеєр.
         --port N — фіксований порт (типово вільний; паралельно можна, але під навантаженням можливі TimeoutError — для приймання по одному)
Потрібно: pip install playwright && playwright install chromium  (або вже встановлений Chromium)."""
import asyncio, functools, http.server, os, sys, threading
from playwright.async_api import async_playwright
from verdict import NO_VERDICT, NotCredited, expect_credited   # tools/verdict.py: явне «не зараховано» замість TimeoutError

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = sys.argv[1:]
ONLY = {x for x in ARGS[ARGS.index("--section") + 1].split(",") if x} if "--section" in ARGS else None   # множина id розділів / тестів рівня
SHOTS = "--shots" in ARGS
PORT = int(ARGS[ARGS.index("--port") + 1]) if "--port" in ARGS else 0   # 0 — вільний порт (паралельні прогони не конфліктують за портом)

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), functools.partial(Q, directory=ROOT))
PORT = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()

async def answer(pg, s):
    """Дає правильну відповідь; повертає, що саме дано (для повідомлення «не зараховано»)."""
    t = s["type"]
    if t == "choice": await pg.click(f'#stage .opt[data-k="{s.get("correct", 0)}"]'); return s.get("correct", 0)
    elif t == "multi":
        for k in s["correct"]: await pg.click(f'#stage .opt[data-k="{k}"]')
        return s["correct"]
    elif t == "sort":
        for r, it in enumerate(s["items"]): await pg.click(f'#stage [data-r="{r}"][data-b="{it[1]}"]')
        return [it[1] for it in s["items"]]
    elif t == "order":
        for k in range(len(s["items"])): await pg.click(f'#ord .opt[data-k="{k}"]')
        return list(range(len(s["items"])))
    elif t == "slider": await pg.eval_on_selector("#rng", f"e=>{{e.value={s['answer']};e.dispatchEvent(new Event('input'))}}"); return s["answer"]
    elif t == "align":
        off = s["sample"]["endYear"] - s["sample"]["len"] + 1 - s["ref"]["from"]
        await pg.eval_on_selector("#alrng", f"e=>{{e.value={off};e.dispatchEvent(new Event('input'))}}"); return off
    elif t == "shade":
        for k in range(s["target"]): await pg.click(f'#shade [data-p="{k}"]')
        return s["target"]
    elif t == "numline": await pg.eval_on_selector("#nlrng", f"e=>{{e.value={s['answer']};e.dispatchEvent(new Event('input'))}}"); return s["answer"]
    elif t == "answer":
        v = f'{s["answer"][0]} ост. {s["answer"][1]}' if s.get("answerKind") == "divrem" else (" : " if s.get("answerKind") == "ratio" else "; ").join(map(str, s["answer"])) if isinstance(s["answer"], list) else str(s["answer"])
        v = v.replace(".", ",") if s.get("answerKind") != "divrem" else v
        await pg.fill("#numIn", v); await pg.dispatch_event("#numIn", "input"); return v
    elif t == "fracin":
        v = f"{s['answer']}/{s['den']}" if s.get("hideDen") else str(s["answer"])
        await pg.fill("#numIn", v); return v
    elif t == "number":
        v = s["answer"]; txt = (str(int(v)) if float(v).is_integer() else repr(v)).replace(".", ",")
        await pg.fill("#numIn", txt); await pg.dispatch_event("#numIn", "input"); return txt
    elif t == "lab": await pg.evaluate("sol => window.__slidLab.set(sol)", s["solution"]); return s["solution"]
    elif t in ("gaps", "pick", "stress", "split", "word"):   # мовні вправи: правильний стан дає сам рушій (SLID_LANG.solution)
        sol = await pg.evaluate("s => { const v = SLID_LANG.solution(s); return v instanceof Set ? [...v] : v; }", s)
        if t == "gaps":
            for k, o in enumerate(sol): await pg.click(f'#stage .gopt[data-g="{k}"][data-o="{o}"]')
        elif t == "pick":
            for n in sol: await pg.click(f'#stage .pw[data-w="{n}"]')
        elif t == "stress":
            for k, i in enumerate(sol): await pg.click(f'#stage .sv[data-w="{k}"][data-i="{i}"]')
        elif t == "split":
            for c in sol: await pg.click(f'#stage .cut[data-c="{c}"]')
        else: await pg.fill("#numIn", sol); await pg.dispatch_event("#numIn", "input")
        return sol
    return None   # intro, info, explore: відповіді немає

LANG_TYPES = ("gaps", "pick", "stress", "split", "word")
GAP_ORDER = "() => [...document.querySelectorAll('#stage .gap')].map(g => [...g.querySelectorAll('.gopt')].map(b => +b.dataset.o))"   # показаний порядок варіантів кожного пропуску
OPT_SHOW = {"\u2014": ("\u2205", "нічого не писати"), "\u2013": ("\u2014", "тире")}   # розмітка → що бачить дитина (CONTENT_SCHEMA §4.1), записано тут, а не взято з рушія

async def lang_seen(pg, s):
    """Що бачить дитина на мовній вправі (engine-lang-p3, п. 9): текст кнопок, легенда «∅», aria-label. Розбір — SLID_LANG (його тестує
    test-lang), а очікуваний вигляд — незалежно (OPT_SHOW). Повертає список розбіжностей."""
    t, bad = s["type"], []
    if t == "gaps":
        opts = await pg.evaluate("s => SLID_LANG.parseGaps(s.text).gaps.map(g => g.opts)", s)
        for g, os_ in enumerate(opts):
            for k, o in enumerate(os_):
                el = f'#stage .gopt[data-g="{g}"][data-o="{k}"]'
                txt, lab = (await pg.text_content(el)).strip(), await pg.get_attribute(el, "aria-label")
                want, wlab = OPT_SHOW.get(o, (o, None))
                if txt != want or lab != wlab: bad.append(f"пропуск {g+1}, варіант «{o}»: на кнопці «{txt}» (aria-label {lab!r}), очікувалось «{want}» ({wlab!r})")
            shown = await pg.evaluate("g => [...document.querySelectorAll('#stage .gap')[g].querySelectorAll('.gopt')].map(b => +b.dataset.o)", g)   # рушій перемішує варіанти (gapOrder)
            if sorted(shown) != list(range(len(os_))) or ("\u2014" in os_ and os_[shown[-1]] != "\u2014"): bad.append(f"пропуск {g+1}: порядок кнопок {shown} — не перестановка варіантів або «∅» не останній")
        legend = await pg.locator("#stage .fix", has_text="нічого не писати").count()
        if legend != (1 if any("\u2014" in os_ for os_ in opts) else 0): bad.append(f"легенда «∅ — нічого не писати»: {legend}")
    elif t == "pick":
        words = await pg.evaluate("s => SLID_LANG.parsePick(s.text).words.map(w => w.v)", s)
        seen = [x.strip() for x in await pg.locator("#stage .pw").all_text_contents()]
        if seen != words: bad.append(f"кнопки слів {seen} ≠ {words}")
    elif t == "stress":
        for k, w in enumerate(s["words"]):
            seen = "".join(await pg.locator(f'#stage .sword >> nth={k}').all_text_contents())
            if seen != w.replace("+", ""): bad.append(f"слово {k+1}: на екрані «{seen}», очікувалось «{w.replace('+', '')}»")
    elif t == "split":
        w = (s["word"] if isinstance(s["word"], str) else s["word"][0]).replace("|", "")
        seen = "".join(await pg.locator("#stage .split .sl:not(.zero)").all_text_contents())
        if seen != w: bad.append(f"літери «{seen}» ≠ «{w}»")
        if bool(s.get("zero")) != (await pg.locator("#stage .split .sl.zero").count() == 1): bad.append("клітинка нульового закінчення")
    return bad

async def lang_wrong(pg, s):
    """Одна завідомо хибна спроба (engine-lang-p3, п. 4): гілка помилки в браузері. Повертає (чи зроблено, як відкотити перед правильною)."""
    t = s["type"]
    sol = await pg.evaluate("s => { const v = SLID_LANG.solution(s); return v instanceof Set ? [...v] : v; }", s)
    if t == "gaps":
        n0 = len(await pg.evaluate("s => SLID_LANG.parseGaps(s.text).gaps[0].opts", s))
        await pg.click(f'#stage .gopt[data-g="0"][data-o="{(sol[0] + 1) % n0}"]')
        for k, o in enumerate(sol[1:], 1): await pg.click(f'#stage .gopt[data-g="{k}"][data-o="{o}"]')
        return '#stage .gopt[data-g="0"].is-bad', None
    if t == "stress":
        vs = await pg.evaluate("s => SLID_LANG.parseStress(s.words[0]).letters.filter(l => l.v).map(l => l.i)", s)
        await pg.click(f'#stage .sv[data-w="0"][data-i="{next(i for i in vs if i != sol[0])}"]')
        for k, i in enumerate(sol[1:], 1): await pg.click(f'#stage .sv[data-w="{k}"][data-i="{i}"]')
        return '#stage .sv[data-w="0"].is-bad', None
    if t == "pick":
        n = await pg.evaluate("s => ((SLID_LANG.parsePick(s.text).words || []).find(w => !w.ok) || {}).n ?? null", s)   # tools-lang-p4, P3-4: без хибного слова — без спроби
        if n is None: return None, None
        await pg.click(f'#stage .pw[data-w="{n}"]')
        return f'#stage .pw[data-w="{n}"].is-bad', f'#stage .pw[data-w="{n}"]'
    if t == "split":
        c = await pg.evaluate("s => { const p = SLID_LANG.parseSplit(s.word, s.zero), all = p.variants.flat(); for (let c = 1; c <= [...p.word].length; c++) if (!all.includes(c) && (c < [...p.word].length || s.zero)) return c; return null; }", s)
        if c is None: return None, None
        await pg.click(f'#stage .cut[data-c="{c}"]')
        return f'#stage .cut[data-c="{c}"].is-bad', f'#stage .cut[data-c="{c}"]'
    if t == "word":
        await pg.fill("#numIn", "ъъъ"); await pg.dispatch_event("#numIn", "input")
        return "#numIn.is-bad", None
    return None, None

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
        found = {sec["id"] for c in subjects for sec in c["sections"] if sec.get("lessons")} | {d["id"] for c in subjects for d in c.get("diags", [])}
        if ONLY is not None and (not ONLY or ONLY - found):
            print(f"ПОМИЛКА  невідомі id для --section (немає розділу з уроками чи тесту рівня): {sorted(ONLY - found) or '(порожньо)'}"); await b.close(); sys.exit(2)
        played = failed = 0; lang_n = lang_bad = 0   # мовних вправ і хибних спроб на них: 0 спроб при наявних вправах — гілку помилки не перевірено
        for c in subjects:
            for k, sec in enumerate(c["sections"]):
                if not sec.get("lessons") or (ONLY is not None and sec["id"] not in ONLY): continue
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
                        if t in LANG_TYPES:
                            lang_n += 1
                            for m in await lang_seen(pg, s): errs.append(f"{c['id']} {l['id']} екран {si+1} ({t}): {m}")
                        if t in LANG_TYPES and not s.get("hyp") and not s.get("poll"):
                            order0 = await pg.evaluate(GAP_ORDER) if t == "gaps" else None
                            mark, undo = await lang_wrong(pg, s)
                            if mark:
                                await pg.click("#action")
                                cls = await pg.get_attribute("#dock", "class")
                                lab = await pg.get_attribute(mark, "aria-label") if await pg.locator(mark).count() else None
                                if "bad" not in cls:   # екран уже закрито («Далі») — далі не відповідаємо, а йдемо на наступний
                                    errs.append(f"{c['id']} {l['id']} екран {si+1} ({t}): хибну спробу зараховано (dock: {cls})")
                                    await pg.click("#action"); continue
                                # лічимо лише спробу, яку рушій справді відхилив (рев'ю engine-lang-p3: зарахована «хибна» спроба лічильник завищувала)
                                lang_bad += 1
                                # tests-lang-gaps-order (рев'ю engine-lang-gaps-shuffle, P3-1): порядок кнопок пропусків не стрибає між спробами
                                if order0 is not None and (o1 := await pg.evaluate(GAP_ORDER)) != order0: errs.append(f"{c['id']} {l['id']} екран {si+1} (gaps): порядок кнопок змінився після хибної спроби {order0} → {o1}")
                                if not lab or not lab.endswith("неправильно"): errs.append(f"{c['id']} {l['id']} екран {si+1} ({t}): хибний вибір без позначки «неправильно» для диктора ({mark}: {lab!r})")
                                if undo: await pg.click(undo)
                        given = await answer(pg, s); await pg.click("#action")
                        if t not in NO_VERDICT:
                            # tools-playtest-verdict-msg: незарахована правильна відповідь лишає #action неактивною («Спробувати ще раз») —
                            # наступний click висів би 30 с і падав TimeoutError, схожим на флейк. Тут — явне повідомлення й перехід до наступного уроку.
                            try: await expect_credited(pg, f"{c['id']} урок {l['id']}, екран {si+1} з {len(l['screens'])} ({t})", given)
                            except NotCredited as e:   # друк одразу (рев'ю P2-1): необроблений виняток далі не загубить уже знайдене
                                print("ПОМИЛКА ", e, flush=True); broken = True; break
                            await pg.click("#action")
                    else: broken = False
                    if broken:   # урок не дограти: скинути плеєр перезавантаженням (стан slid.v1 лишається) і грати наступний
                        failed += 1; await pg.goto(f"http://127.0.0.1:{PORT}/index.html"); continue
                    await pg.wait_for_timeout(80); await pg.click("#action")
                    await pg.click('[data-tab="path"]'); await pg.click('[data-tab="path"]')
                    played += 1
        # тести рівня (SLID.diag): усе правильно → план без кроків; усе «Ще не знаю» → у плані є кроки, кожен веде на наявний урок.
        # Baseline-опори (уроків молодших класів немає) кроків не дають: вони мають бути в plan.base, а кнопка — відкрити урок класу.
        diags = 0
        for c in subjects:
            for d in c.get("diags", []):
                if ONLY is not None and d["id"] not in ONLY: continue
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
                    elif mode == "skip" and not todo and not all(b.get("next") for b in base): errs.append(f"{c['id']} {d['id']}: усе пропущено, а baseline-прогалина без уроку, з якого почати: {base}")
                    await pg.click("#action"); await pg.wait_for_timeout(80)
                    if mode == "skip" and await pg.is_hidden("#player"): errs.append(f"{c['id']} {d['id']}: перший крок плану чи перший урок класу не відкрився")
                diags += 1
        await b.close()
        if not played and not failed and not diags:
            print("ПОМИЛКА  нічого не пройдено (0 уроків, 0 тестів рівня)"); sys.exit(2)
        print(f"Пройдено уроків: {played}" + (f" (ще {failed} не дограно: не зараховано правильну відповідь)" if failed else "") + f", тестів рівня: {diags}" + (f", мовних вправ: {lang_n} (хибних спроб: {lang_bad})" if lang_n else ""))
        for e in errs: print("ПОМИЛКА ", e)
        sys.exit(1 if errs or failed else 0)   # failed — уроки з «не зараховано» (надруковано вище, не в errs)

asyncio.run(main())
