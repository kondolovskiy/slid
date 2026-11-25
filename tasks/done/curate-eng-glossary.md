---
claimed_from: todo
claimed_at: 2026-11-19T11:25:39.636Z
id: curate-eng-glossary
type: curate
subject: eng
depends_on: [design-eng]
status: done
claimed_by: curator-eng-glossary
created: 2026-11-19
source: design-eng
---
# memory/long/glossary/eng.md, facts/eng.md, пастки eng у pitfalls-content.md
Роль — куратор пам'яті (скіл memory-curate для формату). За docs/design/english.md §6.2–6.4:
1. glossary/eng.md: британська норма (правопис, лексика, дати, час), терміни граматики англійською (одна форма на предмет), лапки й апостроф, назви України англійською (Kyiv, Odesa…; постанова КМУ № 55 від 27.01.2010 — відкрити й послатися), шаблонні інструкції; IPA не використовуємо (рішення людини 2026-11-19); наголос — підкреслення складу `<u>`.
2. facts/eng.md: «Джерела» (ТОП 3–4, МП-ІМ, П1407 з URL і сторінками — рядки FACT design-eng-1119 в inbox; словники Cambridge, Oxford Learner's, Merriam-Webster, Wiktionary), формат рядка, CONFLICT.
3. pitfalls-content.md: розділ «Англійська» — 10 пасток §6.3.
4. INDEX.md — рядки нових файлів.

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.

## Нотатки (curator-eng-glossary, 2026-11-19)
- **Створено:** `memory/long/glossary/eng.md` (BrE-правопис і лексика з позначками словників, AmE у відповіді — не помилка, дати/час/числа, лапки “ ” + ‘ ’, апостроф ’, терміни граматики — одна форма, наголос `<u>` без IPA, інструкції-шаблони, назви України за КМУ № 55, «Не вирішено»); `memory/long/facts/eng.md` («Джерела»: ТОП 3–4, МП-ІМ, П1407, ДСБСО, № 1273, ПЛ, КМУ55; словники CD, OALD, MW, Wikt; формат рядка; норми №1–6; факти про країни; CONFLICT).
- **Змінено:** `memory/long/pitfalls-content.md` — розділ «Англійська» (10 пасток §6.3 у редакції D-055: усе англійською, AmE у відповіді не помилка, без IPA, `uk` лише 4–5 кл. за потреби) і заголовок файлу; `memory/long/pitfalls.md` — рядок таблиці pitfalls-content; `memory/long/INDEX.md` — 2 нові рядки, рядок pitfalls-content; `memory/short/inbox.md` — 3 рядки design-eng-1119 → facts/eng.md, маркер `2026-11-19-4`, новий рядок BUG (приклад наголосу).
- **КМУ № 55:** zakon.rada.gov.ua/laws/show/55-2010-п з контейнера — connection reset (2 спроби). Звірено за вторинними: uk.wikipedia «Транслітерація українського алфавіту латиницею» (назва, дата, номер, зг → zgh, Згорани — Zghorany, другий варіант на початку слова) і en.wikipedia «Romanization of Ukrainian» (Resolution 55, 27.01.2010; UNGEGN 2012, BGN/PCGN 2019). Статус у facts — «вторинне». gov.uk (BGN/PCGN PDF) — проксі 403.
- **Словники (звірено, URL у facts/eng.md №1–6):** CD colour «UK (US color)», MW colour «chiefly British spelling», OALD flat_1 і lift_2 «(British English)», CD learn «learned or UK also learnt», CD weekend «at the weekend UK (US on the weekend)», CD photograph /ˈfəʊ.tə.ɡrɑːf/ і photographer /fəˈtɒɡ.rə.fər/.
- **Знахідка:** приклад `"pho|+to|graph"` у docs/design/english.md §5.6 і tasks/todo/engine-eng-lang-core.md п. 3 — хибний наголос (photograph — 1-й склад). Рядок BUG в inbox; docs/ і tasks/todo не чіпав.
- **Рішення куратора (на підтвердження вчителем):** лапки подвійні “ ” (апостроф ’ = закривна одинарна; рушій нормалізує ’ → '); час цифрами «3.30 pm»; лише -ise (не Oxford -ize). Внесено в «Не вирішено» глосарію.
- Build не потрібен (зміни лише в memory/ і tasks/).
