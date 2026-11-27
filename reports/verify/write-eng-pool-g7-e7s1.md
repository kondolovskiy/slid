# Верифікація: пул pe7s1 «Family life: housework and traditions» (англійська, 7 кл.)

Верифікатор: verifier-pe7s1-pe7s2 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s1.js` (81 вправа a01–a81) за скілами `content-verify` (§2–§5, «Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g7-e7s1.md. Опора — уроки content/eng/g7-e7s1.js (verified, reports/verify/write-eng-g7-e7s1.md). Еталон — reports/verify/pe5s3.md.

**Вердикт: пул придатний, `verified`.** Зробив 10 мінімальних правок: 1 блокувальна (a79: другий порядок `build` був в `answer`, але рушій його не приймав), 3 правки D-019 (лексика пізніших розділів), 1 правка канону героїв, решта — hint. TQ не додаю.

## 1. Програма (`sources`, `src`)
МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Завантажив у цій сесії: SHA-1 43925b25c52b…, як у facts/eng.md. Прогнав `pdftotext` по сторінках.

| `src` | Що на сторінці (дослівно) | Вправи | Вердикт |
|---|---|---|---|
| mpim с. 32 | «Сімейні традиції та свята» (тема 7 кл., поруч «Харчування») | l1 (зокрема have to з housework), l6 read/cult/phon/write | ✅ |
| mpim с. 35 | «Present perfect simple: … duration with ‘since’, with ‘already’ to emphasise that something is done, with adverbs in mid position»; «Pronouns … reflexive» | l2–l5, l6 gram | ✅ |

У джерелі стоїть `program: true`, у вправах немає `srcPage` і `adapted`.

## 2. Факти й форми: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження | Джерела | Вердикт |
|---|---|---|
| Святвечір: велика вечеря з 12 страв (a68, a72, a81) | en.wikipedia «The family comes together to have a dinner which usually includes 12 dishes (the number can vary from 7–17)» — https://en.wikipedia.org/wiki/Christmas_in_Ukraine; WebSearch: Kyiv Independent «The 12 dishes of Ukrainian Christmas Eve» — https://kyivindependent.com/the-12-dishes-of-ukrainian-christmas-eve | ✅ |
| kutia — страва Святвечора з медом і маком (a70, a71) | en.wikipedia «Kutia (a dish of grain, honey and poppy seeds) is traditionally served first at the meal» — https://en.wikipedia.org/wiki/Christmas_in_Ukraine; урок e7s1l6 (звіт e7s1: uk.wikipedia Святий Вечір) | ✅ |
| Колядки після вечері (a68) | en.wikipedia «Ukrainian families often sing carols (koliadky)» — та сама сторінка; урок e7s1l6 | ✅ |
| paska — солодкий великодній хліб; кошик з паскою до церкви (a67, a70, a71, a78) | en.wikipedia: infobox «Type: Sweet bread», «fill one’s Easter basket (koshyk) with Easter eggs (pysanky), Easter bread (paska)», освячення в церкві — https://en.wikipedia.org/wiki/Paska_(bread); урок e7s1l6 info | ✅ |
| UK: шоколадні яйця на Великдень (a71, a72) | CD «chocolate in the shape of an egg, given as a present or hidden for children to find at Easter» — https://dictionary.cambridge.org/dictionary/english/easter-egg; OALD «chocolate in the shape of an egg that is given as a present and eaten at Easter» — https://www.oxfordlearnersdictionaries.com/definition/english/easter-egg | ✅ |
| Pancake Day — млинці (a72) | OALD «the day before the beginning of Lent, when people traditionally eat pancakes» — https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day; CD «(also Shrove Tuesday); (US informal Pancake Tuesday)» — https://dictionary.cambridge.org/dictionary/english/pancake-day | ✅ |
| Christmas pudding (a72) | CD «…dried fruit, eaten at the end of the meal in some countries at Christmas» — https://dictionary.cambridge.org/dictionary/english/christmas-pudding; урок e7s1l6 cult | ✅ |
| chores — друга відповідь a08 | CD «a job or piece of work that is often boring or unpleasant but needs to be done regularly: I'll go shopping when I've done my chores» — https://dictionary.cambridge.org/dictionary/english/chore | ✅ у ключі |
| custom — друга відповідь a77 | CD «B1 [C or U] a way of behaving…» — https://dictionary.cambridge.org/dictionary/english/custom; OALD «an accepted way of behaving or of doing things in a society or a community» — https://www.oxfordlearnersdictionaries.com/definition/english/custom | ✅ у ключі |
| already: «Not: I’ve made already the coffee»; кінцева позиція — правильна (емфаза) | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/already | ✅ a19 карає лише позицію між дієсловом і додатком; кінцевого already хибним ніде немає |
| yet «usually comes in end position»; «Not: She’s booked the flights yet» | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/yet | ✅ a30, a35 |
| Reflexive for emphasis: «wrote to us himself» / «himself wrote to us» | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/pronouns-reflexive-myself-themselves-etc | ✅ a55: обидва порядки в `answer` |

Нових фактів поза уроком e7s1l6 немає. Сюжетні деталі героїв розібрано в §5.

### Наголос (`stress` a61–a63, a73–a75): один головний наголос у CD UK і OALD (curl у цій сесії)

| Слово | CD UK (https://dictionary.cambridge.org/dictionary/english/<w>) | OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<w>) | Ключ | Вердикт |
|---|---|---|---|---|
| myself / himself / herself / itself | maɪˈself / hɪmˈself / hɜːˈself / ɪtˈself | /maɪˈself/ /hɪmˈself/ /hɜːˈself/ /ɪtˈself/ | 2-й | ✅ |
| yourself / ourselves / themselves | jɔːˈself / ˌaʊəˈselvz / ðəmˈselvz | /jɔːˈself/ /ɑːˈselvz/ /ðəmˈselvz/ | 2-й | ✅ |
| yourselves | CD: окремої вимови на сторінці немає | OALD (стаття yourself) /jɔːˈselvz/; Wiktionary raw /jɔːˈsɛlvz/ — https://en.wiktionary.org/w/index.php?title=yourselves&action=raw | 2-й | ✅ |
| housework / tidy / rubbish | ˈhaʊs.wɜːk / ˈtaɪ.di / ˈrʌb.ɪʃ | /ˈhaʊswɜːk/ (housework) /ˈtaɪdi/ (tidy_1) /ˈrʌbɪʃ/ | 1-й | ✅ |
| tradition / celebrate / celebration / pancake | trəˈdɪʃ.ən / ˈsel.ə.breɪt / ˌsel.əˈbreɪ.ʃən / ˈpæn.keɪk | /trəˈdɪʃn/ /ˈselɪbreɪt/ /ˌselɪˈbreɪʃn/ /ˈpænkeɪk/ | 2-й / 1-й / 3-й / 1-й | ✅ |

**Спірне автора 2 (і питання оркестратора про a63/a75).** Пастка pitfall 19 вимагає слово, підкреслене `<u>` «в info того самого уроку». У e7s1l5 підкреслено лише -self/-selves, а всі вони мають наголос на 2-му складі. Тоді виконати другу вимогу («хоча б одне слово з іншим наголошеним складом») неможливо. Автор додав housework, tidy, rubbish з l1 і -selves з l5 (для l6). Усі ці слова підкреслені в info раніших уроків того самого розділу, тож учень їх уже бачив, і D-019 виконано. Так само зроблено в самому уроці: e7s2l6 #8 бере слова з l1 і l5 з hint «Look at the underlined parts in this lesson and Lessons 1 and 5». **Приймаю.** Пропоную куратору уточнити pitfall 19: «у тому самому або ранішому уроці розділу» (inbox).

## 3. Завдання: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я спершу розв'язав сам, а тоді звірив із ключем. Для всіх 7 `build` перебрав усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` з app/lang.js (node vm, скрипт у scratchpad). Ключі `word` прогнав через `wordVerdict(…, "en")` (регістр, кінцевий знак, have not, by yourself, houseworks).

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 choice | Andrii | список на екрані | ні | ✅ |
| a02 gaps | Tom, Emma, Dad | список на екрані | ні | ✅ |
| a03 multi | 0, 2 | текст на екрані | «Mum does the washing-up» хибне (Dad) | ✅ |
| a04 match | за місцем | l1 info, match | feed / put…out / do / make — кожна права половина лягає лише до одного дієслова | ✅ |
| a05 gaps | does, makes | l1 info, sort | ні | ✅ |
| a06 word | water | l1 info | ні | ✅ |
| a07 pick | [make] | l1 choice, sort | ні | ✅ |
| a08 word | housework | l1 info «(no -s)» | chores — у ключі (CD); houseworks — Almost | ✅ |
| a09, a11 gaps | have to, has to; doesn’t have to, Does, does | l1 gaps (have to — e6s5l5) | «Yes, he has» — не відповідь на Does…? | ✅ |
| a10 build | Do you have to do the ironing? | l1 gaps | перебір: лише ключ; «has to» відсічено | ✅ |
| a12, a14 gaps | do, makes; housework, has to, do, rubbish | l1 info, Final | ні | ✅ hint a14 виправлено (§6) |
| a13 word | do | l1 sort | «Write do or make» відсікає go / finish | ✅ |
| a15, a16, a21 gaps | tidied, fed; has, have; watered, has | l2 info, gaps | ні | ✅ |
| a17 build | Sofiia has just made her bed. | l2 build | перебір: лише ключ; «Has Sofiia…?» відсічено keepCase (і це питання, а не повідомлення) | ✅ |
| a18 word | already | l2 word, «Ten in the morning is not a very short time ago» | just відсічено часом (9 am → 7 pm) | ✅ |
| a19 pick | [already] | l2 info «Not: I’ve done already it» | already в кінці теж правильне (CD), але тут воно між дієсловом і додатком | ✅ |
| a20, a23 gaps | just, already; got, already, put | l2 info, gaps | just/already відсічено часом (пальто ще на Томі; 8 → 11) | ✅ |
| a22 word | made | l2 info | ні («Write the correct form of make») | ✅ |
| a24 choice, a25 gaps, a26 multi | 1; has, hasn’t, hasn’t; 0, 2 | текст на екрані, l3 | ні | ✅ |
| a27, a34, a36 gaps | already, yet; already, yet; already, Have, yet | l3 info, gaps | ні | ✅ a36: «mine» замінено (§6) |
| a28 build | Has Sofiia watered the plants yet? | l3 build | перебір: лише ключ | ✅ |
| a29 word | have | l3 info «Short answers» | «did» — не на Have you…? | ✅ |
| a30 pick | [yet] | l3 info, choice | ні | ✅ |
| a31 match | за місцем | l3 info | займенник відповіді (I / he / they) однозначний | ✅ |
| a32 word | haven’t | l3 info | have not — ok (`contractions`) | ✅ |
| a33 gaps | Have, have, Has, not yet | l3 info | «did» на Have…? — хибне | ✅ |
| a35 build | I haven’t tidied my room yet. | l3 info, choice | перебір: рівно 2 порядки (+ «haven’t yet tidied»), обидва в `answer`; already відсічено | ✅ |
| a37, a46 gaps; a38 sort | for, since; for, since; for/since | l4 info, sort | ні | ✅ |
| a39 gaps | has lived, has known | l4 info | lives / knows з for / since — хибне в BrE | ✅ (спірне 4) |
| a40 word | had | l4 info «have → had → had» | ні | ✅ |
| a41 pick | [know] | l4 info «Not: I live here since 2020» | ні | ✅ body виправлено (§6) |
| a42, a48 gaps | known, for, been, since; has been, since, have known, for | l4 info | is / know з since/for — хибне | ✅ |
| a43 build | How long has your family had the cat? | l4 build | перебір: лише ключ. Без hint на рівні 1 — так само, як у l4 boss T7; validate не вимагає | ✅ (спірне 1) |
| a44 match | за місцем | l4 info, build | займенник у відповіді однозначний | ✅ |
| a45 word | since | l4 info | «Since» — ok (регістр) | ✅ body виправлено (§6) |
| a47 word | since | l4 word | «Write for or since» | ✅ |
| a49 choice, a50 gaps, a51 multi | 1; with no help, the salad, the soup; 0, 2 | текст на екрані, l5 info | ні | ✅ hint a51 виправлено (§6) |
| a52, a56, a64, a66 gaps | himself, herself; yourselves, himself, myself; myself, themselves; yourselves, herself, myself, yourself | l5 info, gaps, Final | ні | ✅ hint a56 виправлено (§6) |
| a53 match | за місцем | l5 match | кожен займенник має лише одну пару | ✅ |
| a54 word | yourself | l5 info, pick | by yourself — у ключі | ✅ |
| a55 build | We tidied the kitchen ourselves. | l5 build | перебір: рівно 2 порядки, обидва в `answer` (CD Grammar: емфатичне «We ourselves…»); us відсічено | ✅ |
| a57 pick | [yourselves] | l5 pick | ні | ✅ |
| a58 gaps, a59 match | yourself; за місцем | l5 info «Help yourself / yourselves / Enjoy yourselves» | ні | ✅ |
| a60, a65, a80 word | myself, ourselves, herself | l5 info «by myself»; l6 Final | ні | ✅ hint a60 виправлено (§6) |
| a61–a63, a73–a75 stress | див. §2 | `<u>` у l1, l5, l6 | — | ✅ (спірне 2) |
| a67 choice, a68 gaps, a69 multi | Dad; Chernihiv, Grandma Nina, sing carols; 0, 2 | текст на екрані | ні | ✅ (спірне 3) |
| a70 match | за місцем | l6 info, boss T6 | «something you do every year» — лише tradition; страви не плутаються | ✅ |
| a71 gaps, a72 sort | church, chocolate eggs, Christmas Eve; 3 + 3 | тексти Оксани й Емми l6 | ні | ✅ |
| a76 gaps | celebrate, celebration | l6 info | ні | ✅ |
| a77 word | tradition | l6 info «something a family or people do every year» | custom — у ключі; celebration = «a special day or a party» за уроком | ✅ |
| a78 gaps | have decorated, since, ever | l4, l6 gaps | ні | ✅ виправлено (§5) |
| a79 build | Grandma and I have decorated pysanky since I was six. | l4, l6 build | **❌ до правки:** «Since I was six Grandma…» стояло в `answer`, але `keepCase: true` разом з малою плиткою «since» робили його недосяжним: зібране «since I was six…» не дорівнює «Since…». Після правки перебір приймає рівно 2 порядки | ✅ виправлено (§6) |
| a81 gaps | has had, never, just | l4, l6 (Emma «I’ve never decorated a real egg») | «has» з for many years — хибне; ever у ствердженні — хибне; since без пункту часу — хибне | ✅ |

**Лексика не виходить за уроки** (pitfall 20). Скриптом зібрав слова кожної вправи (body, text, opts, плитки, hint, steps) і порівняв зі словами уроків e4–e6 та e7s1 до уроку вправи включно. Поза уроками знайшлося таке. chores і custom є лише в ключі, як друга відповідь. Форми minute, plate, decorating, he’ll — інфлексії вже відомих слів. putted — навмисна хибна форма. А от **secondary** (a41), **met** (a45, уперше в e7s5), **mine** (a36, уперше в e10s6) і **anybody** (hint a51) у вправах бути не повинні, тому їх замінено (§6).

**Покриття** (урок × `sk` з оцінюваних неhyp-екранів, рівні; скриптом): l1 read 123, vocab 11223, gram 123, write 123; l2 gram 112233, write 123; l3 read 123, gram 1223, func 123, write 123; l4 gram 112233, func 123, write 123; l5 read 123, gram 112233, func 123, phon 123, write 123; l6 read, cult, phon, write, gram — 123. Зайвих `sk` немає. Boss l7 без вправ.

**Копії уроків** (pitfall 18). Перевірив n-грами (5 і 7 слів) скриптом проти content/eng/g*.js і diag-*.js. Збіги — лише шаблонні рамки («One word in X’s message is wrong», «How long have you lived…», «have to do the ironing») і переказ фактів l6 («a few days before Easter», «never decorated a real egg»). Речення уроку з тим самим ключем і тим самим типом не повторюються.

**Механіка й BrE** (grep). AmE (color, favorite, apartment, trash, mom, vacation), «Listen / You hear», IPA `/…/`, `uk`, літери A/B/C і позиційні посилання не знайдено. Ключі `word` без кінцевого `.!?`. `validate --pool pe7s1` — 0/0; `personalization-qa --strict` — лише «ще не verified» до зміни статусу; `euphony --pool` без зауважень.

## 4. Педагогіка й рівень
`steps` і `hint` короткі, у формулах уроку («Done → already. Not done → not … yet», «How long? → for»). Рівні наростають: від 2 пропусків до листа з 4 пропусками чи `multi` за текстом. Неприйнятного для віку змісту немає. Hint, що підписували пропуски чи підставляли дистрактор, виправлено (§6).

## 5. Герої (glossary/eng-heroes.md)
- **a78 ❌ → виправлено.** «Zlata and I have decorated pysanky since **we** were five». Канон: Zlata — little sister Тараса, тож одного віку вони не мають. Тепер «since **she** was five», hint і steps відповідно.
- **a41.** «Tom started secondary school» → «Tom started at Emma’s school in September». Канон: Tom (11) — у школі Emma з Year 7. Слово secondary в уроках не трапляється.
- **Нові деталі автора (спірне 3–4, NOTE в inbox)** суперечностей з каноном не мають. У Andrii вдома є список обов'язків. Andrii у chess club з вересня: канон дає «шаховий клуб», e7s5 «Now I’m a member of a chess club». Andrii знає Bohdan п'ять років, Bohdan у tennis club з травня (канон: теніс). Halyna — в art club з вересня, подруга Оксани з шести років; a45 і a48 узгоджені між собою (13 − 6 = 7). Святвечір сім'я Andrii проводить у Chernihiv у Grandma Nina: ці бабуся й дідусь живуть у Chernihiv, сім'я їздить туди (e6s5). Тато Тараса пече паску. Emma й Tom щогрудня роблять листівки. Taras знає Ostap із семи років.
- **Дрібне, не правив:** розподіл справ у сім'ї Andrii відрізняється між окремими вправами. У a01 ironing робить мама, у a04 і a21 — тато. Кожна вправа самодостатня, це не помилка.

## 6. Правки (зроблені)

| Вправа | Було | Стало | Чому |
|---|---|---|---|
| a79 | `keepCase: true` | прибрано | ❌ другий порядок в `answer` був недосяжний (перебір `SLID_LANG.check`). Питальна інверсія «have Grandma and I…?» і так не в `answer` |
| a78 | since we were five; hint «We were five»; steps «we were five» | since she was five; «She was five»; «she was five» | канон: Zlata молодша |
| a36 | I haven’t finished mine yet | I haven’t finished my homework yet | mine — лише з e10 (D-019) |
| a41 body | Tom started secondary school | Tom started at Emma’s school | secondary немає в уроках; канон Year 7 |
| a45 body | Oksana met Halyna when they were six | Oksana and Halyna started school together when they were six | met — уперше в e7s5 (пізніший розділ) |
| a14 hint | … Do the washing-up. | … Do or make? | hint підписував пропуск (pitfall 17) |
| a51 hint | Did anybody help Tom? | Did Mum or Dad help Tom? | anybody немає в уроках |
| a56 hint | Sofiia talks about herself: I → … | Sofiia says I: I → … | у hint стояв дистрактор herself |
| a60 hint | Andrii talks about himself: I → … | Andrii says I: I → … | у hint стояв herself-подібний хибний варіант himself |
| файл | `status: "draft"`, factcheck self | `status: "verified"`, factcheck verifier-pe7s1-pe7s2 | — |

Рекомендовано (не блокує): уточнити pitfall 19 «у тому самому або ранішому уроці розділу» (inbox).

## 7. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a03 (текст Mariia) | `"At home, I tidy my room and water the plants. Dad does the shopping on Saturdays"` | збігу немає (загальні сторінки про chores) |
| a68 (лист Andrii) | `"On Christmas Eve, we go to my grandparents in Chernihiv"` | збігу немає |
| a69 (лист Emma) | `"Every December, Tom and I make Christmas cards for all our family"` | збігу немає |

Решта текстів — короткі власні сцени з героями канону. Збігів n-грам з опублікованими джерелами за 7-грамами немає (§3).

## 8. Вердикт по уроках
e7s1l1–e7s1l6 — ✅. Пул pe7s1 → `verified` (не `approved`: потрібен учитель англійської).
