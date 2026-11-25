# Верифікація e7s5 «Sport: competitions and clubs» (eng, 7 кл.)

Верифікатор: verifier-e7s5 (свіжий контекст), 2026-11-25. Скіл `content-verify` + розділ «Англійська». Файл: `content/eng/g7-e7s5.js`.
Підсумок: **усі 7 уроків → `verified`** після 10 мінімальних правок (7 ❌ «друга правильна відповідь» / опора, 3 ⚠️). `validate --section e7s5` — 0/0; `euphony` — без зауважень; stats — прапорці l2 maxText і l5 sentenceWords (z ≈ 2) у межах профілю `eng` 7–9, пояснені автором (сім'я 7 кл. ще мала). Плейтест — лише CI (Python-модуля playwright немає); build — не запускав (оркестратор).

## 1. Факти (кожне джерело відкрито в цій сесії)

| Твердження в уроці | Джерела (URL) | Вердикт |
|---|---|---|
| Oksana Baiul, фігурне катання, золото Зимової Олімпіади 1994 в Lillehammer; «the first athlete to win Olympic gold for independent Ukraine» (l5 екрани 1–2, фінал l5) | https://en.wikipedia.org/wiki/Oksana_Baiul («the first Olympic champion of independent Ukraine in any sport»; «the first Olympic Champion from Ukraine to compete under the Ukrainian flag»); https://en.wikipedia.org/wiki/Ukraine_at_the_1994_Winter_Olympics (перші Ігри України як незалежної держави; 1992 — Unified Team); WebSearch → https://olympics.com/en/athletes/oksana-baiul, https://www.olympedia.org/athletes/80578 | ✅ Формулювання «for independent Ukraine» точне: Петренко 1992 виступав за Об'єднану команду (en.wiki: Baiul — «second skater representing Ukraine to win gold … after Viktor Petrenko in 1992») |
| Serhii Bubka, стрибки з жердиною; 1985 — перший, хто стрибнув на 6 м (l5) | https://en.wikipedia.org/wiki/Sergey_Bubka («cleared 6.00 meters … for the first time on 13 July 1985 in Paris»); WebSearch → https://worldathletics.org/news/feature/sergey-bubka-first-six-metre-pole-vault, https://www.britannica.com/biography/Sergey-Bubka (13 July 1985, Paris) | ✅ |
| Roger Bannister, бігун з Англії; 6 May 1954, Oxford; миля за 3:59.4; перший — швидше за 4 хв (l5, boss task 6) | https://en.wikipedia.org/wiki/Roger_Bannister («6 May 1954 at Iffley Road track in Oxford»; монета «stopped at 3:59.4»); WebSearch → https://www.guinnessworldrecords.com/world-records/first-person-to-run-a-mile-in-less-than-four-minutes, https://www.history.com/this-day-in-history/may-6/first-four-minute-mile | ✅ |
| «a mile (about 1,600 metres)» | https://en.wikipedia.org/wiki/Mile (1609.344 m); WebSearch (той самий запит, 1.609344 km) | ✅ |
| Yaroslava Mahuchikh from Dnipro, high jump; July 2024, Paris — світовий рекорд 2.10 m; «the first woman to jump so high» (l5) | https://en.wikipedia.org/wiki/Yaroslava_Mahuchikh («broke the world record … 2.10 m at the … Diamond League in Paris. The previous record (2.09 m) … Kostadinova»; «Athletes from Dnipro», birth_place Dnipropetrovsk); WebSearch → https://olympics.com/en/news/paris-diamond-league-2024-ukraine-s-yaroslava-mahuchikh-and-faith-kipyegon-set-world-records, https://www.pravda.com.ua/eng/news/2024/07/7/7464538/ (7 July 2024) | ✅ |
| Mahuchikh — у серпні 2024 олімпійське золото, олімпійська чемпіонка (l5) | https://en.wikipedia.org/wiki/Athletics_at_the_2024_Summer_Olympics_%E2%80%93_Women%27s_high_jump (фінал 4 August); en.wiki Mahuchikh («Olympic gold medalists for Ukraine»); WebSearch → https://worldathletics.org/news/report/paris-2024-olympics-report-women-high-jump, https://olympics.com/en/news/paris-2024-athletics-women-high-jump-ukraine-mahuchikh-gold | ✅ |
| Приватні деталі живих людей | немає | ✅ |

Герої (Lesia, Ilona, Mr Hnatiuk тощо) — вигадані, узгоджено з NOTE (герої) автора в inbox; суперечностей з уроками не знайшов.

## 2. Форми й норма (словники, curl у цій сесії)

| Форма | Джерело | Вердикт |
|---|---|---|
| used to — «no longer true»; Not: *We use to go* | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/used-to; OALD https://www.oxfordlearnersdictionaries.com/definition/english/used-to_2 «Except in negatives and questions, the correct form is used to … ~~I use to go~~» | ✅ |
| didn’t use to / Did you use to…? (TQ-158) | OALD used-to_2 Grammar Point: «To form questions, use did: Did she use to have long hair? Note that the correct spelling is **use to, not ‘used to’**. The negative form is usually didn’t use to, but in British English this is quite informal»; CD Grammar: «Both forms are common, but many people consider the form with the final -d … incorrect» | ✅ — див. §5 |
| Наголос: compe+ti+tion, +tour+nament, +cham+pion, +me+dal, +ath+lete, O+lym+pic, +he+ro | CD: /ˌkɒm.pəˈtɪʃ.ən/, /ˈtʊə…/, /ˈæθ.liːt/, /əˈlɪm.pɪk/, /ˈhɪə.rəʊ/ (https://dictionary.cambridge.org/dictionary/english/<word>); OALD: /ˈhɪərəʊ/, /ˈæθliːt/ | ✅ |
| the youngest girl **taking** part (дистрактор) — граматично правильний скорочений підрядний («who was taking part») | https://perfect-english-grammar.com/participle-clauses.html, https://en.wikipedia.org/wiki/Reduced_relative_clause | ❌ → виправлено (п. 5) |
| BrE: trainers, grandad, practise (v.), penfriend, athletics, sport / sports club, 800 metres, 5–7 pm (TQ-122), лапки “ ” | glossary/eng.md, facts/eng.md №14 | ✅ |

Без IPA, без «Listen / You hear», без літер A/B/C і позиційних посилань — ✅. `uk` немає (7 кл.) — ✅. Діалоги репліками в `body` без `type: "dialog"` — D-056, не знахідка.

## 3–4. Завдання: розв'язок і опора (D-019)

Розв'язував сам, до звірки з `correct`.

| Урок · екран | Мій розв'язок = ключ? | Звідки відповідь | Вердикт |
|---|---|---|---|
| l1 · 2 tournament | так | `hyp: true` | ✅ |
| l1 · 4 match halves | так; перебрав усі праві — бієкція однозначна | екран 3 | ✅ |
| l1 · 6 gaps first/gold/second/silver/bronze | так | екран 5 + таблиця результатів | ✅ |
| l1 · 7 stress | так | підкреслення на екранах 3, 5 | ✅ |
| l1 · 8 choice bronze | так | екран 5 | ✅ |
| l1 · 9 word final | так | екран 3 | ✅ |
| l1 · 10 gaps part/second/silver/championship | так; tournament відсікає «runners» + визначення на екрані 3 | екрани 3, 5 | ✅ |
| l2 · 2 beginner | так | `hyp: true` | ✅ |
| l2 · 4 choice athletics | так | дані на екрані | ✅ |
| l2 · 6 gaps often/much/Can/bring | так, але «How **much** do you train?» теж граматичне й природне, контекст не відсікав | екран 5 | ❌ → виправлено (п. 1) |
| l2 · 7 match Q–A | так | екран 5 | ✅ |
| l2 · 8 build I’d like to join… | так; інших порядків немає | I’d like to + verb (5–6 кл.) + підказка | ✅ |
| l2 · 9 word member | так | екран 3 | ✅ |
| l2 · 10 pick join [to] | так | екран 3 | ✅ |
| l2 · 11 gaps joined/coach/train/member | «Myroslava is a **beginner** too» — після «I’m a beginner» природна друга відповідь | екрани 3, 5 | ❌ → виправлено (п. 2) |
| l3 · 2 Tom | так | `hyp: true` | ✅ |
| l3 · 4 gaps used to ×3, swims | так | екран 3 | ✅ |
| l3 · 5 choice Oliver | так | екран 3 + текст | ✅ |
| l3 · 7 gaps use/Did/did/didn’t | так («Used you use to» — неграматичне) | екран 6 | ✅ (TQ-158 — §5) |
| l3 · 8 build Did you use to… | так | екран 6 | ✅ |
| l3 · 9 word used | «Andrii **liked** to play chess only with his grandad» — граматичне, контекст не відсікає | екран 3 | ❌ → виправлено (п. 3) |
| l3 · 10 pick [use] | так | екран 3 | ✅ |
| l3 · 11 choice Lesia | так | текст на екрані | ✅ |
| l4 · 2 short action (оцінюване до `info`) | так | `pre: e6s4l5` — там «long action → Past Continuous, short → Past Simple», «while + long action» (перевірено content/eng/g6-e6s4.js) | ✅ |
| l4 · 4 gaps was playing/was taking/was drinking | так; дистрактори — лише хибні форми | екран 3 | ✅ |
| l4 · 6 choice because I was looking | так | екран 5 | ✅ |
| l4 · 7 word wasn’t | так; «Sorry, I **stopped** listening» — граматично можливе | екран 5 | ⚠️ → виправлено (п. 9) |
| l4 · 8 build Were you playing when… | так, але «When it started to snow were you playing?» — теж правильний порядок, а в `answer` його не було | екран 5 | ❌ → виправлено (п. 4) |
| l4 · 9 pick [was] | так | e6s4 (we → were) + підказка | ✅ |
| l4 · 10 choice Oksana | так | текст на екрані | ✅ |
| l5 · 2 Baiul | так | `hyp: true` | ✅ |
| l5 · 4 gaps to take/to score/to join | «the youngest girl **taking** part in the race» — правильне (скорочений підрядний) | екран 3 | ❌ → виправлено (п. 5) |
| l5 · 5 choice Bannister | так | текст на екрані | ✅ |
| l5 · 7 gaps broke/to jump/won/became | так | екран 6, факти — в умові | ✅ |
| l5 · 8 stress athlete/Olympic/hero/champion | так | champion — l1; athlete, Olympic, hero — ніде не підкреслено | ⚠️ → виправлено (п. 6) |
| l5 · 9 build He was the first person… | так | екрани 3, 5 | ✅ |
| l5 · 10 word youngest | «Lesia was the **third** runner to finish the race» — правдиве й граматичне (вона «came third»); «last» не відсікалось (кількість бігунів невідома) | екран 3 | ❌ → виправлено (п. 7) |
| l5 · 11 gaps to win/was/broke/to win | так | екрани 1, 3, 7 | ✅ |
| l6 · 2 choice used to lose | так | уривок 1 | ✅ |
| l6 · 3 multi [0, 2] | так | уривок 2 | ✅ |
| l6 · 4 choice whole story | так | обидва уривки + назва | ✅ |
| l6 · 6 order | так | уривки 1–2 | ✅ |
| l6 · 7 match halves | так; другої пари немає | уривки | ✅ |
| l6 · 8 word used | «began to lose» — натяжка, але відсікання слабке | l3 | ⚠️ → виправлено (п. 3) |
| l6 · 9 gaps took/was playing/was watching/to win/think | так | l4, l5, екран 5 | ✅ |
| l7 boss 1–7 | так (task 3 — «Taras **liked** to watch races» → п. 3) | `pre` на кожному; task 6 — l5 екран 5 | ✅ після п. 3 |

Неправильні варіанти й `fbText` після правок відповіді не суперечать. `when / while` як вибір у пропусках немає; Past Simple як дистрактор до Past Continuous немає — ✅.

## 5. TQ-158 (didn’t used to)

Тимчасове рішення автора («didn’t **used** to» — хибний варіант в l3 екран 7) **підтримую**: OALD прямо пише «the correct spelling is use to, not ‘used to’» для питань із did і «The negative form is usually didn’t use to»; CD Grammar радить не вживати форму з -d на іспитах. Форма з -d трапляється в живій мові, тож питання вчителю лишається відкритим (TQ-158, варіант Б — прибрати з варіантів). Пояснення на екрані 6 («After did and didn’t, write use to, like did you play») рівню 7 кл. відповідає. Нового TQ не створював.

## 6. Педагогіка й рівень

Кожен урок: проблема (intro) → здогадка `hyp` чи `pre` → `info` → завдання з поясненням «чому». Мова пояснень — короткі речення A2, нові слова пояснено (set, pole vault, world record) — рівень 7 кл. ✅. Підказки відповіді не видають. Чутливого змісту немає; спортсмени — без приватних деталей. Фінал — по завданню на урок, `pre` на кожному.

## 7. Авторське право (≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| l6 уривок 1 | "Every year, we played against them in the tournament, and every year they won" | збігів немає |
| l6 уривок 2 | "I jumped and hit the ball as hard as I could. They didn't get it" | збігів немає |
| l4 фінал (Oksana) | "While I was waiting for my turn, my dad was talking to my coach" | збігів немає |
| l4 intro (Ostap) | "While the fans were singing, our coach was shouting at us" | збігів немає |
| l3 фінал (Lesia) | "When I was seven, I couldn't run fast, and I didn't use to like sport" | збігів немає |
| l2 intro (оголошення) | "Running and jumping for ages 11–15. Beginners are welcome" | збігів немає |
| l5 Bannister | "he ran a mile (about 1,600 metres) in 3 minutes 59.4 seconds" | збігів немає |
| l5 Baiul | "In 1994, at the Winter Olympics in Lillehammer, she won a gold medal. She was the first athlete" | збігів немає |

## 8. Правки (зроблено, мінімальні)

1. l2 екран 6 (gaps): у `body` додано, що саме хоче знати Taras («How many times a week? How much money? …») — відсікає «How much do you train?».
2. l2 екран 11 (gaps): дистрактор `beginner` → `members` (було `{*member|coach|beginner}`, тепер `{*member|members|join}`).
3. l3 екран 9, l6 екран 8, boss task 3 (word «used»): заголовок «Write the missing word.» → «Complete the sentence with used to.» — відсікає liked / loved / began to.
4. l4 екран 8 (build): `answer` — масив із другим порядком «When it started to snow were you playing?»; плитки `Were` → `were`, пастка `Was` → `was`, `keepCase` прибрано (інакше з `keepCase` рушій не зарахував би порядок із великою літерою в середині; перевірено `SLID_LANG.check`: обидва порядки — true, пастка — false).
5. l5 екран 4 (gaps): дистрактор `taking` → `takes`.
6. l5 екран 6 (info): додано рядок підкреслень «<u>ath</u>lete, O<u>lym</u>pic, <u>he</u>ro» — опора для stress на екрані 8.
7. l5 екран 10 (word): `body` — «Ten girls ran the race, and they all finished…» (відсікає last), `answer: ["youngest", "third"]`, у `fbText` — примітка, що «the third» теж правда.
8. l4 екран 7 (word): заголовок «Write the missing word: was or were + not.».
9. Статус 7 уроків `draft` → `verified`; `meta.factcheck` і коментар-шапка оновлено.

Рекомендовано (не блокує): нічого.

## 9. Вердикт по уроках

| Урок | Вердикт |
|---|---|
| e7s5l1 | verified |
| e7s5l2 | verified (правки 1–2) |
| e7s5l3 | verified (правка 3; TQ-158 відкрите для вчителя) |
| e7s5l4 | verified (правки 4, 8) |
| e7s5l5 | verified (правки 5–7) |
| e7s5l6 | verified (правка 3) |
| e7s5l7 | verified (правка 3) |

Людині: TQ-158 (учителю англійської); `approved` — лише вчитель.
