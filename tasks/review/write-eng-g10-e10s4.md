---
claimed_from: todo
claimed_at: 2026-11-26T10:18:11.836Z
id: write-eng-g10-e10s4
type: write-section
subject: eng
grade: 10
section: e10s4
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Weather, nature and natural disasters» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Природа і погода — природні катаклізми та їх види; вплив погоди на здоров’я та настрій; захист природи — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): Going to / will for predictions (с. 23) — повт. e5s5l5 (will), e9s2 l3 (going to); нове для B2 — прогноз за ознаками (going to) vs думка (will, probably, likely); Future Continuous (с. 23) — повт. e9s2 l4, тут — у прогнозах і попередженнях (Temperatures will be falling); Future Perfect (с. 23) — нове, з by + час (prepositions in time phrases, с. 23).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь — will / be going to у прогнозі (pitfalls-content «Англійська» п. 3, 12): «It’s going to rain» за ознаками на екрані, але will теж граматичне — контекст відсікає або обидві в ключі; Future Perfect vs Future Simple з by + час (CD Grammar «Future perfect simple»). Назва розділу змінена (план): «Weather, nature and natural disasters». Не дублювати e9s2 (довкілля, рідкісні тварини, eco project): тут — катаклізми, погода й здоров’я, охорона природи в Україні й UK (національні парки — факти з джерела). Числа про катаклізми — лише з джерела з датою, без сенсацій; без порад про ліки. Функції (с. 22): «висловлювати власні припущення, прогнозувати ймовірність подій і наслідків» — l2, l4–l5. `requires`: e5s5l2 (storms, fog), e5s5l5 (will), e5s9l3 (going to); 7–9 — e9s2 l3–l4. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s4.js`: `SLID.section("eng", { id: "e10s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e10s4` — 0 помилок; попередження виправлено або пояснено.
- [x] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e10s4, 2026-11-26.** Файл `content/eng/g10-e10s4.js`, 7 уроків (6 + boss), status draft. `validate --section e10s4` — 0 помилок, 0 попереджень; `stats --subject eng` — без прапорців (екранів 9–11, maxText ≤ 100).

**Уроки:** l1 Floods, storms, earthquakes (лексика катаклізмів, імена штормів UK/Ireland, повінь 2008 на заході України); l2 Will or going to? (ознаки vs думка + нове be likely / unlikely to, It’s likely that); l3 Weather, health and mood (heatwave, under the weather, sunburnt, gloomy / cheerful, make me feel, put me in a good mood; поради в спеку); l4 Forecasts and warnings (Future Continuous у прогнозах; попередження Met Office yellow / amber / red); l5 Future Perfect (will have + III ф., by + час; by vs until, till = until); l6 National parks (стаття ≈ 345 слів на 3 екрани ≤ 133 слова: UK 15 парків, Peak District 1951; Карпатський НПП 1980, Шацький НПП 1983, Світязь); l7 boss (8 завдань, pre на кожен урок).

**requires:** e5s5l2, e5s5l5, e5s9l3, e9s2l3, e9s2l4 (e9s2 уже verified — id існують).

**Пастки другої відповіді (розв'язано двічі):** will / going to ніде не протиставлені — пастки лише хибні форми (wills, are going to з it, going to без be); l2 multi — will, is going to, is likely to правильні разом. Future Perfect vs will + verb з by — l5 multi: обидва правильні; will + verb хибним ніде не дається. till хибним не дається. До l6 final — «my classmates and I are going to» замість «our class is / are» (колективний іменник у BrE приймає обидва). build: усі перестановки перебрано через `SLID_LANG.check` (скрипт у scratchpad): l2 — 3 порядки, l4 — 6, l5 — 3. word: усі ключі перевірено `wordVerdict`.

**Опора завдань (D-019):** l1 екр. 5 (sort weather / inside the Earth) — міркування з означень екр. 3 (ground shakes, hot rock comes out of a volcano) + hint; l4 екр. 6 (match кольорів) спирається на текст екр. 5 (як match після читання в e9s2l2); boss Task 4 — значення under the weather з l3 (sore throat — нове, але не оцінюється).

**Факти (джерела):**
- Імена штормів з 2015 р., Met Office і Met Éireann, новий список щовересня, за абеткою, імена пропонує публіка, мета — помітність попереджень і безпека: Met Office UK Storm Centre https://weather.metoffice.gov.uk/warnings-and-advice/uk-storm-centre (сніпет WebSearch; metoffice.gov.uk з сесії не резолвиться), Irish Examiner https://www.irishexaminer.com/news/spotlight/arid-41771456.html , AccuWeather https://accuweather.com/en/weather-news/windstorm-season-how-why-naming-uk-and-irelands-severe-weather-improves-public-awareness/355452 , Carbon Brief https://www.carbonbrief.org/met-office-ten-years-of-naming-uk-storms-to-warn-the-public/ (сніпети).
- Попередження Met Office: yellow (some low level impacts, travel), amber (higher chance, change plans), red (dangerous, take action, rare): https://www.metoffice.gov.uk/blog/2025/how-are-weather-warnings-categorised (сніпет), https://www.countryfile.com/environment/weather-warnings-uk , https://scotsman.com/news/weather/what-do-the-weather-warnings-in-the-uk-mean-3574405 .
- Повінь липня 2008 р. на заході України після сильних дощів у Карпатах, Дністер і Прут вийшли з берегів, зруйновані мости, евакуація: NASA Earth Observatory https://earthobservatory.nasa.gov/images/20307/floods-in-eastern-europe , ReliefWeb (карти «Floods in Western Ukraine… Aug 2008»), Радіо Свобода https://www.radiosvoboda.org/a/1186667.html (360 мостів), gazeta.ua https://gazeta.ua/articles/ukraine-newspaper/_u-zahidnij-ukrayini-vid-poveni-zaginulo-22-lyudini/242598 — **лише сніпети WebSearch** (хости з сесії не відкриваються); числа жертв навмисно не вжито. Верифікатору — відкрити хоча б одне джерело.
- Спека: тінь особливо 11 am – 3 pm, багато пити, капелюх, легкий одяг, сонцезахисний крем — https://www.nhs.uk/live-well/seasonal-health/heatwave-how-to-cope-in-hot-weather/ , https://www.merseywestlancs.nhs.uk/hot-weather , British Red Cross checklist https://redcross.org.uk/-/media/documents-indexed/brc_heatwave-checklist-final.pdf (сніпети). Вітамін D від сонячного світла на шкірі — https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/ , https://www.publichealth.hscni.net/sites/default/files/2023-01/VitaminD_leaflet%202022.pdf . Порад про ліки немає.
- Нацпарки UK: 15 (10 England, 3 Wales, 2 Scotland, Northern Ireland — none), Peak District перший (17.04.1951), South Downs наймолодший (2011), земля переважно приватна, у парках міста й села: https://en.wikipedia.org/wiki/National_parks_of_the_United_Kingdom (відкрито), https://www.peakdistrict.gov.uk/learning-about/about-the-national-park/our-history і https://www.nationalparks.uk/app/uploads/2020/10/History-of-the-15-UK-National-Parks-Activity-sheet.pdf (сніпети). Eryri (Snowdonia) — у переліку 75th anniversary report https://lakedistrict.gov.uk/wp-content/uploads/2026/07/National-Parks-75th-anniv-report-FINAL.pdf (сніпет) і en.wikipedia.
- Карпатський НПП — перший НПП України, 3.06.1980, Івано-Франківська обл.: https://en.wikipedia.org/wiki/Carpathian_National_Nature_Park , https://uk.wikipedia.org/wiki/Карпатський_національний_природний_парк (обидва відкрито). Говерлу не згадано: en — «at the borders of the park», uk — «в межах парку» (розбіжність).
- Шацький НПП — 28.12.1983, Волинська обл. (північний захід), 23 озера; Світязь — найглибше озеро України, понад 58 м (58,4 м): https://en.wikipedia.org/wiki/Shatsk_National_Natural_Park , https://uk.wikipedia.org/wiki/Шацький_національний_природний_парк , https://en.wikipedia.org/wiki/Svitiaz (відкрито). «Найбільше» не вжито (uk «найбільшим… природного походження» сумнівне).
- Синевир відкинуто: en.wikipedia дає 1974 (рік заповідника), НПП — 1989; не використано.

**Форми (CD / CD Grammar):** stress — CD IPA: ˈhʌr.ɪ.kən (hurricane), ˈæv.ə.lɑːntʃ (avalanche), vɒlˈkeɪ.nəʊ (volcano), tɔːˈneɪ.dəʊ, dɪˈzɑː.stər (disaster), ˈɜːθ.kweɪk, ˈlænd.slaɪd, ˈwaɪld.faɪər, ˈhiːtˌweɪv — https://dictionary.cambridge.org/dictionary/english/<word>; under the weather (C2, «feel ill») — https://dictionary.cambridge.org/dictionary/english/under-the-weather ; sunburned «(also sunburnt)» — https://dictionary.cambridge.org/dictionary/english/sunburned ; likely to (B1) — https://dictionary.cambridge.org/dictionary/english/likely ; Future Perfect з by + час — https://dictionary.cambridge.org/grammar/british-grammar/future-perfect-simple ; be going to — evidence now, will «often used in a similar way» — https://dictionary.cambridge.org/grammar/british-grammar/will-or-be-going-to ; by, not until, для дедлайну; till = until — https://dictionary.cambridge.org/grammar/british-grammar/until . shall have finished (I) — за аналогією з PITFALL verifier-e9s2 (shall + Future Continuous з I/we).

**Сумнівне / верифікатору:** (1) факти про повінь 2008 і імена штормів — лише зі сніпетів WebSearch; (2) heat wave (два слова) у ключі word l3 — AmE-подібне написання, рушій правопис не нормалізує для цього слова; (3) «Our village by 2030 will have planted…» у build l5 — маргінальний порядок, додано, щоб не відхиляти; (4) прогнози погоди, план еко-групи Zelena Dolyna, ідеї класу Andrii — вигадані; (5) l6 «most of the land… belongs to farmers and other owners, not to the state» — переказ en.wikipedia «largely in private ownership».
