---
claimed_from: todo
claimed_at: 2026-11-25T12:07:14.548Z
id: write-eng-g7-e7s5
type: write-section
subject: eng
grade: 7
section: e7s5
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e7s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Спорт: змагання й секції» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: види спорту; спортивні змагання; відомі спортсмени; клуби, секції — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): used to: no longer true (B1: Used to) — нове; Past Continuous with while, negative and questions, interrupted actions (B1: Past continuous — negative, questions, reason) — розширення e6s4l4–l5; the first / the best … to + infinitive: the first Ukrainian to win (B1: Superlatives — with noun and to-infinitive) — нове; повторення: Past Simple irregular (e6s3l4), could (ability) (e6s4l3).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** when / while — у частині речень можливі обидва → контекст або обидва в ключі; «Did you use to…?», «didn’t use to» — правопис за CD Grammar «Used to»; used to — лише про минуле. Відомі спортсмени — українські й британські; кожен факт (медалі, рекорди, роки) — з двох джерел (olympics.com, en/uk.wikipedia), без приватних деталей живих людей; фото — лише з відкритою ліцензією. sport (BrE, загальне) і sports club — facts/eng.md №14. Не повторювати види спорту e6s4l1: тут змагання, клуби, секції, спортсмени. `requires`: e6s4l1, e6s4l3, e6s4l4, e6s4l5, e6s3l4, e5s10l5. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s5.js`: `SLID.section("eng", { id: "e7s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e7s5, 2026-11-25.** Файл `content/eng/g7-e7s5.js`, 7 уроків (6 + boss), усі `draft`; `validate --section e7s5` — 0 помилок, 0 попереджень. `requires`: e5s10l5, e6s3l4, e6s4l1, e6s4l3, e6s4l4, e6s4l5 (за задачею). Діалоги — репліками в `body` (D-056), без `dialog`, без звуку й `uk`; зображень немає (у eng не обов'язкові).

**Уроки:**
- e7s5l1 «A race, a match, a tournament: competitions» — race / match / tournament / championship / champion / final, take part in, come first / second / third, gold / silver / bronze medal.
- e7s5l2 «Joining a club: which club is right for you?» — join, member, coach, train, training, beginner, twice a week; питання How often / How much / Can beginners join / What do I need to bring; Find the mistake «join to».
- e7s5l3 «I used to play football, but now I swim» — used to (нове), didn’t use to, Did you use to…? – Yes, I did; повторення could (фінал).
- e7s5l4 «While we were playing, it started to snow» — while + long + short (повторення e6s4l5, завдання 2 оцінюване з `pre: e6s4l5`), while + long + long, wasn’t / weren’t + -ing, Were you…? – Yes, we were, because + Past Continuous (reason) — як розширення (Р3 curate-eng-plan-g7-9).
- e7s5l5 «The first Ukrainian to win: famous athletes» — the first / the youngest / the only + noun + to + verb (нове); Past Simple irregular: won, ran, became, broke.
- e7s5l6 «The day we won: a story about a competition» — текст для читання у 2 екрани (уривки ≈ 75 і 80 слів), питання до всього тексту — лише про загальний зміст; будова розповіді (Past Continuous — тло, Past Simple — дія, думка «I think… the best day of my life» — функція «надавати оцінку»); order, match, word.
- e7s5l7 boss «Our club newsletter» — 7 завдань, по одному на урок (l4 — два), `pre` на кожному.

**Факти про спортсменів (≥ 2 джерела кожен, перевірено 2026-11-25):**
- Oksana Baiul — олімпійська чемпіонка 1994 р. (Lillehammer, фігурне катання), перша олімпійська чемпіонка незалежної України; чемпіонка світу 1993 — https://en.wikipedia.org/wiki/Oksana_Baiul («the first Olympic champion of independent Ukraine in any sport»); https://en.wikipedia.org/wiki/Ukraine_at_the_1994_Winter_Olympics (перші Ігри України як незалежної держави); https://olympics.com/en/athletes/oksana-baiul (Lillehammer 1994, 1 gold).
- Serhii Bubka (КМУ № 55; en.wiki — Sergey Bubka) — перший стрибун із жердиною, що подолав 6,00 м, 13 July 1985, Paris — https://en.wikipedia.org/wiki/Sergey_Bubka («cleared 6.00 meters … for the first time on 13 July 1985 in Paris»); https://worldathletics.org/news/feature/sergey-bubka-first-six-metre-pole-vault. В уроці — лише рік 1985 і «the first person to jump six metres».
- Yaroslava Mahuchikh — світовий рекорд 2,10 м, 7 July 2024, Paris Diamond League (попередній 2,09 м, Kostadinova 1987 → «the first woman to jump so high»); олімпійська чемпіонка Paris 2024 (серпень) — https://olympics.com/en/news/paris-diamond-league-2024-ukraine-s-yaroslava-mahuchikh-and-faith-kipyegon-set-world-records; https://worldathletics.org/news/report/meeting-de-paris-diamond-league-2024-world-record; https://en.wikipedia.org/wiki/Yaroslava_Mahuchikh. «from Dnipro» — як у verified e6s4l6.
- Roger Bannister — перша миля швидше за 4 хв, 6 May 1954, Iffley Road, Oxford, 3:59.4 — https://en.wikipedia.org/wiki/Roger_Bannister; https://www.guinnessworldrecords.com/world-records/first-person-to-run-a-mile-in-less-than-four-minutes; https://worldathletics.org/heritage/plaque/news/roger-bannister-sub-four-minute-mile-70-years. «a mile (about 1,600 metres)» — 1 миля = 1609,344 м.
- Приватних деталей живих спортсменів немає; фото не брав.

**Форми й слова (curl, 2026-11-25):**
- used to — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/used-to: «things in the past which are no longer true»; «Not: … We use to go»; negative «didn’t use(d) to … many people consider the form with the final -d to be incorrect, and you should not use it in exams»; «Did you use to…». → TQ-158 (форма з -d як хибний варіант в одному пропуску l3).
- come second «to have or achieve a particular position in a race, competition» — CD come (B1) https://dictionary.cambridge.org/dictionary/english/come; OALD come_1. take part in — CD https://dictionary.cambridge.org/dictionary/english/take-part. join «to become a member of an organization» (A2) — CD https://dictionary.cambridge.org/dictionary/english/join (тому «join to» — помилка в pick).
- sports club — OALD sport_1 (приклад «community sports club»); sport загальне — facts/eng.md №14.
- Рівні CD: competition A2–B1, tournament B1, championship B1, champion B1, medal B1, coach A2/B1, member A2, beginner A2, score B1, final A2, athlete B1, training B1.
- Наголос CD (UK): competition ˌkɒm.pəˈtɪʃ.ən → com|pe|+ti|tion; tournament ˈtʊə.nə.mənt; championship / champion ˈtʃæm-; medal ˈmed-; athlete ˈæθ-; beginner bɪˈɡɪn-; Olympic əˈlɪm-; hero — 1-й склад (CD hero).
- the first / the only / superlative + noun + to-infinitive — https://grammaring.com/node/87 (CD-сторінки з цим правилом не знайшов); МП-ІМ с. 35 «Superlatives — with noun and to-infinitive».
- Неправильні дієслова: took, won, ran, became, broke, fell, shook (shook — лише в тексті читання, не оцінюється) — CD.

**Герої (нове, у inbox):** Taras вступив до Lviv Junior Athletics Club (тренування Mon/Thu 5–7 pm), тренер Mr Hnatiuk; Myroslava — членкиня цього клубу; Lesia (11 р., бігунка клубу, раніше малювала вдома) та Ilona (бігунка клубу) — нові; Ruby раніше грала у футбол, тепер плаває в команді Emma; Tom тепер ходить у swimming club (раніше боявся води — продовження «Tom can’t swim» з e5–e6); Mariia тепер бігає в парку щоранку (раніше не любила біг — узгоджено з графіком e5); Andrii — член шахового клубу (раніше грав лише з дідом); Roksolana раніше каталася на ковзанах, тепер gymnastics; Oliver — тепер теніс по суботах; Ostap — матч у снігу, листопад; Oksana — 2-ге місце на змаганнях з карате в Poltava; Vlad — фінал волейбольного турніру проти School 3 (виграли 15–13 у третій партії).

**Опори (D-019), неочевидні:** l4 екран 2 (оцінюване до `info`) — правило long / short з e6s4l5 (`pre`); l1 «Match the halves» — визначення на екрані 3; l5 «What was Bannister the first person to do?» — текст на тому ж екрані; l6 «What is it about?» — після обох уривків, на загальний зміст + назва історії; boss task 6 — Bannister з l5 екрана 5; boss task 1 — l1 екрани 5–6.
**Друга правильна відповідь:** when / while — пропуски з вибором when / while не ставив (when перед довгою дією теж правильне); в gaps з Past Continuous хибні варіанти — лише хибні форми (were / was play), не Past Simple (яке часто теж граматичне); у l5 word «youngest» контекст відсікає first / only («She came third», «they all finished»).
**stats (`node tools/stats.mjs --subject eng`):** прапорці «нетипово для сім'ї» (z ≈ 2 відносно інших розділів 7 кл., що пишуться паралельно): l2 maxText 92 (≤ 140 профілю; інтро з трьома оголошеннями клубів), l5 sentenceWords 7,6 (≤ 12; факти про спортсменів), l6 gradedShare 0,78 (урок читання). Усі в межах профілю `eng` 7–9; сім'я 7 кл. ще мала — до калібрування.
**Спірне:** TQ-158 (didn’t used to). Волейбол: «set» пояснено в дужках у тексті (не оцінюється).
