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
//  5–7) Service worker (engine-sw-version-skew): деплой нової версії не змішує index.html і app.js; оновлення не перезавантажує
//     сторінку посеред уроку; застосунок зі старим SW після одного змішаного відкриття сам переходить на консистентну нову версію.
// Запуск: node tools/test-ui.mjs [--browser /opt/pw-browsers/chromium]
// Playwright: require("playwright") (NODE_PATH) або PLAYWRIGHT_MODULE / /opt/node-tools/node_modules/playwright.
// Браузер, як у test-answer-ui.py: --browser / SLID_BROWSER → /opt/pw-browsers/chromium, якщо є (PW_DEFAULT=1 вимикає) → Chromium самого
// Playwright (PLAYWRIGHT_BROWSERS_PATH, типово ~/.cache/ms-playwright — так у CI, job browser у pages.yml).
import http from "node:http"; import crypto from "node:crypto"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
import { ROOT } from "./lib.mjs";

const args = process.argv.slice(2), opt = (k, d) => args.includes(k) ? args[args.indexOf(k) + 1] : d;
const require = createRequire(import.meta.url);
let pw;
for (const m of [process.env.PLAYWRIGHT_MODULE, "playwright", "/opt/node-tools/node_modules/playwright"].filter(Boolean)) { try { pw = require(m); break; } catch {} }
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
  await page.click("#pClose"); await page.click("#pClose");
  ok(await until(async () => same(last(loads), ["C", "C"])), `SW: після закриття уроку — нова версія [C, C], завантаження ${JSON.stringify(loads)}`);
  ok(loads.every(([p, e]) => p === e), `SW: урок — жодного змішаного завантаження, а ${JSON.stringify(loads)}`);
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

  // 5–7) Оновлення service worker без змішування версій (engine-sw-version-skew; docs/PUBLISHING.md «Оновлення PWA»)
  await swScenarios(browser);
} finally { await browser.close(); server.close(); swServer.close(); }

console.log(`test-ui: ${pass} ok, ${fail} ✗`);
process.exit(fail || !pass ? 1 : 0);   // 0 перевірок — не успіх
