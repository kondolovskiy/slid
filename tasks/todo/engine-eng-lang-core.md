---
id: engine-eng-lang-core
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
blocked: human
---
> **Заблоковано рішенням людини:** docs/design/english.md §11 — рішення §11 п. 3 (BrE/AmE за замовчуванням). Не брати, доки рішення не записане в memory/long/decisions.md.

# app/lang.js для англійської: `word`, `pick`, `stress` у складі

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що є (аудит 2026-11-19)
- `VOWELS` лише українські (lang.js:11) → `stress` з латинською голосною — помилка розмітки.
- `normWord` (lang.js:143–149): регістр і апострофи нормалізує; кінцевий `.!?` — ні («Yes.» ≠ «yes»); `LOOK` переводить латиницю в кирилицю — для латинського ключа кирилична «с» у «сat» дає `bad` (і псує інші a/c/e/o).
- `pick` (lang.js:64 `WORD`): «'hello'» у прямих лапках — кнопка з лапками; «5th» — кнопка «th».

## Що зробити (docs/design/english.md §5.4, §5.6)
1. `word` при `targetLang: "en"` (або латинському ключі): кінцевий розділовий знак; дзеркальний `LOOK` (кирилиця → латиниця, коли всі ключі латинські) і повідомлення «Перемкни клавіатуру на англійську» для інших кириличних літер; `contractions: true` (таблиця скорочень у lang.js); `variant: "any"` — пари BrE/AmE за явним списком (без евристик); «майже» (відстань 1) — `bad` з підказкою, без зміни балів. Те саме у `wordInput` (ключ «та сама відповідь», app.js:974).
2. `pick`: апостроф-лапки на краях токена відрізати; цифри + літери — один токен.
3. `stress` у складі: `words: ["pho|+to|graph"]` — склади через `|`, `+` перед наголошеним складом; кнопки — склади. Українська розмітка без `|` — як раніше.
4. Тести в tools/test-lang.mjs: кожен пункт + незмінність ukr.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
