---
id: engine-lab-p5-1118
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-19
source: reports/review/engine-lab-p4-1118.md, verifier-solid-1118
priority: P3
---
# Лабораторія: відкрите з рев'ю engine-lab-p4-1118

Скіл `engine-change`; незалежне рев'ю D-026.

1. **P2-1 align** (app/app.js ≈ 1249): шрифт W/32 при базовій лінії y=62 налазить на смуги для розмаху > ≈ 96 років. Живий зміст не зачеплено (g5-s1, 180 → ок) — виправити до першої шкали > 90 років.
2. **P3-1** `solidNMin` (app/lab.js ≈ 1064) перебирає лише min/start/max — не ловить немонотонне n.
3. **P3-2** тап-перенос точки (app/lab.js ≈ 953) не перевіряє `locked` (як і drag).
4. **P3-3** test-ui: немає мультитачу й `pointercancel`/touchCancel.
5. **Зміст (на розсуд, після верифікатора):** g11m6l4 — `marks` на двох протилежних вершинах куба (verifier-solid-1118); g10m2l3 — повна побудова перерізу методом слідів через solid `cut` (verifier-followups-math-1118, agent-engine-lab; CONTENT_SCHEMA §8).
