// QA qa-diag-ukr-world-new (2026-11-12): dgu9–dgu11, dgw10–dgw11 у справжньому застосунку, 375 px. Запуск: NODE_PATH=<node_modules з playwright> node reports/qa/qa-diag-ukr-world-new.script.mjs [ONLY=dgu9,…]
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
const require = createRequire(import.meta.url); const pw = require("playwright");
const ROOT = process.env.QA_ROOT || path.resolve(path.dirname(new URL(import.meta.url).pathname), "../.."), OUT = process.env.QA_OUT || "/tmp/qa-diag-ukr-world-new"; fs.mkdirSync(OUT + "/shots", { recursive: true });
const T = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webmanifest": "application/manifest+json" };
const srv = http.createServer((q, r) => { const rel = decodeURIComponent(new URL(q.url, "http://x").pathname), f = path.join(ROOT, rel.endsWith("/") ? rel + "index.html" : rel);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { "content-type": T[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(r); });
await new Promise(r => srv.listen(0, "127.0.0.1", r)); const U = `http://127.0.0.1:${srv.address().port}/`;
const br = await pw.chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const W = 375, out = {};
const TESTS = (process.env.ONLY ? process.env.ONLY.split(",") : ["dgu9", "dgu10", "dgu11", "dgw10", "dgw11"]).map(id => [id, id.startsWith("dgu") ? "ukr" : "world", +id.replace(/\D/g, "")]);
const page0 = async (R) => { const ctx = await br.newContext({ viewport: { width: W, height: 812 }, serviceWorkers: "block" }); const p = await ctx.newPage(); p.setDefaultTimeout(8000);
  await p.route("**/fonts.googleapis.com/**", r => r.abort());
  p.on("pageerror", e => R.errors.push("pageerror: " + String(e).slice(0, 200)));
  p.on("console", m => { if (m.type() === "error" && !/fonts\.googleapis|ERR_FAILED/.test(m.text())) R.errors.push("console: " + m.text().slice(0, 200)); });
  p.on("requestfailed", q => { if (!/fonts\.googleapis/.test(q.url())) R.errors.push("requestfailed: " + q.url()); });
  p.on("response", q => { if (q.status() >= 400) R.errors.push(`http ${q.status()}: ${q.url()}`); });
  await p.goto(U); return { ctx, p }; };
const seed = (p, subj, g, id, extra = {}) => p.evaluate(([s, g, id, extra]) => { const done = {};
  if (!extra.noOthers) for (const c of SLID_SUBJECTS) for (const x of c.diags || []) if (x.grade === g && x.id !== id) done[x.id] = { done: true, date: "2026-11-12", res: {}, topics: {} };
  localStorage.clear(); localStorage.setItem("slid.v1", JSON.stringify({ grade: g, subject: s, unlockAll: false, diag: done })); }, [subj, g, id, extra]);
const openFromSubject = async (p, subj) => { await p.click(`button[data-subject="${subj}"]`); const dd = p.locator("[data-diag]"); if (await dd.count()) await dd.first().click(); else await p.click(`[data-plan="${subj}"]`); };
const S = p => p.evaluate(() => JSON.parse(localStorage.getItem("slid.v1")));
// поточне завдання — як рахує рушій: LEARN.nextItem(d, S.diagRun[id])
const cur = (p, subj, id) => p.evaluate(([s, id]) => { const d = SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.id === id); const st = JSON.parse(localStorage.getItem("slid.v1"));
  return SLID_LEARN.nextItem(d, (st.diagRun || {})[id] || {}); }, [subj, id]);
const overflow = p => p.evaluate(() => { const iw = window.innerWidth, bad = [];
  if (document.documentElement.scrollWidth > iw + 1) bad.push("documentElement.scrollWidth=" + document.documentElement.scrollWidth);
  for (const el of document.querySelectorAll("#player *")) { if (!el.getClientRects().length) continue; const r = el.getBoundingClientRect(); if (r.width && (r.right > iw + 1 || r.left < -1)) bad.push(`${el.tagName}.${el.className}`.slice(0, 40) + ` right=${Math.round(r.right)}`); }
  for (const el of document.querySelectorAll("#stage .ltext, #stage .opts, #stage .sort, #stage .stress")) if (el.scrollWidth > el.clientWidth + 1) bad.push("scroll " + el.className);
  return bad.slice(0, 5); });
const words = p => p.evaluate(() => (document.querySelector("#stage")?.innerText || "").split(/\s+/).filter(w => /[\p{L}\d]/u.test(w)).length);
// правильна відповідь через UI (кліки, як дитина)
async function answerRight(p, subj, i) {
  const it = await p.evaluate(([s, id, i]) => { const d = SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.id === id), it = d.items[i];
    const L = SLID_LANG; let sol = null;
    if (it.type === "gaps") sol = L.parseGaps(it.text).gaps.map(g => g.correct);
    if (it.type === "pick") sol = L.parsePick(it.text).correct;
    if (it.type === "stress") sol = it.words.map(w => L.parseStress(w).correct);
    return { type: it.type, correct: it.correct, items: it.items, sol }; }, [subj, globalThis.__id, i]);
  const c = async sel => { await p.locator(sel).first().click(); };
  switch (it.type) {
    case "choice": await c(`#stage .opt[data-k="${it.correct}"]`); break;
    case "multi": for (const k of it.correct) await c(`#stage .opt[data-k="${k}"]`); break;
    case "sort": for (let k = 0; k < it.items.length; k++) await c(`#stage button[data-r="${k}"][data-b="${it.items[k][1]}"]`); break;
    case "order": for (let k = 0; k < it.items.length; k++) await c(`#ord .opt[data-k="${k}"]`); break;
    case "gaps": for (let n = 0; n < it.sol.length; n++) await c(`#stage .gopt[data-g="${n}"][data-o="${it.sol[n]}"]`); break;
    case "pick": for (const n of it.sol) await c(`#stage .pw[data-w="${n}"]`); break;
    case "stress": for (let k = 0; k < it.sol.length; k++) await c(`#stage .sv[data-w="${k}"][data-i="${it.sol[k]}"]`); break;
    default: throw new Error("тип без автовідповіді: " + it.type);
  }
  await p.click("#action");
}
async function runAll(p, subj, id, mode, R, shotPrefix) {
  let n = 0, wsum = 0; const types = {}, seenTypes = new Set();
  for (let guard = 0; guard < 60; guard++) {
    if ((await S(p)).diag?.[id]?.done) break; const i = await cur(p, subj, id); if (i < 0) break;
    await p.waitForSelector("#stage .eyebrow"); const eb = await p.locator("#stage .eyebrow").first().innerText();
    const answered = Object.keys(((await S(p)).diagRun || {})[id] || {}).length;
    if (!new RegExp("завдання " + (answered + 1) + "\\b", "i").test(eb)) R.issues.push(`${mode}: eyebrow «${eb}» при ${answered} відповідях`);
    const ov = await overflow(p); if (ov.length) R.overflow.push({ mode, item: i + 1, ov });
    const ty = await p.evaluate(([s, id, i]) => SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.id === id).items[i].type, [subj, id, i]);
    types[ty] = (types[ty] || 0) + 1; wsum += await words(p); n++;
    if (shotPrefix && !seenTypes.has(ty)) { seenTypes.add(ty); await p.screenshot({ path: `${OUT}/shots/${shotPrefix}-${ty}.png` }); }
    if (await p.locator("#unsupported").count()) R.issues.push(`${mode}: завдання ${i + 1} — unsupported`);
    if (mode === "all-ok") await answerRight(p, subj, i); else await p.click("#skip");
    await p.waitForFunction(([id, a]) => Object.keys((JSON.parse(localStorage.getItem("slid.v1")).diagRun || {})[id] || {}).length > a || JSON.parse(localStorage.getItem("slid.v1")).diag?.[id]?.done, [id, answered]);
  }
  await p.waitForTimeout(400);
  return { shown: n, types, words: wsum };
}
for (const [id, subj, g] of TESTS) {
  globalThis.__id = id;
  const R = out[id] = { errors: [], issues: [], overflow: [] };
  const meta = await (async () => { const { ctx, p } = await page0(R); const m = await p.evaluate(([s, id]) => { const d = SLID_SUBJECTS.find(c => c.id === s).diags.find(x => x.id === id);
      const cur = d.topics.filter(t => t.kind === "cur"), pre = d.topics.filter(t => t.kind === "pre");
      return { items: d.items.length, status: d.status, cur: cur.map(t => ({ id: t.id, lessons: t.lessons })), pre: pre.map(t => ({ id: t.id, lessons: t.lessons || [], baseline: !!t.baseline })),
        types: d.items.reduce((a, it) => (a[it.type] = (a[it.type] || 0) + 1, a), {}) }; }, [subj, id]);
    m.introText = null; await ctx.close(); return m; })();
  R.meta = meta;
  // (а) усе правильно (через UI)
  { const { ctx, p } = await page0(R); try { await seed(p, subj, g, id); await p.reload(); await openFromSubject(p, subj);
      R.intro = (await p.locator("#view").innerText()).replace(/\n+/g, " | ").slice(0, 400); await p.screenshot({ path: `${OUT}/shots/${id}-intro.png` });
      await p.click("[data-diag-go]"); const t0 = Date.now(); const r = await runAll(p, subj, id, "all-ok", R, `${id}`); r.ms = Date.now() - t0;
      await p.screenshot({ path: `${OUT}/shots/${id}-end-allok.png`, fullPage: true });
      const st = await S(p), rec = st.diag[id] || {}, plan = (st.planByGrade?.[subj] || {})[g] || st.plan?.[subj] || {};
      const resVals = Object.values(rec.res || {});
      const curLessons = meta.cur.flatMap(t => t.lessons);
      R.allOk = { ...r, done: !!rec.done, allRes1: resVals.length === meta.items && resVals.every(v => v === 1), resCount: resVals.length,
        topics: rec.topics, curKnown: meta.cur.filter(t => rec.topics?.[t.id] === "known").length, curTotal: meta.cur.length,
        preOk: meta.pre.filter(t => rec.topics?.[t.id] === "ok").length, preTotal: meta.pre.length,
        steps: (plan.steps || []).length, known: plan.known || [], missingKnown: curLessons.filter(l => !(plan.known || []).includes(l)),
        endText: (await p.locator("#stage").innerText()).replace(/\n+/g, " | ").slice(0, 300), ov: await overflow(p) };
    } catch (e) { R.issues.push("all-ok: " + String(e).slice(0, 300)); await p.screenshot({ path: `${OUT}/shots/${id}-FAIL-allok.png` }); } await ctx.close(); }
  // (б) усе «Ще не знаю»
  { const { ctx, p } = await page0(R); try { await seed(p, subj, g, id); await p.reload(); await openFromSubject(p, subj); await p.click("[data-diag-go]");
      const r = await runAll(p, subj, id, "all-skip", R, null);
      await p.screenshot({ path: `${OUT}/shots/${id}-end-allskip.png`, fullPage: true });
      const st = await S(p), rec = st.diag[id] || {}, plan = (st.planByGrade?.[subj] || {})[g] || st.plan?.[subj] || {};
      const steps = (plan.steps || []).map(s => s.l), preLessons = [...new Set(meta.pre.flatMap(t => t.lessons))];
      R.allSkip = { ...r, done: !!rec.done, gaps: meta.pre.filter(t => rec.topics?.[t.id] === "gap").length, preTotal: meta.pre.length, known: (plan.known || []).length, base: (plan.base || []).length,
        steps: steps.length, stepSrc: [...new Set((plan.steps || []).map(s => s.src + "/" + s.why))], preLessonsInPlan: preLessons.filter(l => steps.includes(l)).length, preLessons: preLessons.length,
        stepsNotPre: steps.filter(l => !preLessons.includes(l)), missingPre: preLessons.filter(l => !steps.includes(l)),
        stepGrades: await p.evaluate(ls => ls.map(l => { for (const c of SLID_SUBJECTS) for (const s of c.sections) if ((s.lessons || []).some(x => x.id === l)) return s.grade; return null; }), steps),
        endText: (await p.locator("#stage").innerText()).replace(/\n+/g, " | ").slice(0, 400), ov: await overflow(p) };
      // кнопка «Почати з першого кроку» відкриває урок
      const act = await p.locator("#action").innerText(); await p.click("#action"); await p.waitForTimeout(500);
      R.allSkip.action = act; R.allSkip.afterAction = (await p.locator("#stage .eyebrow").first().innerText().catch(() => "?")) + " / " + (await p.locator("#stage h1, #stage h2").first().innerText().catch(() => "?"));
    } catch (e) { R.issues.push("all-skip: " + String(e).slice(0, 300)); await p.screenshot({ path: `${OUT}/shots/${id}-FAIL-allskip.png` }); } await ctx.close(); }
  // (в) перерваний тест: нові дані, інші тести класу НЕ пройдено (D-052: перерваний тест — на головній замість запрошення math)
  { const { ctx, p } = await page0(R); try { await seed(p, subj, g, id, { noOthers: true }); await p.reload();
      await p.click('.tab[data-tab="path"]').catch(() => {}); await p.waitForTimeout(200);
      const homeBefore = (await p.locator("#view").innerText()).replace(/\n+/g, " | ");
      await p.click(`button[data-subject="${subj}"]`); await p.locator("[data-diag]").first().click(); await p.click("[data-diag-go]");
      // 3 правильно, 2 «Ще не знаю»
      for (let k = 0; k < 5; k++) { const i = await cur(p, subj, id); const a = Object.keys(((await S(p)).diagRun || {})[id] || {}).length;
        if (k < 3) await answerRight(p, subj, i); else await p.click("#skip");
        await p.waitForFunction(([id, a]) => Object.keys((JSON.parse(localStorage.getItem("slid.v1")).diagRun || {})[id] || {}).length > a, [id, a]); }
      const nextBefore = await cur(p, subj, id), titleBefore = await p.locator("#stage h2, #stage h1").first().innerText().catch(() => "");
      await p.click("#pClose"); await p.waitForTimeout(300); const toast = await p.locator("#toast").innerText().catch(() => "");
      await p.reload(); await p.waitForTimeout(300); await p.click('.tab[data-tab="path"]').catch(() => {}); await p.waitForTimeout(300);
      const home = (await p.locator("#view").innerText()).replace(/\n+/g, " | ");
      await p.screenshot({ path: `${OUT}/shots/${id}-home-interrupted.png`, fullPage: true });
      const cards = await p.locator("#view .diaginv").evaluateAll(els => els.map(e => e.dataset.diag + ": " + e.innerText.replace(/\n+/g, " | ")));
      const mine = p.locator(`#view .diaginv[data-diag="${subj}"]`);
      let resumed = null;
      if (await mine.count()) { await mine.first().click(); await p.waitForTimeout(200); const btn = await p.locator("[data-diag-go]").innerText(); await p.click("[data-diag-go]"); await p.waitForTimeout(300);
        resumed = { btn, eyebrow: await p.locator("#stage .eyebrow").first().innerText(), title: await p.locator("#stage h2, #stage h1").first().innerText().catch(() => ""), next: await cur(p, subj, id) }; }
      R.interrupt = { homeBefore: homeBefore.slice(0, 300), toast, cards, homeCardCount: cards.length, nextBefore, titleBefore, resumed,
        ok: !!resumed && resumed.next === nextBefore && /завдання 6\b/i.test(resumed.eyebrow) && resumed.title === titleBefore && cards.length === 1 && cards[0].startsWith(subj) && /Продовжити тест/.test(cards[0]) };
    } catch (e) { R.issues.push("interrupt: " + String(e).slice(0, 300)); await p.screenshot({ path: `${OUT}/shots/${id}-FAIL-interrupt.png`, fullPage: true }); } await ctx.close(); }
  console.log(id, JSON.stringify({ allOk: R.allOk && { shown: R.allOk.shown, done: R.allOk.done, allRes1: R.allOk.allRes1, curKnown: R.allOk.curKnown + "/" + R.allOk.curTotal, steps: R.allOk.steps, missingKnown: R.allOk.missingKnown },
    allSkip: R.allSkip && { shown: R.allSkip.shown, steps: R.allSkip.steps, base: R.allSkip.base, pre: R.allSkip.preLessonsInPlan + "/" + R.allSkip.preLessons }, interrupt: R.interrupt?.ok, errors: R.errors.length, issues: R.issues.length, overflow: R.overflow.length }));
}
await br.close(); srv.close();
fs.writeFileSync(`${OUT}/qa-out.json`, JSON.stringify(out, null, 1));
