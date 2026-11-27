# Верифікація: пул pe8s3 (англійська, 8 кл., розділ e8s3 «The media: the internet and the press»)

Верифікатор: verifier-pe8s3-pe8s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g8-e8s3.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s3.md. Опора: уроки `content/eng/g8-e8s3.js` (verified, reports/verify/write-eng-g8-e8s3.md) і попередні розділи g4–g8-e8s2. Еталони: reports/verify/write-eng-pool-g6-*.md, -g7-*.md, -g8-e8s2.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Порушень TQ-144 немає: форма без backshift ніде не стоїть хибним варіантом там, де сказане може бути досі правдою. Збігів з опублікованими текстами теж немає. Зробив 9 правок у 7 вправах: 2 суперечності канону героїв, 1 займенник, що суперечить імені, 2 stress з magazine (AmE-наголос), 2 підказки, що видають відповідь, плюс статус. Людині: нічого блокувального. Є одна рекомендація до уроку e8s3l1 (§6).

## 1. Програма, `src`
`sources`: лише `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`, сторінки звірено за колонтитулами):
- с. 28 (B1-читання): «Визначає, чи стаття, доповідь, огляд відповідають визначеній темі», «Розуміє більшість фактичної інформації…» → вправи читання l2, l5, l6 ✅;
- с. 32: «Засоби масової [інформації] — Інтернет, Преса, Періодичні видання» → l1, l2 vocab, l6 write ✅;
- с. 35: «Passives — Passive forms: … Past simple, Present continuous, Present simple», «Reported speech — Reported statements» → l3–l6 gram, l3–l5 write ✅.

## 2. Факти
У пулі немає реальних фактів. Новини, сайти й статті вигадані (Lviv Today, School 5 News — як в уроці), справжні ЗМІ не оцінюються. Розклади, ціни й кількість книжок у вправах на «fact / opinion» вигадані й не є ключем. Географія: Andrii — дідусь у Chernihiv, Oksana — Poltava, Mariia і Polina — Kharkiv. Усе це канон (memory/long/glossary/eng-heroes.md), нових тверджень про місто немає ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build`: перебрав усі перестановки всіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s3-4/bin/chk.mjs`). Зараховуються лише ключі: a26 (325 варіантів), a49 (1956), a50 (13699), a51 (109600). Кінцевого `.!?` у ключах `word` немає. У `pick` `[x]` — ціль, `[!x]` — правильний клікабельний фрагмент.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | daily; news website | = | l1 #3 | «on a magazine» не підходить до «the news on her phone… change all day» | ✅ |
| a02 match | 4 пари | = | l1 #3, #5 | перебрав усі праві варіанти: друга пара не підходить | ✅ |
| a03 word | weekly | = | l1 #3 | ні | ✅ |
| a04 pick | reporter, photographer | = | l1 #5 | «our photographer Yaryna takes the photos» суперечить канону: фотограф шкільної газети — Taras (l1 intro, l6 intro, a09 «I take the photos»). Hint «Headlines and articles are parts of a newspaper» відкидав обидва дистрактори (pitfalls п. 17) | ⚠️ → «I’m the [photographer]: I take the photos»; hint → навігація до списку |
| a05 stress | <u>news</u>paper, re<u>por</u>ter | = | l1 #5 `<u>` | ні | ✅ |
| a06 stress | article, magazine, headline | = | l1 #3, #5 | magazine: OALD NAmE /ˈmæɡəziːn/ поруч із BrE /ˌmæɡəˈziːn/, тож це випадок weekend (pitfalls п. 19, reports/verify/write-eng-pool-g6-e6s2.md). Hint «In one word, the strong part is at the end» вказував на відповідь | ⚠️ → `pho|+tog|ra|pher` (підкреслено в раніших уроках, тема l1); hint і steps |
| a07 stress | 5 слів | = | l1 | magazine — як у a06 | ⚠️ → `car|+toon` (e5s6, e7s4 `<u>`); steps |
| a08 gaps | magazine; monthly | = | l1 #3 | ні | ✅ |
| a09 gaps | reporter; articles; headlines | = | l1 #5 | ні | ✅ |
| a10 gaps | newspapers; press; weekly; journalists | = | l1 #3, #5 | «gets two websites» і «loves the internet» відсікає «doesn’t read the news online» | ✅ |
| a11 choice | Look for the writer and the date | = | l2 #3 | ні | ✅ |
| a12 sort | 3 / 3 | = | l2 #5 | ні | ✅ |
| a13 choice | No, mostly about a bookshop | = | l2 #3, #7 | ні | ✅ |
| a14 multi | [0,1,3] | = | l2 #3–4 | shark — e8s1 (sharks) | ✅ |
| a15 multi | [0,2] | = | l2 #5 | ні | ✅ |
| a16 gaps | a fact; an opinion | = | l2 #5 | ні | ✅ |
| a17 word | shared | = | l2 #3 (share) | «sent … with» неграматичне | ✅ |
| a18 match | 4 пари | = | l2 #3, #5 | ні | ✅ |
| a19 gaps | date; share | = | l2 #3 | ні | ✅ |
| a20 gaps | wrote; other; true | = | l2 #3, final | ні | ✅ |
| a21 gaps | date; other; match; share | = | l2 #3 | «believe it with anyone» неграматичне | ✅ |
| a22 gaps | is; are | = | l3 #3 | ні | ✅ |
| a23 choice | are being planted | = | l3 #3, #5 | ні | ✅ |
| a24 word | cleaned | = | l3 #3 | ні | ✅ |
| a25 pick | [paint] | = | l3 #3 | ні | ✅ |
| a26 build | Is the old station being painted? | = | l3 #5 | 325 перестановок — лише ключ (keepCase, велика Is) | ✅ |
| a27 choice | What is being built…? | = | l3 #5 | ні | ✅ |
| a28 gaps | was built; is being painted; is cooked | = | l3 #5 | маркери часу (in 1975, at the moment, every day) відсікають другий варіант | ✅ |
| a29 pick | [build], [paint] | = | l3 #3 | ні | ✅ |
| a30 gaps | is being built | = | l3 #3 | ні | ✅ |
| a31 gaps | is being repaired; are being painted; are being made | = | l3 #3 | ні | ✅ |
| a32 gaps | is being made; are being planted; was built; is being repaired | = | l3 #3, #5 | ні | ✅ |
| a33 match | 4 пари | = | l4 #3 | ні | ✅ |
| a34 gaps | was; couldn’t | = | l4 #3 | «were», «couldn’t to» неграматичні | ✅ |
| a35 word | was | = | l4 #3, #6 | торт уже готовий, тож форма без backshift не потрібна | ✅ |
| a36 pick | [don’t] | = | l4 #3 | «tennis was» — правильне, не ціль; Bohdan не любить football (канон) | ✅ |
| a37 multi | [0,1] | = | l4 #6 «Is it still true?» | обидві форми в ключі (TQ-144) | ✅ |
| a38 word | didn’t / did not | = | l4 #3, #6 | «Now she loves it» — сказане вже неправда | ✅ |
| a39 gaps | wasn’t; couldn’t; was | = | l4 #3 | «she am», «could not to» неграматичні | ✅ |
| a40 gaps | was reading; couldn’t | = | l4 #3 | ні | ✅ |
| a41 gaps | read; didn’t; was | = | l4 #3 | «reads» не запропоновано (TQ-144). Hint «read → read» давав ключ першого пропуску (п. 17) | ⚠️ → hint — посилання на екран |
| a42 gaps | was writing; couldn’t; could; didn’t | = | l4 #3 | «three friends from her class» разом з «My brother Tom» суперечить канону (Tom молодший брат, не однокласник) | ⚠️ → «two friends from her class and her brother Tom» |
| a43 gaps | told; said | = | l5 #3 | «Ms Lysenko… **He** said» — займенник суперечить імені | ❌ → She (і steps) |
| a44 word | said | = | l5 #3 | told без особи неграматичне | ✅ |
| a45 choice | They said they were… | = | l5 #3, #5 | ні | ✅ |
| a46 pick | [said us] | = | l5 #3 | ні | ✅ |
| a47 gaps | their; was | = | l5 #5 | «our» з погляду Тараса хибне; «is» не запропоновано | ✅ |
| a48 gaps | told; was; said; could | = | l5 #3 | ні | ✅ |
| a49 build | Ms Lysenko told us the library was open on Saturday. | = | l5 #3 | 1956 — лише ключ | ✅ |
| a50 build | Kyrylo said that he liked old maps. | = | l5 #3 | 13699 — лише ключ | ✅ |
| a51 build | Daryna and Zoriana told me they couldn’t come to the meeting. | = | l5 #3, #5 | 109600 — лише ключ | ✅ |
| a52 choice | Orest | = | текст | ні | ✅ |
| a53 multi | [0,2] | = | текст | ні | ✅ |
| a54 choice | “I’m learning a poem.” | = | текст + l4 #3 | ні | ✅ |
| a55 choice | too slow | = | текст | ні | ✅ |
| a56 multi | [0,1] | = | текст | ні | ✅ |
| a57 choice | The new room opens… | = | l6 #5 «A good news article» | ні | ✅ |
| a58 order | 4 речення | = | l6 #5 | ні | ✅ |
| a59 gaps | are being made; told; wanted | = | l6, l5 #3 | ні | ✅ |
| a60 order | 6 речень | = | l6 #5 | «there» і «She also said» фіксують порядок | ✅ |
| a61 word | are | = | l3 #3, l6 | ні | ✅ |
| a62 gaps | is; are; is being | = | l3 #3 | ні | ✅ |
| a63 pick | [change], [is] | = | l3 #3 | ні | ✅ |

**Покриття:** 6 уроків, 63 вправи, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку. У кожної вправи рівнів 2–3 є `hint`. `personalization-qa --pool pe8s3` — без помилок. `validate --pool pe8s3` після правок — 0 помилок, 0 попереджень.

**Пасив:** is / are — за числом, маркер часу є в кожному пропуску з вибором часу ✅. **said / told:** told + особа, said без особи. «said to» в пулі немає ✅. **Reported statements (TQ-144):** у gaps/choice немає варіанта без зсуву часу там, де сказане може бути досі правдою. Дистрактори граматично хибні (were з he/she, am з she, don’t з he, can’t to, couldn’t to). У `word` a35 і a38 контекст показує, що сказане вже неправда. У a37 обидві форми в ключі ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії; CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>_1):

| Слово | CD (UK) | OALD (BrE / NAmE) | Вердикт |
|---|---|---|---|
| newspaper | ˈnjuːzˌpeɪ.pər | /ˈnjuːzpeɪpə(r)/ / /ˈnuːzpeɪpər/ | ✅ |
| reporter | rɪˈpɔː.tər | /rɪˈpɔːtə(r)/ | ✅ |
| article | ˈɑː.tɪ.kəl | /ˈɑːtɪkl/ | ✅ |
| headline | ˈhed.laɪn | /ˈhedlaɪn/ | ✅ |
| journalist | ˈdʒɜː.nə.lɪst | /ˈdʒɜːnəlɪst/ | ✅ |
| website | ˈweb.saɪt | /ˈwebsaɪt/ | ✅ |
| magazine | ˌmæɡ.əˈziːn (UK і US) | BrE /ˌmæɡəˈziːn/, **NAmE /ˈmæɡəziːn/** | ⚠️ у пулі замінено |
| photographer | fəˈtɒɡ.rə.fər | /fəˈtɒɡrəfə(r)/ | ✅ (нове в a06) |
| cartoon | kɑːˈtuːn | /kɑːˈtuːn/ | ✅ (нове в a07) |

  Після правок у кожному наборі `stress` є слово з наголосом не на першому складі, і кожне слово підкреслене `<u>` в уроці e8s3l1 чи раніше ✅.
- **Лексика:** звірив скриптом з g4–g8-e8s2 і e8s3 до `lesson` включно (`bin/lex.mjs`). Лишилися лише shark (sharks — e8s1) і journalists’ (присвійна форма). Слів із пізніших уроків розділу немає ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a04 (фотограф School 5 News — Taras) і a42 (Tom — брат, не однокласник Emma). Решта узгоджена: Andrii — дід у Chernihiv, сестра Sofiia; Bohdan — теніс, не football; Zoriana — IT; Kyrylo — history, Kyiv; Ms Lysenko; Oksana і Dmytro — village school, річка; Halyna; Mariia і Polina — Kharkiv; Ostap — не однокласник; Orest, Yaryna, Myroslava — Lviv; Ms Kvitka — head teacher; Emma — дідусь (cook), Ruby, Oliver. «School 5 News has a new reporter: Orest» (a09) і «Orest said he wanted to try» (a52) — одна історія ✅.
- **BrE:** «8.15 am» (TQ-122/123, як зараз), centre, «the internet» з малої (як в уроці). AmE-правопису, IPA, A/B/C в `opts`, «Listen» немає ✅.
- **Копії уроків** (`bin/ngram.mjs`, 6-грами проти g4–g11): збігаються лише рамки інструкцій («Fill in the gaps», «Sort the sentences… Fact or opinion?») і загальні фрази на кшталт «we don’t know who wrote it» в опціях. Рамок уроку з тим самим ключем немає ✅.
- **Авторське право** (WebSearch з лапками, у цій сесії):

| Фрагмент | Запит | Результат |
|---|---|---|
| a13 «A new bookshop opened in the centre of Poltava on Tuesday» | дослівно в лапках | збігу немає |
| a55 «Our old computer room is being painted, and twenty new desks are being made» | дослівно в лапках | збігу немає |

## 5. Правки (зроблені)
1. a04: «and our [photographer] Yaryna takes the photos» → «and I’m the [photographer]: I take the photos». Hint → «Is it a person or a part of a newspaper? Look at the list “Who makes the news?”.»
2. a06: `ma|ga|+zine` → `pho|+tog|ra|pher`. Hint → «Say the words slowly. Is the strong part in the same place in all three words?». Steps.
3. a07: `ma|ga|+zine` → `car|+toon`, steps.
4. a41: hint → «The verb goes back. Look at the rule screen “Reported statements”.»
5. a42: body → «Emma asked two friends from her class and her brother Tom about books.»
6. a43: «He said» → «She said», steps.
7. `status: "verified"`, `meta.factcheck`, шапка файлу.

## 6. Рекомендовано (поза пулом, урок я не правив)
- e8s3l1, екран `stress`: `ma|ga|+zine` з одним ключем. Наголос magazine в AmE інший (OALD), тож це той самий випадок, що в e6s2l1 (reports/verify/write-eng-pool-g6-e6s2.md, рядок PITFALL в inbox від verifier-pe6s1-pe6s2). Рішення — на розсуд refine чи style-sync.

**Урок за уроком:** l1–l6 ✅. Пул pe8s3 — verified.
