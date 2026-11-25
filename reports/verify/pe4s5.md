# Верифікація: пул pe4s5 (англійська, 4 кл., розділ e4s5 «Health and hygiene»)

Верифікатор: verifier-pe4s5 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s5.js` (коміт fa33e60) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Опора — лише уроки `content/eng/g4-e4s5.js` (verified) і e4s1–e4s4; reports/verify/e4s5.md.

**Вердикт: пул придатний, `verified`.** У 46 вправах автора неправильних ключів і завдань без опори немає. Зробив 8 дрібних правок (§5). Автор не покрив пари урок × `sk`: l2 phon/read/func, l3 phon/read, l4 phon, l6 read. Я додав 21 вправу a47–a67 (§4). Тепер кожна пара урок × `sk` з оцінюваних екранів має ≥ 3 вправи рівнів 1–3. Питань до вчителя немає, TQ не додавав.

## 1. Програма (джерело `src`)

| Що | Джерело (відкрито в сесії) | Вердикт |
|---|---|---|
| «Людина — гігієна, стан здоров’я»; «розуміти та виконувати … вказівки/інструкції/команди»; «‘because’ for causes and reasons» — с. 63 | ТОП 3–4, https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf — завантажено curl, SHA-1 aa8d161a330bbede5b21484f47be92d12548f785 (= facts/eng.md), `pdftotext -f 63 -l 63` | ✅ `top34 с. 63` |
| «irregular nouns – plural» — с. 62 | там само, `pdftotext -f 62 -l 62` | ✅ a14–a17 `top34 с. 62` |

## 2. Форми й наголос (словники відкрито curl у цій сесії)

Наголос для нових `stress` (a47–a49, a56–a58, a62–a64). Беру лише слова, підкреслені `<u>` в уроках e4s5: l1 tooth-, l2 healthy, computer, children, l3 happy, hungry, thirsty, l4 headache, toothache, stomach. temperature не брав, бо поділ на склади неоднозначний (CD /ˈtem.prə.tʃər/, а на письмі tem-per-a-ture).

| Слово | CD UK — https://dictionary.cambridge.org/dictionary/english/&lt;word&gt; | OALD BrE — https://www.oxfordlearnersdictionaries.com/definition/english/&lt;word&gt; | Розмітка | Вердикт |
|---|---|---|---|---|
| toothbrush | /ˈtuːθ.brʌʃ/ | /ˈtuːθbrʌʃ/ | `+tooth\|brush` | ✅ один наголос |
| toothpaste | /ˈtuːθ.peɪst/ | /ˈtuːθpeɪst/ | `+tooth\|paste` | ✅ |
| healthy | /ˈhel.θi/ | /ˈhelθi/ | `+health\|y` (як в уроці l2) | ✅ |
| computer | /kəmˈpjuː.tər/ | /kəmˈpjuːtə(r)/ | `com\|+pu\|ter` | ✅ |
| children | /ˈtʃɪl.drən/ | /ˈtʃɪldrən/ (стаття child) | `+chil\|dren` | ✅ |
| happy | /ˈhæp.i/ | /ˈhæpi/ | `+hap\|py` | ✅ |
| hungry | /ˈhʌŋ.ɡri/ | /ˈhʌŋɡri/ | `+hun\|gry` | ✅ |
| thirsty | /ˈθɜː.sti/ | /ˈθɜːsti/ | `+thirs\|ty` | ✅ |
| headache | /ˈhed.eɪk/ | /ˈhedeɪk/ | `+head\|ache` | ✅ (ˌ є лише в американському блоці CD /ˈhedˌeɪk/; основний наголос той самий) |
| toothache | /ˈtuːθ.eɪk/ | /ˈtuːθeɪk/ | `+tooth\|ache` | ✅ |
| stomach | /ˈstʌm.ək/ | /ˈstʌmək/ | `+stom\|ach` | ✅ |

Форми з ключів автора (toothache / a toothache, ill / sick / unwell, clean your teeth, What’s the matter) звірено в reports/verify/e4s5.md §2 і в нотатках автора: OALD toothache, CD sick, CD unwell, CD clean. У цій сесії повторно відкрив:
- OALD ill_1 — «(especially British English) ( North American English usually sick ) … having an illness or disease», https://www.oxfordlearnersdictionaries.com/definition/english/ill_1;
- OALD sick_1 — «(British English) Britain's workers went sick (= did not go to work because they were ill)», https://www.oxfordlearnersdictionaries.com/definition/english/sick_1;
- CD unwell — «B1 not well; ill», https://dictionary.cambridge.org/dictionary/english/unwell.

Головний ключ — ill. sick (BrE теж уживає) і unwell — правильні відповіді, тож у ключі `word` a20 лишаються.

## 3. Завдання: моє розв'язання → опора (D-019) → вердикт

Кожну вправу я спершу розв'язав сам, а потім звірив із ключем. Перебір зробив через `app/lang.js` у node vm (скрипт у scratchpad):
- для кожного `build` — **усі підмножини й перестановки** tiles + extra (`check(…, "en")`);
- для кожного ключа `word` — `wordVerdict` малою літерою, з великої з крапкою і зі «!».

`choice` рушій у `SLID_LANG.check` не обробляє, тож ці вправи перевірив вручну.

| id | урок · sk · lvl | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|---|
| a01 | l1 vocab 1 | soap, towel | = | l1 info #3 | ні | ✅ |
| a02 | l1 vocab 1 match | teeth–toothpaste, hair–comb, hands dry–towel, wash–soap | = | l1 info #3 | перебрав усі праві: інших доречних пар немає | ✅ |
| a03 | l1 vocab 2 word | dirty | = | l1 info #3 (clean ↔ dirty) | ні | ✅ |
| a04 | l1 gram 1 | Brush, Don’t | = | l1 info #5 | ні | ✅ |
| a05 | l1 gram 2 pick | [washes] | = | l1 info #5 | ні | ✅ (правка 2) |
| a06 | l1 gram 3 build | Don’t dry your hands with a dirty towel | = | l1 info #5 | **до правки** ключ приймав «With a dirty towel don’t dry your hands» | ⚠️ → ✅ правка 1 |
| a07 | l1 func 1 | wash | = | l1 #6 | ні | ✅ |
| a08 | l1 func 3 word | brush | brush, clean | l1 info #3 | clean є в ключі (CD clean) | ✅ |
| a09 | l1 func 2 build | Wash your hands before lunch | + «Before lunch wash your hands» | l1 info #5, poster | обставину часу на початку прийнято (як PITFALL writer-pe4s3, e4s2) | ✅ лишаю |
| a10 | l2 vocab 1 | water, vegetables | = | l2 info #3 | ні | ✅ |
| a11 | l2 vocab 1 match | vegetables, water, all day, early | = | l2 info #3 | «Go to bed all day», «Don’t play … early» — безглузді | ✅ |
| a12 | l2 vocab 2 word | healthy | = | l2 info #3 | ні | ✅ |
| a13 | l2 vocab 3 word | late | = | l2 info #3 | ні | ✅ |
| a14 | l2 gram 1 | children | = | l2 info #6 | ні | ✅ (правка 3) |
| a15 | l2 gram 2 pick | [foots] | = | l2 info #6 | ні | ✅ |
| a16 | l2 gram 2 word | feet | = | l2 info #6 | ні | ✅ |
| a17 | l2 gram 3 | children, feet, teeth | = | l2 info #6 | ні | ✅ (правка 4) |
| a18 | l3 vocab 1 | thirsty, hungry | = | l3 info #3 | ні | ✅ |
| a19 | l3 vocab 2 match | tired, hungry, thirsty, sad | = | l3 info #3; he/she | інших пар немає | ✅ |
| a20 | l3 vocab 3 word | ill | ill, sick, unwell | l3 info #3 («ill – I’m not well») | sick, unwell в ключі | ✅ |
| a21 | l3 gram 1 | feel, feels | = | l3 info #7 | ні | ✅ |
| a22 | l3 gram 2 pick | [feel] | = | l3 info #7 | ні | ✅ |
| a23 | l3 gram 2 build | How does Emma feel? | = | l3 info #7 | перебір: лише цей порядок | ✅ |
| a24 | l3 gram 3 | does, feels | = | l3 info #7 | ні | ✅ |
| a25 | l4 vocab 1 match | headache, toothache, sore throat, stomach ache | = | l4 info #3 | ні | ✅ |
| a26 | l4 vocab 2 | stomach ache, temperature | = | l4 info #3 | ні | ✅ |
| a27 | l4 vocab 3 word | toothache | toothache, a toothache | l4 info #3, hyp | обидва BrE (OALD) — в ключі | ✅ |
| a28 | l4 gram 1 | have, has | = | l4 info #5 | ні | ✅ |
| a29 | l4 gram 2 pick | [have] | = | l4 info #5 | ні | ✅ |
| a30 | l4 gram 3 | Has, hasn’t | = | l4 info #5 | ні | ✅ |
| a31 | l4 func 1 match | throat hurts, No I haven’t, at home | = | l4 intro, info #5 | ні | ✅ |
| a32 | l4 func 2 build | Have you got a sore throat? | = | l4 info #5 | keepCase + «Have»: розповідний порядок відсічено | ✅ |
| a33 | l4 func 3 word | matter | matter, problem | l4 info #3 | problem у ключі | ✅ (правка 5) |
| a34 | l5 func 1 match | down, mouth, bed…, water | = | l5 info #3 | ні | ✅ |
| a35 | l5 func 2 | sore throat, mouth | = | l5 info #3, #4 | headache відсікає «see your throat» | ✅ |
| a36 | l5 func 3 word | home | = | l5 #8, info #3 | school відсікає «Don’t go to school» | ✅ |
| a37 | l5 gram 1 | Drink, stay | = | l5 info #3 | ні | ✅ (правка 6) |
| a38 | l5 gram 2 build | Drink lots of water. | = | l5 info #3 | лише цей порядок | ✅ |
| a39 | l5 gram 3 pick | [Opens], [Stays] | = | l5 info #3 | ні | ✅ |
| a40 | l6 gram 1 | Why, Because | = | l6 info #3 | ні | ✅ |
| a41 | l6 gram 1 word | because | = | l6 info #3 | ні | ✅ |
| a42 | l6 gram 2 build | Because I have got a temperature. | = | l6 info #3; l4 info #5, l4 Final «I have got» | лише цей порядок | ✅ |
| a43 | l6 gram 3 pick | [Because] | = | l6 info #3 | ні | ✅ |
| a44 | l6 func 1 match | cold, birthday, football outside | = | l6 #8, l3 intro; he/her/I | ні | ✅ (правка 7) |
| a45 | l6 func 2 | thirsty, clean | = | l3 info #3; l1 | ні | ✅ |
| a46 | l6 func 3 word | sleep | sleep, rest | l2 intro («Children need lots of sleep») | rest у ключі | ✅ |
| a47 | l2 phon 1 stress | **health**y, **chil**dren | = | l2 info #3, #6 `<u>` | — | ✅ нова |
| a48 | l2 phon 2 | com**pu**ter, **tooth**brush, **chil**dren | = | l2 info #3, #6; l1 info #3 | — | ✅ нова |
| a49 | l2 phon 3 | **tooth**paste, com**pu**ter, **health**y, **chil**dren | = | там само | — | ✅ нова |
| a50 | l2 read 1 choice | fruit | = | текст на екрані | sweets, vegetables у тексті немає | ✅ нова |
| a51 | l2 read 2 gaps | eight, vegetables | = | текст на екрані | ні | ✅ нова |
| a52 | l2 read 3 choice | Go to bed early. | = | текст + l2 info #3 | «Eat lots of sweets», «Go to bed late» — нездорові | ✅ нова |
| a53 | l2 func 1 choice | Drink water, Mariia. | = | l2 info #3, #5 | ні | ✅ нова |
| a54 | l2 func 2 word | don’t | don’t, do not, never | l1 info #5, l2 #5 | never граматичне — у ключі | ✅ нова |
| a55 | l2 func 3 choice | Don’t eat lots of sweets, Tom. Go to bed early! | = | l2 info #3, #5 | «Doesn’t eat» — граматично хибне | ✅ нова |
| a56 | l3 phon 1 | **hap**py, **hun**gry | = | l3 info #3 `<u>` | — | ✅ нова |
| a57 | l3 phon 2 | **thirs**ty, com**pu**ter, **hun**gry | = | l3 info #3; l2 info #3 | — | ✅ нова |
| a58 | l3 phon 3 | **hap**py, **thirs**ty, com**pu**ter, **health**y, **chil**dren | = | там само | — | ✅ нова |
| a59 | l3 read 1 choice | sad | = | текст на екрані | ні | ✅ нова |
| a60 | l3 read 2 gaps | water, hungry | = | текст + l3 info #3 | juice у тексті немає; «I’m not tired» | ✅ нова |
| a61 | l3 read 3 choice | He’s ill. | = | текст («I’m not well») + l3 info #3 | tired серед варіантів немає | ✅ нова |
| a62 | l4 phon 1 | **head**ache, **tooth**ache | = | l4 info #3 `<u>` | — | ✅ нова |
| a63 | l4 phon 2 | **stom**ach, **head**ache, com**pu**ter | = | l4 info #3; l2 | — | ✅ нова |
| a64 | l4 phon 3 | **tooth**ache, **stom**ach, **hun**gry, com**pu**ter, **tooth**brush | = | l1–l4 `<u>` | — | ✅ нова |
| a65 | l6 read 1 choice | Because she’s got a cold. | = | текст на екрані | ні | ✅ нова |
| a66 | l6 read 2 gaps | late, early | = | текст на екрані | ні | ✅ нова |
| a67 | l6 read 3 choice | Because he’s tired. | = | текст на екрані | «it’s very hot» — причина іншої дії (пастка уважного читання) | ✅ нова |

Перебір `build` (усі підмножини й перестановки з extra) після правок дає таке:
- a06 приймає лише «Don’t dry your hands with a dirty towel»;
- a09 приймає «wash your hands before lunch» і «before lunch wash your hands»;
- a23, a32, a38, a42 приймають лише ключ.

Неповних рядків рушій не зараховує.

Ключі `word` без кінцевого `.!?`; варіанти з великої літери, з «.» і «!» дістають ok. Літер A/B/C і позиційних посилань немає. Нема також IPA, «Listen / You hear», AmE-правопису (grep), кирилиці й `uk`.

### Покриття урок × `sk` (після правок)
| Урок | sk з оцінюваних екранів уроку | У пулі (кількість, рівні) |
|---|---|---|
| l1 | vocab, gram, func | 3 (1,2) · 3 (1–3) · 3 (1–3) |
| l2 | read, vocab, func, gram, phon | 3 · 4 · 3 · 4 · 3 — усі 1–3 |
| l3 | read, vocab, phon, gram | 3 · 3 · 3 · 4 — усі 1–3 |
| l4 | vocab, gram, phon, func | 3 · 3 · 3 · 3 — усі 1–3 |
| l5 | func, gram | 3 · 3 — усі 1–3 |
| l6 | gram, read, func | 4 · 3 · 3 — усі 1–3 |

Типи: gaps 19, word 12, stress 9, choice 8, match 7, pick 6, build 6 — разом 67.

## 4. Лексика, герої, BrE, авторське право

- **Лексика:** скрипт порівняв кожне слово пулу зі словами уроків e4s1–e4s5. Поза уроками лишаються лише:
  - інструкції Match / halves;
  - форми dries, brushes (дистрактор);
  - ключі sick / unwell / rest / never.

  Слова talks, twenty, illness, sun з тексту вправ прибрав (правки 2–7).
- **Герої:** перевірив проти канону inbox (NOTE герої).
  - Bohdan не любить football (writer-pe4s3, e4s3 «Bohdan likes tennis»), тож у новій a60 він грає в tennis.
  - Emma в l2 лягає о дев'ятій, а Andrii (pe4s1 a07) — о 22:00. Тому в a66 «пізно лягаю» каже Taras (як в l6 intro), а «рано» — його друг Ostap (Lviv).
  - Danylo — друг Mariia (Kharkiv). Dmytro — молодший брат Oksana. Tom — брат Emma.
  - Mariia «my brother» не має.
- **BrE:** ill як основний ключ, have got, toothache без артикля, sweets, at the doctor’s.
- **Авторське право:** фрагменти ≥ 12 слів шукав WebSearch у лапках. Збігів немає в жодному.

| Фрагмент | Запит | Результат |
|---|---|---|
| a39 | `"Open your mouth, please. You've got a sore throat. Stay in bed and drink lots of water"` | збігу немає |
| a17 | `"In the evening, all children have a shower. They wash their feet. Then they brush their teeth"` | збігу немає |
| a08 | `"Sofiia wants to go to bed. She's got her toothbrush and toothpaste"` | збігу немає |
| a45 | `"Why do we brush our teeth? Because we want clean teeth"` | збігу немає |
| a50 (нова) | `"Every day I eat fruit for breakfast. After school, I play football outside with my friends"` | збігу немає (лише окремі шкільні речення «I eat fruit for breakfast») |
| a67 (нова) | `"I drink lots of water because it's very hot today. I don't play football today because I'm tired"` | збігу немає |
| a66 (нова) | `"I'm tired today because I go to bed late. I play computer games in the evening"` | збігу немає |
| a65 (нова) | `"I'm at home today because I've got a cold. Mum is at home with me"` | збігу немає |
| a60 (нова) | `"Now I want a glass of water and a big sandwich! But I'm not tired"` | збігу немає |
| a51 (нова) | `"We eat vegetables every day. We don't eat lots of sweets"` | збігу немає |

## 5. Правки, які я зробив сам

1. **a06 (рішення щодо спірного місця автора):** «With a dirty towel don’t dry your hands» — неприродний порядок. Обставина способу перед заперечним наказом без коми звучить як помилка, тож пул не повинен цього вчити. Я прибрав цей порядок з `answer` і поставив `keepCase: true`. Плитка тепер «Don’t», пастка — «Doesn’t»: велика перша плитка показує дитині, з чого починається речення (так зроблено в pe4s2 і a23/a32). Ключ «Don’t dry your hands with a dirty towel.» не змінився.
   **a09 лишив як є:** «Before lunch wash your hands» — обставина часу на початку природна й без коми (PITFALL writer-pe4s3).
2. a05 body: «Oksana talks to…» → «What does Oksana say to her brother Dmytro? One word is wrong.» (talk в уроках не було).
3. a14: «twenty children» → «lots of children» (twenty в уроках e4s1–e4s5 немає).
4. a17 body: «Ms Savchuk talks to the class.» → «What does Ms Savchuk say to the class?».
5. a33 hint: «How do we ask about an illness?» → «How do we ask what is wrong?» (illness — поза уроками).
6. a37 body: «Dr Bondar talks to Andrii.» → «What does Dr Bondar say to Andrii?».
7. a44: «Because I play football in the sun.» → «… outside.» (sun — лише з e4s6, після e4s5); так само в `steps`.
8. **Додано a47–a67** (21 вправа, §3). Статус пулу `draft` → `verified`, `meta.factcheck`, шапка файлу.

Після правок:
- `node tools/validate.mjs --pool pe4s5` — 0 помилок, 0 попереджень;
- `node tools/personalization-qa.mjs --pool pe4s5 --strict` — без прогалин (exit 0).

## 6. Рекомендовано (не блокує)

1. `python3 tools/test-answer-ui.py --suite content --pool pe4s5` не запускав: Python-модуля playwright у контейнері немає. Запуститься лише в CI після build оркестратора.
2. Пул має пройти build (оркестратор), потім — плейтест тренування від ролі учня 4 кл. Окремо варто подивитися, чи зрозуміла дитині підказка stress «One word is not strong at the start.» (a49, a58, a64).
3. NOTE writer-pe4s5 про read/phon у пулах eng закрито: POOL_TYPES уже дозволяє `stress` і `choice`. Решті пулів 4 кл., де автори писали за старим переліком (pe4s7 теж згадує), варто перевірити ті самі прогалини.

## 7. Вердикт

| Об'єкт | Вердикт |
|---|---|
| pe4s5 (67 вправ, уроки e4s5l1–l6) | ✅ verified |
