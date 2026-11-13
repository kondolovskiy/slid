---
claimed_from: todo
claimed_at: 2026-11-12T04:30:47.966Z
id: revise-world-w9s4
type: revise-section
subject: world
grade: 9
section: w9s4
weeks: [18, 23]
status: done
claimed_by: w-revise-world-w9s4
created: 2026-11-10
depends_on: []
---
# США до Реконструкції та Індія — два нові уроки у w9s4 (Всесвітня історія, 9 клас; розділ «Америка й Азія в XIX ст.»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w9s4l7 «США: доктрина Монро, фронтир і Реконструкція»; w9s4l8 «Індія: Сипайське повстання і Суецький канал». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w9s4l7` «США: доктрина Монро, фронтир і Реконструкція»** (9.1.8, 9.2.12): США в першій половині XIX ст.; Доктрина Монро **2.12.1823** (https://history.state.gov/milestones/1801-1829/monroe ; https://en.wikipedia.org/wiki/Monroe_Doctrine); рух на Захід, «Дикий Захід» і корінні народи; аболіціонізм (термін); гомстед-акт 1862 р. (гомстед — термін); «Реконструкція» після громадянської війни (пригадай w9s4l2). Дати — ≥ 2 джерела.
2. **Новий урок `w9s4l8` «Індія: Сипайське повстання і Суецький канал»** (9.2.3, 9.3.5): колоніальні загарбання; Сипайське повстання 1857–1858 (з 10.05.1857, Мірут) — https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857 + друге; Суецький канал — будівництво з 25.04.1859, відкрито **17.11.1869** (https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx); національно-визвольний рух в Індії (Індійський національний конгрес — дата з джерелом). Англійську Ост-Індську компанію й Плессі вводить w8s6l4 (8 кл.) — лише пригадай (якщо того уроку ще немає — самодостатнім реченням, D-019).
3. Порядок: …, w9s4l5, **w9s4l7, w9s4l8**, w9s4l6 (фінал).
4. Доповнення w9s4l4, l5 — окрема задача refine-world-w9s4 (після цієї).
- **Тижні:** у файлі `weeks: [22, 28]` → `[18, 23]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g9-w9s4.js` (лише він, `img/world/w9s4/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w9s4l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w9s4l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w9s4l4 (cur dgw9) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w9s4` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w9s4`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->
w-revise-world-w9s4, 2026-11-12. Файл `content/world/g9-w9s4.js`, тека `img/world/w9s4/` (5 нових файлів). Порядок: l1–l5, **l7, l8**, l6 (фінал). `weeks: [18, 23]`. Доповнення refine (l4 Муцухіто, l5 «Суперники в Африці») не чіпав; l1–l5 — без змін (dgw9: `validate --diag dgw9` 0/0).

### Зміни по уроках
- **w9s4l7 «Жінка, що летить на захід»** (новий, 10 екранів, 5 оцінюваних: choice ×2 src/crit, choice, number link, order; draft; eyebrow «Урок 6»). Одиниці 9.1.8 (США в 1-й пол. XIX ст., доктрина Монро), 9.2.12 («Дикий Захід», гомстед, «Реконструкція»; аболіціонізм — термін). Нові терміни (жирним, ≤ 5): доктрина Монро, фронтир, резервації, аболіціоністи, Реконструкція (гомстед — з hist g9s4l4).
- **w9s4l8 «Останній із Великих Моголів»** (новий, 10 екранів, 4 оцінюваних + hyp: choice crit ×2, multi ×2, order; draft; eyebrow «Урок 7»). Одиниці 9.2.3 (колоніальні загарбання, Сипайське повстання), 9.3.5 (Суецький канал, національно-визвольний рух в Індії). Ост-Індська компанія — «пригадай» з w9s4l3 е2 (опій з Індії); Плессі 1757 подано самодостатнім реченням (w8s6l4 ще немає).
- **w9s4l6 (фінал)** → draft: інтро «Сім сторінок…»; нове Питання 6 (multi, l7: гомстед, фронтир vs «Реконструкція — Японія», «Монро дозволила колонії»); Питання 7 — стрічка часу переписана під l8 (Сипайське повстання 1857, Суецький канал 1869, Конгрес 1885 замість 13-ї поправки, Мейдзі й Берлінської конференції — їх і так перевіряють П2, П4, П5). Разом 7 завдань (уроків 8 — D-048 п. 1). Додано `pre` усім завданням (l1…l5, l7, l8). Милозвучність у verified-тексті фіналу (без зміни змісту): «США та Україна», «сторінку й ставить», «ради й поступово», «державі й пізніше», «Адуа й республіку», «Залізниця та Конституція». Outro доповнено.

### Опора завдань (D-019)
- l7 е3 (src) — цитата на екрані + е2 (Монро, Європа, колонії). е5 (src) — сама картина (індіанці й бізони ліворуч у темряві), body: «праворуч — схід, ліворуч — захід»; дистрактори (залізниця/телеграф — у правій частині). е7 (link, number) — body (1891, Пилипів і Єлиняк — hist g9s4l4) + е6 (закон Лінкольна 1862). е9 (crit) — l2 е1 (≈ 4 млн поневолених 1860) + е8 (уперше голосували); дистрактор «південні штати не входили» спростовує l2 е4 (Пд. Кароліна вийшла 1860). е10 (order) — роки 1823 (е2), 1830 (е4), 1852 (е6), 1862 (е6), 1870 (е8), 1877 (е8); hint їх повторює.
- l8 е3 — hyp. е5 (crit) — е4 абз. 2 (князі й селяни, що втратили землі). е6 (multi) — е4 абз. 3 (влада від компанії до уряду королеви) + е1 (вишлють до Бірми). е8 (crit, фото) — е7 абз. 2 (не огинати Африку, шлях до Індії) і абз. 1 (копали єгипетські селяни за проєктом Лессепса). е9 (multi) — body самого екрана (Конгрес: юристи, спершу не незалежність; свадеші 1905). е10 (order) — 1757 (е2), 1857, 1858 (е4), 1869 (е7), 1885, 1905 (е9).
- Фінал: П6 — l7 е4, е6, е8, е2; П7 — l1 е4 (1804), l3 е4 (1842), l8 е4 (1857), l2 е9 (1861), l8 е7 (1869), l8 е9 (1885).

### Факти з джерелами (≥ 2; en.wiki — лише перше)
- Доктрина Монро 2.12.1823, послання Конгресу; нових європейських колоній в Америці не буде, США не втручаються у справи Європи; страх, що Іспанія/Франція повернуть колонії; цитата (переклад рядка): https://history.state.gov/milestones/1801-1829/monroe ; https://www.archives.gov/milestone-documents/monroe-doctrine
- Луїзіана 1803, у Франції, США «doubled its size»: https://www.archives.gov/milestone-documents/louisiana-purchase-treaty ; https://history.state.gov/milestones/1801-1829/louisiana-purchase
- 1848 — Мексика поступилася ≈ 55 % території (Каліфорнія тощо) → вихід до Тихого океану (в уроці лише «до 1850 р. — Тихого океану»): https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo ; https://history.state.gov/milestones/1830-1860/texas-annexation (Орегонський договір 1846, Каліфорнія)
- Закон про переселення індіанців 1830; «Шлях сліз» черокі 1838–1839, загинули тисячі (NPS: > 1000 у дорозі + ще тисячі від наслідків; state.gov: 3–4 тис. з 15–16 тис.): https://www.nps.gov/trte/learn/historyculture/index.htm ; https://history.state.gov/milestones/1830-1860/indian-treaties
- Бізони: 30–60 млн на поч. XIX ст., до 1900 р. — менше 1000: https://www.nps.gov/gosp/learn/nature/where-the-buffalo-roamed.htm ; https://www.ebsco.com/research-starters/history/great-american-buffalo-slaughter («десятки мільйонів», «кілька тисяч» на 1880-ті; звіт Горнадея 1889 — https://library.si.edu/digital-library/book/exterminationam00horn)
- Резервації — відведені землі, частина створена для насильно переселених: https://www.bia.gov/faqs/what-federal-indian-reservation ; https://en.wikipedia.org/wiki/Indian_reservation (1830, 1851, політика 1868)
- «Дикий Захід» — популярна назва земель за фронтиром: https://en.wikipedia.org/wiki/American_frontier (термін; без тези про «беззаконня»)
- «Хатина дядька Тома» 1852, ≈ 300 тис. у США за перший рік: https://clements.umich.edu/exhibit/centennial-exhibit/centennial-pair-18 ; https://www.blackpast.org/african-american-history/concepts-african-american-history/page/4/ (Дуглас 1838 — перевірено, з екрана прибрано заради довжини: https://housedivided.dickinson.edu/sites/ugrr/frederick-douglass-escape-1838/)
- Гомстед-акт 20.05.1862, підписав Лінкольн; 160 акрів, внесок 10 дол. (розд. 2), 5 років жити й обробляти: https://www.archives.gov/milestone-documents/homestead-act ; https://www.nps.gov/home/learn/historyculture/abouthomesteadactlaw.htm . Канада — 160 акрів за 10 дол., Пилипів і Єлиняк 1891 — facts/hist №150.
- Реконструкція 1865–1877, кінець — компроміс 1877: https://www.history.com/topics/american-civil-war/reconstruction ; https://en.wikipedia.org/wiki/Reconstruction_era
- 14-та поправка ратифікована 1868 (9.07; NARA — сертифікація 28.07; в уроці лише рік), громадянство всім народженим у США: https://www.senate.gov/about/origins-foundations/senate-and-constitution/14th-amendment.htm ; https://www.archives.gov/milestone-documents/14th-amendment
- 15-та поправка 3.02.1870 (раса, колір, колишнє рабство); згодом тести грамотності й «дідусеві застереження»: https://www.archives.gov/milestone-documents/15th-amendment ; history.com (вище)
- Ку-клукс-клан нападав на чорношкірих виборців (без дат): history.com (вище); en.wiki Reconstruction era.
- Гайрам Ревелс — перший чорношкірий сенатор, Міссісіпі, присягнув 25.02.1870: https://history.house.gov/People/Listing/R/REVELS,-Hiram-Rhodes-(R000166)/ ; WebSearch: Britannica (сніпет) / history.com
- Плессі 23.06.1757, Ост-Індська компанія проти навабa Бенгалії, початок британського панування; сипаї в армії компанії: https://www.nam.ac.uk/explore/battle-plassey ; https://en.wikipedia.org/wiki/Battle_of_Plassey
- Сипайське повстання: Мірут 10.05.1857; чутка про патрони з яловичим і свинячим жиром (образа індуїстів і мусульман); Делі, Бахадур Шаха проголосили імператором; анексії й податки — глибші причини; жорстокість обох сторін; основні бої — до червня 1858 (формально до 8.07.1859 — тому в уроці «здебільшого придушили» 1858 р.); 1858 — влада від компанії до корони: https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857 ; https://www.encyclopedia.com/history/asia-and-africa/south-asian-history/indian-mutiny
- Бахадур Шах II: нар. 24.10.1775 (у травні 1858 — 82 роки), вислано до Рангуна (Бірма) 1858, помер 1862: https://en.wikipedia.org/wiki/Bahadur_Shah_Zafar ; https://victorianweb.org/history/empire/1857/nam5.html ; фото — Британська бібліотека Photo 797(37), травень 1858, Тайтлер і Шеперд: https://searcharchives.bl.uk/catalog/040-003107314
- Суецький канал: копати почали 25.04.1859 (Порт-Саїд), відкрито 17.11.1869, 164 км; Лессепс (концесія 1854); ≈ 20 тис. єгиптян «у найтяжчих умовах» / примусова праця; 1875 — Британія купила 44 % акцій у хедива; 1882 — окупація Єгипту: https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx ; https://www.history.com/this-day-in-history/november-17/suez-canal-opens
- Скорочення шляху ≈ 40 %: https://transportgeography.org/contents/chapter1/emergence-of-mechanized-transportation-systems/suez-panama-canal-geography-impacts/ (Роттердам — Мумбаї −41 %); WebSearch-сніпет: Лондон — Бомбей 10 667 → 6 274 миль (−41 %), scholar.colorado.edu (403). ⚠️ Верифікатору: друге джерело — лише сніпет; за потреби замінити на «на тисячі кілометрів».
- Індійський національний конгрес: 28.12.1885, Бомбей (коледж Гокулдас Теджпал), 72 делегати, переважно юристи; спершу — більше участі освічених індійців в управлінні, не незалежність: https://en.wikipedia.org/wiki/Indian_National_Congress ; https://inc.in/congress-sandesh/archives/synopsis-of-plenary-sessions-from-1885-to-2018 (дата, місце; число 72 — en.wiki + https://www.gktoday.in/bombay-congress-session-of-1885/)
- Поділ Бенгалії 16.10.1905 (Керзон), свадеші — бойкот британських товарів, «своєї країни» (swa + desh): https://en.wikipedia.org/wiki/Partition_of_Bengal_(1905) ; https://ebooks.inflibnet.ac.in/icp01/chapter/ndian-national-movement-1905-1911-vandemataram-and-swadeshi-movements

### Зображення (D-027)
- l7: `american-progress-gast-crofutt.jpg` — **хромолітографія Дж. Крофатта бл. 1873 р. за картиною Дж. Гаста 1872 р.** (LOC ppmsca.09855, LCCN 97507547). Commons подає файл як «картину Гаста, Autry», але джерело — LOC ppmsca.09855, а це хромолітографія (сніпети loc.gov/item/97507547, usdakotawar.org; loc.gov — 403). У `cap`/`credits` — хромолітографія. Суспільне надбання (Гаст † 1896, опубл. до 1931). https://commons.wikimedia.org/wiki/File:American_Progress_(John_Gast_painting).jpg ; опис сюжету (Колумбія, телеграф, індіанці й бізони тікають у темряву) — https://en.wikipedia.org/wiki/American_Progress
- l7: `first-colored-senator-1872.jpg` — «Карр'єр і Айвз», 1872 (друкований копірайт 1872 на аркуші), LOC LCCN 98501907, суспільне надбання. https://commons.wikimedia.org/wiki/File:The_first_colored_senator_and_representatives_-_in_the_41st_and_42nd_Congress_of_the_United_States_LCCN98501907.jpg
- l8: `bahadur-shah-1858.jpg` — Тайтлер (†1872) і Шеперд, травень 1858, BL Photo 797(37), суспільне надбання (Commons просить ще PD-US-тег; фото 1858 р., автори померли до 1956 → PD у США). Оригінал лише 420 × 324 px — менших мініатюр немає. https://commons.wikimedia.org/wiki/File:Bahadur_Shah_Zafar.jpg . NAM датує свій примірник «c.1859» і приписує Тайтлерові — у `cap` дата BL.
- l8: `suez-inauguration-riou-1869.jpg` — Е. Ріу (†1900), **олія 1896 р.**, Національний музей замку Комп'єн (C.30.D2); Commons помилково — «1869, з Альбому імператриці». Дата/техніка: https://www.histoire-image.org/etudes/inauguration-canal-suez ; https://napoleon.org/en/history-of-the-two-empires/paintings/inauguration-ceremony-of-the-suez-canal-at-port-said-17-november-1869 . PD-Art. https://commons.wikimedia.org/wiki/File:L%27inauguration_du_canal_de_Suez,_17_November_1869_Gal18_riou_001f.jpg
- l8: `inc-first-session-1885.jpg` — фото 1885 р. невідомого автора (друкований підпис «The First Indian National Congress, 1885»), PD (Індія — 60 р. від публікації; США — опубл. до 1931). Опис Commons називає Гокхале серед присутніх — сумнівно (вступив пізніше), імен у `cap` не даю. https://commons.wikimedia.org/wiki/File:First_meeting_session_of_the_Indian_National_Congress_in_Bombay,_1885.jpg
- Мініатюри — thumb.wikimedia.org (960 px), Бахадур Шах — оригінал (420 px), паузи ≥ 15–22 с; 4 запити api.php (2 дали 429), решта — WebFetch сторінок файлів.

### Перевірки
- `validate --section w9s4`: 0 помилок, 0 попереджень; `validate --diag dgw9`: 0/0.
- `euphony --section w9s4`: l7, l8, l6 — 0 відхилень (решта — старі в l1–l3, поза обсягом).
- `stats --subject world`: l7 (readWords 40), l8, l6 — без прапорців.
- Плейтест — лише CI (немає Python playwright). Build не запускав; нові файли img потраплять у sw.js після build оркестратора.

### Сумнівне / для верифікатора
- l7 е4 «з десятків мільйонів до 1900 р. лишилося менше тисячі» — NPS; оцінки на 1889 р. 541 (Горнадей), на 1880-ті — «кілька тисяч» (EBSCO).
- l8 е7 «≈ 40 %» — див. вище (друге джерело — сніпет).
- l8 е4 «1858 р. британці здебільшого придушили повстання» — Гваліор 20.06.1858; офіційний кінець — 8.07.1859.
- l8 е2 «Падишах у Делі лишився лише для годиться» — узагальнення (en.wiki: влада Бахадур Шаха — лише в стінах Делі).
- Назва повстання: у програмі «Сипайське повстання»; в історіографії також «перша війна за незалежність» — в уроці не оцінюється.
- TERM (inbox): Джеймс Монро, Луїзіана, фронтир, «Дикий Захід», «Шлях сліз», черокі, резервації, аболіціоністи, Гаррієт Бічер-Стоу, «Хатина дядька Тома», Реконструкція, ку-клукс-клан, Гайрам Ревелс, Джон Гаст, «Карр'єр і Айвз»; Бахадур Шах II, Великі Моголи, падишах, Плессі, сипаї, Мірут, Фердинанд де Лессепс, Порт-Саїд, Едуар Ріу, Індійський національний конгрес, Бомбей (Мумбаї), Бенгалія, свадеші.

### Верифікація (verifier-revise-w9s4, 2026-11-12)
Звіт: reports/verify/revise-w9s4.md. Факти — ≥ 2 відкриті джерела; «≈ 40 %» підтверджено другим джерелом (BnF: 10 721 → 6 260 морських миль), лишено. «1858 р. здебільшого придушили» — точне. Атрибуції American Progress (LOC JSON: хромолітографія c1873, Крофатт) і Ріу (олія 1896, histoire-image.org + napoleon.org) — підтверджено. Правки (3): l7 е8 14-та поправка → «зробила колишніх рабів громадянами США»; l7 е8 «На Півдні чорношкірі чоловіки вперше голосували»; l8 е9 cap «Учасники першої сесії». l7, l8, l6 → verified. validate --section w9s4, --diag dgw9, --diag dgw10 — 0/0.
