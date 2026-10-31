---
id: engine-render-tex-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-31
depends_on: [engine-math-render-tex-gaps]
---
# P3 з рев'ю engine-math-render-tex-gaps

Джерело: reports/review/engine-math-render-tex-gaps.md.
1. app/lab.js svgMath: зсув індексу без Unicode-відповідника в кінці формули (`$a_n$(2; 3)`) не скасовується — текст після `$` лишається опущеним на 3 px. Зараз 0 випадків у змісті.
2. Тест на `xmlEsc` (мутація «тотожна функція» не ловиться): підпис з `&`, `<`.
3. validate checkTex: непарний `$` в items, pairs, steps не перевіряє ніхто — розширити поля.
4. (з engine-lesson-title-aria) `spec.alt` у app/lab.js:636 — `$` читався б буквально; checkTex уже дає помилку для формули в lab.alt — підтвердити тестом.

Готово: тести на кожен пункт; незалежне рев'ю (D-026).

## Нотатки виконавця
