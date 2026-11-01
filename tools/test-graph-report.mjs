#!/usr/bin/env node
// Слід · тести tools/graph-report.mjs і реєстрації SLID.graph (engine-skg-g1; docs/design/skill-graph-math.md §3, §7.1).
// Як працює: копіює tools/, app/, style/ і метадані предметів у тимчасову теку, пише фікстуру tools/fixtures/graph-fixture.mjs
// і запускає справжній graph-report.mjs окремим процесом. --since перевіряється на власному тимчасовому git-репозиторії
// (історія проєкту не потрібна, тож тест працює й у CI з неглибоким checkout); git має бути встановлений — інакше тест падає.
// Запуск: node tools/test-graph-report.mjs   (без залежностей)
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync, execFileSync } from "node:child_process"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + String(extra).slice(0, 3000) : ""}`); } };

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "slid-test-graph-report-"));
process.on("exit", () => fs.rmSync(tmp, { recursive: true, force: true }));
for (const d of ["tools", "app", "style"]) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true });
fs.mkdirSync(path.join(tmp, "content/subjects"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "content/subjects/math.js"), path.join(tmp, "content/subjects/math.js"));
const { graphTree, node, why, N, L, S, scr, item } = await import("./fixtures/graph-fixture.mjs");

// матриця-фікстура для V9: fxbl1 → fxal2 (пояснено шляхом nd → nb), fxal2 → fxzl1 (не пояснено); тема dgfx/p ← fxcl1 (шляху w 2 немає)
const MATRIX = { lessons: [{ lesson: "fxbl1", prerequisites: ["fxal2"] }, { lesson: "fxal2", prerequisites: ["fxzl1"] }],
  diagnostics: [{ id: "dgfx", topics: [{ id: "p", kind: "pre", forEvidence: [{ section: "fxc", lesson: "fxcl1" }] }] }] };
function write(files) {
  for (const d of ["content/math", "content/aa", "content/zz", "reports"]) fs.rmSync(path.join(tmp, d), { recursive: true, force: true });
  for (const [f, src] of Object.entries(files)) { fs.mkdirSync(path.dirname(path.join(tmp, f)), { recursive: true }); fs.writeFileSync(path.join(tmp, f), src); }
}
function report(files, args = []) {
  if (files) write(files);
  const r = spawnSync(process.execPath, [path.join(tmp, "tools/graph-report.mjs"), ...args], { cwd: tmp, encoding: "utf8" });
  let md = null; try { md = fs.readFileSync(path.join(tmp, "reports/graph-math.md"), "utf8"); } catch {}
  return { rc: r.status, out: (r.stdout || "") + (r.stderr || ""), md };
}
const tree = mut => ({ ...graphTree(mut), "docs/math-personalization-coverage.json": JSON.stringify(MATRIX) });

// ---- чиста фікстура: rc 0 і з --strict; розділи звіту на місці
{ const r = report(tree()), rs = report(null, ["--strict"]), rl = report(null, ["--line", "fx", "--strict"]);
  ok(r.rc === 0 && r.md, "чиста фікстура: rc 0, звіт записано", r.out);
  ok(rs.rc === 0 && rl.rc === 0, `чиста фікстура: --strict і --line fx --strict — rc 0 (${rs.rc}, ${rl.rc})`, rs.out + rl.out);
  for (const h of ["## Помилки графа, дрейф, V10б", "## Лінії", "### fx", "## V8 поза лініями", "## Розщеплені пари", "## Пари без вузла", "## Неоднозначні boss-об'єкти", "## Паралельні розділи", "## V9"])
    ok(r.md && r.md.includes(h), `звіт: розділ «${h}»`);
  ok(r.md && /вузлів 6 \(активних 6, base 0, gone 0\); ребер pre w 2 — 2, pre w 1 — 0, part — 0/.test(r.md), "звіт: цифри графа", r.md && r.md.slice(0, 800));
  // V8 поза лініями: fxal3 — тематичний урок поза teach; boss fxal4 туди не потрапляє
  ok(r.md && /Тематичні уроки поза teach \(1\): fxal3\./.test(r.md), "звіт: V8 поза лініями — fxal3 (boss не рахується)", r.md);
  ok(r.md && r.md.includes("fxal4#3 (na / nb)"), "звіт: неоднозначний boss-екран fxal4#3 (na / nb) — номер від 1, як у validate", r.md);
  // V9: матриця fxal2 → fxzl1 без пояснення; fxbl1 → fxal2 пояснено; тема dgfx/p ← fxcl1 без шляху w 2; ребро nb → na без старого джерела
  ok(r.md && r.md.includes("**prerequisites матриці:** fxal2 → fxzl1") && !r.md.includes("fxbl1 → fxal2;"), "звіт V9: матриця — лише непояснене ребро", r.md);
  ok(r.md && r.md.includes("dgfx/p ← fxcl1 (fxc): немає шляху w 2"), "звіт V9: тема pre без шляху w 2 від forEvidence", r.md);
  ok(r.md && /Ребра графа без старого джерела \(1\):\*\* nb → na \(pre w 2; fxal2 → fxal1\)/.test(r.md), "звіт V9: ребро графа без старого джерела — nb → na", r.md); }
{ const r = report(tree(M => { L(M, "fxbl1").screens[2].pre = "fxal1"; L(M, "fxbl1").screens[3].pre = "fxzl1"; M.sections.find(s => s.id === "fxb").requires = ["fxzl1"]; }));
  ok(r.md && r.md.includes("**pre екранів:** fxbl1#4 (nd) pre: fxzl1 (nz)") && !r.md.includes("pre: fxal1"), "звіт V9: pre екрана — лише непояснений (fxzl1)", r.md);
  ok(r.md && r.md.includes("**requires:** fxb requires fxzl1"), "звіт V9: requires без шляху", r.md);
  ok(r.md && /\| `pre` екранів \| 1 \| 0 \|/.test(r.md) && /\| `requires` розділів \| 1 \| 0 \|/.test(r.md), "звіт V9: таблиця лічильників", r.md); }

// ---- --line --strict: rc 1 на дрейфі лінії; дрейф поза лінією не блокує лінію, але блокує прохід куратора (--strict)
{ const inLine = tree(M => { M.graph.lines.fx.lessons.push("fxal3"); });
  const a = report(inLine, ["--line", "fx", "--strict"]), b = report(null, ["--line", "fx"]), c = report(null, []);
  ok(a.rc === 1 && /ДРЕЙФ .*дрейф V8: урок fxal3 лінії «fx» не в teach/.test(a.out), `--line fx --strict: дрейф V8 у лінії — rc 1 (${a.rc})`, a.out);
  ok(b.rc === 0 && c.rc === 0, `без --strict дрейф не дає rc 1 (${b.rc}, ${c.rc})`, b.out);
  const out = tree(M => { N(M, "nz").pre = [{ u: "nd", w: 1, why }]; });   // V4 між вузлами поза лінією fx
  const d = report(out, ["--line", "fx", "--strict"]), e = report(null, ["--strict"]);
  ok(d.rc === 0, `--line fx --strict: дрейф поза лінією не блокує лінію (${d.rc})`, d.out);
  ok(e.rc === 1 && e.out.includes("дрейф V4"), `--strict (усі лінії й увесь граф): V4 поза лініями — rc 1 (${e.rc})`, e.out);
  const f = report(tree(M => { N(M, "na").pre = [{ u: "nc", w: 1, why }]; }), ["--line", "fx", "--strict"]);
  ok(f.rc === 1 && f.out.includes("дрейф V4"), `--line fx --strict: V4 між вузлами лінії — rc 1 (${f.rc})`, f.out);
  const g = report(tree(M => { N(M, "nd").pre[0].w = 3; }), ["--strict"]);
  ok(g.rc === 1 && g.out.includes("ПОМИЛКА") && g.out.includes("w 3"), `--strict: помилка графа — rc 1 (${g.rc})`, g.out);
  const h = report(tree(M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "na" })); S(M, "fxal1", 0).u = "na-old"; }), ["--strict"]);
  ok(h.rc === 0 && h.md.includes("онови u: na-old → na"), `--strict: V10б перелічено, але не блокує (${h.rc})`, h.out); }

// ---- аргументи
for (const [name, args] of [["невідома лінія", ["--line", "nope"]], ["невідомий аргумент", ["--bogus"]], ["--since без значення", ["--since"]], ["--since з «-»", ["--since", "-x"]], ["невідомий предмет", ["--subject", "nosubj"]]]) {
  const r = report(tree(), args); ok(r.rc === 2, `аргументи: ${name} — rc 2 (${r.rc})`, r.out); }

// ---- нічия V4 і розщеплена пара: список «за замовчуванням» (з темами тестів), вузол by: "u" у темі через u завдання, --uses
{ const r = report(tree(M => { N(M, "nb").pre.push({ u: "nz", w: 1, why });
    M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); S(M, "fxal1", 2).u = "na2"; M.diags[0].items[1].u = "na2"; }), ["--uses", "na2"]);
  ok(r.rc === 0, "розщеплена пара: rc 0", r.out);
  ok(r.md && r.md.includes("nb (fxal2) → nz (fxzl1), тиждень 1"), "звіт: нічия V4 у списку паралельних розділів", r.md);
  const line = (r.md || "").split("\n").find(x => x.startsWith("- (fxal1, frac)")) || "";
  ok(line.includes("типовий «na»") && ["fxal1#3→na", "fxal1#4→na", "pfx:c01→na", "pfx:c05→na", "dgfx#1→na"].every(x => line.includes(x)), "за замовчуванням: екрани, вправи й завдання тесту без u", line);
  ok(!line.includes("fxal1#5") && !line.includes("dgfx#2"), "за замовчуванням: об'єкти з u до списку не входять", line);
  ok(/u на «na2»: 2/.test(r.out) && r.out.includes("екран 5 (choice)") && r.out.includes("dgfx завдання 2"), "--uses na2: екран і завдання тесту", r.out);
  ok(r.md && /^Файли: math, content\/math\/diag-g6\.js$/m.test(r.md), "--uses: перелік файлів (розділ фікстури без origin — як у validate)", r.md && r.md.split("\n").filter(x => x.startsWith("Файли")).join("\n")); }

// ---- --since: за хешем вмісту; нова вправа розщепленої пари без u — у списку; вставка екрана не робить змінними наступні
{ let git = true; try { execFileSync("git", ["--version"], { stdio: "ignore" }); } catch { git = false; }
  ok(git, "--since: потрібен git (тест не пропускається мовчки)");
  if (git) {
    const split = M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); S(M, "fxal1", 2).u = "na2"; };
    write(tree(split));
    const g = (...a) => execFileSync("git", a, { cwd: tmp, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    g("init", "-q"); g("config", "user.email", "t@example.org"); g("config", "user.name", "test"); g("add", "-A"); g("commit", "-qm", "base");
    const same = report(null, ["--since", "HEAD"]);
    ok(same.rc === 0 && /з HEAD: вузлів змінено 0, об'єктів розщеплених пар додано\/змінено 0/.test(same.out), "--since HEAD без змін — 0 і 0", same.out);
    const r = report(tree(M => { split(M);
      L(M, "fxal1").screens.splice(2, 0, scr("frac", { title: "Нове на початку", body: "Скільки тепер?" }));   // вставка перед усіма оцінюваними
      M.pools[0].items.push(item("c06", "fxal1", "frac", { title: "Число за частиною", body: "<p>Нова вправа без u.</p>" }));
      L(M, "fxbl1").screens.push(scr("frac", { title: "Поза парою" }));                                      // не розщеплена пара — не в списку
      N(M, "nb").pre[0].w = 1; M.graph.nodes.push(node("nnew", "part", ["fxal3"])); L(M, "fxal3").screens.push(scr("part")); }), ["--since", "HEAD"]);
    ok(r.rc === 0, "--since: rc 0", r.out);
    ok(/об'єктів розщеплених пар додано\/змінено 2/.test(r.out), "--since: рівно 2 об'єкти (вставлений екран і нова вправа)", r.out);
    ok(r.out.includes("pool#pfx задача 6 «c06» (answer) → na (типовий)"), "--since: нова вправа розщепленої пари без u — у списку з типовим вузлом", r.out);
    ok(r.out.includes("#fxal1 екран 3 (choice) → na (типовий)") && !r.out.includes("екран 4 (choice)") && !r.out.includes("екран 6 (choice)"), "--since: лише вставлений екран, наступні не «змінені»", r.out);
    ok(!r.out.includes("fxbl1"), "--since: об'єкти не розщеплених пар не перелічено", r.out);
    ok(r.md && /Вузли \(2\): nb \(змінено\), nnew \(новий\)/.test(r.md), "--since: змінені й нові вузли", r.md && r.md.split("\n").filter(x => x.startsWith("Вузли")).join("\n"));
    const un = report(tree(M => { split(M); delete S(M, "fxal1", 2).u; }), ["--since", "HEAD"]);
    ok(/додано\/змінено 1/.test(un.out) && un.out.includes("#fxal1 екран 5 (choice) → na (типовий)"), "--since: знятий u — об'єкт змінено (тепер типовий)", un.out);
    const ch = report(tree(M => { split(M); M.pools[0].items[1].u = "na2"; }), ["--since", "HEAD"]);
    ok(/додано\/змінено 1/.test(ch.out) && ch.out.includes("«c02» (answer) → na2 (u)"), "--since: доданий u на вправі — об'єкт змінено", ch.out);
    const e = report(tree(split), ["--since", "nope-rev"]);
    ok(e.rc === 2 && e.out.includes("ревізії «nope-rev» немає"), "--since неіснуюча ревізія — rc 2", e.out);
    const m = report(tree(M => { split(M); Object.assign(S(M, "fxal1", 0), { fbOk: "Інакше.", fbText: "Інше пояснення, чому саме так, для фікстури графа.", hint: "Інша підказка." }); S(M, "fxal1", 1).correct = 1; }), ["--since", "HEAD"]);
    ok(/додано\/змінено 1/.test(m.out) && m.out.includes("екран 4 (choice)"), "--since: зміна пояснення — не зміна; зміна ключа — зміна", m.out);
    fs.rmSync(path.join(tmp, ".git"), { recursive: true, force: true });
  } }

// ---- прив'язка напряму (analyzeGraph): lesson завдання тесту (P2-1), перенаправлення gone, boss без вузлів by: "u" (рев'ю G1, P3-1)
{ const { loadContent } = await import(path.join(tmp, "tools/lib.mjs")), { analyzeGraph } = await import(path.join(tmp, "tools/graph-lib.mjs"));
  const bind = mut => { write(tree(mut)); const C = loadContent(tmp), m = C.subjects.find(s => s.id === "math"); return analyzeGraph(m, { origin: C.origin }).objects; };
  const di = (os, i) => os.find(o => o.kind === "ditem" && o.diag === "dgfx" && o.i === i)?.nodes.join("+");
  let os = bind(M => { M.diags[0].topics[0].lessons = ["fxal1", "fxal2"]; M.diags[0].items[0].lesson = "fxal1"; M.diags[0].items[1].lesson = "fxal2"; });
  ok(di(os, 0) === "na" && di(os, 1) === "nb", `двоурокова тема з lesson: кожне завдання — вузол свого уроку (${di(os, 0)}, ${di(os, 1)})`);
  ok(os.find(o => o.kind === "topic" && o.tkey === "dgfx/p")?.nodes.join("+") === "na+nb", "двоурокова тема: вузли теми — об'єднання вузлів завдань");
  os = bind(M => { M.diags[0].topics[0].lessons = ["fxal1", "fxal2"]; });
  ok(di(os, 0) === "na+nb", `двоурокова тема без lesson: типові вузли обох уроків (${di(os, 0)})`);
  os = bind(M => { M.graph.nodes.push(node("na-old", "frac", ["fxal3"], { gone: "na" })); S(M, "fxal1", 0).u = "na-old"; });
  ok(os.find(o => o.kind === "screen" && o.l === "fxal1" && o.i === 2)?.nodes.join("+") === "na", "u на gone-вузол — перенаправлення на новий");
  os = bind(M => { M.graph.nodes.push(node("na2", "frac", [{ l: "fxal1", by: "u" }])); S(M, "fxal1", 2).u = "na2"; });
  ok(os.find(o => o.l === "fxal4")?.cand.join("+") === "na+nb", "boss: вузли by: \"u\" не серед кандидатів", os.find(o => o.l === "fxal4")?.cand);
  const r = report(tree(M => { delete M.graph.v; }), ["--line", "fx", "--strict"]);
  ok(r.rc === 1 && r.out.includes("v — непорожній рядок"), `--line --strict: загальна помилка формату графа — rc 1 (${r.rc})`, r.out); }

// ---- реєстр і збирач: graph.js потрапляє в index.html/sw.js; SLID.graph прив'язується у finalize() незалежно від порядку
{ write(tree());
  const { manifest } = await import(path.join(tmp, "tools/build.mjs")), { loadContent } = await import(path.join(tmp, "tools/lib.mjs"));
  const files = manifest(tmp);
  ok(files.includes("content/math/graph.js") && files.indexOf("content/math/graph.js") < files.indexOf("app/app.js"), "build: content/math/graph.js у списку скриптів (до app.js)", files.join(" "));
  const C = loadContent(tmp), math = C.subjects.find(s => s.id === "math");
  ok(math.graph && math.graph.v === "2026-11-01.1" && math.graph.nodes.length === 6, "registry: subject.graph прив'язано", JSON.stringify(math.graph).slice(0, 200));
  ok(C.graphOrigin.math === "content/math/graph.js", "lib: graphOrigin — файл графа", JSON.stringify(C.graphOrigin));
  // граф раніше за предмет (content/aa до content/zz): прив'язка у finalize()
  write({ ...tree(), "content/aa/graph.js": `SLID.graph("late", { v: "1", nodes: [] });\n`,
    "content/zz/subj.js": `SLID.subject({ id: "late", subject: "Пізній", short: "П", icon: "frac", colors: { light: { accent: "#000" }, dark: { accent: "#fff" } } });\n` });
  const C2 = loadContent(tmp);
  ok(C2.subjects.find(s => s.id === "late")?.graph?.v === "1", "registry: граф, завантажений раніше за предмет, прив'язано у finalize()");
  ok(C2.subjects.find(s => s.id === "math").graph?.v === "2026-11-01.1", "registry: граф іншого предмета не зачеплено");
  // без графа — subject.graph === null (рушій нічого не бачить)
  write(graphTree(M => { M.graph = null; }));
  ok(loadContent(tmp).subjects.find(s => s.id === "math").graph === null, "registry: без graph.js — subject.graph null");
  // другий граф того самого предмета — помилка реєстру (як дублікат діагностики), застосунок решти змісту не втрачає
  write({ ...tree(), "content/math/graph2.js": `SLID.graph("math", { v: "2", nodes: [] });\n` });
  let err = null; try { loadContent(tmp); } catch (e) { err = e.message; }
  ok(err && err.includes("уже зареєстровано"), "registry: другий SLID.graph предмета — помилка завантаження", err);
  write({ ...tree(), "content/math/graph2.js": `SLID.graph("math", null);\n` });
  err = null; try { loadContent(tmp); } catch (e) { err = e.message; }
  ok(err && err.includes("потрібен об'єкт"), "registry: SLID.graph не з об'єктом — помилка завантаження", err); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-graph-report: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
