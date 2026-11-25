---
claimed_from: todo
claimed_at: 2026-11-19T13:27:09.673Z
id: write-eng-g4-e4s1
type: write-section
subject: eng
grade: 4
section: e4s1
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e4s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Me, my family and friends: where we live» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Я, моя родина і друзі: місце проживання, населені пункти — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): to be, have got (повторення 3 кл.); a/an with jobs. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: немає — цей розділ стане еталоном після верифікації (style/eng.md «Еталони»).

## Результат
- `content/eng/g4-e4s1.js`: `SLID.section("eng", { id: "e4s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s1, 2026-11-19. Файл `content/eng/g4-e4s1.js`, зображень немає (`img/eng/e4s1/` не створено). Статус уроків — draft.

### Уроки (6 + фінал; теми — рядки `plan` з content/eng/plan.js)
| id | title | екрани (типи) | граматика / функція |
|---|---|---|---|
| e4s1l1 | Hello again! | 9: intro, choice hyp, info, sort, choice, stress, info, gaps, gaps (Final) | привітання й прощання за часом доби; to be (am / is / are, скорочення) |
| e4s1l2 | My family: who is who? | 9: intro, choice, info, choice, word, info, gaps, choice, gaps (Final) | члени родини; ’s; have got / has got; Yes, I have. / No, I haven’t. |
| e4s1l3 | Jobs: a doctor, an engineer | 10: intro, choice hyp, info, choice, info, gaps, stress, word, pick (Find the mistake), gaps (Final) | 8 професій; a / an with jobs (ТОП с. 62–63) |
| e4s1l4 | Cities, towns and villages | 8: intro, choice hyp, info, choice, multi, gaps, word, choice (Final, читання) | city / town / village, near |
| e4s1l5 | Where do you live? | 9: intro, choice hyp, info, choice, info, gaps, choice, word, order (Final, діалог) | адреса англійською; live / lives, Where do / does…? |
| e4s1l6 | About me: a form | 9: intro, choice hyp, info, choice, info, pick, stress, word (keepCase), gaps (Final) | бланк: first name, surname, age, nationality, address (A1, ТОП с. 54); великі літери |
| e4s1l7 | Welcome to the club! (boss, `e4s1boss`) | 7: intro + 6 завдань (gaps, word, gaps, choice, word, gaps), `pre` = l1…l6 по черзі | усі теми розділу |

Герої власні: Oksana Melnyk (село Zelena Dolyna біля Полтави — вигадане), Andrii Tkachenko (Київ), Emma і Tom (містечко в Англії, без назви), Mariia (Харків), Taras Koval (Львів), Ms Kravets (учителька). Україна — у кожному уроці. Фактів про країни немає, крім «Kyiv, Lviv, London — cities» і «Poltava is a city» (загальновідоме, без чисел і дат).

### Опора для завдань (D-019)
Кожне оцінюване завдання спирається на `info` того ж уроку (екран 3 або 5–7) чи на текст на самому екрані. Неочевидні місця:
- l1 екр. 9 (Final, «4 pm» → Good afternoon) — межі в info екр. 3: «from 12 to 6 pm», «after 6 pm» (за CD afternoon: «starts at about twelve o’clock… ends at about six o’clock»).
- l2 екр. 9 і boss Task 2 — cousin = «your aunt’s or uncle’s child» (info екр. 3); «a little boy / girl» — зрозуміле слово, не оцінюється.
- l3 екр. 7, l1 екр. 6, l6 екр. 7 (`stress`) — наголошені склади підкреслено `<u>` в info того ж уроку.
- l4 екр. 8 (Final) — «there» = Poltava, «near» пояснено в info екр. 3 («not far from»).
- boss Task 6 — Koval як прізвище: «Mr Koval» (l3), Taras — ім'я (intro boss).
Здогадки `hyp: true` — l1 екр. 2, l3 екр. 2, l4 екр. 2, l5 екр. 2, l6 екр. 2 (наступний info дає відповідь).

### Друга правильна відповідь — перевірено двічі
- `word`: aunt (+ auntie, aunty — CD auntie «informal (also aunty)»), pilot, village, address, Ukrainian (`keepCase`), cousin, lives — без кінцевого знака в ключі; рушій (`wordVerdict`, перевірено node) приймає «Ukrainian.», «Aunt»; «ukrainian» → «Almost: check the spelling.» (fbBad підказує про велику літеру).
- have got / have: у гепах немає пари «have» ↔ «’ve got» — лише узгодження has / have (OALD have_1: обидві форми можливі, BrE — have got).
- Short answer: «No, I haven’t got.» — хибний (OALD have_1: «Have you got…? Yes, I have./No, I haven’t.»); «No, I haven’t got one» у варіантах немає.
- Привітання: «Good evening» — лише привітання, «Good night» — лише прощання (CD good night: «said when people leave each other in the evening or before going to bed»).
- `order` l5: порядок однозначний (питання → відповідь, «too» після «Nice to meet you!»).
- AmE-слів у ключах і пастках немає; mum (CD «UK informal (US mom)») — лише в тексті, не в `word`.

### Джерела форм (curl, 2026-11-19)
- CD: https://dictionary.cambridge.org/dictionary/english/mum («UK informal (US mom)»), …/grandad, …/grandma, …/surname («mainly UK»), …/postcode, …/nationality (/ˌnæʃ.ənˈæl.ə.ti/), …/ukrainian (/juːˈkreɪ.ni.ən/), …/engineer (/ˌen.dʒɪˈnɪər/), …/doctor, …/artist, …/farmer, …/teacher, …/pilot, …/driver, …/cook, …/village (визначення), …/town, …/city, …/address (/əˈdres/ UK), …/cousin, …/aunt, …/uncle, …/auntie, …/hello (/heˈləʊ/), …/goodbye (/ɡʊdˈbaɪ/), …/afternoon (/ˌɑːf.təˈnuːn/; межі 12–6), …/evening, …/good-night, …/good-morning, …/first-name, …/english, …/pen-pal («UK pen friend»), …/region, …/near.
- CD Grammar «A/an and the» — «We use an before a vowel sound»; «Jobs and professions… we use a: She’s a gardener» — https://dictionary.cambridge.org/grammar/british-grammar/a-an-and-the
- CD Grammar «Have got and have» — https://dictionary.cambridge.org/grammar/british-grammar/have-got-and-have
- OALD have_1 (British/American note: «Have got is the usual verb in British English… Have you got…? Yes, I have./No, I haven't.») — https://www.oxfordlearnersdictionaries.com/definition/english/have_1 ; OALD meet_1 («nice to meet you») — https://www.oxfordlearnersdictionaries.com/definition/english/meet_1 ; OALD live_1 (live at / in) — https://www.oxfordlearnersdictionaries.com/definition/english/live_1
- Поділ на склади для `stress` і `<u>` — за переносом Merriam-Webster (hel·lo, good·bye, af·ter·noon, doc·tor, en·gi·neer, art·ist, farm·er, teach·er, pi·lot, sur·name, na·tion·al·i·ty, Ukrai·ni·an → U|krai|ni|an за чотирма складами CD), наголошений склад — за CD (BrE): https://www.merriam-webster.com/dictionary/hello тощо (MW — лише орфографічний перенос, не норма вимови).

### Перевірки
- `node tools/validate.mjs --section e4s1` — 0 помилок, 1 попередження: l6 longWordShare = 0.165 > 0.12. Не підганяв: частку дають слова теми, яких вимагає програма (бланк з національністю, ТОП с. 54) — Ukrainian ×13, nationality ×9, capital ×7 — і прізвища (Tkachenko). Евристика складів тут не помиляється (це справді 3+ склади); без цих слів частка ≈ 0.05. Межу 0.12 варто переглянути при калібруванні (style-eng-g4-5): у темі «nationality / Ukrainian» вона недосяжна. «z=2.1 нетипово для сім'ї» — сім'я поки з 7 уроків цього ж розділу.
- `node tools/stats.mjs --subject eng` — решта метрик у межах профілю «4»: екранів 7–10, частка завдань 0.56–0.86, слів/екран 22–29, макс. текст 30–49 (≤ 60), слів/речення 3.7–5.1, типів 3–5.
- Повний `node tools/validate.mjs --quiet` — 0 помилок.
- Плейтест у браузері не запускав (Python playwright немає; build не запускав — паралельна робота).

### Спірне
1. **Таблиці → списки.** style/eng.md радить правило «таблицею», але CSS для `<table>` у `.screen` немає, а validate/stats не бачать межі рядка таблиці (`plain()` ділить лише `<li>`) — 5 хибних «дуже довге речення». Тому правила — списками `<ul>` з «→» і « – », як у еталоні ukr. Пропозиція ENGINE нижче.
2. **Адреса для України англійською:** «Name / 7 Sadova Street / Zelena Dolyna / Poltava region / Ukraine» — британський порядок (номер перед вулицею), без поштового індексу. Чи так пишуть адресу в Україну для іноземної пошти (Укрпошта радить ще індекс) — вирішив не вчити індекс у 4 кл.; верифікатору — перевірити, чи формат прийнятний.
3. **«The sounds a, e, i, o, u are vowels»** — спрощення (вирізняємо за звуком, CD Grammar). Слів-винятків (hour, university) у розділі немає.
4. **English як національність** Емми (а не British): info l6 «Emma is from England. She’s English.», l6 екр. 4 «What is her nationality?» → English (CD english: «the people of England»). Офіційно громадянство — British; для 4 кл. пара England → English простіша. Верифікатору — оцінити.
5. **Taras’s** (присвійний від імені на -s) — правильна BrE-форма; може здивувати дитину, але не оцінюється.
6. Літери-приклади a, e, i, o, u та «Hello:», «Goodbye:» мають кінцеві пункти без крапки (переліки); stats рахує їх межами речень через `<li>`.

## Верифікація (verifier-e4s1, 2026-11-19)
Вердикт: **verified**, усі 7 уроків. Звіт — reports/verify/e4s1.md.
- Усі завдання розв'язав сам: ключі правильні, другої правильної відповіді немає. Опора D-019 є в кожного оцінюваного завдання. Ключі `word` без кінцевого знака; `wordVerdict` перевірено в node.
- Факти: міста — en.wikipedia + ЕСУ. Норми й наголос — CD + OALD (curl). Збігів з опублікованими текстами немає: 8 фрагментів перевірено WebSearch.
- Правки верифікатора: «Say the underlined part strong» → «The underlined part is strong» (l1, l3, l6; *strong* не прислівник, OALD); l2 info без *whose* (B1); l4 #4 Mariia → Yurii (у l5–l6 Mariia живе в Харкові, а не в селі); шапка файлу (to be й have got в інвентарі ТОП немає); статуси → verified, `meta.factcheck`.
- Спірне автора: 1 списки — прийнято; 2 адреса — прийнятне спрощення, питання вчителю TQ-127; 3 «sounds a, e, i, o, u» — прийнято для 4 кл.; 4 English — правильно (OALD English_2); 5 Taras’s — правильно (CD Grammar).
- `uk` не потрібне. Плейтест — після build оркестратора (окремо подивитися l3 #5).
