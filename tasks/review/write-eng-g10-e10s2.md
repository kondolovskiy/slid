---
claimed_from: todo
claimed_at: 2026-11-26T10:14:52.316Z
id: write-eng-g10-e10s2
type: write-section
subject: eng
grade: 10
section: e10s2
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Sport, health and leisure» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Спорт і дозвілля — роль спорту в житті суспільства та людини; спортивні події/змагання; здоров’я та спорт — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): verb + -ing vs to-infinitive; verbs taking gerund (с. 23) — повт. e8s2 l3 (enjoy / want); нове для B2: avoid, mind, risk, keep, give up, practise, can’t stand + -ing; refuse, manage, afford, agree + to; зміна значення — stop, remember, forget, try, regret (l4).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: like, love, hate, prefer, begin, start, continue + -ing і + to — обидві форми (CD Grammar «Verb patterns: verb + infinitive or verb + -ing?») — або дієслово з одним шаблоном, або обидві в ключі; у stop / remember / try / forget / regret контекст має однозначно показувати значення. BrE: sport (загальне), sports як прикметник (sports event) — facts/eng.md №14; practise (дієсл.) / practice (ім.) — glossary/eng.md. Події — Олімпійські й Паралімпійські ігри, чемпіонати; результати й імена українських спортсменів — лише з джерела з датою (e7s5 l5 «The first Ukrainian to win» — не дублювати тих самих людей). Здоров’я: не дублювати e8s2 l1–l2 (здоровий спосіб життя, too much / not enough) — тут саме спорт і здоров’я. Здоров’я — без медичних порад. Функція «аргументувати свою точку зору» (с. 22) — l6. `requires`: e5s6l2, e5s6l6 (like + -ing), e6s4l1–l2 (види спорту, prefer); 7–9 — e7s5, e8s2 l3. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s2.js`: `SLID.section("eng", { id: "e10s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e10s2` — 0 помилок; попередження виправлено або пояснено.
- [x] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e10s2, 2026-11-26. Файл `content/eng/g10-e10s2.js` — 7 уроків (6 + фінал), status draft. `validate --section e10s2`: 0 помилок, 0 попереджень. `stats --subject eng`: прапорців «нетипово для сім'ї» немає (l4 після заміни gaps → sort має 5 типів).

**Уроки:** l1 Why do people love sport? (keep fit, deal with stress, discipline, team spirit, fair play, role model, spectator) · l2 Risk losing, refuse to give up: verb patterns (keep, give up, practise, mind, risk, can’t stand + -ing; refuse, manage, afford, agree + to; like / love / hate / prefer / start / begin / continue — both) · l3 Big sports events in Ukraine and the world (читання з 3 частин ≈ 260 слів + питання; host, take place, be held, compete, opening ceremony, Paralympic Games) · l4 Stop, remember, try: a change in meaning (stop, remember, forget, try, regret) · l5 Avoid injuries, keep moving: sport and health (warm up, cool down, stretch, injury, recover, rest; WHO, NHS) · l6 Is sport good for everyone? Giving your opinion (In my view, On the one hand / On the other hand, For instance, What’s more, To sum up; калька «From the one hand») · l7 boss «Sports Week: the club magazine» (7 завдань з `pre` на l1–l6).

**requires:** e5s6l2, e5s6l6, e6s4l1, e6s4l2 (за планом) + e7s5l1 (competitions, medals), e7s5l5 (the first … to win; Baiul / Bubka / Mahuchikh — тут не дублюються, нова людина — Kharlan), e8s2l3 (enjoy / avoid / finish + -ing, want / decide / hope + to, both), e8s2l4 (give up + -ing), e9s9l1 (In my opinion, Personally) — id звірено за файлами g7-e7s5.js, g8-e8s2.js, g9-e9s9.js.

**Граматика й форми (джерела):**
- CD Grammar «Verb patterns: verb + infinitive or verb + -ing?» — https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing : to-infinitive — afford, agree, manage, refuse (а також begin, continue, forget, hate, like, love, prefer, remember, start, try); -ing — avoid, finish, mind, give up, practise, (can’t) stand, keep (on), risk, enjoy; hate / like / love / prefer — обидві форми; зміна значення — remember, try, regret, stop (і go on, mean, need).
- **can’t stand + to теж можливе:** OALD stand_1 «stand to do something: She couldn't stand to be kept waiting» — https://www.oxfordlearnersdictionaries.com/definition/english/stand_1 . Тому в info «can’t stand + -ing» без «Not: can’t stand to», а в пропусках після can’t stand варіанта to немає (лише гола основа run / lose).
- try + to / try + -ing — лише вибір значення (l4 choice), не пропуск: «tried to … but couldn’t» / «tried …ing but couldn’t» обидва трапляються.
- stop to / stop -ing — CD Grammar там само («We stopped to buy some water…»); regret + to — формальне повідомлення (CD Grammar «Regret»; приклад власний).
- warm up / warm-up, cool down — CD https://dictionary.cambridge.org/dictionary/english/warm-up , …/cool-down ; stretch — CD …/stretch ; keep fit — CD …/keep-fit ; team spirit — CD …/team-spirit ; fair play — CD …/fair-play ; role model (C1) — CD …/role-model ; spectator (B2) — CD …/spectator ; take place (B1) — CD …/take-place ; what’s more (B2), on the one hand (B2), for instance (B1), to sum up (B2) — CD …/what-s-more , …/on-the-one-hand , …/for-instance , …/to-sum-up .
- Наголос (CD, UK): ˈæθ.liːt, ˌkɒm.pəˈtɪʃ.ən, ˈdɪs.ə.plɪn, spekˈteɪ.tər, ˈɪn.dʒər.i, ˈser.ɪ.mə.ni, əˈlɪm.pɪk, ˌpær.əˈlɪm.pɪk, ˈsteɪ.di.əm, ˈek.sə.saɪz, ˈen.ə.dʒi, rɪˈkʌv.ər — https://dictionary.cambridge.org/dictionary/english/<слово>.

**Факти (≥ 2 джерела):**
1. Перші сучасні Олімпійські ігри — Athens, 1896: https://olympics.com/en/olympic-games/athens-1896 ; https://www.britannica.com/print/article/972056
2. London — перше місто, що прийняло літні Олімпійські ігри тричі (1908, 1948, 2012): https://www.guinnessworldrecords.com/world-records/most-modern-summer-olympics-games-hosted ; https://www.britannica.com/print/article/1818427 (Paris тепер теж тричі — 1900, 1924, 2024, тому лише «the first city»).
3. 1948 — Stoke Mandeville Games (Dr Ludwig Guttmann, пацієнти на візках, Stoke Mandeville Hospital); 1960, Rome — перші Паралімпійські ігри (ретроспективно): https://www.paralympic.org/rome-1960 ; https://www.nationalarchives.gov.uk/explore-the-collection/stories/sir-ludwig-guttmann-and-the-birth-of-the-paralympic-games/ ; https://content.www.wellcomecollection.org/stories/ludwig-guttmann-and-the-birth-of-the-paralympics
4. Beijing 2022 Winter Paralympics (4–13 March 2022): Ukraine — 29 медалей (11 gold, 10 silver, 8 bronze), 2-ге місце після China (61): https://www.nbcolympics.com/news/ukraine-finishes-second-behind-china-2022-winter-paralympic-medal-count ; https://en.interfax.com.ua/news/general/812467.html ; https://en.wikipedia.org/wiki/2022_Winter_Paralympics_medal_table . «less than two weeks after Russia’s full-scale invasion of Ukraine began» — 24.02 → 04.03.2022.
5. Euro 2012: Ukraine і Poland, 8 стадіонів (по 4 в кожній країні); фінал — Olympic Stadium, Kyiv, 1 July 2012, Spain 4–0 Italy: https://www.uefa.com/uefaeuro/history/news/0254-0d7cd3eed0b2-35445545aef8-1000--overview ; https://www.aljazeera.com/sports/2012/7/1/spain-crowned-european-champions ; https://www.skysports.com/football/news/19693/7347087/euro-2012-venues ; https://archive.kyivpost.com/lifestyle/uefa-confirms-all-eight-venues-for-euro-2012-84983.html
6. Olha Kharlan (Ольга Харлан; КМУ № 55 → Olha), Paris 2024: бронза (індивідуальна шабля) і золото (командна шабля); 6 олімпійських медалей — найбільше серед спортсменів, що виступали за Україну (до неї — Klochkova, 5): https://kyivindependent.com/fencer-olga-kharlan-becomes-ukraines-most-decorated-olympian ; https://www.rferl.org/a/ukraine-saber-fencing-olha-kharlan-bronze-gold/33068939.html ; https://www.pravda.com.ua/eng/news/2024/08/03/7468807/ . Формулювання «more than any other athlete who has competed for Ukraine» — свідомо не «Ukrainian athlete» (Latynina та ін. виступали за СРСР).
7. WHO: фізична активність корисна для психічного здоров'я підлітків — менше тривожності й депресії, вища самооцінка (у тексті: «reduce anxiety and help them feel more confident»): WHO/HBSC factsheet https://en.tai.ee/images/PDF/Uuringud/WHO-HBSC_factsheet_Physical.pdf ; WHO/PAHO 9.11.2026 https://www.paho.org/en/news/9-11-2026-one-four-adolescents-worldwide-reported-no-active-days-previous-week ; WHO fact sheet https://www.who.int/news-room/fact-sheets/detail/physical-activity (who.int і paho.org WebFetch не резолвить — формулювання з пошукової видачі; верифікатору звірити, якщо хост доступний).
8. NHS: розминка перед вправами допомагає уникнути травм: https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/ ; NHS Lothian «Preventing sport injury» https://policyonline.nhslothian.scot/wp-content/uploads/2023/03/Preventing%20sport%20injury.pdf

**Медичних порад немає:** правила тренування — слова тренера-героя Mr Hnatiuk (l5 intro, gaps, word); WHO / NHS — переказ з джерелом; діалог l5 (Mariia 3 → 10 km) — про поступовість тренувань, без медицини. Верифікатору — оцінити, чи прийнятне «Don’t train when you’re injured. Tell me if something hurts.» у правилах клубу.

**Опора завдань (D-019), неочевидне:**
- l1 #9 (choice, fair play) — визначення fair play на #3; team spirit свідомо не варіант (допомога суперниці — не про команду).
- l3 #4–#6 — відповіді лише в уривку на тому ж екрані; #7 (весь текст) — після останньої частини. Gaps #8 і фінал #11 повторюють факти з уривків #4–#6 (форма — з info #3).
- l3 hyp #2 — Kyiv названо у fbText, далі є в уривку #6.
- l4 #8 choice try — значення з info #7; #9 regret — з info #7.
- l7 Task 3 (Euro 2012 у Kyiv) і Task 7 (Kharlan) — з l3.

**Друга правильна відповідь — що перевірено:** у gaps жодного дієслова з обома формами (like, love, prefer, start…) — лише sort / choice «both»; can’t stand без варіанта to; remember / forget у наказовому реченні про майбутнє (→ to) і зі спогадом «when I was…» / never forget (→ -ing); stop: «started to rain → stopped playing», «on the way → stopped to buy». build l2 — обидва порядки в answer («I kept running and refused to give up.»); build l6 / boss — фронтальна фраза з комою в плитці, інших порядків немає (перебрано скриптом). Перший word l1 — «role model» з before «role» → лише «model».

**Герої (16 років, Tom 14):** Myroslava — 1,500 m у Lviv, упала, фінішувала четвертою; пізніше місяць травма стопи, повернулася; кумир — Yaroslava Mahuchikh (як e6s4). Taras — зимові тренування, 3,000 m за 11 хв, мама купила кросівки; не розминався — біг повільно. Mariia бігає сама в парку (Kharkiv). Ostap — скелелазіння в sports centre, кинув футбол; кузен Marko. Kyrylo — шкільна волейбольна команда. Bohdan — теніс, невелика травма (3 тижні), «can’t stand losing». Andrii — шахи, «Chess is a sport too». Emma — swimming club, з Tom велосипедом до моря; перша медаль у 8 років. Oksana — karate з дев'яти, перша медаль у десять, турнір у Poltava (програла в півфіналі), Halyna приходила дивитися. Daryna — канат на PE. Zoriana, Kateryna — дебати. Нових героїв немає. Школу Оксани в 10 кл. не згадано.

**Сумнівне / для верифікатора:** afford перевіряється лише в sort l2 (CD Grammar — лише to; пропусків «afford buying» немає); l2 sort — mind у кошику -ing (CD); прийнятність згадки війни в l3 #5 (факт, нейтрально).
