#!/usr/bin/env node
// Слід · браузерні сценарії рушія на Node + Playwright (не Python: модуль playwright для Python є не скрізь). Почався як test-ui-ister.mjs
// (рев'ю math-ister-migration P3-1, P3-3, P3-8; задача tools-ister-p3); перейменовано за темою (tools-math-ister-p3, рев'ю tools-ister-p3 P3-4) —
// сюди додавай нові швидкі UI-сценарії рушія. Не входить у npm run check і CI — як tools/test-answer-ui.py; запускати окремо й по одному.
// Зміст — синтетична фікстура: після завантаження сторінки розділи, пули й тести математики підміняються (як pool_checks у
// test-answer-ui.py), тож від живого content/ сценарій не залежить.
//  1) «Тренування» з also: заголовки розділів — за програмою (клас, тижні), а не за порядком пулів; розділ один раз, хоч на нього
//     посилаються два пули; порожній розділ і розділ старшого класу не показано; лічильник задач — з усіх пулів.
//  2) Замок уроку: пройдений урок не замикається, коли перед ним вставлено новий (app.js unlocked → learn.js lessonOpen).
//  3) Замок уроку, інші гілки unlocked (рев'ю tools-ister-p3 P3-1): unlockAll відкриває все; урок із plan.known (тест рівня: тема
//     «знайоме») відкритий сам і відкриває наступний; known плану іншого класу — ні.
// Запуск: node tools/test-ui.mjs [--browser /opt/pw-browsers/chromium]
// Playwright: require("playwright") (NODE_PATH) або PLAYWRIGHT_MODULE / /opt/node-tools/node_modules/playwright.
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
import { ROOT } from "./lib.mjs";

const args = process.argv.slice(2), opt = (k, d) => args.includes(k) ? args[args.indexOf(k) + 1] : d;
const require = createRequire(import.meta.url);
let pw;
for (const m of ["playwright", process.env.PLAYWRIGHT_MODULE, "/opt/node-tools/node_modules/playwright"].filter(Boolean)) { try { pw = require(m); break; } catch {} }
if (!pw) { console.error("Немає Node-модуля playwright: задай NODE_PATH або PLAYWRIGHT_MODULE"); process.exit(2); }
const BROWSER = opt("--browser", fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined);

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

const browser = await pw.chromium.launch(BROWSER ? { executablePath: BROWSER } : {});
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
  ok(!errors.length, "помилки сторінки: " + errors.join(" | "));
  await ctx.close();
} finally { await browser.close(); server.close(); }

console.log(`test-ui: ${pass} ok, ${fail} ✗`);
process.exit(fail ? 1 : 0);
