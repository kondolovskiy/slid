---
claimed_from: todo
claimed_at: 2026-11-25T12:53:04.072Z
id: style-eng-g8
type: style
subject: eng
grade: 8
depends_on: [write-eng-g8-e8s1, write-eng-g8-e8s2, write-eng-g8-e8s3, write-eng-g8-e8s4, write-eng-g8-e8s5, write-eng-g8-e8s6, write-eng-g8-e8s7, write-eng-g8-e8s8]
status: done
claimed_by: style-eng-g8
created: 2026-11-25
source: orchestrator
---
# Вирівняти стиль і складність англійської 8 кл.

Скіл `style-sync`. Еталон процесу — tasks/*/style-eng-g7.md і reports/style/eng-g7.md (профіль «7-9» не змінювати без рішення). Після верифікації e8s1–e8s8: `node tools/stats.mjs --subject eng`, вирівняти 8 кл. з 7 кл. і між собою.

## Зібрано (memory/short/inbox.md, рядки eng 2026-11-25)
- e8s3 `requires`: додати e7s7l2/e7s7l3 (Past Simple passive — NOTE verifier-e7s7), звір за файлом.
- «pen friend» (e8s1, CD) vs «penfriend» (e4s1, OALD) — обрати одне для предмета (STYLE в inbox; 4 кл. не правити — лише пропозиція), у 8 кл. — однаково.
- Профіль Zofia в e8s1l1 №3 дослівно повторює профіль Mariia; речення 14 слів e8s1l3 екран 3.
- Інтро e8s2l1 (93 слова) — прапорець stats.
- Герої: звести NOTE (герої) 8 кл. з 7 кл. (вік, школи — Oksana: гімназія Years 1–9 (e8s6) vs випускники Year 11 (e7s6); Taras, Tom, Zlata, нові Zofia, Sean, Mr Price, Freya, Denys, Lily, Ms Kvitka, Mr Pavliuk, Mila Lastivka).
- Термін «the third form» — однаково (як 7 кл.); «email» без дефіса; «the internet» з малої.
- `why` розділів — не показувати граматику до уроку.

## Готово, коли
- [ ] Правки в content/eng/g8-*.js, звіт reports/style/eng-g8.md, рядки STYLE в inbox; перелік для точкової повторної верифікації; задача → review.

## Нотатки агента (style-eng-g8, 2026-11-26)
- Звіт: reports/style/eng-g8.md. Змінено e8s1–e8s8; статус `verified` і id не змінено; ключ змінено лише в e8s1l1 #9 (плитка й ключ «a penfriend», перебір через app/lang.js — 1 прийняте речення).
- penfriend: одне написання в 8 кл. (як 4–7, 9 кл. і e8s2/e8s3/e8s6); e8s1 (назва, уроки l1/l7, значок, текст), e8s8 (2 тексти). 4 кл. не чіпав; TERM в inbox.
- Зібране із задачі: e8s3 requires + e7s7l2, e7s7l3; профіль Zofia (e8s1l1 #3) переписано; речення 14 слів (e8s1l3 #3) розбито; intro e8s2l1 скорочено (прапорець знято); «the third form» у e8s3 (11 місць); email / the internet — однаково, правок не треба; `why` e8s1, e8s2, e8s5 — нова граматика лише цитатою.
- Герої: canteen у школі Оксани (e8s3l6 #8 → school lunches), Freya/Oksana → Andrii/Daryna (e8s6l3 #4), клуб penfriend не «started» (e8s1l7); вік і школи зведено (§3).
- Дрібне: 4 інструкції за шаблоном, назва e8s6l6 → England, 15 `fbOk` поспіль, 16 `hint` у 5 фіналах.
- validate --section e8s1…e8s8 — 0/0. Build не запускав. Профіль «7-9» без змін (STYLE в inbox).

## Нотатки верифікатора (verifier-style-eng-g8, 2026-11-26)
- Звіт: reports/verify/style-eng-g8.md. Прийнято: diff 5e9f52b..HEAD у g8 не зламав жодного ключа, другої відповіді немає (перебір build e8s1l1 #9, e8s3l7 T6, e8s4l7 T7 через app/lang.js — по 1 реченню).
- Виправлено 2 `hint`: e8s3l7 T6 (видавав вибір we/they), e8s8l7 T9 (наводив на розмір замість правила).
- Герої 7↔8 кл. узгоджені. g9-e9s1 «pen friend» — NOTE в inbox. validate e8s1–e8s8 — 0/0. Build не запускав.
