# Глосарій: англійська мова (`eng`)

Норма, нотація, терміни й написання назв для англійської 4–11 кл. — **одна форма на весь предмет**. Створено 2026-11-19 (curate-eng-glossary) за docs/design/english.md §2, §5.4, §5.6, §6.2 і D-055 з доповненням. Джерела й сигли — `memory/long/facts/eng.md`. «Не вирішено» — наприкінці.

## Загальне (D-055)
- **Увесь зміст англійською:** уроки, розділи, тести рівня, пули (`title`, `why`, `learned`, `plan`, `eyebrow`, теорія, інструкції, `hint`, фідбек, варіанти, тексти, діалоги, `cap`, `alt`). Українською — лише інтерфейс рушія. `credits` — як у джерелі ліцензії.
- **Виняток (D-055, доповнення п. 5):** поле `uk` — згорнутий український переклад **правила** на неоцінюваному екрані теорії, **лише 4–5 кл.** і лише там, де плейтест чи верифікатор показали потребу. У вправах, варіантах, `hint` і фідбеку української немає.
- **Варіанти відповідей** позначаємо латинськими літерами **A, B, C** (не А, Б, В).
- **Звуку немає:** не пишемо «Listen», «You hear…», «Imagine you hear…»; у `learned` не обіцяємо вмінь на слух.

## Британська норма (BrE)
Ключ відповіді й увесь текст — британський. **AmE у відповіді дитини — не помилка** (D-055, доповнення п. 1): рушій приймає явний список пар правопису з приміткою «In British English: colour». Американська **лексика** (apartment) — не правопис: як її оцінювати, вирішує автор завдання (зазвичай варіант-пастку з AmE-словом у `choice` не робимо).

| Що | BrE (пишемо) | AmE (не пишемо) | Звірено |
|---|---|---|---|
| -our | colour, favourite, neighbour, honour | color, favorite | Cambridge: «colour noun UK (US color)» — https://dictionary.cambridge.org/dictionary/english/colour; M-W: «chiefly British spelling of color» — https://www.merriam-webster.com/dictionary/colour |
| -re | centre, theatre, metre, litre | center, theater | — |
| -ise / -yse | realise, organise, recognise, analyse | -ize, -yze | -ize теж британська норма Oxford (OALD realize «British English also realise»; Wiktionary realise «Non-Oxford British standard spelling»), але **у «Сліді» лише -ise** (одна форма на предмет; TQ-124). **realize у відповіді дитини — не помилка й не «американізм»:** примітка лише «In British English we usually write realise». -yse (analyse) — лише BrE (CD «analyse UK (US analyze)») |
| подвоєне -ll- | travelled, travelling, cancelled, jewellery | traveled, jewelry | — |
| інше | grey, programme (телепрограма; але computer program), practise (дієслово) / practice (іменник), licence (ім.) / license (дієсл.), cheque, tyre, pyjamas | gray, program | — |
| неправильні дієслова | learnt / learned, dreamt / dreamed, spelt / spelled, burnt / burned — **обидві форми правильні** в BrE; у ключі — обидві | — | Cambridge: «learned or UK also learnt» — https://dictionary.cambridge.org/dictionary/english/learn |

| Лексика BrE | (AmE) | Звірено |
|---|---|---|
| flat | apartment | OALD flat_1: «(British English) (also apartment especially in North American English)» — https://www.oxfordlearnersdictionaries.com/definition/english/flat_1 |
| lift | elevator | OALD lift_2: «(British English) (North American English elevator)» — https://www.oxfordlearnersdictionaries.com/definition/english/lift_2 |
| autumn, holiday(s), timetable, rubber, pupil, maths, football, biscuit, sweets, chips / crisps, mobile (phone), rubbish, queue, shop, trousers, underground, ground floor / first floor | fall, vacation, schedule, eraser, student (шк.), math, soccer, cookie, candy, fries / chips, cell phone, garbage, line, store, pants, subway, first floor / second floor | за потреби звіряй з OALD (позначка «British English») |
| at the weekend | on the weekend | Cambridge: «at the weekend UK (US on the weekend)» — https://dictionary.cambridge.org/dictionary/english/weekend |
| sport (загальне: «I like sport», «do sport») | sports | OALD sport_1 «(British English)» — https://www.oxfordlearnersdictionaries.com/definition/english/sport_1 (verifier-curate-eng-plan-g4, 2026-11-19); «sports» — лише як прикметник чи конкретні види (sports centre). Назва e4s3 — «Free time: sport and heroes» |
| holiday(s) — канікули, відпустка; вітання «Happy New Year!», «Happy Christmas!» | «Happy holidays!», holidays = зимові свята | OALD holiday_1 (holidays у значенні свят — North American) — https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1 (verifier-curate-eng-plan-g4); у style/eng-banned.txt — «happy holidays» |
| greetings card | greeting card | CD https://dictionary.cambridge.org/dictionary/english/greetings-card; OALD https://www.oxfordlearnersdictionaries.com/definition/english/greetings-card (verifier-curate-eng-plan-g5, 2026-11-19) |
| public holiday, bank holiday (державні вихідні); festival — свято-подія, **B1** у CD (у 4–6 кл. — з опорою) | — | CD https://dictionary.cambridge.org/dictionary/english/festival (verifier-curate-eng-plan-g5). «fact file» є лише у Wiktionary, у CD/OALD немає — у 4–6 кл. не вживати як заголовок без пояснення |
| straight ahead (маршрут) | — | «go straight on» в OALD straight_2 і CD straight **не знайдено** (plan-eng-g5, 2026-11-19); формулу маршруту — лише зі словника, pitfalls-content «Англійська» п. 11 |
| have got (I've got a sister) — у 4–6 кл. разом з have | have | — |

**Лексика й написання, додано 2026-11-27 (розділи 4–11 кл.; рядки TERM з inbox):**
| Пишемо | Не пишемо / примітка | Звірено |
|---|---|---|
| **penfriend(s)**, the penfriend club — разом | pen friend, pen-friend (вирівняно style-eng-g4-5, -g8, -g9) | OALD «British English also penfriend»; CD pen pal «UK pen friend» (style-eng-g8) |
| **email** | e-mail | CD email «(also e-mail)» A1; OALD email_1 (writer-e8s1) |
| **the internet** — з малої | the Internet | OALD internet «(usually the internet)»; CD (writer-e8s3); plan.js вирівняно 25.11 |
| **chat show** — основне; talk show — «also» | — | CD chat-show; OALD chat-show (writer-e9s4, style-eng-g9) |
| **the third form (of the verb)** у 6–10 кл., лише після екрана з рядом трьох форм; past participle — не вживаємо (e9s2 — 15 разів після містка: вирівняти або залишити як місток) | past participle | TQ-128 (style-eng-g6, -g7, verifier-style-eng-g10) |
| **partly agree** — окремий рівень між agree і don’t agree: «That’s true, but…», «I see your point, but…», «up to a point» | «polite disagreement» для цих фраз | CD up to a point (style-eng-g9, verifier-e9s3) |
| borscht — у тексті; у ключі `word` — borscht / borshch / borsch | — | CD; OALD «British English also borsch»; ЮНЕСКО «Culture of Ukrainian borscht cooking» (verifier-e5s3) |
| Washington, DC — без крапок | D.C. | CD, OALD (verifier-e4s7) |
| well known після be / well-known перед іменником; так само well paid / well-paid; award-winning, record-breaking, five-star — лише перед іменником; число в compound adjective — однина (a two-hour concert) | — | CD Grammar «Compounds» (writer-e8s4, -e11s3, -e11s8) |
| classical music | classic music | CD Grammar «Classic or classical?» |
| chemist’s / pharmacy (обидва в ключ), in hospital, feel sick (UK), burnt / burned | drugstore | CD (writer-e7s3) |
| cooker, frying pan, saucepan, lay the table = set the table (обидва в ключ) | stove (mainly US); cutlery — C2, у 7 кл. не вживати | CD, OALD (writer-e7s2) |
| do the washing-up = wash the dishes, put the rubbish out, do the ironing, hoover (UK) | chore (C1) — не вводити | CD, OALD (writer-e7s1) |
| interval (театр), box office, horror film, action film, cinema, the stalls | intermission, movie theater | CD (writer-e7s4, verifier-e7s4) |
| after-school club, school leaver, sports day | — | OALD (verifier-e7s6) |
| borrow / lend (Not: Can I lend your…?); recommend + -ing; library card (library ticket — теж BrE, у дистрактори не брати) | recommend to do | CD Grammar (writer-e8s5) |
| canteen (mainly UK); lyceum; дозвіл — can / may | «Yes, you could» як дозвіл | CD Grammar «Can, could or may?» (writer-e8s6) |
| CV, careers adviser, organised | résumé | CD, OALD (writer-e9s7) |
| USB stick, Wi-Fi | memory stick (торгова марка) | CD (writer-e10s6) |
| graduate — лише про університет; leave / finish school | graduate high school (NAmE) | OALD graduate_2 (writer-e10s8) |
| millilitre, tablespoon (15 ml), teaspoon «about 5 ml», homemade, tea (UK — і вечеря), flapjack (UK); elevenses — лише з позначкою UK informal | milliliter | CD, OALD (writer-e11s2, verifier-e11s2) |
| lab technician, research assistant | lab assistant (лише Wiktionary) | OALD (writer-e11s5) |
| revise (UK) для іспиту, sit an exam (UK), work experience | review | CD (writer-e11s8) |
| green tourism — як синонім ecotourism (окремої статті в CD/OALD немає); rural tourism — окремо | — | writer-e11s6 |
| staffroom — разом | staff room | CD, OALD (verifier-e11s1) |

## Дати, час, числа
- **Дата:** «5 May 2026» — день, місяць, рік, без коми й без закінчень -th у записі (Cambridge Grammar «Dates»: «The most common way in British English… 20 January 1993» — https://dictionary.cambridge.org/grammar/british-grammar/dates). Читаємо: «the fifth of May». Десятиліття — «the 1990s» (без апострофа).
- **Час:** словами в 4–6 кл. — «half past three», «quarter to four», «ten past six», «three o'clock»; цифрами — «3.30 pm» (крапка, pm без крапок) або 24-годинний «15.30» у розкладах (Cambridge Grammar «Time»: «12.30 pm», «13.15» — https://dictionary.cambridge.org/grammar/british-grammar/time; словники дають і «p.m.» з крапками — у ключі `word` приймати обидва записи; TQ-123). Американського «a quarter after three» не пишемо (CD quarter: «a quarter past… (also US a quarter after…)»).
- **24- і 12-годинний запис рушій не зводить** (додано 2026-11-19, review-engine-eng-lang-core P3-1): `word` прирівнює лише «15.30» = «15:30» і «pm» = «p.m.», а «15.30» ≠ «3.30 pm». Якщо завдання допускає обидва записи — автор кладе обидва в `answer`; інакше умова однозначно задає формат (розклад — 24-годинний, мова — «3.30 pm»). TQ-123.
- **Числа:** тисячі — комою (2,500), десятковий дріб — крапкою (2.5) — це англійська норма, не українська кома (Cambridge Grammar «Number»: «£1,250»; CD decimal point). Порядкові — 1st, 2nd, 3rd, 4th.

## Розділові знаки й типографіка
- **Лапки — подвійні “ ” (U+201C, U+201D); вкладені — одинарні ‘ ’.** Рішення куратора 2026-11-19: апостроф ’ збігається з закривною одинарною лапкою, а рушій нормалізує ’ → ' у введенні (§5.4 п. 2) — подвійні лапки цю плутанину знімають. Британська видавнича практика частіше бере одинарні (Cambridge Grammar «Punctuation»: «‘…’ or “…” … single quotation marks are becoming more common» — https://dictionary.cambridge.org/grammar/british-grammar/punctuation); якщо вчитель захоче одинарні — замінити в усьому предметі разом (TQ-122).
- **Апостроф — ’ (U+2019)** у тексті: don’t, Kate’s, the 1990s (без апострофа). У введенні дитини будь-який апостроф = ' (рушій).
- **Тире** — en dash з пробілами « – » (британська практика); дефіс у складних словах — «-».
- **Заголовки** — велика літера лише на початку (sentence case): «Food and drink», не «Food And Drink».
- **Скорочення** (contractions) у діалогах і прикладах — так; у ключі `word` — або обидві форми, або `contractions: true` (§5.4 п. 5).

## Вимова й наголос
- **IPA-транскрипції немає** (D-055, доповнення п. 3). Вимову показуємо прикладом: «*ee* as in *sheep*», «*th* as in *three*».
- **Наголос у тексті уроку** — підкреслення наголошеного складу `<u>`: <u>pho</u>tograph, pho<u>tog</u>rapher, ba<u>na</u>na. Поділ на склади для `stress` — `|`, `+` перед наголошеним: `+pho|to|graph`, `pho|+tog|ra|pher` (склади — як у словнику: /fəˈtɒɡ.rə.fər/). Наголос — **за словником** (Cambridge дає ˈ у транскрипції: photograph /ˈfəʊ.tə.ɡrɑːf/, photographer /fəˈtɒɡ.rə.fər/ — https://dictionary.cambridge.org/dictionary/english/photograph, https://dictionary.cambridge.org/dictionary/english/photographer), не з пам'яті.
- Слово, що читається, курсивом: *sheep*; буквосполучення — курсивом: *ee*.

## Терміни граматики (англійською; одна форма)
| Пишемо | Не пишемо |
|---|---|
| Present Simple, Present Continuous | Simple Present, Present Progressive, Present Indefinite |
| Past Simple, Past Continuous | Simple Past, Past Indefinite |
| Present Perfect, Present Perfect Continuous, Past Perfect | Present Perfect Progressive |
| will (future), be going to | Future Simple / Future Indefinite (як назву часу — ні; «will for predictions»). ТОП 3–4 (с. 63) пише «Future Simple», МП-ІМ (с. 21–22) — «Future with will and shall», «Future with be going to»; беремо МП-ІМ |
| countable / uncountable nouns | count / non-count nouns |
| a / an, the, no article | indefinite/definite article — можна в 7–11 кл. як пояснення, не як заголовок |
| comparative, superlative (adjectives) | degrees of comparison — лише в 10–11 кл. |
| adverbs of frequency | — |
| modal verbs (can, must, have to, should, may, might) | modals — лише поруч із повною назвою |
| there is / there are, have got, possessive ’s | — |
| imperative | — |
| the passive (Present Simple passive, Past Simple passive) | Passive Voice — допускається в 10–11 кл. |
| reported speech | indirect speech |
| Zero / First / Second / Third Conditional | Conditional I/II/III, Type 1/2/3 |
| question tags, phrasal verbs, relative clauses (who, which, that, where), gerund, infinitive, used to | — |
| noun, verb, adjective, adverb, pronoun, preposition, syllable, stress | part of speech — так, «word class» — ні |

Терміни в 4–5 кл. — мінімум: правило показуємо зразком і таблицею, назву часу можна дати одним рядком («This is the Present Simple.»).

## Інструкції-шаблони (однакові в усьому предметі)
_Вирівняно за style/eng.md «Шаблонні інструкції» 2026-11-19 (style-eng, verifier-curate-eng-style); при розбіжності головний style/eng.md._ Інструкція — у `title` екрана, умова — у `body` чи `text`. У 4–5 кл. — лише ці формулювання; у 6–11 кл. — ті самі, з темою в кінці («Complete the sentences with the Past Simple.»).

| Тип | Інструкція |
|---|---|
| `choice` | Choose the correct answer. · Read and choose. (до тексту) |
| `multi` | Choose all the correct answers. |
| `gaps` | Fill in the gaps. · Complete the sentences. |
| `word` | Write the word. · Write the missing word. ~~Type the word.~~ (2026-11-19: за style/eng.md) |
| `build` | Put the words in order. |
| `match` | Match the words and the pictures. · Match the halves. · Match the questions and the answers. |
| `stress` | Find the stressed syllable. |
| `pick` | Find the mistake. · Find the words that … (ознака: «… are verbs», «… mean a place»). ~~Click on the words that …~~ (2026-11-19: без прив'язки до пристрою) |
| `sort` | Sort the words. |
| `order` | Put the sentences in order. |
| `dialog` | Read the dialogue and choose the best answer. |
| `hyp` / `poll` | Guess! · What do you think? |

- Без «Click» / «Tap» (телефон і комп'ютер); без позиційних посилань («the first option»); літери A, B, C ставить рушій.
- `eyebrow` фіналу уроку — «Final»; у boss — «Task 1», «Task 2»… (style/eng.md, таблиця відповідностей ukr → eng).

## Назви України англійською
За постановою КМУ від 27.01.2010 № 55 «Про впорядкування транслітерації українського алфавіту латиницею» (першоджерело zakon.rada.gov.ua з контейнера не відкривається — звірено за вторинними, facts/eng.md **КМУ55**).
- Правила таблиці: г → h, ґ → g, ж → zh, х → kh, ц → ts, ч → ch, ш → sh, щ → shch, и → y, і → i; є, ї, й, ю, я — Ye, Yi, Y, Yu, Ya **на початку слова** і ie, i, i, iu, ia в інших позиціях; **ь і апостроф не передаються**; зг → zgh (Згорани — Zghorany), щоб не плутати з ж = zh.
- Міста: **Kyiv, Kharkiv, Odesa, Dnipro, Lviv**, Zaporizhzhia, Mykolaiv, Vinnytsia, Chernihiv, Chernivtsi, Ivano-Frankivsk, Ternopil, Uzhhorod, Lutsk, Rivne, Zhytomyr, Poltava, Sumy, Kherson, Kropyvnytskyi, Khmelnytskyi, Donetsk, Luhansk.
- **Ukraine**, не «the Ukraine»; **Kyiv**, не Kiev; Odesa, не Odessa; Lviv, не Lvov; Kharkiv, не Kharkov.
- Усталені англійські назви (не транслітерація): Crimea, the Black Sea, the Sea of Azov, the Carpathians (the Carpathian Mountains), the Dnipro (річка — з the).
- Імена: Taras Shevchenko, Lesia Ukrainka, Ivan Franko — за таблицею. Якщо людина сама пише своє ім'я інакше (паспорт, офіційний сайт) — її написання, з джерелом у facts/eng.md.
- Імена героїв уроків — українські (за таблицею: Oksana, Andrii, Yurii, Mariia, Dmytro) і англійські; без героїв підручників.

## Імена історичних і відомих осіб (D-057, додано 2026-11-27)
- **Історичні особи — усталене англійське написання** (як в англомовних енциклопедіях) **з приміткою КМУ55** при першій згадці в розділі, на неоцінюваному екрані: «In Ukrainian official documents, the name is written Mariia Prymachenko.» (у 11 кл. скорочено — «Official Ukrainian spelling: …», щоб не перевищити readWordsPerScreen; однакова форма скрізь — відкрите питання, handoff). Застосовано: fix-eng-historic-names (reports/verify/fix-eng-historic-names.md).
- **Список (усталене — КМУ55):** Maria Prymachenko — Mariia; Volodymyr Vernadsky — Vernadskyi; Ivan Kotliarevsky — Kotliarevskyi; Mykhailo Kotsiubynsky — Kotsiubynskyi; Igor Sikorsky — Ihor Sikorskyi; Leonid Kadenyuk — Kadeniuk; **Ivan Pylypow** — Pylypiv (**не Pylypiw**: en.wikipedia Iwan_Pylypow, Wasyl_Eleniak, EoU «Pylypow, Ivan»; verifier-style-eng-g11, 2026-11-27); Wasyl Eleniak — Vasyl Yeleniak.
- **Без примітки (КМУ55 = усталене або джерела розходяться):** Shevchenko, Franko, Lesia Ukrainka, Lysenko, Leontovych, Bilokur, Murashko, Dovzhenko, Borys / Yevhen Paton, Baiul.
- **Назви об'єктів — офіційні:** станція Akademik Vernadsky (uac.gov.ua), не «Vernadskyi». **Вигадані герої й сучасні особи без усталеної форми — за КМУ55** (Mariia, Andrii).
- **Не вирішено:** живі спортсмени з усталеним іншим написанням — Serhii Bubka (en.wiki «Sergey»), Olha Kharlan (en.wiki «Olga») — чи поширюється D-057; Khmelnytskyi у назві пам'ятника (Monument to Bohdan Khmelnytskyi, e7s7) — handoff «Відкриті питання». ~~TERM verifier-e10s5 «історичні особи — лише за КМУ55» (2026-11-26)~~ — замінено D-057.
- **Українські класи в змісті — «Year N»** (Year 1 … Year 11; не Grade / Form; e7s6, e8s6); у `why` тестів рівня «Year N» не писати (британський Year ≠ український клас; verifier-dge5). Ліцей — «the last years of school» без чисел (verifier-e8s6; TQ-147 не створено).

## Герої eng 4–11 кл.
Канон (вік, сім'ї, міста, зайняті імена, відкриті розбіжності) — **`glossary/eng-heroes.md`** (2026-11-27). Головні: Oksana (Zelena Dolyna біля Poltava), Andrii (Kyiv), Mariia (Kharkiv, єдина дитина), Taras (Lviv), Emma і Tom (England). Відкрито: Taras і спорт; кузени Emma (Jack / Leah); Oksana — ветеринарія чи мистецтво.

## Не вирішено
- **Лапки:** подвійні “ ” (рішення куратора 2026-11-19, причина вище) чи британські одинарні ‘ ’ — **TQ-122** (docs/teacher-questions.md), тимчасово “ ”.
- **Час цифрами:** «3.30 pm» чи «3:30 pm» — обрано крапку (так у Cambridge Grammar «Time»); **TQ-123**, тимчасово «3.30 pm» у тексті, у відповіді — обидва записи.
- **Лише -ise:** **TQ-124**, тимчасово -ise у тексті, -ize у відповіді — `ok` з приміткою.
- **Американська лексика у відповіді `word`** (apartment на місці flat): рушій її не нормалізує (§5.4 п. 6); **TQ-125**, тимчасово — автор або робить завдання однозначним (картинка + слово з уроку), або кладе AmE-синонім у ключ; `bad` за словникове AmE-слово не ставимо.
- ~~**borshch чи borscht**~~ → вирішено 2026-11-20 (writer-e5s3, verifier-e5s3): borscht у тексті, у ключі — borscht / borshch / borsch (таблиця «Лексика… додано 2026-11-27»). Запис 2026-11-19: (plan-eng-g5): транслітерація за КМУ № 55 дає «borshch» (facts/eng.md КМУ55), Cambridge Dictionary — «borscht» (https://dictionary.cambridge.org/dictionary/english/borscht). **Вирішити до write-eng-g5-e5s3** (автор або верифікатор e5s3 за D-046: словники D-041 → TQ, якщо сумнів лишився). До рішення в ключі `word` — обидві форми.
- **Примітка КМУ55 — дві форми** (2026-11-27): повна «In Ukrainian official documents, … is written …» і скорочена «Official Ukrainian spelling: …» (e11s5l6, e11s7l6) — уніфікувати чи лишити (handoff).
- **Vernadsky / Vernadskyi** (2026-11-27): за D-057 людина — Volodymyr Vernadsky з приміткою «Vernadskyi», станція — Akademik Vernadsky; примітка «Vernadskyi» — у e11s5l6 і e11s7l6 (скорочена форма); звір, що в обох розділах однакова.

