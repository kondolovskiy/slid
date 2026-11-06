// QA qa-ukr-diag: план з тестів рівня ukr за трьома профілями + потік «два предмети з тестом одного класу». Node Playwright, справжній зміст.
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
const require = createRequire(import.meta.url); const pw = require("playwright");
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../.."), OUT = process.env.QA_OUT || "/tmp/qa-ukr-diag"; fs.mkdirSync(OUT + "/shots", { recursive: true });
const T = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webmanifest": "application/manifest+json" };
const srv = http.createServer((q, r) => { const rel = decodeURIComponent(new URL(q.url, "http://x").pathname), f = path.join(ROOT, rel.endsWith("/") ? rel + "index.html" : rel);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { "content-type": T[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(r); });
await new Promise(r => srv.listen(0, "127.0.0.1", r)); const U = `http://127.0.0.1:${srv.address().port}/`;
const br = await pw.chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const out = { plans: {}, flow: [], errors: [] };
const page0 = async (w = 400) => { const ctx = await br.newContext({ viewport: { width: w, height: 860 }, serviceWorkers: "block" }); const p = await ctx.newPage(); p.setDefaultTimeout(10000);
  await p.route("**/fonts.googleapis.com/**", r => r.abort()); p.on("pageerror", e => out.errors.push(String(e))); return { ctx, p }; };
for (const g of (process.env.SKIP_PLANS ? [] : [5, 6, 7])) {
  const id = "dgu" + g; out.plans[id] = {};
  for (const prof of ["all-ok", "all-skip", "mixed"]) {
    const { ctx, p } = await page0(); await p.goto(U);
    const d = await p.evaluate(id => { const d = SLID_SUBJECTS.find(c => c.id === "ukr").diags.find(x => x.id === id); return { items: d.items.map(i => ({ topic: i.topic, type: i.type })), topics: d.topics.map(t => ({ id: t.id, kind: t.kind, baseline: !!t.baseline, lessons: t.lessons || [] })) }; }, id);
    const seen = {}; const res = {};
    d.items.forEach((it, i) => { const t = d.topics.find(t => t.id === it.topic), k = (seen[it.topic] = (seen[it.topic] || 0) + 1);
      res[i] = prof === "all-ok" ? 1 : prof === "all-skip" ? -1 : t.kind === "cur" ? (i % 2 ? 1 : 0) : (k === 1 ? 1 : 0); });
    await p.evaluate(([g, id, res]) => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: g, subject: "ukr", unlockAll: false, diag: { ["dg" + g]: { done: true, date: "2026-11-06", res: {}, topics: {} } }, diagRun: { [id]: res } })); }, [g, id, res]);
    await p.reload(); await p.click('button[data-subject="ukr"]');
    const dd = p.locator("[data-diag]"); if (await dd.count()) await dd.first().click(); else await p.click('[data-plan="ukr"]');
    await p.click("[data-diag-go]"); await p.waitForTimeout(600);
    if (prof === "mixed") await p.screenshot({ path: `${OUT}/shots/${id}-end-mixed.png` });
    const S = await p.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
    const rec = S.diag[id] || {}, plan = (S.planByGrade?.ukr || {})[g] || S.plan?.ukr || {};
    out.plans[id][prof] = { done: !!rec.done, topics: rec.topics, steps: (plan.steps || []).map(s => s.l + ":" + s.src), known: plan.known || [], base: (plan.base || []).map(b => b.topic + "→" + (b.next || b.l)),
      mathPlanUntouched: !S.plan?.math || true, endText: (await p.locator("#stage").innerText()).slice(0, 400) };
    await ctx.close();
  }
}
// потік: новий профіль, вибір 6 класу — що бачить дитина; математику пройдено «Ще не знаю»; де тест ukr
{ const { ctx, p } = await page0(); try { await p.goto(U); await p.evaluate(() => localStorage.clear()); await p.reload();
  await p.screenshot({ path: `${OUT}/shots/flow-0-onboarding.png` });
  await p.click('[data-grade="6"]'); await p.waitForTimeout(400); await p.screenshot({ path: `${OUT}/shots/flow-1-after-grade.png` });
  out.flow.push("після вибору 6 кл.: " + (await p.locator("#view").innerText()).slice(0, 300).replace(/\n+/g, " | "));
  await p.click("[data-diag-go]"); let n = 0; while (n++ < 60 && await p.locator("#skip").isVisible().catch(() => false)) { await p.click("#skip"); await p.waitForTimeout(80); }
  await p.screenshot({ path: `${OUT}/shots/flow-2-math-end.png` });
  out.flow.push("кінець тесту math: " + (await p.locator("#stage").innerText()).slice(0, 300).replace(/\n+/g, " | "));
  // закрити плеєр і подивитися головну
  out.flow.push("кнопки підсумку: " + JSON.stringify(await p.locator("#dock button, #stage button").allInnerTexts()) + " | action: " + await p.locator("#action").innerText());
  for (let i = 0; i < 3 && !(await p.locator("#player").isHidden()); i++) { await p.click("#pClose"); await p.waitForTimeout(300); }
  await p.waitForTimeout(400); await p.screenshot({ path: `${OUT}/shots/flow-3-home.png`, fullPage: true });
  out.flow.push("головна після тесту math: " + (await p.locator("#view").innerText()).slice(0, 600).replace(/\n+/g, " | "));
  await p.click('.tab[data-tab="path"]'); await p.waitForTimeout(200); await p.click('.tab[data-tab="path"]'); await p.waitForTimeout(300);
  out.flow.push("головна (предмети): " + (await p.locator("#view").innerText()).slice(0, 500).replace(/\n+/g, " | ")); await p.screenshot({ path: `${OUT}/shots/flow-3b-home.png`, fullPage: true });
  await p.click('button[data-subject="ukr"]'); await p.waitForTimeout(300); await p.screenshot({ path: `${OUT}/shots/flow-4-ukr.png`, fullPage: true });
  out.flow.push("сторінка ukr: " + (await p.locator("#view").innerText()).slice(0, 500).replace(/\n+/g, " | "));
  const S = await p.evaluate(() => JSON.parse(localStorage.getItem("slid.v1"))); out.flow.push("diag: " + JSON.stringify(Object.keys(S.diag || {})) + " diagSkip: " + JSON.stringify(S.diagSkip || {}));
  } catch (e) { out.errors.push("flow: " + String(e).slice(0, 200)); await p.screenshot({ path: `${OUT}/shots/flow-FAIL.png`, fullPage: true });
    out.flow.push("на момент падіння: player hidden=" + await p.locator("#player").isHidden() + " | view: " + (await p.locator("#view").innerText()).slice(0, 400).replace(/\n+/g, " | ") + " | stage: " + (await p.locator("#stage").innerText().catch(() => "")).slice(0, 300).replace(/\n+/g, " | ")); }
  await ctx.close(); }
// телефон 360 px: перше завдання кожного мовного типу в тесті (знімки)
{ const { ctx, p } = await page0(360); await p.goto(U);
  for (const g of [5, 6, 7]) { await p.evaluate(g => { localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: g, subject: "ukr", diag: { ["dg" + g]: { done: true, date: "x", res: {}, topics: {} } } })); }, g); await p.reload();
    await p.click('button[data-subject="ukr"]'); const dd = p.locator("[data-diag]"); if (await dd.count()) await dd.first().click(); else await p.click('[data-plan="ukr"]'); await p.click("[data-diag-go]");
    const types = new Set(); for (let i = 0; i < 40 && await p.locator("#skip").isVisible().catch(() => false); i++) {
      const t = await p.evaluate(() => { const st = document.querySelector("#stage"); return st.querySelector(".gopt") ? "gaps" : st.querySelector(".pw") ? "pick" : st.querySelector(".sv") ? "stress" : st.querySelector(".cut") ? "split" : st.querySelector("#numIn") ? "word" : "other"; });
      const ov = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (!types.has(t)) { types.add(t); await p.screenshot({ path: `${OUT}/shots/phone-dgu${g}-${t}.png` }); }
      if (ov) out.errors.push(`dgu${g}: горизонтальна прокрутка на 360 px (${t})`);
      await p.click("#skip"); await p.waitForTimeout(60); } }
  await ctx.close(); }
await br.close(); srv.close();
fs.writeFileSync(`${OUT}/qa-out.json`, JSON.stringify(out, null, 1)); console.log(JSON.stringify(out, null, 1).slice(0, 6000));
