# Верифікація: revise-hist-g11s1-cov (розділ g11s1, `content/hist/g10-g11s1.js`)

Верифікатор: verifier-revise-hist-g11s1-cov · 2026-11-12 · скіл content-verify. Розділ не писав.

**Вердикт:** розділ придатний. Нові l7, l8, l9, l10, змінені l3 і boss → `verified`. 14 мінімальних правок змісту (13 — точність чи формулювання з опорою на джерела, 1 — неоднозначний дистрактор) + статуси. Критичних помилок (❌ факт, неправильна відповідь, завдання без опори) не знайдено.
**Обов'язково до вчителя:** **l9 «Трагедія двох народів» (Волинь) — TQ-085** (уже в docs/teacher-questions.md). Деталі — у розділі «Людині».

## Обсяг і механіка
- Порядок у масиві: l1, l7, l8, l2, l3, l4, l9, l10, l5, l6, boss ✓.
- `git diff 9b91d51..HEAD` + власний порівнювач (JSON уроку без eyebrow «Урок N»): l1, l2, l4, l5, l6 — **без змін, крім eyebrow** ✓. Поля розділу (id, grade, weeks, title, badges) не змінено ✓.
- Тести рівня: `diag-g10.js` і `diag-g11.js` востаннє змінювала задача refine-hist-diag-g10-g11 (11.11), ця задача їх не чіпала ✓. dgh10 посилається на g11s1 лише в `for` pre-тем.
- `validate --section g11s1`: 0 помилок, 2 попередження (sentenceWords l1, l2 — старі verified). `--diag dgh10`, `--diag dgh11b`: 0/0. `euphony --section g11s1`: у нових і змінених текстах лишилося тільки «назвати і злочин» (l3, парне «і… і»), решта — старі verified-уроки. `stats`: l3, l7–l10 без прапорців; boss — sentenceWords 8 (z = 2,2 для сім'ї, у межах профілю [7; 15]).
- Плейтест локально неможливий (немає Python-модуля playwright) → CI, job browser.
- Рекомендації МОН 2026/27 (https://osvita.ua/legislation/Ser_osv/97830/ , PDF https://osvita.ua/doc/files/news/978/97830/Hromad_2026.pdf): окремих формулювань про Волинь, УПА, Голокост чи 1939–1941 немає. Є загальні вимоги: джерелознавчий аналіз, критичне мислення, україноцентричний підхід, ресурси УІНП і avr.org.ua. Для 10–11 кл. чинні рекомендації 2024/25. Розділ цим вимогам відповідає: майже кожне завдання — на роботу з джерелом або на межі висновку.
- Узгодженість зі світовою історією: w10s7 (ультиматум Румунії, «Буковини в протоколі не було», Північна Буковина й частина Бессарабії до УРСР) і w11s1 (УРСР серед засновників ООН без самостійної зовнішньої політики) — без суперечностей.

## Факти: твердження → джерела → вердикт
| # | Твердження (урок) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|---|
| 1 | Вибори 22.10.1939, як правило один кандидат (l7) | https://uk.wikipedia.org/wiki/Народні_збори_Західної_України ; https://en.wikipedia.org/wiki/Elections_to_the_People%27s_Assemblies_of_Western_Ukraine_and_Western_Belorussia («not possible to vote for anybody else») ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CE%5CPeoplesAssemblyofWesternUkraine.htm («fixed, strictly controlled») | ✅ |
| 2 | Збори у Львові 26–28.10.1939; радянська влада, приєднання; конфіскація поміщицьких і монастирських земель; націоналізація банків і великої промисловості (l7) | uk.wiki (там само, 4 декларації) ; en.wiki Elections… (конфіскація, націоналізація) ; EoU (дати, приєднання) | ✅ |
| 3 | Ультиматум 26.06.1940, вступ 28.06; Пн. Буковина, Хотинщина, південь Бессарабії — до УРСР; Буковини в протоколі не було (l7) | https://en.wikipedia.org/wiki/Soviet_occupation_of_Bessarabia_and_Northern_Bukovina ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBukovyna.htm ; https://en.wikipedia.org/wiki/Molotov–Ribbentrop_Pact (Bukovina «went beyond the Soviet sphere») | ✅ |
| 4 | Партії «розпустила нова влада» (l7) | EoU UNDO https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianNationalDemocraticAlliance.htm («forced to cease all activity») ; https://uk.wikipedia.org/wiki/Українське_національно-демократичне_об'єднання (провід сам оголосив про припинення 25.09.1939) | ⚠ → виправлено: «Під тиском нової влади українські партії припинили діяльність» |
| 5 | Мережу «Просвіти» ліквідовано (l7) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProsvita.htm («entire network was dismantled») ; УІНП 2021 (див. №7: монополія партії, репресії) | ✅ |
| 6 | Кого арештовував НКВС: «священників, підприємців» (l7) | УІНП 2021 (див. №7): «службовців, політичних діячів, землевласників, військових, колоністів» ; uk.wiki УНДО (арешти лідерів 1940) | ⚠ → виправлено на «політиків, урядовців, офіцерів, землевласників» |
| 7 | Чотири масові депортації II.1940–VI.1941; осадники, сім'ї заарештованих, біженці; Північ, Сибір, Казахстан; без суду (l7, l8) | https://en.wikipedia.org/wiki/Soviet_repressions_of_Polish_citizens_(1939–1946) (4 хвилі, дати, напрямки) ; https://archive.khpg.org/1266368550 (осадники → сім'ї репресованих → «біженці»; Північ, Казахстан) | ✅ |
| 8 | Розстріли в'язнів, червень 1941, Львів, Луцьк, Самбір, Дрогобич; число (l7) | **УІНП**, інформаційні матеріали до 80-х роковин, 2021: «понад 24 тисячі», міста — https://ndar.lova.gov.ua/sites/default/files/dep_activity/30_5543_dodatok.pdf ; «between 10,000 and 40,000» (J. Popowycz, 2021) — https://www.nationalww2museum.org/war/articles/1941-nkvd-prison-massacres-western-ukraine ; https://en.wikipedia.org/wiki/NKVD_prisoner_massacres (≈ 9 тис. в УРСР — Berkhoff; 20–30 тис. — Piotrowski) ; https://www.radiosvoboda.org/a/25023814.html («понад 20 тисяч галичан», «кількість… невідома») | ✅ діапазон; ⚠ атрибуція → додано «УІНП пише про понад 24 тис. страчених, оцінки інших істориків — від 10 до 40 тис.» |
| 9 | Львів зайнято 30.06.1941 (l7) | https://encyclopedia.ushmm.org/content/en/article/the-lwow-pogrom-of-july-1-1941 ; https://en.wikipedia.org/wiki/Battle_of_Kyiv_(1941) («On 30 June, Lvov was captured») | ✅ |
| 10 | Фото: Городоцька, «Бригідки», 2.07.1941, Hübner, Bild 146-1979-039-03, CC BY-SA 3.0 DE; праворуч будівля, ліворуч удалині вежа св. Анни; мотоцикл із солдатами (l7) | Commons https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_146-1979-039-03,_Lemberg,_NKWD-Gefängnis.jpg (архівний підпис «G.P.U.-Gefängnis Lemberg 2.7.41»; опис: Horodotska str., St. Ann's Church) ; сам файл переглянуто | ✅ без жертв на знімку |
| 11 | Київський «котел» — вересень 1941, на схід від Києва, сотні тисяч загиблих і полонених (l8) | en.wiki Battle of Kyiv (1941) (616 304 убитих і зниклих, 480 тис. полонених) ; https://armyinform.com.ua/2021/07/11/80-rokiv-tomu-rozpochalas-kyyivska-oboronna-operacziya/ (Лохвиця; німецька цифра 665 тис.) | ✅ |
| 12 | Евакуація: понад 550 великих підприємств, ≈ 3,5 млн осіб; хто виїжджав (l8) | https://mail.ucrdc.org/HI-EVACUATION_OF_SOVIET_UKRAINE.html (550 large enterprises; > 3 млн) ; https://www.radiosvoboda.org/a/ukrayintsi-natsyst-sʹka-okupatsiya-evakuatsiya/31941813.html (≈ 3,5 млн; фахівці, еліта; усього ≈ 1 500 підприємств) | ✅ |
| 13 | Сталін 3.07.1941: невивезене цінне майно, зерно, пальне знищувати (l8) | https://www.marxists.org/reference/archive/stalin/works/1941/07/03.htm ; https://www.radiosvoboda.org/a/25077771.html (наказ Сталіна) | ✅ |
| 14 | Підрив Дніпрогесу 18.08.1941; загиблих «тисячі», точного числа немає (l8) | https://www.rferl.org/a/ukraine-dam-destruction-flood-1941-world-war-ii-german-invasion/32448719.html (Лініков: «probably thousands»; 80–100 тис. — вигадка) ; https://www.radiosvoboda.org/a/25077771.html («близько 20-ї години… 18 серпня 1941») | ✅ |
| 15 | Хрещатик: радянські міни, вибухи з 24.09.1941, «пожежі до 29 вересня»; майже вся забудова; пропаганда звинувачувала німців; нацисти — привід для вбивства євреїв (l8) | https://encyclopedia.ushmm.org/content/en/article/kiev-and-babi-yar ; https://www.radiosvoboda.org/a/1876152.html (24–29.09) ; https://espreso.tv/suspilstvo-pekelna-osin-u-kievi-abo-yak-zruynuvali-khreshchatik-za-kilka-dniv-u-1941-rotsi (вибухи 24–28.09, пожежу загасили через два тижні) | ✅; кінцева дата розходиться → «Вибухи й пожежі тривали кілька днів» |
| 16 | Фото Bild 183-B12190, Kraayvanger, PK, вересень 1941; підпис «Riesenbrand… sowjetischen Höllenmaschine»; CC BY-SA 3.0 DE (l8) | Commons https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-B12190,_Kiew,_Brand_in_der_Hauptstraße.jpg ; файл переглянуто | ✅ |
| 17 | Німці Криму ≈ 60 тис., серпень 1941; восени — з неокупованих областей УРСР до Казахстану й Сибіру (l8) | https://deportation.org.ua/forcible-deportations-of-the-ukrainian-germans-in-1935-1941/ (≈ 60 тис.; постанова 31.08; Казахстан, Алтай) ; https://en.wikipedia.org/wiki/Crimean_Germans (з 15.08; «as many as 60,000») | ✅ |
| 18 | Праведники: критерії (ризик, без вигоди); «тисячі з України» (l3) | https://www.kmu.gov.ua/news/komentar-mzs-ukrainy-do-dnia-pamiati-ukraintsiv-iaki-riatuvaly-ievreiv-pid-chas-druhoi-svitovoi-viiny (2 691 на 1.01.2022; ризик) ; https://en.wikipedia.org/wiki/Righteous_Among_the_Nations (без фінансової вигоди; 2 713 на 1.01.2024). Сайт yadvashem.org з середовища — 403 | ✅ |
| 19 | **Шептицький:** організував переховування в монастирях; мережею керував брат Климентій — Праведник; справу митрополита розглядали багато разів, звання не надано (l3) | https://ukrainianjewishencounter.org/en/izrus-will-the-galician-metropolitan-become-the-righteous-among-the-nations (розглядали на 12 засіданнях, відхилено; «Klement managed that network»; Климентій — Праведник) ; https://risu.ua/en/index/all_news/catholics/ugcc/78603 (Климентій отримав звання; митрополита не визнано) | ✅ визнано лише Климентія (рік 1995 у тексті не вжито — правильно) |
| 20 | Розкол ОУН 1940: ОУН(б) — Бандера, ОУН(м) — Мельник (l9) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CR%5COrganizationofUkrainianNationalists.htm (10.02.1940) ; https://en.wikipedia.org/wiki/Taras_Bulba-Borovets (OUN-B, OUN(M)) | ✅ |
| 21 | «Поліська Січ» — Т. Боровець, 1941 (l9) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CO%5CPolisianSich.htm (червень 1941) ; en.wiki Taras Bulba-Borovets (дозвіл 8.08.1941) | ✅ |
| 22 | На початку 1943 р. найсильніша — УПА під проводом ОУН(б) (l9) | EoU Polisian Sich (OUN(B) dominant by February 1943) ; EoU UPA https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianInsurgentArmy.htm («the most powerful group, the Bandera units») | ✅ |
| 23 | УГВР — липень 1944, ОУН(б) і УПА (l9) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianSupremeLiberationCouncil.htm (11–15.07.1944) ; https://uk.wikipedia.org/wiki/Українська_головна_визвольна_рада (ініціатива УПА й ОУН(б)) | ✅ |
| 24 | Масові напади УПА на польські села з весни 1943; рішення ОУН(б) витіснити поляків; 11.07.1943 — найкривавіший день, напади в багатьох селах одночасно (l9) | https://en.wikipedia.org/wiki/Massacres_of_Poles_in_Volhynia_and_Eastern_Galicia (рішення восени 1942; Паросля, лютий 1943; 11.07 — 96 сіл) ; https://www.radiosvoboda.org/a/24950945.html (рішення навесні 1943, «набрали масового характеру») ; https://zaxid.net/11071943_tragediya_i_spekulyatsiyi_n1287297/amp (масштаб 11.07 дискусійний: від 12–25 до 167 населених пунктів) | ✅; через дискусію про масштаб → «Найкривавішим вважають 11 липня 1943 р.» |
| 25 | Польське підпілля й самооборона — відплатні напади на українські села; гинули передусім мирні люди (l9) | en.wiki Massacres… ; https://zaxid.net/tam_ne_bulo_svyatih_vsi_buli_zamazani_krovyu_n1504764 (І. Патриляк, 2020) | ✅ |
| 26 | Навесні 1943 тисячі українських поліцаїв пішли до УПА; німці набрали поляків і залучали цю поліцію до каральних акцій (l9) | en.wiki Massacres… (≈ 5 000, березень–квітень 1943; «replaced… with Polish policemen», ≈ 1 200; польська допоміжна поліція в пацифікаціях) ; https://zn.ua/ukr/HISTORY/yak-moskva-vidkrila-vorota-u-peklo-na-volini-_.html (М. Чех: «набрали поляків (близько 1,5–2 тис.)», 202-й батальйон шуцманшафту) ; Патриляк, zaxid («польським шуцманшафтом на німецькій службі») | ✅ |
| 27 | Радянські партизани «часто мали бази в польських колоніях»; ОУН(б) звинувачувала всіх поляків (l9) | https://www.radiosvoboda.org/a/24950945.html («нерідко робили місцеве польське поселення своїми продовольчими базами») ; zn.ua (польські відділи в радянських партизанах; звернення УПА 1943: колонії — «базами большевицької партизанки») | ⚠ → виправлено: «нерідко робили польські колонії своїми продовольчими базами» (дослівно за джерелом) |
| 28 | **Числа Волині:** польський ІНП — ≈ 100 тис. поляків загалом, 40–60 тис. на Волині; українські дослідники — 10–20 тис. українців (l9) | IPN https://volhyniamassacre.eu/zw2/history/179,The-Effects-of-the-Volhynian-Massacres.html (≈ 100 000; 40–60 тис. Волинь; 30–40 тис. Сх. Галичина) ; https://www.radiosvoboda.org/a/25043358.html (О. Каліщук: українців ≈ 20 тис.) ; https://fakty.com.ua/ru/ukraine/20231110-shho-take-volynska-tragediya-i-chy-mozhe-staty-pereponoyu-dlya-ukrayiny-na-shlyahu-do-yes/ (українські історики: 9–10 тис., до ≈ 15 тис.) ; https://interfax.com.ua/news/general/387560.html (10–20 тис.; Сейм 2016 — понад 100 тис.) | ✅ з атрибуцією. Фраза «Оцінки різняться в рази» не мала опори на екрані → «Оцінки різних дослідників розходяться» |
| 29 | Пужники, 2025, спільна ексгумація, Тернопільщина (l9) | https://zaxid.net/na_ternopilshhini_zavershili_eksgumatsiyu_v_puzhnikah_viyavili_ostanki_42_lyudey_n1609790 (спільна українсько-польська, квітень–травень 2025) ; https://www.eurointegration.com.ua/news/2025/04/30/7210592/ (почали 24.04.2025; неіснуюче село) | ✅; «у селі» → «на місці колишнього села» |
| 30 | Луцьк, липень 2023, Зеленський і Дуда, «всіх невинних жертв» (l9) | https://kyivindependent.com/zelensky-duda-commemorate-victims-of-the-volyn-massacre-in-lutsk/ (9.07.2023, Луцьк, цитата) ; https://www.radiosvoboda.org/a/news-zelenskyi-duda-volyn/32495438.html ; en.wiki Massacres… («attended a mass in local church») | ✅; «до собору» → «до храму» (собор жодне відкрите джерело не назвало) |
| 31 | Карта GUS 1931: червоний кружок — 10 тис. польськомовних, зелений — 10 тис. з іншою мовою; PD (l9) | Commons https://commons.wikimedia.org/wiki/File:GUS_languages1931_Poland.jpg («Wiadomości Statystyczne» z. 16, 1932; PD-Polish, ст. 4 закону 1994) ; легенду прочитано на самому файлі (960 px) | ✅ (PD-US окремим тегом не позначено; підстава — URAA, див. «Людині») |
| 32 | Київ звільнено 6.11.1943 після 778 днів окупації (l10) | https://www.ukrinform.ua/rubric-society/3345039-6-listopada-pamatni-dati.html ; https://armyinform.com.ua/2022/11/06/6-lystopada-1943-roku-kyyiv-povnistyu-vyzvolyly-vid-naczystskyh-vijsk/ | ✅ |
| 33 | Форсування Дніпра восени 1943, після Курська (l10) | https://en.wikipedia.org/wiki/Battle_of_the_Dnieper («Following the Battle of Kursk», 26.08–23.12.1943) ; armyinform 6.11.2022 | ✅ |
| 34 | Корсунь-Шевченківська: січень — лютий 1944, оточення, частина вирвалася (l10) | https://armyinform.com.ua/2020/05/04/korsun-shevchenkivska-operacziya/ (24.01–17.02.1944) ; https://uk.wikipedia.org/wiki/Корсунь-Шевченківська_операція | ✅ |
| 35 | Кінець жовтня 1944 — вихід на кордон; 28 жовтня — день вигнання (l10) | https://armyinform.com.ua/2019/10/28/75-rokiv-iz-dnya-vygnannya-naczystskyh-okupantiv-z-ukrayiny/ ; https://www.ukrinform.ua/rubric-society/3124628-28-zovtna-pamatni-dati.html | ✅ |
| 36 | «Чорносвитники»: польові військкомати, без навчання, форми, іноді зброї; «винні» (l10) | https://armyinform.com.ua/2021/05/ukrayina-vtratyla-v-drugij-svitovij-majzhe-9-miljoniv-lyudej-ta-40-vidsotkiv-svogo-ekonomichnogo-potenczialu/ (Д. Гайнетдінов: «вважали за зрадників») ; https://www.ukrinform.ua/rubric-ato/3537928-corna-pihota-znovu-jde-v-bij.html (В. В'ятрович: «зрадниками», Дніпро — «тисячами тіл») | ✅; слова «винних» у джерелах немає → «влада вважала їх «зрадниками»» |
| 37 | Ялта: «лінія Керзона»; «Галичина й Західна Волинь» лишалися в УРСР; місця в ООН для УРСР і БРСР (l10) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CY%5CA%5CYaltaConference.htm («eastern Galicia and Volhynia») ; https://en.wikipedia.org/wiki/Yalta_Conference (16 республік → 2) | ⚠ → «Східна Галичина»: західна Галичина з Краковом лишилася в Польщі |
| 38 | УРСР — засновниця ООН 1945, політику визначала Москва (l10) | https://www.eurointegration.com.ua/articles/2022/02/8/7133682/ (підпис УРСР на Статуті) ; en.wiki Yalta ; content/world/g11-w11s1.js (verified: «самостійної зовнішньої політики УРСР не мала») | ✅ |
| 39 | Фото Ялти: NARA 531340, 111-SC-260486, PD-USGov; сидять Черчилль, Рузвельт, Сталін (l10) | Commons https://commons.wikimedia.org/wiki/File:Yalta_Conference_(Churchill,_Roosevelt,_Stalin)_(B%26W).jpg ; файл переглянуто | ✅ |
| 40 | Втрати: за УІНП 8–10 млн; 3–4 млн у боях і полоні; 4–5 млн цивільних; «війна зруйнувала» понад 700 міст і містечок, 28 тис. сіл (l10) | УІНП через https://texty.org.ua/fragments/59686/Mizh_dvoh_vogniv_Ukrajina_v_Drugij_svitovij-59686/ (2015: «постраждало понад 700 міст та містечок… 28 тис. сіл») ; armyinform 2021/05 («від 8 до 10 млн»; «майже 700 міст і 30 тис. сіл»). old.uinp.gov.ua — 503 | ✅ числа; ⚠ дієслово → «Від бойових дій постраждали…»; варіант multi і fbText узгоджено |

## Завдання: розв'язок → опора → вердикт
Розв'язував до того, як дивився на `correct`. Усі мої відповіді збіглися з ключами.
| Урок / екран | Тип | Моя відповідь | Опора (D-019) | Вердикт |
|---|---|---|---|---|
| l7 е3 | choice | 2 (один кандидат) | е2 | ✅ |
| l7 е5 | order | вторгнення → вибори → збори → ультиматум | l1 е4 (17.09); е2; е4 | ✅ |
| l7 е7 | sort | власність: 0, 2; люди: 1, 3 | е2, е6 | ✅ |
| l7 е9 | multi | 1, 3 | фото, `cap`, `body` (через два дні після вступу німців) | ✅ |
| l7 е10 | choice | 1 | е2, е6, е8 | ✅ |
| l8 е3 | choice | 0 | е2 | ✅ |
| l8 е6 | sort | евакуація: 0, 2; знищення: 1, 3 | е4, е5 | ✅ |
| l8 е8 | multi | 1, 2, 3 | фото + `cap` (кореспондент роти пропаганди) + міркування | ✅ |
| l8 е9 | choice | 1 | `body` + l7 е6 («без суду… за походження») | ✅ |
| l8 е10 | choice | 2 | е5, е7, е4 | ✅ |
| l3 е3 / е5 / е6 | choice / multi / sort | 1 / 0, 2, 3 / 0, 1 · 2, 3 | е2, е4, наказ і `body` (зміст verified, переставлено лише варіанти) | ✅ |
| l3 е8 (нове) | choice | 0 | е7 (ризик і без вигоди) | ✅ |
| l3 е9 | choice | 2 | е4, е6 | ✅ |
| l9 е2 | choice | 1 | карта + легенда в `cap` | ✅ |
| l9 е4 | choice | 0 | е3; дистрактор «Акт 30 червня» — l4 | ✅ |
| l9 е7 | sort | окупанти: 1, 3; партизани: 0, 2 | е6; «накази з радянських центрів» — l4 е2 | ✅ |
| l9 е9 | multi | 1, 2 | міркування (метод історика), е8 | ✅ |
| l9 е10 | choice | 2 | е5, е6, е1 | ✅ |
| l10 е3 | order | «котел» → Київ → Корсунь → кордон | l8 е2; е2 | ✅ |
| l10 е5 | choice | 2 | е4 + текст звіту | ⚠ → виправлено: дистрактор «Що бій відбувся на звільненій території» теж «не сказано прямо» (дві правильні відповіді). Замінено на «Що поповнення одразу пішло в бій» — це в звіті сказано |
| l10 е7 | choice | 1 | е6 + `body` | ✅ |
| l10 е9 | multi | 1, 3 | е8 (склад втрат; міста й села) | ✅ |
| l10 е10 | choice | 0 | е1, е4, е8 | ✅ |
| boss К1 | order | 23.08.39 → 17.09.39 → 22.10.39 → 26.06.40 → 22.06.41 | l1, l7, l8 / l2 | ✅ |
| boss К2 | multi | 0, 2 | l8 (випалена земля, «котел» — радянські війська), l2 (поділ) | ✅ |
| boss К3 | multi | 1, 2, 3 | l3 | ✅ |
| boss К4 | multi | 0, 3 | l4 е2–е3; l9 е5–е6 (окупанти загострювали) | ✅ |
| boss К5 | choice | 1 | l10 е4, е10 | ✅ |
| boss К6 / К7 | choice | 2 / 0 | l5; увесь розділ | ✅ |

- Позиції правильних варіантів різні: l7 — 2, [1, 3], 1; l8 — 0, [1, 2, 3], 1, 2; l3 — 1, [0, 2, 3], 0, 2; l9 — 1, 0, [1, 2], 2; l10 — 2, 1, [1, 3], 0; boss — [0, 2], [1, 2, 3], [0, 3], 1, 2, 0 ✓.
- Підказки спрямовують, але не відкидають усіх хибних варіантів ✓. `fbText` відповідям не суперечать. l9 е2: `fbText` додає «переважали українці, жили також євреї, чехи» — новий факт, але відповідь на нього не спирається (RS 24950945: ≈ 80 % українців).
- `boss` питає лише матеріал розділу ✓. `learned` — лише з екранів уроку ✓.

## Педагогіка й чутливі теми (style/hist.md «Чутливі теми»; facts/hist №189–190)
- **Без натуралізму** ✓. Розстріли, Волинь, Дніпрогес — без описів насильства; на фото жертв немає.
- **Волинь (l9).** Формула «трагедія двох народів», окремий екран проти колективної вини, роль окупантів і радянських партизанів — як у програмі № 698. Відповідальність ОУН(б) і УПА названо прямо (е5), відплатні акції польських загонів — теж. Числа подано діапазоном, із тим, хто їх оцінює. Підсумок уроку переписано: тепер він починається з виконавців, а не з окупантів і партизанів. Попередній підсумок читався як перекладання провини на зовнішні сили.
- **Голокост і Праведники (l3).** Шептицький — без хибного «Праведник»; «Голокост від куль», 33 771 (facts №188) ✓.
- **Розстріли НКВС (l7):** тепер з атрибуцією УІНП. **Колаборація.** l9 е6 описує дії німецької поліції з поляків у прив'язці до німецької влади, без «колективної вини».

## Правки (14 змістових + статуси, усі в `content/hist/g10-g11s1.js`)
1. l7 е6 — партії «припинили діяльність під тиском», арешти: «політиків, урядовців, офіцерів, землевласників».
2. l7 е8 — додано оцінку УІНП «понад 24 тис.» поруч із діапазоном 10–40 тис.
3. l8 е7 — «Пожежі тривали до 29 вересня» → «Вибухи й пожежі тривали кілька днів».
4. l9 е1 — «до собору» → «до храму».
5. l9 е5 — «Найкривавішим вважають 11 липня 1943 р.…».
6. l9 е6 — «нерідко робили польські колонії своїми продовольчими базами».
7. l9 е8 — «Оцінки різних дослідників розходяться»; «на місці колишнього села Пужники».
8. l9 outro — виконавці на першому місці, роль окупантів і партизанів — як загострення ворожнечі.
9. l10 е4 — «вважала їх «зрадниками»».
10. l10 е5 — дистрактор A (неоднозначність, дві відповіді).
11. l10 е6 — «Східна Галичина».
12. l10 е8 — «Від бойових дій постраждали…».
13. l10 е9 — варіант «Постраждалим містам…».
14. l10 е9 `fbText` — «Сотні постраждалих міст…».
15. Статуси l3, l7, l8, l9, l10, boss → `verified`; коментар у шапці файлу.

## Людині
- **TQ-085 (обов'язково): урок g11s1l9 показати вчителеві до `approved`.** Що перевірити: (а) формулу «трагедія двох народів» і підсумок уроку; (б) асиметрію чисел. Для поляків в уроці — оцінка польського ІНП (≈ 100 тис. загалом, 40–60 тис. на Волині), для українців — оцінка українських дослідників (10–20 тис.). Своїх перехресних оцінок урок не подає: ІНП — 10–12 тис. українців, з них 2–3 тис. на Волині (volhyniamassacre.eu); українські історики — 35–60 тис. поляків на Волині (Каліщук, RS 25043358). Чи додати їх? (в) Чи згадувати польську назву «Волинська різанина» й ухвалу Сейму 2016 р. («геноцид»)?
- Карта GUS 1931: на Commons лише PD-Polish, окремого тегу PD-US немає. Підстава — URAA: на 1.01.1996 в Польщі твір не охоронявся як офіційний матеріал. Ризик низький.
- Дублікат `yalta-1945.jpg` (img/world/w11s1 ↔ img/hist/g11s1) — у питанні про дублікати з handoff.
- Build не запускав (у sw.js ще немає 4 нових зображень). Не комітив.

## Вердикт по уроках
l1, l2, l4, l5, l6 — verified (не змінювалися, крім eyebrow); **l3, l7, l8, l9, l10, boss — verified** (l9 — з TQ-085 до вчителя). `approved` не ставив.
