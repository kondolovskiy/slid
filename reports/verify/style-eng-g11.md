# Точкова повторна верифікація: style-eng-g11 і fix-eng-historic-names (англійська)

Верифікатор: verifier-style-eng-g11, 2026-11-27. Скіл content-verify. Еталон: reports/verify/style-eng-g10.md.
Обсяг: (1) перелік reports/style/eng-g11.md §7 і `git diff 5988f40 7ef956e -- content/eng/g11-*.js`; (2) перелік reports/verify/fix-eng-historic-names.md і `git diff 9b2f53f 1f4aee8` (content/eng). diag-g11.js не перевіряв і не чіпав, бо його перевіряє інший агент. Build, commit і плейтест не робив: у контейнері немає Python-модуля playwright, тож плейтест — після build оркестратора, у CI.

---

# Частина 1. style-eng-g11

## Ключі (diff)
Механічна звірка скриптом: завантажив кожен g11-e11s1…e11s8 до і після правок і порівняв усі поля `correct`, `answer`, `tiles`, `extra`, `opts`, `ok`, `left`, `right`, `items`, `hyp`, `poll`, `type`, `id` та всі `{*…}`. Відрізняється тільки одне поле: e11s8l4 #3 `match` `left` («Ms Hrytsenko» → «Ms Klymenko», «has finally made up» → «thinks she has made up»). `right` і порядок пар не змінено. Інших змін у ключах немає в жодному з 8 файлів.

## Перелік §7
| Місце | Розв'язав сам / опора | Вердикт |
|---|---|---|
| e11s1l7 ч. 1 (+«More people were still arriving, and the queue for Bohdan’s cakes went all the way to the door.») | Відповідь: «Somebody took the money box» (у тексті «the red box had gone»). «Bohdan sold the last cake» лишається хибним: довга черга не означає, що торти розпродано, а в тексті цього немає. Нових фактів немає | ✅ |
| e11s1l7 ч. 2 (+2 речення: Yehor тихий, але не злодій; «Then Andrii, Kyrylo and Yehor went to look for the teachers together.») | Відповідь: «not blaming anyone…» (слова Andrii). Нове речення каже, що вони пішли до вчителів, але цю пропозицію зробив Kyrylo («He suggested asking the teachers first»), тож другої правильної відповіді немає. «asking Yehor to give the money back» лишається хибним | ✅ |
| e11s1l7 ч. 3 (+«Yehor laughed too…», «Yehor drew a small picture of a dog for it.») | Відповідь: «She had wanted to keep the money safe». «She thought Yehor had taken it» лишається хибним. Yehor малює й у e11s1 (постери), тож суперечності немає | ✅ |
| e11s6l6 ч. 1 (+«We shared our sandwiches and played cards…») | Відповідь: «a train to Poland and then a plane». Варіанти й опору не зачеплено | ✅ |
| e11s6l6 ч. 3 (+«In both places, I took hundreds of photos.») | Основна думка: «A first trip abroad can feel strange at first, but…». Нове речення не підтримує жодного хибного варіанта | ✅ |
| e11s5 Maksym → Pavlo (8 місць, з коментарем-шапкою) | grep по content/eng: Pavlo трапляється лише в e11s5. Maksym у 4–9 кл. — двоюрідний брат з Ottawa (e4s7, e8s8, e9s8…), тож перейменування усуває збіг | ✅ |
| e11s8 Ms Hrytsenko → Ms Klymenko; Solomiia → Uliana (у тексті, hint, fbBad, fbText) | Klymenko й Uliana трапляються лише в e11s8. Hrytsenko є в e4s1, Solomiia — у e5s8, тож збіги усунуто | ✅ |
| e11s8l4 `match` «Oksana thinks she has made up» → «her mind.» | Перебрав усі праві частини для кожної лівої: «adviser.» підходить лише до careers, «strengths.» — лише до one of Oksana’s, «her mind.» — лише до made up, «see what…» — лише до she can. Другої пари немає. Узгоджено з l7 (рішення — у потязі додому) | ✅ |
| e11s8l4 фінал gaps «I think I’ve made up my {*mind\|head\|choice}» | Ключ mind той самий; head і choice однозначно хибні | ✅ |
| e11s8l5 Emma: «firefighter, and this winter… an astronomer. But now… a doctor» | Узгоджено з e9 (firefighter) і e11s5 (astronomer узимку). Питання «Where does a medicine degree take longer?» спирається на числа 5 і 6, які в тексті є. Відповідь «in Ukraine» | ✅ |
| e11s4l2 #0 «I’m thinking of studying art history…» | `intro`, не оцінюється. Узгоджено з e11s8 (мистецтво — хобі) | ✅ |
| e11s7l7 title «Our class project: Ukraine in the world» | На ключі не впливає | ✅ |
| 11 замін `fbOk` → «Brilliant!» | На зміст не впливають | ✅ |

## 12 нових `hint` і 5 переставлених
Критерії ті самі, що в style-eng-g10: підказка не називає відповіді, не стоїть у `pick`, не є питанням «так / ні», що саме відкидає дистрактор, а категорії йдуть не в порядку пропусків.

| Завдання | Чи видає відповідь | Вердикт |
|---|---|---|
| e11s2l7 T2 plenty of / hardly any | Дає значення, а не слова. Порядок значень обернений до пропусків | ✅ |
| e11s2l7 T6 Neither / either | Пояснює значення either і neither (обернено), самих слів не називає. Учень має знати, яке слово що означає (e11s2, урок про both / either / neither) | ✅ |
| e11s2l7 T9 cloves / pinch / tablespoons | Перелічує продукти не в порядку пропусків (oil, garlic, salt). Одиниць не називає | ✅ |
| e11s3l7 T2 episode / subtitles / binge-watch | Дає визначення в порядку 2–1–3, слів не називає | ✅ |
| e11s3l7 T4 two-hour / ten-minute / well known | Дає правило (іменник після пропуску чи ні), форм не називає | ✅ |
| e11s3l7 T5 question tags | Дає правило (прохання, Let’s, допоміжне дієслово), тегів не називає | ✅ |
| e11s4l7 T3 moving / amazed / impressive | Протиставлення -ing / -ed за значенням, без порядку | ✅ |
| e11s4l7 T5 priceless / careful | Навідні питання. Відповідь учень виводить з речення після двокрапки й зі здорового глузду (вибір careful / careless) | ✅ |
| e11s4l7 T9 found / disappointing / recommend | Дає правило (find it + adj; I’d + базова форма), слів не називає | ✅ |
| e11s6l7 T1 active / cultural / guesthouse | Дає визначення в порядку 3–2–1. Опора — e11s6 (типи туризму) | ✅ |
| e11s6l7 T5 picked me up / looked after my plants / looked it up | Терміни separable / prepositional є в info e11s6 («Some phrasal verbs are separable…»). Порядку слів не дає | ✅ |
| e11s6l7 T7 At first / Meanwhile / eventually / At | Значення в порядку 3–2–1–4. «shows a change» — дослівно з fbText e11s6l5 («At first shows a change»), тож опора є | ✅ |
| переставлені: e11s5l7 T2; e11s7l7 T3; e11s8l7 T1, T2, T4 | Мітки «→ ?» більше не йдуть у порядку пропусків (eyes / liquids проти tube–goggles; same–noun–facts проти whereas–Unlike–Both; 3–1–2, 2–3–1, 2–3–1). Відповідей не містять | ✅ |

## Факти
Нові речення в уривках — це побут і враження вигаданих героїв. Дат, чисел, назв і реальних осіб у них немає, тож таблиці фактів для частини 1 немає. Нових неочевидних словникових форм теж немає: hint повторюють терміни, які вже є в розділах.

## Авторське право (нові фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Запит | Результат |
|---|---|---|
| e11s1l7 ч. 1 | "the queue for" "went all the way to the door" "More people were still arriving" | збігів немає |
| e11s1l7 ч. 2 | "was quiet and didn't talk much, but that didn't make him a thief" | збігів немає |
| e11s1l7 ч. 2 | "went to look for the teachers together" | збігів немає |
Решта нових рядків коротша за 12 слів або це формулювання правил.

## Прогін
`validate --section e11s1…e11s8`: 0 помилок. Попередження одне: e11s6l6 readWordsPerScreen 67 > 65. Це наслідок дописаного тексту читання (408 слів, П1407 ≥ 400) і питання калібрування профілю «10-11» (STYLE-пропозиція style-eng-g11: [8, 70]). Дефектом змісту це не є, тож не правив.

## Вердикт (частина 1)
**Прийнято.** Знахідок ❌ і ⚠️ немає, правок не робив. Усі уроки e11s1–e11s8 лишаються `verified`.

---

# Частина 2. fix-eng-historic-names (D-057)

## Ключі (diff)
Механічна звірка тим самим скриптом для g10-e10s5, g11-e11s3, g11-e11s5, g11-e11s7, g5-e5s7, g9-e9s6, pool-g5-e5s7. `correct`, `answer`, `{*…}`, `tiles`, `extra` не змінено. Змінено лише тексти з іменем: `left` у match e10s5 (l3, l7), `opts[1]` e11s5l6 #3 («Vernadskyi» → «Vernadsky», `correct: 2` той самий, а варіант лишається хибним, бо Академію 58 років очолював Paton) і `left`/`right` у пулі pe5s7 item 56 (пари на тих самих місцях). Ключів `word` з іменами немає.

## Усталене написання: джерела, відкриті в цій сесії
| Особа (розділ) | У тексті | Джерело 1 | Джерело 2 | Примітка КМУ55 — де | Вердикт |
|---|---|---|---|---|---|
| Maria Prymachenko (e10s5) | Maria Prymachenko | https://en.wikipedia.org/wiki/Maria_Prymachenko — «Maria Oksentiyivna Prymachenko» | https://artsandculture.google.com/story/0AVxtPNdOnSXQA, https://theukrainianmuseum.org/maria-prymachenko — «Maria Prymachenko» (WebSearch) | e10s5l3 `info` «Maria Prymachenko (1909–1997)» — неоцінюваний | ✅ |
| Volodymyr Vernadsky (e11s5, e11s7) | Volodymyr Vernadsky | https://en.wikipedia.org/wiki/Vladimir_Vernadsky — «known in Ukraine as Volodymyr Ivanovych Vernadsky»; «Vernadskyi» на сторінці немає | https://www.nas.gov.ua/en/about-nas/history-nas, https://www.kyivpost.com/amp/post/27242 «Volodymyr Vernadsky» (WebSearch) | e11s5l6 `info` «Words for the article»; e11s7l6 `info` — неоцінювані | ✅ |
| Leonid Kadenyuk (e11s7) | Leonid Kadenyuk | https://en.wikipedia.org/wiki/Leonid_Kadenyuk — «Leonid Kostyantynovych Kadenyuk» | https://www.nasa.gov/wp-content/uploads/2016/01/kadenyuk.pdf, https://www.britannica.com/biography/Leonid-Kadenyuk (WebSearch) | e11s7l5 `info` (перша згадка) | ✅ |
| **Ivan Pylypow** (e11s7) | було **Pylypiw** → виправлено на **Pylypow** | https://en.wikipedia.org/wiki/Iwan_Pylypow — назва статті «Iwan Pylypow», «Ivan Pylypow»; https://en.wikipedia.org/wiki/Wasyl_Eleniak — «along with Ivan Pylypow» | Encyclopedia of Ukraine, стаття «Pylypow, Ivan» https://www.encyclopediaofukraine.com/pages%5CP%5CY%5CPylypowIvan.htm (WebSearch-виписка: «Pylypow, along with Wasyl Eleniak…»); Canadian Encyclopedia «Ivan Pylypow and Wasyl Eleniak» https://thecanadianencyclopedia.ca/en/timeline/ukrainian-canadian-history (WebSearch) | e11s7l6 `info` | ⚠️ → виправлено |
| Wasyl Eleniak (e11s7) | Wasyl Eleniak | https://en.wikipedia.org/wiki/Wasyl_Eleniak — «Wasyl Eleniak (also spelled Vasyl Eleniak)» | EoU «Eleniak, Wasyl» https://www.encyclopediaofukraine.com/pages%5CE%5CL%5CEleniakWasyl.htm; Canadian Encyclopedia (WebSearch) | e11s7l6 `info` | ✅ |
| Ivan Kotliarevsky (e5s7, pe5s7) | Ivan Kotliarevsky | https://en.wikipedia.org/wiki/Ivan_Kotliarevsky — «Ivan Petrovych Kotliarevsky» | EoU «Kotliarevsky, Ivan» https://www.encyclopediaofukraine.com/pages%5CK%5CO%5CKotliarevskyIvan.htm (WebSearch-виписка) | e5s7l6 `intro` (для 5 кл. простіше: «In Ukrainian documents…») | ✅ |
| Mykhailo Kotsiubynsky (e11s3) | Mykhailo Kotsiubynsky | https://en.wikipedia.org/wiki/Mykhailo_Kotsiubynsky | https://kyivindependent.com/mykhailo-kotsiubynsky/, Cambridge Core (переклад CIUS 1981) (WebSearch) | e11s3l3 `intro` — перша згадка в розділі | ✅ |
| Igor Sikorsky (e9s6) | Igor Sikorsky (було й до правки) | https://en.wikipedia.org/wiki/Igor_Sikorsky — «Igor Ivanovich Sikorsky», укр. «Ihor Ivanovych Sikorskyi» | https://www.britannica.com/biography/Igor-Ivan-Sikorsky (WebSearch) | e9s6l1 `info` «Three famous names» | ✅ |

Форми КМУ55 у примітках (Mariia Prymachenko, Vernadskyi, Kadeniuk, Pylypiv, Yeleniak, Kotliarevskyi, Kotsiubynskyi, Sikorskyi) — за таблицею постанови № 55: є → ye на початку слова, -ий → -yi, ю → iu, ія → iia. Збігається з укр. романізацією, яку подає en.wikipedia (Sikorsky: «Ihor Ivanovych Sikorskyi»).
Обмеження: хости encyclopediaofukraine.com, thecanadianencyclopedia.ca і ualberta.ca з цієї сесії недоступні (проксі), тож їх підтверджено виписками WebSearch. Для кожної особи є щонайменше одне джерело, відкрите через WebFetch (en.wikipedia), і ще одне незалежне.

## Правки верифікатора
1. **content/eng/g11-e11s7.js** — Pylypiw → **Pylypow** (5 місць: e11s7l6 уривок частини 1 — 3 рази, фінальні gaps text і fbText). Підстава — en.wikipedia (назва статті й стаття про Eleniak) і EoU; D-057 наводив Pylypiw лише як приклад. Ключів це не зачіпає: ім'я стоїть поза `{*…}`.
2. **readWordsPerScreen** (попередження після приміток):
   - e11s5l6 (66 → 65): примітка → «Official Ukrainian spelling: *Vernadskyi*.»; в `info` «their research institutes» → «their institutes» (research institute пояснено окремим рядком), «give something to someone else» → «give something to someone» (як у e11s7), «joining pieces of metal by melting them» → «joining metal by melting it». Зміст визначень той самий.
   - e11s7l6 (67 → 65): примітка → «Official Ukrainian spelling: *Ivan Pylypiv*, *Vasyl Yeleniak*, *Volodymyr Vernadskyi*.»; `intro` Daryna «Let’s read the article first. Then we can decide.» → «Let’s read the article first.» (питання «Who do you think is right?» лишилося).
   Обидві правки — на неоцінюваних екранах. Примітки скорочено, а не прибрано, тож вимогу D-057 виконано. Розходження у формулюванні з повною приміткою e11s7l5 і інших розділів — стилістичне, на зміст не впливає.

## Прогін
`validate --section` e10s5, e11s3, e11s5, e11s7, e5s7, e9s6: 0 помилок, 0 попереджень. `validate --pool pe5s7`: 0 / 0.

## Вердикт (частина 2)
**Прийнято** з 1 ⚠️ (Pylypiw), яке виправлено. Ключі цілі, усі примітки стоять на неоцінюваних екранах при першій згадці особи в розділі. Статуси розділів не змінено (`verified`).

## Потребує людини / куратора
1. Bohdan Khmelnytskyi у назві пам'ятника (e7s7) і живі спортсмени Bubka / Kharlan (усталене Sergey / Olga) — відкриті питання автора (reports/verify/fix-eng-historic-names.md п. 1–2). D-057 їх не покриває.
2. Glossary/eng.md «Імена»: у рядку TERM writer-fix-eng-historic-names і в D-057 стоїть «Ivan Pylypiw» — куратору треба взяти **Ivan Pylypow** (рядок в inbox).
3. Профіль «10-11» readWordsPerScreen [8, 65] → [8, 70] (e11s6l6 67) — decisions.md.
