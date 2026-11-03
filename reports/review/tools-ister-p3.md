# Рев'ю: tools-ister-p3 (D-026)

_2026-11-03 · рецензент: engineering-reviewer (свіжий контекст, реалізацію не писав)._

**Перевірено:** коміт a9f497c (`git show a9f497c`): app/learn.js, app/app.js, tools/personalization-qa.mjs, validatePool, tools/test-learn.mjs, tools/test-personalization-qa.mjs, tools/test-diff-answers.mjs §6, новий tools/test-ui-ister.mjs, AGENTS.md §3. Злиття 5d7fbe6 перевірено окремо (копія дерева). Також прочитано навколишній код: `practiceItems`, `registry.finalize` (сортування розділів), `viewPractice`, `unlocked`, `diff-answers.mjs:59`, `personalization-qa.mjs` (фільтр класу).

**Вердикт: прийнято.** Блокувальних знахідок немає.

## Що підтверджено
- **Замок уроку не змінився.** Старий вираз: `S.unlockAll || i===0 || done(i) || done(i-1) || known(i) || known(i-1)`. Новий: `S.unlockAll || lessonOpen(sec,i, id=>done(id)||known(id))`, а `lessonOpen = i===0 || open(i) || open(i-1)`. Логічно це той самий вираз. `unlockAll` і далі перевіряється першим. Новий урок, вставлений перед пройденим, замкнений, а пройдений лишається відкритим (node-тест і браузер).
- **Порядок «Тренування».** `practiceGroups` обходить `subject.sections`, а `registry.js:48` сортує їх за класом і `weeks[0]`. Множина розділів та сама, що раніше: `practiceItems` пропускає лише вправи, чий урок лежить у `section`/`also` пулу. Змінився тільки порядок. Кожен розділ показано один раз, розділи без вправ пропущено. Лічильник `cnt` в app.js рахує так само, як раніше.
- **slid.v1:** формат збереження й ключі не змінено. Нові функції чисті й нічого не записують.
- **personalization-qa --grade:** `filter.grade` — ціле число (перевірка в рядку 129), а `lessons.get(...).grade` береться з розділу. Без `--grade` підсумок той самий.
- **validatePool:** id, що не рядок, тепер дає окреме повідомлення. Решта гілок не змінилась.
- Build-дрейфу немає: `npm run check` у копії 5d7fbe6 змінив лише reports/validate.json.

## Виконані перевірки (мої прогони, копії через `git archive` у scratchpad)
- `npm run check` на 5d7fbe6 — exit 0. Підсумки: test-validate 1069, test-diff-answers 41 ok / 0 ✗ (§6: 5 кл. — 2, 6 кл. — 3), validate 0 помилок / 303 попередження, граф math 0/0.
- `node tools/test-ui-ister.mjs` на 5d7fbe6 — 9 ok, 0 ✗.
- `python3 tools/test-answer-ui.py --suite regression --browser /opt/pw-browsers/chromium` на a9f497c — exit 0, «Обрані браузерні сценарії: green». Перший прогін упав по таймауту (load ≈ 9), повторний пройшов без помилок.
- Мутанти (13):
  - learn.js `lessonOpen` без `open(i)` — вбито (test-learn); без `open(i-1)` — вбито.
  - `practiceGroups` без фільтра порожніх розділів — вбито; у зворотному порядку — вбито.
  - personalization-qa без фільтра класу — вбито.
  - validatePool без `typeof` — вбито; без `Array.isArray` — вбито.
  - diff-answers з класом за `p.section` — вбито (4 / 1).
  - app.js зі старим порядком за пулами — вбито (test-ui-ister); `unlocked` без `open(i)` — вбито; `unlocked = true` — вбито.
  - app.js без `S.unlockAll ||` — **вижив** у test-ui-ister. Те саме з `open` = лише `done`, без `known`.

## Знахідки

### P1 — немає.

### P2 — немає щодо цього diff.
- *Поза цим diff (до відома оркестратору):* на злитому дереві 5d7fbe6 `test-answer-ui.py --suite regression` падає в `grade_context_checks` (`tools/test-answer-ui.py:99`). Тест чекає `legacy['rev'] == 2`, а після refine-math-dg6-pct-rev3 (main) diag-g6 має rev 3. На a9f497c той самий сценарій зелений. Причина — зміна змісту в main, а не ця задача. Потрібна окрема задача на оновлення фікстури (рядки 94–99).

### P3 (потім)
- **P3-1.** `app/app.js:165`: гілки `S.unlockAll` і `known` у `unlocked` не покриває жоден швидкий тест. Мутанти вижили в test-ui-ister. Чи вбиває їх `test-answer-ui.py` — не перевіряв. Варто додати до test-ui-ister два сценарії: `unlockAll: true` і `known` з тесту рівня.
- **P3-2.** `app/app.js:408` і `app/learn.js:1671`: `cnt` рахується двічі (у `viewPractice` і в `practiceGroups`). Шаблон бере зовнішній `cnt`. Результат однаковий, але краще брати `cnt` з `practiceGroups`.
- **P3-3.** Порядок розділів у `practiceGroups` залежить від сортування в `registry.finalize`. Тести подають розділи вже впорядкованими, тож сортування в finalize окремо не перевіряється (так було й до цієї задачі). Опис порядку «Тренування» варто додати в docs/PERSONALIZATION.md §3.
- **P3-4.** Назва `tools/test-ui-ister.mjs` прив'язана до задачі, а не до теми. Як загальний Node-Playwright сценарій рушія його варто колись перейменувати й розширювати.

## Не перевірено
- `test-answer-ui.py --suite regression` на злитому 5d7fbe6 до кінця: падає раніше, див. «Поза цим diff».
- Живий екран «Тренування» 5/6 кл. на реальному змісті очима не дивився. playtest.py не запускав: зміст у diff не змінювався.
- Мутанти A3/A4 (`unlockAll`, `known`) проти test-answer-ui.py не запускав.
