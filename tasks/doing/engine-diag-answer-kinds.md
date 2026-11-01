---
claimed_from: todo
claimed_at: 2026-11-01T13:38:38.744Z
id: engine-diag-answer-kinds
type: engine
subject: math
status: todo
claimed_by: agent-engine-diag-answer-kinds
created: 2026-11-01
depends_on: []
---
# Тип `answer` з answerKind у тесті рівня (SLID.diag)

Знайдено в refine-math-pools-new-kinds: DIAG_TYPES (app/learn.js:11) не має `answer`, тож проби на час/величини (dg4 №18 «9:10 + 45 хв», inbox 30.10) не можна записати як відповідь `time`/`quantity`. Додати `answer` з answerKind (time, quantity, decimals, form) у діагностику: вердикт без фідбеку, сумісність збережених тестів (rev, див. refine-math-diag-g6-coverage), validate, test-learn, test-answer-ui. Перед заміною dg4 №18 — рішення людини, чи проба не стає складнішою (handoff, відкрите питання 5).

Також (інструмент): `tools/diff-answers.mjs` режим «старий і новий зміст на одному learn.js» — зараз зміни змісту він не бачить (автор refine-math-pools-new-kinds порівнював окремим скриптом).

Незалежне рев'ю (D-026).

## Нотатки виконавця
