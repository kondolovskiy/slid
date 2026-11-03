---
claimed_from: todo
claimed_at: 2026-11-03T10:34:01.727Z
id: write-world-w7s3
type: write-section
subject: world
grade: 7
section: w7s3
weeks: [15, 21]
status: done
claimed_by: writer-write-world-w7s3
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Зріле Середньовіччя: люди, міста, віра» (Всесвітня історія, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб уявляти, як жили селяни, лицарі, ченці й міщани і чому виникли університети та готичні собори.

## Теми уроків (з плану)
1. Три стани: ті, хто молиться, воює і працює
2. Лицарі й феоди
3. Середньовічне місто: цехи й ратуша
4. Собори й університети
5. Хрестові походи
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
- Файл `content/world/g7-w7s3.js` з `SLID.section("world", { id: "w7s3", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w7s3/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/build.mjs && node tools/validate.mjs --section w7s3` — 0 помилок
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
writer-write-world-w7s3, 2026-11-03. Файл `content/world/g7-w7s3.js`, 6 уроків (5 тем + фінал), усі `draft`. `validate --section w7s3` — 0 помилок, 0 попереджень; `stats --subject world` — уроки w7s3 без прапорців. Build не запускав (оркестратор). Значок boss — `highmed` «Мандрівник Зрілого Середньовіччя».

### Уроки
- w7s3l1 «Молитва, меч і плуг» (9 екр.) — три стани (Адальберон), Зріле Середньовіччя, залежні селяни, панщина, десятина, **Клюнійський рух** (пропозиція верифікатора w7s1 — увійшов сюди, 5 жирних термінів).
- w7s3l2 «Присяга на вірність» (9) — герб (з мініатюри), феод, сеньйор, васал, лист Фульберта 1020 р., феодальна драбина, «васал мого васала», паж — зброєносець — лицар.
- w7s3l3 «Міське повітря» (10) — фреска Лоренцетті, виникнення міст, міщани, самоврядування, ратуша, «рік і один день», цех, учень — підмайстер — майстер, шедевр; `link`: магдебурзьке право, Львів 1356 р.
- w7s3l4 «Світло в камені» (9) — романський / готичний стиль, вітражі, Нотр-Дам (1163), університети, факультети, мініатюра Волтоліни, Болонья 1088 — Прага 1348.
- w7s3l5 «Похід під знаком хреста» (10) — Крак-де-Шевальє, Клермон 1095 (Урбан II — колишній чернець Клюні), 1099, ордени, `link`: Любеч 1097 + ігумен Данило 1106–1108, Усама ібн Мункиз (погляд мусульманина), 1187, 1204, 1291.
- w7s3l6 «Від села до Святої землі» (boss, 7) — по завданню на тему + стрічка часу; `link` у завд. 5.

### Факти й джерела (усі — нові для facts/world.md; статус self)
1. Адальберон Ланський, вірш королю Роберту II: oratores / bellatores / laboratores; дата спірна (1023–1030; у тексті «близько 1025 р.» + note); Адальберон помер бл. 1030 р. — https://en.wikipedia.org/wiki/Adalberon_(bishop_of_Laon) ; https://www.herodote.net/Adalberon_de_Laon_et_l_ordre_feodal-article-2811.php ; https://studyguides.com/study-methods/overview/cmowovsr7prd401nek9wrhepr (взаємозалежність станів). **Цитату подано лише як переказ першого рядка; друге речення (l1 #4) — авторський переказ змісту, без лапок** — точного перекладу не знайдено.
2. Зріле Середньовіччя — сер. XI — сер. XIV ст. — glossary/world.md.
3. Панщина «кілька днів на тиждень», десятина — 1/10 — загальні підручникові формулювання (без чисел); перевірити верифікатору (Britannica «manorialism»/«tithe» — 403 у середовищі).
4. Клюні: 910 р., Вільгельм I Аквітанський, підпорядкування лише папі; у XII ст. — понад тисячу монастирів; мета — незалежність від світських панів, суворе дотримання статуту — https://en.wikipedia.org/wiki/Cluny_Abbey ; https://en.wikipedia.org/wiki/Cluniac_Reforms ; https://www.catholic.com/encyclopedia/congregation-of-cluny (WebSearch).
5. Урбан II — чернець і пріор Клюні — https://en.wikipedia.org/wiki/Pope_Urban_II ; https://www.encyclopedia.com/people/philosophy-and-religion/roman-catholic-popes-and-antipopes/urban-ii ; Britannica (WebSearch, c. 1070–74).
6. Фульберт Шартрський, лист 1020 р. герцогові Аквітанії: шість обов'язків васала, «порадою й допомогою», «сеньйор має чинити так само» — https://sourcebooks.web.fordham.edu/source/fulbert1.asp ; https://digfir-published.macmillanusa.com/hunt4e/hunt4e_ch09_7.html ; https://history.hanover.edu/courses/excerpts/211feud.html . Переказ скорочено.
7. Паж (бл. 7–10 років) — зброєносець (з 14) — посвята 18–21 — https://www.worldhistory.org/article/1240/how-to-become-a-medieval-knight/ ; https://kids.britannica.com/students/article/knighthood/275302 (21 рік). У тексті: «років у сім», «років із чотирнадцяти», «років у 18–21».
8. «Васал мого васала — не мій васал» (Франція) — загальновідоме правило; у реєстрі ще немає — верифікатору звірити.
9. Рік і один день у місті → свобода (звичай, не всюди дотримувався) — https://en.wikipedia.org/wiki/Stadtluft_macht_frei ; https://legalhistorymiscellany.com/2019/08/15/how-to-tell-a-serf-from-a-slave-in-medieval-england/ . Приказка «Міське повітря робить вільним» — за одним джерелом (Burgdorf Handfeste, Schwinges) — формулювання XIX ст.; у тексті лише «згодом це описали приказкою».
10. Цехи: статут — якість, ціни, кількість учнів; учень → підмайстер → майстер; шедевр — https://en.wikipedia.org/wiki/Master_craftsman ; https://www.newworldencyclopedia.org/entry/Guild ; https://www.oneonta.edu/faculty/farberas/arth/ARTH200/artist/masterpiece.html .
11. Магдебурзьке право Львову 1356 р., Казимир III; Київ — пізніше — facts/hist №27 (формулювання звідти; розбіжність з EoU — у note).
12. Лоренцетті, «Наслідки доброго врядування в місті», лютий 1338 — травень 1339, Палаццо Пуббліко (Sala dei Nove), замовники — Рада дев'яти — https://en.wikipedia.org/wiki/The_Allegory_of_Good_and_Bad_Government ; https://smarthistory.org/?p=4509 .
13. Романський (XI–XII ст.; товсті стіни, вузькі вікна, напівкруглі арки) / готичний (з сер. XII ст., Сен-Дені 1130–1140-ві; стрілчасті арки, аркбутани, вітражі) — https://en.wikipedia.org/wiki/Notre-Dame_de_Paris ; https://www.oneonta.edu/faculty/farberas/arth/arth109/arth109_sl21.html .
14. Нотр-Дам: початок 1163 р. (Моріс де Сюллі), в основному завершено бл. 1260 р. («майже сто років»); пожежа 2019 р. — https://en.wikipedia.org/wiki/Notre-Dame_de_Paris ; https://www.newworldencyclopedia.org/entry/Notre-Dame_de_Paris .
15. Болонья — традиційно 1088 р. (навчання засвідчене з кінця XI ст.); Париж — бл. 1200 р. (привілей Філіпа II 1200, статути 1215); Прага 1348 — перший у Центральній Європі; Краків 1364; факультети: мистецтва → богослов'я, право, медицина; латина — https://en.wikipedia.org/wiki/List_of_oldest_universities_in_continuous_operation ; https://www.acsu.buffalo.edu/~duchan/new_history/middle_ages/medieval_universities.html ; https://en.wikipedia.org/wiki/Faculty_(division) ; https://www.ccfs-sorbonne.fr/en/?p=107325 .
16. Мініатюра Лаврентія з Волтоліни, лекція Генріха Німецького в Болоньї, 2-га пол. XIV ст., Kupferstichkabinett Berlin, Min. 1233; студенти, що розмовляють і спить — https://commons.wikimedia.org/wiki/File:Laurentius_de_Voltolina_001.jpg ; https://historyofinformation.com/image.php?id=53 ; https://digfir-published.macmillanusa.com/strayer3e/asset/img_ch10/99917_STR3E_CH10_10UN05.html .
17. Хрестові походи: Клермон 27.11.1095; Єрусалим 15.07.1099; Хаттін і Єрусалим 1187 (Салах ад-Дін); Константинополь 12.04.1204; Акра 18.05.1291; тамплієри бл. 1119 — https://worldhistory.org/timeline/Crusades ; https://www.history.com/articles/crusades ; https://en.wikipedia.org/wiki/Fourth_Crusade . Прохання Візантії про допомогу (Олексій I, 1095) — загальновідоме, верифікатору звірити.
18. Крак-де-Шевальє: госпітальєри 1142–1271; взяв Бейбарс (мамлюцький султан) 1271; два пояси мурів — https://en.wikipedia.org/wiki/Krak_des_Chevaliers ; https://whc.unesco.org/en/list/1229 .
19. Ігумен Данило: Палестина 1106–1108, прийняв Балдуїн I, «Ходіння» бл. 1113 — https://www.encyclopediaofukraine.com/pages%5CD%5CA%5CDanyloHegumen.htm ; https://en.wikipedia.org/wiki/Daniel_the_Traveller . Лампаду «від усієї Руської землі» НЕ брав — не підтвердилося в 2 джерелах.
20. Усама ібн Мункиз: тамплієри-«друзі» дали місце для молитви; франк-новачок повернув його на схід; тамплієри перепросили — «щойно прибув»; «франки, що довго жили серед мусульман, кращі за новоприбулих» — https://christianhistoryinstitute.org/magazine/article/puzzling-encounters ; https://sourcebooks.web.fordham.edu/source/Usamah2.asp ; https://sandiegoreader.com/news/2015/jul/15/excerpts-when-i-used-enter-asqa-mosque/ . Переказ скорочено; «мала молільня» → «дозволяли мені молитися».
21. Любеч 1097 — facts/hist №84 (без «скликав»; цитату «Кожен хай держить отчину свою» з l5 прибрано для стислості).

### Зображення (img/world/w7s3/, усі ≤ 230 КБ; мініатюри thumb.wikimedia.org, API Commons віддавав 429)
| Урок | Файл | Ліцензія | Джерело |
|---|---|---|---|
| l1 | three-orders.jpg | PD (PD-Art) | https://commons.wikimedia.org/wiki/File:Cleric-Knight-Workman.jpg (BL Sloane 2435, f. 85) |
| l2 | manesse-tournament.jpg (обрізано до мініатюри) | PD | https://commons.wikimedia.org/wiki/File:Codex_Manesse_052r_Walther_von_Klingen.jpg |
| l3 | siena-good-government.jpg | PD (Google Art Project) | https://commons.wikimedia.org/wiki/File:Ambrogio_Lorenzetti_-_Effects_of_Good_Government_in_the_city_-_Google_Art_Project.jpg |
| l4 | notre-dame.jpg | CC BY-SA 3.0, Peter Haas | https://commons.wikimedia.org/wiki/File:Notre-Dame_de_Paris_2013-07-24.jpg |
| l4 | bologna-lecture.jpg | PD (Yorck Project) | https://commons.wikimedia.org/wiki/File:Laurentius_de_Voltolina_001.jpg |
| l5 | krak-des-chevaliers.jpg | CC BY-SA 4.0, Gianfranco Gazzetti / GAR | https://commons.wikimedia.org/wiki/File:KRAK_DES_CHEVALIERS_-_GAR_-_6-00.jpg |
| l6 | tres-riches-heures-march.jpg (нижні ~70 %, без календарної дуги) | PD | https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg |

### Опори (D-019), де неочевидно
- l1 #2 sort — з фото + підказка в body (виголена маківка); інші два — елімінацією.
- l1 #4 — з body екрана (переказ змісту вірша); дистрактор «легко стане лицарем» — #3 (стан за народженням).
- l2 #2 — з мініатюри (обличчя закриті, імен немає, знаки на щитах і попонах); термін «герб» лише в fbText, не оцінюється.
- l5 #4 — успадкування феоду старшим сином подано в body цього екрана.
- l5 #6 multi — міркування з фото (подвійні мури, гора).
- l5 #8 Усама — з body (новачок vs тамплієри).
- l6 #5 — Любеч 1097 (l5 #7 і hist g7s3), Данило (l5 #7), 1204 — Константинополь (l5 #9).
- l6 #6 — роки 910 (l1), 1095 (l5), 1163 (l4 intro cap), 1204 (l5), 1356 (l3); у hint.

### Сумнівне / для верифікатора
- 1163 р. (boss #6) подано і в `cap`, і в body l4 intro.
- l5 #3: «Візантія… просила допомоги в Заходу» — без імені Олексія I.
- l6 #1: «три дні на тиждень» — сюжетна деталь (у l1 — «кілька днів»).
- Атрибуція «Березня» в «Розкішному часослові» спірна (Лімбурги чи Бартелемі д'Ейк) — у cap лише «XV ст.».
