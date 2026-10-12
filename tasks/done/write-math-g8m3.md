---
claimed_from: review
claimed_at: 2026-10-11T20:07:12.282Z
id: write-math-g8m3
type: write-section
subject: math
grade: 8
section: g8m3
weeks: [13, 22]
status: done
claimed_by: verifier-g8m3
created: 2026-09-27
---
# Написати розділ «Алгебра: квадратні корені» (Математика, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знаходити сторону квадрата за площею і працювати з ірраціональними числами.

## Теми уроків (з плану)
1. Квадратний корінь
2. Дійсні числа
3. Властивості коренів
4. Функція y = √x
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g8-g8m3.js` з `SLID.section("math", { id: "g8m3", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g8m3/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8m3` — 0 помилок (build.mjs не запускав — за вказівкою оркестратора)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g8-g8m3.js`. Уроки (5, усі `draft`):
1. g8m3l1 «Сторона за площею» — арифметичний √a; numline між цілими; rect площа
2. g8m3l2 «Де живе √2?» — Q / ірраціональні / R; numline
3. g8m3l3 «Корінь із добутку» — √(ab), √(a/b); помилка √(a+b)
4. g8m3l4 «Графік y=√x» — plane sqrt(x), a·√x; ОВ x≥0
5. g8m3l5 boss «Плитка для шкільного двору» — значок g8m3boss

Інтерактив: explore 9 + lab 7; на l4 — 3 explore + 2 lab; на інших ≥2 екрани з lab.

### Факти (з джерелами)
1. Арифметичний квадратний корінь √a (a≥0) — невід'ємне число, квадрат якого = a; (√a)²=a — Мерзляк Алгебра 8 §12; https://vshkole.com/8-klass/uchebniki/algebra/ag-merzlyak-vb-polonskij-ms-yakir-2025/2-kvadratni-koreni ; https://naurok.com.ua/8-klass-pidsumkoviy-urok-z-temi-kvadratni-koreeni-diysni-chisla-149382.html
2. √(ab)=√a·√b (a,b≥0); √(a/b)=√a/√b (a≥0,b>0); √(a+b)≠√a+√b — Мерзляк §15; https://www.miyklas.com.ua/p/algebra/8-klas/kvadratni-koreni-diisni-chisla-24730/vlastivosti-arifmetichnogo-kvadratnogo-korenia-14038/re-63b864e5-616e-4085-8b5e-59fba5976cb4
3. Раціональні = m/n; ірраціональні — не раціональні (√2); дійсні = Q ∪ ірраціональні — Мерзляк §13–14; naurok (вище)
4. Функція y=√x: ОВ [0;+∞), значення ≥0, зростає; графік через (0;0),(1;1),(4;2),(9;3) — Мерзляк §17; https://vshkole.com/…/2-kvadratni-koreni

### D-019 (опора → екран)
- l1 «√10 між цілими» ← explore numline; lab √9 ← info означення
- l2 sort / «не дріб m/n» ← info; lab √16 ← info + explore
- l3 lab √a·√b=12 ← explore+info властивості; помилка суми ← info «не суму»
- l4 точка на графіку / √x=3 ← explore plane + info; y при x=25 ← info опорні точки
- boss: лише матеріал l1–l4

### Пропозиції
- TERM glossary/math: арифметичний квадратний корінь; ірраціональне число; дійсні числа; властивості √(ab), √(a/b); функція y=√x
- ENGINE: у `show`/`label` лабораторії `\sqrt{x}` парситься як шаблон `{x}` — потрібен Unicode √ або екранування дужок (див. pitfalls)

### Сумнівні місця
- У l2 термін «ірраціональне» подано коротко (щоб longWordShare); повне шкільне означення через десятковий запис — стисло.
- requires: g7m5l1 (функція) — розділ 7 кл. уже є.
