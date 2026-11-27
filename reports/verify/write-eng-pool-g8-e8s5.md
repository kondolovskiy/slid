# Верифікація: пул pe8s5 (англійська, 8 кл., розділ e8s5 «Books and libraries»)

Верифікатор: verifier-pe8s5-pe8s6, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s5.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s5.md. Опора: уроки `content/eng/g8-e8s5.js` (verified, reports/verify/write-eng-g8-e8s5.md) і попередні розділи g4–g8-e8s4. Еталони: reports/verify/write-eng-pool-g6-*.md, -g7-*.md, -g8-e8s2.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і збігів з опублікованими текстами я не знайшов. Зробив 11 правок у 9 вправах: 2 суперечності канону героїв (a04, a28), 1 stress-слово без опори на момент уроку (a09), 4 підказки, що видають відповідь (a15, a39, a45, a47), 1 друга відповідь у ключ (a06), 1 уточнення тексту (a63). Людині: нічого блокувального.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. PDF МП-ІМ (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`, звірено за колонтитулами):
- с. 31: «передає зміст книги або фільму і повідомляє про своє ставлення» → l6 read/write/vocab;
- с. 32: «Література — Вибір книг для читання; Улюблений письменник, поет, книга, літературний герой» → l3;
- с. 33: «Літературні жанри; Відвідування бібліотеки; обладнання та послуги бібліотеки» → l1, l2;
- с. 35: «Past perfect simple: affirmative, negative…», «Past simple…», «Verbs — patterns with verb + ’to-‘ infinitive or ‘-ing’ form», «Discourse — Sequencing» → l4, l5, l6 gram.
Усі `src` відповідають сторінкам ✅.

## 2. Факти (лише з verified-уроку l3)

| Твердження (вправи) | Джерела, відкриті в цій сесії (WebSearch) | Вердикт |
|---|---|---|
| Kobzar — книга поезій Taras Shevchenko, 1840; Shevchenko — poet and artist (a25, a26, a28, a33, a40) | https://en.wikipedia.org/wiki/Kobzar_(poetry_collection) («book of poems by Ukrainian poet and painter Taras Shevchenko, first published… in 1840»); https://www.britannica.com/biography/Taras-Hryhorovych-Shevchenko ; https://britishlibrary.typepad.co.uk/european/2014/02/the-first-kobzar.html | ✅ |
| The Forest Song — п'єса Lesia Ukrainka 1911 про Mavka; Lesia Ukrainka — poet (a25, a27–a29, a36, a37) | https://en.wikipedia.org/wiki/The_Forest_Song ; https://opera.lviv.ua/en/?p=266706 (написана 1911); https://lareviewofbooks.org/article/subverting-the-canon-of-patriarchy-lesya-ukrainkas-revisionist-mythmaking/ | ✅ |
| Fox Mykyta — твір Ivan Franko у віршах про хитрого лиса; Franko — writer and poet (a26, a27, a29, a37, a64) | https://www.encyclopediaofukraine.com/pages/F/R/FrankoIvan.htm ; https://en.wikipedia.com/wiki/Ivan_Franko ; https://cius-archives.ca/items/show/468 («verse novella», 1890) | ✅ |
| Arthur Conan Doyle — Scottish writer, Sherlock Holmes; «English writer» у a29 — хибне (a25, a29, a31, a34, a38) | https://britannica.com/biography/Arthur-Conan-Doyle («Scottish writer best known for… Sherlock Holmes»); https://en.wikipedia.com/wiki/Arthur_Conan_Doyle | ✅ |
| Lewis Carroll — English writer; Alice’s Adventures in Wonderland — 1865 (a25, a28, a30, a32, a35, a39) | https://www.britannica.com/print/article/15373 ; https://poetryfoundation.org/bio/lewis-carroll ; https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland | ✅ |

Імена — за glossary/eng.md «Імена історичних і відомих осіб» (D-057: Shevchenko, Franko, Lesia Ukrainka — без примітки) ✅. Вигадані книжки й персонажі — лише з уроку (The Lighthouse Riddle, Vira Morska, Yeva, Lev, Captain Cat, Inspector Bond); Nika — нова вигадана героїня неназваного роману ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Кожну вправу я розв'язав сам, потім звірив з ключем. `SLID_LANG.check(…, solution, "en")` — усі `solution` зараховуються; `build` — перебір усіх перестановок підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s5-6/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | fantasy; poetry | = | l1 #3 | ні | ✅ |
| a02 match | 5 пар | = | l1 #3, #4 | «other world» → fantasy, «Once upon a time» → fairy tale; інших пар немає | ✅ |
| a03 word | novel | = | l1 #5 | ні | ✅ |
| a04 pick | author, poet | = | l1 #5 | «Her friend Petro» — Petro в каноні лише тато Оксани (одне ім'я — одна людина) | ⚠️ → Hryhorii |
| a05 gaps | poem; poet; poetry | = | l1 #5 | ні | ✅ |
| a06 word | science fiction | science fiction, sci-fi | l1 #3 | атрибутивне «science-fiction novel» (дефіс ≠ пробіл у рушії) — правильне | ⚠️ → додано `science-fiction` |
| a07 stress | <u>nov</u>el, de<u>tec</u>tive | = | l1 #3, #5 `<u>` | різні склади | ✅ |
| a08 stress | poetry, detective, fantasy | = | l1 `<u>` | ні | ✅ |
| a09 stress | … | = | — | fiction підкреслене лише в l2 (пізніший урок), вправа — l1 | ⚠️ → `+li|brar|y` (підкреслене в e5, ˈlaɪ.brər.i) |
| a10 gaps | detective story; novel | = | l1 #3, #5 | ні | ✅ |
| a11 gaps | poetry; science fiction; short story | = | l1 #3, #5 | ні | ✅ |
| a12 gaps | fantasy; poems; poet; fairy tale | = | l1 #3, #5 | ні | ✅ |
| a13 gaps | lend; borrowed | = | l2 #3 | ні | ✅ |
| a14 match | 4 пари | = | l2 #6 | ні | ✅ |
| a15 word | lent | = | l2 #3 | hint «lend – … – lent» показував форму, що збігається з відповіддю | ⚠️ → hint на екран |
| a16 sort | 3 / 3 | = | l2 #6, #8 | ні | ✅ |
| a17 pick | borrows → lends | = | l2 #3 | ні | ✅ |
| a18 gaps | lent; borrowed | = | l2 #3 | ні | ✅ |
| a19 choice | printer | = | l2 #6 «print and photocopy» | copy — похідне від photocopy (l2) | ✅ |
| a20 match | 4 пари | = | l2 #6 | перебрав праві — других пар немає | ✅ |
| a21 gaps | borrow; card; return; book club | = | l2 #3, #6 | ні | ✅ |
| a22 gaps | borrowed; librarian | = | l2 | ні | ✅ |
| a23 gaps | non-fiction; card; borrow | = | l2 #6 | ні | ✅ |
| a24 gaps | fiction; non-fiction; cards; return | = | l2 #6, #8 | ні | ✅ |
| a25 match | 4 пари | = | l3 #3, #5 | ні | ✅ |
| a26 choice | poet and artist | = | l3 #3 | ні | ✅ |
| a27 choice | a clever fox | = | l3 #3 | ні | ✅ |
| a28 gaps | 1840; 1911; 1865 | = | l3 #3, #5 | «for the poster» — постер класу Ms Lysenko (Kyiv), а Polina — Kharkiv | ⚠️ → «for a poster» |
| a29 multi | [0,2] | = | l3 #3, #5 | «English writer» про Doyle — хибне за уроком і Britannica | ✅ |
| a30 gaps | written; about | = | l3 #7 | ні | ✅ |
| a31 build | They were written by Arthur Conan Doyle. | = | l3 #7 | 1956 перестановок — лише ключ; питальний порядок відсікає «Who wrote them?» | ✅ |
| a32 pick | wrote | = | l3 #7 | ні | ✅ |
| a33 word | written | = | l3 #3, #7 | «third form of write» відсікає published | ✅ |
| a34 gaps | were; by; about | = | l3 #7 | ні | ✅ |
| a35 choice | the main character | = | l3 #5 | ні | ✅ |
| a36 word | character | character, heroine, hero | l3 #5 | ні | ✅ |
| a37 gaps | poet; poet; character | = | l1 #5, l3 #3 | ні | ✅ |
| a38 gaps | Arthur Conan Doyle; detective stories | = | l3 #5 | ні | ✅ |
| a39 order | 5 речень | = | l3 #7 | hint дослівно задавав увесь порядок | ⚠️ → hint лише про перше й останнє |
| a40 gaps | was written; 1840; poems; because | = | l3 #3, #7 | ні | ✅ |
| a41 gaps | had; gone | = | l4 #3, #5 | ні | ✅ |
| a42 choice | had started | = | l4 #3 | ні | ✅ |
| a43 word | taken | = | l4 #5 | «third form of take» відсікає borrowed | ✅ |
| a44 pick | wrote | = | l4 #5 | ні | ✅ |
| a45 build | She hadn’t read the book before. | = | l4 #7 | 1956 — лише ключ; hint «She + hadn’t + …» розв'язував пастку hasn’t | ⚠️ → hint питанням |
| a46 gaps | Had; hadn’t | = | l4 #7 | ні | ✅ |
| a47 word | read | = | l4 #5 | hint «look the same» видавав відповідь | ⚠️ → hint на список «Third forms» |
| a48 gaps | had started | = | l4 #3 | ні | ✅ |
| a49 gaps | had left; had gone | = | l4 #3 | ні | ✅ |
| a50 gaps | had forgotten; had; taken | = | l4 #5 | «had forgot» — не BrE-норма: CD «past tense forgot \| past participle forgotten», OALD «past participle forgotten»; так само пастка в уроці l4 #8 | ✅ |
| a51 sort | 2 / 2 / 2 | = | l5 #3 | ні | ✅ |
| a52 choice | Dad had baked a cake. | = | l5 #3 | ні | ✅ |
| a53 gaps | was falling; ran; had left | = | l5 #3, #5 | мітки в дужках відсікають «had fallen» | ✅ |
| a54 pick | was → were | = | l5, e6s4 | ні | ✅ |
| a55 choice | had left | = | l5 #3 + шкала 7.40 / 7.45 (як l4 #3) | «the bus left» = поїхав після приходу — суперечить шкалі; «was leaving» — теж | ✅ |
| a56 gaps | had lost; was sleeping; had gone | = | l5 #3 | Daryna — сестра є (канон) | ✅ |
| a57 order | First, Then, Later, In the end | = | l5 #6 | ні | ✅ |
| a58 gaps | First; Then; In the end | = | l5 #6 | ні | ✅ |
| a59 gaps | Later; was looking; had lost; In the end | = | l5 #3, #6 | ні | ✅ |
| a60 choice | three | = | текст | ні | ✅ |
| a61 multi | [0,1] | = | текст | ні | ✅ |
| a62 choice | younger readers… | = | текст | ні | ✅ |
| a63 choice | Both reviewers liked Yeva. | = | тексти | у Тараса «Yeva is brave and clever» без «liked» — «liked» лише висновок | ⚠️ → «I liked Yeva: she is brave and clever.» |
| a64 order | 4 речення | = | l6 #5 | ні | ✅ |
| a65 gaps | happens; surprising; to; stars | = | l6 #2, #7; -ed / -ing — e7s4 | ні | ✅ |
| a66 choice | In the end, Nika… | = | l6 #5 «Don’t tell the ending!» | ні | ✅ |
| a67 gaps | visiting | = | l6 #7 | ні | ✅ |
| a68 pick | to borrow | = | l6 #7 | ні | ✅ |
| a69 build | I recommend joining the book club. | = | l6 #7 | 325 — лише ключ | ✅ |
| a70 word | reading | = | l6 #7 | ні | ✅ |
| a71 match | 4 пари | = | l6 #1, #4, l3 #5 | ні | ✅ |
| a72 word | beginning | beginning, start | l6 #4 | ні | ✅ |
| a73 gaps | slow; exciting; ending | = | l6 #4, #9 | ні | ✅ |

**Покриття:** 6 уроків, 73 вправи, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку; у вправ lvl 2–3 є `hint`. Past Simple не є хибним варіантом для раннішої дії ніде, крім a55 (там різне значення за шкалою) ✅. recommend: хибне лише «to + V» і «at» ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії; CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>): novel — CD «ˈnɒv.əl», OALD (novel_1) «/ˈnɒvl/»; detective — «dɪˈtek.tɪv», «/dɪˈtektɪv/»; fantasy — «ˈfæn.tə.si», «/ˈfæntəsi/»; poetry — «ˈpəʊ.ɪ.tri», «/ˈpəʊətri/»; fiction — «ˈfɪk.ʃən», «/ˈfɪkʃn/» (вилучено з a09 через опору, не через наголос).
- **Форми:** lend — CD «lent | lent», OALD «past simple lent»; recommend — CD «[ + -ing verb ] I recommend writing your feelings down», OALD «recommend doing something»; forget — CD «past participle forgotten», OALD «past participle forgotten».
- **Лексика** (скрипт `bin/lex.mjs` проти g4–g8-e8s4 і уроків e8s5 до `lesson` включно): поза уроками лишились planet (l1; planets — у l2), copy (похідне від photocopy), footballers, fly, Clarke, Nika, heroine (лише в ключі) — базова лексика, не ключ ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a04 (Petro), a28 (постер класу в Kyiv). Решта узгоджена: Zlata — сестра Тараса; Ostap — футбол; Andrii — шахи, sci-fi; Bohdan — Fox Mykyta (l3); Mariia — оповідання для конкурсу (l5), єдина дитина (у пулі братів немає); Ruby — однокласниця Emma; Mrs Clarke і Ms Shevchuk — з уроку l2; Dmytro — брат Оксани; Daryna — сестра є. Нові дрібниці (тітка Kyrylo — author, Halyna рецензує The Lighthouse Riddle, Hryhorii) — NOTE в inbox.
- **BrE, без звуку:** holidays, Mum, sport, at the weekend; AmE-правопису, IPA, A/B/C, «Listen» немає ✅.
- **Копії уроків** (`bin/ngram.mjs`, 6-грами проти g4–g11): лише рамки інструкцій, назви творів і формули («is the most important person in», «I like it because it’s very funny») без того самого ключа ✅.
- **Авторське право** (WebSearch з лапками, збігів немає):

| Фрагмент | Запит | Результат |
|---|---|---|
| a60 «But for me, the story was a bit slow, and I knew the answer to the riddle» | у лапках | збігу немає (відгуки Goodreads на інші книжки) |
| a73 «The start of the book is a bit slow, so I nearly stopped reading» | у лапках | збігу немає |

## 5. Правки (зроблені)
1. a04 «Her friend Petro» → «Her friend Hryhorii» (ім'я ніде в content/eng не вжите).
2. a06 answer + `science-fiction`.
3. a09 `+fic|tion` → `+li|brar|y`, steps.
4. a15 hint → «Look at the screen “borrow or lend?”: lend is an irregular verb.»
5. a28 «for the poster» → «for a poster».
6. a39 hint → «The first sentence names the book. The last one says why Kyrylo likes it.»
7. a45 hint → «Zlata didn’t know the story then, in the past. Which form shows an earlier action?»
8. a47 hint → «Look at the list “Third forms”.»
9. a63 Taras: «I liked Yeva: she is brave and clever.», steps.
10. `status: "verified"`, `meta.factcheck`, шапка.

## 6. Прогін
- `node tools/validate.mjs --pool pe8s5` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe8s5` — без помилок (6 уроків, 73 вправи).
- `node tools/euphony.mjs --pool pe8s5` — 0 відхилень.
- Повторний перебір `check` після правок: усі `solution` зараховуються, build приймає лише ключі.
- Браузерний прогін (`test-answer-ui.py`) — у CI (у контейнері немає Python-модуля playwright).

**Вердикт по пулу: verified.**
