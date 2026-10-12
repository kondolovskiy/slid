---
claimed_from: review
claimed_at: 2026-10-11T19:52:04.927Z
id: write-math-g7m7
type: write-section
subject: math
grade: 7
section: g7m7
weeks: [28, 35]
status: done
claimed_by: verifier-g7m7
created: 2026-09-27
---
# Написати розділ «Алгебра: системи рівнянь» (Математика, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб розв'язувати задачі з двома невідомими.

## Теми уроків (з плану)
1. Рівняння з двома змінними
2. Графічний спосіб
3. Спосіб підстановки
4. Спосіб додавання
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g7-g7m7.js` з `SLID.section("math", { id: "g7m7", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g7m7/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g7m7` — 0 помилок (build не запускав — оркестратор)
- [x] Попередження: 0
- [x] `node tools/stats.mjs --subject math` — уроків g7m7 без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g7-g7m7.js`. `signed: true`. `requires: ["g7m5l3"]`. Badge: `g7m7boss` «Два невідомих».

### Уроки
1. **g7m7l1** «Дві змінні — одна пряма» — рівняння з 2 змінними; explore+lab=3 (2 explore, 1 lab)
2. **g7m7l2** «Точка, де прямі зустрілись» — графічний спосіб; explore+lab=5 (3 explore, 2 lab); дві прямі $y=k_1x+b_1$, $y=k_2x+b_2$, перетин
3. **g7m7l3** «Підстав і розв'яжи» — спосіб підстановки; explore+lab=2
4. **g7m7l4** «Додай — і змінна зникне» — спосіб додавання; explore+lab=2
5. **g7m7l5** boss «Кафе з двома невідомими» — explore+lab=3; бали ×2

### Факти (з джерелами)
1. Лінійне рівняння з двома змінними $ax+by=c$ ($a$, $b$ не обидва 0): розв'язок — упорядкована пара $(x;y)$; графік — пряма; розв'язків безліч — Мерзляк Алгебра 7 §3 п.24–25; https://vshkole.com/7-klass/uchebniki/algebra/ag-merzlyak-vb-polonskij-ms-yakir-2024/3-sistemi-linijnih-rivnyan-iz-dvoma-zminnimi
2. Система двох лінійних рівнянь: розв'язок — спільна пара; графічний спосіб — точка перетину прямих; паралельні → немає; збіг → безліч — miyklas + Мерзляк п.26 — https://www.miyklas.com.ua/p/algebra/7-klas/sistemi-liniinikh-rivnian-iz-dvoma-zminnimi-468153/grafichnii-sposib-rozv-iazuvannia-sistem-dvokh-liniinikh-rivnian-z-dvoma_-468482/re-a38d9cc7-9fe6-4fdf-a96c-3080d7fcf74c
3. Спосіб підстановки: виразити змінну → підставити в друге → розв'язати → знайти другу — Мерзляк п.27 — https://vshkole.com/7-klass/reshebniki/algebra/ag-merzlyak-vb-polonskij-ms-yakir-2024-nush/3-sistemi-linijnih-rivnyan-iz-dvoma-zminnimi/27-rozvyazuvannya-sistem-linijnih-rivnyan-metodom-pidstanovki
4. Спосіб додавання: зробити коефіцієнти протилежними → додати → одна змінна зникає — Мерзляк п.28

### D-019 (опора → завдання)
- l1 choice «скільки розв'язків» ← explore з точками на прямій
- l1 «яка точка не розв'язок» ← explore з A,B,C на попередньому екрані
- l1 фінал $y$ при $x=4$ ← правило + міркування з $x+2y=10$
- l2 перетин = розв'язок ← explore з $k_1{=}1,b_1{=}1,k_2{=}-1,b_2{=}5$ → $(2;3)$
- l2 паралельні ← explore з однаковим $k$
- l2 фінал абсциса ← explore з готовими прямими $y=x+1$, $y=-x+5$
- l3 висновок $x=3$ ← explore підбору
- l3/l4 number-задачі ← info з покроковим прикладом того ж типу
- boss: лише матеріал l1–l4

### Пропозиції
- TERM → glossary/math: система рівнянь; розв'язок системи; спосіб підстановки; спосіб додавання; графічний спосіб
- STYLE: підтверджую D-011 — короткі fbOk тягнуть sentenceWords нижче 6 у boss; калібрувати math 7–9

### Сумнівні / відкриті
- Немає. Числа «чисті»; від'ємні лише як координати/коефіцієнти з `signed: true`.
