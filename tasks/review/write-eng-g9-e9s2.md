---
claimed_from: todo
claimed_at: 2026-11-25T12:34:54.330Z
id: write-eng-g9-e9s2
type: write-section
subject: eng
grade: 9
section: e9s2
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e9s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Довкілля» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: навколишнє середовище; охорона довкілля; рослинний і тваринний світ — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Future Continuous: affirmative, negative (B1; відкладене з 6 кл.) — нове; predictions: will / be going to (B1: Will, Be going to — predictions) — повторення з контрастом; adverbs of certainty: probably, definitely, perhaps (B1: Adverbs — certainty) — нове; повторення: passive infinitive — must be protected (e7s2), might (e6s5l4).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** will / going to для прогнозу — часто обидва (pitfalls-content «Англійська» п. 12) → контекст «ознаки видно зараз» або обидва в ключі; probably — позиція: will probably / probably won’t. Червона книга України — англійська назва і види — з джерела (en/uk.wikipedia, сайт Мінприроди); без алармізму й політики; екопроєкт — посильні дії учнів. Підтема «рослинний і тваринний світ» — Україна поруч з країнами мови. `requires`: e4s6l4, e4s6l6, e5s5l5, e5s9l3, e6s5l4; після появи e7s2 — урок passive infinitive (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s2.js`: `SLID.section("eng", { id: "e9s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s2, 2026-11-25.** Файл `content/eng/g9-e9s2.js`, 7 уроків (6 + boss), status draft. validate --section e9s2: 0 помилок, 0 попереджень. stats: e9s2l2 — readWordsPerScreen і sentenceWords «нетипово для сім'ї» (z=2.4 / 2.2): урок читання з текстом у двох частинах (екрани 4–5, уривок + питання, як велить style/eng.md «Тексти для читання»); у межах профілю (validate мовчить). Решта уроків без прапорців.

**Уроки:** l1 Air, water and land (environment, pollution/pollute, rubbish, recycle, protect, wildlife); l2 Rare plants and animals of Ukraine (Red Book of Ukraine, rare, species, nature reserve; читання у 2 частинах; UK — руда білка); l3 predictions: will / be going to (контраст) + adverbs of certainty (definitely, probably, perhaps) + might (повт. e6s5l4); l4 Future Continuous (affirmative, negative); l5 passive infinitive (повт. e7s2l4) + читання про Карпатський біосферний заповідник; l6 eco project (I'm sure / I strongly believe / In my opinion; because / that's why; Let's / We'll need / Who's going to / I'll); l7 boss (6 завдань, `pre` на l1–l6).

**will / going to (pitfalls-content п. 12):** в info l3 прямо «Often both are correct»; ніде will і be going to не стоять варіантами одного пропуску; l3 екран 6 — `multi`, де правильні обидва («will be» і «is going to be»); у `gaps` пастки — лише хибні форми (are going to, going to без be, wills, will to). Сортування l3 — за причиною (бачу ознаки / моя думка), не за формою. Future Continuous: will + інфінітив ніде не дається хибним (ключ відсікає лише хибні форми: will flying, will be fly).
**probably won't:** пастка — лише «won't probably» (pick l3 екран 9, gaps l3, l3 фінал, boss T3); «will probably not» і «probably will» хибними не даються. Правило: CD Grammar «Adverbs and adverb phrases: position» («certainty… mid position: probably… It’ll probably rain»; perhaps — front) https://dictionary.cambridge.org/grammar/british-grammar/adverbs-and-adverb-phrases-position ; British Council LearnEnglish «Adverbials of probability» (при заперечному допоміжному прислівник перед ним: «She probably won't come to the party») https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/adverbials-probability ; CD probably (A2) https://dictionary.cambridge.org/dictionary/english/probably ; CD Grammar perhaps (front, mid, end) https://dictionary.cambridge.org/grammar/british-grammar/perhaps
**Форми й граматика:** CD Grammar Future continuous https://dictionary.cambridge.org/grammar/british-grammar/future-continuous-i-will-be-working ; Will (predictions) https://dictionary.cambridge.org/grammar/british-grammar/will ; Be going to (predictions «evidence for now») https://dictionary.cambridge.org/grammar/british-grammar/be-going-to . Рівні CD: environment B1, pollution B1, recycle B1, protect B1, rare B1, wildlife B1, predict B1, species B2 (введено в info l2 з прикладом до першого завдання), litter B2 (не вжито), prediction B2 (лише в why розділу з plan.js). Наголос (CD UK): environment /ɪnˈvaɪ.rə.mənt/, pollution /pəˈluː.ʃən/, recycle /ˌriːˈsaɪ.kəl/, protect /prəˈtekt/, wildlife /ˈwaɪld.laɪf/ — усі підкреслені в info l1 перед `stress`. nature reserve, endangered species, lynx (pl. lynxes or lynx), stork, snowdrop, bison — CD. feed – fed (past participle) — CD.

**Факти (по 2 джерела):**
1. Червона книга України — офіційний перелік рідкісних тварин і рослин, що охороняються законом (англ. Red Data Book / Red Book of Ukraine): https://en.wikipedia.org/wiki/Red_Data_Book_of_Ukraine ; https://www.fair.org.ua/en/znykayuchi-vydy-tvaryn-ukrayiny-hto-stoyit-na-krayu-prirvy/ . Спрощення: у книзі є й гриби — в уроці «animals and plants» (рівень 9 кл.).
2. Зубр (European bison) — у ЧКУ; найбільша (найважча) сухопутна тварина Європи; в Україні зник у XVI–XVII ст., нині живе в нацпарках: https://uk.wikipedia.org/wiki/Зубр ; https://en.wikipedia.org/wiki/European_bison ; WWF CEE https://wwfcee.org/what-we-do/bison ; WWF Ukraine/Poland https://www.wwf.pl/sites/default/files/2019-08/Europan%20bison%20Ukraine%20FINAL.pdf
3. Рись (Eurasian lynx) — у ЧКУ; Карпати й Полісся; «short tail» — CD lynx: https://uk.wikipedia.org/wiki/Рись_євразійська ; https://en.wikipedia.org/wiki/Eurasian_lynx ; https://dictionary.cambridge.org/dictionary/english/lynx
4. Ведмідь бурий — у ЧКУ, Карпати: https://uk.wikipedia.org/wiki/Ведмідь_бурий ; fair.org.ua (вище).
5. Лелека чорний — у ЧКУ (1994, 2009); полохливий на відміну від білого, гніздиться на великих деревах у лісі: https://uk.wikipedia.org/wiki/Лелека_чорний ; https://en.wikipedia.org/wiki/Black_stork
6. Підсніжник звичайний — у ЧКУ (2009); цвіте ранньою весною: https://uk.wikipedia.org/wiki/Підсніжник_звичайний ; https://ukrbotj.co.ua/archive/70/4/543 ; CD snowdrop «in the early spring».
7. Карпатський біосферний заповідник — Закарпатська обл.; букові праліси — у Світовій спадщині ЮНЕСКО з 2007 р. (транснаціональний об'єкт з лісами інших країн Європи); ведмідь і рись живуть у заповіднику: https://en.wikipedia.org/wiki/Carpathian_Biosphere_Reserve ; https://en.wikipedia.org/wiki/Ancient_and_Primeval_Beech_Forests_of_the_Carpathians_and_Other_Regions_of_Europe ; https://rm.coe.int/de11e-2022-report-visit-carpathians-biosphere-reserve-june2021/1680a59850 . Дату 1992 (ЮНЕСКО MAB) не вжито — джерела розходяться (1992 / 1993).
8. Руда білка у Великій Британії рідкісна, більшість — у Шотландії (75–85 %); сірих значно більше: https://www.woodlandtrust.org.uk/blog/2026/04/red-squirrel-facts/ ; https://www.nature.scot/doc/genetic-scorecard-indicator-red-squirrel ; https://wildlifetrusts.org/node/4909

**Вигадане (не факт):** знаки на стежці (l5 intro, фінал l5) — «a sign on the path» у Карпатах, без прив'язки до заповідника; опитування 30 учнів (l6); «Kyiv in 2050» Зоріани — її думка; Clean River Day у Zelena Dolyna.

**Спірне / для верифікатора:**
- l1 екран 7 `word` «Dirty air, water and land: this is ___.» → pollution (словотвір від pollute, умова «Make a noun»).
- l2 екран 10 `word` «Grey squirrels are common, but red squirrels are ___» — у ключі rare, uncommon, endangered.
- l6 екран 9 `word` «…the lights ___ it saves energy» — because, as, since.
- l3 gaps (екран 8) «(50%) {Perhaps|Definitely} Dmytro will come too» — Definitely хибне за шкалою (100 %), не за граматикою.
- l3: «Perhaps often comes at the start» — CD: perhaps front, mid і end; формулювання «often», не «only».
- l4 `word` (екран 10, boss T4) — відповідь із трьох слів, `contractions: true`, у ключі і «’ll be …».
- Опори: boss T2 → l2 екран 3; T3 → l3 екрани 3, 7; T4 → l4 екран 3; T5 → l5 екран 3; T6 → l6 екран 3.

**requires:** e4s6l4, e4s6l6, e5s5l5, e5s9l3, e6s5l4 (із задачі) + e7s2l4 (passive infinitive; файл є — NOTE writer-e7s2).
**Герої:** нових немає. Нове: у Zelena Dolyna є річка й міст; шкільний eco club Оксани з Ms Marchenko; Halyna робить постер; Taras ходив у похід у Карпати з групою й гідом «this summer»; Daryna з мамою — похід у Карпатах; Kyrylo читає книжку про рідкісних тварин; Zoriana — текст «Kyiv in 2050» (роботи); Andrii з сім'єю їде до Chernihiv, рибалить з дідом у неділю; розклад Emma на суботу (swimming club, обід у дідуся, photography club, день народження Liliia); Tom грає на барабанах у новому гурті «this time next year»; Mariia — гаряче травня в Kharkiv, uncle Oleh.
