---
claimed_from: todo
claimed_at: 2026-11-10T20:38:36.351Z
id: write-world-w10s2
type: write-section
subject: world
grade: 10
section: w10s2
weeks: [6, 9]
status: review
claimed_by: w-write-world-w10s2
created: 2026-11-10
---
# Написати розділ «Мир після Великої війни» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як переможці перекроїли карту світу, чому українське питання лишилося нерозв'язаним і чому мир виявився крихким.

## Теми уроків (з плану)
1. Від «14 пунктів» Вілсона до Версальського договору
2. Ліга Націй
3. Вашингтонська конференція й пакт Бріана–Келлога
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

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
- Файл `content/world/g10-w10s2.js` з `SLID.section("world", { id: "w10s2", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s2/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s2` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**Виконавець:** w-write-world-w10s2, 2026-11-11. Файл `content/world/g10-w10s2.js`, зображення `img/world/w10s2/` (5 файлів).

### Уроки
1. `w10s2l1` «Мир, який писали переможці» (11 екранів) — «14 пунктів», Паризька конференція, Версальський договір, картина Орпена, українське питання (`link`).
2. `w10s2l2` «Міст без замкового каменя» (9) — Ліга Націй: карикатура «Punch», колективна безпека, санкції, Сенат США, вступи й виходи 1926–1939.
3. `w10s2l3` «Гармати на злам» (11) — Вашингтонська конференція (три договори), фото злому лінкорів 1923 р., пакт Бріана — Келлога, Маньчжурія 1931 р.
4. `w10s2l4` «Архів миру» — boss, 6 завдань (по 2 на тему, D-048 п. 1), значок `peacebuilder`.

`requires`: w10s1l5 (перемир'я, розпад імперій), w9s5l4, g10s2l8 (усі наявні). validate — 0 помилок, 0 попереджень; stats — без прапорців; euphony — виправлено (лишено «і … і» у l3 і «кого і як» у l1).

### Факти й джерела
- «14 пунктів» 8.01.1918; п. X, XIII, XIV (цитата XIV — переклад автора з офіційного тексту, з «…») — https://www.archives.gov/milestone-documents/president-woodrow-wilsons-14-points ; https://history.state.gov/milestones/1914-1920/paris-peace
- Конференція з 18.01.1919; текст вручено Німеччині 7.05, контрпропозиції відкинуто; підписання 28.06.1919 у Дзеркальній залі, де 1871 р. проголошено Німецьку імперію — https://en.chateauversailles.fr/history/the-significant-dates/most-important-dates/1919-the-treaty-of-versailles ; state.gov (вище).
- Умови: Ельзас і Лотарингія, «коридор» Польщі, колонії — Версаль (вище) + state.gov; армія ≤ 100 тис., без призову, танків, військової авіації, підводних човнів — Версальський договір ч. V, ст. 160, 171, 173, 181, 198 — https://avalon.law.yale.edu/imt/partv.asp ; ст. 231 і 132 млрд золотих марок (1921) — state.gov.
- Сенат США: 19.03.1920 — забракло 7 голосів; ст. 10; окремий мир 25.08.1921 — state.gov.
- Українські делегації не визнано (EoU «Paris Peace Conference»: https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CA%5CParisPeaceConference.htm ); 25.06.1919 Рада міністрів закордонних справ — «Poland should occupy the whole of the province of Eastern Galicia» — Hansard 31.07.1919: https://api.parliament.uk/historic-hansard/commons/1919/jul/31/easteen-galicia ; також Лозинський «Кривава книга» (мандат Антанти з 25.06.1919).
- Ліга: 10.01.1920, Асамблея 15.11.1920 у Женеві, 41 держава — https://www.ungeneva.org/en/about/league-of-nations/overview ; Німеччина 1926/1933, Японія 1933, СРСР 1934 / виключено 14.12.1939 — https://www.worldhistory.org/League_of_Nations/ , https://en.wikipedia.org/wiki/Member_states_of_the_League_of_Nations
- Вашингтон: 6.02.1922; 525 000 / 525 000 / 315 000 / 175 000 / 175 000 т; три договори — https://en.wikipedia.org/wiki/Washington_Naval_Treaty ; https://history.state.gov/milestones/1921-1936/naval-conference (state.gov дає округлено 500 000 / 300 000).
- Пакт Бріана — Келлога: пропозиція Бріана квітень 1927; 27.08.1928, Париж, 15 держав (серед них Японія), згодом 62; ст. I; немає покарання, «самооборона» не визначена; Маньчжурія 1931 — https://history.state.gov/milestones/1921-1936/kellogg ; https://en.wikipedia.org/wiki/Kellogg%E2%80%93Briand_Pact

### Зображення (D-027)
| Урок | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l1, — | big-four-paris-1919.jpg | PD (US Army, Е. Джексон, 27.05.1919) | https://commons.wikimedia.org/wiki/File:Big_four.jpg |
| l1, l4 | orpen-hall-of-mirrors-1919.jpg | PD (Орпен † 1931; IWM ART 2856) | https://commons.wikimedia.org/wiki/File:Orpen,_William_(Sir)_(RA)_-_The_Signing_of_Peace_in_the_Hall_of_Mirrors,_Versailles,_28th_June_1919_-_Google_Art_Project.jpg |
| l2, l4 | gap-in-the-bridge-1919.jpg | PD (Рейвен-Гілл † 1942; «Punch» 10.12.1919) | https://commons.wikimedia.org/wiki/File:The_Gap_in_the_Bridge.png |
| l3 | scrapping-battleships-1923.jpg | PD (US Navy; Naval Historical Center) | https://commons.wikimedia.org/wiki/File:Scrapping_Battleships_1923.jpg |
| l3, l4 | kellogg-pact-signing-1928.jpg | PD (Agence Rol, BnF Gallica btv1b532046709; PD-anon-70-EU) | сторінка в credits |

### Сумнівні місця й опора (D-019)
- l1 екран 9 (картина Орпена): чи був Орпен у залі 28.06.1919 — джерела не підтверджують; в уроці лише «художник, якого направили на мирну конференцію» і «на замовлення Імперського військового музею».
- l1 «Велика четвірка» на фото — травень 1919 р.; на підписанні 28.06 Орландо вже не був прем'єром (відставка 19.06) — в уроці про підписання Орландо не згадано.
- Співвідношення «5 : 5 : 3 : 1,75 : 1,75» свідомо не подано (наближене, з базою 500 000; з 525 000 Франції виходить 1,67). Подано тоннажі; l3 number — 525 000 : 175 000 = 3; boss — 5 : 3 → 315 000 (опора: l3 екран 3).
- Boss завд. 2 (протест галичан) спирається на l1 екран 10; завд. 4 (Маньчжурія) — l2 екран 7; завд. 6 — l3 екрани 7 і 10 (Японія підписала пакт).
- Рада послів 1923 (дата 14 чи 15.03) — не подано, є в hist g10s5l1.
- `link` лише в l1 (і boss); у l2/l3 українського сюжету без нових фактів немає — свідомо не вигадував.

### Пропозиції
- glossary/world.md: імена (Вілсон, Ллойд Джордж, Клемансо, Орландо, Бріан, Келлог, Г'юз), «пакт Бріана — Келлога», «Версальсько-Вашингтонська система», «колективна безпека», «репарації» (рядок TERM в inbox).
- facts/world.md: рядки FACT в inbox.
