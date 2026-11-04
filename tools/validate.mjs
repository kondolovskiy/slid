#!/usr/bin/env node
// Слід · валідатор контенту. ПОМИЛКИ ламають застосунок або дають дитині неправильну відповідь — їх треба виправити.
// ПОПЕРЕДЖЕННЯ — порушення стилю (style/*.md, style/profiles.json) — їх треба виправити або обґрунтувати в нотатках задачі.
// Запуск: node tools/validate.mjs [--section <id> | --diag <id> | --pool <id>] [--quiet]
import fs from "node:fs"; import path from "node:path";
import { loadContent, GRADED, TYPES, plain, mplain, words, sentences, lessonMetrics, gradeBand, readJSON, ROOT, figCues, IMG_REQUIRED } from "./lib.mjs";
import { analyzeGraph } from "./graph-lib.mjs";
import { euphonyScreen, euphonyIssues, VALIDATE_RULES as EUPHONY_RULES, RULES as EUPHONY_DESC } from "./euphony.mjs";

const args = process.argv.slice(2);
const onlySec = args.includes("--section") ? args[args.indexOf("--section") + 1] : null;
const onlyDiag = args.includes("--diag") ? args[args.indexOf("--diag") + 1] : args.includes("--pool") ? args[args.indexOf("--pool") + 1] : null;
const quiet = args.includes("--quiet");
let content;
try { content = loadContent(); } catch (e) { console.error("ПОМИЛКА ЗАВАНТАЖЕННЯ:", e.message); process.exit(1); }
const { subjects, soon, origin, lab, learn, lang } = content;
const profiles = readJSON("style/profiles.json");
const banned = fs.readFileSync(path.join(ROOT, "style/banned-phrases.txt"), "utf8").split("\n").map(s => s.trim()).filter(s => s && !s.startsWith("#"));
// заборонені фрази шукаємо як цілі слова: «вірно» не має ловити «ймовірно»
const bannedRe = banned.map(b => [b, new RegExp(`(?<![\\p{L}'’ʼ])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}])`, "iu")]);
const errors = [], warnings = [];
const E = (where, msg) => errors.push(`${where}: ${msg}`);
const W = (where, msg) => warnings.push(`${where}: ${msg}`);
// команди формул беремо з рушія (app/math.js, SLID_MATH.commands), щоб списки не розходились (\\lg був у рушії, але не тут)
const MATH_COMMANDS = new Set(content.math?.commands || []);
if (!MATH_COMMANDS.size) { console.error("ПОМИЛКА ЗАВАНТАЖЕННЯ: app/math.js не віддав SLID_MATH.commands"); process.exit(1); }

const allLessonIds = new Map(), allSectionIds = new Set();
const ICONS = fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").match(/const P = \{([\s\S]*?)\n\};/)[1].match(/^\s{2}(\w+):/gm).map(s => s.trim().slice(0, -1));
const FIGS = ["circle","circles","bar","unequal","bars","grid","dots","rem"];
// літери варіантів choice/multi — з рушія (app/app.js OPT_LETTERS), щоб ліміт не розходився з тим, що бачить дитина
const OPT_LETTERS = fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").match(/const OPT_LETTERS="([^"]+)"/)?.[1];
if (!OPT_LETTERS) { console.error("ПОМИЛКА ЗАВАНТАЖЕННЯ: app/app.js не має const OPT_LETTERS"); process.exit(1); }
const SVGS = [...fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").matchAll(/if\(name==="(\w+)"\)/g)].map(m => m[1]);

for (const c of subjects) {
  if (!c.colors?.light?.accent || !c.colors?.dark?.accent) E(`предмет ${c.id}`, "немає colors.light/dark");
  for (const sec of c.sections) {
    const where0 = `${origin[sec.id] || c.id}#${sec.id}`;
    if (allSectionIds.has(sec.id)) E(where0, "id розділу не унікальний"); allSectionIds.add(sec.id);
    if (!Number.isInteger(sec.grade)) E(where0, "немає grade");
    if (!Array.isArray(sec.weeks) || sec.weeks[0] < 1 || sec.weeks[1] > 35 || sec.weeks[0] > sec.weeks[1]) E(where0, "weeks має бути [від, до] у межах 1–35");
    if (!sec.why || sec.why.length < 30) E(where0, "немає змістовного «навіщо» (why)");
    if (!sec.lessons && !sec.plan) W(where0, "розділ без уроків і без плану тем");
    if (!sec.lessons) continue;
    if (!sec.meta) W(where0, "немає meta {author, created, factcheck, teacher}");
    for (const l of sec.lessons) {
      if (allLessonIds.has(l.id)) E(where0, `id уроку ${l.id} уже є в ${allLessonIds.get(l.id)}`);
      allLessonIds.set(l.id, where0);
    }
  }
}
const allBadges = new Set(subjects.flatMap(c => c.badges.map(b => b.id)).concat(["first","perfect","combo5","streak3","multi"]));

// TeX, який учень побачить сирим (engine-math-render-tex-gaps). app/math.js рендерить лише $…$ у HTML-текстах;
// підписи SVG лабораторії — безпечну підмножину (SLID_LAB.svgTexIssues); атрибути (alt, aria-label) — нічого.
const TEX_RAW = /\\(?:[A-Za-z]+|[,;:!])|\{,\}/g;
const outsideMath = str => String(str).replace(/\$\$[\s\S]+?\$\$/g, "").replace(/\$[^$]+\$/g, "");
function strings(o, skip, acc = []) {
  if (typeof o === "string") acc.push(o);
  else if (Array.isArray(o)) o.forEach(v => strings(v, skip, acc));
  else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!skip.includes(k)) strings(v, skip, acc);
  return acc;
}
// Латинська назва функції без лапок у формулі (fix-math-tex-content: 162 місця в g9m4/g10m5) — курсивний добуток s·i·n.
// Поза "…", \text{…} і {…} (у lab {…} — шаблон-вираз, там sin(x) — функція виразу).
const FN_NAME = /(?<![A-Za-z\\])(arcsin|arccos|arctg|arcctg|sin|cos|tg|ctg|log|lg|ln)(?![A-Za-z])/g;
const outsideBraces = f => { let d = 0, o = ""; for (const ch of f) { if (ch === "{") d++; else if (ch === "}") d = Math.max(0, d - 1); else o += d ? " " : ch; } return o; };
const bareFns = x => [...String(x).matchAll(/\$\$?([^$]+)\$\$?/g)].flatMap(m => [...outsideBraces(m[1].replace(/\\text\{[^}]*\}/g, " ").replace(/"[^"]*"/g, " ")).matchAll(FN_NAME)].map(g => g[1]));
function checkTex(S, s) {
  // Усе нижче — ПОМИЛКИ (tools-validate-tex-escapes / engine-render-tex-p3): у змісті 0 випадків, учень побачив би сирий TeX.
  // 1) TeX поза формулою в текстах, що проходять fmt: «,\;» між формулами, «0{,}5» без $ — видно буквально
  const own = strings(s, ["lab", "img", "svg", "fig", "type", "sk", "id", "pre", "u"]);
  const labHtml = s.lab ? [].concat(s.lab.show || [], Object.values(s.lab.params || {}).map(p => p?.label)).filter(x => typeof x === "string") : [];
  const html = own.concat(labHtml);
  const odd = x => (x.match(/\$/g) || []).length % 2 === 1;
  const raw = [...new Set(html.filter(x => !odd(x)).flatMap(x => outsideMath(x).match(TEX_RAW) || []))];
  if (raw.length) E(S, `TeX поза $…$ покажеться буквально: ${raw.join(" ")} — перенеси у формулу або заміни звичайним пробілом/комою`);
  // 1а) непарний $ у будь-якому тексті екрана (items, pairs, steps, note…); title/body/fbText/hint/opts уже перевіряє checkScreen
  const seen = new Set([s.title, s.body, s.steps ? null : s.fbText, s.hint, ...(s.opts || [])]);
  for (const x of new Set(own)) if (odd(x) && !seen.has(x)) E(S, `непарна кількість $ у «${x.slice(0, 60)}» — формула не закрита й покажеться сирою`);
  // 1б) \sqrt без {…} (engine-p3-1101; рев'ю engine-math-sqrt-precedence, P3-4): рушій малює порожній корінь, а «3/2» — окремим дробом
  //     («\sqrt 3/2» → порожній корінь і дріб 3/2). Показник [n] не рахується: «\sqrt[3]{8}» — коректно, «\sqrt[3] 8» — ні
  const bareSqrt = [...new Set(html.flatMap(x => [...x.matchAll(/\$\$?([^$]+)\$\$?/g)].flatMap(m =>
    m[1].replace(/"[^"]*"/g, " ").replace(/\\sqrt\s*\[[^\]]*\]/g, "\\sqrt").match(/\\sqrt(?![A-Za-z])(?!\s*\{)\s*\S{0,6}/g) || [])))];
  if (bareSqrt.length) E(S, `формула: \\sqrt без фігурних дужок (${bareSqrt.join("; ")}) — покажеться порожнім коренем; пиши \\sqrt{3}/2 або √3/2`);
  // 2) lab.show і підписи повзунків рендерить fmt після fill(): непарний $ лишає формулу сирою
  for (const x of labHtml) if (odd(x)) E(S, `lab: непарна кількість $ у «${x}» — формула покажеться сирою${/\$\{/.test(x) ? " (зайвий $ перед шаблоном {…}?)" : ""}`);
  // 3) підписи SVG лабораторії (svgTexIssues: непарний $ там — «warn», але сирий текст однаково видно — помилка)
  //    підписи-шаблони (svgLabels(…, true)) перевіряємо так, як їх намалює fill(): {вираз} — значення, {,} — кома
  if (s.lab) { const tpl = new Set(lab.svgLabels(s.lab, true).map(([p]) => p));
    for (const [path, x] of lab.svgLabels(s.lab)) for (const is of lab.svgTexIssues(x, tpl.has(path))) E(S, `lab.${path} «${x}»: ${is.msg}`); }
  // 3а) назва функції без лапок — попередження (звичайні змінні sin не утворюють, але це не помилка рушія)
  const fns = [...new Set(html.flatMap(bareFns))];
  if (fns.length) W(S, `у формулі назва функції без лапок: ${fns.join(", ")} — покажеться курсивом як добуток літер; пиши "${fns[0]}" (у лапках) або \\${fns[0]}, якщо команда є в app/math.js`);
  // 4) атрибути без рендеру: alt фото й моделі
  for (const [k, x] of [["cap", s.cap], ["lab.alt", s.lab?.alt]]) if (typeof x === "string" && /\$|\\[A-Za-z,;]/.test(x)) E(S, `${k}: формула або TeX потрапляє в атрибут alt/aria-label і показується сирою — пиши звичайним текстом (√2, x₁)`);
}

// TeX з одним «\» у звичайному JS-рядку (tools-validate-tex-escapes): "$|\Delta x|$" → «|Delta x|», "\frac" → «\f»+«rac».
// Після завантаження рядок уже зіпсовано, тож скануємо СИРИЙ текст файлів змісту: у кожному рядковому літералі "…", '…', `…`
// шукаємо непарну кількість «\» перед латинською літерою. Помилка, якщо: escape не існує в JS (\D, \o, \s… — JS мовчки ковтає «\»),
// або це валідний escape (\f \n \r \t \v \b), за яким іде назва TeX-команди (\frac, \neq, \vec, \times, \to, \begin, \right…).
const JS_ESC = /^[bfnrtvux]/;
const TEX_NAMES = new Set([...MATH_COMMANDS, "theta", "beta", "nu", "tg", "ctg", "arcsin", "arccos", "mathrm", "overline", "approx", "neg", "backslash", "bar", "hat", "dot", "right", "rangle", "rceil", "rfloor", "binom", "varphi", "vee", "tau"]);
// Лексер замість одного регулярного виразу (рев'ю engine-render-tex-p3, P3-1): регулярні літерали /…/ пропускаємо
// (у них «\d» — не рядок, а «/» всередині не відкриває коментар), String.raw`…` теж (там «\Delta» лишається «\Delta»),
// а в шаблоні `…${вираз}…` вираз розбираємо як код — вкладені рядки й шаблони перевіряються самі.
// Регулярний вираз чи ділення — за попереднім значущим фрагментом коду, як у самому JS: після «(», «,», «=», «:», «return»… — regex.
// Дві відомі неоднозначності без повного синтаксичного розбору (рев'ю engine-player-a11y-p3, P3-3): «a++ / 2» (після «++» — ділення,
// а тут береться regex до кінця рядка, і рядки за ним випадають) і «if (a) /re/» (після «)» — regex, а тут ділення). У файлах змісту
// (дані) таких конструкцій немає; якщо з'являться — розділи вираз (a++; x = a / 2) або винеси regex у змінну.
const REGEX_AFTER = /^(?:[(,=:[!&|?{};+\-*%<>~^]|return|typeof|case|do|else|in|of|new|delete|void|throw|yield|await)?$/;
function jsLiterals(src) {
  const out = [], n = src.length, isId = ch => /[\w$]/.test(ch); let i = 0;
  const regex = () => { i++; let cls = false;
    while (i < n && src[i] !== "\n") { const ch = src[i]; if (ch === "\\") { i += 2; continue; } i++;
      if (cls) { if (ch === "]") cls = false; } else if (ch === "[") cls = true; else if (ch === "/") break; }
    while (i < n && /[A-Za-z]/.test(src[i])) i++; };
  const template = raw => { let s = i++;
    while (i < n && src[i] !== "`") {
      if (src[i] === "\\") { i += 2; continue; }
      if (src[i] === "$" && src[i + 1] === "{") { if (!raw) out.push({ index: s, text: src.slice(s, i) }); i += 2; code(true); s = i; continue; }
      i++; }
    i++; if (!raw) out.push({ index: s, text: src.slice(s, i) }); };
  function code(inTpl) { let depth = 0, prev = "";
    while (i < n) { const ch = src[i], nx = src[i + 1];
      if (/\s/.test(ch)) { i++; continue; }
      if (ch === "/" && nx === "/") { const e = src.indexOf("\n", i); i = e < 0 ? n : e; continue; }
      if (ch === "/" && nx === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? n : e + 2; continue; }
      if (ch === "/" && REGEX_AFTER.test(prev)) { regex(); prev = ")"; continue; }
      if (ch === '"' || ch === "'") { const s = i++; while (i < n && src[i] !== ch && src[i] !== "\n") i += src[i] === "\\" ? 2 : 1; i++; out.push({ index: s, text: src.slice(s, i) }); prev = ")"; continue; }
      if (ch === "`") { template(/String\s*\.\s*raw\s*$/.test(src.slice(Math.max(0, i - 40), i))); prev = ")"; continue; }
      if (inTpl && ch === "{") depth++;
      if (inTpl && ch === "}") { if (!depth) { i++; return; } depth--; }
      if (isId(ch)) { const s = i; while (i < n && isId(src[i])) i++; prev = src.slice(s, i); continue; }
      prev = ch; i++; } }
  code(false);
  return out;
}
// level: "error" — JS ковтає «\» або це TeX (керівний символ усередині $…$ чи перед «{»: "$\frac{1}{2}$", "\vec{a}");
// "warn" — валідний escape перед TeX-назвою поза формулою ("x\ne", "a\to"): рідко, але може бути навмисним переносом (P3-2).
function jsEscapeIssues(src) {
  const out = [];
  for (const lit of jsLiterals(src))
    for (const e of lit.text.matchAll(/(?<!\\)(?:\\\\)*\\([A-Za-z]+)/g)) { const w = e[1], swallowed = !JS_ESC.test(w); if (!swallowed && !TEX_NAMES.has(w)) continue;
      const end = e.index + e[0].length, inMath = (lit.text.slice(0, e.index).match(/(?<!\\)\$/g) || []).length % 2 === 1;
      out.push({ line: src.slice(0, lit.index + e.index).split("\n").length, cmd: w, swallowed, level: swallowed || inMath || /^[{_^]/.test(lit.text.slice(end)) ? "error" : "warn" }); }
  return out;
}
{ // з --section/--diag/--pool — лише файл(и) цього id: origin розділу, інакше файли, де є `id: "<id>"`
  const only = onlySec || onlyDiag, src = f => fs.readFileSync(path.join(ROOT, f), "utf8");
  const idRe = only && new RegExp(`["']?id["']?\\s*:\\s*["']${only.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`);
  const files = content.files.filter(f => f.startsWith("content/") && (!only || (onlySec && origin[onlySec] ? f === origin[onlySec] : idRe.test(src(f)))));
  for (const f of files) for (const is of jsEscapeIssues(src(f)))
    (is.level === "error" ? E : W)(`${f}:${is.line}`, `«\\${is.cmd}» з одним бекслешем у JS-рядку — ${is.swallowed ? `JavaScript ковтає «\\», учень побачить «${is.cmd}»` : `JavaScript читає «\\${is.cmd[0]}» як керівний символ, учень побачить «${is.cmd.slice(1)}»`}; пиши «\\\\${is.cmd}»${is.level === "warn" ? " (якщо це навмисний перенос чи табуляція — розділи рядок: \"…\\n\" + \"…\")" : ""}`);
}

// answer в уроці чи діагностиці — ті самі правила полів, що в пулі (engine-answer-kinds-p3): answerKind, decimals, form, units лише
// для quantity, time без unit… Беремо саме learn.validatePool, щоб правила не розійшлися: екран загортаємо в пул з однією задачею.
// Поля самого пулу (lesson, lvl, src, steps, sk) підставлено коректні й своя навичка — навички предмета й sk екрана перевіряє checkScreen,
// а предмет може не мати skills зовсім (рев'ю engine-player-a11y-p3, P3-5). «немає title» і «ключ не читається» теж дає checkScreen — не дублюємо.
const POOL_ONLY = [/^немає title$/, /не читається або сам не проходить/, /^навичка sk /];
// у тесті рівня signed для answer перевіряє learn.validate (лише числова) — правило пулу тут не дублюємо
const DIAG_DUP = [/^signed має бути boolean/];
function answerFieldIssues(s, diag = false) {
  const it = { ...s, id: "x", lesson: "l", lvl: 1, sk: "x", src: "s 1", steps: ["."] };
  const pool = { id: "x", section: "x", status: "draft", sources: [{ id: "s", title: "s", url: "https://x" }], items: [it] };
  return learn.validatePool(pool, { sections: new Map([["x", { lessons: ["l"] }]]), skills: { x: {} } })
    .filter(m => m.startsWith("задача 1 «x»: ")).map(m => m.slice("задача 1 «x»: ".length)).filter(m => !POOL_ONLY.some(re => re.test(m)) && !(diag && DIAG_DUP.some(re => re.test(m)))).map(m => "answer: " + m);
}

// Тест рівня (learn.js diagVerdict, engine-diag-half-credit): поле, що вимагає вигляд (reduced, mixed, form improper, compound), без нього
// дає лише півбала (HALF) — тож умова мусить цей вигляд назвати, інакше дитина вгадує, який запис від неї чекають: ПОМИЛКА.
// decimals і fractionOnly у тесті «form» зараховують як правильно (інший запис того самого) — для них лише попередження: вимога, якої
// умова не називає, у тесті нічого не перевіряє. Слова шукаємо в title/body (евристика рев'ю engine-diag-answer-kinds, P3-3)
// compound: «складеним…» або щонайменше дві одиниці самої вправи — скороченням чи словом («в м і см», «у метрах і сантиметрах»);
// не будь-які два слова на -ах («у задачах і прикладах» — не формат). decimals: саме n знаків — «до десятих», «до 0,1», «до цілих»
// (рев'ю engine-lab-aria-p3d, P3-3; engine-practice-pool); «десятковий дріб» без кількості знаків формату не називає.
const UNIT_WORD = { "мм": "міліметр", "см": "сантиметр", "дм": "дециметр", "м": "метр", "км": "кілометр", "г": "грам", "кг": "кілограм",
  "ц": "центнер", "т": "тонн", "с": "секунд", "хв": "хвилин", "год": "годин", "доба": "доб", "коп": "копій", "грн": "гривн" };
const unitNamed = (u, txt) => new RegExp(`(?<![\\p{L}])(?:${u}\\.?(?![\\p{L}])|${UNIT_WORD[u] || u}\\p{L}*)`, "iu").test(txt);
const compoundNamed = (s, txt) => /складен/iu.test(txt) || (Array.isArray(s.units) ? s.units : []).filter(u => unitNamed(u, txt)).length >= 2;
const DEC_NAMED = [/до цілих|до одиниць|цілим числом|без коми/iu, /десятих|до 0,1(?!\d)|(?:одним|один) знак/iu,
  /сотих|до 0,01(?!\d)|(?:двома|два) знак/iu, /тисячних|до 0,001(?!\d)|(?:трьома|три) знак/iu];
const decimalsNamed = (s, txt) => (DEC_NAMED[s.decimals] || /після коми/iu).test(txt);
// [умова поля, чи названо в тексті, повідомлення, true — помилка (поле вимагає вигляд: learn.DIAG_FORM)]
const DIAG_FORMAT = [
  [s => s.answerKind === "quantity" && s.form === "compound", compoundNamed, "form compound — складений запис («2 м 45 см»): напиши в умові «у метрах і сантиметрах» чи «складеним іменованим числом»", true],
  [s => s.reduced, /нескоротн|скорот/iu, "reduced — нескоротний дріб: напиши в умові «нескоротним дробом» чи «скороти»", true],
  [s => s.mixed, /мішан|ціл\p{L}* частин/iu, "mixed — мішане число: напиши в умові «мішаним числом» чи «виділи цілу частину»", true],
  [s => s.fractionOnly, /звичайн\p{L}* дроб|дробом/iu, "fractionOnly — лише звичайний дріб: напиши в умові «звичайним дробом»", false],
  [s => (s.answerKind || "number") === "number" && s.form === "improper", /неправильн\p{L}* дроб/iu, "form improper — неправильний дріб: напиши в умові «неправильним дробом»", true],
  [s => s.decimals !== undefined, decimalsNamed, "decimals — кількість знаків після коми: напиши в умові «з одним знаком після коми» чи «до десятих»", false]];
const DIAG_FMT_ERR = "тест рівня: умова не називає вигляду, який вимагає поле (без нього — лише півбала)";
const DIAG_FMT_WARN = "тест рівня: вимогу запису умова не називає — «form» тут зараховується як правильно, вимога нічого не перевіряє";
function diagFormatIssues(s) {
  const txt = plain([s.title, s.body].filter(x => typeof x === "string").join(" "));
  return DIAG_FORMAT.filter(([when, re]) => when(s) && !(typeof re === "function" ? re(s, txt) : re.test(txt)))
    .map(([, , msg, err]) => ({ err, msg: `${err ? DIAG_FMT_ERR : DIAG_FMT_WARN} — ${msg}` }));
}

// перевірка одного екрана; diag — завдання діагностики (без фідбеку: дитина не бачить, правильно чи ні)
// pool — задача пулу: її поля answer уже перевірив learn.validatePool
// tools-math-fig-audit: умова прямо посилається на рисунок («на рисунку», «за графіком», «на кресленні»), а ілюстрації немає
// ні на екрані, ні (в уроці) на попередньому екрані — попередження; повний перелік із геометрією без рисунка — tools/fig-audit.mjs
function figRef(S, s, prev = null) {
  const cue = figCues(s, prev);
  if (cue?.level === "ref" && !cue.ill && !cue.prevIll) W(S, `умова посилається на рисунок («${cue.ref}»), а ілюстрації (fig, img, svg, lab) немає — додай рисунок точно за умовою або перепиши умову`);
}
// заборонені фрази, яких дитина не бачить як зразок (engine-lang-p3, п. 6): у <s>…</s> (закреслене — помилка, яку урок виправляє),
// у неправильних варіантах gaps і в цілях та хибних групах pick («Знайди помилку»: [вірно], [!на протязі]) — не рахуються
const stripS = t => typeof t === "string" ? t.replace(/<s>[\s\S]*?<\/s>/gi, " ") : t;
function bannedText(s, txt) {
  if (!/<s>/i.test(txt) && !["gaps", "pick"].includes(s.type)) return txt;
  const noteTxt = typeof s.note === "string" ? s.note : s.note?.text;
  const exText = s.type === "gaps" ? lang.readText(s) : s.type === "pick" && typeof s.text === "string" ? s.text.replace(/\[[^\]]*\]/g, " ") : s.text;
  return [s.title, s.body, noteTxt, s.fbText, s.fbOk, s.fbBad, s.hint, exText, ...(s.opts || []), ...(s.items || []).flat()].filter(x => typeof x === "string").map(stripS).join(" ");
}
// пояснення посилається на місце варіанта («у другому варіанті», «варіант № 2», «варіант Б») — рушій може перемішувати варіанти (engine-lang-p3, п. 18)
const OPT_NUM_RE = /(?<![\p{L}])(?:(?:[Пп]ерш|[Дд]руг|[Тт]рет|[Чч]етверт|[Пп]['’ʼ]?ят|[Шш]ост|[Оо]станн)\p{L}*\s+(?:\p{L}+\s+)?варіант\p{L}*|[Вв]аріант\p{L}*\s+(?:№\s*\d+|[А-ГҐДЕ](?![\p{L}])))/u;   // «Варіант 120» у математиці — значення варіанта, не номер
const OPT_TYPES = ["choice", "multi", "gaps", "pick", "sort", "order"];
// милозвучність у/в, і/й, з/із/зі (УП § 23–25; engine-lang-p3, п. 15): лише правила з малим шумом, лише мовні предмети; решта — tools/euphony.mjs
const EUPHONY = { ukr: true };
const euphonyWarn = (S, list) => { for (const x of list) if (EUPHONY_RULES.has(x.rule)) W(S, `милозвучність: «${x.ctx}» — ${EUPHONY_DESC[x.rule]} (якщо так навмисно — обґрунтуй у нотатках; повний звіт: node tools/euphony.mjs)`); };
function checkScreen(S, s, c, diag, pool = false) {
  if (!TYPES.includes(s.type)) return E(S, `невідомий тип «${s.type}»`);
  if (!s.title && !(diag && !pool)) E(S, "немає title");   // у тесті рівня «немає title» уже дає learn.validate — не дублюємо (рев'ю diag-answer-kinds, P3-4)
  const noteTxt = typeof s.note === "string" ? s.note : s.note?.text;
  const txt = [s.title, s.body, noteTxt, s.fbText, s.fbOk, s.fbBad, s.hint, s.text, ...(s.opts || []), ...(s.items || []).flat()].filter(x => typeof x === "string").join(" ");
  if (/\$\{/.test(txt)) E(S, "у тексті лишилось «${» — шаблонний рядок з'їв формулу");
  for (const t of [s.title, s.body, s.steps ? null : s.fbText, s.hint, ...(s.opts || [])].filter(Boolean)) if (((String(t).match(/\$/g) || []).length) % 2) E(S, "непарна кількість $ — формула не закрита");
  for (const formula of txt.matchAll(/\$\$?([\s\S]+?)\$\$?/g)) for (const m of formula[1].matchAll(/\\([A-Za-z]+)/g)) if (!MATH_COMMANDS.has(m[1])) W(S, `формула містить непідтриману команду \\${m[1]}`);
  for (const [b, re] of bannedRe) if (re.test(bannedText(s, txt))) W(S, `заборонена фраза «${b}» (style/banned-phrases.txt)`);
  for (const [k, v] of [["fbText", s.fbText], ["fbBad", s.fbBad], ["fbOk", s.fbOk], ["hint", s.hint]]) { const m = typeof v === "string" && plain(v).match(OPT_NUM_RE);
    if (m && OPT_TYPES.includes(s.type)) W(S, `${k} посилається на номер варіанта («${m[0].trim()}») — рушій може перемішати варіанти; назви сам варіант`); }
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(txt)) W(S, "емодзі в тексті уроку");
  if (EUPHONY[c.id]) euphonyWarn(S, euphonyScreen(s, { opts: false }));
  if (s.img && !fs.existsSync(path.join(ROOT, s.img))) E(S, `немає файлу ${s.img}`);
  if (s.img && !s.cap) E(S, "у фото має бути підпис cap (що, де, коли)");
  if (s.svg && !SVGS.includes(s.svg)) E(S, `немає SVG-ілюстрації «${s.svg}» у svgFig()`);
  if (s.fig && !FIGS.includes(s.fig.kind)) E(S, `невідомий fig.kind «${s.fig.kind}»`);
  if (s.lab) for (const m of lab.validate(s.lab, s)) E(S, "lab: " + m);
  // точка drag, яку не рухає ні миша, ні клавіатура (рев'ю engine-player-a11y-followup P3-1) — попередження: модель працює
  if (s.lab) for (const m of lab.dragIssues(s.lab)) W(S, "lab: " + m);
  checkTex(S, s);
  for (const key of ["hideCount", "hideDen"]) if (s[key] !== undefined && typeof s[key] !== "boolean") E(S, `${key}: потрібне true/false`);
  if ((s.type === "explore" || s.type === "lab") && !s.lab) E(S, `${s.type} потребує поле lab (інтерактивну модель)`);
  if ([s.img, s.svg, s.fig, s.lab].filter(Boolean).length > 1) E(S, "на екрані може бути лише одна ілюстрація: img, svg, fig або lab");
  if (s.note !== undefined) {
    const n = typeof s.note === "string" ? { text: s.note } : s.note;
    if (!n || typeof n.text !== "string" || !n.text.trim()) E(S, "note: потрібен текст (рядок або { text, label?, links? })");
    for (const l of n?.links || []) if (!Array.isArray(l) || l.length !== 2 || !/^https:\/\//.test(l[1] || "")) E(S, "note.links: кожне посилання — [назва, https://…]");
  }
  if (s.pre && !allLessonIds.has(s.pre)) E(S, `pre: немає уроку ${s.pre}`);
  if (s.sk && !c.skills[s.sk]) E(S, `навичка «${s.sk}» не оголошена в content/subjects/${c.id}.js`);
  if (GRADED.includes(s.type) && !s.poll && !s.hyp && !diag) {
    if (!s.sk) W(S, "завдання без навички sk — не потрапить у прогрес");
    const expl = String((s.fbOk || "") + " " + (s.fbText || "")).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!s.fbText || expl.length < 30) E(S, "fbOk + fbText мають пояснювати ЧОМУ (разом ≥ 30 символів)");
    if (!s.fbOk) W(S, "немає fbOk");
  }
  if ((s.poll || s.hyp) && !s.fbTitle) E(S, "poll/hyp потребує fbTitle");
  if ((s.type === "choice" || s.type === "multi") && (s.opts || []).length > OPT_LETTERS.length) E(S, `${s.opts.length} варіантів — більше, ніж літер (${OPT_LETTERS.length}): частина варіантів залишиться без літери`);
  switch (s.type) {
    case "choice": if (!s.poll && !s.hyp && !(Number.isInteger(s.correct) && s.correct >= 0 && s.correct < (s.opts || []).length)) E(S, "correct поза межами opts");
      if ((s.opts || []).length < 2 || s.opts.length > 5) E(S, "варіантів має бути 2–5"); break;
    case "multi": if (!Array.isArray(s.correct) || !s.correct.length || s.correct.some(k => k < 0 || k >= s.opts.length)) E(S, "correct: непорожній масив індексів opts");
      if (s.correct?.length === s.opts?.length) W(S, "усі варіанти правильні — завдання нічого не перевіряє"); break;
    case "sort": if (!Array.isArray(s.bins) || s.bins.length < 2) E(S, "bins: щонайменше 2 кошики");
      (s.items || []).forEach(([t, b]) => { if (!(b >= 0 && b < s.bins.length)) E(S, `елемент «${t}» має неіснуючий кошик ${b}`); });
      if (new Set((s.items || []).map(i => i[1])).size < 2) W(S, "усі елементи в одному кошику"); break;
    case "order": { const n = (s.items || []).length, sh = s.shuffle || [];
      if (sh.length !== n || [...sh].sort((a, b) => a - b).some((v, k) => v !== k)) E(S, "shuffle має бути перестановкою індексів items");
      if (sh.every((v, k) => v === k)) E(S, "shuffle показує вже правильний порядок"); break; }
    case "slider": if (!(s.answer >= s.min && s.answer <= s.max)) E(S, "answer поза [min; max]"); if (!s.unit) W(S, "немає unit"); break;
    case "align": { const n = s.ref.to - s.ref.from + 1; if (s.sample.len > n || s.sample.endYear > s.ref.to || s.sample.endYear - s.sample.len + 1 < s.ref.from) E(S, "зразок не вміщується в еталон"); break; }
    case "shade": if (!(s.target >= 1 && s.target <= s.n)) E(S, "target має бути 1..n"); if (!["bar","circle"].includes(s.shape)) E(S, "shape: bar | circle"); break;
    case "numline": if (!(Number.isInteger(s.answer) && s.answer >= 0 && s.answer <= s.max * s.den)) E(S, "answer — ціле число поділок від 0 до max·den"); break;
    case "number": if (!(typeof s.answer === "number" && isFinite(s.answer) && Math.abs(s.answer) < 1e9)) E(S, "answer — скінченне число (десяткові й від'ємні дозволені)");
      if (s.tol != null && !(Number.isFinite(s.tol) && s.tol >= 0)) E(S, "tol — скінченне невід'ємне число (допустима похибка)"); break;
    case "answer": if (learn.checkAns(s, learn.keyInput(s)) !== "ok") E(S, "answer: число або рядок («7/12», «2 1/3», «-3,5»), що сам проходить перевірку (величина quantity — у складеному записі)");
      // у діагностиці — лише коли тип answer там дозволено (learn.DIAG_TYPES); інакше вже є помилка «тип не дозволено в тесті»
      if (!pool && (!diag || learn.DIAG_TYPES.includes("answer"))) for (const m of answerFieldIssues(s, diag)) E(S, m);
      if (diag && !pool) for (const m of diagFormatIssues(s)) (m.err ? E : W)(S, m.msg); break;
    case "gaps": case "pick": case "stress": case "word": case "split":
      for (const m of lang.issues(s)) E(S, m);
      for (const m of lang.warnings ? lang.warnings(s) : []) W(S, m);
      if (["gaps", "pick"].includes(s.type) && typeof s.text !== "string") E(S, `${s.type}: потрібне поле text`);
      // pick: слова з тексту стають кнопками, тож HTML-теги в text дали б кнопки «b», «br» (рушій екранує text)
      // hyp — здогадка без оцінки (engine-lang-p3, п. 2): плеєр не позначає й не зараховує, лише показує fbTitle і fbText; poll — ні:
      // S.polls зберігає стан (Set для pick/split стає {} у JSON), а outro pollKey показав би «undefined»
      if (s.poll) E(S, `${s.type}: poll лише для choice — відповідь мовної вправи не збережеться для outro (здогадка без оцінки — hyp: true)`);
      if (s.type === "pick" && /<[^>]+>|&#?\w+;/i.test(s.text || "")) E(S, "pick: у text не може бути HTML — пиши простим текстом (пояснення — у body)");
      if (s.type === "split" && /[<>&]/.test([].concat(s.word).join(""))) E(S, "split: у word не може бути HTML");
      break;
    case "fracin": if (!(Number.isInteger(s.answer) && s.answer >= 0 && s.answer < 1e6)) E(S, "answer — ціле невід'ємне число (поле приймає лише цифри)");
      if (!(s.expr && s.den)) E(S, "fracin потребує expr і den"); break;
  }
  // довжина речень
  const sentLong = sentences(mplain([s.body].join(" "))).filter(x => words(x).length > 25);   // mplain: без алфавіту й транскрипцій (п. 11, 13)
  if (sentLong.length) W(S, `дуже довге речення (${words(sentLong[0]).length} слів): «${sentLong[0].slice(0, 60)}…»`);
}

// credits: [назва, автор, ліцензія, https://…] — правило змісту: лише https (рев'ю engine-render-tex-p3, P3-5). Рушій (urlAttr)
// http:// пропускає як є (незахищене посилання), а решту (відносний шлях, javascript:) мовчки робить href="#" (рев'ю a11y-p3, P3-4)
function creditIssues(list) {
  if (list === undefined) return [];
  if (!Array.isArray(list)) return ["credits: потрібен масив записів [назва, автор, ліцензія, https://…]"];
  return list.flatMap((x, k) => !Array.isArray(x) || x.length < 4 || x.slice(0, 3).some(v => typeof v !== "string" || !v.trim()) ? [`credits ${k + 1}: потрібно [назва, автор, ліцензія, https://…]`]
    : /^https:\/\/[^\s/]+\.[^\s]+$/.test(x[3]) ? [] : [`credits ${k + 1} «${String(x[0]).slice(0, 40)}»: посилання «${x[3]}» — лише https://… (${/^http:\/\//i.test(String(x[3])) ? "http:// — незахищене посилання" : "застосунок покаже його як href=\"#\""})`]);
}
// кредити, оголошені в самому предметі (SLID.subject), а не в розділі
if (!onlySec && !onlyDiag) for (const c of subjects) { const own = new Set(c.sections.flatMap(s => s.credits || []));
  creditIssues(c.credits.filter(x => !own.has(x))).forEach(m => E(`предмет ${c.id}`, m)); }

// D-027: у кожному уроці предмета — хоча б одне справжнє зображення (img: фото, репродукція, документ).
// Схеми svg/fig не зараховуються. Для історії — помилка (усі уроки доповнено; регресійний тест: tools/test-validate.mjs).
// IMG_REQUIRED (D-027, D-044) — з tools/lib.mjs: той самий перелік бере шаблон задачі автора в make-tasks.mjs
for (const c of subjects) for (const sec of c.sections) {
  if (onlyDiag) continue;
  if (onlySec && sec.id !== onlySec) continue;
  const file = origin[sec.id] || c.id;
  // розділ плану без уроків: його credits не перевіряє ні цей цикл, ні цикл предмета (вони в own) — рев'ю a11y-p3, P3-4
  // requires і badges перевіряємо й у розділі плану (рев'ю p3c, P3-3): у плані requires може вести на ще не написаний урок — попередження,
  // значок без уроків не отримати — попередження; неіснуюча іконка — помилка, як і в розділі з уроками
  const plan = !sec.lessons;
  (sec.requires || []).forEach(r => { if (!allLessonIds.has(r)) (plan ? W : E)(`${file}#${sec.id}`, `requires: немає уроку ${r}${plan ? " (розділ плану: урок ще не написано?)" : ""}`); });
  for (const b of sec.badges || []) { if (!ICONS.includes(b.icon)) E(`${file}#${sec.id}`, `значок ${b.id}: немає іконки «${b.icon}»`);
    if (plan) W(`${file}#${sec.id}`, `значок ${b.id}: у розділі плану без уроків його не отримати`); }
  creditIssues(sec.credits).forEach(m => E(`${file}#${sec.id}`, m));
  if (plan) continue;
  for (const l of sec.lessons) {
    const L = `${file}#${l.id}`;
    if (!l.title || !l.why || !l.icon) E(L, "уроку потрібні title, why, icon");
    // рушій уже дає aria-label простим текстом (attr), але назву видно й у шторці, і в плані — пиши без TeX (у змісті 0 випадків → помилка)
    if (/\$|\\[A-Za-z,;]/.test(l.title || "")) E(L, "формула або TeX у назві уроку — пиши назву звичайним текстом (√2, x₁)");
    if (l.icon && !ICONS.includes(l.icon)) E(L, `немає іконки «${l.icon}» (див. const P в app/app.js)`);
    if (!["draft","verified","approved"].includes(l.status)) E(L, "status має бути draft | verified | approved");
    if (l.badge && !allBadges.has(l.badge)) E(L, `badge «${l.badge}» не оголошено`);
    if (!l.outro?.text || !Array.isArray(l.outro.learned) || l.outro.learned.length < 2 || l.outro.learned.length > 4) E(L, "outro: потрібні text і 2–4 пункти learned");
    if (l.screens?.[0]?.type !== "intro") E(L, "перший екран має бути intro (проблема, з якої починається урок)");
    if (EUPHONY[c.id]) euphonyWarn(L, [l.title, l.why, l.outro?.text, ...(l.outro?.learned || [])].filter(t => typeof t === "string").flatMap(euphonyIssues));
    l.screens.forEach((s, i) => { checkScreen(`${L} екран ${i + 1} (${s.type})`, s, c, false); figRef(`${L} екран ${i + 1} (${s.type})`, s, l.screens[i - 1]); });
    // профіль складності
    const m = lessonMetrics(l), p = profiles[c.id]?.[gradeBand(sec.grade)] || profiles._default[gradeBand(sec.grade)];
    for (const [k, [lo, hi]] of Object.entries(p)) if (m[k] < lo || m[k] > hi) W(L, `${k}=${m[k]} поза профілем [${lo}; ${hi}] для ${c.id}, ${gradeBand(sec.grade)} кл.`);
    if (!l.boss && !l.screens.some(s => s.hint)) W(L, "жодної підказки hint у звичайному уроці");
    if (IMG_REQUIRED[c.id] && !l.screens.some(s => s.img)) (IMG_REQUIRED[c.id] === "error" ? E : W)(L, "урок без зображення img (D-027: обов'язкове фото чи джерело з відкритою ліцензією; svg/fig не рахуються)");
    // правильна відповідь не має стояти завжди на тому самому місці — інакше її вгадують
    const ch = l.screens.filter(s => s.type === "choice" && !s.poll && !s.hyp && Number.isInteger(s.correct));
    if (ch.length >= 3) { const cnt = {}; ch.forEach(s => cnt[s.correct] = (cnt[s.correct] || 0) + 1); const [k, n] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0];
      if (n / ch.length > 0.6) W(L, `у ${n} з ${ch.length} завдань choice правильний варіант — ${OPT_LETTERS[k]}: переставляй варіанти`); }
  }
}
// діагностика класів (SLID.diag, docs/CONTENT_SCHEMA.md §9)
// уроки й розділи лише свого предмета: план веде тільки на них, а baseline перевіряє, чи є в предметі молодші класи
const subjectMaps = c => {
  const lessons = new Map(), sections = new Map();
  for (const sec of c.sections) { sections.set(sec.id, { grade: sec.grade, lessons: (sec.lessons || []).filter(l => !l.boss).map(l => l.id) }); (sec.lessons || []).forEach(l => lessons.set(l.id, { grade: sec.grade })); }
  return { lessons, sections };
};
const diagIds = new Set();
for (const c of subjects) for (const d of c.diags || []) {
  if (onlySec || (onlyDiag && d.id !== onlyDiag)) continue;
  const D = `content/${c.id}/diag-g${d.grade}.js#${d.id}`;
  if (diagIds.has(d.id)) E(D, "id діагностики не унікальний"); diagIds.add(d.id);
  if (c.diags.filter(x => x.grade === d.grade).length > 1) E(D, `для ${d.grade} класу вже є діагностика з цього предмета`);
  for (const m of learn.validate(d, { ...subjectMaps(c), skills: c.skills })) E(D, m);
  if (!d.meta) W(D, "немає meta {author, created, factcheck, teacher}");
  (d.items || []).forEach((s, i) => { if (TYPES.includes(s.type)) { checkScreen(`${D} завдання ${i + 1} (${s.type})`, s, c, true); figRef(`${D} завдання ${i + 1} (${s.type})`, s); } });
  const ch = (d.items || []).filter(s => s.type === "choice" && Number.isInteger(s.correct));
  if (ch.length >= 4) { const cnt = {}; ch.forEach(s => cnt[s.correct] = (cnt[s.correct] || 0) + 1); const [k, n] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0];
    if (n / ch.length > 0.5) W(D, `у ${n} з ${ch.length} завдань choice правильний варіант — ${OPT_LETTERS[k]}: переставляй варіанти`); }
  if ((d.items || []).length > 32) W(D, `${d.items.length} завдань — тест задовгий (орієнтир — до 30)`);
}
// пули задач для тренування (SLID.pool, docs/CONTENT_SCHEMA.md §10)
const sectionLessons = new Map();
for (const c of subjects) for (const sec of c.sections) sectionLessons.set(sec.id, { grade: sec.grade, lessons: (sec.lessons || []).map(l => l.id) });
for (const c of subjects) for (const p of c.pools || []) {
  if (onlySec || (onlyDiag && p.id !== onlyDiag)) continue;
  const D = `content/${c.id}/pool#${p.id}`; diagIds.add(p.id);
  for (const m of learn.validatePool(p, { sections: sectionLessons, skills: c.skills })) E(D, m);
  if (!p.meta) W(D, "немає meta {author, created, factcheck, teacher}");
  // генератор (gen): екран перевіряємо на першому наборі значень — так, як його побачить дитина (правила gen — learn.validatePool)
  (p.items || []).forEach((s0, i) => { const s = s0.gen !== undefined ? learn.genInstance(s0, "validate", 0) || s0 : s0;
    if (TYPES.includes(s.type)) { checkScreen(`${D} задача ${i + 1} «${s.id}» (${s.type})`, { ...s, fbText: (s.steps || []).join(" ") }, c, true, true); figRef(`${D} задача ${i + 1} «${s.id}» (${s.type})`, s); } });
  const per = {}; (p.items || []).forEach(s => per[s.lesson] = (per[s.lesson] || 0) + 1);
  for (const [l, n] of Object.entries(per)) if (n < 5) W(D, `урок ${l}: лише ${n} задач — для чергування треба щонайменше 5`);
}
if (onlyDiag && !diagIds.has(onlyDiag)) E(`--diag/--pool ${onlyDiag}`, "такої діагностики чи пулу немає");
for (const s of soon) if (!s.colors?.light?.accent) E(`catalog ${s.id}`, "немає colors.light.accent");

// Skill Graph (docs/design/skill-graph-math.md §3, docs/CONTENT_SCHEMA.md §11; правила — tools/graph-lib.mjs).
// Помилки графа (V1а, V2, V3, V5, V6а, V7а, V10а) — ПОМИЛКИ; дрейф (V1б, V4, V6б, V7б, V8 у лініях) і V10б — попередження:
// дрейф виправляє лише куратор у graph.js, тож автора й CI він не блокує (блокує graph-report --strict). V8 поза лініями й V9 — лише graph-report.
// З --section/--diag/--pool — лише знахідки, що стосуються уроків цього розділу, цього тесту чи пулу (R4-P3-3): чужа помилка куратора
// не виглядає помилкою автора (AGENTS.md §7, «свій розділ»). Повний прогін і CI бачать усі.
{ const secLessons = new Set(onlySec ? subjects.flatMap(c => c.sections.filter(x => x.id === onlySec).flatMap(x => (x.lessons || []).map(l => l.id))) : []);
  const inScope = is => onlySec ? is.lessons.some(l => secLessons.has(l)) : onlyDiag ? is.diags.includes(onlyDiag) || is.pools.includes(onlyDiag) : true;
  if (!onlySec && !onlyDiag) for (const x of content.graphs || []) if (!subjects.some(c => c.id === x.subject))
    E(content.graphOrigin?.[x.subject] || "SLID.graph", `граф V1а: невідомий предмет «${x.subject}» — граф не прив'язано`);
  // У --section/--diag/--pool помилка самого graph.js (куратор) стосується уроків розділу, але автор її не виправить (рев'ю G1, P3-4):
  // вона йде попередженням з позначкою, тож «0 помилок» розділу (AGENTS.md §7, «свій розділ») досяжне. Повний прогін і CI — ПОМИЛКА.
  const scoped = !!(onlySec || onlyDiag);
  for (const c of subjects) { const GF = content.graphOrigin?.[c.id] || `content/${c.id}/graph.js`;
    for (const is of analyzeGraph(c, { learn, origin, poolOrigin: content.poolOrigin, diagOrigin: content.diagOrigin, graphFile: GF }).issues) {
      if (!inScope(is)) continue;
      if (is.cls === "error" && scoped && is.where.startsWith(GF)) W(is.where, `помилка графа (куратор), не блокує розділ — ${is.msg}`);
      else (is.cls === "error" ? E : W)(is.where, is.msg); } } }

const out = { date: new Date().toISOString(), errors, warnings };
fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "reports/validate.json"), JSON.stringify(out, null, 2) + "\n");
if (!quiet || errors.length) errors.forEach(e => console.log("ПОМИЛКА  " + e));
if (!quiet) warnings.forEach(w => console.log("увага    " + w));
console.log(`\n${errors.length} помилок, ${warnings.length} попереджень${onlySec ? ` (розділ ${onlySec})` : onlyDiag ? ` (${args.includes("--pool") ? "пул" : "діагностика"} ${onlyDiag})` : ""}. Звіт: reports/validate.json`);
process.exit(errors.length ? 1 : 0);
