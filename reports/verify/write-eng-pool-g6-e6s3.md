# Верифікація: пул pe6s3 (англійська, 6 кл., розділ e6s3 «Food traditions and dishes»)

Верифікатор: verifier-pe6s3-pe6s4 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s3.js` (автор writer-pe6s3, 68 вправ a01–a68) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s3.md. Зміст звіряв з уроками `content/eng/g6-e6s3.js` (verified, reports/verify/e6s3.md) і раніших класів. Еталон — reports/verify/pe5s10.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і завдань без опори я не знайшов. Зробив 3 мінімальні правки (a07, a57, a68), id вправ не змінював, їх і далі 68. Питань до вчителя немає, TQ не створював.

## 1. Схема, джерело, покриття

| Що | Результат |
|---|---|
| `node tools/validate.mjs --pool pe6s3` | 0 помилок, 0 попереджень (до правок і після) |
| `personalization-qa --pool pe6s3` | лише рядок «без матриці покриття»: 6 уроків, 68 вправ |
| `euphony --pool pe6s3` | зауважень немає |
| `sources`: `mpim`, `program: true`, title й url як у facts/eng.md; `src` — «mpim с. 16/20/21/22»; `srcPage`/`adapted` немає | ✅ (с. 20 — «Харчування»; с. 21 — Imperatives, sequencing; с. 22 — Passive Present Simple, Past Simple; с. 16 — читання: меню, рецепти; ті самі сторінки, що в заголовку уроку e6s3) |
| `sk` вправи є серед оцінюваних `sk` її уроку | ✅ для всіх 68 (скрипт по `screens[].sk` без `hyp`) |
| Матриця урок × sk, ≥ 3 вправи, рівні 1–3 (скрипт) | l1: vocab 112233, phon 123, func 123 · l2: gram 112233, vocab 123, write 123 · l3: vocab 123, read 123, gram 1223, write 123 · l4: gram 112233, write 1223 · l5: gram 112233, func 123, write 123 · l6: read 123, cult 123, write 123 · l7 boss — без вправ. ✅ |
| Типи | gaps 22, word 11, choice 9, build 8, pick 6, sort 3, stress 3, match 3, order 2, multi 1 — усі в POOL_TYPES |

## 2. Факти (усі вже є в уроках e6s3; нових фактів пул не вводить)

Wikipedia REST віддавала 429, тому сторінки en/uk.wikipedia я відкривав curl'ом (HTML), решту — через WebSearch.

| Твердження у вправах | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| В Україні важливих гостей зустрічають хлібом і сіллю, хліб кладуть на рушник (a60, a63, a65) | en.wikipedia «presented with a loaf of bread (usually a korovai) placed on a rushnyk (embroidered ritual cloth)» — https://en.wikipedia.org/wiki/Bread_and_salt; Encyclopedia of Ukraine, Rushnyk — https://www.encyclopediaofukraine.com/pages%5CR%5CU%5CRushnykIT.htm (WebSearch); Glencairn Museum — https://glencairnmuseum.org/newsletter/2025/4/22/rushnyky-sacred-ukrainian-textiles | ✅ |
| Sunday roast — британська страва, її їдять у неділю: печене м'ясо, картопля, овочі (a61–a64) | en.wikipedia «a British dish traditionally eaten on Sunday. It consists of roast meat, roast or mashed potatoes…» — https://en.wikipedia.org/wiki/Sunday_roast; Tasting Table — https://tastingtable.com/1222093/sunday-roast-the-uks-beloved-weekend-tradition (WebSearch) | ✅ |
| Afternoon tea: чай, сендвічі, сконі, тістечка; сконі їдять із джемом і вершками (a62–a64, a66) | en.wikipedia «cakes, scones and bread and jam, and perhaps sandwiches» — https://en.wikipedia.org/wiki/English_afternoon_tea; Afar — https://www.afar.com/magazine/the-history-etiquette-of-afternoon-tea-in-england (WebSearch: «scones with clotted cream and jam») | ✅ |
| Сконі печуть з борошна (молоко й масло — як в уроці l2) (a13) | en.wikipedia REST summary «Scones are usually made of either wheat flour or oatmeal» — https://en.wikipedia.org/wiki/Scone; англійська стаття про afternoon tea (вище) | ✅ (спрощення уроку) |
| Сирники — із сиру (cottage cheese), яєць, борошна, цукру (a15) | en.wikipedia Syrnyky, infobox «Tvorog/quark (curd cheese)/cottage cheese, flour, eggs, sugar» — https://en.wikipedia.org/wiki/Syrnyky; REST summary «fried Eastern Slavic quark pancakes» — https://en.wikipedia.org/wiki/Syrniki | ✅ |
| Голубці — капуста, рис, м'ясо (a13, a14, a22, a58) | en.wikipedia «Dish of cabbage leaves with a filling» — https://en.wikipedia.org/wiki/Holubtsi; 24tv (WebSearch: класичні голубці — капустяне листя, начинка з рису й м'яса) — https://24tv.ua/smachnonews24/yak-prigotuvati-pisni-golubtsi-pokrokoviy-retsept-golubtsiv-kartopli_n2667863 | ✅ |
| Деруни — картопляні оладки, їх подають зі сметаною (a05, a12, a18) | en.wikipedia Deruny («Potato pancakes with apple sauce and sour cream»; «sour cream or cottage cheese») — https://en.wikipedia.org/wiki/Deruny; урок e6s3l1–l2 (verified, reports/verify/e6s3.md) | ✅ |

## 3. Словники (curl, 2026-11-27)

| Слово | CD UK | OALD BrE | Вердикт |
|---|---|---|---|
| starter, oven, dessert, menu, mushroom, salad (a07–a09) | /ˈstɑː.tər/, /ˈʌv.ən/, /dɪˈzɜːt/, /ˈmen.juː/, /ˈmʌʃ.ruːm/, /ˈsæl.əd/ — https://dictionary.cambridge.org/dictionary/english/<слово> | /ˈstɑːtə(r)/, /ˈʌvn/, /dɪˈzɜːt/, /ˈmenjuː/, /ˈmʌʃrʊm/, /ˈsæləd/ — https://www.oxfordlearnersdictionaries.com/definition/english/<слово> | ✅ один наголос; розмітка `+` збігається; усі шість підкреслені `<u>` в l1 |
| roast (a04) | «roast adjective [before noun]», «(also roasted…)» — https://dictionary.cambridge.org/dictionary/english/roast | roast — прикметник (roast_2/roast_3) | ✅ ключ roast + roasted |
| firstly (a35) | — | «Firstly and first (of all) are used to introduce a series of facts…» — https://www.oxfordlearnersdictionaries.com/definition/english/firstly | ✅ у ключі поруч із first |

## 4. Розв'язок і опора (D-019)

Кожну вправу я розв'язав сам до того, як дивився на ключ. **build:** через `SLID_LANG.check(…, "en")` (app/lang.js у node vm) перебрав усі впорядковані підмножини `tiles ∪ extra`: a11 — 13 699 станів, a22/a24/a50/a66 — по 1 956, a36/a44/a57 — по 325. Рушій приймає лише ключ. Альтернативні порядки я шукав вручну: питальний порядок відсікають `keepCase` і велика перша плитка (Holubtsi, What, Scones, Sofiia), у a11 і a36 його відсікає кома в плитці. **word:** `wordVerdict` перевірив на ключі й на кандидатах у другу відповідь. **gaps/pick/stress/match:** `check(solution)` = true для всіх.

| Вправи | Моя відповідь = ключ | Опора | Друга відповідь / дистрактори | Вердикт |
|---|---|---|---|---|
| a01–a03, a05, a12 vocab/func | = | l1 info «Starter, main course, dessert», «Fried, boiled, roast», меню l1 (deruny — main course) | дистрактори відкидає зміст (солодке / велика страва / вода чи олія) | ✅ (спірне 2) |
| a04 word | roast | l1 info «roast → in the oven» | roasted у ключі; fried/boiled відсікає умова «in the oven» | ✅ |
| a06 pick desert | = | l1 info «Dessert has two letters s» | — | ✅ |
| a07–a09 stress | = | l1 info `<u>` (starter, oven, dessert, menu, mushroom, salad); §3 | a07 до правки: обидва слова з наголосом на 1-му складі (pitfalls-content п. 19) | ⚠️ → правка a07; ✅ після |
| a10, a11 func | = | меню в body; l1 final gaps | a11: boiled суперечить меню | ✅ |
| a13–a15 vocab l2 | = | l2 info «What’s in it?», intro (deruny), gaps (porridge — oats) | match: друга доречна пара відсутня (рис є лише в голубцях, oats — лише в porridge) | ✅ |
| a16–a24 gram/write l2 | = | l2 info «It’s made with…» (is/are + made, cooked, served, eaten) | a18/a21 — «Use the verb serve / cook» відсікає eaten/fried; дистрактори is/are, ate/eat, serve/serves — неграматичні | ✅ |
| a25–a37 l3 | = | l3 info «First, then, after that, finally»; recipe verbs без -s | Then/After that ніде не протиставлені; First/Finally на середніх кроках — хибні за кількістю кроків; firstly у ключі a35 | ✅ (спірне 3) |
| a38–a47 l4 | = | l4 info «Irregular verbs» (bought, came, drank, ate, had, made, went, saw); sort l4 (cooked, played — regular) | дистрактори eated/drinked/comed/goed/buyed/haved/maked і теперішні форми з Yesterday / Last … — неграматичні | ✅ |
| a48–a56 l5 | = | l5 info «Did you…? I didn’t…»; short answers | a55 — `contractions: true` («did not» зараховано); a56 match — пари однозначні | ✅ |
| a57 build | I didn’t like the fish. | l5 info «I didn’t like it» | **«The fish I didn’t like.»** — граматичний, але маркований порядок (винесення додатка, природне лише в контрасті «…but the potatoes I loved»); у ключі його немає | ⚠️ → правка: «Start with I.» в body; ✅ після (спірне 1) |
| a58, a59 write l5 | = | l5 info; final gaps | Do / doesn’t / eat у минулому — неграматичні | ✅ |
| a60–a62 read l6 | = | тексти в body (власні) | a61: «in a pan», «with scones» суперечать тексту | ✅ |
| a63–a65 cult l6 | = | l6 info «Mariia and Emma’s page»; «Words for traditions» (rushnyk) | a64: дистрактори meat/cake, scones/borscht — змістові, не граматичні; для `cult` це прийнятно | ✅ (спірне 4) |
| a66, a67 write l6 | = | l2 info (are + served); l4 had/made | — | ✅ |
| a68 word | ate | l4 info eat → ate | eaten відсікає активний підмет Tom. До правки: «Last Sunday, Tom ate four scones» суперечить a62 («Last Sunday… Tom ate a piece of chocolate cake» на тому самому afternoon tea); hint «Not eaten!» відкидав пастку рівня 3 (pitfalls п. 17) | ⚠️ → правка; ✅ після |

**Лексика** (скрипт: слова кожної вправи проти g4-*, g5-*, e6s1–e6s2 і уроків e6s3 до `lesson` включно): поза уроками лише хибні форми (comed, drinked, desert), варіанти в ключі (roasted, firstly, rushnik) і словоформи вже вивчених слів (mushrooms, washed, mixed, cuts, fries, having). Пізніших уроків розділу вправи не використовують. ✅

**Копії уроків** (6-грами проти всіх g4–g11 і diag): збігаються лише рамки «One word in X’s message is wrong», «Is it a regular or an irregular past form?» і назви страв чи факти з l6 (a60, a64). Ключ уроку з тим самим реченням вправи не повторюють. ✅

**Авторське право** (WebSearch з лапками, фрагменти ≥ 12 слів):

| Фрагмент | Запит | Результат |
|---|---|---|
| a30 «First, mix two eggs and some milk in a bowl. Then add the flour…» | `"First, mix two eggs and some milk in a bowl. Then add the flour"` | дослівного збігу немає (лише загальні рецепти млинців) |
| a62 «I ate two scones with jam and cream, and Tom ate a piece of chocolate cake» | дослівно в лапках | дослівного збігу немає |
| a61 «On Sundays, my family often has a Sunday roast. Dad puts a chicken in the oven» | дослівно в лапках | дослівного збігу немає |

**BrE і механіка** (grep): AmE (color, favorite, Mom, apartment, cookie, candy, vacation), «Listen / You hear», IPA `/…/`, `uk`, літер A/B/C і позиційних посилань немає. Ключі `word` без кінцевого `.!?`. `steps` і `hint` — короткі речення в Present Simple, рівень 6 кл.

**Герої** (glossary/eng-heroes.md): Dmytro — брат Oksana (a47), у Emma є тато й бабуся (e5s8, e6s3l5), Mariia — без братів і сестер. NOTE: a61/a62 (тато Emma готує Sunday roast вдома, бабуся й дідусь приїжджали «last Sunday») не суперечать уроку, бо в кожної вправи свій «last Sunday». У l6 final ростбіф був «at Grandad’s house». Наступному style-sync варто звести це до одного канону.

## 5. Спірні пункти автора

1. a57 «The fish I didn’t like»: згоден, що для 6 кл. цей порядок неприродний. Але він граматичний, тому я відсік його умовою «Start with I.» (той самий прийом, що в pe6s4 a36). У ключ не додавав.
2. a05 / a12, деруни як main course: опора є (меню l1 «Main courses: … deruny with sour cream», boss l7 «Deruny are the main course»). ✅
3. a28 «cook them in the hot water for ten minutes»: побутова деталь, вік не порушує. «Ask an adult» є в уроці l3; у пулі це необов'язкове.
4. a64, безглузді дистрактори: для `cult`-вправи на пригадування змісту прийнятно, бо граматично правильної другої відповіді немає.

## 6. Правки (зроблено)

1. **a07** `stress`: `["+star|ter", "+ov|en"]` → `["+ov|en", "des|+sert"]`, steps відповідно. Причина: у наборі мало бути слово з іншим наголошеним складом (pitfalls-content п. 19).
2. **a57** `build`: у body додано «Start with I.». Так відсічено маркований порядок «The fish I didn’t like.».
3. **a68** `word`: «Last Sunday» → «Last Saturday» (усунуто суперечність з a62); hint «Last Sunday, Tom did it: the past. Not eaten!» → «Last Saturday is in the past. Is the sentence about the scones or about Tom?»; steps — «Last Saturday».
4. Статус пулу: `draft` → `verified`, `meta.factcheck` і заголовний коментар оновлено.

Рекомендовано (не блокує): у наступному style-sync звести канон «Sunday roast в Emma» (a61/a62 і l6 final).

## 7. Вердикт

Уроки e6s3l1–l6 у пулі: усі пари (урок, sk) мають рівні 1–3, неправильних ключів і завдань без опори немає. **pe6s3 — verified.** Людина-вчитель ставить `approved` після власного перегляду.
