---
claimed_from: todo
claimed_at: 2026-10-14T11:06:12.699Z
id: write-math-g11m5
type: write-section
subject: math
grade: 11
section: g11m5
weeks: [19, 27]
status: todo
claimed_by: writer-g11m5
created: 2026-09-27
---
# Написати розділ «Алгебра: комбінаторика і ймовірність» (Математика, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб оцінювати шанси й ризики, а не покладатися на удачу.

## Теми уроків (з плану)
1. Перестановки, розміщення, комбінації
2. Класична ймовірність
3. Статистичні характеристики
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g11-g11m5.js` з `SLID.section("math", { id: "g11m5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g11m5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g11m5` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
