# Верифікація: пул pe5s8 (англійська, 5 кл., розділ e5s8 «Festivals and traditions»)

Верифікатор: verifier-pe5s8, 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s8.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2б–2в. Задача: tasks/review/write-eng-pool-g5-e5s8.md. Опора: уроки `content/eng/g5-e5s8.js` (verified), reports/verify/e5s8.md.

**Вердикт: пул придатний, `status: "verified"`.** Критичних помилок немає: неправильних ключів, других правильних відповідей, вправ без опори, хибних фактів і збігів з опублікованими текстами я не знайшов. Зробив одну дрібну правку (a05) і змінив статус. Нових TQ немає.

## 1. Програма, джерело `src`

PDF МП-ІМ завантажив у цій сесії: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 (збігається з facts/eng.md). Читав `pdftotext`.

| `src` | Що на сторінці (дослівно) | Вправи | Вердикт |
|---|---|---|---|
| mpim с. 16 | «Читання листів — Розуміє короткі, прості особисті листи» | read: a32–a34, a48–a50 | ✅ |
| mpim с. 18 | «Пише короткі вітальні листівки…», «Занотовує події, відповідні дати та час…» | l1, l2, l6 write | ✅ |
| mpim с. 20 | «Свята і традиції — Календар свят в Україні та країнах…» | l3, l4 | ✅ |
| mpim с. 21 | «Exclamations: What a …» | l6 gram | ✅ |
| mpim с. 22 | «Past simple affirmative»; «Past simple: affirmative, negative, questions…» | l5 | ✅ |

`sources`: `id: "mpim"`, `program: true`, title і url — як у facts/eng.md. `srcPage` і `adapted` відсутні ✅.

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| Independence Day (Україна) — 24 August (a26–a29) | en.wikipedia, таблиця «24 August — Independence Day»: https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine; розділ e5s8 (verified, reports/verify/e5s8.md §2: uk.wikipedia, Ukrinform) | ✅ Вихідним не названо (воєнний стан: «During martial law a public holiday is not a non-working day», та сама сторінка) |
| St Nicholas Day — 6 December; діти знаходять подарунки під подушкою (a27, a30, a33, a35, a37, a41, a47, a59) | en.wikipedia «6 December – Saint Nicholas Day» (https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine); en.wikipedia «In Ukraine… brings presents on 5–6 December», «children wait for St. Nicholas… to put a present under their pillows»: https://en.wikipedia.org/wiki/Saint_Nicholas_Day; uk.wikipedia «відзначається 6 грудня», «покладе подарунок під подушку»: https://uk.wikipedia.org/wiki/День_Святого_Миколая | ✅ |
| Christmas Day — 25 December (UA, UK) (a13, a15, a26, a31, a33, a50) | en.wikipedia «Since 2023 Christmas is only officially celebrated in Ukraine on 25 December»: https://en.wikipedia.org/wiki/Christmas_in_Ukraine; таблиця https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine | ✅ |
| Christmas Eve в Україні: вечеря з twelve dishes, діти співають колядки (a35, a36, a48) | en.wikipedia «a dinner which usually includes 12 dishes» (https://en.wikipedia.org/wiki/Christmas_in_Ukraine); uk.wikipedia «з дванадцяти різноманітних пісних страв», «люди співають колядки»: https://uk.wikipedia.org/wiki/Святий_Вечір; WebSearch «following the meal on Christmas Eve, groups of children go to other houses, singing carols» (огляд: https://www.whychristmas.com/cultures/ukraine, https://risu.org.ua/en/ukrainian-christmas-traditions_n53608) | ✅ формулювання «many Ukrainian families» — як в уроці |
| kutia — «a sweet dish with grain, honey and poppy seeds» (a46, a47) | en.wikipedia «a dish of grain, honey and poppy seeds» (https://en.wikipedia.org/wiki/Christmas_in_Ukraine); uk.wikipedia «з пшеничних або ячмінних зерен», «меду», «товченим маком» (https://uk.wikipedia.org/wiki/Святий_Вечір) | ✅ |
| Boxing Day — 26 December, the day after Christmas Day, bank holiday (a26, a27, a34, a50) | OALD «the first day after Christmas Day. Boxing Day is an official holiday in the UK»: https://www.oxfordlearnersdictionaries.com/definition/english/boxing-day; CD «in the UK…, the day after Christmas Day, which is a public holiday»: https://dictionary.cambridge.org/dictionary/english/boxing-day | ✅ |
| Bonfire Night — 5 November, fireworks (a26, a29, a31, a32, a35, a36, a45, a47, a60) | OALD «the night of 5 November, when… people light bonfires and have fireworks»: https://www.oxfordlearnersdictionaries.com/definition/english/bonfire-night; CD «the night of 5 November, when many people in the UK light bonfires and watch fireworks»: https://dictionary.cambridge.org/dictionary/english/bonfire-night | ✅ вихідним не названо |
| Pancake Day — pancakes (a35, a44, a45) | OALD «(British English, informal)… when people traditionally eat pancakes»: https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day; CD «…when pancakes are traditionally eaten»: https://dictionary.cambridge.org/dictionary/english/pancake-day | ✅ «make pancakes» — як в уроці l4 |
| carols — «songs at Christmas» (a46, спірне п. 3) | OALD carol_1 «a Christian religious song sung at Christmas»: https://www.oxfordlearnersdictionaries.com/definition/english/carol_1; CD carol «a… religious song, usually one sung at Christmas»: https://dictionary.cambridge.org/dictionary/english/carol | ✅ |
| Christmas pudding — UK (a39, a40, a49) | OALD «traditionally eaten in the UK at Christmas»: https://www.oxfordlearnersdictionaries.com/definition/english/christmas-pudding; CD https://dictionary.cambridge.org/dictionary/english/christmas-pudding (стаття відкрилася) | ✅ |
| bank holiday — BrE (a34) | OALD «(British English) a public holiday, for example Christmas Day, New Year’s Day»: https://www.oxfordlearnersdictionaries.com/definition/english/bank-holiday | ✅ |

### Наголос (`stress` a06–a08, a20–a22): CD UK + OALD BrE, відкрито curl у цій сесії
| Слово | CD (https://dictionary.cambridge.org/dictionary/english/<w>) | OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<w>) | Пул | Вердикт |
|---|---|---|---|---|
| thirteenth | θɜːˈtiːnθ | /ˌθɜːˈtiːnθ/ (головний — teenth) | thir\|+teenth | ✅ |
| thirtieth | ˈθɜː.ti.əθ | /ˈθɜːtiəθ/ | +thir\|ti\|eth | ✅ |
| twentieth | ˈtwen.ti.əθ | /ˈtwentiəθ/ | +twen\|ti\|eth | ✅ |
| January | ˈdʒæn.ju.ə.ri | /ˈdʒænjuəri/ | +Jan\|u\|ar\|y | ✅ |
| September | sepˈtem.bər | /sepˈtembə(r)/ | Sep\|+tem\|ber | ✅ |
| October | ɒkˈtəʊ.bər | /ɒkˈtəʊbə(r)/ | Oc\|+to\|ber | ✅ |
| November | nəʊˈvem.bər | /nəʊˈvembə(r)/ | No\|+vem\|ber | ✅ |

Усі сім слів підкреслено `<u>` в info свого уроку (l1 #5, l2 #3) — опора є. Варіантів наголосу (як у weekend) немає.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу розв'язав сам до звірки з ключем. `word` перевірив `SLID_LANG.wordVerdict(…, "en")` на хибних кандидатах; `build` — `SLID_LANG.check` по **всіх перестановках усіх підмножин** плиток з `extra` (node, vm, app/lang.js; скрипт у scratchpad).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | first, second | = | l1 info #3 | ні | ✅ |
| a02 match | 2nd–second … 9th–ninth | = | l1 info #3 | ні (бієкція) | ✅ |
| a03 word | eighth | = | l1 info #3 | eight / 8th / eigth → no | ✅ |
| a04 pick | [five], [ten] | = | l1 info #3; порядок місяців | sixth правильне | ✅ |
| a05 gaps | twelfth, twentieth, thirtieth | = | l1 info #5 | ні | ✅ body «Write the numbers as words» суперечив вибору → виправлено (§5) |
| a06–a08 stress | як у ключі | = | l1 info #5 `<u>` | — | ✅ |
| a09 gaps | When’s | = | l2 info #3 | ні | ✅ |
| a10 word | twelfth | = | l1 info #5, l2 info #3 | 12th / twelve → no | ✅ |
| a11 gaps | the fifth of May; in | = | l2 info #3 | ні | ✅ (спірне 4 — як l2 #2) |
| a12 gaps | on; in | = | l2 info #3 | ні | ✅ |
| a13 pick | [in] 21 November | = | l2 info #3 | in May, on 25 December правильні | ✅ |
| a14 word | on | = | l2 info #3 | «Write on or in»; in/at → no | ✅ |
| a15 gaps | in; on; on | = | l2 info #3 | ні | ✅ |
| a16 gaps | first; third | = | l2 info #3 | ні | ✅ |
| a17 word | thirty-first | = (+ «thirty first») | l1 info #5 | 31st / thirty-one → no | ✅ |
| a18 match | дати → the … of … | = | l2 info #3 | ні | ✅ |
| a19 pick | [three], [twelve] | = | l2 info #3 | ні | ✅ |
| a20–a22 stress | як у ключі | = | l2 info #3 `<u>` | — | ✅ |
| a23 build | My birthday is on the third of March. | = | l2 info #3, l2 #8 | 986 409 станів → приймається лише ключ; інверсію відсікає keepCase | ✅ |
| a24 gaps | on; twenty-second; in | = | l2 info #3 | ні | ✅ |
| a25 build | His birthday is on the twenty-second of July. | = | l2 info #3 | 986 409 станів → лише ключ | ✅ |
| a26 match | 25 Dec / 26 Dec / 24 Aug / 5 Nov | = | l3 info #4 | дати не повторюються | ✅ |
| a27 gaps | 6 December; 26 December | = | l3 info #4 | ні | ✅ |
| a28 word | Independence | = | l3 info #4 | «24 August» в Україні — лише цей день | ✅ |
| a29 gaps | on; in | = | l2 info #3, l3 #7 | ні | ✅ |
| a30 pick | [in] 6 December | = | l2 info #3 | «in December» правильне | ✅ |
| a31 gaps | on; on; in | = | l2 info #3 | at → ні з датою/місяцем | ✅ |
| a32 gaps (read) | Bonfire Night; park | = | текст на екрані | ні | ✅ |
| a33 gaps (read) | St Nicholas Day; sixth | = | текст + l1 | ні | ✅ |
| a34 word (read) | Boxing | = | текст («the day after Christmas Day») + l3 info #4 | Christmas → no | ✅ |
| a35 match | fireworks–Bonfire Night … | = | l4 info #3 | ні | ✅ |
| a36 gaps | twelve; carols; watch fireworks | = | l4 intro, info #3 | ні | ✅ |
| a37 word | pillows | = (+ pillow) | l4 info #3 | beds → no; «under her head» відсікає | ✅ |
| a38 gaps | makes; sing | = | l4 info #5 | ні | ✅ |
| a39 pick | [make] | = | l4 info #5 | «We open» правильне | ✅ |
| a40 gaps | makes; don’t; open | = | l4 info #5; канон Emma (подарунки — Christmas Day) | ні | ✅ |
| a41 build | Children find presents under their pillows. | = | l4 info #3 | 1 956 станів → лише ключ; «Under their pillows children…» відсікає keepCase; finds → no | ✅ |
| a42 gaps | do | = | l4 info #5 | ні | ✅ |
| a43 word | do | = | l4 info #5 | are → no | ✅ |
| a44 gaps | do; don’t | = | l4 info #5 | «Yes, we make» — не коротка відповідь | ✅ |
| a45 gaps | fireworks; pancakes | = | l4 info #3 | ні | ✅ |
| a46 match | tradition / festival / carols / kutia | = | l4 info #3, l3 info #3, l4 intro, l4 #7 («sing carols at Christmas») | festival ↔ «something people do every year» не дає бієкції (tradition тоді без пари) | ✅ (спірне 3 — опора є) |
| a47 gaps | kutia; presents; fireworks | = | l4 intro, info #3 | ні | ✅ |
| a48 gaps (read) | kutia; sings carols | = | текст | ні | ✅ |
| a49 choice (read) | at two o’clock | = | текст | ні; dinner-пастки (verifier-e5s3) немає — час названо в тексті | ✅ (спірне 1 — choice для read дозволено POOL_TYPES) |
| a50 gaps (read) | 25 December; 26 December | = | текст + l3 info #4 | ні | ✅ |
| a51 gaps | was; were | = | l5 info #3; Yesterday / Last Sunday | ні | ✅ |
| a52 pick | [was] | = | l5 info #3; Last week | ні | ✅ |
| a53 word | were | = | l5 info #3; «It’s 2 January», «On New Year’s Eve», «Write was or were» | was/are/weren’t → no; weren’t відсікає «Their presents… were great!» (як boss T5 уроку) | ✅ |
| a54 gaps | were; wasn’t; were | = | l5 info #3; 27 December | ні | ✅ |
| a55 gaps | was; weren’t | = | l5 info #6 | ні | ✅ |
| a56 word | were | = | l5 info #6 | was/are → no | ✅ |
| a57 build | Was your party fun? | = | l5 info #6 | 325 станів → лише ключ | ✅ |
| a58 gaps | were; was; Was; was | = | l5 info #6 | ні | ✅ |
| a59 gaps | was; were | = | l5 info #3; Yesterday | ні | ✅ |
| a60 build | The fireworks were very beautiful. | = | l5 #9 | 325 станів → лише ключ | ✅ |
| a61 gaps | were; was; Was; wasn’t; was | = | l5 info #3, #6 | ні | ✅ |
| a62 gaps | a; an | = | l6 info #3 | ні | ✅ |
| a63 pick | [an] big | = | l6 info #3 | «What a lovely card» правильне | ✅ |
| a64 word | an | = | l6 info #3 | a → no | ✅ |
| a65 build | What a lovely dinner! | = | l6 info #3, l6 #5 | 325 станів → лише ключ; пастка лише «an» | ✅ |
| a66 gaps | Dear; Best wishes | = | l6 info #6 | Best wishes і Love не стоять в одному пропуску | ✅ |
| a67 word | Happy | = | l6 info #6 | Merry / A happy → no | ✅ |
| a68 gaps | Dear; Happy; a; Love | = | l6 info #6, #3 | ні | ✅ |

**Покриття** (`personalization-qa --pool pe5s8 --strict` і власний підрахунок): 20 пар (урок, sk), у кожній ≥ 3 вправи й рівні 1, 2, 3; `sk` кожної вправи є серед `sk` екранів її уроку. Boss l7 без вправ.

**Ключі `word`** (eighth, twelfth, on, thirty-first, Independence, Boxing, pillows, do, were, were, an, Happy) — без кінцевого `.!?` ✅.

**Спостереження без правки:** у `build` рушій приймає й неповний рядок, якщо він збігається з `answer`, але не приймає граматичне речення з невикористаною плиткою не-пасткою («My birthday is the third of March» без «on», «The fireworks were beautiful» без «very»). Така сама будова в l2 #8 уроку (verified). Друга відповідь з усіх плиток неможлива, тож це не ❌.

## 4. Лексика, BrE, герої, авторське право

- **Лексика й граматика** — лише з e5s8 і попередніх розділів (park, ball, wake up, games, flat, aunt and uncle, cousins — 4–5 кл.). Нових правил немає.
- **BrE:** Mum, Grandad, flat, bank holiday, St Nicholas (без крапки), «Love, …» / «Best wishes,». AmE-правопису, IPA, «Listen» / «You hear», літер A/B/C і позиційних посилань немає (grep) ✅.
- **Рівень пояснень:** `steps` — 1–3 короткі речення (≤ 12 слів), лексика уроку ✅.
- **Герої:** Taras — день народження 5 May (l2), сестра Zlata (a37, a64 без дати), братів пул не згадує (канон orchestrator FIX: two brothers + Zlata — суперечності немає). Ostap 22 July, Yaryna 3 March, її брат 12 August, бабуся Оксани 21 November, Emma — травень ✅. Emma: подарунки на Christmas Day, Boxing Day у бабусі, Tom і Mum на New Year’s Eve у Grandad (як l5 Final). Mariia — flat (Kharkiv), без брата. Dmytro не співає колядок (a48 «my friends and I») ✅. Нові дрібні деталі (writer-pe5s8 NOTE) нічому не суперечать.
- **Авторське право** — WebSearch з лапками, у цій сесії:

| Фрагмент | Запит | Результат |
|---|---|---|
| a49 | "On Christmas Day, we open our presents in the morning. At two o'clock, we have Christmas dinner" | збігів немає (форуми про звичаї) |
| a33 | "Today is 6 December. It's St Nicholas Day. Dmytro has got a new ball" | збігів немає |
| a32 | "Today is 5 November. It's Bonfire Night! I'm in the park with Mum, Dad and Tom" | збігів немає (статті British Council про свято, інший текст) |
| a36 | "On Christmas Eve, many Ukrainian families have a dinner with twelve dishes. After dinner, children sing carols" | збігів немає (речення з info l4 уроку) |
| a61 | "On New Year's Eve, Tom and I were at Grandad's house. Mum was there too" | збігів немає |
| a34 | "Today is a bank holiday. It's the day after Christmas Day. We're at Grandma's house" | збігів немає |

## 5. Правки

Зроблено:
1. **a05** `body`: «Write the numbers as words.» → «Which word is right for each number?» (`gaps` — вибір, не письмо; title «Choose the correct word.»).
2. Статус пулу `draft` → `verified`, `meta.factcheck` → verifier-pe5s8, коментар-шапка.

`node tools/validate.mjs --pool pe5s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s8 --strict` — без «БРАКУЄ».

Рекомендовано (не блокує): спірне п. 2 автора — у l1 phon три вправи на ті самі три слова (thirteenth, thirtieth, twentieth). Нових слів з `<u>` в уроці немає, тож розширити можна лише разом з уроком.

## 6. Спірні місця автора 1–4

1. a49 `choice` для read — дозволено (POOL_TYPES app/learn.js; orchestrator FIX). ✅
2. Повтор комбінацій `stress` — прийнятно, див. §5. ✅
3. a46 carols — опора є: l4 #7 «Do you sing carols at Christmas?», intro l4; словникове значення збігається (OALD, CD). ✅
4. a11 — три фрази в одному пропуску, як l2 #2; хибні однозначно хибні. ✅

## Вердикт по пулу

**pe5s8 → verified.** 68 вправ, 1 дрібна правка. Людина не потрібна: TQ немає.
