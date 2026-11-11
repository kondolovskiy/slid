---
claimed_from: todo
claimed_at: 2026-11-11T20:44:21.177Z
id: tools-euphony-z-validate-gw
type: tools
subject: all
status: todo
claimed_by: w-tools-euphony-z
created: 2026-11-11
depends_on: []
---
# Інструменти: euphony не ловить «з» між приголосними; validate — хибне попередження при обгортці `gw`

## Навіщо
1. reports/verify/pu10s4.md: «приклад з байки» (між приголосними за УП § 25 п. 2 — «із») euphony не позначив. Перевірити правило § 25 у tools/euphony.mjs (уроки, пули, тести рівня) і закрити прогалину без хибних спрацювань (перед збігом приголосних — «зі», сталі звороти, цитати).
2. reports/verify/pu10s4.md: validate (app/lang.js lint gaps) попереджає «слово з пропуском розірване HTML-тегом», навіть коли все слово обгорнуто `<span class="gw">` (nowrap рушія) — детектор не бачить зовнішньої обгортки. Не попереджати, якщо пропуск і теги всередині одного `gw`.

## Що зробити (скіл `engine-change`)
- Тести в tools/test-euphony.mjs і tools/test-lang.mjs (спершу червоні); мутанти.
- Прогнати `node tools/euphony.mjs --subject ukr` — нові знахідки в наявному контенті перелічити в нотатках (не правити чужі файли — рядки в inbox).
- `npm run check` зелений. Незалежне рев'ю D-026.

## Готово, коли
- [ ] reports/review/tools-euphony-z-validate-gw.md з вердиктом «прийнято».

## Нотатки виконавця
