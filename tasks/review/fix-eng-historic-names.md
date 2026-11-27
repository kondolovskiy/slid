---
claimed_from: todo
claimed_at: 2026-11-27T07:47:27.428Z
id: fix-eng-historic-names
type: fix
subject: eng
grade: 
depends_on: [style-eng-g11]
status: review
claimed_by: writer-fix-eng-historic-names
created: 2026-11-27
source: orchestrator (рішення людини D-057, memory/short/inbox.md)
---
# Історичні особи — усталене англійське написання з приміткою (D-057)

Рішення людини 2026-11-27: історичні особи в змісті eng пишемо усталено англійською (як в англомовних енциклопедіях і словниках), **з приміткою** про форму за КМУ № 55 при першій згадці в розділі, на неоцінюваному екрані.

## Що зробити
1. `grep` по content/eng/*.js усіх історичних осіб (зокрема: Prymachenko — e10s5; Vernadskyi — e11s5, e11s7; Pylypiv/Pylypiw, Yeleniak/Eleniak, Kadeniuk/Kadenyuk — e11s7; Bilokur, Murashko, Lysenko, Leontovych, Shevchenko, Lesia Ukrainka, Franko, Sikorsky, Bubka, Baiul тощо — звір, чи є розбіжність між КМУ55 і усталеним).
2. Де усталене ≠ КМУ55 — усталене в тексті + одна примітка «In Ukrainian official documents, the name is written …» при першій згадці в розділі. Ключі `word` — обидві форми.
3. Не змінювати: вигаданих героїв, назви об'єктів (Akademik Vernadsky), id.
4. validate --section для кожного зміненого розділу — 0 помилок; звіт reports/verify/fix-eng-historic-names.md з переліком; рядок TERM в inbox для glossary/eng.md.

## Готово, коли
- [ ] Правки, звіт, inbox; задача → review для точкової повторної верифікації.

## Нотатки агента (writer-fix-eng-historic-names, 2026-11-27)
- Змінено: g10-e10s5, g11-e11s5, g11-e11s7, g5-e5s7 (+ пул pe5s7 для однаковості), g11-e11s3, g9-e9s6. Перелік, джерела, відкриті питання — reports/verify/fix-eng-historic-names.md.
- validate: 0 помилок у всіх; e11s5l6, e11s7l6 — попередження readWordsPerScreen 66–67 через примітки.
- Відкрито: Khmelnytskyi у назві пам'ятника (e7s7), Bubka / Kharlan (живі, усталене Sergey / Olga).
