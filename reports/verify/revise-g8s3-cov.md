# Верифікація: revise-hist-g8s3-cov (g8s3: l1 новий екран, l7, l8, фінал l6)

Верифікатор: verifier-revise-hist-g8s3-cov, 2026-11-12. Скіл content-verify. Автора не бачив.
Diff задачі рахував від c8c8beb (останній коміт файлу до claim) до робочого дерева: зміни потрапили в чужий коміт 75e98e1 «g7s1 cov…».

## Обсяг змін (git diff c8c8beb → робоче дерево)
- l1: новий екран 7 `sort` «Ворог чи союзник?», 4-й пункт `learned`; решта екранів без змін (опора dgh9 `nvv` — екран 3 «війна почалася 1648 р.» — не змінено).
- l3: без змін (опора dgh9 `nvv`). l5: без змін, крім eyebrow (опора dgh8 `g8-hetman`, dgh9 `hetm`).
- l4, l5: змінено **лише** eyebrow «Урок 4/5» → «Урок 5/6». Прецедент — перенумерація eyebrow у verified-уроках прийнята (decisions.md, g7m6). Статус `verified` лишено.
- l7, l8 — нові. l6 (boss): +`pre` у кожному завданні, нове «Завдання 4» (l7), колишнє «Завдання 6» (факт/тлумачення 1648–1649) замінено на «Завдання 7» (1656–1657). Тести рівня посилаються лише на уроки l1, l3, l5 (поле `lessons`), а не на екрани boss — замінене завдання опорою тесту не було.

## Факти

| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Батіг: 1–2 червня (22–23 травня ст. ст.) 1652 р.; гора Батіг, Поділля; Калиновський загинув; умови Білої Церкви перекреслено | ЕІУ «Батозька битва 1652» дослівно «1–2 черв. (22– 23 трав.)», «великий коронний гетьман М.Калиновський» загинув, «зірвала Білоцерківський договір» — http://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Batozka_bytva_1652 ; EoU «Batih, Battle of» (23 May 1652; полки йшли до Молдавії; Калиновський загинув; «overturned … Bila Tserkva») https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBatihBattleof.htm ; Ukrainian Week «1–2 June 1652», похід на Молдавію й династичний шлюб https://ukrainianweek.com/History/67173 | ✅ |
| «В одній енциклопедії — 23 травня 1652 р.» (l7 е4) | EoU (вище) — «On 23 May 1652» | ✅ |
| 1650 р. козацько-татарський похід у Молдавію; Лупул пообіцяв Розанду | EoU «Khmelnytsky, Tymish» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CH%5CKhmelnytskyTymish.htm ; en.wiki «Wedding campaign of Tymofiy Khmelnytsky» («as had been arranged in 1650») https://en.wikipedia.org/wiki/Wedding_campaign_of_Tymofiy_Khmelnytsky | ✅ |
| Весілля Тимоша й Розанди — літо 1652 р., **після** Батогу | en.wiki Wedding campaign (похід «in the aftermath of Batih», весілля в Яссах 21 або 31 серпня 1652); Ukrainian Week (шлюб після здобуття Ясс); uk.wiki «Тиміш Хмельницький» (Ясси, 1652) https://uk.wikipedia.org/wiki/Тиміш_Хмельницький | ✅ |
| 1653: бояри проти Лупула, їх підтримали Валахія й Трансільванія; Тиміш обороняв Сучаву, смертельно поранений, помер у вересні 1653 р.; Лупул утратив владу | EoU Tymish (Ракоці й Матей Басараб підтримали бояр; d 15 September 1653); uk.wiki Тиміш (поранений 12.09, помер 15.09.1653); en.wiki «Siege of Suceava (1653)» (22.07–9.10.1653, поразка оборонців) https://en.wikipedia.org/wiki/Siege_of_Suceava_(1653) | ✅ (облогу підтримували й польські загони — у тексті не згадано, не хибно) |
| `cap` l7 е6: Сучава, «улітку й восени 1653 р. тут оборонялися козаки», західні мури, фото 2016 | en.wiki Siege of Suceava («held besieged in the Suceava Castle», 22.07–9.10); Commons «Seat Fortress of Suceava – the western part», 17.08.2016 https://commons.wikimedia.org/wiki/File:Cetatea_de_Scaun_a_Sucevei_01.jpg | ✅ |
| Жванець: осінь 1653, табір Яна II Казимира на Дністрі, голод; у грудні хан Іслам III Герай уклав окрему угоду без Хмельницького; утретє після Зборова й Берестечка | uk.wiki «Жванецька облога» (28.09, Дністер, голод, угода 5 (15) грудня 1653, Хмельницький не сторона) https://uk.wikipedia.org/wiki/Жванецька_облога ; en.wiki «Siege of Zhvanets» (starve, 16.12.1653 truce) https://en.wikipedia.org/wiki/Siege_of_Zhvanets ; EoU «Islam-Girei III» (тричі: Зборів, Берестечко, Жванець, окремий мир з королем) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CI%5CS%5CIslam6GireiIII.htm ; EoU «Zhvanets» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CH%5CZhvanets.htm | ✅ |
| Ясир — полонені на продаж; ринок у Криму (Кафа) | uk.wiki «Ясир» https://uk.wikipedia.org/wiki/Ясир ; EoU «Teodosiia» (Kefe slave market, captives mostly from Ukraine) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CE%5CTeodosiia.htm ; facts/hist-2 №337 | ✅ |
| Козаки нападали на кримські міста | EoU «Teodosiia» (Сагайдачний 1616, 1628); uk.wiki «Ясир» (визволяли під час походів) | ✅ |
| Кінець 1624 р. — перший відомий договір запорожців із Кримом; Шагін Герай, брат хана (калга), присягнув не шкодити козакам і допомагати; союз швидко розпався | В. Брехуненко, УІЖ: «24 грудня 1624 р. на Січі … перший в історії козацько-татарський трактат … Шагін-Гірей присягав не завдавати ніякої шкоди козакам і приходити їм на допомогу»; березень 1625 — лист Шагіна про припинення союзу https://nasu-periodicals.org.ua/index.php/uhj/article/download/21510/20407/39950 ; Радіо Свобода (24.12.1624 = 3.01.1625 н. ст., текст присяги) https://www.radiosvoboda.org/a/hmelnychchyna-pershyi-krymsko-ukrainskyi-dohovir/32049411.html і продовження (союз де-юре скасовано 1625) https://www.radiosvoboda.org/a/hmelnychchyna-pershyi-krymsko-ukrainskyi-dohovir-neporozuminnia/32061577.html ; en.wiki «Crimean campaign (1624)» («first known Zaporozhian-Crimean treaty», «broken … Autumn of 1625») https://en.wikipedia.org/wiki/Crimean_campaign_(1624) ; en.wiki «Mehmed III Giray» (Шагін — брат, калга) https://en.wikipedia.org/wiki/Mehmed_III_Giray | ✅ (дата за ст. ст.; н. ст. — 3.01.1625; «наприкінці 1624 р.» — як у EoU/en.wiki, лишаю) |
| Віленське перемир'я 1656 (осінь), Москва й Річ Посполита, козацьких послів не допустили; за угодою 1654 цар мав захищати | uk.wiki «Віленське перемир'я» (24.10 (3.11).1656; посольство Гапоненка не допущене) https://uk.wikipedia.org/wiki/Віленське_перемир'я ; en.wiki «Truce of Vilna» (excluded; обов'язок захисту за Переяславом) https://en.wikipedia.org/wiki/Truce_of_Vilna ; Радіо Свобода https://www.radiosvoboda.org/a/967375.html | ✅ |
| Москва воювала з РП з 1654; Швеція напала 1655; переговори з Карлом X Густавом; Карл X — король з 1654, сам водив військо | EoU «Sweden» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CW%5CSweden.htm ; en.wiki «Charles X Gustav» (коронований 6.06.1654; 1655 сам рушив на Польщу) https://en.wikipedia.org/wiki/Charles_X_Gustav ; uk.wiki Віленське перемир'я (війна 1654–1667) | ✅ |
| Восени 1656 р. угода про дружбу з Ракоці (Трансільванія) | Радіо Свобода «Восени гетьман уклав угоду про дружбу з … Дьєрдєм ІІ Ракоці» https://www.radiosvoboda.org/a/967375.html ; Серко, БДУ 2012: «У верасні таго ж года [1656] быў падпісаны „вечны мір“ паміж Сямігароддзем і Войскам Запарожскім» https://elib.bsu.by/bitstream/123456789/47121/1/serko_2012_sbornik8_tom1.pdf ; EoU «Rákóczi, György II» (1656 — коаліція Трансільванії, України, Швеції) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CI%5CRI0kI9cziGyIArgyII.htm | ✅ (точна дата 7.09.1656 відкритим джерелом не підтверджена — у тексті її немає) |
| Грудень 1656 — Раднот, Швеція й Трансільванія ділять РП; частка козаків | en.wiki «Treaty of Radnot» (6.12.1656; ст. 6 — Україна козакам «or whatever else may be agreed upon with them», межі відкладено) https://en.wikipedia.org/wiki/Treaty_of_Radnot ; pl.wiki «Traktat w Radnot» (рішення про землі Хмельницького відкладено) https://pl.wikipedia.org/wiki/Traktat_w_Radnot | ⚠ було «Україну в цьому плані лишали козакам» — джерела розходяться → **виправлено**: «Землі для козаків мали визначити пізніше, разом із Хмельницьким» |
| Узимку 1657 Жданович із Ракоці на Польщу; улітку зі шведами взяли Варшаву; поляки розбили Ракоці | uk.wiki «Антон Жданович» (початок 1657, Стрий; Варшава — середина літа; поразка під Магеровом) https://uk.wikipedia.org/wiki/Антон_Жданович ; EoU Rákóczi (Краків і Варшава «with the help of Swedish and Ukrainian forces»; оточений поляками 23.07.1657, капітулював); Радіо Свобода (січень 1657, 20-тис. корпус Ждановича, Варшава) | ✅ |
| Хмельницький помер 6 серпня 1657 р. у Чигирині | EoU «Khmelnytsky, Bohdan» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CH%5CKhmelnytskyBohdan.htm ; facts №248 | ✅ |
| Соціальні зміни: магнати й майже вся шляхта втратили маєтки; земля — селянам, козакам, міщанам, військовому скарбу; селяни особисто вільні, без панщини; покозачення; верхівка — старшина, згодом здобувала землі | В. Степанков 2006–2007, с. 324 дослівно «Магнати і майже вся шляхта … втратили її … Вона потрапила до рук селян, козаків, міщан та військового Скарбу»; «Селяни вважали себе вільними людьми» https://www.inst-ukr.lviv.ua/files/23/320Stepankov.pdf ; EoU «Peasants» (abolition of serfdom in the emergent Hetman state; starshyna later appropriated land) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CE%5CPeasants.htm ; EoU Khmelnytsky (new elite of Cossack officers) | ✅ |
| Портрет Бурдона: Карл X Густав спадкоємцем трону; Nationalmuseum NM 2642; PD | Commons («Karl X Gustav (1622-1660) som tronarvinge», дата невідома, PD-old-100, PD-Art) https://commons.wikimedia.org/wiki/File:King_Charles_X_Gustavus_(S%C3%A9bastien_Bourdon)_-_Nationalmuseum_-_19702.tif ; en.wiki Charles X Gustav | ✅ |
| Boss: Стефан Потоцький помер від ран після Жовтих Вод; Ян II Казимир 1653 під Жванцем | l2 е3 (verified); uk.wiki / en.wiki Жванець (вище) | ✅ |

## Зображення (D-027)
- `img/hist/g8s3/suceava-fortress.jpg` — Radueduard, 17.08.2016, **CC BY-SA 3.0 RO** (Commons, перевірено); credits: опис, автор, ліцензія, URL — атрибуцію дотримано (формат як в інших credits розділу). На фото — мури фортеці, відповідає «західна частина».
- `img/hist/g8s3/karl-x-gustav.jpg` — Себастьєн Бурдон (пом. 1671), PD-old-100 / PD-Art — ✅. На зображенні видно обладунок, шолом, руків'я меча, булаву — завдання l8 е4 розв'язне з фото.

## Відповіді й опора (D-019)
Розв'язував сам, потім звіряв з `correct`.

| Завдання | Моя відповідь = ключ | Звідки відповідь | Вердикт |
|---|---|---|---|
| l1 е7 sort «Ворог чи союзник?» | ✅ | тіло екрана (ясир, походи, присяга 1624) + е6 (союз 1648) | ✅ |
| l7 е2 hyp | — | здогадка | ✅ |
| l7 е4 choice «Дві дати» (1) | ✅ | е3: «1–2 червня (за старим календарем — 22–23 травня)» | ✅ |
| l7 е5 multi [1,2,4] | ✅ | е3 (розгром, Калиновський, Біла Церква); «втратили союз із татарами» — суперечить е3; «Молдавія — частина Гетьманщини» — не випливає | ✅ |
| l7 е7 choice (2) | ✅ | е6 (бояри, Валахія й Трансільванія, загибель Тимоша); хибні суперечать е6 | ✅ |
| l7 е8 choice «Що це нагадує?» (0) | ✅ | l3 е1, е7 (хан під Зборовом); хибні — реєстровці (l2) і Біла Церква (l3) — інша ситуація | ✅ |
| l7 е9 order | ✅ | е1/е3 (1651, 1652), е6, е8. Батіг → весілля трималося на «полки рушили на весілля… шлях перепинило» + «Того ж літа» — **посилено**: е6 «Після Батогу, того ж літа 1652 р., Тиміш одружився…» | ✅ після правки |
| l8 е2 hyp | — | здогадка | ✅ |
| l8 е4 choice (2) | ✅ | фото (обладунок, шолом, меч); `cap` відповіді не видає | ✅ |
| l8 е5 choice (0) | ✅ | е3 + l4 (протекція царя) | ✅ |
| l8 е7 choice (1) | ✅ | тіло екрана + l7 е6 | ✅ |
| l8 е9 sort | ✅ | е8 + l5 (полковник) | ✅ |
| l8 е10 multi [0,3,4] | ✅ | е3, е6; «підписав Віленське» — суперечить е1/е3; «відмовився від війни» — суперечить е6 | ✅ |
| l6 Завд. 1–3, 5–6 | ✅ | без змін, лише `pre` | ✅ |
| l6 Завд. 4 (0) | ✅ | l7 е3, l2 е3 | ✅ |
| l6 Завд. 7 sort | ✅ | l8 е3; оцінки з «точно», «найкраще» — тлумачення | ✅ |

Позиції правильних відповідей: l7 choice 1, 2, 0; l8 — 2, 0, 1; boss choice 0, 2, 0, 1 — різні. Підказки (l7 е4, е8; l8 е5, е9) спрямовують, але не відкидають усі хибні варіанти й не дають відповідь дослівно. `learned` l1, l7, l8, l6 — лише з екранів уроків.

## Прогони
- `node tools/validate.mjs --section g8s3` — 0 помилок, 0 попереджень (до і після правок).
- `--diag dgh8`, `--diag dgh9` — 0 / 0.
- `node tools/euphony.mjs --subject hist --section g8s3` — у l7, l8 і новому екрані l1 знахідок немає (старі знахідки l1–l6 не чіпав).
- `node tools/stats.mjs --subject hist` — l1, l7, l8, l6 без прапорців.
- Плейтест: Python-модуля playwright у контейнері немає — браузерний прогін лише в CI (job `browser`).

## Правки (зроблені, 4 змістові + коментар)
1. l7 е6: «Того ж літа 1652 р. Тиміш одружився…» → «Після Батогу, того ж літа 1652 р., …» — явна опора для order е9 (весілля після Батогу; en.wiki Wedding campaign).
2. l8 е6: «Україну в цьому плані лишали козакам» → «Землі для козаків мали визначити пізніше, разом із Хмельницьким» (en.wiki / pl.wiki Radnot розходяться щодо ст. 6).
3. l8 е7 fbText: «в нього і в гетьмана» (рід не узгоджено з «Трансільванія») → «у Ракоці й у гетьмана».
4. Статуси l1, l7, l8, l6 → `verified`; коментар-шапка — назви l7/l8 узгоджено з `title`, позначка верифікації.

## Рекомендовано (не блокує)
- l7 е4 дистрактор «помилився на тиждень» — різниця календарів 10 днів; можна «на десять днів» (обидва варіанти хибні, на ключ не впливає).
- Договір 1624 р.: за н. ст. — 3.01.1625; якщо колись у розділі з'явиться точна дата — писати «24 грудня 1624 р. (3 січня 1625 р.)».
- Дата угоди з Ракоці 7.09.1656 (угорський журнал за пошуковим витягом) відкритим джерелом не підтверджена — у тексті лише «восени 1656 р.», так і лишати.

## Вердикт
- g8s3l1 — **verified** (новий екран фактично точний, опора на екрані; опору dgh9 не зачеплено).
- g8s3l7 — **verified** (після правки 1).
- g8s3l8 — **verified** (після правок 2–3).
- g8s3l6 (boss) — **verified**.
- g8s3l4, g8s3l5 — лишаються **verified** (змінено лише eyebrow).
- g8s3l2, g8s3l3 — без змін, verified.
Людині: нічого блокувального; `approved` — лише вчитель.
