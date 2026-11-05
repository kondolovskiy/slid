---
claimed_from: todo
claimed_at: 2026-11-05T06:48:17.134Z
id: curate-math-g11m2-to-g10
type: curate
subject: math
status: todo
claimed_by: eng-math-g11
created: 2026-11-05
depends_on: [fix-math-pool-g11m6-order]
---
# math: g11m2 → 10 клас, матриця v10, вектор без «=» (D-047; reports/research/mon-math-2026-11.md §2)

Скіли `math-pool-diag`, `content-author`; зміни tools/тестів — `engine-change` + рев'ю D-026.
1. **Перенос у 10 кл.** (прецедент g6m1 → 5 кл., D-043): content/math/plan.js `g11m2` grade 10, weeks після g10m4 (≈ [25, 35]); файли `g11-g11m2.js` → `g10-g11m2.js`, `pool-g11-g11m2.js` → `pool-g10-g11m2.js` (git mv), `grade`, коментарі. id не змінювати.
2. **Матриця v10** (docs/math-personalization-coverage.md): g11m2l1–l2 pending → required (10 кл.), l3 — optional; g11m6 — optional, прибрати «deferred»; рядок 522 і коментар diag-g11.js:6.
3. **Діагностика:** cur для g11m2 у content/math/diag-g10.js (нове завдання з `rev`, якщо потрібно), прибрати g11m2 з diag-g11.js; граф — якщо рядки прив'язані до класу (скіл `skill-graph`).
4. **Вектор без «=»** у g11m2 (звіт §2.3 — перелік рядків l2, l3, l4). «=» лишається між векторами, у довжині, скалярному добутку. Відповіді coordinates3 не змінюються.
5. Знімки тестів (test-hyp §10, test-personalization-qa тощо), якщо зсунуться, — з коментарем; рев'ю D-026.
Змінені уроки й diag → `draft` і верифікація.

## Нотатки виконавця
