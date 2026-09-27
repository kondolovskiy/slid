#!/usr/bin/env node
// Слід · валідатор контенту. ПОМИЛКИ ламають застосунок або дають дитині неправильну відповідь — їх треба виправити.
// ПОПЕРЕДЖЕННЯ — порушення стилю (style/*.md, style/profiles.json) — їх треба виправити або обґрунтувати в нотатках задачі.
// Запуск: node tools/validate.mjs [--section <id>] [--quiet]
import fs from "node:fs"; import path from "node:path";
import { loadContent, GRADED, TYPES, plain, words, sentences, lessonMetrics, gradeBand, readJSON, ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const onlySec = args.includes("--section") ? args[args.indexOf("--section") + 1] : null;
const quiet = args.includes("--quiet");
let content;
try { content = loadContent(); } catch (e) { console.error("ПОМИЛКА ЗАВАНТАЖЕННЯ:", e.message); process.exit(1); }
const { subjects, soon, origin } = content;
const profiles = readJSON("style/profiles.json");
const banned = fs.readFileSync(path.join(ROOT, "style/banned-phrases.txt"), "utf8").split("\n").map(s => s.trim()).filter(s => s && !s.startsWith("#"));
const errors = [], warnings = [];
const E = (where, msg) => errors.push(`${where}: ${msg}`);
const W = (where, msg) => warnings.push(`${where}: ${msg}`);

const allLessonIds = new Map(), allSectionIds = new Set();
const ICONS = fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").match(/const P = \{([\s\S]*?)\n\};/)[1].match(/^\s{2}(\w+):/gm).map(s => s.trim().slice(0, -1));
const FIGS = ["circle","circles","bar","unequal","bars","grid","dots","rem"];
const SVGS = [...fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8").matchAll(/if\(name==="(\w+)"\)/g)].map(m => m[1]);

for (const c of subjects) {
  if (!c.colors?.light?.accent || !c.colors?.dark?.accent) E(`предмет ${c.id}`, "немає colors.light/dark");
  for (const sec of c.sections) {
    const where0 = `${origin[sec.id] || c.id}#${sec.id}`;
    if (allSectionIds.has(sec.id)) E(where0, "id розділу не унікальний"); allSectionIds.add(sec.id);
    if (!Number.isInteger(sec.grade)) E(where0, "немає grade");
    if (!Array.isArray(sec.weeks) || sec.weeks[0] < 1 || sec.weeks[1] > 35 || sec.weeks[0] > sec.weeks[1]) E(where0, "weeks має бути [від, до] у межах 1–35");
    if (!sec.why || sec.why.length < 30) E(where0, "немає змістовного «навіщо» (why)");
    if (!sec.lessons && !sec.plan) W(where0, "розділ без уроків і без плану тем");
    if (!sec.lessons) continue;
    if (!sec.meta) W(where0, "немає meta {author, created, factcheck, teacher}");
    for (const l of sec.lessons) {
      if (allLessonIds.has(l.id)) E(where0, `id уроку ${l.id} уже є в ${allLessonIds.get(l.id)}`);
      allLessonIds.set(l.id, where0);
    }
  }
}
const allBadges = new Set(subjects.flatMap(c => c.badges.map(b => b.id)).concat(["first","perfect","combo5","streak3","multi"]));

for (const c of subjects) for (const sec of c.sections.filter(s => s.lessons)) {
  if (onlySec && sec.id !== onlySec) continue;
  const file = origin[sec.id] || c.id;
  (sec.requires || []).forEach(r => { if (!allLessonIds.has(r)) E(`${file}#${sec.id}`, `requires: немає уроку ${r}`); });
  for (const b of sec.badges || []) if (!ICONS.includes(b.icon)) E(`${file}#${sec.id}`, `значок ${b.id}: немає іконки «${b.icon}»`);
  for (const l of sec.lessons) {
    const L = `${file}#${l.id}`;
    if (!l.title || !l.why || !l.icon) E(L, "уроку потрібні title, why, icon");
    if (l.icon && !ICONS.includes(l.icon)) E(L, `немає іконки «${l.icon}» (див. const P в app/app.js)`);
    if (!["draft","verified","approved"].includes(l.status)) E(L, "status має бути draft | verified | approved");
    if (l.badge && !allBadges.has(l.badge)) E(L, `badge «${l.badge}» не оголошено`);
    if (!l.outro?.text || !Array.isArray(l.outro.learned) || l.outro.learned.length < 2 || l.outro.learned.length > 4) E(L, "outro: потрібні text і 2–4 пункти learned");
    if (l.screens?.[0]?.type !== "intro") E(L, "перший екран має бути intro (проблема, з якої починається урок)");
    l.screens.forEach((s, i) => {
      const S = `${L} екран ${i + 1} (${s.type})`;
      if (!TYPES.includes(s.type)) return E(S, `невідомий тип «${s.type}»`);
      if (!s.title) E(S, "немає title");
      const txt = [s.title, s.body, s.fbText, s.fbOk, s.fbBad, s.hint, ...(s.opts || []), ...(s.items || []).flat()].filter(x => typeof x === "string").join(" ");
      if (/\$\{/.test(txt)) E(S, "у тексті лишилось «${» — шаблонний рядок з'їв формулу");
      for (const t of [s.title, s.body, s.fbText, s.hint, ...(s.opts || [])].filter(Boolean)) if (((String(t).match(/\$/g) || []).length) % 2) E(S, "непарна кількість $ — формула не закрита");
      for (const b of banned) if (txt.toLowerCase().includes(b.toLowerCase())) W(S, `заборонена фраза «${b}» (style/banned-phrases.txt)`);
      if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(txt)) W(S, "емодзі в тексті уроку");
      if (s.img && !fs.existsSync(path.join(ROOT, s.img))) E(S, `немає файлу ${s.img}`);
      if (s.img && !s.cap) E(S, "у фото має бути підпис cap (що, де, коли)");
      if (s.svg && !SVGS.includes(s.svg)) E(S, `немає SVG-ілюстрації «${s.svg}» у svgFig()`);
      if (s.fig && !FIGS.includes(s.fig.kind)) E(S, `невідомий fig.kind «${s.fig.kind}»`);
      if (s.pre && !allLessonIds.has(s.pre)) E(S, `pre: немає уроку ${s.pre}`);
      if (s.sk && !c.skills[s.sk]) E(S, `навичка «${s.sk}» не оголошена в content/subjects/${c.id}.js`);
      if (GRADED.includes(s.type) && !s.poll && !s.hyp) {
        if (!s.sk) W(S, "завдання без навички sk — не потрапить у прогрес");
        const expl = String((s.fbOk || "") + " " + (s.fbText || "")).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        if (!s.fbText || expl.length < 30) E(S, "fbOk + fbText мають пояснювати ЧОМУ (разом ≥ 30 символів)");
        if (!s.fbOk) W(S, "немає fbOk");
      }
      if ((s.poll || s.hyp) && !s.fbTitle) E(S, "poll/hyp потребує fbTitle");
      switch (s.type) {
        case "choice": if (!s.poll && !s.hyp && !(Number.isInteger(s.correct) && s.correct >= 0 && s.correct < (s.opts || []).length)) E(S, "correct поза межами opts");
          if ((s.opts || []).length < 2 || s.opts.length > 5) E(S, "варіантів має бути 2–5"); break;
        case "multi": if (!Array.isArray(s.correct) || !s.correct.length || s.correct.some(k => k < 0 || k >= s.opts.length)) E(S, "correct: непорожній масив індексів opts");
          if (s.correct?.length === s.opts?.length) W(S, "усі варіанти правильні — завдання нічого не перевіряє"); break;
        case "sort": if (!Array.isArray(s.bins) || s.bins.length < 2) E(S, "bins: щонайменше 2 кошики");
          (s.items || []).forEach(([t, b]) => { if (!(b >= 0 && b < s.bins.length)) E(S, `елемент «${t}» має неіснуючий кошик ${b}`); });
          if (new Set((s.items || []).map(i => i[1])).size < 2) W(S, "усі елементи в одному кошику"); break;
        case "order": { const n = (s.items || []).length, sh = s.shuffle || [];
          if (sh.length !== n || [...sh].sort((a, b) => a - b).some((v, k) => v !== k)) E(S, "shuffle має бути перестановкою індексів items");
          if (sh.every((v, k) => v === k)) E(S, "shuffle показує вже правильний порядок"); break; }
        case "slider": if (!(s.answer >= s.min && s.answer <= s.max)) E(S, "answer поза [min; max]"); if (!s.unit) W(S, "немає unit"); break;
        case "align": { const n = s.ref.to - s.ref.from + 1; if (s.sample.len > n || s.sample.endYear > s.ref.to || s.sample.endYear - s.sample.len + 1 < s.ref.from) E(S, "зразок не вміщується в еталон"); break; }
        case "shade": if (!(s.target >= 1 && s.target <= s.n)) E(S, "target має бути 1..n"); if (!["bar","circle"].includes(s.shape)) E(S, "shape: bar | circle"); break;
        case "numline": if (!(Number.isInteger(s.answer) && s.answer >= 0 && s.answer <= s.max * s.den)) E(S, "answer — ціле число поділок від 0 до max·den"); break;
        case "number": case "fracin": if (!(Number.isInteger(s.answer) && s.answer >= 0 && s.answer < 1e6)) E(S, "answer — ціле невід'ємне число (поле приймає лише цифри)");
          if (s.type === "fracin" && !(s.expr && s.den)) E(S, "fracin потребує expr і den"); break;
      }
      // довжина речень
      const sentLong = sentences(plain([s.body].join(" "))).filter(x => words(x).length > 25);
      if (sentLong.length) W(S, `дуже довге речення (${words(sentLong[0]).length} слів): «${sentLong[0].slice(0, 60)}…»`);
    });
    // профіль складності
    const m = lessonMetrics(l), p = profiles[c.id]?.[gradeBand(sec.grade)] || profiles._default[gradeBand(sec.grade)];
    for (const [k, [lo, hi]] of Object.entries(p)) if (m[k] < lo || m[k] > hi) W(L, `${k}=${m[k]} поза профілем [${lo}; ${hi}] для ${c.id}, ${gradeBand(sec.grade)} кл.`);
    if (!l.boss && !l.screens.some(s => s.hint)) W(L, "жодної підказки hint у звичайному уроці");
  }
}
for (const s of soon) if (!s.colors?.light?.accent) E(`catalog ${s.id}`, "немає colors.light.accent");

const out = { date: new Date().toISOString(), errors, warnings };
fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "reports/validate.json"), JSON.stringify(out, null, 2) + "\n");
if (!quiet || errors.length) errors.forEach(e => console.log("ПОМИЛКА  " + e));
if (!quiet) warnings.forEach(w => console.log("увага    " + w));
console.log(`\n${errors.length} помилок, ${warnings.length} попереджень${onlySec ? ` (розділ ${onlySec})` : ""}. Звіт: reports/validate.json`);
process.exit(errors.length ? 1 : 0);
