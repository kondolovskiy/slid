---
id: write-eng-diag-g7
type: write-diag
subject: eng
grade: 7
section: dge7
depends_on: [write-eng-g7-e7s1, write-eng-g7-e7s2, write-eng-g7-e7s3, write-eng-g7-e7s4, write-eng-g7-e7s5, write-eng-g7-e7s6, write-eng-g7-e7s7, engine-eng-diag-pool, write-eng-diag-g6]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 7 клас» (dge7)

**Брати лише тоді, коли всі розділи 7 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7; зразок — content/ukr/diag-g7.js і tasks/done/write-ukr-diag-g7.md.

## Результат
`content/eng/diag-g7.js`: `SLID.diag("eng", { id: "dge7", grade: 7, … })`. **id `dge7` — ключ прогресу.**
- `pre`: опори 6 кл. і наскрізні вміння (граматика циклу, лексика тем) × 2 завдання.
- `cur`: по одній темі на розділ 7 кл. (e7s1, e7s2, e7s3, e7s4, e7s5, e7s6, e7s7).
- Типи — DIAG_TYPES (з build/match після engine-eng-diag-pool); listen — лише якщо є звук.
- Рівень завдань — A2 → B1 (B1 — наприкінці 9 кл.).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge7` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
