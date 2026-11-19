---
id: write-eng-diag-g4
type: write-diag
subject: eng
grade: 4
section: dge4
depends_on: [write-eng-g4-e4s1, write-eng-g4-e4s2, write-eng-g4-e4s3, write-eng-g4-e4s4, write-eng-g4-e4s5, write-eng-g4-e4s6, write-eng-g4-e4s7, write-eng-g4-e4s8, engine-eng-diag-pool]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 4 клас» (dge4)

**Брати лише тоді, коли всі розділи 4 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g5.js.

## Результат
`content/eng/diag-g4.js`: `SLID.diag("eng", { id: "dge4", grade: 4, … })`. **id `dge4` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: вхідний рівень Pre A1–A1 (ТОП 3–4: 3 кл.) — `lessons: []` + `baseline`, механіка engine-eng-diag-pool п. 2.
- `cur`: по одній темі на розділ 4 кл. (e4s1, e4s2, e4s3, e4s4, e4s5, e4s6, e4s7, e4s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge4` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.
