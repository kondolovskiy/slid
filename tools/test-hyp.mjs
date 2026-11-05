#!/usr/bin/env node
// Слід · тести гіпотез «обчислення чи поняття» (app/hyp.js, етапи E1–E2; docs/design/diag-hypothesis-math.md).
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
  const c = of(ev2, "hyp_close")[0];
  eq(c && [c.d.why, c.d.n, c.d.hid], ["undecided", 1, hid], "перша чиста перевірка без порогу групи → undecided (далі чистих не буде)");
  eq(of(T.onAnswer(A(pair[4], { day: D2, min: 1, run: 2 })), "hyp_probe").length, 0, "закрита гіпотеза більше не перевіряється");
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
  const T2b = H.tracker({ seed: "t4pb" }); err(T2b, g, { day: D1, raw: "0", pres: ["g10m3l1"] });
  eq(of(T2b.onAnswer(A(pool("pg10m3:a04"), { day: D2, run: 2, lvl: 2 })), "hyp_probe").length, 0, "P — лише вправа рівня 1");
  eq(of(T2b.onAnswer(A(pool("pg10m3:a01"), { day: D1, run: 2 })), "hyp_probe").length, 0, "P того самого дня після пояснення — не перевірка");
  ok(e3.d.post.pre > of(err(H.tracker({ seed: "t4q" }), pr2, { day: D1, raw: "0" }), "hyp_open")[0].d.h.prior.pre, "P ✘ підвищує pre");
  // гіпотеза з апріорним ≥ 0,8 (P2 + S12) не підтверджується нечистою перевіркою
  const T5 = H.tracker({ seed: "t4c" }), b01m = { ...pr2, mis: [{ v: "0", c: "pre:g10m3l1" }] };
  const o5 = of(err(T5, b01m, { day: D1, raw: "0", preWeak: true }), "hyp_open")[0];
  eq([o5.d.h.rule, o5.d.h.top, o5.d.h.p >= 0.8], ["P2", "pre", true], "P2 + S12: апріорне ≥ 0,8");
  T5.onScreen({ item: { mode: "lesson", l: "g10m3l2", i: 0 }, t: tm(D2), day: D2 });
  const ev5 = T5.onAnswer(A(pool("pg10m3:b02"), { day: D3, run: 4 }));
  eq([of(ev5, "hyp_probe")[0]?.d.sol, of(ev5, "hyp_close").map(e => [e.d.why, e.d.n])], [1, [["undecided", 0]]], "апріорне ≥ 0,8 + нечиста перевірка — undecided, не confirmed");
}

/* ---------- 7. Оновлення й закриття (§2.4) ---------- */
{
  const pri = [.05, .1, .7, .1, .05];
  eq(H.update(pri, "D≤", "ok", 0), [.141, .266, .437, .078, .078], "D≤ ✔");
  eq(H.update(pri, "D≤", "bad", 0), [.007, .022, .824, .11, .037], "D≤ ✘");
  eq(H.update(pri, "D≤", "bad", 1), [.004, .012, .903, .06, .02], "D≤ ✘ тим самим шаблоном: L(✘|rule) × 2");
  eq(H.update(pri, "A", "ok", 0), pri, "A не оновлює");
  eq(H.update(pri, "D≤", "form", 0), H.update(pri, "D≤", "ok", 0), "form = ✔");
  // закриття за групою (§1.1): pexec ≥ 0,8 — exec, ≤ 0,2 — know (rule + pre); інакше undecided
  let T = H.tracker({ seed: "t5" }); err(T, pair[0], { day: D1, raw: "4/9" });
  let ev = T.onAnswer(A(pair[1], { day: D2, run: 2, verdict: "bad", raw: "1/2" }));
  eq(of(ev, "hyp_close").map(e => [e.d.why, e.d.grp, e.d.pexec, e.d.n]), [["confirmed", "know", 0.057, 1]], "P3 (+ S10, друга спроба ✔) + ✘ D≤ → pexec 0,057 → confirmed know");
  T = H.tracker({ seed: "t5e" }); err(T, pair[0], { day: D1, raw: "16/20" });
  ev = T.onAnswer(A(pair[1], { day: D2, run: 2 }));
  eq(of(ev, "hyp_close").map(e => [e.d.why, e.d.grp, e.d.top, e.d.pexec, e.d.p < 0.8]), [["confirmed", "exec", "calc", 0.929, true]], "P8 (+ S10) + ✔ D≤ → pexec 0,929 → confirmed exec (жоден клас окремо ≥ 0,8)");
  const T6 = H.tracker({ seed: "t6" }); err(T6, pool("pg6m2:d02"), { day: D1, raw: "100" });
  ev = T6.onAnswer(A(pair[0], { day: D2, run: 2 }));
  eq(of(ev, "hyp_close").map(e => [e.d.why, e.d.pexec, e.d.n, e.d.grp]), [["undecided", 0.624, 1, undefined]], "P10 (+ S10) + ✔ D≤ → pexec 0,624 → undecided");
  // межа групи (P3-R2-2, R03): pexec між 0,7 і 0,8 — undecided (поріг 0,7 дав би confirmed exec)
  const T6b = H.tracker({ seed: "t6b" }); err(T6b, pair[0], { day: D1, raw: "-17/20", v2: "bad" });
  ev = T6b.onAnswer(A(pool("pg6m2:d02"), { day: D2, run: 2 }));
  eq(of(ev, "hyp_close").map(e => [e.d.why, e.d.pexec, e.d.grp]), [["undecided", 0.765, undefined]], "P6 (S3, S10−) + ✔ D≤ → pexec 0,765 → undecided (межа 0,8, не 0,7)");
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
  // тест рівня: перший прохід уроку теми — пояснення, не superseded (P2-1); другий прохід — superseded
  const dgE = T => T.onAnswer({ s: dg6.items[0], item: { mode: "diag", l: "dg6", i: 0, key: null, type: "number", sk: "num" }, raw: "48", verdict: "bad", try: 1, final: true, t: tm(D1), day: D1, run: 1, ls: ["ms0l3"], pres: [] });
  T = H.tracker({ seed: "t10d" }); dgE(T);
  eq(of(T.onLessonEnd({ l: "ms0l3", acc: 0.9, run: 2, day: D1 }), "hyp_close").length, 0, "тест → перший урок теми ≥ 65 % — не superseded");
  eq(of(T.onLessonEnd({ l: "ms0l3", acc: 0.8, run: 3, day: D2 }), "hyp_close").map(e => e.d.why), ["superseded"], "тест → урок → урок знову → superseded");
  T = H.tracker({ seed: "t10e" }); T.onLessonEnd({ l: "ms0l3", acc: 0.9, run: 0, day: D1 }); dgE(T);
  eq(of(T.onLessonEnd({ l: "ms0l3", acc: 0.9, run: 2, day: D1 }), "hyp_close").map(e => e.d.why), ["superseded"], "урок пройдено до тесту → після тесту знову → superseded");
  T = H.tracker({ seed: "t10f" }); T.onAnswer({ s: dg6.items[0], item: { mode: "diag", l: "dg6", i: 0, key: null, type: "number", sk: "num" }, raw: "48", verdict: "bad", try: 1, final: true, t: tm(D1), day: D1, run: 1, ls: ["ms0l3"], pres: [], done: ["ms0l3"] });
  eq(of(T.onLessonEnd({ l: "ms0l3", acc: 0.9, run: 2, day: D1 }), "hyp_close").map(e => e.d.why), ["superseded"], "done від app.js: урок пройдено раніше → superseded");
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
  // тест рівня: half (півбала, engine-diag-half-credit) — як form: hyp_fmt з half: 1 і fc, гіпотези немає
  const sq = { type: "answer", answer: 24, sk: "num", title: "Квадрат площею 576 см². Знайди сторону" };
  eq(LN.diagVerdict(sq, "√576"), LN.HALF, "diagVerdict √576 при ключі 24 — HALF");
  const hf = T.onAnswer({ s: sq, item: { mode: "diag", l: "dgX", i: 3, key: null, type: "answer", sk: "num" }, raw: "√576", verdict: "half", try: 1, final: true, t: tm(D1), day: D1, run: 9 });
  eq([of(hf, "hyp_fmt")[0]?.d.fc, of(hf, "hyp_fmt")[0]?.d.half, of(hf, "hyp_open").length], ["rootNum", 1, 0], "half → hyp_fmt rootNum, без гіпотези");
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
// синтетичний журнал у форматі SLID_EVIDENCE.export() з повним потоком: тест рівня, урок (screen, lesson_end), тренування двох днів,
// reset, профіль не з початку журналу, gen-вправа (Dg). Очікування — точні (kind, sol, sol0, закриття, метрики).
const GEN = { id: "g1", key: "pg6m2:g1", lesson: "g6m2l4", sk: "ops", type: "answer", lvl: 1, pool: pair[0].pool, title: "$ {a} · {b} $", body: "<p>Обчисли.</p>",
  gen: { vars: { a: { min: 2, max: 9 }, b: { values: [11, 12, 13] } }, answer: "a*b" } };
E.pool.set(GEN.key, GEN);   // лише в пам'яті тесту: у змісті gen ще немає
eq(LN.genAll(GEN).envs.length, 24, "фікстура gen: 24 набори (≥ 20)");
function synth() {
  const evs = []; let seq = 0;
  const e = (pid, type, d, t, extra = {}) => evs.push({ v: 1, eid: `s.${seq}`, seq: ++seq, type, t, tzo: -120, n: seq, ms: 0, sid: "s", did: "dev1", pid, cv: seq < 4 ? null : "abc", cvs: null, net: 1, synced: 0, d, ...extra });
  const ans = (pid, s, t, o = {}) => e(pid, "answer", { mode: "practice", c: "math", l: s.lesson, i: o.i ?? 0, id: s.id, key: s.key, pool: s.pool.id, type: s.type, ak: s.answerKind ?? null, sk: s.sk, pre: null, topic: null, rev: null, boss: false, hyp: false, try: o.try || 1, verdict: o.v || "ok", raw: o.raw ?? "1", hint: false, final: o.final ?? true, ...(o.gv ? { gv: o.gv, genAt: o.genAt } : {}) }, t, { dt: 9000 });
  const ps = (pid, t, ks, lv = {}) => e(pid, "practice_start", { focus: null, prN: 1, items: ks.map(s => ({ key: s.key, l: s.lesson, review: false, lvl: lv[s.key] ?? s.lvl })) }, t);
  // p1 — тренування: дві гіпотези пари, одна перевірка наступного дня (спільний prb), нова гіпотеза, reset
  e("p1", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  ps("p1", tm(D1), pair.slice(0, 4), { [pair[1].key]: 3 });                                    // lvl з журналу має пріоритет над змістом
  ans("p1", pair[0], tm(D1, 1), { v: "bad", raw: "4/9", final: false }); ans("p1", pair[0], tm(D1, 2), { raw: "17/20", try: 2 });
  ans("p1", pair[1], tm(D1, 3), { v: "bad", raw: "100" });   // final без другої спроби (слайдер-подібно) — відкриття одразу
  ans("p1", pair[2], tm(D1, 4), {});
  ps("p1", tm(D2), pair.slice(3, 6));
  ans("p1", pair[3], tm(D2, 1), { v: "bad", raw: "1" });                                        // перевірка обох гіпотез + нова гіпотеза
  ans("p1", pair[4], tm(D2, 2), {});                                                            // A для нової
  ans("p1", pair[1], tm(D2, 3), {});                                                            // бачена вчора — не перевірка
  e("p1", "reset", {}, tm(D2, 4));
  // p2 — тест рівня → урок теми (lesson_end 0,9 — перший прохід, не superseded) → вправа того самого дня (A) → наступного дня D≤
  e("p2", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1, 30));
  e("p2", "diag_start", { c: "math", diag: "dg6" }, tm(D1, 31));
  e("p2", "answer", { mode: "diag", c: "math", l: "dg6", i: 0, id: null, key: null, pool: null, type: "number", ak: null, sk: "num", topic: "ord", hyp: false, try: 1, verdict: "bad", res: 0, raw: "48", hint: false, final: true }, tm(D1, 32), { dt: 8000 });
  e("p2", "diag_end", { diag: "dg6", topics: { ord: "gap" } }, tm(D1, 40));
  e("p2", "lesson_start", { c: "math", l: "ms0l3" }, tm(D1, 41));
  for (let i = 0; i < 3; i++) e("p2", "screen", { mode: "lesson", c: "math", l: "ms0l3", i, type: "info" }, tm(D1, 42 + i));
  e("p2", "lesson_end", { c: "math", l: "ms0l3", acc: 0.9 }, tm(D1, 50));
  e("p2", "close", { mode: "lesson", l: "ms0l3", i: 3, of: 3, end: true }, tm(D1, 51));
  ps("p2", tm(D1, 60), [pool("pms0:c01")]); ans("p2", pool("pms0:c01"), tm(D1, 61), { raw: "52" });
  ps("p2", tm(D2, 60), [pool("pms0:c02"), pool("pg6m3:a01")]); ans("p2", pool("pms0:c02"), tm(D2, 61), { raw: "62" });
  ans("p2", pool("pg6m3:a01"), tm(D2, 62), { v: "bad", raw: "7" });                              // pres g6m3l1 ∋ ms0l3 (gap у тесті) → S12
  // p3 — урок пари між днями → нечиста перевірка (sol 1), закриття undecided, поза точністю
  e("p3", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  ps("p3", tm(D1), [pair[0]]); ans("p3", pair[0], tm(D1, 1), { v: "bad", raw: "4/9" });
  e("p3", "screen", { mode: "lesson", c: "math", l: "g6m2l4", i: 0, type: "info" }, tm(D2));
  ps("p3", tm(D3), [pair[1]]); ans("p3", pair[1], tm(D3, 1), {});
  // p4 — gen: Dg з новим набором, потім той самий набір — не Dg
  e("p4", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  ps("p4", tm(D1), [GEN, pair[0]]); ans("p4", GEN, tm(D1, 1), { v: "ok", raw: "22", gv: { a: 2, b: 11 }, genAt: 0 });
  ans("p4", pair[0], tm(D1, 2), { v: "bad", raw: "16/20" });
  ps("p4", tm(D2), [GEN]); ans("p4", GEN, tm(D2, 1), { v: "ok", raw: "36", gv: { a: 3, b: 12 }, genAt: 5 });
  ans("p4", pair[1], tm(D2, 2), { v: "bad", raw: "16/20" });                                    // нова гіпотеза; та сама gen-вправа з тим самим набором — не Dg
  ps("p4", tm(D3), [GEN]); ans("p4", GEN, tm(D3, 1), { v: "ok", raw: "36", gv: { a: 3, b: 12 }, genAt: 5 });
  // p5 — журнал не з початку (немає boot з lessons: 0): перевірки — окремим зрізом
  ps("p5", tm(D1), [pair[0]]); ans("p5", pair[0], tm(D1, 1), { v: "bad", raw: "4/9" });
  ans("p5", pair[3], tm(D2, 1), {});
  // p6 — «пропущене поняття»: pexec > 0,6, з 3 наступних відкладених відповідей на пару 1 ✘ (поріг — ≥ 2) і 2 ✘
  e("p6", "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  ans("p6", pair[0], tm(D1, 1), { v: "bad", raw: "16/20" });
  ans("p6", pair[1], tm(D2, 1), { v: "bad", raw: "0" }); ans("p6", pair[2], tm(D2, 2), {}); ans("p6", pair[3], tm(D3, 1), {});
  ans("p6", pair[0], tm(D3, 2), { v: "bad", raw: "16/20" });                                    // P8 знову (бачена, < 3 днів — не перевірка)
  ans("p6", pair[5], tm("2026-11-05", 1), { v: "bad", raw: "0" }); ans("p6", pair[6], tm("2026-11-05", 2), { v: "bad", raw: "0" }); ans("p6", pair[2], tm("2026-11-06", 1), {});
  // p7 — помилка в уроці, урок пройдено знову наступного дня (≥ 65 %) → superseded; перший lesson_end (сесія з помилкою) — ні
  const g4s = scr("g4m2l4", 7), lit = (i, extra) => ({ mode: "lesson", c: "math", l: "g4m2l4", i, id: null, key: null, pool: null, type: g4s.type, ak: null, sk: g4s.sk, hyp: false, ...extra });
  e("p7", "boot", { grade: 4, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  e("p7", "lesson_start", { c: "math", l: "g4m2l4" }, tm(D1, 1)); e("p7", "screen", lit(7), tm(D1, 2));
  e("p7", "answer", lit(7, { try: 1, verdict: "bad", raw: "1135", hint: false, final: false }), tm(D1, 3), { dt: 9000 });
  e("p7", "answer", lit(7, { try: 2, verdict: "ok", raw: "1145", hint: true, final: true }), tm(D1, 4), { dt: 9000 });
  e("p7", "lesson_end", { c: "math", l: "g4m2l4", acc: 0.9 }, tm(D1, 10));
  e("p7", "lesson_start", { c: "math", l: "g4m2l4" }, tm(D2, 1)); e("p7", "lesson_end", { c: "math", l: "g4m2l4", acc: 0.8 }, tm(D2, 10));
  return { schema: 1, app: "slid", exportedAt: "2026-11-06T00:00:00Z", did: "dev1", events: evs.reverse() };
}
const sum = (R, pid) => R.events.filter(e => e.pid === pid).map(e => e.type === "hyp_open" ? ["open", e.d.hid, e.d.h.rule, e.d.h.lvl, e.d.h.sig.join(",")]
  : e.type === "hyp_probe" ? ["probe", e.d.hid, e.d.kind, e.d.key, e.d.sol, e.d.sol0, e.d.res, e.d.prb] : e.type === "hyp_close" ? ["close", e.d.hid, e.d.why, e.d.n] : [e.type]);
{
  const X = synth(), R1 = replay(X, E), R2 = replay(JSON.parse(JSON.stringify(X)), E);
  eq(JSON.stringify(R1.events), JSON.stringify(R2.events), "реплей детермінований");
  eq(R1.profiles.map(p => [p.pid, p.fresh]), [["p1", true], ["p2", true], ["p3", true], ["p4", true], ["p5", false], ["p6", true], ["p7", true]], "профілі за did+pid; p5 — не з початку журналу");
  eq(R1.notes.cvGuess, 3, "cvGuess для cv = null");
  const S = pid => sum(R1, pid), hp = pid => R1.events.find(e => e.pid === pid && e.type === "hyp_open").d.hid.split(".")[0];
  eq(new Set(["p1", "p2", "p3", "p4", "p6"].map(hp)).size, 5, "різні профілі — різні префікси hid");
  const P1 = S("p1"), x = P1.find(r => r[0] === "probe")[1].split(".")[0];
  eq(P1, [["open", `${x}.1`, "P3", 1, "S2:frac-add-naive,S10+"], ["probe", `${x}.1`, "A", pair[1].key, 0, 0, "bad", `${x}.2`], ["open", `${x}.3`, "P10", 3, "S14"],
    ["probe", `${x}.3`, "A", pair[2].key, 0, 0, "ok", `${x}.4`],
    ["probe", `${x}.1`, "D>", pair[3].key, 0, 2, "bad", `${x}.5`], ["close", `${x}.1`, "confirmed", 1],
    ["probe", `${x}.3`, "D≤", pair[3].key, 0, 1, "bad", `${x}.5`], ["close", `${x}.3`, "confirmed", 1],
    ["open", `${x}.6`, "P8", 2, "S6"], ["probe", `${x}.6`, "A", pair[4].key, 0, 0, "ok", `${x}.7`], ["close", `${x}.6`, "reset", 0]],
    "p1: lvl з practice_start (3), пара — спільний prb, A один раз, D>/D≤ за рівнем, бачена вчора — не перевірка, reset");
  const P2 = S("p2"), y = P2[0][1].split(".")[0];
  eq(P2, [["open", `${y}.1`, "P3", null, "S2:ord-ltr"], ["diag_end"], ["probe", `${y}.1`, "A", "pms0:c01", 0, 3, "ok", `${y}.2`],
    ["probe", `${y}.1`, "D≤", "pms0:c02", 0, 4, "ok", `${y}.3`], ["close", `${y}.1`, "undecided", 1],
    ["open", `${y}.4`, "P10", 1, "S14,S12"]],
    "p2: тест → урок (sol0 3, не superseded) → вправа того ж дня A → наступного дня чиста D≤ (sol0 4); preWeak з diag_end → S12");
  eq(S("p3"), [["open", S("p3")[0][1], "P3", 1, "S2:frac-add-naive"], ["probe", S("p3")[0][1], "D≤", pair[1].key, 1, 0, "ok", S("p3")[1][7]], ["close", S("p3")[0][1], "undecided", 0]],
    "p3: урок пари між днями → sol 1, undecided, n 0");
  const P4 = S("p4");
  eq(P4.filter(r => r[0] === "probe").map(r => [r[2], r[3], r[4]]), [["Dg", GEN.key, 0]], "p4: новий набір наступного дня — Dg; той самий набір через день — не перевірка");
  ok(R1.events.some(e => e.pid === "p4" && e.type === "hyp_probe" && e.d.kind === "Dg" && e.d.genAt === 5), "Dg: genAt з журналу");
  eq(S("p7").map(r => r[0] === "open" ? [r[0], r[2], r[4]] : r[0] === "close" ? [r[0], r[2]] : r[0]), [["open", "P5", "S4,S10+h"], ["close", "superseded"]], "p7: урок пройдено знову → superseded (у реплеї lesson_end)");
  eq(S("p5").map(r => r[0] === "probe" ? [r[2], r[4]] : r[0]), ["open", ["D>", 0], "close"], "p5: перевірка є");
  const M = metrics(R1, E);
  eq(M.hypotheses, 15, "гіпотез");
  // незалежний перерахунок точності з подій: лише чисті (sol 0), не A, лише профілі з початку журналу
  const fresh = new Set(R1.profiles.filter(p => p.fresh).map(p => p.pid)), byHid = new Map();
  for (const e of R1.events) if (e.type === "hyp_open") byHid.set(e.d.hid, { pe: e.d.h.pexec, pid: e.pid });
  const clean = R1.events.filter(e => e.type === "hyp_probe" && e.d.kind !== "A" && e.d.sol === 0);
  const grp = k => ["D≤", "F"].includes(k) ? "D≤+F" : k, want = {};
  for (const e of clean.filter(e => fresh.has(e.pid))) { const g = grp(e.d.kind), w = (want[g] ||= [0, 0]), hit = (byHid.get(e.d.hid).pe > .5) === (e.d.res !== "bad"); w[0]++; if (hit) w[1]++; }
  eq(Object.fromEntries(Object.entries(M.accuracy).filter(([k]) => !k.includes("|")).map(([k, c]) => [k, [c.n, c.ok]])), want, "точність = чисті перевірки профілів з початку (незалежний перерахунок)");
  eq(want, { "D>": [3, 1], "D≤+F": [3, 1], Dg: [1, 1], "D°": [2, 0] }, "точність: значення");
  ok(!clean.some(e => e.pid === "p3") && R1.events.some(e => e.pid === "p3" && e.type === "hyp_probe" && e.d.sol === 1), "p3 (sol 1) — поза точністю");
  eq(Object.fromEntries(Object.entries(M.accuracyNotFresh).map(([k, c]) => [k, c.n])), { "D>": 1, "D>|lvl1": 1, "D>|sol0=0": 1 }, "p5 — окремим зрізом, не в головній точності");
  // Brier — лише профілі з початку журналу (P3-R2-2, R05): n = чисті перевірки fresh-профілів з вердиктом, p5 не входить
  const brN = Object.values(M.brier).reduce((a, b) => a + b.n, 0), freshClean = clean.filter(e => fresh.has(e.pid) && ["ok", "form", "bad"].includes(e.d.res)).length;
  eq([brN, freshClean, clean.filter(e => e.pid === "p5").length], [freshClean, 9, 1], "Brier: n = чисті перевірки профілів з початку (9), перевірка p5 — ні");
  eq(Object.keys(M.accuracy).filter(k => k.includes("|lvl")).sort(), ["D>|lvl1", "Dg|lvl1", "D°|lvl2", "D°|lvl3", "D≤+F|lvl1", "D≤+F|lvl3"], "зрізи за рівнями (урок і тест рівня — рівень 1)");
  const resolved = [...R1.hyps.values()].filter(h => h.probes.some(p => ["D≤", "D>", "F", "P", "Dg"].includes(p.d.kind) && p.d.gap.days <= 7)).length;
  eq([M.resolvable.hyps, resolved, M.resolvable.pairCount], [Math.round(1000 * resolved / 15) / 1000, 9, 8], "розв'язність (D≤/D>/F/P/Dg за 7 днів; A, D° — ні)");
  eq([M.missedConcept, M.falseAlarm], [{ n: 3, share: 0.333 }, { n: 3, share: 0 }], "пропущене поняття: 2 ✘ з 3 — так, 1 ✘ — ні");
  eq(Object.entries(M.closes).sort(), [["confirmed", 3], ["open", 2], ["reset", 1], ["superseded", 1], ["undecided", 8]], "закриття");
  eq(M.supersededByMode, { lesson: 1 }, "superseded за місцем помилки (P3-R2-1)");
  // той самий вхід → ті самі події трекера; стан зберігається й відновлюється
  const run = () => { const T = H.tracker({ seed: "det" }), ev = []; ev.push(...err(T, pair[0], { day: D1, raw: "4/9" }), ...T.onAnswer(A(pair[3], { day: D2, run: 2, verdict: "bad", raw: "4/9" }))); return [ev, T.state()]; };
  const [e1, st] = run(), [e2] = run(); eq(JSON.stringify(e1), JSON.stringify(e2), "трекер детермінований");
  const T2 = H.tracker({ seed: "det2" }); ok(T2.load(st), "load(state)"); eq(T2.open.map(h => h.hid), st.open.map(h => h.hid), "стан відновлено");
  // CLI: звіт у тимчасову теку
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hyp-")), f = path.join(dir, "log.json"); fs.writeFileSync(f, JSON.stringify(X));
  const { execFileSync } = await import("node:child_process");
  E.pool.delete(GEN.key);
  execFileSync(process.execPath, [path.join(ROOT, "tools/hyp-replay.mjs"), f, "--out", dir, "--date", "2026-11-06"], { encoding: "utf8", env: { ...process.env } });
  ok(fs.existsSync(path.join(dir, "2026-11-06.md")) && fs.existsSync(path.join(dir, "2026-11-06.json")), "звіт reports/hyp/<дата>.md + .json");
  const md = fs.readFileSync(path.join(dir, "2026-11-06.md"), "utf8"); ok(/cvGuess/.test(md) && /Неоднозначні/.test(md) && /не з початку журналу:\*\* 1/.test(md), "звіт: cvGuess, amb, профілі не з початку");
  fs.rmSync(dir, { recursive: true, force: true });
}
{ // Dg у трекері: свіжий набір, показаний набір, < 20 наборів
  const T = H.tracker({ seed: "dg" }), G = { ...GEN };
  T.onAnswer({ ...A(G, { day: D1 }), gv: { a: 2, b: 11 }, genN: 24, genAt: 0 });
  err(T, pair[0], { day: D1, raw: "16/20" });
  const g = (o, day) => of(T.onAnswer({ ...A(G, { day, unseen: false, run: 5 }), ...o }), "hyp_probe")[0]?.d;
  eq(g({ gv: { a: 2, b: 11 }, genN: 24 }, D2)?.kind ?? null, null, "Dg: набір уже показано (≤ 35 днів) — не Dg");
  const T3 = H.tracker({ seed: "dg3" }); err(T3, pair[0], { day: D1, raw: "16/20" });
  eq(of(T3.onAnswer({ ...A(G, { day: D2, unseen: false }), gv: { a: 4, b: 13 }, genN: 12 }), "hyp_probe")[0]?.d.kind ?? null, null, "Dg: < 20 наборів — не Dg");
  const T4 = H.tracker({ seed: "dg4" }); err(T4, pair[0], { day: D1, raw: "16/20" });
  const d4 = of(T4.onAnswer({ ...A(G, { day: D2, unseen: false }), gv: { a: 4, b: 13 }, genN: 24, genAt: 7 }), "hyp_probe")[0]?.d;
  eq(d4 && [d4.kind, d4.genAt, d4.sol], ["Dg", 7, 0], "Dg: новий набір, ≥ 20 наборів, інший день");
}

/* ---------- 10. --content-stats відтворює цифри документа (§0, §2.1, §2.3) ---------- */
{
  const st = contentStats(E), s0 = st.s0, s21 = st.s21, s23 = st.s23;
  // 2026-11-03: 1306/565/52/1288/915/30/16 → 1620/695/74/1599/1142/54/30 — пакет draft-уроків математики за Істером (D-043: 52 тематичні
  // уроки + boss g6m6, g9m8); пули й тести рівня тоді не змінились (curate-math-ister-gaps-matrix).
  // 2026-11-04, пакет D-043 (tests-hyp-snapshot-ister): переписані фінали, 19 нових/доповнених пулів math (+265 вправ, 49 пулів), матриця v7.
  // Попередні знімки: §0 екрани [1620,695,74,1599,1142,54,30]; пули [48,1348,{518,505,325},848,0,0,{1243,66,39},895]; пари [174,158,8,209,277];
  // §2.1 [676,346,151,0,518,151,158], [520,499,26,671,124,151,671], передумови [139,145,9,157,157]; §2.3 [515,518,0,515,156,158,151,5],
  // [503,0,165]; hyp.js [518,0,503,0,346], [518,518,{D> 475,F 43},157,158,{D≤ 144,F 13}]. Рушій (pickSession, hyp.js) не змінювався —
  // числа зміщені лише новим змістом; дві нові «аномалії» пояснено й закріплено перевірками нижче (docs/design/diag-hypothesis-math.md §2.3).
  // 2026-11-04, refine-math-diag-for-ister: рушій (pickSession, hyp.js, buildPlan) не змінювався. Зсуви — зміст інших задач: pg9m4–pg9m6 доповнено
  // (+55 вправ, 54af813, 1504bde), новий пул pg9m8 (draft, +86, 50-й пул); і одна цифра — від цієї задачі: теми тестів 174 → 184, з них +3 —
  // ms4l2, ms4l3, ms4l5 (dg6 geom.for + ms4, матриця v8; без цієї зміни — 181). Нове на рівні 2: sol0 3 (pg6m4:f03 + pg9m8:h02, h03) і D> 3 —
  // урок g9m8l8 має одну вправу рівня 1 (як g6m4l7, перевірка (б) нижче тримається). Попередні знімки: пули [49,1613,{619,606,388},1015,0,0,
  // {1463,97,53},1060]; пари [209,187,8,209,318]; §2.1 [812,413,182,0,619,182,193], [617,588,42,799,160,182,799], передумови [163,174,10,191,191];
  // §2.3 [607,619,0,607,188,193,181,7], [603,1,198]; hyp.js [613,0,603,1,413], [613,619,{D> 549,F 64},190,193,{D≤ 170,F 20}].
  // 2026-11-04, tests-hyp-snapshot-g11: рушій (pickSession, hyp.js) не змінювався. Зсуви — два нові verified-пули: pg11m2 (+16 вправ,
  // g11m2l1–l2) і pg11m6 (+32, g11m6l1–l4); копія дерева без цих двох файлів дає рівно попередні знімки. Нове: 5 помилок рівня 1
  // без жодної перевірки наступного дня (g11m6l3: c01–c03, g11m6l4: d01–d02) — уся пара (урок, sk) потрапляє в першу сесію,
  // інваріант (а) уточнено нижче. Попередні знімки: пули [50,1754,{671,661,422},1104,0,0,{1583,112,59},1130]; пари [227,200,8,209,318];
  // §2.1 [884,449,198,0,671,198,213], [673,635,51,871,176,198,871], передумови [181,184,22,209,209]; §2.3 [659,671,0,659,208,213,197,11],
  // [655,3,216]; hyp.js [665,0,655,3,449], [665,671,{D> 595,F 70},210,213,{D≤ 185,F 22,D> 3}].
  // 2026-11-05, fix-math-pool-g11m6-order: рушій (pickSession, hyp.js) не змінювався. Зміст: у pg11m6 переставлено c05 перед c04 і d05
  // перед d04 (id, lvl, sk, ключі — без змін), тож перша сесія g11m6l3/g11m6l4 більше не монотемна: 5 помилок рівня 1 (c01–c03, d01–d02)
  // і 3 рівня 2 (c04, d03, d04 — P3-1 рев'ю tests-hyp-snapshot-g11: через ту саму вичерпану пару вони теж не мали перевірки, звідси було
  // 213/219) отримали чисту перевірку наступного дня; none 5 → 0. Розбіжність sol0 скрипт/hyp.js (672/667 і 4/3) зникла: скрипт рахував
  // sol0 і для помилок без перевірки (5 ключів рівня 1 + d03), модуль — лише там, де перевірка є; тепер обидва 671 і 3. Пар в 1 сесії —
  // 222 → 220 (у l3, l4 перша сесія тепер має дві sk). Попередні знімки: §2.1 [908,462,201,0,689,201,219], [686,656,51,887,176,201,887];
  // §2.3 [672,689,0,672,211,219,200,11], [672,4,222]; hyp.js [678,0,667,3,462], [678,689,{D> 608,F 70},213,219,{D≤ 188,F 22,D> 3}]; none [0,5].
  eq([s0.gradedScreens, s0.byType.choice, s0.choiceHypPoll, s0.fbBad, s0.hint, s0.pre, s0.preLessons], [1624, 691, 74, 1604, 1152, 87, 39], "§0 екрани уроків");  // 691: верифікатор g6m3 замінив один lab на choice (2fcb431)
  eq([s0.pools, s0.poolItems, s0.lvl, s0.poolHint, s0.poolPre, s0.gen, s0.itemTypes, s0.answerNumber], [52, 1802, { 1: 689, 2: 679, 3: 434 }, 1135, 0, 0, { answer: 1629, choice: 113, multi: 60 }, 1161], "§0 пули");
  eq([s0.pairs, s0.pairs2a1, s0.diags, s0.diagItems, s0.pureTitle], [236, 206, 8, 209, 331], "§0 пари, тести, чисті вирази");
  eq([s21.errors, s21.A, s21.Dle, s21.byLvl[1].Dle, s21.byLvl[1].errors, s21.byLvl[2].Dle, s21.byLvl[2].errors], [908, 461, 204, 0, 689, 204, 219], "§2.1 A 461; D≤ 204/908, рівень 1 — 0/689");
  eq([s21.Dgt, s21.Dseen, s21.none, s21.anyUnseen, s21.F, s21.natDle, s21.natAny], [691, 653, 51, 895, 176, 204, 895], "§2.1 D>, D°, F, природні");
  eq([st.pre.viaRequires, st.pre.viaDiagTopicFor, st.pre.viaPreScreens, st.pre.any, st.pre.anyWithPrePool], [187, 184, 27, 215, 215], "§2.1 передумови 215/227");
  eq([s23[1].clean, s23[1].errors, s23[1].cleanDle, s23[1].cleanDgt, s23[2].clean, s23[2].errors, s23[2].cleanDle, s23[2].cleanDgt], [677, 689, 0, 677, 214, 219, 203, 11], "§2.3 чисті наступного дня 677/689 і 214/219");
  eq([s23[1].sol0, s23[2].sol0, st.pairSizes[4]], [671, 3, 220], "§2.3 sol0 ≥ 1 — 671/689 і 3/219; 220 уроків — одна пара");
  // та сама модель через app/hyp.js: D≤ для помилок рівня 1 — жодної (інваріант: усі вправи рівня 1 пари вже в першій сесії); sol0 — як у скрипті; A — 449 з lvl ≤
  const M = st.module;
  eq([M.byLvl[1].clean, M.byLvl[1].kinds["D≤"] || 0, M.byLvl[1].sol0ge1, M.byLvl[2].sol0ge1, M.A.le], [683, 0, 671, 3, 461], "модель через hyp.js");
  eq([M.byLvl[1].clean, M.byLvl[1].errors, M.byLvl[1].kinds, M.byLvl[2].clean, M.byLvl[2].errors, M.byLvl[2].kinds], [683, 689, { "D>": 613, F: 70 }, 216, 219, { "D≤": 191, F: 22, "D>": 3 }], "через hyp.js: 683/689 (D> 613, F 70), 216/219 (D≤ 191, F 22, D> 3)");
  // Звідки «нечисті» й sol0 рівня 2 (2026-11-04). Не прив'язуємо до id уроків — лише до будови пулу уроку:
  // (а) помилка рівня 1 без чистої перевірки — лише в уроках з 6 вправами (мінімум CONTENT_SCHEMA §10): після першої сесії (4 вправи) небачених
  //     лишається 2, і pickSession доповнює сесію наступного дня баченою вправою рівня 1 тієї ж пари; сортування за рівнем ставить її перед
  //     першою небаченою → sol 1 (g8m2l6, g8m2l7 — по 3 помилки). В уроках з 7–8 вправами такого бути не може.
  // (а′) помилка рівня 1 без жодної перевірки наступного дня — лише коли вся пара (урок, sk) помилки вміщується в першу сесію: перша
  //     сесія теми — 4 вправи найнижчих рівнів у порядку пулу (n 6 − 2 на повторення); якщо всі вправи цієї sk серед них, наступного дня
  //     небаченої вправи пари немає (так було в g11m6l3: func c01–c04 = уся перша сесія; g11m6l4: geom d01–d04 — до
  //     fix-math-pool-g11m6-order, 2026-11-05; тепер таких уроків 0). У 6-вправних уроках — sol 1, як (а).
  // (б) sol0 ≥ 1 на рівні 2 — лише в уроках, де рівня 1 менше 3: перша сесія бере дві вправи рівня 2 тієї самої sk (g6m4l7: рівня 1 лише f01, f02).
  const nIn = {}, n1In = {}; for (const p of E.math.pools) for (const it of p.items) { nIn[it.lesson] = (nIn[it.lesson] || 0) + 1; if ((it.lvl || 1) === 1) n1In[it.lesson] = (n1In[it.lesson] || 0) + 1; }
  const lessonOf = key => { const [pid, id] = key.split(":"); return E.math.pools.find(p => p.id === pid).items.find(i => i.id === id).lesson; };
  const byL = {}; for (const p of E.math.pools) p.items.forEach((it, i) => (byL[it.lesson] ||= []).push({ it, i, key: p.id + ":" + it.id }));
  const first = l => byL[l].slice().sort((a, b) => (a.it.lvl || 1) - (b.it.lvl || 1) || a.i - b.i).slice(0, 4);
  const exhausted = key => { const l = lessonOf(key), sk = E.pool.get(key).sk, f = new Set(first(l).map(x => x.key)); return byL[l].every(x => x.it.sk !== sk || f.has(x.key)); };
  eq(M.byLvl[1].notClean.filter(k => nIn[lessonOf(k)] > 6 && !exhausted(k)).map(lessonOf), [], "нечиста перевірка рівня 1 — лише в уроках з 6 вправами або коли пара вичерпана першою сесією");
  const nExh = Object.keys(byL).flatMap(l => first(l).filter(x => (x.it.lvl || 1) === 1).map(x => x.key)).filter(exhausted).length;
  eq([M.byLvl[1].none, nExh], [nExh, 0], "рівень 1 без перевірки (none) = помилки з вичерпаною першою сесією парою");
  eq(M.byLvl[2].sol0Keys.map(lessonOf).filter(l => (n1In[l] || 0) >= 3), [], "sol0 ≥ 1 на рівні 2 — лише в уроках з < 3 вправами рівня 1");
  eq([M.byLvl[1].notClean.length, M.byLvl[2].sol0Keys.length], [M.byLvl[1].errors - M.byLvl[1].clean, M.byLvl[2].sol0ge1], "notClean / sol0Keys узгоджені з лічильниками");
}

/* ---------- 11. Підключення (E2): index.html, sw.js, manifest; модуль без DOM і сховища ---------- */
{
  const idx = fs.readFileSync(path.join(ROOT, "index.html"), "utf8"), sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8"), man = JSON.parse(fs.readFileSync(path.join(ROOT, "content/manifest.json"), "utf8"));
  eq([idx.includes('<script src="app/hyp.js">'), sw.includes('"./app/hyp.js"'), man.includes("app/hyp.js")], [true, true, true], "app/hyp.js в index.html / sw.js / manifest (E2)");
  ok(man.indexOf("app/learn.js") < man.indexOf("app/hyp.js") && man.indexOf("app/hyp.js") < man.indexOf("app/app.js"), "порядок: learn.js → hyp.js → app.js");
  const { manifest } = await import("./build.mjs");
  const old = fs.mkdtempSync(path.join(os.tmpdir(), "hyp-old-")); fs.mkdirSync(path.join(old, "app")); fs.mkdirSync(path.join(old, "content"));
  fs.writeFileSync(path.join(old, "app/registry.js"), "");
  eq(manifest(old).filter(f => /hyp|evidence/.test(f)), [], "стара ревізія без app/hyp.js (diff-answers --content-old) — без нього в manifest");
  fs.writeFileSync(path.join(old, "app/hyp.js"), ""); ok(manifest(old).includes("app/hyp.js"), "файл є — у manifest");
  fs.rmSync(old, { recursive: true, force: true });
  ok(/SLID_HYP/.test(fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8")), "app.js викликає SLID_HYP (E2)");
  ok(!/document|localStorage|indexedDB/.test(fs.readFileSync(process.env.HYP_FILE || path.join(ROOT, "app/hyp.js"), "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "")), "hyp.js без DOM і сховища");
}

/* ---------- 12. Стан slid.hyp (E2, §3.3): pend і scr між завантаженнями, closed, злиття вкладок, persist ---------- */
{
  const resolve = a => E.pool.get(a.item.key) || null;
  // гіпотеза, що чекає другої спроби, переживає закриття вкладки (§9 п. 17): той самий hyp_open, що й без перезавантаження
  const T1 = H.tracker({ seed: "pd" }); T1.onScreen({ item: { mode: "practice", l: pair[0].lesson, i: 0 }, t: tm(D1), day: D1 });
  T1.onAnswer(A(pair[0], { day: D1, verdict: "bad", raw: "4/9", final: false }));
  const st = JSON.parse(JSON.stringify(T1.state()));
  ok(st.pend && st.pend.a && !("s" in st.pend.a) && st.pend.a.item.key === pair[0].key, "state.pend — без s (вправу знаходить app.js)");
  eq(st.scr, 1, "state.scr — лічильник екранів");
  const scrB = { item: { mode: "practice", l: pair[0].lesson, i: 1 }, t: tm(D1, 1), day: D1 };
  const want = of(T1.onScreen(scrB), "hyp_open")[0];
  const T2 = H.tracker({ seed: "pd2" }); ok(T2.load(st, resolve) && T2.pending, "load(state, resolve) → pend відновлено");
  const got = of(T2.onScreen(scrB), "hyp_open")[0];
  eq(got && { ...got.d, hid: null }, { ...want.d, hid: null }, "після перезавантаження — той самий hyp_open (без S10, at, h)");
  eq(T2.state().scr, 2, "scr продовжується після load");
  const T3 = H.tracker({ seed: "pd3" }); T3.load(st, () => null); ok(!T3.pending, "вправу не знайдено — pend відкинуто");
  // closed, drop, setPersist
  const Ta = H.tracker({ seed: "ta", persist: 1 }); const x = of(err(Ta, pair[0], { day: D1, raw: "4/9" }), "hyp_open")[0].d;
  eq(x.persist, 1, "persist: 1");
  const Tb = H.tracker({ seed: "tb" }); Tb.load(JSON.parse(JSON.stringify(Ta.state())));
  eq(of(Tb.onAnswer(A(pair[1], { day: D2, run: 2 })), "hyp_close").map(e => e.d.hid), [x.hid], "інша вкладка закрила X");
  const z = of(err(Tb, pair[4], { day: D2, min: 5, raw: "0", run: 2 }), "hyp_open")[0].d.hid;
  Ta.setPersist(0); const y = of(err(Ta, pair[2], { day: D1, min: 9, raw: "0", run: 3 }), "hyp_open")[0].d;
  eq(y.persist, 0, "setPersist(0) → наступні hyp_open з persist: 0");
  ok(Tb.state().closed.includes(x.hid), "state.closed — hid закритих");
  const m = H.mergeState(Ta.state(), Tb.state());
  eq(m.open.map(h => h.hid).sort(), [y.hid, z].sort(), "злиття: X закрито в іншій вкладці, Y (ця) і Z (інша) відкриті");
  ok(m.closed.includes(x.hid) && m.seed === undefined && m.cnt === Ta.state().cnt && m.pend === null, "closed — об'єднання; cnt, pend — цієї вкладки");
  eq(new Set(m.errs.map(e => `${e.pk}|${e.t}`)).size, m.errs.length, "errs без дублікатів"); eq(m.errs.length, 3, "errs: X, Y (ця) і Z (інша), спільна X — один раз");
  Ta.drop(m.closed); eq(Ta.open.map(h => h.hid), [y.hid], "drop(closed): X геть із пам'яті цієї вкладки без подій");
  eq(H.mergeState(Ta.state(), null), Ta.state(), "немає збереженого — стан цієї вкладки");
  const g1 = { v: 1, open: [], errs: [], closed: [], gens: { k: [{ gv: { a: 1 }, d: D1 }, { gv: { a: 2 }, d: D1 }] }, shown: { k: D1 }, passed: {} };
  const g2 = { v: 1, open: [], errs: [], closed: [], gens: { k: [{ gv: { a: 2 }, d: D2 }, { gv: { a: 3 }, d: D2 }] }, shown: { k: D2, j: D1 }, passed: {} };
  const gm = H.mergeState(g1, g2);
  eq([gm.gens.k.map(g => [g.gv.a, g.d]), gm.shown], [[[2, D2], [3, D2], [1, D1]], { k: D2, j: D1 }], "gens — об'єднання за gv (пізніший показ); shown — пізніший день");
  const many = { v: 1, open: Array.from({ length: 60 }, (_, i) => ({ hid: "o." + i, t0: i })), errs: [], closed: [], gens: {}, shown: {}, passed: {} };
  eq(H.mergeState({ ...many, open: [] }, many).open.map(h => h.hid), many.open.slice(10).map(h => h.hid), "злиття: ≤ 50 відкритих, найновіші");
}

/* ---------- 13. Реплей = застосунок (E2): boot → tick, done, weak за останнім тестом, gen-екземпляр ---------- */
{
  const evs = []; let seq = 0;
  const e = (type, d, t) => evs.push({ v: 1, eid: `q.${seq}`, seq: ++seq, type, t, tzo: 0, n: seq, ms: 0, sid: "q", did: "devq", pid: "pq", cv: "c", cvs: "sw", net: 1, synced: 0, d, ...(type === "answer" ? { dt: 9000 } : {}) });
  const ans = (s, t, o = {}) => e("answer", { mode: o.mode || "practice", c: "math", l: o.l || s.lesson, i: o.i ?? 0, key: o.mode ? null : s.key, type: s.type, sk: s.sk, hyp: false, try: 1, verdict: o.v || "ok", raw: o.raw ?? "1", hint: false, final: true, ...(o.gv ? { gv: o.gv, genAt: o.genAt } : {}) }, t);
  const ps = (t, ks) => e("practice_start", { prN: 1, items: ks.map(s => ({ key: s.key, l: s.lesson, review: false, lvl: s.lvl })) }, t);
  e("boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
  // урок пари пройдено з < 65 % (done, але не passed) → помилка в тренуванні → урок знову ≥ 65 % → superseded лише завдяки done
  e("lesson_start", { c: "math", l: "g6m2l4" }, tm(D1, 1)); e("lesson_end", { c: "math", l: "g6m2l4", acc: 0.5 }, tm(D1, 5));
  ps(tm(D1, 10), [pair[0]]); ans(pair[0], tm(D1, 11), { v: "bad", raw: "4/9" });
  e("lesson_start", { c: "math", l: "g6m2l4" }, tm(D1, 20)); e("lesson_end", { c: "math", l: "g6m2l4", acc: 0.9 }, tm(D1, 25));
  // gen: хибний запис −39 при наборі a = 3, b = 13 (genAt 5) — S3 → P6 лише на екземплярі (у шаблоні чисел немає)
  E.pool.set(GEN.key, GEN);
  ps(tm(D1, 30), [GEN]); ans(GEN, tm(D1, 31), { v: "bad", raw: "-39", gv: { a: 3, b: 13 }, genAt: 5 });
  // тест рівня двічі: gap у першому, ok у другому — weak за останнім тестом (як S.diag), S12 немає
  e("diag_end", { diag: "dg6", topics: { ord: "gap" } }, tm(D1, 40)); e("diag_end", { diag: "dg6", topics: { ord: "ok" } }, tm(D1, 41));
  ps(tm(D1, 50), [pool("pg6m3:a01")]); ans(pool("pg6m3:a01"), tm(D1, 51), { v: "bad", raw: "7" });
  // наступне завантаження через 8 днів: старт закриває старі гіпотези (expired) — у реплеї на boot, як у застосунку
  e("boot", { grade: 6, subj: "math", lessons: 1, diags: [], srs: 0 }, tm("2026-11-11"));
  const R = replay({ events: evs }, E), Sx = R.events.map(x => x.type === "hyp_open" ? ["open", x.d.h.rule, x.d.h.sig.join(",")] : x.type === "hyp_close" ? ["close", x.d.why] : [x.type]);
  E.pool.delete(GEN.key);
  eq(Sx, [["open", "P3", "S2:frac-add-naive"], ["close", "superseded"], ["open", "P6", "S3"], ["diag_end"], ["diag_end"], ["open", "P10", "S14"], ["close", "expired"], ["close", "expired"]],
    "реплей: done з lesson_end (< 65 %) → superseded; gen — екземпляр за genAt (P6); weak — останній тест (без S12); boot → expired");
  eq(R.events.filter(x => x.type === "hyp_close" && x.d.why === "expired").map(x => x.seq), [seq, seq], "expired — на події boot");
}

/* ---------- 13. E2-p3: «Ще не знаю» тесту рівня — лічильник у diag_end; persist у реплеї ---------- */
{
  const dA = (T, i, v, run = 1, day = D1) => T.onAnswer({ s: dg6.items[i], item: { mode: "diag", l: "dg6", i, key: null, type: dg6.items[i].type, sk: dg6.items[i].sk },
    raw: v === "skip" ? null : "48", verdict: v, try: 1, final: true, t: tm(day, i), day, run, ls: ["ms0l3"], pres: [] });
  const T = H.tracker({ seed: "t13" });
  eq([...dA(T, 0, "skip"), ...dA(T, 1, "skip")], [], "«Ще не знаю» в тесті рівня — без hyp_open (P9 не відкривається)");
  eq(T.open.length, 0, "«Ще не знаю»: відкритих гіпотез немає");
  eq(of(dA(T, 0, "bad"), "hyp_open").length, 1, "хибна відповідь у тесті — гіпотеза, як і раніше");
  const st = T.state(); eq(st.dskip, { dg6: 2 }, "лічильник — у стані slid.hyp (dskip)");
  const T2 = H.tracker({ seed: "t13b" }); T2.load(st); dA(T2, 2, "skip", 2);
  eq(T2.onDiagEnd({ diag: "dg6" }), { skip: 3, rv: "hyp-1" }, "лічильник пережив перезавантаження; onDiagEnd → { skip, rv }");
  eq(T2.onDiagEnd({ diag: "dg6" }), { skip: 0, rv: "hyp-1" }, "після diag_end лічильник обнулено");
  dA(T2, 3, "skip"); T2.onReset({ t: tm(D1, 50), day: D1 }); eq(T2.onDiagEnd({ diag: "dg6" }).skip, 0, "«Скинути прогрес» обнуляє лічильник");
  eq(H.mergeState({ ...T.state(), dskip: { dg6: 1 } }, { ...T.state(), dskip: { dg5: 4 } }).dskip, { dg6: 1 }, "злиття вкладок: dskip — лише свій");
  // практика: verdict skip немає, але й у разі появи — гіпотеза (лічильник лише для тесту рівня)
  const T3 = H.tracker({ seed: "t13c" });
  eq(of(T3.onAnswer(A(pair[0], { verdict: "skip", raw: null, try: 1, final: true, day: D1 })), "hyp_open").length, 1, "skip поза тестом рівня — гіпотеза P9");
}
{
  const evs = []; let seq = 0;
  const e = (sid, type, d, t) => evs.push({ v: 1, eid: `w.${seq}`, seq: ++seq, type, t, tzo: 0, n: seq, ms: 0, sid, did: "devw", pid: "pw", cv: "c", cvs: "sw", net: 1, synced: 0, d, ...(type === "answer" ? { dt: 9000 } : {}) });
  const ans = (sid, s, t, o = {}) => e(sid, "answer", { mode: o.mode || "practice", c: "math", l: o.l || s.lesson, i: o.i ?? 0, key: o.mode ? null : s.key, type: s.type, sk: s.sk, hyp: false, try: o.try || 1, verdict: o.v || "ok", raw: o.raw ?? "1", hint: false, final: o.final ?? true }, t);
  const ps = (sid, t, ks) => e(sid, "practice_start", { prN: 1, items: ks.map(s => ({ key: s.key, l: s.lesson, review: false, lvl: s.lvl })) }, t);
  const appOpen = (sid, t, persist) => e(sid, "hyp_open", { hid: "app." + seq, persist }, t);   // події трекера застосунку: реплей їх не читає
  const boot = (sid, t, hyp) => e(sid, "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0, ...(hyp ? { hyp } : {}) }, t);
  // тест рівня з «Ще не знаю» → diag_end із лічильником
  boot("a", tm(D1), { store: 1, open: null });
  e("a", "diag_start", { c: "math", diag: "dg6" }, tm(D1, 1));
  for (const i of [0, 1]) e("a", "answer", { mode: "diag", c: "math", l: "dg6", i, id: null, key: null, pool: null, type: dg6.items[i].type, ak: null, sk: dg6.items[i].sk, topic: dg6.items[i].topic, hyp: false, try: 1, verdict: "skip", res: -1, raw: null, hint: false, final: true }, tm(D1, 2 + i));
  e("a", "diag_end", { c: "math", diag: "dg6", topics: {}, hyp: { skip: 2, rv: "hyp-1" } }, tm(D1, 5));
  // сховище є (persist 1), потім застосунок самоочистив slid.hyp: hyp_lost між answer і hyp_open тієї самої спроби (save() перед трекером),
  // n — ця answer (трекер її ще не обробив) → persist 0 з неї (§9 п. 36: номер дає застосунок, реплей не вгадує місце)
  ps("a", tm(D1, 10), pair.slice(0, 3));
  ans("a", pair[0], tm(D1, 11), { v: "bad", raw: "4/9" }); appOpen("a", tm(D1, 11), 1);
  ans("a", pair[1], tm(D1, 12), { v: "bad", raw: "4/9" }); e("a", "hyp_lost", { why: "quota", n: seq }, tm(D1, 12)); appOpen("a", tm(D1, 12), 0);
  ans("a", pair[2], tm(D1, 13), { v: "bad", raw: "4/9", final: false });   // друга спроба не прийшла — pend
  // наступне завантаження: стану в застосунку немає (boot.hyp.open: null) — pend відкрито на виході (pagehide), гіпотез немає; перевірки немає
  const evB = seq + 1; boot("b", tm(D2), { store: 1, open: null });
  ps("b", tm(D2, 1), [pair[3]]); ans("b", pair[3], tm(D2, 2), {});
  const shape = R => R.events.map(x => x.type === "hyp_open" ? ["open", x.d.persist, x.seq] : x.type === "diag_end" ? ["diag_end", x.d.hyp] : [x.type, x.d.why || x.d.kind]);
  const R = replay({ events: evs }, E), P = shape(R);
  eq(P, [["diag_end", { skip: 2, rv: "hyp-1" }], ["open", 1, 7], ["hyp_probe", "A"], ["open", 0, 9], ["hyp_probe", "A"], ["open", 0, evB]],
    "реплей: «Ще не знаю» — лише diag_end.hyp; persist 0 з події, яку застосунок обробляв при hyp_lost; boot.hyp.open null — pend відкрито, стан порожній (перевірки немає)");
  eq(R.profiles[0].diagSkip, 2, "профіль: diagSkip");
  // реплей не читає persist з hyp_open застосунку (рев'ю E2-p3, P3-2): без hyp_lost — persist 1, хоч застосунок і написав 0
  const noLost = evs.filter(x => x.type !== "hyp_lost");
  eq(shape(replay({ events: noLost }, E)).filter(x => x[0] === "open").map(x => x[1]), [1, 1, 1], "без hyp_lost — persist 1 (hyp_open застосунку реплей не копіює)");
  // стан є (boot.hyp.open — число відкритих, без pend): стан переживає boot, перевірка наступного дня є; boot.hyp.open ≠ відкритих у реплеї — notes.bootDiff
  const keep = noLost.map(x => x.sid === "b" && x.type === "boot" ? { ...x, d: { ...x.d, hyp: { store: 1, open: 2 } } } : x), R2 = replay({ events: keep }, E);
  ok(R2.events.some(x => x.type === "hyp_probe" && x.sid !== "a" && x.seq > evB) && R2.events.filter(x => x.type === "hyp_open").every(x => x.d.persist === 1), "сховище є — persist 1 і стан між завантаженнями");
  eq(R2.notes.bootDiff, 0, "boot.hyp.open = відкритих у реплеї (2; pend не рахується) — bootDiff 0");
  eq(replay({ events: keep.map(x => x.type === "boot" && x.sid === "b" ? { ...x, d: { ...x.d, hyp: { store: 1, open: 1 } } } : x) }, E).notes.bootDiff, 1, "boot.hyp.open ≠ реплею — bootDiff 1");
  // без boot.hyp (старі журнали) — стан переживає boot, як і раніше
  ok(replay({ events: noLost.map(x => x.type === "boot" ? { ...x, d: { ...x.d, hyp: undefined } } : x) }, E).events.some(x => x.type === "hyp_probe" && x.seq > evB), "без boot.hyp — стан переживає boot");
  // localStorage недоступний (boot.hyp.store 0): persist 0 від boot, без жодного hyp_lost; hyp_off лише рахується
  const ns = noLost.map(x => x.type === "boot" ? { ...x, d: { ...x.d, hyp: { store: 0, open: null } } } : x), R3 = replay({ events: [...ns, { ...ns.at(-1), seq: 999, type: "hyp_off", d: { why: "budget" } }] }, E);
  eq(R3.events.filter(x => x.type === "hyp_open").map(x => x.d.persist), [0, 0, 0], "boot.hyp.store 0 — persist 0 з boot");
  eq(R3.notes.hypOff, 1, "hyp_off — notes.hypOff");
  // hyp_lost уже після hyp_open тієї події (сховище зникло пізніше в тому самому кроці: write() після трекера), n: null — persist 0 з самої
  // hyp_lost, тобто з наступної події
  const late = evs.flatMap(x => x.type === "hyp_lost" ? [] : x.type === "hyp_open" && x.d.persist === 1 ? [x, { ...x, seq: x.seq + 0.25, type: "hyp_lost", d: { why: "write", n: null } }] : [x]);
  eq(shape(replay({ events: late }, E)).filter(x => x[0] === "open").map(x => x[1]), [1, 0, 0], "hyp_lost (n: null) після hyp_open застосунку — persist 0 з наступної події");
  // між answer і hyp_lost — інші не-hyp події (srs / plan з observe() у save(), до hyp_lost): місце дає n, а не «остання подія перед hyp_lost»
  // (стара евристика брала б srs і рахувала answer з persist 1; рев'ю tools-diff-answers-p3, P3-3)
  const mid = evs.flatMap(x => x.type === "hyp_lost" ? [{ ...x, seq: x.seq - 0.5, n: x.n - 0.5, type: "srs", d: { n: 1, part: 1, parts: 1, ch: [] } }, x] : [x]);
  eq(shape(replay({ events: mid }, E)).filter(x => x[0] === "open").map(x => x[1]), [1, 0, 0], "srs між answer і hyp_lost — persist 0 з answer (n), як у застосунку");
  // n: null на тому самому місці (save() поза відповіддю) — persist 0 лише після hyp_lost: answer перед нею — з persist 1
  const nul = evs.map(x => x.type === "hyp_lost" ? { ...x, d: { why: "quota", n: null } } : x);
  eq(shape(replay({ events: nul }, E)).filter(x => x[0] === "open").map(x => x[1]), [1, 1, 0], "hyp_lost з n: null — persist 0 від самої події, не від попередньої");
  // n іншого завантаження (sid) не зачіпає: hyp_lost у «a» з n відповіді — у «b» persist 1 знову (boot.hyp.store 1)
  { const bo = replay({ events: evs.map(x => x.sid === "b" && x.type === "answer" ? { ...x, d: { ...x.d, verdict: "bad", raw: "4/9" } } : x) }, E).events.filter(x => x.type === "hyp_open" && x.seq >= evB);
    ok(bo.length === 2 && bo[0].d.persist === 0 && bo[1].d.persist === 1, "hyp_lost діє лише в межах свого sid: pend «a» на boot «b» — persist 0, нова гіпотеза «b» — 1", bo.map(x => [x.seq, x.d.persist])); }
}

/* ---------- 12. Skill Graph G3: старі й нові pres / preWeak у реплеї (docs/design/skill-graph-math.md §4.2) ----------
   Тінь: події й метрики реплею (hyp-1) — за старими pres, однакові з графом і без нього; поруч — тіньовий трекер з pres / preWeak за
   графом лише в лініях verified. dg6/frac-of shaky лише через №21 (num-by-frac) не робить слабким frac-mul (пара g6m2l5); HALF у
   pre-темі не послаблює вузол-передумову frac-read; BAD — послаблює; урок поза лінією (g6m3l1) — як зараз. */
{
  const evs = []; let seq = 0;
  const e = (pid, type, d, t, extra = {}) => evs.push({ v: 1, eid: `g.${seq}`, seq: ++seq, type, t, tzo: 0, n: seq, ms: 0, sid: "g", did: "dev3", pid, cv: "abc", cvs: null, net: 1, synced: 0, d, ...extra });
  const dans = (pid, i, v, res, t) => { const it = E.diags.get("dg6").items[i];
    e(pid, "answer", { mode: "diag", c: "math", l: "dg6", i, id: null, key: null, pool: null, type: it.type, ak: null, sk: it.sk, topic: it.topic, hyp: false, try: 1, verdict: v, res, raw: v === "skip" ? null : "x", hint: false, final: true }, t, { dt: 8000 }); };
  const pans = (pid, k, t, v = "bad") => { const s = pool(k);
    e(pid, "answer", { mode: "practice", c: "math", l: s.lesson, i: 0, id: s.id, key: s.key, pool: s.pool.id, type: s.type, ak: s.answerKind ?? null, sk: s.sk, pre: null, topic: null, rev: null, boss: false, hyp: false, try: 1, verdict: v, raw: "0", hint: false, final: true }, t, { dt: 9000 }); };
  const prof = (pid, diagAns, topics) => {
    e(pid, "boot", { grade: 6, subj: "math", lessons: 0, diags: [], srs: 0 }, tm(D1));
    e(pid, "diag_start", { c: "math", diag: "dg6", rev: 1 }, tm(D1, 1));
    const res = {}; diagAns.forEach(([i, v, r], k) => { dans(pid, i, v, r, tm(D1, 2 + k)); res[i] = r; });
    e(pid, "diag_end", { c: "math", diag: "dg6", rev: 1, res, topics }, tm(D1, 20));
    e(pid, "practice_start", { focus: null, prN: 1, items: [{ key: "pg6m2:e01", l: "g6m2l5", review: false, lvl: 1 }, { key: "pg6m3:a01", l: "g6m3l1", review: false, lvl: 1 }] }, tm(D2));
    pans(pid, "pg6m2:e01", tm(D2, 1)); pans(pid, "pg6m3:a01", tm(D2, 2)); };
  prof("q1", [[10, "ok", 1], [21, "skip", -1]], { "frac-of": "shaky" });     // gap лише через num-by-frac
  prof("q2", [[1, "half", 0.5], [13, "ok", 1]], { frac: "shaky" });          // HALF у темі frac (frac-read)
  prof("q3", [[1, "bad", 0], [13, "ok", 1]], { frac: "shaky" });            // BAD у темі frac
  const X = { schema: 1, app: "slid", did: "dev3", events: evs }, R = replay(X, E), G = R.graph;
  const R0 = replay(JSON.parse(JSON.stringify(X)), { ...E, graph: null });
  eq(JSON.stringify(R.events), JSON.stringify(R0.events), "G3: події реплею (hyp-1, старі pres) з графом і без нього однакові");
  eq(R0.graph.presDiff + R0.graph.preWeakDiff + R0.graph.inLine, 0, "G3: без графа — нові pres = старі");
  eq([G.answers, G.inLine, G.lines], [12, 9, ["frac"]], "G3: відповідей 12, у лінії frac — 9 (тест рівня dg6 у темах лінії, e01; a01 — поза)");
  const e01 = G.examples.filter(x => x.at.key === "pg6m2:e01");
  eq(e01.map(x => [x.line, x.u, x.pre.slice().sort(), x.presNew.slice().sort(), x.pres.includes("m3"), x.preWeak, x.preWeakNew]),
    [["frac", ["frac-mul"], ["frac-read", "frac-reduce"], ["g6m2l2", "m1"], true, true, false],
     ["frac", ["frac-mul"], ["frac-read", "frac-reduce"], ["g6m2l2", "m1"], true, true, false],
     ["frac", ["frac-mul"], ["frac-read", "frac-reduce"], ["g6m2l2", "m1"], true, true, true]],
    "G3: e01 (frac-mul): нові pres — уроки pre w 2 (m1, g6m2l2), не m3; preWeak: shaky через num-by-frac — ні; HALF — ні; BAD frac-read — так");
  eq(G.examples.some(x => x.at.key === "pg6m3:a01"), false, "G3: g6m3l1 поза лінією — pres / preWeak як зараз");
  eq([G.old.open, G.new.open, G.old.s12, G.new.s12], [G.old.open, G.old.open, G.old.s12, G.old.s12 - 2], "G3: тіньовий трекер — ті самі відкриття, S12 на 2 менше (q1, q2 e01)");
  eq(G.openDiff.map(x => [x.old.sig.includes("S12"), x.new && x.new.sig.includes("S12")]), [[true, false], [true, false]], "G3: openDiff — дві гіпотези e01 без S12");
  const R2 = replay(JSON.parse(JSON.stringify(X)), E);
  eq(JSON.stringify(R2.graph), JSON.stringify(G), "G3: порівняння детерміноване");
  // ---- G3-p3 (рев'ю engine-skg-g3 P3-3): тести на мутанти, що вижили
  // а) тіньовий трекер T2 дзеркалить УСІ виклики T0 (tick, onReset, onDiagEnd, flush, load, setPersist…), не лише onAnswer;
  //    без ліній — той самий вхід подія в подію; з графом — різниця лише в pres / preWeak onAnswer
  const spyEnv = E0 => { const inst = [], hyp = { ...E0.hyp, tracker: o => { const t = E0.hyp.tracker(o), calls = []; inst.push(calls);
      return new Proxy(t, { get: (x, m) => typeof x[m] !== "function" ? x[m] : (...a) => { calls.push([m, JSON.stringify(a)]); return x[m](...a); } }); } };
    return { E: { ...E0, hyp }, inst }; };
  const mirror = (X0, E0) => { const { E: Es, inst } = spyEnv(E0); replay(JSON.parse(JSON.stringify(X0)), Es);
    const norm = c => c.map(([m, a]) => m === "onAnswer" ? [m, JSON.stringify((({ pres, preWeak, ...r }) => r)(JSON.parse(a)[0]))] : [m, a]);
    const pairs = []; for (let i = 0; i < inst.length; i += 2) pairs.push([inst[i], inst[i + 1] || []]);
    return { same: pairs.every(([a, b]) => JSON.stringify(norm(a)) === JSON.stringify(norm(b))), exact: pairs.every(([a, b]) => JSON.stringify(a) === JSON.stringify(b)),
      methods: [...new Set(inst.flat().map(x => x[0]))].sort(), trackers: inst.length }; };
  const noLines = { ...E, graph: { ...E.graph, lines: [] } };
  const M1 = mirror(synth(), noLines), M2 = mirror(X, E), M3 = mirror(X, noLines);
  eq([M1.exact, M3.exact, M2.same, M2.exact, M1.trackers, M2.trackers], [true, true, true, false, 14, 6], "G3-p3: T2 = T0 виклик у виклик (без ліній — дослівно; з лінією frac — крім pres / preWeak)");
  eq(["tick", "onReset", "flush", "onScreen", "onLessonEnd", "onAnswer", "setPersist"].filter(m => !M1.methods.includes(m)).concat(["onDiagEnd", "tick", "flush"].filter(m => !M2.methods.includes(m))), [],
    `G3-p3: дзеркалення покриває tick, onReset, onDiagEnd, flush (synth: ${M1.methods}; G3: ${M2.methods})`);
  // б) лінія завдання тесту — за темою «тест/тема», не за уроками теми: тема dg6/frac-of поза лінією (уроки m3 — у ній) → її 2 відповіді поза лінією
  const nFracOf = X.events.filter(x => x.type === "answer" && x.d.mode === "diag" && x.d.topic === "frac-of").length;
  const Rb = replay(JSON.parse(JSON.stringify(X)), { ...E, graph: { ...E.graph, lines: E.graph.lines.map(x => ({ ...x, topics: new Set([...x.topics].filter(t => t !== "dg6/frac-of")) })) } });
  eq([nFracOf, G.inLine - Rb.graph.inLine], [2, 2], "G3-p3: тема тесту поза лінією — її завдання поза лінією, хоч уроки теми в лінії");
  // в) реплей передає в graphPre live-вузли (без gone-вузла іншої sk), не nodes: e01 з u на gone → frac-mixed (frac ≠ ops)
  const Ec = hypEnv(ROOT, process.env.HYP_FILE || null), mc = Ec.math;
  mc.graph = { ...mc.graph, nodes: [...mc.graph.nodes, { id: "x-mul-old", sk: "ops", name: "x", teach: [], gone: "frac-mixed", st: "draft" }] };
  mc.pools.find(p => p.id === "pg6m2").items.find(it => it.id === "e01").u = "x-mul-old"; Ec.graph = Ec.learn.graphBind(mc);
  const ec = Ec.graph.items.get("pg6m2:e01"), Rc = replay(JSON.parse(JSON.stringify(X)), Ec).graph.examples.filter(x => x.at.key === "pg6m2:e01");
  eq([ec.nodes, ec.live, Rc.length, Rc.map(x => [x.u, x.presNew.slice().sort()])[0]], [["frac-mixed"], [], 3, [[], ["g6m2l2", "m1"]]],
    "G3-p3: u на gone іншої sk — вузол-ціль (frac-mixed → div-rem, m4a) не стає вузлом пари в реплеї");
  // г) rev результату — з diag_end.rev, інакше з diag_start.rev (журнал без diag_end.rev): BAD на завданні редакції 2 рахується лише з rev 2
  const Ee = hypEnv(ROOT, process.env.HYP_FILE || null); Ee.math.diags.find(d => d.id === "dg6").items[1].rev = 2; Ee.graph = Ee.learn.graphBind(Ee.math);
  const q3 = rv => ({ ...X, events: JSON.parse(JSON.stringify(X.events.filter(x => x.pid === "q3"))).map(x => x.type === "diag_start" ? { ...x, d: { ...x.d, rev: rv } }
    : x.type === "diag_end" ? { ...x, d: (({ rev, ...r }) => r)(x.d) } : x) });
  const pwE = rv => replay(q3(rv), Ee).graph.examples.filter(x => x.at.key === "pg6m2:e01").map(x => x.preWeakNew);
  eq([pwE(2), pwE(1)], [[true], [false]], "G3-p3: rev з diag_start (diag_end без rev): редакція 2 — BAD frac-read рахується, редакція 1 — ні");
}

/* ---------- engine-unit-hint: «Перевір одиницю» для тієї самої величини в іншій одиниці — не новий вхід трекера (rv hyp-1) ----------
   Плеєр тепер показує unitMsg на «2000 г» при «кг» і ключі 2 (learn.js unitEq «conv»), а трекер бачить такий запис так само,
   як до підказки: S13 (badHint тоді був null) → P9. Порівняння — з learn.js, де badHint і unitEq поводяться як до зміни. */
{
  const T = { "мм": ["l", 1], "см": ["l", 10], "дм": ["l", 100], "м": ["l", 1e3], "км": ["l", 1e6], "мм²": ["a", 1], "см²": ["a", 100], "дм²": ["a", 1e4], "м²": ["a", 1e6], "га": ["a", 1e10],
    "см³": ["v", 1e3], "мл": ["v", 1e3], "дм³": ["v", 1e6], "л": ["v", 1e6], "м³": ["v", 1e9], "г": ["m", 1], "кг": ["m", 1e3], "ц": ["m", 1e5], "т": ["m", 1e6],
    "с": ["t", 1], "хв": ["t", 60], "год": ["t", 3600], "діб": ["t", 86400], "коп": ["g", 1], "грн": ["g", 100], "м/с": ["s", 3.6], "км/год": ["s", 1], "м/хв": ["s", .06] };
  const fmt = x => String(+x.toFixed(6)).replace(".", ",");
  const probes = [];
  for (const [k, s] of E.pool) {
    if ((s.answerKind || "number") !== "number" || !T[s.unit]) continue;
    const a = LN.parseAns(String(s.answer).replace(".", ",")); if (!a) continue;
    const [d, f] = T[s.unit], base = a.n / a.d * f;
    for (const [u, [d2, f2]] of Object.entries(T)) { const v = base / f2; if (d2 === d && f2 !== f && +v.toFixed(3) > 0 && Math.abs(+v.toFixed(3) - v) < 1e-9 && v <= 1e7) probes.push([k, s, `${fmt(v)} ${u}`]); }
  }
  const sig = (s, raw) => { const a = H.assess(s, raw, {}); return JSON.stringify([a.rule, a.sig, a.prior, a.top, a.p, a.pexec]); };
  const now = probes.map(([, s, raw]) => sig(s, raw)), hints = probes.map(([, s, raw]) => LN.badHint(s, raw));
  const { badHint, unitEq } = LN;
  LN.badHint = (s, v, r) => unitEq(s, v) === "conv" ? null : badHint(s, v, r); LN.unitEq = () => null;   // learn.js і hyp.js до engine-unit-hint
  const before = probes.map(([, s, raw]) => sig(s, raw));
  LN.badHint = badHint; LN.unitEq = unitEq;
  ok(probes.length > 500, `unit-hint: проб рівної величини в іншій одиниці ${probes.length} > 500`);
  eq(probes.filter((p, i) => !/^Перевір одиницю/.test(hints[i] || "")).map(p => p[0] + " «" + p[2] + "»").slice(0, 5), [], "unit-hint: кожна проба — «Перевір одиницю»");
  eq(probes.filter((p, i) => now[i] !== before[i]).map(p => p[0] + " «" + p[2] + "»").slice(0, 5), [], "unit-hint: assess (правило, сигнали, апріорі) як до підказки — rv не змінюється");
  eq(H.RULES_VERSION, "hyp-1", "unit-hint: rv hyp-1");
  // задача на переведення: переписане дане умови (25 м = … см) — як і раніше S13 → P9, top unk
  chk("pg4m4:d01 переписане дане", pool("pg4m4:d01"), "25 м", "P9", ["S13"]);
  chk("pg4m4:b01 переписане дане", pool("pg4m4:b01"), "208 т", "P9", ["S13"]);
  // число без чужої одиниці правильне («2500 мм» при 2500 см) — підказка була й раніше: не S13, як і до зміни
  eq(H.assess(pool("pg4m4:d01"), "2500 мм", {}).sig.includes("S13"), false, "unit-hint: «2500 мм» (bare) — не S13, як і раніше");
}

console.log(fails ? `test-hyp: ${fails} з ${n} перевірок не пройшли` : `test-hyp: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
