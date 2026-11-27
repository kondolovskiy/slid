# Верифікація: пул pe7s2 «In the kitchen: cooking and laying the table» (англійська, 7 кл.)

Верифікатор: verifier-pe7s1-pe7s2 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s2.js` (69 вправ a01–a69) за скілами `content-verify` (§2–§5, «Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g7-e7s2.md. Опора — уроки content/eng/g7-e7s2.js (verified, reports/verify/write-eng-g7-e7s2.md). Еталон — reports/verify/pe5s3.md.

**Вердикт: пул придатний, `verified`.** Блокувальних знахідок немає. Зробив 3 мінімальні правки: a26 — D-019 (слово з 11 кл.), a23 — hint з хибним правилом, a20 — hint не збігався з текстом. TQ не додаю.

## 1. Програма (`sources`, `src`)
МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Завантажив у цій сесії: SHA-1 43925b25c52b…, як у facts/eng.md. Прогнав `pdftotext` по сторінках.

| `src` | Що на сторінці (дослівно) | Вправи | Вердикт |
|---|---|---|---|
| mpim с. 32 | «Харчування — Приготування їжі; Кухонні прилади, посуд; Способи обробки продуктів» | l1, l2, l5 vocab/func/write | ✅ |
| mpim с. 34 | «Determiners — Articles: another, the other, no article»; «Quantity: … with uncountable nouns, much and many»; «Imperatives: ‘do’ for emphasis, invitation, ‘let me’…» | l3, l5 gram, l6 | ✅ |
| mpim с. 35 | «Passives — Passive forms: Infinitive, …» | l4 | ✅ |

У джерелі стоїть `program: true`, у вправах немає `srcPage` і `adapted`.

## 2. Форми й норма: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження | Джерела | Вердикт |
|---|---|---|
| lay the table (BrE) = set; lay → laid (a51–a56) | OALD «(British English) to arrange knives, forks, plates, etc. on a table ready for a meal synonym set — to lay the table»; «past simple laid» — https://www.oxfordlearnersdictionaries.com/definition/english/lay_1; CD set-the-table — https://dictionary.cambridge.org/dictionary/english/set-the-table | ✅ set — у ключі a52; у `gaps` set ніде не стоїть хибним варіантом |
| knife → knives (a44, a45) | CD «plural knives» — https://dictionary.cambridge.org/dictionary/english/knife; урок l5 info | ✅ |
| pan — друга відповідь a03 | CD «a metal container… used for cooking things on top of a cooker… pots and pans» — https://dictionary.cambridge.org/dictionary/english/pan | ✅ у ключі |
| cake [C or U] (hint a23) | CD «A1 [C or U]» — https://dictionary.cambridge.org/dictionary/english/cake; OALD «[countable, uncountable]» — https://www.oxfordlearnersdictionaries.com/definition/english/cake_1 | ⚠️ hint «Cake is uncountable» неточний → виправлено (§5) |
| biscuit [C] (заміна в a26) | CD «A1 [C] UK (US cookie)» — https://dictionary.cambridge.org/dictionary/english/biscuit; OALD «[countable] (British English)» — https://www.oxfordlearnersdictionaries.com/definition/english/biscuit | ✅ |
| heat — «to make something hot» (a36, a39, a41) | CD — https://dictionary.cambridge.org/dictionary/english/heat; урок l1 «it heats food very quickly» | ✅ |
| Факти про країни | нових немає: пул не вживає paska, Pancake Day та ін. поза уроком (varenyky й borscht — лише як страви в сценах) | ✅ |

### Наголос (`stress` a64–a66): один головний наголос у CD UK і OALD (curl у цій сесії)

| Слово | CD UK | OALD | Ключ | Де `<u>` | Вердикт |
|---|---|---|---|---|---|
| delicious | dɪˈlɪʃ.əs | /dɪˈlɪʃəs/ | 2-й | l6 info | ✅ |
| napkin, tablecloth | ˈnæp.kɪn, ˈteɪ.bəl.klɒθ | /ˈnæpkɪn/, /ˈteɪblklɒθ/ | 1-й | l5 info | ✅ |
| kettle, microwave, cooker, cupboard, oven, saucepan | ˈket.əl, ˈmaɪ.krə.weɪv, ˈkʊk.ər, ˈkʌb.əd, ˈʌv.ən, ˈsɔː.spən | /ˈketl/, /ˈmaɪkrəweɪv/, /ˈkʊkə(r)/, /ˈkʌbəd/, /ˈʌvn/, /ˈsɔːspən/ | 1-й | l1 info | ✅ |
| frying (з frying pan) | ˈfraɪ.ɪŋ ˌpæn | /ˈfraɪɪŋ pæn/ | 1-й | l1 info «<u>fry</u>ing pan» | ✅ |

URL: https://dictionary.cambridge.org/dictionary/english/<w> і https://www.oxfordlearnersdictionaries.com/definition/english/<w> (microwave_1, frying-pan). Слова з l1 і l5 у вправах l6 — так само, як в уроці e7s2l6 #8 (hint «Look at the underlined parts in this lesson and Lessons 1 and 5»). Без них у l6 було б одне слово delicious. Приймаю (див. звіт pe7s1 §2 щодо pitfall 19).

## 3. Завдання: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я спершу розв'язав сам, а тоді звірив із ключем. Для всіх 5 `build` перебрав усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` з app/lang.js (node vm). Ключі `word` прогнав через `wordVerdict(…, "en")`.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01, a07 gaps | cupboard, fridge; fridge, microwave | l1 info 2 | ні | ✅ |
| a02 match | за місцем | l1 info 1–2 | kettle ↔ heats soup чи microwave ↔ boil water — ні за визначеннями уроку | ✅ |
| a03 word | frying pan | l1 info | pan — у ключі; saucepan — «deep», відсічено «flat pan for frying» | ✅ |
| a04 pick | frying pan, cooker | l1 info, pick | fridge, eggs, sink — `!` | ✅ |
| a05 sort | 4 / 3 | l1 info | microwave і kettle свідомо не взято (спірне автора 2) | ✅ |
| a06 word | cupboard | l1 info «we don’t say the p» | ні | ✅ |
| a08 word | sink | l1 info, Final | kitchen sink — у ключі | ✅ |
| a09 gaps | kettle, frying pan, sink, cupboard | l1 Final | ні | ✅ |
| a10, a13, a18 gaps | boils, bakes; slices, chops; roasted, peeled | l2 info 1–2 | ні | ✅ |
| a11 match | за місцем | l2 info, match | them/it і he/she відсікають перехресні пари | ✅ |
| a12, a16, a19 word | fries, fried, peeled | l2 info «fry → fries, fried» | інструкція задає дієслово (cooks / cooked відсічено) | ✅ |
| a14 pick | [fried] | l2 info «bake → in the oven» | ні | ✅ |
| a15, a17 gaps | fried, fries; peeled, baked, fried | l2 info | fryed / frys — хибні | ✅ |
| a20 gaps | baked, roasted, sliced, chopped | l2 info | ні | ✅ hint виправлено (§5) |
| a21, a22, a27, a29 gaps | a few, a little; many, much; a few, a little; a little, a few, a bit of, many | l3 info | a little / a bit of ніколи не стоять варіантами одного пропуску | ✅ |
| a23 build | Can I have a piece of cake? | l3 info 2 | перебір: лише ключ; «a few» відсічено | ✅ hint виправлено (§5) |
| a24 word | much | l3 info | ні | ✅ |
| a25 pick | [a bread] | l3 info «We don’t say a bread» | ні | ✅ |
| a26 gaps | a slice, a glass, a few | l3 info 2 | «a little of milk» — хибне | ✅ strawberries → biscuits (§5) |
| a28 word | slices | l3 info 2 | pieces — у ключі | ✅ |
| a30, a35, a39, a41 gaps | be boiled, be kept; be peeled, be cut; be eaten, be heated; be heated, be cut, be kept | l4 info 1–2 | хибні лише неграматичні (boiled без be, be cutted, be heat); ергативного «should boil» немає (pitfall 15) | ✅ |
| a31 match | за місцем | l4 info «Third forms» | ні | ✅ |
| a32, a40 build | The juice must be kept cold. / The chicken should be roasted for an hour. | l4 info, build | перебір: лише ключ; keepCase відсікає «Must the juice…?» | ✅ |
| a33 word | eaten | l4 info | ні | ✅ |
| a34 pick | [ate] | l4 info, build | ні | ✅ |
| a36 choice, a37 gaps, a38 multi | in the fridge; freezer, baked, 6–8; 0, 2 | упаковка на екрані | ні | ✅ (спірне 3: fish fingers, freezer — l4; rice — e4/e6) |
| a42 gaps | spoon, knife | l5 info | ні | ✅ |
| a43 match | за місцем | l5 info (napkin, tablecloth), glass, fork | «You eat with it, and it isn’t a spoon» серед чотирьох лівих однозначне (knife і spoon серед лівих немає) | ✅ (спірне 1; незграбно, але правильно) |
| a44 word | knives | l5 info | «Write the plural of knife» | ✅ |
| a45 pick | [knifes] | l5 info | ні | ✅ |
| a46, a49, a56 gaps | another, the other; the other, another; laid, the other, another | l5 info 2 «another / the other» | the other хибне лише при > 2 предметів; another хибне лише для другого з двох | ✅ |
| a47 build | Can I have another chair? | l5 info 2 | перебір: лише ключ; chairs відсічено | ✅ |
| a48 word | another | l5 info 2 | «a» граматичне, але відсічене інструкцією «Write another or the other» | ✅ |
| a50 pick | [the] | l5 info 2, choice «the another» | ні | ✅ |
| a51, a54 gaps | lay; laid, glass | l5 info 1 | set не варіант | ✅ |
| a52 word | laid | l5 info «lay → laid» | set — у ключі | ✅ |
| a53 match | за місцем | l5 intro, info 2 | перехресні пари не доречні | ✅ |
| a55 word | tablecloth | l5 info | cloth — у ключі («a big cloth» стоїть у body, тож «a big cloth over the table» теж правильне) | ✅ |
| a57, a59 gaps | thank you, full; please, lovely | l6 info 2 | ні | ✅ |
| a58 match | за місцем | l6 info 1–2 | ні | ✅ |
| a60 pick | [I] | l6 info, build | ні | ✅ |
| a61, a63, a67, a69 gaps | Do, Let; yourselves, Let me, Do; Do, Let me; yourselves, Do, full, Let me | l6 info 1, l5 «Help yourselves» | кількість гостей задано в body | ✅ |
| a62 build | Do help yourself to some soup! | l6 info «do + imperative», «Help yourself (to the cake)» | перебір: лише ключ; yourselves відсічено («the only guest») | ✅ |
| a64–a66 stress | див. §2 | `<u>` у l1, l5, l6 | — | ✅ |
| a68 word | delicious | l6 info 2 «very, very tasty» | інструкція відсікає lovely / great / tasty | ✅ |

**Лексика не виходить за уроки** (pitfall 20). Скриптом звірив слова кожної вправи зі словами уроків e4–e6, e7s1 і e7s2 до уроку вправи включно. Поза уроками є лише: інфлексії відомих слів (chopped, sliced, heated, added, needed, minute), навмисні хибні форми (cutted, layed) і число sixty. **strawberries** (a26) трапляється лише в e11s2, тож його замінено на biscuits (e5s3, [C]).

**Покриття** (урок × `sk`, рівні; скриптом): l1 vocab 112223, write 123; l2 vocab 11223, gram 123, write 123; l3 gram 112233, write 123; l4 gram 112233, read 123, write 123; l5 vocab 1123, gram 12233, func 123, write 123; l6 gram 123, func 1223, phon 123, write 123. Зайвих `sk` немає. Boss l7 без вправ.

**Копії уроків** (pitfall 18). Перевірив n-грами (5 і 7 слів) проти g*.js і diag-*.js. Збіги — визначення слів з info (a02, a06, a43), формули «Can you lay the table», «No, thank you. I’m full», «Let me wash the cups» (a53, a58) і шаблони. a40 і dge7 мають спільне «be roasted for an hour», але це різні типи вправ (build ↔ gaps) з різними модальними дієсловами й ключами. Приймаю.

**Механіка й BrE** (grep). AmE (stove — лише в уроці як «In the USA», cookie, apartment, color), «Listen / You hear», IPA, `uk`, літери A/B/C не знайдено. Ключі `word` без кінцевого `.!?`. `validate --pool pe7s2` — 0/0; `personalization-qa --strict` — лише «ще не verified» до зміни статусу; `euphony --pool` без зауважень.

## 4. Педагогіка, рівень, герої
`steps` і `hint` короткі, у формулах уроку («modal + be + the third form», «Two things: one… and the other»). Рівні наростають. Неприйнятного змісту немає.
Герої — канон glossary/eng-heroes.md. Andrii обідає в Bohdan (a57, a62); Bohdan і Kyrylo — в Andrii (a69); Ruby, однокласниця Emma, — на вечері в Emma (a47); Ostap — у Taras (a61); Uncle Oleh — у Mariia (a49, a56; бабуся без імені); Taras смажить рибу по п'ятницях (a12). Суперечностей з каноном немає (NOTE автора в inbox).

## 5. Правки (зроблені)

| Вправа | Було | Стало | Чому |
|---|---|---|---|
| a26 | «And a few strawberries too!»; hint і steps про strawberries | biscuits | strawberries уперше в e11s2 (D-019); biscuit [C] — CD, OALD, e5s3 |
| a23 hint | Start with Can. Cake is uncountable. | Start with Can. Look at the screen “A slice of bread”. | cake — [C or U] (CD, OALD), правило в hint хибне |
| a20 hint | Cake, chicken in the oven, … | Cake, meat in the oven, … | у тексті «some meat», не chicken |
| файл | `status: "draft"`, factcheck self | `status: "verified"`, factcheck verifier-pe7s1-pe7s2 | — |

## 6. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a37 упаковка fish fingers | `"They should be fried for 6–8 minutes. They can also be baked in the oven for 15 minutes"` | збігу немає |
| a38 упаковка rice | `"Boil some water in a saucepan. Add the rice. It should be boiled for 12 minutes"` | збігу немає (лише загальні рецепти рису) |
| a20 лист Andrii | `"For Mum's birthday, Dad baked a big cake. He roasted some meat in the oven too"` | збігу немає |

## 7. Вердикт по уроках
e7s2l1–e7s2l6 — ✅. Пул pe7s2 → `verified` (не `approved`: потрібен учитель англійської).
