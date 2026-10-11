#!/usr/bin/env node
// Слід · модульні тести лабораторії (app/lab.js): парсер виразів, форматування чисел, шаблони, валідація моделей.
// Запуск: node tools/test-lab.mjs   (без залежностей; входить у npm run check)
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
import { ROOT } from "./build.mjs";
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "app/lab.js"), "utf8"), ctx, { filename: "app/lab.js" });
const L = ctx.SLID_LAB;
let fails = 0, n = 0;
const eq = (got, exp, what) => { n++; const ok = typeof exp === "number" && typeof got === "number" ? Math.abs(got - exp) < 1e-9 : JSON.stringify(got) === JSON.stringify(exp); if (!ok) { fails++; console.log(`ПОМИЛКА ${what}: отримано ${JSON.stringify(got)}, очікувалось ${JSON.stringify(exp)}`); } };

// вирази
const ex = (s, env = {}) => L.compile(s)(env);
[["2+3*4", 14], ["-2^2", -4], ["2^3^2", 512], ["2x", 6, { x: 3 }], ["3(x+1)", 12, { x: 3 }], ["(1+2)(3+4)", 21], ["2sin(pi/2)", 2],
 ["x^2-4x+3", 0, { x: 1 }], ["1/2==0.5", true], ["a>1 && b<2", true, { a: 2, b: 1 }], ["log(2,8)", 3], ["root(3,-8)", -2], ["C(5,2)", 10],
 ["dist(pt(0,0),pt(3,4))", 5], ["angle(pt(1,0),pt(0,0),pt(0,1))", 90], ["2*-3", -6], ["e*2+d", 7, { e: 3, d: 1 }], ["0.1+0.2==0.3", true]]
  .forEach(([s, v, env]) => eq(ex(s, env), v, `вираз «${s}»`));

// числа: кома, мінус, нулі в цілих не зникають
[[48950, 0, "48\u202F950"], [1000000, 0, "1\u202F000\u202F000"], [4870, 0, "4870"], [-12500.5, 2, "−12\u202F500,5"], [2100, 0, "2100"], [10, 0, "10"], [0, 0, "0"], [100, 2, "100"], [305040, 0, "305\u202F040"], [2.5, 2, "2,5"], [-1.5, 2, "−1,5"], [0.05, 2, "0,05"], [1000.1, 2, "1000,1"], [1.2345, 3, "1,235"]]
  .forEach(([v, d, s]) => eq(L.num(v, d), s, `num(${v}, ${d})`));

// шаблони
eq(L.fill("$y = {k; b|poly}$", { k: 0, b: 2 }), "$y = 2$", "poly k=0");
eq(L.fill("{1;-2;1|poly}", {}), "x^2 - 2x + 1", "poly квадрат");
eq(L.fill("{-1;0;3|poly}", {}), "-x^2 + 3", "poly від'ємний старший");
eq(L.fill("y = {k|c}x {b|s}", { k: -1, b: -2.5 }), "y = -x - 2,5", "c і s");
eq(L.fill("{a|0} {a*10}", { a: 21 }), "21 210", "|0 і нулі");
eq(L.fill("{t|time} {m|hm} {k|hm}", { t: 14.5, m: 135, k: 60 }), "14:30 2 год 15 хв 1 год", "time і hm");
eq(L.fill("{a|deg} {p|pi}", { a: 45.2, p: Math.PI * 1.5 }), "45° 3π/2", "deg і pi");

// валідація моделей
const line = { kind: "plane", params: { k: { min: -3, max: 3, step: 0.5, start: 0 }, b: { min: -4, max: 4, start: 0 } }, fns: [{ id: "f", y: "k*x+b" }] };
eq(L.validate(line, { type: "lab", goal: "f(2)==3", solution: { k: 1, b: 1 } }), [], "lab: правильний розв'язок");
eq(L.validate(line, { type: "lab", goal: "f(2)==0", solution: { k: 1 } }).length, 2, "lab: мета виконана на старті + розв'язок хибний");
eq(L.validate({ kind: "plane", fns: [{ y: "a*xx" }], params: { a: { min: 0, max: 2, start: 1 } } }, {}).length, 1, "невідома змінна");
const frac = { kind: "fraction", params: { n: { min: 1, max: 12, start: 4 }, k: { min: 0, max: "n", start: 0 } }, items: [{ n: "n", k: "k" }] };
eq(L.validate(frac, { type: "lab", goal: "k/n==0.25", solution: { n: 8, k: 2 } }), [], "динамічна межа: досяжно");
eq(L.validate(frac, { type: "lab", goal: "k/n==0.25", solution: { n: 2, k: 5 } }).some(e => e.includes("недосяжне")), true, "динамічна межа: недосяжно");
for (const kind of Object.keys(L.KINDS)) { const sp = { kind, params: { a: { min: 1, max: 5, start: 2 }, b: { min: 1, max: 5, start: 3 }, c: { min: 1, max: 5, start: 2 }, x: { min: 0, max: 5, start: 1 } } };
  if (kind === "plane") delete sp.params.x;
  try { const r = L.KINDS[kind].render(sp, L.makeEnv(sp, L.startState(sp)), L.KINDS[kind].view ? L.KINDS[kind].view() : {}); eq(/NaN/.test(r.body), false, `${kind}: без NaN у SVG`); } catch (e) { eq(e.message, "", `${kind}: малювання`); } }

// стовпчик: переноси й позики
{ const sp = { kind: "column", op: "+", a: "478", b: "256", params: { s: { min: 0, max: 4, start: 4 } }, step: "s" }, r = L.KINDS.column.render(sp, L.makeEnv(sp, { s: 4 }), {});
  const txt = [...r.body.matchAll(/>([0-9·]+)<\/text>/g)].map(m => m[1]).join(" ");
  eq(txt, "1 1 8 7 4 6 5 2 4 3 7", "column: 478 + 256 = 734, два переноси (розряди справа наліво)");
  const r1 = L.KINDS.column.render(sp, L.makeEnv(sp, { s: 1 }), {}); eq([...r1.body.matchAll(/>([0-9]+)<\/text>/g)].map(m => m[1]).join(" "), "1 8 7 4 6 5 2 4", "column: крок 1 — перенос у десятки вже видно"); }
{ const sp = { kind: "column", op: "-", a: "503", b: "178" }, r = L.KINDS.column.render(sp, L.makeEnv(sp, {}), {}); eq(/NaN/.test(r.body), false, "column: позика через нуль"); }
{ const sp = { kind: "column", op: "*", a: "23", b: "14", params: { s: { min: 0, max: 3, start: 1 } }, step: "s" }, r = L.KINDS.column.render(sp, L.makeEnv(sp, { s: 1 }), {}); eq(r.body.includes("stroke-dasharray=\"3 3\""), true, "column: множення на двоцифрове, частково приховано"); }
{ const sp = { kind: "column", op: "+", a: "478", b: "256", input: true };
  eq(L.paramList(sp).map(p => p.id).join(","), "d0,d1,d2", "column input: параметри цифр");
  eq(L.validate(sp, { type: "lab", goal: "col==734", solution: { d0: 4, d1: 3, d2: 7 } }), [], "column input: мета col==734");
  const r = L.KINDS.column.render(sp, L.makeEnv(sp, L.startState(sp)), {}); eq(r.handles.length, 3, "column input: три клітинки для торкання"); eq(r.handles[0].tap().d0, 0, "column input: «?» → 0"); }
{ const sp = { kind: "column", op: ":", a: "984", b: "8", params: { s: { min: 0, max: 3, start: 3 } }, step: "s" }, r = L.KINDS.column.render(sp, L.makeEnv(sp, { s: 3 }), {});
  eq(/NaN|undefined/.test(r.body), false, "ділення куточком: без NaN"); eq(r.body.includes(">2<") && r.body.includes(">3<"), true, "ділення: цифри частки 123");
  const si = { kind: "column", op: ":", a: "84", b: "6", input: true }; eq(L.validate(si, { type: "lab", goal: "col==14", solution: { d0: 4, d1: 1 } }), [], "ділення input: col==14");
  const sr = { kind: "column", op: ":", a: "17", b: "5" }; eq(L.KINDS.column.render(sr, L.makeEnv(sr, {}), {}).body.includes("остача"), true, "ділення з остачею"); }
{ const sp = { kind: "numline", view: [15, 17], tick: 0.5, labels: 1, fmt: "time" }; eq(L.KINDS.numline.render(sp, L.makeEnv(sp, {}), {}).body.includes(">16:00<"), true, "numline: підписи осі у форматі часу"); }
{ const sp = { kind: "column", op: ":", a: "936", b: "9" }, r = L.KINDS.column.render(sp, L.makeEnv(sp, {}), {}), txt = [...r.body.matchAll(/>([0-9−]+)<\/text>/g)].map(m => m[1]).join("");
  eq(txt, "9369104−936−360", "ділення 936 : 9 = 104: нульовий крок не малює «− 0»"); }
{ const sp = { kind: "plane", view: [0, 6, 0, 120], grid: [1, 20], h: 240, fns: [{ y: "15*x" }] }, r = L.KINDS.plane.render(sp, L.makeEnv(sp, {}), {}); eq((r.body.match(/stroke="var\(--line\)"/g) || []).length, 7 + 7, "plane: окремий крок сітки по осях"); }
{ const tx = (a, b, st) => { const sp = { kind: "column", op: ":", a: String(a), b: String(b), params: { s: { min: 0, max: 5, start: st } }, step: "s" }; const r = L.KINDS.column.render(sp, L.makeEnv(sp, { s: st }), {}); return [[...r.body.matchAll(/>([0-9−]+)<\/text>/g)].map(m => m[1]).join(""), r.h]; };
  eq(tx(601, 3, 3)[0], "6013200−61", "ділення 601 : 3 = 200 (ост. 1): без «− 0»"); eq(tx(984, 8, 1)[1], tx(984, 8, 3)[1], "ділення: висота не залежить від кроку"); }
console.log(`${n - fails}/${n} тестів лабораторії пройдено`);
process.exit(fails ? 1 : 0);
