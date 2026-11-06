# Верифікація: тест рівня «Історія України, 11 клас» (dgh11)

Верифікатор: verifier-dgh11 (свіжий контекст, тест не писав), 2026-11-06.
Файл: `content/hist/diag-g11.js`; задача: `tasks/…/write-hist-diag-g11.md`.
Вердикт: **придатний — `status: "verified"`** (4 мінімальні правки змісту + статус і `factcheck`). `approved` — лише вчитель.

## Прогін
- `node tools/validate.mjs --diag dgh11` — 0 помилок, 0 попереджень (до й після правок).
- Заборонені фрази (style/banned-phrases.txt) — 0 збігів.
- Структура: 10 pre × 2 + 8 cur × 1 = 28 завдань; усі `lessons` існують і мають статус verified; cur-уроки без boss; `for` — розділи g11s1–g11s5. Без `fbOk`/`fbText`/`hint`, без заборонених типів. Правильні choice — на позиціях 0/1/2 упереміш (D-016).
- Тест не опубліковано (коміт 59a26c9 є лише в гілці `claude/trusting-faraday-y1ztaw`, у `origin/main` його немає), тож правки на місці зроблено без `rev`.
- Плейтест не запускався (тест рівня; браузерний прогін — на оркестраторі або в CI).

## 1. Факти
| Твердження (№ завдання) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Акт 24.08.1991 (XX ст.) (1, 23) | https://uinp.gov.ua/istorychnyy-kalendar/serpen/24/1991-progoloshennya-derzhavnoyi-nezalezhnosti-ukrayiny ; https://uinp.gov.ua/istorychnyy-kalendar/gruden/1/1991-vseukrayinskyy-referendum-ta-vybory-prezydenta-ukrayiny ; facts №13 | ✅ |
| ЦР — Київ, березень 1917; I Універсал — автономія без відокремлення від Росії, відповідь на відмову Тимчасового уряду; III — УНР; IV — незалежність (2, 3, 12) | EoU «Universals of the Central Rada» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CN%5CUniversalsoftheCentralRada.htm ; EoU «Central Rada» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CE%5CCentralRada.htm ; uk.wiki https://uk.wikipedia.org/wiki/Українська_Центральна_Рада ; uk.wiki https://uk.wikipedia.org/wiki/Четвертий_Універсал_Української_Центральної_Ради | ✅ |
| IV Універсал ухвалено, коли на Київ наступали більшовики (12) | EoU «Universals» (Мала Рада ухвалила 25.01.1918, уже під час українсько-радянської війни); uk.wiki «Бій під Крутами» https://uk.wikipedia.org/wiki/Бій_під_Крутами (наступ Муравйова на Київ, 29–30.01.1918) | ✅ |
| Гетьманат — 29.04.1918; Акт Злуки — 22.01.1919; Ризький мир — 18.03.1921 (3, 18) | uk.wiki https://uk.wikipedia.org/wiki/Гетьманський_переворот_1918 ; uk.wiki https://uk.wikipedia.org/wiki/Акт_Злуки ; пошук (fakty.com.ua, armyinform: 22.01.1919); EoU «Riga, Peace Treaty of» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CI%5CRigaPeaceTreatyof.htm ; facts №169, №170 | ✅ |
| Антанта не підтримала УНР (7) | EoU «Directory» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CI%5CDirectoryoftheUkrainianNationalRepublic.htm (переговори з Антантою провалилися); пошук: Городня, ІВІ НАН https://elibrary.ivinas.gov.ua/615/1/6-5-Horodnia.pdf (Антанта не скористалася «вікном», пріоритет — боротьба з більшовизмом); facts №170 | ✅ |
| Суцільна колективізація — з листопада 1929; мета — зерно під контролем держави (4) | EoU «Collectivization» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CO%5CCollectivization.htm ; facts №177; урок g10s4l1 | ✅ |
| Галичина між війнами — у Польщі (5) | EoU «Galicia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm ; EoU «Pacification» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CA%5CPacification.htm | ✅ |
| «Трійки» — позасудовий орган, без адвоката, часто заочно; ліміти задано наперед (8, 22) | uk.wiki https://uk.wikipedia.org/wiki/Трійка_НКВС ; en.wiki https://en.wikipedia.org/wiki/NKVD_Order_No._00447 ; facts №181 | ✅ |
| Українізація з 1923; мотив — закріпити радянську владу серед українців (9) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainization.htm («veneer of national legitimacy», «placate the peasantry»); uk.wiki https://uk.wikipedia.org/wiki/Українізація («стабілізація більшовицької влади»; Шаповал: «вимушений крок»); facts №173 | ✅ |
| УВО — 1920, підпільна; УНДО — 1925, легальна, найбільша; ОУН — 1929, Відень, підпільна (10, 26) | EoU «UVO» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianMilitaryOrganization.htm ; uk.wiki https://uk.wikipedia.org/wiki/Українська_військова_організація ; EoU «UNDO» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianNationalDemocraticAlliance.htm ; uk.wiki https://uk.wikipedia.org/wiki/Українське_національно-демократичне_об'єднання ; EoU «OUN» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CR%5COrganizationofUkrainianNationalists.htm ; uk.wiki https://uk.wikipedia.org/wiki/Організація_українських_націоналістів | ✅ |
| Пацифікація — осінь 1930, Галичина (20, 26) | EoU «Pacification» (вище; 21.09–16.10.1930); пошук: gazeta.ua, glavcom (погроми читалень «Просвіти», кооперативів) | ✅ |
| Двомовні школи з перевагою польської (закон 1924) (20) | пошук: Цецик, istvolyn.info; osvita.ua (закон 31.07.1924, загроза утраквізації); facts №183; урок g10s5l1 | ✅ |
| Буковина: до кінця 1920-х — жодної української школи навіть за назвою (20) | ЕСУ https://www.esu.com.ua/pdf/file/36656.pdf («Після реформи 1927–28 не залишилося укр. шкіл навіть за назвою»); EoU «Bukovyna» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBukovyna.htm | ✅ |
| «Просвіта» в Ужгороді — 1920 (20) | пошук: dspace.uzhnu.edu.ua (Панкулич, Стряпко: 9.05.1920); facts №184 | ✅ |
| Закарпаттю автономію обіцяно 1919, надано 1938 (20) | uk.wiki https://uk.wikipedia.org/wiki/Карпатська_Україна ; EoU «Transcarpathia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CT%5CR%5CTranscarpathia.htm | ✅ |
| Карпатська Україна: 15.03.1939, Хуст; УНО 92,4 % (13) | uk.wiki «Карпатська Україна» (вище); EoU «Transcarpathia» (вище; 12.02.1939, без відсотка); facts №185 | ✅ |
| «П'ять колосків» (7.08.1932); «чорні дошки» й натуральні штрафи м'ясом і картоплею (листопад 1932); заборона виїзду селян України й Кубані (22.01.1933) (14) | uk.wiki https://uk.wikipedia.org/wiki/Закон_про_п'ять_колосків ; https://www.radiosvoboda.org/a/zakon-pro-5-koloskiv-yak-stalin-vybyvav-iz-selyan-khlib/31982230.html ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CF%5CA%5CFamine6Genocideof1932hD73.htm (blacklisting, fines in kind in meat and potatoes, 22.01.1933); uk.wiki https://uk.wikipedia.org/wiki/Чорні_дошки ; ru.wikisource «Директива … № 65/ш» https://ru.wikisource.org/wiki/Директива_ЦК_ВКП(б)_и_СНК_СССР_в_связи_с_массовым_выездом_крестьян_за_пределы_Украины ; uk.wiki «Голодомор» https://uk.wikipedia.org/wiki/Голодомор_в_Україні_1932—1933 | ✅ |
| Пакт 23.08.1939, таємний протокол — сфери впливу; 1.09 — Німеччина; 17.09 — СРСР (15) | USHMM https://encyclopedia.ushmm.org/content/en/article/german-soviet-pact ; УІНП https://uinp.gov.ua/istorychnyy-kalendar/serpen/23/1939-pidpysao-pakt-molotova-ribbentropa ; facts №186 | ✅ |
| «Визволення» — пропагандне виправдання (15 Е) | пошук: Радіо Свобода, glavcom, eurointegration (МЗС Польщі: «агресія за згодою з нацистською Німеччиною»); урок g11s1l1 (екран 5) | ✅ |
| Биківня: комісія 1971 р. підтвердила версію про «жертв нацистів»; визнання — 1988–1989 (16) | https://www.ukrinform.ua/rubric-society/4123929-tisa-bikivni-vid-specobekta-nkvs-do-zapovidnika-nacionalnoi-pamati.html ; https://zaxid.net/bikivnyanski_mogili_kogo_hovali_u_lisi_pid_kiyevom_zhertvi_radyanskoyi_sistemi_n1610561 ; facts №182 | ✅ |
| Депортація кримських татар, травень 1944: колективне звинувачення без суду; серед виселених — родини червоноармійців і самі військові; указ 1967 не дав повернення; масове повернення — кінець 1980-х; геноцид — ВРУ, 12.11.2015 (17) | УІНП https://uinp.gov.ua/informaciyni-materialy/zhurnalistam/do-rokovyn-deportaciyi-krymskyh-tatar-18-travnya-1944-roku ; uk.wiki https://uk.wikipedia.org/wiki/Депортація_кримських_татар ; en.wiki https://en.wikipedia.org/wiki/Deportation_of_the_Crimean_Tatars ; пошук: постанова ВРУ № 792-VIII (pravda.com.ua, kodeksy.com.ua) | ✅ |
| Дисиденти — відкрита незгода, легальні методи (не повстання); самвидав — неофіційне копіювання з рук у руки; протест 4.09.1965 у кінотеатрі (19) | EoU «Dissident movement» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CI%5CDissidentmovement.htm ; EoU «Samvydav» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CA%5CSamvydav.htm ; facts №196 | ✅ |
| Гельсінський акт — 1.08.1975; УГГ — 9.11.1976, Руденко; мета — домагатися виконання гуманітарних зобов'язань (19) | EoU «UHG» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianHelsinkiGroup.htm ; uk.wiki https://uk.wikipedia.org/wiki/Українська_Гельсінська_група ; ООН, резолюція 68/262 (преамбула: «signed in Helsinki on 1 August 1975») https://documents.un.org/doc/undoc/gen/n13/455/17/pdf/n1345517.pdf | ✅ |
| ЧАЕС: 26.04.1986; причини — вади РБМК і дії персоналу; евакуація Прип'яті 27.04; визнання 28.04 після Швеції; відселення й криза довіри (21) | ЧАЕС https://www.chnpp.gov.ua/ua/activity/42-about/accident-of-1986 ; uk.wiki https://uk.wikipedia.org/wiki/Чорнобильська_катастрофа ; ООН https://www.un.org/en/observances/chernobyl-remembrance-day/background ; facts №198–200 | ✅ |
| Референдум 1.12.1991: питання про підтвердження Акта; 90,32 % — від учасників голосування (23) | УІНП (вище); uk.wiki https://uk.wikipedia.org/wiki/Всеукраїнський_референдум_1991 ; facts №204 | ✅ (нюанс: УІНП подає питання з «від 24 серпня 1991 року», uk.wiki і реєстр (ЦВК) — без дати; формулювання тесту = реєстр і урок g11s3l3) |
| «Тіні забутих предків»: прем'єра стала протестом проти арештів (19, нове твердження) | EoU «Dissident movement» (вище; 1965 Kyiv cinema gathering); facts №196; урок g11s2l3, екрани 4–5 | ✅ |
| «Розстріляне відродження» — антологія, Париж, 1959, твори 1917–1933 (24) | uk.wiki https://uk.wikipedia.org/wiki/Розстріляне_відродження ; пошук: en.wiki «The Executed Renaissance», бібліотечні описи; facts №176 | ✅ |
| Конституція 28.06.1996; ст. 5 — народ — джерело влади; ст. 6 — три гілки; ст. 8 — найвища юридична сила; Кабмін — виконавча влада (25) | ВРУ https://www.rada.gov.ua/print/194685.html ; uk.wiki https://uk.wikipedia.org/wiki/Конституція_України ; facts №205 | ✅ |
| Спад 1990-х — кілька причин (розрив союзних зв'язків, енергетичний шок, емісія); реформа 1996 — 100 000 : 1, перерахунок цін, зарплат і вкладів за тим самим курсом (27) | пошук: Світовий банк, WPS 1361 https://ideas.repec.org/p/wbk/wbrwps/1361.html (втрата торгівлі з СНД і ціни на енергію); Britannica https://www.britannica.com/place/Ukraine/Economic-difficulties ; пошук: jpfrd.donnu.edu.ua, glavcom (100 000 : 1 для пенсій, вкладів і рахунків); facts №206, №207 | ✅ |
| Крим: окупація з 20.02.2014 (закон); «референдум» 16.03; резолюція 68/262 від 27.03 — територіальна цілісність, «референдум» не має чинності (28) | ООН 68/262 (PDF, вище: п. 1, п. 5); https://press.un.org/en/2014/ga11493.doc.htm ; пошук: закон № 685-VIII про дату 20.02.2014 (ligazakon, buhplatforma); facts №211, №212 | ✅ |
| Донбас, квітень 2014: захоплення угрупованнями за участі й підтримки Росії (28 Е) | ЄСПЛ через Atlantic Council https://www.atlanticcouncil.org/blogs/ukrainealert/echr-ruling-confirms-russian-invasion-of-ukraine-began-in-2014 (російські військові на сході з квітня 2014 р., ефективний контроль з 11.05.2014); OHCHR 14th report https://www.ohchr.org/Documents/Countries/UA/Ukraine_14th_HRMMU_Report.pdf (конфлікт із середини квітня 2014 р.); facts №213 | ✅ |

Дисклеймер про мережу: zakon.rada.gov.ua (503) і monetary-policy-debates.bank.gov.ua (DNS) з середовища не відкрилися; ті самі факти підтверджено іншими джерелами вище.

## 2. Завдання: розв'язок і опора
Кожне завдання розв'язав сам до звірки з `correct`; усі збіглися з ключем (після правок — теж).

| № | Тема | Моє розв'язання | Опора | Вердикт |
|---|---|---|---|---|
| 1 | cent | XX ст. | l3: правило століття, 1991 → XX ст. у sort | ✅ |
| 2 | univ | «власні закони й уряд у складі більшої держави» | g10s2l1 екрани 2–3 | ✅ |
| 3 | fact | «братовбивча» | g10s1l1 екран 8 (те саме вміння) | ✅ |
| 4 | holod | «зерно легше забирати…» | g10s4l1 екран 1 | ✅ |
| 5 | west | Польща | g10s5l1 екрани 2–3 | ✅ |
| 6 | srccrit | «могла замовчувати» | l4: зацікавленість автора (екран 3) | ✅ |
| 7 | fail | Антанта | g10s2l8 екрани 4–5 | ✅ |
| 8 | terror | позасудовий орган | g10s4l3 екран 2 | ✅ (скорочено правильний варіант, див. правки) |
| 9 | ukrz | «стати ближчою до українців і втримати владу» | g10s3l2 екрани 0–2; learned «Пояснювати, навіщо…» | ✅ (див. сумнівне 2) |
| 10 | oun | ОУН | g10s5l2 екрани 2, 4–5 | ✅ |
| 11 | cent | 1900 → XIX; 1901, 2000 → XX; 2001, 2014 → XXI | l3: «століття — 100 років», fbText «Виняток — роки на 00: 1700 рік ще належить XVII ст.», sort з 2000 → XX | ✅ (див. сумнівне 1) |
| 12 | univ | I, III, IV, I, IV | g10s2l1 екрани 4, 6, 8; g10s2l2 екрани 0, 2–3 | ✅ |
| 13 | fact | факт, оцінка, факт, оцінка | міркування (дата й відсоток — перевірні); g10s5l3 hyp: «це питання тлумачення» | ✅ |
| 14 | holod | 1, 2, 4 | g10s4l2 екрани 2, 4, 5 | ✅ після правки (див. правки) |
| 15 | g11-pact | 0, 3, 5 | g11s1l1 екрани 1–5; learned: хронологія, відкрита й таємна частини, пропаганда | ✅ |
| 16 | srccrit | «з'ясувати мотив і звірити» | l4 (Хто? Навіщо? Хто ще?); сюжет — g10s4l3 екрани 7–8 | ✅ |
| 17 | g11-crimea | 1, 3, 4 | g11s1l5 екрани 0–6; усі три learned | ✅ |
| 18 | fail | ЦР → IV Ун. → Гетьманат → Злука → Ризький мир | g10s2l8 екран 8 (той самий порядок + Варшавський договір) | ✅ |
| 19 | g11-dissid | 0, 2, 4 | g11s2l3 екрани 2, 4–7 | ✅ після правки (покрито третє learned) |
| 20 | west | П, П, Р, Ч, Ч | g10s5l1 екрани 4, 7, 9 | ✅ |
| 21 | g11-chnpp | 1, 3, 4 | g11s2l4 екрани 2–5, 7–8 | ✅ |
| 22 | terror | терор, правосуддя, терор, правосуддя | g10s4l3 екрани 1–4 | ✅ |
| 23 | g11-ref | 0, 3, 4 | g11s3l3 екрани 2–7 | ✅ |
| 24 | ukrz | «культура розквітла, а творців знищили» | g10s3l3 екрани 0–1, 7 | ✅ |
| 25 | g11-const | 0, 2, 4, 5 | g11s3l4 екрани 2, 4–6 | ✅ |
| 26 | oun | УВО → УНДО → ОУН → пацифікація | g10s5l2 екрани 2, 4, 7 (хроніка з роками); learned «…роки їх постання» | ✅ (див. сумнівне 3) |
| 27 | g11-money | 1, 3, 4 | g11s4l1 екрани 2, 4–8 | ✅ |
| 28 | g11-2014 | 0, 3, 5 | g11s5l1 екрани 2–7 | ✅ після уточнення формулювання |

Покриття `learned` у cur: g11s1l1, g11s1l5, g11s3l3, g11s3l4, g11s4l1, g11s5l1 — усі вміння; g11s2l4 — хронологія (Г), тривалі наслідки (Д), повідомлення влади (В, Е), причини (А, Б); g11s2l3 — до правки не перевірялося «Пов'язувати культурний і правозахисний рухи», після правки — твердження Е.

## 3. Сумнівні місця автора
1. **№11 (1900 → XIX ст.)** — виводиться. У l3 правило «століття — 100 років», `fbText` задачі про 1648 р. прямо каже «Виняток — роки, що закінчуються на 00: 1700 рік ще належить XVII ст.», а sort показує 2000 → XX. Залишено.
2. **№9 («втримати владу»)** — залишено. Питання «що найкраще пояснює» — питання на пояснення, а не на розрізнення факту й тлумачення. Це тлумачення — загальноприйняте в історіографії: EoU («veneer of national legitimacy», «placate the peasantry») і uk.wiki («стабілізація більшовицької влади», Шаповал). Learned уроку — «Пояснювати, навіщо більшовики запровадили українізацію». Обидва дистрактори хибні фактично. Звужувати не потрібно.
3. **№26 (ОУН 1929 → пацифікація 1930)** — залишено. Роки постання організацій — learned уроку g10s5l2; порядок той самий, що в хроніці уроку. Сусідні роки — частина «складнішого» завдання; базове №10 перевіряє лише поняття.
4. **srccrit на l4 (5 кл.)** — прийнятно: №16 розв'язується вмінням l4 без знання про Биківню, а сюжет знайомий з g10s4l3.

## 4. Педагогіка, чутливі теми, форма
- Голодомор (№6, 14), терор (№8, 16, 22), депортація (№17), Чорнобиль (№21), 2014 (№28) — без натуралістичних деталей, без цифр жертв; формулювання — за реєстром і уроками. «Російська агресія», «окупація», «так званий референдум» — як у документах України й ООН; дистрактори-заперечення («до 2022 р. втручання не було», «референдум змінив статус») однозначно хибні й відкидаються уроком g11s5l1.
- №28 Е до правки — «угруповання, яких посилювала Росія»: формулювання допускало прочитання «місцеві угруповання, яким Росія лише допомагала». Це близько до наративу агресора. Уточнено до «за участі й підтримки Росії» (ЄСПЛ: російські військові на сході з квітня 2014 р.; реєстр №213 — військовий контроль).
- №14 до правки — підказка формою: умова «які рішення забирали їжу або закривали шлях» дозволяла відкинути обидва «Дозвіл…» лише з читання умови, без знань уроку. Умову змінено на «Які з цих рішень влада справді ухвалила…»; варіанти й ключ ті самі.
- №8 — правильний варіант був удвічі довший за дистрактори (підказка довжиною); скорочено.
- №16 — правильний варіант найдовший і «зважений»; лишаю: зважена відповідь — саме вміння l4. Рекомендація на розсуд людини — урівняти довжину.
- Тривалість: ≈ 12–13 хв (12 choice, 5 sort, 2 order, 9 multi по 5–6 тверджень). Трохи більше за орієнтир 10 хв, на рівні dgh9 (≈ 11–12 хв, 8 multi) і dgh10. Не блокує. На розсуд людини — скоротити 1–2 multi до 5 тверджень.

## 5. Правки (зроблені, без `rev` — тест не опубліковано)
1. №8: «Позасудовий орган, що судив без адвоката, часто без самого обвинуваченого» → «Позасудовий орган, що судив без адвоката» (прибрано підказку довжиною; зміст і ключ ті самі).
2. №14: умова → «Які з цих рішень влада справді ухвалила в 1932–1933 рр.? Обери всі правильні.» (прибрано підказку формою; варіанти й ключ ті самі).
3. №19: варіант Е «Влада дозволяла дисидентам вільно друкуватися в державних газетах» → «Протест на прем'єрі «Тіней забутих предків» стосувався лише самого фільму» (хибне, як і раніше; тепер cur перевіряє все ядро g11s2l3, зокрема «Пов'язувати культурний і правозахисний рухи»; ключ [0, 2, 4] той самий).
4. №28: варіант Е «озброєні угруповання, яких посилювала Росія» → «озброєні угруповання за участі й підтримки Росії» (точніше за ЄСПЛ і реєстром №213; ключ той самий).
5. `status: "verified"`, `meta.factcheck: "verifier-dgh11"`, рядок статусу в шапці коментаря.

## 6. Вердикт
Тест dgh11 — **verified**. Відкритих ❌ і ⚠️ немає. Потребує людини: `approved` (вчитель); за бажанням — урівняти довжину варіантів №16 і скоротити 1–2 multi.
