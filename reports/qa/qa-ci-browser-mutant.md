# QA: job `browser` у CI червоніє на зламаному рушії (qa-ci-browser-mutant)

Дата: 2026-11-05. Тестова гілка `claude/qa-ci-browser-mutant` (від `e8c30a1`, гілка PR #18), **не зливати**. Запуск — `workflow_dispatch`
(Actions → Pages → Run workflow, `playtest: subset`) через GitHub MCP; ref ≠ main, тож `deploy` пропускається за умовою job.
PR не відкривали, налаштувань репозиторію не змінювали. Прогони — по одному: у workflow `concurrency: cancel-in-progress`, тож
новий dispatch на ту саму гілку скасував би попередній.

## Підсумок

| # | Коміт | Що зламано | Run id | `browser`: регресія | `browser`: плейтест піднабору | `build` | `deploy` | Тривалість run |
|---|---|---|---|---|---|---|---|---|
| 1 | `2ae3154` | `LANG.gapOrder` — тотожна перестановка (цикл Фішера — Єйтса не виконується) | [42002280837](https://github.com/kondolovskiy/slid/actions/runs/42002280837) | ❌ 4 хв 08 с | ✅ 4 хв 23 с (52 уроки, 8 тестів рівня) | ❌ test-lang 4/143 | skipped | 9 хв 19 с |
| 2 | `c4c7588` | `gradeNow`: `case "choice"` завжди `false` (правильний choice не зараховується) | [42003942309](https://github.com/kondolovskiy/slid/actions/runs/42003942309) | ❌ 18 с | ❌ 37 с | ❌ test-hyp (не від мутанта, див. нижче) | skipped | 1 хв 26 с |
| 3 | `805660f` | нічого (обидва мутанти відкочено; `app/` = база) | [42004567865](https://github.com/kondolovskiy/slid/actions/runs/42004567865) | ✅ 4 хв 40 с | див. нижче | ❌ test-hyp (передіснуюче) | skipped | див. нижче |

Обидва мутанти червонять job `browser` і `deploy` не стартує (`needs: [build, browser]`). Висновок про блокування deploy на main
зроблено з `needs` + червоного `browser`; сам deploy-шлях (push у main) цим прогоном не перевірявся — це п. 3 задачі (після першого пуша в main).

## Подробиці

### Мутант 1 — `gapOrder` (`app/lang.js`)
- Регресія: `gaps_order_checks` (tools/test-answer-ui.py:1455) —
  `AssertionError: ('порядок кнопок пропусків з Math.random = 0 — gapOrder не викликано?', [[0, 1], [0, 1, 2], [0, 1, 2]])`.
  Перед ним усі попередні перевірки зелені (≈ 4 хв); набір падає на першому assert — подальші перевірки після gaps_order не виконуються (fail-fast).
- Плейтест піднабору зелений: мовні вправи (u7s6, u6s5) проходяться за `data-o`, порядок кнопок плейтест не перевіряє — очікувано; ловить регресія.
- `build` теж червоний: `node tools/test-lang.mjs` — 4 з 143 (`gapOrder: rnd=0 — обмін` тощо). Тобто цей мутант ловлять два незалежні рубежі.

### Мутант 2 — choice не зараховується (`app/app.js`, `gradeNow`)
- Регресія: `grade_context_checks` → `play_prerequisite` (tools/test-answer-ui.py:87) — голий `AssertionError`
  на `assert 'ok' in …#dock class… or screen.get('hyp')` (без повідомлення — у лозі не видно, який урок/екран).
- Плейтест піднабору: `playtest.py:174` — `TimeoutError: Page.click: Timeout 30000ms exceeded`, `#action` = disabled
  «Спробувати ще раз». Падіння справжнє, але виглядає як `TimeoutError`, а pitfalls називають TimeoutError флейком браузерних
  тестів — є ризик, що його «перезапустять» замість читати лог (коментар у pages.yml саме про це попереджає). Див. пропозицію IDEA.
- `build` червоний з іншої причини — `test-hyp` §0 (див. нижче), node-тести цього мутанта не бачать (gradeNow живе лише в браузері).

### Зелений прогін (run 3) і передіснуюча помилка бази
- Регресія рушія ✅ (4 хв 40 с) — `app/` ідентичний базі `e8c30a1` (`git diff e8c30a1 -- app/` порожній).
- `build` ❌ на базі **без мутантів**, відтворено локально: `node tools/test-hyp.mjs` →
  `ПОМИЛКА §0 екрани уроків: отримано [1623,691,74,1603,1151,173,53], очікувалось [1624,691,74,1604,1152,87,39]` —
  знімок рахунків екранів у tools/test-hyp.mjs:534 не оновлено після контентного коміту `e8c30a1` (style-math-ister-followup: pre у фіналах 7–8 кл., правки дублів).
- Також у `e8c30a1` закомічено застарілий `sw.js` (VERSION `4127e2d953`, а build дає `43b01d0aa9`) — крок «Згенеровані файли закомічені» впав би.
  У тестовій гілці коміт `805660f` несе правильний `sw.js`; у гілці PR #18 це треба виправити окремо (build + коміт).
- Обидва пункти — у гілці PR #18 (`claude/brave-feynman-iql21g`), не на main; до злиття PR #18 CI там буде червоним.

## Відтворити
```
git checkout claude/qa-ci-browser-mutant
# мутант 1: git show 2ae3154 -- app/lang.js ; мутант 2: git show c4c7588 -- app/app.js
# Actions → Pages → Run workflow → гілка claude/qa-ci-browser-mutant, playtest: subset
```
