---
claimed_from: todo
claimed_at: 2026-11-05T07:32:04.014Z
claimed_by: eng-ci
id: tools-ci-answer-ui
type: engine
subject: all
status: review
created: 2026-11-02
depends_on: []
---
# Браузерна регресія рушія в CI

`python3 tools/test-answer-ui.py --suite regression` (evidence_checks, hyp_checks, graph_g3_checks, half_credit_checks тощо) — головна регресія `app/`, але її немає ні в `npm run check`, ні в `.github/workflows/pages.yml`. Зміну рушія можна злити, не запустивши її.

## Що зробити
- Оцінити час прогону й флейки (pitfalls: паралельно з іншими браузерними прогонами — TimeoutError).
- Додати окремий job у `pages.yml` (або окремий workflow на зміни `app/`, `tools/`, `content/`): Python, Playwright з кешем браузера, `--suite regression`; job має блокувати деплой.
- Не додавати в `npm run check` (той лишається без браузера) — або обґрунтувати.
- Оновити AGENTS.md §3 (примітка «не входить у check і CI»), docs/PUBLISHING.md.

## Готово, коли
- [ ] CI падає, якщо зламати регресію (перевірено навмисним мутантом у гілці).
- [ ] Незалежне рев'ю (D-026), звіт reports/review/tools-ci-answer-ui.md.

## Нотатки виконавця (eng-ci, 2026-11-05, гілка wt-ci)
**Що зроблено**
- `.github/workflows/pages.yml`: тригер `pull_request` (branches: main) і `workflow_dispatch` з input `playtest: subset|full`; новий job `browser`
  (permissions: contents: read; Python 3.12 + pip-кеш за `tools/requirements-browser.txt` (playwright==1.63.0, як Node-двійник контейнера);
  кеш `~/.cache/ms-playwright` за версією; `playwright install --with-deps chromium`, на влучанні кешу — `install-deps chromium`):
  1) `python tools/test-answer-ui.py --suite regression` (крок 25 хв);
  2) піднабір плейтесту: `git diff` з `pull_request.base.sha` / `event.before` (fetch --depth=1; нові файли першими; збій diff → попередження й лише покриття)
     → `node tools/playtest-pick.mjs --max-lessons 200 …` → один процес `python tools/playtest.py --section id1,id2,…` (крок 30 хв); іде й після червоної регресії;
  3) `playtest: full` (лише вручну) — `python tools/playtest.py` (крок 90 хв, job 120).
  `deploy`: `needs: [build, browser]`, `if: event != pull_request && ref == main`. На PR збирання `_site`, configure-pages, upload пропущено.
  concurrency: `pages-${{ github.ref }}` (PR не скасовують деплой main).
- `tools/playtest-pick.mjs` (новий): змінені розділи/тести рівня (файл розділу, diag, `img/<предмет>/<id>/`) у межах бюджету уроків, по черзі між
  предметами; жадібне покриття (предмет, тип екрана, вид лабораторії, answerKind, здогадка hyp/poll на оцінюваному типі; критерій — нові ознаки на урок);
  усі тести рівня. Решта понад бюджет — рядок «Понад бюджет: …» у stderr → `::warning::` у CI.
- `tools/test-playtest-pick.mjs` (новий, 22 перевірки на фікстурах + інваріант CLI на справжньому змісті); доданий у `package.json` check і pages.yml.
- `tools/playtest.py`: `--section` приймає кілька id через кому; невідомий id чи порожній список — «ПОМИЛКА», код 2 (до старту проходження);
  0 уроків і 0 тестів рівня — код 2 (раніше зелений нульовий прогін).
- `npm run check` браузера не отримав (лишається без Python/Playwright) — свідомо: у контейнері модуля немає, ставити заборонено.
- Документація: AGENTS.md §1, §3; docs/PUBLISHING.md («Браузерні тести в CI»).

**Оцінка часу (без локального Python-прогону — лише з історії):** регресія 4,5–8 хв (tasks/done/tools-diff-answers-p3.md 4 хв 24 с; tests-answer-ui-dg6-rev3 ≈ 8 хв);
плейтест ≈ 3,3 с/урок (reports/qa/math-personalization-release.md: 410 уроків / 1369 с). Покриття зараз — 11 розділів / 52 уроки + 8 тестів рівня ≈ 4–5 хв;
бюджет змінених 200 уроків ≈ 11 хв. Встановлення: холодне ≈ 2–3 хв (apt + Chromium), з кешем ≈ 1 хв. Job: типово ≈ 12–15 хв, великий пакет (PR #18) ≈ 25 хв.
Повний плейтест 832 уроків ≈ 45–50 хв — лише вручну.
PR #18 (787 змінених файлів): піднабір 48 id, 238 уроків; понад бюджет — 75 розділів (453 уроки), попередження в CI.

**Перевірки (локально)**
- `node tools/test-playtest-pick.mjs` — 22/22. Мутанти playtest-pick (копія дерева в scratchpad/ci/mut): img-гілка, черга між предметами, фільтр dropped,
  критерій «на урок», known-id, бюджет, тести рівня, ознака hyp — 8/8 вбито.
- YAML: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/pages.yml'))"` — ок (PyYAML є в контейнері; actionlint немає).
- Скрипт кроку «Піднабір» витягнуто з YAML і прогнано bash'ем (fetch замінено на `git cat-file -e`): push з базою f40115d, нульова база, неіснуюча база
  (попередження, rc 0), PR #18 (база c58de8c, голова origin/claude/brave-feynman-iql21g) — ids коректні, попередження «Понад бюджет».
- `python3 -m py_compile tools/playtest.py` — ок; `--help`/запуск обох Python-скриптів тут неможливий (ModuleNotFoundError: playwright) — перший справжній прогін буде в CI.
- `node tools/build.mjs` — згенеровані файли без змін.

**Відомі обмеження / для рецензента**
- Python-частини (playtest.py з кількома id, CI-job) локально не виконано: потрібна перевірка на PR (план мутантів нижче).
- Top-level permissions (`pages: write`, `id-token: write`) лишилися як були — тепер їх отримує й job `build` на PR із того ж репозиторію
  (форки — лише read). Не звужував до job-рівня, бо не перевірено, які права потрібні `configure-pages` (зламався б деплой main). Кандидат на окрему задачу.
- Захист гілки (required checks `build`, `browser`) — налаштування репозиторію, робить людина (docs/PUBLISHING.md).
- PR #18 запустить job лише після того, як цей коміт потрапить у його гілку (pull_request бере workflow з merge-ref).
- `test-answer-ui --suite content` (діагностики й пули на справжньому змісті) у CI не додано — окрема оцінка часу.

**План мутант-перевірки на PR (не пушив)**
1. Гілка від wt-ci → PR у main: очікування — `build` і `browser` зелені, `deploy` пропущено; у лозі піднабору — «Разом: … id».
2. Мутант регресії: окремий коміт, що ламає рушій (напр., у app/learn.js `gapOrder` повертає тотожну перестановку, або `answerSig` ігнорує «;») + build →
   `browser` червоний на кроці «Регресія», плейтест іде далі; `deploy` не запускається. Відкотити комітом-реверсом.
3. Мутант плейтесту: коміт, що робить choice незарахованим у app/app.js (напр., порівняння з `correct + 1`) → «Плейтест піднабору» червоний з «правильну відповідь не зараховано».
4. Нульовий прогін: тимчасово `--section "$IDS,nope"` у кроці → код 2 «невідомі id».
5. Run workflow на гілці PR з `playtest: full` — заміряти повний час; `deploy` пропущено (ref не main).
6. Повторний запуск — «Кеш браузера» hit, крок Chromium лише install-deps.
