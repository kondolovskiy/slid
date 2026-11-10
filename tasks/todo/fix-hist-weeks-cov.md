---
id: fix-hist-weeks-cov
type: fix
subject: hist
status: todo
claimed_by:
created: 2026-11-10
depends_on: []
---
# Історія 5–9 кл.: нові тижні розділів (лише поле `weeks`) після нових розділів g5s7, g6s9, g6s10, g7s6, g8s6, g9s6

Підстава: задача curate-hist-coverage (рішення 10.11); звіти reports/research/coverage-research-hist-coverage-g5-6.md §4.4, -g7-9.md §4.1–4.3 (чернетки plan.js). content/hist/plan.js уже має нові записи й цільові тижні; але **файл розділу перекриває запис плану**, тож у наявних розділах `weeks` треба змінити в самих файлах. Порядок показу розділів у класі — за першим тижнем (app/registry.js `finalize`), тому без цієї задачі нові розділи стануть не на своє місце.

## Що зробити
У кожному файлі змінити **лише рядок `weeks`** розділу (і, за бажанням, коментар у шапці «тижні … — curate-hist-coverage 10.11»). Уроків, `status`, id не чіпати — це метадані розділу (як D-044), повторна верифікація уроків не потрібна.

| Файл | Розділ | Було | Стало |
|---|---|---|---|
| content/hist/g5-s1.js | s1 | [1, 6] | [6, 10] |
| content/hist/g5-s2.js | s2 | [7, 11] | [11, 14] |
| content/hist/g5-s3.js | s3 | [12, 17] | [15, 19] |
| content/hist/g5-s4.js | s4 | [18, 23] | [20, 24] |
| content/hist/g5-g5s5.js | g5s5 | [24, 29] | [25, 29] |
| content/hist/g6-g6s1.js | g6s1 | [1, 5] | [4, 7] |
| content/hist/g6-g6s2.js | g6s2 | [6, 9] | [8, 10] |
| content/hist/g6-g6s6.js | g6s6 | [10, 14] | [11, 14] |
| content/hist/g6-g6s7.js | g6s7 | [15, 19] | [15, 18] |
| content/hist/g6-g6s3.js | g6s3 | [20, 22] | [19, 21] |
| content/hist/g6-g6s4.js | g6s4 | [23, 25] | [22, 23] |
| content/hist/g6-g6s8.js | g6s8 | [26, 30] | [24, 27] |
| content/hist/g6-g6s5.js | g6s5 | [31, 35] | [32, 35] |
| content/hist/g7-g7s5.js | g7s5 | [28, 35] | [28, 31] |
| content/hist/g8-g8s5.js | g8s5 | [27, 35] | [27, 31] |
| content/hist/g9-g9s4.js | g9s4 | [22, 28] | [22, 25] |
| content/hist/g9-g9s5.js | g9s5 | [29, 35] | [30, 35] |

Без змін: g5s6 [30, 35]; 7–9 кл. — решта. Нові розділи (з plan.js): g5s7 [1, 5], g6s9 [1, 3], g6s10 [28, 31], g7s6 [32, 35], g8s6 [32, 35], g9s6 [26, 29]. 10–11 кл. — тижні змінює задача refine-hist-diag-g10-g11 (разом із переносом g11s1).

## Межі й перевірка
- Лише ці 17 рядків `weeks` (+ коментарі шапки) і ця задача. Від неї залежать revise-/refine-hist-*-cov для цих розділів: роби її **першою**, швидко, поки їх ніхто не взяв (`node tools/claim.mjs list doing --subject hist`).
- Перевір, що в кожному класі тижні неперервні 1–35 без накладань (разом із записами plan.js для нових розділів).
- `node tools/validate.mjs` — 0 помилок. Build не запускай. Рядок в inbox. `node tools/claim.mjs move fix-hist-weeks-cov review` (перевірка — content-verifier: таблиця ↔ файли ↔ plan.js).

## Нотатки виконавця
