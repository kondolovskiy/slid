---
claimed_from: todo
claimed_at: 2026-10-31T16:54:13.938Z
claimed_by: engineer-answer-kinds
id: engine-math-answer-kinds-new
type: engine
subject: math
status: todo
created: 2026-10-31
depends_on: [engine-math-answer-formats-followup]
---
# Нові формати відповідей math (потрібне рішення про схему)

Відкладено з engine-math-answer-formats-followup: це не доробки чинних форматів, а нові `answerKind` / прапорці, тож спершу — рішення людини (decisions.md) і узгодження з матрицею (docs/math-personalization-coverage.json).

## Що розглянути
- `answerKind: "time"` (ГГ:ХХ): «9:55», «9.55», «09:55», «9 год 55 хв»; dg4 №18 (9:10 + 45 хв), пули 4–5 кл. (inbox 2026-10-30).
- Складені величини: «2 м 45 см», «3 год 20 хв», «1 кг 200 г» — один ключ у найменших одиницях чи пара? Як поєднати з `unit` і новим зняттям своєї одиниці (`stripUnit`).
- `improper: true` — лише неправильний дріб (без виділення цілої частини), протилежне до `mixed`.
- Кінцевий нуль при округленні: «округли до десятих» → вимагати «37,0» замість «37» (прапорець на кшталт `decimals: 1`), сумісність із `tol`.
- Залишки з рев'ю engine-coordinates2-expression: назва точки з малої літери (`k(p − m; k − n)` знімається як назва точки, хоча це добуток) і префікс вектора `AB = (…)` / `AB(…)` (inbox 2026-10-31, pg9m2 c01, c09).
- `-0,(3)` (періодичний дріб) для ключа −1/3 (inbox 2026-10-31, verifier-pg9m2).

Вимоги як у попередніх задачах: регресії, диференційна регресія на всіх verified пулах, CONTENT_SCHEMA §10, незалежне рев'ю (D-026).

## Нотатки виконавця

## P3 з рев'ю engine-math-answer-formats-followup (reports/review/engine-math-answer-formats-followup.md)
- P2-r1 не повністю: `(1/2)(2 + 2√5)`, `(1/3)(3 + 3√3)` ok — знаменник раціонального множника поза НСД (canonExact, гілка c·(сума)/d).
- intervalSet `(-∞; 2√2/2]` → form із загальною підказкою (unreducedOnly не обробляє intervalSet).
- Перевірка «підказка ≠ ключ» — ручний список прикладів; витягати приклади з текстів підказок автоматично, звіряти й числові (7/12, 2 1/3, 2,5).
- `window.SLID_ANS_UI` — віддавати Object.freeze-копію.
- Одиниці: «Перевір одиницю» навіть коли хибне число; coordinates2/ratio з unit «°» `(30°; 60°)` → bad; `60 грн.`, «5 разів», `70º`.
- Межа часу від годинника (до ~2,4 с на bad у expression); у браузерних тестах Date.now заморожений.
- test-personalization-qa: прив'язки до живого змісту (counts, pending = 6, optional = 7, pg8m5) — перевести на фікстури.

## З inbox 31.10 (куратор; ще не в жодній задачі)
- number: префікс «b = 1», «k = 3» → bad (expression знімає «y =», number — ні; pg7m5 c05/c06) — знімати «<буква> =».
- number/list: кінцева крапка « 3.» → bad (verifier-pool-g7m2).
- list із повторами елементів (мультимножина) зараз заборонено — mer8g №655/656/661 у пул не взяти (pg8m6); чи потрібен прапорець.
