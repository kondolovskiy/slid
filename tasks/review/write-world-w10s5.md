---
claimed_from: todo
claimed_at: 2026-11-11T12:25:18.042Z
id: write-world-w10s5
type: write-section
subject: world
grade: 10
section: w10s5
weeks: [18, 21]
status: review
claimed_by: w-write-world-w10s5
created: 2026-11-10
---
# Написати розділ «Центрально-Східна Європа між війнами» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як жили між війнами Польща, Чехословаччина, Румунія, Угорщина та інші сусіди України й як там почувалися національні меншини, зокрема українці.

## Теми уроків (з плану)
1. Друга Річ Посполита й Пілсудський
2. Чехословаччина Масарика
3. Угорщина, Румунія, Болгарія, Югославія: шлях до диктатур
4. Національні меншини у нових державах
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

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
- Файл `content/world/g10-w10s5.js` з `SLID.section("world", { id: "w10s5", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s5/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s5` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**Виконавець: w-write-world-w10s5, 2026-11-11.** Файл `content/world/g10-w10s5.js`, 5 уроків (4 теми + фінал), усі `status: "draft"`, `meta.factcheck: null`. validate --section w10s5 — 0 помилок, 0 попереджень; euphony --section — 0 відхилень. Build не запускав (паралельний запуск).

### Уроки
- **w10s5l1 «Маршал на мосту»** (Польща, 10 екранів): відродження 1918, Начальник держави, «диво на Віслі», Ризький мир; link — Замостя 1920 (Армія УНР, Безручко) через Варшавський договір (hist g10s2l8); конституція 1921, Нарутович; травневий переворот, санація, Брест 1930, Береза-Картузька 1934.
- **w10s5l2 «Президент-професор»** (Чехословаччина, 10): Масарик, конституція 1920 (§ 1, § 58, § 128 — переклад з чеського тексту), перепис 1921, автономісти Глінки; link — УВУ в Празі, господарська академія в Подєбрадах; Генлейн 1935; факт/оцінка.
- **w10s5l3 «Королі, регент і диктатори»** (Угорщина, Румунія, Болгарія, Югославія, 9): Тріанон, Бела Кун, Горті, ревізіонізм, Мала Антанта (фото), Радич 1928, диктатура 6.01.1929, Болгарія 1923/1934, Кароль II 1938; хронологія з Польщею 1926.
- **w10s5l4 «П'ять мов на одній банкноті»** (меншини, 9): банкнота 5000 крон 1920 (5 написів), договори про меншини 1919, мовне правило 20 % у ЧСР, перепис Польщі 1931 (укр. + «руська» = 13,9 %), numerus clausus 1920, Бек 13.09.1934, факт/тлумачення; link — українці в переписах трьох держав.
- **w10s5l5 «Атлас „Європа між війнами“»** (boss, 7 екранів, значок `eastcentral`): 6 завдань з `pre` (l1, l2 ×2, l3 ×2, l4).

### Зображення (D-027; усі — мініатюри thumb.wikimedia.org, сторінки файлів відкрито через WebFetch)
| Урок | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l1, l5 | pilsudski-bridge-1926.jpg | PD (автор М. Фукс † 1935; PD-Poland) | https://commons.wikimedia.org/wiki/File:Piłsudski_May_1926.jpg |
| l2 | masaryk-horse.jpg (tall) | PD (Я. Брунер-Дворжак † 1942; опубл. 1928, НБ ЧР) | https://commons.wikimedia.org/wiki/File:Tomáš_Garrigue_Masaryk_na_koni_(Jaroslav_Bruner-Dvořák).jpg |
| l3 | trianon-1920.jpg | PD (Agence Meurisse, Gallica btv1b90337756) | https://commons.wikimedia.org/wiki/File:1920_Június_4._Trianon.jpg |
| l3, l5 | little-entente-1932.jpg | PD-France (Mondial Photo-Presse, Gallica btv1b9050281t) | https://commons.wikimedia.org/wiki/File:Conférence_de_la_petite_Entente_-_M._Benès,_Jentik_et_Titulesco_-_btv1b9050281t_(cropped).jpg |
| l4, l5 | banknote-5000-1920.jpg; banknote-5000-inscriptions.jpg (мій кроп написів з мініатюри 1280 px, збільшено ×1,6) | банкнота 1920 — PD; фото Peter Zelizňák — CC BY-SA 3.0 (на сторінці також GFDL / PD-self — суперечливо) | https://commons.wikimedia.org/wiki/File:CS_5000_korun_1920_rub.jpg |

Сумнівні місця зображень:
- Фото Пілсудського: Commons дає 13.05.1926; у `cap` лише «травень 1926 р.» (зустріч з президентом на мосту була 12.05 — не стверджуємо, яка мить на фото).
- Тріанон: підпис агентства називає Бенарда й Драше-Лазара «на першому плані» — у `cap` уроку імен немає, лише в credits з позначкою «за підписом агентства».
- Банкнота: автор дизайну — Альфонс Муха лише за описом Commons; en.wiki про 5000 Kč 1920 цього не підтверджує (ЧНБ: Муху часто вважають автором усієї банкноти, хоча він робив лише зворот). Ліцензію це не змінює (Муха † 1939 або анонімна державна робота 1920 р.). Мова кириличного рядка («ПЯТЬ ТЫСЯЧЪ КОРОНЪ») каталоги не називають — в уроці лише «кирилицею — для жителів Підкарпатської Русі». Варто звірити верифікатору.
- Фото прибуття Масарика до Праги (Commons «22.12.1918») не брав: за mv.gov.cz / ct24 він повернувся 21.12.1918 — хибний опис Commons.

### Факти з джерелами (новi для facts/world.md)
1. Травневий переворот 12–14.05.1926: 379 загиблих (215 військових + 164 цивільні), ≈ 900 поранених; президент Войцеховський і уряд Вітоса пішли у відставку; президент — Мосцицький; Пілсудський — військовий міністр, фактична влада до смерті 12.05.1935; «санація» = «оздоровлення» — https://en.wikipedia.org/wiki/May_Coup_(Poland) ; https://www.rp.pl/polityka/art11053971-zamach-majowy-dzieli-sejm ; https://pl.wikipedia.org/wiki/Józef_Piłsudski
2. Пілсудський — Начальник держави 1918–1922 (дати початку різняться: 22 / 29.11.1918) — en/pl.wikipedia (вище); 14.12.1922 передав владу Нарутовичу — https://dzieje.pl/node/144677
3. Нарутович: обраний 9.12.1922 Національними зборами голосами центру, селянських партій, лівих і **національних меншин**; присяга 11.12; убитий 16.12.1922 у «Захенті» художником Е. Нєвядомським (пов'язаним з ендеками); урядував 5 днів — https://dzieje.pl/node/144677 ; https://ipn.gov.pl/pl/dla-mediow/komunikaty/175387,Ciszej-nad-ta-trumna-100-lat-temu-zginal-Gabriel-Narutowicz.pdf
4. Брест 1930: у ніч на 9–10.09.1930 лідерів Центролева (серед них Вітос) ув'язнено в Брестській фортеці перед виборами 16.11.1930 — https://en.wikipedia.org/wiki/Brest_trials ; https://eng.ipn.gov.pl/en/news/9197,90th-anniversary-of-the-end-of-the-Brest-trials.html
5. Береза-Картузька: розпорядження президента 17.06.1934, ув'язнення без суду; серед в'язнів — члени ОУН — https://en.wikipedia.org/wiki/Bereza_Kartuska_Prison ; https://www.encyclopediaofukraine.com/pages%5CC%5CO%5CConcentrationcamps.htm
6. «Диво на Віслі» — серпень 1920; Ризький мир 18.03.1921 (= facts/hist №170) — https://en.wikipedia.org/wiki/Second_Polish_Republic
7. Оборона Замостя кін. серпня 1920: польські частини й 6-та Січова стрілецька дивізія Армії УНР полк. М. Безручка кілька днів стримували Кінну армію Будьонного (точні дати в джерелах різняться — в уроці «наприкінці серпня», «кілька днів») — https://www.encyclopediaofukraine.com/pages%5CB%5CE%5CBezruchkoMarko.htm ; https://zaxid.net/marko_bezruchko_biografiya_tsikavi_fakti_oborona_zamostya_general_unr_yakogo_hochut_vklyuchiti_v_panteon_n1640937 ; https://en.wikipedia.org/wiki/6th_Sich_Rifle_Infantry_Division
8. Перепис Польщі 9.12.1931 (рідна мова; питання про національність прибрали): польська 68,9 %, українська 10,1 %, їдиш+іврит 8,6 %, «руська» 3,8 %, білоруська 3,1 %, німецька 2,3 %, «тутейша» 2,2 %; укр.+«руська» = 4 441 622 (13,9 %); надійність оскаржують (є свідчення виправлення записів) — https://en.wikipedia.org/wiki/1931_Polish_census ; https://www2.lawrence.edu/fast/blitstep/History%20277/Interwar_Censuses.htm (Rothschild 1974) ; https://stat.gov.pl/aktualnosci/90-lat-temu-9-grudnia-1931-r-glowny-urzad-statystyczny-przeprowadzil-drugi-powszechny-spis-ludnosci,401,1.html
9. Масарик: обраний 14.11.1918 (заочно), 27.05.1920, 27.05.1927, 24.05.1934; повернувся до Праги 21.12.1918; відставка 14.12.1935 (здоров'я); Бенеш обраний 18.12.1935 — https://ct24.ceskatelevize.cz/domaci/1113014-tgm-ctyri-prezidentske-volby-a-kazda-uplne-jina ; https://mv.gov.cz/clanek/osobnost-v-cele-statu.aspx ; (en.wiki First Czechoslovak Republic помилково дає 1925 і 1929)
10. Конституція ЧСР 29.02.1920: § 1 «Lid je jediný zdroj veškeré státní moci…»; § 58 — 7 років, «Nikdo nemůže býti více než dvakráte po sobě zvolen» + виняток для першого президента; § 128 — рівність незалежно від раси, мови, релігії; § 131 — навчання мовою меншин — https://cs.wikisource.org/wiki/Ústavní_listina_Československé_republiky ; https://cnn.iprima.cz/prodlouzit-ci-zkratit-mandat-prezidenta-masaryk-se-volil-na-sedm-let-rika-historicka-198730
11. Мовний закон 122/1920: державна мова «чехословацька»; у судових округах, де меншина > 20 %, — звернення її мовою — https://en.wikipedia.org/wiki/Ethnic_minorities_in_Czechoslovakia ; https://psp.cz/eknih/1918ns/ps/tisky/t2770_01.htm
12. ЧСР: перепис 1921 — 13,4 млн, «чехословаки» ≈ 65 %, німці 3 123 568 (≈ 23 %); 1930 — «руська (українська)» 549 169 (3,79 %); 70–80 % промисловості Австро-Угорщини — https://en.wikipedia.org/wiki/First_Czechoslovak_Republic ; https://countrystudies.us/czech-republic/21.htm ; Rothschild (Lawrence, вище)
13. Вибори 1935: Судетсько-німецька партія — 15,2 % загалом, понад 60 % (≈ 68 %) німецьких голосів; гроші з Німеччини — https://en.wikipedia.org/wiki/1935_Czechoslovak_parliamentary_election ; https://countrystudies.us/czech-republic/26.htm
14. УВУ — з Відня до Праги восени 1921; Українська господарська академія в Подєбрадах 1922–1935; підтримка Масарика — https://www.encyclopediaofukraine.com/pages%5CU%5CK%5CUkrainianFreeUniversity.htm ; https://www.encyclopediaofukraine.com/pages%5CM%5CA%5CMasarykTomI0K0Garrigue.htm ; https://www.encyclopediaofukraine.com/pages%5CU%5CK%5CUkrainianHusbandryAcademy.htm
15. Тріанон 4.06.1920: лишилося ≈ 28 % земель і 36 % населення довоєнного королівства; 3,3 млн угорців за кордоном; армія ≤ 35 тис. — https://en.wikipedia.org/wiki/Treaty_of_Trianon ; https://countrystudies.us/hungary/30.htm («over two-thirds»). Горті — регент з 1.03.1920 (141 : 9) — https://en.wikipedia.org/wiki/Kingdom_of_Hungary_(1920–1946) ; https://ebsco.com/research-starters/social-sciences-and-humanities/horthy-consolidates-power-hungary . Угорська радянська республіка 21.03–1.08.1919 (133 дні) — en.wiki «Hungarian Soviet Republic» (загальновідоме, звірити верифікатору).
16. Мала Антанта 1920–1921 (ЧСР, Румунія, КСХС) проти угорського реваншу й реставрації Габсбургів, переговори — Бенеш — https://en.wikipedia.org/wiki/First_Czechoslovak_Republic ; https://en.wikipedia.org/wiki/Little_Entente
17. Югославія: червень 1928 — Пуніша Рачич стріляв у скупщині, Степан Радич смертельно поранений (помер 8.08.1928 — в уроці дати смерті немає); 6.01.1929 — король Олександр I призупинив парламент, заборонив партії за етнічною/релігійною/регіональною ознакою; 3.10.1929 — назва «Королівство Югославія»; 9.10.1934 — убитий у Марселі — https://en.wikipedia.org/wiki/6_January_Dictatorship ; https://en.wikipedia.org/wiki/Timeline_of_Yugoslavia
18. Болгарія: переворот 9.06.1923 (Стамболійського згодом убито); переворот 19.05.1934 (Звено) — партії заборонено; з 1935 — фактична влада Бориса III — https://www.britannica.com/place/Bulgaria/Postwar-politics-and-government (сніпет; сторінка 403) ; https://en.wikipedia.org/wiki/Zveno ; https://www.vagabond.bg/dangerous-balancing-act-2568
19. Румунія: Кароль II — король з 8.06.1930; 10.02.1938 — надзвичайні повноваження, нова конституція (плебісцит), партії розпущено (Фронт національного відродження) — https://en.wikipedia.org/wiki/Carol_II_of_Romania ; перепис 1930: румуни 71,9 %, угорці 7,9 %, українці 582 115 (3,2 %) — Rothschild (Lawrence, вище)
20. Договір про меншини з Польщею 28.06.1919 (той самий день, що Версаль), гарант — Ліга Націй; 13.09.1934 Бек заявив у Асамблеї Ліги про відмову співпрацювати, доки система не стане універсальною — https://en.wikipedia.org/wiki/Little_Treaty_of_Versailles ; https://www.jta.org/archive/british-cabinet-meets-secretly-on-polish-move ; https://api.parliament.uk/historic-hansard/commons/1934/nov/14/treatment-of-minorities
21. Угорський закон XXV/1920 (numerus clausus), 22.09.1920: квота за часткою «народу» → ≈ 6 % для євреїв (раніше 20–30 % / ≈ 25 % студентів); «перший антиєврейський закон міжвоєнної Європи» — оцінка М. Ковач / Ю. Сапор, спірна — https://kultura.hu/en/numerus-clausus-law/ ; https://ceeol.com/search/article-detail?id=836473

### Завдання, де опора неочевидна
- l1 е2 multi «Що видно на фото» — «цивільні в капелюхах» видно праворуч позаду (дрібно, на 448 px розрізняються).
- l1 е4 link: опора — тіло екрана + hist g10s2l8 (Варшавський договір, Ризький мир); «польське місто Замостя» відкидає дистрактор «столиця УНР».
- l3 е5 choice (Мала Антанта): дистрактор «республіки без королів» відкидається з е3 («Королівство сербів…») і назви «Мала Антанта» не потребує знання.
- l4 е2 multi (написи): «англійською» відкидається тим, що учень читає написи; кирилицю видно.
- l4 е5 choice — однокласник і його висновок — умовна ситуація, не джерело.

### stats (world)
- l1, l2, l5 — без прапорців.
- l3 «typeVariety нетипово (z=2,4)»: 5 різних типів завдань (number, choice, sort, order, multi) — різноманітність вища за середню, не дефект (так само прийнято у w10s1 l4).
- l4 «gradedShare нетипово (z=2,3)»: 6 оцінюваних з 9 (0,67) — більше завдань на даних перепису, не дефект.

### Пропозиції
- TERM для glossary/world: Друга Річ Посполита; Начальник держави; «диво на Віслі»; санація; Береза-Картузька; Масарик (Томаш Гарріг); Едвард Бенеш; Конрад Генлейн; Судетсько-німецька партія; Тріанонський договір; Міклош Горті; регент; ревізіонізм; Мала Антанта; Степан Радич; Олександр I (Югославія); Александр Стамболійський; Борис III; Кароль II; Ігнацій Мосцицький; Габріель Нарутович; Юзеф Бек; договори про меншини; numerus clausus (в уроці без терміна).
- Для w10s7 (Мюнхен): l2 закінчується посиланням «що сталося 1938 р. — у розділі про Другу світову війну»; Генлейн і судетські німці вже введені.

