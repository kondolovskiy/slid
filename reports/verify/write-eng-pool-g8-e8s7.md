# Верифікація: пул pe8s7 (англійська, 8 кл., розділ e8s7 «Ukraine: land, climate and people»)

Верифікатор: verifier-pe8s7-pe8s8, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s7.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s7.md. Опора: уроки `content/eng/g8-e8s7.js` (verified) і попередні розділи g4–g8-e8s6. Еталон: reports/verify/write-eng-pool-g8-e8s6.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, других правильних відповідей і граматично правильних дистракторів я не знайшов. Збігів з опублікованими текстами теж немає. Зробив 2 правки у 2 вправах: одна суперечила канону героїв, в одній підказка видавала відповідь. Знахідка поза пулом: в уроці e8s7l3 наголос у слові *continental* підкреслено не на тому складі. Це FIX в inbox, бо урок не мій файл. Людині: нічого блокувального.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. PDF МП-ІМ відкрив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`):
- с. 33 (розд. 5.2.2, 8 кл.): «Україна — Географічне положення, Клімат, Населення, Національності»; «коментувати статистичні [дані]» → l1, l3–l6;
- с. 34: «Articles: another, the other, no article» → l2;
- с. 35: «Prepositions — Simple, complex», «Pronouns — … quantity» → l1 gram (in / to / on), l4 gram (most of / none of).
Усі `src` відповідають сторінкам ✅.

## 2. Факти
Нових фактів пул не додає. Усі вони повторюють verified-уроки: сусіди й сторони світу (l1 #2), Odesa on the Black Sea, площа «more than 600,000 km²», Hoverla 2,061 m (l4 #7, l6 #1), перепис 2001 р.: 48.5 million, two thirds in towns and cities, > 130 nationalities, Ukrainians 77.8 %, < 1 % each для Belarusians і Hungarians, 67.5 % — native language (l5 #2, l6 #2); Hungarians — Zakarpattia, Bulgarians — Odesa region, Crimean Tatars — Crimea (l5 #7); клімат за регіонами (l3 #2, #4). Chernihiv «in the north of Ukraine» — g5-e5s10. Крим — частина України ✅. Населення — лише перепис 2001 р. з роком (TQ-129) ✅. «About a third lived in villages» (a67, a70) — висновок з уроку: 67.2 % у містах (l4 #9), отже ≈ 33 % у селах ✅.
Рядки звірено за reports/verify/write-eng-g8-e8s7.md (там по два джерела). У цій сесії відкрив ще: https://en.wikipedia.org/wiki/2001_Ukrainian_census (> 130 nationalities, 77.8 / 17.3 %), https://jamestown.org/program/census-ukraine-more-ukrainian/ (з пошуку). Офіційний сайт 2001.ukrcensus.gov.ua з цієї сесії не резолвиться.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
Кожну вправу я розв'язав сам і звірив з ключем. `SLID_LANG.check(…, solution, "en")` зараховує всі `solution`. `build` перевірено перебором усіх перестановок підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s7-8/bin/chk.mjs`): a20 і a69 приймають по два порядки, обидва в ключі, решта — по одному. Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 choice | Belarus | = | l1 #2 | — | ✅ |
| a02 sort | 3 / 2 | = | l1 #2 | — | ✅ |
| a03 multi | [0,2,3] | = | l1 #2 | — | ✅ |
| a04 gaps | on; in | = | l1 #5; l3 hint (Odesa — south) | — | ✅ |
| a05 gaps | in; to; to | = | l1 #5; e5s10 (Chernihiv) | — | ✅ |
| a06 pick | [in] → to | = | l1 #5 | — | ✅ |
| a07 word | borders | borders, neighbours | l1 #2, #8 | — | ✅ |
| a08 word | neighbours | = | l1 #0, #8 | «countries» не підходить за змістом («Ukraine’s countries») | ✅ |
| a09 match | 4 пари | = | l1 #2 | перебрав праві — других пар немає | ✅ |
| a10 build | Moldova is to the south-west of Ukraine. | = | l1 #2, #5 | — | ✅ |
| a11 gaps | borders; in; to | = | l1 #2, #5 | — | ✅ |
| a12 build | Taras lives in Lviv, in the west of Ukraine. | = | l1 #5 | — | ✅ |
| a13 sort | 3 / 4 | = | l2 #2 | — | ✅ |
| a14 gaps | Lake Svitiaz; the Carpathians | = | l2 #2 | — | ✅ |
| a15 word | the | = | l2 #5 | — | ✅ |
| a16 choice | I swam in Lake Svitiaz every day. | = | l2 #2 | — | ✅ |
| a17 pick | [the] Kyiv | = | l2 #2 | — | ✅ |
| a18 gaps | Dnipro; the Dnipro; the Black Sea | = | l2 #5 | Oleh (дядько Mariia) живе в Dnipro — нова дрібниця, NOTE | ✅ |
| a19 gaps | the Carpathians; Hoverla | = | l2 #2 | — | ✅ |
| a20 build | We swam in the Black Sea in July. / In July we… | = | l2 #2 | — | ✅ |
| a21 gaps | Hoverla; the Carpathians; the Sea of Azov; Poland; the UK | = | l2 #2 | — | ✅ |
| a22 choice | in Lviv | = | текст | warmest — від warm (відоме слово) | ✅ |
| a23 multi | [0,1] | = | текст | — | ✅ |
| a24 choice | It’s snowing in Lviv today! | = | l3 #2 | — | ✅ |
| a25 sort | 3 / 3 | = | l3 #2 | — | ✅ |
| a26 gaps | wet; mild; continental | = | l3 #4 | — | ✅ |
| a27 word | dry | = | l3 #4 | — | ✅ |
| a28 gaps | milder; less | = | l3 #4 | — | ✅ |
| a29 word | drier | = | l3 #6 | OALD «comparative drier»; CD «drier» | ✅ |
| a30 pick | [gets] | = | l3 #10 | — | ✅ |
| a31 choice | in the west, in the Carpathians | = | l3 #4 | — | ✅ |
| a32 multi | [0,1] | = | l3 #4 | — | ✅ |
| a33 match | 4 пари | = | l3 #4 | перебрав праві — других пар немає | ✅ |
| a34 gaps | cold; continental | = | l3 #2, #4 | — | ✅ |
| a35 build | Odesa has milder winters than Kharkiv. | = | l3 #4, #6 | — | ✅ |
| a36 gaps | warm or hot; colder; wetter; mild | = | l3 #4 | — | ✅ |
| a37 gaps | Most of; None of | = | l4 #4 | — | ✅ |
| a38 gaps | point; million | = | l4 #6 | — | ✅ |
| a39 choice | Most of the pupils… | = | l4 #4 | — | ✅ |
| a40 pick | [per cents] | = | l4 #2 | — | ✅ |
| a41 match | 4 пари | = | l4 #2, #4 | — | ✅ |
| a42 word | a third | a third, one third | l4 #2 | «33 per cent» відсікає умова «in words» | ✅ |
| a43 gaps | thousand; point; quarters | = | l4 #2, #6 | — | ✅ |
| a44 gaps | Half; A quarter; None | = | l4 #2, #4 | **канон:** «Oksana’s English club» — це онлайн-клуб з Taras (живе в Lviv, піднявся на Hoverla в e8s7l2), а в умові «Been to Lviv – 3, climbed Hoverla – 0» | ⚠️ → «Oksana’s eco club» |
| a45 build | Most of the members have been to the Carpathians. | = | l4 #4 | — | ✅ |
| a46 gaps | quarters; Half; per cent; None; us | = | l4 #2, #4 | — | ✅ |
| a47 match | 4 пари | = | l5 #4 (Poles — l5 #2) | — | ✅ |
| a48 word | Bulgarians | = (keepCase) | l5 #4 | — | ✅ |
| a49 gaps | census; population; native language | = | l5 #1, #2, #4 | — | ✅ |
| a50 choice | more than 130 | = | текст | — | ✅ |
| a51 multi | [0,2] | = | текст | — | ✅ |
| a52 choice | About two thirds… | = | l4 #9 (67 % ≈ two thirds) | у hint «Is it close to 66?» майже видає відповідь | ⚠️ → hint на числа перепису |
| a53 stress | <u>Hun</u>gary, U<u>kraine</u> | = | l5 #4 `<u>` | — | ✅ |
| a54 stress | Ukrainian, population, Hungary | = | l5 #4 | — | ✅ |
| a55 stress | nation<u>al</u>ity, Bela<u>rus</u> + ще 3 | = | l5 #4 | — | ✅ |
| a56 gaps | Polish; live | = | l5 #4, #7 | — | ✅ |
| a57 pick | [Poland] | = | l5 #4 | — | ✅ |
| a58 gaps | nationalities; in; Hungarians; live | = | l5 #7 | — | ✅ |
| a59 gaps | nationalities; Ukrainians | = | l5 #2 | — | ✅ |
| a60 build | Many Crimean Tatars live in Crimea. | = | l5 #7 | — | ✅ |
| a61 build | Zofia is Polish, and she lives in Poland. | = | l5 #4 | — | ✅ |
| a62 choice | the height of Hoverla | = | текст, l4 #7 | — | ✅ |
| a63 multi | [0,1] | = | текст | — | ✅ |
| a64 choice | There is no year… | = | l6 #3 | — | ✅ |
| a65 gaps | According to; less than | = | l6 #3 | — | ✅ |
| a66 word | more than | more than, over | l6 #3 | — | ✅ |
| a67 pick | [third] | = | l6 #2, #8 | — | ✅ |
| a68 gaps | according to; 2001 | = | l6 #3; l5 #1 | — | ✅ |
| a69 build | In 2001, less than 1 per cent of the people were Hungarians. (+ 2-й порядок) | = | l6 #3 | — | ✅ |
| a70 gaps | borders; more than; According to; villages; than | = | l6 #2, #3 | — | ✅ |

**Покриття:** 6 уроків, 70 вправ, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку. У вправ рівнів 2–3 є `hint`. Артиклі з назвами — за l2 #2 і #5. Протиставлення north of / to the north of у пулі немає: тут лише *to the north of* (як в e8s7), *in the north of* — для місць усередині країни. half / half of: варіанти в gaps точні, «Half (of)» не є хибним варіантом ✅. per cent / percent: *percent* ніде не хибний ✅. population is / are не оцінюється ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії, CD https://dictionary.cambridge.org/dictionary/english/<word>): Hungary «ˈhʌŋ.ɡər.i»; Ukraine «juːˈkreɪn»; Ukrainian «juːˈkreɪ.ni.ən»; population «ˌpɒp.jəˈleɪ.ʃən»; nationality «ˌnæʃ.ənˈæl.ə.ti»; Belarus «ˌbel.əˈruːs». Усі ключі `stress` правильні. Кожне слово підкреслене `<u>` в e8s7l5 #4. Розбіжностей BrE / AmE у наголосі немає.
- **drier:** OALD https://www.oxfordlearnersdictionaries.com/definition/english/dry_1 «(comparative drier, superlative driest)»; CD /dry «drier | driest» ✅.
- **Знахідка в уроці (FIX в inbox, не мій файл):** e8s7l3, екран «Weather or climate?», `con<u>ti</u>nental`. Правильно — conti<u>nen</u>tal: CD «ˌkɒn.tɪˈnen.təl», OALD https://www.oxfordlearnersdictionaries.com/definition/english/continental_1 «/ˌkɒntɪˈnentl/», Wiktionary https://en.wiktionary.org/wiki/continental «/ˌkɒntɪˈnɛntl̩/». У pe8s7 слова *continental* у `stress` немає. Як це вплинуло на pe8s8 a06 — див. звіт pe8s8.
- **Лексика** (`bin/lex.mjs` проти g4–g8-e8s6 і e8s7 до `lesson`): незнайомих слів немає, крім warmest (від warm) ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a44. Решта узгоджена з каноном: Oksana і дядько Ivan в Odesa в липні; бабуся й дідусь Andrii в Chernihiv; Taras — Lviv; Zlata і Lake Svitiaz; Mariia — Kharkiv, penfriend Zofia (Poland); Daryna — geography club, тітка в Odesa; Bohdan — теніс; Ms Lysenko, Zoriana, Kyrylo — клас Andrii. Шаховий клуб у школі Taras (a42) канону не суперечить.
- **BrE, без звуку:** per cent, neighbours, Mum. AmE, IPA, A/B/C і «Listen» у пулі немає ✅.
- **Копії уроків** (`bin/ngram.mjs`): збігаються лише рамки інструкцій і факти інфо-екранів ✅.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a23 «In Kyiv, summers are usually hot, and winters are cold. I often visit my aunt in Odesa» | у лапках | збігу немає (лише кліматичні сайти) |

## 5. Правки (зроблені)
1. a44 body: «Oksana’s English club» → «Oksana’s eco club».
2. a52 hint → «Is 67.5 more or less than half? Remember the census numbers about towns and cities.»
3. `status: "verified"`, `meta.factcheck`, шапка.

Рекомендовано (inbox, не мій файл): FIX e8s7l3 `con<u>ti</u>nental` → `conti<u>nen</u>tal`.

## 6. Прогін
- `node tools/validate.mjs --pool pe8s7` після правок: 0 помилок, 0 попереджень.
- `node tools/personalization-qa.mjs --pool pe8s7`: 6 уроків, 70 вправ, без прогалин.
- `node tools/euphony.mjs --pool pe8s7`: 0 відхилень.
- Повторний `check` після правок: усі `solution` зараховуються.
- Браузерний прогін (`test-answer-ui.py`) — лише в CI.

**Вердикт по пулу: verified.**
