---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.228Z
id: write-eng-g4-e4s3
type: write-section
subject: eng
grade: 4
section: e4s3
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e4s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Free time: sport and heroes» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Відпочинок і дозвілля: спорт, улюблені дитячі герої — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): adverbs of frequency; but/and/or. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g4):** улюблені дитячі герої — описувати власними словами й власних героїв або загальновідомих персонажів суспільного надбання; не брати персонажів підручників CUP/OUP і захищені малюнки.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s3.js`: `SLID.section("eng", { id: "e4s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s3, 2026-11-19. Файл `content/eng/g4-e4s3.js`, 7 уроків (6 + фінал), усі `draft`, `meta.factcheck: "self"`. Будова — за еталоном e4s1 (intro → hyp → info списком `<ul>` з «→» → завдання → Final; boss — Task 1–6 з `pre`). `requires: ["e4s1l5"]` — у l3 (he/she + -s: plays, goes, does) прямо спираюся на «I live → she lives» з e4s1l5 (info l3 це згадує). Інших зв'язків plan-eng-g4 §6 для e4s3 не дає. `uk` не додавав. Зображень немає (img/eng/e4s3 не створено).

**Уроки:**
| id | title | типи завдань |
|---|---|---|
| e4s3l1 | Sports: play, go and do | choice (hyp), sort, choice, gaps, stress, pick (Find the mistake), word, gaps (Final) |
| e4s3l2 | How often? Always, usually, sometimes, never | choice (hyp), choice, gaps, choice, build, stress, gaps (Final) |
| e4s3l3 | My week: on Mondays, at the weekend | choice (hyp), gaps, choice, gaps, word, stress, choice (Final, читання) |
| e4s3l4 | And, but, or: what I like | choice (hyp), choice, gaps, sort, build, word, gaps (Final) |
| e4s3l5 | Favourite heroes from books and films | choice (hyp), choice, multi, gaps, word, stress, gaps (Final) |
| e4s3l6 | A post about my hobby | читання 3 екрани (choice, multi, choice — «Reading: Mariia’s post, part N of 3»; ≈ 110 слів, ТОП с. 60: 100–150), build, gaps, word, order (Final) |
| e4s3l7 | Sports day at the club (boss, значок e4s3boss) | gaps, build, choice, gaps, word, choice — Task 1–6, `pre` e4s3l1…l6 |

Назву l3 скорочено з плану («My week: every day, on Mondays, at the weekend» → «My week: on Mondays, at the weekend», 6 слів — style/eng.md «2–6 слів»), l4 — «And, but, or: what I like» (план: «…and don’t like»). Як e4s1 скоротив свої.

**Джерела форм і норм (curl, 2026-11-19):**
- play + ігри з м'ячем: OALD play_1 «to play football» — https://www.oxfordlearnersdictionaries.com/definition/english/play_1
- go + -ing: OALD go_1 «go doing … to go swimming/fishing/jogging» — https://www.oxfordlearnersdictionaries.com/definition/english/go_1; go cycling — OALD https://www.oxfordlearnersdictionaries.com/definition/english/cycling; go skating — OALD https://www.oxfordlearnersdictionaries.com/definition/english/skating
- do + karate / judo / gymnastics: OALD karate (Collocations: verb + karate — do), judo (verb + judo — do), gymnastics («does gymnastics») — https://www.oxfordlearnersdictionaries.com/definition/english/karate, …/judo, …/gymnastics; do yoga on a Monday — OALD https://www.oxfordlearnersdictionaries.com/definition/english/monday
- Місце прислівників частоти: CD Grammar «Adverbs and adverb phrases: position» (mid position — між підметом і основним дієсловом; після be) — https://dictionary.cambridge.org/grammar/british-grammar/adverbs-and-adverb-phrases-position; «Always»: «We don’t use always at the beginning of a statement» — https://dictionary.cambridge.org/grammar/british-grammar/always; «Word order: never» — https://dictionary.cambridge.org/grammar/british-grammar/never; «Usually» (mostly mid position) — https://dictionary.cambridge.org/grammar/british-grammar/usually; «Often» (front / mid / end) — https://dictionary.cambridge.org/grammar/british-grammar/often. Тому в `build` лише always / never (одне місце); usually — лише в `gaps` проти «play usually».
- on Mondays = щопонеділка: OALD monday «on Mondays», CD Grammar «On» — https://www.oxfordlearnersdictionaries.com/definition/english/monday, https://dictionary.cambridge.org/grammar/british-grammar/on; at the weekend — facts/eng.md №5. У `gaps` «on the weekend» (AmE) варіантом не ставив — лише {at|in}.
- every day (два слова) ≠ everyday (прикм.): OALD every, everyday — https://www.oxfordlearnersdictionaries.com/definition/english/every, …/everyday
- like + -ing: CD Grammar «Like» — https://dictionary.cambridge.org/grammar/british-grammar/like
- but — протиставлення, or — вибір; **or після заперечення замість and** («I don’t like tea or coffee»): CD Grammar «But», «Or» — https://dictionary.cambridge.org/grammar/british-grammar/but, https://dictionary.cambridge.org/grammar/british-grammar/or. Тому заперечень з and / or у завданнях немає (і в fbText l4 sort — два окремі речення).
- post (ім.) — «a message or picture that you publish on a website or using social media» — CD https://dictionary.cambridge.org/dictionary/english/post; fairy tale (UK also fairy story) — CD https://dictionary.cambridge.org/dictionary/english/fairy-tale
- clever (especially British English) ~ smart (especially North American) ~ intelligent, bright — OALD smart_1 (Synonyms) — https://www.oxfordlearnersdictionaries.com/definition/english/smart_1 → у ключі l5 `word`: clever, smart, intelligent, bright (TQ-122: AmE-лексику не робимо помилкою).
- Рівні CD: hero B1, brave B1, gymnastics B1, hobby A2, karate — без рівня (OALD b1). hero/brave — слова самої теми програми («улюблені дитячі герої»), кожне визначено на екрані (brave – is not afraid).

**Наголос (CD UK + OALD BrE, curl):** tennis /ˈten.ɪs/, basketball /ˈbɑː.skɪt.bɔːl/, gymnastics /dʒɪmˈnæs.tɪks/, karate /kəˈrɑː.ti/, always /ˈɔːl.weɪz/, usually /ˈjuː.ʒu.ə.li/, sometimes /ˈsʌm.taɪmz/, never /ˈnev.ər/, Monday /ˈmʌn.deɪ/, Saturday /ˈsæt.ə.deɪ/, **weekend UK /ˌwiːkˈend/** (US — 1-й склад; беремо BrE), favourite /ˈfeɪ.vər.ɪt/, hero /ˈhɪə.rəʊ/, clever /ˈklev.ər/, funny /ˈfʌn.i/ — https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word>.

**Факти (герої — суспільне надбання):**
- Kotyhoroshko — герой української народної казки, хлопчик надзвичайної сили («very strong»): https://en.wikipedia.org/wiki/Kotyhoroshko; https://uk.wikipedia.org/wiki/Котигорошко («Хлопчик надзвичайної сили»). Написання — за КМУ № 55 і en.wikipedia. Статус: self (обидва джерела — Вікіпедія різними мовами; fantlab.ru з контейнера не відкривається).
- Robin Hood — герой старих англійських оповідей, фільмів; допомагає бідним: CD «in old English stories, a character who stole money from rich people and gave it to poor people» — https://dictionary.cambridge.org/dictionary/english/robin-hood; OALD Word Origin «a character in traditional English stories who lived in a forest, robbing rich people and giving money to poor people» — https://www.oxfordlearnersdictionaries.com/definition/english/robin-hood; en.wikipedia «featured in literature, theatre, and cinema» — https://en.wikipedia.org/wiki/Robin_Hood.
- Super Kit (кіт з малюнків Андрія), Polly (дівчинка з улюбленої книжки Емми) — власні вигадані герої, без назв реальних книжок.

**Авторське право:** тексти власні; WebSearch дослівних фрагментів «I always go swimming on Saturdays. I usually play tennis after school» і «My hobby is swimming. I go swimming on Mondays, Wednesdays and Fridays» — збігів немає.

**Узгодженість героїв з e4s1:** Oksana — село біля Полтави, брат Dmytro; Andrii — Kyiv; Mariia — Kharkiv; Emma — брат Tom (тому в l1 pick «with my brother»). Один герой — одні вподобання в межах розділу (Yurii — щодня футбол, без велосипеда; Kateryna — не любить теніс; Bohdan — любить теніс).

**Спірне / для верифікатора:**
1. l4 `word` «I like cycling, ___ I don’t like tennis.» — ключ but. «and» граматично можливе, але суперечить правилу уроку (and — the same, but — different); у ключ не додавав.
2. l2 info: лише always / never / usually у прикладах; often і sometimes — у шкалі (●), їх місце у `build` не перевіряється (CD: often, sometimes бувають і на початку, і в кінці).
3. l2 info «but after am, is, are: I am always happy» — правило подано, але не оцінюється (лише before-verb).
4. l1 hyp: «do» для «інших видів спорту» — спрощення для 4 кл. (OALD collocations); пулу — не давати do з ігровими видами й не брати golf / chess / running як «правило».
5. stats: e4s3l1 і e4s3l6 typeVariety = 6 (межа профілю [2; 6] — у нормі), e4s3l6 gradedShare 0,78 (межа ≤ 0,9) — прапорці лише «нетипово для сім'ї» (z ≈ 2,4–2,5 серед уроків 4 кл., де переважає 4–5 типів). Межі профілю не порушено; longWordShare усіх уроків ≤ 0,116 (межа 0,12).
6. Плейтест не запускав (розділу ще немає в manifest, build — оркестратор).

**Перевірка:** `node tools/validate.mjs --section e4s3` — 0 помилок, 0 попереджень. Ключі `word` прогнав через `SLID_LANG.wordVerdict(…, "en")`: «Swimming.», «Often?», «smart» → ok; «swiming», «gos», «brav» → Almost; «go» на goes → неправильно.
