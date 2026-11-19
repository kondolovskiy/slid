---
id: write-eng-diag-g8
type: write-diag
subject: eng
grade: 8
section: dge8
depends_on: [write-eng-g8-e8s1, write-eng-g8-e8s2, write-eng-g8-e8s3, write-eng-g8-e8s4, write-eng-g8-e8s5, write-eng-g8-e8s6, write-eng-g8-e8s7, write-eng-g8-e8s8, engine-eng-diag-pool, write-eng-diag-g7]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 8 клас» (dge8)

**Брати лише тоді, коли всі розділи 8 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7; зразок — content/ukr/diag-g8.js і tasks/done/write-ukr-diag-g8.md.

## Результат
`content/eng/diag-g8.js`: `SLID.diag("eng", { id: "dge8", grade: 8, … })`. **id `dge8` — ключ прогресу.**
- `pre`: опори 7 кл. і наскрізні вміння (граматика циклу, лексика тем) × 2 завдання.
- `cur`: по одній темі на розділ 8 кл. (e8s1, e8s2, e8s3, e8s4, e8s5, e8s6, e8s7, e8s8).
- Типи — DIAG_TYPES (з build/match після engine-eng-diag-pool); listen — лише якщо є звук.
- Рівень завдань — B1 (наприкінці 9 кл.).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge8` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
