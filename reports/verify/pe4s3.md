# Верифікація: пул pe4s3 (англійська, 4 кл., розділ e4s3 «Free time: sport and heroes»)

Верифікатор: verifier-pe4s3 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s3.js` (64 вправи a01–a64) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в), CONTENT_SCHEMA §10. Задача: tasks/review/write-eng-pool-g4-e4s3.md. Зміст звіряв з уроками content/eng/g4-e4s3.js (verified, reports/verify/e4s3.md) і раніших розділів (e4s1, e4s2).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, завдань без опори й збігів з опублікованими текстами я не знайшов. Блокувальна знахідка була одна: слово *weekend* у `stress` і phon-`pick` (a25, a26, a27, a51) має два наголоси, і BrE та AmE розходяться. Я її виправив. Ще 6 дрібних правок описано в §5. TQ не додавав.

## 1. Джерело (програма), відкрите в цій сесії

ТОП 3–4: https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf. Завантажив заново (SHA-1 aa8d161a330bbede5b21484f47be92d12548f785) і прогнав через `pdftotext`.

| `src` | Що на сторінці | Вердикт |
|---|---|---|
| top34 с. 63 (a01–a54) | «Відпочинок і … спорт, улюблені дитячі герої»; «adverbs and adverbials of frequency and movement»; «basic connectors 'but/and/or'» | ✅ |
| top34 с. 54 (a55–a64) | «онлайн дописи, що складаються з низки дуже коротких речень про хобі, уподобання» | ✅ |

`sources`: `id: "top34"`, `program: true`, title і url — як у facts/eng.md. ✅

## 2. Норми й форми: словники, відкриті в цій сесії (curl)

### Наголос (`stress`, phon-`pick`): потрібен один наголос в обох словниках
| Слово | CD UK / US | OALD BrE / NAmE | Вердикт |
|---|---|---|---|
| tennis | ˈten.ɪs / ˈten.ɪs | /ˈtenɪs/ / /ˈtenɪs/ | ✅ |
| basketball | ˈbɑː.skɪt.bɔːl / ˈbæs.kət.bɑːl | /ˈbɑːskɪtbɔːl/ / /ˈbæskɪtbɔːl/ | ✅ |
| gymnastics | dʒɪmˈnæs.tɪks | /dʒɪmˈnæstɪks/ | ✅ |
| karate | kəˈrɑː.ti / kəˈrɑː.t̬i | /kəˈrɑːti/ | ✅ |
| always | ˈɔːl.weɪz / ˈɑːl.weɪz | /ˈɔːlweɪz/ | ✅ |
| usually | ˈjuː.ʒu.ə.li | /ˈjuːʒuəli/ / /ˈjuːʒəli/ | ✅ (1-й склад; поділ на 4 склади — як у CD) |
| sometimes | ˈsʌm.taɪmz | /ˈsʌmtaɪmz/ | ✅ |
| never | ˈnev.ər / ˈnev.ɚ | /ˈnevə(r)/ | ✅ |
| Monday | ˈmʌn.deɪ | /ˈmʌndeɪ/, /ˈmʌndi/ | ✅ |
| Saturday | ˈsæt.ə.deɪ / ˈsæt̬.ɚ.deɪ | /ˈsætədeɪ/, /ˈsætədi/ | ✅ |
| **weekend** | **UK ˌwiːkˈend / US ˈwiːk.end** | **/ˌwiːkˈend/ / /ˈwiːkend/** | ❌ для пулу: два наголоси, у BrE і AmE головний на різних складах. Дитина з AmE-вимовою дістане «неправильно», а це суперечить D-055 (доп. п. 1). Те саме вже зафіксовано в inbox, writer-pe4s8 NOTE (stress eng). → вилучив з a25, a26, a27, a51 |
| favourite | ˈfeɪ.vər.ɪt | /ˈfeɪvərɪt/ (favourite_1) | ✅ |
| hero | ˈhɪə.rəʊ / ˈhɪr.oʊ | /ˈhɪərəʊ/ | ✅ |
| clever | ˈklev.ər | /ˈklevə(r)/ | ✅ |
| funny | ˈfʌn.i | /ˈfʌni/ (funny_1) | ✅ |

URL: https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word> (favourite_1, funny_1).

### Ключі `word` і правила
| Що | Джерело (відкрито) | Вердикт |
|---|---|---|
| a03 + biking | CD biking: «to go somewhere by bicycle» — https://dictionary.cambridge.org/dictionary/english/biking | ✅ |
| a04 + ice skating, ice-skating | CD ice skating: «the sport or activity of moving on ice…» — https://dictionary.cambridge.org/dictionary/english/ice-skating | ✅ |
| a45 + powerful, mighty | CD powerful: «having a lot of strength or force»; CD mighty: «very large, powerful…» — https://dictionary.cambridge.org/dictionary/english/powerful, …/mighty | ✅ |
| a13: «always am» хибне | CD Grammar always: «We most commonly use always in mid position … or after main verb be» — https://dictionary.cambridge.org/grammar/british-grammar/always | ✅ (спірне 2 автора приймаю: нейтральна позиція після be, емфатичну урок не вчить) |
| play / go / do, at the weekend, but / yet / though / although | reports/verify/e4s3.md §2 (OALD go_1, skating, karate, judo, gymnastics; CD weekend). Повторно не відкривав, це висновки verified-розділу | ✅ |

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна відповідь

Кожну вправу я розв'язав сам і лише потім звірив із ключем. Через app/lang.js у node (vm): `check(solution)` пройшов для всіх 64 вправ. Для кожного `build` перебрав **усі впорядковані підмножини всіх плиток з `extra`** (до 9 плиток). Рушій приймає рівно такі рядки:
a14 «Tom never goes swimming»; a15 «Oksana is always happy»; a24 «Emma plays tennis on Fridays», «On Fridays Emma plays tennis»; a39 обидва порядки іменників; a40 «I like cycling, but I don’t like swimming»; a41 обидва порядки; a53, a54, a59, a63 — лише ключ; a60 — 4 порядки (з обставиною на початку теж).
Граматичних порядків, які рушій відкидає, я не знайшов. Відкинуті «is Oksana always happy», «Kotyhoroshko is my favourite hero», «Cycling is my hobby» відсікає `keepCase` разом з умовою («Write about her», «Start with My»).
`wordVerdict`: «Cycling.» (a03) → ok, «weekend.» (a30) → ok, «yet» (a33) → ok, «often» (a12) → ні, «also» (a57) → ні. Кінцевого `.!?` у жодному ключі `word` немає.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 gaps | play, go, do | l1 info #3 | ні | ✅ |
| a02 match | plays–football, goes–swimming, does–karate | l1 info #3 | «does swimming» у парі неможливе: plays має взяти football, а «goes karate» хибне | ✅ |
| a03 word | cycling | l1 info, l1 #5 | biking, bike riding — у ключі | ✅ |
| a04 word | skating | l1 Final («In winter, we go skating») | ice skating — у ключі; *ice* — нове слово, але відповідь виводиться з winter + -ing і підказки | ✅ |
| a05 gaps | play, go, do | l1 info | **було:** «In winter, **we** ___ skating» від учительки про клуб. Це контекст шкільного чи клубного заняття, де «do skating» природне (пересторога reports/verify/e4s3.md) → підмет замінив на Oksana and Dmytro (канон: skating at the weekend) | ✅ після правки |
| a06 pick | [go] football, [do] skating | l1 info, l1 #8 | решта тексту правильна | ✅ |
| a07 gaps | play, go, do | l1 info | ні | ✅ |
| a08–a10 stress/pick | див. §2 | l1 info `<u>` | — | ✅ |
| a11 gaps | always, never | l2 info #3 (крапки) | ні | ✅ |
| a12 word | sometimes | l2 info #3 (●●○○○) | often = ●●●○○ → ні | ✅ |
| a13 gaps | always play, am always, never go | l2 info #6 | always am — див. §2 | ✅ |
| a14 build | Tom never goes swimming | l2 info #6, l3 info #5 | ні (перебір) | ✅ |
| a15 build | Oksana is always happy | l2 info #6 | питання відсічене (`keepCase`, «Write about her») | ✅ |
| a16 pick | [play usually] | l2 info #6 | «am always happy» позначено як правильне | ✅ |
| a17–a19 stress | 1-й склад; karate, gymnastics — 2-й | l2 info, l1 info | — | ✅ |
| a20 gaps | on, after, at | l3 info #3 | «on the weekend» (AmE) серед варіантів немає | ✅ |
| a21 word | does | l3 info #5 | likes/loves відсічено: «Change do» → «Write do or does» (*change* у розділі не було, правка) | ✅ |
| a22 gaps | plays, goes, go, does | l3 info #5 | ні | ✅ |
| a23 pick | [at] Mondays, Polina [go] | l3 info | ні | ✅ |
| a24 build | обидва порядки в ключі | l3 info | ні | ✅ |
| a25–a27 | Monday, Saturday (+ karate, gymnastics, always) | l3 info, l1, l2 | weekend вилучено (§2) | ✅ після правки |
| a28 gaps | Tuesdays, at the weekend | текст на екрані | ні | ✅ |
| a29 pick | Tuesday, Wednesday | текст на екрані + міркування | ні | ✅ |
| a30 word | weekend | текст | weekends — у ключі | ✅ |
| a31 gaps | and, but, or | l4 info #3 | ні | ✅ |
| a32 word | and | l4 info | ні | ✅ |
| a33 word | but | l4 info | yet/though/although — у ключі | ✅ |
| a34 gaps | or, and, but | l4 info | ні | ✅ |
| a35 pick | [but]→and, [or]→but | l4 info | ні | ✅ |
| a36 pick | basketball, football, tennis | текст | ні | ✅ |
| a37 gaps | likes, doesn’t like | текст | ні | ✅ |
| a38 word | football | текст («but I don’t like it») | ні | ✅ |
| a39–a41 build | ключі | l4 info | перебір — усі граматичні порядки в ключі | ✅ |
| a42 match | strong–lift, brave–not afraid, clever–knows, kind–helps, funny–laugh | l5 info #3 (ці ж визначення) | «A brave hero helps people» правдоподібне, але тоді лишається «A kind hero is not afraid», а це вже не означення: альтернативного повного зіставлення немає (спірне 3 автора приймаю). `hint` «pairs in red» вводив в оману (червоного на екрані немає) → виправив | ✅ |
| a43 word | funny | l5 info; перелік у `body` | ні | ✅ |
| a44 gaps | clever, funny, strong | l5 info | ні | ✅ |
| a45 word | strong | l5 info, l5 intro | powerful, mighty — у ключі | ✅ |
| a46 gaps | cat, funny | текст | ні | ✅ |
| a47 pick | brave, kind | текст | «describe Robin Hood»: clever теж можна віднести до Робін Гуда → title «Find the words that Bohdan uses about Robin Hood.» | ✅ після правки |
| a48 gaps | girl, not very strong, brave | текст | ні; *animals* і *last* поза розділом → «about books», hint без *last* | ✅ |
| a49–a51 | 1-й склад | l5 info | weekend вилучено з a51 | ✅ після правки |
| a52 gaps | favourite, is | l5 info | ні | ✅ |
| a53, a54 build | ключі | l5 info | перебір; `keepCase` + «Start with My» | ✅ |
| a55 gaps | football, on Mondays and Thursdays | текст | ні | ✅ |
| a56 pick | gymnastics, swimming | текст | ні | ✅ |
| a57 word | sometimes | текст | also — не відповідь на «How often?» (спірне 4 автора приймаю) | ✅ |
| a58 gaps | is, do, is | l6 info, l1 | ні | ✅ |
| a59, a60 build | ключі | l6 info, l3 | перебір | ✅ |
| a61 word | hobby | l6 info #5 | ні | ✅ |
| a62 match | 4 пари | l6 | «What is your hobby? – I like karate» можливе, але тоді «Do you like judo or karate? – My hobby is skating» — ні | ✅ |
| a63 build | How often do you play it | l6 #8 | ні | ✅ |
| a64 gaps | is, often | l6 | ні | ✅ |

**Покриття урок × `sk`** (мій підрахунок; рівні в дужках): l1 vocab 3 (112), gram 4 (1223), phon 3 (123); l2 gram 6, phon 3; l3 gram 5, phon 3, read 3; l4 gram 5, read 3, write 3; l5 vocab 4, read 3, phon 3, write 3; l6 read 3, write 3, func 4. Кожна пара має ≥ 3 вправи, у кожному уроці є рівні 1–3, `sk` — лише з екранів свого уроку. `personalization-qa --pool pe4s3 --strict` до зміни статусу показував лише «ще не verified».

**Лексика:** слова пулу я порівняв зі словами уроків e4s1–e4s3. Поза уроками були: *students*, *change*, *animals*, *last*, *pairs*, *slowly* (виправлено) і *ice* (a04; лишив, див. вище). Слова лише в ключах (biking, mighty, powerful, weekends) — це прийняті синоніми, вони дозволені. Назви днів в однині (a29) виводяться з форм множини в уроці.

**BrE, формат:** AmE не знайшов. Літер A/B/C, позиційних посилань, «Listen», IPA і `uk` немає. Пастки `extra` не відрізняються від слів ключа лише регістром.

**Герої (inbox NOTE герої, канон 4–6 кл.):** Tom катається й не плаває; Emma плаває й грає в теніс (on Fridays — як у l4); Mariia — swimming Mon/Wed/Fri, cycling з татом; Dmytro не плаває; Yurii — без велосипеда; Oksana — karate, без judo; Taras — basketball, без swimming; Sofiia — Kyiv; Ostap — друг Taras, football; Polina — подруга Mariia; Kateryna — Mariia’s friend. Суперечностей немає. Дрібниці для style-sync (не помилки): Super Kit у a46 «very funny», а в уроці він «brave, kind»; герой Yurii в a44 «can lift a car», а в l5 він «helps old people».

## 4. Авторське право (WebSearch, лапки)
| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| a55 «My hobby is football. I play it on Mondays and Thursdays» | збігів немає (British Council «My favourite sport» — інший текст) |
| a56 «My hobby is gymnastics. I do it on Saturdays. I like gymnastics and swimming» | збігів немає |
| a48 «She knows a lot about animals. She is not very strong, but she is very brave» | збігів немає |
| a28 «I go swimming with Mariia on Mondays, Wednesdays and Fridays. On Tuesdays I do gymnastics» | збігів немає |
| a38 «I like tennis and cycling. My friend Andrii likes football, but I don't like it» | збігів немає |
| a46 «My favourite hero is Super Kit. He is a cat from my pictures» | збігів немає |
| a06 «My friends and I do skating in winter. We go swimming and do judo too» | збігів немає |
| a29 «I play tennis on Mondays and Thursdays. I go cycling on Fridays» | збігів немає (лише розклади спортклубів) |

## 5. Правки (зроблені мною в content/eng/pool-g4-e4s3.js; id не змінено)
1. **a25, a26, a27, a51 — вилучено weekend** (два наголоси, BrE ≠ AmE). a25 → Monday, Saturday; a26 → Saturday, usually, karate; a27 → Monday, karate, Saturday, gymnastics, always; a51 — без weekend. Оновлено `steps` і `hint`.
2. a05 — «My students … In winter, we ___ skating» → «Taras and his friends … In winter, Oksana and Dmytro ___ skating». Так прибрано контекст, де «do skating» природне, і нове слово *students*. `body` → «about the children».
3. a21 — «Change do.» → «Write do or does.»
4. a42 `hint` — «the pairs in red» → «the hero words».
5. a47 `title` → «Find the words that Bohdan uses about Robin Hood.»
6. a48 — *animals* → *books*; `hint` без *last*. a27, a51 `hint` без *slowly*.
7. `status: "verified"`, `meta.factcheck`.

`node tools/validate.mjs --pool pe4s3` — 0 помилок, 0 попереджень після правок. Повторний перебір `build` і `check(solution)` дав 0 збоїв. Build і плейтест не запускав (паралельна робота, build робить оркестратор).

## 6. Спірні місця автора 1–4
1. read покрито через gaps/pick/word без choice — ✅ прийнятно: питання до тексту на тому самому екрані.
2. a13 «always am» хибне — ✅ (CD Grammar: після be).
3. a42 пари за означеннями уроку — ✅ (див. §3).
4. a57 «also» — ✅ відсічено питанням «How often?».

## 7. Вердикт
**pe4s3 — verified.** Питань до людини немає. Для style-sync — дрібниці про героїв (§3) і канон дрібних фактів з NOTE writer-pe4s3.
