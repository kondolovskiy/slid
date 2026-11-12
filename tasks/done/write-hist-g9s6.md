---
claimed_from: todo
claimed_at: 2026-11-12T14:34:34.766Z
id: write-hist-g9s6
type: write-section
subject: hist
grade: 9
section: g9s6
weeks: [26, 29]
status: done
claimed_by: writer-hist-g9s6
created: 2026-11-10
---
# Написати розділ «Галичина — український П'ємонт» (Історія України, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати, як в Австро-Угорщині українці навчилися мирно боротися за свої права: товариствами, газетами, кооперативами і виборами.

## Теми уроків (з плану)
1. 1867: корона на двох і Галицький сейм
2. Москвофіли чи народовці? «Руська бесіда» і «Просвіта» 1868 р.
3. Франко, радикали і «нова ера»
4. Борислав, сервітути, «Верховинська акція» і кооперативи
5. Чернівці 1875 р., Буковина й Закарпаття: школи, гімназії, письменники
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Специфіка (curate-hist-coverage, 2026-11-10)
- Підстава: reports/research/coverage-research-hist-coverage-g7-9.md §4.3 C7, таблиця §3 (9 кл., розд. IV «Землі у складі Австро-Угорщини в другій пол. XIX ст.»): одиниці 9.4.1, 9.4.3–9.4.5, 9.4.7–9.4.9. Програма Гісема (URL у звіті §1), 9 кл. с. 36–50.
- Уроки g9s6l1–g9s6l6 (l6 — фінал). Тижні 26–29: між g9s4 [22, 25] і g9s5 [30, 35] (зсув — задача fix-hist-weeks-cov). `requires: ["g9s3l2"]` (Головна руська рада).
- Факти (верифікатор §8.6): «Просвіта» — Львів, 8.12.1868 (ЕСУ https://www.esu.com.ua/pdf/file/59612.pdf + EoU, ✅); Товариство ім. Шевченка — статут 11.12.1873 (✅); реорганізація в наукове товариство — «1892 р. (новий статут)» за ЕСУ https://www.esu.com.ua/pdf/file/70776.pdf (EoU дає 1893), ініціаторів-галичан не оцінювати; Чернівецький університет — жовтень (4.10) 1875 (EoU + ukrinform, ✅).
- Вже є й не дублюй: РУРП і Франко-політик (g9s5l1), Грушевський і НТШ (g9s5l3), еміграція (g9s4l4). Дуалізм 1867 — w9s3l4, фемінізм — w9s5l3 (world): `link`, український вимір (Галицький сейм, українсько-польське суперництво), без повтору.
- Тест рівня dgh9: нова cur-тема для g9s6 — лише в наступній редакції з новим id (бажане, не в цій задачі).
- Пріоритет у звіті має розділ «Незалежна верифікація» (виправлення верифікатора важливіші за текст автора звіту).
- id уроків — лише нові, у форматі `<id розділу>l<n>` (D-017); фінал — останній, `boss: true`, власний значок у `sec.badges`.
- D-027: у кожному уроці ≥ 1 справжнє `img` (скіл `hist-images`; на Вікісховищі одночасно ≤ 2 агенти).
- Факти: спершу memory/long/facts/hist.md і hist-2.md; новий факт — ≥ 2 надійні джерела з URL у нотатках. Рядки FACT у memory/short/inbox.md від дослідників і верифікаторів 10.11 — підказка, не реєстр: позначене ⚠ звір сам.
- Після написання — незалежна перевірка `content-verifier` (задача → review).

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- Скіл зображень `.claude/skills/hist-images/SKILL.md` і docs/IMAGES.md (D-027)
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js
- Розділи цього ж класу з уроками: g9s1, g9s2, g9s3, g9s4, g9s5 — вирівнюйся по них

## Результат
- Файл `content/hist/g9-g9s6.js` з `SLID.section("hist", { id: "g9s6", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/hist/g9s6/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section g9s6` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### write-hist-g9s6 (12.11.2026)
**Файл:** `content/hist/g9-g9s6.js`, 6 уроків (5 тем + boss), усі `draft`. `requires: ["g9s3l2"]`, weeks [26, 29], значок `piedmont`.
- l1 «Листівка без жодного слова» — сейм 1861, дуалізм 1867 (link w9s3l4), автономія, польська мова 1869, курії, 49/150.
- l2 «Будинок, що дістався іншим» — Народний дім (1849/1851–1864/1872), москвофіли й народовці, «Руська бесіда» 1861 (театр 1864), «Просвіта» 8.12.1868, Т-во ім. Шевченка 1873, «Діло» 1880.
- l3 «В'язниця, вибори й компроміс» — арешт Франка 1877, радикали, вибори 1895/1897/1898, «нова ера» 1890–1894, «Сокіл» 1894, «Січ» 1900.
- l4 «Ліс, нафта й крамниця» — сервітути, Борислав (озокерит, страйк 1904), «Народна торгівля» 1883, Верховинська акція 1897–1901.
- l5 «Три краї під однією короною» — Буковина (сейм 1861, університет X.1875, Федькович, Кобилянська), Закарпаття (мадяризація, закони Апоньї 1907), «П'ємонт» як тлумачення (link w9s3l2).
- l6 фінал «Виставка в Народному домі» — 6 завдань з `pre` (l1–l5; l5 двічі: Буковина й Закарпаття).
**Межі:** РУРП/Франко-політик — лише посилання на g9s5l1; Грушевський і НТШ — g9s5l3 (у l3 лише «на одну з кафедр 1894 р. приїхав Грушевський» у fbText); g9s5l7 (1901–1910, Кобринська) не дублюю; еміграція — посилання на g9s4l4; Духнович і «Руська трійця» — пригадування з g9s2l3. Файл g9s5 не чіпав.

**Перевірки:** validate --section g9s6 — 0 помилок, 0 попереджень. euphony — 1 відхилення «Війна і мир» (стала назва, лишено). stats: l5 longWordShare z=2.6 (0,069 — у межах профілю 0–0,11; назви Чернівці/Закарпаття/мадяризація), l6 readWordsPerScreen z=−2,1 (фінал із короткими підписами; 16 слів/екран, у межах профілю 8–45).

**Зображення (D-027, усі з Commons, мініатюри thumb.wikimedia.org, переглянуто вручну):**
- l1, l6: `sejm-lviv-1904.jpg` ← File:Lwów_-_Lemberg._Sejm_krajowy_-_Landtagsgebäude.jpg (листівка Lederer & Popper, Прага, 1904 — надруковано на самій листівці; PD-old-70 + PD-US опубл. до 1931). Написи лише польською й німецькою — на цьому завдання l1 е2.
- l2: `narodnyi-dim-lviv.jpg` ← File:Lwów_-_Lemberg._Dom_Narodny_i_ulica_Teatralna.jpg (1908–1912, джерело uma.lvivcenter.org/en/photos/3016; PD-old-70 + PD-US).
- l3: `franko-1900.jpg` ← File:Ivan_Franko_circa_1900.jpg (PD-old-70-1923, PD-US опубл. до 1931; автор у описі «н.», у вікітексті — І. Труш (†1941) — в обох випадках PD). Відкинуто IvanFranko1886.jpg: музей (museum-digital, Дім Франка) ставить CC BY-NC-SA на скан — конфлікт ліцензій, як Open Kurbas.
- l4: `boryslav-ozokerite-1902.jpg` ← File:Borysław,_szyb_kopalni_wosku_ziemnego.jpg («Ilustracya Polska», 1902, № 24; PD-old-70 + PD-US). Опис Commons про вибух (17 загиблих) у `cap` не взято — одне джерело.
- l5, l6: `fedkovych-1870.jpg` ← File:Fedkowicz_huțul.jpg (PD-EU-no author disclosure; тегу PD-US на сторінці немає — фото 1870 р. невідомого автора: PD у США як анонімний твір > 120 років; дата 1870 — лише за описом Commons, у `cap` так і сказано). ⚠ Верифікатору: якщо PD-US сумнівне — заміна з категорії Yuriy_Fedkovych.

**Факти й джерела (≥ 2 відкритих, перевірено в сесії):**
1. Галицький сейм — з 1861 р., Львів; 1861: 49 українських послів із 150 (≈ третина, найбільше за всю історію); згодом значно менше; 1913 — близько 30 (EoU 30 / uk.wiki 31); курії (4), сільська — через виборників; поляки — завжди більшість; зловживання на виборах — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CI%5CDietprovincial.htm ; https://uk.wikipedia.org/wiki/Галицький_крайовий_сейм . Будинок — нині головний корпус ЛНУ: uk.wiki там само + https://zaxid.net/u_golovnomu_korpusi_lvivskogo_universitetu_zaminyat_polovinu_starih_vikon_n1486123 (рік будівництва не даю: 1877–1881 / 1878–… розходяться).
2. 1869 — польська мова урядів і судів Галичини; автономія під польським пануванням — https://ww1.habsburger.net/en/node/5911 ; https://uk.wikipedia.org/wiki/Галицька_автономія . Компетенції сейму (школи, господарство краю) — habsburger.net + uk.wiki (Крайова шкільна рада).
3. Народний дім: заснований 1849 Головною руською радою, будинок 1851–1864 на пожертви, 1872 — повністю в руках москвофілів, українофілів не допускали — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CE%5CPeoplesHomeinLviv.htm ; https://uk.wikipedia.org/wiki/Народний_дім_(Львів)
4. Москвофіли: окрема група з 1860-х, коли Відень віддав край польській шляхті; «частина російського народу»; язичіє; «Слово» 1861–1887; втратили першість у 1880-х — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CU%5CRussophiles.htm ; https://uk.wikipedia.org/wiki/Москвофільство . (Т-во Качковського 1874/1876 і процес 1881/1882 — розходяться, не вживаю.)
5. Народовці: 1860-ті, окрема нація від Карпат до Кавказу, жива мова, ідеї «Руської трійці» й Кирило-Мефодіївського братства — https://uk.wikipedia.org/wiki/Народовці ; EoU Galicia https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm
6. «Руська бесіда» — Львів, 1861 (Ю. Лаврівський); театр з 1864 — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainskabesida.htm ; https://uk.wikipedia.org/wiki/Українська_бесіда ; https://en.wikipedia.org/wiki/Ukrainska_Besida_Theatre (дата першої вистави 29.03 / 10.04.1864 — розходиться, лише рік).
7. «Просвіта» — 8.12.1868, перший голова А. Вахнянин (1868–1870), читальні — EoU Prosvita https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProsvita.htm ; ЕСУ https://www.esu.com.ua/pdf/file/59612.pdf (кількість читалень 1913/1914 розходиться: 2649 / 2944 — не вживаю).
8. Товариство ім. Шевченка — 11.12.1873 (є в звіті покриття ✅); меценати з Наддніпрянщини (Є. Милорадович, Д. Пильчиков) — EoU ShevchenkoScientificSociety ; uk.wiki Народовці.
9. «Діло» — 1.(13.)01.1880, Львів, щоденна з 1888; назва — на противагу «Слову» (лише EoU — на екрані подано як свідчення енциклопедії) — https://uk.wikipedia.org/wiki/Діло_(газета) ; https://www.encyclopediaofukraine.com/pages%5CD%5CI%5CDiloIT.htm
10. Франко: арешт 1877 (з Павликом; EoU — 8 міс., на екрані «кілька місяців»), вплив Драгоманова, вибори 1895/1897/1898 — програв через махінації; «Борислав сміється» — EoU FrankoIvan https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CF%5CR%5CFrankoIvan.htm ; https://uk.wikipedia.org/wiki/Іван_Франко ; син коваля — facts №318.
11. «Нова ера» 1890–1894: Романчук, Барвінський, митр. С. Сембратович ↔ намісник К. Бадені; гімназії, кафедри у Львівському університеті, українська в судах/урядах; 1894 Романчук — в опозицію; радикали засуджували — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CN%5CE%5CNewera.htm ; https://uk.wikipedia.org/wiki/Нова_ера_(Галичина)
12. «Сокіл» — Львів, лютий 1894, за чеським зразком — EoU Sokil https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CO%5CSokil.htm ; https://edu.lvivcenter.org/?p=3439 . «Січ» — Завалля, травень 1900, К. Трильовський, руханка й пожежна справа, 1913 — понад 900 — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CI%5CSichsocieties.htm ; https://uk.wikipedia.org/wiki/Січ_(товариство)
13. Сервітути: ліси й пасовища після 1848 — суперечки, суди здебільшого на боці панів — ЕІУ «Сервітути» (32 тис. справ, 30 тис. програно) http://resource.history.org.ua/cgi-bin/eiu/history.exe?…S21STR=Servituty ; https://uk.wikipedia.org/wiki/Сервітути (інші числа) — числа лише в `note`.
14. Борислав: нафта й озокерит, ручний видобуток з ям, страйк 1904 (поліція й війська) — EoU Boryslav https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CO%5CBoryslav.htm ; https://uk.wikipedia.org/wiki/Борислав . Еміграція з 1880-х — EoU Galicia.
15. «Народна торгівля» — Львів, 1883, В. Нагірний і А. Ничай, гуртові закупівлі — https://uk.wikipedia.org/wiki/Народна_торгівля ; https://www.encyclopediaofukraine.com/pages%5CN%5CA%5CNarodnaTorhovlia.htm
16. Верховинська акція: 1897, угорський уряд, Е. Еган; оренда панської землі, худоба, кредитні спілки; Еган загинув 1901 — https://uk.wikipedia.org/wiki/Едмунд_Еган ; Braun L. «A hegyvidéki akció első évei…» https://ojs.lib.unideb.hu/ujnezopont/article/view/17708 (+ https://dspace.kmf.uz.ua/jspui/bitstream/123456789/3459/1/Csilla_Fedinec_Imre_Szakal_Istvan_Csernicsko_A_magyarorszagi_ruszinok_es_ukranok_2020.pdf). Дати смерті 20/22.09 — не вживаю.
17. Чернівецький університет — жовтень (4.10) 1875, німецька мова, 3 факультети, кафедра української мови й літератури на філософському; Томащук 1872 (лише EoU — подано як свідчення) — EoU ChernivtsiNationalUniversity ; https://uk.wikipedia.org/wiki/Чернівецький_університет . Сейм Буковини 1861 — EoU Diet, provincial.
18. Федькович 1834–1888, служба в австрійському війську, спершу німецькою, «Буковина» з 1885 — EoU FedkovychYurii ; https://uk.wikipedia.org/wiki/Юрій_Федькович . Кобилянська 1863–1942, спершу німецькою, з 1891 у Чернівцях — EoU KobylianskaOlha ; https://uk.wikipedia.org/wiki/Ольга_Кобилянська
19. Закарпаття: мадяризація після 1867; закони Апоньї (1902 і) 1907 — угорська в церковних школах; частина інтелігенції мадяризувалась — EoU Transcarpathia https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CR%5CTranscarpathia.htm ; https://bgazrt.hu/nemzetpolitikai-kutatointezet/folyoiratok/kisebbsegi-szemle/tarjan-m-tamas-generozus-alku-vagy-ravasz-zsarolas-a-lex-apponyi-es-a-kesei-dualizmus-kori-oktataspolitika-ertekelese/
20. «Український П'ємонт» — метафора після 1876 (EoU Galicia), критика як міфу — https://zaxid.net/galitski_mifi_mif_3_galichina__ukrayinskiy_pyemont_n1044509 ; подано як тлумачення.

**Опора неочевидна (D-019):** l3 е5 (вибори Франка) спирається на l1 е5 (виборники сільської курії); l5 е3 (Томащук) — на l1 е3 (1869); l5 е8 — на l4 е9 (акція Егана) і l2; фінал з. 6 — на l5 е6 і g9s2l3 (Духнович). Нові терміни: l1 — крайовий сейм, автономія, курія, посол; l2 — москвофіли, народовці, читальня, меценат; l3 — радикали, намісник, компроміс, «нова ера»; l4 — сервітути, озокерит, страйк, кооператив; l5 — коронний край, мадяризація, «П'ємонт» (≤ 5 на урок).
**Пропозиції:** глосарій — «москвофіли / народовці / радикали», «курія», «сервітути», «Верховинська акція», «закони Апоньї» (форма «Апоньї»); dgh9 — нова cur-тема g9s6 (новою редакцією, не в цій задачі). Позиції правильних choice: 2,0,1 / 2,1 / 2,0 / 1,2,0 / 0,1 / 1,2,0,1; multi — [1,3], [0,3], [1,2], [1,2].
