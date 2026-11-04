---
claimed_from: todo
claimed_at: 2026-11-04T12:29:56.650Z
id: write-world-w9s1
type: write-section
subject: world
grade: 9
section: w9s1
weeks: [1, 7]
status: done
claimed_by: impl-write-world-w9s1
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Французька революція і Наполеон» (Всесвітня історія, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як революція проголосила права людини і чому імперія Наполеона змінила карту Європи.

## Теми уроків (з плану)
1. «Старий порядок» і початок революції 1789 р.
2. Декларація прав людини і громадянина
3. Якобінці і терор
4. Наполеон: кодекс і війни
5. Віденський конгрес
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
- Файл `content/world/g9-w9s1.js` з `SLID.section("world", { id: "w9s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w9s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w9s1` — 0 помилок (build — лише в копії дерева; у спільному — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
### Зроблено (2026-11-04, impl-write-world-w9s1)
Файл `content/world/g9-w9s1.js` — 6 уроків, усі `draft`; значок `revnap` «Гід доби революції». validate --section w9s1: 0 помилок, 0 попереджень; stats --subject world: уроки w9s1 без прапорців; playtest --section w9s1 у копії дерева (build у копії): 6/6.
- w9s1l1 «Хто кого несе на спині?» (Старий порядок, 1789) — 10 екр.; img: карикатура 1789, розбирання Бастилії (Уель).
- w9s1l2 «Права від народження» (Декларація) — 9 екр.; img: Декларація (Ле Барб'є).
- w9s1l3 «Республіка в небезпеці» (якобінці, терор) — 10 екр.; img: портрет Робесп'єра; `link` — 1793 р. (другий поділ, hist g9s1).
- w9s1l4 «Генерал на баскому коні» (Наполеон: кодекс і війни) — 11 екр.; img: Давид і Деларош (парадна картина vs свідчення).
- w9s1l5 «Мир за круглим столом» (Віденський конгрес) — 10 екр.; img: Ізабе/Дондорф, карикатура «Королівський пиріг» 1815; `link` — Андрій Розумовський і Тернопільський край.
- w9s1l6 «Від Бастилії до Відня» (boss) — 6 завдань: по одному на l1–l5 + хронологія (шаблон w7s1l5; D-045 п. 1).

### Опора завдань (D-019), неочевидні місця
- l1 е2 (що показує карикатура) — з фото; е7 (голосування станами) — міркування з тексту екрана; е9 (Бастилія) — з тексту екрана (без суду, сім в'язнів).
- l2 е6 (стаття 16 — Монтеск'є) — «Пригадай» на екрані (w8s5 l1); е4 multi — з фото (кайдани, статті I–XVII).
- l4 е2 (імена на камені) — KAROLVS MAGNVS = Карл Великий з w7s1 (8 кл. не нагадує; hint і fbText пояснюють; Ганнібал поданий на екрані). е8 (блокада) — міркування з е7.
- l5 е6 — «Королівський пиріг» 1773 р. нагадано на екрані (w8s5 l5); написи карти — на самій карикатурі. е7 (link) — усе подано на екрані; «дві імперії» — hist g9s1.
- Boss з. 5 (Тернопільщина) — l5 е7.

### Факти з джерелами (нові для facts/world.md)
1. Генеральні штати: відкриття 5.05.1789 у Версалі, попередні — 1614 р. (175 р.); голосування за станами vs поголовно; 17.06.1789 — Національні збори; 20.06 — присяга в залі для гри в м'яч; суперечка ≈ 6 тижнів; борги (війна за незалежність США) — https://en.wikipedia.org/wiki/Estates_General_of_1789 ; https://www.worldhistory.org/Estates-General_of_1789/
2. Третій стан — 90–98 % населення («понад 9 з 10»); духовенство й дворяни звільнені від тальї («головного податку») — https://www.worldhistory.org/Estates-General_of_1789/ ; https://en.wikipedia.org/wiki/Ancien_r%C3%A9gime
3. 1788 р. — град (13.07.1788) і посуха, неврожай, подорожчання хліба — https://alphahistory.com/frenchrevolution/harvest-failures/ ; https://www.worldhistory.org/audioplayer/en/1-20800/ (лише «зіпсували врожай», без цифр)
4. Бастилія 14.07.1789: шукали порох (≈ 250 бочок), в'язнів — 7, Неккера звільнено 11.07, фортецю розібрали до листопада 1789 р.; 14 липня — національне свято — https://www.worldhistory.org/Storming_of_the_Bastille/ ; https://en.wikipedia.org/wiki/Storming_of_the_Bastille
5. Декларація прав людини і громадянина — 26.08.1789, 17 статей; текст ст. 1, 2, 3, 16 (переклад з франц.) — https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789 ; https://en.wikipedia.org/wiki/Declaration_of_the_Rights_of_Man_and_of_the_Citizen ; https://www.worldhistory.org/article/2012/declaration-of-the-rights-of-man-and-of-the-citize/
6. Активні громадяни (конституція 1791 р.) — чоловіки від 25 р., що платять податки; жінки виключені; Олімпія де Гуж 1791 — «Декларація прав жінки і громадянки» (17 статей); рабство скасовано 1794, відновлено Наполеоном 1802 — ті самі два джерела (wiki + worldhistory).
7. Війна з 20.04.1792; 10.08.1792 — повалення монархії; 21.09.1792 — скасування монархії (республіка, рік I — з 22.09); страта Луї XVI 21.01.1793 — https://en.wikipedia.org/wiki/French_First_Republic ; https://www.worldhistory.org/Reign_of_Terror/
8. Якобінці: клуб у домініканському монастирі на вул. Сент-Оноре (домініканців у Парижі звали «якобінцями»); 2.06.1793 — вигнання жирондистів; клуб закрито 12.11.1794 — https://en.wikipedia.org/wiki/Jacobin ; https://uk.wikipedia.org/wiki/Якобінці
9. Терор: «Закон про підозрілих» 17.09.1793 (кат. 1 — «поведінкою, зв'язками, словами чи писаннями», переказ); 16 594 офіційні смертні вироки; загалом 30–50 тис. загиблих («десятки тисяч»); 9 термідора = 27.07.1794 — арешт Робесп'єра, 28.07 — страта без суду — https://en.wikipedia.org/wiki/Reign_of_Terror ; https://www.worldhistory.org/Reign_of_Terror/ ; https://en.wikipedia.org/wiki/Law_of_Suspects
10. Робесп'єр — адвокат; 30.05.1791 промова за скасування смертної кари (worldhistory дає 22.06 — в уроці лише «1791 р.»); «Непідкупний»; член Комітету громадського порятунку 27.07.1793–27.07.1794 — https://en.wikipedia.org/wiki/Maximilien_Robespierre ; https://fr.wikisource.org/wiki/Discours_sur_la_peine_de_mort_(Robespierre,_1791) ; https://www.worldhistory.org/article/2113/robespierre--the-death-penalty/
11. Наполеон: нар. 15.08.1769 (Аяччо, Корсика); 18 брюмера = 9.11.1799 — перший консул; Цивільний кодекс 21.03.1804 («Кодекс Наполеона» — з 1807); коронація 2.12.1804 у Нотр-Дам, корону поклав сам; Аустерліц 2.12.1805; Лейпциг 16–19.10.1813; зречення квітень 1814, Ельба; «Сто днів»; Ватерлоо 18.06.1815; о. Святої Єлени, пом. 5.05.1821 — https://www.worldhistory.org/Napoleon_Bonaparte/ ; https://en.wikipedia.org/wiki/French_invasion_of_Russia
12. Кодекс: рівність перед законом, кінець станових привілеїв, власність (ст. 544), світський цивільний стан; ст. 213 (1804): «Le mari doit protection à sa femme, la femme obéissance à son mari» (обов'язок послуху скасовано 1938 р.); діє зі змінами досі — https://en.wikipedia.org/wiki/Napoleonic_Code ; https://www.napoleon.org/enseignants/documents/le-code-civil-21-mars-1804-naissance-principes-et-posterite ; https://criminocorpus.org/fr/legislation/droit/versions/718/213/pdf/
13. Континентальна блокада — Берлінський декрет 21.11.1806; Росія відновила торгівлю з Британією 1810 — одна з причин походу 1812 (у wiki — citation needed; в уроці «одна з причин») — https://en.wikipedia.org/wiki/Continental_System ; https://uk.wikipedia.org/wiki/Континентальна_блокада
14. Похід 1812: перехід Німану 24.06.1812, 600–685 тис. (worldhistory «понад 615 тис.»), Бородіно 7.09, Москва 14.09; втрати ≈ 380 тис., половина — хвороби — https://en.wikipedia.org/wiki/French_invasion_of_Russia ; https://www.worldhistory.org/Napoleon_Bonaparte/
15. Картина Давида: 5 версій 1801–1805 (мальмезонська — 1800–1801, M.M.49.7.1), замовник Карл IV Іспанський; «спокійний на баскому коні» — переказ («si l'on en croit la tradition»); написи BONAPARTE, HANNIBAL, KAROLVS MAGNVS; насправді — мул і провідник (П'єр-Ніколя Дорса); Деларош 1848–1850 (Ліверпуль — 1850) — https://en.wikipedia.org/wiki/Napoleon_Crossing_the_Alps ; https://en.wikipedia.org/wiki/Bonaparte_Crossing_the_Alps ; https://www.herodote.net/galeries-Bonaparte_franchissant_le_Grand_Saint_Bernard_1801_David_ch_teau_de_la_Malmaison_-536.php
16. Віденський конгрес: вересень 1814 — червень 1815, Підсумковий акт 9.06.1815 (за 9 днів до Ватерлоо); Меттерніх головував; Царство Польське — цареві (з Варшавського герцогства, створеного Наполеоном 1807 за Тільзитом); Пруссія — частина Саксонії, Рейн; Австрія — Ломбардія-Венеція; Бельгія з Нідерландами; Німецький союз 39 держав (є й «38»); Краків — вільне місто; Священний союз 26.09.1815; Бурбони (Луї XVIII) повернулися ще 1814 р. — https://en.wikipedia.org/wiki/Congress_of_Vienna ; https://en.wikipedia.org/wiki/Duchy_of_Warsaw ; https://www.unesco.at/en/communication/documentary-heritage/memory-of-the-world-in-austria/final-document-of-the-congress-of-vienna-1815 ; https://www.encyclopedia.com/history/modern-europe/treaties-and-alliances/congress-vienna
17. Тернопільський край: за Шенбруннським миром 14.10.1809 — Росії; Віденський конгрес повернув Австрії (указ про ліквідацію краю — 26.06/8.07.1815) — https://www.encyclopediaofukraine.com/pages%5CC%5CO%5CCongressofVienna.htm ; https://en.wikipedia.org/wiki/History_of_Ternopil ; https://bigenc.ru/c/tarnopol-skaia-oblast-c72d41
18. Андрій Розумовський (1752–1836), нар. у Глухові, син гетьмана Кирила Розумовського; уповноважений Росії на Віденському конгресі, князь 1815; меценат Бетховена (квартети ор. 59) — https://www.encyclopediaofukraine.com/pages%5CR%5CO%5CRozumovskyAndrii.htm ; https://en.wikipedia.org/wiki/Andrey_Razumovsky

### Зображення (усі — сторінка файлу Commons + thumb.wikimedia.org, паузи; api.php не використовував)
| Урок | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l1 | three-estates-1789.jpg (Карнавале G.23829, анонім, 1789) | CC0 | https://commons.wikimedia.org/wiki/File:A_faut_esperer_q'eu_se_jeu_la_Finira_bentot_sic,_G.23829.jpg |
| l1 | bastille-demolition-houel.jpg (Уель, Карнавале D.6009) | CC0 | https://commons.wikimedia.org/wiki/File:Vue_de_la_démolition_de_la_Bastille._D.6009.jpg |
| l2 | declaration-le-barbier.jpg (приписують Ле Барб'є, Карнавале P809) | CC0 | https://commons.wikimedia.org/wiki/File:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg |
| l3 | robespierre-carnavalet.jpg (невідомий, бл. 1790) | CC0 | https://commons.wikimedia.org/wiki/File:Robespierre.jpg |
| l4 | napoleon-alps-david.jpg (Мальмезон M.M.49.7.1) | PD | https://commons.wikimedia.org/wiki/File:David_-_Napoleon_crossing_the_Alps_-_Malmaison1.jpg |
| l4 | napoleon-alps-delaroche.jpg (Walker WAG 2990, 1850) | PD | https://commons.wikimedia.org/wiki/File:Paul_Delaroche_-_Napoleon_Crossing_the_Alps_-_Google_Art_Project_2.jpg |
| l5 | vienna-congress-isabey.jpg (Дондорф за Ізабе, Рейксмузеум RP-P-OB-87.274; обрізано поля) | CC0 | https://commons.wikimedia.org/wiki/File:Afgevaardigden_op_het_Congres_van_Wenen,_1814-1815_Der_Wiener_Congress_1815._Sitzung_der_Bevollmächtigten_der_acht_an_dem_Tractate_von_Paris_betheiligten_Mächte_(titel_op_object),_RP-P-OB-87.274.jpg |
| l5 | gateau-des-rois-1815.jpg (BnF, анонім, 1815; обрізано поля) | PD | https://commons.wikimedia.org/wiki/File:Le_Gâteau_Des_Rois,_Tiré_au_Congrès_de_Vienne_en_1815_-_estampe_-_btv1b6954647z.jpg |
| l6 | tennis-court-oath-david.jpg (приписують Давиду, Карнавале P67) | CC0 | https://commons.wikimedia.org/wiki/File:Serment_du_Jeu_de_Paume_-_Jacques-Louis_David.jpg |

### Сумнівні місця для верифікатора
- `Prise_de_la_Bastille.jpg` (Уель, BnF) не взяв: на аркуші рукописна позначка, що це репродукція акварелі (оригінал — Карнавале); замість нього — «Розбирання Бастилії» D.6009.
- Фігури на «Королівському пирозі» 1815 р. в уроці не ідентифікую (на Commons ключа немає) — завдання лише на написи карти.
- Портрет Робесп'єра: інвентар (P729?) на сторінці не прочитано — у credits без номера.
- 1788 р. «град і посуха зіпсували врожай» — джерела вторинні (alphahistory, worldhistory audio); за потреби — «неврожай» без деталей.
- Німецький союз: 39 (wiki, encyclopedia.com) / 38 (деякі джерела) — у тексті 39.
- 1783 р. у розділі не згадується (норма «анексія» не застосовувалась).
- ЕІУ history.org.ua не відкривав; ЕІУ-факти — через Encyclopedia of Ukraine (EoU).

