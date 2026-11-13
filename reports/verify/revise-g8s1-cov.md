# Верифікація revise-hist-g8s1-cov — g8s1 (l1 «Стрічка доби», нові l7, l8, фінал l5)

Верифікатор: verifier-revise-hist-g8s1-cov, 2026-11-12. Файл `content/hist/g8-g8s1.js`, `img/hist/g8s1/`.
Diff задачі рахувався від a630339 (останній коміт до claim) до HEAD: зміни розсипані по чужих комітах 75e98e1, a13363c, 5d257ec (WIP паралельних агентів), а коміт 577bdd4 містить лише задачу й inbox.

**Вердикт: прийнято. l1, l7, l8, l5 → `verified`.** Правок: 4 (дрібні, зроблені). Людині: нічого блокувального (див. «Рекомендовано»).

## Прогони
- `node tools/validate.mjs --section g8s1` — 0 помилок, 0 попереджень (до і після правок).
- `node tools/validate.mjs --diag dgh8` — 0 / 0.
- `node tools/euphony.mjs --subject hist --section g8s1` — у нових текстах лише назва «Ікона, вежа і проповідь» (зіставлені поняття, назва з плану — лишаю); решта — старі verified-уроки.
- `node tools/stats.mjs --subject hist` — l1, l7, l8, l5 без прапорців.
- Playtest не запускався (Python-playwright у контейнері відсутній) — лишається на CI (job browser).

## Опора dgh8 і прибрані завдання
- dgh8, тема `g8-lublin` (`cur`, lessons `["g8s1l1"]`): спирається на екран 3 l1 (Люблінська унія). У l1 diff — лише новий екран 7 `info` і 4-й пункт `learned`; екрани 1–6 і 8 не змінено. l2, l3, l4, l6 у diff не зачеплені.
- Прибрані з фіналу sort «Куди адресувати лист?» і order «Склади хроніку канцелярії» не є опорою жодного тесту: `grep g8s1l5` по content/ поза файлом розділу — 0; теми dgh8 посилаються лише на уроки, не на фінал.

## Факти
| Твердження | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| Ранньомодерна доба — від кін. XV ст. до 2-ї пол. / кін. XVIII ст.; межі умовні | Щупак та ін., «Всесвітня історія. 8 кл.», 2025, вступ: «Кінець XV — друга половина XVIII ст.» https://znayshov.com/FR/47482/vsesv_istor_8_Shupak_2025.pdf ; модельна програма (Гісем, 2023): «називає хронологічні межі Ранньомодерної доби», структура 8 кл. — від Люблінської унії до «Загибелі Козацької держави» https://znayshov.com/FR/45155/Mod_navch_pr_ist_Ukr_7_9_Gisem.pdf ; glossary/world «Епохи» | ✅ після правки (див. п. 1) |
| Козацька доба: козацтво постає кін. XV — поч. XVI ст., влади позбувається в 2-й пол. XVIII ст. | КТП 8 кл. (Гісем, Мартинюк) https://docs.google.com/document/d/1OaCH-5pukBN1Wwt-HvtTlw7_JLv0BRLCoKrGDMP168o/export?format=pdf ; програма (розділ V 8 кл. «Загибель Козацької держави») | ✅ |
| 1648, 1764 — віхи | facts/hist №9, №121 | ✅ (реєстр) |
| Воєводства Корони на українських землях: Руське (Львів), Белзьке, Подільське, Волинське, Брацлавське, Київське; воєвода на чолі | EoU Voivodeship https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CV%5CO%5CVoivodeship.htm ; https://uk.wikipedia.org/wiki/Воєводство ; https://uk.wikipedia.org/wiki/Руське_воєводство (центр — Львів, 1434–1772) | ✅ після правки «зокрема» (ще Підляське, Берестейське; Чернігівське з 1635) |
| Чернігово-Сіверщина з 1503 р. — у Московській державі | EoU Chernihiv region https://www.encyclopediaofukraine.com/pages%5CC%5CH%5CChernihivregion.htm («In the war of 1500–3 Lithuania lost the region to Muscovy»; Деулін 1618) ; https://en.wikipedia.org/wiki/Lithuanian–Muscovite_War_(1500–1503) (Chernigov, Novgorod-Seversk, Starodub) | ✅ |
| Крим — ханство під зверхністю Османів | facts/hist-2 №373 | ✅ (реєстр) |
| Кам'янець: укріплення замку перебудовано в сер. XVI ст. для захисту від татар; каньйон | https://uk.wikipedia.org/wiki/Кам'янець-Подільська_фортеця (Претвич, 1544; «для захисту від татар»; острів у каньйоні) ; EoU Renaissance https://www.encyclopediaofukraine.com/pages%5CR%5CE%5CRenaissance.htm («rebuilt castles in Kamianets-Podilskyi», 1541–4) | ✅ |
| Львів: рада — католики; вірмени — власне самоврядування (суд); євреї — кагали; русини без самоврядування, усунуті від міських справ | https://uk.wikipedia.org/wiki/Історія_Львова (рада «майже виключно» з католицької громади; вірменський війт / самоврядна громада; кагали; «ніяких автономних самоврядних громад русини у Львові не добилися») ; EoU Lviv https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CL%5CV%5CLviv.htm (Ukrainians «excluded from municipal affairs») ; вірменський суд у XVI ст. — https://zaxid.net/providna_rol_virmen_v_istoriyi_lvova_n1601164 , https://www.radiosvoboda.org/a/1293226.html (кодекс львівських вірмен Сигізмунда I) | ✅ |
| Литовські статути 1529, 1566, 1588; руською (канцелярською) мовою | EoU Lithuanian Statute https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CL%5CI%5CLithuanianStatute.htm ; https://uk.wikipedia.org/wiki/Литовські_статути (з посиланням на ЕІУ, Гурбик, т. 9) | ✅ |
| Третій статут 1588 р. завершив закріпачення | EoU («completed the enserfment of the peasants») ; Музиченко П. «Історія держави і права України» (2000), с. 111 — https://mego.info/історія-земельного-права-україни?page=3 («Статут 1588 року закріпачив селянство остаточно») ; uk.wiki | ✅ |
| Статут діяв на Волині й Київщині до 1840 р. | EoU (Right-Bank «until 1840») ; uk.wiki (Київська, Подільська, Волинська губ. — указ 25.06.1840); дія II статуту на Волині, Поділлі, Київщині після 1569 — Музиченко (mego.info) | ✅ |
| Титул Третього статуту: Вільно, друкарня Мамоничів, 1588; кирилиця; герб-вершник | Commons https://commons.wikimedia.org/wiki/File:Statut_Vialikaha_Kniastva_Litoŭskaha._Статут_Вялікага_Княства_Літоўскага_(1588)_(2).jpg (Бібліотека Вільнюського університету, Mamonich) + саме зображення («в друкарни дому Мамоничов», погоня в центрі) | ✅ |
| Ренесанс: після пожежі 1527 р. центр Львова відбудовували італійські майстри; наприкінці XVI ст. Львів — ренесансне місто | EoU Renaissance (Lviv «reconstructed in the Renaissance style after the fire of 1527»; італійські й швейцарські архітектори) ; EoU Lviv («By the end of the 16th century Lviv had the appearance of a Renaissance city»; пожежа 1527) ; https://zaxid.net/zolotiy_vik_lvova_naybilshogo_torgivelnogo_mista_shidnoyi_yevropi_n1608630 (пожежа 1527, італійські архітектори) | ✅ |
| Вежа Корнякта 1572–1578; Петро Барбон і Павло Римлянин; оплатив Костянтин Корнякт | facts/hist-2 №339 ; EoU Dormition Church https://www.encyclopediaofukraine.com/pages%5CD%5CO%5CDormitionChurchinLviv.htm («Designed and built by Pietro di Barbone and Paolo Romanus»; Korniakt «who financed it») ; https://uk.wikipedia.org/wiki/Вежа_Корнякта ; EoU Barbone https://www.encyclopediaofukraine.com/pages%5CB%5CA%5CBarbonePietrodi.htm | ✅ |
| Іконопис: на іконах краєвиди й будівлі, схожі на міські | EoU Renaissance («localized landscapes») ; EoU Fedusko («local architecture» на тлі ікони 1579) | ✅ |
| Федуско із Самбора, «Благовіщення», 1579, для церкви в Іваничах на Волині, Харківський художній музей | EoU https://www.encyclopediaofukraine.com/pages%5CF%5CE%5CFeduskoofSambir.htm ; https://www.icon.org.ua/?p=25787 (замовники Іваницькі, Іваничі, Харківський художній музей) ; https://uk.wikipedia.org/wiki/Федуско_(Самбір) ; Commons — категорія «Fine Arts Museum, Kharkiv» | ✅ |
| Реформація: Лютер 1517 | facts/world №49 | ✅ (реєстр) |
| Протестантами стала частина шляхти й магнатів; 2-а пол. XVI ст.; школа в Гощі | ЕІУ «Реформація» (Любащенко) http://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Reformatsiia («частина … укр. шляхтичів і навіть магнатів»; школи в Гощі) ; EoU Reformation https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CE%5CReformation.htm (після 1569; Kyselyn, Hoshcha) | ✅ |
| Контрреформація, головна сила — єзуїти; колегіуми Львів 1608, Луцьк, Вінниця | EoU Jesuits https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CJ%5CE%5CJesuits.htm («chief instrument of the Counter-Reformation»; Lviv 1608; Lutsk, Vinnytsia) ; https://zaxid.net/usi_mi_trohi_yezuyiti_n1474841 (1608; Луцьк, Вінниця) ; EoU Reformation | ✅ |
| У колегіумах єзуїтів навчалися й діти православної шляхти | https://zaxid.net/usi_mi_trohi_yezuyiti_n1474841 (православний шляхтич В. Загоровський закликав віддавати дітей до єзуїтів) ; **друге джерело знайдено:** Ткачук А. «Неправославна школа на Волині у XVI–XVII ст.» https://www.istvolyn.info/storage/uploads/8BNdUbQPNSO94wgQbYM8qX9LQbJa7Dj51TbhPn0Z.pdf («колегіуми, розраховані на молодь не лише католицького, але й православного віросповідання»; у Луцьку — старослов'янська, «щоб залучити … дітей з сімей православних»; «Більше половини усіх православних вихованців … стали … католиками») ; EoU Jesuits («sons of many Ukrainian noble families attended») | ✅ |
| Пересопницьке Євангеліє 1556–1561, на Волині, завершено в Пересопницькому монастирі; книжна українська мова; прикраси; у Києві; присяга президентів | facts/world №49 ; https://uk.wikipedia.org/wiki/Пересопницьке_Євангеліє (15.08.1556 — 29.08.1561, Двірець → Пересопниця; чорнило + кіновар; НБУВ; присяга з 1991) ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CE%5CPeresopnytsiaGospel.htm (ca 1556–61, vernacular, National Library, oath) | ✅ |
| Острозька Біблія 1581, «Тренос» 1610 | у розділі (l4, l6, verified); facts/hist-2 | ✅ |

## Зображення (D-027)
| Файл | Ліцензія (Commons, відкрито) | credits у файлі | Вердикт |
|---|---|---|---|
| kamianets-castle.jpg | Mikhail Petrische, own work, **CC BY-SA 4.0**, 25.03.2018, WLM 2020 https://commons.wikimedia.org/wiki/File:Panorama_of_Kamianets-Podilskyi_Castle_2018-03-25_182750.jpg | автор, CC BY-SA 4.0, URL — атрибуція повна | ✅ |
| lithuanian-statute-1588.jpg | PD-old, Unknown author, Бібліотека ВУ, завант. Kazimier Lachnovič | «Друкарня Мамоничів; завантажив Kazimier Lachnovič», суспільне надбання | ✅ |
| fedusko-annunciation-1579.jpg | PD-Art (PD-old-100-expired), Bulka UA | ✅ | ✅ |
| g6s9/peresopnytsia-page.jpg (запозичене) | PD, Unknown author, скан з Запаска 1995 https://commons.wikimedia.org/wiki/File:Сторінка_з_ініціалом_арк.291_ПЄ.jpg | ✅ (рядок додано в credits g8s1) | ✅ |

Зміст зображень звірено переглядом: титул статуту — кирилиця, погоня з мечем; сторінка Євангелія — розписаний ініціал «Р», чорний і червоний текст, портрета немає; ікона — вежі, мури, червоні дахи; замок — фото 2018 р. `cap` відповідей не видають (l7 е9, l8 е8 — відповідь треба побачити).

## Завдання (розв'язано самостійно, потім звірено з `correct`)
| Урок · екран | Моя відповідь = correct | Опора (D-019) | Вердикт |
|---|---|---|---|
| l1 е7 info | — | — | ✅ |
| l7 е2 choice hyp | — | здогадка, далі е3, е5 | ✅ |
| l7 е4 sort | Волинь, Галичина, Київщина → Корона; Чернігово-Сіверщина → Москва; Крим → ханство | е3 | ✅ |
| l7 е6 choice | 0 вірменська | е5: русини — православні, німці — католики, власна церква й самоврядування — вірмени | ✅ |
| l7 е7 choice | 2 | е5 (рада — католики, русини без самоврядування) + наслідок | ✅ |
| l7 е9 choice src | 1 кирилиця | фото (видно), е8 «руською мовою» | ✅ |
| l7 е10 multi | [1,2,3] | е3, е5, е8 | ✅ |
| l8 е2 choice hyp | — | здогадка, далі е3 | ✅ |
| l8 е4 number | 6 | роки в умові | ✅ |
| l8 е6 sort | Гоща, перехід шляхтича → Реформація; колегіум, єзуїти → Контрреформація | е5 | ✅ |
| l8 е8 choice src | 2 | фото + е7 «рукописне» | ✅ |
| l8 е9 choice | 1 | урок 4 (1581, Федоров) + е7 (1556–1561, рукопис) | ✅ |
| l8 е10 multi | [0,2,3] | е3, е5, е7/е9 | ✅ |
| l5 1 choice | 1 Річ Посполита | l1 е3 | ✅ |
| l5 2 choice | 2 | l2 | ✅ |
| l5 3 choice | 1 Берестейська | l3 | ✅ |
| l5 4 choice | 2 (1581) | l4 | ✅ |
| l5 5 choice | 0 Київське Богоявленське | l6 (варіанти переставлено, текст той самий) | ✅ |
| l5 6 sort (новий) | Чернігів → Москва; Кам'янець, Луцьк → Корона; Крим → ханство | l7 е3 (Подільське й Волинське воєводства; Поділля/Волинь названо в умові) | ✅ |
| l5 7 order (новий) | Пересопницьке → Люблінська унія → Острозька Біблія → «Тренос» | l8 е7 (1556–1561), l1 (1569), l4 (1581), l6 (1610) | ✅ |

Позиції правильних: l7 — 0 / 2 / 1; l8 — 2 / 1; фінал — 1 / 2 / 1 / 2 / 0. Підказки (`hint`) не відкидають усіх хибних варіантів: l7 е7 «Хто засідав у раді?», l7 е9 «Порівняй літери заголовка…» (лишає варіант про зображення), l8 е6, l8 е9 «Порівняй роки» (лишає «обидві надрукував Федоров»). `fbText` відповідям не суперечать. Факти вперше в `fbText` — немає (l5 6 fbText про Османів — уже в l7 е3).

## Правки (зроблені)
1. l1 е7 `note`: «Модельна програма 8 класу бере кінець XV — кінець XVIII ст.» — програма конкретних меж не називає (лише «називає хронологічні межі»), тобто атрибуція хибна → «Початок зазвичай ставлять наприкінці XV ст., а кінець — у другій половині чи наприкінці XVIII ст. Для України часто рахують від появи козацтва до втрати ним влади.»; додано посилання на підручник Щупака 2025 (вступ: «Кінець XV — друга половина XVIII ст.»).
2. l1 е7: «Віхи року:» → «Віхи доби:» (описка).
3. l7 е3: «Українськими були Руське…, … Київське воєводства» (звучить як повний перелік; бракує Підляського, Берестейського) → «На українських землях лежали, зокрема, …».
4. Статуси l1, l7, l8, l5 → `verified`; коментар-шапка файлу оновлено.

«У колегіумах єзуїтів навчалися й діти православної шляхти» — пом'якшувати не довелося: знайдено друге джерело (Ткачук, istvolyn.info).

## Рекомендовано (не блокує)
- Порядок уроків: l7 (суспільство XVI ст.) хронологічно ближчий до l2, l8 — до l3/l4; нинішня позиція (перед фіналом) — компроміс автора, щоб не ламати відсилки «урок 3/4/5». Рішення — куратору.
- Задача просила `link` на world для статутів — у world статутів немає; стисле пояснення в l7 е8 доречне.
- Euphony: «Ікона, вежа і проповідь» — назва з плану (зіставлені поняття).
