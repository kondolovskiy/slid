---
claimed_from: todo
claimed_at: 2026-11-27T07:37:47.278Z
id: write-eng-diag-g11
type: write-diag
subject: eng
grade: 11
section: dge11
depends_on: [write-eng-g11-e11s1, write-eng-g11-e11s2, write-eng-g11-e11s3, write-eng-g11-e11s4, write-eng-g11-e11s5, write-eng-g11-e11s6, write-eng-g11-e11s7, write-eng-g11-e11s8, engine-eng-diag-pool, write-eng-diag-g10]
status: todo
claimed_by: writer-write-eng-diag-g11
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 11 клас» (dge11)

**Брати лише тоді, коли всі розділи 11 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g11.js.

## Результат
`content/eng/diag-g11.js`: `SLID.diag("eng", { id: "dge11", grade: 11, … })`. **id `dge11` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 10 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 11 кл. (e11s1, e11s2, e11s3, e11s4, e11s5, e11s6, e11s7, e11s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B2 (наприкінці 11 кл., рішення людини 2026-11-19).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge11` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
