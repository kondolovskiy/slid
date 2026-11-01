#!/usr/bin/env node
// Слід · регресійні тести валідатора (tools/validate.mjs) на синтетичних фікстурах.
// Зараз: D-027 — урок історії без справжнього зображення img — ПОМИЛКА (не попередження), і для boss теж; svg/fig не рахуються; інші предмети не зачеплено.
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
for (const s of ["hist", "math"]) fs.copyFileSync(path.join(ROOT, `content/subjects/${s}.js`), path.join(tmp, `content/subjects/${s}.js`));
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
  ["hist boss з img", "hist", IMG, false, true]];

CASES.forEach(([name, subj, illus, expectErr, boss], i) => {
  const id = `fx${i}`, dir = path.join(tmp, "content", subj);
  // по одному фікстурному розділу за прогін: прибрати розділи попередніх випадків
  for (const s of ["hist", "math"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
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
  ["{sin(a)} — шаблон lab, не назва — чисто", { lab: plane({ show: "$y = {sin(a)}$" }) }, null, null]];
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
  for (const s of ["hist", "math"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
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
  ["вкладений шаблон у ${…} перевіряється", "`Приріст ${ `$\\Delta x$` }.`", "", "«\\Delta»"]]) {
  const id = `fxr${name.length}`;
  expectRun(`lexer: ${name}`, { [`content/math/g8-${id}.js`]: rawSec(id, lit, tail) }, ["--section", id], { err });
}
// P3-2: «\n»/«\t» перед словом, що збігається з TeX-назвою, поза формулою — попередження, а не помилка; у $…$ і перед { — помилка
expectRun("escape: \"x\\ne\" поза формулою — попередження", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Рядок x\ne."`) }, ["--section", "fxn"], { warn: "навмисний перенос" });
expectRun("escape: \"a\\to\" поза формулою — попередження", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Стрілка a\to."`) }, ["--section", "fxn"], { warn: "«\\to»" });
expectRun("escape: \"$a \\to b$\" у формулі — помилка", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Стрілка $a \to b$."`) }, ["--section", "fxn"], { err: "«\\to»" });
expectRun("escape: \"\\frac{1}{2}\" без $ перед { — помилка", { "content/math/g8-fxn.js": rawSec("fxn", String.raw`"Половина \frac{1}{2}."`) }, ["--section", "fxn"], { err: "«\\frac»" });
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
// P3-5: credits — лише https://; запис із чотирьох полів; і в розділі, і в самому предметі
{ const cred = (id, credits) => { const sec = mathSec(id); sec.credits = credits; return { [`content/math/g8-${id}.js`]: secJS("math", sec) }; };
  expectRun("credits: https — чисто", cred("fxc", [["Фото", "Автор", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:X.jpg"]]), ["--section", "fxc"], {});
  expectRun("credits: http:// — помилка", cred("fxc", [["Фото", "Автор", "CC BY 4.0", "http://commons.wikimedia.org/wiki/File:X.jpg"]]), ["--section", "fxc"], { err: "лише https" });
  expectRun("credits: відносний шлях — помилка", cred("fxc", [["Фото", "Автор", "CC0", "img/a.png"]]), ["--section", "fxc"], { err: "лише https" });
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
    ["form improper зі змішаним ключем — помилка", { answer: "2 1/3", form: "improper" }, "form improper"]]) {
    const id = "fxk";
    const rep = expectRun(`answer в уроці: ${name}`, ans(id, f), ["--section", id], { err: err && `answer: ${err}`, also: "сам проходить перевірку" });
    if (rep && err) ok(rep.errors.every(e => e.includes("#fxkl1 екран 4 (answer)")), `answer в уроці: ${name}: помилка вказує на екран`, rep.errors.join("\n  ")); }
  // пул: ті самі поля перевіряє validatePool — checkScreen їх не дублює
  const bad = `SLID.pool("math", ${JSON.stringify({ id: "pfx", section: "fxp", status: "draft", meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null },
    sources: [{ id: "src", title: "Фікстура", url: "https://example.org/" }],
    items: [{ id: "a01", lesson: "fxpl1", lvl: 1, sk: Object.keys(MATH_SKILLS)[0], src: "src №1", type: "answer", title: "Обчисли", body: "<p>Скільки?</p>", answer: 5, units: ["м", "см"], steps: ["Пояснення."] }] }, null, 1)});\n`;
  const rp = expectRun("answer у пулі: units поза quantity — помилка один раз", { "content/math/g8-fxp.js": secJS("math", mathSec("fxp")), "content/math/pool-g8-fxp.js": bad }, ["--pool", "pfx"], { err: "units — лише для answerKind quantity" });
  ok(rp && rp.errors.length === 1, "answer у пулі: без дубля з checkScreen", rp && rp.errors.join("\n  ")); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-validate: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
