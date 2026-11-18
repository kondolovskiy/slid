---
claimed_from: todo
claimed_at: 2026-11-18T12:50:33.644Z
id: engine-lab-p4-1118
type: engine
subject: math
status: todo
claimed_by: agent-engine-lab4
created: 2026-11-18
source: engine-lab-p3-1117
priority: P3
---
# Відкладене з engine-lab-p3-1117 (лабораторії й 3D)

Скіл `engine-change` (п. 5 — ще `content-author`); незалежне рев'ю D-026. Контекст: tasks/done/engine-lab-p3-1117.md (нотатки), reports/review/engine-lab-p3-1117.md, reports/verify/engine-lab-p3-1117-content.md. Не блокує.

1. **Повзунок-дубль для numline з `hide`** (g4m4 t; плейтест g4/g7/g9 — перетягування мишею): на моделях, де точку важко тягнути, — повзунок під моделлю, синхронний з ручкою. Спершу рішення про зміст: які уроки, чи не видає відповідь (D-019).
2. **Випадковий тап по полю зсуває єдину точку** (P3 рев'ю): тап-перенос змінює відповідь без наміру. Варіанти: перенос лише після тапу без руху ≥ N px і поза ручкою; або підтвердження довгим тапом. Тест test-ui (page.mouse + CDP touch — справжній touch досі не перевірено).
3. **`{x|eq}` для NaN/∞** друкує «?» — домовитися про формат («не існує» / «—»), узгодити з `{…|if:…}`; тест у test-lab.
4. **validate solid `segs`/`cut`:** коли `n` — вираз, береться n = 4; обчислювати межу за діапазоном параметра або попереджати.
5. **Перевести зміст на solid `cut`/`segs`:** g10m2l3 (переріз піраміди — зараз статичне `plane` + екрани «Побудуй слід»), g11m6l4 (діагональ коробки). Після — content-verify.
6. **П. 8 з engine-lab-p3-1117:** осі solid поверх ребер (P3-2 engine-render-legibility-1117), font-size align (P3-4) — лише зі знімками до/після (playwright shot у test-ui або скрипт у scratchpad).

## Критерії готовності
- Кожен пункт — тест, що падає на старому коді; `npm run check` і test-ui зелені.
- reports/review/engine-lab-p4-1118.md — «прийнято»; змінений зміст — reports/verify/.
