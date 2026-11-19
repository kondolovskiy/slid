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
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
