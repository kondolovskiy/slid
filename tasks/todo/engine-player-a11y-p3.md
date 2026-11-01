---
id: engine-player-a11y-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-01
depends_on: [engine-player-a11y-followup]
---
# P3 з рев'ю engine-player-a11y-followup (reports/review/engine-player-a11y-followup.md)

1. «Мертві» ручки: точка `drag: true` з координатою-виразом (`x: "2+t"`) не рухається ні мишею, ні клавішами, але тепер фокусована як slider (g8m2l1#2, g8m2l2#1, g8m4l1#5, #6). `handleTargets` — пропускати ручки без kx/ky/digit/tap; validate — попередження на `drag` з виразом; зміст — виправити ці 4 екрани (окремо, з верифікатором).
2. `aria-valuetext` числової прямої бере підпис точки («A», «?») замість значення (g4m1l3#2, g4m1l4#4, g4m4l3#5).
3. Тести: клавіатура й tabindex для rotate; ручка без параметрів; PageUp/PageDown/Home/End.

Ручна перевірка людиною (не автоматизується): Android Chrome / iOS Safari (клавіатура, «Готово»), зчитувачі NVDA/JAWS/VoiceOver/TalkBack, Safari macOS Tab на tabindex.

Незалежне рев'ю (D-026).

## Нотатки виконавця
