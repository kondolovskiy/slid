---
claimed_from: todo
claimed_at: 2026-11-20T08:28:12.056Z
id: style-eng-g4-5
type: style
subject: eng
grade: 
depends_on: [write-eng-g4-e4s1, write-eng-g4-e4s2, write-eng-g4-e4s3, write-eng-g4-e4s4, write-eng-g4-e4s5, write-eng-g4-e4s6, write-eng-g4-e4s7, write-eng-g4-e4s8, write-eng-g5-e5s1, write-eng-g5-e5s2, write-eng-g5-e5s3, write-eng-g5-e5s4, write-eng-g5-e5s5, write-eng-g5-e5s6, write-eng-g5-e5s7, write-eng-g5-e5s8, write-eng-g5-e5s9, write-eng-g5-e5s10]
status: done
claimed_by: style-eng-g4-5
created: 2026-11-19
source: design-eng
---
# Вирівняти стиль і складність англійської 4–5 кл.; калібрувати профіль `eng`

Скіл `style-sync`. Після верифікації e4s1–e4s8 і e5s1–e5s10: `node tools/stats.mjs --subject eng`, вирівняти уроки (особливо рівень англійських пояснень), запропонувати значення профілю `eng` для 4 і 5-6 (рядок STYLE в inbox → decisions.md), записати еталони в style/eng.md. Після хвилі 1 — запропонувати оркестратору плейтест від ролі учня 4–5 кл. (docs/design/english.md §2 п. 5, §11.2 п. 5). Якщо плейтест чи верифікатор покажуть, що пояснення незрозумілі, — додати згорнутий переклад правила `uk` (дозволено людиною 2026-11-19) у ті уроки 4–5 кл., де це потрібно. Для 6–11 кл. — style-eng-g<клас> створює оркестратор після пакета класу.

## Нотатки агента (style-eng-g4-5, 2026-11-20)
- Звіт: reports/style/eng-g4-5.md. Змінено 17 розділів (усі, крім e5s10); статус `verified` лишено; id не змінено.
- penfriend разом (24 входження); 13 `build`-питань → велика перша плитка + `keepCase`, усі 65 `build` перебрано через SLID_LANG.check (другого прийнятого порядку чи зарахованої пастки немає); e4s2l5 #7 — прибрано другий `answer` (зміна ключа).
- Герої: кузина Тараса Sofiia → Marta; e4s8 Bohdan → Danylo (+ e5s8l6); e5s2 Kateryna → Zoriana; Oksana в Odesa — липень (e5s6), «again» (e5s9 l1); Daryna visited Lviv (e5s9l5).
- e5s4 §7 пп. 2–3 виконано; e5s5 boss T2 4-та пара — не зроблено (новий малюнок + ліцензія SVG, DECISION-NEEDED).
- `uk` не додано: потреби не показав жоден звіт верифікатора; чекає плейтесту від ролі учня 4–5 кл.
- Пропозиція профілю — STYLE в inbox (текстом у відповіді оркестратору), style/profiles.json не змінено.
- Перевірки: validate --section для 17 розділів — 0 помилок; повний validate — 0 помилок; stats --subject eng. build не запускав.
- Точкова повторна верифікація — reports/style/eng-g4-5.md §8.

## Верифікація (verifier-style-eng-g4-5, 2026-11-20)
- Звіт: reports/verify/style-eng-g4-5.md — **прийнято**. 65 `build` перебрано (усі підмножини tiles+extra) — пастки не зараховуються, правильні порядки приймаються; e4s8l2 «What is the party time?» не додано (CD/OALD статті немає, Wiktionary — «time for enjoying oneself»).
- Правка: e5s4 l1 — *skirt* жирним у визначенні dress. Рекомендація: e5s9 l5 gaps дублює intro Mariia (Lviv, small hotel).
