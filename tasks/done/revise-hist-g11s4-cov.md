---
claimed_from: todo
claimed_at: 2026-11-12T14:27:20.642Z
id: revise-hist-g11s4-cov
type: revise-section
subject: hist
grade: 11
section: g11s4
status: done
claimed_by: writer-hist-g11s4
created: 2026-11-10
depends_on: [refine-hist-diag-g10-g11]
---
# g11s4: нові уроки g11s4l5 «Між Заходом і Москвою», g11s4l6 «Влада, гроші й Конституція»

Підстава: reports/research/coverage-research-hist-coverage-g10-11.md (задача curate-hist-coverage); програма «Історія України. 10–11 кл.» (наказ МОН № 698 від 03.08.2022; текст — за КТП, звіт §1).

Звіт §4.2 B9, B10, B13, таблиця §3: 11 кл. Р5, одиниці 5.4, 5.5, 5.7, 5.9.

Що зробити в `content/hist/g11-g11s4.js`:
1. **Новий урок `g11s4l5`** «Між Заходом і Москвою»: багатовекторність; **Будапештський меморандум — 5.12.1994** (✅ ООН: https://treaties.un.org/Pages/showDetails.aspx?objid=0800000280401fbb); вступ до Ради Європи (1995 р., ⚠ звір); Тузлинська криза (2003 р.); курс на євроатлантичну інтеграцію. Після g11s4l1.
2. **Новий урок `g11s4l6`** «Влада, гроші й Конституція»: приватизація, олігархічна система (поняття ПУ), конституційна реформа 2004 р., 2010–2013 рр.: скасування реформи 2004 р., Харківські угоди (2010 р., ⚠ дата з ≥ 2 джерел). Після g11s4l2.
3. **Фінал `g11s4l4`** (B13): по завданню на l5 і l6.
4. Тест рівня dgh11 `g11-money` — без змін; нова cur-тема з g11s4l5 — лише в наступній редакції з новим id.

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `g11s4l4` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `g11s4l4`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу міняє задача refine-hist-diag-g10-g11 (разом із переносом g11s1 у 10 кл.; вона — у depends_on); сам не змінюй.
- Лише `content/hist/g11-g11s4.js`, `img/hist/g11s4/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section g11s4` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента

**writer-hist-g11s4, 2026-11-12.** Файл `content/hist/g11-g11s4.js`; зображення `img/hist/g11s4/` (3 нові). validate --section g11s4: 0 помилок (4 старі попередження sentenceWords < 7 у verified l1–l4); validate --diag dgh11b: 0/0; stats: l5, l6 без прапорців; euphony: у нових уроках лише «Європейський суд з прав людини» (усталена назва, не змінюю).

### Уроки (порядок у `lessons`: l1, l5, l2, l6, l3, l4)
- **g11s4l5 «Між Заходом і Москвою»** (draft, «Урок 2», 10 екранів, 5 оцінюваних + hyp; типи choice, multi, sort, order). Ядерна спадщина → Тристороння заява 14.01.1994 → Будапештський меморандум 5.12.1994 (п. 2–3 як джерело) → багатовекторність Кучми, Рада Європи 9.11.1995, ЄСПЛ з 1997, Хартія з НАТО і угоди з Росією 1997 → Тузла 2003 (супутниковий знімок) → НАТО: ст. 5, Бухарест 3.04.2008, позаблоковий статус 2010, скасування 23.12.2014 → order-фінал. З world w11s4l5 (меморандум п. 1 + Крим 2014) не дублюється: тут п. 2–3, межі документа, Тузла, Рада Європи, НАТО.
- **g11s4l6 «Влада, гроші й Конституція»** (draft, «Урок 4», 10 екранів, 5 оцінюваних + hyp; choice, sort, multi). «Криворіжсталь» 2004/2005 (приватизація) → олігарх / олігархічна система (ознаки — закон 2021 р.) → реформа 8.12.2004 і її скасування КС 2010 р. → Харківські угоди 21.04.2010 (фото Kremlin.ru) → фінал multi (вирок Тимошенко 2011, ЄСПЛ 2013 — на екрані фіналу).
- **g11s4l4 (фінал)** → draft: пункт 3 (choice, pre g11s4l5 — меморандум), пункт 5 (choice, pre g11s4l6 — два продажі «Криворіжсталі»); прибрано дубль на l2 — сортування «Хто захищає голос?» (опорою тесту не є; l2 лишається покритий order-пунктом 4); 7 завдань; `pre` додано всім оцінюваним; у multi пункту 7 переставлено варіанти (ключ [0, 2, 3] замість [0, 1, 2], зміст той самий); intro: «Сім пунктів», «безпека держави»; прибрано речення «У кожного кроку є мета…» (maxReadWords).
- **g11s4l2, g11s4l3** — лише eyebrow «Урок 3» / «Урок 5» (за позицією; прецедент g8s5l4, g8s1l6 — verified лишається); зміст і відповіді не змінено. **g11s4l1** (опора dgh11b `g11-money`) — не змінено.
- Позиції правильних: l5 — hyp 1, multi [1,3], choice 2, choice 0; l6 — hyp 2, choice 1, choice 0, choice 2, multi [1,3,4]; фінал — 1 (старий), 0, 1, 2 (старий), [0,2,3].

### Факти й джерела (≥ 2 відкриті)
- ≈1900 стратегічних боєголовок, третій арсенал світу; Тристороння заява 14.01.1994 (Україна, США, Росія: роззброєння в обмін на компенсацію й запевнення); до 1996 р. усі боєголовки передано Росії — https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons ; https://www.brookings.edu/articles/ukraines-nuclear-nonproliferation-example ; фото — Commons (DTRA, «With Courage and Persistence», с. 112). Точний день (1 чи 2.06.1996) джерела різнять — в уроці лише «1996 р.».
- Будапештський меморандум 5.12.1994, підписанти, п. 1–4 (текст): https://documents.un.org/api/symbol/access?s=A/49/765&l=en&t=pdf ; https://treaties.un.org/Pages/showDetails.aspx?objid=0800000280401fbb ; armscontrol (вище). Приєднання до ДНЯЗ 5.12.1994 — armscontrol + A/49/765.
- Рада Європи — 9.11.1995: https://www.kmu.gov.ua/en/yevropejska-integraciya/spivrobitnictvo-z-radoyu-yevropi ; https://united24media.com/opinion/ukraine-and-the-council-of-europe-thirty-years-of-shared-values-and-renewed-purpose-13239 (coe.int — 403). ЄКПЛ ратифіковано 17.07.1997, чинна для України з 11.09.1997: https://court.gov.ua/archive/2127856/ ; https://protocol.ua/ua/konventsiya_pro_zahist_prav_lyudini_i_osnovopolognih_svobod/
- Кучма — президент 1994–2005, політика «то з РФ, то з ЄС» (EoU: «alternating between closer relations with The Russian Federation and the European Union»): https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CU%5CKuchmaLeonid.htm ; «багатовекторність» — https://zaxid.net/nebezpechni_manevri_n1417320 ; https://www.radiosvoboda.org/a/905155.html
- Хартія про особливе партнерство Україна — НАТО, 1997 (Мадрид): https://www.nato.int/cps/en/natohq/topics_37750.htm ; https://www.radiosvoboda.org/a/ukrayina-na-samitakh-nato-istoriya/33025312.html
- Угоди про Чорноморський флот 28.05.1997 — базування до 2017 р.: https://militarnyi.com/uk/news/militarnyj-podkast-28-yakymy-vms-ukrayiny-buly-do-okupatsiyi-krymu/ ; https://zn.ua/ukr/internal/prosya_u_nischego_na_hleb,_bogatym_podaem_na_bednost.html ; текст угоди 2010 р. (продовження «з 28 травня 2017 року») — glavcom (нижче).
- Договір про дружбу, співробітництво і партнерство 31.05.1997 (ст. 2 — непорушність кордонів; у тексті уроку лише «Договір про дружбу», 1997): https://gazeta.ua/articles/politics/_cerez-16-let-posle-podpisaniya-dogovora-o-druzhbe-rossiya-vtorglas-v-ukrainu/967732 ; https://texty.org.ua/fragments/82078/Duma_Rosiji_khoche_vidmovytysa_vid_vyznanna_kordoniv-82078/
- Тузла: 29.09.2003 — початок дамби від Таманського півострова без згоди України; прикордонники; зупинено в жовтні ≈ 100 м від острова; EoU — «перше порушення Будапештського меморандуму» (Harasymiw, 2024): https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CU%5CTuzlaIslandconflict.htm ; https://armyinform.com.ua/2023/09/14/konflikt-na-tuzli-pershe-zazihannya-rf-na-terytorialnu-czilisnist-ukrayiny/ ; https://www.pravda.com.ua/news/2003/10/23/2996093/ ; https://viv.nuou.org.ua/article/download/302901/294888/699326 (29.09–23.10.2003).
- НАТО ст. 5 — як world w11s1 / facts/world. Бухарест 3.04.2008, п. 23: «these countries will become members of NATO», без ПДЧ: https://www.nato.int/cps/en/natohq/official_texts_8443.htm ; https://www.radiosvoboda.org/a/ukrayina-na-samitakh-nato-istoriya/33025312.html . Позаблоковість 2010–2014: nato.int topics_37750 («From 2010 to 2014, Ukraine pursued a non-alignment policy»); https://www.fair.org.ua/ukraina-v-nato-shliakh-suchasnyi-status-ta-perspektyvy-chlenstva/ ; скасування 23.12.2014 — Радіо Свобода (вище).
- «Криворіжсталь»: 14.06.2004, ІМС (Ахметов, Пінчук), 4,26 млрд грн ≈ 800 млн дол.; LNM і US Steel пропонували ≈ 2,7 млрд дол., до конкурсу не допущені: https://www.radiosvoboda.org/a/916693.html ; https://www.aljazeera.com/news/2005/10/24/mittal-steel-wins-ukraine-auction («$800 million», «two top insiders of the former government», суд у квітні 2005 визнав аукціон незаконним, 4,8 млрд, пряма трансляція); https://www.voanews.com/amp/a-13-2005-10-24-voa11-66365012/546601.html («consortium owned by Kuchma allies», «open bidding, shown live»). «Зять Кучми» в урок не взято (у відкритих джерелах сесії — лише AP у переказі).
- Олігарх — 4 ознаки, ≥ 3 (закон № 1780-IX, 2021): https://forbes.ua/inside/antioligarkhichniy-zakon-12072022-7116 ; https://epravda.com.ua/news/2021/06/3/674585/ (zakon.rada недоступний). «Олігархічна система» — пояснення автора за https://www.chathamhouse.org/sites/default/files/2021-11/2021-07-01-ukraine-crony-capitalism-ukrainian-lough.pdf ; https://mind.ua/publications/20247177-ukrayina-bilshe-ne-bude-klanovo-oligarhichnoyu-yak-zminitsya-konfiguraciya-grup-vplivu-pislya-vijni
- Конституційна реформа: закон № 2222-IV від 8.12.2004, пакетом зі змінами до закону про вибори президента; парламентсько-президентська форма, уряд формує коаліція фракцій; КС 2010 р. — неконституційний через порушення процедури, поновлено редакцію 1996 р., президент призначає прем'єра за згодою ВР: https://www.unian.ua/politics/407803-ks-skasuvav-zmini-do-konstitutsiji-2004-roku.html ; https://www.unian.ua/politics/408051-skasuvannya-politreformi-scho-same-zminyuetsya-v-ukrajini.html ; https://www.pravda.com.ua/articles/2010/10/1/5434400/ ; https://dspace.uzhnu.edu.ua/jspui/bitstream/lib/17420/1/ (аналіз реформи 2004). День рішення КС (30.09 / 1.10.2010) не вказую — лише «2010 р.».
- Харківські угоди 21.04.2010: флот на 25 років із 28.05.2017 (до 2042) з автоматичним продовженням; знижка на газ до 100 дол. за 1000 м³; ратифікація 27.04.2010 (236 голосів), бійки, яйця, димові шашки: https://glavcom.ua/publications/4926-dogovir-janukovicha-i-medvedjeva-pro-bazuvannja-flotu-do-2042-roku.-tekst-dokumentu.html ; https://archive.kyivpost.com/article/content/ukraine-politics/new-lows-on-the-high-road-to-democracy-65150.html ; https://jurliga.ligazakon.net/news/23597_vr-ratifkuvala-ugodu-pro-chornomorskiy-flot-rf ; Kremlin.ru (через Commons) http://www.kremlin.ru/news/7514
- Тимошенко: вирок 11.10.2011, 7 років — https://zn.ua/ukr/POLITICS/kireev-timoshenko-89377.html ; https://www.unian.ua/politics/553063-sudniy-den-timoshenko-yak-ogoloshuvali-virok.html ; ЄСПЛ 30.04.2013 «Тимошенко проти України» — тримання під вартою свавільне (ст. 5, 18): https://www.echrblog.com/2013/04/tymoshenko-judgment-former-ukranian.html ; https://coe.int/es/web/portal/-/european-court-of-human-rights-former-prime-minister-of-ukraine-was-arbitrarily-detained

### Зображення (D-027)
- l5 екран 3: `trilateral-statement-1994.jpg` — Commons File:Presidents_after_signing_the_Trilateral_Statement,_Moscow,_1994.png, PD (уряд США, Clinton Library / DTRA), thumb 500 px.
- l5 екран 7: `tuzla-2011-landsat.jpg` — Commons File:Tuzla,_Kerch_Strait,_near_natural_colors_satellite_image,_LandSat-5,_2011-08-30.jpg, PD (NASA/USGS), thumb 500 px, `fit: true`. Знімок 2011 р. (після кризи): дамба видно від Таманського берега.
- l6 екран 9: `kharkiv-agreements-2010.jpg` — Commons File:Dmitry_Medvedev_in_Kharkov_-_21_April_2010-10.jpeg, CC BY 4.0 (Kremlin.ru; дозвіл — File:Kremlin authorisation-English.pdf), thumb 960 px. Опис Commons «Signing … Black Sea Fleet», збігається з kremlin.ru/news/7514.

### Опора завдань (D-019)
- l5 #4 multi — пункти меморандуму в body того ж екрана; #6 sort — екран 5; #7 — body + фото; #9 — екран 3–4 (немає обов'язку захисту) + екран 8 (ст. 5); #10 order — дати на екранах 3, 5, 7, 8.
- l6 #4 — екран 3; #6 — екран 5; #8 — екран 7; #9 — body + l5 екран 5 (1997 → 2017; є й «після 2017 р.» у body); #10 — екрани 3, 5 і body (Тимошенко/ЄСПЛ уперше подано в body фіналу — «з екрана»).
- Фінал п. 3 — l5 екрани 3–4; п. 5 — l6 екрани 1, 3.

### Сумнівне / для верифікатора
- Імена Ахметова й Пінчука (живі особи) — подано лише як покупців 2004 р. за Радіо Свобода; «близьких до тодішньої влади» — VOA («Kuchma allies»), Al Jazeera («insiders of the former government»).
- Тимошенко — чутливе (жива особа); подано лише вирок і рішення ЄСПЛ, без оцінок. Пізніше (2014) вирок скасовано — в уроці не згадано (поза 2010–2013).
- «Олігархічна система» — пояснення автора (поняття П698), не дослівне визначення з джерела.
- dgh11b не змінено; нову cur-тему з g11s4l5 — у наступній редакції тесту (новий id).
