#!/usr/bin/env node
// Слід · регресійні тести валідатора (tools/validate.mjs) на синтетичних фікстурах.
// Зараз: D-027 — урок історії без справжнього зображення img — ПОМИЛКА (не попередження); svg/fig не рахуються; інші предмети не зачеплено.
// TeX, що показався б сирим: {,}, \; поза формулою, підписи SVG лабораторії, alt, назва уроку (engine-math-render-tex-gaps).
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
const lesson = (id, illus) => ({
  id, title: "Фікстура", why: "Перевірити правило про зображення.", icon: "pot", status: "draft",
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
  ["math без img (правило лише для історії)", "math", {}, false]];

CASES.forEach(([name, subj, illus, expectErr], i) => {
  const id = `fx${i}`, dir = path.join(tmp, "content", subj);
  // по одному фікстурному розділу за прогін: прибрати розділи попередніх випадків
  for (const s of ["hist", "math"]) fs.rmSync(path.join(tmp, "content", s), { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const sec = { id, grade: 5, weeks: [1, 2], title: "Фікстура", why: "Регресійний тест валідатора: правило D-027 про зображення.",
    meta: { author: "test", created: "2026-10-31", factcheck: null, teacher: null }, lessons: [lesson(`${id}l1`, illus)] };
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
const texLesson = (id, { title = "Фікстура", body = "Скільки буде $2 + 2$?", lab, cap } = {}) => ({
  id, title, why: "Перевірити правила про TeX.", icon: "pot", status: "draft", outro: { text: "Готово.", learned: ["Перше", "Друге"] },
  screens: [
    { type: "intro", title: "Початок", body: "Як записати число?" },
    lab ? { type: "explore", title: "Модель", body: "Покрути $a$.", lab } : { type: "info", title: "Теорія", body, ...(cap ? { img: "img/fx/photo.png", cap } : {}) },
    { type: "choice", title: "Питання", body, opts: ["4", "5"], correct: 0, sk: Object.keys(MATH_SKILLS)[0],
      fbOk: "Так.", fbText: "Два і два — це чотири, бо додаємо одиниці.", hint: "Порахуй на пальцях." }]
});
const plane = extra => ({ kind: "plane", view: [-5, 5, -5, 5], params: { a: { min: 0, max: 4, start: 1 } }, ...extra });
const pt = label => plane({ points: { P: { x: "a", y: "1", label } } });
const TEX = "TeX поза", ODD = "непарна кількість $";
const TEX_CASES = [
  // [назва, параметри уроку, підрядок очікуваної помилки або null, підрядок очікуваного попередження або null]
  ["{,} у формулі — рендериться", { body: "Маємо $k = 0{,}5$ і $M(-0{,}6;\\,0{,}8)$." }, null, null],
  ["\\; між формулами — попередження", { body: "Пари: $1 \\to 4$,\\; $2 \\to 5$." }, null, TEX],
  ["{,} поза формулою — попередження", { body: "Число 0{,}5 без доларів." }, null, TEX],
  ["підписи SVG з підмножини — чисто", { lab: plane({ points: { P: { x: "a", y: "1", label: "$x_1$" }, Q: { x: "1", y: "2", label: "$(1;\\,-4)$" } }, segs: [{ a: "P", b: "Q", label: "$\\Delta x$" }] }) }, null, null],
  ["{,} у підписі SVG — не шаблон", { lab: pt("$0{,}5$") }, null, null],
  ["\\sqrt у підписі SVG — помилка", { lab: pt("$\\sqrt{2}$") }, "у підписах SVG", null],
  ["непарний $ у підписі SVG — попередження", { lab: pt("${a}^2") }, null, ODD],
  ["непарний $ у lab.show — попередження", { lab: plane({ show: "Сторона ${a|0}" }) }, null, ODD],
  ["формула в cap (alt фото) — помилка", { cap: "Графік $y = x^2$" }, "cap: формула", null],
  ["формула в назві уроку — попередження", { title: "Де живе $\\sqrt{2}$?" }, null, "назві уроку"]];
let MATH_SKILLS = {};
{ const ctx = { SLID: { subject: (a, b) => { MATH_SKILLS = (b || a).skills || {}; } } }; ctx.window = ctx;
  try { new Function("SLID", "window", fs.readFileSync(path.join(ROOT, "content/subjects/math.js"), "utf8"))(ctx.SLID, ctx); } catch {} }
const texIssue = x => /TeX|\$|формул|SVG/.test(x);
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

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-validate: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
