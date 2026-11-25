---
claimed_from: todo
claimed_at: 2026-11-19T14:22:09.546Z
id: write-eng-g5-e5s1
type: write-section
subject: eng
grade: 5
section: e5s1
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e5s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Я, моя родина, мої друзі» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: мої родинні зв'язки; професії батьків; мої друзі та їхні уподобання — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): to be; have got; possessive 's; possessive adjectives; this/that/these/those. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s1.js`: `SLID.section("eng", { id: "e5s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- writer-e5s1, 2026-11-19 -->
**Файл:** content/eng/g5-e5s1.js — 7 уроків (6 + boss), усі `draft`. `requires` розділу: e4s1l1, e4s1l2, e4s1l3 (plan-eng-g5.md §6: e5s1 → e4s1 — to be, have got, ’s, a/an with jobs). Зображень немає (match — текстові пари, тож `credits` не потрібні).

**Уроки (id · назва · типи завдань):**
- e5s1l1 · My family tree: who is who? · choice (hyp), choice, match, gaps, word, gaps (Final)
- e5s1l2 · Have you got any brothers or sisters? · choice (read), gaps, choice, build, word, pick («Find the mistake»), gaps (Final)
- e5s1l3 · Whose is it? My, your, his, her · choice (hyp), gaps, match, build, pick («Find the mistake»), word, gaps (Final)
- e5s1l4 · This, that, these, those: a family photo · choice (hyp), gaps, choice, build, word, gaps (Final)
- e5s1l5 · What do your parents do? Jobs · choice (read), choice (hyp), choice, gaps, match (питання ↔ відповіді), stress, word, choice (Final)
- e5s1l6 · My best friend: what does she like? · choice (read), gaps, build, choice, word, choice + multi (Final, текст у 2 частинах ≈ 120 слів)
- e5s1l7 · Our family album (boss, Task 1–6, `pre` на l1…l6) · gaps, word, gaps, choice, build, gaps

**Перевірки:** `node tools/validate.mjs --section e5s1` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — у e5s1 прапорців немає (найдовший текст екрана 59 слів ≤ 85; longWordShare ≤ 0.115). Кожне оцінюване завдання розв'язано двічі (вперед і від ключа). **build:** усі перестановки плиток (5 завдань, 408 порядків) перебрано через `SLID_LANG.check` у node (vm) — рушій приймає лише ключ; пастки `extra` на будь-якому місці не зараховуються; альтернативних правильних порядків немає (лише ехо-питання на кшталт «It is Whose bag» — у питальних з `keepCase` перша плитка з великої, як у e4s8). **word:** ключі без кінцевого знака; `wordVerdict` — «Grandson.», «THESE» тощо → ok; l7 Task 2 `hasn’t` з `contractions: true` (has not теж зараховується).

**Джерела форм (curl, 2026-11-19):**
- Рівні й наголос (CD, UK): husband /ˈhʌz.bənd/ A1, wife A1, daughter /ˈdɔː.tər/ A1, parent /ˈpeə.rənt/ A1, grandparent A2, grandson A2, granddaughter A2, cousin /ˈkʌz.ən/ A2 — https://dictionary.cambridge.org/dictionary/english/husband (…/wife, …/daughter, …/parent, …/grandparent, …/grandson, …/granddaughter, …/cousin)
- Професії (CD): nurse A2, dentist /ˈden.tɪst/ A2 «a person whose job is treating people's teeth», mechanic /məˈkæn.ɪk/ A2 «someone whose job is repairing the engines of vehicles», police officer /pəˈliːs ˌɒf.ɪ.sər/ A2, shop assistant /ˈʃɒp əˌsɪs.tənt/ A2 «UK (US salesclerk)», photographer /fəˈtɒɡ.rə.fər/ A2, repair A2 — https://dictionary.cambridge.org/dictionary/english/dentist (…/mechanic, …/police-officer, …/shop-assistant, …/photographer, …/nurse, …/repair); OALD police officer «a member of the police», Jobs a2 — https://www.oxfordlearnersdictionaries.com/definition/english/police-officer. **Не взяв** через рівень B1 (CD): vet, builder, firefighter, hairdresser, journalist; programmer — C1.
- whose — B1 (CD https://dictionary.cambridge.org/dictionary/english/whose); у розділі лише як форма теми уроку 3 (рядок плану «Whose is it?»), не в поясненнях. CG «Whose»: «We use whose to ask a question about possession… Whose are these gloves?», «Don’t confuse whose and who’s» — https://dictionary.cambridge.org/grammar/british-grammar/whose
- its без апострофа, it’s = it is — CG «Possession»: «The possessive determiner its has no apostrophe» — https://dictionary.cambridge.org/grammar/british-grammar/possession-john-s-car-a-friend-of-mine
- this/these — «close to the speaker», that/those — «distant from the speaker» — CG https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-those
- any — «Any is most common in negative clauses… Has he got any homework? Has he got some homework? Any is more common in questions» — CG https://dictionary.cambridge.org/grammar/british-grammar/some-and-any. Тому some/any у питаннях **не оцінюю** (лише a ↔ any за числом: «a dog», «any pets»).
- only child — CD «a child who has no sisters or brothers» — https://dictionary.cambridge.org/dictionary/english/only-child
- What’s she like? — OALD like_1 «used to ask somebody’s opinion of somebody/something… what's she like?» (a1) — https://www.oxfordlearnersdictionaries.com/definition/english/like_1; CD Grammar «Be like or what is … like? … description of someone» — https://dictionary.cambridge.org/dictionary/english/like
- quiet (людина) — CD B1 «A quiet person is one who does not talk much»; friendly /ˈfrend.li/ A2 — https://dictionary.cambridge.org/dictionary/english/quiet, …/friendly
- photo album, family tree — CD https://dictionary.cambridge.org/dictionary/english/photo-album, …/family-tree
- Авторське право: два найдовші фрагменти (l6 intro, l6 Final part 2) — WebSearch у лапках, збігів немає.

**Герої (не суперечать 4 кл. і чернеткам 5 кл. у дереві):** Oksana — Zelena Dolyna, бабуся й дідусь (Mykola, Hanna — батьки тата) живуть з ними (e4s1l2), кішка Murka (e4s2), подруга Halyna (e4s8) = best friend; **нове:** мама Olena — nurse у Poltava, тато Petro — mechanic, двоюрідний брат Denys (син Nadiia). Andrii — Kyiv, сестра Sofiia, бабуся-вчителька (e4s1) = Grandma Nina, дідусь Vasyl (Chernihiv, батьки мами), п'ятеро двоюрідних (серед них Maksym з Ottawa, e4s7), найкращий друг Yaroslav (новий). Mariia — Kharkiv, **only child**, мама dentist, тато police officer, дядько Oleh. Taras — Lviv, мама artist (e4s1), little sister Zlata (e4s4 «little sister»), дядько Roman і кузина Sofiia (e4s1 boss), тітка Liudmyla — dentist, друг Ostap (e5s8). Emma — мама Sarah, брат Tom, кузен Jack (e4s1), кішка Snowy. Прізвища другорядних: Mr Rudenko, Ms Tkachuk (Savchuk, Bondar, Lysenko уже зайняті в e4s5, e4s3, e5s2).

**Сумнівне / для верифікатора:**
1. l3: «Whose» — B1 за CD, але це сама тема уроку (рядок плану); у поясненнях інших уроків не вживаю. `why` l3 — «Learn to say whose things they are.»
2. l6: «quiet» (людина) — B1 (CD), визначено на екрані info («doesn’t talk a lot»); у завданнях оцінюється лише в читанні не напряму.
3. l4: this/that оцінюю лише там, де відстань задано явно («in her hands», «far away», «not near the window»); у gaps і Final — лише число (this/these, that/those), бо в фото «this/that» обидва можливі.
4. Речення пояснень: кілька пунктів списку з прикладом мають 9–10 слів (l1 #3, l4 #3, l5 #6) — приклад усередині пункту; власне правило ≤ 8 слів.
5. Уривки Final l6 (part 1 + part 2 ≈ 120 слів) — трохи менше за пропозицію 130–180 (TQ-126); для уроку (не уроку читання) прийнятно.
6. Помітив у **e4s1l3** (не мій файл): intro — тато Андрія engineer, а `pick` «One word in Andrii’s message is wrong» — «My dad is [an] farmer». Суперечність героя — рядок в inbox.
7. `uk` не додавав.

<!-- verifier-e5s1, 2026-11-20 -->
**Верифікація (reports/verify/e5s1.md): verified, 7 уроків.** 10 правок у файлі розділу:
- герой Taras: у e4s7 («My brothers were happy») і e5s8 у нього є брати → «two brothers and a little sister, Zlata»; l2 #5 тепер «Yes, he has.», boss T2 — «Has Zlata got a bike? – No, she hasn’t.»; Злата — «We’ve got a dog and a cat» (собака — e4s5, кішка — boss T3);
- l2 #4: Sofiia (Andrii) «hasn’t got any pets» суперечило e4s6 (кішка) → Mariia;
- друга правильна відповідь: l1 #7 + `grandchild` у ключ; l3 #9 — «Whose cat is it?» (без питання годилось «It’s a cat»);
- l5: nurse «helps doctors» → «looks after sick people» (CD, OALD); «shop as<u>sis</u>tant» → «<u>shop</u> assistant» (CD /ˈʃɒp əˌsɪs.tənt/), у `stress` assistant → police;
- l1 #2, #4: калька «What is he for Hanna?» → «Petro is Hanna’s …».
Спірні місця автора: 1 (whose — тема уроку) ✅; 2 (quiet — визначено) ✅; 3 (this/that лише з явною відстанню) ✅; 4 (довжина речень) ✅; 5 (Final l6 ≈ 120 слів) ✅; 6 (e4s1 farmer — уже виправлено оркестратором) ✅; 7 (`uk` не потрібне) ✅.
Відкрите поза файлом: CONFLICT e5s9 (Mariia only child ↔ «My brother» у Final e5s9); ENGINE these/those → «check the spelling»; плейтест — після build.
