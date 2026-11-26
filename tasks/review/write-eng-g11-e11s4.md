---
claimed_from: todo
claimed_at: 2026-11-26T10:42:42.091Z
id: write-eng-g11-e11s4
type: write-section
subject: eng
grade: 11
section: e11s4
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e11s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Art and festivals» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Мистецтво — види та жанри мистецтва; відвідування мистецьких закладів для самоосвіти; емоції — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21; фестивалі — з теми «Дозвілля» (с. 24), поєднано з мистецтвом (с. 22: теми можна вивчати інтегровано).
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): present/past participles as adjectives (с. 25) — повт. e7s4 l4 (bored / boring); нове для B2: moving, touching, inspiring, disappointing, overwhelmed, impressed; adjectives formed with suffixes/prefixes (overview) (с. 25) — нове як огляд: -ful, -less, -ous, -ive, -able / -ible, -al, -ic; un-, in-, im-, ir-, il-, dis-. Question tags — у e11s3 (план змінено).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: priceless ≠ worthless (CD); -ful / -less не завжди пара; заперечний префікс — за словником, не за правилом (unable, impossible, irregular, illegal, dishonest — кожну форму звірити в CD / OALD); у `word` з префіксом — однозначна основа. -ing / -ed: контекст має показувати, хто відчуває. Фестивалі України й UK — назви, місця, дати з джерела; festival — B1 (facts/eng.md №16); e5s8 (свята) і e7s6 l6 (шкільний фестиваль) не дублювати. Зображення творів — відкрита ліцензія з `cap` і `credits` (як e10s5). Функція (с. 23): «висловлювати емоційне ставлення до ситуації або предмета обговорення» — l3, l6. `requires`: e10s5 (id — після написання); 7–9 — e7s4 l4. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s4.js`: `SLID.section("eng", { id: "e11s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e11s4, 2026-11-26.** Файл `content/eng/g11-e11s4.js`, 7 уроків (6 + фінал `e11s4l7`, значок `e11s4boss` «Festival reviewer»), усі `draft`. `validate --section e11s4` — 0 помилок, 0 попереджень.

**Уроки:** l1 Kinds and genres of art (visual / performing arts, literature; sculptor ≠ sculpture; stress) · l2 Learning from art: museums, galleries and theatres (Mystetskyi Arsenal, Tate Modern; permanent / temporary, admission, workshop, broaden your horizons; rehearsal, backstage tour, programme) · l3 Amazing or amazed? (-ing / -ed повт. e7s4l4 + moving, touching, inspiring, disappointing, overwhelming, fascinating; impressed / impressive; I found it…, It made me feel…, What impressed me most was… — функція «емоційне ставлення») · l4 Unusual, colourful, priceless (-ful / -less, priceless ≠ worthless, helpless; -ous, -ive, -able / -ible, -al, -ic; un-, in-, im-, ir-, il-, dis-) · l5 Festivals in Ukraine and the UK (Fringe, Glastonbury, Book Arsenal, Atlas Weekend; passive is held / was founded; festival words) · l6 A festival review (повний текст 407 слів у 3 частинах ≤ 190 слів на екран — П1407 с. 21, 11 кл. 400–450; структура рецензії; worth + -ing) · l7 фінал (9 завдань, `pre` на l1–l6).
**requires:** e7s4l2, e7s4l4, e7s7l2, e8s4l6, e10s1l1, e10s5l1, e10s5l5 (усі існують).

**Факти (кожен — ≥ 2 джерела):**
- Edinburgh Festival Fringe: щороку в серпні, Edinburgh; найбільший фестиваль виконавських мистецтв; 1947 — вісім театральних груп без запрошення на перший Edinburgh International Festival, малі зали «на краю» (fringe) офіційного; open access, без відбіркової комісії — https://en.wikipedia.org/wiki/Edinburgh_Festival_Fringe ; https://www.edfringe.com/about-us/history-of-the-fringe/ ; https://www.scotsman.com/whats-on/arts-and-entertainment/uninvited-eight-who-started-edinburgh-festival-fringe-846117 (WebSearch). Вистави на Royal Mile у серпні — https://www.edfringe.com/experience/explore-the-fringe/fringe-street-events/ ; https://edinburghguide.com/news/21204-where-to-find-fringe-street-performers-this-august . «Even on a bus» — en.wiki (venues: «a double-decker bus»), одне джерело, подано в листі героя.
- Glastonbury: п’ятиденний фестиваль виконавських мистецтв, Worthy Farm біля Pilton, Somerset, England; перший — 19 September 1970, Michael Eavis, ≈ 1,500 людей, квиток £1; fallow years — земля відпочиває; 2026 — fallow year, наступний — червень 2027 — https://en.wikipedia.org/wiki/Glastonbury_Festival ; https://www.vam.ac.uk/articles/the-history-of-glastonbury-festival ; https://www.nme.com/features/glastonbury-festival-first-ever-story-1970-2510609 ; https://www.radiox.co.uk/festivals/glastonbury/why-is-there-no-festival-in-2026-and-what-is-a-fallow-year/ ; https://www.scotsman.com/whats-on/arts-and-entertainment/music-festival-fallow-years-glastonbury-2026-reasons-farming-term-womad-4886863 (WebSearch). «Usually in June» — en.wiki (дати 2023, 2025, 2027). 200,000 відвідувачів **не взято** (друге джерело не знайдено).
- Book Arsenal (Книжковий Арсенал): засновано 2011, Мистецький арсенал, Київ, щороку (2025 — 29 May – 1 June); 2019 — найкращий літературний фестиваль року, London Book Fair International Excellence Awards; 2022 не відбувся через повномасштабне вторгнення, 2023 — 11-й — https://uk.wikipedia.org/wiki/Книжковий_арсенал ; https://book.artarsenal.in.ua/en/archive ; https://kyivindependent.com/everything-is-translation-13th-book-arsenal-festival-in-kyiv-to-bridge-gaps-between-language-and-war (WebSearch).
- Atlas Weekend: Київ, щоліта 2015–2021 (з 2022 — Atlas Festival); 2024 повернувся як благодійний Atlas United, збір на дрони для армії — https://en.wikipedia.org/wiki/Atlas_Festival ; https://www.euronews.com/culture/2024/06/06/ukraines-biggest-music-festival-to-return-this-july-the-first-time-since-russias-invasion ; https://u24.gov.ua/news/atlas_united_2024 ; https://babel.ua/en/news/107541-the-atlas-united-music-festival-will-be-held-in-kyiv-in-july-100-million-hryvnias-will-be-collected-on-it-for-drones (WebSearch). Назву 2024 (Atlas United) на екрані не подаю — джерела розходяться щодо назв 2022/2024.
- Mystetskyi Arsenal: Київ, Лаврська 10–12; будівля арсеналу кінця XVIII ст. (1783/1784–1801 — джерела розходяться, тому на екрані «more than two hundred years old»), майстерня для виготовлення, ремонту й зберігання гармат; стіни понад 183 см («almost two metres»); виставки, фестивалі, театральні постановки, освітні проєкти — https://en.wikipedia.org/wiki/Mystetskyi_Arsenal_National_Art_and_Culture_Museum_Complex ; https://artarsenal.in.ua/en/history/ (WebSearch).
- Tate Modern: галерея сучасного мистецтва, London, відкрито 2000 (11 May — королевою, 12 May — для публіки) у колишній Bankside Power Station на Thames; колекція безкоштовна, платні — частина тимчасових виставок — https://en.wikipedia.org/wiki/Tate_Modern ; https://www.tate.org.uk/about-us/history-tate/history-tate-modern ; https://www.artfund.org/explore/museums-and-galleries/tate-modern (WebSearch).

**Форми й словники (CD — https://dictionary.cambridge.org/dictionary/english/<word>, OALD):** priceless B2 «high value… cannot be calculated», worthless C2 «no value in money»; helpless C1 «unable to do anything to help yourself»; overwhelmed «feeling sudden strong emotion»; moving B2, touching, inspiring, disappointing B1; impressed by / with / at — OALD impressed (тому прийменник не питаю); line-up, headliner, mural, venue B2, open-air, rehearsal B2, scenery, broaden your horizons C1, admission B1, illogical, irresponsible B2. Наголос (CD ˈ): ˈfes.tɪ.vəl, ˈskʌlp.tʃər, ˈɔː.di.əns, pəˈfɔː.məns, ˈɑː.kɪ.tek.tʃər, ɑːˈtɪs.tɪk, kriˈeɪ.tɪv, trəˈdɪʃ.ən.əl, ˈdeɪn.dʒər.əs, ˈhed.laɪ.nər, ˈmjʊə.rəl, rɪˈhɜː.səl, həˈraɪ.zən.

**Друга правильна відповідь — що відсічено:** moving / touching і moved / touched не протиставлено; у gaps на префікси — лише слова з однією можливою формою (illegal, irregular, impossible, unusual), хибні — неіснуючі; у `word` — основа задана (care + suffix, novel + suffix, visit, disappoint, responsible, legal); headliner / headliners — обидва в ключі; build l3 — 4 порядки (What impressed me most / What most impressed me / The last room was what…), l6 — 2 порядки (highly recommend / recommend … highly); «found it» — хибний «looked» (не «felt», не «made»); «What / Which impressed me most» замість «most / more» (more — граматичне).

**Опори (D-019):** l1 ек. 9 (pick sculpture) і фінал Task 1 → ек. 5 «Artists and their works»; l2 ек. 4 → ек. 3; l2 ек. 9 → ек. 5 (temporary); l2 ек. 11 (multi) — сам текст + ек. 7; l3 → ек. 3, 5 (і e7s4l4); l4 → ек. 3, 6, 8 (unreliable / disloyal — e10s1l1); l5 ек. 9 (pick Scotland) → ек. 5; l5 фінал multi → ек. 3, 5, 7; l6 ек. 5 (scenery) — виведення з контексту «six actors and almost no scenery» і відкидання audience / music; l6 ек. 9–10 (worth + -ing) → ек. 6.

**stats (eng, 10–11):** l4 longWordShare 0.19 «нетипово для сім'ї» (z = 3) — урок про афікси (irresponsible, illogical, traditional), межа профілю 0.24 не порушена; l5 gradedShare 0.5 (z = −2.2) — урок фактів: 4 фестивалі по одному info-екрану, межа профілю не порушена; l6 gradedShare 0.83, readWordsPerScreen 64, maxReadWords — урок читання з повним текстом 11 кл. (407 слів), як e10s5l5 (ті самі прапорці). Межі профілю validate — без попереджень.

**Спірне / для верифікатора:** у тексті l6 вигадана вистава студентів з Lviv на Fringe (open access — правдоподібно, правил закладу не приписую); у l2 «Visiting its collection is free» — про постійну колекцію; «2026 was a fallow year» — минулий час, бо зараз листопад 2026. Зображень немає (D-027 для eng не обов'язкове) — пропозиція images-* в inbox.
