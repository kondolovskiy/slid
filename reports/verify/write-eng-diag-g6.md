# Верифікація: тест рівня dge6 (content/eng/diag-g6.js)

Верифікатор: verifier-write-eng-diag-g6, 2026-11-25. Задача: tasks/review/write-eng-diag-g6.md. Скіли: content-verify (розділ «Англійська»), math-pool-diag §2в.

**Вердикт: `status: "verified"` після 25 правок.** Головна проблема — копії. 22 із 28 завдань повторювали речення чи рамку екрана уроку 5–6 кл. з тією самою відповіддю (PITFALL verifier-pe5s10). Я переписав їх власними реченнями на ту саму граматику. Неправильних ключів і другої правильної відповіді в первинній версії не знайшов. Ще дві правки — `for` у темах `ed` та `imp`, одна — `why` (STYLE verifier-dge5). id тесту, id тем, порядок і кількість завдань (28) не змінено. Питань до людини немає, TQ не додавав.

## 1. Дослівні збіги з уроками (скрипт n-грам)
Скрипт `scratchpad/verify-dge6/ngram.mjs` (5-грами й 4-грами) звіряв тексти завдань з усіма уроками g5-*, g6-*. Перелік знайдених копій:

| № | Тема | Звідки копія (урок, екран) | Правка |
|---|---|---|---|
| 3 | cani | e5s2l6 ек. 2 (hyp «… doesn’t understand the teacher» → «Could you repeat that, please?»), e5s2l7 | Bohdan can’t find the page → «Could you help me, please?» / «Can I help you, please?» / «You help me!» |
| 7 | going | e5s9l3 ек. 6, 9 («got the tickets … Next week … visit») | In June she ___ visit Odesa |
| 8 | will | e5s5l5 ек. 4 «Tomorrow it {will be\|will is\|is be} sunny» — та сама рамка й варіанти | «windy and cold … It ___ windy tomorrow» |
| 9 | imp | e5s2l7 рамка «Ms Lysenko wants the children…», e5s2l5 ек. 5 «Don’t talk, please» | «…doesn’t want the children to run…» → Don’t run, please |
| 10 | comp | e5s10l4 ек. 1, 5, 8 (той самий body про площі й та сама відповідь) | red house six rooms / blue house three rooms → bigger than |
| 11 | like | e5s1l6 ек. 8, 10 (Yaroslav likes chess, doesn’t like football) | Ostap: basketball / swimming; «He’s quiet and kind» |
| 12 | cur-e6s1 | e6s1l6 ек. 1, 3, 7 (Zlata, curly dark hair, quiet and honest) | Marta (канон: двоюрідна сестра Тараса, e5s1) — fair hair, kind and quiet, looks tired |
| 14 | cur-e6s2 | e6s2l3 ек. 1, 6 і ек. на рядку 873 (no bread, a few apples, baker’s and greengrocer’s, both) | no homework, a few new books, Polina and Roksolana → Both of them |
| 15 | was | e5s8l5 ек. 1, 3 («party was great. My cousins were there too») | birthday party was fun; Grandma and Grandad were there |
| 16 | cur-e6s3 | e6s3l4 ек. 5 («writes about last Sunday. Last Sunday… {made\|maked}») | On Friday evening… |
| 17 | ed | e5s9l5 ек. 9 («Last week we travelled to Odesa. We stoped near the sea») | Last month… Kharkiv by car… stopped at a café… |
| 18 | can | e5s6l4 ек. 1, 3, 4, 8 (Andrii chess very well; «chess – yes, skating – no») | Polina: swimming – yes, the guitar – no |
| 19 | cur-e6s4 | e6s4l4 ек. 7 (build «Ms Kravets asks Taras about yesterday evening» → «What were you doing at six o’clock?») | Emma asks Taras about Saturday, three o’clock, in the park |
| 20 | going | e5s9l4 ек. 1, 3 («Are you going to travel this summer?», «Where are you going to stay?») | visit your grandma; What are you going to do there? |
| 21 | will | e5s5l5 ек. 4, 10 (прогноз Lviv/Odesa, «it will be cold») | Kharkiv — snow, −3 °C; Poltava — no snow; will snow |
| 22 | cur-e6s5 | e6s5l5 ек. 3, 4, 5 («We don’t have to print the tickets», «Do I have to show my ticket? – Yes, you do») | Sofiia doesn’t have to come; Do I have to wear a coat? |
| 23 | imp | e5s2l5 ек. 10 (плакат: Come to lessons on time / Put your hand up / Don’t…) | правила шкільної бібліотеки: Close the door / Don’t eat / Put the books |
| 24 | cur-e6s6 | e6s6l4 ек. 6 і 8 («You mustn’t use your phone in lessons. You don’t have to go to the chess club»), ек. 4 | class trip to the museum: school T-shirt / eating / a camera |
| 25 | comp | e5s10l5 ек. 10 («The Dnipro is {the longest\|the longer} river {in\|of} Ukraine… the {highest\|most high} mountain») | This is {the oldest\|oldest\|the most old} church {in\|of} our town… the {biggest\|most big} park |
| 26 | cur-e6s7 | e6s7l4 ек. 4, 9 («Have you ever been to Kyiv? – Yes, I have… never») | the Carpathians |
| 27 | cani | e5s2l6 ек. 6, 7 (Can I open the window? / {Could you\|Can I} repeat that / Yes, you {can\|could}) | Can I use your pencil, Polina? / Could you help me, please? |
| 28 | cur-e6s8 | e6s8l5 ек. 4 («Emma {told\|said} me about the Tower of London. She {said\|told} that…») | George: “I like the Natural History Museum.” → He said that he liked… |

Після правок лишилися збіги лише на рівні граматичної рамки, яку завдання й перевіряє: «What is … like?», «Have you ever been to», «Could you help me, please?» (формула з теорії e5s2l6 ек. 3), «you don’t have to», «Which sentence is correct?». Хибні варіанти — з уроків теми.
Не правив (паралельні завдання з новими реченнями): №1, 2, 4, 5, 6, 13.

## 2. Відповіді (розв’язано до звірки з ключем; після правок — повторно)
Усі 28 завдань я розв’язав сам, не дивлячись на `*`/`correct`. Ключі збіглися з моїми розв’язками 28 з 28, і в первинній, і в остаточній версії. Рушій зараховує в `gaps` лише позначений варіант (`SLID_LANG.check` у app/lang.js: `st[k] === x.correct`). Тому на кожен пропуск я окремо шукав другу правильну BrE-відповідь:

| № | Пропуски / варіанти (ключ першим) | Друга правильна? |
|---|---|---|
| 1 | She’s kind and quiet / She likes reading / Yes, she is | ні: «likes» відповідає на What does she like? |
| 2 | much / many / a lot | ні: «a lot» без of неграматичне |
| 3 | Could you help me, please? / Can I help you…? / You help me! | ні: «Can I help you» — Bohdan пропонує допомогу сам, а не просить її |
| 4–6 | were; visited; can ride | ні |
| 7 | is going to / going to / are going to | ні: will серед варіантів немає |
| 8 | will be / will is / is be | ні |
| 9 | Don’t run / Doesn’t run / Not run | ні |
| 10 | bigger than / more big than / big than | ні |
| 11 | likes; doesn’t; is (відповідь «He’s quiet and kind» відсікає does) | ні |
| 12 | looks like (is like не в варіантах); is like ↔ looks like (характер); looks ↔ looks like + adj. | ні: CD look like — «to have a similar appearance»; характер — be like (e6s1l6 ек. 3) |
| 13 | a lot of; many; much | ні |
| 14 | no ↔ any (ствердження); a few ↔ much (злічуване); Both ↔ All (двоє) | ні: OALD both — «the two» |
| 15 | was; were; Were | ні |
| 16 | made; ate; drank (пастки maked / eated / drinked) | ні |
| 17 | travelled ↔ travel (last month); stopped ↔ stoped; studied ↔ studyed | ні; AmE traveled хибним варіантом не стоїть |
| 18 | swim; can’t (the guitar – no); can’t ↔ don’t | ні |
| 19 | were; was playing; weren’t | ні |
| 20 | Are; am; are | ні |
| 21 | won’t (isn’t / doesn’t); will snow; will be | ні: «isn’t going to» у варіантах немає |
| 22 | have to; doesn’t have to (Sofiia can stay at home); Do | ні |
| 23 | Close; Don’t; Put | ні |
| 24 | must (rule); mustn’t (no!); don’t have to (your choice) | ні: контекст у body відсікає обмін |
| 25 | the oldest (oldest / the most old); in ↔ of; biggest ↔ most big | ні: «the older» з варіантів прибрав, бо за двох церков вона могла б бути правильною; «of + місце» урок e5s10l5 ек. 3 прямо називає хибним |
| 26 | Have; have ↔ did; never ↔ ever | ні |
| 27 | Can I (use your pencil); can ↔ could; Could you (help me) | ні: «Could you use your pencil» за змістом хибне; «Can I help me» неграматичне |
| 28 | told; said; he ↔ I | ні |

## 3. Опора (D-019): урок → екран
Усі `lessons` теми існують (validate --diag 0 помилок) і навчають саме цього:

| Тема | Урок | Екрани з правилом |
|---|---|---|
| like | e5s1l6 | 3 (likes / doesn’t), 6 (What is she like? ↔ What does she like?) |
| much | e5s3l4 | 3 (a lot of / much / many, злічувані й незлічувані) |
| cani | e5s2l6 | 3 (Can I…? – Yes, you can; Could you help me, please?) |
| was | e5s8l5 | 3 (was / were), 6 (Were…? – Yes, they were) |
| ed | e5s9l5 | 3 (-ed), 6 (studied, stopped, travelled in British English) |
| can | e5s6l4 | 3 (can + verb, no -s, Can you…? – No, I can’t), 6 (very well) |
| going | e5s9l3; e5s9l4 | l3 ек. 3 (am / is / are going to + verb); l4 ек. 3 (Are you going to…? – Yes, I am; wh-питання) |
| will | e5s5l5 | 3 (will be, will rain / snow, won’t), 6 (Will it…? – No, it won’t) |
| imp | e5s2l5 | 3 (Open / close…, Put your hand up; дієслово першим, без -s), 5 (Don’t + verb) |
| comp | e5s10l4; e5s10l5 | l4 ек. 3 (big → bigger + than, «more» лише для довгих); l5 ек. 3 (the + -est, in + place, «Not: … of Ukraine») |
| cur-e6s1 | e6s1l6 | 3 (look like / be like), 5 (looks + adj.: looks happy) |
| cur-e6s2 | e6s2l3 | 3 (no + noun, a few + plural), 6 (both = two, all = three or more) |
| cur-e6s3 | e6s3l4 | 3 (make → made, eat → ate, drink → drank) |
| cur-e6s4 | e6s4l4 | 3 (was / were + -ing, wasn’t / weren’t), 5 (What were you doing…?) |
| cur-e6s5 | e6s5l5 | 3 (have / has to, don’t / doesn’t have to), 5 (Do I have to…? – Yes, you do) |
| cur-e6s6 | e6s6l4 | 3 (must + verb, «Not: must to»), 6 (mustn’t ↔ don’t have to: rule / your choice) |
| cur-e6s7 | e6s7l4 | 3 (Have you ever been…? – Yes, I have; never) |
| cur-e6s8 | e6s8l5 | 3 (told + person, said без особи), 5 (I → he / she), 3 (I love → she loved) |

Лексика нових речень трапляється в уроках 4–6 кл. (grep): fair hair, tired (e6s1); bananas, café, church, library, museum (e5s3, e5s7); camera (e5s6); the Natural History Museum, George (e6s8); Marta — канон (e4s1, e5s1: донька дядька Романа, двоюрідна сестра Тараса).

**`for` (правка):** за прецедентом dge5 `for` має збігатися з `requires` розділу.
- `ed`: `["e6s3", "e6s7"]` → `["e6s3"]`, бо e5s9l5 немає в requires e6s7.
- `imp`: `["e6s6", "e6s3"]` → `["e6s6"]`, бо e5s2l5 немає в requires e6s3. Plan-eng-g6 §4 (рядок e6s3) згадує імперативи в рецепті з e5s2l5. Куратору варто додати e5s2l5 у requires e6s3, тоді `imp` знову можна вести в e6s3 (рядок у inbox).

Решта `for` збігається з requires: like→e6s1, much→e6s2, cani→e6s2/e6s6, was→e6s3/e6s4, can→e6s4, going→e6s5, will→e6s5, comp→e6s8 (e5s10l4) / e6s7 (e5s10l5).

## 4. Форми й норма (словники відкрито в цій сесії через curl)
| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| travelled | https://dictionary.cambridge.org/dictionary/english/travel — «-ll- or US usually -l-» | https://www.oxfordlearnersdictionaries.com/definition/english/travel_1 — «past simple travelled» | ✅ BrE |
| stopped | …/english/stop — «-pp-» | …/stop_1 — «past simple stopped» | ✅ |
| studied | …/english/study (приклад «Richard studied engineering») | …/study_2 — «past simple studied» | ✅ |
| ate | …/english/eat — «ate \| eaten» | …/eat — «past simple ate» | ✅ |
| drank | …/english/drink — «drank \| drunk» | …/drink_2 — «past simple drank» | ✅ |
| made | …/english/make — «made \| made» | …/make_1 — «past simple made» | ✅ |
| both = два | …/english/both — «(referring to) two people or things together» | …/both_1 — «used with plural nouns to mean ‘the two’» | ✅ (All для двох — хибне) |
| mustn’t | …/english/mustn-t — «short form of must not» | …/must_1 — «must not mustn’t» | ✅ |
| look like | …/english/look-like — «to have a similar appearance to someone» | …/look_1 — «look like somebody/something» | ✅ |
| superlative + in + place | https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-interesting — «the fastest train in the world», «the tallest building in the world», «the youngest girl in the family» | WebSearch: Murphy, English Grammar in Use («longest river in the world», «of the world» позначено як помилку; сам PDF не відкривав) | ✅ «of our town» хибне; узгоджено з e5s10l5 ек. 3 |

AmE-правопису й лексики немає. Літер A/B/C в `opts` і позиційних посилань немає. Немає «Listen» чи «You hear», немає IPA. Kyiv, Kharkiv, Odesa, Poltava, the Carpathians — як у glossary/eng.md. `uk` немає.

## 5. Факти
Після правок у тесті немає фактичних тверджень: числа про площі Ukraine / UK (№10) і Dnipro / Hoverla (№25) прибрано разом із копіями. Ліцензованих зображень немає.

## 6. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «You mustn’t eat in the museum» / «Sofiia doesn’t have to come with us» / «What were you doing at three o’clock on Saturday» | дослівного збігу немає: лише типові граматичні приклади («You mustn’t eat in museums» у Red Line — інше речення) |
| «I’ve got no homework today! And I’ve got a few new books from the library» | збігу немає |
| «Are you going to visit your grandma this summer? Yes, I am. What are you going to do there» | у тому самому OR-запиті; збігу не показано |
Тексти завдань — короткі власні речення з героями серії.

## 7. Рівень і педагогіка
Речення — до 12 слів (6 кл.). Граматика — лише з уроків теми. Інструкції однакові («Choose the correct answer.», «Fill in the gaps.»). Лякаючого змісту немає. `why`: «from Year 5» → «from your English lessons» (STYLE verifier-dge5: «Year N» у британському розумінні не відповідає українському класу).

## 8. Прогін
- `node tools/validate.mjs --diag dge6` — 0 помилок, 0 попереджень (до і після правок).
- `node tools/validate.mjs --quiet` — 0 помилок.
- `python3 tools/test-answer-ui.py --diag dge6` не запускав: у контейнері немає Python-модуля playwright. Прогін лишається на CI (job browser).
- Build не запускав (за задачею оркестратора).
