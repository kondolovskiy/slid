---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.079Z
id: engine-list-p3
type: engine
subject: math
status: review
claimed_by: eng-listp3
created: 2026-11-05
depends_on: []
---
# Рушій `list` / `scale`: P3 з рев'ю engine-list

Скіл: `engine-change`. Джерело: reports/review/engine-list-quadratic.md (P3), inbox 05.11 orchestrator.

1. `LIST_PM` — дозволити `\s*` після «=» (перенос рядка з UI недосяжний, але регулярний вираз несиметричний).
2. Тест на масштаб `1 : 100000` при `scale: true` (зараз лише 1 : 10000).
3. `validatePool` (tools/validate.mjs): ± разом з `ordered: true` — помилка (поведінка невизначена).
4. `inputmode="decimal"` на телефоні не дає «:» — для вправ зі `scale` (і ratio) інший inputmode або кнопка «:»; перевірити в мобільному профілі Playwright.

Готово: тести зелені, diff-answers --old HEAD 4–11 без непояснених змін, рев'ю D-026 «прийнято».

## Нотатки виконавця
Виконавець: eng-listp3, гілка wt-listp3 (worktree /home/user/slid-wt-listp3), 2026-11-05.

**Зміни**
1. `LIST_PM` (app/learn.js): після «=» — атомарний `${WS("s4")}`, як решта рядів пробілів. `"x₁,₂ =\n±3"`, `"x₁,₂ =\n ±3"` при ключі `±3` знову `ok` (як до engine-list-quadratic); `"x₁,₂ =\n±2"`, `"x₁,₂ =\n\n±3 ="` — `bad`. Простий `\s*` тут квадратичний (хвіст `[^;\n=]*` теж їсть пробіли): мутант дає 7,3 с на 50 тис. і 29,8 с на 100 тис. символів.
2. test-learn: `[SC, "1 : 100000", "bad"]`, `[SC, "1 : 100 000", "bad"]` — ловить мутант `r[1].n >= a.n` (P3-2).
3. `validatePool` (app/learn.js; tools/validate.mjs бере саме його): `ordered: true` разом із `±`/`∓` у ключі (рядок або елемент масиву) — помилка «ordered не поєднується з «±»/«∓» у ключі…». `[-3, 3]` з ordered і `±3` без ordered — коректні. У змісті `ordered` ще немає → нових помилок validate 0.
4. Телефон: для `number` зі `scale: true` поле лишається `inputmode="decimal"` (цифрова клавіатура), під ним — кнопка «:» (дописує в кінець, як інші числові кнопки) і підказка «Масштаб можна записати й повністю — через двокрапку (кнопка «:»).» (`numberHelp`; без числа-прикладу, тож «підказка ≠ ключ» не зачеплено). `ratio` уже мав «:» у ANS_UI (inputmode text, вставка в місце курсора) — не змінював. Без `scale` кнопки «:» немає.
Документація: CONTENT_SCHEMA §10 (scale — кнопка «:»; ordered + ± — помилка; перенос після «=» у `x₁,₂ =`).

**Тести**
- tools/test-learn.mjs: P3-1 (5 записів), P3-2, P3-3 (3 відхилення, 3 коректні), numberHelp scale; швидкодія list-quadratic + ключ SC і нові довгі записи (`x₁,₂ =` + пробіли + `=`/`;`/`±1`/`±…`, переноси, `1 :` + пробіли, `1:::…`, `1 : 1 1 …`).
- tools/test-ui.mjs, сценарій 8 (`devices["Pixel 7"]`, pointer: coarse): scale — inputmode decimal, кнопка «:», підказка, без автофокусу; дотики «1», «:», «10000» → `1:10000` → зараховано; `1 : 1000` → не зараховано, далі `1 : 10000` → зараховано; ratio — «:» у місце курсора (`2:3`) → зараховано; number без scale — ні кнопки, ні підказки.

**Прогони**
- `npm run check` — EXIT 0 (test-learn 2882 перевірки; validate 0 помилок).
- `NODE_PATH=/opt/node-tools/node_modules node tools/test-ui.mjs` — 59 ok, 0 ✗.
- `node tools/diff-answers.mjs --old HEAD --grades 4-11` — 1650 вправ, 71 141 запис: 0 змін у всіх категоріях, 0 НЕПОЯСНЕНИХ; тест рівня 56 000 записів — 0.
- Мутанти (копія дерева в scratchpad/listp3, `mut.py`): 10 з 10 убито — без s4, s4 → `\s*` (тест швидкодії), scale `>=`, без перевірки ±, перевірка ± лише для рядка, лише «±» без «∓», без підказки, без кнопки «:», «:» для всіх number, кнопка « : ».
- Лінійність (`perf.mjs`, найгірше з 4 ключів, checkAns + badHint + answerSig): 50/100/200 тис. символів — `x₁,₂ =`+пробіли+`=` 2/2/3 мс, переноси+`±1` 21/34/73 мс, `±…` 9/16/33, `1:::…` 14/25/45, `1 : 1 1 …` 13/25/42 — ріст ≈ ×2 на подвоєння.
- `python3 tools/test-answer-ui.py` / `playtest.py` — немає Python-модуля playwright, лише CI (job browser).

**Обмеження**: кнопка «:» для scale дописує в кінець (як «/», « » у number), не в місце курсора. Перевірено емуляцію Chromium (Pixel 7), не справжню клавіатуру Android/iOS.
