---
id: server-auth
type: engine
subject: server
status: review
claimed_by: claude-backend
created: 2026-11-01
---
# Бекенд: вхід шкільним Google-акаунтом і код привʼязки пристрою

## Запит людини (2026-11-01)
Пілот — школа з власним Google Workspace; SAML не потрібен. «Давай відразу і акаунт, і код». Особисті email дітей — лише зі згодою батьків (не приймаємо).

## Що зроблено (модуль identity)
- Порт `GOOGLE_VERIFIER` + адаптер `GoogleAuthVerifier` (google-auth-library 11.3.0: підпис, строк, `aud = GOOGLE_CLIENT_ID`); зберігаємо лише `sub` і `hd`. Дозволені домени — `GOOGLE_DOMAINS`; без `hd` (особистий акаунт) — 401.
- `POST /v1/auth/google` (з Bearer анонімного учня — привʼязка), `POST /v1/pairing`, `POST /v1/pairing/claim`, `GET /v1/me`.
- Міграція `002`: таблиця `identity.tokens` (кілька пристроїв; старі токени перенесено), `google_sub` UNIQUE, `google_hd`, `pairing_codes` (SHA-256, 10 хв, атомарне одноразове забирання).
- `@nestjs/throttler`: 120/хв з IP на identity, 10/хв на `pairing/claim`; `trust proxy` (`TRUST_PROXY`, типово 1 — Railway).
- `configureApp()` спільний для main і e2e (e2e підмінює `GOOGLE_VERIFIER` фейком).

## Готово, коли
- [x] unit 91/91, e2e 14/14 (Postgres 16), build.
- [ ] Незалежне рев’ю (D-026) — reports/review/server-auth.md, «прийнято».

## Нотатки
- Рев’ю 1 (e577c63): прийнято, 6 бажаних. Виправлено: Б-1 (привʼязка лише з `link: true`), Б-3 (тест на справжньому OAuth2Client з локальним RSA-ключем, e2e двох анонімних сесій), Б-4 (503 при недоступних сертифікатах — перевірено на справжньому клієнті без мережі; ознака `GaxiosError` не працює: бібліотека обгортає помилку), Б-5 (lock table у 002), Б-2 частково (`TRUST_PROXY` типово 0), Б-6 частково (регістр доменів, зайвий параметр, docs про ліміти). Решта → tasks/todo/server-hardening.md. Автор: unit 100/100, e2e 16/16.
