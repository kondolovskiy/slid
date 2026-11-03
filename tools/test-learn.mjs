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

// engine-cbrt-key: «cbrt» з фізичної клавіатури = «∛» (кнопка поля); канонічність і хибні значення — як для ∛ (pg10m3 a06, b01)
{ const R = (answer, kind = "exactRoot") => ({ type: "answer", answerKind: kind, answer });
  [[R("2∛2"), "2∛2", "ok"], [R("2∛2"), "2cbrt(2)", "ok"], [R("2∛2"), "2cbrt2", "ok"], [R("2∛2"), "2·CBRT(2)", "ok"], [R("2∛2"), "cbrt(16)", "form"], [R("2∛2"), "∛16", "form"],
   [R("2∛2"), "2cbrt(3)", "bad"], [R("2∛2"), "2√2", "bad"], [R("∛5"), "cbrt(5)", "ok"], [R("∛5"), "cbrt5", "ok"], [R("∛5"), "cbrt(25)", "bad"],
   [R("∜x", "expression"), "∜x", "ok"], [R("x^(1/3)", "expression"), "cbrt(x)", "ok"], [{ ...R("∛2; 1", "list"), title: "Розв'яжи $(x^3 - 2)(x - 1) = 0$" }, "x = cbrt(2); x = 1", "ok"], [R(3, "number"), "cbrt(27)", "form"],
   [R("2a + c", "expression"), "2a + c", "ok"]]
    .forEach(([s, v, exp]) => eq(L.checkAns(s, v), exp, `cbrt: ${JSON.stringify(s)} ← «${v}»`)); }

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
  /* engine-srs-retest-p3 (P3-1 приймання): пул з'явився після уроку — запису SRS немає, srsInit не було.
   Перша вдала сесія стартує з коробки уроку (0) → коробка 1, 3 дні — так само, як тема, пройдена з пулом. Старий код давав box 0 (1 день). */
{ const D = "2026-11-02";
  const withPool = { srs: {}, seen: {}, lessons: { t: { done: true } } }; L.srsInit(withPool, "t", "2026-11-01");
  const late = { srs: {}, seen: {}, lessons: { t: { done: true } } };
  const uw = L.srsUpdate(withPool, [{ lesson: "t", ok: true }], D), ul = L.srsUpdate(late, [{ lesson: "t", ok: true }], D);
  eq(withPool.srs.t, { box: 1, due: "2026-11-05" }, "srs late pool: урок з пулом → перша вдала сесія box 1");
  eq(late.srs.t, withPool.srs.t, "srs late pool: пул після уроку → той самий box 1, 3 дні");
  eq([ul[0].was, ul[0].days], [uw[0].was, uw[0].days], "srs late pool: was/days як у теми з пулом");
  const lateBad = { srs: {}, seen: {}, lessons: { t: { done: true } } };
  L.srsUpdate(lateBad, [{ lesson: "t", ok: true }, { lesson: "t", ok: false }], D);
  eq(lateBad.srs.t, { box: 0, due: "2026-11-03" }, "srs late pool: помилка в першій сесії → box 0, завтра");
  // тема без пройденого уроку й без запису (закрита тема поточного класу, unlockAll) — як раніше: з −1 → box 0
  const notDone = { srs: {}, seen: {}, lessons: { t: { done: false } } };
  eq(L.srsUpdate(notDone, [{ lesson: "t", ok: true }], D)[0], { lesson: "t", box: 0, was: -1, days: 1 }, "srs late pool: непройдений урок — box 0 як раніше");
  // старий профіль без lessons і з наявним записом: запис не переінтерпретовується, падіння немає
  const legacy = { srs: { t: { box: 0, due: "2026-11-03" }, u: { box: 2, due: "2026-11-01" } }, seen: {} };
  eq(L.srsUpdate(legacy, [{ lesson: "t", ok: true }, { lesson: "u", ok: true }, { lesson: "v", ok: true }], D).map(x => [x.lesson, x.was, x.box]),
    [["t", 0, 1], ["u", 2, 3], ["v", -1, 0]], "srs late pool: старий профіль без lessons — наявні коробки як були");
  eq(L.isDue(late, "t", D), false, "srs late pool: після сесії тема не чекає до строку"); }

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
/* Пул на кілька розділів (also, docs/design/math-ister.md §4): клас вправи — за розділом її уроку. */
{
  const c = { sections: [
    { id: "a5", grade: 5, lessons: [{ id: "area" }] },
    { id: "v6", grade: 6, lessons: [{ id: "box" }, { id: "vol" }] }], pools: [] };
  c.pools.push({ id: "pv", section: "v6", also: ["a5"], items: ["area", "box", "vol"].map((lesson, i) => ({ id: "i" + i, lesson, lvl: 1 })) });
  const S5 = { grade: 5, lessons: {}, seen: {}, srs: {} }, S6 = { grade: 6, lessons: {}, seen: {}, srs: {} };
  eq(L.practiceItems(S5, c).map(it => it.lesson), ["area"], "practice also: 5 кл. бачить лише вправи уроку свого класу, не 6-го");
  eq(L.practiceItems(S6, c).map(it => it.lesson), ["box", "vol"], "practice also: 6 кл. — поточні уроки; молодший непройдений закритий");
  S6.lessons.area = { done: true };
  eq(L.practiceItems(S6, c).map(it => it.key), ["pv:i0", "pv:i1", "pv:i2"], "practice also: пройдений урок молодшого розділу відкритий, ключ — id пулу");
  const S4 = { grade: 4, lessons: { area: { done: true } }, seen: {}, srs: {} };
  eq(L.practiceItems(S4, c), [], "practice also: старші розділи закриті");
  const noAlso = { ...c, pools: [{ id: "pv", section: "v6", items: [{ id: "i0", lesson: "area", lvl: 1 }, { id: "i1", lesson: "box", lvl: 1 }] }] };
  eq(L.practiceItems(S6, noAlso).map(it => it.lesson), ["box"], "practice: без also урок чужого розділу не потрапляє в тренування");
  const ctx = { sections: new Map([["a5", { grade: 5, lessons: ["area"] }], ["v6", { grade: 6, lessons: ["box", "vol"] }]]), skills: { num: {} } };
  const vp = (extra, lesson = "area") => L.validatePool({ id: "p", section: "v6", status: "draft", sources: [{ id: "b", title: "t", url: "https://x" }],
    items: [{ id: "a", lesson, lvl: 1, sk: "num", src: "b 1", type: "answer", title: "t", steps: ["s"], answer: 1 }], ...extra }, ctx);
  eq(vp({ also: ["a5"] }), [], "validatePool also: урок з розділу also — коректно");
  eq(vp({}).some(e => e.includes("не з розділу")), true, "validatePool: без also урок іншого розділу — помилка");
  eq(vp({ also: ["zz"] }).some(e => e.includes("also")), true, "validatePool also: невідомий розділ — помилка");
  eq(vp({ also: ["v6"] }).some(e => e.includes("also")), true, "validatePool also: розділ пулу в also — помилка");
  eq(vp({ also: ["a5", "a5"] }).some(e => e.includes("also")), true, "validatePool also: повтор — помилка");
  eq(vp({ also: "a5" }).some(e => e.includes("also")), true, "validatePool also: не масив — помилка");
  eq(vp({ also: [] }).some(e => e.includes("also")), true, "validatePool also: порожній масив — помилка");
  eq(vp({ also: ["a5"] }, "vol"), [], "validatePool also: урок основного розділу — коректно");
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
  // реальний dg6: 30 завдань; rev 2 — п'ять cur-проб, rev 3 — ще дві (pct №7, pct-of №27, refine-math-dg6-pct-rev3); індекси й порядок не змінено.
  // 2026-11-03 (D-043, docs/design/math-ister.md §5.2): №21 g6-lcm → pre-тема g6-div, №27 pct → cur-тема pct-of — завдання ті самі
  const TOPICS = "ord frac frac-cmp rem frac-add eq pct dec mixed geom frac-of dec-ops ord frac rem frac-cmp g6-div eq dec frac-add g6-div frac-of geom mixed g6-fadd dec-ops pct-of g6-prop g6-neg g6-eq".split(" ");
  eq(d.items.map(it => it.topic), TOPICS, "dg6: теми за індексами (збережені вердикти не зсуваються)");
  eq(d.items.flatMap((it, i) => it.rev ? [[i, it.topic, it.rev]] : []), [[6, "pct", 3], [16, "g6-div", 2], [20, "g6-div", 2], [24, "g6-fadd", 2], [26, "pct-of", 3], [27, "g6-prop", 2], [28, "g6-neg", 2]], "dg6: rev 2 і rev 3 лише в замінених пробах");
  eq(L.diagRev(d), 3, "dg6: редакція 3");
  // перерваний тест редакції 1 (усе правильно до другого dec-ops включно): п'ять проб відкинуто, решта на місці
  const S = { grade: 6, diag: {}, plan: {}, diagRun: { dg6: Object.fromEntries(Array.from({ length: 26 }, (_, i) => [i, OK])) } };
  const r = L.resumeDiag(S, d);
  eq([r.dropped, Object.keys(S.diagRun.dg6).length, L.nextItem(d, S.diagRun.dg6), S.diagRunRev.dg6], [[6, 16, 20, 24], 22, 6, 3], "dg6: legacy-запуск — заново pct, g6-div ×2, g6-fadd; 22 відповіді лишились");
  // перерваний тест редакції 2 (відповіді 0–28): відкинуто лише проби rev 3 — pct і pct-of
  const S2 = { grade: 6, diag: {}, plan: {}, diagRunRev: { dg6: 2 }, diagRun: { dg6: Object.fromEntries(Array.from({ length: 29 }, (_, i) => [i, OK])) } };
  const r2 = L.resumeDiag(S2, d);
  eq([r2.dropped, Object.keys(S2.diagRun.dg6).length, L.nextItem(d, S2.diagRun.dg6), S2.diagRunRev.dg6], [[6, 26], 27, 6, 3], "dg6: запуск ред. 2 — заново лише pct і pct-of");
  // складені проби: known лише коли вся проба правильна
  const all = Object.fromEntries(d.items.map((_, i) => [i, OK]));
  eq(L.buildPlan(d, all, {}).known, ["ms3l1", "ms3l2", "g6m2l4", "g6m3l2", "g6m4l3", "g6m5l3"], "dg6: усе правильно → known шести уроків (з 2026-11-03 — відсотки, не подільність)");
  eq(L.buildPlan(d, { ...all, 24: BAD, 28: SKIP }, {}).known, ["ms3l1", "ms3l2", "g6m3l2", "g6m5l3"], "dg6: помилка в складеній пробі → урок не known");
  eq(L.buildPlan(d, { ...all, 6: BAD, 26: SKIP }, {}).known, ["g6m2l4", "g6m3l2", "g6m4l3", "g6m5l3"], "dg6: помилка в пробі pct / pct-of (ред. 3) → ms3l1, ms3l2 не known");
  // пули 6 кл.: id з редакції 2026-10-13 (літера уроку + 01–08) лишились у своїх уроках, крім замінених; нові — нові id
  const REMOVED = { pg6m1: ["a01", "b03", "c03"], pg6m3: ["a05", "b05"], pg6m4: ["e05"], pg6m5: ["a03", "b01"] };
  const ADDED = { pg6m1: ["a09", "b09", "c09"], pg6m3: ["a09", "b09"], pg6m4: ["e09"], pg6m5: ["a09", "b09"] };
  // Тематичні уроки розділу станом на редакцію 2026-10-13: літера вправи = індекс уроку в ЦЬОМУ списку, а не в поточному розділі.
  // 2026-11-03 (D-043, пакет за Істером): нові уроки (g6m3l7, g6m4l7–l9) вставлено в розділ перед старими — поточний індекс зсувався б.
  const HIST = { pg6m1: ["g6m1l1", "g6m1l2", "g6m1l3", "g6m1l4"], pg6m2: ["g6m2l1", "g6m2l2", "g6m2l3", "g6m2l4", "g6m2l5"],
    pg6m3: ["g6m3l1", "g6m3l2", "g6m3l3", "g6m3l4", "g6m3l5"], pg6m4: ["g6m4l1", "g6m4l2", "g6m4l3", "g6m4l4", "g6m4l5"],
    pg6m5: ["g6m5l1", "g6m5l2", "g6m5l3", "g6m5l4"] };
  const pools6 = math.pools.filter(p => /^pg6m[1-5]$/.test(p.id));
  eq(pools6.map(p => p.id).sort(), Object.keys(HIST), "пули pg6m1–5 є (якір: перевірка нижче не порожня)");
  for (const p of pools6) {
    const sec = math.sections.find(s => s.id === p.section), lessons = sec.lessons.filter(l => !l.boss).map(l => l.id), hist = HIST[p.id];
    eq(hist.every(l => lessons.includes(l)), true, `${p.id}: історичні уроки ${hist.join(", ")} є в розділі`);
    const old = hist.flatMap((l, k) => Array.from({ length: 8 }, (_, j) => [String.fromCharCode(97 + k) + "0" + (j + 1), l])).filter(([id]) => !(REMOVED[p.id] || []).includes(id));
    eq(old.every(([id, l]) => p.items.some(it => it.id === id && it.lesson === l)), true, `${p.id}: сталі id і уроки збережено`);
    eq(p.items.filter(it => !old.some(([id]) => id === it.id)).map(it => it.id), ADDED[p.id] || [], `${p.id}: нові вправи — лише нові id`);
    eq(p.items.some(it => (REMOVED[p.id] || []).includes(it.id)), false, `${p.id}: вилучені id не використано знову`);
    // історичні (required) уроки — строго 6–8; новий урок без пулу (D-043, pending у матриці) — 0, з пулом — так само 6–8
    for (const l of lessons) { const n = p.items.filter(it => it.lesson === l).length;
      eq((n >= 6 && n <= 8) || (n === 0 && !hist.includes(l)), true, `${p.id}/${l}: 6–8 вправ (${n})`); }
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
  // engine-unit-hint: та сама величина в іншій одиниці — «Перевір одиницю» (не «Зміни відповідь»); вердикт лишається bad
  // рев'ю engine-unit-hint P3-2: для conv текст «Перевір одиницю: переведи відповідь у …» (не «Одиницю можна й не писати»); bare — як раніше
  { const UM = u => `Перевір одиницю: переведи відповідь у «${u}».`, UB = u => `Перевір одиницю: тут відповідь записують у «${u}». Одиницю можна й не писати.`;
    for (const [a, u, v, h] of [[2, "кг", "2000 г", UM("кг")], [2, "кг", "2 000 г", UM("кг")], [2, "кг", "2000 г.", UM("кг")], [2, "кг", "2000г", UM("кг")],
      [2500, "см", "25 м", UM("см")], [3, "см²", "300 мм2", UM("см²")], [3, "см²", "300 мм^2", UM("см²")], ["1,5", "год", "90 хв", UM("год")], ["13/20", "год", "39 хв", UM("год")],
      [10, "м/с", "36 км/год", UM("м/с")], [2, "л", "2000 мл", UM("л")], [2, "л", "2 дм³", UB("л")], [2, "кг", "2 г", UB("кг")], [1, "км/хв", "1000 м/хв", UM("км/хв")], [1, "км/хв", "60 км/год", UM("км/хв")], [1, "км/хв", "100 м/хв", null], [60, "км/год", "1 км/хв", UM("км/год")], [120, "год", "5 діб", UM("год")], [120, "год", "5 доби", UM("год")], ["2,08", "грн", "208 коп.", UM("грн")],
      [5, "км", "5000 м", UM("км")], [400, "дм²", "4 м²", UM("дм²")],
      [2, "кг", "2001 г", null], [2, "кг", "200 г", null], [7, "см", "-70 мм", null], [2, "кг", "2000 см", null], [2, "кг", "2000 мм", null], [5, "°", "5000 мм", null], [8, "%", "80 мм", null], [2, "кг", "2 кг 0 г", null]]) {
      const s = N(a, { unit: u }); eq([L.checkAns(s, v), L.badHint(s, v)], ["bad", h], `badHint unit-hint: ${a} ${u} ← «${v}»`); }
    eq([L.unitEq(N(7, { unit: "см" }), "7 мм"), L.unitEq(N(7, { unit: "см" }), "70 мм"), L.unitEq(N(7, { unit: "см" }), "71 мм"), L.unitEq(N(7, { unit: "см" }), "70")], ["bare", "conv", null, null], "unitEq: bare / conv / null");
    // лише number: list, exactRoot з unit — як і раніше
    eq([L.badHint(K("list", "70; 110", { unit: "см" }), "700 мм; 1100 мм"), L.badHint(K("exactRoot", "4√2", { unit: "см" }), "40√2 мм"), L.badHint(K("exactRoot", "4", { unit: "см" }), "40 мм")], [null, null, null], "unit-hint: не для list / exactRoot");
    eq([UM("кг"), UB("кг")].every(t => L.hintTexts(N(2, { unit: "кг" })).includes(t)), true, "unit-hint: обидва тексти серед hintTexts");
    eq([/правильн|\d/.test(UM("кг")), /можна й не писати/.test(UM("кг"))], [false, false], "unit-hint conv: без «правильне», чисел і «можна не писати»");
    // справжні вправи пулів (як проби рецензента engine-answer-unit-choice): рівна величина в кожній іншій одиниці тієї самої величини
    const T = { "мм": ["l", 1], "см": ["l", 10], "дм": ["l", 100], "м": ["l", 1e3], "км": ["l", 1e6], "мм²": ["a", 1], "см²": ["a", 100], "дм²": ["a", 1e4], "м²": ["a", 1e6], "га": ["a", 1e10], "км²": ["a", 1e12],
      "мм³": ["v", 1], "см³": ["v", 1e3], "мл": ["v", 1e3], "дм³": ["v", 1e6], "л": ["v", 1e6], "м³": ["v", 1e9], "мг": ["m", 1], "г": ["m", 1e3], "кг": ["m", 1e6], "ц": ["m", 1e8], "т": ["m", 1e9],
      "с": ["t", 1], "хв": ["t", 60], "год": ["t", 3600], "діб": ["t", 86400], "коп": ["g", 1], "грн": ["g", 100], "м/с": ["s", 3.6], "км/год": ["s", 1], "м/хв": ["s", .06] };
    const fmt = x => String(+x.toFixed(6)).replace(".", ",");
    const items = (await import("./lib.mjs")).loadContent().subjects.flatMap(c => (c.pools || []).flatMap(p => p.items.map(it => [p.id + ":" + it.id, it])));
    let probes = 0; const bad = [], noHint = [], leak = [];
    for (const [id, s] of items) {
      if (s.type !== "answer" || (s.answerKind || "number") !== "number" || !T[s.unit]) continue;
      const a = L.parseAns(String(s.answer).replace(".", ",")); if (!a) continue;
      const [d, f] = T[s.unit], base = a.n / a.d * f, key = L.keyInput(s);
      for (const [u, [d2, f2]] of Object.entries(T)) {
        const v = base / f2; if (d2 !== d || f2 === f || !(+v.toFixed(3) > 0) || Math.abs(+v.toFixed(3) - v) > 1e-9 || v > 1e7) continue;
        const p = `${fmt(v)} ${u}`, r = L.checkAns(s, p), h = L.badHint(s, p, r); probes++;
        if (r !== "bad") bad.push(`${id} «${p}» ${r}`); else if (h !== UM(s.unit)) noHint.push(`${id} «${p}»`); else if (h.includes(String(key))) leak.push(`${id} «${p}»`);
      }
    }
    eq(probes > 600, true, `unit-hint: проб на справжніх вправах ${probes} > 600`);
    eq([bad.slice(0, 5), noHint.slice(0, 5), leak.slice(0, 5)], [[], [], []], "unit-hint: справжні вправи — вердикт bad, підказка «Перевір одиницю», без ключа");
    // задачі на переведення: переписане дане умови («25 м = … см») — та сама підказка: не каже, що значення правильне, не видає ключ
    const conv = { "pg4m4:d01": "25 м", "pg4m4:b01": "208 т", "pg4m4:b02": "370 ц", "pg4m4:b03": "160 кг", "pg4m4:c03": "4 м²", "pg4m4:a02": "5 діб", "pms1:a05": "39 хв", "pms2:a07": "208 коп.", "pms4:a03": "1 дм²", "pg6m2:b06": "36 хв" };
    for (const [id, v] of Object.entries(conv)) { const s = items.find(x => x[0] === id)?.[1]; if (!s) { eq(id, "є у змісті", "unit-hint: вправа на переведення"); continue; }
      const h = L.badHint(s, v); eq([L.checkAns(s, v), h, /правильн/.test(h || ""), (h || "").includes(String(L.keyInput(s)))], ["bad", UM(s.unit), false, false], `unit-hint переведення ${id} ← «${v}»`); }
  }
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
  // p3b: «A1(…)» (образ з індексом) — form «лише координати», «X = (…)» (X — позначення з умови) — form, не ok
  const PM = K("coordinates2", [1, -5], { title: "Симетрія відносно точки $M$", body: "<p>Знайди координати точки, симетричної точці $A(3; -1)$ відносно точки $M(2; -3)$.</p>" });
  const PX = K("coordinates2", [-4, 2], C("<p>Кожна точка $X$ переходить у точку $X_1$ на промені $OX$.</p><p>Знайди образ точки $A(-2; 1)$.</p>"));
  for (const [s, v, r] of [[PM, "M = (1; -5)", "form"], [PM, "M(1; -5)", "form"], [PM, "A(1; -5)", "form"], [PM, "A1(1; -5)", "ok"], [PM, "B(1; -5)", "ok"], [PM, "B = (1; -5)", "ok"], [PM, "M(1; 5)", "bad"],
    [PX, "X = (-4; 2)", "form"], [PX, "A(-4; 2)", "form"], [PX, "AB = (-4; 2)", "ok"], [PX, "B(-4; 2)", "ok"]])
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

/* engine-diag-answer-kinds: answer з answerKind у SLID.diag — дозволені формати, вердикт без фідбеку, редакції збережених тестів */
{ const lessons = new Map([["a1", { grade: 3 }], ["x1", { grade: 4 }]]), vc = { lessons, sections: new Map(), skills: { "m.meas": 1 } };
  const mk = item => ({ id: "dga", grade: 4, title: "T", why: "W", status: "draft",
    topics: [{ id: "a", title: "A", kind: "pre", lessons: ["a1"] }, { id: "x", title: "X", kind: "cur", lessons: ["x1"] }],
    items: [{ topic: "a", type: "choice", sk: "m.meas", title: "q1" }, { topic: "a", type: "number", sk: "m.meas", title: "q2" }, { topic: "x", sk: "m.meas", title: "q3", ...item }] });
  eq(L.DIAG_TYPES.includes("answer"), true, "diag answer: тип answer дозволено");
  eq(L.DIAG_ANSWER_KINDS, ["number", "time", "quantity"], "diag answer: формати — number, time, quantity");
  const okItems = [{ type: "answer", answerKind: "time", answer: "9:55" }, { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"] },
    { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"], form: "compound" }, { type: "answer", answer: "37,0", decimals: 1 },
    { type: "answer", answer: "7/3", form: "improper" }, { type: "answer", answer: -4, signed: true }, { type: "answer", answer: "2 1/3" }];
  for (const it of okItems) eq(L.validate(mk(it), vc), [], `diag answer: ${JSON.stringify(it)} — дозволено`);
  for (const k of L.ANSWER_KINDS.filter(k => !L.DIAG_ANSWER_KINDS.includes(k))) {
    const E = L.validate(mk({ type: "answer", answerKind: k, answer: "1" }), vc);
    eq(E.length === 1 && E[0].includes(`answerKind «${k}» у тесті не дозволено`), true, `diag answer: answerKind ${k} у тесті — помилка (${JSON.stringify(E)})`); }
  eq(L.validate(mk({ type: "answer", answerKind: "time", answer: "9:55", rev: 2 }), vc), [], "diag answer: заміна на місці з rev 2 — дозволено");
  eq(L.validate(mk({ type: "number", answer: 1, answerKind: "time" }), vc).length, 0, "diag: answerKind на number перевіряє validate.mjs (answerFieldIssues), не learn.validate");
  // вердикт тесту — як у плеєрі (app.js check → gradeNow): OK лише для checkAns === "ok"; form (значення правильне, запис ні) — BAD
  const verdict = (s, v) => L.checkAns(s, v) === "ok" ? OK : BAD;
  const T = { type: "answer", answerKind: "time", answer: "10:05" }, Q = { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"], form: "compound" }, DEC = { type: "answer", answer: "37,0", decimals: 1 };
  eq([verdict(T, "10:05"), verdict(T, "10.05"), verdict(T, "9:55"), verdict(T, "10:5"), verdict(T, ""), verdict(T, "10 05")].map(x => x === OK), [true, L.checkAns(T, "10.05") === "ok", false, L.checkAns(T, "10:5") === "ok", false, L.checkAns(T, "10 05") === "ok"], "diag answer time: OK лише для ok");
  eq(["2 м 45 см", "245 см", "2 м 46 см", "2,45 м"].map(v => [L.checkAns(Q, v), verdict(Q, v)]), [["ok", OK], ["form", BAD], ["bad", BAD], [L.checkAns(Q, "2,45 м"), L.checkAns(Q, "2,45 м") === "ok" ? OK : BAD]], "diag answer quantity compound: «245 см» — form → BAD");
  eq(["37,0", "37"].map(v => [L.checkAns(DEC, v), verdict(DEC, v)]), [["ok", OK], ["form", BAD]], "diag answer decimals: «37» при decimals 1 — form → BAD");
  // збережений тест: number → answer time на тому самому місці з rev 2 — вердикт старого змісту відкидається, решта лишається
  const V1 = mk({ type: "number", answer: 55 }), V2 = mk({ type: "answer", answerKind: "time", answer: "10:05", rev: 2 });
  const S = { ...fresh(), diagRun: { dga: { 0: OK, 1: BAD, 2: OK } } };
  eq([L.resumeDiag(S, V2).dropped, S.diagRun.dga, S.diagRunRev.dga, L.nextItem(V2, S.diagRun.dga)], [[2], { 0: OK, 1: BAD }, 2, 2], "diag answer rev: відповідь на старий number відкинуто, завдання покажуть знову");
  S.diagRun.dga[2] = verdict(V2.items[2], "10:05");
  eq([L.resumeDiag(S, V2).dropped, S.diagRun.dga[2]], [[], OK], "diag answer rev: відповідь на нову редакцію зберігається");
  const S1 = { ...fresh(), diagRun: { dga: { 2: OK } }, diagRunRev: { dga: 1 } };
  eq([L.resumeDiag(S1, V1).dropped, S1.diagRun.dga], [[], { 2: OK }], "diag answer rev: без заміни (ред. 1) нічого не відкидається");
  // завершений тест не перераховується
  const SD = { ...fresh(), diagRun: {} }; L.finishDiag(SD, "math", V1, { 0: OK, 1: OK, 2: OK }, {});
  const done = clone(SD.diag.dga); L.resumeDiag(SD, V2);
  eq([SD.diag.dga, done.rev], [done, 1], "diag answer rev: завершений результат лишається як був (rev 1)");
}
/* engine-learn-prefixes-p3b: назви об'єктів умови без координат, назви образу з індексом/штрихом */
{ const A3 = { answerKind: "coordinates2", answer: [-1.5, 3], body: "<p>Знайди координати середини відрізка $BC$, якщо $B(-2; -1)$, $C(-1; 7)$.</p>" };
  const C6 = { answerKind: "coordinates2", answer: "(-3; 1)", body: "<p>Знайди координати точки, симетричної точці $A(3; -1)$ відносно початку координат $O(0; 0)$.</p><p>Образ лежить на прямій $AO$.</p>" };
  const D3 = { answerKind: "coordinates2", answer: "(-4; 2)", body: "<p>Кожна точка $X$ переходить у точку $X_1$ на промені $OX$, $OX_1 = 2 · OX$, центр $O(0; 0)$.</p><p>Знайди образ точки $A(-2; 1)$.</p>" };
  const C5 = { answerKind: "coordinates2", answer: "(-5; 5)", body: "<p>Образом точки $A$ є точка $A_1(-3; 4)$. Знайди координати точки $A$.</p>" };
  const SYS = { answerKind: "coordinates2", answer: "(2; 5)", body: "<p>Розв'яжи систему й запиши пару $(x;\\,y)$.</p>" };
  const V3 = { answerKind: "coordinates3", answer: "(1; -2; 3)", body: "<p>Дано точки $A(0; 0; 0)$ і відрізок $KL$. Знайди координати вершини куба.</p>" };
  const T = (s, v, r, what) => eq(L.checkAns(s, v), r, `p3b ${what}: «${v}» → ${r}`);
  // хибні ok закрито: назва об'єкта умови → form з поясненням, з неправильним значенням → bad без підказки
  for (const [s, v, what] of [[A3, "BC = (-1,5; 3)", "відрізок BC"], [A3, "BC(-1,5; 3)", "BC без «=»"], [C6, "AO = (-3; 1)", "пряма AO"], [D3, "X(-4; 2)", "X з означення"], [D3, "OX = (-4; 2)", "промінь OX"],
    [V3, "KL = (1; -2; 3)", "coordinates3 відрізок KL"], [A3, "\\vec{BC} = (-1,5; 3)", "\\vec{BC}"]]) {
    T(s, v, "form", what); eq(L.formHint(s, v), `Координати правильні, але ${v.match(/[A-Z]{1,2}/)[0]} — інше позначення з умови, а не шукана точка. Запиши лише координати.`, `p3b ${what}: пояснення`); }
  for (const [s, v] of [[A3, "BC = (-1; 3)"], [C6, "AO = (3; -1)"], [D3, "X(4; -2)"], [D3, "OX = (-4; 3)"], [V3, "KL = (1; 2; 3)"]]) { T(s, v, "bad", "неправильне значення з назвою умови"); eq(L.badHint(s, v), null, `p3b «${v}»: bad без підказки`); }
  // вільні назви й дані точки — без змін (D-031 (1))
  T(A3, "M(-1,5; 3)", "ok", "вільна назва M"); T(A3, "M = (-1,5; 3)", "ok", "вільна назва M ="); T(A3, "(-1,5; 3)", "ok", "без назви");
  T(A3, "B(-1,5; 3)", "form", "дана точка B"); T(C6, "B(-3; 1)", "ok", "вільна назва B"); T(SYS, "A = (2; 5)", "ok", "система, вільна назва A"); T(V3, "M(1; -2; 3)", "ok", "coordinates3 вільна M");
  T(C5, "A(-5; 5)", "ok", "шукана A"); T(C5, "A = (-5; 5)", "ok", "шукана A =");
  // назва образу з індексом чи штрихом: ok лише для образу даної точки A, про який питає умова (рішення людини 2026-11-01, engine-decisions-1101);
  // інші назви з індексом чи штрихом — form «лише координати», неправильне значення → bad без підказки
  for (const v of ["A_1(-3; 1)", "A_{1}(-3; 1)", "A₁(-3; 1)", "А₁(-3; 1)", "A1(-3; 1)", "A'(-3; 1)", "A′ = (-3; 1)", "A’(-3; 1)", "A_1 = (-3; 1)"]) T(C6, v, "ok", "образ A — A₁/A′");
  for (const v of ["B''(-3; 1)", "AB_1(-3; 1)", "B_1(-3; 1)", "B₁(-3; 1)", "A_2(-3; 1)", "A₂(-3; 1)", "A''(-3; 1)", "O_1(-3; 1)", "A_{12}(-3; 1)"]) {
    T(C6, v, "form", "образ з індексом/штрихом"); eq(L.formHint(C6, v), "Координати правильні. Назву з індексом чи штрихом тут не пишуть — запиши лише координати.", `p3b «${v}»: пояснення`); }
  for (const v of ["A_1(-3; 2)", "A'(3; -1)", "A₁(1; -3)", "A1(-3; -1)"]) { T(C6, v, "bad", "образ з неправильним значенням"); eq(L.badHint(C6, v), null, `p3b «${v}»: bad без підказки`); }
  for (const v of ["A_1 = A(-3; 1)", "A_1 A_1(-3; 1)", "A_1 = A_1 = (-3; 1)", "A_1(-3; 1) + 1", "A_123(-3; 1)", "a_1(-3; 1)", "_1(-3; 1)", "A_x(-3; 1)"]) T(C6, v, "bad", "подвійна або не-назва");
  T(D3, "X_1(-4; 2)", "form", "X_1 з означення"); T(D3, "A_1(-4; 2)", "ok", "A_1 — образ A (рішення 2026-11-01)"); T(D3, "X'(-4; 2)", "form", "X' з означення");
  T(C5, "A_1(-5; 5)", "form", "дана A_1 при шуканій A"); eq(L.formHint(C5, "A_1(-5; 5)"), "Координати правильні, але тут шукають A.", "p3b c05: шукана назва в поясненні");
  // hintTexts: нові пояснення є у списку для звірки «підказка ≠ ключ»
  const H = L.hintTexts(A3);
  eq(["Координати правильні, але BC — інше позначення з умови, а не шукана точка. Запиши лише координати.", "Координати правильні, але B — дана точка умови. Запиши лише координати.", "Координати правильні. Назву з індексом чи штрихом тут не пишуть — запиши лише координати."].every(t => H.includes(t)), true, "p3b hintTexts: objMsg, givenMsg, pointImage");
  // числовий шлях: мала літера без «=» — як і раніше; символьний coordinates2 з назвою умови
  const SP = { answerKind: "coordinates2", answer: "(p - m; k - n)", body: "<p>Знайди координати вектора $\\overrightarrow{AB}$, якщо $A(m; n)$, $B(p; k)$.</p>" };
  T(SP, "AB = (p - m; k - n)", "ok", "символьний, шукана AB"); T(SP, "A(p - m; k - n)", "form", "символьний, дана A"); T(SP, "A_1(p - m; k - n)", "form", "символьний, образ");
}
/* P3-2 (рев'ю engine-diag-answer-kinds): шукана назва без слова-маркера («Знайди координати $D$», «Знайди $D$») чи лише в заголовку —
   це ask, а не objs: природне «D(…)» — ok; інші назви — form, як за будь-якої шуканої назви. Негативні: маркер не з того речення,
   «образ» у заголовку, довжина відрізка — назва лишається в objs (form), хибних ok немає */
{ const T = (s, v, r, what) => eq(L.checkAns(s, v), r, `ask-bare ${what}: «${v}» → ${r}`);
  const R = "$A(1; 1)$, $B(3; 1)$ і $C(3; 4)$ — вершини прямокутника $ABCD$";
  const K1 = { answerKind: "coordinates2", answer: "(1; 4)", body: `<p>Точки ${R}. Знайди координати $D$.</p>` };
  const K2 = { answerKind: "coordinates2", answer: "(1; 4)", body: `<p>Точки ${R}. Знайди $D$.</p>` };
  const K3 = { answerKind: "coordinates2", answer: "(1; 4)", title: "Вершина $D$", body: `<p>Точки ${R}. Знайди координати четвертої вершини.</p>` };
  const K4 = { answerKind: "coordinates2", answer: "(1; 4)", title: "Вершина $D$", body: `<p>Точки ${R}. Знайди координати вершини $D$.</p>` };
  for (const [s, w] of [[K1, "координати $D$"], [K2, "Знайди $D$"], [K3, "лише в заголовку"], [K4, "маркер і заголовок"]]) {
    for (const v of ["D(1; 4)", "D = (1; 4)", "(1; 4)"]) T(s, v, "ok", w);
    for (const v of ["M(1; 4)", "A(1; 4)", "CD = (1; 4)", "D_1(1; 4)"]) T(s, v, "form", w);
    for (const v of ["D(1; 3)", "D(4; 1)", "ABCD(1; 4)", "D D(1; 4)"]) T(s, v, "bad", w);
    eq(L.formHint(s, "M(1; 4)"), "Координати правильні, але тут шукають D.", `ask-bare ${w}: пояснення називає D`); }
  // негативні: назва не шукана — лишається в objs
  const N1 = { answerKind: "coordinates2", answer: "(-3; 1)", title: "Образ точки $A$", body: "<p>Точку $A$ відбили симетрично відносно початку координат. Знайди координати образу, якщо $A$ мала координати $(3; -1)$.</p>" };
  const N2 = { answerKind: "coordinates2", answer: "(1; 2)", body: "<p>Дано $P(0; 0)$ і $Q(2; 4)$. Знайди довжину $PQ$ і координати середини відрізка $PQ$. Запиши координати середини.</p>" };
  const N3 = { answerKind: "coordinates2", answer: "(1; 2)", title: "Відрізок $PQ$", body: "<p>Дано $P(0; 0)$ і $Q(2; 4)$. Знайди координати середини відрізка.</p>" };
  const N4 = { answerKind: "coordinates2", answer: "(1; 2)", body: "<p>Пряма $KM$ перетинає вісь. Знайди координати точки перетину.</p><p>Точка $K$ лежить вище.</p>" };
  T(N1, "A(-3; 1)", "form", "«образ» у заголовку — A не шукана"); T(N1, "(-3; 1)", "ok", "образ без назви");
  T(N2, "PQ = (1; 2)", "form", "«Знайди довжину $PQ$» — не шукана назва"); T(N2, "M(1; 2)", "ok", "вільна назва M");
  T(N3, "PQ = (1; 2)", "form", "заголовок «Відрізок» — не маркер"); T(N4, "K(1; 2)", "form", "K з іншого речення"); T(N4, "KM = (1; 2)", "form", "пряма KM");
}
/* P3 рев'ю engine-lab-aria-p3d (engine-practice-pool). P3-1: назва із заголовка — лише якщо в самій умові вона не трапляється окремим
   токеном (заголовок звужує, а не розширює: хибних ok «A(образ)» немає). P3-2: «середини $M$ відрізка $AB$» — M шукана;
   «середини відрізка $AB$» — AB не шукана. P3-3: заголовок не діє, коли умова назву вже дала (мутація «!names.size»). */
{ const T = (s, v, r, what) => eq(L.checkAns(s, v), r, `ask-title ${what}: «${v}» → ${r}`);
  const S1 = { answerKind: "coordinates2", answer: "(-2; 3)", title: "Точка $A$ і симетрія", body: "<p>Точка $A$ має координати $(2; 3)$. Знайди координати точки, симетричної їй відносно осі $Oy$.</p>" };
  T(S1, "A(-2; 3)", "form", "A з умови — не шукана"); T(S1, "B(-2; 3)", "ok", "вільна назва"); T(S1, "(-2; 3)", "ok", "без назви");
  const S2 = { answerKind: "coordinates2", answer: "(1; 2)", title: "Точка $K$ на прямій", body: "<p>Пряма проходить через точку $K$ і початок координат. Знайди координати точки перетину прямої з прямою $y = 2$.</p>" };
  // рев'ю engine-practice-pool P2-1: назву заголовка відкидаємо лише тоді, коли тіло дає їй дані; тут K даних не має —
  // шукана K із заголовка, як до P3-1 (консервативно: правильна назва з заголовка не дає хибного form)
  T(S2, "K(1; 2)", "ok", "K без даних у тілі — шукана із заголовка"); T(S2, "M(1; 2)", "form", "інша назва при шуканій K");
  // N2 (рев'ю engine-practice-pool; engine-p3-1101): евристики «безіменна шукана» немає — фіксуємо поточну поведінку. Шукана точка тут
  // безіменна, але K із заголовка стає ask: без назви й «K(…)» — ok, інша назва — form з поясненням (не bad), неправильне значення — bad.
  // Якщо правило зміниться (K не шукана), цей тест має змінитися свідомо, разом із diff-answers по 4–11.
  T(S2, "(1; 2)", "ok", "N2: без назви"); T(S2, "K = (1; 2)", "ok", "N2: K = із заголовка"); T(S2, "P(1; 2)", "form", "N2: вільна назва P — form, бо K шукана");
  T(S2, "K(2; 1)", "bad", "N2: неправильне значення"); eq(L.formHint(S2, "M(1; 2)"), "Координати правильні, але тут шукають K.", "ask-title N2: пояснення називає K із заголовка");
  { const S2b = { ...S2, title: "Точка на прямій" }; T(S2b, "K(1; 2)", "form", "N2: без назви в заголовку K — точка умови (objs)"); T(S2b, "M(1; 2)", "ok", "N2: без назви в заголовку — вільна назва"); }
  const P1 = { answerKind: "coordinates2", answer: "(2; 3)", title: "Точка $M$", body: "<p>$M$ — середина відрізка $AB$, $A(1; 2)$, $B(3; 4)$. Знайди координати.</p>" };
  const P2 = { answerKind: "coordinates2", answer: "(2; 3)", title: "Точка $M$", body: "<p>Точка $M$ — середина відрізка $AB$, $A(1; 2)$, $B(3; 4)$. Знайди її координати.</p>" };
  const P3 = { answerKind: "coordinates2", answer: "(1; 1)", title: "Вершина $D$", body: "<p>У паралелограмі $ABCD$ відомі $A(0; 0)$, $B(2; 0)$, $C(3; 1)$; $D$ — четверта вершина. Знайди координати.</p>" };
  for (const [P, nm] of [[P1, "M"], [P2, "M"], [P3, "D"]]) { const v = P.answer;
    T(P, `${nm}${v}`, "ok", `«${P.title}» + «$${nm}$ — …» без маркера: шукана ${nm}`); T(P, `K${v}`, "form", `«${P.title}»: інша назва`);
    T(P, `A${v}`, "form", `«${P.title}»: дана A`); T(P, v, "ok", `«${P.title}»: без назви`);
    eq(L.formHint(P, `K${v}`), `Координати правильні, але тут шукають ${nm}.`, `ask-title: «${P.title}» — пояснення називає ${nm}`); }
  // «має координати» — дані: A не шукана й названа даною точкою
  eq(L.formHint(S1, "A(-2; 3)"), "Координати правильні, але A — дана точка умови. Запиши лише координати.", "ask-title: «Точка $A$ має координати» — A дана");
  const S3 = { answerKind: "coordinates2", answer: "(3; 2)", title: "Точка $M$ — середина", body: "<p>Дано $A(1; 1)$ і $B(5; 3)$. Знайди координати середини відрізка $AB$.</p>" };
  T(S3, "M(3; 2)", "ok", "назва лише в заголовку"); T(S3, "K(3; 2)", "form", "інша назва");
  const S4 = { answerKind: "coordinates2", answer: "(3; 2)", title: "Вершина $D$", body: "<p>Дано $A(1; 1)$ і $B(5; 3)$. Знайди координати вершини $C$.</p>" };
  T(S4, "C(3; 2)", "ok", "умова дала C"); T(S4, "M(3; 2)", "form", "умова дала C — заголовок не додає D"); T(S4, "D(3; 2)", "form", "D із заголовка");
  const M1 = { answerKind: "coordinates2", answer: "(3; 2)", body: "<p>Дано $A(1; 1)$ і $B(5; 3)$. Знайди координати середини $M$ відрізка $AB$.</p>" };
  T(M1, "M(3; 2)", "ok", "середини $M$"); T(M1, "K(3; 2)", "form", "середини $M$, інша назва"); T(M1, "AB = (3; 2)", "form", "відрізок AB");
  eq(L.formHint(M1, "K(3; 2)"), "Координати правильні, але тут шукають M.", "ask-title: пояснення називає M");
  const M2 = { answerKind: "coordinates2", answer: "(3; 2)", body: "<p>Дано $A(1; 1)$ і $B(5; 3)$. Знайди координати середини відрізка $AB$.</p>" };
  T(M2, "AB = (3; 2)", "form", "середини відрізка $AB$ — AB не шукана"); T(M2, "M(3; 2)", "ok", "вільна назва"); T(M2, "AB(3; 2)", "form", "AB без =");
  // «Середина $BC$» у заголовку (теги знято — заголовок зливається з умовою): BC — відрізок, а не шукана точка (pg9m2 a03)
  const M3 = { answerKind: "coordinates2", answer: [-1.5, 3], title: "Середина $BC$", body: "<p>Знайди координати середини відрізка $BC$, якщо $B(-2; -1)$, $C(-1; 7)$.</p>" };
  T(M3, "M(-1,5; 3)", "ok", "заголовок «Середина $BC$» — вільна назва"); T(M3, "B(-1,5; 3)", "form", "B — дана точка"); T(M3, "BC = (-1,5; 3)", "form", "BC — відрізок");
  eq(L.formHint(M3, "B(-1,5; 3)"), "Координати правильні, але B — дана точка умови. Запиши лише координати.", "ask-title: «Середина $BC$» — пояснення про дану точку, не «шукають BC»");
}
/* engine-practice-pool: початкові коробки SRS з нового результату тесту (ok → box 2 / shaky → box 0; D-030 BOX_DAYS не змінено) */
{ const day = "2026-11-01";
  eq(L.BOX_DAYS, [1, 3, 7, 16, 35], "srs з тесту: інтервали D-030 незмінні"); eq(L.DIAG_BOX, { ok: 2, shaky: 0, known: 2 }, "srs з тесту: ok і cur «знайоме» → третя, shaky → перша");
  // D: a (a1, a2) — 0 і 2; b (b1) — 1 і 4; c (c1) — 3 і 6; x, y — cur
  const resA = { 0: OK, 1: OK, 2: OK, 3: OK, 4: BAD, 5: OK, 6: BAD, 7: OK };   // a ok, b shaky, c shaky
  { const S = { ...fresh(), srs: {} }; L.finishDiag(S, "m", D, resA, { day, grade: 6 });
    eq(S.srs, { a1: { box: 2, due: "2026-11-08", src: "diag", diag: "dg", rev: 1 }, a2: { box: 2, due: "2026-11-08", src: "diag", diag: "dg", rev: 1 },
      b1: { box: 0, due: "2026-11-02", src: "diag", diag: "dg", rev: 1 }, c1: { box: 0, due: "2026-11-02", src: "diag", diag: "dg", rev: 1 },
      x1: { box: 2, due: "2026-11-08", src: "diag", diag: "dg", rev: 1 }, y1: { box: 2, due: "2026-11-08", src: "diag", diag: "dg", rev: 1 }, y2: { box: 2, due: "2026-11-08", src: "diag", diag: "dg", rev: 1 } },
      "srs з тесту: ok → box 2 (7 днів), shaky → box 0 (завтра); cur «знайоме» → box 2 (half-credit P3-2)");
    eq(L.isDue(S, "x1", day), false, "srs з тесту: урок «знайоме» не чекає повторення одразу (P3-2)");
    eq(L.isDue(S, "a1", "2026-11-07"), false, "srs з тесту: ok не чекає до 7-го дня"); eq(L.isDue(S, "a1", "2026-11-08"), true, "srs з тесту: ok — на 7-й день");
    // перша вдала сесія піднімає з коробки тесту; запис тренування вже без src — наступний тест його не чіпає
    L.srsUpdate(S, [{ lesson: "a1", ok: true }], "2026-11-08"); eq(S.srs.a1, { box: 3, due: "2026-11-24" }, "srs з тесту: сесія піднімає з box 2 на box 3");
    const allBad = Object.fromEntries(D.items.map((_, i) => [i, BAD]));
    L.finishDiag(S, "m", D, allBad, { day: "2026-11-10", grade: 6 });
    eq(S.srs.a1, { box: 3, due: "2026-11-24" }, "srs з тесту: запис тренування повторний тест не змінює");
    eq([S.srs.a2, S.srs.b1, S.srs.c1], [undefined, undefined, undefined], "srs з тесту: gap знімає запис попереднього тесту (тренування його не чіпало)");
    eq([S.srs.x1, S.srs.y1], [undefined, undefined], "srs з тесту: cur new після «знайоме» знімає запис попереднього тесту"); }
  { // наявні записи уроку/тренування (без src) не змінюються; gap не створює запису; без дня — нічого
    const S = { ...fresh(), srs: { a1: { box: 0, due: "2026-10-20" }, b1: { box: 4, due: "2026-12-01" } } };
    L.finishDiag(S, "m", D, resA, { day, grade: 6 });
    eq([S.srs.a1, S.srs.b1, S.srs.a2.box, S.srs.c1.box], [{ box: 0, due: "2026-10-20" }, { box: 4, due: "2026-12-01" }, 2, 0], "srs з тесту: записи уроку/тренування не переінтерпретуються");
    const G = fresh(); L.finishDiag(G, "m", D, { 0: BAD, 1: BAD, 3: BAD, 5: BAD, 7: SKIP }, { day, grade: 6 });
    eq(G.srs, undefined, "srs з тесту: усе gap / cur new — S.srs не створюється");
    const N = fresh(); L.finishDiag(N, "m", D, resA, { grade: 6 }); eq(N.srs, undefined, "srs з тесту: без дня — нічого");
    const H = fresh(); L.finishDiag(H, "m", D, resA, { day, grade: 6, hasLesson: id => id !== "a2" });
    eq(Object.keys(H.srs).sort(), ["a1", "b1", "c1", "x1", "y1", "y2"], "srs з тесту: лише уроки з hasLesson"); }
  { // рев'ю engine-practice-pool P3-1: пройдений урок робить запис тесту записом уроку — повторний тест його не змінює
    const S = { ...fresh(), srs: {}, lessons: {} }; L.finishDiag(S, "m", D, resA, { day, grade: 6 });
    S.lessons.a1 = { done: true }; L.srsInit(S, "a1", "2026-11-03"); eq(S.srs.a1, { box: 2, due: "2026-11-08" }, "srs з тесту: srsInit після уроку знімає src, коробку й строк лишає");
    S.lessons.b1 = { done: true };   // урок пройдено без пулу (srsInit не викликали) — запис тесту теж не чіпаємо
    const allBad = Object.fromEntries(D.items.map((_, i) => [i, BAD])); L.finishDiag(S, "m", D, allBad, { day: "2026-11-10", grade: 6 });
    eq([S.srs.a1, S.srs.b1, S.srs.a2], [{ box: 2, due: "2026-11-08" }, { box: 0, due: "2026-11-02", src: "diag", diag: "dg", rev: 1 }, undefined], "srs з тесту: gap не видаляє запис пройденого уроку; непройдений — видаляє");
    const K = { srs: { z: { box: 3, due: "2026-12-01" } } }; L.srsInit(K, "z", day); eq(K.srs.z, { box: 3, due: "2026-12-01" }, "srsInit: запис без src не змінюється"); }
  { // урок двох тем — найслабший статус; baseline без уроків
    const D2 = { id: "d2", grade: 6, topics: [{ id: "p", kind: "pre", lessons: ["u"] }, { id: "q", kind: "pre", lessons: ["u", "w"] }, { id: "z", kind: "pre", baseline: true, lessons: [], for: ["s"] }],
      items: [{ topic: "p" }, { topic: "p" }, { topic: "q" }, { topic: "q" }, { topic: "z" }, { topic: "z" }] };
    const S = { ...fresh(), srs: {} }; L.finishDiag(S, "m", D2, { 0: OK, 1: OK, 2: OK, 3: BAD, 4: OK, 5: OK }, { day, grade: 6 });
    eq([S.srs.u.box, S.srs.w.box, Object.keys(S.srs).length], [0, 0, 2], "srs з тесту: спільний урок — найслабший статус (shaky); baseline — без коробки");
    // старий завершений результат (до цієї зміни) не перераховується: resumeDiag/planFor коробок не створюють
    const O = { ...fresh(), grade: 6, srs: {}, diag: { d2: { done: true, res: { 0: OK, 1: OK }, topics: { p: "ok" } } } };
    L.resumeDiag(O, D2); L.planFor(O, "m", { grade: 6, diags: [D2] }); eq(O.srs, {}, "srs з тесту: старі результати без нового тесту — без коробок"); }
}
/* engine-practice-pool: генератори gen (вирази лабораторії, детермінований вибір, той самий ключ seen/SRS) */
{ const c = { console }; c.window = c; vm.createContext(c);
  for (const f of ["app/lab.js", "app/learn.js"]) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), c, { filename: f });
  const GL = c.SLID_LEARN;
  eq(L.genIssues({ gen: { vars: { a: { min: 1, max: 3 } }, answer: "a" } }), ["gen: рушій лабораторії (app/lab.js) не завантажено"], "gen: без lab — помилка, а не мовчазний успіх");
  const base = { id: "g1", key: "pfx:g1", lesson: "l1", lvl: 1, sk: "ops", src: "s №1", adapted: true, type: "answer", steps: ["{a} · {b} = {a*b}."],
    title: "$ {a} · {b} $", body: "<p>Обчисли добуток.</p>", gen: { vars: { a: { min: 2, max: 9 }, b: { values: [11, 12, 13] } }, where: "mod(a, 2) == 0", answer: "a*b" } };
  const all = GL.genAll(base);
  eq([all.envs.length, all.envs[0].a, all.envs[0].b, all.envs.every(e => e.a % 2 === 0)], [12, 2, 11, true], "gen: перелік наборів з where, сталий порядок");
  const i1 = GL.genInstance(base, "s1"), i1b = GL.genInstance(base, "s1"), i2 = GL.genInstance(base, "s2");
  eq(i1, i1b, "gen: та сама сесія — той самий набір (детерміновано)");
  eq([i1.key, i1.id, i1.gen, typeof i1.answer], ["pfx:g1", "g1", undefined, "number"], "gen: ключ seen/SRS і id незмінні, gen знято, answer — число");
  const env = all.envs[i1.genAt]; eq([i1.answer, i1.title, i1.steps[0]], [env.a * env.b, `$ ${env.a} · ${env.b} $`, `${env.a} · ${env.b} = ${env.a * env.b}.`], "gen: підстановка в title і steps");
  eq(GL.checkAns(i1, String(i1.answer)), "ok", "gen: ключ набору зараховується"); eq(GL.checkAns(i1, String(i1.answer + 1)), "bad", "gen: інше число — bad");
  const seeds = new Set(Array.from({ length: 30 }, (_, k) => GL.genInstance(base, "s" + k).genAt)); eq(seeds.size > 4, true, "gen: різні сесії дають різні набори");
  eq(GL.genHash("pfx:g1|s1"), GL.genHash("pfx:g1|s1"), "gen: хеш сталий"); eq(GL.genHash("abc"), 440920331, "gen: FNV-1a — те саме значення в будь-якому середовищі");
  eq(GL.genInstance({ id: "n", answer: 5 }, "s1"), { id: "n", answer: 5 }, "gen: вправа без gen — без змін");
  eq(GL.genIssues(base), [], "gen: коректний генератор — без помилок");
  const T = (patch, frag, what) => { const it = { ...base, ...patch, gen: { ...base.gen, ...(patch.gen || {}) } }; const e = GL.genIssues(it);
    eq(e.some(m => m.includes(frag)), true, `gen: ${what} → «${frag}» (${e.join(" | ")})`); };
  T({ lvl: 2 }, "лише для вправ рівня 1", "lvl 2");
  T({ answerKind: "list" }, "лише для числової answer", "list");
  T({ answer: 5 }, "поле answer не пиши", "answer поряд з gen");
  T({ reduced: true }, "reduced не підтримано", "reduced");
  T({ adapted: undefined }, "adapted: true", "без adapted");
  T({ gen: { answer: "a/b" } }, "не скінченний десятковий дріб", "a/b — нескінченний дріб");
  T({ gen: { answer: "a/(b-11)" } }, "не скінченне число", "ділення на нуль");
  T({ gen: { where: "a > 100" } }, "щонайменше 2", "where без наборів");
  T({ gen: { vars: { a: { min: 1, max: 1e9 } } } }, "не більше", "завеликий діапазон");
  T({ gen: { vars: { ab: { min: 1, max: 3 } } } }, "одна мала латинська літера", "довга назва");
  T({ gen: { answer: "a**b" } }, "не розбирається", "синтаксична помилка");
  T({ title: "$ {a} · 12 $", steps: ["."] }, "змінна b не показана", "змінна не в умові");
  T({ title: "Обчисли", body: "<p>Добуток.</p>", steps: ["."] }, "немає жодної вставки", "без вставок");
  T({ gen: { vars: { a: { values: [0.125, 0.25] }, b: { values: [2, 4] } }, where: undefined } }, "показується округлено", "0,125 з 2 знаками");
  T({ title: "$ {a|deg} · {b} $" }, "не підтримано", "формат deg");
  T({ title: "$\\text{см} {a} · {b}$" }, "не обчислюється", "TeX-група у вставці");
  eq(GL.genIssues({ ...base, title: "$ {a|3} · {b} $", steps: ["{a|3} · {b} = {a*b|3}."], gen: { ...base.gen, vars: { a: { values: [0.125, 0.25] }, b: { values: [2, 4] } }, where: undefined } }), [], "gen: {a|3} показує 0,125 точно");
  // рев'ю engine-practice-pool: P2-2 — показ лише окремою вставкою в title/body; P3-3/4/5 — мутанти й показ чисел
  T({ title: "Обчисли", body: "<p>Обчисли {a} · ?</p>", steps: ["{a} · {b} = {a*b}"] }, "змінна b не показана", "b лише в steps");
  T({ title: "Обчисли", body: "<p>Обчисли {a} · ?</p>", hint: "b = {b}", steps: ["."] }, "змінна b не показана", "b лише в hint");
  T({ title: "Обчисли", body: "<p>Сума {a+b}. Знайди добуток.</p>", steps: ["."] }, "змінна a не показана", "лише сума {a+b}");
  T({ gen: { where: "constructor(1)" } }, "невідоме ім'я «constructor»", "прототип у where");
  T({ gen: { answer: "toString" } }, "невідоме ім'я «toString»", "прототип в answer");
  T({ title: "$ {a} · {b} {zz} $" }, "невідоме ім'я «zz»", "невідоме ім'я у вставці");
  T({ fbOk: "Так, {a*b}." }, "в полі fbOk не підставляється", "вставка у fbOk");
  T({ title: "$ {b|c}·{a} $" }, "{b|c} — формат коефіцієнта", "|c не перед літерою");
  eq(GL.genIssues({ ...base, title: "$ {a} + {b|c}x $", body: "<p>Значення при $x = 1$.</p>", steps: ["{a} + {b} = {a+b}"], gen: { ...base.gen, answer: "a+b" } }), [], "gen: {b|c}x — коефіцієнт перед літерою");
  T({ title: "$ {a} - {b} $", gen: { vars: { a: { min: 2, max: 9 }, b: { values: [-3, 2] } }, where: undefined, answer: "a-b" } }, "після знака дії", "від'ємне після «-» без дужок");
  eq(GL.genIssues({ ...base, title: "$ {a} - ({b}) $", body: "<p>Обчисли.</p>", steps: ["{a} - ({b}) = {a-b}"], gen: { vars: { a: { min: 2, max: 9 }, b: { values: [-3, 2] } }, answer: "a-b" } }), [], "gen: від'ємне в дужках — чисто");
  // рев'ю engine-practice-pool, N1: двокрапка й «–» поза формулою після слова — розділовий знак, не знак дії (від'ємне a — чисто)
  { const NG = { vars: { a: { values: [-3, -2] }, b: { min: 2, max: 9 } }, where: undefined, answer: "a+b" }, ng = p => GL.genIssues({ ...base, steps: ["{a} + {b} = {a+b}"], gen: NG, ...p });
    eq(ng({ title: "Обчисли: {a} + {b}", body: "<p>Знайди суму.</p>" }), [], "gen N1: «Обчисли: {a}» — двокрапка після слова");
    eq(ng({ title: "Сума", body: "<p>Обчисли:  {a} + {b}.</p>", hint: "Наприклад: {a} — від'ємне число." }), [], "gen N1: «Наприклад: {a}» у hint, пробіли після «:»");
    eq(ng({ title: "Сума", body: "<p>Перший доданок – {a}, другий – {b}.</p>" }), [], "gen N1: коротке тире після слова");
    eq(ng({ title: "Сума", body: "<p>Дано: $a = {a}$, $b = {b}$.</p>" }), [], "gen N1: «Дано:» перед формулою");
    eq(ng({ title: "Сума", body: "<p>Нехай $x$: {a}, а другий доданок {b|s}.</p>" }), [], "gen N1 (P3-1): «$x$: {a}» — двокрапка після формули");
    // а знак дії лишається знаком: двокрапка-ділення у формулі, після числа поза формулою, «–» між числами, «+» після «Обчисли:»
    for (const [title, w] of [["$ 12 : {a} + {b} $", "«:» у формулі"], ["$x : {a} + {b}$", "«:» після літери у формулі"], ["Обчисли 12 : {a} + {b}", "«:» після числа поза формулою"],
      ["Обчисли 12 – {a} + {b}", "«–» після числа"], ["$ 5 – {a} + {b} $", "«–» у формулі"], ["Обчисли: ({b}) · ({b}) + {a}", "«+» перед від'ємним"], ["Обчисли: {b} −{a}", "«−» після вставки"],
      ["Обчисли x – {a} + {b}", "P3-1: «–» після латинської змінної поза формулою"], ["Обчисли 12 см : {a} + {b}", "P3-1: «:» з пробілом після одиниці"],
      ["Обчисли f(x): {a} + {b}", "P3-1: «:» після дужки"], ["Обчисли $x$ – {a} + {b}", "P3-1: «–» після формули"],
      ["$ м:{a} + {b} $", "«:» після кириличної літери у формулі"], ["$ ч – {a} + {b} $", "«–» після кириличної літери у формулі"]])
      eq(ng({ title, body: "<p>Обчисли.</p>" }).some(m => m.includes("після знака дії")), true, `gen N1: ${w} — знак дії`); }
  eq(GL.genIssues({ ...base, title: "$ {a} {b|s} $", body: "<p>Обчисли.</p>", steps: ["{a} {b|s} = {a+b}"], gen: { vars: { a: { min: 2, max: 9 }, b: { values: [-3, 2] } }, answer: "a+b" } }), [], "gen: {b|s} — знак доданка, без дужок");
  T({ gen: { vars: { a: { min: 1, max: 100 }, b: { min: 1, max: 60 } }, where: undefined } }, "понад 5000 допустимих наборів", "GEN_MAX");
  eq(GL.GEN_MAX, 5000, "gen: межа наборів 5000");
  T({ title: "$ {a}^{b} $", steps: ["."], gen: { vars: { a: { min: 90, max: 99 }, b: { min: 10, max: 12 } }, where: undefined, answer: "a^b" } }, "не проходить перевірку", "ключ 3,5·10¹⁹ не проходить checkAns");
  { // genRound: 0,1 + 0,2 — ключ 0,3, а не 0,30000000000000004
    const R = { ...base, title: "$ {a|1} + {b|1} $", body: "<p>Обчисли.</p>", steps: ["."], gen: { vars: { a: { values: [0.1, 0.3] }, b: { values: [0.2] } }, answer: "a + b" } };
    const r0 = GL.genInstance(R, "x", 0); eq([r0.answer, GL.checkAns(r0, "0,3"), r0.title], [0.3, "ok", "$ 0,1 + 0,2 $"], "gen: genRound — 0,1 + 0,2 = 0,3 зараховується");
    // ключ вправи в хеші: дві вправи з однаковим gen у тій самій сесії — різні набори хоч раз за 20 сесій
    const A = { ...base, key: "p:a" }, B = { ...base, key: "p:b" };
    eq(Array.from({ length: 20 }, (_, k) => GL.genInstance(A, "s" + k).genAt !== GL.genInstance(B, "s" + k).genAt).some(Boolean), true, "gen: ключ вправи входить у хеш");
    eq(GL.genInstance(base, "будь-що", 0).genAt, 0, "gen: at — явний індекс набору (валідатор — перший)"); }
  // validatePool бачить генератор: помилки gen і решта правил на першому наборі
  const pool = it => ({ id: "pfx", section: "x", status: "draft", sources: [{ id: "s", title: "S", url: "https://x" }], items: [it] });
  const pctx = { sections: new Map([["x", { lessons: ["l1"] }]]), skills: { ops: {} } };
  const { key, ...item } = base;
  eq(GL.validatePool(pool(item), pctx), [], "gen: validatePool — коректний генератор чистий");
  eq(GL.validatePool(pool({ ...item, lvl: 3 }), pctx), ["задача 1 «g1»: gen — лише для вправ рівня 1 (lvl: 1)"], "gen: validatePool — помилка gen з номером задачі");
  eq(GL.validatePool(pool({ ...item, steps: [] }), pctx).some(m => m.includes("немає steps")), true, "gen: validatePool — звичайні правила на наборі");
  // практика: practiceItems/pickSession — та сама вправа одним ключем
  const subj = { pools: [{ ...pool(item), id: "pfx" }], sections: [{ id: "x", grade: 6, lessons: [{ id: "l1" }] }] };
  const its = GL.practiceItems({ grade: 6, lessons: { l1: { done: true } } }, subj);
  eq(its.map(x => x.key), ["pfx:g1"], "gen: у пулі тренування — одна задача з ключем pfx:g1");
  const S = { srs: {}, seen: {} }, pk = GL.pickSession(S, { items: its, focus: "l1", n: 6, day: "2026-11-01" }).map(x => GL.genInstance(x, "s7"));
  eq([pk.length, pk[0].key, typeof pk[0].answer], [1, "pfx:g1", "number"], "gen: сесія — конкретний набір, ключ сталий");
}
// P3-2 (рев'ю engine-learn-list-prefixes-p3): мутаційний сторож для app.js (позначка skFix зберігається й без перенесених записів) —
// tools/test-answer-ui.py, regression: setItem одразу після migrateSk, до наступного виклику SLID_LEARN.

/* engine-decisions-1101 (рішення людини 2026-11-01): (1) form у тесті рівня — OK; (2) A₁/A′ для образу точки A — ok;
   (3) тренування тем, які тест рівня позначив ok / «знайоме», відкрите без пройденого уроку. */
{ // (1) diagAnswerOk (з engine-diag-half-credit — лише OK): ok і form без вимоги вигляду — true; вимаганий вигляд, корінь, bad — false
  const Q = { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"], form: "compound" };
  const DEC = { type: "answer", answer: "37,0", decimals: 1 }, RED = { type: "answer", answer: "3/4", reduced: true }, IMP = { type: "answer", answer: "7/3", form: "improper" };
  const RT = { type: "answer", answer: 24, body: "<p>Знайди сторону квадрата площею 576 см².</p>" }, TM = { type: "answer", answerKind: "time", answer: "10:05" };
  for (const [s, v, r, ok] of [[Q, "2 м 45 см", "ok", true], [Q, "245 см", "form", false], [Q, "2,45 м", "form", false], [Q, "245", "bad", false], [Q, "2 м 54 см", "bad", false],
    [DEC, "37,0", "ok", true], [DEC, "37", "form", true], [DEC, "37,1", "bad", false], [RED, "6/8", "form", false], [RED, "3/5", "bad", false], [IMP, "2 1/3", "form", false],
    [RT, "24", "ok", true], [RT, "√576", "form", false], [RT, "2√144", "form", false], [RT, "√577", "bad", false], [TM, "10:05", "ok", true], [TM, "10:5", "bad", false]]) {
    eq(L.checkAns(s, v), r, `decisions-1101 (1) checkAns «${v}»`); eq(L.diagAnswerOk(s, v), ok, `decisions-1101 (1) diagAnswerOk «${v}»`); }
}
{ // (2) образ даної точки: A₁/A′ — ok; без питання про образ, з назвою образу в умові, з шуканою назвою — як раніше
  const K2 = (answer, body, title) => ({ type: "answer", answerKind: "coordinates2", answer, body, ...(title ? { title } : {}) });
  const C2 = K2("(-3; 0)", "<p>Знайди образ точки $A(-2; 3)$ при паралельному перенесенні на вектор $(-1; -3)$.</p><p>Запиши координати у вигляді $(x; y)$.</p>");
  const C3 = K2("(-2; -1)", "<p>Знайди координати точки, симетричної точці $A(-2; 1)$ відносно осі абсцис.</p>");
  const C5 = K2("(-5; 5)", "<p>При паралельному перенесенні на вектор $(2; -1)$ образом точки $A$ є точка $A_1(-3; 4)$. Знайди координати точки $A$.</p>");
  const NAMED = K2("(-3; 0)", "<p>Точка $A_1$ — образ точки $A(-2; 3)$ при перенесенні на вектор $(-1; -3)$. Знайди образ точки $A(-2; 3)$.</p>");
  const ASK = K2("(-3; 0)", "<p>Знайди координати точки $B$ — образу точки $A(-2; 3)$ при перенесенні на вектор $(-1; -3)$.</p>");
  const TWO = K2("(-3; 0)", "<p>Знайди образ точки $A(-2; 3)$ і образ точки $B(0; 0)$ при перенесенні на вектор $(-1; -3)$.</p>");
  const MID = K2("(1; 2)", "<p>Знайди координати середини відрізка з кінцями $A(0; 0)$ і $B(2; 4)$.</p>");
  for (const v of ["A₁(-3; 0)", "A_1 = (-3; 0)", "A_{1}(-3; 0)", "A1(-3; 0)", "A′(-3; 0)", "A'(-3; 0)", "A’ = (-3; 0)", "А₁(-3; 0)"]) eq(L.checkAns(C2, v), "ok", `decisions-1101 (2) образ A: «${v}»`);
  for (const v of ["A₁(-2; -1)", "A'(-2; -1)"]) eq(L.checkAns(C3, v), "ok", `decisions-1101 (2) симетрична точці A: «${v}»`);
  for (const [s, v, r] of [[C2, "B₁(-3; 0)", "form"], [C2, "A₂(-3; 0)", "form"], [C2, "A''(-3; 0)", "form"], [C2, "A(-3; 0)", "form"], [C2, "A₁(-3; 1)", "bad"], [C2, "A₁ = A(-3; 0)", "bad"], [C2, "A₁ = A₁ = (-3; 0)", "bad"],
    [C5, "A₁(-5; 5)", "form"], [C5, "A'(-5; 5)", "form"], [NAMED, "A₁(-3; 0)", "form"], [ASK, "A₁(-3; 0)", "form"], [ASK, "B(-3; 0)", "ok"], [TWO, "A₁(-3; 0)", "form"], [MID, "A₁(1; 2)", "form"]])
    eq(L.checkAns(s, v), r, `decisions-1101 (2) не образ шуканої / хибне значення: «${v}» → ${r}`);
  eq(L.formHint(C2, "B₁(-3; 0)"), "Координати правильні. Назву з індексом чи штрихом тут не пишуть — запиши лише координати.", "decisions-1101 (2) B₁ — пояснення як раніше");
}
{ // (3) diagOpen / practiceItems: відкриває pre «ok» і cur «знайоме»; shaky, gap, baseline, урок двох тем (ok + shaky) — ні
  const d7 = { id: "dg7", grade: 7, topics: [
    { id: "p1", kind: "pre", lessons: ["l6a", "l6m"] }, { id: "p2", kind: "pre", lessons: ["l6b", "l6m"] }, { id: "p3", kind: "pre", lessons: ["l6c"] },
    { id: "p4", kind: "pre", baseline: true, lessons: [], for: ["s7"] }, { id: "k1", kind: "cur", lessons: ["l7a"] }, { id: "k2", kind: "cur", lessons: ["l7b"] }],
    items: [{ topic: "p1" }, { topic: "p1" }, { topic: "p2" }, { topic: "p2" }, { topic: "p3" }, { topic: "p3" }, { topic: "p4" }, { topic: "p4" }, { topic: "k1" }, { topic: "k2" }] };
  const subj = { id: "math", diags: [d7], sections: [
    { id: "s6", grade: 6, lessons: ["l6a", "l6b", "l6c", "l6m", "l6z"].map(id => ({ id })) }, { id: "s7", grade: 7, lessons: [{ id: "l7a" }, { id: "l7b" }] }, { id: "s8", grade: 8, lessons: [{ id: "l8" }] }] };
  subj.pools = subj.sections.map(sec => ({ id: "p" + sec.id, section: sec.id, items: sec.lessons.map((l, i) => ({ id: "i" + i, lesson: l.id, lvl: 1 })) }));
  const grade = new Map(subj.sections.flatMap(sec => sec.lessons.map(l => [l.id, sec.grade])));
  const ctx = g => ({ grade: g, diags: [d7], day: "2026-11-01", hasLesson: id => grade.has(id) && grade.get(id) <= g });
  const S = { ...fresh(), grade: 7, lessons: {}, srs: {} };
  // p1 ok, p2 shaky (база ok, складніше ні), p3 gap, baseline p4 ok, k1 знайоме, k2 ні
  const plan = L.finishDiag(S, "math", d7, { 0: OK, 1: OK, 2: OK, 3: BAD, 4: BAD, 5: BAD, 6: OK, 7: OK, 8: OK, 9: BAD }, ctx(7));
  eq([plan.topics.p1, plan.topics.p2, plan.topics.p3, plan.known], ["ok", "shaky", "gap", ["l7a"]], "decisions-1101 (3) статуси тем фікстури");
  const open = ["l6a", "l6b", "l6c", "l6m", "l6z", "l7a", "l7b", "l8"].filter(l => L.diagOpen(S, "math", l, ctx(7)));
  eq(open, ["l6a", "l7a"], "decisions-1101 (3) diagOpen: лише pre ok (l6a) і cur «знайоме» (l7a); l6m (ok + shaky), shaky, gap, без теми, старший клас — ні");
  eq(L.practiceItems(S, subj, ctx(7)).map(it => it.lesson), ["l6a", "l7a", "l7b"], "decisions-1101 (3) practiceItems з ctx: молодший клас — лише відкриті тестом, поточний — усі (закриті видно), старший — ні");
  eq(L.practiceItems(S, subj).map(it => it.lesson), ["l7a", "l7b"], "decisions-1101 (3) practiceItems без ctx — як раніше");
  // srsFromDiag (D-032) — ті самі уроки, коробки діють: ok → 2
  eq([S.srs.l6a?.box, S.srs.l6m?.box, S.srs.l6b?.box, S.srs.l6c], [2, 0, 0, undefined], "decisions-1101 (3) srsFromDiag: ok → 2, урок ok + shaky → 0, gap — без запису");
  // інший клас: план 7 класу не відкриває нічого в 6-му; повернення до 7-го — знову відкрито
  S.grade = 6; eq(L.diagOpen(S, "math", "l6a", ctx(6)), false, "decisions-1101 (3) інший клас — план іншого класу не діє"); S.grade = 7;
  eq(L.diagOpen(S, "math", "l6a", ctx(7)), true, "decisions-1101 (3) повернення до класу");
  // повторний тест: p1 тепер gap — закрито
  L.finishDiag(S, "math", d7, { 0: BAD, 1: BAD, 2: OK, 3: OK, 4: OK, 5: OK, 6: OK, 7: OK, 8: BAD, 9: OK }, ctx(7));
  eq(["l6a", "l6b", "l6c", "l6m", "l7a", "l7b"].filter(l => L.diagOpen(S, "math", l, ctx(7))), ["l6b", "l6c", "l7b"], "decisions-1101 (3) повторний тест переписує відкриті теми");
  // старі профілі: план лише з помилок (diag: null), старий S.plan без grade, без плану — нічого не відкривають і не падають
  const E = { ...fresh(), grade: 7, plan: { math: { diag: null, steps: [{ l: "l6a", src: "err" }], known: [] } } };
  eq(L.diagOpen(E, "math", "l6a", ctx(7)), false, "decisions-1101 (3) план з помилок — не відкриває");
  eq(L.diagOpen({ ...fresh(), grade: 7 }, "math", "l6a", ctx(7)), false, "decisions-1101 (3) без плану — ні");
  const legacy = { diag: {}, plan: { math: { diag: "dg7", date: "2026-10-01", topics: { p1: "ok", p2: "gap" }, steps: [], known: ["l7b"] } }, mast: {}, errs: [], skw: {}, grade: 7 };
  eq(["l6a", "l6b", "l7a", "l7b"].filter(l => L.diagOpen(legacy, "math", l, ctx(7))), ["l6a", "l7b"], "decisions-1101 (3) старий S.plan без grade — читається як план класу");
  const old = { diag: {}, plan: { math: { diag: "dg-old", topics: { p1: "ok" }, steps: [], known: [] } }, mast: {}, errs: [], skw: {}, grade: 7 };
  eq(L.diagOpen(old, "math", "l6a", ctx(7)), false, "decisions-1101 (3) тест плану зник із змісту — не відкриває");
}
/* engine-diag-half-credit (рішення людини й методичне правило 2026-11-01): HALF — значення правильне, а вимоганого умовою вигляду
   немає (reduced, mixed, form improper, compound) чи обчислення не завершено (√576); інший запис без вимоги вигляду — OK. */
{ const HALF = L.HALF;
  eq([HALF, L.OK, L.BAD, L.SKIP], [0.5, 1, 0, -1], "half: HALF = 0.5, старі вердикти без змін");
  const Q = { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"], form: "compound" }, QF = { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"] };
  const DEC = { type: "answer", answer: "37,0", decimals: 1 }, RED = { type: "answer", answer: "3/4", reduced: true }, REDF = { ...RED, fractionOnly: true };
  const FO = { type: "answer", answer: "3/4", fractionOnly: true }, IMP = { type: "answer", answer: "7/3", form: "improper" }, MIX = { type: "answer", answer: "2 1/3", mixed: true };
  const PL = { type: "answer", answer: "8/3" }, RT = { type: "answer", answer: 24, body: "<p>Знайди сторону квадрата площею 576 см².</p>" };
  const RTC = { type: "answer", answer: 24, body: "<p>Обчисли $\\sqrt{576}$.</p>" }, RTU = { ...RT, unit: "см" }, TM = { type: "answer", answerKind: "time", answer: "10:05" };
  const V = { [L.OK]: "OK", [HALF]: "HALF", [L.BAD]: "BAD" };
  for (const [name, s, v, want] of [
    ["compound, складений запис", Q, "2 м 45 см", "OK"], ["compound, 245 см", Q, "245 см", "HALF"], ["compound, 2,45 м", Q, "2,45 м", "HALF"], ["compound, без одиниць", Q, "245", "BAD"], ["compound, хибне", Q, "2 м 54 см", "BAD"],
    ["quantity без compound, 245 см", QF, "245 см", "OK"], ["quantity без compound, 2 м 45 см", QF, "2 м 45 см", "OK"],
    ["decimals — інший запис, 37", DEC, "37", "OK"], ["decimals, 37,0", DEC, "37,0", "OK"], ["decimals, хибне", DEC, "37,1", "BAD"],
    ["reduced, 6/8", RED, "6/8", "HALF"], ["reduced, 3/4", RED, "3/4", "OK"], ["reduced, 0,75 (не дріб)", RED, "0,75", "HALF"], ["reduced, хибне", RED, "3/5", "BAD"],
    ["reduced + fractionOnly, 0,75", REDF, "0,75", "HALF"], ["reduced + fractionOnly, 6/8", REDF, "6/8", "HALF"],
    ["reduced + fractionOnly, цілий ключ 3 — form лише від fractionOnly", { type: "answer", answer: "3", reduced: true, fractionOnly: true }, "3", "OK"],
    ["fractionOnly — інший запис, 0,75", FO, "0,75", "OK"], ["improper, 2 1/3", IMP, "2 1/3", "HALF"], ["improper, 7/3", IMP, "7/3", "OK"],
    ["mixed, 7/3", MIX, "7/3", "HALF"], ["mixed, 14/6", MIX, "14/6", "HALF"], ["mixed, 2 1/3", MIX, "2 1/3", "OK"], ["mixed, хибне", MIX, "2 1/4", "BAD"],
    ["без вимоги вигляду, 1 5/3", PL, "1 5/3", "OK"], ["без вимоги вигляду, 2 2/3", PL, "2 2/3", "OK"],
    ["√576 при 24", RT, "√576", "HALF"], ["2√144 при 24", RT, "2√144", "HALF"], ["√576 см при unit", RTU, "√576 см", "HALF"], ["24", RT, "24", "OK"], ["√577", RT, "√577", "BAD"],
    ["копія виразу умови √576 — теж півбала (рішення людини)", RTC, "√576", "HALF"], ["2√144 при «Обчисли √576»", RTC, "2√144", "HALF"],
    ["time ok", TM, "10:05", "OK"], ["time bad", TM, "10:5", "BAD"], ["порожньо", RED, "", "BAD"]])
    eq(V[L.diagVerdict(s, v)], want, `half: diagVerdict ${name} «${v}»`);
  // пояснення — наявні тексти formHint; не HALF — null
  eq(L.diagHalfHint(RED, "6/8"), "Значення правильне, але дріб ще можна скоротити.", "half: пояснення reduced");
  eq(L.diagHalfHint(Q, "245 см"), "Значення правильне. Запиши його в м і см: спершу більші одиниці, потім менші, цілими числами.", "half: пояснення compound");
  eq(L.diagHalfHint(RT, "√576"), "Значення правильне. Обчисли корінь і запиши відповідь числом.", "half: пояснення кореня");
  eq(L.diagHalfHint(IMP, "2 1/3"), "Значення правильне. Запиши відповідь неправильним дробом — без цілої частини.", "half: пояснення improper");
  eq(L.diagHalfHint(MIX, "7/3"), "Значення правильне. Запиши відповідь мішаним числом: ціла частина, пробіл, дріб.", "half: пояснення mixed");
  eq(L.diagHalfHint(RTC, "√576"), "Це вираз з умови. Обчисли корінь і запиши відповідь числом.", "half: пояснення копії кореня з умови");
  eq([L.diagHalfHint(RED, "3/4"), L.diagHalfHint(DEC, "37"), L.diagHalfHint(RED, "3/5")], [null, null, null], "half: OK і BAD — без пояснення");
  eq([L.DIAG_FORM(RED), L.DIAG_FORM(MIX), L.DIAG_FORM(IMP), L.DIAG_FORM(Q), L.DIAG_FORM(DEC), L.DIAG_FORM(FO), L.DIAG_FORM(QF), L.DIAG_FORM({ answerKind: "expression", form: "reduced" })],
    [true, true, true, true, false, false, false, false], "half: DIAG_FORM — лише reduced, mixed, improper, compound");
  // наступне завдання і смужка: HALF — не провал теми, складніше завдання теми показують
  eq([L.nextItem(D, { 0: HALF }), L.nextItem(D, { 0: HALF, 1: BAD }), L.remaining(D, { 0: HALF }), L.remaining(D, { 0: BAD })], [1, 2, 7, 6], "half: nextItem/remaining — тему пробуємо далі");
  eq(L.nextItem(D, { 0: BAD, 1: HALF, 3: BAD, 5: OK }), 4, "half: HALF на базовому b → складніше b (4)");
  // підсумок теми: HALF — щонайбільше shaky; перше HALF — shaky, не gap; cur з HALF — new
  const ts = r => L.topicStatus(D, r);
  eq([ts({ 0: HALF, 2: OK }).a, ts({ 0: OK, 2: HALF }).a, ts({ 0: HALF, 2: HALF }).a, ts({ 0: HALF }).a, ts({ 0: HALF, 2: BAD }).a, ts({ 0: OK, 2: OK }).a, ts({ 0: BAD, 2: HALF }).a, ts({ 5: HALF }).x, ts({ 5: OK }).x],
    ["shaky", "shaky", "shaky", "shaky", "shaky", "ok", "gap", "new", "known"], "half: topicStatus — HALF не ok, перше HALF — shaky");
  // рівень: HALF дає частку, як shaky (0,5)
  eq(L.level(D, ts({ 0: HALF, 2: OK, 1: OK, 4: OK, 3: OK, 6: OK })).share, 2.5 / 3, "half: level — тема з HALF = 0,5");
  // план: shaky-тема з HALF — урок завдання з HALF; SRS — box 0, як shaky
  const D4 = { id: "d4", grade: 6, topics: [{ id: "a", kind: "pre", lessons: ["a1", "a2"] }, { id: "b", kind: "pre", lessons: ["b1"] }, { id: "x", kind: "cur", lessons: ["x1"] }],
    items: [{ topic: "a", lesson: "a1" }, { topic: "a", lesson: "a2" }, { topic: "b" }, { topic: "b" }, { topic: "x" }] };
  const S = { ...fresh(), srs: {} }, plan = L.finishDiag(S, "m", D4, { 0: OK, 1: HALF, 2: HALF, 3: OK, 4: HALF }, { day: "2026-11-01", grade: 6 });
  eq([plan.topics, plan.steps.map(st => [st.l, st.why]), plan.known], [{ a: "shaky", b: "shaky", x: "new" }, [["a2", "shaky"], ["b1", "shaky"]], []], "half: buildPlan — shaky, урок завдання з HALF");
  eq([S.srs.a1?.box, S.srs.a2?.box, S.srs.b1?.box, S.srs.x1], [0, 0, 0, undefined], "half: srsFromDiag — shaky → box 0; cur new — без запису");
  eq(S.diag.d4.res, { 0: OK, 1: HALF, 2: HALF, 3: OK, 4: HALF }, "half: результат зберігає HALF як 0,5");
  // старий збережений результат (1/0/-1) читається як раніше: planFor будує той самий план
  const O = { ...fresh(), grade: 6, diag: { d4: { done: true, date: "2026-10-01", res: { 0: OK, 1: BAD, 2: SKIP, 4: OK } } } };
  eq(L.planFor(O, "m", { grade: 6, diags: [D4] }).topics, { a: "shaky", b: "gap", x: "known" }, "half: старий res без HALF — як раніше");
}
/* P3-3 (рев'ю engine-decisions-1101): мутанти, що вижили — diagOpen без hasLesson; practiceItems з ctx || {} */
{ const d7 = { id: "dg7", grade: 7, topics: [{ id: "p1", kind: "pre", lessons: ["l6a"] }, { id: "k1", kind: "cur", lessons: ["l7a"] }], items: [{ topic: "p1" }, { topic: "p1" }, { topic: "k1" }] };
  const subj = { id: "math", diags: [d7], sections: [{ id: "s6", grade: 6, lessons: [{ id: "l6a" }, { id: "l6z" }] }, { id: "s7", grade: 7, lessons: [{ id: "l7a" }, { id: "l7b" }] }] };
  subj.pools = subj.sections.map(sec => ({ id: "p" + sec.id, section: sec.id, items: sec.lessons.map((l, i) => ({ id: "i" + i, lesson: l.id, lvl: 1 })) }));
  const all = new Set(["l6a", "l6z", "l7a", "l7b"]), ctx = (has = id => all.has(id)) => ({ grade: 7, diags: [d7], day: "2026-11-01", hasLesson: has });
  const S = { ...fresh(), grade: 7, lessons: {}, srs: {} }; L.finishDiag(S, "math", d7, { 0: OK, 1: OK, 2: OK }, ctx());
  eq([L.diagOpen(S, "math", "l6a", ctx()), L.diagOpen(S, "math", "l6a", ctx(id => id !== "l6a")), L.diagOpen(S, "math", "l7a", ctx(id => id !== "l7a"))], [true, false, false],
    "P3-3: diagOpen — урок поза hasLesson не відкривається, навіть якщо тема ok / «знайоме»");
  // план, де known містить урок молодшого класу (старий чи пошкоджений профіль): без ctx practiceItems не відкриває нічого тестом
  const K = { ...fresh(), grade: 7, lessons: {}, plan: { math: { diag: "dg7", grade: 7, topics: { p1: "ok" }, steps: [], known: ["l6z"] } } };
  eq(L.practiceItems(K, subj).map(it => it.lesson), ["l7a", "l7b"], "P3-3: practiceItems без ctx — лише поточний клас, навіть коли план щось відкриває");
  eq(L.practiceItems(K, subj, ctx()).map(it => it.lesson), ["l6a", "l6z", "l7a", "l7b"], "P3-3: practiceItems з ctx — відкрите планом (p1 ok, known)");
}
/* ---------- Skill Graph G3 (docs/design/skill-graph-math.md §2.4, §4.1, §4.2): graphBind, nodeState, graphPre ----------
   1) Еквівалентність правила прив'язки: graphBind (одне правило для застосунку й tools/graph-lib.mjs) = еталон — правило G1 з graph-lib
      до виносу (refBind нижче; за змістом те саме — parseU, redirect, typical з першим вузлом, boss-кандидати, lesson завдання, u теми, — але
      НЕ дослівна копія: як і graphBind, refBind складає записи в Map за ключами «урок#i», «пул:вправа», «тест#i», «тест/тема»), на справжньому
      змісті й на синтетичних випадках (gone, boss, u теми, lesson завдання, by: "u"). Межа (рев'ю engine-skg-g3 P3-2): еквівалентність —
      лише на ВАЛІДНОМУ змісті. При дублікатах id (два уроки, дві теми тесту, дві вправи пулу чи два пули з одним id, вправа без id) G1
      прив'язував кожен об'єкт окремо, а graphBind бере для обох прив'язку останнього; такий зміст і так червоний (validate «id уроку … уже є»,
      validatePool / validate тесту «id порожній або повторюється», registry «Пул … уже зареєстровано») — перевірка нижче.
   2) nodeState на фіксованих профілях: без даних — «невідомо»; вузли розщепленої пари різняться лише за S.seen / S.diag.res; HALF не
      послаблює; завдання з rev новішим за результат — не рахується; u на gone-вузол іншої sk — не рахується; S не змінюється. */
{ const { loadContent, GRADED } = await import("./lib.mjs");
  eq(L.G_GRADED, GRADED, "G3: оцінювані типи learn.js = tools/lib.mjs GRADED");
  // еталон: прив'язка з tools/graph-lib.mjs етапу G1 (analyzeGraph, до G3), лише без перевірок
  const refBind = c => {
    const g = c.graph || null, str = x => typeof x === "string" && x.trim() !== "", nodes = new Map(), out = {};
    const teachList = n => (Array.isArray(n.teach) ? n.teach : []).map(t => typeof t === "string" ? { l: t } : t && typeof t === "object" && typeof t.l === "string" ? { l: t.l, by: t.by } : null).filter(Boolean);
    const isG = s => !!s && GRADED.includes(s.type) && !s.poll && !s.hyp;
    (g && Array.isArray(g.nodes) ? g.nodes : []).forEach(n => { if (!n || typeof n !== "object" || Array.isArray(n)) return; if (!str(n.id) || !/^[a-z][a-z0-9-]*$/.test(n.id)) return; if (!nodes.has(n.id)) nodes.set(n.id, n); });
    const lessons = new Map(); for (const sec of c.sections) (sec.lessons || []).forEach((l, idx) => lessons.set(l.id, { l, sec: sec.id, boss: !!l.boss }));
    const isGone = id => nodes.has(id) && nodes.get(id).gone !== undefined, active = new Map([...nodes].filter(([id]) => !isGone(id)));
    const typical = new Map();
    for (const n of active.values()) for (const t of teachList(n)) { if (!lessons.has(t.l)) continue; const key = `${t.l}|${n.sk}`; if (!t.by) (typical.get(key) || typical.set(key, []).get(key)).push(n.id); }
    const redirect = id => { const n = nodes.get(id); return n && str(n.gone) && nodes.has(n.gone) && !isGone(n.gone) ? n.gone : id; };
    const parseU = u => { if (u === undefined) return []; const ids = Array.isArray(u) ? u : [u];
      if (!ids.length || ids.length > 2 || ids.some(x => !str(x)) || new Set(ids).size !== ids.length) return ids.filter(str); return ids; };
    const checkU = s => [...new Set(parseU(s.u).filter(id => nodes.has(id)).map(redirect))];
    const typicalOf = (l, sk) => typical.get(`${l}|${sk}`) || [];
    for (const sec of c.sections) for (const l of sec.lessons || []) { const info = lessons.get(l.id);
      (l.screens || []).forEach((s, i) => { if (!isG(s)) return; let o;
        if (s.u !== undefined) o = { nodes: checkU(s), how: "u" };
        else if (info.boss) { const cand = [...active.values()].filter(n => n.sk === s.sk && teachList(n).some(t => !t.by && lessons.get(t.l)?.sec === info.sec && !lessons.get(t.l)?.boss)).map(n => n.id);
          o = { nodes: cand.length === 1 ? cand : [], how: cand.length === 1 ? "boss" : cand.length ? "ambiguous" : "none", cand }; }
        else { const ns = typicalOf(l.id, s.sk).slice(0, 1); o = { nodes: ns, how: ns.length ? "typical" : "none" }; }
        out[`s|${l.id}#${i}`] = o; }); }
    for (const p of c.pools || []) (p.items || []).forEach(it => { const ns = it.u !== undefined ? checkU(it) : typicalOf(it.lesson, it.sk).slice(0, 1);
      out[`p|${p.id}:${it.id}`] = { nodes: ns, how: it.u !== undefined ? "u" : ns.length ? "typical" : "none" }; });
    for (const d of c.diags || []) for (const t of d.topics || []) {
      const its = (d.items || []).map((it, i) => [it, i]).filter(([it]) => it.topic === t.id), ls = Array.isArray(t.lessons) ? t.lessons : [];
      const tu = t.u !== undefined ? checkU(t) : null, union = new Set();
      for (const [it, i] of its) { const lsI = str(it.lesson) ? [it.lesson] : ls; let o;
        if (it.u !== undefined) o = { nodes: checkU(it), how: "u" }; else if (tu) o = { nodes: tu, how: "u-topic" };
        else { const ns = [...new Set(lsI.flatMap(l => typicalOf(l, it.sk).slice(0, 1)))]; o = { nodes: ns, how: ns.length ? "typical" : "none" }; }
        o.nodes.forEach(x => union.add(x)); out[`d|${d.id}#${i}`] = o; }
      const ns = tu || [...union]; out[`t|${d.id}/${t.id}`] = { nodes: ns, how: tu ? "u" : ns.length ? "items" : "none" }; }
    return out; };
  const flat = B => { const o = {}; for (const [pfx, m] of [["s", B.screens], ["p", B.items], ["d", B.ditems], ["t", B.topics]]) for (const [k, e] of m) o[`${pfx}|${k}`] = e.cand ? { nodes: e.nodes, how: e.how, cand: e.cand } : { nodes: e.nodes, how: e.how }; return o; };
  const same = (c, what) => { const a = flat(L.graphBind(c)), b = refBind(c), ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    eq(ka, kb, `${what}: ті самі об'єкти`); const diff = ka.filter(k => JSON.stringify(a[k]) !== JSON.stringify(b[k]));
    eq(diff.slice(0, 5).map(k => [k, a[k], b[k]]), [], `${what}: вузли, how, cand — як у правилі G1`); return a; };
  const C0 = loadContent(), math = C0.subjects.find(s => s.id === "math");
  const real = same(math, "справжній зміст math");
  const cnt = Object.values(real).reduce((o, e) => (o[e.how] = (o[e.how] || 0) + 1, o), {});
  eq([cnt.u > 20, cnt.typical > 200, cnt["u-topic"] > 0, cnt.items > 0, cnt.none > 1000], [true, true, true, true, true], `справжній зміст: є всі гілки правила (${JSON.stringify(cnt)})`);
  eq([real["s|m3#8"].nodes, real["s|m3#1"].nodes, real["p|pg6m2:e08"].nodes, real["d|dg6#20"].nodes], [["num-by-frac"], ["frac-of-num"], ["frac-div", "frac-add-unlike"], ["divis-lcm", "divis-gcd"]], "справжній зміст: m3 #8, #1, pg6m2 e08, завдання dg6 №21 (колишня тема g6-lcm, D-043)");
  // синтетичні випадки поверх справжнього змісту (новий loadContent на кожен — об'єкти змісту не спільні)
  const mut = (f, what) => { const C = loadContent(), m = C.subjects.find(s => s.id === "math"); f(m); return same(m, what); };
  const lesson = (m, id) => m.sections.flatMap(s => s.lessons || []).find(l => l.id === id);
  let r = mut(m => { m.graph = { ...m.graph, nodes: [...m.graph.nodes, { id: "frac-of-old", sk: "part", name: "x", teach: ["m3"], gone: "frac-of-num", st: "draft" },
      { id: "cmp-old", sk: "cmp", name: "x", teach: ["m3"], gone: "frac-of-num", st: "draft" }] }; lesson(m, "m3").screens[1].u = "frac-of-old"; lesson(m, "m3").screens[2].u = ["frac-of-old", "nope"]; }, "gone і неіснуючий u");
  eq([r["s|m3#1"].nodes, r["s|m3#2"].nodes], [["frac-of-num"], ["frac-of-num"]], "gone → ціль; неіснуючий id пропущено");
  mut(m => { const d = m.diags.find(x => x.id === "dg6"); const t = d.topics.find(x => x.id === "frac-of"); t.u = "num-by-frac"; d.items.find(x => x.topic === "frac-of").lesson = "m3"; }, "u теми, lesson завдання");
  r = mut(m => { const d = m.diags.find(x => x.id === "dg6"); d.topics.find(x => x.id === "frac").lessons = ["m1", "m5"]; d.items[1].lesson = "m5"; }, "двоурокова тема: lesson завдання звужує типові вузли");
  eq([r["d|dg6#1"].nodes, r["d|dg6#13"].nodes, r["t|dg6/frac"].nodes], [["frac-mixed"], ["frac-read", "frac-mixed"], ["frac-mixed", "frac-read"]], "двоурокова тема: №1 з lesson m5 — frac-mixed, №13 без lesson — обидва уроки");
  mut(m => { m.graph = { ...m.graph, nodes: m.graph.nodes.map(n => n.id === "frac-mixed" ? { ...n, teach: ["m5", "m6"] } : n) }; }, "boss: teach на boss-уроці");
  mut(m => { m.graph = { ...m.graph, nodes: [...m.graph.nodes, { id: "frac-read2", sk: "frac", name: "x", teach: ["m1"], st: "draft" }, { id: "Bad id", sk: "frac", teach: ["m1"] }, null, { id: "frac-read", sk: "num", teach: ["m2"] }] }; }, "два типові вузли пари, хибні вузли, дубль id");
  { // межа еквівалентності (P3-2): зміст із дублікатами id, на якому graphBind ≠ G1, — завжди червоний; graphBind бере останній запис ключа
    const C = loadContent(), m = C.subjects.find(s => s.id === "math"), p = m.pools.find(x => x.items.length > 1), d = m.diags.find(x => x.topics.length > 1);
    const secL = new Map(m.sections.map(s => [s.id, { lessons: (s.lessons || []).map(l => l.id) }]));
    const pd = { ...p, items: [p.items[0], { ...p.items[1], id: p.items[0].id }, ...p.items.slice(2)] }, pn = { ...p, items: [{ ...p.items[0], id: undefined }, ...p.items.slice(1)] };
    const dd = { ...d, topics: [d.topics[0], { ...d.topics[1], id: d.topics[0].id }, ...d.topics.slice(2)] };
    const red = (list, re) => list.some(x => re.test(x));
    eq([red(L.validatePool(pd, { sections: secL, skills: m.skills }), /повторюється/), red(L.validatePool(pn, { sections: secL, skills: m.skills }), /порожній або повторюється/),
      red(L.validate(dd, { sections: new Map(m.sections.map(s => [s.id, { grade: s.grade }])), skills: m.skills, lessons: new Map(m.sections.flatMap(s => (s.lessons || []).map(l => [l.id, { grade: s.grade }]))) }), /тема .*повторюється/)],
      [true, true, true], "дублікати id (вправа пулу, вправа без id, тема тесту) — помилка validate (межа еквівалентності graphBind = G1)");
    const B = L.graphBind({ ...m, pools: [pd] }), k = `${p.id}:${p.items[0].id}`;
    eq([B.items.size, B.items.has(k)], [p.items.length - 1, true], "дубль id вправи — один ключ «пул:вправа» (бере останню; документовано, зміст червоний)"); }
  mut(m => { m.graph = null; }, "без графа");
  mut(m => { lesson(m, "m3").screens[8].u = []; m.pools.find(p => p.id === "pms1").items[0].u = ["frac-of-num", "frac-of-num"]; }, "u: [] і дубль у u");

  // ---- синтетичний предмет для nodeState
  const G = { v: "t", lines: { ln: { lessons: ["la"], topics: ["d1/tc"], st: "verified" }, dr: { lessons: ["lp"], topics: [], st: "draft" } }, nodes: [
    { id: "na", sk: "frac", name: "A", teach: ["la"], pre: [{ u: "np", w: 2, why: "x" }, { u: "nq", w: 1, why: "x" }], part: [{ u: "nr", why: "x" }], st: "verified" },
    { id: "nb", sk: "frac", name: "B", teach: [{ l: "la", by: "u" }], pre: [{ u: "np", w: 2, why: "x" }], st: "verified" },
    { id: "np", sk: "num", name: "P", teach: ["lp"], st: "verified" }, { id: "nq", sk: "num", name: "Q", teach: ["lq"], st: "verified" },
    { id: "nr", sk: "num", name: "R", teach: ["lr"], st: "verified" },
    { id: "nold", sk: "frac", name: "old", teach: ["lp"], gone: "np", st: "draft" },   // gone на вузол іншої sk (num)
    { id: "nold2", sk: "frac", name: "old2", teach: ["lp"], gone: "na", st: "draft" }] };   // gone на вузол тієї самої sk
  const scr = (sk, extra = {}) => ({ type: "choice", title: "?", opts: ["a", "b"], correct: 0, sk, ...extra });
  const SUBJ = { id: "math", graph: G, sections: [{ id: "s1", grade: 5, lessons: [
      { id: "la", screens: [{ type: "intro" }, scr("frac"), scr("frac", { u: "nb" }), scr("frac", { u: "nold" }), scr("frac", { u: "nold2" })] },
      { id: "lp", screens: [scr("num")] }, { id: "lq", screens: [scr("num")] }, { id: "lr", screens: [scr("num")] }, { id: "lx", boss: true, screens: [scr("frac")] }] }],
    pools: [{ id: "p1", section: "s1", items: [{ id: "i1", lesson: "la", sk: "frac" }, { id: "i2", lesson: "la", sk: "frac", u: "nb" }, { id: "i3", lesson: "lp", sk: "num" }, { id: "i4", lesson: "la", sk: "frac", u: "nold" }] }],
    diags: [{ id: "d1", grade: 6, topics: [{ id: "tp", kind: "pre", lessons: ["lp"] }, { id: "tc", kind: "cur", lessons: ["la"] }],
      items: [{ topic: "tp", sk: "num" }, { topic: "tp", sk: "num", rev: 2 }, { topic: "tc", sk: "frac" }, { topic: "tc", sk: "frac", u: "nb" }, { topic: "tc", sk: "frac", u: "nold" }] }] };
  const B = L.graphBind(SUBJ);
  eq([B.screens.get("la#1").nodes, B.screens.get("la#2").nodes, B.screens.get("la#3").nodes, B.screens.get("la#3").live, B.screens.get("la#3").stale, B.screens.get("la#4").live, B.screens.get("lx#0").nodes],
    [["na"], ["nb"], ["np"], [], ["nold"], ["na"], ["na"]], "graphBind: типовий, by: u, gone іншої sk (nodes — як graph-lib, live — без нього), gone тієї самої sk, boss");
  eq(B.screens.has("la#0"), false, "graphBind: intro — не об'єкт");
  eq([L.nodesOf(SUBJ, { mode: "lesson", l: "la", i: 2 }), L.nodesOf(SUBJ, { mode: "practice", key: "p1:i1" }), L.nodesOf(SUBJ, { mode: "diag", l: "d1", i: 0 }), L.nodesOf(SUBJ, { mode: "lesson", l: "la", i: 0 }), L.nodesOf({ ...SUBJ, graph: null }, { mode: "lesson", l: "la", i: 1 })],
    [["nb"], ["na"], ["np"], null, null], "nodesOf: урок, тренування, тест; не оцінюваний екран і предмет без графа — null");
  eq([L.inLine(SUBJ, { l: "la" }), L.inLine(SUBJ, { l: "lp" }), L.inLine(SUBJ, { topic: "d1/tc" }), L.inLine(SUBJ, { topic: "d1/tp" })], [["ln"], [], ["ln"], []], "inLine: лише лінії verified/approved");
  const gp = L.graphPre(SUBJ, { ls: ["la"], sk: "frac", nodes: ["na"] });
  eq([gp.pair.sort(), gp.pre.sort(), gp.lessons.sort()], [["na", "nb"], ["np", "nr"], ["lp", "lr"]], "graphPre: вузли пари (з by: u) → pre w 2 і part, без w 1; уроки teach");
  // G3-p3 (рев'ю P3-3, мутант pres-incl-pair-lessons): урок вузла-передумови, що є уроком самої пари, не стає новим pres
  const gpl = L.graphPre(SUBJ, { ls: ["la", "lp"], sk: "frac", nodes: ["na"] });
  eq([gpl.pre.sort(), gpl.lessons.sort()], [["np", "nr"], ["lr"]], "graphPre: передумова np з teach ∋ lp (урок пари) — вузол лишається, урок lp у pres ні");
  const st = (S, id) => { const x = L.nodeState(S, SUBJ, id); return x; };
  const E0 = st({}, "na");
  eq([E0.st, E0.weak, E0.diag.items.length, E0.practice.items.length, E0.errs], ["unknown", false, 0, 0, 0], "nodeState: без даних — «невідомо», не прогалина");
  eq([L.nodeState({}, SUBJ, "nope"), st({ seen: {}, diag: {}, lessons: {}, mast: {}, srs: {}, errs: [], skw: {} }, "nb").st], [null, "unknown"], "nodeState: невідомий вузол — null; порожній профіль — unknown");
  eq([st({ skw: { "math.frac": "000" } }, "na").st, st({ skw: { "math.frac": "000" } }, "na").skw, st({ errs: [{ l: "lq", at: "lq", sk: "math.frac" }] }, "na").st], ["unknown", "000", "unknown"], "nodeState: лише фон skw чи помилки іншого уроку — «невідомо»");
  // спільне для вузлів пари: урок, SRS, mast, errs — na і nb однакові (крім id і by)
  const P1 = { lessons: { la: { done: true } }, mast: { la: { r: "1101", d: "2026-11-01" } }, srs: { la: { box: 1, due: "2026-11-04" } },
    errs: [{ l: "la", at: "la", sk: "math.frac", d: "2026-11-01" }, { l: "lp", at: "la", sk: "math.frac", d: "2026-11-01" }, { l: "la", at: "la", sk: "math.num", d: "2026-11-01" }], skw: { "math.frac": "1101" } };
  const strip = x => JSON.parse(JSON.stringify({ ...x, node: null, lessons: x.lessons.map(l => ({ ...l, by: null })) }));
  const a1 = st(P1, "na"), b1 = st(P1, "nb");
  eq(strip(a1), strip(b1), "розщеплена пара: лише урок/SRS/errs — стани na і nb однакові");
  eq([a1.st, a1.errs, a1.skw, a1.lessons[0]], ["ok", 2, "1101", { l: "la", by: null, done: true, mast: "1101", srs: { box: 1, due: "2026-11-04" } }], "урок, errs за (at, sk), skw — фон");
  // S.seen і S.diag.res розрізняють
  const P2 = { ...P1, seen: { "p1:i2": 0, "p1:i1": 1 }, diag: { d1: { done: true, res: { 2: L.OK, 3: L.BAD }, rev: 1 } } };
  const a2 = st(P2, "na"), b2 = st(P2, "nb");
  eq([a2.practice, b2.practice, a2.diag.ok, a2.diag.bad, b2.diag.bad], [{ ok: 1, bad: 0, items: [{ key: "p1:i1", ok: 1 }] }, { ok: 0, bad: 1, items: [{ key: "p1:i2", ok: 0 }] }, 1, 0, 1], "розщеплена пара: різниця — лише за S.seen і S.diag.res");
  eq([strip({ ...a2, practice: null, diag: null }), b2.weak], [strip({ ...b2, practice: null, diag: null }), false], "розщеплена пара: решта стану однакова; BAD у cur-темі не робить weak");
  // HALF у pre-темі не послаблює; BAD і SKIP — послаблюють
  const pw = res => st({ diag: { d1: { done: true, res, rev: 2 } } }, "np");
  eq([pw({ 0: L.HALF }).weak, pw({ 0: L.HALF }).diag.half, pw({ 0: L.BAD }).weak, pw({ 0: L.SKIP }).weak, pw({ 0: L.OK, 1: L.OK }).weak, pw({ 0: L.HALF }).st], [false, 1, true, true, false, "ok"], "HALF не послаблює вузол-передумову; BAD / «Ще не знаю» — так");
  // rev: результат редакції 1 не прив'язується до заміненого завдання (rev 2); редакція 2 — так; старий профіль без rev — як редакція 1
  eq([st({ diag: { d1: { res: { 1: L.BAD }, rev: 1 } } }, "np").weak, st({ diag: { d1: { res: { 1: L.BAD } } } }, "np").weak, st({ diag: { d1: { res: { 1: L.BAD }, rev: 2 } } }, "np").weak],
    [false, false, true], "rev: стара відповідь не рахується за новим завданням (як resumeDiag)");
  // gone іншої sk: ні вправа, ні завдання тесту з u: nold не рахуються вузлу np, доки u не оновлено; без stale — рахувались би
  const P3 = { seen: { "p1:i4": 0 }, diag: { d1: { res: { 4: L.BAD }, rev: 2 } } };
  eq([st(P3, "np").practice.items.length, st(P3, "np").diag.items.length, st(P3, "np").st], [0, 0, "unknown"], "u на gone-вузол іншої sk — не рахується в nodeState");
  eq(L.graphPre(SUBJ, { ls: ["la"], sk: "frac", nodes: B.items.get("p1:i4").live }).pre.sort(), ["np", "nr"], "gone іншої sk не стає вузлом пари в graphPre");
  // G3-p3 (рев'ю P3-3, мутант ditem-topic-u-live): u ТЕМИ на gone-вузол іншої sk — завдання теми без свого u не рахуються вузлу-цілі
  { const S2 = { ...SUBJ, diags: [{ id: "d2", grade: 6, topics: [{ id: "tg", kind: "pre", lessons: ["lp"], u: "nold" }, { id: "tk", kind: "pre", lessons: ["lp"], u: "nold2" }],
      items: [{ topic: "tg", sk: "frac" }, { topic: "tg", sk: "frac", u: "na" }, { topic: "tk", sk: "frac" }] }] }, B2 = L.graphBind(S2);
    const e0 = B2.ditems.get("d2#0"), e2 = B2.ditems.get("d2#2");
    eq([e0.how, e0.nodes, e0.live, e0.stale, e2.live, e2.stale], ["u-topic", ["np"], [], ["nold"], ["na"], []], "graphBind: u теми — nodes з перенаправленням, live без gone іншої sk (тієї самої sk — ціль)");
    const R = { diag: { d2: { res: { 0: L.BAD, 1: L.BAD, 2: L.BAD }, rev: 1 } } };
    eq([L.nodeState(R, S2, "np").diag.items.length, L.nodeState(R, S2, "np").weak, L.nodeState(R, S2, "na").diag.items.map(x => x.i)], [0, false, [1, 2]], "nodeState: завдання з u теми на gone іншої sk не слабить ціль; gone тієї самої sk — рахується"); }
  // тренування: ≥ 2 помилки й ≥ половини — weak; тема уроку просіла (weakRec) — weak
  eq([st({ seen: { "p1:i1": 0 } }, "na").st, st({ seen: { "p1:i1": 0 }, mast: { la: { r: "0011" } } }, "na").st, st({ lessons: { la: { done: true } } }, "na").st], ["ok", "weak", "ok"], "st: одна помилка — ok; просіла тема уроку — weak; пройдений урок — ok");
  // S не змінюється
  const P4 = JSON.parse(JSON.stringify({ ...P2, ...P3, seen: { ...P2.seen, ...P3.seen } })), P4c = JSON.parse(JSON.stringify(P4));
  for (const id of ["na", "nb", "np", "nq", "nr", "nold"]) L.nodeState(P4, SUBJ, id);
  eq(P4, P4c, "nodeState не змінює S");
  // кеш за предметом: новий граф — новий розбір
  const SUBJ2 = { ...SUBJ, graph: G }; eq(L.nodesOf(SUBJ2, { mode: "lesson", l: "la", i: 1 }), ["na"], "кеш: розбір предмета");
  SUBJ2.graph = { ...G, nodes: G.nodes.map(n => n.id === "na" ? { ...n, teach: [{ l: "la", by: "u" }] } : n) };
  eq(L.nodesOf(SUBJ2, { mode: "lesson", l: "la", i: 1 }), null, "кеш: інший граф — інший результат");

  // ---- справжній граф: фіксований профіль, розщеплена пара g6m2l5 (frac-mul типовий, frac-div by: u)
  const PR = { lessons: { g6m2l5: { done: true } }, mast: { g6m2l5: { r: "110", d: "2026-11-01" } }, srs: { g6m2l5: { box: 1, due: "2026-11-03" } },
    errs: [{ l: "g6m2l5", at: "g6m2l5", sk: "math.ops", d: "2026-11-01" }], seen: { "pg6m2:e01": 1, "pg6m2:e02": 1, "pg6m2:e03": 0, "pg6m2:e05": 0 },
    diag: { dg6: { done: true, res: { 0: L.OK }, rev: 1 } } };
  const fm = L.nodeState(PR, math, "frac-mul"), fd = L.nodeState(PR, math, "frac-div");
  eq([fm.practice.ok, fm.practice.bad, fd.practice.ok, fd.practice.bad, fm.st, fd.st, fm.errs, fd.errs], [2, 0, 0, 2, "ok", "weak", 1, 1], "справжній граф: frac-mul / frac-div — різні за S.seen, спільні errs");
  eq(strip({ ...fm, practice: null, st: null }), strip({ ...fd, practice: null, st: null }), "справжній граф: решта стану frac-mul і frac-div однакова (st — від тренування)");
  eq(L.nodeState({}, math, "frac-div").st, "unknown", "справжній граф: порожній профіль — невідомо");
  // dg6 №21 (індекс 20; до 2026-11-03 — тема g6-lcm, тепер pre g6-div з u завдання на обидва вузли) — «Ще не знаю» слабить обидва
  const lcmI = math.diags.find(d => d.id === "dg6").items.findIndex(it => it.lesson === "g6m1l4");
  const dg6 = v => ["divis-lcm", "divis-gcd"].map(id => L.nodeState({ diag: { dg6: { res: { [lcmI]: v }, rev: 9 } } }, math, id));
  eq([dg6(L.SKIP).map(x => x.diag.skip), dg6(L.HALF).map(x => x.diag.half)], [[1, 1], [1, 1]], "dg6 №21: завдання з двома u — обом вузлам");
  eq([lcmI, math.diags.find(d => d.id === "dg6").topics.find(t => t.id === "g6-div").kind], [20, "pre"], "dg6 №21 — у pre-темі g6-div (D-043: подільність — 5 кл.)");
}
console.log(`\n${n} перевірок, ${fails ? fails + " з помилками" : "усе гаразд"}`);
if (fails) process.exit(1);
