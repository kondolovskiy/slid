# Верифікація e7s4 «Cinema and theatre» (eng, 7 кл.)

Верифікатор: verifier-e7s4, 2026-11-25. Скіл content-verify (+ розділ «Англійська»). Файл: content/eng/g7-e7s4.js (7 уроків: 6 + boss).
Прогін: `validate --section e7s4`: 0 помилок, 0 попереджень (до і після правок). Плейтест не запускали: розділу ще немає в content/manifest.json (build робить оркестратор), а Python-модуля playwright у контейнері немає, тож прогін буде лише в CI.

## 1. Факти

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| «The Lviv Opera House opened in 1900» (l2 intro, outro) | en.wikipedia: «The Lemberger Oper opened on 4 October 1900», «constructed between 1897 and 1900». https://en.wikipedia.org/wiki/Lviv_Theatre_of_Opera_and_Ballet ; ЕСУ (Енциклопедія Сучасної України): «Засн. 1900 як Міський театр у будівлі … арх. З. Ґорґолевського», відкрився оперою «Янек». https://esu.com.ua/search_articles.php?id=59668 ; uk.wikipedia: «Відкрився театр для глядачів 4 жовтня 1900 р.» | ✅ |
| Балет у Львівській опері (l2) | ті самі джерела: театр опери та балету | ✅ |

Не відкрилися з контейнера (ENOTFOUND): lia.lvivcenter.org (джерело автора), lviv.travel, opera.lviv.ua, inyourpocket.com, science.lpnu.ua, artsandculture.google.com. Замість LIA взято ЕСУ.
Фільми, афіші, вікові обмеження («For people aged 12 and over») вигадані. Справжніх позначок BBFC чи інших немає.

## 2. Форми й норма (CD + OALD, curl)

| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| interval (перерва у виставі) | «UK (US intermission) a short period between the parts of a performance», /ˈɪn.tə.vəl/ — https://dictionary.cambridge.org/dictionary/english/interval | «(British English) (also intermission …) a short period of time separating parts of a play, film or concert», /ˈɪntəvl/ — https://www.oxfordlearnersdictionaries.com/definition/english/interval | ✅ BrE |
| box office | «the place in a cinema or theatre where tickets are sold» — …/box-office | «the place at a theatre, cinema, etc. where the tickets are sold» — …/definition/english/box-office | ✅ |
| curtain (театр) | «the large screen of heavy material in a theatre that separates the stage from…» /ˈkɜː.tən/ | /ˈkɜːtn/ — …/curtain_1 | ✅, наголос 1-й склад |
| audience | /ˈɔː.di.əns/ | /ˈɔːdiəns/ — …/audience | ✅ +au\|di\|ence |
| comedy / cartoon / adventure / horror | /ˈkɒm.ə.di/, /kɑːˈtuːn/, /ədˈven.tʃər/, /ˈhɒr.ər/ | /ˈkɒmədi/, /kɑːˈtuːn/, /ədˈventʃə(r)/, /ˈhɒrə(r)/ | ✅ наголоси в `stress` і `<u>` правильні |
| could (suggestion) | «B1 used for making a suggestion» — …/could | — | ✅ |
| Why don’t we…? | CD Grammar «Suggestions»: «why don’t …? to make a specific suggestion» — https://dictionary.cambridge.org/grammar/british-grammar/suggestions | — | ✅ |
| adj + enough to | CD enough: «He's tall enough to change the bulb…» — …/enough | OALD enough_1: «old enough to know better» | ✅ |
| the stalls | CD (сторінку перевірено): «UK (US the orchestra) the seats on the main floor of a theatre or cinema». Отже, театральне значення в CD **є**, хоча в задачі сказано, що його немає | — | у розділі не вжито, тож знахідки немає. Примітку в задачі уточнено нижче (NOTE в inbox) |

BrE: grep на theater / color / -ize / apartment / vacation / IPA / Listen / You hear нічого не знайшов. *movie* є лише як інформація в l1 info («Americans often say movie»), не варіант і не пастка ✅. Час «6.30 pm» за TQ-123 ✅. Лапки “ ” ✅. Канон героїв (inbox NOTE): Oksana 13, Emma 13, Tom 11, Dmytro — молодший брат (≈ 9), Zlata — молодша сестра Taras, Ostap — друг Taras, Polina — Kharkiv ✅.

## 3. Авторське право (фрагменти ≥ 12 слів, WebSearch у лапках)

| Фрагмент | Результат |
|---|---|
| l4 final «I was a bit bored at the start, but then the story got really exciting» | збігів немає |
| l3 intro «Plays are a bit long for me. Why don’t we go to the cinema» | збігів немає |
| l6 multi «They get lost in the jungle and look for the way home» | збігів немає |
| l6 intro «Sorry, you aren’t old enough to watch it. And some parts are too scary» | збігів немає |
| l2 gaps «In the interval, we had ice cream. At the end, the whole audience clapped» | збігів немає |
| l5 intro «It was good, but the book is much better» + «wasn’t as funny as the book» | збігів немає |
| l2 intro «I bought our tickets at the box office yesterday. Our seats are in Row 3» | збігів немає |
| l6 order «It’s about a fox who lives in the mountains» + «the music is beautiful» | збігів немає |
| l4 intro «Yesterday, Tom and I watched a documentary about the sea. I thought it was really interesting» | збігів немає |

Решта текстів — короткі шаблонні речення власних героїв. ✅

## 4. Завдання: власне розв’язання, опора (D-019), друга відповідь

| Урок · екран | Моє розв’язання = ключ? | Опора | Друга правильна відповідь | Вердикт |
|---|---|---|---|---|
| l1 choice hyp (comedy) | так | hyp | — | ✅ |
| l1 match (5 пар) | так | info «Kinds of films» | перебрано всі праві: лише ці пари | ✅ |
| l1 stress | так | `<u>` в info | — | ✅ (fbBad уточнено, правка 1) |
| l1 choice Tom (sci-fi) | так | info | немає | ✅ |
| l1 pick (comedy, cartoons, documentaries) | так | info | cinema — місце, не жанр | ✅ |
| l1 word documentary | так | info | ключ без `.!?` | ✅ |
| l1 gaps (cartoons, documentaries, horror films) | так | info + підказки в тексті | немає | ✅ |
| l2 choice hyp box office | так | hyp | — | ✅ |
| l2 match halves | так | info «In a theatre» | друга пара неможлива | ✅ |
| l2 choice Row 3 Seat 13 | так | квиток на екрані + міркування | немає | ✅ |
| l2 stress | так | `<u>` в info | — | ✅ |
| l2 word curtain | так | info (curtain opens at the start) | «the theatre» відсікає контекст (глядачі вже всередині) | ✅ |
| l2 gaps (box office, seats, interval, audience) | так | info | немає | ✅ |
| l2 choice final (photos) | так | текст на екрані | немає | ✅ |
| l3 choice hyp | так | hyp | — | ✅ |
| l3 gaps (see, go, buy) | так | info | немає | ✅ |
| l3 build Why don’t we watch a comedy? | так | info | один порядок; extra «to» | ✅ |
| l3 sort (3 yes / 3 no) | так | info «Saying yes or no» | немає | ✅ |
| l3 choice (busy in the morning) | так | умова + info | немає | ✅ |
| l3 pick «to» | так | info | інших помилок у реченні немає | ✅ |
| l3 gaps final (watch, I’m not sure, could, why not) | так | info + причина в тексті | немає | ✅ |
| l4 choice hyp | так | hyp | — | ✅ |
| l4 gaps (interesting, bored, interested, exciting) | так | info -ed/-ing | «was boring» відсікає «because there was no action in it» | ✅ |
| l4 multi [0,2,3] | так | info (interested in, excited about, tiring) | немає | ✅ |
| l4 word interested | так | info | немає | ✅ |
| l4 pick boring | так | info; fbText пояснює інший зміст | — | ✅ |
| l4 build I’m really excited about the play. | так | info | інший природний порядок не знайшов | ✅ |
| l4 choice final | так | текст | немає | ✅ |
| l5 choice hyp a bit | так | hyp | — | ✅ |
| l5 gaps ціни (a bit, much, much) | так | info + ціни на екрані | немає | ✅ |
| l5 choice even | так | info | немає | ✅ |
| l5 gaps (as, as, as) | так | info | немає | ✅ |
| l5 build The film isn’t as good as the book. | так | info + body | обмін film ↔ book відсікає body | ✅ |
| l5 choice (much longer) | так | дані на екрані | немає | ✅ |
| l5 word as | так | info | немає | ✅ |
| l5 gaps final (much, even, as, same) | так | info | немає | ✅ (body виправлено, правка 2) |
| l6 choice hyp | так | hyp | — | ✅ |
| l6 gaps (old enough, too, to watch) | так | info + вік на екрані | немає | ✅ |
| l6 build You aren’t old enough to watch it. | так | info | немає | ✅ |
| l6 choice (too far from the stage) | так | info too + to; «far from» виводиться з умови | немає | ✅ |
| l6 order review | так | info «How to write a film review» | порядок однозначний за планом | ✅ |
| l6 multi [1,3] | так | текст | немає | ✅ |
| l6 gaps final (cartoon, bored, exciting, enough) | так | l1, l4, l6 info | немає | ✅ |
| l7 T1–T6 | так | l1, l3, l2, l4, l5, l6 (поле `pre` правильне) | немає | ✅ |

Неправильних ключів і завдань без опори немає. Позиційних посилань і літер A/B/C в `opts` немає. Ключі `word` без кінцевого знака.

## 5. Мова й педагогіка
Пояснення в межах 6–9 кл. (речення ≤ 12 слів, формули «too + adjective + to + verb», ≤ 2 терміни на урок: comparative, suggestion). Структура: проблема → hyp → info → практика → фінал у кожному уроці. Підказки відповіді не видають. Змісту, неприйнятного для віку, немає (horror film лише називається).
Свіжий прогін `stats --subject eng` позначає «нетипово для сім’ї»: l1 longWordShare (z = 2), l5 typeVariety 4 (z = −2,4), l6 readWordsPerScreen 47 (z = 2,3), l7 maxReadWords (z = 2). Автор цих позначок не мав: найімовірніше, сім’я 7–9 кл. перерахувалася після паралельних розділів. Позначки м’які, у межах профілю 7-9. Передаю для style-sync 7 кл., не блокує.

## 6. Правки (зроблено)
1. l1 stress `fbBad`: «in the list of films» (у списку фільмів на intro підкреслень немає) → «on the screen “Kinds of films”».
2. l5 фінальний gaps, body: «Andrii writes to Taras about Captain Cat.» → «about a new film.» Причина: два екрани раніше Captain Cat — мультфільм на 85 хв, а тут «the film is three hours». Учень бачив дві різні тривалості одного фільму.
3. `status: "verified"` у всіх 7 уроках; `meta.factcheck`; рядок «Статус» у коментарі файлу.

Рекомендації (не блокують): l5 build у тілі завдання — Bohdan любить книжку більше, а в intro l5 книжку хвалить Andrii, а Bohdan хвалить фільм. Ці фільми різні, суперечності немає, але style-sync може взяти тут Andrii.

## 7. Вердикт
e7s4l1–l7 мають статус **verified**. Відкритих ❌ і ⚠️ немає. `approved` ставить лише вчитель.
Людині: плейтест розділу після build (CI); TQ нових немає.
