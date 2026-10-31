# Рев'ю: tools-hist-image-error

- Рецензент: незалежний агент engineering-reviewer (реалізацію не писав), 2026-10-31.
- Diff: `git diff fad6c3c a0945db` (гілка `worktree-agent-a4a81bc212431b95f`), коміт a0945db «D-027 блокувальне: урок історії без img — помилка validate».
- Файли: tools/validate.mjs (`IMG_REQUIRED`), tools/test-validate.mjs (новий), .github/workflows/pages.yml, package.json (`check`), AGENTS.md §2, docs/IMAGES.md, sw.js (перегенеровано), memory/short/inbox.md, задача.
- Власні скрипти й копії: `/tmp/claude-0/-home-user-slid/019b4ace-7221-55df-8577-39871bfa5ec5/scratchpad/review-histimg/` (`copy/`, `mut/` — `git archive a0945db`; `base/` — `git archive fad6c3c`; `count.mjs`).

## Вердикт: **прийнято**

Блокувальних знахідок немає. Нижче три зауваження P3. Їх можна закрити окремою задачею, на прийняття вони не впливають.

## Знахідки

**P3-1. Тест не покриває повний прогін `validate.mjs` (без `--section`).** Усі п'ять фікстур запускають валідатор лише з `--section`. Мутація `if (IMG_REQUIRED[c.id] && onlySec && !l.screens.some(s => s.img))` (правило працює тільки для одного розділу) дає test-validate 25/25 ✓. Повний `validate.mjs --quiet` на живому змісті теж дає 0 помилок, бо зараз усі уроки мають `img`. Тобто CI таку регресію не помітив би, доки хтось не додасть урок без фото. Пропозиція: додати хоча б один прогін без `--section` (у тимчасовій теці лежить лише фікстура, тож він швидкий) і перевірити помилку D-027 та rc 1.

**P3-2. Немає фікстури boss-уроку.** За D-027 правило діє для *кожного* уроку, зокрема `boss`, і поточний код так і працює (умови `!l.boss` немає). Проте мутація `IMG_REQUIRED[c.id] && !l.boss && …` дає 25/25 ✓. Зараз усі 34 boss-уроки історії мають `img` (`count.mjs`), тож регресії немає. Пропозиція: додати випадок «hist boss без img → помилка».

**P3-3. Супровідні документи.** (а) Рядок «Контроль» у memory/long/decisions.md D-027 (рядок 132) досі каже «попередження… після доробки перемкнути на error». Його й pitfalls задача згадує, але це файли куратора. Автор правильно не чіпав їх, а лишив DECISION в inbox, тож куратор має оновити їх на `/handoff`. (б) `.claude/agents/qa-runner.md` і README.md («npm run check = build + validate + stats») не згадують test-validate. qa-runner запускає лише test-lab і test-learn, тож новий тест у механічному прогоні не бере участі. Це не регресія, бо так само пропущені test-math і test-personalization-qa. Виправити можна окремо, зміна має бути за розробником.

## Що перевірено і результат

| Що | Як | Результат |
|---|---|---|
| Правило — помилка, rc 1, `--section` | копія a0945db, у `content/hist/g6-g6s1.js` усі `img:` → `xmg:`; `validate.mjs --section g6s1 --quiet` | 6 помилок D-027 (усі 6 уроків, зокрема boss g6s1l6), rc 1 ✓ |
| Правило — помилка, rc 1, повний прогін | та сама копія, `validate.mjs --quiet` | 6 помилок D-027, rc 1 ✓ |
| svg/fig не зараховуються | код `l.screens.some(s => s.img)`; фікстури «лише svg», «лише fig» | помилка D-027 ✓ |
| boss-уроки | код не робить винятку для boss; на живому змісті boss з img 34/34 | ✓ (тестом не покрито, P3-2) |
| Урок без екранів-ілюстрацій | фікстура `{}`: intro/info/choice без ілюстрації | помилка, rc 1 ✓. Урок без `screens` упав би раніше на `l.screens.forEach` (так було й до зміни) |
| Інші предмети не зачеплено | фікстура math без img; `IMG_REQUIRED` = лише `hist` | без D-027, rc 0 ✓ |
| Усі уроки історії мають img | `count.mjs` через `loadContent`: 34 розділи, 179 уроків, 0 без img | ✓; повний validate — 0 помилок, 255 попереджень |
| Тест не порожній | 25 перевірок, 5 випадків; перевірка «фікстура коректна, крім D-027» відсікає хибно-зелене | ✓ |
| Мутація `hist: "warn"` | sed у копії `mut/` | 9/25 провалів ✓ |
| Мутація `IMG_REQUIRED = {}` | | 6/25 ✓ |
| Мутація svg як img (`s.img \|\| s.svg`) | | 2/25 ✓ |
| Мутація fig як img | | 2/25 ✓ |
| Мутація svg і fig як img | | 4/25 ✓ (збігається з автором) |
| Мутація правила й для math | `{ hist: "error", math: "error" }` | 2/25 ✓ |
| Мутація `process.exit(0)` у validate | | 3/25 ✓ |
| Мутація «лише для `--section`» | | **не ловиться** (P3-1) |
| Мутація «boss-винятку» | | **не ловиться** (P3-2) |
| Тимчасову теку прибрано | `TMPDIR=<scratch>/tt`: після успіху 0 тек; після штучного збою (немає icons/icon-192.png → ENOENT у cpSync) — 0 тек | ✓ (обробник `exit`; на SIGINT теку не прибере, але це неважливо) |
| Незалежність від живого змісту, мережі, cwd | копіюються лише tools/, app/, style/, subjects/{hist,math}.js, icon-192.png; мережі немає; запуск із `/` — 25/25 | ✓. Зміна правил для живих розділів не дасть хибного «зеленого»: тест провалиться на «фікстура має бути коректною» |
| Windows/CI-шляхи | `path.join`, `os.tmpdir()`, `process.execPath`, `fileURLToPath`; `/` у `path.join` нормалізується | ✓ (на Windows не запускав) |
| Живий `reports/validate.json` не змінюється тестом | тест пише в tmp; `git status` після тесту чистий | ✓ (змінює лише сам `validate.mjs`, як і раніше) |
| sw.js на базі застарілий | `base/` (fad6c3c) + `build.mjs` → `git diff`: sw.js +49/−1 (img/hist/g11s3…g11s5); збудований sw.js байт у байт = a0945db:sw.js | ✓, перегенерацію обґрунтовано |
| AGENTS.md §2 | рядок команди в стилі сусідніх, опис точний | доречно ✓ |
| docs/IMAGES.md | текст відповідає поведінці (помилка, svg/fig не рахуються, тест) | ✓ |

## Виконані перевірки (мій прогін у worktree на a0945db)

- `node tools/build.mjs` — 138 скриптів, sw.js e122de9328, 319 файлів, rc 0
- `node tools/test-math.mjs` — 17/17, rc 0
- `node tools/test-lab.mjs` — 69/69, rc 0
- `node tools/test-learn.mjs` — 1292 перевірки, rc 0
- `node tools/test-personalization-qa.mjs` — 96 checks green, rc 0
- `node tools/test-validate.mjs` — 25/25, rc 0
- `node tools/validate.mjs --quiet` — 0 помилок, 255 попереджень, rc 0
- Крок CI «Згенеровані файли закомічені»: `git diff --exit-code -- index.html sw.js content/manifest.json` після build — rc 0
- Кроки «Зібрати сайт» і deploy diff не змінює. Плейтест не запускав, бо зміна не торкається рушія чи змісту.
- Гілка main (54225a6) — предок бази, тож конфлікту в sw.js під час злиття не буде.
