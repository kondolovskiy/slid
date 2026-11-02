# Підсумок: незалежна перевірка змісту персоналізації 10 класу

Задача: verify-math-personalization-g10. Матриця 2026-10-16.v2. Кожен файл перевіряв окремий верифікатор, який не писав його.

| Файл | Звіт | Вердикт | Виправлення верифікатора |
|---|---|---|---|
| dg10 (26 завдань) | reports/verify/dg10.md | verified | №10 `{,}` → `0,6`; №5/14/21 підписи вершин без `$…$`; №25 додано «cos 30° = √3/2» (опора) |
| pg10m1 (16) | reports/verify/pg10m1.md | verified | джерело a9: «п. 7, с. 70 і п. 8, с. 82» |
| pg10m2 (16) | reports/verify/pg10m2.md | verified | — (знайдено хибне правило в уроці g10m2l2 → fix-math-g10m2l2-skew-rule, виправлено й перевірено: reports/verify/fix-math-g10m2l2-skew-rule.md) |
| pg10m3 (24) | reports/verify/pg10m3.md | verified | a07: ключ `±2` |
| pg10m4 (24) | reports/verify/pg10m4.md | verified | — |
| pg10m5 (32) | reports/verify/pg10m5.md | verified | d04: підказка про arccos від'ємного числа |
| pg10m6 (32) | reports/verify/pg10m6.md | verified | — |

**Покриття.** Усі 18 required-уроків мають пули (по 8 вправ, рівні 1/2/3). Optional: g10m1l3, g10m2l3 — без вправ і не позначені як перевірені. Pending: 0.

**Межі.** `personalization-qa --grade 10 --strict` після перевірки: «ще не verified» знято; лишаються 10 форматних прогалин матриці (g10m3l2 list, g10m3l3 expression, g10m4l1 exactRoot, g10m5l3 periodicSet, g10m5l4 expression, g10m6l1/l2 intervalSet, g10m6l3 expression, g10m6l4 expression+intervalSet). Верифікатори підтвердили: у відповідних пунктах підручника m10 таких вправ немає (D-028 — не вигадувати). Рішення — curate-math-matrix-v3. Браузерне/міграційне/офлайн-приймання — qa-math-personalization-g10. Час 10–15 хв — неперевірена оцінка (research-math-diag-duration).

**Вади рушія, знайдені під час перевірки:** engine-math-answer-g10-issues (validatePool exactRoot при BUDGET 0; «x =» у list; `(3x+5)4x`; «+16»), engine-math-render-tex-gaps (`{,}`, `$…$` у підписах lab).
