---
id: qa-hist-diag
type: qa
subject: hist
status: todo
claimed_by:
created: 2026-11-06
depends_on: [write-hist-diag-g5, write-hist-diag-g6, write-hist-diag-g7, write-hist-diag-g8, write-hist-diag-g9, write-hist-diag-g10, write-hist-diag-g11, write-world-diag-g7, write-world-diag-g8, write-world-diag-g9]
---
# Приймання тестів рівня з історії (dgh5–dgh11, dgw7–dgw9)

Брати, коли всі 10 тестів `verified` (задачі в done). Процес і звіт — як reports/qa/qa-ukr-diag.md (скрипт reports/qa/qa-ukr-diag.script.mjs — адаптуй: предмети hist і world, ті самі три профілі відповідей).
1. `node tools/validate.mjs` — 0 помилок; build + `npm run check` (оркестратор); `playtest.py --section dgh5,…,dgw9` — у CI (PR), якщо локально немає Python playwright.
2. Плани: три профілі для кожного тесту — прогалини → кроки на уроки молодших класів; baseline (dgh5, dgw7) — поради без кроків; `cur` → «знайоме».
3. **Три-чотири тести одного класу:** у 7–9 кл. дитина має тести math, ukr (7), hist і world — перевір, що головна не перевантажена картками «Тест рівня» і що дитина розуміє, з якого почати. Якщо незручно — пропозиція в inbox, рішення про потік — людині (handoff).
4. Тривалість, телефон 360 px, зображення в завданнях (якщо є) — ліцензія й cap.
Звіт — reports/qa/qa-hist-diag.md; P1 — задачами; рядок в inbox.

## Нотатки виконавця
