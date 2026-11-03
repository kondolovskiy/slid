---
claimed_from: todo
claimed_at: 2026-11-03T09:18:50.094Z
id: write-world-w7s1
type: write-section
subject: world
grade: 7
section: w7s1
weeks: [1, 7]
status: review
claimed_by: writer-write-world-w7s1
created: 2026-11-03
---
# Написати розділ «Раннє Середньовіччя в Європі» (Всесвітня історія, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як на руїнах Римської імперії постала нова Європа: королівства, імперія Карла Великого, вікінги й християнська церква.

## Теми уроків (з плану)
1. Варварські королівства і франки Хлодвіга
2. Карл Великий і «Каролінзьке відродження»
3. Вікінги: від набігів до держав
4. Християнська церква і розкол 1054 р.
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: предмет новий — `content/hist/g7-g7s4.js` (будова уроку історії 7 кл.) і style/world.md. **Цей розділ стане еталоном предмета** — будова, ритм, довжина мають бути взірцевими.
- Синхронізація з «Історією України» 7 кл.: g6s5 (Велике переселення), g7s1 (варяги, Русь), g7s2 (хрещення 988 р.) — для `link`.

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Гісем О. В. та ін., модельна «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf (PDF; текст — `pdftotext`, середня колонка «Зміст навчального предмета»).
- **Новий предмет** `world`: content/subjects/world.js (навички src, time, geo, crit, pol, soc, cult, link), план content/world/plan.js, **style/world.md** (+ style/hist.md — усе діє), glossary/world.md, facts/world.md (поки порожній — нові факти лише з ≥ 2 джерел, з URL у нотатках і FACT в inbox).
- Файл: `content/world/g<клас>-<id>.js`, зображення — `img/world/<id>/`; id уроків `<id>l1…`, значок boss — унікальний id. D-027: ≥ 1 справжнє `img` у кожному уроці (скіл `hist-images`; Commons — `thumb.wikimedia.org`, ≤ 2 фото-агенти одночасно).
- У розділі ≥ 1 завдання `sk: "link"` (подія світу ↔ подія на українських землях, уже відома з «Історії України» 7 кл. або подана на екрані).
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай. Не чіпай чужі файли, `content/math`, `app/`.

## Результат
- Файл `content/world/g7-w7s1.js` з `SLID.section("world", { id: "w7s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w7s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w7s1` — 0 помилок (build — за оркестратором)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-write-world-w7s1, 2026-11-03.** Файл `content/world/g7-w7s1.js`, 5 уроків (усі `draft`), фото — `img/world/w7s1/` (6 файлів, усі використані). `validate --section w7s1`: 0 помилок, 0 попереджень; `stats --subject world`: 0 прапорців (слів/речення 5,9–6,8 — як у hist 7 кл.). Build не запускав (паралельний запуск).

### Уроки
- **w7s1l1 «Королі на руїнах Риму»** (9 екр.) — картина бл. 1500 р. як свідчення про свій час; варварські королівства; Хлодвіг; хрещення (дата — `note`); Салічна правда; факт/тлумачення.
- **w7s1l2 «Імператор, що вчився писати»** (9) — Ейнгард; коронація 800 р.; денарій KAROLVS IMP AVG; Каролінзьке відродження; Верден 843 р.
- **w7s1l3 «Кораблі з півночі»** (9) — Осеберг; Ліндисфарн 793 р.; «рос» 839 р. (`link`); Нормандія 911 р.; Ньюфаундленд 1021 р.; камінь з Еллінга (multi «твердження правителя ≠ факт»); Гаральд Суворий і Єлизавета Ярославна (`link`).
- **w7s1l4 «Відлучення біля вівтаря»** (9) — Свята Софія; два центри; причини розколу; 1054 р. як умовна дата; 1965 р.; Русь після розколу (`link`).
- **w7s1l5 «Маршрут через шість століть»** (boss, 7) — рамка «гід маршруту Реймс → Аахен → Еллінг → Константинополь» (свідомо не «літописець» і не «виставка»); значок `earlymed` «Гід Раннього Середньовіччя».
- `link`: l3 е4, l3 е8, l4 е8, l5 е5 — спираються на «Історію України»: g6s5 (476 р.), g7s1 (839 р. у fbText, договір 911 р.), g7s2 (988 р., Єлизавета — Норвегія, Анна 1051 р., 1054 р.); на кожному екрані — коротке «Пригадай» з датою.

### Опори (D-019), де неочевидно
- l1 е2 (choice, оцінюване одразу після intro) — шлях 2+3: у `cap`/`body` intro — «бл. 1500 р.» і «жив бл. 500 р.»; висновок «картина свідчить про час художника» — міркування. Правильний варіант не повторює `cap` дослівно.
- l1 е7 — відповідь із body екрана (віра підданих, повага єпископів); дата хрещення лише в `note`, не оцінюється.
- l2 е2 — `hyp`; відповідь на е6 «Каролінзьке відродження».
- l2 е7 (multi) — дистрактор «друкування верстатом» відкидається, бо його не було в переліку е6; XV ст. — лише пояснення у fbText.
- l2 е8 — причина поділу (онуки воювали) подана в body.
- l2 е9 — 481 р. з l1, 476 р. з l1/l2 е3–е4.
- l3 е4 — «рос» і русь: слово «рос» на екрані + g7s1 (fbText «839 р. їх згадує франкська хроніка»); дистрактори 911/988 — дати з «Історії України» 7 кл.
- l3 е9 (order) — усі 5 подій з датами на екранах 3, 4, 5, 6, 8.
- l4 е9 «Віра в Христа — спільне» — міркування: обидві церкви християнські (е3).
- l5 е3 (14 р.) — 800 р. з l2 е3, 814 р. з l2 е8.

### Факти (нові; реєстр facts/world.md порожній) — ≥ 2 джерела
1. 476 р. — падіння Західної Римської імперії — facts/hist №126.
2. Хлодвіг: король салічних франків з 481 р., рід Меровінгів, Суассон 486 р., Вуйє (вестготи) 507 р., столиця Париж, помер 511 р.; Салічну правду записано за нього — https://en.wikipedia.org/wiki/Clovis_I ; https://www.worldhistory.org/Clovis_I/ ; https://osvita.ua/vnz/reports/world_history/32289/
3. Хрещення Хлодвіга: Григорій Турський (писав бл. 590 р.) — 496 р.; сучасні історики — 498–508 р. (Дюмезіль, Ісаїя — 507/508) → в уроці «близько 500 р.», рік лише в `note` — https://en.wikipedia.org/wiki/Clovis_I ; https://fr.aleteia.org/2024/10/25/clovis-a-t-il-vraiment-ete-baptise-en-496/ ; https://www.ebsco.com/research-starters/religion-and-philosophy/baptism-clovis
4. Хлодвіг прийняв нікейське (католицьке) християнство, на відміну від аріан-вестготів і вандалів; підтримка галло-римських єпископів — en.wiki Clovis I; https://booksite.ru/FullText/1/001/008/119/223.htm
5. Салічна правда: вергельд вільного франка — 200 солідів, вільного римлянина (не землевласника/не королівського супутника) — 100 солідів — https://www.libertarianism.org/essays/replacing-rome-part-i-law-salian-franks ; Cambridge Medieval History, цит. https://castalialibrary.substack.com/p/the-cambridge-medieval-history-i-270 . **Спірне:** для римлянина-землевласника переклади дають 100 або 200 — в уроці лише «вільний римлянин — 100».
6. Королівства: остготи — Італія, вестготи — Іспанія, франки — Галлія, англи й сакси — Британія — загальновідоме (підручники; en.wiki «Barbarian kingdoms»); верифікаторові — звірити.
7. Карл Великий: король франків 768 р., лангобарди 774 р., сакси; коронований папою Левом III у Римі 25.12.800 р. — перший імператор на Заході від 476 р.; помер 28.01.814 р. в Аахені, похований у Палатинській капелі — https://en.wikipedia.org/wiki/Charlemagne ; https://sourcebooks.fordham.edu/basis/einhard.asp (Ейнгард, гл. 26, 28)
8. Ейнгард: Карл тримав дощечки під подушкою, вчився писати, але почав пізно — гл. 25 — https://sourcebooks.fordham.edu/basis/einhard.asp ; https://en.wikipedia.org/wiki/Vita_Karoli_Magni
9. Алкуїн з Йорка — при дворі з 782 р., палацова школа; каролінзький мінускул — розбірливий, з пробілами; основа сучасних малих літер — https://en.wikipedia.org/wiki/Carolingian_minuscule ; https://historyofinformation.com/detail.php?id=196
10. Денарій бл. 812–814 рр. KAROLVS IMP AVG (M — Майнц) / XPICTIANA RELIGIO — Commons (BnF ark:/12148/btv1b7700118m, дата BnF 812) ; en.wiki Charlemagne (тип монети «c. 812–814»).
11. Верденський договір 843 р.: онуки (Лотар, Людовик Німецький, Карл Лисий) після громадянської війни; Західна Франкія → Франція, Східна → Німеччина — https://en.wikipedia.org/wiki/Treaty_of_Verdun ; https://www.encyclopedia.com/history/modern-europe/treaties-and-alliances/treaty-verdun
12. Ліндисфарн 793 р. — початок доби вікінгів (день: Англосаксонська хроніка — 8 січня, інші — 8 червня; в уроці лише рік) — https://www.historyhit.com/what-was-the-significance-of-the-viking-attack-on-lindisfarne/ ; https://www.lindisfarne.org.uk/793/
13. Бертинські аннали 839 р.: посли Феофіла до Людовика Благочестивого (Інгельгайм), люди «Rhos» виявилися свеями — https://en.wikipedia.org/wiki/Annales_Bertiniani ; https://www.medievalists.net/2009/06/22/the-annals-of-st-bertin-839-and-chacanus-of-the-rhos/
14. 911 р. — Сен-Клер-сюр-Епт: Карл Простий віддав Ролло землі в пониззі Сени → Нормандія — https://en.wikipedia.org/wiki/Treaty_of_Saint-Clair-sur-Epte ; https://www.history.co.uk/articles/charles-the-simple-the-king-who-made-peace-with-the-vikings
15. Л'Анс-о-Медоуз: дерево зрубано 1021 р. (Kuitems et al., Nature 2021); поселення проіснувало 3–13 років — https://www.nbcnews.com/news/amp/rcna3383 ; https://www.discovermagazine.com/yes-vikings-really-did-live-in-the-americas-1-000-years-ago-43078
16. Камінь Гаральда з Еллінга, бл. 965 р. (ЮНЕСКО: 953–965), напис: Гаральд на честь Горма й Тюри, «здобув собі всю Данію й Норвегію і зробив данців християнами» — https://whc.unesco.org/en/list/697 ; https://en.wikipedia.org/wiki/Jelling_stones
17. Корабель з Осеберга: збудований бл. 820 р., поховання 834 р. (дендро), дві жінки, розкопки 1904 р. — https://www.nationalgeographic.com/history/magazine/2016/05-06/viking-oseberg-ship/ ; https://www.history.co.uk/articles/history-of-the-oseberg-viking-burial-ship
18. Гаральд Суворий: служив Ярославові в Києві, потім у Константинополі; одружився з Єлизаветою (Еллісів) 1043/1044 р.; загинув під Стемфорд-Бриджем 25.09.1066 р. — дата кінця доби вікінгів — https://sciencenorway.no/history-viking-age/the-princess-from-kyiv-was-norways-last-viking-queen/2121771 ; https://en.wikipedia.org/wiki/Harald_Hardrada (Єлизавета — королева Норвегії: facts/hist №39).
19. Розкол: 16.07.1054 р. легати Лева IX на чолі з кардиналом Гумбертом поклали буллу про відлучення патріарха Михаїла Керуларія на вівтар Святої Софії; синод патріарха відлучив легатів (20/24.07); розкол — тривалий процес, 1054 р. — умовна дата; 1965 р. Павло VI й Афінагор скасували анафеми — https://christianhistoryinstitute.org/magazine/article/east-west-schism ; https://en.wikipedia.org/wiki/Michael_I_Cerularius ; https://catholicunderthehood.com/2010/07/16/today-in-catholic-history-the-start-of-the-east-west-schism/
20. Розбіжності: першість папи, опрісноки (прісний хліб) проти квасного, целібат, filioque — https://oca.org/orthodoxy/the-orthodox-faith/church-history/eleventh-century/the-great-schism ; https://en.wikipedia.org/wiki/Azymite
21. Кирило й Мефодій — місія до Великої Моравії 863 р., абетка (глаголиця), слов'янські переклади — https://www.encyclopediaofukraine.com/pages%5CS%5CA%5CSaintCyril.htm ; https://en.wikipedia.org/wiki/Great_Moravia (в уроці без дати).
22. Скандинавські королівства постали в IX–XI ст., королі прийняли християнство (Данія — Гаральд, бл. 965 р.) — узагальнення за №16 і en.wiki «Viking Age»; верифікаторові звірити формулювання «IX–XI ст.».

### Зображення (D-027)
| урок | файл | ліцензія | URL |
|---|---|---|---|
| l1 | clovis-baptism-1500.jpg (800×1078) | CC0, NGA 1952.2.15 | https://commons.wikimedia.org/wiki/File:Master_of_Saint_Giles,_The_Baptism_of_Clovis,_c._1500,_NGA_41597.jpg |
| l2 | charlemagne-denier.jpg | PD (BnF, Public Domain Mark) | https://commons.wikimedia.org/wiki/File:Denier_-_btv1b7700118m.jpg |
| l3 | oseberg-ship.jpg | CC BY-SA 3.0, Vassia Atanassova | https://commons.wikimedia.org/wiki/File:Viking_Ship_Museum_-_Oseberg_ship_-_1.jpg |
| l3 | jelling-stone.jpg (обрізано чорне тло згори) | CC BY-SA 3.0, Roberto Fortuna / Nationalmuseet (VRT 2013042210006108) | https://commons.wikimedia.org/wiki/File:Jellingsten_stor_2.jpg |
| l4 | hagia-sophia.jpg | CC BY-SA 3.0, Arild Vågen | https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg |
| l5 | aachen-chapel.jpg | CC BY-SA 3.0, Traveler100 | https://commons.wikimedia.org/wiki/File:Aachen-dom-oktogon-s1.jpg |
Хибні описи Commons: «Gokstad_Ship,_late_9th_cent…(35632323234).jpg» — у назві Гокстад, в описі Осеберг (не брав). У «Jellingsten stor 2/3» дата фото 2010 vs «2012» — у `cap` без року.

### Сумнівні місця для верифікатора
- l1 «Майстер святого Егідія» — укр. передача «Master of Saint Giles» (у глосарії немає).
- l1 е8: суми Салічної правди — див. факт №5.
- l2: «від каролінзького мінускулу походять малі літери латинки» — через гуманістичний мінускул XV ст. (спрощено).
- l3 е4 fbText: «одна з найдавніших письмових згадок про русь» — Garipzanov 2006 «earliest written record of the Rhos»; формулювання «одна з» обережне.
- l5 intro: «майже шість століть» (476–1054 = 578 р.).
- Програма згадує Клюнійський рух і «варварські правди» — Салічна правда є (l1), Клюні не ввійшло (≤ 5 термінів на урок); можна додати в w7s3.

### Пропозиції
- glossary/world.md: Меровінги, Каролінги, «Каролінзьке відродження» (у лапках, з великої), каролінзький мінускул, Салічна правда, нормани/вікінги/варяги (як у l3), Гаральд Суворий, Ейнгард, Алкуїн, Ролло, Еллінг, Ліндисфарн; «католицька/православна церква» з малої.
- style/world.md: якщо w7s1 стане еталоном — будова «intro з джерелом → оцінювана здогадка з екрана або hyp → 2 info → 4–5 завдань → Фінал», `link` з «Пригадай: …» і датою на екрані.
