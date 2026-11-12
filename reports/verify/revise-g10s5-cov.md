# Верифікація: revise-hist-g10s5-cov (g10s5: новий g10s5l5, доповнення l1, l2; eyebrow l3; фінал)

Верифікатор: verifier-revise-g10s5-cov, 2026-11-12. Скіл content-verify. Базова версія для diff — 9b91d51 (останній коміт до правок автора); правки автора розкидано по WIP-комітах da50e82, adfdbf0, f1d4047 (коміт dded99d з назвою «g10s5 cov» насправді змінює лише g9-g9s5.js — оркестратору до відома).

## Вердикт
**Розділ придатний.** Усі 5 уроків (g10s5l1, l2, l5, l3, l4) → `verified`. 3 мінімальні правки (нижче). Задача → done.

## Перевірки
- `node tools/validate.mjs --section g10s5` — 0 помилок, 4 попередження (sentenceWords < 7 у l1–l4; було й до правок, l5 — без попереджень).
- `--diag dgh10`, `--diag dgh11b` — 0/0.
- `node tools/euphony.mjs --subject hist --section g10s5` — 20 відхилень, **усі в старому verified-тексті**; у нових текстах — 0.
- Профіль 10–11 кл. (style/profiles.json `_default` "10-11": screens [5; 12], maxReadWords [0; 90]): l1 — 12 екранів, max 84 слова — **у межах профілю**; stats лише позначає z-оцінку відносно сім'ї (z=2.1), не вихід за профіль. Скорочення не потрібне.
- Плейтест не запускався (Python-модуля playwright у контейнері немає) — CI, job browser.
- git diff 9b91d51..робоче дерево: l3 — лише eyebrow «Урок 3» → «Урок 4» (+ status); у l1 і l2 старі екрани не змінені (лише додано речення про УНП, 2 пункти sort, екрани; fbBad «в селі» → «у селі»). Опори dgh10 `g10-west` (multi: Польща / Чехословаччина / школи) і dgh11b `west` (Галичина — Польща; sort пацифікація, двомовні школи, Буковина, «Просвіта» в Ужгороді, автономія 1938), `oun` (ОУН — підпільна, хроніка) — на місці. id не змінено; w10s7 `requires: g10s5l3` — чинне.
- Зображення: усі 4 файли img/hist/g10s5/ використані; новий uvu-prague-1926.jpg 330×220 (на Commons 500×333).

## Факти: твердження → джерела → вердикт
| Твердження (урок, екран) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Осадництво з 1920-х рр. (закон 17.12.1920), Волинь і Галичина; осадники — колишні вояки польської армії та цивільні переселенці; мета — опора польської влади (l1 [5]) | https://uk.wikipedia.org/wiki/Осадники ; https://en.wikipedia.org/wiki/Osadnik ; https://ukrainianweek.com/History/214203 | ✅ |
| «Українці бачили в осадництві частину полонізації, стосунки загострювалися» (fbText l1 [5]) | Тиждень: колонізація як «перший крок» полонізації (Дмовський — «колонізувати й полонізувати») https://ukrainianweek.com/History/214203 ; uk.wiki «Осадники» — мета зміцнити владу й послабити економічну базу українського руху, українські кооперативи викуповували землю; en.wiki «Volhynia Experiment» (через пошук) — прибуття осадників посилило антипольські настрої. Формулювання подано як сприйняття українців, не як оцінку автора — нейтральне | ✅ |
| УНП (Буковина) боронила права українців, вимагала української мови в школах і церквах; без року (1926/1927/1928 у джерелах) (l1 [8], sort) | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianNationalparty.htm ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CA%5CZalozetsky6SasVolodymyr.htm ; https://en.wikipedia.org/wiki/Ukrainian_National_Party | ✅ |
| Донцов: жив у Львові (з 1922), редагував журнали (ЛНВ, «Заграва», «Вістник»), 1926 — «Націоналізм» (l2 [6]) | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CO%5CDontsovDmytro.htm ; https://uk.wikipedia.org/wiki/Дмитро_Донцов ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CN%5CA%5CNationalism.htm | ✅ |
| Ідеї: нація понад усе, людина має служити нації, примат волі й дії, відкидання демократії, активна (ініціативна) меншість силою веде народ; «історики називають інтегральним націоналізмом»; на них спиралася ОУН (l2 [6], outro) | EoU Dontsov («antidemocratic integral nationalism», «his theses were largely the basis for the OUN's revolutionary underground activity»); EoU Nationalism («primacy of will over reason, action over thought», «complete and unqualified submission», «rejection of the democratic … principles»); uk.wiki «творче насильство ініціативної меншості». Переказ нейтральний: опис поглядів, без оцінки автора; МОН 2026/27 (https://osvita.ua/school/metod-rekom/97830/ , PDF https://osvita.ua/doc/files/news/978/97830/Hromad_2026.pdf) вимагає аналізу й порівняння джерел, «формулювання суджень» — урок цьому відповідає | ✅ (після правки 1) |
| «Просвіта» — понад 3 тис. читалень у 1930-х; бібліотеки, хори, театральні гуртки (l5 [2]) | EoU Prosvita (3 075 читалень 1939; 3 209 бібліотек 1936) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProsvita.htm ; uk.wiki (3 046 — 1934; 1936: 3 210 читалень, 2 185 театральних гуртків, 1 115 хорів) https://uk.wikipedia.org/wiki/Просвіта_(товариство) | ✅ |
| «Пласт» — Львів, перед Першою світовою (1911/1912); 1930 заборонено в Галичині, підпілля (l5 [2]) | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CL%5CPlastUkrainianYouthAssociation.htm ; https://uk.wikipedia.org/wiki/Пласт_(організація) ; facts/hist №183 (делегалізація 24.09.1930) | ✅ |
| Шептицький наприкінці 1920-х рр. заснував у Львові Богословську академію (l5 [2]) | EoU (1928) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CR%5CGreekCatholicTheologicalAcademy.htm ; Хоркава (статут 28.02.1928, відкриття 1929) https://eprints.oa.edu.ua/4901/1/10.pdf (через пошук) | ✅ |
| «Маслосоюз»: заснований на початку XX ст. у Стрию (1904/1905) стрийською «Просвітою»; центр у Львові з 1927; 1938 — 136 районних молочарень, 205 тис. господарств; експорт з другої половини 1920-х (1926/1927) (l5 [4], фінал З4) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CM%5CA%5CMaslosoiuzProvincialDairyUnion.htm ; Forgotten Galicia https://forgottengalicia.com/?p=9420 ; uk.wiki https://uk.wikipedia.org/wiki/Маслосоюз (1927 — Львів; 1926 — експорт) | ✅ |
| Тисячі вояків УНР на чужині (l5 intro) | табори інтернованих у Польщі 1921 (Вадовиці 3 821, Каліш 3 099 …) — Срібняк, https://elibrary.kubg.edu.ua/41642/1/I_Sribnyak_N_Yakovenko_V_Matviyenko_E_2022_2%2838%29_IFF.pdf (через пошук); EoU Government-in-exile | ✅ |
| Уряд УНР в екзилі після 1920 р. — Польща (Тарнів, Варшава), Франція (Париж) [ще й Прага] | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CO%5CGovernment6in6exileoftheUkrainianNationalRepublic.htm ; https://en.wikipedia.org/wiki/President_of_Ukraine_(in_exile) | ✅ |
| Петлюра в Парижі з осені 1924 р. (EoU «late 1924», РС «у жовтні 1924») | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CE%5CPetliuraSymon.htm ; https://www.radiosvoboda.org/a/1736336.html | ✅ (після правки 2; було «з кінця 1924») |
| 25 травня 1926 р. убитий у Парижі | EoU Petliura; https://uk.wikipedia.org/wiki/Симон_Петлюра | ✅ |
| Після Петлюри — А. Лівицький | EoU Government-in-exile (1926–54); https://www.radiosvoboda.org/a/unr-nezalezhna-ukrayina-vozyednannya/31999704.html | ✅ |
| 1992 — М. Плав'юк передав повноваження Л. Кравчуку | en.wiki President of Ukraine (in exile) (22.08.1992); РС 31999704 (серпень 1992, Маріїнський палац); EoU | ✅ |
| Липинський — історик; «Листи до братів-хліборобів» (1926); спадковий гетьман; батьківщина для всіх, хто живе в Україні | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CL%5CY%5CLypynskyViacheslav.htm ; https://uk.wikipedia.org/wiki/Липинський_В'ячеслав_Казимирович | ✅ |
| УВУ — 17.01.1921, Відень; восени 1921 — Прага; підтримка Чехословаччини | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianFreeUniversity.htm ; https://uk.wikipedia.org/wiki/Український_вільний_університет | ✅ |
| Фото «Професори УВУ. Прага, 1926 р.»: ліцензія | https://commons.wikimedia.org/wiki/File:Група_професорів_Українського_Вільного_Університету,_1926.jpg — анонімне фото 1926, PD-Ukraine (опубл. до 1956), PD-US (опубл. до 1931), також CC BY-SA 3.0 і PD Mark; опис і підпис «УВУ в Празі, 1926 р.» з переліком осіб; джерела опису — EoU UFU, УІНП. Підстава PD — анонімність + давність (70 р. від публікації); доказу дати першої публікації на сторінці немає — прийнятно за практикою D-027 (подвійна ліцензія CC BY-SA 3.0 дає запасну підставу; credits її згадують) | ✅ |

## Завдання: розв'язок → звідки відповідь (D-019) → вердикт
| Урок, екран | Мій розв'язок | Опора | Вердикт |
|---|---|---|---|
| l1 [5] осадництво (choice) | «наступ на свою землю…» (2) | body: опора влади, переселенці, землі потребували місцеві селяни + полонізація з [4]; міркування | ✅ (correct 2) |
| l1 [10] sort (+2 пункти) | осадники — Польща; УНП — Румунія | [5], [8] | ✅ |
| l2 [7] «Чий це погляд?» | 3-й варіант (2) | [6] Донцов; варіант 2 — «органічна праця» з [3]–[4] | ✅ (correct 2) |
| l5 [1] здогадка | — | hyp: true | ✅ |
| l5 [3] «Куди піти 1935 р.?» | читальня «Просвіти» (2) | [2]: бібліотеки, хори; «Пласт» заборонено 1930; гімназія — польська (l1 [4]) | ✅ |
| l5 [5] молочарня | 0 | [4]: 205 тис. господарств, експорт; кооператив ведуть самі | ✅ |
| l5 [7] Липинський | 1 (спадкова влада) | body екрана + [6] «республіка» | ✅ |
| l5 [8] multi фото УВУ | [1, 3] | `cap` (місто, рік) і зображення (одяг); студентів і настрою джерело не дає | ✅ (cap не видає відповіді — питання про тип інформації) |
| l5 [9] order | УВУ→Петлюра→Липинський→«Пласт»→1992 | дати на [2], [6], [7], [8] | ✅ |
| l4 З4 «Маслосоюз» | 1 | l5 [4] (1927 Львів, 205 тис., експорт); `pre: g10s5l5` | ✅ |
| l4 інші | не змінені, лише eyebrow / «урок 4» у fbBad | — | ✅ |

Позиції правильних: l1 choice 2·0·1·2; l2 0·2·1; l5 2·0·1·[1,3]; фінал 2·0·1·(order)·1·[0,1,3] — без довгих повторів. Підказки не відкидають усі хибні варіанти (l5 [9] hint дає послідовність років 1921→…→1992, але учневі лишається зіставити події з роками — прийнятно; за бажанням послабити).

## Правки (зроблено, 3)
1. l2 [7] варіант «Окрема людина нічого не важить поруч із нацією…» → «Окрема людина має цілком підкоритися нації…» — ближче до джерел (EoU: «complete and unqualified submission»), без перебільшення.
2. l5 [6] «Петлюра з кінця 1924 р.» → «з осені 1924 р.» (РС: жовтень 1924; EoU: late 1924).
3. l5 [9] fbText «Кінець 1924» → «Осінь 1924».
+ статуси 5 уроків → verified; рядок статусу в коментарі-заголовку.

## Рекомендовано (не блокує)
- Фото УВУ замінити на 500 px (як на Commons), коли Commons дасть завантажити.
- l5 [6] «у Польщі та Франції» — уряд діяв і в Празі (EoU); не хибно, можна доповнити.
- Оркестратору: коміт dded99d має назву «g10s5 cov», а змінює g9-g9s5.js; зміни g10s5 — у WIP-комітах.

## Що потребує людини
Нічого блокувального. Статус `approved` — за вчителем.
