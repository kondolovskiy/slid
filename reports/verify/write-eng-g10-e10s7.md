# Верифікація e10s7 «Ukraine and English-speaking countries» (eng, 10 кл.)

Верифікатор: verifier-e10s7, 2026-11-26. Скіл content-verify (+ розділ «Англійська»). Автор: writer-e10s7; розділ я не писав.
Файл: `content/eng/g10-e10s7.js`. Задача: `tasks/review/write-eng-g10-e10s7.md`.

**Вердикт:** 7 правок (дрібні, без зміни ключів), відкритих ❌ і ⚠️ немає → усі 7 уроків `verified`. `approved` може поставити лише людина.
Прогін: `validate --section e10s7` — 0 помилок, 0 попереджень; `stats --subject eng` — l1 longWordShare z = 2,1; l7 screens z = 2,1, sentenceWords z = 2,3, longWordShare z = 2 («нетипово для сім'ї» через малу сім'ю 10 кл.; межі профілю не перевищено — калібрувати в style-sync). Плейтест не запускав: Python-модуля playwright у контейнері немає — лише в CI (job `browser`).

Мережа: zakon.rada відкрився лише для КЗпП і Конституції (укр.); англ. переклад Конституції й Закон № 1207-VII повертали 503. Недоступні (403/DNS): president.gov.ua, kmu.gov.ua, ukrinform, digitallibrary.un.org, news.un.org, gov.uk, gov.scot, mygov.scot, legislation.gov.uk, rm.coe.int, wikisource, encyclopediaofukraine. Для них — WebSearch (сніпети й заголовки офіційних сторінок) плюс Вікіпедія. Вікіпедію беру лише як відправну точку (друге джерело), не як єдине.

## 1. Факти

| Твердження в уроці | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Ukraine is a republic (ст. 5); head of state — President (ст. 102); elected for 5 years (ст. 103) | Конституція, укр.: https://zakon.rada.gov.ua/laws/show/254к/96-вр/print («Україна є республікою», «Президент України є главою держави», «строком на п'ять років»); https://en.wikipedia.org/wiki/President_of_Ukraine («directly elected … for a five-year term») | ✅ |
| Capital — Kyiv (ст. 20) | zakon.rada (вище, «Столицею України є місто Київ»); facts/eng.md №13 | ✅ |
| Ст. 133: ARC, 24 oblasts, Kyiv і Sevastopol мають special status; oblasts поділено на raions | zakon.rada, ст. 133 ч. 1–3; https://en.wikipedia.org/wiki/Administrative_divisions_of_Ukraine («24 oblasts …, 1 autonomous republic and 2 cities with special status», 136 raions з 2020) | ✅ |
| Ст. 134: ARC — integral part of Ukraine | zakon.rada, ст. 134 («невід'ємною складовою частиною України»); WebSearch: офіційний англ. текст «integral constituent part» (rm.coe.int, сніпет) | ✅ |
| Russia has occupied Crimea since 2014; за законами України — тимчасово окупована територія | WebSearch «Law 1207-VII … 20 February 2014»: kyivpost.com, ukrinform.net, interfax (дата 20.02.2014 закріплена законом 2014 р.); https://en.wikipedia.org/wiki/Political_status_of_Crimea | ✅ (уточнено — правка 1) |
| UNGA res. 68/262, 27.03.2014: підтримала територіальну цілісність; п. 6 — «calls upon all States, international organizations and specialized agencies not to recognize any alteration of the status of the Autonomous Republic of Crimea and the city of Sevastopol on the basis of the above-mentioned referendum» | https://en.wikipedia.org/wiki/United_Nations_General_Assembly_Resolution_68/262 («affirmed … territorial integrity of Ukraine»); WebSearch з дослівною цитатою п. 6 → digitallibrary.un.org/record/767883 (A/RES/68/262), news.un.org/en/story/2014/03/464812, mfa.gov.ua | було ⚠️ («any change in its status» — неточно: Crimea and Sevastopol, без назви резолюції) → ✅ після правки 1 |
| Verkhovna Rada — the only body that makes laws (ст. 75) | zakon.rada, ст. 75 («Єдиним органом законодавчої влади»); https://en.wikipedia.org/wiki/Verkhovna_Rada | ✅ |
| 450 MPs, 5 years (ст. 76) — «under the Constitution» | zakon.rada, ст. 76; en.wikipedia Verkhovna_Rada («members = 450»; 2019 — обрано 424) | ✅ (формулювання «By the Constitution» → «Under the Constitution», правка 2) |
| Cabinet of Ministers — the government, runs the country; PM leads it (ст. 113–114) | zakon.rada, ст. 113 («вищим органом у системі органів виконавчої влади»), ст. 114 («Прем'єр-міністр … керує роботою»); https://en.wikipedia.org/wiki/Government_of_Ukraine | ✅ |
| Rada appoints PM: President proposes, MPs vote (ст. 114) | zakon.rada, ст. 114 («призначається Верховною Радою … за поданням Президента»); https://en.wikipedia.org/wiki/Prime_Minister_of_Ukraine (nominator — President) | ✅ |
| Constitution adopted by the Rada on 28 June 1996 | https://en.wikipedia.org/wiki/Constitution_of_Ukraine («adopted … on 28 June 1996»); zakon.rada (реквізит 254к/96-ВР від 28.06.1996); КЗпП ст. 73 «28 червня — День Конституції» | ✅ |
| UK: constitutional monarchy; King Charles III — head of state; little power | CD constitutional monarchy; https://en.wikipedia.org/wiki/Charles_III («King of the United Kingdom since 2022») | ✅ |
| House of Commons — 650 elected MPs; House of Lords — not elected | https://en.wikipedia.org/wiki/House_of_Commons_of_the_United_Kingdom («650 members»); CD https://dictionary.cambridge.org/dictionary/english/house-of-lords («whose members are not elected»); https://en.wikipedia.org/wiki/House_of_Lords | ✅ |
| PM — usually leader of the party with most MPs; UK Parliament — Palace of Westminster, London | en.wikipedia House_of_Commons («meets in the Palace of Westminster in London»); https://en.wikipedia.org/wiki/Devolution_in_the_United_Kingdom | ✅ |
| Scottish Parliament — Edinburgh; Senedd — Cardiff; NI Assembly — Belfast; devolved — schools, hospitals | https://en.wikipedia.org/wiki/Scottish_Parliament , https://en.wikipedia.org/wiki/Senedd , https://en.wikipedia.org/wiki/Northern_Ireland_Assembly (Stormont, Belfast); Devolution_in_the_United_Kingdom (health, education) | ✅ |
| USA: republic; President — head of state and government; Congress = Senate + House of Representatives | https://en.wikipedia.org/wiki/Federal_government_of_the_United_States ; CD congress | ✅ |
| Chornozem — very fertile; wheat, maize, sunflowers | https://en.wikipedia.org/wiki/Chernozem ; WebSearch (bunge.com, USDA FAS factsheet) | ✅ |
| Ukraine — one of the world's biggest exporters of sunflower oil | https://en.wikipedia.org/wiki/Agriculture_in_Ukraine ; WebSearch: fas.usda.gov Ukraine Factsheet 2022 («top exporter of sunflower meal and oil»); 2025/26 Росія вперше випередила (ukragroconsult) — «one of the biggest» лишається правдою | ✅ |
| Iron ore near Kryvyi Rih; mined > 100 years | https://en.wikipedia.org/wiki/Kryvbas ; https://en.wikipedia.org/wiki/Kryvyi_Rih (промислова розробка з 1880-х); WebSearch: encyclopediaofukraine.com «Kryvyi Rih Iron-ore Basin» (компанія О. Поля 1881), britannica.com/place/Kryvyy-Rih («French company began to work the local iron-ore deposits in 1881», залізниця до Donets Basin coalfield 1884) | ✅ |
| Coal in the Donbas, in the east | https://en.wikipedia.org/wiki/Donbas («important coal mining area since the late 19th century»); WebSearch: britannica Kryvyy Rih («Donets Basin coalfield»), encyclopediaofukraine «Donets coal region» | ✅ |
| North Sea oil from the 1970s | https://en.wikipedia.org/wiki/North_Sea_oil (Argyll, June 1975; BBC «1975: North Sea oil begins to flow») | ✅ |
| Last deep coal mine closed in 2015 | https://en.wikipedia.org/wiki/Kellingley_Colliery («closed on 18 December 2015, marking the end of deep mining in the UK»); WebSearch: https://www.voanews.com/a/britains-last-deep-coal-mine-closes/3108889.html , worldcoal.com 18.12.2015 | ✅ |
| Wind farms make a lot of UK electricity | https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom («almost 30% of Great Britain's total generation», 2025) | ✅ (число в урок не взято) |
| КЗпП ст. 73: 1.01, 28.06, 15.07 Statehood Day, 24.08, 1.10, 25.12; «some of them» | https://zakon.rada.gov.ua/laws/show/322-08/print (чинна редакція, помітка про воєнний стан); https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine | ✅ |
| 7 January і 14 October — до закону 2023 р. | zakon.rada КЗпП («виключено на підставі Закону № 3258-IX від 14.07.2023»); en.wikipedia Public_holidays_in_Ukraine («14 October until 2022») | було ⚠️ («Until 2023» — 7.01.2023 ще був вихідним) → ✅ «Until a new law in July 2023» (правка 3) |
| Statehood Day — 15 July | КЗпП ст. 73; https://en.wikipedia.org/wiki/Statehood_Day_(Ukraine) («15 July … previously 28 July in 2022 and 2023») | ✅ |
| «Day of Defenders of Ukraine» — англ. назва | WebSearch: kmu.gov.ua/en «…marking the Day of Defenders of Ukraine» (уряд), president.gov.ua/en (звернення); ukrinform «…Day of Defenders of Ukraine» (у ref Вікіпедії); en.wikipedia — «Defenders Day / Defenders of Ukraine Day» | ✅ (офіційні сайти вживають саме цю форму) |
| 24 August 1991 — declared independence | facts/hist №13; КЗпП «24 серпня — День незалежності України» | ✅ |
| Bank holidays: E&W 8, Scotland 9, NI 10; Christmas Day, Boxing Day — усюди; St Andrew's Day (Scotland), St Patrick's Day (NI) | https://en.wikipedia.org/wiki/Public_holidays_in_the_United_Kingdom («eight … nine … ten»; «Additional days have been allocated for special events»); WebSearch: gov.scot «Scottish bank holiday dates» (2026 — ще одноразовий 15 June 2026) | було ⚠️ (кількість залежить від року) → ✅ «In a usual year» (правка 4) |
| St Andrew's Day — bank holiday лише в Шотландії; на вихідних — переноситься на понеділок | https://en.wikipedia.org/wiki/Public_and_bank_holidays_in_Scotland («30 November, or the following Monday should 30 November fall on a weekend»); WebSearch: legislation.gov.uk asp 2007/2 s. 1 (St Andrew's Day Bank Holiday (Scotland) Act 2007), gov.scot (2024 → 2 Dec, 2025 → 1 Dec) | було ⚠️ (інтро «a bank holiday in Scotland today» на 30.11 без перенесення) → ✅ правка 5 |
| Bank holiday — «banks and most businesses are closed» | CD https://dictionary.cambridge.org/dictionary/english/bank-holiday («an official holiday when banks and most businesses are closed for a day») ; en.wikipedia Public_holidays_in_the_UK | ✅ (визначення словника; TQ-141 «як зараз» дотримано: для України не сказано, що в ці дні не працюють) |

### Мова й форми (CD + OALD / Wiktionary)
| Форма | Джерело | Вердикт |
|---|---|---|
| Наголос: re<u>pub</u>lic, au<u>ton</u>omous, <u>cap</u>ital, consti<u>tu</u>tion (stress l1) | CD …/republic /rɪˈpʌb.lɪk/, …/autonomous /ɔːˈtɒn.ə.məs/, …/capital /ˈkæp.ɪ.təl/, …/constitution /ˌkɒn.stɪˈtʃuː.ʃən/; OALD republic, autonomous, constitution, capital_1 — ті самі | ✅ |
| <u>in</u>tegral, <u>oc</u>cupy, <u>mon</u>arch, <u>par</u>liament, <u>Pres</u>ident, <u>Con</u>gress, <u>Sen</u>ate, <u>fer</u>tile, <u>there</u>fore | CD (/ˈɪn.tɪ.ɡrəl/, /ˈɒk.jə.paɪ/, /ˈmɒn.ək/, /ˈpɑː.lɪ.mənt/, /ˈprez.ɪ.dənt/, /ˈkɒŋ.ɡres/, /ˈsen.ət/, /ˈfɜː.taɪl/, /ˈðeə.fɔːr/) | ✅ |
| re<u>sour</u>ces | CD UK /rɪˈzɔːs/ (також /ˈriː.sɔːs/) — у stress не перевіряється | ✅ |
| oblast, plural oblasts | https://en.wiktionary.org/wiki/oblast (en-noun «s»); англ. переклад Конституції — oblasts (сніпет WebSearch) | ✅ |
| due to (B1), owing to (B2) + noun = because of | CD …/due-to («The bus was delayed due to heavy snow»), …/owing-to («because of») | ✅ |
| therefore — «as a result; because of that» | CD …/therefore | ✅ |
| so … (that) — that можна опустити | OALD so_1 «so… (that)… She spoke so quietly (that)…»; CD so «I'm so tired (that)…» | ✅ |
| so (that) + can / could — purpose; that опускають у неформальному | CD Grammar «So that or in order that?» (https://dictionary.cambridge.org/grammar/british-grammar/so-that) | ✅ |
| under the Constitution (а не «by the Constitution») | CD …/under (B2 «according to a particular … rule»: «Under current law, …») | правка 2 |

### Авторське право (фрагменти ≥ 12 слів, WebSearch у лапках)
| Фрагмент | Результат |
|---|---|
| «Ukraine has such fertile soil that it is one of the world’s biggest exporters of sunflower oil» | збігів немає |
| «Ukraine and the UK both have a parliament and a Prime Minister, but they are organised in different ways» | збігів немає |
| «In the UK, public holidays are usually called bank holidays: banks and most businesses» | збігів немає (лише довідкові сторінки про bank holidays) |
Решта текстів — короткі власні репліки героїв серії; приклади словників не скопійовано (порівняв з CD/OALD прикладами вище).

## 2. Відповіді й опора (D-019)

Кожне завдання розв'язав сам до звірки з ключем; розбіжностей з ключем немає.

| Урок · завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 #2 choice (oblast) | `hyp: true` | ✅ |
| l1 #4 match | екран 3 (+ capital, republic — з e5s10, e6s7; бієкція однозначна) | ✅ |
| l1 #5 sort | екран 3 | ✅ |
| l1 #7 choice (Crimea) | екрани 3, 6 | ✅ |
| l1 #8 stress | підкреслення на екрані 3 | ✅ |
| l1 #9 pick (states) | екран 3 | ✅ |
| l1 #10 gaps | екрани 3, 6 | ✅ |
| l2 #2 choice | `hyp: true` | ✅ |
| l2 #4 match | екран 3 (PM ↔ «runs the country» лишає Cabinet ↔ «leads the Cabinet» — абсурд, тож бієкція одна) | ✅ |
| l2 #5 choice «the only body» | екран 3 | ✅ |
| l2 #7 gaps elect/pass/appoint/adopted | екран 6 | ✅ |
| l2 #8 build | екран 3; обидва порядки фактів у `answer`, інших граматичних порядків немає; пастка elects не дає правильного речення | ✅ |
| l2 #9 pick (elect → elected) | екран 3 + пасив з попередніх класів | ✅ |
| l2 #10 word (adopted; ще passed, approved) | екран 6 | ✅ |
| l2 #11 gaps | екран 3 | ✅ |
| l3 #2 choice | `hyp: true` | ✅ |
| l3 #4 match | екран 3 | ✅ |
| l3 #5 multi [1, 3] | l2 екран 3 + l3 екран 3 | ✅ |
| l3 #7 gaps (Senedd, Parliament, London) | екран 6 | ✅ |
| l3 #9 choice (Congress) | екран 8 | ✅ |
| l3 #10 word (monarchy) | заголовок екрана 3 | ✅ |
| l3 #11 pick (Commons → Lords) | екран 3 | ✅ |
| l3 #12 gaps | екрани 3, 8; l2 | ✅ |
| l4 #2 choice | `hyp: true` | ✅ |
| l4 #4 match | екран 3 (crops — «wheat, maize and sunflowers») | ✅ |
| l4 #6 gaps so/such (iron ore — незлічуваний іменник після прикметника → such) | екран 5; друга відповідь неможлива | ✅ |
| l4 #8 choice (so windy that) | екрани 5, 7; than — порівняння (раніші класи) | ✅ |
| l4 #9 build | екран 5; один граматичний порядок; such — пастка | ✅ (that — плитка, тож «so fertile farmers…» не складається з усіх плиток) |
| l4 #10 word such | екран 5 | ✅ |
| l4 #11 pick so → such | екран 5 | ✅ |
| l4 #12 gaps | екран 3 (importers ↔ exporters виводиться) | ✅ |
| l5 #2 choice | `hyp: true` | ✅ |
| l5 #4 gaps due to / because / Owing to | екран 3; у кожній парі одна з due/owing проти because, після пропуску або іменник, або підмет + дієслово — друга відповідь неможлива | ✅ |
| l5 #5 multi [1, 2, 3] | екран 3; усі три прийменники в ключі | ✅ |
| l5 #7 choice Therefore | екран 6; умова задає «Reason / Result», тож дедуктивне «grain. Therefore, soil» відсікається | ✅ |
| l5 #9 sort | екрани 3, 6, 8 | ✅ |
| l5 #10 pick because → because of | екран 3 | ✅ |
| l5 #11 build | екран 3; «Start with The trip» відсікає «Owing to the storm the trip…» | ✅ |
| l5 #12 gaps | екрани 3, 5, 6, 8 | ✅ |
| l6 #2 choice (nine) | `hyp: true` | ✅ |
| l6 #4 match | екран 3 | ✅ |
| l6 #6 gaps | екрани 3, 5; l5 | ✅ |
| l6 #8 choice | екран 7 | ✅ |
| l6 #9 multi | екран 7 | ✅ |
| l6 #10 word bank | екран 7 | ✅ |
| l6 #11 pick (Boxing) | екран 7 | ✅ |
| l6 #12 gaps Therefore / because | екран 3; l5 | ✅ |
| l7 T1–T7 | l1–l6 (`pre` на кожен) | ✅ |
| l7 T8–T10 reading | відповідь — в уривку на екрані | ✅ |

Друга правильна відповідь: due to / owing to / because of — у multi усі в ключі; so/therefore не протиставлено; so/such — за словом після; build — усі порядки перебрано (див. вище). Правильних дистракторів немає. `match` — інших доречних пар немає.

## 3. Педагогіка, BrE, формат
- Проблема → здогадка (`hyp`) → теорія → вправи → фінал у кожному уроці. Пояснення — B1, речення короткі.
- BrE: organised, recognise, honour, Labour, maize, at the weekend, Ms; AmE не знайдено. Kyiv, Ukraine без *the*, the Donbas.
- Без IPA, без «Listen» / «You hear»; без літер A/B/C в `opts`. `uk` немає (10 кл. — не потрібне).
- Діалоги — репліками в `body` (D-056), `type: "dialog"` немає.
- Політика: імен посадовців України немає, оцінок політиків немає; Крим подано за Конституцією, законом і резолюцією ГА ООН.
- TQ-141 («як зараз»): чинний перелік, «public holidays», без тверджень про вихідні в Україні — дотримано.
- `requires` (e5s10l1, e5s10l3, e6s7l1, e6s8l1, e8s7l1, e8s8l1, e9s3l4, e9s9l4): усі id існують, теми відповідають (мапа України, склад UK, Kyiv, London, кордони, англомовні країни, so/such … that, although/however/so) ✅.

## 4. Правки (зроблено)
1. l1 екран 6 «Crimea is part of Ukraine»: «under Ukraine’s laws, Crimea is still part… called on all countries not to recognise any change in its status» → «Ukraine’s laws call Crimea a **temporarily occupied** territory: it is still part of Ukraine. In March 2014, the UN General Assembly (Resolution 68/262) supported Ukraine’s territorial integrity. It called on all countries not to recognise any change in the status of Crimea and Sevastopol.»
2. «By the Constitution» → «Under the Constitution» (l2 екран 3, l2 pick, l7 T8; калька, CD under).
3. l6 екран 3: «Until 2023, 7 January…» → «Until a new law in July 2023, …» (7.01.2023 ще був святковим днем).
4. l6 hyp і екран 7: кількість bank holidays — «in a usual year» (бувають одноразові додаткові дні, напр. 15.06.2026 у Шотландії).
5. l6 інтро: «It’s a bank holiday in Scotland today» → «It’s a bank holiday in Scotland»; на екрані 7 — новий пункт «If 30 November is at the weekend, the Scottish bank holiday is on the next Monday.»
6. l7 T8 (уривок 1): «but under Ukraine’s laws, it is still part of Ukraine» → «but Crimea is still an integral part of Ukraine» (за ст. 134, без звуження до «лише за законами України»).
7. Статус уроків draft → verified, `meta.factcheck`, рядок «Статус» у шапці файлу.
Ключі відповідей не змінено.

## 5. Рекомендовано (не блокує)
- l4 build: інтро про соняшникове поле, а речення — про wheat; можна взяти «a lot of sunflowers» (не змінював).
- Верифікатору чи куратору: повторно звірити англ. переклад Конституції (zakon.rada …/en/…) і текст Закону № 1207-VII, коли zakon.rada не повертатиме 503; у 2022 р. обговорювали зміну дати початку окупації на 19.02.2014 — у уроці лише «since 2014», тож урок це не зачіпає.

## 6. Потребує людини
- Нічого блокувального. TQ-141 лишається відкритим (учитель: як подавати свята під час воєнного стану) — урок відповідає варіанту «як зараз».
- `approved` — лише вчитель.
