---
claimed_from: todo
claimed_at: 2026-11-04T06:59:55.986Z
id: write-world-w8s3
type: write-section
subject: world
grade: 8
section: w8s3
weeks: [15, 21]
status: done
claimed_by: writer-write-world-w8s3
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Європа XVI ст. і її сусіди» (Всесвітня історія, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити Європу часів Карла V, Єлизавети І й Сулеймана Пишного і зв'язки цих держав з українськими землями.

## Теми уроків (з плану)
1. Імперія Карла V
2. Нідерланди: війна за свободу
3. Англія Єлизавети І
4. Османська імперія Сулеймана і Роксолана
5. Річ Посполита і Московська держава
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
- Файл `content/world/g8-w8s3.js` з `SLID.section("world", { id: "w8s3", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w8s3/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w8s3` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**writer-write-world-w8s3, 2026-11-04.** Файл `content/world/g8-w8s3.js`, 6 уроків (5 тем + фінал `w8s3l6`, значок `europe16`), усі `status: "draft"`, `meta.factcheck: "self"`. Фото — 7 файлів у `img/world/w8s3/`.

### Перевірка
- `node tools/validate.mjs --section w8s3` — 0 помилок, 0 попереджень.
- `node tools/stats.mjs --subject world` — w8s3l1–l6 без прапорців (l4 спершу мав typeVariety 2 → одне choice переписано на multi; фінал — sentenceWords 5.5 → 6.0).
- Playtest — у копії дерева (scratchpad, build у копії): `playtest.py --section w8s3` — 6 уроків пройдено, exit 0. Build у спільному дереві НЕ запускався — оркестраторові: build після пакета (нові зображення в sw.js).

### Уроки
1. **w8s3l1 «Імперія, над якою не заходить сонце»** (Карл V): спадок Габсбургів, Павія 1525, Відень 1529, Мюльберг 1547, парадний портрет Тиціана (src), зречення 1555–1556, Філіп II / Фердинанд (sort-фінал). Опора «Пригадай» — Ізабелла й Фердинанд, Колумб (w7s5l5, w8s1l2), Аугсбурзький мир (w8s2l5).
2. **w8s3l2 «Буря в соборі»** (Нідерланди): гравюра Гогенберга «Іконоборство» 1566 (intro + підпис-переказ), 17 провінцій, Філіп II, кальвіністи (пригадай w8s2l3), Альба 1567, гези (переказ про назву), Брілле 1572, Утрехтська унія 1579, Акт про зречення 1581 (цитата-переказ), 1568–1648 (number 80), order-фінал.
3. **w8s3l3 «Королева і глобус»** (Єлизавета I): «Армадний портрет» — intro, multi на дві морські сцени, crit на руку на глобусі (тлумачення істориків мистецтва), Дрейк 1577–1580, лицарство 1581, Армада 1588 (≈ 130 кораблів, брандери біля Кале, бурі), sort «факт / тлумачення».
4. **w8s3l4 «Султан і полонянка»** (Сулейман, Роксолана): гравюра Лорка з латинським написом (1520 — Сулейман і Карл V одночасно), Могач 1526, Відень 1529, союз з Францією, Пишний / Кануні; ясир і васалітет Криму 1478 (з hist g7s5l6 — на екрані), Хюррем/Роксолана, законний шлюб бл. 1534, листи до польського короля, Селім II; Михалон Литвин (multi, `link`), венеційська гравюра «Росса» (src: уявне обличчя). Рогатин — лише в `note` як пізніший переказ.
5. **w8s3l5 «Король, якого обирають»** (Річ Посполита і Москва): картина «Битва під Оршею» 1514 (Костянтин Острозький), crit — 80 тис. як перебільшення; Іван IV цар 1547, опричнина 1565–1572; вільна елекція, Генрикові артикули 1573; Лівонська війна 1558–1583, Полоцьк 1563/1579, Баторій 1576–1586, перемир'я 1582; `link` — Люблінська унія 1569 і війна з Москвою (як hist g8s1l1), Іван Федоров Москва 1564 → Львів → Острог (Острозька Біблія 1581); order-фінал.
6. **w8s3l6 «Європа-королева»** (boss): карта Europa regina (Мюнстер, вид. 1598); 6 завдань — по одному на урок l1–l5 + хронологія (1514, 1519, 1566, 1569, 1588). Шаблон — як w7s1l5.

`sk: "link"` — l4 (2 екрани), l5 (2), l6 (Питання 4).

### Факти й джерела (для facts/world.md після verify)
1. Карл V: нар. 24.02.1500, Гент; король Іспанії 1516; обраний імператором 28.06.1519; коронований в Аахені 1520 (напис Лорка), папська коронація Болонья 1530; Павія 24.02.1525 (полон Франциска I); Відень 1529; Мюльберг 24.04.1547; зречення: Нідерланди 25.10.1555, Іспанія 16.01.1556, імперія — Фердинанду (1556/1558); пом. 21.09.1558, монастир Юсте; поділ на іспанську й австрійську гілки. — https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor ; https://www.worldhistory.org/Charles_V,_Holy_Roman_Emperor/
2. Тиціан, «Карл V верхи в Мюльбергу» — Аугсбург, квітень–вересень 1548, Прадо P000410; обладунок зберігся в Королівській збройовій палаті Мадрида; бою на картині немає. — https://en.wikipedia.org/wiki/Equestrian_Portrait_of_Charles_V ; https://www.accioncultural.es/media/DefaultFiles/flipbook/ElArtedelPoder/files/basic-html/page221.html ; Commons (P00410). **Не використано:** «до битви Карла несли на ношах» (лише Вікіпедія, друге джерело не знайдено).
3. Нідерланди: 17 провінцій; іконоборство серпень 1566 (Антверпен 20.08.1566 — підпис гравюри); Альба 1567; Брілле 1.04.1572; Утрехтська унія 23.01.1579; Акт про зречення 26.07.1581; Вільгельм Оранський убитий 10.07.1584, Делфт; війна 1568–1648, Мюнстерський мир 1648 — визнання Республіки. — https://en.wikipedia.org/wiki/Eighty_Years%27_War ; https://en.wikipedia.org/wiki/Act_of_Abjuration ; https://www.canonvannederland.nl/en/opstand
4. Акт про зречення — переказ принципу «правитель для підданих» за двомовною транскрипцією: https://euro.sites.umassd.edu/files/2016/11/The-Act-of-Abjuration-rejection-of-Phillip-II-as-sovereign-of-the-Netherlands1581.pdf (точне формулювання різниться в перекладах — тому «переказ»).
5. Гези: петиція шляхти 5.04.1566, «gueux» — за переказом, слово радника Берлемона; частина істориків сумнівається в авторстві (тому «за переказом, радник правительки»); медалі гезів. — https://en.wikipedia.org/wiki/Geuzen ; https://christianhistoryinstitute.org/dailystory/permalink/origin-of-the-gueux-beggars ; https://rebelsorbeggars.com/blog/the-1566-compromise-of-nobles-lighting-the-tinder-of-revolt/
6. Гравюра Гогенберга: офорт, Кельн, 1568–бл. 1572, Рейксмузеум RP-P-OB-78.785-30, CC0; німецький вірш «Nach wenig Predication die Calvinsche Religion das Bildenstürmen fiengen an, das nicht ein Bild davon bleib stan… Anno 1566 XX Augusti» — переказ у l2. — сторінка файлу Commons (credits).
7. Єлизавета I 1558–1603; Дрейк 1577 — 26.09.1580 (Плімут), лицар 4.04.1581; Армада 1588 — 141 корабель з Лісабона / ≈ 130 у шкільних виданнях → «близько 130»; брандери (вісім) біля Кале в ніч на 28.07 (ст. ст.), Гравлін; втеча навколо Шотландії й Ірландії, загибель у бурях. **Не використано:** скільки кораблів повернулося (RMG «менше половини» vs Вікіпедія ≈ 44 втрачено). — https://www.rmg.co.uk/explore/elizabeth-i-and-spanish-armada ; https://en.wikipedia.org/wiki/Spanish_Armada ; https://www.history.com/this-day-in-history/september-26/drake-circumnavigates-the-globe ; https://www.loc.gov/collections/sir-francis-drake/articles-and-essays/timeline/
8. «Армадний портрет», бл. 1588, невідомий художник (раніше — Гауер), версія Вобернського абатства; рука на глобусі на Америці — тлумачення як морські й колоніальні амбіції; ліворуч — брандери, праворуч — кораблі на скелях («протестантський вітер»). — https://en.wikipedia.org/wiki/Armada_Portrait ; https://www.rmg.co.uk/explore/elizabeth-i-and-spanish-armada
9. Сулейман I: нар. 1494/1495, правив 1520–1566; Белград 1521, Родос 1522, Могач 1526 (29.08), Відень 1529; Кануні — «законодавець»; союз з Францією; пом. 6/7.09.1566 під Сигетваром. — https://www.worldhistory.org/Suleiman_the_Magnificent/ ; https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs ; https://en.wikipedia.org/wiki/Franco-Ottoman_alliance
10. Гравюра Мельхіора Лорка: SMK KKSgb6141, 1562, за малюнком зі Стамбула 15.02.1559; Лорк у складі габсбурзького посольства (Бусбек) у Стамбулі 1555–1559. Латинський напис (прочитано зі знімка): «Imago Suleymanni Turcorum Imp. in Oriente… qui An. Do. MDXX patri in imperio successit: quo etiam anno Carolus V… Aquisgrani in Occidente coronatus est Christianor. Imp.… Constantinopoli, An. MDLIX, Men. Feb., die XV». — https://en.wikipedia.org/wiki/Melchior_Lorck ; https://www.rijksmuseum.nl/en/collection/object/Suleyman-I--654af9b8202a34eac106d9fdb0e6f49e ; сторінка файлу Commons.
11. Роксолана (Хюррем): нар. бл. 1505, Русь (Рутенія); полонена кримськими татарами; законна дружина Сулеймана бл. 1533/1534 (Пірс — травень 1534) — порушення звичаю; два листи до Сигізмунда II Августа (1548–1549); син Селім II — султан 1566; пом. 15.04.1558. Рогатин — переказ (Твардовський, 1620-ті). — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CO%5CRoksoliana.htm ; https://en.wikipedia.org/wiki/Hurrem_Sultan ; https://www.dailysabah.com/feature/2019/02/08/origin-of-hurrem-sultan-still-hotly-debated-in-21st-century/amp
12. Михалон Литвин, «Про звичаї татар, литовців і москвитян» (бл. 1550, вид. 1615): «найулюбленіша дружина… була викрадена з нашої землі» — переказ; автор достеменно не встановлений. — https://en.wikipedia.org/wiki/Michalon_Litvin ; https://en.wikipedia.org/wiki/Hurrem_Sultan
13. Венеційська гравюра «La piu bella e piu favorita donna del gran Turcho dita la Rossa», бл. 1540–1550, вид. Маттео Пагано, Британський музей 1878,0713.4166. — сторінка файлу Commons (credits).
14. Орша 8.09.1514: Костянтин Острозький (великий гетьман литовський); 80 тис. — цифра литовсько-польських наративів і короля, сучасні оцінки — 12–15 тис. (Лобін) або ≤ 40 тис.; Смоленськ не повернули. Картина — бл. 1525–1535, НМ у Варшаві MP 2475, коло Кранаха (Ганс Крель). — https://en.wikipedia.org/wiki/Battle_of_Orsha ; https://slavica-petropolitana.spbu.ru/en/arkhiv/33-studia-slavica-et-balcanica-petropolitana-2013-2/miscellanea/70-lobin-a-n-on-the-question-of-the-structure-of-the-russian-army-at-the-battle-of-orsha.html ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CS%5COstrozkyKostiantyn.htm
15. Іван IV — вінчання на царство 16.01.1547; опричнина 1565–1572. — https://www.britannica.com/summary/Ivan-the-Terrible ; https://kids.britannica.com/students/article/Ivan-the-Terrible/43062
16. Лівонська війна 22.01.1558 — 10.08.1583; Полоцьк 1563 (Іван IV), 30.08.1579 (Баторій); Ям-Запольське перемир'я 1582 — Москва відмовляється від Лівонії, Полоцьк — Речі Посполитій. Баторій — король 1576–1586. — https://en.wikipedia.org/wiki/Livonian_War ; https://en.wikipedia.org/wiki/Stephen_B%C3%A1thory
17. Сигізмунд II Август пом. 7.07.1572 — останній Ягеллон; Генрикові артикули 1573: елекція, сейм щонайменше раз на 2 роки, податки й війна — за згодою сейму, право непослуху (рокош). — https://en.wikipedia.org/wiki/Henrician_Articles ; https://zpe.gov.pl/a/DyxIZ9QOH
18. Іван Федоров: Москва 1564 («Апостол»), переслідування з боку переписувачів → ВКЛ (Заблудів 1569–1570) → Львів 1572–1574 («Апостол» і Буквар 1574) → Острог за запрошенням В.-К. Острозького (Дермань 1575, друкарня 1577–1579, Біблія 1581). — https://www.encyclopediaofukraine.com/pages%5CF%5CE%5CFedorovychFedorovIvan.htm ; https://en.wikipedia.org/wiki/Ivan_Fyodorov_(printer)
19. Europa regina: Йоганнес Путш (Bucius), 1530-ті (1537); у «Космографії» Мюнстера — у всіх виданнях з 1588; голова — Іспанія, серце — Чехія. Файл — видання 1598 р. — https://en.wikipedia.org/wiki/Europa_regina ; сторінка файлу Commons.

### Зображення (усі — thumb.wikimedia.org, ≥ 20 с між файлами, 429 не було)
- l1 `charles-v-muhlberg.jpg` — Тиціан, PD — File:Carlos_V_en_Mühlberg,_by_Titian,_from_Prado_in_Google_Earth.jpg
- l2 `beeldenstorm-1566.jpg` — Гогенберг, Рейксмузеум, CC0 (обрізано до кліше з підписом)
- l3 `armada-portrait.jpg` — PD — File:Elizabeth_I_(Armada_Portrait).jpg
- l4 `suleiman-lorck.jpg` — SMK, CC0; `rossa-woodcut.jpg` — Британський музей, PD (лише 500 px — файл 750 px)
- l5 `orsha-1514.jpg` — НМ у Варшаві, PD
- l6 `europa-regina.jpg` — PD (опис Commons плутає дати 1570/1588/1598/1628; взято файл з явним виданням 1598)

### Спірне й на що звернути увагу верифікатору
- l1 екр. 4 «Пригадай» спирається на екр. 3 (Фердинанд і Ізабелла) і w8s1l2 (Колумб). l1 екр. 8 — Аугсбурзький мир з w8s2l5.
- l2 екр. 3: «кальвіністи — храми без прикрас» — нагадування з w8s2l3.
- l3 екр. 8 (глобус) — тлумачення, у fbText так і названо; «перші сталі колонії — після Єлизавети» (Джеймстаун 1607) — лише пояснення у fbText, не оцінюється.
- l4 екр. 5: «ясир», «Кримське ханство — васал з 1478» — з hist g7s5l6, подано на екрані. «Роксолана» — від латинської назви Русі (Roxolania) — у тексті не пояснено, лише «європейці звали».
- l4 «Чужі чоловіки не могли бачити жінок султанського палацу» — загальновідоме, подано на екрані як опора (екр. 7).
- l5 «Московська держава» (як у плані); hist g8s1 вживає «Московське царство» — узгодити в глосарії?
- Фінал — 6 завдань (5 тем + хронологія), як w7s1l5.

### Пропозиції до глосарію (TERM в inbox)
Карл V, Габсбурги, Філіп II (одне «п»), Фердинанд (брат Карла), Мюльберг, Тиціан; Вільгельм Оранський, герцог Альба, гези, іконоборство, Брілле, Утрехтська унія, Акт про зречення, Республіка Сполучених провінцій, Вісімдесятилітня війна; Єлизавета I, Френсіс Дрейк, Армада, брандери, Кале; Сулейман I Пишний, Кануні, Могач, Мельхіор Лорк, Хюррем (Роксолана), Селім II, Михалон Литвин; Орша, Костянтин Острозький, Іван IV (Грозний), самодержець, опричнина, вільна елекція, Генрикові артикули, Сигізмунд II Август, Ягеллони, Стефан Баторій, Лівонська війна, Полоцьк, Іван Федоров; Europa regina («Європа-королева»), Себастьян Мюнстер.
