---
claimed_from: todo
claimed_at: 2026-11-11T12:34:34.005Z
id: write-world-w11s4
type: write-section
subject: world
grade: 11
section: w11s4
weeks: [18, 21]
status: done
claimed_by: w-write-world-w11s4
created: 2026-11-10
---
# Написати розділ «Падіння комунізму й нова Європа» (Всесвітня історія, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як упав Берлінський мур, розпалися СРСР і Югославія й чому сусіди України пішли до НАТО і ЄС.

## Теми уроків (з плану)
1. Перебудова в СРСР
2. 1989: «оксамитові революції» й Берлінський мур
3. Розпад СРСР, Югославії й Чехословаччини
4. Центрально-Східна Європа у НАТО і ЄС
5. Росія: від імперії до експансії
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

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
- Файл `content/world/g11-w11s4.js` з `SLID.section("world", { id: "w11s4", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w11s4/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w11s4` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**write-world-w11s4, 2026-11-11.** Файл `content/world/g11-w11s4.js`: 6 уроків, усі `draft`. `requires`: g11s2l3, g11s3l1, w11s3l6 (наявні). Значок `neweurope`. validate --section w11s4 — 0 помилок, 0 попереджень; stats — без прапорців; euphony — чисто.
- l1 «Перебудувати, не зламавши» (перебудова, гласність, Чорнобиль-link, РСМД 1987, ст. 6) · l2 «Рік, коли впали стіни» (Польща, Угорщина, мур, Чехословаччина, Румунія, «доктрина Сінатри», link — Рух 1989) · l3 «Три розлучення» (Балтійський шлях, Литва, серпень 1991, Біловезька угода, Алма-Ата, Югославія, «оксамитове розлучення») · l4 «Повернення до Європи» (Вишеград, Копенгагенські критерії, НАТО 1999/2004, ЄС 2004/2007/2013, Фінляндія/Швеція) · l5 «Імперія, яка не відпустила» (1993, Чечня, Путін 2005, Грузія 2008, Будапештський меморандум, 2014/2022 — коротко, з посиланням на hist g11s5) · l6 boss «Архів кінця епохи» (6 завдань, pre l1–l5; l3 двічі — різні боки теми).
- Незалежність України НЕ дублюється: лише «Пригадай» (facts/hist №198, 200, 201, 203, 204, 211–214).

### Зображення (img/world/w11s4/, мініатюри thumb.wikimedia.org; ліцензії — зі сторінок файлів)
- l1 inf-treaty-1987.jpg — Reagan_and_Gorbachev_signing.jpg, PD-USGov-POTUS (NARA 198588)
- l2, l6 berlin-wall-1989.jpg — BerlinWall-BrandenburgGate.jpg, Sue Ream, CC BY 3.0. Дата на Commons «9.11.1989» сама позначена як сумнівна (денне фото) → у `cap` «листопад 1989 р.»
- l3 baltic-way-1989.jpg — Baltic_Way_in_Latvia_near_Krekava.jpeg, Uldis Pinka (Europeana 1989), CC BY-SA 4.0
- l3, l6 viskuli-1991.jpg — RIAN_archive_848095…, Ю. Іванов, CC BY-SA 3.0
- l4 visegrad-1991.jpg — Foundation_of_the_Visegrád_Group.tiff, Péter Antall, CC BY-SA 3.0 (VRT #2015061810009991). Анотація Commons «Mikuláš Dzurinda» на фото 1991 р. сумнівна — у `cap` лише Гавел, Анталл, Валенса.
- l5 grozny-1995.jpg — Evstafiev-chechnya-palace-gunman.jpg, CC BY-SA 3.0 / 2.5 / GFDL (VRT #2009060910022281); фігура бійця — силует, без жертв.
- l5, l6 budapest-memorandum-1994.jpg — рендер с. 2 документа ООН A/49/765 (pdftoppm, кадровано), суспільне надбання (документ ООН із символом).
- Відкинуто: Berlinermauer.jpg (графіті Т. Нуара — живий автор); Bundesarchiv 183-1989-1118-028 (дата 10 vs 18.11 у описі/номері).

### Факти з джерелами (нові для facts/world.md)
1. Горбачов — генсек 11.03.1985; кооперативи 1988; ст. 6 Конституції СРСР вилучено в березні 1990 (14 чи 15.03 — різниться, в уроці лише «березень») — https://en.wikipedia.org/wiki/Leading_role_of_the_party ; https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/article-6-1977-constitution
2. РСМД 8.12.1987; знищено до 31.05/1.06.1991: США 846, СРСР 1846 ракет — https://usinfo.org/usia/usinfo.state.gov/topical/pol/arms/stories/01051701.htm ; https://www.armscontrol.org/factsheets/inf-treaty-glance ; Commons NARA 198588. Виведення військ з Афганістану 15.02.1989 — загальновідоме, верифікатору звірити.
3. Польща: «круглий стіл» 6.02–5.04.1989; 65 % місць Сейму — ПОРП і союзникам (299 з 460), «Солідарність» — усі 161 вільне місце і 99/100 у Сенаті; Мазовецький — 24.08.1989, перший некомуністичний голова уряду в радянському блоці — https://enrs.eu/article/first-partially-free-elections-in-the-soviet-bloc-poland-1989 ; https://ipn.gov.pl/en/news/4206,The-elections-of-4-June-1989-The-defeat-of-the-communist-system-and-the-triumph-.html ; https://en.wikipedia.org/wiki/Tadeusz_Mazowiecki
4. Угорщина: 2.05.1989 почала розбирати паркан (дехто — 4.05; в уроці «травень»), 10/11.09.1989 відкрила кордон для громадян НДР (в уроці «вересень») — https://www.rferl.org/a/hungary-1989-east-germany/30156892.html ; https://en.wikipedia.org/wiki/Removal_of_Hungary%27s_border_fence_with_Austria
5. «Доктрина Сінатри» — Г. Герасимов, 25.10.1989 (місце — Гельсінкі чи ТВ — різниться; в уроці «у жовтні», переказ, не цитата) — https://en.wikipedia.org/wiki/Sinatra_Doctrine
6. 9.11.1989 мур; 17.11.1989 Прага; Гавел — 29.12.1989; Чаушеску страчено 25.12.1989; Живков — 10.11.1989 (в уроці не вжито) — https://www.britannica.com/topic/Velvet-Revolution ; https://libraries.indiana.edu/revolutions-1989-chronology ; https://www.rferl.org/a/Velvet_And_Blood_In_Eastern_Europes_Season_Of_Change/1870373.html . **«Понад тисячу загиблих» у Румунії — потребує перевірки верифікатором** (поширена цифра ≈ 1100; окремого другого джерела в сесії не відкрив).
7. Балтійський шлях 23.08.1989: ≈ 600 км (UNESCO-номінація; інші — 650–676 км), учасників — від понад 1 млн до ≈ 2 млн — https://unesco.lt/images/THE_BALTIC_WAY.pdf ; https://lithuania.lt/governance-in-lithuania/commemorating-35-years-since-the-baltic-way-a-symbol-of-unity-and-the-struggle-for-freedom/ ; https://en.wikipedia.org/wiki/Baltic_Way
8. Литва — 11.03.1990 (загальновідоме; звірити). Біловезька угода 8.12.1991: преамбула «Союз ССР как субъект международного права и геополитическая реальность прекращает свое существование» (переклад); ст. 5 — територіальна цілісність і недоторканність кордонів у межах СНД; підписи Шушкевич/Кебич, Єльцин/Бурбуліс, Кравчук/Фокін — https://rg.ru/1991/12/10/sng.html ; https://www.kommersant.ru/doc/301100 ; ст. 5 — https://news.obozrevatel.com/ukr/politics/30-rokiv-tomu-rozpavsya-srsr-yak-kravchuk-eltsin-ta-shushkevich-pidpisali-bilovezku-ugodu-istorichni-kadri.htm (zakon.rada.gov.ua 997_077 — 503, звірити). Алма-Ата 21.12.1991 — 11 республік; Горбачов — 25.12.1991 — https://bigenc.ru/c/belovezhskie-soglasheniia-1991-38fffa ; https://en.wikipedia.org/wiki/Alma-Ata_Protocol
9. Словенія й Хорватія — 25.06.1991; Сребрениця, липень 1995 — «близько 8 тис.» (джерела: «майже 8000» / «понад 8000» → в уроці «близько»), геноцид (МТКЮ Крстич 2001, МС ООН); Дейтон — парафовано 21.11, підписано в Парижі 14.12.1995 — https://www.britannica.com/event/Dayton-Accords ; https://www.justiceinfo.net/en/26457 ; Чехословаччина — 1.01.1993.
10. Вишеград 15.02.1991 — Commons (архів Анталл) + en.wiki «Enlargement of NATO». Копенгагенські критерії — червень 1993 — https://www.cvce.eu/content/publication/2004/4/20/ff7ff228-fa3b-4f89-b552-808f7eb2c5b3/publishable_en.pdf ; EUR-Lex. НАТО 12.03.1999 і 29.03.2004 — https://www.nato.int/cps/en/natohq/topics_52044.htm ; ЄС 1.05.2004 (15 → 25) — https://eur-lex.europa.eu/EN/legal-content/summary/the-2004-enlargement-the-challenge-of-a-25-member-eu.html ; Фінляндія 4.04.2023, Швеція 7.03.2024, заявки 18.05.2022 — https://www.nato.int/cps/en/natohq/topics_49594.htm ; CRS IN11949.
11. Росія: жовтень 1993 — танки обстріляли Білий дім (4.10); конституція — грудень 1993; Перша чеченська 12.1994–08.1996, друга з 1999; цивільних загиблих — оцінки 30–100 тис. → «десятки тисяч» — https://www.rferl.org/a/russia-players-1993-crisis/25125000.html ; https://sites.tufts.edu/atrocityendings/?p=98 ; https://www.globalsecurity.org/military/world/war/chechnya1.htm
12. Послання Путіна 25.04.2005: «…крушение Советского Союза было крупнейшей геополитической катастрофой века. Для российского же народа оно стало настоящей драмой. Десятки миллионов наших сограждан и соотечественников оказались за пределами российской территории» (в уроці — переклад) — https://base.garant.ru/188107/ (cp1251) ; https://www.rferl.org/a/1058630.html
13. Грузія: серпень 2008, визнання Абхазії й Південної Осетії 26.08.2008 — https://www.rferl.org/amp/timeline-russia-georgia/25068754.html ; https://history.com/this-day-in-history/5-day-long-russo-georgian-war-begins («20 % території» — не вжито).
14. Будапештський меморандум 5.12.1994, п. 1 — текст A/49/765 (documents.un.org).

### Опора D-019 (неочевидне)
- l1 е4 (Чорнобиль) — дати з facts/hist №198, 200 подано на екрані. l2 е8 — Народний рух (facts/hist №201) на екрані. l3 е2 — кольори прапорців описано в body; відповідь «СРСР» — міркування. l4 е7 — сусіди України названо на екрані, дати ЄС — е5. l5 е7 — дії Росії з е6; ст. 5 Біловезької угоди — l3 е5.
- Boss е3 — «доктрина Сінатри» лише у fbBad (подана в l2 е5).

### Спірне / для верифікатора
- Цифра загиблих у Румунії («понад тисячу»).
- Переклад цитат — власний (Біловезька угода, меморандум п. 1, Путін 2005), позначено «(переклад)».
- Чутливі теми: Сребрениця — одне речення без подробиць; фото Грозного без жертв.

## Верифікація (verifier-w11s4, 2026-11-11)
Придатний: 6/6 уроків verified, 12 правок тексту. Звіт reports/verify/w11s4.md. Для людини: офіційний український текст Біловезької угоди (zakon.rada 997_077 — 503) не звірено; переклад звірено з офіційною російською публікацією.
