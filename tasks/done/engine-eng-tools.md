---
claimed_from: todo
claimed_at: 2026-11-19T12:40:46.322Z
id: engine-eng-tools
type: engine
subject: eng
depends_on: [engine-eng-validate]
status: done
claimed_by: eng-tools
created: 2026-11-19
source: design-eng
---
# make-tasks, fig-audit, lib.mjs, playtest-pick: предмет `eng`

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (аудит 2026-11-19)
1. make-tasks.mjs: `LANG_POOL.eng` (facts/eng.md «Джерела», style/eng.md), `exemplar.eng`; дедуплікація **за полем `section:`** frontmatter (задачі eng названо `write-eng-g<клас>-<розділ>`, а make-tasks шукає `write-eng-<розділ>.md` — без цього він їх задублює); пули — `write-eng-pool-g<клас>-<розділ>`. Шаблон задачі для eng — «усе англійською».
2. fig-audit.mjs:26 `LANG_SUBJECTS` + eng.
3. lib.mjs:51 `NO_POOL_SECTION` — для eng поле розділу `noPool: true` замість назви.
4. playtest-pick.mjs — покриття нових типів eng (build, match, dialog).
5. tools/test-make-tasks.mjs — фікстура eng.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Нотатки виконавця (eng-tools, 2026-11-19)

**Коміт:** c7dac45 (код, тести, фікстура, CONTENT_SCHEMA). TDD: тести додано першими й бачено червоними (make-tasks 30 ПОМИЛОК, figCues en 12, noPool TypeError), потім реалізація.

**Що змінено**
- `tools/make-tasks.mjs`: frontmatter задач читається повністю (id, type, subject, section); дублікат — за іменем файлу (новий і старий формат), id і `type + subject + section` (`hasTaskFor`); задача пулу не заступає задачу розділу, задача іншого предмета — теж. Предмет з `subjectLang(c)` — `write-<предмет>-g<клас>-<розділ>` / `write-<предмет>-pool-g<клас>-<розділ>`; `isEnglishSubject(c)` — шаблони `engSectionTask` / `engPoolTask` («усе англійською», британська норма, без звуку, тексти власні, style/eng.md, glossary/facts/pitfalls-content «Англійська», D-019, рішення людини §11.1; пул залежить від `engine-eng-diag-pool`, доки вона не в done). `LANG_POOL.eng`, `exemplar.eng`. Решта предметів — як було.
- `tools/lib.mjs`: `noPool(sec)` = `sec.noPool === true` або «Пишемо самі…» (`NO_POOL_SECTION` лишився); `figCues(s, prev, lang)` — для `lang "en"` англійські `FIG_REF_EN` / `FIG_GRAPH_EN` / `FIG_MAKE_EN`, geo вимкнено; без lang — як було.
- `tools/validate.mjs` (поза списком файлів задачі, але пункт із рев'ю engine-eng-validate «figRef — українські сигнали»): `figRef(…, lang)`, три виклики передають `subjectLang(c)` — урок, тест рівня, пул.
- `tools/fig-audit.mjs`: `figCues(…, subjectLang(c))`; фільтр «схем» — для `LANG_SUBJECTS` або предмета з мовою змісту.
- `tools/personalization-qa.mjs`: `noPool` замість `NO_POOL_SECTION` (повідомлення називає `noPool: true` чи «Пишемо самі»).
- `tools/playtest-pick.mjs`: `features(id, sec, lang)` — оцінюваний тип ще й `type:<t>@en` (англійська гілка lang.js), `cover` бере `subjectLang(c)`; build/match/dialog — звичайні `type:*`.
- Фікстура `tools/fixtures/make-tasks/content-eng/` (eng з targetLang: план, розділи з уроками, noPool у файлі й у plan.js).
- docs/CONTENT_SCHEMA.md §2 (`noPool`), §10 «Пули мовних предметів» (noPool, eng).

**Перевірки**
- `npm run check` — rc 0 (усі node-тести: test-make-tasks 101, test-validate 1880+, test-personalization-qa 160, test-playtest-pick 27; validate, graph-report, stats, fig-audit).
- Живе дерево (копія tasks/ у scratchpad, `--tasks`): `make-tasks --subject eng --dry-run` → 0; `--write-pool --subject eng --dry-run` → 0 (уроків eng ще немає); `make-tasks --dry-run` (усі) → 0; `--write-pool --subject ukr --dry-run` → 0, як і раніше; `--write-pool --dry-run` (math) → 0. Стара версія (HEAD до коміту) на тій самій черзі дала б 18 дублікатів `write-eng-e4s1.md…`.
- `make-tasks --subject eng --grade 4 --tasks <порожня>` → 8 задач `write-eng-g4-e4s*.md` (шаблон переглянуто).
- app/ не змінено — test-ui не потрібен.

**Обмеження й пропозиції**
- AGENTS.md §3 не чіпав (skills-eng): рядок make-tasks → `--write-pool [--subject ukr|eng]`; можна дописати «eng: write-eng-g<клас>-<розділ>».
- validate не перевіряє тип `noPool` (не boolean — поле ігнорується, noPool лише `=== true`) — за потреби правило validate.
- Англійські сигнали — евристика: «Look at the sentences / the end of the word» не посилання; дієслова ref — look at, see, in, on, under, use, study, read + the/this/these/that/those + ≤ 1 слово + picture/photo/image/illustration/drawing/map/diagram/chart/graph/poster/cartoon; також «the picture below», «picture 2». «Read the bar chart» — ref.
- Чи потрібен `noPool` якомусь розділу eng (письмо) — рішення куратора плану.
