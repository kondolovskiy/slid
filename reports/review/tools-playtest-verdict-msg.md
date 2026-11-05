# Рев'ю D-026: tools-playtest-verdict-msg і skills-pitfalls-refs

Рецензент: engineering-reviewer (свіжий контекст, реалізацію не писав). Дата: 2026-11-05.
Перевірено: коміт `3513dd6` (гілка `wt-playtest`, worktree `/home/user/slid-wt-playtest`), увесь diff.
Контекст: `tasks/review/tools-playtest-verdict-msg.md`, `tasks/review/skills-pitfalls-refs.md`, `reports/qa/qa-ci-browser-mutant.md`, `app/app.js` (`setDock`, `check`, `diagHalf`).

## Вердикт

- **tools-playtest-verdict-msg — прийнято.** Блокувальних знахідок немає (P2 і P3 нижче можна виправити окремою задачею).
- **skills-pitfalls-refs — прийнято.** Змінено лише посилання, усі названі розділи існують у вказаних файлах.

## A. tools-playtest-verdict-msg

### Що перевірено читанням

- `tools/verdict.py`: `credited()` порівнює токени класу (`split()`), а не підрядки. `None` і порожній клас означають «не зараховано». `NotCredited` є підкласом `AssertionError`, тож `test-answer-ui.py` падає так само, як від старого `assert` (без перехоплення, traceback, код 1). `verdict_msg` не кидає, коли не вдається прочитати деталі, а вердикт не залежить від цих деталей. Модуль не імпортує playwright: перевірено `import verdict` → `'playwright' in sys.modules == False`.
- Класи `#dock` у рушії (`app/app.js:953–955`, `:1280`, `:1288`, `:1312`, `:1333`). У режимі уроку `info` ставлять лише hyp/poll (`:1288`), бо `diagHalf` (`:1280`) працює тільки в тесті рівня, а там playtest `expect_credited` не викликає. Отже `accept=("ok","info")` у playtest не дає хибного зарахування на оцінюваному екрані. Зараховано лише `ok`. Повну семантику старої перевірки `"ok" in cls or "info" in cls` збережено, а хибне спрацювання на підрядок (`lookup`) прибрано.
- `tools/playtest.py:185–195`. Якщо відповідь не зараховано: `errs.append(msg)` → `broken=True; break` → `failed += 1`, `goto(index.html)`, перехід до наступного уроку. `for … else: broken = False` правильно задає змінну в обох гілках. Гілку хибної спроби на мовних вправах (`"bad" not in cls` → `continue`) не змінено. Код виходу `sys.exit(1 if errs else 0)` дорівнює 1 за будь-якого незарахування, бо кожне незарахування додається в `errs`. Для 0 дограних уроків і `failed > 0` код тепер 1 (є помилки), а не 2. Це коректно: прогін був, він не порожній.
- Перезавантаження не приховує інших помилок поточного уроку, бо урок однаково червоний. Решту його екранів не перевірено, і це чесно відображено в підсумку «ще N не дограно». Обробник `pageerror` лишається на тій самій сторінці.
- `tools/test-answer-ui.py:82–92` (`play_prerequisite`): hyp без вердикту, як і раніше; на інших екранах `accept=('ok',)`, як у старому `'ok' in …`. Імпорт `from verdict import …` працює, бо `sys.path[0]` вказує на `tools/` для `python tools/test-answer-ui.py` (крок CI `browser`) і для `python3 tools/playtest.py`.
- CI, job `build` (`.github/workflows/pages.yml:56`): `python3 tools/test-verdict.py` без `setup-python`. На `ubuntu-latest` системний python3 є, тест використовує лише stdlib і не імпортує playwright, тож job не зламається. Крок «Згенеровані файли закомічені» дивиться лише на `index.html sw.js content/manifest.json`, тому `tools/__pycache__/` на нього не впливає. Локально `__pycache__/` закрито в `.gitignore`.

### Виконані перевірки (мій прогін)

| Команда | Підсумок |
|---|---|
| `python3 -m py_compile tools/playtest.py tools/test-answer-ui.py tools/verdict.py tools/test-verdict.py` | ок |
| `python3 tools/test-verdict.py` | 23/23, код 0 |
| `npm run check` у worktree | EXIT 0, у складі `test-verdict: 23/23` |
| Мутант `credited` → `return True` (копія в scratchpad) | 9/23, тест червоний |
| Мутант `accept` + `"bad"` | 13/23, тест червоний |
| Мутант playtest: `NotCredited` ковтається без `errs.append` | 23/23, **не ловиться** (див. P3-1) |
| Node-двійник автора `repro.cjs` на власній копії `git archive 3513dd6` + мутант `case "choice": return st===s.correct && false`, `u5s1` | EXIT 1. Кожен урок дає рядок `ПОМИЛКА  не зараховано: ukr урок u5s1lN, екран K з M (choice); відповідь …; клас #dock «dock fixed bad»; #action «Спробувати ще раз» (неактивна); відгук «…»`. Після перезавантаження прогін іде далі, `TimeoutError` немає |

Те, що двійник збігається з Python-кодом, я звірив читанням: селектори, `answer`, `expect_credited`, `break` → `goto` → `continue`.

### Знахідки

- **P2-1. Помилки друкуються лише наприкінці прогону** (`tools/playtest.py:233`, як і раніше). Сценарій: урок A не зараховано (рядок уже в `errs`), а далі будь-який непередбачений виняток (справжній флейк `TimeoutError`, збій `goto` під час перезавантаження, зламаний плеєр) виходить із `main()`. Тоді всі зібрані рядки «не зараховано» губляться, у лозі лишається тільки traceback, а саме з ним і боролася задача. Очікувано: друкувати `ПОМИЛКА …` одразу з `flush=True` (або `try/finally` навколо циклу з виведенням `errs`). Не блокує: на мутанті choice перезавантаження працює (двійник: 10 уроків g10s1+u5s1 у автора, 6 уроків u5s1 у мене).
- **P3-1. Код виходу не прив'язаний до `failed`** (`tools/playtest.py:234`). Зараз це коректно, бо кожне `failed += 1` йде після `errs.append`. Але мутант, який ковтає `NotCredited` без `errs.append`, дає зелений прогін, і `test-verdict.py` (статичні перевірки) його не ловить. Дешевий захист: `sys.exit(1 if errs or failed else 0)` і статична перевірка цього в `test-verdict.py`.
- **P3-2. Python-код браузерного шляху локально не запускався** (playwright для Python немає, ставити заборонено). Поведінку підтверджує лише Node-двійник і читання коду. Приймання — план автора в CI (п. 1–2 нотаток задачі: зелений PR і мутант-гілка з `NotCredited` у регресії та «не зараховано» в плейтесті).

## B. skills-pitfalls-refs

Diff `.claude/skills/*`: 7 файлів, по 1 рядку в кожному, змінено лише посилання. Процедури, кроки й критерії не змінено. Для кожного розділу, на який посилається скіл, перевірено його наявність (`grep '^#' memory/long/pitfalls*.md`):

- engine-change → `pitfalls-engine.md`: «Тестування» (:10), «Інструменти й перевірки» (:45, :55, :75), «Рушій і журнал» (:67); `pitfalls.md`: «Паралельна робота й злиття» (:52). ✓
- math-pool-diag → `pitfalls-math.md`: «Формати відповідей пулів» (:52), «Підручники: сторінки» (:45), «Контент і формули» (:77, :89). ✓
- hist-images → `pitfalls-hist.md`: усі шість розділів (:10, :36, :55, :63, :70, :75). ✓
- content-author → `pitfalls-content.md` «Контент і код» (:5) + файл предмета. ✓
- content-verify → «Джерела для верифікації» в `pitfalls-math.md:36` і `pitfalls-hist.md:27`. ✓
- memory-curate → тематичні файли й розділ «Додано <дата>», як у шапці `pitfalls.md`. ✓
- skill-graph: замість переліку verified-ліній тепер посилання на `st` у `lines` (`content/math/graph.js:21,27,33`). ✓ Текст не застаріє.

Знахідки:
- **P3-3.** У нотатках задачі (`tasks/review/skills-pitfalls-refs.md`) написано «зараз frac, prob, tri». Насправді `st: "verified"` має лише лінія frac (`graph.js:21`), а в prob і tri `st: "draft"` (verified лише вузли). У скіл ця помилка не потрапила, але нотатку варто виправити.
- **P3-4 (поза diff, курація).** У `pitfalls-content.md` під заголовками «Лабораторія…» (:12) і «Історія: факти-пастки» (:16) лежать загальні для всіх предметів пастки: позиція правильного `choice` і eyebrow «Здогадка». Content-author тепер просить читати там лише «Контент і код» і розділи ukr, тож math-автор їх не побачить. Так само було й до зміни («Контент і код» і свій предмет). Пропозиція куратору: перенести ці пункти в «Контент і код» або в скілі читати `pitfalls-content.md` повністю (99 рядків).

## Що не перевірено

- Python-прогони `playtest.py` і `test-answer-ui.py --suite regression` у браузері: локально немає Python playwright. Покладаюсь на CI.
- Повний плейтест і тести рівня (`mode ok`) під мутантом. Вердикт по завданню тесту рівня, як і раніше, не перевіряється (обмеження, яке автор зазначив).
