# Верифікація: тест рівня «Історія України, 9 клас» (dgh9)

Верифікатор: verifier-dgh9 (свіжий контекст, тест не писав), 2026-11-06.
Файл: `content/hist/diag-g9.js`; задача: `tasks/…/write-hist-diag-g9.md`.
Вердикт: **придатний — `status: "verified"`** (1 дрібна правка формулювання + статус і `factcheck`). `approved` — лише вчитель.

## Прогін
- `node tools/validate.mjs --diag dgh9` — 0 помилок, 0 попереджень (до й після правок).
- Заборонені фрази (style/banned-phrases.txt) — 0 збігів.
- Структура: 10 pre × 2 + 6 cur × 1 = 26 завдань; `lessons` усі існують; cur-уроки без boss; `for` — розділи g9s1–g9s5. Без `fbOk`/`fbText`/`hint`, без заборонених типів.
- Плейтест не запускався (тест рівня; браузерний прогін — на оркестраторі / CI).

## 1. Факти
| Твердження (№ завдання) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Шевченко народився 1814 р. (1) | EoU «Shevchenko, Taras» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CH%5CShevchenkoTaras.htm ; урок l3/реєстр | ✅ |
| Львів — найбільше місто Галичини; назва від Галича (2, 13) | EoU «Galicia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm ; урок h23 | ✅ |
| Буковина — від букових лісів, центр Чернівці (13) | EoU «Bukovyna» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBukovyna.htm ; урок h23 | ✅ |
| Слобожанщина — від слобід, центр Харків (13) | EoU «Slobidska Ukraine» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CL%5CSlobidskaUkraine.htm ; урок h23 | ✅ |
| Кошового обирала рада (4) | EoU «Kish otaman» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CI%5CKishotaman.htm ; EoU «Zaporozhian Sich» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CA%5CZaporozhianSich.htm (рада на майдані) | ✅ |
| Реєстрові — у королівському списку, платня; Січ за порогами, напівлегальні низові (3, 12) | EoU «Registered Cossacks» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CE%5CRegisteredCossacks.htm ; урок g8s2l2 | ✅ |
| Гетьманщина: полки й сотні, Чигирин, гетьмана обирала рада (6, 15) | EoU «Khmelnytsky, Bohdan» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CH%5CKhmelnytskyBohdan.htm ; uk.wiki «Хмельниччина» https://uk.wikipedia.org/wiki/Хмельниччина | ✅ |
| Війна почалася 1648 р. (7) | EoU «Khmelnytsky» (вище); uk.wiki «Хмельниччина» (вище); facts №9 | ✅ |
| Зборів 1649: реєстр 40 тис., Київське, Брацлавське, Чернігівське воєводства (16) | EoU «Zboriv, Treaty of» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CZ%5CB%5CZborivTreatyof.htm ; EoU «Khmelnytsky» | ✅ |
| Біла Церква 1651 після Берестечка: 20 тис. (16) | EoU «Bila Tserkva, Treaty of» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CI%5CBilaTserkvaTreatyof.htm ; EoU «Khmelnytsky» | ✅ |
| Андрусів 1667: Москва й РП, без козацької сторони; Лівобережжя — Москві, Правобережжя — королю, Київ фактично за Москвою (8, 19) | https://vue.gov.ua/Андрусівське_перемир'я_1667 ; EoU «Andrusovo, Treaty of» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CA%5CN%5CAndrusovoTreatyof.htm | ✅ |
| Конституція Орлика 1710, Бендери; обмеження гетьмана радою; повністю не втілена (9, 21) | EoU «Bendery Constitution» https://www.encyclopediaofukraine.com/pages/B/E/BenderyConstitutionof.htm ; uk.wiki https://uk.wikipedia.org/wiki/Конституція_Пилипа_Орлика | ✅ |
| Розумовський 1750 → скасування гетьманства Катериною II 1764 → Січ 1775 → полковий устрій 1781 (10, 24) | EoU «Rozumovsky, Kyrylo» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CO%5CRozumovskyKyrylo.htm ; en.wiki https://en.wikipedia.org/wiki/Liquidation_of_the_autonomy_of_the_Cossack_Hetmanate ; EoU «Zaporozhian Sich» (1775); facts №121, №122, hist-2 №350 | ✅ |
| Указ 1783 — Лівобережжя й Слобожанщина; кріпаків продавали (14) | ЕІУ «Кріпацтво» https://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Kripatstvo ; EoU «Serfdom» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSerfdom.htm | ✅ |
| Панщина — безплатна праця; 1797 — 3 дні, на практиці 5–6 (4–6) (14) | ЕІУ «Панщина» https://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Panschyna ; EoU «Serfdom» | ✅ |
| Йосиф II скасував особисту залежність селян (1782) (14) | ЕІУ «Йосиф II» https://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Yosyf_II ; EoU «Serfdom» (обмежив особисту залежність) | ✅ |
| Кирило-Мефодіївське братство: Костомаров серед ініціаторів, автор програми; скасування кріпацтва, федерація рівних слов'ян; не готувало повстання; арешти 1847 після доносу Петрова; слідство не довело членства Шевченка (17) | EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CY%5CCyrilandMethodiusBrotherhood.htm ; uk.wiki https://uk.wikipedia.org/wiki/Кирило-Мефодіївське_братство | ✅ |
| 1861: Олександр II, особиста воля, 2 роки старих повинностей, викуп, відрізки; Галичина — 1848 (раніше) (20) | en.wiki https://en.wikipedia.org/wiki/Emancipation_reform_of_1861 ; uk.wiki https://uk.wikipedia.org/wiki/Селянська_реформа_в_Російській_імперії_(1861) (викуп, відрізки); ЕІУ «Кріпацтво» (1848 / 1861) | ✅ |
| Валуєвський циркуляр 1863: заборона релігійних, навчальних книжок, дозвіл художньої літератури; фраза «не було, немає…» — політичний аргумент (22) | uk.wiki https://uk.wikipedia.org/wiki/Валуєвський_циркуляр ; EoU «Ems Ukase» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CE%5CM%5CEmsUkase.htm (циркуляр — початок репресій) | ✅ |
| Емський указ 1876: заборона ввозу з-за кордону, вистав; друк перейшов у Галичину (22) | EoU «Ems Ukase» (вище); uk.wiki https://uk.wikipedia.org/wiki/Емський_указ | ✅ |
| Перша залізниця на укр. землях — Перемишль — Львів 1861; Одеса — Балта 1865; чумацтво занепало (25) | uk.wiki https://uk.wikipedia.org/wiki/Львівська_залізниця ; пошук (radiosvoboda, osvita.ua) ; EoU «Chumaks» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChumaks.htm ; facts №146 | ✅ (нюанс: тимчасова Балаклавська військова колія 1855 у Криму — реєстр №146 її не рахує; формулювання тесту = реєстр і урок) |
| РУРП 1890, Львів — перша сучасна українська партія; РУП 1900, Харків, нелегально; Міхновський — самостійність; з 1903 — автономія (26) | EoU «Ukrainian Radical party» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianRadicalparty.htm ; EoU «Revolutionary Ukrainian party» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CE%5CRevolutionaryUkrainianparty.htm ; uk.wiki https://uk.wikipedia.org/wiki/Революційна_українська_партія | ✅ |
| Партії в Російській імперії під забороною (до 1905) (26 Е) | uk.wiki «РУП» («нелегально засновано», «підпільна»); EoU «RUP» (clandestine, арешти 1903); en.wiki https://en.wikipedia.org/wiki/October_Manifesto (свобода спілок — лише з 1905) | ✅ |

## 2. Завдання: розв'язок і опора
Розв'язав кожне сам до звірки з ключем — усі 26 збіглися з `correct`/`answer`.

| № | Тема | Мій розв'язок | Опора (урок, де вчать) | Вердикт |
|---|---|---|---|---|
| 1 | cent | XIX ст. | l3 (правило «+1») | ✅ |
| 2 | lands | Львів | h23, екран «Землі й їхні центри» | ✅ |
| 3 | fact | «Січ за порогами» | l1 (факт / тлумачення) + h23/g8s2l2 | ✅ |
| 4 | sich | козацька рада | g8s2l2 («рада обирала кошового») | ✅ |
| 5 | srccrit | «Бій був, втрати прикрасив» | l4 «Літописець при дворі» | ✅ |
| 6 | hetm | полки й сотні | g8s3l5 | ✅ |
| 7 | nvv | 1648 | g8s3l1 («війна почалася 1648 р.»), l3; facts №9 | ✅ (див. §4) |
| 8 | andr | Москви | g8s4l4 | ✅ |
| 9 | orlik | обмежити радою | g8s5l3 | ✅ |
| 10 | auto | скасувала Катерина II | g8s5l5 | ✅ |
| 11 | cent | 1700→XVII, 1764→XVIII, 1800→XVIII, 1801→XIX | l3 (виняток «00») | ✅ |
| 12 | sich | список, платня → реєстр.; пороги, поза контролем → низові | g8s2l2 (sort майже дослівно) | ✅ |
| 13 | lands | Харків, слободи → Слоб.; Чернівці, буки → Бук.; Галич → Гал. | h23 | ✅ |
| 14 | g9-serf | [1, 2, 4] | g9s1l4 (екрани «Кріпацтво», «Три дні — на папері», sort «Росія чи Австрія?») | ✅ |
| 15 | hetm | [0, 2, 3] | g8s3l5 | ✅ |
| 16 | nvv | 20 тис., Берестечко → БЦ; 3 воєводства, 40 тис. → Зборів | g8s3l3 | ✅ |
| 17 | g9-kmb | [1, 3, 5] | g9s2l5 | ✅ (правка формулювання Е) |
| 18 | fact | чорнило, дата → факт; щасливий, передумав → тлумачення | l1 | ✅ |
| 19 | andr | [1, 3, 4] | g8s4l4 | ✅ |
| 20 | g9-1861 | [0, 2, 3, 4] | g9s3l3 | ✅ |
| 21 | orlik | «Як старшина хотіла влаштувати владу» | g8s5l3 (learned «текст ≠ реальна влада») | ✅ |
| 22 | g9-ban | [2, 3, 5] | g9s3l4 | ✅ |
| 23 | srccrit | перевіряти обидва | l4 («Літопис чи графіті?») | ✅ |
| 24 | auto | Розумовський → 1764 → 1775 → 1781 | g8s5l5 (order майже дослівно) | ✅ |
| 25 | g9-ind | [0, 3, 4] | g9s4l1 | ✅ |
| 26 | g9-party | [1, 2, 3, 5] | g9s5l1 | ✅ |

**Покриття `learned` у cur:** g9s1l4 — поняття (А, Б, Е), укази 1783/1797 (В, Г), дві імперії (Д, Е), закон ≠ життя (Г); g9s2l5 — засновники й програма (Б, Г, Д), покарання (Е, А), слідство vs дослідники (В); g9s3l3 — дата/автор (А), здобутки/тягарі (Б–Д), дві імперії (Е); g9s3l4 — розрізнення (А, В, Г), політична мета (Б), Галичина (Д, Е); g9s4l1 — поняття (А, В), залізниці (Б, Г), селяни → робітники (Д); g9s5l1 — партія/гурток (А, Б), незалежність/автономія (Г, Д), дві імперії (В, Е). Усе ядро покрите.

## 3. Педагогіка й форма
- Перевіряє вміння історика (століття, критика джерела, факт/тлумачення, текст ≠ дійсність, причина → наслідок, хронологія), а не начитаність: дат на пряме пригадування — лише 1648 (№7) і 1764 (№10), обидві опорні в реєстрі й уроках. Імен другого ряду немає.
- Базове → складніше в кожній pre-темі; теми чергуються; cur — у другій половині (№14–26).
- Позиції правильних у choice: 1, 2, 1, 0, 1, 0, 2, 1, 0, 2, 2 — без шаблону; у multi правильні розкидані. Правильні варіанти не вирізняються довжиною чи формою.
- Чутливих тем із натуралістикою немає.
- Тривалість: ≈ 11–12 хв (11 choice, 1 number, 6 sort, 7 multi по 5–6 тверджень, 1 order) — трохи понад орієнтир 10 хв, на рівні інших тестів історії (25–28 завдань). Не блокує.

## 4. Сумнівні місця автора — рішення
- **№7 `number` 1648.** Залишено. Це не начитаність: 1648 — опорна дата курсу (facts №9 прив'язує до уроку 5 кл. l3; g8s3l1, g8s3l5 — початок Гетьманщини, рамка 1648–1764). Вимога задачі «number — лише ключові роки» дотримана. Заміну на choice не робив.
- **№14 Г «Після указу 1797 р. панщина ніде не перевищувала 3 днів».** Однозначно хибне: урок g9s1l4 — «подекуди панщина сягала 5–6 днів», ЕІУ — 5–6, EoU — 4–6. Слово «ніде» робить твердження перевіркою «закон ≠ життя», а не дрібниці. Залишено.
- **№26 Е без «до 1905 р.»** Правдиве: прив'язка «тож РУП діяла таємно» ставить твердження в період 1900–1905 (РУП стала УСДРП у грудні 1905). Хибним не стає. Залишено.
- **`signed: false`.** Коректно: єдина числова відповідь — рік 1648; кнопка «±» лише відволікала б.

## 5. Правки
Зроблені (тест не опублікований — без `rev`):
1. №17, варіант Е: «1847 р. після доносу братчиків заарештували» → «1847 р. братчиків заарештували після доносу» (зникає двозначність «донос братчиків» = «донос, який написали братчики»). Ключ не змінився.
2. `status: "draft"` → `"verified"`; `meta.factcheck: "self"` → `"verifier-dgh9"`; шапка коментаря (статус, шлях задачі).

Рекомендовані (не блокують): нічого обов'язкового. На розсуд людини — скоротити 1–2 multi до 5 тверджень, якщо реальний час тесту перевищить 12 хв.

## 6. Що потребує людини
- `approved` — лише вчитель.
- Нічого спірного по фактах; нюанс «перша залізниця» (Балаклава 1855) вирішений реєстром №146 — лише для довідки.
