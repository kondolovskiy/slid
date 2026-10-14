#!/usr/bin/env node
// Слід · черга задач для паралельних агентів. Задача — markdown-файл у tasks/<стан>/ з frontmatter.
// Взяти задачу = атомарно перейменувати файл із todo/ (або review/) у doing/. Якщо два агенти
// спробують одночасно, переміститься лише в одного; другий отримає помилку і має взяти іншу.
//
//   node tools/claim.mjs list [todo|doing|review|done] [--subject hist] [--grade 6] [--type write-section] [--ids]
//   node tools/claim.mjs claim <task-id> <agent-name>      todo|review → doing
//   node tools/claim.mjs move  <task-id> <todo|doing|review|done>
//   node tools/claim.mjs release <task-id>                  doing → назад, звідки взяли
import fs from "node:fs"; import path from "node:path";
import { ROOT } from "./build.mjs";

const STATES = ["todo", "doing", "review", "done"];
const dir = s => path.join(ROOT, "tasks", s);
const fm = txt => Object.fromEntries((txt.match(/^---\n([\s\S]*?)\n---/)?.[1] || "").split("\n").map(l => l.match(/^(\w+):\s*(.*)$/)).filter(Boolean).map(m => [m[1], m[2]]));
const setFm = (txt, k, v) => txt.match(new RegExp(`^${k}:.*$`, "m")) ? txt.replace(new RegExp(`^${k}:.*$`, "m"), `${k}: ${v}`) : txt.replace(/^---\n/, `---\n${k}: ${v}\n`);
const find = id => { const f = id.endsWith(".md") ? path.basename(id) : id + ".md"; for (const s of STATES) if (fs.existsSync(path.join(dir(s), f))) return { state: s, file: f, p: path.join(dir(s), f) }; return null; };
const [cmd, a1, a2] = process.argv.slice(2);
const opt = k => process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : null;

if (cmd === "list" || !cmd) {
  const states = STATES.includes(a1) ? [a1] : STATES;
  for (const s of states) {
    const items = (fs.existsSync(dir(s)) ? fs.readdirSync(dir(s)) : []).filter(f => f.endsWith(".md")).map(f => ({ f, m: fm(fs.readFileSync(path.join(dir(s), f), "utf8")) }))
      .filter(({ m }) => (!opt("--subject") || m.subject === opt("--subject")) && (!opt("--grade") || m.grade === opt("--grade")) && (!opt("--type") || m.type === opt("--type")))
      .sort((x, y) => (+x.m.grade || 0) - (+y.m.grade || 0) || x.f.localeCompare(y.f));
    if (process.argv.includes("--ids")) { items.forEach(i => console.log(i.f.replace(/\.md$/, ""))); continue; }
    console.log(`\n${s.toUpperCase()} (${items.length})`);
    items.forEach(({ f, m }) => console.log(`  ${f.replace(/\.md$/, "").padEnd(28)} ${(m.type || "").padEnd(15)} ${m.subject || ""} ${m.grade ? m.grade + " кл." : ""} ${m.claimed_by ? "← " + m.claimed_by : ""}`));
  }
} else if (cmd === "claim") {
  if (!a1 || !a2) { console.error("claim <task-id> <agent-name>"); process.exit(2); }
  const t = find(a1); if (!t) { console.error(`Задачу ${a1} не знайдено`); process.exit(1); }
  if (!["todo", "review"].includes(t.state)) { console.error(`Задача ${a1} вже в «${t.state}» — візьми іншу`); process.exit(1); }
  const to = path.join(dir("doing"), t.file);
  try { fs.renameSync(t.p, to); } catch { console.error(`Не вдалося взяти ${a1}: її щойно взяв хтось інший`); process.exit(1); }
  let txt = fs.readFileSync(to, "utf8");
  txt = setFm(setFm(setFm(txt, "claimed_by", a2), "claimed_at", new Date().toISOString()), "claimed_from", t.state);
  fs.writeFileSync(to, txt);
  console.log(`Взято: tasks/doing/${t.file} (${a2})`);
} else if (cmd === "move") {
  const t = find(a1); if (!t || !STATES.includes(a2)) { console.error("move <task-id> <todo|doing|review|done>"); process.exit(2); }
  const to = path.join(dir(a2), t.file); fs.mkdirSync(dir(a2), { recursive: true }); fs.renameSync(t.p, to);
  fs.writeFileSync(to, setFm(fs.readFileSync(to, "utf8"), "status", a2));
  console.log(`tasks/${t.state}/${t.file} → tasks/${a2}/`);
} else if (cmd === "release") {
  const t = find(a1); if (!t || t.state !== "doing") { console.error("release: задача має бути в doing"); process.exit(2); }
  const txt = fs.readFileSync(t.p, "utf8"); const back = fm(txt).claimed_from || "todo";
  fs.mkdirSync(dir(back), { recursive: true }); fs.renameSync(t.p, path.join(dir(back), t.file));
  fs.writeFileSync(path.join(dir(back), t.file), setFm(txt, "claimed_by", "").replace(/^claimed_(at|from):.*\n/gm, ""));
  console.log(`Повернуто в ${back}: ${t.file}`);
} else { console.error("Команди: list | claim | move | release"); process.exit(2); }
