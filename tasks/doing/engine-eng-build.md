---
claimed_from: todo
claimed_at: 2026-11-19T13:27:09.630Z
id: engine-eng-build
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: todo
claimed_by: eng-build
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `build`: речення з плиток-слів

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.5)
`{ type: "build", tiles: [...], answer: ["…", "…"], extra: [...] }` — дитина торкає плитки в рядок; кілька правильних порядків; плитки перемішані (`rowOrder`); до 2 плиток-пасток; перевірка — нормалізацією engine-eng-lang-core.
- Рушій (app.js), перевірка, validate (кожен answer = плитки; ≤ 9 плиток), lib.mjs GRADED/TYPES, learn.js DIAG_TYPES/POOL_TYPES (узгодити з engine-eng-diag-pool), playtest.py, журнал (`raw` = зібране речення), доступність (aria-label, клавіатура), 360 px.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Із повторного рев'ю skills-eng (P3-6)
Скіли content-author:59 і content-verify:39 зараз відносять `build` до типів без нормалізації; після реалізації звір і виправ ці рядки (за D-026 — разом з рев'ю).
