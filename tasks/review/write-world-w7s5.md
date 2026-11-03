---
claimed_from: todo
claimed_at: 2026-11-03T10:55:10.519Z
id: write-world-w7s5
type: write-section
subject: world
grade: 7
section: w7s5
weeks: [29, 35]
status: review
claimed_by: writer-write-world-w7s5
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Пізнє Середньовіччя» (Всесвітня історія, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як чума, Столітня війна, книгодрукування й падіння Константинополя завершили Середньовіччя.

## Теми уроків (з плану)
1. «Чорна смерть»
2. Столітня війна і Жанна д'Арк
3. Гутенберг і книгодрукування
4. Османи й падіння Константинополя 1453 р.
5. Реконкіста і подорожі португальців
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
- Файл `content/world/g7-w7s5.js` з `SLID.section("world", { id: "w7s5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w7s5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w7s5` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-write-world-w7s5, 2026-11-03.** Файл content/world/g7-w7s5.js — 6 уроків, усі `draft`; значок `latemed` «Хроніст Пізнього Середньовіччя».
- l1 «Хвороба з кораблів» (Чорна смерть; link — Кафа/Крим → Італія; src — де Муссі не свідок); l2 «Війна на 116 років» (Столітня війна, Жанна; src — малюнок Фокамберга; link — Кревська унія 1385 між 1337 і 1453); l3 «Букви з металу» (Гутенберг, «Діамантова сутра» з w7s2, «Чікчі» 1377; link — Фіоль 1491); l4 «Місто, що змінило назву» (османи, 1453; link — Кримське ханство, Кафа 1475, васалітет 1478 — формулювання з hist g7s5l4/l6); l5 «Від Гранади до Індії» (Реконкіста, Тарик 711 з w7s2l4, португальці; погляд «з іншого берега» — лоцман з Малінді); l6 boss «Хроніка 1500 року» (6 завдань, порядок тем, link у п. 4).
- validate --section w7s5: 0 помилок, 0 попереджень. stats: l1 — gradedShare 0.67 «нетипово» (z=2), як і в еталоні w7s1l1 (9 екранів, 6 завдань) — лишено.
- Зображення (усі — суспільне надбання, лише thumb.wikimedia.org): l1 Doutielt3.jpg (поховання в Турне, Пієрар ду Тієлт, бл. 1353, KBR ms 13076-77 f. 24v); l2 Joan_Parliament_of_Paris.png (Фокамберг, 10.05.1429, Нац. архіви Франції X1a 1481 f. 12r); l3 Gutenberg_Bible_B42_Genesis.JPG (факсиміле берлінського примірника); l4 Bellini, Gentile - Portrait of Mehmed II - National Gallery, London.jpg; l5 Cantino_planisphere_(1502).jpg; l6 Constantinopolis_-_Schedell_Hartmann_-_1493.jpg. Увага: Doutielt1.jpg — спалення євреїв, не поховання; не брати.
- Факти з URL — рядки FACT в inbox (writer-write-world-w7s5), 5 блоків за уроками. Ключові джерела: en.wiki (Black Death, Siege of Caffa, Joan of Arc, Hundred Years' War, Gutenberg Bible, Jikji, Schweipolt Fiol, Fall of Constantinople, Reconquista, Prince Henry, Vasco da Gama, Cantino planisphere), worldhistory.org (Black Death, Joan of Arc, Fall of Constantinople, Reconquista, Vasco da Gama), thebulletin.org 2023 (де Муссі), loc.gov (Біблія Гутенберга), bnf.fr (Jikji), EoU Printing (Фіоль), nationalgallery.org.uk NG3099. Britannica — 403.
- Спірне / для верифікатора: (1) втрати від чуми — «від третини до половини» + `note` (джерела 25–60 %); (2) облога Кафи — 1346 р. (en.wiki Siege of Caffa дає й 1345–1347); (3) «Карл дав їй військо» — спрощення; (4) «Більшість українських земель тоді належала Литві» (1385; Галичина — Польща); (5) Урбан — «угорський» (wiki: є версія «німецький»); (6) Біблія — «приблизно 160–180 примірників», «майже 50 збереглися»; (7) вигнання євреїв 1492 — лише en.wiki Reconquista (Alhambra Decree), WH не згадує — загальновідомо, але перевір другим джерелом; (8) Бохадор 1434 — лише en.wiki.
- Опора завдань (D-019): l1 е2 — з самого фото; l1 е4 (link) — з тексту на екрані; l2 е8 (link) — дати 988/1054 з w7s1 + 1385 на екрані, відповідь з міркування «між 1337 і 1453»; l3 е7 (sort) — з е1 (intro: «чорні рядки надруковано, візерунки й велику літеру домалювали»); l3 е7 «Чому Гутенбергові було легше» — міркування з даних на екрані; l4 е6 (ланцюг) — міркування; l4 е7 — 330 р. на екрані; boss п. 3 дистрактор «дошки» — з l3 е5 («Діамантова сутра»).
- Пропозиції: glossary/world — TERM в inbox («Енріке Мореплавець» тощо).
