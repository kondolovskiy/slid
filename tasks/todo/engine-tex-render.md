---
id: engine-tex-render
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-14
---
# Рушій: LaTeX у формулах, полотно solid, літери варіантів

Знайшли автори math 11 (writer-g11m1, g11m4, g11m5, g11m6), підтвердив оркестратор 14.10.2026.

## 1. Формули показують сирий LaTeX (критично — у verified уроках)
`fmt`/`mathHTML` в `app/app.js` не знає жодної `\команди` й `_`: дитина бачить «\sqrt{x}», «\infty», «x_2» буквально.
Ужито в 23 файлах 7–10 кл. (`grep -l '\\\\' content/math/*.js`): `\sqrt` 296, `\vec` 63, `\infty` 58, `\ge` 53, `\cdot` 51, `\le` 41, `\circ` 34, `\angle` 33, `\to`, `\parallel`, `\Delta`, `\neq`, `\perp`, `\overrightarrow`, `\geq`, `\leq`, `\pm`, `\begin{cases}…\end{cases}` 13, `\quad`, `\ldots`, `\alpha`, `\dfrac`/`\frac`, `\mathbb{N|Z|R}`, `\in`, `\cup`, `\text`, `\lim_{h \to 0}`; нижні індекси `x_2`, `a_{n}`.
Що зробити: у `MTOK` — токени `\cmd`, `{…}`, `_`, `\begin{cases}…\end{cases}`, `\\`; словник символів; `\sqrt[n]{…}`, `\frac{}{}`, `\vec{}`, `\mathbb{}`, `\text{}`, функції (sin, log, lim…) прямим шрифтом; `^\circ` → «°»; системи `cases` — фігурна дужка й рядки.
Плюс: `tools/validate.mjs` — попередження на `\` у `$…$`, якщо команда не підтримана. Тест на `fmt` (вирізати блок «Формули» з app.js, як test-lab) у `npm run check` і CI.
Перевірка: плейтест + скриншоти g8m3, g9m2, g10m1, g10m3 (`--shots`).

## 2. `solid`: `spec.h` — і висота тіла, і висота полотна
`app/lab.js`, KINDS.solid.render: `H = spec.h || 240`. У g10m2 l3 (`h: "3"`) полотно ≈ 3 px; з `h: "h"` — NaN. Виправлення: `H = spec.height || 240`. Перевірити g10m2, g11m4 у браузері.

## 3. Літери варіантів «АБВГҐД»
`app/app.js`: `const letters="АБВГҐД"` — п'ятий варіант «Ґ», на НМТ і у validate — «Д». Виправлення: `"АБВГДЕ"`. Зачіпає g11m6 (5 варіантів, формат НМТ).

## Після виправлення
Автори g11m1/m4/m5/m6 обходили баги (Unicode √ ≤ ∞, `<sub>` поза формулою, розміри solid у пікселях) — можна лишити як є.
