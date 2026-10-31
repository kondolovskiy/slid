#!/usr/bin/env node
// Слід · регресійні тести валідатора (tools/validate.mjs) на синтетичних фікстурах.
// Зараз: D-027 — урок історії без справжнього зображення img — ПОМИЛКА (не попередження); svg/fig не рахуються; інші предмети не зачеплено.
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

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-validate: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
