---
claimed_from: todo
claimed_at: 2026-11-12T05:07:23.654Z
id: revise-world-w7s4
type: revise-section
subject: world
grade: 7
section: w7s4
weeks: [19, 24]
status: review
claimed_by: writer-world-w7s4
created: 2026-11-10
depends_on: []
---
# Схід Зрілого Середньовіччя — новий урок у w7s4 (Всесвітня історія, 7 клас; розділ «Королівства і монгольська навала»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w7s4l6 «Схід Зрілого Середньовіччя: Китай Сун і Делійський султанат». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w7s4l6` «Схід Зрілого Середньовіччя: Китай Сун і Делійський султанат»** (одиниці 7.2.21, 7.2.23): Китай династії Сун 960–1279 (компас, порох, паперові гроші, книгодрукування — коротко; міста й торгівля); завоювання Сун монголами — Юань (пригадай w7s4l4); Делійський султанат з 1206 р. (до 1526 р.). Джерела: https://en.wikipedia.org/wiki/Song_dynasty ; https://en.wikipedia.org/wiki/Delhi_Sultanate + друге джерело. Не забігай у Мін і Бабура — це w7s6l7.
2. Доповнення w7s4l3 (Болгарське царство) — окрема задача refine-world-w7s4 (після цієї, той самий файл).
- **Тижні:** у файлі `weeks: [22, 28]` → `[19, 24]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g7-w7s4.js` (лише він, `img/world/w7s4/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w7s4l5` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w7s4l5`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w7s4l1 (pre dgw8), w7s4l4 (cur dgw7) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w7s4` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w7s4`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->
w-revise-world-w7s4, 2026-11-12. Файл `content/world/g7-w7s4.js`, тека `img/world/w7s4/` (2 нові файли). Порядок: l1–l4, **l6**, l5 (фінал). `weeks: [19, 24]`. l1–l4 не змінено (dgw7 / dgw8 / dgw9 — `validate --diag` 0/0). Болгарське царство (refine) не чіпав.

### Зміни по уроках
- **w7s4l6 «Компас, гроші й мінарет»** (новий, draft, eyebrow «Розділ 4 · Урок 5», 10 екранів, 5 оцінюваних + hyp: multi src, choice crit, choice src, multi link, sort). Одиниці 7.2.21 (Китай Сун: міста й торгівля, порох, компас, паперові гроші, Бі Шен; 1127 — Ханчжоу; монголи 1279) і 7.2.23 (Делійський султанат 1206–1526, султан, Кутб-Мінар, відбиті напади монголів). Мін, Бабур не згадано (1526 — лише рік кінця, як у задачі). Нові терміни (жирним): Сун, паперові гроші, султан, Делійський султанат, мінарет.
- **w7s4l5 (фінал)** → draft. Дубль на l1 (Експонат 1 «Килим з Байє» + Експонат 2 «Хартія») — Байє прибрано (Гастінгс лишився в стрічці часу); нове Експонат 5 «Сувій і мінарет» (multi, `pre: "w7s4l6"`, правильні [0, 3]). Разом 6 завдань (5 тем + стрічка часу). Додано `pre` l1–l4, l6 (order — без pre, як у w8s3). Інтро й outro доповнено; милозвучність у verified-тексті: «пергаменту й питає», «Один із чотирьох», «монголів із Руссю».
- Заголовний коментар файлу — 6 уроків, Сун і Делі в переліку програми.

### Опора завдань (D-019)
- е2 — hyp. е4 (multi src) — саме фото (ятки під парасолями біля мосту, судно під мостом праворуч, вози внизу ліворуч; стіни на фрагменті немає). е6 (crit) — е5 абз. 3 (в'язки монет, залізні монети) + міркування. е8 (src, Кутб-Мінар) — е7 абз. 3 (султани — мусульмани, більшість — індуїсти) і body екрана (мечеть, мінарет, вірші з Корану); дистрактор «монголи» спростовує е9 / не на екрані. е9 (link multi) — body (1240 Київ — w7s4l4 е6; 1279; Делі відбивав напади); «одним походом» спростовано «кілька десятиліть». е10 (sort) — е3 (Ханчжоу), е5 (компас, паперові гроші), е7 (султан-невільник), е8 (мінарет), е9 (напади монголів).
- Фінал, Експонат 5 — l6 е5 («перші державні у світі»), е7 (1206), е9 (1279, Делі відбивав).

### Факти з джерелами (≥ 2; en.wiki — лише перше)
- Сун 960–1279; Тан до 907 (facts/world №12); Кайфен — столиця, «близько мільйона» (оцінка); 1127 — чжурчжені на півночі, Південна Сун, столиця Ханчжоу: https://en.wikipedia.org/wiki/Song_dynasty ; https://afe.easia.columbia.edu/songdynasty-module/cities-new.html ; https://afe.easia.columbia.edu/songdynasty-module/cities-hangzhou.html ; https://afe.easia.columbia.edu/songdynasty-module/outside-rivals.html
- Торгівля морем (Півд.-Сх. Азія, Індійський океан): https://afe.easia.columbia.edu/songdynasty-module/outside-trade.html ; en.wiki Song (порти Цюаньчжоу та ін.)
- Порох — найдавніший відомий рецепт 1044 р. («Уцзін цзун'яо»), вогняні стріли, бомби: https://afe.easia.columbia.edu/songdynasty-module/tech-gunpowder.html ; https://en.wikipedia.org/wiki/Song_dynasty («first surviving records of the chemical formula»)
- Компас на кораблях — початок XII ст. (1119 Columbia; 1111–1117 Чжу Юй): https://afe.easia.columbia.edu/songdynasty-module/tech-compass.html ; https://en.wikipedia.org/wiki/Compass
- Бі Шен — рухомі знаки з обпаленої глини, XI ст.: https://afe.easia.columbia.edu/songdynasty-module/tech-printing.html ; https://en.wikipedia.org/wiki/Bi_Sheng (1039–1048). Узгоджено з w7s5 («Чікчі» — найдавніша збережена книжка металевими літерами).
- Паперові гроші: розписки купців, важкі залізні монети Сичуаню, уряд — у 1020-х (1023/1024), перші державні: https://afe.easia.columbia.edu/songdynasty-module/econ-rev-money.html ; https://en.wikipedia.org/wiki/Jiaozi_(currency) ; en.wiki Song («first in world history to issue banknotes»)
- Монголи й Сун: війна кілька десятиліть, 1279 (Ямень) — кінець Сун, Юань: https://afe.easia.columbia.edu/songdynasty-module/tech-gunpowder.html («resist the Mongols for several decades»); https://afe.easia.columbia.edu/songdynasty-module/outside-rivals.html (Юань 1279–1368); en.wiki Song (Ямень 1279)
- Делійський султанат 1206–1526; засновник — колишній невільник-воєначальник Гурідів; мусульмани-султани, більшість підданих — індуїсти; оборона від монголів: https://en.wikipedia.org/wiki/Delhi_Sultanate ; https://www.newworldencyclopedia.org/entry/Delhi_Sultanate ; https://www.newworldencyclopedia.org/entry/Qutb-ud-din_Aybak . Прихід з Афганістану наприкінці XII ст. (Мухаммед Гурі) — ті самі.
- Кутб-Мінар: 72,5 м; почав Айбак (1192/1199 → «наприкінці XII ст.»), продовжив наступник Ілтутміш; при мечеті Куват-уль-Іслам (одна з найдавніших в Індії); написи арабським письмом і нагарі, вірші з Корану: https://en.wikipedia.org/wiki/Qutb_Minar ; https://www.incredibleindia.gov.in/en/delhi/delhi/qutub-minar
- Сувій: Чжан Цзедуань (традиційна атрибуція), XII ст., шовк, 24,8 × 528 см (Commons / Палацовий музей, інв. 新00087177; en.wiki 25,5 × 525) → «понад 5 м»; сотні людей (en.wiki: 814): https://afe.easia.columbia.edu/songdynasty-module/intro-two-versions.html ; https://en.wikipedia.org/wiki/Along_the_River_During_the_Qingming_Festival

### Зображення (D-027)
- l6 е1, е4: `song-rainbow-bridge.jpg` — фрагмент оригіналу (не цінської копії) «Цінмін шанхе ту», Палацовий музей, Пекін; PD-Art (PD-old-100). https://commons.wikimedia.org/wiki/File:Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg . Поле Date «1085» на Commons — рік народження художника (хибне); у cap — «XII ст.». Місто в cap не названо (Кайфен — традиційно, спірно). Той самий файл на двох екранах (інтро-проблема і завдання «Роздивися ще раз»).
- l6 е8: `qutb-minar.jpg` — фото Indrajit Das, 2.10.2018, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Qutub_Minar,_Delhi_08.jpg . Пам'ятка XII–XIII ст. — свобода панорами не зачеплена.
- Мініатюри — thumb.wikimedia.org, паузи ≥ 20 с; 960 × 480 і 640 × 960, якість 78.

### Сумнівне — верифікатору
- Ім'я засновника (Айбак) і Ілтутміш в уроці не названі навмисно («воєначальник, колишній невільник»; «за наступного султана») — менше нових імен; персоналій 7.2.23 у програмі не перевіряв. Якщо програма вимагає — додати.
- «Делі, що стало столицею» — Айбак правив з Лахора; Делі — столиця з Ілтутміша (сніпети WebSearch; en.wiki). Формулювання цього не заперечує.
- «Перші державні паперові гроші у світі» — en.wiki Song «first in world history to issue banknotes», Columbia «world's first government-issued paper money».
- Фінал: три multi поспіль (Експонати 3–5); Експонат 5 можна зробити choice, якщо верифікатор вважатиме за краще.
- Перевірки: `validate --section w7s4` 0/0; `--diag dgw7/dgw8/dgw9` 0/0; euphony — у l6 лише «завоювали і Русь, і Індію» (повторюваний сполучник, лишено); stats — без прапорців (l6: 10 екранів, частка 0,5, maxReadWords 75).
