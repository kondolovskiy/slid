---
claimed_from: todo
claimed_at: 2026-11-25T12:44:41.404Z
id: write-eng-g9-e9s6
type: write-section
subject: eng
grade: 9
section: e9s6
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e9s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Наука й винаходи» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: відомі вчені та винахідники; винаходи; сучасні пристрої в житті й побуті — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): passive (common forms): Present Simple, Past Simple, Present Continuous, після модальних (B1: Passives — Infinitive, Past simple, Present continuous, Present simple) — повторення й узагальнення (e6s3l2, e6s7l3, e7s2, e7s7, e8s3); Can: general truths — Phones can be used to… (B1: Can) — нове; повторення: could (ability) (e6s4l3).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** by + agent — лише коли важливо, хто; винахідники й дати — з двох джерел (Ivan Puluj, Igor Sikorsky та ін.); спірних «першостей» не стверджувати; inventor — B2 у CD, gadget — C1 (не вводити; device). Опис приладу — с. 31 («Пише короткий, простий опис знайомого прилада чи продукту»); бренди не називати. `requires`: e6s3l2, e6s7l3, e6s4l3; після появи e7s7, e8s3 — уроки пасиву (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s6.js`: `SLID.section("eng", { id: "e9s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s6, 2026-11-26.** `content/eng/g9-e9s6.js` — 7 уроків (6 + boss), draft; validate --section e9s6 — 0 помилок, 0 попереджень; stats: l1 longWordShare 0,18 (z=2,9, тема: scientist, inventor, discovery, experiment), l6 gradedShare z=2,1 — у межах профілю 7–9, для style-sync. Без dialog (D-056), без звуку, без img, бренди не названо. Build не запускав.

Уроки: e9s6l1 Famous scientists and inventors · e9s6l2 Who invented it? It was invented by… · e9s6l3 From the telephone to the smartphone (could — повт., can: general truths — нове) · e9s6l4 How is it made? How is it used? (Present Simple passive — повт.; used to + verb / used for + -ing) · e9s6l5 Smart devices in our homes (can be + V3; Present Continuous passive — повт., 1 пропуск) · e9s6l6 My favourite device: a short description · e9s6l7 Science Week: the final quiz (boss, 9 завдань з `pre`).
`requires`: e6s3l2, e6s4l3, e6s7l3, e7s2l4, e7s7l2, e7s7l3, e8s3l3 (усі id існують).

**Факти (≥ 2 джерела):**
- Marie Curie — 1903 перша жінка з Нобелівською премією; дві премії; працювала у Франції; радій відкрили Marie і Pierre Curie (Нобель 1911: «discovery of the elements radium and polonium») — https://www.nobelprize.org/prizes/physics/1903/marie-curie/article/ ; https://www.nobelprize.org/prizes/chemistry/1911/summary/ ; https://physicstoday.aip.org/news/marie-skłodowska-curie ; https://en.wikipedia.org/wiki/Radium (рік відкриття радію не називаю).
- Igor Sikorsky — нар. у Києві 1889, навчався в КПІ, переїхав до США, конструював гелікоптери там; КПІ названо його ім'ям (2016) — https://en.wikipedia.org/wiki/Igor_Sikorsky ; https://uk.wikipedia.org/wiki/Ігор_Сікорський ; https://www.britannica.com/biography/Igor-Sikorsky (через WebSearch); https://www.asme.org/about-asme/engineering-history/landmarks/95-Sikorsky-VS-300-Helicopter ; https://www.pravda.com.ua/eng/news/2016/08/26/7118746/ . Написання «Igor Sikorsky» — так писав сам і так в офіційній назві «Igor Sikorsky Kyiv Polytechnic Institute» (glossary/eng.md: власне написання людини). «Перший гелікоптер» не стверджую.
- Kateryna Yushchenko — українська науковиця-програмістка; 1955 — мова програмування Address — https://en.wikipedia.org/wiki/Kateryna_Yushchenko_(scientist) ; https://en.wikipedia.org/wiki/Address_programming_language ; https://uk.wikipedia.org/wiki/Ющенко_Катерина_Логвинівна . «Одна з перших мов високого рівня» — свідомо не пишу (в en.wiki [citation needed]).
- Tim Berners-Lee — британський науковець, винайшов World Wide Web 1989 у CERN біля Женеви — https://home.cern/science/computing/birth-web/short-history-web (через WebSearch); https://www.britishcouncil.org/anyone-anywhere/history-web ; https://en.wikipedia.org/wiki/Tim_Berners-Lee .
- Alexander Fleming — пеніцилін відкрито в Лондоні 1928 — https://sciencehistory.org/education/scientific-biographies/alexander-fleming/ ; https://en.wikipedia.org/wiki/Discovery_of_penicillin ; https://microbiologysociety.org/blog/86th-anniversary-of-fleming-s-discovery-of-penicillin-the-first-antibiotic.html .
- Bell — 1876 отримав патент на телефон; «Other inventors worked on telephones too» (пріоритет спірний — Reis, Gray, Meucci) — https://www.history.com/this-day-in-history/march-7/alexander-graham-bell-patents-the-telephone ; https://en.wikipedia.org/wiki/Alexander_Graham_Bell ; https://history.ieee.org/programs/ieee-global-museum/the-telephonic-bell/ .
- Martin Cooper — 1973, Нью-Йорк, дзвінок із мобільного на вулиці («a famous call», без «first»); телефон > 1 кг (2,5 lb), заряджався 10 год (час розмови в джерелах 20–35 хв — не називаю) — https://en.wikipedia.org/wiki/Martin_Cooper_(inventor) ; https://www.npr.org/sections/alltechconsidered/2012/07/09/156481784/father-of-the-cellphone-unleashed-worlds-callers-from-copper-wires ; https://www.guinnessworldrecords.com/news/2015/8/60/1973-first-mobile-phone-call-392969 .
- Перше SMS — 3.12.1992, UK, «Merry Christmas», з комп'ютера на телефон; телефон одержувача не міг надсилати тексти, відповіді не було — https://www.history.com/this-day-in-history/december-3/first-sms-text-message-sent ; https://en.wikipedia.org/wiki/Neil_Papworth ; https://www.vodafone.com/news/technology/25-anniversary-text-message (дата в тексті уроку — лише рік).
- Скло — пісок та інші матеріали змішують, нагрівають до плавлення, формують, повільно охолоджують (без температур — джерела розходяться) — https://www.corning.com/worldwide/en/innovation/materials-science/glass/how-glass-made.html ; https://www.explainthatstuff.com/glass.html ; https://www.pilkington.com/en-gb/united-kingdom/knowledge-hub-selection/architectural-and-technical-glass-knowledge-hub/learn-about-glass-technology/chemistry-of-glass .

**Граматика й словники:** CD Grammar «Can» (General truths: «usually, but not always, true»; could для теперішньої загальної правди — лише можливість) — https://dictionary.cambridge.org/grammar/british-grammar/can ; «Passive: forms» (modal: can be + V3) — https://dictionary.cambridge.org/grammar/british-grammar/passive-forms ; «Passives with and without an agent» (by — коли агент важливий) — https://dictionary.cambridge.org/grammar/british-grammar/passives-with-and-without-an-agent ; OALD use_1 («use something for doing something», «use something to do something») — https://www.oxfordlearnersdictionaries.com/definition/english/use_1 . Наголос UK (CD): scientist 1-й, inventor/invention 2-й, discovery 2-й, experiment 2-й, device 2-й, battery 1-й, charger 1-й, smartwatch 1-й, thermometer 2-й, microscope 1-й, telescope 1-й, patent 1-й, smartphone 1-й. Рівні CD: inventor B2, device B2, telescope/thermometer B2, discovery B2 — вводжу з поясненням; gadget не вживаю.

**Друга правильна відповідь — що відсічено:** can/could протиставляю лише з маркером минулого (In 1973, In 1992, Twenty years ago); у теперішньому — хибні лише форми (cans, can to), бо could у теперішньому граматичне (CD). l3 #6 і фінал: couldn’t ↔ couldn’t to / not could (can’t про той самий старий телефон теж правда). l5 #5: «need to {charge|charger|battery}» (switch off прибрано — граматичне й доречне). l6 #7 word «used ___ drawing» — ключ for, in. Build: l3, l6 — питальні порядки в `answer`, перші плитки з малої, без keepCase; l2, l4 — один порядок з keepCase. l2 #7 choice «Choose the best answer»: «repaired by somebody» граматичне, але суперечить правилу екрана #6 (CD: агент не важливий → без by) — верифікатору звірити.

**Опори (D-019):** l1 #6 → #5; l2 #4 radium — у body екрана; l2 #8 match → #3, #4, #7; l3 #3 → #2; boss T9 — текст на екрані (e-book reader — нове слово, але відповідь у тексті).
Герої: Andrii, Zoriana, Daryna, Ms Lysenko (Kyiv); Emma, Tom, їхній Grandad (England); Oksana, Grandad Mykola, Dmytro (Zelena Dolyna); Taras (Lviv, School 5 News); Mariia (Kharkiv) і uncle Oleh (e5s1); бабуся Andrii (без імені). Нових немає. Майстерня скла в Lviv — вигадана, без назви.
