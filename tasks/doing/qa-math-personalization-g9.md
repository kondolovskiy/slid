---
claimed_from: todo
claimed_at: 2026-10-31T15:42:34.425Z
id: qa-math-personalization-g9
type: qa
subject: math
grade: 9
status: todo
claimed_by: agent-qa-g9
created: 2026-10-15
depends_on: [verify-math-personalization-g9, tools-math-personalization-qa, engine-math-grade-plan-context, engine-math-pool-answer-formats]
---
# Прийняти інтеграцію діагностики й тренування 9-го класу

## Межі

Незалежний зміст уже перевірено в verify-math-personalization-g9. Тут приймається робота класу в застосунку, а не повторно розв’язуються всі вправи. Залежить лише від потрібних цьому класу реалізацій; не чекати авторства чи приймання решти класів.

## Що перевірити

- Оркестратор виконав build. Пройти dg9: усе правильно, базова помилка/пропуск із пропуском складнішого, shaky, змішаний результат, «Пізніше», переривання/відновлення, повторний тест. Немає фідбеку, XP або витоку відповіді; результат і переходи плану відповідають даним.
- Для 4-го — baseline без неіснуючих уроків і неправдивої «Міцної бази». Для старших — тільки реалізовані потрібні формати; optional/pending не додаються до обов’язкового тесту чи мінімуму покриття.
- Тренування required-уроків: закриття до проходження, відкриття після, самостійна відповідь, hint/друга спроба, steps/джерело, добір сесії, SRS, повторювані помилки → план. Перевірити клавіатуру й мобільну ширину.
- Зміна класу та перезавантаження зберігають контекст і прогрес. Перевірити доступне міжкласове повторення; якщо потрібний пул попереднього класу ще не готовий — явно записати цю межу. Остаточний dg6 → ms2l4 → реальний pms2 обов’язковий у qa-math-personalization-release.
- Дані цього класу працюють офлайн; немає JS-помилок, битих переходів, зарахованих нульових прогонів. Автоматичний час проходження не є оцінкою часу учня.

## Готово, коли

- [x] reports/qa/math-personalization-g9.md містить версію матриці, перевірені required-об’єкти, команди, сценарії, виправлення та межі перевірки.
- [x] validate, test-learn, застосовні цільові браузерні сценарії й покриття класу зелені; build виконано, згенеровані файли включено в результат.
- [x] Критичні дефекти цього класу закрито; optional/pending і ще недоступні міжкласові пули не приховані та не оголошені виконаними. Фінальне наскрізне приймання — окрема задача.


## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md. Аналіз цього пакета спирається на origin/main, коміт 8d438ca; у старому коміті 57f9fc6 потрібної реалізації немає. Виконувати на версії з чинними SLID.diag / SLID.pool. Не повертати застарілі обмеження зі старих задач: engine-diag-pool-answers уже done.

## Нотатки виконавця

<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

2026-10-31, agent-qa-g9 (worktree на 1e72d2a). Звіт: reports/qa/math-personalization-g9.md. **Клас прийнято, P1 у класі немає; P1 в інструменті T-1 (CI) — передано.**
- Змінені файли: reports/qa/math-personalization-g9.md; ця задача; 3 рядки в memory/short/inbox.md. Build на 1e72d2a нічого не змінив (sw 4027ec6493, 236 файлів; index.html, manifest без змін). app/, tools/ і зміст 9 кл. не редагував; reports/validate.json не комічу.
- Матриця 2026-10-16.v2: 24 required / 7 пулів / 191 вправа + dg9 (27). Optional/pending немає. Пули-передумови dg9 (pg7m1, pg6m4, pg8m5, pg8m3, pg7m5, pg7m3, pg8m4, pg8m6, pms2) є й verified.
- Команди: build 0; validate --diag dg9 і --pool pg9m1…m7 → 0/0 (неіснуючий pg9m8 → exit 1); validate 0 помилок; test-learn 909 ok; personalization-qa --grade 9 --strict 0 (бракує 0); test-answer-ui --grade 9 --strict 0 (191 вправа, 3 хв 10 с); playtest dg9 + g9m1…g9m7 0 × 8 (31 урок + тест); ca.mjs — 187 ключів через ansText → ok. **test-personalization-qa → exit 1 (T-1).**
- Власний Playwright (scratchpad/qa-g9/s1–s8, 360 px): «Пізніше»; змішаний dg9 з оракулом topics/steps/known (number/choice/multi/sort); переривання/відновлення; повторний тест; перший крок → урок 7 кл. при grade 9; графік №20 і діаграма №22 (розміри підписів, перекриття, обрізання, 360/320 px, темна тема, клавіатура); g8m3l1→pg8m3 і ms2l5→pms2 при 9 кл.; g9m2l1→pg9m2 (друга спроба, та сама відповідь, SRS); формати coordinates2 з виразами (c09), exactRoot (з π), expression (рівняння кола, factored), intervalSet (∪, R, ∅), ratio, comparison, list; помилки→план; 9→8→9; міграція dg9 і dg8→9→8; офлайн із першого завантаження (dg9, урок g9m1l1, pg9m1); одиниця в полі dg9.
- Дефекти (змісту не виправляв):
  - **P1 T-1** (інструмент, не клас): test-personalization-qa.mjs:68, 73–79, 82 прив'язані до живого pg9m2 («№13.5(4) ще немає»). Після e6860a4 тест падає, а pages.yml його запускає. Inbox.
  - P2 D-1: дописана одиниця, зокрема після exactRoot/π («√29 см», «12π см»), у 55/191 вправах. Уже є в engine-math-answer-formats-followup.
  - P3 D-2: префікс `AB =` у coordinates2. Є в inbox, задачі немає.
  - P3 D-3: префікс `-n ∈` в intervalSet. Є в inbox, задачі немає.
  - P3 D-4 (нове): у dg9 №20 крива перекриває підписи «−1» і «3».
- Межі: зміст вправ не перерозв'язував (verify-math-personalization-g9, refine-pg9m2); 9→10 не перевіряв; dg6 → ms2l4 → реальний pms2 — у qa-math-personalization-release; «≈ 9 хв» не оцінювався; лише Chromium, без реальних телефонів.
- Незалежному верифікатору нічого не передано: змін змісту немає.

## Обсяг за матрицею 2026-10-16.v2

Матриця **2026-10-16.v2**, required-частина незалежно прийнята (reports/verify/math-personalization-coverage.md). Знаменник: **24 required-уроків / 7 пулів**, мінімум 144 вправ, ціль 144–192.

Очікувані required-пули: `pg9m1`, `pg9m2`, `pg9m3`, `pg9m4`, `pg9m5`, `pg9m6`, `pg9m7`.

Очікувані файли: `content/math/pool-g9-g9m1.js`, `content/math/pool-g9-g9m2.js`, `content/math/pool-g9-g9m3.js`, `content/math/pool-g9-g9m4.js`, `content/math/pool-g9-g9m5.js`, `content/math/pool-g9-g9m6.js`, `content/math/pool-g9-g9m7.js`; `content/math/diag-g9.js`.

Required-перелік: g9m1l1, g9m1l2, g9m1l3, g9m2l1, g9m2l2, g9m2l3, g9m2l4, g9m3l1, g9m3l2, g9m3l3, g9m3l4, g9m4l1, g9m4l2, g9m4l3, g9m5l1, g9m5l2, g9m5l3, g9m6l1, g9m6l2, g9m6l3, g9m6l4, g9m7l1, g9m7l2, g9m7l3.
Optional/pending окремим списком: немає.

Команди: `node tools/validate.mjs --diag dg9`; для кожного переліченого пулу `node tools/validate.mjs --pool <id>`. Відсутній required-пул — помилка; відкладений — окремий неперевірений стан. Повний браузерний QA — через tools-math-personalization-qa, без дублювання раннера.
