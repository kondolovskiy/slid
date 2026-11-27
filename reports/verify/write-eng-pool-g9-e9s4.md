# Верифікація: пул pe9s4 (англійська, 9 кл., розділ e9s4 «The media: the internet, TV and radio»)

Верифікатор: verifier-pe9s3-pe9s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g9-e9s4.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s4.md. Опора: уроки `content/eng/g9-e9s4.js` (verified) і попередні розділи g4–g8, e9s1–e9s3. Еталони: reports/verify/write-eng-pool-g8-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і других правильних відповідей я не знайшов. TQ-144 не порушено: форма без backshift ніде не стоїть хибним варіантом. if і whether ніде не стоять в одному пропуску. told і asked + to ніде не протиставлені. Зробив правки в 13 вправах: 1 канон уроку (a03), 6 копій рамок уроків (a12, a31, a40, a48, a49, a60), 1 дрібний збіг із фіналом l2 (a16), 4 hint, що видавали відповідь або структуру (a07, a21, a22, a25), 1 автор допису в 3-й особі (a22 body), 1 контекст (a32). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI.

## 1. Програма, `src`
`sources`: лише `mpim`, `program: true`, title і url — як у facts/eng.md ✅. PDF завантажив у цій сесії: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7). Сторінки звірив за колонтитулами:
- с. 33, 5.2.3 «9-ий клас»: «Засоби масової інформації — Інтернет, телебачення і радіо; Спілкування у мережі Інтернет; Улюблена радіо-телепередача» → l1, l2 read і write, l3 ✅;
- с. 35, 5.4 граматика B1: «Present simple: … with reporting and speech act verbs» (l2 gram), «Reported ‘yes/no’ and ‘wh-’ questions», «Reported thought with ‘wonder’», «Reported requests and commands» → l4–l6 ✅. a55–a57 (l6 read) мають `mpim с. 35`. Це допустимо: читання тренує wonder. Альтернатива — с. 33 «Спілкування у мережі», міняти не обов'язково.

## 2. Факти
Реальних фактів у пулі немає. Передачі й медіа вигадані з уроків: Quiz Time, Music Chat, Lviv Today, School 5 News і School 5 Radio, Bright Radio. Нові назви — лише юзернейми DinoKing і BanduraStar. Справжніх каналів, соцмереж і брендів немає ✅. Безпека в мережі — порадами з l3, без страшилок ✅.

## 3. Форми й наголос (curl у цій сесії)
- `stress` a06–a08: CD https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>. Наголошений склад у UK і US однаковий: podcast ˈpɒd.kɑːst, US ˈpɑːd.kæst / OALD podcast_1; presenter prɪˈzen.tər / prɪˈzentə(r); programme ˈprəʊ.ɡræm / programme_1; documentary ˌdɒk.jəˈmen.tər.i / ˌdɒkjuˈmentri; channel ˈtʃæn.əl / channel_1; episode ˈep.ɪ.səʊd; detective dɪˈtek.tɪv; forecast ˈfɔː.kɑːst, US ˈfɔːr.kæst / forecast_1; computer kəmˈpjuː.tər ✅. magazine не взято (BrE і AmE відрізняються) ✅. Підкреслення `<u>` в уроках: podcast, presenter, programme, channel, documentary, episode — e9s4l1; detective — e8s5; forecast — e5s5; computer — e4s5, e5s6 ✅.
- Граматику звіряв за CD Grammar «Reported speech: indirect speech», «tell», «ask» (URL — у шапці уроку e9s4, відкриті верифікатором розділу). Додатково в цій сесії: CD report «report someone to someone» (https://dictionary.cambridge.org/dictionary/english/report) → a24 ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

`SLID_LANG.check(solution)` зараховує всі ключі. Перебір `build` (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s3-4/bin/chk.mjs`) зараховує лише ключі a14, a37, a45, a52. Лексика (`lex.mjs`): поза уроками лише liking (дистрактор), spent, юзернейми й Artem (канон: однокласник Mariia) ✅.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | the news; weather forecast | = | l1 #5 | ні | ✅ |
| a02 match | 4 пари | = | l1 #5 | перебрав усі праві варіанти, другої пари немає | ✅ |
| a03 word | presenter / host | = | l1 #3, #8 | ❌ канон: у l2 #8 ведучий Music Chat — «he’s really funny», а тут «a woman leads Music Chat» | → «a man… He talks… He’s the» |
| a04 gaps | channel; chat show; podcast | = | l1 #3, #5 | series не підходить до «presenter talks to famous scientists»; talk show не серед варіантів | ✅ |
| a05 pick | [channel] → series | = | l1 #3, #5 | ні | ✅ |
| a06 stress | §3 | = | l1 #3 | ні | ✅ |
| a07 stress | §3 | = | l1 #3, #5 | hint «In one word, the strong part isn’t at the start» видавав структуру відповіді (як pe8s3 a06) | ⚠️ → навігація до підкреслень у двох списках |
| a08 stress | §3 | = | §3 | hint загальний | ✅ |
| a09 gaps | programme; podcast | = | l1 #3 | ні | ✅ |
| a10 gaps | series; episode | = | l1 #5 | ні | ✅ |
| a11 gaps | channel; presenter; documentary; the news | = | l1 #3, #5 | guest не веде quiz. Тато Emma є в уроках (e7s1, e11s6: «Emma’s dad») | ✅ |
| a12 gaps | (нова) is; likes | = | l2 #3 | копія рамки l2 #4 («Daryna says she {watches|watch|watching}… She says the presenter {is|are|be}…») | ⚠️ → «the science quiz {is…} on every Wednesday. She says she {likes…} the presenter: she’s a scientist» (узгоджено з a17, a18) |
| a13 choice | Bohdan says he watches… his dad | = | l2 #3, #4 | ні | ✅ |
| a14 build | Kyrylo says he loves history podcasts. | = | l2 #3 | перебір: лише ключ | ✅ |
| a15 pick | [says] me | = | l2 #5 | ні | ✅ |
| a16 gaps | is; was; says; tells | = | l2 #3 | «too tired for TV» майже дослівно повторювало фінал l2 («too busy for TV») | ⚠️ → «at a tennis match» (Bohdan і теніс — канон) |
| a17 choice | Wednesday 5 pm | = | l2 #8 | ні | ✅ |
| a18 multi | [0,1] | = | l2 #9 | ні | ✅ |
| a19 choice | the stories make him want to visit | = | l2 #8 | ні | ✅ |
| a20 gaps | on; because | = | l2 #7 | ні | ✅ |
| a21 gaps (hint) | says; about; tells | = | l2 #3, #7 | hint «what is the show about?» видавав *about* (п. 17) | ⚠️ → навігація до екрана «Talk about a programme» |
| a22 gaps (hint) | says; on; listens; was | = | l2 #3, #7 | body «Daryna writes…», а в тексті «Daryna says she watches…» (про себе в 3-й особі). Hint «When is a programme on?» видавав *on* | ⚠️ → «Andrii writes for the school newspaper» (газета Andrii — e9s3l6); hint — навігація |
| a23 gaps | username; password | = | l3 #3 | ні | ✅ |
| a24 word | reports / reported | = | l3 #3 | обидві в ключі | ✅ |
| a25 pick | [post] → block | = | l3 #3, #5 | hint «Which word means “stop someone sending you messages”?» вказував, де помилка | ⚠️ → «Check each word with the tips “Stay safe online”» |
| a26 choice | Could you…, please? | = | l3 #5, #6 | ні | ✅ |
| a27 multi | [0,1] | = | l3 #3 | ні | ✅ |
| a28 choice | Block and report… tell an adult | = | l3 #3 («Someone makes you feel bad? Block… report… tell an adult»), #5 («You don’t have to answer») | Варіант A «Write back politely» за правилом уроку не найкращий; у задачі «best» | ✅ |
| a29 gaps | Don’t share; Use | = | l3 #3, фінал | ні | ✅ |
| a30 gaps | thank you; Don’t write; Ask | = | l3 #5 | ні | ✅ |
| a31 gaps | (нова) profile; username; post; block | = | l3 #3, #4 (profile = a page about you), #5 | копія рамки l3 #7 (Oksana → Dmytro; password · username · block · post з тими самими трійками варіантів і в тому ж порядку) | ⚠️ → Taras → Zlata, профіль музичного клубу; на місці *username* password і address відсіяні умовою «Everyone in the club can see your…» |
| a32 gaps | my name was; I was | = | l4 #3 | Quiz Time — шоу для підлітків у студії в Kyiv (l2, l5), Dmytro 11 і з села | ⚠️ → «After a children’s quiz show» |
| a33 word | if / whether | = | l4 #5 | обидва в ключі | ✅ |
| a34 choice | where she practised | = | l4 #3 | «she did practise» — як «I did use» в уроці | ✅ |
| a35 pick | [did] | = | l4 #3 | ні | ✅ |
| a36 multi | [0,1] | = | l4 #5 | «if I am going» серед варіантів немає | ✅ |
| a37 build | Polina asked me where I bought my comics. | = | l4 #3 | плитки «buy» немає, тож TQ-144 не зачеплено. Перебір: лише ключ | ✅ |
| a38 gaps | if; I started | = | l4 #3, #5 | ні | ✅ |
| a39 gaps | whether; what I thought; where we were going | = | l4 #3, #5 | «what I would like to be a presenter» неграматичне | ✅ |
| a40 gaps | (нова) when the club started; whether; which comic I liked; if | = | l4 #3, #5 | копія рамки фіналу l4 («asked {if|that|what}… asked {whether|what|who} I wanted to… one day. I said…» — ті самі шаблони варіантів і кінцівка) | ⚠️ → стаття Artem про клуб коміксів. *how* у 4-му пропуску свідомо не взято («asked how he could put…» граматичне) — замість нього *what* |
| a41 gaps | to speak; not to eat | = | l5 #3 | ні | ✅ |
| a42 match | 4 пари | = | l5 #3, #4 | пари однозначні за дієсловом | ✅ |
| a43 word | not to | = | l5 #3, #9 | ні | ✅ |
| a44 choice | asked Oksana to turn on | = | l5 #3 | ні | ✅ |
| a45 build | Mum told Dmytro not to play online games after ten. | = | l5 #3 | перебір: лише ключ | ✅ |
| a46 gaps | if; to stand; not to look | = | l5 #3, #7 | «know» серед варіантів немає | ✅ |
| a47 gaps | to be; not to open | = | l5 #3 | ні | ✅ |
| a48 gaps | to show; told; not to stop | = | l5 #3 | копія рамки фіналу l5 ({told|said|says} → {not to|don’t|no to} → {to answer|answer|answering} у тому ж порядку) | ⚠️ → інший порядок і варіанти (asked Myroslava {to show…} → {told|said|says} → {not to stop|don’t stop|to don’t stop}); hint — навігація |
| a49 gaps | told; not to talk; if; to read | = | l5 #3, #7 | контекст повторював фінал l5 (клас у студії, manager told us…, presenter asked…) | ⚠️ → радіоведуча з Poltava в eco club Oksana (канон); «if we recycled» — варіанта з present немає |
| a50 choice | where the detective lives | = | l6 #3 | ні | ✅ |
| a51 gaps | if; Snowy is | = | l6 #3 | Snowy — кішка Emma (канон) | ✅ |
| a52 build | I wonder where Mariia gets her ideas. | = | l6 #3 | перебір: лише ключ | ✅ |
| a53 pick | [does] | = | l6 #3 | ні | ✅ |
| a54 gaps | started; if; would | = | l6 #5 | «will» серед варіантів немає. «was be», «is be» неграматичні | ✅ |
| a55 choice | what people think of episode 2 | = | l6 #3 | ні | ✅ |
| a56 multi | [0,2] | = | l6 #3, l5 #3 | ні | ✅ |
| a57 choice | Halyna isn’t sure about the colours | = | l6 #3 | Halyna малює (канон) | ✅ |
| a58 gaps | who; if | = | l6 #3 | порядок із who + be задано текстом (п. 16) | ✅ |
| a59 gaps | what you think; to send; which song you like | = | l6 #3, l5 #3 | ні | ✅ |
| a60 gaps | (нова) we recorded; if; to bring; which photo you will like | = | l6 #3, #5, l5 #3, l4 #3 | копія рамки фіналу l6 («Thanks for your comments! X, you wondered… Y asked… Z asked/told me to… I wonder {what you will|what will you|will what you}…») | ⚠️ → інший порядок речень і новий останній пропуск. «we record» (TQ-144) серед варіантів немає |

## 5. Інше
- **Канон героїв:** Uncle Roman (Taras), Zlata і бандура, Mr Hnatiuk, Myroslava, Ostap, Ms Kvitka (Lviv), Grandad Mykola й радіо, Halyna малює, eco club Oksana, Snowy, Artem (однокласник Mariia), сестра Daryna, Bohdan і теніс. Після правок суперечностей немає. Нових імен немає.
- **BrE:** programme, chat show, kilometres, flat ✅. Без звуку: є «sounds really good» (a56), але це оцінка, не аудіювання ✅. IPA, «Listen», A/B/C і позиційних посилань немає ✅.
- **Авторське право:**

| Фрагмент | Запит | Результат |
|---|---|---|
| a18 «The teams are pupils like me, and their robots are really clever» | той самий у лапках | збігів немає |
| a19 «The presenter tells stories about old Kyiv, and I always want to visit the places» | той самий у лапках | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe9s4` — 0 помилок, 0 попереджень (до і після правок). `personalization-qa --pool pe9s4`: 6 уроків, 60 вправ, пари (урок, sk) ≥ 3, рівні 1–3. `test-answer-ui.py` — модуля playwright у контейнері немає, прогін буде в CI.

## 7. Правки (зроблені)
a03, a07, a12, a16, a21, a22, a25, a31, a32, a40, a48, a49, a60 і шапка й `status`/`factcheck`. id вправ не змінювались.
Рекомендація (не блокує): `src` a55–a57 → «mpim с. 33» («Спілкування у мережі»), якщо куратор вважає читання коментарів темою, а не граматикою.

**Вердикт: pe9s4 — verified.** Відкритих ❌ і ⚠️ немає.
