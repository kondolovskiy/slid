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
# style/eng.md і профіль `eng` у style/profiles.json
1. style/eng.md за docs/design/english.md §6.1, §6.3: структура уроку, чесне завдання для мови, обсяги (українська й англійська окремо), тексти читання за класами, імена й ситуації, Україна в кожному розділі, BrE (за рішенням §11 п. 3), «Еталони» (порожньо до e5s1).
2. Профіль `eng` у style/profiles.json — початкові значення (5–6, 7–9, 10–11) з `_default` + `enWordsPerScreen`, `enMaxText`; калібрування — style-eng-g5 після e5s1–e5s3. Зміна профілів — рядком у decisions.md (через куратора).
3. Заборонені фрази для англійської (style/banned-phrases.txt — лише українські): чи потрібен список англійських кальок («I am agree», «make a photo», «He has 12 years») — як попередження validate (передати в engine-eng-validate рядком ENGINE).

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.
