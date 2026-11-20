---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.663Z
id: write-eng-g6-e6s1
type: write-section
subject: eng
grade: 6
section: e6s1
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Зовнішність і характер» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: зовнішність; риси характеру — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): look + adjective (linking verb: She looks happy); What does she look like? vs What is she like? — розширення e5s1l6; noun phrases with adjectives (long dark hair — порядок «довжина/розмір → колір»; adjective order у програмі немає — наш мінімум); with / without for possession (a girl with glasses); degree adverbs very, quite, really; be like + noun (She’s like her dad).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** CD Grammar «Like»: be like — характер, look like — зовнішність (https://dictionary.cambridge.org/grammar/british-grammar/like); але «What is she like?» CD допускає й про зовнішність — у `choice` не робити опис зовнішності «хибною» відповіддю на What is she like? без контексту. quite у BrE з градуйованим прикметником = «не дуже, помірно» (CD Grammar «Quite», https://dictionary.cambridge.org/grammar/british-grammar/quite) — не подавати як синонім very. shy, honest — B1 (CD): вводити з прикладом. Зовнішність героїв ще ніде не зафіксована — ти задаєш канон: усе в inbox NOTE (герої). Без оцінних слів про вагу й тіло (fat тощо). `requires`: e5s1l6. Чого немає: too (→ e6s2). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s1.js`: `SLID.section("eng", { id: "e6s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e6s1, 2026-11-20. Файл content/eng/g6-e6s1.js (draft), img/eng/e6s1/*.svg (6 власних малюнків: oksana, andrii, mariia, grandad, emma, hair). 7 уроків:
- l1 What does he look like? Tall or short? — What does he look like? (≠ What does he like?), tall/short, hair, eyes.
- l2 Long dark hair and big blue eyes — порядок «довжина/розмір → колір» (лише мінімум), straight/curly, hair без -s.
- l3 A girl with glasses, a man with a beard — with/without (= has got / hasn’t got), glasses без a; match з картинками.
- l4 What is she like? Kind, friendly, shy — kind, polite, clever, lazy, shy, honest; appearance vs character (sort).
- l5 He looks happy! Very, quite, really — look + adjective (не like, не -ly), angry/surprised/worried/bored, quite = «a little, but not very».
- l6 She looks like her mum, but she’s like her dad — look like + person (зовнішність), be like + person (часто характер).
- l7 boss (Task 1–6, `pre` на l1…l6). `requires: ["e5s1l6"]`.

Прогони: `node tools/validate.mjs --section e6s1` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — e6s1 без прапорців (після правок: l3 коротші речення, l5 + word «bored»). Кожен `build` перебрано через SLID_LANG.check (усі впорядковані підмножини плиток з `extra`) — рушій приймає лише ключ; ключі `word` прогнано через wordVerdict (без кінцевого знака; «Short.» → ok).
Авторське право: WebSearch трьох найдовших фрагментів (≥ 12 слів: «She looks like our mum: she’s got curly dark hair and green eyes», «I look like my mum: we’ve both got long dark hair and brown eyes», «I’m like my grandma: we both love books, and we’re both quiet») — збігів немає.

**Джерела (curl у сесії):**
- CD Grammar «Like» https://dictionary.cambridge.org/grammar/british-grammar/like — «We use be like to talk about someone’s character… look like to talk about someone’s appearance»; там само «be like to ask for a description… (their appearance, their character…)» і «He’s very like me but taller» у відповідь на look like. CD like (prep., A2) https://dictionary.cambridge.org/dictionary/english/like — «She's very much like her mother (= similar in appearance or character)». Отже: be like + person = і зовнішність, і характер → у вправах «is like» ніде не хибний для зовнішності; хибним роблю лише «looks like» для схожості характеру (l6 #4, #5, boss T6) і опис характеру на «What does she look like?» (l4 #8, boss T1).
- CD Grammar «Quite» https://dictionary.cambridge.org/grammar/british-grammar/quite — з градуйованим прикметником «a little, moderately but not very»; CD quite «A2 a little or a lot but not completely». l5 #8: «a little tired, but not very» → quite (very/really — хибні).
- CD look «A2 to appear or seem: You look well!» https://dictionary.cambridge.org/dictionary/english/look; OALD look_1 «linking verb … + adj.» https://www.oxfordlearnersdictionaries.com/definition/english/look_1.
- CD Grammar «Adjectives: order» https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order — size → … shape → … colour (long straight red hair, short curly dark hair у текстах відповідає порядку; оцінюю лише «довжина/розмір → колір»).
- CD Grammar «With» https://dictionary.cambridge.org/grammar/british-grammar/with — «We use with to mean ‘having’ or ‘possessing’».
- Рівні CD (https://dictionary.cambridge.org/dictionary/english/<слово>): A1 — tall, short, beard, glasses, clever, funny, bored, excited, grey, dark (колір), very, really («very»), tired; A2 — fair (hair), blond(e), straight, kind, friendly, polite, lazy, angry, surprised, worried, quite, look (seem); B1 — curly (OALD a2), shy, honest (OALD b1), quiet (людина), appearance, character, truth (OALD b1). B1-слова введено з картинкою чи прикладом до оцінювання (curly — hair.svg; shy, honest — info l4 #3; appearance, character — info l4 #6).
- Наголос CD (UK): polite /pəˈlaɪt/, honest /ˈɒn.ɪst/, clever /ˈklev.ər/, lazy /ˈleɪ.zi/, angry /ˈæŋ.ɡri/, surprised /səˈpraɪzd/, worried /ˈwʌr.id/, curly /ˈkɜː.li/.
- Фактів про країни немає; Україна — Lviv, Kyiv, Kharkiv, Chernihiv, Zelena Dolyna (герої).

**Спірне / для верифікатора:**
1. l6 #7 word «Zlata is ___ her dad.» = like: граматично можливе й «with», але умова («quiet and honest… too. Say it with one word.») вимагає схожості. Якщо верифікатор вважає ризиком — замінити на choice.
2. l1 #7 word «Taras isn’t tall. He’s ___» — у ключі short, small, little (усі A1 про зріст людини).
3. l5 #9 word «Tom looks really ___» (nothing to do) — лише bored; «unhappy»/«sad» не беру до ключа (опора — info l5 #4 «bored → There’s nothing to do»).
4. l2 #8 word — blue / light blue.
5. Власні SVG (img/eng/e6s1) — credits у формі e5s4 («own work, no third-party material») до рішення людини (DECISION-NEEDED writer-e5s4). alt у match описує картинку — диктор так само видає пару, як у e5s5.
6. l5 «Very, quite, really»: really = very (CD really A1 «very or very much»); між very і really не розрізняю.
7. Канон зовнішності героїв задано тут — рядок NOTE (герої) в inbox (текстом у відповіді оркестратору). Узгоджено з e4s7 (Emma 145 см найвища, Taras 135 см — нижчий): Emma tall, Taras not tall.

## Нотатки верифікатора
verifier-e6s1, 2026-11-20. Звіт — reports/verify/e6s1.md. **Вердикт: verified (усі 7 уроків).** Зміст не правив: кожне оцінюване завдання розв'язано наново; `build` перебрано повністю через SLID_LANG.check (лише ключі), `word` — через wordVerdict (кінцевих знаків у ключах немає). Другої правильної відповіді немає: be like ніде не хибне для зовнішності, хибне лише looks like для характеру (CD Grammar «Like»); quite відсічено умовою «a little, but not very» (CD Grammar «Quite»). Опора (D-019) є для кожного завдання. Шість SVG переглянуто в Chromium headless, і кожен однозначний. Канон героїв перевірено проти 4–6 кл., суперечностей немає. 12 запитів WebSearch з лапками — збігів немає. Спірні 1–7 автора прийнято (звіт §5). validate — 0/0; stats — без прапорців; playtest — лише в CI (немає python playwright). Людині: ліцензія власних SVG (DECISION-NEEDED writer-e5s4), не блокує.
