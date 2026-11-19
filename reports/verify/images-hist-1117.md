# Верифікація images-maps-hist-world-1117 (hist), коміт e7900e5

Верифікатор: verifier-images-hist-1117, 2026-11-18. Скіли: content-verify, hist-images.
Обсяг: 7 нових карт, 4 замінені файли (5 шляхів), 28 уроків у 19 файлах `content/hist` (8 екранів із новою картою, 20 перейменованих або переписаних).

## 1. Ліцензії й автори (wikitext сторінки файлу через curl `action=raw`; API `imageinfo` 3 рази поспіль віддав 429)

| Файл | Сторінка Commons | Автор, ліцензія на Commons | credits / cap | Зміст збігається | Вердикт |
|---|---|---|---|---|---|
| s2/historical-regions-map.jpg | https://commons.wikimedia.org/wiki/File:Ukraine-Historical_regions_uk.png | Dima Sergiyenko, «attribute as DiscoverWithDima»; {{Cc-by-sa-4.0}} | так | українська карта історичних земель | ✅ |
| g6s4/greek-colonies-map.jpg | https://commons.wikimedia.org/wiki/File:Ancient_Greek_Colonies_of_N_Black_Sea.png | MapMaster (author assumed), GFDL + CC BY-SA 3.0 migrated | так | «Greek Colonies… c. 450 BCE» | ✅ |
| g7s1/east-slavic-tribes-map.jpg | https://commons.wikimedia.org/wiki/File:East_Slavic_tribes_peoples_8th_9th_century.jpg | SeikoEn, 2010, GFDL + CC BY-SA 3.0 migrated | так | заголовок на карті «(700–850)» = cap | ✅ |
| g8s1/commonwealth-1619-map.jpg | https://commons.wikimedia.org/wiki/File:Polish-Lithuanian_Commonwealth_(1619)_compared_with_today%27s_borders,_Ukrainian_version.png | Bogomolov.PL, {{self\|cc-by-sa-4.0}} | так; легенда 1–5 у cap = легенда в описі | так | ✅ |
| g9s1/partitions-map.jpg | https://commons.wikimedia.org/wiki/File:Partitions_of_Poland.png | Halibutt (Rzeczpospolita_Rozbiory_3.png), похідна — Sneecs; GFDL, migration=relicense (CC BY-SA 3.0) | так | так | ✅ |
| g11s1/occupation-map-1943.jpg (заміна) | https://commons.wikimedia.org/wiki/File:Reichskommissariat-Ukraine.jpg | XrysD і Poeticbent, GFDL, migration=relicense | так («CC BY-SA 3.0 / GFDL 1.2+») | той самий малюнок, 1000→1280 px; «as of September 1943» = cap | ✅ |
| g11s5/invasion-map-2022-03-27.jpg | https://commons.wikimedia.org/wiki/File:2022_Russian_invasion_of_Ukraine_27-03-2022.svg | Matttest, {{cc-by-sa-4.0}}, «станом на 27 березня» | так | так; легенда («Ukrainian advances» тощо) = cap | ✅ |
| g5s6/ballot-1991.jpg = g11s3/ballot-1991.jpg (заміна, файли тотожні) | https://commons.wikimedia.org/wiki/File:Buleten_1991-12.jpg | Верховна Рада, PD-UA-exempt | без змін | той самий бюлетень, текст тотожний | ✅ |
| g11s3/crimea-ballot-1991.jpg (заміна) | https://commons.wikimedia.org/wiki/File:1991_Crimean_referendum_ballot.jpg | Кримська обласна рада, PD-UA-exempt / PD-ineligible | без змін | той самий бюлетень | ✅ |
| g8s6/pale-map-1905.jpg (заміна) | https://commons.wikimedia.org/wiki/File:Map_showing_the_percentage_of_Jews_in_the_Pale_of_Settlement_and_Congress_Poland,_The_Jewish_Encyclopedia_(1905).jpg | The Jewish Encyclopedia, т. 10, 1905, с. 531; {{JewishEncyclopedia}} (PD) | без змін | та сама карта; нова версія сіра замість сепії | ✅ |

Кожне зображення я відкрив і подивився. Старі версії замінених файлів (з `e7900e5^`) порівняв із новими поруч: зміст той самий.

**Апскейл `historical-regions-map.jpg` (694×482 → 1388×964, 141 КБ).** Нових деталей немає, але й шкоди теж: на 360 px (328×228 у картці) і в повноекранному збільшенні ×2,25 підписи читаються, артефактів немає (знімки нижче). Повертати оригінал не обов'язково, виграш був би лише в розмірі (≈ –80 КБ). Рішення: **прийнятно**, можна лишити. Векторної української версії немає: на сторінці файлу стоїть {{Convert to SVG}}.

## 2. Факти

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| g9s1l1 e3: Житомир — тоді (1667–1793) центр Київського воєводства | uk.wikipedia «Київське воєводство» (curl raw: «після його втрати в 1648—1667 роках — Житомир», посилання на ЕІУ) https://uk.wikipedia.org/wiki/Київське_воєводство ; Encyclopedia of Ukraine «Kyiv voivodeship» (через WebSearch: «the capital of the restored voivodeship under Poland became Zhytomyr»; 1793 — перехід до Росії) https://www.encyclopediaofukraine.com/pages%5CK%5CY%5CKyivvoivodeship.htm ; en.wikipedia Zhytomyr https://en.wikipedia.org/wiki/Zhytomyr | ✅ |
| s2 h23 e1: Поділля — між Дністром і Південним Бугом, центр — Кам'янець-Подільський | uk.wikipedia «Поділля» («історико-географічна область, розташована між Південним Бугом і Дністром»; Подільське воєводство, «адміністративний центр — Кам'янець») https://uk.wikipedia.org/wiki/Поділля ; EoU «Podilia» / «Podilia voivodeship» та en.wikipedia Podolia (через WebSearch) https://www.encyclopediaofukraine.com/pages%5CP%5CO%5CPodiliavoivodeship.htm , https://en.wikipedia.org/wiki/Podolia | ✅ |
| g11s1l2 e1 cap: Krim — лише північна Таврія, сам півострів під військовою адміністрацією; стан на вересень 1943 р. | опис файлу на Commons («as of September 1943»); en.wikipedia «German occupation of Crimea» https://en.wikipedia.org/wiki/German_occupation_of_Crimea_during_World_War_II і Duncker & Humblot https://elibrary.duncker-humblot.com/book-chapter/1387/download (обидва через WebSearch) | ✅ |
| g8s1l1 e4 cap: 1619 = 50 років після унії 1569; легенда 1–5 | опис файлу на Commons (uk/en/pl) | ✅ |
| g6s4 cap: c. 450 р. до н. е.; g7s1 cap: 700–850 рр.; g11s5 cap: 27.03.2022 | підписи на самих картах і описи Commons | ✅ |

Інші підписи — це переклади написів на картах, я звірив їх з картою.
Мережа: WebFetch не відкривав жоден зовнішній домен (ENOTFOUND: commons, encyclopediaofukraine, history.org.ua, esu, britannica). Тому другі джерела — це сторінки, відкриті через WebSearch, плюс uk.wikipedia через curl.

## 3. Завдання й опора (D-019). Розв'язав сам, потім звірив із `correct`

| Екран | Моя відповідь = correct | Звідки відповідь | Вердикт |
|---|---|---|---|
| s2 h23 e1 (info) і далі e2, e4–e6 | — / так | e1 (текст), карта підтверджує: Галичина на заході, Слобожанщина на сході | ✅ |
| g5s5 h55 e3 sort | так | e2 + cap (Galizien ліворуч, Wolhynien/Podolien праворуч); назв імперій cap не дає | ✅ |
| g6s4 h641 e3 sort | так | e2 + карта (Olbia на лимані Hypanis, Chersonesos на південному заході, Panticapaeum на сході); у cap немає назв кошиків | ✅ |
| g6s4 h642 e3 choice (Керч) | так | e0 (Керченська протока), h641 e3 («Пантікапей, нині Керч»), карта; у cap немає «Керч» | ✅ |
| g7s1 l1 e4 sort | так | цитата літопису на екрані + e3 (Київ, Іскоростень) + карта | ✅ |
| g8s1 l1 e4 sort | так | e2 (перелік земель Корони) + карта (Україна — 1, Білорусь — 3) | ✅ |
| g9s1 l1 e3 sort | так | e2 + карта (Lwów помаранчевий 1772 Австрія; Żytomierz, Bracław 1793 і Łuck 1795 — зелені, Росія). Сам Київ на карті білий, тому примітка «Житомир — тоді центр Київського воєводства» потрібна і правильна | ✅ |
| g11s1 l2 e1 info → e2, e6 | так | тепер на e1 є карта, на яку посилається підказка e6 «Поєднай карту адміністрацій…» | ✅ |
| g11s5 l3 e0 intro | — | неоцінюваний; cap не підказує відповідей l3 | ✅ |
| g6s9l1 e6 | так | перелік річок на екрані | ✅ |
| g6s5-l3 e3, g6s5-l5 e5 | так | цитата Йордана (Данастр/Данапр); l5 — фінал, опора в l3 | ✅ |
| g7s1l6 e3 | так | e2 | ✅ |
| g7s3l4 e4 | так | e2 (Переяславщина 1061 р.) + міркування «на межі зі степом» | ✅ |
| g7s4l4 e7 | так | e5 | ✅ |
| g7s5l1 e3 | так | e2 | ✅ |
| g7s6l4 e5 | так | e2, e4, урок про Вітовта (hint) | ✅ |
| g8s1l7 e3 | так | e2 | ✅ |
| g8s4l2 e3 | так | e2 | ✅ |
| g8s6l6 e3 (фінал) | так | уроки розділу (Херсон, Миколаїв, межа осілості, 1764/1775); формулювання тепер не обіцяє карти | ✅ |
| g9s1l2 e4/e5 | так | e4 (перелік) | ✅ |
| g10s2l5 e5, l6 e4, l9 e5 | так | l5 e4; l6 e2; l9 e5 — опора в l11 через `pre`, дитина «наносить» шлях, карти не обіцяно | ✅ |
| g10s5l1 e3, l4 e1 | так | l1 e2; l4 — фінал | ✅ |
| g11s2l5 e4 | так | `pre: g11s2l8` | ✅ |
| g11s5l4 e6 | так | текст уроку | ✅ |

Заголовки й `eyebrow` більше не обіцяють карти, якої немає. Лишилися метафори поза задачею: g7s3l3 e4 fbOk «Карта в голові!», g7s3l5 e4 «Карта в порядку.», g6s9l3 e9 «Карту зібрано.», g9s5l6 e7. Їх можна переписати, але не обов'язково.

## 4. Браузер (Node Playwright, 360×740, DPR 2; і 1024 px)
Відкрив 9 екранів із картою: h23 e1, h641 e3, h642 e3, g7s1l1 e4, g8s1l1 e4, g9s1l1 e3, g11s1l2 e1, g11s5l3 e0, h55 e3. Кожен переглянув у повноекранному збільшенні ×1 і ×2,25. Помилок сторінки немає, зображення вантажаться.
- На 360 px усі карти видно майже повністю, підписи в збільшенні читаються.
- **g8s1l1 e4 на ширині 1024 px (картка 448 px):** `object-fit: cover` обрізав верх карти, і пункти легенди 1–2 зникли. **Виправлено:** додав `fit: true`.
- kiepert-1849.jpg (h55) лишається дрібним кадром. Задача не тримається на ньому (опора — e2), але перекадрувати варто (автор уже записав це в «відкрите»).

## 5. Правки верифікатора
1. `content/hist/g8-g8s1.js` l1 e4: `fit: true`.
2. `content/hist/g6-g6s4.js` cap h641 e3 і h642 e3: «Hypanis River — Південний Буг, Borysthenes River — Дніпро». На карті Borysthenes підписано ще й місто біля Ольвії, тож старий cap плутав.
3. 28 уроків draft → verified, у шапках файлів — рядок верифікатора.

`validate --section` для 21 розділу й `--diag dgh5`: 0 помилок. Попередження старі (sentenceWords, порядок варіантів у h22). `playtest.py` локально не запускався: у контейнері немає Python-модуля playwright, прогін буде в CI.

## Вердикт
Усі 28 уроків → **verified**. Блокувальних знахідок немає.
Для людини:
- розміри файлів понад docs/IMAGES.md (≤ 1000 px, ≤ 250 КБ): pale-map 335 КБ, invasion 263 КБ, regions 1388 px тощо;
- апскейл regions-map прийнятний, тож це радше смак;
- видалені й замінені файли потраплять у sw.js лише після build оркестратора.
