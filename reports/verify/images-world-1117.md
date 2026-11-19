# Верифікація: images-maps-hist-world-1117 (world-частина, коміт 50d9f07)

Верифікатор: verifier-images-world-1117, 18.11.2026. Скіли content-verify, hist-images.
Обсяг: 4 нові карти + 1 повторне використання (w11s5l7 e3), 2 перейменування (w10s7l3 e4, w11s2l6 e4), 10 збільшених файлів наявних карт.

Доступ до мережі: Commons API і uk/en.wikipedia API (curl) — відкривались (одна відповідь 429, повтор після паузи — успішний). WebFetch на britannica.com, maps.lib.utexas.edu, en.wikipedia.org, emersonkent.com, princeton.edu — хост поза дозволеними доменами сесії; тому другим джерелом служать результати WebSearch і статті Вікіпедії, отримані через API.

## 1. Ліцензії й автори (Commons API imageinfo + extmetadata, 18.11.2026)

| Файл | Сторінка Commons | Ліцензія (API) | Автор (API) | credits у розділі | Вердикт |
|---|---|---|---|---|---|
| img/world/w7s1/germanic-kingdoms-526.jpg | https://commons.wikimedia.org/wiki/File:C._526_Germanic_Kingdoms.jpg | Public domain | William Robert Shepherd («Historical Atlas», Henry Holt, NY 1911; цифрова обробка — Ty's Commons) | Шеферд, суспільне надбання | ✅ |
| img/world/w7s2/justinian-555.jpg | https://commons.wikimedia.org/wiki/File:Justinian555AD.png | CC BY-SA 3.0 | Tataryn | Tataryn, CC BY-SA 3.0 | ✅ |
| img/world/w8s1/tordesillas-lines.jpg | https://commons.wikimedia.org/wiki/File:Spain_and_Portugal.png | CC BY-SA 3.0 | Lencer | Lencer, CC BY-SA 3.0 | ✅ |
| img/world/w9s1/europe-1815.jpg | https://commons.wikimedia.org/wiki/File:Europe_1815_map_en.png | CC BY-SA 4.0 | Alexander Altenhof | Alexander Altenhof, CC BY-SA 4.0 | ✅ |
| img/world/w11s5/kashmir-map-2003.jpg (наявний) | https://commons.wikimedia.org/wiki/File:Kashmir_map.jpg | Public domain | Central Intelligence Agency, 2003 | ЦРУ США, PD-USGov-CIA-WF | ✅ |

Вміст кожного файлу відкрито інструментом Read: зображення відповідають описам (карта Шеферда 526 р. з легендою «The Germanic Kingdoms and the East Roman Empire in 526»; карта 555 AD; лінії 1493/1494/1529 з легендою; «Europe in 1815»; карта Кашміру ЦРУ).

## 2. Факти в нових `cap`/`body`

| Твердження | Джерела (відкрито в сесії) | Вердикт |
|---|---|---|
| Карта 526 р. — з «Historical Atlas» В. Р. Шеферда, перше видання 1911 р. | Commons API (Credit: «Historical Atlas», Henry Holt, NY 1911); WebSearch: https://maps.lib.utexas.edu/maps/historical/history_shepherd_1911.html (видання 1911), https://www.shadowedrealm.com/medieval-maps/political/view/germanic_kingdoms_and_east_roman_empire_486 (Shepherd 1911, pp. 50–51) | ✅ для «перше видання 1911» (так і сказано в `cap`). Примітка: https://emersonkent.com/map_archive/germanic_roman_526.htm датує саме цю карту виданням 1923–26; `cap` не стверджує, що карта з 1911 р., тож правки не потрібно |
| East/West Goths = остготи/вестготи; Kingdom of the Franks; Angles and Saxons — підписи на карті | Read файлу (написи на карті); uk.wikipedia «Юстиніан I» (королівство остготів в Італії, вестготів в Іспанії) — https://uk.wikipedia.org/wiki/Юстиніан_I | ✅ |
| 555 р.: імперія (червоне) і васали (рожеве) | Commons API ImageDescription («The Eastern Roman Empire (red) and its vassals (pink) in 555 AD»); en.wikipedia «Justinian I» (Belisarius conquered the Vandal Kingdom in North Africa; Liberius reclaimed the south of the Iberian Peninsula, province of Spania) — https://en.wikipedia.org/wiki/Justinian_I | ✅ |
| Лінія папи Олександра VI — 1493 р. (Inter caetera) | en.wikipedia https://en.wikipedia.org/wiki/Treaty_of_Tordesillas (4 May 1493, Inter caetera); WebSearch: https://ebsco.com/research-starters/history/treaty-tordesillas, https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/treaty-tordesillas | ✅ |
| Тордесільяський договір — 1494 р. | uk.wikipedia https://uk.wikipedia.org/wiki/Тордесільяський_договір (7 червня 1494); en.wikipedia (там само); WebSearch-результати вище (June 7, 1494) | ✅ |
| Сарагоський договір — 1529 р. | uk.wikipedia (22 квітня 1529); en.wikipedia (22 April 1529) | ✅ |
| 1500 р. португальський флот на шляху до Індії натрапив на Бразилію; схід Бразилії — португальський бік лінії | en.wikipedia Treaty of Tordesillas («easternmost part of current Brazil was granted to Portugal when in 1500 Pedro Álvares Cabral landed there while he was en route to India»); карта на екрані | ✅ |
| Kingdom of Poland = Царство Польське (1815) | en.wikipedia https://en.wikipedia.org/wiki/Congress_of_Vienna («Kingdom of Poland – called Congress Poland, with the tsar as a king»); uk.wikipedia https://uk.wikipedia.org/wiki/Царство_Польське (1815–1874) | ✅ |
| K. of Lombardo-Venetia = Ломбардо-Венеційське королівство (1815) | uk.wikipedia https://uk.wikipedia.org/wiki/Ломбардо-Венеційське_королівство (створене 1815 за рішенням Віденського конгресу); Read файлу (підпис «K. of Lombardo-Venetia») | ⚠️ → виправлено: у `cap` було «K. of Lombardy-Venetia — Ломбардсько-Венеційське», на карті «Lombardo-Venetia», усталена назва — «Ломбардо-Венеційське» |
| Kingdom of the Netherlands = Нідерланди (з Бельгією) | en.wikipedia Congress of Vienna (new Kingdom of the Netherlands); Read файлу | ✅ |
| Червона лінія — кордон Німецького союзу | легенда на карті («Boundary of German Confederation»); en.wikipedia Congress of Vienna (German Confederation) | ✅ |
| Карта Кашміру — ЦРУ США, 2003 р. | Commons API (Artist CIA, Date 2003, Credit LOC g7653j.ct001059 і UT Austin kashmir_disputed_2003.jpg) | ✅ (той самий файл і підпис, що вже верифіковані в w11s5l3 e5) |

## 3. Завдання → звідки відповідь (D-019)

Кожне завдання розв'язав сам, не дивлячись на `correct`.

| Екран | Моя відповідь | Опора | `cap` видає відповідь? | Вердикт |
|---|---|---|---|---|
| w7s1l1 e3 sort «Хто де заснував королівство?» | остготи → Італія, вестготи → Іспанія, франки → Галлія, англи й сакси → Британія (збіг) | e2 info (дослівно) + карта (Kingdom of the East Goths на Апеннінах, West Goths на Піренеях, Franks у Галлії, Angles and Saxons у Британії); `body` перекладає назви народів, а не країн | ні (у `cap` лише назва карти) | ✅ |
| w7s2l1 e5 multi «Які землі повернув Юстиніан?» | Італія, Північна Африка, південь Іспанії (збіг [0,1,3]) | e4 info (Африка 533–534, Італія 535–554, південь Іспанії) + карта (Italia, Africa, Spania — червоні; Галлія сіра) | ні (у `cap` назв земель немає) | ✅ |
| w8s1l2 e6 choice «Чому в Бразилії говорять португальською?» | «на португальському боці лінії» (збіг 0) | e4 info (схід лінії — Португалії) + карта (виступ Бразилії на схід від суцільної лінії) | ні (`cap` пояснює лінії, не кажучи, чий бік) | ✅; раніше `body` сам казав «на схід від лінії», тепер учень читає карту — краще |
| w9s1l5 e4 info «Хто що отримав» | — (неоцінюваний) | — | — | ✅ |
| w11s5l7 e3 choice «Карта Кашміру на обкладинці» | «частини контролюють Індія, Пакистан і Китай» (збіг 0) | w11s5l3 e5 (та сама карта, `body` з кольорами) + карта | ні | ✅ |
| w10s7l3 e4 sort «Три фронти» | Сталінград, Курськ → Східний; Ель-Аламейн → Північна Африка; Мідвей, Перл-Гарбор → Тихий океан | попередній info «Корінний перелом» (Мідвей у Тихому океані, Ель-Аламейн у Єгипті, Сталінград на Волзі, Курськ — «на сході») + екран «Чому Перл-Гарбор змінив хід війни?» | — | ✅; eyebrow «Три фронти» і fbOk «Битви розподілено за фронтами правильно.» узгоджені з кошиками |
| w11s2l6 e4 sort «Стенд трьох переходів» | Гвоздики → Португалія; хунта → Греція; Франко й 1978 → Іспанія | `pre: w11s2l4` | — | ✅; title і fbOk «Стенд трьох переходів підписано.» узгоджені, рольова рамка «виставка/експонат» збережена |

## 4. Збільшені файли наявних карт

Старі версії взято з `git show 50d9f07^:…`, порівняно зменшені копії (64 px) — середня різниця 0,2–1,3 з 255 (той самий зміст, той самий кадр). Пропорції збігаються з оригіналами Commons (API width/height). Ліцензії з API збігаються з `credits`.

| Файл | Було → стало | Commons (API) | Вердикт |
|---|---|---|---|
| w7s1/migration-map.jpg | 960×679 → 1600×1132 | Invasions of the Roman Empire 1.png, CC BY-SA 2.5, MapMaster | ✅ |
| w7s5/cantino-1502.jpg | 960×451 → 1600×752 | Cantino planisphere (1502).jpg, PD | ✅ |
| w7s6/fra-mauro-map.jpg | 960² → 1280² | Fra Mauro Map FactumArte.jpg, PD | ✅ |
| w8s1/ortelius-world-1570.jpg | 960×654 → 1400×954 | OrteliusWorldMap1570.jpg, PD | ✅ |
| w8s1/ortelius-pacific-1589.jpg | 960×665 → 1400×970 | Ortelius - Maris Pacifici 1589.jpg, PD | ✅ |
| w8s3/ricci-map-1602.jpg | 960×440 → 1920×879 | Kunyu Wanguo Quantu … All panels.jpg, PD | ✅ |
| w8s3/europa-regina.jpg | 700×1119 → 1001×1600 | Europa regina by Sebastian Münster.jpg, PD | ✅ |
| w9s3/austria-hungary-peoples-1911.jpg | 960×729 → 1280×972 | Austria hungary 1911.jpg, PD (Shepherd) | ✅ |
| w9s4/slave-population-map-1861.jpg | 1000×798 → 1600×1277 | … LOC 99447026.jpg, PD (Hergesheimer) | ✅ |
| w9s5/hark-dogs-map-1914.jpg | 960×700 → 1600×1168 | Hark! Hark! The Dogs Do Bark!.jpg, PD | ✅ |

## 5. Браузер (360 px, Node Playwright, `python3 -m http.server`)

Екрани w7s1l1 e3, w7s2l1 e5, w8s1l2 e6, w9s1l5 e4, w11s5l7 e3, w10s7l3 e4, w11s2l6 e4 (+ w7s1l1 e5, w8s3l1 e0 як зразки збільшених файлів): зображення завантажуються (naturalWidth 1257/1600/1280/1920/960), повноекранне збільшення відкривається, після «+ +» підписи карт (Kingdom of the East Goths, Treaty of Tordesillas (1494) тощо) читаються; помилок сторінки й 4xx немає. Плейтест повністю не запускав (Python-playwright у контейнері — CI).

## 6. validate

`node tools/validate.mjs --section` для w7s1, w7s2, w7s5, w7s6, w8s1, w8s3, w9s1, w9s3, w9s4, w9s5, w10s7, w11s2, w11s5 — 0 помилок, 0 попереджень (і після правок верифікатора).

## 7. Правки верифікатора

1. content/world/g9-w9s1.js, w9s1l5 e4 `cap`: «K. of Lombardy-Venetia — Ломбардсько-Венеційське королівство» → «K. of Lombardo-Venetia — Ломбардо-Венеційське королівство» (так на карті й в усталеній назві).
2. Статуси `draft` → `verified`: w7s1l1, w7s2l1, w8s1l2, w9s1l5, w10s7l3, w11s2l6, w11s5l7.

## 8. Для оркестратора / людини (не причина повертати задачу)

- **Розміри суперечать docs/IMAGES.md і скілу hist-images** (≤ 1000 px, ≤ 250 КБ): нові й збільшені карти — до 1920 px і до 364 КБ (10 із 14 файлів > 250 КБ; разом +≈ 2,5 МБ в офлайн-кеші). Це свідоме рішення за вимогою оркестратора (повноекранне збільшення); потрібне рішення в decisions.md і оновлення docs/IMAGES.md, інакше наступні агенти стискатимуть назад.
- Нові файли й більші розміри потраплять у sw.js лише після build оркестратора.
- Не зроблено автором (лишаються малими): w8s1/waldseemuller-america.jpg, w9s3/italy-unification-map.jpg, w11s5/kashmir-map-2003.jpg (більшого оригіналу немає).

## Вердикт по уроках

| Урок | Вердикт |
|---|---|
| w7s1l1, w7s2l1, w8s1l2, w9s1l5, w10s7l3, w11s2l6, w11s5l7 | verified |
| Розділи зі збільшеними файлами (w7s5, w7s6, w8s1, w8s3, w9s3, w9s4, w9s5) | текст не змінено, статуси не чіпав; файли — той самий зміст і джерело ✅ |
