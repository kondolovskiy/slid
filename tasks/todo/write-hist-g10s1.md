---
id: write-hist-g10s1
type: write-section
subject: hist
grade: 10
section: g10s1
weeks: [1, 5]
status: todo
claimed_by:
created: 2026-09-27
---
# Написати розділ «Перша світова війна» (Історія України, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти трагедію українців, які воювали по різні боки фронту.

## Теми уроків (з плану)
1. Українці в арміях двох імперій
2. Легіон Українських січових стрільців
3. Галичина під окупацією
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g10-g10s1.js` з `SLID.section("hist", { id: "g10s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g10s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g10s1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
