#!/usr/bin/env node
// Слід · звіт графа вмінь (docs/design/skill-graph-math.md §3; схема — docs/CONTENT_SCHEMA.md §11; правила — tools/graph-lib.mjs).
// Те, чого validate не показує всім агентам: V8 поза лініями, V9 (узгодженість зі старими полями), списки для верифікатора
// (типовий вузол розщеплених пар, пари без вузла, нічиї V4, неоднозначні boss-об'єкти), цифри графа.
// Запуск: node tools/graph-report.mjs [--subject math] [--since <коміт>] [--line <id>] [--strict] [--uses <вузол>]
//   --since <коміт>  змінені вузли й додані/змінені об'єкти розщеплених пар та їхніх тем (порівняння за хешем вмісту, а не за урок#i)
//   --strict         rc 1, якщо є помилки графа або дрейф: усі лінії й увесь граф (прохід куратора) або лише лінія з --line (прийняття лінії)
//   --uses <вузол>   де стоїть явний u на вузол (перелік файлів для зміни sk вузла, §3)
// Пише reports/graph-<предмет>.md (у .gitignore: генерується щоразу, з датою; відтворюється з коміту). Коди виходу: 0 — гаразд; 1 — --strict знайшов помилку чи дрейф; 2 — неправильні аргументи чи ревізія.
import fs from "node:fs"; import os from "node:os"; import path from "node:path"; import { execFileSync } from "node:child_process";
import { loadContent, ROOT } from "./lib.mjs";
import { analyzeGraph, issuesOfLine, nodeHash } from "./graph-lib.mjs";

const args = process.argv.slice(2);
const KNOWN = new Set(["--subject", "--since", "--line", "--strict", "--uses", "--quiet"]), WITH_VALUE = new Set(["--subject", "--since", "--line", "--uses"]);
for (let k = 0; k < args.length; k++) { if (!KNOWN.has(args[k])) { console.error(`невідомий аргумент «${args[k]}»`); process.exit(2); }
  if (WITH_VALUE.has(args[k])) { if (!args[k + 1] || args[k + 1].startsWith("--")) { console.error(`${args[k]} потребує значення`); process.exit(2); } k++; } }
const opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
const SUBJ = opt("--subject") || "math", SINCE = opt("--since"), LINE = opt("--line"), USES = opt("--uses"), STRICT = args.includes("--strict"), QUIET = args.includes("--quiet");

let content;
try { content = loadContent(); } catch (e) { console.error("ПОМИЛКА ЗАВАНТАЖЕННЯ:", e.message); process.exit(2); }
const c = content.subjects.find(s => s.id === SUBJ);
if (!c) { console.error(`немає предмета «${SUBJ}»`); process.exit(2); }
const A = analyzeGraph(c, { learn: content.learn, origin: content.origin, poolOrigin: content.poolOrigin, diagOrigin: content.diagOrigin, graphFile: content.graphOrigin?.[SUBJ] });
if (LINE && !A.lines[LINE]) { console.error(`--line ${LINE}: немає такої лінії в lines графа (${Object.keys(A.lines).join(", ") || "ліній немає"})`); process.exit(2); }

// P: кожен аргумент — окремий рядок Markdown
const out = [], P = (...lines) => out.push(...lines), list = (xs, empty = "—") => xs.length ? xs.join(", ") : empty;
const T = A.teachList, activeNodes = [...A.active.values()];
const nodesOf = l => activeNodes.filter(n => T(n).some(t => t.l === l)).map(n => n.id);
// номери екранів і завдань тесту — від 1, як «екран N» / «завдання N» у validate (рев'ю G1, P3-7); у дизайні й чернетці пілоту індекси від 0
const show = o => o.kind === "screen" ? `${o.l}#${o.i + 1}` : o.kind === "item" ? `${o.pool}:${o.id}` : o.kind === "ditem" ? `${o.diag}#${o.i + 1}` : o.tkey;
const HOW = { u: "u", "u-topic": "u теми", typical: "типовий", boss: "boss", ambiguous: "неоднозначно", none: "без вузла", items: "за завданнями" };

// ---------- цифри графа
P(`# Граф умінь: ${c.subject || SUBJ}`, "");
P(`_Згенеровано tools/graph-report.mjs ${new Date().toISOString().slice(0, 10)}${SINCE ? `, --since ${SINCE}` : ""}. Дизайн: docs/design/skill-graph-math.md; схема: docs/CONTENT_SCHEMA.md §11. Номери \`урок#N\` і \`тест#N\` — від 1, як «екран N» і «завдання N» у validate (у дизайні — від 0)._`, "");
if (!A.graph) P(`**Графа ще немає** (\`content/${SUBJ}/graph.js\` — етап G2, куратор). Нижче — лише те, що видно без нього.`, "");
else {
  const edges = activeNodes.flatMap(n => A.adj.get(n.id) || []), same = activeNodes.reduce((a, n) => a + (Array.isArray(n.same) ? n.same.length : 0), 0);
  P(`Версія \`${A.graph.v}\`; вузлів ${A.nodes.size} (активних ${A.active.size}, base ${activeNodes.filter(n => n.base === true).length}, gone ${A.nodes.size - A.active.size}); ` +
    `ребер pre w 2 — ${edges.filter(e => e.kind === "pre" && e.w === 2).length}, pre w 1 — ${edges.filter(e => e.kind === "pre" && e.w === 1).length}, part — ${edges.filter(e => e.kind === "part").length}, same — ${same}.`, "");
  const byG = {}, bySk = {};
  for (const n of activeNodes) { const o = A.order(n), gr = n.base === true ? `${n.g} (base)` : o ? o.grade : "?"; byG[gr] = (byG[gr] || 0) + 1; bySk[n.sk] = (bySk[n.sk] || 0) + 1; }
  P("| Що | Скільки |", "|---|---|", `| За класом | ${Object.keys(byG).map(k => `${k}: ${byG[k]}`).join(" · ")} |`, `| За sk | ${Object.entries(bySk).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join(" · ")} |`);
  const memo = new Map(), depth = (u, st = new Set()) => { if (memo.has(u)) return memo.get(u); if (st.has(u)) return 0; st.add(u);
    const d = 1 + Math.max(0, ...(A.adj.get(u) || []).filter(e => A.active.has(e.to)).map(e => depth(e.to, st))); st.delete(u); memo.set(u, d); return d; };
  const perL = {}; for (const n of activeNodes) for (const t of T(n)) perL[t.l] = (perL[t.l] || 0) + 1; const pl = Object.values(perL);
  P(`| Глибина pre ∪ part | ${activeNodes.length ? Math.max(...activeNodes.map(n => depth(n.id))) : 0} |`, `| Вузлів на урок teach | у середньому ${pl.length ? (pl.reduce((a, b) => a + b, 0) / pl.length).toFixed(2) : 0}, найбільше ${Math.max(0, ...pl)} (${pl.length} уроків) |`, "");
  const by = {}; for (const o of A.objects) { const k = `${{ screen: "екран", item: "вправа", ditem: "завдання тесту", topic: "тема" }[o.kind]} / ${HOW[o.how]}`; by[k] = (by[k] || 0) + 1; }
  P(`Прив'язка об'єктів (§2.4), увесь предмет: ${Object.entries(by).map(([k, v]) => `${k} — ${v}`).join("; ")}.`, "");
}

// ---------- помилки, дрейф, V10б
const scope = LINE ? issuesOfLine(A, LINE) : A.issues;
const errs = scope.filter(i => i.cls === "error"), drift = scope.filter(i => i.cls === "drift"), warn = scope.filter(i => i.cls === "warn");
P(`## Помилки графа, дрейф, V10б${LINE ? ` (лінія ${LINE})` : ""}`, "");
P(`Помилок ${errs.length} (validate — червоний CI), дрейфу ${drift.length} (validate — попередження; \`--strict\` — помилка), V10б ${warn.length}.`, "");
for (const [h, xs] of [["Помилки", errs], ["Дрейф", drift], ["V10б", warn]]) if (xs.length) { P(`**${h}**`, ""); xs.forEach(i => P(`- ${i.where}: ${i.msg}`)); P(""); }

// ---------- лінії
P("## Лінії (`lines`)", "");
if (!Object.keys(A.lines).length) P("Розмічених ліній немає — V8 як помилка дрейфу ніде не діє.", "");
for (const [id, L] of Object.entries(A.lines)) {
  const d = issuesOfLine(A, id).filter(i => i.cls !== "warn");
  P(`### ${id} (st: ${A.rawLines[id]?.st})`, "", `Уроків ${L.lessons.size}, тем ${L.topics.size}, оцінюваних об'єктів ${L.objects.filter(o => o.kind !== "topic").length}, вузлів ${L.nodes.size}; помилок і дрейфу — ${d.length}.`, "");
  P(`Малі пари без вузла (< 3 об'єкти, §2.4 п. 7; питання 9): ${list(L.smallPairs.map(([k, os]) => `(${k.replace("|", ", ")}) — ${os.map(show).join(", ")}`))}.`, "");
}

// ---------- V8 поза лініями
const inLines = new Set(Object.values(A.lines).flatMap(L => [...L.lessons])), topicsInLines = new Set(Object.values(A.lines).flatMap(L => [...L.topics]));
const teachAll = new Set(activeNodes.flatMap(n => T(n).map(t => t.l)));
const outL = [...A.lessons].filter(([id, x]) => !x.boss && !inLines.has(id) && !teachAll.has(id)).map(([id]) => id);
const outT = A.objects.filter(o => o.kind === "topic" && !topicsInLines.has(o.tkey) && !o.nodes.length).map(o => o.tkey);
P("## V8 поза лініями (лише звіт)", "", `Тематичні уроки поза teach (${outL.length}): ${list(outL)}.`, "", `Теми тестів без вузла (${outT.length}): ${list(outT)}.`, "");

// ---------- розщеплені пари: за замовчуванням
P("## Розщеплені пари: що потрапило до типового вузла за замовчуванням", "", "Перевір, що кожен об'єкт без `u` справді про вміння типового вузла (§2.4, чек-лист верифікатора).", "");
if (!A.splitPairs.size) P("Розщеплених пар немає.", "");
for (const key of A.splitPairs) { const [l, sk] = key.split("|"), typ = A.typical.get(key)?.[0];
  const os = A.objects.filter(o => o.kind !== "topic" && o.sk === sk && o.ls.includes(l) && (o.how === "typical"));
  P(`- (${l}, ${sk}) → типовий ${typ ? `«${typ}»` : "— немає (об'єкти без u — без вузла)"}: ${list(os.map(o => `${show(o)}→${o.nodes.join("+") || "—"}`))}`); }
P("");

// ---------- пари без вузла, неоднозначні boss, нічиї V4
const nonePairs = {}; for (const o of A.objects) if (o.kind !== "topic" && o.how === "none" && !o.boss && o.l) (nonePairs[`${o.l}, ${o.sk}`] ||= []).push(show(o));
P("## Пари без вузла", "", A.graph ? list(Object.entries(nonePairs).filter(([k]) => teachAll.has(k.split(", ")[0])).map(([k, v]) => `(${k}) ${v.length}: ${v.join(", ")}`)) + " (лише уроки з teach; решта — у V8 поза лініями)" : "—", "");
const amb = A.objects.filter(o => o.how === "ambiguous");
P("## Неоднозначні boss-об'єкти (§2.4 п. 4)", "", list(amb.map(o => `${show(o)} (${o.cand.join(" / ")})`)), "");
P("## Паралельні розділи — нічиї V4 (дозволено; для верифікатора)", "", list(A.ties.map(t => `${t.from} (${t.a}) → ${t.to} (${t.b}), тиждень ${t.wk}`)), "");

// ---------- V9: узгодженість зі старими полями
const matrix = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, `docs/${SUBJ}-personalization-coverage.json`), "utf8")); } catch { return null; } })();
const pathTo = (from, to, strong = false) => from.some(a => to.includes(a) || to.some(b => A.reach(a, strong).has(b)));
const v9 = { pre: [], requires: [], topic: [], matrix: [] }, outside = { pre: 0, requires: 0, topic: 0, matrix: 0 }, oldPairs = new Set();
for (const o of A.objects) if (o.kind === "screen" && o.pre) { oldPairs.add(`${o.l}>${o.pre}`); const to = nodesOf(o.pre);
  if (!o.nodes.length || !to.length) outside.pre++; else if (!pathTo(o.nodes, to)) v9.pre.push(`${show(o)} (${o.nodes.join("+")}) pre: ${o.pre} (${to.join("+")})`); }
for (const sec of c.sections) for (const r of sec.requires || []) { const own = (sec.lessons || []).map(l => l.id); own.forEach(l => oldPairs.add(`${l}>${r}`));
  const from = [...new Set(own.flatMap(nodesOf))], to = nodesOf(r);
  if (!from.length || !to.length) outside.requires++; else if (!pathTo(from, to)) v9.requires.push(`${sec.id} requires ${r}`); }
const secLessons = id => (c.sections.find(s => s.id === id)?.lessons || []).map(l => l.id);
for (const d of c.diags || []) for (const t of d.topics || []) if (t.kind === "pre") for (const f of t.for || []) for (const a of secLessons(f)) for (const b of t.lessons || []) oldPairs.add(`${a}>${b}`);
if (matrix) {
  for (const md of matrix.diagnostics || []) for (const mt of md.topics || []) { if (mt.kind !== "pre") continue;
    const to = A.objects.find(o => o.kind === "topic" && o.tkey === `${md.id}/${mt.id}`)?.nodes || [];
    for (const fe of mt.forEvidence || []) { const from = nodesOf(fe.lesson);
      if (!from.length || !to.length) outside.topic++; else if (!pathTo(from, to, true)) v9.topic.push(`${md.id}/${mt.id} ← ${fe.lesson} (${fe.section}): немає шляху w 2`); } }
  for (const r of matrix.lessons || []) for (const b of r.prerequisites || []) { oldPairs.add(`${r.lesson}>${b}`); const from = nodesOf(r.lesson), to = nodesOf(b);
    if (!from.length || !to.length) outside.matrix++; else if (!pathTo(from, to)) v9.matrix.push(`${r.lesson} → ${b}`); }
}
const noOld = [];
for (const n of activeNodes) for (const e of A.adj.get(n.id) || []) { const m = A.active.get(e.to); if (!m || m.base === true || n.base === true) continue;
  const as = T(n).map(t => t.l), bs = T(m).map(t => t.l);
  if (!as.some(a => bs.some(b => a === b || oldPairs.has(`${a}>${b}`)))) noOld.push(`${n.id} → ${e.to} (${e.kind}${e.kind === "pre" ? " w " + e.w : ""}; ${as.join("+")} → ${bs.join("+")})`); }
P("## V9: узгодженість зі старими полями (лише звіт)", "", "Старе ребро без пояснення графом — або додати ребро, або відхилити з причиною у звіті верифікатора лінії. «Поза графом» — кінець без вузла (V8 поза лініями).", "");
P(`| Джерело | без пояснення | поза графом |`, `|---|---|---|`,
  `| \`pre\` екранів | ${v9.pre.length} | ${outside.pre} |`, `| \`requires\` розділів | ${v9.requires.length} | ${outside.requires} |`,
  `| теми pre ← \`forEvidence\` (шлях w 2) | ${matrix ? v9.topic.length : "—"} | ${matrix ? outside.topic : "—"} |`, `| \`prerequisites\` матриці | ${matrix ? v9.matrix.length : "—"} | ${matrix ? outside.matrix : "—"} |`, "");
for (const [k, h] of [["pre", "pre екранів"], ["requires", "requires"], ["topic", "теми pre без шляху w 2 від forEvidence (для buildPlan — як зараз, §4.3)"], ["matrix", "prerequisites матриці"]])
  if (v9[k].length) P(`**${h}:** ${v9[k].join("; ")}`, "");
P(`**Ребра графа без старого джерела (${noOld.length}):** ${list(noOld)}`, "");

// ---------- --since: змінені вузли, додані/змінені об'єкти розщеплених пар та їхніх тем
let sinceFound = null;
if (SINCE) {
  if (/^-/.test(SINCE)) { console.error(`--since: «${SINCE}» — не git-ревізія`); process.exit(2); }
  let rev; try { rev = execFileSync("git", ["rev-parse", "--verify", "--quiet", "--end-of-options", `${SINCE}^{commit}`], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); }
  catch { console.error(`--since: ревізії «${SINCE}» немає в git (або це не коміт)`); process.exit(2); }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "slid-graph-since-")); let B;
  try { execFileSync("tar", ["-x", "-C", dir], { input: execFileSync("git", ["archive", rev, "app", "content"], { cwd: ROOT, maxBuffer: 1 << 30 }) });
    // правило прив'язки — чинне (content.learn), як і до G3-p3: old.learn ревізії до G3 graphBind не має; порівнюємо зміст, не правило
    const old = loadContent(dir), oc = old.subjects.find(s => s.id === SUBJ);
    B = oc ? analyzeGraph(oc, { learn: content.learn, origin: old.origin, poolOrigin: old.poolOrigin, diagOrigin: old.diagOrigin, graphFile: old.graphOrigin?.[SUBJ] }) : null; }
  catch (e) { console.error(`--since ${SINCE}: не вдалося завантажити зміст ревізії — ${e.message}`); process.exit(2); }
  finally { fs.rmSync(dir, { recursive: true, force: true }); }
  const oldCnt = new Map(); for (const o of B?.objects || []) oldCnt.set(o.key, (oldCnt.get(o.key) || 0) + 1);
  const fresh = A.objects.filter(o => { const k = oldCnt.get(o.key) || 0; if (k) { oldCnt.set(o.key, k - 1); return false; } return true; });
  const split = o => o.kind === "topic" ? o.ls.some(l => o.sks.some(sk => A.splitPairs.has(`${l}|${sk}`))) : o.ls.some(l => A.splitPairs.has(`${l}|${o.sk}`));
  const objs = fresh.filter(split);
  const nodesCh = [];
  for (const [id, n] of A.nodes) { const was = B?.nodes.get(id); if (!was) nodesCh.push(`${id} (новий)`); else if (nodeHash(was) !== nodeHash(n)) nodesCh.push(`${id} (змінено${was.st !== "draft" && n.st === was.st ? `; st «${n.st}» — після зміни ребер чи teach має бути draft, §2.1` : ""})`); }
  for (const id of B?.nodes.keys() || []) if (!A.nodes.has(id)) nodesCh.push(`${id} (ВИЛУЧЕНО — вузли не вилучають, лише gone)`);
  sinceFound = { nodes: nodesCh, objs };
  P(`## З ${SINCE} (${rev.slice(0, 7)}): змінені вузли й об'єкти розщеплених пар`, "", "Об'єкти порівнюються за хешем вмісту (type, title, body, sk, u, варіанти, ключ); позиція в уроці не важлива. Для кожного — підтвердити вузол: потрібен `u` чи типовий правильний (чек-лист верифікатора розділу, §5.1).", "");
  P(`Вузли (${nodesCh.length}): ${list(nodesCh)}`, "");
  P(`Додані/змінені об'єкти розщеплених пар та їхніх тем (${objs.length}):`, ""); objs.forEach(o => P(`- ${o.where} → ${o.nodes.join(" + ") || "без вузла"} (${HOW[o.how]})`)); P("");
}

// ---------- --uses
let usesFound = null;
if (USES) {
  usesFound = A.objects.filter(o => (o.uIds || []).includes(USES));
  const edgesIn = [...A.nodes.values()].filter(n => ["pre", "part", "same"].some(k => (Array.isArray(n[k]) ? n[k] : []).some(x => x?.u === USES)) || n.gone === USES).map(n => n.id);
  P(`## Де використано «${USES}»`, "", `Явний u (${usesFound.length}): ${list(usesFound.map(o => o.where))}`, "", `Файли: ${list([...new Set(usesFound.map(o => o.file))])}`, "", `Ребра й gone на нього: ${list(edgesIn)}`, "");
}

fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
const rp = `reports/graph-${SUBJ}.md`; fs.writeFileSync(path.join(ROOT, rp), out.join("\n") + "\n");
if (!QUIET) {
  if (USES) { console.log(`u на «${USES}»: ${usesFound.length}`); usesFound.forEach(o => console.log("  " + o.where)); }
  if (sinceFound) { console.log(`з ${SINCE}: вузлів змінено ${sinceFound.nodes.length}, об'єктів розщеплених пар додано/змінено ${sinceFound.objs.length}`); sinceFound.objs.forEach(o => console.log(`  ${o.where} → ${o.nodes.join(" + ") || "без вузла"} (${HOW[o.how]})`)); }
}
// --strict друкує причини й з --quiet: у npm run check видно, чому rc 1
if (STRICT) [...errs, ...drift].forEach(i => console.log(`${i.cls === "error" ? "ПОМИЛКА" : "ДРЕЙФ  "}  ${i.where}: ${i.msg}`));
console.log(`граф ${SUBJ}${LINE ? `, лінія ${LINE}` : ""}: вузлів ${A.nodes.size}, помилок ${errs.length}, дрейфу ${drift.length}, V10б ${warn.length}. Звіт: ${rp}`);
process.exitCode = STRICT && (errs.length || drift.length) ? 1 : 0;   // не process.exit(): у pipe обрізав би вивід (tools-euphony-json-pipe)
