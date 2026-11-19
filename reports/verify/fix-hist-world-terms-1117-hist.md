# Верифікація: fix-hist-world-terms-1117 — частина «Історія України» (content/hist)

Верифікатор: verifier-hist2-1117, 2026-11-17. Diff: коміт d4e5729 (writer-hist2-1117), `git log -p 6fa9f06.. -- content/hist/`. Частину world верифіковано окремо (fix-hist-world-terms-1117-world.md) — не перевірялась.
Мережа сесії: доступні лише uk/en.wikipedia.org (curl `action=raw`) і WebSearch; encyclopediaofukraine.com, ushmm.org, osce.org, www.esu.com.ua — ENOTFOUND. Другі джерела — Вікіпедія іншою мовою або пошукова видача (URL нижче).

Що змінено: лише пояснення термінів у тексті `body`/`cap` і нагадування замість «ти знаєш із розділу N»; варіанти, ключі, порядок екранів — без змін (перевірено word-diff). Єдина структурна зміна — h34 (див. §3).

## 1. Термін → де пояснено → факт
| Урок / екран | Термін | Пояснення тепер | Джерела (відкрито в сесії) | Вердикт |
|---|---|---|---|---|
| g5s7l3 e2 | Верховна Рада | «зібрання депутатів, які ухвалюють закони» | https://uk.wikipedia.org/wiki/Верховна_Рада_України ; https://en.wikipedia.org/wiki/Verkhovna_Rada («unicameral parliament of Ukraine») | ✅ |
| g5s7l5 e1 (hyp) | надра | «усе, що лежить під землею: руда, вугілля, нафта, газ» | https://uk.wikipedia.org/wiki/Надра (верхня частина земної кори під поверхнею; в Україні — власність народу) | ✅ (спрощення для 5 кл.) |
| g5s7l5 e7 | ООН | «до якої входять майже всі країни світу» | https://uk.wikipedia.org/wiki/Організація_Об'єднаних_Націй (193 держави-члени) | ✅ |
| s1/l2 e7 | період напіврозпаду | «Цей час [≈5730 р., за який стає вдвічі менше] називають періодом напіврозпаду» | https://uk.wikipedia.org/wiki/Період_напіврозпаду ; https://en.wikipedia.org/wiki/Half-life («time required for a quantity to reduce to half») | ✅ |
| h34 e3 | остраки, вигнання на 10 років; «близько 2500 років тому» | body e3 | https://uk.wikipedia.org/wiki/Остракізм («мав залишити поліс на 10 років»); https://en.wikipedia.org/wiki/Ostracism (ten years; Themistocles ≈471 р. до н. е.); https://uk.wikipedia.org/wiki/Фемістокл | ✅ |
| h34 e2 / e6 | консенсус; демократія пряма / представницька | e2 «коли згодні всі — консенсус»; e6 body | терміни шкільного курсу, без дат | ✅ |
| g6s1l1 e0 cap | палеолітична стоянка → «стоянка найдавніших людей» | cap | https://uk.wikipedia.org/wiki/Королевська_стоянка (1,4 млн років, найдавніший доказ людини в Європі) | ✅ |
| g6s1l1 e4 | людина прямоходяча | «один із давніх видів людей. Сучасних людей тоді ще не було» | https://uk.wikipedia.org/wiki/Людина_прямоходяча ; https://en.wikipedia.org/wiki/Homo_erectus («extinct species of archaic human… nearly 2 million years») | ✅ |
| g6s1l5 e2 | привласнювальне / відтворювальне господарство | e2 | https://uk.wikipedia.org/wiki/Господарство_відтворювальне (землеробство й скотарство; на противагу привласнюючому); https://en.wikipedia.org/wiki/Neolithic_Revolution (перехід від полювання й збиральництва до землеробства) | ✅ |
| g6s1l5 e6 | археологічна культура | «Схожі знахідки одного часу й краю археологи називають культурою» | https://uk.wikipedia.org/wiki/Археологічна_культура («спільність подібних пам'яток одного часу… в певній місцевості»); https://en.wikipedia.org/wiki/Archaeological_culture | ✅ |
| g6s1l5 e7 | «до н. е.» vs «років тому» | «VI тис. до н. е. — приблизно 8 тис. років тому» | арифметика: 6000–5001 до н. е. = 8–7 тис. років тому; «приблизно 8» узгоджене з hint | ✅ |
| g6s10l3 e5 | Візантія | «велика держава зі столицею в Константинополі»; Прокопій — історик звідти | https://uk.wikipedia.org/wiki/Візантійська_імперія ; https://en.wikipedia.org/wiki/Procopius (Byzantine historian, VI ст.) | ✅ |
| g6s10l3 e7 | Світовид | «Його часто називають Світовидом, але кого він зображує насправді, теж не знають» | https://uk.wikipedia.org/wiki/Збручанський_ідол («немає переконливих відомостей, що скульптура зображає саме цього бога»); https://en.wikipedia.org/wiki/Zbruch_Idol (Potocki — «conjecture… Svetovid») | ✅ |
| g8s2l1 e3 | уходники | «вони «уходили» в степ на промисел» | https://uk.wikipedia.org/wiki/Уходники (полювання, рибальство, мед; XIV–XVI ст.) ; WebSearch: https://www.encyclopediaofukraine.com/pages%5CC%5CO%5CCossacks.htm (наприкінці XV ст. — українці, що йшли в степ на промисли: полювання, рибальство, бджільництво, сіль) — сам сайт у сесії недоступний, цитата з пошукової видачі | ✅ |
| g8s2l6 e0 | Острозький (без «ти знаєш з розділу 1») | покровитель православних, Острозька академія, Біблія 1581 р., проти унії 1596 р. | https://uk.wikipedia.org/wiki/Костянтин_Василь_Острозький (засновник академії 1576); https://en.wikipedia.org/wiki/Konstanty_Wasyl_Ostrogski (Ostroh Bible 1581; окрема нарада православних у Бересті 1596) | ✅ |
| g8s2l7 | колегія | «школа вищого рівня за європейським зразком, де головною мовою навчання стала латина» | https://uk.wikipedia.org/wiki/Києво-Могилянська_колегія (1632, вищий навчальний заклад); https://en.wikipedia.org/wiki/National_University_of_Kyiv-Mohyla_Academy («model of Western collegiums, with Latin serving as the main language») | ✅ |
| g8s6l2 e0 | Січ, 1775 | «укріплений центр запорозьких козаків на Дніпрі»; зруйнувала Російська імперія | https://uk.wikipedia.org/wiki/Нова_Січ (центр запорозького козацтва 1734–1775); https://en.wikipedia.org/wiki/Zaporozhian_Sich (1775 Catherine disbanded the Sich; «fortified… central fortress») | ✅ |
| g8s6l3 e0 | Мазепа | гетьман — правитель козацької держави — 1687–1709 | https://uk.wikipedia.org/wiki/Іван_Мазепа ; facts/hist №118 (EoU) | ✅ |
| g9s1l3 e0 | цісар | «правителя-імператора тут називатимуть цісарем» | https://uk.wikipedia.org/wiki/Цісар («цісарем називають переважно імператора Австро-Угорщини», ширше — будь-якого імператора); в уроці далі «титул… носив цісар у Відні» | ✅ |
| g9s2l5 e0, g9s2l6 | жандарми | «політична поліція царя» | https://uk.wikipedia.org/wiki/Жандармерія_в_Російській_імперії («отримала статус політичної поліції» після 1825/26); https://en.wikipedia.org/wiki/Special_Corps_of_Gendarmes (security police; керівники корпусу — директори III відділення) | ✅ |
| g9s3l3 e2 | новий стиль | 19 лютого 1861 р. за тодішнім російським календарем = 3 березня | https://en.wikipedia.org/wiki/Emancipation_reform_of_1861 (Manifesto «3 March 1861» Gregorian / 19 Feb Julian); глосарій-нотація | ✅ |
| g9s4l3 | їдиш | «мова, якою розмовляла більшість євреїв Східної Європи» | https://uk.wikipedia.org/wiki/Їдиш ; https://en.wikipedia.org/wiki/Yiddish («historically spoken by Ashkenazi Jews») | ✅ |
| g9s5l1 e4 | УСДРП | «Українською соціал-демократичною робітничою партією (УСДРП)», 1905 | https://uk.wikipedia.org/wiki/Українська_соціал-демократична_робітнича_партія (з грудня 1905); https://en.wikipedia.org/wiki/Ukrainian_Social_Democratic_Labour_Party (formed 1905 by RUP members) | ✅ |
| g9s6l5 e8 | Сардинія / П'ємонт | Італія поділена; об'єднання почало Королівство Сардинія, головна земля — П'ємонт | https://uk.wikipedia.org/wiki/Сардинське_королівство ; https://en.wikipedia.org/wiki/Kingdom_of_Sardinia («became the engine driving Italian unification»; Piedmont-Sardinia) | ✅ |
| g11s1l2 e5 cap | штадткомісар | «німецького керівника міста» | https://uk.wikipedia.org/wiki/Райхскомісаріат_Україна («у великих містах… Київ… управління здійснював міський комісар (штадткомісар)»); WebSearch: https://portal.ehri-project.eu/units/ua-003302-p_1942 (Stadtkommissar — німецька цивільна адміністрація міста) | ✅ |
| g11s1l3 e1 | айнзацгрупи | «пересувні загони СС і поліції, створені для вбивств» | https://en.wikipedia.org/wiki/Einsatzgruppen (SS death squads; originally part of Security Police); WebSearch: https://encyclopedia.ushmm.org/content/en/article/einsatzgruppen-and-other-ss-and-police-units-in-the-soviet-union («mobile killing units», Security Police and SD) | ✅ |
| g11s1l4 e1 | ОУН(б) | «частина ОУН, яку очолював Степан Бандера» | https://uk.wikipedia.org/wiki/Організація_українських_націоналістів (розкол 10.02.1940; Бандера / Мельник); https://en.wikipedia.org/wiki/Organisation_of_Ukrainian_Nationalists (OUN-B / OUN-M) | ✅ |
| g11s1l9 e2 | ОУН, (б)/(м) | «літери — від їхніх прізвищ» | ті самі + WebSearch: https://texty.org.ua/articles/102993/pohid-na-shid/ (бандерівці / мельниківці); facts/hist-3 №607 | ✅ |
| g11s3l1 e4 | площа Жовтневої революції | «— нинішньому Майдані Незалежності» | https://uk.wikipedia.org/wiki/Революція_на_граніті (дослівно «нинішньому Майдані Незалежності»); https://uk.wikipedia.org/wiki/Майдан_Незалежності_(Київ) (колишня назва); https://en.wikipedia.org/wiki/Revolution_on_Granite | ✅ |
| g11s4l2 e2 | ОБСЄ/БДІПЛ | «Бюро з демократичних інститутів і прав людини Організації з безпеки і співробітництва в Європі» | https://en.wikipedia.org/wiki/Office_for_Democratic_Institutions_and_Human_Rights ; WebSearch: https://www.ombudsman.gov.ua/byuro-obsye-z-demokratichnih-institutiv-i-prav-lyudini-bdipl (саме така українська назва); uk.wiki подає варіант без «з» — обидва вживані | ✅ |
| g11s5 l2, l3, l4, l8, l5, l6 | УВКПЛ ООН | «Управління Верховного комісара ООН з прав людини» при першій згадці в кожному уроці | https://uk.wikipedia.org/wiki/Управління_Верховного_комісара_ООН_з_прав_людини ; https://en.wikipedia.org/wiki/Office_of_the_United_Nations_High_Commissioner_for_Human_Rights | ✅ |

## 2. Завдання й опора (D-019)
Ключі не змінювались; я розв'язав кожне завдання на змінених екранах і ті, що на них спираються:

| Урок, завдання | Моя відповідь = ключ | Опора | Вердикт |
|---|---|---|---|
| g5s7l5 e1 «Кому належать… надра?» | hyp (без ключа) | здогадка; надра тепер пояснені до питання | ✅ |
| h34 e1 hyp; e3 «Що доводять черепки?» → 0; e4 number 13; e5 → 0; e6 sort віче/рада/референдум → 0, Верховна Рада/міська рада → 1 | збігаються | e2 (більшості), e3 body (процедура остракізму, «найбільше черепків» — відкидає варіант 1), e6 body (визначення прямої/представницької) | ✅ |
| s1/l2 outro «Рахувати вік за періодом напіврозпаду» | — | e7 вводить термін | ✅ |
| g6s1l1 e4 sort факт/тлумачення | 0,0,1,1 | intro «ні кісток… немає», e4 body | ✅ |
| g6s1l5 e3 sort; e6 → 1; e7 order Межиріч → поля → буго-дністровська → Трипілля; фінал 1,2,3 | збігаються | e2, e6 body, e7 body (переведення до н. е.) | ✅ |
| g6s10l3 e7 sort | 0,1,0,1 | e7 body «часто називають Світовидом, але… не знають» — не видає відповідь, а дає опору | ✅ |
| g8s2l1 e4 sort, e5 choice «були й уходники…» | збігаються | e3 визначення уходників | ✅ |
| g8s2l6, g8s2l7, g8s6l2, g8s6l3 — нагадування в intro | — | неоцінювані екрани; наступні завдання спираються на екрани своїх уроків | ✅ |
| g9s1l3, g9s2l5/l6, g9s3l3, g9s4l3, g9s5l1 (e7 order), g9s6l5 (фінал sort) | збігаються | терміни тепер у тексті до завдань | ✅ |
| g11s1l2/l3/l4/l9, g11s3l1, g11s4l2 (e7), g11s5 l2–l6, l8 | збігаються | пояснення абревіатур у тому ж екрані; варіанти не змінювались | ✅ |

Відповідь у `cap`/підказці не видається ніде (перевірено cap g6s1l1 e0, g6s1l5 e6 — назву лінійно-стрічкової культури прибрано, h34 e3).

## 3. h34 — розвантаження
Було: e2 — один екран з остраками, Фемістоклом, «V ст. до н. е.», двома більшостями, другим туром, консенсусом і двома видами демократії. Стало: e2 — лише більшості, другий тур і консенсус (≈ 40 слів); остраки й процедура — у body e3 (там уже фото, `img` з e2 прибрано, D-027 виконано: у h34 лишається 1 img); «V ст. до н. е.» → «близько 2500 років тому» (до н. е. в 5 кл. ще не пояснено); пряма / представницька демократія — у body e6 sort, де вони потрібні. Нових слів на екран — ≤ 3. ✅

## 4. Стиль і прогін
`node tools/validate.mjs --section` s1, s3, g5s7, g6s1, g6s10, g8s2, g8s6, g9s1–g9s6, g11s1–g11s5 — 0 помилок; попередження давні (sentenceWords 10–11 кл., g9s1l2, s1 l5 e4). `node tools/stats.mjs --subject hist` — пройшов. Канцеляриту й заборонених фраз у нових реченнях не помітив. Плейтест — немає Python-модуля playwright у контейнері, за CI/оркестратором.
Правки хвилі 1 (reports/verify/fix-hist-content-1117.md; змістових правок верифікатора там не було, правки автора — g8s2l1 e4, g11s1l3 «мешканці» тощо) — на місці, diff d4e5729 їх не зачіпає.

## 5. Правки
- Зроблено: 0 змістових; статуси 31 уроку `draft` → `verified`, рядок у коментарі заголовка файлів.
- Рекомендовано (не блокує): g9s1l3 intro «Їхнього правителя-імператора» — 1772 р. Габсбурзькою монархією правила Марія Терезія (не імператриця за титулом); формулювання «тут називатимуть» стосується всього періоду, тож прийнятно.

## 6. Вердикт по уроках
→ **verified** (31): g5s7l3, g5s7l5, h34, l2 (s1), g6s1l1, g6s1l5, g6s10l3, g8s2l1, g8s2l6, g8s2l7, g8s6l2, g8s6l3, g9s1l3, g9s2l5, g9s2l6, g9s3l3, g9s4l3, g9s5l1, g9s6l5, g11s1l2, g11s1l3, g11s1l4, g11s1l9, g11s3l1, g11s4l2, g11s5l2, g11s5l3, g11s5l4, g11s5l5, g11s5l6, g11s5l8.
**Частина hist: verified.** Потребує людини: нічого нового.
