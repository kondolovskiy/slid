# Глосарій: англійська мова (`eng`)

Норма, нотація, терміни й написання назв для англійської 4–11 кл. — **одна форма на весь предмет**. Створено 2026-11-19 (curate-eng-glossary) за docs/design/english.md §2, §5.4, §5.6, §6.2 і D-054 з доповненням. Джерела й сигли — `memory/long/facts/eng.md`. «Не вирішено» — наприкінці.

## Загальне (D-054)
- **Увесь зміст англійською:** уроки, розділи, тести рівня, пули (`title`, `why`, `learned`, `plan`, `eyebrow`, теорія, інструкції, `hint`, фідбек, варіанти, тексти, діалоги, `cap`, `alt`). Українською — лише інтерфейс рушія. `credits` — як у джерелі ліцензії.
- **Виняток (D-054, доповнення п. 5):** поле `uk` — згорнутий український переклад **правила** на неоцінюваному екрані теорії, **лише 4–5 кл.** і лише там, де плейтест чи верифікатор показали потребу. У вправах, варіантах, `hint` і фідбеку української немає.
- **Варіанти відповідей** позначаємо латинськими літерами **A, B, C** (не А, Б, В).
- **Звуку немає:** не пишемо «Listen», «You hear…», «Imagine you hear…»; у `learned` не обіцяємо вмінь на слух.

## Британська норма (BrE)
Ключ відповіді й увесь текст — британський. **AmE у відповіді дитини — не помилка** (D-054, доповнення п. 1): рушій приймає явний список пар правопису з приміткою «In British English: colour». Американська **лексика** (apartment) — не правопис: як її оцінювати, вирішує автор завдання (зазвичай варіант-пастку з AmE-словом у `choice` не робимо).

| Що | BrE (пишемо) | AmE (не пишемо) | Звірено |
|---|---|---|---|
| -our | colour, favourite, neighbour, honour | color, favorite | Cambridge: «colour noun UK (US color)» — https://dictionary.cambridge.org/dictionary/english/colour; M-W: «chiefly British spelling of color» — https://www.merriam-webster.com/dictionary/colour |
| -re | centre, theatre, metre, litre | center, theater | — |
| -ise / -yse | realise, organise, recognise, analyse | -ize, -yze | -ize теж британська норма Oxford (OALD realize «British English also realise»; Wiktionary realise «Non-Oxford British standard spelling»), але **у «Сліді» лише -ise** (одна форма на предмет; TQ-121). **realize у відповіді дитини — не помилка й не «американізм»:** примітка лише «In British English we usually write realise». -yse (analyse) — лише BrE (CD «analyse UK (US analyze)») |
| подвоєне -ll- | travelled, travelling, cancelled, jewellery | traveled, jewelry | — |
| інше | grey, programme (телепрограма; але computer program), practise (дієслово) / practice (іменник), licence (ім.) / license (дієсл.), cheque, tyre, pyjamas | gray, program | — |
| неправильні дієслова | learnt / learned, dreamt / dreamed, spelt / spelled, burnt / burned — **обидві форми правильні** в BrE; у ключі — обидві | — | Cambridge: «learned or UK also learnt» — https://dictionary.cambridge.org/dictionary/english/learn |

| Лексика BrE | (AmE) | Звірено |
|---|---|---|
| flat | apartment | OALD flat_1: «(British English) (also apartment especially in North American English)» — https://www.oxfordlearnersdictionaries.com/definition/english/flat_1 |
| lift | elevator | OALD lift_2: «(British English) (North American English elevator)» — https://www.oxfordlearnersdictionaries.com/definition/english/lift_2 |
| autumn, holiday(s), timetable, rubber, pupil, maths, football, biscuit, sweets, chips / crisps, mobile (phone), rubbish, queue, shop, trousers, underground, ground floor / first floor | fall, vacation, schedule, eraser, student (шк.), math, soccer, cookie, candy, fries / chips, cell phone, garbage, line, store, pants, subway, first floor / second floor | за потреби звіряй з OALD (позначка «British English») |
| at the weekend | on the weekend | Cambridge: «at the weekend UK (US on the weekend)» — https://dictionary.cambridge.org/dictionary/english/weekend |
| have got (I've got a sister) — у 4–6 кл. разом з have | have | — |

## Дати, час, числа
- **Дата:** «5 May 2026» — день, місяць, рік, без коми й без закінчень -th у записі (Cambridge Grammar «Dates»: «The most common way in British English… 20 January 1993» — https://dictionary.cambridge.org/grammar/british-grammar/dates). Читаємо: «the fifth of May». Десятиліття — «the 1990s» (без апострофа).
- **Час:** словами в 4–6 кл. — «half past three», «quarter to four», «ten past six», «three o'clock»; цифрами — «3.30 pm» (крапка, pm без крапок) або 24-годинний «15.30» у розкладах (Cambridge Grammar «Time»: «12.30 pm», «13.15» — https://dictionary.cambridge.org/grammar/british-grammar/time; словники дають і «p.m.» з крапками — у ключі `word` приймати обидва записи; TQ-120). Американського «a quarter after three» не пишемо (CD quarter: «a quarter past… (also US a quarter after…)»).
- **Числа:** тисячі — комою (2,500), десятковий дріб — крапкою (2.5) — це англійська норма, не українська кома (Cambridge Grammar «Number»: «£1,250»; CD decimal point). Порядкові — 1st, 2nd, 3rd, 4th.

## Розділові знаки й типографіка
- **Лапки — подвійні “ ” (U+201C, U+201D); вкладені — одинарні ‘ ’.** Рішення куратора 2026-11-19: апостроф ’ збігається з закривною одинарною лапкою, а рушій нормалізує ’ → ' у введенні (§5.4 п. 2) — подвійні лапки цю плутанину знімають. Британська видавнича практика частіше бере одинарні (Cambridge Grammar «Punctuation»: «‘…’ or “…” … single quotation marks are becoming more common» — https://dictionary.cambridge.org/grammar/british-grammar/punctuation); якщо вчитель захоче одинарні — замінити в усьому предметі разом (TQ-119).
- **Апостроф — ’ (U+2019)** у тексті: don’t, Kate’s, the 1990s (без апострофа). У введенні дитини будь-який апостроф = ' (рушій).
- **Тире** — en dash з пробілами « – » (британська практика); дефіс у складних словах — «-».
- **Заголовки** — велика літера лише на початку (sentence case): «Food and drink», не «Food And Drink».
- **Скорочення** (contractions) у діалогах і прикладах — так; у ключі `word` — або обидві форми, або `contractions: true` (§5.4 п. 5).

## Вимова й наголос
- **IPA-транскрипції немає** (D-054, доповнення п. 3). Вимову показуємо прикладом: «*ee* as in *sheep*», «*th* as in *three*».
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
Формулювання — style/eng.md (curate-eng-style) може уточнити; тоді ця таблиця — за ним.

| Тип | Інструкція |
|---|---|
| `choice` | Choose the correct answer. / Read and choose. |
| `multi` | Choose all the correct answers. |
| `gaps` | Fill in the gaps. / Complete the sentences. |
| `word` | Type the word. / Write the missing word. |
| `build` | Put the words in order. |
| `match` | Match the words and the pictures. / Match the halves. |
| `stress` | Find the stressed syllable. |
| `pick` | Find the mistake. / Click on the words that … |
| `sort` | Sort the words. |
| `dialog` | Read the dialogue and choose the best answer. |
| `hyp` / `poll` | Guess! / What do you think? |

## Назви України англійською
За постановою КМУ від 27.01.2010 № 55 «Про впорядкування транслітерації українського алфавіту латиницею» (першоджерело zakon.rada.gov.ua з контейнера не відкривається — звірено за вторинними, facts/eng.md **КМУ55**).
- Правила таблиці: г → h, ґ → g, ж → zh, х → kh, ц → ts, ч → ch, ш → sh, щ → shch, и → y, і → i; є, ї, й, ю, я — Ye, Yi, Y, Yu, Ya **на початку слова** і ie, i, i, iu, ia в інших позиціях; **ь і апостроф не передаються**; зг → zgh (Згорани — Zghorany), щоб не плутати з ж = zh.
- Міста: **Kyiv, Kharkiv, Odesa, Dnipro, Lviv**, Zaporizhzhia, Mykolaiv, Vinnytsia, Chernihiv, Chernivtsi, Ivano-Frankivsk, Ternopil, Uzhhorod, Lutsk, Rivne, Zhytomyr, Poltava, Sumy, Kherson, Kropyvnytskyi, Khmelnytskyi, Donetsk, Luhansk.
- **Ukraine**, не «the Ukraine»; **Kyiv**, не Kiev; Odesa, не Odessa; Lviv, не Lvov; Kharkiv, не Kharkov.
- Усталені англійські назви (не транслітерація): Crimea, the Black Sea, the Sea of Azov, the Carpathians (the Carpathian Mountains), the Dnipro (річка — з the).
- Імена: Taras Shevchenko, Lesia Ukrainka, Ivan Franko — за таблицею. Якщо людина сама пише своє ім'я інакше (паспорт, офіційний сайт) — її написання, з джерелом у facts/eng.md.
- Імена героїв уроків — українські (за таблицею: Oksana, Andrii, Yurii, Mariia, Dmytro) і англійські; без героїв підручників.

## Не вирішено
- **Лапки:** подвійні “ ” (рішення куратора 2026-11-19, причина вище) чи британські одинарні ‘ ’ — **TQ-119** (docs/teacher-questions.md), тимчасово “ ”.
- **Час цифрами:** «3.30 pm» чи «3:30 pm» — обрано крапку (так у Cambridge Grammar «Time»); **TQ-120**, тимчасово «3.30 pm» у тексті, у відповіді — обидва записи.
- **Лише -ise:** **TQ-121**, тимчасово -ise у тексті, -ize у відповіді — `ok` з приміткою.
- **Американська лексика у відповіді `word`** (apartment на місці flat): рушій її не нормалізує (§5.4 п. 6); **TQ-122**, тимчасово — автор або робить завдання однозначним (картинка + слово з уроку), або кладе AmE-синонім у ключ; `bad` за словникове AmE-слово не ставимо.
