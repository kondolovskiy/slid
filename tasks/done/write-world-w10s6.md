---
claimed_from: todo
claimed_at: 2026-11-11T18:17:26.038Z
id: write-world-w10s6
type: write-section
subject: world
grade: 10
section: w10s6
weeks: [22, 25]
status: done
claimed_by: w-write-world-w10s6
created: 2026-11-10
---
# Написати розділ «Азія й Латинська Америка між війнами» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як Японія стала агресором, Китай і Туреччина шукали свій шлях, а Ганді боровся за Індію без зброї.

## Теми уроків (з плану)
1. Японія: мілітаризм і експансія
2. Китай: Гоміндан і комуністи
3. Ганді: ненасильницький опір в Індії
4. Ататюрк і нова Туреччина
5. Латинська Америка: демократії й диктатори
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
- Файл `content/world/g10-w10s6.js` з `SLID.section("world", { id: "w10s6", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s6/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s6` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Виконано (w-write-world-w10s6, 2026-11-11)
Файл `content/world/g10-w10s6.js`, 6 уроків (усі `draft`): l1 «Війна на шовку» (Японія), l2 «Два шляхи для Китаю», l3 «Сіль проти імперії» (Ганді), l4 «Нові літери для нової країни» (Ататюрк), l5 «Переворот у Буенос-Айресі» (Латинська Америка; `link` — еміграція українців до Аргентини), l6 boss «Атлас міжвоєнного світу» (значок `asiaamerica`, у кожному завданні `pre`).
`requires`: w9s4l1, w9s4l3, w9s4l4, w10s1l5, w10s2l2, w10s3l2, g9s4l4 (усі наявні). validate — 0/0; euphony --subject world --section w10s6 — 0; stats — без прапорців.
Увага: `node tools/euphony.mjs --section w10s6` без `--subject world` шукає в ukr і дає код 2 — запускати з `--subject world`.

### Зображення (D-027) — img/world/w10s6/
| урок | файл | Commons | ліцензія (країна / США) |
|---|---|---|---|
| l1 | kimono-1932.jpg | File:Mannen_nagajuban_met_de_Mukden_en_Shanghai_incidenten,_AK-RAK-2009-3-78.jpg (Rijksmuseum, http://hdl.handle.net/10934/RM0001.COLLECT.481448) | CC0 (музей) |
| l2 | whampoa-1924.jpg | File:1924年6月16日孙中山、蒋介石、廖仲恺、宋庆龄在黄埔军校开学典礼上.jpg | PD-China (50 р. від публікації) + PD-US-expired (до 1931). Мініатюра 500 px — оригінал лише 844 px |
| l3, l6 | salt-march-1930.jpg | File:Marche_sel.jpg | PD-India + PD-India-URAA |
| l4 | alphabet-kayseri-1928.jpg | File:Ataturk-September_20,_1928.jpg (джерело tccb.gov.tr; дата 20.09.1928 — також фотоархів МОН Туреччини meb.gov.tr/belirligunler/ataturk/foto/008) | PD-Turkey (юр. особа / анонім — 70 р. від оприлюднення); США: на сторінці тега немає — фото 1928 р., опубліковане до 1931 р., тож PD у США за строком; за Commons:Copyright_rules_by_territory/Turkey URAA не відновлює роботи, опубліковані до 1931 р. **Верифікатору: перевірити дату першої публікації** |
| l5 | buenos-aires-1930.jpg | File:Plaza_del_Congreso_durante_el_golpe_de_Estado_de_Uriburu_de_1930.png (Plus Ultra, жовтень 1930, БН Аргентини) | PD-AR-Photo (20 р.); США — опубліковано 1930 р. (до 1931) |
| l5, l6 | decree-1930.jpg | File:Disolución_del_Congreso_tras_el_golpe_de_Estado_de_Uriburu.png (там само) | рукопис Урібуру († 1932, > 70 р.); репродукція — PD-AR-Photo; США — опубліковано 1930 р. |
Сумнівне: опис Commons для площі — «durante el golpe»; у cap я пишу лише «Площа Конгресу, 1930 р.», бо PDF журналу (publicaciones.bn.gob.ar) не відкрився (TLS-ланцюг сервера) і підпис журналу не звірено. Фото кімоно в l1 — річ 1932 р., не фото подій.
Відхилені: Lytton_Commission_at_railway.jpg (джерело «Internet», 500 px), Propaganda_Poster_of_Manchukuo_(1932).jpg (CC BY-SA від Instagram — відмивання ліцензії), Manchukuo_poster.jpg (оскаржений PD-1923), Mukden_1931_blast_spot.JPG (на фото тіло), Whampoa3.jpg і фото з He Yingqin (без тега США).

### Факти й джерела
- Японія: загальне чоловіче виборче право й закон про охорону порядку 1925 р.; Showa-депресія — https://www.ndl.go.jp/modern/e/cha3/description13.html ; https://www.ndl.go.jp/modern/e/cha3/description16.html (знайдено пошуком по розділу)
- Обвал цін на шовк-сирець, збідніння селян — https://ch.u-tokyo.ac.jp/ocw-files/lecture_files/eco_04/12/notes/en/CEHJ-12.pdf ; https://visualizingcultures.mit.edu/protest_interwar_japan/pij1_essay03.html
- Мукден 18.09.1931: колію підірвали офіцери Квантунської армії; пошкодження ≈ 1,5 м, потяг проїхав; без наказу Токіо (історики сперечаються, чи знали генерали) — https://www.ndl.go.jp/modern/e/cha4/description01.html ; https://en.wikipedia.org/wiki/Mukden_incident ; https://ebsco.com/research-starters/history/manchuria-occupation . Маньчжоу-го 1932, Пуї — там само + https://countrystudies.us/china/22.htm . Залізниця з 1904–1905 рр. (Портсмутський мир) — en.wiki Mukden incident / South Manchuria Railway (загальновідоме, верифікатору — звірити формулювання «Після війни з Росією 1904–1905 рр. Японія володіла залізницею»).
- 15.05.1932 — вбивство Інукаї морськими офіцерами, кінець партійних кабінетів до повоєнних часів — https://www.ndl.go.jp/modern/e/cha4/description02.html
- 26.02.1936 — ≈ 1400 солдатів, придушено 29.02, голос армії посилився — https://www.ndl.go.jp/modern/e/cha4/description07.html ; https://en.wikipedia.org/wiki/February_26_incident
- Антикомінтернівський пакт 25.11.1936, Італія 1937 — https://www.nationalww2museum.org/war/articles/nazi-germany-imperial-japan-anti-comintern-pact ; https://en.wikipedia.org/wiki/Anti-Comintern_Pact
- Марко Поло 7.07.1937 — https://origins.osu.edu/read/marco-polo-bridge-incident-1937 ; https://countrystudies.us/china/22.htm ; NDL cha4.
- Нанкін: Токійський трибунал — понад 200 тис.; Китай — 300 тис.; історики — від ≈ 40 тис. (Хата) — https://en.wikipedia.org/wiki/Death_toll_of_the_Nanjing_Massacre ; https://blogs.princeton.edu/witnessingdisaster/peter/ (у тексті: «від кількох десятків тисяч до 300 тис.»)
- Китай: 1.01.1912 Сунь — тимч. президент; «Три народні принципи»; 4.05.1919 (Шаньдун); КПК ≈ 300 членів 1922, Гоміндан 150 тис.; радники СРСР; Вампу 1924, Чан Кайші; Сунь † березень 1925; Північний похід липень 1926; Шанхай квітень 1927, Нанкін; 1928 визнання; Мао, Цзянсі 1931; Великий похід жовтень 1934 — жовтень 1935, ≈ 100 тис. → ≈ 8 тис.; Сіань грудень 1936; другий єдиний фронт 1937 — https://countrystudies.us/china/19.htm , /20.htm , /21.htm , /22.htm (Library of Congress); https://en.wikipedia.org/wiki/Long_March (25 тис. лі ≈ 12,5 тис. км за Мао; ≈ 6 тис. км — Jocelyn і McEwen, 2003; ≈ 86–100 тис.; ≈ 8 тис.). Дата фото Вампу 16.06.1924 — опис Commons + huangpu.org.cn.
- Індія: Амрітсар 13.04.1919 — Гантер 379, ІНК понад 1000 — https://encyclopedia.1914-1918-online.net/article/amritsar_massacre_of ; https://www.historytoday.com/node/49977 . Чаурі-Чаура 4.02.1922, Ганді зупинив рух — https://janataweekly.org/100-years-of-chauri-chaura-lessons-from-gandhi-for-todays-india/ ; https://historyofthetwentiethcentury.com/wp-content/uploads/2021/09/252-Mahatma-Gandhi-Ki-Jai.pdf
- Лист Ганді Ірвіну 2.03.1930 — цитати перекладено точно (позначено «переклад, скорочено»): «Whilst therefore I hold British rule to be a curse, I do not intend to harm a single Englishman…»; «I regard this tax to be the most iniquitous of all from the poor man's standpoint. As the Independence Movement is essentially for the poorest in the land, the beginning will be made with this evil.» — https://k12.hillsdale.edu/k12/media/Resources/Documents/Upper%20School/History/04-Letter-to-Lord-Irwin-Gandhi.pdf ; https://mkgandhi.org/articles/salt_satya.php (другу фразу цитує дослівно). Вставка «[на сіль]» — пояснення в дужках.
- Соляний похід: 12.03.1930, 78 супутників, 241 миля (≈ 390 км), 24 дні, сіль 6.04 о 8:30, арешт Ганді 4–5.05 («на початку травня»), ув'язнених 60–95 тис. — https://mkgandhi.org/articles/salt_satya.php ; https://en.wikipedia.org/wiki/Salt_March
- Незалежність 15.08.1947, поділ, убивство Ганді 30.01.1948 (лише в outro й закритому тексті) — загальновідоме; переговори 1931 — mkgandhi (звільнення 25.01.1931).
- Туреччина: перемир'я 30.10.1918, Севр 10.08.1920, Самсун травень 1919, ВНЗ квітень 1920, Ізмір 1922, султанат 1.11.1922, Лозанна 24.07.1923, республіка 29.10.1923, халіфат 3.03.1924, закон про капелюхи 25.11.1925, Цивільний кодекс 1926 (заборона багатоженства, цивільний шлюб), світськість і латинська абетка 1928, жінки — місцеві вибори 1930 (3.04), парламент 1934 (5.12), прізвища 1934, Ататюрк; однопартійність 1923–1945; † 10.11.1938 — https://countrystudies.us/turkey/13.htm , /14.htm , /15.htm ; https://en.wikipedia.org/wiki/Atat%C3%BCrk%27s_reforms . Закон про абетку 1.11.1928 — ataturkansiklopedisi.gov.tr (Harf devrimi), en.wiki 1928 in Turkey.
- Латинська Америка: закон Саенса Пеньї 1912, Ірігоєн 1916 і 1928 — https://www.conicet.gov.ar/la-ley-saenz-pena-y-la-fragil-transicion-hacia-la-argentina-democratica/ ; https://www3.hcdn.gob.ar/secgralpres/cultura/museo/muestras/pdf/4toperiodoES.pdf . Переворот 6.09.1930 (перший успішний), Урібуру, заборона партій, призупинення конституції, «Ганебне десятиліття», фальсифікації — https://en.wikipedia.org/wiki/1930_Argentine_coup_d%27%C3%A9tat ; https://www.iprofesional.com/politica/322948-se-cumplen-90-anos-del-primer-golpe-de-estado-en-argentina ; https://www.educ.ar/app/files/repositorio/html/07/16/b09ef173-c854-11e0-8148-e7f760fda940/index/index.htm . Текст декрету — перекладено з репродукції (видно на фото).
- Бразилія: революція жовтня 1930, Варгас; спалювання кави; Estado Novo 10.11.1937–1945 — https://en.wikipedia.org/wiki/Brazilian_Revolution_of_1930 ; https://archontology.org/nations/braz/braz_rep2/vargas2.php
- Мексика: Карденас 1934–1940, майже 18 млн га; експропріація нафти березень 1938 (18.03), офіційна партія PNR/PRM — https://countrystudies.us/mexico/34.htm ; https://ebsco.com/research-starters/history/lazaro-cardenas
- Українці в Аргентині: хвиля 1920/1922–1939, з Галичини, Волині, Полісся та ін., «до 70 тис.», Буенос-Айрес, Місьйонес, Чако — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CA%5CR%5CArgentina.htm ; хвиля 1920–1939 — бюлетень посольства Аргентини https://eucra.cancilleria.gob.ar/userfiles/ndeg1_ukrayinskoyu_boletin_descubriendo_mis_raices.pdf . Бразилія/Парана — hist g9s4l4.

### Опора завдань (D-019), неочевидні місця
- l1 «Що штовхало Японію» — екран 3; «Навіщо вибух» — екран 5; sort — екрани 3, 7; order — екрани 3, 5, 7 + w10s2 (вихід з Ліги 1933, повторено на екрані 7).
- l2 числа — на екранах завдань; choice про Мао — тіло екрана + екран 7 («Мао став головним лідером»).
- l3 src-лист — цитата на екрані; sort — екран 4 (Чаурі-Чаура).
- l4 «Якими літерами» — видно на фото (u, i, k латиницею).
- l5 «Що чекало ці країни після 1929 р.?» — міркування + w10s3l2 (Велика депресія) у `requires`; link — hist g9s4l4 + тіло екрана.
- Boss: Q6 (pre l1) поєднує l1 і l5.

### Пропозиції
- Глосарій world: Квантунська армія, Маньчжоу-го, Пуї, Інукаї Цуйосі, Антикомінтернівський пакт, Гоміндан, КПК, Вампу, Чан Кайші, Мао Цзедун, Великий похід, Сіань, сатьяграха, незастосування співпраці, Чаурі-Чаура, Данді, Ірвін, Севрський договір, Лозаннський мир, Велике національне зібрання, Ататюрк, Ірігоєн, Урібуру, «Ганебне десятиліття», Варгас, «Нова держава», Карденас.

### Верифікація (verifier-w10s6, 2026-11-11)
Звіт: reports/verify/w10s6.md. Усі 6 уроків — `verified`; 9 мінімальних правок: атрибуція 150 тис. членів Гоміндану (LoC), Амрітсар «близько тисячі», «Іпóліто» з латинською ó → «Іполіто», Урібуру «заборонив партії / призупинив конституцію» → «стан облоги й воєнний стан», хибний пункт l5 «Конгрес розпустили без нових виборів» → «Генерал чи президент розпустив обраний Конгрес», дата декрету в cap/credits → «вересень 1930 р.», US-статус фото з Кайсері в credits.
Пункти автора: залізниця 1904–1905 — history.state.gov (Портсмут) ✅; фото з Кайсері — Кайсері/20.09.1928 підтверджено МОН Туреччини; перша публікація — за колонкою, L'Illustration 13.10.1928 (людині — звірити кадр); підпис «Plus Ultra» — не звірено (PDF БН недоступний), cap нейтральний.
