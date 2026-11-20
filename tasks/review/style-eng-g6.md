---
claimed_from: todo
claimed_at: 2026-11-20T09:27:34.618Z
id: style-eng-g6
type: style
subject: eng
grade: 6
depends_on: [write-eng-g6-e6s1, write-eng-g6-e6s2, write-eng-g6-e6s3, write-eng-g6-e6s4, write-eng-g6-e6s5, write-eng-g6-e6s6, write-eng-g6-e6s7, write-eng-g6-e6s8]
status: review
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

## Нотатки агента (style-eng-g6, 2026-11-20)
- Звіт: reports/style/eng-g6.md. Змінено 8 розділів e6s1–e6s8 (31 рядок), статус `verified` лишено, ключі завдань не змінено.
- Герої: e6s4l6 sports day — Tom → Oliver (Tom 10 р., у UK primary; Emma 12 — secondary); e6s5 — бабуся й дідусь до Kyiv «in July» (l1), поїздка до Chernihiv — «It’s October… next weekend» (boss); e6s3l7 — «Andrii, Sofiia and Dad», Task 4 «Andrii and Dad made».
- `why` розділу: правило для 6 кл. — граматика, що вже була; нова форма — лише цитатою (як e5s8). Змінено e6s7 → «…ask a friend: “Have you ever been to Kyiv?”»; plan.js синхронізувати куратору.
- «the third form of the verb» — лише в e6s7 після екрана з рядом трьох форм; past participle ніде; правок не треба (TQ-125).
- Дрібне: «Complete the dialogue.» → «Complete the sentences.» (e6s5l6); 11 повторів `fbOk` поспіль; 3 `hint` у фіналі e6s1 (було 0 з 6).
- `build`: усі 40 перебрано з `extra` через app/lang.js — пастки не зараховуються, кількість прийнятих = кількості answer.
- validate --section e6s1…e6s8 — 0 помилок, 0 попереджень; повний validate — 0 помилок; stats — reports/style-eng.md (не комічу).
- Пропозиція профілю: «5-6».readWordsPerScreen 5–40 → 5–45 (решта без змін); ENGINE — z-оцінка в межах класу. Рядки STYLE/NOTE/TERM — у відповіді оркестратору.
- Повторна верифікація (точково): reports/style/eng-g6.md §9.
