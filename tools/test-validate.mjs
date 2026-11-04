#!/usr/bin/env node
// Слід · регресійні тести валідатора (tools/validate.mjs) на синтетичних фікстурах.
// Зараз: D-027 — урок історії (hist і world, D-044) без справжнього зображення img — ПОМИЛКА (не попередження), і для boss теж; svg/fig не рахуються; інші предмети не зачеплено.
// TeX, що показався б сирим: {,}, \; поза формулою, непарний $ (items, steps пулу), підписи SVG лабораторії, alt, назва уроку — ПОМИЛКИ;
// назва функції без лапок ($sin x$) — попередження (engine-math-render-tex-gaps, engine-render-tex-p3).
// TeX з одним «\» у JS-рядку ("\Delta", "\frac") — помилка за сирим текстом файлу (tools-validate-tex-escapes).
// Повний прогін validate без --section на фікстурному дереві (tools-test-validate-p3).
// Як працює: копіює tools/, app/, style/ і метадані предметів у тимчасову теку, додає фікстурний розділ
// і запускає справжній validate.mjs (--section) як окремий процес — перевіряється сам валідатор, а не його копія.
// Запуск: node tools/test-validate.mjs   (без залежностей)
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync } from "node:child_process"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + extra : ""}`); } };

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "slid-test-validate-"));
process.on("exit", () => fs.rmSync(tmp, { recursive: true, force: true }));
for (const d of ["tools", "app", "style"]) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true });
fs.mkdirSync(path.join(tmp, "content/subjects"), { recursive: true });
for (const s of ["hist", "math", "world", "ukr"]) fs.copyFileSync(path.join(ROOT, `content/subjects/${s}.js`), path.join(tmp, `content/subjects/${s}.js`));
// файл-«фото» має існувати: валідатор перевіряє шлях img
fs.mkdirSync(path.join(tmp, "img/fx"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "icons/icon-192.png"), path.join(tmp, "img/fx/photo.png"));

const D027 = "урок без зображення img (D-027";
// мінімальний коректний урок; illus — ілюстрація на інформаційному екрані
const lesson = (id, illus, boss = false) => ({
  id, title: "Фікстура", ...(boss ? { boss: true } : {}), why: "Перевірити правило про зображення.", icon: "pot", status: "draft",
  outro: { text: "Готово.", learned: ["Перше", "Друге"] },
  screens: [
    { type: "intro", title: "Початок", body: "Звідки ми знаємо про минуле?" },
    { type: "info", title: "Джерело", body: "Знахідки розповідають про людей.", ...illus },
    { type: "choice", title: "Питання", body: "Що таке джерело?", opts: ["Слід минулого", "Вигадка"], correct: 0,
      fbText: "Джерело — будь-який слід минулого.", hint: "Згадай попередній екран." }]
});
const IMG = { img: "img/fx/photo.png", cap: "Фото для фікстури" };
const CASES = [
  // [назва, предмет, ілюстрація, чи має бути помилка D-027]
  ["hist без жодної ілюстрації", "hist", {}, true],
  ["hist з img", "hist", IMG, false],
  ["hist лише з svg", "hist", { svg: "decay" }, true],
  ["hist лише з fig", "hist", { fig: { kind: "bar", parts: 4, filled: 1 } }, true],
  ["math без img (правило лише для історії)", "math", {}, false],
  ["hist boss без img", "hist", {}, true, true],
  ["hist boss з img", "hist", IMG, false, true],
  ["world без img (D-044: правило й для всесвітньої історії)", "world", {}, true],
  ["world з img", "world", IMG, false],
  ["world boss без img", "world", {}, true, true]];

CASES.forEach(([name, subj, illus, expectErr, boss], i) => {
  const id = `fx${i}`, dir = path.join(tmp, "content", subj);
  // по одному фікстурному розділу за прогін: прибрати розділи попередніх випадків
  for (const s of ["hist", "math", "world"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const sec = { id, grade: 5, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: правило D-027 про зображення.",
    meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null }, lessons: [lesson(`${id}l1`, illus, boss)] };
  fs.writeFileSync(path.join(dir, `g5-${id}.js`), `SLID.section(${JSON.stringify(subj)}, ${JSON.stringify(sec, null, 1)});\n`);
  const r = spawnSync(process.execPath, [path.join(tmp, "tools/validate.mjs"), "--section", id, "--quiet"], { cwd: tmp, encoding: "utf8" });
  let rep = null;
  try { rep = JSON.parse(fs.readFileSync(path.join(tmp, "reports/validate.json"), "utf8")); } catch {}
  ok(rep, `${name}: валідатор не записав звіт`, (r.stdout || "") + (r.stderr || ""));
  if (!rep) return;
  fs.rmSync(path.join(tmp, "reports/validate.json"));
  const errD = rep.errors.filter(e => e.includes(D027)), warnD = rep.warnings.filter(w => w.includes(D027));
  const other = rep.errors.filter(e => !e.includes(D027));
  ok(other.length === 0, `${name}: фікстура має бути коректною, крім D-027`, other.join("\n  "));
  ok(warnD.length === 0, `${name}: D-027 не має бути попередженням`, warnD.join("\n  "));
  if (expectErr) {
    ok(errD.length === 1 && errD[0].includes(`#${id}l1`), `${name}: очікувалась помилка D-027 для ${id}l1`, JSON.stringify(rep.errors));
    ok(r.status === 1, `${name}: validate має завершитись з кодом 1, отримано ${r.status}`);
  } else {
    ok(errD.length === 0, `${name}: зайва помилка D-027`, errD.join("\n  "));
    ok(r.status === 0, `${name}: validate має завершитись з кодом 0, отримано ${r.status}`, r.stdout);
  }
});
// фікстури world (D-044) не мають просочитися в подальші прогони, де world не очікують
fs.rmSync(path.join(tmp, "content", "world"), { recursive: true, force: true });

// TeX, який учень побачив би сирим (engine-math-render-tex-gaps): {,} рендериться, SVG-підписи — підмножина, решта — помилка/попередження.
const texLesson = (id, { title = "Фікстура", body = "Скільки буде $2 + 2$?", lab, cap, extra } = {}) => ({
  id, title, why: "Перевірити правила про TeX.", icon: "pot", status: "draft", outro: { text: "Готово.", learned: ["Перше", "Друге"] },
  screens: [
    { type: "intro", title: "Початок", body: "Як записати число?" },
    lab ? { type: "explore", title: "Модель", body: "Покрути $a$.", lab } : { type: "info", title: "Теорія", body, ...(cap ? { img: "img/fx/photo.png", cap } : {}) },
    { type: "choice", title: "Питання", body, opts: ["4", "5"], correct: 0, sk: Object.keys(MATH_SKILLS)[0],
      fbOk: "Так.", fbText: "Два і два — це чотири, бо додаємо одиниці.", hint: "Порахуй на пальцях." },
    ...(extra ? [{ sk: Object.keys(MATH_SKILLS)[0], fbOk: "Так.", fbText: "Пояснення, чому саме так, для фікстури.", ...extra }] : [])]
});
const sortScr = items => ({ type: "sort", title: "Розклади", body: "Куди що?", bins: ["Перше", "Друге"], items });
const plane = extra => ({ kind: "plane", view: [-5, 5, -5, 5], params: { a: { min: 0, max: 4, start: 1 } }, ...extra });
const pt = label => plane({ points: { P: { x: "a", y: "1", label } } });
const TEX = "TeX поза", ODD = "непарна кількість $";
const TEX_CASES = [
  // [назва, параметри уроку, підрядок очікуваної помилки або null, підрядок очікуваного попередження або null]
  ["{,} у формулі — рендериться", { body: "Маємо $k = 0{,}5$ і $M(-0{,}6;\\,0{,}8)$." }, null, null],
  ["\\; між формулами — помилка", { body: "Пари: $1 \\to 4$,\\; $2 \\to 5$." }, TEX, null],
  ["{,} поза формулою — помилка", { body: "Число 0{,}5 без доларів." }, TEX, null],
  ["підписи SVG з підмножини — чисто", { lab: plane({ points: { P: { x: "a", y: "1", label: "$x_1$" }, Q: { x: "1", y: "2", label: "$(1;\\,-4)$" } }, segs: [{ a: "P", b: "Q", label: "$\\Delta x$" }] }) }, null, null],
  ["{,} у підписі SVG — не шаблон", { lab: pt("$0{,}5$") }, null, null],
  ["\\sqrt у підписі SVG — помилка", { lab: pt("$\\sqrt{2}$") }, "у підписах SVG", null],
  ["непарний $ у підписі SVG — помилка", { lab: pt("${a}^2") }, ODD, null],
  ["непарний $ у lab.show — помилка", { lab: plane({ show: "Сторона ${a|0}" }) }, ODD, null],
  ["формула в cap (alt фото) — помилка", { cap: "Графік $y = x^2$" }, "cap: формула", null],
  ["формула в lab.alt (aria-label моделі) — помилка", { lab: plane({ alt: "Графік $y = x$" }) }, "lab.alt: формула", null],
  ["формула в назві уроку — помилка", { title: "Де живе $\\sqrt{2}$?" }, "назві уроку", null],
  ["TeX без $ у назві уроку — помилка", { title: "Корінь \\sqrt 2" }, "назві уроку", null],
  // P3-3: непарний $ поза title/body/fbText/hint/opts (items сорту) раніше не перевіряв ніхто
  ["непарний $ в items — помилка", { extra: sortScr([["$x + 1", 0], ["$y$", 1]]) }, ODD, null],
  ["парні $ в items — чисто", { extra: sortScr([["$x + 1$", 0], ["$y$", 1]]) }, null, null],
  // назва функції без лапок — курсивний добуток s·i·n (fix-math-tex-content): попередження
  ["$sin x$ без лапок — попередження", { body: "Знайди $sin x$, $tg^2 a$ і $arcsin 1$." }, null, "назва функції без лапок: sin, tg, arcsin"],
  ["$log_2 8$ у items — попередження", { extra: sortScr([["$log_2 8$", 0], ["$y$", 1]]) }, null, "назва функції без лапок: log"],
  ["\"sin\", \\sin, \\text{tg}, cos поза формулою — чисто", { body: "Маємо $\"sin\" x$, $\\sin x$, $\\text{tg} a$ і $\\cos x$; слово cos поза формулою." }, null, null],
  ["{sin(a)} — шаблон lab, не назва — чисто", { lab: plane({ show: "$y = {sin(a)}$" }) }, null, null],
  // engine-p3-1101 (рев'ю engine-math-sqrt-precedence, P3-4): \sqrt без {…} — порожній корінь, помилка; з {…} чи [n]{…} — чисто
  ["\\sqrt 3/2 без дужок — помилка", { body: "Маємо $\\sqrt 3/2$." }, "\\sqrt без фігурних дужок", null],
  ["\\sqrt3 впритул — помилка", { body: "Маємо $x = \\sqrt3$." }, "\\sqrt без фігурних дужок", null],
  ["\\sqrt[3] 8 без дужок — помилка", { body: "Маємо $\\sqrt[3] 8 = 2$." }, "\\sqrt без фігурних дужок", null],
  ["\\sqrt без дужок у steps (items) — помилка", { extra: sortScr([["$\\sqrt 2$", 0], ["$y$", 1]]) }, "\\sqrt без фігурних дужок", null],
  // рев'ю engine-p3-1101, P3-2: текст у лапках формули не перевіряється; \sqrtx — інша (невідома) команда, лише її попередження
  ["\"\\sqrt 3\" у лапках формули — чисто", { body: "Запис $\"\\sqrt 3\" = √3$." }, null, null],
  ["\\sqrtx — не \\sqrt без дужок, лише непідтримана команда", { body: "Маємо $\\sqrtx$." }, null, "непідтриману команду \\sqrtx"],
  ["\\sqrt{3}/2, \\sqrt[3]{8}, \\sqrt {2}, √3/2 — чисто", { body: "Маємо $\\sqrt{3}/2$, $\\sqrt[3]{8}$, $\\sqrt {2}$, $√3/2$." }, null, null]];
let MATH_SKILLS = {};
{ const ctx = { SLID: { subject: (a, b) => { MATH_SKILLS = (b || a).skills || {}; } } }; ctx.window = ctx;
  try { new Function("SLID", "window", fs.readFileSync(path.join(ROOT, "content/subjects/math.js"), "utf8"))(ctx.SLID, ctx); } catch {} }
const texIssue = x => /TeX|\$|формул|SVG|назві уроку/.test(x);
TEX_CASES.forEach(([name, opt, expErr, expWarn], i) => {
  const id = `fxt${i}`, dir = path.join(tmp, "content/math");
  for (const s of ["hist", "math"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const sec = { id, grade: 8, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: TeX, який учень побачив би сирим.",
    meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null }, lessons: [texLesson(`${id}l1`, opt)] };
  fs.writeFileSync(path.join(dir, `g8-${id}.js`), `SLID.section("math", ${JSON.stringify(sec, null, 1)});\n`);
  const r = spawnSync(process.execPath, [path.join(tmp, "tools/validate.mjs"), "--section", id, "--quiet"], { cwd: tmp, encoding: "utf8" });
  let rep = null; try { rep = JSON.parse(fs.readFileSync(path.join(tmp, "reports/validate.json"), "utf8")); fs.rmSync(path.join(tmp, "reports/validate.json")); } catch {}
  ok(rep, `TeX: ${name}: валідатор не записав звіт`, (r.stdout || "") + (r.stderr || "")); if (!rep) return;
  const errs = rep.errors.filter(texIssue), warns = rep.warnings.filter(texIssue);
  ok(rep.errors.length === errs.length, `TeX: ${name}: фікстура має бути коректною, крім TeX`, rep.errors.filter(e => !texIssue(e)).join("\n  "));
  ok(expErr ? errs.length >= 1 && errs.every(e => e.includes(expErr)) : errs.length === 0, `TeX: ${name}: помилки ${expErr ? `«${expErr}»` : "не очікувались"}`, errs.join("\n  "));
  ok(expWarn ? warns.some(w => w.includes(expWarn)) : warns.length === 0, `TeX: ${name}: попередження ${expWarn ? `«${expWarn}»` : "не очікувались"}`, warns.join("\n  "));
  ok(r.status === (expErr ? 1 : 0), `TeX: ${name}: код виходу ${r.status}, очікувався ${expErr ? 1 : 0}`, r.stdout);
});

// спільне для решти: очистити фікстурне дерево, записати файли {шлях: текст}, запустити validate з аргументами
function runTree(files, args) {
  for (const s of ["hist", "math", "ukr"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
  for (const [f, src] of Object.entries(files)) { fs.mkdirSync(path.dirname(path.join(tmp, f)), { recursive: true }); fs.writeFileSync(path.join(tmp, f), src); }
  const r = spawnSync(process.execPath, [path.join(tmp, "tools/validate.mjs"), ...args, "--quiet"], { cwd: tmp, encoding: "utf8" });
  let rep = null; try { rep = JSON.parse(fs.readFileSync(path.join(tmp, "reports/validate.json"), "utf8")); fs.rmSync(path.join(tmp, "reports/validate.json")); } catch {}
  return { rep, status: r.status, out: (r.stdout || "") + (r.stderr || "") };
}
const mathSec = (id, opt) => ({ id, grade: 8, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: TeX, який учень побачив би сирим.",
  meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null }, lessons: [texLesson(`${id}l1`, opt)] });
const secJS = (subj, sec) => `SLID.section(${JSON.stringify(subj)}, ${JSON.stringify(sec, null, 1)});\n`;

// tools-validate-tex-escapes: TeX з одним «\» у звичайному JS-рядку. JSON.stringify подвоює бекслеші, тому сирий літерал
// підставляємо замість маркера: у файлі стоїть рівно те, що написав би автор.
const ESC = "команд|бекслеш";
const ESC_CASES = [
  // [назва, сирий JS-літерал для body, очікувана помилка (підрядок) або null]
  ["\"$|\\Delta x|$\" — JS ковтає «\\»", String.raw`"Приріст $|\Delta x|$."`, "«\\Delta» з одним бекслешем"],
  ["\"\\overrightarrow{AB}\" без $ — JS ковтає «\\»", String.raw`"Вектор \overrightarrow{AB}."`, "«\\overrightarrow»"],
  ["\"$\\frac{1}{2}$\" — \\f стає керівним символом", String.raw`"Половина $\frac{1}{2}$."`, "«\\frac»"],
  ["'$a \\neq b$' в одинарних лапках", String.raw`'Маємо $a \neq b$.'`, "«\\neq»"],
  ["`$\\vec a$` у зворотних лапках", "`Вектор $\\vec a$.`", "«\\vec»"],
  ["\"$\\\\Delta x$\" — подвоєний бекслеш — чисто", String.raw`"Приріст $\\Delta x$."`, null],
  ["\\n перед кирилицею, \\u00e9, \\t перед не-командою — чисто", String.raw`"Рядок\nДругий caf\u00e9\tx."`, null],
  ["\\\\\\Delta (три бекслеші) — помилка", String.raw`"Приріст $\\\Delta x$."`, "«\\Delta»"]];
ESC_CASES.forEach(([name, lit, expErr], i) => {
  const id = `fxe${i}`, sec = mathSec(id, { body: "@@RAW@@" });
  const src = secJS("math", sec).replace(/"@@RAW@@"/g, lit) + "// коментар з \\Delta і 'апострофом' не перевіряється\n";
  const { rep, status, out } = runTree({ [`content/math/g8-${id}.js`]: src }, ["--section", id]);
  ok(rep, `ESC: ${name}: валідатор не записав звіт`, out); if (!rep) return;
  const errs = rep.errors.filter(e => new RegExp(ESC).test(e));
  ok(rep.errors.length === errs.length, `ESC: ${name}: інших помилок не має бути`, rep.errors.filter(e => !errs.includes(e)).join("\n  "));
  // файл і рядок: маркер стоїть у двох екранах (info + choice), тож помилок дві й обидві вказують на файл фікстури
  ok(expErr ? errs.length === 2 && errs.every(e => e.includes(expErr) && e.startsWith(`content/math/g8-${id}.js:`)) : errs.length === 0,
    `ESC: ${name}: помилки ${expErr ? `«${expErr}» із файлом і рядком` : "не очікувались"}`, errs.join("\n  "));
  ok(status === (expErr ? 1 : 0), `ESC: ${name}: код виходу ${status}`, out);
});

// P3-3: непарний $ у steps пулу (рядки steps склеюються у fbText, тож окремий крок раніше не перевірявся)
const poolJS = (secId, steps) => `SLID.pool("math", ${JSON.stringify({ id: "pfx", section: secId, status: "draft", meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null },
  sources: [{ id: "src", title: "Фікстура", url: "https://example.org/" }],
  items: [{ id: "a01", lesson: `${secId}l1`, lvl: 1, sk: Object.keys(MATH_SKILLS)[0], src: "src №1", type: "answer", title: "$2 + 2$", body: "<p>Обчисли.</p>", answer: 4, steps }] }, null, 1)});\n`;
for (const [name, steps, expErr] of [
  ["steps з непарним $ — помилка", ["Додаємо: $2 + 2", "Відповідь: $4$."], ODD],
  ["steps з парними $ — чисто", ["Додаємо: $2 + 2$.", "Відповідь: $4$."], null],
  ["два кроки з непарним $ (разом парні) — помилка", ["Маємо $2", "+ 2$ = 4."], ODD]]) {
  const { rep, status, out } = runTree({ "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": poolJS("fxp", steps) }, ["--pool", "pfx"]);
  ok(rep, `pool: ${name}: валідатор не записав звіт`, out); if (!rep) continue;
  const errs = rep.errors.filter(texIssue);
  ok(rep.errors.length === errs.length, `pool: ${name}: інших помилок не має бути`, rep.errors.filter(e => !texIssue(e)).join("\n  "));
  ok(expErr ? errs.length >= 1 && errs.every(e => e.includes(expErr) && e.includes("pool#pfx")) : errs.length === 0, `pool: ${name}: помилки ${expErr ? `«${expErr}»` : "не очікувались"}`, errs.join("\n  "));
  ok(status === (expErr ? 1 : 0), `pool: ${name}: код виходу ${status}`, out);
}

// tools-test-validate-p3: повний прогін (без --section) — так validate запускає CI і npm run check.
// Чисте дерево (hist з img + math + пул) — 0 помилок; додати по одному зіпсованому файлу — помилки саме з цих файлів, rc 1.
{ const histSec = { id: "fxh", grade: 5, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: повний прогін на фікстурі.",
    meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null }, lessons: [lesson("fxhl1", IMG), { ...lesson("fxhl2", IMG, true), title: "Фінал" }] };
  const clean = { "content/hist/g5-fxh.js": secJS("hist", histSec), "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": poolJS("fxp", ["Додаємо: $2 + 2$.", "Відповідь: $4$."]) };
  const base = runTree(clean, []);
  ok(base.rep && base.rep.errors.length === 0 && base.status === 0, "повний прогін: чисте фікстурне дерево — 0 помилок, rc 0", base.rep ? base.rep.errors.join("\n  ") : base.out);
  ok(/0 помилок/.test(base.out) && !/розділ|діагностика|пул /.test(base.out.split("\n").pop() || ""), "повний прогін: підсумок без фільтра", base.out.split("\n").slice(-2).join(" "));
  // що прогін не порожній: фікстурні уроки справді перевірено (попередження профілю для них є у звіті)
  ok(base.rep && ["fxhl1", "fxpl1"].every(id => base.rep.warnings.some(w => w.includes(`#${id}`))), "повний прогін: обидва фікстурні розділи потрапили в перевірку", base.rep && base.rep.warnings.slice(0, 5).join("\n  "));
  const bossNoImg = { ...histSec, id: "fxh2", lessons: [lesson("fxh2l1", IMG), { ...lesson("fxh2l2", {}, true), title: "Фінал" }] };
  const broken = runTree({ ...clean,
    "content/hist/g5-fxh2.js": secJS("hist", bossNoImg),
    "content/math/g8-fxe.js": secJS("math", mathSec("fxe", { body: "@@RAW@@" })).replace(/"@@RAW@@"/g, String.raw`"Приріст $|\Delta x|$."`),
    "content/math/g8-fxo.js": secJS("math", mathSec("fxo", { extra: sortScr([["$x + 1", 0], ["$y$", 1]]) })) }, []);
  const E = broken.rep ? broken.rep.errors : [];
  ok(broken.status === 1, `повний прогін: зіпсовані файли — rc 1, отримано ${broken.status}`, broken.out);
  ok(E.some(e => e.includes("#fxh2l2") && e.includes(D027)), "повний прогін: boss історії без img — помилка D-027", E.join("\n  "));
  ok(E.filter(e => e.startsWith("content/math/g8-fxe.js:") && e.includes("«\\Delta»")).length === 2, "повний прогін: \\Delta з одним бекслешем — помилка з файлом і рядком", E.join("\n  "));
  ok(E.some(e => e.includes("#fxol1") && e.includes(ODD)), "повний прогін: непарний $ в items — помилка", E.join("\n  "));
  ok(E.every(e => /fxh2l2|g8-fxe\.js|fxol1/.test(e)), "повний прогін: помилки лише з зіпсованих файлів (чисті не зачеплено)", E.join("\n  "));
}

// ---- tools-validate-p3b, engine-player-a11y-p3, engine-answer-kinds-p3 (пункт validate) ----
// кожне правило: позитивна фікстура (має спрацювати), негативна (чисто), рівень (помилка/попередження) і код виходу
function expectRun(name, files, args, { err = null, warn = null, noWarn = null, rc, also = null } = {}) {
  const { rep, status, out } = runTree(files, args);
  ok(rep, `${name}: валідатор не записав звіт`, out); if (!rep) return null;
  const errs = err ? rep.errors.filter(e => e.includes(err)) : [];
  ok(err ? errs.length >= 1 : rep.errors.length === 0, `${name}: помилки ${err ? `«${err}»` : "не очікувались"}`, rep.errors.join("\n  "));
  if (err) ok(rep.errors.every(e => errs.includes(e) || (also && e.includes(also))), `${name}: інших помилок не має бути`, rep.errors.filter(e => !errs.includes(e)).join("\n  "));
  if (warn) ok(rep.warnings.some(w => w.includes(warn)), `${name}: очікувалось попередження «${warn}»`, rep.warnings.join("\n  "));
  if (noWarn) ok(!rep.warnings.some(w => w.includes(noWarn)), `${name}: зайве попередження «${noWarn}»`, rep.warnings.filter(w => w.includes(noWarn)).join("\n  "));
  ok(status === (rc ?? (err ? 1 : 0)), `${name}: код виходу ${status}`, out);
  return rep;
}
const one = (id, opt) => ({ [`content/math/g8-${id}.js`]: secJS("math", mathSec(id, opt)) });

// P3-1 (tools-validate-p3b): регулярні літерали й String.raw у файлі змісту — без хибних помилок і без схованих справжніх
const rawSec = (id, lit, tail = "") => secJS("math", mathSec(id, { body: "@@RAW@@" })).replace(/"@@RAW@@"/g, () => lit) + tail;   // функція: «$`» у літералі — не шаблон заміни
for (const [name, lit, tail, err] of [
  ["regex /\"\\d/ поруч — не рядок, хибної помилки немає", `"Тіло."`, `const re = /"\\d+/; re.test("1");\n`, null],
  ["regex /a\\/*b/ не відкриває коментар — справжня \\Delta після нього знайдена", `"Тіло."`, `const re = /a\\/*b/; const s = "Приріст $|\\Delta x|$";\n`, "«\\Delta»"],
  ["ділення 4 / \"…\" / 2 — це не regex, рядок між знаками перевіряється", `"Тіло."`, `const q = 4 / "\\Delta".length / 2;\n`, "«\\Delta»"],
  ["String.raw`$\\Delta$` — чисто", "String.raw`Приріст $\\Delta x$.`", "", null],
  ["вкладений шаблон у ${…} перевіряється", "`Приріст ${ `$\\Delta x$` }.`", "", "«\\Delta»"],
  // P3-7 (рев'ю engine-player-a11y-p3): об'єктний літерал у ${…} — його «}» не закриває вставку. Без лічильника «{» решта
  // вставки («.a /* \Delta */ }») стала б текстом шаблону, і коментар чи regex у ній дали б хибну помилку
  ["об'єкт {a: 1} у ${…}, коментар після нього — чисто", "`Сума ${ {a: 1}.a /* \\Delta */ } — так.`", "", null],
  ["об'єкт {a: 1} у ${…}, regex після нього — чисто", "`Сума ${ {a: 1}.a + /\\Delta/.source.length } — так.`", "", null],
  ["об'єкт {a: \"…\"} у ${…}: справжня \\Delta у хвості шаблону знайдена", "`Сума ${ {a: \"x\"}.a } і $\\Delta x$.`", "", "«\\Delta»"]]) {
  const id = `fxr${name.length}`;
  expectRun(`lexer: ${name}`, { [`content/math/g8-${id}.js`]: rawSec(id, lit, tail) }, ["--section", id], { err });
}
// P3-2: «\n»/«\t» перед словом, що збігається з TeX-назвою, поза формулою — попередження, а не помилка; у $…$ і перед { — помилка
expectRun("escape: \"x\\ne\" поза формулою — попередження", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Рядок x\ne."`) }, ["--section", "fxn"], { warn: "навмисний перенос" });
expectRun("escape: \"a\\to\" поза формулою — попередження", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Стрілка a\to."`) }, ["--section", "fxn"], { warn: "«\\to»" });
expectRun("escape: \"$a \\to b$\" у формулі — помилка", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Стрілка $a \to b$."`) }, ["--section", "fxn"], { err: "«\\to»" });
expectRun("escape: \"\\frac{1}{2}\" без $ перед { — помилка", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Половина \frac{1}{2}."`) }, ["--section", "fxn"], { err: "«\\frac»" });
// MATH_COMMANDS береться з app/math.js (SLID_MATH.commands): \\lg рушій підтримує — попередження «непідтримана команда» немає; \\foo — є
expectRun("формула: $\\lg 100$ — без попередження (команда з рушія)", one("fxg", { body: "Обчисли $\\lg 100$." }), ["--section", "fxg"], { noWarn: "непідтриману команду \\lg" });
expectRun("формула: $\\foo x$ — попередження, як і раніше", one("fxg", { body: "Обчисли $\\foo x$." }), ["--section", "fxg"], { warn: "непідтриману команду \\foo" });
// P3-3: --section сканує сирий текст лише файлу свого розділу; зіпсований чужий файл не блокує автора
{ const files = { ...one("fxa"), "content/math/g8-fxb.js": rawSec("fxb", String.raw`"Приріст $|\Delta x|$."`) };
  expectRun("скоуп: --section fxa — помилок чужого файлу немає", files, ["--section", "fxa"], {});
  const rb = expectRun("скоуп: --section fxb — помилка свого файлу", files, ["--section", "fxb"], { err: "«\\Delta»" });
  ok(rb && rb.errors.every(e => e.startsWith("content/math/g8-fxb.js:")), "скоуп: помилка вказує на файл fxb", rb && rb.errors.join("\n  "));
  expectRun("скоуп: повний прогін бачить обидва файли", files, [], { err: "g8-fxb.js:" }); }
// P3-4: вкладені дужки в індексі підпису SVG — помилка; x_{a_b} — чисто
// (xname — підпис осі без шаблонів {…}; у підписах точок {…} — це вирази lab)
expectRun("SVG: $x_{a_{bc}}$ у підписі осі — помилка", one("fxs", { lab: plane({ xname: "$x_{a_{bc}}$" }) }), ["--section", "fxs"], { err: "дужки всередині індексу" });
expectRun("SVG: $x_{a_b}$ і $t_{AB}$ у підписах осей — чисто", one("fxs", { lab: plane({ xname: "$x_{a_b}$", yname: "$t_{AB}$" }) }), ["--section", "fxs"], {});
// P3-2 (рев'ю engine-player-a11y-p3): у підписах-шаблонах (точки, відрізки…) {…} — вставка, перевіряємо рядок після підстановки
expectRun("SVG tpl: $x^{2{,}5}$, $a^{{a}}$, $x_{{a}0}$ у підписах точок — чисто", one("fxs", { lab: plane({ points: { P: { x: "a", y: "1", label: "$x^{2{,}5}$" }, Q: { x: "1", y: "a", label: "$a^{{a}}$" }, R: { x: "2", y: "2", label: "$x_{{a}0}$" } } }) }), ["--section", "fxs"], {});
{ const r = expectRun("SVG tpl: $x_{a_{{a}}}$ — дужки лишаються після підстановки — помилка", one("fxs", { lab: pt("$x_{a_{{a}}}$") }), ["--section", "fxs"], { err: "після підстановки шаблону" });
  ok(r && r.errors.every(e => !e.includes("x_{ab}")), "SVG tpl: порада x_{ab} лише для полів без шаблонів", r && r.errors.join("\n  ")); }
expectRun("SVG: $x^{2{,}5}$ у підписі осі (без шаблонів) — помилка, як і раніше", one("fxs", { lab: plane({ xname: "$x^{2{,}5}$" }) }), ["--section", "fxs"], { err: "дужки всередині індексу" });
// P3-5: credits — лише https://; запис із чотирьох полів; і в розділі, і в самому предметі
{ const cred = (id, credits) => { const sec = mathSec(id); sec.credits = credits; return { [`content/math/g8-${id}.js`]: secJS("math", sec) }; };
  expectRun("credits: https — чисто", cred("fxc", [["Фото", "Автор", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:X.jpg"]]), ["--section", "fxc"], {});
  expectRun("credits: http:// — помилка", cred("fxc", [["Фото", "Автор", "CC BY 4.0", "http://commons.wikimedia.org/wiki/File:X.jpg"]]), ["--section", "fxc"], { err: "лише https://… (http:// — незахищене" });
  expectRun("credits: відносний шлях — помилка", cred("fxc", [["Фото", "Автор", "CC0", "img/a.png"]]), ["--section", "fxc"], { err: "лише https://… (застосунок покаже його як href=\"#\")" });
  // P3-4: розділ плану без уроків — його credits раніше не перевіряв ніхто
  const planSec = credits => `SLID.section("math", ${JSON.stringify({ id: "fxpl", grade: 8, weeks: [3, 4], title: "План", why: "Розділ плану без уроків для регресійного тесту.", plan: ["Тема"], credits })});\n`;
  expectRun("credits розділу плану: javascript: — помилка (повний прогін)", { ...one("fxc"), "content/math/plan.js": planSec([["Фото", "Автор", "CC0", "javascript:alert(1)"]]) }, [], { err: "#fxpl: credits 1" });
  expectRun("credits розділу плану: javascript: — помилка (--section)", { ...one("fxc"), "content/math/plan.js": planSec([["Фото", "Автор", "CC0", "javascript:alert(1)"]]) }, ["--section", "fxpl"], { err: "#fxpl: credits 1" });
  expectRun("credits розділу плану: https — чисто", { ...one("fxc"), "content/math/plan.js": planSec([["Фото", "Автор", "CC0", "https://example.org/a.png"]]) }, [], {});
  // P3-3 (рев'ю tools-lab-validate-p3c): requires і badges розділу плану після continue раніше мовчки пропускались
  const planX = extra => `SLID.section("math", ${JSON.stringify({ id: "fxpl", grade: 8, weeks: [3, 4], title: "План", why: "Розділ плану без уроків для регресійного тесту.", plan: ["Тема"], ...extra })});\n`;
  expectRun("план: requires на неіснуючий урок — попередження, не помилка", { ...one("fxc"), "content/math/plan.js": planX({ requires: ["nope-l1"] }) }, [], { warn: "#fxpl: requires: немає уроку nope-l1" });
  expectRun("план: requires на наявний урок — чисто", { ...one("fxc"), "content/math/plan.js": planX({ requires: ["fxcl1"] }) }, [], { noWarn: "requires: немає уроку" });
  expectRun("план: значок з неіснуючою іконкою — помилка", { ...one("fxc"), "content/math/plan.js": planX({ badges: [{ id: "fxb", icon: "nope-icon", title: "Б" }] }) }, ["--section", "fxpl"], { err: "значок fxb: немає іконки «nope-icon»" });
  expectRun("план: значок без уроків — попередження", { ...one("fxc"), "content/math/plan.js": planX({ badges: [{ id: "fxb", icon: "pot", title: "Б" }] }) }, [], { warn: "значок fxb: у розділі плану без уроків" });
  expectRun("credits: три поля замість чотирьох — помилка", cred("fxc", [["Фото", "Автор", "https://commons.wikimedia.org/wiki/File:X.jpg"]]), ["--section", "fxc"], { err: "потрібно [назва, автор, ліцензія" });
  const subj = c => `SLID.subject(${JSON.stringify({ id: "fxsubj", subject: "Фікстура", short: "Ф", icon: "frac", colors: { light: { accent: "#000" }, dark: { accent: "#fff" } }, skills: {}, credits: c })});\n`;
  expectRun("credits предмета: javascript: — помилка (повний прогін)", { ...one("fxc"), "content/math/zz-subj.js": subj([["Фото", "Автор", "CC0", "javascript:alert(1)"]]) }, [], { err: "предмет fxsubj" });
  expectRun("credits предмета: https — чисто", { ...one("fxc"), "content/math/zz-subj.js": subj([["Фото", "Автор", "CC0", "https://example.org/a.png"]]) }, [], {}); }
// engine-player-a11y-p3: точка drag, яку не рухає ні миша, ні клавіатура, — попередження (модель працює, тож не помилка)
expectRun("drag: координати-вирази — попередження", one("fxd", { lab: plane({ points: { D: { x: "2+a", y: "1", drag: true } } }) }), ["--section", "fxd"], { warn: "точка D: drag" });
expectRun("drag: рух уздовж однієї осі — без попередження", one("fxd", { lab: plane({ points: { D: { x: "a", y: "2*a", drag: true } } }) }), ["--section", "fxd"], { noWarn: "drag, але" });
expectRun("drag: at і без drag — без попередження", one("fxd", { lab: plane({ points: { D: { at: [1, 1], drag: true }, F: { x: "2+a", y: "1" } } }) }), ["--section", "fxd"], { noWarn: "drag, але" });
// engine-answer-kinds-p3: answer в уроці — ті самі правила полів, що й у пулі (decimals, units лише для quantity, time без unit…)
{ const ans = (id, f) => one(id, { extra: { type: "answer", title: "Обчисли", body: "Скільки?", ...f } });
  for (const [name, f, err] of [
    ["decimals 2 і ключ «3,50» — чисто", { answer: "3,50", decimals: 2 }, null],
    ["decimals 2, а ключ «3,5» — помилка", { answer: "3,5", decimals: 2 }, "decimals 2 — ключ рядком"],
    ["decimals з mixed — помилка", { answer: "3,50", decimals: 2, mixed: true }, "decimals не поєднується"],
    ["decimals для ratio — помилка", { answerKind: "ratio", answer: "2 : 3", decimals: 1 }, "decimals — ціле 0–6"],
    ["units поза quantity — помилка", { answer: 5, units: ["м", "см"] }, "units — лише для answerKind quantity"],
    ["quantity з units — чисто", { answerKind: "quantity", answer: 245, units: ["м", "см"] }, null],
    ["quantity з unit — помилка", { answerKind: "quantity", answer: 245, units: ["м", "см"], unit: "см" }, "quantity — без unit"],
    ["time з unit — помилка", { answerKind: "time", answer: "9:55", unit: "год" }, "time — без unit"],
    ["невідомий answerKind — помилка", { answerKind: "nope", answer: 5 }, "answerKind має бути"],
    // engine-answer-formats-ister: нові форми sci і pairSet в уроці
    ["sci у стандартному вигляді — чисто", { answerKind: "sci", answer: "2,72 · 10^5", body: "Запиши в стандартному вигляді." }, null],
    ["sci: умова не називає вигляду — помилка", { answerKind: "sci", answer: "2,72 · 10^5" }, "sci — умова має назвати"],
    ["sci: ключ не в стандартному вигляді — помилка", { answerKind: "sci", answer: "27,2 · 10^4", body: "Запиши в стандартному вигляді." }, "sci — ключ рядком"],
    ["pairSet — чисто", { answerKind: "pairSet", answer: [[3, 2], [-2, -3]] }, null],
    ["pairSet з повтором пари — помилка", { answerKind: "pairSet", answer: [[3, 2], [3, 2]] }, "pairSet — ключ"],
    ["form improper зі змішаним ключем — помилка", { answer: "2 1/3", form: "improper" }, "form improper"]]) {
    const id = "fxk";
    const rep = expectRun(`answer в уроці: ${name}`, ans(id, f), ["--section", id], { err: err && `answer: ${err}`, also: "сам проходить перевірку" });
    if (rep && err) ok(rep.errors.every(e => e.includes("#fxkl1 екран 4 (answer)")), `answer в уроці: ${name}: помилка вказує на екран`, rep.errors.join("\n  ")); }
  // пул: ті самі поля перевіряє validatePool — checkScreen їх не дублює
  const bad = `SLID.pool("math", ${JSON.stringify({ id: "pfx", section: "fxp", status: "draft", meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null },
    sources: [{ id: "src", title: "Фікстура", url: "https://example.org/" }],
    items: [{ id: "a01", lesson: "fxpl1", lvl: 1, sk: Object.keys(MATH_SKILLS)[0], src: "src №1", type: "answer", title: "Обчисли", body: "<p>Скільки?</p>", answer: 5, units: ["м", "см"], steps: ["Пояснення."] }] }, null, 1)});\n`;
  const rp = expectRun("answer у пулі: units поза quantity — помилка один раз", { "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": bad }, ["--pool", "pfx"], { err: "units — лише для answerKind quantity" });
  ok(rp && rp.errors.length === 1, "answer у пулі: без дубля з checkScreen", rp && rp.errors.join("\n  "));
  // engine-practice-pool: генератор gen у пулі — правила gen (learn.validatePool) і перевірка екрана на першому наборі
  { const gp = item => `SLID.pool("math", ${JSON.stringify({ id: "pgx", section: "fxp", status: "draft", meta: { author: "test", created: "2026-11-01", factcheck: null, teacher: null },
      sources: [{ id: "src", title: "Фікстура", url: "https://example.org/" }],
      items: [{ id: "g01", lesson: "fxpl1", lvl: 1, sk: Object.keys(MATH_SKILLS)[0], src: "src №1", adapted: true, type: "answer", title: "Обчисли", body: "<p>Знайди $ {a} · {b} $.</p>",
        steps: ["$ {a} · {b} = {a*b} $."], gen: { vars: { a: { min: 2, max: 9 }, b: { min: 2, max: 5 } }, where: "a != b", answer: "a*b" }, ...item }] }, null, 1)});\n`;
    const files = item => ({ "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": gp(item) });
    const r0 = expectRun("gen у пулі: коректний генератор — чисто", files({}), ["--pool", "pgx"], {});
    ok(r0 && r0.errors.length === 0, "gen у пулі: 0 помилок", r0 && r0.errors.join("\n  "));
    expectRun("gen у пулі: lvl 2 — помилка", files({ lvl: 2 }), ["--pool", "pgx"], { err: "gen — лише для вправ рівня 1" });
    expectRun("gen у пулі: a/b — нескінченний дріб", files({ gen: { vars: { a: { min: 2, max: 9 }, b: { min: 2, max: 5 } }, answer: "a/b" } }), ["--pool", "pgx"], { err: "не скінченний десятковий дріб" });
    expectRun("gen у пулі: без adapted — помилка", files({ adapted: undefined }), ["--pool", "pgx"], { err: "adapted: true" });
    expectRun("gen у пулі: сирий TeX на наборі ловить checkScreen", files({ body: "<p>Знайди $ {a} · {b} {,}5$ і $x$.</p>", steps: ["$ {a} $ і $"] }), ["--pool", "pgx"], { err: "непарн" });
    expectRun("gen у пулі: повний прогін теж бачить gen", files({ lvl: 3 }), [], { err: "gen — лише для вправ рівня 1" }); }
  // P3-5 (рев'ю engine-player-a11y-p3): «немає title» — один раз (від checkScreen), без «answer: немає title»
  { const r = expectRun("answer в уроці без title — одна помилка «немає title»", ans("fxk", { title: "", answer: 5 }), ["--section", "fxk"], { err: "немає title" });
    ok(r && r.errors.length === 1 && !r.errors[0].includes("answer: "), "answer в уроці без title: без дубля «answer: немає title»", r && r.errors.join("\n  ")); }
  // предмет без skills: власні поля answer перевіряються, а хибної «answer: навичка sk «undefined»» немає
  { const subj = `SLID.subject(${JSON.stringify({ id: "fxns", subject: "Фікстура", short: "Ф", icon: "frac", colors: { light: { accent: "#000" }, dark: { accent: "#fff" } } })});\n`;
    const sec = mathSec("fxns"); sec.lessons[0].screens.push({ type: "answer", title: "Обчисли", body: "Скільки?", answer: 5, fbOk: "Так.", fbText: "Пояснення, чому саме так, для фікстури." });
    sec.lessons[0].screens.forEach(x => delete x.sk);
    const files = s2 => ({ "content/fxns/aa-subj.js": subj, "content/fxns/g8-fxns.js": secJS("fxns", s2) });
    expectRun("answer у предметі без skills — без хибної помилки sk", files(sec), ["--section", "fxns"], {});
    const bad = JSON.parse(JSON.stringify(sec)); bad.lessons[0].screens.at(-1).units = ["м", "см"];
    expectRun("answer у предметі без skills — поля перевіряються (units поза quantity)", files(bad), ["--section", "fxns"], { err: "answer: units — лише для answerKind quantity" });
    fs.rmSync(path.join(tmp, "content/fxns"), { recursive: true, force: true }); }
  // діагностика: поля answer перевіряються лише тоді, коли answer дозволено в тесті (learn.DIAG_TYPES). Обидва стани задаємо явно
  // в копії app/learn.js, щоб тест не залежав від того, чи дозволено answer у діагностиці зараз (engine-diag-answer-kinds)
  { const lp = path.join(tmp, "app/learn.js"), orig = fs.readFileSync(lp, "utf8"), DT = /const DIAG_TYPES = \[[^\]]*\];/;
    ok(DT.test(orig), "diag answer: у app/learn.js знайдено const DIAG_TYPES");
    const withTypes = extra => fs.writeFileSync(lp, orig.replace(DT, `const DIAG_TYPES = ${JSON.stringify(["choice", "multi", "sort", "order", "number", "fracin", "shade", "numline", "lab", ...extra])};`));
    const diag = item => `SLID.diag("math", ${JSON.stringify({ id: "dfx", grade: 8, title: "Тест", why: "Регресійний тест валідатора: answer у діагностиці.", status: "draft",
      meta: { author: "test", created: "2026-11-01", factcheck: null, teacher: null }, topics: [{ id: "t1", title: "Тема", kind: "cur", lessons: ["fxql1"] }],
      items: [{ topic: "t1", type: "answer", title: "Обчисли", body: "Скільки?", answer: 5, sk: Object.keys(MATH_SKILLS)[0], ...item }] }, null, 1)});\n`;
    const dfiles = item => ({ "content/math/g8-fxq.js": secJS("math", mathSec("fxq")), "content/math/diag-g8.js": diag(item) });
    try {
      withTypes([]);
      { const r = expectRun("diag: answer не дозволено — лише «тип не дозволено», без рядків answer:", dfiles({ units: ["м", "см"] }), ["--diag", "dfx"], { err: "тип не дозволено в тесті" });
        ok(r && r.errors.length === 1, "diag: answer не дозволено — рівно одна помилка", r && r.errors.join("\n  ")); }
      withTypes(["answer"]);
      expectRun("diag: answer дозволено — коректне завдання чисте", dfiles({}), ["--diag", "dfx"], {});
      { const r = expectRun("diag: answer дозволено — units поза quantity — помилка", dfiles({ units: ["м", "см"] }), ["--diag", "dfx"], { err: "answer: units — лише для answerKind quantity" });
        ok(r && r.errors.length === 1 && r.errors[0].includes("diag-g8.js#dfx завдання 1 (answer)"), "diag: помилка answer один раз і вказує на завдання", r && r.errors.join("\n  ")); }
      { const r = expectRun("diag: answer дозволено, без title — «немає title» без «answer: немає title»", dfiles({ title: "" }), ["--diag", "dfx"], { err: "немає title" });
        ok(r && !r.errors.some(e => e.includes("answer: ")), "diag: без рядків answer: для title", r && r.errors.join("\n  ")); }
    } finally { fs.writeFileSync(lp, orig); } } }

// ---- engine-diag-answer-kinds: answer з answerKind у тесті рівня (SLID.diag) — окремий блок (паралельна гілка змінює validate вище) ----
// learn.validate: answer дозволено лише з number | time | quantity; поля answer перевіряє той самий answerFieldIssues, що в уроці
{ const sk = Object.keys(MATH_SKILLS)[0], pre7 = { ...mathSec("fxq"), grade: 7 };
  const diagJS = item => `SLID.diag("math", ${JSON.stringify({ id: "dgfx", grade: 8, title: "Тест-фікстура", why: "Регресійний тест валідатора: answer у тесті.", status: "draft",
    meta: { author: "test", created: "2026-11-01", factcheck: null, teacher: null },
    topics: [{ id: "p", title: "Передумова", kind: "pre", lessons: ["fxql1"] }, { id: "c", title: "Тема класу", kind: "cur", lessons: ["fxcl1"] }],
    items: [{ topic: "p", type: "choice", sk, title: "Обери", opts: ["1", "2"], correct: 0 }, { topic: "p", type: "number", sk, title: "Скільки?", answer: 2 },
      { topic: "c", sk, title: "Запиши", body: "<p>Урок почався о 9:10 і тривав 45 хв. Коли він закінчився?</p>", ...item }] }, null, 1)});\n`;
  const tree = item => ({ "content/math/g7-fxq.js": secJS("math", pre7), "content/math/g8-fxc.js": secJS("math", mathSec("fxc")), "content/math/diag-g8.js": diagJS(item) });
  for (const [name, item, err] of [
    ["answer time — чисто", { type: "answer", answerKind: "time", answer: "9:55" }, null],
    ["answer quantity compound — чисто", { type: "answer", answerKind: "quantity", answer: 245, units: ["см", "м"], form: "compound", body: "<p>Довжина стрічки 245 см. Запиши її в метрах і сантиметрах.</p>" }, null],
    ["answer decimals — чисто", { type: "answer", answer: "37,0", decimals: 1 }, null],
    ["answer без answerKind (число) — чисто", { type: "answer", answer: "2 1/3" }, null],
    ["answer з rev 2 — чисто", { type: "answer", answerKind: "time", answer: "9:55", rev: 2 }, null],
    ["answer list — помилка", { type: "answer", answerKind: "list", answer: [1, 2] }, "answerKind «list» у тесті не дозволено"],
    ["answer expression — помилка", { type: "answer", answerKind: "expression", answer: "2x" }, "answerKind «expression» у тесті не дозволено"],
    ["answer coordinates2 — помилка", { type: "answer", answerKind: "coordinates2", answer: [1, 2] }, "answerKind «coordinates2» у тесті не дозволено"],
    ["time з ключем «9.55» — помилка поля", { type: "answer", answerKind: "time", answer: "9.55" }, "time — ключ «Г:ХХ»"],
    ["time з unit — помилка поля", { type: "answer", answerKind: "time", answer: "9:55", unit: "год" }, "time — без unit"],
    ["quantity без units — помилка поля", { type: "answer", answerKind: "quantity", answer: 245 }, "quantity — units"],
    ["decimals 1 з ключем «37» — помилка поля", { type: "answer", answer: "37", decimals: 1 }, "decimals 1 — ключ рядком"],
    ["ключ, що сам не проходить, — помилка", { type: "answer", answer: "abc" }, "сам проходить перевірку"]]) {
    const rep = expectRun(`diag answer: ${name}`, tree(item), ["--diag", "dgfx"], { err, also: err && "сам проходить перевірку" });
    if (rep && err) ok(rep.errors.every(e => e.includes("diag-g8.js#dgfx")), `diag answer: ${name}: помилка вказує на тест`, rep.errors.join("\n  ")); }
  // P3-3 (рев'ю engine-diag-answer-kinds) + engine-diag-half-credit: вигляд, який поле вимагає (compound, reduced, mixed, improper; без нього —
  // півбала), умова мусить назвати — інакше ПОМИЛКА; decimals і fractionOnly («form» = правильно) — лише попередження
  const FMT = "тест рівня: умова не називає вигляду, який вимагає поле", FMTW = "тест рівня: вимогу запису умова не називає";
  const Q = { type: "answer", answerKind: "quantity", answer: 245, units: ["м", "см"], form: "compound" };
  for (const [name, item, err, warn] of [
    ["compound без формату в умові — помилка", { ...Q, body: "<p>Довжина стрічки 245 см. Запиши її.</p>" }, "form compound"],
    ["compound «у метрах і сантиметрах» — чисто", { ...Q, body: "<p>Довжина стрічки 245 см. Запиши її в метрах і сантиметрах.</p>" }, null],
    ["reduced без формату — помилка", { type: "answer", answer: "2/5", reduced: true, body: "<p>Обчисли $1/10 + 3/10$.</p>" }, "reduced — нескоротний"],
    ["reduced «скороти» — чисто", { type: "answer", answer: "2/5", reduced: true, body: "<p>Скороти дріб $4/10$.</p>" }, null],
    ["reduced «нескоротним дробом» — чисто", { type: "answer", answer: "2/5", reduced: true, body: "<p>Запиши $4/10$ нескоротним дробом.</p>" }, null],
    ["mixed без формату — помилка", { type: "answer", answer: "2 1/3", mixed: true, body: "<p>Обчисли $7/3$.</p>" }, "mixed — мішане"],
    ["mixed «виділи цілу частину» — чисто", { type: "answer", answer: "2 1/3", mixed: true, body: "<p>Виділи цілу частину з дробу $7/3$.</p>" }, null],
    ["mixed «мішаним числом» — чисто", { type: "answer", answer: "2 1/3", mixed: true, body: "<p>Запиши $7/3$ мішаним числом.</p>" }, null],
    ["decimals «до десятих» — без попередження", { type: "answer", answer: "37,0", decimals: 1, body: "<p>Округли 36,96 до десятих.</p>" }, null],
    // P3-3 рев'ю engine-lab-aria-p3d (engine-practice-pool): фікстури fractionOnly / improper і точніші евристики compound / decimals
    ["fractionOnly без формату — попередження", { type: "answer", answer: "3/4", fractionOnly: true, body: "<p>Обчисли $1/2 + 1/4$.</p>" }, null, "fractionOnly — лише звичайний"],
    ["fractionOnly «звичайним дробом» — без попередження", { type: "answer", answer: "3/4", fractionOnly: true, body: "<p>Обчисли $1/2 + 1/4$. Запиши звичайним дробом.</p>" }, null],
    ["improper без формату — помилка", { type: "answer", answer: "7/3", form: "improper", body: "<p>Обчисли $2 + 1/3$.</p>" }, "form improper"],
    ["improper «неправильним дробом» — чисто", { type: "answer", answer: "7/3", form: "improper", body: "<p>Запиши $2 1/3$ неправильним дробом.</p>" }, null],
    ["compound «у задачах і прикладах» — помилка", { ...Q, body: "<p>Таке трапляється у задачах і прикладах. Довжина 245 см.</p>" }, "form compound"],
    ["compound «в м і см» — чисто", { ...Q, body: "<p>Довжина стрічки 245 см. Вирази в м і см.</p>" }, null],
    ["decimals 1 «десятковий дріб» без кількості знаків — попередження", { type: "answer", answer: "37,0", decimals: 1, body: "<p>Запиши як десятковий дріб: $37$.</p>" }, null, "decimals — кількість"],
    ["decimals 0 «до цілих» — без попередження", { type: "answer", answer: "37", decimals: 0, body: "<p>Округли 36,9 до цілих.</p>" }, null],
    ["decimals 1 «з точністю до 0,1» — без попередження", { type: "answer", answer: "37,0", decimals: 1, body: "<p>Обчисли з точністю до 0,1.</p>" }, null],
    ["decimals 1 «до сотих» — попередження (не та кількість)", { type: "answer", answer: "37,0", decimals: 1, body: "<p>Округли 36,96 до сотих.</p>" }, null, "decimals — кількість"],
    ["time — без попередження", { type: "answer", answerKind: "time", answer: "9:55" }, null]]) {
    const r = expectRun(`diag answer: ${name}`, tree(item), ["--diag", "dgfx"], err ? { err: `${FMT} (без нього — лише півбала) — ${err}` } : warn ? { warn: `${FMTW}`, noWarn: FMT } : { noWarn: FMTW });
    if (r && warn) ok(r.warnings.some(w => w.includes(warn) && w.includes(FMTW)), `diag answer: ${name}: попередження про ${warn}`, r.warnings.join("\n  "));
    if (r && !err) ok(!r.errors.length, `diag answer: ${name}: без помилки вигляду`, r.errors.join("\n  ")); }
  // той самий запис в уроці — без попередження (там form пояснюють і дають другу спробу)
  expectRun("урок: compound без формату — без помилки й попередження тесту рівня", one("fxu", { extra: { ...Q, title: "Запиши", body: "<p>Довжина стрічки 245 см. Запиши її.</p>" } }), ["--section", "fxu"], { noWarn: "тест рівня" });
  // P3-4: signed для answer у тесті — лише числова (як правило пулу); повідомлення одне, від learn.validate
  { const r = expectRun("diag answer: signed для time — одна помилка", tree({ type: "answer", answerKind: "time", answer: "9:55", signed: true }), ["--diag", "dgfx"], { err: "signed має бути boolean для number | числової answer" });
    ok(r && r.errors.length === 1, "diag answer: signed для time — без дубля з правила пулу", r && r.errors.join("\n  ")); }
  expectRun("diag answer: signed для числової — чисто", tree({ type: "answer", answer: -3, signed: true }), ["--diag", "dgfx"], {});
  { const r = expectRun("diag answer: без title — «немає title» рівно один раз", tree({ type: "answer", answerKind: "time", answer: "9:55", title: "" }), ["--diag", "dgfx"], { err: "немає title" });
    ok(r && r.errors.length === 1, "diag answer: без title — одна помилка", r && r.errors.join("\n  ")); }
  // повний прогін теж бачить тест (не лише --diag)
  expectRun("diag answer: повний прогін, answer list — помилка", tree({ type: "answer", answerKind: "list", answer: [1, 2] }), [], { err: "у тесті не дозволено" }); }

// ---- engine-skg-g1: граф умінь (docs/design/skill-graph-math.md §3, §7.1; CONTENT_SCHEMA §11) ----
// Кожне правило — на фікстурі tools/fixtures/graph-fixture.mjs: клас (помилка / дрейф-попередження / V10б), текст і код виходу.
// Дрейф ніколи не дає rc 1 і не стає помилкою: його виправляє лише куратор (graph-report --strict).
{ const { graphTree, node, why, N, L, S, scr, lesson } = await import("./fixtures/graph-fixture.mjs");
  const G = "граф ", DRIFT = "потрібна правка graph.js — допиши в inbox для куратора";
  const gw = rep => rep ? rep.warnings.filter(w => /граф[ ,]/.test(w)) : [];   // «граф V10б: …» і «граф, дрейф V4: …»
  // помилка правила rule (і лише помилки графа цього правила), без дрейфу-помилки; rc 1
  const gErr = (name, mut, rule, sub, args = []) => { const rep = expectRun(`граф: ${name}`, graphTree(mut), args, { err: `${G}${rule}: ` });
    if (rep) ok(rep.errors.some(e => e.includes(`${G}${rule}: `) && (!sub || e.includes(sub))), `граф: ${name}: текст «${sub}»`, rep.errors.join("\n  ")); return rep; };
  // дрейф: попередження з назвою правила й текстом для автора, 0 помилок, rc 0
  const gDrift = (name, mut, rule, sub, args = []) => { const rep = expectRun(`граф: ${name}`, graphTree(mut), args, { warn: `${G}, дрейф ${rule}: `.replace(" ,", ",") });
    if (rep) { const ws = gw(rep).filter(w => w.includes(`дрейф ${rule}: `));
      ok(ws.some(w => (!sub || w.includes(sub)) && w.includes(DRIFT)), `граф: ${name}: попередження дрейфу ${rule} «${sub}» з текстом для куратора`, gw(rep).join("\n  ")); } return rep; };
  const gClean = (name, mut, args = []) => { const rep = expectRun(`граф: ${name}`, graphTree(mut), args, {});
    if (rep) ok(!gw(rep).length, `граф: ${name}: без знахідок графа`, gw(rep).join("\n  ")); return rep; };

  { const rep = gClean("чиста фікстура — 0 помилок, 0 знахідок графа (повний прогін)");
    ok(rep && rep.warnings.some(w => w.includes("#fxal1")), "граф: чиста фікстура: розділи справді перевірено", rep && rep.warnings.slice(0, 3).join("\n  ")); }
  // ненульовий прогін: на чистій фікстурі зламаний u дає помилку — отже, граф завантажено й об'єкти перевіряються
  gErr("u на неіснуючий вузол — V2", M => { S(M, "fxal1", 0).u = "nope"; }, "V2", "u «nope»: немає такого вузла");
  gErr("u без графа в предметі — V2", M => { M.graph = null; S(M, "fxal1", 0).u = "na"; }, "V2", "ще немає графа");
  gErr("u на неоцінюваному екрані (info) — V2", M => { L(M, "fxal1").screens[1].u = "na"; }, "V2", "лише на оцінюваному екрані");
  gErr("u з 3 id — V2", M => { S(M, "fxal1", 0).u = ["na", "nb", "nd"]; }, "V2", "1–2 різних id");
  gErr("u з двома однаковими id — V2", M => { S(M, "fxal1", 0).u = ["na", "na"]; }, "V2", "1–2 різних id");
  gClean("u з 2 id — чисто", M => { S(M, "fxal2", 0).u = ["nb", "na"]; });
  gErr("u у вправі пулу на неіснуючий вузол — V2", M => { M.pools[0].items[0].u = "nope"; }, "V2", "pool#pfx задача 1");
  gErr("петля pre — V2", M => { N(M, "na").pre = [{ u: "na", w: 2, why }]; }, "V2", "петля");
  gErr("дублікат ребра pre + part — V2", M => { N(M, "nb").part = [{ u: "na", why }]; }, "V2", "дублікат");
  gErr("ребро на неіснуючий вузол — V2", M => { N(M, "nb").pre.push({ u: "ghost", w: 1, why }); }, "V2", "pre ghost: немає такого вузла");
  // V1а: формат
  gErr("ребро без why — V1а", M => { delete N(M, "nb").pre[0].why; }, "V1а", "why — непорожній рядок");
  gErr("ребро з порожнім why — V1а", M => { N(M, "nb").pre[0].why = "  "; }, "V1а", "why — непорожній рядок");
  gErr("w 3 — V1а", M => { N(M, "nb").pre[0].w = 3; }, "V1а", "w 3");
  gErr("by «x» — V1а", M => { N(M, "nc").teach = [{ l: "fxal2", by: "x" }]; }, "V1а", "by «x»");
  gErr("st «done» — V1а", M => { N(M, "na").st = "done"; }, "V1а", "st «done»");
  gErr("id не за форматом — V1а", M => { N(M, "nz").id = "Bad_Id"; }, "V1а", "формат");
  gErr("id не унікальний — V1а", M => { M.graph.nodes.push(node("na", "frac", ["fxal3"])); }, "V1а", "не унікальний");
  gErr("id збігається з sk — V1а", M => { N(M, "nz").id = "frac"; }, "V1а", "збігається з навичкою");
  gErr("sk не оголошена — V1а", M => { N(M, "nz").sk = "nosk"; }, "V1а", "sk «nosk» не оголошена");
  gErr("без name — V1а", M => { delete N(M, "nz").name; }, "V1а", "name");
  gErr("base без g — V1а", M => { M.graph.nodes.push(node("nbase", "frac", null, { base: true })); }, "V1а", "base-вузол потребує g");
  gErr("граф без v — V1а", M => { delete M.graph.v; }, "V1а", "v — непорожній рядок");
  gErr("лінія з st «x» — V1а", M => { M.graph.lines.fx.st = "x"; }, "V1а", "st «x»");
  gErr("граф невідомого предмета — V1а", M => { M.graphSubject = "nosubj"; }, "V1а", "невідомий предмет «nosubj»");
  // V3
  gErr("цикл pre ∪ part — V3", M => { N(M, "na").part = [{ u: "nd", why }]; }, "V3", "цикл у pre ∪ part");
  gErr("same між вузлами, з'єднаними шляхом — V3", M => { N(M, "nd").same = [{ u: "na", why }]; }, "V3", "same na");
  gClean("same між незалежними — чисто", M => { N(M, "nz").same = [{ u: "nd", why }]; });
  // V5
  gErr("чужа sk: u на вузол іншої sk — V5", M => { S(M, "fxal1", 0).u = "nc"; }, "V5", "sk вузла «part» ≠ sk екрана «frac»");
  gErr("чужа sk у вправі пулу — V5", M => { M.pools[0].items[0].u = "nc"; }, "V5", "≠ sk вправи");
  gErr("чужа sk у завданні тесту — V5", M => { M.diags[0].items[0].u = "nc"; }, "V5", "≠ sk завдання");
  gErr("sk вузла поза sk завдань теми — V5 для тем", M => { M.diags[0].topics[0].u = "nc"; }, "V5", "не серед sk завдань теми");
  gClean("u теми з sk серед завдань — чисто", M => { M.diags[0].topics[0].u = "na"; });
  // V6
  gErr("два вузли без by у парі — V6а", M => { M.graph.nodes.push(node("na2", "frac", ["fxal1"])); }, "V6а", "кілька типових вузлів без by: na, na2");
  gDrift("урок teach без екрана sk вузла — V6б (дрейф)", M => { M.graph.nodes.push(node("np3", "part", ["fxal3"])); S(M, "fxal3", 0).u = undefined; }, "V6б", "урок fxal3 у teach не має жодного оцінюваного екрана з sk «part»");
  // V7
  gErr("вузол без teach і не base (сирота) — V7а", M => { M.graph.nodes.push(node("norph", "frac", [])); }, "V7а", "без teach і не base");
  gDrift("base-вузол без прив'язаних об'єктів (сирота) — V7б (дрейф)", M => { M.graph.nodes.push(node("nbase", "frac", null, { base: true, g: 3 })); }, "V7б", "не прив'язано жодного");
  gDrift("by: \"u\" без явного u — V7б (дрейф)", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); }, "V7б", "немає жодного явного u на «na2»");
  gClean("by: \"u\" з явним u на екрані — чисто", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); S(M, "fxal1", 2).u = "na2"; });
  gClean("by: \"u\" з явним u у вправі пулу — чисто", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); M.pools[0].items[4].u = "na2"; });
  gClean("вузол by: \"u\" у темі тесту через u завдання — чисто", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); M.diags[0].items[1].u = "na2"; });
  gClean("вузол by: \"u\" у темі тесту через u теми з двома id — чисто", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); M.diags[0].topics[0].u = ["na", "na2"]; });
  // V8 у лінії
  gDrift("пара без вузла з 3 об'єктами в лінії — V8 (дрейф)", M => { M.graph.nodes = M.graph.nodes.filter(n => n.id !== "nc"); L(M, "fxal2").screens.push(scr("part")); }, "V8", "пара (fxal2, part) без вузла — 3");
  gClean("пара без вузла з 2 об'єктами в лінії — дозволено", M => { M.graph.nodes = M.graph.nodes.filter(n => n.id !== "nc"); });
  gClean("пара без вузла з 3 об'єктами поза лінією — лише graph-report", M => { M.graph.nodes = M.graph.nodes.filter(n => n.id !== "nc"); L(M, "fxal2").screens.push(scr("part")); M.graph.lines.fx.lessons = ["fxal1"]; });
  gDrift("урок лінії поза teach — V8 (дрейф)", M => { M.graph.lines.fx.lessons.push("fxal3"); }, "V8", "урок fxal3 лінії «fx» не в teach");
  gDrift("завдання теми лінії без вузла — V8 (дрейф)", M => { M.graph.lines.fx.topics.push("dgfx/c"); M.graph.nodes = M.graph.nodes.filter(n => n.id !== "ncur"); }, "V8", "завдання теми dgfx/c лінії «fx» не прив'язане");
  gDrift("boss-урок, явно доданий у лінію, неоднозначний — V8 (дрейф)", M => { M.graph.lines.fx.lessons.push("fxal4"); }, "V8", "boss-урок fxal4");
  gClean("boss-урок поза лінією, неоднозначний — лише graph-report", () => {});
  // V1б
  gDrift("неіснуючий урок у teach — V1б (дрейф)", M => { N(M, "nz").teach = ["fxzl1", "nope-l1"]; }, "V1б", "teach: немає уроку nope-l1");
  gDrift("неіснуюча тема в lines — V1б (дрейф)", M => { M.graph.lines.fx.topics.push("dgfx/nope"); }, "V1б", "topics: немає теми dgfx/nope");
  gDrift("неіснуючий урок у lines — V1б (дрейф)", M => { M.graph.lines.fx.lessons.push("nope-l1"); }, "V1б", "lessons: немає уроку nope-l1");
  // V4
  gDrift("ребро «вперед» (передумова — пізніший урок розділу) — V4 (дрейф)", M => { N(M, "na").pre = [{ u: "nc", w: 1, why }]; }, "V4", "пізніший урок розділу fxa");
  gDrift("ребро на старший клас — V4 (дрейф)", M => { N(M, "nd").pre.push({ u: "ncur", w: 1, why }); }, "V4", "старший клас");
  gDrift("ребро на пізніший розділ того самого класу — V4 (дрейф)", M => { N(M, "nz").pre = [{ u: "nd", w: 1, why }]; }, "V4", "розділ з тижня 5");
  gDrift("перестановка уроків розділу автором — V4 (дрейф)", M => { const ls = M.sections[0].lessons; [ls[0], ls[1]] = [ls[1], ls[0]]; }, "V4", "pre na: передумова пізніша за урок");
  gDrift("правка weeks розділу автором — V4 (дрейф)", M => { M.sections.find(s => s.id === "fxa").weeks = [9, 12]; }, "V4", "«nb» (fxal2, розділ з тижня 9) — пізніше за «nd» (fxbl1, тиждень 5)");
  { const rep = gClean("нічия V4 (різні розділи, однаковий weeks[0]) — дозволено", M => { N(M, "nb").pre.push({ u: "nz", w: 1, why }); });
    ok(rep && !rep.warnings.some(w => w.includes("V4")), "граф: нічия V4 — без попередження", rep && gw(rep).join("\n  ")); }
  // V10
  { const rep = expectRun("граф: u на gone-вузол — V10б: текст і rc 0", graphTree(M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "na" })); S(M, "fxal1", 0).u = "na-old"; }), [], {});
    ok(rep && rep.warnings.some(w => w.includes("граф V10б: ") && w.includes("онови u: na-old → na")), "граф: V10б — «онови u: старий → новий»", rep && gw(rep).join("\n  ")); }
  gErr("pre на gone-вузол — V10а", M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "na" })); N(M, "nb").pre = [{ u: "na-old", w: 2, why }]; }, "V10а", "ребро на gone-вузол — веди на «na»");
  gErr("ланцюжок gone — V10а", M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "na" }), node("na-older", "frac", ["fxal3"], { gone: "na-old" })); }, "V10а", "ланцюжки перенаправлень");
  gErr("gone на неіснуючий вузол — V2", M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "ghost" })); }, "V2", "gone: немає вузла «ghost»");
  // baseline-тема: u лише на base-вузол (V5)
  { const b4 = M => { M.sections.push({ id: "fx4", grade: 4, weeks: [1, 4], title: "Фікстура", why: "Регресійний тест графа вмінь: baseline-тема.", meta: M.sections[0].meta, lessons: [lesson("fx4l1", ["num"])] });
      M.diags.push({ id: "dgb", grade: 4, title: "Тест-фікстура", why: "Регресійний тест графа вмінь.", status: "draft", meta: M.sections[0].meta,
        topics: [{ id: "b", title: "Опора", kind: "pre", baseline: true, lessons: [], for: ["fx4"] }, { id: "c", title: "Тема класу", kind: "cur", lessons: ["fx4l1"] }],
        items: [{ topic: "b", type: "number", sk: "num", title: "Скільки?", answer: 2 }, { topic: "b", type: "number", sk: "num", title: "А тепер?", answer: 3 }, { topic: "c", type: "number", sk: "num", title: "Ще?", answer: 4 }] });
      M.graph.nodes.push(node("n4", "num", ["fx4l1"]), node("nbase", "num", null, { base: true, g: 3 })); };
    gClean("baseline-тема з u на base-вузол — чисто", M => { b4(M); M.diags[1].topics[0].u = "nbase"; });
    gErr("baseline-тема з u на звичайний вузол — V5", M => { b4(M); M.diags[1].topics[0].u = "n4"; }, "V5", "лише до base-вузла"); }
  // рев'ю G1: P2-1 — lesson завдання тесту звужує типові вузли до свого уроку; P3-1 — фікстури на мутанти рецензента
  gDrift("двоурокова тема: завдання з lesson уроку без вузла — V8 (lesson не підміняється сусіднім уроком)", M => { const t = M.diags[0].topics[0]; t.lessons = ["fxal1", "fxal3"];
    M.diags[0].items[0].lesson = "fxal1"; M.diags[0].items[1].lesson = "fxal3"; }, "V8", "dgfx завдання 2");
  gClean("двоурокова тема: lesson кожного завдання з вузлом — чисто", M => { const t = M.diags[0].topics[0]; t.lessons = ["fxal1", "fxal2"];
    M.diags[0].items[0].lesson = "fxal1"; M.diags[0].items[1].lesson = "fxal2"; });
  { const rep = gClean("ребро між вузлами одного уроку — не дрейф V4", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }], { pre: [{ u: "na", w: 1, why }] })); S(M, "fxal1", 2).u = "na2"; });
    ok(rep && !rep.warnings.some(w => w.includes("V4")), "граф: ребро в межах уроку — без V4", rep && gw(rep).join("\n  ")); }
  gErr("base-вузол з teach — V1а", M => { M.graph.nodes.push(node("nbase", "frac", ["fxal3"], { base: true, g: 3 })); }, "V1а", "base-вузол — без teach");
  gDrift("вузол прив'язаний лише через u теми (завдання мають власні u) — сирота V7б", M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal3", by: "u" }]));
    M.diags[0].topics[0].u = ["na", "na2"]; M.diags[0].items[0].u = "na"; M.diags[0].items[1].u = "na"; }, "V7б", "до вузла не прив'язано жодного");
  // R4-P3-3: validate --section показує знахідки graph.js лише для уроків цього розділу; повний прогін — усі
  { const bad = M => { N(M, "nd").pre[0].w = 3; S(M, "fxal1", 0).u = "nope"; };
    // помилка graph.js (куратор) у --section — попередження з позначкою, rc 0 (рев'ю G1, P3-4); у повному прогоні — помилка
    const ra = expectRun("граф --section fxb: помилка вузла свого уроку — позначка куратора, не помилка розділу", graphTree(bad), ["--section", "fxb"], { warn: "помилка графа (куратор), не блокує розділ — граф V1а: pre nb: w 3" });
    ok(ra && !ra.warnings.some(w => w.includes("u «nope»")), "граф --section fxb: чужого u не видно", ra && gw(ra).join("\n  "));
    const rb = expectRun("граф --section fxa: свій u, без помилки чужого вузла", graphTree(bad), ["--section", "fxa"], { err: "граф V2: u «nope»" });
    expectRun("граф --section fxz: чужі помилки графа не видно", graphTree(bad), ["--section", "fxz"], {});
    const rf = expectRun("граф повний прогін: обидві помилки", graphTree(bad), [], { err: G });
    ok(rf && rf.errors.length === 2, "граф повний прогін: рівно дві помилки графа", rf && rf.errors.join("\n  "));
    expectRun("граф --diag dgfx: помилки уроків розділу не видно", graphTree(bad), ["--diag", "dgfx"], {});
    expectRun("граф --diag dgfx: свій u у тесті видно", graphTree(M => { M.diags[0].items[0].u = "nope"; }), ["--diag", "dgfx"], { err: "граф V2: u «nope»" });
    expectRun("граф --pool pfx: свій u у вправі видно", graphTree(M => { M.pools[0].items[0].u = "nope"; }), ["--pool", "pfx"], { err: "граф V2: u «nope»" });
    const rd = expectRun("граф --section fxa: дрейф свого уроку видно (перестановка)", graphTree(M => { const ls = M.sections[0].lessons; [ls[0], ls[1]] = [ls[1], ls[0]]; }), ["--section", "fxa"], { warn: "дрейф V4" });
    expectRun("граф --section fxb: дрейф чужого уроку не видно", graphTree(M => { const ls = M.sections[0].lessons; [ls[0], ls[1]] = [ls[1], ls[0]]; }), ["--section", "fxb"], { noWarn: "дрейф V4" }); }
}

// engine-option-letters: літери варіантів беруться з app/app.js OPT_LETTERS; варіантів більше, ніж літер, — помилка (раніше «undefined» після 6-го)
{ const L = fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").match(/const OPT_LETTERS="([^"]+)"/)?.[1] || "";
  ok(L.length >= 20 && new Set(L).size === L.length && !/[ҐЄЇЙЬ]/.test(L) && L.startsWith("АБВГДЕ"), "OPT_LETTERS: унікальні літери без Ґ, Є, Ї, Й, Ь, від АБВГДЕ", L);
  const multi = n => one("fxo", { extra: { type: "multi", title: "Обери", body: "Які числа парні?", opts: Array.from({ length: n }, (_, i) => String(i + 1)), correct: [1] } });
  expectRun("multi з 11 варіантами — чисто", multi(11), ["--section", "fxo"], {});
  expectRun(`multi з ${L.length + 1} варіантами — помилка`, multi(L.length + 1), ["--section", "fxo"], { err: "більше, ніж літер" }); }

// tools-math-fig-audit: умова посилається на рисунок без ілюстрації — попередження (не помилка); з lab на екрані чи на попередньому
// екрані уроку — чисто; «на графіку функції $…$», «дотична до графіка» — поняття, не посилання
const { figCues: figCuesT } = await import(path.join(ROOT, "tools/lib.mjs"));
{ const REF = "умова посилається на рисунок";
  expectRun("«На рисунку» без ілюстрації — попередження", one("fxf", { body: "На рисунку трикутник $ABC$. Скільки в ньому кутів?" }), ["--section", "fxf"], { warn: REF });
  expectRun("«За графіком» на екрані answer уроку — попередження", one("fxf", { extra: { type: "answer", title: "Висота", body: "За графіком знайди висоту в метрах.", answer: 4 } }), ["--section", "fxf"], { warn: REF });
  // рев'ю tools-math-fig-audit P2-1: правило діє й у пулі (validate — гілка SLID.pool) і в тесті рівня (гілка SLID.diag)
  const poolRef = (extra = {}) => ({ "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": poolJS("fxp", ["Крок: $2 + 2 = 4$."]).replace('"title": "$2 + 2$"', `"title": "На рисунку $2 + 2$ яблука"${extra.lab ? `, "lab": ${JSON.stringify(extra.lab)}` : ""}`) });
  { const rep = expectRun("пул: «На рисунку» без ілюстрації — попередження", poolRef(), ["--pool", "pfx"], { warn: REF });
    if (rep) ok(rep.warnings.some(w => w.includes(REF) && w.includes("pool#pfx") && w.includes("a01")), "пул: попередження вказує на pfx a01", rep.warnings.join("\n  ")); }
  expectRun("пул: «На рисунку» з lab — чисто", poolRef({ lab: plane({}) }), ["--pool", "pfx"], { noWarn: REF });
  const diagRef = title => ({ "content/math/g8-fxc.js": secJS("math", mathSec("fxc")), "content/math/diag-g8.js": `SLID.diag("math", ${JSON.stringify({ id: "dgfx", grade: 8, title: "Тест-фікстура", why: "Регресійний тест валідатора: рисунок у тесті.", status: "draft",
    meta: { author: "test", created: "2026-11-03", factcheck: null, teacher: null }, topics: [{ id: "c", title: "Тема класу", kind: "cur", lessons: ["fxcl1"] }],
    items: [{ topic: "c", type: "number", sk: Object.keys(MATH_SKILLS)[0], title, answer: 2 }] }, null, 1)});\n` });
  { const rep = expectRun("тест рівня: «за малюнком» без ілюстрації — попередження", diagRef("Скільки кутів за малюнком?"), ["--diag", "dgfx"], { warn: REF });
    if (rep) ok(rep.warnings.some(w => w.includes(REF) && w.includes("dgfx") && w.includes("завдання 1")), "тест рівня: попередження вказує на dgfx завдання 1", rep.warnings.join("\n  ")); }
  expectRun("тест рівня: без посилання — чисто", diagRef("Скільки кутів у трикутнику?"), ["--diag", "dgfx"], { noWarn: REF });
  // поріг geo «≥ 3 точки» (рев'ю P3): дві точки — не geo
  { const cue = n => figCuesT({ type: "answer", title: `У трикутнику ${n} знайди кут.` })?.level ?? null;
    ok(cue("$ABC$") === "geo" && cue("$AB$") === null, "figCues: geo від 3 позначень точок", `${cue("$ABC$")} ${cue("$AB$")}`); }
  expectRun("«На рисунку» з lab на екрані й перед ним — чисто", one("fxf", { body: "На рисунку трикутник $ABC$.", lab: plane({}) }), ["--section", "fxf"], { noWarn: REF });
  expectRun("«на графіку функції $y = x$», «до графіка» — не посилання", one("fxf", { body: "Точка $M$ лежить на графіку функції $y = x$. Дотична до графіка $y = x^2$, площа під графіком." }), ["--section", "fxf"], { noWarn: REF });
  // tools/fig-audit.mjs на тому самому фікстурному дереві: геометрія з позначеннями — група geo, ref — окремо, ілюстроване — не в звіті
  runTree(one("fxf", { body: "У паралелепіпеді $ABCDA_1B_1C_1D_1$ знайди ребро $BB_1$.", extra: { type: "answer", title: "Висота", body: "За графіком знайди висоту.", answer: 4 } }), ["--section", "fxf"]);
  const r = spawnSync(process.execPath, [path.join(tmp, "tools/fig-audit.mjs"), "--json"], { cwd: tmp, encoding: "utf8" });
  let rep = null; try { rep = JSON.parse(r.stdout); } catch {}
  ok(rep && r.status === 0, "fig-audit: JSON і код 0", (r.stdout || "") + (r.stderr || ""));
  if (rep) { const g = rep.rows.map(x => `${x.where}:${x.group}`).sort();
    ok(JSON.stringify(g) === JSON.stringify(["fxfl1 екран 2:geo", "fxfl1 екран 3:geo", "fxfl1 екран 4:ref"]), "fig-audit: групи geo/ref за фікстурою", JSON.stringify(g));
    ok(rep.screens === 4, "fig-audit: переглянуто 4 екрани (не 0)", String(rep.screens)); }
  const bad = spawnSync(process.execPath, [path.join(tmp, "tools/fig-audit.mjs"), "--subjekt", "math"], { cwd: tmp, encoding: "utf8" });
  ok(bad.status === 2, "fig-audit: невідомий аргумент — код 2", String(bad.status)); }

// ---- engine-lang-p3: мовні вправи й правила ukr ----
{ const UKR_SK = "orth";
  const ukrSec = (id, extra) => ({ id, grade: 5, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: мовні вправи.",
    meta: { author: "test", created: "2026-11-03", factcheck: null, teacher: null },
    lessons: [{ id: `${id}l1`, title: "Фікстура", why: "Перевірити правила мовних вправ.", icon: "pot", status: "draft", outro: { text: "Готово.", learned: ["Перше", "Друге"] },
      screens: [{ type: "intro", title: "Початок", body: "Як пишемо слово?" },
        { type: "gaps", sk: UKR_SK, title: "Е чи И?", text: "Ми йшли с{*е|и}лом.", hint: "Зміни слово.", fbOk: "Так.", fbText: "Село — с<b>е</b>ла: перевіряємо наголосом." },
        ...[].concat(extra).map(x => ({ sk: UKR_SK, fbOk: "Так.", fbText: "Пояснення, чому саме так, для фікстури.", ...x }))] }] });
  const u = (extra, id = "fxu") => ({ [`content/ukr/g5-${id}.js`]: secJS("ukr", ukrSec(id, extra)) });
  const A = ["--section", "fxu"], BAN = "заборонена фраза";
  // п. 6: заборонена фраза в <s>…</s>, у неправильному варіанті gaps, у цілі й хибній групі pick — не рахується; у звичайному тексті — так
  expectRun("ukr: «вірно» в <s>…</s> — чисто", u({ type: "info", title: "Як сказати", body: "Не <s>вірно</s>, а правильно." }), A, { noWarn: BAN });
  expectRun("ukr: «вірно» у хибному варіанті gaps — чисто", u({ type: "gaps", title: "Обери", text: "Відповідь {*правильна|вірна}, а {*правильно|вірно} — так." }), A, { noWarn: BAN });
  expectRun("ukr: pick «Знайди помилку» — «вірно» в цілі [ ] і [! ] — чисто", u({ type: "pick", title: "Знайди помилку", text: "Він [вірно] сказав, а [!на протязі] дня мовчав." }), A, { noWarn: BAN });
  expectRun("ukr: «вірно» в тексті уроку — попередження", u({ type: "info", title: "Як сказати", body: "Це вірно." }), A, { warn: BAN });
  expectRun("ukr: «вірно» у правильному варіанті gaps — попередження", u({ type: "gaps", title: "Обери", text: "Відповідь {*вірно|правильно} тут." }), A, { warn: BAN });
  // п. 2: hyp на мовних типах дозволено, poll — ні
  expectRun("ukr: gaps з hyp — чисто (здогадка без оцінки)", u({ type: "gaps", hyp: true, fbTitle: "Перевірмо", title: "Як гадаєш?", text: "Ден{ь|*—}ки йдуть." }), A, { noWarn: "poll" });
  expectRun("ukr: pick з poll — помилка", u({ type: "pick", poll: "p1", fbTitle: "Цікаво", title: "Як гадаєш?", text: "[Сонце] світить." }), A, { err: "poll лише для choice" });
  // п. 18: пояснення посилається на номер варіанта
  const OPTN = "номер варіанта";
  expectRun("ukr: «у другому варіанті» у fbText — попередження", u({ type: "choice", title: "Обери", opts: ["Перше", "Друге"], correct: 0, fbText: "У другому варіанті слово стоїть не на місці, тому правильно перше." }), A, { warn: OPTN });
  expectRun("ukr: «варіант Б» у fbBad — попередження", u({ type: "choice", title: "Обери", opts: ["Перше", "Друге"], correct: 0, fbBad: "Варіант Б не підходить.", fbText: "Правильно перше, бо слово стоїть на місці." }), A, { warn: OPTN });
  expectRun("ukr: «варіант» без номера — чисто", u({ type: "choice", title: "Обери", opts: ["Перше", "Друге"], correct: 0, fbText: "Обидва варіанти схожі, але друге слово стоїть не на місці." }), A, { noWarn: OPTN });
  // п. 16: pick «увага» — одна хибна група на три правильні; п. 10: « —» замість «–»; п. 3: тег посеред слова з пропуском
  expectRun("ukr: pick 3 правильні групи й 1 хибна — попередження", u({ type: "pick", title: "Знайди", text: "[Добрий день], [будь ласка], [щиро дякую] і [!до побачення] тут." }), A, { warn: "форма кнопки видає відповідь" });
  expectRun("ukr: pick [!!x] — помилка", u({ type: "pick", title: "Знайди", text: "[Сонце] і [!!місяць]." }), A, { err: "«!» двічі" });
  expectRun("ukr: gaps « —» з пробілом — попередження", u({ type: "gaps", title: "Знак", text: "Ніч {*–| —|,} тиша." }), A, { warn: "нічого не писати" });
  expectRun("ukr: gaps — тег посеред слова з пропуском — попередження", u({ type: "gaps", title: "Е чи И?", text: "<b>б{*е|и}р</b>{*е|и}за" }), A, { warn: "розірване HTML-тегом" });
  // п. 7: split з нульовим закінченням
  expectRun("ukr: split zero «стіл|» — чисто", u({ type: "split", title: "Основа й закінчення", word: "стіл|", zero: true }), A, {});
  expectRun("ukr: split «стіл|» без zero — помилка", u({ type: "split", title: "Основа й закінчення", word: "стіл|" }), A, { err: "zero: true" });
  // п. 15: милозвучність — попередження лише для ukr і лише правила з малим шумом; «і» між зіставленими поняттями — ні
  const EU = "милозвучність";
  expectRun("ukr: «брат в сестри» — попередження милозвучності", u({ type: "info", title: "Гості", body: "Брат в сестри гостює." }), A, { warn: EU });
  expectRun("ukr: «вода і повітря», «Марія і Олег» — без попередження", u({ type: "info", title: "Природа", body: "Вода і повітря потрібні всім. Марія і Олег гуляють." }), A, { noWarn: EU });
  expectRun("ukr: милозвучність в outro — попередження", { "content/ukr/g5-fxu.js": secJS("ukr", (x => (x.lessons[0].outro.learned[0] = "Млинці з сметаною", x))(ukrSec("fxu", []))) }, A, { warn: EU });
  expectRun("math: «брат в сестри» — правило лише для ukr", one("fxm", { body: "Брат в сестри має $2 + 2$ яблука." }), ["--section", "fxm"], { noWarn: EU });
}

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-validate: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
