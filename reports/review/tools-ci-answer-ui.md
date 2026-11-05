# Рев'ю D-026: tools-ci-answer-ui

- Перевірено: коміт `de49edd` (гілка `wt-ci`, база `8c651dd`), увесь diff: `.github/workflows/pages.yml`, `tools/playtest-pick.mjs`, `tools/test-playtest-pick.mjs`, `tools/playtest.py`, `tools/requirements-browser.txt`, `package.json`, AGENTS.md §1/§3, docs/PUBLISHING.md, задача `tasks/review/tools-ci-answer-ui.md`.
- Рецензент: незалежний агент (скіли engineering-review, engine-change), реалізацію не писав.

## Вердикт: **прийнято** (статично), з умовою для `done`

Блокувальних (P1) дефектів у коді не знайдено. Але критерій задачі «CI падає, якщо зламати регресію (перевірено навмисним мутантом у гілці)» **не виконано**: workflow жодного разу не запускався, Python-частини (`test-answer-ui.py` у CI, `playtest.py --section id1,id2`) реально не виконувались. Задачу не переносити в `done`, поки на PR не пройде план мутант-перевірки з нотаток (п. 1–4 щонайменше): `browser` зелений на чистому PR, червоний на мутанті рушія, `deploy` пропущено на PR. Це критерій приймання задачі, а не дефект diff.

## Знахідки

### P2 (бажано до злиття)
1. **Права `pages: write` / `id-token: write` на рівні workflow** — `.github/workflows/pages.yml:19-22`. Через новий тригер `pull_request` job `build` виконує код PR (`node tools/build.mjs`, тести) з цими правами (для PR з того самого репозиторію; у форків токен лише read і без OIDC). Ризик невеликий (автор такої гілки й так має write, а середовище `github-pages` обмежує гілки деплою), але звузити можна без поломки деплою. За документацією: `actions/deploy-pages` README — «The job that executes the deployment must at minimum have `pages: write`, `id-token: write`»; `upload-pages-artifact` прав токена не потребує (runtime-токен артефактів); `configure-pages` лише читає налаштування Pages через API (`token: github.token`; `enablement` вимкнено). Пропозиція:
   ```yaml
   permissions:
     contents: read
   jobs:
     build:
       permissions: { contents: read, pages: read }
     deploy:
       permissions: { pages: write, id-token: write }
   ```
   (`browser` уже має `contents: read`.) Після зміни підтвердити одним пушем у main або Run workflow на main.
2. **Відкритий критерій «CI падає на мутанті»** — див. вердикт. Без справжнього прогону невідомі: тривалість, чи `--suite regression` стабільна на `ubuntu-latest` з власним Chromium Playwright, чи не застрягне деплой main через червоний `browser` від середовища.

### P3 (потім)
3. `concurrency` `cancel-in-progress: true` (`pages.yml:24-26`) успадковано, але тепер прогін довший (≈ 15–25 хв): новий пуш у main скасовує й деплой, що вже йде. Стартовий шаблон Pages радить для деплою `cancel-in-progress: false`; можна розвести: окрема група для `deploy` без скасування.
4. База PR — `github.event.pull_request.base.sha` (`pages.yml:118`). Якщо main пішов уперед, а payload несе старішу базу, diff з merge-комітом захопить і чужі зміни main — піднабір лише більшає (безпечний бік). Точніше — перший батько merge-коміту (`HEAD^1`, потребує `fetch-depth: 2`).
5. `cut -c1-900` (`pages.yml:137`) у GNU ріже байти — може розрізати кирилицю посеред символу в анотації (косметика).
6. Кеш `~/.cache/ms-playwright` (`actions/cache@v4`) зберігається лише після успішного job: якщо перший прогін червоний, кеш не збережеться — наступний знову холодний. Не дефект, лише зауваження до оцінки часу.
7. Прогалини тестів `test-playtest-pick.mjs` (мутанти вижили, див. нижче): нічия за кількістю уроків у `cover` (`playtest-pick.mjs:36`), якір `^` у регулярці img (`playtest-pick.mjs:56`), типовий бюджет 200 і вирізання `--max-lessons` з аргументів CLI (`:87`, `:89`), гілка «Порожній вибір» (`:95`, на справжньому змісті недосяжна). Коментар у тесті (`test-playtest-pick.mjs:61`) обіцяє «файл розділу дає свій id першим» — у CLI-перевірці цього немає.
8. `playtest.py:209-210`: при 0 уроків і 0 тестів рівня вихід 2 без друку `errs` — на практиці недосяжно після перевірки id (`:137`), але порядок кращий: спершу помилки.

## Що перевірено й як

| Перевірка | Результат |
|---|---|
| `npm run check` у worktree | rc 0; `test-playtest-pick: усі 22 перевірок пройшли`; validate 0 помилок; graph 0 помилок. Побічно змінено `reports/validate.json` (звичайна поведінка check; не комічу) |
| `deploy`: `needs: [build, browser]`, `if: github.event_name != 'pull_request' && github.ref == 'refs/heads/main'` | без функції статусу в `if` діє неявний `success()` → деплой лише коли `build` і `browser` зелені; на PR і на Run workflow з іншої гілки — пропущено. На PR у `build` пропущено збирання `_site`, configure-pages, upload |
| Умови кроків `browser` | регресія → піднабір (`!cancelled() && chromium success && playtest != full`) → плейтест (`pick success`) / повний (`full`). На push `inputs.playtest` порожній → subset, job-timeout 45; `inputs` дозволено в `jobs.<id>.timeout-minutes` |
| `concurrency: pages-${{ github.ref }}` | PR (`refs/pull/N/merge`) не скасовують прогони main; повторні пуші в PR скасовують попередні |
| `playwright==1.63.0` | існує на PyPI (реліз 2026-09-15, є колесо `manylinux1_x86_64`, py3-none); остання — 1.64.1. У контейнері Node `playwright@1.63.0`, `/opt/pw-browsers/chromium-1243` — версія узгоджена. Ключ кешу — версія з `importlib.metadata` |
| Браузер у CI | `playtest.py:127-129` і `test-answer-ui.py:1290-1299`: без `/opt/pw-browsers` — Chromium Playwright; `--with-deps` / `install-deps` ставить бібліотеки |
| Крок «Піднабір» (витягнуто з YAML через PyYAML, `bash -e`) | Безпека: `PR_BASE`/`PUSH_BEFORE`/`ids` — через `env`, не інтерполяцією в скрипт; файли — `mapfile` + `"${CHANGED[@]}"` (без розбиття й glob); не-ASCII шляхів у `img/`, `content/` немає (лапкування `core.quotePath` не зачепить). Сценарії: нульова база `000…0` і `workflow_dispatch` (порожня база) → лише покриття, rc 0; неіснуюча база `deadbeef…` → `::warning::Не вдалося порівняти`, rc 0; база `HEAD~12` (fetch замінено на `git cat-file -e`) → «Змінено файлів відносно 5762d9a: 85», змінені розділи першими (g5s5, dg10, u5s1, …), далі покриття, далі dg4–dg9; `ids=` одним рядком |
| Відображення файл → id | id розділів і тестів рівня унікальні між предметами; кожна тека `img/<предмет>/<id>/` відповідає існуючому id (перевірено скриптом на справжньому змісті) |
| Мутанти `playtest-pick.mjs` (копія в scratchpad, 19 шт.) | вбито 13: критерій «на урок», ознаки hyp/lab/answerKind/subject, `known`, дублікати, межа бюджету `>`→`>=`, облік `used`, фільтр dropped, тести рівня, розділи без уроків, порядок черг. Вижили 6: `if (!gain) continue` (еквівалентний), нічия `x.n <`→`>`, якір img, типовий 200→Infinity, без `args.splice`, гілка порожнього вибору (P3 №7) |
| `playtest.py` `--section` (заглушка модуля `playwright` у scratchpad через `PYTHONPATH`, `SLID_SUBJECTS` зі справжнього змісту) | `nope` → «ПОМИЛКА невідомі id … ['nope']», rc 2; `,` → «(порожньо)», rc 2; `g6s1,dg6` і `dg6` → перевірку id пройдено, далі прохід (заглушка падає на `click` — очікувано). Без `--section` — поведінка як раніше (`ONLY is None`). Локальні виклики `playtest.py` у репо: лише `package.json` `playtest` без аргументів — не зачеплено |
| Документація | AGENTS.md §1/§3 і docs/PUBLISHING.md відповідають коду (тригери, deploy лише з main, бюджет 200, покриття, `playtest: full`, обов'язкові checks — дія людини) |
| Права Pages-дій | README `actions/deploy-pages` і `action.yml` `actions/configure-pages` (main) прочитано через curl — див. P2 №1 |

## Не перевірено
- Жоден справжній прогін GitHub Actions (YAML перевірено лише PyYAML і читанням; `actionlint` немає).
- `python tools/test-answer-ui.py --suite regression` і справжній `playtest.py` — у контейнері немає Python-модуля `playwright` (ставити заборонено).
- `git fetch --depth=1 origin <sha>` на GitHub (локальний file:// не віддає довільний sha — «not our ref»; на GitHub це працює, але не відтворено).
- Звуження прав (P2 №1) на живому деплої.
