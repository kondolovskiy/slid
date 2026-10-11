---
claimed_from: review
claimed_at: 2026-10-05T18:54:14.757Z
id: write-hist-g6s2
type: write-section
subject: hist
grade: 6
section: g6s2
weeks: [8, 12]
status: done
claimed_by: verifier-g6s2
created: 2026-09-27
---
# Написати розділ «Трипільська цивілізація» (Історія України, 6 клас)

## Навіщо (з плану, можна уточнити)
Щоб побачити, що на наших землях жили одні з перших землеробів Європи з величезними поселеннями.

## Теми уроків (з плану)
1. Хто такі трипільці
2. Протоміста: Майданецьке і Тальянки
3. Кераміка і символи Трипілля
4. Загадка спалених будинків
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g6-g6s2.js` з `SLID.section("hist", { id: "g6s2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g6s2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g6s2` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-g6s2, 2026-10-05)
Файл `content/hist/g6-g6s2.js`, 5 уроків (усі `draft`), `requires: ["l1"]` (урок 5 кл. «Трипільське розслідування» — не повторюємо його, а йдемо глибше; у tr2 є `pre: "l1"`):
- tr1 «Люди без імені» — хто такі трипільці, археологічна культура, енеоліт (7 екр.)
- tr2 «Поселення-велетні» — протоміста Майданецьке і Тальянки (7 екр.)
- tr3 «Що розповідає глечик» — кераміка, печі, спіраль, біноклеподібні посудини (8 екр.)
- tr4 «Пожежа чи обряд?» — спалені будинки, експериментальна археологія, Небелівка (7 екр., poll `tr4`)
- tr5 «Експедиція в Тальянки» — boss, значок `trypil` «Трипільський археолог» (7 екр.)

Перевірка: `node tools/validate.mjs --section g6s2` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject hist` — у tr1–tr5 прапорців немає. Build і плейтест не запускав (за вказівкою оркестратора).

Зображення: `img/hist/g6s2/` — talianky.jpg (реконструкція, обрізано підпис англійською), house.jpg (реконструкція, обрізано), animal-pot.jpg, pottery-making.jpg, shards.jpg; повторно використано img/trypillia-pot.jpg, trypillia-maidanetske.jpg, trypillia-figurine.jpg. Усі — у `credits` з ліцензією з extmetadata Вікісховища.

### Факти й джерела
З реєстру (дослівно): №1 (V–III тис. до н. е., ≈ 5400–2750 рр. до н. е.), №2 (Майданецьке ≈ 3000 будинків, ≈ 200 га, ≈ 3900–3700 рр. до н. е., геомагнітна зйомка), №3 (населення — від кількох тисяч до понад 10 тис., суперечка), №4 (житла здебільшого згорілі, причина дискусійна), №10 (988 р.).

Нові:
1. Назва — від с. Трипілля на Київщині, де В. Хвойка знайшов перші пам'ятки наприкінці XIX ст. — https://uinp.gov.ua/istorychnyy-kalendar/lyutyy/8/1850-narodyvsya-vikentiy-hvoyka-arheolog (1896 р.); https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\T\R\Trypilliaculture.htm (1897 р.); https://en.wikipedia.org/wiki/Cucuteni%E2%80%93Trypillia_culture (знахідки «представлені 1897»). **Розбіжність 1896/1897** — тому в уроці лише «наприкінці XIX ст.».
2. Територія: від Карпат до Дніпра; сучасні Україна, Молдова, Румунія; у Румунії — культура Кукутені — EoU (вище); en.wikipedia Cucuteni–Trypillia.
3. Заняття: пшениця, ячмінь, горох; корови, свині; серпи з крем'яними вкладнями — EoU (вище); en.wikipedia (wheat, peas, cattle).
4. Енеоліт: кам'яні знаряддя + перші мідні знаряддя й прикраси — EoU (copper tools, weapons, jewelry); en.wikipedia (Chalcolithic, copper).
5. Протоміста: будинки концентричними овалами навколо незабудованої площі — https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0222243 (Hofmann et al. 2019); https://en.wikipedia.org/wiki/Talianki_(archaeological_site).
6. Тальянки — понад 300 га (оцінки 335–450 га), найбільше відоме трипільське поселення — en.wikipedia Talianki; https://localhistory.org.ua/news/na-cherkashchini-vidnovliat-rozkopki-naibilshogo-mista-tripiltsiv/ ; EoU (протоміста 50–340 га).
7. Великі громадські будівлі («мегаструктури») без ознак постійного житла; тлумачення — місця зборів громади — PLOS ONE (вище); https://www.sci.news/archaeology/mega-structures-ukraines-trypillia-culture-community-centers-07630.html
8. Не всі будинки стояли одночасно (поступове заселення рядів) — en.wikipedia Talianki; PLOS ONE (заселення ≈ 3990–3640 рр. до н. е., ≈ 350 років).
9. Посуд ліпили вручну з джгутів (без гончарного круга); мінеральні фарби: червона, біла, чорна — en.wikipedia Cucuteni–Trypillia (hand-coiled; iron oxide, manganese); EoU (white, red, black paints).
10. Печі на два яруси (вогонь окремо від посуду) — EoU («two-tier furnaces»); en.wikipedia Cucuteni–Trypillia (two-chambered kilns).
11. Біноклеподібні посудини — призначення невідоме, вчені сперечаються — https://artsandculture.google.com/story/the-wonderland-of-the-cucuteni-trypillia-culture-national-museum-of-the-history-of-ukraine/MwWhDX1ENQSGog ; https://photo-lviv.in.ua/binoklepodibni-posudyny-abo-zahadky-trypilskoji-kultury-u-fondah-lvivskoho-istorychnoho-muzeyu/
12. Будинки з глиняними стінами на дерев'яному каркасі, часто двоповерхові — EoU; Google Arts & Culture (вище).
13. Більшість, але не всі будинки згоріли (Майданецьке: ≈ 2300 згорілих і ≈ 670 незгорілих) — https://www.academia.edu/33430141/Maidanetske_New_Facts_of_a_Mega_Site_pdf ; реєстр №4. Числа в урок не брав.
14. Поселення відбудовували на тому самому місці — https://en.wikipedia.org/wiki/Burned_house_horizon ; en.wikipedia Cucuteni–Trypillia (цикл 60–80 років; цифру в урок не брав).
15. Дослід у Небелівці 2014–2015 рр. (копії хат, спалення; британські й українські дослідники, проєкт AHRC, M. Відейко, J. Chapman, B. Gaydarska): для обпалу як у давніх згарищах треба багато додаткового палива, більше, ніж на будівництво — https://be-ja.org/index.php/journal/article/view/be-ja-9-1-2019-61-90 ; https://www.researchgate.net/publication/337196051_The_Nebelivka_experimental_house_construction_and_house-burning_2014-2015 ; https://en.wikipedia.org/wiki/Burned_house_horizon («enormous quantities of extra fuel»).
16. Версії спалення: обряд «смерті дому», знищення шкідників, напад, випадок — Burned house horizon (вище); en.wikipedia Cucuteni–Trypillia (ritual vs defense debate).

### Сумнівні місця (для верифікатора)
- tr3, завдання «Як зробити глечик»: порядок «розписати → випалити». Розпис до випалу підтверджує лише одне джерело (укр. огляди); частину пізньотрипільського посуду могли фарбувати й після випалу. Перевірити.
- tr3: «посуд не чорніє від кіптяви» у поясненні печі — логічний висновок з «вогонь окремо від посуду», не пряма цитата.
- tr4: «українські й британські дослідники» — за be-ja (проєкт AHRC, Durham) і участю М. Відейка; уточнити склад.
- «Майже 300 футбольних полів» (tr2) — розрахунок 200 : 0,7 ≈ 286 (поле 105 × 68 м ≈ 0,71 га).
- Фото shards.jpg — опису на Вікісховищі немає, атрибуція «трипільські» лише з назви файлу.
- tr1: «вдвічі довше, ніж від хрещення Русі» — 2650 > 2 · (2026 − 988) = 2076 ✓.

### Пропозиції
- Глосарій: додати «протомісто», «енеоліт (мідно-кам'яний вік)», «археологічна культура», «біноклеподібна посудина», «експериментальна археологія»; Хвойка Вікентій — рік відкриття подавати «наприкінці XIX ст.» (1896 чи 1897 — розбіжність джерел).
- SVG-ілюстрація «план протоміста» (овали будинків навколо площі) стала б у пригоді для tr2 і майбутніх уроків.

### Верифікація (verifier-g6s2, 2026-10-06)
Звіт: reports/verify/g6s2.md. 1 ❌ факт (Трипілля — не місце перших знахідок), 1 ❌ фото (shards.jpg без опису — прибрано), кілька ⚠️ — усе виправлено. Усі 5 уроків `verified`. Для людини: підпис фото в g5-s1, `why` у плані.
