---
claimed_from: todo
claimed_at: 2026-11-03T09:16:22.721Z
id: tools-world-img
type: tools
status: review
claimed_by: orchestrator
created: 2026-11-03
depends_on: []
---
# validate: D-027 (обов'язкове img) і для предмета `world` (D-044 п. 4)

- `tools/validate.mjs`: `IMG_REQUIRED = { hist: "error", world: "error" }`.
- `tools/test-validate.mjs`: регресія — урок `world` без img → помилка; з img → без помилки.
- `tools/make-tasks.mjs`: `exemplar.world` — `content/world/g7-w7s1.js (еталон після верифікації; style/world.md)`.
- Незалежне рев'ю D-026 → `reports/review/tools-world-img.md`.

## Нотатки виконавця
- 2026-11-03 orchestrator: `IMG_REQUIRED.world = "error"`; test-validate — 3 нові випадки world (без img → помилка, з img → ні, boss без img → помилка), копіюється content/subjects/world.js, фікстури world прибираються після циклу (інакше повний прогін бачив залишок). make-tasks: exemplar.world. `node tools/test-validate.mjs` — 1022/1022, `node tools/test-make-tasks.mjs` — 22/22.
