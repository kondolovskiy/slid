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
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.8)
`{ type: "dialog", lines: [{ who, text }], ask: { kind: "gaps" | "choice", … } }` — бульбашки з іменами; оцінюване місце — пропуск у репліці (розмітка gaps) або вибір наступної репліки; кнопка «Послухати» (коли буде engine-eng-audio-tts) — двома голосами, якщо є.
- Рушій, validate (≤ 8 реплік, ≤ 2 мовці на екрані — пропозиція), GRADED/TYPES, DIAG/POOL (лише якщо коротко), playtest.py, 360 px.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
