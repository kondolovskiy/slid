# Верифікація: style-eng-g4-5 (коміт 4f13dd8)

Дата: 2026-11-20 · verifier-style-eng-g4-5 · скіл `content-verify` (розділ «Англійська»).
Обсяг: увесь diff 4f13dd8 у content/eng/g4-e4s1…e4s8, g5-e5s1…e5s9 (e5s10 не змінювався) + звіт стиліста reports/style/eng-g4-5.md §8.
Стиліста не бачив; кожну правку diff переглянуто окремо (penfriend, keepCase у `build`, герої, формула наголосу, e5s4, e5s6, e5s9) — інших змін у diff немає.

**Вердикт: прийнято.** Неправильних відповідей, завдань без опори, зламаних ключів і фактичних помилок не знайдено. 1 дрібна правка (e5s4 l1). Статус розділів лишається `verified`.

## 1. `build`: перебір перестановок (п. 1 задачі)

Скрипт (node + vm, app/lang.js `SLID_LANG.check(s, st, "en")`): для кожного з 65 `build` у 18 розділах — **усі** впорядковані підмножини плиток `tiles` + `extra` будь-якої довжини (не лише повні перестановки).
Результат: жодна пастка `extra` не зараховується ніде; кожен рядок `answer` приймається; прийнятих різних речень рівно стільки, скільки `answer` (у e4s3l4, e5s6l4, e5s6l7 кількість прийнятих станів — 2, бо дві однакові плитки «I» дають той самий рядок).

| Питання (keepCase + велика перша плитка) | Прийнято рушієм | Інший граматичний порядок з плиток? | Вердикт |
|---|---|---|---|
| e4s2l4 #9 Where are my books? | лише ключ | «My books are where?» — ехо-питання, з великою «Where» не складається; поза рівнем | ✅ |
| e4s2l5 #8 Are there any posters in your room? (прибрано «In your room are there any posters?») | лише ключ | прибраний порядок із великою «Are» посередині не складається; без коми — маргінальний; велика плитка однозначно ставить Are першим | ✅ зміна ключа коректна |
| e4s3l6 #6 Do you like swimming or cycling? | обидва порядки or | — | ✅ |
| e4s4l3 #8 How many apples do we need? | лише ключ | — | ✅ |
| e4s5l3 #8 How do you feel? | лише ключ | — | ✅ |
| e4s6l3 #5 Is it raining in Lviv? | лише ключ | — | ✅ |
| e4s6l7 #4 Is Dmytro playing in the garden? | лише ключ | — | ✅ |
| e4s8l2 #8 What time is the party? | лише ключ | «What is the party time?» — див. нижче | ✅ (не додано) |
| e5s1l2 #6 Have you got any cousins? | лише ключ | — | ✅ |
| e5s1l6 #5 What does your best friend like? | лише ключ | — | ✅ |
| e5s1l7 #6 (boss T5) What does your aunt do? | лише ключ | — | ✅ |
| e5s2l3 #7 What time does Oksana get up? | лише ключ | — | ✅ |
| e5s2l6 #8 How do you spell “pencil”? | лише ключ | — | ✅ |

(Номер екрана — порядковий у `screens`, з 1; стиліст рахує на 1 менше.)

**e4s8l2 «What is the party time?» — не додаю в `answer`.** У Cambridge Dictionary статті *party time* немає (https://dictionary.cambridge.org/dictionary/english/party-time → перенаправлення на головну), в OALD — 404 (https://www.oxfordlearnersdictionaries.com/definition/english/party-time). Wiktionary (https://en.wiktionary.org/wiki/party_time): «party time (uncountable) A time for entertainment or enjoying oneself» + вигук — тобто сполука означає «час гуляти», а не «час початку вечірки». Норма запитання про час — «What time is it / What’s the time?», «What time do you…» (OALD time_1, https://www.oxfordlearnersdictionaries.com/definition/english/time_1). Урок вчить саме «What time is the party?» (екран-правило, `word` «What ___ is the party?» → time, hint «Start with What time…»). Порядок неідіоматичний, тож хибний для A1 — лишаю як є.

Чи велика плитка видає більше, ніж треба: у всіх 13 питаннях предмет завдання — порядок після першого слова (допоміжне дієслово, підмет, -s), а hint і так називав перше слово («Start with How/What», «A question starts with Have»). Відповідає рішенню style/eng.md (еталон e5s1: «питання в `build` — з keepCase і великою першою плиткою»). ✅

## 2. Змістові правки

| Правка | Перевірка | Вердикт |
|---|---|---|
| e5s6l6 ч. 1 «In June» → «In July, we go to Odesa»; multi ч. 2 пастка «They go camping in June.» → «…in July.» | Ч. 2: «In August, we go to the Carpathians. We go camping with Dad.» Пастка «in July» однозначно хибна (у липні — Odesa, ч. 1 попереднього екрана), ключ [0, 1] не змінився; hint «Check the month and the mountains», fbText «In August…» — узгоджені. Тепер e5s6 збігається з e5s9l3 build «We’re going to visit Odesa in July.» | ✅ |
| e5s9l1 intro «I’d like to go to Odesa again…» | *again* — A1; узгоджує з e5s6 (Oksana їздить щоліта). Наступні завдання цитують «I’d like to go to Odesa.» без again — значення (choice «She wants to go to Odesa», `word` because, match) не змінюється. Авторське право: WebSearch з лапками «"I'd like to go to Odesa again because I love the sea"» — збігів немає (лише туристичні сторінки про Odesa). | ✅ |
| e5s9l5 gaps Daryna «visited Kyiv» → «visited Lviv» | Daryna — однокласниця Andrii в Kyiv (e5s2) → «visited Kyiv… stayed in a hotel» суперечило. Ключі (visited, stayed, liked) не змінились; опора — правило -ed того ж уроку. Факту про Lviv у реченні немає («the big park» — без назви). | ✅; рекомендація нижче |
| e5s4l1 info: «a dress, a skirt → girls and women wear them» → «a dress → like a T-shirt and a skirt in one» | Значення відповідає словникам: CD dress «a piece of clothing that covers the top half of the body and hangs down over the legs, usually worn by women and girls» (https://dictionary.cambridge.org/dictionary/english/dress), OALD dress_1 «a piece of clothing that is made in one piece and hangs down to cover the body as far as the legs» (https://www.oxfordlearnersdictionaries.com/definition/english/dress_1). Але *skirt* випав зі списку жирних слів: опора для match «a skirt» лишилася (підпис на рисунку clothes-1.svg — `<text>a skirt</text>`, `cap`), проте слово в правилі вже не виділено. **Правка:** «a T-shirt and a <b>skirt</b> in one». | ✅ після правки |
| e5s4l1 match hint «A hat is for your head. A coat is long and warm.», fbBad «Look at each picture again. What is it?» | Hint підказує 2 з 5 пар змістом, а не місцем — допустимо (решту дитина зіставляє за підписами рисунка); повернутися на попередній екран не вимагає. fbBad нейтральний. Друга доречна пара в match: jumper/coat/hat/scarf/skirt на окремих SVG за `alt` — однозначні. | ✅ |
| penfriend (24 входження + назва значка) | CD «penfriend noun [C] uk /ˈpen.frend/ (also pen pal)» (https://dictionary.cambridge.org/dictionary/english/penfriend); OALD «penfriend noun (British English) (also pen pal…) a person that you make friends with by writing letters or emails» (https://www.oxfordlearnersdictionaries.com/definition/english/penfriend). Залишків pen-friend / pen friend у content/eng немає (grep); жодного ключа `word`/`answer` слово не зачіпає; id значка e4s1boss не змінено. Множина «penfriends», «his penfriend Emma» — граматично правильні. | ✅ |
| Формула наголосу «The <u>underlined</u> part is strong» (e4s1, e4s2 ×2, e4s5, e4s8, e5s2) | Зміни лише в `info.body` і `fbText`, не в `words`/`answer`; HTML збалансований; формула збігається з еталоном e4s1 (style/eng.md). validate — 0 помилок. | ✅ |

## 3. Герої (grep по content/eng/g4-*, g5-*; pool-/diag-eng ще немає)

| Ім'я | Де | Роль | Вердикт |
|---|---|---|---|
| Marta | e4s1 boss T2, e5s1 boss T1 | кузина Тараса, дочка Uncle Roman і Aunt Liudmyla | ✅ одна роль; більше ніде |
| Sofiia | e4s1, e4s2, e4s4–e4s8, e5s1–e5s5, e5s10 | лише сестра Andrii (Kyiv); «cousin Sofiia» / «Sofiia is Taras’s» — 0 входжень | ✅ |
| Danylo | e4s8 (21), e5s8l6 | друг Mariia (Kharkiv): кав'ярня в Kharkiv, є брат і сестри, день народження в June; e4s8 не прив'язує його до Kyiv | ✅ |
| Bohdan | e4s3, e4s5, e5s2, e5s6 | лише друг / однокласник Andrii (Kyiv) | ✅ |
| Kateryna | e4s3, e4s8 | подруга Mariia (e4s8), e4s3 — без міста; у e5s2 — 0 входжень | ✅ |
| Zoriana | e5s2 (5) | однокласниця Andrii (Kyiv) | ✅ |
| Daryna | e5s2, e5s9 | однокласниця Andrii (Kyiv); тітка в Odesa, сестра; тепер «visited Lviv» | ✅ |
| Oksana / Odesa | e5s6 (July), e5s9 (again, build «in July») | щоліта в липні — Odesa, uncle Ivan | ✅ узгоджено |

Також вибірково: Yaryna й Ostap — лише Lviv (e5s1, e5s3, e5s8); Dmytro — лише брат Oksana; Maksym — кузен Andrii (Ottawa); Mariia — only child (жодного «my brother/sister» у її репліках). Коментар-заголовок e5s1 старих ролей не містить.

## 4. Поза заявленим
Інших змін у diff немає: рівень пояснень не підвищено (нові слова — *again*, *in one* — A1/A2), фактів не додано, ключі змінено лише в e4s2l5 (вище). `uk` не додано — згоден зі стилістом.

## 5. Прогін
- `node tools/validate.mjs --section <id>` для всіх 18 розділів e4s1–e5s10 — 0 помилок (попередження — longWordShare / readWordsPerScreen, описані в reports/style/eng-g4-5.md §4).
- Перебір `build` — скрипт у scratchpad (node + vm + app/lang.js), результати в таблиці §1.
- build і плейтест не запускав (паралельна робота; Python-playwright у контейнері немає) — плейтест змінених розділів після build оркестратора.

## 6. Правки
Зроблено (1): e5s4 l1 info — *skirt* знову жирним у визначенні dress («a T-shirt and a <b>skirt</b> in one»).

Рекомендовано (не блокує):
1. e5s9 l5 gaps (Daryna): «Last summer we visited Lviv. We stayed in a small hotel.» майже дослівно повторює щоденник Mariia з intro того ж уроку («Last week we visited Lviv. We stayed in a small hotel.») — відповіді можна переписати з intro. Можна взяти інше місто з l1 (напр. «Kamianets-Podilskyi… I liked the old castle»; факт уже в inbox verifier-e5s9) — на розсуд автора чи наступного style-sync.
2. Плейтест e4s2, e4s8, e5s2 (нові keepCase) після build.

## 7. Вердикт по розділах
e4s1–e4s8, e5s1–e5s9 — `verified` лишається (відкритих ❌/⚠️ немає); e5s10 не змінювався. Задача style-eng-g4-5 — **прийнято**, → done.

Джерела, відкриті в цій сесії: CD penfriend, dress, party-time; OALD penfriend, dress_1, time_1, party-time (404); Wiktionary party_time; WebSearch (авторське право) — URL у таблицях вище.
