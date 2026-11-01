#!/usr/bin/env node
// Слід · тести гіпотез «обчислення чи поняття» (app/hyp.js, етап E1; docs/design/diag-hypothesis-math.md).
// Запуск: node tools/test-hyp.mjs   (без залежностей; приклади §1.5 — на справжніх вправах змісту, розмітка mis — фікстури тесту).
// HYP_FILE=<шлях> — перевірити інший файл модуля (самоперевірка на мутантах).
import fs from "node:fs"; import os from "node:os"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { hypEnv, replay, metrics, contentStats } from "./hyp-replay.mjs";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const E = hypEnv(ROOT, process.env.HYP_FILE || null), H = E.hyp, LN = E.learn;
let fails = 0, n = 0;
const eq = (got, exp, what) => { n++; const ok = JSON.stringify(got) === JSON.stringify(exp); if (!ok) { fails++; console.log(`ПОМИЛКА ${what}: отримано ${JSON.stringify(got)}, очікувалось ${JSON.stringify(exp)}`); } };
const ok = (c, what) => eq(!!c, true, what);

const pool = k => { const s = E.pool.get(k); if (!s) throw new Error("немає вправи " + k); return s; };
const scr = (l, i) => E.lessons.get(l).l.screens[i];
const dg6 = E.diags.get("dg6");

/* ---------- 1. Приклади §1.5: сигнал, правило, top / pexec ---------- */
const P = { P3: [.05, .1, .7, .1, .05], P5: [.6, .2, .1, .05, .05], P6: [.4, .15, .35, .05, .05], P7: [.15, .1, .6, .1, .05], P8: [.2, .5, .15, .05, .1], P9: [0, .05, .15, .3, .5], P10: [.1, .15, .25, .15, .35] };
const exp = { P3: ["rule", .7, .15], P5: ["slip", .6, .8], P6: ["unk", .4, .55], P7: ["rule", .6, .25], P8: ["calc", .5, .7], P9: ["unk", .5, .05], P10: ["unk", .35, .25] };
const P2 = { rule: ["rule", .75, .126], slip: ["slip", .75, .813], pre: ["pre", .75, .126] };
function chk(name, s, raw, rule, sig, top, ctx = {}) {
  const a = H.assess(s, raw, ctx), w = `${name} ${JSON.stringify(raw)}`;
  eq(a.rule, rule, w + " правило"); if (sig !== null) eq(a.sig, sig, w + " сигнали");
  const e = top || exp[rule]; if (e) { eq(a.top, e[0], w + " top"); eq(a.p, e[1], w + " p"); eq(a.pexec, e[2], w + " pexec"); }
  if (P[rule] && !Object.keys(ctx).length) eq(a.prior, P[rule], w + " апріорний розподіл");
  return a;
}
// dg6 №0 `$20 - 4 * 3$` = 8 (тест рівня, number)
eq(H.mutants(dg6.items[0]), [{ code: "ord-ltr", v: "48" }], "dg6 №0 мутанти");
chk("dg6 №0", dg6.items[0], "48", "P3", ["S2:ord-ltr"]);
chk("dg6 №0", dg6.items[0], "9", "P8", ["S6"]);
chk("dg6 №0", dg6.items[0], "7", "P8", ["S6"]);
chk("dg6 №0", dg6.items[0], "-8", "P6", ["S3"]);
chk("dg6 №0", dg6.items[0], "", "P9", ["S13"]);
chk("dg6 №0 «Ще не знаю»", dg6.items[0], null, "P9", ["S13"], null, { verdict: "skip" });
chk("dg6 №0 далеко", dg6.items[0], "100", "P10", ["S14"]);
// dg6 №3 «29 : 6 — остача» = 5: з розміткою mis
const dg6r = { ...dg6.items[3], mis: [{ v: "4", c: "rule:quot-for-rem" }, { v: "6", c: "rule:rem-ge-div" }] };
chk("dg6 №3", dg6r, "4", "P2", ["S1:rule:quot-for-rem"], P2.rule);
chk("dg6 №3", dg6r, "6", "P2", ["S1:rule:rem-ge-div"], P2.rule);
chk("dg6 №3", dg6r, "3", "P10", []);                                  // |2|/5 = 40 %: ні S6, ні S14
// dg6 №4 choice з формулами: без mis — лише P10; з mis — P2 / P2′ (неоднозначний 6/8)
for (const i of [0, 1, 2]) chk("dg6 №4 без mis", dg6.items[4], i, "P10", []);
const dg6f = { ...dg6.items[4], mis: { 0: "rule:frac-add-naive", 1: ["rule:frac-mul-num", "calc"], 2: "slip:op" } };
chk("dg6 №4", dg6f, 0, "P2", ["S1:rule:frac-add-naive"], P2.rule);
const amb = chk("dg6 №4", dg6f, 1, "P2′", ["S1:rule:frac-mul-num", "S1:calc"], ["unk", .375, .458]);
eq(amb.amb, 1, "dg6 №4 6/8 — amb"); eq(amb.prior, [.083, .375, .375, .083, .083], "dg6 №4 6/8 — 0,75 порівну між двома класами");
chk("dg6 №4", dg6f, 2, "P2", ["S1:slip:op"], P2.slip);
// g4m2l4#7 (урок, number) = 1145
const g4 = { ...scr("g4m2l4", 7), mis: [{ v: "565", c: "rule:sub-both" }] };
eq(g4.answer, 1145, "g4m2l4#7 ключ");
chk("g4m2l4#7", g4, "565", "P2", ["S1:rule:sub-both"], P2.rule);
chk("g4m2l4#7", g4, "1135", "P5", ["S4"]);
chk("g4m2l4#7", g4, "1155", "P5", ["S4"]);
chk("g4m2l4#7 перестановка", g4, "1154", "P5", ["S4"]);
chk("g4m2l4#7 без mis", scr("g4m2l4", 7), "565", "P10", ["S14"]);
// pg6m2:d01 `$1/4 + 3/5$` = 17/20
const d01 = pool("pg6m2:d01");
eq(H.mutants(d01), [{ code: "frac-add-naive", v: "4/9" }, { code: "frac-mul-num", v: "3/20" }], "d01 мутанти");
chk("d01", d01, "4/9", "P3", ["S2:frac-add-naive"]);
chk("d01", d01, "8/18", "P3", ["S2:frac-add-naive"]);                // той самий мутант іншим записом (правило 2 збігу)
chk("d01", d01, "3/20", "P3", ["S2:frac-mul-num"]);
chk("d01", d01, "16/20", "P8", ["S6"]);                              // дробовий ключ: лише відносний допуск, S4 — лише для десяткових
chk("d01", d01, "18/20", "P8", ["S6"]);
// pg6m4:a08 (lvl 3) = 32: «паркан» — лише mis з двома класами
const a08 = pool("pg6m4:a08");
chk("a08 без mis", a08, "31", "P8", ["S6"]);
chk("a08 без mis", a08, "33", "P8", ["S6"]);
const a08m = { ...a08, mis: [{ v: "31", c: ["calc", "rule:fencepost"] }, { v: "33", c: ["calc", "rule:fencepost"] }] };
eq(chk("a08", a08m, "31", "P2′", ["S1:calc", "S1:rule:fencepost"], ["unk", .375, .458]).amb, 1, "a08 31 — amb");
// pg7m3:a03 `$m^5 * m^4$` = m^9 (expression)
chk("a03", pool("pg7m3:a03"), "m^20", "P3", ["S2:pow-mul-exp"]);
// pg7m3:a04 `$(m^3)^4$`: m^7 — не мутант (сусіднє правило), лише через mis
eq(H.mutants(pool("pg7m3:a04")).map(m => m.code).includes("pow-mul-exp"), false, "a04 — pow-mul-exp не застосовний");
// pg7m3:a02 `$(-0,6)^3$` = −0,216: neg-pow-sign для непарного n дає ключ — не застосовується, тож 0,216 → S3 → P6
const a02 = pool("pg7m3:a02");
eq(H.mutants(a02), [{ code: "pow-as-mul", v: "-1,8" }], "a02 мутанти (neg-pow-sign дає ключ — відкинуто)");
chk("a02", a02, "0,216", "P6", ["S3"]);
chk("a02", a02, "-1,8", "P3", ["S2:pow-as-mul"]);
chk("a02", a02, "-2,16", "P5", ["S5"]);
chk("a02 нецілий ключ — лише відносний допуск", a02, "-1", "P10", ["S14"]);
chk("a02 у межах 10 %", a02, "-0,2", "P8", ["S6"]);
chk("a02 з mis", { ...a02, mis: [{ v: "0,216", c: "rule:neg-pow-sign" }] }, "0,216", "P2", ["S1:rule:neg-pow-sign"], P2.rule);
eq(H.mutants({ type: "answer", title: "$(-2)^4$", answer: 16 }), [{ code: "pow-as-mul", v: "-8" }, { code: "neg-pow-sign", v: "-16" }], "neg-pow-sign на парному показнику");
eq(H.mutants({ type: "answer", title: "$2^(-3)$", answer: "1/8" }).find(m => m.code === "neg-exp")?.v, "-8", "neg-exp: 2^(−3) → −8");
// pg7m3:a05 — comparison (форма F без обчислень): числових сигналів немає
chk("a05", pool("pg7m3:a05"), ">", "P10", []);
// g11m6l1#5 (choice без формул у варіантах, pre: g10m3l2) = 9,5
const g11 = scr("g11m6l1", 5);
const g11m = { ...g11, mis: { 0: "pre:g10m3l2", 2: "rule:neg-exp", 3: "slip:sign", 4: "slip:drop" } };
chk("g11m6l1#5", g11m, 0, "P2", ["S1:pre:g10m3l2"], P2.pre);
chk("g11m6l1#5", g11m, 2, "P2", ["S1:rule:neg-exp"], P2.rule);
chk("g11m6l1#5", g11m, 3, "P2", ["S1:slip:sign"], P2.slip);
chk("g11m6l1#5", g11m, 4, "P2", ["S1:slip:drop"], P2.slip);
chk("g11m6l1#5 без mis[4]", g11, 4, "P8", ["S6"]);                    // 9 при 9,5: варіанти без «$» → S6 (5 %)
chk("g11m6l1#5 без mis", g11, 0, "P10", ["S14"]);                     // 18,5 — далеко
chk("g11m6l1#5 + S12", g11m, 0, "P2", ["S1:pre:g10m3l2", "S12"], ["pre", .882, .058], { pre: true });
// ms4l1#6 «Скільки см² в 1 дм²?» = 100 см²: спільне закінчення «см²» знімається → S5 при sk meas → P7
eq(scr("ms4l1", 6).sk, "meas", "ms4l1#6 sk");
chk("ms4l1#6", scr("ms4l1", 6), 0, "P7", ["S5"]);
chk("ms4l1#6", scr("ms4l1", 6), 2, "P7", ["S5"]);
chk("choice з формулою у варіанті — без числових сигналів", { type: "choice", sk: "meas", opts: ["10 $см^2$", "100 $см^2$"], correct: 1 }, 0, "P10", []);
// pg8m4:b02 = 9
const b02 = pool("pg8m4:b02"), b02m = { ...b02, mis: [{ v: "3√41", c: "rule:pyth-add" }, { v: "3", c: "rule:pyth-linear" }] };
for (const r of ["3√41", "√369", "19,2", "19,21"]) chk("b02", b02m, r, "P2", ["S1:rule:pyth-add"], P2.rule);
chk("b02", b02m, "3", "P2", ["S1:rule:pyth-linear"], P2.rule);
chk("b02", b02m, "8", "P8", ["S6"]); chk("b02", b02m, "10", "P8", ["S6"]);
chk("b02 без mis", b02, "3", "P10", ["S14"]);
// модифікатори §1.3: S10 (окремо з hint), S11, S9
chk("g4m2l4#7 S10+ з hint", g4, "1135", "P5", ["S4", "S10+h"], ["slip", .643, .857], { try2: "ok", hint2: true });
chk("dg6 №0 S10+ без hint", dg6.items[0], "9", "P8", ["S6", "S10+"], ["calc", .588, .823], { try2: "ok" });
chk("dg6 №0 S10−", dg6.items[0], "-8", "P6", ["S3", "S10-"], ["unk", .437, .458], { try2: "bad" });
chk("a08 S11", a08, "31", "P8", ["S6", "S11"], ["calc", .455, .728], { dt: 1200, lvl: 3 });
chk("d01 S11 лише з рівня 2", d01, "16/20", "P8", ["S6"], null, { dt: 1200, lvl: 1 });
chk("d01 S9", d01, "16/20", "P8", ["S6", "S9"], ["calc", .556, .778], { run: [{ lvl: 1 }, { lvl: 2 }], lvl: 1 });
chk("d01 S9 — лише сусіди рівня ≥", d01, "16/20", "P8", ["S6"], null, { run: [{ lvl: 1 }], lvl: 2 });

/* ---------- 2. Збіг mis (§5.2) ---------- */
const mm = (s, v, r) => H.misMatch(s, v, r)?.how ?? null;
eq(mm(b02, "3√41", "3√41"), "exact", "b02 3√41 → точно");
eq(H.misMatch(b02, "3√41", "√369"), { how: "form", mf: 1 }, "b02 √369 → mf");
for (const r of ["19,2", "19,21", "19,20", "19.2"]) eq(mm(b02, "3√41", r), "approx", `b02 ${r} → наближення`);
for (const r of ["19,3", "19", "19,22", "19,1"]) eq(mm(b02, "3√41", r), null, `b02 ${r} → ні`);
eq(mm(d01, "4/9", "0,44"), "approx", "d01 0,44 до 4/9 → так"); eq(mm(d01, "4/9", "0,445"), null, "0,445 → ні");
eq(mm(d01, "4/9", "0,4"), null, "d01 0,4 до 4/9 → ні"); eq(mm(d01, "4/9", "0,444"), "approx", "0,444 → так");
eq(mm(d01, "3/20", "0,1"), null, "3/20: 0,1 → ні (скінченний дріб — лише точно)");
eq(mm(d01, "3/20", "3/20"), "exact", "3/20 → точно");
eq(mm({ type: "answer", answer: "0,15" }, "3/20", "0,15"), "exact", "3/20 і 0,15 без вимоги дробу → точно");
eq(H.misMatch(d01, "3/20", "0,15"), { how: "form", mf: 1 }, "d01: 0,15 до 3/20 → mf (ключ дробом вимагає дробу)");
eq(mm(d01, "4/9", "8/18"), "form", "d01 8/18 → mf");
eq(mm({ type: "answer", answer: 50 }, "√2", "1,4"), null, "√2 ≈ 1,4: k = 1 при |x| < 10 → ні");
eq(mm({ type: "answer", answer: 50 }, "√2", "1,41"), "approx", "√2 ≈ 1,41 → так");
eq(mm({ type: "answer", answer: 50 }, "10π", "31,4"), "approx", "10π ≈ 31,4 (k = 1, |x| ≥ 10) → так");
eq(mm({ type: "answer", answer: 50 }, "1/3", "0,33"), "approx", "0,(3) ≈ 0,33 → так");
eq(mm({ type: "answer", answer: 50 }, "0,155", "0,16"), null, "скінченне 0,155: 0,16 → ні (лише точно)");
eq(mm({ type: "answer", answer: 50 }, "0,155", "0,15"), null, "скінченне 0,155: 0,15 → ні");

/* ---------- 3. numVal і formCode (app/learn.js) ---------- */
const nv = v => { const x = LN.numVal(v); return x && { x: Math.round(x.x * 1e6) / 1e6, rat: x.rat, fin: x.fin }; };
eq(nv("3√41"), { x: 19.209373, rat: false, fin: false }, "numVal 3√41");
eq(nv("4/9"), { x: 0.444444, rat: true, fin: false }, "numVal 4/9");
eq(nv("3/20"), { x: 0.15, rat: true, fin: true }, "numVal 3/20");
eq(nv("0,(4)"), { x: 0.444444, rat: true, fin: false }, "numVal 0,(4)");
eq(nv("2 1/4"), { x: 2.25, rat: true, fin: true }, "numVal 2 1/4");
eq(nv(-0.216), { x: -0.216, rat: true, fin: true }, "numVal −0,216 (число)");
eq(nv("x = 12"), { x: 12, rat: true, fin: true }, "numVal x = 12");
eq(nv("√576"), { x: 24, rat: true, fin: true }, "numVal √576");
eq(nv("2π"), { x: 6.283185, rat: false, fin: false }, "numVal 2π");
eq(nv("m^2"), null, "numVal змінна → null"); eq(nv(""), null, "numVal порожньо → null"); eq(nv("abc"), null, "numVal текст → null");
const FC = [
  [{ type: "answer", answer: "17/20", reduced: true }, "34/40", "reduce"],
  [{ type: "answer", answer: "17/20", fractionOnly: true }, "0,85", "frac"],
  [{ type: "answer", answer: "17/20" }, "0,85", null],
  [{ type: "answer", answer: "7/4", mixed: true }, "1,75", "mixed"],
  [{ type: "answer", answer: "7/4", form: "improper" }, "1 3/4", "improper"],
  [{ type: "answer", answer: 2.5, decimals: 2 }, "2,5", "decimals"],
  [{ type: "answer", answer: 24, title: "Квадрат площею 576" }, "√576", "rootNum"],
  [{ type: "answer", answer: 24, title: "Обчисли $\\sqrt{576}$" }, "√576", "rootCopy"],
  [{ type: "answer", answerKind: "exactRoot", answer: "3√41" }, "√369", "simplify"],
  [{ type: "answer", answerKind: "coordinates2", answer: [1, -5], title: "Дано точку $M$" }, "M(1; -5)", "name"],
  [{ type: "answer", answerKind: "intervalSet", answer: "[1; 2]", title: "Знайди область значень $E(f)$" }, "x ∈ [1; 2]", "name"],
  [{ type: "answer", answerKind: "quantity", answer: 245, units: ["м", "см"], form: "compound" }, "245 см", "units"],
  [{ type: "answer", answer: "17/20" }, "17/20", null],
  [{ type: "answer", answer: "17/20" }, "5", null]
];
const byCode = {};
for (const [s, v, code] of FC) {
  const got = LN.formCode(s, v); eq(got, code, `formCode ${JSON.stringify(s.answer)} ← ${v}`);
  if (got) { const t = (LN.checkAns(s, v), LN.formHint(s, v)); (byCode[got] ||= new Set()).add(t); ok(t && typeof t === "string", `formHint для ${got}`); }
}
for (const [c, ts] of Object.entries(byCode)) if (!["name", "decimals", "units"].includes(c)) eq(ts.size, 1, `код ${c} ↔ один текст`);
// той самий код — у хибного запису hyp_fmt
eq(LN.checkAns(d01, "34/40"), "form", "d01 34/40 — form");

/* ---------- 4. Трекер: допоміжні ---------- */
const tm = (day, min = 0) => Date.parse(day + "T09:00:00Z") + min * 6e4;
function A(s, o) {   // відповідь у тренуванні (o: day, min, verdict, raw, try, final, unseen, run, lvl, hint, mode, l, i, ls, pres, preWeak)
  const mode = o.mode || "practice";
  return { s, item: { mode, l: o.l || s.lesson, i: o.i ?? 0, key: mode === "practice" ? s.key : null, type: s.type, sk: s.sk ?? null },
    raw: o.raw ?? "ok", verdict: o.verdict || "ok", try: o.try || 1, hint: !!o.hint, final: o.final ?? true, dt: o.dt ?? 9000,
    t: tm(o.day, o.min || 0), day: o.day, lvl: mode === "practice" ? (o.lvl ?? s.lvl ?? null) : null, unseen: o.unseen ?? true, run: o.run ?? 1,
    ls: o.ls, pres: o.pres || [], preWeak: !!o.preWeak };
}
const err = (T, s, o) => [...T.onAnswer(A(s, { ...o, verdict: "bad", raw: o.raw ?? "0", try: 1, final: false })), ...T.onAnswer(A(s, { ...o, verdict: o.v2 || "ok", try: 2, final: true }))];
const D1 = "2026-11-02", D2 = "2026-11-03", D3 = "2026-11-04";
const pair = ["pg6m2:d01", "pg6m2:d02", "pg6m2:d03", "pg6m2:d04", "pg6m2:d05", "pg6m2:d06", "pg6m2:d07"].map(pool);
const of = (evs, t) => evs.filter(e => e.type === t);

/* ---------- 5. sol / sol0 (§2.3) ---------- */
{ // помилка + 2 вправи пари того ж дня + перевірка наступного дня → sol 0, sol0 2
  const T = H.tracker({ seed: "t1" }), ev = [];
  ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }));
  const hid = of(ev, "hyp_open")[0]?.d.hid; ok(hid, "sol: гіпотезу відкрито");
  ev.push(...T.onAnswer(A(pair[1], { day: D1, min: 1 })), ...T.onAnswer(A(pair[2], { day: D1, min: 2 })));
  const a = of(ev, "hyp_probe"); eq(a.map(e => e.d.kind), ["A"], "той самий день — одна подія A");
  eq(a[0].d.sol, 0, "A: sol 0"); eq(a[0].d.res, "ok", "A: res");
  const ev2 = T.onAnswer(A(pair[3], { day: D2, run: 2 })), p = of(ev2, "hyp_probe")[0];
  eq(p && [p.d.kind, p.d.sol, p.d.sol0, p.d.gap.days], ["D>", 0, 2, 1], "наступного дня: D> (lvl 2 > 1), sol 0, sol0 2, 1 день");
  eq(p.d.prb !== undefined && p.d.hid === hid, true, "hyp_probe — prb і hid");
  ok(p.d.post.rule !== 0.7, "чиста перевірка оновлює розподіл");
  const ev3 = T.onAnswer(A(pair[4], { day: D2, min: 1, run: 2 })), q = of(ev3, "hyp_probe")[0];
  eq(q && [q.d.kind, q.d.sol], ["D>", 1], "друга вправа пари в день перевірки — sol 1");
  eq(q.d.post, p.d.post, "sol 1 — розподіл не змінюється");
}
{ // урок теми між днями → sol 1
  const T = H.tracker({ seed: "t2" }), ev = [];
  ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }));
  ev.push(...T.onScreen({ item: { mode: "lesson", l: "g6m2l4", i: 0 }, t: tm(D2), day: D2 }));
  const p = of(T.onAnswer(A(pair[1], { day: D3, run: 3, unseen: true })), "hyp_probe")[0];
  eq(p && [p.d.kind, p.d.sol, p.d.sol0], ["D≤", 1, 0], "урок теми між днями → D≤ з sol 1");
}
{ // екран уроку того ж дня → sol0, не sol
  const T = H.tracker({ seed: "t2b" }), ev = [];
  ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }));
  T.onScreen({ item: { mode: "lesson", l: "g6m2l4", i: 0 }, t: tm(D1, 5), day: D1 });
  const p = of(T.onAnswer(A(pair[1], { day: D2, run: 3 })), "hyp_probe")[0];
  eq(p && [p.d.kind, p.d.sol, p.d.sol0], ["D≤", 0, 1], "екран уроку в день помилки → sol0 1, sol 0");
}
{ // помилка тесту рівня → урок → вправа (той самий день) → A; без уроку — чиста
  const ms = pool("pms0:c01"), dg = dg6.items[0];
  const diag = T => T.onAnswer({ s: dg, item: { mode: "diag", l: "dg6", i: 0, key: null, type: dg.type, sk: dg.sk }, raw: "48", verdict: "bad", try: 1, hint: false, final: true, dt: 8000, t: tm(D1), day: D1, lvl: null, run: 1, ls: ["ms0l3"], pres: [] });
  let T = H.tracker({ seed: "t3" }); const o = of(diag(T), "hyp_open")[0];
  eq(o && [o.d.h.rule, o.d.h.sig, o.d.at.mode, o.d.at.try], ["P3", ["S2:ord-ltr"], "diag", 1], "тест рівня: гіпотеза одразу (без другої спроби)");
  for (let i = 0; i < 3; i++) T.onScreen({ item: { mode: "lesson", l: "ms0l3", i }, t: tm(D1, 1 + i), day: D1 });
  let p = of(T.onAnswer(A(ms, { day: D1, min: 10, run: 3 })), "hyp_probe")[0];
  eq(p && [p.d.kind, p.d.sol, p.d.sol0], ["A", 0, 3], "тест → урок → вправа: A");
  T = H.tracker({ seed: "t3b" }); diag(T);
  p = of(T.onAnswer(A(ms, { day: D1, min: 10, run: 3 })), "hyp_probe")[0];
  eq(p && [p.d.kind, p.d.sol, p.d.sol0], ["D≤", 0, 0], "тест → вправа до уроку теми: чиста D≤");
}

/* ---------- 6. Пара — одиниця перевірки (R4-P2-1) ---------- */
{
  const T = H.tracker({ seed: "t4" }), ev = [];
  ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }), ...err(T, pair[1], { day: D1, min: 2, raw: "5" }));
  const opens = of(ev, "hyp_open"); eq(opens.length, 2, "дві гіпотези однієї пари");
  const ev2 = T.onAnswer(A(pair[3], { day: D2, run: 2, verdict: "bad", raw: "1" })), pr = of(ev2, "hyp_probe");
  eq(pr.map(e => e.d.hid), opens.map(e => e.d.hid), "одна перевірка → дві події hyp_probe");
  eq(new Set(pr.map(e => e.d.prb)).size, 1, "спільний prb"); eq(pr.every(e => e.d.key === pair[3].key && e.d.kind === "D>" && e.d.sol === 0), true, "той самий key, обидві чисті");
  for (const [i, e] of pr.entries()) ok(JSON.stringify(e.d.post) !== JSON.stringify(opens[i].d.h.prior), `гіпотеза ${i + 1} оновлена`);
  eq(of(ev2, "hyp_open").length, 1, "та сама відповідь відкриває нову гіпотезу");
  // P: передумова — вправа рівня 1 уроку-передумови
  const T2 = H.tracker({ seed: "t4p" }), g = pool("pg10m3:b05"), pr2 = pool("pg10m3:b01");
  err(T2, g, { day: D1, raw: "0", pres: ["g10m3l1"] });
  const e3 = of(T2.onAnswer(A(pool("pg10m3:a01"), { day: D2, run: 2, verdict: "bad", raw: "0" })), "hyp_probe")[0];
  eq(E.pool.get("pg10m3:a01").lesson, "g10m3l1", "pg10m3:a01 — урок-передумова g10m3l1");
  eq(e3 && [e3.d.kind, e3.d.sol, e3.d.res], ["P", 0, "bad"], "P — небачена вправа рівня 1 уроку-передумови");
  ok(e3.d.post.pre > of(err(H.tracker({ seed: "t4q" }), pr2, { day: D1, raw: "0" }), "hyp_open")[0].d.h.prior.pre, "P ✘ підвищує pre");
  // гіпотеза з апріорним ≥ 0,8 (P2 + S12) не підтверджується нечистою перевіркою
  const T5 = H.tracker({ seed: "t4c" }), b01m = { ...pr2, mis: [{ v: "0", c: "pre:g10m3l1" }] };
  const o5 = of(err(T5, b01m, { day: D1, raw: "0", preWeak: true }), "hyp_open")[0];
  eq([o5.d.h.rule, o5.d.h.top, o5.d.h.p >= 0.8], ["P2", "pre", true], "P2 + S12: апріорне ≥ 0,8");
  T5.onScreen({ item: { mode: "lesson", l: "g10m3l2", i: 0 }, t: tm(D2), day: D2 });
  const ev5 = T5.onAnswer(A(pool("pg10m3:b02"), { day: D3, run: 4 }));
  eq([of(ev5, "hyp_probe")[0]?.d.sol, of(ev5, "hyp_close").length], [1, 0], "апріорне ≥ 0,8 + нечиста перевірка — не confirmed");
}

/* ---------- 7. Оновлення й закриття (§2.4) ---------- */
{
  const pri = [.05, .1, .7, .1, .05];
  eq(H.update(pri, "D≤", "ok", 0), [.141, .266, .437, .078, .078], "D≤ ✔");
  eq(H.update(pri, "D≤", "bad", 0), [.007, .022, .824, .11, .037], "D≤ ✘");
  eq(H.update(pri, "D≤", "bad", 1), [.004, .012, .903, .06, .02], "D≤ ✘ тим самим шаблоном: L(✘|rule) × 2");
  eq(H.update(pri, "A", "ok", 0), pri, "A не оновлює");
  eq(H.update(pri, "D≤", "form", 0), H.update(pri, "D≤", "ok", 0), "form = ✔");
  // confirmed: P3 + ✘ тим самим мутантом
  let T = H.tracker({ seed: "t5" }); err(T, pair[0], { day: D1, raw: "4/9" });
  let ev = T.onAnswer(A(pair[1], { day: D2, run: 2, verdict: "bad", raw: "1/2" }));
  eq(of(ev, "hyp_close").map(e => [e.d.why, e.d.top, e.d.n]), [["confirmed", "rule", 1]], "P3 + ✘ D≤ (rule 0,824 ≥ 0,8) → confirmed");
  const T6 = H.tracker({ seed: "t6" }); err(T6, pool("pg6m2:d02"), { day: D1, raw: "x" });
  // undecided: 2 перевірки (не A) без порогу; оновлює розподіл лише перша (чиста), друга — sol 1 (після розв'язання першої)
  const u1 = of(T6.onAnswer(A(pair[0], { day: D2, run: 2 })), "hyp_probe")[0];
  ev = T6.onAnswer(A(pair[2], { day: D3, run: 3 }));
  const u2 = of(ev, "hyp_probe")[0], c = of(ev, "hyp_close")[0];
  eq([u1.d.sol, u2.d.sol, JSON.stringify(u2.d.post) === JSON.stringify(u1.d.post)], [0, 1, true], "друга перевірка — sol 1, без оновлення");
  eq(c && [c.d.why, c.d.n], ["undecided", 2], "2 перевірки без порогу → undecided");
  // confirmed
  T = H.tracker({ seed: "t7" }); err(T, pair[0], { day: D1, raw: "4/9" });
  ev = T.onAnswer(A(pool("pg6m2:d02"), { day: D2, run: 2, verdict: "bad", raw: "4/9" }));
  const pd = of(ev, "hyp_probe")[0]; eq(pd && pd.d.same, 0, "інша вправа — свій мутант (same лише за кодом)");
  // same: та сама вправа знову через ≥ 3 дні (D°) з тим самим записом
  const T8 = H.tracker({ seed: "t8" }); err(T8, pair[0], { day: D1, raw: "4/9" });
  ev = T8.onAnswer(A(pair[0], { day: "2026-11-05", run: 2, unseen: false, verdict: "bad", raw: "4/9" }));
  const p8 = of(ev, "hyp_probe")[0]; eq(p8 && [p8.d.kind, p8.d.same, p8.d.sol], ["D°", 1, 0], "та сама вправа через 3 дні — D°, same 1");
  eq(of(ev, "hyp_close")[0]?.d.why, "confirmed", "P3 + ✘ D° тим самим шаблоном → confirmed");
  const T8b = H.tracker({ seed: "t8b" }); err(T8b, pair[0], { day: D1, raw: "4/9" });
  ok(!of(T8b.onAnswer(A(pair[0], { day: D2, run: 3, unseen: false })), "hyp_probe").length, "та сама вправа через 1 день — не перевірка (D° лише від 3 днів)");
  const T8c = H.tracker({ seed: "t8c" }), ch = [...E.pool.values()].find(x => x.lesson === "g10m2l1" && x.type === "choice"), g10 = [...E.pool.values()].find(x => x.lesson === "g10m2l1" && x.type === "answer");
  err(T8c, g10, { day: D1, raw: "0" });
  eq(of(T8c.onAnswer(A(ch, { day: D2, run: 2, unseen: false })), "hyp_probe").length, 0, "бачена choice уроку — не F");
  eq(of(T8c.onAnswer(A({ ...ch, key: ch.key + "x" }, { day: D2, run: 2, unseen: true })), "hyp_probe")[0]?.d.kind, "F", "небачена choice уроку — F");
  // expired
  T = H.tracker({ seed: "t9" }); err(T, pair[0], { day: D1, raw: "4/9" });
  ev = T.tick({ t: tm("2026-11-10"), day: "2026-11-10" }); eq(of(ev, "hyp_close").map(e => e.d.why), ["expired"], "7 днів без перевірки → expired");
  // superseded: урок пройдено знову (інша сесія) з ≥ 65 %
  T = H.tracker({ seed: "t10" }); err(T, { ...scr("g4m2l4", 7), lesson: "g4m2l4" }, { day: D1, raw: "1135", mode: "lesson", l: "g4m2l4", i: 7, run: 1 });
  eq(of(T.onLessonEnd({ l: "g4m2l4", acc: 0.9, run: 1 }), "hyp_close").length, 0, "той самий прохід уроку — не superseded");
  eq(of(T.onLessonEnd({ l: "g4m2l4", acc: 0.5, run: 2 }), "hyp_close").length, 0, "< 65 % — не superseded");
  eq(of(T.onLessonEnd({ l: "g4m2l4", acc: 0.7, run: 2 }), "hyp_close").map(e => e.d.why), ["superseded"], "≥ 65 % знову → superseded");
  // reset
  T = H.tracker({ seed: "t11" }); err(T, pair[0], { day: D1, raw: "4/9" }); err(T, pair[1], { day: D1, raw: "5" });
  eq(of(T.onReset({}), "hyp_close").map(e => e.d.why), ["reset", "reset"], "скидання → reset для всіх"); eq(T.open.length, 0, "після reset порожньо");
  // ліміт 50 відкритих
  T = H.tracker({ seed: "t12" }); let capEv = [];
  for (let i = 0; i < 51; i++) capEv.push(...err(T, pair[i % 7], { day: D1, min: i, raw: "0" }));
  eq(T.open.length, 50, "≤ 50 відкритих"); eq(of(capEv, "hyp_close").map(e => [e.d.why, e.d.cap]), [["expired", 1]], "51-ша закриває найстарішу (cap: 1)");
}

/* ---------- 8. Події: форма hyp_open, hyp_fmt, відкладене відкриття, S8, S12 ---------- */
{
  const T = H.tracker({ seed: "fmt" });
  const f = of(T.onAnswer(A(pair[0], { day: D1, verdict: "form", raw: "34/40", final: false })), "hyp_fmt")[0];
  eq(f && [f.d.key, f.d.fc], ["pg6m2:d01", "reduce"], "form → hyp_fmt з fc, без гіпотези"); eq(T.open.length, 0, "form — гіпотези немає");
  const ev = T.onAnswer(A(pair[0], { day: D1, verdict: "bad", raw: "4/9", final: false }));
  eq(of(ev, "hyp_open").length, 0, "перша спроба не фінальна — відкриття чекає другої");
  const o = of(T.onScreen({ item: { mode: "practice", l: "g6m2l4", i: 1 }, t: tm(D1, 1), day: D1 }), "hyp_open")[0];
  eq(o && o.d.h.sig, ["S2:frac-add-naive"], "екран змінився без другої спроби — відкрито без S10");
  eq(Object.keys(o.d).sort(), ["at", "h", "hid", "persist", "rv"], "поля hyp_open"); eq(o.d.rv, "hyp-1", "rv");
  eq(Object.keys(o.d.h), ["l", "sk", "lvl", "rule", "sig", "prior", "pexec", "top", "p"], "поля h");
  eq(o.d.hid, "fmt.1", "hid = <seed>.<лічильник>");
  ok(JSON.stringify({ v: 1, type: "hyp_open", d: o.d }).length < 2048, "hyp_open < 2 КБ");
  // S8: на парі вже 2 помилки з тим самим кодом за 7 днів → наступна без коду → P4
  const T2 = H.tracker({ seed: "s8" });
  err(T2, pair[0], { day: D1, raw: "4/9" }); err(T2, pair[0], { day: D1, min: 3, raw: "4/9", run: 2 });
  const o3 = of(err(T2, pair[3], { day: D1, min: 5, raw: "999", run: 3 }), "hyp_open")[0];
  eq(o3 && [o3.d.h.rule, o3.d.h.sig[0]], ["P4", "S8:frac-add-naive"], "S8 → P4");
  const T2b = H.tracker({ seed: "s8b" }); err(T2b, pair[0], { day: D1, raw: "4/9" });
  eq(of(err(T2b, pair[3], { day: D1, min: 5, raw: "999", run: 3 }), "hyp_open")[0]?.d.h.rule === "P4", false, "одна попередня помилка з кодом — ще не S8");
  // S12: помилка на уроці-передумові за 14 днів
  const T3 = H.tracker({ seed: "s12" }), g11a = { ...g11m, lesson: "g11m6l1" };
  err(T3, pool("pg10m3:b01"), { day: D1, raw: "0" });
  const o4 = of(T3.onAnswer(A(g11a, { day: D2, mode: "lesson", l: "g11m6l1", i: 5, verdict: "bad", raw: 0, final: true, pres: E.pres["g11m6l1"] })), "hyp_open")[0];
  eq(o4 && [o4.d.h.rule, o4.d.h.sig, o4.d.h.top], ["P2", ["S1:pre:g10m3l2", "S12"], "pre"], "S12 з помилки на g10m3l2");
  eq(E.pres["g11m6l1"].includes("g10m3l2"), true, "preIndex: g11m6l1 → g10m3l2");
}

/* ---------- 9. Детермінованість і реплей ---------- */
function synth() {   // синтетичний журнал у форматі SLID_EVIDENCE.export(): два профілі, reset, cv = null
  const evs = []; let seq = 0;
  const e = (pid, type, d, t, extra = {}) => evs.push({ v: 1, eid: `s.${seq}`, seq: ++seq, type, t, tzo: -120, n: seq, ms: 0, sid: "s", did: "dev1", pid, cv: seq < 4 ? null : "abc", cvs: null, net: 1, synced: 0, d, ...extra });
  const ans = (pid, s, t, o) => e(pid, "answer", { mode: "practice", c: "math", l: s.lesson, i: o.i ?? 0, id: s.id, key: s.key, pool: s.pool.id, type: s.type, ak: s.answerKind ?? null, sk: s.sk, pre: null, topic: null, rev: null, boss: false, hyp: false, try: o.try || 1, verdict: o.v || "ok", raw: o.raw ?? "1", hint: false, final: o.final ?? true }, t, { dt: 9000 });
  e("p1", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  e("p1", "practice_start", { focus: "g6m2l4", prN: 1, items: pair.slice(0, 4).map(s => ({ key: s.key, l: s.lesson, review: false, lvl: s.lvl })) }, tm(D1));
  ans("p1", pair[0], tm(D1, 1), { v: "bad", raw: "4/9", final: false }); ans("p1", pair[0], tm(D1, 2), { v: "ok", raw: "17/20", try: 2 });
  ans("p1", pair[1], tm(D1, 3), {}); ans("p1", pair[2], tm(D1, 4), { v: "bad", raw: "6/8", final: false }); ans("p1", pair[2], tm(D1, 5), { v: "bad", try: 2 });
  e("p1", "practice_start", { focus: "g6m2l4", prN: 2, items: pair.slice(3, 7).map(s => ({ key: s.key, l: s.lesson, review: false, lvl: s.lvl })) }, tm(D2));
  ans("p1", pair[3], tm(D2, 1), { v: "bad", raw: "1" });
  ans("p1", pair[1], tm(D2, 1.5), {});   // уже бачена вчора — не перевірка (D° лише від 3 днів) ans("p1", pair[4], tm(D2, 2), {}); ans("p1", pair[5], tm(D3, 1), {});
  e("p1", "reset", {}, tm(D3, 2));
  e("p2", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D3, 3));
  ans("p2", pair[0], tm(D3, 4), { v: "bad", raw: "3/20" }); ans("p2", pair[1], tm("2026-11-06", 1), {});
  return { schema: 1, app: "slid", exportedAt: "2026-11-06T00:00:00Z", did: "dev1", events: evs.reverse() };
}
{
  const X = synth(), R1 = replay(X, E), R2 = replay(JSON.parse(JSON.stringify(X)), E);
  eq(JSON.stringify(R1.events), JSON.stringify(R2.events), "реплей детермінований");
  eq(R1.profiles.map(p => [p.pid, p.fresh]), [["p1", true], ["p2", true]], "профілі за did+pid, з порожнього стану");
  ok(R1.notes.cvGuess > 0, "cvGuess для cv = null");
  eq(R1.events.filter(e => e.type === "hyp_probe" && e.d.key === pair[1].key && e.pid === "p1").map(e => e.d.kind), ["A", "A"], "реплей веде seen: бачена вправа наступного дня — не D≤");
  const closes = R1.events.filter(e => e.type === "hyp_close");
  eq(closes.filter(e => e.d.why === "reset").length, closes.filter(e => e.pid === "p1" && e.d.why === "reset").length, "reset обриває лише гіпотези свого профілю");
  ok(closes.some(e => e.d.why === "reset"), "reset у реплеї");
  const opens = R1.events.filter(e => e.type === "hyp_open"); ok(opens.length >= 4, "реплей відкриває гіпотези");
  eq(new Set(opens.map(e => e.d.hid)).size, opens.length, "hid унікальні");
  ok(opens.filter(e => e.pid === "p1").every(e => e.d.hid.split(".")[0] !== opens.find(x => x.pid === "p2").d.hid.split(".")[0]), "різні профілі — різні префікси hid");
  const M = metrics(R1, E);
  ok(M.hypotheses === opens.length && M.accuracy["D≤+F"]?.n >= 0 !== undefined, "метрики пораховано");
  ok(Object.keys(M.accuracy).some(k => k.startsWith("D>")), "точність за видами (D>)");
  ok(Object.keys(M.accuracy).some(k => k.includes("|lvl")) && Object.keys(M.accuracy).some(k => k.includes("|sol0=")), "точність за рівнями й sol0");
  // той самий вхід → ті самі події трекера; стан зберігається й відновлюється
  const run = () => { const T = H.tracker({ seed: "det" }), ev = []; ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }), ...T.onAnswer(A(pair[3], { day: D2, run: 2, verdict: "bad", raw: "4/9" }))); return [ev, T.state()]; };
  const [e1, st] = run(), [e2] = run(); eq(JSON.stringify(e1), JSON.stringify(e2), "трекер детермінований");
  const T2 = H.tracker({ seed: "det2" }); ok(T2.load(st), "load(state)"); eq(T2.open.map(h => h.hid), st.open.map(h => h.hid), "стан відновлено");
  // CLI: звіт у тимчасову теку
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hyp-")), f = path.join(dir, "log.json"); fs.writeFileSync(f, JSON.stringify(X));
  const { execFileSync } = await import("node:child_process");
  execFileSync(process.execPath, [path.join(ROOT, "tools/hyp-replay.mjs"), f, "--out", dir, "--date", "2026-11-06"], { encoding: "utf8" });
  ok(fs.existsSync(path.join(dir, "2026-11-06.md")) && fs.existsSync(path.join(dir, "2026-11-06.json")), "звіт reports/hyp/<дата>.md + .json");
  const md = fs.readFileSync(path.join(dir, "2026-11-06.md"), "utf8"); ok(/cvGuess/.test(md) && /Неоднозначні/.test(md), "звіт: cvGuess і розділ amb");
  fs.rmSync(dir, { recursive: true, force: true });
}

/* ---------- 10. --content-stats відтворює цифри документа (§0, §2.1, §2.3) ---------- */
{
  const st = contentStats(E), s0 = st.s0, s21 = st.s21, s23 = st.s23;
  eq([s0.gradedScreens, s0.byType.choice, s0.choiceHypPoll, s0.fbBad, s0.hint, s0.pre, s0.preLessons], [1306, 564, 52, 1287, 914, 30, 16], "§0 екрани уроків");
  eq([s0.pools, s0.poolItems, s0.lvl, s0.poolHint, s0.poolPre, s0.gen, s0.itemTypes, s0.answerNumber], [48, 1348, { 1: 518, 2: 505, 3: 325 }, 848, 0, 0, { answer: 1243, choice: 66, multi: 39 }, 896], "§0 пули");
  eq([s0.pairs, s0.pairs2a1, s0.diags, s0.diagItems, s0.pureTitle], [174, 158, 8, 209, 277], "§0 пари, тести, чисті вирази");
  eq([s21.errors, s21.A, s21.Dle, s21.byLvl[1].Dle, s21.byLvl[1].errors, s21.byLvl[2].Dle, s21.byLvl[2].errors], [676, 346, 151, 0, 518, 151, 158], "§2.1 A 346; D≤ 151/676, рівень 1 — 0/518");
  eq([s21.Dgt, s21.Dseen, s21.none, s21.anyUnseen, s21.F, s21.natDle, s21.natAny], [520, 499, 26, 671, 124, 151, 671], "§2.1 D>, D°, F, природні");
  eq([st.pre.viaRequires, st.pre.viaDiagTopicFor, st.pre.viaPreScreens, st.pre.any, st.pre.anyWithPrePool], [133, 149, 9, 157, 157], "§2.1 передумови 157/169");
  eq([s23[1].clean, s23[1].errors, s23[1].cleanDle, s23[1].cleanDgt, s23[2].clean, s23[2].errors, s23[2].cleanDle, s23[2].cleanDgt], [515, 518, 0, 515, 156, 158, 151, 5], "§2.3 чисті наступного дня 515/518 і 156/158");
  eq([s23[1].sol0, s23[2].sol0, st.pairSizes[4]], [503, 0, 165], "§2.3 sol0 ≥ 1 — 503/518 і 0/158; 165 уроків — одна пара");
  // та сама модель через app/hyp.js: усі помилки рівня 1 мають чисту природну перевірку (D> або F), D≤ — жодної; sol0 — як у скрипті; A — 346 з lvl ≤
  const M = st.module;
  eq([M.byLvl[1].clean, M.byLvl[1].kinds["D≤"] || 0, M.byLvl[1].sol0ge1, M.byLvl[2].sol0ge1, M.A.le], [518, 0, 503, 0, 346], "модель через hyp.js");
  eq((M.byLvl[1].kinds["D>"] || 0) >= 463 && (M.byLvl[2].kinds["D≤"] || 0) >= 144, true, "через hyp.js: D> рівня 1 і D≤ рівня 2 (решта — F)");
}

/* ---------- 11. Модуль не підключено (E1) ---------- */
{
  const idx = fs.readFileSync(path.join(ROOT, "index.html"), "utf8"), sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8"), man = fs.readFileSync(path.join(ROOT, "content/manifest.json"), "utf8");
  eq([idx.includes("app/hyp.js"), sw.includes("app/hyp.js"), man.includes("app/hyp.js")], [false, false, false], "app/hyp.js не в index.html / sw.js / manifest (E1)");
  ok(!/SLID_HYP/.test(fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8")), "app.js не викликає SLID_HYP (E1)");
  ok(!/document|localStorage|indexedDB/.test(fs.readFileSync(process.env.HYP_FILE || path.join(ROOT, "app/hyp.js"), "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "")), "hyp.js без DOM і сховища");
}

console.log(fails ? `test-hyp: ${fails} з ${n} перевірок не пройшли` : `test-hyp: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
