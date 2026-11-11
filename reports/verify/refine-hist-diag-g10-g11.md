# Верифікація refine-hist-diag-g10-g11 (g11s1 → 10 кл., dgh10 `for`, dgh11 → dgh11b)

Верифікатор: verifier-refine-hist-diag-g10-g11 · 2026-11-11 · задачу не виконував.
Скіли: content-verify, math-pool-diag («Тест рівня»), CONTENT_SCHEMA §9.

## Вердикт
- **dgh10:** придатний → `verified`. Змінено лише метадані: `g11s1` додано у `for` для srccrit, fact і lands. Завдання, індекси, id і `rev` не змінено (`git diff 816a0c4 HEAD`).
- **dgh11b:** придатний → `verified`. Від dgh11 відрізняється лише тим, що вилучено 2 теми й 2 завдання, а з `for` прибрано g11s1. Решта 26 завдань ідентичні до символу (diff містить лише вилучення).
- **Перенос g11s1 і тижні:** коректні.
- **Правки верифікатора:** 2, обидві лише статус і meta: `status` "draft" → "verified" у diag-g10.js і diag-g11.js, у meta.factcheck дописано позначку верифікатора, у шапці dgh10 речення «Статус знову draft…» замінено на позначку перевірки. Змістових правок не було.

## 1. Перенос і тижні
| Перевірка | Результат |
|---|---|
| `git mv g11-g11s1.js → g10-g11s1.js` (similarity 99 %), `grade: 10`, `weeks: [29, 35]` | ✅ |
| id розділу g11s1, уроків g11s1l1…l6, g11s1boss, значка | ✅ не змінено: у diff лише шапка, grade і weeks |
| Шапка: «10 клас… (до 2026-11 — 11 кл.)», посилання → tasks/done/write-hist-g11s1.md (файл існує) | ✅ |
| Тижні 10 кл.: 1–5, 6–17, 18–20, 21–24, 25–28, 29–35 | ✅ 1–35 підряд, без накладань, = plan.js |
| Тижні 11 кл.: 1–14, 15–20, 21–26, 27–35 | ✅ 1–35 підряд, без накладань, = plan.js |
| index.html, sw.js, manifest → `hist/g10-g11s1.js` (build у 6b5f7fd) | ✅ |
| Підстава: програма № 698 (наказ МОН від 03.08.2022): «ІСТОРІЯ: УКРАЇНА І СВІТ (1914–1945 рр.). 10 клас», «Розділ 6. Друга світова війна»; «(від 1945 р. до сучасності). 11 клас» | ✅ [текст програми, PDF ІППО](https://ippo.if.ua/predmety/istoriya/media/files/history-U-and-W-10-11-2022.pdf) (відкрито, текст витягнуто pdftotext); [пошук МОН / osvita](https://mon.gov.ua/news/z-tsogo-navchalnogo-roku-starshoklasniki-navchatimutsya-za-novimi-programami-z-istorii-ukraini) (сторінка МОН дає 403, зміст підтверджено результатами пошуку). Зауваження: модельна програма 2025 для 10–12 кл. (НУШ, [osvita.ua](https://ru.osvita.ua/doc/files/news/973/97306/2025-mnp-10-12-shhupak-ta-in-istoriia-ta.pdf)) ставить 1914–1945 в 11 кл.; для чинних 10–11 кл. вона ще не діє, відповідне питання вже в TQ-086 |

## 2. dgh10: доречність `for` g11s1
`for` впливає лише на порядок кроків плану: прогалини, потрібні для найближчого розділу, стоять першими.
| Тема | На чому стоїть у g11s1 | Вердикт |
|---|---|---|
| srccrit (l4: автор і мета джерела) | l1 «Факт чи виправдання?» (пропаганда «визволення»), l2 «Критично читати окупаційну пропаганду», l3 окупаційне оголошення, l4 «Як дослідити звіт загону?» | ✅ |
| fact (l1: факт і тлумачення) | ядро розділу: «розрізняти правду й радянські міфи» (why), l4 «Яке твердження не спрощує історію?» | ✅ |
| lands (h23: історичні землі) | g11s1l2: «Галичина стала окремим дистриктом…», boss: схема з дистриктом Галичина | ✅ (зв'язок слабший, але реальний) |
| cent, twoemp — не додано | у g11s1 немає ні століть, ні імперій до 1917 р. | ✅ рішення правильне |

## 3. dgh11b: новий id і наслідки
| Перевірка | Результат |
|---|---|
| Новий id потрібен | ✅ Вилучення завдань за CONTENT_SCHEMA §9 можливе лише з новим id; `rev` міняє лише завдання на місці з тією самою темою |
| Тест класу шукається так: `diagFor = (c.diags).find(d => d.grade === S.grade)` (app/app.js:22) | ✅ Тест hist 11 кл. лише один, dgh11 більше не публікується, тож двох карток бути не може |
| diagOrder (content/subjects/hist.js: 3) | ✅ не змінено; порядок тестів (math → ukr → hist → world) той самий |
| Профіль, де dgh11 завершено | Наслідки нижче, рушій не ламається |
| Профіль, де dgh11 перервано | `S.diagRun.dgh11` осиротіє, `diagPart` дивиться на dgh11b, тож тест почнеться спочатку. Не ламається |
| Профіль, де стоїть «Пізніше» (`diagSkip.dgh11`) | запрошення на dgh11b з'явиться знову (це очікувано) |
| Посилання на "dgh11" у tools/тестах/app | ✅ немає (grep) |
| Вилучено g11-pact (g11s1l1) і g11-crimea (g11s1l5) разом з їхніми завданнями (колишні індекси 14, 16) | ✅ |
| `for`: g11s1 прибрано з усіх тем; west, oun → g11s2 | ✅ формально. Зауваження без блокування: уроку про захід і ОУН/УПА в g11s2 ще немає, він з'явиться як g11s2l7 у revise-hist-g11s2-cov. До того `for` лише ставить ці прогалини на початок плану 11 кл. Іншого розділу 11 кл., ближчого за темою, немає |
| Структура: 10 pre × 2 + 6 cur × 1 = 26, pre → cur, базове перед складнішим | ✅ (dump) |
| Тривалість | 26 завдань: на картці «≈ 9 хв» (`diagMins` = 0,35·n); реальна оцінка 12–14 хв, бо 6 multi по 6 тверджень і 3 sort. Межа ≤ 30 дотримана, а обсяг не більший, ніж у dgh5/dgh9 (по 26 завдань) |

Що бачить дитина з завершеним dgh11 (app/learn.js `planFor`, `diagOpen`; app/app.js `viewPlan`, `homeDiags`):
- `planByGrade.hist[11]` лишається, кроки плану на повторення працюють, картка плану на головній є, тож запрошення на новий тест на головній немає.
- В екрані плану зникає картка «Тест рівня» з рівнем і темами (`S.diag.dgh11b` немає). Замість неї кнопка «Пройти тест рівня».
- `diagOpen`: plan.diag = "dgh11" більше немає серед ctx.diags, тому тренування уроків, відкрите pre-темами «ok», закривається до повторного тесту. `known` (cur) лишається, але g11s1l1/l5 тепер 10 кл. і з `known` 11 кл. випадають (це коректно).

## 4. Розв'язання завдань dgh11b (сам, до звірки з `correct`)
Завдання dgh10 не змінювалися. Їх перевірив verifier-dgh10, а теми lands розв'язано ще раз: індекси 6 і 25 збіглися.

| # | Тема | Моя відповідь | `correct` | Вердикт |
|---|---|---|---|---|
| 0 | cent | XX ст. (1) | 1 | ✅ |
| 1 | univ | автономія у складі більшої держави (2) | 2 | ✅ |
| 2 | fact | «братовбивча» — оцінка (0) | 0 | ✅ |
| 3 | holod | легше забирати зерно (1) | 1 | ✅ |
| 4 | west | Польща (2) | 2 | ✅ |
| 5 | srccrit | могла замовчувати (0) | 0 | ✅ |
| 6 | fail | Антанта (1) | 1 | ✅ |
| 7 | terror | позасудовий орган (2) | 2 | ✅ |
| 8 | ukrz | втримати владу (0) | 0 | ✅ |
| 9 | oun | ОУН (1) | 1 | ✅ |
| 10 | cent sort | 1900→XIX, 1901/2000→XX, 2001/2014→XXI | [0,1,1,2,2] | ✅ |
| 11 | univ sort | I, III, IV, I, IV | [0,1,2,0,2] | ✅ |
| 12 | fact sort | Ф, О, Ф, О | [0,1,0,1] | ✅ |
| 13 | holod multi | 1, 2, 4 | [1,2,4] | ✅ |
| 14 | srccrit | звірити, чи була причина приховувати (2) | 2 | ✅ |
| 15 | fail order | ЦР → IV Універсал → Гетьманат → Злука → Ризький мир | те саме | ✅ |
| 16 | g11-dissid | 0, 2, 4 | [0,2,4] | ✅ |
| 17 | west sort | Пол, Пол, Рум, Чсл, Чсл | [0,0,1,2,2] | ✅ |
| 18 | g11-chnpp | 1, 3, 4 | [1,3,4] | ✅ |
| 19 | terror sort | Т, П, Т, П | [1,0,1,0] | ✅ |
| 20 | g11-ref | 0, 3, 4 | [0,3,4] | ✅ |
| 21 | ukrz | розквіт і розстріли (1) | 1 | ✅ |
| 22 | g11-const | 0, 2, 4, 5 | [0,2,4,5] | ✅ |
| 23 | oun order | УВО → УНДО → ОУН → Пацифікація | те саме | ✅ |
| 24 | g11-money | 1, 3, 4 | [1,3,4] | ✅ |
| 25 | g11-2014 | 0, 3, 5 | [0,3,5] | ✅ |

D-019 для тесту рівня (CONTENT_SCHEMA §9): кожне завдання перевіряє одну тему попередніх класів (pre) або ядро уроку `learned` (cur, складений multi). Опора кожного — урок із `lessons` теми. Неправильні варіанти однозначно хибні.

## 5. Факти (вибірково; зміст завдань не змінено, повну звірку зробив verifier-dgh11 → reports/verify/dgh11.md)
| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Програма № 698 від 03.08.2022: 10 кл. — 1914–1945 рр., 11 кл. — від 1945 р. | [PDF програми](https://ippo.if.ua/predmety/istoriya/media/files/history-U-and-W-10-11-2022.pdf); [MON news (пошук)](https://mon.gov.ua/news/z-tsogo-navchalnogo-roku-starshoklasniki-navchatimutsya-za-novimi-programami-z-istorii-ukraini) | ✅ |
| Референдум 1.12.1991: питання «Чи підтверджуєте Ви Акт…», 90,32 % учасників | [Interfax](https://interfax.com.ua/news/general/783085.html); [ФАІР](https://www.fair.org.ua/?p=4003) | ✅ |
| УГГ — 9.11.1976, Гельсінський акт — 1.08.1975 (отже, УГГ постала пізніше) | [Encyclopedia of Ukraine](https://www.encyclopediaofukraine.com/pages%5CU%5CK%5CUkrainianHelsinkiGroup.htm); [hsa.org.ua](https://www.hsa.org.ua/blog/syogodni-vidznacajetsia-47-riccia-z-dnia-zasnuvannia-ukrayinskoyi-gelsinskoyi-grupi); [Радіо Свобода](https://www.radiosvoboda.org/a/mykola-rudenko-uhh/31613943.html) | ✅ |
| Гривня: реформа з 2.09.1996, 100 000 : 1, ціни й зарплати перераховано за тим самим співвідношенням | [Факти](https://fakty.com.ua/ua/ukraine/ekonomika/20250902-den-ukrayinskoyi-gryvni-shho-mozhna-bulo-kupyty-za-100-grn-1996-roku-i-zaraz/); [The Page](https://thepage.ua/ua/economy/yak-grivnya-zyavilasya-v-ukrayini-u-veresni-1996-roku) | ✅ |
| Карпатська Україна: незалежність 15.03.1939; УНО — 92,4 % | [ЕСУ](https://esu.com.ua/pdf/file/890336.pdf); [zaxid.net](https://zaxid.net/karpatska_ukrayina_skilki_isnuvala_ukrayinska_derzhava_istoriya_tsikavi_fakti_n1633381) | ✅ |
| Биківня: комісія 1971 р. приписала поховання нацистам; насправді це жертви НКВС | [zaxid.net](https://zaxid.net/bikivnyanski_mogili_kogo_hovali_u_lisi_pid_kiyevom_zhertvi_radyanskoyi_sistemi_n1610561); [Укрінформ](https://www.ukrinform.ua/rubric-society/4123929-tisa-bikivni-vid-specobekta-nkvs-do-zapovidnika-nacionalnoi-pamati.html) | ✅ |
| ЧАЕС: евакуація Прип'яті 27.04, перше офіційне повідомлення 28.04.1986 | [Obozrevatel](https://www.obozrevatel.com/ukr/novosti-obschestvo/40-rokiv-katastrofi-na-chaes-hronika-tragedii-scho-oznamenuvala-rozpad-srsr.htm); [Факти](https://fakty.com.ua/ua/ukraine/20210422-ostanni-dity-u-chornobyli-istoriya-evakuatsiyi-pislya-katastrofy-na-chaes/amp/) | ✅ |
| УВО 1920; УНДО 11.07.1925; ОУН — Відень, 1929; пацифікація 1930 | [EU: UVO](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianMilitaryOrganization.htm); [EU: UNDO](https://www.encyclopediaofukraine.com/pages%5CU%5CK%5CUkrainianNationalDemocraticAlliance.htm); [Еспресо: ОУН](https://espreso.tv/news-tsey-den-v-istorii-u-vidni-stvoreno-organizatsiyu-ukrainskikh-natsionalistiv); [osvita.ua](https://osvita.ua/vnz/reports/history/4691/) | ✅ |
| «Розстріляне відродження» — антологія, Париж, 1959 | [BnF](https://www.bnf.fr/sites/default/files/2023-06/Colloque%20Renaissance%20fusill%C3%A9e%20-%20ouvrages%20BnF%20BULAC.pdf); [ОННБ, бібліографія](https://odnb.odessa.ua/img/novini_2025/4948/literatura-pro-zhittya-i-diyalnist-yu-lavrinenka.pdf) | ✅ |
| Резолюція ГА ООН 68/262 (27.03.2014) — територіальна цілісність України | [UN Digital Library](https://digitallibrary.un.org/record/767883); [МЗС](https://mfa.gov.ua/news/spilna-zayava-z-nagodi-somoyi-richnici-shvalennya-generalnoyu-asambleyeyu-oon-rezolyuciyi-68262-teritorialna-cilisnist-ukrayini) | ✅ |
| Голодомор: закон 7.08.1932 («п'ять колосків»), «чорні дошки» й натуральні штрафи (м'ясо, картопля), директива 22.01.1933 про заборону виїзду з України й Кубані | [Encyclopedia of Ukraine](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CF%5CA%5CFamine6Genocideof1932hD73.htm); [HREC](https://scalar.ukrhec.org/depicting-genocide/1933--the-holodomor-reaches-its-peak) | ✅ |
| Конституція 28.06.1996; народ — єдине джерело влади (ст. 5) | [president.gov.ua](https://www.president.gov.ua/documents/constitution/konstituciya-ukrayini-rozdil-i); [osvita.ua](https://osvita.ua/legislation/law/2227) | ✅ |

## 6. Прогін
- `node tools/validate.mjs --diag dgh10` — 0/0; `--diag dgh11b` — 0/0; `--section g11s1` — 0 помилок, 2 давні попередження; повний `validate` — 0 помилок, 72 попередження.
- `node tools/personalization-qa.mjs --diag dgh10` → EXIT 0, 27 завдань; `--diag dgh11b` → EXIT 0, 26 завдань (для hist матриці немає, перевірено лише структуру).
- test-learn 2934, test-hyp 625, test-evidence 258, test-validate 1620 — зелені.
- Плейтест не запускали: у контейнері немає Python-модуля playwright, тож прогін лише в CI.

## 7. Людині
- **Новий id dgh11b скидає прогрес тесту рівня 11 кл. з історії.** Хто завершив dgh11: план і кроки лишаються, але на екрані плану зникає підсумок тесту. Тренування, відкрите pre-темами «засвоєно», закривається до повторного проходження. Перерваний dgh11 почнеться спочатку. Скільки дітей уже пройшли dgh11, видно лише в журналі подій. Підтвердити, що це прийнятно (альтернативи в схемі немає).
- TQ-086: підтвердити перенос g11s1 у 10 кл. (програма № 698; модельна програма НУШ 2025 для 10–12 кл. розподіляє інакше).
- Проміжна прогалина: до наступних редакцій (dgh10b із cur-темами g11s1, dgh11c із g11s2l6/l7, g11s4l5) теми «пакт 1939» і «депортація кримських татар» не перевіряє жоден тест.
