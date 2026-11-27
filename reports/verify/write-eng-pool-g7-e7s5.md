# Верифікація: пул pe7s5 (англійська, 7 кл., розділ e7s5 «Sport: competitions and clubs»)

Верифікатор: verifier-pe7s5-pe7s6, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s5.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g7-e7s5.md. Опора — уроки `content/eng/g7-e7s5.js` (усі verified, reports/verify/write-eng-g7-e7s5.md) і попередні розділи. Еталони — reports/verify/write-eng-pool-g6-*.md, -g7-e7s1…s4.md.

**Вердикт: пул придатний, `status: "verified"`.** Ключі 74/74 збіглися з моїми розв'язками. Других правильних відповідей і граматично правильних дистракторів я не знайшов. Реальні факти взято лише з e7s5l5. Зробив 6 правок (a02, a17, a28, a29, a35, статус). Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md. `srcPage` і `adapted` немає ✅. Сторінки (с. 32 — тема «Спорт» і функції 7 кл.; с. 34 — superlatives + to-infinitive; с. 35 — used to, Past Continuous) звірено з тим самим PDF МП-ІМ, що й у звітах e7s1–e7s4 (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf). `src` вправ відповідають урокам: l1, l2, l6 read/write, l5 cult/phon — с. 32; l5 gram/write — с. 34; l3, l4, l6 gram — с. 35 ✅. Для l2 gram (join без to) стоїть с. 32: це лексична граматика теми, як і в уроці. Не блокує.

## 2. Факти
Реальні факти є лише в a56–a59, a63, a65 і всі взяті з e7s5l5. Цей урок верифіковано з двома джерелами на кожен факт (reports/verify/write-eng-g7-e7s5.md). Нових реальних фактів пул не додає.

| Твердження | Опора в уроці | Вердикт |
|---|---|---|
| Baiul — figure skating, олімпійське золото 1994, Lillehammer | e7s5l5 intro | ✅ |
| Bubka — pole vault, перший стрибнув 6 м, 1985 (a56 «became the first person») | e7s5l5 intro | ✅ (became = was, факт той самий) |
| Bannister — England, 1954, миля менш ніж за 4 хв, Oxford | e7s5l5 choice | ✅ |
| Mahuchikh — Dnipro, high jump, світовий рекорд 2.10 у Paris 2024, олімпійська чемпіонка | e7s5l5 gaps | ✅ |
| a65 «the first woman to jump 2.10 metres» | e7s5l5 «she jumped 2.10 metres… the first woman to jump so high» — виводиться | ✅ |

Герої відповідають канону glossary/eng-heroes.md: Zlata — сестра Тараса, кішка в сім'ї є (e5s1); Polina — Kharkiv; Artem і Danylo — оточення Mariia; Kyrylo — history; Bohdan — теніс; Amelia і Ruby — плавання; Mr Hnatiuk — тренер Тараса; Sofiia — сестра Andrii; річка в Zelena Dolyna є ✅. Вигадане (Hill School, Kyiv Junior Swimming Club, ціни в £) не приписує правил реальним установам ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
`gaps`, `pick`, `stress`, `word`, `match`, `build`: `SLID_LANG.solution` зараховується через `check(…, "en")`. Для `build` я перебрав `SLID_LANG.check` по всіх перестановках усіх підмножин tiles + extra (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe7s5-6/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?` ✅.

| Вправа | Моя відповідь | Опора | Друга правильна / дистрактори | Вердикт |
|---|---|---|---|---|
| a01 gaps | second; silver | l1 #5–6 | two / the two — неграматичні | ✅ |
| a02 match | race / match / tournament | l1 #3 | перебрав усі праві — ні | ⚠️→✅ swimmers, sixteen (немає в уроках) → «Six girls», «Eight teams play for three days» |
| a03 word | part | l1 #5 | took place — безглуздо | ✅ |
| a04 gaps | took part; championship; third | l1 #3, #5, фінал l1 | tournament — для ігор (l1 #3) | ✅ |
| a05–a07 stress | <u>me</u>dal, compe<u>ti</u>tion, <u>tour</u>nament, <u>cham</u>pion, <u>sil</u>ver | l1 #3, #5 `<u>` | у кожному наборі є compe<u>ti</u>tion (3-й склад) | ✅ (словники — §4) |
| a08 choice | They won a match. | текст | ні | ✅ |
| a09 multi | [0,2] | текст + l1 #5 | ні | ✅ |
| a10 choice | bronze + silver | текст + l1 #5 | ні | ✅ |
| a11 gaps | part; first; gold | l1 #5 | ні | ✅ |
| a12 word | silver | l1 #5 | ні | ✅ |
| a13 gaps | tournament; matches; final; second | l1 #3, #5 | race / finals / champion — хибні за змістом чи формою | ✅ |
| a14 gaps | coach; beginner | l2 #2, #3 | ні | ✅ |
| a15 word | twice (+ two times) | l2 #3 | «two times» у ключі | ✅ |
| a16 gaps | joined; training; coach | l2 #3, фінал l2 | joined to — хибне (l2 pick) | ✅ |
| a17 choice | Yes, they can. | текст | ні | ⚠️→✅ swimmers → «Kyiv Junior Swimming Club», «Only children who can swim well can join.» |
| a18 choice | the judo club | текст | ні | ✅ |
| a19 multi | [1,3] | текст | ні | ✅ |
| a20 match | once a week / on Thursdays / £10 / Yes, they can | l2 #5 | «How often» ↔ «On Thursdays» не дає повної біекції | ✅ (meet — базове дієслово, спірне автора п. 4 — прийнятно) |
| a21 gaps | often; much; bring | l2 #5 | ні | ✅ |
| a22 choice | How much does it cost? | l2 #5 | ні | ✅ |
| a23 build | Can beginners join your club? | l2 #5 | 325 порядків — лише ключ | ✅ |
| a24 gaps | member; train | l2 #3 | ні | ✅ |
| a25 build | My sister would like to join your judo club. | l2 build | 325 — лише ключ | ✅ |
| a26 gaps | joined; coach; training; cost | l2 #3, #5 | ні | ✅ |
| a27 gaps | join; to play | l2 #3, build | ні | ✅ |
| a28 pick | [to] | l2 pick | — | ⚠️→✅ hint «Look at join…» указував на слово-відповідь (pitfalls п. 17) → «One word isn’t needed. Read each verb and the word after it.» |
| a29 pick | [to] після join | l2 pick | — | ⚠️→✅ hint «Look at join» видавав відповідь → «Two are correct: to + verb. Which one is wrong?» |
| a30 gaps | used to; used to | l3 #3 | use to / uses to — хибні (l3 #3) | ✅ |
| a31 gaps | use; didn’t | l3 #6 | uses / wasn’t — хибні | ✅ |
| a32 word | used | l3 #3, word | ні | ✅ |
| a33 gaps | use; Did; did | l3 #6 | uses / using / was — хибні; «used» серед варіантів немає | ✅ |
| a34 pick | [use] | l3 pick | — | ✅ |
| a35 word | **див. нижче** | l3 #6 | — | ❌→✅ переформульовано |
| a36 choice | No, he doesn’t. | l3 #3 | ні | ✅ |
| a37 multi | [1,2] | текст | ні | ✅ |
| a38 choice | He goes to judo twice a week. | текст | ні | ✅ |
| a39 match | 3 пари | l3 #6 | «Yes, they did. Now they live in Lviv» — лише до they | ✅ |
| a40 build | Did you use to go skating on the river? | l3 build | 13 699 — лише ключ (Do / keepCase) | ✅ |
| a41 gaps | didn’t; used to | l3 #3, #6 | ні | ✅ |
| a42 gaps | was running; was taking | l4 #3 | ні | ✅ |
| a43 pick | [was] | l4 pick | — | ✅ |
| a44 word | weren’t (+ were not) | l4 #5 | ні | ✅ |
| a45 gaps | Were; were | l4 #5 | Did / did — неграматичні з -ing | ✅ |
| a46 gaps | was playing; was taking | l4 #5 | is playing — теперішній у минулій історії | ✅ |
| a47 choice | Because I was waiting… | l4 #5 | ні | ✅ |
| a48 build | Was your coach watching the race? | l4 #5 | 325 — лише ключ | ✅ |
| a49 gaps | Were; wasn’t; were singing | l4 #5 | «No, I didn’t» на Were…? — неграматичне | ✅ |
| a50 choice | She was reading a book. | текст | ні | ✅ |
| a51 multi | [0,3] | текст | «raining all day» — хибне (дощ почався пізніше) | ✅ |
| a52 choice | Because she was talking to Ruby. | текст | ні | ✅ |
| a53 gaps | to finish; to get | l5 #3 | finished / got без who — неграматичні | ✅ |
| a54 word | run | l5 #3 | ні | ✅ |
| a55 build | She was the youngest athlete to win a medal. | l5 #3 | 13 699 — лише ключ | ✅ |
| a56 gaps | became; to jump | l5 #6, #3 | ні | ✅ |
| a57 choice | Oksana Baiul | l5 intro | ні | ✅ |
| a58 match | 4 пари | l5 intro, choice, gaps | ні | ✅ |
| a59 gaps | England; 1954; Dnipro; Paris | l5 choice, gaps | ні | ✅ |
| a60–a62 stress | <u>ath</u>lete, O<u>lym</u>pic, <u>he</u>ro, <u>cham</u>pion, compe<u>ti</u>tion, <u>me</u>dal | l5 #6 `<u>`, l1 | у кожному наборі є O<u>lym</u>pic | ✅ |
| a63 gaps | won; became | l5 #6 | ні | ✅ |
| a64 build | Ilona was the first girl from our club to win a gold medal. | l5 #3 | 1 956 — лише ключ | ✅ |
| a65 gaps | broke; became; to jump; to win | l5 #6, #3 | ні | ✅ (рамка близька до l5 gaps — §5) |
| a66 choice | Ostap’s team | текст | ні | ✅ |
| a67 multi | [0,2] | текст | ні | ✅ |
| a68 choice | how Taras did much better than before | текст | ні | ✅ |
| a69 order | weather → while → Then → Suddenly → In the end | l6 #5 | порядок однозначний | ✅ |
| a70 gaps | was snowing; Then; in the end | l6 #5 | While / Because + крапка — фрагменти | ✅ |
| a71 gaps | to win; think; best | l5 #3, l6 #5 | ні | ✅ |
| a72 match | 4 пари | l3, l4, l5, l6 | ні | ✅ |
| a73 word | used | l6 word | ні | ✅ |
| a74 gaps | used to; were swimming; to win | l3, l4, l5 | ні; кома після while-частини ✅ | ✅ |

**a35 і TQ-158.** Було: `before: "Taras didn’t"`, ключ `use`. Відповідь «used» (форму «didn’t used to» CD Grammar називає поширеною) рушій оцінює як «Almost», тобто як неправильну. Отже, оцінка вправи залежала від відкритого TQ-158. Якщо вчитель обере варіант Б, вправа покарає за прийнятну форму. Пропуск я переніс на заперечення: `before: "Taras"`, `after: "use to like running."`, ключ `didn’t`, `contractions: true`. Опора — l3 #6 «not → didn’t use to». Перевірив `check`: didn’t / didn't / did not — true; did, used, don’t — false. Тепер вправа однаково чесна за будь-якої відповіді на TQ-158. Hint не видає відповідь («Which rule is for not?»), steps доповнено.

**Покриття:** 6 уроків, 74 вправи. Кожна пара (урок, sk) має ≥ 3 вправи рівнів 1–3. У вправ рівнів 2–3 є `hint`. Boss l7 без вправ ✅. `personalization-qa --pool pe7s5` — без помилок.

## 4. Форми, BrE, лексика, авторське право
- **Наголос (curl у цій сесії).** CD UK (https://dictionary.cambridge.org/dictionary/english/<word>): medal «/ˈmed.əl/», competition «/ˌkɒm.pəˈtɪʃ.ən/», tournament «/ˈtʊə.nə.mənt/», champion «/ˈtʃæm.pi.ən/», silver «/ˈsɪl.vər/», athlete «/ˈæθ.liːt/», olympic «/əˈlɪm.pɪk/», hero «/ˈhɪə.rəʊ/». OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<word>): «/ˈmedl/», «/ˌkɒmpəˈtɪʃn/», «/ˈtʊənəmənt/», «/ˈtʃæmpiən/», «/ˈsɪlvə(r)/», «/ˈæθliːt/», «/ˈhɪərəʊ/»; Olympic — OALD search https://www.oxfordlearnersdictionaries.com/search/english/?q=olympic «/əˈlɪmpɪk/» і Wiktionary RP «/əˈlɪmpɪk/» (https://en.wiktionary.org/w/index.php?title=Olympic&action=raw). Ключі збігаються ✅.
- **used to:** CD Grammar (https://dictionary.cambridge.org/grammar/british-grammar/used-to): «The negative of used to is most commonly didn’t use(d) to… Both forms are common, but many people consider the form with the final -d to be incorrect». У пулі форми з -d як хибного варіанта після did / didn’t тепер немає. a30, a41, a74 «use to» без did — хибні за правилом уроку (l3 #3 «Not: I use to play»), TQ-158 цього не стосується ✅.
- **Лексика:** звірив скриптом з g4–g6, e7s1–e7s4 і e7s5 до `lesson` вправи включно. Після правок лишилося тільки ім'я Artem (канон) ✅.
- **BrE:** sport / sports club, holidays не вжито, £. AmE-правопису, IPA, A/B/C і «Listen» немає ✅.
- **Копії уроків:** 6-грами проти g4–g11. Збігаються формули інструкцій і факти з e7s5l5. a65 повторює рамку l5 gaps (Mahuchikh broke / became / the first woman to jump), але з новим контекстом (текст Мирослави, «the youngest athlete from Lviv»). Факти в пулі можна брати лише з уроку, тож лишаю. Не блокує.
- **Авторське право:** WebSearch з лапками нічого не знайшов: «I used to come last in the school race every year» (a68), «Then my cousin took me to a judo club» (a38), «While I was waiting for the start, I was talking to» + «I started late» (a52) ✅.

## 5. Правки (зроблені)
1. a02 — right[0] «Six girls swim 50 metres…», right[2] «Eight teams play for three days…» (swimmers, sixteen не було в уроках; pitfalls п. 20).
2. a17 — «Kyiv Junior Swimming Club», третій варіант «Only children who can swim well can join.» (swimmers).
3. a28, a29 — hint без вказівки на слово-відповідь (pitfalls п. 17).
4. a35 — пропуск перенесено на didn’t, щоб оцінка не залежала від TQ-158.
5. `status: "verified"`, `meta.factcheck` і шапка — посилання на цей звіт.

Рекомендація без правки: hint a07 і a06 («Four words have the strong part at the start…») підказує структуру набору. Так само зроблено й в інших пулах 7 кл., не блокує.

## 6. Прогін
`node tools/validate.mjs --pool pe7s5` — 0 помилок, 0 попереджень (після правок). `node tools/personalization-qa.mjs --pool pe7s5` — без помилок. Перебір `check` після правок: усі `solution` зараховуються, build приймає лише ключі. Браузерний `test-answer-ui.py --pool` — у CI.

**Вердикт по пулу: verified.** Людині: TQ-158 лишається відкритим для вчителя. Пул від нього більше не залежить.
