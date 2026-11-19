---
id: engine-eng-playtest
type: engine
subject: eng
depends_on: [engine-eng-build, engine-eng-match, engine-eng-dialog]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Браузерні тести eng: playtest.py, test-ui, регресія test-answer-ui

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити
1. playtest.py проходить `build`, `match`, `dialog`, `stress` у складі.
2. test-ui.mjs: сценарій eng — кирилиця-двійник у `word`, скорочення, `lang="en"` на змісті й `lang="uk"` на хромі, A/B/C у тесті рівня.
3. test-answer-ui.py `--suite regression` — кейси eng; ukr не змінено.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
