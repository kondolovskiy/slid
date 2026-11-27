# Верифікація: пул pe6s2 (англійська, 6 кл., розділ e6s2 «Shopping and money»)

Верифікатор: verifier-pe6s1-pe6s2 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s2.js` (63 вправи a01–a63) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s2.md. Опора — лише уроки content/eng/g6-e6s2.js (verified, reports/verify/e6s2.md), раніший g6-e6s1 і e4/e5. Еталон — reports/verify/pe5s1.md.

**Вердикт: пул придатний, `status: "verified"`.** Я зробив 4 мінімальні правки:
- 2 вправи `pick` мали друге правильне місце помилки (a25, a56);
- 1 вправа брала слово з пізнішого уроку (a49, size з l6);
- 1 підказка вводила в оману (a18).

Неправильних ключів немає.

**Окрема знахідка в уроці (урок я не правив):** у e6s2l1 є `stress` `mag|a|+zine` з одним ключем. Наголос magazine у BrE і AmE різний (§2). Рядок PITFALL/QUESTION записав в inbox; рішення — за автором уроку чи людиною.

## 1. Програма (`src`): PDF відкрито в цій сесії

PDF: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Я завантажив його заново, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 збігається з facts/eng.md. Сторінки прочитав через `pdftotext`.

| `src` | Що на сторінці (дослівно) | Вердикт |
|---|---|---|
| mpim с. 20 (vocab, read, phon l1; func l4) | «Покупки»; підтеми «Відвідування магазинів», «Види магазинів», «Асортимент товарів», «Гроші» | ✅ |
| mpim с. 21 (gram l2, l3, l6; write l3, l6; func l5, l6) | «Modifying: … with ‘too’»; «Subordinated: if, time, purpose»; «Quantity: all, both, a few, some, any, no…»; «Can: permission»; «Could: abilities, requests»; «Future with will and shall: … plans, intentions…» | ✅ |
| `sources` | `program: true`, сигла `mpim`, title і url — як у facts/eng.md | ✅ |

## 2. Форми й наголос: словники відкрито в цій сесії (curl)

| Слово | CD (UK / US) | OALD (BrE / NAmE) | Вердикт |
|---|---|---|---|
| butcher (a07) | ˈbʊtʃ.ə / ˈbʊtʃ.ɚ (https://dictionary.cambridge.org/dictionary/english/butcher) | /ˈbʊtʃə(r)/ / /ˈbʊtʃər/ (https://www.oxfordlearnersdictionaries.com/definition/english/butcher_1) | ✅ +butch\|er; `<u>` — e6s2l1 #3 |
| potato (a07, a09) | pəˈteɪ.təʊ / pəˈteɪ.t̬oʊ (…/english/potato) | /pəˈteɪtəʊ/ (…/definition/english/potato) | ✅ po\|+ta\|to; `<u>` — e5s3 (раніший урок) |
| newsagent (a08, a09) | ˈnjuːzˌeɪ.dʒənt / ˈnuːzˌeɪ.dʒənt (…/english/newsagent) | /ˈnjuːzeɪdʒənt/ / /ˈnuːzeɪdʒənt/ (…/definition/english/newsagent) | ✅; `<u>` — e6s2l1 #3 |
| assistant (a08) | əˈsɪs.tənt (…/english/assistant) | /əˈsɪstənt/ (…/definition/english/assistant_1) | ✅; `<u>` — e4s4 |
| greengrocer (a08) | ˈɡriːŋ.ɡrəʊ.sə / ˈɡriːŋ.ɡroʊ.sɚ (…/english/greengrocer) | /ˈɡriːnɡrəʊsə(r)/ (…/definition/english/greengrocer) | ✅; `<u>` — e6s2l1 #3 |
| chemist (a09) | ˈkem.ɪst (…/english/chemist) | /ˈkemɪst/ (…/definition/english/chemist) | ✅; `<u>` — e6s2l1 #3 |
| toothpaste (a09) | ˈtuːθ.peɪst (…/english/toothpaste) | /ˈtuːθpeɪst/ (…/definition/english/toothpaste) | ✅; `<u>` — e4s5 |
| **magazine (урок e6s2l1 #6)** | UK ˌmæɡ.əˈziːn, US ˌmæɡ.əˈziːn (https://dictionary.cambridge.org/dictionary/english/magazine) | **BrE /ˌmæɡəˈziːn/, NAmE /ˈmæɡəziːn/** (https://www.oxfordlearnersdictionaries.com/definition/english/magazine) | ⚠️ у пул не взято (правильно); див. нижче |
| dear (a54, ключ) | — | «(British English) expensive; costing a lot of money» (https://www.oxfordlearnersdictionaries.com/definition/english/dear_1) | ✅ друга правильна в ключі |
| newsagent’s, greengrocer’s (a03, a06) | — | «newsagent’s (plural newsagents) (British English also paper shop) a shop that sells newspapers, magazines, sweets»; «greengrocer’s (plural greengrocers) a shop that sells fruit and vegetables» (…/definition/english/newsagent, …/greengrocer) | ✅ ключі з ’s, без ’s і «… shop» |

**Magazine (PITFALL автора — оцінка).** BrE-наголос на останньому складі однозначний в обох словниках: CD дає ˌmæɡ.əˈziːn і для UK, і для US, OALD BrE — /ˌmæɡəˈziːn/. Тож ключ уроку `mag|a|+zine` за нормою BrE не хибний. Але OALD для NAmE дає наголос на першому складі /ˈmæɡəziːn/, і Wiktionary (https://en.wiktionary.org/wiki/magazine) теж подає обидва варіанти. Це той самий випадок, що weekend у pitfalls-content.md п. 19: «stress — лише слова з одним словниковим наголосом (CD + OALD)». Дитина, яка чула AmE, позначить перший склад і отримає «неправильно». Це суперечить D-055 (доповнення п. 1: AmE у відповіді дитини — не помилка).
- **Знахідка ⚠️ в уроці e6s2l1, екран #6 (`stress`):** magazine з одним ключем.
- Пропозиція автору уроку: замінити magazine словом з одним наголосом не на першому складі. Тоді треба підкреслити його в info #3, бо там усі інші підкреслені слова мають наголос на першому складі.
- Інший варіант (рішення людини): лишити слово з поясненням «In British English…» у fbText. Але `stress` має один ключ, тож AmE-відповідь однаково буде «неправильно».
- Рядок в inbox записано. Пул це слово правильно не бере.

## 3. Факти (джерела відкрито в цій сесії)

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| ₴50, ₴100, ₴200 — банкноти (a32, a34, a36, a38, a41, a42) | https://en.wikipedia.org/wiki/Ukrainian_hryvnia (поточна серія: ₴20, 50, 100, 200, 500, 1000); https://epravda.com.ua/news/2023/10/16/705520/ і https://novyny.live/ekonomi/v-ukraine-ostalis-kupiury-shesti-nominalov-kakie-grivny-eshche-v-khodu-315443.html/amp (цільовий ряд НБУ: банкноти 20–1000 грн, монети до 10 грн; через WebSearch) | ✅ |
| £10 — банкнота (a32, a39) | https://en.wikipedia.org/wiki/Bank_of_England_note_issues («£5, £10, £20, and £50»); https://www.bankofengland.co.uk/banknotes/current-banknotes (через WebSearch: «four denominations in circulation, £5, £10, £20 and £50») | ✅ |
| 50p — монета (a32) | https://en.wikipedia.org/wiki/Coins_of_the_pound_sterling (1p…50p, £1, £2); https://www.bankofengland.co.uk/banknotes/uk-notes-and-coins (через WebSearch: монети карбує Royal Mint) | ✅ |
| Арифметика решти (a34, a36, a38, a39, a40, a41, a42) | перерахував: 50−30=20; 100−60=40; 50−35=15; 10−6.40=3.60; 3−2.30=0.70; 100−(70+20)=10; 120+80=200 | ✅ |

Хости bankofengland.co.uk і bank.gov.ua сесія не резолвить (WebFetch/curl). Сторінку BoE я бачив лише через WebSearch, сайт НБУ не відкрив. Герої звірені з каноном glossary/eng-heroes.md: у родині Taras шість людей (батьки, два брати, Zlata, Taras; a26); Grandma Hanna — бабуся Oksana; Harry — продавець у newsagent’s; Mariia має бабусю без імені (a20); Taras — шкільний фотограф (a19). Суперечностей немає.

## 4. Завдання: моє розв'язання → опора (D-019) → друга відповідь → вердикт

Кожну вправу я розв'язав сам, перш ніж дивитися на ключ. Скриптом (`SLID_LANG.check(…, "en")`) я перебрав для 6 `build` усі впорядковані підмножини `tiles ∪ extra`, разом 249 211 станів. Приймаються лише ключі. Граматичні порядки поза ключем перебрав вручну. Ключі `word` і кандидатів перевірив через `wordVerdict`: «greengrocers» і «newsagents» без апострофа дають «Almost: check the spelling». Це прийнятно, бо OALD подає форму з ’s і такий самий ключ має урок l1 #8. `solution` проходить `check` для всіх 63 вправ.
Лексику перевірив скриптом проти e4/e5, e6s1 і e6s2 до уроку вправи. Поза набором лишилися newspaper, newsagent, greengrocer (форми), bakeries (l1: bakery), ninety, jumpers і **size (a49, l5; уперше з'являється в l6)** — виправлено.
Копії шукав за 6-грамами проти g4…g11 і dge*. Знайшлися лише формули («Why are you going to the…», «How much change does he get?», «Can I help you?», «Could I try it on, please?» — цільова фраза l5), а не речення з тим самим ключем.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 match | butcher’s / chemist’s / newsagent’s / baker’s / greengrocer’s | l1 #3 | перебрав усі праві: ні | ✅ |
| a02 choice | newsagent’s | l1 #3 (sweets) | ні | ✅ |
| a03 word | greengrocer’s | l1 #3, #8 | greengrocer, greengrocer’s shop — у ключі; «small shop … only» відсікає supermarket | ✅ |
| a04 pick | medicine, toothpaste | l1 #3 | ні | ✅ |
| a05 sort | 2 / 3 / 3 | l1 #3 | ні | ✅ |
| a06 word | newsagent’s | l1 #3 | як a03 | ✅ |
| a07–a09 stress | §2 | l1 #3, e4s4, e4s5, e5s3 | — | ✅ (в a07, a08, a09 є слово з іншим наголошеним складом) |
| a10 choice | bread | текст + l1 #3 | ні | ✅ |
| a11 multi | 0, 2 | текст + l1 #3 | ні | ✅ |
| a12 choice | baker’s, butcher’s, chemist’s | l1 #3 | ні | ✅ |
| a13 gaps | to buy, to get | l2 #3 | ні | ✅ |
| a14 match | 3 пари | l2 #3, l1 #3 | ні | ✅ |
| a15 build | Dmytro goes to the shop to buy some juice. | l2 #3, #6 | «To buy… Dmytro goes…» відсікає keepCase; інших граматичних порядків немає | ✅ |
| a16 word | get | l2 #3 | buy — у ключі | ✅ |
| a17 pick | buys | l2 #3 | ні | ✅ |
| a18 gaps | To buy, to get | l2 #3 | «Buying» як відповідь на Why? — ні | ✅; **підказку уточнено**: «in the question and in the answer» — другий пропуск не в питанні |
| a19–a21 | to buy a magazine / 0, 2 / to buy a pen | тексти | ні | ✅ |
| a22 gaps | any, no | l3 #3 | ні | ✅ |
| a23 choice | Both bakeries sell cakes. | l3 #6; bakery — l1 #3 | ні | ✅ |
| a24 word | no | l3 #3 | ні | ✅ |
| a25 pick | no | l3 #3 | **Так.** Пара haven’t … no виправляється з обох боків: «We have got no potatoes» = «We haven’t got any» — обидві форми є в l3 #3. Тап на haven’t теж правильний → ❌. Правка: у body «Keep haven’t got.», hint — «Look at the rule: no = not any.» | ✅ після правки |
| a26 gaps | All, Both, no, a few | l3 #3, #5 | ні | ✅ |
| a27 pick | the | l3 #5 («Not: the both shops») | Без «both» вийде «goes to the shops», але так зникає цільове слово, а урок називає помилкою саме the. Підказка веде до слів перед both. Прийнято | ✅ |
| a28 gaps | a few, some, a | l3 #3, #8 (some bread) | ні | ✅ |
| a29 build | обидва порядки | l3 #3, #7 | обидва в ключі; «any» неграматичне | ✅ |
| a30 gaps | no, a few, both, all | l3 #3, #5 | ні | ✅ |
| a31 match | 4 пари | l4 #3 | ні | ✅ |
| a32 gaps | coin, note, note | l4 #3 | ні | ✅ |
| a33 word | twenty | l4 #3 | 20 — у ключі | ✅ |
| a34 word | change | l4 #3 | ні | ✅ |
| a35 gaps | are, cost | l4 #6 | ні | ✅ |
| a36 choice | ₴40 | l4 #5 | ні | ✅ |
| a37 build | How much do these sweets cost? | l4 #6, #7 | ні | ✅ |
| a38 word | 15 | l4 | fifteen — у ключі | ✅ |
| a39 gaps | is, note, change | l4 #3, #6 | ні | ✅ |
| a40–a42 | Ruby’s change / ₴10 / 0, 2 | тексти + l4 | ні | ✅ |
| a43 match | 4 пари | l5 #3, #4 | бієкція однозначна | ✅ |
| a44 choice | Yes, please. I’m looking for… | l5 #3 | ні | ✅ |
| a45 word | on | l5 #3 | ні | ✅ |
| a46 build | Have you got this jumper in green? | l5 #3 | ні | ✅ |
| a47 gaps | Yes, please; Could I | l5 #3, #6 | «No, thanks. I need a raincoat» суперечить змістові. Прийнято | ✅ |
| a48 choice | Have you got it in red? | l5 #3 | ні | ✅ |
| a49 choice | trainers | текст | ні | ✅; **«What size? Size 39.» → «What colour? Black, please.»** (size уперше в l6) |
| a50 multi | 1, 3 | текст | ні | ✅ |
| a51 choice | to the changing room | l5 #3 | ні | ✅ |
| a52 gaps | big, small | l6 #3 | ні | ✅ |
| a53 choice | The coat is too long. | l6 #3 | ні | ✅ |
| a54 word | expensive | l6 #3 | dear — у ключі | ✅ |
| a55 build | Is this jacket too small? | l6 #3 | розповідне відсікає keepCase «Is» | ✅ |
| a56 pick | very | l6 #3 | **Так.** Друге одне слово виправляє повідомлення: «These boots are very big. I **can** walk in them!» (very big → maybe OK, l6 #3) → ❌. Правка: проблему винесено в body («Emma can’t walk in her new boots. They’re big, and it’s a problem.»), hint — навігація до правила very / too | ✅ після правки |
| a57 gaps | too expensive, too | l6 #3 | ні | ✅ |
| a58 choice | The red one is too expensive. | l6 #7 | ні | ✅ |
| a59 build | I’ll take the black one because the green one is too small. | l6 #7 | Обмін «the black one» і «the green one» граматичний, але body відсікає (green too small). «because…» на початку відсікає keepCase. Кому перед because BrE допускає й без неї | ✅ |
| a60 gaps | the yellow one, expensive, small | l6 #7 | ні | ✅ |
| a61 pick | to | l6 #3 | ні | ✅ |
| a62 word | too | l6 #3 | very відсікає умова «Write too or to» | ✅ |
| a63 gaps | to, too, too expensive | l6 #3 | ні | ✅ |

**Спірне від автора.**
1. a56: в авторській редакції не однозначна (тап на can’t). Виправлено.
2. a47: прийнято.

## 5. Педагогіка, BrE, підказки, авторське право
- BrE (chemist’s, newsagent’s, jumper, trainers, pounds/pence) витримано, AmE немає. A, B, C, IPA, «Listen» і `uk` немає.
- `steps` і `hint` — англійською рівня 6 кл. Підказки не видають відповіді (a18 і a56 уточнено).
- Українська реальність: ліки продають лише в аптеці (a11 — chemist’s у сусідній вулиці). Аеропортів у сюжетах немає.
- Авторське право (WebSearch з лапками):

| Фрагмент | Результат |
|---|---|
| a21 «Tom needs a new pen for school, so he’s going to the newsagent’s» | збігів немає |
| a42 «I’m at a bookshop in Poltava. I want a book for» | збігів немає |

## 6. Правки (зроблені)
1. a18 — `hint`: «Why? → to + verb. Check both gaps.»
2. a25 — `body` + «Keep haven’t got.»; `hint`: «Look at the rule: no = not any.»
3. a49 — діалог: «What colour? / Black, please.» замість size.
4. a56 — `body` з фактом проблеми; `hint`: «A problem: look at the rule about very and too.»
5. `status: "verified"`, `meta.factcheck` — цей звіт.

**Рекомендовано (не в пулі):** урок e6s2l1 #6 — замінити magazine у `stress` (§2), рядок в inbox.

`node tools/validate.mjs --pool pe6s2`: 0 помилок, 0 попереджень. `node tools/personalization-qa.mjs --pool pe6s2`: зауважень немає. Build я не запускав.

## 7. Вердикт
Уроки e6s2l1–e6s2l6 покриті, на кожен урок є 9–12 вправ рівнів 1–3. Відкритих ❌ і ⚠️ у пулі немає. Пул pe6s2 → **verified**. Відкрита ⚠️ — в уроці e6s2l1 (magazine), поза межами цієї задачі.
