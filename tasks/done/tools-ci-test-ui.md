---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.167Z
id: tools-ci-test-ui
type: tools
subject: all
status: done
claimed_by: eng-ciui
created: 2026-11-05
depends_on: [engine-sw-version-skew]
---
# CI: `node tools/test-ui.mjs` (Node Playwright) у job `browser`

Сценарії test-ui (Тренування з also, замок уроку, запобіжник невідомого екрана, оновлення PWA без змішування версій — 45 перевірок) зараз не в check і не в CI. Додати крок у job `browser` .github/workflows/pages.yml: Node Playwright тієї ж версії, що Python (1.63.0), браузер — той самий кеш; блокує deploy. Оцінити час; AGENTS.md §3 (рядок test-ui «не в check і CI») і docs/PUBLISHING.md оновити. Скіл `engine-change`; рев'ю D-026.

## Нотатки виконавця
- **pages.yml, job `browser`:** новий крок «Сценарії рушія (test-ui, Node Playwright)» після регресії test-answer-ui: `npm install --prefix "$RUNNER_TEMP/pw-node" --no-save --no-audit --no-fund --ignore-scripts "playwright@$PW_VERSION"` (версія — з `steps.pw.outputs.version`, тобто та сама 1.63.0, що Python; у `package.json` проєкту нічого), далі `PLAYWRIGHT_MODULE=… node tools/test-ui.mjs`. Браузер — Chromium самого Playwright із `~/.cache/ms-playwright` (його ставить крок «Chromium і системні бібліотеки»; та сама версія = та сама ревізія 1243). `if: !cancelled() && steps.chromium.outcome == 'success'` (як у плейтесту: іде й після червоної регресії), `timeout-minutes: 10`. Червоний крок → червоний `browser` → `deploy` (`needs: [build, browser]`) пропущено. Права не змінено (`browser`: `contents: read`). Версія приходить через `env`, не інтерполяцією в скрипт.
- **tools/test-ui.mjs:** порядок браузера як у test-answer-ui.py: `--browser` → `SLID_BROWSER` → `/opt/pw-browsers/chromium`, якщо є і не задано `PW_DEFAULT` → Chromium самого Playwright. `PLAYWRIGHT_MODULE` тепер має пріоритет над `require("playwright")` (явне перемагає). У лог — рядок `test-ui: Chromium <версія> (<звідки>)`. 0 перевірок → rc 1 (нульовий прогін ≠ успіх). Коментар-шапка: «у CI — крок job browser».
- **Документація:** AGENTS.md §1 (CI) і §3 (рядок test-ui), docs/PUBLISHING.md (крок 3 job browser, перенумерація, локальний запуск, абзац «Тести» в «Оновлення PWA»).
- **Перевірки (локально):**
  - PyYAML: workflow парситься; порядок кроків і `if` — див. вище; `deploy.needs = [build, browser]`, `browser.permissions = {contents: read}`.
  - `NODE_PATH=/opt/node-tools/node_modules node tools/test-ui.mjs` → `45 ok, 0 ✗`, rc 0, 28 с.
  - Імітація кроку CI: `run` витягнуто з YAML і прогнано `bash -e` з `RUNNER_TEMP=<scratchpad>/ciui/runner PW_VERSION=1.63.0 PW_DEFAULT=1 PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers` (кеш браузера як у CI, без запасного `/opt/pw-browsers/chromium`): npm поставив playwright@1.63.0 за 2 с, test-ui знайшов власний Chromium Playwright (`chromium_headless_shell-1243`) — `45 ok`, rc 0, разом 28 с.
  - Негативні: `SLID_BROWSER=/nope` → rc 1; `PW_DEFAULT=1` з порожнім `PLAYWRIGHT_BROWSERS_PATH` → «Executable doesn't exist at …/chromium_headless_shell-1243/…», rc 1 (не хибний успіх); `SLID_BROWSER=<повний шлях до chrome>` → 45 ok.
  - `node tools/build.mjs` — згенеровані файли без змін.
- **Оцінка часу в CI:** +≈ 35–45 с до job `browser` (npm install ≈ 2–10 с, test-ui ≈ 30 с на runner; Chromium уже встановлений попереднім кроком). Job-timeout 45/120 хв не чіпав.
- **Не перевірено:** справжній прогін GitHub Actions (npm-реєстр із runner, `$RUNNER_TEMP`, кеш браузера ставить Python-пакет — ревізія збігається лише при однаковій версії; при розбіжності test-ui явно впаде з «Executable doesn't exist»). Мутант рушія в CI — разом із планом мутант-перевірки tools-ci-answer-ui (той самий PR-прогін).
