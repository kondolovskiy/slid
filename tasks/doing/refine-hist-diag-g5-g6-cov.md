---
claimed_from: todo
claimed_at: 2026-11-12T09:47:12.868Z
id: refine-hist-diag-g5-g6-cov
type: refine-diag
subject: hist
status: todo
claimed_by: writer-dgh56
created: 2026-11-10
depends_on: [write-hist-g5s7, write-hist-g6s9, write-hist-g6s10]
---
# dgh5, dgh6: `for` pre-тем на нові розділи g5s7, g6s9, g6s10 (лише метадані, без `rev`)

Підстава: reports/research/coverage-research-hist-coverage-g5-6.md §4.1 (N1, N2), §7.3 (теми існують — ✅); рішення curate-hist-coverage 10.11. Прецедент — refine-math-diag-for-ister (лише `for`, завдання й `rev` не змінюються).

Скіл `math-pool-diag` (CONTENT_SCHEMA §9).

## Що зробити
1. **dgh5** (`content/hist/diag-g5.js`): додати `g5s7` у `for` pre-тем `map`, `symbols`, `rights`, `indep` (опори нового розділу «Україна — наша держава»). Перевір, чи `for` указує на розділ того ж класу — за правилами validate для pre-тем.
2. **dgh6** (`content/hist/diag-g6.js`): `g6s9` — у `for` pre-тем `era`, `srckind`; `g6s10` — у `for` тем, на яких він стоїть (наприклад, теми про Грецію й Рим, якщо такі є pre; інакше — нічого, поясни).
3. Завдання, індекси, ключі, `rev`, id тестів — **не змінювати**. Нові cur-теми g5s7 / g6s9 / g6s10 — лише в наступних редакціях з новими id (handoff «Наступні редакції тестів»; після пілоту тривалості research-math-diag-duration) — тут не робити, лише рядок IDEA в inbox.
4. Тести → `status: "draft"` (метадані змінено), верифікація content-verifier.

## Готово, коли
- [ ] `node tools/validate.mjs --diag dgh5`, `--diag dgh6` — 0 помилок; `npm run check` — EXIT 0 (якщо змінилися знімки тестів інструментів — рев'ю D-026).
- [ ] Нотатки: які теми й чому; `node tools/claim.mjs move refine-hist-diag-g5-g6-cov review`.

## Нотатки виконавця
