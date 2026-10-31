---
claimed_from: todo
claimed_at: 2026-10-31T12:28:18.807Z
id: qa-math-personalization-g7
type: qa
subject: math
grade: 7
status: todo
claimed_by: agent-qa-math-personalization-g7
created: 2026-10-15
depends_on: [verify-math-personalization-g7, tools-math-personalization-qa, engine-math-grade-plan-context, engine-math-pool-answer-formats]
---
# Прийняти інтеграцію діагностики й тренування 7-го класу

## Межі

Незалежний зміст уже перевірено в verify-math-personalization-g7. Тут приймається робота класу в застосунку, а не повторно розв’язуються всі вправи. Залежить лише від потрібних цьому класу реалізацій; не чекати авторства чи приймання решти класів.

## Що перевірити

- Оркестратор виконав build. Пройти dg7: усе правильно, базова помилка/пропуск із пропуском складнішого, shaky, змішаний результат, «Пізніше», переривання/відновлення, повторний тест. Немає фідбеку, XP або витоку відповіді; результат і переходи плану відповідають даним.
- Для 4-го — baseline без неіснуючих уроків і неправдивої «Міцної бази». Для старших — тільки реалізовані потрібні формати; optional/pending не додаються до обов’язкового тесту чи мінімуму покриття.
- Тренування required-уроків: закриття до проходження, відкриття після, самостійна відповідь, hint/друга спроба, steps/джерело, добір сесії, SRS, повторювані помилки → план. Перевірити клавіатуру й мобільну ширину.
- Зміна класу та перезавантаження зберігають контекст і прогрес. Перевірити доступне міжкласове повторення; якщо потрібний пул попереднього класу ще не готовий — явно записати цю межу. Остаточний dg6 → ms2l4 → реальний pms2 обов’язковий у qa-math-personalization-release.
- Дані цього класу працюють офлайн; немає JS-помилок, битих переходів, зарахованих нульових прогонів. Автоматичний час проходження не є оцінкою часу учня.

## Готово, коли

- [x] reports/qa/math-personalization-g7.md містить версію матриці, перевірені required-об’єкти, команди, сценарії, виправлення та межі перевірки.
- [x] validate, test-learn, застосовні цільові браузерні сценарії й покриття класу зелені; build виконано, згенеровані файли включено в результат.
- [x] Критичні дефекти цього класу закрито; optional/pending і ще недоступні міжкласові пули не приховані та не оголошені виконаними. Фінальне наскрізне приймання — окрема задача.


## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md. Аналіз цього пакета спирається на origin/main, коміт 8d438ca; у старому коміті 57f9fc6 потрібної реалізації немає. Виконувати на версії з чинними SLID.diag / SLID.pool. Не повертати застарілі обмеження зі старих задач: engine-diag-pool-answers уже done.

## Нотатки виконавця

<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

2026-10-31, agent-qa-math-personalization-g7 (worktree на f8fe74a). Звіт: reports/qa/math-personalization-g7.md. **Прийнято, P1 немає.**
- Змінені файли: reports/qa/math-personalization-g7.md; content/math/diag-g7.js (D-5: title cur-g7m6 «Ознаки» → «Паралельні прямі», лише підпис теми); sw.js (build, версія 8e71e259ae); ця задача; 3 рядки в memory/short/inbox.md. app/ і tools/ не редагував; reports/validate.json не комічу.
- Матриця 2026-10-16.v2: 26 required / 8 пулів / 206 вправ + dg7 (28). Optional/pending немає. Пули-передумови dg7 (pg6m3, pg6m4, pg6m5, pms0b) є й verified.
- Команди (усі exit 0): build; validate --diag dg7 і --pool pg7m1…m8 → 0/0 (неіснуючий pg7m9 → exit 1); validate → 0 помилок; test-learn 839 ok; test-personalization-qa 27 green; personalization-qa --grade 7 --strict (бракує 0); test-answer-ui --grade 7 --strict (--browser /opt/pw-browsers/chromium) — 206 вправ, 3 хв 44 с; після D-5 — test-answer-ui --diag dg7 --strict, playtest dg7; playtest dg7 + g7m1…g7m8 (34 уроки + тест).
- Власний Playwright (scratchpad/qa-g7/s1–s6, 360 px): «Пізніше», змішаний dg7 з оракулом topics/steps/known (lab/sort/multi), переривання/відновлення, повторний тест, перший крок → урок 6 кл. при grade 7, g6m4l4→pg6m4 і ms0bl2→pms0b при 7 кл., g7m1l1→pg7m1 (hint/друга спроба, та сама відповідь не витрачає спробу, SRS, помилки→план), формати expression+form/coordinates2/list/comparison/choice/multi, 7→6→7, міграція старого плану dg7 і dg6→7→6, офлайн із першого завантаження (dg7, урок g7m3l1, pg7m3).
- Дефекти: P2 D-1 lab plane у dg7 недоступні з клавіатури (→ engine-player-a11y-followup); P2 D-2 дописана одиниця («115°», «7 см») → bad, 63/206 вправ 7 кл. з unit (→ engine-math-answer-formats-followup); P3 D-3 «√» на expression/coordinates2 у 7 кл.; P3 D-4 formHint expanded «Розкрий дужки» без дужок; P3 D-5 (зміст) виправлено. Дефекти D-1…D-4 QA 5 кл. на цій версії виправлено.
- Межі: зміст вправ не перерозв'язував (verify-math-personalization-g7); 7→8 не перевірено (dg8/пули 8 кл. ще в роботі); dg6 → ms2l4 → реальний pms2 — у qa-math-personalization-release; час «≈ 10 хв» не оцінювався; лише Chromium, без реальних телефонів.
- Незалежному верифікатору нічого не передано: правка D-5 — лише підпис теми (без зміни завдань і ключів); куратору — синхронізувати title у матриці (inbox).

## Обсяг за матрицею 2026-10-16.v2

Матриця **2026-10-16.v2**, required-частина незалежно прийнята (reports/verify/math-personalization-coverage.md). Знаменник: **26 required-уроків / 8 пулів**, мінімум 156 вправ, ціль 156–208.

Очікувані required-пули: `pg7m1`, `pg7m2`, `pg7m3`, `pg7m4`, `pg7m5`, `pg7m6`, `pg7m7`, `pg7m8`.

Очікувані файли: `content/math/pool-g7-g7m1.js`, `content/math/pool-g7-g7m2.js`, `content/math/pool-g7-g7m3.js`, `content/math/pool-g7-g7m4.js`, `content/math/pool-g7-g7m5.js`, `content/math/pool-g7-g7m6.js`, `content/math/pool-g7-g7m7.js`, `content/math/pool-g7-g7m8.js`; `content/math/diag-g7.js`.

Required-перелік: g7m1l1, g7m1l2, g7m1l3, g7m2l1, g7m2l2, g7m2l3, g7m3l1, g7m3l2, g7m3l3, g7m3l4, g7m4l1, g7m4l2, g7m4l3, g7m5l1, g7m5l2, g7m5l3, g7m6l1, g7m6l2, g7m6l3, g7m7l1, g7m7l2, g7m7l3, g7m7l4, g7m8l1, g7m8l2, g7m8l3.
Optional/pending окремим списком: немає.

Команди: `node tools/validate.mjs --diag dg7`; для кожного переліченого пулу `node tools/validate.mjs --pool <id>`. Відсутній required-пул — помилка; відкладений — окремий неперевірений стан. Повний браузерний QA — через tools-math-personalization-qa, без дублювання раннера.
