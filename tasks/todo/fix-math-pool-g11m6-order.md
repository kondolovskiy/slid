---
id: fix-math-pool-g11m6-order
type: fix
subject: math
grade: 11
status: todo
claimed_by:
created: 2026-11-04
depends_on: [write-math-pool-g11m6, tests-hyp-snapshot-g11]
---
# pg11m6: порядок вправ — помилки рівня 1 без перевірки наступного дня

Джерело: reports/review/tests-hyp-snapshot-g11.md, inbox 04.11 (FIX). Скіл `math-pool-diag`.

У g11m6l3 перші 4 вправи (c01–c04) — уся пара `func`, у g11m6l4 (d01–d04) — уся пара `geom`: помилка рівня 1 у першій сесії не має жодної перевірки (test-hyp §10: `none` 5).

## Що зробити
1. Переставити в масиві `items`: c05 перед c04, d05 перед d04 (id, lvl, sk, ключі — без змін). Перевірено рецензентом на копії: validate 0/0, `none` 0, hyp.js 683/689, рівень 2 216/219.
2. Оновити знімки tools/test-hyp.mjs §10 (5 → 0 тощо) з коментарем; P3-1 з рев'ю — описати 3 помилки рівня 2 без перевірки й розбіжність sol0 скрипт / hyp.js.
3. Коротка повторна верифікація пулу (порядок і педагогіка), рев'ю D-026 для test-hyp.

## Нотатки виконавця
