#!/usr/bin/env node
// Слід · браузерні сценарії рушія на Node + Playwright (не Python: модуль playwright для Python є не скрізь). Почався як test-ui-ister.mjs
// (рев'ю math-ister-migration P3-1, P3-3, P3-8; задача tools-ister-p3); перейменовано за темою (tools-math-ister-p3, рев'ю tools-ister-p3 P3-4) —
// сюди додавай нові швидкі UI-сценарії рушія. Не входить у npm run check; у CI — крок job browser (pages.yml, tools-ci-test-ui), блокує deploy.
// Локально запускати окремо й по одному (паралельні браузерні прогони флейкають).
// Зміст — синтетична фікстура: після завантаження сторінки розділи, пули й тести математики підміняються (як pool_checks у
// test-answer-ui.py), тож від живого content/ сценарій не залежить.
//  1) «Тренування» з also: заголовки розділів — за програмою (клас, тижні), а не за порядком пулів; розділ один раз, хоч на нього
//     посилаються два пули; порожній розділ і розділ старшого класу не показано; лічильник задач — з усіх пулів.
//  2) Замок уроку: пройдений урок не замикається, коли перед ним вставлено новий (app.js unlocked → learn.js lessonOpen).
//  3) Замок уроку, інші гілки unlocked (рев'ю tools-ister-p3 P3-1): unlockAll відкриває все; урок із plan.known (тест рівня: тема
//     «знайоме») відкритий сам і відкриває наступний; known плану іншого класу — ні.
//  4) Запобіжник версій у рушії: екран невідомого типу (урок і тест рівня) — повідомлення «Онови застосунок» і «Пропустити»
//     без зарахування (у тесті — «Ще не знаю»).
//  8) Телефон (devices["Pixel 7"], engine-list-p3 п. 4): поле масштабу (number + scale) — inputmode="decimal" і кнопка «:» (на цифровій
//     клавіатурі двокрапки немає); «1 : 10000» набирається дотиками й зараховується; ratio — кнопка «:» вставляє в місце курсора;
//     без scale кнопки «:» немає.
//  9) Синхронізація прогресу (engine-sync-login): фейковий API і фейк Google Identity Services; вхід «мій прогрес», код прив'язки на другому
//     пристрої, злиття балів, офлайн-черга, «не мій прогрес» на спільному пристрої, помилки 401, вихід, «Скинути прогрес»; без адреси API — картки немає.
//  10) Мовні вправи в тесті рівня (engine-diag-lang-types): gaps, pick, stress, word, split у тесті ukr-фікстури — без позначок, вердикти, «Ще не знаю»,
//     продовження після перезавантаження, підсумок тем; друга фікстура — протилежні вердикти (split з варіантами, gaps 1 з 2 — BAD) і raw у журналі подій.
//  11) Порядок тестів рівня після вибору класу (fix-diag-order): відкривається тест предмета з найменшим diagOrder (метадані предмета),
//      а не перший предмет за порядком файлів; без diagOrder і за рівних — порядок предметів; відкладений тест («Пізніше») не пропонується.
//  12) Один тест рівня на головній (engine-diag-one-invite): одне запрошення на новий тест (перший за diagOrder незавершений; «Пізніше» не змінює),
//      перерваний — завжди; тест іншого предмета — з екрана предмета.
//  13) «Тренування» української (engine-pool-lang): пул ukr-фікстури (gaps, pick, stress) — помилка → hint → друга спроба; «Пояснення»; seen і SRS
//      (з другої спроби — не зараховано); answer у журналі з key, pool, try, raw.
//  14) Ширина gaps на телефоні (engine-gaps-wrap, QA qa-ukr-pool Q-1): на 360 і 375 px жоден екран gaps (фікстура з довгими варіантами з кількох
//      слів + усі gaps уроків, пулів і тестів рівня, які завантажує сторінка) не виходить за край: картка .ltext без горизонтального переповнення,
//      кнопки варіантів у межах екрана, #player не прокручується вбік; слово з пропуском (span.gw) — в одному рядку (не рветься посеред слова).
//  15) Поле number уроку (engine-number-fraction-input-1117): «3/2», «1 1/2», «-3/4» за значенням, «32» — помилка; кнопки «/», «пробіл»
//      і підказка — як у тренуванні (answerUI); 4 клас із цілим ключем — без них.
//  16) Підсумок тесту рівня (engine-diag-baseline-plan-1117): baseline-тема з see — «тема є в уроці …» з кнопкою (і на урок іншого предмета),
//      «попроси дорослого» — лише без see; «З програми N класу» з «попереду» і без «уже вмієш».
//  17) Ділення кутом 4572 : 3 з input на телефоні (engine-lab-column-digits-1117): «Перевірити» неактивна на «????», дотик — фокус без «+1»,
//      автоперехід, дотик по іншій клітинці кладе цифру туди, «1524» зараховано; __slidLab.set (QA) оновлює «Перевірити».
//  18) Збільшення зображення (engine-img-zoom-1117), 360 px, сенсор: img екрана — кнопка з лупою; дотик → повноекранний перегляд (той самий src, cap),
//      решта сторінки inert, «+ / −», щипок двома пальцями й перетягування, Esc закриває й повертає фокус (урок лишається відкритим);
//      з клавіатури — Enter, «+», Tab у межах перегляду; у тесті рівня — те саме; перегляд не ширший за екран.
//  19) fig grid (engine-fig-grid-caption-1117): без look — нейтральна сітка з cap і label, без «шоколад»/«з'їдені»; look: "chocolate" — як раніше,
//      підпис «пунктиром — з'їдені часточки» лише при k > 0.
//  5–7) Service worker (engine-sw-version-skew): деплой нової версії не змішує index.html і app.js; файл зі старого кешу не віддається
//     (P3-6); оновлення не перезавантажує сторінку посеред уроку, а версія подій журналу лишається версією сторінки (P3-4); застосунок зі старим SW після одного змішаного відкриття сам переходить на консистентну нову версію.
//  22) Тексти інтерфейсу (engine-ui-text-1117): «1 день поспіль», «тренувань ще не було» (без роду, D-020), картка уроку «7 кроків · 4 завдання»
//      і «1 крок · 1 завдання», «0 з 1 уроку», «Помилка в цьому уроці пов'язана…» за однієї помилки й «Помилки…» за двох, «пройдено ✓» замість
//      «є уроки» / «зараз:» для повністю пройденого розділу.
//  23) Читабельність рендеру (engine-render-legibility-1117), 360 px: підписи numline (дуги стрибків, точка біля краю, дві точки в одному місці),
//      смужок fraction і solid з осями — у межах SVG і без накладань; назва повзунка «$\alpha$» — «α» без «\»; знак кореня — маска до риски;
//      \to ширша за «−»; підкреслення <u> з відступом; align — роки шкали цілком у полі й «N з 18 кілець»; strata — знахідки не налазять на стрілку; клік по точці numline — фокус на її ручку, стрілки рухають її (qa-drag-points B1).
//  26) Мова змісту предмета (engine-eng-lang-attr, D-054): targetLang: "en" — lang="en" на змісті уроку, тесту й тренування, хром рушія — uk;
//      літери варіантів A, B, C (engine-eng-validate), без targetLang — А, Б, В;
//      згорнутий переклад uk на екрані теорії й подія uk_open; предмет без targetLang — жодного lang у плеєрі.
//  27) Мовні вправи англійською (engine-eng-lang-core): word — примітка «In British English: colour.» (en), «Almost: check the spelling.» (en),
//      «Перемкни клавіатуру на англійську.» (uk), кирилична «с» у «сat», «Yes.»; stress складами; без targetLang — як раніше.
//  28) Речення з плиток build (engine-eng-build; docs/design/english.md §5.5), 360 px: банк — усі плитки й пастка, перемішані, рядок порожній, «Перевірити»
//      неактивна; дотик — у рядок, ще раз — назад; клавіатура (Enter, фокус після прибирання); хибний порядок — позначки з «неправильно», повідомлення,
//      та сама відповідь не витрачає спробу; кілька правильних порядків; показ відповіді; raw — зібране речення; тест рівня — без позначок;
//      без targetLang — точне порівняння; без горизонтальної прокрутки, плитки ≥ 44 px.
// Запуск: node tools/test-ui.mjs [--browser /opt/pw-browsers/chromium]
// Playwright: require("playwright") (NODE_PATH) або PLAYWRIGHT_MODULE / /opt/node-tools/node_modules/playwright.
// Браузер, як у test-answer-ui.py: --browser / SLID_BROWSER → /opt/pw-browsers/chromium, якщо є (PW_DEFAULT=1 вимикає) → Chromium самого
// Playwright (PLAYWRIGHT_BROWSERS_PATH, типово ~/.cache/ms-playwright — так у CI, job browser у pages.yml).
import http from "node:http"; import crypto from "node:crypto"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
import { ROOT } from "./lib.mjs";

const args = process.argv.slice(2), opt = (k, d) => args.includes(k) ? args[args.indexOf(k) + 1] : d;
const require = createRequire(import.meta.url);
let pw;
// явно заданий PLAYWRIGHT_MODULE не підміняємо іншим модулем (рев'ю tools-ci-test-ui P3-1): не завантажився — rc 2
if (process.env.PLAYWRIGHT_MODULE) {
  try { pw = require(process.env.PLAYWRIGHT_MODULE); }
  catch (e) { console.error(`PLAYWRIGHT_MODULE=${process.env.PLAYWRIGHT_MODULE} не завантажується: ${e.message.split("\n")[0]}`); process.exit(2); }
} else for (const m of ["playwright", "/opt/node-tools/node_modules/playwright"]) { try { pw = require(m); break; } catch {} }
if (!pw) { console.error("Немає Node-модуля playwright: задай NODE_PATH або PLAYWRIGHT_MODULE"); process.exit(2); }
const BROWSER = opt("--browser", process.env.SLID_BROWSER || (fs.existsSync("/opt/pw-browsers/chromium") && !process.env.PW_DEFAULT ? "/opt/pw-browsers/chromium" : undefined));

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webmanifest": "application/manifest+json" };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, "http://x").pathname), f = path.join(ROOT, rel.endsWith("/") ? rel + "index.html" : rel);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const URL0 = `http://127.0.0.1:${server.address().port}/`;

let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log("✗ " + msg); } };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// фікстура: 5 клас; файли пулів «не за програмою» — pB (розділ fB), pV (розділ 6 кл. fV з also fA), pA (fA)
const FIX = {
  sections: [
    ["fA", 5, [1, 4], "QA A", ["fa1", "fa2"]], ["fB", 5, [5, 8], "QA B", ["fb1"]], ["fE", 5, [9, 10], "QA E", ["fe1"]],
    ["fI", 5, [11, 12], "QA I", ["fi0", "fiNew", "fiOld", "fi3", "fi4"]], ["fV", 6, [1, 4], "QA V", ["fv1", "fv2"]]],
  pools: [["pB", "fB", null, ["fb1"]], ["pV", "fV", ["fA"], ["fv1", "fa2", "fv2"]], ["pA", "fA", null, ["fa1", "fa2"]]],
};
const seed = { grade: 5, unlockAll: false, subject: "math", lessons: { fa1: { done: true, stars: 2 }, fiOld: { done: true, stars: 3 } } };
const install = fx => {
  const c = SLID_SUBJECTS.find(c => c.id === "math");
  const lesson = id => ({ id, title: "Урок " + id, icon: "book", screens: [{ type: "intro", title: id, body: "QA" }] });
  c.sections = fx.sections.map(([id, grade, weeks, title, ls]) => ({ id, grade, weeks, title, why: "QA", lessons: ls.map(lesson) }));
  c.pools = fx.pools.map(([id, section, also, ls]) => ({ id, section, ...(also ? { also } : {}), status: "draft", sources: [],
    items: ls.map((l, i) => ({ id: "i" + i, lesson: l, lvl: 1, sk: "num", type: "answer", title: "QA", steps: ["QA"], answer: 1 })) }));
  c.diags = []; delete c.graph;
};

/* Версійний сервер для сценаріїв service worker: те саме дерево, але «деплой» SWV.ver позначає index.html (__page) і app/app.js
   (__eng) — у консистентній сторінці вони рівні. sw.js — з tools/sw.template.js (або з фікстури sw-legacy.template.js — SW до
   виправлення, як у вже встановлених застосунках) з версією деплою; img/ з офлайн-списку прибрано (швидкість), шрифти Google — теж. */
const SWV = { ver: "A", legacy: new Set(), gate: null, log: [] };   // log: [шлях, статус] кожного запиту до сервера
const rd = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const SW_ASSETS = JSON.parse(rd("sw.js").match(/const ASSETS = (\[[\s\S]*?\]);/)[1]).filter(a => !a.startsWith("./img/"));
const variant = (ver, rel) => {
  const legacy = SWV.legacy.has(ver);
  if (rel === "/sw.js") return rd(legacy ? "tools/fixtures/sw-legacy.template.js" : "tools/sw.template.js").replace("__VERSION__", "qa-" + ver)
    .replace("__ASSETS__", JSON.stringify(SW_ASSETS.filter(a => !(legacy && a === "./app/update.js"))));
  if (rel === "/" || rel === "/index.html") { let h = rd("index.html").replace(/<link[^>]*fonts\.googleapis[^>]*>\n/g, "");
    if (legacy) h = h.replace('<script src="app/update.js"></script>\n', "");   // до виправлення update.js не було
    return h.replace("</body>", `<script>window.__page="${ver}"</script></body>`); }
  if (rel === "/app/app.js") return rd("app/app.js") + `\nwindow.__eng="${ver}";`;
  return null;
};
const swServer = http.createServer(async (req, res) => {
  const rel = decodeURIComponent(new URL(req.url, "http://x").pathname), ver = SWV.ver;
  if (rel === "/sw.js" && SWV.gate) await SWV.gate.wait;
  const v = variant(ver, rel);
  const body = v !== null ? v : (() => { const f = path.join(ROOT, rel); return f.startsWith(ROOT) && fs.existsSync(f) && !fs.statSync(f).isDirectory() ? fs.readFileSync(f) : null; })();
  if (body === null) { SWV.log.push([rel, 404]); res.writeHead(404); res.end(); return; }
  // ETag, як на GitHub Pages: умовний запит (If-None-Match) до незмінного файла — 304 без тіла
  const etag = '"' + crypto.createHash("sha1").update(body).digest("hex").slice(0, 16) + '"';
  // app/*.js — з HTTP-кешем на 10 хв, як на GitHub Pages: встановлення нової версії має брати файли повз нього (cache: "reload")
  const cc = rel.startsWith("/app/") ? "max-age=600" : "no-cache";
  const hdr = { "content-type": TYPES[path.extname(rel.endsWith("/") ? "i.html" : rel)] || "application/octet-stream", "cache-control": cc, etag };
  if (req.headers["if-none-match"] === etag) { SWV.log.push([rel, 304]); res.writeHead(304, hdr); res.end(); return; }
  SWV.log.push([rel, 200]); res.writeHead(200, hdr); res.end(body);
});
await new Promise(r => swServer.listen(0, "127.0.0.1", r));
const SWU = `http://127.0.0.1:${swServer.address().port}/`;
const gate = () => { let open; const wait = new Promise(r => open = r); return { wait, open }; };
const until = async (f, ms = 30000) => { const t = Date.now(); while (Date.now() - t < ms) { if (await f().catch(() => false)) return true; await new Promise(r => setTimeout(r, 200)); } return false; };

async function swScenarios(browser) {
  const fresh = async () => {
    const ctx = await browser.newContext({ viewport: { width: 400, height: 860 } });
    const page = await ctx.newPage(), loads = [];
    page.setDefaultTimeout(15000);
    // кожне завантаження сторінки: [index.html, app.js] — у консистентній версії однакові
    page.on("load", async () => { try { loads.push(await page.evaluate(() => [window.__page, window.__eng])); } catch {} });
    return { ctx, page, loads };
  };
  const controlled = async (page, ver) => { await page.evaluate(() => navigator.serviceWorker.ready);
    return until(async () => await page.evaluate(v => navigator.serviceWorker.controller && fetch("sw.js").then(r => r.text()).then(t => t.includes(`"qa-${v}"`)), ver)); };
  const last = loads => loads[loads.length - 1] || [];

  // 5) новий SW: деплой B поверх A → перше відкриття — цілком A (з кешу), далі само перезавантаження — цілком B
  SWV.legacy.clear(); SWV.ver = "A";
  let { ctx, page, loads } = await fresh();
  await page.goto(SWU);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), { ...seed, unlockAll: true });
  ok(await controlled(page, "A"), "SW: версія A встановлена й керує сторінкою");
  // рев'ю engine-sw-version-skew P3-6: SW бере файли лише з кешу СВОЄЇ версії (c.match), а не з будь-якого (caches.match) — інакше файл,
  // якого в новій версії немає, прийшов би зі старого кешу, ще не видаленого. Імітація: інший кеш slid-… з файлом, якого немає ні в
  // кеші A, ні на сервері: правильний SW іде в мережу (404), мутант caches.match віддав би «старий» вміст.
  const planted = await page.evaluate(async () => { const c = await caches.open("slid-zz-old"); await c.put(new Request("qa-old-only.txt"), new Response("old"));
    const r = await fetch("qa-old-only.txt"); return [r.status, await r.text()]; });
  ok(planted[0] === 404 && planted[1] !== "old", `SW: файл лише зі старого кешу не віддається (мережа, 404), а ${JSON.stringify(planted)}`);
  await page.waitForTimeout(1500);
  ok(loads.length === 1, `SW: перше встановлення не перезавантажує сторінку (завантажень ${loads.length})`);
  ok(await page.evaluate(() => window.SLID_UPDATE && !SLID_UPDATE.pending), "SW: після першого встановлення оновлення не чекає");
  SWV.ver = "B"; loads.length = 0; SWV.log = [];
  await page.reload(); await until(async () => loads.length > 0, 5000);
  ok(same(loads[0], ["A", "A"]), `SW: після деплою перше відкриття — консистентна стара версія з кешу [A, A], а ${JSON.stringify(loads[0])}`);
  ok(await until(async () => same(last(loads), ["B", "B"])), `SW: без дій дитини сторінка перезавантажилась у нову версію [B, B], завантаження ${JSON.stringify(loads)}`);
  ok(loads.every(([p, e]) => p === e), `SW: жодного змішаного завантаження, а ${JSON.stringify(loads)}`);
  // встановлення B: незмінні файли — умовним запитом (304), не повним завантаженням (рев'ю P1-1: cache "reload" качав усе заново)
  const changed = new Set(["/sw.js", "/", "/index.html", "/app/app.js"]), same0 = SWV.log.filter(([r]) => !changed.has(r));
  const full = same0.filter(([, c]) => c === 200).map(([r]) => r), n304 = same0.filter(([, c]) => c === 304).length;
  ok(n304 >= 10 && !full.length, `SW: незмінні файли при оновленні — 304 (${n304}), повних завантажень ${full.length}: ${full.slice(0, 5).join(", ")}`);

  // п. 10: версію змісту сторінка з кешу SW питає одразу (warmVersion), а не при першому записі журналу. Детерміновано: друга вкладка, де
  // IndexedDB не відповідає (запис журналу ніколи не почнеться), — версія однаково має стати відомою
  { const p2 = await ctx.newPage(); await p2.addInitScript(() => Object.defineProperty(window, "indexedDB", { value: { open: () => ({}) } }));
    await p2.goto(SWU);
    ok(await until(() => p2.evaluate(() => !!navigator.serviceWorker.controller && SLID_EVIDENCE.cv === "qa-B"), 8000), `evidence: версію спитано при завантаженні, без запису (warmVersion), а ${await p2.evaluate(() => SLID_EVIDENCE.cv)}`);
    await p2.close(); }
  // умови «безпечно перезавантажити» (app/update.js U.safe): аркуш, фокус у полі, онбординг, плеєр
  ok(await page.evaluate(() => SLID_UPDATE.safe()), "update: на головній — безпечно");
  ok(!(await page.evaluate(() => { const h = document.getElementById("sheetHost"); h.innerHTML = "<div class='scrim'></div>"; const r = SLID_UPDATE.safe(); h.innerHTML = ""; return r; })), "update: відкритий аркуш — не безпечно");
  ok(!(await page.evaluate(() => { const i = document.createElement("input"); document.getElementById("view").appendChild(i); i.focus(); const r = SLID_UPDATE.safe(); i.remove(); return r; })), "update: фокус у полі введення — не безпечно");
  ok(!(await page.evaluate(() => { document.body.classList.add("onb-mode"); const r = SLID_UPDATE.safe(); document.body.classList.remove("onb-mode"); return r; })), "update: онбординг — не безпечно");
  // жорстке перезавантаження (Shift+F5): сторінка без контролера, але SW встановлено — had, інакше справжнє оновлення пропуститься
  const cdp = await ctx.newCDPSession(page); loads.length = 0;
  await cdp.send("Page.reload", { ignoreCache: true }); await until(async () => loads.length > 0, 5000);
  const hard = await page.evaluate(async () => { await new Promise(r => setTimeout(r, 300)); return [!!navigator.serviceWorker.controller, SLID_UPDATE.had]; });
  ok(same(hard, [false, true]), `update: після Shift+F5 контролера немає, але had = true, а [controller, had] = ${JSON.stringify(hard)}`);
  await page.reload(); await until(() => page.evaluate(() => !!navigator.serviceWorker.controller));

  // 6) оновлення посеред уроку: не перезавантажувати, доки плеєр відкритий; після закриття — нова версія C
  const g = SWV.gate = gate(); SWV.ver = "C"; loads.length = 0;
  await page.reload(); await until(async () => loads.length > 0, 5000);
  ok(same(loads[0], ["B", "B"]), `SW: деплой C, sw.js ще не отримано — консистентна B, а ${JSON.stringify(loads[0])}`);
  await page.evaluate(() => { window.__mark = 1; window.__slidStart(SLID_SUBJECTS.find(c => c.id === "math").sections.find(x => x.lessons?.length).lessons[0].id); });
  g.open(); SWV.gate = null;
  ok(await until(() => page.evaluate(() => SLID_UPDATE.pending)), "SW: нова версія C активна під час уроку — оновлення чекає (pending)");
  await page.waitForTimeout(2500);
  ok(await page.evaluate(() => window.__mark === 1 && !document.getElementById("player").hidden), "SW: посеред уроку сторінку не перезавантажено, плеєр відкритий");
  ok(/Є оновлення.*щойно буде можна/.test(await page.locator("#toast").innerText()), "SW: тост «Є оновлення… щойно буде можна» під час уроку");
  // tools-engine-p3-1105 п. 10 (рев'ю engine-sw-version-skew P3-4): сторінка B під керуванням нового SW C — версія змісту в журналі подій лишається B
  ok(await page.evaluate(() => SLID_EVIDENCE.cv) === "qa-B", `evidence: посеред уроку з новим SW версія подій — сторінки (qa-B), а ${await page.evaluate(() => SLID_EVIDENCE.cv)}`);
  await page.click("#pClose"); await page.click("#pClose");
  ok(await until(async () => same(last(loads), ["C", "C"])), `SW: після закриття уроку — нова версія [C, C], завантаження ${JSON.stringify(loads)}`);
  ok(loads.every(([p, e]) => p === e), `SW: урок — жодного змішаного завантаження, а ${JSON.stringify(loads)}`);
  ok(await until(() => page.evaluate(() => SLID_EVIDENCE.cv === "qa-C")), `evidence: після перезавантаження в C версія подій — qa-C, а ${await page.evaluate(() => SLID_EVIDENCE.cv)}`);
  await ctx.close();

  // 7) застосунок зі СТАРИМ SW (до виправлення): деплой нової версії — одне змішане відкриття (старий SW так працює), далі
  //    app/update.js (його немає в старому кеші — прийшов з мережі новим) сам перезавантажує в консистентну нову версію
  SWV.legacy = new Set(["L"]); SWV.ver = "L";
  ({ ctx, page, loads } = await fresh());
  await page.goto(SWU);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), { ...seed, unlockAll: true });
  ok(await controlled(page, "L"), "старий SW: версія L встановлена й керує сторінкою");
  SWV.ver = "M"; loads.length = 0;
  await page.reload(); await until(async () => loads.length > 0, 5000);
  ok(same(loads[0], ["M", "L"]), `старий SW: перше відкриття після деплою змішане [M, L] (відтворення бага), а ${JSON.stringify(loads[0])}`);
  ok(await until(async () => same(last(loads), ["M", "M"])), `старий SW: далі само — консистентна нова [M, M], завантаження ${JSON.stringify(loads)}`);
  ok(loads.length <= 2, `старий SW: змішане лише одне відкриття, завантаження ${JSON.stringify(loads)}`);
  await ctx.close();
}

async function phoneScenarios(browser) {
  const ctx = await browser.newContext({ ...pw.devices["Pixel 7"], serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  page.setDefaultTimeout(7000);
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), { ...seed, grade: 6 });
  await page.reload();
  ok(await page.evaluate(() => matchMedia("(pointer: coarse)").matches), "телефон: емуляція Pixel 7 — основний вказівник палець (pointer: coarse)");
  const A = (o, title) => ({ type: "answer", title, body: "QA", steps: ["QA"], ...o });
  const SEC = { id: "fS", grade: 6, weeks: [15, 16], title: "QA S", why: "QA", lessons: [{ id: "fs1", title: "Урок fs1", icon: "book", screens: [
    { type: "intro", title: "Початок", body: "QA" }, A({ answer: 10000, scale: true }, "Масштаб"), A({ answer: 10000, scale: true }, "Масштаб 2"),
    A({ answerKind: "ratio", answer: "2 : 3" }, "Відношення"), A({ answer: 10000 }, "Без scale"), { type: "info", title: "Кінець", body: "QA" }] }] };
  await page.evaluate(install, FIX);
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("fs1"); }, SEC);
  await page.tap("#action");   // інтро → масштаб
  const field = () => page.evaluate(() => { const i = document.querySelector("#numIn"); return { mode: i.getAttribute("inputmode"), keys: [...document.querySelectorAll(".anskeys button")].map(b => b.dataset.ins),
    help: document.querySelector("#stage .numbox ~ .fix")?.textContent || "", focused: document.activeElement === i }; });
  const f1 = await field();
  ok(f1.mode === "decimal", `телефон, scale: inputmode="decimal" (цифрова клавіатура), а ${f1.mode}`);
  ok(f1.keys.includes(":"), `телефон, scale: є кнопка «:», а ${JSON.stringify(f1.keys)}`);
  ok(/кнопка «:»/.test(f1.help), `телефон, scale: підказка про кнопку «:», а «${f1.help}»`);
  ok(!f1.focused, "телефон: поле без автофокусу (клавіатура не відкривається сама)");
  const verdict = async () => { await page.tap("#action"); return page.locator("#numIn").evaluate(i => i.classList.contains("is-ok") ? "ok" : i.classList.contains("is-bad") ? "bad" : "—"); };
  await page.tap("#numIn"); await page.keyboard.type("1"); await page.tap('.anskeys button[data-ins=":"]'); await page.keyboard.type("10000");
  const v1 = await page.inputValue("#numIn");
  ok(v1 === "1:10000", `телефон, scale: дотики «1», «:», «10000» дають «1:10000», а «${v1}»`);
  ok(await verdict() === "ok", "телефон, scale: «1:10000» при ключі 10000 зараховано");
  await page.tap("#action");   // → «Масштаб 2»: неправильний масштаб «1 : 1000» — bad
  await page.tap("#numIn"); await page.keyboard.type("1 "); await page.tap('.anskeys button[data-ins=":"]'); await page.keyboard.type(" 1000");
  ok(await verdict() === "bad", "телефон, scale: «1 : 1000» при ключі 10000 — не зараховано");
  await page.tap("#numIn"); await page.fill("#numIn", "1 : 10000"); await page.dispatchEvent("#numIn", "input");
  ok(await verdict() === "ok", "телефон, scale: друга спроба «1 : 10000» — зараховано");
  await page.tap("#action");   // → відношення
  const f2 = await field();
  ok(f2.keys.includes(":") && f2.mode === "text", `телефон, ratio: кнопка «:» (inputmode text), а ${JSON.stringify(f2)}`);
  await page.tap("#numIn"); await page.keyboard.type("23"); await page.locator("#numIn").evaluate(i => i.setSelectionRange(1, 1));
  await page.tap('.anskeys button[data-ins=":"]');
  const v2 = await page.inputValue("#numIn");
  ok(v2 === "2:3", `телефон, ratio: «:» вставлено в місце курсора — «2:3», а «${v2}»`);
  ok(await verdict() === "ok", "телефон, ratio: «2:3» зараховано");
  await page.tap("#action");   // → без scale
  const f3 = await field();
  ok(f3.mode === "decimal" && !f3.keys.includes(":") && !/кнопка «:»/.test(f3.help), `телефон, без scale: ні кнопки «:», ні підказки, а ${JSON.stringify(f3)}`);
  ok(!errors.length, "телефон, помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 15) Звичайний дріб у полі number уроку (engine-number-fraction-input-1117, плейтест g8 №6, №17): «/» і пробіл не викидаються,
   «3/2» і «1 1/2» при ключі 1.5 зараховано за значенням, «32» — ні; кнопки «/», «пробіл» і підказка «Дріб — через риску» — як у тренуванні;
   4 клас із цілим ключем — без кнопок і підказки (дробів ще немає). Синтетична фікстура, без живого content/. */
async function numberFractionScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  page.setDefaultTimeout(7000);
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), { ...seed, grade: 8, unlockAll: true });
  await page.reload();
  const N = (answer, title) => ({ type: "number", title, body: "QA", answer });
  const secs = [{ id: "fN", grade: 8, weeks: [15, 16], title: "QA N", why: "QA", lessons: [{ id: "fn1", title: "Урок fn1", icon: "book", screens: [
      { type: "intro", title: "Початок", body: "QA" }, N(1.5, "Дріб 1"), N(1.5, "Дріб 2"), N(1.5, "Дріб 3"), N(-0.75, "Від'ємний"), { type: "info", title: "Кінець", body: "QA" }] }] },
    { id: "fM", grade: 4, weeks: [15, 16], title: "QA M", why: "QA", lessons: [{ id: "fm1", title: "Урок fm1", icon: "book", screens: [
      { type: "intro", title: "Початок", body: "QA" }, N(12, "Ціле"), { type: "info", title: "Кінець", body: "QA" }] }] }];
  await page.evaluate(install, FIX);
  await page.evaluate(ss => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(...ss); window.__slidStart("fn1"); }, secs);
  await page.click("#action");   // інтро → «Дріб 1»
  const field = () => page.evaluate(() => ({ keys: [...document.querySelectorAll("#stage .anskeys button")].map(b => b.dataset.ins),
    help: document.querySelector("#stage .numbox ~ .anskeys ~ .fix, #stage .numbox ~ .fix")?.textContent || "", sign: !!document.querySelector("#numSign") }));
  const verdict = async () => { await page.click("#action"); return page.locator("#numIn").evaluate(i => i.classList.contains("is-ok") ? "ok" : i.classList.contains("is-bad") ? "bad" : "—"); };
  const typeIn = async v => { await page.fill("#numIn", ""); await page.type("#numIn", v); return page.inputValue("#numIn"); };
  const f1 = await field();
  ok(f1.keys.includes("/") && f1.keys.includes(" "), `number 8 кл.: кнопки «/» і «пробіл», а ${JSON.stringify(f1.keys)}`);
  ok(!f1.keys.includes("-") && f1.sign, `number 8 кл.: знак — кнопкою «±», без другої «−», а ${JSON.stringify(f1)}`);
  ok(/Дріб — через риску/.test(f1.help), `number 8 кл.: підказка «Дріб — через риску», а «${f1.help}»`);
  const v1 = await typeIn("3/2");
  ok(v1 === "3/2", `number: «3/2» лишається «3/2» (не «32»), а «${v1}»`);
  ok(await verdict() === "ok", "number: «3/2» при ключі 1.5 зараховано");
  await page.click("#action");   // → «Дріб 2»: «32» — помилка, далі мішане «1 1/2» кнопками
  await typeIn("32");
  ok(await verdict() === "bad", "number: «32» при ключі 1.5 — не зараховано");
  await page.fill("#numIn", ""); await page.type("#numIn", "1"); await page.click('#stage .anskeys button[data-ins=" "]');
  await page.type("#numIn", "1"); await page.click('#stage .anskeys button[data-ins="/"]'); await page.type("#numIn", "2");
  const v2 = await page.inputValue("#numIn");
  ok(v2 === "1 1/2", `number: кнопки дають «1 1/2», а «${v2}»`);
  ok(await verdict() === "ok", "number: «1 1/2» при ключі 1.5 зараховано (друга спроба)");
  await page.click("#action");   // → «Дріб 3»: десятковий запис, як і раніше
  await typeIn("1.5");
  ok(await page.inputValue("#numIn") === "1,5" && await verdict() === "ok", "number: «1.5» → «1,5» і зараховано");
  await page.click("#action");   // → від'ємний: «-3/4» при ключі −0.75
  await typeIn("-3/4");
  ok(await verdict() === "ok", "number: «-3/4» при ключі −0.75 зараховано");
  await page.evaluate(() => window.__slidStart("fm1"));
  await page.click("#action");
  const f2 = await field();
  ok(!f2.keys.length && !f2.help, `number 4 кл., цілий ключ: без кнопок і підказки, а ${JSON.stringify(f2)}`);
  ok(!errors.length, "number дроби, помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}
/* 16) Підсумок тесту рівня з baseline-темами (engine-diag-baseline-plan-1117, плейтест g5 №3, g7 №10, g9 №8): тема з see — «тема є в уроці …»
   з кнопкою на урок (свого предмета — без назви предмета, іншого — з нею), без «попроси дорослого»; «попроси дорослого» — лише для теми без see;
   блок «З програми N класу» — і без жодної «уже вмієш» (теми cur «попереду»). Синтетична фікстура (математика 5 кл. + урок «Історії»). */
async function diagBaselineSeeScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const fx = ([withPlain]) => {
    const lesson = id => ({ id, title: "Урок " + id, icon: "book", screens: [{ type: "intro", title: id, body: "QA" }] });
    const m = SLID_SUBJECTS.find(c => c.id === "math"), h = SLID_SUBJECTS.find(c => c.id !== "math");
    m.sections = [{ id: "fS5", grade: 5, weeks: [1, 52], title: "QA S5", why: "QA", lessons: ["fs1", "fs2", "fs3"].map(lesson) }];
    h.sections.push({ id: "fH5", grade: 5, weeks: [1, 52], title: "QA H5", why: "QA", lessons: [lesson("hx1")] });
    m.pools = []; delete m.graph;
    const topics = [{ id: "apos", title: "Апостроф QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"], see: ["fs2"] },
      { id: "era", title: "Межа ер QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"], see: ["hx1"] },
      ...(withPlain ? [{ id: "nob", title: "Без уроку QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"] }] : []),
      { id: "c1", title: "Тема класу QA", kind: "cur", lessons: ["fs3"] }];
    const ch = topic => ({ topic, type: "choice", sk: "num", title: "Q " + topic, opts: ["a", "b"], correct: 0 });
    m.diags = [{ id: "dgS", grade: 5, title: "QA тест", why: "QA", status: "draft", topics,
      items: topics.flatMap(t => t.kind === "pre" ? [ch(t.id), ch(t.id)] : [ch(t.id)]) }];
    return h.short;
  };
  const run = async withPlain => {
    await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, unlockAll: false, subject: "math" })); }); await page.reload();
    const hShort = await page.evaluate(fx, [withPlain]);
    await page.evaluate(() => { document.querySelector('.tab[data-tab="path"]').click(); document.querySelector('.tab[data-tab="path"]').click(); });
    await page.click('[data-diag="math"]'); await page.click("[data-diag-go]");
    while (await page.locator("#skip").isVisible()) await page.click("#skip");
    const end = await page.locator("#stage").innerText();
    const rows = await page.locator("#stage .basegap [data-lesson]").evaluateAll(bs => bs.map(b => [b.dataset.lesson, b.innerText.replace(/\s+/g, " ")]));
    return { end, rows, hShort };
  };
  { const { end, rows, hShort } = await run(false);
    ok(/тема є в уроці «Урок fs2» \(5 клас\)/.test(end), `see свого предмета: «тема є в уроці «Урок fs2» (5 клас)», а ${end}`);
    ok(end.includes(`тема є в уроці «Урок hx1» (${hShort}, 5 клас)`), `see іншого предмета: з назвою предмета, а ${end}`);
    ok(same(rows.map(r => r[0]), ["fs2", "hx1"]), `see: кнопки на fs2 і hx1, а ${JSON.stringify(rows)}`);
    ok(rows[1] && rows[1][1].includes(hShort) && !rows[0][1].includes(hShort), `see: назва предмета лише в рядку іншого предмета, а ${JSON.stringify(rows)}`);
    ok(!/попроси вчителя|у застосунку (поки )?немає —|учителем або дорослим/.test(end), `усі baseline з see: без «попроси дорослого», а ${end}`);
    ok(/З програми 5 класу[\s\S]*Тема класу QA[\s\S]*попереду/i.test(end), `без «уже вмієш»: блок «З програми 5 класу» з «попереду», а ${end}`);
    ok(!end.includes("відкрито без черги"), "без «уже вмієш»: без речення про відкриті уроки");
    await page.click('#stage [data-lesson="hx1"]');
    ok(await page.locator("#player").isVisible(), "see: кнопка відкриває урок іншого предмета"); }
  { const { end, rows } = await run(true);
    ok(/Без уроку QA[^.]*\. Уроків на нього у застосунку немає — попроси вчителя або дорослого/.test(end), `тема без see: «попроси дорослого», а ${end}`);
    ok(!/потренувати: [^.]*(Апостроф QA|Межа ер QA)/.test(end), `теми з see не в переліку «попроси дорослого», а ${end}`);
    ok(same(rows.map(r => r[0]), ["fs2", "hx1"]), `з темою без see: кнопки see ті самі, а ${JSON.stringify(rows)}`); }
  ok(!errors.length, "baseline see: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}
/* 17) Ділення кутом 4572 : 3 з input (engine-lab-column-digits-1117, плейтест g5 №10, g6 №7) на телефоні: «Перевірити» неактивна,
   доки є «?»; дотик по клітинці — фокус на ній без «+1»; цифри підряд — автоперехід; дотик по 2-й клітинці кладе цифру туди; «1524» зараховано. */
async function labColumnDivScenario(browser) {
  const ctx = await browser.newContext({ ...pw.devices["Pixel 7"], viewport: { width: 360, height: 760 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 6, unlockAll: true })); }); await page.reload();
  const DIV = { type: "lab", title: "Ділення", body: "QA", lab: { kind: "column", op: ":", a: "4572", b: "3", input: true }, goal: "col==1524", solution: { d0: 4, d1: 2, d2: 5, d3: 1 }, fbOk: "ok", fbBad: "bad" };
  await page.evaluate(scr => { SLID_SUBJECTS.find(c => c.id === "math").sections.push({ id: "qLab", grade: 6, weeks: [1, 2], title: "QA", why: "QA",
    lessons: [{ id: "qlab1", title: "QA", icon: "book", screens: scr }] }); window.__slidStart("qlab1"); }, [DIV, DIV, { type: "info", title: "Кінець", body: "QA" }]);
  await page.waitForSelector(".lab-dg");
  const tap = async id => { const b = await page.locator(`.lab-dg[data-dg="${id}"]`).boundingBox(); await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2); };
  const q = () => page.evaluate(() => { const s = window.__slidLab.get(); return { v: [s.d3, s.d2, s.d1, s.d0].join(","), dis: document.querySelector("#action").disabled, foc: document.activeElement?.dataset?.dg || null }; });
  ok((await q()).dis, "lab column: «Перевірити» неактивна на «????»");
  await tap("d3");
  let r = await q(); ok(r.foc === "d3" && r.v === "-1,-1,-1,-1", `lab column: дотик по 1-й — фокус без «+1», а ${JSON.stringify(r)}`);
  await page.keyboard.insertText("1");
  r = await q(); ok(r.foc === "d2" && r.v === "1,-1,-1,-1" && r.dis, `lab column: «1» → у 1-й, фокус на 2-й, кнопка ще неактивна, а ${JSON.stringify(r)}`);
  await tap("d1"); await page.keyboard.insertText("2");
  r = await q(); ok(r.v === "1,-1,2,-1" && r.foc === "d0", `lab column: дотик по 3-й кладе цифру туди, а ${JSON.stringify(r)}`);
  await tap("d2"); await page.keyboard.insertText("5"); await tap("d0"); await page.keyboard.insertText("4");
  r = await q(); ok(r.v === "1,5,2,4" && !r.dis, `lab column: 1524 — кнопка активна, а ${JSON.stringify(r)}`);
  await page.click("#action");
  ok(await page.evaluate(() => document.querySelector(".lab").classList.contains("is-ok")), "lab column: «1524» зараховано");
  // QA-доступ (playtest.py, test-answer-ui): __slidLab.set(розв'язок) оновлює й «Перевірити»
  await page.click("#action"); await page.waitForSelector(".lab-dg");
  ok((await q()).dis, "lab column, 2-й екран: «Перевірити» неактивна на «????»");
  await page.evaluate(sol => window.__slidLab.set(sol), DIV.solution);
  ok(!(await q()).dis, "lab column: __slidLab.set(розв'язок) — «Перевірити» активна");
  ok(!errors.length, "lab column, помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 20) Стирання цифри в ділення кутом без keydown (engine-1117-followups п. 1–2; рев'ю engine-lab-column-digits-1117 P2-1, P3-1).
   Екранна клавіатура Android шле keydown «Unidentified», тож «стерти» видно лише як input. Імітуємо справжнім видаленням
   (execCommand("delete") — beforeinput/input deleteContentBackward без keydown Backspace). */
async function labColumnEraseScenario(browser) {
  const ctx = await browser.newContext({ ...pw.devices["Pixel 7"], viewport: { width: 360, height: 760 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 6, unlockAll: true })); }); await page.reload();
  const DIV = { type: "lab", title: "Ділення", body: "QA", lab: { kind: "column", op: ":", a: "4572", b: "3", input: true }, goal: "col==1524", solution: { d0: 4, d1: 2, d2: 5, d3: 1 }, fbOk: "ok", fbBad: "bad" };
  await page.evaluate(scr => { SLID_SUBJECTS.find(c => c.id === "math").sections.push({ id: "qLabE", grade: 6, weeks: [1, 2], title: "QA", why: "QA",
    lessons: [{ id: "qlabe1", title: "QA", icon: "book", screens: scr }] }); window.__slidStart("qlabe1"); }, [DIV, { type: "info", title: "Кінець", body: "QA" }]);
  await page.waitForSelector(".lab-dg");
  const q = () => page.evaluate(() => { const s = window.__slidLab.get(); return { v: [s.d3, s.d2, s.d1, s.d0].join(","), dis: document.querySelector("#action").disabled, foc: document.activeElement?.dataset?.dg || null }; });
  // видалення «як з екранної клавіатури»: фокус, курсор у кінець поля, delete — без keydown Backspace
  const erase = id => page.evaluate(id => { const c = document.querySelector(`.lab-dg[data-dg="${id}"]`); c.focus(); c.setSelectionRange(c.value.length, c.value.length);
    let kd = 0; const f = () => kd++; c.addEventListener("keydown", f); document.execCommand("delete"); c.removeEventListener("keydown", f); return kd; }, id);
  await page.focus('.lab-dg[data-dg="d3"]'); await page.keyboard.insertText("1"); await page.keyboard.insertText("5");
  let r = await q(); ok(r.v === "1,5,-1,-1" && r.foc === "d1", `lab erase: «1», «5» вписано, фокус на 3-й, а ${JSON.stringify(r)}`);
  // рев'ю engine-1117-followups P1-1: не-цифра з числової клавіатури («,» «.» «-» пробіл, літера) нічого не стирає — ні в порожній клітинці, ні в заповненій
  for (const ch of [",", ".", "-", " ", "a"]) { await page.focus('.lab-dg[data-dg="d1"]'); await page.keyboard.insertText(ch);
    r = await q(); ok(r.v === "1,5,-1,-1" && r.foc === "d1", `lab erase: «${ch}» у порожній 3-й не стирає 2-гу, а ${JSON.stringify(r)}`); }
  // і з виділеною цифрою (фокус дотиком), і з кареткою після неї (поле вже у фокусі, «5.»)
  for (const ch of [",", ".", "-"]) { await page.focus('.lab-dg[data-dg="d2"]'); await page.keyboard.insertText(ch);
    r = await q(); ok(r.v === "1,5,-1,-1" && r.foc === "d2", `lab erase: «${ch}» над заповненою 2-ю не стирає її, а ${JSON.stringify(r)}`); }
  await page.focus('.lab-dg[data-dg="d1"]');
  ok(await erase("d2") === 0, "lab erase: імітація без keydown");
  r = await q(); ok(r.v === "1,-1,-1,-1" && r.foc === "d3" && r.dis, `lab erase: стерти заповнену 2-гу через input — «?», фокус на 1-й, кнопка неактивна, а ${JSON.stringify(r)}`);
  await page.focus('.lab-dg[data-dg="d3"]'); await page.keyboard.insertText("1");
  r = await q(); ok(r.foc === "d2" && r.v === "1,-1,-1,-1", `lab erase: після стирання знову вписуємо, а ${JSON.stringify(r)}`);
  await erase("d2");
  r = await q(); ok(r.v === "-1,-1,-1,-1" && r.foc === "d3", `lab erase: Backspace у порожній 2-й (без keydown) — назад до 1-ї й стерти її, а ${JSON.stringify(r)}`);
  await erase("d3");
  r = await q(); ok(r.v === "-1,-1,-1,-1" && r.foc === "d3", `lab erase: Backspace у порожній 1-й — нічого не ламає, а ${JSON.stringify(r)}`);
  for (const d of "1524") await page.keyboard.insertText(d);
  r = await q(); ok(r.v === "1,5,2,4" && !r.dis, `lab erase: після стирань 1524 вписано, кнопка активна, а ${JSON.stringify(r)}`);
  await page.click("#action");
  ok(await page.evaluate(() => document.querySelector(".lab").classList.contains("is-ok")), "lab erase: «1524» зараховано");
  ok(!errors.length, "lab erase, помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}
/* 21) Картка «Твій план» на головній для baseline-тем із see (engine-1117-followups п. 3; рев'ю engine-diag-baseline-plan-1117 P3-1):
   коротко («Потренуй: «А», «Б» — є уроки…», урок названо, лише коли він один) і кнопки на уроки see; «з дорослим» — лише для теми без see.
   Кнопка на урок — одна: дві теми з тим самим see і see = урок «з чого почати» не дублюють кнопок ні на картці, ні в підсумку тесту
   (рев'ю engine-1117-followups P3-1, P3-2). Фікстура — як у сценарії 16. */
async function planCardSeeScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const fx = ([mode]) => {
    const lesson = id => ({ id, title: "Урок " + id, icon: "book", screens: [{ type: "intro", title: id, body: "QA" }] });
    const m = SLID_SUBJECTS.find(c => c.id === "math"), h = SLID_SUBJECTS.find(c => c.id !== "math");
    m.sections = [{ id: "fS5", grade: 5, weeks: [1, 52], title: "QA S5", why: "QA", lessons: ["fs1", "fs2", "fs3"].map(lesson) }];
    h.sections.push({ id: "fH5", grade: 5, weeks: [1, 52], title: "QA H5", why: "QA", lessons: [lesson("hx1")] });
    m.pools = []; delete m.graph;
    // dup: обидві теми ведуть на fs1 — це ж і перший урок «з чого почати» (baseStart за for: fS5)
    const see = mode === "dup" ? [["fs1"], ["fs1"]] : [["fs2"], ["hx1"]];
    const topics = [{ id: "apos", title: "Апостроф QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"], see: see[0] },
      { id: "era", title: "Межа ер QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"], see: see[1] },
      ...(mode === "plain" ? [{ id: "nob", title: "Без уроку QA", kind: "pre", baseline: true, lessons: [], for: ["fS5"] }] : []),
      { id: "c1", title: "Тема класу QA", kind: "cur", lessons: ["fs3"] }];
    const ch = topic => ({ topic, type: "choice", sk: "num", title: "Q " + topic, opts: ["a", "b"], correct: 0 });
    m.diags = [{ id: "dgS", grade: 5, title: "QA тест", why: "QA", status: "draft", topics,
      items: topics.flatMap(t => t.kind === "pre" ? [ch(t.id), ch(t.id)] : [ch(t.id)]) }];
    return h.short;
  };
  const run = async mode => {
    await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, unlockAll: false, subject: "math" })); }); await page.reload();
    const hShort = await page.evaluate(fx, [mode]);
    await page.evaluate(() => { document.querySelector('.tab[data-tab="path"]').click(); document.querySelector('.tab[data-tab="path"]').click(); });
    await page.click('[data-diag="math"]'); await page.click("[data-diag-go]");
    while (await page.locator("#skip").isVisible()) await page.click("#skip");
    const endIds = await page.locator("#stage .basegap [data-lesson]").evaluateAll(bs => bs.map(b => b.dataset.lesson));
    while (await page.locator("#player").isVisible()) await page.click("#pClose");   // «#action» підсумку відкриває урок — закриваємо тест
    if (await page.locator("#view [data-up]").count()) await page.click("#view [data-up]");
    const card = page.locator("#view .plancard.s-math");
    const text = (await card.innerText()).replace(/\s+/g, " ");
    const rows = await card.locator("[data-lesson]").evaluateAll(bs => bs.map(b => [b.dataset.lesson, b.innerText.replace(/\s+/g, " ")]));
    return { text, ids: rows.map(r => r[0]), rows, endIds, hShort, card };
  };
  { const { text, ids, rows, hShort, card } = await run("two");
    ok(text.includes("Потренуй: «Апостроф QA», «Межа ер QA» — є уроки, де це повторюється."), `картка плану: теми з see одним коротким реченням, а ${text}`);
    ok(!/учителем або дорослим/.test(text), `картка плану: усі теми з see — без «з дорослим», а ${text}`);
    ok(same(ids, ["fs2", "hx1", "fs1"]), `картка плану: кнопки на уроки see (fs2, hx1) і «з чого почати» (fs1), а ${JSON.stringify(ids)}`);
    ok(rows[1] && rows[1][1].includes(hShort) && rows[1][1].includes("Урок hx1"), `картка плану: кнопка see іншого предмета — з назвою уроку й предмета, а ${JSON.stringify(rows)}`);
    await card.locator('[data-lesson="hx1"]').click();
    ok(await page.locator("#player").isVisible(), "картка плану: кнопка see відкриває урок іншого предмета"); }
  { const { text, ids } = await run("plain");
    ok(/Потренуй з учителем або дорослим: «Без уроку QA»\./.test(text) && !/дорослим: [^.]*(Апостроф|Межа ер)/.test(text), `картка плану: «з дорослим» лише для теми без see, а ${text}`);
    ok(text.includes("Повтори: «Апостроф QA», «Межа ер QA» — є уроки"), `картка плану: теми з see поруч із темою без see — «Повтори: …», а ${text}`);
    ok(ids.includes("fs2") && ids.includes("hx1"), `картка плану з темою без see: кнопки see ті самі, а ${JSON.stringify(ids)}`); }
  { const { text, ids, endIds } = await run("dup");
    ok(text.includes("— тема є в уроці «Урок fs1» (5 клас)."), `картка плану: один урок see — названо в тексті, а ${text}`);
    ok(same(ids, ["fs1"]), `картка плану: see = «з чого почати», дві теми з тим самим see — одна кнопка, а ${JSON.stringify(ids)}`);
    ok(same(endIds, ["fs1"]), `підсумок тесту: дві теми з тим самим see і «з чого почати» — одна кнопка, а ${JSON.stringify(endIds)}`); }
  ok(!errors.length, "картка плану see: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

async function demoGuardScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const st = () => page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
  const boot = async q => { await page.goto(URL0 + q); await page.evaluate(() => { sessionStorage.clear(); localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, subject: "math", unlockAll: false, name: "Дитина", xp: 7 })); }); await page.goto(URL0 + q); await page.click('.tab[data-tab="profile"]'); };
  for (const q of ["", "?demo=x", "?demo=", "?demo=RUTAS1DW"]) {
    await boot(q); ok(await page.locator("#demo").count() === 0, `demo: URL «${q}» — кнопки немає взагалі`);
  }
  await boot(""); await page.click('.tab[data-tab="progress"]');
  ok(!/демо-дані/.test(await page.locator(".empty").innerText()), "demo: без ключа порожній «Прогрес» не радить демо-дані");
  await boot("?demo=rutas1dw");
  ok(await page.locator("#demo").count() === 1, "demo: з ключем кнопка є");
  await page.click('.tab[data-tab="path"]'); await page.click('.tab[data-tab="profile"]');
  ok(await page.locator("#demo").count() === 1, "demo: перерендер не губить кнопку");
  const keyStored = await page.evaluate(() => JSON.stringify(localStorage).includes("rutas1dw") || document.cookie.includes("rutas1dw"));
  ok(!keyStored, "demo: ключ не потрапляє в localStorage (slid.v1)");
  await page.goto(URL0); await page.click('.tab[data-tab="profile"]');
  ok(await page.locator("#demo").count() === 1, "demo: ключ пам'ятається до кінця вкладки (sessionStorage)");
  await page.click('.tab[data-tab="progress"]');
  ok(/демо-дані/.test(await page.locator(".empty").innerText()), "demo: з ключем порожній «Прогрес» радить демо-дані");
  await page.click('.tab[data-tab="profile"]');
  await page.click("#demo");
  ok(/Натисни ще раз/.test(await page.locator("#demo").innerText()) && (await st()).xp === 7, "demo: перше натискання лише просить підтвердження, прогрес не змінено");
  ok(!/акаунт/.test(await page.locator("#demo").innerText()), "demo: без входу підпис не згадує акаунт");
  await page.click("#demo");
  ok(await until(async () => (await st()).xp !== 7), "demo: друге натискання заповнює демо-прогрес");
  ok(!(await page.evaluate(() => JSON.stringify(localStorage).includes("rutas1dw"))), "demo: після заповнення ключа немає в localStorage (slid.v1)");
  // P3-1: таймер першого натискання скасовується другим — нове підтвердження живе повні 4 с
  await page.click('.tab[data-tab="profile"]'); await page.waitForTimeout(3000);
  await page.click("#demo"); await page.waitForTimeout(2000);
  ok(/Натисни ще раз/.test(await page.locator("#demo").innerText()), "demo: застарілий таймер не скорочує нове вікно підтвердження");
  // той самий запобіжник у «Скинути прогрес»
  await page.click("#reset"); await page.click("#reset"); await page.waitForTimeout(3000);
  await page.click("#reset"); await page.waitForTimeout(2000);
  ok(/Натисни ще раз/.test(await page.locator("#reset").innerText()), "demo: «Скинути прогрес» — застарілий таймер не скорочує вікно підтвердження");
  ok(!errors.length, "demo: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 9) Синхронізація прогресу (engine-sync-login): фейковий API (семантика server/: CAS за rev, 409, name відкидається, коди прив'язки
   одноразові, CORS), app/config.js з адресою фейку, скрипт Google Identity Services — фейк із кнопкою, що повертає id_token.
   Два пристрої — два контексти браузера (окремі localStorage). Без справжнього Google і бекенду. */
async function syncScenarios(browser) {
  const L = new Map(), codes = new Map(), bodies = []; let seq = 0;
  const api = http.createServer((req, res) => {
    const send = (st, d) => { res.writeHead(st, { "content-type": "application/json", "access-control-allow-origin": "*" }); res.end(d === undefined ? "" : JSON.stringify(d)); };
    if (req.method === "OPTIONS") { res.writeHead(204, { "access-control-allow-origin": "*", "access-control-allow-headers": "authorization, content-type", "access-control-allow-methods": "GET, PUT, POST" }); res.end(); return; }
    let raw = ""; req.on("data", c => raw += c); req.on("end", () => {
      const body = raw ? JSON.parse(raw) : null, p = new URL(req.url, "http://x").pathname, tok = (req.headers.authorization || "").replace(/^Bearer /, "");
      if (body) bodies.push(raw);
      const who = tok && [...L.values()].find(x => x.tokens.includes(tok)), issue = x => { const t = "t" + (++seq); x.tokens.push(t); send(200, { id: x.id, token: t }); };
      if (req.method === "POST" && p === "/v1/auth/google") { if (!/^tok-/.test(body.idToken)) return send(401, {}); let x = L.get(body.idToken); if (!x) L.set(body.idToken, x = { id: "L" + (++seq), tokens: [], rev: 0, data: null }); return issue(x); }
      if (req.method === "POST" && p === "/v1/pairing/claim") { const k = String(body.code).toUpperCase().replace(/[\s-]/g, ""), x = codes.get(k); if (!x) return send(401, {}); codes.delete(k); return issue(x); }
      if (!who) return send(401, {});
      if (req.method === "POST" && p === "/v1/pairing") { const code = "K" + String(++seq).padStart(5, "7"); codes.set(code, who); return send(201, { code, expiresAt: new Date(Date.now() + 600000).toISOString() }); }
      if (req.method === "GET" && p === "/v1/me") return send(200, { id: who.id, school: "school.example" });
      if (req.method === "GET" && p === "/v1/progress") return send(200, { rev: who.rev, data: who.data });
      if (req.method === "PUT" && p === "/v1/progress") { if (body.rev !== who.rev) return send(409, { rev: who.rev, data: who.data }); delete body.data.name; who.rev++; who.data = body.data; return send(200, { rev: who.rev, data: who.data }); }
      send(404, {});
    });
  });
  await new Promise(r => api.listen(0, "127.0.0.1", r));
  const API = `http://127.0.0.1:${api.address().port}`;
  const GSI = `window.google={accounts:{id:{initialize(o){window.__gsi=o;},renderButton(el){const b=document.createElement("button");b.id="fakeGsi";b.type="button";b.textContent="Google";b.onclick=()=>window.__gsi.callback({credential:window.__gsiTok||"tok-anna"});el.appendChild(b);}}}};`;
  const device = async (state) => {
    const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
    const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
    await page.route("**/fonts.googleapis.com/**", r => r.abort());
    await page.route("**/app/config.js", r => r.fulfill({ contentType: "text/javascript", body: `window.SLID_CONFIG=${JSON.stringify({ api: API, googleClientId: "qa.apps.googleusercontent.com" })};` }));
    await page.route("https://accounts.google.com/gsi/client", r => r.fulfill({ contentType: "text/javascript", body: GSI }));
    await page.goto(URL0 + "?demo=rutas1dw"); await page.evaluate(s => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify(s)); }, state); await page.reload();
    await page.click('.tab[data-tab="profile"]');
    return { ctx, page, errors, st: () => page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1"))), sy: () => page.evaluate(() => JSON.parse(localStorage.getItem("slid.sync") || "null")) };
  };
  const base = { grade: 5, subject: "math", unlockAll: true };
  const A = await device({ ...base, name: "Анна", xp: 100, days: { "2026-11-04": 100 }, lessons: { fa1: { done: true, stars: 2, best: 40 } } });
  ok(await A.page.locator("#syncCard").count() === 1, "sync: з адресою API у профілі є «Мої пристрої»");
  await A.page.click("#syncGoogle"); await A.page.click("#fakeGsi");
  ok(/Це твій прогрес/.test(await A.page.locator(".sheet h2").innerText()), "sync: є прогрес на пристрої — питання «Це твій прогрес?»");
  await A.page.click("#mineYes");
  ok(await until(async () => L.get("tok-anna")?.data?.xp === 100), `sync: «Так, мій» — прогрес пристрою на сервері (xp ${L.get("tok-anna")?.data?.xp})`);
  ok(!bodies.some(b => /Анна|"name"/.test(b)), "sync: ім'я на сервер не передано");
  ok(await until(async () => /school\.example/.test(await A.page.locator("#syncState").innerText())), "sync: картка — шкільний акаунт і стан");
  // код прив'язки → другий пристрій зі своїм прогресом
  await A.page.click("#syncPair"); const code = await A.page.locator("#pairCode").innerText();
  ok(/^K\d{5}$/.test(code) && /Код діє ще 9:5\d|Код діє ще 10:00/.test(await A.page.locator("#pairLeft").innerText()), `sync: код для іншого пристрою з таймером (${code})`);
  await A.page.click("#closeSheet");
  const B = await device({ ...base, name: "Аня", xp: 30, days: { "2026-11-05": 30 }, lessons: { fb1: { done: true, stars: 3, best: 30 } } });
  await B.page.click("#syncCode"); await B.page.fill("#pairIn", code.toLowerCase().slice(0, 3) + " " + code.toLowerCase().slice(3)); await B.page.click("#pairGo"); await B.page.click("#mineYes");
  ok(await until(async () => (await B.st()).xp === 130), `sync: код + «мій» — бали разом (130), а ${(await B.st()).xp}`);
  const sb = await B.st(); ok(sb.name === "Аня" && sb.lessons.fa1?.done && sb.lessons.fb1?.done, "sync: уроки з обох пристроїв, ім'я пристрою лишилось");
  await A.page.click("#syncNow"); ok(await until(async () => (await A.st()).xp === 130), "sync: перший пристрій отримав злитий прогрес");
  ok((await A.st()).name === "Анна", "sync: на першому пристрої ім'я своє");
  // посеред уроку злиття не застосовується (рев'ю P2-2): сервер змінився, урок відкрито — стан той самий; урок закрито — злито
  await A.page.evaluate(() => window.__slidStart(SLID_SUBJECTS.find(c => c.id === "math").sections.find(x => x.lessons?.length).lessons[0].id));
  { const x = L.get("tok-anna"); x.data = { ...x.data, xp: x.data.xp + 7 }; x.rev++; }
  await A.page.evaluate(() => window.dispatchEvent(new Event("online"))); await A.page.waitForTimeout(1500);
  ok((await A.st()).xp === 130 && !(await A.page.locator("#player").isHidden()), `sync: урок відкрито — злиття відкладено (xp ${(await A.st()).xp})`);
  await A.page.click("#pClose"); await A.page.click("#pClose"); await A.page.click('.tab[data-tab="profile"]');
  await A.page.evaluate(() => window.dispatchEvent(new Event("online")));
  ok(await until(async () => (await A.st()).xp === 137), `sync: урок закрито — злито (137), а ${(await A.st()).xp}`);
  await B.page.evaluate(() => window.dispatchEvent(new Event("online"))); ok(await until(async () => (await B.st()).xp === 137), "sync: другий пристрій теж 137");
  // офлайн: зміни в черзі, з мережею — відправлено
  await B.ctx.setOffline(true);
  await B.page.evaluate(() => { const s = JSON.parse(localStorage.getItem("slid.v1")); return s; });
  await B.page.click("#demo");
  ok(/піде в акаунт/.test(await B.page.locator("#demo").innerText()), "sync: з входом підпис демо попереджає, що прогрес піде в акаунт");
  await B.page.click("#demo");   // демо: друге натискання → save() → у чергу
  await B.page.click('.tab[data-tab="profile"]'); await B.page.click("#syncNow");
  ok(await until(async () => /Немає мережі/.test(await B.page.locator("#syncState").innerText())), `sync: офлайн — «Немає мережі…», а «${await B.page.locator("#syncState").innerText()}»`);
  const q = await B.sy(); ok(q && q.dirty === true, "sync: офлайн — зміни в черзі (slid.sync dirty)");
  const demoXp = (await B.st()).xp;
  await B.ctx.setOffline(false);
  ok(await until(async () => L.get("tok-anna").data.xp === demoXp && (await B.sy()).dirty === false), `sync: мережа повернулась — черга відправлена сама (сервер ${L.get("tok-anna").data.xp}, пристрій ${demoXp})`);
  // «Ні, не мій»: спільний пристрій — чужий прогрес не потрапляє на сервер, пристрій отримує прогрес акаунта
  await A.page.click("#syncPair"); const code2 = await A.page.locator("#pairCode").innerText(); await A.page.click("#closeSheet");
  const C = await device({ ...base, grade: 7, name: "Петро", xp: 999, lessons: { zz9: { done: true, stars: 1, best: 1 } } });
  await C.page.click("#syncCode"); await C.page.fill("#pairIn", code2); await C.page.click("#pairGo"); await C.page.click("#mineNo");
  ok(await until(async () => (await C.st()).xp === demoXp), `sync: «Ні, не мій» — на пристрої прогрес акаунта (${(await C.st()).xp})`);
  const sc = await C.st(); ok(!sc.lessons.zz9 && !L.get("tok-anna").data.lessons.zz9 && L.get("tok-anna").data.xp === demoXp && sc.grade === 5 && sc.name === "Петро", "sync: «не мій» — чужого уроку немає ні на пристрої, ні на сервері; клас з акаунта");
  // помилки входу
  await C.page.click("#syncOut"); ok(await C.page.locator("#syncCode").count() === 1 && !(await C.sy())?.token, "sync: «Вийти на цьому пристрої» — токена в slid.sync немає (лишився лише base акаунта для повторного входу)");
  ok((await C.st()).xp === demoXp, "sync: після виходу прогрес лишився на пристрої");
  await C.page.click("#syncCode"); await C.page.fill("#pairIn", "ZZZZZZ"); await C.page.click("#pairGo"); await C.page.click("#mineYes");
  ok(await until(async () => /Код невірний/.test(await C.page.locator(".sync-err").innerText().catch(() => ""))), "sync: невірний код — «Код невірний або вже не діє»");
  await C.page.evaluate(() => { window.__gsiTok = "personal"; }); await C.page.click("#syncGoogle"); await C.page.click("#fakeGsi"); await C.page.click("#mineNo");
  ok(await until(async () => /не шкільний/.test(await C.page.locator(".sync-err").innerText().catch(() => ""))), "sync: особистий акаунт (401) — «Цей акаунт не шкільний»");
  // «Скинути прогрес» на пристрої з входом — синхронізацію вимкнено, сервер не чіпаємо
  await A.page.click("#reset"); await A.page.click("#reset");
  ok(!(await A.sy())?.token && L.get("tok-anna").data.xp === demoXp, "sync: «Скинути прогрес» — вихід на пристрої, прогрес на сервері лишився");
  ok(!bodies.some(b => b.includes("rutas1dw")), "sync: ключ демо не потрапляє в тіла запитів до сервера");
  for (const d of [A, B, C]) { ok(!d.errors.length, "sync: помилки сторінки: " + d.errors.join(" | ")); await d.ctx.close(); }
  // без адреси API — картки немає, мережевих запитів до API немає
  const ctx = await browser.newContext({ serviceWorkers: "block" }), p0 = await ctx.newPage(); await p0.route("**/fonts.googleapis.com/**", r => r.abort());
  await p0.goto(URL0); await p0.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), base); await p0.reload(); await p0.click('.tab[data-tab="profile"]');
  ok(await p0.locator("#syncCard").count() === 0, "sync: без адреси API (типовий config.js) картки немає");
  await ctx.close(); api.close();
}


/* фікстура сценаріїв 11–12: у кожного предмета розділ 6 кл. і тест dgo-<id>; mode: reverse — diagOrder навпаки до порядку SLID_SUBJECTS,
   tie — усі 1, none — без поля, mixed — у першого предмета поля немає, решта навпаки (він має йти останнім, рев'ю fix-diag-order P3-1) */
const DIAG_ORDER_FX = mode => { const n = SLID_SUBJECTS.length;
    SLID_SUBJECTS.forEach((c, i) => {
      const lesson = { id: "lo-" + c.id, title: "Урок", icon: "book", screens: [{ type: "intro", title: "QA", body: "QA" }] };
      c.sections = [{ id: "so-" + c.id, grade: 6, weeks: [1, 2], title: "QA", why: "QA", lessons: [lesson] }]; c.pools = [];
      c.diags = [{ id: "dgo-" + c.id, grade: 6, title: "QA", why: "QA", status: "draft", topics: [{ id: "t", title: "Т", kind: "cur", lessons: [lesson.id] }],
        items: [{ topic: "t", type: "choice", title: "QA", options: ["а", "б"], correct: 0 }] }];
      if (mode === "reverse" || mode === "mixed" && i) c.diagOrder = n - i; else if (mode === "tie") c.diagOrder = 1; else delete c.diagOrder; });
    return SLID_SUBJECTS.map(c => c.id); };
/* 11) Порядок тестів рівня після вибору класу (fix-diag-order). Фікстура: у кожного предмета — розділ 6 кл. і тест dgo-<id>;
   diagOrder задається навпаки до порядку SLID_SUBJECTS, тож перший предмет масиву не може «випадково» виграти. */
async function diagOrderScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const install = DIAG_ORDER_FX;
  const onboard = async (mode, skip, diag) => {
    await page.goto(URL0); await page.evaluate(([s, d]) => { localStorage.clear(); if (s || d) localStorage.setItem("slid.v1", JSON.stringify({ diagSkip: s || {}, diag: d || {} })); }, [skip || null, diag || null]); await page.reload();
    const ids = await page.evaluate(install, mode); await page.click('[data-grade="6"]');
    const opened = await page.locator("[data-diag-skip]").first().getAttribute("data-diag-skip"); return { ids, opened }; };
  { const { ids, opened } = await onboard("reverse");
    ok(ids.length >= 2 && opened === "dgo-" + ids[ids.length - 1], `diagOrder: відкрито тест з найменшим diagOrder (dgo-${ids[ids.length - 1]}), а ${opened}`);
    const nxt = await onboard("reverse", { ["dgo-" + ids[ids.length - 1]]: true });
    ok(nxt.opened === "dgo-" + ids[ids.length - 2], `diagOrder: відкладений тест пропущено — наступний за diagOrder (dgo-${ids[ids.length - 2]}), а ${nxt.opened}`); }
  { const { ids, opened } = await onboard("mixed");
    ok(opened === "dgo-" + ids[ids.length - 1], `мішаний diagOrder: предмет без поля — після всіх із полем (dgo-${ids[ids.length - 1]}), а ${opened}`); }
  { const ids = (await onboard("reverse")).ids, last = "dgo-" + ids[ids.length - 1];
    const { opened } = await onboard("reverse", null, { [last]: { done: true, topics: {} } });
    ok(opened === "dgo-" + ids[ids.length - 2], `пройдений тест не пропонується знову (dgo-${ids[ids.length - 2]}), а ${opened}`); }
  { const { ids, opened } = await onboard("none");
    ok(opened === "dgo-" + ids[0], `без diagOrder: порядок предметів (dgo-${ids[0]}), а ${opened}`); }
  { const { ids, opened } = await onboard("tie");
    ok(opened === "dgo-" + ids[0], `рівні diagOrder: порядок предметів (dgo-${ids[0]}), а ${opened}`); }
  ok(!errors.length, "diagOrder: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 12) Один тест рівня на головній (engine-diag-one-invite, рішення людини щодо P2-1 qa-hist-diag): лише одне запрошення на новий тест —
   перший за diagOrder серед незавершених («Пізніше» не змінює); перерваний тест — завжди, і тоді нового запрошення немає; решта — на екрані предмета. */
async function diagOneInviteScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const home = async (mode, st) => {
    await page.goto(URL0); await page.evaluate(s => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 6, unlockAll: false, ...s })); }, st || {}); await page.reload();
    const ids = await page.evaluate(DIAG_ORDER_FX, mode); await page.evaluate(() => { document.querySelector('.tab[data-tab="path"]').click(); document.querySelector('.tab[data-tab="path"]').click(); });
    const inv = await page.locator("#view .diaginv").evaluateAll(b => b.map(x => x.dataset.diag)); return { ids, inv }; };
  const D = id => "dgo-" + id;
  { const { ids, inv } = await home("reverse"); const n = ids.length;
    ok(n >= 3 && same(inv, [ids[n - 1]]), `головна: одне запрошення — перший за diagOrder (${ids[n - 1]}), а ${JSON.stringify(inv)}`);
    const sk = await home("reverse", { diagSkip: { [D(ids[n - 1])]: true } });
    ok(same(sk.inv, [ids[n - 1]]), `головна: відкладений («Пізніше») лишається єдиним запрошенням (${ids[n - 1]}), а ${JSON.stringify(sk.inv)}`);
    const dn = await home("reverse", { diag: { [D(ids[n - 1])]: { done: true, topics: {} } } });
    ok(!dn.inv.includes(ids[n - 1]) && dn.inv.length === 1 && dn.inv[0] === ids[n - 2], `головна: після пройденого — наступний за diagOrder (${ids[n - 2]}), а ${JSON.stringify(dn.inv)}`);
    const all = await home("reverse", { diagSkip: Object.fromEntries(ids.map(i => [D(i), true])) });
    ok(same(all.inv, [ids[n - 1]]), `головна: усі відкладені — одне запрошення, перший за diagOrder (${ids[n - 1]}), а ${JSON.stringify(all.inv)}`);
    const part = await home("reverse", { diagRun: { [D(ids[0])]: { 0: 1 } } });
    ok(same(part.inv, [ids[0]]), `головна: перерваний тест (${ids[0]}) — і є те одне запрошення, нового поряд немає (рев'ю engine-diag-one-invite P2-1), а ${JSON.stringify(part.inv)}`);
    const mx = await home("mixed");
    ok(same(mx.inv, [ids[n - 1]]), `головна: предмет без diagOrder не першим (${ids[n - 1]}), а ${JSON.stringify(mx.inv)}`);
    // «коли захочеш»: тест іншого предмета доступний з екрана предмета
    await home("reverse"); await page.click(`button[data-subject="${ids[0]}"]`);
    ok(await page.locator(`#view [data-diag="${ids[0]}"]`).count() > 0, `екран предмета ${ids[0]}: тест рівня доступний`); }
  ok(!errors.length, "один тест на головній: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 10) Мовні вправи в тесті рівня (engine-diag-lang-types): фікстура предмета ukr (розділи 5 і 6 кл., тест dgfu6) замість живого змісту.
   gaps, pick, stress, word, split у тесті — без позначок і показу відповіді, вердикт одразу (OK / BAD / «Ще не знаю»), продовження після
   перезавантаження, підсумок тем. tools-diag-nonmath-p3 п. 4: raw кожного мовного типу в журналі подій (docs/EVIDENCE.md) і друга фікстура dgfu6b
   з протилежними вердиктами (gaps і stress хибно, pick і split правильно, split — другий варіант, gaps 1 з 2 пропусків — BAD). */
async function diagLangScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const FXU = { id: "dgfu6", grade: 6, title: "Що ти вже вмієш?", why: "QA", status: "draft",
    topics: [{ id: "p", title: "Передумова", kind: "pre", lessons: ["fu5l1"] }, { id: "c1", title: "Тема 1", kind: "cur", lessons: ["fu6l1"] },
      { id: "c2", title: "Тема 2", kind: "cur", lessons: ["fu6l2"] }, { id: "c3", title: "Тема 3", kind: "cur", lessons: ["fu6l3"] }],
    items: [{ topic: "p", type: "gaps", sk: "orth", title: "Встав букву", text: "с{*е|и}ло" },
      { topic: "c1", type: "pick", sk: "synt", title: "Знайди підмет", text: "[Сонце] яскраво світить." },
      { topic: "p", type: "stress", sk: "oral", title: "Де наголос?", words: ["черг+овий"] },
      { topic: "c2", type: "word", sk: "orth", title: "Напиши слово", answer: "м'ята", keys: ["'"] },
      { topic: "c3", type: "split", sk: "phon", title: "Поділи на склади", word: "мо|ло|ко" }] };
  const installU = fx => { const c = SLID_SUBJECTS.find(c => c.id === "ukr");
    const lesson = id => ({ id, title: "Урок " + id, icon: "book", screens: [{ type: "intro", title: id, body: "QA" }] });
    c.sections = [{ id: "fu5", grade: 5, weeks: [1, 2], title: "QA 5", why: "QA", lessons: [lesson("fu5l1")] }, { id: "fu6", grade: 6, weeks: [1, 2], title: "QA 6", why: "QA", lessons: ["fu6l1", "fu6l2", "fu6l3"].map(lesson) }];
    c.diags = [fx]; c.pools = []; };
  const open = async () => { await page.evaluate(installU, FXU); await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
    await page.click('button[data-subject="ukr"]'); const d = page.locator("[data-diag]"); if (await d.count()) await d.first().click(); else await page.click('[data-plan="ukr"]');
    await page.click("[data-diag-go]"); };
  const st = () => page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
  const noMarks = async () => page.evaluate(() => !document.querySelector("#stage .is-ok, #stage .is-bad") && !/Правильн/.test(document.querySelector("#hintHost")?.textContent || ""));
  const eyebrow = () => page.locator("#stage .eyebrow").first().innerText();
  await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 6, subject: "ukr", unlockAll: false })); }); await page.reload();
  await open();
  ok(/завдання 1/i.test(await eyebrow()), `diag ukr: тест почався з завдання 1 (${await eyebrow()})`);
  // 1) gaps: правильно (варіант з data-o 0 — «е»)
  await page.click('.gopt[data-g="0"][data-o="0"]'); await page.click("#action");
  ok(/завдання 2/i.test(await eyebrow()) && await noMarks(), "diag ukr: gaps — одразу наступне завдання, без позначок і показу відповіді");
  // 2) pick: хибне слово
  await page.click('.pw[data-w="1"]'); await page.click("#action");
  ok(/завдання 3/i.test(await eyebrow()) && await noMarks(), "diag ukr: pick (хибно) — без позначок");
  // перезавантаження посеред тесту — продовження з того самого місця
  await page.reload(); await open();
  ok(/Наголос|наголос/.test(await page.locator("#stage h2, #stage .title, #stage").first().innerText()), "diag ukr: після перезавантаження — продовження з stress");
  // 3) stress: правильно (голосний після «+»)
  const vi = await page.evaluate(() => SLID_LANG.parseStress("черг+овий").correct);
  await page.click(`.sv[data-w="0"][data-i="${vi}"]`); await page.click("#action");
  ok(await noMarks(), "diag ukr: stress — без позначок");
  // 4) word: «м'ята» з кнопкою апострофа
  await page.fill("#numIn", "м'ята"); await page.click("#action");
  ok(await noMarks(), "diag ukr: word — без позначок");
  // 5) split: «Ще не знаю»
  await page.click("#skip");
  const S1 = await st(), rec = S1.diag?.dgfu6;
  ok(rec && rec.done, `diag ukr: тест завершено (${JSON.stringify(S1.diag)})`);
  ok(rec && same(rec.res, { 0: 1, 1: 0, 2: 1, 3: 1, 4: -1 }), `diag ukr: вердикти gaps OK, pick BAD, stress OK, word OK, split «Ще не знаю» — а ${JSON.stringify(rec && rec.res)}`);
  ok(rec && same(rec.topics, { p: "ok", c1: "new", c2: "known", c3: "new" }), `diag ukr: підсумок тем p ok, c1 new, c2 known, c3 new — а ${JSON.stringify(rec && rec.topics)}`);
  // tools-diag-nonmath-p3 п. 4: raw мовних типів у журналі подій (docs/EVIDENCE.md, «raw мовних вправ»)
  const diagEv = id => page.evaluate(async id => { if (!window.SLID_EVIDENCE) return null; await SLID_EVIDENCE.flush?.();
    return (await SLID_EVIDENCE.export()).events.filter(e => e.type === "answer" && e.d.mode === "diag" && e.d.l === id).map(e => [e.d.i, e.d.type, e.d.verdict, e.d.raw]); }, id);
  const ev1 = await diagEv("dgfu6");
  ok(same(ev1, [[0, "gaps", "ok", [0]], [1, "pick", "bad", [1]], [2, "stress", "ok", [vi]], [3, "word", "ok", "м'ята"], [4, "split", "skip", null]]),
    `diag ukr: журнал — raw gaps [індекс варіанта з тексту], pick [номер слова], stress [позиція голосного], word рядок, «Ще не знаю» null — а ${JSON.stringify(ev1)}`);
  // Друга фікстура — протилежні вердикти: gaps і stress хибно, pick і split правильно, word хибно, gaps з двома пропусками — частково (без
  // часткового зарахування, CONTENT_SCHEMA §9). Варіанти gaps — у перемішаному порядку: клікаємо за видимою літерою (gopt), а raw — індекс з розмітки, не з екрана.
  // Кожне завдання — своя тема: хибна відповідь не пропускає решту завдань теми (LEARN.nextItem)
  const FXU2 = { ...FXU, id: "dgfu6b",
    topics: ["fu5l1", "fu6l1", "fu6l2", "fu6l3", "fu6l1", "fu6l2"].map((l, k) => ({ id: "t" + k, title: "Тема " + k, kind: k ? "cur" : "pre", lessons: [l] })),
    items: [{ type: "gaps", sk: "orth", title: "Встав букву", text: "с{*е|и}ло" },
      { type: "pick", sk: "synt", title: "Знайди підмет", text: "[Сонце] яскраво [!світить]." },
      { type: "stress", sk: "oral", title: "Де наголос?", words: ["черг+овий"] },
      { type: "word", sk: "orth", title: "Напиши слово", answer: "м'ята", keys: ["'"] },
      { type: "split", sk: "phon", title: "Поділи на склади", word: ["ли|сти|на", "лис|ти|на"] },
      { type: "gaps", sk: "orth", title: "Встав букви", text: "с{*е|и}ло, з{е|*и}ма" }].map((it, k) => ({ topic: "t" + k, ...it })) };
  await page.evaluate(() => { localStorage.setItem("slid.v1", JSON.stringify({ grade: 6, subject: "ukr", unlockAll: false })); }); await page.reload();
  await page.evaluate(installU, FXU2); await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
  await page.click('button[data-subject="ukr"]'); { const d = page.locator("[data-diag]"); if (await d.count()) await d.first().click(); else await page.click('[data-plan="ukr"]'); }
  await page.click("[data-diag-go]");
  const gopt = (g, t) => page.locator(`.gopt[data-g="${g}"]`, { hasText: t }).click();
  await gopt(0, "и"); await page.click("#action");                                                     // gaps: «и» — хибно
  await page.click('.pw[data-w="0"]'); await page.click("#action");                                      // pick: «Сонце» — правильно
  const wrong = await page.evaluate(() => { const p = SLID_LANG.parseStress("черг+овий"); return p.letters.find(l => l.v && l.i !== p.correct).i; });
  await page.click(`.sv[data-w="0"][data-i="${wrong}"]`); await page.click("#action");                   // stress: не той голосний
  await page.fill("#numIn", "мята"); await page.click("#action");                                         // word: без апострофа — хибно
  await page.click('.cut[data-c="3"]'); await page.click('.cut[data-c="5"]'); await page.click("#action"); // split: другий варіант «лис|ти|на»
  ok(await noMarks(), "diag ukr (2): без позначок і після split");
  await gopt(0, "е"); await gopt(1, "е"); await page.click("#action");   // gaps: 1 з 2
  const rec2 = (await st()).diag?.dgfu6b;
  ok(rec2 && rec2.done && same(rec2.res, { 0: 0, 1: 1, 2: 0, 3: 0, 4: 1, 5: 0 }),
    `diag ukr (2): вердикти gaps BAD, pick OK, stress BAD, word BAD, split (другий варіант) OK, gaps 1 з 2 BAD — а ${JSON.stringify(rec2 && rec2.res)}`);
  const ev2 = await diagEv("dgfu6b");
  ok(same(ev2, [[0, "gaps", "bad", [1]], [1, "pick", "ok", [0]], [2, "stress", "bad", [wrong]], [3, "word", "bad", "мята"], [4, "split", "ok", [3, 5]], [5, "gaps", "bad", [0, 0]]]),
    `diag ukr (2): журнал — raw split [межі після 3-ї і 5-ї літери], gaps [по пропуску] — а ${JSON.stringify(ev2)}`);
  ok(!errors.length, "diag ukr: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 13) «Тренування» української (engine-pool-lang): пул ukr-фікстури з gaps, pick і stress. gaps з двома пропусками, один хибний —
   «не зовсім», червоне лише хибне, підказка hint, друга спроба правильно → зараховано без «першої» (seen 0); pick і stress — з першої.
   Наприкінці — SRS: тема з другою спробою — коробка 0, тема без помилок — 1; блок пояснення — «Пояснення» (не «Розв'язання»); журнал —
   answer з mode practice, key, pool і raw мовної вправи. Без помилок сторінки. */
async function practiceLangScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const it = (id, lesson, x) => ({ id, lesson, lvl: 1, sk: "orth", src: "z5 впр. 12", title: "Вправа " + id, ...x });
  const POOL = { id: "pfu5", section: "fu5", status: "draft", sources: [{ id: "z5", title: "Підручник-фікстура", url: "https://example.org/" }], items: [
    it("a01", "fu5l1", { type: "gaps", text: "с{*е|и}ло, з{е|*и}ма", hint: "Добери слово, де звук під наголосом.", steps: ["Село — сéла: [е] під наголосом.", "Зима — зúмній: [и] під наголосом."] }),
    it("a02", "fu5l2", { type: "stress", sk: "oral", words: ["черг+овий"], steps: ["Наголос — на другому складі: черго́вий."] }),
    it("a03", "fu5l1", { type: "pick", sk: "synt", text: "[Сонце] яскраво [!світить].", steps: ["Підмет відповідає на питання що? — сонце."] })] };
  const installP = pool => { const c = SLID_SUBJECTS.find(c => c.id === "ukr");
    const lesson = id => ({ id, title: "Урок " + id, icon: "book", screens: [{ type: "intro", title: id, body: "QA" }] });
    c.sections = [{ id: "fu5", grade: 5, weeks: [1, 2], title: "QA 5", why: "QA", lessons: ["fu5l1", "fu5l2"].map(lesson) }];
    c.pools = [pool]; c.diags = []; delete c.graph; };
  await page.goto(URL0);
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, subject: "ukr", unlockAll: false, lessons: { fu5l1: { done: true, stars: 3 }, fu5l2: { done: true, stars: 3 } } })); });
  await page.reload(); await page.evaluate(installP, POOL);
  await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
  await page.click('button[data-subject="ukr"]'); await page.click('[data-practice-view="ukr"]'); await page.click('[data-practice="fu5l1"]');
  const title = () => page.locator("#stage h2").first().innerText();
  const gopt = (g, t) => page.locator(`.gopt[data-g="${g}"]`, { hasText: new RegExp(`^${t}$`) }).click();
  // 1) gaps: перший пропуск правильно, другий хибно
  ok((await title()) === "Вправа a01", `practice ukr: перша вправа — gaps a01, а ${await title()}`);
  await gopt(0, "е"); await gopt(1, "е"); await page.click("#action");
  const dock1 = await page.locator("#action").innerText();
  ok(/Спробувати ще раз/.test(dock1), `practice ukr: gaps 1 з 2 — не зараховано, друга спроба («${dock1}»)`);
  ok(await page.locator("#stage .is-bad").count() >= 1, "practice ukr: хибний пропуск позначено червоним");
  ok(/Добери слово, де звук під наголосом/.test(await page.locator("#hintHost").innerText()), "practice ukr: після першої помилки — hint вправи");
  ok(!/Пояснення|Розв'язання/.test(await page.locator("#dock").innerText().catch(() => "")), "practice ukr: після першої помилки пояснення ще не показано");
  await gopt(1, "и"); await page.click("#action");
  const dock2 = await page.locator("#dock").innerText();
  ok(/Пояснення/.test(dock2) && !/Розв'язання/.test(dock2) && /сéла/.test(dock2), `practice ukr: друга спроба правильно — блок «Пояснення» зі steps («${dock2.slice(0, 120)}»)`);
  await page.click("#action");
  // 2) pick: правильно з першої
  ok((await title()) === "Вправа a03", `practice ukr: друга вправа — pick a03 (тема в фокусі), а ${await title()}`);
  await page.click('.pw[data-w="0"]'); await page.click("#action");
  ok(/Правильно/.test(await page.locator("#dock").innerText()), "practice ukr: pick з першої — «Правильно»");
  await page.click("#action");
  // 3) stress (повторення іншої теми): правильно з першої
  ok((await title()) === "Вправа a02", `practice ukr: третя — stress a02 (повторення), а ${await title()}`);
  const vi = await page.evaluate(() => SLID_LANG.parseStress("черг+овий").correct);
  await page.click(`.sv[data-w="0"][data-i="${vi}"]`); await page.click("#action"); await page.click("#action");
  // підсумок: SRS і seen
  const S = await page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
  ok(same(S.seen, { "pfu5:a01": 0, "pfu5:a03": 1, "pfu5:a02": 1 }), `practice ukr: seen — gaps з другої спроби 0, pick і stress 1, а ${JSON.stringify(S.seen)}`);
  ok(S.srs?.fu5l1?.box === 0 && S.srs?.fu5l2?.box === 1, `practice ukr: SRS — fu5l1 (gaps з другої спроби) коробка 0, fu5l2 (без помилок) 1, а ${JSON.stringify(S.srs)}`);
  const ev = await page.evaluate(async () => { if (!window.SLID_EVIDENCE) return null; await SLID_EVIDENCE.flush?.();
    return (await SLID_EVIDENCE.export()).events.filter(e => e.type === "answer" && e.d.mode === "practice").map(e => [e.d.key, e.d.pool, e.d.type, e.d.try, e.d.verdict, e.d.raw]); });
  ok(same(ev, [["pfu5:a01", "pfu5", "gaps", 1, "bad", [0, 0]], ["pfu5:a01", "pfu5", "gaps", 2, "ok", [0, 1]], ["pfu5:a03", "pfu5", "pick", 1, "ok", [0]], ["pfu5:a02", "pfu5", "stress", 1, "ok", [vi]]]),
    `practice ukr: журнал — answer із key, pool, try, verdict і raw мовної вправи, а ${JSON.stringify(ev)}`);
  ok(!errors.length, "practice ukr: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 14) Ширина gaps на телефоні (engine-gaps-wrap; reports/qa/qa-ukr-pool.md Q-1). Кожен екран gaps показуємо як окремий урок
   (window.__slidStart) і міряємо: .ltext — scrollWidth ≤ clientWidth і в межах вікна; кнопки .gopt — у межах вікна; #player без
   горизонтальної прокрутки; кожен span.gw — один прямокутник (рядок не переноситься посеред слова з пропуском). Фікстура дає червоне
   незалежно від змісту; живий зміст (усі gaps уроків, пулів і тестів рівня, які підключає сторінка) — повний обхід, без прив'язки до складу. */
const GAPS_FIX = [
  { type: "gaps", title: "Склади прислів'я", text: "Час, як вода, {*усе вперед тече|й конем не доженеш|дим не заховаєш}." },
  { type: "gaps", title: "Довгі варіанти", text: "Він {*прийшов додому пізно ввечері|повернувся до школи вранці|так і не з'явився} — і всі {*зраділи цьому несподіваному|засмутилися через це|не помітили} поверненню." },
  { type: "gaps", title: "Пропуск у слові", text: "Наш пере{*в|ф}ірений учитель роз{*с|з}казав про над{*з|с}вичайно дов{*г|х}ий шлях." },
  { type: "gaps", title: "Довге слово", text: "Найрізноманітні{*ш|щ}ого, сільськогоспо{*д|т}арський, високопродукти{*в|ф}ний." },
  // пропуск з довгими варіантами в лапках із розділовим знаком після: .gw тримає «…» і ». в одному рядку з пропуском — запас 2em у max-width
  // (з max-width:100% виходить за край; рев'ю engine-gaps-wrap P1-1)
  { type: "gaps", title: "Пропуск у лапках", text: "«{*Ой-ой-ой, яка ж біда|Ой лишенько, що ж робити}»." },
  // суцільне довге слово у варіанті — переноситься всередині кнопки (overflow-wrap:anywhere у .gopt; рев'ю P3-3)
  { type: "gaps", title: "Надто довгий варіант", text: "Слово {*тридцятитрьохсотсорокап'ятимільйоннотисячний|інше}." }];
async function gapsWidthScenario(browser) {
  for (const W of [360, 375]) {
    const ctx = await browser.newContext({ viewport: { width: W, height: 760 }, isMobile: true, hasTouch: true, reducedMotion: "reduce", serviceWorkers: "block" });
    const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
    await page.route("**/fonts.googleapis.com/**", r => r.abort());
    await page.goto(URL0);
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, subject: "ukr", unlockAll: true })); });
    await page.reload();
    const r = await page.evaluate(fix => {
      const all = fix.map((s, i) => ["фікстура#" + i, s]);
      for (const c of SLID_SUBJECTS) {
        for (const sec of c.sections || []) for (const l of sec.lessons || []) (l.screens || []).forEach((s, i) => { if (s.type === "gaps") all.push([`${l.id}#${i}`, s]); });
        for (const p of c.pools || []) for (const it of p.items || []) if (it.type === "gaps") all.push([`${p.id}:${it.id}`, it]);
        for (const d of c.diags || []) (d.items || []).forEach((it, i) => { if (it.type === "gaps") all.push([`${d.id}#${i}`, it]); });
      }
      const c = SLID_SUBJECTS.find(c => c.id === "ukr") || SLID_SUBJECTS[0];
      c.sections.push({ id: "fgw", grade: 5, weeks: [1, 1], title: "QA gaps", why: "QA", lessons: all.map(([, s], i) => ({ id: "fgw" + i, title: "QA", icon: "book", screens: [{ ...s, title: s.title || "QA" }] })) });
      const vw = document.documentElement.clientWidth, bad = [];
      all.forEach(([key], i) => {
        window.__slidStart("fgw" + i);
        const t = document.querySelector("#stage .ltext"), pl = document.querySelector("#player");
        if (!t) { bad.push(`${key}: немає .ltext`); return; }
        const tr = t.getBoundingClientRect(), why = [];
        if (t.scrollWidth > t.clientWidth + 1) why.push(`.ltext scrollWidth ${t.scrollWidth} > clientWidth ${t.clientWidth}`);
        if (tr.right > vw + 0.5 || tr.left < -0.5) why.push(`.ltext ${Math.round(tr.left)}–${Math.round(tr.right)} за вікном ${vw}`);
        if (pl.scrollWidth > pl.clientWidth + 1) why.push(`#player scrollWidth ${pl.scrollWidth} > ${pl.clientWidth}`);
        const out = [...t.querySelectorAll(".gopt")].filter(b => { const q = b.getBoundingClientRect(); return q.right > vw + 0.5 || q.left < -0.5; });
        if (out.length) why.push(`за краєм варіанти «${out.map(b => b.textContent).join("», «")}»`);
        const torn = [...t.querySelectorAll(".gw")].filter(g => g.getClientRects().length > 1);
        if (torn.length) why.push(`слово з пропуском розірване: «${torn.map(g => g.textContent).join("», «")}»`);
        if (why.length) bad.push(`${key}: ${why.join("; ")}`);
      });
      return { n: all.length, live: all.length - fix.length, bad };
    }, GAPS_FIX);
    ok(r.live > 0, `gaps ${W} px: у змісті сторінки не знайдено жодного екрана gaps (0 перевірок ≠ успіх)`);
    ok(!r.bad.length, `gaps ${W} px: ${r.bad.length} з ${r.n} екранів gaps виходять за край або рвуть слово:\n  ${r.bad.slice(0, 15).join("\n  ")}`);
    if (!r.bad.length) console.log(`gaps ${W} px: ${r.n} екранів gaps (${r.live} зі змісту) — без переповнення`);
    ok(!errors.length, `gaps ${W} px: помилки сторінки: ` + errors.join(" | "));
    await ctx.close();
  }
}

const browser = await pw.chromium.launch(BROWSER ? { executablePath: BROWSER } : {});
console.log(`test-ui: Chromium ${browser.version()} (${BROWSER || "власний Playwright, " + (process.env.PLAYWRIGHT_BROWSERS_PATH || "~/.cache/ms-playwright")})`);
try {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  page.setDefaultTimeout(7000);
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), seed);
  await page.reload();
  await page.evaluate(install, FIX);

  // 1) «Тренування»
  await page.click('button[data-subject="math"]');
  await page.click('[data-practice-view="math"]');
  const heads = await page.locator(".stack > .eyebrow").allTextContents();
  ok(same(heads, ["QA A", "QA B"]), `тренування: заголовки за програмою [QA A, QA B], а ${JSON.stringify(heads)}`);
  ok(await page.locator('[data-practice="fa1"]').count() === 1, "тренування: пройдений fa1 — одна кнопка");
  ok(/1 задача/.test(await page.locator('[data-practice="fa1"]').innerText()), "тренування: у fa1 — 1 задача");
  const locked = await page.locator(".secitem.locked b").allTextContents();
  ok(same(locked, ["Урок fa2", "Урок fb1"]), `тренування: закриті теми 5 кл. по разу — fa2 (з двох пулів), fb1; а ${JSON.stringify(locked)}`);
  ok(!(await page.locator(".stack").innerText()).includes("Урок fv"), "тренування: уроків 6 кл. немає");
  ok(!heads.includes("QA E") && !heads.includes("QA V"), "тренування: без розділу без вправ і без розділу 6 кл.");

  // 2) Замок уроку: fiNew вставлено перед пройденим fiOld
  await page.reload(); await page.evaluate(install, FIX);
  await page.click('button[data-subject="math"]');
  const k = await page.evaluate(() => SLID_SUBJECTS.find(c => c.id === "math").sections.findIndex(s => s.id === "fI"));
  await page.click(`[data-topic="${k}"]`);
  const nodes = await page.locator(".path .node").evaluateAll(ns => ns.map(n => ({ lock: n.classList.contains("lock"), done: n.classList.contains("done") })));
  ok(same(nodes.map(n => n.lock), [false, true, false, false, true]), `замок: закриті лише fiNew і fi4, а ${JSON.stringify(nodes.map(n => n.lock))}`);
  ok(same(nodes.map(n => n.done), [false, false, true, false, false]), `замок: пройдений — fiOld, а ${JSON.stringify(nodes.map(n => n.done))}`);

  // 3) Гілки unlocked: unlockAll і known (той самий розділ fI; fiOld пройдено)
  const locks = async st => {
    await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), st);
    await page.reload(); await page.evaluate(install, FIX);
    await page.click('button[data-subject="math"]'); await page.click(`[data-topic="${k}"]`);
    return page.locator(".path .node").evaluateAll(ns => ns.map(n => n.classList.contains("lock")));
  };
  const all = await locks({ ...seed, unlockAll: true });
  ok(same(all, [false, false, false, false, false]), `unlockAll: відкриті всі уроки розділу, а ${JSON.stringify(all)}`);
  const kn = await locks({ ...seed, planByGrade: { math: { 5: { grade: 5, known: ["fi3"], steps: [] } } } });
  ok(same(kn, [false, true, false, false, false]), `known: fi3 зі «знайомих» відкриває fi4, fiNew закритий, а ${JSON.stringify(kn)}`);
  const kn6 = await locks({ ...seed, planByGrade: { math: { 6: { grade: 6, known: ["fi3"], steps: [] } } } });
  ok(same(kn6, [false, true, false, false, true]), `known плану 6 кл. для учня 5 кл. не відкриває fi4, а ${JSON.stringify(kn6)}`);

  // 4) Запобіжник невідомого типу екрана (engine-sw-version-skew): зміст новіший за рушій — повідомлення й «Пропустити», не тупик
  const UNK = { id: "fU", grade: 5, weeks: [13, 14], title: "QA U", why: "QA", lessons: [{ id: "fu1", title: "Урок fu1", icon: "book", screens: [
    { type: "intro", title: "Початок", body: "QA" }, { type: "zzz-new", title: "Нове завдання", body: "QA" }, { type: "info", title: "Кінець", body: "QA" }] }] };
  const DQ = { id: "dq5", grade: 5, title: "QA тест", topics: [{ id: "t1", title: "T1", lessons: [] }, { id: "t2", title: "T2", lessons: [] }],
    items: [{ type: "zzz-new", topic: "t1", title: "Нове в тесті" }, { type: "choice", topic: "t2", title: "Питання тесту", opts: ["а", "б"], correct: 0 }] };
  await page.reload(); await page.evaluate(install, FIX);
  await page.evaluate(([u, dq]) => { const c = SLID_SUBJECTS.find(c => c.id === "math"); c.sections.push(u); c.diags = [dq]; window.__slidStart("fu1"); }, [UNK, DQ]);
  await page.click("#action");
  ok(await page.locator("#unsupported").isVisible(), "запобіжник: на екрані невідомого типу — повідомлення #unsupported");
  ok(/Онови застосунок/.test(await page.locator("#unsupported").innerText()), "запобіжник: текст «Онови застосунок»");
  ok(await page.locator("#action").isEnabled() && (await page.locator("#action").innerText()).trim() === "Пропустити", "запобіжник: «Пропустити» активна");
  const xp0 = await page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")).xp || 0);
  await page.click("#action");
  ok((await page.locator("#stage h2").innerText()) === "Кінець", "запобіжник: «Пропустити» веде на наступний екран");
  await page.click("#action");   // → підсумок
  const st1 = await page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
  ok(!st1.mast?.fu1 && !(st1.errs || []).some(e => e.at === "fu1"), "запобіжник: пропущений екран не зараховано (немає mast/errs уроку)");
  ok((st1.xp || 0) === xp0, `запобіжник: за пропуск немає досвіду (${xp0} → ${st1.xp || 0})`);
  ok(!st1.lessons?.fu1, `запобіжник: урок із пропущеним екраном не зараховано (немає done/зірок), а ${JSON.stringify(st1.lessons?.fu1)}`);
  ok(await page.locator("#unsupEnd").isVisible() && /не зараховано/.test(await page.locator("#unsupEnd").textContent()), "запобіжник: підсумок «урок не зараховано»");
  await page.click("#action");   // закрити
  await page.click('button[data-subject="math"]'); await page.click('[data-diag="math"]'); await page.click("[data-diag-go]");
  ok(await page.locator("#unsupported").isVisible() && await page.locator("#action").isEnabled(), "запобіжник у тесті рівня: повідомлення, кнопка активна");
  await page.click("#action");
  ok((await page.locator("#stage h2").innerText()) === "Питання тесту", "запобіжник у тесті рівня: далі — наступне завдання");
  const dres = await page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")).diagRun.dq5);
  ok(same(dres, { 0: await page.evaluate(() => SLID_LEARN.SKIP) }), `запобіжник у тесті рівня: завдання — «Ще не знаю» (SKIP), а ${JSON.stringify(dres)}`);
  ok(!errors.length, "помилки сторінки: " + errors.join(" | "));
  await ctx.close();

  // 8) Телефон: «:» у полях масштабу й відношення (engine-list-p3 п. 4)
  await phoneScenarios(browser);

  // 15) Звичайний дріб у полі number уроку (engine-number-fraction-input-1117)
  await numberFractionScenario(browser);

  // 16) Підсумок тесту рівня: baseline-теми з see, блок «З програми N класу» (engine-diag-baseline-plan-1117)
  await diagBaselineSeeScenario(browser);

  // 17) Ділення кутом з input: автоперехід, дотик по клітинці, «Перевірити» на «????» (engine-lab-column-digits-1117)
  await labColumnDivScenario(browser);

  // 9a) Демо-прогрес захищено ключем ?demo= і подвійним натисканням (engine-demo-guard-1118)
  await demoGuardScenario(browser);

  // 9) Синхронізація прогресу між пристроями (engine-sync-login)
  await syncScenarios(browser);

  // 10) Мовні вправи в тесті рівня (engine-diag-lang-types)
  await diagLangScenario(browser);

  // 13) «Тренування» української: мовні вправи в пулі (engine-pool-lang)
  await practiceLangScenario(browser);

  // 11) Порядок тестів рівня після вибору класу (fix-diag-order)
  await diagOrderScenario(browser);

  // 12) Один тест рівня на головній (engine-diag-one-invite)
  await diagOneInviteScenario(browser);

  // 14) Ширина gaps на телефоні (engine-gaps-wrap)
  await gapsWidthScenario(browser);

  // 18–19) Збільшення img і нейтральна сітка fig grid (engine-img-zoom-1117, engine-fig-grid-caption-1117)
  await imgZoomGridScenarios(browser);

  // 5–7) Оновлення service worker без змішування версій (engine-sw-version-skew; docs/PUBLISHING.md «Оновлення PWA»)
  await swScenarios(browser);

  // 20) Ділення кутом: стирання цифри з екранної клавіатури без keydown (engine-1117-followups п. 1–2)
  await labColumnEraseScenario(browser);

  // 21) Картка «Твій план» на головній: уроки see baseline-тем (engine-1117-followups п. 3)
  await planCardSeeScenario(browser);

  // 22) Тексти інтерфейсу: лічильні форми, «тренувань ще не було», «Помилка/Помилки…», «пройдено ✓» (engine-ui-text-1117)
  await uiTextScenario(browser);

  // 23) Читабельність рендеру: підписи лабораторій у межах поля, назва повзунка без TeX, корінь, стрілка, підкреслення, align (engine-render-legibility-1117)
  await renderLegibilityScenario(browser);

  // 24) Колесо миші над панеллю «Перевірити» гортає екран sort (g8 №33, engine-lab-p3-1117 п. 7)
  await dockWheelScenario(browser);

  // 25) Випадковий тап по полю не зсуває єдину точку: переносить лише короткий тап без руху (engine-lab-p4-1118 п. 2)
  await tapMoveScenario(browser);

  // 26) Мова змісту предмета: targetLang, lang="en" на змісті, згорнутий переклад uk (engine-eng-lang-attr)
  await contentLangScenario(browser);

  // 27) Мовні вправи англійською: word з примітками, stress складами (engine-eng-lang-core)
  await engLangScenario(browser);

  // 28) Речення з плиток build (engine-eng-build)
  await buildScenario(browser);
} finally { await browser.close(); server.close(); swServer.close(); }

console.log(`test-ui: ${pass} ok, ${fail} ✗`);
process.exit(fail || !pass ? 1 : 0);   // 0 перевірок — не успіх

/* 18–19) Збільшення зображення екрана (engine-img-zoom-1117) і нейтральна сітка fig grid (engine-fig-grid-caption-1117).
   Телефон 360 px із сенсором; синтетична фікстура (icons/icon-192.png як «карта»), без живого content/. */
async function imgZoomGridScenarios(browser) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  page.setDefaultTimeout(7000);
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), seed);
  await page.reload();
  const IMGS = "icons/icon-192.png", G = o => ({ type: "info", title: "Сітка", body: "QA", fig: { kind: "grid", rows: 4, cols: 6, k: 0, ...o } });
  const SEC = { id: "fZ", grade: 5, weeks: [13, 14], title: "QA Z", why: "QA", lessons: [{ id: "fz1", title: "Урок fz1", icon: "book", screens: [
    { type: "info", title: "Карта", body: "QA", img: IMGS, cap: "Карта QA <b>з підписом</b>" },
    G({ cap: "Грядка 6 м на 4 м, клітинка — квадрат 1 м на 1 м", label: "Грядка 6 на 4 метри" }),
    G({ k: 3 }),
    G({ rows: 3, cols: 4, k: 5, look: "chocolate" }),
    G({ rows: 3, cols: 4, k: 0, look: "chocolate" }),
    { type: "info", title: "Кінець", body: "QA" }] }] };
  await page.evaluate(install, FIX);
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("fz1"); }, SEC);
  // 18) зображення — кнопка з лупою й aria-label
  const btn = page.locator("#stage figure .zoombtn");
  ok(await btn.count() === 1 && await page.locator("#stage figure .zoombtn img").count() === 1, "збільшення: img екрана загорнуто в кнопку .zoombtn");
  ok(await page.locator("#stage .zoombtn .zhint svg").isVisible(), "збільшення: видима іконка-лупа на зображенні");
  ok((await btn.getAttribute("aria-label")) === "Збільшити зображення: Карта QA з підписом", `збільшення: aria-label кнопки, а «${await btn.getAttribute("aria-label")}»`);
  await btn.tap();
  const zv = page.locator("#zoomv");
  ok(await zv.isVisible(), "збільшення: дотик відкриває повноекранний перегляд #zoomv");
  const st = await page.evaluate(() => { const z = document.querySelector("#zoomv"), r = z.getBoundingClientRect();
    return { role: z.getAttribute("role"), modal: z.getAttribute("aria-modal"), src: z.querySelector("img").getAttribute("src"), cap: z.querySelector(".zcap")?.innerHTML || "",
      w: r.width, h: r.height, sw: document.documentElement.scrollWidth, bar: [...z.querySelectorAll(".zbar button")].every(b => b.getBoundingClientRect().right <= innerWidth + 0.5),
      inert: ["#player", "#app"].map(q => document.querySelector(q).inert), focus: document.activeElement?.id, zoom: z.dataset.zoom }; });
  ok(st.role === "dialog" && st.modal === "true", `збільшення: role=dialog aria-modal, а ${st.role}/${st.modal}`);
  ok(/icons\/icon-192\.png$/.test(st.src), `збільшення: той самий файл, що на екрані, а ${st.src}`);
  ok(st.cap === "Карта QA <b>з підписом</b>", `збільшення: під зображенням — cap, а «${st.cap}»`);
  ok(st.w === 360 && st.h === 740 && st.sw <= 360 && st.bar, `збільшення: на весь екран 360 px без виходу за край, а ${JSON.stringify(st)}`);
  ok(same(st.inert, [true, true]), `збільшення: плеєр і застосунок inert, поки відкрито, а ${JSON.stringify(st.inert)}`);
  ok(st.focus === "zClose" && st.zoom === "1.00", `збільшення: фокус на «Закрити», масштаб 1, а ${st.focus} ${st.zoom}`);
  const zoom = () => page.evaluate(() => +document.querySelector("#zoomv").dataset.zoom);
  await page.tap("#zIn");
  ok(await zoom() === 1.5, `збільшення: «+» → 1.5, а ${await zoom()}`);
  await page.tap("#zOut");
  ok(await zoom() === 1 && await page.locator("#zOut").isDisabled(), "збільшення: «−» повертає 1 і вимикається");
  // щипок двома пальцями: відстань 100 → 200 px — масштаб ×2; потім перетягування одним пальцем зсуває зображення
  const pinch = await page.evaluate(() => { const v = document.querySelector("#zView"), r = v.getBoundingClientRect(), cy = r.top + r.height / 2, cx = r.left + r.width / 2;
    const ev = (t, id, x, y) => v.dispatchEvent(new PointerEvent(t, { pointerId: id, pointerType: "touch", clientX: x, clientY: y, bubbles: true, cancelable: true, isPrimary: id === 1 }));
    ev("pointerdown", 1, cx - 50, cy); ev("pointerdown", 2, cx + 50, cy); ev("pointermove", 2, cx + 150, cy); ev("pointermove", 1, cx - 50, cy);
    const z = +document.querySelector("#zoomv").dataset.zoom; ev("pointerup", 2, cx + 150, cy);
    const t0 = v.querySelector("img").style.transform; ev("pointermove", 1, cx - 10, cy + 20); const t1 = v.querySelector("img").style.transform; ev("pointerup", 1, cx - 10, cy + 20);
    return { z, t0, t1 }; });
  ok(pinch.z === 2, `збільшення: щипок 100 → 200 px — масштаб 2, а ${pinch.z}`);
  ok(pinch.t0 !== pinch.t1 && /scale\(2\)/.test(pinch.t1), `збільшення: перетягування одним пальцем зсуває зображення, а ${pinch.t0} → ${pinch.t1}`);
  await page.keyboard.press("Escape");
  const after = await page.evaluate(() => ({ open: !!document.querySelector("#zoomv"), player: !document.querySelector("#player").hidden, inert: document.querySelector("#player").inert,
    focus: document.activeElement?.classList.contains("zoombtn") }));
  ok(!after.open && after.player && !after.inert, `збільшення: Esc закриває перегляд, урок лишається відкритим, а ${JSON.stringify(after)}`);
  ok(after.focus, "збільшення: після закриття фокус повертається на зображення");
  // з клавіатури: Enter відкриває, «+» збільшує, Tab не виходить за межі перегляду
  await btn.focus(); await page.keyboard.press("Enter");
  ok(await zv.isVisible(), "збільшення: Enter на зображенні відкриває перегляд");
  await page.keyboard.press("+");
  ok(await zoom() === 1.5, "збільшення: клавіша «+» збільшує");
  for (let i = 0; i < 5; i++) await page.keyboard.press("Tab");
  ok(await page.evaluate(() => !!document.activeElement?.closest("#zoomv")), "збільшення: Tab не виходить за межі перегляду");
  await page.tap("#zClose");
  ok(!(await zv.count()), "збільшення: «Закрити» прибирає перегляд");
  // 19) нейтральна сітка й шоколадка
  const grid = async () => { await page.tap("#action"); return page.evaluate(() => ({ label: document.querySelector("#stage figure svg").getAttribute("aria-label"),
    text: document.querySelector("#stage figure").textContent.trim(), fills: [...document.querySelectorAll("#stage figure rect")].map(r => r.getAttribute("fill")) })); };
  const g1 = await grid();
  ok(g1.label === "Грядка 6 на 4 метри" && g1.text === "Грядка 6 м на 4 м, клітинка — квадрат 1 м на 1 м", `сітка: label і cap з fig, а ${JSON.stringify([g1.label, g1.text])}`);
  ok(!/шоколад|з'їден/i.test(g1.label + g1.text) && !g1.fills.includes("#6B3F26"), "сітка без look: ні шоколаду, ні «з'їдені»");
  const g2 = await grid();
  ok(g2.label === "Сітка 4 × 6: 24 клітинки, зафарбовано 3" && g2.text === "" && g2.fills.filter(f => f === "var(--accent)").length === 3, `сітка без cap і label: типовий aria-label, 3 зафарбовано, а ${JSON.stringify(g2)}`);
  const g3 = await grid();
  ok(g3.label === "Шоколадка з 12 часточок, 5 з'їдено" && g3.text === "пунктиром — з'їдені часточки" && g3.fills.filter(f => f === "#6B3F26").length === 7, `шоколадка (look): як раніше, а ${JSON.stringify(g3)}`);
  const g4 = await grid();
  ok(g4.label === "Шоколадка з 12 часточок, 0 з'їдено" && g4.text === "", `шоколадка з k 0: без підпису про пунктир, а ${JSON.stringify(g4)}`);
  // 18) у тесті рівня — та сама кнопка й перегляд
  const DQ = { id: "dqz", grade: 5, title: "QA тест", topics: [{ id: "t1", title: "T1", lessons: [] }],
    items: [{ type: "choice", topic: "t1", title: "Розглянь бюлетень", img: IMGS, cap: "Бюлетень QA", opts: ["а", "б"], correct: 0 }] };
  await page.reload(); await page.evaluate(install, FIX);
  await page.evaluate(dq => { SLID_SUBJECTS.find(c => c.id === "math").diags = [dq]; }, DQ);
  await page.tap('button[data-subject="math"]'); await page.tap('[data-diag="math"]'); await page.tap("[data-diag-go]");
  await page.tap("#stage figure .zoombtn");
  ok(await zv.isVisible() && (await page.locator("#zoomv .zcap").innerText()) === "Бюлетень QA", "збільшення в тесті рівня: дотик відкриває перегляд з cap");
  await page.keyboard.press("Escape");
  ok(!(await zv.count()) && await page.locator("#player").isVisible(), "збільшення в тесті рівня: Esc закриває, тест лишається");
  ok(!errors.length, "збільшення й сітка, помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* ============ Хвиля 3 (*-1117): сценарії 22–23 ============ */

/* 22) Тексти інтерфейсу (engine-ui-text-1117): лічильні форми через plural, нейтральне «тренувань ще не було» (D-020), «Помилка/Помилки»
   за кількістю помилок у блоці «Варто повторити», «пройдено ✓» для повністю пройденого розділу. Синтетична фікстура (install). */
async function uiTextScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const today = (d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`)(new Date());   // як dkey() в app.js
  const boot = async st => { await page.goto(URL0); await page.evaluate(s => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify(s)); }, st); await page.reload();
    await page.evaluate(install, FIX); await page.evaluate(fx, SEC); await page.evaluate(() => { const t = document.querySelector('.tab[data-tab="path"]'); t.click(); t.click(); }); };
  const ch = (title, pre) => ({ type: "choice", sk: "num", title, body: "QA", opts: ["так", "ні", "може"], correct: 0, fbText: "QA", ...(pre ? { pre } : {}) });
  const info = t => ({ type: "info", title: t, body: "QA" });
  const SEC = { id: "fT", grade: 5, weeks: [30, 31], title: "QA T", why: "QA", lessons: [
    { id: "ft1", title: "Урок ft1", icon: "book", screens: [info("a"), info("b"), info("c"), ch("1"), ch("2"), ch("3"), ch("4")] },
    { id: "ft2", title: "Урок ft2", icon: "book", screens: [ch("Одна", "fa1")] },
    { id: "ft3", title: "Урок ft3", icon: "book", screens: [ch("Дві", "fa2"), ch("Три", "fa2"), info("кінець")] }] };
  const fx = sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); };
  const st0 = { ...seed, weekOverride: 1, lessons: { fa1: { done: true, stars: 2 }, fa2: { done: true, stars: 1 } }, streak: { count: 1, last: today } };
  await boot(st0);
  // «Зараз у школі» (тиждень 1 — розділ fA, усі уроки пройдено) і картка предмета
  const now = (await page.locator("#view .card.now").innerText()).replace(/\s+/g, " ");
  ok(/QA A пройдено ✓/.test(now) && !/QA A є уроки/.test(now), `«Зараз у школі»: пройдений розділ — «пройдено ✓», а ${now}`);
  const subj = (await page.locator('#view .subjcard[data-subject="math"]').innerText()).replace(/\s+/g, " ");
  ok(/зараз: QA B/.test(subj), `картка предмета: «зараз:» — перший непройдений розділ, а ${subj}`);
  // лічильні форми: план року (fT — 0 з 3 уроків) і розділ з одним уроком (fB — «0 з 1 уроку»)
  await page.click('#view button[data-subject="math"]');
  const plan = (await page.locator("#view .seclist").innerText()).replace(/\s+/g, " ");
  ok(/0 з 1 уроку/.test(plan) && !/з 1 уроків/.test(plan) && /0 з 3 уроків/.test(plan), `план року: «0 з 1 уроку», «0 з 3 уроків», а ${plan}`);
  // картка уроку (sheet): 7 кроків · 4 завдання; 1 крок · 1 завдання
  const k = await page.evaluate(() => SLID_SUBJECTS.find(c => c.id === "math").sections.findIndex(s => s.id === "fT"));
  await page.click(`#view .secitem[data-topic="${k}"]`);
  const topic = (await page.locator("#view section.sec").innerText()).replace(/\s+/g, " ");
  ok(/0 з 3 уроків/.test(topic), `розділ: «0 з 3 уроків», а ${topic}`);
  await page.click('#view [data-open="0"]');
  const m1 = (await page.locator("#sheetHost .meta").innerText()).replace(/\s+/g, " ");
  ok(/7 кроків/.test(m1) && /4 завдання/.test(m1) && !/4 завдань/.test(m1), `картка уроку: «7 кроків · 4 завдання», а ${m1}`);
  await page.keyboard.press("Escape"); await page.evaluate(() => { document.querySelector("#sheetHost").innerHTML = ""; });
  await page.click('#view [data-open="1"]');
  const m2 = (await page.locator("#sheetHost .meta").innerText()).replace(/\s+/g, " ");
  ok(/(^| )1 крок 1 завдання/.test(m2), `картка уроку: «1 крок · 1 завдання», а ${m2}`);
  await page.evaluate(() => { document.querySelector("#sheetHost").innerHTML = ""; });
  // «Варто повторити»: помилки в одному завданні з pre (навіть дві спроби) — «Помилка … пов'язана»; у двох різних завданнях — «Помилки … пов'язані»
  // (рев'ю engine-render-legibility-1117, P3: рахуємо завдання, а не хибні спроби); "next" — лише кнопка дії (перейти до наступного екрана)
  const play = async (id, picks) => {
    await page.evaluate(id => window.__slidStart(id), id);
    for (const kk of picks) { if (kk !== "next") await page.click(`#stage .opt[data-k="${kk}"]`); await page.click("#action"); }
    for (let i = 0; i < 8 && !(await page.locator("#stage .rec").count()); i++) { if (!(await page.locator("#action").isEnabled())) break; await page.click("#action"); }
    return (await page.locator("#stage").innerText()).replace(/\s+/g, " ");
  };
  const r1 = await play("ft2", [1, 2]);
  ok(/Помилка в цьому уроці пов'язана з цією темою/.test(r1) && !/Помилки в цьому/.test(r1), `дві хибні спроби в одному завданні з pre: «Помилка … пов'язана», а ${r1.slice(-300)}`);
  while (await page.locator("#player").isVisible()) await page.click("#pClose");
  // перший прохід кладе fa2 у план («додано в план»); у другому fa2 вже в плані, тож він — у блоці «Варто повторити» з лічильником завдань
  await play("ft3", [1, 0, "next", 1, 0]); while (await page.locator("#player").isVisible()) await page.click("#pClose");
  const r2 = await play("ft3", [1, 0, "next", 1, 0]);
  ok(/Помилки в цьому уроці пов'язані з цією темою/.test(r2), `помилки у двох завданнях з pre: «Помилки … пов'язані», а ${r2.slice(-300)}`);
  while (await page.locator("#player").isVisible()) await page.click("#pClose");
  // «Прогрес»: 1 день поспіль; навичка без тренувань — без граматичного роду
  const progress = async st => { await boot(st); await page.click('.tab[data-tab="progress"]'); return (await page.locator("#view").innerText()).replace(/\s+/g, " "); };
  const pr = await progress({ ...st0, skills: {} });
  ok(/1 день поспіль/.test(pr) && !/1 днів/.test(pr), `«Прогрес»: «1 день поспіль», а ${pr.slice(0, 300)}`);
  ok(/тренувань ще не було/.test(pr) && !/тренувал/.test(pr), "«Прогрес»: навичка без тренувань — «тренувань ще не було», без «ще не тренувалась»");
  ok(/3 дні поспіль/.test(await progress({ ...st0, streak: { count: 3, last: today } })), "«Прогрес»: «3 дні поспіль»");
  // картка предмета, коли пройдено всі розділи класу: «усе пройдено ✓» замість «зараз: …»
  const allDone = Object.fromEntries([...FIX.sections.filter(s => s[1] === 5).flatMap(s => s[4]), ...SEC.lessons.map(l => l.id)].map(id => [id, { done: true, stars: 1 }]));
  await boot({ ...st0, lessons: allDone });
  const all = (await page.locator('#view .subjcard[data-subject="math"]').innerText()).replace(/\s+/g, " ");
  ok(/усе пройдено ✓/.test(all) && !/зараз:/.test(all), `картка предмета: усі розділи пройдено — «усе пройдено ✓», а ${all}`);
  ok(!errors.length, "тексти інтерфейсу: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 23) Читабельність рендеру (engine-render-legibility-1117): справжній CSS index.html, 360 px. Фікстура-уроки з лабораторіями
   (моделі як у g4m2 «Додай 1365», g8m1 «добуток/степінь», g8m1 смужки, g11m2 «Дрон у куті»), формулами, strata й align. */
async function dockWheelScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 700 }, serviceWorkers: "block" });
  const page = await ctx.newPage(); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), seed);
  await page.reload();
  const SEC = { id: "wh1", title: "Колесо", lessons: [{ id: "wh1l1", title: "Колесо", screens: [{ type: "sort", title: "Розсортуй", bins: ["так", "ні"], items: [1, 2, 3, 4, 5, 6, 7, 8].map(i => ["Картка " + i, i % 2]) }] }] };
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("wh1l1"); }, SEC);
  await page.waitForSelector(".sort");
  const ab = await page.locator("#action").boundingBox(), st = () => page.evaluate(() => { const p = document.querySelector("#player"); return [p.scrollTop, p.scrollHeight > p.clientHeight]; });
  ok((await st())[1], "wheel: екран sort довший за вікно (фікстура)");
  await page.mouse.move(ab.x + ab.width / 2, ab.y + ab.height / 2); await page.mouse.wheel(0, 300); await page.waitForTimeout(250);
  const a = await st(); ok(a[0] > 0, `колесо над кнопкою «Перевірити» гортає екран, а scrollTop = ${a[0]}`);
  await page.mouse.wheel(0, -1000); await page.waitForTimeout(250);
  ok((await st())[0] === 0, "колесо вгору над панеллю повертає на початок");
  // ctrl+колесо (масштаб сторінки) над панеллю не перехоплюємо
  const cw = await page.evaluate(() => { const e = new WheelEvent("wheel", { deltaY: 100, ctrlKey: true, cancelable: true, bubbles: true }); document.querySelector("#dock").dispatchEvent(e); return e.defaultPrevented; });
  ok(cw === false, "ctrl+колесо над панеллю не гаситься (масштаб)");
  // підказка «торкнись місця» — лише при одній живій точці; з двома тап нічого не переносить (P1 рев'ю)
  const SEC2 = { id: "wh2", title: "Дві", lessons: [{ id: "wh2l1", title: "Дві", screens: [{ type: "explore", title: "Дві точки", body: "QA", cta: "Далі",
    lab: { kind: "numline", view: [0, 10], tick: 1, params: { a: { min: 0, max: 10, step: 1, start: 2, hide: true }, b: { min: 0, max: 10, step: 1, start: 7, hide: true } }, points: { A: { x: "a", drag: true }, B: { x: "b", drag: true } } } }] }] };
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); }, SEC2);
  await page.evaluate(() => { document.querySelector("#pClose").click(); document.querySelector("#pClose").click(); }).catch(() => {});
  await page.evaluate(() => window.__slidStart("wh2l1")); await page.waitForSelector("#stage .lab");
  const h2t = await page.locator("#stage .lab .lab-hint").innerText();
  ok(/Тягни точку/.test(h2t) && !/торкнись/.test(h2t), `дві точки: підказка без «торкнись», а «${h2t}»`);
  await ctx.close();
}
async function tapMoveScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 760 }, hasTouch: true, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), seed);
  await page.reload();
  const SEC = { id: "fT", grade: 5, weeks: [30, 31], title: "QA T", why: "QA", lessons: [{ id: "ft1", title: "Урок ft1", icon: "book", screens: [
    { type: "explore", title: "Тягни", body: "QA", cta: "Далі", lab: { kind: "numline", view: [0, 10], tick: 1, params: { t: { min: 0, max: 10, step: 1, start: 3, hide: true } }, points: { P: { x: "t", drag: true, label: "{t|0}" } } } },
    { type: "explore", title: "З повзунком", body: "QA", cta: "Далі", lab: { kind: "numline", view: [0, 10], tick: 1, slider: true, params: { t: { min: 0, max: 10, start: 3, hide: true, label: "$t$" } }, points: { P: { x: "t", drag: true, label: "{t|0}" } } } }] }] };
  await page.evaluate(install, FIX);
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("ft1"); }, SEC);
  const val = () => page.evaluate(() => +document.querySelector('#stage .lab .lab-h[data-h="0"]').getAttribute("aria-valuenow"));
  const sb = await page.locator("#stage .lab svg").boundingBox(), h0 = await page.locator('#stage .lab .lab-h[data-h="0"]').boundingBox();
  const cy = h0.y + h0.height / 2, X = f => sb.x + sb.width * f;
  ok(await val() === 3, "тап: старт 3");
  // миша: натискання й рух ≥ 8 px (початок жесту) — точка стоїть
  await page.mouse.move(X(0.9), cy); await page.mouse.down(); await page.mouse.move(X(0.9), cy + 30, { steps: 5 }); await page.mouse.up();
  ok(await val() === 3, `миша: рух після натискання по полю не переносить точку, а ${await val()}`);
  // миша: довге натискання — теж ні
  await page.mouse.move(X(0.9), cy); await page.mouse.down(); await page.waitForTimeout(700); await page.mouse.up();
  ok(await val() === 3, `миша: довге натискання по полю не переносить точку, а ${await val()}`);
  // миша: натискання без відпускання ще не переносить
  await page.mouse.move(X(0.9), cy); await page.mouse.down();
  ok(await val() === 3, `миша: поки кнопку не відпущено, точка стоїть, а ${await val()}`);
  await page.mouse.up(); ok(await val() >= 8, `миша: короткий тап по полю переносить точку, а ${await val()}`);
  // справжній touch через CDP: тап — переносить, рух — ні
  const cdp = await ctx.newCDPSession(page), pt = (x, y) => ({ x, y, id: 1 });
  const touch = async (steps) => { for (const [type, pts, w] of steps) { await cdp.send("Input.dispatchTouchEvent", { type, touchPoints: pts }); if (w) await page.waitForTimeout(w); } };
  await page.evaluate(() => document.querySelector('#stage .lab .lab-h[data-h="0"]').focus()); await page.keyboard.press("Home");   // назад до 0
  const v0 = await val();
  await touch([["touchStart", [pt(X(0.5), cy)]], ["touchMove", [pt(X(0.5), cy + 40)]], ["touchEnd", []]]);
  ok(await val() === v0, `touch: рух після дотику по полю не переносить точку (${v0}), а ${await val()}`);
  await touch([["touchStart", [pt(X(0.5), cy)]], ["touchEnd", [], 0]]);
  const vt = await val(); ok(vt >= 4 && vt <= 6, `touch: короткий тап по полю переносить точку до середини, а ${vt}`);
  await touch([["touchStart", [pt(X(0.1), cy)], 700], ["touchEnd", []]]);
  ok(await val() === vt, `touch: довге натискання не переносить точку, а ${await val()}`);
  ok(await page.locator('#stage .lab input[type="range"]').count() === 0, "slider не заданий: повзунка під моделлю немає (hide)");
  // повзунок-дубль (slider: true): синхронний з точкою в обидва боки
  await page.click("#action");
  ok(await page.locator('#stage .lab input[type="range"][data-p="t"]').count() === 1, "slider: true — під моделлю є повзунок");
  await page.evaluate(() => { const r = document.querySelector('#stage .lab input[data-p="t"]'); r.value = 7; r.dispatchEvent(new Event("input", { bubbles: true })); });
  ok(await val() === 7, `slider → точка: 7, а ${await val()}`);
  await page.evaluate(() => document.querySelector('#stage .lab .lab-h[data-h="0"]').focus()); await page.keyboard.press("ArrowRight");
  ok(await page.evaluate(() => +document.querySelector('#stage .lab input[data-p="t"]').value) === 8, "точка (стрілка) → повзунок: 8");
  // align: розмір шрифту років пропорційний ширині шкали (P3-4): на 200 років не мікроскопічний, на 60 — як раніше (≈ 11 px на 360 px)
  const fsz = [];
  for (const [i, r] of [{ from: 1180, to: 1240 }, { from: 1000, to: 1200 }].entries()) {
    await page.reload(); await page.evaluate(install, FIX);
    await page.evaluate(([i, r]) => { const sec = { id: "fQ" + i, grade: 5, weeks: [30, 31], title: "QA A", why: "QA", lessons: [{ id: "fq" + i, title: "Урок", icon: "book", screens: [{ type: "info", title: "Вступ", body: "QA" },
      { type: "align", title: "Колода", body: "QA", ref: { ...r, seed: 7 }, sample: { len: 18, endYear: r.to - 20 } }] }] }; SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("fq" + i); }, [i, r]);
    await page.click("#action");   // інфо-екран → align
    await page.waitForSelector("#stage .align svg");
    fsz.push(await page.evaluate(() => { const svg = document.querySelector("#stage .align svg"), t = svg.querySelector("text"), k = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width; return { fs: +t.getAttribute("font-size"), px: +(+t.getAttribute("font-size") * k).toFixed(1) }; }));
  }
  ok(fsz.every(x => x.px >= 8 && x.px <= 14), `align: шрифт років на 360 px — 8…14 px для 61 і 201 року, а ${JSON.stringify(fsz)}`);
  ok(!errors.length, "тап: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}
async function renderLegibilityScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 760 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  await page.goto(URL0);
  await page.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), seed);
  await page.reload();
  const P4 = { min: 0, max: 9, start: 0 };
  const ex = (title, lab) => ({ type: "explore", title, body: "QA", lab, cta: "Далі" });
  const SEC = { id: "fR", grade: 5, weeks: [30, 31], title: "QA R", why: "QA", lessons: [{ id: "fr1", title: "Урок fr1", icon: "book", screens: [
    ex("Стрибки", { kind: "numline", view: [2700, 4800], tick: 100, labels: 500, params: { th: { min: 0, max: 1, start: 1 }, hu: { ...P4, start: 3 }, tn: { ...P4, start: 6 }, un: { ...P4, start: 5 } },
      let: { k: "1000*th+100*hu+10*tn+un" }, jumps: [{ from: "2748", to: "2748+1000*th", label: "+{1000*th|0}" }, { from: "2748+1000*th", to: "2748+1000*th+100*hu", label: "+{100*hu|0}" }],
      points: { M: { x: "2748", color: "muted", label: "2748" }, N: { x: "2748+k", label: "{2748+k|0}" }, E: { x: "4800", label: "кінець" } } }),
    ex("Дві точки", { kind: "numline", view: [0, 5], tick: 0.5, labels: 1, params: { m: { min: -2, max: 3, start: 1, label: "$\\alpha$" }, n: { min: -2, max: 3, start: -2, label: "$x_1$" } },
      points: { A: { x: "2^m * 2^n", label: "добуток {2^m * 2^n|4}" }, B: { x: "2^(m+n)", label: "степінь {2^(m+n)|4}", color: "green" } } }),
    ex("Смужки", { kind: "fraction", params: { a: { min: 5, max: 12, step: 1, start: 7 } }, items: [{ shape: "bar", n: "a", k: 3, label: "$3/a$" }, { shape: "bar", n: "a", k: 5, label: "сума $5/a$" }] }),
    ex("Дрон", { kind: "solid", shape: "box", params: { a: { min: 1, max: 5, start: 3 }, c: { min: 1, max: 5, start: 2 }, b: { min: 1, max: 5, start: 4 } }, a: "a", b: "b", c: "c", axes: true,
      marks: [{ v: 0, label: "O" }, { v: 6, label: "M" }, { v: 5, label: "M₁" }] }),
    { type: "info", title: "Формули", body: "<p id=qf>$\\sqrt{2}$ і $1 \\to 4$ і $1 - 4$ і $1/a^n$</p><p id=qu>пі<u>д</u>писаний</p>" },
    { type: "info", title: "Шари", body: "QA", svg: "strata" },
    ex("Тягни", { kind: "numline", view: [0, 10], tick: 1, params: { t: { min: 0, max: 10, step: 1, start: 3, hide: true } }, points: { P: { x: "t", drag: true, label: "{t|0}" } } }),
    { type: "align", title: "Колода", body: "QA", ref: { from: 1180, to: 1240, seed: 7 }, sample: { len: 18, endYear: 1212 } }] }] };
  await page.evaluate(install, FIX);
  await page.evaluate(sec => { SLID_SUBJECTS.find(c => c.id === "math").sections.push(sec); window.__slidStart("fr1"); }, SEC);
  // кожен <text> лабораторії — у межах viewBox SVG; рамки підписів — для перевірки накладань
  const texts = () => page.evaluate(() => { const svg = document.querySelector("#stage .lab svg"), vb = svg.viewBox.baseVal;
    return { vb: [vb.width, vb.height], t: [...svg.querySelectorAll("text")].map(t => { const b = t.getBBox(); return { s: t.textContent, x0: b.x, y0: b.y, x1: b.x + b.width, y1: b.y + b.height }; }) }; });
  const inside = (r, what) => { const out = r.t.filter(b => b.x0 < -0.5 || b.y0 < -0.5 || b.x1 > r.vb[0] + 0.5 || b.y1 > r.vb[1] + 0.5);
    ok(!out.length, `${what}: підписи в межах SVG ${r.vb}, а за межами ${JSON.stringify(out)}`); };
  const overlap = (a, b) => a.x0 < b.x1 - 1 && b.x0 < a.x1 - 1 && a.y0 < b.y1 - 1 && b.y0 < a.y1 - 1;
  const next = () => page.click("#action");
  // 1) стрибки: «+1000» над дугою не обрізано; старт 2748 підписано; точка на правому краю — підпис не виходить за поле
  const r1 = await texts(); inside(r1, "numline зі стрибками");
  ok(r1.t.some(b => b.s === "+1000") && r1.t.some(b => b.s === "2748") && r1.t.some(b => b.s === "кінець"), `numline: підписи +1000, 2748, «кінець» є, а ${r1.t.map(b => b.s)}`);
  // нерозв'язані стани (рев'ю P1-1): старт «2748» і N поруч — підписи в різних рядах, не накладаються
  for (const st of [{ th: 0, hu: 0, tn: 0, un: 5 }, { th: 0, hu: 1, tn: 0, un: 0 }]) {
    await page.evaluate(st => { for (const [k, v] of Object.entries(st)) { const el = document.querySelector(`#stage .lab input[data-p="${k}"]`); el.value = v; el.dispatchEvent(new Event("input", { bubbles: true })); } }, st);
    const rs = await texts(), want = String(2748 + st.hu * 100 + st.un), m = rs.t.find(b => b.s === "2748"), nn = rs.t.find(b => b.s === want); inside(rs, `numline зі стрибками ${JSON.stringify(st)}`);
    ok(m && nn && !overlap(m, nn), `numline ${JSON.stringify(st)}: «2748» і «${want}» не накладаються, а ${JSON.stringify([m, nn])}`); }
  await next();
  // 2) дві точки в одному місці: підписи не накладаються; назви повзунків для читача екрана — без TeX
  const r2 = await texts(); inside(r2, "numline з двома точками");
  const [pa, pb] = ["добуток", "степінь"].map(w => r2.t.find(b => b.s.startsWith(w)));
  ok(pa && pb && !overlap(pa, pb), `numline: «добуток» і «степінь» в одній точці не накладаються, а ${JSON.stringify([pa, pb])}`);
  const aria = await page.locator('#stage .lab input[type="range"]').evaluateAll(xs => xs.map(x => x.getAttribute("aria-label")));
  ok(same(aria, ["α", "x₁"]), `назви повзунків: «α», «x₁» без «\\» і «_», а ${JSON.stringify(aria)}`);
  await next();
  // 3) смужки: «сума 5/a» не обрізано зліва
  const r3 = await texts(); inside(r3, "fraction із довгим підписом");
  await next();
  // 4) solid: осі x, y, z; «M₁» і довжини ребер не накладаються
  const r4 = await texts(); inside(r4, "solid з осями");
  ok(["x", "y", "z"].every(n => r4.t.some(b => b.s === n)), `solid: підписи осей x, y, z, а ${r4.t.map(b => b.s)}`);
  const m1 = r4.t.find(b => b.s === "M₁"), nums = r4.t.filter(b => /^\d+$/.test(b.s));
  ok(m1 && nums.length === 3 && nums.every(b => !overlap(m1, b)), `solid: «M₁» не зливається з довжиною ребра, а ${JSON.stringify([m1, nums])}`);
  await next();
  // 5) формули й підкреслення: корінь — маска знака до риски, \to помітно ширша за «−», <u> з відступом і без розривів
  const f = await page.evaluate(() => { const sq = document.querySelector("#qf .sqrt"), bs = getComputedStyle(sq, "::before"), rd = sq.querySelector(".radicand");
    const mos = [...document.querySelectorAll("#qf .mo")], arr = mos.find(m => m.textContent === "→"), minus = mos.find(m => m.textContent === "−"), u = getComputedStyle(document.querySelector("#qu u"));
    return { mask: bs.webkitMaskImage || bs.maskImage, stretch: bs.alignSelf, top: rd.getBoundingClientRect().top - sq.getBoundingClientRect().top,
      arr: arr.getBoundingClientRect().width, minus: minus.getBoundingClientRect().width, off: u.textUnderlineOffset, skip: u.textDecorationSkipInk,
      den: !!document.querySelector("#qf .fr .de sup") }; });
  ok(/svg/.test(f.mask) && f.stretch === "stretch" && Math.abs(f.top) < 0.5, `корінь: знак — маска на всю висоту, риска від верху знака, а ${JSON.stringify(f)}`);
  ok(f.arr > 1.6 * f.minus, `\\to: стрілка помітно ширша за мінус, а ${f.arr} проти ${f.minus}`);
  ok(f.off !== "auto" && parseFloat(f.off) >= 3 && f.skip === "none", `<u>: відступ ≥ 3 px і без розривів, а ${f.off} ${f.skip}`);
  ok(f.den, "1/a^n: показник у знаменнику");
  // висококонтрастний режим (рев'ю P3-3): знак під маскою малюється системним кольором тексту, а не зникає
  await page.emulateMedia({ forcedColors: "active" });
  const fc = await page.evaluate(() => { const bs = getComputedStyle(document.querySelector("#qf .sqrt"), "::before"); return { adj: bs.forcedColorAdjust, bg: bs.backgroundColor, mask: bs.webkitMaskImage || bs.maskImage }; });
  await page.emulateMedia({ forcedColors: "none" });
  ok(fc.adj === "none" && !/rgba\(0, 0, 0, 0\)|transparent/.test(fc.bg) && /svg/.test(fc.mask), `корінь у forced-colors: forced-color-adjust none і видимий фон під маскою, а ${JSON.stringify(fc)}`);
  await next();
  // 6) strata: знахідки не налазять на стрілку часу; усі підписи в межах SVG
  const st = await page.evaluate(() => { const svg = document.querySelector("#stage svg[aria-label^='Розріз']"), ts = [...svg.querySelectorAll("text")].map(t => { const b = t.getBBox(); return { s: t.textContent, x0: b.x, x1: b.x + b.width, y0: b.y, y1: b.y + b.height }; });
    const ar = svg.querySelector("path").getBBox(), vb = svg.viewBox.baseVal; return { ts, ax: ar.x, vb: [vb.width, vb.height] }; });
  const finds = st.ts.filter(b => b.s.length > 1 && !/новіше|давніше/.test(b.s));
  ok(finds.length === 4 && finds.every(b => b.x1 < st.ax - 4), `strata: усі 4 знахідки лівіше стрілки (x ${st.ax}), а ${JSON.stringify(finds)}`);
  ok(st.ts.every(b => b.x0 >= 0 && b.x1 <= st.vb[0] && b.y0 >= 0 && b.y1 <= st.vb[1]), `strata: підписи в межах SVG, а ${JSON.stringify(st.ts)}`);
  await next();
  // 6а) клік по точці (без перетягування) ставить фокус на її ручку — далі стрілки рухають цю точку (qa-drag-points-1117 B1)
  const hb = await page.locator('#stage .lab .lab-h[data-h="0"]').boundingBox();
  await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2); await page.mouse.down(); await page.mouse.up();
  const fh = await page.evaluate(() => document.activeElement?.classList.contains("lab-h") ? document.activeElement.dataset.h : null);
  await page.keyboard.press("ArrowRight");
  const now3 = await page.evaluate(() => [document.activeElement?.dataset?.h ?? null, document.querySelector('#stage .lab .lab-h[data-h="0"]').getAttribute("aria-valuenow")]);
  ok(fh === "0" && same(now3, ["0", "4"]), `клік по точці: фокус на ручці, стрілка → 3 → 4, а ${fh} ${JSON.stringify(now3)}`);
  // 6б) тап по порожньому місцю шкали переносить єдину жива точку туди й далі її тягне; під моделлю — видима підказка (qa-drag-points-1117 B2)
  const hint = await page.locator("#stage .lab .lab-hint").innerText().catch(() => ""), hintVis = await page.locator("#stage .lab .lab-hint").isVisible();
  ok(hintVis && /Тягни точку/.test(hint) && /торкнись/.test(hint) && /стрілки/.test(hint), `lab: видима підказка під моделлю, а «${hint}» (${hintVis})`);
  const sb = await page.locator("#stage .lab svg").boundingBox(), h1 = await page.locator('#stage .lab .lab-h[data-h="0"]').boundingBox();
  const cy = h1.y + h1.height / 2, before = await page.evaluate(() => document.querySelector('#stage .lab .lab-h[data-h="0"]').getAttribute("aria-valuenow"));
  await page.mouse.click(sb.x + sb.width * 0.85, cy);
  const after = await page.evaluate(() => document.querySelector('#stage .lab .lab-h[data-h="0"]').getAttribute("aria-valuenow"));
  ok(+after >= 8 && +after > +before, `тап по порожньому місцю шкали: точка перескочила праворуч (було ${before}), а ${after}`);
  const h2 = await page.locator('#stage .lab .lab-h[data-h="0"]').boundingBox();
  await page.mouse.move(h2.x + h2.width / 2, cy); await page.mouse.down(); await page.mouse.move(sb.x + sb.width * 0.2, cy, { steps: 8 }); await page.mouse.up();
  const dragged = await page.evaluate(() => document.querySelector('#stage .lab .lab-h[data-h="0"]').getAttribute("aria-valuenow"));
  ok(+dragged <= 3, `після тапу точку можна тягнути далі, а ${dragged}`);
  await next();
  // 7) align: роки шкали цілком у полі; «Збіг візерунка» — кількість кілець, на розв'язку 18 з 18
  const al = await page.evaluate(() => { const svg = document.querySelector("#stage .align svg"), vb = svg.viewBox.baseVal;
    return { yrs: [...svg.querySelectorAll("text")].map(t => { const b = t.getBBox(); return [t.textContent, b.x, b.x + b.width]; }), x0: vb.x, w: vb.width, m: document.querySelector("#almatch").textContent }; });
  ok(same(al.yrs.map(y => y[0]), ["1180", "1200", "1220", "1240"]) && al.yrs.every(y => y[1] >= al.x0 - 0.5 && y[2] <= al.x0 + al.w + 0.5), `align: роки шкали повністю в полі, а ${JSON.stringify(al)}`);
  ok(/^\d+ з 18 кілець$/.test(al.m), `align: збіг — «N з 18 кілець», а «${al.m}»`);
  await page.evaluate(() => { const r = document.querySelector("#alrng"); r.value = 1212 - 18 + 1 - 1180; r.dispatchEvent(new Event("input")); });
  ok(await page.locator("#almatch").innerText() === "18 з 18 кілець" && await page.locator("#almeter.full").count() === 1, "align: на правильному зсуві — «18 з 18 кілець», шкала повна");
  ok(!errors.length, "читабельність рендеру: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 26) Мова змісту предмета (engine-eng-lang-attr, D-054; docs/design/english.md §2): фікстура — предмет ukr з targetLang: "en".
   Урок, тест рівня й тренування: section.screen — lang="en" (заголовок, текст, варіанти, поля); хром рушія всередині (eyebrow тесту,
   «Тренування ·», .fix, «Підказка:», «Правильна відповідь:», «Джерело:») — lang="uk"; у панелі відповіді зміст (fbOk/fbBad/fbText)
   — у span lang="en", службові повідомлення — мовою сторінки (uk). Поле uk екрана теорії — згорнутий details lang="uk"
   «Переклад українською», подія журналу uk_open один раз на показ; на оцінюваному екрані й у предметі без targetLang блоку немає.
   Регресія: той самий урок без targetLang — жодного lang усередині #stage і #dock (українські предмети як раніше). */
async function contentLangScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const LES = { id: "fen1", title: "Plurals", icon: "book", outro: { text: "Well done.", learned: ["I can make plurals."] }, screens: [
    { type: "info", title: "One cat, two cats", body: "<p>We add <b>-s</b>.</p>", uk: "<p>Додаємо <b>-s</b>.</p>" },
    { type: "choice", title: "Choose", body: "Which word is plural?", opts: ["cat", "cats", "dog"], correct: 1, fbOk: "Yes!", fbBad: "Not quite.", fbText: "Plurals end in -s.", hint: "Look at the end.", uk: "<p>Не має показатися.</p>" },
    { type: "pick", title: "Find", text: "Two [cats] and one [!dog].", fbOk: "Great!", fbText: "Cats is plural." }] };
  const POOL = { id: "pfen", section: "fen", status: "draft", sources: [{ id: "z", title: "Fixture book", url: "https://example.org/" }],
    items: [{ id: "a01", lesson: "fen1", lvl: 1, sk: "orth", src: "z p. 3", type: "choice", title: "Pick one", body: "Which is plural?", opts: ["dogs", "dog"], correct: 0, steps: ["Dogs ends in -s."] }] };
  const DIAG = { id: "dgfen", grade: 5, title: "Level test", why: "QA", status: "draft", topics: [{ id: "t", title: "Plurals", kind: "cur", lessons: ["fen1"] }],
    items: [{ topic: "t", type: "choice", sk: "orth", title: "Which?", body: "Which is plural?", opts: ["pens", "pen"], correct: 0 }] };
  const install = ([les, pool, diag, tl]) => { const c = SLID_SUBJECTS.find(c => c.id === "ukr");
    c.sections = [{ id: "fen", grade: 5, weeks: [1, 2], title: "QA en", why: "QA", lessons: [les] }]; c.pools = [pool]; c.diags = [diag]; delete c.graph;
    if (tl) c.targetLang = tl; else delete c.targetLang; };
  // мова, якою браузер читає елемент: найближчий предок з lang
  const langOf = sel => page.evaluate(sel => { const e = document.querySelector(sel); return e ? (e.closest("[lang]")?.getAttribute("lang") ?? null) : "немає"; }, sel);
  // мова, якою браузер читає ТЕКСТ елемента: перший непорожній текстовий вузол усередині (обгортки span lang — усередині заголовків)
  const textLang = sel => page.evaluate(sel => { const e = document.querySelector(sel); if (!e) return "немає";
    const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, { acceptNode: n => n.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }), t = w.nextNode();
    return t ? (t.parentElement.closest("[lang]")?.getAttribute("lang") ?? null) : "без тексту"; }, sel);
  const ukOpens = () => page.evaluate(async () => { if (!window.SLID_EVIDENCE) return null; await SLID_EVIDENCE.flush?.();
    return (await SLID_EVIDENCE.export()).events.filter(e => e.type === "uk_open").map(e => [e.d.mode, e.d.l, e.d.i]); });
  const boot = async st => { await page.goto(URL0); await page.evaluate(s => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify(s)); }, st); await page.reload(); };

  // урок
  await boot({ grade: 5, subject: "ukr", unlockAll: true });
  await page.evaluate(install, [LES, POOL, DIAG, "en"]);
  ok(await page.evaluate(() => SLID.subjectLang("ukr") === "en" && SLID.subjectLang(SLID_SUBJECTS.find(c => c.id === "ukr")) === "en"), "мова змісту: SLID.subjectLang(id і предмет) — en");
  await page.evaluate(() => window.__slidStart("fen1"));
  ok(await langOf("#stage section.screen") === "en", `урок en: section.screen lang="en", а ${await langOf("#stage section.screen")}`);
  ok(await langOf("#stage h2") === "en", "урок en: заголовок екрана — en");
  ok(await langOf("#action") === "uk", `урок en: кнопка дії — мовою сторінки uk, а ${await langOf("#action")}`);
  ok(await langOf("#pClose") === "uk", "урок en: ✕ — uk");
  const uk = page.locator("#stage details.uktr");
  ok(await uk.count() === 1, "урок en: екран теорії з uk — блок перекладу");
  ok(await uk.count() === 1 && !(await uk.evaluate(d => d.open)), "урок en: переклад згорнуто за замовчуванням");
  ok(await langOf("#stage details.uktr .note-b") === "uk", "урок en: текст перекладу — lang uk");
  ok(await langOf("#stage details.uktr summary") === "uk" && /Переклад українською/.test(await page.locator("#stage details.uktr summary").innerText()), "урок en: кнопка «Переклад українською» — хром uk");
  ok(same(await ukOpens(), []), "урок en: до відкриття uk_open немає");
  if (await uk.count()) { await page.click("#stage details.uktr summary"); await page.click("#stage details.uktr summary"); await page.click("#stage details.uktr summary"); }
  ok(await uk.count() && await uk.evaluate(d => d.open), "урок en: переклад відкривається");
  ok(same(await ukOpens(), [["lesson", "fen1", 0]]), `урок en: uk_open один раз на показ екрана (mode, l, i), а ${JSON.stringify(await ukOpens())}`);
  await page.click("#action");
  // choice: помилка → «Підказка:» uk, підказка en; fbBad — en; повідомлення рушія — uk
  ok(await page.locator("#stage details.uktr").count() === 0, "урок en: на оцінюваному екрані uk не показано");
  ok(await langOf('#stage .opt[data-k="0"]') === "en", "урок en: варіанти — en");
  const optKs = () => page.locator("#stage .opt .k").allInnerTexts();
  ok(same(await optKs(), ["A", "B", "C"]), `урок en: літери варіантів — латиниця A, B, C (engine-eng-validate), а ${JSON.stringify(await optKs())}`);
  await page.click('#stage .opt[data-k="0"]'); await page.click("#action");
  ok(await page.evaluate(() => document.querySelector("#fbTitle [lang]")?.getAttribute("lang") === "en" && document.querySelector("#fbTitle [lang=en]").textContent === "Not quite."), "урок en: fbBad у span lang=en");
  ok(await page.evaluate(() => { const t = document.querySelector("#fbText"); return /Обери інший варіант/.test(t.textContent) && !t.querySelector("[lang=en]"); }), "урок en: службове повідомлення після помилки — без lang en");
  ok(await langOf("#hintHost .hint b") === "uk", `урок en: «Підказка:» — uk, а ${await langOf("#hintHost .hint b")}`);
  ok(await page.evaluate(() => { const h = document.querySelector("#hintHost .hint span"); const tx = [...h.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(""); return /Look at the end/.test(tx) && h.closest("[lang]").getAttribute("lang") === "en"; }), "урок en: текст підказки — en");
  await page.click('#stage .opt[data-k="2"]'); await page.click("#action");
  ok(await page.evaluate(() => { const t = document.querySelector("#fbTitle"); return /Ось правильна відповідь/.test(t.textContent) && !t.querySelector("[lang=en]"); }), "урок en: «Ось правильна відповідь.» — хром без lang en");
  ok(await page.evaluate(() => document.querySelector("#fbText [lang=en]")?.textContent === "Plurals end in -s."), "урок en: fbText — у span lang=en");
  await page.click("#action");
  ok(await langOf("#stage .fix") === "uk", `урок en: інструкція рушія .fix (pick) — uk, а ${await langOf("#stage .fix")}`);
  ok(await langOf("#stage .pw") === "en", "урок en: слова pick — en");
  await page.locator(".pw", { hasText: /^cats$/ }).click(); await page.click("#action");
  ok(await page.evaluate(() => document.querySelector("#fbTitle [lang=en]")?.textContent === "Great!"), "урок en: fbOk — у span lang=en");
  await page.click("#action");
  ok(await textLang("#stage h1") === "en" && await textLang("#stage .learned .li") === "en" && await textLang("#stage .endhero > div:has(> p)") === "en", "підсумок уроку en: назва, outro й «умієш» — en");
  ok(await textLang("#stage .endhero > .eyebrow") === "uk" && await textLang("#stage .learned > .eyebrow") === "uk", "підсумок уроку en: службові eyebrow — uk");
  await page.click("#action");

  // тест рівня
  await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
  await page.click('button[data-subject="ukr"]'); { const d = page.locator("[data-diag]"); if (await d.count()) await d.first().click(); else await page.click('[data-plan="ukr"]'); }
  await page.click("[data-diag-go]");
  ok(await langOf("#stage section.screen") === "en", "тест en: section.screen — en");
  ok(same(await optKs(), ["A", "B"]), `тест en: літери варіантів — A, B, а ${JSON.stringify(await optKs())}`);
  ok(await textLang("#stage .eyebrow") === "uk" && /Тест рівня/.test(await page.locator("#stage .eyebrow").textContent()), `тест en: «Тест рівня · завдання N» — uk, а ${await textLang("#stage .eyebrow")}`);
  ok(await langOf("#skip") === "uk", "тест en: «Ще не знаю» — uk");
  await page.click('#stage .opt[data-k="0"]'); await page.click("#action");
  ok(await textLang("#stage .learned .li .grow") === "en" && await textLang("#stage .learned .li .tchip") === "uk", `підсумок тесту en: назви тем — en, статус теми — uk, а ${await textLang("#stage .learned .li .grow")}`);
  await page.locator("#pClose").click();

  // тренування
  await boot({ grade: 5, subject: "ukr", unlockAll: false, lessons: { fen1: { done: true, stars: 3 } } });
  await page.evaluate(install, [LES, POOL, DIAG, "en"]);
  await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
  await page.click('button[data-subject="ukr"]'); await page.click('[data-practice-view="ukr"]'); await page.click('[data-practice="fen1"]');
  ok(await langOf("#stage section.screen") === "en", "тренування en: section.screen — en");
  ok(await page.evaluate(() => { const e = document.querySelector("#stage .eyebrow"); const u = e.querySelector("[lang=uk]"); return !!u && /Тренування/.test(u.textContent) && !/Plurals/.test(u.textContent) && e.closest("[lang]").getAttribute("lang") === "en"; }), "тренування en: «Тренування ·» — uk, назва уроку — en");
  ok(await langOf("#stage .srcnote") === "uk", "тренування en: «Джерело:» — uk");
  ok(same(await optKs(), ["A", "B"]), `тренування en: літери варіантів — A, B, а ${JSON.stringify(await optKs())}`);
  await page.click('#stage .opt[data-k="0"]'); await page.click("#action");
  ok(await page.evaluate(() => { const t = document.querySelector("#fbTitle"); const u = t.querySelector("[lang=uk]"); return !!u && u.textContent === "Правильно."; }), "тренування en: типове «Правильно.» — uk, хоч і в обгортці змісту");
  ok(await page.evaluate(() => { const b = document.querySelector("#fbText .steps b"); return b && b.closest("[lang]").getAttribute("lang") === "uk" && document.querySelector("#fbText .steps > span").closest("[lang]").getAttribute("lang") === "en"; }), "тренування en: «Пояснення» — uk, кроки — en");

  // регресія: предмет без targetLang — жодного lang у плеєрі, uk не показано
  await boot({ grade: 5, subject: "ukr", unlockAll: true });
  await page.evaluate(install, [LES, POOL, DIAG, null]);
  ok(await page.evaluate(() => SLID.subjectLang("ukr") === ""), "без targetLang: SLID.subjectLang — порожньо");
  await page.evaluate(() => window.__slidStart("fen1"));
  ok(await page.locator("#stage details.uktr").count() === 0, "без targetLang: блоку перекладу немає");
  await page.click("#action");
  ok(same(await optKs(), ["А", "Б", "В"]), `без targetLang: літери варіантів — кирилиця А, Б, В (як раніше), а ${JSON.stringify(await optKs())}`);
  await page.click('#stage .opt[data-k="0"]'); await page.click("#action");
  ok(await page.evaluate(() => !document.querySelector("#stage [lang], #dock [lang]")), "без targetLang: у #stage і #dock немає жодного lang (як раніше)");
  // невідома мова — ігнорується (validate — помилка)
  await page.evaluate(install, [LES, POOL, DIAG, "xx"]);
  ok(await page.evaluate(() => SLID.subjectLang("ukr") === ""), "targetLang: \"xx\" — рушій ігнорує");
  ok(!errors.length, "мова змісту: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 27) Мовні вправи англійською (engine-eng-lang-core; docs/design/english.md §5.4, §5.6; CONTENT_SCHEMA §4.1): фікстура — предмет ukr
   з targetLang: "en". word: color на ключ colour — ok і примітка «In British English: colour.» у span lang=en; becuase — «Almost: check
   the spelling.» (en) після першої спроби; «дім» — «Перемкни клавіатуру на англійську.» (хром uk); «сat» з кириличною «с» — ok; «Yes.» — ok.
   stress складами: кнопки — склади, інструкція «Торкнись наголошеного складу.». Регресія: без targetLang color ≠ colour, без примітки. */
async function engLangScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const fb = t => ({ fbOk: "Yes!", fbBad: "Not quite.", fbText: t });
  const LES = { id: "fen2", title: "Spelling", icon: "book", outro: { text: "Well done.", learned: ["I can spell."] }, screens: [
    { type: "word", title: "Type the word", body: "What is red, blue or green? A …", answer: "colour", ...fb("Red is a colour.") },
    { type: "word", title: "Type the word", body: "I stay at home … I am ill.", answer: "because", ...fb("Because tells us why.") },
    { type: "word", title: "Type the word", body: "A small pet that says meow.", answer: "cat", ...fb("A cat says meow.") },
    { type: "stress", title: "Find the stressed syllable", words: ["+pho|to|graph", "pho|+tog|ra|pher"], ...fb("PHOtograph, phoTOGrapher.") },
    { type: "word", title: "Answer", body: "Is London in the UK?", answer: "yes", ...fb("London is the capital of the UK.") }] };
  const install = ([les, tl]) => { const c = SLID_SUBJECTS.find(c => c.id === "ukr");
    c.sections = [{ id: "fen", grade: 5, weeks: [1, 2], title: "QA en", why: "QA", lessons: [les] }]; c.pools = []; c.diags = []; delete c.graph;
    if (tl) c.targetLang = tl; else delete c.targetLang; };
  const boot = async tl => { await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, subject: "ukr", unlockAll: true })); });
    await page.reload(); await page.evaluate(install, [LES, tl]); await page.evaluate(() => window.__slidStart("fen2")); };
  const answer = async v => { await page.fill("#numIn", v); await page.click("#action"); };
  const dock = () => page.evaluate(() => ({ kind: document.querySelector("#dock").className, text: document.querySelector("#fbText").textContent,
    en: [...document.querySelectorAll("#fbText [lang=en]")].map(e => e.textContent), lang: (() => { const t = [...document.querySelector("#fbText").childNodes].find(n => n.textContent.trim()); return t ? (t.nodeType === 3 ? t.parentElement : t).closest("[lang]")?.getAttribute("lang") ?? null : null; })() }));

  await boot("en");
  await answer("Color");
  let d = await dock();
  ok(/\bok\b/.test(d.kind) && d.en.includes("In British English: colour."), `en word: color → ok і примітка в span lang=en, а ${JSON.stringify(d)}`);
  ok(d.en.includes("Red is a colour."), "en word: fbText після примітки — en");
  await page.click("#action");
  await answer("becuase"); d = await dock();
  ok(/\bbad\b/.test(d.kind) && d.en.includes("Almost: check the spelling."), `en word: одруківка — «Almost» у span lang=en, а ${JSON.stringify(d)}`);
  ok(await page.locator("#action").isDisabled(), "en word: та сама відповідь — «Спробувати ще раз» неактивна");
  await answer("because"); d = await dock();
  ok(/\bok\b/.test(d.kind) && !/British/.test(d.text), "en word: друга спроба правильна, без примітки");
  await page.click("#action");
  await answer("дім"); d = await dock();
  ok(/\bbad\b/.test(d.kind) && d.text.includes("Перемкни клавіатуру на англійську.") && d.lang !== "en", `en word: кирилиця — повідомлення рушія мовою сторінки, а ${JSON.stringify(d)}`);
  await answer("\u0441at"); d = await dock();
  ok(/\bok\b/.test(d.kind), `en word: «сat» з кириличною «с» — ok, а ${JSON.stringify(d)}`);
  await page.click("#action");
  ok(same(await page.locator("#stage .sv").allTextContents(), ["pho", "to", "graph", "pho", "tog", "ra", "pher"]), "stress складами: кнопки — склади");
  ok(/Торкнись наголошеного складу/.test(await page.locator("#stage .fix").textContent()), "stress складами: інструкція про склад");
  await page.click('#stage .sv[data-w="0"][data-i="0"]'); await page.click('#stage .sv[data-w="1"][data-i="1"]'); await page.click("#action");
  ok(/\bok\b/.test((await dock()).kind), "stress складами: правильно");
  await page.click("#action");
  await answer("Yes."); d = await dock();
  ok(/\bok\b/.test(d.kind), `en word: «Yes.» = yes, а ${JSON.stringify(d)}`);

  // регресія: той самий урок без targetLang — правила англійської вимкнені
  await boot(null);
  await answer("color"); d = await dock();
  ok(/\bbad\b/.test(d.kind) && !/British/.test(d.text) && /Зміни відповідь/.test(d.text), `без targetLang: color ≠ colour, без примітки, а ${JSON.stringify(d)}`);
  ok(!errors.length, "мовні вправи en: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}

/* 28) build — речення з плиток (engine-eng-build; docs/design/english.md §5.5; CONTENT_SCHEMA §4.1): фікстура — предмет ukr з targetLang "en",
   телефон 360 px з дотиком. Без targetLang — той самий урок з українським реченням, точне порівняння. */
async function buildScenario(browser) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 780 }, hasTouch: true, serviceWorkers: "block" });
  const page = await ctx.newPage(), errors = []; page.on("pageerror", e => errors.push(String(e))); page.setDefaultTimeout(8000);
  await page.route("**/fonts.googleapis.com/**", r => r.abort());
  const fb = t => ({ fbOk: "Yes!", fbBad: "Not quite.", fbText: t });
  const Q = { type: "build", title: "Put the words in order", body: "Ask about Kate's home.", tiles: ["does", "she", "Where", "live"], answer: ["Where does she live?"], extra: ["do"], ...fb("Where + does + she + live?") };
  const U = { type: "build", title: "Put the words in order", tiles: ["usually", "I", "walk", "to school"], answer: ["I usually walk to school.", "Usually I walk to school."], ...fb("Usually can go first.") };
  const LES = { id: "fbl1", title: "Questions", icon: "book", outro: { text: "Well done.", learned: ["I can ask questions."] }, screens: [Q, U, { ...U, title: "Again" }] };
  const UKR = { id: "fbl1", title: "Речення", icon: "book", outro: { text: "Готово.", learned: ["Складаю речення."] }, screens: [
    { type: "build", title: "Склади речення", tiles: ["яскраво", "Сонце", "світить"], answer: "Сонце яскраво світить.", fbOk: "Так.", fbText: "Підмет — сонце." }] };
  const DIAG = { id: "dgfb", grade: 5, title: "Що ти вже вмієш?", why: "QA", status: "draft", topics: [{ id: "c", title: "Questions", kind: "cur", lessons: ["fbl1"] }],
    items: [{ ...Q, topic: "c", sk: "orth" }, { ...U, topic: "c", sk: "orth" }] };
  const install = ([les, tl, diag]) => { const c = SLID_SUBJECTS.find(c => c.id === "ukr");
    c.sections = [{ id: "fb", grade: 5, weeks: [1, 2], title: "QA build", why: "QA", lessons: [les] }]; c.pools = []; c.diags = diag ? [diag] : []; delete c.graph;
    if (tl) c.targetLang = tl; else delete c.targetLang; };
  const boot = async (les, tl, diag) => { await page.goto(URL0); await page.evaluate(() => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: 5, subject: "ukr", unlockAll: true })); });
    await page.reload(); await page.evaluate(install, [les, tl, diag]); };
  const bank = () => page.evaluate(() => [...document.querySelectorAll("#stage .bank .bt")].map(b => [+b.dataset.t, b.textContent, b.getAttribute("aria-pressed")]));
  const line = () => page.evaluate(() => [...document.querySelectorAll("#bline .bl")].map(b => b.textContent));
  const tile = k => `#stage .bank .bt[data-t="${k}"]`;
  const dock = () => page.evaluate(() => ({ kind: document.querySelector("#dock").className, text: document.querySelector("#fbText").textContent, title: document.querySelector("#fbTitle").textContent }));
  const noScroll = () => page.evaluate(() => { const p = document.querySelector("#player"), d = document.documentElement;
    return p.scrollWidth <= p.clientWidth + 1 && d.scrollWidth <= d.clientWidth + 1 && [...document.querySelectorAll("#stage .gopt")].every(b => { const r = b.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth + 0.5; }); });

  await boot(LES, "en"); await page.evaluate(() => window.__slidStart("fbl1"));
  // 1) банк: усі плитки й пастка рівно раз, рядок порожній, «Перевірити» неактивна, у тексті екрана lang=en
  let b = await bank();
  ok(same(b.map(x => x[0]).sort(), [0, 1, 2, 3, 4]) && b.every(([k, t]) => t === ["does", "she", "Where", "live", "do"][k]) && b.every(x => x[2] === "false"), `build: банк — усі tiles і extra, aria-pressed false, а ${JSON.stringify(b)}`);
  ok(!(await page.evaluate(() => SLID_LANG.check(SLID_SUBJECTS.find(c => c.id === "ukr").sections[0].lessons[0].screens[0], [...document.querySelectorAll("#stage .bank .bt")].map(b => +b.dataset.t).filter(k => k < 4), ""))), "build: плитки показано не в правильному порядку");
  ok(same(await line(), []) && await page.locator("#action").isDisabled(), "build: рядок порожній, «Перевірити» неактивна");
  ok(await page.evaluate(() => document.querySelector("#stage .bank").closest("[lang]")?.getAttribute("lang") === "en" && document.querySelector("#stage .fix").getAttribute("lang") === "uk"), "build: плитки — зміст (lang=en), інструкція — хром (uk)");
  ok(await page.evaluate(() => [...document.querySelectorAll("#stage .bank .bt")].every(b => { const r = b.getBoundingClientRect(); return r.height >= 44 && r.width >= 44; })), "build: плитка ≥ 44 × 44 px");
  // 2) дотик: у рядок; ще раз у банку — назад; дотик у рядку — прибрати
  await page.tap(tile(3)); await page.tap(tile(2));
  ok(same(await line(), ["live", "Where"]) && await page.getAttribute(tile(3), "aria-pressed") === "true" && await page.locator("#action").isEnabled(), "build: дотик — плитка в рядку, aria-pressed true, «Перевірити» активна");
  await page.tap(tile(3)); ok(same(await line(), ["Where"]) && await page.getAttribute(tile(3), "aria-pressed") === "false", "build: дотик по плитці банку ще раз — прибрано");
  await page.tap("#bline .bl >> nth=0"); ok(same(await line(), []) && await page.locator("#action").isDisabled(), "build: дотик по плитці рядка — прибрано, «Перевірити» неактивна");
  // 3) клавіатура: Enter на плитці банку; прибрана з рядка плитка повертає фокус у банк
  await page.focus(tile(2)); await page.keyboard.press("Enter"); await page.focus(tile(1)); await page.keyboard.press("Enter");
  ok(same(await line(), ["Where", "she"]), `build: Enter на плитці — у рядок (${JSON.stringify(await line())})`);
  await page.focus("#bline .bl >> nth=1"); await page.keyboard.press("Enter");
  ok(same(await line(), ["Where"]) && await page.evaluate(() => document.activeElement?.dataset?.t) === "1", "build: Enter на плитці рядка — прибрано, фокус на ту саму плитку банку");
  // 4) хибний порядок: позначки по місцях, «неправильно» для диктора, повідомлення; та сама відповідь — кнопка неактивна
  for (const k of [1, 0, 3]) await page.tap(tile(k));
  ok(await noScroll(), "build: 360 px — без горизонтальної прокрутки, плитки в межах екрана");
  await page.click("#action"); let d = await dock();
  const marks = await page.evaluate(() => [...document.querySelectorAll("#bline .bl")].map(b => [b.textContent, b.classList.contains("is-ok") ? 1 : b.classList.contains("is-bad") ? 0 : null, b.getAttribute("aria-label")]));
  ok(/\bbad\b/.test(d.kind) && /не на своїх місцях/.test(d.text), `build: хибний порядок — повідомлення, а ${JSON.stringify(d)}`);
  ok(same(marks.map(m => m.slice(0, 2)), [["Where", 1], ["she", 0], ["does", 0], ["live", 1]]) && marks.every(m => /— (не)?правильно$/.test(m[2])), `build: позначки по місцях з aria-label, а ${JSON.stringify(marks)}`);
  ok(await page.getAttribute("#bline", "aria-label") === "Речення — неправильно", "build: рядок — «Речення — неправильно»");
  ok(await page.locator("#action").isDisabled(), "build: без змін — «Спробувати ще раз» неактивна");
  // та сама відповідь з іншої плитки — ні; прибрати й повернути ту саму — теж та сама (кнопка неактивна)
  await page.tap("#bline .bl >> nth=3"); await page.tap(tile(3)); ok(await page.locator("#action").isDisabled(), "build: те саме речення ще раз — спробу не витрачено");
  // 5) друга спроба — неповне речення: «бракує слів»; показ відповіді
  await page.tap("#bline .bl >> nth=3");
  await page.tap("#bline .bl >> nth=2"); await page.tap("#bline .bl >> nth=1"); for (const k of [0, 1]) await page.tap(tile(k));
  ok(same(await line(), ["Where", "does", "she"]), "build: «Where does she» у рядку");
  await page.click("#action"); d = await dock();
  ok(/\bbad\b/.test(d.kind) && /Ось правильна відповідь/.test(d.title), `build: друга хибна спроба — показ відповіді, а ${JSON.stringify(d)}`);
  ok(/Правильно:\s*Where does she live\?/.test(await page.locator("#hintHost").innerText()), "build: підказка з правильним реченням");
  ok(await page.locator("#stage .bank .bt:not([disabled])").count() === 0 && await page.locator("#bline .bl:not([disabled])").count() === 0, "build: після відповіді плитки заблоковано");
  // 6) кілька правильних порядків: «Usually I walk…» і «I usually walk…»
  await page.click("#action");
  for (const k of [0, 1, 2, 3]) await page.tap(tile(k));
  await page.click("#action"); d = await dock();
  ok(/\bok\b/.test(d.kind), `build: «usually I walk to school» (перша літера — поза плитками) — правильно, а ${JSON.stringify(d)}`);
  ok(await page.evaluate(() => [...document.querySelectorAll("#bline .bl")].every(b => b.classList.contains("is-ok"))), "build: правильне речення — усі плитки зелені");
  await page.click("#action");
  for (const k of [1, 0, 2, 3]) await page.tap(tile(k));
  await page.click("#action"); ok(/\bok\b/.test((await dock()).kind), "build: другий порядок — правильно");
  // 7) журнал: raw — зібране речення
  const ev = await page.evaluate(async () => { if (!window.SLID_EVIDENCE) return null; await SLID_EVIDENCE.flush?.();
    return (await SLID_EVIDENCE.export()).events.filter(e => e.type === "answer" && e.d.l === "fbl1").map(e => [e.d.i, e.d.type, e.d.try, e.d.verdict, e.d.raw, e.d.ans]); });
  ok(same(ev, [[0, "build", 1, "bad", "Where she does live", "Where does she live?"], [0, "build", 2, "bad", "Where does she", "Where does she live?"],
    [1, "build", 1, "ok", "usually I walk to school", "I usually walk to school."], [2, "build", 1, "ok", "I usually walk to school", "I usually walk to school."]]), `build: журнал — raw зібране речення, ans — перший answer, а ${JSON.stringify(ev)}`);

  // 8) тест рівня: без позначок і показу відповіді; вердикт LANG.check
  await boot(LES, "en", DIAG); await page.evaluate(() => document.querySelector('.tab[data-tab="path"]').click());
  await page.click('button[data-subject="ukr"]'); { const dg = page.locator("[data-diag]"); if (await dg.count()) await dg.first().click(); else await page.click('[data-plan="ukr"]'); }
  await page.click("[data-diag-go]");
  for (const k of [2, 0, 1, 3]) await page.tap(tile(k)); await page.click("#action");
  ok(await page.evaluate(() => !document.querySelector("#stage .is-ok, #stage .is-bad")), "build у тесті рівня: без позначок");
  for (const k of [1, 2, 0, 3]) await page.tap(tile(k)); await page.click("#action");
  const rec = await page.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")).diag?.dgfb);
  ok(rec && same(rec.res, { 0: 1, 1: 0 }), `build у тесті рівня: OK і BAD, а ${JSON.stringify(rec && rec.res)}`);

  // 9) без targetLang: українське речення, точне порівняння
  await boot(UKR, null); await page.evaluate(() => window.__slidStart("fbl1"));
  ok(await page.evaluate(() => !document.querySelector("#player [lang]")), "build без targetLang: жодного lang у плеєрі");
  for (const k of [1, 0, 2]) await page.tap(tile(k)); await page.click("#action");
  ok(/\bok\b/.test((await dock()).kind), "build без targetLang: «Сонце яскраво світить» (ключ з крапкою) — правильно");
  ok(!errors.length, "build: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
}
