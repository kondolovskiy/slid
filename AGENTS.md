# AGENTS.md — Слід

Інструкція для ШІ-агентів (Claude Code, Codex, Cursor, Gemini). Люди: почніть з README.md.

**Слід** — офлайн-застосунок (PWA) з інтерактивними уроками українською для 4–11 класів.
Урок = короткі екрани: проблема → здогадка → теорія як відповідь → завдання з миттєвим поясненням.
Рушій (`app/`) нічого не знає про предмети; весь зміст — дані в `content/`.

## 0. Перед будь-якою роботою (по порядку)
1. `memory/short/handoff.md` — стан і що далі.
2. `memory/long/INDEX.md` — що є в довгій пам'яті; прочитай файли, що стосуються задачі.
3. Свою задачу в `tasks/` і **скіл своєї ролі чи теми** (§6).

## 1. Стек
- Фронтенд: ванільний JS без залежностей і збирача; `index.html` + `app/*.js`; PWA (`sw.js`).
- Інструменти: Node 22 (`tools/*.mjs`, без npm-залежностей у `package.json`; виняток — `test-ui.mjs` бере Node-пакет `playwright` поза ним: локально з `NODE_PATH`/`PLAYWRIGHT_MODULE`, у CI ставиться в `$RUNNER_TEMP`); Python + Playwright (`playtest.py`, `test-answer-ui.py`).
- Бекенд `server/`: TypeScript, NestJS 11, Kysely 0.28, PostgreSQL 16, Jest; Railway. Офлайн-перший: фронтенд працює без нього.
- CI: `.github/workflows/pages.yml` (тести + згенеровані файли закомічені + job `browser`: регресія рушія, test-ui і плейтест піднабору → GitHub Pages; на PR — без публікації), `server.yml` (бекенд на Postgres).

## 2. Карта
| Шлях | Що | Хто змінює |
|---|---|---|
| `index.html` | оболонка, CSS; блок скриптів `CONTENT:START/END` | блок — лише `tools/build.mjs`; решта — розробник |
| `sw.js`, `content/manifest.json` | згенеровані build (офлайн-кеш, список скриптів) | ніхто вручну; коміть після build |
| `manifest.webmanifest`, `icons/`, `app/pwa.js`, `app/update.js` | PWA (оновлення без змішування версій — docs/PUBLISHING.md) | розробник |
| `app/app.js` | рушій: навігація, екрани, гейміфікація, збереження `slid.v1` | розробник |
| `app/learn.js` · `evidence.js` · `hyp.js` | персоналізація · журнал подій · гіпотези (тінь) | розробник |
| `app/math.js` · `lab.js` · `registry.js` | формули · лабораторія · реєстр `SLID.*` | розробник |
| `app/sync.js`, `app/config.js` | синхронізація прогресу з бекендом: злиття стану, вхід, код прив'язки (тести `node tools/test-sync.mjs`); config.js генерує build із `SLID_API` | розробник |
| `app/lang.js` | мовні вправи gaps / pick / stress / word / split (CONTENT_SCHEMA §4.1; тести `node tools/test-lang.mjs`) | розробник |
| `content/subjects/<предмет>.js`, `content/<предмет>/plan.js`, `content/catalog.js` | метадані, план, «скоро» | лише куратор |
| `content/<предмет>/g<клас>-<id>.js` | **один файл = один розділ з уроками** | автор розділу |
| `content/<предмет>/diag-g<клас>.js` | тест рівня (`SLID.diag`) | автор тесту |
| `content/<предмет>/pool-g<клас>-<id>.js` | пул вправ для тренування (`SLID.pool`) | автор пулу |
| `content/<предмет>/graph.js` | граф умінь (`SLID.graph`; є для math) | лише куратор графа (автор — лише `u` у своєму файлі) |
| `img/<предмет>/<id>/` | зображення розділу | автор розділу |
| `style/` | стиль-гайди, профілі складності, заборонені фрази | лише після рішення в decisions.md |
| `memory/long/` | рішення, факти, глосарії, пастки | лише куратор |
| `memory/short/` | handoff (оркестратор), inbox (усі, лише дописувати), sessions | — |
| `tasks/{todo,doing,review,done}/` | черга задач (markdown із frontmatter) | через `tools/claim.mjs` |
| `reports/` | звіти інструментів, `verify/`, `review/`, `qa/` | інструменти, верифікатори, рецензенти |
| `docs/` | документація (покажчик — §6) | розробник/куратор |
| `tools/` | build, validate, stats, тести, черга задач, плейтест | розробник |
| `server/` | бекенд, модульний моноліт | розробник + незалежне рев'ю |
| `.claude/skills/` | процедури ролей і тем (§6) | розробник, через рев'ю |

## 3. Команди
```bash
node tools/build.mjs        # після БУДЬ-ЯКОЇ зміни в content/, app/, img/
node tools/validate.mjs [--section ID | --diag ID | --pool ID] [--quiet]   # 0 помилок обов'язково
npm run check               # build + node-тести + validate + graph-report + stats (склад — package.json)
python3 tools/playtest.py [--section ID[,ID…]] [--port N]    # пройти уроки в браузері; невідомий id — код 2
python3 tools/test-answer-ui.py --suite regression           # браузерна регресія рушія (не в check; у CI — job browser, блокує deploy)
node tools/playtest-pick.mjs [--max-lessons N] [файли…]      # піднабір плейтесту CI: змінені розділи + покриття типів екранів + тести рівня
node tools/test-ui.mjs [--browser P]                         # браузер (Node Playwright): «Тренування» з also, замок уроку, запобіжник екрана, оновлення PWA, синхронізація двох пристроїв; не в check, у CI — job browser
node tools/stats.mjs [--subject S]                           # метрики стилю → reports/style-S.md
node tools/claim.mjs list|claim|move ...                     # черга задач
node tools/make-tasks.mjs [--subject S]                      # задачі на написання з плану
node tools/graph-report.mjs [--line ID --strict]             # граф умінь → reports/graph-<предмет>.md
node tools/fig-audit.mjs [--subject S]                       # де умова потребує рисунка, а його немає → reports/fig-audit-S.md
node tools/euphony.mjs [--subject S] [--section|--pool|--diag ID]   # милозвучність у/в, і/й, з/із/зі (уроки, пули, тести рівня) → reports/euphony-S.md (з ID — лише stdout)
python3 -m http.server 8000                                  # запустити локально
cd server && npm run check && DATABASE_URL=postgres://… npm run test:e2e   # бекенд
```
Браузерні тести (playtest, test-answer-ui) беруть вільний порт, але під паралельним навантаженням флейкають (TimeoutError) — для приймання запускай по одному. `playtest.py --shots` — знімки екранів. Playwright: `/opt/pw-browsers/chromium`. Python-модуля playwright у контейнері може не бути (ставити заборонено) — тоді браузерні прогони йдуть лише в CI (job `browser` у pages.yml; повний плейтест — Run workflow з `playtest: full`).
`validate --section` з неіснуючим id мовчки зелений — перевір id.

## 4. Непорушні правила
1. **Мова контенту — українська**, сучасний правопис, без канцеляриту (style/common.md, style/banned-phrases.txt).
2. **Точність вища за швидкість.** Кожна дата, число, ім'я — з перевіреного джерела. Не впевнений — не пиши або познач «потребує перевірки». Вигадані цитати, факти й джерела заборонені.
3. **Реєстр фактів** `memory/long/facts/<предмет>.md`: якщо факт там є, бери саме це формулювання й дату. Нові — у нотатки задачі з URL.
4. **Нотація й терміни — з глосарію** `memory/long/glossary/<предмет>.md` (math: ділення «:», множення «·», дріб `$3/4$`).
5. **Чесне завдання (D-019):** відповідь оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням. Інакше — здогадка `hyp: true` / `poll`. Докладно: style/common.md.
6. **Не редагуй чужі файли.** Автор змінює лише свій файл, свою теку `img/` і свою задачу; решта — пропозицією в `memory/short/inbox.md`.
7. **Статус:** `draft` → `verified` (ШІ-верифікатор) → `approved` (**лише людина-вчитель**). Агент ніколи не ставить `approved`.
8. **`index.html` (блок скриптів), `sw.js`, `content/manifest.json` не редагуй руками.** Під час паралельної роботи build запускає лише оркестратор, коли всі закінчили.
9. Зображення — лише з відкритою ліцензією, з `cap` і `credits`. **Історія й всесвітня історія: у кожному уроці ≥ 1 справжнє `img` (D-027, D-044 п. 4; помилка validate).**
10. **Незалежне рев'ю (D-026):** будь-яку зміну рушія, інструментів, тестів, збірки, CI, `server/`, `.claude/` перевіряє інший агент зі свіжим контекстом. Самоперевірка й зелені тести рев'ю не замінюють. До вердикту «прийнято» задача лишається в `review`.
11. **id уроків, навичок, вправ і пулів — ключі прогресу дітей.** Не перейменовуй; лише нові id.
12. Нове поле з персональними даними дітей — лише за рішенням людини в decisions.md.

## 5. Git і паралельна робота
- Одиниця паралельності — **розділ**: один агент = одна задача = один файл. Задачу бере лише `claim.mjs claim` (атомарно; `depends_on` він не перевіряє — дивись сам).
- Спільні файли (subjects, plan, graph.js, style, memory/long, index.html) під час паралельного запуску не змінює ніхто; усе — через inbox.
- **Ніколи** `git stash`, `git checkout -- …`, `git reset` у спільному дереві: зачепиш незакомічену роботу інших агентів.
- Тимчасові файли — у власній підтеці scratchpad на задачу й роль (`<scratchpad>/<task-id>/`).
- Злиття гілок або worktree: у `memory/short/inbox.md` зберігай обидві сторони; build — окремим комітом після злиття.
- Після злиття PR нову роботу починай від свіжого `main`.
- Нові назви й id моделей ШІ не кладемо в код, docs і звіти (у дизайнах — рівні й змінні середовища). Винятки: поле `model:` у frontmatter `.claude/agents/` і трейлери атрибуції комітів.

## 6. Ролі, теми й покажчик

**При роботі з X спочатку завантаж скіл Y.** У Claude Code — інструментом Skill; інші агенти — прочитайте `.claude/skills/<Y>/SKILL.md`.

| Задача | Скіл |
|---|---|
| написати чи переписати розділ уроків (`write-*`, `revise-*`, `refine-*`, `fix-*` у файлі розділу) | `content-author` |
| перевірити розділ, тест рівня, пул чи лінію графа, яких ти не писав (задача в `tasks/review/`) | `content-verify` |
| пул вправ `pool-*.js` або тест рівня `diag-*.js` (написати, виправити, змінити формат відповіді; для ukr — ще й `content-author`) | `math-pool-diag` |
| зображення в уроці, Вікісховище, помилка D-027 (`images-*`) | `hist-images` |
| будь-яка зміна в `app/`, `tools/`, тестах, CI (`engine-*`, `tools-*`, `tests-*`) | `engine-change` |
| будь-яка зміна в `server/` (`server-*`) | `backend-change` |
| незалежне рев'ю інженерної задачі, коміту чи diff, яких ти не писав | `engineering-review` |
| `graph.js`, рядки `IDEA GRAPH`, дрейф графа, `graph-report --strict` | `skill-graph` |
| вирівняти стиль і складність предмета після пакета розділів (`style-*`) | `style-sync` |
| запустити кількох агентів паралельно й злити результати (оркестратор) | `parallel-run` |
| кінець сесії: inbox → довга пам'ять, журнал, handoff | `memory-curate` |
| правки AGENTS.md, CLAUDE.md, `.claude/` | без скіла; незалежне рев'ю — `engineering-review` |
| дизайн (`design-*`), дослідження (`research-*`), QA-приймання (`qa-*`) | за задачею; зміни коду — `engine-change` / `backend-change` |

**Документація (читай, коли тема зачеплена):**
- Схема контенту: екрани, формули, `fig`, `lab`, diag (§9), pool (§10), graph (§11) — `docs/CONTENT_SCHEMA.md`
- Педагогіка — `docs/PEDAGOGY.md`; процес і статуси — `docs/WORKFLOW.md`
- Зображення — `docs/IMAGES.md`; публікація, PWA, артефакт — `docs/PUBLISHING.md`
- Архітектура рушія — `docs/ARCHITECTURE.md`; персоналізація — `docs/PERSONALIZATION.md`, `docs/PERSONALIZATION_QA.md`
- Журнал подій — `docs/EVIDENCE.md`; дизайни — `docs/design/*.md`; бекенд — `docs/BACKEND.md`
- Рішення — `memory/long/decisions.md` (D-NNN); пастки — `memory/long/pitfalls.md`; формат inbox — `memory/README.md`

## 7. Готово означає
- `node tools/build.mjs` запущено, `index.html`, `sw.js`, `content/manifest.json` закомічені (інакше CI не опублікує, а PWA не оновиться).
- Свій розділ, пул чи тест: `node tools/validate.mjs --section|--pool|--diag <id>` — 0 помилок, перш ніж віддати.
- Оркестратор після пакета: `node tools/validate.mjs` — 0 помилок; для змінених розділів `python3 tools/playtest.py --section <id>` зелений.
- Задача в правильній теці, нотатки заповнені, рядок в inbox.
- Інженерна задача: є `reports/review/<task-id>.md` з вердиктом «прийнято» для фінального diff; блокувальні знахідки закриті й перевірені повторно.
- Додаткові критерії ролі чи теми — у відповідному скілі.
