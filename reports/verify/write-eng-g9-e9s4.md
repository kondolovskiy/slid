# Верифікація e9s4 «The media: the internet, TV and radio» (англ., 9 кл.)

verifier-e9s4, 2026-11-25. Скіл content-verify (+ «Англійська»). Файл `content/eng/g9-e9s4.js`. Кожне завдання розв'язано самостійно до звірки з `correct` / `answer`.

## Вердикт
Усі 7 уроків (l1–l7) → `verified`. Правок 2 (обидві мінімальні, нижче). `validate --section e9s4`: 0 помилок, 0 попереджень. `stats`: e9s4l2 readWordsPerScreen «нетипово для сім'ї» (z = 2,1) — урок з читанням, у межах профілю 7–9 (≤ 50), пояснення автора прийнято; далі — style-sync. Плейтест не запускався: у контейнері немає Python-модуля playwright → лише CI (job browser).

## Правки (зроблені)
1. **l6, екран 4 (gaps, Roksolana)**: «I wonder who {*the girl in the red coat is|is the girl in the red coat|…}» → друга правильна відповідь під ризиком: у непрямому питанні з who + be + іменна група «who is the girl in the red coat» може читатися з who як підметом (Swan PEU подає обидва порядки для «Who's the best player?» — за цитатою на форумі, сам текст відкрити не вдалося). Замінено на «I wonder why {*the girl in the red coat is|is the girl in the red coat|does the girl in the red coat} sad.» — why не може бути підметом, інверсія однозначно хибна (CD Grammar: «The reported clause is in statement form (subject + verb)»). fbText — «Why the girl in the red coat is sad».
2. **Вигадана передача «Music Box» → «Music Chat»** (9 входжень: l2 intro, читання, build, фінальні gaps, коментар-шапка). «Music Box» — справжній музичний телеканал, що мовив в Україні як Music Box UA / Music Box Ukraine до 10.05.2022, з 30.10.2023 — Music Box Polska для України (uk.wikipedia.org/wiki/Music_Box_UA; результат пошуку про NCTRB/IMI 2022). Учень сприйняв би вигадане ток-шоу як реальне. «Music Chat» — пошук українських ТБ-передач з такою назвою нічого не дав.
Ще: `status: "verified"` у 7 уроках, `meta.factcheck`, рядок «Статус» у шапці.

## Рекомендації (не блокують)
- l5 екран 5 (match): у body «What did the presenter of Quiz Time say?», а «Switch off your phones» на екрані 1 казав Mr Moroz. Можна «What did Mr Moroz and the presenter say?».
- l1 екран 5: «a talk show (also chat show)» — OALD дає обидва для BrE, CD chat show «UK (US talk show)». Для британської норми природніше «a chat show (also talk show)»; не помилка.

## Форми й норма (словники відкрито в цій сесії, curl)
| Твердження | Джерела | Вердикт |
|---|---|---|
| Reported yes/no: if / whether, statement order; «If is more common than whether» | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech («introduced by if or whether… The reported clause is in statement form (subject + verb)»); OALD wonder_1 https://www.oxfordlearnersdictionaries.com/definition/english/wonder_1 («wonder if, whether…») | ✅ |
| No backshift, якщо досі правда (TQ-144); Present simple reporting verb | CD Grammar той самий URL («We don’t need to change the tense in indirect speech if what a person said is still true or relevant»; «reporting verb in the present simple… if the original words are still true or relevant») | ✅ |
| told + object + to-inf.; not to; «Not: They said us to come» | CD https://dictionary.cambridge.org/grammar/british-grammar/tell («They told us to come back the next day. Not: They said us to come»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/tell («told me to stay in bed. NOT The doctor said me to stay in bed»); CD Grammar reported speech («warned us not to enter») | ✅ |
| asked + object + to-inf. | CD https://dictionary.cambridge.org/grammar/british-grammar/ask («ask + object + to-infinitive»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/ask («ask somebody to do something») | ✅ |
| wonder + wh- / if / whether | CD https://dictionary.cambridge.org/dictionary/english/wonder («I wonder what he is doing here», «wonder if»); OALD wonder_1 («I wonder who she is») | ✅ |
| chat show / talk show у BrE | CD https://dictionary.cambridge.org/dictionary/english/chat-show («(US also UK talk show)»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/chat-show («(British English) (also talk show North American English, British English)») | ✅ |
| presenter, host, quizmaster (ключ l1 word) | OALD presenter («a person who introduces the different sections of a radio or television programme»); OALD host_1 («a person who introduces a television or radio show, and talks to guests»); OALD quizmaster («(British English) a person who asks the questions in a quiz»); CD presenter, host | ✅ |
| Наголос: ˈchannel, preˈsenter, docuˈmentary, ˈepisode, ˈpodcast, ˈprogramme | CD (UK): /ˈtʃæn.əl/, /prɪˈzen.tər/, /ˌdɒk.jəˈmen.tər.i/, /ˈep.ɪ.səʊd/, /ˈpɒd.kɑːst/, /ˈprəʊ.ɡræm/ — https://dictionary.cambridge.org/dictionary/english/{channel,presenter,documentary,episode,podcast,programme}; OALD /ˈtʃænl/, /prɪˈzentə(r)/, /ˌdɒkjuˈmentri/, /ˈepɪsəʊd/, /ˈpɒdkɑːst/, /ˈprəʊɡræm/ — https://www.oxfordlearnersdictionaries.com/definition/english/{channel,presenter,documentary_1,episode,podcast,programme_1} | ✅ |
| programme — BrE | glossary/eng.md, facts/eng.md №11; CD та OALD вище | ✅ |
| Вигадані назви не збігаються з реальними укр. ЗМІ: Quiz Time, Bright Radio, School 5 Radio, Music Chat | WebSearch «"Bright Radio" OR "Quiz Time" Ukraine radio TV programme», «"Music Chat" TV show Ukraine» — збігів немає | ✅ |
| «Music Box» — вигадане ток-шоу | uk.wikipedia https://uk.wikipedia.org/wiki/Music_Box_UA (Music Box Ukraine, кінець мовлення 10.05.2022; Music Box Polska для України з 30.10.2023); WebSearch «Music Box UA телеканал» (Volia, 2015; NCTRB/IMI 2022) | ❌ → виправлено (правка 2) |

Друга незалежна опора для пункту про порядок «who is the girl…»: CUNY handout і Grammar Monster (з видачі пошуку) — стандарт лише «who X was»; британський Swan — за цитатою з форуму обидва порядки. Через розбіжність джерел — правка 1, а не ❌ автора.

## requires
e8s3l4 «She said she was tired: reported statements» і e8s3l5 «He told us that…: reporting the news» (said / told) — файл `content/eng/g8-e8s3.js`, status verified: справді вчать reported statements. e4s3l6, e5s2l3, e5s2l5, e6s8l5 — validate без помилок.

## Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| “Every morning, Grandad listens to the news on the radio” | збігів немає |
| “In each episode, the presenter talks to two young musicians” | збігів немає |
| “Send me your password, and I’ll give you 1,000 free coins” | збігів немає |
| “Our school is starting a radio, and it needs a name” | збігів немає |
| “The guests are my age, so I understand their problems” | збігів немає |

## Завдання → звідки відповідь (D-019) → вердикт
Позначення: Ен = екран уроку. Друга правильна перевірена в кожному gaps / choice / word / build.

| Урок · екран | Моя відповідь | Опора | Вердикт |
|---|---|---|---|
| l1 Е2 choice (hyp) | podcast = програма в інтернеті | здогадка | ✅ |
| l1 Е4 match | presenter–leads; podcast–download; radio station–radio; channel–TV | Е3; інших доречних пар немає | ✅ |
| l1 Е6 gaps | the news / weather forecast / quiz show / series | Е5 | ✅ |
| l1 Е7 stress | chan, sen, men, ep | Е3, Е5 (`<u>`), CD/OALD | ✅ |
| l1 Е8 word | presenter (+host, quizmaster) | Е3 | ✅ |
| l1 Е9 gaps | documentary / episode / presenter / podcast | Е3, Е5 | ✅ |
| l2 Е2 choice (hyp) | still true | здогадка | ✅ |
| l2 Е4 gaps | watches / is / listens / is | Е3 | ✅ |
| l2 Е5 choice | says she’s making | Е3 + e6s8l5 (says me — ні) | ✅ |
| l2 Е7 choice | Saturday 6 pm | текст на екрані | ✅ |
| l2 Е8 multi | guests her age; good questions | текст на екрані | ✅ |
| l2 Е9 build | обидва порядки в answer; «my» — пастка | Е3 | ✅ |
| l2 Е10 pick | listen | Е3 (he + -s) | ✅ |
| l2 Е11 gaps | is / on / says / was | Е3, Е6 (be on) | ✅ |
| l3 Е2 choice (hyp) | block, tell Mum | здогадка | ✅ |
| l3 Е4 multi | username, drawing | Е3 | ✅ |
| l3 Е6 sort | 3 polite / 3 not | Е5 | ✅ |
| l3 Е7 gaps | password / username / block / post | Е3, Е5 | ✅ |
| l3 Е8 choice | Sure! But let me ask Myroslava… | Е5 | ✅ |
| l3 Е9 word | block (mute / report не зупиняють листування — контекст відсікає) | Е3 | ✅ |
| l3 Е10 gaps | Don’t share / Ask / capitals / tell | Е5, e5s2l5 | ✅ |
| l4 Е2 choice (hyp) | used | здогадка | ✅ |
| l4 Е4 gaps | was / I was / I was working (теперішньої форми серед хибних немає — TQ-144) | Е3 | ✅ |
| l4 Е6 choice | if I was | Е5 | ✅ |
| l4 Е7 multi | liked (if), liked (whether), like — усі три в ключі | Е5 | ✅ |
| l4 Е8 pick | was | Е3 | ✅ |
| l4 Е9 build | She asked me where I went to school. (один порядок) | Е3 | ✅ |
| l4 Е10 word | if / whether — обидва | Е5 | ✅ |
| l4 Е11 gaps | if / I used / where I took / whether | Е3, Е5 | ✅ |
| l5 Е2 choice (hyp) | not to talk | здогадка | ✅ |
| l5 Е4 gaps | to sit / not to take / to wait | Е3 | ✅ |
| l5 Е5 match | пари за дієсловом, друга пара неможлива | Е3 | ✅ |
| l5 Е6 choice | asked us not to be late | Е3 | ✅ |
| l5 Е8 sort | 3 питання / 3 прохання | Е7 | ✅ |
| l5 Е9 word | not to | Е3 | ✅ |
| l5 Е10 build | обидва порядки (put our hands up / put up our hands) в answer | Е3 | ✅ |
| l5 Е11 gaps | told / not to / to answer / to clap | Е3 | ✅ |
| l6 Е2 choice (hyp) | the story happens | здогадка | ✅ |
| l6 Е4 gaps | (після правки) the girl… is / if / happens | Е3 | ✅ після правки 1 |
| l6 Е6 choice | why it was late | Е5 | ✅ |
| l6 Е7 choice | to post their ideas | текст на екрані | ✅ |
| l6 Е8 multi | Myroslava — boring; Ostap — Bright Radio | текст на екрані | ✅ |
| l6 Е9 build | I wonder what time the first show starts. (один порядок) | Е3 | ✅ |
| l6 Е10 pick | is | Е3 | ✅ |
| l6 Е11 gaps | opened / whether / to draw / what you will | Е3, Е5, l5 | ✅ |
| l7 T1 gaps | presenter / episode / documentaries | l1 | ✅ |
| l7 T2 choice | says his favourite… | l2 | ✅ |
| l7 T3 multi | polite; block and report | l3 | ✅ |
| l7 T4 build | She asked me where we recorded the podcast. | l4 | ✅ |
| l7 T5 word | if / whether | l4 | ✅ |
| l7 T6 gaps | to switch / not to open | l5 | ✅ |
| l7 T7 choice | I wonder what our listeners think. | l6 | ✅ |

## Педагогіка, мова, BrE
- Проблема → hyp → теорія в кожному уроці; boss — лише з l1–l6 (`pre`).
- Пояснення англійською — короткі речення, не складніші за B1; IPA, «Listen / You hear», A/B/C в opts, позиційних посилань — немає.
- Діалоги — репліками в body, без type "dialog" (D-056).
- Безпека в мережі — порадами (пароль, username, block / report, дорослий), без страшилок; справжніх соцмереж, каналів, блогерів немає (після правки 2).
- BrE: programme, colours; AmE-лексики й правопису не знайдено. Kyiv, Odesa, Lviv — за глосарієм.
