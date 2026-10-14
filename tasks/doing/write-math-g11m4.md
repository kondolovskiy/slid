---
claimed_from: todo
claimed_at: 2026-10-14T11:06:12.641Z
id: write-math-g11m4
type: write-section
subject: math
grade: 11
section: g11m4
weeks: [13, 26]
status: todo
claimed_by: writer-g11m4
created: 2026-09-27
---
# Написати розділ «Геометрія: многогранники і тіла обертання» (Математика, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб рахувати об'єми й поверхні реальних предметів: від коробки до цистерни.

## Теми уроків (з плану)
1. Призма і піраміда
2. Циліндр, конус, куля
3. Об'єми тіл
4. Площі поверхонь
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g11-g11m4.js` з `SLID.section("math", { id: "g11m4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g11m4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g11m4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
