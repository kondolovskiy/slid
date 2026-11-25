# Верифікація: pe5s4 — пул тренування до e5s4 «Clothes» (англійська, 5 кл.)

Верифікатор: verifier-pe5s4 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s4.js` (82 вправи, a01–a82) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Опора — лише уроки `content/eng/g5-e5s4.js` (verified, reports/verify/e5s4.md) і раніші розділи (g4-e4s1…e4s8, g5-e5s1…e5s3).

**Вердикт: пул придатний, `verified`.** Кожну вправу я розв'язав сам. Неправильних ключів, других правильних відповідей і пасток, які зарахував би рушій, немає. Збігів з опублікованими текстами теж немає. Я зробив 12 змістових правок у 11 вправах: 6 вправ копіювали умову уроку, 3 спиралися на слово з пізнішого уроку, в a59 маркером була лише «today», ще одна правка уточнює підказку a67. Окремо поставив статус. TQ немає. Людині лишається тільки загальне: approved — за вчителем.

## 1. Програма й механіка
- `sources`: `mpim`, `program: true`, title і url — як у facts/eng.md і в розділі. `src`: «mpim с. 20» (тема «Одяг», функції — vocab, write, func, phon, cult), «mpim с. 22» (Present Continuous, PS vs PC, Plurals — gram), «mpim с. 16» (читання A2 — read). Сторінки збігаються з reports/verify/e5s4.md §1 ✅.
- Типи: gaps 39, choice 10, stress 9, word 7, pick 6, build 5, match 4, multi 2. Усі є в POOL_TYPES (app/learn.js:2009–2011) ✅. gaps ≤ 6 пропусків, stress ≤ 6 слів, build ≤ 6 плиток з extra, match — 4 пари ✅. Літер A, B, C і позиційних посилань в `opts` немає; IPA, «Listen» і `uk` теж немає ✅.
- `node tools/validate.mjs --pool pe5s4`: **0 помилок, 0 попереджень** (до правок і після).
- `node tools/personalization-qa.mjs --pool pe5s4 --strict` матрицю урок × sk не перевіряє («без матриці покриття»). Тому я **звірив її вручну** скриптом: `sk` кожного уроку зібрав з його екранів, вправи пулу згрупував за (lesson, sk), а рівні порахував окремо.

| Урок | `sk` екранів уроку | Пул: вправ (рівні) |
|---|---|---|
| e5s4l1 | vocab, gram, write | vocab 4 (1,2,3) · gram 4 (1,2,3) · write 3 (1,2,3) |
| e5s4l2 | gram, vocab, phon, write | vocab 3 · gram 5 · phon 3 · write 3 — усі (1,2,3) |
| e5s4l3 | gram, func | gram 6 · func 4 — (1,2,3) |
| e5s4l4 | read, vocab, func, phon, write | по 3 на кожен, (1,2,3) |
| e5s4l5 | gram, func, write | gram 5 · func 3 · write 3 — (1,2,3) |
| e5s4l6 | cult, read, func, vocab, gram, phon, write | по 3 на кожен, (1,2,3) |
| e5s4l7 (boss) | — | без вправ (як у пулах e4) |

Жодна вправа не має `sk`, якого немає в її уроці ✅. `cult` l6 є в уроці лише на hyp-екрані, але зміст подано в info #3 («A vyshyvanka is a Ukrainian shirt», «Vyshyvanka Day is in May»), тож опора є ✅.

## 2. Факти й норми: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| «Vyshyvanka Day» — «in May» (a63, a64) | en.wikipedia: «It is celebrated the third Thursday of May» — https://en.wikipedia.org/wiki/Vyshyvanka_Day; uk.wikipedia: «Дата проведення — щороку в третій четвер травня» — https://uk.wikipedia.org/wiki/День_вишиванки; WebSearch «Vyshyvanka Day third Thursday of May…» — заголовки Ukrinform «Ukrainians celebrate Vyshyvanka Day» (сторінки не відкриваються: www.ukrinform.net, stolarfund.com — ENOTFOUND) | ✅ (у пулі лише «in May», як в уроці; факт уже верифіковано в e5s4) |
| «A vyshyvanka is a Ukrainian shirt» (a62, a64, a72, a73) | урок l6 info #3; en.wikipedia Vyshyvanka — reports/verify/e5s4.md §2 | ✅ (формулювання уроку) |
| Наголос `stress` на 1-му складі: jumper, jacket, trousers, trainers, winter, summer, sandals, raincoat, uniform | CD UK (https://dictionary.cambridge.org/dictionary/english/<word>): /ˈdʒʌm.pər/, /ˈdʒæk.ɪt/, /ˈtraʊ.zəz/, /ˈtreɪ.nər/ (trainer), /ˈwɪn.tər/, /ˈsʌm.ər/, /ˈsæn.dəl/ (sandal), /ˈreɪŋ.kəʊt/, /ˈjuː.nɪ.fɔːm/. OALD BrE (https://www.oxfordlearnersdictionaries.com/definition/english/jumper, jacket, trousers, trainer_1, winter_1, summer_1, sandal, raincoat, uniform_1): /ˈdʒʌmpə(r)/, /ˈdʒækɪt/, /ˈtraʊzəz/, /ˈtreɪnə(r)/, /ˈwɪntə(r)/, /ˈsʌmə(r)/, /ˈsændl/, /ˈreɪnkəʊt/, /ˈjuːnɪfɔːm/ | ✅ один основний наголос, 1-й склад, в обох словниках. Кожне слово підкреслене `<u>` в info уроку, до якого належить вправа, або раніше (l1 #3: jumper, jacket; l2 #3: trousers, trainers; l4 #3: winter, summer, sandals, raincoat; l6 #3: uniform). weekend і T-shirt у `stress` немає |
| a pair of; jeans / trousers / shorts → are | урок l2 info #3; CD pair і OALD pair_1 — reports/verify/e5s4.md §2 | ✅ «two pair(s)» пул не оцінює ніде |
| BrE: jumper, trousers, trainers, at the weekend, football boots, grey, colour | CD/OALD (jumper «UK», trousers «mainly UK», trainer «UK») — URL вище | ✅ AmE-правопису й лексики (sweater, pants, sneakers, on the weekend, gray, color) у тексті немає (grep) |

## 3. Вправи: моя відповідь → опора (D-019) → друга правильна? → вердикт

`word` я прогнав через `SLID_LANG.wordVerdict(s, v, "en")`, `build` — повним перебором усіх перестановок усіх підмножин плиток разом з `extra` через `SLID_LANG.check(s, st, "en")` (app/lang.js у node vm; скрипт `/tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/verify-pe5s4/run.mjs`). Лексику кожної вправи перевірив скриптом проти тексту її уроку, попередніх уроків e5s4 і всіх раніших розділів (`…/verify-pe5s4/lex.mjs`). Скрипт `…/verify-pe5s4/ngram.mjs` шукав збіги з уроками від 7 слів поспіль.

| Вправа | Моя відповідь | Опора | Друга правильна / пастка | Вердикт |
|---|---|---|---|---|
| a01 match | T-shirt↔жовта, dress↔рожева, hat↔синя, jumper↔червоний | l1 info #3 (аркуш clothes-1.svg), l1 #4; SVG ті самі, що в уроці й boss, `alt` збігаються | ні: coat, skirt, scarf серед лівих немає | ✅ |
| a02 gaps | coat, hat, dress | l1 info #3, #5 | ні | ✅ |
| a03 word | dress | l1 info #3 «like a T-shirt and a skirt in one» | ні; «Dress.» ok, «a dress» ні (before вже «It’s a») | ✅ |
| a04 pick | jumper, coat, scarf | l1 info #3 «cold days → …» | ні (T-shirt, dress — hot) | ✅ |
| a05 gaps | wear, wears | l1 info #6 | ні | ✅ |
| a06 word | wears | l1 info #6 | «Write wear or wears» відсікає wore / is wearing; «wear» → Almost (не зараховано) | ✅ |
| a07 gaps | Do, do, Do | l1 info #6; Do they — e5s2 (requires) | ні | ✅ |
| a08 pick | [wears] | l1 info #6 | ні: Mum wears, I wear правильні | ✅ |
| a09 gaps | wear, coat, scarf | l1 #3, #6 | ні | ✅ |
| a10 gaps | wears, wears, wear, Do | l1 #6 | ні | ✅ |
| a11 gaps | jumper, coat, scarf, wear, wears, Do | l1 #3, #6 | ні | ✅ після правки 1 (gloves — слово l2) |
| a12 match | shorts, socks, gloves, trousers ↔ малюнки | l2 info #3 (clothes-2.svg), l2 #4 | ні: jeans і boots серед лівих немає | ✅ |
| a13 gaps | hands, feet, shorts | l2 #4 fbText, l2 info #6 | ні | ✅ |
| a14 pick | socks, boots, trainers | l2 info #3, #6 «Shoes are for your feet» | ні: gloves — hands, jeans — legs («two legs» в info #3) | ✅ |
| a15 gaps | are, is | l2 info #3 | ні | ✅ |
| a16 word | children | l2 info #6 | «Write the plural of child» відсікає kids; childs — ні | ✅ |
| a17 gaps | a pair of, are, are | l2 info #3 | «I need jeans» без артикля граматичне, але такого варіанта немає | ✅ |
| a18 pick | [is] | l2 info #3 | ні | ✅ |
| a19 gaps | dresses, children, feet | l2 info #6 | ні | ✅ після правки 2 (own — слово l6) |
| a20–a22 stress | 1-й склад у всіх | `<u>` l1 #3, l2 #3 | — | ✅ |
| a23–a25 gaps | are, a pair of / a pair of, are, is / are, a pair of ×2, feet, are | l2 info #3, #6 | ні | ✅ |
| a26 gaps | is wearing, are wearing | l3 info #3 | ні | ✅ |
| a27 word | am | l3 info #3 | «Write am, is or are» відсікає was; «’m» — ні | ✅ |
| a28 gaps | isn’t, are not, am not | l3 info #3 | ні; повна форма замість «’m» (PITFALL verifier-e5s4) | ✅ |
| a29 build | Are you wearing your new boots? | l3 info #3, l3 #6 | перебір 1 956: зараховано лише ключ (keepCase + «Are»); «wear» ніде | ✅ |
| a30 pick | [is] | l3 info #3 | ні; «at the park» — BrE норма | ✅ |
| a31 word | is | l3 info #3 «What is he wearing?» | ні | ✅ |
| a32 gaps | am | l3 info #3 | ні | ✅ |
| a33 gaps | What, am wearing, Are, am not | l3 info #3 | ні | ✅ |
| a34 choice | No, I’m not. | l3 info #3 | ні | ✅ (той самий шаблон, що l3 #5, але інша сцена й одяг — див. §5) |
| a35 build | What is your sister wearing? | l3 info #3 | перебір 1 956: лише ключ; «does» ніде | ✅ |
| a36 choice | rainy and windy | текст на екрані | ні | ✅ |
| a37 choice | because it’s sunny | текст на екрані | ні | ✅ |
| a38 multi | a raincoat, boots | текст на екрані (Today: I’m wearing…) | ні | ✅ |
| a39 gaps | sandals, gloves | l4 info #3 | ні | ✅ |
| a40 match | raincoat↔a coat for rainy days, sandals↔summer shoes, cap↔a summer hat, gloves↔for your hands in winter | l4 info #3, l2 #4 | перебрав усі праві для кожного лівого: друга доречна пара відсутня | ✅ |
| a41 gaps | boots, raincoat, shorts, cap | l4 info #3, l4 #5 | ні | ✅ |
| a42 choice | Because it’s rainy. | l4 info #3 | ні | ✅ |
| a43 gaps | Why, Because | l4 info #3 | ні | ✅ |
| a44 build | Why do you wear a raincoat? | l4 info #3 | перебір 1 956: лише ключ; «are» ніде | ✅ |
| a45–a47 stress | 1-й склад | `<u>` l4 #3, l2 #3, l1 #3 | — | ✅ |
| a48 gaps | gloves, cold | l4 info #3 | ні | ✅ |
| a49 gaps | raincoat, because, sandals, hot | l4 info #3 | ні | ✅ після правки 3 (копія речення l4 #5) |
| a50 gaps | gloves, Why, Because, shorts, cap | l4 info #3 | ні | ✅ |
| a51 gaps | wears, is wearing | l5 info #3 | ні: usually / Look! Now | ✅ |
| a52 word | is wearing | l5 info #3 | «Write two words» + Look! At the moment; «’s wearing» → Almost (не зараховано; дитина пише дві форми, ключ досяжний); кінцевого знака в ключі немає | ✅ |
| a53 gaps | wear, am wearing | l5 info #3 | ні: on Mondays / at the moment | ✅ |
| a54 pick | [wear] | l5 info #3, l5 #7 | ні: «often wear» правильне | ✅ |
| a55 gaps | wear, wears, is wearing, is wearing | l5 info #3 | ні: маркер у кожному реченні | ✅ |
| a56 choice | Yes, I do. | l1 info #6 | ні | ✅ |
| a57 choice | I usually wear trainers, but today I’m wearing boots. | l5 info #3 | ні: варіант 2 — інший зміст, варіант 3 — хибні часи | ✅ |
| a58 build | I usually wear a skirt, but today I’m wearing jeans. | l5 info #3 | перебір 1 956: зараховано рівно два порядки (today на початку й у кінці), обидва в `answer`; «wear» ніде. «…but today wear jeans» (з пасткою замість «I’m wearing») не зараховано — це Present Simple для «today», хибне за умовою | ✅ |
| a59 gaps | wear, am wearing | l5 info #3 | **до правки:** у другому реченні маркер — лише «But today». Верифікатор розділу свідомо не лишав «today» єдиним маркером (reports/verify/e5s4.md §6) → ⚠️ → **виправлено** (правка 4) | ✅ після правки |
| a60 gaps | wear, am wearing, because | l5 info #3 | ні: on Saturdays / Look at the photo! Now | ✅ |
| a61 gaps | wear, am wearing, wears, is wearing, is wearing, because | l5 info #3 | ні: маркер у кожному реченні | ✅ після правки 5 (uniform — слово l6; потім — збіг з l5 Final) |
| a62 gaps | shirt | l6 info #3 | ні | ✅ |
| a63 choice | in May | l6 info #3 | ні | ✅ |
| a64 word | vyshyvanka | l6 info #3 | ні; «Vyshyvanka» ok, «vyshivanka» → Almost | ✅ |
| a65 choice | grey | текст на екрані | ні | ✅ після правки 6 (текст) |
| a66 choice | jeans and a pink jumper | текст на екрані | ні | ✅ після правки 6 |
| a67 multi | a white shirt, a grey jumper, a blue tie | текст на екрані | ні | ✅ після правки 6 (і hint «first two sentences») |
| a68 gaps | don’t | l1 info #6, l6 #5 | ні | ✅ після правки 7 (копія boss T6) |
| a69 choice | Yes, I do. | l1 info #6 | ні | ✅ |
| a70 gaps | don’t, am | l6 #5, l3 info #3 | ні | ✅ після правки 8 |
| a71 gaps | uniform | l6 info #3 | ні | ✅ після правки 9 (копія l6 #6) |
| a72 match | uniform, vyshyvanka, raincoat, sandals ↔ визначення | l6 info #3, l4 info #3 | перебрав усі праві: друга пара відсутня | ✅ |
| a73 gaps | uniform, vyshyvanka, own | l6 info #3, l6 #1 «our own clothes» | ні | ✅ |
| a74 gaps | don’t, wears | l6 #1, l1 #6 | ні | ✅ |
| a75 gaps | wears, is wearing | l5 info #3 | ні: usually / now | ✅ |
| a76 build | Emma doesn’t wear a uniform at the weekend. | l6 #1, l5 info #3 | перебір 325: зараховано рівно два порядки, обидва в `answer`; «don’t wear» ніде. Спірне 1: «At the weekend Emma doesn’t wear a uniform» без коми — кома після короткої вступної обставини необов'язкова, тому приймати правильно | ✅ |
| a77–a79 stress | 1-й склад | `<u>` l6 #3 і раніше | — | ✅ |
| a80 gaps | don’t, wear | l1 #6, l6 #1 | ні | ✅ після правки 10 (копія l6 Final) |
| a81 gaps | wear, because, wears | l1 #6, l4 #3 | ні | ✅ після правки 11 (копія l6 Final і boss T6) |
| a82 gaps | wear, don’t, because, wear, am wearing | l1 #6, l4 #3, l5 #3 | ні; comfortable — l6 Final | ✅ |

`steps`, `hint` і `fbText` не суперечать ключам. Фактів, що з'являються вперше в поясненні, немає.

**Лексика (D-019).** Після правок поза уроками лишилося одне слово: pink (a01, a24, a65–a67). Це базовий колір (Pre A1, ТОП 3–4). Розділ сам вживає pink, purple, grey і brown без окремого пояснення (l1 #4, boss T1). У жодній вправі pink не оцінюється: у читанні його досить упізнати в тексті ✅.

## 4. Авторське право й «власні вправи»
WebSearch з лапками (від 12 слів поспіль) збігів з опублікованими текстами не дав:

| Фрагмент | Результат |
|---|---|
| «It’s autumn in Lviv. Today it’s rainy and windy. I’m wearing my raincoat and boots» (a36–a38) | лише прогнози погоди, збігу немає |
| «I don’t like my tie because it isn’t comfortable» (a82) | збігу немає |
| «My old trousers are short now. I need a pair of trousers and a pair of socks» (a25) | лише магазини, збігу немає |
| «Andrii usually wears a blue hat» / «Every winter, Andrii and Sofiia wear warm boots» (a55) | збігу немає |
| «In Kyiv, winter is cold and snowy. I wear a warm coat, a hat and gloves» (a50) | лише новини про погоду, збігу немає |
| «Every school day, I wear a white shirt, a grey jumper and a blue tie» (новий текст a65–a67) | збігу немає (статті про шкільну форму загалом) |
| «But today is Saturday, so at the moment I am wearing jeans» (a61) | збігу немає |

**Копії умов уроку.** Скрипт знайшов збіги з уроками від 7 слів. Шість вправ повторювали умову уроку зі зміною імені чи місця пропуску:
- a68 — boss T6 (той самий діалог, інше ім'я);
- a70 — початок діалогу з l6 #1 / #5;
- a71 — перше речення l6 #6 з тією самою відповіддю;
- a49 — речення l4 #5 з пропуском в іншому місці;
- a80 і a81 — речення l6 Final і boss T6 з тими самими пропусками.

Читання a65–a67 дослівно брало 17 слів з l6 #4. Усе це переписав (§5). Лишилися збіги трьох видів, і я їх приймаю:
- канонічний опис форми Емми «a white shirt, a grey jumper and a blue tie»;
- визначення з info, на яких тримаються a03 і a73;
- короткі сталі фрази («Socks and trainers are for your feet»).

## 5. Правки, які я зробив (content/eng/pool-g5-e5s4.js; id вправ не змінено)
1. **a11:** «Do you wear gloves in England?» → «Do you wear two jumpers too, Emma?» (gloves вводить лише l2).
2. **a19:** «…wear their own clothes» → «The children in Andrii’s class wear jumpers in winter» (own вводить лише l6).
3. **a49:** «In autumn, I wear a raincoat because it’s rainy» (копія l4 #5) → «…a {raincoat} and boots {because} it’s rainy and windy».
4. **a59:** «But today I {…} jeans» → «But today is different: now I {wear|*am wearing} jeans»; `steps` — «Today, now». Єдиним маркером Present Continuous був «today».
5. **a61:** «I usually wear a uniform to school» (uniform — l6) → «On Mondays, I usually wear a skirt» (без збігу з l5 Final).
6. **a65–a67:** текст читання переписано власними словами: «Every school day, I wear a white shirt, a grey jumper and a blue tie. It’s my school uniform. I don’t wear it at the weekend. At the weekend, I usually wear jeans and a pink jumper.». Відповіді не змінилися. `hint` a67 → «Read the first two sentences again.».
7. **a68:** «Emma: Do you wear a uniform, Andrii?» (копія boss T6) → «Tom: Do you wear a tie to school, Oksana?» (у школі Оксани форми немає — l6 Final).
8. **a70:** перше питання → «Do you wear a tie to school, Andrii?».
9. **a71:** «At Emma’s school, all the children wear the same clothes» (копія l6 #6) → «Emma and her friends wear a white shirt, a grey jumper and a blue tie to school.».
10. **a80:** «We don’t wear a uniform at my school. I wear my own clothes» (≈ l6 Final) → «Bohdan and I {don’t} wear a uniform. We {wear} jeans and jumpers to school.»; `steps` оновлено.
11. **a81:** «On Vyshyvanka Day, I {wear} a vyshyvanka» (копія l6 Final і boss T6) → «My vyshyvanka is white and red. I {wear} it on Vyshyvanka Day.».
12. **Статус:** `draft` → `verified`, `meta.factcheck` і рядок «Статус» у шапці.

Після правок: validate — 0 / 0, перебір build і wordVerdict — без змін, лексичний скрипт — лише pink.

## 6. Спірні місця автора
1. **a76 без коми** — прийнято (§3): кома після короткої вступної обставини необов'язкова, а плитки коми не дають.
2. **Нові деталі героїв** (Emma на вихідних без форми, a65–a67, a61; «I don’t like my tie», a82; Tom має «school jumper», a34) — канону не суперечать. Inbox: у школі Емми форма; Tom — молодший брат (у 6 кл. — primary). Шкільна форма в англійській primary-школі звичайна. Про братів і сестер Тараса пул нічого не каже, тож суперечність в inbox між verifier-e5s4 і verifier-e5s1 його не зачіпає.
3. **`stress` — усі слова з наголосом на 1-му складі**, тож вправа зводиться до впізнавання. Інших підкреслених слів у розділі немає, а weekend і T-shirt брати не можна. Не блокує. Рекомендація style-sync: у пулах наступних розділів брати хоча б одне слово з наголосом на 2-му складі, якщо урок його підкреслює.
4. **a59 «But today»** — ⚠️, виправлено (правка 4). a58 (build) і a57 (choice) лишено з «today»: у build обидва порядки в ключі й Present Simple не складається (плитка «I’m wearing»), у choice варіанти фіксовані.

## 7. Педагогіка й рівень
- Рівні 1 → 3 у кожній парі зростають від одного-двох пропусків до 5–6 пропусків і `build`. `hint` є на рівнях 2–3 і не видає відповіді. Межовий випадок — a22 «All four words are the same»: дитина все одно має вирішити, на початку наголос чи в кінці.
- Пояснення (`steps`, `hint`) англійською, речення ≤ 10 слів, лексика A1–A2 — у межах style/eng.md для 5 кл. `uk` не потрібне.
- PS vs PC: маркер є в кожному реченні з пропуском (usually, often, every winter, on Mondays/Saturdays, at the weekend / now, Look!, at the moment, Look at the photo!).
- Скорочень, що починаються з апострофа, у варіантах немає (PITFALL verifier-e5s4).

## 8. Вердикт
**pe5s4 — `verified`.** Відкритих ❌ і ⚠️ немає. Правок — 12 (11 вправ і статус). Людині — лише `approved`.
