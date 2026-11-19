---
id: write-eng-diag-g11
type: write-diag
subject: eng
grade: 11
section: dge11
depends_on: [write-eng-g11-e11s1, write-eng-g11-e11s2, write-eng-g11-e11s3, write-eng-g11-e11s4, write-eng-g11-e11s5, write-eng-g11-e11s6, write-eng-g11-e11s7, write-eng-g11-e11s8, engine-eng-diag-pool, write-eng-diag-g10]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 11 клас» (dge11)

**Брати лише тоді, коли всі розділи 11 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7; зразок — content/ukr/diag-g11.js і tasks/done/write-ukr-diag-g11.md.

## Результат
`content/eng/diag-g11.js`: `SLID.diag("eng", { id: "dge11", grade: 11, … })`. **id `dge11` — ключ прогресу.**
- `pre`: опори 10 кл. і наскрізні вміння (граматика циклу, лексика тем) × 2 завдання.
- `cur`: по одній темі на розділ 11 кл. (e11s1, e11s2, e11s3, e11s4, e11s5, e11s6, e11s7, e11s8).
- Типи — DIAG_TYPES (з build/match після engine-eng-diag-pool); listen — лише якщо є звук.
- Рівень завдань — B1 (рівень стандарту; B2 — за рішенням людини).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge11` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
