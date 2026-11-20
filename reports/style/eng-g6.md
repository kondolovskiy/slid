# Синхронізація стилю: англійська 6 кл. (style-eng-g6)

Дата: 2026-11-20 · скіл `style-sync` · розділи e6s1–e6s8 (усі `verified`; статус не змінено).
Перевірка: `node tools/validate.mjs --section e6s1…e6s8` — 0 помилок, 0 попереджень у кожному; повний `node tools/validate.mjs` — 0 помилок;
`node tools/stats.mjs --subject eng` → reports/style-eng.md. build не запускався (оркестратор). content/eng/g4-*, g5-*, plan.js, app/, tools/ не змінено.

## 1. Що змінено (8 розділів, 31 рядок)

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | Герої: Tom (10 років, e6s8l1; молодший за Emma) на sports day у школі Emma | Emma — 12, у UK це вже secondary school, Tom — ще primary: разом бігти на одному sports day вони не можуть. У тексті «Sports day, part 2 of 2» Tom → **Oliver** (однокласник Emma з e6s4l2), а також у питанні, `hint`, `fbBad`, `fbText`. Ключ (`correct: 2`, «He fell.») не змінено | e6s4l6, екран 9 |
| 2 | Герої: e6s5 — бабуся й дідусь до Kyiv «next week» (l1) і сім'я Andrii до Chernihiv «next weekend» (boss) | l1 Final: «My grandparents are coming to Kyiv **in July**» (як у вступі l1: «The friends chat about the summer»); boss intro: «**It’s October.** Andrii and his family are visiting his grandparents in Chernihiv next weekend» (до того ж пасує завдання 4: «It might be cold, so pack a jumper»). Тепер це дві різні поїздки в різний час | e6s5l1 (Final), e6s5l7 (intro) |
| 3 | e6s3 фінал: Andrii сам смажить деруни | intro: «Andrii, Sofiia **and Dad** cook lunch…»; Task 4 `word`: «This morning, Andrii **and Dad** ___ deruny for **the** grandparents.» (ключ `made` той самий; з підметом у множині теж *made*), `fbText` так само. Узгоджено з e6s3l3 «Ask an adult to help you!» і e6s3l4 «Dad and I made pancakes» | e6s3l7 |
| 4 | `why` розділу показує граматику до уроку | Рішення для класу — §3. Змінено лише e6s7: «…And to talk about places you have visited.» → «…And to ask a friend: “Have you ever been to Kyiv?”» (Present Perfect з'являється лише в e6s7l4) | e6s7 (розділ) |
| 5 | Шаблонні інструкції | «Complete the dialogue.» → «Complete the sentences.» (єдина нешаблонна назва з 349 оцінюваних екранів 6 кл.) | e6s5l6 |
| 6 | `fbOk` різні в сусідніх екранах (style/eng.md) | 11 повторів поспіль замінено (Good eye! / Well done! → Right., Yes!, Exactly., Well done!, Good eye!) | e6s2l2, e6s4l3, e6s5l2, e6s5l5, e6s6l2, e6s6l6, e6s6l7, e6s7l2, e6s7l5, e6s7l6, e6s8l6 |
| 7 | Фінал e6s1 без жодної підказки (0 з 6; у решті фіналів 4–6 кл. — 2–7, common.md: «на найскладнішому — hint») | `hint` у T2 build «What comes first: how big or the colour?», T5 gaps «Look + an adjective (tired, happy): no like, no -ly.», T6 choice «Funny stories, friendly: is it the face or the character?» | e6s1l7 |

## 2. `build`: перебір перестановок
Жоден `build` не змінювався, але всі 40 `build` 6 кл. перебрано (node + vm + app/lang.js `SLID_LANG.check(s, st, "en")`): **усі** впорядковані підмножини плиток `tiles` + `extra` будь-якої довжини.
Результат: пастка `extra` не зараховується ніде; кількість різних прийнятих речень дорівнює кількості `answer` у кожному з 40; кожен `answer` складається. Скрипт — у scratchpad сесії (не в репозиторії).

## 3. `why` розділу з граматикою розділу — рішення для 6 кл.
**Правило:** `why` розділу пишемо граматикою, що вже була до розділу (попередні класи й розділи); нову форму розділу показуємо лише цитатою-зразком у лапках, як уже зроблено в e5s8 («say dates: “the first of January”») і e4s8 («“Happy New Year!”»).
- e6s3 «meals you had» — лишено: *had* — з e4s7l5 (Past Simple irregular, «I had juice yesterday»).
- e6s7 «places you have visited» — Present Perfect новий (e6s7l4) → змінено на цитату «“Have you ever been to Kyiv?”» (той самий зразок, що в назві e6s7l4).
- e6s8 «what other people said» — лишено: *said*, *told* уже в текстах e6s4l5 і e6s6l6, Present Perfect — з e6s7 (requires).
- e6s4 «what happened» (Past Simple regular, e5s9), e6s1, e6s2, e6s5, e6s6 — без нової граматики.
- `why` уроків називають мету уроку і можуть містити його зразок (e6s7l3 «Learn to answer: It was built in…») — це не оцінюване завдання, D-019 не стосується.
**Розбіжність із plan.js:** `why` e6s7 у content/eng/plan.js тепер відрізняється — синхронізувати куратору (рядок STYLE нижче).

## 4. Термін «the third form of the verb» (TQ-125)
Перевірено весь 6 кл.: термін є лише в e6s7 — l5 (`info` з рядом трьох форм «see – saw – seen», `hint`, `fbBad`) і l7 (`hint` T5, `fbBad` T7 «was + the third form of build», `fbText` фіналу), тобто лише після екрана, що його визначає. «past participle» у 6 кл. немає ніде. Пасив у e6s3l2 (is made / are eaten) і e6s7l3 (was built) пояснено формою без терміна — узгоджено, правок не треба. Рядок TERM для glossary — нижче (тимчасово, до відповіді на TQ-125).

## 5. Перевірено без змін
- Інструкції — шаблонні в усіх 349 оцінюваних екранах (у 6 кл. з доповненням теми: «Complete the sentences with the Past Simple.»); `eyebrow` — Lesson N / Guess! / Final / Task N / «Reading: …, part N of M» (і «Final · part N of 2» у e6s1l6, як в еталоні-сусіді e5s1l6).
- Кирилиці, IPA, «Click / Tap», позиційних посилань, імітації аудіювання немає (*listen* — лише «listen to the teacher» як правило школи, e6s6l4, l6).
- Назви часів — за glossary (the Present Simple / Past Simple / Past Continuous / Present Perfect; з малої — лише в коментарях-заголовках файлів).
- Пояснення: прозова частина `info` ≤ 36 слів, речень пояснення > 12 слів немає (довші — приклади й списки); нових термінів ≤ 2 на урок.
- Герої проти канону 4–6 кл.: Tom — 10 (e6s8l1), не плаває (e6s4l3); Mariia — без brother/sister; Dmytro — брат Oksana; Oksana — Odesa в липні (e6s5l1, l3); Zoriana, Daryna, Bohdan, Kyrylo — клас Andrii (Kyiv); Ostap, Yaryna, Myroslava, Orest — Lviv; Danylo — друг Mariia; Marta — кузина Taras; Kateryna у 6 кл. немає; Andrii був у London «two years ago» (e6s8 = e4s7).
- Складність плавна (звичайні уроки, сер. ± sd): readWordsPerScreen 4 кл. 26 ± 3 → 5 кл. 29 ± 3 → 6 кл. 33 ± 4; maxText 43 → 48 → 54; sentenceWords 4,7 → 5,0 → 5,6; screens 9,1 → 9,5 → 9,6; gradedShare 0,62 → 0,65 → 0,66. Стрибків між класами й розділами немає, вирівнювати за обсягом не треба.

## 6. Попередження stats і validate
validate для e6s1–e6s8: 0 попереджень (усі метрики в межах профілю «5-6»).
«Нетипово для сім'ї» (z ≥ 2, у межах профілю) — 19 уроків: e6s2l1, e6s2l5, e6s2l6, e6s2l7, e6s3l1, e6s3l3, e6s3l4, e6s3l6, e6s3l7, e6s4l5, e6s4l6, e6s5l2, e6s6l3, e6s7l1, e6s7l3, e6s7l6, e6s8l2, e6s8l5, e6s8l6.
Причина системна: сім'я `5-6:lesson` змішує 60 уроків 5 кл. і 48 уроків 6 кл., а 6 кл. закономірно довший (див. §5). Решта — жанр: меню (e6s3l1, maxText 73), опис міста на мапі (e6s7l1, 73), розклад (e6s5l2), уроки читання e6s3l6, e6s4l6, e6s7l6, e6s8l6. Переглянуто — правок не треба.

## 7. Тексти для читання й TQ-123
Обсяг цілого тексту (слова курсивного тексту в усіх частинах): e6s1l6 70, e6s3l6 114, e6s4l6 89, e6s6l6 116, e6s7l6 159–160, e6s8l6 150 (5 кл. для порівняння: 61–123).
Пропозиція TQ-123 для 6 кл. — 160–220 слів — досягає лише e6s7l6, і саме він упирається в readWordsPerScreen = 40 (межа «5-6»). За 220 слів у 8-екранному уроці читання readWordsPerScreen буде ≈ 48. Тобто межа екрана `maxText` ≤ 110 тексту не заважає (найбільший уривок 6 кл. — 64 разом із питанням); заважає лише середнє на урок. Рішення — у пропозиції профілю (§8) і у відповіді на TQ-123; тексти не подовжував: це зміна змісту verified-уроків, і до відповіді вчителя число лишається пропозицією.

## 8. Пропозиція профілю `eng` (рядок STYLE; style/profiles.json не змінено)
Фактичні значення 6 кл. (звичайні уроки, n = 48 / фінали, n = 8):

| Метрика | 6 кл. факт (сер. ± sd; min–max) | фінали | діє зараз («5-6») | Пропозиція |
|---|---|---|---|---|
| screens | 9,6 ± 0,7; 8–11 | 7–8 | 6–11 | без змін |
| gradedShare | 0,66 ± 0,07; 0,55–0,88 | 0,86–0,88 | 0,5–0,9 | без змін |
| readWordsPerScreen | 33 ± 4; 25–40 (p90 39) | 19–27 | 5–40 | **5–45** (урок читання з текстом 160–200 слів; 7–9 кл. — 6–50, плавно) |
| maxReadWords | 59 ± 8; 41–77 | 30–51 | ≤ 120 | без змін (запас під текст TQ-123) |
| maxText | 54 ± 8; 36–73 | 25–42 | ≤ 110 | без змін (уривок ≤ 100 за style/eng.md) |
| sentenceWords | 5,6 ± 0,6; 4,4–6,6 | 4,5–5,7 | 3–10 | без змін |
| longWordShare | 0,06 ± 0,03; max 0,13 | max 0,115 | ≤ 0,14 | без змін |
| typeVariety | 5,1 ± 0,7; 4–6 | 3–4 | 2–6 | без змін |

Оскільки ключ «5» уже перекриває readWordsPerScreen для 5 кл. (5–35), зміна «5-6».readWordsPerScreen → [5, 45] стосується лише 6 кл.
ENGINE (на розсуд, повтор із style-eng-g4-5): z-оцінку «нетипово для сім'ї» рахувати в межах класу, коли профіль має ключ класу (тут «5»), або не виводити прапорець, коли метрика в межах профілю і |z| < 3 — зараз 19 прапорців 6 кл. без потреби в правках.

## 9. Для точкової повторної верифікації
Змістові правки, що зачіпають текст завдання, ключ чи сюжет (ключі всіх завдань не змінено):
1. e6s4l6, екран 9 (Reading: Sports day, part 2 of 2): Tom → Oliver у тексті, питанні, hint, fbBad, fbText; `correct` той самий.
2. e6s5l1 Final: «next week» → «in July» (питання «Why does Grandma love the coach?» від часу не залежить); e6s5l7 intro: «It’s October.».
3. e6s3l7: intro «Andrii, Sofiia and Dad cook lunch», Task 4 `word` — `before` «This morning, Andrii and Dad», `after` «deruny for the grandparents.», ключ `made`.
4. e6s1l7: три нові `hint` (T2, T5, T6) — перевірити, що не видають відповідь.
5. e6s7: `why` розділу (новий текст, не завдання).
Без впливу на зміст: e6s5l6 назва екрана, 11 `fbOk`.

## 10. Не зроблено / наступні кроки
- content/eng/plan.js — синхронізувати `why` e6s7 (куратор).
- Подовження текстів читання до 160–220 слів — лише після відповіді на TQ-123 і рішення про профіль; окремі задачі `refine-eng-*` тоді.
- Плейтест змінених розділів (e6s1, e6s3, e6s4, e6s5, e6s7) — після build оркестратора.
