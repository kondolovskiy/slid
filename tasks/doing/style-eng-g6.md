---
claimed_from: todo
claimed_at: 2026-11-20T09:27:34.618Z
id: style-eng-g6
type: style
subject: eng
grade: 6
depends_on: [write-eng-g6-e6s1, write-eng-g6-e6s2, write-eng-g6-e6s3, write-eng-g6-e6s4, write-eng-g6-e6s5, write-eng-g6-e6s6, write-eng-g6-e6s7, write-eng-g6-e6s8]
status: todo
claimed_by: style-eng-g6
created: 2026-11-20
source: orchestrator
---
# Вирівняти стиль і складність англійської 6 кл.; калібрувати профіль `eng` «5-6»

Скіл `style-sync`. Після верифікації e6s1–e6s8: `node tools/stats.mjs --subject eng`, вирівняти уроки 6 кл. з еталонами (style/eng.md) і між собою.

## Зібрано верифікаторами (memory/short/inbox.md, рядки eng 2026-11-20)
- Прапорці «нетипово для сім'ї» в 6 кл. — сім'я eng переважно 4–5 кл.; запропонувати калібрування профілю «5-6» (рядок STYLE → decisions.md).
- readWordsPerScreen ≤ 40 і TQ-123 (≥ 160 слів у тексті 6 кл.) майже несумісні для уроку читання з 8 екранами (e6s7l6).
- `why` розділів 6 кл. показує граматику розділу до уроку (e6s3 «meals you had», e6s7 «places you have visited», e6s8) — вирішити для класу.
- Герої: Tom (молодший за Emma) на sports day у школі Emma (e6s4); у e6s5 бабуся й дідусь до Kyiv «next week» і сім'я Andrii до Chernihiv «next weekend» — розвести; e6s3 фінал — Andrii смажить деруни «with Dad».
- Термін «the third form of the verb» (e6s7, TQ-125) — узгодити з рештою 6 кл.

## Готово, коли
- [ ] Правки в content/eng/g6-*.js, звіт reports/style/eng-g6.md, рядки STYLE в inbox; зміни ключів і фактів — перелік для точкової повторної верифікації; задача → review.
