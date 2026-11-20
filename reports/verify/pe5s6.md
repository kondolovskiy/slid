# Верифікація: пул pe5s6 «Free time, hobbies and holidays» (англійська, 5 кл.)

Верифікатор: verifier-pe5s6 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s6.js` (65 вправ a01–a65) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s6.md. Опора — уроки content/eng/g5-e5s6.js (verified, reports/verify/e5s6.md) і раніші розділи eng.

**Вердикт: пул придатний, `verified`.** Неправильних ключів і другої правильної відповіді, яку рушій відхилив би, я не знайшов. Вправ без опори теж немає. Зробив 9 дрібних правок у 8 вправах: канон героїв (a10, a27, a49, a51), копія екрана уроку (a43), лексика (a48), інструкція, що відсікає to-інфінітив (a23, a30). Ключі не змінювались. Нових TQ немає.

## 1. Програма і `sources`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md і reports/verify/e5s6.md §1. Там PDF МП-ІМ відкрито й звірено: SHA-1 43925b25…, с. 19–22. Сторінки `src`: с. 20 — тема «Відпочинок і дозвілля» і функція «пропонувати, приймати, відхиляти пропозицію»; с. 19 — «вміє робити добре й не дуже»; с. 21 — Let’s і adverbs of manner; с. 22 — Shall і ‘ing’ forms as nouns. Відповідність вправам ✅. `srcPage` і `adapted` у пулі не стоять ✅.

## 2. Форми й норма (словники відкрито в цій сесії, curl)

| Твердження | Джерела | Вердикт |
|---|---|---|
| computer: наголос на 2-му складі (a06, a07, a62) | CD UK /kəmˈpjuː.tər/ — https://dictionary.cambridge.org/dictionary/english/computer; OALD BrE /kəmˈpjuːtə(r)/ — https://www.oxfordlearnersdictionaries.com/definition/english/computer | ✅ com\|+pu\|ter |
| guitar: наголос на 2-му (a05, a07, a61) | CD UK /ɡɪˈtɑːr/ — …/dictionary/english/guitar; OALD /ɡɪˈtɑː(r)/ — …/definition/english/guitar | ✅ |
| piano: наголос на 2-му (a05, a07) | CD UK /piˈæn.əʊ/ — …/piano; OALD /piˈænəʊ/ — …/piano_1 | ✅ pi\|+an\|o |
| cartoon: наголос на 2-му (a06, a07, a62) | CD UK /kɑːˈtuːn/ — …/cartoon; OALD /kɑːˈtuːn/ — …/cartoon | ✅ |
| hobby: наголос на 1-му (a61, a62) | CD UK /ˈhɒb.i/ — …/hobby; OALD /ˈhɒbi/ — …/hobby | ✅ |
| holiday: наголос на 1-му (a60–a62) | CD UK /ˈhɒl.ə.deɪ/ — …/holiday; OALD /ˈhɒlədeɪ/, варіант /ˈhɒlədi/ (наголос той самий) — …/holiday_1 | ✅ |
| camping: наголос на 1-му (a60, a62) | CD UK /ˈkæm.pɪŋ/ — …/camping; OALD /ˈkæmpɪŋ/ — …/camping | ✅ |
| weekend у `stress` не взято (BrE ˌwiːkˈend / AmE ˈwiːk.end) | PITFALL verifier-pe4s3 | ✅ у пулі немає |
| like / love / hate + -ing **і** + to-інфінітив | CD Grammar: «We can use hate, like, love and prefer with an -ing form or with a to-infinitive» — https://dictionary.cambridge.org/grammar/british-grammar/love; OALD love_2, hate_1 (reports/verify/e5s6.md) | ✅ «to run», «to ride», «to go» у ключах a15, a16, a55. To-інфінітив ніде не стоїть хибним варіантом |
| go + -ing для загальних занять; go + to-інфінітив — для дії з чітким початком і кінцем (a65) | CD Grammar «Go»: «We use go + -ing form when we speak about general activities that involve movement… If the activities have a clear beginning and end, then go + to-infinitive is used» — https://dictionary.cambridge.org/grammar/british-grammar/go | ✅ «I go ___ in the sea every day» — загальне заняття, тож ключ лише swimming правильний (спірне місце автора 1) |
| Ms Kravets’s (a33) | CD Grammar «Possession»: «Is that James’ car? (or Is that James’s car?)» — https://dictionary.cambridge.org/grammar/british-grammar/possession-john-s-car-a-friend-of-mine | ✅ не оцінюється (спірне 5) |
| «My hobby is + -ing» — стандартна модель; «hobby is to + verb» — нестандартна | WebSearch "my hobby is to" (BC LearnEnglish Teens, MosaLingua) | ⚠️→✅ рушій відхилив би «to take» і «to do». Тепер умова a23 і a30 просить -ing (правка 7), як l3 #9 уроку |

## 3. Розв'язання: моя відповідь → опора (D-019) → вердикт

Кожну вправу я розв'язав сам, а з ключем звіряв після цього. Що перевірено механічно (node, vm, app/lang.js; скрипт у scratchpad verify-pe5s6):
- `solution` → `check` = true для всіх gaps/word/pick/build/match/stress;
- `build`: перебрав усі впорядковані підмножини плиток разом з `extra`. Кількість перевірених рядків: a19, a24, a29, a45 — по 1 956; a34 — 986 409; a56 — 13 699; a64 — 325. Рушій приймає лише рядки з `answer`;
- `wordVerdict` на варіантах (нижче);
- матриця урок × sk (§4).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | watch; ride | = | l1 info (watch cartoons, ride a bike) | «watch my bike» безглузде | ✅ |
| a02 match | play–chess, read–a book, go for–a walk, ride–a bike, watch–TV | = | l1 info, l1 #5 | «watch chess» можливе, але тоді TV ні до чого не пасує: бієкція одна | ✅ |
| a03 word | play | = | l1 info; список у body | read / ride з переліку не підходять до chess | ✅ |
| a04 gaps | draw, play, go, play | = | l1 info | ні | ✅ |
| a05–a07 stress | gui**tar**, pi**an**o; com**pu**ter, car**toon** | = | l1 info `<u>`, l1 #7 | — | ✅ (§2) |
| a08 choice | She draws pictures and plays the guitar. | = | текст на екрані | ні | ✅ |
| a09 multi | 1, 3 | [0, 2] | текст на екрані | «with her mum», «ride… on rainy days» — хибні за текстом | ✅ |
| a10 choice | He plays tennis. | = | текст; l1 #9 (park = outside) | ні | ✅ після правки 1 |
| a11 match | ●●● love … ○○○ hate | = | l2 info | ні | ✅ |
| a12 gaps | loves, likes, doesn’t like, hates | = | шкала в body + l2 info | шкала задає одну відповідь (спірне 4) | ✅ |
| a13 gaps | love, don’t like, hate | = | контекст + l2 info | ні | ✅ |
| a14 gaps | swimming, riding | = | l2 info «Writing -ing» | ні | ✅ |
| a15 word | running | running, to run | l2 info | «runing» → Almost | ✅ |
| a16 word | riding | riding, to ride | l2 info | «rideing» → Almost | ✅ |
| a17 pick | [swiming], [rideing] | = | l2 info | getting правильне | ✅ |
| a18 gaps | do, don’t | = | l2 info (Yes, I do / No, I don’t) | ні | ✅ |
| a19 build | Dmytro doesn’t like swimming. | = | l2 info, l2 #8 | рушій приймає лише ключ | ✅ |
| a20 pick | [draw], [like] | = | l2 info (love + -ing; Yes, I do) | ні | ✅ |
| a21 gaps | Skating, Drawing | = | l3 info | ні. Дистрактор «Skate» — основа відомого skating (e4s3); дієслово skate з'явиться в l4, але відкидається за правилом | ✅ |
| a22 gaps | is, is, is | = | l3 info | ні | ✅ |
| a23 word | taking | = | l3 info (Taking photos is fun) | «to take» — нестандартне → «Write the -ing word» (правка 7) | ✅ |
| a24 build | My hobby is playing chess. / Playing chess is my hobby. | обидва | l3 info | обидва порядки в ключі | ✅ |
| a25 choice | swimming | = | текст | ні | ✅ |
| a26 gaps | drawing, cars | = | текст | ні | ✅ |
| a27 multi | 1, 3 | [0, 2] | текст | ні | ✅ після правки 2 |
| a28 gaps | is, taking | = | l3 info | ні | ✅ |
| a29 build | Drawing is my hobby. / My hobby is drawing. | обидва | l3 info | ні | ✅ |
| a30 word | doing | = | l3 info, l3 #10 (Doing karate) | «to do» — правка 7 | ✅ |
| a31 gaps | can, can’t | = | список у body, l4 info | ні | ✅ |
| a32 gaps | skate, swim | = | l4 info | ні | ✅ |
| a33 pick | [does] | = | l4 info | ні | ✅ |
| a34 build | I can play chess very well, but I can’t play the guitar. | = | l4 info «How well?» | Граматичні перестановки «I can’t play chess very well, but I can play the guitar» і «I can play the guitar very well, but I can’t play chess» суперечать умові. Рушій приймає лише ключ | ✅ |
| a35 gaps | very well, well, can’t | = | шкала в body, l4 info | ні (спірне 4) | ✅ |
| a36 gaps | can, can’t | = | l4 info | ні | ✅ |
| a37 word | can | = | l4 info | «do» хибне на Can you…? | ✅ |
| a38 match | No, I can’t / No, he can’t / Yes, I do / Yes, they can | = | l2, l4 info | бієкція одна (I/he/they, do/can) | ✅ |
| a39 choice | No, he can’t. | = | текст | ні | ✅ |
| a40 gaps | can’t, can | = | текст | ні | ✅ |
| a41 multi | 1, 3 | [0, 2] | текст («but not very well») | ні | ✅ |
| a42 gaps | go, watch | = | l5 info | ні | ✅ |
| a43 word | Let’s | = | l5 info | «Let us» → ok (`contractions`). «Shall we» — два слова, і стоїть «!» | ✅ після правки 3 |
| a44 pick | [going] | = | l5 info | ні | ✅ |
| a45 build | Shall we play chess? | = | l5 info | `keepCase` + «Shall» з великої: «we Shall play chess» не складеться | ✅ |
| a46 gaps | Let’s, Shall | = | l5 info | «Let’s we go» хибне | ✅ |
| a47 gaps | Good idea! | = | l5 info + «I love tennis» | ні | ✅ |
| a48 match | films–Great!, football–ball, swimming–can’t swim, ten–twelve | = | l5 info, l5 #7 | бієкція одна | ✅ після правки 4 |
| a49 gaps | can’t, tomorrow | = | l5 info | ні | ✅ після правки 5 |
| a50 gaps | Sorry, I can’t. / I’m busy. / Let’s | = | l5 info, l5 #8 | «No!» відсікає умова «politely» (спірне 2, як l5 #8) | ✅ |
| a51 gaps | winter, skating | = | l6 info, l6 #7 | camping відсікає сніг (спірне 3) | ✅ після правки 6 |
| a52 word | fishing | = | l6 info; перелік у body | ні | ✅ |
| a53 gaps | camping, winter, skating | = | l6 info, l6 #6 | ні | ✅ |
| a54 gaps | going, go | = | l6 info | ні | ✅ |
| a55 word | going | going, to go | l6 info | to go у ключі | ✅ |
| a56 build | What do you like doing in the holidays? | = | l6 info | рушій приймає лише ключ | ✅ |
| a57 choice | to Chernihiv | = | текст | ні | ✅ |
| a58 gaps | swimming, fishing | = | текст | ні | ✅ |
| a59 multi | 1, 3 | [0, 2] | текст (cousin Marta; «I love it») | ні | ✅ |
| a60–a62 stress | **hol**iday, **camp**ing; **hob**by, gui**tar**; com**pu**ter, car**toon** | = | l6 info `<u>`, l3 info (hobby), l1 info | — | ✅ |
| a63 gaps | love, swimming | = | l2 info | ні | ✅ |
| a64 build | I love going camping in summer. / In summer I love going camping. | обидва | l6 info | обставина на початку без коми — у ключі (PITFALL writer-pe4s3) | ✅ |
| a65 word | swimming | = | l6 info (go + -ing) | «to swim» відкидає CD Grammar «Go» (§2): загальне заняття «every day» | ✅ |

**Варіанти `word` через `wordVerdict`.** Зараховано: a03 «Play», «play.»; a15 «to run»; a16 «to ride»; a37 «Can», «can.»; a43 «let's», «Let us»; a55 «to go». Не зараховано, з підказкою «Almost»: a15 «runing», a16 «rideing», a23 «takeing», a43 «lets», a65 «swiming». a65 «to swim» → неправильно (див. вище). Ключі `word` без кінцевого `.!?` ✅.

**`build`, пастки `extra`:** likes/swim, play/are, are/draw, plays, to/plays, likes, go. Жодна не відрізняється від слова ключа лише регістром чи AmE-правописом ✅. Плиток ≤ 9 ✅.

**`choice`/`multi`** — лише `sk: read`, на коротких текстах ✅. Літер A/B/C і позиційних посилань немає. «Listen», IPA й `uk` теж немає. AmE немає: grep за color, favorite, vacation, soccer, movie, mom, apartment, on the weekend, -ize дав 0 збігів.

**Лексика.** Перевірив скриптом: кожне слово вправи разом зі `steps` шукав у розділах e4s1–e4s8, e5s1–e5s5 і в уроках e5s6 до уроку вправи включно. Не знайдено три слова: «skate» (дистрактор a21, див. таблицю), «watching» (дистрактор a42, форма відомого watch) і «eleven» (a48, замінено на twelve з l5 intro, правка 4).

## 4. Покриття урок × sk (звірено вручну: personalization-qa --pool матрицю не перевіряє)

| Урок | sk: кількість (рівні) |
|---|---|
| l1 | vocab 4 (1–3), phon 3 (1–3), read 3 (1–3) |
| l2 | vocab 3 (1–3), write 4 (1–3), gram 3 (1–3) |
| l3 | gram 4 (1–3), read 3 (1–3), write 3 (1–3) |
| l4 | gram 5 (1–3), func 3 (1–3), read 3 (1–3) |
| l5 | gram 5 (1–3), func 4 (1–3) |
| l6 | vocab 3 (1–3), gram 3 (1–3), read 3 (1–3), phon 3 (1–3), write 3 (1–3) |

Кожен `sk` оцінюваних екранів уроку покрито: ≥ 3 вправи, рівні 1–3. l6 vocab у самому уроці є лише на екрані-здогадці `hyp`, але лексика канікул (holidays, go camping / fishing / skating) вводиться на l6 info, тож пара доречна. Boss l7 вправ не має ✅.

## 5. Герої (канон: inbox NOTE, e4s3, pool-g4-e4s3, dge4, e6s4)
- **a10 ❌→✅:** «I meet my friend Bohdan. We play football in the park». Але Bohdan не любить футбол (pool-g4-e4s3 a38: «My friend Andrii likes football, but I don’t like it»; e6s4: «I prefer tennis to football»), а по суботах грає в теніс (e4s3, dge4). Виправив на tennis.
- **a27 ⚠️→✅:** Oksana — karate «every Tuesday» (e4s3l3: «Oksana does karate every Tuesday»; pool-g4-e4s3 a21: «I do karate on Tuesdays»), а в пулі було «Mondays and Fridays». Тепер «Tuesdays and Fridays».
- **a49 ⚠️→✅:** Emma пропонувала «go skating», хоча вона не вміє кататися (l4) і в a18 сама каже «No, I don’t». Тепер «go for a walk».
- **a51 ⚠️→✅:** Mariia «We go skating on the river», а в a41 цього ж пулу «I can’t skate». Тепер вправу пише Taras: він узимку катається з Marta на річці (a59).
- **Tom** не плаває: a38 «No, he can’t», a58 «Tom can’t swim» ✅. Andrii не катається (a31): так само в e5s6l4 немає, а в e4s3 його катання не згадано ✅.
- **Для style-sync (не блокує, рядки в inbox):** (1) e4s3 «Mariia goes skating at the weekend», але e5s6l4 #4 «Mariia: skate – no» і e5s6l6 #7 «I like skating» — суперечність усередині уроків; (2) e5s6l5 hyp «Andrii: Let’s play football! Bohdan wants to play» суперечить канону Bohdan; (3) нові деталі пулу: Oksana грає на піаніно (a04), Taras любить читати (a12).

## 6. Авторське право (WebSearch дослівно, у лапках)
| Фрагмент (≥ 12 слів) | Запит | Результат |
|---|---|---|
| a09 | "In my free time, I go for a walk with my dog. I ride my bike with my brother" | збігів немає |
| a26 | "My hobby is drawing. I draw every day after school. I draw cats, trees" | збігів немає (зразки есе «My hobby» з іншим текстом) |
| a40 | "I can play tennis very well. I can ride a bike, but I can't skate" | збігів немає |
| a59 | "In the winter holidays, I go to my grandma's village. There's a lot of snow there" | збігів немає |
| a41 | "I can draw very well. I can play the guitar, but not very well" | збігів немає |
| a27 | "My hobby is karate. I do karate on" "My brother" "hobby is playing computer games" | збігів немає |
| a58 | "In the summer holidays, we go to the seaside. I go swimming every day" | збігів немає |
| a10 | "On Saturdays, I meet my friend" "We play" "in the park. In the evening, I play chess with my grandad" | збігів немає |
| a04 | "On rainy days, I'm at home. I draw pictures and I play the piano" | збігів немає |
| a57 | "In the summer holidays, I go to my grandma and grandad in" "I go fishing with Grandad" | збігів немає |
| a13 | "I play football every day. I love it! Swimming is boring. I don't like it" | збігів немає |

11 запитів, дослівних збігів немає. Копія екрана уроку: a43 майже дослівно повторював l5 #9. Збігалися body, рамка й ім'я, тож це порушення PITFALL verifier-pe4s1. Я змінив контекст (правка 3). a48 і a13 близькі до l5 #7 і l2 #10 за будовою, але пари й зміст інші. Залишив без змін.

## 7. Правки (зроблені мною в content/eng/pool-g5-e5s6.js)
1. a10: «We play football» → «We play tennis». Варіант «He plays football.» → «He plays tennis.», steps — так само (канон Bohdan).
2. a27: «on Mondays and Fridays» → «on Tuesdays and Fridays» у тексті й steps (канон Oksana).
3. a43: контекст «Emma, sunny, go to the park» (копія l5 #9) → «Andrii wants to play chess with Grandad. Andrii: “___ play chess, Grandad!” Grandad: “Good idea!”». Steps змінено так само, ключ без змін.
4. a48: «Let’s meet at eleven» → «twelve» (eleven в уроках раніше не з'являлося), у hint і steps теж.
5. a49: «Shall we go skating today?» → «Shall we go for a walk today?» (Emma не катається).
6. a51: «Mariia writes» → «Taras writes» (Mariia в a41 «can’t skate»).
7. a23, a30: у body додано «Write the -ing word.». Так рушій не відхиляє нестандартне, але можливе «His hobby is to take photos» без підстави, а вправа лишається на правопис -ing (як l3 #9).
8. `status: "verified"`, `meta.factcheck`, рядок статусу в шапці.

`node tools/validate.mjs --pool pe5s6` — 0 помилок, 0 попереджень. `personalization-qa --pool pe5s6` після правок — без зауважень, крім «ще не verified» (до зміни статусу). `euphony --pool pe5s6` — чисто. Build і test-answer-ui не запускав (паралельний запуск; браузерні прогони — у CI / в оркестратора).

## 8. Вердикт
Пул pe5s6 — **verified**. Відкритих ❌ і ⚠️ немає. Рекомендації для style-sync — у §5.
