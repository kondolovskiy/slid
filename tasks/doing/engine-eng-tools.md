---
claimed_from: todo
claimed_at: 2026-11-19T12:40:46.322Z
id: engine-eng-tools
type: engine
subject: eng
depends_on: [engine-eng-validate]
status: todo
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
