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
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.7)
`{ type: "match", left: [...], right: [{ img, alt } | "текст"] }`, 3–6 пар, права колонка перемішана; торкнутися лівого → правого; правильна пара блокується; помилка рахується як спроба (узгодити з механікою двох спроб і балами D-004).
- Рушій, validate (зображення існують, `alt` обов'язковий, `credits` розділу), GRADED/TYPES, DIAG_TYPES/POOL_TYPES, playtest.py, журнал.
- Зображення — SVG/PNG у `img/eng/<розділ>/` (docs/IMAGES.md); emoji системного шрифту не використовувати.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
