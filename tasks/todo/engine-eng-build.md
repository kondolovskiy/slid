---
id: engine-eng-build
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `build`: речення з плиток-слів

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.5)
`{ type: "build", tiles: [...], answer: ["…", "…"], extra: [...] }` — дитина торкає плитки в рядок; кілька правильних порядків; плитки перемішані (`rowOrder`); до 2 плиток-пасток. Перевірка — через нормалізацію engine-eng-lang-core.
- Рушій (app.js), перевірка (lang.js або learn.js), validate (кожен answer = плитки; ≤ 9 плиток), `lib.mjs` GRADED/TYPES, `learn.js` DIAG_TYPES/POOL_TYPES (разом з engine-eng-diag-pool — узгодити), playtest.py, журнал (`raw` = зібране речення), доступність (кнопки з aria-label, клавіатура).
- 360 px: плитки переносяться, рядок відповіді не ховається під клавіатурою.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
