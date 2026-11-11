#!/usr/bin/env node
// Слід · тести tools/make-tasks.mjs: режим --write-pool (engine-practice-pool, задачі на пули за матрицею без дублів), звичайний режим і --dry-run в обох.
// Справжня черга перевіряється лише в --dry-run (нічого не пише); створення — на фікстурній матриці й тимчасовій теці задач.
// Запуск: node tools/test-make-tasks.mjs   (без залежностей)
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync } from "node:child_process"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + extra : ""}`); } };
const run = (...a) => { const r = spawnSync(process.execPath, [path.join(ROOT, "tools/make-tasks.mjs"), "--write-pool", ...a], { cwd: ROOT, encoding: "utf8" }); return { out: r.stdout + r.stderr, status: r.status }; };
const listTasks = dir => ["todo", "doing", "review", "done"].flatMap(d => fs.existsSync(path.join(dir, d)) ? fs.readdirSync(path.join(dir, d)).map(f => d + "/" + f) : []).sort();

// 1. Справжня черга — лише інваріанти (рев'ю engine-p3-1101, P2-1): тест у CI, а черга tasks/ і матриця змінюються звичайною роботою
//    (урок стає required, закриті задачі архівують), тож точні кількості й імена розділів — лише на фікстурі (блок 2).
//    Інваріанти: код 0; dry-run нічого не записав; кожен розділ матриці потрапив рівно в одну групу (made + task + pool + deferred =
//    кількість розділів); у deferred — саме розділи з deferredSections або без required-уроків.
{ const before = listTasks(path.join(ROOT, "tasks"));
  const r = run("--dry-run");
  ok(r.status === 0, "реальна черга: код 0", r.out);
  ok(JSON.stringify(listTasks(path.join(ROOT, "tasks"))) === JSON.stringify(before), "реальна черга: dry-run нічого не записав");
  const M = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/math-personalization-coverage.json"), "utf8")), secs = new Map();
  for (const l of M.lessons || []) (secs.get(l.section) || secs.set(l.section, []).get(l.section)).push(l);
  const dset = new Set(M.deferredSections || []);
  const expDeferred = [...secs].filter(([id, ls]) => dset.has(id) || !ls.some(l => l.curricularScope === "required")).map(([id]) => id).sort();
  const made = r.out.match(/створилося б задач на пули: (\d+)/), sk = r.out.match(/задача вже є — (\d+); пул уже є — (\d+)(?: \([^)]*\))?; без required \/ відкладено — (\d+)(?: \(([^)]*)\))?/);
  ok(made && sk, "реальна черга: вивід dry-run розібрано", r.out);
  if (made && sk) {
    ok(+made[1] + +sk[1] + +sk[2] + +sk[3] === secs.size, `реальна черга: made + task + pool + deferred = ${secs.size} розділів матриці`, r.out);
    ok(JSON.stringify((sk[4] ? sk[4].split(", ") : []).sort()) === JSON.stringify(expDeferred), `реальна черга: відкладено саме ${expDeferred.join(", ") || "—"} (deferredSections або без required)`, r.out); } }

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

// 3. Звичайний режим (tools-make-tasks-template): задачі write-<предмет>-<розділ> з плану фікстури tools/fixtures/make-tasks/content
//    (--content — інше дерево змісту; рушійні app/*.js, які вантажить loadContent, копіюються з репозиторію).
//    Шаблон: без кроку build для автора (його запускає оркестратор, AGENTS.md §4 п. 8); hist і world — D-027 і скіл hist-images.
const runN = (...a) => { const r = spawnSync(process.execPath, [path.join(ROOT, "tools/make-tasks.mjs"), ...a], { cwd: ROOT, encoding: "utf8" }); return { out: r.stdout + r.stderr, status: r.status }; };
const FX = path.join(tmp, "content-root");
fs.cpSync(path.join(ROOT, "tools/fixtures/make-tasks/content"), path.join(FX, "content"), { recursive: true });
fs.cpSync(path.join(ROOT, "app"), path.join(FX, "app"), { recursive: true });   // уся app/ (рев'ю tools-make-tasks-template P3-3): manifest() може вимагати нових файлів рушія
const newTasks = name => { const d = path.join(tmp, name); for (const s of ["todo", "doing", "review", "done"]) fs.mkdirSync(path.join(d, s), { recursive: true }); return d; };
{ const T2 = newTasks("tasks-normal");
  fs.writeFileSync(path.join(T2, "review", "write-math-fm6.md"), "---\nid: write-math-fm6\n---\n");
  const r = runN("--content", FX, "--tasks", T2);
  ok(r.status === 0 && /Створено задач: 3\b/.test(r.out), "звичайний режим: створено 3 задачі (fh5, fw7, fm5)", r.out);
  ok(JSON.stringify(fs.readdirSync(path.join(T2, "todo")).sort()) === JSON.stringify(["write-hist-fh5.md", "write-math-fm5.md", "write-world-fw7.md"]),
    "звичайний режим: розділ з уроками (fmx) і розділ із задачею в review (fm6) — пропущено", fs.readdirSync(path.join(T2, "todo")).join(", "));
  const read = n => { const f = path.join(T2, "todo", n); return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : ""; };
  const H = read("write-hist-fh5.md"), W = read("write-world-fw7.md"), M = read("write-math-fm5.md");
  ok(H.startsWith("---\nid: write-hist-fh5\ntype: write-section\nsubject: hist\ngrade: 5\nsection: fh5\nweeks: [1, 4]\nstatus: todo\n"), "шаблон: frontmatter", H.slice(0, 200));
  ok(H.includes("# Написати розділ «Фікстура історії» (Історія, 5 клас)") && H.includes("1. Перша тема історії\n2. Друга тема історії\n3. Фінальний урок розділу"), "шаблон: назва й теми з плану", H);
  for (const [nm, b, id] of [["hist", H, "fh5"], ["world", W, "fw7"], ["math", M, "fm5"]]) {
    ok(b && !/build\.mjs\s*&&/.test(b) && !/^- \[ \][^\n]*build\.mjs/m.test(b), `${nm}: у чек-листі автора немає кроку build`, b);
    ok(b.includes(`\`node tools/validate.mjs --section ${id}\` — 0 помилок`), `${nm}: validate розділу без build`, b);
    ok(/build[^\n]*оркестратор|оркестратор[^\n]*build/.test(b) && b.includes("AGENTS.md §4 п. 8"), `${nm}: пояснено, що build запускає оркестратор`, b);
    ok(!b.includes("Фото (якщо є)"), `${nm}: немає «Фото (якщо є)»`, b); }
  for (const [nm, b, id] of [["hist", H, "fh5"], ["world", W, "fw7"]]) {
    ok(b.includes("кожному уроці ≥ 1 справжнє `img`") && b.includes("D-027") && b.includes(".claude/skills/hist-images/SKILL.md") && b.includes(`\`img/${nm}/${id}/\``),
      `${nm}: D-027 — img у кожному уроці, скіл hist-images, тека img`, b);
    ok(/^- \[ \][^\n]*D-027/m.test(b), `${nm}: D-027 — і в чек-листі «Готово, коли»`, b); }
  ok(M && !M.includes("D-027") && !M.includes("hist-images") && M.includes("`img/math/fm5/`"), "math: без D-027 і hist-images, зображення за потреби", M);
  ok(M.includes("- Розділи цього ж класу з уроками: fmx — вирівнюйся по них"), "math: сусід 5 кл. з уроками", M);
  const r2 = runN("--content", FX, "--tasks", T2);
  ok(r2.status === 0 && /Створено задач: 0\b/.test(r2.out), "звичайний режим: повторний запуск — 0 нових (ідемпотентно)", r2.out); }
{ const T3 = newTasks("tasks-filter");
  const r = runN("--content", FX, "--tasks", T3, "--subject", "math", "--grade", "6");
  ok(r.status === 0 && /Створено задач: 1\b/.test(r.out) && fs.existsSync(path.join(T3, "todo", "write-math-fm6.md")), "--subject math --grade 6: лише fm6", r.out); }
// tools-make-tasks-dry-run: --dry-run і в звичайному режимі нічого не пише (ні задач, ні теки todo), лише показує, що створилося б
{ const T5 = path.join(tmp, "tasks-normal-dry");
  const r = runN("--content", FX, "--tasks", T5, "--dry-run");
  ok(r.status === 0 && /^\[dry-run\] Створилося б задач: 4 \(write-hist-fh5\.md, write-math-fm5\.md, write-math-fm6\.md, write-world-fw7\.md\)$/m.test(r.out), "звичайний --dry-run: показано 4 задачі (fh5, fm5, fm6, fw7)", r.out);
  ok(!fs.existsSync(T5), "звичайний --dry-run: тека задач не створена й нічого не записано", fs.existsSync(T5) ? JSON.stringify(listTasks(T5)) : "");
  const T6 = newTasks("tasks-normal-dry2");
  const r2 = runN("--content", FX, "--tasks", T6, "--dry-run", "--subject", "math", "--grade", "6");
  ok(r2.status === 0 && /Створилося б задач: 1 \(write-math-fm6\.md\)/.test(r2.out) && !fs.readdirSync(path.join(T6, "todo")).length, "звичайний --dry-run з фільтром: 1 задача, todo порожня", r2.out); }
// рев'ю tools-make-tasks-template P3-1: --write-pool з --content шукає файл пулу в тому самому дереві, а не в репозиторії
{ const FX2 = path.join(tmp, "content-root-pool"); fs.cpSync(FX, FX2, { recursive: true });
  fs.writeFileSync(path.join(FX2, "content/math/pool-g8-zz1.js"), "// файл пулу zz1 без SLID.pool (чернетка)\n");
  const r = run("--dry-run", "--matrix", MF, "--tasks", newTasks("tasks-pool-content"), "--content", FX2);
  ok(r.status === 0 && /пул уже є — 1 \(zz1\)/.test(r.out) && /створилося б задач на пули: \d+ \([^)]*g8m2/.test(r.out),
    "--write-pool --content: файл пулу — з дерева --content (zz1 пропущено; g8m2 там пулу не має)", r.out); }
// engine-pool-lang: --write-pool --subject ukr — задачі write-ukr-pool-<розділ> без матриці, для розділів з уроками без пулу й без задачі;
// «Пишемо самі…» — без пулу; шаблон — як tasks/todo/write-ukr-pool-u5s1.md (id пулу p<розділ>, файл pool-g<клас>-<розділ>.js)
{ const TU = newTasks("tasks-ukr");
  fs.writeFileSync(path.join(TU, "done", "renamed.md"), "---\nid: write-ukr-pool-fu5c\n---\n");
  const r0 = run("--subject", "ukr", "--content", FX, "--tasks", TU, "--dry-run");
  ok(r0.status === 0 && /^\[dry-run\] ukr: створилося б задач на пули: 2 \(fu5a, fu6a\)$/m.test(r0.out), "ukr --dry-run: лише fu5a і fu6a", r0.out);
  ok(/задача вже є — 1 \(fu5c\); пул уже є — 2 \(fu5b, fu5d\); без пулу \(«Пишемо самі»\) — 1 \(fu5rm\)/.test(r0.out), "ukr: пропущено задачу (id у frontmatter), пул за файлом і за id, «Пишемо самі»", r0.out);
  ok(!fs.readdirSync(path.join(TU, "todo")).length, "ukr --dry-run: нічого не записано");
  const r = run("--subject", "ukr", "--content", FX, "--tasks", TU, "--grade", "5");
  ok(r.status === 0 && /^ukr: створено задач на пули: 1 \(fu5a\)$/m.test(r.out), "ukr --grade 5: створено лише fu5a", r.out);
  const f = path.join(TU, "todo", "write-ukr-pool-fu5a.md"), b = fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
  ok(b.startsWith("---\nid: write-ukr-pool-fu5a\ntype: write-pool\nsubject: ukr\ngrade: 5\nsection: fu5a\nstatus: todo\nclaimed_by:\n"), "ukr шаблон: frontmatter", b.slice(0, 220));
  ok(/\ndepends_on: \[engine-pool-lang\]\n/.test(b), "ukr шаблон: engine-pool-lang ще не в done — залежність", b.slice(0, 300));
  ok(b.includes("# Зібрати пул тренування «Фікстура правопису» (Українська мова, 5 клас, fu5a)"), "ukr шаблон: заголовок", b);
  ok(b.includes('`content/ukr/pool-g5-fu5a.js`') && b.includes('SLID.pool("ukr", { id: "pfu5a", section: "fu5a"'), "ukr шаблон: файл і id пулу p<розділ>", b);
  ok(b.includes("- `fu5al1` — Перший урок\n- `fu5al2` — Другий урок\n") && !b.includes("fu5ab"), "ukr шаблон: уроки без фіналу (boss)", b);
  ok(b.includes("node tools/validate.mjs --pool pfu5a") && b.includes("node tools/personalization-qa.mjs --pool pfu5a") && b.includes("content-verifier"), "ukr шаблон: validate, personalization-qa, верифікатор", b);
  ok(b.includes("math-pool-diag") && b.includes("content-author") && b.includes("D-019") && b.includes("D-041"), "ukr шаблон: скіли, чесне завдання, норма", b);
  ok(b.includes("`gaps`") && b.includes("`stress`") && b.includes("docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»"), "ukr шаблон: мовні типи й контракт CONTENT_SCHEMA §10", b);
  const r2 = run("--subject", "ukr", "--content", FX, "--tasks", TU);
  ok(/^ukr: створено задач на пули: 1 \(fu6a\)$/m.test(r2.out) && /задача вже є — 2/.test(r2.out), "ukr повторний запуск: лише fu6a (ідемпотентно)", r2.out);
  // engine-pool-lang у done — без залежності
  const TD = newTasks("tasks-ukr-done"); fs.writeFileSync(path.join(TD, "done", "engine-pool-lang.md"), "---\nid: engine-pool-lang\n---\n");
  run("--subject", "ukr", "--content", FX, "--tasks", TD, "--grade", "6");
  const b6 = fs.readFileSync(path.join(TD, "todo", "write-ukr-pool-fu6a.md"), "utf8");
  ok(/\ndepends_on: \[\]\n/.test(b6) && !b6.includes("Не брати, доки"), "ukr шаблон: engine-pool-lang у done — depends_on порожній, без застереження", b6.slice(0, 300));
  // предмет без пулів — код 2
  const rh = run("--subject", "hist", "--content", FX, "--tasks", TD, "--dry-run");
  ok(rh.status === 2 && /hist/.test(rh.out), "--write-pool --subject hist: пули не заплановано — код 2", rh.out); }
// справжній зміст ukr — лише інваріанти: код 0, нічого не записано, кожен розділ з уроками — рівно в одній групі
{ const before = listTasks(path.join(ROOT, "tasks"));
  const r = run("--subject", "ukr", "--dry-run");
  ok(r.status === 0 && JSON.stringify(listTasks(path.join(ROOT, "tasks"))) === JSON.stringify(before), "ukr справжня черга: код 0, dry-run нічого не записав", r.out);
  const m = r.out.match(/створилося б задач на пули: (\d+)/), s = r.out.match(/задача вже є — (\d+)(?: \([^)]*\))?; пул уже є — (\d+)(?: \([^)]*\))?; без пулу \(«Пишемо самі»\) — (\d+)/);
  const { subjects } = await import(path.join(ROOT, "tools/lib.mjs")).then(l => l.loadContent());
  const secs = subjects.find(c => c.id === "ukr").sections.filter(x => x.lessons?.length).length;
  ok(m && s && +m[1] + +s[1] + +s[2] + +s[3] === secs, `ukr справжня черга: made + task + pool + «Пишемо самі» = ${secs} розділів з уроками`, r.out); }
{ // справжній зміст — лише інваріанти (склад плану змінюється): код 0, справжня черга tasks/ не змінилася
  const before = listTasks(path.join(ROOT, "tasks")), T4 = path.join(tmp, "tasks-real");
  const r = runN("--tasks", T4);
  ok(r.status === 0 && /Створено задач: \d+/.test(r.out), "справжній план у тимчасову теку (todo створено): код 0", r.out);
  ok(JSON.stringify(listTasks(path.join(ROOT, "tasks"))) === JSON.stringify(before), "справжній план: tasks/ репозиторію не змінено"); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-make-tasks: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
