---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.922Z
id: tools-playtest-verdict-msg
type: tools
subject: engine
status: done
claimed_by: eng-playtest
created: 2026-11-05
depends_on: []
---
# playtest.py / test-answer-ui.py: явне повідомлення «не зараховано» замість TimeoutError

Скіл `engine-change`; рев'ю D-026.
1. playtest.py: після «Перевірити» явно перевіряти вердикт і падати з «урок <id>, екран N не зараховано», а не `TimeoutError: Page.click … #action disabled «Спробувати ще раз»` (легко сплутати з флейком).
2. test-answer-ui.py:87 (play_prerequisite) — голий `assert` → повідомлення з id уроку й екрана.
Перевірка — мутант choice (як у reports/qa/qa-ci-browser-mutant.md) дає зрозуміле повідомлення. Браузерні прогони — у CI (локально немає Python playwright).

Джерело: inbox 05.11 qa-ci-browser-mutant IDEA.

## Нотатки виконавця
eng-playtest, 2026-11-05 (worktree wt-playtest).

**Що змінено**
- Новий `tools/verdict.py` (без залежності від playwright): `expect_credited(page, where, given, accept=("ok","info"))` читає клас `#dock` по токенах (не підрядком) і кидає `NotCredited` (підклас `AssertionError`) з текстом `не зараховано: <предмет> урок <id>, екран N з M (<тип>); відповідь <що дано>; клас #dock «…»; #action «Спробувати ще раз» (неактивна); відгук «…»`. Збій читання деталей не ховає вердикт.
- `tools/playtest.py`: `answer()` повертає дану відповідь; після «Перевірити» — `expect_credited`; незарахований екран → помилка з повідомленням, урок не догравається (перезавантаження `index.html`, slid.v1 лишається), прогін іде до наступного уроку. Раніше — `errs.append` без деталей і `pg.click("#action")` на неактивній кнопці → `TimeoutError` 30 с і обрив усього прогону. Підсумок: «Пройдено уроків: X (ще Y не дограно: …)»; 0 дограних, але Y > 0 — не «нічого не пройдено» (код 1 з помилками, не 2).
- `tools/test-answer-ui.py` `play_prerequisite`: голий `assert 'ok' in … or hyp` → `expect_credited(..., accept=('ok',))` (hyp — як раніше, без вердикту); повідомлення з `урок ms2l4, екран N з M`.
- `.gitignore`: `__pycache__/` (імпорт verdict.py пише байткод у tools/).
- `tools/test-verdict.py` (23 перевірки, фальшива сторінка): ok/info, мутант bad із неактивною «Спробувати ще раз», accept=ok, токени vs підрядок, None-клас, зламане читання `#action`, статичні перевірки, що обидва прогони йдуть через `expect_credited` і в `play_prerequisite` немає голого `assert`. Додано в `npm run check` і в `pages.yml` (job build, `python3`).

**Перевірки**
- `python3 -m py_compile tools/playtest.py tools/test-answer-ui.py tools/verdict.py tools/test-verdict.py` — ок.
- `python3 tools/test-verdict.py` — 23/23; на старих playtest.py/test-answer-ui.py (git show HEAD:…) — 20/23 (статичні падають); мутант `credited` підрядком — 22/23.
- Python playwright у контейнері немає (не ставив). Сценарій відтворено Node-двійником (`require('playwright')`, ті самі селектори й логіка вердикту) на копіях дерева (`git archive HEAD` + build у scratchpad `playtest/{base,mut}`), мутант як у qa-ci-browser-mutant: `case "choice": return st===s.correct && false`.
  - base, `g10s1,u5s1`: 10 уроків, EXIT 0 (41 с); base `ms2`: 7 уроків.
  - mut, `g10s1,u5s1`: 0 дограно (10 не дограно), EXIT 1 за 20 с, 10 рядків на кшталт `ПОМИЛКА  не зараховано: hist урок g10s1l1, екран 2 з 10 (choice); відповідь 1; клас #dock «dock fixed bad»; #action «Спробувати ще раз» (неактивна); відгук «Обери інший варіант і перевір ще раз.»`; mut `ms2`: `… math урок ms2l4, екран 2 з 9 (choice) …` (той самий урок, що play_prerequisite).
  - Стара логіка (OLD=1) на мутанті: `TimeoutError page.click: Timeout 30000ms exceeded` — відтворює звіт QA.

**План перевірки в CI (приймання, бо локально Python-браузера немає)**
1. PR з цим комітом: job `browser` зелений (регресія + плейтест піднабору; змінено tools/, тож піднабір — покриття типів екранів), job build — `test-verdict 23/23`.
2. Тестова гілка від цього коміту + мутант choice (як c4c7588), Run workflow `playtest: subset`: очікується плейтест піднабору ❌ з рядками `ПОМИЛКА  не зараховано: …` і без `TimeoutError`, регресія ❌ з `NotCredited: не зараховано: play_prerequisite: урок ms2l4, екран 2 з 9 (choice) …`. Гілку не зливати.

**Обмеження**: тест рівня (mode ok) у playtest.py вердикт по завданню не перевіряє — як і раніше, ловиться планом («якусь відповідь не зараховано»). Інші місця test-answer-ui.py з `assert 'ok' in …` (поза play_prerequisite) не чіпав — поза задачею.
- `npm run check` у worktree — EXIT 0 (test-verdict 23/23 у складі).

**Після рев'ю (a5afce3, прийнято; закрито P2-1, P3-1)**
- P2-1: `except NotCredited` друкує `ПОМИЛКА  не зараховано: …` одразу (`flush=True`), а не копить у `errs` — необроблений виняток пізніше (TimeoutError деінде) не загубить уже знайдене.
- P3-1: `sys.exit(1 if errs or failed else 0)`.
- test-verdict.py: +3 статичні перевірки (26/26): except друкує з flush і обриває урок; `failed += 1`; код виходу з `failed`. Мутанти в копії (scratchpad playtest/m2): except ковтає (`pass; broken = False`) → 25/26; exit без failed → 25/26; print без flush → 25/26.
- `npm run check` — EXIT 0.
