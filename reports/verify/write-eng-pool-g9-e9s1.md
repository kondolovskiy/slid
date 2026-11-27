# Верифікація: пул pe9s1 (англійська, 9 кл., розділ e9s1 «Who am I? Personality and life story»)

Верифікатор: verifier-pe9s1 (сесія verifier-pe9s1-pe9s2), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s1.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s1.md. Опора: уроки `content/eng/g9-e9s1.js` (verified) і розділи g4–g8. Еталони: reports/verify/write-eng-pool-g8-e8s2.md, -g7-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Збігів з опублікованими текстами теж немає. Зробив 15 правок у 12 вправах: 4 stress без опори, 1 суперечність усередині пулу (вік Zlata), 1 нелогічна умова, 1 друга відповідь у ключ, 2 застарілі `steps`, 1 копія рамки уроку з тим самим ключем, статус і шапка. Нових TQ немає. Людині нічого блокувального.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md. `srcPage` і `adapted` немає ✅. Сторінки (МП-ІМ https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf): с. 33 — тема й функції (l1, l2 read/phon, l3, l6 vocab/read/write), с. 34 — compound adjectives, future in the past (l2 vocab, l5), с. 35 — used to / would, narrative tenses (l4, l6 gram). `src` відповідають урокам ✅.

## 2. Факти
Реальних фактів у пулі майже немає: усе — вигадані епізоди героїв. Реальні назви: Lviv, Dnipro, Odesa (море), Carpathians, Dublin (Liam), Poland/Polish (Zofia). Усі вони вже є в каноні та verified-уроках. Дати й місця героїв звірено з memory/long/glossary/eng-heroes.md: Taras — 5 May, Lviv; Stepan — 14 March, Dnipro (e9s1l1); Liam — Dublin; Zofia — Poland; Uncle Ivan — Odesa; Aunt Iryna — artist; Andrii вчився шахів з дідом Vasyl з 5 років (e9s1l3); Bohdan — теніс, з татом; Tom — swimming club з 7 кл.; Halyna малює. ✅

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
Кожну вправу я розв'язав сам і лише потім звірив з ключем. Для `gaps`/`pick`/`stress`/`word`/`build`/`match` прогнав `SLID_LANG.check(solution)`: усі зараховуються. У `build` перебрав усі перестановки (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s1-2/bin/chk.mjs`): a12 — 2 порядки, a29 — 1, a39 — 2, a60 — 1, і всі вони в ключі. У жодному ключі `word` немає кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | first name / DOB / place / nationality | = | l1 intro, info | — | ✅ |
| a02 gaps | nationality; surname | = | l1 info | Irish — дистрактори не залежать від нього | ✅ |
| a03 word | nationality | = | l1 info | — | ✅ |
| a04 gaps | in; on | = | l1 «Born on, born in» | — | ✅ |
| a05 gaps | were; was; on; in | = | l1 | — | ✅ |
| a06 pick | [in] → on | = | l1 | — | ✅ |
| a07 choice | Could you spell that, please? | = | l1 «Checking information» | рамка й ключ повторювали choice l1 («doesn’t know how to write it») | ⚠️ → body перефразовано |
| a08 gaps | did you say; were | = | l1 | steps «born in May» ≠ тексту «on 5 May» | ⚠️ → steps |
| a09 choice | So you were born in Lviv, right? | = | l1 | — | ✅ |
| a10 word | Ukrainian | = | l1 | — | ✅ |
| a11 gaps | first name; was; on; Ukrainian | = | l1 | — | ✅ |
| a12 build | 2 порядки | = | l1 | keepCase відсікає «on 5 May I…» | ✅ |
| a13 stress | sur, krai, Brit | = | `<u>` — l1, e4s1, e5s10 | — | ✅ |
| a14 stress | — | — | — | personal, language ніде не підкреслені в уроках | ⚠️ → nationality, surname, information |
| a15 stress | ma, al, birth, krai | = | l1, e4s8, e4s1 | — | ✅ |
| a16 choice | helps younger children | = | текст + l2 | — | ✅ |
| a17 multi | [0,1] | = | текст + l2 | — | ✅ |
| a18 choice | hard-working and easy-going | = | текст + l2 opposites | — | ✅ |
| a19 match | 4 пари | = | l2 info, opposites | перебрав усі праві, другої пари немає | ✅ |
| a20 gaps | easy-going; a; hard-working | = | l2 | a/an залежить від сусіднього пропуску, але ключ однозначний за змістом | ✅ |
| a21 word | open-minded | +broad-minded, open | l2 | curious відсікає hint «two parts and a hyphen» | ✅ |
| a22 stress | — | — | — | relaxed без `<u>` в уроках | ⚠️ → character, polite (po`<u>`lite`</u>` є в уроках) |
| a23 stress | — | — | — | afraid без `<u>` | ⚠️ → surprised (є `<u>`) |
| a24 stress | — | — | — | relaxed без `<u>` | ⚠️ → polite |
| a25 match | 4 пари | = | l3 info | визначення з info (інший тип вправи) | ✅ |
| a26 gaps | influence; role model | = | l3 | — | ✅ |
| a27 word | choice | choice | l3 | «her own decision» — теж правильно, слово є в e5s9 | ⚠️ → decision у ключ |
| a28 gaps | to make; do | = | l3 | — | ✅ |
| a29 build | Dad taught me to ride a bike. | = | l3 | 1 порядок | ✅ |
| a30 pick | [to] | = | l3 | — | ✅ |
| a31 choice | his uncle | = | текст | — | ✅ |
| a32 choice | Reading changed Kyrylo. | = | текст + l3 | — | ✅ |
| a33 multi | [1,2] | = | текст + l3 | — | ✅ |
| a34 gaps | used to; would | = | l4 | used to з дією — не варіант; дистрактор used неграматичний | ✅ |
| a35 sort | 3 / 3 | = | l4 | — | ✅ |
| a36 gaps | Did; didn’t use to | = | l4, e7s5l3 | — | ✅ |
| a37 pick | [would] have | = | l4 | — | ✅ |
| a38 word | would / used to | = | l4 | обидва в ключі | ✅ |
| a39 build | 2 порядки | = | l4 | — | ✅ |
| a40 gaps | used to; would; didn’t use to | = | l4 | — | ✅ |
| a41 choice | They played tennis. | = | текст | — | ✅ |
| a42 multi | [0,2] | = | текст + l4 | «When I was six … My music teacher» суперечить a58 цього ж пулу («When I was seven, I started music school») | ⚠️ → eight (body й опція) |
| a43 choice | many times | = | l4 | — | ✅ |
| a44 gaps | would; were | = | l5 | will хибне: тест уже минув («but it was easy») | ✅ |
| a45 multi | [0,1] | = | l5 | «knew it before the final … knew he would play in the final» — тавтологія | ⚠️ → «won all his games… Early in the winter, Andrii knew he … in the final» |
| a46 pick | [will] | = | l5 | — | ✅ |
| a47 choice | a singer | = | текст | — | ✅ |
| a48 choice | opinion changed | = | текст + l5 | — | ✅ |
| a49 multi | [1,3] | = | текст + l5 | — | ✅ |
| a50 word | autobiography | = | l6 info | — | ✅ |
| a51 gaps | Since then | = | l6 time words | — | ✅ |
| a52 word | childhood | +early life, early years | l6 info | — | ✅ |
| a53 choice | his grandma | = | текст | — | ✅ |
| a54 choice | penfriends in three countries | = | текст | — | ✅ |
| a55 multi | [0,1] | = | текст + l6 | — | ✅ |
| a56 gaps | was taking; had forgotten | = | l6, e8s5 | — | ✅ |
| a57 pick | [have] → had | = | l6 | — | ✅ |
| a58 gaps | was; was; had practised; was playing | = | l6 | steps «the lights went out» лишилися від старого тексту | ⚠️ → steps |
| a59 order | birth → childhood → events → now | = | l6 info | — | ✅ |
| a60 build | While we were walking home, it started to snow. | = | l6 | 1 порядок (keepCase) | ✅ |
| a61 gaps | was; used to; was going to; would | = | l4–l6 | — | ✅ |

**Покриття:** 61 вправа, 6 уроків, boss без вправ. `sk` кожної вправи — з її уроку. У кожної вправи рівня 2–3 є `hint`. `personalization-qa` — без помилок. Підказки відповіді не видають.

**would / used to:** would зі станами всюди хибне (a34, a37, a40, a61). Там, де можлива дія, у `word` в ключі обидва варіанти ✅. **Future in the past:** will хибне лише там, де подія вже минула ✅. **Past Simple для раннішої дії** ніде не стоїть хибним варіантом ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії):** OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: polite «/pəˈlaɪt/», surprised «/səˈpraɪzd/», honest «/ˈɒnɪst/», angry «/ˈæŋɡri/», character «/ˈkærəktə(r)/», personality «/ˌpɜːsəˈnæləti/», confident «/ˈkɒnfɪdənt/», nationality «/ˌnæʃəˈnæləti/», surname «/ˈsɜːneɪm/», information «/ˌɪnfəˈmeɪʃn/», birthday «/ˈbɜːθdeɪ/», ukrainian «/juːˈkreɪniən/», british «/ˈbrɪtɪʃ/». CD https://dictionary.cambridge.org/dictionary/english/<word>: polite «/pəˈlaɪt/», surprised «/səˈpraɪzd/», honest «/ˈɒn.ɪst/», angry «/ˈæŋ.ɡri/». Наголоси автора були правильні. Заміни в a14 і a22–a24 я зробив через відсутність опори (pitfalls-content «Англійська»), а не через помилку.
- **Опора `<u>` (grep по g4–e9s1):** U`<u>`krai`</u>`nian (e4s1, e5s2, e5s10, e8s7), `<u>`Brit`</u>`ish (e5s10), `<u>`birth`</u>`day (e4s8), `<u>`an`</u>`gry (e6s1), `<u>`hon`</u>`est, `<u>`char`</u>`acter, self-`<u>`con`</u>`fident, po`<u>`lite`</u>`, sur`<u>`prised`</u>` — є. personal, language, relaxed, afraid — немає, тож їх замінено.
- **Лексика** (скрипт `bin/lex.mjs` проти g4–g8 і e9s1 до `lesson`): лишилися лише broad (з прийнятого варіанта broad-minded), «dent» (склад stress) і pattern (patterns є в l3). ✅
- **Канон героїв:** суперечностей з eng-heroes.md я не знайшов. Внутрішню суперечність a42/a58 виправлено.
- **BrE:** Mum, practised, flat, holiday. AmE, IPA, A/B/C, «Listen» немає ✅.
- **Копії уроків** (6-грами проти g4–g11, `bin/ngram.mjs`): збігаються лише інструкції й визначення в `match`. a07 перефразовано.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Результат |
|---|---|
| a53 «I used to be very shy, and my grandma would read me stories every evening» | збігу немає |
| a31 «Every morning, he took me to the sea and taught me to swim» | збігу немає |

## 5. Правки (зроблені)
1. a07 body: «Emma wants to write the name of the city on the form, but she doesn’t know the letters.»
2. a08 steps: «born on 5 May».
3. a14 words → `na|tion|+al|i|ty`, `+sur|name`, `in|for|+ma|tion`; steps.
4. a22 relaxed → `po|+lite`; steps.
5. a23 afraid → `sur|+prised`; steps.
6. a24 relaxed → `po|+lite`; steps.
7. a27 answer + `decision`.
8. a42 six → eight (body, опція 2).
9. a45 body переписано (без тавтології); ключ той самий.
10. a58 steps: «I forgot the end of the song».
11. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe9s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s1` — без помилок; euphony — без зауважень.
