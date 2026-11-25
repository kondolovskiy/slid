# Верифікація: pe4s8 — пул тренування до e4s8 «Celebrations and school events» (англійська, 4 кл.)

Верифікатор: verifier-pe4s8 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s8.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Опора — лише уроки `content/eng/g4-e4s8.js` (verified, reports/verify/e4s8.md) і розділи e4s1–e4s7.

**Вердикт: пул придатний, `verified`.** 52 вправи (a01–a52) розв'язав сам. Неправильних ключів і пасток, які рушій зарахував би, немає. Збігів з опублікованими текстами теж немає. Зробив 4 змістові правки: дві вправи уроку 2 спиралися на слово, яке вводить лише урок 4; у `word` a31 була друга відповідь; a51 суперечила уроку 4. Ще впорядкував коментарі-заголовки уроків і поставив статус. TQ немає.

## 1. Програма й механіка
- `sources`: `top34`, `program: true`, title і url — як у facts/eng.md. `src` — «top34 с. 63» (l1–l5) і «top34 с. 54» (записки, l6), сторінки — за reports/verify/e4s8.md §1 ✅.
- Типи: gaps, word, pick, build, match, stress, choice, multi. Усі є в POOL_TYPES (app/learn.js:2011: `["answer","choice","multi",...EXPLAIN_TYPES]`) ✅. Межі build: ≤ 9 плиток, ≤ 2 пастки ✅.
- `node tools/validate.mjs --pool pe4s8`: **0 помилок, 0 попереджень** (і до правок, і після).
- `node tools/personalization-qa.mjs --pool pe4s8 --strict`: до правок єдине зауваження — «ще не verified»; після статусу — чисто, код 0. Кожна пара урок × `sk` має ≥ 3 вправи, на кожен урок є рівні 1–3 (l1 gram 4 / func 4; l2 gram 4 / func 4; l3 func 3 / cult 3 / phon 3 / read 4; l4 vocab 5 / read 4; l5 gram 6; l6 read 4 / write 4).
- `node tools/euphony.mjs --pool pe4s8` — зауважень немає.

## 2. Факти й норми: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження | Джерела | Вердикт |
|---|---|---|
| In Ukraine, Christmas is on 25 December (a20, a22) | en.wikipedia: «Since 2023 Christmas is only officially celebrated in Ukraine on 25 December» — https://en.wikipedia.org/wiki/Christmas_in_Ukraine; https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine («…since then Christmas is officially celebrated on 25 December»); WebSearch: Irish Times https://www.irishtimes.com/world/2023/07/29/ukraine-moves-christmas-day-to-december-25th-in-break-from-russian-tradition, Religion News https://religionnews.com/2023/07/31/ukraine-moves-official-christmas-day-holiday-to-dec-25-denouncing-russian-imposed-traditions/ (закон підписано 28.07.2023) | ✅ (як в уроці l3; 7 January у пулі немає) |
| New Year — 1 January; Christmas у UK — 25 December (a17–a22) | https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine (таблиця, 1 January); OALD christmas «Happy Christmas! Merry Christmas!» — https://www.oxfordlearnersdictionaries.com/definition/english/christmas; reports/verify/e4s8.md §2 | ✅ |
| Happy Christmas! — BrE | OALD christmas (вище); facts/eng.md №14 | ✅ |
| fete = school fair (BrE), ключ a31 | CD «fete noun [C] UK (also fête)» — https://dictionary.cambridge.org/dictionary/english/fete; OALD «(also fair) (both British English) an outdoor entertainment…» — https://www.oxfordlearnersdictionaries.com/definition/english/fete | ✅ fair / fete / fête у ключі |
| an ice cream (злічуване, a03) | CD «noun [C or U]… Who wants an ice cream?» — https://dictionary.cambridge.org/dictionary/english/ice-cream | ✅ |

### Наголос (`stress` a23–a25): CD (UK) + OALD (BrE), дослівно
| Слово | CD | OALD | Опора в уроках | Вердикт |
|---|---|---|---|---|
| birthday | /ˈbɜːθ.deɪ/ https://dictionary.cambridge.org/dictionary/english/birthday | /ˈbɜːθdeɪ/ https://www.oxfordlearnersdictionaries.com/definition/english/birthday | e4s8l3 info `<u>` | ✅ |
| December | /dɪˈsem.bər/ …/december | /dɪˈsembə(r)/ …/december_1 | e4s8l3 info | ✅ |
| Christmas | /ˈkrɪs.məs/ …/christmas | /ˈkrɪsməs/ …/christmas | e4s8l3 info | ✅ |
| happy | /ˈhæp.i/ …/happy | /ˈhæpi/ …/happy | e4s5 stress «+hap\|py» | ✅ |
| Saturday | /ˈsæt.ə.deɪ/ …/saturday | /ˈsætədeɪ/, /ˈsætədi/ …/saturday | e4s3 stress «+Sat\|ur\|day» | ✅ (наголос один в усіх варіантах) |
| computer | /kəmˈpjuː.tər/ …/computer | /kəmˈpjuːtə(r)/ …/computer | e4s5 stress «com\|+pu\|ter» | ✅ |

weekend автор свідомо не взяв (UK /ˌwiːkˈend/) — правильно.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт

Розв'язував, не дивлячись на ключ. Потім кожну перевірив через `SLID_LANG` (app/lang.js, node vm): `check(solution)` для gaps / pick / stress / match — ok. `word` — `wordVerdict` на варіанти. `build` — перебір **усіх впорядкованих підмножин** tiles + extra: зараховується рівно ключ. Усі порядки з повним набором плиток (a03 — 6600, a11 — 840, a40 — 144, a48 — 840) переглянув на граматичність (скрипт у scratchpad).

| id | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 | would; I’d like | = | l1 info #3 | «What are you like?» — ідіома про характер, не репліка офіціанта; «I like an apple juice, please» — хибне за правилом l1 | ✅ (спірне автора закрито) |
| a02 | would | = | l1 info #3 | do — «What do you like? – I’d like…» не пара (CD Grammar would like, reports/verify/e4s8.md); wordVerdict: do, should → ні | ✅ |
| a03 build | Would you like an ice cream? | = | l1 info #3, l1 #8 | розповідний порядок відсікає «Would» + keepCase; «are», «a» не дають правильного речення; «Would you like ice cream» (без an) — неповний набір плиток, рушій не приймає, і це не друга відповідь (PITFALL writer-dge4) | ✅ |
| a04 pick | [I’m] | = | l1 #4 («There is no I’m like») | ні | ✅ |
| a05 | Sorry; Thank you | = | l1 info #6 | ні | ✅ |
| a06 match | Thank you! / Sorry! / I’d like a pizza… / Here you are. | = | l1 info #3, #6, intro (Here you are) | перебрав усі праві для кожного лівого: Here you are — лише відповідь на «Can I have…?»; Goodbye серед правих немає | ✅ |
| a07 | No, thank you.; Yes, please. | = | l1 info #3; thirsty — e4s5 | ні | ✅ |
| a08 pick | [Sorry] | = | l1 info #6 | ні | ✅ |
| a09 | on; at | = | l2 info #3 | ні | ✅ після правки 1 (fair → party) |
| a10 | in; on; at | = | l2 info #3; Danylo — June (l2 #4) | ні | ✅ |
| a11 build | When is the school concert? | = | l2 info #3; concert — l2 #4 | «does» не дає правильного речення; розповідний відповідник неможливий (keepCase «When») | ✅ після правки 2 (fair → concert) |
| a12 pick | [at] Sunday | = | l2 info #3 | at 5 pm, at my flat — правильні | ✅ |
| a13 word | Where | = | l2 info #3 | ні (When, What — ні з «At Café Sonechko») | ✅ |
| a14 match | At 5 pm / In the school hall / Yes, I can. | = | l2 info #3, #7 | «When…?» автор свідомо не дав | ✅ |
| a15 | Sorry, I can’t.; Yes, I can. | = | l2 info #7 | ні | ✅ |
| a16 | When; what time; Where | = | l2 info #3 | «What time…? – On Sunday» хибне; «When» на годину не пропоновано | ✅ |
| a17 word | Christmas | = | l3 info #3 | Xmas — ні (не в уроці; рушій не зараховує — прийнятно); Happy holidays — AmE, у пул не потрібне | ✅ |
| a18 | birthday; Christmas; New Year | = | l3 info #3 | ні | ✅ |
| a19 pick | [Christmas] | = | l3 info #3 | ні | ✅ |
| a20 | 25 December; 1 January | = | l3 info #3 | ні | ✅ |
| a21 match | New Year / Christmas / birthday | = | l3 info #3 | ні | ✅ |
| a22 | on 25 December too; on 1 January | = | l3 intro, info #3 | ні | ✅ |
| a23–a25 stress | див. §2 | = | §2 (l3 info, e4s3, e4s5) | — | ✅ |
| a26 | Grandma’s house; Grandma | = | текст на екрані | ні | ✅ |
| a27 | 31 December; Dmytro; Grandma | = | текст на екрані | ні | ✅ |
| a28 pick | [Sunday] | = | картка на екрані (Saturday) | ні | ✅ |
| a50 choice | a red ball | = | картка на екрані | ні | ✅ |
| a29 | concert | = | l4 info #3 | ні | ✅ |
| a30 match | sing and dance / run and jump / sell and buy things | = | l4 info #3 | ні | ✅ |
| a31 word | fair (fete) | fair / fete / fête | l4 info #3 | **було** «Mariia writes about her school.» + «…at our school ___» → «shop» (school shop) — теж правильне речення | ❌ → виправлено (правка 3): «Mariia writes about a school event.» |
| a32 pick | [concert] | = | l4 info #3 | ні | ✅ |
| a33 | concert; sports day; fair | = | l4 info #3 | ні | ✅ |
| a34 | Tuesday; 6 pm | = | оголошення на екрані | ні | ✅ |
| a35 | Saturday; school hall; 4 pm | = | оголошення на екрані | ні | ✅ |
| a36 pick | [Saturday] | = | повідомлення на екрані | ні | ✅ |
| a51 choice | She jumps. | = | повідомлення на екрані | ні | ✅; **суперечність героям**: sports day у школі Andrii — у l4 intro Wednesday, а тут було Monday → виправлено (правка 4) |
| a37 | is running; reads | = | l5 info #3 (Every… / Look!) | «Every morning, Emma is reading» — за правилом уроку хибне, як boss T5 «Every Friday, I {play\|am playing}» | ✅ (спірне автора закрито) |
| a38 word | making | = | l5 info #3, sort («Mum is making a cake now») | baking відсікає «Use the word make» | ✅ |
| a39 word | cooks | = | l5 info #3 (she plays); cook — e4s1 («A cook cooks food») | ні; «is cooking» з every evening — хибне | ✅ (спірне автора закрито) |
| a40 build | They are playing football. | = | l5 info #3 | «They play football» — неповний набір плиток і хибне за «Look!»; «are They…» — keepCase | ✅ |
| a41 pick | [are going] | = | l5 info #3 | «are playing» — правильна група-кнопка `[!…]` | ✅ |
| a42 | go; am reading; is sleeping | = | l5 info #3 | ні | ✅ |
| a43 | Bohdan’s flat; 7 pm | = | записка на екрані | ні | ✅ |
| a44 pick | [park] | = | записка на екрані | ні | ✅ |
| a45 | Halyna’s house; 4 pm; Dad | = | дві записки на екрані | ні | ✅ |
| a52 multi | 0, 1 | = | записка на екрані | ні | ✅ |
| a46 word | for | = | l6 info #5 | ні | ✅ |
| a47 | at; at; Love | = | l6 info #3 | in Kateryna’s flat — серед варіантів немає | ✅ |
| a48 build | Sorry, I can’t come to the fair. | = | l6 info #5; fair — l4 | «Sorry, I can come…», «Sorry, can I come…», «Sorry, can’t I come…» — граматичні, але суперечать умові (Bohdan is ill, can’t come); рушій їх не приймає | ✅ |
| a49 pick | [on] | = | l6 info #3; l2 info | ні | ✅ |

Ключі `word` без кінцевого `.!?` (would, Where, Christmas, fair/fete/fête, making, cooks, for) ✅. Дати у форматі BrE «25 December» ✅. AmE-правопису, AmE-лексики, IPA, «Listen» / «You hear» і літер A/B/C в `opts` немає ✅. Час — «11 am», «4 pm» (TQ-123 «як зараз»).

## 4. Лексика, герої, рівень, авторське право
- **Лексика за уроками:** у вправах уроку 2 a09 і a11 була «school fair». Слово fair уперше з'являється в l4, а в e4s1–e4s7 його немає (grep). Тож для дитини, яка пройшла лише l2, це нове слово → правки 1–2. Решта слів є в e4s8 або раніше: thirsty (e4s5), cook (e4s1), apple, milk, bread (e4s4), raining (e4s6), homework (e4s2), ill (e4s5).
- **Герої:** суперечностей з каноном (inbox, style-sync NOTE) немає: Zoriana — однокласниця Andrii; Bohdan — Kyiv; Danylo — Kharkiv, June; Halyna; Emma, Tom, кішка Emma; Oksana, Dmytro, Mum; Taras. Винятком була a51 (правка 4). Maksym у пулі не вжито.
- **Рівень пояснень:** `steps` і `hint` — короткі речення A1 у Present Simple, терміни уроку (a day / a time / a month, every day / now). Потреби в `uk` немає.
- **Авторське право (WebSearch з лапками, фрагменти ≥ 12 слів):**

| Фрагмент | Запит | Результат |
|---|---|---|
| a42 «I usually go to the park on Saturdays. But today it’s raining» | дослівно | збігу немає |
| a26 «Today we are at Grandma’s house. Grandma makes a chocolate cake» | дослівно | збігу немає |
| a27 «On 31 December my family has a big dinner. My mum makes a chocolate cake» | дослівно | збігу немає |
| a28 «Have a great party on Saturday. My present for you is a book about animals» | дослівно | збігу немає |
| a36 «Our school concert is on Friday at 5 pm. I sing a song» | дослівно | збігу немає |
| a52 «I’m at the shop with Dad. We’re buying a cake for Grandma. Back at» | дослівно | збігу немає |

## 5. Правки (content/eng/pool-g4-e4s8.js; id не змінювано)
1. **a09** (l2): «The school fair is…» → «The party is…». Ключ той самий (on, at).
2. **a11** (l2, build): «fair» → «concert» у `body`, плитці, `answer` і `steps`. Concert є в l2 #4. Bohdan питає Andrii, а в a15 концерт класу Andrii — у п'ятницю, тож суперечності немає. Перебір: зараховується лише «When is the school concert».
3. **a31** (word): `body` «Mariia writes about her school.» → «Mariia writes about a school event.». Так відсікається «school shop» (друга правильна відповідь). Слово event — з назви й intro l4.
4. **a51** (choice): «sports day is on Monday» → «on Wednesday». Так узгоджено з оголошенням школи Andrii в l4 intro (Sports day – Wednesday). Ключ той самий.
5. Коментарі-заголовки «Урок 4», «Урок 5» перенесено так, щоб a50 (l3) і a51 (l4) стояли під своїми уроками. Статус `verified`, `meta.factcheck`, рядок «Статус» у шапці.

Після правок: validate — 0 / 0; personalization-qa --strict — чисто; перебір build — зараховується рівно ключ.

## 6. Рекомендовано (не блокує)
- Плейтест і `python3 tools/test-answer-ui.py --suite content --pool pe4s8` не запускав: Python-playwright у контейнері немає, а build під час паралельного запуску заборонено. Запустити після build оркестратора.
- a45: записку пише Dmytro (6 років). Це допустимо, але style-sync може замінити автора записки на старшого героя.

## 7. Вердикт
Пул pe4s8 — ✅ **verified** (4 змістові правки, TQ немає).
