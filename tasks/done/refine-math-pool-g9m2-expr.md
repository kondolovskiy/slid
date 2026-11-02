---
id: refine-math-pool-g9m2-expr
type: refine
subject: math
grade: 9
status: done
claimed_by: writer-pg9m2-expr
created: 2026-10-31
depends_on: [engine-coordinates2-expression]
---
# Додати №13.5(4) у pg9m2/g9m2l3 (coordinates2 з виразами)

Рушій тепер приймає coordinates2 з компонентами-виразами (CONTENT_SCHEMA §10, reports/review/engine-coordinates2-expression.md). Додати в l3 пулу content/math/pool-g9-g9m2.js вправу №13.5(4) (Мерзляк, Якір «Геометрія 9», 2026), ключ $(p - m; k - n)$ — див. reports/verify/pg9m2.md. ≤ 8 вправ на урок: замінити найслабшу, рівні ≥ 3/2/1. Перевірити опору в уроці g9m2l3. Пул — draft до повторної верифікації.
Перевірка: validate --pool pg9m2; personalization-qa --grade 9 --strict — без рядка про g9m2l3 expression (крім «не verified»).

## Нотатки виконавця

**Змінені файли:** `content/math/pool-g9-g9m2.js`, ця задача, рядки в `memory/short/inbox.md`. build і git не запускав.

**Що замінено.** У g9m2l3 вправу **c06** (№13.9, $|(-20; 2\sqrt{21})| = 22$, number, lvl 2) замінено новою **c09** (№13.5(4), с. 150, lvl 2, `coordinates2`, ключ `["p - m", "k - n"]`, hint і steps є). Чому саме c06: це найслабша вправа уроку з погляду теми. Вона перевіряє переважно арифметику з коренем $(2\sqrt{21})^2$, а модуль вектора й так покривають c02 (lvl 1), c07 і c08 (lvl 3). Формат number в l3 лишається (c02). Рівні l3: 3/3/2 (не змінилися). Вправ: 8, разом 32. id c06 більше не вживається. Нова id обрана, щоб не змішувати історію учня зі старою вправою.

**Звірка з підручником.** PDF завантажено заново: `/tmp/claude-0/-home-user-slid/019b4ace-7221-55df-8577-39871bfa5ec5/scratchpad/refine-pg9m2/g9.pdf` (7 705 637 байт, sha256 74176611…d679edae, той самий файл, що у верифікатора). Сторінку 150 відрендерено (pdftoppm 200 dpi) і переглянуто очима. Умова: «13.5.° Знайдіть координати вектора $\overrightarrow{AB}$, якщо: … 4) $A(m; n)$, $B(p, k)$». У підручнику між $p$ і $k$ стоїть кома, ймовірно друкарська. У пулі записано $B(p; k)$, як у підпунктах 1–3. Друкованої відповіді для 13.5 немає, ключ $(p - m; k - n)$ виводиться за теоремою 13.1 (кінець мінус початок).

**Опора (D-019).** g9m2l3 екр. 3 (choice «Як знайти координати $\overrightarrow{AB}$?») сам дає буквену формулу $(x_2 - x_1; y_2 - y_1)$ для $A(x_1; y_1)$, $B(x_2; y_2)$. Екр. 4 («Теорія»): $\overrightarrow{AB} = (x_B - x_A; y_B - y_A)$. c09 — це підстановка букв в одну формулу. Числовий аналог — c01 (той самий №13.5, пункт 1). Hint дає спосіб, а не відповідь. В умові сказано, що в компонентах мають бути вирази з буквами.

**checkAns** (`SLID_LEARN.checkAns` з `app/learn.js` у node vm, скрипт `/tmp/claude-0/-home-user-slid/019b4ace-7221-55df-8577-39871bfa5ec5/scratchpad/refine-scripts/chk.mjs`):
- ok: `(p - m; k - n)`, `(p-m;k-n)`, `(p − m; −n + k)`, `(-m + p; k - n)`, `p - m; k - n`, `(p+(-m); k-n)`, `(-(m-p); k - n)`, `M(p − m; −n + k)`, `(p - m ; k - n)`;
- bad: `(m - p; n - k)`, `(k - n; p - m)` (переставлені компоненти), `(m - p; k - n)`, `(p - m; n - k)`, `(p - n; k - m)`, `(x - m; k - n)` (інша змінна), `(p + m; k + n)`, `(p - m)`, `(p - m; k - n; 0)`, `(p - m = 0; k - n)`, `(p - 1,0000001m; k - n)`, `(p; k)`;
- ключі всіх 32 вправ пулу → ok.
- Обмеження (не регресія): `AB = (p - m; k - n)` і `AB(p - m; k - n)` → bad. Числовий шлях поводиться так само (`AB = (-3; 1)` для c01 → bad; `A(-3; 1)` → ok), бо знімається лише однолітерна назва точки. В умові вимагається запис $(x; y)$. Записано в inbox як ENGINE.

**Перевірки:** `node tools/validate.mjs --pool pg9m2`: 0 помилок, 0 попереджень. `node tools/personalization-qa.mjs --pool pg9m2`: 4 required / 32 вправи, єдиний рядок «БРАКУЄ: pg9m2: ще не verified» (очікувано). Рядка «g9m2l3: немає формату expression» немає. `node tools/personalization-qa.mjs --grade 9 --strict`: для g9m2 лише «pg9m2: ще не verified».

**Статус:** пул переведено в `status: "draft"`, `meta.factcheck: null`, оновлено шапку-коментар. Потрібна повторна верифікація (c09 і загальна перевірка ключів).
