---
claimed_from: review
claimed_at: 2026-10-12T03:58:41.038Z
id: write-hist-g8s1
type: write-section
subject: hist
grade: 8
section: g8s1
weeks: [1, 6]
status: done
claimed_by: verifier-g8s1
created: 2026-09-27
---
# Написати розділ «Литовсько-польська доба» (Історія України, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як жили українські землі в Речі Посполитій і чому виникло напруження.

## Теми уроків (з плану)
1. Люблінська унія 1569 р.
2. Магнати й шляхта
3. Берестейська церковна унія 1596 р.
4. Острог і братства
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g8-g8s1.js` з `SLID.section("hist", { id: "g8s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g8s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g8s1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента

Розділ «Литовсько-польська доба» (g8s1): Люблінська унія 1569, магнати/шляхта, Берестейська унія 1596, Острог і братства, boss.
Оркестратор: автор довго не фіналізував; файл `content/hist/g8-g8s1.js` готовий.
`node tools/validate.mjs --section g8s1` → 0 помилок, 0 попереджень.
Факти з URL — на верифікатор (ЕІУ / litopys / підручники 8 кл.).

