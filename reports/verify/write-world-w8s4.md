# Верифікація w8s4 «Європа і світ у XVII ст.» (world, 8 кл.)

Верифікатор: verifier-write-world-w8s4, 2026-11-04. Файл: `content/world/g8-w8s4.js` (6 уроків). Скіл content-verify.
Усі джерела відкриті в цій сесії (WebFetch/WebSearch). Britannica (403) — лише як рядок пошукової видачі, не як основне джерело.

## Вердикт
**Розділ verified** (усі 6 уроків, `status: "verified"`, `meta.factcheck: "verifier-write-world-w8s4"`). Правок 7 (фактичні уточнення, відповіді та опори не змінилися). Неправильних відповідей і завдань без опори не знайдено.

## Прогін
- `node tools/validate.mjs --section w8s4`: 0 помилок, 0 попереджень (до правок і після).
- `node tools/stats.mjs --subject world`: у w8s4 немає прапорців.
- `python3 tools/playtest.py --section w8s4`: пройдено 6 уроків (у спільному дереві розділ уже є в збірці; build я не запускав).
- Зображення: усі 7 файлів переглянув. Знаки влади (корона на подушці, скіпетр у правій руці, меч при боці), лати й жезл Кромвеля, один міст із брамою на Дедзімі видно на екрані.

## Правки (зроблені)
| # | Урок | Було | Стало | Чому |
|---|---|---|---|---|
| 1 | l1 number fbText | «Майже все XVII ст. Францією правив один король» | «Від середини XVII до початку XVIII ст. …» | 1643–1700 — це 57 із 100 років XVII ст., тож «майже все» неточно |
| 2 | l1 Версаль | «переніс двір і уряд з Парижа до палацу у Версалі» | «… до палацу у Версалі, неподалік Парижа» | до 1682 р. двір здебільшого жив не в Парижі; сайт Версаля: «Paris never ceased to be the official capital» (fbText «лишався столицею» правильний) |
| 3 | l2 | «Армію парламенту очолив Олівер Кромвель» | «Найуспішнішим полководцем парламенту став Олівер Кромвель» | з 1645 р. Новою моделлю командував Ферфакс, а Кромвель був генерал-лейтенантом кінноти |
| 4 | l2 Славна революція | «парламентарі запросили на трон його доньку Марію та її чоловіка» | «противники Якова покликали до Англії його зятя … Трон парламент передав Вільямові та його дружині Марії, доньці Якова» | «Безсмертна сімка» кликала Вільяма втрутитися; монархами їх зробив Конвент 1689 р. |
| 5 | l4 | «Голландією — за найбільшою провінцією» | «за наймогутнішою провінцією» | у джерелі про Голландію: «dominating», «political and economic centre»; про площу не йдеться |
| 6 | l5 | «Португальські місіонери» | «Європейські місіонери» | у едикті — «Namban (Portuguese and Spanish)» |
| 7 | l5 | «в давніх європейських джерелах звали богдиханом» | «в давніх монгольських і московських текстах звали богдиханом — «священним ханом»» | титул монгольський; з європейських мов його вживали лише в Московії (Нерчинський договір) |

## Відкриті питання оркестратора
- **Церемонія одягання (lever):** формулювання «змагалися за честь бути поруч із королем — навіть подавати йому одяг уранці» допустиме. Сорочку подавали високі сановники-аристократи (великий камергер), а потрапити на grand lever вважали великою милістю. Джерела: https://en.wikipedia.org/wiki/Levee_(ceremony) ; https://shannonselin.com/?p=5595. ✅ як спрощення.
- **Втрати імперії:** у Вілсона «at least a fifth» (https://www.rorotoko.com/micro-interviews/20100423-wilson-peter-on-europe-tragedy-history-thirty-years-war-1). Britannica дає 15–20 %, з 20 до 16–17 млн (за видачею WebSearch; сторінка повертає 403). Wikipedia: 4,5–8 млн загиблих, у частині країв убуток понад 50 % (https://en.wikipedia.org/wiki/Thirty_Years%27_War). Формулювання «за оцінками, приблизно на п'яту частину» залишаю. ✅
- **Богдихан:** sum.in.ua віддає 503. Вікісловник: «заст. китайський імператор» (https://uk.wiktionary.org/wiki/богдихан). Bogda Khan — монгольський титул імператорів Цін, у Московії його вжито в Нерчинському договорі (https://kaweah.freedombox.rocks/kiwix/wikipedia_en_all_maxi_2023-10/Bogda_Khan). Атрибуцію виправлено (правка 7).
- **Дедзіма 1830-х:** дата «бл. 1833–1836 рр.» є в обох `cap` і в credits. Завдання питає, як острів охороняли, а режим діяв до 1854 р., тож пізня картина як джерело тут доречна. ✅
- **Link травень 1648:** битва на Жовтих Водах тривала 29.04–16.05.1648, розгром 16.05 (https://en.wikipedia.org/wiki/Battle_of_Zhovti_Vody ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CH%5CZhovtiVodyBattleof.htm). Присяга в Мюнстері — 15.05.1648 (NG; https://en.wikipedia.org/wiki/Peace_of_M%C3%BCnster). Отже, «У травні … розгромило» і «того ж травня присягали» правильні. Фраза boss «коли в Мюнстері присягали» допустима: між подіями одна доба. ✅
- **Зерно через Гданськ:** moedernegotie — «mother of all trades», серед головних товарів зерно (https://mass.cultureelerfgoed.nl/routes/baltic-sea-timber-trade). Данциг — один із головних портів, торгівля зосереджена в Амстердамі (https://huygens.knaw.nl/?p=11473). Шлях Віслою до Гданська учень знає з w8s1 l5 (екран «Пригадай»). ✅

## Факти
| Твердження | Джерела (відкриті) | Вердикт |
|---|---|---|
| Луї XIV: н. 1638, король 14.05.1643 у 4 роки, Мазаріні † 1661 → правління без першого міністра, † 1.09.1715, ≈ 72 роки | https://en.wikipedia.org/wiki/Louis_XIV ; https://commons.wikimedia.org/wiki/File:Louis_XIV_of_France.jpg (1701) | ✅ |
| Портрет Ріго 1701, Лувр INV 7492, 277 × 194 см («майже три метри») | https://commons.wikimedia.org/wiki/File:Louis_XIV_of_France.jpg ; https://en.wikipedia.org/wiki/Louis_XIV | ✅ |
| Версаль — осідок уряду з 6.05.1682; офіційною столицею лишався Париж | https://en.chateauversailles.fr/discover/history/key-dates/versailles-capital-kingdom-1682 ; https://en.wikipedia.org/wiki/Louis_XIV (знать у Версалі) | ✅ (після правки 2) |
| Генеральні штати: 1302; 1789 — перше скликання від 1614 р. | https://en.wikipedia.org/wiki/Estates_General_of_1789 ; facts/world №17 (w7s4) | ✅ |
| Кольбер — генеральний контролер фінансів 1665–1683, меркантилізм, мануфактури, мита (каральні 1667) | https://en.wikipedia.org/wiki/Colbertism ; https://en.wikipedia.org/wiki/Louis_XIV | ✅ |
| «Держава — це я» — апокриф: у реєстрах парламенту фрази немає, вперше в Лемонте 1818 р.; передсмертне «держава лишатиметься завжди» засвідчене | https://en.wikipedia.org/wiki/L%27%C3%89tat,_c%27est_moi ; https://www.larousse.fr/dictionnaires/francais/%c3%89tat/31318 («mot légendaire attribué à Louis XIV», «authenticité … controversée») ; laculturegenerale (403) — лише у видачі WebSearch: Вольтер 1751 описує епізод без фрази | ✅ |
| Lever (одяг уранці) | див. вище | ✅ |
| Стюарти: 24.03.1603 Яків VI → Яків I | https://en.wikipedia.org/wiki/Union_of_the_Crowns ; https://www.worldhistory.org/English_Civil_Wars/ | ✅ |
| Карл I: Personal Rule 1629–1640, війна 1642 | https://www.worldhistory.org/English_Civil_Wars/ ; https://en.wikipedia.org/wiki/Oliver_Cromwell | ✅ |
| Вирок «тиран…», страта 30.01.1649, скасування монархії 1649 | https://en.wikipedia.org/wiki/Execution_of_Charles_I ; https://www.worldhistory.org/English_Civil_Wars/ ; WebSearch: bcw-project.org.uk (вирок «tyrant, traitor, murderer and public enemy») | ✅ |
| Кромвель — полководець (не головнокомандувач до 1650 р.); лорд-протектор 16.12.1653, † 3.09.1658; реставрація 1660 | https://en.wikipedia.org/wiki/Oliver_Cromwell ; https://www.worldhistory.org/English_Civil_Wars/ | ✅ (після правки 3) |
| Портрет Кромвеля, Роберт Вокер, бл. 1649, NPG 536, PD | https://commons.wikimedia.org/wiki/File:Oliver_Cromwell_(NPG_536).png ; https://en.wikipedia.org/wiki/Oliver_Cromwell | ✅ |
| Яків II з 1685 р., католик; Вільям висадився 5.11.1688; Яків до Франції; Марія — донька Якова; Вільям — штатгальтер; Вільям і Марія — монархи за рішенням Конвенту | https://en.wikipedia.org/wiki/Glorious_Revolution ; https://avalon.law.yale.edu/17th_century/england.asp | ✅ (після правки 4) |
| «Білль про права»: податки, постійне військо в мирний час, вільні вибори, часте скликання парламенту; досі чинний | https://avalon.law.yale.edu/17th_century/england.asp ; https://www.legislation.gov.uk/aep/WillandMarSess2/1/2/contents («no known outstanding effects») | ✅ |
| Фото сувою: IWM TR 1142, 1939–1945, PD-UKGov; Білль 1688 (ст. ст.); шифр HL/PO/PU/1/… — серія оригінальних актів Палати лордів | https://commons.wikimedia.org/wiki/File:Historic_Documents_From_the_House_of_Lords_TR1142.jpg ; на фото видно текст «thirteenth day of February … 1688» | ✅ |
| 1689 − 1215 = 474; 1715 − 1643 = 72; 1799 − 1602 = 197; 1854 − 1641 = 213 | обчислення | ✅ |
| Аугсбурзький мир 1555 р. не визнав кальвіністів | w8s2 (верифікований розділ: «католицьку чи лютеранську») ; https://en.wikipedia.org/wiki/Peace_of_Westphalia (кальвінізм визнано лише 1648 р.) | ✅ |
| Празька дефенестрація 23.05.1618: намісники (Матвій — імператор і король Чехії), усі вижили | https://en.wikipedia.org/wiki/Defenestrations_of_Prague ; https://www.worldhistory.org/Thirty_Years'_War/ | ✅ |
| Густав II Адольф: 1630, † Лютцен 1632; Валленштейн; Данія, потім Швеція | https://www.worldhistory.org/Thirty_Years'_War/ ; https://en.wikipedia.org/wiki/Thirty_Years%27_War | ✅ |
| Франція у війні з 1635 р. разом зі Швецією; Рішельє — головний міністр 1624–1642; мотив — оточення Габсбургами | https://en.wikipedia.org/wiki/Cardinal_Richelieu ; https://en.wikipedia.org/wiki/Thirty_Years%27_War ; https://www.worldhistory.org/Thirty_Years'_War/ (1635–1648) | ✅ |
| Втрати населення ≈ 1/5 | див. вище | ✅ |
| Вестфальський мир 24.10.1648, Мюнстер і Оснабрюк; незалежність Сполучених провінцій і Швейцарії; визнання кальвінізму; землі Швеції й Франції; «вестфальський міф» | https://en.wikipedia.org/wiki/Peace_of_Westphalia ; https://www.worldhistory.org/Thirty_Years'_War/ | ✅ |
| Присяга 15.05.1648 у ратуші Мюнстера: голландці підносять руки, іспанці — рука на Біблії; іспанці присягали першими, сцену стиснуто; тер Борх — «presumably an eyewitness», автопортрет на лівому краї першого ряду; NG896 на тривалому зберіганні в Рейксмузеумі | https://www.nationalgallery.org.uk/paintings/gerard-ter-borch-the-ratification-of-the-treaty-of-munster ; https://en.wikipedia.org/wiki/Peace_of_M%C3%BCnster ; https://commons.wikimedia.org/wiki/File:Westfaelischer_Friede_in_Muenster_(Gerard_Terborch_1648).jpg | ✅ |
| Хмельницький — гетьман з початку 1648 р.; Жовті Води, травень 1648 р.; Національно-визвольна війна | facts/hist №108, №109, №9 ; https://en.wikipedia.org/wiki/Battle_of_Zhovti_Vody ; EoU (див. вище) | ✅ |
| Республіка: незалежність 1648 р. (Іспанія); Голландія — домінантна провінція | w8s3 (verified) ; https://en.wikipedia.org/wiki/Peace_of_M%C3%BCnster ; https://en.wikipedia.org/wiki/Holland | ✅ (після правки 5) |
| Моеdernegotie, балтійське зерно, Данциг — Амстердам | див. вище | ✅ |
| VOC 20.03.1602; монополія в Азії; війна, договори, фортеці, монета; Батавія 1619; Кап 1652; розпуск 31.12.1799; «одна з перших» акціонерних компаній | https://en.wikipedia.org/wiki/Dutch_East_India_Company ; https://www.worldhistory.org/Dutch_East_India_Company/ | ✅ |
| Біржа Гендріка де Кейзера: замовлено 1611 р., будова 1608–1611, відкрито 1611 р.; акції VOC | https://en.wikipedia.org/wiki/Amsterdam_Stock_Exchange ; https://beursvanberlage.com/visit/history/ | ✅ |
| Банда 1621 р.: > 90 % населення загинули, втекли, продані в рабство; до середини XIX ст. мускатний горіх ріс лише тут; плантації з рабами | https://en.wikipedia.org/wiki/Banda_Islands ; https://www.worldhistory.org/Dutch_East_India_Company/ | ✅ |
| Беркгейде, Двір Старої біржі, бл. 1670, Бойманс 1043 (OK), PD | https://commons.wikimedia.org/wiki/File:Berckheyde,_Job_Adriaensz.%E2%80%94Binnenplaats_van_de_Oude_Beurs_te_Amsterdam_na_1668%E2%80%94c.1670%E2%80%94Museum_Boijmans_Van_Beuningen%E2%80%941043_(OK)%E2%80%94WD_item_Q19924911.jpg | ✅ (одна сторінка на файл, за дорученням) |
| Сьогунат 1603; заборона християнства 1614 (у землях Токугава 1612); місіонери — португальці й іспанці; Сімабара 1637–1638; португальців вигнано 1639; голландці на Дедзімі з 1641; заборона виїзду й повернення під страхом смерті; «сакоку» — термін 1801 р.; кінець 1854 | https://en.wikipedia.org/wiki/Sakoku ; https://www.mlit.go.jp/tagengo-db/en/R1-00825.html (едикт 1614) ; https://countrystudies.us/japan/20.htm ; https://en.wikipedia.org/wiki/Dejima | ✅ (після правки 6) |
| Дедзіма — штучний острів у формі віяла, Нагасакі, міст до берега | https://en.wikipedia.org/wiki/Dejima ; зображення на екрані | ✅ |
| Дедзіма: майстерня Кавахари Кейґи, бл. 1833–1836, Рейксмузеум NG-1191, CC0 | https://commons.wikimedia.org/wiki/File:Het_eiland_Deshima,_NG-1191.jpg | ✅ |
| Маньчжури взяли Пекін 1644; Цін 1644–1912 | https://en.wikipedia.org/wiki/Qing_dynasty ; https://en.wikipedia.org/wiki/Canton_System | ✅ |
| Кансі 1684 — торгівля й митниці в чотирьох провінціях; 1757 — лише Кантон | https://en.wikipedia.org/wiki/Canton_System ; WebSearch: capasia.eu (Yue hai guan zhi), Cheng «The Qing opening to the ocean … 1684–1757» | ✅ |
| Лист Цяньлуна Георгу III 1793 р.: «Celestial Empire possesses all things…», «outside barbarians» | https://sourcebooks.web.fordham.edu/mod/1793qianlong.asp ; https://en.wikipedia.org/wiki/Canton_System (контекст) | ✅ |
| Богдихан | див. вище | ✅ (після правки 7) |
| Патель, Версаль 1668 (Commons: «circa 1668»), MV 765, PD | https://commons.wikimedia.org/wiki/File:Chateau_de_Versailles_1668_Pierre_Patel.jpg | ✅ |

Ліцензії: усі 7 файлів — PD/PDM, CC0, PD-UKGov. `credits` збігаються зі сторінками Commons: автор, дата, установа, шифр. D-027 виконано: кожен урок має ≥ 1 справжнє `img`.

## Опора завдань (D-019)
| Завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 #2 hyp | здогадка | ✅ |
| l1 #3 multi «знаки влади» | фото на тому ж екрані (корона, скіпетр, меч видно); `cap` відповіді не видає | ✅ |
| l1 #5 number 72 | дати в умові | ✅ |
| l1 #6 Версаль | останнє речення body | ✅ |
| l1 #8 sort Кольбер | екран «Кольбер і меркантилізм» | ✅ |
| l1 #9 «Держава — це я» | body | ✅ |
| l2 #2 hyp | здогадка | ✅ |
| l2 #4 чому повстав | екран 3 (1629–1640) | ✅ |
| l2 #6 Кромвель | портрет на екрані (лати, жезл) + l1 | ✅ |
| l2 #8 multi Білль | переказ на екрані | ✅ |
| l2 #9 474 | дати в умові | ✅ |
| l2 #10 sort Франція/Англія | l1 + екрани 7–8 | ✅ |
| l3 #2 hyp | здогадка | ✅ |
| l3 #4 sort причина/привід | визначення на екрані + екран 3 | ✅ |
| l3 #6 Рішельє | body + екран 5 (Габсбурги в імперії та Іспанії) | ✅ |
| l3 #8 картина | body (свідок, присяги поєднано) | ✅ |
| l3 #9 link 1648 | екран «Пригадай» (hist g8s3) + intro (15.05) | ✅ |
| l3 #10 multi Вестфалія | екран 7; дистрактори відкидаються через екран 7 (лютеранство визнано; держави «самі вирішують свої справи») і hint | ✅ |
| l4 #2 hyp | здогадка | ✅ |
| l4 #4 link зерно | w8s1 l5 + body | ✅ |
| l4 #6 акції | екран 5 + body (ризик) | ✅ |
| l4 #7 Банда | body | ✅ |
| l4 #8 197 | дати в умові | ✅ |
| l4 #9 sort | l1 + l4 | ✅ |
| l5 #2 hyp | здогадка | ✅ |
| l5 #4 віра | екран 3 («загроза своїй владі») + міркування | ✅ |
| l5 #6 картина | зображення (один міст із брамою, храму немає) | ✅ |
| l5 #7 213 | дати в умові | ✅ |
| l5 #9 лист | цитата на екрані | ✅ |
| l5 #10 sort | екрани 3, 5, 8 | ✅ |
| l6 Q1–Q5 | l1 #4; l2 #8; l3 #9; l4 #5; l5 #5 | ✅ |
| l6 Q6 order | дати 1602, 1618, 1641, 1648, 1682, 1689 — в уроках (і в hint) | ✅ |

Відповіді всіх завдань я розв'язав сам: усі `correct`/`answer` збігаються, дистрактори однозначні, `fbText` не суперечить відповіді.

## Педагогіка й стиль
Кожен урок починається з проблеми (джерело-зображення), далі здогадка `hyp` і теорія. `hint` відповідей не видають. Чутливі теми (страта Карла I, Банда) подано без натуралізму, Банду — очима підкорених (style/world.md). Імена — за glossary/world (Луї XIV, Рішельє, Вільям III Оранський). Глосарію бракує нових імен; їх запропонував автор (TERM в inbox).

## Для людини
Нічого блокувального немає. За бажання вчитель може перевірити дві речі:
1. Спрощення lever («подавати йому одяг») у l1.
2. «Монархію скасували» в l2: формально скасування оформлено в березні 1649 р., текст дати не називає.
