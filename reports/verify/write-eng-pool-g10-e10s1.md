# Верифікація: пул pe10s1 (англійська, 10 кл., розділ e10s1 «Relationships and conflicts»)

Верифікатор: verifier-pe10s1, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s1.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s1.md. Опора: уроки `content/eng/g10-e10s1.js` (verified) і розділи g4–g9. Формат звіту — як reports/verify/write-eng-pool-g9-e9s9.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 9 правок у 8 вправах і шапці: 1 граматичний порядок плиток поза ключем (a17), 1 build, де другий порядок відсікав лише здогад про причину (a44), 5 підказок, що розв'язували вправу (a06, a21, a30, a56, a63), 1 зворот поза уроками (a15), статус і шапка. Людині рішати нічого не треба.

Спосіб: спершу розв'язав усі 63 вправи за «учнівським» дампом, де ключі приховано (`*` прибрано, варіанти відсортовано, `correct`/`answer`/`steps` вилучено; скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s1-pe10s2/bin/dump.mjs`), і лише потім звірив свої відповіді з ключем. Розбіжностей немає.

## 1. Програма, `src`
`sources`: `p1407`, `program: true`, url — як у facts/eng.md. PDF я відкрив у цій сесії (curl; SHA-1 38df1f7ff398f0921f2852bc77fd374c77e1c0ff, 72 с., збігається з facts/eng.md), `pdftotext`:
- с. 22: «Я, моя родина, мої друзі — особистість та її якості; види особистісних стосунків; стосунки з товаришами; взаємодопомога; вирішення конфліктів»; функції «аналізувати їхні причини і наслідки», «вступати в дискусію, привертаючи увагу» → l1, l2, l5, l6 ✅;
- с. 23: «Past Perfect with adverbial clauses of time», «prepositions in time phrases, e.g.: before, for, since, till, until, by» → l3, l4 ✅.

Усі `src` («p1407 с. 22» / «с. 23») відповідають темам вправ ✅.

## 2. Факти
Фактів про реальний світ (дат, чисел, установ) у пулі немає: усе — епізоди з життя героїв. Канон героїв звірив з memory/long/glossary/eng-heroes.md:
- Kyrylo — history (a04) ✅; Grandad Vasyl навчив Andrii шахів (a34; e9s1 «My grandad Vasyl taught me to play chess when I was five») ✅; Oksana — karate, Zelena Dolyna, Poltava (a28) ✅; Mr Lukashuk — сусід Ostap у Lviv (як e10s1l5) ✅; Taras і Myroslava — athletics club, Bright Radio, Ms Kvitka ✅; Zlata — сестра Taras ✅; Emma, Tom (14), Snowy, Amelia (клуб плавання), Isla (Edinburgh) ✅; Mariia — Polina, Roksolana, Zofia, Artem, comic club ✅; Daryna, Zoriana, Bohdan (Kyiv) ✅.
- Нові дрібниці (новий тренер Emma — «she», Dmytro зламав руку торік узимку, Taras — коліно перед забігом тощо) канону не суперечать; автор записав їх NOTE в inbox.

## 3. Словники (наголос у `stress`)
Усі 8 слів підкреслені `<u>` в info e10s1l1 «Personality words», у кожного один наголос і в UK, і в US (CD: https://dictionary.cambridge.org/dictionary/english/<word>, OALD: https://www.oxfordlearnersdictionaries.com/definition/english/<word>, відкрито curl у цій сесії):

| Слово | CD (UK / US) | OALD (BrE / NAmE) | Вердикт |
|---|---|---|---|
| loyal | ˈlɔɪ.əl / ˈlɔɪ.əl | /ˈlɔɪəl/ / /ˈlɔɪəl/ | ✅ |
| selfish | ˈsel.fɪʃ / ˈsel.fɪʃ | /ˈselfɪʃ/ | ✅ |
| reliable | rɪˈlaɪ.ə.bəl | /rɪˈlaɪəbl/ | ✅ |
| stubborn | ˈstʌb.ən / ˈstʌb.ɚn | /ˈstʌbən/ / /ˈstʌbərn/ | ✅ |
| moody | ˈmuː.di | /ˈmuːdi/ | ✅ |
| considerate | kənˈsɪd.ər.ət | /kənˈsɪdərət/ | ✅ |
| sensitive | ˈsen.sɪ.tɪv / ˈsen.sə.t̬ɪv | /ˈsensətɪv/ | ✅ |
| tolerant | ˈtɒl.ər.ənt / ˈtɑː.lɚ.ənt | /ˈtɒlərənt/ / /ˈtɑːlərənt/ | ✅ |

У кожному наборі є слова з різним наголошеним складом ✅. Форми fall – fell – fallen, run – ran – run, read – read – read, write – wrote – written, eat – ate – eaten — стандартні, у вправах хибні лише не-форми (had readed, had ran, had wrote) ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки плиток разом з `extra` (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s1-pe10s2/bin/chk.mjs`): після правок кожен зарахований порядок граматичний, і кожен граматичний — у ключі.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | 4 пари | = | l1 info «Personality words» | перебрав усі праві | ✅ |
| a02 gaps | unselfish; intolerant; disloyal | = | l1 info «Opposites» | — | ✅ |
| a03 word | unreliable | = | l1 info «Opposites» | — | ✅ |
| a04 choice | He’s loyal, but… | = | l1 info «Like, look like, be like» | — | ✅ |
| a05 gaps | does; is | = | l1 info 3 | — | ✅ |
| a06 multi | [0,1] | = | l1 info 3 | hint «What’s = What is» розв'язував пастку рівня 3 | ⚠️ → hint виправлено |
| a07–a09 stress | loy, sel, li / stub, moo, sid / sen, sid, sel, li, tol, moo | = | l1 `<u>` | §3 | ✅ |
| a10 choice | generous and tolerant | = | l1 info 1 | — | ✅ |
| a11 multi | [0,1] | = | l1 info 1 | — | ✅ |
| a12 choice | reliable and tolerant | = | l1 info 1 | — | ✅ |
| a13 match | 4 пари | = | l2 info «Talking about relationships» | перебрав усі праві | ✅ |
| a14 gaps | penfriend; teammates; acquaintances | = | l2 info «Kinds of relationships» | — | ✅ |
| a15 word | fell | = | l2 info («fall – fell – fallen») | «for a while» — у g4–e10s1 немає | ⚠️ → прибрано |
| a16 gaps | have; gets | = | l2 info, pick | — | ✅ |
| a17 build | Ostap gets on well with his neighbours. | = | l2 info | «Ostap gets on with his neighbours well» — граматичний (обставина способу після додатка), рушій не приймав | ❌ → додано в `answer` |
| a18 pick | have fallen | = | l2 info + Past Simple з last year (раніші класи) | — | ✅ |
| a19 gaps | in touch; in common | = | l2 | — | ✅ |
| a20 gaps | on; on; fallen | = | l2 | — | ✅ |
| a21 gaps | fell; with; an acquaintance | = | l2 | hint «an + a vowel sound, and one person» відкидав обидва дистрактори | ⚠️ → hint виправлено |
| a22 gaps | had closed; until | = | l3 info 1, info «By, until, before» | — | ✅ |
| a23 choice | had already started | = | l3 info «When» | — | ✅ |
| a24 word | had gone / had already gone, ’d gone | = | l3 word | contractions ✅ | ✅ |
| a25 pick | until | = | l3 info «By, until» | — | ✅ |
| a26 gaps | had started; until | = | l3 | Past Simple не дистрактор ✅ | ✅ |
| a27 gaps | by; had tidied; until | = | l3 | by lunch відсікає until ✅ | ✅ |
| a28 gaps | had already left; until; had started | = | l3 | — | ✅ |
| a29 gaps | after; before | = | l4 info «Time words», шкала часу | — | ✅ |
| a30 multi | [0,1] | = | l4 info «Past Simple or Past Perfect?» | Past Simple після as soon as — у ключі ✅; hint «Which forms are past tenses?» розв'язував | ⚠️ → hint виправлено |
| a31 choice | No: … | = | l3 info «When», l4 choice | — | ✅ |
| a32 build | Mariia didn’t go to bed until she had finished her comic. | = | l4 info 1 | «Start with Mariia»; 1 граматичний порядок | ✅ |
| a33 pick | ran | = | l4 pick (had + V3) | — | ✅ |
| a34 choice | immediately after… | = | l4 info «Time words» | — | ✅ |
| a35 order | homework → pool → swam → café → home | = | l4 | — | ✅ |
| a36 multi | [1,2] | = | l3–l4 | — | ✅ |
| a37 gaps | As soon as; eaten | = | l4 | ate — лише як «had ate» (не-форма) ✅ | ✅ |
| a38 gaps | had never written; had read; until | = | l4 | — | ✅ |
| a39 gaps | had run; got; had never felt | = | l4 | — | ✅ |
| a40 gaps | out; hand | = | l5 info «Helping each other» | — | ✅ |
| a41 word | for | = | l5 info | — | ✅ |
| a42 pick | up | = | l5 info | — | ✅ |
| a43 gaps | because; so | = | l5 info «Causes and results» | — | ✅ |
| a44 build | Taras was late because he had missed the bus. | = | l5 info, build | «Taras had missed the bus because he was late» — граматичний; без умови в body причину й наслідок треба було вгадувати | ⚠️ → у body додано «Taras missed the bus. Then he was late for training.» |
| a45 gaps | so; because; That’s why | = | l5 info | — | ✅ |
| a46 choice | Can I give you a hand? | = | l5 info, choice | — | ✅ |
| a47 gaps | hand; on | = | l5 | — | ✅ |
| a48 multi | [0,1] | = | l5 | — | ✅ |
| a49 choice | He helps at the school library. | = | l5 info | — | ✅ |
| a50 multi | [0,2] | = | l5 | — | ✅ |
| a51 choice | Myroslava supported him. | = | l5 | — | ✅ |
| a52 match | 4 пари | = | l6 info «Conflict words» | перебрав усі праві | ✅ |
| a53 gaps | to; for; up | = | l6 info | for перед особою не дано ✅ | ✅ |
| a54 pick | of | = | l6 info («blame someone for something») | — | ✅ |
| a55 choice | Let me finish, please. | = | l6 info «In a heated discussion» | — | ✅ |
| a56 gaps | interrupt; minute; say | = | l6 info | hint «Sorry to + verb; could I just + verb» відкидав дистрактори 1-го й 3-го пропусків | ⚠️ → hint виправлено |
| a57 choice | I see your point, but… | = | l6 info | — | ✅ |
| a58 choice | They found a compromise. | = | l6 info | — | ✅ |
| a59 multi | [0,1,3] | = | l6 (half past four між 4 і 5 → compromise) | — | ✅ |
| a60 choice | Kyrylo said it was her fault… | = | l6 | — | ✅ |
| a61 gaps | because; As a result | = | l6 info «Explaining a conflict» | — | ✅ |
| a62 word | up / it up / peace | = | l6 info, word | рамка «made ___» близька до l6 word, але інші герої, час і умова | ✅ |
| a63 gaps | when; for; As a result; compromise | = | l6 | hint «blame … for; a result» прямо називав відповіді | ⚠️ → hint виправлено |

Пастки 10 кл. окремо: Past Simple після after / as soon as / until ніде не хибний (a30 — multi з обома; у gaps хибні лише has + V3 і не-форми) ✅; when + Past Simple / Past Perfect — лише зі шкалою часу (a23, a31, a36) ✅; didn’t … until — before поруч не дано ✅; make up — up / it up / peace (CD «also UK make it up») ✅.

Лексика: grep по content/eng/g4–g9 і g10-e10s1 — towel, tournament, printer, shelves, stairs, kilometres, laptop, concert, chocolate, gym, volleyball, headphones, knee, lonely, hardly є в уроках; «for a while» — немає (прибрано, a15). n-грами від 7 слів проти g4-*…g11-*: збігаються лише інструкції («Choose all the correct answers»), визначення з info й назви уроків — копій рамок з тим самим ключем немає.

## 5. Авторське право
| Фрагмент | Запит | Результат |
|---|---|---|
| a02 «…gave her new towel to a younger girl who had forgotten hers» | WebSearch у лапках | збігів немає |
| a60 «The printer in the computer room stopped working … she hadn’t used the printer that day» | WebSearch у лапках | збігів немає |

Решта текстів — короткі репліки героїв з іменами канону; з 7-грамами g4–g11 перевірено скриптом (§4).

## 6. Педагогіка й мова
Умови, `hint`, `steps` — англійською рівня 10 кл., BrE (practised, apologise, neighbour, at the weekend) ✅. Літер A, B, C в `opts` немає, IPA й «Listen» немає ✅. Підказки після правок ведуть до правила чи екрана й не розв'язують вправу.

## 7. Правки (зроблені)
1. a17: `answer` + «Ostap gets on with his neighbours well.»
2. a44: body + «Taras missed the bus. Then he was late for training.»
3. a15: body «…stopped being friends for a while.» → «…stopped being friends.»
4. a06 hint → «Look carefully at each verb and at the word after it.»
5. a21 hint → «Last year → which form? Then check the small words: get on well … someone; a or an?»
6. a30 hint → «Remember Lesson 4: what do after, before and as soon as already show?»
7. a56 hint → «Remember the phrases for a heated discussion in Lesson 6.»
8. a63 hint → «Remember the conflict words and the words for causes and results.»
9. `status: "verified"`, `meta.factcheck`, шапка.

Прогін: `node tools/validate.mjs --pool pe10s1` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe10s1 --strict` — 6 уроків, 63 вправи, зауважень немає. `test-answer-ui.py --suite content --pool pe10s1` не запускав (Python-playwright у контейнері немає) — CI.

## 8. Вердикт
pe10s1 — **verified**. Відкритих ❌ і ⚠️ немає.
