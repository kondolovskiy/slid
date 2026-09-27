---
id: write-math-ms4
type: write-section
subject: math
grade: 5
section: ms4
weeks: [33, 35]
status: todo
claimed_by:
created: 2026-09-27
---
# Написати розділ «Площі й об'єми» (Математика, 5 клас)

## Навіщо (з плану, можна уточнити)
Щоб порахувати, скільки фарби треба на стіну, плитки на підлогу чи води в акваріум.

## Теми уроків (з плану)
1. Площа прямокутника
2. Прямокутний паралелепіпед і куб
3. Об'єм
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js
- Розділи цього ж класу з уроками: ms1 — вирівнюйся по них

## Результат
- Файл `content/math/g5-ms4.js` з `SLID.section("math", { id: "ms4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/ms4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section ms4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
