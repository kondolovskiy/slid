# Верифікація e7s3 «Health and medicine» (англ., 7 кл.)

Верифікатор: verifier-e7s3, 2026-11-25. Файл: content/eng/g7-e7s3.js. Скіл content-verify, розділ «Англійська».
Підсумок: **усі 7 уроків → `verified`**. 15 правок, 0 відкритих ❌/⚠️. Питання вчителю: TQ-137 (етикетка з дозою для дорослих).

## 1. Факти
| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Україна: 103 — швидка (l1 info, word, final; boss Task 1) | https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers (Ukraine: Ambulance «103»); https://uk.wikipedia.org/wiki/Екстрена_медична_допомога («загальнодержавним телефонним номером виклику є 103 (безкоштовно)»); WebSearch «Ukraine ambulance number 103»: FCDO https://www.gov.uk/foreign-travel-advice/ukraine/health («call 103 and ask for an ambulance»), МОЗ https://moz.gov.ua/uk/koli-varto-telefonuvati-na-nomer-103- (WebFetch/curl до gov.uk і moz.gov.ua з контейнера не резолвляться — лише результат пошуку) | ✅ |
| UK: 999 — швидка (l1 info, fbText) | https://en.wikipedia.org/wiki/999_(emergency_telephone_number) («official emergency services number for the United Kingdom», ambulance — одна з 4 служб); https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers («999 or 112»); WebSearch «NHS when to call 999»: https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/, https://www.londonambulance.nhs.uk/our-services/calling-999/ | ✅ |
| Flu — «like a very bad cold, often with a temperature» (l2) | CD https://dictionary.cambridge.org/dictionary/english/flu («an infectious illness like a very bad cold that also causes a fever»); https://en.wikipedia.org/wiki/Influenza («similar to those of a cold, although usually more severe»; fever — типовий симптом) | ✅ |
| Поради l5 (rest, drink lots of water, stay at home, high temperature → see a doctor) | WebSearch NHS flu: https://www.nhs.uk/conditions/flu/ («rest and sleep, keep warm», «drink plenty of water»; високa температура + погіршення → GP) | ✅ безпечно |
| Ліки: «Children take medicine only with an adult», «Always ask a doctor or a chemist» (l6) | WebSearch NHS flu treatment: https://www.nhs.uk/conditions/flu/treatment/ («For children's medicine doses, check with a pharmacist»; «A pharmacist can give treatment advice») | ✅ |
| Shevchenko Park (Kyiv) — місце дії, не оцінюється | — | — |

## 2. Форми й норма (CD через curl у цій сесії)
| Форма | Джерело | Вердикт |
|---|---|---|
| chemist / chemist’s / pharmacy | https://dictionary.cambridge.org/dictionary/english/chemist «A2 UK (UK also chemist's); (US drugstore)»; pharmacy — окрема стаття CD | ✅ ключ `word` l1 — усі три |
| go to hospital, in hospital (BrE) | CD hospital: «I've got to go to hospital», «She spent a week in hospital» | ✅ |
| hospital /ˈhɒs.pɪ.təl/, ambulance /ˈæm.bjə.ləns/, appointment /əˈpɔɪnt.mənt/ | CD hospital, ambulance, appointment | ✅ `stress` l1 і `<u>` |
| make an appointment | CD appointment «make an appointment» | ✅ |
| earache [C or U]; backache, toothache, sore throat | CD earache «noun [ C or U ]»; статті backache, toothache, sore throat є | ✅ |
| feel sick = нудить | CD sick (VOMIT) «A2 … feeling ill as if you are going to vomit» | ✅ «my stomach feels bad» прийнятне спрощення |
| burn — burnt or burned | CD burn «burnt or burned» | ✅ |
| ought not to / oughtn’t to; не don’t ought to | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/ought-to («adding ‘not’ after ought (ought not to)… contracted to oughtn’t to. We don’t use don’t, doesn’t, didn’t with ought to») | ✅ |
| tablet (MEDICINE) | CD tablet «B1 a small, solid piece of medicine» | ✅ |
| skatepark | OALD https://www.oxfordlearnersdictionaries.com/definition/english/skatepark (headword skatepark); CD — «skate park» | ✅ (обидва написання словникові; не оцінюється) |

BrE: Mum, Grandad, at the doctor’s, chemist’s, in hospital, -ise не трапляється; AmE-правопису й лексики немає. IPA немає, «Listen» немає, літер A/B/C в opts немає. Ключі `word` без кінцевих `.!?`.

## 3. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| “I can't come to school today. I've got flu. I've got a temperature and a bad cough” | збігів немає |
| “You ought to stay in bed and rest. And you ought not to play football in the rain” | збігів немає |
| “Adults: take one tablet twice a day, after meals, with a glass of water” | точного збігу немає (типова формула етикеток) |
| “I've hurt my knee, but I haven't broken anything” + “fallen off my bike” | збігів немає |

## 4. Завдання → опора (D-019) і власний розв’язок
Розв’язав кожне сам до звірки з `correct`; усі ключі збіглися. Друга правильна відповідь — не знайдено (нижче — неочевидні).

| Урок · завдання | Опора | Вердикт |
|---|---|---|
| l1 hyp (dentist’s) | hyp | ✅ |
| l1 match | екран 3 «Where to go» | ✅ (sore throat + temperature → doctor’s, не chemist’s: chemist’s — «a shop where you buy medicine») |
| l1 gaps can/do, chemist’s | екран 5 | ✅ |
| l1 choice ambulance | екран 3, 5 | ✅ |
| l1 word 103 | екран 5 | ✅ |
| l1 stress | `<u>` на екранах 3, 5 | ✅ |
| l1 word chemist’s | екран 3; ключ chemist’s/chemist/pharmacy | ✅ |
| l1 final | екрани 3, 5; Kyiv — intro | ✅ |
| l2 match, multi, gaps backache/sore throat | екран 3 (+ toothache з l1) | ✅ |
| l2 gaps any/some, pick nothing, word nothing | екран «something, anything, nothing» | ✅ («I don’t want something» — не норма в цьому контексті) |
| l2 final | екрани 3, 7 + «I still cough» | ✅ |
| l3 «Remember?» just | e7s1l2 (requires) — після правки | ✅ |
| l3 gaps hurt/broken/cut, choice, build, pick, word fallen | екрани 3–4, 6 | ✅ (у choice Past Simple «I cut my finger!» варіантом не дано) |
| l3 final just/hurt/broken/has | екрани 3–4; just — e7s1l2 | ✅ |
| l4 «Remember?» since | e7s1l4 (requires) — після правки | ✅ |
| l4 gaps since/for, choice, gaps PS/PP, build, word since, final | екрани 3, 5; e6s7l5 | ✅ (match: кожна відповідь підходить лише до одного питання) |
| l5 gaps, choice, sort, build, pick to, word ought | екрани 3, 6 | ✅ (should і ought to не конкурують у жодному пропуску) |
| l5 final shouldn’t/should, have to/ought | екрани 3, 6; «ought see» хибне за екраном 3 | ✅ |
| l6 match | екран 3 (every four hours → 8, 12, 16, 20 — міркування) | ✅ |
| l6 choice, multi (етикетка) | сам текст етикетки | ✅ |
| l6 gaps imperatives, choice Dmytro, word twice, final | екрани 3, 5; has had since — l4 | ✅ |
| boss T1–T7 | l1–l6 | ✅ (T7: 1 × 3 = 3, міркування) |

## 5. Правки (зроблено, мінімальні)
1. `requires` + `e7s1l2`, `e7s1l4` (звірено за content/eng/g7-e7s1.js: l2 «I’ve just washed the dishes: just and already», l4 «We’ve lived here for ten years: for and since»); коментар-шапка оновлено.
2. l3 екран 2: hyp «Guess!» → оцінюване повторення «Remember?» з `hint` і `fbBad` (опора — e7s1l2).
3. l3 екран 3: just — з посиланням «remember “I’ve just washed the dishes”?».
4. l4 екран 2: hyp → «Remember?» з `hint` і `fbBad` (опора — e7s1l4).
5. l4 екран 3: «since and for» → «Remember: since and for», рядок-посилання на урок e7s1l4.
6–10. Безпека етикеток (l6 choice і multi, boss T7): «Children under 12: ask a doctor» → «Children: ask an adult, a doctor or a chemist». Причина: учень 7 кл. (12–13 р.) міг прочитати «under 12» як «мені вже можна, як дорослому». Відповідно: варіант multi «…without asking an adult», fbBad і fbText multi, у T7 дистрактор «twelve» → «two», з fbText прибрано «12 is the age for children».
11–15. `status: "verified"` у 7 уроках, `meta.factcheck`, рядок «Статус» у шапці.

## 6. Педагогіка, рівень, безпека
- Рівень мови 7 кл.: речення 5–6.5 слова (stats), лексика A2–B1; B2-слів (symptom з поясненням) — одне, з опорою. Прапорців stats для e7s3 немає.
- Порядок «проблема → теорія → завдання» дотримано; l3–l4 тепер повторюють e7s1, а нове в них — новина з травмами (hurt/cut/fall/break) і протиставлення When? / How long?.
- Безпека: дози для дітей ніде немає; в l5 — «always tell your parents when you feel ill», хибний варіант «You ought not to tell your parents»; l6 — «Medicine isn’t sweets», «Children take medicine only with an adult», завдання «Ask Mum or Dad first». Доза для дорослих на вигаданій етикетці лишається (план і програма: «Take one tablet twice a day», МП-ІМ с. 28) — ризик низький, але це рішення вчителя: **TQ-137** у docs/teacher-questions.md (замінює пропозицію автора TQ-154 з inbox).
- Діалоги без `type: "dialog"` — D-056, не знахідка.

## 7. Прогони
- `node tools/validate.mjs --section e7s3` — 0 помилок, 0 попереджень (після правок).
- `node tools/stats.mjs --subject eng` — e7s3l1–l7 без прапорців.
- `node tools/euphony.mjs --subject eng --section e7s3` — зауважень немає.
- `python3 tools/playtest.py --section e7s3` — не запущено: у контейнері немає Python-модуля playwright → лише CI (job browser).

## Вердикт по уроках
e7s3l1–e7s3l7 — `verified`. Build не запускав (оркестратор).
