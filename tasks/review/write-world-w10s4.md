---
claimed_from: review
claimed_at: 2026-11-11T12:26:04.767Z
id: write-world-w10s4
type: write-section
subject: world
grade: 10
section: w10s4
weeks: [14, 17]
status: review
claimed_by: verifier-w10s4
created: 2026-11-10
---
# Написати розділ «Тоталітарні режими» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб розпізнавати ознаки тоталітаризму на прикладах фашистської Італії, нацистської Німеччини й СРСР і розуміти, чому демократії тоді програвали.

## Теми уроків (з плану)
1. Муссоліні та фашизм в Італії
2. Від Веймарської республіки до влади нацистів
3. Нацистська ідеологія й антисемітизм
4. СРСР — тоталітарна держава імперського типу
5. Громадянська війна в Іспанії
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
- Файл `content/world/g10-w10s4.js` з `SLID.section("world", { id: "w10s4", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s4/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s4` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

**Виконано (w-write-world-w10s4, 2026-11-11).** Файл `content/world/g10-w10s4.js`, 6 уроків: l1 «Усе в державі» (фашизм в Італії), l2 «Республіка, яку не вберегли» (Веймар → нацисти), l3 «Ненависть, записана в закон» (ідеологія й антисемітизм), l4 «Імперія під червоним прапором» (СРСР, `link`), l5 «Небо над Герникою» (Іспанія), l6 boss «Архів доби диктатур» (значок `dictatorwatch`). Усі `status: "draft"`. `requires`: w9s2l3, w9s3l3, w10s1l4, w10s3l2 (усі існують; w10s3 — у review). validate: 0 помилок, 0 попереджень; stats — без прапорців; euphony — 0.

**Зображення (img/world/w10s4/, мініатюри thumb.wikimedia.org):**
- l1 `march-on-rome-1922.jpg` — File:Benito_Mussolini_marching_into_Rome.jpg, «The Outlook» 29.11.1922, Wide World Photos; PD-1923 + PD-Italy. Опис Commons: «A scene at the Victor Emmanuel monument»; Муссоліні на фото не розгледіти — у завданні це й обіграно.
- l2 `inflation-children-1923.jpg` — File:Children_using_bundles_of_marks_as_toys_in_Germany,_Literary_Digest_(1923-12-08),_p17.jpg; PD-1923 (анонімне, опубл. 1923). На Commons лише US-тег — верифікатору звірити.
- l3/boss `boycott-1933.jpg` — Bundesarchiv Bild 102-14468, Georg Pahl, 1.04.1933, CC BY-SA 3.0 DE. Місце в описі архіву «Berlin oder Oldenburg (?)» → у `cap` лише «Німеччина».
- l4 `klutsis-poster-1936.jpg` — File:Klucis,_Выше_знамя_Маркса,_Энгельса,_Ленина_и_Сталина!.jpg; PD-old-70 (Клуцис † 1938). Commons: дата 1936, категорія «1933 posters»; на відбитку видно «ОГИЗ — ИЗОГИЗ, Москва 1936 Ленинград» → 1936 (видання; первісний дизайн, імовірно, 1933).
- l5/boss `guernica-ruins-1937.jpg` — Bundesarchiv Bild 183-H25224, 1937, автор невідомий, CC BY-SA 3.0 DE. Картину Пікассо не брали (авторське право до 2044).

**Факти й джерела (нові, ≥ 2 джерела):**
- Fasci di combattimento 23.03.1919, Мілан — https://www.novecento.org/wp-content/uploads/2024/03/fascismo-e-antifascismo-cronologia-1919-1926.pdf ; https://uca.edu/politicalscience/dadm-project/europerussiacentral-asia-region/italy-1919-1990
- «Покалічена перемога» (д'Аннунціо), бієнале 1919–1920, суперечка істориків — https://en.wikipedia.org/wiki/Mutilated_victory ; https://encyclopedia.1914-1918-online.net/article/vittoria-mutilata/
- «Похід на Рим»: < 30 тис., король відмовився від стану облоги, призначення 30.10.1922 (Wikipedia дає і 29.10 як доручення — у тексті «30 жовтня призначив») — https://en.wikipedia.org/wiki/March_on_Rome ; https://courses.lumenlearning.com/suny-hccc-worldhistory2/chapter/italy-under-mussolini/
- Маттеотті 10.06.1924; промова 3.01.1925; заборона партій листопад 1926 — https://libcom.org/article/10-june-1924-murder-giacomo-matteotti ; https://www.ilpost.it/2025/01/03/discorso-mussolini-3-gennaio-1925-matteotti-100-anni/ ; https://ebsco.com/research-starters/history/mussolini-seizes-dictatorial-powers-italy
- «Тоталітарний» — Амендола, травень 1923 («Il Mondo»), Муссоліні підхопив 1925 — https://fascio.substack.com/p/the-origin-of-totalitarianism ; https://recyt.fecyt.es/index.php/RevEsPol/article/view/49313/30284
- «Доктрина фашизму» 1932, «per il fascista, tutto è nello Stato… il fascismo è totalitario»; перша частина — Джентіле — https://it.wikisource.org/wiki/La_dottrina_del_fascismo ; https://en.wikipedia.org/wiki/The_Doctrine_of_Fascism . Формулу «Усе в державі, нічого поза державою…» з датою 28.10.1925 підтвердити не вдалося — не вжито.
- Гіперінфляція: 4,2 трлн марок за долар (листоп. 1923), рентна марка 15.11.1923 — https://www.historisches-lexikon-bayerns.de/Lexikon/EN:Inflation,_1914-1923 ; https://en.wikipedia.org/wiki/Hyperinflation_in_the_Weimar_Republic
- Путч 8–9.11.1923, 5 років; > 6 млн безробітних на поч. 1932 — https://www.history.com/articles/weimar-republic ; https://kids.britannica.com/students/article/Weimar-Republic/277696
- Вибори NSDAP 2,6 / 18,3 / 37,3 / 33,1 % — https://en.wikipedia.org/wiki/Nazi_Party_election_results ; https://www.historylearningsite.co.uk/?p=5632
- 30.01.1933, указ після пожежі, закон 23.03.1933 (444:94, проти лише SPD, KPD не допущено), 14.07.1933 — https://encyclopedia.ushmm.org/content/en/article/the-nazi-rise-to-power ; https://en.wikipedia.org/wiki/Enabling_Act_of_1933
- Бойкот 1.04.1933, плакат «Deutsche! Wehrt euch! Kauft nicht bei Juden!» — https://encyclopedia.ushmm.org/content/en/article/the-boycott-of-jewish-businesses ; опис Bundesarchiv 102-14468
- Спалення книжок 10.05.1933, Берлін ≈ 20 тис. томів — https://encyclopedia.ushmm.org/content/en/article/book-burning ; https://en.wikipedia.org/wiki/Bebelplatz
- Гейне, «Альманзор» (1820/1821), табличка на Бебельплац — https://www.visitberlin.de/de/node/21467 ; https://en.wikipedia.org/wiki/Bebelplatz (у тексті «понад сто років раніше», без року)
- Нюрнберзькі закони 15.09.1935 — https://www.jewishvirtuallibrary.org/the-reich-citizenship-law ; https://facinghistory.org/resource-library/nuremberg-laws
- Євреї 1933 ≈ 505 тис., < 0,75 % — https://encyclopedia.ushmm.org/content/en/article/germany-jewish-population-in-1933 (+ «менш ніж 1 %» — USHMM rise-to-power)
- «Кришталева ніч» 9–10.11.1938: понад 1400 синагог у Німеччині й Австрії (Яд Вашем) / «понад 1000–1100» (ін.) → «понад тисячу»; 26 тис. (USHMM) / 30 тис. (Яд Вашем) → «десятки тисяч»; загиблих «сотні» (USHMM; Яд Вашем — 91 убитий) — https://wwv.yadvashem.org/yv/en/exhibitions/kristallnacht/index.asp ; https://encyclopedia.ushmm.org/content/en/article/kristallnacht
- «Mein Kampf» про землі на сході (не вжито в тексті, лише для довідки) — https://sites.pitt.edu/~syd/hit.html
- СРСР 30.12.1922 (4 республіки) — https://en.wikipedia.org/wiki/Treaty_on_the_Creation_of_the_USSR ; https://bigenc.ru/c/dogovor-ob-obrazovanii-sssr-1922-f6f1a2
- Сталін 4.02.1931 «відстали на 50–100 років… за десять років» — https://soviethistory.msu.edu/1929/year-of-great-change/year-of-great-change-texts/stalin-tasks-of-business-executives/ ; https://people.uncw.edu/townendp/stalinspeech.htm
- ГУЛАГ ≈ 18 млн у 1929–1953 (Еплбаум) — https://www.heritage.org/europe/report/gulag-understanding-the-magnitude-what-happened ; https://en.wikipedia.org/wiki/Gulag:_A_History
- Великий терор: 681 692 розстріляних за даними НКВС; оцінки 0,7–1,2 млн загиблих — https://en.wikipedia.org/wiki/Great_Purge ; https://www.warhistoryonline.com/world-war-ii/10-facts-stalins-great-purge.html
- Конституція 5.12.1936, ст. 125, 127 — https://www.departments.bucknell.edu/russian/const/36cons04.html ; https://rrc.ge/law/Gkon_1936_12_05_e.htm
- Постанова РНК СРСР і ЦК ВКП(б) 13.03.1938 № 324 про обов'язкове вивчення російської — https://axl.cefan.ulaval.ca/europe/urss-decret-1938.htm ; https://www.gazeta.ru/social/2018/03/12/11679751.shtml
- Клуцис: арешт 16/17.01.1938, розстріл 26.02.1938 (Бутово) — https://en.wikipedia.org/wiki/Gustav_Klutsis ; https://www.moma.org/interactives/objectphoto/artists/12501.html ; https://thecharnelhouse.org/2016/10/12/gustav-klutsis-revolutionary-propagandist-1895-1938/
- Голодомор (3,9 млн / ≥ 7 млн), УРСР 1937–1938 ≈ 200 тис. засуджених, Сандармох (Курбас, Куліш, Зеров) — як у hist g10s4, facts/hist №176.
- Іспанія: республіка 14.04.1931; Народний фронт 16.02.1936; заколот 17–18.07.1936; Франко — 1.10.1936; кінець 1.04.1939; невтручання (серпень 1936, підписали й Німеччина, Італія, СРСР); Італія 70–75 тис., «Кондор» ≈ 16 тис. (ротація), СРСР — техніка й радники — https://en.wikipedia.org/wiki/Spanish_Civil_War ; https://www.spainthenandnow.com/spanish-history/civil-war-international-context ; https://www.history.com/articles/spanish-civil-war-foreign-nationals-volunteer
- Герніка 26.04.1937 («Кондор» + Aviazione Legionaria), базарний день; баскський уряд — 1654; Gernikazarra — 126 → 153 (попередньо); оцінки до 300 (Villarroya, Solé i Sabaté) → у тексті «від 153 до 300 — сучасні дослідники»; Пікассо почав 11.05.1937 — https://en.wikipedia.org/wiki/Bombing_of_Guernica ; https://www.unr.edu/nevada-today/news/2022/gernika-criteria-of-truth
- La Retirada 1939: 440 тис. (франц. уряд) — ≈ 500 тис. → «майже пів мільйона» — https://en.wikipedia.org/wiki/La_Retirada ; https://albavolunteer.org/2019/03/the-painful-past-of-spanish-civil-war-refugees-in-france-80-years-on/
- Загальні втрати війни в Іспанії — без числа («сотні тисяч»): оцінки надто різняться.

**Сумнівне / для верифікатора:** Britannica 403 (не звірено). «Багато заможних італійців давали фашистам гроші» і «поліція часто не заважала» — загальне місце підручників, окремо не звірено. Опори: l2 «Скільки місяців» — екран 9 (дати); l4 multi «імперський тип» — екрани 3 і 7 (право виходу з Союзу на екрані не подано, дистрактор відкидається міркуванням); boss Q4 — l4 екран 7 і l5. Пропозиція до глосарію: «Герніка» (так у тексті; варіант «Ґерніка» не вживаємо), «дуче», «рейхсканцлер», «закон про надзвичайні повноваження», «Кришталева ніч», «ГУЛАГ», «Легіон Кондор».

## Верифікація (verifier-w10s4, 2026-11-11)
Звіт: reports/verify/w10s4.md. l1, l2, l3, l5, l6 → verified; **l4 — draft**: тег PD-old-70 на плакаті Клуциса хибний (Клуциса реабілітовано 25.08.1956 → в РФ плакат охороняється до 31.12.2026, у США за URAA — до 2031 р.), потрібне рішення людини (замінити зображення чи прийняти ризик). 7 мінімальних правок: Герніка (додано оцінку «понад 2 тис.», завдання «чому оцінки різні» переписано нейтрально, boss Q5), 681 692 «засудили до розстрілу», «армія могла б зупинити» вилучено, «фронт далеко» замінено, варіант фото бойкоту. Фото дітей 1923 р. по суті вільне (анонімне), але на Commons бракує тега країни походження — рекомендація. validate: 0/0.
