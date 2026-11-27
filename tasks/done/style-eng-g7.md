---
claimed_from: todo
claimed_at: 2026-11-25T12:43:56.761Z
id: style-eng-g7
type: style
subject: eng
grade: 7
depends_on: [write-eng-g7-e7s1, write-eng-g7-e7s2, write-eng-g7-e7s3, write-eng-g7-e7s4, write-eng-g7-e7s5, write-eng-g7-e7s6, write-eng-g7-e7s7]
status: done
claimed_by: style-eng-g7
created: 2026-11-25
source: orchestrator
---
# Вирівняти стиль і складність англійської 7 кл.; калібрувати профіль `eng` «7-9»

Скіл `style-sync`. Після верифікації e7s1–e7s7: `node tools/stats.mjs --subject eng`, вирівняти уроки 7 кл. з еталонами (style/eng.md, verified 6 кл.) і між собою.

## Зібрано (memory/short/inbox.md, рядки eng 2026-11-25)
- Прапорці stats «нетипово для сім'ї» в 7 кл. (e7s1 l1/l5/l6, e7s4 l1/l5/l6/l7, e7s5 l2/l5/l6, e7s6 l2/l6, e7s7 l6) — сім'я 7–9 мала; запропонувати калібрування профілю «7-9» (рядок STYLE → decisions.md лише через inbox).
- Герої: звести рядки NOTE (герої) 7 кл. в одну картину — вік (Oksana/Emma 13, Tom 11 у e7s4 vs Tom 10 у 6 кл.), клуби (Taras, Tom), нові персонажі; суперечності — виправити.
- Повтори граматики між розділами (just/since — e7s1↔e7s3 вже зведено; Shall we — e5s6l5; used to — e7s5) — перевірити, що «нове» подано один раз.
- Кома після фронтального підрядного в build (PITFALL e7s6) — однаково в усьому 7 кл.
- `why` розділів — не показувати граматику до уроку (як у style-eng-g6).

## Готово, коли
- [ ] Правки в content/eng/g7-*.js, звіт reports/style/eng-g7.md, рядки STYLE в inbox; зміни ключів і фактів — перелік для точкової повторної верифікації; задача → review.

## Нотатки агента (style-eng-g7, 2026-11-25)
- Звіт: reports/style/eng-g7.md. Змінено e7s1–e7s6 (e7s7 без змін); статус `verified` і id не змінено; ключі — лише e7s5l4 #8 (прибрано другий порядок без коми, «Start with Were»).
- Герої: вік 7 кл. узгоджений (Oksana 13, Dmytro 9, Emma 13, Tom 11 — +1 до 6 кл.); e7s6l2 #9 — минулорічний sports day: «girls’ running race», Oliver замість Tom (як e6s4l6). Taras «doesn’t do much sport» = e6s4l1 (розбіжність з 4–5 кл. — NOTE в inbox).
- `why`: e7s1 → цитата «“I’ve just washed the dishes!”»; plan.js — куратору.
- Термін: e7s2 «past participle» → «the third form» (13 місць + назва екрана).
- Повтори: while — «Remember» (e7s5l4 #3); just/since, Shall we, used to, пасив — подано один раз.
- Кома у build: єдиний виняток (e7s5l4 #8) виправлено; усі 32 build перебрано через app/lang.js — 0 розбіжностей.
- Дрібне: 6 назв екранів за шаблоном, 8 `fbOk` поспіль, 5 нових `hint` у фіналах e7s4l7, e7s5l7, intro e7s4l7.
- validate --section e7s1…e7s7 — 0/0; повний validate — 0 помилок. Build не запускав.
- Профіль «7-9»: без змін (7 кл. в межах із запасом); rwps → 6–55 лише за TQ-126. Рядки STYLE/TERM/PITFALL/NOTE/ENGINE — у inbox.
- Повторна верифікація: reports/style/eng-g7.md §9.

## Нотатки верифікатора (verifier-style-eng-g7, 2026-11-25)
- Звіт: reports/verify/style-eng-g7.md. Перелік §9 і diff b68f92f перевірено: ключі не зламано, другої правильної відповіді немає; e7s5l4 #8 — звуження коректне.
- 1 правка: e7s4l7 T6 `hint` видавав відповідь («Then the adjective») → «Where does enough go: before or after the adjective?».
- Вік героїв 6→7 кл. узгоджений (Dmytro 8→9, Tom 10→11). validate e7s1–e7s7 — 0/0. Build і плейтест — оркестратору.
