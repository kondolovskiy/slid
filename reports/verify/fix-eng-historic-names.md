# fix-eng-historic-names — історичні особи за D-057

Автор: writer-fix-eng-historic-names, 2026-11-27. Підстава: D-057 (inbox, DECISION 2026-11-27): усталене англійське написання + одна примітка про форму за КМУ № 55 при першій згадці в розділі, на неоцінюваному екрані. id і статуси не змінено. Build і commit не робив.

## Правки

| Файл | Урок | Екран | Було → стало | Джерела усталеного написання |
|---|---|---|---|---|
| content/eng/g10-e10s5.js | l3, l7 (match) | intro, info «Maria Prymachenko (1909–1997)», gaps, match, word body, gaps Final; l7 match | Mariia Prymachenko → **Maria Prymachenko** (11 місць; вигадана героїня Mariia не змінена). Примітка на info l3: «In many English books, her name is written *Maria*.» → «In Ukrainian official documents, her name is written *Mariia Prymachenko*.» Коментар-шапка оновлена | https://en.wikipedia.org/wiki/Maria_Prymachenko ; https://artsandculture.google.com/story/0AVxtPNdOnSXQA ; https://news.artnet.com/art-world/maria-prymachenko-3-things-2083134 |
| content/eng/g11-e11s5.js | l6 | info «Words for the article» (примітка); reading part 1 (body, opts[1], fbText) | Volodymyr Vernadskyi → **Volodymyr Vernadsky** (3 місця); примітка «In Ukrainian official documents, Vernadsky is written *Vernadskyi*.». Станція Akademik Vernadsky — без змін | https://www.nas.gov.ua/en/about-nas/history-nas ; https://www.kyivpost.com/post/27242 ; EoU https://www.encyclopediaofukraine.com/pages%5CV%5CE%5CVernadskyVolodymyr.htm (en.wikipedia — «Vladimir Vernadsky», D-057 обрало Volodymyr) |
| content/eng/g11-e11s7.js | l5 | info (список подій, перша згадка Kadenyuk) | + «In Ukrainian official documents, the astronaut’s name is written *Leonid Kadeniuk*.» | https://en.wikipedia.org/wiki/Leonid_Kadenyuk ; https://www.nasa.gov/wp-content/uploads/2016/01/kadenyuk.pdf ; https://www.space.com/39693-ukranian-astronaut-leonid-kadenyuk-obituary.html |
| content/eng/g11-e11s7.js | l6 | info «Words for the article» (примітка); reading part 2 | Volodymyr Vernadskyi → **Volodymyr Vernadsky** (1 місце); + «In Ukrainian official documents, the names in the article are written *Ivan Pylypiv*, *Vasyl Yeleniak* and *Volodymyr Vernadskyi*.» Pylypiw, Eleniak — уже усталені, текст не змінено | Eleniak: https://en.wikipedia.org/wiki/Wasyl_Eleniak ; https://www.ualberta.ca/en/canadian-institute-of-ukrainian-studies/centres-and-programs/kule-centre/ukrainians-in-alberta.html ; https://communitystories.ca/projects/first-wave-of-ukrainian-immigration-to-canada-1891-1914 |
| content/eng/g5-e5s7.js | l6 | intro (примітка), title, info, reading, gaps тощо | Ivan Kotliarevskyi → **Ivan Kotliarevsky** (15 місць); примітка в intro (5 кл., простіше): «In Ukrainian documents, his name is written *Ivan Kotliarevskyi*.» | https://en.wikipedia.org/wiki/Ivan_Kotliarevsky ; EoU https://www.encyclopediaofukraine.com/pages%5CK%5CO%5CKotliarevskyIvan.htm (Britannica — «Kotlyarevsky») |
| content/eng/pool-g5-e5s7.js (pe5s7) | — | 15 місць у вправах | Kotliarevskyi → **Kotliarevsky** — для однаковості з розділом; у пулі немає екрана теорії, примітка — у розділі e5s7 | те саме |
| content/eng/g11-e11s3.js | l3 | intro (примітка); gaps Final | Mykhailo Kotsiubynskyi → **Mykhailo Kotsiubynsky** (2 місця); + «In Ukrainian official documents, the writer’s name is written *Mykhailo Kotsiubynskyi*.» | https://en.wikipedia.org/wiki/Mykhailo_Kotsiubynsky ; Cambridge Core (переклад CIUS, Carynnyk 1981): https://www.cambridge.org/core/journals/nationalities-papers/article/kotsiubynsky-mykhailo-shadows-of-forgotten-ancestors-translated-by-marco-carynnyk-with-notes-and-an-essay-on-m-kotsiubynsky-by-bohdan-rubchak-and-published-for-the-canadian-institute-of-ukrainian-studies-by-the-ukrainian-academic-press-littleton-colorado-1981-pp-127-1450/0ED657BC21E7BDEC94C200FE3EF87C99 |
| content/eng/g9-e9s6.js | l1 | info «Three famous names» | Igor Sikorsky — уже усталене; + «In Ukrainian official documents, his name is written *Ihor Sikorskyi*.» | https://en.wikipedia.org/wiki/Igor_Sikorsky (у нотатках write-eng-g9-e9s6 — друге джерело) |

Ключів `word` з іменами історичних осіб немає (grep `answer` — 0), тож подвійних ключів не знадобилося.

## Перевірено — без змін (КМУ55 = усталене або немає єдиної усталеної форми)
Taras Shevchenko, Ivan Franko, Mykola Lysenko, Mykola Leontovych, Kateryna Bilokur, Oleksandr Murashko, Borys Paton, Oksana Baiul, Yaroslava Mahuchikh, Kateryna Yushchenko — збіг КМУ55 і en.wikipedia.
Lesia Ukrainka (en.wiki «Lesya», EoU «Lesia»), Oleksandr Dovzhenko (en.wiki «Alexander», EoU «Oleksandr»), Yevhen Paton (en.wiki «Evgeny», EoU «Yevhen»), Prince Volodymyr (en.wiki «Vladimir the Great», EoU «Volodymyr the Great») — джерела розходяться, КМУ55 збігається з EoU; лишив.
diag-g4…g11: історичних осіб немає (лише вигадані герої й учителі); diag-g11 не чіпав (паралельна верифікація) — історичних осіб там теж немає.

## Відкриті питання (оркестратору / людині)
1. **Bohdan Khmelnytskyi** (g7-e7s7 l5 build body, l6 reading) — лише в назві об'єкта «Monument to Bohdan Khmelnytskyi». Офіційний гід Києва вживає «Bohdan Khmelnytskyi Monument» (https://guide.kyivcity.gov.ua/en/places/pamyatnyk-bohdanu-khmelnytskomu), en.wikipedia — «Bohdan Khmelnytsky Monument, Kyiv». За D-057 «назви об'єктів — офіційна назва» лишив; якщо особу треба писати Khmelnytsky і в назві пам'ятника — 2 місця + примітка на неоцінюваному екрані l5 (зараз перша згадка — на оцінюваному build).
2. **Живі спортсмени з усталеною англ. формою:** Serhii Bubka (g7-e7s5; en.wiki, World Athletics, його власні акаунти — «Sergey Bubka»), Olha Kharlan (g10-e10s2; en.wiki, olympics.com — «Olga Kharlan»). D-057 про історичних осіб; glossary «Імена» («як людина сама пише») радше за Sergey/Olga. Не правив — потрібне рішення.
3. **Pylypiw:** en.wikipedia і EoU — «Iwan/Ivan Pylypow», канадські джерела — «Pylypiw/Pillipiw». Лишив Pylypiw (як у D-057).
4. **Метрика:** примітки додали слова в l6 → validate-попередження readWordsPerScreen 66–67 > 65 (e11s5l6, e11s7l6; до правки — 0 попереджень). Помилок 0.
5. Примітка в e10s5 і e9s6 стоїть на першому екрані про особу (info), а не на intro, де ім'я вперше згадане побіжно.

## validate
e10s5, e11s5, e11s7, e5s7, e11s3, e9s6 — 0 помилок (e11s5, e11s7 — по 1 попередженню, п. 4); пул pe5s7 — 0 помилок, 0 попереджень.
