---
id: write-math-g10m1
type: write-section
subject: math
grade: 10
section: g10m1
weeks: [1, 9]
status: todo
claimed_by:
created: 2026-09-27
---
# Написати розділ «Алгебра: функції і їхні властивості» (Математика, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб читати будь-який графік: від курсу валют до температури.

## Теми уроків (з плану)
1. Область визначення і значень
2. Парність, монотонність
3. Обернена функція
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g10-g10m1.js` з `SLID.section("math", { id: "g10m1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g10m1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g10m1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
