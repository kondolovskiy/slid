---
claimed_from: todo
claimed_at: 2026-10-22T11:24:30.231Z
id: revise-math-pool-m4s1-divrem
type: write-pool
subject: math
grade: 4
status: todo
claimed_by: writer-pm4s1-divrem
created: 2026-10-22
depends_on: [write-math-pool-m4s1, engine-math-pool-divrem]
---
# Додати в pm4s1 вправи «знайди неповну частку й остачу» (divrem)

## Що зробити

Пул content/math/pool-g4-m4s1.js (verified, 8 вправ) питає окремо частку або остачу, бо формату для двох величин не було (reports/verify/write-math-pool-m4s1.md, прогалина 1). Тепер є `answerKind: "divrem"`, `answer: [частка, остача]` (CONTENT_SCHEMA §10, tasks/done/engine-math-pool-divrem.md).

- Додати реальні вправи «знайди неповну частку й остачу» з джерел матриці (Логачевська 4 ч.1 №3, №11 — с. 17–18; Гісь ч.1 с. 61–83), звірені на відрендереній сторінці. Межа матриці — 6–8 вправ на урок: за потреби замінити окремі вправи «лише частка/лише остача» на divrem, зберігши рівні (≈3/3/2) і сталі id наявних вправ (нові — нові id; видалені id не перевикористовувати).
- Нічого не вигадувати; кожну відповідь розв'язати двічі. Остача < дільника.
- Після правок статус пулу — draft до повторної верифікації.

## Готово, коли

- [ ] validate --pool pm4s1 і personalization-qa --pool pm4s1 без помилок; незалежна верифікація.

## Нотатки виконавця
