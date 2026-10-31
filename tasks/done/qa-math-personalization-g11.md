---
claimed_from: todo
claimed_at: 2026-10-31T22:55:43.505Z
id: qa-math-personalization-g11
type: qa
subject: math
grade: 11
status: done
claimed_by: agent-qa-g11
created: 2026-10-15
depends_on: [verify-math-personalization-g11, tools-math-personalization-qa, engine-math-grade-plan-context, engine-math-pool-answer-formats]
---
# Прийняти інтеграцію діагностики й тренування 11-го класу

## Межі

Незалежний зміст уже перевірено в verify-math-personalization-g11. Тут приймається робота класу в застосунку, а не повторно розв’язуються всі вправи. Залежить лише від потрібних цьому класу реалізацій; не чекати авторства чи приймання решти класів.

## Що перевірити

- Оркестратор виконав build. Пройти dg11: усе правильно, базова помилка/пропуск із пропуском складнішого, shaky, змішаний результат, «Пізніше», переривання/відновлення, повторний тест. Немає фідбеку, XP або витоку відповіді; результат і переходи плану відповідають даним.
- Для 4-го — baseline без неіснуючих уроків і неправдивої «Міцної бази». Для старших — тільки реалізовані потрібні формати; optional/pending не додаються до обов’язкового тесту чи мінімуму покриття.
- Тренування required-уроків: закриття до проходження, відкриття після, самостійна відповідь, hint/друга спроба, steps/джерело, добір сесії, SRS, повторювані помилки → план. Перевірити клавіатуру й мобільну ширину.
- Зміна класу та перезавантаження зберігають контекст і прогрес. Перевірити доступне міжкласове повторення; якщо потрібний пул попереднього класу ще не готовий — явно записати цю межу. Остаточний dg6 → ms2l4 → реальний pms2 обов’язковий у qa-math-personalization-release.
- Дані цього класу працюють офлайн; немає JS-помилок, битих переходів, зарахованих нульових прогонів. Автоматичний час проходження не є оцінкою часу учня.

## Готово, коли

- [x] reports/qa/math-personalization-g11.md містить версію матриці, перевірені required-об’єкти, команди, сценарії, виправлення та межі перевірки.
- [x] validate, test-learn, застосовні цільові браузерні сценарії й покриття класу зелені; build виконано, згенеровані файли включено в результат.
- [x] Критичні дефекти цього класу закрито; optional/pending і ще недоступні міжкласові пули не приховані та не оголошені виконаними. Фінальне наскрізне приймання — окрема задача.


## Перед роботою

Прочитати AGENTS.md, актуальні handoff та INDEX, релевантні довгу пам’ять і style/math.md; docs/PERSONALIZATION.md, docs/CONTENT_SCHEMA.md §9–10; tasks/README-math-personalization.md. Аналіз цього пакета спирається на origin/main, коміт 8d438ca; у старому коміті 57f9fc6 потрібної реалізації немає. Виконувати на версії з чинними SLID.diag / SLID.pool. Не повертати застарілі обмеження зі старих задач: engine-diag-pool-answers уже done.

## Нотатки виконавця
<!-- Змінені файли; джерела; рішення й обмеження; результати команд; що передано незалежному верифікатору. -->

2026-10-31, agent-qa-g11. Звіт: reports/qa/math-personalization-g11.md. Вердикт — **прийнято**, P1 немає.
- Версія: 46812c7 → 5301949 (змінився лише reports/validate.json). Build у тимчасовому worktree нічого не змінив (150 скриптів, sw ab3932948c, 331 файл). Worktree видалено.
- Змінено лише reports/qa/math-personalization-g11.md, ця задача й рядок у memory/short/inbox.md; reports/validate.json перезаписано повним прогоном validate. app/, tools/, content/ не чіпав.
- Команди (rc 0): personalization-qa --grade 11 --strict (13 req / 4 пули / 104 вправи, missing 0, optional 5, pending 3); test-learn 1353; test-personalization-qa 96; test-validate 25; validate 0 помилок; validate --diag dg11 і --pool pg11m1/m3/m4/m5 0/0 (pg11m2/m6 — rc 1, пулу немає); test-answer-ui content --grade 11 --strict і regression (окремо) green; playtest dg11 і g11m1–m6 (1 тест + 27 уроків).
- Власні Playwright-сценарії: dg11 змішаний / усе правильно / усе пропущено, «Пізніше», resume, retest; перехід 10 → 11, 11 ↔ 10, міграція старого плану; g10m4l2 → pg10m4 в 11 кл.; g11m1l1 → pg11m1 з hint, другою спробою і SRS; повторювані помилки → план; відкладені g11m2l1, g11m5l3, g11m6l1 без тренування; офлайн; 360/320 px, темна тема.
- Вплив відомих вад: R-2 (`$` у підписах lab, 9 екранів уроків), A-2 (`x =` у list) — задачі engine-math-render-tex-gaps, engine-math-answer-g10-issues.
- P3 без задачі (не блокують, рядок в inbox):
  - A-5: стала первісної лише велика латинська C;
  - A-6: мішане число у виразі;
  - A-7 (нове): кирилиця х/а/С/Н у expression → bad;
  - A-8: `√576` → bad, а не form;
  - R-3: показник кореня «√³x²»;
  - D-4': крива по підписах dg11 №6.
- Межі: відкладені пули не перевірялися, бо їх немає; пули 9 кл. перевірено структурно; release-ланцюжок — qa-math-personalization-release.

## Обсяг за матрицею 2026-10-16.v2

Матриця **2026-10-16.v2**, required-частина незалежно прийнята (reports/verify/math-personalization-coverage.md). Знаменник: **13 required-уроків / 4 пулів**, мінімум 78 вправ, ціль 78–104.

Очікувані required-пули: `pg11m1`, `pg11m3`, `pg11m4`, `pg11m5`.

Очікувані файли: `content/math/pool-g11-g11m1.js`, `content/math/pool-g11-g11m3.js`, `content/math/pool-g11-g11m4.js`, `content/math/pool-g11-g11m5.js`; `content/math/diag-g11.js`.

Required-перелік: g11m1l1, g11m1l2, g11m1l3, g11m1l4, g11m3l1, g11m3l2, g11m3l3, g11m4l1, g11m4l2, g11m4l3, g11m4l4, g11m5l1, g11m5l2.
Optional/pending окремим списком: g11m2l1 (pending), g11m2l2 (pending), g11m2l3 (optional), g11m5l3 (pending), g11m6l1 (optional), g11m6l2 (optional), g11m6l3 (optional), g11m6l4 (optional).

Команди: `node tools/validate.mjs --diag dg11`; для кожного переліченого пулу `node tools/validate.mjs --pool <id>`. Відсутній required-пул — помилка; відкладений — окремий неперевірений стан. Повний браузерний QA — через tools-math-personalization-qa, без дублювання раннера.

Необов’язкові, відкладені задачі: [write-math-pool-g11m2](write-math-pool-g11m2.md), [write-math-pool-g11m6](write-math-pool-g11m6.md). Вилучені з required depends_on/очікуваних файлів; їхня відсутність не блокує приймання required. Якщо повертається required, куратор відновлює залежності й повторює приймання.
