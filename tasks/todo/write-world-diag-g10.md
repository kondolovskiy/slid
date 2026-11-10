---
id: write-world-diag-g10
type: write-diag
subject: world
grade: 10
section: dgw10
status: todo
claimed_by:
created: 2026-11-10
depends_on: [plan-world-g10-11]
---
# Тест рівня «Всесвітня історія, 10 клас» (dgw10)

## Навіщо
Запит людини (чат 2026-11-10): повне покриття історії разом із початковим тестуванням (D-051). **Брати лише тоді, коли всі розділи world 10 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Як
Точно за шаблоном tasks/done/write-hist-diag-g10.md (прочитати повністю: джерела, pre/cur, типи, вимоги, обмеження) і зразками content/world/diag-g9.js, reports/verify/dgw9.md. Відмінності:
- `SLID.diag("world", { id: "dgw10", grade: 10, … })` у `content/world/diag-g10.js`. **id — ключ прогресу.**
- `pre`: наскрізні вміння історика + ключові поняття попереднього періоду (world 9 кл., Перша світова й кін. XIX — поч. XX ст. з w9*); `cur`: по одній темі на розділ w10*.
- Якщо курс інтегрований з hist (рішення plan-world-g10-11) — теми не дублюють dgh10; `see`/зв'язок — у нотатки.
- Факти — facts/world.md або джерело з URL.

## Готово, коли
- [ ] `node tools/validate.mjs --diag dgw10` і `node tools/personalization-qa.mjs --diag dgw10` — 0 помилок; draft; таблиця тем у нотатках; рядок в inbox; → `tasks/review/` (content-verifier), далі qa-diag-ukr-world-new.

## Нотатки виконавця
