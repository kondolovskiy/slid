---
claimed_from: todo
claimed_at: 2026-11-19T11:58:42.456Z
id: engine-eng-lang-core
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: done
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

## Нотатки виконавця (eng-lang-core, 2026-11-19)
**Коміт:** 51e0092 (app/lang.js, app/app.js, tools/test-lang.mjs, tools/test-ui.mjs, tools/test-validate.mjs, tools/validate.mjs, docs/CONTENT_SCHEMA.md, docs/ARCHITECTURE.md). Build не запускався окремо й не комітився (index.html, sw.js, manifest — оркестратору).

**Що зроблено**
- `app/lang.js`: `check(s, st, lang)`, `wordInput(s, v, lang)`, новий `wordVerdict(s, v, lang)` → `{ ok, note?, hint?, kb? }`. `lang === "en"`: кінцевий `.!?` (якщо ключ без нього); дзеркальний LOOK (кирилиця-двійник → латиниця, коли всі ключі латинські), інша кирилиця — `kb` «Перемкни клавіатуру на англійську.»; `contractions: true` (n't, 're, 've, 'll, 'm, 'd → would|had, 's → is|has|присвійне; can't, won't, shan't, let's); явний список BrE→AmE `SPELL` (-our, -re, -ise/-ize і -isation, -yse, -ll-, grey, programme, pyjamas, tyre, catalogue, dialogue, defence, licence…) — `ok` з `note` «In British English: colour.» / для -ize «In British English we usually write realise.» (TQ-121); час «15.30»=«15:30», «3.30 pm»=«3:30 pm»=«3.30 p.m.»=«3.30pm» (TQ-120); відстань Дамерау 1 від ключа ≥ 3 з літерою — `hint` «Almost: check the spelling.». Без lang / "" — гілка без змін.
- `pick`: токен з цифрами й літерами — одна кнопка; токен без літери — текст; апостроф-лапки на початку — у текст, на кінці — лише в парі з початковими (`'hello'`, `‘hello’`), `the boys'` лишається.
- `stress`: розмітка складами `"+pho|to|graph"` (є `|`) — `letters` = склади, `correct` = номер складу, `syl: true`; латинське слово без `|` — помилка з підказкою розмітки; українська — без змін. `readText` прибирає `|`.
- `app/app.js`: `TL()` = `SLID.subjectLang(C)` → у `gradeNow`, `answerSig`, `langMarks`; після першої помилки `word` — `kb` (хром uk) або `hint` (`inL`, en); при `ok` — `note` (`span.wnote` з `inL`, en) перед fbText; інструкція stress складами — «Торкнись наголошеного складу.».
- `tools/validate.mjs`: `contractions` у предметі без targetLang — помилка; `issues`: `contractions` не boolean — помилка.

**Перевірки**
- `node tools/test-lang.mjs` — 308, усі пройшли (було 239; спершу червоно: `wordVerdict is not a function`).
- `node tools/test-validate.mjs` — 1741, усі пройшли (5 нових випадків: contractions з/без targetLang, не boolean, stress складами, англійське слово без складів).
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 359 ok, 0 ✗ (новий сценарій №27). Мутант `TL = () => ""` — №27 падає (TimeoutError на неактивній кнопці після «becuase» → тест червоний).
- `npm run check` — код 0; validate 0 помилок.
- Знімок розбору pick/stress/word усього живого змісту до/після (скрипт у scratchpad): відмінність лише у 2 екранах pick ukr — «6-Б», «11-Б» тепер одна кнопка (раніше текст «6-» + кнопка «Б»); номери кнопок і правильні — ті самі; stress і word — без змін.
- test-answer-ui — лише в CI (Python playwright немає).

**Обмеження / для рецензента**
- 24- і 12-годинний записи між собою не зводяться («15.30» ≠ «3.30 pm»): вправа може вчити саме перехід; автор кладе обидва в `answer`. Задача перелічує їх як рівноцінні — тлумачення в CONTENT_SCHEMA §4.1, варто підтвердити.
- Ключ із кінцевим знаком («I'm fine.») вимагає знак (за §5.4 п. 3); «Hello!» vs «hello!!» — «Almost».
- `practise/practice` свідомо не в списку (у BrE різні частини мови). Пари діють лише від британського ключа.
- `'s` розгортається в is|has|присвійне для будь-якого слова; `'d` → would|had. Варіантів ≤ 64.
- «кіт» на ключ «cat» — це «kit» (лише двійники) → звичайне `bad` без повідомлення про клавіатуру.
- Зміна `pick` для «6-Б»/«11-Б» у ukr — свідома (цифри + літери — один токен), але це зміна поведінки українського змісту.
- CSS для `span.wnote` не додавав (index.html — оркестратору); примітка — звичайний текст у #fbText.
