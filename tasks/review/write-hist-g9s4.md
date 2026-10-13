---
claimed_from: todo
claimed_at: 2026-10-13T12:26:25.890Z
id: write-hist-g9s4
type: write-section
subject: hist
grade: 9
section: g9s4
weeks: [22, 28]
status: review
claimed_by: writer-g9s4
created: 2026-09-27
---
# Написати розділ «Модернізація» (Історія України, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як залізниці, шахти й заводи змінили життя людей.

## Теми уроків (з плану)
1. Залізниці й промисловість
2. Донбас і Юзівка
3. Українці в містах
4. Еміграція за океан
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g9-g9s4.js` з `SLID.section("hist", { id: "g9s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g9s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g9s4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-g9s4, 2026-10-13)
Файл `content/hist/g9-g9s4.js`, 5 уроків, усі `status: "draft"`; `node tools/validate.mjs --section g9s4` — 0 помилок, 0 попереджень; `node tools/stats.mjs --subject hist` — уроки g9s4 без прапорців.
- g9s4l1 «Колія до моря» (Залізниці) — 8 екранів, 5 оцінюваних: choice, sort, order.
- g9s4l2 «Місто з димарів» (Донбас і Юзівка) — 8 / 6: choice (фото-доказ), number + діаграма `chart`, sort, order; `note` «Чому цифри різні?» (населення 1897 р.).
- g9s4l3 «Чия мова на вулиці?» (Українці в містах) — 8 / 5: number з діаграми перепису 1897, choice, sort.
- g9s4l4 «Земля за океаном» (Еміграція) — 9 / 5: choice, sort, order.
- g9s4l5 «Номер до друку» (boss, значок `steamtrace` «Слід паровоза») — 7 / 6: choice, sort, number; по завданню на кожну тему в порядку уроків (1, 1, 2, 2, 3, 4).
- Зображення: `img/hist/g9s4/yuzivka-zavod.jpg` (1000×656, 204 КБ; листівка 1904–1909, PD-RusEmpire, https://commons.wikimedia.org/wiki/File:Общий_вид_завода_Новороссийского_общества.jpg). Фото «Galician immigrants, Québec, ca. 1911» (W. J. Topley, LAC PA-010401, CC BY 2.0) для l4 НЕ завантажено — Commons/upload 429, Flickr 403. Можна додати пізніше як `img` в intro l4.

### Факти (усі джерела відкрито напряму, D-021)
1. Перша залізниця на укр. землях — Перемишль — Львів, перший поїзд у Львові 4.11.1861 (в уроці — лише рік) — ЕСУ «Залізниця» https://esu.com.ua/pdf/file/14757.pdf ; uk.wiki «Львівська залізниця» https://uk.wikipedia.org/wiki/Львівська_залізниця
2. Перша лінія в Російській імперії на укр. землях — Одеса — Балта, регулярний рух 1865 р. — ЕСУ «Одеська залізниця» https://esu.com.ua/pdf/file/74970.pdf ; uk.wiki «Одеська залізниця» (4 (17).12.1865) https://uk.wikipedia.org/wiki/Одеська_залізниця . Точний день у джерелах різниться (січень / грудень 1865) — в уроці лише рік.
3. Одеса — головний порт вивезення зерна — EoU «Odesa» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CD%5COdesa.htm ; uk.wiki «Одеса» https://uk.wikipedia.org/wiki/Одеса
4. Чумаки возили зерно до портів; чумацтво зникло із залізницями — EoU «Chumaks» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChumaks.htm ; uk.wiki «Чумацтво» https://uk.wikipedia.org/wiki/Чумацтво
5. Скасування кріпацтва в Російській імперії 1861 р. (19 лютого) — EoU «Serfdom» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSerfdom.htm ; uk.wiki «Кріпацтво» https://uk.wikipedia.org/wiki/Кріпацтво
6. Платон Симиренко (1821–1863), цукрозаводчик (Сміла, Городище), фінансував «Кобзар» 1860 р. — EoU «Symyrenko, Platon» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CY%5CSymyrenkoPlaton.htm ; uk.wiki https://uk.wikipedia.org/wiki/Платон_Федорович_Симиренко
7. Джон Юз (Г'юз), валлієць (1814 Мертір-Тідвіл — 1889 Петербург); 1869 — початок будівництва заводу над Кальміусом, Новоросійське товариство; селище Юзівка (нині Донецьк); перший чавун 1872 — ЕСУ «Донецьк» https://esu.com.ua/article-20800 (PDF https://esu.com.ua/pdf/file/20800.pdf) ; EoU «Donetsk» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CO%5CDonetsk.htm ; EoU «Donets Basin» (1872) https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CO%5CDonetsBasin.htm ; uk.wiki https://uk.wikipedia.org/wiki/Джон_Джеймс_Юз ; en.wiki https://en.wikipedia.org/wiki/John_Hughes_(businessman)
8. Населення Юзівки: 1870 — 164, 1884 — 5494 (EoU 5500), 1897 — 28 076 (EoU — 32 000, розбіжність → `note`), 1910 — 48 400 (EoU 1914 — 50 000) — ЕСУ «Донецьк»; EoU «Donetsk»; uk.wiki «Донецьк» (діаграма населення).
9. Більшість робітників Донбасу — з російських губерній; місцеві українці неохоче кидали землю; заводи й шахти здебільшого належали іноземному капіталу — EoU «Donets Basin», EoU «Donetsk»; ЕСУ «Донецьк» (переселенці з центральних районів Росії після 1861).
10. Юзівка до 1917 р. офіційно не мала міського статусу (містечко), місто з 1920 р. — ЕСУ «Донецьк»; EoU «Donetsk» (лише в fbText boss #4).
11. Перепис 1897: Київ 247 723 жителі; рідна мова: російська 54,2 %, українська 22,2 %, їдиш 12,1 %, польська 6,7 % — uk.wiki «Населення Києва» https://uk.wikipedia.org/wiki/Населення_Києва ; zn.ua «Переписи населення. Київ» https://zn.ua/ukr/HISTORY/perepisi-naselennya-kiyiv-325364_.html . Перепис фіксував мову, не національність — zn.ua (формулювання питання), EoU «Odesa» («by native language»).
12. Львів: 1900 р. — поляки 49,4 %, євреї 26,5 %, українці 19,9 % — uk.wiki «Населення Львова» https://uk.wikipedia.org/wiki/Населення_Львова ; 1910 р. — римо-католики 51 %, євреї 28 %, греко-католики 19 % — en.wiki «Lviv» https://en.wikipedia.org/wiki/Lviv
13. Іван Пилипів і Василь Єлиняк з Небилова — до Канади 1891 р. — EoU «Canada» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CA%5CCanada.htm ; uk.wiki «Іван Пилипів» https://uk.wikipedia.org/wiki/Іван_Пилипів ; uk.wiki «Українці Канади» https://uk.wikipedia.org/wiki/Українці_Канади ; en.wiki «Ukrainian Canadians». День прибуття різниться (7.09 Квебек / 19.09) — в уроці лише рік.
14. Една-Стар (Альберта) — перше українське поселення, 1892 р. — EoU «Canada»; en.wiki «Ukrainian Canadians»; uk.wiki «Українці Канади».
15. Гомстед — 160 акрів (≈ 65 га) за 10 доларів внеску; умова — обробити частину землі й збудувати житло (за 3 роки) — EoU «Canada»; en.wiki «Dominion Lands Act» https://en.wikipedia.org/wiki/Dominion_Lands_Act
16. Йосип (Осип) Олеськів — агроном, 1895 р. поїздка до Канади, брошура «Про вільні землі» (1895) — EoU «Canada», EoU «Emigration» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CE%5CM%5CEmigration.htm ; uk.wiki «Йосип Олеськів» https://uk.wikipedia.org/wiki/Йосип_Олеськів
17. Перша хвиля до Канади 1891–1914 рр. — ≈ 170 тис. — EoU «Canada»; en.wiki «Ukrainian Canadians»; uk.wiki «Українці Канади».
18. США: масова еміграція з Закарпаття й Лемківщини з 1877 р. (EoU) / з 1880-х (en.wiki), шахти Пенсильванії → в уроці «з 1870–1880-х рр.» — EoU «Emigration»; en.wiki «Ukrainian Americans» https://en.wikipedia.org/wiki/Ukrainian_Americans
19. Бразилія: 1890-ті (масово з 1895 р.), штат Парана, ліс замість обіцяної ріллі — EoU «Brazil» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CR%5CBrazil.htm ; uk.wiki «Українці Бразилії» https://uk.wikipedia.org/wiki/Українці_Бразилії
20. Агенти пароплавних компаній перебільшували можливості за океаном — EoU «Emigration»; uk.wiki «Іван Пилипів» (комісійні від агента).
21. З підросійської України переселялися на схід (Сибір, Далекий Схід), багато з Полтавщини й Чернігівщини — EoU «Emigration»; uk.wiki «Зелений Клин» https://uk.wikipedia.org/wiki/Зелений_Клин

### Сумнівні місця
- Написання: «Василь Єлиняк» (uk.wiki); інші форми — Єленяк, Еленяк (EoU: Eleniak). «Йосип Олеськів» (uk.wiki; EoU — Osyp). «Джон Юз (Г'юз)». Потрібна одна форма в глосарії.
- Населення Юзівки 1897 р. — ЕСУ 28 076 vs EoU 32 000: оформлено `note` (label «Чому цифри різні?»), у завданнях не використано.
- Діаграма l3: відсотки округлено до цілих (54/22/12/7/5; «інші» = 4,8 % → 5).
- «Мовою влади, школи й заробітку була російська» (l3 info) — узагальнення (EoU, контекст Валуєвського циркуляра / Емського указу з g9s3), без окремої цифри.
- Донецьк: «з 2014 р. тимчасово окупований Росією» — за формою глосарію для Криму.

### Опора оцінюваних завдань (D-019)
- l1 #4 ← info #3 (роки 1861 / 1865); l1 #5, #7 — опора на самому екрані; l1 #6 ← означення в info #3; l1 #8 — причинова послідовність.
- l2 #2 ← фото на екрані; #4 ← info #3; #5 ← дані в body + діаграма; #6 ← info #3 (1869, 1872); #7 — опора в body; #8 ← info #3 + #5.
- l3 #4 ← діаграма в info #3; #5 — опора в body; #6, #7, #8 ← info #3.
- l4 #4 ← info #3; #5 — body; #7 ← info #3 і info #6; #8 ← info #6; #9 ← роки в intro і info #3 (1891, 1892, 1895, 1914).
- l5: #1 ← l1; #2 ← l1; #3 ← l2 (+ фото); #4 ← дані в body (l2); #5 ← l3; #6 ← l4 (info #6 про Бразилію, info #3 про гомстеди).

### Пропозиції
- glossary hist (9 кл.): промисловий переворот; гомстед; Юзівка (нині Донецьк); Новоросійське товариство; перша хвиля еміграції (1891–1914); Една-Стар; написання Єлиняк / Олеськів / Юз (Г'юз).
- style/hist.md: дані перепису подавати через `lab: { kind: "chart" }` на `info`, а завдання — `number` «прочитай стовпчик» (працює в hist так само, як у math).
