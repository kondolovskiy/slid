# Верифікація: пул pe7s3 (англійська, 7 кл., розділ e7s3 «Health and medicine»)

Верифікатор: verifier-pe7s3-pe7s4, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s3.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g7-e7s3.md. Опора: уроки `content/eng/g7-e7s3.js` (verified, reports/verify/write-eng-g7-e7s3.md). Еталон оформлення: reports/verify/write-eng-pool-g6-e6s7.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і вправ без опори я не знайшов. Хибних фактів і збігів з опублікованими текстами теж немає. Зробив 4 правки: a21, a31, a52, a10. Ключ a09 зі 112 обґрунтовано й лишено (§2). Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, як у facts/eng.md) і прочитав `pdftotext`:
- с. 28: «Добирає важливу інформацію на упаковках про…», «Розуміє прості інструкції на упаковках»;
- с. 32 (5.2.1, 7-ий клас): «Охорона здоров’я — Відвідування лікаря», «просити про допомогу»;
- с. 34: «Ought: advice»;
- с. 35: «Present perfect simple: … duration with ‘since’», «Past simple», «Pronouns … indefinite».

`src` відповідають сторінкам: l1–l2 — с. 32, l2 gram, l3, l4 — с. 35, l5 — с. 34, l6 — с. 28 ✅.

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| В Україні швидка — 103 (a09, a10, a15) | https://en.wikipedia.org/wiki/112_(emergency_telephone_number) (curl: «Ukraine (alongside 101 for Fire, 102 for Police, 103 for Ambulance…)»); WebSearch «Ukraine emergency numbers 101 102 103 112 ambulance»: https://visitukraine.today/blog/1247/if-103-does-not-work-how-to-call-an-ambulance-when-there-is-no-connection, https://ukranews.com/en/news/898124-kyiv-city-administration-publishes-reserve-ambulance-numbers-if-103-does-not-work | ✅ |
| У Великій Британії — 999 (a08, a10) | https://en.wikipedia.org/wiki/999_(emergency_telephone_number) (curl: «999 is the official emergency services number for the United Kingdom, but calls are also accepted on… 112»); WebSearch: https://gov.uk/guidance/999-and-112-the-uks-national-emergency-numbers, https://www.londonambulance.nhs.uk/our-services/calling-999/ | ✅ |
| a09: 112 у ключі поруч зі 103 | 112 працює в Україні: WebSearch — https://mvs.gov.ua/en/news/sluzba-112-na-vsii-teritoriyi-ukrayini-zapraciuje-do-kincia-2024-roku-leonid-timcenko («Service 112 in the whole territory of Ukraine will work by the end of 2024»), https://babel.ua/en/news/100354-by-the-end-of-2024-the-112-service-will-work-in-all-regions-of-ukraine; en.wikipedia 112 (вище) | ✅ лишено, див. нижче |

WebFetch не резолвить mvs.gov.ua і gov.uk, а curl на них повертає порожню сторінку. Ці два URL я бачив лише у видачі WebSearch. Решту сторінок відкрив curl.

**a09, 112 — обґрунтування.** Опора ключа 103 — екран l1 «Can you help me, please?», тож D-019 виконано. 112 не потрібен, щоб розв'язати вправу. Він лише не дає позначити неправильною правдиву відповідь: служба 112 працює в Україні. Якщо прибрати його з ключа, дитина, яка знає 112, отримає «неправильно» на правдиву відповідь. Steps 112 хибним не називають ✅. Вада тут одна: учень, який написав 112, не побачить нагадування про 103. Це не блокує.

Інші твердження стосуються героїв. Вони вигадані й узгоджені з каноном glossary/eng-heroes.md: Daryna — однокласниця Andrii; Tom (11) — як у e7s1; Emma вже бувала в Kyiv (e6s3, e6s7). Етикетки a69–a71 вигадані («not a real medicine»), без назв препаратів ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `gaps`, `pick`, `stress`, `word`, `match`: `SLID_LANG.solution` зараховується через `check(…, "en")`. `build`: я перебрав `SLID_LANG.check` по всіх перестановках усіх підмножин tiles + extra (node + vm + app/lang.js; скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe7s3-4/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | dentist’s; chemist’s | = | l1 info #2 | ні | ✅ |
| a02 match | 4 пари | = | l1 info #2 | перебрав усі праві — ні | ✅ |
| a03 word | appointment | = | l1 info #4 | ні | ✅ |
| a04 gaps | dentist’s; doctor’s; chemist’s; ambulance | = | l1 #2, l1 match | ні: sore throat + temperature → doctor’s (як l1 match) | ✅ |
| a05 choice | …nearest chemist’s? | = | l1 #4, l1 gaps | ні | ✅ |
| a06 build | Could you help my grandma, please? | = | l1 #4 («Could you call…») | 1956 порядків — лише ключ | ✅ |
| a07 gaps | could; nearest; appointment | = | l1 #4, l1 фінал | «are you help» і «the near» — неграматичні | ✅ |
| a08 choice | 999 | = | l1 #4 | 112 серед варіантів немає | ✅ |
| a09 word | 103 | 103 / 112 | l1 #4 | 112 — правдива друга відповідь, у ключі (§2) | ✅ |
| a10 gaps | 103; 999 | = | l1 #4 | ні | ✅ після правки body (§5) |
| a11–a13 stress | <u>den</u>tist, ap<u>point</u>ment, <u>chem</u>ist, <u>am</u>bulance, <u>hos</u>pital | = | l1 info `<u>` | — | ✅ (словники — §4); у кожному наборі є appointment з іншим наголосом |
| a14 gaps | appointment; chemist’s | = | l1 | ні | ✅ |
| a15 gaps | dentist’s; appointment; 103; ambulance | = | l1 | ні | ✅ |
| a16 order | ask → yes/what’s the matter → toothache/where → opposite → thank you | = | l1 #4, e4s5l4 | порядок однозначний | ✅ |
| a17 gaps | earache; backache | = | l2 info #2 | ні | ✅ |
| a18 choice | flu | = | l2 info #2 | ні | ✅ |
| a19 match | 5 пар | = | l2 #2, l2 match | she/he не дає другої пари: частина тіла однозначна | ✅ |
| a20 gaps | earache; a sore throat; I feel sick. | = | l2 | ні | ✅ |
| a21 choice | He’s got a cold. | = | текст | ні | ⚠️ steps цитували «a cold and a sore throat», а в тексті цього немає → виправлено |
| a22 multi | [0,1] | = | текст | ні | ✅ |
| a23 multi | [0,2] | = | текст | ні | ✅ |
| a24 gaps | anything; something | = | l2 info #6 (headache — e4s5) | ні | ✅ |
| a25 word | anything | = | l2 #6 | ні (something — помилка з don’t) | ✅ |
| a26 gaps | something; anything; nothing | = | l2 #6 | «anything else hurts» неграматичне | ✅ |
| a27 pick | [nothing] (друге) | = | l2 #6, l2 pick | ні | ✅ |
| a28 word | nothing | = | l2 #6, l2 word | ні | ✅ |
| a29 gaps | a sore throat; a temperature | = | l2, l1 | ні | ✅ |
| a30 gaps | backache; cough; anything | = | l2 | ні | ✅ |
| a31 gaps | sore throat; nothing; anything | = | l2 | ні | ⚠️ «Nothing hurts now» суперечило «I’ve still got a sore throat» (sore throat = my throat hurts, l2 match) → виправлено |
| a32 gaps | cut; hurt | = | l3 info #3 | ні | ✅ |
| a33 word | broken | = | l3 #3 | hurt відсічено умовою «third form of break» | ✅ |
| a34 build | Have you cut your hand? | = | l3 #6 | 325 — лише ключ | ✅ |
| a35 gaps | hasn’t; has; has | = | l3 #6 | «Yes, he did» на Has he…? — хибне | ✅ |
| a36 pick | [fell], [hurted] | = | l3 #3 | ні | ✅ |
| a37 word | burnt | burnt / burned | l3 #3 | обидві в ключі (CD «burnt or burned») | ✅ |
| a38 gaps | fallen; hurt | = | l3 #3 | ні | ✅ |
| a39 gaps | has; has; has just called | = | l3 #2 | «has fallen … today» — правильне BrE | ✅ |
| a40 gaps | broken; just; have | = | l3 | ever у ствердженні — хибне | ✅ |
| a41 gaps | since; for | = | l4 #2 | ні | ✅ |
| a42 word | for | = | l4 #2 | since відсічено («four days») | ✅ |
| a43 gaps | did; started; have had | = | l4 #4, l4 gaps | «you had it since Friday» — хибне (since) | ✅ |
| a44 choice | I saw the dentist yesterday. | = | l4 #4 | ні | ✅ |
| a45 gaps | have had; went; for | = | l4 | «I had a cold since…» — хибне | ✅ |
| a46 build | When did your backache start? | = | l4 #4 | 325 — лише ключ | ✅ |
| a47 choice | Since Saturday. | = | l4 #4, l4 match | «Last Saturday» не відповідає на How long | ✅ |
| a48 match | 4 пари | = | l4 match | перебрав — ні | ✅ |
| a49 build | How long has Bohdan had a temperature? | = | l4 build | 1956 — лише ключ | ✅ |
| a50 gaps | since; saw | = | l4 | ні | ✅ |
| a51 gaps | started; have had; went | = | l4 | «had it for four days now» — now відсікає | ✅ |
| a52 gaps | When did; has had; saw | = | l4 | «Grandad is ill too. He had a cough for a week» — граматичне (завершений тиждень), у lvl 3 це друга правильна | ⚠️ → додав «now» (§5) |
| a53 gaps | ought to; should | = | l5 #2 | ні | ✅ |
| a54 word | to | = | l5 #2 | ні | ✅ |
| a55 pick | [don’t] | = | l5 #2 | ні | ✅ |
| a56 build | Should I stay at home today? | = | l5 #2 («we usually ask Should I…?») | 1956 — лише ключ | ✅ |
| a57 gaps | ought not to; should | = | l5 #2 | ні | ✅ |
| a58 choice | warm tea and rest | = | l5 | ні | ✅ |
| a59 sort | 3 advice / 2 rule | = | l5 #4 | ні | ✅ |
| a60 choice | …must be quiet. | = | l5 #4 | ні | ✅ |
| a61 gaps | don’t have to; ought to | = | l5 #4 | mustn’t суперечить умові «isn’t necessary» | ✅ |
| a62 gaps | ought to; should | = | l5 | ні | ✅ |
| a63 gaps | to rest; shouldn’t; ought not to | = | l5 | should суперечить «with a bad ankle» | ✅ |
| a64 gaps | has to; ought to; shouldn’t | = | l5 #4 | «it’s a rule» відсікає ought/should | ✅ |
| a65 match | 4 пари за годинами | = | l6 #2, l6 match | перебрав — ні | ✅ |
| a66 word | once | = | l6 #2 | ні | ✅ |
| a67 gaps | label; tablet | = | l6 #2 | ні | ✅ |
| a68 choice | at 12.00 | = | l6 match (8.00, 12.00…) | ні | ✅ |
| a69 choice | once a day | = | текст | ні | ✅ |
| a70 multi | [0,2] | = | текст | ні | ✅ |
| a71 choice | Never take it without an adult. | = | текст, l6 #4 | ні | ✅ |
| a72 gaps | Take; Do not | = | l6 #4, l6 gaps | ні | ✅ |
| a73 pick | [No] | = | l6 #4 | ні | ✅ |
| a74 build | Do not take more than three tablets a day. | = | l6 #4 | 13 699 — лише ключ | ✅ |
| a75 choice | Ask a teacher or the school nurse first. | = | l6 #4 (Children… only with an adult) | ні | ✅ |
| a76 gaps | without; ask | = | l6 #4 | ні | ✅ |
| a77 sort | 3 / 3 | = | l6 #4 | ні | ✅ |
| a78 gaps | twice; Drink | = | l6 | ні | ✅ |
| a79 gaps | once; label | = | l6 | ні | ✅ |
| a80 gaps | has had; went; every | = | l4, l6 #2 | ні | ✅ |

**Покриття:** 6 уроків, 80 вправ. Кожна пара (урок, sk) з оцінюваних не-hyp екранів має ≥ 3 вправи рівнів 1–3 (перевірив скриптом). `sk` кожної вправи є серед `sk` її уроку. У кожної вправи lvl 2–3 є `hint`. Boss l7 без вправ ✅.

## 4. Форми, BrE, лексика, безпечність, авторське право
- **Наголос (a11–a13), curl у цій сесії.** CD (https://dictionary.cambridge.org/dictionary/english/<word>): dentist «/ˈden.tɪst/», chemist «/ˈkem.ɪst/», appointment «/əˈpɔɪnt.mənt/», ambulance «/ˈæm.bjə.ləns/», hospital «/ˈhɒs.pɪ.təl/». OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<word>): «/ˈdentɪst/», «/ˈkemɪst/», «/əˈpɔɪntmənt/», «/ˈæmbjələns/», «/ˈhɒspɪtl/». Збігаються з ключами ✅.
- **burn:** CD «burnt or burned» (https://dictionary.cambridge.org/dictionary/english/burn) → a37, обидві форми в ключі ✅.
- **Лексика:** я звірив скриптом з уроками g4–g6, e7s1–e7s2 і e7s3 до `lesson` включно. Позначено лише форми однини чи множини слів, що в уроках уже є (symptom/symptoms, instruction/instructions). headache — з e4s5 ✅.
- **BrE:** chemist’s, Mum, favourite, PE, «at the weekend» не вжито. AmE і IPA немає. Позиційних посилань, A/B/C і «Listen» немає ✅.
- **Безпечність:** дозування подано лише «For adults». Дітям — «never without an adult. Talk to a doctor or a chemist first». У a71, a75, a76, a77 дитина звертається до дорослого. Поради l5 побутові ✅.
- **Копії уроків:** я перевірив 6-грами проти всіх g4–g11 (скрипт). Збіги з тим самим ключем — лише формули: «You ought to go to bed» (a53 — інша рамка), «a doctor or a chemist first». Блокувального немає.
- **Авторське право:** WebSearch з лапками — «an old man fell in our street. He couldn’t get up, so Mum called an ambulance» (a04). Збігів немає: видача — новини про падіння літніх людей з іншим текстом ✅.

## 5. Правки (зроблені)
1. **a21:** steps «Taras writes: “I’ve got a cold and a sore throat.”» → «I’ve got a bad cold.». Steps суперечили тексту.
2. **a31:** речення переставив. Тепер так: «My throat still hurts a bit: I’ve still got a {*sore throat|backache}. But {*nothing|anything} else hurts now, …». Раніше «Nothing hurts now» суперечило sore throat. Hint і steps узгоджено.
3. **a52:** «He has had a cough for a week» → «…for a week now». Без «now» Past Simple «had» теж граматичне, а для lvl 3 це друга правильна відповідь.
4. **a10:** body «Emma’s class is visiting Kyiv» → «Emma is visiting Kyiv again». Шкільна поїздка британського класу до Києва нереалістична (pitfalls-content.md п. 21); поїздки Emma до Kyiv є в каноні (e6s3, e6s7).
5. `status: "verified"`, `meta.factcheck` — посилання на цей звіт.

**Рекомендацій без правки немає.**

## 6. Прогін
- `node tools/validate.mjs --pool pe7s3` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe7s3` — без помилок.
- Після правок повторив перебір `check`: усі `solution` зараховуються, build приймає лише ключі.
- `python3 tools/test-answer-ui.py --suite content --pool pe7s3` не запускав: браузерні прогони лишаються CI (job browser).

**Вердикт по пулу: verified.**
