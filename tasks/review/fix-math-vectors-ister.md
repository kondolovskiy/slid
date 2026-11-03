---
claimed_from: todo
claimed_at: 2026-11-03T10:35:34.771Z
id: fix-math-vectors-ister
type: fix-section
subject: math
grade: 9
section: g9m2
status: review
claimed_by: writer-fix-math-vectors-ister
created: 2026-11-03
depends_on: [fix-math-notation-ister]
---
# Вектори 9 кл. без «=» і в обчисленнях (рішення людини, D-043 уточнення п. 4)

Glossary «Вирішено 2026-11-03» → вектор. Істер Геометрія 9 (2026), с. 64, 68, 73: `$\vec c(a_1 + b_1; a_2 + b_2)$`, `$\lambda\vec a(\lambda x; \lambda y)$`, `$\vec m(-24; -3)$` — координати після назви вектора без «=». Переписати всі записи вектора з координатами через «=» у `content/math/g9-g9m2.js` (≈ 16 рядків) і `content/math/pool-g9-g9m2.js` (≈ 11 рядків), зокрема підписи лабораторій, steps, fbText. Рівність векторів (`$\vec a = \vec b$`), модуль (`$|\vec a| = 5$`), скалярний добуток (`$\vec a \cdot \vec b = 7$`) і рівності чисел — **лишити**. Ключі відповідей coordinates2, id, порядок варіантів не змінювати. Змінені уроки → draft; пул — рядок у шапці. `node tools/validate.mjs --section g9m2`, `--pool pg9m2`.

## Нотатки виконавця
- 2026-11-03, writer-fix-math-vectors-ister. Опора: D-043 уточнення п. 4; glossary/math.md «Вирішено 2026-11-03» (вектор; Істер 9г с. 64, 68, 73); перелік — reports/verify/fix-math-notation-ister.md, питання 1.
- **g9-g9m2.js — 18 рядків:** підписи lab `show` (`AB→(…)`, `a→(…)`, `b→(…)`, `k·a→(…)`; «сума = (…)» → `a→+b→(…)`) — 14 рядків у l3 (explore, lab, explore, lab), l4 (explore, lab, explore k, lab ⊥), l5 (boss, завдання 4); теорія l4: «якщо $\vec c = \vec a + \vec b$, то $\vec c(a_1 + b_1; a_2 + b_2)$», так само $\vec d$ для різниці, $k\vec a(ka_1; ka_2)$; l3 фінал fbText — $\overrightarrow{CD}(5 - 3; 3 - 4)$, тобто $\overrightarrow{CD}(2; -1)$; l4 lab суми — reveal і fbText ($\vec b(4 - 3; 3 - 1)$, тобто $\vec b(1; 2)$).
- **pool-g9-g9m2.js — 12 рядків:** steps c01, c04, c05, c08, d01, d02, d04, d05, d07 (обчислення через «$\vec x(…)$, тобто $\vec x(…)$» або «вектор … має координати (…)» для складених виразів на кшталт $3\vec m + 2\vec n$); hint c04; body d05 («вектор $k\vec a$ має координати $(ka_1; ka_2)$»); рядок у шапці.
- Лишено (за задачею): рівності векторів ($\overrightarrow{BA} = \vec a$, $\vec c = \vec a + \vec b$, $\vec p = 1,5\vec q$), модуль, скалярний добуток, рівності чисел і точок (`$B = (1 + 3; 1 + 2)$`, `$D = (5 + 1; 8 + 2)$` — це точки, не вектори; поза задачею).
- Ключі, `goal`, `solution`, id, порядок варіантів і кількість екранів/задач — без змін (порівняно скриптом: розділ і пул без полів тексту ідентичні до й після). `goal` лабораторій рахує X/Y точок і не залежить від рядків `show`.
- Статуси: g9m2l3, g9m2l4, g9m2l5 → draft (шапка оновлена); g9m2l1, g9m2l2 не зачеплені — verified.
- validate: `--section g9m2` — 0 помилок, 5 попереджень sentenceWords (ті самі, що й до правки); `--pool pg9m2` — 0 помилок, 0 попереджень. Build, playtest, test-answer-ui не запускав (заборона оркестратора).
- Для верифікатора: у теорії l4 нові позначення $\vec c$, $\vec d$ для суми й різниці (як Істер с. 68); у c04 hint тепер прямо дає $\overrightarrow{BA}(-2; 1)$ — це й раніше було ($A - B = (-2; 1)$).
