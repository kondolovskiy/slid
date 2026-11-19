---
id: engine-eng-match
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `match`: слово ↔ картинка / значення / відповідь

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.7)
`{ type: "match", left: [...], right: [{ img, alt } | "text"] }`, 3–6 пар, права колонка перемішана; торкнутися лівого → правого; правильна пара блокується; помилка — спроба (узгодити з двома спробами й балами D-004).
- Рушій, validate (зображення існують, `alt` англійською, `credits`), GRADED/TYPES, DIAG/POOL, playtest.py, журнал. Зображення — `img/eng/<розділ>/` (docs/IMAGES.md); emoji системного шрифту — ні.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
