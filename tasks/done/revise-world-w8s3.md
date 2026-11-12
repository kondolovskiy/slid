---
claimed_from: todo
claimed_at: 2026-11-12T04:48:20.332Z
id: revise-world-w8s3
type: revise-section
subject: world
grade: 8
section: w8s3
weeks: [13, 17]
status: done
claimed_by: w-revise-world-w8s3
created: 2026-11-10
depends_on: []
---
# Шах і падишах — новий урок у w8s3 (Всесвітня історія, 8 клас; розділ «Європа XVI ст. і її сусіди»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w8s3l7 «Іран Сефевідів, Індія Великих Моголів, Китай Мін». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w8s3l7`** (тема плану «Іран Сефевідів, Індія Великих Моголів, Китай Мін»; робоча назва звіту «Шах і падишах») (8.1.25–8.1.27): Іран Сефевідів (з 1501 р.), шах Аббас I (1588–1629), Ісфаган; імперія Великих Моголів, Акбар (1556–1605); Китай за часів занепаду Мін і проникнення європейців до Китаю (Макао, єзуїти — коротко). Не дублюй w8s4l5 (Японія, Цін); Бабура (w7s6l7) — лише пригадай (якщо того уроку ще немає — самодостатнім реченням, D-019). Джерела: https://en.wikipedia.org/wiki/Safavid_Iran ; https://en.wikipedia.org/wiki/Abbas_the_Great ; https://en.wikipedia.org/wiki/Akbar + друге джерело.
- **Тижні:** у файлі `weeks: [15, 21]` → `[13, 17]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g8-w8s3.js` (лише він, `img/world/w8s3/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w8s3l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w8s3l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w8s3l2 (cur dgw8) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [x] `node tools/validate.mjs --section w8s3` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [x] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [x] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w8s3`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->
**Виконавець: w-revise-world-w8s3, 2026-11-12.** Скіли content-author + hist-images. Файл `content/world/g8-w8s3.js`, тека `img/world/w8s3/` (+3 файли). validate --section w8s3: 0 помилок, 0 попереджень; euphony (--section w8s3): у l7 і l6 — 0 (у verified l1–l5 лишилися старі підказки, не чіпав).

### Зміни
- `weeks: [15, 21]` → `[13, 17]`; коментар-шапка: 7 уроків.
- **Новий w8s3l7 «Шах і падишах»** (draft), перед фіналом; eyebrow «Розділ 3 · Урок 6». 10 екранів, оцінюваних 5 + hyp (gradedShare 0.5), типи choice / multi / sort, 4 hint; 3 справжні img. Покриває 8.1.25 (Сефевіди з 1501, шиїти/суніти, Аббас I, Ісфаган 1598), 8.1.26 (Бабур 1526 — самодостатнім реченням, бо w7s6l7 ще немає; Акбар 1556–1605, політика щодо індуїстів, Дім поклоніння, єзуїти з Гоа), 8.1.27 (занепад Мін, Ваньлі, 1644; Макао 1557; Річчі в Пекіні 1601, карта 1602). Японію й Цін (w8s4l5) не дублював — лише «1644 р. повстанці захопили Пекін» (маньчжури — у w8s4l5).
- **Фінал w8s3l6** → draft: нове «Питання 6» — sort «Нотатки про Азію» (Іран / Індія / Китай, `pre: "w8s3l7"`); хронологія стала «Питання 7»; усім оцінюваним завданням фіналу додано `pre` (l1…l5, l7), як у w8s1/w8s2; outro.text + 1 пункт learned. Евфонія у старих екранах фіналу: «Документ із Нідерландів», «виганяють із країни», «Читач із Кракова», «Читач із Львова» (було «з», «зі») — відповіді не змінено.
- l1–l5 не змінено (w8s3l2 — тема cur dgw8 — недоторканий; diag-*.js не чіпав).
- stats: l7 — без прапорців; l6 — typeVariety z=2 (4 типи: choice, multi, sort, order) — як у фіналі w8s2 (верифікатор: не блокує); sort узято, щоб не робити фінал із 5 choice.

### Опора для оцінюваних завдань l7 (D-019)
- е4 choice «Навіщо шах слав послів до Праги?» — факт посольства на самому екрані; відповідь — міркування: е3 (Сефевіди ворогують з османами, Аббас відвоював у них землі) + l1/l4 (Габсбурги воюють з османами, Відень 1529, союз Франції із Сулейманом проти Карла V — l4 е4).
- е6 choice «Навіщо скасовувати податок?» — е5 (падишах-мусульманин, більшість підданих — індуїсти, посади індуїстам, 1564 податок).
- е7 multi (мініатюра) — усе видно на зображенні (навіс, учені з книжками, двоє в чорному ліворуч); що «двоє в чорному — єзуїти» сказано в body.
- е9 choice (карта Річчі) — видно на зображенні (Америка праворуч, Африка/Європа ліворуч); порівняння з Ортелієм подано в body (карта 1570 є в w8s1 фіналі; перевірено — Атлантика посередині, Америка ліворуч).
- е10 sort — е3, е4, е5, е7, е8.
- Фінал П6 — l7 е3 (Аббас, Ісфаган, майдан), е5/е7 (Акбар, Дім поклоніння), е8 (Річчі в Пекіні, Макао 1557).

### Факти й джерела (кожне відкрито в сесії)
- Сефевіди з 1501 р. (Ісмаїл I), шиїзм — державна віра; османи — суніти, ворожнеча й через віру (Чалдиран 1514 — мотив Селіма) — https://en.wikipedia.org/wiki/Safavid_Iran ; https://www.newworldencyclopedia.org/entry/Safavid_Empire ; https://en.wikipedia.org/wiki/Battle_of_Chaldiran
- **Аббас I: початок правління — 1587 чи 1588** (en.wiki: коронований 1.10.1587; Britannica: 1588–1629; uk.wiki: 1587–1628). Тому в уроці — «правив понад 40 років, до 1629 р.» (Аббас † 19.01.1629 — en.wiki, Britannica). Столиця до Ісфагана 1598; постійне військо; відвоював землі в османів (Тебриз 1603) — https://en.wikipedia.org/wiki/Abbas_the_Great ; Britannica (через пошук: «made Eṣfahān the capital», «standing army») https://www.britannica.com/biography/Abbas-I-Safavid-shah-of-Persia
- Майдан Накше-Джахан 1598–1629: мечеть Шаха, палац Алі-Капу, брама базару; торгові ятки — https://en.wikipedia.org/wiki/Naqsh-e_Jahan_Square ; малюнок Гофстеде ван Ессена 1703 (сам документ).
- Шовк — під контролем шаха (crown monopoly), експорт до Англії й Нідерландів — en.wiki Abbas the Great ; en.wiki Safavid Iran.
- Прислів'я «Ісфаган — половина світу» (Esfahān nesf-e jahān) — https://fr.unesco.org/silkroad/content/ispahan ; https://archive.aramcoworld.com/issue/196201/isfahan.is.half.the.world.htm (цитує П'єтро делла Валле). У тексті — «В Ірані досі кажуть», без дати виникнення.
- Посольство Аббаса до Рудольфа II у Празі 1600 р. (прийнято 7.11.1600), союз проти османів; 1600–1612 — 5–6 посольств — https://en.wikipedia.org/wiki/Persian_embassy_to_Europe_(1599%E2%80%931602) ; G. Rota, «One Emperor, One Shah, Too Many Ambassadors: Safavid Envoys in Prague (1600–1612)», De Gruyter — https://www.degruyterbrill.com/document/doi/10.1515/9783111388175-011/html (анотація). Формального союзу не укладено — в уроці не стверджується.
- Бабур 1526 (Паніпат), нащадок Тимура й Чингісхана; «Mughal» — від «Mongol», «Grand Mughal» — західна назва; іслам — державна, індуїзм — більшість — https://en.wikipedia.org/wiki/Mughal_Empire ; звіт coverage §9 (Бабур 1483–1530).
- Акбар 1556–1605, онук Бабура; шлюб з донькою раджі Біхарі Мала 1562, раджпути на службі; джизья скасована 1564; не вмів читати; Дім поклоніння у Фатехпур-Сікрі; запросив єзуїтів з Гоа — https://en.wikipedia.org/wiki/Akbar ; https://ebsco.com/research-starters/history/akbar ; Ібадат-хана (1575; рік в уроці не подано) — https://en.wikipedia.org/wiki/Ibadat_Khana ; єзуїти 1580–1583, Акбар не охрестився — https://en.wikipedia.org/wiki/Rodolfo_Acquaviva
- Вік Акбара при вступі — 13 (EBSCO) / 14 (en.wiki): в уроці не подано.
- Мін з 1368; Ваньлі 1572–1620 роками не приймав міністрів (з 1586/1588), посади не заповнювались — https://en.wikipedia.org/wiki/Wanli_Emperor ; https://samurai-archives.com/wiki/Wanli_Emperor . Повстання, голод, війни; 24.04.1644 Пекін узяли повстанці Лі Цзичена, 6.06.1644 — маньчжури — https://en.wikipedia.org/wiki/Transition_from_Ming_to_Qing
- Макао 1557 — португальцям дозволили оселитися за щорічну плату — https://en.wikipedia.org/wiki/Portuguese_Macau ; https://www.ebsco.com/research-starters/diplomacy-and-international-relations/portuguese-reach-china
- Річчі: Макао 1582, Пекін 1601, вивчив мову й конфуціанські книжки, жив у столиці, імператора так і не побачив — https://en.wikipedia.org/wiki/Matteo_Ricci ; https://www.ebsco.com/research-starters/history/matteo-ricci-travels-beijing ; «never received by the emperor» — https://kids.britannica.com/students/article/Matteo-Ricci/276720 (через пошук).
- Карта 1602, Пекін, шість аркушів, перша китайська карта з Америкою; Китай ближче до середини — https://en.wikipedia.org/wiki/Kunyu_Wanguo_Quantu ; https://loc.gov/loc/lcib/1005/map.html . Чи «щоб догодити китайцям» — спірно (Criveller: легенда) — https://www.asianews.it/en/east-asia/china/matteo-ricci-maps-did-not-put-china-at-centre-of-the-world ; тому лише в `note`, без оцінювання. «На прохання Ваньлі» (en.wiki, Commons) ≠ LoC (просили вчені в Нанкіні; Ваньлі — копії після 1605) — в уроці не подано.

### Зображення (D-027)
| Екран | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l7 е1 | isfahan-maidan-1703.jpg (720×1073, 213 КБ, tall) | PD (PD-old-100, PD-US до 1931; Лейден: «public domain») | https://commons.wikimedia.org/wiki/File:Hofstede_van_Essen,_Gerard_-_Meijdoen_off_Beurs._View_of_Maiden-I-Shan,_Isfahan,_Iran,_1703.jpg ; https://digitalcollections.universiteitleiden.nl/view/item/876361 |
| l7 е7 | akbar-ibadat-khana.jpg (640×1160, 181 КБ, tall) | PD-old (Commons, PD Mark) | https://commons.wikimedia.org/wiki/File:Jesuits_at_Akbar%27s_court.jpg ; https://artsandculture.google.com/asset/GAFqbfFqcxT6RA (Chester Beatty: «Akbar and the Jesuits», Narsingh, c. 1600–03, CBL In 03.263b) |
| l7 е9 | ricci-map-1602.jpg (960×440, 151 КБ) | PD-old-100, PD-US, PD Mark | https://commons.wikimedia.org/wiki/File:Kunyu_Wanguo_Quantu_by_Matteo_Ricci_All_panels.jpg (LoC g3200.ex000006Zb) |

Сумнівне в атрибуції: (1) ім'я автора малюнка — Лейден дає лише «Hofstede van Essen, G.», Commons — «Gerard»; у `cap` — «Г. Гофстеде ван Ессен». (2) Дата мініатюри: Chester Beatty бл. 1600–1603, Commons бл. 1605 — у cap бібліотечна, у credits обидві. (3) Карта: Commons — «held by LoC», en.wiki — скан примірника Бібліотеки Джеймса Форда Белла, виставленого в LoC 2010 р.; у credits — лише «цифрова копія LoC». Мініатюри — thumb.wikimedia.org (960 px), паузи 22 с; api.php 429 з першого запиту.

### Пропозиції
- Глосарій (TERM в inbox): Сефевіди, шах, шиїти/суніти, Ісфаган, Аббас I, Бабур, падишах, Великі Моголи, Акбар, «Акбар-наме», Фатехпур-Сікрі, Дім поклоніння, Гоа, Мін, Ваньлі, Макао, Маттео Річчі.
- Для w7s6l7 (Бабур): у w8s3l7 е5 вже є «Бабур 1526 — нащадок Тамерлана й Чингісхана» — узгодити формулювання.

### Верифікація (verifier-revise-world-w8s3, 2026-11-12)
Звіт reports/verify/revise-w8s3.md. Усі факти l7/l6 — ✅ (≥ 2 відкриті джерела), завдання розв'язано, опора D-019 є. 1 правка: l7 е7 multi — зайвий варіант з останньої позиції на третю (`correct` [0,1,3]). l7 і l6 → verified. validate --section w8s3 і --diag dgw8 — 0/0; euphony l6/l7 — 0. Playtest — лише в CI (немає playwright).
