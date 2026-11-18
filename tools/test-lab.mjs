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
// engine-ui-text-1117: форма слова після числа — {n|pl:1,2,5} («54 місць» → «54 місця»), лише слово, без числа
{ const PL = "{n|pl:клітинка,клітинки,клітинок}";
  for (const [v, w] of [[1, "клітинка"], [2, "клітинки"], [5, "клітинок"], [11, "клітинок"], [12, "клітинок"], [14, "клітинок"], [21, "клітинка"], [22, "клітинки"], [54, "клітинки"], [64, "клітинки"], [100, "клітинок"], [111, "клітинок"], [0, "клітинок"], [-3, "клітинки"], [2.5, "клітинки"], [0.5, "клітинки"], [5.5, "клітинки"], [NaN, "?"], [4.9999999999, "клітинок"]])
    eq(L.fill(PL, { n: v }), w, `pl n=${v}`);
  eq(L.fill("$ {a|0} * 6 = {a*6|0}$ {a*6|pl:місце, місця, місць}", { a: 9 }), "$ 9 * 6 = 54$ місця", "pl у show з пробілами після коми");
  eq(L.fill("Пиріг на {n|0} {n|pl:шматок,шматки,шматків}", { n: 4 }), "Пиріг на 4 шматки", "pl: 4 шматки");
  eq(L.fill("{n|pl:рівний відрізок,рівні відрізки,рівних відрізків}", { n: 1 }), "рівний відрізок", "pl: форми з кількох слів");
  eq(L.fill("{n|pl:один,два}", { n: 1 }), "?", "pl з двома формами — «?»");
  // shift:x — «(x − a)» з правильним знаком, при a = 0 — сама змінна (g9m2l2: «(y)²» → «y²»)
  eq(L.fill("${a|shift:x}^2 + {b|shift:y}^2$", { a: 2, b: 0 }), "$(x - 2)^2 + y^2$", "shift: a=2, b=0");
  eq(L.fill("{a|shift:x} {a|shift:\\alpha}", { a: -1.5 }), "(x + 1,5) (\\alpha + 1,5)", "shift: від'ємне й дробове");
  // validate знає формати: невідомий формат і pl без трьох форм — помилки; правильні — чисто
  const tv = show => L.validate({ kind: "numline", view: [0, 10], params: { n: { min: 1, max: 9, step: 1, start: 2 } }, points: { P: { x: "n" } }, show });
  eq(tv(["{n|0} {n|pl:клітинка,клітинки,клітинок}", "${n|shift:x}^2$", "{n|deg} {n|2}"]), [], "validate: pl, shift, deg, 2 — чисто");
  eq(tv("{n|pl:клітинка,клітинок}").length, 1, "validate: pl з двома формами — помилка");
  eq(tv("{n|pl}").length, 1, "validate: pl без форм — помилка");
  eq(tv("{n|plural:a,b,c}").length, 1, "validate: невідомий формат — помилка");
  eq(tv("{n|shift}").length, 1, "validate: shift без змінної — помилка");
  eq(tv("{n|deg:x}").length, 1, "validate: аргумент у формату без аргументу — помилка");
}
// engine-render-legibility-1117: підписи моделей у межах поля (оцінка рамки: ширина ≈ 0,6 кегля на знак, висота — кегль над базовою лінією);
// моделі — як у g4m2 «Додай 1365» (дуги стрибків), g4m4 «Коли виїжджати?», g8m1 (дві точки в одному місці, смужки «сума 5/a»), g11m2 (solid з осями)
{ const boxes = r => [...r.body.matchAll(/<text x="([-\d.]+)" y="([-\d.]+)" font-size="(\d+)" (?:text-anchor="(\w+)")?[^>]*>([\s\S]*?)<\/text>/g)].map(m => {
    const s = m[5].replace(/<[^>]+>/g, ""), fs = +m[3], w = [...s].length * fs * 0.6, x = +m[1], an = m[4] || "start";
    const x0 = an === "middle" ? x - w / 2 : an === "end" ? x - w : x; return { s, x0, x1: x0 + w, y0: +m[2] - fs * 0.8, y1: +m[2] + fs * 0.2 }; });
  const render = (spec, st = {}) => { const K = L.KINDS[spec.kind]; return K.render(spec, L.makeEnv(spec, { ...L.startState(spec), ...st }), K.view ? K.view(spec) : {}); };
  const inView = (what, spec, st) => { const r = render(spec, st), out = boxes(r).filter(b => b.x0 < -0.5 || b.x1 > r.w + 0.5 || b.y0 < -0.5 || b.y1 > r.h + 0.5);
    eq(out.map(b => b.s), [], `${what}: підписи в межах ${r.w}×${r.h}`); return boxes(r); };
  const P9 = { min: 0, max: 9, start: 0 };
  const jumps = { kind: "numline", view: [2700, 4800], tick: 100, labels: 500, params: { th: { min: 0, max: 1, start: 0 }, hu: P9, tn: P9, un: P9 }, let: { k: "1000*th+100*hu+10*tn+un" },
    jumps: [{ from: "2748", to: "2748+1000*th", label: "+{1000*th|0}" }, { from: "2748+1000*th", to: "2748+1000*th+100*hu", label: "+{100*hu|0}" }],
    points: { M: { x: "2748", label: "2748" }, N: { x: "2748+k", label: "{2748+k|0}" }, E: { x: "4800", label: "кінець шляху" } } };
  const b1 = inView("numline: дуга +1000", jumps, { th: 1, hu: 3, tn: 6, un: 5 });
  eq(["+1000", "+300", "2748", "4113"].every(s => b1.some(b => b.s === s)), true, "numline: підписи дуг і старту є");
  // рев'ю engine-render-legibility-1117, P1-1: нерозв'язані стани g4m2 «Додай 1365» — підпис старту «2748» і підпис N не налазять один на одного
  const g4 = { ...jumps, jumps: [...jumps.jumps, { from: "2748+1000*th+100*hu", to: "2748+1000*th+100*hu+10*tn" }, { from: "2748+1000*th+100*hu+10*tn", to: "2748+k" }],
    points: { M: { x: "2748", color: "muted", label: "2748" }, N: { x: "2748+k", label: "{2748+k|0}" } } };
  const hit = (p, q) => p.x0 < q.x1 && q.x0 < p.x1 && p.y0 < q.y1 && q.y0 < p.y1;
  for (const st of [{ un: 5 }, { hu: 1 }, { tn: 6, un: 5 }, { hu: 1, un: 9 }, { th: 1, hu: 3, tn: 6, un: 5 }]) {
    const bx = inView(`numline g4m2 ${JSON.stringify(st)}`, g4, st), k = (st.th || 0) * 1000 + (st.hu || 0) * 100 + (st.tn || 0) * 10 + (st.un || 0);
    const m = bx.find(b => b.s === "2748"), nn = bx.find(b => b.s === L.num(2748 + k, 0));
    eq(!!(m && nn) && !hit(m, nn), true, `numline g4m2 ${JSON.stringify(st)}: підписи старту й N обидва є й не накладаються`); }
  { const bx = inView("numline g4m2 старт", g4, {}); eq(bx.filter(b => b.s === "2748").length, 1, "numline g4m2 старт: M і N в одному числі — підпис 2748 один, без дубля"); }
  eq(render(g4).h - render({ ...g4, points: { N: g4.points.N } }).h, 14, "numline зі стрибками: другий ряд підписів (+14) лише за кількох підписаних точок");
  // P3-1: ширина TeX-підпису — за відмальованим текстом (тонкі пробіли навколо «=»), g8m1l5 «знам. −3» і «$x = 2$»
  { const den = { kind: "numline", view: [0, 10], tick: 1, labels: 1, params: { x: { min: 1, max: 9, step: 1, start: 2 } }, points: { P: { x: "x", label: "$x={x|0}$" }, D: { x: "x-5", label: "знам. {x-5|0}", color: "gold" } } };
    for (const st of [{}, { x: 1 }, { x: 3 }]) { const bx = inView(`numline g8m1l5 ${JSON.stringify(st)}`, den, st), [pp, dd] = [bx.find(b => b.s.startsWith("x")), bx.find(b => b.s.startsWith("знам"))];
      eq(!!(pp && dd) && !hit(pp, dd), true, `numline g8m1l5 ${JSON.stringify(st)}: «x = …» і «знам. …» не накладаються`); } }
  inView("numline: час (g4m4)", { kind: "numline", view: [5, 9], tick: 0.25, labels: 1, params: { t: { min: 5, max: 9, step: 1 / 6, start: 6 } },
    jumps: [{ from: "t", to: "8", label: "{(8-t)*60|0} хв" }], points: { S: { x: "t", label: "{t|time}", drag: true }, F: { x: "8", label: "8:00" } } });
  const two = { kind: "numline", view: [0, 5], tick: 0.5, labels: 1, params: { m: { min: -2, max: 3, start: 1 }, n: { min: -2, max: 3, start: -2 } },
    points: { A: { x: "2^m * 2^n", label: "добуток {2^m * 2^n|4}" }, B: { x: "2^(m+n)", label: "степінь {2^(m+n)|4}" } } };
  const b2 = inView("numline: дві точки в одному місці", two), [pa, pb] = ["добуток", "степінь"].map(w => b2.find(b => b.s.startsWith(w)));
  eq(!!(pa && pb) && !(pa.x0 < pb.x1 && pb.x0 < pa.x1 && pa.y0 < pb.y1 && pb.y0 < pa.y1), true, "numline: підписи двох точок в одному місці не накладаються");
  inView("fraction: «сума 5/a»", { kind: "fraction", params: { a: { min: 5, max: 12, step: 1, start: 6 } }, items: [{ shape: "bar", n: "a", k: 3, label: "$3/a$" }, { shape: "bar", n: "a", k: 5, label: "сума $5/a$" }] });
  const drone = { kind: "solid", shape: "box", params: { a: { min: 1, max: 5, start: 3 }, c: { min: 1, max: 5, start: 2 }, b: { min: 1, max: 5, start: 4 } }, a: "a", b: "b", c: "c", axes: true,
    marks: [{ v: 0, label: "O" }, { v: 6, label: "M" }, { v: 5, label: "M₁" }] };
  for (const st of [{}, { a: 5, b: 1, c: 5 }, { a: 1, b: 5, c: 1 }]) { const b4 = inView(`solid з осями ${JSON.stringify(st)}`, drone, st);
    eq(["x", "y", "z"].map(n => b4.filter(b => b.s === n).length), [1, 1, 1], "solid: підписи осей x, y, z"); }
  eq(L.validate({ ...drone, axes: ["x", "y"] }).length, 1, "validate: solid.axes — три назви");
  eq(L.validate({ ...drone, axes: ["x", "y", "z"] }), [], "validate: solid.axes — масив назв");
  eq(L.validate({ kind: "solid", shape: "prism", n: 3, r: 1, h: 2, axes: true }).length, 1, "validate: solid.axes — лише box");
}

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
  const r = L.KINDS.column.render(sp, L.makeEnv(sp, L.startState(sp)), {}); eq(r.handles.length, 3, "column input: три клітинки для торкання");
  eq(r.handles.some(h => h.tap), false, "column input: дотик не крутить цифру +1 (engine-lab-column-digits-1117) — він ставить фокус у клітинку");
  eq(r.handles.every(h => Array.isArray(h.box) && h.box.length === 4 && h.box[2] >= 20 && h.box[3] >= 26), true, "column input: кожна клітинка має прямокутник для поля вводу"); }
// engine-lab-column-digits-1117: порядок вписування, готовність, розбір введеного
{ const sum = { kind: "column", op: "+", a: "5476", b: "2859", input: true }, hs = L.KINDS.column.render(sum, L.makeEnv(sum, L.startState(sum)), {}).handles;
  eq([L.digitNext(hs, "d0", 1), L.digitNext(hs, "d1", 1), L.digitNext(hs, "d3", 1), L.digitNext(hs, "d0", -1), L.digitNext(hs, "d2", -1)], ["d1", "d2", null, null, "d1"], "сума: вписуємо справа наліво (одиниці → тисячі), назад — до попередньої");
  const dv = { kind: "column", op: ":", a: "4572", b: "3", input: true }, hd = L.KINDS.column.render(dv, L.makeEnv(dv, L.startState(dv)), {}).handles;
  eq(hd.map(h => h.digit), ["d3", "d2", "d1", "d0"], "ділення кутом 4572 : 3: клітинки частки зліва направо");
  eq([L.digitNext(hd, "d3", 1), L.digitNext(hd, "d0", 1), L.digitNext(hd, "d2", -1)], ["d2", null, "d3"], "ділення: вписуємо зліва направо");
  eq(hd.every((h, i) => i === 0 || h.box[0] > hd[i - 1].box[0]), true, "ділення: клітинки йдуть зліва направо на рисунку");
  eq([L.digitsReady(dv, L.startState(dv)), L.digitsReady(dv, { d0: 4, d1: 2, d2: 5, d3: -1 }), L.digitsReady(dv, { d0: 4, d1: 2, d2: 5, d3: 1 })], [false, false, true], "ділення: готово лише без «?»");
  eq(L.check(dv, { d0: 4, d1: 2, d2: 5, d3: 1 }, "col==1524"), true, "ділення: 1524 зараховано");
  eq(L.digitsReady({ kind: "plane" }, {}), true, "інші моделі завжди готові до перевірки");
  eq([["7", -1], ["57", 5], ["75", 5], ["55", 5], ["", 5], ["a", -1], ["٣", -1]].map(([v, p]) => L.typedDigit(v, p)), [7, 7, 7, 5, -1, -1, -1], "розбір введеного в клітинку: нова цифра або «?»");
  eq([["\u200B7", -1], ["7\u200B", -1], ["\u200B", -1]].map(([v, p]) => L.typedDigit(v, p)), [7, 7, -1], "заповнювач порожньої клітинки не заважає цифрі"); }
// позика й знак множення читабельні: крапки — кола, а не гліф «·» 13 px
{ const sb = { kind: "column", op: "-", a: "403", b: "158" }, b = L.KINDS.column.render(sb, L.makeEnv(sb, {}), {}).body;
  eq((b.match(/<circle [^>]*class="col-borrow"/g) || []).length, 2, "403 − 158: дві позики (через нуль) — кружки над розрядами");
  const ml = { kind: "column", op: "*", a: "23", b: "14" }, m = L.KINDS.column.render(ml, L.makeEnv(ml, {}), {}).body;
  eq(/<circle [^>]*class="col-times"[^>]*r="(3\.[0-9]|[4-9])/.test(m), true, "23 · 14: знак множення — помітна крапка (коло r ≥ 3)"); }
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

// формули $…$ у підписах SVG (engine-math-render-tex-gaps): <text> не рендерить HTML, тож малюємо підмножину TeX
{ const txt = s => L.svgTex(s).replace(/<[^>]*>/g, ""), IT = 'style="font-style:italic;font-family:var(--mathf)"';
  eq(L.svgTex("$P$"), `<tspan ${IT}>P</tspan>`, "svgTex: точка курсивом, без $");
  eq(txt("$x=2$"), "x = 2", "svgTex: бінарне «=» з тонкими пробілами");
  eq(txt("$x_1$") + " " + txt("$a_5$") + " " + txt("$l_2$"), "x₁ a₅ l₂", "svgTex: цифрові індекси — Unicode");
  eq(txt("$(1;\\,-4)$"), "(1; −4)", "svgTex: \\, і унарний мінус (dg10)");
  eq(txt("$(0; 1)$"), "(0; 1)", "svgTex: пробіл після ; зберігається");
  eq(txt("$\\Delta x$"), "Δx", "svgTex: \\Delta і пробіл, що завершує команду");
  eq(txt("$M(-0{,}6;\\,0{,}8)$"), "M(−0,6; 0,8)", "svgTex: {,} — десяткова кома");
  eq(txt("$a^{n}$") + " " + txt("$x^2$") + " " + txt("$x^{-3}$"), "aⁿ x² x⁻³", "svgTex: степені — Unicode");
  eq(L.svgTex("$x_{AB}$").includes('dy="3"') && L.svgTex("$x_{AB}$").includes('font-size="9"'), true, "svgTex: індекс поза Unicode — tspan зі зсувом");
  eq(txt("$x_{AB} + 1$"), "xAB + 1", "svgTex: після зсунутого індексу текст повертається на базову лінію");
  eq(/dy="-3"/.test(L.svgTex("$x_{AB} + 1$")), true, "svgTex: зворотний зсув після індексу");
  eq(txt("$+d$") + " " + txt("$-x$"), "+d −x", "svgTex: унарні знаки без пробілів");
  eq(L.svgTex("$a<b$").includes("&lt;"), true, "svgTex: < екрановано для SVG");
  eq(txt("сума $5/a$ кг"), "сума 5/a кг", "svgTex: текст навколо формули не змінюється");
  eq(L.svgTex("A(0; 1)"), "A(0; 1)", "svgTex: рядок без $ — як є");
  eq(txt("$90^\\circ$"), "90°", "svgTex: градус");
  eq(L.svgTexIssues("$P$").length + L.svgTexIssues("$\\Delta x$").length + L.svgTexIssues("$(1;\\,-4)$").length, 0, "svgTexIssues: підмножина — без зауважень");
  eq(L.svgTexIssues("$\\sqrt{2}$").map(i => i.level), ["error"], "svgTexIssues: \\sqrt — помилка");
  eq(L.svgTexIssues("${a}^2").map(i => i.level), ["warn"], "svgTexIssues: непарний $ — попередження");
  eq(L.svgTexIssues("A\\,B").map(i => i.level), ["error"], "svgTexIssues: TeX поза $…$ — помилка");
  eq(L.fill("$x = 0{,}5$, {a|0}", { a: 3 }), "$x = 0,5$, 3", "fill: {,} — не шаблон");
  eq(L.validate({ kind: "plane", params: { a: { min: 0, max: 2, start: 1 } }, points: { P: { x: "a", y: "1", label: "$0{,}5$" } } }, {}), [], "validate: {,} у підписі не ламає шаблон");
  const sp = { kind: "plane", params: { a: { min: 0, max: 2, start: 1 } }, points: { P: { x: "a", y: "1", label: "$x_1={a|0}$" } }, segs: [{ a: "P", b: [0, 0], label: "$\\Delta y$" }], fns: [{ y: "x", label: "$l_1$" }] };
  const body = L.KINDS.plane.render(sp, L.makeEnv(sp, L.startState(sp)), {}).body, texts = [...body.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1].replace(/<[^>]*>/g, ""));
  eq(texts.filter(x => /[$\\]/.test(x)), [], "plane: у підписах SVG немає сирого $ чи \\");
  eq(["x₁ = 1", "Δy", "l₁"].every(x => texts.includes(x)), true, "plane: підписи точки, відрізка й графіка відрендерено");
  eq(L.svgLabels(sp).map(x => x[0]), ["fns.0.label", "segs.0.label", "points.P.label"], "svgLabels: шляхи підписів");
  // P3-1 (рев'ю engine-math-render-tex-gaps): зсув індексу без Unicode в кінці формули скасовує текст після неї
  const dySum = s => [...s.matchAll(/dy="(-?\d+(?:\.\d+)?)"/g)].reduce((a, m) => a + +m[1], 0);
  eq(dySum(L.svgTex("$a_n$(2; 3)")), 0, "svgTex: після $a_n$ текст повертається на базову лінію");
  eq(txt("$a_n$(2; 3)"), "an(2; 3)", "svgTex: текст після формули зі зсувом не губиться");
  eq(dySum(L.svgTex("$A$ і $B_k$ і $C$")), 0, "svgTex: зсув не переходить на наступні формули");
  eq(dySum(L.svgTex("$B_k$$C$")) === 0 && /dy="-3"[^>]*>[^<]*<\/tspan>$|dy="-3">C/.test(L.svgTex("$B_k$$C$").replace(/ style="[^"]*"/g, "")), true, "svgTex: зворотний зсув отримує наступна формула впритул");
  eq(dySum(L.svgTex("$x_{a_b}$ y")), 0, "svgTex: вкладений зсув (x_{a_b}) теж скасовано");
  eq(dySum(L.svgTex("$a_n$")), 3, "svgTex: формула в кінці підпису — зайвого tspan немає");
  { const sc = { kind: "plane", view: [-5, 5, -5, 5], points: { P: { x: "2", y: "3", label: "$a_n$", coords: true } } };
    const tx = [...L.KINDS.plane.render(sc, L.makeEnv(sc, L.startState(sc)), {}).body.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1]).find(x => x.includes("(2; 3)"));
    eq(!!tx && dySum(tx) === 0, true, "plane: координати після $a_n$ (points.coords) — на базовій лінії"); }
  // P3-2: xmlEsc — & у формулі екрановано (мутацію «тотожна функція» інакше не ловить жоден тест)
  eq(L.svgTex("$a & b$").includes("&amp;") && !/&(?!amp;|lt;|gt;)/.test(L.svgTex("$a & b$")), true, "svgTex: & у формулі екрановано для SVG");
  eq(L.svgTex("$\\foo&$").includes("&amp;"), true, "svgTex: & після непідтриманої команди екрановано");
}
// усі моделі контенту: жоден підпис SVG не показує сирий TeX, якщо validate про нього не попереджає (властивість, не лічильник)
{ const { loadContent } = await import("./lib.mjs"); const { subjects } = loadContent(); const specs = [];
  const walk = o => { if (!o || typeof o !== "object") return; if (Array.isArray(o)) return o.forEach(walk); if (o.lab && L.KINDS[o.lab.kind]) specs.push(o.lab); for (const v of Object.values(o)) if (v && typeof v === "object" && v !== o.lab) walk(v); };
  for (const c of subjects) { walk(c.sections); walk(c.diags || []); walk(c.pools || []); }
  let raw = 0, withTex = 0;
  for (const sp of specs) { if (L.svgLabels(sp).some(([, x]) => x.includes("$"))) withTex++;
    const known = L.svgLabels(sp).some(([, x]) => L.svgTexIssues(x).length);
    let body = ""; try { const K = L.KINDS[sp.kind]; body = K.render(sp, L.makeEnv(sp, L.startState(sp)), K.view ? K.view() : {}).body; } catch { continue; }
    const bad = [...body.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1].replace(/<[^>]*>/g, "")).filter(x => /\$|\\[A-Za-z,;]/.test(x));
    if (bad.length && !known) { raw++; if (raw <= 5) console.log(`  сирий TeX у SVG: ${bad.join(" | ")}`); } }
  eq(raw, 0, `контент: моделей із сирим TeX у підписах SVG (з ${specs.length}, з формулами в підписах — ${withTex})`);
  eq(specs.length > 0 && withTex > 0, true, "контент: перевірка не порожня"); }
// engine-player-a11y-followup: підписи осей поверх кривої (QA 9 кл., D-4), шкала діаграми не дрібніша за 11
{ const sp = { kind: "plane", view: [-3, 5, -3, 5], fns: [{ y: "-x^2 + 2*x + 3", color: "accent" }] }, b = L.KINDS.plane.render(sp, L.makeEnv(sp, {}), {}).body;
  const curve = b.indexOf('stroke-linecap="round" stroke-linejoin="round"'), tick = b.search(/<text[^>]*font-size="11"[^>]*>−1<\/text>/);
  eq(curve > 0 && tick > curve, true, "plane: підпис поділки «−1» малюється після (поверх) кривої");
  eq(/<text[^>]*>3<\/text>/.test(b.slice(curve)), true, "plane: підпис «3» теж поверх кривої");
  const c = { kind: "chart", bars: [{ label: "1", v: 3 }, { label: "2", v: 19 }] }, cb = L.KINDS.chart.render(c, L.makeEnv(c, {}), {}).body;
  const sizes = [...cb.matchAll(/font-size="(\d+)" text-anchor="end" fill="var\(--muted\)"/g)].map(m => +m[1]);
  eq(sizes.length > 0 && Math.min(...sizes) >= 11, true, `chart: шкала ≥ 11 (${sizes.join(",")})`); }
// клавіатура для ручок SVG (точки, кут прямокутника, цифри): handles несуть параметри, handleKey дає нові значення
{ const pl = { kind: "plane", points: { A: { at: [1, 2], drag: true } } }, ps = L.paramList(pl), st = L.startState(pl);
  const h = L.KINDS.plane.render(pl, L.makeEnv(pl, st), {}).handles[0];
  eq([h.kx, h.ky, h.name, h.value], ["Ax", "Ay", "Точка A", "(1; 2)"], "plane: ручка точки знає параметри й підпис");
  eq(L.handleKey(h, "ArrowRight", st, ps), { Ax: 2 }, "plane: → — x на крок"); eq(L.handleKey(h, "ArrowUp", st, ps), { Ay: 3 }, "plane: ↑ — y більше");
  eq(L.handleKey(h, "Enter", st, ps), null, "plane: Enter моделі не змінює");
  const only = { kind: "plane", params: { u: { min: -5, max: 5, start: 0 }, v: { min: -5, max: 5, start: 1 } }, points: { B: { x: "u", y: "v", drag: "u" } } }, hb = L.KINDS.plane.render(only, L.makeEnv(only, L.startState(only)), {}).handles[0];
  eq([hb.kx, hb.ky], ["u", null], "plane: drag лише по u — y стрілками не змінюється");
  const tg = L.handleTargets([h], st, ps, false); eq(/tabindex="0"/.test(tg) && /role="slider"/.test(tg) && /aria-valuetext="\(1; 2\)"/.test(tg) && /pointer-events="none"/.test(tg), true, "plane: ціль фокуса для Tab і читача екрана");
  eq(/tabindex="-1"/.test(L.handleTargets([h], st, ps, true)), true, "заблокована модель: ручки поза Tab");
  const rc = { kind: "rect", params: { a: { min: 1, max: 10, start: 3 }, b: { min: 1, max: 6, start: 2 } } }, hr = L.KINDS.rect.render(rc, L.makeEnv(rc, L.startState(rc)), {}).handles[0];
  eq(L.handleKey(hr, "ArrowDown", L.startState(rc), L.paramList(rc)), { b: 3 }, "rect: ↓ тягне кут униз — b більше");
  const nl = { kind: "numline", view: [0, 10], params: { t: { min: 0, max: 10, step: 0.5, start: 2, hide: true } }, points: { P: { x: "t", drag: true } } }, hn = L.KINDS.numline.render(nl, L.makeEnv(nl, L.startState(nl)), {}).handles[0];
  eq([L.handleKey(hn, "ArrowLeft", { t: 2 }, L.paramList(nl)), L.handleKey(hn, "ArrowUp", { t: 2 }, L.paramList(nl))], [{ t: 1.5 }, { t: 2.5 }], "numline: ← і ↑ на крок 0,5");
  const col = { kind: "column", op: "+", a: "478", b: "256", input: true }, cs = L.startState(col), hc = L.KINDS.column.render(col, L.makeEnv(col, cs), {}).handles;
  eq([hc[0].digit, hc[0].name, hc[0].value], ["d0", "Цифра відповіді, розряд одиниць", "не вписано"], "column: цифра одиниць — перша в Tab і з назвою розряду");
  eq([L.handleKey(hc[1], "7", cs, L.paramList(col)), L.handleKey(hc[0], "ArrowDown", { ...cs, d0: 0 }, L.paramList(col)), L.handleKey(hc[0], "Backspace", cs, L.paramList(col))], [{ d1: 7 }, { d0: 9 }, { d0: -1 }], "column: цифра, ↓ по колу, Backspace — «?»");
  eq(/role="spinbutton"/.test(L.handleTargets(hc, cs, L.paramList(col), false)), true, "column: цифра — spinbutton");
  const dv = { kind: "column", op: ":", a: "84", b: "6", input: true }, hd = L.KINDS.column.render(dv, L.makeEnv(dv, L.startState(dv)), {}).handles;
  eq(hd.map(x => x.name), ["Цифра частки, розряд десятків", "Цифра частки, розряд одиниць"], "ділення: цифри частки зліва направо з назвами розрядів"); }
// engine-player-a11y-p3 (рев'ю engine-player-a11y-followup P3-1…3)
// P3-1: «мертва» ручка — точка drag із координатами-виразами — не потрапляє в Tab; data-h живих ручок не зсувається; validate — dragIssues
{ const sp = { kind: "plane", view: [-1, 8, -1, 8], params: { t: { min: 0, max: 4, start: 1 } }, points: { D: { x: "2+t", y: "4", drag: true }, E: { at: [3, 3], drag: true } } };
  const st = L.startState(sp), ps = L.paramList(sp), hs = L.KINDS.plane.render(sp, L.makeEnv(sp, st), {}).handles;
  eq(hs.map(h => [h.name, L.liveHandle(h, ps)]), [["Точка D", false], ["Точка E", true]], "мертва ручка: D без параметрів, E жива");
  const tg = L.handleTargets(hs, st, ps, false);
  eq([...tg.matchAll(/data-h="(\d+)"/g)].map(m => m[1]), ["1"], "мертва ручка: у Tab лише E, і з тим самим номером data-h=1");
  eq(/Точка D/.test(tg), false, "мертва ручка: «Точка D, стрілки змінюють» не озвучується");
  eq(["ArrowRight", "ArrowUp", "Home", "End", "PageUp"].map(k => L.handleKey(hs[0], k, st, ps)), [null, null, null, null, null], "мертва ручка: жодна клавіша нічого не змінює");
  eq(L.liveHandle({ kx: "zz" }, ps), false, "ручка з kx, якого немає серед параметрів, — мертва");
  eq(L.liveHandle({ digit: "d0" }, []) && L.liveHandle({ tap: () => ({}) }, []), true, "цифра стовпчика — жива");
  eq(L.dragIssues(sp).length === 1 && /точка D/.test(L.dragIssues(sp)[0]) && /«2\+t», «4»/.test(L.dragIssues(sp)[0]), true, "dragIssues: D — попередження з виразами");
  const ok = (pts, kind = "plane", extra = {}) => L.dragIssues({ kind, view: kind === "numline" ? [0, 10] : [-5, 5, -5, 5], params: { t: { min: 0, max: 4, start: 1 } }, let: { k: "t+1" }, points: pts, ...extra }).length;
  eq([ok({ M: { x: "t", y: "2*t", drag: true } }), ok({ M: { x: "3", y: "t", drag: true } }), ok({ A: { at: [1, 1], drag: true } }), ok({ P: { x: "t", drag: true } }, "numline"), ok({ P: { x: "2+t" } })], [0, 0, 0, 0, 0],
    "dragIssues: рух вздовж однієї осі, at, числова пряма з параметром, точка без drag — без попереджень");
  eq([ok({ M: { x: "t", y: "1", drag: "u" } }), ok({ P: { x: "t+1", drag: true } }, "numline"), ok({ M: { x: "k", y: "1", drag: true } }), ok({ M: { x: "t", y: "1", drag: true } }, "rect")], [1, 1, 1, 0],
    "dragIssues: drag не по своєму параметру, вираз на прямій, ім'я з let — попередження; інші види — без");
  // роль SVG: група лише коли є жива ручка (у role="img" вкладені ручки не існують, а без них — це просто зображення)
  eq(L.handleTargets(L.KINDS.plane.render({ ...sp, points: { D: sp.points.D } }, L.makeEnv(sp, st), {}).handles, st, ps, false), "", "лише мертві ручки — жодної цілі фокуса"); }
// P3-2: aria-valuetext числової прямої — значення, а не літера чи «?» (g4m1l3, g4m1l4, g4m4l3)
{ const nv = (label, extra = {}) => { const sp = { kind: "numline", view: [0, 4000], params: { t: { min: 0, max: 4000, step: 50, start: 3000, hide: true } }, points: { A: { x: "t", drag: true, ...(label === undefined ? {} : { label }) } }, ...extra };
    return L.KINDS.numline.render(sp, L.makeEnv(sp, L.startState(sp)), {}).handles[0].value; };
  eq([nv("A"), nv("?"), nv(undefined), nv(false), nv("{t|0}"), nv("$x$")], ["A, 3000", "3000", "A, 3000", "3000", "3000", "x, 3000"], "numline: літера → «A, 3000», «?» і без підпису → число, числовий підпис — як є");
  eq(nv("?", { view: [15, 17], params: { t: { min: 15, max: 17, step: 0.25, start: 16.5, hide: true } }, fmt: "time" }), "16:30", "numline: «?» на шкалі часу → «16:30»");
  eq(nv("{t|time}", { view: [15, 17], params: { t: { min: 15, max: 17, step: 0.25, start: 16.5, hide: true } } }), "16:30", "numline: підпис-час лишається");
  // P3-6: цифра в незмінному підписі ($x_1$, «A1») — не значення: додаємо число; підпис, що збігається зі значенням, — як є
  eq([nv("$x_1$"), nv("A1"), nv("3000"), nv("5"), nv("t = {t|0}"), nv("{,}")], ["x₁, 3000", "A1, 3000", "3000", "5, 3000", "t = 3000", "3000"], "numline: $x_1$ / A1 → з числом, шаблон і рівний значенню підпис — як є");
  // P3-1 (рев'ю tools-lab-validate-p3c): у aria немає «_», «^», «{}» — індекси й степені Unicode або словами, як plainText у app.js
  // підпис проходить fill(), тож {12} у ньому — вставка; багатоцифровий індекс і x_{AB} перевіряємо на ariaTex напряму
  eq([nv("$x_1$"), nv("$x_A$"), nv("$x^2$"), nv("$x^a$"), nv("$x_0^2$"), nv("$-3000$", { view: [-4000, 0], params: { t: { min: -4000, max: 0, step: 50, start: -3000, hide: true } } })], ["x₁, 3000", "x A, 3000", "x², 3000", "x в степені a, 3000", "x₀², 3000", "−3000"], "numline: Unicode-індекси/степені в aria-valuetext");
  eq([L.ariaTex("$x_{12}$"), L.ariaTex("$x_{AB}$ і $y^{n+1}$"), L.ariaTex("$2{,}5$ км"), L.ariaTex("$a \\cdot b$"), L.ariaTex("$x_{a_b}$"), L.ariaTex("$t^{\\circ}$"), L.ariaTex("$x^{2k}$")],
    ["x₁₂", "x AB і yⁿ⁺¹", "2,5 км", "a · b", "x a b", "t°", "x в степені 2k"], "ariaTex: x₁₂, x AB, {,}, \\cdot, вкладений індекс, градус, степінь словами");
  // P3-2: шаблон, що вставляє не координату (індекс $x_{{k}}$, «P{n|0}»), — не значення: число додаємо; «{ t |0}» — значення
  { const ix = { params: { t: { min: 0, max: 4000, step: 50, start: 3000, hide: true }, k: { min: 1, max: 5, start: 2, hide: true }, n: { min: 1, max: 5, start: 4, hide: true } } };
    eq([nv("$x_{{k}}$", ix), nv("P{n|0}", ix), nv("{ t |0}", ix), nv("$x_{{k}}$ = {t|0}", ix)], ["x₂, 3000", "P4, 3000", "3000", "x₂ = 3000"], "numline: шаблон-індекс → з числом, шаблон координати — як є"); }
  eq(nv("P", { view: [0, 7], pi: true, params: { t: { min: 0, max: 2 * Math.PI, step: Math.PI / 2, start: Math.PI, hide: true } } }), "P, π", "numline: шкала π"); }
// P3-3: Home/End — межі, PageUp/PageDown — великий крок; rect (up: false) і залежні межі; цифри стовпчика їх не беруть
{ const pl = { kind: "plane", view: [-6, 6, -6, 6], points: { A: { at: [1, 2], drag: true } } }, ps = L.paramList(pl), st = L.startState(pl), h = L.KINDS.plane.render(pl, L.makeEnv(pl, st), {}).handles[0];
  eq(["Home", "End", "PageUp", "PageDown"].map(k => L.handleKey(h, k, st, ps)), [{ Ax: -6 }, { Ax: 6 }, { Ay: 4 }, { Ay: 0 }], "plane: Home/End — x до меж поля, PageUp/PageDown — y на великий крок (2)");
  const nl = { kind: "numline", view: [0, 10], params: { t: { min: 0, max: 10, step: 0.5, start: 2, hide: true } }, points: { P: { x: "t", drag: true } } }, hn = L.KINDS.numline.render(nl, L.makeEnv(nl, L.startState(nl)), {}).handles[0];
  eq(["Home", "End", "PageUp", "PageDown"].map(k => L.handleKey(hn, k, { t: 2 }, L.paramList(nl))), [{ t: 0 }, { t: 10 }, { t: 4 }, { t: 0 }], "numline: Home/End — межі, PageUp/PageDown — ±2 (п’ята частина шкали, кратна кроку)");
  const rc = { kind: "rect", params: { a: { min: 1, max: 10, start: 3 }, b: { min: 1, max: "a", start: 2 } } }, rs = L.startState(rc), hr = L.KINDS.rect.render(rc, L.makeEnv(rc, rs), {}).handles[0];
  eq(["Home", "End", "PageUp", "PageDown"].map(k => L.handleKey(hr, k, rs, L.paramList(rc))), [{ a: 1 }, { a: 10 }, { b: 0 }, { b: 4 }], "rect: Home/End — a, PageUp тягне кут угору — b менше (up: false)");
  const dep = { kind: "plane", view: [-5, 5, -5, 5], params: { n: { min: 1, max: 9, start: 4 }, k: { min: 0, max: "n", start: 1 } }, points: { K: { x: "k", y: "0", drag: true } } }, ds = L.startState(dep), hd = L.KINDS.plane.render(dep, L.makeEnv(dep, ds), {}).handles[0];
  eq(L.handleKey(hd, "End", ds, L.paramList(dep)), { k: 4 }, "End: межа-вираз (max: \"n\") — за поточним станом");
  const col = { kind: "column", op: "+", a: "478", b: "256", input: true }, cs = L.startState(col), hc = L.KINDS.column.render(col, L.makeEnv(col, cs), {}).handles[0];
  eq(["Home", "End", "PageUp", "PageDown"].map(k => L.handleKey(hc, k, cs, L.paramList(col))), [null, null, null, null], "column: цифра не реагує на Home/End/PageUp/PageDown"); }
// SVG: вкладені дужки в індексі (рев'ю engine-render-tex-p3 P3-4) — svgTexIssues позначає, x_{a_b} лишається чистим
eq([L.svgTexIssues("$x_{a_{bc}}$").map(i => i.level), L.svgTexIssues("$x^{2{,}5}$").map(i => i.level), L.svgTexIssues("$x_{a_b}$").length, L.svgTexIssues("$x_{AB} + y^{2}$").length, L.svgTexIssues("$x_{0{,}5}$").length > 0],
  [["error"], ["error"], 0, 0, true], "svgTexIssues: дужки всередині індексу/степеня — помилка, x_{a_b} і x_{AB} — чисто");
// P3-2 (рев'ю engine-player-a11y-p3): у підписі-шаблоні {…} — вставка, тож вкладеність перевіряємо після підстановки, як її намалює fill()
{ const tp = x => L.svgTexIssues(x, true).map(i => i.level);
  eq([tp("$x^{2{,}5}$"), tp("$a^{{n}}$"), tp("$x_{{k}0}$"), tp("$x_{a_b}$"), tp("$P_{{n}}$, {n|0}")], [[], [], [], [], []], "svgTexIssues tpl: $x^{2{,}5}$, $a^{{n}}$, $x_{{k}0}$ малюються — без помилки");
  eq([tp("$x_{a_{{n}}}$"), tp("$y^{1{,}5{n}}$ і $x_{a_{{n}}}$")], [["error"], ["error"]], "svgTexIssues tpl: три рівні дужок лишаються вкладеними після підстановки — помилка");
  const m = L.svgTexIssues("$x_{a_{{n}}}$", true)[0].msg;
  eq([m.includes("«$x_{a_{{n}}}$»"), m.includes("«$x_{a_{0}}$»"), /x_\{ab\}/.test(m), /вставка значення/.test(m)], [true, true, false, true], "svgTexIssues tpl: повідомлення — сирий підпис, рядок після підстановки, без поради x_{ab}");
  eq([L.svgTexIssues("$x^{2{,}5}$", false).length, L.svgTexIssues("$\\sqrt{n}$", true).length, L.svgTexIssues("${a}^2", true).map(i => i.level)], [1, 1, ["warn"]], "svgTexIssues: без tpl {,} у індексі — помилка; команди й непарний $ у шаблоні — як раніше");
  const html = L.fill("$x^{2{,}5}$ $a^{{n}}$ $x_{{k}0}$", { n: 3, k: 2 });
  eq(html, "$x^{2,5}$ $a^{3}$ $x_{20}$", "fill: підстановка, яку моделює tpl-перевірка"); }
// ---------- engine-math-ister-p3: креслення (п. 6 solid, п. 8 plane, п. 9 chart, п. 10 numline) ----------
{ const R = (sp, view) => { const K = L.KINDS[sp.kind]; return K.render(sp, L.makeEnv(sp, L.startState(sp)), view || (K.view ? K.view(sp) : {})); };
  // п. 6: видимі грані паралелепіпеда — за замовчуванням верх (y = b), а не низ: середня екранна y видимих граней вища за центр
  const faces = body => [...body.matchAll(/<polygon points="([^"]+)"/g)].map(m => m[1].split(" ").map(p => p.split(",").map(Number)));
  const cy = f => f.reduce((a, p) => a + p[1], 0) / f.length, box = { kind: "solid", shape: "box", a: "5", b: "2", c: "3" };
  const top = body => Math.min(...faces(body).map(cy));
  const d = R(box), up = R({ ...box, view: { yaw: -34, pitch: 24 } }), down = R({ ...box, view: { yaw: -34, pitch: -24 } });
  eq(faces(d.body).length, 3, "solid box: три видимі грані");
  eq(top(d.body) < 120 - 20, true, `solid box: за замовчуванням видно верхню грань (найвища грань ${Math.round(top(d.body))} < 100)`);
  eq(Math.max(...faces(down.body).map(cy)) > 120 + 20, true, "solid box: pitch < 0 — видно нижню грань");
  { const pa = faces(up.body).flat(2), pb = faces(d.body).flat(2); eq(pa.length === pb.length && pa.every((v, i) => Math.abs(v - pb[i]) < 2), true, "solid view: { yaw: −34°, pitch: 24° } ≈ ракурс за замовчуванням"); }
  // кожна грань box видима рівно з одного з двох протилежних ракурсів (обхід граней узгоджений — назовні)
  { const K = L.KINDS.solid, env = L.makeEnv(box, {}); const n1 = faces(K.render(box, env, { yaw: 0.3, pitch: 0.5 }).body).length, n2 = faces(K.render(box, env, { yaw: 0.3 + Math.PI, pitch: -0.5 }).body).length;
    eq(n1 + n2, 6, "solid box: протилежні ракурси разом бачать 6 граней"); }
  for (const shape of ["prism", "pyramid"]) eq(top(R({ kind: "solid", shape, n: "4", r: "1", h: "2" }).body) < 120, true, `solid ${shape}: ракурс згори як і раніше`);
  eq(R({ ...box, view: { yaw: 10, pitch: 200 } }).body, R({ ...box, view: { yaw: 10, pitch: 80 } }).body, "solid view: pitch обмежено ±80°");
  eq(L.validate({ ...box, view: { yaw: 10, pitch: 30 } }), [], "validate: solid view");
  eq(L.validate({ ...box, view: { yaw: 10, pitch: 95 } }).length, 1, "validate: solid view pitch > 80");
  eq(L.validate({ ...box, view: [1, 2] }).length, 1, "validate: solid view — не масив");
  eq(L.validate({ ...box, view: { yaw: "a" } }).length, 1, "validate: solid view yaw — число");
  eq(L.validate({ ...box, view: { roll: 3 } }).length, 1, "validate: solid view — лише yaw, pitch");
  // п. 8: labelDir і ticks
  const pl = (pt, segs = []) => ({ kind: "plane", view: [-5, 5, -5, 5], points: { A: { at: [0, 0], ...pt } }, segs });
  const lab = sp => { const m = R(sp).body.match(/<text x="([\d.]+)" y="([\d.]+)"([^>]*)>(?:<tspan[^>]*>)?A</); return m && [+m[1], +m[2], (m[3].match(/text-anchor="(\w+)"/) || [])[1] || "start"]; };
  eq(lab(pl({})), [169, 151, "start"], "plane: підпис точки за замовчуванням — праворуч угорі (як раніше)");
  eq(lab(pl({ labelDir: "ne" })), lab(pl({})), "plane labelDir ne = за замовчуванням");
  eq(lab(pl({ labelDir: "sw" })), [151, 179, "end"], "plane labelDir sw — ліворуч унизу");
  eq(lab(pl({ labelDir: "n" })), [160, 149, "middle"], "plane labelDir n — над точкою");
  eq(lab(pl({ labelDir: "w" })), [149, 165, "end"], "plane labelDir w — ліворуч");
  eq(R(pl({})).body, R(pl({ labelDir: "ne" })).body, "plane labelDir ne — той самий SVG, що без поля");
  eq(L.validate(pl({ labelDir: "up" })).length, 1, "validate: labelDir — лише сторони світу");
  eq(L.validate(pl({ labelDir: "se" })), [], "validate: labelDir se");
  const tk = n => { const sp = pl({}, [{ a: [-4, 0], b: [4, 0], ticks: n }]); return (R(sp).body.match(/stroke-width="1.8" stroke-linecap="round"/g) || []).length; };
  eq([tk(undefined), tk(1), tk(2), tk(3), tk(4), tk(0)], [0, 1, 2, 3, 0, 0], "plane segs ticks: 0–3 рисочки, поза межами — жодної");
  { const b = R(pl({}, [{ a: [-4, 0], b: [4, 0], ticks: 1 }])).body, m = b.match(/<line x1="([\d.]+)" y1="([\d.]+)" x2="([\d.]+)" y2="([\d.]+)" stroke="var\(--ink\)" stroke-width="1.8"/);
    eq(m && [+m[1], +m[3], Math.abs(m[2] - m[4])], [160, 160, 12], "plane ticks: рисочка посередині, поперек відрізка"); }
  eq(L.validate(pl({}, [{ a: [-4, 0], b: [4, 0], ticks: 4 }])).length, 1, "validate: ticks 4 — помилка");
  eq(L.validate(pl({}, [{ a: [-4, 0], b: [4, 0], ticks: 2 }])), [], "validate: ticks 2");
  // п. 9: chart horizontal / line; підпис середнього — у легенді над полем, не на лінії
  const bars = [{ label: "пн", v: "4" }, { label: "вт", v: "7" }, { label: "ср", v: "5" }];
  const ch = R({ kind: "chart", bars }), hz = R({ kind: "chart", bars, horizontal: true }), ln = R({ kind: "chart", bars, line: true }), mn = R({ kind: "chart", bars, mean: true });
  eq([(ch.body.match(/<rect/g) || []).length, (hz.body.match(/<rect/g) || []).length, (ln.body.match(/<rect/g) || []).length, (ln.body.match(/<polyline/g) || []).length, (ln.body.match(/<circle/g) || []).length], [3, 3, 0, 1, 3], "chart: стовпчики, смуги, лінія з точками");
  { const ws = [...hz.body.matchAll(/<rect x="([\d.]+)" y="[\d.]+" width="([\d.]+)" height="([\d.]+)"/g)].map(m => [+m[2], +m[3]]);
    eq(ws.every(([w, h]) => h < 20) && ws[1][0] > ws[2][0] && ws[2][0] > ws[0][0], true, "chart horizontal: довжина смуги — значення (7 > 5 > 4)"); }
  eq([hz.alt, ln.alt, ch.alt], ["Стовпчаста діаграма (горизонтальна)", "Лінійна діаграма", "Стовпчаста діаграма"], "chart: alt за видом");
  { const m = mn.body.match(/<text x="([\d.]+)" y="([\d.]+)"[^>]*>середнє 5,3</), vals = [...mn.body.matchAll(/<text x="[\d.]+" y="([\d.]+)"[^>]*font-weight="700"[^>]*>[47]</g)].map(x => +x[1]);
    eq(!!m && +m[2] < 18 && vals.every(y => y > +m[2] + 10), true, "chart mean: підпис «середнє» над полем, вище за підписи стовпчиків"); }
  eq(mn.h, ch.h + 18, "chart mean: поле вище на рядок легенди");
  for (const sp of [{ mean: true }, { mean: true, horizontal: true }, { mean: true, line: true }]) { const b = R({ kind: "chart", bars, ...sp }).body;
    eq(b.indexOf('stroke-dasharray="6 4"/>', 200) < b.search(/font-weight="700"[^>]*>7<\/text>/), true, `chart ${Object.keys(sp).join("+")}: підписи значень — після лінії середнього (поверх пунктиру)`); }
  eq(/середнє 5,3/.test(R({ kind: "chart", bars, mean: true, horizontal: true }).body) && /середнє 5,3/.test(R({ kind: "chart", bars, mean: true, line: true }).body), true, "chart mean: horizontal і line теж");
  eq(L.validate({ kind: "chart", bars, horizontal: true, line: true }).length, 1, "validate: horizontal і line разом — помилка");
  eq(L.validate({ kind: "chart", bars, line: "так" }).length, 1, "validate: line — boolean");
  eq(L.validate({ kind: "chart", bars, line: true }), [], "validate: chart line");
  for (const sp of [{ kind: "chart", bars: [] , horizontal: true }, { kind: "chart", bars: [], line: true }, { kind: "chart", bars: [{ label: "a", v: "0" }], line: true, mean: true }])
    eq(/NaN|undefined/.test(R(sp).body), false, `chart ${sp.horizontal ? "horizontal" : "line"}: порожні/нульові дані без NaN`);
  // п. 10: numline ray — лінія від view[0], без «хвостика»
  const nl = R({ kind: "numline", view: [0, 10] }), ray = R({ kind: "numline", view: [0, 10], ray: true });
  const x1 = b => +b.match(/<line x1="([\d.]+)" x2="316" y1="(\d+)" y2="\2" stroke="var\(--ink\)" stroke-width="2"\/>/)[1];
  eq([x1(nl.body), x1(ray.body)], [6, 16], "numline ray: лінія з точки 0 (x = 16), без ray — з хвостиком (x = 6)");
  { const iv = R({ kind: "numline", view: [0, 10], ray: true, intervals: [{ from: null, to: 3 }] }).body.match(/<rect x="([\d.]+)"/); eq(+iv[1], 16, "numline ray: проміжок до −∞ — від початку променя"); }
  eq(L.validate({ kind: "numline", view: [0, 10], ray: 1 }).length, 1, "validate: ray — boolean");
  eq(L.validate({ kind: "numline", view: [0, 10], ray: true }), [], "validate: numline ray");
}
// engine-lab-p3-1117 п. 1: pie legend "pct" — відсотки суммуються рівно в 100 (метод найбільшого залишку)
{ const pct = bars => { const sp = { kind: "chart", pie: true, legend: "pct", bars }, b = L.KINDS.chart.render(sp, L.makeEnv(sp, {}), {}).body;
    return [...b.matchAll(/(\d+)\u00A0%/g)].map(m => +m[1]); };
  const a = pct([8, 7, 7].map((v, i) => ({ label: "abc"[i], v }))); eq([a.reduce((x, y) => x + y, 0), a], [100, [36, 32, 32]], "pie pct: 8/7/7 → 100 %");
  const e = pct([1, 1, 4].map((v, i) => ({ label: "abc"[i], v }))); eq([e.reduce((x, y) => x + y, 0), e], [100, [17, 17, 66]], "pie pct: 1/1/4 → 100 %, не 101");
  const b = pct([1, 1, 1].map((v, i) => ({ label: "abc"[i], v }))); eq([b.reduce((x, y) => x + y, 0), b], [100, [34, 33, 33]], "pie pct: 1/1/1 → 34+33+33, не 99");
  const c = pct([{ label: "a", v: 1 }, { label: "b", v: 3 }]); eq(c, [25, 75], "pie pct: точні частки без змін");
  const d = pct([{ label: "a", v: 0 }, { label: "b", v: 0 }]); eq(d.every(x => x === 0), true, "pie pct: нульові дані без NaN"); }
// п. 2: умовний текст {умова|if:так;ні}
eq([L.fill("{t!=2|if:існує;не існує}", { t: 3 }), L.fill("{t!=2|if:існує;не існує}", { t: 2 }), L.fill("{t|if:так;ні}", { t: NaN }), L.fill("{0/0|if:так;ні}", {}), L.fill("[{n>1|if:зайве}]", { n: 0 })],
  ["існує", "не існує", "ні", "ні", "[]"], "fill if: умовний текст, NaN — гілка «ні», одна гілка");
eq(L.validate({ kind: "numline", view: [0, 10], points: { P: { x: 1 } }, show: ["{1|if:а;б}", "{1|if}"] }).length, 1, "validate: if без тексту — помилка, з текстом — чисто");
// п. 3: {вираз|eq[:d]} → «= 2» або «≈ 2,15»
eq([L.fill("{2|eq}", {}), L.fill("{x|eq}", { x: 2.15 }), L.fill("{x|eq}", { x: 2.1456 }), L.fill("{x|eq:3}", { x: 2.1456 }), L.fill("{x|eq:3}", { x: 2 }), L.fill("{x|eq:1}", { x: 1 / 3 }), L.fill("{x|eq}", { x: NaN })],
  ["= 2", "= 2,15", "≈ 2,15", "≈ 2,146", "= 2", "≈ 0,3", "не існує"], "fill eq: «=» для точного, «≈» для округленого");
eq(L.validate({ kind: "numline", view: [0, 10], points: { P: { x: 1 } }, show: ["{1|eq:3}", "{1|eq:ab}"] }).length, 1, "validate: eq:ab — помилка");
// п. 5: solid — відрізки між вершинами (діагоналі) і переріз площиною; точка — вершина або { e: [i, j], t } на ребрі
{ const R = sp => L.KINDS.solid.render(sp, L.makeEnv(sp, {}), { yaw: -0.6, pitch: 0.4 });
  const box = { kind: "solid", shape: "box", a: 3, b: 2, c: 4 }, pyr = { kind: "solid", shape: "pyramid", n: 4, r: 2, h: 3 };
  const lines = b => (b.match(/<line /g) || []).length, polys = b => (b.match(/<polygon /g) || []).length;
  const b0 = R(box).body, b1 = R({ ...box, segs: [{ a: 0, b: 6, color: "red", dash: true, label: "d" }] }).body, b2 = R({ ...pyr, cut: { pts: [{ e: [0, 4], t: 0.5 }, { e: [1, 4], t: 0.5 }, { e: [2, 4], t: 0.5 }, { e: [3, 4], t: 0.5 }] } }).body;
  eq([lines(b1) - lines(b0), /stroke-dasharray="6 4"/.test(b1), />d<\/text>/.test(b1)], [1, true, true], "solid segs: діагональ 0–6 — одна лінія, пунктир, підпис");
  eq(polys(b2) - polys(R(pyr).body), 1, "solid cut: переріз піраміди — один многокутник");
  eq(L.validate({ ...box, segs: [{ a: 0, b: 6 }] }), [], "validate: solid segs — чисто");
  eq([L.validate({ ...box, segs: [{ a: 0, b: 8 }] }).length, L.validate({ ...pyr, cut: { pts: [0, 1] } }).length, L.validate({ ...pyr, cut: { pts: [0, 1, 4] } }), L.validate({ ...pyr, cut: { pts: [0, 1, { e: [2, 9] }] } }).length], [1, 1, [], 1], "validate: solid segs/cut — індекси за формою, ≥ 3 точок"); }
eq(L.validate({ kind: "numline", view: [0, 10], params: { n: { min: 1, max: 9, step: 1, start: 2 } }, points: { P: { x: "n" } }, show: ["{n>1|if:зайве {n|0} шт;ні}"] }).length, 1, "validate: вкладена вставка у гілці if — помилка");
eq(L.validate({ kind: "numline", view: [0, 10], params: { n: { min: 1, max: 9, step: 1, start: 2 } }, points: { P: { x: "n" } }, show: ["{n>1|if:так;ні} {n|0}", "{,}"] }), [], "validate: if без вкладених вставок — чисто");
// engine-lab-p4-1118 п. 3: eq для NaN/±∞ — «не існує»; помилка виразу лишається «?»
eq([L.fill("{sqrt(x)|eq}", { x: -1 }), L.fill("{1/x|eq}", { x: 0 }), L.fill("{-1/x|eq:3}", { x: 0 }), L.fill("{x+|eq}", { x: 1 })], ["не існує", "не існує", "не існує", "?"], "fill eq: NaN і ∞ — «не існує», помилка виразу — «?»");
eq(L.fill("√{x|0} {sqrt(x)|eq}", { x: -4 }), "√−4 не існує", "fill eq: у реченні");
// п. 4: solid segs/cut при n-виразі — межа за діапазоном параметра
{ const mk = (min, cutPts) => ({ kind: "solid", shape: "pyramid", n: "k", r: 2, h: 3, params: { k: { min, max: 8, step: 1, start: 5 } }, cut: { pts: cutPts } });
  eq(L.validate(mk(3, [0, 1, 4])).length, 1, "validate: solid n-вираз — вершина 4 не існує при n = 3 (піраміда має лише 0…3)");
  eq(L.validate(mk(4, [0, 1, 4])), [], "validate: solid n-вираз — при n ≥ 4 вершина 4 є");
  eq(L.validate({ kind: "solid", shape: "prism", n: "k+1", r: 1, h: 2, params: { k: { min: 2, max: 6, step: 1, start: 3 } }, segs: [{ a: 0, b: 7 }] }).length, 1, "validate: solid prism n = k+1 ≥ 3 — вершина 7 не існує при n = 3 (0…5)"); }
// п. 6: осі solid — під ребрами тіла (ребро не перекривається тонкою лінією осі)
{ const sp = { kind: "solid", shape: "box", a: 3, b: 4, c: 2, axes: true }, body = L.KINDS.solid.render(sp, L.makeEnv(sp, {}), { yaw: 2.5, pitch: 0.5 }).body;
  const ia = body.indexOf('stroke="var(--muted)" stroke-width="1.4"/>'), ie = body.indexOf('stroke="var(--ink)"');
  eq([ia > 0, ie > 0, ia < ie], [true, true, true], "solid axes: осі малюються до ребер, тож ребра лежать поверх"); }
// п. 1: slider — повзунок-дубль для параметрів з hide (за замовчуванням вимкнено)
{ const nl = extra => ({ kind: "numline", view: [0, 10], params: { t: { min: 0, max: 10, start: 3, hide: true }, u: { min: 0, max: 10, start: 1, hide: true } }, points: { P: { x: "t", drag: true } }, ...extra });
  const hid = sp => L.paramList(sp).map(p => p.hide);
  eq([hid(nl({})), hid(nl({ slider: true })), hid(nl({ slider: "t" })), hid(nl({ slider: ["u"] }))], [[true, true], [false, false], [false, true], [true, false]], "slider: за замовчуванням hide, true/id/масив — повзунок");
  eq([L.validate(nl({ slider: true })), L.validate(nl({ slider: "t" }))], [[], []], "validate: slider — чисто");
  eq([L.validate(nl({ slider: "z" })).length, L.validate(nl({ slider: 1 })).length, L.validate({ ...nl({ slider: true }), params: { t: { min: 0, max: 10, start: 3 } } }).length], [1, 1, 1], "validate: slider — невідомий id, не рядок, немає hide-параметрів"); }
console.log(`${n - fails}/${n} тестів лабораторії пройдено`);
process.exit(fails ? 1 : 0);
