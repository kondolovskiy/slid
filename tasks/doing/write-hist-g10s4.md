---
claimed_from: todo
claimed_at: 2026-10-14T07:23:01.885Z
id: write-hist-g10s4
type: write-section
subject: hist
grade: 10
section: g10s4
weeks: [23, 29]
status: todo
claimed_by: writer-g10s4
created: 2026-09-27
---
# Написати розділ «Сталінський режим» (Історія України, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати правду про колективізацію, Голодомор і терор та вшановувати пам'ять жертв.

## Теми уроків (з плану)
1. Колективізація
2. Голодомор 1932–1933 рр.
3. Великий терор 1937–1938 рр.
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g10-g10s4.js` з `SLID.section("hist", { id: "g10s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g10s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g10s4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
