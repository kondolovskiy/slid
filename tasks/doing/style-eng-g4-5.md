---
claimed_from: todo
claimed_at: 2026-11-20T08:28:12.056Z
id: style-eng-g4-5
type: style
subject: eng
grade: 
depends_on: [write-eng-g4-e4s1, write-eng-g4-e4s2, write-eng-g4-e4s3, write-eng-g4-e4s4, write-eng-g4-e4s5, write-eng-g4-e4s6, write-eng-g4-e4s7, write-eng-g4-e4s8, write-eng-g5-e5s1, write-eng-g5-e5s2, write-eng-g5-e5s3, write-eng-g5-e5s4, write-eng-g5-e5s5, write-eng-g5-e5s6, write-eng-g5-e5s7, write-eng-g5-e5s8, write-eng-g5-e5s9, write-eng-g5-e5s10]
status: todo
claimed_by: style-eng-g4-5
created: 2026-11-19
source: design-eng
---
# Вирівняти стиль і складність англійської 4–5 кл.; калібрувати профіль `eng`

Скіл `style-sync`. Після верифікації e4s1–e4s8 і e5s1–e5s10: `node tools/stats.mjs --subject eng`, вирівняти уроки (особливо рівень англійських пояснень), запропонувати значення профілю `eng` для 4 і 5-6 (рядок STYLE в inbox → decisions.md), записати еталони в style/eng.md. Після хвилі 1 — запропонувати оркестратору плейтест від ролі учня 4–5 кл. (docs/design/english.md §2 п. 5, §11.2 п. 5). Якщо плейтест чи верифікатор покажуть, що пояснення незрозумілі, — додати згорнутий переклад правила `uk` (дозволено людиною 2026-11-19) у ті уроки 4–5 кл., де це потрібно. Для 6–11 кл. — style-eng-g<клас> створює оркестратор після пакета класу.
