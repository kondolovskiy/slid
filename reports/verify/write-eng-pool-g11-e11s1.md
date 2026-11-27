# Верифікація: пул pe11s1 (англійська, 11 кл., розділ e11s1 «Rights, responsibilities and tolerance»)

Верифікатор: verifier-pe11s1, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g11-e11s1.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s1.md. Опора: уроки `content/eng/g11-e11s1.js` (verified) і розділи g4–g10. Формат звіту — як reports/verify/write-eng-pool-g10-e10s1.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і другої правильної відповіді поза ключем у `gaps`/`choice`/`multi`/`build` я не знайшов. Зробив 17 правок у 15 вправах (+ статус і шапка):
- 1 друга правильна відповідь у `word` (a14: «happy with our **manners**» теж правильно): в умову додано «Make a noun from *behave*»;
- 1 слово з пізнішого розділу в `stress` (a08: *community* підкреслене лише в e11s3, раніше ніде): замінено на *respect*;
- 1 рамка уроку з тим самим ключем (a04: «We’re allowed to use our phones in the breaks» — приклад з l1 info «Who decides?»): новий контекст «wear our own clothes on Fridays»;
- 1 дистрактор, який можна захистити за змістом (a46: «Ruby admitted that the water was too cold» граматично правильно й не абсурдно): admitted → promised;
- 12 підказок, що підписували пропуски в порядку відповідей або називали відповідь (a30, a32, a33, a37, a41, a45, a46, a50, a62, a64, a66, a70) — тепер ведуть до потрібної рамки уроку.

Людині рішати нічого не треба.

Спосіб: спершу розв'язав усі 70 вправ за «учнівським» дампом без ключів (`*` прибрано, варіанти відсортовано, `correct`/`answer`/`steps` вилучено; `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s1-pe11s2/bin/dump.mjs`), і лише потім звірив свої відповіді з ключем. Розбіжностей немає.

## 1. Програма, `src`
`sources`: `p1407`, `program: true`, url — як у facts/eng.md. PDF відкрив у цій сесії (curl https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf; SHA-1 38df1f7ff398f0921f2852bc77fd374c77e1c0ff — збігається з facts/eng.md), `pdftotext`, колонтитули сторінок 23–25:
- с. 23 (11-ий клас, функції): «висловлювати й аргументувати власну точку зору», «вступати в дискусію, привертаючи увагу співрозмовника», «підтримувати дискусію… змінюючи тему розмови» → l6 func/write ✅;
- с. 24 (лексика, «Я, моя родина, мої друзі»): «права та обов’язки молоді», «норми поведінки та спілкування», «толерантність, гуманність, благодійність», «ведення домашнього господарства» → l1, l2, l5, l6 read/vocab/phon ✅;
- с. 25 (граматика, Clause): «reported speech with changed tenses», «reporting verbs + that + complement clause» → l3, l4 ✅.

**Питання автора про e11s1l2 (Would you mind):** підтверджую. На с. 25 (граматика 11 кл.) would you mind чи ввічливих прохань немає — лише clauses, quantifiers, modals + passive, question tags, tenses; на с. 23 серед функцій ввічливого прохання теж немає. Найближча тема — с. 24 «норми поведінки та спілкування», тож `p1407 с. 24` для l2 func/gram правильне ✅.

## 2. Факти
| Твердження (вправа) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Конвенцію ООН про права дитини ухвалено 1989 (a10) | https://zakon.rada.gov.ua/laws/show/995_021/print («Конвенція про права дитини \| від 20.11.1989»); https://en.wikipedia.org/wiki/Convention_on_the_Rights_of_the_Child («Signed 20 November 1989») | ✅ |
| Україна ратифікувала 1991, «two years later» (a10) | zakon.rada (там само: «Конвенцію ратифіковано Постановою ВР № 789-XII від 27.02.91»); WebSearch «Convention on the Rights of the Child adopted 20 November 1989 Ukraine ratified 1991» (Yale RCW, звіт України 1995 — 27 February 1991) | ✅ |
| Дитина — кожен до 18 (a10) | zakon.rada, ст. 1 («до досягнення 18-річного віку, якщо… не досягає повноліття раніше»); en.wikipedia («any human being under the age of eighteen») | ✅ (спрощення, як в уроці) |
| International Volunteer Day — 5 December, ООН започаткувала 1985 (a53) | https://en.wikipedia.org/wiki/International_Volunteer_Day («Resolution A/RES/40/212 on 17 December 1985», «5 December»); WebSearch «International Volunteer Day 5 December established by UN General Assembly resolution 40/212 1985» → запис ООН https://digitallibrary.un.org/record/113305 (хост з контейнера не резолвиться, лише сніпет пошуку) | ✅ |

Формулювання ті самі, що в уроках l1 intro і l5 #11 (лесонний верифікатор їх уже звірив, reports/verify/write-eng-g11-e11s1.md).

**Канон героїв** (memory/long/glossary/eng-heroes.md, 11 кл.: 17 років, Dmytro 13): Kyrylo 17, history club (a10) ✅; Mariia — єдина дитина, з мамою й татом (a11, a60) ✅; Kateryna — Kharkiv, drama club, Artem — однокласник Mariia (a12, a22) ✅; Grandad Mykola й дерева (a15, a30) ✅; Halyna — подруга Оксани, Zelena Dolyna, eco group, міст (a20, a44) ✅; Taras — Lviv, Zlata (бандура), Ostap, Myroslava, Bright Radio, Ms Kvitka (head teacher), Mr Hnatiuk (тренер athletics club) ✅; Denys — кузен Оксани, університет у Kyiv (a33 «going back to Kyiv») ✅; Emma — swimming team, Ruby й Amelia — однокласниця і подруга з плавання, Tom (a42, a46, a59, a70) ✅; Orysia — з Vinnytsia, у класі Emma з 10 кл. → «two years ago» в 11 кл. (a54) ✅; Andrii — шахи, сестра Sofiia (a62, a64) ✅; Ms Lysenko — вчителька класу Andrii ✅. Нові дрібниці (Mr Hnatiuk тренує 20 років, черга на сміття в Taras і Zlata, rota з dishwasher у Emma, іспити Mariia в травні) канону не суперечать.

## 3. Словники
Наголос у `stress` — CD https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>, відкрито curl у цій сесії:

| Слово | CD (UK; US) | OALD (BrE; NAmE) | `<u>` в уроках | Вердикт |
|---|---|---|---|---|
| responsible | rɪˈspɒn.sə.bəl; rɪˈspɑːn.sə.bəl | /rɪˈspɒnsəbl/; /rɪˈspɑːnsəbl/ | e11s1l1 | ✅ |
| responsibility | rɪˌspɒn.sɪˈbɪl.ə.ti; rɪˌspɑːn.səˈbɪl.ə.t̬i | /rɪˌspɒnsəˈbɪləti/ | e11s1l1 | ✅ |
| education | ˌedʒ.ʊˈkeɪ.ʃən; ˌedʒ.əˈkeɪ.ʃən | /ˌedʒuˈkeɪʃn/ | e11s1l1 | ✅ |
| respect | rɪˈspekt | /rɪˈspekt/ | e11s1l1, l5 | ✅ |
| opinion | əˈpɪn.jən | /əˈpɪnjən/ | e8s3, e9s9 | ✅ |
| community | — | — | **лише e11s3** (пізніший розділ; слова в g4–g10 і e11s1 немає) | ❌ → a08 замінено на respect |
| charity | ˈtʃær.ə.ti; ˈtʃer.ə.t̬i | /ˈtʃærəti/ | e11s1l5 | ✅ |
| volunteer | ˌvɒl.ənˈtɪər; ˌvɑː.lənˈtɪr | /ˌvɒlənˈtɪə(r)/ | e11s1l5 | ✅ |
| tolerant / tolerance | ˈtɒl.ər.ənt / ˈtɒl.ər.əns | /ˈtɒlərənt/, /ˈtɒlərəns/ | e11s1l5 | ✅ |
| fundraiser | ˈfʌndˌreɪ.zər | /ˈfʌndreɪzə(r)/ | e11s1l5 | ✅ |
| kindness | ˈkaɪnd.nəs | /ˈkaɪndnəs/ | e11s1l5 | ✅ |

donate не взято (автор: CD UK dəʊˈneɪt / US ˈdoʊ.neɪt) — правильно. У кожному наборі є слово з іншим наголошеним складом ✅.

Граматика (CD Grammar і CD, curl у цій сесії):
- https://dictionary.cambridge.org/grammar/british-grammar/mind — «would you mind if I + past or do you mind if I + present»; відповіді «No, not at all», «I’m afraid…». У пулі would you mind if + past ніде не хибне (його немає серед варіантів); Do you mind if I + present — у ключі a19, a20, a24 ✅.
- https://dictionary.cambridge.org/grammar/british-grammar/suggest — «should in the that-clause», «Suggest + -ing», «Not: He suggested me to apply», «We don’t use suggest + to-infinitive». У пулі хибні лише suggest + to-inf. (a39, a42, a45) ✅; suggest that + базова форма / Past Simple серед хибних немає ✅.
- https://dictionary.cambridge.org/dictionary/english/admit — «admitted making…», «admitted that he had been wrong»; https://dictionary.cambridge.org/dictionary/english/deny — «denied that…». admit / deny + -ing серед хибних варіантів немає; хибне лише «denied to take» (a43) ✅. promise + to серед хибних немає ✅ (TQ-144: теперішня форма після said ніде не хибна — хибні лише неможливі форми had took, had ran, had buyed, will sent, has + V3 з минулим часом).
- https://dictionary.cambridge.org/dictionary/english/insist — «insists (that)», «insist on». «I insisted making» (a70) — хибне без on ✅.
- https://dictionary.cambridge.org/dictionary/english/down — «be down to someone»: «It’s down to you» у ключі a03 поруч з up to ✅.
- behaviour: AmE behavior рушій приймає з приміткою (a14, `word`) ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки плиток разом з `extra` (`…/verify-pe11s1-pe11s2/bin/chk.mjs`): a20 — лише «Do you mind if I use your laptop?», a40 — лише «Zoriana suggested making a video about the shelter», a64 — лише «What do you think about the rota?»; інших граматичних порядків немає ✅. Лексику перевірив скриптом (`lex2.mjs`: слова вправи проти g4–g10 і уроків e11s1 до її `lesson` включно) — поза уроками нічого (rais — склад у stress). N-грами (7) проти g4–g11 і dge: після правки a04 збігаються лише шаблонні заголовки й визначення з info, які `match` і повинен повторювати.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | to; for | = | l1 info 3 | — | ✅ |
| a02 match | 4 пари | = | l1 info 3, 6 | перебрав усі праві | ✅ |
| a03 word | up to / down to | = | l1 info «Who decides?» | — | ✅ |
| a04 gaps | are allowed to; up to; responsibility | = | l1 info 6 | рамка = приклад уроку «We’re allowed to use our phones in the breaks» | ⚠️ → новий контекст |
| a05 pick | [to] | = | l1 info 3 | — | ✅ |
| a06–a08 stress | spon, ca / bil, spect, ca / spon, bil, pin, ca, + 5-те слово | = | l1 `<u>`; opinion — e8s3 | a08: community з e11s3 | ❌ → respect |
| a09 choice | keeping Room 12 tidy | = | текст | — | ✅ |
| a10 multi | [0,2] | = | текст; l1 intro | факти — §2 | ✅ |
| a11 choice | took responsibility | = | текст; l1 info 6 | — | ✅ |
| a12 gaps | rude; interrupt | = | l2 info 3 | — | ✅ |
| a13 match | 4 пари | = | l2 info 3 | перебрав усі праві | ✅ |
| a14 word | behaviour — але й **manners** | behaviour | l2 info 3 | друга правильна | ❌ → «Make a noun from behave» в умові |
| a15 pick | [manner] | = | l2 info 3 | — | ✅ |
| a16, a17 choice | Of course not / I’m afraid I need it… | = | l2 info 6 | — | ✅ |
| a18 multi | [0,1] | = | l2 info 6 | — | ✅ |
| a19 gaps | speaking; open | = | l2 info 6 | — | ✅ |
| a20 build | Do you mind if I use your laptop? | = | l2 info 6 | перебір | ✅ |
| a21 pick | [sitting] | = | l2 info 6 | — | ✅ |
| a22 gaps | interrupt; manners | = | l2 info 3 | — | ✅ |
| a23 gaps | behaviour; queue; polite | = | l2 info 3 | rude відсікає «Thank you… very good» | ✅ |
| a24 gaps | checking; use; behave | = | l2 info 6, 3 | — | ✅ |
| a25 gaps | had finished; couldn’t | = | l3 info 3 | — | ✅ |
| a26 match | 4 пари | = | l3 info 7 | перебрав усі праві | ✅ |
| a27 multi | [0,1] | = | l3 info 5 | — | ✅ |
| a28 gaps | was playing; there; the next day | = | l3 info 3, 7 | — | ✅ |
| a29 pick | [had ran] | = | l3 info 3; run – ran – run (e10s1) | — | ✅ |
| a30 gaps | had planted; had looked; would | = | l3 info 3 | hint перелічував правила в порядку пропусків | ⚠️ → hint виправлено |
| a31 gaps | had found; were | = | l3 info 3 | — | ✅ |
| a32 gaps | had started; had trained; the next day | = | l3 info 3, 7 | hint у порядку пропусків | ⚠️ → hint виправлено |
| a33 gaps | had come; the day before; was going; the next day | = | l3 info 3, 7 | hint у порядку пропусків | ⚠️ → hint виправлено |
| a34 match | 4 пари | = | l4 info 3 | — | ✅ |
| a35 gaps | promised; admitted | = | l4 info 3 | — | ✅ |
| a36 word | denied | = | l4 info 3 | — | ✅ |
| a37 pick | [denied] | = | l4 info 3 | hint «Is he saying “It isn’t true”?» вказував на помилку | ⚠️ → hint виправлено |
| a38 choice | explained to me how… | = | l4 info 7 | — | ✅ |
| a39 gaps | playing; to us | = | l4 info 6, 7 | — | ✅ |
| a40 build | Zoriana suggested making a video about the shelter | = | l4 info 6 | перебір | ✅ |
| a41 gaps | would send; insisted | = | l4 info 3, 6 | hint «who says something firmly?» = визначення insist | ⚠️ → hint виправлено |
| a42 pick | [to go] | = | l4 info 7 | — | ✅ |
| a43 multi | [0,1] | = | l3 info 5; l4 info 3 | — | ✅ |
| a44 gaps | suggested; promised | = | l4 info 3, 6 | — | ✅ |
| a45 gaps | explained; admitted; printing | = | l4 info 3, 7 | hint перелічував три пропуски | ⚠️ → hint виправлено |
| a46 gaps | complained; explained; would; insisted | = | l4 info 3, 6, 7 | «Ruby admitted that the water was too cold» можна захистити; hint у порядку пропусків | ⚠️ → admitted → promised, hint виправлено |
| a47 gaps | for; donated | = | l5 info 3 | — | ✅ |
| a48 match | 4 пари | = | l5 info 6 | перебрав усі праві | ✅ |
| a49 word | need | = | l5 info 3 | — | ✅ |
| a50 gaps | fundraiser; volunteers | = | l5 info 3 | hint «An event? People who help?» підписував пропуски | ⚠️ → hint виправлено |
| a51 pick | [do] | = | l5 info 3 (make a difference) | — | ✅ |
| a52 choice | She wants to make a difference | = | текст | — | ✅ |
| a53 multi | [0,1] | = | текст; l5 #11 | факти — §2 | ✅ |
| a54 choice | Get to know people before you judge them | = | текст; l5 info 6 | — | ✅ |
| a55–a57 stress | char, teer / tol, fund, teer / tol, spect, kind, char, teer | = | l5 `<u>` | §3 | ✅ |
| a58 choice | take turns | = | текст | — | ✅ |
| a59 multi | [0,2] | = | текст | — | ✅ |
| a60 choice | accepts until June | = | текст; l6 info 5 | — | ✅ |
| a61 match | 4 пари | = | l6 info 5 | перебрав усі праві | ✅ |
| a62 gaps | The main reason is that; That’s why | = | l6 info 3 | hint переказував функції пропусків по черзі | ⚠️ → hint виправлено |
| a63 choice | Let him finish, please | = | l6 info 5 | — | ✅ |
| a64 build | What do you think about the rota? | = | l6 info 5 | hint «What + do + you…» давав порядок | ⚠️ → hint виправлено |
| a65 gaps | laundry; rubbish | = | l6 info 7 | — | ✅ |
| a66 match | 4 пари | = | l6 info 7 | hint називав дві пари | ⚠️ → hint виправлено |
| a67 pick | [part] | = | l6 info 7 | — | ✅ |
| a68 gaps | rota; turns | = | l6 info 7 | — | ✅ |
| a69 gaps | For one thing; For another; That’s why | = | l6 info 3 | — | ✅ |
| a70 gaps | suggested; complained; agreed; turns | = | l4 info 3, 6; l6 info 7 | hint підписував три пропуски | ⚠️ → hint виправлено |

Педагогіка: рівні 1–3 на кожну пару (урок, sk), 3–5 вправ; теми (права, ввічливість, толерантність, домашні справи) — без неприйнятного для віку змісту. Мова пояснень — рівень 11 кл. BrE: rota, rubbish, washing-up, queue, at the weekend, behaviour, practise (дієслово) ✅. Без звуку й IPA ✅. Авторське право: WebSearch з лапками — «she watched videos until two in the morning and was too tired for her» і «some students judged her too quickly. She was quiet, and her English wasn't perfect yet» — збігів немає ✅.

## 5. Правки (зроблені)
1. a04: «use our phones in the breaks» → «wear our own clothes on Fridays».
2. a08: `com|+mu|ni|ty` → `re|+spect`; steps узгоджено.
3. a14: body + «Make a noun from <i>behave</i>.»
4. a46: дистрактор admitted → promised.
5. Hint: a30, a32, a33, a37, a41, a45, a46, a50, a62, a64, a66, a70.
6. `status: "verified"`, `meta.factcheck`, шапка.

Прогін: `node tools/validate.mjs --pool pe11s1` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe11s1` — 6 уроків, 70 вправ. `python3 tools/test-answer-ui.py --suite content --pool pe11s1` — модуля playwright у контейнері немає, лише CI.

## 6. Вердикт
Уроки e11s1l1–e11s1l6: ✅. Пул pe11s1 — **verified**. Відкритих ❌ і ⚠️ немає.
