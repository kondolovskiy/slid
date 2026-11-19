---
id: engine-eng-diag-pool
type: engine
subject: eng
depends_on: [engine-eng-build, engine-eng-match]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня й пули для eng: нові типи, перший клас предмета без попереднього

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §7)
1. `DIAG_TYPES`, `POOL_TYPES` (learn.js:15, :2009–2011) + `build`, `match`, `listen` (лише зі звуком), ліміти `DIAG_LANG_LIMITS`/`POOL_LANG_LIMITS`.
2. Перший клас предмета (dge5): validate зараз вимагає уроків попередніх класів для `pre`-теми. Дозволити `pre` з `lessons: []` + `baseline` (напр. «A1») лише для найнижчого класу предмета; вердикт `gap` → перший урок розділу повторення (e5s1) через `see`. Узгодити з CONTENT_SCHEMA §9 і PERSONALIZATION.md.
3. make-tasks `--write-pool --subject eng` (з engine-eng-tools) — дим-тест.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
