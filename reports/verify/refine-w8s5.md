# Верифікація refine-world-w8s5 — w8s5l4 «Тринадцять колоній»

Верифікатор: verifier-refine-world-w8s5, 2026-11-12. Обсяг: лише w8s5l4 (зміни коміту d3b49a2); решту уроків розділу не перевіряв.

## Збереження опори dgw9
`git show d3b49a2 -- content/world/g8-w8s5.js`: у наявних екранах l4 змінено лише милозвучність («Війна й Декларація», «життя і свободу» у fbText, «інженер із Речі») і додано речення про Франкліна (е6, е8) та `img`. Наявні факти, дати, `opts`, `correct`, `answer` не змінено; dgw9 (теми `src`, `usa`, lesson w8s5l4) спирається на картину-пам'ятник і незалежність США — збережено. `validate --diag dgw9` — 0/0.

## Факти

| Твердження в уроці | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| 1607 — Джеймстаун у Вірджинії, заснований англійською торговельною компанією (Вірджинська компанія); перше постійне англійське поселення в Північній Америці | https://www.nps.gov/jame/learn/historyculture/a-short-history-of-jamestown.htm («first permanent English settlement in North America», 13.05.1607, Virginia Company); https://en.wikipedia.org/wiki/Jamestown,_Virginia (4.05.1607 ст. ст. / 14.05 н. ст., Virginia Company of London); https://encyclopediavirginia.org/entries/jamestown-colony-the-first-year/ (травень 1607) | ✅ (в уроці лише рік; день 13/14.05 у джерелах різниться — в урок не вносити) |
| Власники чекали прибутку; згодом тютюн на продаж | NPS short history («return on its investment», тютюн Рольфа 1612 — «cash crop»); https://www.nps.gov/jame/learn/historyculture/jamestown-and-plymouth-compare-and-contrast.htm («Economic motives prompted colonization in Virginia»); en.wiki Jamestown (тютюн 1612) | ✅ |
| 1620 — «Мейфлавер», колонія Плімут | NPS compare-and-contrast (Plymouth, 13 років після 1607); https://www.nps.gov/caco/learn/historyculture/pilgrims.htm (відплив 6.09.1620, Плімут); https://en.wikipedia.org/wiki/Mayflower | ✅ |
| «Серед них були протестанти, яких в Англії переслідували за віру» | https://www.nps.gov/caco/learn/historyculture/pilgrims.htm (сепаратисти, «often punished severely», виїхали до Голландії); https://en.wikipedia.org/wiki/Mayflower («English Protestants… illegal radicals», сепаратистів — понад третину пасажирів); NPS compare-and-contrast («Freedom from religious persecution motivated the Pilgrims to leave England») | ✅ — спрощення коректне: «серед них» не означає «усі», переслідування було саме в Англії (до переїзду до Лейдена) |
| Обидві колонії — на землях індіанських народів | NPS short history (Powhatan hunting land); https://en.wikipedia.org/wiki/Plymouth_Colony (колишнє селище Патуксет); пошук (Scholastic, Patuxet — селище вампаноагів) | ✅ |
| Декларацію готував комітет із п'яти, серед них Франклін; основний текст — Джефферсон | https://www.archives.gov/founding-docs/declaration-history (Committee of Five, Jefferson — чернетка); https://home.nps.gov/inde/learn/historyculture/people-franklin-resume.htm; https://en.wikipedia.org/wiki/Benjamin_Franklin | ✅ |
| Союз із Францією 1778 р. уклали в Парижі представники США, серед них Франклін | https://www.archives.gov/milestone-documents/treaty-of-alliance-with-france (6.02.1778, Париж, Франклін, Дін, Лі); https://history.state.gov/milestones/1776-1783/french-alliance (Franklin, Lee, Deane — «American commissioners») | ✅ після правки (було «посли США» → ⚠️, див. нижче) |
| Франклін — друкар, учений, винахідник громовідводу | NPS resume («Lightning rod (1750)», друкарня); https://www.fi.edu/en/science-and-education/benjamin-franklin/lightning-rod; en.wiki Franklin | ✅ |
| `cap`: «посол США у Франції» | https://home.nps.gov/inde/learn/historyculture/people-franklin-resume.htm («Commissioner of Congress and Ambassador to France», 1776–1783); https://history.state.gov/milestones/1776-1783/b-franklin (з 1779 перший американський «Minister» при іноземному дворі); en.wiki («first U.S. ambassador to France», міністр 1779–1785) | ✅ як шкільне спрощення (NPS сам вживає «Ambassador»; стосується 1779–1785, коли й написано портрет) |
| Портрет: Дюплессі, бл. 1785, НПГ (Смітсонівський), Вашингтон, NPG.87.43 | https://commons.wikimedia.org/wiki/File:Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg (circa 1785, oil, NPG.87.43); WebSearch-фрагмент сторінки NPG («Oil on canvas, circa 1785 … NPG.87.43»; npg.si.edu напряму — 403); https://www.lindahall.org/about/news/scientist-of-the-day/joseph-duplessis/ (копія в NPG Washington) | ✅ |
| Ліцензія img/world/w8s5/franklin-duplessis.jpg | Commons: CC-PD-Mark, PD-old-100-expired, PD-Art; автор † 1802. Файл 960×1182, EXIF © NPG — це метадані скану, на PD-Art не впливає | ✅ |
| outro: «понад 150 років» (1620/1607 → 1776) | арифметика: 156 / 169 | ✅ |

## Завдання (розв'язано самостійно, тоді звірено з `correct`)

| Екран | Моя відповідь | `correct` | Опора (D-019) | Вердикт |
|---|---|---|---|---|
| е2 choice «Що каже картина?» | «Як американці 1818 р. хотіли пам'ятати подію» | 2 | тіло екрана (замовлено 1817, у залі були не всі) + intro | ✅ |
| е3 multi «Навіщо пливли за океан?» | прибуток/тютюн; свобода віри | [1, 2] | тіло е3; хибні: парові машини — XVIII ст. (w8s5l3), США — 1776 (е2 «Декларації 1776 р.») | ✅ |
| е5 sort «Хто що зробив?» | парламент: збір, податки; колоністи: гасло, чаювання | так само | е4 | ✅ |
| е7 choice «Чиї ідеї в Декларації?» | Локк | 1 | урок 1 розділу (Локк, природні права) + цитата на екрані | ✅ |
| е9 number | 8 | 8 | дані на екрані | ✅ |
| е11 choice «Рівні — але не всі» | ідея випередила життя | 0 | міркування з умови | ✅ |

Позиції правильних: choice 2 / 1 / 0, multi [1, 2] — різні. Франклін окремо не оцінюється: прийнятно (персоналія програми названа двічі + портрет; урок на межі 11 екранів профілю 7–9).

## Правки (зроблено)
1. е8: «уклали в Парижі **посли** США» → «**представники** США» — у 1778 р. Франклін, Дін і Лі були комісіонерами, не послами (history.state.gov); `cap` «посол США у Франції» залишено (див. таблицю).
2. е2, варіант 2: «Хто саме **і** коли» → «саме **й** коли» (милозвучність; euphony — 0 у l4). Індекс `correct` не змінено, dgw9 цей текст не використовує.
3. w8s5l4 `status: "draft"` → `"verified"`.

Примітка: мої незакомічені правки потрапили в чужий коміт 79f6d0d (w7s4) — паралельний агент закомітив дерево; у робочому дереві лишається лише правка п. 2.

## Прогони
- `node tools/validate.mjs --section w8s5` — 0 помилок, 0 попереджень.
- `node tools/validate.mjs --diag dgw9` — 0/0.
- `node tools/euphony.mjs --subject world --section w8s5` — у w8s5l4 зауважень немає.
- playtest не запускав (модуля playwright у контейнері немає — CI).

## Вердикт
**w8s5l4 — verified.** Відкритих ❌/⚠️ немає. Для людини: чи влаштовує «посол» у підписі портрета (точніше — «посланник / повноважний міністр», 1779–1785).
