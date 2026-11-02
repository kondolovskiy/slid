---
claimed_from: todo
claimed_at: 2026-10-31T13:42:24.350Z
id: qa-math-personalization-g8
type: qa
subject: math
grade: 8
status: done
claimed_by: agent-qa-math-personalization-g8
created: 2026-10-15
depends_on: [verify-math-personalization-g8, tools-math-personalization-qa, engine-math-grade-plan-context, engine-math-pool-answer-formats]
---
# Прийняти інтеграцію діагностики й тренування 8-го класу

## Межі

Незалежний зміст уже перевірено в verify-math-personalization-g8. Тут приймається робота класу в застосунку, а не повторно розв’язуються всі вправи. Залежить лише від потрібних цьому класу реалізацій; не чекати авторства чи приймання решти класів.

## Що перевірити

- Оркестратор виконав build. Пройти dg8: усе правильно, базова помилка/пропуск із пропуском складнішого, shaky, змішаний результат, «Пізніше», переривання/відновлення, повторний тест. Немає фідбеку, XP або витоку відповіді; результат і переходи плану відповідають даним.
- Для 4-го — baseline без неіснуючих уроків і неправдивої «Міцної бази». Для старших — тільки реалізовані потрібні формати; optional/pending не додаються до обов’язкового тесту чи мінімуму покриття.
- Тренування required-уроків: закриття до проходження, відкриття після, самостійна відповідь, hint/друга спроба, steps/джерело, добір сесії, SRS, повторювані помилки → план. Перевірити клавіатуру й мобільну ширину.
- Зміна класу та перезавантаження зберігають контекст і прогрес. Перевірити доступне міжкласове повторення; якщо потрібний пул попереднього класу ще не готовий — явно записати цю межу. Остаточний dg6 → ms2l4 → реальний pms2 обов’язковий у qa-math-personalization-release.
- Дані цього класу працюють офлайн; немає JS-помилок, битих переходів, зарахованих нульових прогонів. Автоматичний час проходження не є оцінкою часу учня.

## Готово, коли

- [x] reports/qa/math-personalization-g8.md містить версію матриці, перевірені required-об’єкти, команди, сценарії, виправлення та межі перевірки.
- [x] validate, test-learn, застосовні цільові браузерні сценарії й покриття класу зелені; build виконано, згенеровані файли включено в результат.
- [x] Критичні дефекти цього класу закрито; optional/pending і ще недоступні міжкласові пули не приховані та не оголошені виконаними. Фінальне наскрізне приймання — окрема задача.


## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md. Аналіз цього пакета спирається на origin/main, коміт 8d438ca; у старому коміті 57f9fc6 потрібної реалізації немає. Виконувати на версії з чинними SLID.diag / SLID.pool. Не повертати застарілі обмеження зі старих задач: engine-diag-pool-answers уже done.

## Нотатки виконавця

<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

2026-10-31, agent-qa-math-personalization-g8 (worktree на 68d45b1). Звіт: reports/qa/math-personalization-g8.md. **Прийнято, P1 немає.**
- Змінені файли: reports/qa/math-personalization-g8.md; ця задача; 2 рядки в memory/short/inbox.md. Build на 68d45b1 нічого не змінив (sw ff63f55a86, 228 файлів; index.html, manifest без змін). app/, tools/ і зміст 8 кл. не редагував; reports/validate.json не комічу.
- Матриця 2026-10-16.v2: 21 required / 6 пулів / 167 вправ + dg8 (26). Optional/pending немає. Пули-передумови dg8 (pg7m1, pg7m3, pg7m4, pg7m5, pg7m6, pms4) є й verified.
- Команди (усі exit 0): build; validate --diag dg8 і --pool pg8m1…m6 → 0/0 (неіснуючий pg8m7 → exit 1); validate → 0 помилок; test-learn 839 ok; test-personalization-qa 38 green; personalization-qa --grade 8 --strict (бракує 0); test-answer-ui --grade 8 --strict (--browser /opt/pw-browsers/chromium) — 167 вправ, 3 хв 8 с; playtest dg8 + g8m1…g8m6 (27 уроків + тест); ca.mjs — 152 ключі через ansText → ok.
- Власний Playwright (scratchpad/qa-g8/s1–s7, 360 px): «Пізніше», змішаний dg8 з оракулом topics/steps/known (number/choice/multi/sort), переривання/відновлення, повторний тест, перший крок → урок 7 кл. при grade 8, g7m3l1→pg7m3 і ms4l1→pms4 при 8 кл., g8m1l1→pg8m1 (друга спроба, та сама відповідь не витрачає спробу, SRS, помилки→план), формати expression reduced/simplified, exactRoot, intervalSet, coordinates2, comparison, list з ±/√, choice/multi, 8→7→8, міграція старого плану dg8 і dg7→8→7, офлайн із першого завантаження (dg8, урок g8m3l1, pg8m3), одиниця в полі dg8.
- Дефекти (усі рушій, змісту не виправляв): P2 D-1 дописана одиниця («70°; 110°») → bad, 72/167 вправ з unit, 19 list (→ engine-math-answer-formats-followup, D-2 QA 7 кл.); P2 D-2 нескорочений дріб із коренем `(-6 + 2√14)/2` → ok у pg8m5 (P2-r1 того ж followup); P3 D-3 `k/6p` → bad без пояснення (inbox pg8m1); P3 D-4 formHint simplified «можна спростити» для `1/a^20` у pg8m1:c04 (нове, inbox).
- Межі: зміст вправ не перерозв'язував (verify-math-personalization-g8, refine-g8m3); 8→9 не перевірено (dg9/пули 9 кл. ще в роботі); dg6 → ms2l4 → реальний pms2 — у qa-math-personalization-release; «≈ 9 хв» не оцінювався; лише Chromium, без реальних телефонів.
- Незалежному верифікатору нічого не передано: змін змісту немає.

## Обсяг за матрицею 2026-10-16.v2

Матриця **2026-10-16.v2**, required-частина незалежно прийнята (reports/verify/math-personalization-coverage.md). Знаменник: **21 required-уроків / 6 пулів**, мінімум 126 вправ, ціль 126–168.

Очікувані required-пули: `pg8m1`, `pg8m2`, `pg8m3`, `pg8m4`, `pg8m5`, `pg8m6`.

Очікувані файли: `content/math/pool-g8-g8m1.js`, `content/math/pool-g8-g8m2.js`, `content/math/pool-g8-g8m3.js`, `content/math/pool-g8-g8m4.js`, `content/math/pool-g8-g8m5.js`, `content/math/pool-g8-g8m6.js`; `content/math/diag-g8.js`.

Required-перелік: g8m1l1, g8m1l2, g8m1l3, g8m1l4, g8m2l1, g8m2l2, g8m2l3, g8m2l4, g8m3l1, g8m3l2, g8m3l3, g8m3l4, g8m4l1, g8m4l2, g8m4l3, g8m5l1, g8m5l2, g8m5l3, g8m5l4, g8m6l1, g8m6l2.
Optional/pending окремим списком: немає.

Команди: `node tools/validate.mjs --diag dg8`; для кожного переліченого пулу `node tools/validate.mjs --pool <id>`. Відсутній required-пул — помилка; відкладений — окремий неперевірений стан. Повний браузерний QA — через tools-math-personalization-qa, без дублювання раннера.
