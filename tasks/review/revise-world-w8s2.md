---
claimed_from: todo
claimed_at: 2026-11-11T20:49:58.609Z
id: revise-world-w8s2
type: revise-section
subject: world
grade: 8
section: w8s2
weeks: [7, 12]
status: review
claimed_by: w-revise-world-w8s2
created: 2026-11-10
depends_on: []
---
# Північне Відродження, бароко і нова наука — два нові уроки у w8s2 (Всесвітня історія, 8 клас; розділ «Відродження і Реформація»)

## Навіщо
Запит людини 10.11.2026 — повне покриття програми. Звіт покриття `reports/research/coverage-research-world-coverage-g7-9.md` (верифіковано, §9) знайшов одиниці програми, яких у розділі немає. Нові уроки: w8s2l7 «Північне Відродження»; w8s2l8 «Бароко і нова наука». Задача створена curate-world-coverage.

## Що зробити
1. **Новий урок `w8s2l7` «Північне Відродження»** (8.1.11): Ян ван Ейк, Ієронім Босх, Пітер Брейгель Старший, Альбрехт Дюрер; плюс Тиціан і Браманте з Італії (у файлі вже є «Тиціан» — тримай це написання). Програма: «впізнає та називає окремі твори» — завдання на впізнавання творів з img (публічне надбання на Commons).
2. **Новий урок `w8s2l8` «Бароко і нова наука»** (8.1.19, 8.1.20): бароко (термін), Рубенс, Рембрандт, Веласкес; Микола Коперник — «Про обертання небесних сфер», 1543, Нюрнберг (https://en.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium + друге джерело), Галілео Галілей, Йоганн Кеплер, Ісаак Ньютон. Не плутай з Просвітництвом (w8s5l1).
3. Порядок у масиві: …, w8s2l5, **w8s2l7, w8s2l8**, w8s2l6 (фінал). У розділі стане 8 уроків — одне завдання фіналу може покривати два суміжні уроки.
- **Тижні:** у файлі `weeks: [8, 14]` → `[7, 12]` (нова сітка класу — звіт §5; plan.js уже змінено куратором).

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` і для нових зображень — `hist-images` (docs/IMAGES.md)
- style/common.md, style/world.md, style/hist.md (чутливі теми), style/profiles.json
- memory/long/glossary/world.md, memory/long/facts/world.md (і facts/hist*.md для синхронізації), memory/long/pitfalls-hist.md
- Звіт `reports/research/coverage-research-world-coverage-g7-9.md`: §3 (одиниці програми), §4, **§9 — незалежна верифікація, має пріоритет**; рядки FACT verifier-coverage-world-g7-9 в memory/short/inbox.md

## Загальне
- Файл: `content/world/g8-w8s2.js` (лише він, `img/world/w8s2/` і ця задача). Програма — модельна програма Гісема та ін. «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023; https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf).
- Правило 11: наявні id уроків, навичок, значків не перейменовувати; нові id — лише ті, що в задачі.
- Новий урок — у масиві `lessons` **перед фіналом** `w8s2l6` (фінал лишається останнім; як g8s1l6 у hist). Урок 6–10 екранів, проблема на першому екрані, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 `hint`, `outro.learned` 2–4 пункти; eyebrow «Розділ N · Урок M» — за позицією; `status: "draft"`.
- **Фінал `w8s2l6`:** одне завдання на кожен новий урок (D-048 п. 1, style/common.md: фінал до 7 завдань лише якщо уроків ≥ 7; у розділі з ≥ 8 уроками одне завдання може покривати два суміжні); спершу заміни дубль; фінал → `draft`. `boss` питає лише те, що було в уроках.
- D-027: у кожному новому уроці ≥ 1 справжнє `img` з відкритою ліцензією, `cap` і `credits` (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно). Нові екрани в наявних уроках — img за потреби.
- D-019: відповідь кожного оцінюваного завдання вже була в уроці, є на екрані або виводиться міркуванням; дат, імен, назв не питати до того, як їх подано; факт уперше — не у `fbText`.
- Дати й числа — з facts/world.md або ≥ 2 джерел з URL (скіл content-author §3); англомовна Вікіпедія — лише перше джерело. «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist, не дублюй їх.
- Кожен змінений урок → `status: "draft"`; незмінені verified не чіпай; `approved` не ставити.
- **Тести рівня dgw7–dgw9 не зачіпаються:** на уроки цього розділу спираються w8s2l1 (pre dgw9), w8s2l3 (cur dgw8) (теми diag-g7/8/9.js). У цих уроках **не змінюй наявних фактів, дат, термінів і відповідей завдань**, на які спираються питання тестів, і не видаляй їх; нові екрани й завдання додавати можна (ключ теми — id уроку, він не змінюється). Нічого в diag-*.js не міняй.
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай (AGENTS.md §4 п. 8).

## Готово, коли
- [ ] `node tools/validate.mjs --section w8s2` — 0 помилок; кожен новий урок має ≥ 1 справжнє `img`
- [ ] `node tools/stats.mjs --subject world` — змінені й нові уроки без прапорців «нетипово для сім'ї» (або пояснено)
- [ ] У нотатках: що змінено по уроках, опора для кожного нового оцінюваного завдання (екран), факти з URL; рядки FACT/TERM в inbox
- [ ] `node tools/claim.mjs move <task-id> review` → content-verifier (`/verify-section w8s2`): факти, D-019, покриття одиниць програми з цієї задачі

## Нотатки агента
<!-- Виконавець: зміни по уроках, факти з джерелами, сумнівне -->

### w-revise-world-w8s2, 2026-11-12
**Зміни:** `weeks` [8, 14] → [7, 12]; шапка файлу (8 уроків); `credits` +7. Порядок: l1–l5, **l7, l8**, l6 (фінал). l1–l5 не змінено (dgw8 cur w8s2l3, dgw9 pre w8s2l1 — не зачеплено).
- **w8s2l7 «Дзеркало з Брюгге»** (8.1.11; draft, 10 екранів): е1 intro (Арнольфіні), е2 hyp, е3 info (Північне Відродження, ван Ейк, Гентський вівтар, олійні фарби + `note` про міф Вазарі), е4 choice src (напис «Johannes de eyck fuit hic 1434» — опора: сам екран), е5 info (Босх, «Сад земних насолод»; Брейгель, «Мисливці на снігу», «Нідерландські прислів'я»), е6 choice — **впізнавання** «Мисливців на снігу» (опора е5: селяни, пори року, 1565; `cap` автора не називає), е7 info (Дюрер, Венеція 1505–1507, Тиціан — придворний художник Карла V, гравюри, «Автопортрет» 1500), е8 choice src «Носоріг» (опора — body екрана), е9 multi Темп'єтто Браманте (опора — фото + античні храми 6 кл./l1; готика — 7 кл.), е10 sort «Чий це твір?» (е3, е5, е7, е8).
- **w8s2l8 «Світло, тінь і телескоп»** (8.1.19, 8.1.20; draft, 10 екранів): е1 intro «Меніни», е2 hyp (відповідь — е3: «невідомо, можливо, король і королева»), е3 info (бароко, Рим, Тридентський собор, ознаки; Веласкес, Рубенс, Рембрандт; `note` про походження слова), е4 multi «Нічна варта» (ознаки з е3, видно на фото), е5 choice crit (е3 + l3/l4: кальвіністи без прикрас, Контрреформація), е6 info (Птолемей, Коперник 1543 Нюрнберг, Кеплер — еліпси), е7 choice src — гравюри Місяця Галілея (видно на фото), е8 info (суд 1633, домашній арешт, Ньютон 1687, закон всесвітнього тяжіння, «наукова революція»; `note` — легенда «І все-таки вона крутиться»), е9 order (1543/1610/1633/1687 — е6–е8), е10 sort фінал.
- **w8s2l6 (фінал) → draft:** нове «Питання 6» sort «Зал живопису» (Північне Відродження / бароко — l7 + l8, `pre: "w8s2l7"`); хронологія → «Питання 7», +«Коперник видає книжку…» (1543, з l8); `pre` w8s2l1–l5 у питаннях 1–5; +`learned` «Розрізняти митців Північного Відродження і бароко»; евфонія (е2, е5, е6: «та»/«й»). 7 завдань при 7 темах (D-047/D-048 п. 1).

**Перевірки:** validate --section w8s2 — 0 помилок, 0 попереджень; euphony — 0 у l6–l8; stats: l7, l8 без прапорців; **l6 — typeVariety z=2.5** (4 типи: choice, multi, sort, order): sort свідомо — одне завдання на два суміжні уроки (6 митців у 2 кошики) перевіряє обидва краще за choice. fig-audit — 0.

**Зображення (усі — сторінки Commons відкрито, мініатюри thumb.wikimedia.org):**
| Урок | Файл | Ліцензія | URL |
|---|---|---|---|
| l7 е1 | arnolfini-portrait.jpg | PD-Art (PD-old-100), NG186 | https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg |
| l7 е6 | hunters-in-the-snow.jpg | PD-Art, KHM GG 1838 | https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_(Winter)_-_Google_Art_Project.jpg |
| l7 е8 | durer-rhinoceros.jpg | PD-Art (відбиток 1-го видання з текстом; у тексті гравюри «1513» — помилка Дюрера, у `cap` не використано) | https://commons.wikimedia.org/wiki/File:D%C3%BCrer%27s_Rhinoceros,_1515.jpg |
| l7 е9 | tempietto-bramante.jpg | CC BY 4.0, Labicanense, 2.12.2023 (будівля — PD) | https://commons.wikimedia.org/wiki/File:Tempietto_di_San_Pietro_in_Montorio.jpg |
| l8 е1 | las-meninas.jpg | PD-Art, Прадо P001174 | https://commons.wikimedia.org/wiki/File:Las_Meninas,_by_Diego_Vel%C3%A1zquez,_from_Prado_in_Google_Earth.jpg |
| l8 е4 | night-watch.jpg | PD-Art, Рейксмузеум SK-C-5 (сам музей — PD Mark 1.0) | https://commons.wikimedia.org/wiki/File:La_ronda_de_noche,_por_Rembrandt_van_Rijn.jpg |
| l8 е7 | galileo-moon-1610.jpg | PD-Art; джерело — Museo Galileo (moro.imss.fi.it); гравюри «Sidereus Nuncius» 1610 (дата Commons 1610 = видання) | https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon.png |
Відкинуто: `Galileo_moon_phases.jpg` — «Unknown source», дата «1616» хибна.

**Факти й джерела:**
1. «Портрет подружжя Арнольфіні» 1434, напис «Johannes de eyck fuit hic 1434», дзеркало — двоє біля дверей, особи «імовірно» Джованні ді Ніколао Арнольфіні (спірно), Брюгге — https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait ; https://en.wikipedia.org/wiki/Arnolfini_Portrait
2. Ван Ейк † 9.07.1441, придворний художник Філіпа Доброго (Бургундія), у Брюгге з бл. 1429; Гентський вівтар завершено 1432; олійні фарби не винайшов (міф Вазарі) — https://en.wikipedia.org/wiki/Jan_van_Eyck ; NG (вище: техніка олії)
3. Босх бл. 1450–1516, Гертогенбос, чудовиська, гріх і покарання; «Сад земних насолод» — Прадо — https://en.wikipedia.org/wiki/Hieronymus_Bosch ; (Прадо — 403; друге джерело для «Саду» — Commons/en.wiki; **верифікатору звірити з Прадо**)
4. Брейгель Старший † 1569; селяни, краєвиди; «Мисливці на снігу» 1565, серія пір року для антверпенського купця Ніколаса Йонгелінка, KHM GG 1838; «Нідерландські прислів'я» 1559 (Берлін) — https://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder ; https://www.bruegel2018.at/en/the-hunters-in-the-snow/ ; https://canon.codart.nl/artwork/hunters-in-the-snow/
5. Дюрер 21.05.1471–6.04.1528, Нюрнберг; Венеція 1505–1507; гравюри на дереві й міді; «Автопортрет» 1500 (Альте Пінакотек) — https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer ; https://www.britannica.com/biography/Albrecht-Durer-German-artist/Second-journey-to-Italy (сніпет пошуку; сайт — 403) ; https://www.newadvent.org/cathen/05209c.htm
6. Носоріг: Лісабон 20.05.1515, з Індії (Гуджарат), подарунок Мануелу I; Дюрер не бачив — лист і начерк; образ панував до кін. XVIII ст. — https://en.wikipedia.org/wiki/D%C3%BCrer%27s_Rhinoceros ; https://www.nhm.ac.uk/discover/the-legacy-of-durers-rhinoceros.html
7. Тиціан † 27.08.1576, Венеція; придворний художник Карла V з 1533 — https://en.wikipedia.org/wiki/Titian ; https://www.worldhistory.org/Titian/ ; https://www.nationalgallery.org.uk/artists/titian (рік народження спірний — не подано)
8. Браманте 1444–1514; Темп'єтто бл. 1502 на місці розп'яття Петра (за переказом); собор Св. Петра: проєкт Браманте, наріжний камінь 1506 (facts/world №48: 1506–1626) — https://en.wikipedia.org/wiki/Donato_Bramante ; https://en.wikipedia.org/wiki/San_Pietro_in_Montorio ; https://ohiostate.pressbooks.pub/exploringarchitectureandlandscape/chapter/tempietto/
9. Бароко: поч. XVII — бл. 1750-х, Рим, підтримка церкви після Тридентського собору; рух, контраст, пишність; етимологія barroco — непевна — https://en.wikipedia.org/wiki/Baroque ; https://human.libretexts.org/Courses/University_of_the_Pacific/Art_History_-_Renaissance_through_Post_Modern/08%3A_The_Baroque_Period_in_Italy_and_Spain
10. «Меніни» 1656, Прадо; інфанта Маргарита (5 р.), Веласкес за полотном, у дзеркалі Філіп IV і Маріанна; що пише — спірно; Веласкес 1599–1660, придворний художник Філіпа IV — https://en.wikipedia.org/wiki/Las_Meninas ; https://colourlex.com/project/velazquez-las-meninas
11. Рубенс 1577–1640, Антверпен — https://www.mauritshuis.nl/en/our-collection/our-masters/peter-paul-rubens ; https://www.newworldencyclopedia.org/entry/Peter_Paul_Rubens . Рембрандт 1606–1669, Амстердам; «Нічна варта» 1642, загін Франса Баннінга Кока, контраст світла, рух — https://www.rijksmuseum.nl/en/collection/SK-C-5 ; https://en.wikipedia.org/wiki/The_Night_Watch
12. Коперник 1473–1543, «De revolutionibus», 1543, Нюрнберг (Петрей); Птолемей — геоцентризм — https://en.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium ; https://www.sites.hps.cam.ac.uk/starry/coperbooks.html
13. Кеплер — еліптичні орбіти («Astronomia nova», 1609; рік у тексті не подано) — https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion ; https://ebsco.com/research-starters/astronomy-and-astrophysics/theory-universal-gravitation
14. Галілей 1564–1642; телескоп 1609; «Зоряний вісник» 13.03.1610 Венеція — Місяць нерівний, гори; суд інквізиції 1633, «сильно підозрюваний у єресі», зречення, домашній арешт до смерті; «Eppur si muove» — легенда — https://en.wikipedia.org/wiki/Sidereus_Nuncius ; https://www.sites.hps.cam.ac.uk/starry/galsidnun.html ; https://exhibitions.lib.cam.ac.uk/linesofthought/?p=160 ; https://en.wikipedia.org/wiki/Galileo_affair
15. Ньютон, «Математичні начала натуральної філософії», 1687 — закон всесвітнього тяжіння — https://library.wadham.ox.ac.uk/exhibition/newton.html ; https://ebsco.com/research-starters/literature-and-writing/principia-isaac-newton

**Сумнівне / верифікатору:** (а) №3 — сторінка Прадо 403; (б) №5 — Britannica лише сніпетом; (в) «Понад тисячу років … Птолемей (II ст.)» — узагальнення; (г) l8 outro: «бароко прийшло й на українські землі — розкажуть уроки історії України» (hist plan.js — «Козацьке бароко»), без дат; (д) l7 е9 multi спирається на знання про колони античних храмів (hist 6 кл.) — можна додати рядок «Пригадай» у body, якщо мало.
**Пропозиції до глосарію (inbox):** ван Ейк, Босх, Гертогенбос, Брейгель Старший, Дюрер, Тиціан, Браманте, Темп'єтто, Веласкес, «Меніни», Рубенс, Рембрандт, «Нічна варта», Коперник, Кеплер, Галілей, «Зоряний вісник», Ньютон, «Математичні начала натуральної філософії»; терміни: Північне Відродження, гравюра, бароко, інквізиція, закон всесвітнього тяжіння, наукова революція.
**Оркестратору:** нові файли img/world/w8s2 (7) — build після пакета; validate/stats/fig-audit/euphony перезаписали спільні reports/.
