# Верифікація: пул pe9s5 (англійська, 9 кл., розділ e9s5 «Youth culture and clubs»)

Верифікатор: verifier-pe9s5 (сесія verifier-pe9s5-pe9s6), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s5.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s5.md. Опора: уроки `content/eng/g9-e9s5.js` (verified) і розділи g4–e9s4. Еталони: reports/verify/write-eng-pool-g9-e9s1.md, -e9s2.md, -g8-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 4 змістові правки (1 хибний факт, 1 неоднозначний висновок у читанні, 1 друга правильна послідовність в `order`, 1 слово поза уроками) і оновив статус із шапкою. Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. Сторінки: с. 33 — тема «Молодіжна культура» й функція «приймати або відхиляти пропозицію» (l1, l2 vocab/read/cult/phon, l5 read/func/write, l6 read/func/write); с. 34 — Relative з whose / where / why / when (l2 gram, l3, l4, l5 gram, l6 gram). Усі `src` відповідають урокам ✅.

## 2. Факти

| Твердження (вправи) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Plast почався в Lviv; перші гуртки — 1911, офіційний початок — 12.04.1912; назва від пластунів; > 100 років (a12, a14, a32) | WebSearch: https://en.wikipedia.org/wiki/Plast ; https://www.encyclopediaofukraine.com/pages%5CP%5CL%5CPlastUkrainianYouthAssociation.htm ; https://winner.ua/en/archive/plast2020 (присяга 12.04.1912) | ✅ |
| Перший табір Baden-Powell — 1907, Brownsea Island, England (~20 хлопців) (a13, a14) | WebSearch: https://nationaltrust.org.uk/visit/dorset/brownsea-island/history-of-brownsea-island (1.08.1907, 20 boys, Dorset); https://en.wikipedia.org/wiki/Brownsea_Island_Scout_camp | ✅ |
| DofE: UK, 1956; три рівні Bronze / Silver / Gold; 14–24 (a13, a14, a19) | WebSearch: https://en.wikipedia.org/wiki/The_Duke_of_Edinburgh%27s_Award ; https://www.edinburghnews.scotsman.com/whats-on/arts-and-entertainment/what-is-the-duke-of-edinburgh-award-how-bronze-silver-and-gold-scheme-works-and-the-age-you-can-take-part-3197211 | ✅ |
| a17 (до правки): «Tom is thirteen… Not yet: the DofE is for young people from 14 to 24» | WebSearch: https://www.dofe.org/do/ages/ (у видачі: Bronze — «the school year you turn 14», зазвичай Year 9); https://www.scouts.org.uk/volunteers/running-your-section/programme-guidance/information-for-volunteers/top-awards-for-young-people/the-duke-of-edinburghs-award/enrolling-a-young-person/ («13 years old and in Year 9 are eligible»). Tom за каноном у 9 кл. — 13, Year 9 (eng-heroes.md: Year 7 з 7 кл.). Отже, він уже може почати Bronze. WebFetch dofe.org — ENOTFOUND (хост треба дозволити в мережевих налаштуваннях) | ❌ → Emma’s mum Sarah (доросла) |

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. `build` — повний перебір перестановок (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s5-6/bin/chk.mjs`): a34 — 2 порядки, a43 — 4, a54 — 2, усі в ключі; порядків з пасткою (when / who’s / because) немає.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | into; hang out | = | l1 info | hang in — хибний | ✅ |
| a02 match | 4 пари | = | l1 info | перебрав усі праві | ✅ |
| a03 word | fan | = | l1 info | — | ✅ |
| a04 pick | gamers, skaters, vloggers | = | l1 | інших слів-людей у тексті немає | ✅ |
| a05 gaps | into; gamer; vlogger; trend; hang out | = | l1 | Orest, Yaryna — Lviv, канон | ✅ |
| a06 stress | cul, pu | = | l1 `<u>` | — | ✅ |
| a07 stress | teen, vlog, tar | = | l1, e5s6 `<u>` | — | ✅ |
| a08 stress | teen, si, cul, ra, vlog | = | l1, e8s4, e4s3 `<u>` | — | ✅ |
| a09 choice | old films and vintage clothes | = | текст | — | ✅ |
| a10 multi | [0,2,3] | = | текст + l1 | — | ✅ |
| a11 choice | — | a skater and a vlogger | текст | «spend hours at the skatepark» не каже, що друг катається: він може лише знімати (вирішує лише здогадка; автор теж позначив як сумнівне) | ⚠️ → «ride our skateboards» |
| a12 choice | in Lviv | = | l2 reading 1 | — | ✅ |
| a13 gaps | 1907; England; 1956 | = | l2 reading 2 | — | ✅ |
| a14 multi | [1,2,4] | = | l2 | — | ✅ |
| a15 choice | Mr Price | = | текст | Mr Price — канон | ✅ |
| a16 choice | in tents | = | текст | — | ✅ |
| a17 choice | — | Not yet… | l2 | хибний факт (§2) | ❌ → Sarah |
| a18 gaps | who; which | = | l2 gram (e8s4l3) | that не серед варіантів | ✅ |
| a19 gaps | who; which; who | = | l2 | — | ✅ |
| a20 pick | [which] | = | l2 | — | ✅ |
| a21 stress | mem, teer | = | l2 `<u>` | — | ✅ |
| a22 stress | di, mem, gin | = | l2, e7s5 `<u>` | — | ✅ |
| a23 stress | sa, teer, mem, di, ti | = | l2, e7s5 `<u>` | — | ✅ |
| a24 match | 5 пар | = | l2 info | перебрав усі праві | ✅ |
| a25 word | join | = | l2 info | — | ✅ |
| a26 gaps | member; camp; hiking; volunteers | = | l2 | — | ✅ |
| a27 pick | [award] | = | l2 | — | ✅ |
| a28 gaps | where; when | = | l3 | 5 May — день народження Taras (канон) | ✅ |
| a29 choice | where my mum works | = | l3 | Olena — nurse у лікарні, канон | ✅ |
| a30 sort | 0,1,0,1,0,1 | = | l3 «Where or which?» | — | ✅ |
| a31 word | when / that | = | l3 info (that після назви часу) | — | ✅ |
| a32 pick | [where] (2-ге) | = | l3 | — | ✅ |
| a33 gaps | which; where; when | = | l3 | Andrii народився в Kyiv (e9s6l1) | ✅ |
| a34 build | 2 порядки | = | l3 | — | ✅ |
| a35 gaps | where; when | = | l3 | шахи в понеділок (e9s5l7) | ✅ |
| a36 gaps | where; which; when | = | l3 | photography club Emma — канон | ✅ |
| a37 gaps | which; which; where; when; where | = | l3 | — | ✅ |
| a38 gaps | whose; who | = | l4 | дід навчив шахів, окуляри — канон | ✅ |
| a39 word | whose | = | l4 | Zlata, бандура — канон | ✅ |
| a40 pick | [who’s] | = | l4 | бабуся Nina — teacher; Chloe — канон | ✅ |
| a41 sort | 0,1,0,1,0,1 | = | l4 | — | ✅ |
| a42 gaps | who’s; whose; who | = | l4 info «who’s = who is» | who’s into rap правильний | ✅ |
| a43 build | 4 порядки | = | l4 | — | ✅ |
| a44 choice | whose singer | = | l4 (whose для речей) | — | ✅ |
| a45 gaps | whose; who | = | l4 | Roksolana: big blue eyes, friendly — канон | ✅ |
| a46 gaps | whose; who; whose | = | l4 | — | ✅ |
| a47 gaps | who; which; whose; who | = | l3–l4 | Amelia, Isla — канон | ✅ |
| a48 choice | 15 | = | таблиця | — | ✅ |
| a49 multi | [1,2] | = | таблиця | — | ✅ |
| a50 choice | her friend was a member… | = | текст | — | ✅ |
| a51 gaps | why | = | l5 | — | ✅ |
| a52 word | why | = | l5 | — | ✅ |
| a53 pick | [because] | = | l5 | — | ✅ |
| a54 build | 2 порядки | = | l5 | — | ✅ |
| a55 word | why / that | = | l5 info | — | ✅ |
| a56 choice | I’d love to! | = | l5 | — | ✅ |
| a57 choice | Thanks for asking… grandma | = | l5 | — | ✅ |
| a58 gaps | for; Sounds; afraid | = | l5 | «Sound great!» як відповідь не вживають (наказовий спосіб): хибний однозначно | ✅ |
| a59 multi | [0,3] | = | l5 | — | ✅ |
| a60 gaps | great; love | = | l5 | дистрактор greatly — слово поза уроками | ⚠️ → `{*Sounds|Sound}` |
| a61 gaps | afraid; That’s why | = | l5 | — | ✅ |
| a62 gaps | choose; because; is that; That’s why | = | l5 | — | ✅ |
| a63 choice | every Friday | = | постер | — | ✅ |
| a64 choice | Yes, you can! | = | постер | Dmytro 11 — канон 9 кл. | ✅ |
| a65 multi | [1,2] | = | постер + l6 (exhibition) | — | ✅ |
| a66 choice | Would you like… | = | l6 info | Do you like to come…? — граматичне, але не запрошення (питає про звичку); ключ однозначний | ✅ |
| a67 gaps | Would; don’t | = | l6 info | — | ✅ |
| a68 match | 5 пар | = | l6 info | перебрав усі праві | ✅ |
| a69 order | — | Hi → club → Friday → invite → end | l6 info | «Would you like to come?» природно стоїть і одразу після речення про клуб (до «The first meeting is on Friday»), а рушій приймає лише одну послідовність | ⚠️ → «Would you like to come to the meeting?» |
| a70 gaps | When; Where; Who; Price | = | l6 постер | — | ✅ |
| a71 gaps | love; afraid; That’s why; which | = | l5, l3 | — | ✅ |
| a72 gaps | whose; when | = | l4, l3 | — | ✅ |
| a73 pick | [when] | = | l3 | — | ✅ |
| a74 gaps | why; who; where | = | l5, l4, l3 | — | ✅ |

**where / which:** скрізь вирішує те, що стоїть після пропуску (дієслово → which; людина + дієслово / «there» → where), як у e9s5l3 ✅. **that** після назви часу ніде не хибний ✅. **the reason because** — лише хибний варіант ✅. **in which** не вживається ✅. Покриття: 74 вправи, 6 уроків, рівні 1–3 на кожен урок. `sk` — з екранів уроку. У кожної вправи рівня 2–3 є `hint`, підказки не видають ключа. `personalization-qa --strict` — без помилок.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: culture «ˈkʌl.tʃə», computer «kəmˈpjuː.tə», teenager «ˈtiːnˌeɪ.dʒə», vlogger «ˈvlɒɡ.ə», guitar «ɡɪˈtɑː», musician «mjuːˈzɪʃ.(ən)», karate «kəˈrɑː.ti», member «ˈmem.bə», volunteer «ˌvɒl.ənˈtɪə», expedition «ˌek.spəˈdɪʃ.(ən)», beginner «bɪˈɡɪn.ə», competition «ˌkɒm.pəˈtɪʃ.(ən)». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: culture «/ˈkʌltʃə(r)/», computer «/kəmˈpjuːtə(r)/», teenager «/ˈtiːneɪdʒə(r)/», vlogger «/ˈvlɒɡə(r)/», guitar «/ɡɪˈtɑː(r)/», musician «/mjuˈzɪʃn/», karate «/kəˈrɑːti/», member «/ˈmembə(r)/», volunteer «/ˌvɒlənˈtɪə(r)/», expedition «/ˌekspəˈdɪʃn/», beginner «/bɪˈɡɪnə(r)/», organization «/ˌɔːɡənaɪˈzeɪʃn/», competition «/ˌkɒmpəˈtɪʃn/». Усі ключі `stress` збігаються.
- **Опора `<u>`:** усі слова `stress` підкреслені в уроках до свого уроку: e9s5l1 (teenager, culture, computer, vlogger), e9s5l2 (member, volunteer, expedition, organisation), gui`<u>`tar (e5s6), mu`<u>`si`</u>`cian (e8s4), ka`<u>`ra`</u>`te (e4s3), be`<u>`gin`</u>`ner, compe`<u>`ti`</u>`tion (e7s5) ✅.
- **hang in:** CD/OALD мають лише «hang in there» — «hang in with my friends» однозначно хибне ✅.
- **Лексика** (`bin/lex.mjs` проти g4–e9s4 і e9s5 до `lesson`): лишалося лише greatly (a60) — виправлено ✅.
- **Канон героїв** (memory/long/glossary/eng-heroes.md): усі деталі узгоджені (Taras 5 May, Zlata і бандура, Andrii — окуляри, дід-шахіст, бабуся Nina — teacher, Chloe; Mariia — подруги Polina, Roksolana, Kateryna; Emma — photography і swimming club, Amelia, Isla; Dmytro 11; Mr Price; Mr Pavliuk). Нові дрібні деталі автора (Emma — photography club у четвер, Roksolana в drama club, бабуся Orest) суперечностей не мають.
- **BrE, без звуку:** at the weekend, Mum, favourite, organisation; AmE-правопису, IPA, A/B/C, «Listen» немає ✅. Час постера «3–4.30 pm» — за TQ-123 «Як зараз» ✅.
- **Копії рамок** (6-грами проти g4–g11): збігаються лише інструкції й формули уроку («hang out with my friends», «Thanks for asking, but I’m afraid I can’t», «Beginners are welcome»), жодного речення уроку з тим самим ключем ✅.
- **Авторське право:** «At first, I wasn’t into drama at all. But my friend…» (a50) — WebSearch у лапках, збігу немає ✅.

## 5. Правки (зроблені)
1. a11: «spend hours at the skatepark» → «ride our skateboards at the skatepark»; hint і steps.
2. a17: Tom (13, Year 9 — уже може почати Bronze) → Emma’s mum Sarah; варіант «Not yet…» → «Sorry, Mum: …»; hint і steps.
3. a60: `{*great|greatly}` → `{*Sounds|Sound} great!`; steps.
4. a69: «Would you like to come?» → «Would you like to come to the meeting?» (тепер речення про зустріч мусить стояти раніше); steps.
5. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe9s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s5 --strict` — без помилок; euphony — без зауважень.

## 6. Для людини
Нічого блокувального. Примітка: текст уроку e9s5l2 («Young people from 14 to 24 can take part») правдивий як діапазон програми, але старт Bronze — «the school year you turn 14» (Year 9). Якщо в майбутніх розділах Tom (13) захоче DofE, не писати «too young» (рядок NOTE в inbox).
