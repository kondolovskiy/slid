---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.770Z
id: write-eng-g6-e6s5
type: write-section
subject: eng
grade: 6
section: e6s5
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Подорож» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: транспорт; підготовка до подорожі; проїзні документи — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Present Simple for timetables (The train leaves at…); Present Continuous for future arrangements (We’re leaving on Friday); have (got) to: obligation, questions; might: possibility (It might be cold); повторення без дубля — will (e4s7l6, e5s5l5) і be going to (e5s9l3, e5s9l4): лише в порівнянні з новими формами; Shall I…? (offers) — на вибір.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** Друга правильна відповідь — головна пастка розділу: розклад — Present Simple, але «The train is leaving at…» теж можливе; домовленість — Present Continuous, але «We’re going to leave…» теж правильне (CD Grammar «Present continuous», «Be going to»). Контекст однозначний (розклад на екрані; квитки куплено) або обидві форми в ключі. have to / must у правилах подорожі — у BrE обидва (must — у e6s6). BrE: return ticket (CD «UK»), single; timetable; ferry — B1 (CD). Документи — passport, ticket (програма с. 18: бланк на візу — поза уроком, як онлайн-анкети в plan-eng-g5 §7). Україна: поїзд до Lviv (Taras), Odesa (uncle Ivan, e5s6l6). `requires`: e4s7l1, e4s7l6, e5s9l3, e5s5l5. Функція «розпитувати з метою роз’яснення та уточнення» (с. 20) — у діалозі купівлі квитка (l6): Sorry, what time does it leave? / Could you say that again, please? (як e5s2l6) (verifier-curate-eng-plan-g6). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s5.js`: `SLID.section("eng", { id: "e6s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e6s5, 2026-11-20. Файл `content/eng/g6-e6s5.js`, 7 уроків (6 + boss), усі `status: "draft"`; зображень немає (`img/eng/e6s5` не створено).

**Уроки:** l1 «By train, by plane or by ferry?» (ferry, coach, journey, airport, cheap/expensive; by + транспорт; повтор comparatives) · l2 «When does the train leave? Timetables» (Present Simple для розкладу; час past/to/quarter/o’clock — новий екран «Saying the time», бо в 4–5 кл. був лише half past) · l3 «We’re leaving on Friday: travel plans» (Present Continuous для домовленостей; порівняння з going to, will, Present Simple) · l4 «Packing a suitcase: it might be cold» (might / might not; suitcase, rucksack, raincoat, umbrella, sunglasses, sun cream, jumper) · l5 «Tickets and passports: you have to show them» (have to / has to / don’t have to; Do I have to…? – Yes, you do) · l6 «Buying a train ticket at the station» (single / return, ticket office, change trains; функція уточнення: «Sorry, could you say that again, please?», «Sorry, what time…?») · l7 boss «Ready for the journey» (6 завдань, `pre` на l1–l6).
`requires`: e4s7l1, e4s7l6, e5s5l5, e5s9l3, e5s9l4. Shall I…? — не взято (на вибір автора; навантаження розділу й так 4 нові форми).

**Друга правильна відповідь (головна пастка):** у виборі форми хибні варіанти лише граматично неможливі (leave/leaving без is, are take, might to rain, has to shows, Am I have to). Ніде «is leaving» чи «will leave» не стоїть хибним варіантом до розкладу, і «going to» чи Present Simple — до домовленості. Що для плану правильні обидві — показано явно: l3 info «Both are correct» і `multi` (l3 екр. 6, boss T3: correct = -ing і going to). will — лише «вирішив зараз» (l3 екр. 7, контекст «I’m thirsty!»), як у e5s9. Кожне оцінюване завдання розв'язано двічі.
- `build` (4 шт.) перебрано через `SLID_LANG.check` з усіма підмножинами tiles + extra: пастки не зараховуються; l3 додано другий порядок «What time on Friday are you leaving?». Питання — з keepCase і великою першою плиткою; l4 «It might not be…» — keepCase, плитка «It», тож «In the mountains it…» не складається (кома, як verifier-e4s6).
- `word`: ключі без кінцевого знака; l4 «It ___ be sunny tomorrow» — might / may / could (can відсічено «tomorrow»; should — не в ключі, спірно, див. нижче); l5 «We ___ have to print» — don’t / won’t, `contractions: true`; boss T1 — визначення «A big, comfortable bus for long journeys is a ___» (щоб bus не був другою відповіддю).
- l4 `sort`: umbrella — «for the rain» за списком уроку, хоча CD згадує парасолю й від сонця; hint «Which things keep you dry?».

**Джерела форм і рівнів (curl, 2026-11-20):**
- CD Grammar «Future: present continuous…» — «already decided… plan or arrangements»; «We don’t use the present continuous when we predict» — https://dictionary.cambridge.org/grammar/british-grammar/future-present-continuous-to-talk-about-the-future-i-m-working-tomorrow
- CD Grammar «Future: present simple…» — «fixed schedule or timetable: The train arrives at 20.12»; там само «a fixed arrangement» Present Simple → тому PS не пастка до домовленостей — https://dictionary.cambridge.org/grammar/british-grammar/future-present-simple-to-talk-about-the-future-i-work-tomorrow
- CD Grammar «Future: be going to» (plans, decision already made; predictions with evidence) — https://dictionary.cambridge.org/grammar/british-grammar/future-be-going-to-i-am-going-to-work
- CD Grammar «Have got to, have to» — Do… have to? питання з do; Have we got to…? — інверсія (тому в уроці питання лише з do) — https://dictionary.cambridge.org/grammar/british-grammar/have-got-to-have-to
- CD might (POSSIBILITY) A2 — https://dictionary.cambridge.org/dictionary/english/might
- CD: ferry B1 («boat or ship for taking passengers and often vehicles»); coach (VEHICLE) A2 «mainly UK (US usually bus)»; timetable «UK (US schedule)» (транспорт), A2 — шкільний; platform A2 (railway); return ticket «UK… travel to a place and back again», рівень A2; single (ticket) B1 UK; journey A2; passport A2; luggage A2 mainly UK; suitcase A2; pack A2; jumper A2 UK; raincoat A2; umbrella A2; sunglasses A2; sun cream UK; rucksack mainly UK; airport A2; expensive A1; change (TRANSPORT) A2 «change (trains)»; ticket office — колокація в CD ticket — https://dictionary.cambridge.org/dictionary/english/<слово> (ferry, coach, timetable, platform, return-ticket, single, journey, passport, luggage, suitcase, pack, jumper, raincoat, umbrella, sunglasses, sun-cream, rucksack, airport, expensive, change, ticket)
- OALD booking office «(British English)… buy tickets at a train or bus station» (ticket office — синонім) — https://www.oxfordlearnersdictionaries.com/definition/english/booking-office; OALD passport «official document… show when you enter or leave a country» — https://www.oxfordlearnersdictionaries.com/definition/english/passport
- Наголос (CD UK): ferry, journey, airport, suitcase, raincoat, jumper, sunglasses, rucksack, timetable, platform, passport — 1-й склад; expensive, umbrella, return — 2-й.

**Факти:**
- На пором Dover → Calais/Dunkirk паспортний контроль французької прикордонної служби — у порту Dover, до посадки (l5 фінал «We’re at the port in Dover now. First we have to show our passports.») — https://en.wikipedia.org/wiki/Juxtaposed_controls; https://www.irishferries.com/nl/frequently-asked-questions/travelling-on-dover-calais/passports-and-identification-dover-calais-route/ (WebSearch; також Kent Online https://www.kentonline.co.uk/dover/news/amp/border-checkers-move-across-chan-a11636/). Пороми Dover — Calais — https://en.wikipedia.org/wiki/Port_of_Dover.
- Поїзди Полтава → Одеса є (Оксана їде потягом; місто відправлення в уроці не назване) — https://poizdato.net/rozklad-poizdiv/poltava--odesa/ (агрегатор, лише для правдоподібності).
- Розклади, ціни (£20/£10, £36) і час (07.10, 10.45, 16.30…) — **вигадані**, не справжні розклади; міста відправлення Emma — вигадане місто (e5s7).
- Ukrzaliznytsia: квиток + документ особи при посадці (dtkt.ua, diia.gov.ua через WebSearch) — у урок **не** взято (у дітей свої документи; не перевірено) — у l5 sort лише «buy a ticket», «show his ticket».

**Герої (канон inbox, e5s1):** Oksana — щороку в липні в Odesa в дядька Ivan (l1, l3), брат Dmytro; Andrii — Kyiv, сестра Sofiia, бабуся й дідусь у Chernihiv (l1, boss: їдуть до них coach); Mariia з мамою — потяг Kyiv → Kharkiv, тато зустрічає (l2); Taras (Lviv) — вихідні в Carpathians, фотоапарат (l4); Emma — брат Tom, мама; пором до France (l1, l5), квитки до London з каси у своєму місті (l6). Зовнішності не описано; нових персонажів немає.

**Спірне для верифікатора:**
1. l4 `word` «It ___ be sunny tomorrow» — чи класти в ключ should (імовірність, не «не впевнена»).
2. l1 intro і фінал — Present Continuous / going to до уроку 3 (лише в читанні, не оцінюється).
3. l2 stats: readWordsPerScreen 40 (межа профілю 40), z=2.5 «нетипово для сім'ї» без виходу за профіль — урок з розкладом на екранах; style-eng-g4-5 радить не зважати при |z| < 3.
4. «Two returns to London» (CD «single» noun: «May I have a single to London» — тобто returns/singles як іменник); у gaps l6 хибний варіант — «Two return».
5. l4 sort — umbrella лише «for the rain».

validate --section e6s5: 0 помилок, 0 попереджень. stats: усі уроки в профілі «5-6».

## Нотатки верифікатора
verifier-e6s5, 2026-11-20. Звіт: reports/verify/e6s5.md. **Вердикт: verified** (7 уроків).
- Факт Dover (паспортний контроль Франції в порту Dover до посадки) — ✅: en.wikipedia Juxtaposed controls (WebFetch) + P&O Ferries blog «What to Expect when you Check-In at Dover» (WebSearch); irishferries, kentonline, connexionfrance з контейнера не відкриваються.
- Майбутні форми: твердження автора підтверджено — хибні варіанти лише граматично неможливі; build (4) перебрано через app/lang.js — поза ключем граматичних порядків немає.
- Правки: 3 × друга правильна відповідь у `word` (l4 should — body «maybe it won’t»; l5 didn’t — умова з питанням Tom; l6 slowly — body «say it one more time»); l6 gaps дистрактор back → repeat.
- Спірне автора: 1 — should у ключ не кладемо, відсічено умовою; 2 — ок (лише читання); 3 — ок, екран часу потрібен; 4 — «Two returns» ✅ (OALD return_2 «two singles»); 5 — umbrella «for the rain» ✅.
- Рекомендації: requires + e5s5l4 (more expensive); розвести в часі два візити Andrii (l1 / boss).
