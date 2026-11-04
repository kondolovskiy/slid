---
claimed_from: todo
claimed_at: 2026-11-04T07:14:49.406Z
id: write-world-w8s4
type: write-section
subject: world
grade: 8
section: w8s4
weeks: [22, 28]
status: review
claimed_by: writer-write-world-w8s4
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Європа і світ у XVII ст.» (Всесвітня історія, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як абсолютні монархії, Англійська революція й Тридцятилітня війна змінили правила життя держав.

## Теми уроків (з плану)
1. Абсолютизм: Луї XIV
2. Англійська революція і «Білль про права»
3. Тридцятилітня війна і Вестфальський мир
4. Голландія: торгівля і компанії
5. Японія і Китай закриваються від світу
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: `content/world/g7-w7s1.js` (verified) і style/world.md «Еталони».

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Гісем О. В. та ін., модельна «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf (PDF; текст — `pdftotext`, середня колонка «Зміст навчального предмета»).
- **Новий предмет** `world`: content/subjects/world.js (навички src, time, geo, crit, pol, soc, cult, link), план content/world/plan.js, **style/world.md** (+ style/hist.md — усе діє), glossary/world.md, facts/world.md (поки порожній — нові факти лише з ≥ 2 джерел, з URL у нотатках і FACT в inbox).
- Файл: `content/world/g<клас>-<id>.js`, зображення — `img/world/<id>/`; id уроків `<id>l1…`, значок boss — унікальний id. D-027: ≥ 1 справжнє `img` у кожному уроці (скіл `hist-images`; Commons — `thumb.wikimedia.org`, ≤ 2 фото-агенти одночасно).
- У розділі ≥ 1 завдання `sk: "link"` (подія світу ↔ подія на українських землях, уже відома з «Історії України» 7 кл. або подана на екрані).
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай. Не чіпай чужі файли, `content/math`, `app/`.

## Результат
- Файл `content/world/g8-w8s4.js` з `SLID.section("world", { id: "w8s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w8s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w8s4` — 0 помилок (build — у копії дерева; у спільному — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-write-world-w8s4, 2026-11-04)
Файл `content/world/g8-w8s4.js`, 6 уроків (усі `draft`), значок `europe17` «Гід XVII століття»:
1. **w8s4l1 «Король-Сонце»** (Абсолютизм) — 9 екр.: портрет Ріго (знаки влади), абсолютизм, 1643–1715 (72 р.), Генеральні штати 1614–1789, Версаль 1682, Кольбер і меркантилізм, фінал «Держава — це я» — легенда.
2. **w8s4l2 «Король проти парламенту»** — 10 екр.: Стюарти 1603, особисте правління 1629–1640, війна 1642, страта 30.01.1649, протекторат 1653–1658, реставрація 1660, Славна революція 1688, «Білль про права» 1689 (фото сувою), 1689 − 1215 = 474, фінал Франція/Англія.
3. **w8s4l3 «Тридцять років війни»** — 10 екр.: Прага 23.05.1618 (причина/привід — sort), Густав II Адольф 1630/1632, Валленштейн, Франція 1635 і Рішельє, Вестфальський мир 24.10.1648, картина тер Борха як джерело, **link: травень 1648 — Жовті Води і присяга в Мюнстері**, фінал multi.
4. **w8s4l4 «Біржа, кораблі й прянощі»** — 9 екр.: Республіка Сполучених провінцій, **link: зерно через Гданськ («мати всієї торгівлі»)**, Ост-Індська компанія 1602 / біржа 1611 / Батавія 1619 / 1799, акції й ризик, Банда 1621 (погляд підкорених), фінал Амстердам/Версаль.
5. **w8s4l5 «Країни за зачиненими дверима»** — 10 екр.: Токугава Іеясу 1603, сьогунат, заборона християнства 1614, Сімабара 1637–1638, 1639, Дедзіма 1641–1854 (213 р.), маньчжури 1644, Цін, богдихан, Кансі 1684, Гуанчжоу 1757, лист Цяньлуна 1793.
6. **w8s4l6 «Мандрівка XVII століттям»** (boss) — шаблон w7s1l5/w8s2l6: 5 питань (по одному на урок; Q3 — link 1648) + хронологія з 6 подій = 6 завдань.

Перевірка: `node tools/validate.mjs --section w8s4` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject world` — w8s4 без прапорців. `python3 tools/playtest.py --section w8s4` — у копії дерева в scratchpad (build у копії): пройдено 6 уроків. Build у спільному дереві **не запускав** — потрібен build оркестратора (нові `img/world/w8s4/*.jpg`, новий скрипт розділу).

### Зображення (D-027; усі — thumb.wikimedia.org, метадані зі сторінок файлів)
| Урок | Файл | Автор | Ліцензія | Сторінка |
|---|---|---|---|---|
| l1 | louis-xiv-rigaud.jpg | Гіацинт Ріго, 1701, Лувр INV 7492 | PD | https://commons.wikimedia.org/wiki/File:Louis_XIV_of_France.jpg |
| l2 | bill-of-rights-1689.jpg (обрізано знак IWM) | фотограф Міністерства інформації, 1939–1945, IWM TR 1142 | PD-UKGov | https://commons.wikimedia.org/wiki/File:Historic_Documents_From_the_House_of_Lords_TR1142.jpg |
| l2 | cromwell-walker.jpg | Роберт Вокер, бл. 1649, NPG 536 | PD | https://commons.wikimedia.org/wiki/File:Oliver_Cromwell_(NPG_536).png |
| l3 | munster-1648-ter-borch.jpg | Герард тер Борх, 1648, NG896 (позика Рейксмузеуму SK-C-1683) | PD | https://commons.wikimedia.org/wiki/File:Westfaelischer_Friede_in_Muenster_(Gerard_Terborch_1648).jpg |
| l4 | amsterdam-exchange-berckheyde.jpg | Йоб Беркгейде, бл. 1670, Бойманс ван Бенінген 1043 (OK) | PD | https://commons.wikimedia.org/wiki/File:Berckheyde,_Job_Adriaensz.%E2%80%94Binnenplaats_van_de_Oude_Beurs_te_Amsterdam_na_1668%E2%80%94c.1670%E2%80%94Museum_Boijmans_Van_Beuningen%E2%80%941043_(OK)%E2%80%94WD_item_Q19924911.jpg |
| l5 | dejima.jpg | майстерня Кавахари Кейґи, бл. 1833–1836, Рейксмузеум NG-1191 | CC0 | https://commons.wikimedia.org/wiki/File:Het_eiland_Deshima,_NG-1191.jpg |
| l6 | versailles-1668-patel.jpg | П'єр Патель, 1668, Версаль MV 765 | PD | https://commons.wikimedia.org/wiki/File:Chateau_de_Versailles_1668_Pierre_Patel.jpg |
Не взято: `Rijksmuseum SK-A-405` («після тер Борха», копія); `English_Bill_of_Rights_of_1689.jpg` (304 px); німецька гравюра страти Карла I (натуралістична). Commons api.php 04.11 — 429 з першого запиту; працювали WebFetch сторінок і thumb.

### Факти (нові; ≥ 2 джерела)
1. Луї XIV: н. 5.09.1638; король 14.05.1643 (4 роки); особисте правління з березня 1661 (смерть Мазаріні); † 1.09.1715; 72 р. — https://en.wikipedia.org/wiki/Louis_XIV ; https://static-prod.lib.princeton.edu/versailles/content/chronology/index.html
2. Двір і уряд у Версалі з 6.05.1682 — https://en.chateauversailles.fr/discover/history/key-dates/versailles-capital-kingdom-1682 ; https://en.wikipedia.org/wiki/Palace_of_Versailles
3. Генеральні штати не скликали 1614–1789 (175 р.) — https://en.wikipedia.org/wiki/Estates_General_of_1789 ; https://alphahistory.com/frenchrevolution/estates-general/
4. «Держава — це я» — апокриф (немає в реєстрах Паризького парламенту, поширилось у XIX ст., Лемонте 1818); передсмертне «Je m'en vais, mais l'État demeurera toujours» засвідчене — https://en.wikipedia.org/wiki/L%27%C3%89tat,_c%27est_moi ; https://www.laculturegenerale.com/?p=33969
5. Портрет Ріго 1701, Лувр INV 7492, 277 × 194 см («майже три метри») — https://en.wikipedia.org/wiki/Portrait_of_Louis_XIV ; https://quod.lib.umich.edu/h/hart/x-1303404/07d113890
6. Lever: знать змагалася за честь подати королю сорочку — https://en.wikipedia.org/wiki/Levee_(ceremony) ; https://earlymodernfrance.org/node/127 (Gallo 2008, анотація); у тексті — «подавати йому одяг уранці».
7. Кольбер — генеральний контролер фінансів 1665–1683, кольбертизм/меркантилізм, мита — https://en.wikipedia.org/wiki/Colbertism ; https://www.ebsco.com/research-starters/business-and-management/development-mercantilism
8. Стюарти: 24.03.1603 Яків VI → Яків I — https://en.wikipedia.org/wiki/Union_of_the_Crowns ; https://www.nms.ac.uk/discover-catalogue/a-brief-history-of-james-vi-and-i
9. Карл I: Personal Rule 1629–1640; війна 1642; страта 30.01.1649 («тиран»); скасування монархії; Кромвель лорд-протектор 16.12.1653, † 1658; реставрація 1660 — https://www.worldhistory.org/English_Civil_Wars/ ; https://en.wikipedia.org/wiki/Execution_of_Charles_I
10. Славна революція: Вільям висадився 5.11.1688; Яків II — до Франції 23.12.1688; Марія — донька Якова; Вільям — штатгальтер — https://en.wikipedia.org/wiki/Glorious_Revolution ; https://www.worldhistory.org/English_Civil_Wars/ (контекст)
11. «Білль про права»: декларацію прочитано 13.02.1689 (на сувої — «thirteenth day of February … 1688», старий стиль), королівська згода 16.12.1689; статті про податки, військо, вибори, часте скликання — https://avalon.law.yale.edu/17th_century/england.asp ; https://en.wikipedia.org/wiki/Bill_of_Rights_1689 ; чинний — https://www.legislation.gov.uk/aep/WillandMarSess2/1/2/contents
12. Портрет Кромвеля, Роберт Вокер, бл. 1649, NPG 536 — сторінка Commons + https://www.npg.org.uk/collections/search/portrait/mw01594/Oliver-Cromwell
13. Тридцятилітня війна: 23.05.1618 (три особи, усі вижили); Густав II Адольф 1630 / † Лютцен 1632; Валленштейн † 1634; Франція 1635–1648; Рішельє — головний міністр 1624–1642, союз зі Швецією — https://www.worldhistory.org/Thirty_Years'_War/ ; https://en.wikipedia.org/wiki/Thirty_Years%27_War ; https://www.dhm.de/mediathek/en/web/ida0/timeline/tuerckheim-richelieu-en/
14. Втрати: 4,5–8 млн загиблих; населення імперії −15–20 % (Вілсон) / «щонайменше п'ята частина»; окремі краї > 50 % → у тексті «приблизно на п'яту частину» — https://en.wikipedia.org/wiki/Thirty_Years%27_War ; https://www.rorotoko.com/micro-interviews/20100423-wilson-peter-on-europe-tragedy-history-thirty-years-war-1 ; https://academic.oup.com/gh/article/28/2/229/558475
15. Вестфальський мир: Оснабрюк і Мюнстер, 24.10.1648; 109 делегацій; незалежність Сполучених провінцій і Швейцарії, визнання кальвінізму, землі Швеції й Франції; «вестфальський міф» — суперечка істориків — https://en.wikipedia.org/wiki/Peace_of_Westphalia ; https://www.worldhistory.org/Thirty_Years'_War/
16. Картина тер Борха: присяга 15.05.1648 у ратуші Мюнстера; голландці підносять руки, іспанці — рука на Біблії; іспанці присягали першими, сцену поєднано; автопортрет крайній ліворуч; «presumably an eyewitness» — https://www.nationalgallery.org.uk/paintings/gerard-ter-borch-the-ratification-of-the-treaty-of-munster ; https://www.rijksmuseum.nl/en/collection/object/Het-sluiten-van-de-Vrede-van-Munster--e60c0795fb382742305dce66375a935d
17. Жовті Води — травень 1648 (facts/hist №109) — синхронізація з 15.05.1648.
18. Ост-Індська компанія: 20.03.1602; монополія в Азії; право воювати, укладати договори, будувати фортеці, карбувати монету; Батавія 30.05.1619; розпуск 31.12.1799 — https://en.wikipedia.org/wiki/Dutch_East_India_Company ; https://www.worldhistory.org/Dutch_East_India_Company/
19. Біржа Гендріка де Кейзера відкрита 1611 р.; акції VOC — https://beursvanberlage.com/visit/history/ ; https://core.ac.uk/download/489629032.pdf (Petram)
20. Банда 1621: > 90 % населення вбито, вигнано або продано в рабство; мускатний горіх — лише Банда до XIX ст. — https://www.worldhistory.org/Dutch_East_India_Company/ ; https://en.wikipedia.org/wiki/Banda_Islands
21. Балтійська торгівля зерном — «moedernegotie» («мати всієї торгівлі»), Гданськ — Амстердам — https://mass.cultureelerfgoed.nl/routes/baltic-sea-timber-trade ; https://www.zapiskihistoryczne.pl/files/issues/0f4085e941f7be74b08e888427206a15_ZH_2017_82-4_06_ENG_Bogucka_N.pdf ; https://huygens.knaw.nl/?p=11473
22. Японія: сьогунат 1603; заборона християнства 1614 (подекуди 1612); Сімабара 1637–1638; португальцям заборонено 1639; голландці на Дедзімі з 1641; виїзд/повернення — смерть (едикт 1636); «сакоку» — термін 1801 (Сідзукі Тадао); кінець — Канаґава 1854; «понад 200 років» — https://en.wikipedia.org/wiki/Sakoku ; https://en.wikipedia.org/wiki/Dejima ; https://www.mlit.go.jp/tagengo-db/en/R1-00825.html ; https://countrystudies.us/japan/20.htm
23. Цін: Пекін 1644 (маньчжури, Доргонь, Шуньчжі); Кансі 1684 — митниці в чотирьох провінціях; 1757 — лише Кантон; кінець системи 1842 — https://en.wikipedia.org/wiki/Canton_System ; https://en.wikipedia.org/wiki/Great_Clearance
24. Лист Цяньлуна Георгу III 1793 (пер. Backhouse & Bland 1914) — «our Celestial Empire possesses all things in prolific abundance and lacks no product within its own borders… no need to import the manufactures of outside barbarians» — https://sourcebooks.web.fordham.edu/mod/1793qianlong.asp ; https://open.oregonstate.education/middleearlymodernages/chapter/emperor-qianlong-letter/ (Harrison, AHR 2017 — лист часто читають спрощено)
25. Богдихан — від монг. «Богда-хан» («священний хан»), титул цінських імператорів у монгольських і московських (Нерчинськ) текстах — https://kaweah.freedombox.rocks/kiwix/wikipedia_en_all_maxi_2023-10/Bogda_Khan ; https://dic.academic.ru/dic.nsf/ruwiki/968094 (СУМ / sum.in.ua 04.11 — 503, звірити верифікатору)

### Опори завдань (D-019), де неочевидно
- l1 #3 multi «знаки влади» — з фото на тому ж екрані (корона на подушці, скіпетр, меч); правильні варіанти не в `cap`.
- l2 #6 Кромвель — порівняння з портретом l1 (описано в body).
- l3 #9 link — дати Жовтих Вод і Мюнстера на тому ж екрані та в intro (15.05.1648).
- l4 #4 link — w8s1 l5 «фільварки» + body.
- l5 #6 — з картини (один міст із брамою, храму немає).
- boss Q3 (link) — l3 #9; Q5 — l5 #5.

### Сумнівне / для верифікатора
- l1: «подавати йому одяг уранці» — спрощення церемонії lever (сорочку подавав найзнатніший).
- l3: «скоротилося приблизно на п'яту частину» — оцінки 15–20 % (Вілсон) і більше.
- l4 outro — «одну з перших великих компаній з акціями» (worldhistory: «first publicly traded», en.wiki: «one of the first joint-stock companies»).
- l5: Дедзіма на картині 1830-х рр. (пізніше за XVII ст.) — у `cap` дата є.
- Програма (Гісем) пише «Вільям ІІІ Оранський», «Рішельє» — так і в уроці; w8s3 використовує «Республіка Сполучених провінцій» — узгоджено.
