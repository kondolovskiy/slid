#!/usr/bin/env node
// Слід · тести режиму --write-pool у tools/make-tasks.mjs (engine-practice-pool): задачі на пули за матрицею без дублів.
// Справжня черга перевіряється лише в --dry-run (нічого не пише); створення — на фікстурній матриці й тимчасовій теці задач.
// Запуск: node tools/test-make-tasks.mjs   (без залежностей)
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync } from "node:child_process"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + extra : ""}`); } };
const run = (...a) => { const r = spawnSync(process.execPath, [path.join(ROOT, "tools/make-tasks.mjs"), "--write-pool", ...a], { cwd: ROOT, encoding: "utf8" }); return { out: r.stdout + r.stderr, status: r.status }; };
const listTasks = dir => ["todo", "doing", "review", "done"].flatMap(d => fs.existsSync(path.join(dir, d)) ? fs.readdirSync(path.join(dir, d)).map(f => d + "/" + f) : []).sort();

// 1. Справжня черга: dry-run не створює жодної задачі й нічого не пише (50 наявних write-math-pool-*, відкладені g11m2/g11m6)
{ const before = listTasks(path.join(ROOT, "tasks"));
  const r = run("--dry-run");
  ok(r.status === 0, "реальна черга: код 0", r.out);
  ok(/створилося б задач на пули: 0\b/.test(r.out), "реальна черга: 0 нових задач — без дублів ручних write-math-pool-*", r.out);
  ok(/задача вже є — \d+/.test(r.out) && +r.out.match(/задача вже є — (\d+)/)[1] >= 45, "реальна черга: щонайменше 45 наявних задач розпізнано", r.out);
  ok(/відкладено — 2 \(g11m2, g11m6\)/.test(r.out), "реальна черга: відкладені розділи не генеруються", r.out);
  ok(JSON.stringify(listTasks(path.join(ROOT, "tasks"))) === JSON.stringify(before), "реальна черга: dry-run нічого не записав"); }

// 2. Фікстури: тимчасова тека задач і матриця
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "slid-test-make-tasks-"));
process.on("exit", () => fs.rmSync(tmp, { recursive: true, force: true }));
const T = path.join(tmp, "tasks"); for (const d of ["todo", "doing", "review", "done"]) fs.mkdirSync(path.join(T, d), { recursive: true });
fs.writeFileSync(path.join(T, "done", "pool-zz3-renamed.md"), "---\nid: write-math-pool-zz3\ntype: write-pool\n---\n# Стара задача\n");
fs.writeFileSync(path.join(T, "review", "write-math-pool-zz4.md"), "---\nid: write-math-pool-zz4\n---\n");
fs.writeFileSync(path.join(T, "doing", "write-math-pool-zz6.md"), "# без frontmatter id — пропуск лише за іменем файлу\n");
const L = (section, lesson, scope, extra = {}) => ({ grade: 8, section, lesson, title: `Урок ${lesson}`, curricularScope: scope, reason: `причина ${lesson}`,
  evidence: "src:1–2", sk: "num", pool: `p${section}`, formats: ["number"], exercises: scope === "required" ? { min: 6, max: 8, levels: [3, 2, 1] } : { min: 0, max: 0, levels: [] }, ...extra });
const matrix = { version: "fx.v1", status: "accepted", deferredSections: ["zz5"], lessons: [
  L("zz1", "zz1l1", "required"), L("zz1", "zz1l2", "required", { formats: ["number", "expression"], exercises: { min: 5, max: 7, levels: [2, 2, 1] } }), L("zz1", "zz1l3", "optional"),
  L("zz2", "zz2l1", "optional"), L("zz2", "zz2l2", "pending"),
  L("zz3", "zz3l1", "required"), L("zz4", "zz4l1", "required"), L("zz5", "zz5l1", "required"),
  L("g8m2", "g8m2l1", "required", { pool: "pg8m2" }), L("zz6", "zz6l1", "required"),
  L("zz7", "zz7l1", "required", { pool: "pg8m2" }),   // пул pg8m2 уже є в змісті, файлу pool-g8-zz7.js немає — пропуск за id пулу
  { ...L("zz9", "zz9l1", "required"), grade: 9 }] };
const MF = path.join(tmp, "matrix.json"); fs.writeFileSync(MF, JSON.stringify(matrix));
{ const r = run("--dry-run", "--matrix", MF, "--tasks", T);
  ok(r.status === 0 && /створилося б задач на пули: 2 \(zz1, zz9\)/.test(r.out), "fixture dry-run: лише zz1 і zz9", r.out);
  ok(/задача вже є — 3/.test(r.out), "fixture: задача за id у frontmatter (перейменований файл), у review і за іменем без id — пропущено", r.out);
  ok(/пул уже є — 2 \(g8m2, zz7\)/.test(r.out), "fixture: розділ з наявним пулом pg8m2 (і за файлом, і лише за id пулу) — пропущено", r.out);
  ok(/відкладено — 2 \(zz2, zz5\)/.test(r.out), "fixture: без required і deferredSections — пропущено", r.out);
  ok(!fs.readdirSync(path.join(T, "todo")).length, "fixture dry-run: нічого не записано"); }
{ const r = run("--matrix", MF, "--tasks", T, "--grade", "8");
  ok(r.status === 0 && /створено задач на пули: 1 \(zz1\)/.test(r.out), "fixture --grade 8: створено лише zz1", r.out);
  const f = path.join(T, "todo", "write-math-pool-zz1.md"), body = fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
  ok(body.startsWith("---\nid: write-math-pool-zz1\ntype: write-pool\nsubject: math\ngrade: 8\nstatus: todo\n"), "шаблон: frontmatter", body.slice(0, 200));
  ok(body.includes("depends_on: [curate-math-personalization-map, engine-math-pool-answer-formats]"), "шаблон: expression → залежність від форматів");
  ok(body.includes("`content/math/pool-g8-zz1.js`") && body.includes('id: "pzz1", section: "zz1"'), "шаблон: файл і id пулу з матриці");
  ok(body.includes("- `zz1l1` — Урок zz1l1 **[required]**") && body.includes("- `zz1l3` — Урок zz1l3 **[optional]**"), "шаблон: уроки зі scope");
  ok(body.includes("Обов’язковий обсяг розділу за fx.v1 — 11–15 вправ") && body.includes("Покриття: **2 required-уроків, 11–15 вправ**"), "шаблон: обсяг лише required");
  ok(body.includes("| zz1l2 | required | 5–7 (2/2/1 за рівнями мінімум) | number, expression; src:1–2 |") && body.includes("| zz1l3 | optional | 0; відкладено |"), "шаблон: таблиця матриці");
  ok(body.includes("- zz1l3: причина zz1l3") && body.includes("verify-math-personalization-g8") && body.includes("node tools/validate.mjs --pool pzz1"), "шаблон: причини відкладення, verify/qa, validate");
  ok(!fs.existsSync(path.join(T, "todo", "write-math-pool-zz9.md")), "--grade 8: 9-й клас не створено"); }
{ const r = run("--matrix", MF, "--tasks", T);
  ok(/створено задач на пули: 1 \(zz9\)/.test(r.out) && /задача вже є — 4/.test(r.out), "повторний запуск: zz1 уже є, створено лише zz9 (ідемпотентно)", r.out);
  const r2 = run("--matrix", MF, "--tasks", T);
  ok(/створено задач на пули: 0\b/.test(r2.out), "третій запуск: 0 нових", r2.out); }
{ const r = run("--subject", "hist", "--dry-run");
  ok(r.status === 2 && /лише для math/.test(r.out), "--subject hist: матриці немає — код 2", r.out); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-make-tasks: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
