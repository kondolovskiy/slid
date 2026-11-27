---
claimed_from: todo
claimed_at: 2026-11-27T07:37:47.245Z
id: style-eng-g11
type: style
subject: eng
grade: 11
depends_on: [write-eng-g11-e11s1, write-eng-g11-e11s2, write-eng-g11-e11s3, write-eng-g11-e11s4, write-eng-g11-e11s5, write-eng-g11-e11s6, write-eng-g11-e11s7, write-eng-g11-e11s8]
status: done
claimed_by: style-eng-g11
created: 2026-11-27
source: orchestrator
---
# Вирівняти стиль і складність англійської 11 кл.; калібрування профілю `eng` «10-11» (разом з 10 кл.)

Скіл `style-sync`. Еталон процесу — tasks/done/style-eng-g10.md, reports/style/eng-g10.md, reports/verify/style-eng-g10.md. Після верифікації e11s1–e11s8: `node tools/stats.mjs --subject eng`, вирівняти 11 кл. з 10 кл. і між собою.

## Зібрано (memory/short/inbox.md, рядки eng 2026-11-26…27)
- Прапорці stats у 11 кл. — переважно уроки читання (400–450 слів, П1407): e11s2l1/l6, e11s3l4/l5/l6, e11s4l4–l6, e11s5l6, e11s7l2/l6, e11s8l2; профіль «10-11»: пропозиція style-eng-g10 — readWordsPerScreen [8,65] → [8,70]; sentenceWords і longWordShare — після 11 кл. (дай остаточну пропозицію STYLE для 10–11 разом).
- Тексти читання 11 кл. — ≥ 400 слів, maxText ≤ 190.
- Герої: звести NOTE (герої) 11 кл. з 7–10 кл. (вік +1: Oksana 17; ветеринарія в Харкові (e11s8) vs мистецтво як хобі (e11s4); Orysia «two years ago» (e11s7) vs e10s3; нові Ms Romaniuk, Yehor, Mr Levchenko, Dr Shapoval, Maksym, Mr Ivanenko, Mrs Popovych, Ms Hrytsenko, Solomiia, Yustyna; e11s8 l4 «finally made up my mind» vs фінал — вирішує на зворотному шляху).
- Імена: Vernadskyi (людина) / Akademik Vernadsky (станція); Mariia Prymachenko; QUESTION verifier-e11s7 — Pylypiw/Eleniak/Kadenyuk vs КМУ55 — не правити до рішення, лише однаково в межах 11 кл.
- Терміни як 7–10 кл.: the third form, email, the internet, penfriend, chat show; `why` без граматики до уроку; hint у фіналах не підписують пропуски (PITFALL style-eng-g10).
- plan.js — лише пропозиції STYLE (оркестратор синхронізує).

## Готово, коли
- [ ] Правки в content/eng/g11-*.js, звіт reports/style/eng-g11.md, рядки STYLE в inbox; перелік для точкової повторної верифікації; задача → review.

## Нотатки агента (style-eng-g11, 2026-11-27)
- Звіт: reports/style/eng-g11.md. Змінено e11s1–e11s8 (база diff — HEAD 5988f40, не закомічено); статус `verified` і id не змінено; ключі (`correct`, `{*…}`, `answer`, `tiles`, `extra`) і `opts` не змінено ніде (механічна звірка). diag-g11.js (паралельний агент) не чіпав.
- Тексти читання (лише уривки): e11s1l7 341 → 410, e11s6l6 389 → 408 — речення без нових фактів; maxText ≤ 147. Решта текстів 400–450 уже ≥ 400 (e11s2l6 402 … e11s3l5 429).
- Герої: e11s5 Maksym → Pavlo; e11s8 Ms Hrytsenko → Ms Klymenko, Solomiia → Uliana; e11s4l2 «I’m thinking of studying art history»; e11s8l4 «Oksana thinks she has made up» / «I think I’ve made up my mind»; e11s8l5 Emma (astronomer узимку → doctor). Orysia «two years ago» — узгоджено, без правок.
- 12 нових `hint` у фіналах e11s2l7, e11s3l7, e11s4l7, e11s6l7 (по 3; текст — §2 звіту); 5 наявних hint переставлено (e11s5l7 T2, e11s7l7 T3, e11s8l7 T1/T2/T4); 11 `fbOk` поспіль → «Brilliant!»; e11s7l7 title → «Our class project: Ukraine in the world».
- Терміни: the third form, email, the internet, penfriend, chat show — однаково. Vernadskyi / Akademik Vernadsky — однаково; D-057 (нове) — задача fix-eng-historic-names, не правив.
- validate --section e11s1…e11s8 — 0 помилок; 1 попередження e11s6l6 rwps 67 > 65 → остаточна STYLE-пропозиція «10-11»: rwps [8, 70], sentenceWords [4, 13], longWordShare [0, 0.22] (inbox). Профіль, style/, decisions.md, plan.js не змінював. Build і commit не робив.
- Точкова повторна верифікація — §7 звіту.

## Нотатки верифікатора (verifier-style-eng-g11, 2026-11-27)
- Прийнято, правок немає. Ключі не змінено (скрипт: усі key-поля до/після; змінено лише `left` e11s8l4 match — без другої пари). Перелік §7, 12 нових і 5 переставлених hint, тексти e11s1l7 і e11s6l6, перейменування — ✅. Звіт: reports/verify/style-eng-g11.md, частина 1.
