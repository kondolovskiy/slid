---
id: tools-hist-image-rule
type: engine
subject: hist
status: review
claimed_by: orchestrator
created: 2026-10-30
depends_on: []
---
# validate: попередження D-027 про урок історії без зображення

Рішення Віктора 2026-10-30 (D-027): у кожному уроці історії — справжнє зображення `img`; svg/fig не рахуються; доробити всі уроки; спершу попередження, потім помилка.

## Нотатки виконавця
- tools/validate.mjs: `IMG_REQUIRED = { hist: "warn" }`, перевірка `!l.screens.some(s => s.img)` для кожного уроку (зокрема boss). 120 нових попереджень = 120 уроків без img (незалежний підрахунок через loadContent). Помилок 0.
- Документи: D-027 (decisions), INDEX, AGENTS.md §3.9, docs/IMAGES.md, style/hist.md. Задачі: 32 × images-hist-<розділ>, tools-hist-image-error (перемикання на error після доробки).
- Передано незалежному рецензенту.
