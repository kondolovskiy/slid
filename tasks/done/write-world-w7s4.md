---
claimed_from: todo
claimed_at: 2026-11-03T10:54:03.574Z
id: write-world-w7s4
type: write-section
subject: world
grade: 7
section: w7s4
weeks: [22, 28]
status: done
claimed_by: writer-write-world-w7s4
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Королівства і монгольська навала» (Всесвітня історія, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як складалися Франція, Англія, Польща, Угорщина і як монгольська імперія змінила Євразію.

## Теми уроків (з плану)
1. Франція і Англія: від Вільгельма Завойовника до «Великої хартії»
2. Священна Римська імперія і Папа
3. Чехія, Польща, Угорщина — сусіди Русі
4. Імперія Чингісхана
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

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
- Файл `content/world/g7-w7s4.js` з `SLID.section("world", { id: "w7s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w7s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w7s4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Виконано (writer-write-world-w7s4, 2026-11-03)
Файл `content/world/g7-w7s4.js`, 5 уроків, усі `status: "draft"`; фото — `img/world/w7s4/` (6 файлів, усі з `credits`). `validate --section w7s4`: 0 помилок, 0 попереджень; `stats --subject world`: уроки w7s4 без прапорців.
- **w7s4l1** «Вишивка про завоювання» (Франція й Англія): килим з Байє, 1066 р., Гаральд Суворий (link), Капетинги й Анна → Філіп I (link), хартія 1215 р. (ст. 39), парламент 1265 р., Генеральні штати 1302 р.
- **w7s4l2** «Король босоніж у снігу» (імперія й папа): Оттон I 962 р., інвеститура, відлучення 1076 р., Каносса 1077 р., «Диктат папи», Барбаросса 1176 р., Інокентій III «сонце і місяць», Вормс 1122 р., корона Данила 1253 р. (link).
- **w7s4l3** «Срібло й коні з-за гір» (Чехія, Польща, Угорщина): Святослав «з Чехів і з Угрів» (intro), Мешко I 966, Болеслав I 1025, Іштван I бл. 1000 (`note`), Золота сицилійська булла 1212, Анастасія Ярославна, Данило 1245/1253 (link).
- **w7s4l4** «Сила Вічного Неба» (Чингісхан): портрет Юань (критика джерела), курултай 1206, військо, Калка 1223, улуси, Батий, Київ 1240, Польща й Угорщина 1241, Хубілай/Юань 1271, пайцза (Met), Плано Карпіні про Київ (link).
- **w7s4l5** «Музей королів і ханів» (boss, значок `kingshorde` «Куратор королівств і Орди»): рамка «віртуальний музей» — сама програма пропонує таку форму; 6 завдань у порядку тем.

**Факти з джерелами** (усі — ≥ 2 джерела; Britannica через пошук не віддавалася):
1. Гастінгс 14.10.1066, Гарольд загинув; коронація Вільгельма на Різдво 1066 у Вестмінстері; Стамфорд-Бридж (Гаральд Суворий загинув) 25.09.1066 — https://en.wikipedia.org/wiki/Battle_of_Hastings ; https://en.wikipedia.org/wiki/Battle_of_Stamford_Bridge ; https://saxonhistory.co.uk/Battle_of_Hastings_1066AD_Bayeux_Tapestry.php
2. Килим з Байє: ≈ 68,4 м («майже 70 м»), 1070-ті рр., замовник — найімовірніше єпископ Одо, зведений брат Вільгельма (є версія про Едіт) — https://en.wikipedia.org/wiki/Bayeux_Tapestry ; https://www.historyhit.com/culture/facts-about-the-bayeux-tapestry/ ; https://en.normandie-tourisme.fr/secrets-of-the-bayeux-tapestry/
3. Капетинги з 987 р.; Анна — дружина Генріха I з 1051 р., син Філіп I (facts/hist №35, №39); Філіп II Август взяв Нормандію 1204 р. — https://en.wikipedia.org/wiki/Philip_II_of_France ; https://en.wikipedia.org/wiki/Anne_of_Kiev
4. Велика хартія: 15.06.1215, Раннімід, Іоанн Безземельний, 63 статті, ст. 39 (переказ за англ. перекладом) — https://www.history.co.uk/this-day-in-history/15-june/magna-carta-receives-royal-seal ; https://pacificlegal.org/800-years-later-the-magna-carta-still-matters/ ; https://www.historytoday.com/node/55048
5. Парламент Симона де Монфора 1265 р. (лицарі й міщани); Генеральні штати 1302 р., Філіп IV — https://en.wikipedia.org/wiki/Simon_de_Montfort%27s_Parliament ; https://en.wikipedia.org/wiki/Estates_General_(France)
6. Оттон I коронований у Римі 2.02.962 (Іоанн XII); назва «Священна» — пізніша (XII ст.) — https://www.historytoday.com/archive/otto-great-crowned-emperor-romans ; https://www.deutschlandmuseum.de/en/history/calendar/962-02-02-the-establishment-of-the-holy-roman-empire/
7. Відлучення Генріха IV 1076, Каносса — січень 1077, три дні в снігу босоніж; Вормський конкордат 1122 — https://kids.britannica.com/students/article/Henry-IV/274848 ; https://origins.osu.edu/read/investiture-controversy ; https://webhost.bridgew.edu/jrwebb/pages/IC_timeline.html
8. «Диктат папи», 1075, пп. 8, 9, 12 (переказ) — https://sourcebooks.web.fordham.edu/source/g7-dictpap.asp ; https://en.wikipedia.org/wiki/Dictatus_papae
9. Інокентій III, лист 1198 р. (сонце й місяць, переказ) — https://sourcebooks.web.fordham.edu/source/innIII-policies.asp ; https://en.wikipedia.org/wiki/Sun_and_Moon_allegory
10. Барбаросса: походи в Італію 1154–1186, поразка під Леньяно 1176 від Ломбардської ліги (союз з папою Олександром III) — https://en.wikipedia.org/wiki/Battle_of_Legnano ; https://en.wikipedia.org/wiki/Frederick_I,_Holy_Roman_Emperor
11. Мешко I — хрещення 966; Болеслав I Хоробрий — король 1025 за згодою папи Іоанна XIX; Іштван I — Різдво 1000 / 1.01.1001, корона від Сильвестра II (`note`) — https://en.wikipedia.org/wiki/Stephen_I_of_Hungary ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/stephen-i ; https://en.wikipedia.org/wiki/Civitas_Schinesghe
12. Золота сицилійська булла: Базель, 26.09.1212, Фрідріх II, спадковий королівський титул Пржемисловичів (Пржемисл Отакар I) — https://en.wikipedia.org/wiki/Golden_Bull_of_Sicily ; https://commons.wikimedia.org/wiki/File:Golden_Bull_of_Sicily.jpg (опис Нац. архіву ЧР) ; https://english.radio.cz/node/8159221
13. Темуджин бл. 1162 (дата спірна: 1155/1162/1167), Чингісхан з 1206, помер 1227; Хубілай — назва «Юань» 1271, підкорення Сун 1279 — https://www.worldhistory.org/Kublai_Khan ; https://www.newworldencyclopedia.org/entry/Yuan_dynasty ; https://en.wikipedia.org/wiki/Genghis_Khan
14. Пайцза Met 1993.256, кінець XIII ст., залізо зі сріблом, 18,1 см; напис «Силою Вічного Неба — наказ імператора [хана]. Хто не шануватиме, буде винен» — https://www.metmuseum.org/art/collection/search/39624 ; https://www.metmuseum.org/toah/works-of-art/1993.256
15. Плано Карпіні: виїхав з Ліона 16.04.1245 за дорученням Інокентія IV; про Київ — «дуже велике й людне місто… ледве 200 будинків» — https://pages.uoregon.edu/kimball/MNG.htm ; https://warhistory.org/ru/article/siege-of-kiev ; https://www.newadvent.org/cathen/12071c.htm
16. Калка 1223, Київ 1240, Данило в Батия 1246, Дорогичин 1253, Ярослав 1245, Польща й Угорщина 1241 — facts/hist №93, №94, №130.

**Зображення (D-027):** l1 — bayeux-harold.jpg (CC0 фото / PD); l2 — canossa.jpg (Vat. lat. 4922, PD); l3 — golden-bull-sicily.jpg (PD); l4 — genghis-portrait.jpg (Нац. палацовий музей, PD) і paiza.jpg (Met, CC0); l5 — magna-carta.jpg (BL, PD). Усі через thumb.wikimedia.org / images.metmuseum.org, ≤ 250 КБ.

**Сумнівні місця для верифікатора:**
- l1 е3: «Вільгельм претендував на трон» — без деталей обіцянки Едуарда Сповідника (спірна).
- l2 е3: «До неї входили німецькі землі, Чехія й північ Італії» — для 962 р. Чехія — радше залежна; можна уточнити.
- l3: «Іштван I» (а не «Стефан I») — TERM в inbox; Болгарське царство з програми не взято (обсяг уроку).
- l4 е3: датування альбому Юань — Commons дає і «XIV ст.», і «копія портрета 1278 р.»; в уроці лише «для імператорів Юань» (після 1271 р.), що достатньо для висновку.
- l4 е1: «батька отруїли» — за «Таємною історією монголів».
- Опори link: l1 е4 і е6 — «Пригадай» на самому екрані/е5; l2 е9 — сам екран + е7–е8; l3 е7 — е3 (корона Іштвана від папи, Болеслав за згодою папи); l4 е7 — е5–е6; l4 е9 — сам екран; boss е6 — l4.
- Barbarossa і Генеральні штати — по одному реченню (персоналії програми); Луї IX, Філіп IV, Елеонора Аквітанська, Річард Левове Серце — не взято.
