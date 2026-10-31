#!/usr/bin/env node
// Слід · диференційна регресія перевірки відповідей: старий app/learn.js (з git) проти поточного на всіх вправах,
// які перевіряє SLID_LEARN.checkAns: пули, діагностики (fracin hideDen) й екрани answer у розділах 4–9 класів.
// Для кожної вправи — ключ і типові рівні/хибні записи. Кожна розбіжність вердикту чи підказки має належати
// дозволеній категорії (рішення 2026-10-31, engine-math-answer-kinds-new: п. 5–7 і P3 з рев'ю), інакше — «непояснена», rc 1.
// Класифікація незалежна від реалізації: стару версію перевіряють на «очищеному» записі й порівнюють з новою.
// Запуск: node tools/diff-answers.mjs [--old <git-rev>] [--grades 4-9] [--time] [--show N] [--list-cat "<категорія>"] (записи однієї категорії)
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { execFileSync } from "node:child_process";
import { loadContent, ROOT } from "./lib.mjs";

const args = process.argv.slice(2), opt = (k, d) => args.includes(k) ? args[args.indexOf(k) + 1] : d;
const OLD_REV = opt("--old", "1b3819d"), [G0, G1] = opt("--grades", "4-9").split("-").map(Number), SHOW = +opt("--show", 5);
const load = src => { const c = { console }; c.window = c; vm.createContext(c); vm.runInContext(src, c); return c.SLID_LEARN; };
const OLD = load(execFileSync("git", ["show", `${OLD_REV}:app/learn.js`], { cwd: ROOT, encoding: "utf8" }));
const NEW = load(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"));
const { subjects } = loadContent();

// ---------- вправи ----------
const items = [];
for (const c of subjects) {
  const grade = new Map(c.sections.map(s => [s.id, s.grade]));
  for (const p of c.pools || []) { const g = grade.get(p.section); if (g >= G0 && g <= G1) for (const it of p.items) if (it.type === "answer") items.push({ id: `${p.id}:${it.id}`, s: it }); }
  for (const d of c.diags || []) if (d.grade >= G0 && d.grade <= G1) d.items.forEach((it, i) => { if (it.type === "fracin" && it.hideDen) items.push({ id: `${d.id}#${i}`, s: { answer: it.answer + "/" + it.den, fractionOnly: true } }); });
  for (const sec of c.sections) if (sec.grade >= G0 && sec.grade <= G1) for (const l of sec.lessons || []) l.screens.forEach((s, i) => { if (s.type === "answer") items.push({ id: `${l.id}#${i}`, s }); });
}

// ---------- записи: ключ, рівні й хибні варіанти ----------
const stmt = s => ["title", "body", "q", "text"].map(k => typeof s[k] === "string" ? s[k] : "").join(" ");
const keyText = s => { const k = s.answerKind || "number", a = s.answer;
  if (Array.isArray(a)) return k === "ratio" ? a.join(" : ") : k === "coordinates2" || k === "coordinates3" ? "(" + a.join("; ") + ")" : k === "divrem" ? `${a[0]} ост. ${a[1]}` : a.join("; ");
  return typeof a === "number" ? String(a).replace(".", ",") : String(a); };
const FOREIGN = ["мм", "см", "м", "км", "г", "кг", "%", "°", "грн", "шт"];
// Значення раціонального числа як періодичного дробу, якщо знаменник має множники, крім 2 і 5: 1/3 → «0,(3)».
function periodic(n, d) {
  n = BigInt(n); d = BigInt(d); const neg = n < 0n; if (neg) n = -n;
  let q = d; for (const p of [2n, 5n]) while (q % p === 0n) q /= p; if (q === 1n) return null;
  const int = n / d; let r = n % d, digits = "", seen = new Map();
  while (r && !seen.has(r) && digits.length < 12) { seen.set(r, digits.length); r *= 10n; digits += String(r / d); r %= d; }
  if (!r || !seen.has(r)) return null;
  const at = seen.get(r); return `${neg ? "-" : ""}${int},${digits.slice(0, at)}(${digits.slice(at)})`;
}
function records(s) {
  const k = s.answerKind || "number", K = keyText(s), out = new Set([K, ` ${K} `, K.replace(/-/g, "−"), K.replace(/,/g, "."), "0", "1", "-1", ""]);
  const a = NEW.parseAns(K);
  if (a) { out.add(String(a.n / a.d + 1).replace(".", ",")); out.add(String(-a.n / a.d).replace(".", ",")); out.add(String(a.n / a.d * 10).replace(".", ","));
    const p = periodic(a.n, a.d); if (p) { out.add(p); out.add(p.replace(/^(-?)0/, "$1")); out.add(`x = ${p}`); } }
  if (k === "number") for (const pre of ["x = ", "b=", "k = ", "у = ", "AB = "]) { out.add(pre + K); if (a) out.add(pre + String(a.n / a.d + 1).replace(".", ",")); }
  // g10-issues п. 4: явний «+» перед числом; «+» перед від'ємним і подвійний знак — bad, як і раніше
  if (k === "number") for (const r of [`+${K}`, `x = +${K}`, `+ ${K}`, `++${K}`, `+-${K}`]) out.add(r);
  // g10-issues п. 2: префікс «x =» / «x₁ =» в list; чужа літера «y =», різні літери
  if (k === "list") { const ps = K.split(/[;\n]/.test(K) ? /[;\n]/ : /,/).map(x => x.trim());
    // кожна латинська літера з формул умови (функції, параметри, вектори…) і кілька чужих (рев'ю P1-1)
    const lets = new Set(["x", "y", "t", "х", "f", "k", "b"]); for (const m of stmt(s).matchAll(/\$([^$]+)\$/g)) for (const c of m[1].replace(/\\[a-zA-Z]+/g, " ").match(/[a-z]/g) || []) lets.add(c);
    for (const L of lets) { out.add(ps.map(x => `${L} = ${x}`).join("; ")); out.add(ps.map((x, i) => `${L}${"₁₂₃₄"[i] || ""} = ${x}`).join("; ")); }
    out.add(ps.map((x, i) => `${i ? "y" : "x"} = ${x}`).join("; ")); out.add(`x = ${ps[0]}`); }
  // g10-issues п. 3: число після дужок-множника — 4x(3x + 5) → (3x + 5)4x
  if (k === "expression") { const m = K.match(/^(\d+(?:,\d+)?[a-z]*(?:\^\d+)?)\s*\(([^()]+)\)$/); if (m) { out.add(`(${m[2]})${m[1]}`); out.add(`(${m[2]}) ${m[1]}`); out.add(`(${m[2]})^2 ${m[1]}`); } }
  if (k === "list" || k === "coordinates2" || k === "coordinates3" || k === "ratio") {
    const sep = k === "ratio" ? ":" : ";", parts = K.replace(/^\(|\)$/g, "").split(sep).map(x => x.trim());
    const wrap = xs => k.startsWith("coord") ? `(${xs.join("; ")})` : xs.join(k === "ratio" ? " : " : "; ");
    out.add(wrap([...parts].reverse())); out.add(wrap(parts.map((x, i) => i ? x : x.startsWith("-") ? x.slice(1) : "-" + x))); out.add(wrap(parts.concat(parts[0])));
    if (k.startsWith("coord")) for (const pre of ["A", "AB", "AB = ", "AB=", "\\vec{AB} = ", "a", "k", "m = "]) out.add(pre + wrap(parts));
    if (s.unit) { out.add(wrap(parts.map(x => x + s.unit))); out.add(wrap(parts.map(x => x + " " + s.unit))); }
  }
  if (k === "intervalSet") for (const pre of ["x ∈ ", "-n ∈ ", "2x - 1 ∈ ", "x∈", "D(f) = ", "[x] ∈ "]) out.add(pre + K);
  if (k === "exactRoot" || k === "list") {
    out.add(`(1/2)(2(${K}))`); out.add(`2(${K})/2`);
    // P3-1: a ± b√c → (1/2)(2a ± 2b√c)
    const m = K.match(/^(-?\d+) ([+±-]) (\d*)√(\d+)$/); if (m) out.add(`(1/2)(${2 * m[1]} ${m[2]} ${2 * (m[3] || 1)}√${m[4]})`);
  }
  if (s.unit) {
    const u = s.unit, alt = u.replace(/°/g, "º");
    for (const r of [`${K} ${u}`, `${K}${u}`, `${K} ${u}.`, `${K} ${u},`, `${K}${alt}`, `${K} ${alt}.`]) out.add(r);
    if (u === "раз") for (const w of ["разів", "рази", "раза"]) out.add(`${K} ${w}`);
    for (const f of FOREIGN.filter(f => f !== u)) { out.add(`${K} ${f}`); if (a) out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${f}`); }
    if (a) { out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${u}.`); out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${u}`); }
  } else for (const f of ["см", "грн", "°", "%"]) out.add(`${K} ${f}`);
  return [...out];
}

// ---------- категорії розбіжностей ----------
const verdict = (L, s, v) => { const r = L.checkAns(s, v); return { r, h: r === "form" ? L.formHint(s, v) : L.badHint(s, v, r) }; };
const same = (x, y) => x.r === y.r && x.h === y.h;
const UNIT_HINT = /^Перевір одиницю/;
const symCoord = s => s.answerKind === "coordinates2" && /[a-z]/.test(keyText(s).replace(/sqrt|pi/g, ""));
const exactVal = (s, v) => { const a = NEW.parseAns(keyText(s)), m = String(v).replace(/^\s*[A-Za-zА-Яа-яіїєґ]\s*=\s*/u, "").replace(/−/g, "-").match(/^(-?)(\d+),(\d*)\((\d+)\)$/);
  if (!a || !m) return false; const A = BigInt(m[2] + m[3]), F = BigInt(m[2] + m[3] + m[4]), n = (F - A) * (m[1] ? -1n : 1n), d = 10n ** BigInt(m[3].length) * (10n ** BigInt(m[4].length) - 1n);
  return n * BigInt(a.d) === BigInt(a.n) * d; };
const CATS = [
  ["п.5 префікс «x =» у number", (s, v, o, n) => (s.answerKind || "number") === "number" && /^\s*[A-Za-zА-Яа-яіїєґ]\s*=\s*/u.test(v) && same(verdict(OLD, s, v.replace(/^\s*[A-Za-zА-Яа-яіїєґ]\s*=\s*/u, "")), n)],
  ["п.5 назва вектора AB = (…) / AB(…) / \\vec{AB}", (s, v, o, n) => /^coordinates[23]$/.test(s.answerKind) && /^(?:\\vec\{[A-Z]{1,2}\}|[A-Z]{1,2})\s*=?\s*\(/.test(v) && same(verdict(OLD, s, v.replace(/^(?:\\vec\{[A-Z]{1,2}\}|[A-Z]{1,2})\s*=?\s*/, "")), n)],
  ["п.5 мала літера перед дужками в символьному coordinates2 — множник", (s, v, o, n) => symCoord(s) && /^[a-z]\(/.test(v) && o.r !== "bad" && n.r === "bad"],
  ["п.5 вираз перед «∈» в intervalSet", (s, v, o, n) => s.answerKind === "intervalSet" && v.includes("∈") && same(verdict(OLD, s, "x ∈ " + v.slice(v.indexOf("∈") + 1).trim()), n)],
  ["п.6 періодичний дріб", (s, v, o, n) => /\(\d+\)$/.test(v) && o.r === "bad" && n.r !== "bad" && exactVal(s, v)],
  ["п.7 крапка після одиниці", (s, v, o, n) => !!s.unit && /[.,]$/.test(v) && v.slice(0, -1).trim().endsWith(s.unit) && same(verdict(OLD, s, v.slice(0, -1)), n)],
  ["п.7 «º» замість «°»", (s, v, o, n) => v.includes("º") && same(verdict(OLD, s, v.replace(/º/g, "°")), n) || (v.includes("º") && /[.,]$/.test(v) && same(verdict(OLD, s, v.replace(/º/g, "°").slice(0, -1)), n))],
  ["п.7 «разів/рази/раза» для «раз»", (s, v, o, n) => s.unit === "раз" && /раз(ів|и|а)$/.test(v) && same(verdict(OLD, s, v.replace(/раз(ів|и|а)$/, "раз")), n)],
  ["п.7 одиниця перед «)» і «:» (coordinates, ratio)", (s, v, o, n) => !!s.unit && /^(coordinates[23]|ratio)$/.test(s.answerKind) && same(verdict(OLD, s, v.split(s.unit).join("")), n)],
  ["п.7 «Перевір одиницю» лише коли число без одиниці правильне", (s, v, o, n) => o.r === "bad" && n.r === "bad" && UNIT_HINT.test(o.h || "") && n.h === null
    && OLD.checkAns(s, v.replace(new RegExp(`\\s*(?:${FOREIGN.join("|")})(?=\\s*(?:[;)]|$))`, "g"), "")) === "bad"],
  ["P3-1 (p/q)(сума) і 2(сума)/2 — нескорочений дріб", (s, v, o, n) => /^(\(1\/2\)\(|2\()/.test(v) && o.r === "ok" && n.r === "form"],
  // engine-math-answer-g10-issues: старий рушій на записі без нововведення дає те саме, що новий на записі з ним
  // п.2 пояснено, лише якщо з усіх літер a–z новий рушій зараховує цей запис рівно з однією (і її подано в списку для людини)
  ["g10 п.2 префікс «x =» / «x₁ =» в list", (s, v, o, n) => { if (s.answerKind !== "list" || !v.includes("=")) return false;
    const strip = v.split(";").map(x => x.replace(/^\s*[a-zа-яії][₁₂₃₄1-4]?\s*=\s*/u, "")), bare = strip.join(";");
    if (!same(verdict(OLD, s, bare), n)) return false;
    const m = v.match(/^\s*([a-zа-яії])/u), lat = { "х": "x", "у": "y", "а": "a", "і": "i" }[m?.[1]] || m?.[1];
    const ok = [..."abcdefghijklmnopqrstuvwxyz"].filter(l => NEW.checkAns(s, strip.map(x => `${l} = ${x}`).join(";")) !== "bad");
    if (ok.length !== 1 || ok[0] !== lat) return false;
    P2.add(`${s.__id} ${lat}`); return true; }],
  ["g10 п.3 число після дужок-множника в expression", (s, v, o, n) => s.answerKind === "expression" && /\)\s*\d/.test(v) && same(verdict(OLD, s, v.replace(/\)(\s*)(?=\d)/g, ")·")), n)],
  ["g10 п.4 «+» перед числом у number", (s, v, o, n) => (s.answerKind || "number") === "number" && /^(?:x = )?\+\d/.test(v) && same(verdict(OLD, s, v.replace("+", "")), n)],
  ["P3-2 «Скороти дріб» для меж intervalSet", (s, v, o, n) => s.answerKind === "intervalSet" && o.r === "form" && n.r === "form" && /Скороти дріб/.test(n.h)],
];

// ---------- прогін ----------
const P2 = new Set();
const counts = Object.fromEntries(CATS.map(([c]) => [c, 0])), unexplained = [], keyBad = [];
let total = 0;
for (const { id, s } of items) {
  Object.defineProperty(s, "__id", { value: id, configurable: true });
  const K = s.answerKind === "quantity" ? NEW.keyInput(s) : keyText(s);
  if (NEW.checkAns(s, NEW.keyInput ? NEW.keyInput(s) : K) !== "ok") keyBad.push(`${id}: новий learn.js не приймає ключ «${K}»`);
  for (const v of records(s)) {
    total++;
    const o = verdict(OLD, s, v), n = verdict(NEW, s, v);
    if (same(o, n)) continue;
    const cat = CATS.find(([, f]) => f(s, v, o, n));
    if (cat) { counts[cat[0]]++; if (args.includes("--list-cat") && cat[0] === opt("--list-cat")) console.log(`    ${id} «${v}»: ${o.r} → ${n.r}`); } else unexplained.push(`${id} ${JSON.stringify(s.answer)} ← «${v}»: ${o.r}${o.h ? " «" + o.h + "»" : ""} → ${n.r}${n.h ? " «" + n.h + "»" : ""}`);
  }
}
console.log(`Старий learn.js: ${OLD_REV}. Вправ ${items.length} (класи ${G0}–${G1}), записів ${total}.`);
for (const [c, k] of Object.entries(counts)) console.log(`  ${String(k).padStart(5)}  ${c}`);
console.log(`  ${String(unexplained.length).padStart(5)}  НЕПОЯСНЕНІ`);
unexplained.slice(0, SHOW).forEach(x => console.log("    " + x));
if (P2.size) console.log(`  g10 п.2 — вправи й літера, з якою префікс тепер знімається (звір з умовою): ${[...P2].join(", ")}`);
keyBad.forEach(x => console.log("  КЛЮЧ: " + x));

// ---------- --time: найгірший час перевірки на важких записах (межа — кроки, а не годинник) ----------
if (args.includes("--time")) {
  const heavy = ["((((x+1)^12)^12)^12)^12", "(√2+√3+√5+√7+√11+√13+√17+√19+√23+√29+√31+√37+√41+√43)^12", "(1+√2+√3+√5+√7)^5 - (1+√2+√3+√5+√7)^5",
    "(a+b+c+d+e)^7", "((p+m)^12)^12 - ((p+m)^12)^12", "9".repeat(16) + "^12^12", "(" + "2√2/2 + ".repeat(60) + "0)", "(" + "1±".repeat(20) + "1)", "(x+1)^12·(x-1)^12·(x+2)^12", "√9999999967·√9999999943·√9999999929"];
  const keys = [{ answerKind: "expression", answer: "x" }, { answerKind: "expression", answer: "(x - 1)(x + 1)", form: "factored" }, { answerKind: "exactRoot", answer: "√2" }, { answerKind: "list", answer: "1 ± √5" }, { answerKind: "coordinates2", answer: "(p - m; k - n)" }];
  let worst = [0, ""];
  for (const s of keys) for (const h of heavy.concat(["x + ((x+1)^12 - (x+1)^12)", "(x+1)^12 - (x+1)^12 + x", "(√2+√3)^12 - (√2+√3)^12 + √2"])) {
    const o = OLD.checkAns(s, h), n = NEW.checkAns(s, h); if (o !== n) console.log(`Важкий запис: ${s.answerKind} ${JSON.stringify(s.answer)} ← «${h.slice(0, 40)}»: ${o} → ${n}`); }
  for (const L of [["старий", OLD], ["новий", NEW]]) { worst = [0, ""];
    for (const s of keys) for (const h of heavy) for (const v of s.answerKind === "coordinates2" ? [`(${h}; ${h})`] : [h]) {
      const t0 = performance.now(); const r = L[1].checkAns(s, v); if (r !== "ok") L[1].badHint(s, v, r); else L[1].formHint(s, v); const dt = performance.now() - t0;
      if (dt > worst[0]) worst = [dt, `${s.answerKind} ← ${v.slice(0, 40)}`]; }
    console.log(`Час (${L[0]}): найгірший checkAns + підказка ${worst[0].toFixed(0)} мс — ${worst[1]}`); }
}
process.exit(unexplained.length || keyBad.length ? 1 : 0);
