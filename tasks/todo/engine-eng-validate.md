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
# validate.mjs і content-checks.mjs для англійської

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §2, §6.3, §9)
1. Українські перевірки (заборонені фрази, D-016-тексти, рід у звертанні, позиційні посилання, милозвучність) не застосовувати до фрагментів `lang="en"` (хелпер з engine-eng-lang-attr).
2. eng: латинське слово (≥ 2 літери) в українській прозі поза позначкою мови — попередження.
3. `ASK_RE`/`ASK_WIDE` (content-checks.mjs:48, :50): англійські наказові (choose, select, complete, match, find, fill, tick, put, write) — щоб «Choose the correct form.» не давало «choice без питання».
4. `soon` з тим самим id, що й справжній предмет, — помилка (validate :487; зараз дві картки на головній).
5. Довжина англійського тексту на екрані — за профілем `eng` (`enWordsPerScreen`, ліміт тексту читання, style/eng.md).
6. Літери варіантів тесту рівня (`OPT_LETTERS`, validate :44, :345; app.js:981) — лише якщо людина обере A/B/C (§11 п. 12).
7. Тести: tools/test-content-checks.mjs, фікстура eng.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
