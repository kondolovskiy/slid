#!/usr/bin/env node
// Слід · диференційна регресія перевірки відповідей: старий app/learn.js (з git) проти поточного на всіх вправах,
// які перевіряє SLID_LEARN.checkAns: пули, діагностики (fracin hideDen) й екрани answer у розділах 4–9 класів.
// Для кожної вправи — ключ і типові рівні/хибні записи. Кожна розбіжність вердикту чи підказки має належати
// дозволеній категорії (рішення 2026-10-31, engine-math-answer-kinds-new: п. 5–7 і P3 з рев'ю), інакше — «непояснена», rc 1.
// Класифікація незалежна від реалізації: стару версію перевіряють на «очищеному» записі й порівнюють з новою.
// engine-math-answer-g11-issues додала записи й категорії «g11 п.1–п.8» (кирилиця, стала c, мішане число, √n², 0,(3) у межі, x₁,₂).
// engine-learn-list-prefixes-p3 / engine-answer-kinds-p3 — категорії «p3 …»: назва з умови перед множиною й координатами,
// підказки формату (list «;», величини, mixed, √ з умови), розряди в quantity; записи — змінена лише друга/третя компонента,
// хибні назви («n ∈», «CD = », «E(f) = »), більше мішаних чисел і періодичних меж (рев'ю g11 P3-4, kinds-new P3-3).
// engine-learn-prefixes-p3b — «p3b …»: назви об'єктів умови без координат (BC, AO, X, OX) і назви образу з індексом/штрихом (A₁, A').
// engine-decisions-1101 — «dec-1101 …»: назва образу даної точки (A₁, A′ при «образ точки $A(…)$» / «симетричної точці $A(…)$») — ok.
// engine-diag-half-credit — «half …»: вердикт тесту рівня (старий diagAnswerOk → новий diagVerdict: OK / HALF / BAD) на всіх вправах
// answer з DIAG_ANSWER_KINDS, ніби вони стояли в тесті (чинні SLID.diag answer ще не мають); пробні записи — нескорочений дріб,
// мішане/неправильне число, десятковий запис, √(K²), 2√(K²/4), інші одиниці величини. Старий learn.js без diagAnswerOk — блок пропущено.
// engine-diag-answer-kinds — answer у діагностиках (SLID.diag) теж у прогоні; режим --content-old: старий і новий ЗМІСТ на одному
// (поточному) learn.js — які вердикти змінила правка вправ (ключ, answerKind, умова з назвами), а не рушія.
// Межі --content-old: рушій зміст старої ревізії бере з неї ж (ревізії без app/lab.js, learn.js, math.js чи registry.js — rc 2);
// зміна лише текстових полів (title, body, hint… — TEXT_ONLY) вважається редакторською і rev у тесті рівня не вимагає.
// engine-unit-hint — «uh …»: «Перевір одиницю» замість звичайного повідомлення, коли запис — та сама величина в іншій одиниці (вердикт bad той самий);
// записи — ключ у кожній іншій одиниці тієї самої величини і в 10 разів більше (власна таблиця UQ). «--grades 4» — один клас.
// Запуск: node tools/diff-answers.mjs [--old <git-rev>] [--grades 4-9 | 4] [--time] [--show N] [--list-cat "<категорія>"] (записи однієї категорії)
//         node tools/diff-answers.mjs --content-old <git-rev> [--grades 4-11] [--show N]   (зміст <rev> проти поточного, обидва — поточним learn.js)
import fs from "node:fs"; import os from "node:os"; import vm from "node:vm"; import path from "node:path"; import { execFileSync } from "node:child_process";
import { loadContent, ROOT } from "./lib.mjs";

const args = process.argv.slice(2), opt = (k, d) => args.includes(k) ? args[args.indexOf(k) + 1] : d;
const CONTENT_OLD = opt("--content-old", null);
if (CONTENT_OLD !== null && (!CONTENT_OLD || CONTENT_OLD.startsWith("--"))) { console.error("--content-old потребує git-ревізію"); process.exit(2); }
if (CONTENT_OLD && args.includes("--old")) { console.error("--content-old і --old взаємовиключні: у режимі змісту обидві сторони — поточний learn.js"); process.exit(2); }
// ревізія — лише коміт, перевірений git rev-parse: значення на «-» (напр. «-o<шлях>») не потрапить у git archive/show як опція,
// а неіснуюча ревізія дає зрозуміле повідомлення й rc 2 замість траси стеку (рев'ю engine-diag-answer-kinds, P3-1)
function commitOf(flag, rev) {
  if (/^-/.test(rev)) { console.error(`${flag}: «${rev}» — не git-ревізія (починається з «-»)`); process.exit(2); }
  try { return execFileSync("git", ["rev-parse", "--verify", "--quiet", "--end-of-options", `${rev}^{commit}`], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); }
  catch { console.error(`${flag}: ревізії «${rev}» немає в git (або це не коміт)`); process.exit(2); }
}
// «--grades 4» — один клас (4–4), «4-11» — проміжок; інше (порожньо, «4-», «11-4», «x») — rc 2, а не мовчазний прогін 0 вправ
// (engine-unit-hint: раніше «--grades 4» давало «Класи 4–undefined» і 0 вправ)
function gradesOf(v) {
  const m = /^(\d{1,2})(?:-(\d{1,2}))?$/.exec(String(v ?? "")), a = m && +m[1], b = m && (m[2] === undefined ? a : +m[2]);
  if (!m || a > b) { console.error(`--grades: «${v ?? ""}» — потрібен клас (4) або проміжок класів (4-11)`); process.exit(2); }
  return [a, b];
}
const OLD_REV = CONTENT_OLD ? null : commitOf("--old", opt("--old", "1b3819d")), CONTENT_REV = CONTENT_OLD ? commitOf("--content-old", CONTENT_OLD) : null, [G0, G1] = gradesOf(opt("--grades", "4-9")), SHOW = +opt("--show", 5);
const load = src => { const c = { console }; c.window = c; vm.createContext(c); vm.runInContext(src, c); return c.SLID_LEARN; };
const NEW = load(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"));
const OLD = CONTENT_OLD ? NEW : load(execFileSync("git", ["show", `${OLD_REV}:app/learn.js`], { cwd: ROOT, encoding: "utf8" }));
const { subjects } = loadContent();

// ---------- вправи ----------
// fracin hideDen у тесті плеєр перевіряє як дріб (app.js gradeNow); answer — як є (у тесті й уроці той самий checkAns)
function collect(subjects) {
  const items = [];
  for (const c of subjects) {
    const grade = new Map(c.sections.map(s => [s.id, s.grade]));
    for (const p of c.pools || []) { const g = grade.get(p.section); if (g >= G0 && g <= G1) for (const it of p.items) if (it.type === "answer") items.push({ id: `${p.id}:${it.id}`, s: it }); }
    for (const d of c.diags || []) if (d.grade >= G0 && d.grade <= G1) d.items.forEach((it, i) => {
      if (it.type === "fracin" && it.hideDen) items.push({ id: `${d.id}#${i}`, s: { answer: it.answer + "/" + it.den, fractionOnly: true } });
      if (it.type === "answer") items.push({ id: `${d.id}#${i}`, s: it }); });
    for (const sec of c.sections) if (sec.grade >= G0 && sec.grade <= G1) for (const l of sec.lessons || []) l.screens.forEach((s, i) => { if (s.type === "answer") items.push({ id: `${l.id}#${i}`, s }); });
  }
  return items;
}
const items = collect(subjects);

// ---------- записи: ключ, рівні й хибні варіанти ----------
const stmt = s => ["title", "body", "q", "text"].map(k => typeof s[k] === "string" ? s[k] : "").join(" ");
const keyText = s => { const k = s.answerKind || "number", a = s.answer;
  if (Array.isArray(a)) return k === "ratio" ? a.join(" : ") : k === "coordinates2" || k === "coordinates3" ? "(" + a.join("; ") + ")" : k === "divrem" ? `${a[0]} ост. ${a[1]}` : a.join("; ");
  return typeof a === "number" ? String(a).replace(".", ",") : String(a); };
const SYM = ["expression", "coordinates2", "coordinates3", "intervalSet", "periodicSet", "exactRoot", "list"];
// латинські літери, що мають кириличного двійника (g11 п.1), — на кириличні; і зворотна заміна для класифікації
const TWIN = { a: "а", e: "е", i: "і", k: "к", o: "о", p: "р", c: "с", y: "у", x: "х", A: "А", B: "В", E: "Е", I: "І", K: "К", M: "М", H: "Н", O: "О", P: "Р", C: "С", T: "Т", X: "Х" };
const cyr = r => r.replace(/\\[a-zA-Z]+|sqrt|pi|inf|[a-zA-Z]/g, m => m.length === 1 ? TWIN[m] || m : m);
const lat = r => r.replace(/[аеікорсухАВЕІКМНОРСТХ]/g, c => Object.keys(TWIN).find(k => TWIN[k] === c));
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
    if (k.startsWith("coord")) for (const pre of ["A", "AB", "AB = ", "AB=", "\\vec{AB} = ", "a", "k", "m = ", "B", "B = ", "C", "D", "D = ", "M", "M = ", "CD = ", "BA = ", "A = ",
      "BC = ", "AO = ", "X", "X = ", "OX = ", "O", "KL = ", "\\vec{BC} = ", "A_1", "A_1 = ", "A₁", "A1", "A'", "A′ = ", "X_1", "B_1", "M'", "A_1 = A", "a_1", "A₂", "A''", "B₁", "A_{1} = "]) out.add(pre + wrap(parts));   // p3b: назви умови й образу
    // рев'ю kinds-new P3-3: змінено лише другу (третю) компоненту — перша правильна
    for (let i = 1; i < parts.length; i++) { const p = parts[i], a1 = NEW.parseAns(p); for (const alt of [a1 ? String(a1.n / a1.d + 1).replace(".", ",") : p + " + 1", p.startsWith("-") ? p.slice(1) : "-" + p, "0"]) if (alt !== p) out.add(wrap(parts.map((x, j) => j === i ? alt : x))); }
    if (s.unit) { out.add(wrap(parts.map(x => x + s.unit))); out.add(wrap(parts.map(x => x + " " + s.unit))); }
  }
  if (k === "intervalSet") for (const pre of ["x ∈ ", "-n ∈ ", "2x - 1 ∈ ", "x∈", "D(f) = ", "[x] ∈ ", "n ∈ ", "y ∈ ", "a ∈ ", "m ∈ ", "E(f) = ", "E(y) = ", "f(x) ∈ ", "x ∈ y ∈ ", "x = "]) out.add(pre + K);
  if (k === "exactRoot" || k === "list") {
    out.add(`(1/2)(2(${K}))`); out.add(`2(${K})/2`);
    // P3-1: a ± b√c → (1/2)(2a ± 2b√c)
    const m = K.match(/^(-?\d+) ([+±-]) (\d*)√(\d+)$/); if (m) out.add(`(1/2)(${2 * m[1]} ${m[2]} ${2 * (m[3] || 1)}√${m[4]})`);
  }
  // p3: list через кому замість «;» (у полі «1.5, 2» → «1,5, 2»); десятковий/періодичний запис при mixed; величини з розрядами й без одиниці
  if (k === "list") { const ps = K.split(/[;\n]/.test(K) ? /[;\n]/ : /,/).map(x => x.trim()); out.add(ps.join(", ")); out.add(ps.join(",")); }
  if (k === "number" && a && a.d > 1) { out.add(String(a.n / a.d).replace(".", ",")); out.add(String(Math.round(a.n / a.d * 1000) / 1000).replace(".", ",")); }
  if (k === "quantity") { const q = NEW.keyInput(s); out.add(q.replace(/(\d)(\d{3})(?=\D|$)/, "$1 $2")); out.add(q.replace(/ \S+$/, "")); out.add(String(s.answer)); out.add(String(s.answer).replace(/(\d)(\d{3})$/, "$1 $2") + " " + s.units[s.units.length - 1]);
    out.add(q.replace(/\d+/, d => String(+d + 1))); if (s.units.includes("год")) out.add(q.replace(/ год /, ":").replace(/ хв$/, "")); }
  // g11 P3-4: більше записів п.3 (дріб-коефіцієнт мішаним числом) і п.5 (ціла межа як k−1,(9))
  if (k === "expression") for (const m of K.matchAll(/(^|[+-] )(\d+)\/(\d+)([a-z])/g)) { const p = +m[2], q = +m[3]; if (p > q && p % q) out.add(K.replace(m[0], `${m[1]}${Math.floor(p / q)} ${p % q}/${q}${m[4]}`)); }
  if (k === "intervalSet") { const n9 = K.replace(/(^|[[(;] ?)(-?)(\d+)(?=[;\])])/g, (m0, pre, sg, d) => +d > 0 ? `${pre}${sg}${+d - 1},(9)` : m0); if (n9 !== K) out.add(n9); }
  // engine-math-answer-g11-issues
  // п.1: кириличні двійники латинських літер у символьних записах (ключ і хибні записи); п.2: стала «c» / «С» / «K»
  if (SYM.includes(k)) for (const r of [...out]) if (/[a-zA-Z]/.test(r.replace(/sqrt|pi|inf/g, ""))) out.add(cyr(r));
  if (k === "expression" && /\bC\b/.test(K)) for (const r of [K.replace(/\bC\b/g, "c"), K.replace(/\bC\b/g, "с"), K.replace(/\bC\b/g, "K"), K.replace(/\bC\b/g, "c") + " + 1"]) out.add(r);
  // п.3: дріб-доданок ключа виразу мішаним числом (10/3 → 3 1/3); п.4: ціле число ключа коренем (24 → √576, √577)
  if (k === "expression") for (const m of K.matchAll(/(^|[+-] )(\d+)\/(\d+)(?=$| [+-])/g)) { const p = +m[2], q = +m[3]; if (p > q && p % q) { out.add(K.replace(m[0], `${m[1]}${Math.floor(p / q)} ${p % q}/${q}`)); out.add(K.replace(m[0], `${m[1]}${Math.floor(p / q)} ${p % q + 1}/${q + 2}`)); } }
  if (k === "number" && a && a.d === 1 && Math.abs(a.n) <= 1000) { const n = Math.abs(a.n), sg = a.n < 0 ? "-" : ""; out.add(`${sg}√${n * n}`); out.add(`${sg}√${n * n + 1}`); out.add(`√${n * n}`); out.add(`${sg}2√${n * n}`); }
  // п.5: межа проміжку періодичним дробом (1/3 → 0,(3)); п.8: «x₁,₂ = …» з «±» у list
  if (k === "intervalSet") { const per = K.replace(/(-?\d+)\/(\d+)/g, (m0, p, q) => periodic(p, q) || m0); if (per !== K) { out.add(per); out.add(per.replace(/\((\d+)\)/, (m0, d) => `(${(+d + 1) % 10})`)); } }
  if (k === "list" && /[±∓]/.test(K)) { const lets = new Set(["x", "y", "х", "f", "k", "b"]); for (const m of stmt(s).matchAll(/\$([^$]+)\$/g)) for (const c of m[1].replace(/\\[a-zA-Z]+/g, " ").match(/[a-z]/g) || []) lets.add(c);
    for (const L of lets) { out.add(`${L}₁,₂ = ${K}`); out.add(`${L}_{1,2} = ${K}`); } }
  if (s.unit) {
    const u = s.unit, alt = u.replace(/°/g, "º");
    for (const r of [`${K} ${u}`, `${K}${u}`, `${K} ${u}.`, `${K} ${u},`, `${K}${alt}`, `${K} ${alt}.`]) out.add(r);
    if (u === "раз") for (const w of ["разів", "рази", "раза"]) out.add(`${K} ${w}`);
    for (const f of FOREIGN.filter(f => f !== u)) { out.add(`${K} ${f}`); if (a) out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${f}`); }
    if (a) { out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${u}.`); out.add(`${String(a.n / a.d + 1).replace(".", ",")} ${u}`); }
    // engine-unit-hint: та сама величина в кожній іншій одиниці тієї самої величини (і в 10 разів більша — без підказки)
    if (k === "number" && a) for (const v of sameQty(a, u)) out.add(v);
  } else for (const f of ["см", "грн", "°", "%"]) out.add(`${K} ${f}`);
  return [...out];
}

// engine-unit-hint: власна таблиця одиниць (незалежно від learn.js UCONV) — множник до найменшої одиниці; швидкість — у м/год
const UQ = { "мм": ["l", 1n], "см": ["l", 10n], "дм": ["l", 100n], "м": ["l", 1000n], "км": ["l", 10n ** 6n],
  "мм²": ["a", 1n], "см²": ["a", 100n], "дм²": ["a", 10n ** 4n], "м²": ["a", 10n ** 6n], "га": ["a", 10n ** 10n], "км²": ["a", 10n ** 12n],
  "мм³": ["v", 1n], "см³": ["v", 1000n], "мл": ["v", 1000n], "дм³": ["v", 10n ** 6n], "л": ["v", 10n ** 6n], "м³": ["v", 10n ** 9n],
  "мг": ["m", 1n], "г": ["m", 1000n], "кг": ["m", 10n ** 6n], "ц": ["m", 10n ** 8n], "т": ["m", 10n ** 9n],
  "с": ["t", 1n], "хв": ["t", 60n], "год": ["t", 3600n], "діб": ["t", 86400n], "коп": ["g", 1n], "грн": ["g", 100n],
  "км/год": ["s", 1000n], "м/хв": ["s", 60n], "м/с": ["s", 3600n], "км/хв": ["s", 60000n] };
const bg = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
// p/q (BigInt, q > 0) → «2,5», якщо скінченний дріб з ≤ 6 знаками, інакше null
const decOf = (p, q) => { const g = bg(p, q); p /= g; q /= g; for (let k = 0; k <= 6; k++) { const t = 10n ** BigInt(k); if (t % q === 0n) { const n = String(p * (t / q)).padStart(k + 1, "0"); return k ? n.slice(0, -k) + "," + n.slice(-k) : n; } } return null; };
function sameQty(a, u) {
  const own = UQ[u]; if (!own || a.n <= 0) return [];
  const out = [];
  for (const [w, [d, f]] of Object.entries(UQ)) if (d === own[0] && f !== own[1]) {
    const p = BigInt(a.n) * own[1], q = BigInt(a.d) * f, x = decOf(p, q), y = decOf(p * 10n, q);
    if (x && x.length <= 12) out.push(`${x} ${w}`); if (y && y.length <= 12) out.push(`${y} ${w}`);
  }
  return out;
}
// запис «число одиниця» — та сама величина, що ключ у s.unit (власна таблиця)
const sameQtyRec = (s, v) => { const m = /^(\d+(?:,\d+)?) (\S+)$/.exec(v), own = UQ[s.unit], their = m && UQ[m[2]], a = NEW.parseAns(keyText(s)), b = m && NEW.parseAns(m[1]);
  return !!(own && their && a && b && own[0] === their[0] && their[1] !== own[1] && BigInt(b.n) * their[1] * BigInt(a.d) === BigInt(a.n) * own[1] * BigInt(b.d)); };

// ---------- категорії розбіжностей ----------
const verdict = (L, s, v) => { const r = L.checkAns(s, v); return { r, h: r === "form" ? L.formHint(s, v) : L.badHint(s, v, r) }; };
const same = (x, y) => x.r === y.r && x.h === y.h;
const UNIT_HINT = /^Перевір одиницю/;
const symCoord = s => s.answerKind === "coordinates2" && /[a-z]/.test(keyText(s).replace(/sqrt|pi/g, ""));
const exactVal = (s, v) => { const a = NEW.parseAns(keyText(s)), m = String(v).replace(/^\s*[A-Za-zА-Яа-яіїєґ]\s*=\s*/u, "").replace(/−/g, "-").match(/^(-?)(\d+),(\d*)\((\d+)\)$/);
  if (!a || !m) return false; const A = BigInt(m[2] + m[3]), F = BigInt(m[2] + m[3] + m[4]), n = (F - A) * (m[1] ? -1n : 1n), d = 10n ** BigInt(m[3].length) * (10n ** BigInt(m[4].length) - 1n);
  return n * BigInt(a.d) === BigInt(a.n) * d; };
const CATS = [
  // g11 п.1 першою: кириличний запис інакше потрапив би в категорію іншого нововведення (х ∈ …)
  ["g11 п.1 кириличні двійники латинських літер", (s, v, o, n) => SYM.includes(s.answerKind) && lat(v) !== v && /^[^а-яґєіїА-ЯҐЄІЇ]*$/u.test(lat(v)) && same(verdict(OLD, s, lat(v)), n)],
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
  ["uh «Перевір одиницю»: та сама величина в іншій одиниці (вердикт bad той самий, лише текст)", (s, v, o, n) => (s.answerKind || "number") === "number" && o.r === "bad" && n.r === "bad"
    && o.h === null && n.h === `Перевір одиницю: тут відповідь записують у «${s.unit}». Одиницю можна й не писати.` && sameQtyRec(s, v)],
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
  // engine-math-answer-g11-issues: так само — старий рушій на «очищеному» записі (латиниця, C, неправильний дріб, дріб) дає те саме
  ["g11 п.2 стала «c» замість «C» — form", (s, v, o, n) => s.answerKind === "expression" && /\bC\b/.test(keyText(s)) && /(^|[^a-zA-Zа-я])[cс](?![a-zA-Zа-я])/u.test(v) && o.r === "bad" && n.r === "form"
    && /Сталу запиши великою/.test(n.h) && !/(^|[^a-zA-Z])c(?![a-zA-Z])/.test(stmt(s).replace(/<[^>]*>/g, " ").replace(/\\[a-zA-Z]+/g, " ").replace(/[a-zA-Z]{2,}/g, " ")) && OLD.checkAns(s, lat(v).replace(/(^|[^a-zA-Z])c(?![a-zA-Z])/g, "$1C")) === "ok"],
  ["g11 п.3 мішане число-доданок у виразі", (s, v, o, n) => s.answerKind === "expression" && /\d \d+\/\d+/.test(v) && same(verdict(OLD, s, v.replace(/(\d+) (\d+)\/(\d+)/g, (m0, w, p, q) => `${+w * +q + +p}/${q}`)), n)],
  ["g11 п.4 ціле число коренем у number — form", (s, v, o, n) => (s.answerKind || "number") === "number" && /^-?\d*√\d+$/.test(v) && o.r === "bad" && n.r === "form" && /Обчисли корінь/.test(n.h)
    && (() => { const m = v.match(/^(-?)(\d*)√(\d+)$/), r = Math.sqrt(+m[3]), a = NEW.parseAns(keyText(s)); return Number.isInteger(r) && a.d === 1 && (m[1] ? -1 : 1) * (+(m[2] || 1)) * r === a.n; })()],
  ["g11 п.5 періодичний дріб у межі проміжку", (s, v, o, n) => s.answerKind === "intervalSet" && /,\d*\(\d+\)/.test(v) && same(verdict(OLD, s, v.replace(/(-?)(\d+),(\d*)\((\d+)\)/g, (m0, sg, w, pre, rep) => {
      const A = BigInt(w + pre), F = BigInt(w + pre + rep), d = 10n ** BigInt(pre.length) * (10n ** BigInt(rep.length) - 1n); return `${sg}${F - A}/${d}`; })), n)],
  ["g11 п.8 «x₁,₂ = …» з «±» у list", (s, v, o, n) => { const m = v.match(/^\s*([a-zа-яії])(?:₁,₂|_\{1,2\}) = (.*)$/u); if (s.answerKind !== "list" || !m || !same(verdict(OLD, s, m[2]), n)) return false;
    const lt = { "х": "x", "у": "y", "а": "a", "і": "i" }[m[1]] || m[1], ok = [..."abcdefghijklmnopqrstuvwxyz"].filter(l => NEW.checkAns(s, `${l}₁,₂ = ${m[2]}`) !== "bad");
    if (ok.length !== 1 || ok[0] !== lt) return false; P2.add(`${s.__id} ${lt}₁,₂`); return true; }],
  ["P3-2 «Скороти дріб» для меж intervalSet", (s, v, o, n) => s.answerKind === "intervalSet" && o.r === "form" && n.r === "form" && /Скороти дріб/.test(n.h)],
  // engine-learn-list-prefixes-p3 / engine-answer-kinds-p3. Префікс-назва: зараховано раніше, тепер bad, а запис без префікса новий
  // рушій оцінює так само, як старий — тобто змінилось лише прийняття назви; які назви тепер приймаються — друкується нижче (звір з умовою).
  ["p3 лише один префікс множини («x ∈ y ∈ …»)", (s, v, o, n) => s.answerKind === "intervalSet" && /∈[^∈]*∈/.test(v) && n.r === "bad"],
  // варіант B (рев'ю engine-learn-list-prefixes-p3): відкинута назва при правильному значенні — «form» з поясненням, не bad
  ["p3 префікс множини не з умови — form з поясненням", (s, v, o, n) => s.answerKind === "intervalSet" && /[∈=]/.test(v) && o.r !== "bad" && n.r === "form" && /^Проміжок правильний, але /.test(n.h || "")
    && same(verdict(NEW, s, v.slice(v.search(/[∈=]/) + 1).trim()), o)],
  ["p3 назва перед координатами не з умови / дана точка — form з поясненням", (s, v, o, n) => /^coordinates[23]$/.test(s.answerKind) && NAME0.test(lat(v)) && o.r !== "bad" && n.r === "form"
    && /^Координати правильні, але /.test(n.h || "") && same(verdict(NEW, s, lat(v).replace(NAME0, "")), o)],   // lat: кирилична «АВ» — та сама назва (g11 п.1)
  ["p3 list: «;» замість коми — підказка", (s, v, o, n) => s.answerKind === "list" && o.r === "bad" && n.r === "bad" && !o.h && /^Без «;» кома розділяє/.test(n.h || "") && /^[\d\s,.+-]+$/.test(v)],
  ["p3 mixed: одразу «мішаним числом»", (s, v, o, n) => !!s.mixed && o.r === "form" && n.r === "form" && /звичайним дробом/.test(o.h) && /мішаним числом/.test(n.h)],
  ["p3 √ дослівно з умови — інша підказка", (s, v, o, n) => o.r === "form" && n.r === "form" && /Обчисли корінь/.test(o.h) && /^Це вираз з умови/.test(n.h)
    && stmt(s).replace(/\\sqrt\s*\{([^{}]*)\}/g, "√$1").replace(/\s+/g, "").includes(v.replace(/\s+/g, ""))],
  ["p3 quantity: розряди через пробіл", (s, v, o, n) => s.answerKind === "quantity" && /\d \d{3}(?!\d)/.test(v) && same(verdict(OLD, s, v.replace(/(\d) (?=\d{3}(?!\d))/g, "$1")), n)],
  // p3b: «A₁(…)», «A'(…)» — правильне значення з назвою образу: раніше bad без підказки, тепер form «лише координати» (не ok)
  ["p3b назва образу з індексом/штрихом — form з поясненням", (s, v, o, n) => /^coordinates[23]$/.test(s.answerKind) && IMG0.test(lat(v)) && o.r === "bad" && n.r === "form"
    && /^Координати правильні(?:\. Назву з індексом|, але тут шукають [A-Z]{1,2}\.$)/.test(n.h || "") && NEW.checkAns(s, lat(v).replace(IMG0, "")) !== "bad"],
  // dec-1101 (рішення людини 2026-11-01): умова питає образ даної точки L (за текстом умови, незалежно від askedPoint) і сама не називає
  // його (L з індексом чи штрихом у формулах немає) — назва L₁ / L_1 / L1 / L′ (індекс 1 чи один штрих) з правильним значенням: form → ok
  ["dec-1101 назва образу даної точки (A₁, A′) — ok", (s, v, o, n) => { const m = /^coordinates[23]$/.test(s.answerKind) && o.r === "form" && n.r === "ok" && IMG1.exec(lat(v)); if (!m) return false;
    const t = stmt(s), L = m[1], src = [...t.matchAll(/(?:образ\S*\s+точк\S*|симетричн\S*\s+точц[іи])\s*\$\s*([A-Z])\s*\(/giu)].map(x => x[1]);
    return src.length === 1 && src[0] === L && !new RegExp(`\\$[^$]*(?<![A-Za-z\\\\])${L}\\s*(?:_|[₀-₉]|['’′ʼ]|\\d)[^$]*\\$`).test(t) && NEW.checkAns(s, lat(v).replace(IMG1, "")) === "ok"; }],
  ["p3 quantity: підказка формату («2 м 45», дріб, «3:20»)", (s, v, o, n) => s.answerKind === "quantity" && o.r === "bad" && n.r === "bad" && !o.h && /^(Після кожного числа|Звичайний дріб тут|Тут час записують)/.test(n.h || "")],
];
const NAME0 = /^(?:\\vec\{[A-Z]{1,2}\}|[A-Z]{1,2})\s*=?\s*(?=\()/;
const IMG0 = /^[A-Z]{1,2}\s*(?:_\{?\d{1,2}\}?|[₀-₉]{1,2}|\d{1,2}|['’′ʼ]{1,2})\s*=?\s*(?=\()/;
const IMG1 = /^([A-Z])\s*(?:_\s*\{?\s*1\s*\}?|₁|1|['’′ʼ])\s*=?\s*(?=\()/;

// ---------- --content-old: старий і новий зміст на одному (поточному) learn.js ----------
// Вправи зіставляються за id (пул:вправа, урок#екран, тест#індекс). Для кожної спільної вправи — записи з обох версій (ключі,
// рівні й хибні варіанти); вердикт старої вправи проти нової. Розбіжність можлива лише там, де вправа змінилась, — інакше «непояснена».
// Тести рівня (SLID.diag): завдання, змінене по суті (тип, ключ, варіанти, answerKind…) без нового rev, — помилка: збережена
// відповідь на старий зміст зарахувалася б новому (resumeDiag, CONTENT_SCHEMA §9). Зміна кількості, порядку чи тем — потрібен новий id.
// Евристика TEXT_ONLY (рев'ю engine-diag-answer-kinds, P3-5): ці поля вважаються текстом, тож зміна лише title/body (і решти нижче)
// НЕ вимагає rev, навіть якщо змінилось саме запитання за того самого ключа. Автор, що міняє суть умови, ставить rev сам.
// u — прив'язка до графа вмінь (CONTENT_SCHEMA §11): вердикт і прогрес не змінює, тож rev для нього не потрібен (skill-graph G2)
const TEXT_ONLY = new Set(["title", "body", "eyebrow", "note", "hint", "fbOk", "fbBad", "fbText", "fbTitle", "cap", "rev", "steps", "src", "srcPage", "u"]);
const core = it => JSON.stringify(Object.keys(it).filter(k => !TEXT_ONLY.has(k)).sort().map(k => [k, it[k]]));
function contentDiff() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "slid-content-old-"));
  let before, oldSubjects;
  try {
    execFileSync("tar", ["-x", "-C", dir], { input: execFileSync("git", ["archive", CONTENT_REV, "app", "content"], { cwd: ROOT, maxBuffer: 1 << 30 }) });
    // рушій (registry/lab/learn/math) береться зі старої ревізії — так старий зміст завантажується тим кодом, з яким його писали;
    // ревізія, де якогось із цих файлів ще не було, не підтримується (рев'ю engine-diag-answer-kinds, P3-5)
    const miss = ["app/registry.js", "app/lab.js", "app/learn.js", "app/math.js"].filter(f => !fs.existsSync(path.join(dir, f)));
    if (miss.length) { console.error(`--content-old ${CONTENT_OLD}: у ревізії немає ${miss.join(", ")} — старий зміст нічим завантажити; візьми пізнішу ревізію`); process.exitCode = 2; return; }
    oldSubjects = loadContent(dir).subjects; before = collect(oldSubjects);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  const A = new Map(before.map(x => [x.id, x.s])), B = new Map(items.map(x => [x.id, x.s]));
  const added = [...B.keys()].filter(id => !A.has(id)), removed = [...A.keys()].filter(id => !B.has(id));
  const unexplained = [], keyBad = [], diagBad = [], changed = [];
  let total = 0, common = 0, edited = 0;
  for (const [id, s] of B) if (NEW.checkAns(s, NEW.keyInput(s)) !== "ok") keyBad.push(`${id}: ключ «${keyText(s)}» не проходить перевірку`);
  for (const [id, n] of B) {
    const o = A.get(id); if (!o) continue; common++;
    const same0 = JSON.stringify(o) === JSON.stringify(n); if (!same0) edited++;
    const recs = [...new Set([...records(o), ...records(n)])], moves = {}, ex = [];
    for (const v of recs) {
      total++;
      const a = verdict(NEW, o, v), b = verdict(NEW, n, v);
      if (same(a, b)) continue;
      if (same0) { unexplained.push(`${id} «${v}»: ${a.r} → ${b.r} (вправа не змінилась)`); continue; }
      const k = `${a.r}→${b.r}`; moves[k] = (moves[k] || 0) + 1; if (ex.length < SHOW) ex.push(`«${v}» ${a.r}${a.h ? " «" + a.h + "»" : ""} → ${b.r}${b.h ? " «" + b.h + "»" : ""}`);
    }
    if (Object.keys(moves).length) changed.push({ id, key: [keyText(o), keyText(n)], moves, ex });
  }
  // тести рівня: заміна на місці лише з rev; кількість і теми — без змін
  for (const c of subjects) for (const d of c.diags || []) {
    const od = oldSubjects.find(x => x.id === c.id)?.diags.find(x => x.id === d.id); if (!od) continue;
    const from = NEW.diagRev(od), itemRev = it => Number.isInteger(it?.rev) && it.rev > 1 ? it.rev : 1;
    if (od.items.length !== d.items.length) diagBad.push(`${d.id}: кількість завдань ${od.items.length} → ${d.items.length} — потрібен новий id тесту`);
    d.items.forEach((it, i) => { const was = od.items[i]; if (!was) return;
      if (was.topic !== it.topic) diagBad.push(`${d.id}#${i}: тема «${was.topic}» → «${it.topic}» — заміна на місці лише в тій самій темі`);
      else if (core(was) !== core(it) && itemRev(it) <= from) diagBad.push(`${d.id}#${i}: зміст змінено (${was.type} → ${it.type}) без rev > ${from} — збережену відповідь зарахувало б новому завданню`); });
  }
  console.log(`Зміст: ${CONTENT_OLD} → робоче дерево; обидва — поточним app/learn.js. Класи ${G0}–${G1}.`);
  console.log(`  Вправ: було ${A.size}, стало ${B.size}; спільних ${common}, змінених ${edited}; записів ${total}.`);
  console.log(`  ${String(changed.length).padStart(5)}  вправ зі зміненими вердиктами (лише змінені вправи):`);
  for (const x of changed) { console.log(`    ${x.id}: ключ ${x.key[0] === x.key[1] ? `«${x.key[1]}»` : `«${x.key[0]}» → «${x.key[1]}»`}; ${Object.entries(x.moves).map(([k, v]) => `${k} ${v}`).join(", ")}`); x.ex.forEach(e => console.log(`      ${e}`)); }
  console.log(`  ${String(added.length).padStart(5)}  нових вправ${added.length ? ": " + added.slice(0, 20).join(", ") + (added.length > 20 ? " …" : "") : ""}`);
  console.log(`  ${String(removed.length).padStart(5)}  вилучених вправ${removed.length ? ": " + removed.slice(0, 20).join(", ") + (removed.length > 20 ? " …" : "") : ""}`);
  console.log(`  ${String(diagBad.length).padStart(5)}  ТЕСТИ РІВНЯ без rev / зі зміненою структурою`); diagBad.forEach(x => console.log("    " + x));
  console.log(`  ${String(unexplained.length).padStart(5)}  НЕПОЯСНЕНІ`); unexplained.slice(0, SHOW).forEach(x => console.log("    " + x));
  keyBad.forEach(x => console.log("  КЛЮЧ: " + x));
  process.exit(unexplained.length || keyBad.length || diagBad.length ? 1 : 0);
}
if (CONTENT_OLD) { contentDiff(); process.exit(process.exitCode ?? 0); }

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
console.log(`Старий learn.js: ${opt("--old", "1b3819d")} (${OLD_REV.slice(0, 10)}). Вправ ${items.length} (класи ${G0}–${G1}), записів ${total}.`);
for (const [c, k] of Object.entries(counts)) console.log(`  ${String(k).padStart(5)}  ${c}`);
console.log(`  ${String(unexplained.length).padStart(5)}  НЕПОЯСНЕНІ`);
unexplained.slice(0, SHOW).forEach(x => console.log("    " + x));
if (P2.size) console.log(`  g10 п.2 і g11 п.8 — вправи й літера, з якою префікс тепер знімається (звір з умовою): ${[...P2].join(", ")}`);
keyBad.forEach(x => console.log("  КЛЮЧ: " + x));
// p3: вправи, де умова дає назву (askedSet / askedPoint), і які назви з набору проб новий рушій тепер приймає — звір з умовою
{ const SETP = ["x", "y", "a", "m", "n", "-n", "t", "f(x)", "D(f)", "E(f)", "D(y)", "E(y)", "2x - 1"], PTP = ["A", "B", "C", "D", "M", "AB", "BC", "CD", "\\vec{AB}"];
  const set0 = new Set(["x", "y", "a", "m", "n", "t", "f(x)", "D(f)", "E(f)", "D(y)", "E(y)"]), named = [];
  for (const { id, s } of items) {
    const K = keyText(s);
    if (s.answerKind === "intervalSet") { const acc = SETP.filter(p => NEW.checkAns(s, `${p} ∈ ${K}`) === "ok" || NEW.checkAns(s, `${p} = ${K}`) === "ok");
      if (acc.length !== set0.size || !acc.every(p => set0.has(p))) named.push(`${id} ${acc.join(",") || "—"}`); }
    if (/^coordinates[23]$/.test(s.answerKind)) { const acc = PTP.filter(p => NEW.checkAns(s, `${p} = ${K}`) === "ok");
      if (acc.length) named.push(`${id} ${acc.join(",")}`); }
  }
  console.log(`  p3 назви з умови (intervalSet: префікси, coordinates: «Назва = (…)») — звір з умовою: ${named.join("; ")}`); }

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
// ---------- half: вердикт тесту рівня (engine-diag-half-credit) ----------
// Класифікація незалежна від diagVerdict: «вимаганий вигляд» — поле reduced/mixed/improper/compound є, запис зі знятими ВСІМА полями вигляду
// дає ok (значення правильне), а зі знятими лише decimals/fractionOnly лишається form; «корінь» — запис із √/∛ і checkAns form, зокрема
// дослівна копія виразу з умови (рішення людини 2026-11-01: теж півбала з поясненням).
const halfCounts = { "half вимаганий вигляд (reduced, mixed, improper, compound): OK → HALF": 0, "half корінь не обчислено (√576 при 24, і копія з умови): BAD → HALF": 0 }, halfBad = [];
let halfTotal = 0;
// Стара сторона: якщо в старому learn.js уже є diagVerdict (ревізії від half-credit), порівнюємо вердикт з вердиктом —
// diagAnswerOk там = diagVerdict === OK і кожен HALF виглядав би як «BAD → HALF» (рев'ю engine-evidence-p3, T-1). Тоді будь-яка
// різниця — справжня зміна і категорій half не має: це НЕПОЯСНЕНІ. diagAnswerOk — лише для ревізій до half-credit.
const OLD_VERDICT = typeof OLD.diagVerdict === "function";
if ((OLD_VERDICT || typeof OLD.diagAnswerOk === "function") && typeof NEW.diagVerdict === "function") {
  const V = { [NEW.OK]: "OK", [NEW.HALF]: "HALF", [NEW.BAD]: "BAD" }, VO = OLD_VERDICT ? { [OLD.OK]: "OK", [OLD.HALF]: "HALF", [OLD.BAD]: "BAD" } : null, kinds = NEW.DIAG_ANSWER_KINDS || ["number", "time", "quantity"];
  const strip = (s, ks) => Object.fromEntries(Object.entries(s).filter(([k, x]) => !(ks.includes(k) || (k === "form" && ks.includes("form") && x !== undefined))));
  const probes = s => { const out = new Set(records(s)), K = keyText(s), a = NEW.parseAns(K);
    if ((s.answerKind || "number") === "number" && a) {
      const w = Math.trunc(a.n / a.d), r = Math.abs(a.n % a.d);
      out.add(`${a.n * 2}/${a.d * 2}`); out.add(`${a.n * 3}/${a.d * 3}`); out.add(`${a.n}/${a.d}`); if (w && r) out.add(`${w} ${r}/${a.d}`); if (r && w) out.add(`${w} ${r * 2}/${a.d * 2}`);
      if ([2, 4, 5, 8, 10, 20, 25, 50].includes(a.d)) out.add(String(a.n / a.d).replace(".", ","));
      if (a.d === 1 && a.n > 0 && a.n < 1e4) { out.add(`√${a.n * a.n}`); if (a.n % 2 === 0) out.add(`2√${(a.n / 2) ** 2}`); out.add(`∛${a.n ** 3}`); } }
    if (s.answerKind === "quantity") { const U = NEW.quantityUnits(s); if (U) for (const u of U) { out.add(`${s.answer} ${u}`); } }
    return [...out]; };
  for (const { id, s } of items) {
    if (!kinds.includes(s.answerKind || "number")) continue;
    for (const v of probes(s)) {
      halfTotal++;
      const o = OLD_VERDICT ? VO[OLD.diagVerdict(s, v)] || `?${OLD.diagVerdict(s, v)}` : OLD.diagAnswerOk(s, v) ? "OK" : "BAD", n = V[NEW.diagVerdict(s, v)], r = NEW.checkAns(s, v);
      if (o === n) continue;
      const need = !!(s.reduced || s.mixed || s.form === "improper" || (s.answerKind === "quantity" && s.form === "compound"));
      const isForm = !OLD_VERDICT && o === "OK" && n === "HALF" && r === "form" && need && NEW.checkAns(strip(s, ["reduced", "mixed", "form", "decimals", "fractionOnly"]), v) === "ok"
        && NEW.checkAns(strip(s, ["decimals", "fractionOnly"]), v) === "form";
      const isRoot = !OLD_VERDICT && o === "BAD" && n === "HALF" && r === "form" && /[√∛]|sqrt/.test(v);
      if (isForm) halfCounts["half вимаганий вигляд (reduced, mixed, improper, compound): OK → HALF"]++;
      else if (isRoot) halfCounts["half корінь не обчислено (√576 при 24, і копія з умови): BAD → HALF"]++;
      else halfBad.push(`${id} ${JSON.stringify(s.answer)} ← «${v}»: тест ${o} → ${n} (checkAns ${r})`);
      if (args.includes("--list-cat") && /^half/.test(opt("--list-cat")) && (isForm || isRoot)) console.log(`    ${id} «${v}»: ${o} → ${n}`);
    }
  }
  console.log(`Вердикт тесту рівня (${OLD_VERDICT ? "diagVerdict" : "diagAnswerOk"} → diagVerdict), записів ${halfTotal}:`);
  for (const [c, k] of Object.entries(halfCounts)) console.log(`  ${String(k).padStart(5)}  ${c}`);
  console.log(`  ${String(halfBad.length).padStart(5)}  НЕПОЯСНЕНІ (тест рівня)`);
  halfBad.slice(0, SHOW).forEach(x => console.log("    " + x));
} else console.log("Вердикт тесту рівня: у старому learn.js немає diagAnswerOk (чи в новому diagVerdict) — порівняння пропущено.");
process.exit(unexplained.length || keyBad.length || halfBad.length ? 1 : 0);
