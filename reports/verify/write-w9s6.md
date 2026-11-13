# Верифікація w9s6 «Держави світу на початку XX ст.» (world, 9 кл.)

Верифікатор: verifier-write-world-w9s6, 2026-11-12. Задача: tasks/review/write-world-w9s6.md. Файл: content/world/g9-w9s6.js (7 уроків).
Скіл content-verify; прочитано handoff, INDEX, facts/world, glossary/world, style/hist, програму Гісема 2023 (PDF відкрито й розібрано pdftotext).

**Вердикт: усі 7 уроків → `verified`.** Правок: 10 (дрібні, лише у w9s6). Розбіжність з іншим файлом (w10s2 «Вілсон») — в inbox.

## Прогони
- `validate --section w9s6` — 0 помилок, 0 попереджень (до й після правок); `--diag dgw9`, `--diag dgw10` — 0/0.
- `euphony --subject world --section w9s6` — 0 (після правки «правила і для» з'явилось 1 → виправлено).
- `stats --subject world` — w9s6 без прапорців (макс. слів l4 — 69).
- Playtest не запускався (Python-playwright у контейнері відсутній; CI job browser).

## Факти
| Твердження | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| Страхування в Німеччині: хвороба 1883, нещасні випадки 1884, пенсії за віком та інвалідністю 1889 | https://www.uni-muenster.de/Geschichte/SWG-Online/sozialstaat/bismarck1.htm ; https://www.bpb.de/themen/soziale-lage/rentenpolitik/289606/traditionen-der-alterssicherung-vorlaeufer/ | ✅ |
| Закон проти соціалістів 1878–1890; соцзаконодавство поряд із репресіями (мотив) | https://de.wikipedia.org/wiki/Sozialistengesetz ; bpb (вище: «Machterhalt … politische Repression») | ✅ |
| SPD 12.01.1912 — 110 із 397, найбільша фракція | https://de.wikipedia.org/wiki/Reichstagswahl_1912 ; https://en.wikipedia.org/wiki/1912_German_federal_election | ✅ |
| Кепплер, «The Bosses of the Senate», «Puck», 23.01.1889; написи (Peoples' Entrance — Closed, трести) | https://commons.wikimedia.org/wiki/File:The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg ; https://www.senate.gov/art-artifacts/historical-images/political-cartoons-caricatures/38_00392_001.htm (WebSearch) ; сам малюнок | ✅ |
| Третя республіка 4.09.1870 після Седана | https://uk.wikipedia.org/wiki/Третя_французька_республіка ; https://en.wikipedia.org/wiki/French_Third_Republic | ✅ |
| Дрейфус: вирок 1894, Чортів острів, Естергазі виправдано, реабілітація 1906, повернення в армію | https://en.wikipedia.org/wiki/Dreyfus_affair ; https://uk.wikipedia.org/wiki/Справа_Дрейфуса | ✅ |
| «J'Accuse…!» — «L'Aurore» 13.01.1898, Феліксу Фору; Золя засуджено, виїхав до Англії | https://en.wikipedia.org/wiki/J%27Accuse...! ; uk.wiki Справа Дрейфуса ; шпальта на фото («JEUDI 13 JANVIER 1898», «A M. FÉLIX FAURE») | ✅ |
| Чавун: США обігнали Британію 1890, Німеччина 1903; сталь 1913 16,2 проти 6,9 млн т | https://www.cambridge.org/core/journals/comparative-studies-in-society-and-history/article/progress-in-iron-and-steel-18701913/61F2F5DF5A59207B5E051A4EB94442BD (прим.: «1890 and 1903») ; https://www.economics.utoronto.ca/munro5/24gerind.pdf («did not overtake Britain until just after 1900», «more than twice as much steel») | ✅ (текст l3 → «понад удвічі») |
| Гомруль: 1886 провалено в Палаті громад, 1893 відхилили лорди | https://en.wikipedia.org/wiki/Irish_Home_Rule_movement ; https://ebsco.com/research-starters/history/irish-home-rule-debate ; uk.wiki Гомруль (1886) | ✅ |
| Ллойд Джордж — канцлер скарбниці з 12.04.1908; «народний бюджет» 1909, відхилений лордами; Parliament Act 1911 | https://en.wikipedia.org/wiki/David_Lloyd_George ; https://uk.wikipedia.org/wiki/Девід_Ллойд_Джордж (1908–1915) ; https://en.wikipedia.org/wiki/People%27s_Budget | ✅ |
| Пенсії від 70 р., 1908 | https://schoolshistory.org.uk/topics/british-history/modern-britain/liberal-reforms/old-age-pensions-act-1908/ ; People's Budget (en.wiki: «building on the Old Age Pensions Act 1908») | ✅ |
| Закон про нацстрахування 1911: хвороба; безробіття — лише частина галузей | https://schoolshistory.org.uk/topics/british-history/modern-britain/liberal-reforms/national-insurance-act-1911/ ; uk.wiki Ллойд Джордж | ✅ |
| Вільгельм II — 1888; відставка Бісмарка 1890; флот насторожив Британію | https://en.wikipedia.org/wiki/Wilhelm_II ; uk.wiki Отто фон Бісмарк (канцлер до 20.03.1890) | ✅ |
| Бюлов, рейхстаг 6.12.1897, «Platz an der Sonne»; тоді — статс-секретар закордонних справ | https://de.wikisource.org/wiki/Deutschlands_Platz_an_der_Sonne ; https://germanhistorydocs.org/en/wilhelmine-germany-and-the-first-world-war-1890-1918/ghdi:document-783 ; https://en.wikipedia.org/wiki/Weltpolitik | ✅ |
| Італійська еміграція: мільйони до 1914, США/Аргентина/Бразилія; бідність, нестача землі | https://en.wikipedia.org/wiki/Italian_diaspora ; WebSearch: https://gspi.unipr.it/sites/st26/files/allegatiparagrafo/15-02-2016/lez_17_feb_2016_-_italian_emigration.pdf , https://www.britannica.com/place/Italy/Social-changes | ✅ |
| Джолітті: право на страйк, закони про працю дітей і жінок, 1912 — майже загальне чоловіче право; «ера Джолітті» (без років) | https://en.wikipedia.org/wiki/Giovanni_Giolitti ; https://uk.wikipedia.org/wiki/Джованні_Джолітті | ✅ |
| Італо-турецька війна 1911–1912, Лівія | en.wiki Giolitti ; https://uk.wikipedia.org/wiki/Італійсько-турецька_війна | ✅ |
| Мехен 1890, книжка про морську силу; флот і бази | https://history.state.gov/milestones/1866-1898/mahan ; https://en.wikipedia.org/wiki/Alfred_Thayer_Mahan | ✅ |
| 1898: Пуерто-Рико, Гуам, Філіппіни; Куба незалежна | https://history.state.gov/milestones/1866-1898/spanish-american-war ; uk.wiki Т. Рузвельт (контекст) | ✅ |
| Т. Рузвельт 1901–1909; «руйнівник трестів»; Нобель 1906, перший американець | https://uk.wikipedia.org/wiki/Теодор_Рузвельт ; https://en.wikipedia.org/wiki/Treaty_of_Portsmouth | ✅ |
| «Speak softly and carry a big stick»; карикатура Роджерса 1904; наслідок Рузвельта, грудень 1904, «international police power» | https://en.wikipedia.org/wiki/Big_stick_ideology ; https://history.state.gov/milestones/1899-1913/roosevelt-and-monroe-doctrine | ✅ |
| Панама 3.11.1903, кораблі США, смуга для каналу; канал 1914 | https://history.state.gov/milestones/1899-1913/panama-canal ; uk.wiki Т. Рузвельт | ✅ |
| Закон Шермана 2.07.1890 | https://www.archives.gov/milestone-documents/sherman-anti-trust-act ; https://courses.lumenlearning.com/wm-ushistory2/chapter/roosevelt-and-the-square-deal/ | ✅ |
| «Стандард Ойл» ~90 % переробки близько 1880 р.; розділ 15.05.1911 (Тафт) | https://en.wikipedia.org/wiki/Standard_Oil (90 % у 1880; 1911) ; https://www.ebsco.com/research-starters/history/standard-oil-company-incorporated (90 % у 1870-х; розділ 1911) ; archives.gov (Тафт, 1911) | ⚠️→✅ було «ще 1879 р. понад 90 %» — виправлено на «близько 1880 р. … 90 %» |
| «Справедливий курс» (Square Deal) | Програма МОН (Гісем 2023, с. 32–33: «„Справедливий курс“ Теодора Рузвельта») https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf ; https://en.wikipedia.org/wiki/Square_Deal ; lumenlearning (вище) | ⚠️→✅ автор не вжив термін програми; додано «справедливим курсом» (англ. Square Deal — «чесна угода») |
| Plessy 18.05.1896, «окремі, але рівні»; насправді гірші умови; Brown 1954 | https://www.archives.gov/milestone-documents/plessy-v-ferguson ; https://en.wikipedia.org/wiki/Plessy_v._Ferguson | ✅ |
| Вітте — міністр фінансів 1892–1903, залізниці, іноземний капітал | https://www.newworldencyclopedia.org/entry/Sergei_Witte ; https://en.wikipedia.org/wiki/Sergei_Witte | ✅ |
| Транссиб — 1891 | https://uk.wikipedia.org/wiki/Транссибірська_магістраль ; https://en.wikipedia.org/wiki/Trans-Siberian_Railway | ✅ |
| Оренда Порт-Артура 1898; війська в Маньчжурії (1900) | https://uk.wikipedia.org/wiki/Російсько-японська_війна ; https://en.wikipedia.org/wiki/Russo-Japanese_War | ✅ |
| **Напад на Порт-Артур** | NWE https://newworldencyclopedia.org/entry/Battle_of_Port_Arthur : зіткнення ~22:30 8.02, торпедна атака ~00:28 9.02.1904 ; en.wiki Russo-Japanese War: «9 February [O.S. 27 January] 1904», інфобокс — 8.02 ; uk.wiki — 8.02 | ⚠️→✅ обидві дати н. ст. (ст. ст. — 26/27 січня); написано «У ніч з 8 на 9 лютого 1904 р.» — істинне за всіма джерелами |
| Порт-Артур здався на поч. 1905; Мукден — березень 1905; Цусіма — травень 1905 | uk.wiki (2.01.1905; відступ 10.03; 27.05) ; en.wiki (January 1905; March 1905; May) | ✅ |
| Портсмут 5.09.1905: Корея — сфера Японії, південний Сахалін, оренда Порт-Артура | https://en.wikipedia.org/wiki/Treaty_of_Portsmouth ; uk.wiki Російсько-японська війна ; https://history.state.gov/milestones/1899-1913/portsmouth-treaty | ✅ |
| Столипін: уряд з 1906, військово-польові суди — тисячі страт, хутори, переселення, не завершено; Київська опера 1911 | https://uk.wikipedia.org/wiki/Петро_Столипін ; https://en.wikipedia.org/wiki/Pyotr_Stolypin | ✅ |
| «Просвіти» закрито 1910–1911 | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProsvita.htm («All … closed down in 1910–11») vs https://osvita.ua/vnz/reports/history/6539/ («на 1914 р. продовжувала роботу лише катеринославська „Просвіта“») | ⚠️→✅ «всі» → «майже всі» (l5 е8, l7 е6 fbText); узгоджено з hist g9s5l2 («більшість») |
| Танзимат 1839–1876, Гюльхане: безпека життя, честі, майна для всіх підданих; конституція 1876; Абдул-Гамід II | https://en.wikipedia.org/wiki/Tanzimat ; https://uk.wikipedia.org/wiki/Танзимат | ✅ |
| Молодотурецька революція, липень 1908, Македонія, відновлення конституції | https://en.wikipedia.org/wiki/Young_Turk_Revolution ; https://uk.wikipedia.org/wiki/Младотурецька_революція | ✅ |
| Ахмед Реза — у Парижі 1889–1908 («майже 20 років»), провідник | https://en.wikipedia.org/wiki/Ahmet_R%C4%B1za ; https://tr.wikipedia.org/wiki/Ahmet_Rıza | ✅ |
| Іран: 1905 протести купців і духовенства; 1906 конституція, меджліс; Мухаммед Алі-шах — розгін, червень 1908; скинутий 1909, Одеса; 1911 — російські війська | https://en.wikipedia.org/wiki/Persian_Constitutional_Revolution ; https://uk.wikipedia.org/wiki/Конституційна_революція_в_Ірані ; https://en.wikipedia.org/wiki/Mohammad_Ali_Shah_Qajar ; https://uk.wikipedia.org/wiki/Мохаммед_Алі-шах | ✅ |
| Англо-японський союз 30.01.1902, антиросійський | https://en.wikipedia.org/wiki/Anglo-Japanese_Alliance ; https://uk.wikipedia.org/wiki/Англо-японський_союз | ✅ |
| Корея 1910–1945 | https://en.wikipedia.org/wiki/Japan%E2%80%93Korea_Treaty_of_1910 ; https://uk.wikipedia.org/wiki/Корея_під_владою_Японії | ✅ |
| Іхетуань 1899; 21.06.1900 указ Ци Сі; 8 держав, Пекін 14.08.1900; протокол 1901, відшкодування | https://en.wikipedia.org/wiki/Boxer_Rebellion ; https://www.history.com/articles/boxer-rebellion ; https://uk.wikipedia.org/wiki/Боксерське_повстання | ✅ (Ци Сі — «вдовуюча імператриця», уточнено) |
| Сіньхай: Учан 10.10.1911; Сунь Ятсен обраний 29.12.1911, посада 1.01.1912 (Нанкін); зречення лютий 1912; Юань Шикай | https://en.wikipedia.org/wiki/1911_Revolution ; https://uk.wikipedia.org/wiki/Сіньхайська_революція | ✅ |
| Японія 1895 — Тайвань («пригадай») | content/world/g9-w9s4.js l3 (verified) ; facts/world №29 | ✅ |

## Назви й норма
- **Вільсон** — УП 2019 § 121 (м'яке л: «Ві́льсон, Лі́нкольн…») і § 124 (англ. w → в: «Вашингтон, Вебстер, Веллінгтон, Вільсон»): https://slovnyk.ua/pravopys.php?prav_par=121 , https://slovnyk.ua/pravopys.php?prav_par=124 ; той самий текст у копії УП 2019 https://fs02.vseosvita.ua/o/0200ib8t-f2d8.doc ; програма Гісема — «Томас Вудро Вільсон»; uk.wiki «Вудро Вільсон». → w9s6 правильно; **w10s2 «Вілсон» (≈ 12 місць) суперечить УП** — у inbox (чужий файл).
- **Іхетуань, Ци Сі, Ахмед Реза, Мухаммед Алі-шах** — форми програми МОН (с. 32–33); uk.wiki: Їхетуань, Цисі, Мохаммед Алі-шах. УП 2019 правил для китайських імен не має; за D-046 (МОН → програма) лишаю форми програми. TERM — в inbox.
- **«Справедливий курс»** — термін програми; тепер є в l4 е6 з поясненням Square Deal. «Нова демократія» Вільсона (так у програмі; англ. New Freedom) в уроці не названо — не оцінюється.

## Зображення (D-027)
| Файл | Автор, дата | PD у США | Поза США | Вердикт |
|---|---|---|---|---|
| bosses-of-the-senate-1889.jpg | Кепплер († 1894), 1889 | опубл. до 1931 | PD-old-100 | ✅ |
| jaccuse-aurore-1898.jpg | газета 1898, Золя († 1902) | опубл. 1898 (US-тег на Commons відсутній, але публікація до 1931 доводить PD-US) | PD-old-100 | ✅ |
| italian-immigrants-ellis-island-1908.jpg | Гайн († 1940), 1908, NYPL | PD-1923 | PD-old-70 | ✅ |
| big-stick-caribbean-1904.jpg | Роджерс († 1931), 1904 | опубл. до 1931 | PD-old-80 | ✅ |
| portsmouth-delegations-1905.jpg | P. F. Collier & Son, 1905 (амер. книжка) | PD-US (опубл. 1905 у США) | Commons попереджає «може не бути PD поза США» — для США доведено | ✅ (як і інші PD-US у проєкті) |
| ottoman-constitution-1908-lithograph.jpg | Христідіс († 1940), Афіни 1908 | опубл. до 1931 | PD-old-80 | ✅ |
Сторінки Commons відкрито (URL у `credits`). Вміст звірено з самими зображеннями: написи на мішках, двері «Peoples' Entrance — Closed»; шпальта «Орор»; хлопець на скрині, клунки; кораблі «Receiver», «Sheriff», «Debt Collector», береги Venezuela/Panama/Mexico/Cuba/Santo Domingo; камінь «Ζήτω το Σύνταγμα / Vive la Constitution» + османською, підпис «Η αναγέννησις της Οθωμανικής αυτοκρατορίας», стрічка «Ελευθερία ισότης αδελφότης». `cap` відповідей не видають.

## Завдання (розв'язано самостійно до звірки з `correct`) і опора D-019
| Урок · екран | Моя відповідь = ключ | Опора | Вердикт |
|---|---|---|---|
| l1 е2 choice | 1 | написи + переклад у body | ✅ |
| l1 е4 sort | картель/синдикат/трест | е3 означення | ✅ |
| l1 е6 choice (неочев.) | 2 | е5 «Батіг і пряник», заборона й страховка в ті самі роки; дистрактор 0 відкидається забороною, 1 — нічим не підтриманий | ✅ |
| l1 е8 sort | ✅ | е7 | ✅ |
| l1 е9 multi | [0,2] | е3, е5, е7 | ✅ |
| l2 е2 choice | 2 | сама сторінка | ✅ |
| l2 е5 number | 12 | е3 (1894), е4 (1906) | ✅ |
| l2 е6 choice | 0 | е4 | ✅ |
| l2 е9 sort | ✅ | е3–е8 | ✅ |
| l2 е10 order | 1870→1886→1894→1898→1906→1909 | роки на е3, е4, е7, е8, intro | ✅ |
| l3 е2 choice | 2 | фото | ✅ |
| l3 е4 link (неочев.) | 1 | е3 (бідний Південь) + факт про Галичину в самому body | ✅ |
| l3 е6 multi | [1,3] | е5; «Рим» відкидається е3 (1871 столиця) | ✅ |
| l3 е9 choice | 0 | е8 (менше колоній + цитата) | ✅ |
| l3 е10 sort | ✅ | е3–е8 | ✅ |
| l4 е2 choice | 2 | написи на кораблях | ✅ |
| l4 е5 choice | 0 | е3 Мехен + е4 смуга для каналу; «Іспанія» відкидається е4 (від Колумбії) | ✅ |
| l4 е7 multi | [1,3] | е6 | ✅ |
| l4 е9 choice | 1 | е8 | ✅ |
| l4 е10 order | 1890→1896→1898→1901→1903→1911 | е3, е4, е6, е8 | ✅ |
| l5 е4 order | Транссиб→оренда→напад→здача→Цусіма | е2, е3 | ✅ |
| l5 е6 multi | [0,2] | е5 — повний перелік умов | ✅ |
| l5 е7 link (неочев.) | 1 | дати війни (е3) і революції (body) | ✅ |
| l5 е9 sort | ✅ | е8 | ✅ |
| l5 е10 choice | 2 | е8 (не завершили, суди, «Просвіти»); міркування про «якби» | ✅ |
| l6 е2 choice | 2 | напис на камені | ✅ |
| l6 е5 sort | ✅ | е3, е4 | ✅ |
| l6 е6 choice (неочев.) | 0 | body: союз проти Росії; l5 е3: Росія в Маньчжурії, зазіхання на Корею | ✅ |
| l6 е9 choice (неочев.) | 1 | е3 (конституція), е4 (меджліс, конституція), е8 (республіка) | ✅ |
| l6 е10 order | 1839→1899→1902→1906→1908→1911 | е3, е4, е6, е7, е8 | ✅ |
| l7 е1–е6 | 1; [2,3]; 0; sort; 2; 1899→1902→1906→1908→1912 | l1 е3; l2 е3, е7, е8; l3 е8; l4; l5 е8; l6 | ✅ |

Позиції `correct` у choice: 1,2 · 2,0 · 2,1,0 · 2,0,1 · 1,2 · 2,0,1 · 1,0,2 — без повторюваного візерунку; multi: [0,2],[1,3],[1,3],[0,2],[2,3]; shuffle різні.
Підказки: l5 е10 hint «Чи можна перевірити те, чого не сталося?» відкидав обидва хибні варіанти («Факт…») → замінено на «Згадай, чим скінчилася аграрна реформа.» (відкидає лише варіант 0), колишній текст перенесено у fbBad. l1 е2 hint «Яке слово є на всіх мішках?» — неточно (на мішку «COAL» слова trust не видно) → «Яке слово повторюється на мішках?». Решта підказок вказують на доказ, не на відповідь.
Узгодженість: w9s1–w9s5, w10s1 (Вільгельм II 1918), dgw9, dgw10 — суперечностей не знайдено (grep Бісмарк, Вільгельм II, Реконструкція 1877, доктрина Монро 1823, Мейдзі/Тайвань 1895). «Пригадай: великі держави ділили Китай на сфери впливу» — у w9s4 такого немає → «Пригадай:» прибрано (факт подано самодостатньо).

## Правки (зроблені, лише в content/world/g9-w9s6.js)
1. l5 е3: «8 лютого 1904 р.» → «У ніч з 8 на 9 лютого 1904 р.».
2. l5 е8: «закрила всі «Просвіти»» → «майже всі».
3. l7 е6 fbText: те саме.
4. l4 е6: «ще 1879 р. … понад 90 % переробки нафти» → «близько 1880 р. … 90 % переробки нафти в країні».
5. l4 е6: «Свою політику він називав «чесною угодою» для багатих і бідних» → «Його політику називають **«справедливим курсом»** (англ. Square Deal — «чесна угода»): чесні правила для багатих і бідних.» (термін програми).
6. l6 е7: «імператриця Ци Сі» → «вдовуюча імператриця Ци Сі»; прибрано «Пригадай:».
7. l3 е7: «вдвічі більше сталі» → «понад удвічі більше».
8. l5 е10: hint/fbBad (див. вище).
9. l1 е2: hint (див. вище).
10. status усіх 7 уроків → `verified`; `meta.factcheck` → "verifier-write-world-w9s6".

## Рекомендовано (не зроблено)
- w10s2: «Вілсон» → «Вільсон» (УП 2019 § 121, § 124; програма) — інша задача (inbox).
- Glossary/world: внести Вільсон, Іхетуань, Ци Сі (вдовуюча імператриця), Ахмед Реза, Мухаммед Алі-шах, «справедливий курс» (inbox TERM).
- Тест рівня dgw9: тема `cur-w9s6` — у наступній редакції (як і пропонував автор).

## Вердикт по уроках
w9s6l1–w9s6l7 — **verified** (відкритих ❌/⚠️ немає). `approved` — лише вчитель.
