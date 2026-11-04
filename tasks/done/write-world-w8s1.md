---
claimed_from: review
claimed_at: 2026-11-04T07:01:30.114Z
id: write-world-w8s1
type: write-section
subject: world
grade: 8
section: w8s1
weeks: [1, 7]
status: done
claimed_by: verifier-write-world-w8s1
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Великі географічні відкриття» (Всесвітня історія, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як європейці вийшли в океан, що вони знайшли і що це означало для мешканців Америки, Африки й Азії.

## Теми уроків (з плану)
1. Чому шукали шлях до Індії
2. Колумб і Васко да Гама
3. Магеллан: навколо світу
4. Цивілізації доколумбової Америки і конкіста
5. Наслідки відкриттів: світ стає одним
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
- Файл `content/world/g8-w8s1.js` з `SLID.section("world", { id: "w8s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w8s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w8s1` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**writer-write-world-w8s1, 2026-11-04.** Файл `content/world/g8-w8s1.js`, 6 уроків (5 тем + boss l6, значок `discoveries`), усі `status: "draft"`. validate --section w8s1: 0 помилок, 0 попереджень; stats --subject world: уроки w8s1 без прапорців; playtest --section w8s1 — 6/6 (у копії дерева в scratchpad з build у копії: у спільному дереві build не запускав, тож w8s1 ще не в index.html — оркестраторові потрібен build).

### Уроки
- l1 «Перець за тридев'ять земель» (8 ек.) — прянощі й посередники, компас/астролябія/каравела, «Бог, золото, слава», міф «османи закрили шлях» (crit, note з Лайбаєром).
- l2 «Дві дороги до Індії» (9) — Колумб 1492, хибний розрахунок, да Гама (пригадай з w7s5 l5), Тордесільяс 1494, Бразилія 1500, `link` order (1453 / лист про козаків 1492 / 1494 / 1498), фінал — карта Вальдземюллера 1507 (AMERICA).
- l3 «Загублений день «Вікторії»» (9) — Магеллан 1519–1522, Тихий океан, щоденник Пігафетти, Мактан і Лапу-Лапу (погляд філіппінців), «загублена» доба як доказ.
- l4 «Місто посеред озера» (8) — майя, ацтеки, інки, конкіста (Кортес, Пісарро), причини перемоги, Кодекс Мендоси як джерело (хто й для кого).
- l5 «Срібна гора» (8) — Потосі, Колумбів обмін (сортування «борщ з двох світів»), революція цін (note про суперечку), `link` фільварки й зерно через Гданськ, работоргівля (number 12,5 − 10,7 = 1,8 млн).
- l6 «Атлас нового світу» (boss, 7 ек., 6 завдань: одне на кожен урок + стрічка часу; рамка — помічник Ортелія 1570).

### Зображення (img/world/w8s1/, усі — thumb.wikimedia.org, ≤ 250 КБ)
| Урок | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l1 | pepper-harvest.jpg (BnF fr. 2810, бл. 1410–1412) | PD | https://commons.wikimedia.org/wiki/File:Le_livre_des_merveilles_de_Marco_Polo-pepper.jpg |
| l2 | behaim-globe.jpg (фото 2006, Alexander Franke) | CC BY-SA 2.0 DE | https://commons.wikimedia.org/wiki/File:Behaims_Erdapfel.jpg |
| l2 | waldseemuller-america.jpg (фрагмент 3840px-мініатюри, мій кроп) | PD | https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg |
| l3 | ortelius-pacific-1589.jpg | PD | https://commons.wikimedia.org/wiki/File:Ortelius_-_Maris_Pacifici_1589.jpg |
| l4 | codex-mendoza.jpg (кольори відновив Tillman, 2021) | PD | https://commons.wikimedia.org/wiki/File:First_page_of_the_Codex_Mendoza,_ca._1541_restored.jpeg |
| l5 | potosi-1553.jpg (Сьєса де Леон) | PD | https://commons.wikimedia.org/wiki/File:Capitulo-CIX.jpg |
| l6 | ortelius-world-1570.jpg | PD | https://commons.wikimedia.org/wiki/File:OrteliusWorldMap1570.jpg |
Хибні описи Commons: `Harvesting_of_Pepper_in_Coilum…14TH_CENTURY_Painting.jpg` датує мініатюру XIV ст. (насправді бл. 1410–1412, файл позначено як замінений) — не брав. Опис Ortelius Maris Pacifici «showed the Americas for the first time» — хибний, у cap не вживав.

### Факти й джерела (нові для facts/world.md)
1. Марко Поло — венеційський купець, повернувся наприкінці XIII ст.; «Книга чудес» BnF fr. 2810 бл. 1410–1412 (Майстер Бусіко й Майстер Мазаріни) — Commons (вище); https://en.wikipedia.org/wiki/Livre_des_merveilles_du_monde
2. Міф «османи 1453 р. закрили шлях до прянощів» — A. H. Lybyer 1915 (EHR): https://www.gutenberg.org/files/50860/50860-h/50860-h.htm ; https://www.historynewsnetwork.org/blog/8162 . Прянощі йшли через Єгипет і Сирію (Александрія, Бейрут), Єгипет — під османами лише з 1517.
3. Глобус Бехайма (Erdapfel) — Нюрнберг, 1490–1494 (часто «1492»), найстаріший збережений земний глобус, без Америки; GNM WI1826 — https://www.cabinet.ox.ac.uk/node/4241 ; https://germanhistory-intersections.org/en/knowledge-and-education/ghis:image-74
4. Колумб: Палос 3.08.1492; висадка 12.10.1492 на Гуанахані (Багами; ідентифікація острова спірна); вважав, що в Азії; ще три плавання; пом. 1506 — https://www.britannica.com/biography/Christopher-Columbus/The-first-voyage ; https://en.wikipedia.org/wiki/Guanahani ; https://www.floridamuseum.ufl.edu/caribarch/columbus.htm
5. Розрахунок Колумба: Канари — Японія ≈ 2400 морських миль (≈ 23 % справжньої відстані, «учетверо менше»); португальські експерти Жуана II відкинули (бл. 1484) — https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus ; https://en.wikipedia.org/wiki/Christopher_Columbus (розділ «Geographical considerations»)
6. Тордесільяський договір 7.06.1494, лінія 370 ліг на захід від о-вів Зеленого Мису; Кабрал 1500 — Бразилія на схід від лінії — https://www.newworldencyclopedia.org/entry/Treaty_of_Tordesillas ; https://lidarmag.com/2009/04/11/the-treaty-of-tordesillas/
7. Вальдземюллер 1507 — перша карта з назвою «America» (на честь Амеріго Веспуччі, бо картограф вважав його першовідкривачем Нового Світу); єдиний примірник — Бібліотека Конгресу ($10 млн) — https://www.loc.gov/item/prn-01-093/ ; https://www.cabinet.ox.ac.uk/waldseem-ller-map-1507-0
8. Магеллан: Санлукар 20.09.1519, 5 кораблів, ≈ 270 осіб; протока — жовт.–лист. 1520 (вихід 28.11.1520); перехід Тихого океану ≈ 3 міс. 20 днів (сухарі з черв'яками, шкіри з рей, тирса, щур за пів дуката — валюта в перекладах різниться); Мактан 27.04.1521, Лапу-Лапу; «Вікторія» з Елькано — Санлукар 6.09.1522, 18 осіб (усього повернулися ≈ 40 різними шляхами — у note) — https://en.wikipedia.org/wiki/Magellan_expedition ; https://en.wikipedia.org/wiki/Battle_of_Mactan ; https://www.philstar.com/arts-and-culture/2021/04/26/2093944/battle-mactan-500th-anniversary-historian-shares-10-facts ; https://philippinediaryproject.com/1520/11/28/28th-of-november-1520/
9. «Загублена» доба: о-ви Зеленого Мису, 9.07.1522 — у моряків середа, у місцевих четвер — https://webspace.science.uu.nl/~gent0113/idl/idl_discovery.htm ; https://en.wikipedia.org/wiki/Antonio_Pigafetta
10. Напис на карті Ортелія 1589 («Prima ego velivolis ambivi cursibus orbem…») — у тексті уроку не вживав; https://orteliusmaps.com/book/ort12.html
11. Теночтитлан — бл. 1325 (Britannica «c. 1325»), падіння 13.08.1521; союзники-тласкаланці; віспа 1520 — https://www.britannica.com/place/Tenochtitlan ; https://www.britannica.com/event/Fall-of-Tenochtitlan ; https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan
12. Кодекс Мендоси — бл. 1541(–1542), Мехіко, писар-науа, замовник — віце-король Антоніо де Мендоса для Карла V; f. 2r — заснування Теночтитлана (орел на кактусі) — https://human.libretexts.org/Bookshelves/Art/Art_History_and_Theory/SmartHistory_of_Art_2e/SmartHistory_of_Art_XIc_-_Latin_America_1500_to_1900/02%3A_New_Spain_(Spanish_colonies)/2.02%3A_16th_century/2.2.07%3A_Frontispiece_of_the_Codex_Mendoza ; https://omeka.ischool.utoronto.ca/items/show/426
13. Пісарро: Кахамарка 16.11.1532, 168 іспанців, полон Атауальпи (страта 1533); війна Атауальпи й Уаскара — https://www.worldhistory.org/Atahualpa/ ; https://en.wikipedia.org/wiki/Spanish_conquest_of_the_Inca_Empire
14. Дороги інків: ЮНЕСКО — мережа 30 000 км (en.wiki — ≈ 40 000) → в уроці «десятки тисяч кілометрів» — https://whc.unesco.org/en/list/1459 ; https://en.wikipedia.org/wiki/Inca_road_system . Кіпу, письмо й нуль майя, розквіт III–IX ст. — https://en.wikipedia.org/wiki/Quipu ; https://en.wikipedia.org/wiki/Maya_civilization (загальновідоме, верифікаторові — звірити з Britannica).
15. Колумбів обмін — термін А. Кросбі 1972; з Америки картопля, кукурудза, помідори, квасоля, соняшник, какао, тютюн; до Америки — пшениця, цукрова тростина, коні, худоба, віспа, кір — https://www.britannica.com/topic/Columbian-Exchange ; https://en.wikipedia.org/wiki/Columbian_exchange
16. Потосі — срібло 1545, примусова праця (міта); срібло через Манілу до Китаю (манільські галеони з 1565/1571) — https://asianreviewofbooks.com/content/potosi-the-silver-city-that-changed-the-world-by-kris-lane/ ; https://www.globaltrademag.com/as-rich-as-potosi/ ; гравюра Сьєси 1553 — перше зображення Потосі в Європі (Commons).
17. Революція цін XVI ст.: ціни зросли «в кілька разів», причини — срібло й ріст населення (суперечка Гамільтон / демографи / Мунро) — https://en.wikipedia.org/wiki/Price_revolution ; https://www.economics.utoronto.ca/munro5/PRICERV2.pdf
18. Зерновий експорт Віслою через Гданськ, попит Західної Європи → фільварки, посилення панщини (у курсі — hist g8s1, facts/hist) — https://en.wikipedia.org/wiki/Serfdom_in_Poland ; https://zpe.gov.pl/a/D5xiBDBug ; https://osvita.ua/vnz/reports/world_history/4778/ (реферат — лише як покажчик). ЕІУ «Фільварок» не дістав (EoU-адреса 404) — верифікаторові звірити з ЕІУ.
19. Атлантична работоргівля: ≈ 12,5 млн вивезено, ≈ 10,7 млн висаджено (Slave Voyages, 1501–1866) — https://en.wikipedia.org/wiki/Voyages:_The_Trans-Atlantic_Slave_Trade_Database ; https://www.slavevoyages.org/
20. Ортелій, «Theatrum Orbis Terrarum» — Антверпен, 20.05.1570, умовно перший сучасний атлас — https://raremaps.com/essay/9/the-theatrum-orbis-terrarum ; https://en.wikipedia.org/wiki/Theatrum_Orbis_Terrarum
21. Козаки 1492 — facts/hist №104 (без змін).

### Спірні місця й опори (D-019)
- l1 е7 (османи): відповідь виводиться з дат на самому екрані (1415, 1434 < 1453). «Бог, золото, слава» — шкільна формула істориків, не цитата.
- l2 е4: «учетверо більше» — заокруглення (Columbus: ≈ 23 %).
- l2 е8 (`link`): подія 1492 р. з hist g8s2 (тижні 7–13, тобто після w8s1) — тому подано на екрані повністю; 1453 — з w7s5 l4, теж нагадано.
- l3 е4: цитата Пігафетти — переказ за англійськими перекладами (Skelton / Robertson), не дослівно.
- l3 е6 (number 1522 − 1492): 1492 — з l2.
- l4: «близько 1325 р.» — дата переказу; число-задачу на 1325 → 1521 прибрав, щоб не будувати арифметику на умовній даті (і щоб урок пройшов профіль).
- l5 е7 (number 1,8 млн, чутлива тема): задача про масштаб, без натуралістики; `unit: "млн"`, відповідь десяткова (1,8).
- l5 е4: квасоля в борщі — «у багатьох рецептах»; буряк, капуста — Старий Світ (подано в body).
- boss: 6 завдань (одне на урок + стрічка часу), усі на матеріал розділу; Q5 (`link`) спирається на l5 е6.

### Пропозиції
- glossary/world: Фернан Магеллан, Хуан Себастьян Елькано, Антоніо Пігафетта, Лапу-Лапу, Христофор Колумб, Амеріго Веспуччі, Мартін Вальдземюллер, Мартін Бехайм, Абрахам Ортелій, Ернан Кортес, Франсиско Пісарро, Атауальпа, Теночтитлан, кіпу, конкіста/конкістадори, Тордесільяський договір, Колумбів обмін, революція цін, Потосі, Серро-Ріко, Педро Сьєса де Леон.

**verifier-write-world-w8s1, 2026-11-04.** Незалежна перевірка: 34 твердження → ✅ (URL у reports/verify/write-world-w8s1.md), усі 33 завдання розв'язано й мають опору (D-019). 3 правки: l2 #9 — «1507 р.» у body (опора для l6 Q6); l5 #6 — додано питання «Що це означало для селян?»; l5 #7 fbText — «загинули в дорозі через океан». Усі 6 уроків → `verified`. Рекомендації (не блокують) — у звіті §4. Потрібен build (оркестратор) і playtest --section w8s1.
