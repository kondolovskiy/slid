# Верифікація: пул pe10s8 (англійська, 10 кл., розділ e10s8 «Education and careers»)

Верифікатор: verifier-pe10s8, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s8.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s8.md. Опора: уроки `content/eng/g10-e10s8.js` (verified) і розділи g4–e10s7. Еталон звіту: reports/verify/write-eng-pool-g9-e9s9.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 7 правок у 5 вправах і в шапці: 2 копії рамок уроку (a30/a35 — речення multi l3; a61 — рамка build l5 «… promises … mum, two correct orders, by Friday»), 1 суперечність сюжету (a34 «In two years»), 1 узагальнення вигаданого правила компанії (a74), 1 hint (a30), а також статус і шапку. Нових TQ немає, людині вирішувати нічого не треба.

## 1. Програма, `src`
`sources`: `p1407`, `program: true`, title і url — як у facts/eng.md ✅. с. 22 — функція «обговорювати перспективи» (a69–a71, func l6); с. 23 — теми «Шкільне життя», «Робота і професії», граматика phrasal and prepositional verbs, prepositions in time phrases — решта ✅. `srcPage`/`adapted` немає ✅.

## 2. Факти
Усі факти пулу — з уроків e10s8. Нових фактичних тверджень про реальні установи немає; вигаданий Summer Photo Course (Lviv) — без назви бренду.

| Твердження (вправа) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| НМТ 2026: на комп'ютері, 4 предмети — українська, математика, історія України + 1 на вибір (a16, a18, a27) | WebSearch: https://osvita.ua/test/88222/ , https://news.telegraf.com.ua/ukr/ukraina/2025-12-17/5928258-chotiri-predmeti-za-240-khvilin-yakim-bude-nmt-u-2026-rotsi , https://24tv.ua/nmt-2026-skilki-predmetiv-bude-yaki-obovyazkovi_n2917829 (три обов'язкові + один на вибір; комп'ютерний формат); тестовий центр — reports/verify/write-eng-g10-e10s8.md | ✅ |
| З 1.09.2027 — профільна старша школа 10–12 класів у ліцеях, 12 років (a06, a09) | WebSearch: https://www.kmu.gov.ua/news/yak-zminytsia-starsha-shkola-z-2027-roku-use-pro-vybir-profiliv-i-novi-mozhlyvosti-dlia-uchniv , https://mon.gov.ua/news/reforma-starshoi-shkoly-choho-ochikuvaty-uchniam (старт 1 вересня 2027, 10–12 класи, перший випуск 2030) | ✅ |
| Бакалавр: Україна 4, Англія 3, Шотландія 4 роки (a07, a09, a21) | WebSearch: https://www.ucas.com/international/international-advisers/supporting-international-students/the-uk-degree-system , https://www.dundee.ac.uk/feature/undergraduate-degrees-scotland-explained (England 3, Scotland honours 4); Україна 4 — звіт уроку | ✅ |
| England: можна піти зі школи в 16, але освіта чи навчання до 18 (a17, a20, a21) | https://en.wikipedia.org/wiki/Raising_of_school_leaving_age_in_England_and_Wales («participation age» 18, школа — 16; sixth form, college or work based training) | ✅ |
| UCAS — подання до університетів UK, і Шотландії теж (a19, a26, a27) | https://en.wikipedia.org/wiki/UCAS («the vast majority of UK universities … use the UCAS service»; Scotland — через UCAS undergraduate scheme) | ✅ |
| GCSEs у 16, A levels ≈ 18, apprenticeship — робота + оплата + навчання (a17, a20, a25) | дослівно з уроку l2 (Emma 16 «I’m taking my GCSEs this summer»; info box) | ✅ |
| a74 «technicians never climb a turbine alone» | у a67 це правило «In my company» (вигадана компанія Leah); узагальнення на всіх техніків — нове твердження без джерела | ⚠️ → «she never climbs a turbine alone» |

Канон героїв (glossary/eng-heroes.md, 10 кл.: 16 років, Dmytro 12): Oksana — ліцей у Poltava, vet у Kharkiv; Denys 18; Arsen 17; Leah 19; Oliver — однокласник Emma; Bohdan — wind turbine technician; Mariia — малює, UX; Taras — фото, Ostap — друг ✅. **a34 «In two years, I want to apply…»** суперечить сюжету: Oksana цього року почала ліцей (Year 10), а Taras у тому ж Year 10 пише «next year I’ll take the NMT» (l2) → «Next year» ⚠️ → виправлено.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки плиток разом з `extra` (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s7-pe10s8/bin/chk.mjs`): зараховано лише порядки з ключа, граматичних порядків поза ключем немає.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | 4 пари | = | l1 info | перебрав усі праві | ✅ |
| a02 gaps | college; in | = | l1 | — | ✅ |
| a03 gaps | qualifications; graduate | = | l1 «Talking about studying» | leave / finish + from — неграматичні в цьому значенні | ✅ |
| a04 choice | because she wants to study veterinary medicine | = | текст | — | ✅ |
| a05 multi | [0,2] | = | текст + l1 | — | ✅ |
| a06 choice | twelve | = | l1 choice (2027) | — | ✅ |
| a07 choice | four years | = | l1 info | — | ✅ |
| a08 choice | to a college | = | l1 info (after Year 11) | — | ✅ |
| a09 multi | [0,2] | = | l1 | — | ✅ |
| a10–a12 stress | ce, col; bach, ce, ca; grad, ver, ce, bach, ca | = | l1 `<u>` | §4 | ✅ |
| a13 gaps | at; graduate | = | l1 | — | ✅ |
| a14 build | Oksana hopes to get into university in Kharkiv. | = | l1 | 1 порядок | ✅ |
| a15 gaps | college; profession; diploma | = | l1 | — | ✅ |
| a16 choice | at a test centre | = | текст + l2 | — | ✅ |
| a17 choice | He’ll be paid for his work while he learns. | = | l2 info (apprenticeship) | — | ✅ |
| a18 multi | Ukrainian, maths, biology | = | текст | — | ✅ |
| a19 choice | through UCAS | = | l2 info | — | ✅ |
| a20 gaps | GCSEs; 18 | = | l2 | — | ✅ |
| a21 multi | [0,2] | = | l2 part 2 | — | ✅ |
| a22–a24 stress | pren, qual; …; qual, ca, pren, bach | = | l1, l2 `<u>` | — | ✅ |
| a25 gaps | apprentice; paid | = | l2 | — | ✅ |
| a26 build | 2 порядки | = | l2 | кома в плитці «Next year,» відсікає її в кінці | ✅ |
| a27 gaps | path; apprenticeship; UCAS; NMT | = | l2 | — | ✅ |
| a28 match | 4 пари | = | l3 info | — | ✅ |
| a29 gaps | find; put | = | l3 | — | ✅ |
| a30 choice | fill up | = | l3 info | варіанти — дослівно речення multi l3 («Please fill in / fill out / fill up this form»); hint «Two of these sentences mean the same» відкидав дистрактори | ⚠️ → нові речення про Arsen, hint-навігація |
| a31 gaps | for; to | = | l3 info 2 | — | ✅ |
| a32 gaps | for; on | = | l3 | — | ✅ |
| a33 word | for | = | l3 | — | ✅ |
| a34 gaps | to; for | = | l3 | «In two years» (§2) | ⚠️ → «Next year» |
| a35 multi | [0,1] | = | l3, l4 | «Please fill out / fill on this form» — речення multi l3 | ⚠️ → «Denys filled out three application forms», «Mariia filled on the form for the drama course» |
| a36 choice | She learnt when the course starts. | = | l3 | — | ✅ |
| a37 choice | She filled in the form too late. | = | l3 | — | ✅ |
| a38 multi | [0,1] | = | l3 | — | ✅ |
| a39 gaps | for | = | l3 | — | ✅ |
| a40 build | 2 порядки | = | l3 info 2 | «apply to a place … for two universities» — граматичне, але безглузде | ✅ |
| a41 gaps | down; up; in | = | l3 | sign in for / hand off — не в цьому значенні | ✅ |
| a42 gaps | it in | = | l4 | — | ✅ |
| a43 choice | turned it down | = | l4 | — | ✅ |
| a44 multi | [0,1,3] | = | l4 info | — | ✅ |
| a45 pick | [filled in them] | = | l4 | — | ✅ |
| a46 gaps | for it; it in; on them | = | l4 info 2 | — | ✅ |
| a47 word | them in | them in, them out | l3 (fill out), l4 | — | ✅ |
| a48 gaps | it in | = | l4 | — | ✅ |
| a49 build | 2 порядки | = | l4 | — | ✅ |
| a50 gaps | them in; for it; it down | = | l4 | — | ✅ |
| a51 choice | 20 April | = | l5 info (until — up to then) | інші варіанти — дата відповіді й старт курсу | ✅ |
| a52 choice | on 25 April or earlier | = | l5 info (by) | — | ✅ |
| a53 multi | [0,2] | = | l5 | 20 April свідомо не питається (включність until) — ✅, питання автора | ✅ |
| a54 gaps | for | = | l5 | — | ✅ |
| a55 gaps | by | = | l5 | — | ✅ |
| a56 gaps | until; by | = | l5 | — | ✅ |
| a57 pick | [since] | = | l5 | — | ✅ |
| a58 gaps | till; until; since | = | l5 info (till = until) | until у першому пропуску немає ✅ | ✅ |
| a59 choice | No: before 20 April means 19 April… | = | l5 info | — | ✅ |
| a60 gaps | since | = | l5 | — | ✅ |
| a61 build | 2 порядки | = | l5 | рамка build l5 («Zoriana promises her mum. There are two correct orders», I’ll send my form by Friday + until) з новим іменем і тим самим ключем (pitfall 18) | ⚠️ → «You will get my photos by the end of the week» (Taras → Ms Kravets) |
| a62 gaps | by; before; for; until | = | l5 | since + Past Simple неграматичне; by у другому пропуску не варіант — ✅, питання автора | ✅ |
| a63 match | 4 пари | = | l6 info | — | ✅ |
| a64 gaps | UX designer; hackers | = | l6 | — | ✅ |
| a65 gaps | demand; prospects; requires | = | l6 | — | ✅ |
| a66 choice | He watches people use the app. | = | текст | — | ✅ |
| a67 choice | teamwork | = | текст + l6 | — | ✅ |
| a68 multi | [0,3] | = | текст | — | ✅ |
| a69 match | 4 пари | = | l6 «Talking about the future» | — | ✅ |
| a70 choice | I’m not sure it’s for me. I love taking photos more than coding. | = | l6 | — | ✅ |
| a71 gaps | of; for; On the other hand | = | l6 | Because, / Due to, — неграматичні з комою | ✅ |
| a72 gaps | of; prospects | = | l6 | — | ✅ |
| a73 build | There’s a growing demand for cybersecurity specialists. | = | l6 | — | ✅ |
| a74 gaps | requires; skills; thinking | = | l6 | узагальнення правила компанії; body — рамка фіналу l6 («writes about the careers fair for the school website») | ⚠️ → «she never climbs…», «Daryna tells her mum about the careers fair» |
| a75–a77 stress | an, sign; tur, ni, vel; ca, an, ni, tur, vel | = | l6 `<u>` | — | ✅ |

**Друга правильна відповідь:** fill in / fill out ніде не протиставлено (у `word` — обидва); sign up for без on; hand in без out / down / on; until і before в одному пропуску не стоять ✅. Хибні варіанти неграматичні або суперечать тексту ✅. AmE як хибного варіанта немає ✅. `word` без кінцевого `.!?` ✅. Правдивих тверджень у ролі «помилки» немає ✅. Покриття: 77 вправ, 6 уроків, у кожної вправи рівнів 2–3 є `hint`.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word> (UK): lyceum «laɪˈsiː.əm», college (US «ˈkɑː.lɪdʒ»; UK у статті), bachelor «ˈbætʃ.əl.ər», qualification (US «ˌkwɑː.lə.fəˈkeɪ.ʃən»), apprenticeship «əˈpren.tɪs.ʃɪp», qualified (US «ˈkwɑː.lə.faɪd»), analyst «ˈæn.əl.ɪst», designer «dɪˈzaɪ.nər», turbine «ˈtɜː.baɪn», technician «tekˈnɪʃ.ən», developer «dɪˈvel.ə.pər», communication «kəˌmjuː.nəˈkeɪ.ʃən». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: college «/ˈkɒlɪdʒ/», bachelor «/ˈbætʃələ(r)/», qualification «/ˌkwɒlɪfɪˈkeɪʃn/», graduate_1 «/ˈɡrædʒuət/», university «/ˌjuːnɪˈvɜːsəti/», apprenticeship «/əˈprentɪʃɪp/», qualified «/ˈkwɒlɪfaɪd/», analyst «/ˈænəlɪst/», designer «/dɪˈzaɪnə(r)/», turbine «/ˈtɜːbaɪn/», technician «/tekˈnɪʃn/», developer «/dɪˈveləpə(r)/», communication «/kəˌmjuːnɪˈkeɪʃn/». lyceum в OALD немає — друге джерело Wiktionary https://en.wiktionary.org/wiki/lyceum «/laɪˈsiːəm/». Один наголос у кожному словнику, ключі `stress` збігаються, кожне слово підкреслене `<u>` в уроках ✅.
- **Лексика** (`bin/lex.mjs` проти g4–e10s7 і e10s8 до `lesson`): поза уроками лише форми qualification(s), prospect, requiring ✅. Слів з пізніших уроків розділу немає ✅.
- **BrE, без звуку:** test centre, learnt, Mum, sixth form; AmE, IPA, A/B/C, «Listen» немає ✅.
- **Копії рамок уроків** (6-грами, `bin/ngram.mjs`): після правок збігаються лише шаблонні інструкції й формули уроку (a growing demand for, I don’t like sitting at a computer all day). Постер a51–a53 повторює будову постера l5 (since / for / until / by), але дати, курс і всі три питання нові — лишаю ✅.
- **Авторське право** (WebSearch у лапках):

| Фрагмент | Запит | Результат |
|---|---|---|
| a05 «I go to a garage and repair electric cars with real mechanics» | "I go to a garage and repair electric cars with real mechanics" | збігу немає |
| a68 «communication skills and attention to detail are more important than maths» | "communication skills and attention to detail are more important than maths" | збігу немає |

## 5. Правки (зроблені)
1. a61: нова рамка — «Taras answers Ms Kravets about the photos for the magazine»; плитки you / will get / my photos / by / the end of the week + until; ключ «You will get my photos by the end of the week.» і «By the end of the week you will get my photos.»; hint, steps. Перебір: зараховано лише ці два порядки.
2. a30: варіанти «Arsen filled up / filled out / filled in the form for the training day.» (замість речень multi l3); hint → «Look at the line about forms in the box “Phrasal verbs for applying”.»
3. a35: «Please fill out this form.» → «Denys filled out three application forms.»; «Please fill on this form.» → «Mariia filled on the form for the drama course.»; ключ [0,1] без змін.
4. a34: «In two years, I want to apply…» → «Next year, I want to apply…» (Year 10, НМТ наступного року — як Taras у l2).
5. a74: «because technicians never climb a turbine alone» → «because she never climbs a turbine alone»; body → «Daryna tells her mum about the careers fair.»
6. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe10s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s8` — без помилок; `euphony --pool pe10s8` — без зауважень. `test-answer-ui.py --suite content --pool pe10s8` не запускав: у контейнері немає Python-модуля playwright — лише CI (job browser).
