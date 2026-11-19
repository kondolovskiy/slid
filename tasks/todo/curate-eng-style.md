---
id: curate-eng-style
type: curate
subject: eng
depends_on: [design-eng, engine-eng-stats]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# style/eng.md, style/eng-banned.txt і профіль `eng` у style/profiles.json
1. style/eng.md за docs/design/english.md §6.1, §6.3: усе англійською (британська норма); мова пояснень за класами (4–5: речення ≤ 8 слів, шаблонні інструкції; 6–9: ≤ 12; 10–11: ясно); чесне завдання; ліміти текстів читання (4: 50, 5: 80, 6: 120, 7–9: 200, 10: 400, 11: 450 слів — П1407 с. 21 для 10–11); Україна в кожному розділі; «Еталони» (e4s1, e5s1 після верифікації); перелік шаблонних інструкцій (Choose / Match / Put the words in order / Complete …); правило поля `uk` (згорнутий український переклад правила): лише 4–5 кл., лише неоцінювані екрани теорії, лише де плейтест чи верифікатор показали потребу; американський правопис у відповідях приймається (D-054 доповнення); IPA не використовуємо.
2. style/eng-banned.txt — кальки з української («I am agree», «make a photo», «He has 12 years» …) для попередження validate (engine-eng-validate п. 2).
3. Профіль `eng` у style/profiles.json (4, 5-6, 7-9, 10-11) — початкові значення; калібрування — style-eng-g4-5. Зміна профілів — рядком у decisions.md (через куратора).

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.
