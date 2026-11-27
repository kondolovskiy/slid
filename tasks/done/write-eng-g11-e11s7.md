---
claimed_from: todo
claimed_at: 2026-11-26T10:58:08.813Z
id: write-eng-g11-e11s7
type: write-section
subject: eng
grade: 11
section: e11s7
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e11s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Ukraine in the world» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Україна в світі — міжнародні організації: ЄС, ООН, Рада Європи; законодавчі акти; право; норми етикету; благодійна діяльність; Країни виучуваної мови (за вибором) — міжнародні відносини; знаменні події; видатні люди — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21.
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): defining vs. non-defining relative clauses; overview of relative pronouns (с. 25) — повт. who / which / that (e6s6l3), defining / non-defining (e8s4 l3–l4), where / when / whose / why (e9s5 l3–l5); нове для B2: whom, which про все речення («…, which surprised everyone»), пропуск займенника-додатка, огляд усіх займенників. Reported speech with changed tenses — у e11s1 (план змінено).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: who / that, which / that у defining — обидва в ключі; у non-defining that неможливе; займенник-додаток можна пропустити (the law (that) they passed) — ключ з ним і без; who як додаток замість whom — правильне (CD Grammar «Who, whom») — ключ обидва. Назва розділу змінена (план): «Ukraine in the world». Факти: членство України в ООН (з 1945 р., як УРСР), у Раді Європи (з 1995 р.), статус кандидата в ЄС (з 2022 р.) — **звірити за першоджерелами** (un.org, coe.int, consilium.europa.eu) і внести FACT; не писати, що Україна — член ЄС. Законодавчі акти й право — загально (Конституція, права людини), без юридичних порад. Етикет — порівняння звичаїв без стереотипів (функція «порівнювати», с. 23). Видатні люди й знаменні події англомовних країн, відносини UK–Україна — з джерела з датою, нейтрально. Благодійна діяльність — e11s1 l5 і тут l1 (гуманітарна допомога міжнародних організацій). Функції (с. 23): «підводити підсумки обговорення». `requires`: e6s6l3; 7–9 — e8s4 l3–l4, e9s5 l3. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s7.js`: `SLID.section("eng", { id: "e11s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e11s7, 2026-11-26.** Файл `content/eng/g11-e11s7.js`, статус draft, 7 уроків (6 + boss `e11s7boss` «Global Citizen»):
l1 «Ukraine, the EU, the UN and the Council of Europe» (лексика організацій, гуманітарна допомога UNICEF / WFP, повт. defining who/which/that/where); l2 «Laws and rights» (закон, суд, права людини, defining vs non-defining з комами); l3 «Is it polite? Etiquette» (порівняння звичаїв: whereas / unlike / both; tip, service charge); l4 «Who or whom?» (whom, прийменник + whom, огляд усіх займенників, пропуск займенника-додатка); l5 «…, which surprised everyone» (which про все речення; which means / which is why); l6 «Events and people» (повний текст читання 403 слова, 3 уривки; функція «підсумувати обговорення»); l7 boss (10 екранів).
`requires`: e6s6l3, e8s4l3, e8s4l4, e9s5l3, e9s5l4, e9s5l5, e10s7l2 (pass a law), e11s1l1, e11s1l2, e11s1l6 (Could I just add something? / Let’s get back to — дистрактори в l6, boss) — id звірено, усі існують.
validate --section e11s7: 0 помилок, 0 попереджень. stats: прапорці лише l2 sentenceWords z=2 (у межах профілю 4–16, середнє 9: визначення термінів права) і l6 readWordsPerScreen / maxReadWords (урок читання 11 кл., 3 уривки по 113–147 слів + питання ≤ 190; як e11s2 l6, e11s3 l5).

**Факти (кожен — ≥ 2 джерела):**
- ООН: Україна (УРСР) — одна з 51 країни-засновниці, підписала Статут 26.06.1945, член з 24.10.1945; зараз 193 члени — https://en.wikipedia.org/wiki/Ukraine_and_the_United_Nations ; https://research.un.org/en/unmembers/founders ; https://ask.un.org/faq/243656 ; https://en.wikipedia.org/wiki/Member_states_of_the_United_Nations (193).
- Рада Європи: Україна — член з 9.11.1995 (37-ма), 46 держав, штаб-квартира Strasbourg — https://www.coe.int/en/web/portal/ukraine ; https://www.kmu.gov.ua/en/yevropejska-integraciya/spivrobitnictvo-z-radoyu-yevropi ; https://www.coe.int/en/web/kyiv/-/council-of-europe-and-ukraine-30-years-together ; https://en.wikipedia.org/wiki/Member_states_of_the_Council_of_Europe (46).
- ЄС: заявка 2022; статус кандидата — Європейська рада, 23–24.06.2022 (EUCO 24/22; у тексті лише «in June that year»); переговори — перша міжурядова конференція 25.06.2024 (Luxembourg); Україна не член ЄС (у тексті двічі) — https://www.eeas.europa.eu/delegations/ukraine/european-council-conclusions-ukraine-membership-applications-ukraine-republic_en ; https://data.consilium.europa.eu/doc/document/ST-24-2022-INIT/en/pdf ; https://www.kmu.gov.ua/en/news/ukraina-ofitsiino-rozpochala-peremovyny-pro-vstup-z-ies ; https://www.irishtimes.com/world/europe/2024/06/25/ukraine-begins-historic-membership-negotiations-towards-joining-eu/ . Перший переговорний кластер (15.06.2026) не згадано.
- UNICEF — агенція ООН, допомога дітям; WFP — продовольча агенція ООН; обидві працюють в Україні — https://en.wikipedia.org/wiki/UNICEF ; https://www.unicef.org/ukraine/en ; https://en.wikipedia.org/wiki/World_Food_Programme ; https://www.wfp.org/countries/ukraine .
- Загальна декларація прав людини — 10.12.1948, Paris, ст. 1 «born free and equal in dignity and rights», 10 December — Human Rights Day; комітет очолювала Eleanor Roosevelt — https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights ; https://www.un.org/en/about-us/universal-declaration-of-human-rights ; https://en.wikipedia.org/wiki/Human_Rights_Day .
- ЄКПЛ — відкрито для підпису 4.11.1950; для України набула чинності 11.09.1997 (ратифікація ВР 17.07.1997); ЄСПЛ — Strasbourg, звертаються після національних судів — https://en.wikipedia.org/wiki/European_Convention_on_Human_Rights ; https://www.coe.int/en/web/execution/ukraine ; https://www.coe.int/en/web/kyiv/-/70-years-of-the-european-convention-on-human-rights ; https://en.wikipedia.org/wiki/European_Court_of_Human_Rights .
- Етикет (лише через пошукову видачу: culturalatlas, kyivpost, obozrevatel з контейнера не відкриваються): в Україні — непарна кількість квітів, парна — на похорон; гості знімають взуття, отримують капці; не тиснуть руку через поріг (прикмета) — https://culturalatlas.sbs.com.au/ukrainian-culture/ukrainian-culture-etiquette ; https://www.expat.com/en/guide/europe/ukraine/6790-dos-and-don-ts-in-ukraine.html ; https://www.ukrainianlessons.com/ukrainian-customs/ . У тексті — як досвід героїв (Orysia, Emma), «some people think», без узагальнень про «всіх британців». UK: черги, jumping the queue — rude; чайові ≈ 10–15 %, якщо немає service charge — https://www.brookes.ac.uk/students/isat/living-in-the-uk/culture-and-etiquette ; https://culturalatlas.sbs.com.au/british-culture/british-culture-etiquette ; https://explore.com/1808719/ignoring-unspoken-etiquette-rule-uk-could-score-dirty-looks-queuing .
- Gareth Jones — 13.08.1905 Barry (≈ 9 миль від Cardiff) – 12.08.1935 (за день до 30-річчя); березень 1933 — подорож Радянською Україною, перший на Заході відкрито й під власним іменем повідомив про голод — https://en.wikipedia.org/wiki/Gareth_Jones_(journalist) ; https://theconversation.com/reporting-ukraine-90-years-ago-the-welsh-journalist-who-uncovered-stalins-genocide-200949 ; https://spartacus-educational.com/GBjonesG.htm ; https://en.wikipedia.org/wiki/Barry,_Vale_of_Glamorgan . «He also kept a diary» — https://www.themoscowtimes.com/archive/diaries-of-stalineurtms-famine-displayed (щоденники виставлено). Вчителька Owen і «historian» — вигадані.
- Eurovision: 2022 — Kalush Orchestra, «Stefania»; UK — друге місце 2022; 2023 — Liverpool, BBC від імені UA:PBC; фінал 13.05.2023 відкрили Kalush Orchestra; Tvorchi — 6-те місце; Liverpool — north-west England — https://en.wikipedia.org/wiki/Eurovision_Song_Contest_2023 ; https://itv.com/news/2023-05-10/ukraines-party-at-our-house-liverpool-shares-eurovision-honour ; https://kyivindependent.com/sweden-wins-eurovision-2023-ukraine-places-6/amp ; https://theprint.in/entertainment/eurovision-2023-ukraine-inspired-grand-final-kicks-off-in-liverpool/1573239 (Reuters).
- Faraday → Akademik Vernadsky: британська станція з 1947, острів Galindez біля Антарктичного півострова; передано Україні, прапор піднято 6.02.1996; «за 1 фунт» — легенда (не пишемо); UK планувала закрити (продаж зберіг витрати на демонтаж) — https://en.wikipedia.org/wiki/Vernadsky_Research_Base ; https://uac.gov.ua/en/vernadsky-station-en/station-history-en/ ; https://uac.gov.ua/en/the-beginning-of-the-history-a-memorandum-on-the-transfer-of-the-british-station-to-ukraine-was-signed-25-years-ago/ .
- Володимир Вернадський (1863–1945) — мінералог, геохімік, перший президент Української академії наук (1918) — https://www.nas.gov.ua/en/about-nas/history-nas ; https://www.encyclopediaofukraine.com/pages%5CV%5CE%5CVernadskyVolodymyr.htm ; https://en.wikipedia.org/wiki/Vernadsky_Research_Base .
- Леонід Каденюк — 28.01.1951 Klishkivtsi (Chernivtsi Oblast) – 31.01.2018; льотчик-випробувач; STS-87 Columbia 19.11–5.12.1997 (≈ 16 днів), перший астронавт незалежної України, досліди з рослинами — https://en.wikipedia.org/wiki/Leonid_Kadenyuk ; https://en.wikipedia.org/wiki/STS-87 ; https://www.britannica.com/biography/Leonid-Kadenyuk ; https://www.space.com/39693-ukranian-astronaut-leonid-kadenyuk-obituary.html .
- Іван Пилипів і Василь Єленяк з Небилова — прибули до Montreal у вересні 1891 (7.09; Ukrinform — 6.09; у тексті лише місяць), корабель з Liverpool 28.08 (тому «більше тижня»); почули про вільну землю; Пилипів повернувся й розповів сусідам; до 1914 — переселення тисяч родин на прерії; 2021 — 1,258,635 канадців українського походження («more than a million») — https://en.wikipedia.org/wiki/Iwan_Pylypow ; https://www.encyclopediaofukraine.com/pages%5CE%5CL%5CEleniakWasyl.htm ; https://mhs.mb.ca/docs/transactions/3/firstukrainians.shtml ; https://en.wikipedia.org/wiki/Ukrainian_Canadians (Statistics Canada 2021).

**Граматика й словники:** CD Grammar «Relative pronouns» (whom — formal/object; «Not: …on who»), «Who, whom», «Relative clauses: defining and non-defining» (that — лише defining; пропуск займенника-додатка), «Relative clauses referring to a whole sentence» («We always use which») — https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns , …/who-whom , …/relative-clauses-defining-and-non-defining , …/relative-clauses-referring-to-a-whole-sentence . Наголос — CD: etiquette ˈet.ɪ.ket, candidate ˈkæn.dɪ.dət, humanitarian hjuːˌmæn.ɪˈteə.ri.ən, equality iˈkwɒl.ə.ti, membership ˈmem.bə.ʃɪp, organisation ˌɔː.ɡən.aɪˈzeɪ.ʃən; whereas, unlike, headquarters, candidate — B2 (CD); sum up — B2. customary (C1) не взято.

**Друга правильна відповідь — як розв'язано:** which/that і who/that у defining ніде не стоять поруч у gaps (у fbText — «that is also correct»); who як додаток — у multi з whom і that (l4, boss); після прийменника — лише whom (to who — хибний, CD); у non-defining that — хибний; which-коментар — хибні what / that / who (не «it» і не «that is why» — щоб не сперечатися про comma splice); пропуск займенника — multi (l4) і fbText (l1 word). build: l3, l4, l5 — перебрав інші порядки: «Unlike X, Y…» з комою в плитці дає один порядок; l5 — «In 2022, Ukraine won Eurovision which…» без коми перед which не зараховується (це defining з власною назвою — помилка).

**Опори (D-019):** l1 match і фінал — факти з intro (ек. 1); l3 sort — з листа Emma (ек. 1), choice про service charge — ек. 7; l5 match — факти з ек. 7 і intro; boss — читання 1–2 лише з фактів l1, l2, l4, l5 (pre вказано).

**Спірне:** (1) Етикет-джерела — довідники для туристів (не наукові); подано як досвід героїв. (2) «UK planned to close it» (Faraday) — з Wikipedia (sale spared the cost of dismantling) і UAC «transferred free of charge»; формулювання м'яке. (3) «people in Ukraine still remember him» (Jones) — слова вигаданої вчительки, не факт. (4) l2 «violate» rights — лише в info, не оцінюється.
