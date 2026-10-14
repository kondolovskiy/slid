---
claimed_from: review
claimed_at: 2026-10-14T17:12:26.962Z
id: write-math-g11m1
type: write-section
subject: math
grade: 11
section: g11m1
weeks: [1, 10]
status: done
claimed_by: verifier-g11m1
created: 2026-09-27
---
# Написати розділ «Алгебра: показникова й логарифмічна функції» (Математика, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб описувати швидке зростання і спадання: віруси, заощадження, радіоактивний розпад.

## Теми уроків (з плану)
1. Показникова функція
2. Логарифм
3. Логарифмічна функція
4. Рівняння і нерівності
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g11-g11m1.js` з `SLID.section("math", { id: "g11m1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g11m1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g11m1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-g11m1, 2026-10-14.** Файл `content/math/g11-g11m1.js`, 5 уроків, усі `status: "draft"`, `signed: true`, `requires: ["g10m3l2", "g10m1l3"]`, значок `g11m1boss` («Майстер логарифмів», chart).
`validate --section g11m1`: 0 помилок, 0 попереджень. stats: уроки g11m1 без прапорців (10/10/10/10/8 екранів, gradedShare 0,6 / boss 0,75, sentenceWords 7,4–7,8, typeVariety 3: choice, number, lab).

### Уроки
1. `g11m1l1` «Подвоєння щогодини» — $y = a^x$: означення ($a > 0$, $a ≠ 1$), $E = (0; +∞)$, точка $(0; 1)$, зростає/спадає за основою; вклад 1000 · 1,1²; цезій-137 (3 періоди → 1/8). Lab: explore $a^x$; «через $(2; 9)$».
2. `g11m1l2` «Логарифм — це показник» — означення, умови, log_a 1 = 0, log_a a = 1, lg; властивості добутку, частки, степеня; Непер 1614. Lab: explore перетин $2^x = b$; «зроби log₂ b = −1».
3. `g11m1l3` «Графік у дзеркалі» — $y = $ log_a $x$ як обернена до $a^x$, $D = (0; +∞)$, точки $(1; 0)$, $(a; 1)$, монотонність. Lab: explore два графіки + $y = x$; «через $(9; 2)$».
4. `g11m1l4` «Шукаємо показник» — $a^{f} = a^{g} ⇒ f = g$; $a^x = b$ ($b ≤ 0$ — коренів немає; $b > 0$ — log_a b); log_a f = c ⇔ f = a^c + перевірка ОДЗ; нерівності — знак за основою. Lab: «корінь log₂(x+1) = 3»; explore $a^x > 4$.
5. `g11m1l5` boss «Журнал біостанції» — роль «лаборант біостанції»; 6 завдань у порядку тем (цезій 80 мг/60 років; $a^x$ через $(−1; 2)$; log₃54 − log₃2; ОВ log₅(4 − x); $5^{2x−1} = 125$; $0,2^x ≥ 25$).

### Факти й джерела
- Показникова функція $y = a^x$, $a > 0$, $a ≠ 1$; $D = R$, $E = (0; +∞)$; $a > 1$ зростає, $0 < a < 1$ спадає; графік через $(0; 1)$ — subjectum ЗНО §10 https://subjectum.eu/mathematics/zno/272.html , https://subjectum.eu/mathematics/zno/274.html ; OpenStax College Algebra 2e §6.2 https://openstax.org/books/college-algebra-2e/pages/6-2-graphs-of-exponential-functions
- Логарифм — показник степеня, до якого треба піднести $a$, щоб дістати $b$; має зміст при $a > 0$, $a ≠ 1$, $b > 0$; lg = log₁₀ — subjectum §31 https://subjectum.eu/mathematics/zno/115.html , https://subjectum.eu/mathematics/zno/116.html ; OpenStax §6.3 https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions
- Властивості: логарифм добутку / частки / степеня, log_a 1 = 0 — subjectum https://subjectum.eu/mathematics/zno/117.html ; OpenStax §6.5 https://openstax.org/books/college-algebra-2e/pages/6-5-logarithmic-properties
- Логарифмічна функція: $D = (0; +∞)$, $E = R$, нуль $x = 1$, монотонність за основою; обернена до $a^x$ (області міняються місцями) — subjectum https://subjectum.eu/mathematics/zno/275.html , https://subjectum.eu/mathematics/zno/277.html ; OpenStax §6.3–6.4 https://openstax.org/books/college-algebra-2e/pages/6-4-graphs-of-logarithmic-functions
- Рівняння $a^{f} = a^{g} ⇔ f = g$; $a^x = b$: $b ≤ 0$ — розв'язків немає, $b > 0$ — $x = $ log_a b; log_a x = b ⇒ x = a^b — subjectum §26, §28 https://subjectum.eu/mathematics/zno/207.html , https://subjectum.eu/mathematics/zno/208.html , https://subjectum.eu/mathematics/zno/216.html ; OpenStax §6.6 https://openstax.org/books/college-algebra-2e/pages/6-6-exponential-and-logarithmic-equations
- Нерівності: $a > 1$ — знак зберігається, $0 < a < 1$ — змінюється; для логарифмів + умова додатності — subjectum §27, §29 https://subjectum.eu/mathematics/zno/213.html , https://subjectum.eu/mathematics/zno/221.html ; OpenStax §6.2 (зростання/спадання)
- Цезій-137: період напіврозпаду 30,17 року (у контенті — «за кожні 30 років половина розпадається» / «вважай 30 років») — CDC https://www.cdc.gov/radiation-emergencies/hcp/isotopes/cesium-137.html ; EPA https://www.epa.gov/radiation/radionuclide-basics-cesium-137
- Джон Непер (шотландець) — 1614, «Mirifici Logarithmorum Canonis Descriptio», перші опубліковані таблиці логарифмів — MacTutor https://mathshistory.st-andrews.ac.uk/Biographies/Napier/ ; Wikipedia https://en.wikipedia.org/wiki/Mirifici_Logarithmorum_Canonis_Descriptio
- Вклад «1000 грн під 10 % річних», бактерії «500, подвоєння щогодини», вклад «подвоюється кожні 5 років» — умовні моделі, не факти.

### Сумнівні місця
- Цезій: 30,17 року округлено до 30 (у тексті «за кожні 30 років» без «приблизно»). Якщо верифікатор вважає це неточністю — додати «приблизно» в l1 #10 і boss.
- «Тому за таблицями логарифмів множення замінювали додаванням» (l2 #7) — загальне твердження про таблиці логарифмів; первісні логарифми Непера не мали log 1 = 0 (MacTutor: перехід — у розмовах Непера з Бріґґсом), тому прямо «таблиці Непера» не пишу.
- Нотація логарифма — HTML `log<sub>a</sub> b` поза `$…$`, бо рушій не має нижніх індексів і LaTeX-команд (див. ENGINE нижче). Для заголовків і варіантів це працює (title/opts — HTML через fmt).
- Здогадки `hyp`: l1 #2 (порядок величини 2¹⁰ — виводиться, але подано як здогадку-передбачення), l3 #2 (відбиття точки $(0; 1)$).

### Опора завдань (D-019), де неочевидно
- l1 #4 $(0; 1)$ ← explore l1 #3 (точка позначена) + $a^0 = 1$ (8 кл., нагадування в hint).
- l1 #9 $2^{-3}$ ← info l1 #5 (нагадування $a^{-n} = 1/a^n$).
- l2 #6 (lab log₂ b = −1) ← info l2 #4 + $2^{-1}$ з l1 #5.
- l3 #4 (графік лише за $x > 0$) ← explore l3 #3 + умова $b > 0$ з l2 #4.
- l3 #10 (обернена до $3^x$) ← info l3 #5 і нагадування про обернені в intro l3 #1 (g10m1l3).
- l4 #2 (5 годин) ← міркування: ланцюжок подвоєнь (l1).
- l4 #10 ← властивість суми логарифмів (l2 #7) + перевірка ОДЗ (info l4 #3).
- boss #6 ($0,2^x ≥ 25$) ← info l4 #8 + $a^{-n}$ з l1 #5; hint дає $25 = 0,2^{-2}$.

### Пропозиції
- glossary math, 11 кл.: показникова функція $y = a^x$ ($a > 0$, $a ≠ 1$); логарифм log_a b, десятковий lg; основна логарифмічна тотожність; логарифмічна функція; показникові / логарифмічні рівняння й нерівності; нотація log — `log<sub>a</sub> b` (HTML поза формулою), показник-вираз — `$a^(x - 1)$` у дужках.
- ENGINE (важливо): `mathHTML` не знає LaTeX-команд — `\sqrt[n]{a}`, `\ge`, `\sin`, `\cdot`, `\infty`, `\,`, `\mathbb` показуються буквально («\sqrt[3]{27}» з курсивними буквами). Перевірено виконанням `fmt` з app/app.js. Уражені щонайменше g8m3, g9*, g10m1–g10m6. Потрібен або словник команд у рушії (\sqrt → √, \ge → ≥ …), або заміна в контенті на Unicode; плюс нижній індекс (`_`) для log.
