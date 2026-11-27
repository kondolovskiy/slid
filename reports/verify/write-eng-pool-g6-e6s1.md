# Верифікація: пул pe6s1 (англійська, 6 кл., розділ e6s1 «Describing people»)

Верифікатор: verifier-pe6s1-pe6s2 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s1.js` (74 вправи a01–a74) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s1.md. Опора — лише уроки content/eng/g6-e6s1.js (verified, reports/verify/e6s1.md) і раніші e4/e5. Еталон — reports/verify/pe5s1.md.

**Вердикт: пул придатний, `status: "verified"`.** Я зробив 5 мінімальних правок: 2 ключі `word` без другої правильної відповіді (a40, a55), 1 вправа повторювала рамку уроку з тим самим ключем (a67), 1 підказка відкидала пастку (a11), 1 слово поза уроками в умові (a56). Неправильних ключів немає. Питань учителю немає, TQ не створював.

## 1. Програма (`src`): PDF відкрито в цій сесії

PDF: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Я завантажив його заново (curl), SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 збігається з facts/eng.md. Сторінки прочитав через `pdftotext -f N -l N`.

| `src` | Що на сторінці (дослівно) | Вердикт |
|---|---|---|
| mpim с. 20 (vocab, read, phon) | «Я, моя родина, мої друзі»; підтеми «Зовнішність», «Риси характеру»; функція «характеризувати» | ✅ |
| mpim с. 21 (gram l1, l5, l6; func l1, l4, l6) | «Position: … with ‘be’ and linking verbs»; «Modifying: with degree adverbs»; «Comparative: be like + noun or pronoun»; «Interrogatives: affirmative (Yes/No), affirmative (Wh-)» | ✅ |
| mpim с. 22 (gram l2, l3; func l3) | «Noun phrases with determiners and adjectives»; «With/without for (lack of) possession» | ✅ |
| `sources` | `program: true`, сигла `mpim`, title і url — як у facts/eng.md | ✅ |

## 2. Форми й наголос: словники відкрито в цій сесії (curl)

| Слово | CD (UK / US) | OALD (BrE / NAmE) | Вердикт |
|---|---|---|---|
| polite (a44–a46) | pəˈlaɪt / pəˈlaɪt (https://dictionary.cambridge.org/dictionary/english/polite) | /pəˈlaɪt/ / /pəˈlaɪt/ (https://www.oxfordlearnersdictionaries.com/definition/english/polite) | ✅ po\|+lite |
| honest (a45, a46) | ˈɒn.ɪst / ˈɑː.nɪst (…/english/honest) | /ˈɒnɪst/ / /ˈɑːnɪst/ (…/definition/english/honest_1) | ✅ +hon\|est |
| clever (a45) | ˈklev.ə / ˈklev.ɚ (…/english/clever) | /ˈklevə(r)/ / /ˈklevər/ (…/definition/english/clever) | ✅ +clev\|er |
| lazy (a44, a46) | ˈleɪ.zi / ˈleɪ.zi (…/english/lazy) | /ˈleɪzi/ / /ˈleɪzi/ (…/definition/english/lazy) | ✅ +la\|zy |
| curly (a46) | ˈkɜː.li / ˈkɝː.li (…/english/curly) | /ˈkɜːli/ / /ˈkɜːrli/ (…/definition/english/curly) | ✅ +cur\|ly |
| smart (a40, ключ) | «B1 mainly US intelligent, or able to think quickly» (https://dictionary.cambridge.org/dictionary/english/smart) | — | ✅ лише в ключі як друга правильна (AmE-лексика, не помилка) |
| intelligent (a40, додано) | «showing intelligence, or able to learn and understand things easily» (https://dictionary.cambridge.org/dictionary/english/intelligent) | https://www.oxfordlearnersdictionaries.com/definition/english/intelligent | ✅ друга правильна до «learns new words very quickly» |
| bright (a40, додано) | «B2 intelligent and quick to learn» (https://dictionary.cambridge.org/dictionary/english/bright) | — | ✅ друга правильна |
| scared (a55, додано) | «B1 frightened or worried» (https://dictionary.cambridge.org/dictionary/english/scared) | «afraid that something bad might happen» (https://www.oxfordlearnersdictionaries.com/definition/english/scared) | ✅ друга правильна до «Is everything OK?» |

Усі п'ять слів `stress` мають один наголос і в CD, і в OALD. Усі підкреслені `<u>` в info уроків: l4 #3 — polite, clever, lazy, honest; l2 #4 — curly (раніший урок, ніж a46 з l4). У кожному наборі є слово з іншим наголошеним складом (polite).

## 3. Факти
Дат, чисел і реальних назв у пулі немає. Герої звірені з каноном glossary/eng-heroes.md: окуляри — у Andrii й Ms Lysenko; борода — у Grandad Mykola й PE teacher; Halyna — найкраща подруга Oksana; Denys — її кузен; карате Oksana; тітка Liudmyla й дядько Roman — родина Taras; дідусь Emma готує (a72 «they both love cooking»); Kyrylo — однокласник Andrii. Суперечностей немає. Нові дрібні деталі перелічив автор у нотатках задачі (NOTE в inbox).

## 4. Завдання: моє розв'язання → опора (D-019) → друга відповідь → вердикт

Кожну вправу я розв'язав сам, перш ніж дивитися на ключ. Скриптом (node vm + app/lang.js, `SLID_LANG.check(…, "en")`) я перебрав для 7 `build` усі впорядковані підмножини `tiles ∪ extra`, разом 54 795 станів. Приймаються лише ключі. Граматичні порядки поза ключем перебрав вручну (нижче). Ключі `word` і мої кандидати в другу відповідь перевірив через `wordVerdict`. `solution` проходить `check` для всіх 74 вправ.
Лексику я перевірив скриптом: кожне слово вправи має бути в e4/e5 або в уроці e6s1 до уроку вправи включно. Поза цим набором лишилися тільки shortest (форма від tallest з l1), teachers, beards, hats (форми слів), tiredly (дистрактор), wavy/nervous/anxious (ключі-синоніми), імена і fit (a56, виправлено).
Копії я шукав скриптом за 6-грамами проти g4…g11 і dge*. Знайшлися лише формули («What does he look like», «Who do you look like? Who are you like?», «short brown hair and brown eyes» — канонічний опис Tom) і рамка «One word in X’s message is wrong». Копію з тим самим ключем знайшов поняттєво: a67 = l6 #4 (виправлено).

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 gaps | tall, short | l1 #3; body | ні | ✅ |
| a02 match | long hair / short hair / tall / short | l1 #3 | перебрав усі праві: «She’s got» + «tall.» неграматичне | ✅ |
| a03 word | brown | l1 #3 | dark brown, dark — у ключі | ✅ |
| a04 gaps | tall, short, brown | l1 #3, #5 (tall, not long) | ні | ✅ |
| a05 gaps | do, like | l1 #3, #5 | ні | ✅ |
| a06 build | What do your cousins look like? | l1 #6 | порядків поза ключем немає | ✅ |
| a07 pick | looks | l1 #5 | ні | ✅ |
| a08 word | do | l1 #5 | ні | ✅ |
| a09 choice | He’s got short brown hair… | l1 #3 (look like → hair, eyes) | ні | ✅ |
| a10 match | likes chess / short hair, blue eyes / Yes, he is / No, he hasn’t | l1 #8 | бієкція однозначна | ✅ |
| a11 build | What does Orest like? | l1 #2 fbText, #3 («What does he like? → his hobbies») | «What does Orest look like?» граматичне, але body «hobbies» його відсікає. Це контраст уроку, як pe5s1 a41 | ✅; **підказку змінено** (див. §5) |
| a12 choice | He’s tall. He’s got short brown hair. | текст на екрані | ні | ✅ |
| a13 multi | 0, 2 | текст | ні | ✅ |
| a14 choice | brown eyes and long hair | текст + міркування (the same eyes) | ні | ✅ |
| a15 gaps | long dark, short grey | l2 #3 | ні | ✅ |
| a16 pick | hairs | l2 #4 | ні | ✅ |
| a17 build | Has Ruby got long red hair? | l2 #3; have got-питання з e4/e5 | розповідне «Ruby has got…» відсікає keepCase («Has») і body (asks) | ✅ |
| a18 word | long | l2 #3 | long straight — у ключі | ✅ |
| a19 gaps | short fair hair, big brown eyes | l2 #3, #4 | ні | ✅ |
| a20 match | light / black or very dark brown / circles / not curly | l2 #3, #4 | ні | ✅ |
| a21 word | curly | l2 #4 | wavy — у ключі | ✅ |
| a22 choice | He’s got short fair hair. | l2 #3 | «fair short» — порядок неправильний | ✅ |
| a23 choice | short curly dark hair | текст | ні | ✅ |
| a24 multi | 0, 2 | текст | ні | ✅ |
| a25 choice | Sam | текст + міркування | ні | ✅ |
| a26 gaps | beard, glasses | l3 #3 | «a grey glasses» неграматичне | ✅ |
| a27 word | glasses | l3 #3 | ні | ✅ |
| a28 multi | 0, 2 | body + l3 #3 | ні | ✅ |
| a29 gaps | with, without | l3 #3 | ні | ✅ |
| a30 pick | a | l3 #3 («no a») | ні | ✅ |
| a31 word | without | l3 #3 | ні | ✅ |
| a32 gaps | with glasses, with a beard | l3 #3 | «with beard» неграматичне | ✅ |
| a33 match | PE teacher / Andrii / Ruby | l3 #9, канон; l2 (Ruby red hair) | ні | ✅ |
| a34 build | Who’s the girl with long red hair? | l3 #7, l2 #3 | ні | ✅ |
| a35 choice | Who’s the man without a hat? | l3 #1, #3 | ні | ✅ |
| a36 choice | the art teacher | текст | ні | ✅ |
| a37 multi | 0, 2 | текст | ні | ✅ |
| a38 multi | Oksana, Dmytro | текст | ні | ✅ |
| a39 match | kind / polite / lazy / shy | l4 #3 | помилкових пар немає | ✅ |
| a40 word | clever | l4 #3 («learns new things quickly») | smart — у ключі. **intelligent, bright не було в ключі** → ❌, додано | ✅ після правки |
| a41 sort | 4 / 4 | l4 #6, #7 | ні (clever — риса характеру за l4 #3) | ✅ |
| a42 gaps | an, honest | l4 #3 (an honest girl) | «a polite» відсікає body (tells the truth) | ✅ |
| a43 pick | lazy | l4 #3; помилка в значенні | інше одне слово сенсу не виправляє | ✅ |
| a44–a46 stress | po\|+lite, +la\|zy, +hon\|est, +clev\|er, +cur\|ly | l4 #3, l2 #4 | — | ✅ |
| a47 choice | He’s shy and honest. | l4 #6 | ні | ✅ |
| a48 match | friendly and polite / long dark hair / maths / Kharkiv | l4 #6, l1 #3 | ні | ✅ |
| a49 build | What is your new friend like? | l4 #6 | ні | ✅ |
| a50 choice | kind and funny | текст | ні | ✅ |
| a51 multi | 0, 2 | текст | ні | ✅ |
| a52 choice | shy | текст + l4 #3 | ні | ✅ |
| a53 match | tired / surprised / angry / worried / bored | l5 #4, #5 | бієкція однозначна | ✅ |
| a54 gaps | surprised | l5 #4 | ні | ✅ |
| a55 word | worried | l5 #4 | nervous, anxious — у ключі. **scared не було** (CD «frightened or worried») → ❌, додано | ✅ після правки |
| a56 pick | surprised | l5 #4 (bored → nothing to do) | ні | ✅; **«doesn’t fit» → «is wrong»** (fit поза уроками) |
| a57 gaps | looks, tired | l5 #3 | ні | ✅ |
| a58 gaps | quite, really | l5 #7 | ні | ✅ |
| a59 build | The teacher looks very angry. | l5 #3, #4, #7 | ні | ✅ |
| a60 pick | like | l5 #3 | ні | ✅ |
| a61 word | quite | l5 #7 | a little / a bit відсікає умова «Write quite, very or really» | ✅ |
| a62 gaps | looks like, looks | l5 #3 | ні | ✅ |
| a63 gaps | looks like | l6 #3 | ні | ✅ |
| a64 gaps | is like | l6 #3 | ні | ✅ |
| a65 choice | looks like | l6 #3 | ні | ✅ |
| a66 word | like | l6 #3, #7 | ні | ✅ |
| a67 pick | looks (→ is) | l6 #3 | Помилка в значенні однозначна: одним словом речення виправляє лише looks → is (щоб узгодити «they’re both …», треба змінити два слова). **Але Dmytro + Dad + funny and kind → is like — це рамка l6 #4 з тим самим ключем** (pitfalls-content.md п. 18) → ⚠️, новий контекст (Ostap і дідусь, kind and polite; Ostap kind — a39/a50, polite — a43) | ✅ після правки |
| a68 gaps | looks like, is like, looks | l6 #3 | ні | ✅ |
| a69 match | 4 пари | l6 #3, l1, l4 #6 | бієкція однозначна | ✅ |
| a70 build | Who are you like? | l6 #3 | ні | ✅ |
| a71 gaps | do, are | l6 #3 | ні | ✅ |
| a72 choice | his mum | текст | ні | ✅ |
| a73 multi | 1, 2 | текст | «Vira is shy» текст не підтверджує | ✅ |
| a74 choice | her dad | текст + l6 #3 | ні | ✅ |

**Спірне від автора.**
1. a67: однозначна. Хибне слово граматичне, але одним словом речення виправляє лише looks → is. Правка — лише через повтор рамки уроку.
2. a11: пастка look — свідомий контраст уроку l1, умова про hobbies її відсікає. Прийнято.
3. a42: «a polite» відсікає body. Прийнято.

## 5. Педагогіка, BrE, підказки
- BrE: AmE-правопису й лексики немає. smart (mainly US) стоїть лише в ключі. A, B, C і IPA немає, «Listen» немає, `uk` немає.
- `steps` і `hint` написані англійською рівня 6 кл., речення до 12 слів.
- a11: підказка «Hobbies: do you need look?» прямо відкидала пастку (pitfalls-content.md п. 17). Замінив на «Hobbies or hair and eyes: which question does Mariia need?» (навігація до контрасту l1 #3).
- Решта підказок відповіді не видає.
- Авторське право: шукав дослівно (WebSearch) фрагменти ≥ 12 слів:

| Фрагмент | Запит | Результат |
|---|---|---|
| a51 «She isn’t shy: she loves talking to new people» | WebSearch з лапками | збігів немає |
| a73 «Vira and Dana don’t look the same» | WebSearch з лапками | збігів немає |

Тексти короткі, власні, з героями серії.

## 6. Правки (зроблені)
1. a11 — `hint`, як у §5.
2. a40 — `answer` + "intelligent", "bright".
3. a55 — `answer` + "scared".
4. a56 — `body`: «doesn’t fit» → «is wrong».
5. a67 — новий контекст: «Ostap [looks] like his grandad: they’re both kind and polite.»; body «Taras’s message»; hint і steps узгоджено. id і `lvl` не змінено.
6. `status: "verified"`, `meta.factcheck` — цей звіт.

`node tools/validate.mjs --pool pe6s1`: 0 помилок, 0 попереджень. `node tools/personalization-qa.mjs --pool pe6s1`: зауважень немає. Браузерні прогони йдуть у CI. Build я не запускав (оркестратор).

## 7. Вердикт
Уроки e6s1l1–e6s1l6 покриті, на кожен урок є 10–14 вправ рівнів 1–3. Відкритих ❌ і ⚠️ немає. Пул pe6s1 → **verified**.
