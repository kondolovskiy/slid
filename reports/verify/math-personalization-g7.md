# Математика 7 кл. — підсумок незалежної перевірки змісту (verify-math-personalization-g7)

Дата: 2026-10-31. Матриця **2026-10-16.v2**. Кожен файл перевіряв окремий верифікатор зі свіжим контекстом, не автор. Оркестратор зібрав підсумок і прогнав команди.

| Об'єкт | Звіт | Обсяг | Виправлення верифікатора | Статус |
|---|---|---|---|---|
| dg7 | reports/verify/dg7.md | 28 (10 pre × 2 + 8 cur) | — | verified |
| pg7m1 | reports/verify/pg7m1.md | 24 | c06: хибний факт підручника (№88 — «три найвищі вершини»; третя — Піп Іван) → «вершини Чорногори» | verified |
| pg7m2 | reports/verify/pg7m2.md | 24 | adapted для a04, c01, c02, c05 | verified |
| pg7m3 | reports/verify/pg7m3.md | 32 | — (expression/form: 259 сценаріїв checkAns без розбіжностей) | verified |
| pg7m4 | reports/verify/pg7m4.md | 24 | означення висоти в b04, b07, b08 (D-019); hint b06, a02 | verified |
| pg7m5 | reports/verify/pg7m5.md | 24 | ключ c08 з десятковою комою; «ламана» в b07/b08 | verified |
| pg7m6 | reports/verify/pg7m6.md | 22 | «за ознакою» a05; означення бісектриси й hint c08 | verified |
| pg7m7 | reports/verify/pg7m7.md | 32 | adapted b07; hint d06 | verified |
| pg7m8 | reports/verify/pg7m8.md | 24 | — | verified |

Покриття: усі required-уроки 7 кл. мають пул (206 вправ). Optional/pending у 7 кл. немає. Джерела: Мерзляк, Якір «Алгебра 7» і «Геометрія 7» (2024), дзеркало 4book; друкована сторінка = PDF.

Команди оркестратора: QA до верифікації (test-learn, validate 0/0 для dg7 і 8 пулів, playtest dg7, test-answer-ui --grade 7 — зелено); після правок `personalization-qa --grade 7 --strict` — rc 0; build. Браузерне приймання після правок — qa-math-personalization-g7. Approved — лише вчитель.

Відкриті питання (inbox): рушій — одиниця в полі («55°», «7 см», «8 %»), геометричні fig у пулах, рисунок транспортира; уроки — бісектриса/висота/медіана й рівність відповідних елементів (g7m2, g7m4), «AC + CB = AB» (ms0bl1/g7m2l1), контрприклад (g7m2l3), перетин з віссю x і ламана (g7m5), «пряма може не мати спільних точок з колом» (g7m8l2), множення рівняння на число (g7m7l4), множення одночленів і віднімання многочленів (g7m3l2); матриця — формати g7m5l3 (coordinates2, expression), sk g7m7l2 (eq vs func), назва cur-g7m6; підручник — №88 (вершини), №358(2) (кути).
