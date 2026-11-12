---
claimed_from: todo
claimed_at: 2026-11-12T09:13:46.720Z
id: write-world-diag-g11
type: write-diag
subject: world
grade: 11
section: dgw11
status: todo
claimed_by: writer-dgw11
created: 2026-11-10
depends_on: [plan-world-g10-11]
---
# Тест рівня «Всесвітня історія, 11 клас» (dgw11)

## Навіщо
Запит людини (чат 2026-11-10): повне покриття історії разом із початковим тестуванням (D-051). **Брати лише тоді, коли всі розділи world 11 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Як
Точно за шаблоном tasks/done/write-hist-diag-g10.md (прочитати повністю: джерела, pre/cur, типи, вимоги, обмеження) і зразками content/world/diag-g9.js, reports/verify/dgw9.md. Відмінності:
- `SLID.diag("world", { id: "dgw11", grade: 11, … })` у `content/world/diag-g11.js`. **id — ключ прогресу.**
- `pre`: наскрізні вміння історика + ключові поняття попереднього періоду (world 10 кл., Друга світова з w10*); `cur`: по одній темі на розділ w11*.
- Якщо курс інтегрований з hist (рішення plan-world-g10-11) — теми не дублюють dgh11; `see`/зв'язок — у нотатки.
- Факти — facts/world.md або джерело з URL.

## Готово, коли
- [ ] `node tools/validate.mjs --diag dgw11` і `node tools/personalization-qa.mjs --diag dgw11` — 0 помилок; draft; таблиця тем у нотатках; рядок в inbox; → `tasks/review/` (content-verifier), далі qa-diag-ukr-world-new.

## Нотатки виконавця
