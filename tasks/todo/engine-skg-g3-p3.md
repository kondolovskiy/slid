---
id: engine-skg-g3-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-02
depends_on: [engine-skg-g3]
---
# Skill Graph G3: залишки рев'ю (P3, reports/review/engine-skg-g3.md) — до G4
1. Розбір графа потрапляє в `dt` першої відповіді (evidence.js:206–211; ≈10 мс, 47 мс на повільному CPU) — прогріти кеш `graphBind` при відкритті предмета/в idle або брати час до обчислення даних події; тест.
2. Дублікати id: еквівалентність G1 і тест-еталон test-learn.mjs:1958 — виправити формулювання «дослівна копія», задокументувати (такий зміст червоний у validate).
3. Тести на 6 вцілілих мутантів (тіньовий трекер у реплеї без tick/onReset/onDiagEnd/flush; лінія завдання тесту за темою; nodes vs live; gone для u теми; вилучення уроків пари з нових pres; rev із diag_start).
4. graph-lib — брати `c.learn` з loadContent, а не другу копію learn.js у vm.
Для G4 — назвати нову семантику preWeak (baseline-вузол може дати preWeak) і рішення людини про `part` у P.
Незалежне рев'ю D-026.

## Нотатки виконавця
