---
claimed_from: review
claimed_at: 2026-11-11T20:50:35.867Z
id: write-world-w10s7
type: write-section
subject: world
grade: 10
section: w10s7
weeks: [26, 35]
status: done
claimed_by: verifier-w10s7
created: 2026-11-10
---
# Написати розділ «Друга світова війна» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як агресорів «умиротворювали», хто розв'язав війну 1939 р., що таке Голокост і як світ судив воєнних злочинців.

## Теми уроків (з плану)
1. Мюнхен, 1938: політика «умиротворення»
2. Пакт Молотова–Ріббентропа й початок війни
3. Фронти й переломні битви
4. Окупація, рух Опору й Голокост
5. Антигітлерівська коаліція й капітуляція
6. Нюрнберзький процес і наслідки війни
7. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Специфіка 10–11 кл. (оркестратор, за верифікацією plan-world-g10-11)
- Програма — «Всесвітня історія. 10–11 класи» (рівень стандарту), наказ МОН № 698 від 03.08.2022, 1 год/тиждень; текст: https://edumedia-depot.gei.de/bitstreams/450c6016-4759-423a-b29e-2a263b384cac/download ; звірка розділів — reports/verify/plan-world-g10-11.md. Підручник 11 кл. — Щупак (2024) за КТП naurok (у звіті).
- Історія України 10–11 у «Сліді» — окремо (hist g10*/g11*): не дублюй, «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist. **hist g11s1 «Друга світова війна» переноситься в 10 кл. без зміни id** (curate-hist-coverage): для w10s7 можна спиратися на g11s1 (`requires` g11s1l1 — додай у файлі свого розділу).
- Чутливі теми (тоталітаризм, Голокост, Друга світова, Сребрениця, війна Росії проти України) — style/hist.md; дати й числа — facts/world.md, facts/hist*.md або джерело з URL. Термін «радянський» (як у hist; питання про «совєтський» — у глосарії, не змінюй).
- D-027: у кожному уроці ≥ 1 справжнє img (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно).

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- Скіл зображень `.claude/skills/hist-images/SKILL.md` і docs/IMAGES.md (D-027)
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/world/g7-w7s1.js (еталон після верифікації; style/world.md → «Еталони»)

## Результат
- Файл `content/world/g10-w10s7.js` з `SLID.section("world", { id: "w10s7", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s7/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s7` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**Виконавець:** w-write-world-w10s7, 2026-11-11. Файл `content/world/g10-w10s7.js`, 7 уроків (6 тем + boss `w10s7l7`, значок `ww2archive`), усі `status: "draft"`, `meta.factcheck: "self"`.
`requires`: w9s3l5 (Женевська конвенція — l6), w10s4l3 (нацистська ідеологія — l2, l4), w10s5l2 (понад 3 млн німців у Судетах — l1), g10s5l3 (Карпатська Україна — l1), g11s1l1 (пакт, 1939 р. — l2, l5), g11s1l3 (Бабин Яр — l4). Усі id наявні. У plan.js `requires: ["w9s3l5", "g10s5l3"]` — розширення в inbox.

**Перевірки:** `validate --section w10s7` — 0 помилок, 0 попереджень; `euphony --subject world --section w10s7` — 0 відхилень; `stats --subject world` — уроки w10s7 без прапорців. Build не запускав.

### Уроки
- l1 «Мир для нашого часу?» — Рейнська обл. 1936, аншлюс, Мюнхен, Черчилль 5.10.1938, березень 1939, link: Віденський арбітраж і Карпатська Україна.
- l2 «Зустріч над Бугом» — пакт і таємний протокол, вересень 1939, Брест 22.09.1939 (три описи події), Зимова війна, 1940 р.; link: межі УРСР 1939–1940.
- l3 «Пляж Омаха» — бліцкриг, Перл-Гарбор, Мідвей / Ель-Аламейн / Сталінград / Курськ (корінний перелом), «День Д».
- l4 «Звіт, що став доказом» — окупація, колабораціонізм, Голокост, Ванзеє, Аушвіц, link: Бабин Яр, повстання у Варшавському гетто, звіт Штропа (джерело виконавців), Опір (де Голль, Армія Крайова, Праведники).
- l5 «Дві капітуляції» — ленд-ліз, Атлантична хартія (точний переклад п. 1 і 3), Декларація ОН, Тегеран, капітуляції Німеччини (7/8 травня) і Японії; link: 8 травня в Україні (закон 2023).
- l6 «Суд над агресією» — статут і процес, три види злочинів, вирок (number 22 − 3 = 19), звіт Штропа як доказ USA-275, Лемкін і Лаутерпахт (Львів), link: Спецтрибунал щодо агресії (2025), ціна війни (діапазон + note).
- l7 «Музей пам'яті» (boss) — 6 завдань, `pre` l1…l6.

### Зображення (D-027; усі — мініатюри thumb.wikimedia.org, стиснено ≤ 190 КБ)
| Урок | Файл | Commons | Ліцензія |
|---|---|---|---|
| l1, l7 | heston-1938.jpg | File:MunichAgreement.jpg (IWM D 2239, 30.09.1938, Ministry of Information) | PD-UKGov (строк корони сплив), у США — PD-1996 (тег на сторінці) |
| l1 | munich-1938.jpg | File:Bundesarchiv_Bild_183-R69173,_Münchener_Abkommen,_Staatschefs.jpg (29.09.1938; імена зліва направо — з опису архіву) | CC BY-SA 3.0 DE |
| l2 | brest-1939.jpg | File:Bundesarchiv_Bild_101I-121-0011A-23,_Polen,_Siegesparade,_Guderian,_Kriwoschein.jpg (22.09.1939; фотограф Gutjahr, PK) | CC BY-SA 3.0 DE |
| l3 | omaha-1944.jpg | File:Into_the_Jaws_of_Death_23-0455M_edit.jpg (6.06.1944, R. F. Sargent, USCG; NARA NAID 195515) | PD-USCG (+ PD-old-50) |
| l4, l6 | stroop-report-1943.jpg | File:Stroop_Report_-_Cover_Page.jpg (примірник NARA; штамп IMT «USA Exhibit 275, Filed Dec 13 1945») | лише текст і штампи (PD-text), PD-anon-70-EU, PD-GermanGov; у США — PD US alien property. ⚠ на сторінці також тег PD-Poland (для нашого файлу не потрібен: обкладинка — текст, примірник NARA, не польський) — верифікаторові звірити, чи комбінація прийнятна |
| l5 | atlantic-1941.jpg | File:Prince_of_Wales-5.jpg (NHHC NH 67209; серпень 1941; Рузвельт ліворуч, Черчилль праворуч) | PD-USGov-Military-Navy (+ PD Mark) |
| l5 | missouri-1945.jpg | File:Mamoru_Shigemitsu_signs_the_Instrument_of_Surrender,_officially_ending_the_Second_World_War.jpg (SC 213700, 2.09.1945, Lt. S. E. Korpanty; реставр. A. Cuerden) | PD-USGov-Military-Army |
| l6 | nuremberg-dock.jpg | File:Nuremberg_Trials._Looking_down_on_defendants_dock,_circa_1945-1946._-_NARA_-_540127.jpg (Ray D'Addario, Office of U.S. Chief of Counsel) | PD-USGov |
Дату фото Атлантичної конференції в `cap` — «серпень 1941 р.» (точний день богослужіння на палубі — 10.08 — не звіряв з NHHC).

### Факти й джерела (нові; ≥ 2 джерела, крім позначених)
1. Мюнхенська угода — ніч на 30.09.1938 (≈ 1:30), Чемберлен, Даладьє, Гітлер, Муссоліні; Чехословаччину не запросили; Судети зайнято 1–10.10.1938; «peace for our time» 30.09 біля Даунінг-стріт; декларація «the desire of our two peoples never to go to war with one another again» — https://encyclopedia.ushmm.org/content/en/timeline-event/holocaust/1933-1938/munich-agreement ; https://en.wikipedia.org/wiki/Munich_Agreement ; https://en.wikipedia.org/wiki/Peace_for_our_time (Faber 2008, с. 4–7).
2. Черчилль 5.10.1938: «we have sustained a total and unmitigated defeat, and that France has suffered even more than we have» — https://api.parliament.uk/historic-hansard/commons/1938/oct/05/policy-of-his-majestys-government ; https://winstonchurchill.org/resources/speeches/1930-1938-the-wilderness/the-munich-agreement/ . В уроці — переклад з позначкою.
3. 14.03.1939 Словаччина, 15.03 німецькі війська в Празі, 16.03 протекторат; Угорщина захопила Карпатську Україну 15.03 — https://en.wikipedia.org/wiki/German_occupation_of_Czechoslovakia ; facts/hist №185. Рейнська обл. — березень 1936, аншлюс — березень 1938, гарантія Польщі — березень 1939 (в уроці без днів) — en.wiki Munich Agreement (хронологія); **гарантію 31.03 окремо не звіряв — в уроці лише «у березні 1939 р.»**. Франція — союзниця Чехословаччини — en.wiki Munich Agreement.
4. Пакт 23.08.1939 на 10 років; протокол: Фінляндія, Естонія, Латвія, схід Польщі (Нарев, Вісла, Сян), Бессарабія — https://avalon.law.yale.edu/20th_century/nonagres.asp ; https://avalon.law.yale.edu/20th_century/addsepro.asp ; facts/hist №186. (Avalon у сесії не відкривав — **звірити верифікатору**; зміст протоколу збігається з en.wiki Soviet occupation of Bessarabia.)
5. 1.09 / 3.09 (Британія і Франція оголосили війну) / 17.09 / 28.09.1939 Варшава капітулювала, межа по Бугу — https://encyclopedia.ushmm.org/content/en/article/invasion-of-poland-fall-1939 ; facts/hist №186.
6. Брест 22.09.1939: офіційна церемонія передачі міста Червоній армії; Гудеріан і Кривошеїн; підпис Bundesarchiv «deutsch-russische Siegesparade»; Кривошеїн (спогади 1964) — радянські частини входили окремо — https://en.wikipedia.org/wiki/German%E2%80%93Soviet_military_parade_in_Brest-Litovsk ; опис Bundesarchiv на Commons. Номер «WH» на вантажівці видно на фото.
7. Зимова війна 30.11.1939 – 13.03.1940; виключення з Ліги Націй (в уроці «у грудні») — https://en.wikipedia.org/wiki/Winter_War ; Бессарабія й Північна Буковина: ультиматум 26.06, вступ 28.06–3.07.1940; Буковини в протоколі не було; Північна Буковина → Чернівецька обл. (2.08.1940) — https://en.wikipedia.org/wiki/Soviet_occupation_of_Bessarabia_and_Northern_Bukovina ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBukovyna.htm . Балтія «влітку 1940 р.» — загальновідомо (en.wiki Occupation of the Baltic states), **одне джерело**.
8. Франція — перемир'я 22.06.1940; Перл-Гарбор 7.12.1941; Мідвей — червень 1942, 4 авіаносці (NHHC панель: https://www.history.navy.mil/content/dam/nhhc/news-and-events/multimedia%20gallery/LargeFormatBanners/LargeFormatPDF/PopUp_NHHC_BattleOfMidway_Panel2.pdf ; https://www.worldhistory.org/article/2964/battle-of-midway/); Ель-Аламейн 23.10–4.11.1942 (https://www.nam.ac.uk/explore/battle-alamein ; https://www.historyofwar.org/articles/battles_alamein_2nd.html ) — в уроці «жовтень — листопад»; Сталінград 17.07.1942 – 2.02.1943, «Уран» 19.11.1942 (https://en.wikipedia.org/wiki/Battle_of_Stalingrad ; https://www.history.com/articles/battle-stalingrad-turning-point ); Курськ — від 5.07.1943, в уроці «улітку 1943 р.». «США — найбільша промислова держава світу» — загальновідомо, окремого джерела не відкривав (**звірити**).
9. «День Д» 6.06.1944: ≈ 156–160 тис. → в уроці «понад 150 тис.»; п'ять пляжів — https://www.history.com/articles/d-day-normandy-wwii-facts ; https://www.cfr.org/article/seventy-fifth-anniversary-d-day .
10. Голокост: 6 млн, «майже двоє з кожних трьох»; інші групи — https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust ; Ванзеє 20.01.1942, рішення ухвалене раніше — https://encyclopedia.ushmm.org/content/en/article/wannsee-conference-and-the-final-solution ; Аушвіц ≈ 1,1 млн, ≈ 1 млн євреїв, 27.01.1945 — https://encyclopedia.ushmm.org/content/en/article/auschwitz (друге джерело — auschwitz.org, не відкривав).
11. Варшавське гетто ≈ 400 тис.; 22.07–21.09.1942 ≈ 265 тис. до Треблінки; повстання 19.04–16.05.1943; 16.05 підрив Великої синагоги — https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising ; звіт Штропа: назва, для Гіммлера, 125 с., 53 фото, документ 1061-PS / USA-275 — https://en.wikipedia.org/wiki/Stroop_Report ; сторінка Commons (штамп видно на скані).
12. Де Голль 18.06.1940, Бі-Бі-Сі, Лондон — https://www.nationalww2museum.org/war/articles/preserving-flame-french-resistance-charles-de-gaulles-june-1940-addresses ; https://www.archives-nationales.culture.gouv.fr/presentation-en-anglais-de-lexposition-lappel-du-18-juin-1940 . Варшавське повстання 1.08–2.10.1944, Армія Крайова, Червона армія за Віслою, місто зруйноване — https://en.wikipedia.org/wiki/Warsaw_Uprising (**одне джерело**; USHMM 502). Праведники з України — «тисячі» за facts/hist №320.
13. Атлантична хартія 14.08.1941, п. 1 і 3 (дослівний переклад) — https://avalon.law.yale.edu/wwii/atlantic.asp ; https://history.state.gov/milestones/1937-1945/atlantic-conf . Ленд-ліз — березень 1941 (en.wiki Lend-Lease), ≈ 50 млрд $ понад 30 країнам — https://history.state.gov/milestones/1937-1945/lend-lease .
14. Декларація Об'єднаних Націй 1.01.1942, 26 держав, перші — США, Британія, СРСР, Китай; назву запропонував Рузвельт — https://cdn.un.org/unyearbook/yun/pdf/1946-47/1946-47_36.pdf ; https://www.nationalww2museum.org/war/articles/united-nations-declaration-1942 . Тегеран 28.11–1.12.1943 — https://history.state.gov/milestones/1937-1945/tehran-conf .
15. Капітуляція: Реймс 7.05, Карлсгорст пізно 8.05, чинність 8.05 23:01 CET (9.05 за Москвою) — https://www.nationalgeographic.com/history/article/germany-surrendered-twice-world-war-ii ; https://www.deutschlandmuseum.de/en/history/calendar/1945-05-08-unconditional-surrender-of-the-german-wehrmacht ; facts/hist №192. 30.04 смерть Гітлера, 2.05 Берлін — загальновідомо (**звірити**).
16. Японія: 6.08 Хіросіма, 9.08 Нагасакі, 8.08 СРСР оголосив війну (наступ 9.08), 15.08 радіозвернення, 2.09.1945 «Міссурі», Сіґеміцу — https://docsteach.org/document/surrender-ceremony-uss-missouri/ ; https://ebsco.com/research-starters/military-history-and-science/japan-surrenders ; опис фото на Commons. Дату оголошення війни СРСР (8.08) у пошуку одне джерело плутало з 9.08 — в уроці «8 серпня оголосив… наступного дня почав наступ».
17. 8 травня — День пам'яті та перемоги над нацизмом у Другій світовій війні 1939–1945 років, закон ВРУ 29.05.2023 — https://www.pravda.com.ua/news/2023/06/12/7406493/ ; https://www.ukrinform.ua/rubric-society/4120862-v-ukraini-vidznacaut-den-pamati-ta-peremogi-nad-nacizmom-u-drugij-svitovij-vijni.html .
18. Нюрнберг: статут 8.08.1945; 20.11.1945–1.10.1946; 24 обвинувачені, 22 судили (Лей — самогубство, Крупп — виключений), Борман заочно; 12 смертних, 3 довічні, 4 — 10–20 р., 3 виправдані; чотири пункти обвинувачення; «supreme international crime»; накази не звільняють — https://encyclopedia.ushmm.org/content/en/article/international-military-tribunal-at-nuremberg ; https://www.nationalww2museum.org/war/topics/nuremberg-trials ; https://avalon.law.yale.edu/imt/judnazi.asp ; https://en.wikipedia.org/wiki/Nuremberg_trials .
19. «Геноцид» — Лемкін, у друці 1944 («Axis Rule…»); Конвенція ООН 9.12.1948 — https://encyclopedia.ushmm.org/content/en/article/what-is-genocide ; Лемкін і Лаутерпахт вивчали право у Львові; Лаутерпахт — «злочини проти людяності» — https://cgt.columbia.edu/news/east-west-street-origins-genocide-crimes-humanity-philippe-sands/ ; https://www.ucl.ac.uk/laws/events/2016/oct/law-life-and-literature (за книжкою Ф. Сендса «East West Street»).
20. Спецтрибунал щодо злочину агресії проти України — угода Україна — Рада Європи 25.06.2025, Страсбург (Зеленський, Берсе) — https://www.coe.int/en/web/kyiv/-/ukraine-and-the-council-of-europe-sign-agreement-on-establishing-a-special-tribunal-for-the-crime-of-aggression-against-ukraine ; https://www.eeas.europa.eu/delegations/council-europe/ukraine-and-council-europe-sign-landmark-agreement-special-tribunal-crime-aggression_en .
21. Загиблі у війні: 60–75 млн (en.wiki), ≈ 60 млн (NWWII Museum: 15 + 45) → в уроці «від 60 до 75 млн» з `note`; Польща 5,6–5,8 млн (IPN 2009, за en.wiki) — https://en.wikipedia.org/wiki/World_War_II_casualties ; https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war . Втрат України числом не подавав (у facts/hist немає вивіреного числа).

### Сумнівні місця й опора (D-019)
- l1 екр. 6 (Черчилль) — опора: екр. 3–4 (умиротворення, Франція — союзниця) + цитата на екрані; «Битва під Мюнхеном» — жартівливий дистрактор (один на урок).
- l1 екр. 8 (Хуст) — дати Віденського арбітражу й 15.03 на самому екрані; опора на hist g10s5l3 і екр. 7.
- l2 екр. 6 (три описи) — усе на екрані; l2 екр. 8 — «виключила з Ліги Націй» на екр. 7.
- l4 екр. 7 (заголовок звіту) — «звітує про знищення як успіх»: опора — екр. 6 (Штроп придушував повстання, альбом для Гіммлера) + знак оклику на скані.
- l5 екр. 7 (8 травня) — «для українських земель війна почалася 1939 р.» — нагадування з hist g11s1l1 на екрані.
- l6 екр. 7 (трибунал) — опора: визначення трьох видів злочинів на екр. 3.
- Boss Q4: «Розстріли в Бабиному Яру» — з l4 екр. 4 (link із нагадуванням hist).
- «Праведник народів світу» — звання присуджує Яд Вашем (загальновідомо; facts/hist №320).
- Цитати: Чемберлен, Черчилль, хартія, звіт Штропа, «найтяжчий міжнародний злочин» — точні переклади з позначкою «(переклад)»; Чемберлена — лише короткі фрази, наведені в двох джерелах.

### Пропозиції
- TERM: аншлюс, умиротворення, сфери впливу, бліцкриг, корінний перелом, другий фронт, колабораціонізм, гетто, рух Опору, Праведник народів світу, антигітлерівська коаліція, «велика трійка», ленд-ліз, злочини проти миру / воєнні злочини / злочини проти людяності, геноцид; імена — Невіл Чемберлен, Едуар Даладьє, Галеаццо Чіано, Гайнц Гудеріан, Семен Кривошеїн, Бернард Монтгомері, Юрген Штроп, Шарль де Голль, Мамору Сіґеміцу, Рафаель Лемкін, Герш Лаутерпахт; Аушвіц-Біркенау, Ванзеє, Треблінка, Армія Крайова, Мідвей, Ель-Аламейн.

### Верифікація (verifier-w10s7, 2026-11-12)
Звіт: reports/verify/w10s7.md. Усі 7 уроків — `verified`; 4 мінімальні правки: l4 «125 сторінок і 53 фото» → «машинописний текст і понад 50 фотографій» (обсяг у джерелах розходиться: 125 vs 75 с.); l2 «у спогадах 1964 р.» → «згодом у спогадах» (назва/рік спогадів Кривошеїна різняться); l3 «Навесні 1940 р.» → «У травні — червні 1940 р.»; l5 — «…» в кінці цитати п. 3 Атлантичної хартії. Пакт і протокол звірено з Avalon (переклад точний). Обкладинка звіту Штропа — PD-text (лише текст і штампи) у Німеччині й США, заміна не потрібна. Усі пункти «одне джерело» закрито другим джерелом (URL у звіті). validate — 0/0, euphony — 0. Playtest — лише в CI (немає Python playwright).
