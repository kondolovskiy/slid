---
claimed_from: todo
claimed_at: 2026-11-03T10:10:11.085Z
id: verify-math-ister-diag
type: verify
subject: math
grade: 5-6
section: dg5, dg6
status: done
claimed_by: verifier-ister-diag
created: 2026-11-03
depends_on: [math-ister-migration]
---
# Повторна перевірка dg5 і dg6 після міграції за Істером

Скіл `content-verify`. Що змінено (docs/design/math-ister.md §5.1–5.2, матриця «Зміни v4»): dg5 — тема `cur-ms3` тепер «Ознаки подільності» (g6m1l2), завдання №26 замінено на місці (`rev: 2`, sort на 9 / на 3 / не на 3), `for` тем parts/perim/units/box/mul/quot; dg6 — pre-тема `g6-div` (№17 і №21), cur-теми `pct` (№7) і `pct-of` (№27), `rem.for` → g6m2.
Перевір: розв'язок №26 і опору в g6m1l2 (D-019), достатність проби для known (усе ядро g6m1l2?), змістовність `for` (зокрема `box.for: ["ms0b"]` — рев'ю P3), що одне базове завдання №7 як cur-тема `pct` — достатнє для known ms3l1 (рев'ю P2-3). Після перевірки — `status: "verified"` у diag-g5.js і diag-g6.js. `node tools/validate.mjs --diag dg5|dg6`, `node tools/personalization-qa.mjs`.

## Нотатки виконавця
verifier-ister-diag, 2026-11-03 — звіт reports/verify/verify-math-ister-diag.md.
- dg5 → verified. №26 (rev 2, не опублікована) — sort лише на 3/9 не покривав ядро g6m1l2: переписано multi (2, 5, 10; 3 і 9; добір цифри), ключ [1, 3, 4]. box — без for (P3-5). Матрицю json/md синхронізовано.
- dg6 → лишається draft: cur pct (№7) і pct-of (№27) — по одному обчисленню (CONTENT_SCHEMA §9). Ред. 3 ламає закріплений rev-список у test-learn.mjs — потрібна окрема задача з рев'ю; чернетки — у звіті §5.
- validate --diag dg5/dg6 — 0; test-learn, test-personalization-qa — зелені; personalization-qa — 0 помилок. test-hyp §0 червоний через чужі правки уроків (перевірено копією з HEAD-діагностиками).

