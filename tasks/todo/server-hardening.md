---
id: server-hardening
type: engine
subject: server
created: 2026-11-01
---
# Бекенд: дрібне посилення після рев’ю server-skeleton

Джерело: reports/review/server-skeleton.md, «Повторна перевірка 62dcd24».

## Що зробити
- **R2-2.** `data` з вкладеністю ~100 000 (тіло ~200 КБ) дає 500: переповнення стека в `JSON.stringify` / `hasNul` (server/src/modules/progress/progress.input.ts). Обмежити глибину (напр. 64) і повертати 400; тест unit + e2e.
- **R2-1.** Тест меж не ловить чужу схему через `selectFrom('identity.learners')` і `withSchema(змінна)`. Розширити перевірку або явно описати в docs/BACKEND.md як домовленість для рев’ю.

## Готово, коли
- [ ] `npm run check`, `npm run test:e2e` зелені; незалежне рев’ю (D-026) прийнято.
