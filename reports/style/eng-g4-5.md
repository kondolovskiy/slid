# Синхронізація стилю: англійська 4–5 кл. (style-eng-g4-5)

Дата: 2026-11-20 · скіл `style-sync` · розділи e4s1–e4s8, e5s1–e5s10 (усі `verified`; статус не змінено).
Перевірка: `node tools/validate.mjs --section <id>` для 17 змінених розділів — 0 помилок; повний `node tools/validate.mjs` — 0 помилок;
`node tools/stats.mjs --subject eng` → reports/style-eng.md. build не запускався (оркестратор).

## 1. Що змінено

| # | Пункт задачі | Правка | Розділи |
|---|---|---|---|
| 1 | «penfriend» разом (CD, OALD) | pen-friend / pen friend(s) → penfriend(s), 24 входження; назва значка e4s1boss «Pen-friend club» → «Penfriend club» (id не змінено) | e4s1, e4s2, e4s3, e4s4, e4s6, e4s7, e5s3, e5s5, e5s6, e5s7, e5s9 |
| 2 | `build`-питання — один спосіб | велика перша плитка + `keepCase: true` у 13 питаннях, де їх не було (список — §2) | e4s2, e4s3, e4s4, e4s5, e4s6, e4s8, e5s1, e5s2 |
| 3 | Герої | див. §3 | e4s1, e4s8, e5s1, e5s2, e5s6, e5s8, e5s9 |
| 4 | Формула наголосу | «The underlined part is strong» → «The <u>underlined</u> part is strong» скрізь (слово саме показує, що означає; еталон e4s1) | 4–5 кл., де формула була без `<u>` |
| 5 | Рекомендації верифікатора e5s4 §7 | п. 2: «a dress, a skirt → girls and women wear them» → «a dress → like a T-shirt and a skirt in one» (l1 info); п. 3: hint match l1 «…Find each picture on the list screen» (повернутися не можна) → «A hat is for your head. A coat is long and warm.»; fbBad → «Look at each picture again. What is it?» | e5s4 |

## 2. `build`: перевірка перестановок

Скрипт (node + app/lang.js, `SLID_LANG.check`) перебрав усі перестановки плиток кожного з 65 `build` у 18 розділах і всі підстановки пасток `extra`:
кількість прийнятих перестановок = кількості `answer` (крім трьох із двома однаковими плитками «I» — це той самий рядок), пастка `extra` не зараховується ніде.
Для нових `keepCase` вручну переглянуто всі порядки з великою плиткою першою — другого граматичного питання немає.

Нові `keepCase` + велика перша плитка: e4s2l4 #8 (Where), e4s2l5 #7 (Are), e4s3l6 #5 (Do), e4s4l3 #7 (How), e4s5l3 #7 (How), e4s6l3 #4 (Is), e4s6l7 #3 (Is),
e4s8l2 #7 (What), e5s1l2 #5 (Have), e5s1l6 #4 (What), e5s1l7 #5 (What — boss T5), e5s2l3 #6 (What time), e5s2l6 #7 (How).

**Зміна ключа:** e4s2l5 #7 — з `answer` прибрано другий порядок «In your room are there any posters?»: з великою «Are» він не складається (validate), а велика перша плитка однозначно ставить «Are» першим.

Лишено як є (розповідні, підхід «контекст + fbBad», verifier-e5s5): e4s2l2, e4s2l6, e4s2l7, e4s6l6, e4s8l5, e5s5l3, e5s5l5, e5s5l6, e5s5l7, e5s6l2; розповідні з прийнятим питальним порядком у `answer` — e4s7l4, e5s3l3, e5s10l4, e5s10l5, e5s10l6.
Сумнівне, не правлено: e4s8l2 #7 — з плиток складається «What is the party time?» (було й до правки, граматично можливе, але неприродне) — на розсуд верифікатора: додати в `answer` чи лишити.

## 3. Герої (канон — e5s1 і inbox «NOTE (герої)»)

| Конфлікт | Рішення |
|---|---|
| Sofiia — сестра Andrii і кузина Тараса (дочка Uncle Roman) | кузину перейменовано на **Marta** (e4s1l7 T2, e5s1l7 T1) |
| e4s8: Bohdan (клас Andrii, Kyiv) на дні народження Mariia в кав'ярні в Kharkiv | харківського друга Mariia в e4s8 перейменовано на **Danylo** (21 входження) і в e5s8l6 «Dear Bohdan» → «Dear Danylo»; Bohdan лишився лише однокласником Andrii (e4s3, e4s5, e5s2, e5s6) |
| Kateryna — подруга Mariia в Kharkiv (e4s8) і однокласниця Andrii в Kyiv (e5s2) | у e5s2 (5 входжень) однокласницю перейменовано на **Zoriana**; Kateryna — подруга Mariia (Kharkiv) |
| e5s6: Oksana щочервня в Odesa в дядька Івана vs e5s9 «I’d like to go to Odesa» і «We’re going to visit Odesa in July» | e5s6 «In June, we go to Odesa» → «In July…» і пастка multi «They go camping in June.» → «…in July.» (так само хибна: у липні — Odesa, у серпні — Carpathians); e5s9 l1 intro → «I’d like to go to Odesa **again** because I love the sea.» |
| Daryna (Kyiv, канон оркестратора) у e5s9l5 «Last summer we visited Kyiv. We stayed in a small hotel.» | Kyiv → **Lviv** |

Перевірено без змін: Taras — two brothers + Zlata, dog і cat (e4s7 «My brothers», e5s4 «My brothers», e5s8 «fourth child»); Mariia — only child (жодного «my brother/sister» у її репліках); Oksana — Zelena Dolyna, Dmytro (6) лише як її брат; Andrii — sister Sofiia, Kyiv, кузен Maksym (e4s7, e5s9); Emma — brother Tom, dog, cat Snowy.

## 4. Попередження stats і validate

Помилок 0. Поза профілем (попередження validate):
- **longWordShare** e4s1l6 0,165 (≤ 0,12), e4s7l3 0,19, e5s8l3 0,16 (≤ 0,14), e5s10l2 0,201. Причина — слова теми й власні назви: Ukrainian ×12, nationality ×7, Tkachenko ×5 (e4s1l6); capital ×30, Canada ×13, Australia, Canberra, Ottawa (e4s7l3); December ×17, November ×13, calendar, Nicholas, Independence (e5s8l3); Ireland ×13 (евристика рахує 3 склади), capital, Canada, Wellington, Australia (e5s10l2). Без слів з великої літери частка — 0,085 / 0,093 / 0,056 / 0,048, тобто в межах. Не вирівнювали: це програмні слова теми (ТОП 3–4, МП-ІМ), замінити нічим.
- **readWordsPerScreen** e4s2l6 33 (≤ 30): урок читання з текстом 101 слово (обсяг за програмою 100–150, style/eng.md), поділено на екрани правильно.

«Нетипово для сім'ї» (z-оцінка) без виходу за профіль — e4s1l2, e4s2l1, e4s3l1, e4s3l6, e4s5l1, e4s5l6, e4s6l1, e4s7l1, e4s7l2, e4s7l5, e5s3l2, e5s3l6, e5s4l5, e5s4l6, e5s5l6, e5s5l7, e5s10l6: переглянуто, правок не треба. Причини: малий розкид сім'ї (sd ≈ 10 % середнього), уроки читання й фінали; sentenceWords e4s6l1 занижують однослівні пункти `sort` (місяці).

## 5. Рівень пояснень (A1 → A2)

- Прозова частина `info` (без списків-прикладів) — у межах style/eng.md (≤ 35 слів у 4 кл., ≤ 45 у 5 кл.) в усіх уроках; більше лише e4s6l3 #2 (42) і e4s8l1 #2 (40) — це зразки питань і відповідей, правило там одне речення.
- Граматичні терміни — по 0–1 новому на урок (verb, countable/uncountable, ordinal), кожен поданий зразком. Слово «region» у e4s1l5 — лише в адресі («Poltava region»), не в поясненні.
- Речення пояснень > 10 слів — здебільшого цитати з тексту у `fbText` («Emma writes: “…”»); власне пояснень довших за 12 слів не знайдено.
- **Поле `uk` не додано:** жоден звіт верифікатора (reports/verify/e4s*.md, e5s*.md) не показав, що правило незрозуміле; e4s8 і e5s8 прямо оцінюють рівень пояснень як відповідний. Потреба в `uk` — лише після плейтесту від ролі учня 4–5 кл. (docs/design/english.md §2 п. 5) — рекомендовано оркестратору.

## 6. Пропозиція профілю `eng` (рядок STYLE в inbox; style/profiles.json не змінено)

Фактичні значення (стат. звіт 2026-11-20, звичайні уроки / фінали):

| Метрика | 4 кл. факт (сер. ± sd; min–max) | профіль «4» | 5 кл. факт | профіль «5» / «5-6» | Пропозиція |
|---|---|---|---|---|---|
| screens | 9,1 ± 0,7; 7–10 | 5–10 | 9,5 ± 0,7; 7–11 | 6–11 | без змін |
| gradedShare | 0,62 ± 0,06 (фінал 0,86) | 0,5–0,9 | 0,65 ± 0,07 (фінал 0,86–0,88) | 0,5–0,9 | без змін |
| readWordsPerScreen | 26 ± 3; 20–33 | 4–30 | 29 ± 3; 16–35 | 5–35 | «4»: **4–35** (урок читання з текстом за програмою) |
| maxReadWords | 47 ± 5; max 61 | ≤ 70 | 52 ± 6; max 68 | ≤ 95 | без змін |
| maxText | 43 ± 6; max 57 | ≤ 60 | 48 ± 6; max 63 | ≤ 85 | без змін (запас для 6 кл. потрібен) |
| sentenceWords | 4,7 ± 0,4; 3,6–5,6 | 2,5–7 | 5,0 ± 0,4; 4,2–6,1 | 2,5–8 | без змін |
| longWordShare | med 0,046, p90 0,089, max 0,19 | ≤ 0,12 | med 0,056, p90 0,093, max 0,201 | ≤ 0,14 | або ENGINE: не рахувати слова з великої літери не на початку речення (власні назви) — тоді «4» ≤ 0,10, «5-6» ≤ 0,12; або без змін рушія «4» ≤ 0,20, «5-6» ≤ 0,20 |
| typeVariety | 4,5 ± 0,6; 3–6 | 2–6 | 5,0 ± 0,6; 3–6 | 2–6 | без змін |

Також (ENGINE, на розсуд): z-прапорець «нетипово для сім'ї» не виводити, коли метрика в межах профілю і |z| < 3 — зараз 17 таких прапорців без потреби в правках.

## 7. Не зроблено / наступні кроки
- **e5s5 boss T2 match (3 пари, verifier-e5s5 §6 п. 2):** четверта пара потребує нового малюнка (напр. sun.svg ↔ «sunny»), а ліцензія власних SVG чекає рішення людини (DECISION-NEEDED writer-e5s4) і img/ поза шляхами цієї задачі — пропоную окрему задачу після рішення.
- e5s4 §7 пп. 1, 4–6 — ENGINE / requires / плейтест / credits — не стосуються style-sync.
- Плейтест від ролі учня 4–5 кл. (docs/design/english.md §2 п. 5, §11.2 п. 5) — після build; за його результатами — `uk` там, де потрібно.
- content/eng/plan.js (назви уроків), pools, diag — не чіпав.

## 8. Для точкової повторної верифікації
Змістові правки, що зачіпають ключ чи факт:
1. e4s2l5 #7 — прибрано другий `answer` (див. §2); ще 12 `build` з `keepCase` (§2) — перевірити, що велика плитка не видає відповідь сильніше, ніж треба.
2. e5s6l6 (читання «Oksana’s summer», ч. 1–2): Odesa — липень замість червня; пастка multi «…in July.».
3. e5s9l1 intro (+ again); e5s9l5 gaps — Daryna visited Lviv (не Kyiv).
4. e5s4l1 info — нове визначення dress; hint/fbBad match.
5. Перейменування героїв (Marta, Danylo, Zoriana) — ключів не змінюють, але це текст `gaps`/`pick`/`choice` (e4s1, e4s8, e5s1, e5s2, e5s8).
