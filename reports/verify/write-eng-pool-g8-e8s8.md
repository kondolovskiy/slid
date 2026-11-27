# Верифікація: пул pe8s8 (англійська, 8 кл., розділ e8s8 «English-speaking countries: land, climate and people»)

Верифікатор: verifier-pe8s7-pe8s8, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s8.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s8.md. Опора: уроки `content/eng/g8-e8s8.js` (verified), e8s7 і попередні розділи g4–g8. Еталон: reports/verify/write-eng-pool-g8-e8s6.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів у пулі немає. Second Conditional перевірено: were і was обидва в ключі, would / could / might у головному реченні теж у ключі. north of / in the north of розрізняються правильно. Збігів з опублікованими текстами немає. Зробив 11 правок в 11 вправах:
- 2 `match` мали другу доречну пару;
- 1 `stress` без опори: в уроці e8s7l3 наголос у слові *continental* підкреслено на хибному складі;
- 8 підказок видавали порядок плиток або розв'язували пропуски.

Людині нічого блокувального.

## 1. Програма, `src`
PDF МП-ІМ відкрив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25…):
- с. 32 (після заголовка «5.2.2. 8-ий клас»): «аргументувати власний [вибір]» → l6 func;
- с. 33: «Країни виучуваної мови — Географічне положення, Клімат, Населення, Національності» → l1–l3;
- с. 34: «Comparatives: with ‘(so) much’, ‘a (little) bit’» → l4; «main clause with 'could' + 'if' + past simple for an imagined situation» → l6 gram / write;
- с. 35: «Past simple: … imagined situations after ‘if’», «Would: imagined situations…» → l5.

Усі `src` відповідають сторінкам ✅.

## 2. Факти
Нових фактів пул не додає. Усі вони повторюють verified-уроки e8s8 (і e8s7):
- **Положення:** Canada — North America, north of the USA; NZ — two big islands in the Pacific, east of Australia; Ireland — west of Great Britain.
- **Клімат:** l2 #4.
- **Мови:** official languages Canada / Ireland.
- **Площі:** Canada almost 10 million km², Australia ≈ 7.7 million, the UK ≈ 240,000, Ireland ≈ 70,000.
- **Населення з роком:** the UK ≈ 67 million (2021), Canada ≈ 37 million (2021), Ireland ≈ 5.1 million (2022), NZ ≈ 5 million (2023).
- **Canberra — столиця:** g5-e5s10.

Рядки звірено за reports/verify/write-eng-g8-e8s8.md (там по два джерела). У цій сесії додатково відкрив (з пошуку):
- https://www12.statcan.gc.ca/census-recensement/stats/statind2021.cfm — Canada 2021: 36,991,981;
- https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresults/ — Ireland 2022: 5,149,139;
- https://stats.govt.nz/assets/Infographics/2023-Census-infographics/2023-Census-infographics-National.pdf — NZ 2023: 4,993,923.

Усі ✅. Похідні висновки — теж ✅: Great Britain east of Ireland (a11), Australia west of New Zealand (a12), the USA south of Canada (a08).

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
Кожну вправу я розв'язав сам і звірив з ключем. `check(solution)` зараховує всі вправи. `build` перевірено перебором усіх перестановок tiles + extra: a57 приймає два порядки, обидва в ключі, решта — по одному. Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 choice | in the Pacific, east of Australia | = | l1 #2 | — | ✅ |
| a02 sort | 3 / 3 | = | l1 #2, #8 (Ireland — north-west of Europe) | — | ✅ |
| a03 multi | [0,1] | = | l1 #2 | — | ✅ |
| a04 stress | island, Australia | = | l1 #4 | — | ✅ |
| a05 stress | continent, Ukraine, Canada | = | l1 #4; e8s7l5 | — | ✅ |
| a06 stress | continent, continental, … | = | l1 #4; e8s7l5 | **continental:** ключ «nen» правильний за словником, але в єдиному місці, де слово підкреслено (e8s7l3), підкреслено con<u>ti</u>nental. Опори немає, учень з уроку відповість «ti». hint «Continent and continental… Is the strong part the same?» | ❌ → прибрав continental, hint на екрани |
| a07 gaps | in the north of; north of | = | l1 #5; e5s10 | — | ✅ |
| a08 choice | south of | = | l1 #5 + міркування | — | ✅ |
| a09 pick | [in the east of] | = | l1 #5 | — | ✅ |
| a10 gaps | Canada; North America | = | l1 #0, #2 | — | ✅ |
| a11 build | Great Britain is east of Ireland. | = | l1 #2, #5 | — | ✅ |
| a12 gaps | continent; west of; Pacific; in Eastern Europe | = | l1 #2, #5 | — | ✅ |
| a13 choice | Dec–Feb | = | l2 #4 | — | ✅ |
| a14 match | 4 пари | = | l2 #4; e8s7l3 | друга пара: Ukraine ↔ «Its west gets more rain than its east» правдива за e8s7l3 (найбільше опадів на заході, найменше на південному сході) | ❌ → UK: «It has a mild climate, and its west gets more rain than its east.» |
| a15 multi | [0,2] | = | l2 #4 | — | ✅ |
| a16 gaps | snowy; dry | = | l2 #2 | — | ✅ |
| a17 word | desert | = | l2 #2, #7 | — | ✅ |
| a18 sort | 3 / 3 | = | l2 #2, #6 | — | ✅ |
| a19 gaps | weather; climate; desert | = | l2 #2, #7 | — | ✅ |
| a20 choice | in Dublin | = | текст | — | ✅ |
| a21 multi | [0,2] | = | текст | — | ✅ |
| a22 choice | Usually our summers aren’t very hot. | = | l2 #2 | — | ✅ |
| a23 match | 5 пар | = | l3 #0, #2 | друга пара: Wales ↔ British (l3 #0 «Isla and Owen are British: … Owen is Welsh») | ❌ → прибрав пару Wales / Welsh (Welsh тренують a24, a26) |
| a24 gaps | a Canadian; the Welsh; Australians | = | l3 #2 | — | ✅ |
| a25 word | Zealanders | = (keepCase) | l3 #2, #5 | Lily — з l3 #5 | ✅ |
| a26 choice | Owen is Welsh. | = | l3 #2, #3 | — | ✅ |
| a27 pick | [a British] | = | l3 #4 | — | ✅ |
| a28 gaps | Irish; Irish; a Welsh boy | = | l3 #3, #6 | — | ✅ |
| a29 choice | English and French | = | l3 #6 | — | ✅ |
| a30 gaps | Canada; Ireland | = | l3 #6 | — | ✅ |
| a31 multi | [0,1] | = | l3 #2, #6; e5s10 | — | ✅ |
| a32 gaps | Australian; Australia | = | l3 #2 | — | ✅ |
| a33 build | Owen is Welsh, and Liam is Irish. | = | l3 #0 | — | ✅ |
| a34 gaps | a New Zealander; New Zealand; English; British; Irish | = | l3 #2, #6 | — | ✅ |
| a35 choice | the UK | = | дані | — | ✅ |
| a36 multi | [0,1] | = | дані | — | ✅ |
| a37 choice | The UK is much smaller than Canada, but it has more people. | = | l4 #2 | — | ✅ |
| a38 gaps | much; a bit | = | l4 #2 | — | ✅ |
| a39 word | much | much, a lot, far, very much | l4 #2 | — | ✅ |
| a40 pick | [big] | = | l4 #2 | — | ✅ |
| a41 gaps | much; a bit | = | l4 #2 | — | ✅ |
| a42 build | Ireland is much smaller than Canada. | = | l4 #2, #5 | — | ✅ |
| a43 gaps | much; million; a bit; bigger | = | l4 #2; e8s7l4 | — | ✅ |
| a44 gaps | lived; would | = | l5 #2 | could / might серед варіантів немає | ✅ |
| a45 word | were | were, was | l5 #5 | — | ✅ |
| a46 choice | If Andrii had a boat, he would… | = | l5 #2 | hint «Find the Past Simple after if and would in the other part» описував правильний варіант | ⚠️ → hint на екран |
| a47 word | would | would, could, might | l5 #2; l6 #2 | — | ✅ |
| a48 pick | [would have] | = | l5 #2 | — | ✅ |
| a49 gaps | were; would go; had | = | l5 #2, #5 | hint «After if: the Past Simple. In the other part: would + verb» механічно розв'язував усі три пропуски | ⚠️ → hint на екрани |
| a50 gaps | lived; would draw | = | l5 #2 | — | ✅ |
| a51 build | If I were in Australia, I’d go to the beach. | = | l5 #5 | hint «If + I + were…, I’d + verb» задавав увесь порядок плиток | ⚠️ → hint на екран |
| a52 gaps | lived; would see; were; would show; had | = | l5 #2, #5 | hint — та сама формула, що в a49 | ⚠️ → hint на екрани |
| a53 choice | If I could visit any country, I’d choose Ireland. | = | l6 #2 | chose — лише хибна форма | ✅ |
| a54 pick | [will] | = | l6 #2 | — | ✅ |
| a55 multi | [0,2,4] | = | l6 #2, #6 | — | ✅ |
| a56 gaps | would; wouldn’t | = | l6 #2, #7 | — | ✅ |
| a57 build | Which city would you visit first? (+ «first visit») | = | l6 #2 | hint «Which city + would + you + verb…» задавав порядок | ⚠️ → hint на екран |
| a58 choice | Yes, I would. I love snow! | = | l6 #2, #7 | — | ✅ |
| a59 gaps | came; would; I’d | = | l5 #2; l6 #2, #5 | hint «No would after if… Answer with the same verb» відкидав дистрактор і видавав 3-й пропуск | ⚠️ → hint на екрани |
| a60 gaps | would; were | = | l6 #2; l5 #5 | — | ✅ |
| a61 build | If I could choose, I’d visit New Zealand. | = | l6 #2 | hint «If + I + could…, I’d + verb» задавав порядок | ⚠️ → hint на екран |
| a62 gaps | were; could; colder; Would | = | l5 #5; l6 #2; l4 #2 | hint «if + Past Simple; would or could…; much + comparative» розв'язував усі пропуски | ⚠️ → hint на екрани без формул |

**Покриття:** 6 уроків, 62 вправи, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку. У вправ рівнів 2–3 є `hint`.
- **Second Conditional:** would після if і will / can / Past Simple в головному реченні — лише хибні варіанти. Жоден з них не граматичний у своєму контексті ✅.
- **Сторони світу:** «to the north of» у варіантах і ключах `word` немає ✅.
- **Nationality words:** a / the / -s — за l3 #2 ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії, CD https://dictionary.cambridge.org/dictionary/english/<word>):
  - island «ˈaɪ.lənd»;
  - Australia «ɒsˈtreɪ.li.ə»;
  - continent «ˈkɒn.tɪ.nənt»;
  - Canada «ˈkæn.ə.də»;
  - Ukraine «juːˈkreɪn»;
  - population «ˌpɒp.jəˈleɪ.ʃən»;
  - continental «ˌkɒn.tɪˈnen.təl»; OALD https://www.oxfordlearnersdictionaries.com/definition/english/continental_1 «/ˌkɒntɪˈnentl/»; Wiktionary https://en.wiktionary.org/wiki/continental «/ˌkɒntɪˈnɛntl̩/».

  Ключі, що лишилися після правок, правильні, і на кожне слово є опора в уроках (e8s8l1 #4, e8s7l5 #4).
- **Знахідка в уроці (FIX в inbox):** e8s7l3 `con<u>ti</u>nental` → `conti<u>nen</u>tal`. Після виправлення уроку *continental* можна повернути в a06 (окремою правкою).
- **Лексика** (`bin/lex.mjs` проти g4–g8-e8s7 і e8s8 до `lesson`): незнайоме лише *chose* у дистракторі a53. Це хибна форма, відповідь від неї не залежить ✅.
- **Канон героїв:** розбіжностей немає:
  - Maksym — Ottawa, вчить French;
  - Liam — Dublin, вчить Irish;
  - Chloe — Canberra;
  - Isla — Edinburgh;
  - Owen — Cardiff / Wales;
  - Lily — Wellington (e8s8l3);
  - Bohdan любить сніг;
  - Daryna мріє про New Zealand, Zoriana — про Australia;
  - Mariia малює й грає на гітарі;
  - Taras — фотограф;
  - Oksana — Zelena Dolyna.

  Нова дрібниця: Andrii і дідусь рибалять (a46, умовно — «if he had a boat»). Канону вона не змінює.
- **BrE, без звуку:** AmE, IPA, A/B/C і «Listen» у пулі немає ✅.
- **Копії уроків** (`bin/ngram.mjs`): збігаються лише рамки інструкцій і факти інфо-екранів ✅.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a21 «It’s very windy and wet in Edinburgh today. I wanted to go to the park» | у лапках | збігу немає (новини про погоду) |

## 5. Правки (зроблені)
1. a06 words: прибрано `con|ti|+nen|tal`. hint → «Remember the stress screen in this lesson and the box “Countries and nationalities”.» steps узгоджено.
2. a14: правий для UK → «It has a mild climate, and its west gets more rain than its east.»
3. a23: прибрано пару Wales / Welsh; steps узгоджено.
4. a46 hint → «Look at the screen “The Second Conditional”.»
5. a49 hint → «Look at the screens “The Second Conditional” and “If I were…”.»
6. a51 hint → «Look at the screen “If I were…”.»
7. a52 hint → «Is it real or imagined? Look at the screens “The Second Conditional” and “If I were…”.»
8. a57 hint → «Look at the screen “Questions, could and short answers”.»
9. a59 hint → «Look at the screens “The Second Conditional” and “Questions, could and short answers”.»
10. a61 hint → «Look at the screen “Questions, could and short answers”.»
11. a62 hint → «The trip is imagined. Look at the screens about the Second Conditional and about much + comparative.»
12. `status: "verified"`, `meta.factcheck`, шапка.

## 6. Прогін
- `node tools/validate.mjs --pool pe8s8` після правок: 0 помилок, 0 попереджень.
- `node tools/personalization-qa.mjs --pool pe8s8`: 6 уроків, 62 вправи, без прогалин.
- `node tools/euphony.mjs --pool pe8s8`: 0 відхилень.
- Повторний `check` після правок: усі `solution` зараховуються.
- Браузерний прогін — лише в CI.

**Вердикт по пулу: verified.**
