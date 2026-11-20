---
claimed_from: todo
claimed_at: 2026-11-20T08:28:12.109Z
id: engine-eng-diag-pool
type: engine
subject: eng
depends_on: [engine-eng-build, engine-eng-match]
status: done
claimed_by: engine-eng-diag-pool
created: 2026-11-19
source: design-eng
---
# Тест рівня й пули eng: нові типи, перший клас предмета (4 кл.) без попереднього

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §7)
1. `DIAG_TYPES`, `POOL_TYPES` (learn.js:15, :2009–2011) + `build`, `match`; ліміти `DIAG_LANG_LIMITS`/`POOL_LANG_LIMITS`.
2. Перший клас предмета (dge4): validate вимагає уроків попередніх класів для `pre`-теми. Дозволити `pre` з `lessons: []` + `baseline` (напр. «Pre A1», «A1») лише для найнижчого класу предмета; вердикт `gap` → перший урок e4s1 через `see`. Узгодити з CONTENT_SCHEMA §9, PERSONALIZATION.md.
3. Літери A/B/C у тесті рівня eng (разом з engine-eng-validate п. 4).
4. Дим-тест `make-tasks --write-pool --subject eng --dry-run` (після engine-eng-tools).

## Готово, коли
- [x] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md (текст — у звіті оркестратору; inbox дописує він).

## Примітка (skills-eng, 2026-11-19)
Загальна механіка `baseline: true` з `lessons: []` уже є (app/learn.js:2150–2154, CONTENT_SCHEMA §9; так зроблено тест рівня math 4 і ukr 5). Можливо, п. 2 зводиться до перевірки на фікстурі eng і налаштування `see` на e4s1 — спершу перевір, перш ніж міняти рушій.

## Із повторного рев'ю skills-eng (P2-4, 2026-11-19)
Тренування показує під вправою «Джерело: <short чи title>, с. N» (app/app.js:1067–1069), назва в `inL()` → `lang="en"`. Для пулів eng `sources` — програма класу (`top34`/`mpim`/`p1407`, скіл math-pool-diag §2в), вправи власні: рядок читається як «вправа з програми», а український текст диктор читає англійською. Рішення: для пулів без підручника не показувати «Джерело» або показувати тему програми як хром рушія українською (`inUi`); до того — англійський `short` джерела.

## Нотатки виконавця (engine-eng-diag-pool, 2026-11-20)

**Що вже було (перевірено, рушій не змінювався):**
- п. 1: `build`, `match` уже в `DIAG_TYPES` (learn.js:15) і `POOL_LANG`/`POOL_TYPES` (learn.js:2009–2011) — зроблено в engine-eng-build/-match; тест рівня з build/match у браузері — test-ui №28, №29.
- п. 2: загальна механіка `baseline: true` + `lessons: []` (learn.js validate, «baseline заборонено», щойно в предмета є урок класу нижче) і `see` (урок поточного класу) покриває dge4 без змін. Прогалина → `plan.base.next` = перший урок розділу з `for` (e4s1l1), з `see` — «тема є в уроці …» без поради «з дорослим». Перевірено на фікстурі eng у test-validate (справжній validate.mjs: dge4 з `for: ["fxen"]`, `see: ["fxenl1"]` — чисто; з уроком 3 кл. — «baseline заборонено»); план і рівень — test-learn §11 (без змін).
- п. 3: A, B, C у тесті рівня — engine-eng-validate (`OPT_LETTERS_LANG`, test-ui №26).
- п. 4: `node tools/make-tasks.mjs --write-pool --subject eng --dry-run` → «створилося б 0; задача вже є — 18 (e4s1…e5s10)», код 0.

**Змінено:**
- tools/validate.mjs:308–323 — `DIAG_LANG_LIMITS` + `buildTiles: 7`, `buildExtra: 1`, `matchPairs: 4`; помилки в `diagLangIssues` (лише тест рівня; урок і пул — межі lang.js 9 / 2 / 6). Закриває P3-4 рев'ю engine-eng-match.
- P2-4 (рев'ю skills-eng): поле джерела пулу `program: true` — джерело-програма, вправи власні.
  - app/app.js:1070–1074 — тренування не показує `<p class="srcnote">Джерело: …` для вправи з таким джерелом; інші джерела — як раніше.
  - app/learn.js:2059–2061, 2079 (validatePool) — `program` не boolean — помилка; `adapted: true` у вправи з джерела-програми — помилка.
  - tools/validate.mjs:546–548 — у предметі з `targetLang` джерело пулу без `program: true` — попередження.
- tools/make-tasks.mjs:353 — шаблон пулу eng: `sources` — програма з `program: true`, `src` «<сигла> с. N», словники — у нотатки (раніше «sources — словники», розходилось зі скілом §2в).
- Документи: docs/CONTENT_SCHEMA.md §9 (межі build/match у тесті; baseline — eng 4 кл.), §10 (`program`, межі пулу build/match, eng-джерела); docs/PERSONALIZATION.md «Baseline» (перший клас предмета, dge4); .claude/skills/math-pool-diag/SKILL.md §2в (механіка готова, межі, `program: true`).

**Тести:**
- tools/test-validate.mjs (блок engine-eng-validate, «engine-eng-diag-pool»): межі build/match у тесті рівня (чисто / 8 плиток / 2 пастки / 5 пар), ті самі в уроці — чисто; dge4 baseline + see — чисто, з уроком 3 кл. — помилка; пул eng з build і match + `program: true` — чисто, без `program` — попередження, `program: "yes"` і `adapted` — помилки.
- tools/test-ui.mjs №30 `practiceEngScenario`: тренування eng (360 px, дотик) — build хибно → hint і друга спроба → «Пояснення»; match з першої; джерело-програма — без «Джерело», звичайне джерело — з ним; seen, SRS, журнал (raw build — речення, match — масив).
- Мутанти (копія дерева в scratchpad): buildTiles 9, buildExtra 2, matchPairs 6, без попередження program, без перевірки boolean, без перевірки adapted — усі 6 ловить test-validate; app.js без умови `program` — ловить test-ui №30.

**Прогони:** `node tools/test-validate.mjs` — 2001 ok; `node tools/test-lang.mjs` — 463 ok; `node tools/test-learn.mjs` — 2956 ok; `node tools/test-make-tasks.mjs` — 101 ok; `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 442 ok, 0 ✗; `npm run check` — rc 0 (validate: 0 помилок, 235 попереджень на живому змісті); мутант app.js (без умови `program`) — test-ui 441 ok, 1 ✗ (№30).
Не запускалось: `python3 tools/playtest.py`, `python3 tools/test-answer-ui.py --suite regression` (немає Python playwright — лише CI, job browser). Зміна app.js для українських предметів — лише вираз умови в рядку «Джерело» (без `program` — той самий рядок), test-ui №13 (тренування ukr) і №26 («Джерело:» uk) зелені.

**Обмеження / що лишилось:**
- Збірку (index.html, sw.js, manifest) не комічено за вказівкою оркестратора — після рев'ю `node tools/build.mjs` окремим комітом (зміна app.js → новий VERSION у sw.js).
- Межі 7 / 1 / 4 — мій вибір за принципом «одне завдання = одне вміння» (дизайн чисел не задавав); якщо для 10–11 кл. речення тесту довші — переглянути `buildTiles`.
- Рядок «Тема програми: …» хромом замість приховування не робив: дитині він нічого не дає, а `src` лишається для верифікатора.
