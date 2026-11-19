---
claimed_from: todo
claimed_at: 2026-11-19T11:58:42.456Z
id: engine-eng-lang-core
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: eng-lang-core
created: 2026-11-19
source: design-eng
---
# app/lang.js для англійської: `word`, `pick`, `stress` у складі

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що є (аудит 2026-11-19)
- `VOWELS` лише українські (lang.js:11) → `stress` з латинською голосною — помилка розмітки.
- `normWord` (lang.js:143–149): регістр і апострофи нормалізує; кінцевий `.!?` — ні («Yes.» ≠ «yes»); `LOOK` переводить латиницю в кирилицю — для латинського ключа кирилична «с» у «сat» дає `bad`.
- `pick` (lang.js:64 `WORD`): «'hello'» у прямих лапках — кнопка з лапками; «5th» — кнопка «th».

## Що зробити (docs/design/english.md §5.4, §5.6)
1. `word` при `targetLang: "en"`: кінцевий розділовий знак; дзеркальний `LOOK` (кирилиця → латиниця, коли всі ключі латинські) і повідомлення рушія «Перемкни клавіатуру на англійську» для інших кириличних літер; `contractions: true` (таблиця скорочень); **британська норма в ключі; американський правопис у відповіді — не помилка** (рішення людини 2026-11-19, docs/design/english.md §11.2 п. 1): явний список пар (colour/color, centre/center, -ise/-ize, travelled/traveled, grey/gray, programme/program …) дає `ok` з приміткою «In British English: colour»; для -ize (realize) примітка без слова «American» — це теж британська (оксфордська) форма, TQ-121; формат часу у відповіді — «15.30», «15:30», «3.30 pm», «3.30 p.m.» рівноцінні (glossary/eng.md, TQ-120); лексика (flat/apartment) — не нормалізується; «майже» (відстань 1) — `bad` з підказкою «Almost: check the spelling». Те саме у `wordInput` (app.js:974).
2. `pick`: апостроф-лапки на краях токена відрізати; цифри + літери — один токен.
3. `stress` у складі: `words: ["+pho|to|graph"]` — склади через `|`, `+` перед наголошеним складом; кнопки — склади; українська розмітка без змін.
4. Підказки рушія для eng (фідбек «майже», «British spelling») — англійською (це зміст), службове «Перемкни клавіатуру…» — українською (хром).
5. Тести tools/test-lang.mjs: кожен пункт + незмінність ukr.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
