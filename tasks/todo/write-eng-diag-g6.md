---
id: write-eng-diag-g6
type: write-diag
subject: eng
grade: 6
section: dge6
depends_on: [write-eng-g6-e6s1, write-eng-g6-e6s2, write-eng-g6-e6s3, write-eng-g6-e6s4, write-eng-g6-e6s5, write-eng-g6-e6s6, write-eng-g6-e6s7, write-eng-g6-e6s8, engine-eng-diag-pool, write-eng-diag-g5]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 6 клас» (dge6)

**Брати лише тоді, коли всі розділи 6 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g6.js.

## Результат
`content/eng/diag-g6.js`: `SLID.diag("eng", { id: "dge6", grade: 6, … })`. **id `dge6` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 5 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 6 кл. (e6s1, e6s2, e6s3, e6s4, e6s5, e6s6, e6s7, e6s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — A2 (наприкінці 6 кл., МП-ІМ с. 3).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge6` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
