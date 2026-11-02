#!/usr/bin/env node
// Слід · створює задачі на написання розділів з плану (content/<предмет>/plan.js).
// Для кожного розділу без уроків, для якого ще немає задачі в tasks/*, з'являється tasks/todo/write-<предмет>-<id>.md.
// Запуск: node tools/make-tasks.mjs [--subject math] [--grade 6]
// Режим пулів (engine-practice-pool): node tools/make-tasks.mjs --write-pool [--grade 8] [--dry-run] [--matrix FILE] [--tasks DIR]
//   задачі write-math-pool-<розділ> за матрицею покриття (docs/math-personalization-coverage.json) і чинним шаблоном пакета:
//   лише розділи з required-уроками; пропускає розділ, якщо задача з таким id уже є в todo/doing/review/done або пул уже є в змісті.
//   --dry-run нічого не пише, лише показує; --matrix / --tasks — інші файл матриці й тека задач (fixtures у tools/test-make-tasks.mjs).
import fs from "node:fs"; import path from "node:path";
import { loadContent, ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
const onlySubj = opt("--subject"), onlyGrade = opt("--grade") ? +opt("--grade") : null;
const { subjects } = loadContent();
const TASKS = opt("--tasks") ? path.resolve(opt("--tasks")) : path.join(ROOT, "tasks"), DRY = args.includes("--dry-run");
const STATES = ["todo", "doing", "review", "done"];
const existing = new Set(STATES.flatMap(d => fs.existsSync(path.join(TASKS, d)) ? fs.readdirSync(path.join(TASKS, d)) : []));
// id задач з frontmatter (файл могли перейменувати): «id: write-math-pool-g8m2»
const existingIds = new Set(STATES.flatMap(d => fs.existsSync(path.join(TASKS, d)) ? fs.readdirSync(path.join(TASKS, d)).filter(f => f.endsWith(".md"))
  .map(f => (fs.readFileSync(path.join(TASKS, d, f), "utf8").match(/^id:\s*(\S+)/m) || [])[1]).filter(Boolean) : []));
if (args.includes("--write-pool")) { writePool(); process.exit(0); }
const exemplar = { hist: "content/hist/g5-s2.js", math: "content/math/g5-ms1.js", ukr: "див. style/ukr.md → «Еталони» (перший верифікований розділ); до того — docs/CONTENT_SCHEMA.md §4.1 і style/ukr.md" };
let made = 0;
for (const c of subjects) {
  if (onlySubj && c.id !== onlySubj) continue;
  c.sections.forEach((sec, k) => {
    if (sec.lessons || !sec.plan) return;
    if (onlyGrade && sec.grade !== onlyGrade) return;
    const name = `write-${c.id}-${sec.id}.md`;
    if (existing.has(name)) return;
    const prev = c.sections.filter(s => s.grade === sec.grade && s.lessons).map(s => s.id);
    const body = `---
id: write-${c.id}-${sec.id}
type: write-section
subject: ${c.id}
grade: ${sec.grade}
section: ${sec.id}
weeks: [${sec.weeks.join(", ")}]
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
---
# Написати розділ «${sec.title}» (${c.subject}, ${sec.grade} клас)

## Навіщо (з плану, можна уточнити)
${sec.why}

## Теми уроків (з плану)
${sec.plan.map((t, i) => `${i + 1}. ${t}`).join("\n")}
${sec.plan.length + 1}. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/${c.id}.md, style/profiles.json
- memory/long/glossary/${c.id}.md і memory/long/facts/${c.id}.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: ${exemplar[c.id] || "будь-який розділ предмета зі статусом verified/approved"}${prev.length ? `\n- Розділи цього ж класу з уроками: ${prev.join(", ")} — вирівнюйся по них` : ""}

## Результат
- Файл \`content/${c.id}/g${sec.grade}-${sec.id}.js\` з \`SLID.section("${c.id}", { id: "${sec.id}", ... })\` — той самий id, що в плані
- Фото (якщо є) у \`img/${c.id}/${sec.id}/\`, з \`credits\` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/${c.id}.md)

## Готово, коли
- [ ] \`node tools/build.mjs && node tools/validate.mjs --section ${sec.id}\` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] \`node tools/stats.mjs --subject ${c.id}\` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
`;
    fs.writeFileSync(path.join(TASKS, "todo", name), body, { flag: "wx" }); made++;
  });
}
console.log(`Створено задач: ${made}`);

/* ---------- --write-pool: задачі на пули тренування за матрицею (шаблон пакета tasks/README-math-personalization.md) ---------- */
function writePool() {
  if (onlySubj && onlySubj !== "math") { console.error("--write-pool: матриця покриття є лише для math"); process.exit(2); }
  const mfile = opt("--matrix") ? path.resolve(opt("--matrix")) : path.join(ROOT, "docs/math-personalization-coverage.json");
  const M = JSON.parse(fs.readFileSync(mfile, "utf8")), c = subjects.find(x => x.id === "math");
  const NEW_KINDS = ["ratio", "coordinates2", "coordinates3", "exactRoot", "intervalSet", "expression", "periodicSet"];
  const deferred = new Set(M.deferredSections || []), bySec = new Map();
  for (const l of M.lessons || []) { if (onlyGrade && l.grade !== onlyGrade) continue; (bySec.get(l.section) || bySec.set(l.section, []).get(l.section)).push(l); }
  const poolIds = new Set((c.pools || []).map(p => p.id)), out = { made: [], task: [], pool: [], deferred: [] };
  for (const [secId, ls] of bySec) {
    const req = ls.filter(l => l.curricularScope === "required"), id = `write-math-pool-${secId}`, name = `${id}.md`;
    const pool = ls.find(l => l.pool)?.pool || `p${secId}`, grade = ls[0].grade;
    if (!req.length || deferred.has(secId)) { out.deferred.push(secId); continue; }
    if (existing.has(name) || existingIds.has(id)) { out.task.push(secId); continue; }
    const pfile = `content/math/pool-g${grade}-${secId}.js`;
    if (poolIds.has(pool) || fs.existsSync(path.join(ROOT, pfile))) { out.pool.push(secId); continue; }
    const sec = c.sections.find(s => s.id === secId), title = l => (sec?.lessons || []).find(x => x.id === l.lesson)?.title || l.title;
    const lo = req.reduce((a, l) => a + (l.exercises?.min ?? 6), 0), hi = req.reduce((a, l) => a + (l.exercises?.max ?? 8), 0);
    const deps = ["curate-math-personalization-map", ...(ls.some(l => (l.formats || []).some(f => NEW_KINDS.includes(f))) ? ["engine-math-pool-answer-formats"] : [])];
    const lv = l => (l.exercises?.levels || [3, 2, 1]).join("/");
    const body = `---
id: ${id}
type: write-pool
subject: math
grade: ${grade}
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
depends_on: [${deps.join(", ")}]
generated_by: tools/make-tasks.mjs --write-pool (матриця ${M.version})
---
# Зібрати пул «${sec?.title || secId}» (${grade} клас, ${secId})

## Результат

Один файл \`${pfile}\`: \`SLID.pool("math", { id: "${pool}", section: "${secId}", status: "draft", sources: [...], items: [...] })\`. Клас визначається розділом. Зразки — content/math/pool-g6-*.js і tasks/done/write-math-pool-g6m*.md; чинний контракт — CONTENT_SCHEMA §10.

## Уроки для покриття

${ls.map(l => `- \`${l.lesson}\` — ${title(l)} **[${l.curricularScope}]**`).join("\n")}

Усього ${ls.length} тематичних уроків. Boss не потребує окремого дубльованого пулу.

## Навчальний обсяг

Перелік уроків вище — інвентаризація з матриці. Джерело обов’язкового обсягу — версійована docs/math-personalization-coverage.md (версія ${M.version}). Виконати всі required-теми; optional/pending не включати до обов’язкової діагностики, дефіцитів учня або мінімуму вправ. Для них записати окремий стан і причину відкладення. Якщо змінилася матриця — куратор оновлює цю задачу до виконання. Автор самостійно не змінює програму або спільний план.

## Що зробити

1. Прочитати реалізовані уроки цього розділу й матрицю покриття. На кожен required-урок зібрати 6–8 вправ: близько 3 рівня 1, 2–3 рівня 2, 1–2 рівня 3. Для поняттєвого уроку мінімум 5, із поясненням і реальним покриттям умінь. Обов’язковий обсяг розділу за ${M.version} — ${lo}–${hi} вправ.
2. Брати реальні вправи відкритих підручників/збірників, базова лінія Мерзляка (для 4-го — відповідні чинні підручники). Відкрити сторінку й звірити умову та числа; дроби/мінуси/знаки — візуально на відрендереній PDF-сторінці, не лише з текстового шару. Не вигадувати джерел, номерів або вправ для досягнення кількості. Генератор \`gen\` (CONTENT_SCHEMA §10) не заміняє обов’язкових вправ з джерел.
3. Для кожної вправи — src з id джерела й номером/підпунктом, srcPage, sources з назвою/виданням/URL. Офіційний ресурс бажаний; перевірене дзеркало припустиме з приміткою. Текстові сюжети переказати, зберегти числа й мету. adapted позначає взятий підпункт/запитання; не міняти «знайди всі» на «скільки» через брак формату.
4. Основний тип — answer: дитина сама пише відповідь. comparison/list/factors та інші реалізовані формати застосовувати за призначенням; reduced/mixed/fractionOnly — лише за вимогою умови; tol — лише коли задано наближення. choice/multi — для доречних поняттєвих питань, не як заміна всім відповідям старших класів.
5. Кожна задача: сталий id, lesson з переліку вище, коректний sk, lvl 1–3, answer/ключ, 2–5 зрозумілих steps, для рівнів 2–3 hint, одиниці й рисунок за потреби. Числа, метод і терміни відповідають тому, чого вже навчає урок.
6. Розв’язати кожну вправу незалежно від надрукованої відповіді двічі; звірити область визначення, одиниці, округлення, еквіваленти. Вправи з недоступним форматом або методом записати як прогалини, не оголошувати урок повністю покритим. Передати потрібне розширення рушію; не редагувати app/.

## Готово, коли

- [ ] Усі required-уроки з узгодженої матриці мають мінімальне покриття й три рівні; optional/pending перелічено окремо без хибної позначки виконання; таблиця lesson → кількість/рівні/джерела й винятки є в нотатках.
- [ ] \`node tools/validate.mjs --pool ${pool}\` — 0 помилок; усі джерела відкрито, числа звірено, відповіді й steps перевірено.
- [ ] Змінено лише свій файл пулу, цю задачу та дописано inbox; status draft. Оркестратор запускає build.
- [ ] Задача через claim.mjs передана в review; незалежне розв’язання й звірка джерел — verify-math-personalization-g${grade}; браузерне приймання — qa-math-personalization-g${grade}.

## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md.

## Нотатки виконавця

<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

## Обсяг за матрицею ${M.version}

Джерело обсягу: docs/math-personalization-coverage.md та .json, версія **${M.version}**${M.status ? ` (${M.status})` : ""}; починати після решти передумов задачі.

| Урок | Scope | Обов’язкові вправи | Формати / джерело |
|---|---|---|---|
${ls.map(l => `| ${l.lesson} | ${l.curricularScope} | ${l.curricularScope === "required" ? `${l.exercises?.min ?? 6}–${l.exercises?.max ?? 8} (${lv(l)} за рівнями мінімум)` : "0; відкладено"} | ${(l.formats || []).join(", ")}${l.evidence ? "; " + l.evidence : ""} |`).join("\n")}

Покриття: **${req.length} required-уроків, ${lo}–${hi} вправ**. Optional/pending не включати у файл пулу цієї версії; boss не дублювати.
${ls.filter(l => l.curricularScope !== "required").map(l => `- ${l.lesson}: ${l.reason || "відкладено"}`).join("\n")}
`;
    // wx: ніколи не перезаписувати наявний файл (гонка з claim чи ручне створення між перевіркою й записом)
    if (!DRY) { fs.mkdirSync(path.join(TASKS, "todo"), { recursive: true }); fs.writeFileSync(path.join(TASKS, "todo", name), body, { flag: "wx" }); }
    out.made.push(secId);
  }
  console.log(`${DRY ? "[dry-run] " : ""}Матриця ${M.version}: ${DRY ? "створилося б" : "створено"} задач на пули: ${out.made.length}${out.made.length ? " (" + out.made.join(", ") + ")" : ""}`);
  console.log(`Пропущено: задача вже є — ${out.task.length}; пул уже є — ${out.pool.length}${out.pool.length ? " (" + out.pool.join(", ") + ")" : ""}; без required / відкладено — ${out.deferred.length}${out.deferred.length ? " (" + out.deferred.join(", ") + ")" : ""}`);
}
