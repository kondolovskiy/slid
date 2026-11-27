# Верифікація: пул pe11s8 (англійська, 11 кл., розділ e11s8 «Exams, careers and plans»)

Верифікатор: verifier-pe11s7-pe11s8, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g11-e11s8.js` (87 вправ a01–a87) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s8.md. Опора: уроки `content/eng/g11-e11s8.js` (verified). Канон героїв: memory/long/glossary/eng-heroes.md (11 кл.: 17 років; Oksana — veterinary medicine у Kharkiv; Zoriana — IT; Kyrylo — history teacher; Bohdan — wind turbine technician; Taras — journalism, Lviv; Emma: firefighter → astronomer → doctor; Daryna — тітка в Odesa; Mariia — Polina, Roksolana, Zofia).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів я не знайшов. Зробив 8 правок: 2 другі правильні відповіді (a03, a37), 5 копій рамок уроків, зокрема фіналів (a52, a62, a71, a72, a87), і одну неточну підказку (a15). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI, бо Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, url як у facts/eng.md ✅. `src`: с. 23 — функції (порівнювати; висловлювати побажання; підводити підсумки, завершувати розмову), с. 24 — лексика «Шкільне життя» / «Робота і професії», с. 25 — conditionals і огляд часів. Це збігається з шапкою розділу e11s8 ✅. Поруч із l5 gram «not as … as» стоїть с. 23 (функція «порівнювати»), як і в шапці розділу ✅.

## 2. Факти (лише ті, що вже є в уроках e11s8)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| НМТ — з 2022; 2022 — три предмети, 2026 — чотири; правила змінюються (a04–a06) | https://mon.gov.ua/news/vstup-2022-rozyasnennya-pro-zmist-strukturu-y-otsinyuvannya-bloku-nmt-z-istorii-ukraini (WebSearch: НМТ 2022 замість ЗНО, три блоки); https://testportal.gov.ua/wp-content/uploads/2022/10/Zvit_NMT_2022.pdf ; https://osvita.ua/test/88222/ і https://news.telegraf.com.ua/ukr/ukraina/2025-12-17/5928258-chotiri-predmeti-za-240-khvilin-yakim-bude-nmt-u-2026-rotsi (2026 — чотири) | ✅ |
| Erasmus — перші обміни 1987 (a19, a31) | https://erasmus-plus.ec.europa.eu/whats-new/news/marking-37-years-of-erasmus-key-numbers-and-achievements ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/erasmus-program | ✅ |
| Erasmus+ — програма ЄС для education, training, youth and sport; для українських студентів потрібна угода між університетами (a18, a19) | https://erasmus-plus.ec.europa.eu/resources-and-tools/inter-institutional-agreement ; https://mon.gov.ua/eng/ministerstvo/diyalnist/mizhnarodna-dilnist/mizhnarodni-osvitni-proekti/erazmus ; https://erasmusplus.org.ua/?p=13903 | ✅ |
| UK: Turing scheme з 2021; грудень 2025 — угода про повернення до Erasmus+ у 2027 (a18, a19) | https://www.gov.uk/government/news/uk-and-eu-finalise-agreement-to-bring-uk-into-erasmus-in-2027 ; https://www.irishtimes.com/world/uk/2025/12/17/uk-to-rejoin-eus-erasmus-student-exchange-programme ; https://www.euronews.com/2025/12/17/uk-to-rejoin-eus-erasmus-student-mobility-fund-in-2027 | ✅ |
| eTwinning — онлайн-платформа шкіл Європи, Україна бере участь (a17, a19) | https://en.wikipedia.org/wiki/ETwinning (curl raw: Ukraine via eTwinning Plus); https://school-education.ec.europa.eu/az/discover/news/etwinning-supports-ukraine-community-driven-solidarity-activities | ✅ |
| Медицина: UK — зазвичай 5 років; Україна — 6 років після школи; далі навчання триває (a58–a60) | https://www.topuniversities.com/courses/medicine/medical-degrees-regional-differences ; https://www.nottingham.ac.uk/medicine/study-with-us/undergraduate/undergraduate-medicine/whats-the-difference.aspx ; https://medicine.ieu.edu.ua/en/master-s-program-in-medicine (6 years) | ✅ (як в уроці: «usually») |
| Сюжети героїв (open day, work experience, Odesa, Chernihiv) — вигадані, реальним установам правил не приписано | канон eng-heroes.md | ✅ |

## 3. Наголос (словники відкрито в цій сесії через curl)
CD (UK / US) і OALD: exchange ɪksˈtʃeɪndʒ · /ɪksˈtʃeɪndʒ/ (exchange_1); partner ˈpɑːt.nər · /ˈpɑːtnə(r)/ (partner_1); abroad əˈbrɔːd · /əˈbrɔːd/; deadline ˈded.laɪn · /ˈdedlaɪn/; revise rɪˈvaɪz · /rɪˈvaɪz/ (revise_1); revision rɪˈvɪʒ.ən · /rɪˈvɪʒn/; career kəˈrɪər · /kəˈrɪə(r)/ (career_1); weakness ˈwiːk.nəs · /ˈwiːknəs/; salary ˈsæl.ər.i · /ˈsæləri/; respected rɪˈspek.tɪd · OALD respect_1 /rɪˈspekt/; prestigious presˈtɪdʒ.əs · /preˈstɪdʒəs/ (NAmE -stiː-, склад той самий); responsibility rɪˌspɒn.sɪˈbɪl.ə.ti · /rɪˌspɒnsəˈbɪləti/. URL: https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word>. Наголошений склад у UK і US однаковий ✅. Усі слова підкреслені `<u>` до уроку вправи: revise і revision — l1, career і weakness — l4 ✅. У кожному наборі є слова з різним наголошеним складом ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Кожну вправу я спершу розв'язав сам, а тоді звірив з ключем. `SLID_LANG.check` зараховує всі ключі, і кінцевого `.!?` у ключах `word` немає (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s7-pe11s8/bin/chk.mjs`). Копії рамок я шукав 7-грамами (`…/bin/ngram.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01, a02 | за списком / retake; score | = | l1 #3 | ні | ✅ |
| a03 word | failed / didn’t pass | = | l1 #3 | **has failed / hasn’t passed** — Present Perfect з результатом зараз («so he’s going to do another one»). Часу в реченні не було, тож контекст цю форму не відсікав | ❌ → after «…the practice test yesterday, so…» |
| a04–a06 | 2022 / Multi-subject; three; four / check the website | = | l1 #5 | ні | ✅ |
| a07, a08 | is doing; did / registered | = | l1 #6, #8 | ні | ✅ |
| a09 gaps | had already started; had been waiting | = | l1 #8 | Past Simple не серед варіантів | ✅ |
| a10 pick | have taken | = | l1 #8, #10 | ні | ✅ |
| a11–a13 | Bohdan / registered / [0,1] | = | текст вправи; l1 #6, #8 | ні | ✅ |
| a14 gaps | ’m revising; registered | = | l1 #6, #8 | ні | ✅ |
| a15 gaps | ’ve been revising; ’ve done; ’ve never been | = | l1 #6 | hint «never… before», але «before» у тексті немає | ⚠️ → hint «since, so far, never.» |
| a16 gaps | took; had left; was driving; ’ve checked | = | l1 #6, #8 | «’ve been checking» не серед варіантів | ✅ |
| a17–a19 | eTwinning — платформа / European Union; Turing scheme / [0,2,3] | = | l2 #4–#6 | «only if… agreement» — правдиве за уроком і стоїть у ключі | ✅ |
| a20–a22 | family; grant / credits / exchange; abroad; partner | = | l2 #2 | «credit» після «are called» — хибне | ✅ |
| a23–a25 | home to Lviv / term in Spain / [1,3] | = | текст вправи | ні | ✅ |
| a26–a28 stress | за словником | = | §3 | ні | ✅ |
| a29–a31 gaps | grant; towards / abroad; partner; host / term; grant; credits; host | = | l2 #2 | ні | ✅ |
| a32, a33 | rains; had / passed | = | l3 #2 | ні | ✅ |
| a34 sort | 2/2/2 | = | l3 #2 | ні | ✅ |
| a35 multi | [0,1] | = | l3 #6 | «would have went» — хибне | ✅ |
| a36 pick | will get | = | l3 #2 | ні | ✅ |
| a37 build | If Bohdan had left home earlier, he wouldn’t have missed the bus. | = | l3 #2, #8 | «**If he had left home earlier, Bohdan wouldn’t have missed the bus.**» — граматично правильно (займенник перед іменником), і рушій це не зараховував | ❌ → другий рядок в answer |
| a38–a40 gaps | pass; had / had charged; stops / had had; lived; go | = | l3 #2, #4 | змішані умовні не стоять хибними (a40: «had lived» не серед варіантів, як і заявив автор) | ✅ |
| a41–a43 | за списком / suits; experience / weaknesses (weakness) | = | l4 #3 | ні | ✅ |
| a44–a46 | writing… / work experience / [0,2] | = | текст вправи | ні | ✅ |
| a47 gaps | ’ll lend; will have finished | = | l4 #4, #6 | ні | ✅ |
| a48 multi | [0,2] | = | l4 #4 | will / going to / Continuous — разом лише тут | ✅ |
| a49 gaps | will be taking; will have finished | = | l4 #6 | ні | ✅ |
| a50 pick | walk | = | l4 #6 | ні | ✅ |
| a51 choice | I’ll close the window. | = | l4 #4 | ні | ✅ |
| a52 gaps | mind; ’m going | = | l4 #3, #4 | рамка фіналу l4 («I’ve made up my {mind\|head…}: I’m going to apply for…») з тим самим ключем | ⚠️ → «After a long talk with my mum, I’ve finally made up my {mind\|head}. Computer science is the course for me!…» |
| a53, a54 gaps | starts; ’ll be revising; ’ll have finished / suits; ’m going to; ’m meeting; ’ll have written | = | l4 #3, #4, #6 | ні | ✅ |
| a55–a57 | за списком / in demand; well paid / in demand; competitive; responsibility | = | l5 #3 | prestigious для nurses відсікає двокрапка | ✅ |
| a58–a60 | five / six; five; continue / London | = | l5 #5 | ні | ✅ |
| a61 gaps | disadvantage; depends | = | l5 #7 | ні | ✅ |
| a62 match | за списком | = | l5 #7 | інших пар немає; пара «disadvantage of being a pilot ↔ often away from home» — дослівний приклад з info l5 | ⚠️ → «One disadvantage of being a farmer ↔ is that you get up very early.»; steps |
| a63 build | 2 порядки | = | l5 #7 | перебір: лише ключі | ✅ |
| a64–a66 | as; than / as / than | = | l5 #7, #9 | ні | ✅ |
| a67–a69 stress | за словником | = | §3 | ні | ✅ |
| a70 gaps | respected; responsibility | = | l5 #3 | ні | ✅ |
| a71 gaps | advantage; as; than | = | l5 #7 | «isn’t as well paid {as\|than\|like} some IT jobs» — рамка фіналу l5 з тими самими варіантами | ⚠️ → «It probably won’t be as well paid {as\|than\|like} some other jobs…» |
| a72 gaps | prestigious; highly; in demand; competitive; on | = | l5 #3, #7 | «Being a doctor is a prestigious job… Doctors are {highly\|high\|highest} skilled» — рамка gaps l5 з тими самими дистракторами | ⚠️ → «Now I’d like to be a doctor. It’s a {prestigious…} job… Doctors train for many years, so they are {highly…} skilled people…» |
| a73–a77 | hope; wish / could / I wish I lived… / can / to study; get; lived | = | l6 #3 | «will get» після hope не серед варіантів; were / was не оцінюються | ✅ |
| a78, a79 | Anyway, I’d better go. / talking; touch; care | = | l6 #6 | «It’s been great to talk» не серед варіантів | ✅ |
| a80 build | 2 порядки | = | l6 #6 | «Start with So»; перебір: лише ключі | ✅ |
| a81–a84 | All in all… / aunt in Odesa / not enough time / [0,1] | = | l6 #6, #3 | Daryna — тітка в Odesa (канон) | ✅ |
| a85, a86 | hope; to meet / wish; hope; better | = | l6 #3, #6 | «I’d best go» не серед варіантів | ✅ |
| a87 gaps | All in all; agree; wish; hope; touch | = | l6 #3, #6 | рамки фіналу й intro l6 («all in all, it’s been an amazing year», «keep in {touch\|touching\|mind}», «It’s been great being in your class») | ⚠️ → «All in all, it’s been a busy but happy year. So we all agree that our class was the best! … Let’s keep in {touch\|touched\|touches}!»; steps |

**Пастки теми.** Умовні: will / would у if-частині — лише хибні, would / could / might — разом лише в multi, а змішані умовні ніде не стоять хибними ✅. Майбутнє: will / going to / Present Continuous не протиставлено там, де можливі обидва ✅. wish / hope — як у l6 ✅. hint не видають відповідей ✅. Лексика — з уроків e11s8 і раніших; нові слова правок (neighbours, farmer, invite) є в e4s8, e10s1, e10s4 ✅. Вік і плани героїв — за каноном ✅.

## 5. Авторське право
Тексти власні. Дослівний пошук (WebSearch з лапками) найдовшого фрагмента «I wish I could stay in Kyiv all summer, but I’m going to work as a volunteer» (a84) збігів не дав ✅.

## 6. Прогін
`node tools/validate.mjs --pool pe11s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s8` — 6 уроків, 87 вправ, правило ≥ 3 і рівні 1–3 виконано; `euphony --pool pe11s8` — без зауважень. `test-answer-ui.py` не запускав, бо в контейнері немає Python-модуля playwright; прогін буде в CI.

## 7. Правки
Зроблено (8): a03, a15, a37, a52, a62, a71, a72, a87. `status: "verified"`, meta.factcheck. Відкритих ❌ і ⚠️ немає. У verified-уроках e11s7 і e11s8 нових проблем я не знайшов, тож рядків FIX немає.
