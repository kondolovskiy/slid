---
claimed_from: todo
claimed_at: 2026-11-05T09:24:11.582Z
id: server-log-hmac
type: engine
subject: server
status: review
claimed_by: eng-server-hmac
created: 2026-11-05
depends_on: [server-hardening-2]
---
# Логи: `lh` = HMAC-SHA-256(id учня, серверний секрет) замість SHA-256 (D-050 п. 5)

Джерело: reports/review/server-hardening-2.md P3-1. Скіл `backend-change`; незалежне рев'ю D-026.
- Новий секрет (напр. `LOG_HASH_KEY`, ≥ 32 байти) у конфігу; без нього в production — відмова старту або явна поведінка (описати); у тестах/dev — згенерований.
- Документація docs/BACKEND.md («Спостереження», змінні середовища), server/README; тести unit + e2e (у лозі немає id, однаковий id → однаковий lh при тому самому ключі, інший ключ → інший lh).
- Деплою немає (D-050 п. 4) — лише код і документація.

## Нотатки виконавця
- 2026-11-05 eng-server-hmac. **Що зроблено.** `server/src/ops/log.ts`: `learnerHasher(key)` = перші 16 hex HMAC-SHA-256(id учня, ключ); `logHashKey(env, warn)` — політика ключа; провайдер `LEARNER_HASH` в `OpsModule` (`ops/index.ts`), `httpLog(metrics, log, learnerHash)` бере його в `configureApp` (`app.ts`). Колишній `learnerHash` (голий SHA-256) прибрано з публічного API `ops`.
- **Поведінка `LOG_HASH_KEY`:** заданий — ≥ 32 байти UTF-8, інакше відмова старту (завжди); не заданий і `NODE_ENV=production` — відмова старту; не заданий поза production — випадковий 32-байтний ключ процесу + `warn` (контекст `ops`). `npm start` тепер `NODE_ENV=production node dist/main.js` (Railway стартує саме ним), тож на Railway без ключа сервер не підніметься. Для локальної розробки без ключа — `node dist/main.js`.
- **Тести (спершу червоні):** unit `ops/log.spec.ts` — HMAC збігається з незалежним `createHmac`, не дорівнює голому SHA-256, інший ключ → інший lh, правила `logHashKey` (короткий, UTF-8 32 байти, production, порожній рядок, dev з попередженням), `OpsModule` бере ключ із env і не компілюється в production без нього. e2e `test/app.e2e.ts` — очікуваний `lh` рахує сам тест (HMAC з `LOG_KEY`), у лозі немає ні id, ні голого SHA-256; новий тест: той самий учень — той самий lh, інший учень — інший, другий екземпляр застосунку з іншим ключем → інший lh; production без ключа — `AppModule` не компілюється.
- **Перевірки:** `npm ci`; `npm run check` → tsc OK, 9 наборів, **142/142**; PostgreSQL 16 локально (`/tmp/slid-pg-hmac`, порт 55435; потім зупинено й видалено) `npm run test:e2e` → **23/23**; `npm run build`, `npm run migrate` ×2 → OK. Вручну з `dist`: `npm start` без ключа → exit 1 «Не задано змінну середовища LOG_HASH_KEY»; `LOG_HASH_KEY=short` → «коротший за 32 байти»; з ключем `openssl rand -hex 32` — `lh` у лозі = HMAC, порахований окремо `node -e`, id і токена в лозі 0; `node dist/main.js` без ключа — попередження `warn` і старт.
- **Документація:** docs/BACKEND.md («Спостереження» — `lh`, політика ключа; «Розгортання» — `LOG_HASH_KEY`; «Тести»), server/README.md (команда старту, `npm start` = production), docs/design/ai-solution-check.md §3.6 («хеш» → `lh` HMAC). Деплою немає (D-050 п. 4): при першому деплої задати `LOG_HASH_KEY` у змінних Railway.
- **Рецензенту (D-026):** звірити, що `NODE_ENV=production` у `npm start` нічого не ламає (Express лише вимикає докладні помилки); що ключ не потрапляє в логи (повідомлення помилок містять лише назву змінної); порівняння з P3-1 server-hardening-2. Ротація ключа свідомо не автоматизована (YAGNI) — описано в BACKEND.md.
