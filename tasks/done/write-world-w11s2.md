---
claimed_from: todo
claimed_at: 2026-11-11T01:05:12.118Z
id: write-world-w11s2
type: write-section
subject: world
grade: 11
section: w11s2
weeks: [5, 11]
status: done
claimed_by: w-write-world-w11s2
created: 2026-11-10
---
# Написати розділ «Захід: демократія, добробут, права людини» (Всесвітня історія, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити, як Західна Європа й Північна Америка відбудувалися, розширили права людини й об'єдналися в Європейський Союз.

## Теми уроків (з плану)
1. «Економічне диво» ФРН
2. Рух за громадянські права в США
3. 1968: молодь змінює суспільство
4. Кінець диктатур у Південній Європі
5. Від ЄЕС до Європейського Союзу
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
- Файл `content/world/g11-w11s2.js` з `SLID.section("world", { id: "w11s2", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w11s2/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [x] `node tools/validate.mjs --section w11s2` — 0 помилок
- [x] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
### Зроблено (w-write-world-w11s2, 2026-11-11)
Файл `content/world/g11-w11s2.js`: 6 уроків, усі `status: "draft"`. `requires`: w9s4l2, w9s5l3 (з плану) + w11s1l3 (план Маршалла, опора l1). validate — 0 помилок, 0 попереджень; stats — жодного прапорця.
- l1 «Диво з нових грошей» (8 екр.) — реформа 1948, соціальне ринкове господарство, безробіття 1950/1960, факт vs міф «вітрини за ніч», гастарбайтери.
- l2 «Мрія про рівність» (10) — сегрегація, Паркс, бойкот, Кінг, марш 1963 (фото-джерело), закони 1964/1965.
- l3 «Покоління, що сказало «ні»» (10) — причини 1968, травень у Франції, фото страйку, наслідки; link — виступ Дзюби 1965 (hist g11s2l3); poll з pollKey.
- l4 «Весна після диктатур» (8) — Португалія 1974, Греція 1967–1974, Іспанія 1975–1978; скан BOE 1978 як джерело.
- l5 «Вугілля, сталь і мир» (9) — Декларація Шумана, ЄОВС, Римські договори (сторінка підписів 4 мовами), розширення, Маастрихт, євро; link — Євромайдан 2013 (hist g11s4l3), Угода про асоціацію 2014, кандидат 23.06.2022.
- l6 фінал «Виставка…» (7) — 6 завдань, `pre` на l1–l5, значок `westdem`.

### Зображення (D-027) — img/world/w11s2/
| урок | файл | ліцензія | URL |
|---|---|---|---|
| l1 | erhard-wohlstand-1957.jpg | CC BY-SA 3.0 DE (Bundesarchiv B 145 Bild-F004204-0003, Doris Adrian) | https://commons.wikimedia.org/wiki/File:Bundesarchiv_B_145_Bild-F004204-0003,_Ludwig_Erhard_mit_seinem_Buch.jpg |
| l2 | march-on-washington-1963.jpg | PD (USIA, NARA 542002) | https://commons.wikimedia.org/wiki/File:March_on_washington_Aug_28_1963.jpg |
| l2, l6 | civil-rights-act-1964.jpg | PD-USGov-POTUS (C. Stoughton, LBJ Library 18031) | https://commons.wikimedia.org/wiki/File:Lyndon_Johnson_signing_Civil_Rights_Act,_July_2,_1964.jpg |
| l3 | sorbonne-occupied-1968.jpg | CC0 (Anefo 921-3968, Eric Koch, Nationaal Archief) | https://commons.wikimedia.org/wiki/File:Frankrijk._Sorbonne_bezet_door_studenten,_Bestanddeelnr_921-3968.jpg |
| l3 | paris-metro-strike-1968.jpg | CC0 (Anefo 921-3734, Eric Koch) | https://commons.wikimedia.org/wiki/File:Stakingen_in_Frankrijk._Metro-stations_gesloten_Gare_de_lEst,_Bestanddeelnr_921-3734.jpg |
| l4 | boe-constitucion-1978.jpg | CC BY 4.0 (скан Amfeli; документ — офіційне видання) | https://commons.wikimedia.org/wiki/File:BOE_Constitución_Española_1978.jpg |
| l5 | treaty-rome-1957.jpg | CC BY-SA 3.0 DE (Bundesarchiv Bild 183-45653-0001) | https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-45653-0001,_Rom,_Verträge_über_Zollpakt_und_Eurotom_unterzeichnet.jpg |
| l5 | treaty-rome-signatures.jpg | CC BY-SA 3.0 / GFDL (Zinneke) | https://commons.wikimedia.org/wiki/File:Traité_CEE_signatures.jpg |
Відкинуто: плакати й графіті травня 1968 з BnF/Gallica (анонімні твори 1968 р. у Франції ще під охороною, позначка CC0/PD від завантажувача сумнівна); «Revolução dos Cravos.jpg» (автор невідомий, ліцензія лише з футера сайту CD25A) — для Португалії фото немає, урок l4 спирається на скан BOE.

### Факти з джерелами
- Грошова реформа 20.06.1948 (німецька марка замість рейхсмарки), скасування державних цін Ерхардом; «вітрини наповнилися» — Бундесбанк; «враження… перебільшене», ціни росли при замороженій зарплаті — KAS: https://www.bundesbank.de/de/aufgaben/themen/waehrungsreform-1948-614040 ; https://www.kas.de/en/web/wissenschaftliche-dienste-archiv/essay/-/content/ludwig-erhard-seine-bedeutung-fuer-die-wirtschaftsgeschichte-deutschlands-seit-dem-zweiten-weltkrieg . Дату Leitsätzegesetz (17/18 чи 24.06) свідомо не подаю — джерела розходяться.
- Безробіття ФРН: 1950 — ≈1,87 млн (11,0 %), 1960 — ≈270 тис. (1,3 %): https://www.bpb.de/themen/arbeit/arbeitsmarktpolitik/305833/daten-und-fakten-arbeitslosigkeit/ ; GHDI (Statistisches Bundesamt) https://www.germanhistorydocs.ghi-dc.org/pdf/deu/Chapter3_doc_15.pdf
- Угоди про набір робітників: Італія 20.12.1955, Туреччина 30.10.1961; до 1973 ≈14 млн приїхали, >11 млн повернулися: https://www.bpb.de/kurz-knapp/hintergrund-aktuell/324552/erstes-anwerbeabkommen-vor-65-jahren/ ; https://www.bpb.de/kurz-knapp/hintergrund-aktuell/342651/vor-60-jahren-anwerbeabkommen-zwischen-der-bundesrepublik-deutschland-und-der-tuerkei/
- Ерхард із книжкою «Wohlstand für Alle» 28.01.1957 — підпис Bundesarchiv (див. таблицю). ФРН 23.05.1949, Аденауер — як у w11s1 l4. Ерхард — міністр економіки 1949–1963 (загальновідомо; верифікатору звірити з Britannica).
- Арешт Рози Паркс 1.12.1955, бойкот 381 день (5.12.1955 – 20.12.1956), рішення Верховного суду (Browder v. Gayle) — кінець 1956: https://www.history.com/articles/montgomery-bus-boycott ; https://kids.britannica.com/students/article/Montgomery-bus-boycott/630403
- Brown v. Board 17.05.1954; марш 28.08.1963 ≈250 тис.; Civil Rights Act 2.07.1964 (фото LBJ Library); Voting Rights Act 1965; Нобелівська премія Кінга 1964; убивство 4.04.1968 — NARA (опис фото 542002), LBJ Library; верифікатору звірити з https://www.archives.gov/milestone-documents/civil-rights-act і https://www.nobelprize.org/prizes/peace/1964/king/facts/ . Цитату Кінга подано переказом із двома короткими цитатами («не за кольором шкіри»), не дослівним перекладом.
- Травень 1968: Сорбонну закрито 3.05 (арешт ректора — Arrêté Archives nationales 20020476-301 на Commons), барикади 10–11.05, профспілки 13.05, страйк 7–10 млн (CNRS — 7 млн, Britannica — ≈10 млн), Гренель 27.05 (+35 % мінімальної зарплати), розпуск парламенту 30.05, вибори червня 1968 — перемога голлістів, відставка де Голля 1969 після референдуму: https://www.britannica.com/event/events-of-May-1968 ; https://en.wikipedia.org/wiki/Grenelle_agreements ; https://news.cnrs.fr/print/1281
- Дзюба 4.09.1965 — з hist g11s2l3 (екран 405).
- Португалія: Салазар 1932–1968, колоніальні війни з 1961, 25.04.1974, вибори до Установчих зборів 25.04.1975 (явка ≈91,7 %): https://en.wikipedia.org/wiki/1975_Portuguese_Constituent_Assembly_election ; https://www.museudoaljube.pt/en/2025/01/24/right-to-vote-first-free-elections/
- Греція: хунта 21.04.1967, переворот на Кіпрі й вторгнення Туреччини — липень 1974, референдум 8.12.1974 (≈69 % за республіку): https://www.tovima.com/vima-history/1974-referendum-the-definitive-abolition-of-the-monarchy ; https://greekcitytimes.com/2022/12/08/greek-republic-referendum-held-today-on-8-december-1974/
- Іспанія: Франко † 20.11.1975, Хуан Карлос I, вибори 15.06.1977, Конституція — дати з самої обкладинки BOE (кортеси 31.10, референдум 6.12, король 27.12, публікація 29.12.1978). Вступ до ЄЕС: Греція 1981, Іспанія й Португалія 1986 — https://european-union.europa.eu/principles-countries-history/history-eu_en
- Декларація Шумана 9.05.1950 — англ. текст Фонду Шумана: https://www.robert-schuman.eu/en/declaration-du-9-mai-1950 («Europe will not be made all at once, or according to a single plan»; «…not merely unthinkable, but materially impossible»); переклад мій (офіційна укр. сторінка europa.eu давала 429 — верифікатору звірити з https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_uk ). ЄОВС 18.04.1951, Римські договори 25.03.1957 (підпис Bundesarchiv), чинні з 1958, розширення 1973/1981/1986, Маастрихт 7.02.1992, готівкові євро 1.01.2002, 2004 — 10 держав: europa.eu (history-eu).
- Україна — ЄС: Угода про асоціацію 2014 (політична частина 21.03, економічна 27.06), кандидат — Європейська рада 23.06.2022: https://en.wikipedia.org/wiki/Accession_of_Ukraine_to_the_European_Union ; https://www.wilsoncenter.org/blog-post/ukraine-eu-member-candidate ; Євромайдан 21.11.2013 — hist g11s4l3.

### Сумнівні місця / для верифікатора
- l3 «У ФРН питали батьків про нацистське минуле» — узагальнення (типове для підручників), без числа й дати.
- l1 intro: «1947 р. … продукти за картками, на чорному ринку гроші майже нічого не варті» — загальне тло (Бундесбанк, KAS).
- l5 intro cap: «ліворуч — Аденауер, праворуч — Сеньї» за підписом Bundesarchiv (зліва направо: Аденауер, Гальштейн, Сеньї); фото з фонду ADN, підпис може бути неточним.
- l5 екран 6: на сторінці договору — бельгійський примірник (опис Commons, lb.wiki); мови — видно на фото.
- Опори завдань: l1 фінал «Утворення ФРН» — екран 3; l2 «Скільки чекали рівності?» — 13-та поправка подана на екрані 2 (w9s4l2); l6 усі завдання — з l1–l5.


### Верифікація (verifier-w11s2, 2026-11-11)
Придатний: 6 уроків → verified. 42 факти звірено з відкритими джерелами, усі завдання розв'язано, опора є в кожному. Правки (3): l1 екран 6 — вигадана «цитата» Бундесбанку замінена точним перекладом; l2 екран 7 — стать у Законі 1964 р. лише для роботи; l5 екран 5 — eyebrow 1957–2004. Офіційного укр. перекладу Декларації Шумана немає — лишено «(переклад)». Потрібен build. Звіт: reports/verify/w11s2.md
