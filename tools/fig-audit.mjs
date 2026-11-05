#!/usr/bin/env node
// Слід · аудит рисунків: де умова задачі посилається на рисунок або без нього незрозуміла, а ілюстрації (fig/img/svg/lab) немає.
// Евристики — figCues (tools/lib.mjs), ті самі, що й у правилі validate «умова посилається на рисунок».
//   ref   — пряме посилання: «на рисунку», «за графіком», «на кресленні», «на діаграмі», «зображено на»;
//   geo   — геометрія з ≥ 3 позначеннями точок у формулах ($\triangle ABC$, $BB_1$) — рисунок, імовірно, потрібен;
//   graph — згадка графіка, координатної площини, діаграми, «на плані», «на схемі» без прямого посилання — перевір вручну
//           (графік чи діаграму, які треба побудувати, — «побудуй графік», «показують діаграмою» — не згадка);
//   intro — сюжетний вступ уроку з ref чи geo (validate про вступ мовчить).
// Екран уроку, що посилається на ілюстрацію попереднього екрана («рядок під рисунком»), іде окремо («попередній екран»).
// Запуск: node tools/fig-audit.mjs [--subject math] [--json] [--quiet]
//   → reports/fig-audit-<предмет>.md; --json — те саме JSON-ом у stdout (файл .json не пишеться: шум у diff на кожен check, рев'ю P3-5). Код виходу завжди 0: це звіт для автора, а не перевірка (перевірка — validate).
import fs from "node:fs"; import path from "node:path";
import { loadContent, figCues, ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const KNOWN = new Set(["--subject", "--json", "--quiet"]);
for (let i = 0; i < args.length; i++) { if (!KNOWN.has(args[i])) { console.error(`невідомий аргумент «${args[i]}»`); process.exit(2); } if (args[i] === "--subject") i++; }
const sid = args.includes("--subject") ? args[args.indexOf("--subject") + 1] : "math";
if (!sid || sid.startsWith("--")) { console.error("--subject потребує значення"); process.exit(2); }
const { subjects, origin, poolOrigin, diagOrigin } = loadContent();
const c = subjects.find(x => x.id === sid);
if (!c) { console.error(`предмет «${sid}» не знайдено`); process.exit(2); }

const rows = [];
const add = (file, where, kind, s, prev) => {
  const cue = figCues(s, prev); if (!cue || cue.ill) return;
  const group = cue.intro ? (cue.level === "graph" ? null : "intro") : cue.level === "ref" && cue.prevIll ? "prev" : cue.level;
  if (!group) return;
  rows.push({ group, file, where, kind, type: s.type, ...cue });
};
let screens = 0;
for (const sec of c.sections) for (const l of sec.lessons || []) l.screens.forEach((s, i) => { screens++; add(origin[sec.id] || "", `${l.id} екран ${i + 1}`, "урок", s, l.screens[i - 1]); });
for (const p of c.pools || []) for (const it of p.items || []) { screens++; add(poolOrigin[p.id] || "", `${p.id}:${it.id}`, "пул", it); }
for (const d of c.diags || []) (d.items || []).forEach((it, i) => { screens++; add(diagOrigin[d.id] || "", `${d.id} завдання ${i + 1}`, "тест", it); });

const GROUPS = [
  ["ref", "Пряме посилання на рисунок, а рисунка немає", "Додай рисунок (`fig`, статичний `lab` plane/solid/chart, `img`) точно за умовою або перепиши умову без посилання. validate попереджає саме про це."],
  ["geo", "Геометрія з позначеннями точок без рисунка", "Рисунок, імовірно, потрібен, якщо без нього не зрозуміло, де які точки (паралелепіпед $ABCDA_1B_1C_1D_1$, висота до сторони, перетин діагоналей). Задача «у трикутнику $ABC$ кут $A$ = 50°, кут $B$ = 60°» зрозуміла й без рисунка."],
  ["graph", "Згадка графіка, площини, діаграми, плану чи схеми", "Зазвичай «графік функції проходить через…» чи «на плані міста» — рисунок не потрібен. Потрібен, якщо дані треба прочитати з графіка, діаграми, плану чи схеми."],
  ["intro", "Сюжетний вступ посилається на рисунок чи геометрію", "Вступ уроку (intro) згадує креслення, рисунок чи фігуру з позначеннями, а ілюстрації немає. validate про вступ не попереджає: перевір, чи дитина не шукатиме рисунок, якого немає, — додай ілюстрацію або перепиши речення."],
  ["prev", "Посилання на ілюстрацію попереднього екрана", "Екран уроку посилається на модель попереднього екрана («порівняй рядки під рисунком»). Переконайся, що та модель справді про це; інакше — власна ілюстрація."]];
const esc = t => String(t).replace(/\|/g, "\\|");
const L = [`# Аудит рисунків: ${c.title || sid}`, "",
  `_Згенеровано \`node tools/fig-audit.mjs --subject ${sid}\`. Евристики — \`figCues\` у tools/lib.mjs. Переглянуто екранів і задач: ${screens}._`, "",
  "| Група | Кількість |", "|---|---|", ...GROUPS.map(([g, t]) => `| ${t} | ${rows.filter(r => r.group === g).length} |`), ""];
for (const [g, title, note] of GROUPS) {
  const rs = rows.filter(r => r.group === g); if (!rs.length) continue;
  L.push(`## ${title} (${rs.length})`, "", note, "", "| Файл | Де | Тип | Ознака | Умова |", "|---|---|---|---|---|");
  for (const r of rs) L.push(`| ${esc(path.basename(r.file))} | ${esc(r.where)} | ${r.kind}, ${r.type} | ${esc(r.ref || (r.level === "geo" ? "точки " + r.points : r.graph))} | ${esc(r.text)} |`);
  L.push("");
}
fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
fs.writeFileSync(path.join(ROOT, `reports/fig-audit-${sid}.md`), L.join("\n"));
if (args.includes("--json")) console.log(JSON.stringify({ subject: sid, screens, rows }));
else if (!args.includes("--quiet")) console.log(`${sid}: переглянуто ${screens}; ${GROUPS.map(([g]) => `${g} ${rows.filter(r => r.group === g).length}`).join(", ")} → reports/fig-audit-${sid}.md`);
