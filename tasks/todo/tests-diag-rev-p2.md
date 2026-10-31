---
id: tests-diag-rev-p2
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-31
depends_on: [refine-math-diag-g6-coverage]
---
# Тести редакцій тесту рівня: прогалини з рев'ю refine-math-diag-g6-coverage

Джерело: reports/review/refine-math-diag-g6-coverage.md (вердикт «прийнято», ці пункти не блокували).

- **P2-1.** test-answer-ui не ловить регресію, коли startDiag перестає записувати `diagRunRev` (повернення `res:S.diagRun[d.id]||…`): дитина в ред. 2 відповідає на rev-проби, перезавантажує — відповіді зникають. Потрібен браузерний сценарій: почати тест ред. 2 без підкладеного diagRunRev, відповісти на rev-пробу, перезавантажити, перевірити, що вердикт лишився.
- **P3-1.** test-learn: збережена ред. 2 при чинній ред. 3 (мутація `saved >= 1 ? saved` → `? rev` проходить).
- **P3-2.** Єдиний розбір `rev` у diagRev і resumeDiag.
- **P3-3.** Ключі вердиктів за межами `items` (мутація без `!it ||`).

Готово: мутації з рев'ю ловляться тестами; незалежне рев'ю (D-026) «прийнято».

## Нотатки виконавця
