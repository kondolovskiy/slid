#!/usr/bin/env node
// Слід · метрики стилю й складності. Головний інструмент синхронізації: показує, які уроки
// випадають із профілю предмета (style/profiles.json) і з «сім'ї» уроків того ж предмета й класу.
// Запуск: node tools/stats.mjs [--subject hist] [--json]
import fs from "node:fs"; import path from "node:path";
import { loadContent, readJSON, ROOT, subjectStats } from "./lib.mjs";

const args = process.argv.slice(2);
const only = args.includes("--subject") ? args[args.indexOf("--subject") + 1] : null;
const { subjects, origin } = loadContent();
const profiles = fs.existsSync(path.join(ROOT, "style/profiles.json")) ? readJSON("style/profiles.json") : {};

const report = {};
for (const c of subjects) if (!only || c.id === only) report[c.id] = subjectStats(c, profiles, origin);   // предмет без уроків (лише план) — порожній звіт

if (args.includes("--json")) {
  await new Promise(resolve => process.stdout.write(JSON.stringify(report, null, 2) + "\n", resolve));
  process.exit(0);
}
fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
for (const [sid, r] of Object.entries(report)) {
  const mt = r.keys.includes("maxText");   // стовпчик «макс. текст» — лише предмету з мовою змісту (українські звіти без змін)
  const lines = [`# Стиль і складність: ${sid}`, "", `Згенеровано: ${new Date().toISOString().slice(0, 10)} · tools/stats.mjs`, "",
    `| урок | клас | екр. | частка завдань | слів/екран | макс. слів |${mt ? " макс. текст |" : ""} слів/речення | довгі слова | типів | прапорці |`,
    `|---|---|---|---|---|---|${mt ? "---|" : ""}---|---|---|---|`];
  for (const x of r.rows) lines.push(`| ${x.lesson} ${x.title}${x.boss ? " (фінал)" : ""} | ${x.grade} | ${x.screens} | ${x.gradedShare} | ${x.readWordsPerScreen} | ${x.maxReadWords} |${mt ? ` ${x.maxText} |` : ""} ${x.sentenceWords} | ${x.longWordShare} | ${x.typeVariety} | ${x.flags.join("; ") || "—"} |`);
  lines.push("", "## Середні по сім'ях (предмет + класи + звичайний урок / фінал)", "", "Для z-оцінок sd не менше 10 % середнього; нижче наведено фактичне sd.", "");
  for (const [b, m] of Object.entries(r.bands)) lines.push(`- **${b}**: ` + Object.entries(m).map(([k, v]) => `${k} ${v.mean}±${v.sd}`).join(", "));
  fs.writeFileSync(path.join(ROOT, `reports/style-${sid}.md`), lines.join("\n") + "\n");
  const flagged = r.rows.filter(x => x.flags.length);
  console.log(`${sid}: ${r.rows.length} уроків, із прапорцями ${flagged.length} → reports/style-${sid}.md`);
  flagged.forEach(x => console.log(`  ${x.lesson} (${x.file}): ${x.flags.join("; ")}`));
}
