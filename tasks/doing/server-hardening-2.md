---
claimed_from: todo
claimed_at: 2026-11-05T07:32:03.985Z
id: server-hardening-2
type: engine
subject: server
status: todo
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
