---
id: engine-skg-g1
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-01
depends_on: [design-skill-graph-math]
---
# Skill Graph, етап G1: схема, валідатор, звіт графа (без зміни поведінки)

Дизайн: docs/design/skill-graph-math.md (редакція 4, рев'ю reports/review/design-skill-graph-math.md — раунд 4 «прийнято»). Етап G1 з §7.1: `SLID.graph` у registry; CONTENT_SCHEMA §11 (`graph`, `lines`, `u`); validate — помилки й дрейф за таблицею §3; `tools/graph-report.mjs` (V8 поза лініями, V9, списки за замовчуванням, `--since` за хешем, `--line --strict`, `--uses`); усі фікстури test-validate з §7.1. Граф ще порожній (лінії з'являться в G2) — validate на чинному змісті: 0 нових помилок і попереджень. Для дитини нічого не змінюється.

## P3 з рев'ю дизайну (раунд 4) — врахувати в G1/G3
- `validate --section` показує помилки `graph.js` лише для об'єктів цього розділу (AGENTS.md §3 п. 8) — G1.
- `preWeak`: вердикт HALF (0.5) не послаблює вузол-передумову (узгоджено з дизайном гіпотез) — записати в дизайн і реалізувати в G3.
- Завдання тесту, замінене на місці з `rev`: старий `S.diag.res[i]` не прив'язувати до `u` нового — пропускати, як `resumeDiag` (G3).

Незалежне рев'ю D-026.

## Нотатки виконавця
