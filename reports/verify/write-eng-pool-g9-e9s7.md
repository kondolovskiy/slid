# Верифікація: пул pe9s7 (англійська, 9 кл., розділ e9s7 «Jobs and careers»)

Верифікатор: verifier-pe9s7 (сесія verifier-pe9s7-pe9s8), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s7.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s7.md. Опора: уроки `content/eng/g9-e9s7.js` (verified) і розділи g4–e9s6. Еталони: reports/verify/write-eng-pool-g9-e9s2.md, -g8-*.md. Канон: memory/long/glossary/eng-heroes.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів не знайшов. Зробив 4 правки в 3 вправах плюс статус і шапку. Що змінив: 1 stress без опори (reporter), 1 суперечність канону (шкільна форма в школі Andrii), 1 дистрактор, який може читатися як правильний. Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. Сторінки звірив за PDF, завантаженим у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, pdftotext):
- с. 33 — «Робота і професія»;
- с. 29 — «Дає пораду…»;
- с. 30 — «Пише прості заявки…», «реєструється на навчальний курс»;
- с. 31 — «Описує події (реальні чи уявні), мрії, сподівання»;
- с. 34 — «Ought: advice», «Must: … obligation»;
- с. 35 — «Should: ideal or desired situations», «Would: … indirectness, p[olite requests]», «Will», «verb + … ‘-ing’ form».

Усі `src` відповідають темі вправ ✅.

## 2. Факти
Фактів про реальний світ (дат, чисел, назв) у пулі немає. Професії описано загальними словами, як в уроці l1. Я перевірив дві деталі:
- a69: «In five years, I will be able to drive a car». Bohdanу 15 (канон 9 кл.), тож за 5 років йому буде 20. Учень знає це з міркування, окремого факту тут немає ✅.
- a02: у Zelena Dolyna немає ветеринара, і тварин везуть до Poltava. Це канон і текст e9s7l6 (part 3) ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки всіх підмножин плиток (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s7-8/bin/chk.mjs`). У a22, a32, a45, a54, a59, a65 і a70 рушій приймає лише ключ. Інших граматичних порядків там немає, бо keepCase і плитки з «?» відсікають «In our city there…».

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 choice | an architect | = | l1 «New jobs» | — | ✅ |
| a02 word | vet | +veterinarian | l1 | veterinarian — OALD «(North American English) (also vet especially in British English)»; він лише додатковий ключ | ✅ |
| a03 gaps | outdoors; in a team; shifts | = | l1 «What is the job like?» | «a forest or a field» відсікає indoors | ✅ |
| a04 choice | often travels | = | текст | дядько Bohdan — engineer (l4 intro), офіс у Kyiv — нова дрібниця (NOTE) | ✅ |
| a05 multi | [0,1,3] | = | текст | — | ✅ |
| a06 choice | travels a lot | = | текст + l1 (Ms Bilyk) | — | ✅ |
| a07 stress | ar; neer | = | l1 `<u>` і stress l1 | — | ✅ |
| a08 stress | jour; tog; fire | = | l1; pho`<u>`tog`</u>`rapher — e5s1 | — | ✅ |
| a09 stress | — | — | — | re\|+port\|er: у жодному уроці немає `<u>` (grep `re<u>port`, `+port`) | ⚠️ → pho\|+tog\|ra\|pher (e5s1) |
| a10 gaps | firefighter; long hours | = | l1 | — | ✅ |
| a11 gaps | programmer; indoors; alone | = | l1 | — | ✅ |
| a12 gaps | architect; vet; outdoors; journalist | = | l1 | — | ✅ |
| a13 gaps | drawing; painting | = | l2 | Halyna малює — канон | ✅ |
| a14 word | swimming | = | l2 | «Use the verb swim» | ✅ |
| a15 gaps | in; at; on | = | l2 | Tom — drums (канон) | ✅ |
| a16 pick | [build] | = | l2 | Bohdan не любить football — канон ✅ | ✅ |
| a17 gaps | becoming; solving; making | = | l2 (about — у списку прийменників; solve → solving) | — | ✅ |
| a18 choice | an architect | = | l1, l2 | — | ✅ |
| a19 choice | a musician | = | musician — e8s4 | — | ✅ |
| a20 choice | a programmer | = | l2 (Andrii: bad at drawing → can’t be an architect) | — | ✅ |
| a21 gaps | at; in | = | l2; science — e5s2 | — | ✅ |
| a22 build | I’m good at taking photos. | = | l2 | — | ✅ |
| a23 gaps | on; reading; at; getting | = | l2 | keen to read не з’являється (on — окремий пропуск) | ✅ |
| a24 choice | creative | = | l3 | — | ✅ |
| a25 match | 5 пар | = | l3 info, match l3 | перебрав усі праві; calm/brave розведено за визначеннями уроку | ✅ |
| a26 word | brave | +courageous, fearless | l3 | — | ✅ |
| a27 pick | [creative] | = | l3 | — | ✅ |
| a28 gaps | should be | = | l3 | — | ✅ |
| a29 choice | have to wear… | = | l3 (choice rule/ideal), e6s5l5 | — | ✅ |
| a30 gaps | should be; should be | = | l3 | — | ✅ |
| a31 pick | [should is] | = | l3 | — | ✅ |
| a32 build | There should be more doctors in our city. | = | l3 | — | ✅ |
| a33 stress | pa; a | = | l3 `<u>` | — | ✅ |
| a34 stress | li; or; hon | = | l3; `<u>`hon`</u>`est — e6s1, e9s1 | OALD honest «/ˈɒnɪst/» | ✅ |
| a35 stress | a; pa; lite; or; li | = | l3; po`<u>`lite`</u>` — e6s1 | OALD polite «/pəˈlaɪt/» | ✅ |
| a36 gaps | patient; organised | = | l3 | — | ✅ |
| a37 gaps | should be; reliable; organised | = | l3 | — | ✅ |
| a38 gaps | have to; should be; should be | = | l3 | — | ✅ |
| a39 sort | 2/2/2 | = | l4 info, sort l4 | — | ✅ |
| a40 gaps | ought to; don’t have to | = | l4 | — | ✅ |
| a41 word | doesn’t have | +does not have, doesn’t need, does not need | l4 | — | ✅ |
| a42 pick | [should to] | = | l4 | — | ✅ |
| a43 choice | It isn’t necessary… | = | l4 (hyp l4 з «isn’t allowed») | «You don’t have to wear your school uniform» (Ms Lysenko — школа Andrii). За каноном і в e5/e6 у школі Andrii форми немає | ⚠️ → «bring a notebook» |
| a44 choice | What should I do? | = | l4 | — | ✅ |
| a45 build | Do you think I should become an engineer? | = | l4 info | — | ✅ |
| a46 gaps | Do you think I should; should; should I | = | l4 | — | ✅ |
| a47 gaps | should; ought to | = | l4 | — | ✅ |
| a48 gaps | should; have to; don’t have to | = | l4 | — | ✅ |
| a49 gaps | ought to; don’t have to; have to; Should I | = | l4 | дистрактор «I should send you her email?» — питання зі стверджувальним порядком, у розмові можливе («declarative question»), тож неоднозначне | ⚠️ → «Should I to» |
| a50 gaps | would like; would be | = | l5 | — | ✅ |
| a51 word | to | = | l5 | — | ✅ |
| a52 gaps | Would; Would | = | l5 | Could не серед варіантів | ✅ |
| a53 pick | [Would it possible] | = | l5 | — | ✅ |
| a54 build | Would you tell me the price of the course? | = | l5 | «will» з малої при keepCase не може почати речення | ✅ |
| a55 choice | Could you send me…? | = | l5 info | — | ✅ |
| a56 choice | Would it be possible…? | = | l5 | — | ✅ |
| a57 choice | I would like to know… | = | l5 | — | ✅ |
| a58 gaps | would like | = | l5 | — | ✅ |
| a59 build | I would be grateful for your help. | = | l5 | — | ✅ |
| a60 gaps | to join; Could; Would; would be | = | l5 | — | ✅ |
| a61 gaps | will be able to | = | l6 | — | ✅ |
| a62 word | won’t | +will not | l6 | — | ✅ |
| a63 gaps | Will; will | = | l6 | — | ✅ |
| a64 pick | [won’t can] | = | l6 | — | ✅ |
| a65 build | Will you be able to come to the careers fair? | = | l6 | — | ✅ |
| a66 choice | maths | = | текст | — | ✅ |
| a67 multi | [0,1,3] | = | текст | — | ✅ |
| a68 choice | write programs for robots | = | текст | — | ✅ |
| a69 gaps | will be able to | = | l6 | — | ✅ |
| a70 build | I’ll be able to put out real fires. | = | l6 | — | ✅ |
| a71 gaps | drawing; should be; I’ll be able to; won’t be able to | = | l2, l3, l6 | Mariia — architect / old buildings, як у l2, l3 | ✅ |

Друга правильна відповідь: should і ought to ніде не стоять одне проти одного, must і have to теж. «had better» не вжито. У word I ___ like (I should like) немає. Хибні варіанти — лише неможливі форми ✅. Покриття: 71 вправа, 6 уроків, кожна пара (урок, sk) має рівні 1–3. `sk` взято з уроку. У кожної вправи рівнів 2–3 є `hint`, і жодна hint не видає відповіді.

## 4. Форми, наголос, лексика, BrE, канон, авторське право
- **Наголос (curl у цій сесії).** OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: photographer «/fəˈtɒɡrəfə(r)/», mechanic «/məˈkænɪk/», honest «/ˈɒnɪst/», polite «/pəˈlaɪt/». CD https://dictionary.cambridge.org/dictionary/english/<word>: architect «/ˈɑː.kɪ.tekt/», journalist «/ˈdʒɜː.nə.lɪst/», programmer «/ˈprəʊ.ɡræm.ər/», firefighter «/ˈfaɪəˌfaɪ.tər/», engineer «/ˌen.dʒɪˈnɪər/», patient «/ˈpeɪ.ʃənt/», reliable «/rɪˈlaɪ.ə.bəl/», creative «/kriˈeɪ.tɪv/». Опора `<u>` для кожного слова stress є в уроках. Виняток — reporter, його виправлено.
- **Лексика** (`bin/lex.mjs` проти g4–e9s6 і e9s7 до `lesson`). Поза уроками лишилися тільки veterinarian, courageous і fearless, і всі три — лише прийнятні варіанти `word` ✅.
- **Канон героїв.** Bohdan і football, Tom (drums, guitar), Halyna (малює), Oksana (vet), Zoriana (programmer), Emma (firefighter), Daryna (pilot), Mariia (architect, l2–l3), Andrii (chess) ✅. a43 виправлено (форма). Нові дрібниці (NOTE в inbox): дядько Bohdan працює в офісі в Kyiv (a04); подруга мами Emma — programmer (a49); Zoriana хоче до ліцею в Kyiv з maths profile (a66–a67).
- **Професії без стереотипів.** Жінки — architect, vet і pilot, медбрат Hlib — з уроку ✅.
- **BrE, без звуку.** organised, Mum, maths. AmE, IPA, «Listen» і A/B/C немає ✅.
- **Копії.** Перевірив 6-грами проти g4–g11. Збігаються лише інструкції й моделі правила («Could you send me the timetable», «you don’t have to decide today»). Рамки вправ з тим самим ключем не повторено ✅.
- **Авторське право (WebSearch у лапках, у цій сесії).** «I’ll be able to write programs for robots that help doctors» і «Firefighters often work outdoors: a fire can be in a forest or in a field» — збігів немає ✅.

## 5. Правки (зроблені)
1. a09 words: `re|+port|er` → `pho|+tog|ra|pher`; steps.
2. a43 body, opts, steps: «wear your school uniform» → «bring a notebook».
3. a49 дистрактор «I should» → «Should I to».
4. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe9s7` — 0 помилок, 0 попереджень. `personalization-qa --pool pe9s7` — без помилок. euphony — 0 відхилень. Браузерний test-answer-ui не запускав (Python playwright у контейнері недоступний; лишається CI).

## 6. Що потребує людини
Нічого блокувального. Учитель вирішує, чи ставити `approved`.
