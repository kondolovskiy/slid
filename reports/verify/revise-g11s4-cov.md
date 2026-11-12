# Верифікація revise-hist-g11s4-cov (g11s4: нові l5, l6; фінал l4; eyebrow l2/l3)

Верифікатор: verifier-revise-hist-g11s4-cov, 2026-11-12. Автора не бачив; усі джерела відкриті в цій сесії.

## Прогони
- `node tools/validate.mjs --section g11s4` — 0 помилок, 4 попередження (sentenceWords < 7 у l1–l4, старі; l4 — 6.9).
- `node tools/validate.mjs --diag dgh11b` — 0 / 0.
- `node tools/euphony.mjs --subject hist --section g11s4` — у нових місцях лишилось «Європейський суд з прав людини» (усталена назва, не змінюю). Виправлено: «приватизацію й олігархів» → «приватизацію та олігархів» (фінал, п. 5, hint); у власних правках «силою й», «вартою й» → «і».
- `node tools/stats.mjs --subject hist` — l5 (7,0), l6 (7,7) без прапорців.
- playtest — Python-модуля playwright у контейнері немає (handoff), браузерний прогін — у CI.

## Git diff (база 9b91d51 → HEAD)
- **l1 (опора dgh11b `g11-money`) — не змінено** (жодного рядка в межах уроку).
- l2, l3 — лише `eyebrow` («Урок 3», «Урок 5»).
- Фінал l4: прибрано sort «Хто захищає голос?» (на нього не посилається жоден diag/pool — `grep g11s4l4|g11s4l2` по content/ порожній; l2 і далі покрито order-пунктом 4); нові пункти 3 і 5; переставлено варіанти multi — **ключ [0, 2, 3] відповідає новому порядку** (0 «Стабільні й підзвітні інституції», 2 «Мирна участь», 3 «Судова й виборча процедура»; 1 «Право приховувати рішення» — хибний); додано `pre`.

## Факти
| Твердження | Джерела (відкриті) | Вердикт |
|---|---|---|
| ≈1900 стратегічних боєголовок, третій арсенал світу | https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons ; https://www.brookings.edu/articles/ukraines-nuclear-nonproliferation-example (1900); https://kyivindependent.com/30-years-ago-ukraine-traded-nuclear-arms-for-security-assurances-a-decision-that-haunts-kyiv-today («third-largest») | ✅ |
| Тристороння заява 14.01.1994, Москва, Клінтон, Єльцин, Кравчук; боєголовки — Росії, компенсація й запевнення | armscontrol (вище); https://www.atomicarchive.com/resources/documents/deterrence/trilateral.html ; A/49/765 annex II («trilateral statement of 14 January 1994») | ✅ |
| Будапештський меморандум 5.12.1994, Україна, Росія, США, Британія; п. 2 (загроза силою), п. 3 (економічний примус); обов'язку військового захисту немає | https://treaties.un.org/Pages/showDetails.aspx?objid=0800000280401fbb ; https://documents.un.org/api/symbol/access?s=A/49/765&l=en&t=pdf (текст п. 1–6 прочитано) ; armscontrol | ✅ |
| Приєднання до ДНЯЗ 5.12.1994 (фінал, п. 3) | armscontrol; atomicarchive | ✅ |
| 1996 — останні боєголовки вивезено | armscontrol («By 1996…», 1.06.1996); brookings («June 1, 1996»); Kyiv Independent | ✅ |
| Кучма — президент 1994–2005 | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CU%5CKuchmaLeonid.htm ; https://www.kyivpost.com/uk/post/36046 (липень 1994 — 23.01.2005) | ✅ |
| Багатовекторність Кучми | https://zaxid.net/nebezpechni_manevri_n1417320 ; EoU Kuchma («alternating…») | ✅ |
| Рада Європи — 9.11.1995 | https://www.kmu.gov.ua/en/yevropejska-integraciya/spivrobitnictvo-z-radoyu-yevropi ; https://united24media.com/opinion/ukraine-and-the-council-of-europe-thirty-years-of-shared-values-and-renewed-purpose-13239 | ✅ |
| З 1997 р. — звернення до ЄСПЛ (ЄКПЛ ратиф. 17.07.1997, чинна 11.09.1997) | https://court.gov.ua/archive/2127856/ ; https://supreme.court.gov.ua/supreme/pres-centr/news/1427865/ (ратифікація 1997) | ✅ |
| Хартія про особливе партнерство з НАТО, 1997 | https://www.nato.int/cps/en/natohq/topics_37750.htm (9.07.1997, Мадрид); https://www.radiosvoboda.org/a/ukrayina-na-samitakh-nato-istoriya/33025312.html | ✅ |
| Договір про дружбу з Росією, 1997 | https://interfax.com.ua/news/political/528017.html ; https://www.radiosvoboda.org/a/29635445.html (31.05.1997) | ✅ |
| Угоди 1997 р.: флот у Севастополі до 2017 р. | https://www.unian.ua/politics/112328-ukrajina-nagadala-rosiji-pro-2017-rik.html ; https://zn.ua/ukr/internal/prosya_u_nischego_na_hleb,_bogatym_podaem_na_bednost.html (28.05.1997, 20 років) | ✅ |
| Тузла: 29.09.2003 дамба від Таманського п-ова без згоди України; прикордонники; у жовтні зупинено ≈100 м від острова; Тузла — Крим | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CU%5CTuzlaIslandconflict.htm («roughly 100 meters», border guards, жовтень, Крим); https://armyinform.com.ua/2020/09/29/tuzla-zazihannya-na-terytorialnu-czilisnist-yak-instrument-tysku-rosiyi-shhodo-ukrayiny/ (29.09.2003, від Тамані, 102 м, прикордонна застава); https://armyinform.com.ua/2022/09/29/u-czej-den-19-rokiv-tomu-rosiya-sprovokuvala-konflikt-shhodo-ostrova-tuzla/ | ✅ |
| EoU називає Тузлу першим порушенням Будапештського меморандуму (fbText) | EoU Tuzla (цитата; приписано джерелу, не стверджено від автора) | ✅ |
| НАТО, ст. 5 | https://www.nato.int/cps/en/natohq/topics_110496.htm ; facts/world | ✅ |
| Бухарест 3.04.2008: «стануть членами НАТО», ПДЧ не надано | https://www.nato.int/cps/en/natohq/official_texts_8443.htm (п. 23); Радіо Свобода 33025312 | ✅ |
| Позаблоковий статус 2010; скасування 23.12.2014 | nato.int topics_37750 (2010–2014); https://www.eurointegration.com.ua/articles/2014/12/23/7029117/ ; Радіо Свобода 33025312 | ✅ |
| «Криворіжсталь» — найбільший металургійний комбінат | https://www.aljazeera.com/news/2005/10/24/mittal-steel-wins-ukraine-auction ; https://www.voanews.com/amp/a-13-2005-10-24-voa11-66365012/546601.html | ✅ |
| 2004: ІМС Ахметова й Пінчука, ≈800 млн дол.; близькі до тодішньої влади | https://www.radiosvoboda.org/a/916693.html ; https://www.radiosvoboda.org/a/25009507.html ; https://www.brecorder.com/news/3051456/ukrainian-firm-wins-steel-mill-tender-for-801-million-20040615116788 (Pinchuk — «the president's son-in-law»); VOA («Kuchma allies»); Al Jazeera («insiders») | ✅ |
| Іноземні покупці не допущені умовами конкурсу | Радіо Свобода 916693; Business Recorder («only two Ukrainian companies met all the conditions», скарги на дискримінаційні умови) | ✅ |
| **«Іноземці пропонували близько 2,7 млрд доларів»** | Лише Радіо Свобода 916693; https://www.steelorbis.com/steel-news/latest-news/ukraine-to-re-sell-kryvorizhstal-152196.htm — «nearly twice» ($1,5 млрд); sostav.ru — $1,2 млрд | ⚠️ → **виправлено** на «пропонували значно більше» |
| 2005: суд визнав продаж незаконним; повторний відкритий аукціон у прямому ефірі; Mittal Steel, 4,8 млрд дол. | Al Jazeera; VOA; steelorbis (суд); Радіо Свобода 25009507 (Mittal, жовтень 2005) | ✅ |
| Закон 2021 р.: 4 ознаки олігарха, ≥3 | https://forbes.ua/inside/antioligarkhichniy-zakon-12072022-7116 (№1780, 23.09.2021); https://en.interfax.com.ua/news/general/777867.html (1780-IX, підписано 5.11.2021) | ✅ |
| Визначення «олігархічна система» (кілька ФПГ через депутатів, медіа, чиновників добиваються вигідних рішень) — коректне й нейтральне | https://www.chathamhouse.org/sites/default/files/2021-11/2021-07-01-ukraine-crony-capitalism-ukrainian-lough.pdf (укр. версія: «тісне зрощення інтересів великого бізнесу… та політичного класу», ФПГ, депутати, урядовці); https://mind.ua/publications/20247177-ukrayina-bilshe-ne-bude-klanovo-oligarhichnoyu-yak-zminitsya-konfiguraciya-grup-vplivu-pislya-vijni (ФПГ, партії, медіа, куплені чиновники) | ✅ (визначення робоче, без оцінок осіб) |
| 8.12.2004 пакетом: зміни до Конституції (№2222-IV) і до закону про вибори президента; коаліція формує уряд | https://www.radiosvoboda.org/a/923831.html ; https://www.unian.ua/politics/407803-ks-skasuvav-zmini-do-konstitutsiji-2004-roku.html ; звіт МСВ ОБСЄ https://cdn.osce.org/sites/default/files/f/documents/1/2/39081.pdf | ✅ |
| **«Зміни до закону про вибори дозволили повторити другий тур»** | ОБСЄ: повторне голосування призначила ЦВК 4.12 на виконання рішення Верховного Суду; зміни 8.12 мали «знизити можливість виборчих фальсифікацій» (так само l2: «Суд… зобов'язав провести повторне голосування») | ⚠️ → **виправлено**: «мали зменшити можливість фальсифікацій під час повторного голосування» |
| КС 2010: реформу визнано неконституційною через порушення процедури; поновлено редакцію 28.06.1996; президент призначає прем'єра за згодою ВР | unian 407803; https://www.unian.ua/politics/408051-skasuvannya-politreformi-scho-same-zminyuetsya-v-ukrajini.html | ✅ |
| Харківські угоди 21.04.2010, флот на 25 років після 2017 (до 2042), знижка до 100 дол./1000 м³; ратифікація 27.04 під протести | https://glavcom.ua/publications/4926-dogovir-janukovicha-i-medvedjeva-pro-bazuvannja-flotu-do-2042-roku.-tekst-dokumentu.html ; https://jurliga.ligazakon.net/news/23597_vr-ratifkuvala-ugodu-pro-chornomorskiy-flot-rf ; https://archive.kyivpost.com/article/content/ukraine-politics/new-lows-on-the-high-road-to-democracy-65150.html (яйця, димові шашки) | ✅ |
| Вирок Тимошенко 11.10.2011, 7 років | https://www.unian.ua/politics/553063-sudniy-den-timoshenko-yak-ogoloshuvali-virok.html ; https://ukrainianweek.com/Officially/78795 (прес-реліз ЄСПЛ, тло) | ✅ |
| ЄСПЛ 30.04.2013 — **тримання під вартою** свавільне (ст. 5, 18); сам вирок не оцінював | https://www.echrblog.com/2013/04/tymoshenko-judgment-former-ukranian.html ; https://ukrainianweek.com/Officially/78795 | ✅; **виправлено** варіант multi «Ув'язнення…, яке ЄСПЛ визнав свавільним» → «Тримання… під вартою…» і body (див. правки) |

## Зображення (D-027)
| Файл | Commons (відкрито) | Ліцензія | Вердикт |
|---|---|---|---|
| trilateral-statement-1994.jpg | https://commons.wikimedia.org/wiki/File:Presidents_after_signing_the_Trilateral_Statement,_Moscow,_1994.png | PD-USGov (Clinton Library, DTRA с. 112) | ✅; люди зліва направо збігаються з `cap` |
| tuzla-2011-landsat.jpg | https://commons.wikimedia.org/wiki/File:Tuzla,_Kerch_Strait,_near_natural_colors_satellite_image,_LandSat-5,_2011-08-30.jpg | PD (NASA, PD-USGov) | ✅; знімок 2011 р. після кризи — `cap` чесно датує |
| kharkiv-agreements-2010.jpg | https://commons.wikimedia.org/wiki/File:Dmitry_Medvedev_in_Kharkov_-_21_April_2010-10.jpeg (джерело kremlin.ru/news/7514) | CC BY 4.0 (і 3.0) Kremlin.ru — атрибуція «Kremlin.ru» є в `cap` і `credits` | ✅; Медведєв ліворуч, Янукович праворуч, як у `cap` |

## Завдання (розв'язано самостійно; D-019)
| Урок · екран | Моя відповідь = ключ | Звідки відповідь | Вердикт |
|---|---|---|---|
| l5 #2 hyp | 1 | hyp, не оцінюється | ✅ |
| l5 #4 multi | [1,3] | body екрана (п. 2–3) | ✅ |
| l5 #6 sort | НАТО, РЄ → Захід; флот, договір → Росія | екран 5 | ✅ |
| l5 #7 choice (Тузла) | 2 | body + знімок (дамба не перетинає протоку) | ✅ |
| l5 #9 choice | 0 | екрани 3–4 (немає обов'язку захисту) + 8 (ст. 5) | ✅ |
| l5 #10 order | 1994-01 → 1994-12 → 1995 → 1997 → 2003 → 2008 | дати на екранах 3, 5, 7, 8 | ✅ |
| l6 #2 hyp | 2 | hyp | ✅ |
| l6 #4 choice | 1 | екран 3 (відкриті торги) | ✅ |
| l6 #6 sort | 1,0,1,0 | екран 5 (визначення) | ✅ |
| l6 #8 choice | 0 | екран 7 (редакція 1996: президент за згодою ВР) | ✅ |
| l6 #9 choice (Харків) | 2 | body (до 2042) + l5 екран 5 (2017) | ✅ |
| l6 #10 multi | [1,3,4] | екран 3, body (ЄСПЛ), екран 6 (фінансування партії) | ✅ після правки варіанта 3 |
| l4 п. 1–2, 4, 6 | без змін | l1, l2, l3 (як у попередній верифікації) | ✅ |
| l4 п. 3 (меморандум) | 0 | **було:** правильний варіант — дослівний п. 1 («поважати незалежність, суверенітет та існуючі кордони»), якого в l5 немає (є лише в world w11s4l5) — опора лише відкиданням; **стало:** «Не погрожувати їй силою і не тиснути на її економіку» = п. 2–3 з l5 екрана 4 | ⚠️ → виправлено ✅ |
| l4 п. 5 (Криворіжсталь) | 1 | l6 екрани 1, 3 | ✅ |
| l4 п. 7 multi | [0,2,3] | l2–l3 | ✅ ключ відповідає переставленим варіантам |

Підказки: жодна не відкидає всі хибні варіанти, крім l4 п. 3 («Згадай, чого в меморандумі немає…» — прямо вказувала, що обидва дистрактори відсутні в документі) — **замінено** на «Згадай пункти меморандуму з уроку про зовнішню політику: від яких дій утримуються підписанти?».
Позиції правильних: l5 — 1, [1,3], 2, 0; l6 — 2, 1, 0, 2, [1,3,4]; фінал — 1, 0, 1, 2, [0,2,3] — різні, без серій.
`learned` l5, l6 — усе з екранів уроку.

## Педагогіка, вік, чутливе
- Проблема → гіпотеза → теорія → завдання; пояснення «чому» є.
- Живі особи (Кучма, Ахметов, Пінчук, Янукович, Медведєв, Тимошенко) — лише перевірені нейтральні факти (посада, покупка, підписання, вирок і рішення ЄСПЛ); «близьких до тодішньої влади» — фактичне формулювання з трьох джерел (зять президента, «Kuchma allies», «insiders»). Уточнено, що ЄСПЛ не оцінював вирок, — щоб не створювати хибного враження.
- Без лякаючого змісту; окупація Криму — нейтрально («тимчасово окупованого Росією»).
- Дублювання з world w11s4l5 (п. 1 меморандуму, Крим 2014) після правки фіналу немає.

## Правки (зроблено, мінімальні)
1. l6 екран 3: «Іноземні компанії пропонували близько 2,7 млрд доларів» → «пропонували значно більше» (джерела розходяться: 2,7 / ≈1,5 / 1,2 млрд).
2. l6 екран 7: «Зміни до закону про вибори дозволили повторити другий тур» → «мали зменшити можливість фальсифікацій під час повторного голосування» (повторне голосування призначив суд/ЦВК; узгоджено з l2).
3. l6 екран 10 body: «визнав її тримання під вартою свавільним» → «визнав свавільним її тримання під вартою під час суду. Сам вирок цей суд не оцінював.»
4. l6 екран 10 варіант 3: «Ув'язнення лідерки опозиції…» → «Тримання лідерки опозиції під вартою…»; fbText — «свавільне тримання опонентки під вартою».
5. l4 п. 3: правильний варіант → «Не погрожувати їй силою і не тиснути на її економіку»; hint замінено; fbText без «поважати кордони».
6. l4 п. 5 hint: «приватизацію й олігархів» → «приватизацію та олігархів» (§ 24).
7. Статуси l5, l6, l4 → `verified`; коментар у шапці.

## Рекомендовано (не блокує)
- dgh11b: cur-тема з g11s4l5 — у наступній редакції тесту з новим id (як у задачі).

## Вердикт
- g11s4l5 — **verified**; g11s4l6 — **verified** (після правок 1–4); g11s4l4 — **verified** (після правки 5); l1, l2, l3 — verified, зміст не змінено.
- Розділ придатний; задача → done.
