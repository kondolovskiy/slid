# Рев'ю: server-log-hmac (D-026)

**Перевірено:** коміт `63e0cc0` на гілці `wt-hmac` (worktree `/home/user/slid-wt-hmac`), увесь diff: `server/src/ops/log.ts`, `ops/index.ts`, `ops/log.spec.ts`, `app.ts`, `test/app.e2e.ts`, `server/package.json`, `server/README.md`, docs/BACKEND.md, docs/design/ai-solution-check.md §3.6, задача `tasks/review/server-log-hmac.md`. Звірено з D-050 п. 5 і reports/review/server-hardening-2.md P3-1. Рецензент не писав реалізацію.

**Вердикт: прийнято.** Блокувальних (P1) і P2 знахідок немає. Нижче — P3 на потім.

## Відповіді на фокус оркестратора

- **HMAC коректний.** `learnerHasher(key)` = `createHmac('sha256', key).update(id).digest('hex').slice(0, 16)` (`server/src/ops/log.ts:23-24`): ключ — секрет HMAC, повідомлення — id учня, `lh` — 16 hex (64 біти). Порівняння `lh` ніде не потрібне (це не автентифікація), тож `timingSafeEqual` не потрібен. Ключ береться як рядок UTF-8 (`openssl rand -hex 32` дає 64 символи, тобто 256 біт ентропії). Це нормально.
- **Ключ не потрапляє в лог чи помилки.** У повідомленнях помилок (`log.ts:36`, `:39`) і в `warn` (`:40`) є лише назва змінної. `/v1/admin/metrics` ключа не віддає. Вручну на `dist` під `npm start`: `grep -c` ключа в stdout/stderr = 0 (і з правильним ключем, і з коротким `supersecretshortkey`: його значення в повідомленні про відмову немає). id учня й токена в лозі теж 0.
- **Правила `logHashKey`.** Довжина рахується в байтах (`Buffer.byteLength`, межа `< 32`). Заданий, але короткий ключ — відмова завжди. Без ключа в production — відмова старту. Порожній рядок вважається «не задано» (у production відмова; поза production — випадковий ключ). Поза production — `randomBytes(32)` і `warn` у контексті `ops`. Перевірено вручну: `node dist/main.js` без ключа виводить JSON-рядок `warn` і стартує (`/health` 200).
- **`NODE_ENV=production` у `npm start`.** У `node_modules` змінну `NODE_ENV` читають лише `express/lib/application.js` (налаштування `env`, `view cache`) і `finalhandler` (не показує стек у відповідях на помилки, які обійшли Nest). Nest 11, Kysely, `pg`, throttler і google-auth-library її не читають. Відповіді 413, 400 (зіпсований JSON) і 401 у production і dev вийшли побайтово однакові (перевірено вручну). `npm run migrate` (`preDeployCommand`) не імпортує `ops` і без ключа проходить. У Railway `startCommand: "npm start"` запускається через `sh` npm, тож префікс `VAR=… cmd` працює. CI `server.yml` не викликає `npm start` (check, build, migrate ×2, e2e), тож CI не зачеплено. У e2e `NODE_ENV=test` (від jest), і там ключ задає сам тест.
- **Старий `learnerHash` (голий SHA-256)** з коду, експорту `ops` і документації прибрано. `learnerHash` лишився тільки як назва параметра чи локальної змінної в `log.ts:47,57` і `log.spec.ts:11`. Згадки SHA-256 у docs/BACKEND.md і ai-solution-check.md оновлено.
- **Тести ловлять регресії.** 12 мутантів у копії дерева, усі вбиті (див. нижче).

## Знахідки

- **P3-1 · `server/package.json:8` — `NODE_ENV=production` у `npm start` не покрито тестом.** Якщо префікс прибрати, тести лишаться зеленими, а на Railway без `LOG_HASH_KEY` сервер мовчки стартує з випадковим ключем. Тоді `lh` між перезапусками не зв'язуються, але приватність не страждає: ключ однаково невідомий. За бажанням варто додати перевірку в `architecture.spec.ts`: `scripts.start` містить `NODE_ENV=production`.
- **P3-2 · `server/src/ops/log.spec.ts:52-53` — `process.env = { ...saved }`.** Цей рядок замінює спеціальний об'єкт `process.env` звичайним, тож рядкові значення більше не приводяться, а зміни не доходять до дочірніх процесів. У межах одного jest-файлу це нешкідливо. Акуратніше відновлювати лише `LOG_HASH_KEY` і `NODE_ENV`, як це зроблено в e2e.
- **P3-3 · `server/test/app.e2e.ts:173-183`.** Якщо регресія дозволить `compileApp()` у production без ключа, скомпільований модуль не закриється. Тест однаково впаде, хіба що з'явиться зайвий відкритий хендл (пул БД). Не блокує.
- **P3-4 · Вимог до вмісту ключа немає.** `'k'.repeat(32)` приймається. Документація радить `openssl rand -hex 32`, і цього достатньо. Перевіряти ентропію не варто (YAGNI).

## Виконані перевірки (сам, у worktree `/home/user/slid-wt-hmac/server`)

- `npm ci` — OK. `npm run check`: tsc OK, **9 наборів, 142/142**.
- PostgreSQL 16 (користувач `postgres`, `/tmp/slid-pg-review-hmac`, порт 55436; після прогону зупинено й видалено): `DATABASE_URL=postgres://slid@localhost:55436/slid_test npm run test:e2e` → **23/23**. `npm run build`, `npm run migrate` → OK.
- Вручну з `dist`:
  - `npm start` без ключа → exit 1, JSON `error` «Не задано змінну середовища LOG_HASH_KEY».
  - `LOG_HASH_KEY=supersecretshortkey npm start` → exit 1, «коротший за 32 байти», значення ключа в лозі 0 разів.
  - `node dist/main.js` без ключа → `warn` (context `ops`), `/health` 200.
  - `npm start` з `openssl rand -hex 32`: POST learners, GET progress, admin metrics, 404. `lh` у лозі (`f2e93adf097e9482`) збігся з HMAC, порахованим окремо через `node -e`. Ключ, id і токен у лозі: 0 разів.
  - 413, 400 і 401 у production і dev — однакові тіла відповідей.
- Мутанти (копія `src`/`test` у scratchpad; прогін `jest src/ops` + e2e), **12/12 вбито**:
  - M1 HMAC → голий SHA-256: unit 1 червоний, e2e 2 червоні.
  - M2 `slice(0,32)`: unit 2, e2e 2.
  - M3 `key.length` замість байтів: unit 1.
  - M4 `<=` на межі: unit 3.
  - M5 без перевірки production: unit 2, e2e 1.
  - M6 без `warn`: unit 1.
  - M7 сталий dev-ключ: unit 1.
  - M8 без перевірки довжини: unit 1.
  - M9 провайдер зі сталим ключем: unit 2, e2e 3.
  - M10 провайдер ігнорує env: unit 2, e2e 3.
  - M11 `httpLog` з голим SHA-256 в `app.ts`: e2e 2.
  - M12 ключ і повідомлення переставлені: unit 1, e2e 2.
- `grep -rln NODE_ENV` у залежностях: лише `express/lib/application.js` і `finalhandler/index.js`.

## Не перевірено

- Реальний деплой на Railway (деплою немає, D-050 п. 4): чи збирач Railway не перевизначає `NODE_ENV` і чи змінну `LOG_HASH_KEY` задано. Це лишається в чек-листі першого деплою (docs/BACKEND.md «Розгортання»).
- CI `server.yml` на GitHub не запускав. Його кроки повторено локально.
