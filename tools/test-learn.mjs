#!/usr/bin/env node
// Слід · модульні тести персоналізації (app/learn.js): діагностика, план, повторювані помилки, валідатор тесту.
// Запуск: node tools/test-learn.mjs   (без залежностей; дані синтетичні; лише правила SK_RETAG звіряються з реальним контентом)
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), ctx, { filename: "app/learn.js" });
const L = ctx.SLID_LEARN;
/* Межа роботи перевірки — лічильником кроків, а не стіночним часом (engine-learn-list-prefixes-p3: флейк «< 1 с» під навантаженням).
   FZ — learn.js із замороженим Date.now: годинник-запобіжник ніколи не спрацьовує, тож вердикт і зупинку дають лише кроки й межі
   розміру. bounded: перевірка завершилась, годинник не спрацював, кроків ≤ STEP_MAX + 2·STEP_GRANT (повна межа і два поновлення
   після переходу на числове порівняння; пара coordinates2 ділить STEP_MAX навпіл) — тобто робота обмежена лічильником. */
const FZ = (() => { const FDate = class extends Date {}; FDate.now = () => 0; const c = { console, Date: FDate }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c, { filename: "app/learn.js" }); return c.SLID_LEARN; })();
// Плюс один щедрий ліміт стіночного часу (5 с на запис; найважчий зараз ≈ 0,7 с): ловить необмежену роботу поза spend() (рев'ю P3-1),
// а під навантаженням не флейкає — запас ≈ 7×.
const WALL_MS = 5000;
const bounded = (s, v) => { const t0 = performance.now(), r = FZ.checkAns(s, v), ms = performance.now() - t0, w = FZ.work(); return { r, w: { ...w, ms: Math.round(ms) }, ok: !w.clock && w.steps <= w.max + 2 * w.grant && ms < WALL_MS }; };
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
  eq(S.diag.dg, { done: true, date: "2026-10-13", res: { 0: BAD, 3: BAD }, topics: p.topics, rev: 1 }, "finishDiag: запис у S.diag (rev — редакція тесту)");
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
   [p => p.items[0].answerKind = "matrix", "answerKind"], [p => p.items[0].fractionOnly = 1, "fractionOnly"], [p => p.items[0].mixed = "true", "mixed"],
   [p => p.items[0].reduced = "true", "reduced"], [p => p.items[0].tol = -1, "tol"], [p => p.items[0].tol = Infinity, "tol"], [p => p.items[0].tol = NaN, "tol"],
   [p => p.items[0].tol = "0.1", "tol"], [p => { p.items[0].answerKind = "comparison"; p.items[0].answer = "<"; }, "reduced"],
   [p => { p.items[0].type = "choice"; p.items[0].answerKind = "number"; }, "answerKind"]]
    .forEach(([f, part], i) => eq(mut(f).some(e => e.includes(part)), true, `validatePool: помилка №${i + 1} («${part}»)`));
  for (const fields of [{ answerKind: "comparison", answer: "<" }, { answerKind: "list", answer: [1, 2, 3] }, { answerKind: "factors", answer: "2^2 * 3" },
    { answer: "1/2", fractionOnly: true, srcPage: 25, adapted: true, unitForms: ["яблуко", "яблука", "яблук"] }, { answer: 3.14, tol: 0.1 }])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }), [], `validatePool: коректні нові поля ${JSON.stringify(fields)}`);
  for (const fields of [{ answerKind: "list", answer: [1, 1] }, { answerKind: "factors", answer: "4*3" }, { answerKind: "comparison", answer: "≤" }, { answer: Infinity }])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }).some(e => e.includes("answer")), true, `validatePool: некоректна відповідь ${JSON.stringify(fields)}`);
  // символьні формати пулів 7–11 класів (engine-math-pool-answer-formats)
  for (const fields of [{ answerKind: "ratio", answer: "2 : 3", reduced: true }, { answerKind: "ratio", answer: [1, 3] }, { answerKind: "coordinates2", answer: "(3; -2)" },
    { answerKind: "coordinates2", answer: [1.5, -2] }, { answerKind: "coordinates3", answer: "(1; -2; 3)" }, { answerKind: "exactRoot", answer: "2√3" }, { answerKind: "exactRoot", answer: "16π/3" },
    { answerKind: "list", answer: "(-1 ± √5)/2" }, { answerKind: "intervalSet", answer: "(-∞; 1] ∪ [4; +∞)" }, { answerKind: "intervalSet", answer: "∅" },
    { answerKind: "expression", answer: "3a - 2b + 5", form: "expanded" }, { answerKind: "expression", answer: "(x - 2)(x + 2)", form: "factored" },
    { answerKind: "expression", answer: "(a + 1)/(a - 1)", form: "reduced" }, { answerKind: "expression", answer: "tg α", form: "simplified" },
    { answerKind: "expression", answer: "(x - 2)^2 + (y + 1)^2 = 9" }, { answerKind: "periodicSet", answer: "(-1)^k · π/6 + πk" }, { answerKind: "periodicSet", answer: ["π/2 + πk"] }])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }), [], `validatePool: коректний формат ${JSON.stringify(fields)}`);
  for (const [fields, part] of [[{ answerKind: "ratio", answer: "4 : 6", reduced: true }, "answer"], [{ answerKind: "ratio", answer: "2 : -3" }, "answer"],
    [{ answerKind: "coordinates2", answer: "(1; 2; 3)" }, "answer"], [{ answerKind: "coordinates3", answer: [1, 2] }, "answer"], [{ answerKind: "exactRoot", answer: "√12" }, "answer"],
    [{ answerKind: "exactRoot", answer: "5" }, "exactRoot"], [{ answerKind: "exactRoot", answer: "√(1+√2)" }, "answer"], [{ answerKind: "intervalSet", answer: "[-∞; 2)" }, "answer"],
    [{ answerKind: "intervalSet", answer: "(5; 2)" }, "answer"], [{ answerKind: "expression", answer: "x +" }, "answer"], [{ answerKind: "expression", answer: "(x+1)^2", form: "expanded" }, "answer"],
    [{ answerKind: "expression", answer: "x + 1", form: "short" }, "form"], [{ answerKind: "expression", answer: "y = 2x", form: "expanded" }, "form"],
    [{ answerKind: "number", answer: 2, form: "expanded" }, "form"], [{ answerKind: "periodicSet", answer: "π/6" }, "answer"], [{ answerKind: "periodicSet", answer: "π/6 + 2πt" }, "answer"],
    [{ answerKind: "coordinates2", answer: "(1; 2)", mixed: true }, "mixed"], [{ answerKind: "expression", answer: "x", reduced: true }, "reduced"]])
    eq(mut(p => { delete p.items[0].reduced; Object.assign(p.items[0], fields); }).some(e => e.includes(part)), true, `validatePool: некоректний формат ${JSON.stringify(fields)} («${part}»)`);
}

// ---------- символьні формати: еквівалентні й неправильні записи ----------
{ const K = (answerKind, answer, extra = {}) => ({ answerKind, answer, ...extra });
  const cases = [
    // відношення: рівні відношення, порядок, натуральні члени без спільного дільника лише з reduced
    [K("ratio", "2 : 3"), "4 : 6", "ok"], [K("ratio", "2 : 3"), "0,4 : 0,6", "ok"], [K("ratio", "2 : 3"), "2/3 : 1", "ok"], [K("ratio", "2 : 3"), "3 : 2", "bad"],
    [K("ratio", "2 : 3"), "2/3", "bad"], [K("ratio", "2 : 3"), "-2 : -3", "bad"], [K("ratio", "2 : 3"), "2 : 3 : 1", "bad"], [K("ratio", "2 : 3", { reduced: true }), "4 : 6", "form"],
    [K("ratio", "2 : 3", { reduced: true }), "2 : 3", "ok"], [K("ratio", "2 : 3", { reduced: true }), "1 : 1,5", "form"], [K("ratio", [1, 3], { reduced: true }), "1∶3", "ok"], [K("ratio", "2 : 3 : 5"), "4 : 6 : 10", "ok"], [K("ratio", "2 : 3 : 5"), "4 : 6 : 11", "bad"],
    // впорядкована пара/трійка: порядок і знак, кома лише без «;», десяткова кома з «;»
    [K("coordinates2", "(3; -2)"), "(3; −2)", "ok"], [K("coordinates2", "(3; -2)"), "A(3;-2)", "ok"], [K("coordinates2", "(3; -2)"), "3; -2", "ok"], [K("coordinates2", "(3; -2)"), "(3, -2)", "ok"],
    [K("coordinates2", "(3; -2)"), "(-2; 3)", "bad"], [K("coordinates2", "(3; -2)"), "(3; 2)", "bad"], [K("coordinates2", "(3; -2)"), "(3; -2; 0)", "bad"], [K("coordinates2", "(3; -2)"), "3", "bad"], [K("coordinates2", "(3; -2)"), "(3; -2", "bad"],
    [K("coordinates2", [1.5, 2]), "(1,5; 2)", "ok"], [K("coordinates2", [1.5, 2]), "(3/2; 2)", "ok"], [K("coordinates2", [1.5, 2]), "(1,5, 2)", "bad"], [K("coordinates2", "(√2; -√2)"), "(√2; -√8/2)", "form"],
    [K("coordinates3", "(1; -2; 3)"), "(1; −2; 3)", "ok"], [K("coordinates3", "(1; -2; 3)"), "(1; 3; -2)", "bad"], [K("coordinates3", "(1; -2; 3)"), "(1; -2)", "bad"],
    // точні корені й π: значення точне, наближення не зараховується, корінь спрощено
    [K("exactRoot", "2√3"), "2√3", "ok"], [K("exactRoot", "2√3"), "2sqrt(3)", "ok"], [K("exactRoot", "2√3"), "√3·2", "ok"], [K("exactRoot", "2√3"), "√12", "form"], [K("exactRoot", "2√3"), "3,464", "bad"], [K("exactRoot", "2√3"), "3√2", "bad"],
    [K("exactRoot", "√2/2"), "1/√2", "form"], [K("exactRoot", "√2/2"), "0,5√2", "ok"], [K("exactRoot", "-√3/3"), "−√3/3", "ok"], [K("exactRoot", "-√3/3"), "√3/3", "bad"],
    [K("exactRoot", "16π/3"), "16/3 · π", "ok"], [K("exactRoot", "16π/3"), "5 1/3π", "bad"], [K("exactRoot", "16π/3"), "16,755", "bad"], [K("exactRoot", "4π"), "4pi", "ok"],
    [K("exactRoot", "3 + 2√5"), "2√5 + 3", "ok"], [K("exactRoot", "(3 + √5)/2"), "1,5 + √5/2", "ok"], [K("exactRoot", "2∛3"), "∛24", "form"], [K("exactRoot", "2∛3"), "2∛3", "ok"], [K("exactRoot", "√2"), "∜4", "form"],
    [K("exactRoot", "√2"), "√2 + x - x", "bad"], [K("exactRoot", "√2"), "√-2", "bad"], [K("exactRoot", "√2"), "", "bad"],
    // список із коренями квадратного рівняння: обидві гілки, порядок довільний, ± розгортається
    [K("list", "2 ± √3"), "2 - √3; 2 + √3", "ok"], [K("list", "2 ± √3"), "2 + √3", "bad"], [K("list", "(-1 ± √5)/2"), "(−1 + √5)/2; (−1 − √5)/2", "ok"], [K("list", "2 ± √3"), "2 ± √12/2", "form"], [K("list", "2 ± √3"), "3,73; 0,27", "bad"],
    // проміжки: відкриті/закриті межі, об'єднання, точки, нескінченність лише з круглою дужкою
    [K("intervalSet", "(-∞; 3]"), "(−∞; 3]", "ok"], [K("intervalSet", "(-∞; 3]"), "x ∈ (-∞;3]", "ok"], [K("intervalSet", "(-∞; 3]"), "(-∞; 3)", "bad"], [K("intervalSet", "(-∞; 3]"), "[3; +∞)", "bad"],
    [K("intervalSet", "(-∞; -1) ∪ (3; +∞)"), "(3; ∞) ∪ (-∞; -1)", "ok"], [K("intervalSet", "(-∞; -1) ∪ (3; +∞)"), "(-∞; -1) U (3; +∞)", "ok"], [K("intervalSet", "(-∞; -1) ∪ (3; +∞)"), "(-1; 3)", "bad"],
    [K("intervalSet", "(-∞; 5]"), "(-∞; 2) ∪ [2; 5]", "ok"], [K("intervalSet", "(-∞; 5]"), "(-∞; 2) ∪ (2; 5]", "bad"], [K("intervalSet", "(-∞; 1] ∪ {3}"), "{3} ∪ (-∞; 1]", "ok"], [K("intervalSet", "(-∞; 1] ∪ {3}"), "(-∞; 1]", "bad"],
    [K("intervalSet", "[1,5; 2)"), "[1,5; 2)", "ok"], [K("intervalSet", "[1,5; 2)"), "[3/2; 2)", "ok"], [K("intervalSet", "(2; 5)"), "(5; 2)", "bad"], [K("intervalSet", "(2; 5)"), "[-∞; 5)", "bad"], [K("intervalSet", "(-√3; √3)"), "(−√3; √3)", "ok"],
    [K("intervalSet", "(-√3; √3)"), "(-1,73; 1,73)", "bad"], [K("intervalSet", "∅"), "∅", "ok"], [K("intervalSet", "∅"), "{}", "ok"], [K("intervalSet", "R"), "(-∞; +∞)", "ok"], [K("intervalSet", "{2}"), "[2; 2]", "ok"], [K("intervalSet", "(0; +∞)"), "x > 0", "bad"],
    // періодичні множини: серії з k ∈ ℤ, ±, (−1)^k, інша літера параметра; наближення й одна точка не зараховуються
    [K("periodicSet", "±π/3 + 2πk"), "π/3 + 2πk; -π/3 + 2πk", "ok"], [K("periodicSet", "±π/3 + 2πk"), "x = ±π/3 + 2πn, n ∈ Z", "ok"], [K("periodicSet", "±π/3 + 2πk"), "π/3 + 2πk", "bad"],
    [K("periodicSet", "(-1)^k · π/6 + πk"), "π/6 + 2πk; 5π/6 + 2πk", "ok"], [K("periodicSet", "(-1)^k · π/6 + πk"), "π/6 + πk", "bad"], [K("periodicSet", "π/2 + πk"), "-π/2 + πk, k ∈ ℤ", "ok"],
    [K("periodicSet", "π/2 + πk"), "π/2 + 2πk", "bad"], [K("periodicSet", "π/2 + πk"), "1,5708 + πk", "bad"], [K("periodicSet", "π/2 + πk"), "π/2", "bad"], [K("periodicSet", "πk/2"), "πk; π/2 + πk", "ok"], [K("periodicSet", "πk"), "πk + x", "bad"],
    // вирази: тотожність без eval, форма за ключем
    [K("expression", "3a - 2b + 5", { form: "expanded" }), "5 − 2b + 3a", "ok"], [K("expression", "3a - 2b + 5", { form: "expanded" }), "3(a + 1) - 2b + 2", "form"], [K("expression", "3a - 2b + 5", { form: "expanded" }), "3a - 2b + 4", "bad"],
    [K("expression", "3a - 2b + 5", { form: "expanded" }), "a + 2a - 2b + 5", "form"], [K("expression", "x^2 - 4", { form: "expanded" }), "x² − 4", "ok"], [K("expression", "x^2 - 4", { form: "expanded" }), "x·x − 4", "form"],
    [K("expression", "(x - 2)(x + 2)", { form: "factored" }), "(x + 2)(x − 2)", "ok"], [K("expression", "(x - 2)(x + 2)", { form: "factored" }), "x^2 - 4", "form"], [K("expression", "2(x + 2)", { form: "factored" }), "2x + 4", "form"],
    [K("expression", "2x(x - 2)^2", { form: "factored" }), "2x(x − 2)(x − 2)", "ok"], [K("expression", "2x(x - 2)^2", { form: "factored" }), "2x(x^2 - 4x + 4)", "form"], [K("expression", "2x(x - 2)^2", { form: "factored" }), "-2x(2 - x)(x - 2)", "ok"],
    [K("expression", "(a + 1)/(a - 1)", { form: "reduced" }), "(a + 1)/(a − 1)", "ok"], [K("expression", "(a + 1)/(a - 1)", { form: "reduced" }), "(a^2 - 1)/(a - 1)^2", "form"], [K("expression", "(a + 1)/(a - 1)", { form: "reduced" }), "(a - 1)/(a + 1)", "bad"],
    [K("expression", "tg α", { form: "simplified" }), "sin α / cos α", "form"], [K("expression", "tg α", { form: "simplified" }), "tgα", "ok"], [K("expression", "2 sin x cos x"), "sin 2x", "ok"], [K("expression", "cos^2 x - sin^2 x"), "cos 2x", "ok"],
    [K("expression", "6x^2 - 2"), "f'(x) = 6x² − 2", "ok"], [K("expression", "6x^2 - 2"), "6x^2 - 2,0001", "bad"], [K("expression", "x^3 + C"), "F(x) = x^3 + C", "ok"], [K("expression", "x^3 + C"), "x^3", "bad"],
    [K("expression", "(x - 2)^2 + (y + 1)^2 = 9"), "x² − 4x + y² + 2y − 4 = 0", "ok"], [K("expression", "(x - 2)^2 + (y + 1)^2 = 9"), "(x - 2)^2 + (y - 1)^2 = 9", "bad"], [K("expression", "(x - 2)^2 + (y + 1)^2 = 9"), "(x - 2)^2 + (y + 1)^2", "bad"],
    [K("expression", "y = 2x + 1"), "2x + 1", "ok"], [K("expression", "y = 2x + 1"), "2y = 4x + 2", "ok"], [K("expression", "y = 2x + 1"), "y = 2x - 1", "bad"], [K("expression", "2x + 1"), "y = 2x + 1", "ok"],
    [K("expression", "log_2 7"), "log_2(7)", "ok"], [K("expression", "log_2 7"), "2,807", "bad"], [K("expression", "|x|"), "√(x^2)", "ok"], [K("expression", "x"), "√(x^2)", "bad"], [K("expression", "a^5"), "a^2 · a^3", "ok"],
    [K("expression", "x^(1/3)"), "∛x", "ok"], [K("expression", "x + 1"), "alert(1)", "bad"], [K("expression", "x + 1"), "constructor", "bad"], [K("expression", "x + 1"), "x + 1;", "bad"], [K("expression", "x + 1"), "", "bad"], [K("expression", "x + 1"), "x^99999", "bad"],
    [K("expression", "x + 1", { form: "nonsense" }), "x + 1", "bad"], [K("expression", "x + 1"), "(".repeat(300) + "x", "bad"]
  ];
  cases.forEach(([s, v, expected]) => eq(L.checkAns(s, v), expected, `checkAns ${s.answerKind}${s.form ? "/" + s.form : ""}: ${JSON.stringify(s.answer)} ← «${v}»`));
  // ключ сам проходить перевірку; підказки «form» конкретні
  eq(L.checkAns(K("coordinates2", [3, -2]), [3, -2]), "ok", "checkAns: масив координат як ключ");
  eq(L.formHint(K("ratio", "2 : 3", { reduced: true }), "4 : 6").includes("натуральними"), true, "formHint: відношення");
  eq(L.formHint(K("exactRoot", "2√3"), "√12").includes("з-під кореня"), true, "formHint: корінь");
  eq(L.formHint(K("expression", "x^2 - 4", { form: "expanded" }), "x·x - 4").includes("Зведи подібні"), true, "formHint: стандартний вигляд без дужок — «зведи подібні» (QA 7 кл. D-4)");
  eq(L.formHint(K("expression", "x^2 - 4", { form: "expanded" }), "(x - 2)(x + 2)").includes("Розкрий дужки"), true, "formHint: стандартний вигляд з дужками — «розкрий дужки»");
  eq(L.formHint({ answer: "2/5", fractionOnly: true }, "0,4"), "Значення правильне. Запиши відповідь звичайним дробом.", "formHint: чинний текст числа");
  eq([L.ansText(K("coordinates2", [3, -2])), L.ansText(K("ratio", [2, 3])), L.ansText(K("periodicSet", "πk")), L.ansText(K("list", ["2 + √3", "2 - √3"]))],
    ["(3; -2)", "2 : 3", "πk, k ∈ ℤ", "2 + √3; 2 - √3"], "ansText: показ ключа");
  eq(L.ANSWER_KINDS, ["number", "comparison", "list", "factors", "divrem", "ratio", "coordinates2", "coordinates3", "exactRoot", "intervalSet", "expression", "periodicSet", "time", "quantity"], "ANSWER_KINDS: чинні 4 + divrem + 7 символьних + time, quantity");
}

// ---------- після незалежного рев’ю 9c7696b: наближення, числовий множник, арифметика в елементах, канонічні корені, час ----------
{ const K = (answerKind, answer, extra = {}) => ({ answerKind, answer, ...extra });
  const cases = [
    // P1-1: десяткові наближення з 7–12 знаками не зараховуються; точні десяткові — так
    [K("periodicSet", "arctg 2 + πk"), "1,1071487 + πk", "bad"], [K("periodicSet", "arctg 2 + πk"), "arctg 2 + πk", "ok"], [K("periodicSet", "π/6 + 2πk"), "0,5235988 + 2πk", "bad"],
    [K("periodicSet", "(-1)^k · π/6 + πk"), "(-1)^k · 0,52359877559 + πk", "bad"], [K("periodicSet", "π/2 + πk"), "π/2 + πk + 0,000000001", "bad"], [K("periodicSet", "π/2 + πk"), "0,5π + πk", "ok"],
    [K("expression", "√2·x"), "1,41421356237x", "bad"], [K("expression", "x/3"), "0,3333333333x", "bad"], [K("expression", "πx"), "3,14159265359x", "bad"], [K("expression", "7√2"), "9,899494937", "bad"],
    [K("expression", "x"), "x + 0,00000000001", "bad"], [K("expression", "2 sin x"), "2,0000000001 sin x", "bad"], [K("expression", "x/2"), "0,5x", "ok"], [K("expression", "√2·x"), "x√2", "ok"],
    [K("expression", "sin 2x"), "2 sin x cos x", "ok"], [K("expression", "x^2 + y^2 = 4"), "2x^2 + 2y^2 - 8 = 0", "ok"],
    // P1-2: невинесений / нескорочений числовий множник
    [K("expression", "3x(x + 2)", { form: "factored" }), "x(3x + 6)", "form"], [K("expression", "3x(x + 2)", { form: "factored" }), "(3x + 6)·x", "form"], [K("expression", "5x(x - 2)", { form: "factored" }), "x(5x - 10)", "form"],
    [K("expression", "4(x + 1)(x - 1)", { form: "factored" }), "(2x + 2)(2x - 2)", "form"], [K("expression", "2(x + 3)", { form: "factored" }), "(2x + 6)·1", "form"], [K("expression", "2(x + 2)", { form: "factored" }), "4(0,5x + 1)", "form"],
    [K("expression", "(x - 1)(x + 1)", { form: "factored" }), "(x^2 - 1)^2/(x^2 - 1)", "form"], [K("expression", "3x(x + 2)", { form: "factored" }), "-3x(-x - 2)", "ok"],
    [K("expression", "2x/3", { form: "reduced" }), "6x/9", "form"], [K("expression", "(x + 1)/2", { form: "reduced" }), "(2x + 2)/4", "form"], [K("expression", "3a/(4b)", { form: "reduced" }), "6a/(8b)", "form"],
    [K("expression", "1/(x + 1)", { form: "reduced" }), "2/(2x + 2)", "form"], [K("expression", "2x/3", { form: "reduced" }), "2x/3", "ok"],
    // P2-1: без коренів у ключі елементи — лише числа, як у чинному list
    [K("list", [8, 56]), "32 - 24; 32 + 24", "bad"], [K("list", [8, 56]), "32 ± 24", "bad"], [K("list", [5, 6, 7, 8, 9]), "5; 6; 7; 8; 3·3", "bad"], [K("list", [1, 2]), "+1; 2", "bad"], [K("list", [1, 2]), "1; 2^1", "bad"],
    [K("coordinates2", "(3; -2)"), "((1 + 5)/2; (2 - 6)/2)", "bad"], [K("intervalSet", "[2; 5)"), "[6/3; 10:2)", "bad"], [K("coordinates2", "(3; -2)"), "(3 ; - 2)", "ok"],
    // P2-2: канонічна точна форма
    [K("exactRoot", "7√2"), "3√2 + 5√2 - √2", "form"], [K("exactRoot", "6√2"), "2√3·√6", "form"], [K("exactRoot", "2√3"), "√3 + √3", "form"], [K("exactRoot", "√3"), "√3·(2 - 1)", "form"],
    [K("exactRoot", "-(1 + √5)/2"), "-(1 + √5)/2", "ok"], [K("exactRoot", "0,5√2"), "0.5√2", "ok"], [K("list", "2 ± √3"), "2 + 1 - 1 + √3; 2 - √3", "form"],
    // P2-4, P3
    [K("expression", "2x", { form: "simplified" }), "x + x", "form"], [K("expression", "x^2", { form: "simplified" }), "x·x", "form"],
    [K("intervalSet", "(-∞; 1] ∪ [4; +∞)"), "(-∞ ; 1 ] ∪ [ 4 ; + ∞ )", "ok"], [K("intervalSet", "∅"), "Ø", "ok"], [K("periodicSet", "πk"), "πk, де k ∈ Z", "ok"], [K("periodicSet", "πk"), "πk; 27 + 0·k", "bad"]
  ];
  cases.forEach(([s, v, expected]) => eq(L.checkAns(s, v), expected, `рев’ю ${s.answerKind}${s.form ? "/" + s.form : ""}: ${JSON.stringify(s.answer)} ← «${v}»`));
  // P2-3: короткий запис не підвішує перевірку
  for (const [s, v] of [[K("exactRoot", "√2"), "(√2+√3+√5+√7+√11+√13+√17+√19+√23+√29+√31+√37+√41+√43)^12"], [K("periodicSet", "πk"), Array(12).fill("±1±1±1±1k").join(";")],
    [K("periodicSet", "πk"), Array(10).fill("±πk/7±1±2±3").join(";")], [K("expression", "x"), "(x+1)^12·(y+2)^12-(x+y)^12"], [K("expression", "x"), "(".repeat(60) + "x" + ")".repeat(60)]]) {
    const b = bounded(s, v); eq(b.ok, true, `межа кроків (не годинник): ${v.slice(0, 30)} — ${JSON.stringify(b.w)}`);
  }
  // повторне рев’ю 65cbcd5: P1-3 вкладені степені й великі числа — межа 2048 біт і час; P2-n1, P2-n2, P3
  for (const [s, v] of [[K("expression", "x"), "((((x+1)^12)^12)^12)^12"], [K("expression", "x"), "(((((x+1)^12)^12)^12)^12)^12"], [K("expression", "x"), "((((((((x^12)^12)^12)^12)^12)^12)^12)^12)^12"],
    [K("expression", "x"), "(((((((((9999999999999999^12)^12)^12)^12)^12)^12)^12)^12)^12)"], [K("exactRoot", "√2"), "((((9999999999999999/9999999999999997)^12)^12)^12)^12"],
    [K("expression", "x"), "(x+√2+√3+√5+√7+√11+√13)^12"], [K("expression", "(x+1)^12", { form: "factored" }), "(x+y+z+a+b+c+d+e+f+g+h)^12·(x+y+z+a+b+c+d+e+f+g+h)^12"],
    [K("periodicSet", "πk"), "((((k^12)^12)^12)^12)^12"], [K("list", "√2; √3"), Array(10).fill("(√2+√3+√5)^12").join(";")]]) {
    eq(L.checkAns(s, v), "bad", `великі числа → bad: ${v.slice(0, 30)}`); const b = bounded(s, v); eq([b.r, b.ok], ["bad", true], `межа кроків (не годинник): ${v.slice(0, 30)} — ${JSON.stringify(b.w)}`);
  }
  [[K("expression", "(2x - 1)(x + 1)", { form: "factored" }), "2(x - 0,5)(x + 1)", "ok"], [K("expression", "(2x - 1)(x + 1)", { form: "factored" }), "2(x - 1/2)(x + 1)", "ok"],
   [K("expression", "(x - 1/2)(x + 1)", { form: "factored" }), "(x - 0,5)(x + 1)", "ok"], [K("expression", "2(x + 2)", { form: "factored" }), "4(0,5x + 1)", "form"],
   [K("expression", "sin x(1 + cos x)", { form: "factored" }), "sin x(1 + cos x)", "ok"], [K("expression", "sin x(1 + cos x)", { form: "factored" }), "sin x + sin x cos x", "form"],
   [K("exactRoot", "2 + 2√5"), "2(1 + √5)", "ok"], [K("exactRoot", "-1 - √2"), "-(1 + √2)", "ok"], [K("exactRoot", "√3/3"), "(1/3)√3", "ok"], [K("exactRoot", "16π/3"), "(16/3)π", "ok"],
   [K("exactRoot", "2 + 2√5"), "2(1 + √5 + √5 - √5)", "form"], [K("expression", "sin x + 0,25"), "sin x + 0,250", "ok"],
   [K("periodicSet", "arctg 2 + πk"), "110714871779/100000000000 + πk", "bad"], [K("expression", "√2·sin x"), "sin x · 14142135624/10000000000", "bad"]]
    .forEach(([s, v, expected]) => eq(L.checkAns(s, v), expected, `повторне рев’ю ${s.answerKind}${s.form ? "/" + s.form : ""}: ${JSON.stringify(s.answer)} ← «${v}»`));
  eq(L.validatePool({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }], items: [{ id: "a", lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], answerKind: "expression", answer: "(x - 1/2)(x + 1)", form: "factored" }] },
    { sections: new Map([["s", { grade: 8, lessons: ["l"] }]]), skills: { num: {} } }), [], "validatePool: ключ factored із дробовим коренем (x − 1/2)");
  const vp = it => L.validatePool({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }], items: [{ id: "a", lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], ...it }] },
    { sections: new Map([["s", { grade: 7, lessons: ["l"] }]]), skills: { num: {} } }).length > 0;
  for (const it of [K("exactRoot", "√3 + √3"), K("exactRoot", "√2·√3"), K("exactRoot", "π - π + √2"), K("intervalSet", "(-∞; 1] ∪ [1; 2]"), K("expression", "x", { form: "factored" }), K("expression", "x + x", { form: "simplified" })])
    eq(vp(it), true, `validatePool: неканонічний ключ ${JSON.stringify(it.answer)} ${it.form || ""}`);
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

/* 12. Ділення з остачею: answerKind divrem */
{ const s = { answerKind: "divrem", answer: [3, 2] };
  for (const v of ["3 ост. 2", "3 (ост. 2)", "3 ост 2", "3ост2", "3 ост, 2", "3 (ОСТ. 2)", "  3   ост.  2 ", "3 ост. 2.", "3 (ост. 2).", "3 ( ост . 2 )", "3 oст. 2", "3 ocт. 2"]) eq(L.checkAns(s, v), "ok", `divrem: «${v}» приймається`);
  for (const v of ["3 ост. 3", "4 ост. 2", "2 ост. 3", "3; 2", "3, 2", "3 ост. ", "ост. 2", "3 (ост. 2", "3,5 ост. 2", "-3 ост. 2", "3 ост. -2", "", "3 2"]) eq(L.checkAns(s, v), "bad", `divrem: «${v}» не приймається`);
  eq(L.checkAns(s, "3"), "form", "divrem: лише правильна частка при остачі 2 — дописати остачу");
  eq(L.checkAns(s, "4"), "bad", "divrem: лише неправильна частка — bad");
  eq([L.checkAns({ answerKind: "divrem", answer: [5, 0] }, "5"), L.checkAns({ answerKind: "divrem", answer: [5, 0] }, "5 ост. 0")], ["ok", "ok"], "divrem: остача 0 — можна без неї");
  eq(L.checkAns({ answerKind: "divrem", answer: [1234, 5] }, "1 234 ост. 5"), "ok", "divrem: розряди через пробіл");
  eq(L.checkAns({ answerKind: "divrem", answer: "3 ост. 2" }, "3 ост. 2"), "bad", "divrem: ключ лише масивом");
  eq(L.checkAns({ answerKind: "divrem", answer: [3, 2.5] }, "3 ост. 2"), "bad", "divrem: ключ — цілі числа");
  eq(L.checkAns({ answer: 3 }, "3 ост. 2"), "bad", "number: запис з остачею не число");
  eq(L.parseDivrem([3, 2]), { q: 3, r: 2 }, "parseDivrem: масив");
  eq(/остачу/.test(L.formHint(s, "3")), true, "divrem formHint: «допиши остачу» (після злиття — через спільний formHint)");
  eq(L.ansText(s), "3 (ост. 2)", "divrem ansText");
  const sec = new Map([["s4", { grade: 4, lessons: ["l4"] }]]);
  const pool = { id: "pd", section: "s4", status: "draft", sources: [{ id: "g", title: "G", url: "https://x" }],
    items: [{ id: "a", lesson: "l4", lvl: 1, sk: "num", src: "g №1", type: "answer", title: "17 : 5", answerKind: "divrem", answer: [3, 2], steps: ["5 · 3 = 15, 17 − 15 = 2."] }] };
  eq(L.validatePool(pool, { sections: sec, skills: { num: 1 } }), [], "validatePool: divrem дозволено");
  const bad = (mut, sub, what) => { const p = clone(pool); mut(p.items[0]); const E = L.validatePool(p, { sections: sec, skills: { num: 1 } }); eq(E.some(e => e.includes(sub)), true, `validatePool divrem: ${what} (${JSON.stringify(E)})`); };
  bad(it => { it.answer = "3 ост. 2"; }, "не читається", "ключ рядком");
  bad(it => { it.answer = [3]; }, "не читається", "ключ з одного числа");
  bad(it => { it.type = "choice"; }, "answerKind", "divrem не для choice");
  bad(it => { it.reduced = true; }, "reduced", "reduced лише для числової");
  bad(it => { it.tol = 1; }, "tol", "tol лише для числової");
  bad(it => { it.unitForms = ["цукерка", "цукерки", "цукерок"]; }, "unitForms не для divrem", "unitForms для divrem");
}

/* 11. Baseline 4 класу: опори 1–3 класів без уроків у застосунку */
{ const B = { id: "dgb", grade: 4, title: "T", why: "W", status: "draft",
    topics: [{ id: "p1", title: "P1", kind: "pre", baseline: true, lessons: [], for: ["s2"] },
             { id: "p2", title: "P2", kind: "pre", baseline: true, for: ["s2", "s1"] },
             { id: "c1", title: "C1", kind: "cur", lessons: ["s1a"] }],
    items: [{ topic: "p1", type: "number", sk: "m.add", title: "q1" }, { topic: "p2", type: "choice", sk: "m.add", title: "q2" },
            { topic: "p1", type: "number", sk: "m.add", title: "q3" }, { topic: "p2", type: "choice", sk: "m.add", title: "q4" },
            { topic: "c1", type: "multi", sk: "m.cmp", title: "q5" }] };
  const vc = { lessons: new Map([["s1a", { grade: 4 }], ["s1b", { grade: 4 }], ["s2a", { grade: 4 }]]),
    sections: new Map([["s1", { grade: 4 }], ["s2", { grade: 4 }]]), skills: { "m.cmp": 1, "m.add": 1 } };
  eq(L.validate(B, vc), [], "baseline validate: коректний тест 4 класу → []");
  const bad = (mut, sub, what, ctx = vc) => { const d = clone(B); mut(d); const E = L.validate(d, ctx); eq(E.some(e => e.includes(sub)), true, `baseline validate: ${what} (є «${sub}»; отримано ${JSON.stringify(E)})`); };
  bad(d => { d.topics[0].lessons = ["s1a"]; }, "не має lessons", "baseline з уроком");
  bad(d => { d.topics[0].lessons = ["zz3"]; }, "не має lessons", "baseline з вигаданим уроком");
  bad(d => { delete d.topics[0].for; }, "потребує for", "baseline без for");
  bad(d => { d.topics[0].for = []; }, "потребує for", "baseline з порожнім for");
  bad(d => { d.topics[2].baseline = true; }, "лише для kind: pre", "baseline у cur");
  bad(d => { d.topics[0].baseline = "yes"; }, "baseline має бути boolean", "baseline не boolean");
  bad(d => { d.items[0].lesson = "s1a"; }, "lesson «s1a» має бути одним з уроків теми", "item.lesson у baseline-темі");
  bad(d => { d.topics[0].baseline = false; }, "1–2 id уроків", "звичайна pre без уроків, як і раніше, — помилка");
  bad(d => { d.topics[0].for = ["s9"]; }, "немає розділу s9", "baseline for — невідомий розділ");
  const withYounger = { ...vc, lessons: new Map([...vc.lessons, ["g3x", { grade: 3 }]]) };
  bad(() => {}, "baseline заборонено", "baseline, коли в предмета є уроки молодшого класу", withYounger);
  const plain = clone(B); plain.topics.slice(0, 2).forEach(t => { delete t.baseline; t.lessons = ["g3x"]; });
  eq(L.validate(plain, withYounger), [], "baseline validate: звичайні pre з уроками молодшого класу запобіжник не зачіпає");

  const secs = [{ id: "s1", weeks: [1, 4], lessons: ["s1a", "s1b"] }, { id: "s2", weeks: [5, 8], lessons: ["s2a"] }];
  const ctx = { week: 1, sections: secs, hasLesson: () => true, day: "2026-10-21" };
  const all = r => Object.fromEntries(B.items.map((_, i) => [i, r]));
  // усе правильно
  const okP = L.buildPlan(B, all(OK), ctx);
  eq([okP.steps, okP.base, okP.known], [[], [], ["s1a"]], "baseline plan: усе правильно → без кроків і прогалин, cur знайомий");
  eq(L.level(B, okP.topics).title, "Міцна база", "baseline level: усе правильно → Міцна база");
  const one = L.level({ ...B, topics: B.topics.concat(Array.from({ length: 6 }, (_, i) => ({ id: "q" + i, kind: "pre", baseline: true }))) }, { ...okP.topics, p1: "gap", ...Object.fromEntries(Array.from({ length: 6 }, (_, i) => ["q" + i, "ok"])) });
  eq([one.title, /учителем або дорослим/.test(one.text)], ["Міцна база", true], "baseline level: Міцна база з однією baseline-прогалиною радить дорослого");
  eq(/Можна сміливо/.test(L.level(B, okP.topics).text), true, "baseline level: без прогалин — звичайний текст Міцної бази");
  // усе пропущено: прогалини видно, «Міцна база» неможлива
  const skip = { 0: SKIP, 1: SKIP, 4: SKIP };
  eq(L.nextItem(B, skip), -1, "baseline: після «Ще не знаю» на базових складніші не показуються");
  const skP = L.buildPlan(B, skip, ctx), skL = L.level(B, skP.topics);
  eq(skP.steps, [], "baseline plan: усе пропущено → кроків до вигаданих уроків немає");
  eq(skP.base, [{ topic: "p2", why: "gap", next: "s1a" }, { topic: "p1", why: "gap", next: "s2a" }], "baseline plan: обидві прогалини видно, найтерміновіша перша, next — перший урок розділу");
  eq([skL.share, skL.gaps, skL.k, skL.title, skL.base], [0, 2, 0, "Почнемо з основ", true], "baseline level: усе пропущено → не Міцна база");
  eq(/учителем або дорослим/.test(skL.text), true, "baseline level: текст радить дорослого, а не «пройти ще раз»");
  eq(/пройти ще раз/.test(L.level(D, L.topicStatus(D, {})).text), true, "level: звичайний тест зберігає старий текст");
  // змішаний: p1 засвоєно, p2 хитко
  const mix = { 0: OK, 1: OK, 2: OK, 3: BAD, 4: BAD };
  const mxP = L.buildPlan(B, mix, ctx);
  eq([mxP.topics.p1, mxP.topics.p2, mxP.topics.c1], ["ok", "shaky", "new"], "baseline mixed: ok / shaky / new");
  eq([mxP.steps, mxP.base, mxP.known], [[], [{ topic: "p2", why: "shaky", next: "s1a" }], []], "baseline mixed: лише хитка опора в base");
  eq(L.level(B, mxP.topics).k, 1, "baseline mixed: 1,5 з 2 → Добра база");
  // терміновість: s1 минув → next з поточного s2; недоступний урок → наступний доступний розділ
  eq(L.buildPlan(B, skip, { ...ctx, week: 6 }).base.map(b => b.next), ["s2a", "s2a"], "baseline next: розділ, що вже минув, — у кінець");
  eq(L.buildPlan(B, skip, { ...ctx, hasLesson: l => l !== "s1a" }).base[0].next, "s1b", "baseline next: перший доступний урок розділу");
  eq(L.buildPlan(B, skip, { ...ctx, sections: [] }).base.map(b => b.next), [null, null], "baseline next: без розділів — null, без битого id");
  // збереження: уроки не закривають baseline, повторний тест — так
  const S = fresh(); S.grade = 4; L.finishDiag(S, "math", B, skip, ctx);
  eq(S.plan.math.base.length, 2, "baseline finishDiag: base збережено");
  eq(L.todo(S.plan.math), [], "baseline finishDiag: base не є кроками плану");
  L.lessonDone(S, "math", "s1a", 1, "2026-10-22", { grade: 4 });
  eq(S.plan.math.base.length, 2, "baseline: пройдений перший урок класу не закриває прогалину");
  L.finishDiag(S, "math", B, all(OK), { ...ctx, grade: 4 });
  eq([S.plan.math.base, S.planByGrade.math[4].base], [[], []], "baseline: повторний тест перераховує base");
  // відновлення плану зі старого результату тесту містить base
  const R = fresh(); R.grade = 4; R.diag.dgb = { done: true, date: "2026-10-20", res: skip };
  eq(L.planFor(R, "math", { ...ctx, grade: 4, diags: [B] }).base.length, 2, "baseline planFor: відновлений план має base");
  // старий план без base (dg6) лишається робочим
  eq(L.todo({ steps: [{ l: "a", done: false }] }).length, 1, "старий план без base: todo працює");
}

/* 11б. Baseline після злиття PR #6 і main: перевірки з PR #6, яких бракувало main, і сумісність збережених планів з полем l */
{ const B = { id: "dgb", grade: 4, title: "T", why: "W", status: "draft",
    topics: [{ id: "p", title: "P", kind: "pre", baseline: true, lessons: [], for: ["sA"] },
             { id: "q", title: "Q", kind: "pre", baseline: true, for: ["sB", "sA"] },
             { id: "k", title: "K", kind: "cur", lessons: ["g1"] }],
    items: [{ topic: "p", type: "number", sk: "m.num", title: "p1" }, { topic: "q", type: "number", sk: "m.num", title: "q1" },
            { topic: "p", type: "number", sk: "m.num", title: "p2" }, { topic: "q", type: "number", sk: "m.num", title: "q2" },
            { topic: "k", type: "number", sk: "m.num", title: "k1" }] };
  // validate.mjs передає розділи свого предмета разом зі списком уроків (без boss)
  const vc = { lessons: new Map([["g1", { grade: 4 }], ["g2", { grade: 4 }], ["h1", { grade: 4 }], ["h2", { grade: 4 }]]),
    sections: new Map([["sA", { grade: 4, lessons: ["g1", "g2"] }], ["sB", { grade: 4, lessons: ["h1", "h2"] }], ["sE", { grade: 4, lessons: [] }]]), skills: { "m.num": 1 } };
  eq(L.validate(B, vc), [], "baseline validate (зі списком уроків розділу): коректний тест → []");
  const d = clone(B); d.topics[0].for = ["sE"];
  eq(L.validate(d, vc).some(e => e.includes("у розділі sE немає уроків")), true, "baseline validate: for веде в розділ без уроків — помилка");
  const ctx4 = { week: 1, sections: [{ id: "sA", weeks: [1, 6], lessons: ["g1", "g2"] }, { id: "sB", weeks: [7, 12], lessons: ["h1", "h2"] }] };
  const skip = { 0: SKIP, 1: SKIP, 4: SKIP };
  eq(L.buildPlan(B, skip, ctx4).base, [{ topic: "p", why: "gap", next: "g1" }, { topic: "q", why: "gap", next: "g1" }], "baseline: q веде в найтерміновіший розділ із for (sA), а не за порядком for");
  // помилки уроків поряд із baseline: syncPlan працює, base не губиться
  const S = fresh(); L.finishDiag(S, "math", B, skip, ctx4); L.syncPlan(S, "math", [{ l: "g2", n: 2, of: 3 }], "2026-10-30");
  eq([S.plan.math.base.length, L.todo(S.plan.math).map(s => s.l)], [2, ["g2"]], "baseline: err-крок додається, base лишається");
  // змішаний тест (звичайна pre + baseline): текст як для звичайних прогалин
  const dm = { topics: [{ id: "a", kind: "pre", lessons: ["x"] }, { id: "b", kind: "pre", baseline: true }] };
  eq([L.level(dm, { a: "gap", b: "gap" }).text.includes("пройти ще раз"), L.level(dm, { a: "gap", b: "gap" }).base], [true, false], "baseline: є прогалина з уроком → звичайний текст");
  // план, збережений версією PR #6 (base[].l), читається як next ?? l
  const O = fresh(); O.grade = 4; O.planByGrade = { math: { 4: { diag: "dgb", grade: 4, topics: {}, steps: [], known: [], base: [{ topic: "p", why: "gap", l: "g1" }, { topic: "q", why: "shaky", l: null }] } } };
  eq(L.planFor(O, "math", { grade: 4, diags: [B] }).base.map(b => b.next), ["g1", null], "baseline compat: старий план з l → next");
  eq(L.planFor(O, "math", { grade: 4, diags: [B] }).base[0].l, "g1", "baseline compat: поле l не видаляється");
  const N = fresh(); N.grade = 4; N.planByGrade = { math: { 4: { diag: "dgb", grade: 4, topics: {}, steps: [], known: [], base: [{ topic: "p", why: "gap", next: "g2", l: "g1" }] } } };
  eq(L.planFor(N, "math", { grade: 4, diags: [B] }).base[0].next, "g2", "baseline compat: next має перевагу над l");
  const U = fresh(); U.plan = { math: { diag: "dgb", steps: [], known: [], base: [{ topic: "p", why: "gap", l: "g1" }] } }; delete U.grade;
  eq(L.planFor(U, "math", {}).base[0].next, "g1", "baseline compat: план без класу теж читається");
}

/* 13. Плеєр після QA 4–5 кл. (engine-player-qa-fixes): джерело без подвоєння сторінки, кнопки числового поля, divrem-записи */
{ eq(L.srcRef("№1", 56), "№1, с. 56", "srcRef: сторінку дописано");
  eq(L.srcRef("с. 56, №1", 56), "с. 56, №1", "srcRef: сторінка вже є в src — не подвоюємо");
  eq(L.srcRef("№3, с.18", 18), "№3, с.18", "srcRef: «с.18» без пробілу — теж сторінка");
  eq(L.srcRef("№12(1)", undefined), "№12(1)", "srcRef: без srcPage — як є");
  eq(L.srcRef("", 7), "с. 7", "srcRef: лише сторінка");
  eq(L.srcRef("вправа 3", 9), "вправа 3, с. 9", "srcRef: «с.» у слові не плутаємо зі сторінкою");
  const K = (s, g, sg) => { const k = L.numberKeys(s, g, sg); return [k.minus, k.frac, k.dec]; };
  eq(K({ answer: 3826 }, 4), [false, false, false], "numberKeys: 4 кл., ціле — без «−» і «/»");
  eq(K({ answer: "3/5", fractionOnly: true }, 4), [false, true, false], "numberKeys: 4 кл., дробовий ключ — «/»");
  eq(K({ answer: 2, mixed: true }, 4), [false, true, false], "numberKeys: 4 кл., прапорець mixed — «/»");
  eq(K({ answer: -3 }, 4), [true, false, false], "numberKeys: від'ємний ключ — «−»");
  eq(K({ answer: 5, signed: true }, 4), [true, false, false], "numberKeys: signed — «−»");
  eq(K({ answer: 5 }, 4, true), [true, false, false], "numberKeys: розділ зі знаком — «−»");
  eq(K({ answer: 2.5 }, 4), [false, false, true], "numberKeys: 4 кл., десятковий — підказка про кому");
  eq(K({ answer: 12 }, 5), [false, true, false], "numberKeys: 5 кл. — дроби завжди (не видає вигляд відповіді)");
  eq(K({ answer: 12 }, 6), [true, true, false], "numberKeys: 6 кл. — «−» і дроби завжди");
  eq(K({ answer: "−1/2" }, 4), [true, true, false], "numberKeys: типографський мінус у ключі");
  const s = { answerKind: "divrem", answer: [4, 5] };
  for (const v of ["4, ост. 5", "4 остача 5", "4, остача 5", "4 (остача 5)", "4 остача: 5", "4,ост.5", "4 ост. 5"]) eq(L.checkAns(s, v), "ok", `divrem: «${v}» приймається`);
  for (const v of ["4, 5", "4 і 5", "4; 5", "4 остача", "4,5 ост. 5", "4 остачі 5 6"]) eq(L.checkAns(s, v), "bad", `divrem: «${v}» не приймається`);
  const ctx = { sections: new Map([["s1", { grade: 4, lessons: ["a"] }]]), skills: { ops: {} } };
  const pool = it => L.validatePool({ id: "p", section: "s1", status: "draft", sources: [{ id: "bk", title: "Підручник", url: "https://example.org" }],
    items: [{ id: "t1", lesson: "a", lvl: 1, sk: "ops", src: "bk №1", type: "answer", title: "x", answer: 5, steps: ["крок"], ...it }] }, ctx);
  eq(pool({ signed: true }), [], "validatePool: signed — boolean для числової answer");
  eq(pool({ signed: "так" }).some(e => e.includes("signed")), true, "validatePool: signed не boolean — помилка");
  eq(pool({ signed: true, answerKind: "comparison", answer: "<" }).some(e => e.includes("signed")), true, "validatePool: signed лише для number");
}

// answerSig: друга спроба не витрачається на той самий запис іншими символами (engine-player-focus-followup)
{ const S = (s, a, b) => L.answerSig(s, a) === L.answerSig(s, b), num = { answer: 7 };
  for (const v of ["5,", "05", " 5 ", "5,0", "5."]) eq(S(num, "5", v), true, `answerSig: «${v}» = «5»`);
  for (const v of ["6", "-5", "5/1", "50", "0,5"]) eq(S(num, "5", v), false, `answerSig: «${v}» ≠ «5»`);
  eq(S(num, "19 735", "19735"), true, "answerSig: розряди через пробіл — те саме число");
  eq(S(num, "2/4", "1/2"), false, "answerSig: нескоротний і скоротний дріб — різний запис (reduced → form)");
  eq(S(num, "2/4", " 2/4 "), true, "answerSig: пробіли довкола дробу");
  eq(S(num, "7 /3", "7/3"), false, "answerSig: пробіл у дробу лишаємо — від нього залежить перевірка mixed");
  eq(S(num, "2 1/3", "7/3"), false, "answerSig: мішане число й неправильний дріб — різні (mixed → form)");
  eq(S(num, "2 1/3", "21/3"), false, "answerSig: «2 1/3» ≠ «21/3»");
  eq(S(num, "0,6", "3/5"), false, "answerSig: десятковий і звичайний дріб — різний запис (fractionOnly)");
  const dr = { answerKind: "divrem", answer: [4, 5] };
  eq(S(dr, "4 ост. 6", "4, остача 6"), true, "answerSig divrem: той самий запис іншими словами");
  eq(S(dr, "4 ост. 6", "4 ост. 5"), false, "answerSig divrem: інша остача");
  eq(S(dr, "4", "4 ост. 0"), false, "answerSig divrem: лише частка ≠ остача 0");
  const ls = { answerKind: "list", answer: "1; 2" };
  eq(S(ls, "1;3", "1 ; 3"), true, "answerSig list: пробіли біля «;»");
  eq(S(ls, "1; 3", "3; 1"), false, "answerSig list: інший порядок — інший запис (перевіряє checkAns)");
  const ex = { answerKind: "expression", answer: "x^2 + 1" };
  eq(S(ex, "x^2+2", "x ^ 2 + 2"), true, "answerSig expression: пробіли біля знаків дій");
  eq(S(ex, "x^2+2", "x^2+3"), false, "answerSig expression: інший вираз");
  eq(S({ answerKind: "coordinates2", answer: [1, 2] }, "(1;−3)", "( 1 ; -3 )"), true, "answerSig coordinates: «−» і пробіли");
  eq(S({ answerKind: "comparison", answer: "<" }, ">", " > "), true, "answerSig comparison: пробіли");
  eq(S({ answerKind: "comparison", answer: "<" }, ">", "="), false, "answerSig comparison: інший знак");
}

/* coordinates2 з компонентами-виразами (engine-coordinates2-expression, №13.5(4): A(m; n), B(p; k) → (p − m; k − n)). */
{ const K = (answer, extra = {}) => ({ type: "answer", answerKind: "coordinates2", answer, ...extra }), key = K("(p - m; k - n)");
  [["(p - m; k - n)", "ok"], ["(-m + p; k - n)", "ok"], ["(p − m; −n + k)", "ok"], ["p - m; k - n", "ok"], ["M(p-m; k-n)", "ok"], ["((p - m); (k - n))", "ok"], ["(p - m, k - n)", "ok"],
   ["(m - p; k - n)", "bad"], ["(k - n; p - m)", "bad"], ["(p - m; n - k)", "bad"], ["(p - m)", "bad"], ["(p - m; k - n; 0)", "bad"], ["(p; k)", "bad"], ["(x; y)", "bad"], ["(1; 2)", "bad"],
   ["(p - 1,0000001m; k - n)", "bad"], ["(p - m + 0,0000001; k - n)", "bad"], ["(p - m = 0; k - n)", "bad"], ["(p - m; k - n", "bad"], ["", "bad"], ["(p - m; alert(1))", "bad"], ["k(m - n); 2", "bad"]]
    .forEach(([v, r]) => eq(L.checkAns(key, v), r, `coordinates2-вираз ${key.answer} ← «${v}»`));
  eq(L.checkAns(K(["p - m", "k - n"]), "(p - m; k - n)"), "ok", "coordinates2-вираз: ключ-масив");
  // форма — як у expression; числова компонента — як у числовому coordinates2 (без арифметики, корінь спрощено)
  const simp = K("(2a; b^2)", { form: "simplified" }), mix = K("(2a; √2)");
  [[simp, "(2a; b^2)", "ok"], [simp, "(a + a; b^2)", "form"], [simp, "(2a; b·b)", "form"], [simp, "(2a; b^3)", "bad"],
   [K("(a^2 - 1; b)", { form: "expanded" }), "((a - 1)(a + 1); b)", "form"], [K("((a - 1)(a + 1); 2b)", { form: "factored" }), "(a^2 - 1; 2b)", "form"],
   [mix, "(a·2; √2)", "ok"], [mix, "(2a; √8/2)", "form"], [mix, "(2a; 1,41)", "bad"], [mix, "(2a; 1 + √2 - 1)", "form"], [K("(2a; 3)"), "(2a; 1 + 2)", "bad"], [K("(2a; 3)"), "(2a; 6/2)", "ok"],
   [K("(2 sin x; 1)"), "(sin x + sin x; 1)", "ok"], [K("(√2·x; 1)"), "(1,41421356237x; 1)", "bad"], [K("(x; 1)", { form: "short" }), "(x; 1)", "bad"]]
    .forEach(([s, v, r]) => eq(L.checkAns(s, v), r, `coordinates2-вираз ${s.answer}${s.form ? "/" + s.form : ""} ← «${v}»`));
  eq(L.formHint(simp, "(a + a; b^2)"), "Вираз правильний, але його можна спростити.", "formHint coordinates2-вираз: підказка форми expression");
  eq(L.formHint(K("(2a; √2)", { form: "simplified" }), "(2a; √8/2)").includes("кореня"), true, "formHint coordinates2-вираз: неспрощений корінь — підказка про корені");
  eq(JSON.stringify(L.pairKey(key)), JSON.stringify([{ expr: true, vars: ["p", "m"], tidy: true, text: "p - m" }, { expr: true, vars: ["k", "n"], tidy: true, text: "k - n" }]), "pairKey: компоненти-вирази");
  eq([L.pairKey(K("(3; -2)")), L.pairKey(K([1.5, -2])), L.pairKey({ answerKind: "list", answer: "a; b" }), L.pairKey({ answerKind: "coordinates3", answer: "(a; b; c)" }), L.pairKey(K("(a; b; c)"))],
    [null, null, null, null, null], "pairKey: числовий ключ, інший формат, не дві компоненти — null");
  eq(L.pairKey(K("(a + a; b)", { form: "simplified" }))?.[0]?.tidy, false, "pairKey: неканонічний ключ — tidy false");
  // рев'ю P3-1: pairKey і formHint самі задають BUDGET — у свіжому модулі першим викликом числова компонента з коренем канонічна
  const fresh = () => { const c = { console }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); return c.SLID_LEARN; };
  eq(JSON.stringify(fresh().pairKey(K("(√6/2; p - m)")).map(c => c.tidy)), "[true,true]", "pairKey у свіжому модулі: (√6/2; p - m) — обидві компоненти канонічні");
  eq(fresh().formHint(K("(√6/2; p - m)", { form: "simplified" }), "(√6/2; p - m + p - p)"), "Вираз правильний, але його можна спростити.", "formHint у свіжому модулі: підказка форми виразу (вихід від BUDGET не залежить: компонента-вираз сама скидає бюджет)");
  // межі часу й біт: кожна компонента має половину з ~0,8 с; разом — менше 1 с
  for (const v of ["(((((x+1)^12)^12)^12)^12; ((((y+1)^12)^12)^12)^12)", "((x+√2+√3+√5+√7+√11+√13)^12; (x+√2+√3+√5+√7+√11+√13)^12)",
    "((((((((x^12)^12)^12)^12)^12)^12)^12)^12; (((((((9999999999999999^12)^12)^12)^12)^12)^12)^12)"]) {
    eq(L.checkAns(key, v), "bad", `coordinates2-вираз, великі числа → bad: ${v.slice(0, 30)}`); const b = bounded(key, v); eq([b.r, b.ok], ["bad", true], `coordinates2-вираз, межа кроків: ${v.slice(0, 30)} — ${JSON.stringify(b.w)}`);
  }
  { const b = bounded(K("((x + 1)^2; y)", { form: "factored" }), "((x+y+z+a+b+c+d+e+f+g+h)^12·(x+y+z+a+b+c+d+e+f+g+h)^12; (x+y+z+a+b+c+d+e+f+g+h)^12·(x+y+z+a+b+c+d+e+f+g+h)^12)");
    eq(b.ok, true, `coordinates2-вираз factored, межа кроків — ${JSON.stringify(b.w)}`); }
  // валідатор пулу: ключ розбирається й канонічний; form — лише для пари з виразом
  const vp = it => L.validatePool({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }], items: [{ id: "a", lesson: "l", lvl: 1, sk: "num", src: "b 1", title: "t", steps: ["s"], ...it }] },
    { sections: new Map([["s", { grade: 9, lessons: ["l"] }]]), skills: { num: {} } });
  for (const it of [key, K(["p - m", "k - n"]), K("(2a; b^2)", { form: "simplified" }), K("((a - 1)(a + 1); 2b)", { form: "factored" }), K("(2a; √2)"), K("(x/2; 3)")]) eq(vp(it), [], `validatePool: коректний ключ coordinates2-вираз ${JSON.stringify(it.answer)} ${it.form || ""}`);
  for (const [it, part] of [[K("(a + a; b)", { form: "simplified" }), "answer"], [K("(a^2 - 1; 2b)", { form: "factored" }), "добутком"], [K("(3; -2)", { form: "expanded" }), "form"],
    [K("(p - m; k - n)", { form: "short" }), "form"], [K("(p - m = 0; k)"), "рівнянням"], [K("(p - m; 1 + 2)"), "answer"], [K("(p - m; k - n; 0)"), "answer"], [K("(p - m; √8)"), "answer"], [K("(p - m; k +)"), "answer"]])
    eq(vp(it).some(e => e.includes(part)), true, `validatePool: помилка coordinates2-вираз ${JSON.stringify(it.answer)} ${it.form || ""} («${part}»)`);
}

/* Числові coordinates2 — побайтово як до розширення: знімок checkAns старого рушія (a12bfbd) на всіх ключах контенту й синтетичних. */
{ const snap = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/fixtures/coordinates2-numeric.json"), "utf8"));
  // навмисні зміни після знімка (engine-math-answer-formats-followup, P2-r1): нескорочений дріб із коренем — "form"
  const CHANGED = { [JSON.stringify(["(√2; -√2)", "(2·√2/2; -√2)"])]: "form" };
  let diff = 0, calls = 0, changed = 0;
  for (const c of snap.cases) {
    const it = { type: "answer", answerKind: "coordinates2", answer: c.answer, ...(c.form !== undefined ? { form: c.form } : {}) };
    if (L.pairKey(it) !== null) { diff++; console.log(`ПОМИЛКА знімок: числовий ключ ${JSON.stringify(c.answer)} пішов шляхом виразів`); }
    for (const [v, r0] of Object.entries(c.results)) { calls++; const r = CHANGED[JSON.stringify([c.answer, v])] ?? r0; if (r !== r0) changed++; const got = L.checkAns(it, v); if (got !== r) { diff++; console.log(`ПОМИЛКА знімок ${c.where} ${JSON.stringify(c.answer)} ← «${v}»: ${got}, було ${r}`); } }
    if (c.array !== null) { calls++; if (L.checkAns(it, c.answer) !== c.array) diff++; }
  }
  eq(diff, 0, `знімок числових coordinates2: ${snap.cases.length} ключів, ${calls} викликів без розбіжностей`);
  eq(changed, Object.keys(CHANGED).length, "знімок: кожна навмисна зміна справді є в знімку");
  eq(calls > 1500 && snap.cases.filter(c => c.where !== "synthetic").length >= 40, true, "знімок числових coordinates2 не порожній");
  // ключі реального контенту: кожен числовий ключ має бути в знімку (новий числовий ключ — перегенерувати знімок на старому рушії не вийде,
  // тож тоді досить, що він іде числовим шляхом: pairKey === null); ключ із виразами знімка не стосується
  const { loadContent } = await import("./lib.mjs");
  const real = loadContent().subjects.flatMap(s => (s.pools || []).flatMap(p => p.items).concat((s.diags || []).flatMap(d => d.items))).filter(it => it.answerKind === "coordinates2");
  const known = new Set(snap.cases.map(c => JSON.stringify(c.answer))), numeric = real.filter(it => L.pairKey(it) === null);
  eq(real.length >= 40 && numeric.filter(it => known.has(JSON.stringify(it.answer))).length >= 40, true, `ключі coordinates2 контенту в знімку: ${numeric.filter(it => known.has(JSON.stringify(it.answer))).length} з ${real.length}`);
}

/* Доробки форматів (engine-math-answer-formats-followup): одиниця в полі, нескорочений дріб із коренем, factored зі змінною
   в знаменнику, межа перевірки, підказки form/bad, ключ periodicSet, формат pairSym. */
{ const K = (answerKind, answer, extra = {}) => ({ answerKind, answer, ...extra });
  const N = (answer, extra = {}) => ({ answer, ...extra });
  [ // своя одиниця (unit, unitForms) — як без неї; після кожного елемента list; чужа — bad; без unit — без змін
    [N("7", { unit: "см" }), "7 см", "ok"], [N("7", { unit: "см" }), "7см", "ok"], [N("7", { unit: "см" }), "7 мм", "bad"], [N("7", { unit: "см" }), "7 см²", "bad"], [N("7"), "7 см", "bad"],
    [N("5", { unit: "м" }), "5 км", "bad"], [N("5", { unit: "м" }), "5 м", "ok"], [N("60", { unit: "грн" }), "60 грн", "ok"], [N("8", { unit: "%" }), "8 %", "ok"], [N("8", { unit: "%" }), "8%", "ok"],
    [N("12", { unit: "см²" }), "12 см²", "ok"], [N("12", { unit: "см²" }), "12 см2", "ok"], [N("12", { unit: "см²" }), "12 см^2", "ok"], [N("-3", { unit: "°C" }), "-3 °С", "ok"], [N("2,5", { unit: "кг" }), "2,5 кг", "ok"],
    [N("3", { unit: "яблука", unitForms: ["яблуко", "яблука", "яблук"] }), "3 яблука", "ok"], [N("3", { unit: "яблука", unitForms: ["яблуко", "яблука", "яблук"] }), "3 яблук", "ok"],
    [N("1/2", { unit: "кг", reduced: true }), "2/4 кг", "form"], [N("7", { unit: "см" }), "8 см", "bad"], [N("7", { unit: "см" }), "см 7", "bad"],
    [K("list", "70; 110", { unit: "°" }), "70°; 110°", "ok"], [K("list", "70; 110", { unit: "°" }), "110 °; 70", "ok"], [K("list", "70; 110", { unit: "°" }), "70°, 110°", "ok"], [K("list", "8; 40", { unit: "см" }), "8 см; 40 см", "ok"],
    [K("list", "70; 110", { unit: "°" }), "70°; 120°", "bad"], [K("list", "70; 110"), "70°; 110°", "bad"], [K("exactRoot", "2√3", { unit: "см" }), "2√3 см", "ok"], [K("exactRoot", "2√3", { unit: "см" }), "√12 см", "form"],
    [K("comparison", "<", { unit: "см" }), "< см", "bad"],
    // P2-r1: нескорочений дріб із коренем → form (list, exactRoot, coordinates2); скорочений — ok
    [K("exactRoot", "-3 + √14"), "(-6 + 2√14)/2", "form"], [K("exactRoot", "√2"), "2√2/2", "form"], [K("exactRoot", "(1 + √5)/2"), "2(1 + √5)/4", "form"], [K("exactRoot", "√3"), "(2/2)√3", "form"],
    [K("exactRoot", "8π/3"), "16π/6", "form"], [K("exactRoot", "1 + √5"), "(2 + 2√5)/2", "form"], [K("list", "1 ± √5"), "(2 ± 2√5)/2", "form"], [K("list", "1 ± √5"), "(2 + 2√5)/2; (2 - 2√5)/2", "form"],
    [K("list", "2 ± √3"), "(4 ± 2√3)/2", "form"], [K("coordinates2", "(1 + √2; 0)"), "((2 + 2√2)/2; 0)", "form"], [K("coordinates2", "(√2; 1)"), "(2√2/2; 1)", "form"],
    [K("exactRoot", "-3 + √14"), "-3 + √14", "ok"], [K("exactRoot", "(1 + √5)/2"), "(1 + √5)/2", "ok"], [K("exactRoot", "(3 + √5)/2"), "1,5 + √5/2", "ok"], [K("exactRoot", "√2/2"), "√2/2", "ok"],
    [K("exactRoot", "2 + 2√5"), "2(1 + √5)", "ok"], [K("exactRoot", "(2 + √5)/2"), "(2 + √5)/2", "ok"], [K("exactRoot", "2√3/3"), "2√3/3", "ok"], [K("list", "1 ± √5"), "1 ± √5", "ok"],
    // P3-r1: змінна в знаменнику множника — не розклад
    [K("expression", "3x(x + 2)", { form: "factored" }), "x^2(3 + 6/x)", "form"], [K("expression", "3x(x + 2)", { form: "factored" }), "3x(x + 2)", "ok"], [K("expression", "(x - 1)(x + 1)", { form: "factored" }), "x(x - 1/x)", "form"],
  ].forEach(([s, v, expected]) => eq(L.checkAns(s, v), expected, `доробки ${s.answerKind || "number"}${s.unit ? " [" + s.unit + "]" : ""}: ${JSON.stringify(s.answer)} ← «${v}»`));
  // підказки «form»
  const fh = (s, v) => L.formHint(s, v);
  eq(fh(K("exactRoot", "-3 + √14"), "(-6 + 2√14)/2").includes("Скороти дріб"), true, "formHint: нескорочений дріб із коренем — «скороти дріб»");
  eq(fh(K("list", "1 ± √5"), "(2 ± 2√5)/2").includes("Скороти дріб"), true, "formHint: list — «скороти дріб»");
  eq(fh(K("exactRoot", "2√3"), "√12").includes("з-під кореня"), true, "formHint: √12 — як і раніше, про корінь");
  eq(fh(K("expression", "2x^2 - 4x - 2", { form: "expanded" }), "3x^2 + 6x - 5 - x^2 - 10x + 3"), "Вираз правильний. Зведи подібні доданки й запиши многочлен стандартного вигляду.", "formHint expanded без дужок (pg7m3:b02)");
  eq(fh(K("expression", "2x^2 - 4x - 2", { form: "expanded" }), "2(x^2 - 2x - 1)"), "Вираз правильний. Розкрий дужки й зведи подібні доданки.", "formHint expanded з дужками");
  eq(fh(K("expression", "a^(-20)", { form: "simplified" }), "1/a^20"), "Вираз правильний. Запиши його одним степенем: основа, ^ і показник.", "formHint simplified, ключ-степінь (pg8m1:c04)");
  eq(fh(K("expression", "2x", { form: "simplified" }), "x + x"), "Вираз правильний, але його можна спростити.", "formHint simplified, ключ не степінь — як раніше");
  eq(fh(K("coordinates2", "(2a + 2; b)", { form: "expanded" }), "(a + a + 2; b)").includes("Зведи подібні"), true, "formHint coordinates2 expanded: дужки пари не рахуються дужками виразу");
  eq(fh(K("coordinates2", "(2a + 2; b)", { form: "expanded" }), "(2(a + 1); b)").includes("Розкрий дужки"), true, "formHint coordinates2 expanded: дужки в компоненті");
  // підказки «bad»: межа перевірки, чужа одиниця, знаменник-добуток без дужок; інакше null
  const bh = (s, v) => L.badHint(s, v);
  for (const [s, v] of [[K("expression", "x"), "((((x+1)^12)^12)^12)^12"], [K("exactRoot", "√2"), "(√2+√3+√5+√7+√11+√13+√17+√19+√23+√29+√31+√37+√41+√43)^12"], [K("expression", "x"), "(((((((((9999999999999999^12)^12)^12)^12)^12)^12)^12)^12)^12)"]])
    eq(bh(s, v), "Запис занадто складний для перевірки. Спрости його й спробуй ще раз.", `badHint межа: ${v.slice(0, 24)}`);
  eq(bh(N("7", { unit: "см" }), "7 мм"), "Перевір одиницю: тут відповідь записують у «см». Одиницю можна й не писати.", "badHint: чужа одиниця");
  eq(bh(K("list", "70; 110", { unit: "°" }), "70 см; 110 см")?.includes("«°»"), true, "badHint: чужа одиниця в list");
  eq(bh(K("expression", "k/(6p)", { form: "reduced" }), "k/6p"), "Знаменник-добуток візьми в дужки: 1/(3y), бо 1/3y — це y/3.", "badHint: k/6p (pg8m1:b02)");
  eq(bh(K("expression", "3a/(4b)", { form: "reduced" }), "3a/4b")?.includes("в дужки"), true, "badHint: 3a/4b");
  for (const [s, v] of [[K("expression", "k/(6p)", { form: "reduced" }), "k/(6p)"], [K("expression", "k/(6p)", { form: "reduced" }), "k/7p"], [K("expression", "x/2"), "x/3"], [N("7", { unit: "см" }), "8"], [N("7"), "7 мм"], [N("7", { unit: "см" }), "7 см"], [K("expression", "x"), "x^2"]])
    eq(bh(s, v), null, `badHint: звичайне повідомлення ${JSON.stringify(s.answer)} ← «${v}»`);
  // межа не змінює вердикт: checkAns однаковий, LIMIT із попередньої перевірки не просочується в наступну
  L.checkAns(K("expression", "x"), "((((x+1)^12)^12)^12)^12"); eq(L.badHint(K("expression", "x"), "x^2"), null, "badHint: LIMIT скидається кожною перевіркою");
  // answerSig: та сама відповідь зі своєю одиницею — той самий відбиток
  eq(L.answerSig(N("7", { unit: "см" }), "7 см") === L.answerSig(N("7", { unit: "см" }), "7"), true, "answerSig: «7 см» = «7» при unit «см»");
  eq(L.answerSig(N("7"), "7 см") === L.answerSig(N("7"), "7"), false, "answerSig: без unit — різні записи");
  // validatePool: ключ periodicSet, що сам не проходить, і ключ-наближення відхиляються (P3-r3)
  const vp = it => L.validatePool({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }], items: [{ id: "a", lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], ...it }] },
    { sections: new Map([["s", { grade: 10, lessons: ["l"] }]]), skills: { num: {} } });
  eq(vp(K("periodicSet", "1234567 + πk")).some(e => e.includes("не проходить")), true, "validatePool: periodicSet «1234567 + πk» сам не проходить");
  eq(vp(K("periodicSet", "0,5236 + πk")).some(e => e.includes("наближення")), true, "validatePool: periodicSet із десятковим наближенням у ключі");
  eq(vp(K("periodicSet", "arctg 2 + πk")), [], "validatePool: periodicSet arctg 2 + πk — коректний");
  eq(vp(K("periodicSet", "0,25 + πk")), [], "validatePool: periodicSet із точним десятковим (2 знаки)");
  eq(vp(K("exactRoot", "2√2/2")).length > 0, true, "validatePool: нескорочений ключ exactRoot відхиляється");
  // coordinates2 (рев'ю engine-coordinates2-expression P3-2): форма першої компоненти після переходу на числове порівняння —
  // з тим самим запасом, що в expression. Годинник: кожен виклик Date.now() — +10 мс.
  { const real = Date.now; let t = real();
    const slow = () => { const c = { console, Date: { now: () => (t += 10) } }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); return c.SLID_LEARN; };
    const S = slow();
    eq(S.checkAns(K("expression", "(p - m)/(p + m)", { form: "reduced" }), "(p - m)/(p + m)"), "ok", "повільний годинник: expression/reduced ok");
    eq(S.checkAns(K("coordinates2", "((p - m)/(p + m); k)", { form: "reduced" }), "((p - m)/(p + m); k)"), "ok", "повільний годинник: coordinates2/reduced ok (форма після вичерпаної половини часу)"); }
  // formHint одразу після checkAns не перевіряє пару вдруге (P3-5): результат той самий, що й зі свіжою перевіркою
  { const s = K("coordinates2", "(2a; b^2)", { form: "simplified" }), v = "(a + a; b^2)";
    eq(L.checkAns(s, v), "form", "pair cache: checkAns form"); eq(L.formHint(s, v), "Вираз правильний, але його можна спростити.", "pair cache: formHint з кешу");
    L.checkAns(s, "(2a; b^2)"); eq(L.formHint(s, v), "Вираз правильний, але його можна спростити.", "pair cache: інший запис — перевірка заново"); }
}

/* Перетегування sk у збереженому журналі помилок (engine-math-skill-sync) */
{ const fix = { id: "t1", rules: [["u1", "m.old", "m.new"], ["u2", "m.a", "m.b"]] };
  const S = { errs: [{ l: "u1", at: "u1", sk: "m.old", d: "2026-10-30" }, { l: "pre", at: "u1", sk: "m.old", d: "2026-10-30" },
    { l: "u1", at: "u1", sk: "m.other", d: "2026-10-30" }, { l: "u3", at: "u3", sk: "m.old", d: "2026-10-30" }, { l: "u2", sk: "m.a", d: "2026-10-30" }, { l: "u1", at: "u1", sk: null }],
    skw: { "m.old": "000" }, skills: { "m.old": { ok: 1, total: 4 } } };
  eq(L.migrateSk(S, fix), 3, "migrateSk: змінено записи за уроком at (і l, якщо at немає)");
  eq(S.errs.map(e => e.sk), ["m.new", "m.new", "m.other", "m.old", "m.b", null], "migrateSk: інша навичка й інший урок не чіпаються; помилка з pre — за at");
  eq([S.skw, S.skills], [{ "m.old": "" }, { "m.old": { ok: 1, total: 4 } }], "migrateSk: вікно старої навички з нуля (P2-1), лічильники «Прогрес» не змінюються");
  eq(S.skFix, ["t1"], "migrateSk: позначка виконаної міграції");
  S.errs.push({ l: "u1", at: "u1", sk: "m.old" });
  eq(L.migrateSk(S, fix), 0, "migrateSk: удруге не виконується");
  eq(S.errs.at(-1).sk, "m.old", "migrateSk: новий запис після міграції не чіпається");
  const E = {}; eq(L.migrateSk(E), 0, "migrateSk: порожній профіль"); eq(E.skFix, L.SK_MIGRATIONS.map(f => f.id), "migrateSk: порожній профіль позначено всіма міграціями");
  const U = { errs: [{ l: "u9", at: "u9", sk: "m.old" }], skw: { "m.old": "00", "m.other": "0" } };
  eq([L.migrateSk(U, fix), U.skw], [0, { "m.old": "00", "m.other": "0" }], "migrateSk: вікно скидається лише для навички, з якої щось перенесено");
  // рев'ю P2-1 (skw_stale): міграція → lessonDone перетегованого уроку → немає поради за старою навичкою
  const ord = id => ["g8m1l2", "g9m3l4", "g9m5l1", "g9m5l2", "g9m5l3"].indexOf(id);
  const mk = () => { const T = { mast: {}, errs: [], skw: {}, plan: {}, planByGrade: {}, grade: 9 };
    for (const l of ["g8m1l2", "g9m3l4", "g9m5l1"]) L.record(T, { l, at: l, sk: "math.expr", ok: false, day: "2026-10-30" }); return T; };
  const skillRecs = T => L.detect(T, { day: "2026-10-31", order: ord }).filter(r => r.why === "skill");
  { const T = mk(); L.lessonDone(T, "math", "g9m5l1", 1, "2026-10-31", { grade: 9 }); eq(skillRecs(T), [], "без міграції: lessonDone скидає вікно, поради немає"); }
  { const T = mk(); eq(L.migrateSk(T, L.SK_RETAG), 1, "міграція: g9m5l1 expr → num"); eq(T.skw["math.expr"], "", "міграція: вікно expr з нуля");
    L.lessonDone(T, "math", "g9m5l1", 1, "2026-10-31", { grade: 9 });
    eq(skillRecs(T), [], "міграція → lessonDone: немає поради за старою навичкою expr");
    // нові помилки ведуть до поради за новою навичкою
    for (const l of ["g9m5l1", "g9m5l2", "g9m5l3"]) L.record(T, { l, at: l, sk: "math.num", ok: false, day: "2026-10-31" });
    eq(skillRecs(T).map(r => [r.sk, r.l]), [["math.num", "g9m5l1"]], "після міграції порада — за новою навичкою num"); }
  // рев'ю P3-3: пошкоджений стан не валить міграцію
  for (const [what, X] of [["skFix — об'єкт", { skFix: {}, errs: [] }], ["skFix — рядок", { skFix: "x" }], ["errs — об'єкт", { errs: {} }],
    ["errs — рядок", { errs: "x" }], ["skw — null", { errs: [{ at: "u1", sk: "m.old" }], skw: null }], ["записи не об'єкти", { errs: [null, 5, "x", { at: "u1", sk: "m.old" }] }]]) {
    let r; try { r = L.migrateSk(X, fix); } catch (e) { r = "throw " + e.message; }
    eq(typeof r, "number", `migrateSk: пошкоджений стан (${what}) — без винятку`); eq(X.skFix, ["t1"], `migrateSk: пошкоджений стан (${what}) — позначено`);
  }
  for (const X of [null, undefined, 7]) { let r; try { r = L.migrateSk(X, fix); } catch (e) { r = "throw"; } eq(r, 0, `migrateSk(${X}) — 0`); }
}
/* Повнота SK_RETAG (рев'ю P3-5): знімок очікуваних правил — видалене чи змінене правило ловиться тут */
eq(L.SK_RETAG.id, "sk-2026-10-31b", "SK_RETAG: id редакції");
eq(L.SK_RETAG.rules.map(r => r.join(" ")).sort(), [
  "g4m1l3 math.num math.cmp", "g4m3l3 math.num math.div", "g8m1l4 math.expr math.func", "g8m3l2 math.expr math.num", "g9m3l4 math.func math.eq",
  "g9m5l1 math.expr math.num", "g9m5l2 math.expr math.num", "g9m5l3 math.expr math.num", "g9m6l2 math.geom math.meas", "ms0bl4 math.geom math.meas",
  "ms0l5 math.num math.expr", "ms3l1 math.frac math.pct", "ms3l2 math.part math.pct", "ms3l3 math.cmp math.data", "ms3l3 math.part math.data",
  "ms3l4 math.cmp math.data", "ms3l4 math.frac math.pct"], "SK_RETAG: знімок правил");
eq([L.SK_RETAG.prev.id, L.SK_RETAG.prev.rules.length], ["sk-2026-10-31", 13], "SK_RETAG: перша редакція (a7d2459) збережена як prev");
/* Профіль, що вже пройшов першу редакцію: додатково лише нові правила, старі не застосовуються вдруге */
{ const d = "2026-10-31";
  const S = { skFix: ["sk-2026-10-31"], skw: { "math.frac": "00", "math.num": "0" }, errs: [
    { l: "ms3l1", at: "ms3l1", sk: "math.frac", d },      // перша редакція: pct → frac (пул) — тепер назад у pct
    { l: "ms3l4", at: "ms3l4", sk: "math.cmp", d },       // boss — нове правило
    { l: "g4m1l3", at: "g4m1l3", sk: "math.num", d },     // спільне правило: уже застосовано, вдруге не чіпаємо
    { l: "g9m5l1", at: "g9m5l1", sk: "math.expr", d }] };
  eq(L.migrateSk(S), 2, "друга редакція після першої: змінено лише записи за новими правилами");
  eq(S.errs.map(e => e.sk), ["math.pct", "math.data", "math.num", "math.expr"], "друга редакція: спільні правила вдруге не застосовано");
  eq([S.skw, S.skFix], [{ "math.frac": "", "math.num": "0" }, ["sk-2026-10-31", "sk-2026-10-31b", "sk-2026-11-01"]], "друга редакція: вікно frac з нуля, num не чіпано; позначено (і третя міграція)");
  eq(L.migrateSk(S), 0, "друга редакція: удруге не виконується");
  const F = { errs: [{ l: "g4m1l3", at: "g4m1l3", sk: "math.num", d }, { l: "ms3l1", at: "ms3l1", sk: "math.frac", d }] };
  eq([L.migrateSk(F), F.errs.map(e => e.sk)], [2, ["math.cmp", "math.pct"]], "профіль без жодної редакції: усі чинні правила");
}
/* Правила SK_RETAG звірено з реальним контентом: в уроці at старого sk немає ні на екранах, ні в пулі, новий — є */
{ const { loadContent } = await import("./lib.mjs");
  const { subjects } = loadContent();
  for (const [at, from, to] of L.SK_MIGRATIONS.flatMap(f => f.rules)) {   // усі міграції: перша (…b) і sk-2026-11-01
    const [subj, f] = from.split("."), t = to.split(".")[1], c = subjects.find(s => s.id === subj);
    const lesson = c.sections.flatMap(s => s.lessons || []).find(l => l.id === at), items = (c.pools || []).flatMap(p => p.items).filter(it => it.lesson === at);
    eq(!!lesson && [...lesson.screens, ...items].some(x => x.sk === f), false, `SK_RETAG ${at}: старого ${f} у змісті немає`);
    eq((!items.length || items.some(it => it.sk === t)) && lesson.screens.some(s => s.sk === t), true, `SK_RETAG ${at}: новий ${t} є в уроці (і в пулі, якщо він є)`);
    eq(!!c.skills[f] && !!c.skills[t], true, `SK_RETAG ${at}: навички оголошено`);
  }
}
/* Редакції тесту (refine-math-diag-g6-coverage): заміна завдання на місці з rev, розпочаті й завершені тести, реальний dg6 і пули 6 кл. */
{ const R = clone(D); R.items[5].rev = 2; R.items[7].rev = 2;           // x і y (cur) замінено на місці
  eq([L.diagRev(D), L.diagRev(R), L.diagRev({ items: [{ rev: 3 }, { rev: 1.5 }, { rev: "4" }] }), L.diagRev({})], [1, 2, 3, 1], "diagRev: найбільший цілий rev ≥ 2, інакше 1");
  // старий розпочатий тест (без diagRunRev): вердикти замінених завдань відкидаються, решта й порядок — ні
  const S = { ...fresh(), diagRun: { dg: { 0: OK, 1: BAD, 2: OK, 3: OK, 5: OK } } };
  const r = L.resumeDiag(S, R);
  eq([r.rev, r.dropped, S.diagRun.dg, S.diagRunRev.dg, r.res === S.diagRun.dg], [2, [5], { 0: OK, 1: BAD, 2: OK, 3: OK }, 2, true], "resumeDiag: legacy-запуск — відкинуто лише x (5)");
  eq(L.nextItem(R, S.diagRun.dg), 5, "resumeDiag: замінене завдання покажуть знову, далі — як було");
  eq(L.resumeDiag(S, R).dropped, [], "resumeDiag: повторний виклик нічого не відкидає (ідемпотентно)");
  S.diagRun.dg[5] = BAD; eq(L.resumeDiag(S, R).dropped, [], "resumeDiag: відповідь на нову редакцію зберігається");
  eq(S.diagRun.dg, { 0: OK, 1: BAD, 2: OK, 3: OK, 5: BAD }, "resumeDiag: вердикт нової редакції не чіпається");
  // запуск у чинній редакції, порожній запуск, редакція 1 — без змін
  const S2 = { ...fresh(), diagRun: { dg: { 5: OK, 7: SKIP } }, diagRunRev: { dg: 2 } };
  eq([L.resumeDiag(S2, R).dropped, S2.diagRun.dg], [[], { 5: OK, 7: SKIP }], "resumeDiag: запуск чинної редакції не змінюється");
  const S3 = fresh(); eq([L.resumeDiag(S3, R).dropped, S3.diagRun.dg, S3.diagRunRev.dg], [[], {}, 2], "resumeDiag: новий запуск отримує чинну редакцію");
  const S4 = { ...fresh(), diagRun: { dg: { 0: OK, 5: OK } } };
  eq([L.resumeDiag(S4, D).dropped, S4.diagRun.dg, S4.diagRunRev.dg], [[], { 0: OK, 5: OK }, 1], "resumeDiag: тест без rev — старі запуски як були");
  const S5 = { diagRun: null }; eq(L.resumeDiag(S5, R).res, {}, "resumeDiag: пошкоджений стан не падає");
  // завершений старий результат не перераховується: теми, план і known — як отримано, до повторного тесту
  const old = { ...fresh(), grade: 6, diag: { dg: { done: true, date: "2026-10-13", res: { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 5: OK, 6: OK, 7: OK }, topics: L.topicStatus(D, { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 5: OK, 6: OK, 7: OK }) } } };
  const before = JSON.stringify(old.diag);
  const rebuilt = L.planFor(old, "math", { grade: 6, diags: [{ ...R, grade: 6 }] });
  eq([rebuilt.known, JSON.stringify(old.diag) === before], [["x1", "y1", "y2"], true], "старий завершений результат: known і запис S.diag збережено");
  L.resumeDiag(old, R); eq(JSON.stringify(old.diag) === before, true, "resumeDiag не чіпає завершених результатів");
  // повторний тест у новій редакції: rev у записі, diagRunRev прибрано
  const S6 = { ...fresh(), diagRun: { dg: {} } }; L.resumeDiag(S6, R);
  L.finishDiag(S6, "math", R, { 0: OK, 1: OK, 2: OK, 3: OK, 4: OK, 5: BAD, 6: OK, 7: OK }, {});
  eq([S6.diag.dg.rev, "dg" in S6.diagRunRev, S6.plan.math.known], [2, false, ["y1", "y2"]], "finishDiag: rev результату, діагностика нової редакції");
  // валідатор: rev — ціле ≥ 2
  const ctxV = { lessons: new Map([["p1", { grade: 5 }], ["c1", { grade: 6 }]]), sections: new Map(), skills: { num: {} } };
  const dv = rev => L.validate({ id: "t", grade: 6, title: "t", why: "w", status: "draft", topics: [{ id: "k", title: "k", kind: "cur", lessons: ["c1"] }],
    items: [{ topic: "k", type: "number", sk: "num", title: "t", answer: 1, rev }] }, ctxV).filter(e => /rev/.test(e)).length;
  eq([dv(undefined), dv(2), dv(7), dv(1), dv(0), dv(1.5), dv("2")], [0, 0, 0, 1, 1, 1, 1], "validate: rev лише ціле ≥ 2");
}
{ const { loadContent } = await import("./lib.mjs");
  const { subjects } = loadContent(), math = subjects.find(s => s.id === "math"), d = math.diags.find(x => x.id === "dg6");
  // реальний dg6: 30 завдань; rev 2 — рівно п'ять cur-проб на тих самих індексах і темах; порядок тем не змінено
  const TOPICS = "ord frac frac-cmp rem frac-add eq pct dec mixed geom frac-of dec-ops ord frac rem frac-cmp g6-div eq dec frac-add g6-lcm frac-of geom mixed g6-fadd dec-ops pct g6-prop g6-neg g6-eq".split(" ");
  eq(d.items.map(it => it.topic), TOPICS, "dg6: теми за індексами — як у редакції 1 (збережені вердикти не зсуваються)");
  eq(d.items.flatMap((it, i) => it.rev ? [[i, it.topic, it.rev]] : []), [[16, "g6-div", 2], [20, "g6-lcm", 2], [24, "g6-fadd", 2], [27, "g6-prop", 2], [28, "g6-neg", 2]], "dg6: rev 2 лише в замінених cur-пробах");
  eq(L.diagRev(d), 2, "dg6: редакція 2");
  // перерваний тест редакції 1 (усе правильно до другого dec-ops включно): п'ять проб відкинуто, решта на місці
  const S = { grade: 6, diag: {}, plan: {}, diagRun: { dg6: Object.fromEntries(Array.from({ length: 26 }, (_, i) => [i, OK])) } };
  const r = L.resumeDiag(S, d);
  eq([r.dropped, Object.keys(S.diagRun.dg6).length, L.nextItem(d, S.diagRun.dg6)], [[16, 20, 24], 23, 16], "dg6: legacy-запуск — заново g6-div, g6-lcm, g6-fadd; 23 відповіді лишились");
  // складені проби: known лише коли вся проба правильна
  const all = Object.fromEntries(d.items.map((_, i) => [i, OK]));
  eq(L.buildPlan(d, all, {}).known, ["g6m1l2", "g6m1l4", "g6m2l4", "g6m3l2", "g6m4l3", "g6m5l3"], "dg6: усе правильно → known шести уроків");
  eq(L.buildPlan(d, { ...all, 24: BAD, 28: SKIP }, {}).known, ["g6m1l2", "g6m1l4", "g6m3l2", "g6m5l3"], "dg6: помилка в складеній пробі → урок не known");
  // пули 6 кл.: id з редакції 2026-10-13 (літера уроку + 01–08) лишились у своїх уроках, крім замінених; нові — нові id
  const REMOVED = { pg6m1: ["a01", "b03", "c03"], pg6m3: ["a05", "b05"], pg6m4: ["e05"], pg6m5: ["a03", "b01"] };
  const ADDED = { pg6m1: ["a09", "b09", "c09"], pg6m3: ["a09", "b09"], pg6m4: ["e09"], pg6m5: ["a09", "b09"] };
  for (const p of math.pools.filter(p => /^pg6m[1-5]$/.test(p.id))) {
    const sec = math.sections.find(s => s.id === p.section), lessons = sec.lessons.filter(l => !l.boss).map(l => l.id);
    const old = lessons.flatMap((l, k) => Array.from({ length: 8 }, (_, j) => [String.fromCharCode(97 + k) + "0" + (j + 1), l])).filter(([id]) => !(REMOVED[p.id] || []).includes(id));
    eq(old.every(([id, l]) => p.items.some(it => it.id === id && it.lesson === l)), true, `${p.id}: сталі id і уроки збережено`);
    eq(p.items.filter(it => !old.some(([id]) => id === it.id)).map(it => it.id), ADDED[p.id] || [], `${p.id}: нові вправи — лише нові id`);
    eq(p.items.some(it => (REMOVED[p.id] || []).includes(it.id)), false, `${p.id}: вилучені id не використано знову`);
    for (const l of lessons) { const n = p.items.filter(it => it.lesson === l).length; eq(n >= 6 && n <= 8, true, `${p.id}/${l}: 6–8 вправ (${n})`); }
  }
  // старий прогрес тренування: seen вилучених вправ не ламає добору, SRS теми не змінюється, нова вправа — першою (ще не бачили)
  const lessons1 = math.sections.find(s => s.id === "g6m1").lessons.filter(l => !l.boss).map(l => l.id);
  const P = { grade: 6, lessons: Object.fromEntries(lessons1.map(l => [l, { done: true }])), srs: { g6m1l1: { box: 3, due: "2026-11-01" } },
    seen: Object.fromEntries(["a01", "a02", "a03", "a04", "a05", "a06", "a07", "a08"].map(id => ["pg6m1:" + id, 1])) };
  const srsBefore = JSON.stringify(P.srs), seenBefore = JSON.stringify(P.seen);
  const items = L.practiceItems(P, { sections: math.sections, pools: math.pools });
  eq(items.some(it => it.key === "pg6m1:a01"), false, "тренування: вилучена a01 не з'являється");
  const pick = L.pickSession(P, { items, focus: "g6m1l1", n: 6, day: "2026-11-01" });
  eq(pick[0].key, "pg6m1:a09", "тренування: нова a09 (ще не бачили) — першою в темі");
  eq([JSON.stringify(P.srs) === srsBefore, JSON.stringify(P.seen) === seenBefore], [true, true], "тренування: seen/SRS не переписано");
}
/* Нові формати (engine-math-answer-kinds-new, рішення 2026-10-31): time, quantity, form improper, decimals, multiset;
   префікси «x =», «AB =», «… ∈»; періодичний дріб; одиниці («60 грн.», «º», «разів»); P3 з рев'ю followup (P3-1, P3-2, P3-6).
   Усе нове — лише з явним полем у ключі, крім п. 5–7; без полів поведінка та сама (tools/diff-answers.mjs). */
{ const K = (answerKind, answer, extra = {}) => ({ answerKind, answer, ...extra });
  const N = (answer, extra = {}) => ({ answer, ...extra });
  const T = K("time", "9:55"), Q2 = K("quantity", 245, { units: ["м", "см"] }), QC = { ...Q2, form: "compound" };
  [ // п. 1: час
    [T, "9:55", "ok"], [T, "09:55", "ok"], [T, "9.55", "ok"], [T, "9,55", "ok"], [T, "9 : 55", "ok"], [T, "9 год 55 хв", "ok"], [T, "9 год. 55 хв.", "ok"], [T, "9 год, 55 хв,", "ok"],
    [T, "9:5", "bad"], [T, "955", "bad"], [T, "10:55", "bad"], [T, "21:55", "bad"], [T, "9:60", "bad"], [T, "9 55", "bad"], [K("time", "21:05"), "21:05", "ok"], [K("time", "0:05"), "00:05", "ok"],
    [K("time", "9:00"), "9 год", "ok"], [K("time", "24:00"), "24:00", "bad"],
    // п. 2: складені величини
    [Q2, "2 м 45 см", "ok"], [Q2, "245 см", "ok"], [Q2, "2,45 м", "ok"], [Q2, "2.45 м", "ok"], [Q2, "2450 мм", "ok"], [Q2, "2 м. 45 см.", "ok"], [Q2, "2м45см", "ok"], [Q2, "2 М 45 СМ", "ok"],
    [Q2, "245", "bad"], [Q2, "2 м 46 см", "bad"], [Q2, "2 кг 45 г", "bad"], [Q2, "2 м 45", "bad"], [Q2, "2 м 2 м 45 см", "bad"], [Q2, "2 м 4 мин", "bad"],
    [QC, "2 м 45 см", "ok"], [QC, "245 см", "form"], [QC, "2,45 м", "form"], [QC, "1 м 145 см", "form"], [QC, "45 см 2 м", "form"], [QC, "2 м 40 см 50 мм", "form"], [QC, "2450 мм", "form"],
    [K("quantity", 45, { units: ["м", "см"], form: "compound" }), "45 см", "ok"], [K("quantity", 200, { units: ["год", "хв"], form: "compound" }), "3 год 20 хв", "ok"],
    [K("quantity", 200, { units: ["год", "хв"], form: "compound" }), "200 хв", "form"], [K("quantity", 1200, { units: ["кг", "г"], form: "compound" }), "1 кг 200 г", "ok"],
    [K("quantity", 1200, { units: ["кг", "г"] }), "1,2 кг", "ok"], [K("quantity", 6050, { units: ["грн", "коп"], form: "compound" }), "60 грн 50 коп", "ok"], [K("quantity", 1500, { units: ["доба", "год", "хв"] }), "1 доба 1 год", "ok"],
    [K("quantity", 245, { units: ["м", "кг"] }), "2 м 45 см", "bad"],   // ключ із units різних величин не перевіряється (validatePool відхиляє)
    // п. 3: improper
    [N("7/3", { form: "improper" }), "7/3", "ok"], [N("7/3", { form: "improper" }), "14/6", "ok"], [N("7/3", { form: "improper" }), "2 1/3", "form"], [N("5/2", { form: "improper" }), "2,5", "form"],
    [N("7/3", { form: "improper", reduced: true }), "14/6", "form"], [N("7/3"), "2 1/3", "ok"],
    // п. 4: decimals (+ tol)
    [N("37,0", { decimals: 1 }), "37,0", "ok"], [N("37,0", { decimals: 1 }), "37", "form"], [N("37,0", { decimals: 1 }), "37,00", "form"], [N("37,0", { decimals: 1 }), "36,9", "bad"], [N("37,0", { decimals: 1 }), "74/2", "form"],
    [N("3,1", { decimals: 1, tol: 0.05 }), "3,1", "ok"], [N("3,1", { decimals: 1, tol: 0.05 }), "3,14", "form"], [N("3,1", { decimals: 1, tol: 0.05 }), "3,2", "bad"], [N("37", { decimals: 0 }), "37,0", "form"], [N("37,0"), "37", "ok"],
    // п. 8: multiset
    [K("list", "2; 2; 3", { multiset: true }), "3; 2; 2", "ok"], [K("list", "2; 2; 3", { multiset: true }), "2; 3; 3", "bad"], [K("list", "2; 2; 3", { multiset: true }), "2; 3", "bad"], [K("list", "2; 2; 3", { multiset: true }), "2; 2; 2; 3", "bad"],
    [K("list", "2; 3", { multiset: true }), "3; 2", "ok"], [K("list", "2; 3"), "2; 2; 3", "bad"], [K("list", "1 ± √2; 1 ± √2", { multiset: true }), "1 + √2; 1 - √2; 1 - √2; 1 + √2", "ok"],
    // п. 5: префікси, що не змінюють відповідь
    [N("5"), "x = 5", "ok"], [N("1"), "b=1", "ok"], [N("3"), "k = 3", "ok"], [N("3"), "х = 3", "ok"], [N("-2,5"), "y = -2,5", "ok"], [N("5"), "x = 6", "bad"], [N("5"), "AB = 5", "bad"], [N("5"), "x5", "bad"], [N("5"), "x = ", "bad"],
    [N("2 1/3", { mixed: true }), "x = 7/3", "form"], [N("2 1/3", { mixed: true }), "x = 2 1/3", "ok"],
    // назва з умови (engine-learn-list-prefixes-p3): «AB =», \vec, «A =» — лише коли умова питає саме про цю точку чи вектор
    [K("coordinates2", "(3; -2)", { body: "<p>Знайди координати вектора $\\vec{AB}$.</p>" }), "AB = (3; -2)", "ok"], [K("coordinates2", "(3; -2)", { body: "<p>Знайди координати вектора $\\vec{AB}$.</p>" }), "AB(3; -2)", "ok"],
    [K("coordinates2", "(3; -2)", { body: "<p>Знайди координати вектора $\\overrightarrow{AB}$.</p>" }), "\\vec{AB} = (3; -2)", "ok"], [K("coordinates2", "(3; -2)", { body: "<p>Знайди координати вектора $\\vec{MN}$.</p>" }), "\\overrightarrow{MN}=(3; -2)", "ok"],
    [K("coordinates2", "(3; -2)", { body: "<p>Знайди координати точки $A$.</p>" }), "A = (3; -2)", "ok"], [K("coordinates2", "(3; -2)"), "m(3; -2)", "ok"], [K("coordinates2", "(3; -2)"), "A(3; -2)", "ok"],
    [K("coordinates2", "(3; -2)"), "ABC(3; -2)", "bad"], [K("coordinates2", "(3; -2)"), "a = (3; -2)", "bad"], [K("coordinates3", "(1; -2; 3)", { body: "<p>Знайди координати вектора $\\vec{AB}$.</p>" }), "AB = (1; -2; 3)", "ok"],
    [K("coordinates2", "(3; -2)"), "AB = (3; -2)", "ok"], [K("coordinates2", "(3; -2)"), "A = (3; -2)", "ok"], [K("coordinates2", "(3; -2)"), "\\vec{AB} = (3; -2)", "ok"],   // без назви в умові — D-030 (2), варіант B
    [K("coordinates2", "(p - m; k - n)", { body: "<p>Знайди координати вектора $\\overrightarrow{AB}$, якщо $A(m; n)$, $B(p; k)$.</p>" }), "AB = (p - m; k - n)", "ok"],
    [K("coordinates2", "(p - m; k - n)", { body: "<p>Знайди координати вектора $\\overrightarrow{AB}$, якщо $A(m; n)$, $B(p; k)$.</p>" }), "\\vec{AB} = (p - m; k - n)", "ok"], [K("coordinates2", "(p - m; k - n)"), "A(p - m; k - n)", "ok"],
    [K("coordinates2", "(p - m; k - n)"), "k(p - m; k - n)", "bad"], [K("coordinates2", "(p - m; k - n)"), "a(p - m; k - n)", "bad"], [K("coordinates2", "(p - m; k - n)"), "AB = (p - m; k - n)", "ok"],
    [K("intervalSet", "(2; 5)", { body: "<p>Відомо, що $-5 < n < -2$. Яких значень може набувати $-n$?</p>" }), "-n ∈ (2; 5)", "ok"],
    [K("intervalSet", "(2; 5)", { body: "<p>Відомо, що $1,5 < x < 3$. Яких значень набуває $2x - 1$?</p>" }), "2x - 1 ∈ (2; 5)", "ok"], [K("intervalSet", "(2; 5)"), "x ∈ (2; 5)", "ok"], [K("intervalSet", "(2; 5)"), "[x] ∈ (2; 5)", "bad"],
    [K("intervalSet", "(2; 5)"), "-n ∈ (2; 5)", "form"], [K("intervalSet", "(2; 5)"), "2x - 1 ∈ (2; 5)", "form"],   // назва не з умови, проміжок правильний — form з підказкою
    // п. 6: періодичний дріб до раціонального ключа
    [N("-1/3"), "-0,(3)", "ok"], [N("-1/3"), "−0.(3)", "ok"], [N("68/55"), "1,2(36)", "ok"], [N("1/3"), "0,(3)", "ok"], [N("1/3"), "x = 0,(3)", "ok"], [N("1/3"), "0,(33)", "ok"], [N("1/3"), "0,(4)", "bad"],
    [N("1/3", { fractionOnly: true }), "0,(3)", "form"], [N("1/3", { reduced: true }), "0,(3)", "form"], [N("1/3"), "0,(3", "bad"], [K("list", "1/3; 2"), "0,(3); 2", "bad"],
    // п. 7: одиниці
    [N("60", { unit: "грн" }), "60 грн.", "ok"], [N("60", { unit: "грн" }), "60 грн,", "ok"], [N("60", { unit: "грн" }), "60 грн..", "bad"], [N("70", { unit: "°" }), "70º", "ok"], [N("70", { unit: "°" }), "70 º.", "ok"],
    [N("5", { unit: "раз" }), "5 разів", "ok"], [N("3", { unit: "раз" }), "3 рази", "ok"], [N("5", { unit: "раз" }), "5 раз", "ok"], [K("list", "70; 110", { unit: "°" }), "70º; 110°.", "ok"], [K("list", "70; 110", { unit: "°" }), "70°, 110°", "ok"],
    [K("coordinates2", "(30; 60)", { unit: "°" }), "(30°; 60°)", "ok"], [K("ratio", "30 : 60", { unit: "°" }), "30° : 60°", "ok"], [N("7", { unit: "см" }), "7 см.", "ok"], [N("7", { unit: "см" }), "7 мм.", "bad"],
    // P3-1: раціональний множник перед дужками — нескорочений дріб
    [K("exactRoot", "1 + √5"), "(1/2)(2 + 2√5)", "form"], [K("exactRoot", "1 + √3"), "(1/3)(3 + 3√3)", "form"], [K("exactRoot", "1 + √5"), "(2 + 2√5)·(1/2)", "form"], [K("exactRoot", "1 + √5"), "0,5(2 + 2√5)", "form"],
    [K("exactRoot", "(3 + √3)/3"), "(1/3)(3 + √3)", "ok"], [K("exactRoot", "(1 + √5)/2"), "(1/2)(1 + √5)", "ok"], [K("list", "1 ± √5"), "(1/2)(2 ± 2√5)", "form"], [K("exactRoot", "2 + 2√5"), "2(1 + √5)", "ok"],
  ].forEach(([s, v, expected]) => eq(L.checkAns(s, v), expected, `нові формати ${s.answerKind || "number"}${s.form ? "/" + s.form : ""}${s.decimals !== undefined ? "/d" + s.decimals : ""}${s.unit ? " [" + s.unit + "]" : ""}: ${JSON.stringify(s.answer)} ← «${v}»`));
  // підказки form / bad
  eq(L.badHint(T, "9:5"), "Запиши час годинами й хвилинами через двокрапку, хвилини — двома цифрами: 7:05.", "badHint time: формат");
  eq(L.badHint(K("time", "7:05"), "705")?.includes("8:40"), true, "badHint time: приклад не збігається з ключем 7:05");
  eq(L.badHint(T, "10:55"), null, "badHint time: інший час — звичайне повідомлення");
  eq(L.formHint(QC, "245 см"), "Значення правильне. Запиши його в м і см: спершу більші одиниці, потім менші, цілими числами.", "formHint quantity compound");
  eq(L.badHint(Q2, "2 кг 45 г"), "Перевір одиницю: тут відповідь записують у м, см.", "badHint quantity: інша величина");
  eq(L.badHint(Q2, "245"), "Допиши одиниці: м, см.", "badHint quantity: без одиниць");
  eq(L.badHint(Q2, "2 м 46 см"), null, "badHint quantity: інше значення");
  eq(L.formHint(N("7/3", { form: "improper" }), "2 1/3"), "Значення правильне. Запиши відповідь неправильним дробом — без цілої частини.", "formHint improper");
  eq(L.formHint(N("5/2", { form: "improper" }), "2,5"), "Значення правильне. Запиши відповідь звичайним дробом.", "formHint improper ← десятковий");
  eq(L.formHint(N("37,0", { decimals: 1 }), "37"), "Значення правильне. Запиши відповідь десятковим дробом з одним знаком після коми.", "formHint decimals 1");
  eq(L.formHint(N("3,14", { decimals: 2 }), "3,1400"), "Значення правильне. Запиши відповідь десятковим дробом з двома знаками після коми.", "formHint decimals 2");
  eq(L.formHint(N("37", { decimals: 0 }), "37,0"), "Значення правильне. Запиши відповідь цілим числом, без коми.", "formHint decimals 0");
  eq(L.formHint(K("intervalSet", "(-∞; √2]"), "(-∞; 2√2/2]").includes("Скороти дріб"), true, "formHint intervalSet: нескорочена межа — «Скороти дріб» (P3-2)");
  eq(L.formHint(K("exactRoot", "1 + √5"), "(1/2)(2 + 2√5)").includes("Скороти дріб"), true, "formHint P3-1: «Скороти дріб»");
  // п. 7: «Перевір одиницю» — лише коли без чужої одиниці число правильне
  eq(L.badHint(N("7", { unit: "см" }), "9 мм"), null, "badHint: чужа одиниця й хибне число — звичайне повідомлення");
  eq(L.badHint(N("7", { unit: "см" }), "7 мм"), "Перевір одиницю: тут відповідь записують у «см». Одиницю можна й не писати.", "badHint: чужа одиниця, число правильне");
  eq(L.badHint(K("list", "70; 110", { unit: "°" }), "70 см; 120 см"), null, "badHint list: чужа одиниця й хибне число");
  eq(L.badHint(K("coordinates2", "(30; 60)", { unit: "°" }), "(30 см; 60 см)")?.includes("«°»"), true, "badHint coordinates2: чужа одиниця перед «)»");
  // відбитки другої спроби
  eq(L.answerSig(T, "9:55") === L.answerSig(T, "09:55"), true, "answerSig time: 9:55 = 09:55");
  eq(L.answerSig(N("37,0", { decimals: 1 }), "37") === L.answerSig(N("37,0", { decimals: 1 }), "37,0"), false, "answerSig decimals: 37 ≠ 37,0");
  eq(L.answerSig(N("37,0"), "37") === L.answerSig(N("37,0"), "37,0"), true, "answerSig без decimals: як раніше");
  eq(L.answerSig(N("5"), "x = 5") === L.answerSig(N("5"), "5"), true, "answerSig: «x = 5» = «5»");
  // показ ключа й запис ключа для перевірки
  eq([L.ansText(QC), L.ansText(K("quantity", 200, { units: ["хв", "год"] })), L.ansText(K("quantity", "2,5", { units: ["см"] })), L.ansText(K("quantity", 1005, { units: ["м", "мм"] })), L.ansText(K("quantity", 0, { units: ["м", "см"] }))],
    ["2 м 45 см", "3 год 20 хв", "2,5 см", "1 м 5 мм", "0 см"], "ansText quantity: складений запис від більшої одиниці");
  eq([L.keyInput(QC), L.keyInput(N(2.5)), L.keyInput(T)], ["2 м 45 см", "2,5", "9:55"], "keyInput");
  eq(L.quantityUnits(K("quantity", 1, { units: ["см", "м"] })), ["м", "см"], "quantityUnits: від більшої");
  eq(L.timeExample(K("time", "7:05")), "8:40", "timeExample: не ключ");
  eq(L.listKey(K("list", "2; 2; 3", { multiset: true }))?.length, 3, "listKey: multiset з повтором розбирається");
  eq(L.listKey(K("list", "2; 2; 3")), null, "listKey: повтор без multiset — як раніше");
  // hintTexts: усі тексти для вправи, з динамічним прикладом
  eq(L.hintTexts(K("time", "7:05")).some(t => t.includes("7:05")), false, "hintTexts time: приклад не ключ");
  eq(L.hintTexts(N("37,0", { decimals: 1, unit: "см" })).some(t => t.includes("одним знаком")) && L.hintTexts(N("37,0", { decimals: 1, unit: "см" })).some(t => t.includes("«см»")), true, "hintTexts number: decimals і unit");
  eq(L.hintTexts(QC).some(t => /\d/.test(t)), false, "hintTexts quantity: без чисел");
  // validatePool: нові поля
  const vp = it => L.validatePool({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }], items: [{ id: "a", lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], ...it }] },
    { sections: new Map([["s", { grade: 4, lessons: ["l"] }]]), skills: { num: {} } });
  const has = (it, re) => vp(it).some(e => re.test(e));
  for (const it of [T, QC, Q2, K("quantity", "2,5", { units: ["см"] }), N("7/3", { form: "improper" }), N("37,0", { decimals: 1 }), N("37", { decimals: 0 }), N("3,1", { decimals: 1, tol: 0.05 }), K("list", "2; 2; 3", { multiset: true }), K("time", "23:59"), K("quantity", 6050, { units: ["грн", "коп"], form: "compound" })])
    eq(vp(it), [], `validatePool: коректний ключ ${it.answerKind || "number"} ${JSON.stringify(it.answer)}`);
  [[K("time", "9:5"), /time — ключ/], [K("time", "25:00"), /time — ключ/], [K("time", "9.55"), /time — ключ/], [{ ...T, unit: "год" }, /без unit/],
   [K("quantity", 245), /units/], [K("quantity", 245, { units: ["м", "кг"] }), /units/], [K("quantity", 245, { units: ["м", "м"] }), /units/], [K("quantity", 245, { units: ["фут"] }), /units/], [K("quantity", -5, { units: ["см"] }), /невід'ємне/],
   [K("quantity", "2,5", { units: ["м", "см"], form: "compound" }), /цілим/], [{ ...Q2, unit: "см" }, /без unit/], [N("5", { units: ["см"] }), /units — лише/],
   [N("2 1/3", { form: "improper" }), /improper/], [N("2/3", { form: "improper" }), /improper/], [N("7/3", { form: "improper", mixed: true }), /improper/], [N("7/3", { form: "compound" }), /form/], [Q2 && { ...Q2, form: "improper" }, /form/],
   [N(37, { decimals: 1 }), /decimals 1/], [N("37", { decimals: 1 }), /decimals 1/], [N("37,00", { decimals: 1 }), /decimals 1/], [N("37,0", { decimals: 1.5 }), /decimals — ціле/], [N("37,0", { decimals: 1, fractionOnly: true }), /не поєднується/],
   [K("list", "2; 3", { decimals: 1 }), /decimals — ціле/], [N("2", { multiset: true }), /multiset/], [K("list", "2; 3", { multiset: "так" }), /multiset/], [K("list", "2; 2; 3"), /не читається/]]
    .forEach(([it, re]) => eq(has(it, re), true, `validatePool відхиляє ${it.answerKind || "number"} ${JSON.stringify(it.answer)} ${JSON.stringify({ ...it, answer: undefined, answerKind: undefined })}`));
  // межа — кроки, а не годинник (P3-6): з замороженим годинником важкий запис однаково зупиняється з «занадто складний»,
  // а з повільним (+10 мс на виклик) — правильний важкий запис зараховується. Вердикт не залежить від швидкості пристрою.
  const isP = n => { for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; }, ps = [];
  for (let x = 9999999999; ps.length < 60; x--) if (isP(x)) ps.push(x);
  const roots = ps.map(p => "√" + p).join(" + ");
  for (const [label, now] of [["заморожений", () => 1e12], ["повільний", (t => () => (t += 10))(1e12)]]) {
    const c = { console, Date: { now } }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); const S = c.SLID_LEARN;
    eq(S.badHint(K("exactRoot", "√2"), roots), "Запис занадто складний для перевірки. Спрости його й спробуй ще раз.", `межа кроків, годинник ${label}: 60 коренів великих простих`);
    eq(S.checkAns(K("expression", "x"), "(x+√2+√3+√5)^12 - (x+√2+√3+√5)^12 + x"), "ok", `межа кроків, годинник ${label}: важкий правильний запис ok`);
    eq(S.checkAns(K("coordinates2", "(x; y)"), "((x+√2)^12 - (x+√2)^12 + x; (y+√3)^12 - (y+√3)^12 + y)"), "ok", `межа кроків, годинник ${label}: важка пара ok`);
  }
}

/* Вади перевірки відповідей, знайдені авторами пулів 10 кл. (engine-math-answer-g10-issues). */
{
  // кожна перевірка — у свіжому рушії: вердикт не має залежати від попередніх викликів (BUDGET = 0 до першого checkAns)
  const freshL = () => { const c = { console }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); return c.SLID_LEARN; };
  const P = items => ({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }],
    items: items.map((it, i) => ({ id: "a" + i, lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], ...it })) });
  const C = { sections: new Map([["s", { grade: 10, lessons: ["l"] }]]), skills: { num: {} } };
  // 1. validatePool і exactRoot / intervalSet першими в пулі й у свіжому рушії (pg10m5 «5π/36»)
  for (const ans of ["5π/36", "2∛2", "√2/2", "(3 + √5)/2", "16π/3"]) {
    eq(freshL().validatePool(P([{ answerKind: "exactRoot", answer: ans }]), C), [], `validatePool у свіжому рушії: перший ключ exactRoot «${ans}»`);
    eq(freshL().validatePool(P([{ answerKind: "exactRoot", answer: ans }, { answer: 5 }]), C), freshL().validatePool(P([{ answer: 5 }, { answerKind: "exactRoot", answer: ans }]), C), `validatePool: порядок вправ не змінює вердикт «${ans}»`);
  }
  eq(freshL().validatePool(P([{ answerKind: "exactRoot", answer: "5/36" }]), C).some(e => e.includes("потребує кореня")), true, "validatePool у свіжому рушії: раціональний ключ exactRoot і далі відхиляється");
  eq(freshL().validatePool(P([{ answerKind: "intervalSet", answer: "(-∞; √2] ∪ [√3; +∞)" }]), C), [], "validatePool у свіжому рушії: перший ключ intervalSet із коренями");
  eq(freshL().validatePool(P([{ answerKind: "intervalSet", answer: "(-∞; √3] ∪ [√2; +∞)" }]), C).some(e => e.includes("перетинаються")), true, "validatePool у свіжому рушії: частини intervalSet перетинаються — помилка");
  // ключ intervalSet, межа якого потребує точного множення ((1 + √5)/2), першим у свіжому рушії (рев'ю P3-2)
  eq(freshL().validatePool(P([{ answerKind: "intervalSet", answer: "(-∞; (1 + √5)/2] ∪ [1; +∞)" }]), C).some(e => e.includes("перетинаються")), true, "validatePool у свіжому рушії: перетин intervalSet з межею (1 + √5)/2");
  eq(freshL().validatePool(P([{ answerKind: "intervalSet", answer: "(-∞; (1 + √5)/2] ∪ [2; +∞)" }]), C), [], "validatePool у свіжому рушії: intervalSet з межею (1 + √5)/2 без перетину");
  // раціональне значення, записане коренями (потрібне точне множення), — «потребує кореня» і в свіжому рушії
  eq(freshL().validatePool(P([{ answerKind: "exactRoot", answer: "√2·√2" }]), C).some(e => e.includes("потребує кореня")), true, "validatePool у свіжому рушії: exactRoot √2·√2 = 2 — раціональний ключ");
  // ключ, важчий за межу (P3-3): одна причина «не читається», без хибного «потребує кореня або π»
  { const E = freshL().validatePool(P([{ answerKind: "exactRoot", answer: "(√2+√3+√5)^12" }]), C);
    eq([E.length, E.some(e => e.includes("потребує кореня"))], [1, false], "validatePool: надто важкий ключ exactRoot — лише «не читається»"); }
  { const F = freshL(); F.checkAns({ answerKind: "expression", answer: "x" }, "(x+√2+√3+√5)^12 - (x+√2+√3+√5)^12 + x");
    eq(F.validatePool(P([{ answerKind: "exactRoot", answer: "5π/36" }]), C), [], "validatePool після важкої перевірки: бюджет не переноситься"); }

  // 2. префікс «x =» у list: та сама літера, що в умові; чужа змінна чи різні літери — bad, як і раніше
  const Li = (answer, title = "$x^2 + x - 2 = 0$", o = {}) => ({ answerKind: "list", answer, title, ...o });
  for (const [s, v, r] of [
    [Li("1; -2"), "x = 1; x = -2", "ok"], [Li("1; -2"), "x=1; x=−2", "ok"], [Li("1; -2"), "x = -2; x = 1", "ok"], [Li("1; -2"), "х = 1; х = -2", "ok"],
    [Li("1; -2"), "x₁ = 1; x₂ = -2", "ok"], [Li("1; -2"), "x1 = 1, x2 = -2", "ok"], [Li("1; -2"), "x_1 = 1; x_2 = -2", "ok"], [Li("1; -2"), "x = 1; -2", "ok"],
    [Li("1"), "x = 1", "ok"], [Li("1", "t", { body: "<p>Розв'яжи $\\sqrt{t} = 1$.</p>" }), "t = 1", "ok"], [Li("1", "$\\sin x = 1$"), "x = 1", "ok"],
    [Li("(-1 ± √5)/2", "$x^2 + x - 1 = 0$"), "x = (-1 + √5)/2; x = (-1 - √5)/2", "ok"], [Li("(-1 ± √5)/2", "$x^2 + x - 1 = 0$"), "x = (-1 ± √5)/2", "ok"],
    [Li("±√2", "$x^2 = 2$"), "x = 2√2/2; x = -√2", "form"], [Li("70; 110", "$x$", { unit: "°" }), "x = 70°; x = 110°", "ok"], [Li("0,5; 2", "$x$"), "x = 0,5; x = 2", "ok"],
    // негативні: чужа змінна, різні літери, умова без змінної, повтор, не той корінь, велика літера, назва відрізка
    [Li("1"), "y = 1", "bad"], [Li("1; -2"), "y = 1; y = -2", "bad"], [Li("1; -2"), "x = 1; y = -2", "bad"], [Li("1; -2"), "x = 1", "bad"],
    [Li("1; -2"), "x = 1; x = 1; x = -2", "bad"], [Li("1; -2"), "x = 1; x = 2", "bad"], [Li("1; -2"), "X = 1; X = -2", "bad"], [Li("1", "$\\sqrt{t} = 1$"), "s = 1", "bad"],
    [Li("1", "Рівняння"), "x = 1", "bad"], [{ answerKind: "list", answer: "1" }, "x = 1", "bad"], [Li("1", "$\\sin t = 1$"), "s = 1", "bad"], [Li("1", "$\\sin t = 1$"), "n = 1", "bad"],
    [Li([3, 11], "$BM = 4$ см", { unit: "см" }), "BC = 3; 11", "bad"],
    [Li([-8, -2], "Нулі $y = (x + 5)^2 - 9$"), "y = -8; y = -2", "bad"], [Li("1; -2"), "x = 1; x5 = -2", "bad"], [Li("1; -2"), "x5 = 1; x5 = -2", "bad"], [Li([-8, -2], "Нулі $y = (x + 5)^2 - 9$"), "x = -8; x = -2", "ok"],
    [Li([5, -5], "t", { body: "<p>При яких $y$ модуль $\\vec{b} = (12; y)$ дорівнює $13$?</p>" }), "y = 5; y = -5", "ok"], [Li("2", "$2x = 4$"), "x = 2", "ok"],
    [Li("3", "t", { body: "<p>При $x = 2$ розв'яжи $x + a = 5$ відносно $a$.</p>" }), "x = 3", "bad"], [Li("1; -2"), "x = 1 = -2", "bad"], [Li("1; -2"), "x = x + 1; -2", "bad"]])
    eq(L.checkAns(s, v), r, `list із префіксом: ${JSON.stringify(v)} до ${JSON.stringify(s.answer)} (${s.title})`);
  // рев'ю P1-1: префікс знімається лише для єдиної кандидатної змінної умови — не для назв функцій, параметрів, векторів,
  // послідовностей, даних значень; кілька кандидатів (система, параметр і змінна) — bad для будь-якої літери
  const two = (L0, ks) => ks.map(k => `${L0} = ${k}`).join("; ");
  for (const [s, ok, bad] of [
    [Li([2, -2], "Модуль $b$", { body: "<p>При яких значеннях $b$ рівняння $3x^2 - bx + 12 = 0$ має один корінь?</p>" }), [], ["b", "x"]],   // pg8m5 b08
    [Li([0, 1], "Нулі $f(x) = x^2 - x$"), ["x"], ["f"]],                                                                             // pg9m3 a02
    [Li([5, -7], "Нулі $g(x) = 35 - 2x - x^2$"), ["x"], ["g"]],                                                                    // pg9m3 a04
    [Li([1, 2], "Члени", { body: "<p>Послідовність $(a_n)$ задано формулою $a_n = n^2 - 3n - 8$. Знайди номери.</p>" }), ["n"], ["a"]],   // pg9m5 a07
    [Li([3, -3], "Два значення $x$", { body: "<p>При яких $x$ вектори $\\vec{a} = (2x; -3)$ і $\\vec b = (x; 6)$ перпендикулярні?</p>" }), ["x"], ["a", "b"]],   // pg9m2 d07
    [Li([5, -5], "Модуль", { body: "<p>При яких $y$ модуль вектора $\\vec{b} = (12; y)$ дорівнює $13$?</p>" }), ["y"], ["b"]],           // pg9m2 c07
    [Li([4.6, 18.6], "$\\sqrt{a^2}$ при $a = 4,6$ і $a = -18,6$"), [], ["a"]],                                                       // pg8m3 c09: a дане
    [Li([1, 2], "Система", { body: "<p>Розв'яжи систему $x + y = 3$, $x - y = -1$.</p>" }), [], ["x", "y"]],
    [Li([1, 2], "Ординати", { body: "<p>Знайди ординати точок перетину $y = x^2$ та $x + y = 2$.</p>" }), [], ["x", "y"]],
    [Li([1, 2], "Пряма", { body: "<p>Знайди $k$ і $b$ для $y = kx + b$.</p>" }), [], ["k", "b", "x", "y"]],
    [Li([1, 2], "$y = kx + b$, де $k = 2$"), [], ["x", "b", "k"]],
    [Li([1, 2], "Сторони", { body: "<p>Сторони $a$ і $b$: $a + b = 3$, $ab = 2$.</p>" }), [], ["a", "b"]],
    [Li([1, 2], "$\\log_a x = 0$"), ["x"], ["a"]], [Li([1, 2], "$\\text{ab} x^2 = 1$"), ["x"], ["a", "b", "t"]]])
    for (const [ls, r] of [[ok, "ok"], [bad, "bad"]]) for (const l of ls) eq(L.checkAns(s, two(l, s.answer)), r, `list, єдина змінна умови: «${two(l, s.answer)}» (${s.title} ${s.body || ""})`);
  // реальні вправи з рев'ю P1-1: префікс знімається лише з очікуваною літерою (або з жодною), усі інші a–z — bad
  { const { loadContent } = await import("./lib.mjs"), pools = loadContent().subjects.flatMap(c => c.pools || []);
    for (const [pid, iid, want] of [["pg8m5", "b08", ""], ["pg8m3", "c09", ""], ["pg9m3", "a02", "x"], ["pg9m3", "a04", "x"], ["pg9m3", "b08", "x"],
      ["pg9m5", "a07", "n"], ["pg9m2", "d07", "x"], ["pg9m2", "c07", "y"], ["pg8m5", "a01", "x"]]) {
      const it = pools.find(p => p.id === pid)?.items.find(x => x.id === iid), ks = it ? (Array.isArray(it.answer) ? it.answer.map(String) : String(it.answer).split(";").map(x => x.trim())) : [];
      const acc = it ? [..."abcdefghijklmnopqrstuvwxyz"].filter(l => L.checkAns(it, ks.map(x => `${l} = ${x.replace(".", ",")}`).join("; ")) !== "bad").join("") : null;
      eq(acc, want, `list ${pid}:${iid}: префікс знімається лише з «${want || "жодною"}»`);
    } }
  eq(L.formHint(Li("±√2", "$x^2 = 2$"), "x = 2√2/2; x = -√2").includes("Скороти"), true, "list із префіксом: підказка «Скороти дріб» як без префікса");

  // 3. expression: число одразу після дужок-множника — множення; степені, десяткові, мішані числа — без змін
  const Ex = (answer, o = {}) => ({ answerKind: "expression", answer, ...o });
  for (const [s, v, r] of [
    [Ex("12x^2 + 20x"), "(3x+5)4x", "ok"], [Ex("12x^2 + 20x"), "(3x + 5) 4x", "ok"], [Ex("12x^2 + 20x"), "(3x+5)·4x", "ok"], [Ex("12x^2 + 20x"), "4x(3x+5)", "ok"],
    [Ex("18x^2 + 20x - 3"), "3(2x^2-1)+(3x+5)4x", "ok"], [Ex("4x(3x + 5)", { form: "factored" }), "(3x+5)4x", "ok"], [Ex("4x + 20"), "(x+5)4", "ok"],
    [Ex("1,5x + 1,5"), "(x+1)1,5", "ok"], [Ex("6x + 3"), "(2x+1)3", "ok"], [Ex("2(x + 1)·3"), "2(x+1)3", "ok"],
    // негативні: значення інше; число після степеня, функції, кореня, модуля чи змінної — як і раніше помилка запису
    [Ex("(x + 5)/4"), "(x+5)4", "bad"], [Ex("12x^2 + 20x"), "(3x+5)4", "bad"], [Ex("3x^2"), "x²3", "bad"], [Ex("3(x + 1)^2"), "(x+1)^2 3", "bad"], [Ex("3(x + 1)^2"), "(x+1)²3", "bad"],
    [Ex("2sin(x)"), "sin(x)2", "bad"], [Ex("2√3"), "√(3)2", "bad"], [Ex("2|x|"), "|x|2", "bad"], [Ex("2x"), "x2", "bad"], [Ex("40(x + 5)"), "(x+5)4 0", "bad"],
    [Ex("x^23"), "x^23", "ok"], [Ex("x^2·3"), "x^2 3", "bad"], [Ex("x^(2)·3"), "x^(2)3", "bad"]])
    eq(L.checkAns(s, v), r, `expression: ${JSON.stringify(v)} до ${JSON.stringify(s.answer)}`);
  eq(L.checkAns({ answer: "7/3" }, "2 1/3"), "ok", "number: мішане число не стало множенням");
  // P3-1: «(x + 5)2» при ключі-степені — bad, але з підказкою про «^»; без «^» правильне значення підказки не потребує
  eq([L.checkAns(Ex("(x + 5)^2"), "(x+5)2"), L.badHint(Ex("(x + 5)^2"), "(x+5)2")], ["bad", "Степінь пиши через знак ^. Число одразу після дужок — це множник, а не показник."], "expression: (x+5)2 до (x + 5)^2 — підказка про ^");
  eq(L.badHint(Ex("(x + 5)^2"), "(x+5)3"), null, "expression: (x+5)3 до (x + 5)^2 — звичайне «неправильно»");
  eq(L.hintTexts(Ex("x")).includes("Степінь пиши через знак ^. Число одразу після дужок — це множник, а не показник."), true, "hintTexts: підказка про ^ є серед текстів expression");
  eq(L.checkAns({ answer: "7/3" }, "(2) 1/3"), "bad", "number: дужки в числовій відповіді — як і раніше bad");

  // 4. явний «+» перед числом у number (verify pg10m1 b02): «+16» = 16; «+» не робить від'ємне додатним і не ламає «−»
  for (const [s, v, r] of [
    [{ answer: 16 }, "+16", "ok"], [{ answer: 16 }, "x = +16", "ok"], [{ answer: 16 }, "16", "ok"], [{ answer: "2/3", reduced: true }, "+2/3", "ok"], [{ answer: "7/3", mixed: true }, "+2 1/3", "ok"],
    [{ answer: "2,5" }, "+2,5", "ok"], [{ answer: "2,5", decimals: 1 }, "+2,5", "ok"], [{ answer: 16, unit: "см" }, "+16 см", "ok"],
    [{ answer: -16 }, "-16", "ok"], [{ answer: -16 }, "x = -16", "ok"], [{ answer: -16 }, "+16", "bad"], [{ answer: -16 }, "+-16", "bad"], [{ answer: -16 }, "+−16", "bad"], [{ answer: 16 }, "+-16", "bad"],
    [{ answer: 16 }, "++16", "bad"], [{ answer: 16 }, "+ 16", "bad"], [{ answer: 16 }, "16+", "bad"], [{ answer: 16 }, "+", "bad"], [{ answer: 16 }, "x = ++16", "bad"], [{ answer: "4/6", reduced: true }, "+4/6", "form"]])
    eq(L.checkAns(s, v), r, `number з «+»: ${JSON.stringify(v)} до ${JSON.stringify(s.answer)}`);
  eq(L.answerSig({ answer: 16 }, "+16"), L.answerSig({ answer: 16 }, "16"), "answerSig: «+16» і «16» — той самий запис");
  eq(L.checkAns({ answerKind: "list", answer: "2; -2" }, "+2; -2"), "bad", "list: «+» перед елементом не розширено (лише number)");
}

/* Вади перевірки відповідей з пакета 11 кл. (engine-math-answer-g11-issues). Кожне послаблення — з негативами: хибне «ok»
   гірше за хибне «неправильно» (рев'ю engine-math-answer-g10-issues). */
{
  const freshL = () => { const c = { console }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); return c.SLID_LEARN; };
  const Ex = (answer, o = {}) => ({ answerKind: "expression", answer, ...o }), K = (answerKind, answer, o = {}) => ({ answerKind, answer, ...o });
  const run = (rows, what) => { for (const [s, v, r] of rows) eq(freshL().checkAns(s, v), r, `${what}: ${JSON.stringify(v)} до ${JSON.stringify(s.answer)}${s.body ? " (" + s.body + ")" : ""}`); };

  // 1. кириличні двійники латинських літер у символьних записах = латинські; інші кириличні літери — як і раніше bad
  run([
    [Ex("5x + C"), "5х + C", "ok"], [Ex("5x + C"), "5x + С", "ok"], [Ex("5x + C"), "5х + С", "ok"], [Ex("2a^2 + 4aH"), "2а^2 + 4аН", "ok"], [Ex("8 · 7^x"), "8 · 7^х", "ok"],
    [Ex("y = 2x + 1"), "у = 2х + 1", "ok"], [Ex("cos x"), "соs х", "ok"], [K("coordinates2", "(p - m; k - n)"), "(р - m; к - n)", "ok"], [K("coordinates2", "(3; -2)"), "А(3; -2)", "ok"],
    [K("periodicSet", "π/6 + 2πk"), "х = π/6 + 2πк, де к ∈ Z", "ok"],
    // кожен великий двійник (рев'ю P3-3): А В Е І К М Н О Р С Т Х, і малі а е і о р
    [Ex("A + B + E + I + K + M + H + O + P + C + T + X"), "А + В + Е + І + К + М + Н + О + Р + С + Т + Х", "ok"], [Ex("a + e + i + o + p"), "а + е + і + о + р", "ok"],
    [Ex("MT"), "МТ", "ok"], [Ex("2HB"), "2НВ", "ok"], [Ex("MT"), "МН", "bad"], [Ex("2HB"), "2НЕ", "bad"], [Ex("Ma"), "Мб", "bad"], [K("intervalSet", "(1; 2)"), "х ∈ (1; 2)", "ok"], [K("intervalSet", "(0; +∞)"), "Е(f) = (0; +∞)", "ok"],
    // негативи: двійник іншої змінної, не-двійник, слово, хибне значення
    [Ex("5x + C"), "5у + C", "bad"], [Ex("5x + C"), "5ж + C", "bad"], [Ex("5x + C"), "5x + C, де C — стала", "bad"], [Ex("y = 2x + 1"), "у = 2х + 2", "bad"], [Ex("x + y"), "х + х", "bad"],
    [K("periodicSet", "π/6 + 2πk"), "х = π/6 + πк", "bad"], [K("intervalSet", "(1; 2)"), "х ∈ (1; 2]", "bad"], [Ex("3x"), "3 см", "bad"], [Ex("2x"), "2х або 3х", "bad"],
    // інші формати — без змін
    [{ answer: 3 }, "х = 3", "ok"], [K("divrem", [3, 2]), "3 ост. 2", "ok"], [K("time", "9:55"), "9 год 55 хв", "ok"], [{ answer: 7, unit: "см" }, "7 см", "ok"], [{ answer: 7, unit: "см" }, "7 кг", "bad"]],
    "g11 п.1 кирилиця");

  // 2. стала первісної малою c (латинською чи кириличною) — "form" з підказкою, лише коли в умові немає іншої c
  const Cn = (answer, body = "<p>Сталу запиши великою літерою $C$.</p>") => Ex(answer, { title: "Первісні для $f(x) = 5$", body });
  run([
    [Cn("5x + C"), "5x + C", "ok"], [Cn("5x + C"), "5x + c", "form"], [Cn("5x + C"), "5х + с", "form"], [Cn("5x + C"), "c + 5x", "form"], [Cn("x^3/3 + 2x^2 - x + C"), "x^3/3 + 2x^2 - x + c", "form"],
    [Cn("5x + C"), "5x + K", "bad"], [Cn("5x + C"), "5x", "bad"], [Cn("5x + C"), "5c + C", "bad"], [Cn("5x + C"), "5x + c + C", "bad"], [Cn("5x + C"), "5x + C + c - C", "bad"], [Cn("5x + C"), "5x + c + 1", "bad"], [Cn("5x + C"), "6x + c", "bad"],
    [Cn("5x + C", "<p>Відомо, що $a + b + c = 1$.</p>"), "5x + c", "bad"], [Cn("5x + C", "<p>Сторона $c$ трикутника.</p>"), "5x + c", "bad"], [Cn("Cx + 1"), "cx + 1", "bad"], [Ex("a + b + C", { title: "Периметр", body: "<p>Сторони $a$, $b$ і $C$.</p>" }), "a + b + c", "bad"],
    [Ex("x^2/2 + C", { title: "Знайди $\\int x\\,dx$" }), "x^2/2 + c", "form"], [Ex("x^2/2 + C", { title: "Знайди вираз" }), "x^2/2 + c", "bad"], [Cn("5x + 2C"), "5x + 2c", "bad"]],
    "g11 п.2 стала c");
  eq(freshL().formHint(Cn("5x + C"), "5x + c"), "Вираз правильний. Сталу запиши великою латинською літерою C.", "g11 п.2: підказка про велику C");
  eq(freshL().badHint(Cn("5x + C", "<p>$a + b + c = 1$</p>"), "5x + c"), null, "g11 п.2: c з умови — звичайне «неправильно»");
  eq(freshL().hintTexts(Cn("5x + C")).includes("Вираз правильний. Сталу запиши великою латинською літерою C."), true, "g11 п.2: підказка серед hintTexts");
  { const it = (await import("./lib.mjs")).loadContent().subjects.flatMap(c => c.pools || []).find(p => p.id === "pg11m3")?.items.find(x => x.id === "a01");
    eq(it && [freshL().checkAns(it, "5x + c"), freshL().checkAns(it, "5х + С"), freshL().checkAns(it, "5x + K")], ["form", "ok", "bad"], "g11 п.2: pg11m3:a01 — c → form, кирилична С → ok, K → bad"); }

  // 3. мішане число як окремий доданок виразу; в інших позиціях — як і раніше помилка запису
  run([
    [Ex("x^3/3 + 10/3"), "x^3/3 + 3 1/3", "ok"], [Ex("x^3/3 + 10/3"), "x^3/3+3 1/3", "ok"], [Ex("x - 7/3"), "-2 1/3 + x", "ok"], [Ex("7x/3"), "(2 1/3)x", "ok"],
    [Ex("|x| + 7/3"), "|x| + 2 1/3", "ok"], [Ex("y = 2x + 7/3"), "y = 2x + 2 1/3", "ok"], [K("exactRoot", "7/3 + √2"), "2 1/3 + √2", "ok"],
    [Ex("x^3/3 + 10/3"), "x^3/3 + 31/3", "bad"], [Ex("10x/3"), "3 1/3x", "bad"], [Ex("3 + x/3"), "3 1/3x", "bad"], [Ex("x/3 + 3"), "3 1/3·x", "bad"], [Ex("8/3"), "2·1 1/3", "bad"],
    [Ex("x^(7/3)"), "x^2 1/3", "bad"], [Ex("x^2/3"), "x^2 1/3", "bad"], [Ex("3/7"), "1/2 1/3", "bad"], [Ex("1/6"), "1/2 1/3", "bad"], [Ex("13/3"), "3 4/3", "bad"], [Ex("x + 3"), "x + 3 0/3", "bad"],
    [Ex("x + 4"), "x + 3,5 1/2", "bad"], [Ex("x + 10/3"), "x + 3 1/3^2", "bad"], [Ex("x + 10/3"), "x + 3 1/3(1)", "bad"], [Ex("x^3/3 + 10/3"), "x^3/3 + 3 2/3", "bad"], [{ answer: "7/3" }, "2 1/3", "ok"], [{ answer: "7/3", mixed: true }, "7/3", "form"]],
    "g11 п.3 мішане число");

  // 4. number: ціле число коренем — "form" «обчисли корінь», ніколи "ok"; інше значення, вираз без кореня — bad
  run([
    [{ answer: 24, unit: "см" }, "√576", "form"], [{ answer: 24, unit: "см" }, "√576 см", "form"], [{ answer: 24 }, "√(576)", "form"], [{ answer: 24 }, "2√144", "form"], [{ answer: 3 }, "∛27", "form"],
    [{ answer: -24 }, "-√576", "form"], [{ answer: 12 }, "√576/2", "form"], [{ answer: "24,0", decimals: 1 }, "√576", "form"],
    [{ answer: 24 }, "-√576", "bad"], [{ answer: 25 }, "√576", "bad"], [{ answer: 24 }, "√577", "bad"], [{ answer: 24 }, "√576 + 1", "bad"], [{ answer: 24 }, "20 + 4", "bad"], [{ answer: 24 }, "√x", "bad"],
    [{ answer: 24 }, "√576 кг", "bad"], [{ answer: 24 }, "√(10^40)", "bad"]], "g11 п.4 корінь у number");
  eq(freshL().formHint({ answer: 24 }, "√576"), "Значення правильне. Обчисли корінь і запиши відповідь числом.", "g11 п.4: підказка «Обчисли корінь»");
  eq([freshL().badHint({ answer: 24 }, "√577"), freshL().badHint({ answer: 24 }, "√(10^40)"), freshL().badHint({ answer: 24 }, "(√2+√3+√5+√7+√11+√13+√17+√19)^12")], [null, null, null], "g11 п.4: невдала спроба кореня — звичайне «неправильно», не «запис занадто складний»");
  eq(freshL().hintTexts({ answer: 24 }).includes("Значення правильне. Обчисли корінь і запиши відповідь числом."), true, "g11 п.4: підказка серед hintTexts");

  // 5. періодичний дріб у межі чи елементі intervalSet; list і координати — без змін
  run([
    [K("intervalSet", "[1/3; 27]"), "[0,(3); 27]", "ok"], [K("intervalSet", "(-∞; 1/3)"), "(-∞; 0,(3))", "ok"], [K("intervalSet", "[1/3; √2]"), "[0,(3); √2]", "ok"], [K("intervalSet", "{1/3; 2}"), "{0,(3); 2}", "ok"],
    [K("intervalSet", "[1/3; 27]"), "x ∈ [0.(3); 27]", "ok"], [K("intervalSet", "[-1/3; 27]"), "[-0,(3); 27]", "ok"],
    [K("intervalSet", "[1/3; 27]"), "[0,(4); 27]", "bad"], [K("intervalSet", "[1/3; 27]"), "[0,(3); 27)", "bad"], [K("intervalSet", "[1/3; 27]"), "[0,3; 27]", "bad"], [K("intervalSet", "[1/3; 27]"), "[-0,(3); 27]", "bad"],
    [K("list", "1/3; 2"), "0,(3); 2", "bad"], [K("coordinates2", "(1/3; 1)"), "(0,(3); 1)", "bad"]], "g11 п.5 періодичний дріб у межі");

  // 8. «x₁,₂ = ±…» у list: лише для ключа з «±»/коренем і єдиної змінної умови
  const Lq = (answer, title) => K("list", answer, { title });
  run([
    [Lq("±3", "$x^2 = 9$"), "x₁,₂ = ±3", "ok"], [Lq("±3", "$x^2 = 9$"), "x_{1,2} = ±3", "ok"], [Lq("±3", "$x^2 = 9$"), "x1,2 = ±3", "ok"], [Lq("±3", "$x^2 = 9$"), "х₁,₂ = ±3", "ok"],
    [Lq("(1 ± √5)/2", "$x^2 - x - 1 = 0$"), "x₁,₂ = (1 ± √5)/2", "ok"], [Lq("(1 ± √5)/2", "$x^2 - x - 1 = 0$"), "x₁,₂ = (1 ∓ √5)/2", "ok"],
    [Lq("±3", "$x^2 = 9$"), "y₁,₂ = ±3", "bad"], [Lq("3; -3", "$x^2 = 9$"), "x₁,₂ = ±3", "bad"], [Lq("±3", "$x^2 = 9$"), "x₁,₂ = 3", "bad"], [Lq("±3", "$x^2 = 9$"), "x₁,₂ = ±3; x = 1", "bad"],
    [Lq("±3", "$x^2 = 9$"), "x₁,₂ = ±2", "bad"], [Lq("±3", "$x^2 + y = 9$"), "x₁,₂ = ±3", "bad"], [Lq("±3", "Знайди $b$: $x^2 = b$"), "x₁,₂ = ±3", "bad"], [Lq("±3", "$x^2 = 9$"), "x₁,₂ = x₃ = ±3", "bad"]],
    "g11 п.8 x₁,₂");
  { const pools = (await import("./lib.mjs")).loadContent().subjects.flatMap(c => c.pools || []);
    for (const [pid, iid] of [["pg8m5", "a04"], ["pg8m5", "b05"], ["pg10m3", "a07"]]) {
      const it = pools.find(p => p.id === pid)?.items.find(x => x.id === iid);
      eq(it ? [..."abcdefghijklmnopqrstuvwxyz"].filter(l => freshL().checkAns(it, `${l}₁,₂ = ${it.answer}`) !== "bad").join("") : null, "x", `g11 п.8 ${pid}:${iid}: «L₁,₂ = …» лише з x`);
    } }

  // 8. мутація «!(xr === null && LIMIT)» у validatePool: ключ exactRoot за межею перевірки — лише «не читається»
  const C = { sections: new Map([["s", { grade: 11, lessons: ["l"] }]]), skills: { num: {} } };
  const P = items => ({ id: "p", section: "s", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }],
    items: items.map((it, i) => ({ id: "a" + i, lesson: "l", lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], ...it })) });
  { const E = freshL().validatePool(P([{ answerKind: "exactRoot", answer: "(√2+√3+√5+√7+√11+√13+√17+√19)^12" }]), C);
    eq([E.length, E.some(e => e.includes("потребує кореня")), E.some(e => e.includes("не читається"))], [1, false, true], "g11 п.8: ключ exactRoot за межею (TOO у exactOf) — лише «не читається»"); }
}

/* engine-learn-list-prefixes-p3 і engine-answer-kinds-p3: назва з умови, відбиток list, підказки формату, величини з розрядами */
{ const K = (answerKind, answer, extra = {}) => ({ answerKind, answer, ...extra }), N = (answer, extra = {}) => ({ answer, ...extra });
  const C = body => ({ body });
  // answerSig list: елементи — як у parseList
  const sig = (a, b, s = K("list", [1, 2])) => L.answerSig(s, a) === L.answerSig(s, b);
  eq([sig("1.2", "1,2"), sig("1,2", "1, 2"), sig("1; 2", "1;2"), sig("1,5; 2", "1.5; 2"), sig("1,5; 2", "1,5, 2"), sig("2; 1", "1; 2")], [false, true, true, true, false, false],
    "answerSig list: «1.2» (одне число) ≠ «1,2» (два); пробіли й крапка/кома всередині елемента — те саме; інший поділ чи порядок — інший відбиток");
  eq(L.checkAns(K("list", [1, 2]), "1.2") !== L.checkAns(K("list", [1, 2]), "1,2"), true, "answerSig list: відбитки різні там, де різні вердикти");
  // coordinates: назва — лише та, про яку питає умова; без шуканої — будь-яка, крім назв даних точок (варіант B, уточнення D-030 (2)).
  // Значення правильне, а назву відкинуто — «form» з поясненням, не «ok» (рев'ю P2-1); значення неправильне — «bad» без підказки.
  const VAB = K("coordinates2", [-3, 1], C("<p>Знайди координати вектора $\\overrightarrow{AB}$, якщо $A(2; 3)$, $B(-1; 4)$.</p>"));
  for (const [v, r] of [["AB = (-3; 1)", "ok"], ["АВ = (-3; 1)", "ok"], ["\\vec{AB} = (-3; 1)", "ok"], ["AB(-3; 1)", "ok"], ["(-3; 1)", "ok"], ["CD = (-3; 1)", "form"], ["BA = (-3; 1)", "form"],
    ["A(-3; 1)", "form"], ["B = (-3; 1)", "form"], ["\\vec{CD} = (-3; 1)", "form"], ["AB = CD = (-3; 1)", "bad"], ["AB = (-3; 1); CD = (-3; 1)", "bad"], ["AB = AB = (-3; 1)", "bad"], ["AB = (-3; 2)", "bad"], ["AB = (1; -3)", "bad"], ["CD = (1; -3)", "bad"]])
    eq(L.checkAns(VAB, v), r, `назва з умови (вектор AB): «${v}»`);
  eq([L.formHint(VAB, "CD = (-3; 1)"), L.badHint(VAB, "CD = (1; -3)")], ["Координати правильні, але тут шукають AB.", null], "назва з умови: підказка лише при правильному значенні");
  const PB = K("coordinates2", [1, 6], C("<p>Точка $C(2; 1)$ — середина відрізка $AB$, а $A(3; -4)$. Знайди координати точки $B$.</p>"));
  for (const [v, r] of [["B(1; 6)", "ok"], ["B = (1; 6)", "ok"], ["(1; 6)", "ok"], ["A(1; 6)", "form"], ["AB = (1; 6)", "form"], ["C(1; 6)", "form"], ["A(1; 7)", "bad"]]) eq(L.checkAns(PB, v), r, `назва з умови (точка B, відрізок AB — не шукане): «${v}»`);
  // шуканої назви немає: будь-яка назва (D-030 (2)), крім даних точок умови; означення («кожна точка $X$…») — не шукане
  const PM = K("coordinates2", [1, -5], { title: "Симетрія відносно точки $M$", body: "<p>Знайди координати точки, симетричної точці $A(3; -1)$ відносно точки $M(2; -3)$.</p>" });
  const PX = K("coordinates2", [-4, 2], C("<p>Кожна точка $X$ переходить у точку $X_1$ на промені $OX$.</p><p>Знайди образ точки $A(-2; 1)$.</p>"));
  for (const [s, v, r] of [[PM, "M = (1; -5)", "form"], [PM, "M(1; -5)", "form"], [PM, "A(1; -5)", "form"], [PM, "A1(1; -5)", "bad"], [PM, "B(1; -5)", "ok"], [PM, "B = (1; -5)", "ok"], [PM, "M(1; 5)", "bad"],
    [PX, "X = (-4; 2)", "ok"], [PX, "A(-4; 2)", "form"], [PX, "AB = (-4; 2)", "ok"], [PX, "B(-4; 2)", "ok"]])
    eq(L.checkAns(s, v), r, `назва без шуканої: «${v}»`);
  eq(L.formHint(PM, "M = (1; -5)"), "Координати правильні, але M — дана точка умови. Запиши лише координати.", "назва: дана точка — підказка");
  for (const [v, r] of [["A = (3; -2)", "ok"], ["AB = (3; -2)", "ok"], ["\\vec{AB} = (3; -2)", "ok"], ["A(3; -2)", "ok"], ["ABC(3; -2)", "bad"], ["a = (3; -2)", "bad"]]) eq(L.checkAns(K("coordinates2", "(3; -2)"), v), r, `назва без умови (D-030 (2)): «${v}»`);
  // символьний ключ: та сама назва
  const SYM = K("coordinates2", ["p - m", "k - n"], C("<p>Знайди координати вектора $\\overrightarrow{AB}$, якщо $A(m; n)$, $B(p; k)$.</p>"));
  for (const [v, r] of [["AB = (p - m; k - n)", "ok"], ["\\vec{AB}=(p - m; k - n)", "ok"], ["CD = (p - m; k - n)", "form"], ["A(p - m; k - n)", "form"], ["CD = (m - p; k - n)", "bad"], ["k(p - m; k - n)", "bad"]]) eq(L.checkAns(SYM, v), r, `назва, символьний ключ: «${v}»`);
  // intervalSet: префікс — назва з умови, лише один
  const NEG = K("intervalSet", "[-4; 3)", { title: "$-3 < n \\le 4$. Що з $-n$?", body: "<p>Відомо, що $-3 < n \\le 4$, тобто $n > -3$ і $n \\le 4$. Яких значень може набувати $-n$?</p><p>Запиши відповідь проміжком. Наприклад, $(1;\\,5]$ — це всі числа $y$, для яких $1 < y \\le 5$.</p>" });
  for (const [v, r] of [["-n ∈ [-4; 3)", "ok"], ["−n ∈ [-4; 3)", "ok"], ["- n∈[-4; 3)", "ok"], ["[-4; 3)", "ok"], ["n ∈ [-4; 3)", "form"], ["x ∈ [-4; 3)", "form"], ["y ∈ [-4; 3)", "form"], ["2n ∈ [-4; 3)", "form"],
    ["n ∈ [-4; 2)", "bad"], ["x ∈ -n ∈ [-4; 3)", "bad"], ["-n ∈ x ∈ [-4; 3)", "bad"], ["-n = [-4; 3)", "ok"], ["-n ∈ [-4; 3]", "bad"]]) eq(L.checkAns(NEG, v), r, `intervalSet, назва з умови (−n): «${v}»`);
  eq([L.formHint(NEG, "n ∈ [-4; 3)"), L.badHint(NEG, "n ∈ [-4; 2)")], ["Проміжок правильний, але тут шукають значення −n.", null], "intervalSet: підказка назви лише при правильному проміжку");
  const RANGE = K("intervalSet", "(-∞; 7]", C("<p>Знайди область значень функції $f(x) = 7 - x^2$ — усі значення, яких набуває $y$.</p>"));
  const RANGEY = K("intervalSet", "[1/3; 27]", C("<p>Аргумент функції $y = 3^x$ зростає від $-1$ до $3$ включно. У яких межах змінюється значення функції?</p>"));
  const DOM = K("intervalSet", "(-1; +∞)", C("<p>Знайди область визначення функції $f(x) = \\log_3 (x + 1)$.</p>"));
  const PAR = K("intervalSet", "(9; +∞)", C("<p>При яких значеннях $a$ функція $y = x^2 + 6x + a$ не має нулів? Запиши множину таких $a$ проміжком.</p>"));
  for (const [s, v, r] of [[RANGE, "y ∈ (-∞; 7]", "ok"], [RANGE, "E(f) = (-∞; 7]", "ok"], [RANGE, "f(x) ∈ (-∞; 7]", "ok"], [RANGE, "D(f) = (-∞; 7]", "form"], [RANGE, "x ∈ (-∞; 7]", "form"],
    [RANGEY, "E(f) = [1/3; 27]", "ok"], [RANGEY, "E(y) = [1/3; 27]", "ok"], [RANGEY, "x ∈ [1/3; 27]", "form"],
    [DOM, "x ∈ (-1; +∞)", "ok"], [DOM, "D(f) = (-1; +∞)", "ok"], [DOM, "E(f) = (-1; +∞)", "form"], [DOM, "y ∈ (-1; +∞)", "form"],
    [PAR, "a ∈ (9; +∞)", "ok"], [PAR, "x ∈ (9; +∞)", "form"], [PAR, "y ∈ (9; +∞)", "form"], [PAR, "x ∈ (8; +∞)", "bad"]]) eq(L.checkAns(s, v), r, `intervalSet, назва з умови: «${v}» (${s.body.slice(3, 40)})`);
  eq([L.formHint(RANGE, "x ∈ (-∞; 7]"), L.formHint(PAR, "x ∈ (9; +∞)")], ["Проміжок правильний, але тут шукають значення функції (y, E(f)), а не аргументу.", "Проміжок правильний, але тут шукають значення a."], "intervalSet: підказки назви");
  // дві «голі» формули й жодної єдиної змінної — назви немає, давнє правило (одна літера)
  const TWO = K("intervalSet", "(1; 2)", C("<p>Знайди спільні значення $a$ і $b$.</p>"));
  eq([L.checkAns(TWO, "b ∈ (1; 2)"), L.checkAns(TWO, "a ∈ (1; 2)"), L.checkAns(TWO, "2b ∈ (1; 2)")], ["ok", "ok", "form"], "intervalSet: дві голі формули — без назви, давнє правило");
  // без назви в умові — давнє правило (одна літера, D(f)); «x ∈ y ∈» ніколи
  for (const [v, r] of [["x ∈ (2; 5)", "ok"], ["D(f) = (2; 5)", "ok"], ["x ∈ y ∈ (2; 5)", "bad"], ["-n ∈ (2; 5)", "form"], ["xy ∈ (2; 5)", "form"]]) eq(L.checkAns(K("intervalSet", "(2; 5)"), v), r, `intervalSet без умови: «${v}»`);
  eq(L.formHint(K("intervalSet", "(2; 5)"), "-n ∈ (2; 5)"), "Проміжок правильний, але назва перед ним не та. Запиши лише проміжок.", "intervalSet без умови: загальна підказка назви");
  eq(["Проміжок правильний, але тут шукають значення −n.", "Проміжок правильний, але назва перед ним не та. Запиши лише проміжок."].every(t => L.hintTexts(NEG).includes(t)) && L.hintTexts(PM).includes("Координати правильні, але M — дана точка умови. Запиши лише координати.")
    && L.hintTexts(VAB).includes("Координати правильні, але тут шукають AB."), true, "hintTexts: підказки назв (для «підказка ≠ ключ»)");
  // реальний зміст: назви, які тепер знімаються
  { const { loadContent } = await import("./lib.mjs"); const pools = loadContent().subjects.find(c => c.id === "math").pools, it = id => { const [p, i] = id.split(":"); return pools.find(x => x.id === p).items.find(x => x.id === i); };
    const acc = (id, pres, wrap = k => k) => pres.filter(p => L.checkAns(it(id), `${p}${wrap(it(id).answer)}`) === "ok");
    eq(acc("pg9m1:a07", ["x ∈ ", "n ∈ ", "-n ∈ ", "y ∈ "]), ["-n ∈ "], "зміст pg9m1:a07: лише «-n ∈»");
    eq(acc("pg9m3:a07", ["x ∈ ", "a ∈ ", "y ∈ "]), ["a ∈ "], "зміст pg9m3:a07: лише «a ∈»");
    eq(acc("pg10m1:a03", ["x ∈ ", "y ∈ ", "D(f) = ", "E(f) = "]), ["y ∈ ", "E(f) = "], "зміст pg10m1:a03 (область значень): y, E(f)");
    eq(acc("pg11m1:a02", ["x ∈ ", "y ∈ ", "E(f) = ", "E(y) = "]), ["y ∈ ", "E(f) = ", "E(y) = "], "зміст pg11m1:a02 (y = 3^x): y, E(f), E(y), не x");
    const pt = a => "(" + a.join("; ") + ")";
    eq(acc("pg9m2:c01", ["AB = ", "CD = ", "A", "\\vec{AB} = "], pt), ["AB = ", "\\vec{AB} = "], "зміст pg9m2:c01: вектор AB");
    eq(acc("pg9m2:c05", ["D", "D = ", "CD = ", "AB = ", "A"], pt), ["D", "D = "], "зміст pg9m2:c05: точка D (не вектори з заголовка)");
    eq(acc("pg9m6:c07", ["M = ", "M", "A", "B", "AM = "], k => k), ["B", "AM = "], "зміст pg9m6:c07: шуканої назви немає — будь-яка, крім даних A і M");
    eq([acc("pg9m2:c03", ["A", "B = ", "B"], pt), acc("pg9m3:c01", ["M = ", "M", "A = "], k => k), L.checkAns(it("pg9m2:c03"), "A(3; 5)")], [["B = ", "B"], ["M = ", "M", "A = "], "form"],
      "зміст: pg9m2:c03 A — дана початкова точка (form), B = ok; pg9m3:c01 «M = (6; -33)» ok (D-030 (2))"); }
  // величини: розряди через пробіл (як у number), лише групи по 3 цифри
  const Q1 = K("quantity", 2543, { units: ["см"] }), Q2 = K("quantity", 245, { units: ["м", "см"] }), QK = K("quantity", 1200, { units: ["кг", "г"], form: "compound" });
  for (const [s, v, r] of [[Q1, "2 543 см", "ok"], [Q1, "2543 см", "ok"], [Q1, "25,43 м", "ok"], [Q1, "25 43 см", "bad"], [Q1, "2 5430 см", "bad"], [Q1, "2 543,5 см", "bad"], [Q1, "2 54 см", "bad"], [Q1, "2 543", "bad"],
    [Q2, "2 450 мм", "ok"], [Q2, "2 45 см", "bad"], [Q2, "2 м 45 см", "ok"], [QK, "1 200 г", "form"], [QK, "1 кг 200 г", "ok"], [K("quantity", 1200, { units: ["г"] }), "1 200 г", "ok"], [K("quantity", 1200000, { units: ["г"] }), "1 200 000 г", "ok"]])
    eq(L.checkAns(s, v), r, `quantity з розрядами: ${JSON.stringify(s.answer)} ${s.units} ← «${v}»`);
  // величини: підказка формату без пояснення раніше (рев'ю kinds-new P3-4); лише при bad
  const QT = K("quantity", 200, { units: ["год", "хв"] });
  eq([L.badHint(Q2, "2 м 45"), L.badHint(Q2, "2 9/20 м"), L.badHint(QT, "3:20"), L.badHint(QT, "3 : 20"), L.badHint(Q2, "3:20"), L.badHint(Q2, "245"), L.badHint(Q2, "2 м 46 см"), L.badHint(Q2, "2 м 45 см")],
    ["Після кожного числа напиши одиницю: м, см.", "Звичайний дріб тут не розбирається: запиши величину десятковим дробом або меншими одиницями (м, см).",
     "Тут час записують одиницями, а не через двокрапку: год, потім хв.", "Тут час записують одиницями, а не через двокрапку: год, потім хв.", null, "Допиши одиниці: м, см.", null, null], "badHint quantity: «2 м 45», «2 9/20 м», «3:20»");
  eq([L.checkAns(Q2, "2 м 45"), L.checkAns(Q2, "2 9/20 м"), L.checkAns(QT, "3:20")], ["bad", "bad", "bad"], "quantity: ці записи — як і раніше bad (лише пояснення)");
  eq(["Після кожного", "Звичайний дріб тут", "Тут час записують"].every(t => L.hintTexts(QT).some(h => h.startsWith(t))), true, "hintTexts quantity: нові тексти (для «підказка ≠ ключ»)");
  // mixed + десятковий / періодичний: одразу «мішаним числом» (P3-5)
  const MIX = "Значення правильне. Запиши відповідь мішаним числом: ціла частина, пробіл, дріб.", FR = "Значення правильне. Запиши відповідь звичайним дробом.";
  for (const [s, v, h] of [[N("1 7/11", { mixed: true }), "1,(63)", MIX], [N("18/11", { mixed: true }), "1,(63)", MIX], [N("1 1/2", { mixed: true }), "1,5", MIX], [N("1 1/2", { mixed: true }), "3/2", MIX],
    [N("3/7", { mixed: true }), "0,(428571)", FR], [N("1/2", { mixed: true }), "0,5", FR], [N("1 1/2", { reduced: true }), "1,5", FR], [N("-1 1/2", { mixed: true }), "-1,5", MIX]])
    eq([L.checkAns(s, v), L.formHint(s, v)], ["form", h], `formHint mixed: ${s.answer} ← «${v}»`);
  // √n² дослівно з умови (рев'ю g11 P3-2): та сама «form», інша підказка
  const R1 = N(24, C("<p>Обчисли $\\sqrt{576}$.</p>")), R3 = N(3, C("<p>Обчисли $\\sqrt[3]{27} = ?$</p>"));
  eq([L.checkAns(R1, "√576"), L.formHint(R1, "√576"), L.formHint(R1, "√ 576"), L.formHint(R1, "sqrt576"), L.formHint(R1, "2√144"), L.formHint(N(24), "√576"), L.formHint(R3, "∛27")],
    ["form", "Це вираз з умови. Обчисли корінь і запиши відповідь числом.", "Це вираз з умови. Обчисли корінь і запиши відповідь числом.", "Це вираз з умови. Обчисли корінь і запиши відповідь числом.",
     "Значення правильне. Обчисли корінь і запиши відповідь числом.", "Значення правильне. Обчисли корінь і запиши відповідь числом.", "Це вираз з умови. Обчисли корінь і запиши відповідь числом."], "formHint √n²: запис з умови — інша підказка");
  // list: «1,5, 2» — пояснення про «;» (a11y-followup (б)); вердикт не змінюється
  const LS = K("list", [1.5, 2]);
  eq([L.checkAns(LS, "1,5, 2"), L.badHint(LS, "1,5, 2"), L.checkAns(LS, "1,5; 2"), L.badHint(K("list", [1, 2, 4]), "1, 2, 3"), L.checkAns(K("list", [1, 5, 2]), "1,5, 2"), L.badHint(LS, "1,5; 3")],
    ["bad", "Без «;» кома розділяє числа. Якщо в числах є десяткова кома, відокремлюй їх знаком «;».", "ok", null, "ok", null], "list: підказка про «;» лише без «;» і з комою між цифрами");
  // підказка під полем: decimals і improper — своя, приклад не ключ
  eq([L.numberHelp(N("37,0", { decimals: 1 })), L.numberHelp(N("3,5", { decimals: 1 })), L.numberHelp(N("3,05", { decimals: 2 })), L.numberHelp(N("37", { decimals: 0 })),
    L.numberHelp(N("7/3", { form: "improper" })), L.numberHelp(N("9/4", { form: "improper" })), L.numberHelp(N("7/3")), L.numberHelp(K("list", [1]))],
    ["Десятковий дріб — через кому, з одним знаком після коми: 3,5.", "Десятковий дріб — через кому, з одним знаком після коми: 4,5.", "Десятковий дріб — через кому, з двома знаками після коми: 4,05.",
     "Запиши відповідь цілим числом, без коми.", "Неправильний дріб — через риску, без цілої частини: 7/3.".replace("7/3", "9/4"), "Неправильний дріб — через риску, без цілої частини: 7/3.", null, null], "numberHelp: decimals / improper, приклад ≠ ключ");
  // лічильник кроків справді рахує (інакше межа «кроків ≤ …» вище порожня)
  const hb = bounded(K("expression", "x"), "(x+√2+√3+√5+√7+√11+√13)^12");
  eq([hb.r, hb.ok, hb.w.steps > 1e5], ["bad", true, true], `work(): важкий запис витрачає > 10⁵ кроків — ${hb.w.steps}`);
  eq(FZ.work().clock, false, "work(): заморожений годинник не спрацьовує");
  // лічильник скидається між викликами: після важкого запису легкий має свої кілька кроків, а не накопичені (рев'ю P3-1)
  FZ.checkAns(K("expression", "x"), "x + 1"); eq(FZ.work().steps < 1000, true, `work(): лічильник скинуто між викликами — ${FZ.work().steps}`);
  { const SL = (() => { let t = 0; const D = class extends Date {}; D.now = () => (t += 4000); const c = { console, Date: D }; c.window = c; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), c); return c.SLID_LEARN; })();
    eq([SL.checkAns(K("expression", "x"), "(x+√2+√3+√5+√7+√11+√13)^12"), SL.work().clock], ["bad", true], "work(): годинник, що «летить», — clock: true (тест справді розрізняє)"); }
}
/* tests-diag-rev-p2: збережена редакція 2 при чинній 3; ключі вердиктів за межами items */
{ const R3 = clone(D); R3.items[5].rev = 2; R3.items[7].rev = 3;
  const S = { ...fresh(), diagRun: { dg: { 0: OK, 5: OK, 7: BAD } }, diagRunRev: { dg: 2 } };
  const r = L.resumeDiag(S, R3);
  eq([r.rev, r.dropped, S.diagRun.dg, S.diagRunRev.dg], [3, [7], { 0: OK, 5: OK }, 3], "resumeDiag: запуск ред. 2 при ред. 3 — відкинуто лише rev-3 (7), rev-2 (5) лишився");
  const S1 = { ...fresh(), diagRun: { dg: { 0: OK, 5: OK, 7: BAD } }, diagRunRev: { dg: 1 } };
  eq(L.resumeDiag(S1, R3).dropped, [5, 7], "resumeDiag: запуск ред. 1 при ред. 3 — відкинуто rev-2 і rev-3");
  const S2 = { ...fresh(), diagRun: { dg: { 0: OK, 99: OK } } };
  eq([L.resumeDiag(S2, R3).dropped, S2.diagRun.dg], [[99], { 0: OK }], "resumeDiag: ключ за межами items (старий запуск) відкидається");
  const S3 = { ...fresh(), diagRun: { dg: { 0: OK, 99: OK } }, diagRunRev: { dg: 3 } };
  eq([L.resumeDiag(S3, R3).dropped, Object.keys(S3.diagRun.dg)], [[], ["0", "99"]], "resumeDiag: запуск чинної редакції не чіпається (і ключ за межами — як є)");
  // один розбір rev: рядок «3» і 2.5 — не редакції ні для diagRev, ні для resumeDiag
  const RB = clone(D); RB.items[5].rev = "3"; RB.items[7].rev = 2.5;
  const SB = { ...fresh(), diagRun: { dg: { 5: OK, 7: OK } } };
  eq([L.diagRev(RB), L.resumeDiag(SB, RB).dropped, SB.diagRunRev.dg], [1, [], 1], "itemRev: нецілий rev — редакція 1 і в diagRev, і в resumeDiag");
  const RC = clone(D); RC.items[5].rev = 2; RC.items[7].rev = "3"; RC.items[3].rev = 2.5;
  const SC = { ...fresh(), diagRun: { dg: { 3: OK, 5: OK, 7: OK } }, diagRunRev: { dg: 1 } };
  eq([L.diagRev(RC), L.resumeDiag(SC, RC).dropped, SC.diagRunRev.dg], [2, [5], 2], "itemRev: при ред. 2 рядок «3» і 2.5 не відкидають своїх вердиктів (той самий розбір, що в diagRev)");
}
/* SK_RETAG2 (sk-2026-11-01): знімок правил, перенесення лише записів потрібних уроків, звірка з контентом */
{ eq([L.SK_RETAG2.id, L.SK_MIGRATIONS.map(f => f.id)], ["sk-2026-11-01", ["sk-2026-10-31b", "sk-2026-11-01"]], "SK_RETAG2: новий id, порядок міграцій");
  eq(L.SK_RETAG2.rules.map(r => r.join(" ")).sort(), ["g7m7l2 math.eq math.func", "g8m1l2 math.expr math.ops", "g8m3l4 math.expr math.func", "g8m6l1 math.meas math.geom", "g9m3l4 math.expr math.eq"], "SK_RETAG2: знімок правил");
  // вправи, які мали старий sk у цих уроках (попередня версія змісту: c21bb60^, 90fa02e^) — і тепер мають новий
  const HIST = { "g8m6l1 math.meas": ["pg8m6:a06"], "g7m7l2 math.eq": ["pg7m7:b01", "pg7m7:b02"], "g8m1l2 math.expr": ["pg8m1:b04", "pg8m1:b07"], "g8m3l4 math.expr": ["pg8m3:d09"], "g9m3l4 math.expr": ["pg9m3:d06"] };
  const { loadContent } = await import("./lib.mjs"), math = loadContent().subjects.find(c => c.id === "math");
  for (const [at, from, to] of L.SK_RETAG2.rules) for (const id of HIST[`${at} ${from}`] || []) {
    const [p, i] = id.split(":"), it = math.pools.find(x => x.id === p).items.find(x => x.id === i);
    eq([it.lesson, "math." + it.sk], [at, to], `SK_RETAG2 ${id}: урок ${at}, тепер ${to}`); }
  eq(L.SK_RETAG2.rules.every(([at, from]) => HIST[`${at} ${from}`]), true, "SK_RETAG2: кожне правило має знімок вправ");
  const d = "2026-11-01", E = (at, sk, l = at) => ({ l, at, sk, d });
  const S = { skFix: ["sk-2026-10-31b"], skw: { "math.expr": "000", "math.eq": "0", "math.meas": "00" }, errs: [
    E("g8m1l2", "math.expr"), E("g8m1l2", "math.eq"), E("g8m1l3", "math.expr"), E("g9m3l4", "math.expr"), E("g9m3l4", "math.func"), E("g8m6l1", "math.meas"), E("g8m6l2", "math.meas"),
    E("g7m7l2", "math.eq"), E("g7m7l1", "math.eq"), { l: "g8m3l4", sk: "math.expr", d }, E("g8m3l4", "math.expr", "g7m1l1"), E("g8m1l4", "math.expr")] };
  eq(L.migrateSk(S), 6, "SK_RETAG2: перенесено 6 записів");
  eq(S.errs.map(e => e.sk), ["math.ops", "math.eq", "math.expr", "math.eq", "math.func", "math.geom", "math.meas", "math.func", "math.eq", "math.func", "math.func", "math.expr"],
    "SK_RETAG2: лише записи уроків правил (at, або l без at); інший урок з тим самим sk і інший sk того ж уроку — не чіпаються; g8m1l4 — правило першої міграції вже виконано");
  eq([S.skw, S.skFix], [{ "math.expr": "", "math.eq": "", "math.meas": "" }, ["sk-2026-10-31b", "sk-2026-11-01"]], "SK_RETAG2: вікна старих навичок з нуля; позначено");
  eq(L.migrateSk(S), 0, "SK_RETAG2: удруге не виконується");
  const F = { errs: [E("g9m3l4", "math.func"), E("g9m3l4", "math.expr")] };
  eq([L.migrateSk(F), F.errs.map(e => e.sk), F.skFix], [2, ["math.eq", "math.eq"], ["sk-2026-10-31b", "sk-2026-11-01"]], "профіль без міграцій: обидві редакції по черзі (g9m3l4 func → eq, expr → eq)");
}

console.log(`\n${n} перевірок, ${fails ? fails + " з помилками" : "усе гаразд"}`);
if (fails) process.exit(1);
