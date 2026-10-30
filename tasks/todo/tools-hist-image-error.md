---
id: tools-hist-image-error
type: engine
subject: hist
status: todo
claimed_by:
created: 2026-10-30
depends_on: [images-hist-g10s1, images-hist-g10s2, images-hist-g10s3, images-hist-g10s4, images-hist-g10s5, images-hist-g11s1, images-hist-g11s2, images-hist-g11s3, images-hist-g11s4, images-hist-g11s5, images-hist-g6s1, images-hist-g6s3, images-hist-g6s4, images-hist-g7s1, images-hist-g7s2, images-hist-g7s3, images-hist-g7s4, images-hist-g7s5, images-hist-g8s1, images-hist-g8s2, images-hist-g8s3, images-hist-g8s4, images-hist-g8s5, images-hist-g9s1, images-hist-g9s2, images-hist-g9s3, images-hist-g9s4, images-hist-g9s5, images-hist-s1, images-hist-s2, images-hist-s3, images-hist-s4]
---
# Зробити D-027 блокувальним: урок історії без img — помилка validate

Коли всі задачі images-hist-* у done (усі уроки історії мають справжнє зображення й повторно verified): у `tools/validate.mjs` змінити `IMG_REQUIRED.hist` з `"warn"` на `"error"`, оновити docs/IMAGES.md, D-027 (рядок «Контроль»), pitfalls. `node tools/validate.mjs` — 0 помилок по всьому контенту; CI (.github/workflows/pages.yml) зелений. Інженерна задача — незалежне рев’ю (D-026).

## Нотатки виконавця
