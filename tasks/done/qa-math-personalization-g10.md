---
claimed_from: todo
claimed_at: 2026-10-31T22:22:09.168Z
id: qa-math-personalization-g10
type: qa
subject: math
grade: 10
status: done
claimed_by: agent-qa-math-personalization-g10
created: 2026-10-15
depends_on: [verify-math-personalization-g10, tools-math-personalization-qa, engine-math-grade-plan-context, engine-math-pool-answer-formats]
---
# Прийняти інтеграцію діагностики й тренування 10-го класу

## Межі

Незалежний зміст уже перевірено в verify-math-personalization-g10. Тут приймається робота класу в застосунку, а не повторно розв’язуються всі вправи. Залежить лише від потрібних цьому класу реалізацій; не чекати авторства чи приймання решти класів.

## Що перевірити

- Оркестратор виконав build. Пройти dg10: усе правильно, базова помилка/пропуск із пропуском складнішого, shaky, змішаний результат, «Пізніше», переривання/відновлення, повторний тест. Немає фідбеку, XP або витоку відповіді; результат і переходи плану відповідають даним.
- Для 4-го — baseline без неіснуючих уроків і неправдивої «Міцної бази». Для старших — тільки реалізовані потрібні формати; optional/pending не додаються до обов’язкового тесту чи мінімуму покриття.
- Тренування required-уроків: закриття до проходження, відкриття після, самостійна відповідь, hint/друга спроба, steps/джерело, добір сесії, SRS, повторювані помилки → план. Перевірити клавіатуру й мобільну ширину.
- Зміна класу та перезавантаження зберігають контекст і прогрес. Перевірити доступне міжкласове повторення; якщо потрібний пул попереднього класу ще не готовий — явно записати цю межу. Остаточний dg6 → ms2l4 → реальний pms2 обов’язковий у qa-math-personalization-release.
- Дані цього класу працюють офлайн; немає JS-помилок, битих переходів, зарахованих нульових прогонів. Автоматичний час проходження не є оцінкою часу учня.

## Готово, коли

- [x] reports/qa/math-personalization-g10.md містить версію матриці, перевірені required-об’єкти, команди, сценарії, виправлення та межі перевірки.
- [x] validate, test-learn, застосовні цільові браузерні сценарії й покриття класу зелені; build виконано, згенеровані файли включено в результат.
- [x] Критичні дефекти цього класу закрито; optional/pending і ще недоступні міжкласові пули не приховані та не оголошені виконаними. Фінальне наскрізне приймання — окрема задача.


## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md. Аналіз цього пакета спирається на origin/main, коміт 8d438ca; у старому коміті 57f9fc6 потрібної реалізації немає. Виконувати на версії з чинними SLID.diag / SLID.pool. Не повертати застарілі обмеження зі старих задач: engine-diag-pool-answers уже done.

## Нотатки виконавця

<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

2026-10-31, agent-qa-math-personalization-g10 (основне репо, d4480fe → c5f6b2c). Звіт: reports/qa/math-personalization-g10.md. **Клас прийнято, P1 немає.**
- Змінені файли: reports/qa/math-personalization-g10.md; ця задача; 2 рядки в memory/short/inbox.md. app/, tools/, content/ не редагував; build — лише в тимчасовому worktree (без змін: 145 скриптів, sw ed869ffd1e, 326 файлів), worktree видалено. reports/validate.json перезаписано прогоном validate — не комічу.
- Матриця 2026-10-16.v2 (примітка ⁴): 18 required / 6 пулів / 144 вправи + dg10 (26). Optional g10m1l3, g10m2l3 — без вправ, поза знаменником; pending 0. Пули всіх 12 уроків-передумов dg10 verified.
- Команди: validate --diag dg10 і --pool pg10m1…m6 → 0/0 (pg10m7 → exit 1); validate 0 помилок; test-learn 1353 ok; test-personalization-qa 96 ok; test-validate 25 ok; personalization-qa --grade 10 --strict rc 0 (бракує 0); test-answer-ui --suite content --grade 10 --strict rc 0 (144 вправи); --suite regression: 1-й прогін (паралельно з іншими браузерами) rc 1 TimeoutError 7 с у player_qa_checks, 2 окремі прогони rc 0; playtest dg10 + g10m1…m6 rc 0 × 7 (26 уроків + тест); checkAns: 122 ключі ok.
- Власний Playwright s1–s9 (360/320 px): «Пізніше»; змішаний dg10 з оракулом (number/fracin/choice/multi); переривання/відновлення; повторний тест; усе правильно / усе пропущено; малюнки plane/solid; g8m4l2→pg8m4 і ms4l1→pms4 при 10 кл.; g10m1l1→pg10m1 (друга спроба, та сама відповідь, SRS); формати intervalSet/expression/exactRoot/periodicSet/list; помилки→план; 10→9→10; міграція; офлайн; рендер.
- Вплив відомих вад (не виправляв): P2 `{,}` у pg10m5:c06/c08 і `$…$` у підписах лабораторій уроків 10 кл. (engine-math-render-tex-gaps); P3 `+16`, `x =` у list, `(3x+5)4x` (engine-math-answer-g10-issues); п. 1 (validatePool BUDGET) не відтворено; P3 крива поверх підписів поділок у dg10 (як D-4 у g9) — в inbox.
- Межі: зміст не перерозв'язував; 10→11 не перевіряв; dg6 → ms2l4 → pms2 — qa-math-personalization-release; лише Chromium.

## Обсяг за матрицею 2026-10-16.v2

Матриця **2026-10-16.v2**, required-частина незалежно прийнята (reports/verify/math-personalization-coverage.md). Знаменник: **18 required-уроків / 6 пулів**, мінімум 108 вправ, ціль 108–144.

Очікувані required-пули: `pg10m1`, `pg10m2`, `pg10m3`, `pg10m4`, `pg10m5`, `pg10m6`.

Очікувані файли: `content/math/pool-g10-g10m1.js`, `content/math/pool-g10-g10m2.js`, `content/math/pool-g10-g10m3.js`, `content/math/pool-g10-g10m4.js`, `content/math/pool-g10-g10m5.js`, `content/math/pool-g10-g10m6.js`; `content/math/diag-g10.js`.

Required-перелік: g10m1l1, g10m1l2, g10m2l1, g10m2l2, g10m3l1, g10m3l2, g10m3l3, g10m4l1, g10m4l2, g10m4l3, g10m5l1, g10m5l2, g10m5l3, g10m5l4, g10m6l1, g10m6l2, g10m6l3, g10m6l4.
Optional/pending окремим списком: g10m1l3 (optional), g10m2l3 (optional).

Команди: `node tools/validate.mjs --diag dg10`; для кожного переліченого пулу `node tools/validate.mjs --pool <id>`. Відсутній required-пул — помилка; відкладений — окремий неперевірений стан. Повний браузерний QA — через tools-math-personalization-qa, без дублювання раннера.
