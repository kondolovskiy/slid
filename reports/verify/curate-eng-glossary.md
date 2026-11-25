# Верифікація: curate-eng-glossary (коміт 08c71ec)

Верифікатор: verifier-curate-eng-glossary, 2026-11-19. Автора не бачив; кожне джерело відкрито в цій сесії (curl через проксі середовища; PDF — pdftotext).
Об'єкт: `memory/long/glossary/eng.md`, `memory/long/facts/eng.md`, розділ «Англійська» в `memory/long/pitfalls-content.md` (+ рядки INDEX.md, pitfalls.md, inbox.md). Звірено з D-055 (з доповненням) і docs/design/english.md §6.

**Вердикт: придатний (прийнято з правками).** Вигаданих норм не знайдено; одна помилка сторінок (ТОП 3–4), одна внутрішня суперечність (склади photographer), одна неузгодженість (24-годинний час «15:30» при обраній крапці), застаріла примітка про баг (уже виправлений). Усе виправлено в цих файлах. Ⓘ Оцінюваних завдань у задачі немає (це файли пам'яті), тож розділ «завдання → опора» (D-019) не застосовний; натомість звірено, що пастки не суперечать D-019 і D-055.

## 1. Програми й нормативні акти

| Твердження | Джерело (відкрито) | Вердикт |
|---|---|---|
| ТОП 3–4: титул «розроблена під керівництвом О. Я. Савченко», 141 с. | https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (301 → /id/eprint/714276/1/…), PDF с. 1, pdfinfo | ✅ |
| ТОП 3–4 с. 40: «на кінець 2-го класу … Pre А1, а на кінець 4-го класу – рівня А1» | там само, с. 40 | ✅ |
| ТОП 3–4: англійська 3–4 кл. — «PDF с. 61–62» | там само: заголовок «Англійська мова» с. 60; 3 кл. с. 61–62; **4 кл. с. 62–63** (граматика 4 кл. — с. 63) | ⚠️ → виправлено на «с. 60–63» |
| МП-ІМ: автори Редько, Шаленко, Сотникова та ін.; наказ МОН від 12.07.2021 № 795; 42 с. | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, с. 1; pdfinfo | ✅ |
| МП-ІМ с. 3: A2 після 5–6 кл., B1 після 7–9 кл. | там само, с. 3 | ✅ |
| МП-ІМ с. 14 лінгвістичний діапазон; с. 15 «проміжні результати за класами визначають вчителі»; с. 20 теми 5–6 кл.; с. 21 «не розглядається як окремі граматичні теми»; с. 21–22 граматика A2; с. 32–33 теми 7–9 кл.; с. 34–35 граматика B1 | там само, відповідні сторінки | ✅ |
| П1407: наказ № 1407 від 23.10.2017; «рівень стандарту, профільний рівень»; 72 с. | https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (виноска з номером у PDF обрізана); https://osvita.ua/school/program/program-10-11/58921/ — «Наказом … № 1407 від 23 жовтня 2017 року» | ✅ |
| П1407 с. 4: B1 / B2 (спеціалізовані) / A2+ (друга мова) | PDF с. 4 | ✅ |
| П1407 с. 16–25 спеціалізовані (англ.); с. 21 читання 350–400 / 400–450, письмо 150–180 / 180–200; с. 22–23 10 кл.; с. 23–25 11 кл.; с. 41–44 рівень стандарту (с. 41 обсяги, с. 42 10 кл., с. 43–44 11 кл.) | PDF відповідні сторінки (с. 26 — уже німецька) | ✅ |
| ДСБСО: постанова КМУ від 30.09.2020 № 898; п. 14 — іншомовна освіта, додатки 5–6 | https://osvita.ua/legislation/Ser_osv/76886/ | ✅ (додатки — не звірено, як і зазначено) |
| КМУ № 55 від 27.01.2010 «Про впорядкування транслітерації…»; зг → zgh (Згорани — Zghorany); другий варіант — на початку слова | zakon.rada.gov.ua — **з цієї сесії недоступний** (curl: connection reset; WebFetch: хост не в дозволених). Вторинні: https://uk.wikipedia.org/wiki/Транслітерація_українського_алфавіту_латиницею ; https://en.wikipedia.org/wiki/Romanization_of_Ukrainian («Resolution 55 … January 27, 2010»; UNGEGN 2012; BGN/PCGN 2019) | ⚠️ вторинне (статус у facts уже «вторинне» — правильно) |
| Таблиця: г→h, ґ→g, ж→zh, х→kh, ц→ts, ч→ch, ш→sh, щ→shch, и→y, і→i; є/ї/й/ю/я — ie/i/i/iu/ia, на початку Ye/Yi/Y/Yu/Ya; ь і ’ не передаються | en.wikipedia, таблиця «Ukrainian National» (розібрано по рядках) | ✅ (вторинне) |
| Міста й імена (Kyiv, Kharkiv, Odesa, Dnipro, Lviv, Zaporizhzhia, Vinnytsia, Kropyvnytskyi, Khmelnytskyi, Uzhhorod, Luhansk…; Lesia Ukrainka, Andrii, Yurii, Mariia) | перевірено застосуванням таблиці вище | ✅ |
| Ukraine без артикля; Kyiv, не Kiev; Odesa | https://en.wiktionary.org/wiki/Ukraine (usage notes), https://en.wiktionary.org/wiki/Kyiv (usage notes), https://en.wiktionary.org/wiki/Odessa («Alternative form: Odesa»), https://dictionary.cambridge.org/dictionary/english/ukraine | ✅ |
| the Dnipro (річка з the), the Sea of Azov, Crimea, the Carpathians | https://en.wiktionary.org/wiki/Dnipro «(with the)», …/Sea_of_Azov, …/Crimea («Crimea or the Crimea»), …/Carpathians | ✅ |

## 2. Британська норма (словники)

| Норма в глосарії | Джерело 1 | Джерело 2 | Вердикт |
|---|---|---|---|
| colour UK / color US | https://dictionary.cambridge.org/dictionary/english/colour «colour noun UK (US color)» | https://www.merriam-webster.com/dictionary/colour «chiefly British spelling of color»; https://en.wiktionary.org/wiki/colour «Commonwealth and Ireland standard spelling» | ✅ |
| flat (BrE) / apartment | https://www.oxfordlearnersdictionaries.com/definition/english/flat_1 «(British English) (also apartment especially in North American English)» | https://en.wiktionary.org/wiki/flat «(mainly US) apartment» | ✅ |
| lift (BrE) / elevator | https://www.oxfordlearnersdictionaries.com/definition/english/lift_2 | https://en.wiktionary.org/wiki/lift | ✅ |
| learnt / learned — обидві | https://dictionary.cambridge.org/dictionary/english/learn «learned or UK also learnt» | https://www.oxfordlearnersdictionaries.com/definition/english/learn «learnt (especially British English)» | ✅ |
| dreamt/dreamed, spelt/spelled, burnt/burned | CD …/dream «dreamed or dreamt», …/spell «spelled or UK also spelt», …/burn «burnt or burned» | OALD spell_1, burn_1 (обидві форми в Verb Forms) | ✅ |
| at the weekend UK / on the weekend US | https://dictionary.cambridge.org/dictionary/english/weekend | https://www.oxfordlearnersdictionaries.com/definition/english/weekend_1 | ✅ |
| photograph — 1-й склад; photographer — 2-й | CD photograph /ˈfəʊ.tə.ɡrɑːf/, photographer /fəˈtɒɡ.rə.fər/ | OALD photograph_1 /ˈfəʊtəɡrɑːf/, photographer /fəˈtɒɡrəfə(r)/ | ✅; але **склади** в глосарії `pho\|+to\|gra\|pher` суперечили власному `pho<u>tog</u>rapher` і словнику → виправлено на `pho\|+tog\|ra\|pher` |
| -ise у «Сліді»; -ize теж британська (Oxford) | https://www.oxfordlearnersdictionaries.com/definition/english/realize «(British English also realise)»; …/organize | https://en.wiktionary.org/wiki/realise «Non-Oxford British standard spelling of realize»; …/organise | ✅; додано застереження: realize у відповіді — не «американізм» |
| analyse UK / analyze US | https://dictionary.cambridge.org/dictionary/english/analyse | — (Wikt organise/realise — аналогічна модель) | ✅ |
| centre, theatre, grey, cheque, tyre, pyjamas, jewellery, licence | CD …/centre, …/theatre, …/grey, …/cheque, …/tyre, …/pyjamas, …/jewellery, …/licence (усі «UK (US …)» / «mainly UK») | OALD jewellery, licence «(US English license)», license_2 | ✅ |
| programme / program (computer program і в BrE) | https://www.oxfordlearnersdictionaries.com/definition/english/program_1 «In British English the spelling programme is used, except in sense 1 [computer]» | OALD programme_1; CD program | ✅ |
| practise (дієсл.) / practice (ім.) | OALD practise «(US English practice)» | OALD practice_1 | ✅ |
| travelled, cancelled (-ll-) | CD …/travel «-ll- or US usually -l-» | CD …/cancel (те саме) | ✅ |
| autumn, holiday, timetable, biscuit, sweets, rubbish, queue, shop, football, mobile phone, maths, trousers | CD відповідні статті: «US usually fall», «US vacation», «US schedule», «US cookie», «US candy», «US garbage, trash», «US usually line», «US usually store», «US soccer», «US usually cell phone», maths «UK», trousers «mainly UK» | OALD pants «(British English) underpants», crisp_2 / chip_1, eraser «(British English also rubber)», underground_3 / subway, ground-floor | ✅ |
| дата «5 May 2026», читання «the fifth of May», 1st/2nd | https://dictionary.cambridge.org/grammar/british-grammar/dates «The most common way in British English… 20 January 1993»; «It's the first of June» | — (граматика-довідник; рівень норми — домовленість) | ✅ |
| half past three, quarter to four, o'clock; «a quarter after» — US | https://dictionary.cambridge.org/grammar/british-grammar/time | https://dictionary.cambridge.org/dictionary/english/quarter «(also US a quarter after…)» | ✅ |
| «3.30 pm» (крапка); 24-год. «15:30» | Cambridge Grammar «Time»: «12.30 pm», «13.15», «22.50» — крапка й у 24-годинному | CD pm (приклади «2.43 pm», «12.10 p.m.»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/p-m — гасло «p.m.» | ⚠️ «15:30» не узгоджене з обраною крапкою → виправлено на «15.30»; додано: у відповіді приймати обидва записи й «p.m.» |
| 2,500 / 2.5 | https://dictionary.cambridge.org/grammar/british-grammar/number «£1,250» | https://dictionary.cambridge.org/dictionary/english/decimal-point | ✅ |
| лапки ‘ ’ / “ ”; тире « – » з пробілами | https://dictionary.cambridge.org/grammar/british-grammar/punctuation «‘…’ or “…” … single quotation marks are becoming more common»; «Our teacher – who often gets cross… – » | — | ✅ (вибір “ ” — рішення куратора, винесено в TQ-122) |
| 1990s без апострофа | https://en.wiktionary.org/wiki/1990s (лема); …/1990's — «Alternative form of 1990s» | — | ✅ (домовленість) |
| Терміни граматики (Present Simple, Past Simple, will / be going to, reported speech, first/second/third conditional, countable) | МП-ІМ с. 21–22, 34–35 («Present simple», «Future with will and shall», «Future with be going to», «reported speech»); П1407 («first, second and third conditional», «reported speech»); Cambridge Grammar (зміст: «Present simple», «Past simple», «Future: will and shall», «Going to») | ТОП 3–4 с. 63 пише «Future Simple» | ✅; додано примітку: беремо форму МП-ІМ, не «Future Simple» з ТОП 3–4 |

Норми, які є **домовленістю**, а не фактом (sentence case у заголовках, have got у 4–6 кл., шаблони інструкцій, A/B/C, одна форма терміна), джерел не потребують — вони узгоджені з D-055 і §6.1–6.2 дизайну.

## 3. Узгодженість з D-055 і §6

| Пункт | Де | Вердикт |
|---|---|---|
| Увесь зміст англійською; укр. — лише інтерфейс | glossary «Загальне», пастка 2 | ✅ |
| AmE у відповіді — не помилка, `ok` з приміткою, ключ британський (доповнення п. 1) | glossary «Британська норма», пастка 2 («не пиши `fbBad`, що називає color помилкою») | ✅ |
| IPA немає (доповнення п. 3); наголос `<u>` і `stress` | glossary «Вимова й наголос», пастка 6 | ✅ (CD транскрипція — лише щоб визначити склад, в урок не переносити — сказано явно) |
| `uk` лише 4–5 кл., лише правило на неоцінюваному екрані, лише за потреби (доповнення п. 5) | glossary «Виняток», пастка 10 | ✅ |
| Без звуку, не імітувати аудіювання (п. 4) | glossary «Звуку немає», пастка 10 | ✅ |
| A, B, C (п. 3) | glossary | ✅ |
| 10 пасток §6.3 | pitfalls-content «Англійська» 1–10 | ✅ усі 10, розширені прикладами; п. 5 посилався на ще неіснуючий style/eng.md → уточнено «docs/design/english.md §6.1; далі — style/eng.md» |
| §6.2: Kyiv… за КМУ № 55, «Ukraine», не «the Ukraine» | glossary «Назви України» | ✅ |
| §6.4: словники CD, OALD, MW (лише позначка AmE), Wikt | facts «Словники» | ✅ |
| D-019 (чесне завдання) | пастка 5 («нове слово спершу з картинкою чи прикладом») | ✅ |

## 4. Правки (зроблено верифікатором)

1. `facts/eng.md`, ТОП 3–4: «PDF с. 61–62» → «с. 60–63 (4 кл. — с. 62–63, граматика — с. 63)»; примітка про переадресацію URL.
2. `facts/eng.md`: статуси ТОП 3–4, МП-ІМ, П1407 `self` → `verified` (PDF відкрито); ДСБСО п. 14 — verified, додатки — ні.
3. `facts/eng.md` №2–5: додано друге джерело (Wikt / OALD); №6: примітку «приклад хибний» замінено на «виправлено в bf90b78» + OALD; нові рядки №7–13 (‑ise/‑ize, дата, час, лапки, BrE↔US правопис, лексика, назви).
4. `glossary/eng.md`: склади `pho|+to|gra|pher` → `pho|+tog|ra|pher`; «15:30» → «15.30» + прийом обох записів у відповіді; застереження «realize — не помилка й не американізм»; примітка про «Future Simple» у ТОП 3–4; URL джерел у датах, часі, числах, лапках; «Не вирішено» → посилання на TQ-122–122.
5. `pitfalls-content.md` п. 5: посилання на style/eng.md уточнено.
6. `INDEX.md`: «норми №1–6» → «№1–13»; пропущена кома в рядку pitfalls-content.
7. `docs/teacher-questions.md`: новий підрозділ «Англійська мова», TQ-122–122.
8. `memory/short/inbox.md`: рядок FACT верифікатора.

## 5. Пропозиції автора, що потребують рішення (D-049)

| Питання | Оцінка | TQ | Тимчасово |
|---|---|---|---|
| Лапки “ ” vs ‘ ’ | Обидві — британська норма (Cambridge). Обґрунтування куратора (’ = апостроф) розумне. Змістове (те, що бачить дитина), але низький ризик | TQ-122 | “…”, усередині ‘…’ |
| Час «3.30 pm» | Підтверджено Cambridge Grammar. Зачіпає ключі `word` (дитина пише «3:30») — змістове | TQ-123 | у тексті «3.30 pm», «15.30»; у відповіді — обидва записи й «p.m.» |
| Лише -ise | -ize — теж правильна BrE (Oxford). Змістове лише щодо оцінювання й тексту примітки | TQ-124 | -ise у тексті; -ize у відповіді — `ok` з приміткою, без слова «American» |
| AmE-лексика у `word` | Не покрито D-055 п. 1 (той — лише правопис). Змістове | TQ-125 | завдання однозначне або AmE-синонім у ключі; `bad` за словникове AmE-слово не ставимо |

## 6. Що потребує людини / наступних кроків
- **zakon.rada.gov.ua** недоступний з сесії (WebFetch: хост не в дозволених доменах; curl: скидання з'єднання). КМУ № 55 лишається «вторинне», доки хост не дозволять.
- **Учитель-рецензент англійської** (D-055 «Не вирішено») — відповіді на TQ-122–122 чекають на нього.
- Рядок BUG curator-eng-glossary в inbox уже неактуальний (bf90b78) — куратору закрити при перенесенні.
- Дизайн §5.4 п. 6 зараховує «-ize» до американського правопису — для рушія (engine-eng-lang-core) варто, щоб примітка для -ize не казала «American»; передано через TQ-124 і glossary.
