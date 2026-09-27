---
id: write-hist-g8s2
type: write-section
subject: hist
grade: 8
section: g8s2
weeks: [7, 13]
status: todo
claimed_by:
created: 2026-09-27
---
# Написати розділ «Козацтво» (Історія України, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як виникло козацтво і чому воно стало символом волі.

## Теми уроків (з плану)
1. Звідки взялися козаки
2. Запорозька Січ
3. Сагайдачний і Хотинська війна 1621 р.
4. Козацькі повстання 1620–1630-х
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g8-g8s2.js` з `SLID.section("hist", { id: "g8s2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g8s2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g8s2` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
