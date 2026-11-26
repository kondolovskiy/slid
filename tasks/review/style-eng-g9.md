---
claimed_from: todo
claimed_at: 2026-11-26T10:21:35.624Z
id: style-eng-g9
type: style
subject: eng
grade: 9
depends_on: [write-eng-g9-e9s1, write-eng-g9-e9s2, write-eng-g9-e9s3, write-eng-g9-e9s4, write-eng-g9-e9s5, write-eng-g9-e9s6, write-eng-g9-e9s7, write-eng-g9-e9s8, write-eng-g9-e9s9]
status: review
claimed_by: style-eng-g9
created: 2026-11-26
source: orchestrator
---
# Вирівняти стиль і складність англійської 9 кл.

Скіл `style-sync`. Еталон процесу — tasks/done/style-eng-g8.md, reports/style/eng-g8.md (профіль «7-9» не змінювати без рішення). Після верифікації e9s1–e9s9: `node tools/stats.mjs --subject eng`, вирівняти 9 кл. з 7–8 кл. і між собою.

## Зібрано (memory/short/inbox.md, рядки eng 2026-11-25…26)
- «pen friend» у content/eng/g9-e9s1.js (~рядок 266) → «penfriend» (як 4–8 кл.).
- Прапорці stats у 9 кл.: e9s1l2, e9s2l2, e9s3l1, e9s4l2, e9s6l1/l2, e9s7l6, e9s8l3/l6, e9s9l6/l7; longWordShare близько межі 0,18, readWordsPerScreen близько 50 — стежити.
- Герої: звести NOTE (герої) 9 кл. з 7–8 кл. (вік +1, школи, клуби; нові Stepan Lytvyn, Ivanka, Marko, Hlib, Ms Bilyk, Ms Datsenko, Mr Moroz; Taras і спорт — розбіжність 4–5 кл. vs 6–7 кл., NOTE style-sync g7).
- «chat show» першим, «talk show» другим (e9s4, BrE); e9s4l5 екран 5 — «Switch off your phones» приписано не тому мовцю.
- «partly agree» — однаково в e9s3l6 і e9s9.
- Термін «the third form», «email», «the internet», `why` без граматики до уроку — як 7–8 кл.
- plan.js — лише пропозиції STYLE (оркестратор синхронізує).

## Готово, коли
- [ ] Правки в content/eng/g9-*.js, звіт reports/style/eng-g9.md, рядки STYLE в inbox; перелік для точкової повторної верифікації; задача → review.

## Нотатки агента (style-eng-g9, 2026-11-26)
- Звіт: reports/style/eng-g9.md. Змінено e9s1–e9s9; статус `verified` і id не змінено; ключі (`correct`, `{*…}`, `answer`) не змінено ніде, змінено лише дистрактор e9s4l1 #6 (talk show → chat show).
- Зібране із задачі: penfriend (e9s1l2 #10); chat show першим, talk show — «also» (e9s4 l1, l2, назва l2); e9s4l5 #5 — «What did Mr Moroz say?»; partly agree однаково (e9s3l6 info/fbText/outro, e9s3l7 T8 — «agrees only partly» замість «polite disagreement»); «+ the third form» — 48 замін у e9s6, e9s8; email / the internet — однаково, правок не треба; `why` e9s8 — нова граматика лише цитатою.
- Герої: Oksana в Odesa в дядька Ivan — July (e9s5l5 #11, як e5s6 і e9s8); решту звірено з 4–8 кл. (§3 звіту), Taras і спорт — відкрито, як у NOTE style-sync g7.
- Дрібне: 21 новий `hint` у фіналах (у кожному від 3; повний текст — §2 звіту), 21 `fbOk` поспіль замінено.
- Точкова повторна верифікація — §7 звіту. validate --section e9s1…e9s9 — 0/0. Build і commit не робив. Профіль «7-9» без змін; plan.js (e9s4l2, why e9s8) — STYLE в inbox.
