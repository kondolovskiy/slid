---
id: write-eng-diag-g5
type: write-diag
subject: eng
grade: 5
section: dge5
depends_on: [write-eng-g5-e5s1, write-eng-g5-e5s2, write-eng-g5-e5s3, write-eng-g5-e5s4, write-eng-g5-e5s5, write-eng-g5-e5s6, write-eng-g5-e5s7, write-eng-g5-e5s8, write-eng-g5-e5s9, write-eng-g5-e5s10, engine-eng-diag-pool, write-eng-diag-g4]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 5 клас» (dge5)

**Брати лише тоді, коли всі розділи 5 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g5.js.

## Результат
`content/eng/diag-g5.js`: `SLID.diag("eng", { id: "dge5", grade: 5, … })`. **id `dge5` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 4 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 5 кл. (e5s1, e5s2, e5s3, e5s4, e5s5, e5s6, e5s7, e5s8, e5s9, e5s10).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge5` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
