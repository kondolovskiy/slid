---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.892Z
id: tests-hyp-g3-verified-lines
type: tests
subject: math
status: todo
claimed_by: eng-g3
created: 2026-11-05
depends_on: [verify-graph-prob-tri]
---
# test-hyp G3: не прив'язувати перевірку до складу verified-ліній графа; лінії prob і tri → verified

Скіл: `engine-change`; незалежне рев'ю D-026 (`engineering-review`).

Верифікатор прийняв лінії графа `prob` і `tri` (reports/verify/graph-prob-tri.md; вузли вже `verified`, graph.js v 2026-11-05.2). Але `lines.prob.st` і `lines.tri.st` лишено `draft`. Причина — tools/test-hyp.mjs:746:
`eq([G.answers, G.inLine, G.lines], [12, 9, ["frac"]], "G3: …")`. Якщо поставити лініям verified, `npm run check` падає: «отримано [12,9,["frac","prob","tri"]], очікувалось [12,9,["frac"]]». Інші перевірки (test-learn, test-evidence, test-validate, test-graph-report) у пробному прогоні верифікатора зелені.

Зробити одним пакетом:
1. tools/test-hyp.mjs:746 — перевіряти `G.lines.includes("frac")` (або точний список `["frac", "prob", "tri"]`), щоб кожна нова verified-лінія не ламала тест; `G.inLine` = 9 лишається (фікстури — об'єкти лінії frac).
2. content/math/graph.js: `lines.prob.st` і `lines.tri.st` → `"verified"`, прибрати коментар «вузли verified; st лінії → …» і оновити шапку.
3. `node tools/build.mjs`, `npm run check` EXIT 0, `graph-report --line prob --strict`, `--line tri --strict` rc 0.
4. Рев'ю D-026 — reports/review/tests-hyp-g3-verified-lines.md.
