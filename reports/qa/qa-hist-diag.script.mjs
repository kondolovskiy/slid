import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
const require = createRequire(import.meta.url); const pw = require("playwright");
const ROOT = process.env.QA_ROOT, OUT = process.env.QA_OUT; fs.mkdirSync(OUT + "/shots", { recursive: true });
const T = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webmanifest": "application/manifest+json" };
const srv = http.createServer((q, r) => { const rel = decodeURIComponent(new URL(q.url, "http://x").pathname), f = path.join(ROOT, rel.endsWith("/") ? rel + "index.html" : rel);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { "content-type": T[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(r); });
await new Promise(r => srv.listen(0, "127.0.0.1", r)); const U = `http://127.0.0.1:${srv.address().port}/`;
const br = await pw.chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const out = { plans: {}, flow: [], errors: [], imgs: [] };
const page0 = async (w = 400) => { const ctx = await br.newContext({ viewport: { width: w, height: 860 }, serviceWorkers: "block" }); const p = await ctx.newPage(); p.setDefaultTimeout(10000);
  await p.route("**/fonts.googleapis.com/**", r => r.abort()); p.on("pageerror", e => out.errors.push(String(e))); return { ctx, p }; };
const TESTS = [["hist", 5], ["hist", 6], ["hist", 7], ["hist", 8], ["hist", 9], ["hist", 10], ["hist", 11], ["world", 7], ["world", 8], ["world", 9]];
for (const [subj, g] of TESTS) {
  const id = (subj === "hist" ? "dgh" : "dgw") + g; out.plans[id] = {};
  for (const prof of ["all-ok", "all-skip", "mixed"]) {
    const { ctx, p } = await page0(); try { await p.goto(U);
    const d = await p.evaluate(([s, id]) => { const d = SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.id === id); return { items: d.items.map(i => ({ topic: i.topic })), topics: d.topics.map(t => ({ id: t.id, kind: t.kind })) }; }, [subj, id]);
    const seen = {}, res = {};
    d.items.forEach((it, i) => { const t = d.topics.find(t => t.id === it.topic), k = (seen[it.topic] = (seen[it.topic] || 0) + 1);
      res[i] = prof === "all-ok" ? 1 : prof === "all-skip" ? -1 : t.kind === "cur" ? (i % 2 ? 1 : 0) : (k === 1 ? 1 : 0); });
    // інші тести цього класу вже пройдено — щоб на сторінці предмета був саме цей тест
    await p.evaluate(([s, g, id, res]) => { const done = {}; for (const c of SLID_SUBJECTS) for (const x of c.diags || []) if (x.grade === g && x.id !== id) done[x.id] = { done: true, date: "2026-11-06", res: {}, topics: {} };
      localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: g, subject: s, unlockAll: false, diag: done, diagRun: { [id]: res } })); }, [subj, g, id, res]);
    await p.reload(); await p.click(`button[data-subject="${subj}"]`);
    const dd = p.locator("[data-diag]"); if (await dd.count()) await dd.first().click(); else await p.click(`[data-plan="${subj}"]`);
    await p.click("[data-diag-go]"); await p.waitForTimeout(600);
    if (prof === "mixed") await p.screenshot({ path: `${OUT}/shots/${id}-end-mixed.png` });
    const S = await p.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
    const rec = S.diag[id] || {}, plan = (S.planByGrade?.[subj] || {})[g] || S.plan?.[subj] || {};
    out.plans[id][prof] = { done: !!rec.done, steps: (plan.steps || []).length, known: (plan.known || []).length, base: (plan.base || []).length };
    } catch (e) { out.errors.push(`${id} ${prof}: ${String(e).slice(0, 160)}`); } await ctx.close();
  }
}
// 7 клас, новий профіль: скільки карток «Тест рівня» на головній (math, ukr, hist, world)
{ const { ctx, p } = await page0(); try { await p.goto(U); await p.evaluate(() => localStorage.clear()); await p.reload();
  await p.click('[data-grade="7"]'); await p.waitForTimeout(300); out.flow.push("після вибору 7 кл.: " + (await p.locator("#view").innerText()).slice(0, 160).replace(/\n+/g, " | "));
  await p.click('.tab[data-tab="path"]'); await p.waitForTimeout(200); await p.click('.tab[data-tab="path"]'); await p.waitForTimeout(300);
  const home = (await p.locator("#view").innerText()).replace(/\n+/g, " | "); out.flow.push("головна 7 кл. (до тестів): " + home.slice(0, 900));
  out.flow.push("карток «ТЕСТ РІВНЯ» на головній: " + (home.match(/ТЕСТ РІВНЯ/gi) || []).length);
  await p.screenshot({ path: `${OUT}/shots/home-g7.png`, fullPage: true });
} catch (e) { out.errors.push("flow: " + String(e).slice(0, 160)); } await ctx.close(); }
// зображення в завданнях тестів: файл існує і має cap
for (const [subj, g] of TESTS) { const { ctx, p } = await page0(); await p.goto(U);
  const im = await p.evaluate(([s, g]) => { const d = SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.grade === g); return d.items.map((it, i) => it.img ? { i, img: it.img, cap: !!it.cap } : null).filter(Boolean); }, [subj, g]);
  for (const x of im) out.imgs.push({ test: subj + g, ...x, exists: fs.existsSync(path.join(ROOT, x.img)) }); await ctx.close(); }
// телефон 360: горизонтальна прокрутка в кожному завданні
{ const { ctx, p } = await page0(360); await p.goto(U);
  for (const [subj, g] of TESTS) { const id = (subj === "hist" ? "dgh" : "dgw") + g;
    await p.evaluate(([s, g, id]) => { const done = {}; for (const c of SLID_SUBJECTS) for (const x of c.diags || []) if (x.grade === g && x.id !== id) done[x.id] = { done: true, date: "x", res: {}, topics: {} }; localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: g, subject: s, diag: done })); }, [subj, g, id]); await p.reload();
    await p.click(`button[data-subject="${subj}"]`); const dd = p.locator("[data-diag]"); if (await dd.count()) await dd.first().click(); else await p.click(`[data-plan="${subj}"]`); await p.click("[data-diag-go]");
    let n = 0; for (let i = 0; i < 40 && await p.locator("#skip").isVisible().catch(() => false); i++) { n++;
      if (await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) out.errors.push(`${id}: горизонтальна прокрутка на 360 px, завдання ${i + 1}`);
      if (i === 0) await p.screenshot({ path: `${OUT}/shots/phone-${id}-1.png` }); await p.click("#skip"); await p.waitForTimeout(50); }
    out.flow.push(`${id}: на 360 px показано ${n} завдань («Ще не знаю» на всі — складніші пропускаються)`); } await ctx.close(); }
await br.close(); srv.close(); fs.writeFileSync(`${OUT}/qa-out.json`, JSON.stringify(out, null, 1));
for (const [k, v] of Object.entries(out.plans)) console.log(k, JSON.stringify(v)); console.log("FLOW"); out.flow.forEach(f => console.log(" -", f.slice(0, 600))); console.log("IMGS", JSON.stringify(out.imgs)); console.log("ERR", JSON.stringify(out.errors));
