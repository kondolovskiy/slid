# Верифікація: пул pe5s5 «Weather: rain, sun and storms» (англійська, 5 кл.)

Верифікатор: verifier-pe5s5 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s5.js` (68 вправ a01–a68) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s5.md. Опора: уроки `content/eng/g5-e5s5.js` (verified), reports/verify/e5s5.md, `img/eng/e5s5/`.

**Вердикт: пул придатний, `verified`.** Неправильних ключів, вправ без опори, другої правильної відповіді, яку рушій відкинув би, і збігів з опублікованими текстами немає. Я зробив 6 дрібних правок (§6). Ключі не змінювалися. Людині: нових TQ немає.

## 1. Програма (`sources`, `src`)

| Що | Джерело (відкрито в цій сесії) | Вердикт |
|---|---|---|
| `mpim с. 20`: тема «Природа: Погода, Природні явища»; функції «описувати, розповідати», «порівнювати» | МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (завантажено curl, SHA-1 43925b25c52b…, як у facts/eng.md; `pdftotext -f 20 -l 20`: «4.2.1. 5-ий клас… Природа — Погода, Природні явища»; колонтитул «20») | ✅ |
| `mpim с. 21`: «Comparatives and superlatives: form, position, use», «Future with will and shall…» | той самий PDF, `-f 21 -l 21`, колонтитул «21» | ✅ |
| `program: true`, `sources` — лише `mpim` | CONTENT_SCHEMA §10; validate без попереджень | ✅ |

## 2. Факти (клімат): лише якісні твердження розділу

| Твердження в пулі (вправи) | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Kyiv: winters cold, usually snow (a55, a66) | en.wikipedia Kyiv (raw): «Snow cover usually lies from mid-November to the end of March», Jan mean −3.2 — https://en.wikipedia.org/wiki/Kyiv; ЕСУ «Київ»: «Середня температура січня –6,0 °С… утворюється сніг. покрив» — https://esu.com.ua/article-11194 | ✅ |
| Kyiv: summer warm, sometimes hot; autumn cooler than summer; spring warmer than winter (a55, a62, a63) | en.wikipedia Kyiv: Jul mean 21.3, Oct mean 8.6, Apr mean 10.0, Jan −3.2; ЕСУ article-11194: липня +19,2 °С | ✅ |
| In Kyiv, January is colder than March (a37) | en.wikipedia Kyiv: Jan −3.2 / Mar 2.5; uk.wikipedia «Клімат України»: «Січ_сер=-6.0», «Бер_сер=-2.4» — https://uk.wikipedia.org/wiki/Клімат_України | ✅ |
| The south of Ukraine is warmer than the north (a57, a59, a64, a68) | en.wikipedia Geography of Ukraine: «5–7 °C in the north, to 11–13 °C in the south» — https://en.wikipedia.org/wiki/Geography_of_Ukraine; uk.wikipedia «Клімат України»: «на півдні України… зими не є такими холодними… 0…-2 °C» | ✅ |
| Carpathian Mountains: a lot of rain and snow (a57, a60) | en.wikipedia Geography of Ukraine: «particularly in the Carpathian Mountains, receives around 1200 mm»; ЕСУ «Карпати Українські»: «опадів від 500–800 мм… до 1600–2000 мм», «Навесні сніг довго лежить на округлих вершинах гір» — https://esu.com.ua/article-9920 | ✅ |
| England: winters not very cold, usually wet and windy (a56, a67) | en.wikipedia Climate of the UK: «wet and cool in winter…», «often the wettest and windiest time of the year» — https://en.wikipedia.org/wiki/Climate_of_the_United_Kingdom; uk.wikipedia «Клімат Великої Британії»: «не дуже холодними зимами» — https://uk.wikipedia.org/wiki/Клімат_Великої_Британії | ✅ |
| London: it doesn’t often snow (a56, a60, a67) | en.wikipedia Climate of London: «Snowfall is an infrequent occurrence in winter, falling on an average of 16 days per year» — https://en.wikipedia.org/wiki/Climate_of_London; uk.wikipedia «Клімат Великої Британії»: «переважають опади у вигляді дощів» | ✅ |
| UK: it rains in all seasons (a57, a59, a60, a65, a68) | uk.wikipedia «Клімат Великої Британії»: «У всі пори року дуже часто йде дощ»; en.wikipedia Climate of London: «evenly distributed all year round» | ✅ |
| UK: summers warm, not very hot (a65) | en.wikipedia Climate of the UK: «drier and warmer (though usually not hot) in summer»; uk.wikipedia: «Літо у країні прохолодне, середня температура липня становить +16°С» | ✅ |
| In winter, London is usually warmer than Kyiv (a57, a58, a61, a67) | Climate of London: Jan mean 3.5, Jan high 8.5; Kyiv −3.2 (en.wiki) / −6,0 (ЕСУ) | ✅ |
| Температури «today», прогнози для Kyiv, Lviv, Kharkiv, Odesa, села | — | ✅ вигадана погода одного дня, не клімат |

## 3. Форми й наголос (словники, curl у цій сесії)

| Що | CD (https://dictionary.cambridge.org/dictionary/english/<word>) | OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<word>) | Вердикт |
|---|---|---|---|
| `stress` a19–a21: rainbow, thunder, lightning, foggy, weather, minus — 1-й склад; degree(s) — 2-й | rainbow «ˈreɪn.bəʊ», thunder «ˈθʌn.də(r)», lightning «ˈlaɪt.nɪŋ», foggy «ˈfɒɡ.i», weather «ˈweð.ə(r)», minus «ˈmaɪ.nəs», degree «dɪˈɡriː» (UK і US — той самий склад) | rainbow «ˈreɪnbəʊ», thunder_1 «ˈθʌndə(r)», lightning_1 «ˈlaɪtnɪŋ», foggy «ˈfɒɡi», weather_1 «ˈweðə(r)», minus_1 «ˈmaɪnəs», degree «dɪˈɡriː» | ✅ кожне слово має один наголос в обох словниках; усі підкреслені `<u>` в e5s5l1 #3 або e5s5l2 #3 |
| cloudier (a28) | CD cloudy: приклад зі сторінки «…cloudier.» | OALD cloudy: «comparative cloudier» | ✅ |
| cooler (a62, a63) | — (у розділі, e5s5l3 #4) | OALD cool_1: «comparative cooler» | ✅ |
| wetter, sunnier, windier, hotter | reports/verify/e5s5.md (CD, OALD); правило y → i, tt — e5s5l3 #3 | — | ✅ |

## 4. Вправи: моє розв’язання → опора (D-019) → вердикт

Кожну вправу розв’язав сам до звірки з ключем. `word` — через `SLID_LANG.wordVerdict(s, v, "en")`; `build` — перебір **усіх** наборів і перестановок плиток з `extra` (1…n+extra плиток) через `SLID_LANG.check(s, st, "en")` (app/lang.js робочого дерева в node vm). Скрипти: /tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/verify-pe5s5/run.mjs, lex.mjs, matrix.mjs.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 word | degrees | = | l1 #3 | ні; «Degrees.» ok, «degree» → Almost | ✅ |
| a02 gaps | wet, dry | = | l1 #6 | ні | ✅ |
| a03 match | 30 hot, 20 warm, 10 cool, 0 cold | = | l1 #6 (та сама шкала) | ні: бієкція, монотонний порядок єдиний | ✅ (спірне автора: приймаю) |
| a04 word | minus | = | l1 #3 | ні | ✅ |
| a05 gaps | It’s, It’s | = | l1 #3 | ні | ✅ |
| a06 pick | [degree] | = | l1 #3 | ні (It’s cold, it’s snowing — правильні) | ✅ |
| a07 build | It’s minus two degrees. | = | l1 #3 | перебір 325: лише ключ | ✅ |
| a08 gaps | temperature, It’s, degrees, it’s | = | l1 #3 | ні | ✅ |
| a09 gaps | It’s, degrees | = | l1 #3 | ні | ✅ |
| a10 gaps | hot, degrees, dry, temperature | = | l1 #3, #6; дані на екрані | ні (30 °C — не cool/cold) | ✅ |
| a11 gaps | It’s, ten, wet, in | = | l1 #3, #6; «in Kyiv» з 4 кл. | ні | ✅ |
| a12 match | stormy ↔ гроза, foggy ↔ туман, rainbow ↔ веселка, snowy ↔ сніг | = | l2 #3–#5 | усі 16 пар: другої доречної немає; малюнки відрендерено — однозначні, `alt` = зображене | ✅ |
| a13 gaps | rainbow | = | l2 #3 | ні | ✅ |
| a14 word | foggy | = | l2 #3, #5 | «Use fog» відсікає misty | ✅ |
| a15 gaps | thunder, lightning | = | l2 #3 | ні | ✅ |
| a16 choice | It’s stormy. | = | текст на екрані | ні | ✅ |
| a17 gaps | foggy, rainbow | = | текст на екрані | ні | ✅ |
| a18 choice | at 5 pm | = | текст на екрані; l2 #2 | ні | ✅ |
| a19 stress | **rain**bow, **thun**der | = | l2 #3 `<u>` | §3 | ✅ |
| a20 stress | **light**ning, de**grees**, **fog**gy | = | l1 #3, l2 #3 | §3 | ✅ |
| a21 stress | **weath**er, **mi**nus, de**grees**, **light**ning | = | l1 #3, l2 #3 | §3 | ✅ (правка 1 у `hint`) |
| a22 gaps | colder, warmer | = | l3 #3 | ні (є than) | ✅ |
| a23 word | hotter | = | l3 #3 | «Use hot» відсікає warmer | ✅ |
| a24 pick | [weter] | = | l3 #3 | ні | ✅ |
| a25 word | windier | = | l3 #3 | ні; «more windy» — ні | ✅ |
| a26 build | Odesa is sunnier than Lviv. | = | l3 #3; дані | перебір 1956: лише ключ; питальний порядок відсічено «Oksana tells» + hint (NOTE verifier-e5s5); обернене — проти даних | ✅ |
| a27 gaps | sunnier, hotter, wetter | = | l3 #3 | ні (є than) | ✅ |
| a28 word | cloudier | = | l3 #3 (y → i: sunny, windy) + cloudy з l1 intro — перенесення правила, рівень 3, hint | «more cloudy» — менш нормативне, словники дають cloudier | ✅ (спірне автора: приймаю) |
| a29 gaps | warmer | = | l3 #3 | ні | ✅ |
| a30 gaps | warmer, windier | = | l3 #3 | **до правки**: «Lviv is ___: it’s four degrees» без than — база «warm» граматична (PITFALL writer-pe5s5); відсікалася лише шкалою 4 °C ≠ warm | ✅ після правки 2 |
| a31 gaps | sunnier, hotter, wetter | = | l3 #3 | ні (than у кожному реченні) | ✅ |
| a32 gaps | more dangerous, more beautiful | = | l4 #3 | ні | ✅ |
| a33 gaps | better, worse | = | l4 #5 | ні | ✅ |
| a34 pick | [more] | = | l4 #3 («don’t use more and -er together» — l4 #4 fbText) | ні | ✅ |
| a35 word | better | = | l4 #5 | «Use good» відсікає nicer | ✅ |
| a36 build | Lightning is more dangerous than rain. | = | l4 #3 | перебір 13 699: лише ключ; питання — «tells» + hint; обернене — проти l4 #3 | ✅ |
| a37 gaps | more beautiful, worse, colder | = | l4 #3, #5; факт січень/березень — §2 | ні | ✅ |
| a38 word | more interesting | = | l4 #3 | ні | ✅ (правка 3 у `body`) |
| a39 gaps | better | = | l4 #5 | ні | ✅ |
| a40 gaps | more beautiful, worse | = | l4 #3, #5 | ні (без than, але базових bad/beautiful серед варіантів немає) | ✅ (правка 4: герой) |
| a41 gaps | better, more beautiful, more dangerous | = | l4 #3, #5 | ні | ✅ |
| a42 gaps | will be, will rain | = | l5 #3 | going to варіантом немає | ✅ |
| a43 pick | [is] | = | l5 #3 | ні | ✅ |
| a44 build | It will be windy tomorrow. / Tomorrow it will be windy. | обидва | l5 #3, #4 | перебір 1956: лише два ключі; питання — «tells» + hint | ✅ |
| a45 word | will | = | l5 #6 | ні («is» на «Will it…?» — ні) | ✅ |
| a46 word | will | will / is going to (+ contractions) | l5 #3 | going to у ключі; «’s going to» → Almost (рідкісне введення, не блокує) | ✅ |
| a47 gaps | won’t, will be | = | l5 #6 | ні | ✅ |
| a48 gaps | will | = | l5 #6 | ні | ✅ |
| a49 build | What will the weather be like tomorrow? | = | l5 #6 (дослівна модель) | перебір 13 699: лише ключ; «What will be the weather like» — не норма (be like не розривають), «What is the weather like tomorrow» неможливе (пастка `are`, не `is`) | ✅ (спірне автора: приймаю) |
| a50 word | won’t | won’t / isn’t going to (+ contractions) | l5 #6 | will not, is not going to — ok; isn’t — ні | ✅ |
| a51 gaps | No, it won’t. / Yes, it will. | = | l5 #6 | ні | ✅ |
| a52 choice | on Sunday afternoon | = | текст на екрані | ні | ✅ |
| a53 gaps | won’t, foggy | = | текст на екрані | ні | ✅ |
| a54 choice | Kharkiv will be colder than Kyiv. | = | числа на екрані, l3 + l5 | ні (два інші суперечать даним) | ✅ |
| a55 choice | It’s warm, and sometimes it’s hot. | = | текст на екрані | ні | ✅ (правка 5: тире) |
| a56 gaps | not very cold, doesn’t often snow | = | текст на екрані | ні | ✅ |
| a57 choice | The south of Ukraine is warmer than the north. | = | тексти на екрані | ні | ✅ |
| a58 gaps | colder | = | l6 #2–#5 | ні (warmer — хибне) | ✅ |
| a59 gaps | warmer, in all seasons | = | l6 #3, #4 | ні | ✅ |
| a60 match | than London / in all seasons / snow / and snow | = | l6 #3, #4, #6 | усі 16 пар: «it rains» бере лише «in all seasons.» (інші не граматичні), «doesn’t often» — лише «snow.», тоді Carpathians — «and snow.»; бієкція єдина | ✅ |
| a61 word | warmer | = | l6 #4 | «Use warm or cold»: colder — хибне за фактом | ✅ |
| a62 gaps | cooler, warmer | = | l6 #3, l3 #4 | ні (є than) | ✅ |
| a63 build | Autumn is cooler than summer. | = | l6 #3, #6 | перебір 1956: лише ключ; пастка `cool`, не протилежний прикметник (PITFALL verifier-e5s5); «He starts with Autumn» | ✅ |
| a64 word | warmer | = | дані на екрані + l6 | «Use warm» | ✅ |
| a65 gaps | rains, are, aren’t | = | l6 #4 | ні | ✅ |
| a66 gaps | cold, snow | = | l6 #3 | ні | ✅ |
| a67 gaps | aren’t, doesn’t, warmer | = | l6 #4 | ні | ✅ |
| a68 gaps | warmer, rains, more beautiful | = | l6, l4 #3 | ні | ✅ |

**Матриця урок × `sk` (звірено вручну — personalization-qa її не перевіряє):** l1 vocab 4 / gram 4 / write 3; l2 vocab 4 / read 3 / phon 3; l3 gram 7 / write 3; l4 gram 7 / write 3; l5 gram 6 / func 4 / read 3; l6 read 3 / cult 4 / gram 4 / write 3 — у кожній парі рівні 1, 2, 3; кожен `sk` є серед оцінюваних екранів свого уроку, зайвих `sk` немає. Boss l7 — без вправ.

**Ключі `word`** (degrees, minus, foggy, hotter, windier, cloudier, better, more interesting, will, will / is going to, won’t / isn’t going to, warmer) — без кінцевого `.!?`. Час у пулі — лише «8 am / 4 pm» у тексті, не в ключах.

## 5. Лексика, BrE, рівень, авторське право

- **Лексика вправ і рамок** (скрипт lex.mjs: слова кожної вправи проти e4s1–e4s8, e5s1–e5s4 і уроків e5s5 до уроку вправи включно): до правок поза опорою були `careful` (a21 hint), `just` (a30 hint), `boring` (a38 body; уперше в e5s6) — замінено (правки 1–3). Лишилися `thirty` (a10, a11 — число 30 °C на екрані; -ty з e4s4l4, twenty — e5s3; не ключ) і форми-пастки (warmmer, windyer) та `cloudier` (ключ a28, перенесення правила) — приймаю.
- **BrE:** colours, favourite, penfriend, Mum, «8 am», °C, лапки “ ”, апостроф ’; AmE-правопису й лексики немає; A/B/C і позиційних посилань в `opts` немає; IPA, «Listen», «You hear» — немає. Тире в англійському тексті — en dash (правка 5).
- **Рівень пояснень:** `steps`, `hint` — короткі речення з «→», термінів немає; `uk` не потрібне.
- **Герої:** Andrii (Kyiv, сестра Sofiia), Emma (England), Taras (Lviv), Mariia (Kharkiv), Oksana (village); нових героїв немає. Taras у e5s5l4 — «Summer is more beautiful», «Summer is my favourite season» (l4 #8); a40 від його імені «autumn is more beautiful than summer» з цим не в'язалося — перенесено на Mariia (правка 4). a37/a68 (autumn > spring) і a32 (summer > winter) канону не суперечать.
- **Копії уроку:** a12 близька до l2 #4 і boss T2 (ті самі малюнки, підписи-речення замість іменників), a36 — речення з l4 #3, a50 — модель l5 #8 з іншою погодою. Для тренування прийнятно; не блокує.
- **Авторське право (WebSearch з лапками, фрагменти ≥ 12 слів):**

| Фрагмент | Запит | Результат |
|---|---|---|
| a18 «At 5 pm, the rain is stopping, and the sun is shining» | дослівно | збігу немає |
| a41 «Spring flowers are more beautiful than snow» + «a storm is more dangerous than rain» | дві фрази | збігу немає |
| a56 «In England, winters aren’t very cold. It’s usually wet and windy» | дослівно | збігу немає |
| a16 «It’s very stormy in Lviv today. There’s thunder and lightning» | дослівно | збігу немає |
| a55 «Winters here are cold, and there is usually snow. I love winter» | дослівно | збігу немає |
| a53 «It will be windy and cool» + «It will be foggy in the morning. Then it will rain» | дві фрази | збігу немає |
| a40 «I think autumn is more beautiful than summer. But autumn weather is worse» | дослівно | збігу немає |
| a31 «My village is sunnier than Lviv today» | дослівно | збігу немає |

## 6. Правки, які я зробив (content/eng/pool-g5-e5s5.js)

1. **a21 `hint`:** «Careful: one word is different.» → «One word is different.» — `careful` немає в уроках до e5s5l2.
2. **a30 `text`:** «Lviv is {…warmer…}: it’s four degrees there.» → «Lviv is {…warmer…} than Kharkiv: it’s four degrees there.»; `hint` «warm: just add -er.» → «warm: add -er.». Причина: comparative без than допускає базову форму (PITFALL writer-pe5s5); `just` — поза лексикою.
3. **a38 `body`:** «Rain is boring for him.» → «He doesn’t like rain.» — `boring` уперше в e5s6.
4. **a40 `body`:** «Taras writes…» → «Mariia writes about autumn and summer.» — узгодження з каноном Taras у e5s5l4.
5. **a55 `steps`:** «Cold and snow — that’s winter.» → «Cold and snow – that’s winter.» (en dash, glossary/eng.md).
6. **Статус:** `status: "verified"`, `meta.factcheck: "verifier-pe5s5 (reports/verify/pe5s5.md)"`, рядок «Статус» у шапці.

Після правок: `node tools/validate.mjs --pool pe5s5` — **0 помилок, 0 попереджень**; `personalization-qa --pool pe5s5` — без зауважень; euphony — без зауважень; перебір `build` — ті самі ключі.

## 7. Рекомендовано (не блокує)

1. **Браузер:** `python3 tools/test-answer-ui.py --suite content --pool pe5s5` не запускався (у контейнері немає Python-модуля playwright) — на оркестраторі / CI.
2. **ENGINE (як reports/verify/e5s5.md §6 п. 3):** «’s going to» на ключ «is going to» (a46) дістає «Almost: check the spelling.» — рідкісне введення.
3. **a14 `hint`** «Look at the spelling: fo + gg.» майже показує відповідь — для style-sync можна замінити на «fog → …? Look at the list in the lesson.»

## 8. Вердикт

| Урок пулу | Вправи | Вердикт |
|---|---|---|
| e5s5l1 | a01–a11 | ✅ |
| e5s5l2 | a12–a21 | ✅ (правка 1) |
| e5s5l3 | a22–a31 | ✅ (правка 2) |
| e5s5l4 | a32–a41 | ✅ (правки 3–4) |
| e5s5l5 | a42–a54 | ✅ |
| e5s5l6 | a55–a68 | ✅ (правка 5) |

**Пул pe5s5 — `verified`.** `approved` ставить лише вчитель.
