---
id: engine-eng-dialog
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `dialog`: репліки з мовцями, пропуск чи вибір репліки

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.8)
`{ type: "dialog", lines: [{ who, text }], ask: { kind: "gaps" | "choice", … } }` — бульбашки з іменами; оцінюване місце — пропуск у репліці (розмітка gaps) або вибір наступної репліки. Без звуку (рішення людини).
- Рушій, validate (≤ 8 реплік, ≤ 3 мовці — пропозиція), GRADED/TYPES, DIAG/POOL (коротко), playtest.py, 360 px.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
