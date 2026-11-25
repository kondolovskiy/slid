# Рев'ю engine-eng-diag-pool (D-026)

- **Перевірено:** коміт `41cd08f` (гілка claude/eng-tasks), весь diff: app/app.js, app/learn.js, tools/validate.mjs, tools/make-tasks.mjs, tools/test-validate.mjs, tools/test-ui.mjs, docs/CONTENT_SCHEMA.md, docs/PERSONALIZATION.md, .claude/skills/math-pool-diag/SKILL.md, задача.
- **Рецензент:** незалежний агент, реалізацію не писав.
- **Прогони:** на чистому detached worktree коміту в scratchpad (не в спільному дереві).

## Вердикт: прийнято

Блокувальних знахідок (P1) немає. Є одна умова для оркестратора (P2-1, збірка), а також дві прогалини в тестах (P3).

## Перевірка тверджень автора

- **п. 1 (build, match у DIAG_TYPES / POOL_TYPES):** підтверджено, типи вже були там раніше (engine-eng-build / -match). Пул eng з build і match проходить validatePool (фікстура test-validate) і працює в тренуванні (test-ui №30).
- **п. 2 (dge4 baseline):** підтверджено, рушій змінювати не треба. Валідатор (app/learn.js:2155–2175) дозволяє `baseline: true` + `lessons: []` + `for` + `see`, лише доки в предмета немає уроків нижчого класу. Це покривають обидва нові кейси test-validate («чисто» / «baseline заборонено»). План перевірив власною фікстурою: справжній `buildPlan`/`level`, dge4, дві baseline-теми (одна з `see: ["e4s1l1"]`, друга без `see`), обидві `gap`. Результат: `base = [{p, gap, next: "e4s1l1"}, {q, gap, next: "e4s2l1"}]`, `level.base = false`, порада «з дорослим» не з'являється. Вердикт `gap` веде на e4s1, як і вимагає дизайн §7.
- **п. 3 (A/B/C):** закрито раніше в engine-eng-validate (`OPT_LETTERS_LANG`). Цей коміт його не зачіпає.
- **п. 4:** `node tools/make-tasks.mjs --write-pool --subject eng --dry-run` повертає rc 0 і «створилося б 0; задача вже є — 18».
- **P2-4 skills-eng (`program: true`):** рядок «Джерело» в тренуванні приховано лише для `src?.program === true` (app/app.js:1072). Для інших джерел вираз не змінився. Якщо `src` не знайдено, рядок показується як раніше.

## Регресія українських предметів

- Порівняв `reports/validate.json` на живому змісті коміту з validate.mjs і learn.js до коміту та після нього (без поля date). Звіти **ідентичні**: 0 помилок, 235 попереджень. Нове попередження про `program` з'являється лише для предметів із `targetLang`. Пулів eng ще немає, у math/ukr поля `program` немає ніде.
- test-ui №13 (тренування ukr) і №26 («Джерело:» uk) зелені. Для джерел без `program` рядок «Джерело» будує той самий шаблон, що й раніше.

## Мутанти (власні; копія в scratchpad)

| Мутант | Результат |
|---|---|
| validate `buildTiles: 7→8` | ловить test-validate (2 ✗) |
| validate `buildExtra: 1→2` | ловить (2 ✗) |
| validate `matchPairs: 4→5` | ловить (2 ✗) |
| validate `> matchPairs` → `>=` | ловить (2 ✗) |
| validate `> buildTiles` → `>=` | **не ловить** (P3-1) |
| validate без попередження `program` | ловить (1 ✗) |
| validate: попередження `program` для всіх предметів (`if (true)`) | **не ловить** (P3-2) |
| learn: без перевірки «program boolean» | ловить (2 ✗) |
| learn: без перевірки `adapted` у джерела-програми | ловить (2 ✗) |
| learn: `filter(x => x.program)` замість `=== true` | не ловить; мутант еквівалентний, бо не-boolean і так помилка |
| app.js: рядок «Джерело» завжди | ловить test-ui №30 (441 ok, 1 ✗) |
| app.js: рядка «Джерело» ніколи немає | ловить test-ui №26 і №30 (440 ok, 2 ✗) |

## Знахідки

- **P2-1 (оркестратору, до злиття).** Коміт змінює app/app.js, але збірки (`sw.js` VERSION) в ньому немає. `npm run check` на коміті змінює `sw.js`, а CI (pages.yml) перевіряє, що згенеровані файли закомічено. Автор це зазначив: `node tools/build.mjs` треба запустити окремим комітом, коли паралельні автори закінчать (AGENTS.md §4 п. 8, §7). Код це не блокує, але без цього кроку задача не «готова».
- **P3-1. Межа build у тесті рівня не перевірена на рівно 7 плитках.** tools/test-validate.mjs, блок «engine-eng-diag-pool»: «чисто» перевіряється на 5 плитках (4 + 1), «помилка» — на 8. Мутант `>=` у tools/validate.mjs:320 виживає. Варто додати кейс «7 плиток разом з extra — чисто», як це вже зроблено для match (4 пари — чисто).
- **P3-2. Немає негативного тесту на те, що попередження `program` не стосується предметів без `targetLang`.** tools/validate.mjs:548. Мутант `if (true)` виживає в test-validate. На живому змісті він дав би сотні попереджень math/ukr, але попередження не валять `npm run check`, тож регресію ніщо б не помітило. Варто додати кейс: пул предмета без `targetLang` і без `program` → `noWarn: "program"`.
- **P3-3 (спостереження, не дефект коміту).** Якщо `see` немає хоча б в однієї слабкої baseline-теми, а `see` є хоча б в однієї, `level.base = false`. Тоді текст радить «теми з попередніх класів пройти ще раз», хоча для теми без `see` уроку попереднього класу немає. Це наявна загальна механіка, а скіл §2в вимагає `see` для dge4. Можна подумати про попередження validate «eng: baseline без see», але це окремою задачею.

## Виконані перевірки (власні)

- `npm run check` на worktree `41cd08f`: rc 0. test-validate 2001 ok, test-lang 463, test-make-tasks 101, test-diff-answers 55 ok / 0 ✗, validate: 0 помилок, 235 попереджень.
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs`: 442 ok, 0 ✗ (разом із №30).
- 12 мутантів (таблиця вище), порівняння validate.json до/після, симуляція `buildPlan`/`level` для dge4, `make-tasks --write-pool --subject eng --dry-run`.

## Не перевірено

- `python3 tools/playtest.py` і `python3 tools/test-answer-ui.py --suite regression`: Python-playwright у контейнері немає, тож їх проганяє лише CI (job browser).
- Справжнього `content/eng/diag-g4.js` і пулів eng ще немає. dge4 перевірено лише на фікстурах (test-validate і моя симуляція плану), браузерного проходу тесту рівня dge4 з baseline не було.
- Межі 7 / 1 / 4 — вибір автора (дизайн чисел не задає). Педагогічно я їх не оцінював, перевірив лише, що код і документація збігаються.
