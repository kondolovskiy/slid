---
claimed_from: todo
claimed_at: 2026-11-03T22:56:12.563Z
id: tests-answer-ui-dg6-rev3
type: engine
subject: math
status: todo
claimed_by: impl-tests-answer-ui-dg6-rev3
created: 2026-11-03
depends_on: [refine-math-dg6-pct-rev3]
---
# test-answer-ui.py --suite regression: dg6 тепер rev 3

Після refine-math-dg6-pct-rev3 (dg6 ред. 3) браузерна регресія падає: `tools/test-answer-ui.py` очікує ред. 2 dg6 (≈ рядки 99, 123 і, можливо, інші — legacy-запуск, diagRunRev, перелік revised-проб). Виправити тест так, щоб він не залежав від конкретного номера редакції (брати максимальний `rev` з items тесту) або явно перевіряв ред. 3, і щоб сценарії legacy ред. 1 / 2 далі ловили регресії `resumeDiag` / `diagRunRev` (мутанти). Оркестратор уже почав правку рядка 99 (незакомічено) — перевір і доведи до кінця. Незалежне рев'ю (D-026). Знайдено рецензентом tools-ister-p3 (reports/review/tools-ister-p3.md).

## Нотатки виконавця
