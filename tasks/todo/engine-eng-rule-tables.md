---
id: engine-eng-rule-tables
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: todo
claimed_by:
created: 2026-11-19
source: write-eng-g4-e4s1
priority: P2
---
# Таблиці правил у теорії й підказка регістру в `word` (з роботи над еталоном e4s1)

Скіл `engine-change`.

1. style/eng.md радить у 4–5 кл. подавати правило таблицею, але для `<table>` у `.screen` немає CSS (index.html), а `plain()` у tools/lib.mjs не вважає `</tr>`, `</td>`, `<br>` межами речення → хибні «дуже довге речення». Додати CSS таблиці правил (360 px, без горизонтальної прокрутки, тема темна/світла) і межі речень у `plain()`; тест на фікстурі; CONTENT_SCHEMA — дозволена розмітка таблиці.
2. app/lang.js `wordVerdict`: (а) з `keepCase`: помилка лише в регістрі («ukrainian» на ключ «Ukrainian») дає «Almost: check the spelling.»; краще «Check the capital letter.» (англійською — зміст); (б) граматична різниця лише в кінцевому -s/-es («live» на ключ «lives», «aunts» на «aunt») — нейтральне «Almost!» без «spelling» (reports/verify/e4s1.md §6 п. 2). Тести.

Рев'ю D-026 після реалізації.
