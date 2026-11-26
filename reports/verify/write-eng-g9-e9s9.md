# Верифікація: write-eng-g9-e9s9 (e9s9 «Let’s discuss: agreeing and disagreeing», eng, 9 кл.)

Верифікатор: verifier-e9s9, 2026-11-26. Скіл content-verify (+ розділ «Англійська»). Розділ не писав.
Файл: content/eng/g9-e9s9.js. 7 уроків (l1–l6 + boss l7).

**Вердикт: verified** — усі 7 уроків. Правок: 4 (1 критична — друга правильна відповідь; 3 дрібні). Людині: нічого блокувального; плейтест — лише CI (у контейнері немає Python-модуля playwright).

## 1. Факти
Фактів про країни, дат і чисел немає (усе — думки героїв; «about 200 books» — досвід Bohdan). Перевірялися форми й мовна норма.

## 2. Форми й норма (словники, відкриті в цій сесії через curl)
| Твердження в уроці | Джерело 1 | Джерело 2 | Вердикт |
|---|---|---|---|
| up to a point = partly (B2) | CD https://dictionary.cambridge.org/dictionary/english/up-to-a-point — «B2 partly, or to a limited degree» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/point_1 — «up to a (certain) point: to some extent… but not completely. I agree with you up to a point.» | ✅ |
| I couldn’t agree more = I agree 100% | CD https://dictionary.cambridge.org/dictionary/english/couldn-t-agree-disagree-more — «you mean that you agree… completely» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/agree_1 — «‘I couldn't agree more!’ (= I completely agree)» | ✅ |
| I see your point, but… | CD https://dictionary.cambridge.org/dictionary/english/point — «see someone's point: Yes, I can see your point, but I still disagree with you.» | там само «take your point»; OALD agree_1 «Express Yourself: Agreeing» | ✅ |
| Personally — your opinion (B1) | CD https://dictionary.cambridge.org/dictionary/english/personally — «B1 used when you give your opinion» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/personally — «used to show that you are giving your own opinion» | ✅ |
| Actually — in fact, surprise, correcting | CD https://dictionary.cambridge.org/dictionary/english/actually — «B1 …surprising»; «correcting what someone else has said» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/actually — «correct somebody in a polite way» | ✅ |
| Honestly — telling the truth | CD https://dictionary.cambridge.org/dictionary/english/honestly — «used to emphasize that you are telling the truth» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/honestly (стаття відкрита, дефініція не витягнута grep) | ✅ (CD дослівно) |
| Firstly B2 → у розділі First | CD https://dictionary.cambridge.org/dictionary/english/firstly — levels ["B2"] | OALD https://www.oxfordlearnersdictionaries.com/definition/english/firstly | ✅ |
| However (despite this) A2, нове речення + кома | CD https://dictionary.cambridge.org/dictionary/english/however — «A2 despite this: …However, there are others.» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/however — Language Bank «Ways of saying ‘but’» | ✅ |
| In addition — one more idea (B1) | CD https://dictionary.cambridge.org/dictionary/english/addition — «in addition (to) B1 as well (as)» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/addition — «used when you want to mention another person or thing after something else» | ✅ |
| Although: підрядне + головне; кома, коли although-частина перша; не «Although…, but» | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/although-or-though — «needs a main clause»; «When the though/although clause comes before the main clause, we usually put a comma» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/although — «Although the sun was shining, it wasn't very warm.» | ✅ |
| so — result; so that — purpose; that можна опустити | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/so-that — «We often leave out that after so in informal situations» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/so_3 — «so … used to show the reason»; «She worked hard so that everything would be ready in time» | ✅ (OALD має й so (that) для результату — у розділі so that ніде не стоїть у кошику result, конфлікту немає) |
| both … and + plural verb; They both wanted… (mid position) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/both — «Both … and as a linking expression»; «Both: position… They both wanted to sell the house» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/both_1 — «both… and… Both his mother and his father will be there» | ✅ (4 порядки build — коректно) |
| either … or — one of the two | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/either-or — «We use either… or … to connect» | OALD https://www.oxfordlearnersdictionaries.com/definition/english/either_2 — «used to show a choice of two things» | ✅ |
| Sorry to interrupt, but… | OALD https://www.oxfordlearnersdictionaries.com/definition/english/interrupt — «Sorry to interrupt, but there's someone to see you.»; «To interrupt politely… Sorry to interrupt, but…» | CD https://dictionary.cambridge.org/dictionary/english/interrupt (стаття, вимова) | ✅ |
| Sure, go ahead (дозвіл) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/go-ahead_2 — «‘May I start now?’ ‘Yes, go ahead.’» | Wiktionary https://en.wiktionary.org/wiki/go_ahead — «(imperative) Used to grant permission» | ✅ |
| Наголос: personally, honestly, actually — 1-й склад; opinion — 2-й; interrupt — 3-й; addition — 2-й; finally — 1-й | CD UK: /ˈpɜː.sən.əl.i/, /ˈɒn.ɪst.li/, /ˈæk.tʃu.ə.li/, /əˈpɪn.jən/, /…ˈrʌpt/, /əˈdɪʃ.ən/, /ˈfaɪ.nəl.i/ (сторінки слів вище + https://dictionary.cambridge.org/dictionary/english/opinion, …/finally) | OALD сторінки personally, interrupt, addition (вимова на тих самих статтях) | ✅; поділ у `stress` (per·son·al·ly, hon·est·ly, ac·tu·al·ly, o·pin·ion) збігається зі складами CD |

BrE: AmE-правопису й лексики немає (grep color/favorite/center/-ize/apartment/on the weekend — 0); *team sport*, *sports centre* — BrE. IPA в тексті немає. A/B/C і позиційних посилань немає. Імітації аудіювання немає («listen to others» в outro l6 — про поведінку в дискусії, не вміння на слух). `uk` немає (9 кл. — правильно). Діалоги — репліками в `body`, без `type: "dialog"` (D-056) ✅.

## 3. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| “Although we live in different countries, we talk every week” | збігів немає |
| “chess teaches you to think before you act” + “you only need a board and pieces” | збігів немає |
| “Although e-readers are light, they need a battery” | збігів немає |
| “history helps us understand the world today” + “full of amazing stories about real people” | збігів немає |
| “I read history books on paper, and I read e-books on the bus” | збігів немає |
| “I like running alone in the park: it’s quiet, so I can think” | збігів немає |
| “some students want to read or talk quietly in the break” | збігів немає |
| “Team sport is fun. However, I like running alone in the park” | збігів немає |
✅ Тексти власні.

## 4. Завдання: моя відповідь → опора (D-019) → вердикт
| Урок / екран | Моя відповідь | Опора | Вердикт |
|---|---|---|---|
| l1 choice hyp (Personally) | own opinion | hyp: true | ✅ |
| l1 gaps | think / In / sure / do | info «Giving your opinion» | ✅ |
| l1 pick | On | info (In my opinion) | ✅ |
| l1 match | 1–1, 2–2, 3–3 | info «Personally, honestly, actually» | ✅ |
| l1 stress | 1-й, 1-й, 1-й, 2-й | `<u>` в info; opinion — міркування з «In my o-pin-ion» не дано, але вільна спроба stress + fbText; прийнятно (sk phon, не нова форма) | ✅ |
| l1 choice (Actually) | Actually… | info (Actually = “that’s not right”) | ✅ |
| l1 word | opinion (+view) | info «What’s your opinion?» | ✅ |
| l1 final gaps | In / don’t think / Actually / think | info обидва | ✅ |
| l2 hyp | partly | hyp: true | ✅ |
| l2 sort | 0,0,1,1,2,2 | info «Agree, partly agree, disagree» | ✅ |
| l2 gaps | with / don’t agree / more / point | info; agree with — e9s3l6 | ✅ |
| l2 choice | That’s true, but… | info | ✅ |
| l2 pick | am | info (Not: I am agree) | ✅ |
| l2 build | I see your point, but I don’t agree. (єдиний порядок; кома в плитці фіксує місце) | info | ✅ |
| l2 word | more | info | ✅ |
| l2 final gaps | agree / up to a point / true / about | info, intro | ✅ |
| l3 hyp | Sorry to interrupt | hyp: true | ✅ |
| l3 match | 1–1…4–4 | info «Joining a discussion»; **правка 2** | ✅ після правки |
| l3 choice | Sure, go ahead. | info | ✅ |
| l3 gaps | Both / or / either / are | info «Both … and, either … or» | ✅ |
| l3 build | 4 порядки — усі в `answer` | info; CD Grammar both (mid position) | ✅ |
| l3 word | or | info | ✅ |
| l3 final gaps | either / interrupt / think / Both | info | ✅ |
| l4 hyp | contrast | hyp: true | ✅ |
| l4 gaps | Although / However / but | info «Although, but, however» (пунктуація розводить) | ✅ |
| l4 choice | Although the club is online, it’s great fun. | info | ✅ |
| l4 sort | 0,0,1,1,2,2 | info «Because, so, so that» | ✅ |
| l4 gaps | so / because / so | info | ✅ |
| l4 pick | because | info | ✅ |
| l4 build | Although it was raining, we went to the comic shop. (інший порядок дав би кому в кінці — плитка «it was raining,» фіксує позицію; рушій порівнює пунктуацію плиток) | info | ✅ |
| l4 final gaps | Although / so that / However / so | info обидва | ✅ |
| l5 hyp | follow ideas | hyp: true | ✅ |
| l5 match | 1–1…4–4 | info «Putting your ideas in order» | ✅ |
| l5 order | Title, First, In addition, Finally, So… | info + hint | ✅ |
| l5 gaps (Daryna) | First / Also / However / Finally | info | ❌→✅: у 4-му пропуску дистрактор **However** теж правильний («…it takes a lot of time. However, I love working with Andrii» — граматично й логічно контраст); **правка 1**: However → Although (з комою неграматичне) |
| l5 choice | However | info | ✅ |
| l5 word | addition | info | ✅ |
| l5 build | Finally, a chess club… (єдиний) | info | ✅ |
| l5 final gaps | First / Also / However | info | ✅ |
| l6 choice p1 | light + bigger letters | текст на екрані | ✅ |
| l6 multi p2 | 0, 2 | текст на екрані | ✅ |
| l6 choice p3 | both kinds good | текст на екрані | ✅ |
| l6 sort | 0,1,1,2 | уривки 2–3 + info «who said what» + l2–l3 | ✅ |
| l6 build | Although e-readers are light, they need a battery. | уривок 2, l4 | ✅ |
| l6 gaps | Both / either / Although / so | l3, l4 | ✅ |
| l6 word | point | уривок 2, l2 | ✅ |
| l6 final gaps | First / point / Although / so / Finally / both | уривки, l2–l5 | ✅ |
| l7 T1 gaps | In / think / do | l1 | ✅ |
| l7 T2 choice | Actually… | l1 (той самий тип, що l1 choice). «Personally, I often train alone» — не зовсім неграматичне, але в завданні «choose the best answer» на заперечення факту найкраще саме Actually (CD/OALD: actually — correcting); прийнятно | ✅ |
| l7 T3 choice | That’s true, but karate… | l2 | ✅ |
| l7 T4 match | 1–1, 2–2, 3–3 | l3 | ✅ |
| l7 T5 build | 4 порядки в `answer` | l3 | ✅ |
| l7 T6 gaps | Although / However / so | l4 | ✅ |
| l7 T7 order | Title, First, Also, Finally | l5 | ✅ |
| l7 T8 choice | partly agrees | текст на екрані, l2 | ✅ |

Друга правильна відповідь перевірена для: discourse markers (Also / In addition ніколи в одному пропуску; However як дистрактор — знайдено 1 випадок, виправлено), although / but / however (пунктуація відсікає: although-пропуск на початку речення з комою після частини, However — нове речення з комою, but — після коми проти because / or), so / so that (не протиставлені), both … and (дієслово множини, усі порядки build), either … or (лише після підмета). `boss` питає лише пройдене.

## 5. Узгодженість з e9s3 і requires
- «That’s true, but…» — у e9s9 скрізь «partly agree»; e9s3l6 після верифікації — кошик «partly agree» з поясненням «a polite way to disagree». Узгоджено. e9s3l7 T8 (fbText «polite disagreement») — чужий файл, з e9s9 не суперечить (там бінарний вибір згода / незгода), не чіпав.
- «I see your point, but…» в info l2 — «partly agree», а в outro l2 learned — «Disagree politely»: **правка 3** — у learned «Disagree politely: I’m not sure about that. I’m afraid I disagree.» (фрази з info). У сортуваннях ця фраза не класифікується — двозначності немає (CD: «I can see your point, but I still disagree»).
- **Правка 4 — requires:** + e9s2l6 (eco club Zelena Dolyna, Ms Marchenko, Halyna, Dmytro), e9s3l6 (I think / In my opinion / agree with / That’s true, but… — пряма опора l1–l2), e9s4l6 (Bright Radio, Ms Kvitka; онлайн-клуб коміксів Mariia, Zofia, Polina, Roksolana), e9s8l4 (дискусія «Which city would you like to live in?» — тема l1 city or village). e9s8 — на верифікації, файл існує, validate 0 помилок.

## 6. Педагогіка й рівень
Проблема (intro з дискусією) → hyp-здогадка → info → вправи — у кожному уроці. Пояснення англійською — короткі формули й приклади, речення ≤ 12 слів, info ≤ 60 слів (без прикладів) — рівень 6–9 кл. Теми нейтральні (місто/село, музика на перервах, еко-день, шахи, книжки, спорт), без політики й релігії; принцип «talk about the idea, not the person». Підказки не видають відповідей. Герої й місця — канон серії (Taras — Lviv, Oksana — karate, Tom — гурт).

## 7. Прогони
- `node tools/validate.mjs --section e9s9` — 0 помилок, 0 попереджень (до й після правок).
- `node tools/stats.mjs --subject eng` — e9s9l6 gradedShare z = 2,4, e9s9l7 maxText z = 2,3: «нетипово для сім'ї», але в межах профілю 7–9 (урок читання; уривок дискусії ≈ 55 слів); прийнято, як пояснив автор.
- `python3 tools/playtest.py --section e9s9` — не запущено: у контейнері немає Python-модуля playwright; лише CI (job browser).

## 8. Правки (зроблені)
1. l5 gaps (Daryna), 4-й пропуск: `{*Finally|First|However}` → `{*Finally|First|Although}` — дистрактор However був другою правильною відповіддю.
2. l3 match, 4-й лівий: «A friend asks, “Can I add something?”» → «You have finished. A friend asks, “Can I add something?”» — інакше «Let me finish, please» теж доречна пара.
3. l2 outro learned: «Disagree politely: … I see your point, but…» → «… I’m afraid I disagree.» — узгоджено з info l2.
4. requires: + e9s2l6, e9s3l6, e9s4l6, e9s8l4.
Статус усіх 7 уроків → verified; meta.factcheck — посилання на цей звіт.

## Вердикт по уроках
e9s9l1 ✅ verified · e9s9l2 ✅ verified · e9s9l3 ✅ verified · e9s9l4 ✅ verified · e9s9l5 ✅ verified · e9s9l6 ✅ verified · e9s9l7 (boss) ✅ verified.
