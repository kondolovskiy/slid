---
claimed_from: todo
claimed_at: 2026-11-10T20:20:15.099Z
id: write-world-w11s1
type: write-section
subject: world
grade: 11
section: w11s1
weeks: [1, 4]
status: review
claimed_by: w-write-world-w11s1
created: 2026-11-10
---
# Написати розділ «Світ після 1945 р.: ООН і холодна війна» (Всесвітня історія, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як переможці облаштували повоєнний світ, навіщо створили ООН і чому колишні союзники стали суперниками.

## Теми уроків (з плану)
1. Ялта, Потсдам і створення ООН
2. Загальна декларація прав людини
3. «Залізна завіса»: Фултон, доктрина Трумена, план Маршалла
4. Поділ Німеччини, НАТО й Варшавський договір
5. Корея й Кариби: на межі нової війни
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
- Файл `content/world/g11-w11s1.js` з `SLID.section("world", { id: "w11s1", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w11s1/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w11s1` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**write-world-w11s1, 2026-11-10/11.** Файл `content/world/g11-w11s1.js`: 6 уроків — w11s1l1 «Як не допустити третьої?» (Ялта, Потсдам, ООН), l2 «Права, які не дарують» (ЗДПЛ), l3 «Завіса через Європу» (Фултон, доктрина Трумена, план Маршалла), l4 «Одна країна — дві держави» (блокада, ФРН/НДР, НАТО, ОВД, мур), l5 «На межі ядерної війни» (Корея, Карибська криза), l6 boss «Архів 1945–1962» (значок `coldwar`, `pre` у кожному оцінюваному завданні). Усі `status: "draft"`, `requires: ["g11s1l6"]` як у plan.js.
validate --section w11s1: 0 помилок, 0 попереджень. stats: l2 longWordShare z=2,1 і l3 maxReadWords z=−2 «нетипово для сім'ї» — порівняння із сім'єю 7–9 кл. (інших уроків 10–11 ще немає); у межах профілю 10–11 (термінологія «демократизація», «Декларація»; l3 — інфоекрани короткі). Навички `civ`/`eco` у world не оголошені — використано `soc`/`pol`.

**Зображення (D-027, усі — Commons, thumb.wikimedia.org; 9 файлів у img/world/w11s1/):**
- l1: yalta-1945.jpg — NARA 531340, PD-USGov — https://commons.wikimedia.org/wiki/File:Yalta_Conference_(Churchill,_Roosevelt,_Stalin)_(B%26W).jpg ; charter-preamble.jpg (обрізано праву сторінку) — NARA 5730932, No Copyright–US — …(page_2).jpg ; charter-ukrssr-signatures.jpg (обрізок) — …(page_100).jpg (перелік підписів латинкою: DM. MANUILSKY, IVAN SENIN, ALEXANDER PALLADIN, MIKOLA PETROVSKY).
- l2: eleanor-roosevelt-udhr.jpg — FDR Library, PD-USGov, листопад 1949 р. (оригінал 535 px).
- l3: truman-doctrine-1947.jpg — Truman Library 59-1252-3, PD-USGov-POTUS.
- l4: berlin-airlift-tempelhof.jpg — USAF, PD; checkpoint-charlie-1961.jpg — US Army (USAMHI), PD, жовтень 1961 р.
- l5: cuba-san-cristobal-1962.jpg — NARA 193933, DoD/JFK Library, PD; дата й підписи на самому знімку (1 NOVEMBER 1962, FORMER LAUNCH POSITIONS).
- l6: charter-big-five-signatures.jpg (обрізок …(page_98).jpg).
Відкинуто: Marshall Plan poster (автор-конкурсант E. Spreckmeester, PD-USGov сумнівний), фото Кеннеді–Хрущов у Відні (Stanley Tretick / Look — не держслужбовець), Berlin airlift Henry Ries (авторство NYT/OMGUS неясне), «червоний телефон» Carter Library (бутафорія).

**Факти (self, ≥ 2 джерела):**
1. Ялта 4–11.02.1945 (Рузвельт, Черчилль, Сталін): Франція — зона окупації й постійне місце в РБ, вето постійних членів, обіцянка вільних виборів, вступ СРСР у війну з Японією — https://history.state.gov/milestones/1937-1945/yalta-conf ; https://en.wikipedia.org/wiki/Yalta_Conference
2. Потсдам 17.07–2.08.1945, Еттлі замінив Черчилля; 4 зони, 4 сектори Берліна; демілітаризація, денацифікація, демократизація — https://en.wikipedia.org/wiki/Potsdam_Conference ; https://history.state.gov/milestones/1937-1945/yalta-conf (нав.)
3. Сан-Франциско 25.04–26.06.1945, 50 держав; Статут підписано 26.06; Польща — пізніше, 51-ша засновниця; чинність 24.10.1945 (День ООН) — https://www.un.org/en/about-us/history-of-the-un ; https://www.ukrinform.ua/rubric-world/4005575-ak-iz-nadiami-na-mirnij-svit-prokladavsa-slah-do-oon.html
4. УРСР і БРСР — засновниці за домовленістю в Ялті; делегацію УРСР очолював Д. Мануїльський (нарком/міністр закордонних справ), він підписав Статут — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CM%5CA%5CManuilskyDmytro.htm ; https://www.unian.ua/society/1094183-mzs-vidkriv-dostup-do-arhivnih-dokumentiv-pro-rol-ukrajini-u-stvorenni-oon.html ; https://en.wikipedia.org/wiki/Ukraine_and_the_United_Nations ; скан NARA (page_100)
5. Преамбула Статуту, укр. переклад «…позбавити прийдешні покоління нещасть війни, яка двічі в нашому житті принесла людству невимовне горе» — https://armyinform.com.ua/2019/10/24/sogodni-mizhnarodnyj-den-oon/ (офіційний текст zakon.rada 995_010 недоступний — звірити верифікатору); англ. — скан NARA page_2.
6. ЗДПЛ 10.12.1948, Париж (Шайо), рез. 217 A (III), 48–0–8; утрималися СРСР, УРСР, БРСР, Польща, Чехословаччина, Югославія, ПАР, Саудівська Аравія; голова комісії — Е. Рузвельт; 30 статей — https://www.un.org/en/about-us/udhr/history-of-the-declaration ; https://ccnmtl.columbia.edu/projects/mmt/udhr/udhr_general/drafting_history_10.html ; https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights
7. Тексти ст. 1, 9, 13, 19, 20 — офіційний укр. переклад: https://www.lexilogos.com/declaration/ukrainien.htm ; https://npm.ombudsman.gov.ua/wp-content/uploads/2026/02/zagalna-deklaracziya-prav-lyudyny.pdf
8. Фултон 5.03.1946, «від Штеттіна на Балтиці до Трієста на Адріатиці…», 8 столиць, «радянська сфера» — https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/ ; https://www.nationalarchives.gov.uk/education/resources/cold-war-on-file/iron-curtain-speech/
9. Доктрина Трумена 12.03.1947, 400 млн, Греція й Туреччина, цитата про «вільні народи» — https://history.state.gov/milestones/1945-1952/truman-doctrine ; фото Truman Library. Стримування (Кеннан, 1947) — https://history.state.gov/milestones/1945-1952/kennan
10. Маршалл 5.06.1947 (Гарвард); закон 3.04.1948; 13,3 млрд на 4 роки — https://history.state.gov/milestones/1945-1952/marshall-plan ; https://www.archives.gov/milestone-documents/marshall-plan
11. Чехословаччина: згода 4.07.1947, Сталін 9.07, відмова 10.07; Польща теж відмовилась — https://digitalarchive.wilsoncenter.org/document/record-iv-stalins-conversation-czechoslovak-government-delegation-issue-their-position ; https://history.state.gov/historicaldocuments/frus1947v03/d193
12. Блокада 24.06.1948–12.05.1949 (у тексті state.gov ще 11.05); причина — грошова реформа в західних зонах; повітряний міст до 30.09.1949, ≈ 2,33 млн т (≈ 2/3 вугілля); у Західному Берліні > 2 млн жителів — https://history.state.gov/milestones/1945-1952/berlin-airlift ; https://en.wikipedia.org/wiki/Berlin_Blockade ; https://history.blog.gov.uk/2018/06/18/coal-calories-and-candy-bombers-the-berlin-airlift-1948-9/
13. ФРН 23.05.1949 (Бонн), НДР 7.10.1949, мур 13.08.1961; «Чекпойнт Чарлі», жовтень 1961 — https://www.deutschland.de/en/news/germany-celebrates-75-years-of-its-basic-law ; https://www.irishtimes.com/news/key-dates-in-the-story-of-the-berlin-wall-1.248062 ; army.mil/article/46993
14. НАТО 4.04.1949, Вашингтон, 12 членів, ст. 5; ФРН — травень 1955; ОВД 14.05.1955, 8 держав — https://www.nato.int/cps/en/natohq/topics_67656.htm ; https://history.state.gov/milestones/1953-1960/warsaw-treaty
15. Корея: 25.06.1950 через 38-му паралель; РБ ООН (рез. 82–83) за відсутності СРСР (бойкот через представництво Китаю); Китай — восени 1950; перемир'я 27.07.1953, Пханмунджом, мирного договору немає — https://en.wikipedia.org/wiki/Korean_Armistice_Agreement ; https://www.cvce.eu/en/education/unit-content/-/unit/02bb76df-d066-4c08-a58a-d4686a3e68ff/e1942619-2737-449c-8958-f87864214d66/Resources ; https://magazine.thediplomat.com/2023-07/war-and-truce-the-korean-armistice-at-70 (поділ 1945 і держави 1948 — загальновідоме, self)
16. Карибська криза: U-2 14.10.1962, звернення й «карантин» 22.10, заява Хрущова 28.10, обіцянка не нападати на Кубу, таємно — «Юпітери» з Туреччини (вивезено у квітні 1963); пряма лінія — меморандум 20.06.1963 (Женева), телетайп, не телефон — https://history.state.gov/milestones/1961-1968/cuban-missile-crisis ; https://www.atomicarchive.com/resources/treaties/hot-line.html ; https://en.wikipedia.org/wiki/Moscow%E2%80%93Washington_hotline
17. Варшавський договір 21.04.1920 (Петлюра — Польща) — з hist g10s2 (текст уроку).

**Спірне / для верифікатора:** l1 екран 8 — «УРСР не мала самостійної зовнішньої політики» (тлумачення, EoU/en.wiki «quasi-state»); l2 екран 7 — офіційне пояснення СРСР «недостатньо засуджує фашизм» (Columbia drafting history); l5 «Тринадцять днів» (16–28.10) — у fbText, не оцінюється; l5 hyp — «частина радників вимагала удару» (state.gov/загальновідоме). Опори: l4 екран 2 — з фото (літаки й ящики); l4 екран 9 — табличка в body + Потсдам з екрана 3; boss Справа 1 — підписи на скані + l1.
**Пропозиції:** TERM у glossary/world (холодна війна — з малої; «залізна завіса» в лапках; Карибська криза; ОВД; Пханмунджом; Трумен, Еттлі, Мануїльський). Навички `civ`/`eco` для world 10–11 — на розсуд куратора.
