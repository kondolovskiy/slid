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
//     продовження після перезавантаження, підсумок тем.
//  5–7) Service worker (engine-sw-version-skew): деплой нової версії не змішує index.html і app.js; файл зі старого кешу не віддається
//     (P3-6); оновлення не перезавантажує сторінку посеред уроку, а версія подій журналу лишається версією сторінки (P3-4); застосунок зі старим SW після одного змішаного відкриття сам переходить на консистентну нову версію.
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
    await page.goto(URL0); await page.evaluate(s => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify(s)); }, state); await page.reload();
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
  await B.page.click("#demo");   // save() → у чергу
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
  for (const d of [A, B, C]) { ok(!d.errors.length, "sync: помилки сторінки: " + d.errors.join(" | ")); await d.ctx.close(); }
  // без адреси API — картки немає, мережевих запитів до API немає
  const ctx = await browser.newContext({ serviceWorkers: "block" }), p0 = await ctx.newPage(); await p0.route("**/fonts.googleapis.com/**", r => r.abort());
  await p0.goto(URL0); await p0.evaluate(s => localStorage.setItem("slid.v1", JSON.stringify(s)), base); await p0.reload(); await p0.click('.tab[data-tab="profile"]');
  ok(await p0.locator("#syncCard").count() === 0, "sync: без адреси API (типовий config.js) картки немає");
  await ctx.close(); api.close();
}


/* 10) Мовні вправи в тесті рівня (engine-diag-lang-types): фікстура предмета ukr (розділи 5 і 6 кл., тест dgfu6) замість живого змісту.
   gaps, pick, stress, word, split у тесті — без позначок і показу відповіді, вердикт одразу (OK / BAD / «Ще не знаю»), продовження після
   перезавантаження, підсумок тем. */
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
  ok(!errors.length, "diag ukr: помилки сторінки: " + errors.join(" | "));
  await ctx.close();
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

  // 9) Синхронізація прогресу між пристроями (engine-sync-login)
  await syncScenarios(browser);

  // 10) Мовні вправи в тесті рівня (engine-diag-lang-types)
  await diagLangScenario(browser);

  // 5–7) Оновлення service worker без змішування версій (engine-sw-version-skew; docs/PUBLISHING.md «Оновлення PWA»)
  await swScenarios(browser);
} finally { await browser.close(); server.close(); swServer.close(); }

console.log(`test-ui: ${pass} ok, ${fail} ✗`);
process.exit(fail || !pass ? 1 : 0);   // 0 перевірок — не успіх
