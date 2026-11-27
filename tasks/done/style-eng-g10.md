---
claimed_from: todo
claimed_at: 2026-11-26T11:03:13.326Z
id: style-eng-g10
type: style
subject: eng
grade: 10
depends_on: [write-eng-g10-e10s1, write-eng-g10-e10s2, write-eng-g10-e10s3, write-eng-g10-e10s4, write-eng-g10-e10s5, write-eng-g10-e10s6, write-eng-g10-e10s7, write-eng-g10-e10s8]
status: done
claimed_by: style-eng-g10
created: 2026-11-26
source: orchestrator
---
# Вирівняти стиль і складність англійської 10 кл.; перше калібрування профілю `eng` «10-11»

Скіл `style-sync`. Еталон процесу — tasks/done/style-eng-g9.md, reports/style/eng-g9.md, reports/verify/style-eng-g9.md. Після верифікації e10s1–e10s8: `node tools/stats.mjs --subject eng`, вирівняти 10 кл. з 9 кл. і між собою.

## Зібрано (memory/short/inbox.md, рядки eng 2026-11-26)
- Прапорці stats «нетипово для сім'ї» в 10 кл. (уроки читання e10s1l7, e10s3l1, e10s4l6, e10s5l5, e10s6l6, e10s7l1/l7, e10s8l2 тощо) — сім'я 10–11 мала; запропонувати калібрування профілю «10-11» (рядок STYLE → decisions.md лише через inbox).
- Обсяг текстів читання 10 кл. (350–400) — у кількох уроках 345–352, вирівняти до ≥ 350, не перевищуючи maxText 190.
- Герої: звести NOTE (герої) 10 кл. з 7–9 кл. (вік +1; школи: Oksana — ліцей у Poltava (e10s8); Marko → Arsen, Hnatiuk → Hnatyshyn (verifier-e10s8); нові Artem, Ivanna, Mr Lukashuk, Orysia, Mr Hill, Priya, Sam, Megan, Leah, Iryna Tkachuk; Taras і спорт — давня розбіжність).
- Імена історичних осіб: «Mariia Prymachenko» (КМУ55, verifier-e10s5) — однаково.
- Термін «the third form» / «past participle (the third form)», «email», «the internet», «penfriend», «chat show» — як 7–9 кл.; `why` без граматики до уроку.
- hint у фіналах — не розкривають відповідь (знахідки style-eng-g8/g9).
- plan.js — лише пропозиції STYLE (оркестратор синхронізує).

## Готово, коли
- [ ] Правки в content/eng/g10-*.js, звіт reports/style/eng-g10.md, рядки STYLE в inbox; перелік для точкової повторної верифікації; задача → review.

## Нотатки агента (style-eng-g10, 2026-11-26)
- Звіт: reports/style/eng-g10.md. Змінено e10s1–e10s8 (база diff — HEAD 02f2e1d, не закомічено); статус `verified` і id не змінено; ключі (`correct`, `{*…}`, `answer`, `tiles`, `extra`) не змінено ніде; варіанти e10s8l7 T9 — лише професія (app developer → wind turbine technician, як e10s8l6).
- Тексти читання (лише уривки): e10s2l3 234 → 352, e10s3l1 310 → 366, e10s4l6 334 → 355 — додано речення без нових фактів (думки й побут героїв); maxText ≤ 137. Решта текстів уже ≥ 350.
- Герої: e10s8l4 Kateryna → Daryna; e10s8l2 Nazar → Ruslan; e10s8l6 Iryna Tkachuk → Iryna Kostenko; e10s1l3 «In July, Ostap had a birthday party» (22 July, e5s8); e10s1l5 «his neighbour Mr Lukashuk». Leah / «one cousin, Jack» і Taras і спорт — відкрито (inbox).
- Терміни: e10s4 «past participle» → «the third form» (4 місця, місток лишився); email, the internet, penfriend, Mariia Prymachenko — однаково, правок не треба.
- 15 нових `hint` у фіналах e10s2l7, e10s3l7, e10s4l7, e10s5l7, e10s8l7 (по 3; текст — §2 звіту); 16 `fbOk` поспіль замінено.
- validate --section e10s1…e10s8 — 0 помилок; 1 попередження e10s4l6 readWordsPerScreen 67 > 65 (наслідок обсягу 355 слів) → STYLE-пропозиція «10-11» rwps 65 → 70 в inbox. Профіль і style/ не змінював; plan.js (e10s4l5 «By 2050» vs «By 2030») — STYLE в inbox. Build і commit не робив.
- Точкова повторна верифікація — §7 звіту.

## Нотатки верифікатора (verifier-style-eng-g10, 2026-11-26)
- Звіт: reports/verify/style-eng-g10.md — **прийнято**. Ключі в g10-e10s1…e10s8 не змінено (механічна звірка з 02f2e1d), другої правильної відповіді й нових фактів немає; e10s8l7 T9 узгоджено з l6; перейменування героїв узгоджені з 4–9 кл.
- 3 ⚠️ виправлено: порядок категорій у hint e10s2l7 T4, e10s3l7 T9, e10s8l7 T7 (збігався з порядком пропусків; у звіті style твердження «порядок навмисно не той» для e10s3l7 T9 було хибним).
- validate e10s1…e10s8 — 0 помилок; 1 попередження e10s4l6 rwps 67 > 65 — калібрування профілю «10-11» (людина, decisions.md). Build/commit/плейтест не робив.
