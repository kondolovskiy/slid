# Верифікація: пул pe8s4 (англійська, 8 кл., розділ e8s4 «Music»)

Верифікатор: verifier-pe8s3-pe8s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g8-e8s4.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s4.md. Опора: уроки `content/eng/g8-e8s4.js` (verified, reports/verify/write-eng-g8-e8s4.md) і попередні розділи g4–g8-e8s3. Еталони: reports/verify/write-eng-pool-g6-*.md, -g7-*.md, -g8-e8s2.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. that ніде не стоїть хибним варіантом у defining clause. who не стоїть хибним варіантом з group nouns. Збігів з опублікованими текстами немає. Зробив 10 правок: 27 `src` вказували не на ту сторінку програми, ще 9 правок у вправах (1 stress з magazine, 3 підказки, 1 ім'я, вже зайняте іншим героєм, 2 деталі канону, 1 факт поза уроками), плюс статус. Людині: нічого блокувального.

## 1. Програма, `src`
`sources`: лише `mpim`, `program: true`, url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`, сторінки звірено за колонтитулами):
- с. 32: «Музика — Улюблені музичні стилі… Музиканти, композитори, виконавці», «[висловлювати] враження, почуття» → l1, l2, l5 vocab/read, l6 ✅;
- **с. 34** (5.4.1, граматика B1): «Adjectives — … Compund adjectives» і «Clause — … Relative: defining; non-defining…»;
- с. 35: Passives, Reported speech, Verbs. Relative clauses і compound adjectives тут **немає**.

У 27 вправах l3–l5 (gram і write: a26–a45, a53–a59) стояло `src: "mpim с. 35"`, у title джерела — «(с. 35)». ⚠️ → виправлено на «с. 34» (шапка уроку e8s4: «граматика B1 (с. 34–35)»).

## 2. Факти (усі вже є в уроці e8s4l5; джерела я відкрив у цій сесії)

| Твердження (вправи) | Джерела | Вердикт |
|---|---|---|
| Lysenko 1842–1912; у 1904 відкрив музичну школу в Kyiv (a50, a58) | Encyclopedia of Ukraine, Lysenko Music and Drama School: «established in Kyiv [in] 1904 by Mykola Lysenko» https://www.encyclopediaofukraine.com/pages%5CL%5CY%5CLysenkoMusicandDramaSchool.htm ; https://en.wikipedia.org/wiki/Kyiv_National_I._K._Karpenko-Kary_Theatre,_Cinema_and_Television_University (відкрито у вересні 1904); https://ukrainianjewishencounter.org/en/mykola-lysenko-1842-1912/ (WebSearch) | ✅ |
| Shchedryk — версія Leontovych; український хор співав її в New York 1922; англійська назва — Carol of the Bells (a51, a59) | Carnegie Hall, 2022: прем'єра Ukrainian National Chorus 5 Oct 1922 https://carnegiehall.org/explore/articles/2022/11/29/carol-of-the-bells ; NPR https://www.npr.org/transcripts/1140441596 (англійський текст Wilhousky 1936) (WebSearch) | ✅ |
| The Beatles — Liverpool, 1960–1970 (a52) | https://www.britannica.com/topic/the-Beatles (діапазон 1960–1970, розпад 1970) ; https://kids.britannica.com/students/article/The-Beatles/273136 (WebSearch) | ✅ |
| Kalush Orchestra — folk + rap, Eurovision 2022 (a52, a57) | https://en.wikipedia.org/wiki/Stefania_(song) ; https://www.npr.org/2022/05/13/1098810226/eurovision-ukraine-kalush-orchestra (WebSearch) | ✅ |
| «Odesa … has an opera house» (a39, sort) | в уроках g4–e8s4 цього факту немає (там лише «Odesa is on the Black Sea») | ⚠️ → «Odesa which is on the Black Sea is a big city.» |

«became world-famous after 1922» (a51) — перефраз уроку l5 intro («In 1922… Now the music is world-famous!»), джерела ті самі ✅. Mila Lastivka, Blue Sky, Kashtan, Olha — вигадані, як в уроці. Текстів пісень немає.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build`: перебрав усі перестановки всіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s3-4/bin/chk.mjs`). Зараховуються лише ключі: a21 (325), a30 (13699; обидва порядки з `answer`, як у build уроку l3), a40 (13699), a56 (13699). Кінцевого `.!?` у ключах `word` немає.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | rap; rock | = | l1 #3 | ні | ✅ |
| a02 choice | folk music | = | l1 #3 | ні | ✅ |
| a03 word | classical | = | l1 #3 | classic — не ключ (l1 #3 «not classic music») | ✅ |
| a04 gaps | kind; fan; stand | = | l1 #3 | ні | ✅ |
| a05 match | 6 пар | = | l1 #3 | перебрав усі праві варіанти: другої пари немає | ✅ |
| a06 stress | <u>mu</u>sic, car<u>toon</u> | = | l1 #3; cartoon — e5s6, e7s4 `<u>` | ні | ✅ |
| a07 stress | classical, reporter, concert | = | l1 #3, #5 (fbText); reporter — e8s3l1 | ні | ✅ |
| a08 stress | 5 слів | = | — | magazine: OALD NAmE /ˈmæɡəziːn/ (pitfalls п. 19, reports/verify/write-eng-pool-g6-e6s2.md) | ⚠️ → `car|+toon`, steps |
| a09 choice | jazz | = | l1 #2–3 | ні | ✅ |
| a10 multi | [0,2] | = | текст | ні | ✅ |
| a11 gaps | rock; folk; classical; pop | = | l1 #3 | hint «Check the ending of classical» називав ключ третього пропуску (п. 17) | ⚠️ → hint — посилання на правило |
| a12 gaps | guitarist; drummer | = | l2 #3 | «Mariia writes about her friends» + Tom: Tom — брат Emma в England, а не друг Mariia | ⚠️ → body «Mariia writes about Polina and Emma’s brother Tom.» |
| a13 match | 4 пари | = | l2 #3 | ні | ✅ |
| a14 word | violinist / musician / violin player | = | l2 #3, #9 | ні | ✅ |
| a15 gaps | orchestra; musicians; pianist; drummer | = | l2 #3 | ні | ✅ |
| a16 stress | gui<u>tar</u>, <u>or</u>chestra | = | l2 #3 | ні | ✅ |
| a17 stress | vio<u>lin</u>, mu<u>si</u>cian, <u>drum</u>mer | = | l2 #3 | ні | ✅ |
| a18 stress | guitarist, violinist, orchestra, musician, piano | = | l2 #3 | ні | ✅ |
| a19 gaps | the; the | = | l2 #3 | «play drums» без артикля не протиставляється | ✅ |
| a20 pick | [on] | = | l2 #3 | ні | ✅ |
| a21 build | My brother plays the drums in a band. | = | l2 #3 | 325 — лише ключ. Hint «Do you need on?» прямо відкидав пастку (п. 17) | ⚠️ → «Start with My brother. What comes after plays?» |
| a22 pick | [violin], [on] | = | l2 #3 | ні | ✅ |
| a23 choice | the piano | = | текст | «her friend Lesia»: ім'я Lesia вже зайняте (бігунка Lviv Junior Athletics Club, 11 р., e7s5; eng-heroes «Іншим героям імена Lesia… не давати») | ⚠️ → «her friend», питання «What does Zlata’s friend play?» |
| a24 multi | [0,1] | = | текст | Vlad — Lviv, знайомий Myroslava, з тієї самої школи, що й Taras (e7s5). Нова деталь: співає в шкільному гурті, не суперечить канону | ✅ |
| a25 gaps | drums; guitar; musician | = | l2 #3 | ні | ✅ |
| a26 gaps | who; which | = | l3 #3 | that не запропоновано | ✅ |
| a27 choice | who plays | = | l3 #3 | ні | ✅ |
| a28 multi | [0,2] | = | l3 #3 | ні | ✅ |
| a29 word | who / that | = | l3 #3 | ні | ✅ |
| a30 build | This is the guitar Uncle Oleh gave me. | = (+ другий порядок) | l3 #3, build l3 | hint «Is the guitar a person?» відкидав пастку who | ⚠️ → «Start with This is…» (як в уроці) |
| a31 pick | [them] | = | l3 pick | ні | ✅ |
| a32 gaps | I liked; who; Mila sang | = | l3 #3 | ні | ✅ |
| a33 gaps | who; which | = | l3 #3 | ні | ✅ |
| a34 gaps | I play; who; which | = | l3 #3 | ні | ✅ |
| a35 gaps | who; Zlata learns; which; who | = | l3 #3 | ні | ✅ |
| a36 gaps | who; which | = | l4 #3 | ні | ✅ |
| a37 word | who | = | l4 #3 | that з комами неправильне | ✅ |
| a38 choice | Tom, who is my brother, plays… | = | l4 #3, #5 | ні | ✅ |
| a39 sort | 3 / 3 | = | l4 #3 | факт про оперу в Odesa — поза уроками (§2) | ⚠️ → «is a big city» |
| a40 build | Andrii, who loves rock, goes to lots of concerts. | = | l4 #3 | 13699 — лише ключ | ✅ |
| a41 pick | [that], [who] | = | l4 #3 | ні | ✅ |
| a42 gaps | who; who; which | = | l3, l4 #3 | у defining that не запропоновано | ✅ |
| a43 gaps | which; who | = | l4 #3 | ні | ✅ |
| a44 gaps | which; who; who | = | l4 #3 | ні | ✅ |
| a45 gaps | which; who; which; who | = | l4 #3 | Kashtan (group noun): пастка лише that ✅. «Their new song, which is about spring» — у каноні уроку нова пісня Kashtan про Kyiv (l4 intro, l6 order) | ⚠️ → «about Kyiv» |
| a46 gaps | open-air; choir | = | l5 #3 | ні | ✅ |
| a47 match | 4 пари | = | l5 #3 | ні | ✅ |
| a48 word | world-famous / well-known | = | l5 #3 | обидва в ключі | ✅ |
| a49 gaps | old-fashioned; well-known; composer | = | l5 #3, #5 | ні | ✅ |
| a50 choice | in Kyiv | = | текст, l5 #5 | ні | ✅ |
| a51 multi | [0,1] | = | текст, l5 intro | ні | ✅ |
| a52 choice | ten years | = | текст | ні | ✅ |
| a53 gaps | 12-year-old; ten-minute | = | l5 #3 (two-hour, 14-year-old) | Tom 12 — канон 8 кл. | ✅ |
| a54 word | three-hour / 3-hour | = | l5 #3 | ні | ✅ |
| a55 pick | [two-hours] | = | l5 #3 | ні | ✅ |
| a56 build | Zlata’s school has a two-hour concert on Friday. | = | l5 #3 | 13699 — лише ключ | ✅ |
| a57 gaps | world-famous; folk | = | l5 #3, #7 | ні | ✅ |
| a58 gaps | well-known; who | = | l5 #3, #5 | ні | ✅ |
| a59 gaps | open-air; two-hour; choir; world-famous | = | l5 #3 | ні | ✅ |
| a60 sort | 3 / 3 | = | l6 #3 | ні | ✅ |
| a61 gaps | best part; only problem | = | l6 #3 | ні | ✅ |
| a62 word | recommend | = | l6 #3 | ні | ✅ |
| a63 choice | Don’t miss it! | = | l6 #3 | ні | ✅ |
| a64 gaps | bored; exciting; crowd; recommend | = | l6 #3 | ні | ✅ |
| a65 choice | two hours | = | текст | ні | ✅ |
| a66 multi | [0,2] | = | текст | ні | ✅ |
| a67 choice | He liked it, but… | = | текст | ні | ✅ |
| a68 order | 4 речення | = | l6 order #7 | ні | ✅ |
| a69 gaps | two-hour; best part; recommend | = | l5, l6 #3 | ні | ✅ |
| a70 order | 5 речень | = | l6 order #7 | «It was…» прив'язане до першого речення | ✅ |

**Покриття:** 6 уроків, 70 вправ, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку. У кожної вправи рівнів 2–3 є `hint`. `personalization-qa --pool pe8s4` — без помилок. `validate --pool pe8s4` після правок — 0 помилок, 0 попереджень.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії; CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>_1): music ˈmjuː.zɪk / /ˈmjuːzɪk/; cartoon kɑːˈtuːn / /kɑːˈtuːn/; classical ˈklæs.ɪ.kəl / /ˈklæsɪkl/; concert ˈkɒn.sət / /ˈkɒnsət/; popular ˈpɒp.jə.lər / /ˈpɒpjələ(r)/; reporter rɪˈpɔː.tər / /rɪˈpɔːtə(r)/; guitar ɡɪˈtɑːr / /ɡɪˈtɑː(r)/; orchestra ˈɔː.kɪ.strə / /ˈɔːkɪstrə/; violin ˌvaɪəˈlɪn / /ˌvaɪəˈlɪn/; musician mjuːˈzɪʃ.ən / /mjuˈzɪʃn/; drummer ˈdrʌm.ər / /ˈdrʌmə(r)/; guitarist ɡɪˈtɑː.rɪst / /ɡɪˈtɑːrɪst/; violinist ˌvaɪəˈlɪn.ɪst / /ˌvaɪəˈlɪnɪst/; piano piˈæn.əʊ / /piˈænəʊ/. У CD і в OALD BrE = NAmE за наголошеним складом. **magazine** — OALD NAmE /ˈmæɡəziːn/, у a08 замінено. Наголоси автора правильні. pianist автор свідомо не брав (CD US має варіант) ✅.
- **Лексика:** звірив скриптом з g4–g8-e8s3 і e8s4 до `lesson` включно (`bin/lex.mjs`): нових слів немає ✅.
- **Relative clauses:** у defining-пропусках that ніде не хибний варіант. Дистрактори — which для людей, who для речей або форма без займенника перед дієсловом. Вилучення займенника — лише перед новою особою (a28, a30, a32, a34, a35). З комами — лише who / which, пастка that. Group nouns (Kashtan, Kalush Orchestra): who не хибний варіант ✅. **play the:** дистрактор лише «on the» ✅. **Compound adjectives:** дистрактори з -s (two-hours, 12-years-old) ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a12 (Tom — брат Emma), a23 (зайняте ім'я Lesia), a45 (пісня Kashtan про Kyiv). Решта узгоджена: Mila Lastivka; Kashtan і Olha; Zlata — бандура, музична школа; Tom 12 — барабани й гітара; Oksana — піаніно; Polina і Mariia — гітара від Uncle Oleh; Zoriana — скрипка; Emma’s grandad — cook і класична музика; Bohdan — rap; Daryna — folk; Kyrylo — jazz; Sofiia — сестра Andrii.
- **BrE:** practises, flat, mum, «at the weekend» не трапляється. AmE, IPA, A/B/C в `opts`, «Listen» чи «You hear» немає. Музику текстом не «слухаємо» ✅.
- **Копії уроків** (`bin/ngram.mjs`, 6-грами проти g4–g11): збігаються рамки інструкцій і факти l5 («he opened a music school in…», «a Ukrainian choir sang it in New York»). Це той самий зміст, але вправа інша (інше питання й ключ). Рамок з тим самим ключем немає ✅.
- **Авторське право** (WebSearch з лапками, у цій сесії):

| Фрагмент | Запит | Результат |
|---|---|---|
| a65 «three people from the crowd went up on the stage and sang with the band» | дослівно в лапках | збігу немає |
| a09 «The musicians never play a song in the same way: at every concert, they make up new music» | дослівно в лапках | збігу немає |

## 5. Правки (зроблені)
1. `src` a26–a45, a53–a59 (27 вправ): «mpim с. 35» → «mpim с. 34». Title джерела й шапка: «Compound adjectives (с. 34)».
2. a08: `ma|ga|+zine` → `car|+toon`, steps.
3. a11: hint → «Read the clues in each sentence. Look at the rule under the list “Kinds of music”.»
4. a12: body → «Mariia writes about Polina and Emma’s brother Tom.»
5. a21: hint → «Start with My brother. What comes after plays?»
6. a23: «her friend Lesia» → «her friend»; питання → «What does Zlata’s friend play?»; steps.
7. a30: hint → «Start with This is…»
8. a39: «Odesa which is on the Black Sea has an opera house.» → «… is a big city.»
9. a45: «which is about spring» → «which is about Kyiv».
10. `status: "verified"`, `meta.factcheck`, шапка файлу.

**Урок за уроком:** l1–l6 ✅. Пул pe8s4 — verified.
