---
claimed_from: review
claimed_at: 2026-10-05T18:52:03.401Z
id: write-hist-g6s1
type: write-section
subject: hist
grade: 6
section: g6s1
weeks: [1, 7]
status: done
claimed_by: verifier-g6s1
created: 2026-09-27
---
# Написати розділ «Перші люди на наших землях» (Історія України, 6 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, що історія людей на цих землях почалася сотні тисяч років тому, і розуміти, як учені це з'ясовують.

## Теми уроків (з плану)
1. Королево: найдавніші сліди людей в Україні
2. Кам'яні знаряддя і вогонь
3. Мисливці на мамонтів: Межиріч і Мізин
4. Мистецтво первісних людей
5. Від збиральництва до землеробства
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g6-g6s1.js` з `SLID.section("hist", { id: "g6s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g6s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g6s1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**Виконав:** writer-g6s1 (claude-opus), 2026-10-05. Файл: `content/hist/g6-g6s1.js`, 6 уроків, усі `draft`. Валідатор: 0 помилок, 0 попереджень. stats: без прапорців для g6s1 (у першій версії g6s1l1 мав typeVariety z=2.2 — прибрав екран `number`, тепер 4 типи).

### Уроки
- `g6s1l1` «Камінь, якому 1,4 мільйона років» (Королево) — 7 екр.: intro, slider-здогадка, info, choice, sort факт/тлумачення, choice з hint, multi-фінал
- `g6s1l2` «Гострий край і теплий вогонь» — 8 екр.: choice, info, sort, multi, hyp (як добули вогонь), choice з hint, order-фінал
- `g6s1l3` «Дім з кісток мамонта» (Межиріч і Мізин) — 7 екр., фото `img/hist-mammoth.jpg` (наявне, кредит продубльовано в розділі)
- `g6s1l4` «Браслет з бивня мамонта» (мистецтво) — 7 екр., hyp + sort факт/гіпотеза + перевірка гіпотези Бібікова
- `g6s1l5` «Від мисливця до хлібороба» — 7 екр., привласнювальне/відтворювальне, буго-дністровська культура, хронологія
- `g6s1l6` «Виставка кам'яного віку» — boss, значок `stoneage` «Слідопит кам'яного віку» (icon flame), 6 вітрин = 5 тем у порядку
- `requires: ["l2", "l3"]` (5 кл.: датування, лінія часу); `pre` на окремих екранах.

### Факти з реєстру
- №19 Межиріч: 1965 р., Іван Підоплічко, Черкащина (вік — див. CONFLICT нижче)
- №1 Трипільська культура V–III тис. до н. е.

### Нові факти (з джерелами)
1. Королево (Закарпаття, над Тисою): стоянку відкрив 1974 р. Владислав Гладилін — https://iananu.org.ua/novini/rujnuvannya-pam-yatok/1462-paleolitichna-stoyanka-korolevo-pid-zagrozoyu ; https://spadok.org.ua/arkheologichni-stoyanky/karpatskyy-tsyvilizatsiynyy-ostriv-korolevska-stoyanka
2. Вік найнижчого шару зі знаряддями в Королеві ≈ 1,4 млн років (1,42 ± 0,10 млн; космогенні нукліди), Nature, березень 2024 (Garba et al., «East-to-west human dispersal into Europe 1.4 million years ago») — https://www.nature.com/articles/s41586-024-07151-3 ; https://www.avcr.cz/en/media/press-releases/The-first-humans-came-to-Europe-1.4-million-years-ago/ ; https://archaeologymag.com/2024/03/earliest-known-stone-tools-in-ukraine-are-1-4-million-years-old/ ; ІА НАНУ (посилання вище)
3. Знаряддя Королева — переважно з андезиту (вулканічна порода) — https://spadok.org.ua/... (вище) ; https://uk.wikipedia.org/wiki/Королевська_стоянка
4. У Королеві лише кам'яні знаряддя, кісток людей немає; творця (Homo erectus) визначають припущенням — avcr.cz; archaeologymag (вище: «exact species … remains uncertain»)
5. Найдавніші сліди вогню, яким користувалися люди: печера Вондерверк (Південна Африка), ≈ 1 млн років (Berna et al., PNAS 2012) — https://www.sciencedaily.com/releases/2012/04/120402162548.htm ; https://www.utoronto.ca/news/humans-used-fire-million-years-ago
6. Межиріч: нове радіовуглецеве датування житла № 4 — ≈ 18 248–17 764 рр. тому (Chu, Shydlovskyi, Maier, Open Research Europe, 2025) — https://archaeologymag.com/2025/11/mammoth-bone-shelters-in-ukraine/ ; https://phys.org/news/2025-11-ice-age-architecture-mammoth-bones.html ; https://pmc.ncbi.nlm.nih.gov/articles/PMC12639289/
7. Мізин (Чернігівщина, правий берег Десни): розкопки почав Федір Вовк 1908 р. — https://mezinpark.com.ua/holovna/fedir-vovk-vydatnyj-doslidnyk-mezynskoji-paleolitychnoji-stoyanky/ ; https://spadok.org.ua/starozhytnosti/mizynski-braslety ; https://en.wikipedia.org/wiki/Mezine (site located 1908)
8. Мізин: браслети з бивня мамонта з меандровим орнаментом; версія «календаря» — гіпотеза — https://spadok.org.ua/starozhytnosti/mizynski-braslety ; https://journals.openedition.org/palethnologie/4799?lang=en ; https://en.wikipedia.org/wiki/Mezine
9. Мізин: кістки мамонтів, розписані червоною вохрою; С. Бібіков у 1970-х припустив, що це ударні музичні інструменти; сліди повторних легких ударів — https://localhistory.org.ua/rubrics/artifact/mizinskii-muzichnii-kompleks/ ; https://spadok.org.ua/starozhytnosti/mizynski-muzychni-kosti ; https://www.researchgate.net/publication/261187154_Upper_Paleolithic_Sounding_Artifacts_from_Mesin_Ukraine_Modification_Marks
10. Вік Мізина: у тексті — «понад 15 тис. років тому» не вживаю для Мізина окремо; академічна дата 15 100 ± 200 BP (некалібр.) — openedition; популярні українські джерела пишуть «≈ 20 тис.». Тому дату Мізина в уроках не подаю.
11. Перші поля на Близькому Сході — понад 11 тис. років тому (≈ 9500 р. до н. е.; пшениця, ячмінь, кози, вівці) — Britannica (через пошук) ; https://www.history.com/articles/neolithic-revolution ; https://www.worldhistory.org/article/9/agriculture-in-the-fertile-crescent--mesopotamia/
12. Буго-дністровська культура — найдавніші землероби України, VI тис. до н. е. (у джерелах діапазони від кін. VII до поч. IV тис.), Дністер і Південний Буг, вплив балкано-дунайського неоліту; полювання й рибальство переважали — Залізняк Л. Л. «Первісна історія України», https://uahistory.co/book/pervisna/20.php ; https://www.protoukraine.com/vs/culture/?id_culture=13
13. «Палеоліт» — грецькою «давній камінь»; «неоліт» — новий кам'яний вік (загальновідомі терміни підручників).

### Сумнівні місця (для верифікатора)
- **CONFLICT:** реєстр №19 і урок `l6` (g5-s1) дають Межирічу «≈ 15 тис. років». Дослідження 2025 р. дає ≈ 18 тис. (калібровані роки). У g6s1l3 я подав це як історію уточнення: «довго вважали ≈ 15 тис., 2025 р. нове датування — ≈ 18 тис.» і задачу 18 000 − 15 000. У хронологіях пишу нейтрально «понад 15 тис. років тому». Рішення щодо реєстру й уроку l6 — за куратором.
- Кількість культурних шарів Королева в джерелах різниться (10 у ІА НАНУ, 16 у spadok/Вікіпедії) — у текст не брав.
- Рік відкриття Мізина: 1907 (openedition) / 1908 (більшість) — у тексті «1908 р. розкопки почав Федір Вовк» (а не «відкрив»).
- «Мало дерев у холодному степу» (g6s1l3) — загальноприйняте тлумачення палеосередовища, конкретного джерела не наводжу; подано як відповідь-здогадку.
- «Підтверджено сліди легких ударів» на мізинських кістках — по суті одне популярне джерело (localhistory) + назва статті на ResearchGate; варто звірити.
- Вондерверк: у 2026 р. (PLOS One, за phys.org) з'явилися можливі ще давніші сліди (1,07–1,79 млн). Я пишу «близько мільйона років» — актуально для надійних слідів.
- Королево: «один з найдавніших відомих слідів людей у Європі» — формулювання обережніше за пресрелізи («найдавніші»).

### Пропозиції
- Фото знарядь з Королева й мізинського браслета з відкритою ліцензією не завантажив: API Вікісховища відповідало «too many requests». Варто додати пізніше в `img/hist/g6s1/` (уроки l1, l4).
- Глосарій: додати «стоянка», «рубило», «палеоліт / мезоліт / неоліт», «привласнювальне / відтворювальне господарство», «буго-дністровська культура» (з малої), «Мізин» (не «Мезин»), «андезит».
