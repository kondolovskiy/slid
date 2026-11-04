---
claimed_from: todo
claimed_at: 2026-11-04T12:53:33.639Z
id: write-world-w9s2
type: write-section
subject: world
grade: 9
section: w9s2
weeks: [8, 14]
status: review
claimed_by: writer-write-world-w9s2
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Індустріальний світ першої половини XIX ст.» (Всесвітня історія, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити, як залізниця, фабрики й нові ідеї змінили міста, працю й політику.

## Теми уроків (з плану)
1. Залізниця і фабрика
2. Місто і робітники
3. Консерватизм, лібералізм, соціалізм
4. Романтизм і національне відродження
5. Революції 1848–1849 рр. («Весна народів»)
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
- Файл `content/world/g9-w9s2.js` з `SLID.section("world", { id: "w9s2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w9s2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w9s2` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-write-world-w9s2, 2026-11-04.** Файл `content/world/g9-w9s2.js`: 6 уроків (draft), значок `steamspring` («Знавець доби пари»).
- w9s2l1 «Пара на рейках» (залізниця і фабрика), w9s2l2 «Натовп на фотографії» (місто, закон 1833 р., чартисти), w9s2l3 «Три відповіді на один виклик» (консерватизм, лібералізм, соціалізм), w9s2l4 «Мандрівник над туманом» (романтизм, Гердер, Грімм, Греція, «Русалка Дністровая»), w9s2l5 «Весна, що стала барикадою» (1848–1849), w9s2l6 «Пара і барикади» (boss: 5 питань — по одному на урок — + хронологія; шаблон w7s1l5).
- `link`: l1 (Львів 1861 р., number), l4 («Русалка Дністровая» 1837 р.), l5 (Галичина 1848 р.), boss п. 5 — події України подано на екранах «Пригадай» (факти hist №139, 142, 143, 146 — verified).
- validate --section w9s2: 0 помилок, 0 попереджень; stats --subject world: уроки w9s2 без прапорців; playtest --section w9s2 у копії дерева (build у копії): 6/6.

**Зображення (D-027; Commons — сторінки файлів через WebFetch, мініатюри thumb.wikimedia.org, паузи 22 с, 429 не було)** — `img/world/w9s2/`:
| Урок | Файл | Ліцензія | Сторінка |
|---|---|---|---|
| l1 intro + е2 | liverpool-manchester-1831.jpg — акватинта S. G. Hughes за малюнком I. Shaw (підпис на аркуші «Drawn by I. Shaw, Liverpool», «Aquat. by S. G. Hughes», «Published by R. Ackermann… Novr 1831»), YCBA B1993.30.129 | CC0 | https://commons.wikimedia.org/wiki/File:S_G_Hughes_-_Travelling_on_the_Liverpool_-_Manchester_Railway,_A_Train_of_the_First_Class_Carriages,_with_the_Ma_-_B1993.30.129_-_Yale_Center_for_British_Art.jpg |
| l1 е7 | power-loom-1835.jpg — T. Allom / J. Tingle, з книжки E. Baines 1835 | PD | https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg |
| l2 intro + е9 | chartist-meeting-1848.jpg — дагеротип W. E. Kilburn, Royal Collection RCIN 2932484 | PD | https://commons.wikimedia.org/wiki/File:William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg |
| l3 intro + е2 | communist-manifesto-1848.jpg — обкладинка 1-го видання (на обкладинці імен авторів немає) | PD (на Commons також CC BY-SA 3.0 — скан; беремо PD-old) | https://commons.wikimedia.org/wiki/File:Communist-manifesto.png |
| l4 intro | friedrich-wanderer.jpg — Hamburger Kunsthalle HK-5161 | PD | https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg |
| l4 е9 | rusalka-title.jpg — **копія** img/hist/g9s2/rusalka-title.jpg (дублікати дозволено, рішення 04.11) | PD | https://commons.wikimedia.org/wiki/File:Русалка_Днѣстровая_-_tytul_page.jpg |
| l5 intro | berlin-barricade-1848.jpg — літографія «Erinnerung an den Befreiungskampf… 18.–19. März 1848», Verlag Winckelmann, бл. 1848–1850; оригінал 899 px, мініатюра 800 px дала 400 → узято 500 px | PD | https://commons.wikimedia.org/wiki/File:Ereignisblatt_aus_den_revolutionären_Märztagen_18.-19._März_1848_mit_einer_Barrikadenszene_aus_der_Breiten_Strasse,_Berlin_01.jpg |
| l5 е4 | lamartine-red-flag-1848.jpg — H. F. E. Philippoteaux, бл. 1848, Carnavalet P258 (Paris Musées) | CC0 | https://commons.wikimedia.org/wiki/File:Henri_Félix_Philippoteaux_-_Lamartine_repoussant_le_drapeau_rouge_à_l'Hôtel_de_Ville,_le_25_février_1848_-_P258_-_Musée_Carnavalet.jpg |
| l6 intro + п. 4 | turner-rain-steam-speed.jpg — National Gallery NG538, 1844 | PD | https://commons.wikimedia.org/wiki/File:Turner_-_Rain,_Steam_and_Speed_-_National_Gallery_file.jpg |
Перевірено й не взято: Delacroix «La Grèce sur les ruines de Missolonghi» (оголені груди, рука загиблого — для 9 кл. не брав); ChildLabourManchester.png (Hervieu 1840, лише 456 px, мініатюри 400); Coaltub.png (282 px, автор не вказаний); обкладинка Грімм 1812 на Commons — підпис «1819, 2-ге вид.» (суперечність, не брав).

**Факти (нові для facts/world.md; ≥ 2 джерела):**
1. Стоктон — Дарлінгтон: перший поїзд 27.09.1825, Locomotion No. 1, вів Джордж Стефенсон; вугілля і пасажири — https://en.wikipedia.org/wiki/Locomotion_No._1 ; https://collection.sciencemuseumgroup.org.uk/objects/co205767/steam-locomotive-no-1-locomotion-stockton-darlington-railway ; https://co-curate.ncl.ac.uk/stockton-and-darlington-railway
2. Ліверпуль — Манчестер: відкрита 15.09.1830; перша міжміська, лише паровози, за розкладом; 31 миля (≈ 50 км), ≈ 2 год — https://en.wikipedia.org/wiki/Liverpool_and_Manchester_Railway ; https://liverpoolmuseums.org.uk/stories/opening-of-liverpool-and-manchester-railway ; https://www.gracesguide.co.uk/Liverpool_and_Manchester_Railway. Швидкість 25 км/год у завданні — розрахунок з цих даних (ранні поїзди ≈ 16 миль/год = 26 км/год, en.wiki).
3. Гравюра 1831 р.: угорі — перший клас (криті вагони, пошта), унизу — другий клас для «outside passengers» (відкриті) — напис на самому аркуші.
4. Перепис 1851 р.: близько половини жителів Англії й Уельсу в містах (за різними визначеннями ≈ 50–51 %; звіт 1861 р. прямо — «вперше більшість») → у тексті «близько половини» + `note` — https://en.wikipedia.org/wiki/1851_United_Kingdom_census ; https://www.visionofbritain.org.uk/census/report/GB1851POP1 ; https://marginalrevolution.com/marginalrevolution/2017/03/great-britain-fact-day-2.html
5. Закон про фабрики 1833 р.: до 9 років — заборона (текстиль, крім шовку), 13–18 — ≤ 12 год/день, 9–13 — 2 год навчання щодня, 4 інспектори; дорослих не стосувався. **Ліміт для 9–13 років — 8 чи 9 год (джерела розходяться) — на екрані не подано.** — https://www.nationalarchives.gov.uk/education/resources/1833-factory-act/ ; https://en.wikipedia.org/wiki/Factory_Acts ; https://historyhome.co.uk/peel/factmine/factleg.htm
6. Чартизм: «Народна хартія» 1838 р., 6 вимог (голос чоловікам від 21 р., таємне голосування, без майнового цензу для депутатів, платня депутатам, рівні округи, щорічні вибори); петиції 1839, 1842, 1848 відхилено; згодом запроваджено все, крім щорічних виборів; мітинг на Кеннінгтон-Коммон 10.04.1848 — https://en.wikipedia.org/wiki/Chartism ; https://rct.uk/collection/exhibitions/crown-and-camera-the-british-royal-family-and-photography-1842-1910/the/the-chartist-meeting-on-kennington-common-10-april-1848
7. Дагеротип Кілберна — «одна з перших фотографій великого натовпу» (не «перша»: джерела обережні) — https://academic.oup.com/jvc/article/29/3/430/7695220 ; https://warwick.ac.uk/fac/arts/history/students/eportfolios/pdueak/kennington-chartist-project-another-look-2018.pdf
8. Е. Берк «Роздуми про революцію у Франції» — 1790 р. — https://en.wikipedia.org/wiki/Reflections_on_the_Revolution_in_France ; https://www.ebsco.com/research-starters/history/foundations-modern-conservatism
9. Р. Оуен: керівник фабрики в Нью-Ланарку з 1800 р.; дітей до 10 років не брав; Інститут формування характеру (школа) — 1.01.1816 — https://en.wikipedia.org/wiki/New_Lanark ; https://barricades.ac.uk/items/show/152 ; https://col.rct.uk/collection/1047040/an-address-delivered-on-the-first-of-january-1816-at-new-lanark-on-opening-the
10. «Маніфест Комуністичної партії»: лютий 1848 р., Лондон, німецькою, анонімно; гасло «Пролетарі всіх країн, єднайтеся!» — напис на обкладинці (скан) + https://en.wikipedia.org/wiki/The_Communist_Manifesto
11. Гердер: дух народу в мові й піснях; вплинув на братів Грімм — https://en.wikipedia.org/wiki/Johann_Gottfried_Herder (друге джерело — переказ у підручниках; верифікаторові звірити з Britannica/SEP). **Цитату «Україна стане новою Грецією» не підтверджено — не вжито.**
12. Брати Грімм: т. 1 «Kinder- und Hausmärchen» — 20.12.1812, 86 казок — https://en.wikipedia.org/wiki/Grimms%27_Fairy_Tales ; https://www.goethe.de/lrn/prj/mlg/mad/gri/de8832539.htm
13. Грецька війна за незалежність з 1821 р.; Байрон помер у Місолонгі 19.04.1824 (від хвороби; облоги тоді не було — у тексті без «обложеному»); Лондонський протокол 3.02.1830 — Британія, Франція, Росія визнали Грецію незалежною — https://en.wikipedia.org/wiki/London_Protocol_(1830) ; https://kingscollections.org/exhibitions/specialcollections/greece/british-involvement-in-the-war/london-protocol ; https://omeka.drew.edu/exhibits/show/byron/greece
14. «Русалка Дністровая»: розділ «Пісні народні», народна мова — https://uk.wikipedia.org/wiki/Русалка_Дністровая ; facts/hist №139.
15. Франція 1848: 22.02 — початок, 24.02 — зречення Луї-Філіппа, 25.02 — республіка; загальне чоловіче виборче право (декрет 5.03; деякі джерела — 2.03, на екрані дати немає); 27.04.1848 — скасування рабства в колоніях (Шельшер) — https://en.wikipedia.org/wiki/French_Revolution_of_1848 ; https://www.vie-publique.fr/fiches/268973-la-iie-republique-1848-1851-un-regime-ephemere ; https://www.schoolmouv.fr/cours/abolition-de-l-esclavage-en-france-27-avril-1848/
16. Ламартін і червоний прапор 25.02.1848 (Ламартін — міністр закордонних справ тимчасового уряду) — https://fr.wikisource.org/wiki/Discours_à_l'Hôtel_de_Ville_du_25_février_1848 ; https://classes.bnf.fr/pdf/Revol5_DrapeauR.pdf ; картина Carnavalet P258.
17. Відень 13.03.1848 — відставка Меттерніха, втеча до Лондона; Берлін 18.03; Угорщина 1849 — російські війська (червень), капітуляція при Вілагоші 13.08.1849 — https://en.wikipedia.org/wiki/Revolutions_of_1848_in_the_Austrian_Empire ; напис на літографії (18.–19.03, Берлін).
18. Скасування панщини в Австрії 7.09.1848 (пропозиція Г. Кудліха 26.07, імператорський патент) — https://en.wikipedia.org/wiki/Hans_Kudlich ; https://austria-forum.org/af/AEIOU/Kudlich%2C_Hans/Kudlich%2C_Hans_english
19. Франкфуртський парламент: 18.05.1848, Паульскірхе; корону імператора німців запропоновано Фрідріху Вільгельму IV 3.04.1849, відмова (25 чи 28.04 — розбіжність, на екрані лише «1849 р.») — https://en.wikipedia.org/wiki/Frankfurt_Parliament ; https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/the-crown-of-a-german-kaiser-is-presented-to-frederick-william-iv-1849
20. Ліверпуль — порт, куди везли американську бавовну; Манчестер — бавовняні фабрики (l1 е8, опора) — загальновідоме; en.wiki L&MR (лінію збудовано для перевезення сировини й товарів між портом і фабриками).

**Сумнівні місця / для верифікатора:**
- l1 е3: «Паровоз Джорджа Стефенсона» — Locomotion збудувала фірма Robert Stephenson & Co (батько й син), вів його Джордж. 
- l3 е8: одне речення про комуністичну диктатуру XX ст. («забрала мільйони життів, зокрема в Україні») — без чисел і без назви Голодомору (10 кл.).
- l5 е6 (sort): «Скасування панщини» віднесено до «Права і свободи» (вимога лібералів), не до «права народу» — пояснено у fbText.
- l5 е9: «закон скасував панщину в усій Австрійській імперії» — у Галичині й Угорщині раніше (квітень / березень 1848 р.); формулювання підсумкове.
- boss п. 4 (Тернер): картину в уроці 4 не розглядали; відповідь виводиться з ознак романтизму (е3 уроку 4) і з самої картини на екрані.
- Опори D-019: l2 е6 → е5; l2 е8 → е7; l3 е6 (multi) → е5; l3 е7 → е5; l4 е6 → е5; l4 е9 (link) — на екрані; l5 е4 → урок 3 (ідеології) + екран; l5 е7 — на екрані; boss — уроки 1–5.

**Пропозиції в glossary/world.md:** Джордж Стефенсон; Луї-Філіпп; Альфонс де Ламартін; Роберт Оуен; Едмунд Берк; Карл Маркс, Фрідріх Енгельс; Йоганн Готфрід Гердер; брати Якоб і Вільгельм Грімм; Каспар Давид Фрідріх; Джордж Байрон; Вільям Тернер; Вільям Кілберн; Місолонгі; Кеннінгтон-Коммон; Нью-Ланарк; чартисти, «Народна хартія»; «Маніфест Комуністичної партії»; ідеологія, консерватизм, лібералізм, соціалізм, пролетарі; «Весна народів».
