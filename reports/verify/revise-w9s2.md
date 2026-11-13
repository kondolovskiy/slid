# Верифікація revise-world-w9s2 — w9s2l7, w9s2l8, фінал w9s2l6

Верифікатор: verifier-revise-w9s2 (2026-11-12; розділ не писав). Скіли: content-verify, hist-images.
Обсяг: нові уроки w9s2l7 «Липень і листопад 1830-го», w9s2l8 «Ціна імперії», змінений фінал w9s2l6, `weeks: [7, 12]`, 4 нові файли `img/world/w9s2/`. Уроки l1–l5 не змінено (diff від 83ddcb5 — лише нові уроки, фінал, коментар, credits і weeks), тож їх не переперевіряв.

**Вердикт:** l7, l8, l6 — **verified** після 6 мінімальних правок (нижче). Тести рівня dgw9 (g9-ideo → w9s2l3) і dgw10 (ideo → w9s2l3) не зачеплено: l3 не змінено, diag-*.js не змінено, validate 0/0.

## 1. Факти (усі джерела відкрито в цій сесії)

| Твердження | Джерела | Вердикт |
|---|---|---|
| 1814 р. повернулися Бурбони; Реставрація 1814–1830 | https://en.wikipedia.org/wiki/Bourbon_Restoration_in_France ; https://uk.wikipedia.org/wiki/Реставрація_Бурбонів ; https://www.elysee.fr/la-presidence/le-drapeau-francais | ✅ |
| «Реставрація» — лат. restauratio «відновлення» | https://uk.wikipedia.org/wiki/Реставрація ; https://en.wiktionary.org/wiki/restoration | ✅ |
| Карбонарії — «вуглярі»; Неаполь 1820, король обіцяв конституцію; австрійці 1821 | https://en.wikipedia.org/wiki/Carbonari ; https://uk.wikipedia.org/wiki/Карбонарії ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/revolutions-1820 | ✅ |
| 1823 р. французьке військо повернуло королю Іспанії всю (абсолютну) владу | https://en.wikipedia.org/wiki/Trienio_Liberal ; encyclopedia.com (вище) | ✅ |
| Карл X — брат Луї XVIII; укази 25.07.1830: розпуск щойно обраної палати, преса, частина виборців без голосу | https://en.wikipedia.org/wiki/July_Revolution ; https://fr.wikipedia.org/wiki/Ordonnances_de_Saint-Cloud | ✅ |
| 27–29.07.1830 «три славні дні»; триколор на барикадах, білий прапор Реставрації; зречення Карла X | en.wiki July Revolution ; elysee.fr (вище) | ✅ (триколор — кокарда 1789, прапор 1790/1794: «прапор революції 1789 р.» — прийнятне) |
| Луї-Філіпп — родич (кузен) Карла X, «король французів» | https://fr.wikipedia.org/wiki/Louis-Philippe_Ier ; https://en.wikipedia.org/wiki/Louis_Philippe_I | ✅ |
| Бельгія: Віденський конгрес 1815; католики / король-протестант; 62 % населення — 50 % місць; Брюссель 25.08.1830; незалежність 4.10.1830 («восени»); король 21.07.1831; визнання 19.04.1839 | https://en.wikipedia.org/wiki/Belgian_Revolution ; https://ebsco.com/research-starters/history/belgian-revolution ; https://www.dekamer.be/kvvcr/pdf_sections/pri/fiche/en_01_00.pdf (текст PDF) | ✅ |
| Листопадове повстання: увечері 29.11.1830, курсанти (Висоцький), Арсенал; привід — план кинути польське військо на Францію й Бельгію; детронізація 25.01.1831; Варшава — вересень 1831; тисячі емігрантів | https://en.wikipedia.org/wiki/November_Uprising ; https://pl.wikipedia.org/wiki/Powstanie_listopadowe ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CO%5CPolishInsurrectionof1830hD71.htm ; https://ebsco.com/research-starters/history/first-polish-rebellion | ✅ |
| «Цар скасував конституцію» → Органічний статут 1832 замінив конституцію 1815, скасував сейм, польське військо влито в російське | https://pl.wikipedia.org/wiki/Statut_Organiczny_dla_Królestwa_Polskiego ; https://en.wikipedia.org/wiki/Organic_Statute_of_the_Kingdom_of_Poland ; EBSCO («restricted the rights») | ⚠️ спрощення → **виправлено** |
| «Жандарм Європи» — за придушення революцій (Польща 1831, Угорщина 1849) | https://en.wikipedia.org/wiki/Nicholas_I_of_Russia ; https://ebsco.com/research-starters/history/nicholas-i | ✅ |
| Правобережжя: після поділів — до Росії (hist g9s1: 1793); поміщики переважно поляки | https://en.wikipedia.com/wiki/Right-bank_Ukraine (пошук) ; https://src-h.slav.hokudai.ac.jp/publictn/45/matsuzato/matsuzato-e.html ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CI%5CRight6BankUkraine.htm | ✅ |
| Навесні 1831 р. повстала шляхта Правобережжя; селяни байдужі / ворожі; придушено «в травні» | EoU (Himka, вище: травень) ; https://uk.wikipedia.org/wiki/Польське_повстання_1830—1831_на_Правобережній_Україні (квітень — 12 червня; «панська справа») | ⚠️ «в травні» не для всіх загонів → **виправлено** на «за кілька тижнів» |
| Конфіскація маєтків, ліквідація польських шкіл, університет у Києві 1834 р. для послаблення польського впливу | EoU Polish Insurrection ; EoU Right-Bank ; http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CY%5CKyivNationalUniversity.htm ; https://uk.wikipedia.org/wiki/Київський_університет (відкриття 15.07.1834) ; Маркевич О. (ЖДУ), http://www.istvolyn.info/storage/uploads/LhP1JDxoxnvHbitWXLWkJxTKj0mlkSSA7nxSq3jj.pdf (комісії з конфіскації, Волинь) | ✅ |
| Британці заробляли на работоргівлі понад століття (Королівська африканська компанія 1660 → 1807) | https://en.wikipedia.org/wiki/Royal_African_Company ; https://en.wikipedia.org/wiki/Slavery_in_the_British_and_French_Caribbean ; facts/world №45 | ✅ |
| Схема «Брукс»: напис «…under the Regulated Slave Trade Act of 1788»; 454 дозволено, раніше до 609; обміри 1788 р.; тисячі (7000) аркушів; LOC | сам аркуш (примітка) ; https://en.wikipedia.org/wiki/Brookes_(ship) ; https://www.eyemagazine.com/feature/article/charts-change-minds ; https://commons.wikimedia.org/wiki/File:Slaveshipposter.jpg | ✅ Датування друку 1788 / 1789 / 1790 у джерелах різне (пошук: LOC «[1788(?)]», Трір 1789, NARA 1790) — у `cap` року друку немає, «кінець XVIII ст.» — правильно |
| Товариство 1787; аболіціоністи (лат. abolitio «скасування»); свідчення колишніх невільників (Еквіано), бойкот цукру, петиції; Вілберфорс 1789–1807 | https://en.wikipedia.org/wiki/Abolitionism_in_the_United_Kingdom ; https://uk.wikipedia.org/wiki/Аболіціонізм ; https://en.wiktionary.org/wiki/abolition | ✅ |
| 1807: заборона работоргівлі (25.03, чинна з 1.05); флот перехоплює кораблі біля Африки (з 1808) | https://en.wikipedia.org/wiki/Slave_Trade_Act_1807 ; https://historyofparliament.com/2024/08/28/1833-slavery-abolition-act ; https://www.rmg.co.uk/whats-on/online/african-experience-on-slaving-vessels-captured-west-africa-squadron-1808-1867 | ✅ |
| 1833 закон (28.08), з 1.08.1834 у більшості колоній (крім Індії тощо); 20 млн фунтів власникам; звільнені нічого не отримали | en.wiki Abolitionism ; historyofparliament (вище) ; https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/georgians/1833-abolition-of-slavery-act-and-compensation-claims/ | ✅ |
| «До 1838 р. звільнені мусили працювати на власників» → «учнівство» для старших за 6 років, без платні, скасоване 1.08.1838 | TNA (вище: «aged over six … without compensation … ended in 1838») ; historyofparliament («unpaid apprenticeship», 1.08.1838) | ⚠️ неточно (діти до 6 — вільні) → **виправлено** |
| Алжир: Карл X — повернути прихильність; 5.07.1830 капітуляція / вступ; Абд аль-Кадір 1832–1847 | https://en.wikipedia.org/wiki/Invasion_of_Algiers_(1830) ; https://fr.wikipedia.org/wiki/Expédition_d'Alger_(1830) ; https://www.ebsco.com/research-starters/military-history-and-science/french-occupation-algeria | ✅ |
| Ост-Індська компанія: Плессі 1757, власне військо; 1833 — лише адміністрація | https://en.wikipedia.org/wiki/East_India_Company ; https://en.wikipedia.org/wiki/Saint_Helena_Act_1833 ; https://en.wikipedia.org/wiki/Company_rule_in_India | ✅ |
| Британські фабричні тканини витісняли індійських ткачів | https://en.banglapedia.org/index.php/Muslin ; en.wiki Company rule in India («from the 1830s British textiles began to flood Indian markets») | ✅ |
| Ірландія в СК з 1801; > 3 млн жили з картоплі; фітофтороз 1845, майже повний неврожай 1846; вивезення зерна й худоби до Британії; виселення | https://en.wikipedia.org/wiki/Great_Famine_(Ireland) ; https://www.rte.ie/history/the-great-irish-famine/2020/0629/1150367-the-great-irish-famine ; https://www.encyclopedia.com/international/encyclopedias-almanacs-transcripts-and-maps/great-famine ; https://uk.wikipedia.org/wiki/Великий_голод_в_Ірландії | ✅ |
| «Уряд допомагав мало: вважав, що ринок усе владнає сам» → Піль закупив кукурудзу, громадські роботи, супові кухні (до 3 млн пайків на день, закриті серпень–вересень 1847), далі — тягар на місцеві громади; laissez-faire; вивезення не заборонено | en.wiki ; RTÉ ; encyclopedia.com (вище) | ⚠️ спрощення → **виправлено** |
| Роки 1845–1852 (note: найтяжчі 1845–1849); померлих 775 тис. – 1,5 млн, «близько мільйона» | en.wiki (1845–1852; 775 000 – 1,5 млн) ; RTÉ (1845–1852; «over one million») ; uk.wiki (текст 1845–1849, інфобокс 1852) ; encyclopedia.com (1,1 млн) | ✅ |
| > 1 млн емігрували; «виїхали за океан» | en.wiki («more than one million emigrated») ; RTÉ («a further million and a quarter fled the country»), частина — до Британії | ⚠️ «за океан» → **виправлено** на «емігрували» |
| Перепис 1841 ≈ 8,2 млн, 1851 ≈ 6,6 млн | encyclopedia.com (8,2 / 6,6) ; RTÉ (1851 — 6,55 млн) ; uk.wiki (1841 — 8 178 тис.) | ✅ |

### Зображення (D-027; ліцензія в країні походження і США)
| Файл | Перевірено | Вердикт |
|---|---|---|
| july-1830-rue-de-rohan.jpg — Лекомт, 1831, Карнавале P213 | https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/combat-de-la-rue-de-rohan-le-29-juillet-1830 (підпис «Hte Lecomte 1831», CC0) ; Commons (PD, Салон 1831). Франція: автор † 1857; США: опубл. до 1931 | ✅ Обрізаний край без тіл; на картині справді є триколор, солдати на балконі, жінки праворуч |
| arsenal-warsaw-1830.jpg — Залеський, 1831, МНВ MP 4797 | Commons ; https://artsandculture.google.com/asset/EwH7-p6_nRFWoQ (1831). Польща: † 1877; США: до 1931 | ✅ |
| brookes-slave-ship.jpg — LOC cph.3a34658 | Commons (PD-US до 1931, PD-old) ; en.wiki Brookes | ✅ Схема без натуралізму; рік друку не вказано — правильно |
| irish-blight-1847.jpg — Макдональд, 1847, Нац. фольклорна колекція UCD | Commons (PD-Art-70) ; https://www.irishexaminer.com/property/homeandoutdoors/arid-20324790.html (1847, UCD) ; https://www.irishtimes.com/news/ireland/irish-news/book-on-famine-painter-daniel-macdonald-launched-in-dublin-1.2547287 (1847, † 1853). Ірландія/Британія: † 1853; США: до 1931 | ✅ Без жертв голоду — відповідає style/hist.md |

## 2. Завдання (розв'язано самостійно, потім звірено з `correct`)

| Урок / екран | Моя відповідь = ключ | Опора (D-019) | Вердикт |
|---|---|---|---|
| l7 е3 sort | реакція: союз, Неаполь, Іспанія; за конституцію: карбонарії, неаполітанці | е2; w9s1 (Священний союз «допомагати одне одному») | ✅ |
| l7 е5 multi | [0, 2, 3] | сама картина (переглянуто файл); білий прапор — е4 | ✅ |
| l7 е6 choice | 1 | body е6 + w9s1 (Віденський конгрес, Бельгія до Нідерландів) | ✅ |
| l7 е8 choice | 2 | е7 (Варшава 1831) + w9s2l5 е9 (Микола I, Угорщина 1849) | ✅ |
| l7 е9 link | 0 | body е9; hist g9s1 (1793 — Правобережжя до Росії) | ✅ |
| l7 е10 order | Неаполь → Париж → Брюссель → Варшава → взяття Варшави → 1839 | дати е2, е4, е6, е7 | ✅ |
| l8 е2 choice | 0 | схема на екрані + переклад напису й примітки | ✅ |
| l8 е4 multi | [0, 1] | е3 | ✅ |
| l8 е5 choice | 1 | body е5 | ✅ |
| l8 е7 sort | Алжир: 1830, Абд аль-Кадір, Франція; Індія: компанія, ткачі | е6 | ✅ |
| l8 е9 number | 8,2 − 6,6 = 1,6 | body е9; «кожного п'ятого» 1,6 / 8,2 ≈ 19,5 % | ✅ |
| l8 е10 multi | [0, 1, 2] | е3, е5, е6, е8 | ✅ |
| l6 П1–П5 | без змін змісту (лише і/й, `pre`) | l1–l5 | ✅ |
| l6 П6 multi | [0, 1, 2] | l7 е4, е6, е7 | ✅ |
| l6 П7 order | 1807 → 1830 → 1834 → 1837 → 1845 → 1848 | l8 е3, е5, е8; l1; l4; l5 (1833 чи 1834 — порядок однозначний) | ✅ |

Фінал: 7 завдань на 7 тем (D-048 п. 1), `boss` питає лише подане. Педагогіка: проблема на першому екрані, ≥ 2 типи, hint у кожному завданні, outro 4 пункти. Чутливі теми: рабство — схема, без натуралізму; голод — картина без жертв, числа з діапазоном і атрибуцією в `note`, `number` пояснює масштаб.

## 3. Правки (зроблено, content/world/g9-w9s2.js)
1. l7 е7: «Цар скасував конституцію Царства Польського» → «Цар замінив конституцію указом — без сейму й польського війська» (Органічний статут 1832).
2. l7 е9: «і в травні повстання придушили» → «і за кілька тижнів повстання придушили» (квітень — червень 1831).
3. l8 е5: «Та до 1838 р. звільнені ще мусили працювати на колишніх власників» → «Та звільнені, старші за шість років, ще до 1838 р. мусили як «учні» безплатно працювати на колишніх власників».
4. l8 е8: «Уряд у Лондоні допомагав мало: вважав, що ринок усе владнає сам» → «Уряд у Лондоні допомагав недовго: покладався на ринок і вивезення не заборонив».
5–6. l8 е9 body і fbText: «виїхали за океан» → «емігрували».
7. status l7, l8, l6 → `verified`.

Слова на екрані після правок: l7 max 73, l8 max 75 (профіль ≤ 75). validate --section w9s2: 0 помилок, 2 старі попередження (l2, l5 — позиція «Б»); --diag dgw9, dgw10: 0/0. euphony --section w9s2: у l6, l7, l8 відхилень немає (44 — старий текст l1–l5, поза обсягом). Плейтест — лише CI (playwright локально немає).

## 4. Рекомендовано (не блокує)
- Людині / вчителю нічого не потрібно. Можна уточнити в hist (план g9s2 «Київ під наглядом: … 1830–1831, університет») ті самі формулювання, щоб `link` l7 мав урок-відповідник.
