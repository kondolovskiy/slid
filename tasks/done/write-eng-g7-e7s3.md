---
claimed_from: todo
claimed_at: 2026-11-25T12:07:14.486Z
id: write-eng-g7-e7s3
type: write-section
subject: eng
grade: 7
section: e7s3
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e7s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Здоров'я: у лікаря» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: відвідування лікаря; медичні заклади, захворювання, симптоми, ліки — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Present Perfect for recent past and news — I’ve hurt my knee (B1: recent past) — розширення e7s1; Past Simple vs Present Perfect: When did it start? / I’ve had a cough since Monday (B1) — розширення e6s7l5; ought to / ought not to: advice (B1: Ought — advice) — нове; повторення: should (e6s6l5), have to (e6s5l5); imperatives і частотність в інструкції (Take one tablet twice a day) — читання для орієнтування (с. 28: інформація на упаковках лікарських засобів); indefinite pronouns something / anything / nothing (B1: Pronouns — indefinite; відкладене з 6 кл.) — на вибір автора.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** ought to і should у пораді — обидва правильні → обидва в ключі або контекст; I’ve got a cold / I have a cold — обидва BrE. chemist’s (BrE, CD); tablet — CD B1; sore throat — є в CD. **surgery у CD — B2 «операція»**: значення «приймальня лікаря» (BrE) не вводити без словника. Етикетка ліків — вигадана, без назв справжніх препаратів і без порад щодо дозування; в уроці — «ask a doctor or a chemist». Функція «просити про допомогу» (с. 32). Не повторювати e4s5l4–l5 («What’s the matter?», «At the doctor’s»): тут медичні заклади, симптоми, ліки, інструкція. `requires`: e4s5l4, e4s5l5, e6s6l5, e6s5l5, e6s7l5; після появи e7s1 — уроки just / already (recent past: I’ve hurt my knee) і for / since (оркестратор). Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s3.js`: `SLID.section("eng", { id: "e7s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e7s3, 2026-11-25. Файл `content/eng/g7-e7s3.js`, 7 уроків (6 + boss), усі `draft`. `validate --section e7s3` — 0 помилок, 0 попереджень; `stats --subject eng` — e7s3l1–l7 без прапорців (11 екр., частка завдань 0.55–0.64, boss 0.88; макс. текст ≤ 53 слів; речення 5–6.4 сл.; longWordShare ≤ 0.093). Build не запускав; validate і stats перезаписали спільні reports/validate.json і reports/style-eng.md.

**Уроки:** e7s3l1 «A hospital, a chemist’s, a dentist’s: where to go» (заклади, прохання про допомогу, 103/999, appointment); e7s3l2 «I’ve got a sore throat: illnesses and symptoms» (flu, cough, earache, backache, feel sick, symptom + something / anything / nothing); e7s3l3 «I’ve hurt my knee! What has happened?» (Present Perfect — новина, just; hurt / cut / fallen / broken / burnt-burned; knee, ankle); e7s3l4 «When did it start? The Past Simple or the Present Perfect» (since / for, When did…? vs How long have you had…?); e7s3l5 «You ought to stay in bed: advice» (ought to / ought not to = should; порада vs правило: must, have to, don’t have to); e7s3l6 «Take one tablet twice a day: reading medicine labels» (once / twice / three times a day, every four hours, after meals, імперативи Do not…, безпека); e7s3l7 boss «A health page for new pupils» (7 завдань, pre l1–l6). Назви l1–l6 = plan.js.
**Типи:** choice, multi, gaps, word, pick, stress, build, match, sort. Без `dialog` (D-056), без звуку; діалоги — репліки в body і gaps.
**requires:** e4s5l4, e4s5l5, e6s6l5, e6s5l5, e6s7l5. e7s1 (just / already, for / since) ще не існує — оркестратору додати після появи (П10 curate-eng-plan-g7-9). Тому just і since / for подано в l3 і l4 самодостатньо (коротке info перед завданнями).

**Джерела форм (CD = https://dictionary.cambridge.org/dictionary/english/<слово>):**
- Рівні CD: hospital A1; ambulance, appointment (ARRANGEMENT), dentist, headache, temperature, twice, bandage A2; chemist (MEDICINE) A2 «UK (UK also chemist’s); (US drugstore)»; pharmacy, cough, flu, earache, backache, knee, ankle, tablet (MEDICINE), label, prescription, medicine (SUBSTANCE A2), emergency B1; symptom, dizzy, sneeze, wrist, injury B2 (symptom — з опорою «signs that you are ill»; dizzy, sneeze, wrist, injury не вжито).
- chemist’s / chemist / pharmacy — у ключ `word` l1 усі три (CD chemist, pharmacy).
- «in hospital», «go to hospital» — CD hospital (приклади «in hospital», «go into hospital»); артикль не оцінюється.
- flu — CD «(also the flu)»: артикль із flu не оцінюється. earache — [C or U] (CD), тож «a bad earache» граматичне: у gaps дистрактор відсічено змістом.
- feel sick — CD sick (VOMIT) A2 «feeling ill as if you are going to vomit» → пояснення «my stomach feels bad».
- have a temperature — CD temperature «run/have a temperature».
- Форми: hurt – hurt – hurt (CD hurt «past tense and past participle hurt»); fall – fell – fallen (CD fall); burn — burnt or burned (CD burn, обидві); break – broke – broken, cut – cut – cut (CD). fall off a bike — CD fall (HAVE AN ACCIDENT, «falling off his bike»).
- ought to — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/ought-to: заперечення ought not to / oughtn’t to, «Not: We don’t ought to…»; питання з ought «not very common… very formal», usually should; ought to і should «similar in meaning». Тому: ought to і should не протиставляються (жодного завдання, де вони — конкуренти); оцінюється лише наявність to (ought to / should), don’t ought to — хибний; питання — лише Should I…? (назва intro l5 — «What should Andrii do?»).
- something / anything — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/something-somebody-someone-somewhere («affirmative clauses and in questions expecting a particular answer»), https://dictionary.cambridge.org/grammar/british-grammar/negative-clauses-with-any-anybody-anyone-anything-anywhere. something / anything у питаннях не оцінюю (обидва можливі).
- Present Perfect + since — CD Grammar present-perfect-simple («I haven’t seen her since January 1995. Not: I didn’t see her since…»).
- Наголос (CD UK): hospital, ambulance, dentist, chemist, symptom, earache, backache, tablet, label — 1-й склад; appointment — 2-й. stress l1: +hos|pi|tal, +am|bu|lance, ap|+point|ment.

**Факти (Україна в розділі — l1, boss):**
- Ukraine: 103 — ambulance (також 101, 102, 104; єдиний 112 — альтернатива): https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers («Ukraine 102 103 101… General emergencies – 112»); МВС https://mvs.gov.ua/en/news/bezpecna-ua-iak-praciuje-sistema-ekstrenoyi-dopomogi-naselenniu-za-jedinim-nomerom-112 (112 «alternative to the hotlines 101, 102, 103, 104»); https://travel.gc.ca/assistance/embassies-consulates/ukraine. 112 в уроці не згадано (не робить 103 хибним; варіантом 112 не дано).
- UK: 999 (або 112) — ambulance: en.wikipedia (та сама сторінка, «United Kingdom 999 or 112»); London Ambulance Service https://www.londonambulance.nhs.uk/our-services/calling-999/ (через WebSearch; nhs.uk з контейнера не відкривається).
- Shevchenko Park (Kyiv) — місце дії l1 (en.wikipedia Taras Shevchenko Park (Kyiv)); факт не оцінюється.

**Медична безпека:** порад щодо ліків дітям немає. Етикетки l6 і boss — вигадані («not a real medicine»), без назв препаратів; дозування лише для «Adults», діти — «ask a doctor». Екран l6 «Labels tell you what to do»: «Always ask a doctor or a chemist. Children take medicine only with an adult.»; завдання l6 «Dmytro… What should he do?» — Ask Mum or Dad first. Поради в l5 — лише побутові (rest, drink water, stay in bed, see a doctor with a high temperature).

**Опори D-019 (неочевидні):** l1 word «103» ← екран 5 «Can you help me, please?»; l1 final «appointment» ← той самий екран; l2 final «cough» ← на тому ж екрані «I still cough a lot»; l3 final «just» ← info l3 екран 3; l4 word «since» ← екран 3 + «started on Saturday» в умові; l6 match «every four hours» ← info l6 екран 3; l6 final «has had … since Sunday» ← l4; boss Task 7 «three» ← l6 екран 3 («three times a day»).
**Друга правильна відповідь — перевірено:** What’s happened? / What happened? — не оцінюється; just + Past Simple (AmE) — не дистрактор (дистрактори: ever, cutted, broke); I’ve got / I have a cold — обидва названо правильними, не оцінюється; should / ought to — не конкурують; «I feel very well» прибрано (було двозначно).

**Спірне:**
- Етикетка з дозуванням для дорослих (вигадана) — пропоную TQ-154 (рядок в inbox).
- ought not to vs oughtn’t to: учу лише ought not to (CD: oughtn’t to — скорочення); у `word` l5 ключ «ought» — скорочення не виникає.
- Герої (нові факти): Oksana — flu, Dr Kovalenko; Dmytro (9) — backache і sore throat після футболу; Halyna — застуда; Taras упав з велосипеда в парку (Lviv), Ostap подзвонив татові; Tom (11) зламав руку на skatepark, у лікарні з мамою; Mariia порізала палець (Kharkiv); Andrii — кашель з понеділка, Dr Bondar; Sofiia — застуда; Zoriana — earache; Bohdan — sore throat, застуда; Kyrylo впав зі сходів (boss); дідусь Emma — кашель, окуляри. NOTE — в inbox.

verifier-e7s3, 2026-11-25: verified, звіт reports/verify/write-eng-g7-e7s3.md. Правки: requires + e7s1l2, e7s1l4; l3/l4 — повторення just і since/for; етикетки без «under 12». Питання вчителю — TQ-137.
