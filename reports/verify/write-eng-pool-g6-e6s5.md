# Верифікація: пул pe6s5 (англійська, 6 кл., розділ e6s5 «Getting ready for a trip»)

Верифікатор: verifier-pe6s5-pe6s6 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s5.js` (автор writer-pe6s5, 74 вправи a01–a74) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2б, §2в. Задача: tasks/review/write-eng-pool-g6-e6s5.md. Зміст: уроки content/eng/g6-e6s5.js (verified, reports/verify/e6s5.md) і раніші розділи. Еталон перевірки: reports/verify/pe5s10.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів я не знайшов. Другої правильної відповіді, яку рушій відхилив би, теж немає, а одна знайдена (a42) закрита правкою. Правок 6, усі мінімальні: a39 (рамка will / might), a42 (друга відповідь *bag*), a47 (слово з пізнішого розділу), a10 і a49 (підказки, що розкривали відповідь), status/meta. id вправ не змінював. Людині вирішувати нічого не треба.

## 1. Схема, джерело, покриття

| Що | Результат |
|---|---|
| `node tools/validate.mjs --pool pe6s5` | 0 помилок, 0 попереджень (до правок і після) |
| `personalization-qa --pool pe6s5 --strict` | після правок «БРАКУЄ» немає |
| `sources`: `mpim`, `program: true`, title і url як у facts/eng.md; `src` — «mpim с. 20/21/22»; `srcPage`/`adapted` немає | ✅ (МП-ІМ с. 20: «Подорож»; с. 21: Present Simple / Continuous for future, have to; с. 22: may, might. Так само в шапці уроку e6s5) |
| `sk` кожної вправи є серед `sk` екранів її уроку | ✅ для всіх 74 (скрипт по `screens[].sk`) |
| Матриця урок × sk (рівні), скрипт | l1: vocab 11223, gram 123, phon 123, func 123, read 123 · l2: gram 112233, read 123 · l3: gram 122233, write 123 · l4: gram 11223, vocab 1223, func 123, phon 123, read 123 · l5: gram 112233, func 123, read 123 · l6: vocab 123 (sk лише на hyp-екрані), func 123, read 123 · l7 (boss) — без вправ ✅ |
| `uk`, IPA, «Listen», літери A/B/C, позиційні посилання | немає ✅ |

**QUESTION автора (l6 vocab лише на hyp-екрані).** Оцінка: ✅, лишаю як є. `vocab` в уроці l6 стоїть лише на здогадці («Single or return?»), але слова single, return, ticket office, change trains пояснено на info-екрані «At the ticket office» до оцінюваних екранів. Тож a66–a68 мають опору (D-019). `lessonSkills` рахує hyp-sk, тому навичка «vocab l6» існує, а без цих вправ вона лишилася б порожньою в SRS. Переводити на `func` не треба. Те саме для pe6s6 l6.

## 2. Факти

Реальних фактів у пулі майже немає: усі розклади, ціни й платформи вигадані. Перевірив те, що про реальну географію.

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| a23, a70, a72–a74: поїзд Kharkiv → Kyiv зупиняється в Poltava (Poltava між Kharkiv і Kyiv на лінії) | trainstracking: IC Kyiv–Kharkiv, проміжна зупинка Poltava — https://trainstracking.com/trains/ic-kyiv-kharkiv; новина «Kyiv-Kharkiv Intercity will only run to Poltava» — https://news.online.ua/en/kyiv-kharkiv-intercity-will-only-run-to-poltava-due-to-hostilities-902364/ | ✅ (розклад у `body` вигаданий; навчальний зміст — Present Simple) |
| a58: порт Dover, пором до France | взято з уроку e6s5l5 (verified, reports/verify/e6s5.md) | ✅ |
| pitfalls п. 21 (аеропорти України закриті) | Літаком у пулі летять лише Emma з родиною з England (a02, a04, a12). Герої з України їдуть потягом чи автобусом | ✅ |

### Форми, BrE, наголос (curl, 2026-11-27)

| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| sunglasses (a44, a50: `+sun\|glass\|es`) | UK /ˈsʌŋˌɡlɑː.sɪz/ — https://dictionary.cambridge.org/dictionary/english/sunglasses | /ˈsʌnɡlɑːsɪz/ — https://www.oxfordlearnersdictionaries.com/definition/english/sunglasses | ✅ головний наголос на 1-му складі |
| rucksack / backpack (a42) | rucksack «mainly UK», /ˈrʌk.sæk/ — https://dictionary.cambridge.org/dictionary/english/rucksack; backpack /ˈbæk.pæk/ — https://dictionary.cambridge.org/dictionary/english/backpack | rucksack /ˈrʌksæk/ — https://www.oxfordlearnersdictionaries.com/definition/english/rucksack | ✅ обидва слова в ключі |
| return / single як іменник-квиток (a66–a68, a70–a74) | return: «UK (also return ticket)… a ticket for travel to a place and back again» — https://dictionary.cambridge.org/dictionary/english/return; single: «single (ticket) B1 UK… May I have a single to London» — https://dictionary.cambridge.org/dictionary/english/single | return: «(also return ticket) (both British English)» — https://www.oxfordlearnersdictionaries.com/definition/english/return_2 | ✅ BrE; у a68 в ключі return і return ticket |
| station (a10, a11: `+sta\|tion`) | /ˈsteɪ.ʃən/ — https://dictionary.cambridge.org/dictionary/english/station | /ˈsteɪʃn/ — https://www.oxfordlearnersdictionaries.com/definition/english/station | ✅. Підкреслено в e5s7, в info l1 — ні (див. §5) |
| ferry, journey, airport, expensive, suitcase, umbrella, raincoat, jumper, toothbrush | підкреслені `<u>` в info l1 і l4 verified-уроку; наголос звірено в reports/verify/e6s5.md | — | ✅ розмітка `+` збігається з `<u>` уроку |

## 3–4. Вправи: моя відповідь → ключ → опора (D-019) → друга правильна відповідь

Кожну вправу я розв'язав сам, не дивлячись на ключ. `gaps` розібрав `parseGaps`. Кожен `word` прогнав через `wordVerdict(…, "en")`: ключ, ключ з крапкою, близькі форми, кандидати в синоніми. Для `build` скрипт на `app/lang.js` (vm) перебрав усі впорядковані підмножини tiles + extra через `SLID_LANG.check(…, "en")`. У кожному з 8 `build` рушій приймає рівно один рядок, і це ключ. Ключі `word` без кінцевого `.!?`: ✅ для всіх 9.

| Вправа | Моя відповідь | = ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 match | ferry/coach/airport/journey | = | l1 info «Ways to travel» | ні: кожне праве лише до одного | ✅ |
| a02 gaps | ferry; airport | = | l1 info | ні | ✅ |
| a03 word | expensive | = | l1 info (expensive); ціни в `body` | ні («more ___ than») | ✅ |
| a04 pick | ferry, plane, coach | = | l1 info | ні: car у тексті немає | ✅ |
| a05 gaps | cheap; expensive; by coach | = | l1 info (by, Not: by a ferry); ціни в `body` | ні | ✅ |
| a06 gaps | slower; more expensive | = | l1 gaps (порівняння) + e5s10 | ні | ✅ |
| a07 gaps | cheaper; faster; more expensive | = | e5s10l4 (-er / more) | *more cheap* — нестандартна форма для односкладового, хибний варіант допустимий | ✅ |
| a08 pick | more | = | e5s10l4 | ні | ✅ |
| a09–a11 stress | fer, air · pen, jour, sta · fer, jour, sta, pen, air | = | l1 info `<u>`; station — e5s7 `<u>` | — | ✅ (a10 після правки підказки) |
| a12 choice | by plane | = | l1 info; «fast… across the sea», без машини | coach відсічено «fast journey» | ✅ |
| a13 gaps | By; cheaper | = | l1 info (by); l1 final (coach cheaper, comfortable) | *more expensive* як причина вибору — ні | ✅ |
| a14 build | How are you going to travel to Odesa? | = | e5s9 (be going to), l1 intro | рушій приймає 1 рядок; з do — жодного | ✅ |
| a15–a16 choice | by train; cheaper and more comfortable | = | текст | ні | ✅ |
| a17 multi | 0, 1 | = | текст (Uncle Ivan — Odesa) | ні | ✅ |
| a18 gaps | leaves; arrives | = | l2 info | ні | ✅ |
| a19 word | leaves | = | l2 info; «in the Present Simple» відсікає is leaving | ні | ✅ |
| a20 gaps | does; leave; does | = | l2 info | ні | ✅ |
| a21 pick | leaves | = | l2 info, l2 build | ні | ✅ |
| a22 build | When does the coach arrive in Chernihiv? | = | l2 info | 1 рядок; з arrives — жодного | ✅ |
| a23 gaps | doesn’t stop; Does; does | = | l2 info («doesn’t stop»); `body` (one stop) | ні | ✅ |
| a24 choice | twenty to twelve | = | l2 info «Saying the time» (to = before) | ні | ✅ |
| a25 match | quarter past ten / five past four / one o’clock / half past twelve | = | l2 info; half past — e5s2 info | ні | ✅ |
| a26 multi | 0, 3 | = | розклад у `body` | ні: Zhytomyr 2 h 10 min < Poltava 4 h 25 min | ✅ |
| a27 gaps | are visiting; isn’t coming; is driving | = | l3 info | ні | ✅ |
| a28 multi | 0, 1 | = | l3 info #2 (обидві форми правильні) | обидві правильні в ключі | ✅ |
| a29 word | are | = | l3 info | ні | ✅ |
| a30 gaps | will help; are meeting | = | l3 info #2 (decide now → will) | ні: інші варіанти неграматичні | ✅ |
| a31 pick | leave | = | l3 info | ні | ✅ |
| a32 build | Is Uncle Ivan meeting you on Friday? | = | l3 info, l3 build | 1 рядок; з Does — жодного | ✅ |
| a33 gaps | are having; is bringing | = | l3 info | ні | ✅ |
| a34 build | Dad is driving us to the station. | = | l3 info | 1 рядок. *Is Dad driving…?* відсічено `keepCase` (плитка «is» мала) і контекстом («writes about Friday morning») | ✅ |
| a35 gaps | are visiting; leaves; will wear | = | l3 info #2 | ні: is leaving / going to серед варіантів немає | ✅ |
| a36 gaps | might snow; might not | = | l4 info | ні | ✅ |
| a37 word | might | = (+may, could) | l4 info | will відсічено «isn’t sure» | ✅ |
| a38 pick | rains | = | l4 info | ні | ✅ |
| a39 gaps (після правки) | will; might | = | l4 info («You’re sure → will. You aren’t sure → might») + рамка Sure / Not sure у `body` | див. §7 п. 1 | ✅ (правка 1) |
| a40 build | Zlata might not come with us. | = | l4 info | 1 рядок; *Might Zlata not…?* відсічено `keepCase` | ✅ |
| a41 sort | cold: jumper, warm coat · sun: sunglasses, sun cream | = | l4 info | ні | ✅ |
| a42 word (після правки) | rucksack | = (+backpack) | l4 info | до правки *bag* був правильним, див. §8 | ✅ (правка 2) |
| a43 match | umbrella/sunglasses/jumper/toothbrush | = | l4 info | ні | ✅ |
| a44 gaps | an; a; sunglasses; a | = | l4 info; a/an — e4 | ні | ✅ |
| a45 choice | It might be windy tomorrow. | = | l4 info | ні | ✅ |
| a46 gaps | might snow; might be | = | l4 info | ні | ✅ |
| a47 build | Take a jumper because it might be cold. | = | l4 info, l4 final | 1 рядок; *Because… take…* відсічено `keepCase` | ✅ (правка 3: `body`) |
| a48–a50 stress | suit, brel · ruck, tooth, brel · rain, jum, sun, brel, suit | = | l4 info `<u>` | — | ✅ (a49 після правки підказки) |
| a51–a52 choice | sun cream; No, he isn’t | = | текст | ні | ✅ |
| a53 multi | 0, 2 | = | текст | ні | ✅ |
| a54 gaps | has to; have to | = | l5 info | ні | ✅ |
| a55 gaps | Does; does | = | l5 info #2 | ні | ✅ |
| a56 word | don’t | = (+don’t have to; do not через contractions) | l5 info #2 | ні | ✅ |
| a57 pick | buys | = | l5 info | ні | ✅ |
| a58 gaps | doesn’t have to; Does; does | = | l5 info | ні | ✅ |
| a59 build | When do we have to be at the port? | = | l5 info #2 | 1 рядок; з does — жодного | ✅ |
| a60 sort | has to: have/show ticket · doesn’t: book, sit next to Dmytro | = | l5 info; l5 sort (інші пункти) | ні | ✅ |
| a61 choice | No, you don’t. | = | l5 info #2 | ні | ✅ |
| a62 gaps | Do; do; have to | = | l5 info | ні | ✅ |
| a63–a65 | at 6.30; café; 0, 2 | = | текст | ні | ✅ |
| a66 match | single/return/ticket office/change trains | = | l6 info | ні | ✅ |
| a67 gaps | returns; single | = | l6 info; `body` (назад машиною) | ні | ✅ |
| a68 word | return | = (+return ticket) | l6 info | ні | ✅ |
| a69 choice | Sorry, which platform? | = | l6 info #2 | ні | ✅ |
| a70 gaps | singles; which; stop | = | l6 info, l2 info | ні: *single* для двох квитків хибне | ✅ |
| a71 build | How much is a return to Lviv? | = | l6 info; How much is…? — e4s4 | 1 рядок; з are — жодного | ✅ |
| a72–a74 | two singles; the platform; 0, 2 | = | текст | ні | ✅ |

**Лексика (D-019).** Скрипт зібрав слова всіх уроків розділів до e6s5 і уроків e6s5 до `lesson` вправи включно. Поза набором лишилися: -ing-форми відомих дієслів (driving, packing, waiting, having), Zhytomyr (назва міста в розкладі), backpack (варіант ключа), хибні форми (expensiver, sunglass), «u-» у `steps`, seat / wait. Одна знахідка — *advice* в `body` a47: це слово вводить лише e6s6l5, пізніший розділ. Виправлено (правка 3).

**Копії уроків (n-грами ≥ 6 слів проти g*-*.js і diag-*.js).** Збігаються лише інструкції («One word in …’s message is wrong», «wants to know the time of») і фрази `body` без ключа. Рамок уроку з тим самим ключем немає. a63–a65 мають спільне з diag-g6 «have to be at the station at», але там це `gaps` на форму have to, а тут читання (час, причина). ✅

**Герої (glossary/eng-heroes.md).** Uncle Oleh — дядько Mariia ✅; Zlata — молодша сестра Тараса ✅; Tom грає на гітарі ✅; Grandad (Vasyl) у Chernihiv ✅; Uncle Ivan в Odesa ✅. Ostap з a39 після правки зник.

## 5. Педагогіка, BrE, підказки

- `steps` і `hint` написано англійською рівня 6 кл., речення до 12 слів. BrE: jumper, rucksack, single / return, timetable, «at the weekend» немає. AmE немає.
- **hint (pitfalls п. 17).** a10 «One word has the strong part in the middle» і a49 «One word has three parts. The strong part is in the middle.» фактично розв'язували завдання: єдине трискладове слово й було відповіддю. Замінив на навігацію до `<u>` уроку (правка 4). Решта підказок — правило уроку або «Find the word … in the text»: це навігація, як і в самому уроці.
- **stress зі словами інших уроків** (рекомендація, не блокує): у a10 і a11 є *station*, у l1 воно не підкреслене. Але `<u>sta</u>tion` є в e5s7, а наголос у CD і OALD один. Лишаю.

## 6. Авторське право (WebSearch, дослівні запити в лапках)

| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| a17 «The coach is cheap, but it isn’t very comfortable. The train is faster and more comfortable» | збігу немає (форуми про Amtrak, National Express) |
| a63 «We have to be at the station at 6.30! We don’t have to buy food. There’s a café on the train» | збігу немає (граматичні сайти про have to) |
| a53 «It might snow a lot, so I’m packing my warm coat and a jumper» | збігу немає (поради на зиму) |

Решта текстів (a15–a16, a51–a52, a72–a74) складена з тих самих речень-шаблонів, що й перевірені вище, і з речень уроку (verified).

## 7. Спірні місця автора

1. **a39 will / might.** У старій рамці (Ostap «Sure: … He’s got a ticket») стояло *will* на домовленість із квитком. Але l3 учить, що домовленість передається Present Continuous («We’ve got the tickets → We’re leaving»). Тож ключ *will* суперечив уроку розділу, а *might* відсікала лише голосна рамка. Переписав (правка 1): тепер будова «Sure: it’s January. The mountains are always cold in January / Not sure: the snow», ключ *will* — упевнений прогноз (l4 info, e5s5l5), *might* — невпевненість. *Might be cold* суперечить «Sure… always cold», *will snow* — «Not sure… Nobody knows». Інших варіантів немає. ✅
2. **a05 ₴800 / ₴500** — порівняння в `body` і означення уроку («doesn’t cost a lot»). ✅
3. **l6 vocab** — див. §1: ✅.
4. **a23 Poltava** — опора на таблицю в `body`. ✅

## 8. Правки (зроблені в content/eng/pool-g6-e6s5.js)

1. **a39** (рамка will / might): `body` → «Sure: it’s January. The mountains are always cold in January. / Not sure: the snow. Nobody knows.»; `text` → «It {*will|might} be cold in the mountains. It {*might|will} snow there.»; `steps` оновлено.
2. **a42** (друга правильна відповідь): `before` «It’s a ___.» після `body` «…puts his things in a bag» приймало *bag* як правдиву відповідь, а рушій її відхиляв. Тепер `body` «…Then he puts it on his back.», `before` «This bag is a». Ключ rucksack / backpack.
3. **a47** (лексика пізнішого розділу): `body` «Mum gives Taras advice about the mountains.» → «Mum talks to Taras about the mountains.»
4. **a10, a49** (`hint` розкривав відповідь): → «Remember the underlined parts in the list of words.» / «…in the suitcase list.»
5. `status: "verified"`, `meta.factcheck` і шапка посилаються на цей звіт.

Повторно після правок: validate 0/0, personalization-qa без «БРАКУЄ», перебір `build`, `wordVerdict` a42 (bag → false, rucksack / backpack → true), лексичний скрипт, n-грами — усе ✅.

Рекомендовано, не блокує: ENGINE (вже є в inbox від pe5s10) — `wordVerdict` дає «Almost: check the spelling» на граматично іншу форму (a56 «dont» — тут доречно).

## 9. Прогін

- `node tools/validate.mjs --pool pe6s5` — 0 помилок, 0 попереджень.
- `node tools/personalization-qa.mjs --pool pe6s5 --strict` — без «БРАКУЄ».
- Build і плейтест не запускав: паралельна робота, build робить оркестратор.

## 10. Вердикт

Пул pe6s5 — **verified**. Відкритих ❌ і ⚠️ немає. Затвердження (`approved`) — лише вчитель.
