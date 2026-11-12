---
claimed_from: review
claimed_at: 2026-11-12T04:19:51.074Z
id: write-world-w11s5
type: write-section
subject: world
grade: 11
section: w11s5
weeks: [22, 29]
status: review
claimed_by: verifier-w11s5
created: 2026-11-10
---
# Написати розділ «Азія, Африка й Латинська Америка» (Всесвітня історія, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як колонії стали незалежними державами, як Японія, Південна Корея й Китай стали економічними велетнями й чому Близький Схід лишається гарячою точкою.

## Теми уроків (з плану)
1. Японія й Південна Корея: «економічне диво»
2. Китай: від Мао до Ден Сяопіна
3. Індія й Пакистан
4. Ізраїль і Близький Схід
5. Африка: деколонізація й кінець апартеїду
6. Латинська Америка: Куба, диктатури, демократії
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
- Файл `content/world/g11-w11s5.js` з `SLID.section("world", { id: "w11s5", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w11s5/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w11s5` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (w-write-world-w11s5, 2026-11-11/12)
Файл `content/world/g11-w11s5.js`, 7 уроків (усі `draft`): l1 «Диво після поразки» (Японія й Південна Корея, 11 екр.), l2 «Від «стрибка» до ринку» (КНР, 10), l3 «Свобода й поділ» (Індія й Пакистан, 9), l4 «Одна земля, два народи» (Ізраїль, Іран, «арабська весна», ІДІЛ, 10), l5 «Пляж лише для білих» (деколонізація Африки, апартеїд, 9), l6 «Острів, генерали й вибори» (Куба, Чилі, Аргентина, 10), l7 «Атлас трьох континентів» (boss, 7, значок `threecontinents`, `pre` на кожному завданні).
`requires`: w9s4l4, w9s4l5, w10s6l2, w10s6l3, w11s1l2, w11s1l5, g11s2l4 (усі існують). «Україна у світі» (`link`): l4 е3 (голос УРСР за резолюцію 181 → w11s1l2; Голда Меїр з Києва — лише в info l4 е4), l6 е5 (діти Чорнобиля в Тарарі → hist g11s2l4). hist g11s4–s5 не дубльовано.
validate --section w11s5: 0 помилок, 0 попереджень. euphony --section w11s5: 0. stats: усі 7 уроків без прапорців.

### Зображення (D-027; 7 файлів у img/world/w11s5/, мініатюри thumb.wikimedia.org 960 px; ліцензію перевірено на сторінці файлу Commons)
- l1 → macarthur-hirohito-1945.jpg — Gaetano Faillace, армія США, PD-USGov-Military-Army — https://commons.wikimedia.org/wiki/File:Macarthur_hirohito.jpg
- l2 → nixon-mao-1972.jpg — White House Photo Office, NARA 194759, PD-USGov — https://commons.wikimedia.org/wiki/File:President_Nixon_meets_with_China%27s_Communist_Party_Leader,_Mao_Tse-_Tung,_02-29-1972_-_NARA_-_194759.tif . **Хибна дата Commons/NARA (02-29-1972):** Ніксон зустрічався з Мао 21.02.1972 (history.state.gov/milestones/1969-1976/rapprochement-china — підпис фото «Beijing, February 21, 1972», Nixon Library; Wilson Center). У cap — 21.02.
- l2 → deng-carter-1979.jpg — Carter White House photographers, NARA 183157, PD-USGov — https://commons.wikimedia.org/wiki/File:Deng_Xiaoping_and_Jimmy_Carter_at_the_arrival_ceremony_for_the_Vice_Premier_of_China._-_NARA_-_183157-restored.jpg
- l3, l7 → kashmir-map-2003.jpg — CIA, «Kashmir region» 2003 (LOC G7653.J3 2003 .U51), PD-USGov-CIA-WF — https://commons.wikimedia.org/wiki/File:Kashmir_map.jpg
- l4, l7 → oslo-1993.jpg — Vince Musi, Білий дім, 13.09.1993, PD-USGov-POTUS — https://commons.wikimedia.org/wiki/File:Bill_Clinton,_Yitzhak_Rabin,_Yasser_Arafat_at_the_White_House_1993-09-13.jpg
- l5 → durban-sign-1989.jpg — Guinnog (власне фото, en.wiki), CC BY-SA 3.0 / GFDL — https://commons.wikimedia.org/wiki/File:DurbanSign1989.jpg . Обрізано (фрагмент, позначено в credits): прибрано дитину на задньому плані. Дата 1989 — за даними автора фото.
- l6 → castro-washington-1959.jpg — фотограф U.S. News & World Report (ім'я не встановлено; Commons: «lacking author»), LOC LC-U9-2315-6, PD (колекція USN&WR, «no known restrictions») — https://commons.wikimedia.org/wiki/File:Fidel_Castro_-_MATS_Terminal_Washington_1959.jpg . Дата 15.04.1959 — LOC через Commons; візит Кастро до США у квітні 1959 — CVCE https://webintra.cvce.eu/en/obj/fidel_castro_visits_the_usa_24_april_1959-en-ce08c1bb-7356-49d6-b529-7e7ff33f6cc9.html
- Ліцензії: усі PD уряду США або CC BY-SA від автора — придатні і для країни походження, і для США. Відкинуто: «Golpe de Estado 1973.jpg» (BCN CC BY 3.0 CL, але фото з журналу Ercilla 1973 — Memoria Chilena позначає «obra protegida»); індійські фото 1947 р. (PD-India + URAA-відновлення в США).

### Факти з джерелами (≥ 2 на кожен)
- Конституція Японії: проголошено 3.11.1946, чинна 3.05.1947; ст. 1 — імператор «символ держави»; ст. 9 — «forever renounce war as a sovereign right of the nation» — https://www.ndl.go.jp/constitution/e/ronten/02ronten.html ; https://www.shugiin.go.jp/internet/itdb_english.nsf/html/statics/english/constitution_e.htm ; окупація до 1952 р.
- Японія: зростання ≈ 10 % на рік у 1950–1960-х; 1968 — ВНП більший за ФРН, друга економіка капіталістичного світу — https://aboutjapan.japansociety.org/content.cfm/the_political_economy_of_high-growth-era_japan ; https://ageconsearch.umn.edu/record/28487 (Hamada, Yale); Олімпіада й «Сінкансен» 1964 (JR Central / olympics.com — загальновідомо, звірити верифікатору).
- Пак Чон Хі: переворот 16.05.1961; перший п'ятирічний план 1962–1966; загинув 1979 — https://www.koreatimes.co.kr/amp/southkorea/20100516/century-gen-park-chung-hees-may-16-coup-and-rise-of-military-regime ; https://countrystudies.us/south-korea/47.htm . Червень 1987 (10–29.06), прямі вибори 16.12.1987 — https://www.koreatimes.co.kr/amp/opinion/20120628/revisiting-june-29-in-1987 ; https://en.wikipedia.org/wiki/June_Democratic_Struggle
- ВВП на особу (current US$, Світовий банк NY.GDP.PCAP.CD): Корея 1960 — 159, 2024 — 36 239; Гана 1960 — 175, 2024 — 2419; Китай 1978 — 157, 2024 — 13 293 — https://api.worldbank.org/v2/country/KOR;GHA;CHN/indicator/NY.GDP.PCAP.CD?format=json&date=1960:2024 ; https://data.worldbank.org/indicator/NY.GDP.PCAP.CD . Китай обігнав Японію 2010 (номінальний ВВП) — https://www.chinadaily.com.cn/a/201311/15/WS5a2a1e38a3101a51ddf8ebe0.html ; en.wiki Chinese economic reform.
- Ніксон — Мао 21.02.1972 (див. вище) — https://history.state.gov/milestones/1969-1976/rapprochement-china ; https://wilsoncenter.org/blog-post/why-did-mao-shake-hands-nixon-good-americans-bad-americans-and-us-china-rapprochement
- Голод 1959–1961: оцінки від 15 до 45 млн (Дікеттер ≥ 45, Ян Цзішен 36, демографи 15–32) — https://www.lrb.co.uk/v34/n23/james-c-scott/tyranny-of-the-ladle ; https://chinadigitaltimes.net/2010/12/frank-dikkotter-maos-great-leap-to-famine/ ; https://www.scmp.com/article/723956/revisiting-calamitous-time
- Резолюція ЦК КПК 27.06.1981, § 19 (переклад у l2 е6; середина речення пропущена «…», дати винесено в супровідне речення) — Peking Review 1981 № 27 https://www.marxists.org/subject/china/peking-review/1981/PR1981-27.pdf ; § 22 — головна відповідальність Мао; https://en.wikipedia.org/wiki/Resolution_on_Certain_Questions_in_the_History_of_Our_Party_since_the_Founding_of_the_People%27s_Republic_of_China
- III пленум ЦК КПК 18–22.12.1978; Шеньчжень — СЕЗ (Шекоу 1979, СЕЗ до 1981) — chinadaily (вище); https://newsinfo.inquirer.net/1064261/how-china-opened-its-doors-to-world . Тяньаньмень 4.06.1989: від кількох сотень до кількох тисяч (офіційного числа немає) — https://www.rferl.org/a/china-tiananmen-democracy-movement-politics/25409013.html ; https://content.time.com/time/specials/packages/article/0,28804,2047066_2047070_2047084,00.html
- Поділ Індії: 14/15.08.1947; переселено 10–20 млн; загиблі 200 тис. — 2 млн — https://www.britannica.com/event/Partition-of-India (через пошук, 403) ; https://en.wikipedia.org/wiki/Partition_of_India ; https://www.globalsecurity.org/military/world/war/indo-pak-partition2.htm . Ганді — 30.01.1948; конституція 26.01.1950; Бангладеш 1971; ядерні випробування 1998; Індія > Китай за населенням 2023 (UN DESA) — загальновідомі, звірити верифікатору.
- Резолюція ГА ООН 181 (29.11.1947): 33 «за» (зокрема УРСР, СРСР, США), 13 «проти», 10 утрималися — https://digitallibrary.un.org/record/671195 ; https://fanack.com/israel/history-of-israel/the-way-to-partition/united-nations-partition-plan-for-palestine-resolution-181/ ; https://ijs.org.au/partition-resolution-1947/
- Ізраїль 14.05.1948; біженці 1948 — близько 700 тис. (оцінки 550–800 тис.; UNRWA ≈ 750 тис.) — https://www.un.org/unispal/document/auto-insert-204463 ; https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/refugees-palestinian . Голда Меїр — нар. 3.05.1898 у Києві, прем'єр 1969–1974 — https://embassies.gov.il/MFA/AboutIsrael/state/Pages/Golda%20Meir.aspx ; https://www.encyclopedia.com/politics/dictionaries-thesauruses-pictures-and-press-releases/meir-golda-golda-myerson-born
- Шестиденна війна 5–10.06.1967 (Синай, Газа, Західний берег, Сх. Єрусалим, Голани) — https://webarchive.library.unt.edu/web/20121016192609/http://history.state.gov/milestones/1961-1968/ArabIsraeliWar67 ; https://www.jewishvirtuallibrary.org/u-s-state-department-summary-of-the-six-day-war . Мир Єгипту з Ізраїлем 26.03.1979, Синай повернуто 1982. Осло 13.09.1993; питання постійного статусу відкладено — https://history.state.gov/milestones/1993-2000/oslo ; https://catalog.archives.gov.il/site/en/chapter/chapter-1-from-declaration-to-reality-september-1993-january-1994 . Рабін убитий 4.11.1995 ізраїльським противником угод.
- Іран: Хомейні повернувся 1.02.1979, референдум 30–31.03, Ісламська Республіка — https://www.brookings.edu/articles/the-iranian-revolution-a-timeline-of-events ; https://www.rferl.org/a/iran-politics-revolution/29752729.html . «Арабська весна»: Буазізі 17.12.2010, Бен Алі 14.01.2011, Мубарак 11.02.2011 — https://www.aljazeera.com/news/2020/12/17/what-is-the-arab-spring-and-how-did-it-start ; https://english.aawsat.com/home/article/2688476/arab-spring-timeline . ІДІЛ «халіфат» 29.06.2014; Багуз 23.03.2019 — https://www.voanews.com/a/islamic-state-defeated-syrian-force-says/4844955.html ; https://japantimes.co.jp/news/2019/03/23/world/u-s-backed-forces-syria-declare-islamic-state-defeated-caliphate-eliminated . 7.10.2023 — напад ХАМАС (≈ 1200 загиблих, 251 заручник — AFP; у тексті без чисел) — https://news.un.org/en/story/2024/10/1155421 ; https://press.un.org/2023/sc15462.doc.htm
- «Рік Африки» 1960 — 17 країн — https://guardian.ng/?p=1085414 ; https://y-history.net/appendix/wh1603-018.html . Гана 6.03.1957; Алжир 1954–1962 — https://africarenewal.un.org/en/magazine/wind-change-transformed-continent ; https://www.britannica.com/topic/list-of-African-Countries-Independence-Dates (пошук). Резолюція 1514 (XV) 14.12.1960: 89–0–9; утрималися Австралія, Бельгія, Домініканська Республіка, Франція, Португалія, Іспанія, ПАР, Британія, США — https://un-project.org/votes/resolution/A-RES-1514(XV)/ ; https://en.wikisource.org/wiki/United_Nations_General_Assembly_Resolution_1514 ; https://digitallibrary.un.org/record/662085
- Шарпевіль 21.03.1960: 69 загиблих; ГА ООН 2142 (XXI) 26.10.1966 — Міжнародний день; у ПАР — День прав людини — https://www.gov.za/node/810078 ; https://humanrights.ca/node/501 . Мандела: вирок 12.06.1964, звільнення 11.02.1990, Нобелівська 1993 з де Клерком, президент 10.05.1994; вибори 27.04.1994 — https://www.nelsonmandela.org/content/page/biography ; https://sahistory.org.za/dated-event/south-africas-first-democratic-elections . Апартеїд з 1948 (Національна партія) — загальновідомо, верифікатору звірити (напр. sahistory.org.za).
- Куба: 1.01.1959; затока Свиней 17.04.1961, ≈ 1400 емігрантів — https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/the-bay-of-pigs ; https://www.globalsecurity.org/military/world/war/bayofpigs.htm . Тарара 1990–2011: понад 25 тис. дітей (CNN Chile), 26 114 пацієнтів, 84 % діти (Nucleus 2019) — у тексті «понад 20 тис. дітей, за кубинськими даними» — https://www.cnnchile.com/mundo/cuba-salud-chernobyl-ninos/ ; https://doaj.org/article/550c9bf605fc4b6baa3e300ed622bb31
- Чилі: Альєнде 1970; переворот 11.09.1973; 3065 убитих і зниклих, 40 018 визнаних жертв (2011) — https://en.mercopress.com/2011/08/19/pinochet-s-regime-official-victims-list-increased-by-9.800-to-40.018 ; https://cambridge.org/core/books/latin-american-experiences-with-truth-commission-recommendations-beyond-words-vol-ii/chiles-rettig-and-valech-commissions-truth-and-reparation-under-the-sign-of-reconciliation/7A541CAC3C0AEE35E0592E5B51813965 . Референдум 5.10.1988, «ні» 55,99 %; Ейлвін 11.03.1990 — https://en.wikipedia.org/wiki/1988_Chilean_presidential_referendum ; https://www.globalsecurity.org/military/world/chile/politics-1989.htm
- Аргентина: хунта 1976–1983; CONADEP 1984 — 8961 зниклий, правозахисники — до 30 тис. — https://icmp.int/the-missing/where-are-the-missing/argentina/ ; https://chequeado.com/el-explicador/la-cifra-de-los-desaparecidos-durante-la-ultima-dictadura-militar-cual-es-el-origen-de-los-datos-disponibles/ . Фолкленди 1982, Альфонсін 1983, Бразилія 1985 — загальновідомі.

### Сумнівні місця / для верифікатора
- l2 е6: цитата § 19 з пропуском «…» (дати винесено в супровідне речення) — звір, чи не спотворено зміст.
- l5 е4: правильний варіант «мали колонії або правили країною меншістю» — частина про ПАР подається докладно лише на е5; колоніальну частину учень знає з w9s4 (поділ Африки) — цього досить для відповіді.
- l1 е11 і l7 е2 fbText: «нафту Японія купує» — пояснення до дистрактора, не оцінюваний факт.
- «Сінкансен» 1.10.1964, конституція Індії 26.01.1950, Бангладеш 1971, ядерні випробування 1998, Рабін 4.11.1995, апартеїд 1948 — перевірені пошуком частково; прошу звірити.
- Тарара: числа різняться (понад 25 тис. дітей / 26 114 пацієнтів) — дав нижню межу «понад 20 тис. дітей» з атрибуцією.
