# Верифікація: revise-hist-g11s2-cov (content/hist/g11-g11s2.js)

Верифікатор: verifier-revise-hist-g11s2-cov · 2026-11-12 · скіл content-verify. Розділ не писав.
Обсяг: нові уроки g11s2l6–l9; g11s2l1 (+2 екрани); фінал g11s2l5 (7 завдань); g11s2l2–l4 (лише eyebrow).

**Вердикт по розділу: придатний.** l1, l6, l7, l8, l9, l5 → `verified` (l2–l4 лишаються verified). Правок: 11 (7 змістових, 1 підказка, 3 милозвучність) + статуси й коментар у шапці.

## Прогони
- `node tools/validate.mjs --section g11s2` — 0 помилок, 6 попереджень (sentenceWords у l1, l2–l5; довга цитата напису в l6 ек. 6 — це переклад напису на табличці, лишаю).
- `node tools/validate.mjs --diag dgh11b` — 0/0.
- `node tools/euphony.mjs --subject hist --section g11s2` — 13 → 10 відхилень; у l1, l6–l9 нуль (3 в l1 виправлено); решта — verified-текст l2–l5 (l4/l5: «Евакуація й публічне», «випливає з цих» тощо).
- `node tools/stats.mjs --subject hist` — l6–l9 без прапорців; l1 5,9 і l5 6,4 sentenceWords (короткі opts, як у verified l2–l4; STYLE-рядок автора в inbox).
- Плейтест: python-модуля playwright у контейнері немає — браузерний прогін лише в CI (job `browser`).

## Git і межі змін (база — 9b91d51, версія до задачі = scratch автора g11-g11s2.orig.js)
- l2, l3, l4: змінено **лише** `eyebrow` першого екрана («Урок 4/6/8»). Опори dgh11b (cur `g11-dissid` → g11s2l3, `g11-chnpp` → g11s2l4) не зачеплено.
- l1: два multi лише переставлено (зміст, підказки, fbText ті самі); додано ек. 9–10.
- l5: прибрано sort «Стіна причин» і multi «Головна теза» — dgh11b посилається на уроки, а не на екрани фіналу; опорами вони не є.
- **Увага оркестратору:** мої правки потрапили в чужі коміти (80572a0, 19fda9b, feb8e17), як і фінальний файл автора (d1b2b34) та зображення (26dcf12). Сам я не комітив.

## Факти (кожне джерело відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| Ждановщина з 1946, «низькопоклонство перед Заходом»; Рильського й Сосюру таврували, «буржуазний націоналізм» | https://www.encyclopediaofukraine.com/pages%5CZ%5CH%5CZhdanovAndrei.htm ; https://www.radiosvoboda.org/a/972620.html | ✅ |
| «Правда» 1951 засудила «Любіть Україну!» (2.07.1951) | https://www.ukrinform.ua/rubric-culture/3055251-volodimir-sosura-vona-v-sviti-edina-odna.html ; https://www.svoboda.org/a/26831669.html | ✅ |
| З 1949 — кампанія проти «безрідних космополітів», передусім проти євреїв (державний антисемітизм), до 1953 | https://en.wikipedia.org/wiki/Rootless_cosmopolitan ; https://www.radiosvoboda.org/a/972620.html ; https://ukrainianjewishencounter.org/en/struggle-cosmopolitanism-zhdanovshchyna-repressions-jews-ukrainians/ | ✅ |
| Договір СРСР–ЧСР про Закарпаття 29.06.1945 | https://ru.wikisource.org/wiki/Указ_Президиума_ВС_СССР_от_27.11.1945_о_ратификации_договора_между_СССР_и_Чехословацкой_Республикой_о_Закарпатской_Украине ; https://en.wikipedia.org/wiki/Zakarpattia_Oblast | ✅ |
| Обмін 1951: ≈ 480 км², УРСР — вугільні землі біля Сокаля (Белз), Польща — Устрики (Бойківщина) | https://en.wikipedia.org/wiki/1951_Polish%E2%80%93Soviet_territorial_exchange ; https://zaxid.net/doslidniki_opublikuvali_dokumenti_pro_deportatsiyu_ukrayintsiv_z_boykivshhini_v_1951_rotsi_n1514492 | ✅ |
| Понад 7 тис. (7 167) родин бойків → південь УРСР | https://zaxid.net/doslidniki_opublikuvali_dokumenti_pro_deportatsiyu_ukrayintsiv_z_boykivshhini_v_1951_rotsi_n1514492 ; https://www.radiosvoboda.org/a/news-aktsia-51-arkhiv/31104336.html | ✅ |
| Статут ООН: підписано 26.06.1945, чинний 24.10.1945; УРСР — серед 51 засновниці (рішення — у Москві) | https://www.un.org/en/about-us/history-of-the-un/san-francisco-conference ; https://www.unian.ua/society/1094183-mzs-vidkriv-dostup-do-arhivnih-dokumentiv-pro-rol-ukrajini-u-stvorenni-oon.html ; узгоджено з world g11-w11s1 (ек. «УРСР серед засновників ООН») | ✅ |
| «Обмін» 1944–1946: ≈ 480 тис. (482 тис.) українців | https://zn.ua/ukr/SOCIUM/rozvyazati_ostatochno__ukrayinske_pitannya_v_polschi.html ; https://en.wikipedia.org/wiki/Operation_Vistula | ✅ |
| «Вісла» з 28.04.1947; понад 140 тис. (140,5 тис. за генштабом; ≈ 141 тис.); північ і захід Польщі; привід — боротьба з УПА | ті самі два | ✅ (число з атрибуцією «понад») |
| Сенат Польщі засудив «Віслу» 1990 (3.08.1990) | https://en.wikipedia.org/wiki/Operation_Vistula ; https://zn.ua/ukr/SOCIUM/rozvyazati_ostatochno__ukrayinske_pitannya_v_polschi.html | ✅ |
| Табличка в Сяноку: текст (29.IV–1.VII.1947, 47562 особи), «Zjednoczenie Łemków, Sanok, 2017» | https://commons.wikimedia.org/wiki/File:Plaque_to_victims_of_Operation_Vistula_on_Sanok_train_station_(2017).jpg + саме фото (напис звірено) | ✅ |
| Переміщені особи; понад 200 тис. українців не повернулися; репатріація за Ялтою, часто силою; фільтрація й вироки; більшість виїхала до США, Канади та ін. | http://www.encyclopediaofukraine.com/pages%5CD%5CI%5CDisplacedpersons.htm ; https://www.nationalww2museum.org/war/articles/last-million-eastern-european-displaced-persons-postwar-germany ; https://en.wikipedia.org/wiki/Repatriation_of_Soviet_citizens_after_World_War_II | ✅ |
| Колективізація заходу: поч. 1948 < 10 % (9,6 %; кінець 1947 — 7,5 %), літо 1950 > 90 % (92,7 % / 93 %); виселення незгодних | http://www.encyclopediaofukraine.com/pages%5CC%5CO%5CCollectivization.htm ; https://cambridge.org/core/journals/nationalities-papers/article/soviet-collectivization-of-western-ukraine-19481949/281D529A517B525ED9AD3AA1D927EFD6 ; https://mego.info/171-%D0%B2%D1%96%D0%B4%D0%B1%D1%83%D0%B4%D0%BE%D0%B2%D0%B0?page=2 (посібник 2009) | ✅ |
| «Велика блокада» з 15.01.1946, гарнізон майже в кожному селі; вибори до ВР СРСР 10.02.1946 | https://lb.ua/blog/volodymyr_viatrovych/516784_avtoritarna_demokratiya_vid.html ; https://tsn.ua/analitika/radyanska-demokratiya-vibori-1946-roku.html | ✅ |
| Хасевич працював для підпілля | facts/hist-2 №245 | ✅ (реєстр) |
| «Захід» 21.10.1947, МДБ; майже 78 тис. (77 791 за довідкою МДБ 27.05.1948; 76 192 за Кругловим); серед них багато дітей; Сибір (Омськ) і Казахстан (Караганда) | https://zaxid.net/sbu_viklala_u_vidkritiy_dostup_dokumenti_pro_odnu_z_naymasovishih_deportatsiy_ukrayintsiv_n1439436 ; https://armyinform.com.ua/2021/10/21/21-zhovtnya-1947-roku-vidbulas-masova-deportacziya-meshkancziv-zahidnoyi-ukrayiny-do-sybiru/ | ✅ (атрибуція «за довідкою МДБ») |
| Шухевич загинув 5.03.1950 у Білогорщі під час операції МДБ | https://en.wikipedia.org/wiki/Roman_Shukhevych ; https://www.ukrinform.ua/rubric-society/3201947-5-berezna-pamatni-dati.html | ✅ (без версій обставин — коректно) |
| Арешт Сліпого й єпископів — квітень (11.04) 1945 | https://www.radiosvoboda.org/a/27600963.html ; https://www.encyclopediaofukraine.com/pages%5CL%5CV%5CLvivSoborof1946.htm ; https://www.radiosvoboda.org/a/24487150.html | ✅ |
| Псевдособор 8–10.03.1946, собор Св. Юра; підготувала держбезпека; священиків звозили під тиском; скасування Берестейської унії, «приєднання» до РПЦ; підпілля до кінця 1980-х | https://www.radiosvoboda.org/a/27600963.html ; https://www.radiosvoboda.org/a/news-psevdosobor-lviv-arkhivy/31143313.html ; https://www.encyclopediaofukraine.com/pages%5CL%5CV%5CLvivSoborof1946.htm | ✅ (див. правку 1) |
| Сліпий: 18 років ув'язнення й заслання; 1963 звільнено, до Рима | https://en.wikipedia.org/wiki/Josyf_Slipyj ; https://www.radiosvoboda.org/a/24487150.html | ✅ |
| Повстання: Норильськ 1953, Воркута 1953, Кенгір 1954 (Казахстан); багато українців-організаторів | https://zaxid.net/u_lvovi_vidznachili_rokovini_norilskogo_povstannya_n1285279 ; https://en.wikipedia.org/wiki/Kengir_uprising | ✅ |
| Раднаргоспи 1957–1965 замість міністерств | https://en.wikipedia.org/wiki/Sovnarkhoz ; https://skhid.kubg.edu.ua/article/view/19056 | ✅ |
| Цілина з 1954, Казахстан і Сибір; переселенці переважно з України й РРФСР | https://soviethistory.msu.edu/1954/virgin-lands-campaign/ ; https://en.wikipedia.org/wiki/Virgin_Lands_campaign | ✅ |
| Кукурудзяна кампанія — нав'язана згори, без урахування місцевих умов | https://www.acjournal.ru/jour/article/viewFile/2126/1691 (Лушин, 2022) ; https://www.svoboda.org/a/1809299.html | ✅ після правки 6 (загальне формулювання прийнятне, але «там, де вона погано родила» звужено до «без урахування місцевих умов», як у джерелах) |
| Указ Президії ВР СРСР 19.02.1954; спільне подання президій ВР РРФСР і УРСР; мотиви (спільність економіки, територіальна близькість, господарські й культурні зв'язки) | https://ru.wikisource.org/wiki/Указ_Президиума_ВС_СССР_от_19.02.1954_о_передаче_Крымской_области_из_состава_РСФСР_в_состав_УССР ; https://en.wikipedia.org/wiki/1954_transfer_of_Crimea ; https://www.radiosvoboda.org/a/khrushchov-peredacha-krymu-ukraini-versii/31111334.html | ✅ |
| Засідання Президії ЦК 25.01.1954 вів Маленков | https://rg.ru/2004/02/19/sssr.html (протокол № 49) ; https://www.radiosvoboda.org/a/29056184.html | ✅ |
| Кримських татар депортовано 1944 | https://en.wikipedia.org/wiki/1954_transfer_of_Crimea ; facts/hist №191 | ✅ |
| Корольов — уродженець Житомира; ракети супутника 1957 і Гагаріна 1961; ім'я відкрито після смерті 1966 | https://en.wikipedia.org/wiki/Sergei_Korolev ; https://zaxid.net/vorog_narodu_skonstruyuvav_kosmichniy_korabel_sergiy_korolov_n1577954 | ✅ |
| КБ Янгеля в Дніпропетровську з 1954 («Південне»), бойові ракети | https://osvita.ua/vnz/reports/astronom/22671/ ; https://en.wikipedia.org/wiki/Yuzhnoye_Design_Office | ✅ |
| Шкільна реформа 1958–1959: мову школи обирають батьки; українська в російських школах — за бажанням; російська — обов'язкова, потрібна для вишів; проти — Рильський і Бажан | https://zn.ua/ukr/HISTORY/mova-ne-na-chasi-317961_.html ; https://euromaidanpress.com/2017/02/22/a-short-guide-to-the-linguicide-of-the-ukrainian-language-infographics/ ; https://ukrainesolidaritycampaign.org/2023/08/06/russification-in-soviet-ukraine-after-stalin/ | ✅ |
| УРСС: кінець 1959, Львів(щина); законний шлях, вихід через референдум; арешт січень 1961; Лук'яненко — розстріл → 15 років | http://www.encyclopediaofukraine.com/pages%5CU%5CK%5CUkrainianWorkershDAandPeasantshDAUnion.htm ; https://uk.wikipedia.org/wiki/Українська_робітничо-селянська_спілка ; https://archive.khpg.org/en/1531000681 | ✅ |
| 1964 — усунення Хрущова, Брежнєв; «застій» | https://www.svoboda.org/a/vtoraya-oktyabrjskaya-revolyutsiya-konets-epohi-nikity-hruscheva/33069008.html ; https://www.business-gazeta.ru/article/650879 | ✅ |
| «Хрущовки»: масово з кінця 1950-х, п'ятиповерхові, малі кухні, окремі квартири замість комуналок і бараків | https://en.wikipedia.org/wiki/Khrushchevka ; https://uk.wikipedia.org/wiki/Хрущовка | ✅ |
| Шелест 1963–1972, обстоював господарство й культуру УРСР; усунутий у травні 1972; 1973 — звинувачення в «націоналізмі»; Щербицький 1972–1989, русифікація й переслідування | https://www.encyclopediaofukraine.com/pages%5CS%5CH%5CShelestPetro.htm ; https://www.encyclopediaofukraine.com/pages%5CS%5CH%5CShcherbytskyVolodymyr.htm ; https://en.wikipedia.org/wiki/1972%E2%80%931973_Ukrainian_purge | ✅ після правки 2 (було «критика за м'якість до інакодумців» — у джерелах немає; за Шелеста були й арешти 1965 р.) |
| 12.01.1972 — арешти в Києві та Львові (Світличний, Сверстюк, Стус, Чорновіл); День українського політв'язня з 1975 | https://www.radiosvoboda.org/a/24449106.html ; https://www.ukrinform.ua/rubric-society/3168560-12-sicna-pamatni-dati.html ; https://armyinform.com.ua/2022/01/12/dysydenty-shistdesyatnyky-miczni-parostky-vilnoyi-ukrayiny-j-vorogy-kryvavogo-srsr/ ; https://espreso.tv/suspilstvo-vyazni-politichnogo-teroru-istorii-ukrainskikh-politvyazniv | ✅ |
| Конституція УРСР 20.04.1978; ст. 6 — керівна роль КПРС; ст. 69 — право вільного виходу | https://www.encyclopediaofukraine.com/pages%5CC%5CO%5CConstitutionoftheUkrainianSovietSocialistRepublic.htm ; https://ru.wikisource.org/wiki/Конституция_Украинской_ССР_(1978) | ✅ після правки 3 (було «про Компартію України в Конституції не згадували» — для всього тексту не підтверджено; тепер «стаття називала саме КПРС») |
| Указ 5.09.1967 зняв «огульні» звинувачення з кримських татар, повернення фактично не дозволили | https://iccrimea.org/surgun/sovietdecree1967.html ; https://www.radiosvoboda.org/a/29559269.html | ✅ |
| Джемілєв — один з лідерів руху, кілька разів ув'язнений (6–7 арештів, > 15 років) | https://en.wikipedia.org/wiki/Mustafa_Dzhemilev ; https://osvita.ua/school/biography/94309/ | ✅ |
| «Відмовники»: відмова у виїзді до Ізраїлю, звільнення з роботи, переслідування (зокрема в Києві) | https://www.jewishvirtuallibrary.org/history-wing/reference-relations/other-20/refusniks ; https://chronicle-of-current-events.com/2016/03/29/23-6-the-jewish-movement-to-leave-for-israel/ | ✅ |
| Поетичне кіно: «Тіні забутих предків» (Параджанов), «Білий птах з чорною ознакою» (Іллєнко) — народна культура Карпат | https://en.wikipedia.org/wiki/Shadows_of_Forgotten_Ancestors ; https://en.wikipedia.org/wiki/The_White_Bird_Marked_with_Black ; https://uk.wikipedia.org/wiki/Українське_поетичне_кіно | ✅ |
| «Червона рута»: написана 1968/1969, прем'єра 13.09.1970; Івасюк загинув 1979, обставини не з'ясовано | https://en.wikipedia.org/wiki/Volodymyr_Ivasiuk ; https://zaxid.net/pisnya_bude_pomizh_nas_n1476878 | ✅ після правки 4 («(1970)» → «з 1970 р.»: рік написання в джерелах інший) |
| Приймаченко — самоучка, народна манера | https://en.wikipedia.org/wiki/Maria_Prymachenko ; https://lb.ua/culture/2017/04/12/363652_fantasticheskie_tvari_gde_iskat.html | ✅ |

Чутливі теми: голод 1946–1947, депортації, «Вісла», УПА, псевдособор, державний антисемітизм — без натуралізму; числа з атрибуцією («за довідкою МДБ», «понад»); обставини загибелі Шухевича й Івасюка не домислюються. Відповідає style/hist.md.

Рекомендації МОН: https://osvita.ua/school/method/97830/ — для 10–11 кл. 2026/27 чинні рекомендації 2024/25; окремих застережень щодо тем немає. Покриття — за звітом reports/research/coverage-research-hist-coverage-g10-11.md §4.2 B1–B6: виконано.

## Зображення (D-027)
| Файл | Урок | Ліцензія (відкрито) | Вердикт |
|---|---|---|---|
| vistula-plaque-sanok.jpg | l6 | Lowdown, CC BY-SA 3.0, 26.06.2017 — https://commons.wikimedia.org/wiki/File:Plaque_to_victims_of_Operation_Vistula_on_Sanok_train_station_(2017).jpg ; текстова табличка, Польща — свобода панорами | ✅ |
| st-george-lviv.jpg | l7 | Aeou, CC BY-SA 4.0, 2013 — https://commons.wikimedia.org/wiki/File:Cathedral_of_Saint_George,_Lviv_(01).jpg ; будова XVIII ст. (PD), сучасних скульптур у кадрі немає | ✅ |
| lukianenko-2016.jpg | l8 | Адміністрація Президента, CC BY 4.0 (president.gov.ua; умова — завантажено до 4.10.2022, на Commons з 24.08.2016) — https://commons.wikimedia.org/wiki/File:Shevchenko_National_Prize_award_ceremony_2016_Levko_Lukyanenko_cropped.jpg | ✅ (картина в тлі — побіжно; `cap` лише «2016 р.» — коректно) |
| dzhemilev-2014.jpg | l9 | Katarzyna Czerwińska / Kancelaria Senatu RP, CC BY-SA 3.0 PL, 3.06.2014, VRT-дозвіл — https://commons.wikimedia.org/wiki/File:Mustafa_Dzhemilev_Senate_of_Poland_01_(cropped).JPG | ✅ |
У кожному новому уроці ≥ 1 справжнє `img`; `credits` і `cap` є, атрибуція повна.

## Завдання: розв'язано самостійно, опора (D-019)
| Урок · екран | Моя відповідь = ключ | Звідки відповідь | Вердикт |
|---|---|---|---|
| l1 ек. 4 multi | [0,2,3] = | ек. 3 | ✅ |
| l1 ек. 10 choice «три ярлики» | 2 = | ек. 9 (за що таврували) | ✅ |
| l1 ек. 11 multi | [1,2,3] = | ек. 3–8 | ✅ |
| l6 ек. 2 | hyp | — | ✅ |
| l6 ек. 3 «хто втратив» | 0 = | цей екран (переселення 7 тис. родин) | ✅ (підказку виправлено — відкидала обидва хибні) |
| l6 ек. 4 order | = | 26.06 і 24.10 — тут; 29.06 і 1951 — ек. 3 | ✅ |
| l6 ек. 6 Сянок | 2 (≈ 1/3) = | 47 562 з фото; 140 тис. з ек. 5; 47 562/140 000 ≈ 0,34 | ✅ |
| l6 ек. 8 sort | = | ек. 7 (+ «остарбайтери» з g10-g11s1) | ✅ |
| l6 ек. 9 multi | [0,2,3] = | ек. 3, 5, 6 (напис «особи української національності»), 7 | ✅ |
| l7 ек. 3 multi | [1,2,3] = | ек. 2 (означення) | ✅ |
| l7 ек. 5 гарнізони | 2 = | міркування з ек. 4 («майже в кожному селі»; кордон — відкидається тим самим) | ✅ |
| l7 ек. 7 sort «Вісла»/«Захід» | = | l6 ек. 5 + l7 ек. 6 | ✅ |
| l7 ек. 9 псевдособор | 1 = | ек. 8 + означення на ек. 9 | ✅ після правки 1 |
| l7 ек. 10 order | = | ек. 4, 6, 8 | ✅ |
| l8 ек. 3 sort | = | intro (звільнення в'язнів), ек. 2 | ✅ |
| l8 ек. 5 Крим | 1 = | ек. 4 | ✅ |
| l8 ек. 6 Корольов/Янгель | 0 = | цей екран («проєктували й бойові ракети») | ✅ |
| l8 ек. 8 школа | 1 = | ек. 7 | ✅ |
| l8 ек. 9 УРСС vs УПА | 2 = | цей екран + l7 ек. 4 (УПА «воювали») | ✅ |
| l8 ек. 10 multi | [0,1,3] = | ек. 1, 2, 4, 7 | ✅ |
| l9 ек. 3 «хрущовки» | [1,3] = | цей екран | ✅ |
| l9 ек. 5 1972 | 0 = | ек. 4 + цей екран | ✅ |
| l9 ек. 7 Конституція | 2 = | ек. 6 + цей екран | ✅ |
| l9 ек. 9 культура | 1 = | ек. 4 (русифікація за Щербицького) | ✅ |
| l9 ек. 10 order | = | ек. 4–6, 9 | ✅ |
| l5 Експонат 1 (l1) | [0,1,3] = | l1 | ✅ |
| l5 Експонат 2 (l6 + l7) | [1,2,3] = | «Вісла» — l6 ек. 5; «Захід» — l7 ек. 6; неповерненці — l6 ек. 7; хибне «усі добровільні» — l6 ек. 5 («часто примусово») | ✅ опора для обох уроків |
| l5 Експонат 3 (l2), 5 (l3), 7 (l4) | 2 / order / 1 = | verified-уроки | ✅ |
| l5 Експонат 4 (l8) | 0 = | l8 ек. 4 | ✅ |
| l5 Експонат 6 (l9) | sort = | l9 ек. 2, 5, 6 | ✅ |

Позиції правильних: фінал [0,1,3], [1,2,3], 2, 0, order, sort, 1; у нових уроках choice — 0/1/2 перемішано. Жодне завдання фіналу не питає того, чого не було в розділі. `pre` у фіналі — по одному уроку (схема дозволяє лише один id; для експоната 2 — g11s2l6).

## Правки (зроблено)
1. l7 ек. 9, варіант 1: «Його підготувала держбезпека без єпископів» → «Його готувала держбезпека, а єпископи УГКЦ були під арештом» (на соборі головували Мельник і Пелвецький, висвячені на православних єпископів у лютому 1946 р. — EoU; «без єпископів» буквально хибне).
2. l9 ек. 4: «згодом розгорнула кампанію критики за м'якість до інакодумців» → «згодом звинуватила в «націоналізмі»»; l9 ек. 5 `fbText` узгоджено.
3. l9 ек. 6: «Про Компартію України в Конституції не згадували» → «Стаття називала саме КПРС, а не Компартію України».
4. l9 ек. 9: «Червона рута» (1970) → «з 1970 р.» (написана 1968/1969).
5. l8 ек. 2: «навіть там, де вона погано родила» → «майже всюди, без урахування місцевих умов»; l8 ек. 3 пункт sort узгоджено.
6. l6 ек. 3 `hint`: «Хто при цьому втратив дім?» (відкидав обидва хибні) → «Порівняй, що кожен із названих отримав і що втратив.»
7. Милозвучність l1: «Втрата» → «Утрата» (ек. 4), «виснаження й посуха» / «руйнування й посуха» → «та» (ек. 8, 11).
8. Статуси l1, l6, l7, l8, l9, l5 → `verified`; шапка файлу оновлена.

## Рекомендовано (не блокує)
- l1: два нові екрани (ждановщина) стоять між ланцюгом причин голоду й фінальним multi про голод; `why` і intro уроку про культуру не згадують. Варто або перенести їх після фіналу «Який підпис витримає перевірку?», або додати пів речення в `why`. Не змінював: перестановка змінює номери екранів.
- l2–l5: залишкові відхилення euphony (10) і sentenceWords < 7 — у verified-тексті; на style-sync.
- l6 ек. 6: довге речення (переклад напису) — свідомо, бо це цитата.

## Вердикт по уроках
| Урок | Статус |
|---|---|
| g11s2l1 | verified |
| g11s2l6 | verified |
| g11s2l7 | verified |
| g11s2l2 | verified (без змін, крім eyebrow) |
| g11s2l8 | verified |
| g11s2l3 | verified (без змін, крім eyebrow) |
| g11s2l9 | verified |
| g11s2l4 | verified (без змін, крім eyebrow) |
| g11s2l5 | verified |

Потребує людини: лише `approved` (учитель). Нових TQ немає.
