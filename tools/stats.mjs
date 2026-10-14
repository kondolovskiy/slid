#!/usr/bin/env node
// Слід · метрики стилю й складності. Головний інструмент синхронізації: показує, які уроки
// випадають із профілю предмета (style/profiles.json) і з «сім'ї» уроків того ж предмета й класу.
// Запуск: node tools/stats.mjs [--subject hist] [--json]
import fs from "node:fs"; import path from "node:path";
import { loadContent, lessonMetrics, gradeBand, readJSON, ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const only = args.includes("--subject") ? args[args.indexOf("--subject") + 1] : null;
const { subjects, origin } = loadContent();
const profiles = fs.existsSync(path.join(ROOT, "style/profiles.json")) ? readJSON("style/profiles.json") : {};
const KEYS = ["screens","gradedShare","readWordsPerScreen","maxReadWords","sentenceWords","longWordShare","typeVariety"];

const report = {};
for (const c of subjects) {
  if (only && c.id !== only) continue;
  const rows = [];
  for (const sec of c.sections.filter(s => s.lessons)) for (const l of sec.lessons)
    rows.push({ subject: c.id, grade: sec.grade, band: gradeBand(sec.grade), section: sec.id, file: origin[sec.id], lesson: l.id, title: l.title, boss: !!l.boss, status: l.status, ...lessonMetrics(l) });
  // статистика «сім'ї» (предмет + діапазон класів) для z-оцінок
  const fam = {};
  for (const r of rows) (fam[`${r.band}:${r.boss ? "boss" : "lesson"}`] ||= []).push(r);
  for (const [band, rs] of Object.entries(fam)) for (const k of KEYS) {
    const v = rs.map(r => r[k]), m = v.reduce((a, b) => a + b, 0) / v.length;
    const sd = Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length);
    const effectiveSd = Math.max(sd, Math.abs(m) * 0.1, Number.EPSILON);
    rs.forEach(r => (r.z ||= {})[k] = +((r[k] - m) / effectiveSd).toFixed(1));
    (report[c.id] ||= { bands: {} }).bands[band] = { ...(report[c.id].bands[band] || {}), [k]: { mean: +m.toFixed(2), sd: +sd.toFixed(2), effectiveSd: +effectiveSd.toFixed(3) } };
  }
  // відхилення від профілю
  for (const r of rows) {
    const p = profiles[c.id]?.[r.band] || profiles._default?.[r.band] || {};
    r.flags = [];
    for (const [k, [lo, hi]] of Object.entries(p)) if (r[k] !== undefined && (r[k] < lo || r[k] > hi)) r.flags.push(`${k}=${r[k]} поза [${lo}; ${hi}]`);
    for (const k of KEYS) if (Math.abs(r.z?.[k] ?? 0) >= 2) r.flags.push(`${k} нетипово для сім'ї (z=${r.z[k]})`);
  }
  report[c.id].rows = rows;
}

if (args.includes("--json")) {
  await new Promise(resolve => process.stdout.write(JSON.stringify(report, null, 2) + "\n", resolve));
  process.exit(0);
}
fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
for (const [sid, r] of Object.entries(report)) {
  const lines = [`# Стиль і складність: ${sid}`, "", `Згенеровано: ${new Date().toISOString().slice(0, 10)} · tools/stats.mjs`, "",
    "| урок | клас | екр. | частка завдань | слів/екран | макс. слів | слів/речення | довгі слова | типів | прапорці |",
    "|---|---|---|---|---|---|---|---|---|---|"];
  for (const x of r.rows) lines.push(`| ${x.lesson} ${x.title}${x.boss ? " (фінал)" : ""} | ${x.grade} | ${x.screens} | ${x.gradedShare} | ${x.readWordsPerScreen} | ${x.maxReadWords} | ${x.sentenceWords} | ${x.longWordShare} | ${x.typeVariety} | ${x.flags.join("; ") || "—"} |`);
  lines.push("", "## Середні по сім'ях (предмет + класи + звичайний урок / фінал)", "", "Для z-оцінок sd не менше 10 % середнього; нижче наведено фактичне sd.", "");
  for (const [b, m] of Object.entries(r.bands)) lines.push(`- **${b}**: ` + Object.entries(m).map(([k, v]) => `${k} ${v.mean}±${v.sd}`).join(", "));
  fs.writeFileSync(path.join(ROOT, `reports/style-${sid}.md`), lines.join("\n") + "\n");
  const flagged = r.rows.filter(x => x.flags.length);
  console.log(`${sid}: ${r.rows.length} уроків, із прапорцями ${flagged.length} → reports/style-${sid}.md`);
  flagged.forEach(x => console.log(`  ${x.lesson} (${x.file}): ${x.flags.join("; ")}`));
}
