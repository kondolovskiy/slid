---
id: write-eng-diag-g9
type: write-diag
subject: eng
grade: 9
section: dge9
depends_on: [write-eng-g9-e9s1, write-eng-g9-e9s2, write-eng-g9-e9s3, write-eng-g9-e9s4, write-eng-g9-e9s5, write-eng-g9-e9s6, write-eng-g9-e9s7, write-eng-g9-e9s8, write-eng-g9-e9s9, engine-eng-diag-pool, write-eng-diag-g8]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 9 клас» (dge9)

**Брати лише тоді, коли всі розділи 9 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7; зразок — content/ukr/diag-g9.js і tasks/done/write-ukr-diag-g9.md.

## Результат
`content/eng/diag-g9.js`: `SLID.diag("eng", { id: "dge9", grade: 9, … })`. **id `dge9` — ключ прогресу.**
- `pre`: опори 8 кл. і наскрізні вміння (граматика циклу, лексика тем) × 2 завдання.
- `cur`: по одній темі на розділ 9 кл. (e9s1, e9s2, e9s3, e9s4, e9s5, e9s6, e9s7, e9s8, e9s9).
- Типи — DIAG_TYPES (з build/match після engine-eng-diag-pool); listen — лише якщо є звук.
- Рівень завдань — B1 (наприкінці 9 кл., МП-ІМ с. 3).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge9` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
