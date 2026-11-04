---
claimed_from: todo
claimed_at: 2026-11-04T07:34:56.029Z
id: write-world-w8s5
type: write-section
subject: world
grade: 8
section: w8s5
weeks: [29, 35]
status: review
claimed_by: writer-write-world-w8s5
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Доба Просвітництва» (Всесвітня історія, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати ідеї, з яких виросли сучасні права людини, і події XVIII ст.: від промислового перевороту до незалежності США.

## Теми уроків (з плану)
1. Просвітники: Локк, Вольтер, Монтеск'є
2. Освічений абсолютизм
3. Промисловий переворот в Англії
4. Незалежність США і Конституція
5. Поділи Речі Посполитої
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
- Файл `content/world/g8-w8s5.js` з `SLID.section("world", { id: "w8s5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w8s5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w8s5` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-write-world-w8s5, 2026-11-04.** Файл `content/world/g8-w8s5.js`, 6 уроків (5 тем + фінал), усі `draft`. validate --section w8s5: 0 помилок, 0 попереджень. stats: уроки w8s5 без прапорців. Playtest — у копії дерева (scratchpad, build у копії): 6/6 пройдено. Build у спільному дереві не запускав.

### Уроки
- l1 «Книжка, що налякала короля» (9 екр.) — «Енциклопедія», Локк, Монтеск'є, Вольтер; src — рік M.DCC.LI на титулі; crit — фраза Е. Голл, приписувана Вольтерові.
- l2 «Філософи на троні» (9) — освічений абсолютизм: Фрідріх II, Марія Терезія, Йосиф II, Катерина II («Наказ»); **link** — 1764/1775/1783 (Гетьманщина, Січ, закріпачення) на екрані «Пригадай».
- l3 «Фабрика в долині» (10) — Кей, Гарґрівс, Аркрайт (Кромфорд), Ватт; терміни мануфактура, фабрика, промисловий переворот.
- l4 «Тринадцять колоній» (10) — 13 колоній, Бостон 1773, Декларація 1776 (цитата → Локк), Саратога, Йорктаун, Паризький мир 1783, Костюшко, Конституція 1787, Білль про права 1791; crit — картина Трамбулла (не підписання, є відсутні), рівність і рабство.
- l5 «Держава, яку з'їли сусіди» (10) — поділи 1772/1793/1795, Конституція 3 травня 1791, повстання Костюшка 1794; **link** — sort земель Австрія/Росія (з екрана, facts/hist №131).
- l6 фінал «Словник XVIII століття» (7: intro + 5 питань, по одному на урок, + хронологія; шаблон w7s1l5; рішення 04.11 — до 7 завдань). Значок `enlight`.
- `requires: ["w8s4l1", "w8s4l2"]` — абсолютизм Луї XIV і «Білль про права» 1689 р. згадано як «Пригадай».

### Зображення (D-027, усі суспільне надбання)
- l1 `encyclopedie-1751.jpg` — https://commons.wikimedia.org/wiki/File:Encyclopedie_de_D%27Alembert_et_Diderot_-_Premiere_Page_-_ENC_1-NA5.jpg (ARTFL, PD-old-100).
- l2 `catherine-levytsky-1783.jpg`, `joseph-ii-maron-1775.jpg` — копії перевірених файлів з img/hist/g9s1 (facts/hist №292, 293).
- l3 `arkwright-mills-wright.jpg` — Джозеф Райт з Дербі, «Arkwright's Mills», бл. 1795–1796, Derby Museum 2016-56/2 — https://commons.wikimedia.org/wiki/File:Joseph_Wright_of_Derby_(1734-1797)_-_Arkwright%27s_Mills_-_2016-56-2_-_Derby_Museum_and_Art_Gallery.jpg (Art UK 403 — котра саме фабрика зображена, не встановлено; у підписі лише назва картини).
- l4 `declaration-trumbull.jpg` — https://commons.wikimedia.org/wiki/File:Declaration_of_Independence_(1819),_by_John_Trumbull.jpg; Commons дає «1819», Architect of the Capitol — написано серпень 1817 — вересень 1818, показано жовтень 1818 → у cap «1817–1818 рр.».
- l5 `partition-cake-1773.jpg` — копія з img/hist/g9s1.
- l6 `us-constitution-p1.jpg` — https://commons.wikimedia.org/wiki/File:Constitution_of_the_United_States_-_DPLA_-_9ca804144bd5965e992ae3528bc3c6a3_(page_1).jpg (NARA, PD-USGov; сторінка `Constitution_of_the_United_States,_page_1.jpg` веде на цей файл).
- Мініатюри — upload.wikimedia.org/thumb (лише стандартні ширини 960/1280; 800px дав 400), паузи ≥ 15–20 с.

### Факти (нові для facts/world.md; ≥ 2 джерела)
1. Локк (1632–1704), «Два трактати про врядування» — анонімно, грудень 1689 (на титулі 1690); природні права — життя, свобода, власність (estate); право народу змінити владу, що порушує довіру — https://en.wikipedia.org/wiki/Two_Treatises_of_Government ; https://iep.utm.edu/locke-po/ ; https://plato.stanford.edu/entries/locke-political/
2. Монтеск'є (1689–1755), «Про дух законів» 1748 (анонімно, Женева); три влади — законодавча, виконавча, судова, «влада стримує владу» — https://plato.stanford.edu/entries/montesquieu/ ; https://en.wikipedia.org/wiki/The_Spirit_of_Law
3. «Енциклопедія» 1751–1772, Дідро (і д'Аламбер до 1758/59), 17 т. тексту + 11 т. гравюр = 28; привілей скасовано 1759 (тимчасово — і 1752); титул тому I: «M. DCC. LI.», «Avec approbation et privilege du Roy» (видно на скані) — https://en.wikipedia.org/wiki/Encyclop%C3%A9die ; https://www.worldhistory.org/Encyclopedie/ (1751, Дідро); скан на Commons.
4. Вольтер (Ф.-М. Аруе, 1694–1778), Бастилія 1726 (також 1717), «Філософські листи» 1734, справа Каласа, віротерпимість — https://www.worldhistory.org/Voltaire/ ; https://en.wikipedia.org/wiki/Voltaire
5. «I disapprove of what you say, but I will defend to the death your right to say it» — Евелін Беатріс Голл (S. G. Tallentyre), «The Friends of Voltaire», 1906; не Вольтер — https://en.wikipedia.org/wiki/Evelyn_Beatrice_Hall ; https://quoteinvestigator.com/2015/06/01/defend-say/
6. Фрідріх II — король 31.05.1740 – 17.08.1786; «перший слуга держави»; скасував більшість судових катувань; листування з Вольтером; Королівська Пруссія 1772 — https://en.wikipedia.org/wiki/Frederick_the_Great ; https://www.worldhistory.org/Frederick_the_Great/
7. Марія Терезія 1740–1780; Загальний шкільний статут 6.12.1774 — обов'язкова початкова школа для дітей обох статей 6–12 р. (Фельбігер) — https://en.wikipedia.org/wiki/Maria_Theresa ; https://solskimuzej.si/en/tema/the-origins-of-state-education/ ; https://en.wikipedia.org/wiki/Education_in_Austria
8. Йосиф II — патент про віротерпимість 13.10.1781 (лютерани, кальвіністи, православні — приватні богослужіння) — https://en.wikipedia.org/wiki/Patent_of_Toleration ; facts/hist №135 (Йосиф II).
9. Катерина II 1762–1796; листування з Вольтером з 15.10.1763 до 1778; купила його бібліотеку (1778, ≈ 6800 т., тепер РНБ) — https://en.wikipedia.org/wiki/Catherine_the_Great ; https://www.metmuseum.org/art/collection/search/205459 ; https://prlib.ru/en/events/663829
10. «Наказ» 1767: понад 400 з 655 статей — з Монтеск'є, Беккаріа та ін.; комісія кодексу не ухвалила; у Франції заборонено 1769 — https://en.wikipedia.org/wiki/Nakaz ; https://en.wikipedia.org/wiki/Catherine_the_Great
11. Кей — «летючий човник» 1733 (подвоїв продуктивність ткача); Гарґрівс — «Дженні» 1764–1765, патент 1770, опір прядильників → переїзд до Ноттінгема — https://en.wikipedia.org/wiki/Spinning_jenny ; https://en.wikipedia.org/wiki/James_Hargreaves ; https://hti.osu.edu/sites/hti.osu.edu/files/John-Kay-Flying-Shuttle-IndustrialRev.pdf
12. Аркрайт — патент водяної прядильної машини 1769; Кромфорд 1771, 200 робітників, переважно жінки й діти (наймолодшим ≈ 7), дві зміни по 12 год — https://en.wikipedia.org/wiki/Cromford_Mill ; https://www.ebsco.com/research-starters/history/invention-water-frame ; https://gracesguide.co.uk/Richard_Arkwright
13. Ватт — окремий конденсатор 1765, патент 1769; партнерство з Болтоном 1775; планетарна передача (обертальний рух) 1781; Ньюкомен — 1712 («на початку XVIII ст.» в уроці) — https://en.wikipedia.org/wiki/Watt_steam_engine ; https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Watt,_James
14. США: гербовий збір 1765; «Бостонське чаювання» 16.12.1773; Лексингтон і Конкорд 19.04.1775; Вашингтон — головнокомандувач з червня 1775; Декларація 4.07.1776; Саратога жовтень 1777 → Франція; Йорктаун 19.10.1781; Паризький мир 3.09.1783 — https://en.wikipedia.org/wiki/American_Revolutionary_War ; https://www.history.com/articles/treaty-of-paris ; https://www.worldhistory.org/Treaty_of_Paris_of_1783/
15. Текст Декларації («all men are created equal… Life, Liberty and the pursuit of Happiness… consent of the governed… Right of the People to alter or to abolish it») — https://www.archives.gov/founding-docs/declaration-transcript ; вплив Локка — https://en.wikipedia.org/wiki/Two_Treatises_of_Government
16. Картина Трамбулла — подання проєкту Декларації (не підписання), замовлена 1817, написана 1817–1818, у Ротонді з 1826; 47 осіб, є відсутні того дня — https://www.aoc.gov/explore-capitol-campus/art/declaration-independence ; Commons (файл вище).
17. Конституція США — підписана 17.09.1787, Філадельфія (39 підписів); чинна з 4.03.1789; три гілки; найстаріша чинна писана національна конституція; Білль про права ратифіковано 15.12.1791 — https://en.wikipedia.org/wiki/Constitution_of_the_United_States ; https://www.archives.gov/founding-docs/more-perfect-union
18. Костюшко — у Континентальній армії 1776–1783, інженер: укріплення Саратоги й Вест-Пойнта; 24.03.1794 Краків, Рацлавиці 4.04.1794 (косинери), Мацейовиці 10.10.1794 — поранений і полонений — https://en.wikipedia.org/wiki/Tadeusz_Ko%C5%9Bciuszko ; https://home.nps.gov/sara/learn/historyculture/tadeusz-kosciuszko.htm ; https://home.nps.gov/thko/learn/historyculture/timelines-lifeandtimeskosciuszko.htm
19. Поділи: 1772 (Росія, Пруссія, Австрія; Австрії — Галичина), 23.01.1793 (Росія, Пруссія), 24.10.1795 (усі три); Конституція 3.05.1791 — «перша в Європі й друга у світі (після США) писана національна конституція», скасувала liberum veto; 1792 — вторгнення Росії — https://en.wikipedia.org/wiki/Partitions_of_Poland ; https://www.wikipedia.org/wiki/3_May_Constitution ; https://agad.gov.pl/konstytucja/Konstytucja_3_maja_EN.epub ; facts/hist №131.

### Спірне / для верифікатора
- l1: «сидів у Бастилії» — без року (1717 і 1726). «Летючий човник» — у джерелах і 1738 (патент 1733) → у тексті 1733.
- l3: кількість ниток на «Дженні» в джерелах різна (8 / 16 / до 120) → «кілька ниток одночасно».
- l4: «Жодних податків без представництва» — шкільне гасло, не дослівна цитата документа.
- l5: Конституцію 1791 р. «називають першою в Європі писаною конституцією держави» (Корсика 1755 — інколи згадують; не подаємо).
- l2 фінал (link) спирається на hist g8s5 (1764, 1775) і facts/hist №136 (указ 1783) — подано на екрані.
- Опори: l1 е2 — рік на скані + hint з числами; l4 е6 (Локк) — l1 е4; l6 п. 2 дистрактор «Конституція 1791» — з l5.

### Пропозиції
- glossary/world: Джон Локк, Шарль Луї де Монтеск'є, Вольтер, Дені Дідро, Жан д'Аламбер, Фрідріх II, Марія Терезія, Йосиф II (як у hist), Катерина II, Джон Кей, Джеймс Гарґрівс, Річард Аркрайт, Кромфорд, Джеймс Ватт, Метью Болтон, Томас Джефферсон, Джордж Вашингтон, Тадеуш Костюшко, Рацлавиці, Саратога, Йорктаун, Вест-Пойнт; терміни — Просвітництво, енциклопедисти, природні права, поділ влади, віротерпимість, освічений абсолютизм, мануфактура, фабрика, промисловий переворот; «Наказ», «Бостонське чаювання», Декларація незалежності, Конституція 3 травня.
- Програма також називає масонів, класицизм, моду, Північну війну, «війни розкоші», Ост-Індську компанію, Індію й «закриття» Китаю — у план w8s5 (5 тем) вони не ввійшли; куратору плану — чи потрібен ще розділ/урок.
- Дублікати фото з img/hist/g9s1 (3 файли) — свідомо, за рішенням 04.11 п. 8.
