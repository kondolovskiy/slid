---
id: engine-eng-listen
type: engine
subject: eng
depends_on: [engine-eng-audio-tts]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Екран аудіювання `listen`: звук → питання → транскрипт

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.2 п. 7)
`{ type: "listen", say | audio, q: { kind: "choice" | "multi" | "gaps", … }, transcript }` — до першої відповіді тексту не видно; після — транскрипт і переклад-підтримка (за наявності). Обмеження: кількість прослуховувань (пропозиція — без обмеження, лічильник у журналі). Без звуку — режим «уважне читання» (engine-eng-audio-tts п. 2).
- Рушій, validate, GRADED/TYPES, DIAG (лише зі звуком), POOL, playtest.py (без звуку — транскрипт).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
