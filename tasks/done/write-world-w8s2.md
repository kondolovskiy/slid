---
claimed_from: todo
claimed_at: 2026-11-04T06:38:42.712Z
id: write-world-w8s2
type: write-section
subject: world
grade: 8
section: w8s2
weeks: [8, 14]
status: done
claimed_by: writer-write-world-w8s2
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Відродження і Реформація» (Всесвітня історія, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як гуманісти й митці змінили погляд на людину, а Лютер — на церкву, і чому Європа розкололася.

## Теми уроків (з плану)
1. Гуманізм і Високе Відродження
2. Леонардо і Мікеланджело
3. Лютер і Реформація
4. Контрреформація і єзуїти
5. Релігійні війни і Нантський едикт
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: `content/world/g7-w7s1.js` (verified) і style/world.md «Еталони».

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Гісем О. В. та ін., модельна «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf (PDF; текст — `pdftotext`, середня колонка «Зміст навчального предмета»).
- **Новий предмет** `world`: content/subjects/world.js (навички src, time, geo, crit, pol, soc, cult, link), план content/world/plan.js, **style/world.md** (+ style/hist.md — усе діє), glossary/world.md, facts/world.md (поки порожній — нові факти лише з ≥ 2 джерел, з URL у нотатках і FACT в inbox).
- Файл: `content/world/g<клас>-<id>.js`, зображення — `img/world/<id>/`; id уроків `<id>l1…`, значок boss — унікальний id. D-027: ≥ 1 справжнє `img` у кожному уроці (скіл `hist-images`; Commons — `thumb.wikimedia.org`, ≤ 2 фото-агенти одночасно).
- У розділі ≥ 1 завдання `sk: "link"` (подія світу ↔ подія на українських землях, уже відома з «Історії України» 7 кл. або подана на екрані).
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай. Не чіпай чужі файли, `content/math`, `app/`.

## Результат
- Файл `content/world/g8-w8s2.js` з `SLID.section("world", { id: "w8s2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w8s2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w8s2` — 0 помилок, 0 попереджень (build у спільному дереві не запускав — оркестратор; build і playtest — у копії дерева в scratchpad: playtest 6/6 зелений)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-write-world-w8s2, 2026-11-04)
Файл `content/world/g8-w8s2.js`, 6 уроків (усі `draft`), 9 фото в `img/world/w8s2/` (D-027: кожен урок ≥ 1 `img`). Значок фіналу — `renref` «Знавець Відродження і Реформації».
- w8s2l1 «Філософи в бібліотеці папи» (гуманізм, Високе Відродження; link — Юрій Дрогобич) — 9 екр.
- w8s2l2 «Крила, мармур і фарби» (Леонардо, Мікеланджело) — 9 екр.
- w8s2l3 «Тези з Віттенберга» (Лютер, протестанти, Кальвін, Генрі VIII; link — Пересопницьке Євангеліє) — 10 екр.
- w8s2l4 «Відповідь Рима» (Контрреформація, Тридентський собор, єзуїти; link — Скарга 1577 → Берестейська унія 1596) — 9 екр.
- w8s2l5 «Мир після різанини» (Аугсбурзький мир, гугеноти, Варфоломіївська ніч, Анрі IV, Нантський едикт; link — Варшавська конфедерація 1573) — 9 екр.
- w8s2l6 «Виставка двох епох» — фінал (boss), 6 завдань: по одному на урок + хронологія (шаблон w7s1l5).
validate: 0 помилок, 0 попереджень. stats: без прапорців. playtest --section w8s2: 6/6 (у копії дерева з build — у спільному дереві build не запускав).

### Факти (нові; ≥ 2 джерела)
1. «Афінська школа» — Рафаель, 1509–1511, Станца делла Сеньятура (бібліотека й кабінет Юлія II), у центрі Платон і Арістотель — https://en.wikipedia.org/wiki/The_School_of_Athens ; https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello/stanza-della-segnatura/stanza-della-segnatura.html ; https://uen.pressbooks.pub/arth2720/chapter/raphaels-school-of-athens/ (дати фрески в джерелах 1508–1511 / 1509–1511 — беру 1509–1511).
2. Петрарка 1304–1374, «батько гуманізму», шукав забуті античні тексти (Цицерон) у старих бібліотеках — https://www.worldhistory.org/Petrarch/ ; https://courses.lumenlearning.com/suny-hccc-worldhistory/chapter/petrarch/
3. Піко делла Мірандола, «Промова про гідність людини», 1486 (опубл. 1496); переказ слів Бога до Адама («опуститися до нижчих, тваринних… піднятися власним рішенням до вищих, божественних») — https://history.hanover.edu/courses/excerpts/165pico.html ; https://bactra.org/Mirandola/ ; https://en.wikipedia.org/wiki/Oration_on_the_Dignity_of_Man
4. Еразм Роттердамський, «Похвала глупоті» — написана 1509, надрукована 1511; сатира на ченців, богословів, священників — https://en.wikipedia.org/wiki/In_Praise_of_Folly ; https://expo.bib.kuleuven.be/exhibits/show/erasmus-en/most-important-works/praise-of-folly
5. Юрій Дрогобич (Котермак), бл. 1450 – 4.02.1494: Краків, Болонья, ректор 1481–1482; 1483 у Римі — «Iudicium pronosticon anni 1483», підпис «Georgii Drogobicz de Russia»; найдавніша відома друкована книжка українського автора — https://www.encyclopediaofukraine.com/pages%5CD%5CR%5CDrohobychYurii.htm ; https://en.wikipedia.org/wiki/Yuriy_Drohobych ; https://uma.lvivcenter.org/en/photos/1175
6. Леонардо да Вінчі 15.04.1452 – 2.05.1519; «Таємна вечеря» бл. 1495–1498 (Санта-Марія-делле-Грацьє, Мілан); «Мона Ліза» бл. 1503–1516/19 (Лувр); «Вітрувіанська людина» бл. 1490 (Галерея Академії, Венеція); дзеркальне письмо справа наліво; пояснення — шульга (Бамбах), версія «таємності» — менш поширена — https://en.wikipedia.org/wiki/Leonardo_da_Vinci ; https://www.vam.ac.uk/articles/leonardo-da-vincis-notebooks ; https://news.artnet.com/art-world/art-bites-leonardo-mirror-writing-2473530 . Кількість сторінок записників у джерелах 7 000 – 30 000 — в уроці лише «тисячі сторінок».
7. Мікеланджело 6.03.1475 – 18.02.1564; «Давид» 1501–1504 (Флоренція); стеля Сікстинської капели 1508 (контракт 8.05.1508) – 1512 (до 31.10.1512), замовник Юлій II; «Створення Адама» бл. 1511; архітектор собору Св. Петра з 1546, купол — за його задумом, завершив Джакомо делла Порта 1590 зі зміною форми — https://en.wikipedia.org/wiki/Michelangelo ; https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/volta.html ; https://www.newworldencyclopedia.org/entry/Saint_Peter%27s_Basilica
8. Собор Св. Петра — будівництво 18.04.1506 – 18.11.1626 — https://www.newworldencyclopedia.org/entry/Saint_Peter%27s_Basilica ; https://madainproject.com/papal_basilica_of_saint_peter
9. Лютер: 31.10.1517 — 95 тез надіслано архієпископу Альбрехту Бранденбурзькому (Майнц); прибивання до дверей — за Меланхтоном, спірне; 1515 — індульгенція Лева X на собор Св. Петра; теза 86 (папа, багатший за Красса, будує собор за гроші бідних) — https://en.wikipedia.org/wiki/Ninety-five_Theses ; https://schlosskirche-wittenberg.de/en/entdecken-en/theses-door ; https://www.christianitytoday.com/history/issues/issue-28/1517-luther-posts-95-theses.html
10. 1521 — відлучення (булла січня 1521), рейхстаг у Вормсі (квітень 1521), відмова зректися, Вормський едикт (травень 1521); Фрідріх Мудрий сховав у Вартбурзі; Новий Заповіт німецькою — 1522; 19.04.1529 — протест у Шпаєрі → «протестанти» — https://www.newworldencyclopedia.org/entry/Diet_of_Worms ; https://www.thereformation.info/protest-at-speyers ; https://en.wikipedia.org/wiki/Diet_of_Worms
11. Кальвін 1509–1564, Женева; Генрі VIII — Акт про верховенство 1534 (одне джерело — 1535) — https://www.britannica.com/topic/Protestantism/The-Reformation-in-England-and-Scotland ; https://fiveable.me/early-modern-europe-1450-1750/unit-3/spread-reformed-traditions-calvinism-anglicanism/study-guide/UPB0mKOuKMyyqnKV
12. Пересопницьке Євангеліє 1556–1561 (15.08.1556 – 29.08.1561), переклад книжною українською мовою «для кращого вирозуміння люду християнського посполитого»; присяга президентів з 1991 — https://www.encyclopediaofukraine.com/pages%5CP%5CE%5CPeresopnytsiaGospel.htm ; https://en.wikipedia.org/wiki/Peresopnytsia_Gospel ; https://chtyvo.org.ua/authors/Shevchenko_Vitalii_Volodymyrovych/Peresopnytska_Yevanheliia_v_oreoli_svoho_450-richchia.pdf . Прямий вплив Реформації — спірний (так і сказано у fbText).
13. Тридентський собор 1545–1563; скасував продавців індульгенцій; семінарії; Індекс заборонених книг Павла IV — 1559 (EBSCO — 1558) — https://www.christianitytoday.com/history/issues/issue-28/1545-council-of-trent-begins.html ; https://www.tutorchase.com/notes/aqa-a-level/history/14-2-4-the-catholic-reformation-and-council-of-trent-15311564 ; https://bridwell.omeka.net/exhibits/show/heresyerror/indexprohibitedbooks
14. Товариство Ісуса — булла Павла III «Regimini militantis Ecclesiae» 27.09.1540; Лойола — колишній військовий; правило 13 «Правил мислення з церквою» («що мені здається білим…») — https://en.wikipedia.org/wiki/Regimini_militantis_Ecclesiae ; https://www.jesuits.global/2021/09/26/on-27-september-1540-the-society-of-jesus-received-papal-approval/ ; https://www.americamagazine.org/faith/2019/02/28/do-st-ignatius-rules-thinking-church-call-blind-orthodoxy ; https://www.worldhistory.org/article/2010/loyolas-spiritual-exercises/
15. Петро Скарга, «O jedności Kościoła Bożego pod jednym pasterzem», 1577 — ідейна основа Берестейської унії; Скарга, Гербест, Поссевіно пропагували унію; єзуїтські колегії в Україні (Ярослав 1574, Львів 1608, Кам'янець 1611 …) — https://www.encyclopediaofukraine.com/pages%5CJ%5CE%5CJesuits.htm ; https://www.encyclopediaofukraine.com/pages%5CS%5CK%5CSkargaPiotr.htm ; https://studiapolskoukrainskie.uw.edu.pl/en/issues/9-1/jesuit-priests-in-a-union-project-and-a-romantic-myth
16. Аугсбурзький мир 25.09.1555: князь обирає католицтво чи лютеранство, незгодні переселяються, кальвіністи не захищені; формула «cuius regio, eius religio» пізніша (Штефані, 1582 або 1612) — в уроці не вжито — https://en.wikipedia.org/wiki/Cuius_regio,_eius_religio ; https://davenantinstitute.org/september-25th-peace-augsburg/
17. Релігійні війни у Франції 1562–1598; Варфоломіївська ніч 23–24.08.1572 після весілля Анрі Наваррського й Маргарити Валуа 18.08.1572; жертв по Франції 5 000 – 30 000 (в уроці — «тисячі гугенотів» у Парижі) — https://en.wikipedia.org/wiki/St._Bartholomew%27s_Day_massacre ; https://www.worldhistory.org/St._Bartholomew%27s_Day_Massacre/ ; https://www.ebsco.com/research-starters/history/st-bartholomews-day-massacre
18. Анрі IV: 13.12.1553 – 14.05.1610 (Равальяк); король з 2.08.1589; католицтво 25.07.1593; «Париж вартий меси» — приписування сумнівне (note) — https://en.wikipedia.org/wiki/Henry_IV_of_France ; https://www.britannica.com/event/Edict-of-Nantes
19. Нантський едикт — квітень 1598 (Britannica 13.04, en.wiki — оприлюднено бл. 30.04 → в уроці лише рік); ст. 6 — дозвіл жити в усіх містах без переслідувань за віру; скасовано Луї XIV у жовтні 1685 (Фонтенбло), до 400 тис. гугенотів утекли («сотні тисяч») — https://en.wikipedia.org/wiki/Edict_of_Nantes ; https://www.britannica.com/event/Edict-of-Nantes ; https://www.encyclopedia.com/history/modern-europe/french-history/edict-nantes
20. Варшавська конфедерація 28.01.1573 — релігійна терпимість для шляхти; вплив Варфоломіївської ночі; акт — AGAD, Пам'ять світу ЮНЕСКО 2003 — https://en.wikipedia.org/wiki/Warsaw_Confederation ; https://kuryerpolski.us/en/Page/View/konfederacja-warszawska ; https://jurist.org/thisday/2010/01/28/articles-of-the-warsaw-confederation-signed . Дослівного українського/англ. перекладу ключової фрази не знайшов — в уроці опис, не цитата.

### Зображення (урок → файл → ліцензія → URL)
- l1 intro → school-of-athens.jpg → PD-Art (PD-old) → https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg
- l2 intro → leonardo-flying-machine.jpg → PD → https://commons.wikimedia.org/wiki/File:Leonardo_da_vinci,_Drawing_of_a_flying_machine.jpg (Commons: бл. 1485, Ms B; Ms B датують 1488–1490 — у cap «бл. 1485 р.» за сторінкою файлу; верифікаторові звірити)
- l2 е4 → vitruvian-man.jpg → PD-Art; фотограф Luc Viatour вимагає згадки — є в credits → https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg
- l2 е8 → creation-of-adam.jpg → PD → https://commons.wikimedia.org/wiki/File:Michelangelo_-_Creation_of_Adam_(cropped).jpg
- l3 intro → luther-cranach-1528.jpg → PD → https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._-_Martin_Luther,_1528_(Veste_Coburg).jpg
- l4 intro → council-of-trent.jpg → PD-Art (скан з книжки Herbers/Neuhaus; Лувр INV 751, 23-тя сесія 15.07.1563; атрибуція — колишня «Тиціан») → https://commons.wikimedia.org/wiki/File:Tridentinum.jpg
- l5 intro → henri-iv-pourbus.jpg → PD → https://commons.wikimedia.org/wiki/File:Henry_IV_of_france_by_pourbous_younger.jpg
- l5 е8 → warsaw-confederation-1573.jpg (500 px — більшого на Commons немає) → PD-Art → https://commons.wikimedia.org/wiki/File:Akt_Konfederacji_Warszawskiej.jpg
- l6 intro → st-peters-basilica.jpg → CC0 (Jebulon, 2013) → https://commons.wikimedia.org/wiki/File:Saint_Peter%27s_Basilica_facade,_Rome,_Italy.jpg
Commons API (api.php) давав 429 — метадані брав через WebFetch сторінок файлів, мініатюри — з thumb.wikimedia.org з паузами 22 с.

### Сумнівні місця й опори (D-019)
- l1 е6 (multi «Чому в Італії»): Гутенберг/Майнц і чума 1347 через Сицилію — опора з w7s5 (l1, l3), у розділі `requires` немає; дистрактори відкидаються й міркуванням, але верифікаторові глянути.
- l1 е9 (sort факт/тлумачення): «Рафаель хотів показати, що християнство й античність не ворогують» — тлумачення (задум художника в документах не записано).
- l2 е5: «більшість дослідників схиляються до версії шульги» — у fbText (не оцінюється).
- l3 е8 (link Пересопниця): спирається на е7 «Лютерани служать рідною мовою» + е5 «переклав Новий Заповіт німецькою».
- l4 е8 і l5 е8 — «Пригадай»: Берестейська унія 1596 і Люблінська унія 1569 — з «Історії України» 8 кл. (g8s1), подано на екрані.
- l4 note до правила Лойоли — посилання лише на America Magazine (джерело тлумачення; worldhistory.org — у нотатках).
- Варфоломіївська ніч — без подробиць насильства, «вбили тисячі гугенотів» (чутлива тема).
- Назва уроку l5 «Мир після різанини» — якщо «різанина» зажорстко для 8 кл., замінити на «Мир після війн за віру».

### Пропозиції
- TERM (glossary/world): «Анрі IV» (програма: «Анрі ІV»; у дужках при першій згадці «Генріх Наваррський»), бо «Генріх IV» уже зайнятий імператором (w7s4); також Леонардо да Вінчі, Мікеланджело Буонарроті, Рафаель Санті, Франческо Петрарка, Піко делла Мірандола, Еразм Роттердамський, Юрій Дрогобич (Котермак), Мартін Лютер, Жан Кальвін, Генрі VIII, Ігнатій Лойола, Петро Скарга, Франс Пурбус Молодший, Лукас Кранах Старший; терміни: Відродження (Ренесанс), Високе Відродження, гуманізм, меценат, індульгенція, протестанти, лютеранство, кальвіністи, Контрреформація, Тридентський собор, єзуїти (Товариство Ісуса), колегія, Аугсбурзький релігійний мир, гугеноти, Варфоломіївська ніч, Нантський едикт, Варшавська конфедерація.


### Верифікація (verifier-write-world-w8s2, 2026-11-04)
Звіт: reports/verify/write-world-w8s2.md. 6 уроків → verified; 14 правок (requires w7s5l1/w7s5l3 + hint l1 е6; дата креслення Леонардо → «кінець 1480-х рр.»; «Створення Адама» → бл. 1511–1512; протест у Шпаєрі; note Лойоли; Варфоломіївська ніч; fbText Варшавської конфедерації; title l5 «Мир після війн за віру»; «Сотні єпископів»). validate 0/0, stats без прапорців, playtest 6/6 (копія дерева з build).
