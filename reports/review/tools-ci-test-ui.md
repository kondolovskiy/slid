# Рев'ю D-026: tools-ci-test-ui

- **Перевірено:** коміт `7eb90cd` (гілка `wt-ciui`): `.github/workflows/pages.yml`, `tools/test-ui.mjs`, `AGENTS.md`, `docs/PUBLISHING.md`, задача й inbox.
- **Рецензент:** незалежний агент зі свіжим контекстом (реалізацію не писав).
- **Вердикт: прийнято.** Блокувальних знахідок (P1) немає, P2 немає. Нижче чотири P3, їх можна закрити пізніше.

## Що перевірено і висновки

### pages.yml, job `browser`, крок «Сценарії рушія (test-ui, Node Playwright)» (`.github/workflows/pages.yml:121-128`)
- **Ін'єкції:** версія з `steps.pw.outputs.version` приходить через `env: PW_VERSION` (рядок 125), у скрипті береться в лапки `"playwright@$PW_VERSION"`. Вираз `${{ }}` у `run` не потрапляє. Значення пише власний крок `pw` із `importlib.metadata`, а не дані PR. Подія — `pull_request`, не `pull_request_target`, тож токен PR лише читає.
- **Права:** `browser.permissions = {contents: read}` (рядок 80), верхній рівень теж `contents: read`. Розбір PyYAML це підтверджує. Права не розширено.
- **Встановлення:** `npm install --prefix "$RUNNER_TEMP/pw-node" --no-save --ignore-scripts` ставить пакет поза деревом репозиторію: після імітації `git status` чистий, `package.json` і lock проєкту не зачеплено. Life-cycle скрипти вимкнено. Ставиться 2 пакети (`playwright`, `playwright-core`). `playwright` закріплює `playwright-core` точною версією, тож без lock-файлу дрейфу версій немає.
- **Блокування deploy:** крок без `continue-on-error`, оболонка за замовчуванням `bash -eo pipefail`. Якщо `npm install` або `node` повертають ненульовий код, крок червоний, а з ним і job `browser`. `deploy.needs = [build, browser]` (рядок 176) за червоного `browser` deploy пропускає. Умова `!cancelled() && steps.chromium.outcome == 'success'` така сама, як у плейтесту: крок іде й після червоної регресії, але не після зламаного встановлення браузера. Червоний результат цим кроком не маскується.
- **Тайм-аути:** `timeout-minutes: 10` на кроці, а реальний прогін триває ≈ 28–30 с. Job-тайм-аут 45/120 хв не змінено, тож запас достатній.
- **Порожня версія** (крок `pw` міг би вивести `version=`): `npm install playwright@` завершується помилкою `enoent` (перевірено через `--dry-run`), отже червоно, а не «зелено з іншою версією».

### tools/test-ui.mjs
- **Порядок браузера** (рядок 29): `--browser`, далі `SLID_BROWSER`, далі `/opt/pw-browsers/chromium`, якщо він є і не задано `PW_DEFAULT`, і насамкінець власний Chromium Playwright. Це збігається з `test-answer-ui.py:1311-1331` і `playtest.py:140`. Перевірено: `--browser` має пріоритет над `SLID_BROWSER=/nope`.
- **Порядок модуля** (рядок 27): `PLAYWRIGHT_MODULE`, потім `require("playwright")`, потім `/opt/node-tools/...`. Без жодного модуля код повернення 2 з підказкою.
- **0 перевірок дає rc 1** (рядок 253). Виняток посеред сценарію спрацьовує як uncaught exception і теж дає rc 1.
- **Локальний запуск не зламано:** 45 ok, rc 0.

### Документація
AGENTS.md §1 і §3 та docs/PUBLISHING.md (крок 3 job `browser`, перенумерація, локальний запуск, абзац «Тести») відповідають коду. Інших місць, де test-ui описано як «не в CI», немає: перевірено grep по `docs/`, `.claude/`, `memory/long/` і `tools/`.

## Знахідки

- **P3-1. Хибний `PLAYWRIGHT_MODULE` мовчки замінюється іншим модулем** (`tools/test-ui.mjs:27`). Відтворення: `PLAYWRIGHT_MODULE=/nope node tools/test-ui.mjs` дає 45 ok, бо модуль підхопився з `NODE_PATH` (глобальний 1.63.0). У CI ризик малий: якщо `npm install` впаде, крок зупиниться раніше, а на runner немає глобального playwright, тож буде rc 2. Проте явно заданий шлях краще не підміняти мовчки. Пропозиція: якщо `PLAYWRIGHT_MODULE` задано, завантажувати лише його, а версію модуля писати в рядок `test-ui: Chromium …`.
- **P3-2. Перший виняток зупиняє прогін без підсумку** (успадковано, у diff не входить). Наприклад, мутант нижче впав на `locator.innerText` TimeoutError: решта сценаріїв не пішла, рядка `N ok, M ✗` у лозі немає. Код повернення правильний (1), але в CI видно лише першу поломку.
- **P3-3. AGENTS.md:16 «Node 22 (`tools/*.mjs`, без npm-залежностей)»** (успадковано). `test-ui.mjs` потребує Node-пакета `playwright`, хоч і поза `package.json`. Варто дописати уточнення.
- **P3-4. Пакет із реєстру ставиться без lock і integrity.** Версія закріплена точно, `--ignore-scripts`, код виконується з правами `contents: read`, тож це прийнятно. Якщо колись знадобиться відтворюваність до байта, можна закомітити окремий lock у `tools/` і ставити через `npm ci --prefix`.

## Виконані перевірки (власні прогони рецензента)
Тимчасові файли лежать у `/tmp/claude-0/-home-user-slid/0b3f1b0f-bb69-5565-8bac-32715507a5cd/scratchpad/review-ciui/`.
1. PyYAML `safe_load` workflow. Порядок кроків, `if`, `timeout-minutes`, `env` кроку, `deploy.needs` і права відповідають опису вище. `run` кроку витягнуто в `step.sh`.
2. `NODE_PATH=/opt/node-tools/node_modules node tools/test-ui.mjs`: `Chromium 153.0.8010.12 (/opt/pw-browsers/chromium)`, `45 ok, 0 ✗`, rc 0, 29,8 с.
3. Імітація кроку CI: `env RUNNER_TEMP=<scratch>/runner PW_VERSION=1.63.0 PW_DEFAULT=1 PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers bash --noprofile --norc -eo pipefail step.sh`. npm поставив playwright 1.63.0 і playwright-core за 0,6 с, браузер — власний Playwright із кешу. Результат `45 ok, 0 ✗`, rc 0, 28 с. Дерево репозиторію чисте.
4. **Мутант рушія** (копія дерева через `git archive` у scratchpad): `app/app.js:1019` `if(unsup) h+=` замінено на `if(false) h+=` (прибрано повідомлення запобіжника). Той самий скрипт кроку CI дав `✗ запобіжник: на екрані невідомого типу — повідомлення #unsupported` і rc 1, отже крок справді червоніє.
5. Негативні випадки: без модуля (`NODE_PATH=` і хибні шляхи) rc 2; `SLID_BROWSER=/nope` rc 1 («executable doesn't exist at /nope»); `PW_DEFAULT=1` з порожнім `PLAYWRIGHT_BROWSERS_PATH` rc 1 («Executable doesn't exist at …/chromium_headless_shell-1243/…»); `--browser` перемагає `SLID_BROWSER`; `PLAYWRIGHT_MODULE=/nope` переходить на модуль із `NODE_PATH` (P3-1); `npm install "playwright@"` з порожньою версією дає помилку.
6. `npm run check`: rc 0. Він змінив лише мітку часу в `reports/validate.json`, файл повернуто до HEAD.

## Не перевірено
- Справжній прогін GitHub Actions: доступ до npm-реєстру з runner, `$RUNNER_TEMP`, вміст `~/.cache/ms-playwright` після `python -m playwright install --with-deps chromium`, зокрема наявність `chromium_headless_shell-1243`, і поведінка на влучанні кешу. Збіг ревізії обґрунтовано однаковою версією Python і Node пакета 1.63.0 (Python-пакет вбудовує драйвер тієї самої версії). Якщо ревізії розійдуться, крок явно впаде (п. 5), а не дасть хибний успіх. Потрібен перший PR-прогін, разом із мутант-планом tools-ci-answer-ui.
- Python-прогони (`test-answer-ui.py`, `playtest.py`): Python-модуля playwright у контейнері немає, і ставити його заборонено.
