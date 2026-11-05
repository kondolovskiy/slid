---
claimed_from: todo
claimed_at: 2026-11-05T06:48:17.104Z
id: fix-math-pool-g11m6-order
type: fix
subject: math
grade: 11
status: review
claimed_by: eng-math-g11
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
- 2026-11-05, eng-math-g11 (worktree wt-math). Скіли math-pool-diag, engine-change (знімки).
- **Пул** `content/math/pool-g11-g11m6.js`: у `items` c05 переставлено перед c04, d05 — перед d04; id, lvl, sk, умови й ключі — без змін (diff — лише порядок блоків). `status: "verified"` → `"draft"`, коментар-шапка пояснює причину. `validate --pool pg11m6` — 0/0.
- **Знімки test-hyp §10** (tools/test-hyp.mjs) з коментарем «2026-11-05, fix-math-pool-g11m6-order» і попередніми числами: §2.1 A 462 → 461, D≤ 201 → 204, D> 686 → 691, D° 656 → 653, природні 887 → 895; §2.3 чисті 672 → 677 і 211 → 214, sol0 672/4 → 671/3, пар в 1 сесії 222 → 220; hyp.js 678/689 → 683/689 (D> 613), 216/219 (D≤ 191), sol0 667 → 671; `none` [0,5] → [0,0]. Збігається з цифрами рецензента на копії (683/689, 216/219, none 0). Коментар до (а′) — тепер історичний приклад, уроків таких 0. Інваріантна перевірка `[M.byLvl[1].none, nExh]` лишилась (тепер 0 = 0).
- **P3-1** рев'ю tests-hyp-snapshot-g11 описано в коментарі тесту й абзаці 2026-11-05 docs/design/diag-hypothesis-math.md: 3 помилки рівня 2 без перевірки (c04, d03, d04) теж закрились; розбіжність sol0 скрипт/hyp.js (672/667, 4/3) зникла — обидва 671 і 3.
- **test-personalization-qa.mjs:25** — якір `pg11m[26]` без прогалин тепер ігнорує «ще не verified» (статус процесу, як у прецеденті dg6 у тому ж файлі); інакше draft-пул ламає check.
- `npm run check` — EXIT 0.
- **Потрібно:** коротка повторна верифікація pg11m6 (лише порядок і педагогіка першої сесії l3/l4) → verified; рев'ю D-026 для tools/test-hyp.mjs, tools/test-personalization-qa.mjs.

## Нотатки верифікатора
- 2026-11-05, verifier-math-g11-d047 (скіли content-verify, math-pool-diag). Звіт — reports/verify/math-g11-d047.md §1.
- Diff пулу — лише перестановка блоків c04↔c05, d04↔d05 (id, lvl, sk, ключі ті самі). За `pickSession` перша сесія l3: c01–c03 func L1 + c05 calc L2; l4: d01–d02 geom L1, d03 geom L2, d05 meas L2 — складність не спадає, друга навичка є, c04/d04 перевіряють func/geom наступного дня. Переставлені задачі перерозв'язано — ключі правильні.
- Шапка: «poolState deferred» → «у build (матриця v10, D-047)». pg11m6 → **verified**. validate --pool pg11m6 0/0.
- У done не переношу: лишається рев'ю D-026 для tools/test-hyp.mjs, tools/test-personalization-qa.mjs.
- **Раунд 2 (2026-11-05, eng-math-g11):** pg11m6 повторно verified (reports/verify/math-g11-d047.md, коміт 14b6517). Тимчасовий виняток «ще не verified» у test-personalization-qa прибрано, тепер якір `/^pg11m[26][:/]/` (рев'ю P2-1/P3-1; мутант pg11m6 → draft — rc 1).
