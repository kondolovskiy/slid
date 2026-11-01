---
id: server-skeleton
type: engine
subject: server
status: review
claimed_by: claude-backend
created: 2026-11-01
---
# Каркас бекенду: модульний моноліт NestJS + PostgreSQL

## Запит людини (2026-11-01)
NestJS (або інша мова, якщо не підходить), модульний моноліт; модулі спілкуються через інтерфейси й адаптери, щоб будь-який модуль можна було винести в сервіс (HTTP/gRPC/шина) заміною адаптера. Мінімум коду, DRY/KISS/TDD, патерни. PostgreSQL.

## Що зроблено
- `server/`: NestJS 11, Kysely 0.28, модулі `identity` (анонімний учень, токен пристрою, SHA-256 у БД, порт `IDENTITY`, guard) і `progress` (версійований документ стану, compare-and-set, 409 з поточною версією, без `name`).
- Схема Postgres і міграції на модуль; без FK між схемами. Тест меж модулів.
- Тести: модульні (Memory-адаптери), e2e на справжньому Postgres (обовʼязковий DATABASE_URL), CI `.github/workflows/server.yml`.
- docs/BACKEND.md — принципи, правила меж, як винести модуль, API, протокол синхронізації, наступні задачі, відкриті питання.

## Готово, коли
- [x] `npm run check` зелений; `npm run test:e2e` зелений на Postgres 16; `npm run build && npm run migrate` працюють.
- [ ] Незалежне рев’ю (D-026) — звіт reports/review/server-skeleton.md з вердиктом «прийнято».

## Нотатки
- Kysely 0.29 — лише ESM; з Jest/CommonJS не дружить, тому 0.28.
- Перевірки автора: unit 38/38, e2e 6/6 (локальний Postgres 16), ручний curl по dist.
