---
claimed_from: todo
claimed_at: 2026-11-25T12:23:39.310Z
id: write-eng-g8-e8s5
type: write-section
subject: eng
grade: 8
section: e8s5
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e8s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Література й бібліотека» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: вибір книг; улюблений письменник, книга, герой; літературні жанри; бібліотека, її обладнання та послуги — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Past Perfect Simple: affirmative, negative, time up to then (B1) — нове; narrative tenses: Past Simple + Past Continuous + Past Perfect (B1: Past simple — ordering of past events) — розширення e6s4l5; sequencing у розповіді (then, later, in the end) (B1: Discourse markers — sequencing) — розширення e6s3l3; Past Perfect Continuous (B1: background events) — лише впізнавати, на вибір автора.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** after / before + Past Simple часто без Past Perfect («After he finished / had finished») → обидва в ключі; «When we arrived, the film started / had started» — різний зміст: будувати завдання лише з однозначним контекстом. Жанри — за CD (novel, short story, poem, fairy tale, fantasy, detective story, science fiction); бібліотека: borrow / lend (пастка), library card. Письменники — Lesia Ukrainka, Ivan Franko, Taras Shevchenko (glossary/eng.md, КМУ № 55) і британські; тексти творів під охороною не цитувати; переказ — власний. Відгук про книгу — с. 31. `requires`: e6s4l4, e6s4l5, e6s3l4, e6s3l5, e4s3l5, e5s7l1, e6s7l5 (past participles: seen, eaten — опора для had + participle); після появи e7s1 — урок just / already (оркестратор). Рядок плану l4 — «When I got to the library, it had closed» (verifier-curate-eng-plan-g7-9: приклад з теми розділу, а не про фільм). Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s5.js`: `SLID.section("eng", { id: "e8s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e8s5, 2026-11-25.** `content/eng/g8-e8s5.js` — draft, 7 уроків (6 + boss), 70 екранів; `validate --section e8s5` — 0 помилок, 0 попереджень; без dialog (D-056), без звуку, без `uk`.

**Уроки:** l1 «Fantasy, poetry or a detective story? Genres» · l2 «At the library: borrowing books and other services» · l3 «A writer, a poet, a hero: my favourite book» · l4 «When I got to the library, it had closed: the Past Perfect» · l5 «It was raining, and she had lost her key: telling a story» · l6 «A book I recommend: a book review» · l7 «Book week at school» (boss, значок e8s5boss «Book expert»). Назви = рядки plan.js.

**requires:** e4s3l5, e5s7l1, e6s3l3, e6s3l4, e6s3l5, e6s4l4, e6s4l5, e6s7l5 (з задачі) + e7s1l2 (already; урок уже є — content/eng/g7-e7s1.js).
Past Perfect Continuous — не вводив (за задачею «на вибір автора»): уроку й так вистачає нового.

**Факти (2 джерела кожен):**
- Taras Shevchenko (1814–1861), poet and artist; *Kobzar* — book of poems, 1840 — https://en.wikipedia.org/wiki/Taras_Shevchenko (raw: birth/death); https://en.wikipedia.org/wiki/Kobzar_(poetry_collection); British Library blog https://britishlibrary.typepad.co.uk/european/2014/02/the-first-kobzar.html; Encyclopedia of Ukraine (WebSearch) https://www.encyclopediaofukraine.com/pages/S/H/ShevchenkoTaras.htm.
- Lesia Ukrainka (1871–1913), poet; *The Forest Song* — poetic play, written 1911, Mavka — https://en.wikipedia.org/wiki/Lesya_Ukrainka (raw: 1871–1913, birth name Larysa Kosach); https://en.wikipedia.org/wiki/The_Forest_Song; https://uk.wikipedia.org/wiki/Лісова_пісня («драма-феєрія… написана 1911»). Мавку подано як «a magic girl of the forest» (лісова мавка, німфа) — спрощення для 8 кл.
- Ivan Franko (1856–1916), writer and poet; *Fox Mykyta* (Lys Mykyta) — story in verse for children about a clever fox (1890, журнал «Дзвінок») — https://en.wikipedia.org/wiki/Ivan_Franko (raw: дати); https://en.wikipedia.org/wiki/Lys_Mykyta_(book) (WebSearch); https://cdr.creighton.edu/items/ecb25105-a36b-4d06-8b0b-ebad20daaab1. Рік у тексті не вжито (джерела розходяться щодо книжкового видання).
- Arthur Conan Doyle (1859–1930), Scottish writer (born Edinburgh), Sherlock Holmes detective stories — https://en.wikipedia.org/wiki/Arthur_Conan_Doyle (raw: birth_place Edinburgh); Britannica (WebSearch, «Scottish writer best known for his creation of the detective Sherlock Holmes») https://www.britannica.com/biography/Arthur-Conan-Doyle.
- Lewis Carroll, English writer; *Alice’s Adventures in Wonderland* — 1865 (дата в межах року розходиться: 4 July / November — день не вжито) — https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland; https://themorgan.org/book/export/html/52806 (WebSearch).
- Kotyhoroshko (l6, огляд Zlata): хлопець надзвичайної сили, перемагає змія й визволяє братів і сестру — https://en.wikipedia.org/wiki/Kotyhoroshko (raw); герой уже був у e4s3l5. «serpent / snake» подано як «a dragon» (змій).
- Вигадане (не факти): *The Lighthouse Riddle*, Vira Morska, Yeva, Lev (l6, boss); оповідання Mariia про Lina (l5); Inspector Bond (l1); Captain Cat — та сама вигадана книжка, що в e7s4. Див. TQ-146.

**Форми й слова (CD / OALD):**
- borrow / lend: CD Grammar «Borrow or lend» — https://dictionary.cambridge.org/grammar/british-grammar/borrow-or-lend («Can I borrow your dictionary? Not: Can I lend…»; lend – lent – lent); OALD borrow (a2), lend_1 (a2).
- Past Perfect: CD Grammar «Past perfect simple (I had worked)» (had + -ed form; hadn’t; time up to then) — https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-i-had-worked; «Past perfect simple or past simple?» (when + Past Simple vs had started — різний зміст) — https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-or-past-simple. Тому всі завдання «яка дія раніше» мають шкалу часу або мітки (background / main event / earlier event); хибні варіанти — has / have + participle, неправильні форми (had went), Past Continuous; Past Simple як хибний варіант при «when» не ставив (boss T4: didn’t read → hasn’t read).
- forget – forgot – forgotten; read – read – read (/red/) — CD forget, read.
- recommend: CD Grammar «Recommend» — «Do not say ‘recommend to do something’, say recommend doing something» — https://dictionary.cambridge.org/grammar/british-grammar/recommend; recommend B1 (CD).
- in the end = finally (CD end, B1) — https://dictionary.cambridge.org/dictionary/english/end.
- library card — OALD card_1 (приклад «library card») https://www.oxfordlearnersdictionaries.com/definition/english/card_1. «library ticket» (старше BrE) у дистракторах не вжито — друга відповідь.
- Рівні CD/OALD: novel B1, poem B1, poet B1, author B1, character B1, fiction B1, science fiction B1 (OALD a2), detective B1, recommend B1, ending B1, thriller B1, photocopy B1, fairy tale (OALD b1), short story (OALD a2), library A2, borrow / lend A2, fantasy B2, librarian (OALD b2), plot B2 (не вжито), renew B2 (не вжито), genre — без рівня (дано з поясненням).
- Наголос (CD UK): <u>nov</u>el ˈnɒv.əl, de<u>tec</u>tive dɪˈtek.tɪv, <u>fan</u>tasy ˈfæn.tə.si, <u>po</u>etry ˈpəʊ.ə.tri, <u>li</u>brary ˈlaɪ.brər.i, li<u>brar</u>ian laɪˈbreə.ri.ən, <u>bor</u>row ˈbɒr.əʊ, <u>fic</u>tion ˈfɪk.ʃən, <u>char</u>acter ˈkær.ək.tər.

**Опора завдань (D-019):** l2 #2 «Remember?» — e5s7l1 (borrow = take home and bring back); l3 #2 — hyp (Kobzar), факти — екрани «Ukrainian writers» / «British writers»; l3 фінал (1911) — екран «Ukrainian writers»; l4 #4, #6 — шкала часу на екрані; l5 gaps і boss T6 — мітки (background) / (main event) / (earlier event) у тексті, як e6s4 (verifier-e6s4); l6 #2–#4 — уривки відгуку на тому ж екрані; l6 word «ending» — уривок 2; boss — лише з розділу.
**build** — перебір усіх перестановок з пастками через SLID_LANG.check: кожне приймає лише один порядок.

**Сумнівне / для верифікатора:**
- l3 info «Ukrainian writers» — ~65 слів (межа теорії 6–9 кл. ≤ 60): це перелік фактів, не правило; можна розбити на два екрани.
- l6 пастка «I recommend [to] read it» — кнопка «to», але виправлення — «reading» (fbText це пояснює).
- stats: boss l7 — readWordsPerScreen «нетипово для сім'ї» (z=2.3), у межах профілю 7–9; решта уроків без прапорців.

**verifier-e8s5, 2026-11-25.** Усі 7 уроків → verified; 7 правок (4 критичні: l2 match, l6 pick, l6 word «end», boss T7 pick; 3 дрібні: l1 word, l3 word poet, l4 word left). Факти — 2 відкриті джерела кожен; «The Lighthouse Riddle» / Vira Morska — реальної книжки немає; TQ-146 не створено. Звіт: reports/verify/write-eng-g8-e8s5.md.
