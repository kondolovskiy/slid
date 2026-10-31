---
write_group: personalization-shared
id: engine-player-focus-followup
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-31
depends_on: [engine-player-qa-fixes]
---
# Доробки фокусу й другої спроби плеєра (P3 рев'ю engine-player-qa-fixes)

Джерело: reports/review/engine-player-qa-fixes.md.
- **Фокус на ✕ після помилки** (app/app.js ~751 focusAction): на lab-екранах із SVG (g4m2l1#4, g4m2l2#6) фокус іде на #pClose — два Enter за 2,5 с виходять з уроку з утратою прогресу. Фокус на `.screen` з tabindex="-1". Пріоритетно.
- Фокус після помилки — на обраний варіант (aria-pressed), а не перший.
- Неактивна «Спробувати ще раз» без пояснення: дописати «Зміни відповідь…».
- answerSig порівнює рядок: «5,», «05» після «5» витрачають другу спробу — порівнювати розібране значення.
- «Продовжити» на головній узгодити й з кроками плану (stepsTodo), як обіцяє docs/PERSONALIZATION.md.
- Мобільна клавіатура: refocusAnswer (focus+select) може закривати підказку — перевірити/пом'якшити.
Регресії — у чинні тести. Незалежне рев'ю (D-026).

## Нотатки виконавця
