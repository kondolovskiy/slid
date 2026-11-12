# Верифікація revise-world-w9s4 (w9s4l7, w9s4l8, фінал w9s4l6, weeks)

Верифікатор: verifier-revise-w9s4, 2026-11-12. Автор задачі — w-revise-world-w9s4 (не я). Незмінені l1–l5 не переперевіряв (diff 83ddcb5..8575ec5: змінено лише шапку, `weeks`, l6 і додано l7, l8).
Скіли: content-verify, hist-images. Усі джерела нижче відкрито в цій сесії (WebFetch / WebSearch / LOC JSON API через curl).

## 1. Факти

| Твердження (урок, екран) | Джерела (відкриті) | Вердикт |
|---|---|---|
| l7 е1: 1800 р. США сягали Міссісіпі | https://www.archives.gov/milestone-documents/treaty-of-paris (ст. 2 — кордон по Міссісіпі); https://www.archives.gov/milestone-documents/louisiana-purchase-treaty (Луїзіана — на захід від Міссісіпі) | ✅ |
| l7 е1: до 1850 р. — Тихого океану | https://history.state.gov/milestones/1830-1860/oregon-territory (1846, кордон до Тихого океану); https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo (1848, Каліфорнія, 55 % Мексики) | ✅ |
| l7 е2: 1803 — Луїзіана у Франції, США вдвічі збільшилися | archives.gov louisiana-purchase-treaty («roughly doubled»); https://history.state.gov/milestones/1801-1829/louisiana-purchase (1803, Франція) | ✅ |
| l7 е2–е3: 2.12.1823, послання Конгресу, Монро; не колонізація + невтручання в Європу; страх повернення колоній; цитата | https://history.state.gov/milestones/1801-1829/monroe ; https://www.archives.gov/milestone-documents/monroe-doctrine (дата, обидва принципи, цитата «not to be considered as subjects for future colonization by any European powers», захист нових республік) | ✅ |
| l7 е4: закон про переселення 1830 р., за Міссісіпі; «Шлях сліз» 1838–1839, загинули тисячі черокі | https://www.nps.gov/trte/learn/historyculture/index.htm (1830; травень 1838 — березень 1839; > 1000 у дорозі + «perhaps several thousand»); https://history.state.gov/milestones/1830-1860/indian-treaties (3–4 тис. з 15–16 тис.) | ✅ |
| l7 е4: бізони — з десятків мільйонів до 1900 р. менше тисячі | https://www.nps.gov/gosp/learn/nature/where-the-buffalo-roamed.htm (30–60 млн; «fewer than 1,000» до 1900); WebSearch: Fermilab-експозиція «fewer than 1,000», WCS — «fewer than 1,200» | ✅ (оцінки 1000–1200; формулювання NPS) |
| l7 е4: резервації — відведені ділянки, частина — для насильно переселених | https://www.bia.gov/faqs/what-federal-indian-reservation | ✅ (термін; означення) |
| l7 е6: «Хатина дядька Тома» 1852, 300 тис. за рік | WebSearch (кілька джерел, у т. ч. blackpast.org, macmillanusa: «300,000 copies the first year» у США); сторінки blackpast/umich — 403/DNS | ✅ (число широко повторюване; сторінки відкрито лише як сніпети — див. примітку) |
| l7 е6: 1862, Лінкольн, 160 акрів (≈ 65 га), 10 дол., 5 років | https://www.archives.gov/milestone-documents/homestead-act (20.05.1862, 160 акрів, $10, 5 років); https://www.archives.gov/publications/prologue/2012/winter/homestead.pdf («filing fee of 10 dollars», 160 акрів, 5 років); https://www.history.com/this-day-in-history/may-20/lincoln-signs-homestead-act (Лінкольн, 160 акрів, 5 років) | ✅ |
| l7 е7: 1891, Пилипів і Єлиняк, Канада, гомстеди | facts/hist.md №150 (verified) | ✅ |
| l7 е8: Реконструкція 1865–1877; кінець 1877 | https://www.history.com/topics/american-civil-war/reconstruction ; https://en.wikipedia.org/wiki/Reconstruction_era (через автора) + history.com | ✅ |
| l7 е8: 14-та поправка 1868 | https://www.senate.gov/about/origins-foundations/senate-and-constitution/14th-amendment.htm (9.07.1868, «born or naturalized»); history.com (громадянство колишнім рабам) | ⚠️ → виправлено: «зробила громадянами всіх, хто народився в США» — неточно (поправка не охоплювала, напр., індіанців «not taxed»; урок щойно говорив про індіанців) → «зробила колишніх рабів громадянами США» |
| l7 е8: 15-та поправка 1870, раса | https://www.archives.gov/milestone-documents/15th-amendment (3.02.1870, «race, color, or previous condition of servitude»; тести грамотності й «дідусеві застереження» 1890-х); history.com (1870) | ✅ |
| l7 е8: ку-клукс-клан залякував чорношкірих виборців | history.com Reconstruction | ✅ (без дат) |
| l7 е8: чорношкірі «вперше голосували й обиралися до Конгресу» | history.com Reconstruction («Southern Black people won election… to Congress») | ⚠️ → виправлено «На Півдні чорношкірі чоловіки вперше…» (у частині північних штатів чорношкірі голосували й раніше) |
| l7 е9: Ревелс — перший чорношкірий сенатор (1870, Міссісіпі); на літографії ліворуч + 6 членів Палати | https://history.house.gov/People/Listing/R/REVELS,-Hiram-Rhodes-(R000166)/ (25.02.1870, Міссісіпі); LOC JSON https://www.loc.gov/item/98501907/ (Revels, De Large, Long, Turner, Walls, Rainey, Elliott — 7 осіб); перевірено на самому зображенні (підпис «U.S. Senator H.R. Revels» під лівою фігурою) | ✅ |
| l8 е1: Бахадур Шах II, травень 1858, 82 роки, останній Великий Могол, вислано до Бірми | https://searcharchives.bl.uk/catalog/040-003107314 (травень 1858, Tytler and Shepherd, Photo 797(37)); https://en.wikipedia.org/wiki/Bahadur_Shah_Zafar (нар. 24.10.1775 → 82; виїхав до Рангуна 7.10.1858; останній); https://victorianweb.org/history/empire/1857/nam5.html (заслання до Бірми, 1775–1862) | ✅ |
| l8 е2: Плессі 23.06.1757, компанія проти правителя Бенгалії → панування в Індії | https://www.nam.ac.uk/explore/battle-plassey ; https://en.wikipedia.org/wiki/Battle_of_Plassey | ✅ |
| l8 е2: падишах «лише для годиться» | en.wiki Bahadur_Shah_Zafar («titular emperor», влада лише в Делі); https://victorianweb.org/victorian/history/empire/1857/mughal.html (powerlessness, справжня влада — компанія) | ✅ |
| l8 е2: армія компанії — переважно сипаї | nam.ac.uk Plassey (2100 сипаїв з ≈ 3000); en.wiki Indian Rebellion (sepoys — індійські вояки армії компанії) | ✅ |
| l8 е4: патрони з яловичим і свинячим жиром; Мірут 10.05.1857; Делі, Бахадур Шаха проголосили; князі й селяни (землі); жорстокість обох сторін | https://www.encyclopedia.com/history/asia-and-africa/south-asian-history/indian-mutiny ; https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857 | ✅ |
| l8 е4: «1858 р. британці здебільшого придушили повстання» | en.wiki (Гваліор 20.06.1858 — «contained»; формально — 8.07.1859); encyclopedia.com (контроль відновлено за кілька місяців, залишки опору — до 1859) | ✅ формулювання точне |
| l8 е4: 1858 — влада від компанії до уряду королеви | encyclopedia.com (1858 Crown took direct control); en.wiki (Government of India Act 1858) | ✅ |
| l8 е7: копати почали 25.04.1859; Лессепс; відкрито 17.11.1869; 164 км | https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx ; https://heritage.bnf.fr/bibliothequesorient/en/suez-canal (25.04.1859, 17.11.1869); history.com suez-canal-opens (Лессепс, 1854) | ✅ |
| l8 е7: спершу вручну копали тисячі єгиптян, зігнаних примусово | https://www.history.com/this-day-in-history/november-17/suez-canal-opens («forced laborers», кирки й лопати); https://en.wikipedia.org/wiki/Suez_Canal (corvée до 1864); suezcanal.gov.eg (≈ 20 тис. єгиптян «in the harshest conditions») | ✅ («селян» — панщина-corvée лягала на селян; явно слова fellahin у відкритих джерелах немає — не критично) |
| l8 е7: шлях скоротився ≈ на 40 % | https://transportgeography.org/contents/chapter1/emergence-of-mechanized-transportation-systems/suez-panama-canal-geography-impacts/ (Роттердам — Мумбаї −41 %); https://heritage.bnf.fr/bibliothequesorient/en/suez-canal (Лондон — Бомбей 10 721 → 6 260 морських миль = −41,6 %) | ✅ — друге джерело знайдено, «≈ 40 %» лишається |
| l8 е7: 1875 Британія купила частку Єгипту (44 %); 1882 окупувала Єгипет | suezcanal.gov.eg (Дізраелі, 176 602 акції, 44 %; 1882); en.wiki Suez Canal (1875, 44 %; 1882 invasion); history.com | ✅ |
| l8 е9: ІНК 28.12.1885, Бомбей, 72 делегати, переважно юристи; спершу — участь освічених індійців, не незалежність | https://en.wikipedia.org/wiki/Indian_National_Congress ; https://www.gktoday.in/bombay-congress-session-of-1885/ (28–31.12.1885, 72, право/журналістика; вимоги реформ); https://inc.in/congress-sandesh/archives/synopsis-of-plenary-sessions-from-1885-to-2018 (Бомбей, 1885) | ✅ |
| l8 е9: 1905 поділ Бенгалії; свадеші — бойкот британських товарів, «своєї країни» | https://ebooks.inflibnet.ac.in/icp01/chapter/ndian-national-movement-1905-1911-vandemataram-and-swadeshi-movements (16.10.1905, Керзон, бойкот); https://en.wikipedia.org/wiki/Swadeshi_movement (swa + desh, бойкот) | ✅ |
| l6 П7: 1804, 1842, 1857, 1861, 1869, 1885 | l1 е4, l3, l8, l2 е9 (verified) + джерела вище | ✅ |

### Зображення (ліцензія — країна походження і США)
| Файл | Атрибуція в `cap`/`credits` | Джерела | Вердикт |
|---|---|---|---|
| american-progress-gast-crofutt.jpg (960×715) | хромолітографія Крофатта бл. 1873 р. за картиною Гаста 1872 р., LOC ppmsca.09855 | LOC JSON https://www.loc.gov/item/97507547/ («chromolithograph», «c1873», «Copyright by George A. Crofutt», «After 1872 painting… by John Gast», digital id ppmsca-09855, «No known restrictions»); https://commons.wikimedia.org/wiki/File:American_Progress_(John_Gast_painting).jpg (джерело — LOC ppmsca.09855; Commons хибно — «oil on canvas»); https://en.wikipedia.org/wiki/American_Progress (Крофатт замовив, широко поширювали хромолітографіями; опис лівої частини — індіанці й бізони тікають) | ✅ США: опубл. 1873 → PD; Гаст † 1896 |
| first-colored-senator-1872.jpg | «Карр'єр і Айвз», 1872, LCCN 98501907 | LOC JSON https://www.loc.gov/item/98501907/ (Currier & Ives, 1872, lithograph, «No known restrictions»); Commons-сторінка файлу (PD-US, до 1931) | ✅ США |
| bahadur-shah-1858.jpg (420×324) | Тайтлер і Шеперд, травень 1858, BL Photo 797(37) | https://searcharchives.bl.uk/catalog/040-003107314 ; https://commons.wikimedia.org/wiki/File:Bahadur_Shah_Zafar.jpg ; victorianweb nam5 (NAM датує c.1859 і приписує Тайтлерові — в уроці дата BL, обидва автори) | ✅ Індія/Британія: автори † до 1956 (Тайтлер 1872); США — опубл. понад 150 р. тому |
| suez-inauguration-riou-1869.jpg | Ріу, олія, 1896, Комп'єн | https://www.histoire-image.org/etudes/inauguration-canal-suez (1896, huile sur toile, Compiègne, C.30.D2); https://napoleon.org/en/history-of-the-two-empires/paintings/inauguration-ceremony-of-the-suez-canal-at-port-said-17-november-1869 (1896, oil on canvas, Compiègne); Commons хибно — «1869, Album de l'Impératrice» | ✅ Франція: Ріу † 1900; PD-Art; США — 2D-репродукція PD |
| inc-first-session-1885.jpg | фото 1885 р., невідомий автор | https://commons.wikimedia.org/wiki/File:First_meeting_session_of_the_Indian_National_Congress_in_Bombay,_1885.jpg (PD Mark, PD-US, автор невідомий; опис Commons називає Гокхале — автор слушно не дав імен у `cap`) | ✅ Індія: фото — 60 р. від публікації; США: PD в Індії на 1996 р. → URAA не відновлює |

Картина Ріу 1896 р. — пізніша за подію: у `cap` це сказано («Олія, 1896 р.»), завдання е8 питає не про деталі церемонії, а про причину (з е7). Згідно з napoleon.org трибуни — для релігійної церемонії 16.11; `cap` каже «листопад 1869 р.» — коректно.

## 2. Завдання: розв'язано самостійно і опора (D-019)

| Завдання | Моя відповідь = `correct` | Звідки відповідь | Вердикт |
|---|---|---|---|
| l7 е3 choice src «Кого попереджав Монро?» | 2 = 2 | цитата на екрані + е2 | ✅ |
| l7 е5 choice src (картина) | 0 = 0 | саме зображення (лівий край) + body «праворуч — схід, ліворуч — захід» | ✅ |
| l7 е7 number link | 29 = 29 | 1891 — body; 1862 — е6 | ✅ |
| l7 е9 choice crit (літографія) | 1 = 1 | l2 е1 (≈ 4 млн поневолених), l2 е4 (Пд. Кароліна вийшла 1860) + е8 | ✅ |
| l7 е10 order | 1823-1830-1852-1862-1870-1877 = порядок items | е2, е4, е6, е8 | ✅ |
| l8 е3 hyp | — | здогадка, відповідь на е4 | ✅ |
| l8 е5 choice crit | 1 = 1 | е4 абз. 2 | ✅ |
| l8 е6 multi | [0,1] = [0,1] | е4 абз. 3; е1 (вишлють до Бірми); е4 (придушили) | ✅ |
| l8 е8 choice crit (Ріу) | 1 = 1 | е7 абз. 2 (не огинати Африку, шлях до Індії), абз. 1 (копали єгиптяни) | ✅ |
| l8 е9 multi | [0,2] = [0,2] | body самого екрана | ✅ |
| l8 е10 order | 1757-1857-1858-1869-1885-1905 | е2, е4, е7, е9 | ✅ |
| l6 П6 multi | [0,1] = [0,1] | l7 е6 (гомстед), е4 (фронтир), е8 (Реконструкція 1865–1877), е2 (Монро) | ✅ |
| l6 П7 order | 1804-1842-1857-1861-1869-1885 | l1 е4, l3, l8 е4, l2 (Маніфест 19 лютого 1861), l8 е7, l8 е9 | ✅ |
| l6 П1–П5 | без змін змісту (лише й/та/і) | verified раніше | ✅ |

`cap` на оцінюваних екранах (l7 е5, е9; l8 е8, е9) не видає правильного варіанта — звірено з `opts`.
Частка оцінюваних: l7 5/10, l8 5/10 (+ hyp); типи ≥ 2; `hint` є; `learned` 4 і 3 пункти; фінал 7 завдань при 8 уроках (D-048 п. 1). `pre` у кожному завданні фіналу — validate без зауважень.

## 3. Педагогіка, чутливі теми, стиль
- Проблема на першому екрані (картина, фото в'язня), теорія після неї ✅.
- Індіанці: «Шлях сліз» — «загинули тисячі», без натуралістики; картина Гаста подана як погляд творця (sk src, fbText: «для корінних народів він означав утрату землі й домівок») ✅. Рабство — «поневолені» ✅. Сипайське повстання — «обидві сторони чинили жорстокі розправи», без подробиць, назва за програмою ✅ (style/hist.md «Чутливі теми»).
- Euphony `--section w9s4`: l6, l7, l8 — 0 відхилень (решта — старі в l1–l3, поза обсягом). Правки й/та/і у фіналі зміст не змінюють.
- stats: l7, l8, l6 — без прапорців «нетипово для сім'ї».
- Тести рівня: dgw9 (тема g9-meiji → w9s4l4; pre-теми з w8/w7) і dgw10 (w9s4l1, w9s4l3, w9s4l4) спираються лише на незмінені уроки; diag-g9.js, diag-g10.js не змінено (git diff порожній). `validate --diag dgw9`, `--diag dgw10` — 0/0.
- `weeks: [18, 23]` ✅ (за задачею).
- Плейтест — лише CI (Python playwright відсутній).

## 4. Правки (зроблені, 3)
1. l7 е8: «14-та поправка (1868) зробила громадянами всіх, хто народився в США» → «зробила колишніх рабів громадянами США» (точність; індіанці поправкою не охоплювались).
2. l7 е8: «Чорношкірі чоловіки вперше голосували…» → «На Півдні чорношкірі чоловіки вперше голосували…».
3. l8 е9 `cap`: «Делегати першої сесії» → «Учасники першої сесії» (на фото помітно більше людей, ніж 72 делегати з body — щоб не суперечило).
Статуси l7, l8, l6 → `verified`.

## 5. Рекомендації (не блокують)
- Число «300 тис. за перший рік» для «Хатини дядька Тома» відкрито лише сніпетами пошуку (сторінки umich/blackpast — 403/DNS); воно стандартне й узгоджене в кількох джерелах — лишено.
- Commons-описи American Progress («oil on canvas») і Ріу («1869, Album de l'Impératrice») хибні — у pitfalls-hist «Хибні описи Commons» (куратору).

## Вердикт
- **w9s4l7** — verified (2 правки точності).
- **w9s4l8** — verified (1 правка `cap`).
- **w9s4l6** (фінал) — verified.
- Розділ w9s4: 0 помилок validate; задача → done.
