---
claimed_from: todo
claimed_at: 2026-11-19T11:58:42.496Z
id: engine-eng-stats
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: review
claimed_by: eng-stats
created: 2026-11-19
source: design-eng
---
# stats.mjs і профіль `eng`: метрики англійського тексту

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що є
stats.mjs:32 бере `profiles[c.id] || _default`. lib.mjs:96 `VOW` рахує склади за голосними (beautiful = 5 → «довге»); lib.mjs:100–109 `sentences()` ріже на «Mr.», «e.g.».

## Що зробити (docs/design/english.md §6.1)
1. Для eng: склади англійської — групи голосних (з німим `-e`), англійські скорочення в `sentences()`; `longWordShare` — за англійськими складами.
2. Метрика `maxText` (найдовший текст для читання на екрані) — для лімітів style/eng.md.
3. Профіль `eng` у style/profiles.json (діапазони 4, 5-6, 7-9, 10-11) — значення дає curate-eng-style (зміна профілів — через decisions.md); тут лише підтримка нових ключів.
4. Тести (фікстура з англійським текстом).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Нотатки (eng-stats, 2026-11-19)
**Коміт коду:** 857a0d7.

**Що змінено**
- `tools/lib.mjs` (лише метрики):
  - `syllables(w, lang)` — для `lang "en"` англійські склади: групи голосних латиницею + поправки (німе -e, крім -le; -ed без t/d; -es без шиплячого/-les; u після q/g; зяяння ia/io/iu/ua/uo, крім -tion/-sion/-cial). Без `lang` і для слова без латиниці — як раніше (голосні поодинці).
  - `sentences(t, lang)` — для `"en"` англійські скорочення: Mr./Mrs./Ms./Dr./Prof./St./Mt./Jr./Sr., e.g., i.e., vs., cf., viz. — завжди; No. перед числом; etc., a.m., p.m. і скорочення з крапками (U.S.) — якщо далі не велика літера; ланцюжок із 2+ ініціалів (J. K. Rowling). Українські правила без `lang` не змінено (спільний `splitSentences`).
  - `lessonMetrics(l, { lang })` — склади, речення й поріг довгого слова за мовою (en — від 3 складів, як «складне слово» Ганнінга; українська — від 5, як було). Нова метрика `maxText` — найдовший окремий текст екрана без заголовка: `body` або текст мовної вправи (`SLID_LANG.readText`: gaps, pick, stress, split).
  - `METRIC_KEYS`, `metricKeys(subj)` — `maxText` у ключах (z-оцінки, стовпчик звіту) лише для предмета з `targetLang` (`subjectLang`), не за id.
  - `profileFor(profiles, subj, grade)` — профіль діапазону предмета (інакше `_default`), поверх нього ключі точного класу (`"5"`, `"10"`…): ліміти §6.1 різні в 5 і 6, 10 і 11 кл. Спільне для stats і validate.
  - `subjectStats(c, profiles, origin)` — тіло циклу stats.mjs винесено без змін логіки (щоб тестувати на фікстурі).
- `tools/stats.mjs` — `subjectStats`; стовпчик «макс. текст» лише для предмета з мовою змісту (українські звіти побайтно ті самі).
- `tools/validate.mjs` — **мінімально, 2 рядки** (імпорт `profileFor`; рядок профілю складності: `lessonMetrics(l, { lang: subjectLang(c) })` і `profileFor`). Інших змін validate (engine-eng-lang-core) у коміті немає: індекс зібрано з HEAD + ці 2 рядки.
- `tools/test-metrics.mjs` (+87 перевірок, разом 133; уже в package.json і pages.yml), фікстура `tools/fixtures/eng-lesson.mjs`.
- `docs/WORKFLOW.md` §4 (метрики) — абзац про мову змісту, `maxText` і ключі точного класу.
- Профіль `eng` у style/profiles.json **не задано** (curate-eng-style): поки eng бере `_default` (українське калібрування), а validate не перевіряє `maxText` (його немає в `_default`).

**Перевірки**
- `node tools/test-metrics.mjs` — 133 перевірки пройдено; мутанти (у копії дерева в scratchpad, 23): 19 убито одразу; вижили e.g./i.e. (їх прикривало правило скорочень з крапками) — додано тести перед великою літерою, тепер убиті; дві зайві гілки enSyllables (`^y`, «≤ 3 літери → 1») — прибрано, тест «ago» = 2.
- Регресія українських предметів: `node tools/stats.mjs` до й після — reports/style-{hist,math,ukr,world}.md ідентичні; `stats --json` — рядки й середні ідентичні (додано лише поле `maxText` у рядках і `keys`); `node tools/validate.mjs` — 0 помилок, 230 попереджень, reports/validate.json без змін.
- `npm run check` у копії HEAD + лише мої файли (git archive у scratchpad) — усі node-тести, validate (0 помилок), graph-report, stats, fig-audit зелені; test-diff-answers у копії без історії git дає 9 ✗ (потрібна історія), у спільному дереві — 55 ok, 0 ✗. У спільному дереві check падає в test-validate.mjs (5 перевірок `contractions …`) — незакомічена робота engine-eng-lang-core (app/lang.js, tools/validate.mjs, tools/test-validate.mjs), не ця задача; решта кроків check зелені.

**Обмеження**
- Склади — евристика для метрик, не словник: idea, quiet, something, hundred, recipe, geography — ±1 склад.
- Один ініціал («J. Smith») ділить речення; «U.K.» перед словом з великої літери ділить речення (британська норма — UK, Mr без крапок). words() рахує «a.m.», «e.g.» як два слова (як і «н. е.» в українській).
- `maxText` не рахує майбутні тексти нових типів (`dialog.lines`, `build`) — додати разом із типом (engine-eng-dialog, -build).
- CONTENT_SCHEMA не змінено: метрики описано в docs/WORKFLOW.md; CONTENT_SCHEMA у роботі engine-eng-lang-core.

**Рецензенту**
- Чи поріг довгого англійського слова «≥ 3 склади» прийнятний як інструментальний типовий (калібрування профілю — curate-eng-style).
- `profileFor`: ключ класу накладається на `_default`, якщо в предмета нема діапазону (тест є) — чи це очікувано.
- validate: індекс коміту містить лише 2 мої рядки, хоча в робочому дереві validate.mjs є й чужі зміни.
