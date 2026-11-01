---
claimed_from: todo
claimed_at: 2026-11-01T12:32:49.549Z
id: fix-math-dead-drag-points
type: fix
subject: math
status: todo
claimed_by: writer-dead
created: 2026-11-01
depends_on: [engine-player-a11y-p3]
---
# «Мертві» точки з drag у 4 екранах 8 кл.

Знайдено новим попередженням validate (engine-player-a11y-p3): точка D має `drag`, але координата — вираз, тож її не можна рухати ні мишею, ні клавішами.
- content/math/g8-g8m2.js: g8m2l1 екран 3 (explore), g8m2l2 екран 2 (explore) — D `x: "2+t"`.
- content/math/g8-g8m4.js: g8m4l1 екран 6 (explore), екран 7 (lab, оцінюваний) — D `x: "1", y: "1+dx"`.
Прибрати `drag` у D (якщо рух задумано повзунком) або зробити координату параметром; перевірити, що оцінюване завдання g8m4l1#7 лишається розв'язним і чесним. Незалежний верифікатор; validate без цих попереджень.

## Нотатки виконавця
