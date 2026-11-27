# Верифікація: пул pe10s5 (англійська, 10 кл., розділ e10s5 «Painting and Ukrainian artists»)

Верифікатор: verifier-pe10s5, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s5.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s5.md. Опора: уроки `content/eng/g10-e10s5.js` (verified) і розділи g4–e10s4.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 4 правки: 1 зайвий (неприродний) порядок у ключі `build` (a22), 1 копію рамки уроку (a48), хибні сторінки програми в `src` 6 вправ на пасив і шапку пулу, статус і meta. Людині вирішувати нічого не треба.

## 1. Програма, `src`
Програму П1407 відкрив у цій сесії (https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf, pdftotext; колонтитули «22», «23»). Друкована с. 22, 10 кл.: тема «Живопис» (жанри живопису; відомі художники та їхні твори; відвідування музею, виставки або галереї; українські митці) і функція «описувати події в їхній логічній послідовності, висловлюючи власну точку зору». С. 23, «Мовний інвентар – граматика»: Verb — **Past Perfect Continuous**; Clause — Past Perfect with adverbial clauses of time. **Пасиву на с. 23 немає.**
- a40–a48 (PPC) → с. 23 ✅.
- a16–a18, a22–a24 (Past Simple passive) мали «p1407 с. 23», а шапка пулу писала «с. 23 — … пасив Past Simple». Це ❌ хибна сторінка → виправив на «p1407 с. 22» (тема «відомі художники та їхні твори»; так само пасив обґрунтовує шапка уроку: «повторення e7s7l2»), шапку пулу виправив.
- Решта (лексика, читання, опис, думка) → с. 22 ✅. `sources`: `p1407`, `program: true`, url — як у facts/eng.md ✅.

## 2. Факти
Усі факти пулу взято з уроків l2 і l3. Джерела я відкрив у цій сесії (WebFetch і WebSearch). Сайти bankofengland.co.uk, nationalgallery.org.uk і encyclopediaofukraine.com з цієї сесії не резолвляться, тож їхні сторінки я бачив лише як результати WebSearch.

| Твердження (вправа) | Джерела | Вердикт |
|---|---|---|
| 2005, опитування BBC Radio (Today): The Fighting Temeraire — перше місце, The Hay Wain — друге (a12, a17) | https://en.wikipedia.org/wiki/Greatest_Painting_in_Britain_Vote ; https://bbclatestnews.pages.dev/pressoffice/pressreleases/stories/2005/09_september/05/painting.shtml (прес-реліз BBC, 05.09.2005: «3 – A Bar at the Folies-Bergère … 13,280»; Hay Wain 21,711) ; https://www.currybet.net/cbet_blog/2005/09/turner-prize---the-greatest-pa.php | ✅ |
| Turner на £20 з 2020: його обличчя (автопортрет) і The Fighting Temeraire (a14) | https://www.bankofengland.co.uk/news/2020/february/turner-20-enters-circulation («Turner £20 enters circulation», 20.02.2020) ; https://en.wikipedia.org/wiki/Bank_of_England_£20_note («c.1799 self-portrait … a version of The Fighting Temeraire») | ✅ |
| The Hay Wain: 1821, у Лондоні не знайшла покупця, згодом золота медаль у Парижі (a15) | https://en.wikipedia.org/wiki/The_Hay_Wain («exhibited at the Royal Academy in 1821 … failed to find a buyer»; «gold medal awarded by Charles X») ; https://www.britannica.com/topic/The-Hay-Wain («Paris Salon, where it won a gold medal») | ✅ |
| Обидві картини в National Gallery (a14, a17, a23) | https://www.nationalgallery.org.uk/paintings/the-hay-wain (NG1207) ; Wikipedia Greatest Painting vote (директор NG: «hang in the same room») | ✅ |
| FT: буксир тягне старий військовий корабель Темзою (a10, a13) | https://en.wikipedia.org/wiki/The_Fighting_Temeraire ; https://rmg.co.uk/stories/blog/curatorial/towing-temeraire-drawing-rediscovered | ✅ |
| Bilokur: Bohdanivka; школа в Myrhorod не прийняла; самоука; перша виставка — Poltava, 1940 (a26, a32, a33, a37) | https://en.wikipedia.org/wiki/Kateryna_Bilokur («born … 1900 in the village Bohdanivka»; Myrhorod: «she wasn't accepted to the school»; «In 1940 an exhibition of 11 paintings by Bilokur opened in the House of Folk Art in Poltava») ; https://kyivpost.com/post/40905 (Myrhorod «was not admitted»; Poltava, 1940 — через WebSearch) | ✅ |
| Prymachenko: Bolotnia, самоука, блакитний бик, фантастичні звірі (a27, a29, a32) | https://en.wikipedia.org/wiki/Maria_Prymachenko ; https://www.theartnewspaper.com/2022/02/28/ukraine-museum-burns-down-in-russian-invasion-destroying-25-works-by-folk-artist-maria-prymachenko | ✅ |
| Murashko: народився в Kyiv 1875; Munich — золота медаль за Carousel; Girl in a Red Hat — НХМУ, Kyiv (a25, a31, a32, a39) | https://en.wikipedia.org/wiki/Oleksandr_Murashko ; https://www.encyclopediaofukraine.com/pages%5CM%5CU%5CMurashkoOleksander.htm («b 7 September 1875 in Kyiv»; «A Carousel (1906) was awarded the main prize at the Munich international exhibition») ; https://eclecticlight.co/2023/02/22/ukrainian-painters-oleksandr-murashko/ («Girl with a Red Hat … National Art Museum of Ukraine») | ✅ (ступінь медалі в джерелах різний; пул каже лише «a gold medal», як урок) |

**Реальні заклади:** National Gallery, НХМУ — лише факти уроку. Музеї й виставки героїв (a50, a52, a53, a48) без назв, правил реальним закладам пул не приписує ✅.
**Канон героїв** (glossary/eng-heroes.md): Aunt Iryna — тітка-художниця Andrii ✅; Oksana — липень в Odesa, дім у Zelena Dolyna, Grandma Hanna ✅; Polina, Artem — подруга й однокласник Mariia (Kharkiv) ✅; Oliver, Ruby — однокласники Emma, Mr Hill ✅; дідусь Emma живе в її місті ✅; Sofiia — сестра Andrii, шахи ✅; Taras і Ostap (Plast, Carpathians), Taras фотографує ✅; Daryna (Kyiv) ✅. Вік 16 ніде не суперечить.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
Спершу я розв'язав усі вправи за дампом без ключів (варіанти відсортовані, `*` прибрано), потім звірив із ключами. `SLID_LANG.check(solution)` зараховує всі вправи. У `build` скрипт перебрав усі перестановки з `extra` (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s5-pe10s6/bin/chk.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Вердикт |
|---|---|---|---|---|
| a01 match | portrait–mum, still life–flowers/books, landscape–fields, seascape–boat | = | l1 info «Genres» | ✅ |
| a02 gaps | watercolours; oil paints; paintbrush | = | l1 «Paints and brushes» | ✅ |
| a03 word | lifes | = | l1 word fbText «plural still lifes»; CD/OALD «plural still lifes» | ✅ |
| a04–a06 stress | ar; bi / sea, bi, paint / wa, pain, bi, land | = | l1 `<u>`; CD, OALD (§4) | ✅ |
| a07 choice | a landscape | = | l1 | ✅ |
| a08 multi | Polina self-portrait; Artem landscape | = | l1 | ✅ |
| a09 gaps | seascapes; landscape; portrait | = | l1 | ✅ |
| a10 choice | The Fighting Temeraire | = | l2 info | ✅ |
| a11 match | 4 пари | = | l2 info; перебрав усі праві | ✅ |
| a12 choice | The Hay Wain | = | l2 intro («came first and second … see them both») + info | ✅ |
| a13 choice | small boat pulls warship | = | l2 info | ✅ |
| a14 multi | same gallery; Turner’s face on £20 | = | текст + l2 | ✅ |
| a15 choice | nobody in London bought it | = | текст | ✅ |
| a16 gaps | was painted; were painted | = | l2 «It was painted by…» | ✅ (src → с. 22) |
| a17 gaps | painted; was voted; kept | = | l2 info (are kept), gaps | ✅ (src → с. 22) |
| a18 word | was shown | = | l2 gaps (was shown) | ✅ (src → с. 22) |
| a19 gaps | known; for | = | l2 «Famous for…» | ✅ |
| a20 word | masterpiece | = | l2 info | ✅ |
| a21 pick | [of] | = | l2 | ✅ |
| a22 build | The Fighting Temeraire was painted by J. M. W. Turner. | + «By J. M. W. Turner The Fighting Temeraire was painted.» | l2 | ⚠️ другий ключ — неприродне винесення агента на початок; урок такого порядку не дає → прибрав (src → с. 22) |
| a23 build | Both paintings are kept in the National Gallery. | + In the National Gallery both paintings are kept. | l2 info | ✅ (src → с. 22) |
| a24 gaps | was painted; shows; for | = | l2 | ✅ (src → с. 22) |
| a25 choice | in Munich | = | текст, l3 | ✅ |
| a26 multi | без учителя; Poltava | = | текст, l3 | ✅ |
| a27 choice | Maria Prymachenko | = | l3 | ✅ |
| a28 gaps | self-taught; flowers | = | l3 | ✅ |
| a29 match | 4 пари | = | l3; перебрав усі праві | ✅ |
| a30 word | taught | = | l3 | ✅ |
| a31 choice | NAMU, Kyiv | = | l3 info | ✅ |
| a32 match | Bohdanivka–born, Bolotnia–Prymachenko, Kyiv–Murashko, Poltava–1940 | = | l3 | ✅ |
| a33 pick | [Poltava] | = | l3 | ✅ |
| a34 gaps | taught; herself | = | l3 | ✅ |
| a35 word | himself | = | l3 word (herself) + займенник | ✅ |
| a36 pick | [himself] | = | l3 | ✅ |
| a37 gaps | didn’t want; is | = | l3 | ✅ |
| a38 build | Oleksandr Murashko was a famous portrait painter from Kyiv. | = | l3 | ✅ (1 порядок) |
| a39 gaps | was born; won; is | = | l3 | ✅ |
| a40 gaps | had been walking; had been taking | = | l4 info | ✅ |
| a41 build | Emma had been waiting since ten o’clock. (+ Since ten…) | = | l4 | ✅ |
| a42 multi | had been playing … for two hours; was playing chess. | = | l4 «was waiting or had been waiting?» | ✅ |
| a43 gaps | had painted; had been painting | = | l4 «How many?» | ✅ (had been painting four apples — хибне за правилом уроку) |
| a44 pick | [had been liking] | = | l4 (like — стан) | ✅ |
| a45 multi | had been waiting + had waited | = | l4 «With for and an action verb, both are often fine» | ✅ |
| a46 gaps | had been doing; had been talking | = | l4 | ✅ |
| a47 word | had been drawing / ’d been drawing | = (contractions) | l4 | ✅ |
| a48 gaps | had been standing; had known; had seen | = | l4 | ⚠️ «We had been standing in the queue for … when …» — рамка l5 (reading part 1, boss Task 7) з тим самим ключем → «outside the museum» |
| a49 match | 4 пари | = | l5 info | ✅ |
| a50 gaps | queue; guide; display; shop | = | l5 | ✅ |
| a51 choice | People can see it | = | l5 on display | ✅ |
| a52 choice | on Tuesday | = | текст | ✅ |
| a53 multi | waited; guide told about Bilokur | = | текст | ✅ |
| a54 order | rooms → tour → portraits → gift shop → bus | = | текст, l4 had been + when | ✅ |
| a55 gaps | opening hours; gift shop | = | l5 | ✅ |
| a56 build | In my opinion, the trip to the gallery was worth it. | = | l5 reading 3 («worth it», «In my opinion») | ✅ |
| a57 gaps | opening hours; queue; guided tour | = | l5 | ✅ |
| a58 gaps | On; At | = | l6 info | ✅ |
| a59 choice | in the background | = | l6 | ✅ |
| a60 pick | друге [In] | = | l6 | ✅ |
| a61 gaps | are; is reading | = | l6 | ✅ |
| a62 word | are flying | = | l6 | ✅ |
| a63 pick | [is] | = | l6 | ✅ |
| a64 build | A girl is painting in the centre. (+ In the centre…) | = | l6 | ✅ |
| a65 gaps | are skating; In; is; opinion | = | l6 | ✅ |
| a66 word | is sitting / ’s sitting | = | l6 word (’s crossing) | ✅ |
| a67 sort | 3 / 3 | = | l6 info («It looks calm» — думка), sort | ✅ |
| a68 gaps | reminds; looks | = | l6 | ✅ |
| a69 pick | [remembers me of] | = | l6 | ✅ |

**Past Perfect Simple / Continuous:** з for і дієсловом дії had painted / had waited ніде не стоїть хибним варіантом (a45 — обидві в ключі). Кількість (four apples, twenty paintings) — лише simple (a43, a48), стан (know, like) — лише simple (a44, a48). Була + -ing з for … up to a moment хибна, як у l4 (a42, a45) ✅. **Друга правильна відповідь:** інших граматичних BrE-варіантів у `gaps`/`word`/`choice` немає. Після правки a22 кожен граматичний порядок плиток `build` є в ключі, і кожен зарахований порядок граматичний ✅. **`word`** без кінцевого `.!?` ✅. **hint** не підписує пропуски й не видає ключ; a06 «Three words have the stress at the start. One doesn’t» лише навігує, яке саме слово — не каже ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: artist «ˈɑː.tɪst», painter «ˈpeɪn.tə», exhibition «ˌek.sɪˈbɪʃ.ən», landscape «ˈlænd.skeɪp», seascape «ˈsiː.skeɪp», paintbrush «ˈpeɪnt.brʌʃ», watercolour «ˈwɔː.təˌkʌl.ə». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: /ˈɑːtɪst/, /ˈpeɪntə(r)/, /ˌeksɪˈbɪʃn/, /ˈlændskeɪp/, /ˈsiːskeɪp/, /ˈpeɪntbrʌʃ/, /ˈwɔːtəkʌlə(r)/. UK і US наголос однаковий; кожне слово підкреслене `<u>` в l1 ✅.
- **Форми:** still life — CD https://dictionary.cambridge.org/dictionary/english/still-life «plural still lifes», OALD https://www.oxfordlearnersdictionaries.com/definition/english/still-life «still lifes» ✅; on display — CD https://dictionary.cambridge.org/dictionary/english/display «on display … at the museum» ✅.
- **Лексика** (скрипт `bin/lex.mjs` перевіряє проти g4–e10s4 і e10s5 до уроку вправи): скрипт позначив лише paintbrush, masterpiece, sketchbook (у розмітці уроку вони стоять з `<u>` чи в множині) і дистрактор reminding. Слів поза уроками й слів із пізніших уроків розділу немає ✅. Після правок нових слів немає.
- **BrE, без звуку:** watercolours, colour, queue, centre; AmE, IPA, A/B/C, «Listen» немає ✅. `keepCase` не вжито ✅.
- **Копії рамок** (6-грами, `bin/ngram.mjs`): збігаються лише шаблонні інструкції й факти уроку. Єдина рамка з тим самим ключем — a48, її виправлено ✅.
- **Авторське право** (WebSearch у лапках):

| Фрагмент | Запит | Результат |
|---|---|---|
| a07 «This week she is painting the fields near Chernihiv in autumn…» | "she is painting the fields near Chernihiv in autumn" | збігу немає |
| a53 «We couldn’t use a flash, so I drew some of my favourite paintings in my sketchbook» | у лапках | збігу немає |

## 5. Правки (зроблені)
1. a16, a17, a18, a22, a23, a24: `src` «p1407 с. 23» → «p1407 с. 22» (пасиву в граматиці с. 23 немає); шапка пулу виправлена.
2. a22: з `answer` прибрано «By J. M. W. Turner The Fighting Temeraire was painted.».
3. a48: «in the queue» → «outside the museum» (не копіює рамку l5 і boss Task 7).
4. `status: "verified"`, `meta.factcheck`, рядок статусу в шапці.

`node tools/validate.mjs --pool pe10s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s5` — 69 вправ, 6 уроків, без помилок; `euphony --pool pe10s5` — без зауважень. test-answer-ui не запускав: Python-модуля playwright у контейнері немає, тож прогін буде в CI.
