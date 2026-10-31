---
write_group: personalization-shared
id: engine-coordinates2-expression
type: engine
subject: math
status: review
claimed_by: engineer-coord-expr
created: 2026-10-31
depends_on: [verify-math-personalization-g9]
---
# coordinates2 з компонентами-виразами (рушій) + №13.5(4) у pg9m2/g9m2l3

Рішення людини (2026-10-31): закрити прогалину expression у g9m2l3 розширенням рушія. Підручник: Мерзляк, Якір «Геометрія 9» (2026), №13.5(4), відповідь $(p - m; k - n)$ (див. reports/verify/pg9m2.md).

1. **Рушій (app/learn.js checkAns / формат coordinates2):** дозволити компоненти пари, що є виразами зі змінними (як answerKind "expression"), з тією самою канонічною перевіркою еквівалентності, межами 2048 біт / ~0,8 с і повідомленнями form. Числові coordinates2 — без змін поведінки. Опис ключа в docs/CONTENT_SCHEMA.md §10; validate має перевіряти такий ключ.
2. **personalization-qa:** пара з компонентами-виразами закриває вимогу expression уроку (так само обережно, як rootList: лише якщо checkAns справді розбирає компоненти як вирази; наближення/неканонічне — ні).
3. Регресії: tools/test-learn.mjs, tools/test-personalization-qa.mjs, tools/test-answer-ui.py (поле coordinates2 з виразом у браузері: введення, клавіші змінних).
4. Незалежне рев'ю (D-026). Контент (додавання №13.5(4) у pool-g9-g9m2.js) — окремо автором і верифікатором після злиття рушія.

## Нотатки виконавця
engineer-coord-expr, 2026-10-31. База: a12bfbd.

**Рушій (app/learn.js).**
- `splitPair` — компоненти верхнього рівня (назва точки `A(…)` і зовнішні дужки знімаються, лише якщо дужка закривається в кінці запису: `k(m − n); 2` — дві компоненти). `symPair` — ключ символьний, якщо обидві компоненти розбираються деревом і хоч одна містить змінну; інакше `null`, і `checkAns` іде старим числовим шляхом `parsePoint` без жодної зміни (coordinates3 не зачеплено).
- `pairSym`: компонента ключа зі змінною — як `expression` (`parseExpr` + `sameExpr`, `exprForm(s.form)`; рівняння — `bad`; невідома `form` — `bad`); числова компонента символьного ключа — як у числовому coordinates2 (`elemOf`, `tidy`). Результат пари — найгірший із компонент. Межі: `BUDGET = 50000` на компоненту; час — перша компонента до половини залишку DEADLINE, друга до кінця, після `sameExpr` DEADLINE не виходить за межу компоненти (catch у sameExpr дає +400 мс лише всередині цієї межі) → уся пара ≤ ~0,8 с (найважчий пробний ввід ~790 мс).
- `formHint`: якщо «form» дала компонента-вираз — підказка форми expression; інакше чинна про корені.
- `pairKey(s)` (експорт): `[{ expr, vars, tidy, text }]` або null — для personalization-qa і клавіш поля. Не реентерабельна щодо checkAns (скидає DEADLINE), як listKey.
- `validatePool`: `form` дозволено для coordinates2 із символьним ключем; `factored` — кожна компонента-вираз має бути добутком; компонента-рівняння — помилка; розбір і канонічність ключа — через чинне «ключ сам дає ok».

**Плеєр (app/app.js).** Для символьного ключа coordinates2 до кнопок `( ; ) − / √` додаються `^`, `·` і літери змінних ключа (відсортовані), підказка «(p − m; k − n)… Множення — · або без знака (2a), степінь — ^». Числовий coordinates2 — без змін.

**personalization-qa.** `exprPair(it, learn)`: вимогу `expression` закриває coordinates2, якщо `pairKey` бачить компоненту-вираз, ключ канонічний, ключ → `ok`, `0 + (…)` → не `bad`, `(…) + змінна` і `(…) + 0,0000001` → `bad`. Мутації-стуби (checkAns «усе ok», порівняння рядка ключа, наближення ok, без pairKey) → не рахується.

**Регресії.** test-learn: +~70 перевірок (еквівалентність, порядок, наближення, форма, змішана пара, межі часу/біт, pairKey, validatePool) і знімок `tools/fixtures/coordinates2-numeric.json` — checkAns старого рушія a12bfbd на 44 реальних ключах контенту + 5 синтетичних (корені, π, дроби, масив), 1902 виклики (ok 559 / bad 1322 / form 21) → 0 розбіжностей; генератор знімка — scratchpad (не в репо), знімок не перегенеровується на новому рушії. Нові числові ключі контенту поза знімком мають іти числовим шляхом (pairKey === null). test-personalization-qa: +18 перевірок. test-answer-ui: 2 fixture (пара виразів; пара з form simplified) — кнопки ^, ·, літери, вставка літери в місце курсора, тотожний запис, підказка form; числовий coordinates2 — точний набір кнопок без літер. На старій версії: test-learn падає (20 ПОМИЛКА, потім TypeError — немає pairKey), test-personalization-qa падає (рядок `!exprGap(withPair('(p - m; k - n)'))`), також зі старим personalization-qa і новим рушієм.

**Не змінено:** content/ уроків і пулів, memory/long, матриця. g9m2l3 expression лишається «БРАКУЄ» до вправи №13.5(4) у pool-g9-g9m2.js (окремо автором і верифікатором після злиття).

**Для рев'ю / межі:** арифметика в числовій компоненті символьного ключа не зараховується (`(2a; 1 + 2)` → bad), як у числовому coordinates2; без `form` компонента-вираз приймає будь-який тотожний запис (`p − m + 0·q`), як expression. Роздільник «,» без «;» — як у числовому шляху (десяткова кома тоді ламає розбір).

**Прогін (власний, worktree):** build rc 0; test-learn 907 перевірок rc 0; test-personalization-qa 56 rc 0; validate 0 помилок rc 0; personalization-qa --grade N --strict: 4/5/7/8 rc 0, 9 rc 1 лише «БРАКУЄ: pg9m2/g9m2l3: немає формату expression»; test-answer-ui.py --browser /opt/pw-browsers/chromium (повний) rc 0, «Формати відповідей: 12 fixture-вправ». Старий рушій + нові регресії: test-answer-ui --suite regression rc 1 (validatePool відхиляє fixture «(p - m; k - n)» і form для coordinates2).
