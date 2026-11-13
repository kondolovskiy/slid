---
claimed_from: todo
claimed_at: 2026-11-12T14:32:45.423Z
id: write-hist-g8s6
type: write-section
subject: hist
grade: 8
section: g8s6
weeks: [32, 35]
status: done
claimed_by: writer-hist-g8s6
created: 2026-11-10
---
# Написати розділ «Карпати, Південь і культура козацької доби» (Історія України, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як жили землі поза Гетьманщиною у XVIII ст. і що лишила нам культура козацької доби.

## Теми уроків (з плану)
1. Ракоці й опришки: Закарпаття і Карпати (Олекса Довбуш)
2. Південь після 1775 р.: нові міста, переселенці й «межа осілості»
3. Козацьке бароко: Мазепині храми, Києво-Могилянська академія, Феофан Прокопович
4. Григорій Сковорода і школи XVIII ст.
5. Музика і камінь: Бортнянський, Березовський, Ведель, Пінзель, Ковнір, Григорович-Барський
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Специфіка (curate-hist-coverage, 2026-11-10)
- Підстава: reports/research/coverage-research-hist-coverage-g7-9.md §4.2 B8, таблиця §3 (8 кл., розд. IV–V): одиниці 8.4.13, 8.4.14, 8.5.7, 8.5.10, 8.5.12. Програма Гісема (URL у звіті §1), 8 кл. с. 21–36.
- Уроки g8s6l1–g8s6l6 (l6 — фінал). Тижні 32–35; g8s5 переходить на [27, 31] (задача fix-hist-weeks-cov). `requires: ["g8s5l5"]`.
- Перетин 8.5.5 (верифікатор §8.4) розв'язано так: **Калнишевського й ліквідацію Січі 1775 р.** вчить g8s5l5 (revise-hist-g8s5-cov), **Задунайську Січ** — g9s1l6 (revise-hist-g9s1-cov). Урок 2 тут — Південь після 1775 р. (нові міста, переселенці, «межа осілості»), про Січ лише одним реченням-посиланням.
- Культурні уроки 3–5 — обов'язковий зміст програми (ПУ, «дає характеристику» персоналій); форма — урок. Сковороду вже знайомить h56 (5 кл.): не повторюй біографію, дай його як учителя й філософа XVIII ст. Мазепу як мецената — коротко, з посиланням на g8s5l1.
- Усі дати (Ракоці 1703–1711, Довбуш, «межа осілості» 1791, Пінзель, Бортнянський, Березовський, Ведель, Ковнір, Григорович-Барський) — у реєстрі їх немає: ≥ 2 джерела (ЕІУ, ЕСУ, EoU). Довбуша подавати як історичну постать, а легенди — як легенди.
- Пріоритет у звіті має розділ «Незалежна верифікація» (виправлення верифікатора важливіші за текст автора звіту).
- id уроків — лише нові, у форматі `<id розділу>l<n>` (D-017); фінал — останній, `boss: true`, власний значок у `sec.badges`.
- D-027: у кожному уроці ≥ 1 справжнє `img` (скіл `hist-images`; на Вікісховищі одночасно ≤ 2 агенти).
- Факти: спершу memory/long/facts/hist.md і hist-2.md; новий факт — ≥ 2 надійні джерела з URL у нотатках. Рядки FACT у memory/short/inbox.md від дослідників і верифікаторів 10.11 — підказка, не реєстр: позначене ⚠ звір сам.
- Після написання — незалежна перевірка `content-verifier` (задача → review).

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- Скіл зображень `.claude/skills/hist-images/SKILL.md` і docs/IMAGES.md (D-027)
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js
- Розділи цього ж класу з уроками: g8s1, g8s2, g8s3, g8s4, g8s5 — вирівнюйся по них

## Результат
- Файл `content/hist/g8-g8s6.js` з `SLID.section("hist", { id: "g8s6", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/hist/g8s6/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8s6` — 0 помилок
- [x] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
### Зроблено (writer-hist-g8s6, 2026-11-12)
Файл `content/hist/g8-g8s6.js`, 6 уроків (status: draft), `requires: ["g8s5l5"]`, weeks [32, 35], значок `baroquetrace`.
- **g8s6l1** «Замок, гори й ватага» (9 екр.): війна куруців 1703–1711, русини, Ілона Зріні й Мукачево (гравюра), опришки, Довбуш — документ і легенда, «портрет Добощука» як джерело.
- **g8s6l2** «Степ після Січі» (10): паланки, Херсон 1778 (на місці Олександр-шанцу), Маріуполь (греки з Криму 1778), Миколаїв 1789, переселенці, клімат і господарство, межа осілості 1791 (карта 1905). Січ і Калнишевський — лише посилання на розділ 5 (перетин 8.5.5). Одеса — лише в g9s1l7.
- **g8s6l3** «Храми гетьманської доби» (10): козацьке бароко (ознаки — опора на w8s2), Вознесенський собор у Переяславі, меценат, академія 1701 і «Мазепин» корпус 1703, Феофан Прокопович («Володимир» 1705, після 1709 — на службі царя, «Духовний регламент»).
- **g8s6l4** «Учитель, що не поступився» (8): парафіяльні школи, колегіуми (Чернігів 1700, Переяслав 1738), Сковорода як учитель (не біографія — h56), сродна праця; src-завдання «будинок 1753 vs Сковорода 1751».
- **g8s6l5** «Хор, різець і мур» (10): Березовський, Бортнянський, Ведель; Пінзель; Ковнір і Григорович-Барський.
- **g8s6l6** фінал «Музей козацької доби»: 7 завдань з `pre` (l1 ×2, l2, l3 ×2 — Прокопович і бароко, l4, l5).
Позиції правильних choice: l1 0/2/1, l2 2/0, l3 0/2/1, l4 0/2, l5 2/1, фінал 2/0/1/0/2; multi — [0,2,4], [1,2,4], [1,2,3], [0,2,3].

### Перевірки
- `node tools/validate.mjs --section g8s6` — 0 помилок, 0 попереджень (id справжній: 6 уроків у звіті).
- `node tools/euphony.mjs --subject hist --section g8s6` — 0 відхилень.
- `node tools/stats.mjs --subject hist` — g8s6l1–l6 без прапорців (l4 longWordShare і фінал maxReadWords виправлено).
- Build не запускав; playtest — локально без python-playwright (CI).

### Зображення (D-027; Вікісховище, мініатюри thumb.wikimedia.org, 960 px, q78)
- l1: `rakoczi-manyoki-1712.jpg` — Á. Mányoki, 1712, Угорська нац. галерея (PD-Art) — https://commons.wikimedia.org/wiki/File:M%C3%A1nyoki,_%C3%81dam_-_Portrait_of_Prince_Ferenc_R%C3%A1k%C3%B3czi_II_-_Google_Art_Project.jpg
- l1, фінал: `mukachevo-thelott.jpg` — Й. А. Телотт, кн. Рікота/Сагредо, Аугсбург 1701 (PD) — https://commons.wikimedia.org/wiki/File:Mongats_(Mukachevo_-_Palanok_Castle),_c._1680s.jpg
- l1: `dovbush-portrait.jpg` — «Portret Doboszczuka», невідомий автор, Polona / Нац. бібліотека Польщі (PD; Commons дає дату 12.01.1746 без обґрунтування; напис на аркуші — пізніша примітка: «був оправлений з Kuryerem Polskim з р. 1746»). Подано обережно, як джерело з невідомою схожістю — https://commons.wikimedia.org/wiki/File:Aleksy_Dobosz_grafika.jpg
- l2: `pale-map-1905.jpg` — The Jewish Encyclopedia, т. 10, 1905, с. 531 (PD) — https://commons.wikimedia.org/wiki/File:Map_showing_the_percentage_of_Jews_in_the_Pale_of_Settlement_and_Congress_Poland,_The_Jewish_Encyclopedia_(1905).jpg (на карті й Царство Польське — у завданні не використано)
- l3: `pereiaslav-ascension.jpg` — Frunze103, 2018, CC0 — https://commons.wikimedia.org/wiki/File:Ascension_cathedral_in_Pereiaslav-Khmelnytskyi.jpg ; `img/h5-kma.jpg` (уже в репозиторії; Anntinomy, CC BY-SA 4.0); `prokopovych-mayr.jpg` — гравюра W. C. Mayr, Рейксмузеум RP-P-1908-4700, CC0 — https://commons.wikimedia.org/wiki/File:Portret_van_Feofan_Procopovi%C4%8D,_RP-P-1908-4700.jpg
- l4: `pereiaslav-collegium.jpg` — N. Shestakova, 2015, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Pereyaslav-Khmelnyskiy_G.Skovorody_Str._54_Ascension_Cathedral_Collegium_(YDS_1595).jpg
- l5: `bortniansky-belsky-1788.jpg` — М. Бєльський, 1788 (PD) — https://commons.wikimedia.org/wiki/File:%D0%91%D0%BE%D1%80%D1%82%D0%BD%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_(1788).jpg ; `pinzel-nepomuk-buchach.jpg` — Бучач-Львів, 2013, CC BY-SA 3.0 (колона Непомука в Бучачі — «приписують Пінзелю», EoU) — https://commons.wikimedia.org/wiki/File:J.-G.Pinzel._St._Yan_Nepomuk._Buchach.jpg ; `lavra-far-caves.jpg` — Wildcatjane, 2014, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:%D0%94%D0%B7%D0%B2%D1%96%D0%BD%D0%B8%D1%86%D1%8F_%D0%BD%D0%B0_%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D1%96%D1%85_%D0%BF%D0%B5%D1%87%D0%B5%D1%80%D0%B0%D1%8511.jpg
- Усі зображення переглянуто: зміст кадру відповідає `cap`. Сучасних пам'ятників немає (свобода панорами); будівлі XVIII ст.

### Факти (нові; ≥ 2 відкриті джерела)
1. Війна куруців (Ракоці) 1703–1711; русинські селяни Закарпаття в армії; Сатмарський мир 1711; Мукачево здалося останнім — https://uk.wikipedia.org/wiki/Ференц_II_Ракоці ; https://en.wikipedia.org/wiki/Rákóczi's_War_of_Independence ; EoU Transcarpathia (русини — особиста варта князя, «gens fidelissima» — лише EoU, тому в note як свідчення енциклопедії) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CR%5CTranscarpathia.htm
2. Ілона Зріні обороняла Мукачівський замок 1685–1688 (здала 17.01.1688) — https://en.wikipedia.org/wiki/Ilona_Zrínyi ; uk.wiki Ференц II Ракоці.
3. Опришки — XVI — перша пол. XIX ст.; втікачі-селяни, слуги; маєтки, купці; селяни переховували — EoU http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CP%5COpryshoks.htm ; https://uk.wikipedia.org/wiki/Опришки (ЕІУ т. 7)
4. Довбуш бл. 1700–1745; ватага 1738–1745 (документи — протоколи допитів); загинув 1745 у Космачі від пострілу Стефана Дзвінчука; скарби й любовна історія — легенди, за свідченням Дзвінчука — сварка через посаг — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CO%5CDovbushOleksa.htm ; https://www.radiosvoboda.org/a/oleksa-dovbush-istorychna-postat-kinoheroy/32610465.html (М. Волощук) ; https://uk.wikipedia.org/wiki/Олекса_Довбуш . Епізод про посаг — одне джерело (РС), подано в note як слова історика.
5. Херсон — указ 1778, фортеця й верф на місці запорозького Олександр-шанцу (1737, Перевізька паланка) — https://uk.wikipedia.org/wiki/Херсон ; https://en.wikipedia.org/wiki/Kherson_fortress
6. Миколаїв — верф 1788, місто 1789, гирло Інгулу — https://uk.wikipedia.org/wiki/Миколаїв ; EoU Southern Ukraine (порт). В уроці — «1789 р.».
7. Маріуполь: Кальміуська паланка; 1778 козаків вивели, переселили греків із Криму; назва 1780 — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CM%5CA%5CMariupol.htm ; g9s1l7 (верифіковано: греки на Півдні). ⚠ Рік 1778 для греків — EoU; друге джерело — en/uk.wiki «Маріуполь» (не відкривав окремо) → верифікатору.
8. Новоросійська губернія 1764, землі Запорожжя 1775 поділено між Новоросійською та Азовською; роздача земель офіцерам/дворянам, утікачі — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CN%5CE%5CNewRussiagubernia.htm ; «Новоросія» як імперська назва — EoU Southern Ukraine.
9. Клімат Півдня: помірно континентальний, сухий, посухи й суховії, мінливі врожаї — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CO%5CSouthernUkraine.htm (друге — шкільна географія; чорноземи — без окремого URL).
10. Межа осілості 1791 (Катерина II, список місцевостей з Катеринославщиною й Таврією); 1794–1795 розширена (Волинь, Поділля, Чернігівщина, Полтавщина); скасована 1917 — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CA%5CPaleofSettlement.htm ; https://uk.wikipedia.org/wiki/Смуга_осілості
11. Вознесенський собор у Переяславі — коштом Мазепи, 1695–1700 (в уроці «наприкінці XVII ст.») — https://www.radiosvoboda.org/a/882176.html ; список храмів Мазепи (unian) https://www.unian.net/common/amp-383255-vozmuschenie-mazepoy-nevejestvo-ili-bezbojie.html
12. Академія: 1701 — назва «академія» (грамота Петра I), 1703 — Мазепа дав кошти на кам'яний («Мазепин») корпус, щорічні гроші на книжки й стипендії — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CY%5CKyivanMohylaAcademy.htm ; https://www.radiosvoboda.org/a/ivan-mazepa-kyyevo-mohylyanska-akademiya/32039975.html ; https://charity.ukma.edu.ua/materials/18 . 1632 — facts №38.
13. Козацьке бароко: замовники — козацтво/старшина; кам'яні храми за планом дерев'яних хрещатих; стриманіший декор — https://uk.wikipedia.org/wiki/Українське_бароко ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBaroque.htm
14. Прокопович: випускник, викладач (поетика, риторика), ректор КМА; «Володимир» 1705, присвята Мазепі; після 1709 засуджував Мазепу, проповідь на річницю Полтави; Петербург; «Духовний регламент» — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProkopovychTeofan.htm ; https://uk.wikipedia.org/wiki/Феофан_Прокопович . Рік народження (1677/1681), роки ректорства (1710/1711–1716) і регламенту (1720/1721) розходяться — в уроці без них.
15. Колегіуми: Чернігівський 1700, Переяславський 1738, латина, «доступні всім станам» — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CO%5CCollege.htm ; музей Сковороди (travelsinua). Харківський — без року (1726/1734 розходяться).
16. Парафіяльні школи майже в кожній парафії Лівобережжя в 1-й пол. XVIII ст. — EoU Education («866 шкіл у 1099 селах», 1740–1747) і EoU Parochial schools («766 шкіл») — числа розходяться, в уроці без числа.
17. Сковорода: поетика в Переяславі 1751 (uk.wiki: 1750–1751; конфлікт з єпископом — лише uk.wiki, подано «біографи пишуть»); Харківський колегіум — поетика, грецька, етика; кілька звільнень; сродна праця — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CK%5CSkovorodaHryhorii.htm ; https://uk.wikipedia.org/wiki/Григорій_Сковорода ; 1722–1794 і мандри — facts №318.
18. Будинок Переяславського колегіуму почали зводити 1753 р. (тепер музей Сковороди) — EoU Pereiaslav College https://encyclopediaofukraine.com/pages%5CP%5CE%5CPereiaslavCollege.htm ; НУХТ https://dspace.nuft.edu.ua/jspui/bitstream/123456789/41501/1/18.pdf
19. Березовський 1745–1777, Глухів, Болонья, академік 1771, «Не отвержи мене…» — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CE%5CBerezovskyMaksym.htm ; https://uk.wikipedia.org/wiki/Максим_Березовський
20. Бортнянський 1751 Глухів — 1825 Петербург; ≈ 10 років в Італії; очолив придворний хор (1796) — https://uk.wikipedia.org/wiki/Дмитро_Бортнянський ; EoU https://www.encyclopediaofukraine.com/pages%5CB%5CO%5CBortnianskyDmytro.htm . «35 концертів» — лише uk.wiki → в уроці «десятки».
21. Ведель 1767–1808, Київ, КМА, 31 концерт, 1799 — оголошений божевільним і ув'язнений, твори заборонені — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CV%5CE%5CVedelArtem.htm ; https://uk.wikipedia.org/wiki/Артем_Ведель
22. Пінзель: народження невідоме, пом. бл. 1761; з сер. 1740-х у Бучачі, з Меретином; статуї фасаду собору св. Юра (1759–1761); камінь і дерево; Лувр 2012 — EoU https://www.encyclopediaofukraine.com/pages%5CP%5CI%5CPinzelJohannGeorg.htm ; https://uk.wikipedia.org/wiki/Йоган_Георг_Пінзель
23. Ковнір 1695–1786, з Гвоздова (Гвіздів) на Київщині, підданий Лаври, навчався на практиці; дзвіниця на Дальніх печерах 1754–1761, на Ближніх — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CO%5CKovnirStepan.htm ; https://uk.wikipedia.org/wiki/Степан_Ковнір . ⚠ Ковнірівський корпус: 1744–1745 (EoU) / 1721–1773 (uk.wiki) — без років. EoU (за переказом WebFetch) пише, що проєкт дзвіниці на Дальніх печерах — Григоровича-Барського; тому в уроці «зводив Ковнір», без «автор проєкту».
24. Григорович-Барський: нар. 1713, Київ, КМА; Покровська церква на Подолі (з 1766), Миколи Набережного (1772–1775); рік смерті 1785/1791 — не подано — https://uk.wikipedia.org/wiki/Іван_Григорович-Барський ; EoU Baroque ; https://en.wikipedia.org/wiki/Ivan_Grigorovich-Barsky

### Сумнівні місця / для верифікатора
- l1 е8 (портрет «Добощука»): дата аркуша — лише за написом і метаданими Polona/Commons; правильна відповідь сформульована обережно («якщо вірити напису»). Перевір переклад напису (читав з мініатюри).
- l1 е7 sort: «Влада роками не могла його схопити» — у кошику «Є в документах» (EoU: польські експедиції роками не могли спіймати; РС: документи канцелярій і реляції).
- l2 е4 — уявний запис чиновника («Уяви запис…»), не цитата.
- l2 е5 — «наприкінці XVIII ст. і на Південь прийшло кріпацтво» (en.wiki New Russia Governorate: указ 12.12.1796; EoU — закріпачення на півночі губернії) — без дати.
- l3 е9 (тлумачення зміни оцінок Прокоповича) — інтерпретація, подано як «найкраще пояснення з фактів уроку»; fbText — «історики бачать…».
- l5 intro: «Глухів — тоді столиця Гетьманщини» (1751 р.; facts №119, g8s5).
- Нових термінів на урок ≤ 5: l1 куруци, русини (повтор), опришки; l2 паланка, межа осілості, суховії; l3 козацьке бароко, меценат (повтор з 5 кл.), академія, «Духовний регламент»; l4 парафіяльна школа, колегіум, поетика, сродна праця; l5 хоровий концерт.
- Опора неочевидна: l3 е4 «Козацьке бароко — копія?» і фінал завд. 7 — опора l3 е3 (план дерев'яних церков, стриманіший декор); l5 е7 (multi бароко на фото) — ознаки бароко в body екрана + l3 е3 + world w8s2 «Бароко»; l5 е10 order — роки з l5 е3 і е8.

### Пропозиції
- world w9s2l4: тепер можна додати `link`/згадку про Бортнянського (g8s6l5) — пропозиція з refine-world-w9s2.
- g9s1l7 note «Про «межу осілості» — у 8 класі» тепер має адресу: g8s6l2.
- dgh9: можлива `pre`-тема «культура XVIII ст.» → g8s6l3–l5 (IDEA куратора 10.11).

