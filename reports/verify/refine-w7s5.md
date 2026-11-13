# Верифікація refine-world-w7s5 (w7s5l1, w7s5l3)

Верифікатор: verifier-refine-w7s5, 2026-11-12. Скіл content-verify. Зміни автора потрапили в коміт 6b6d3c1 (повідомлення «w7s6 draft»), перевірено `git diff bbb420a 6b6d3c1 -- content/world/g7-w7s5.js`.

## Diff: опори тестів dgw7 / dgw8 / dgw9
Лише додавання (3 нові екрани, 1 credit), `weeks` [29, 35] → [25, 29], статуси l1/l3. Наявні екрани, факти, дати, відповіді й `learned` l1 і l3 не змінено. diag-*.js не чіпано. validate --diag dgw7 / dgw8 — 0 помилок, 0 попереджень.

## Факти
| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Великий голод 1315–1317; 1315 — холодне дощове літо, поля залило, збіжжя гнило; неврожай 1316 | https://en.wikipedia.org/wiki/Great_Famine_of_1315%E2%80%931317 (весна–літо 1315 дощі й прохолода, неврожаї до літа 1317); https://www.medievalists.net/2019/06/great-famine/ (1315 — тривалі дощі й повені, тривали 1316–1317) | ✅ |
| «Малий льодовиковий період»: початок спірний (бл. 1300 або значно пізніше, XV–XVI ст.), кінець — середина XIX ст. | https://en.wikipedia.org/wiki/Little_Ice_Age («no consensus», 1275–1300 … 1560–1630; «some experts prefer about 1300 to about 1850»); Britannica (через WebSearch, https://www.britannica.com/print/article/344106 — «early 14th through mid-19th century»; напряму 403) | ✅ (формулювання обережне; одне речення body уточнено, див. правки) |
| Великий голод — перший прояв чи окрема біда (note) | en.wiki Little Ice Age: «1315 … rains and the Great Famine» як можлива межа, але «may have been before the LIA»; en.wiki Great Famine: «occurred during the LIA» | ✅ |
| Похолодання менше ніж на 1 °C | en.wiki Little Ice Age (IPCC TAR: «modest cooling of the Northern Hemisphere … of less than 1 °C»); IPCC TAR WG1 2.3.3 (через WebSearch, https://archive.ipcc.ch/ipccreports/tar/wg1/070.htm — найхолодніші десятиліття ≈ 0,6–0,7 °C нижче кінця XX ст.) | ✅ |
| 1363 р. парламент Англії — закон про одяг; гранична ціна тканини за станом; мета — щоб нижчі стани не вдягалися, як знать, тло — заможність після чуми | https://en.wikipedia.org/wiki/Statute_Concerning_Diet_and_Apparel_1363 (Act of the Parliament of England; «lower classes … similar fashion to the elite», після Чорної смерті); https://rosaliegilbert.com/sumptuarylaws.html (ліміти ціни тканини: слуги 2 марки, йомени 40 s, есквайри 4½–5 марок, лицарі 6 марок; велика знать — без обмежень); https://www.medievalists.net/2012/01/the-1363-english-sumptuary-law-a-comparison-with-fabric-prices-of-the-late-fourteenth-century/ («limits on cloth expenditure» за станом) | ✅ (після уточнення «кожен стан» → «люди різних станів»: найвища знать обмежень не мала) |
| Закони про одяг в Англії ухвалювали понад два століття, виконували погано (note) | WebSearch: Folger https://www.folger.edu/blogs/shakespeare-and-beyond/sumptuary-laws-rules-dressing-shakespeare-england/ (1337 … скасовано 1604); medievalists Tudor https://www.medievalists.net/?p=31386 (слабке виконання) | ✅ |
| Окуляри — Італія, бл. 1286 р.; проповідь 1306 р. у Флоренції «ще й 20 років не минуло»; опуклі скельця для читання | https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/invention-spectacles (бл. 1285, Джордано да Рівальто з Пізи, Флоренція, 1305 чи 1306, «nearly 20 years», опуклі лінзи для читання); https://www.finestresullarte.info/en/works-and-artists/spectacles-in-art-history-from-the-origins-to-the-seventeenth-century (бл. 1286, Піза, проповідь 1306; ім'я проповідника там «Guglielmo» — ймовірно, помилка сайту; у тексті уроку «Джордано» як в encyclopedia.com) | ✅ |
| Фреска Томмазо да Модена, 1352 р., зала капітулу Сан-Нікколо, Тревізо, кардинал Гуго в окулярах | https://commons.wikimedia.org/wiki/File:Tommaso_da_modena,_ritratti_di_domenicani_(Ugo_di_Provenza)_1352_150cm,_treviso,_ex_convento_di_san_niccol%C3%B2,_sala_del_capitolo.jpg; finestresullarte (вище) | ✅ |
| Гуго Сен-Шерський — кардинал, помер 1263 р. | https://en.wikipedia.org/wiki/Hugh_of_Saint-Cher (19.03.1263, Орвієто; кардинал з 1244); Britannica Quick Facts через WebSearch https://britannica.com/biography/Hugh-of-Saint-Cher (19.03.1263); New Advent https://www.newadvent.org/cathen/07521b.htm (домініканський кардинал) | ✅ |
| Роджер Бекон — англійський чернець-учений XIII ст., досліджував лінзи, радив перевіряти знання дослідом | https://plato.stanford.edu/entries/roger-bacon/ (англ. францисканець, бл. 1214/1220–1292; Perspectiva, надіслав папі лінзу; перевірка досвідом, критика «unworthy authority»); encyclopedia.com invention-spectacles (1267 — досліди з опуклими лінзами) | ✅ |
| Механічні годинники на соборах і вежах наприкінці XIII — у XIV ст., рушій — гиря, били дзвоном години | https://en.wikipedia.org/wiki/Verge_escapement (кінець XIII ст., баштові годинники соборів і міст, Солсбері — дзвін годин); Britannica через WebSearch https://www.britannica.com/technology/clock/Introduction (перші — великі гирьові баштові, били лише години) | ✅ |
| Окуляри старші за Біблію Гутенберга майже на 170 р. | 1455 − 1286 = 169 (обидві дати в уроці) | ✅ |

Ліцензія img/world/w7s5/hugh-spectacles.jpg: Commons — фреска 1352 р., автор † 1379, «public domain in its country of origin» (life + 100), PD Mark 1.0; у credits «суспільне надбання» + URL файлу — ✅. Файл 700×1050, 185 КБ.

## Завдання (розв'язано самостійно)
| Екран | Моя відповідь | Звідки відповідь (D-019) | Вердикт |
|---|---|---|---|
| l1 «Чому почався Великий голод?» (choice) | «Холодні дощові роки знищили врожаї» | body того ж екрана; «чума забрала селян» відкидається порівнянням 1315 з 1347 (екран «Чорна смерть»); «купці» — нічого на екрані | ✅ |
| l1 «Навіщо закон про одяг?» (choice) | «Щоб за одягом було видно стан» | body — дослівно | перетворено на info (див. правки) |
| l3 «Окуляри, годинник і дослід» (multi) | Бекон — дослід; годинник — дзвін | обидва дослівно в body; «Гуго за життя» — 1263 < 1286 (той самий екран); «пізніше за Біблію» — 1286 < 1455 (екран «Друкарський верстат») | ✅ |

Підказки не видають відповідь: l1 — спрямовує на відкидання дистрактора (порівняти роки); l3 — так само (рік смерті Гуго). `fbText` не вводить нових оцінюваних фактів.

## Педагогіка
- «Мода» в l1 замість l3 — прийнятно: закон 1363 р. логічно продовжує екран «Чому зросла платня?» (наслідки чуми), а l3 має межу 11 екранів. Рекомендація куратору: у звіті покриття відмітити програму 7.3.3 «Мода» → w7s5l1.
- gradedShare l1 0.73 (z = 3.3, сім'я 7–9: 0.55 ± 0.05) — перевантажено: завдання про закон мало відповідь дослівно в body й додавало мало. Перетворено на info → 0.64, прапорця stats немає; maxReadWords l1 71 (сім'я 65.75 ± 6.35 — у межах).
- Чутливих тем для віку нові екрани не додають.

## Правки (зроблено, 4)
1. l1 «Клімат»: «Згодом у Європі похолоднішало на століття» → «У ті століття клімат Європи ставав холоднішим. Це тривале похолодання…» — «згодом» (після 1315) суперечило датуванню «близько 1300 р.» у тому ж абзаці; «на століття» двозначне.
2. l1 «Мода»: choice → info «Закон про одяг»; у body додано мету закону (з колишнього fbText); «Кожен стан міг купувати тканину лише до певної ціни» → «визначив, скільки найбільше може коштувати тканина для людей різних станів» (найвища знать обмежень не мала).
3. l1 «Великий голод»: правильна з позиції 2 → 0 (позиції l1 тепер 2, 0, 1, 1, 0 — без двох «2» поспіль).
4. l3 multi: варіанти переставлено, правильні [1, 2] → [0, 3] (позиції l3: 1, 1, [0, 3], [0, 2, 3]).

## Прогони
validate --section w7s5 / --diag dgw7 / --diag dgw8 — 0 помилок, 0 попереджень. stats --subject world: w7s5l1 0.64, w7s5l3 0.55, без прапорців. euphony --section w7s5 — 28 механічних позначок, усі в старому тексті (жодної в нових екранах); `зі щурами` (validate-правило, w7s5l1 е6, старий текст) — на розсуд style-sync. Плейтест не запускався (немає Python-playwright локально) — CI.

## Вердикт
w7s5l1 — verified; w7s5l3 — verified. Задача → done.
