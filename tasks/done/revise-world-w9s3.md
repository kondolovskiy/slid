---
claimed_from: todo
claimed_at: 2026-11-11T20:54:58.634Z
id: revise-world-w9s3
type: revise-section
subject: world
grade: 9
section: w9s3
weeks: [13, 17]
status: done
claimed_by: w-revise-world-w9s3
created: 2026-11-10
depends_on: []
---
# Російська імперія і Вікторіанська Британія — два нові уроки у w9s3 (Всесвітня історія, 9 клас; розділ «Нові держави і реформи 1850–1870-х»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w9s3l7 «Російська імперія: Кавказ, Середня Азія, реформи»; w9s3l8 «Вікторіанська Британія і Друга імперія у Франції». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w9s3l7`** (тема «Російська імперія: Кавказ, Середня Азія, реформи»; робоча назва «Імперія на Кавказі й у Степу») (9.1.17, 9.2.10, 9.2.11): загарбання Російської імперії — Фінляндія, Бессарабія, Царство Польське (перша половина XIX ст., коротко), Кавказька війна, загарбання Середньої Азії; реформи 1860–1870-х рр. і суспільні рухи (народники) — `link` → hist g9s3l3 «Маніфест 19 лютого» (1861 р., не дублюй). Деконструкція імперського наративу — «загарбання», «приборкання» з погляду підкорених народів (лист МОН № 1/17756-26). Дати — ≥ 2 джерела.
2. **Новий урок `w9s3l8` «Вікторіанська Британія і Друга імперія у Франції»** (9.2.1, 9.2.2): королева Вікторія, Гладстон і Дізраелі, двопартійна система, парламентська реформа 1867 р.; Наполеон III, Друга імперія 2.12.1852 – 1870 (https://en.wikipedia.org/wiki/Second_French_Empire + друге) — Седан пригадай з w9s3l3.
3. Порядок: …, w9s3l5, **w9s3l7, w9s3l8**, w9s3l6 (фінал).
4. Доповнення w9s3l4 — окрема задача refine-world-w9s3 (після цієї).
- **Тижні:** у файлі `weeks: [15, 21]` → `[13, 17]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g9-w9s3.js` (лише він, `img/world/w9s3/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w9s3l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w9s3l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w9s3l4 (cur dgw9) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w9s3` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w9s3`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->
w-revise-world-w9s3, 2026-11-12. Файл `content/world/g9-w9s3.js`, теки `img/world/w9s3/` (3 нові файли). Порядок: l1–l5, **l7, l8**, l6 (фінал). `weeks: [13, 17]`.

### Зміни по уроках
- **w9s3l7 «Імперія на Кавказі й у Степу»** (новий, 10 екранів, 6 оцінюваних: choice ×4, sort, order; draft). Одиниці 9.1.17, 9.2.10, 9.2.11.
- **w9s3l8 «Королева й імператор»** (новий, 10 екранів, 5 оцінюваних + hyp: choice ×3, sort, order; draft). Одиниці 9.2.1, 9.2.2.
- **w9s3l4** → draft: злито е8 «Рівні — на папері» в е9 «Чи стали народи рівними?» за рекомендацією reports/verify/refine-w9s3.md (12 → 11 екранів; текст е8 перенесено дослівно; eyebrow е9 → «Грудень 1867 р.», fbBad → «Перечитай другий абзац.»). Друга рекомендація: fbText «Конгрес у Берліні» — «формально лишилася під владою султана». Милозвучність (без зміни змісту): «Франції та Сардинії» (е3, order), «політика й гроші», «Галичини й депутат», «Галичина й Буковина» (fbText е7), «хорвати й серби», learned «Буковина й Закарпаття». Факти, дати, відповіді е3, е5, е7, е10 (опора dgw9, тема g9-dual) не змінено; `validate --diag dgw9` — 0/0.
- **w9s3l6 (фінал)** → draft: інтро (маршрут + Кавказ, Лондон і Париж, 1852–1871 рр.); нове Питання 6 (multi, w9s3l7: Фінляндія, Бессарабія, Ташкент vs Венеція, Ельзас); Питання 7 — стрічка часу переписана під l8 (Друга імперія 1852 замість Паризького миру, реформа в Британії 1867 замість Австро-Угорської угоди; Австро-Угорщину й так перевіряє Питання 4). Разом 7 завдань (уроків 8 — D-048 п. 1). Додано `pre` усім завданням фіналу (l1…l5, l7, l8). Назва «Репортаж із нової Європи» (милозвучність; id не змінено), outro доповнено.

### Опора завдань (D-019)
- l7 е2 (src) — сама картина (хто сидить / стоїть, прапори), body називає Шаміля в білому тюрбані. е4 (crit) — body е4 (Горшельт у походах з російськими військами, медаль, постанова ВРУ) + е3. е5 (geo, choice з body) — body е5 (Швеція, мир з Османською імперією, Віденський конгрес, повстання). е7 (sort) — е6, другий абзац. е9 (link) — hist g9s3l3 (викуп, відрізки — там е3, е5) + body е9; що селяни не підтримали — е8. е10 (order) — роки з е3, е5, е6, е8 (1861 — е8 «Пригадай»).
- l8 е4 (src) — body е4 («1868 р. вибори виграли ліберали») + е3 (уряд дає лідер партії більшості; Дізраелі — консерватори, Гладстон — ліберали). е6 (crit) — е5 (хто отримав голос, удвічі, жінки — ні) + w9s2l2 (чартисти). е8 (crit) — body е8 + е7 (газети під наглядом, розігнав парламент). е9 (sort) — е3, е5, е7, е8. е10 (order) — 1837 (е1), 1848/1852 (е7), 1867 (е5), 1870 (е7 + w9s3l3).
- Фінал: П6 — l7 е5, е6; Венеція — l2 е9; Ельзас — l3 е7. П7 — l8 е5, е7; решта — l1, l2, l5, l3.

### Факти з джерелами (≥ 2; en.wiki — лише перше)
- Фінляндія 1809 (Фрідрiхсгамський мир 17.09.1809), велике князівство з власними законами: https://en.wikipedia.org/wiki/Treaty_of_Fredrikshamn ; https://septentrio.uit.no/index.php/1700/article/view/2425 ; https://countrystudies.us/finland/9.htm
- Бессарабія 1812 (Бухарестський мир, землі між Прутом і Дністром): https://www.encyclopediaofukraine.com/pages%5CB%5CU%5CBucharestPeaceTreatyof1812.htm ; https://www.britannica.com:443/print/article/82861 (сніпет пошуку, сайт 403) ; https://ru.wikisource.org/wiki/ВЭ/ВТ/Бессарабия
- Царство Польське 1815 — facts/world №70; повстання 1830–1831, 1863–1864: https://www.worldhistory.org/January_Uprising_of_1863/ ; https://www.ebsco.com/research-starters/history/russia-crushes-polish-rebellion ; https://en.wikipedia.org/wiki/November_Uprising
- Шаміль — імам з 1834, полон 1859 (Гуніб, Барятинський): https://en.wikipedia.org/wiki/Imam_Shamil ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/caucasian-wars (1834; полон у Гунібі 1859)
- Кінець Кавказької війни 1864 (маніфест 21.05/2.06.1864); вигнання сотень тисяч черкесів до Османської імперії, багато загинуло (оцінки: encyclopedia.com «до пів мільйона», en.wiki — до 1,5 млн; в уроці «сотні тисяч», дата початку війни спірна — в уроці «десятиліттями»): https://en.wikipedia.org/wiki/Caucasian_War ; https://en.wikipedia.org/wiki/Circassian_genocide ; encyclopedia.com (вище)
- ВРУ визнала геноцид черкесів Російською імперією 9.01.2025: https://holodomormuseum.org.ua/en/news/ukraine-recognises-the-genocide-of-circassians-committed-by-the-russian-empire/ ; https://www.svoboda.org/a/verhovnaya-rada-priznala-genotsid-cherkesskogo-naroda-v-rossiyskoy-imperii-/33269798.html ; https://interfax.com.ua/news/general/824184.html
- Медаль «За покорение Западного Кавказа» (напис «1859–1864»): https://medalbook.com/russia/imperial-russia-1721-1917/medals-decorations/medal-for-the-subjugation-of-the-western-caucasus/medal-for-the-subjugation-of-the-western-caucasus-in-silver-1 ; Commons Category:Medal "For the Conquest of the Western Caucasus" (рік заснування в уроці не подано)
- Горшельт 1858–1863 на Кавказі, у походах 1859 р., ордени Станіслава й Анни; картина 1863 р.: https://en.wikipedia.org/wiki/Theodor_Horschelt ; https://de.wikipedia.org/wiki/Theodor_Horschelt
- Середня Азія: Ташкент 1865, Туркестанське генерал-губернаторство 1867 (Кауфман), Бухара 1868 (Самарканд, протекторат), Хіва 1873, Коканд ліквідовано 1876: https://en.wikipedia.org/wiki/Russian_conquest_of_Central_Asia ; https://academics.hamilton.edu/central-asian-history/keller-russian-turkestan ; https://en.wikipedia.org/wiki/Russian_Turkestan
- Реформи: земства 1864 (школи, лікарні, дороги), суд присяжних 1864: https://en.wikipedia.org/wiki/Great_Reforms ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/great-reforms ; 1861 — hist g9s3l3 (facts/hist).
- Народники, «ходіння в народ» 1874, тисячі студентів (оцінки 2–4 тис.), селяни не підтримали, сотні — у в'язницях: https://en.wikipedia.org/wiki/Going_to_the_People ; https://en.wikipedia.org/wiki/Narodniks (1611 заарештованих 1873–1877) ; https://mego.info/113-суспільно-політичне-і-громадське-життя-антиукраїнська-політика-царизму?page=2
- Вікторія: на троні 1837 у 18 років, померла 22.01.1901, майже 64 роки; двопартійна система: https://www.royal.uk/queen-victoria ; https://en.wikipedia.org/wiki/Queen_Victoria
- Гладстон — прем'єр 4 рази (1868–74, 1880–85, 1886, 1892–94); Дізраелі — двічі (1868, 1874–80); ліберали виграли вибори 1868: https://www.gov.uk/government/history/past-prime-ministers/william-ewart-gladstone ; https://www.gov.uk/government/history/past-prime-ministers/benjamin-disraeli-the-earl-of-beaconsfield ; https://en.wikipedia.org/wiki/Reform_Act_1867
- Реформа 1867 (королівська згода 15.08.1867): уряд консерваторів (Дербі — прем'єр, законопроєкт вніс Дізраелі), голос — міським чоловікам-господарям, що платили місцеві податки; ≈ 1 → 2 млн виборців в Англії й Вельсі: https://en.wikipedia.org/wiki/Reform_Act_1867 ; https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/second-reform-act
- Друга імперія: Луї-Наполеон — президент 1848; переворот 2.12.1851 (розпуск Національних зборів); плебісцит 21–22.11.1852 (≈ 7,8 млн «так», ≈ 253 тис. «ні»); імперія 2.12.1852; газети під наглядом, законодавчий корпус без права пропонувати закони; республіка 4.09.1870 після Седана: https://en.wikipedia.org/wiki/Second_French_Empire ; https://www.napoleon.org/enseignants/documents/quest-ce-que-le-second-empire ; https://en.wikipedia.org/wiki/1852_French_Second_Empire_referendum
- Карикатура Тенніела «William Cox and Benjamin Box», «Панч», 19.02.1870 (Гладстон з більшістю, Дізраелі безсилий в опозиції): Commons (нижче) ; https://www.maryevans.com/history/cartoon-william-cox-and-benjamin-box-10073085

### Зображення (D-027)
- l7: `horschelt-shamil-1863.jpg` — Т. Горшельт, 1863, суспільне надбання (автор † 1871; PD-Art, у США — опубліковано до 1931), https://commons.wikimedia.org/wiki/File:Horschelt._Surrender_of_Shamil._1863.jpg ; музей у `cap` не вказано (Commons: Нац. музей Дагестану — не звірено).
- l8: `victoria-bassano-1882.jpg` — А. Бассано, 1882, NPG x95802, суспільне надбання (PD-scan, † 1913), https://commons.wikimedia.org/wiki/File:Queen_Victoria_by_Bassano.jpg ; дата 1882 — також Royal Collection RCIN 2510956 (https://col.rct.uk/collection/2510956/queen-victoria-1819-1910).
- l8: `punch-box-cox-1870.jpg` — Дж. Тенніел, «Панч» 19.02.1870, с. 68, суспільне надбання (†1914), https://commons.wikimedia.org/wiki/File:Dizzy-Gladstone-Box-and-Cox.jpg
- Мініатюри — thumb.wikimedia.org, паузи 20+ с, 4 запити до api.php; LOC (Туркестанський альбом) дав 429 — не взято. Картину Верещагіна «Апофеоз війни» відкинуто: задум про Тамерлана, не про російське загарбання.
- Увага: нові файли img вже потрапили в чужий коміт e5f8862 («revise-world-w8s2 → review») — їх закомітив інший агент; сам я не комітив.

### Перевірки
- `validate --section w9s3`: 0 помилок, 0 попереджень; `validate --diag dgw9`: 0/0.
- `euphony --section w9s3`: у l4, l7, l8, l6 — 0 відхилень (решта — старі в l1, l2, l3, l5, поза обсягом).
- `stats`: l7, l8, l6 — без прапорців. **l4 — readWordsPerScreen 42 (z=2,5)**: наслідок злиття е8+е9 (верифікатор передбачав ≈ 42); у профілі ≤ 45, maxReadWords 74 ≤ 75; screens 11 — у профілі. Скорочувати текст е9 не став: це опора dgw9-сусідніх тем і verified-формулювання.
- Плейтест — лише CI (немає Python playwright).

### Сумнівне / для верифікатора
- l7 е2: князь Барятинський — фігура, що сидить на камені (за назвою картини й композицією); перевірити на картині.
- l7 е4: формулювання постанови ВРУ — «визнала геноцидом винищення та вигнання черкесів Російською імперією» (переказ); точний текст постанови на rada.gov.ua не відкривався.
- l8 е4: переклад підпису «Can you fight?» — «No I can't.» — «Then come on!!!» як «Битися вмієш?» — «Ні, не вмію». — «Тоді виходь!».
- l7 «народники агітували селян проти царя й поміщиків» — узагальнення (частина пропагувала соціалізм, частина — бунт).
- Глосарій (TERM, inbox): Шаміль, Горшельт, черкеси (адиги), Гуніб, Туркестанське генерал-губернаторство, земства, суд присяжних, народники; Вікторія, Дізраелі, Гладстон, Луї-Наполеон / Наполеон III, Друга імперія, плебісцит, двопартійна система, Палата громад, Тенніел.

### Верифікація (verifier-revise-w9s3, 2026-11-12)
Звіт: reports/verify/revise-w9s3.md. Вердикт: l4, l7, l8, l6 — verified. Правки (4): l7 е3 «цар оголосив» → «імперія оголосила»; l7 е10 order 7 → 6 подій (без Бессарабії; style/hist.md 4–6); l7 е4 «одну із цих» (euphony); l6 П6 заголовок «імперія царя». Постанову ВРУ звірено з офіційним текстом № 4206-IX («Голос України»); Барятинський на картині — сидить під прапорами (ключ фігур на Commons + tonkosti «камінь, на якому сидів князь»). Посилання interfax …/824184 у нотатках хибне (2022, не про черкесів). validate --section w9s3 і --diag dgw9 — 0/0.
