---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.142Z
id: design-g4-graph-boundary
type: design
subject: math
status: todo
claimed_by: designer-g4
created: 2026-11-05
depends_on: [tests-hyp-g3-verified-lines]
---
# Перед G4: порожні передумови (pres) у тіні G3 для уроків ліній prob і tri

Джерело: reports/review/tests-hyp-g3-verified-lines.md п. 4 (P3-2), нотатки задачі tests-hyp-g3-verified-lines. Після переведення ліній prob/tri у verified тіньовий трекер для g6m6l1, g6m6l3, g9m7l1, ms0bl3, g7m2l2, g7m4l1/l3/l6/l9 бере pres за ребрами графа pre w2 / part — і отримує порожній список (вузли-входи comb-enum, prob-events, count-rules, angle-adj-vert, tri-angle-sum без передумов; частина ребер w1 свідомо). За D-038 (3в) на G4 граф діє одразу → ці уроки втратять усіх кандидатів P/S12.
Рішення (дизайн + D-NNN): (а) коли `graphPre` порожній — лишати старі pres; або (б) куратор графа додає вузли межі (напр. ms0bl2 «кути, вимірювання») з ребрами w2. Плюс `diff-plan` для prob/tri і перегляд лінії вчителем (D-038 2б). Не блокує нічого до G4.

## Нотатки виконавця
