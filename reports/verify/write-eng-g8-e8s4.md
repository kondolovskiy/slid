# Верифікація e8s4 «Music» (eng, 8 кл.)

verifier-e8s4, 2026-11-25. Файл: content/eng/g8-e8s4.js (7 уроків: 6 + фінал). Задача: write-eng-g8-e8s4.
Скіл content-verify (розділ «Англійська»); AGENTS.md; style/eng.md; pitfalls-content «Англійська»; D-055, D-056.

**Вердикт: усі 7 уроків → `verified`.** 3 правки (1 — вигадане ім'я збігалося з реальними й з героєм e8s3; 2 — друга правильна відповідь у `word`). Нових TQ немає.
`validate --section e8s4`: 0 помилок, 0 попереджень. Плейтест не запускався: у контейнері немає Python-модуля playwright — прогін лише в CI.

## 1. Факти
| Твердження (екран) | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Mykola Lysenko, 1842–1912, Ukrainian composer, operas, music for folk songs (l5 «Reading part 1») | https://en.wikipedia.org/wiki/Mykola_Lysenko (raw: birth 22.03.1842, death 6.11.1912); WebSearch → https://www.encyclopediaofukraine.com/pages%5CL%5CY%5CLysenkoMykola.htm | ✅ |
| 1904 — opened a music school in Kyiv (l5, boss T5) | https://en.wikipedia.org/wiki/Kyiv_National_I._K._Karpenko-Kary_Theatre,_Cinema_and_Television_University (raw: «registered 5 March 1899 … only opened in September 1904»); WebSearch → https://www.encyclopediaofukraine.com/pages%5CL%5CY%5CLysenkoMusicandDramaSchool.htm («established in Kyiv 1904 by Mykola Lysenko»). Текст каже «opened», не «founded» — розбіжність 1899/1904 не зачіпає | ✅ |
| Leontovych — Ukrainian composer, famous choral version of Shchedryk; liked Lysenko’s music (l5) | https://en.wikipedia.org/wiki/Mykola_Leontovych («His music was inspired by … Mykola Lysenko»); EoU Lysenko (у переліку учнів і шанувальників — Leontovych, через WebSearch вище) | ✅ |
| Shchedryk — Ukrainian folk song; 1922 — a Ukrainian choir sang it in New York; Carol of the Bells (l5 intro, final) | https://en.wikipedia.org/wiki/Shchedryk_(song) (Koshetz’s Ukrainian National Chorus, Carnegie Hall, 5 Oct 1922; based on a traditional folk song); WebSearch → https://carnegiehall.org/explore/articles/2022/11/29/carol-of-the-bells , https://kyivindependent.com/from-a-ukrainian-village-to-home-alone-carol-of-the-bells | ✅ (слова Вільговського не цитуються) |
| The Beatles — rock band from Liverpool, 1960–1970 (l5 part 2, boss T5) | https://en.wikipedia.org/wiki/The_Beatles (raw: «English rock band (1960–1970)», origin Liverpool); WebSearch → https://www.britannica.com/topic/the-Beatles , https://www.britannica.com/summary/the-Beatles | ✅ |
| Kalush Orchestra — Ukrainian band, folk + rap; won Eurovision 2022 with Stefania (l5 part 2) | https://en.wikipedia.org/wiki/Kalush_Orchestra (genre hip hop, folk rap); WebSearch → https://www.npr.org/2022/05/13/1098810226/eurovision-ukraine-kalush-orchestra , https://www.rollingstone.com/music/music-news/ukraine-kalush-orchestra-2022-eurovision-song-contest-winner-1353287/ (eurovision.tv — поза дозволеними хостами) | ✅ |
| Bandura — Ukrainian instrument with many strings (l2) | CD «a musical instrument with many strings from Ukraine» — https://dictionary.cambridge.org/dictionary/english/bandura ; https://en.wikipedia.org/wiki/Bandura («Ukrainian plucked-string folk-instrument») | ✅ |
| Lviv — west of Ukraine, famous opera house; Kharkiv — big city in the east (l4) | https://en.wikipedia.org/wiki/Lviv («largest city in the western part»), https://en.wikipedia.org/wiki/Lviv_Theatre_of_Opera_and_Ballet ; https://en.wikipedia.org/wiki/Kharkiv («eastern Ukraine»); WebSearch → https://www.britannica.com/place/Lviv-Ukraine , https://britannica.com/place/Kharkiv-Ukraine (northeastern) | ✅ («east» для 8 кл. достатньо) |

### Вигадані імена (перевірка на збіг)
| Ім'я | Запит | Результат | Рішення |
|---|---|---|---|
| Mila Kvitka (співачка, сама пише пісні) | WebSearch `"Mila Kvitka" singer` | Точного збігу немає, але є реальні **Mariia Kvitka** — українська співачка, композиторка, фольклористка (https://numotamo.com/en/talent/marija-kvitka , https://www.viberate.com/artist/mariia-kvitka) і **Kvitka Cisyk** (https://euromaidanpress.com/2017/04/07/kvitka-cisyk-the-american-singing-sensation-who-never-forgot-her-ukrainian-roots/). До того ж прізвище Kvitka вже має Ms Kvitka (head teacher, e8s3), і inbox NOTE writer-e8s3 забороняє давати його іншим героям | ❌ → **перейменовано на Mila Lastivka** (4 місця) |
| Mila Lastivka | WebSearch `"Mila Lastivka" OR "Міла Ластівка" співачка` | збігів немає | ✅ |
| Kashtan (гурт із Kyiv) | WebSearch `Kashtan Ukrainian band Kyiv гурт "Каштан"`, `"Kashtan" band Ukraine music group` | збігів немає (найближче — Kazka) | ✅ |
| Blue Sky (пісня) | — | назва загальна, не цитується текст | ✅ |

## 2. Форми й норма (BrE)
| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| music, classical, concert, popular — 1-й склад (l1 stress) | ˈmjuː.zɪk, ˈklæs.ɪ.kəl, ˈkɒn.sət, ˈpɒp.jə.lər — https://dictionary.cambridge.org/dictionary/english/<слово> | /ˈmjuːzɪk/, /ˈklæsɪkl/, /ˈkɒnsət/, /ˈpɒpjələ(r)/ — https://www.oxfordlearnersdictionaries.com/definition/english/<слово> (concert_1) | ✅ |
| guitar, violin — останній; musician — 2-й; orchestra — 1-й (l2 stress) | ɡɪˈtɑːr, ˌvaɪəˈlɪn, mjuːˈzɪʃ.ən, ˈɔː.kɪ.strə | /ɡɪˈtɑː(r)/, /ˌvaɪəˈlɪn/, /mjuˈzɪʃn/, /ˈɔːkɪstrə/ | ✅ |
| gui<u>tar</u>ist, <u>pi</u>anist, pi<u>an</u>o, vio<u>lin</u>ist, ban<u>du</u>ra, com<u>pos</u>er (`<u>` в l2, l5) | ɡɪˈtɑː.rɪst, ˈpiː.ən.ɪst, piˈæn.əʊ, ˌvaɪəˈlɪn.ɪst, bænˈduː.rə, kəmˈpəʊ.zər | /ɡɪˈtɑːrɪst/, /ˈpɪənɪst/, /piˈænəʊ/, /ˌvaɪəˈlɪnɪst/ (bandura в OALD немає — друге джерело Wikipedia) | ✅ |
| world-famous «known all over the world» | «known about by many people from most parts of the world» | «known all over the world» | ✅ |
| well-known; open-air «outside»; old-fashioned «not modern» | well-known; «open-air concert»; B1 «not modern» | «known about by a lot of people»; «happening … outside rather than inside a building»; «not modern; no longer fashionable» | ✅ |
| classical music, не classic music | CD «Classic or classical?» (на …/english/classical) | — (граматична примітка словника) | ✅ |
| дефіс у compound adjective перед іменником; a twelve-hour flight (без -s) | CD Grammar «Compounds» — https://dictionary.cambridge.org/grammar/british-grammar/compounds | — | ✅ |
| defining: who/that, which/that; пропуск, коли займенник — додаток; non-defining: коми, не that | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-defining-and-non-defining («We often leave out the relative pronoun when it is the object of the verb»; «We can use that … in defining relative clauses, but not in non-defining») | — | ✅ |
| play the guitar (без on) | CD play: «learned how to play the guitar by ear» — …/english/play | — | ✅ |
| folk music = traditional music | CD folk music: «traditional music from a particular country or region» — …/english/folk-music | — | підстава правки №2 |

BrE у тексті: Mum, flat, practises (дієслово), programme, queue, neighbour, favourite, has got — ✅; AmE немає. IPA, «Listen/You hear», A/B/C в `opts`, `uk` — немає ✅. «wants to hear old songs» (boss T1) — бажання, не імітація аудіювання ✅. Діалоги — репліками в body, без type "dialog" (D-056) ✅.

### Спрощене правило пропуску who/which/that (l3 info: «Look at the next word»)
Правило: наступне слово — нова особа/річ → можна пропустити; дієслово → не можна. Звірено з CD Grammar (пропуск, коли займенник — додаток). Для всіх речень розділу правило дає правильну відповідь; хибних випадків серед типових B1-речень не знайшов: «нова особа чи річ» після займенника = підмет підрядного (the song (that) **my sister** likes), дієслово = займенник сам підмет. Межовий випадок — прислівник одразу після займенника («a singer who **often** writes») — правило його не охоплює (ні гілка «особа», ні «дієслово»), але й хибного висновку не дає й у розділі не трапляється. **✅ не хибне**; рекомендація на майбутнє (не блокує): у наступних розділах з цією граматикою додати приклад з прислівником.

## 3. Завдання → відповідь → опора (D-019)
Розв'язано самостійно, потім звірено з ключем. Build — повний перебір перестановок (з пастками) через `SLID_LANG.check`, word — `wordVerdict` (скрипт у scratchpad).

| Урок · завдання | Моя відповідь = ключ | Опора | Вердикт |
|---|---|---|---|
| l1 choice-hyp (jazz) | jazz | `hyp: true`, фідбек вводить | ✅ |
| l1 match стилі | 5/5 пар, другої доречної пари немає | info «Kinds of music» | ✅ |
| l1 stress music/classical/concert/popular | 1-й склад ×4 | `<u>` у info (classical, music); concert, popular — правило «перший склад» у фідбеку; словники вище | ✅ |
| l1 choice grandad | classical music | info (piano, violin, concert halls) | ✅ |
| l1 pick [classic] | classic | info «not classic music» | ✅ |
| l1 word «called ___ music» | folk; **traditional** теж правильне | info | ⚠️→виправлено (правка №2) |
| l1 gaps rock/classical/pop/do | так | info | ✅ |
| l2 choice-hyp guitarist | guitarist | `hyp: true` | ✅ |
| l2 match musicians | 5/5, без другої пари | info «Instruments and musicians» | ✅ |
| l2 stress guitar/violin/musician/orchestra | так | `<u>` в info | ✅ |
| l2 gaps bandura/violin/orchestra | так | info, intro | ✅ |
| l2 pick [on] | on | info «Not: play on the guitar» | ✅ |
| l2 word «Oksana is a ___.» | pianist / musician; **piano player** теж правильне (зразок «a bandura player» з info) | info | ⚠️→виправлено (правка №3) |
| l2 gaps piano/drummer/musicians | так | info + контекст | ✅ |
| l3 choice-hyp | «the song I like best» | `hyp: true` | ✅ |
| l3 gaps who/which/who | так (that не серед варіантів; фідбек каже, що that теж правильне) | e6s6l3 + info | ✅ |
| l3 multi пропуск | [0, 2] | info «next word» + CD | ✅ |
| l3 build | 2 прийняті порядки: «This is the song I like best», «The song I like best is this»; питання «Is this the song…» відсікає контекст («Sofiia shows…») і hint «Start with This is…» | info | ✅ |
| l3 pick [it] | it | intro (the song I like best); CD «we don’t use another personal pronoun» | ✅ |
| l3 word bandura ___ has | which / that (обидва в ключі) | info | ✅ |
| l3 gaps who / I like / which / that | так | info | ✅ |
| l4 choice-hyp | 0 | `hyp: true` | ✅ |
| l4 gaps who/which/which | так (that — пастка, з комами хибне) | info | ✅ |
| l4 choice commas | 0 | info (дві коми) | ✅ |
| l4 sort | 3 / 3 | info (імена → коми); hint | ✅ |
| l4 build | єдиний прийнятий порядок; інші порядки ламають коми, приклеєні до плиток | info | ✅ |
| l4 pick [that] | that | info | ✅ |
| l4 word «Tom, ___ is twelve» | who (that з комами хибне) | info | ✅ |
| l4 gaps which/who/who/which | так | info | ✅ |
| l5 choice-hyp world-famous | 1 | `hyp: true` | ✅ |
| l5 match compounds | 4/4, без другої пари | info | ✅ |
| l5 choice 1904 | opened a music school | текст на екрані | ✅ |
| l5 gaps two-hour/open-air/14-year-old | так; old-fashioned відсікає «in the park, take a warm jacket» | info | ✅ |
| l5 multi | [0, 2] | текст на екрані | ✅ |
| l5 pick [three-hours] | так | info «no -s» | ✅ |
| l5 build | єдиний порядок; питання «was Mykola…» відсікає keepCase (мала літера) | info + CD порядок прикметників (opinion перед origin) | ✅ |
| l5 gaps world-famous/who/choir | так; two-hour не підходить змістом | info (choir введено в info) | ✅ |
| l6 choice-hyp | 1 | `hyp: true` | ✅ |
| l6 sort good / not so good | 3 / 3 | info | ✅ |
| l6 choice best part | the last song | текст на екрані | ✅ |
| l6 multi | [0, 3] | текст на екрані | ✅ |
| l6 order | однозначний (hint задає план) | info + e7s4l6 | ✅ |
| l6 gaps excited/amazing/only problem | так | info (-ed/-ing; e7s4l4) | ✅ |
| l6 final gaps two-hour/best part/recommend | так | l5, info | ✅ |
| boss T1 folk | 0 | l1 | ✅ |
| boss T2 drummer/bandura/orchestra | так | l2 | ✅ |
| boss T3 word | who / that (обидва в ключі) | l3 | ✅ |
| boss T4 | 2 | l4 | ✅ |
| boss T5 world-famous/Liverpool/who | так; «an open-air» відсікає артикль a | l5 reading | ✅ |
| boss T6 | 1 | l6 | ✅ |
| boss T7 build | єдиний порядок | l4 | ✅ |

## 4. Авторське право (фрагменти ≥ 12 слів)
| Фрагмент | Запит (WebSearch, лапки) | Результат |
|---|---|---|
| The Beatles, who came from Liverpool, were a world-famous rock band | `"The Beatles, who came from Liverpool, were a world-famous rock band"` | дослівного збігу немає |
| Mykola Lysenko, who lived from 1842 to 1912, was a well-known Ukrainian composer | дослівно | збігу немає |
| The best part was the last song: everybody in the crowd sang together | дослівно | збігу немає |
| An orchestra is a big group of musicians who play together | дослівно | збігу немає (власне визначення, не з CD/OALD) |
Решта текстів — про власних героїв серії (Taras, Zlata, Emma, Mariia, Polina, Oksana, Kashtan), підручникових збігів не виявлено. Тексти пісень не цитуються — лише назви Shchedryk, Carol of the Bells, Stefania, Blue Sky ✅.

## 5. Педагогіка, рівень, стиль
- Структура кожного уроку: проблема (intro з листом/постом) → здогадка `hyp` → info → вправи → фінальне завдання ✅. Пояснення короткі, речення ≤ 12 слів, лексика B1 ✅. Чутливого змісту немає.
- `requires`: e6s6l3, e4s8l4, e5s6l2 (із задачі) + e7s4l4, e7s4l6 — обґрунтовано (-ed/-ing, план відгуку) ✅.
- stats: e8s4l2 longWordShare 0,173 «нетипово для сім'ї» (z=3,3) — у межах профілю 7–9 кл. (≤ 0,18), причина — тема (guitarist, violinist, musician, orchestra, instrument). Прийнятно, як пояснив автор.
- Герої: Sofiia (сестра Andrii) пише Mariia — канону не суперечить.

## 6. Правки (зроблені)
1. Mila Kvitka → **Mila Lastivka** (заголовок l3 intro, текст intro, body gaps l3, коментар-шапка). Причина — реальні Mariia Kvitka (співачка-композиторка) і Kvitka Cisyk + конфлікт з Ms Kvitka (e8s3).
2. l1 `word`: `answer: "folk"` → `["folk", "traditional"]` (CD folk music = traditional music; контекст не відсікав).
3. l2 `word`: додано `"piano player"` до `["pianist", "musician"]` (зразок «a bandura player» з info).
4. Усі 7 уроків `status: "verified"`; `meta.factcheck` заповнено.

## 7. Рекомендовано (не блокує)
- Правило «look at the next word» (l3) — у майбутніх розділах з relative clauses додати приклад з прислівником (a singer who often writes).
- inbox NOTE writer-e8s4 (герої) згадує Mila Kvitka — куратору читати як Mila Lastivka (рядок NOTE дописано).
