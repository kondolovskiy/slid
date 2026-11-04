---
claimed_from: todo
claimed_at: 2026-11-04T20:48:45.295Z
id: write-world-w9s5
type: write-section
subject: world
grade: 9
section: w9s5
weeks: [29, 35]
status: review
claimed_by: writer-write-world-w9s5
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Світ на порозі XX ст.» (Всесвітня історія, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити, як винаходи, масова культура й союзи держав готували XX століття — і Першу світову війну.

## Теми уроків (з плану)
1. Електрика, телефон, автомобіль
2. Масова школа, спорт і Олімпійські ігри 1896 р.
3. Емансипація жінок
4. Антанта і Троїстий союз
5. Мистецтво: від імпресіонізму до авангарду
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
- Файл `content/world/g9-w9s5.js` з `SLID.section("world", { id: "w9s5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w9s5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w9s5` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-write-world-w9s5, 2026-11-04)
Файл `content/world/g9-w9s5.js`, 6 уроків, усі `status: "draft"`, `factcheck: "self"`; значок фіналу `newcentury` («Свідок нового століття»).
- w9s5l1 «Карета без коня» (винаходи) — 10 екранів; link: київський електричний трамвай 1892 р. (е6, number).
- w9s5l2 «Ігри, що повернулися» (школа, спорт, Афіни 1896) — 9 екранів; «Пригадай» 776 р. до н. е. — hist g6s7; «Січ», «Сокіл» — hist g9s5.
- w9s5l3 «Голос для жінок» (емансипація) — 10 екранів; link: Кобринська / суфражетки (е9).
- w9s5l4 «Два табори Європи» (Троїстий союз і Антанта) — 10 екранів; «Пригадай» 1871 р. — w9s3 l3; link: українці у двох таборах — hist g9s5 l4 (е9).
- w9s5l5 «Мистецтво без правил» (імпресіонізм → авангард, Малевич) — 10 екранів.
- w9s5l6 «Капсула часу 1914 р.» (boss) — 7 екранів, одне завдання на урок + хронологія; Q3 — sort `link`.
`node tools/validate.mjs --section w9s5` — 0 помилок, 0 попереджень. `stats --subject world` — жодного прапорця для w9s5 (фінал: типів 3, як у w9s4l6). Build не запускав (паралельна робота).

### Зображення (img/world/w9s5/, мініатюри thumb.wikimedia.org; ліцензії — зі сторінок файлів Commons)
| Урок | Файл | Ліцензія | URL |
|---|---|---|---|
| l1 intro | benz-motorwagen-1888.jpg — Г. Франц, «Illustrirte Zeitung», 1.12.1888, с. 574 | PD (PD-Art, PD Mark) | https://commons.wikimedia.org/wiki/File:Benz-Patent-Motorwagen_-_Illustrirte_Zeitung_1888.jpg |
| l1 е8, boss intro | ford-magneto-line-1913.jpg — лінія магнето, Гайленд-Парк, 1913, NARA 1633486 | PD-US | https://commons.wikimedia.org/wiki/File:Ford_assembly_line_-_1913.jpg |
| l2 е1–2 | athens-1896-report-cover.jpg — Е. Жільєрон (пом. 1924) | PD-old-100 | https://commons.wikimedia.org/wiki/File:Athens_1896_report_cover.jpg |
| l3 е1, е4 | pankhurst-arrest-1914.jpg — IWM Q 81486, 21.05.1914 (дата рукою на фото) | PD-UKGov | https://commons.wikimedia.org/wiki/File:Mrs_Emmeline_Pankhurst,_Leader_of_the_Women%27s_Suffragette_movement,_is_arrested_outside_Buckingham_Palace_while_trying_to_present_a_petition_to_King_George_V_in_May_1914._Q81486.jpg |
| l3 е8 | pershyi-vinok-1887.jpg — титул «Першого вінка», Львів 1887 (текст читається: «Жіночий альманах», «Ціна 2 злр. а. в.», «Львів, 1887») | PD Mark | https://commons.wikimedia.org/wiki/File:Title_Page_of_Almanac_The_First_Garland_1887.jpg |
| l4 е1, е6, boss Q4 | hark-dogs-map-1914.jpg — «Hark! Hark! The Dogs Do Bark!», Johnson, Riddle & Co., текст W. Emanuel (пом. 1915), Cornell PJ Mode 2207.01 | PD | https://commons.wikimedia.org/wiki/File:Hark!_Hark!_The_Dogs_Do_Bark!.jpg |
| l5 е1–2 | monet-impression-sunrise.jpg — Marmottan 4014 | PD | https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg |
| l5 е8 | malevich-black-square-1915.jpg — Третьяковська галерея | PD (Малевич пом. 1935) | https://commons.wikimedia.org/wiki/File:Kazimir_Malevich,_1915,_Black_Suprematic_Square,_oil_on_linen_canvas,_79.5_x_79.5_cm,_Tretyakov_Gallery,_Moscow.jpg |
Мапу Hark перевірено на 1920 px: такса (Німеччина, шолом) тримає на повідку плямистого собаку (Австро-Угорщина); Німеччина й Австро-Угорщина — зелені, Британія й Франція — рожеві; Італія — вояк осторонь. API Commons давав 429 — метадані через сторінки файлів (WebFetch).
Опис Commons до малюнка Бенца: «Карл і Берта Бенц у Мюнхені, вересень 1888» — у `cap` не взято (не звірено), лише журнал і дата.

### Факти (нові, ≥ 2 джерела)
1. Белл — патент на телефон США № 174 465, 7.03.1876; слова до Ватсона 10.03.1876 (у тексті не цитуються) — https://historyofinformation.com/detail.php?id=507 ; https://blog.oup.com/?p=22019
2. Едісон — лампа розжарювання жовтень 1879 (тест 21/22.10 — розбіжність; у тексті лише 1879 р.); електростанція Перл-стріт, Нью-Йорк, 4.09.1882 — https://ethw.org/Edison%27s_Incandescent_Lamp ; https://ethw.org/Milestones:Pearl_Street_Station,_1882 ; https://en.wikipedia.org/wiki/Pearl_Street_Station
3. Бенц — патент DRP 37435, січень 1886 (29.01); Берта Бенц, серпень 1888, Мангейм — Пфорцгайм ≈ 100 км в один бік (цифри 104/106 км різняться — у тексті «близько 100 км»), не сказавши чоловікові — https://en.wikipedia.org/wiki/Bertha_Benz ; https://www.zwischengas.com/en/articles/various/Bertha-Benz---die-Geburtshelferin-des-Automobiles---und-der-Benz-Patent-Motorwagen.html
4. Форд — модель «Т» з 1908; конвеєр 1913 (магнето — квітень 1913); до 1914 р. складання авто 12 год 30 хв → 93 хв; ціна $850 → $260 — https://askus.thehenryford.org/K12/faq/433848 ; https://www.history.com/this-day-in-history/october-7/moving-assembly-line-at-ford ; https://www.assemblymag.com/articles/91581-the-moving-assembly-line-turns-100
5. Київський електричний трамвай — 1892 (13.06), перший у Російській імперії, Олександрівський (Володимирський) узвіз — https://en.wikipedia.org/wiki/Trams_in_Kyiv ; https://ukrainianweek.com/?p=6277 ; https://kyivcity.gov.ua/news/dlya_ditey_ta_rodin_zakhisnikiv_i_veteraniv_u_den_kiyeva_organizuvali_pozdku_retro-tramvayem_m2-m_1892/
6. МОК — 23.06.1894, Сорбонна, Париж (Кубертен); Афіни 6–15.04.1896, 241 спортсмен, 14 країн, 43 дисципліни (за МОК, числа дискусійні), лише чоловіки; марафон — Спірідон Луїс; жінки вперше — Париж 1900 (22 з 997) — https://olympics.com/en/olympic-games/athens-1896 ; https://en.wikipedia.org/wiki/1896_Summer_Olympics ; https://olympics.com/ioc/paris-1894-olympic-congress ; https://www.britannica.com/sports/Olympic-Games/Women-and-the-Olympic-Games
7. Британія: Elementary Education Act 1870; обов'язкове навчання з 1880; Франція: закони Феррі 1881 (безкоштовна) і 1882 (обов'язкова, світська) — https://en.wikipedia.org/wiki/Jules_Ferry_laws ; https://www.archives.norfolk.gov.uk/article/31216/Late-19th-century-legislation ; parliament.uk Living Heritage «1870 Education Act»
8. Футбольна асоціація — Лондон 1863; ФІФА — Париж 1904 (загальновідомо; у тексті без чисел-дат дня) — https://en.wikipedia.org/wiki/The_Football_Association ; https://www.fifa.com/about-fifa/organisation/history
9. «Сокіл» (Сокіл-Батько) — Львів, 1894 (11.02.1894; В. Нагірний, В. Лаврівський) — https://www.encyclopediaofukraine.com/pages%5CS%5CO%5CSokil.htm ; https://czasopisma.uwm.edu.pl/index.php/sw/article/view/112
10. Жіноче виборче право: Нова Зеландія 1893 — перша самоврядна країна (право бути обраними — 1919); Фінляндія 1906 — перша в Європі голосувати й бути обраними; 1907 — 19 жінок з 200 — https://en.wikipedia.org/wiki/Timeline_of_women%27s_suffrage ; https://eduskunta.fi/EN/naineduskuntatoimii/kirjasto/aineistot/yhteiskunta/womens-suffrage-110-years/Pages/historical-background.aspx ; https://blogs.loc.gov/law/2022/05/115-years-of-women-being-members-of-parliament-in-finland/
11. Панкгерст — WSPU 1903 (Манчестер), гасло «Deeds, not words»; 1918 — жінки від 30 р. (з майновим цензом), 1928 — від 21 р. нарівні; Панкгерст пом. 14.06.1928, закон — 2.07.1928; нар. 1858 (55 років у травні 1914) — https://historicengland.org.uk/get-involved/help-write-history/herstories/suffrage-facts-and-resources ; https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-topic/democracy-and-protest/womens-suffrage ; IWM Q 81486 https://www.iwm.org.uk/collections/item/object/205022259
12. Кобринська — Товариство руських жінок, Станиславів, 8.12.1884; «Перший вінок», Львів 1887, разом з Оленою Пчілкою; авторки з Галичини й Наддніпрянщини, серед них Леся Українка — https://zaxid.net/nataliya_kobrinska_persha_ukrayinska_feministka_tsikavi_fakti_foto_n1631917 ; https://zn.ua/ukr/SOCIUM/feministka.html ; титул на фото
13. Двоїстий союз 1879; Троїстий союз — травень 1882; франко-російський союз 1891–1894 (конвенція 1892, чинний 1894); англо-французька угода 1904; англо-російська 31.08.1907 — https://en.wikipedia.org/wiki/Triple_Entente ; https://www.newworldencyclopedia.org/entry/Triple_Entente
14. «Дредноут» — 1906; гонка флотів Британії й Німеччини — https://www.worldhistory.org/article/2812/the-anglo-german-arms-race/ ; https://www.globalsecurity.org/military/world/europe/history/hms-dreadnought-1906.htm
15. Анексія Боснії і Герцеговини — 5.10.1908; Сараєво 28.06.1914 (Г. Принцип); війна Сербії — 28.07.1914; Італія — нейтралітет серпень 1914, Лондонський договір 26.04.1915, війна Австро-Угорщині 23.05.1915 — https://en.wikipedia.org/wiki/July_Crisis ; https://encyclopedia.1914-1918-online.net/article/london_treaty_of_1915 ; https://en.wikipedia.org/wiki/Italian_entry_into_World_War_I
16. Моне «Impression, soleil levant» 1872 (Marmottan 4014); перша виставка 15.04.1874 (ательє Надара); Л. Леруа, «Le Charivari» 25.04.1874 — «імпресіоністи»; фраза про шпалери — переказ (переклади різняться) — https://en.wikipedia.org/wiki/Louis_Leroy ; https://www.pariszigzag.fr/insolite/histoire-insolite-paris/premiere-exposition-impressionniste-paris/ ; https://wordhistories.net/2021/06/08/impressionist-impressionism/
17. Кубізм — Пікассо й Брак, бл. 1907–1908; назва — від «кубиків» Л. Вокселя 1908 — https://smarthistory.org/inventing-cubism ; https://arthistoryunstuffed.com/?p=777
18. Кандинський — виріс в Одесі; перші абстрактні роботи бл. 1910 — https://www.sothebys.com/en/artists/wassily-kandinsky ; https://arthistoryproject.com/artists/wassily-kandinsky
19. Малевич — народився в Києві (рік 1878/1879 — розбіжність EoU/Britannica vs інші; у тексті без року); «Чорний квадрат» — виставка «0,10», Петроград, 19.12.1915–17.01.1916, повішено в «червоному куті» — https://www.encyclopediaofukraine.com/pages%5CM%5CA%5CMalevichKazimir.htm ; https://en.wikipedia.org/wiki/Kazimir_Malevich ; https://theculturetrip.com/europe/russia/articles/history-of-a-painting-the-black-square-by-malevich

### Спірне / для верифікатора
- l1 е4: «другою промисловою революцією» — термін істориків; w9s2 вживає «промисловий переворот» для першої. Перевірити узгодженість з w9s2.
- l2 е2 (оцінюване): відповідь — з напису «LES JEUX OLYMPIQUES» на обкладинці; body підказує прочитати його. Якщо здається занадто легким — допустимо.
- l3 е3: «На фото — арешт саме Панкгерст» — за каталогом IWM; деякі дослідники сумніваються в особі на фото (не перевірено в ≥ 2 джерелах — верифікатору звірити).
- l3 е9 (link): спирається на е3 (суфражетки) і е7 (Кобринська).
- l4 е6: спирається на ключ у body + видимі на мапі повідок і кольори.
- l4 е7: «Британія вступила у війну, коли німці вдерлися до Бельгії» — загальновідоме, окремо не цитував.
- l5 е4: тлумачення (фото → імпресіонізм) подано як «одне з пояснень істориків мистецтва»; оцінюване, бо всі дистрактори хибні фактично. Якщо верифікатор вважає спірним — зробити `hyp`.
- l5 е7: Малевич «народився в Києві» без року навмисно (1878/1879).
- Фінал Q4: «Яка держава Троїстого союзу 1914 р. не вступила у війну?» — Італія (l4 е7, е6).
