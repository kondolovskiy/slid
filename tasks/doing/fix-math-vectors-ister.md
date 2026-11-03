---
claimed_from: todo
claimed_at: 2026-11-03T10:35:34.771Z
id: fix-math-vectors-ister
type: fix-section
subject: math
grade: 9
section: g9m2
status: todo
claimed_by: writer-fix-math-vectors-ister
created: 2026-11-03
depends_on: [fix-math-notation-ister]
---
# Вектори 9 кл. без «=» і в обчисленнях (рішення людини, D-043 уточнення п. 4)

Glossary «Вирішено 2026-11-03» → вектор. Істер Геометрія 9 (2026), с. 64, 68, 73: `$\vec c(a_1 + b_1; a_2 + b_2)$`, `$\lambda\vec a(\lambda x; \lambda y)$`, `$\vec m(-24; -3)$` — координати після назви вектора без «=». Переписати всі записи вектора з координатами через «=» у `content/math/g9-g9m2.js` (≈ 16 рядків) і `content/math/pool-g9-g9m2.js` (≈ 11 рядків), зокрема підписи лабораторій, steps, fbText. Рівність векторів (`$\vec a = \vec b$`), модуль (`$|\vec a| = 5$`), скалярний добуток (`$\vec a \cdot \vec b = 7$`) і рівності чисел — **лишити**. Ключі відповідей coordinates2, id, порядок варіантів не змінювати. Змінені уроки → draft; пул — рядок у шапці. `node tools/validate.mjs --section g9m2`, `--pool pg9m2`.

## Нотатки виконавця
