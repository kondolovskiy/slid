#!/usr/bin/env node
// Слід · модульні тести персоналізації (app/learn.js): діагностика, план, повторювані помилки, валідатор тесту.
// Запуск: node tools/test-learn.mjs   (без залежностей; дані синтетичні, не з реального контенту)
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), ctx, { filename: "app/learn.js" });
const L = ctx.SLID_LEARN;
let fails = 0, n = 0;
const eq = (got, exp, what) => { n++; const ok = typeof exp === "number" && typeof got === "number" ? Math.abs(got - exp) < 1e-9 : JSON.stringify(got) === JSON.stringify(exp); if (!ok) { fails++; console.log(`ПОМИЛКА ${what}: отримано ${JSON.stringify(got)}, очікувалось ${JSON.stringify(exp)}`); } };
const { OK, BAD, SKIP } = L;
const fresh = () => ({ diag: {}, plan: {}, mast: {}, errs: [], skw: {} });
const clone = o => JSON.parse(JSON.stringify(o));

// ---------- синтетичний тест ----------
// теми: a, b, c — передумови (a: 2 уроки), x, y — поточний клас. Теми чергуються.
const topics = [
  { id: "a", kind: "pre", lessons: ["a1", "a2"], for: ["s1"] },
  { id: "b", kind: "pre", lessons: ["b1"], for: ["s2"] },
  { id: "c", kind: "pre", lessons: ["c1"] },
  { id: "x", kind: "cur", lessons: ["x1"] },
  { id: "y", kind: "cur", lessons: ["y1", "y2"] }];
const D = { id: "dg", grade: 6, topics, items: [
  { topic: "a" }, { topic: "b" }, { topic: "a" }, { topic: "c" }, { topic: "b" }, { topic: "x" }, { topic: "c" }, { topic: "y" }] };
//                 0 a-база     1 b-база     2 a-склад.   3 c-база     4 b-склад.   5 x          6 c-склад.   7 y

/* 1. nextItem / remaining */
eq(L.nextItem(D, {}), 0, "next: початок");
eq(L.nextItem(D, { 0: OK }), 1, "next: теми чергуються (a → b)");
eq(L.nextItem(D, { 0: OK, 1: BAD }), 2, "next: після b-помилки повертаємось до складнішого a");
eq(L.nextItem(D, { 0: BAD }), 1, "next: помилка на базовому a → складніше a (2) пропущено");
eq(L.nextItem(D, { 0: SKIP }), 1, "next: «ще не знаю» теж пропускає складніше");
eq(L.nextItem(D, { 0: BAD, 1: BAD }), 3, "next: a і b провалені → c");
eq(L.nextItem(D, { 0: BAD, 1: BAD, 3: OK }), 5, "next: складніше b (4) пропущено, c-складніше (6) ще чекає, але 5 раніше");
eq(L.nextItem(D, { 0: BAD, 1: BAD, 3: OK, 5: BAD }), 6, "next: помилка в cur-темі не впливає на інші");
eq(L.nextItem(D, { 0: BAD, 1: BAD, 3: OK, 5: BAD, 6: OK }), 7, "next: останнє завдання");
eq(L.nextItem(D, { 0: BAD, 1: BAD, 3: OK, 5: BAD, 6: OK, 7: OK }), -1, "next: кінець тесту → -1");
eq(L.nextItem(D, { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 5: OK, 6: OK, 7: OK }), -1, "next: усе правильно → -1");
eq(L.nextItem(D, { 0: BAD, 1: BAD, 2: BAD, 3: BAD }), 5, "next: відповіді на пропущені індекси не ламають порядок");
eq(L.nextItem({ topics: [], items: [] }, {}), -1, "next: порожній тест");
eq(L.remaining(D, {}), 8, "remaining: усі 8");
eq(L.remaining(D, { 0: OK }), 7, "remaining: -1 після відповіді");
eq(L.remaining(D, { 0: BAD }), 6, "remaining: помилка на базовому знімає ще й складніше");
eq(L.remaining(D, { 0: BAD, 1: BAD, 3: BAD }), 2, "remaining: a, b, c провалені → лишаються лише x, y");
eq(L.remaining(D, { 0: BAD, 1: BAD, 3: BAD, 5: OK, 7: OK }), 0, "remaining: кінець → 0");
// узгодженість: nextItem === -1 ⇔ remaining === 0; remaining ніколи не зростає
for (const pat of [() => OK, () => BAD, () => SKIP, i => (i % 2 ? OK : BAD), i => (i % 3 ? OK : SKIP), i => (i < 2 ? OK : BAD)]) {
  const res = {}; let steps = 0, prev = L.remaining(D, res), mono = true, agree = true;
  for (let i = L.nextItem(D, res); i !== -1 && steps < 20; i = L.nextItem(D, res), steps++) {
    res[i] = pat(steps); const r = L.remaining(D, res); if (r >= prev) mono = false; prev = r;
    if ((L.nextItem(D, res) === -1) !== (r === 0)) agree = false;
  }
  eq(mono, true, "remaining зменшується після кожної відповіді"); eq(agree, true, "nextItem=-1 ⇔ remaining=0");
  eq(steps, Object.keys(res).length, "кожен nextItem — нова відповідь (без зациклення)");
}

/* 2. topicStatus */
eq(L.topicStatus(D, { 0: OK, 2: OK, 1: OK, 4: BAD, 3: SKIP, 5: OK, 7: BAD }), { a: "ok", b: "shaky", c: "gap", x: "known", y: "new" }, "topicStatus: ok / shaky / gap(SKIP) / known / new");
eq(L.topicStatus(D, {}), { a: "gap", b: "gap", c: "gap", x: "new", y: "new" }, "topicStatus: нічого не питали → gap / new");
eq(L.topicStatus(D, { 0: BAD, 2: OK }).a, "gap", "topicStatus: базове невірно, складніше вірно → gap");
eq(L.topicStatus(D, { 0: OK }).a, "shaky", "topicStatus: складніше не питали (обрив) → shaky");
eq(L.topicStatus(D, { 0: SKIP }).a, "gap", "topicStatus: SKIP на базовому → gap");
eq(L.topicStatus(D, { 0: OK, 2: SKIP }).a, "shaky", "topicStatus: SKIP на складнішому → shaky");
eq(L.topicStatus(D, { 5: SKIP }).x, "new", "topicStatus: SKIP в cur → new");

/* 3. level */
{ const mk = (pre, st) => ({ topics: pre.map((id, i) => ({ id, kind: "pre" })).concat([{ id: "cc", kind: "cur" }]) });
  const ids = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"], dd = mk(ids);
  const lv = arr => L.level(dd, Object.fromEntries(ids.map((id, i) => [id, arr[i]])));
  const a = lv(["ok", "ok", "ok", "ok", "ok", "ok", "ok"]); eq([a.k, a.gaps, a.shaky, a.ok, a.total, a.share], [2, 0, 0, 7, 7, 1], "level: усе ok");
  const b = lv(["ok", "ok", "ok", "ok", "ok", "ok", "gap"]); eq([b.k, b.gaps, b.ok], [2, 1, 6], "level: 6/7=0.857 ≥ 0.85 → k=2");
  const c = lv(["ok", "ok", "ok", "ok", "ok", "gap", "gap"]); eq([c.k, c.gaps, c.ok], [1, 2, 5], "level: 5/7≈0.71 → k=1");
  const e = lv(["ok", "ok", "ok", "ok", "gap", "gap", "gap"]); eq([e.k, e.ok], [1, 4], "level: 4/7≈0.571 ≥ 0.55 → k=1");
  const f = lv(["ok", "ok", "ok", "gap", "gap", "gap", "gap"]); eq([f.k, f.gaps], [0, 4], "level: 3/7≈0.43 → k=0");
  const g = lv(["shaky", "shaky", "shaky", "shaky", "shaky", "shaky", "shaky"]); eq([g.k, g.shaky, g.ok, g.share], [0, 7, 0, 0.5], "level: усе хитке → 0.5 → k=0");
  const h = lv(["ok", "ok", "ok", "ok", "ok", "ok", "shaky"]); eq([h.k, h.shaky, h.ok], [2, 1, 6], "level: 6.5/7≈0.93 → k=2");
  const bd = L.level({ topics: [{ id: "q", kind: "pre" }, { id: "r", kind: "pre" }] }, { q: "ok", r: "gap" }); eq([bd.share, bd.k], [0.5, 0], "level: рівно 0.5 → k=0 (межа 0.55)");
  const b2 = L.level({ topics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => ({ id: "t" + i, kind: "pre" })) }, Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(i => ["t" + i, "ok"]))); eq([b2.share, b2.k], [0.85, 2], "level: рівно 0.85 → k=2 (межа включно)");
  const none = L.level({ topics: [{ id: "cc", kind: "cur" }] }, {}); eq([none.share, none.k, none.total], [1, 2, 0], "level: без pre-тем → k=2");
  eq(typeof a.title + typeof a.text, "stringstring", "level: title і text є"); }

/* 4. buildPlan */
{ const d = { id: "dp", grade: 6, topics: [
    { id: "t1", kind: "pre", lessons: ["l1", "l2"], for: ["sLate"] },
    { id: "t2", kind: "pre", lessons: ["l3"], for: ["sNow"] },
    { id: "t3", kind: "pre", lessons: ["l2", "l4"] },
    { id: "t4", kind: "pre", lessons: ["l5"], for: ["sNow", "sLate"] },
    { id: "t5", kind: "pre", lessons: ["l6"], for: ["sPast"] },
    { id: "k1", kind: "cur", lessons: ["m1"] }, { id: "k2", kind: "cur", lessons: ["m2", "m3"] }, { id: "k3", kind: "cur", lessons: ["m3"] }],
    items: [] };
  // t1 gap, t2 shaky, t3 gap, t4 shaky, t5 gap; k1, k3 known, k2 new
  d.items = [{ topic: "t1" }, { topic: "t1" }, { topic: "t2" }, { topic: "t2" }, { topic: "t3" }, { topic: "t3" }, { topic: "t4" }, { topic: "t4" }, { topic: "t5" }, { topic: "t5" }, { topic: "k1" }, { topic: "k2" }, { topic: "k3" }];
  const res = { 0: BAD, 2: OK, 3: BAD, 4: SKIP, 6: OK, 7: BAD, 8: BAD, 10: OK, 12: OK };
  const sections = [{ id: "sNow", weeks: [3, 6] }, { id: "sLate", weeks: [10, 14] }, { id: "sPast", weeks: [1, 2] }];
  const lessons = p => p.steps.map(s => s.l);
  const p = L.buildPlan(d, res, { week: 4, sections, day: "2026-10-13" });
  eq(p.topics, { t1: "gap", t2: "shaky", t3: "gap", t4: "shaky", t5: "gap", k1: "known", k2: "new", k3: "known" }, "buildPlan: статуси тем");
  // терміновість: t2 (sNow, 0) і t4 (sNow+sLate → min 0) раніше за t1 (sLate, 6), потім t3 (99), t5 (минулий розділ: 62) між ними
  // порядок: u=0: t2, t4 (обидві хитких, за порядком у тесті), u=6: t1, u=62: t5, u=99: t3
  eq(lessons(p), ["l3", "l5", "l1", "l2", "l6", "l4"], "buildPlan: терміновість → прогалина/хитка → порядок; l2 з t3 не дублюється");
  eq(p.steps.map(s => s.topic), ["t2", "t4", "t1", "t1", "t5", "t3"], "buildPlan: topic кроку");
  eq(p.steps[0], { l: "l3", why: "shaky", topic: "t2", src: "diag", done: false }, "buildPlan: структура кроку");
  eq(p.known, ["m1", "m3"], "buildPlan: known лише з cur-тем, без дублів");
  eq([p.diag, p.date], ["dp", "2026-10-13"], "buildPlan: diag і date");
  // без секцій: усі u=99, прогалини раніше за хиткі, далі порядок тем
  eq(lessons(L.buildPlan(d, res, {})), ["l1", "l2", "l4", "l6", "l3", "l5"], "buildPlan: без розділів — gap раніше за shaky");
  eq(L.buildPlan(d, res).date, null, "buildPlan: без ctx — date null");
  // тиждень 11: sLate іде (u=0) → t1 gap, потім t4 (sNow+sLate → 0, але хитка/gap: тут усе gap, тож за порядком тем),
  // потім минулі: sNow (65) → t2, sPast (69) → t5; без розділу (99) → t3
  eq(lessons(L.buildPlan(d, {}, { week: 11, sections })), ["l1", "l2", "l5", "l3", "l6", "l4"], "buildPlan: розділ, що йде зараз, першим; минулі — за давністю; без розділу — в кінці");
  // тиждень 1: sPast іде (0) → t5 першим, потім sNow (2 тижні) → t2, t4, потім sLate (9) → t1
  eq(lessons(L.buildPlan(d, {}, { week: 1, sections })), ["l6", "l3", "l5", "l1", "l2", "l4"], "buildPlan: тиждень 1 — найближчі розділи першими");
  // розділ не знайдено в sections → 99; секція без weeks → 99
  eq(lessons(L.buildPlan(d, {}, { week: 1, sections: [{ id: "sLate" }] })), ["l1", "l2", "l3", "l4", "l5", "l6"], "buildPlan: розділ без weeks → 99, порядок як у тесті");
  // hasLesson
  const pf = L.buildPlan(d, res, { week: 4, sections, hasLesson: l => l !== "l2" && l !== "m3" });
  eq(lessons(pf), ["l3", "l5", "l1", "l6", "l4"], "buildPlan: hasLesson прибирає відсутні уроки");
  eq(pf.known, ["m1"], "buildPlan: hasLesson фільтрує і known");
  eq(L.buildPlan(d, { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 5: OK, 6: OK, 7: OK, 8: OK, 9: OK }, {}).steps, [], "buildPlan: усе засвоєно — план порожній");
  eq(L.buildPlan(d, {}, {}).known, [], "buildPlan: нічого не відомо → known порожній"); }

/* 5. finishDiag */
{ const S = fresh(); S.plan.math = { diag: "old", steps: [
    { l: "E1", why: "errors", src: "err", done: false }, { l: "E2", why: "errors", src: "err", done: true },
    { l: "a1", why: "errors", src: "err", done: false }, { l: "c1", why: "gap", src: "diag", done: false }, { l: "E1", why: "errors", src: "err", done: false }] };
  const res = { 0: BAD, 3: BAD };                       // a gap (a1, a2), c gap (c1), b gap (b1)
  const p = L.finishDiag(S, "math", D, res, { day: "2026-10-13", week: 1 });
  eq(S.plan.math === p, true, "finishDiag: план записано в S.plan[предмет]");
  eq(S.diag.dg, { done: true, date: "2026-10-13", res: { 0: BAD, 3: BAD }, topics: p.topics }, "finishDiag: запис у S.diag");
  eq(S.diag.dg.res === res, false, "finishDiag: res скопійовано");
  eq(p.steps.map(s => s.l), ["a1", "a2", "b1", "c1", "E1"], "finishDiag: err-кроки зі старого плану додано, дубль E1 у старому плані відсіяно");
  eq(p.steps.filter(s => s.l === "a1").length, 1, "finishDiag: a1 (є і в диагностиці, і в err) не дублюється");
  eq(p.steps.some(s => s.l === "E2"), false, "finishDiag: закритий err-крок не повертається");
  eq(p.steps.find(s => s.l === "a1").src, "diag", "finishDiag: дубль лишається версією з діагностики");
  eq(p.steps.every(s => !s.done), true, "finishDiag: нових виконаних кроків немає");
  const S2 = fresh(); const p2 = L.finishDiag(S2, "math", D, { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 6: OK }, {}); eq(p2.steps, [], "finishDiag: без старого плану і прогалин — порожньо");
  eq(S2.diag.dg.date, null, "finishDiag: date null без ctx.day");
  const S3 = fresh(); S3.plan.math = { steps: [{ l: "E9", src: "err", done: false }] }; const p3 = L.finishDiag(S3, "math", D, {}, {});
  eq(p3.steps.slice(-1)[0].l, "E9", "finishDiag: err-крок додається в кінець");
  eq(S3.plan.math.steps.filter(s => s.l === "E9").length, 1, "finishDiag: рівно один E9");
  // повторний тест: те саме знову → кроки не множаться
  const S4 = fresh(); L.finishDiag(S4, "math", D, res, {}); L.finishDiag(S4, "math", D, res, {});
  eq(S4.plan.math.steps.length, 4, "finishDiag: повтор тесту не множить кроки");
  // ДВОЗНАЧНІСТЬ: коментар (learn.js:69) каже «і вже виконані повторення зберігаються», код (learn.js:72) їх відкидає — фіксуємо фактичну поведінку
  const S5 = fresh(); S5.plan.math = { steps: [{ l: "a1", why: "gap", src: "diag", done: true }] };
  eq(L.finishDiag(S5, "math", D, res, {}).steps.filter(s => s.l === "a1").every(s => !s.done), true, "finishDiag: виконаний diag-крок після повторного тесту скидається (за кодом)"); }

/* 6. record / detect */
const DAY = "2026-10-13";
const rec = (S, l, ok, sk, day = DAY, at) => L.record(S, { l, at, sk, ok, day });
const order = l => ({ L1: 3, L2: 1, L3: 2, L4: 4 }[l] ?? 50);
{ const S = fresh();
  rec(S, "L1", false, "m.cmp", DAY, "L9");
  eq(S.mast.L1, { r: "0", d: DAY }, "record: mast.r і d");
  eq(S.errs, [{ l: "L1", at: "L9", sk: "m.cmp", d: DAY }], "record: помилка в журнал (at)");
  eq(S.skw["m.cmp"], "0", "record: вікно навички");
  rec(S, "L1", true); eq(S.errs.length, 1, "record: правильна відповідь не пишеться в errs"); eq(S.mast.L1.r, "01", "record: r росте");
  rec(S, "L1", false); eq(S.errs[1], { l: "L1", at: "L1", sk: null, d: DAY }, "record: at за замовчуванням = l, sk null");
  eq(Object.keys(S.skw), ["m.cmp"], "record: без sk навичка не створюється");
  for (let i = 0; i < 10; i++) rec(S, "L1", i % 2 === 0); eq(S.mast.L1.r.length, 6, "record: вікно r — 6"); eq(S.mast.L1.r, "101010", "record: вікно — останні 6");
  const T = fresh(); for (let i = 0; i < 8; i++) rec(T, "L1", true, "s.a"); eq(T.skw["s.a"], "111111", "record: вікно навички — 6");
  const U = fresh(); for (let i = 0; i < 100; i++) rec(U, "L" + i, false, null, DAY); eq(U.errs.length, 80, "record: журнал обмежений 80"); eq([U.errs[0].l, U.errs[79].l], ["L20", "L99"], "record: лишаються найновіші"); }
{ // тема: поріг
  const S = fresh(); rec(S, "L1", false); eq(L.detect(S, { day: DAY }), [], "detect: одна помилка — ні");
  rec(S, "L1", false); eq(L.detect(S, { day: DAY }), [{ l: "L1", why: "topic", n: 2, of: 2 }], "detect: 2 з 2 → тема");
  const T = fresh(); ["0", "1", "1", "0"].forEach(c => rec(T, "L1", c === "1")); eq(L.detect(T, {}).map(r => r.l), ["L1"], "detect: 2 з 4 (рівно половина) → тема");
  const U = fresh(); ["0", "1", "1", "1", "0"].forEach(c => rec(U, "L1", c === "1")); eq(L.detect(U, {}), [], "detect: 2 з 5 (менше половини) → ні");
  const V = fresh(); ["0", "1", "0", "1", "1", "0"].forEach(c => rec(V, "L1", c === "1")); eq(L.detect(V, {}).map(r => [r.n, r.of]), [[3, 6]], "detect: 3 з 6 → тема");
  const W = fresh(); ["0", "0", "1", "1", "1", "1", "1"].forEach(c => rec(W, "L1", c === "1")); eq(W.mast.L1.r, "011111", "detect: вікно виштовхнуло стару помилку"); eq(L.detect(W, {}), [], "detect: стара помилка поза вікном — не враховується");
  const X = fresh(); rec(X, "L1", false); rec(X, "L1", false); rec(X, "L2", false); rec(X, "L2", false);
  eq(L.detect(X, { hasLesson: l => l === "L2" }).map(r => r.l), ["L2"], "detect: hasLesson відсікає");
  // сортування: більша частка помилок раніше, при рівності — за order
  const Y = fresh(); rec(Y, "L1", false); rec(Y, "L1", false); rec(Y, "L1", true); rec(Y, "L3", false); rec(Y, "L3", false); rec(Y, "L2", false); rec(Y, "L2", false); rec(Y, "L2", true);
  eq(L.detect(Y, { order }).map(r => r.l), ["L3", "L2", "L1"], "detect: сортування: частка помилок, потім order (L2<L1)"); }
{ // навичка
  const S = fresh(); rec(S, "L1", false, "m.cmp"); rec(S, "L2", false, "m.cmp"); rec(S, "L3", false, "m.cmp");
  eq(L.detect(S, { day: DAY, order }), [{ l: "L2", why: "skill", n: 3, of: 3, sk: "m.cmp" }], "detect: навичка у 3 уроках → найраніший за order");
  const T = fresh(); rec(T, "L1", false, "m.cmp"); rec(T, "L1", false, "m.cmp"); rec(T, "L1", false, "m.cmp");
  eq(L.detect(T, { day: DAY, order }).map(r => r.why), ["topic"], "detect: 3 помилки в одному уроці — лише тема, не навичка");
  const U = fresh(); rec(U, "L1", false, "m.cmp"); rec(U, "L2", false, "m.cmp");
  eq(L.detect(U, { day: DAY, order }), [], "detect: 2 помилки навички — замало");
  const V = fresh(); rec(V, "L1", false, "m.cmp"); rec(V, "L1", false, "m.cmp"); rec(V, "L2", false, "m.cmp");   // L1 слабка, L2 раніший за order
  eq(L.detect(V, { day: DAY, order }).map(r => [r.l, r.why]), [["L2", "skill"], ["L1", "topic"]], "detect: тема L1 + навичка → L2 (різні уроки; рівна частка → за order)");
  const V2 = fresh(); rec(V2, "L2", false, "m.cmp"); rec(V2, "L2", false, "m.cmp"); rec(V2, "L1", false, "m.cmp");   // корінь збігається з уже знайденою темою
  eq(L.detect(V2, { day: DAY, order }).map(r => [r.l, r.why]), [["L2", "topic"]], "detect: корінь навички = уже знайдена тема → без дубля");
  const W = fresh(); rec(W, "L1", false, "m.cmp"); rec(W, "L2", false, "m.cmp"); rec(W, "L3", true, "m.cmp"); rec(W, "L3", false, "m.cmp");
  eq(L.detect(W, { day: DAY, order }).map(r => [r.l, r.why, r.n, r.of]), [["L2", "skill", 3, 4]], "detect: n/of беруться з вікна навички");
  const Z = fresh(); rec(Z, "L1", false, "m.cmp"); rec(Z, "L2", false, "m.cmp"); rec(Z, "L3", false, "m.cmp");
  eq(L.detect(Z, { day: DAY, order, hasLesson: l => l !== "L2" }).map(r => r.l), ["L3"], "detect: hasLesson виключає корінь → наступний за order");
  // давність 14 днів
  const O = fresh(); rec(O, "L1", false, "m.cmp", "2026-09-20"); rec(O, "L2", false, "m.cmp", "2026-09-20"); rec(O, "L3", false, "m.cmp", DAY);
  eq(L.detect(O, { day: DAY, order }), [], "detect: помилки старші 14 днів не рахуються → лишився 1 урок");
  const B = fresh(); rec(B, "L1", false, "m.cmp", "2026-09-29"); rec(B, "L2", false, "m.cmp", "2026-09-29"); rec(B, "L3", false, "m.cmp", DAY);
  eq(L.detect(B, { day: DAY, order }).map(r => r.l), ["L2"], "detect: рівно 14 днів ще рахується");
  const B2 = fresh(); rec(B2, "L1", false, "m.cmp", "2026-09-28"); rec(B2, "L2", false, "m.cmp", "2026-09-28"); rec(B2, "L3", false, "m.cmp", DAY);
  eq(L.detect(B2, { day: DAY, order }), [], "detect: 15 днів — не рахується");
  eq(L.detect(O, { order }).map(r => r.l), ["L2"], "detect: без ctx.day фільтр давності вимкнено");
  const O2 = fresh(); rec(O2, "L1", false, "m.cmp", "2026-09-20"); rec(O2, "L2", false, "m.cmp", "2026-09-21"); rec(O2, "L3", false, "m.cmp", "2026-10-12");
  eq(L.detect(O2, { day: DAY, order }), [], "detect: старі 2 з 3 → не рекомендуємо старий корінь"); }

/* 7. syncPlan */
{ const S = fresh(); const recs = [{ l: "L1", why: "topic", n: 2, of: 3 }, { l: "L2", why: "skill", n: 3, of: 4, sk: "m.cmp" }];
  const a = L.syncPlan(S, "math", recs, DAY);
  eq(a.length, 2, "syncPlan: два нові кроки"); eq(S.plan.math.diag, null, "syncPlan: створено план без діагностики");
  eq(S.plan.math.steps[0], { l: "L1", why: "errors", src: "err", n: 2, of: 3, done: false, date: DAY }, "syncPlan: структура кроку без sk");
  eq(S.plan.math.steps[1].sk, "m.cmp", "syncPlan: sk зберігається");
  eq(L.syncPlan(S, "math", recs, DAY), [], "syncPlan: незакритий крок не дублюється"); eq(S.plan.math.steps.length, 2, "syncPlan: довжина не змінилась");
  S.plan.math.steps[0].done = true;
  eq(L.syncPlan(S, "math", [recs[0]], DAY).length, 1, "syncPlan: після закриття урок можна додати знову"); eq(S.plan.math.steps.length, 3, "syncPlan: три кроки");
  eq(L.syncPlan(S, "math", [recs[0], recs[0]], DAY), [], "syncPlan: дубль у recs ігнорується, якщо крок уже незакритий");
  const T = fresh(); eq(L.syncPlan(T, "hist", [{ l: "H1", n: 2, of: 2 }, { l: "H1", n: 2, of: 2 }], null).length, 1, "syncPlan: два однакові рекомендації в одному виклику → один крок");
  eq(T.plan.hist.steps[0].date, null, "syncPlan: date null без day");
  const U = fresh(); U.plan.math = { diag: "dg", steps: [{ l: "L1", src: "diag", done: false }] }; eq(L.syncPlan(U, "math", [recs[0]], DAY), [], "syncPlan: не дублює і diag-крок"); }

/* 8. lessonDone */
{ const S = fresh(); rec(S, "L1", false, "m.cmp"); rec(S, "L2", false, "m.cmp"); rec(S, "L3", false, "m.cmp"); rec(S, "L4", false, "m.x");
  const recs = L.detect(S, { day: DAY, order }); eq(recs[0].l, "L2", "lessonDone: стартова порада — L2");
  L.syncPlan(S, "math", recs, DAY);
  // низький результат
  const r0 = L.lessonDone(S, "math", "L2", 0.5, DAY);
  eq([r0.closed, r0.retry], [[], true], "lessonDone: acc < 0.65 → retry, нічого не закрито");
  eq(S.plan.math.steps.every(s => !s.done), true, "lessonDone: крок не закрито"); eq(S.mast.L2.r, "0", "lessonDone: mast не чиститься при низькому acc"); eq(S.errs.length, 4, "lessonDone: errs не чистяться");
  const r1 = L.lessonDone(S, "math", "L2", 0.649, DAY); eq(r1.retry, true, "lessonDone: 0.649 ще не зараховано");
  // успіх (межа)
  const r2 = L.lessonDone(S, "math", "L2", 0.65, DAY);
  eq([r2.closed.length, r2.retry], [1, false], "lessonDone: acc = 0.65 закриває"); eq([r2.closed[0].done, r2.closed[0].doneAt], [true, DAY], "lessonDone: done і doneAt");
  eq(S.mast.L2.r, "", "lessonDone: mast.r чиститься"); eq(S.errs.some(e => e.l === "L2"), false, "lessonDone: errs цього уроку прибрано"); eq(S.errs.length, 3, "lessonDone: чужі errs лишились");
  eq(S.skw["m.cmp"], "", "lessonDone: вікно навички кроку скинуто"); eq(S.skw["m.x"], "0", "lessonDone: інші навички не чіпаються");
  eq(L.detect(S, { day: DAY, order }), [], "lessonDone: після закриття detect більше не радить L2");
  eq(S.mast.L1.r, "0", "lessonDone: чужий mast не чіпається");
  // регресія (було багом): крок теми, що збігається з коренем навички, не має sk → вікно навички не скидається; після закриття L2
  // навичка (3 нулі у вікні, з них одна вже стерта з errs) одразу радить інший урок (L3), хоч доказів лишилось на 2 помилки.
  // Очікувалось [] (як у коментарі learn.js:128); пропозиція: у lessonDone скидати S.skw для навичок з помилок закритого уроку
  // (S.errs.filter(e => e.l === lessonId).map(e => e.sk)) або в detect не відкидати sk у topic-запису, коли корінь уже seen.
  { const Q = fresh(); rec(Q, "L1", false, "m.cmp"); rec(Q, "L2", false, "m.cmp"); rec(Q, "L2", false, "m.cmp"); rec(Q, "L3", false, "m.cmp");
    const qr = L.detect(Q, { day: DAY, order }); eq(qr.map(r => [r.l, r.why]), [["L2", "topic"]], "lessonDone(регресія): стартова порада — тема L2");
    L.syncPlan(Q, "math", qr, DAY); L.lessonDone(Q, "math", "L2", 1, DAY); eq(L.detect(Q, { day: DAY, order }), [], "lessonDone(регресія): після закриття теми-кореня навичка не радить інший урок"); }
  // крок без sk (тема): вікна навичок, у яких були помилки цієї теми, теж починаються з нуля
  const T = fresh(); rec(T, "L1", false, "m.cmp"); rec(T, "L1", false, "m.cmp"); L.syncPlan(T, "math", L.detect(T, {}), DAY);
  eq(T.plan.math.steps[0].sk, undefined, "lessonDone: крок-тема без sk"); L.lessonDone(T, "math", "L1", 1, DAY); eq(T.skw["m.cmp"], "", "lessonDone: крок без sk — вікно навички з помилок теми скинуто");
  eq(L.detect(T, {}), [], "lessonDone: тема більше не радиться");
  // урок поза планом: нічого не закрито, але памʼять про помилки теж чиститься
  const U = fresh(); rec(U, "L1", false); rec(U, "L1", false); const r = L.lessonDone(U, "math", "L1", 0.9, DAY);
  eq([r.closed, r.retry], [[], false], "lessonDone: без плану — без падіння"); eq(U.mast.L1.r, "", "lessonDone: без плану mast чиститься");
  const V = fresh(); L.syncPlan(V, "math", [{ l: "L1", n: 2, of: 2 }], DAY); eq(L.lessonDone(V, "math", "L7", 0.3, DAY), { closed: [], retry: false }, "lessonDone: інший урок, низький acc — без retry");
  // закритий раніше крок не закривається вдруге
  const W = fresh(); L.syncPlan(W, "math", [{ l: "L1", n: 2, of: 2 }], DAY); L.lessonDone(W, "math", "L1", 1, DAY); eq(L.lessonDone(W, "math", "L1", 1, DAY).closed, [], "lessonDone: повторно не закриває");
  // todo / isKnown
  eq(L.todo(W.plan.math), [], "todo: усе закрито"); eq(L.todo({ steps: [{ l: "a", done: false }, { l: "b", done: true }] }).length, 1, "todo: лише незакриті"); eq(L.todo(undefined), [], "todo: без плану");
  eq(L.isKnown({ plan: { math: { known: ["x1"] } } }, "math", "x1"), true, "isKnown: так"); eq(L.isKnown({ plan: {} }, "math", "x1"), false, "isKnown: без плану"); }

/* 9. validate */
{ const lessons = new Map([["a1", { grade: 5 }], ["a2", { grade: 4 }], ["x1", { grade: 6 }], ["y1", { grade: 6 }], ["z1", { grade: 7 }]]);
  const sections = new Map([["s1", { grade: 6 }], ["s5", { grade: 5 }]]);
  const vc = { lessons, sections, skills: { "m.cmp": 1, "m.add": 1 } };
  const ok = { id: "dgv", grade: 6, title: "T", why: "W", status: "draft",
    topics: [{ id: "a", title: "A", kind: "pre", lessons: ["a1", "a2"], for: ["s1"] }, { id: "x", title: "X", kind: "cur", lessons: ["x1"] }],
    items: [{ topic: "a", type: "choice", sk: "m.cmp", title: "q1" }, { topic: "a", type: "number", sk: "m.add", title: "q2" }, { topic: "x", type: "lab", sk: "m.cmp", title: "q3" }] };
  eq(L.validate(ok, vc), [], "validate: коректний тест → []");
  const bad = (mut, sub, what, only = true) => { const d = clone(ok); mut(d); const E = L.validate(d, vc); eq(E.some(e => e.includes(sub)), true, `validate: ${what} (є «${sub}»; отримано ${JSON.stringify(E)})`); if (only) eq(E.length, 1, `validate: ${what} — рівно одна помилка`); };
  bad(d => { d.topics[0].lessons = ["a1", "zz"]; }, "немає уроку zz", "невідомий урок");
  bad(d => { d.topics[0].lessons = ["x1"]; }, "не з попередніх класів", "pre-урок цього ж класу");
  bad(d => { d.topics[0].lessons = ["z1"]; }, "не з попередніх класів", "pre-урок старшого класу");
  bad(d => { d.topics[1].lessons = ["a1"]; }, "не з 6 класу", "cur-урок не з класу");
  bad(d => { d.topics[1].lessons = ["z1"]; }, "не з 6 класу", "cur-урок старшого класу");
  bad(d => { d.items.splice(1, 1); }, "рівно 2 завдання", "pre з одним завданням");
  bad(d => { d.items.push({ topic: "a", type: "choice", sk: "m.cmp", title: "q" }); }, "рівно 2 завдання", "pre з трьома завданнями");
  bad(d => { d.items.push({ topic: "x", type: "choice", sk: "m.cmp", title: "q" }); }, "рівно 1 завдання", "cur із двома завданнями");
  bad(d => { d.items.pop(); }, "рівно 1 завдання", "cur без завдань");
  bad(d => { d.items[0].topic = "q"; }, "невідома тема «q»", "невідома тема", false);
  bad(d => { d.items[0].type = "slider"; }, "тип не дозволено", "недозволений тип");
  bad(d => { d.items[0].type = "poll"; }, "тип не дозволено", "poll як тип", false);
  bad(d => { d.items[0].hyp = true; }, "poll/hyp", "hyp у тесті");
  bad(d => { delete d.items[0].sk; }, "не оголошена", "sk відсутній");
  bad(d => { d.items[0].sk = "m.zzz"; }, "«m.zzz» не оголошена", "sk невідомий");
  bad(d => { d.items[0].title = ""; }, "немає title", "завдання без title");
  bad(d => { d.topics[0].for = ["s9"]; }, "немає розділу s9", "for з невідомим розділом");
  bad(d => { d.topics[0].for = ["s5"]; }, "розділ s5 не з 6 класу", "for з розділом іншого класу");
  bad(d => { d.topics[1].for = ["s1"]; }, "лише для kind: pre", "for у cur-темі");
  bad(d => { d.topics[0].lessons = ["a1", "a2", "a1"]; }, "1–2 id уроків", "забагато уроків");
  bad(d => { d.topics[0].lessons = []; }, "1–2 id уроків", "порожні lessons");
  bad(d => { d.topics[0].kind = "mid"; }, "kind має бути", "невірний kind", false);
  bad(d => { d.topics[1].id = "a"; }, "повторюється", "дубль id теми", false);
  bad(d => { d.topics[0].title = ""; }, "немає title", "тема без title");
  bad(d => { d.status = "done"; }, "status", "статус");
  bad(d => { delete d.id; }, "немає id", "без id");
  bad(d => { d.grade = "6"; }, "немає grade", "grade не число", false);
  bad(d => { delete d.why; }, "title і why", "без why");
  bad(d => { d.items[1].signed = "true"; }, "signed", "signed — boolean");
  bad(d => { d.signed = "false"; }, "signed", "signed тесту — boolean");
  eq(L.validate({ ...clone(ok), signed: false }, vc), [], "validate: signed тесту можна вимкнути");
  bad(d => { d.items[0].hideCount = true; }, "hideCount", "hideCount лише для лічильника");
  bad(d => { d.items[1].hideDen = true; }, "hideDen", "hideDen лише для дробу");
  for (const [type, flag] of [["number", "signed"], ["shade", "hideCount"], ["numline", "hideCount"], ["fracin", "hideDen"]]) {
    const d = clone(ok); d.items[0].type = type; d.items[0][flag] = true; eq(L.validate(d, vc), [], `validate: ${type} ${flag}`);
    d.items[0][flag] = 1; eq(L.validate(d, vc).some(e => e.includes(flag)), true, `validate: ${flag} не число`);
  }
  eq(L.validate({ ...clone(ok), topics: [] }, vc), ["немає topics"], "validate: порожні topics");
  eq(L.validate({ ...clone(ok), items: [] }, vc), ["немає items"], "validate: порожні items");
  // pre-тема без for — дозволено
  const nf = clone(ok); delete nf.topics[0].for; eq(L.validate(nf, vc), [], "validate: for необов'язковий");
  // всі дозволені типи проходять
  for (const type of L.DIAG_TYPES) { const d = clone(ok); d.items[0].type = type; eq(L.validate(d, vc), [], `validate: тип ${type} дозволено`); }
  for (const type of ["slider", "align", "poll", "hyp", "intro", "info"]) { const d = clone(ok); d.items[0].type = type; eq(L.validate(d, vc).some(e => e.includes("тип не дозволено")), true, `validate: тип ${type} заборонено`); }
  // тема з урок-перетином (пре) і урок з клас 0 не падає
  const ng = clone(ok); ng.topics[0].lessons = ["a1"]; ng.topics[0].kind = "pre"; eq(L.validate(ng, vc), [], "validate: один урок — ок"); }

// ---------- відповідь, яку дитина записує сама ----------
{ const c = (s, v) => L.checkAns(s, v);
  [[{ answer: "5/12" }, "5/12", "ok"], [{ answer: "5/12" }, "10/24", "ok"], [{ answer: "5/12", reduced: true }, "10/24", "form"], [{ answer: "5/12" }, "5/13", "bad"],
   [{ answer: "2 1/3" }, "7/3", "ok"], [{ answer: "2 1/3", mixed: true }, "7/3", "form"], [{ answer: "2 1/3", mixed: true }, "2 1/3", "ok"], [{ answer: "2 1/3" }, "1 4/3", "form"],
   [{ answer: -3.5 }, "−3,5", "ok"], [{ answer: -3.5 }, "-3.5", "ok"], [{ answer: -3.5 }, "3,5", "bad"], [{ answer: "-7/2" }, "-3 1/2", "ok"], [{ answer: "1/2" }, "0,5", "ok"], [{ answer: "0,25" }, "1/4", "ok"],
   [{ answer: 12 }, "12", "ok"], [{ answer: 12 }, "12,0", "ok"], [{ answer: 12 }, " 12 ", "ok"], [{ answer: 3 }, "6/2", "ok"], [{ answer: 3, reduced: true }, "6/2", "form"],
   [{ answer: 19735 }, "19 735", "ok"], [{ answer: 1250.5 }, "1 250,5", "ok"], [{ answer: 19735 }, "19 73", "bad"], [{ answer: "2 1/3" }, "2 1/3", "ok"], [{ answer: "2/5", reduced: true }, "0,4", "form"], [{ answer: "2/5" }, "0,4", "ok"], [{ answer: 12, reduced: true, mixed: true }, "12", "ok"], [{ answer: 5 }, "", "bad"], [{ answer: 5 }, "abc", "bad"], [{ answer: 5 }, "5/0", "bad"], [{ answer: "1/3" }, "0,33", "bad"], [{ answer: 0 }, "-0", "ok"], [{ answer: "3/4", mixed: true }, "3/4", "ok"]]
    .forEach(([s, v, exp]) => eq(c(s, v), exp, `checkAns: ${JSON.stringify(s)} ← «${v}»`));
  eq(L.parseAns("2 1/3").n, 7, "parseAns: мішане → чисельник"); eq(L.parseAns("1,25").d, 100, "parseAns: десятковий → знаменник"); eq(L.parseAns("1/2/3"), null, "parseAns: сміття"); }

// Нові формати перевіряються значенням, але не приймають довільні вирази.
{ const cases = [
    [{ answerKind: "comparison", answer: "<" }, " < ", "ok"],
    [{ answerKind: "comparison", answer: "<" }, "≤", "bad"],
    [{ answerKind: "comparison", answer: "<" }, "<<", "bad"],
    [{ answerKind: "comparison", answer: "x" }, "x", "bad"],
    [{ answerKind: "list", answer: [1, 2, 3] }, "3; 1; 2", "ok"],
    [{ answerKind: "list", answer: "1, 2, 3" }, "3,2,1", "ok"],
    [{ answerKind: "list", answer: [0.5, "2/3", -2] }, "2/3; −2; 0,5", "ok"],
    [{ answerKind: "list", answer: [19735, "2 1/3"] }, "2 1/3; 19 735", "ok"],
    [{ answerKind: "list", answer: [1, 2, 3] }, "1;2;2;3", "bad"],
    [{ answerKind: "list", answer: [1, 2, 3] }, "1;2;2", "bad"],
    [{ answerKind: "list", answer: [0.5, 2] }, "1/2;0,5;2", "bad"],
    [{ answerKind: "list", answer: [1, 2] }, "1;2;", "bad"],
    [{ answerKind: "list", answer: [1, 2] }, "1;3", "bad"],
    [{ answerKind: "list", answer: [1, 1] }, "1;1", "bad"],
    [{ answerKind: "list", answer: [] }, "", "bad"],
    [{ answerKind: "list", answer: [1, 2] }, "1;Infinity", "bad"],
    [{ answerKind: "list", answer: [1, NaN] }, "1;NaN", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "3 × 2 * 2 · 2", "ok"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "2 ^ 3 * 3", "ok"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "4*6", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "24", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "2^2*3", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "1*2^3*3", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "2^0*2^3*3", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "2^-1*48", "bad"],
    [{ answerKind: "factors", answer: "2^3 · 3" }, "2^3.0*3", "bad"],
    [{ answerKind: "factors", answer: "2" }, "2^9999999999", "bad"],
    [{ answerKind: "factors", answer: "2" }, "2^53", "bad"],
    [{ answerKind: "factors", answer: "2" }, "Infinity", "bad"],
    [{ answerKind: "factors", answer: "2*2" }, "", "bad"],
    [{ answerKind: "factors", answer: 13 }, "13", "ok"],
    [{ answer: "2/5", fractionOnly: true }, "0,4", "form"],
    [{ answer: "2/5", fractionOnly: true }, "4/10", "ok"],
    [{ answer: "2/5", fractionOnly: true, reduced: true }, "4/10", "form"],
    [{ answer: 3.14, tol: 0.01 }, "3,15", "ok"],
    [{ answer: 3.14, tol: 0.01 }, "3,13", "ok"],
    [{ answer: 3.14, tol: 0.01 }, "3,1500001", "bad"],
    [{ answer: 3.14, tol: 0.01 }, "3,1299999", "bad"],
    [{ answer: 0, tol: 0 }, "0,000000000000001", "bad"],
    [{ answer: 1, tol: 1e-30 }, "1,000000000000001", "bad"],
    [{ answer: 0, tol: 1e-10 }, "1/10000000000", "ok"],
    [{ answer: 0, tol: 1e-10 }, "1/9999999999", "bad"],
    [{ answer: 0, tol: Number.MIN_VALUE }, "0", "ok"],
    [{ answer: 1, tol: 0 }, "2/2", "ok"],
    [{ answer: 1, tol: -1 }, "1", "bad"],
    [{ answer: 1, tol: Infinity }, "1", "bad"],
    [{ answer: 1, tol: NaN }, "1", "bad"],
    [{ answer: 1, tol: "0.1" }, "1", "bad"],
    [{ answer: Infinity }, "Infinity", "bad"],
    [{ answer: "number", answerKind: "unknown" }, "number", "bad"]
  ];
  cases.forEach(([s, v, expected], i) => eq(L.checkAns(s, v), expected, `checkAns: новий формат ${i + 1}`));
  for (const v of ["9".repeat(400), "1/" + "9".repeat(400), "9".repeat(400) + "/2", "1," + "0".repeat(400), "9007199254740992", "1 1/0", "1e3", "Infinity", "NaN"])
    eq(L.parseAns(v), null, "parseAns: відхиляє непідтримуване число «" + v.slice(0, 20) + "»");
  eq(L.checkAns({ answer: "9007199254740991/9007199254740990" }, "9007199254740990/9007199254740989"), "bad", "checkAns: великі дроби не рівні через округлення добутку");
  eq(L.checkAns({ answer: 19735 }, "19\u00a0735"), "ok", "checkAns: нерозривний пробіл між розрядами");
}

// ---------- тренування: розклад і добір сесії ----------
{ const S = { srs: {}, seen: {} }, D = "2026-10-13";
  L.srsInit(S, "a", D); eq(S.srs.a, { box: 0, due: "2026-10-14" }, "srsInit: перше повторення завтра"); L.srsInit(S, "a", "2026-11-01"); eq(S.srs.a.due, "2026-10-14", "srsInit: не перезаписує");
  eq(L.isDue(S, "a", D), false, "isDue: ще рано"); eq(L.isDue(S, "a", "2026-10-14"), true, "isDue: строк настав"); eq(L.isDue(S, "zz", D), true, "isDue: тема без запису");
  let u = L.srsUpdate(S, [{ lesson: "a", ok: true }, { lesson: "a", ok: true }, { lesson: "b", ok: true }, { lesson: "b", ok: false }], D);
  eq(S.srs.a, { box: 1, due: "2026-10-16" }, "srsUpdate: без помилок → наступна коробка (3 дні)"); eq(S.srs.b, { box: 0, due: "2026-10-14" }, "srsUpdate: помилка → перша коробка");
  eq(u.find(x => x.lesson === "a").days, 3, "srsUpdate: повертає інтервал");
  for (let i = 0; i < 9; i++) L.srsUpdate(S, [{ lesson: "a", ok: true }], D); eq(S.srs.a.box, L.BOX_DAYS.length - 1, "srsUpdate: коробка не вища за останню");
  L.srsUpdate(S, [{ lesson: "a", ok: false }], D); eq(S.srs.a.box, 0, "srsUpdate: помилка скидає з будь-якої коробки");

  const items = []; for (const l of ["a", "b", "c"]) for (let k = 1; k <= 6; k++) items.push({ key: l + k, lesson: l, lvl: k <= 3 ? 1 : k <= 5 ? 2 : 3 });
  const T = { srs: { a: { box: 0, due: "2026-10-20" }, b: { box: 0, due: "2026-10-10" }, c: { box: 1, due: "2026-10-12" } }, seen: {} };
  let p = L.pickSession(T, { items, focus: "a", n: 6, day: D });
  eq(p.map(x => x.key), ["a1", "a2", "a3", "a4", "b1", "c1"], "pickSession(тема): 4 з теми за рівнем + 2 на повторення за строком");
  eq(p.map(x => x.review), [false, false, false, false, true, true], "pickSession: позначка повторення");
  T.seen = { a1: 1, a2: 0, a3: 1, b1: 1 };
  p = L.pickSession(T, { items, focus: "a", n: 6, day: D });
  eq(p.map(x => x.key).slice(0, 4).sort(), ["a2", "a4", "a5", "a6"], "pickSession: спершу небачені, далі — де помилялись");
  eq(p.slice(0, 4).map(x => x.lvl), [1, 2, 2, 3], "pickSession: у сесії від простішого до складнішого");
  eq(p[4].key, "b2", "pickSession: у повторенні теж небачена задача");
  eq(L.pickSession(T, { items: items.filter(x => x.lesson === "a"), focus: "a", n: 6, day: D }).length, 6, "pickSession: інших тем немає — усі 6 з теми");
  eq(L.pickSession(T, { items: items.filter(x => x.lesson !== "a"), focus: "a", n: 6, day: D }).map(x => x.lesson), ["b", "c"], "pickSession: у теми немає задач — лише повторення");
  p = L.pickSession(T, { items, focus: null, n: 6, day: D });
  eq(p.map(x => x.lesson), ["b", "c", "b", "c", "b", "c"], "pickSession(мікс): лише теми, чий строк настав, по колу");
  p = L.pickSession({ srs: { a: { box: 2, due: "2026-11-01" }, b: { box: 2, due: "2026-10-30" } }, seen: {} }, { items, focus: null, n: 4, day: D });
  eq(p.map(x => x.lesson), ["c", "c", "c", "c"], "pickSession(мікс): тема без розкладу — першою");
  eq(L.pickSession({ srs: {}, seen: {} }, { items: [], focus: null, day: D }), [], "pickSession: порожній пул"); }

// ---------- перевірка пулу ----------
{ const ctx = { sections: new Map([["s1", { grade: 6, lessons: ["a", "b"] }]]), skills: { ops: {} } };
  const ok = { id: "p1", section: "s1", status: "draft", sources: [{ id: "bk", title: "Підручник", url: "https://example.org" }],
    items: [{ id: "t1", lesson: "a", lvl: 1, sk: "ops", src: "bk №12", type: "answer", title: "x", answer: "5/12", reduced: true, steps: ["крок"] }] };
  const mut = f => { const p = JSON.parse(JSON.stringify(ok)); f(p); return L.validatePool(p, ctx); };
  eq(L.validatePool(ok, ctx), [], "validatePool: коректний пул");
  [[p => p.section = "zz", "немає розділу"], [p => p.sources = [], "немає sources"], [p => p.items[0].lesson = "zz", "не з розділу"], [p => p.items[0].lvl = 4, "lvl"],
   [p => p.items[0].type = "number", "не дозволено"], [p => p.items[0].sk = "zz", "не оголошена"], [p => p.items[0].src = "№12", "src"], [p => p.items[0].src = "bk", "src"],
   [p => p.items[0].steps = [], "steps"], [p => p.items[0].answer = "10/24", "answer"], [p => p.items[0].answer = "x", "answer"], [p => p.items.push({ ...p.items[0] }), "повторюється"],
   [p => p.sources[0].url = "lib", "url"], [p => p.items[0].srcPage = 0, "srcPage"], [p => p.items[0].srcPage = 1.5, "srcPage"],
   [p => p.items[0].adapted = "true", "adapted"], [p => p.items[0].unitForms = ["a", "b"], "unitForms"], [p => p.items[0].unitForms = ["a", "", "c"], "unitForms"],
   [p => p.items[0].answerKind = "expression", "answerKind"], [p => p.items[0].fractionOnly = 1, "fractionOnly"], [p => p.items[0].mixed = "true", "mixed"],
   [p => p.items[0].reduced = "true", "reduced"], [p => p.items[0].tol = -1, "tol"], [p => p.items[0].tol = Infinity, "tol"], [p => p.items[0].tol = NaN, "tol"],
   [p => p.items[0].tol = "0.1", "tol"], [p => { p.items[0].answerKind = "comparison"; p.items[0].answer = "<"; }, "reduced"],
   [p => { p.items[0].type = "choice"; p.items[0].answerKind = "number"; }, "answerKind"]]
    .forEach(([f, part], i) => eq(mut(f).some(e => e.includes(part)), true, `validatePool: помилка №${i + 1} («${part}»)`));
  for (const fields of [{ answerKind: "comparison", answer: "<" }, { answerKind: "list", answer: [1, 2, 3] }, { answerKind: "factors", answer: "2^2 * 3" },
    { answer: "1/2", fractionOnly: true, srcPage: 25, adapted: true, unitForms: ["яблуко", "яблука", "яблук"] }, { answer: 3.14, tol: 0.1 }])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }), [], `validatePool: коректні нові поля ${JSON.stringify(fields)}`);
  for (const fields of [{ answerKind: "list", answer: [1, 1] }, { answerKind: "factors", answer: "4*3" }, { answerKind: "comparison", answer: "≤" }, { answer: Infinity }])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }).some(e => e.includes("answer")), true, `validatePool: некоректна відповідь ${JSON.stringify(fields)}`);
}

/* Класовий контекст: міграція, 6 → 7 → 6, повторний тест і старі результати. */
{
  const d6 = { ...clone(D), id: "dg6", grade: 6 }, d7 = { ...clone(D), id: "dg7", grade: 7 };
  const S = { ...fresh(), grade: 6, diagRun: { dg6: { 0: OK }, dg7: { 1: BAD } }, lessons: { a1: { done: true } }, seen: { "pool:i": 1 }, srs: { a1: { box: 2, due: "2026-10-20" } } };
  const dataBefore = JSON.stringify([S.diagRun, S.lessons, S.seen, S.srs]);
  S.plan.math = { diag: "dg6", steps: [{ l: "a1", src: "err", done: false }], known: ["x1"] };
  const ctx = grade => ({ grade, diags: [d6, d7], hasLesson: id => id !== "future" });
  const old = L.planFor(S, "math", ctx(6));
  eq(old.grade, 6, "context: legacy plan derives grade from diagnostic");
  eq(S.planByGrade.math[6] === old, true, "context: migration preserves original plan");
  S.grade = 7;
  eq(L.planFor(S, "math", ctx(7)), undefined, "context: no grade 6 plan in grade 7");
  eq(L.isKnown(S, "math", "x1", ctx(7)), false, "context: known does not leak to grade 7");
  L.finishDiag(S, "math", d7, {}, ctx(7));
  eq(S.plan.math.steps.some(st => st.src === "err"), false, "context: grade 7 test does not inherit grade 6 errors");
  S.plan.math.known = ["only7"];
  L.syncPlan(S, "math", [{ l: "future", n: 3, of: 4 }, { l: "grade7", n: 2, of: 3 }], "2026-10-16", ctx(7));
  eq(S.plan.math.steps.some(st => st.l === "future"), false, "context: syncPlan filters invalid recommendations");
  S.grade = 6;
  eq(L.planFor(S, "math", ctx(6)) === old, true, "context: grade 6 plan restored");
  eq(L.isKnown(S, "math", "only7", ctx(6)), false, "context: grade 7 known does not leak back");
  L.lessonDone(S, "math", "a1", 1, "2026-10-16", ctx(6));
  eq(old.steps[0].done, true, "context: prerequisite closes active grade 6 step");
  const copy = clone(S);
  eq(L.planFor(copy, "math", ctx(7)).known, ["only7"], "context: grade 7 survives reload");
  eq(L.planFor(copy, "math", ctx(6)).steps[0].done, true, "context: grade 6 completion survives reload");
  eq(JSON.stringify([S.diagRun, S.lessons, S.seen, S.srs]), dataBefore, "context: partial tests, lessons, seen and SRS unchanged");
  const stale = { ...fresh(), grade: 7, plan: { math: { diag: "dg6", steps: [], known: ["old6"] } } };
  eq(L.planFor(stale, "math", ctx(7)), undefined, "context: legacy plan identified by diag even after profile switched");
  eq(L.planFor(stale, "math", ctx(6)).known, ["old6"], "context: legacy grade 6 plan retained");
  const lost = { ...fresh(), grade: 6, diag: { dg6: { done: true, date: "2026-10-13", res: { 0: BAD } } } };
  const rebuilt = L.planFor(lost, "math", ctx(6));
  eq(rebuilt.diag, "dg6", "context: missing plan rebuilt from saved result");
  eq(rebuilt.date, "2026-10-13", "context: reconstruction preserves original date");
  eq(rebuilt.steps.length > 0, true, "context: reconstruction restores prerequisites");
  const err = { ...fresh(), grade: 6, plan: { math: { grade: 6, steps: [{ l: "future", src: "err" }, { l: "valid", src: "err" }], known: [] } } };
  eq(L.finishDiag(err, "math", d6, {}, ctx(6)).steps.filter(st => st.src === "err").map(st => st.l), ["valid"], "context: retest keeps valid same-context errors only");
  const noDiag = { ...fresh(), grade: 6, plan: { math: { diag: null, steps: [], known: [] } } };
  L.planFor(noDiag, "math", ctx(6)); noDiag.grade = 7;
  eq(L.planFor(noDiag, "math", ctx(7)), undefined, "context: errors-only legacy plan remains at original grade");
  eq(L.planFor({ ...fresh(), grade: 6 }, "math", ctx(6)), undefined, "context: fresh profile has no invented plan");
}
/* Міжкласове тренування: пул з’явився пізніше, майбутні/непройдені теми, SRS. */
{
  const S = { grade: 6, lessons: {}, seen: {}, srs: {} };
  const c = { sections: [
    { id: "s5", grade: 5, lessons: [{ id: "pre5" }, { id: "closed5" }] },
    { id: "s6", grade: 6, lessons: [{ id: "current6" }] },
    { id: "s7", grade: 7, lessons: [{ id: "future7" }] }], pools: [] };
  const pool = (id, section, ls) => ({ id, section, items: ls.map((lesson, i) => ({ id: "i" + i, lesson, lvl: 1 })) });
  const previous = pool("p5", "s5", ["pre5", "closed5"]);
  c.pools.push(previous, pool("p6", "s6", ["current6"]), pool("p7", "s7", ["future7"]));
  eq(L.practiceItems(S, c).map(it => it.lesson), ["current6"], "practice context: older uncompleted and future topics excluded");
  S.lessons.pre5 = { done: true }; S.lessons.future7 = { done: true }; S.unlockAll = true;
  eq(L.practiceItems(S, c).map(it => it.lesson), ["pre5", "current6"], "practice context: completed prerequisite available; future and uncompleted older excluded even with debug flag");
  S.unlockAll = false;
  c.pools.shift();
  eq(L.practiceItems(S, c).some(it => it.lesson === "pre5"), false, "practice context: absent prerequisite pool has no link");
  c.pools.push(previous);
  const items = L.practiceItems(S, c).filter(it => S.lessons[it.lesson]?.done);
  eq(items.map(it => it.key), ["p5:i0"], "practice context: late pool opens without repeating lesson");
  const picked = L.pickSession(S, { items, focus: "pre5", day: "2026-10-16" });
  eq(picked.map(it => it.lesson), ["pre5"], "practice context: selection includes older prerequisite");
  L.srsInit(S, "pre5", "2026-10-16");
  eq(L.isDue(S, "pre5", "2026-10-17"), true, "practice context: prerequisite becomes due");
  L.srsUpdate(S, [{ lesson: "pre5", ok: true }], "2026-10-17");
  eq(S.srs.pre5, { box: 1, due: "2026-10-20" }, "practice context: prerequisite SRS advances");
  eq(S.grade, 6, "practice context: grade never changed");
}

/* 12. baseline: діагностика наймолодшого класу без уроків 1–3 класів (engine-math-diag-g4-baseline) */
{ const lessons4 = new Map([["g1", { grade: 4 }], ["g2", { grade: 4 }], ["h1", { grade: 4 }], ["h2", { grade: 4 }], ["m5", { grade: 5 }]]);
  const sections4 = new Map([["sA", { grade: 4, lessons: ["g1", "g2"] }], ["sB", { grade: 4, lessons: ["h1", "h2"] }], ["sE", { grade: 4, lessons: [] }], ["s5", { grade: 5, lessons: ["m5"] }]]);
  const vc = { lessons: lessons4, sections: sections4, skills: { "m.num": 1 } };
  const d4 = { id: "dgb", grade: 4, title: "T", why: "W", status: "draft",
    topics: [{ id: "p", title: "P", kind: "pre", baseline: true, lessons: [], for: ["sA"] },
             { id: "q", title: "Q", kind: "pre", baseline: true, for: ["sB", "sA"] },
             { id: "k", title: "K", kind: "cur", lessons: ["g1"] }],
    items: [{ topic: "p", type: "number", sk: "m.num", title: "p1" }, { topic: "q", type: "number", sk: "m.num", title: "q1" },
            { topic: "p", type: "number", sk: "m.num", title: "p2" }, { topic: "q", type: "number", sk: "m.num", title: "q2" },
            { topic: "k", type: "number", sk: "m.num", title: "k1" }] };
  eq(L.validate(d4, vc), [], "baseline validate: коректний тест 4 класу → []");
  const bad = (mut, sub, what) => { const d = clone(d4); mut(d); const E = L.validate(d, vc); eq(E.length === 1 && E[0].includes(sub), true, `baseline validate: ${what} (отримано ${JSON.stringify(E)})`); };
  eq((() => { const d = clone(d4); d.topics[0].lessons = ["g1"]; return L.validate(d, vc).some(e => e.includes("не має lessons")); })(), true, "baseline validate: baseline з уроком");
  bad(d => { d.topics[0].baseline = 1; }, "baseline має бути true", "baseline не boolean true");
  bad(d => { d.topics[2].baseline = true; }, "лише для kind: pre", "baseline для cur");
  bad(d => { delete d.topics[0].for; }, "потребує for", "baseline без for");
  bad(d => { d.topics[0].for = ["sE"]; }, "немає уроків", "baseline веде в розділ без уроків");
  bad(d => { d.items[0].lesson = "g1"; }, "lesson «g1» має бути одним з уроків теми", "lesson на завданні baseline");
  bad(d => { delete d.topics[1].baseline; }, "lessons — 1–2", "звичайна pre без lessons, як і раніше, помилка");
  // в предметі є молодші класи → baseline заборонено (не обхід перевірки класу)
  const d5 = clone(d4); d5.id = "dg5b"; d5.grade = 5; d5.topics = [{ id: "p", title: "P", kind: "pre", baseline: true, for: ["s5"] }, { id: "k", title: "K", kind: "cur", lessons: ["m5"] }];
  d5.items = [{ topic: "p", type: "number", sk: "m.num", title: "p1" }, { topic: "p", type: "number", sk: "m.num", title: "p2" }, { topic: "k", type: "number", sk: "m.num", title: "k1" }];
  eq(L.validate(d5, vc).some(e => e.includes("baseline заборонено")), true, "baseline validate: заборонено, якщо є уроки молодших класів");

  const ctx4 = { week: 1, sections: [{ id: "sA", weeks: [1, 6], lessons: ["g1", "g2"] }, { id: "sB", weeks: [7, 12], lessons: ["h1", "h2"] }] };
  // усе правильно
  const all = { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK }, pOk = L.buildPlan(d4, all, ctx4), lvOk = L.level(d4, pOk.topics);
  eq([pOk.steps, pOk.base, pOk.known, lvOk.k, lvOk.base], [[], [], ["g1"], 2, 0], "baseline: усе правильно → без кроків і прогалин, «Міцна база», known");
  // усе пропущено: прогалини видно, «Міцної бази» немає, кроків-уроків немає, є перший урок найтерміновішого розділу
  const skip = { 0: SKIP, 1: SKIP, 4: SKIP }, pS = L.buildPlan(d4, skip, ctx4), lvS = L.level(d4, pS.topics);
  eq(pS.topics, { p: "gap", q: "gap", k: "new" }, "baseline: усе пропущено → обидві теми gap");
  eq([lvS.k, lvS.gaps, lvS.base, lvS.title], [0, 2, 2, "Почнемо з основ"], "baseline: усе пропущено → не «Міцна база»");
  eq(lvS.text.includes("з учителем або дорослим"), true, "baseline: текст радить потренувати з дорослим, а не неіснуючий урок");
  eq(pS.steps, [], "baseline: без вигаданих кроків-уроків");
  eq(pS.base, [{ topic: "p", why: "gap", l: "g1" }, { topic: "q", why: "gap", l: "g1" }], "baseline: q веде в найтерміновіший розділ із for (sA), а не за порядком for");
  eq(L.buildPlan(d4, skip, { ...ctx4, hasLesson: l => l !== "g1" }).base[0].l, "g2", "baseline: недоступний урок пропускається");
  eq(L.buildPlan(d4, skip, {}).base.map(b => b.l), [null, null], "baseline: без уроків розділу → l: null, не битий id");
  // змішано: p засвоєно, q — хитко
  const mix = { 0: OK, 1: OK, 2: OK, 3: BAD, 4: BAD }, pM = L.buildPlan(d4, mix, ctx4), lvM = L.level(d4, pM.topics);
  eq([pM.topics.p, pM.topics.q, pM.base.map(b => b.topic + ":" + b.why).join(), lvM.k, lvM.ok, lvM.shaky], ["ok", "shaky", "q:shaky", 1, 1, 1], "baseline: змішаний результат (1,5 з 2 → «Добра база»)");
  // перехід до першого уроку не закриває прогалину; новий тест — так
  const S = fresh(); const fp = L.finishDiag(S, "math", d4, skip, { ...ctx4, day: "2026-10-30" });
  eq(L.lessonDone(S, "math", "g1", 1, "2026-10-30").closed, [], "baseline: пройдений перший урок не закриває baseline");
  eq(S.plan.math.base.length, 2, "baseline: прогалини лишаються в плані до нового тесту");
  eq(L.todo(fp), [], "baseline: todo порожній");
  eq(L.finishDiag(S, "math", d4, all, ctx4).base, [], "baseline: новий тест закриває прогалини");
  // помилки уроків поряд із baseline: syncPlan працює, base не губиться
  L.finishDiag(S, "math", d4, skip, ctx4); L.syncPlan(S, "math", [{ l: "g2", n: 2, of: 3 }], "2026-10-30");
  eq([S.plan.math.base.length, L.todo(S.plan.math).map(s => s.l)], [2, ["g2"]], "baseline: err-крок додається, base лишається");
  // змішаний тест (звичайна pre + baseline): текст як для звичайних прогалин
  const dm = { topics: [{ id: "a", kind: "pre", lessons: ["x"] }, { id: "b", kind: "pre", baseline: true }] };
  eq(L.level(dm, { a: "gap", b: "gap" }).text.includes("пройти ще раз"), true, "baseline: є прогалина з уроком → звичайний текст");
}

console.log(`\n${n} перевірок, ${fails ? fails + " з помилками" : "усе гаразд"}`);
if (fails) process.exit(1);
