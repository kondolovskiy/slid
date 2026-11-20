---
id: write-eng-diag-g10
type: write-diag
subject: eng
grade: 10
section: dge10
depends_on: [write-eng-g10-e10s1, write-eng-g10-e10s2, write-eng-g10-e10s3, write-eng-g10-e10s4, write-eng-g10-e10s5, write-eng-g10-e10s6, write-eng-g10-e10s7, write-eng-g10-e10s8, engine-eng-diag-pool, write-eng-diag-g9]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 10 клас» (dge10)

**Брати лише тоді, коли всі розділи 10 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g10.js.

## Результат
`content/eng/diag-g10.js`: `SLID.diag("eng", { id: "dge10", grade: 10, … })`. **id `dge10` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 9 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 10 кл. (e10s1, e10s2, e10s3, e10s4, e10s5, e10s6, e10s7, e10s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge10` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
