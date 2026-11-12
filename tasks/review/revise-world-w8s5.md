---
claimed_from: todo
claimed_at: 2026-11-12T04:55:09.745Z
id: revise-world-w8s5
type: revise-section
subject: world
grade: 8
section: w8s5
weeks: [30, 35]
status: review
claimed_by: w-revise-world-w8s5
created: 2026-11-10
depends_on: []
---
# Масони, класицизм і мода XVIII ст. — новий урок у w8s5 (Всесвітня історія, 8 клас; розділ «Доба Просвітництва»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w8s5l7 «Масони, класицизм і мода XVIII ст.». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w8s5l7` «Масони, класицизм і мода XVIII ст.»** (8.3.2–8.3.4; рекомендація верифікатора звіту §9.3 — тут, а не в w8s6, бо спирається на Просвітництво w8s5l1): масонські ложі й салони як місця поширення ідей Просвітництва; класицизм в архітектурі й мистецтві (термін програми); зміни в повсякденному житті XVIII ст., мода. Масонів — без конспірології: що це було і чому цікавило освічених людей. Дати (Велика ложа Англії 1717 тощо) — ≥ 2 джерела.
2. **Позиція розділу змінилась:** у застосунку тепер w8s6 «Війни й імперії XVIII ст.» (тижні 24–29) іде **перед** w8s5 → eyebrow уроків «Розділ 5 · …» → «Розділ 6 · …»; у `why`/вступі за потреби — що війни XVIII ст. учень уже бачив у w8s6 (не посилайся на уроки w8s6 у `requires`, доки їх не написано).
   Фрідріха II і Марію Терезію учень тепер уперше зустрічає у w8s6l2 (війни за спадщину): у w8s5l2 «Освічений абсолютизм» за потреби додай «пригадай», наявних відповідей не змінюй.
3. Доповнення w8s5l4 — окрема задача refine-world-w8s5 (після цієї).
- **Тижні:** у файлі `weeks: [29, 35]` → `[30, 35]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g8-w8s5.js` (лише він, `img/world/w8s5/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w8s5l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w8s5l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w8s5l1 (cur dgw8, pre dgw9), w8s5l3, w8s5l4, w8s5l5 (pre dgw9) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w8s5` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w8s5`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->

### Що змінено (w-revise-world-w8s5, 2026-11-12)
- **Шапка/розділ:** `weeks: [30, 35]`; коментар — 7 уроків, «Розділ 6», одиниці 8.3.2–8.3.4; +4 `credits`.
- **l1, l3, l4, l5:** лише eyebrow «Розділ 5» → «Розділ 6» — `verified` лишено (прецедент reports/verify/refine-w9s5.md). Факти й відповіді, на які спираються dgw8/dgw9, не чіпано; diag-*.js не змінено.
- **l2 → draft:** е3 — речення-«пригадай» «Серед таких монархів — і суперники у війнах за спадщину: Фрідріх II Пруський та Марія Терезія Австрійська» (самодостатнє, без `requires` на w8s6; Сілезію не подано, бо maxReadWords е4 виходив за профіль). Милозвучність: «автономію та поширила», «автономії та кріпацтвом», «вівтар із вогнем». Відповіді не змінено.
- **l7 (новий, draft) «Салон, ложа й перука»** — 10 екранів, 5 оцінюваних (sort, choice crit, multi link, choice src, multi), 3 hint, 4 `img`:
  - е1 intro — Лемоньє «У салоні пані Жоффрен 1755 р.» (1812; cap: сцену уявлено майже через 60 років); е2 hyp; е3 info салони/кав'ярні/ложі (+note «Звідки дата 1717»);
  - е4 sort — опора е3 (вечори в приватному домі, господиня, кав'ярні й газети, циркуль і кутник, таємний обряд);
  - е5 choice crit — на екрані: статут 1723 р., у ложах — і прихильники, і противники незалежності США; дистрактор «без обрядів» суперечить е3;
  - е6 info класицизм (img Давид, «Клятва Гораціїв»; note про неокласицизм);
  - е7 multi link — фото палацу Потоцьких у Тульчині; риси з е6 (колони, симетрія ✓; вежі, завитки з позолотою ✗ — видно, що їх немає);
  - е8 info мода й побут (чай/кава, Мейсен 1710, перуки, широкі шовкові сукні на каркасі, портрет 1783 р. у муслині знято з виставки);
  - е9 choice src — «Марія-Антуанетта з трояндою» (Версаль): шовк, мереживо, перли, пір'я видно на фото; дистрактори суперечать фото;
  - е10 multi фінал — е3–е9.
- **l6 → draft:** нове «Питання 6» «Стаття «Класицизм»» (`pre: w8s5l7`), хронологія → «Питання 7»; `pre` у всіх 7 завданнях (хронологія — `w8s5l4`); learned +1; милозвучність: «Угорі», «свободу й прагнення», «Львів'янка питає», «Галичину й Львів» (зміст відповідей той самий).
- validate --section w8s5: 0/0; euphony — 0 у l2, l6, l7; stats — l7 10 екр., 0.5, maxRead 74, без прапорців.

### Факти й джерела (нові)
- Велика ложа 1717 (за традицією; джерело — Андерсон 1738, сумнів Prescott & Sommers): https://en.wikipedia.org/wiki/Premier_Grand_Lodge_of_England ; https://www.quatuorcoronati.com/wp-content/uploads/2018/01/1717-And-All-That-Prescott-Sommers.pdf ; https://www.history.com/this-day-in-history/june-24/1st-masonic-grand-lodge-formed-in-london ; Щупак 2025, с. 138 https://znayshov.com/FR/47482/vsesv_istor_8_Shupak_2025.pdf
- Назва від цехів каменярів, «брати», мета — моральне вдосконалення, наука й розум: Ладиченко 2025, с. 145 (geneza.ua PDF, як у reports/verify/revise-w8s1.md); Щупак, с. 138; циркуль і кутник — https://en.wikipedia.org/wiki/Square_and_Compasses ; https://museumfreemasonry.org.uk/node/976
- Статут 1723 (суперечки про віру й політику заборонено): https://www.1723constitutions.com/1723-constitutions/the-charges/ ; https://www.freemasonryresearchforumqsa.com/andersons-constitutions.php
- Ложі в США нейтральні, патріоти й лоялісти: https://en.wikipedia.org/wiki/Age_of_Enlightenment (York 1993, Palmer 1970) ; https://www.mountvernon.org/digital-encyclopedia/article/freemasonry (403, текст із пошуку) ; https://en.wikipedia.org/wiki/Freemasonry_in_the_United_States
- Салони й кав'ярні: Ладиченко, с. 154 (кав'ярні — осередки суспільного життя, салони); пані Жоффрен — https://en.wikipedia.org/wiki/Marie_Th%C3%A9r%C3%A8se_Geoffrin ; https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/geoffrin-marie-therese-marie-ther
- Картина Лемоньє 1812, Мальмезон MM 59.3.1, уявна сцена: https://commons.wikimedia.org/wiki/File:Salon_de_Madame_Geoffrin.jpg ; https://en.wikipedia.org/wiki/In_the_Salon_of_Madame_Geoffrin_in_1755 ; Macmillan (Hunt) https://digfir-published.macmillanusa.com/hunt5e/asset/img_ch18/CH18_18UN02.html (Лемоньє 1755 р. було 12 років)
- Класицизм — взірець античність, розум і порядок: Щупак, с. 138; Ладиченко, с. 147–149 (рококо — завиток; із середини XVIII ст. неокласицизм); https://en.wikipedia.org/wiki/Neoclassicism
- «Клятва Гораціїв» 1784–1785, Лувр INV. 3692, сюжет з Тіта Лівія: https://en.wikipedia.org/wiki/Oath_of_the_Horatii ; https://mediterranees.net/polyxenia/louvre2/documents/Serment_Horaces.pdf
- Тульчин, Лакруа, 1780-ті: Щупак, с. 140 (1781–1785); https://vin.gov.ua/news/ostanni-novyny/29412-tulchynskyi-palats-pototskykh-vkliuchat-v-perelik-obiektiv-velykoho-budivnytstva (1782–1785)
- Мейсен 1710: https://en.wikipedia.org/wiki/Meissen_porcelain ; Ладиченко, с. 154–155 (порцеляну згодом почали робити в Європі)
- Мода: широкі спідниці на каркасі, перуки — Ладиченко, с. 155 (роброн); https://en.wikipedia.org/wiki/Pannier ; портрет у муслині знято з Салону 1783 і замінено «з трояндою» (шовкова robe à la française) — https://fashionhistory.fitnyc.edu/1783-vigee-le-brun-antoinette-chemise/ ; https://en.wikipedia.org/wiki/Marie_Antoinette_with_a_Rose ; https://artsandculture.google.com/story/the-scandalous-portraits-of-%C3%A9lisabeth-louise-vig%C3%A9e-le-brun/ZAICJhgvKCCoLw
- l2: Фрідріх II і Марія Терезія — суперники у війні за австрійську спадщину: https://en.wikipedia.org/wiki/War_of_the_Austrian_Succession ; https://en.wikipedia.org/wiki/First_Silesian_War

### Зображення (img/world/w8s5/)
- salon-geoffrin-lemonnier.jpg — Лемоньє, 1812, Мальмезон MM 59.3.1; PD (автор † 1824), PD-Art; https://commons.wikimedia.org/wiki/File:Salon_de_Madame_Geoffrin.jpg
- oath-horatii-david.jpg — Давид, 1784–1785, Лувр INV. 3692; PD († 1825); https://commons.wikimedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg
- tulchyn-palace.jpg — фото Роман Бречко (Rbrechko), 23.06.2013, CC BY-SA 4.0 (WLM 2016); будівля 1780-х (Лакруа) — свобода панорами не потрібна; https://commons.wikimedia.org/wiki/File:05-243-0076_Tulchyn_Palace_RB.jpg
- marie-antoinette-rose-1783.jpg — Віже-Лебрен, 1783, Версаль MV 3893; PD († 1842); https://commons.wikimedia.org/wiki/File:Vig%C3%A9e-Lebrun_Marie_Antoinette_1783.jpg
- Відкинуто: фото муслинового портрета з виставки 2015 (Flickr CC BY-SA 2.0, але в метаданих NC — суперечність); NGA-копія (nga.gov 403 — ліцензію не перевірено).

### Сумнівне / верифікатору
- Атрибуція: опис Commons і Macmillan кажуть, що сцена Лемоньє уявна (не всі зображені могли бути там 1755 р.), en.wiki цього не каже — у cap лише «сцену художник уявив майже через 60 років».
- «від латинського «зразковий»» — Щупак (лат. classicus), Ладиченко пише «від італ.»; обрано латинське.
- Дата Вольтера в ложі (4/7.04.1778) розходиться — в уроці не подано; Вашингтон-масон — прибрано з уроку заради довжини екрана.
- Eyebrow-only уроки l1, l3–l5 лишено verified — вирішить верифікатор.
