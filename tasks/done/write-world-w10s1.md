---
claimed_from: todo
claimed_at: 2026-11-10T20:20:15.058Z
id: write-world-w10s1
type: write-section
subject: world
grade: 10
section: w10s1
weeks: [1, 5]
status: done
claimed_by: w-write-world-w10s1
created: 2026-11-10
---
# Написати розділ «Перша світова війна» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як постріл у Сараєві перетворився на війну мільйонів і чому після неї впали чотири імперії.

## Теми уроків (з плану)
1. Сараєво, 1914: як Європа опинилася у війні
2. Окопи, газ і танки: позиційна війна
3. Людина на фронті й у тилу
4. 1917: Росія виходить, США вступають
5. Кінець війни й розпад імперій
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Специфіка 10–11 кл. (оркестратор, за верифікацією plan-world-g10-11)
- Програма — «Всесвітня історія. 10–11 класи» (рівень стандарту), наказ МОН № 698 від 03.08.2022, 1 год/тиждень; текст: https://edumedia-depot.gei.de/bitstreams/450c6016-4759-423a-b29e-2a263b384cac/download ; звірка розділів — reports/verify/plan-world-g10-11.md. Підручник 11 кл. — Щупак (2024) за КТП naurok (у звіті).
- Історія України 10–11 у «Сліді» — окремо (hist g10*/g11*): не дублюй, «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist. **hist g11s1 «Друга світова війна» переноситься в 10 кл. без зміни id** (curate-hist-coverage): для w10s7 можна спиратися на g11s1 (`requires` g11s1l1 — додай у файлі свого розділу).
- Чутливі теми (тоталітаризм, Голокост, Друга світова, Сребрениця, війна Росії проти України) — style/hist.md; дати й числа — facts/world.md, facts/hist*.md або джерело з URL. Термін «радянський» (як у hist; питання про «совєтський» — у глосарії, не змінюй).
- D-027: у кожному уроці ≥ 1 справжнє img (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно).

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- Скіл зображень `.claude/skills/hist-images/SKILL.md` і docs/IMAGES.md (D-027)
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/world/g7-w7s1.js (еталон після верифікації; style/world.md → «Еталони»)

## Результат
- Файл `content/world/g10-w10s1.js` з `SLID.section("world", { id: "w10s1", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s1/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w10s1` — 0 помилок
- [x] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**w-write-world-w10s1, 2026-11-10.** Файл `content/world/g10-w10s1.js`, 6 уроків (5 тем + boss), усі `status: "draft"`. Зображення — `img/world/w10s1/` (6 файлів, ≤ 250 КБ, усі використані).
`requires`: w9s5l4, w9s3l4 (з плану) + g10s1l1 (hist, ті самі тижні 1–5). validate --section w10s1: 0 помилок, 0 попереджень; stats — без прапорців (l2 і l5 gradedShare = 0,5 — на межі); euphony --section — 0 відхилень. Плейтест локально неможливий (немає Python-модуля playwright) — CI.

### Уроки
| id | назва | екранів | img |
|---|---|---|---|
| w10s1l1 | Постріл, що підпалив Європу (Сараєво, Липнева криза, план Шліффена, Марна) | 9 | sarajevo-beltrame-1914.jpg |
| w10s1l2 | Війна в окопах (позиційна війна, газ, танки, Верден, Сомма, Брусилов) | 10 | mark-i-tank-1916.jpg, gas-masks-ypres-1917.jpg |
| w10s1l3 | Війна, що забрала всіх (тотальна війна, тил, жінки, блокада, Талергоф) | 9 | chilwell-shells-1917.jpg |
| w10s1l4 | Телеграма й революція (підводна війна, телеграма Ціммермана, США, Лютнева революція, більшовики, мир у Бересті) | 9 | zimmermann-telegram-1917.jpg |
| w10s1l5 | Тиша об одинадцятій (1918, перемир'я, розпад чотирьох імперій, нові держави, ЗУНР) | 10 | compiegne-armistice-1918.jpg |
| w10s1l6 | Музей Великої війни (boss, значок `greatwar`, 6 завдань з `pre` на l1–l5; хронологія — `pre` l1) | 7 | повтор tank, telegram, compiegne |

### Зображення (урок → файл → ліцензія → URL)
- l1 → sarajevo-beltrame-1914.jpg — малюнок А. Бельтраме (1871–1945), «Domenica del Corriere» № 27, 5–12.07.1914, фрагмент; PD-Art / PD-old-80-expired — https://commons.wikimedia.org/wiki/File:DC-1914-27-d-Sarajevo-cropped.jpg . Commons сам позначає його як уявну (fantasy) ілюстрацію — на цьому побудовано завдання на критику джерела (екран 2).
- l2 → mark-i-tank-1916.jpg — IWM Q 2486, Ернест Брукс, 25.09.1916, PD-UKGov — https://commons.wikimedia.org/wiki/File:British_Mark_I_male_tank_Somme_25_September_1916.jpg
- l2 → gas-masks-ypres-1917.jpg — AWM E00825, Френк Герлі, 27.09.1917, PD-AustraliaGov — https://commons.wikimedia.org/wiki/File:Australian_infantry_small_box_respirators_Ypres_1917.jpg
- l3 → chilwell-shells-1917.jpg — IWM Q 30018, Горас Ніколлс, липень 1917, PD-UKGov — https://commons.wikimedia.org/wiki/File:Munition_workers_in_a_shell_warehouse_at_National_Shell_Filling_Factory_No.6,_Chilwell,_Nottinghamshire_in_1917._Q30018.jpg
- l4 → zimmermann-telegram-1917.jpg — розшифрований текст (NARA, «From 2nd from London # 5747»), PD-US-expired — https://commons.wikimedia.org/wiki/File:Zimmermann-telegramm-offen.jpg (оригінал 508 px, мініатюра 500 px)
- l5 → compiegne-armistice-1918.jpg — Spaarnestad Photo, 11.11.1918, PD-anon-70-EU — https://commons.wikimedia.org/wiki/File:Armisticetrain.jpg (500 px — найбільша мініатюра). Особи на фото в cap не називаю (у Commons — список; лише Фош згаданий у тексті).
Commons API давав 429 з першого запиту (паралельний фото-агент) → метадані через WebFetch сторінок файлів, мініатюри з thumb.wikimedia.org з паузою 20–22 с — без збоїв.

### Факти й джерела (нові для facts/world.md)
- Липнева криза: ультиматум 23.07.1914, війна Сербії 28.07; Німеччина — війна Росії 1.08, Франції 3.08; вторгнення в Бельгію й вступ Британії 4.08.1914; Марна — 6–12.09.1914 (на екрані «у вересні 1914 р.») — https://en.wikipedia.org/wiki/July_Crisis ; https://en.wikipedia.org/wiki/Western_Front_(World_War_I) (план Шліффена через Бельгію, Марна 6–12.09). Сараєво 28.06.1914 — facts/world №37; Львів 3.09.1914 — facts/hist №157.
- Лінія окопів від Північного моря до Швейцарії ≈ 700 км — https://www.teara.govt.nz/en/first-world-war/5 ; https://amosa.org.au/museum-exhibits/wwi-exhibits/western-front
- Хлор під Іпром 22.04.1915 — перша масова газова атака (спроба в Болімові 31.01.1915 — сльозогінний газ, невдала) — https://www.guinnessworldrecords.com/world-records/101311-first-large-scale-use-of-poison-gas-in-war ; https://greatwaralbum.ca/Great-War-Album/Battle-Fronts/Second-Battle-of-Ypres-St-Julien
- Перші танки 15.09.1916 (Флер-Курселет, Сомма): 49 Mark I призначено, 32 дійшли до вихідних позицій, 18 вирушили в бій — https://tankmuseum.org/article/tanks-at-flers ; https://nzhistory.govt.nz/node/2500
- Верден 21.02–18.12.1916 (≈ 300 днів; втрати Франції й Німеччини разом понад 700 тис. — 377 тис. + 337 тис., оцінки різняться) — https://memorial-verdun.fr/en/ressources/la-bataille-de-verdun ; https://www.britannica.com/event/Battle-of-Verdun ; Сомма 1.07.1916, перший день ≈ 57 тис. британських втрат — en.wiki Western Front. Брусилов 1916 (Луцьк, Чернівці) — hist g10s1l3.
- Жінки на військових заводах Британії до 1918 р. ≈ 1 млн (950 тис. — en.wiki; ≈ 1 млн до сер. 1918 — А. Вулакотт), платня менша за чоловічу — https://en.wikipedia.org/wiki/Munitionette ; https://www.iwm.org.uk/history/a-day-in-the-life-of-a-munitions-worker (вибух у Чілвеллі 1.07.1918, 134 загиблі — в урок не ввійшло).
- «Бруквяна зима» 1916–1917, блокада з 1914, неврожай картоплі восени 1916 — https://en.wikipedia.org/wiki/Turnip_Winter ; Talerhof — facts/hist №161.
- Телеграма Ціммермана: січень 1917 (16.01), Room 40; Пейдж → Вілсон 24.02; опубліковано 1.03.1917; необмежена підводна війна з 1.02.1917; США оголосили війну 6.04.1917 — https://www.archives.gov/milestone-documents/zimmermann-telegram ; https://en.wikipedia.org/wiki/Zimmermann_Telegram . Переклад уривка — мій, з англійського тексту на фото (скорочено).
- «Лузитанія» 7.05.1915: 1 198 загиблих, з них 128 американців — https://www.history.com/this-day-in-history/May-7/german-submarine-sinks-lusitania ; https://www.britannica.com/topic/Lusitania-British-ship
- Американські експедиційні сили на 11.11.1918 — 1 981 701 («майже 2 млн») — https://abmc.gov/sites/default/files/2024-11/EN_SUAC_Brochure_2024-05.pdf ; https://ebsco.com/research-starters/history/american-troops-land-france-wwii (неточно: «понад 2 млн відправлено»). У тексті — «американські сили в Європі налічували майже 2 млн».
- Лютнева революція 23.02 (8.03) 1917; зречення Миколи II 2 (15).03.1917; Тимчасовий уряд; більшовики 25.10 (7.11) 1917; Декрет про мир 26.10 (8.11); мир Радянської Росії в Бресті 3.03.1918 (відмова від Фінляндії, Прибалтики, України) — https://en.wikipedia.org/wiki/February_Revolution ; https://en.wikipedia.org/wiki/Treaty_of_Brest-Litovsk . Мир УНР 9.02.1918 — facts/hist №165; календар — №164.
- 1918: весняний наступ 21.03; Ам'єн 8.08 («чорний день німецької армії», Людендорф); перемир'я Болгарії 29.09, Османської імперії 30.10, Австро-Угорщини 3.11 (Вілла Джусті); 9.11 — оголошено зречення Вільгельма II, республіка (Шайдеман); 11.11.1918 підписано о 5:00–5:45, чинне об 11:00, вагон Фоша — https://en.wikipedia.org/wiki/Armistice_of_11_November_1918 ; https://en.wikipedia.org/wiki/Battle_of_Amiens_(1918) ; https://en.wikipedia.org/wiki/Armistice_of_Mudros ; https://blog.nationalarchives.gov.uk/milestones-peace-armistice-villa-giusti
- Скасування султанату 1.11.1922 — https://en.wikipedia.org/wiki/Abolition_of_the_Ottoman_sultanate . Чехословаччина 28.10.1918 — https://is.muni.cz/el/cus/podzim2014/CZS51/um/51549310/Lecture_7_Fall_2014.pdf + en.wiki (друге джерело слабке — звірити верифікатору). Польща 11.11.1918 — https://ipn.gov.pl/en/news/9969,On-11-November-Poland-celebrates-the-National-Independence-Day.pdf ; https://www.pap.pl/en/news/news,280639,99-years-ago-poland-resurrected.html
- Загиблі військові 8,5–10 млн (Britannica — 8,5 млн; en.wiki — 9–11 млн) — https://britannica.com/question/How-many-people-died-during-World-War-I ; https://en.wikipedia.org/wiki/World_War_I_casualties
- ЗУНР: Листопадовий чин — ніч на 1.11.1918, назва ЗУНР — 13.11.1918 (facts/hist №169; hist g10s2) → на екрані «невдовзі дістала назву».

### Спірні місця й опори (D-019)
- l1 е2 (src, оцінюване одразу після intro): відповідь — з cap/intro (липень 1914, Мілан) і міркування «художник не бачив». l1 е4 (crit): опора — союзи з w9s5l4 (requires), нагадування в body.
- l1 е8 sort (link): Львів 3.09.1914 подано на е7 як «Пригадай з історії України» (hist g10s1 — ті самі тижні).
- l2 е9, l3 е8 (link): Брусиловський прорив і Талергоф — hist g10s1 (l3), подано на екрані; g10s1l3 у `requires` не додано (лише g10s1l1).
- l4 е8 number (link): мир УНР 9.02.1918 подано на екрані (hist g10s2 іде пізніше, тижні 6–16). Обидві дати — новий стиль.
- l5 е9 (link): ЗУНР подано на екрані.
- «на Західному фронті» замість «на всіх фронтах» (Східна Африка — до 25.11.1918).
- «Берестейський мир» — лише для УНР у hist; для Радянської Росії пишу «мир у Бересті (Бресті)» (програма: «Брестський мир»). Пропозиція TERM нижче.
- Вілсон у плані (w10s2) — у цьому розділі не згадано.

### Пропозиції
- TERM (glossary/world): «Велика війна» / «Перша світова війна»; «мир у Бересті (Бресті)» для Радянської Росії (3.03.1918) і «Берестейський мир» для УНР (9.02.1918) — узгодити з hist; «Лютнева революція», «більшовики захопили владу» (як hist g10s2); позиційна війна, тотальна війна, тил, перемир'я, необмежена підводна війна; Ціммерман, Шліффен, Фош, Людендорф, Бельтраме; Іпр, Сомма, Верден, Марна, Ам'єн, Комп'єнь, Чілвелл, Талергоф.

## Нотатки верифікатора
**verifier-w10s1, 2026-11-11.** Вердикт: придатний, 6/6 уроків `verified`. Звіт — reports/verify/w10s1.md (таблиці фактів з URL, завдань з опорою, зображень).
Правок 7 (мінімальні): «Перша світова» — «поширилася пізніше»; танки 49→18 — з атрибуцією «Музей танків» (NAM: 15, Eden Camp: 25); Чілвелл — «десятки людей», «До війни снаряди робили переважно чоловіки»; США — «до Європи прибули близько 2 млн»; підписання — «Близько 5-ї ранку»; загиблі військові — «від 9 до 11 млн». Чехословаччина 28.10.1918 — МЗС Чехії + RTVS ✅. Назва миру узгоджена з hist g10s2 (у глосаріях запису немає — TERM в inbox).
validate --section w10s1: 0/0; euphony 0; плейтест — CI (немає python playwright).
