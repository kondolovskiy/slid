---
claimed_from: todo
claimed_at: 2026-11-05T07:32:03.985Z
id: server-hardening-2
type: engine
subject: server
status: done
claimed_by: eng-server2
created: 2026-11-04
depends_on: [server-hardening]
---
# Бекенд: спільні лічильники, структуровані логи, сповіщення; дрібне з рев'ю server-hardening

Джерела: reports/review/server-hardening.md (P2-1, P3-1, P3-2); tasks/done/server-hardening.md «Відкладено»; docs/BACKEND.md «Відкриті питання до людини»; docs/design/ai-solution-check.md §3.6, рядки про лічильники лімітів, структуровані логи й сповіщення (посилається на server-hardening, але туди це не ввійшло); inbox 04.11 (eng-server-hardening IDEA, orchestrator). Скіл `backend-change`, незалежне рев'ю D-026.

## Що зробити
1. **P2-1 (architecture.spec.ts:25):** непарний апостроф у коментарі зсуває розбір лапок, виклик після нього тест меж пропускає — вирізати коментарі перед пошуком; тест, що це ловить.
2. **P3-2:** вичерпані 5 спроб генерації коду прив'язки → зараз 500, краще 503.
3. **P3-1:** квотовані `"schema"."table"` у сирому sql — зараз лише домовленість у docs/BACKEND.md; розширити перевірку або лишити домовленість явно.
4. **Структуровані логи** (JSON) з полями, які дозволяє docs/design/ai-solution-check.md (без персональних даних і токенів; хеш `learner_id`).
5. **Лічильники для сигналів** (частка 422 `content_unknown` тощо) і спосіб сповіщення адміністратора — дизайн узгодити з ai-solution-check.md; що саме робити зараз, а що після деплою — розписати в нотатках.
6. **Спільне сховище лімітів** (Postgres чи Redis) — лише якщо людина вирішить (див. нижче); інакше — порт/інтерфейс, що дозволить замінити пам'ять процесу.

## Не робити без рішення людини (docs/BACKEND.md «Відкриті питання»)
- `TRUST_PROXY` і хопи `X-Forwarded-For` на Railway — після першого деплою.
- Ліміти для класу за одним NAT — за даними пілоту.
- Глобальний ліміт невдалих claim чи довший код.
- `nonce` для id_token — разом із входом у фронтенді.
- Додатковий сервіс (Redis) — витрати на Railway.

## Готово, коли
- [ ] `cd server && npm run check` і `npm run test:e2e` зелені; docs/BACKEND.md оновлено.
- [ ] Незалежне рев'ю (D-026) — reports/review/server-hardening-2.md «прийнято».

## Нотатки виконавця

**Виконавець:** eng-server2, 2026-11-05, гілка `wt-server2`.

### Зроблено
1. **P2-1:** `stripComments` у `server/test/architecture.spec.ts` вирізає `//…` і `/*…*/` поза рядками й шаблонами до пошуку схем і `withSchema`; тест «коментарі з непарним апострофом…» (зокрема `// don't` перед викликом, `'http://…'` і `//` у шаблоні лишаються). Мутація «без stripComments у schemaRefs» → тест червоний. Обмеження (регулярні вирази з лапкою/`//`, шаблони в `${…}`) — у коментарі й docs/BACKEND.md.
2. **P3-2:** вичерпано 5 спроб коду → `ServiceUnavailableException` (503); unit-тест очікує саме його (до правки — червоний).
3. **P3-1:** регулярний вираз ловить `"identity"."learners"` / `identity."tokens"` / `"progress".docs`; тест; мутація (старий вираз) → червоний. Домовленість у docs оновлено.
4. **Логи:** `server/src/ops/log.ts` — `ConsoleLogger` Nest у режимі `json` (без нової залежності), middleware `httpLog`: `{event:"http", method, route (шаблон|null), status, ms, lh}`; `lh` = 16 hex SHA-256 від id учня. Без токенів, заголовків, IP, тіла, сирого шляху. Внутрішні логи Nest — JSON, рівні warn/error. Перелік полів — `LOG_FIELDS`. Unit + e2e (токена й id учня в лозі немає).
5. **Лічильники й сигнали:** `server/src/ops/metrics.ts` — `Metrics` (памʼять процесу, вікно 1 год), правила `RULES` (server_errors, throttled, pairing_claim_failures, google_unavailable); кінець вікна/зупинка → рядок `metrics` (log) і `alert` (warn). `GET /v1/admin/metrics` з `ADMIN_TOKEN` (≥ 32 символи, інакше 404; порівняння за сталий час). Опис — docs/BACKEND.md «Спостереження»; посилання в ai-solution-check.md §3.6 оновлено.
6. **Порт лімітів:** `RATE_LIMIT_STORAGE` (`server/src/ops/rate-limit.ts`, тип = `ThrottlerStorage` бібліотеки), памʼятний адаптер у глобальному `OpsModule`; identity бере його через `ThrottlerModule.forRootAsync`. Контрактний тест `rateLimitStorageContract` (експортований для майбутнього Pg/Redis-адаптера). e2e: 429 рахує саме це сховище. Нового сервісу немає.

### Зараз / після деплою
- Зараз: JSON-логи, лічильники, правила, `alert` у лозі, `/v1/admin/metrics`.
- Після деплою (людина): задати `ADMIN_TOKEN` на Railway; канал сповіщень (фільтр логів Railway за `"event":"alert"` чи email/Telegram) — «Відкриті питання»; пороги `RULES` переглянути за даними пілоту; сигнал `content_unknown` (частка 422 і «будь-які за 6 год після деплою Pages») додасть solution-check (A2): `metrics.inc` + правило; для «6 год після деплою» потрібен час деплою Pages — вирішити в A2.
- Не робив (рішення людини): `TRUST_PROXY`, ліміти класу за NAT, глобальний ліміт claim / довший код, `nonce`, Redis/Pg-сховище лімітів.

### Перевірки (worktree, PostgreSQL 16 локально, порт 55433)
- `npm run check`: tsc OK, 7 наборів, 135/135 (було 110).
- `npm run test:e2e`: 21/21 (було 18).
- `npm run build` + `npm run migrate` двічі: OK. Ручний запуск `node dist/main.js`: рядки JSON на stdout, підсумок `metrics` при SIGTERM.

### Рецензенту (D-026)
- Відомо: `ThrottlerStorageService` тримає блок на ключ, не на назву ліміту — guard вкладає назву в ключ, тож контракт перевіряє незалежність ключів.
- `/v1/admin/metrics` без ліміту частоти: токен ≥ 32 символи, перебір нереальний; глянь, чи згоден.
- Логи на кожен запит, включно з `/health` від Railway, — свідомо.

