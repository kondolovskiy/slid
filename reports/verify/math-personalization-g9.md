# Математика 9 кл. — підсумок незалежної перевірки змісту (verify-math-personalization-g9)

Дата: 2026-10-31. Матриця **2026-10-16.v2** (з примітками ¹ ² від 31.10). Кожен файл перевіряв окремий верифікатор зі свіжим контекстом, не автор.

| Об'єкт | Звіт | Обсяг | Виправлення верифікатора | Статус |
|---|---|---|---|---|
| dg9 | reports/verify/dg9.md | 27 (10 pre × 2 + 7 cur) | №16 Г: твердження уточнено для вироджених випадків | verified |
| pg9m1 | reports/verify/pg9m1.md | 24 | c01: «переріз, або перетин» | verified |
| pg9m2 | reports/verify/pg9m2.md | 32 | d09: опора векторної рівності через координати в умові | verified |
| pg9m3 | reports/verify/pg9m3.md | 32 | b04: hint видавав вершину (2; −3) | verified |
| pg9m4 | reports/verify/pg9m4.md | 24 | шапка: номери рисунків | verified |
| pg9m5 | reports/verify/pg9m5.md | 24 | a08: шлях без нерівності в hint; c08 adapted | verified |
| pg9m6 | reports/verify/pg9m6.md | 32 | b01, b02: R/r у steps | verified |
| pg9m7 | reports/verify/pg9m7.md | 23 | a08: однозначність (720, не 719) | verified |

Покриття: 24 required-уроки, 7 пулів, 191 вправа. Джерела: Мерзляк, Якір «Алгебра 9» і «Геометрія 9» (Гімназія, 2026, наказ МОН № 110 від 27.01.2026), дзеркало 4book; друкована сторінка = PDF.

Оркестратор: у verified-уроці g9-g9m2.js (рядки 74, 76, 78, 482) подвоєно бекслеш у `\Delta` і `\overrightarrow` — учень бачив «Delta»; задача tools-validate-tex-escapes.

## Прогалини форматів і рішення людини (31.10)
Верифікатори pg9m2 і pg9m6 незалежно підтвердили: чесних вправ немає. Рішення: прибрати expression з g9m2l1, coordinates2 з g9m6l1/l2, exactRoot з g9m6l3 (примітка ² у матриці); для **g9m2l3** — розширити рушій (engine-coordinates2-expression), після чого №13.5(4) $(p - m; k - n)$ додається в pg9m2. Доки так, `personalization-qa --grade 9 --strict` — rc 1 з одним рядком (pg9m2/g9m2l3: expression).

## Відкриті питання (inbox)
Матриця: formats g9m1l1 (+comparison), g9m4l3 (+list), sk g9m3l4 (eq/func); залежність g9m5 від g9m3l4. Уроки: g9m4l1 таблиця sin/cos 30°/45°/60°; g9m6l2 r → R; «переріз/перетин» у глосарії; кругова діаграма й мода/медіана в g9m7. Рушій: одиниці в полі; «-0,(3)»; `-n ∈ […)`. Ненадійне джерело: uk LibreTexts 908 (напрям зсуву). Час — неперевірена оцінка. Браузерне приймання — qa-math-personalization-g9. Approved — лише вчитель.
