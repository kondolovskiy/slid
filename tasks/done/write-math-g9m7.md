---
claimed_from: review
claimed_at: 2026-10-12T02:47:09.928Z
id: write-math-g9m7
type: write-section
subject: math
grade: 9
section: g9m7
weeks: [30, 35]
status: done
claimed_by: verifier-g9m7
created: 2026-09-27
---
# Написати розділ «Алгебра: ймовірність і статистика» (Математика, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти опитування, прогнози погоди й шанси в іграх, а не вірити інтуїції.

## Теми уроків (з плану)
1. Комбінаторні задачі
2. Ймовірність випадкової події
3. Середні значення і діаграми
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g9-g9m7.js` з `SLID.section("math", { id: "g9m7", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g9m7/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g9m7` — 0 помилок, 0 попереджень (build за оркестратором)
- [x] Попередження виправлено (choice positions, sentenceWords)
- [x] validate по профілю 7–9 для g9m7 чистий; повний stats — після build
- [x] Кожен урок: status: "draft", проблема → теорія, ≥ 1 hint, outro 2–4
- [x] Задачу в tasks/review/; факти з джерелами нижче

## Нотатки агента
Файл: `content/math/g9-g9m7.js`. Scratchpad: `scratchpad/g9m7/`.

### Уроки (4 = 3 + boss)
1. **g9m7l1** «Скільки варіантів?» — правило добутку й суми; chart explore/lab
2. **g9m7l2** «Який шанс?» — $P=m/n$, частота; fraction + pie
3. **g9m7l3** «Середнє й діаграми» — середнє, bars+mean, pie
4. **g9m7l4** boss «Фестиваль шансів» — badge `g9m7boss`

Інтерактив: ≥2 explore/lab на урок; chart (bars/pie/mean) + fraction. sk: `data`. draft. requires: `ms2l5`, `ms3l3`.

### Факти
1. Правило добутку $n·m$ / суми $n+m$ — Тарасенкова §15 https://subjectum.eu/textbook/mathematics/9klas_3/16.html ; Edera mathmon59
2. $P(A)=m/n$ при рівноможливих; частота з серії — Тарасенкова https://subjectum.eu/textbook/mathematics/9klas_3/17.html ; Істер §24
3. Середнє = сума : кількість; стовпчаста/кругова — glossary; ms2l5 / ms3l3

### D-019
l1 ← explore+info; l2 hyp ← fraction, фінал ← список пар; l3 ← mean/pie labs; boss лише l1–l3.

### TERM
правило суми/добутку; рівноможливі/сприятливі наслідки; частота; класична ймовірність.

### Побічне
Для validate додано пропущену кому в `content/hist/g8-g8s3.js` (body→cta).

