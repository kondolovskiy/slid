---
claimed_from: todo
claimed_at: 2026-11-04T13:05:49.785Z
id: write-world-w9s3
type: write-section
subject: world
grade: 9
section: w9s3
weeks: [15, 21]
status: review
claimed_by: writer-write-world-w9s3
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Нові держави і реформи 1850–1870-х» (Всесвітня історія, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як постали Італія й Німеччина, як Кримська війна і реформи змінили Росію та Австрію.

## Теми уроків (з плану)
1. Кримська війна
2. Об'єднання Італії
3. Бісмарк і Німецька імперія
4. Австро-Угорщина
5. Червоний Хрест і правила війни
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
- Файл `content/world/g9-w9s3.js` з `SLID.section("world", { id: "w9s3", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w9s3/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w9s3` — 0 помилок, 0 попереджень (build — лише в копії дерева в scratchpad; у спільному дереві build не запускав)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-write-world-w9s3, 2026-11-04)
Файл `content/world/g9-w9s3.js` — 6 уроків, усі `draft`; значок фіналу `newstates` («Репортер нової Європи»). 12 фото в `img/world/w9s3/` (усі використані на екранах). `validate --section w9s3` — 0/0; `stats --subject world` — уроки w9s3 без прапорців; `playtest.py --section w9s3` у копії дерева (scratchpad, build у копії) — 6/6. **Оркестратору:** build у спільному дереві (новий файл + 12 нових jpg) і playtest --section w9s3.

| Урок | Тема | Екранів (завдань) | Типи | Зображення |
|---|---|---|---|---|
| w9s3l1 «Ядра на дорозі» | Кримська війна | 10 (6) | choice, number, order; link | Фентон, два знімки яру 1855 |
| w9s3l2 «Чобіт для короля» | Об'єднання Італії | 10 (6, з них 1 hyp) | choice, sort, order | «Панч» 17.11.1860; карта Шеферда 1911 |
| w9s3l3 «Залізом і кров'ю» | Бісмарк і Німецька імперія | 10 (6) | choice, order, sort | Вернер, версія 1885 |
| w9s3l4 «Одна корона на двох» | Австро-Угорщина | 10 (6, з них 1 hyp) | choice, sort, order; link | Енгерт 1872; карта Шеферда 1911 |
| w9s3l5 «Усі — брати» | Червоний Хрест і правила війни | 10 (6) | choice, multi, order | Івон 1861; обкладинка Дюнана 1862; діаграма Найтінгейл 1858; Женевська конвенція 1864 |
| w9s3l6 «Репортаж з нової Європи» (boss) | фінал | 7 (6: по одному на урок + хронологія) | choice, multi, order; link | Фентон, «Фургон художника» 1855 |

`sk: "link"`: l1 #9 (Крим — Таврійська губернія; поразка → Маніфест 1861 — «Пригадай» на екрані, hist g9s1/g9s3), l4 #6 (Галичина/Буковина — Відень, Закарпаття — Будапешт; виводиться з l4 #4 «межа по кордону земель угорської корони» + «Пригадай» hist g9s1), boss #5.

### Зображення (урок → файл → ліцензія → URL)
- l1 `fenton-valley-ditch.jpg` — Р. Фентон, 1855, перший знімок (ядра в рові), PD — https://commons.wikimedia.org/wiki/File:Valley_of_the_Shadow_of_Death,_2.jpg (джерело на Commons — блог NYT/Морріс; сам знімок PD).
- l1 `fenton-valley-road.jpg` — Р. Фентон, 1855, LoC LC-USZC4-9217, PD — https://commons.wikimedia.org/wiki/File:RogerFentonvalley1.jpg (реставрована версія).
- l2 `punch-boot-1860.jpg` — Дж. Тенніел, «Панч» 17.11.1860, NYPL Digital ID 815129, PD — https://commons.wikimedia.org/wiki/File:Right_leg_in_the_boot_at_last..jpeg
- l2 `italy-unification-map.jpg` — W. R. Shepherd, Historical Atlas 1911, PD — https://commons.wikimedia.org/wiki/File:Italy_unification_1815_1870.jpg
- l3 `kaiserproklamation-1885.jpg` — А. фон Вернер, 3-тя версія 1885, Музей Бісмарка (Фрідріхсруе), PD — https://commons.wikimedia.org/wiki/File:Anton_von_Werner_-_Kaiserproklamation_am_18._Januar_1871_(3._Fassung_1885).jpg
- l4 `coronation-buda-1867.jpg` — Е. фон Енгерт, Szépművészeti Múzeum 92.6.B, PD — https://commons.wikimedia.org/wiki/File:Eduard_Engerth_-_Ferenc_József_és_Erzsébet_koronázása_(Queen).jpg . **Commons датує 1883, музей — 1872** (https://www.mfab.hu/artworks/234/) — у cap/credits 1872 за музеєм.
- l4 `austria-hungary-peoples-1911.jpg` — W. R. Shepherd 1911, PD — https://commons.wikimedia.org/wiki/File:Austria_hungary_1911.jpg (карта 1911 р., з Боснією; написи в застосунку нечитабельні — завдання спирається на перелік легенди в body).
- l5 `solferino-yvon.jpg` — А. Івон 1861, Палац Комп'єнь (Joconde 000PE009456), PD (фото — AndreasPraefcke, PD-self) — https://commons.wikimedia.org/wiki/File:Yvon_Bataille_de_Solferino_Compiegne.jpg
- l5 `souvenir-solferino-1862.jpg` — фото RomanDeckert, CC BY-SA 4.0 (книжка PD) — https://commons.wikimedia.org/wiki/File:ICRC-Library_HenryDunant_UnSouvenurDeSolferino-1stEdition.jpg
- l5 `nightingale-diagram-1858.jpg` — Ф. Найтінгейл 1858, PD (David Rumsey) — https://commons.wikimedia.org/wiki/File:Nightingale-mortality.jpg
- l5 `geneva-convention-1864.jpg` — фото ICRC (Flickr), CC BY-SA 2.0 (FlickreviewR 6.03.2013); документ — Швейцарський федеральний архів — https://commons.wikimedia.org/wiki/File:1864_Geneva_Convention.jpg
- l6 `fenton-van.jpg` — Р. Фентон 1855, LoC LCCN 2001697111, PD, обрізано кольорову шкалу скану — https://commons.wikimedia.org/wiki/File:The_artist%27s_van_LCCN2001697111.jpg (людину на фургоні не називаю: LoC-тег «Sparling, Marcus» не підтверджено).

### Факти (≥ 2 джерела; для facts/world.md після verify)
1. Кримська війна 1853–1856: окупація Молдавії й Валахії — липень 1853; Османи оголосили війну — жовтень 1853; Франція/Британія — 27/28.03.1854; привід — вимога Росії захисту православних і святі місця; Британія і Франція — проти посилення Росії. https://en.wikipedia.org/wiki/Crimean_War ; https://www.nam.ac.uk/explore/crimean-war
2. Висадка в Криму — вересень 1854 (14.09, Каламітська затока); бомбардування Севастополя з 17.10.1854; 8.09.1855 французи взяли Малахів курган, росіяни залишили місто (≈ 11 міс.). Ті самі URL.
3. Втрати союзників: 165 363 загиблих, з них 119 593 (≈ 72 %) — не в бою, переважно хвороби → «з кожних десяти — сім». https://en.wikipedia.org/wiki/Crimean_War ; NAM (холера, хвороби, зима 1854–1855).
4. Паризький мир 30.03.1856 — Росії заборонено флот на Чорному морі. https://en.wikipedia.org/wiki/Crimean_War ; https://www.nam.ac.uk/explore/crimean-war
5. Фентон у Криму 8.03–22.06.1855, > 350 негативів, довга витримка → лише нерухоме, загиблих не знімав; два знімки «Долини смертної тіні» з одного місця того самого дня (ядра в рові / на дорозі); Морріс — камінці на схилі → версія з ядрами на дорозі друга; не всі історики згодні. https://en.wikipedia.org/wiki/Roger_Fenton ; https://publicdomainreview.org/collection/roger-fenton-valley-of-the-shadow-of-death/ ; https://blogs.loc.gov/picturethis/2017/03/witness-to-history-roger-fentons-photographs-of-the-crimean-war/ ; https://collections.vam.ac.uk/item/O128022/valley-of-the-shadow-of-photograph-fenton-roger/ (дата 23.04.1855 — Commons і photographytalk; в уроці лише «1855 р.» / «весна»).
6. Слова Олександра II 1856 «краще згори…» і Маніфест 19.02.1861 — дослівно як у hist g9s3 (verified там).
7. Італія: після 1815 Ломбардо-Венеція — Австрії, Папська держава, Королівство обох Сицилій, Сардинія (П'ємонт, Турин); «Молода Італія» Мадзіні 1831; Кавур — голова уряду Сардинії; 1859 війна Сардинії й Франції з Австрією, Мадженто і Сольферіно (червень 1859), Ломбардія — Сардинії; Савоя й Ніцца — Франції (Туринський договір 24.03.1860); 1860 плебісцити в центрі; «тисяча» Гарібальді (травень 1860, з-під Генуї, червоні сорочки, ≈ 1089), Сицилія, Неаполь; Теано 26.10.1860; Королівство Італія 17.03.1861 (Турин); Венеція 1866 (союз із Пруссією); Рим 1870 (французи пішли), столиця 1871. https://en.wikipedia.org/wiki/Italian_unification ; https://en.wikipedia.org/wiki/Expedition_of_the_Thousand ; https://zpe.gov.pl/watek/LP190LTbYE/80/a/zjednoczenie-wloch/DdwPOAhHl ; https://en.wikipedia.org/wiki/Timeline_of_the_unification_of_Italy
8. «Панч» 17.11.1860, Тенніел, «Right leg in the boot at last», підпис Гарібальді «If it won't go on, Sire, try a little more powder» — з самого скану (NYPL) і Commons.
9. Бісмарк: міністр-президент Пруссії 23.09.1862; промова в бюджетній комісії 30.09.1862 «не промовами й ухвалами більшості — це була велика помилка 1848 і 1849 рр. — а залізом і кров'ю» (протокол у непрямій мові → «переказ протоколу»); канцлер 1871–1890. https://en.wikipedia.org/wiki/Otto_von_Bismarck ; https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/excerpt-from-bismarcks-blood-and-iron-speech-1862 ; https://en.wikiquote.org/wiki/Otto_von_Bismarck
10. Війни: Данія 1864 (Шлезвіг, Гольштейн, разом з Австрією); Садова/Кеніггрец 3.07.1866 («семитижнева»); Північнонімецький союз 1867; Седан 1.09.1870, полон Наполеона III; проголошення 18.01.1871 у Дзеркальній залі Версаля; Франкфуртський мир 10.05.1871 — Ельзас і частина Лотарингії, 5 млрд франків. https://en.wikipedia.org/wiki/Unification_of_Germany ; https://en.wikipedia.org/wiki/Otto_von_Bismarck ; https://www.history.com/this-day-in-history/May-10/treaty-of-frankfurt-am-main-ends-franco-prussian-war ; https://www.britannica.com/event/Franco-German-War (сніпет)
11. Картина Вернера, версія Фрідріхсруе 1885: подарунок на 70-річчя Бісмарка (замовлена в лютому 1885, вручена 1.04.1885); Бісмарк у білому кірасирському мундирі, хоча 18.01.1871 був у синьому; доданий Роон, якого в залі не було; Вернер був присутній у Версалі. https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/anton-von-werner-the-proclamation-of-the-german-empire-january-18-1871-friedrichsruh-version-1885 ; https://en.wikipedia.org/wiki/Proclamation_of_the_German_Empire_(paintings)
12. Австро-Угорська угода 1867: коронація Франца Йосифа в Буді 8.06.1867 короною св. Іштвана; спільні — монарх, зовнішні справи, армія, фінанси на них; окремі парламенти й уряди; причини — 1859, 1866, фінанси; 1849 — повстання придушено з російською допомогою. https://en.wikipedia.org/wiki/Austro-Hungarian_Compromise_of_1867 ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CA%5CU%5CAustria6Hungary.htm (Галичина, Буковина — австрійська частина; Закарпаття — угорська)
13. Основний закон 21.12.1867, ст. 19: «Alle Volksstämme des Staates sind gleichberechtigt…» (переказ). https://www.wipo.int/wipolex/zh/legislation/details/10045 ; https://en.wikipedia.org/wiki/December_Constitution
14. Галичина після 1860-х: адміністрацію й сейм у Львові контролювала польська шляхта (Голуховський); вимоги українців — поділ краю, школи, університет у Львові. https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm ; https://en.wikipedia.org/wiki/Kingdom_of_Galicia_and_Lodomeria
15. Сольферіно 24.06.1859 — понад 40 тис. убитих і поранених; Дюнан, Кастільйоне, «Tutti fratelli»; книжка 1862 (власним коштом) — дві пропозиції; комітет п'яти 17.02.1863; Женевська конвенція 22.08.1864 — 12 держав (перелік — на першій сторінці документа), знак — червоний хрест на білому. https://en.wikipedia.org/wiki/Henry_Dunant ; https://www.redcross.org.rs/en/about-us/history/međunarodni-pokret-ckcp-icrc-i-ifrc/ ; https://en.wikipedia.org/wiki/First_Geneva_Convention
16. Червоний півмісяць — Османська імперія у війні з Росією 1877–1878; визнано 1929. https://en.wikipedia.org/wiki/Emblems_of_the_International_Red_Cross_and_Red_Crescent_Movement ; https://www.icrc.org/eng/assets/files/other/icrc_002_0778.pdf (через пошук)
17. Росія й Австрія приєдналися до конвенції 1864 пізніше (у 1866 р. ще ні; «протягом трьох років — усі великі держави»). https://history.state.gov/historicaldocuments/frus1866p2/d172 ; https://www.britannica.com/EBchecked/topic/229047/Geneva-Conventions (сніпет)
18. Найтінгейл: відправлена 21.10.1854 з 38 жінками, у Скутарі (Селіміє) — на початку листопада 1854; тиф, холера, дизентерія; санітарна комісія — березень 1855 (стоки, вентиляція), смертність різко впала; діаграма 1858. https://en.wikipedia.org/wiki/Florence_Nightingale ; https://www.nam.ac.uk/explore/crimean-war ; https://commons.wikimedia.org/wiki/File:Nightingale-mortality.jpg
19. Сумнівне / не використано: точний день висадки Гарібальді (11 чи 13.05.1860) — в уроці «травень»; день взяття Неаполя — «восени»; походження знака з прапора Швейцарії (історик Буасьє: «доказів не знайдено») — не вживав; Пирогов у Севастополі й кримські татари після війни — не вживав (не встиг звірити з 2 джерелами).

### Опори завдань (D-019), де неочевидно
- l1 #2 — порівняння двох знімків (видно на екранах 1–2). l1 #9 link — «Пригадай» 1861 на екрані + цитата «згори»; відповідь — міркування.
- l2 #8 — спирається на #7 (Теано) і підпис на скані. l2 #9 — факти в body, відповідь з тексту.
- l3 #9 — усі подробиці (білий/синій мундир, Роон, подарунок) — у body; на фото видно білий мундир у центрі.
- l4 #6 link — #4 («межа по кордону земель угорської корони») + «Пригадай» (Закарпаття в Угорському королівстві, hist g9s1).
- l5 #2 fbText називає Наполеона III (вершник у центрі): його союз із Сардинією й Сольферіно — l2 #5; оцінюється лише «вершник серед генералів» (видно).
- l5 #6 multi — перелік сторін у body (переклад із самого документа); boss #2 (Фентон, довга витримка) — l1 #7.

### Пропозиції
- TERM (glossary/world): Микола I, Олександр II, Роджер Фентон, Ерол Морріс, Малахів курган, Паризький мир 1856; Джузеппе Мадзіні, Камілло Кавур, Джузеппе Гарібальді, Віктор Емануїл II, Наполеон III, Рісорджименто, Королівство обох Сицилій, Папська держава, Мадженто, Сольферіно, Теано, «тисяча» (червоні сорочки), Джон Тенніел; Отто фон Бісмарк, Вільгельм I, Садова (Кеніггрец), Седан, Північнонімецький союз, Франкфуртський мир, Антон фон Вернер, Роон, канцлер; Франц Йосиф, Австро-Угорщина, угода 1867 р. (дуалізм — слово не вживав), Едуард фон Енгерт, корона святого Іштвана; Анрі Дюнан, Кастільйоне, «Спогад про Сольферіно», Міжнародний комітет Червоного Хреста, Женевська конвенція, Флоренс Найтінгейл, Скутарі, Адольф Івон.
- Commons 04.11: api.php — 429 з першого запиту; Special:MediaSearch і сторінки файлів через WebFetch + thumb.wikimedia.org з паузами ≈ 21 с — без збоїв (12 файлів).

