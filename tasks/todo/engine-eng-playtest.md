---
id: engine-eng-playtest
type: engine
subject: eng
depends_on: [engine-eng-build, engine-eng-match, engine-eng-dialog, engine-eng-listen]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Браузерні тести для eng: playtest.py, test-ui, регресія test-answer-ui

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити
1. playtest.py проходить `build`, `match`, `dialog`, `listen` (без звуку — транскрипт), `stress` у складі.
2. test-ui.mjs: сценарій eng — кирилиця-двійник у `word`, скорочення, `lang="en"` на елементах, TTS-заглушка.
3. test-answer-ui.py `--suite regression` — кейси eng; ukr не змінено.
4. playtest-pick.mjs — покриття нових типів (з engine-eng-tools).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
