---
claimed_from: review
claimed_at: 2026-10-05T18:49:16.276Z
id: write-hist-g6s4
type: write-section
subject: hist
grade: 6
section: g6s4
weeks: [21, 27]
status: done
claimed_by: verifier-g6s4
created: 2026-09-27
---
# Написати розділ «Античні міста Причорномор'я» (Історія України, 6 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, що грецькі міста на нашому узбережжі пов'язували ці землі зі Середземномор'ям.

## Теми уроків (з плану)
1. Грецькі колонії: Ольвія, Херсонес, Пантікапей
2. Боспорське царство
3. Торгівля хлібом і вином
4. Що залишилося від античних міст
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g6-g6s4.js` з `SLID.section("hist", { id: "g6s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g6s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g6s4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-g6s4, 2026-10-05)
Файл `content/hist/g6-g6s4.js`, 5 уроків (усі `draft`), значок розділу `navarch` «Античний мореплавець» (icon globe). Зображень немає.
- h641 «Греки на нашому березі» — колонія/метрополія, Ольвія, Херсонес, Пантікапей (choice, sort, multi, number+hint, choice)
- h642 «Царство над протокою» — Боспорське царство (hyp, choice, number+hint, sort факт/тлумачення+hint, choice)
- h643 «Хліб в обмін на вино» — торгівля, амфори, клейма, Демосфен (choice, sort, slider+hint, choice+hint, multi)
- h644 «Місто під степом» — що залишилося; види джерел (choice, sort+hint, choice, choice+hint, order, multi)
- h645 «Рейс купця з Мілета» — boss, 5 завдань у порядку тем (sort, choice, choice, number+hint, choice)
Валідатор: 0 помилок, 0 попереджень. stats: жодного прапорця для h641–h645.

### Факти з джерелами
1. Ольвія заснована вихідцями з Мілета у VI ст. до н. е. (ЕІУ: 2-га чв. VI ст.) на правому березі Бузького лиману біля злиття з Дніпровським, біля с. Парутине; існувала до IV ст. н. е. — ЕІУ «Ольвія» http://resource.history.org.ua/cgi-bin/eiu/history.exe?...S21STR=Olviia ; https://en.wikipedia.org/wiki/Pontic_Olbia ; https://uahistory.co/book/new/d15.html
2. Ольвія відливала бронзові монети у формі дельфінів — ЕІУ «Ольвія»; https://en.wikipedia.org/wiki/Pontic_Olbia ; https://uk.wikipedia.org/wiki/Ольвія
3. Ольвія — національний історико-археологічний заповідник (НАН України); систематичні розкопки з 1901 р. («понад сто років») — ЕІУ; https://en.wikipedia.org/wiki/Pontic_Olbia ; https://museum-portal.com/ua/muzeyi/235_nacionalniy-istoriko-arheologichniy-zapovidnik--olviya-
4. Геродот описав Ольвію; скіфський цар Скіл мав будинок/палац в Ольвії (у тексті уроку лише «розповідь Геродота про Ольвію») — ЕІУ «Ольвія»; https://en.wikipedia.org/wiki/Scyles
5. Херсонес засновано 422–421 рр. до н. е. вихідцями з Гераклеї Понтійської, біля Севастополя — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\C\H\ChersoneseTaurica.htm ; https://uahistory.co/book/dict/1549.php ; https://histua.com/slovnik/x/xersones
6. Херсонес: виноградарство й виноробні на хорі; понад 400 рівних земельних ділянок; у Списку ЮНЕСКО з 2013 р. («Стародавнє місто Херсонес Таврійський та його хора») — https://en.wikipedia.org/wiki/Chersonesus ; https://www.worldheritageexplorer.org/sites/ancient_city_of_tauric_chersonese_and_its_chora.html ; Encyclopedia of Ukraine (viticulture)
7. Наприкінці X ст. Володимир захопив Херсонес (Корсунь); 988 р. ужито як рік захоплення (у джерелах 988 або 989) — Encyclopedia of Ukraine «Chersonese Taurica»; https://uk.wikipedia.org/wiki/Корсунський_похід_Володимира_Святославича
8. Пантікапей заснований вихідцями з Мілета на поч. VI ст. до н. е. (ЕІУ: 1-ша чв. VI ст.; en.wiki: кін. VII — поч. VI ст.), гора Мітридат, сучасна Керч; столиця Боспору — ЕІУ «Пантікапей»; https://en.wikipedia.org/wiki/Panticapaeum
9. Боспорське царство постало близько 480 р. до н. е. з об'єднання грецьких міст над Керченською протокою; столиця Пантікапей; Спартокіди з 438 р. до н. е.; з I ст. до н. е. — під впливом Понту, потім Риму — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\B\O\BosporanKingdom.htm ; https://uk.wikipedia.org/wiki/Боспорська_держава ; ЕІУ «Пантікапей»
10. Демосфен «Проти Лептина» (20.31): зерно з Чорного моря до Афін дорівнює всьому привозу з інших місць разом — https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0072%3Aspeech%3D20%3Asection%3D31 ; https://en.wikipedia.org/wiki/Leucon_I
11. Експорт з Причорномор'я: зерно, риба, раби (en.wiki Olbia), худоба (EoU Chersonese); імпорт: вино, олія, посуд. Клейма на ручках амфор ставили до випалу, вони вказують центр виготовлення (Родос, Тасос, Синопа тощо); Ольвія торгувала з Синопою, Гераклеєю, Фасосом — ЕІУ «Ольвія»; https://oxfordre.com/classics/... (Amphorae and amphora stamps); https://www.ascsa.edu.gr/uploads/media/hesperia/146478.pdf

### Сумнівні місця
- Дата заснування Ольвії: ЕІУ — 2-га чв. VI ст. до н. е.; uk.wikipedia — 647–646 до н. е.; en.wikipedia — VII ст. (ймовірно, змішують із Березанню). В уроці — «VI ст. до н. е.» за ЕІУ.
- Захоплення Херсонеса Володимиром — 988 чи 989 р. (у задачі на лічбу взято 988; відповідь 1409).
- Кінець Боспорського царства: EoU — гуни 370-ті; ЕІУ — Пантікапей столиця до поч. VI ст. В уроці свідомо розмито: «кілька століть нашої ери».
- Причини об'єднання Боспору подано як тлумачення (hyp-завдання), не як факт.
- «Учені вважають, що рівні ділянки ділили між громадянами» — тлумачення (UNESCO: «democratic land organization»).
- Написання «Тасос» (ЕІУ — «Фасос»): варто вирішити в глосарії.
- Крим: «окупований Росією з 2014 р.» — без додаткових деталей.

### Пропозиції
- Глосарій: колонія, метрополія, поліс/місто-держава, амфора, клеймо, хора; Фасос/Тасос; Херсонес (Корсунь).
- Ідея зображень для верифікатора/наступного проходу: монета-дельфінка Ольвії, амфора з клеймом (Вікісховище, CC).
