#!/usr/bin/env node
// Слід · який піднабір розділів проходить плейтест у CI (tools-ci-answer-ui).
// Повний `python3 tools/playtest.py` — це ≈ 3,3 с на урок (reports/qa/math-personalization-release.md: 410 уроків за 1369 с),
// тобто для 800+ уроків ≈ 45–50 хв: для кожного PR задовго. Тому CI бере:
//   1) розділи й тести рівня, чиї файли змінено (content/<предмет>/*.js, img/<предмет>/<id>/…);
//   2) покриття: жадібно найменше уроків, щоб кожен предмет, кожен тип екрана й кожен вид лабораторії/answerKind,
//      що трапляються в змісті, пройшли хоча б раз (рушій перевіряє регресія, а тут — що кожна гілка player живе на справжньому змісті);
//   3) усі тести рівня (вони короткі).
// Бюджет: змінені розділи — не більше --max-lessons уроків (типово 200 ≈ 11 хв); понад бюджет — по черзі між предметами, а решту
// названо в stderr рядком «Понад бюджет: …» (великий пакет розділів — повний плейтест: workflow_dispatch з playtest: full).
// Запуск: node tools/playtest-pick.mjs [--max-lessons N] [змінений-файл ...]  → у stdout id через кому (для playtest.py --section), у stderr — чому.
import { pathToFileURL } from "node:url";

/** Ознаки розділу для покриття: предмет, тип екрана, вид лабораторії, answerKind, мовна вправа-здогадка (без хибної спроби). */
export function features(subjectId, sec) {
  const f = new Set([`subject:${subjectId}`]);
  for (const l of sec.lessons || []) for (const s of l.screens || []) {
    f.add(`type:${s.type}`);
    if (s.type === "lab") f.add(`lab:${(s.lab && s.lab.kind) || "?"}`);
    if (s.type === "answer") f.add(`answerKind:${s.answerKind || "-"}`);
    if ((s.hyp || s.poll) && s.type !== "intro" && s.type !== "info" && s.type !== "explore") f.add(`hyp:${s.type}`);
  }
  return f;
}

/** Жадібне покриття ознак: щоразу розділ з найбільшою кількістю нових ознак на урок; нічия — менше уроків, потім id (детерміновано). */
export function cover(subjects) {
  const cands = [];
  for (const c of subjects) for (const sec of c.sections || []) if (sec.lessons && sec.lessons.length) cands.push({ id: sec.id, n: sec.lessons.length, f: features(c.id, sec) });
  const need = new Set(cands.flatMap(x => [...x.f])), got = [];
  while (need.size) {
    let best = null, bestGain = 0;
    for (const x of cands) {
      const gain = [...x.f].filter(k => need.has(k)).length;
      if (!gain) continue;
      const better = !best || gain / x.n > bestGain / best.n || (gain / x.n === bestGain / best.n && (x.n < best.n || (x.n === best.n && x.id < best.id)));
      if (better) { best = x; bestGain = gain; }
    }
    if (!best) break;
    got.push({ id: best.id, why: [...best.f].filter(k => need.has(k)) });
    for (const k of best.f) need.delete(k);
  }
  return got;
}

/** Розділи й тести рівня, яких торкаються змінені файли. origin / diagOrigin — з loadContent (id → файл). */
export function changedIds(files, { subjects, origin = {}, diagOrigin = {} }) {
  const byFile = {};
  for (const [id, f] of [...Object.entries(origin), ...Object.entries(diagOrigin)]) (byFile[f] ||= []).push(id);
  const known = new Set();
  for (const c of subjects) { for (const s of c.sections || []) if (s.lessons && s.lessons.length) known.add(s.id); for (const d of c.diags || []) known.add(d.id); }
  const out = [];
  for (const raw of files) {
    const f = raw.trim().replace(/\\/g, "/");
    if (!f) continue;
    const img = f.match(/^img\/[^/]+\/([^/]+)\//);
    for (const id of byFile[f] || (img ? [img[1]] : [])) if (known.has(id) && !out.includes(id)) out.push(id);
  }
  return out;
}

/** Повний вибір: змінені (у межах бюджету уроків, по черзі між предметами) → покриття → усі тести рівня, без повторів.
    Повертає { ids, why, dropped } — dropped: змінені розділи понад бюджет (їх не пройдено). */
export function pick(content, files = [], { maxLessons = Infinity } = {}) {
  const ids = [], why = {}, dropped = [];
  const add = (id, r) => { if (!ids.includes(id)) ids.push(id); (why[id] ||= []).push(r); };
  const subj = {}, size = {};
  for (const c of content.subjects) { for (const s of c.sections || []) { subj[s.id] = c.id; size[s.id] = (s.lessons || []).length; } for (const d of c.diags || []) { subj[d.id] = c.id; size[d.id] = 0; } }
  const queues = {};
  for (const id of changedIds(files, content)) (queues[subj[id]] ||= []).push(id);
  const order = [];
  for (let k = 0, more = true; more; k++) { more = false; for (const q of Object.values(queues)) if (k < q.length) { order.push(q[k]); more = true; } }
  let used = 0;
  for (const id of order) {
    if (used + size[id] > maxLessons) { dropped.push(id); continue; }
    used += size[id]; add(id, "змінено");
  }
  for (const x of cover(content.subjects)) add(x.id, "покриття: " + x.why.join(", "));
  for (const c of content.subjects) for (const d of c.diags || []) add(d.id, "тест рівня");
  return { ids, why, dropped: dropped.filter(id => !ids.includes(id)) };
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  const { loadContent } = await import("./lib.mjs");
  const content = loadContent();
  const args = process.argv.slice(2), mi = args.indexOf("--max-lessons");
  const maxLessons = mi >= 0 ? Number(args[mi + 1]) : 200;
  if (!(maxLessons >= 0)) { process.stderr.write("--max-lessons: потрібне число ≥ 0\n"); process.exit(2); }
  if (mi >= 0) args.splice(mi, 2);
  const { ids, why, dropped } = pick(content, args, { maxLessons });
  const lessons = Object.fromEntries(content.subjects.flatMap(c => c.sections.filter(s => s.lessons).map(s => [s.id, s.lessons.length])));
  for (const id of ids) process.stderr.write(`${id}${lessons[id] ? ` (${lessons[id]} ур.)` : ""}: ${why[id].join("; ")}\n`);
  process.stderr.write(`Разом: ${ids.length} id, ${ids.reduce((a, id) => a + (lessons[id] || 0), 0)} уроків\n`);
  if (dropped.length) process.stderr.write(`Понад бюджет: ${dropped.length} змінених розділів (${dropped.reduce((a, id) => a + (lessons[id] || 0), 0)} уроків) не пройдено: ${dropped.join(", ")}\n`);
  if (!ids.length) { process.stderr.write("Порожній вибір — нічого проходити\n"); process.exit(2); }
  process.stdout.write(ids.join(",") + "\n");
}
