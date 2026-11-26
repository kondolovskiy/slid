---
claimed_from: todo
claimed_at: 2026-11-26T10:42:42.055Z
id: write-eng-g11-e11s3
type: write-section
subject: eng
grade: 11
section: e11s3
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e11s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Leisure: clubs, film, TV and the Internet» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Дозвілля — клуби за інтересами; кіно, театр, телебачення, Інтернет; улюблена вистава/фільм; характеристика фільму/вистави/телепрограми — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21 (фестивалі з цієї теми — у e11s4).
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): compound adjectives (с. 25) — нове в нашому плані (в інвентарі B1 МП-ІМ с. 34 є, у плані 7–9 кл. немає): well-known, long-running, award-winning, two-hour (film); question tags (positive/negative, all tenses) (с. 25) — повт. e8s1 l4 (Present Simple); нове: усі часи й модальні, I’m …, aren’t I?, Let’s …, shall we?; reply questions «Really? Did you?» — (наш) для функції «демонструвати зацікавленість у предметі розмови» (с. 23). Present / past participles as adjectives — у e11s4 (план змінено).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: числівник у складному прикметнику — однина (a two-hour film, не *two-hours; звірити CD Grammar «Compound adjectives»); дефіс перед іменником (a well-known actor), а після дієслова часто без нього (he is well known — CD) — ключ з урахуванням позиції; question tags — лише форма, без інтонації (звуку немає); I am → aren’t I (CD Grammar «Question tags»). BrE: programme (TV), film, cinema; the internet — і з малої, і з великої (OALD internet; glossary/eng.md — звірити, одна форма на предмет). Огляд фільму — вигаданий або загальновідомий без спойлерів і без цитат під охороною; не дублювати e7s4 l6 і e8s4 l6 (огляди); клуби — повт. e7s5 l2, e7s6 l1, e9s5 (молодіжні клуби, «Join our club!»): тут — клуби за інтересами на B2 (опис, правила, онлайн-спільноти), без дубля: тут — характеристика фільму, вистави чи телепрограми на B2. Україна — українське кіно й театр (факти з джерела). `requires`: 7–9 — e7s4, e8s1 l4, e9s4 l2. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s3.js`: `SLID.section("eng", { id: "e11s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e11s3, 2026-11-26. Файл content/eng/g11-e11s3.js — 7 уроків (6 + фінал), усі `draft`. validate --section e11s3: 0 помилок, 0 попереджень.

**Уроки:** l1 Clubs for every interest (member, membership, join / sign up for, newcomer, like-minded, online community, moderator, meet up, spoiler; правила онлайн-спільноти Lviv Teen Photo Club) · l2 Cinema, theatre, TV or the internet? (series, episode, binge-watch, stream / streaming service, subtitles, chat show (also talk show), soap opera, sitcom, live; One advantage of … is that …, whereas) · l3 compound adjectives (well-known, world-famous, award-winning, long-running, thought-provoking, action-packed, two-hour, three-part; позиція: before a noun з дефісом / well known після be; число + однина) · l4 question tags у всіх часах і з модальними, aren’t I, Let’s … shall we?, request + will you?, There’s … isn’t there? · l5 огляд: читання «The Lost Bell of Kamianets» (вигаданий фільм; 3 екрани, 143 + 159 + 129 = 431 слово — П1407 с. 21: 400–450), set in, star, cast, plot, soundtrack, special effects, gripping, predictable, I’d recommend / I’d give it · l6 reply questions (Did you? Can’t you?) + Really?, That sounds amazing!, Lucky you!, What a shame, Who with? · l7 boss (9 завдань, `pre` на кожен урок).
requires: e7s4l1, e7s4l2, e7s4l6, e8s1l4, e9s4l2, e9s5l6 (усі існують; plan-eng-g10-11.md §6: e7s4, e8s1 l4, e9s4 l2).

**Форми й словники (curl):**
- Question tags — CD Grammar «Tags» https://dictionary.cambridge.org/grammar/british-grammar/question-tags : aren’t I; imperative tags «most commonly will but we can also use would, could, can and won’t»; let’s → shall; тип 2 «affirmative + affirmative» (She plays the piano, does she?) — граматичний. Тому хибні варіанти тегів — лише з неправильним допоміжним/модальним дієсловом чи займенником; варіантів, що відрізняються лише полярністю, немає; після request серед варіантів лише will you (поряд do you / are you); «am I not» і «will we» після Let’s у варіанти не брав.
- Reply questions — CD Grammar «Questions: follow-up questions» https://dictionary.cambridge.org/grammar/british-grammar/questions-follow-up-questions («Follow-up questions are sometimes called reply questions»; та сама допоміжна/модальна, do/did, якщо її немає; «I can’t…» → «Can’t you?»). Приклади CD не копіював.
- Compound adjectives — CD Grammar «Compounds» https://dictionary.cambridge.org/grammar/british-grammar/compounds (дефіс «when a compound adjective comes before a head noun… a well-known singer»; числа перед іменником: «a twelve-hour flight» — однина); «Hyphens» https://dictionary.cambridge.org/grammar/british-grammar/hyphens . CD well known (заголовне без дефіса, «Her views… are already well known») https://dictionary.cambridge.org/dictionary/english/well-known ; award-winning, long-running, record-breaking, five-star — CD [before noun]; world-famous, action-packed («also action packed»), thought-provoking, like-minded, open-minded — CD.
- Лексика CD: chat show «UK (US also UK talk show)», box set, binge-watch, sitcom, soap opera, series (BROADCASTS), episode (PART OF STORY), plot, cast, spoiler (TELLING STH), streaming service, online community, moderator (internet: «makes sure that the rules of an internet discussion are not broken»; OALD moderator теж), newcomer, membership, sign up for, set in («be set in»), soundtrack, predictable, gripping, subtitles, Lucky you (CD lucky), What a shame (CD shame). heart-warming / heartwarming (OALD / CD) — не вжито через два написання; black-and-white — не вжито (немає статті-прикметника для фільму).
- Наголос (CD): ˈmem.bə.ʃɪp, kəˈmjuː.nə.ti, ˈmɒd.ər.eɪ.tər, ˈnjuːˌkʌm.ər.
- the internet — з малої (TERM writer-e8s3, OALD/CD); programme (TV); chat show першим.

**Факти (Україна, l3, l6, boss):**
- Рейтинг 100 найкращих українських фільмів Довженко-Центру, червень 2021 (опитування представників національної й міжнародної кіноспільноти): 1 — «Тіні забутих предків» (1965), 2 — «Земля» (1930). https://en.wikipedia.org/wiki/List_of_the_100_best_films_in_the_history_of_Ukrainian_cinema ; https://en.wikipedia.org/wiki/Earth_(1930_film) («#2 on its 2021 list»); uk.wikipedia «Земля (фільм, 1930)» (2-га позиція). dovzhenkocentre.org і suspilne.media з контейнера не резолвляться.
- «Земля» (1930) — німий фільм Олександра Довженка: en.wikipedia Earth_(1930_film); uk.wikipedia «Земля (фільм, 1930)».
- «Тіні забутих предків» (1965) — за твором Михайла Коцюбинського; сільські сцени знімали в Криворівні (Карпати): https://en.wikipedia.org/wiki/Shadows_of_Forgotten_Ancestors ; https://uk.wikipedia.org/wiki/Тіні_забутих_предків_(фільм) . «award-winning» — нагороди Мар-дель-Плата 1965 і Салоніки 1966: en.wikipedia (Awards) і uk.wikipedia «Тіні забутих предків (фільм)», розділ «Нагороди» (два джерела).
- Імена за КМУ № 55: Oleksandr Dovzhenko, Mykhailo Kotsiubynskyi (en.wikipedia — Alexander Dovzhenko, Kotsiubynsky); режисера «Тіней» не називаю (усталене англійське Sergei Parajanov ≠ КМУ).
- Вигадані: фільм «The Lost Bell of Kamianets» (пошук не знайшов такої назви), ситком «The Pyrizhok Café», серіал «Moorland Detectives», шоу Quiz Time (з e9s4). Вікових позначок і спойлерів немає.

**Чесні завдання (опора):** l1 ек. 6 (правила на екрані), ек. 9 pick ← ек. 3 («join a club (no preposition)»); l2 ек. 7 sort ← e7s4l2 (interval, box office) + ек. 3; l3 ек. 5 choice cult — дані на екрані; l3 ек. 8–11 ← ек. 3 і 7; l4 ек. 5 choice should ← ек. 3 (modal); l5 ек. 2 spoiler ← l1 ек. 3; l5 ек. 9 (підсумок) — лише після 3-ї частини; l6 ек. 7 choice — вибір за двома ознаками (дієслово + follow-up, ек. 3 і 5); boss Task 3 ← l3 ек. 1 і 5.

**Спірне / для верифікатора:**
- l6 ек. 10 build: у `answer` і «What was it like? Did you?» — неприродно, але граматично; щоб не карати дитину. Якщо верифікатор вважає зайвим — прибрати.
- Колективні іменники (team, club, school) у тегах і reply questions не вживав (BrE it / they).
- l4 ек. 4: «The lights went off… didn’t they?» — вимкнулося світло на сцені; без звуку все одно.

**stats --subject eng:** l3 — без прапорців; l4 sentenceWords z = −2,8 і l6 z = −3,2 (5,3 і 5,0 слова, у межах профілю 4–16): теги й reply questions — короткі репліки («Did you?», «shall we?»), це сам предмет уроку; l5 gradedShare z = 2,7, readWordsPerScreen 64 (≤ 65), maxText 166 (≤ 190) — урок читання з повним текстом B2 (431 слово на 3 екрани), як e9s4l2 / e10s2l3.
