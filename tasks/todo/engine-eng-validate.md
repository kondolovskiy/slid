---
id: engine-eng-validate
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# validate.mjs і content-checks.mjs для англійської: англійські правила замість українських, A/B/C

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §2, §6.3, §11.1)
1. Для eng (targetLang) **вимкнути** українські правила: заборонені фрази (style/banned-phrases.txt), рід у звертанні, українські наказові `ASK_RE`, позиційні посилання українською, милозвучність (`EUPHONY`), `OPT_NUM_RE` («другий варіант»).
2. **Увімкнути** англійські відповідники: `ASK_RE` (choose, select, complete, match, find, fill, tick, put, write, which, what…), позиційні посилання («the first option», «the last line»), «option N»; список англійських кальок (style/eng-banned.txt — створює curate-eng-style) як попередження.
3. Кирилиця в змісті eng — попередження (усі тексти англійською, рішення людини); дозволено лише в `credits`.
4. **Літери варіантів A, B, C** для eng (`OPT_LETTERS`, validate :44, :345; app.js:981) — з предмета, не глобально.
5. `soon` з тим самим id, що й справжній предмет, — помилка (validate :487).
6. Довжина англійського тексту на екрані — за профілем `eng` (style/eng.md).
7. Тести: tools/test-content-checks.mjs, фікстура eng.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
