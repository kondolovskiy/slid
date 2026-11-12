---
claimed_from: todo
claimed_at: 2026-11-12T04:41:41.938Z
id: write-world-w11s6
type: write-section
subject: world
grade: 11
section: w11s6
weeks: [30, 35]
status: done
claimed_by: w-write-world-w11s6
created: 2026-11-10
---
# Написати розділ «Від розрядки до сьогодення» (Всесвітня історія, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти сучасний світ: від розрядки й Гельсінкі до тероризму, агресії Росії проти України, інтернету й нової культури.

## Теми уроків (з плану)
1. Розрядка й Гельсінкі, 1975
2. Від двох наддержав до багатополярного світу
3. Міжнародний тероризм
4. Агресія Росії проти України й відповідь світу
5. НТР і постіндустріальне (інформаційне) суспільство
6. Культура й спорт сьогодні
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
- Файл `content/world/g11-w11s6.js` з `SLID.section("world", { id: "w11s6", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w11s6/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w11s6` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (w-write-world-w11s6, 2026-11-12)
Файл `content/world/g11-w11s6.js`, 7 уроків, усі `status: "draft"`:
- w11s6l1 «Суперники за одним столом» (розрядка, Гельсінкі 1975, В'єтнам, Афганістан, УГГ — link) — 10 екр.
- w11s6l2 «Кілька центрів сили» (однополярний момент, Кувейт 1991, Косово 1999, ЄС/євро, Китай, БРІК, G20; факт vs тлумачення) — 9 екр.
- w11s6l3 «Ворог без кордонів» (визначення, Мюнхен 1972, 11.09.2001, стаття 5 НАТО, S/RES/1373, Афганістан 2001–2021) — 10 екр.
- w11s6l4 «Світ обирає бік» (Пригадай 2014–2022 за facts/hist №211–214; санкції 2014, G7/G8; вето 25.02.2022, ES-11/1 141/5/35, санкції, «Рамштайн», тимчасовий захист, кандидатство в ЄС, ордер МКС; умиротворення ↔ Мюнхен 1938) — 11 екр.
- w11s6l5 «Від лампи до смартфона» (НТР, ЕНІАК, МЕСМ — link, ARPANET, WWW, Белл, дані МОП/ITU) — 10 екр.
- w11s6l6 «Сцена на весь світ» (масова культура, Джамала «1944» — link, борщ і Одеса в ЮНЕСКО, МОК і нейтральні спортсмени) — 10 екр.
- w11s6l7 «Стрічка сучасності» (boss, значок `moderneye`, 6 завдань з `pre` по одному на урок) — 7 екр.

Перевірка: `validate --section w11s6` — 0 помилок, 0 попереджень; `euphony --subject world --section w11s6` — 0 відхилень; `stats --subject world` — уроки w11s6 без прапорців. Build не запускав. `requires`: w11s1l5, w11s4l5, w10s7l1, g11s1l5, g11s2l3, g11s5l1, g11s5l2 (усі існують).

### Зображення (D-027) — файл → урок → ліцензія → джерело
- `helsinki-1975.jpg` (l1 е1, е6; l7 е1) — копія вже перевіреного `img/hist/g11s2/helsinki-1975.jpg` (verifier-images-g11s2); Bundesarchiv Bild 183-P0801-026, Horst Sturm, CC BY-SA 3.0 DE — https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-P0801-026,_Helsinki,_KSZE-Konferenz,_Schlussakte.jpg (дубль між теками — питання людини з handoff).
- `g20-washington-2008.jpg` (l2 е1; l7 е3) — Президентська бібліотека Дж. Буша, P111508JB-0188 (EXIF: «First Plenary Session. Summit on Financial Markets and the World Economy», 15.11.2008, автор Joyce N. Boghosian, The White House) — https://www.georgewbushlibrary.gov/media/6490 ; файл https://www.georgewbushlibrary.gov/sites/default/files/2021-10/P111508JB-0188.jpg (514 px, оригінал більшого розміру в бібліотеці не знайшов). Богосян — штатний фотограф Білого дому за адміністрацій Бушів (https://nationalpress.org/?p=46297 ; Commons Category:Photographs by White House photographers) → твір федерального службовця, PD (17 U.S.C. § 105). Не з Commons.
- `un-sc-res-1373.jpg` (l3 е6) — рендер с. 1 PDF https://documents.un.org/api/symbol/access?s=S/RES/1373(2001)&l=en&t=pdf (pdftoppm, обрізано верхню половину); документ ООН із символом — PD (ST/AI/189/Add.9/Rev.2).
- `ramstein-2022.jpg` (l4 е1) — DVIDS 7160837, «SECDEF hosts Ukraine Defense Consultative Group in Germany», 26.04.2022, «DoD photo by Chad J. McNeeley» (Office of the Secretary of Defense Public Affairs), сторінка позначає PUBLIC DOMAIN — https://www.dvidshub.net/image/7160837/secdef-hosts-ukraine-defense-consultative-group-germany ; мініатюра 1000w з cloudfront DVIDS. Підпис DVIDS має друкарську помилку «2002» замість 2022 (дата зйомки на сторінці — 04.26.2022). Перевірити верифікатору: Макнілі — цивільний фотограф DoD (у підписі «DoD photo»), не підрядник. Не з Commons.
- `eniac.jpg` (l5 е1) — Commons «Glen Beck and Betty Snyder program the ENIAC in building 328 at the Ballistic Research Laboratory.jpg» (колишня назва Eniac.jpg), U.S. Army Photo, PD-USGov-Military-Army, мініатюра 960 px з thumb.wikimedia.org. **Опис Commons суперечливий:** підсумок — Філадельфія, англ. підпис — Абердін; будівля 328 BRL = Абердін (ЕНІАК перевезли туди 1947 р.), дата «бл. 1947–1955» → у cap: «між 1947 і 1955 рр.», Меріленд.
- `jamala-2016.jpg` (l6 е1) — Commons «ESC2016 winner's press conference 04.jpg», Albin Olsson (Wikimedia Sverige), 15.05.2016, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:ESC2016_winner's_press_conference_04.jpg ; мініатюра 960 px з thumb.wikimedia.org. На фото публічна особа на публічній події; приз (кришталевий мікрофон) — у кадрі.
Запити до Commons: 1 API (429), 3 сторінки файлів через WebFetch, 2 мініатюри thumb (пауза 20 с).

### Факти й джерела
Позначка «[URL-покажчик, сторінку не відкривав]» — загальновідомий факт, сторінку в сесії не відкрито (ліміти/економія запитів): верифікатору звірити. Решту URL відкрито або взято з пошукової видачі з цитатою.
**l1.** Пряма лінія 1963 — у w11s1l5. Договір про заборону випробувань в атмосфері, космосі й під водою 1963 (США, СРСР, Британія) — https://history.state.gov/milestones/1961-1968/limited-ban [URL-покажчик, сторінку не відкривав] ; ДНЯЗ 1968 — https://disarmament.unoda.org/wmd/nuclear/npt/ [URL-покажчик, сторінку не відкривав] . Розрядка, причини (дорога гонка, В'єтнам «going badly», розкол СРСР—Китай), Гельсінкі, кінець розрядки через Афганістан 1979, бойкот 1980 — https://history.state.gov/milestones/1969-1976/detente ; https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan . ОСО-1 / ПРО — Москва, 26.05.1972, Ніксон і Брежнєв — https://history.state.gov/historicaldocuments/frus1969-76v32/d316 ; https://nuke.fas.org/control/salt1/intro.htm (History.com дає 27.05 — помилка). Заключний акт: НБСЄ відкрита 3.07.1973 (Гельсінкі), Женева 1973–1975, підписано 1.08.1975 представниками 35 держав (33 європейські + США й Канада; список у тексті акта), 10 принципів (III — непорушність кордонів, IV — територіальна цілісність, VII — права людини), «not eligible for registration under Article 102» → не міжнародний договір — текст акта https://www.osce.org/files/f/documents/5/c/39501.pdf (+ facts/hist №197). Переклади принципів III (не вжито), VII (вжито, обірвано «…») — мої з англійського тексту. УГГ 9.11.1976, десять засновників, Руденко — facts/hist №197. В'єтнам: виведення військ США 1973, Сайгон 30.04.1975 — https://history.state.gov/milestones/1969-1976/ending-vietnam [URL-покажчик, сторінку не відкривав] . Афганістан: вторгнення наприкінці грудня 1979, виведення 1989 (15.02.1989) — state.gov (вище); дата виведення — загальновідома, другий URL верифікатору.
**l2.** «Однополярний момент» — Ч. Краутгаммер, Foreign Affairs 1990/91 — https://www.foreignaffairs.com/articles/1990-01-01/unipolar-moment [URL-покажчик, сторінку не відкривав] . Кувейт: Ірак — 2.08.1990, рез. РБ ООН 678 (29.11.1990), звільнення лютий 1991 — https://history.state.gov/milestones/1989-1992/gulf-war [URL-покажчик, сторінку не відкривав] . Косово: операція НАТО 24.03–10.06.1999, 78 днів — https://www.nato.int/cps/en/natohq/topics_49602.htm ; без мандата РБ — https://www.bpb.de/themen/internationale-organisationen/nato/553435/nato-einsatz-im-kosovo/ . Євро готівкою з 1.01.2002 — https://www.ecb.europa.eu/euro/intro/html/index.en.html [URL-покажчик, сторінку не відкривав] . БРІК — перший саміт 16.06.2009 (Єкатеринбург), ПАР — з 2010/2011 («згодом») — https://www.nkibrics.ru/pages/summit-docs [URL-покажчик, сторінку не відкривав] (покажчик; перевірити) / en.wiki BRICS. G20 — перший саміт лідерів 14–15.11.2008, Вашингтон, 19 держав + ЄС — https://g20.utoronto.ca/2008/2008announcement.html . Частки світового ВВП (поточні дол. США, World Bank NY.GDP.MKTP.CD, отримано 12.11.2026): 1990 — США 5,96 / світ 22,99 трлн (25,9 %), Китай 0,36 (1,6 %); 2024 — США 29,30 / світ 111,67 (26,2 %), Китай 18,73 (16,8 %) — https://api.worldbank.org/v2/country/USA;CHN;WLD/indicator/NY.GDP.MKTP.CD?date=1990:2024&format=json . Китай — друга економіка 2010 — w11s5l2.
**l3.** Визначення — робоче, за описом РБ ООН 1566 (2004) п. 3 (акти проти цивільних з метою посіяти терор / змусити уряд) — https://press.un.org/en/2004/sc8214.doc.htm ; єдиного визначення немає — https://www.unodc.org/e4j/en/terrorism/module-4/key-issues/defining-terrorism.html . Мюнхен 5–6.09.1972, «Чорний вересень», загинули 11 членів ізраїльської команди (спортсмени й тренери) і німецький поліцейський — https://www.jewishvirtuallibrary.org/background-and-overview-munich-olympic-massacer ; https://www.encyclopedia.com/politics/energy-government-and-defense-magazines/munich-olympics-and-black-september (Britannica 403). 11.09.2001: 19 терористів «Аль-Каїди», 4 літаки, 2977 загиблих (без терористів) → «майже 3 тис.» — https://www.911memorial.org/911-faqs [URL-покажчик, сторінку не відкривав] ; https://9-11commission.gov/report/ [URL-покажчик, сторінку не відкривав] (пасажири рейсу 93). Стаття 5 НАТО — уперше й єдиний раз після 11.09 — https://www.nato.int/cps/en/natohq/topics_110496.htm (рішення 12.09.2001). S/RES/1373, 28.09.2001, п. 1 a), c) — PDF вище (переклад мій). Операція з 7.10.2001; бен Ладен убитий у Пакистані 2.05.2011; «Талібан» узяв Кабул 15.08.2021, вихід військ США — серпень 2021 — https://www.cfr.org/timeline/us-war-afghanistan [URL-покажчик, сторінку не відкривав] . Мадрид 11.03.2004, Лондон 7.07.2005, Париж 13.11.2015 — без чисел (загальновідомі; URL — верифікатору). ІДІЛ 2014 — w11s5l4.
**l4.** Пригадай — facts/hist №211–214 (формулювання: Крим «тимчасово окупований з 20.02.2014»; угруповання, які підтримувала Росія, — квітень 2014; 24.02.2022). 68/262 — 27.03.2014 (№212). Гаазька декларація G7 24.03.2014: саміт у Сочі скасовано, участь у G8 призупинено, червень 2014 — Брюссель у форматі G7 — https://www.g7.utoronto.ca/summit/2014brussels/hague-declaration.pdf ; https://www.aljazeera.com/news/2014/3/24/g7-nations-suspend-russia-and-scrap-g8-summit . Росія — головний постачальник нафти й газу ЄС до кінця 2021 — https://ec.europa.eu/eurostat/statistics-explained/index.php/EU_imports_of_energy_products_-_latest_developments . Вето Росії 25.02.2022 (11 «за», Китай, Індія, ОАЕ утрималися) — https://news.un.org/en/story/2022/02/1112802 . ES-11/1: 141 / 5 / 35 — https://www.un.org/pga/76/2022/03/02/press-briefing-by-spokesperson-2-march-2022 ; https://www.eeas.europa.eu/eeas/un-general-assembly-demands-russian-federation-withdraw-all-military-forces-territory-ukraine_und_hr ; facts/hist №214. Проти: Росія, Білорусь, Еритрея, КНДР, Сирія. ЦБ Росії — заборона операцій 28.02.2022 — https://home.treasury.gov/news/press-releases/jy0612 (ЄС — того ж дня, рішення Ради; у тексті — «США та ЄС заборонили операції»). «Рамштайн»: 26.04.2022, міністри оборони й військові «понад 40» (підпис DoD) / 39–41 (вікі) держав → «близько 40»; щомісячна контактна група — https://www.globalsecurity.org/wmd/library/news/ukraine/2022/04/ukraine-220426-dod02.htm ; https://www.dvidshub.net/image/7160837 . Тимчасовий захист: рішення Ради ЄС 2022/382 від 4.03.2022, перше застосування директиви 2001/55/ЄС — https://eur-lex.europa.eu/eli/dec_impl/2022/382/oj/eng . Кандидат — 23.06.2022; переговори — перша міжурядова конференція 25.06.2024 — https://enlargement.ec.europa.eu/news/eu-opens-accession-negotiations-ukraine-2024-06-25_en ; https://www.kmu.gov.ua/en/news/ukraina-ofitsiino-rozpochala-peremovyny-pro-vstup-z-ies . МКС 17.03.2023: ордери Путіну й Львовій-Бєловій, воєнний злочин незаконної депортації дітей з окупованих територій до РФ — https://news.un.org/en/story/2023/03/1134732 ; https://www.jurist.org/news/2023/03/icc-issues-arrest-warrant-against-putin-for-forced-deportation-of-ukrainian-children/ (icc-cpi.int — 403); формулювання «підозрюють», «вину встановлює суд» — facts/hist №220. «Недієвість політики умиротворення агресора» — формула програми МОН 11 кл., Р5 (reports/verify/plan-world-g10-11.md, П22 — https://edumedia-depot.gei.de/bitstreams/450c6016-4759-423a-b29e-2a263b384cac/download). Грузія 2008 — w11s4l5.
**l5.** ЕНІАК — показ 14/15.02.1946, близько 18 тис. ламп — https://www.seas.upenn.edu/about/history-heritage/eniac/ ; https://ethw.org/Milestones:Electronic_Numerical_Integrator_and_Computer,_1946 (вагу не подавав: 30 short tons ≈ 27 т). МЕСМ: Київ (Феофанія), команда С. Лебедєва, регулярна робота 1951 р., офіційно прийнята 25.12.1951, «перша в СРСР» — https://www.computerhistory.org/revolution/birth-of-the-computer/4/92/2376 ; https://i-programmer.info/news/82-heritage/3533-on-this-day-in-1951-mesm-formally-recognised.html . «Перша в континентальній Європі» — поширене, але не взяв (CHM цього не каже). Супутник 1957 — w11s3. Місяць 20.07.1969 — https://www.nasa.gov/history/50-years-ago-the-apollo-11-landing/ [URL-покажчик, сторінку не відкривав] (загальновідоме). ARPANET 1969 (перше повідомлення 29.10.1969) — https://www.computerhistory.org/internethistory/1960s/ [URL-покажчик, сторінку не відкривав] . WWW: пропозиція березень 1989, 30.04.1993 — вільний доступ — https://home.cern/science/computing/birth-web/short-history-web [URL-покажчик, сторінку не відкривав] ; https://home.cern/news/news/computing/twenty-years-free-open-web . ITU 2025: ≈ 6 млрд (≈ 3/4 людства), висок. дохід 94 %, низьк. 23 % — https://www.itu.int/en/mediacentre/Pages/PR-2025-11-17-Facts-and-Figures.aspx . Белл, «The Coming of Post-Industrial Society», 1973: більшість у послугах, теоретичне знання — головний ресурс; термін він популяризував, не вигадав (у тексті — «описав») — https://ctse.aei.org/the-arrival-of-post-industrial-society/ ; https://www.britannica.com/money/postindustrial-society (403). Зайнятість у с. г., світ (оцінки МОП, WB SL.AGR.EMPL.ZS, оновлено 11.11.2026): 1991 — 42,8 %, 2024 — 26,1 % → «близько 43 / 26 %» — https://api.worldbank.org/v2/country/WLD/indicator/SL.AGR.EMPL.ZS?format=json . Частку послуг API не віддав (502/обрив) — у тексті не подаю.
**l6.** Джамала, «1944», перемога 14.05.2016, Стокгольм; пісня про депортацію кримських татар 1944 р., серед них прабабуся — https://ebu.ch/news/2016/05/ukraine-wins-61st-eurovision-son ; https://www.cbc.ca/news/world/eurovision-ukraine-jamala-1.3582962 [URL-покажчик, сторінку не відкривав] (CBC). Депортація 18–20.05.1944 — facts/hist №191 (число не подавав). Борщ: 5.EXT.COM 5, 1.07.2022, Список НКС, що потребує термінової охорони; «спільна з іншими громадами регіону, не дає виключності» — https://ich.unesco.org/en/decisions/5.EXT.COM/5 ; https://www.aljazeera.com/news/2022/7/1/unesco-ukraine-borshch . Одеса: 25.01.2023, Список всесвітньої спадщини + під загрозою (18 EXT.COM 5.2) — https://ukraine.un.org/en/node/216762 ; https://whc.unesco.org/en/decisions/8048 . Бойкот Москви 1980 — l1. МОК 28.02.2022 — рекомендація не допускати спортсменів РФ і Білорусі до міжнародних змагань; Париж 2024 — лише як «індивідуальні нейтральні спортсмени» (AIN), без прапора, гімну й команд — https://www.npr.org/2023/07/14/1187641752/ioc-not-invite-russia-and-belarus-to-2024-olympics ; https://sportcal.com/news/ioc-russian-belarusian-athletes-can-compete-at-paris-2024-as-neutrals ; olympics.com (перевірити верифікатору: «без командних видів» — за рішенням МОК 8.12.2023). Політичний нейтралітет — Олімпійська хартія, фундаментальний принцип 5.

### Спірні місця / для верифікатора
- l1 е1: «керівники США, СРСР і ще 33 держав» — разом 35 ✓. Таблички на фото: «Rép. Féd. …» (обрізано), «Rép. Dém. Allemande», «Etats-Unis d'Amérique».
- l1 е6 (photo choice): опора — е5 («визнання кордонів, що склалися після війни») + Пригадай про поділ Німеччини; об'єднання 1990 — лише у fbText (w11s4).
- l2 «однополярний момент» — образ Краутгаммера, подано як оцінку оглядача.
- l3 визначення тероризму — робоче, зведене з РБ 1566 п. 3; явно сказано, що єдиного визначення в ООН немає.
- l4 «Росія, як і СРСР, — учасниця Гельсінського акта» — Росія — держава-учасниця ОБСЄ, правонаступниця зобов'язань СРСР; у multi оцінюється лише, які принципи (III, IV) порушує окупація.
- l4 «Група семи» перестала зустрічатися з Росією» — спрощення «призупинила участь у G8».
- l4 фінальне choice: «недієвість політики умиротворення» подано як формулу програми, не як авторську оцінку.
- l6: «без командних видів» — перевірити за рішенням МОК (AIN: лише індивідуальні види).
- Умовна опора: l1 е4 (sort) ← е3; l2 е6–е7 ← дані на екрані; l3 е5 (choice) ← е4; l4 е5 (multi) ← w11s6l1 е5/е7; l4 е8 (veto) ← е6 + w11s1 (право вето); l5 е4 (МЕСМ) ← е1, е3; boss — по одному завданню на урок, `pre` на кожному.

### Пропозиції
- TERM (glossary/world): розрядка; НБСЄ / Заключний акт; ДНЯЗ; однополярний / багатополярний світ; «Група двадцяти», «Група семи» / «Група восьми»; БРІК(С); «Аль-Каїда», «Талібан», «Чорний вересень»; «Рамштайн» (формат); тимчасовий захист; НТР (для другої половини XX ст. — та сама назва, що й у w9s5); постіндустріальне (інформаційне) суспільство; ЕНІАК, МЕСМ, ARPANET, всесвітня павутина (WWW), ЦЕРН; цифровий розрив; масова культура; «індивідуальні нейтральні спортсмени». Імена: Чарлз Краутгаммер, Деніел Белл, Тім Бернерс-Лі, Сергій Лебедєв, Усама бен Ладен, Марія Львова-Бєлова, Джамала, Глен Бек, Бетті Снайдер.
- Нагадування оркестратору: build після пакета (нові файли img/world/w11s6/ потраплять у sw.js). `stats`/`validate` перезаписали reports/style-world.md і reports/validate.json.
