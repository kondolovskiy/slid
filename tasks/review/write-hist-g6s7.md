---
claimed_from: todo
claimed_at: 2026-11-03T09:41:24.824Z
id: write-hist-g6s7
type: write-section
subject: hist
grade: 6
section: g6s7
weeks: [15, 19]
status: review
claimed_by: writer-write-hist-g6s7
created: 2026-11-03
---
# Написати розділ «Стародавня Греція» (Історія України, 6 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, звідки походять демократія, театр, Олімпійські ігри й наука — і чому грецькі міста з'явилися й на наших берегах.

## Теми уроків (з плану)
1. Крит і Мікени: перші цивілізації Європи
2. Поліси: Афіни і Спарта
3. Демократія в Афінах
4. Греко-перські війни
5. Олімпійські ігри, театр і філософи
6. Олександр Македонський
7. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js
- Розділи цього ж класу з уроками: g6s1, g6s2, g6s3, g6s4, g6s5 — вирівнюйся по них

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Васильків та ін., «Досліджуємо історію і суспільство 5–6» — https://ippo.if.ua/predmety/istoriya/media/files/DYS-5-6-klasy-Vasylkyv.pdf (PDF; текст — `pdftotext`, середня колонка «Пропонований зміст»).
- Чесні завдання D-019 для історії (style/hist.md): дату, ім'я, назву спершу показати — потім питати. ≥ 1 справжнє `img` у кожному уроці (D-027, скіл `hist-images`; Commons — лише `thumb.wikimedia.org`, при 429 — пауза, не більше 2 фото-агентів одночасно).
- Тимчасові файли — лише в `<scratchpad>/<task-id>/`. Build не запускай (оркестратор). Не чіпай чужі файли, `content/math`, `app/`.
- Зміст програми (6 кл., розд. 2–4): Мінойське і Мікенське царства; міста-держави (поліси) Стародавньої Греції, Афіни, Спарта; демократія; Велика грецька колонізація (на наших землях — **не дублюй g6s4**, лише зв'язок); Персія і Греція (греко-перські війни); держава Александра Македонського; антична культура: театр, Олімпійські ігри, наука й філософія, «крилаті вислови».
- Глосарій: «Олександр Македонський» (укр. традиція; у програмі «Александр») — обери одну форму, запиши TERM в inbox. 6 кл.: ≤ 3 нових терміни на урок. Еталон: `content/hist/g5-s2.js`, розділи g6s1–g6s5; g6s4 (Причорномор'я) — сусідній розділ, звір формулювання про колонії з ним і з facts/hist.md.

## Результат
- Файл `content/hist/g6-g6s7.js` з `SLID.section("hist", { id: "g6s7", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g6s7/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [x] `node tools/build.mjs && node tools/validate.mjs --section g6s7` — 0 помилок
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
### Зроблено (writer-write-hist-g6s7, 2026-11-03)
Файл `content/hist/g6-g6s7.js`, 7 уроків, усі `status: "draft"`; `node tools/validate.mjs --section g6s7` — 0 помилок, 0 попереджень; `stats.mjs --subject hist` — у g6s7 прапорців немає (boss 5,5 слів/речення). Build і playtest не запускав (за дорученням оркестратора).
- g6s7-l1 «Маска не того царя» — Крит і Мікени (7 екр.)
- g6s7-l2 «Сотня маленьких держав» — поліси, колонії (лише зв'язок, без дублю g6s4), Афіни і Спарта, «лаконічно» (8)
- g6s7-l3 «Голос на черепку» — демократія, Народні збори, остракізм (8)
- g6s7-l4 «Звідки взявся марафон» — греко-перські війни; Персія лише як суперник (8)
- g6s7-l5 «Вінок, маска і запитання» — Олімпійські ігри, театр, філософи (8)
- g6s7-l6 «Похід на край світу» — Олександр Македонський (8)
- g6s7-l7 «Грецька зала музею» — boss, значок `hellas` «Екскурсовод грецької зали» (7)

### Зображення (D-027), `img/hist/g6s7/`
- l1 mask-agamemnon.jpg — Commons, Jebulon, CC0 — https://commons.wikimedia.org/wiki/File:Agamemnon_mask_NAMA_Athens_Greece.jpg (опис: Tomb V, Шліман 1876, XVI ст. до н. е.) ; також у l7
- l1 minoan-bull.jpg — Met 26.31.492, CC0 — https://www.metmuseum.org/art/collection/search/252412 (Minoan, Late Minoan III, ca. 1400–1200 BCE or later)
- l1 lion-gate.jpg — Commons, Zde, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Lion_Gate,_Mycenae,_201505.jpg
- l2 corinthian-helmet.jpg — Met 20.51.2, CC0 — https://www.metmuseum.org/art/collection/search/250922
- l3 ostraka-themistocles.jpg — Commons, Zde, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Ostraka_against_Themistocles,_482_BC,_Agora_Museum_Athens,_080634.jpg (на черепках читається ΘΕΜΙΣΘΟΚΛΕΣ ΝΕΟΚΛΕΟΣ; рік 482 з опису Commons у cap не ставив — лише «V ст. до н. е.») ; також у l7
- l4 — повторно `img/hist/g6s3/herodotus.jpg` (Met 91.8, Jastrow, CC BY 2.5), credits продубльовано
- l5 panathenaic-runners.jpg — Met 14.130.12, CC0 — https://www.metmuseum.org/art/collection/search/248902 ; comic-actor.jpg — Met 13.225.26, CC0 — https://www.metmuseum.org/art/collection/search/248776
- l6 alexander-mosaic.jpg — Commons, фото Berthold Werner CC BY-SA 3.0, мозаїка PD (wikitext: Licensed-PD + cc-by-sa 3.0) — https://commons.wikimedia.org/wiki/File:Alexander_and_Bucephalus_-_Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_BW.jpg ; також у l7
- l6 alexander-tetradrachm.jpg — Met 1978.93.21, CC0 — https://www.metmuseum.org/art/collection/search/326395 (Seleucid, ca. 325–319 BCE; зворот на фото не видно — у cap «на звороті таких монет — ім'я Олександра»)

### Факти й джерела (нові для реєстру; ≥ 2 джерела)
1. Маска з Мікен: Шліман, 1876; датування XVI ст. до н. е., на 300–400 р. старша за час міфічної Троянської війни — https://en.wikipedia.org/wiki/Mask_of_Agamemnon ; https://uk.wikipedia.org/wiki/Маска_Агамемнона
2. Мінойська цивілізація — назва від міфічного Міноса (А. Еванс); перший палац у Кноссі ≈ 1900 р. до н. е.; Еванс — масштабні розкопки з 1900 р.; заплутаний план палацу пізніша традиція пам'ятала як Лабіринт (тлумачення) — https://en.wikipedia.org/wiki/Knossos ; https://en.wikipedia.org/wiki/Minoan_civilization ; https://uk.wikipedia.org/wiki/Кносський_палац
3. Мікени — північний схід Пелопоннесу; мікенці домінують на Криті після ≈ 1450 р. до н. е.; Левові ворота ≈ 1250 р. до н. е. — https://en.wikipedia.org/wiki/Mycenae ; https://en.wikipedia.org/wiki/Lion_Gate ; https://en.wikipedia.org/wiki/Minoan_civilization
4. «Лаконічний» — від Лаконії; переказ: Філіп II «Якщо я ввійду в Лаконіку…» — «Якщо» (у тексті — «македонський цар», без імені) — https://en.wikipedia.org/wiki/Laconic_phrase ; https://en.wikipedia.org/wiki/Philip_II_of_Macedon
5. Спарта: виховання хлопців у загонах (агоге) з 7 років; ілоти — https://en.wikipedia.org/wiki/Agoge ; https://www.britannica.com/place/Sparta (верифікатору звірити: en.wiki Agoge не відкрилася через 429)
6. Солон 594 р. до н. е. (скасування боргового рабства); Клісфен 508–507 рр. до н. е.; голосували лише дорослі чоловіки-громадяни (не жінки, раби, метеки) — https://en.wikipedia.org/wiki/Athenian_democracy ; https://en.wikipedia.org/wiki/Cleisthenes
7. Остракізм: щороку збори вирішували, чи проводити; вигнання на 10 років; майно не конфіскували — https://en.wikipedia.org/wiki/Ostracism ; https://www.worldhistory.org/Ostracism/
8. Марафон 490 р. до н. е.; Геродот — гонець Фідіппід Афіни→Спарта; Лукіан (II ст. н. е.) — біг Марафон→Афіни (вважається пізнішою вигадкою) — https://en.wikipedia.org/wiki/Pheidippides ; https://en.wikipedia.org/wiki/Battle_of_Marathon
9. 480 р. до н. е.: Ксеркс; Фермопіли — Леонід, 300 спартанців (+ ≈ 700 феспійців, у тексті «і союзники»); Саламін — Фемістокл, вузька протока — https://en.wikipedia.org/wiki/Battle_of_Thermopylae ; https://en.wikipedia.org/wiki/Battle_of_Salamis
10. Олімпійські ігри: Олімпія, на честь Зевса, традиційно з 776 р. до н. е., раз на 4 роки, оливковий вінок, священне перемир'я; останні відомі — 393 р.; відродження 1896 р. в Афінах — https://en.wikipedia.org/wiki/Ancient_Olympic_Games ; https://www.britannica.com/sports/Olympic-Games
11. Театр — на святах Діоніса; актори — чоловіки в масках; трагедія/комедія — https://en.wikipedia.org/wiki/Theatre_of_Dionysus ; https://www.britannica.com/art/Greek-theater (верифікатору звірити Britannica)
12. Сократ (бл. 470–399 рр. до н. е.) нічого не написав; відомий з Платона й Ксенофонта; Арістотель — учень Платона — https://en.wikipedia.org/wiki/Socrates ; https://plato.stanford.edu/entries/socrates/
13. Філіп II — Херонея 338 р. до н. е.; Олександр — цар з 336 р. до н. е. у 20 років, учень Арістотеля; похід з 334 р. до н. е.; Дарій III; Александрія в Єгипті; Індія; помер 323 р. до н. е. у Вавилоні; держава поділена між полководцями — https://en.wikipedia.org/wiki/Alexander_the_Great ; https://uk.wikipedia.org/wiki/Олександр_Македонський ; https://en.wikipedia.org/wiki/Philip_II_of_Macedon
14. Мозаїка Олександра з Помпеї (Будинок Фавна) ≈ 100 р. до н. е.; ймовірна копія давнішої грецької картини (у тексті — «учені припускають») — опис файлу Commons ; https://en.wikipedia.org/wiki/Alexander_Mosaic (верифікатору звірити)
15. Марафон 42 км 195 м; марафон на іграх 1896 р. — https://en.wikipedia.org/wiki/Marathon (дистанцію стандартизовано 1921 р.)

### Сумнівні місця й опори (D-019)
- l3 е6 (черепки): спершу варіант «Кілька афінян голосували проти» замінено — відомий скарб ≈ 190 остраків проти Фемістокла написаний небагатьма руками (Броннер; джерела слабкі, у текст не взято). Правильний варіант тепер «Ім'я Фемістокла писали для остракізму».
- l6 е6 (монета): проміжок 325–319 охоплює 323 р. → правильний варіант «могли викарбувати й після смерті», не «карбували».
- l1 е5 (міф про лабіринт): відповідь — тлумачення вчених, виводиться міркуванням з опису палацу на екрані; fbText це прямо каже.
- l4 е6, l7 е5 (order): Фермопіли й Саламін — обидва 480 р. до н. е.; порядок — з фрази «через кілька тижнів» (l4 е5) і hint.
- «цивілізація» в l1 не пояснено: термін дає g6s6 (тижні 10–14, раніше за g6s7). `requires` не ставив — на розсуд оркестратора.
- Колонії (l2): одне речення + одне завдання, деталі — у g6s4 (тижні 23–25, пізніше); у fbText «буде окремий розділ».
- Персію подано лише як суперника греків (l4, l6), без опису держави (g6s6).
- Глосарій: обрано «Олександр Македонський» (план, укр. традиція), місто — «Александрія»; «Арістотель» (як uk.wiki); «Фідіппід», «Лукіан», «Фемістокл», «Ксеркс», «Саламін», «Фермопіли».

