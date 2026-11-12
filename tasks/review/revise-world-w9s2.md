---
claimed_from: todo
claimed_at: 2026-11-12T04:34:48.281Z
id: revise-world-w9s2
type: revise-section
subject: world
grade: 9
section: w9s2
weeks: [7, 12]
status: review
claimed_by: w-revise-world-w9s2
created: 2026-11-10
depends_on: []
---
# 1830 рік і колонії — два нові уроки у w9s2 (Всесвітня історія, 9 клас; розділ «Індустріальний світ першої половини XIX ст.»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w9s2l7 «Революції 1830 р.: Франція, Бельгія, Листопадове повстання»; w9s2l8 «Колонії, голод в Ірландії і кінець работоргівлі». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w9s2l7`** (тема плану «Революції 1830 р.: Франція, Бельгія, Листопадове повстання»; робоча назва звіту «Липень і листопад 1830-го») (9.1.6): Реставрація й реакція; карбонарії; Липнева революція 1830 р. у Франції («три славні дні»); незалежність Бельгії; Листопадове повстання 1830–1831 рр. у Царстві Польському, Микола I — «жандарм Європи» (терміни програми). `link`: повстання і Правобережна Україна (шляхта Правобережжя — з джерелом; в hist окремого уроку немає). Грецьку революцію пригадай з w9s2l4.
2. **Новий урок `w9s2l8`** (тема «Колонії, голод в Ірландії і кінець работоргівлі») (9.1.15, 9.1.16): Алжир 1830; Великий голод в Ірландії 1845–1852 (en.wiki; укр. джерела часто 1845–1849 — візьми формулювання, яке підтверджують ≥ 2 джерела, і поясни в нотатках): https://en.wikipedia.org/wiki/Great_Famine_(Ireland) ; Британія в Індії (коротко; Сипайське повстання — w9s4l8); згортання трансатлантичної работоргівлі — чому і коли (заборони 1807–1808, скасування рабства в Британській імперії — з джерелами). «Опіумна» війна — у w9s4l3, що йде пізніше: тут не спирайся на неї.
3. Порядок: …, w9s2l5, **w9s2l7, w9s2l8**, w9s2l6 (фінал).
4. Доповнення w9s2l2, l3, l4, l5 — окрема задача refine-world-w9s2 (після цієї).
- **Тижні:** у файлі `weeks: [8, 14]` → `[7, 12]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g9-w9s2.js` (лише він, `img/world/w9s2/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w9s2l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w9s2l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w9s2l3 (cur dgw9) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w9s2` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w9s2`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->
w-revise-world-w9s2, 2026-11-12. Файл `content/world/g9-w9s2.js`, тека `img/world/w9s2/` (4 нові файли). Порядок: l1–l5, **l7, l8**, l6 (фінал). `weeks: [8, 14]` → `[7, 12]`. Доповнення refine-world-w9s2 (l2 е7, l3 е8, l4 е5, l5 е7) не змінено; l1–l5 лишилися `verified`.

### Зміни по уроках
- **w9s2l7 «Липень і листопад 1830-го»** (новий, draft, 10 екранів, 6 оцінюваних: sort, multi, choice ×3, order; без hyp). Одиниця 9.1.6: Реставрація, реакція, карбонарії (Неаполь 1820–1821, Іспанія 1823), «три славні дні», Луї-Філіпп, Бельгія, Листопадове повстання, Микола I — «жандарм Європи»; `link` — повстання шляхти Правобережжя 1831 р. і Київський університет 1834 р. Грецьку революцію не повторював (вона в l4).
- **w9s2l8 «Ціна імперії»** (новий, draft, 10 екранів, 6 оцінюваних: choice ×2, multi ×2, sort, number). Одиниці 9.1.15, 9.1.16: аболіціоністи, закон 1807 р., закон 1833 р. (чинний з 1.08.1834, «учнівство» до 1838 р., 20 млн фунтів власникам); Алжир 1830 р., Абд аль-Кадір до 1847 р.; Ост-Індська компанія (з 1757 р.; з 1833 р. лише керує), індійські ткачі; Великий голод в Ірландії. «Опіумну» війну й Сипайське повстання не згадую.
- **w9s2l6 (фінал)** → draft: інтро — виставка «Світ 1807–1852 рр.», сім зал; нове Питання 6 (multi, w9s2l7); Питання 7 — стрічка часу переписана під l8 (1807, 1834, 1845 замість 1833, 1838, лютого 1848; ці теми й так перевіряють П2, П3). Разом 7 завдань на 7 тем (D-048 п. 1). Усім завданням додано `pre` (l1…l5, l7, l8). Назва «Пара й барикади» (милозвучність; id той самий), outro доповнено; у старих текстах фіналу виправлено і/й («паровози й ходили», «права й власність», «рада й вийшла», «раду й першу»), «зі Львова» → «із Львова».
- Тести рівня: w9s2l3 (g9-ideo, dgw9) не змінено; `validate --diag dgw9` — 0/0.

### Опора завдань (D-019)
- l7 е3 sort — е2 (Реставрація, реакція, карбонарії, Неаполь, Іспанія) + w9s1 (Священний союз). е5 multi — сама картина (триколор, солдати на балконі, жінки праворуч) + е4 (білий прапор Бурбонів). е6 choice — body е6 (конгрес приєднав Бельгію, віра, половина місць) + w9s1 (Віденський конгрес). е8 choice «жандарм» — е7 (1831) + w9s2l5 е9 (1849, армія Миколи I в Угорщині). е9 link — body е9 (шляхта, маєтки, школи, університет 1834 р.); hist g9s1 (Правобережжя після поділів — до Росії). е10 order — роки з е2, е4, е6, е7.
- l8 е2 choice — схема на екрані + переклад напису й примітки в body (454 і 609 — з примітки на самому аркуші). е4 multi — е3. е5 choice — body е5. е7 sort — е6. е9 number — body е9. е10 multi — е3, е5, е6, е8.
- Фінал: П6 — l7 е4, е6, е7; П7 — l8 е3, е5, е8; l1 е3; l4 е11 «Пригадай»; l5 е8.

### Факти з джерелами (≥ 2; en.wiki — лише перше)
- Карбонарії («вуглярі»), Неаполь 1820, австрійська армія 1821; Іспанія 1820, французьке вторгнення 1823: https://en.wikipedia.org/wiki/Carbonari ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/revolutions-1820 ; https://www.ebsco.com/research-starters/history/neapolitan-revolution (пошук)
- Луї XVIII → брат Карл X; укази 25–26.07.1830 (розпуск палати, преса, виборці); бої 27–29.07.1830 («Trois Glorieuses»); зречення Карла X (2.08); Луї-Філіпп — «король французів» з 9.08.1830; білий прапор Реставрації і повернення триколору 1830 р.: https://en.wikipedia.org/wiki/July_Revolution ; https://www.elysee.fr/la-presidence/le-drapeau-francais ; https://en.wikipedia.org/wiki/Louis_Philippe_I ; https://ebsco.com/research-starters/history/july-revolution
- Бельгія: 25.08.1830 Брюссель; незалежність проголошено 4.10.1830 (в уроці «восени»); король 21.07.1831; Лондонський договір 19.04.1839 (визнання Нідерландами); причини — віра, 62 % населення і 50 % місць: https://en.wikipedia.org/wiki/Belgian_Revolution ; https://www.dekamer.be/kvvcr/pdf_sections/pri/fiche/en_01_00.pdf ; https://www.brusselstimes.com/1660044/from-opera-to-independence-revisiting-the-belgian-revolution
- Листопадове повстання: 29.11.1830, курсанти (П. Висоцький), Арсенал; привід — план кинути польське військо на революції у Франції й Бельгії; детронізація 25.01.1831; Варшава — вересень 1831; Органічний статут 1832 замість конституції; тисячі емігрантів: https://en.wikipedia.org/wiki/November_Uprising ; https://www.encyclopediaofukraine.com/pages%5CP%5CO%5CPolishInsurrectionof1830hD71.htm (Himka) ; https://ebsco.com/research-starters/history/first-polish-rebellion
- «Жандарм Європи»: https://ebsco.com/research-starters/history/nicholas-i ; https://www.globalsecurity.org/military/world/russia/czar-nicholas-i-policy.htm (пошук: «his offers to suppress revolution … earned him the label»)
- Правобережжя 1831 (квітень–травень, шляхта, селяни байдужі чи ворожі, поразка в травні; конфіскації, польські школи, Київський університет): EoU (Himka, вище); https://www.encyclopediaofukraine.com/pages%5CK%5CR%5CKremenetsLyceum.htm ; http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CY%5CKyivNationalUniversity.htm («Opened in 1834»; повстання переконало Миколу I русифікувати Правобережжя) ; https://en.wikipedia.org/wiki/Taras_Shevchenko_National_University_of_Kyiv
- Аболіціоністи, товариство 1787, бойкот цукру, петиції, Вілберфорс (законопроєкти 1789–1807): https://en.wikipedia.org/wiki/Abolitionism_in_the_United_Kingdom ; https://www.understandingslavery.com/casestudy/campaigning-against-slavery/ (пошук) ; https://www.eyemagazine.com/feature/article/charts-change-minds (схема «Брукс», 7000 аркушів)
- Закон 1807 (25.03, чинний з 1.05.1807), Західноафриканська ескадра з 1808: https://en.wikipedia.org/wiki/Slave_Trade_Act_1807 ; https://historyofparliament.com/2024/08/28/1833-slavery-abolition-act
- Закон 1833 (28.08.1833), чинний з 1.08.1834, «учнівство» до 1.08.1838, 20 млн фунтів власникам, виняток — землі Ост-Індської компанії, Цейлон, о. Св. Єлени («у більшості колоній»): https://en.wikipedia.org/wiki/Slavery_Abolition_Act_1833 ; https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/georgians/1833-abolition-of-slavery-act-and-compensation-claims/ ; https://historyofparliament.com/2024/08/28/1833-slavery-abolition-act
- Алжир: висадка 14.06.1830, місто взято 5.07.1830; Карл X хотів повернути прихильність; Абд аль-Кадір 1832–1847: https://en.wikipedia.org/wiki/Invasion_of_Algiers_(1830) ; https://www.ebsco.com/research-starters/military-history-and-science/french-occupation-algeria
- Ост-Індська компанія: Плессі 1757; Charter Act 1833 — компанія лише адміністрація: https://en.wikipedia.org/wiki/Saint_Helena_Act_1833 ; https://www.worldhistory.org/article/2096/fall-of-the-east-india-company ; індійські ткачі й британські тканини: https://en.wikipedia.org/wiki/Muslin_trade_in_Bengal ; https://en.banglapedia.org/index.php/Muslin
- Великий голод: 1845–1852 (en.wiki, RTÉ); фітофтороз 1845, майже повний неврожай 1846; > 3 млн жили з картоплі; вивезення продовольства; виселення; laissez-faire; ≈ 1 млн померлих (оцінки 775 тис. – 1,5 млн), > 1 млн емігрантів; перепис 1841 — 8 175 124, 1851 — 6 552 385: https://en.wikipedia.org/wiki/Great_Famine_(Ireland) ; https://www.rte.ie/history/the-great-irish-famine/2020/0629/1150367-the-great-irish-famine ; https://uk.wikipedia.org/wiki/Великий_голод_в_Ірландії ; https://grantonline.com/grant-family-genealogy/Records/population/population-ireland.htm (числа переписів, пошук)
- **Чому 1845–1852:** en.wiki і RTÉ (ірландська суспільна телерадіокомпанія) дають 1845–1852; uk.wiki в тексті — 1845–1849 (найтяжчі роки), в інфобоксі — 1852. В уроці — 1845–1852 з поясненням у `note`.

### Зображення (D-027)
- l7: `july-1830-rue-de-rohan.jpg` — І. Лекомт, «Бій на вулиці Роан, 29 липня 1830 р.», 1831, Музей Карнавале P213; PD (†1857), фото CC0 Paris Musées — https://commons.wikimedia.org/wiki/File:R%C3%A9volution_de_1830_-_Combat_de_la_rue_de_Rohan_-_29.07.1830.jpg ; дата й підпис «Hte Lecomte 1831» — https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/combat-de-la-rue-de-rohan-le-29-juillet-1830 . Обрізано нижній край (лежачі фігури — pitfalls-hist: без тіл загиблих у 9 кл.). Делакруа «Свобода, що веде народ» відкинуто: оголення й тіла загиблих.
- l7: `arsenal-warsaw-1830.jpg` — М. Залеський, «Взяття Арсеналу», 1831, Нац. музей у Варшаві MP 4797 (EXIF файлу МНВ: «MP 4797; Zaleski…; 1831»), PD (†1877) — https://commons.wikimedia.org/wiki/File:Marcin_Zaleski,_Wzi%C4%99cie_Arsena%C5%82u.jpg ; дата також Google Arts & Culture https://artsandculture.google.com/asset/EwH7-p6_nRFWoQ (zpe.gov.pl дає 1830 — у `cap` 1831 за музеєм).
- l8: `brookes-slave-ship.jpg` — «Stowage of the British slave ship Brookes…», LOC cph.3a34658, PD — https://commons.wikimedia.org/wiki/File:Slaveshipposter.jpg . Commons: «1788-12», автор — Плімутське відділення; це розширена (кількафігурна) версія, точний рік друку не встановлено → у `cap` «за обмірами 1788 р.», без року друку.
- l8: `irish-blight-1847.jpg` — Д. Макдональд, 1847, Нац. фольклорна колекція UCD, PD (†1853) — https://commons.wikimedia.org/wiki/File:An_Irish_Peasant_Family_Discovering_the_Blight_of_their_Store_by_Daniel_MacDonald.jpg ; дата й зберігання — https://ucdculturalheritagecollections.com/2021/05/27/ireland-will-never-never-recover/ , https://www.irishtimes.com/news/ireland/irish-news/book-on-famine-painter-daniel-macdonald-launched-in-dublin-1.2547287 (пошук). Чутлива тема: не фото й не гравюри з жертвами голоду.
- Мініатюри — thumb.wikimedia.org, паузи 20+ с; API Commons один раз дав 429.
- Увага: файли img/world/w9s2/ потрапили в чужий WIP-коміт оркестратора (сам не комітив).

### Перевірки
- `validate --section w9s2`: 0 помилок, 2 попередження (старі l2, l5 — позиція «Б» у choice). `validate --diag dgw9`: 0/0.
- `euphony --section w9s2`: у l7, l8, l6 — 0 відхилень (решта — старий текст l1–l5, поза обсягом).
- `stats`: l7 (10 екр., 0.6, 40 сл./екр., max 69), l8 (10, 0.6, 40, 75), l6 (8, 0.88) — без прапорців.
- Плейтест — лише CI.

### Сумнівне / для верифікатора
- l7 е4: «1830 р. він указами розпустив щойно обрану палату» — укази 25.07 (опубл. 26.07) розпускали нову палату до її скликання (en.wiki: dissolved the Chamber of Deputies).
- l7 е7: «Цар скасував конституцію Царства Польського» — Органічний статут 1832 замінив конституцію 1815 р. (EBSCO: «restricted the rights»; en.wiki: втрата автономії).
- l7 е9: «Поміщики тут були переважно поляками»; «українські селяни здебільшого не підтримали» (EoU: «indifferent or hostile»).
- l8 е5: «до 1838 р. звільнені ще мусили працювати на колишніх власників» — «учнівство» (для польових робітників планувалося до 1840, скасоване 1838).
- l8 е8: «Уряд допомагав мало: вважав, що ринок усе владнає сам» — спрощення laissez-faire уряду Рассела (уряд Піля закупив кукурудзу) — перевір нейтральність.
- `link` l7 спирається на hist g9s1 (поділи, Правобережжя); окремого уроку hist про 1830–1831 немає (у плані hist g9s2 — «Київ під наглядом: декабристи, 1830–1831, університет, 1839», ще не написаний).
