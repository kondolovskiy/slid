---
claimed_from: review
claimed_at: 2026-10-12T02:47:08.906Z
id: write-math-g9m5
type: write-section
subject: math
grade: 9
section: g9m5
weeks: [21, 29]
status: done
claimed_by: verifier-g9m5
created: 2026-09-27
---
# Написати розділ «Алгебра: прогресії» (Математика, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як ростуть заощадження, популяції і відсотки за кредитом.

## Теми уроків (з плану)
1. Числові послідовності
2. Арифметична прогресія
3. Геометрична прогресія
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g9-g9m5.js` з `SLID.section("math", { id: "g9m5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g9m5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g9m5` — 0 помилок (build — оркестратор)
- [x] Попередження: 0
- [x] `node tools/stats.mjs --subject math` — g9m5l1–l4 без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g9-g9m5.js`. Scratchpad: `scratchpad/g9m5/`. Без зображень.

### Уроки (4, усі draft)
1. **g9m5l1** «Ряд за правилом» — числові послідовності (chart + numline jumps)
2. **g9m5l2** «Рівні кроки» — арифметична: $a_n=a_1+(n-1)d$, $S_n$
3. **g9m5l3** «Рівні множники» — геометрична: $a_n=a_1·q^{n-1}$, $S_n$, складні відсотки
4. **g9m5l4** boss «Планер заощаджень» — badge `g9m5boss`

Explore+lab: l1 2+1, l2 2+1, l3 2+1, boss 1+2 (по 3 на урок).

### Факти (з джерелами)
1. Числова послідовність; рекурентне правило vs формула $n$-го члена — Мерзляк Алгебра 9 §15 https://vshkole.com/9-klass/uchebniki/algebra/ag-merzlyak-2026/3-chislovi-poslidovnosti ; miyklas (послідовності)
2. Арифметична: $a_{n+1}=a_n+d$; $a_n=a_1+(n-1)d$; $S_n=(a_1+a_n)·n/2$ — miyklas https://www.miyklas.com.ua/p/algebra/9-klas/chislovi-poslidovnosti-14359/arifmetichna-progresiia-14362/re-f644a142-073e-4dcc-af02-e5dd9a83e47e ; naurok (формула $n$-го члена)
3. Геометрична: $a_{n+1}=a_n·q$; $a_n=a_1·q^{n-1}$; $S_n=a_1(q^n-1)/(q-1)$ при $q≠1$; при $q=1$: $S_n=n·a_1$ — Кравчук https://subjectum.eu/textbook/mathematics/9klas/20.html ; https://subjectum.eu/textbook/mathematics/9klas/21.html ; miyklas (геометрична); matematika.com.ua/formuli-matematiki/progresy.html

### D-019 (опора)
- l1 choice після explore chart; lab/number після info з формулою
- l2 choice після explore numline; lab $a_5$ / sum / фінал — після info з $a_n$, $S_n$
- l3 choice після explore chart; lab $a_4$ / відсотки / $S_4$ — після info з $q$, $a_n$, $S_n$
- boss: лише матеріал l1–l3 (підстановка в $a_n$, $d$, $S_n$, $q$, тип ряду, $1{,}1^2$)

### Пропозиції
- TERM → glossary/math (9 кл.): числова послідовність; рекурентне правило; арифметична прогресія / різниця $d$; геометрична прогресія / знаменник $q$; сума перших $n$ членів $S_n$
- STYLE: повзунки $a,d$ / $a,q$ + chart bars і numline jumps добре працюють для прогресій
