---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.219Z
id: write-eng-g5-e5s5
type: write-section
subject: eng
grade: 5
section: e5s5
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e5s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Природа» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: погода; природні явища — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): it's + weather; can (ability); comparatives (form). Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** прогноз погоди: без видимих ознак — will; за видимими ознаками правильне й «going to» (друга правильна відповідь). `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s5.js`: `SLID.section("eng", { id: "e5s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e5s5, 2026-11-19. Файл `content/eng/g5-e5s5.js`, 7 уроків (6 + фінал), status draft; малюнки `img/eng/e5s5/` (storm, fog, rainbow, snow + phenomena — композиція з підписами), власні, CC0, запис у `credits`.
`node tools/validate.mjs --section e5s5` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — один прапорець: e5s5l6 sentenceWords z=2.3 (6.1 — у межах профілю «5» [2.5; 8]; урок читання з двома текстами; як e4s3 — z-критерій у style-eng-g4-5).
`requires: ["e4s6l1", "e4s6l5"]` — за plan-eng-g5 §6 (погода; comparatives).

**Уроки:**
- e5s5l1 «What’s the weather like today?» — intro, choice(hyp), info, gaps, choice, info, word, pick, gaps(Final). It’s + weather, temperature, degrees, minus; hot/warm/cool/cold, wet/dry.
- e5s5l2 «Storms, fog and rainbows» — intro, choice(hyp), info+img, match (слово ↔ картинка), gaps, choice, stress, word, choice(Final).
- e5s5l3 «Hotter, colder, wetter: comparing the weather» — intro, choice(повторення e4s6l5, pre), info, gaps, word, build, pick, gaps(Final).
- e5s5l4 «More beautiful, better, worse» — intro, choice(hyp), info, gaps, info, choice, word, pick, gaps(Final).
- e5s5l5 «Tomorrow it will be sunny: a weather forecast» — intro, choice(hyp), info, gaps, build, info, choice, word, pick, choice(Final).
- e5s5l6 «Seasons in Ukraine and the UK» — intro, choice(hyp), читання 2 частини (choice, choice), gaps (таблиця на екрані), match (halves), build, word, gaps(Final).
- e5s5l7 «Our weather page» (boss, значок e5s5boss «Weather watcher») — gaps, match, build, choice, word, choice; `pre` на l1–l6.

**will / be going to (pitfalls-content «Англійська» п. 3, 12):** вчимо лише will для прогнозу; be going to **не стоїть варіантом у жодному** gaps/choice/build. Там, де дитина вписує сама (l5 екран 8 «Will it snow tomorrow? – No, it ___»), у ключі `["won’t", "isn’t going to"]` + `contractions: true` (CD Grammar «Be going to»: «predict something that we think is certain to happen or which we have evidence for now»). Ознак прогнозу (хмари, «Look!») в умовах на will немає.
**build — перебір перестановок через app/lang.js (node, vm):** кожен приймає лише ключ(і): l3#6 «Lviv is windier than Kyiv», l5#5 «It will snow tomorrow» / «Tomorrow it will snow» (обидва в answer), l6#7 «Kyiv is colder than London», boss#4 «Odesa is hotter than Lviv»; пастки extra (windy, snows, warmer, hot) не зараховуються в жодній позиції. Граматично можливі, але відсічені контекстом: обернене порівняння (факт на екрані) і питання «Is Lviv windier…?» (умова — розповідь, «tells», fbBad «It isn’t a question»; як e4s6l6 build).
**match:** l2 — 4 пари слово ↔ власна картинка; l6 — halves, однозначні граматично («It rains» ↔ лише «in all seasons.»; «There is a lot of» ↔ лише «rain and snow.»; than — лише з «Autumn is cooler»); boss — 3 прикметники ↔ картинки.

**Факти (Україна й Велика Британія; лише якісні, без точних середніх — джерела розходяться, inbox verifier-e4s6):**
- Kyiv usually colder than London in winter — реєстр (verifier-e4s6, inbox 2026-11-19: en.wiki −3.2 °C / ЕСУ −6.0 °C, London ≈ 5 °C).
- In Kyiv, winters are cold, usually snow — ЕСУ «Київ» (сніговий покрив узимку, сер. вис. 20 см) https://esu.com.ua/article-11194; en.wiki Geography of Ukraine, weather box Kyiv (Jan snow depth 9 cm) https://en.wikipedia.org/wiki/Geography_of_Ukraine#Climate
- Summer warm, sometimes hot — ЕСУ article-11194 («теплим літом», абс. максимум +40 °С); en.wiki weather box Kyiv (Jul record high 39.4).
- The south of Ukraine is warmer than the north — en.wiki Geography of Ukraine («5.5–7 °C in the north, to 11–13 °C in the south»; табл.: Odesa Jan 2/−3, Kyiv −1/−6); uk.wiki Клімат України (січень: Північна −4…−6 °C, Південне узбережжя Криму +3…+5 °C) https://uk.wikipedia.org/wiki/Клімат_України
- Carpathians — a lot of rain and snow — ЕСУ «Карпати Українські» (500–800 мм у передгір'ях, 1600–2000 мм на хребтах) https://esu.com.ua/article-9920; en.wiki Geography of Ukraine (Carpathians ≈ 1200 mm, Black Sea coast ≈ 400 mm).
- In Kyiv, January is colder than March — en.wiki weather box Kyiv (Jan −3.2, Mar 2.5); uk.wiki Клімат України (Січ_сер −6.0, Бер_сер −2.4 у першій таблиці).
- England/UK: winters not very cold, cloudy, wet and windy; snow not frequent; rain in all seasons; summers warm, not very hot — en.wiki Climate of the United Kingdom («Winter… wet, windy, and cloudy… snow is relatively infrequent»; Cfb «no dry season»; «England generally has low maximum temperatures year round») https://en.wikipedia.org/wiki/Climate_of_the_United_Kingdom; uk.wiki Клімат Великої Британії («не дуже холодними зимами, але постійними опадами протягом всього року»; «У всі пори року дуже часто йде дощ»; зима «холодна, волога і вітряна»; «сніг є досить рідкісним явищем»; «Літо… прохолодне») https://uk.wikipedia.org/wiki/Клімат_Великої_Британії
- Rainbow when it rains and the sun shines — загальне природознавство (у hyp і info, не оцінюється як факт країни).
- Температури в діалогах і прогнозах (−5 °C у Kharkiv, 30 °C в Odesa «today», прогноз на суботу) — вигадана сцена «сьогодні», не кліматичні дані.

**Форми й рівні (CD — https://dictionary.cambridge.org/dictionary/english/<word>; OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<word>):**
- CEFR (CD): fog, foggy, storm, temperature, degree (temperature unit), ice, wet, dry, minus, windy, sunny, cloudy, umbrella, dangerous, worse — A2; weather, beautiful, interesting, picnic, noise, tomorrow, better — A1; thunder, lightning, forecast, sunshine, freezing — B1; rainbow, stormy — B2 (нові слова теми — з картинкою й поясненням на l2#3; forecast — з поясненням на l5#3).
- Наголос (CD UK + OALD BrE): weather, temperature, minus, rainbow, thunder, lightning, foggy, cloudy, forecast (n), beautiful, dangerous, interesting — 1-й склад; degree, tomorrow — 2-й. stress: «+rain|bow», «+thun|der», «+light|ning», «+fog|gy» (OALD /ˈreɪnbəʊ/, /ˈθʌndə(r)/, /ˈlaɪtnɪŋ/, /ˈfɒɡi/).
- Comparatives — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-interesting: -er; -e → -r (nicer); одна голосна + приголосна → подвоєння (bigger, hotter); -y → -ier (happier); 3+ склади → more (more interesting); good → better, bad → worse; «We do not use more or most together with an -er». wetter — CD wet.
- will для прогнозу — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/will («Will is used to make predictions about the future»); be going to — https://dictionary.cambridge.org/grammar/british-grammar/be-going-to.
- Не беру: dryer/drier (у CD drier; dryer — інше слово), «more cold», cool/cold як оцінюваний вибір за числом (межі нечіткі), stormier/foggier.

**Спірне / для верифікатора:**
1. Слова B1–B2 (thunder, lightning, rainbow, stormy, forecast) — з назви уроків у плані («Storms, fog and rainbows», «weather forecast»); подано з картинкою й поясненням; лише rainbow і прикметники на -y оцінюються в word/gaps.
2. credits власних SVG: посилання на репозиторій проєкту (validate вимагає https); формат credits для власних малюнків у docs/IMAGES.md не описано — пропозиція STYLE в inbox.
3. Питальний порядок у build (див. вище) — як прецедент e4s6.
4. l6 читання: частина 1 — 56 слів + питання, частина 2 — 53 слова + питання (maxText 60 ≤ 85); весь текст ≈ 110 слів (менше 130–180 за TQ-123 — урок, не фінал розділу).
5. Плейтест не запускався (build — оркестратор; Python-playwright у контейнері може не бути).

## Нотатки верифікатора
verifier-e5s5, 2026-11-20. Звіт — reports/verify/e5s5.md. **Вердикт: verified, усі 7 уроків.**
- Факти (клімат Києва, України, Карпат, Великої Британії й Лондона; веселка) — по два відкриті джерела (ЕСУ article-11194, article-9920; en/uk.wikipedia), усі ✅. Форми й наголос — CD + OALD; comparatives і will / be going to — Cambridge Grammar.
- Усі оцінювані завдання розв'язано; `word` — через wordVerdict, `build` — перебором 1800/300 наборів через app/lang.js. Ключі правильні; be going to варіантом ніде не стоїть, у l5 #8 — у ключі.
- `build` «X is …-er than Y»: умова «tells» + fbBad достатні (підмет — власна назва з великої, плитка «is» з малої; для l5 #5 keepCase неможливий — два порядки).
- Правки: (1) l6 #7 build — до умови додано «He starts with Kyiv.» (з плиток і пастки «warmer» складалося правильне «London is warmer than Kyiv»); (2) l2 #7 stress — «+fog|gy» → «de|+grees» (усі слова мали 1-й склад, і завдання розв'язувалося шаблоном); (3) статуси verified, meta.factcheck.
- validate --section e5s5 — 0/0; stats — l6 sentenceWords, l7 typeVariety (z ≈ 2) пояснено. Плейтест не запускався (немає Python playwright; build — оркестратор).
- Рекомендовано: 4-та пара в boss T2 match; ENGINE «worst»/«rainbows» → Almost; уніфікувати ліцензію SVG після рішення людини.
