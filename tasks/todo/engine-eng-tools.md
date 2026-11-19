---
id: engine-eng-tools
type: engine
subject: eng
depends_on: [engine-eng-validate]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# make-tasks, fig-audit, lib.mjs, playtest-pick: предмет `eng`

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (аудит 2026-11-19)
1. make-tasks.mjs: `LANG_POOL.eng` (джерело — facts/eng.md «Джерела», style/eng.md), `exemplar.eng` (після еталона style/eng.md); дедуплікація **за полем `section:`** frontmatter, бо задачі eng названо `write-eng-g<клас>-<розділ>` (design-eng), а make-tasks шукає `write-eng-<розділ>.md`; пули — `write-eng-pool-g<клас>-<розділ>`.
2. fig-audit.mjs:26 `LANG_SUBJECTS` + eng.
3. lib.mjs:51 `NO_POOL_SECTION` — правило для eng (розділи письма, якщо будуть; за назвою не надійно — краще поле розділу `noPool: true`).
4. playtest-pick.mjs — покриття нових типів eng (build, match, dialog, listen), коли вони з'являться.
5. tools/test-make-tasks.mjs — фікстура eng.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
