#!/usr/bin/env node
// Слід · створює задачі на написання розділів з плану (content/<предмет>/plan.js).
// Для кожного розділу без уроків, для якого ще немає задачі в tasks/*, з'являється tasks/todo/write-<предмет>-<id>.md.
// Запуск: node tools/make-tasks.mjs [--subject math] [--grade 6] [--dry-run] [--tasks DIR] [--content DIR]
//   --dry-run (в обох режимах) нічого не пише, навіть теку todo, лише показує, які задачі створилися б (tools-make-tasks-dry-run).
//   --tasks — інша тека задач; --content — інше дерево змісту (корінь з content/ і app/; фікстура в tools/test-make-tasks.mjs) — у обох режимах.
//   Шаблон автора не велить запускати build (його запускає оркестратор, AGENTS.md §4 п. 8); для предметів з IMG_REQUIRED (lib.mjs) — D-027.
// Режим пулів (engine-practice-pool): node tools/make-tasks.mjs --write-pool [--grade 8] [--dry-run] [--matrix FILE] [--tasks DIR]
//   задачі write-math-pool-<розділ> за матрицею покриття (docs/math-personalization-coverage.json) і чинним шаблоном пакета:
//   лише розділи з required-уроками; пропускає розділ, якщо задача з таким id уже є в todo/doing/review/done або пул уже є в змісті.
//   --dry-run нічого не пише, лише показує; --matrix / --tasks / --content — інші файл матриці, тека задач і дерево змісту (fixtures у tools/test-make-tasks.mjs).
// Пули мовних предметів (engine-pool-lang): node tools/make-tasks.mjs --write-pool --subject ukr [--grade 9] [--dry-run] [--tasks DIR] [--content DIR]
//   матриці немає: задача write-ukr-pool-<розділ> для кожного розділу з уроками, у якого немає пулу (id p<розділ>, пул із section = розділ або
//   файл content/ukr/pool-g<клас>-<розділ>.js) і задачі (за іменем файлу, id чи section у frontmatter); «Пишемо самі…» чи noPool: true (lib.noPool) — без пулу.
//   Шаблон — CONTENT_SCHEMA §10 «Пули мовних предметів»; depends_on: [engine-pool-lang], доки та задача не в done.
// Предмет зі змістом іншою мовою (targetLang, subjectLang у lib.mjs; eng — engine-eng-tools): задачі write-<предмет>-g<клас>-<розділ> і
//   write-<предмет>-pool-g<клас>-<розділ> із шаблоном «усе англійською» (зразки — задачі design-eng у tasks/), пул залежить від engine-eng-diag-pool.
// Дублікат шукаємо за іменем файлу (і новим, і старим форматом), за id і за frontmatter type + subject + section (задачу перейменували);
//   задача пулу задачу розділу не заступає. Розділ без пулу — lib.noPool: поле розділу noPool: true (також у plan.js) або «Пишемо самі…».
import fs from "node:fs"; import path from "node:path";
import { loadContent, ROOT, IMG_REQUIRED, noPool, subjectLang, isEnglishSubject, exitFlushed } from "./lib.mjs";
// пули мовних предметів без матриці (engine-pool-lang): предмет → { book: базове джерело в шаблоні, style: стиль-гайд }.
// Предмет з мовою змісту (subjectLang, eng — engine-eng-tools) — шаблон «усе англійською»: вправи власні, джерела форм — словники
const LANG_POOL = { ukr: { book: "З<клас> (memory/long/facts/ukr.md «Джерела»: бібліографія, URL, відповідність сторінок PDF)", style: "style/ukr.md" },
  eng: { book: "словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)", style: "style/eng.md" } };

const args = process.argv.slice(2);
const opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
const onlySubj = opt("--subject"), onlyGrade = opt("--grade") ? +opt("--grade") : null;
const CROOT = opt("--content") ? path.resolve(opt("--content")) : ROOT;   // корінь змісту: і loadContent, і перевірка файлу пулу (рев'ю tools-make-tasks-template P3-1)
const { subjects } = loadContent(CROOT);
const TASKS = opt("--tasks") ? path.resolve(opt("--tasks")) : path.join(ROOT, "tasks"), DRY = args.includes("--dry-run");
const STATES = ["todo", "doing", "review", "done"];
const existing = new Set(STATES.flatMap(d => fs.existsSync(path.join(TASKS, d)) ? fs.readdirSync(path.join(TASKS, d)) : []));
// frontmatter задач (файл могли перейменувати): id «write-math-pool-g8m2»; type + subject + section — задачі eng названо
// write-eng-g<клас>-<розділ>, а не write-eng-<розділ> (engine-eng-tools), тож розділ шукаємо й за полем section:
const fm = STATES.flatMap(d => fs.existsSync(path.join(TASKS, d)) ? fs.readdirSync(path.join(TASKS, d)).filter(f => f.endsWith(".md")).map(f => {
  const head = (fs.readFileSync(path.join(TASKS, d, f), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || "", v = k => (head.match(new RegExp(`^${k}:[ \\t]*(\\S+)`, "m")) || [])[1];
  return { id: v("id"), type: v("type"), subject: v("subject"), section: v("section") }; }) : []);
const existingIds = new Set(fm.map(t => t.id).filter(Boolean));
/** Є задача цього типу на розділ предмета (за frontmatter). */
const hasTaskFor = (type, subj, sec) => fm.some(t => t.type === type && t.subject === subj && t.section === sec);
if (args.includes("--write-pool")) { writePool(); await exitFlushed(process.exitCode ?? 0); }   // далі — звичайний режим (tools-euphony-json-pipe)
const exemplar = { hist: "content/hist/g5-s2.js", math: "content/math/g5-ms1.js", ukr: "content/ukr/g5-u5s1.js і g5-u5s4.js (verified; style/ukr.md → «Еталони»)", world: "content/world/g7-w7s1.js (еталон після верифікації; style/world.md → «Еталони»)",
  eng: "style/eng.md → «Еталони» (e4s1, e5s1 після верифікації); доти — style/eng.md і зразки docs/CONTENT_SCHEMA.md" };
const made = [];
if (!DRY) fs.mkdirSync(path.join(TASKS, "todo"), { recursive: true });
for (const c of subjects) {
  if (onlySubj && c.id !== onlySubj) continue;
  c.sections.forEach((sec, k) => {
    if (sec.lessons || !sec.plan) return;
    if (onlyGrade && sec.grade !== onlyGrade) return;
    // предмет з мовою змісту (eng): write-eng-g<клас>-<розділ>, як задачі design-eng; решта — write-<предмет>-<розділ>, як і було
    const id = subjectLang(c) ? `write-${c.id}-g${sec.grade}-${sec.id}` : `write-${c.id}-${sec.id}`, name = `${id}.md`;
    if ([name, `write-${c.id}-${sec.id}.md`].some(n => existing.has(n)) || existingIds.has(id) || hasTaskFor("write-section", c.id, sec.id)) return;
    const prev = c.sections.filter(s => s.grade === sec.grade && s.lessons).map(s => s.id);
    const img = !!IMG_REQUIRED[c.id];   // D-027: у кожному уроці ≥ 1 справжнє img (помилка validate)
    const body = isEnglishSubject(c) ? engSectionTask(c, sec, id, prev, img) : `---
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
- AGENTS.md і скіл автора \`.claude/skills/content-author/SKILL.md\`${img ? "\n- Скіл зображень \`.claude/skills/hist-images/SKILL.md\` і docs/IMAGES.md (D-027)" : ""}
- style/common.md, style/${c.id}.md, style/profiles.json
- memory/long/glossary/${c.id}.md і memory/long/facts/${c.id}.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: ${exemplar[c.id] || "будь-який розділ предмета зі статусом verified/approved"}${prev.length ? `\n- Розділи цього ж класу з уроками: ${prev.join(", ")} — вирівнюйся по них` : ""}

## Результат
- Файл \`content/${c.id}/g${sec.grade}-${sec.id}.js\` з \`SLID.section("${c.id}", { id: "${sec.id}", ... })\` — той самий id, що в плані
${img ? `- У кожному уроці ≥ 1 справжнє \`img\` з відкритою ліцензією, з \`cap\` і \`credits\` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в \`img/${c.id}/${sec.id}/\`, процедура — скіл hist-images`
       : `- Зображення (якщо потрібні) — у \`img/${c.id}/${sec.id}/\`, з \`cap\` і \`credits\` у розділі`}
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/${c.id}.md)

## Готово, коли
- [ ] \`node tools/validate.mjs --section ${sec.id}\` — 0 помилок${img ? "\n- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»" : ""}
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] \`node tools/stats.mjs --subject ${c.id}\` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — \`node tools/build.mjs\` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
`;
    if (!DRY) fs.writeFileSync(path.join(TASKS, "todo", name), body, { flag: "wx" });
    made.push(name);
  });
}
/** Шаблон задачі розділу для предмета зі змістом англійською (targetLang "en", engine-eng-tools; зразок — tasks/todo/write-eng-g5-e5s1.md
    від design-eng): усе англійською, британська норма, без звуку, тексти власні, джерела форм — словники (docs/design/english.md §2, §5, §8, §11.1). */
function engSectionTask(c, sec, id, prev, img) {
  return `---
id: ${id}
type: write-section
subject: ${c.id}
grade: ${sec.grade}
section: ${sec.id}
weeks: [${sec.weeks.join(", ")}]
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
generated_by: tools/make-tasks.mjs --subject ${c.id}
---
# Написати розділ «${sec.title}» (${c.subject}, ${sec.grade} клас)

## Навіщо (з плану, можна уточнити)
${sec.why}

## Теми уроків (з плану)
${sec.plan.map((t, i) => `${i + 1}. ${t}`).join("\n")}
${sec.plan.length + 1}. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Рішення людини, обов'язкові
docs/design/english.md §11.1 (D-054): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; словники дозволено. Програма й рівень класу — у коментарі \`content/${c.id}/plan.js\` і docs/design/english.md §4.

## Прочитати перед роботою
- AGENTS.md; скіл автора \`.claude/skills/content-author/SKILL.md\` (розділ про англійську); docs/design/english.md §2, §5, §6, §8${img ? "\n- Скіл зображень \`.claude/skills/hist-images/SKILL.md\` і docs/IMAGES.md (D-027)" : ""}
- style/common.md (структура уроку, чесне завдання D-019), style/${c.id}.md, style/profiles.json (\`${c.id}\`)
- memory/long/glossary/${c.id}.md, memory/long/facts/${c.id}.md («Джерела»: програми й словники), memory/long/pitfalls-content.md «Англійська»
- Еталон стилю: ${exemplar[c.id] || "будь-який розділ предмета зі статусом verified/approved"}${prev.length ? `\n- Розділи цього ж класу з уроками: ${prev.join(", ")} — вирівнюйся по них` : ""}

## Результат
- Файл \`content/${c.id}/g${sec.grade}-${sec.id}.js\` з \`SLID.section("${c.id}", { id: "${sec.id}", ... })\` — той самий id, що в плані.
- **Усе англійською**, британська норма: назви, \`why\`, \`learned\`, теорія, інструкції, підказки, фідбек, варіанти (A, B, C). Пояснення — не складніші за рівень класу (style/${c.id}.md). Кирилиці в змісті немає${sec.grade <= 5 ? " (виняток — поле \`uk\` 4–5 кл.; за замовчуванням не додавати, style/" + c.id + ".md)" : ""}.
- **Без звуку:** не імітувати аудіювання текстом, не обіцяти в \`learned\` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників (docs/design/english.md §8).
${img ? `- У кожному уроці ≥ 1 справжнє \`img\` з відкритою ліцензією, з \`cap\` і \`credits\` (D-027): файли в \`img/${c.id}/${sec.id}/\`, процедура — скіл hist-images`
       : `- Зображення (якщо потрібні) — у \`img/${c.id}/${sec.id}/\`, з \`cap\` і \`credits\`; умова «Look at the picture» без ілюстрації — попередження validate`}
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові факти — рядками FACT в inbox.

## Готово, коли
- [ ] \`node tools/validate.mjs --section ${sec.id}\` — 0 помилок; попередження виправлено або пояснено нижче${img ? "\n- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027)" : ""}
- [ ] \`node tools/stats.mjs --subject ${c.id}\` — уроки розділу без прапорців «нетипово для сім'ї» (до калібрування — пояснити)
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді
- [ ] Задачу переміщено в tasks/review/ (content-verifier зі свіжим контекстом), у нотатках — джерела форм і фактів

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього.

## Нотатки агента
<!-- Виконавець: що зроблено, джерела форм і фактів, спірне -->
`;
}
console.log(DRY ? `[dry-run] Створилося б задач: ${made.length}${made.length ? " (" + made.join(", ") + ")" : ""}` : `Створено задач: ${made.length}`);

/* ---------- --write-pool: задачі на пули тренування за матрицею (шаблон пакета tasks/README-math-personalization.md) ---------- */
function writePool() {
  if (onlySubj && LANG_POOL[onlySubj]) return writePoolLang(subjects.find(x => x.id === onlySubj));
  if (onlySubj && onlySubj !== "math") { console.error(`--write-pool: матриця покриття є лише для math; без матриці — ${Object.keys(LANG_POOL).join(", ")}; пули для ${onlySubj} не заплановано`); process.exit(2); }
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
    if (poolIds.has(pool) || fs.existsSync(path.join(CROOT, pfile))) { out.pool.push(secId); continue; }
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

/* ---------- --write-pool --subject ukr: задачі на пули мовного предмета без матриці (engine-pool-lang) ---------- */
function writePoolLang(c) {
  const L = LANG_POOL[c.id], out = { made: [], task: [], pool: [], nopool: [] }, en = isEnglishSubject(c);
  const doneIds = new Set(fs.existsSync(path.join(TASKS, "done")) ? fs.readdirSync(path.join(TASKS, "done")).filter(f => f.endsWith(".md"))
    .map(f => (fs.readFileSync(path.join(TASKS, "done", f), "utf8").match(/^id:\s*(\S+)/m) || [])[1] || f.replace(/\.md$/, "")) : []);
  // engine-задача, що дає пулу потрібні типи: мовні вправи (ukr) чи build/match у пулі (eng, docs/design/english.md §7)
  const engine = en ? "engine-eng-diag-pool" : "engine-pool-lang", engineDone = doneIds.has(engine);
  for (const sec of c.sections) {
    if (!sec.lessons?.length || (onlyGrade && sec.grade !== onlyGrade)) continue;
    if (noPool(sec)) { out.nopool.push(sec.id); continue; }
    // предмет з мовою змісту (eng): write-eng-pool-g<клас>-<розділ>, як задачі design-eng; дублікат — і за section у frontmatter
    const id = subjectLang(c) ? `write-${c.id}-pool-g${sec.grade}-${sec.id}` : `write-${c.id}-pool-${sec.id}`, name = `${id}.md`, pool = `p${sec.id}`, pfile = `content/${c.id}/pool-g${sec.grade}-${sec.id}.js`;
    if ([name, `write-${c.id}-pool-${sec.id}.md`].some(n => existing.has(n)) || existingIds.has(id) || hasTaskFor("write-pool", c.id, sec.id)) { out.task.push(sec.id); continue; }
    if ((c.pools || []).some(p => p.id === pool || p.section === sec.id) || fs.existsSync(path.join(CROOT, pfile))) { out.pool.push(sec.id); continue; }
    const lessons = sec.lessons.filter(l => !l.boss);
    const body = en ? engPoolTask(c, sec, { id, pool, pfile, lessons, engine, engineDone, L }) : `---
id: ${id}
type: write-pool
subject: ${c.id}
grade: ${sec.grade}
section: ${sec.id}
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
depends_on: [${engineDone ? "" : "engine-pool-lang"}]
generated_by: tools/make-tasks.mjs --write-pool --subject ${c.id}
---
# Зібрати пул тренування «${sec.title}» (${c.subject}, ${sec.grade} клас, ${sec.id})

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).
${engineDone ? "" : "\n**Не брати, доки `engine-pool-lang` не в done** (мовні вправи в пулі — нова можливість рушія; claim.mjs `depends_on` не перевіряє).\n"}
Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA.

## Результат
Один файл \`${pfile}\`: \`SLID.pool("${c.id}", { id: "${pool}", section: "${sec.id}", status: "draft", meta: {…}, sources: [...], items: [...] })\`. **id \`${pool}\` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
${lessons.map(l => `- \`${l.id}\` — ${l.title}`).join("\n")}

## Що зробити (скіли \`math-pool-diag\` — розділ про пули мовних предметів — і \`content-author\`)
1. Прочитай уроки розділу повністю: що саме пояснено, які приклади й винятки, \`sk\` екранів, \`learned\`. **Чесне завдання (D-019):** вправа тренує лише те, що урок пояснив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1 (одне правило, типовий випадок), 2 рівня 2 (кілька слів чи випадків, змішані з уже вивченим), 1–2 рівня 3 (виняток, складний випадок, пастка з уроку).
3. **Джерела — реальні вправи:** базовий підручник ${L.book} — номер вправи в \`src\` («З${sec.grade} впр. 123(2)»), сторінка в \`srcPage\`; додаткові — інші рекомендовані МОН підручники чи збірники з URL. Не вигадувати джерел і номерів; речення можна скоротити (\`adapted: true\`), зберігаючи орфограму. Літературні цитати — з автором.
4. **Типи:** переважно мовні вправи, де дитина пише чи позначає сама — \`gaps\` (≤ 6 пропусків), \`stress\` (≤ 6 слів), \`pick\` (≤ 40 слів), \`word\`, \`split\`; \`sort\` / \`order\` — для класифікацій і порядку; \`choice\` / \`multi\` — лише для поняттєвих питань («чому так пишемо»), не замість правопису. Поля числової відповіді (\`unit\`, \`answerKind\`, \`gen\`…) і \`hyp\`/\`poll\` у пулі заборонено.
5. Кожна вправа: сталий \`id\`, \`lesson\` з переліку, \`sk\` (з \`sk\` екранів уроку), \`lvl\`, \`steps\` — пояснення-розбір 1–4 рядки (правило + чому саме так; дитина бачить його як «Пояснення»), \`hint\` для рівнів 2–3.
6. **Норма (D-041, D-042):** помилкою — лише ненормативне і за підручником чи УП, і за словником (СУМ, ОС, ВЕСУМ / Горох); вибір між нормативними варіантами (у/в, і/й, із/зі перед збігом) не оцінювати; наголос — за словником, звіряти за зображенням сторінки. Кожну вправу розв'язати двічі.
7. Милозвучність і стиль — ${L.style}, \`node tools/euphony.mjs --subject ${c.id}\` (лише stdout для свого файлу).

## Обмеження
Змінюй лише \`${pfile}\`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] \`node tools/validate.mjs --pool ${pool}\` і \`node tools/personalization-qa.mjs --pool ${pool}\` — 0 помилок; \`status: "draft"\`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи / джерела», адаптації, що не ввійшло й чому; рядок в inbox.
- [ ] Задача → \`tasks/review/\` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити джерела й норму); браузерне приймання — qa-${c.id}-pool.

## Нотатки виконавця
`;
    if (!DRY) { fs.mkdirSync(path.join(TASKS, "todo"), { recursive: true }); fs.writeFileSync(path.join(TASKS, "todo", name), body, { flag: "wx" }); }
    out.made.push(sec.id);
  }
  const ls = a => a.length ? " (" + a.join(", ") + ")" : "";
  console.log(`${DRY ? "[dry-run] " : ""}${c.id}: ${DRY ? "створилося б" : "створено"} задач на пули: ${out.made.length}${ls(out.made)}`);
  console.log(`Пропущено: задача вже є — ${out.task.length}${ls(out.task)}; пул уже є — ${out.pool.length}${ls(out.pool)}; без пулу (noPool чи «Пишемо самі») — ${out.nopool.length}${ls(out.nopool)}`);
}

/** Шаблон задачі пулу для предмета зі змістом англійською (targetLang "en", engine-eng-tools; зразок — tasks/todo/write-eng-pool-g5-e5s1.md
    від design-eng): усе англійською, вправи власні (docs/design/english.md §8), типи gaps/word/pick/build/match, джерела форм — словники. */
function engPoolTask(c, sec, { id, pool, pfile, lessons, engine, engineDone, L }) {
  return `---
id: ${id}
type: write-pool
subject: ${c.id}
grade: ${sec.grade}
section: ${sec.id}
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
depends_on: [${engineDone ? "" : engine}]
generated_by: tools/make-tasks.mjs --write-pool --subject ${c.id}
---
# Зібрати пул тренування «${sec.title}» (${c.subject}, ${sec.grade} клас, ${sec.id})

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).
${engineDone ? "" : `\n**Не брати, доки \`${engine}\` не в done** (нові типи в пулі — можливість рушія; claim.mjs \`depends_on\` не перевіряє).\n`}
Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл \`${pfile}\`: \`SLID.pool("${c.id}", { id: "${pool}", section: "${sec.id}", status: "draft", meta: {…}, sources: [...], items: [...] })\`. **id \`${pool}\` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
${lessons.map(l => `- \`${l.id}\` — ${l.title}`).join("\n")}

## Що зробити (скіли \`math-pool-diag\` — розділ про пули мовних предметів — і \`content-author\`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, \`sk\` екранів, \`learned\`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (${L.style}): умови, \`hint\`, \`steps\`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); \`sources\` — словники, за якими звірено форми й значення: ${L.book}.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); \`sort\` / \`order\` — для класифікацій і порядку; \`choice\` / \`multi\` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (\`unit\`, \`answerKind\`, \`gen\`…) і \`hyp\`/\`poll\` у пулі заборонено.
5. Кожна вправа: сталий \`id\`, \`lesson\` з переліку, \`sk\` (з \`sk\` екранів уроку), \`lvl\`, \`steps\` — пояснення 1–4 рядки англійською, \`hint\` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/${c.id}.md, memory/long/facts/${c.id}.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише \`${pfile}\`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] \`node tools/validate.mjs --pool ${pool}\` і \`node tools/personalization-qa.mjs --pool ${pool}\` — 0 помилок; \`status: "draft"\`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → \`tasks/review/\` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
`;
}
