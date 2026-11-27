# Верифікація: пул pe6s6 (англійська, 6 кл., розділ e6s6 «School life: subjects and lessons»)

Верифікатор: verifier-pe6s5-pe6s6 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s6.js` (автор writer-pe6s6, 74 вправи a01–a74) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2б, §2в. Задача: tasks/review/write-eng-pool-g6-e6s6.md. Зміст: уроки content/eng/g6-e6s6.js (verified, reports/verify/e6s6.md) і раніші розділи. Еталон перевірки: reports/verify/pe5s10.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів я не знайшов. Другої правильної відповіді, яку рушій відхилив би, теж немає. Правок дві, обидві мінімальні: a43 (копія рамки уроку l4 і diag-g9 з тим самим ключем) і status/meta. id вправ не змінював. Людині вирішувати нічого не треба.

## 1. Схема, джерело, покриття

| Що | Результат |
|---|---|
| `node tools/validate.mjs --pool pe6s6` | 0 помилок, 0 попереджень (до правок і після) |
| `personalization-qa --pool pe6s6 --strict` | після правок «БРАКУЄ» немає |
| `sources`: `mpim`, `program: true`, title і url як у facts/eng.md; `src` — «mpim с. 21/22» | ✅ (с. 21: «Шкільне життя», функції, relative who / which / that; с. 22: must, should, Past Simple, Present Continuous; так само в шапці уроку e6s6) |
| `sk` кожної вправи є серед `sk` екранів її уроку | ✅ для всіх 74 |
| Матриця урок × sk (рівні), скрипт | l1: vocab 1123, func 1223, phon 123, write 123 · l2: vocab 1123, gram 1223, read 123, write 123 · l3: gram 11223, vocab 123, write 123 · l4: gram 112233, func 123 · l5: gram 1123, func 123, write 123 · l6: vocab 123 (sk лише на hyp-екрані), read 123, gram 1123, func 123, write 123 · l7 (boss) — без вправ ✅ |
| `uk`, IPA, «Listen», літери A/B/C, позиційні посилання | немає ✅ |

**QUESTION автора (l6 vocab лише на hyp-екрані).** Оцінка: ✅, лишаю як є. amazing, exciting, fun і boring пояснено в info l6 «It was amazing!» до оцінюваних екранів, тож a59–a61 мають опору. Навичку `vocab` l6 `lessonSkills` рахує з hyp-екрана. Те саме, що в pe6s5 l6.

## 2. Факти

Реальних фактів у пулі немає: сюжети шкільні, герої вигадані. Країни й міста лише згадано (Ukraine, Kyiv, Lviv, the Carpathians), без тверджень. Перевіряти джерелами нічого.

### Форми, BrE, наголос (curl, 2026-11-27)

| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| useful, difficult (a09–a11) | /ˈjuːs.fəl/, /ˈdɪf.ɪ.kəlt/ — https://dictionary.cambridge.org/dictionary/english/useful, …/difficult | /ˈjuːsfl/, /ˈdɪfɪkəlt/ — https://www.oxfordlearnersdictionaries.com/definition/english/useful, …/difficult | ✅ підкреслено в l1 info |
| computer (a10, a11: `com\|+pu\|ter`) | /kəmˈpjuː.tər/ — https://dictionary.cambridge.org/dictionary/english/computer | /kəmˈpjuːtə(r)/ — https://www.oxfordlearnersdictionaries.com/definition/english/computer | ✅ (`<u>` у e4s5, e5s6) |
| history (a10: `+his\|to\|ry`) | /ˈhɪs.tər.i/, три склади — https://dictionary.cambridge.org/dictionary/english/history | /ˈhɪstri/, два склади — https://www.oxfordlearnersdictionaries.com/definition/english/history | ✅ наголос однозначно на 1-му. Поділ на склади за CD. Учень обирає лише наголошену частину, тож розбіжність словників на відповідь не впливає (`<u>` у e5s2, e5s7) |
| music (a11) | /ˈmjuː.zɪk/ — https://dictionary.cambridge.org/dictionary/english/music | /ˈmjuːzɪk/ — https://www.oxfordlearnersdictionaries.com/definition/english/music | ✅ (`<u>` у e5s2) |
| because (a11: `be\|+cause`) | /bɪˈkɒz/, /bɪˈkəz/ — https://dictionary.cambridge.org/dictionary/english/because | /bɪˈkɒz/ — https://www.oxfordlearnersdictionaries.com/definition/english/because | ✅ наголос на 2-му в обох (`<u>` у e4s5) |
| learnt (a68) | «learned or UK also learnt» — https://dictionary.cambridge.org/dictionary/english/learn | «learnt (especially British English)» — https://www.oxfordlearnersdictionaries.com/definition/english/learn | ✅. У `gaps` варіанти лише learnt / learn, *learned* хибним не зроблено |
| trainers (a42, a44) | — | «(both British English) (North American English sneaker…)» — https://www.oxfordlearnersdictionaries.com/definition/english/trainer | ✅ BrE |

## 3–4. Вправи: моя відповідь → ключ → опора (D-019) → друга правильна відповідь

Кожну вправу я розв'язав сам, не дивлячись на ключ. `gaps` розібрав `parseGaps`, `word` прогнав через `wordVerdict(…, "en")`. Для `build` скрипт на `app/lang.js` перебрав усі впорядковані підмножини tiles + extra через `SLID_LANG.check(…, "en")`. Ключі `word` без кінцевого `.!?`: ✅ для всіх 9.

| Вправа | Моя відповідь | = ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 match | geography/IT/maths/music | = | l1 info, l1 hyp | ні | ✅ |
| a02 gaps | geography; IT | = | l1 info | ні | ✅ |
| a03 gaps | difficult; useful | = | l1 info (означення) | ні | ✅ |
| a04 pick | IT | = | l1 info | ні | ✅ |
| a05 gaps | Why; Because | = | l1 info #2 | ні | ✅ |
| a06 build | Why does Daryna like geography? | = | l1 info #2, l1 build | 1 рядок; з likes — жодного | ✅ |
| a07 word | because | = (+as, since) | l1 info #2 | cos — ні (розмовне) | ✅ |
| a08 match | computers / boring / maps / numbers | = | l1 info #2 | ні: «boring» — лише до don’t-питання | ✅ |
| a09–a11 stress | use, dif · pu, use, his · dif, pu, mu, cause | = | l1 info `<u>`; computer, history, music, because — `<u>` у e4s5, e5s2, e5s7 | — | ✅ |
| a12 gaps | because; don’t | = | l1 info #2 | ні | ✅ |
| a13 build | I like history because it’s interesting. | = | l1 info #2 | 1 рядок; *Because… I like…* відсічено `keepCase`; з why — жодного | ✅ |
| a14 gaps | because; difficult; does | = | l1 info; «can’t remember the rivers» | ні | ✅ |
| a15 gaps | experiment; poster | = | l2 info | ні | ✅ |
| a16 match | test/poster/project/experiment | = | l2 info | ні | ✅ |
| a17 word | pairs | = (+a pair) | l2 info (in pairs) | groups відсічено «Two people» | ✅ |
| a18 gaps | in; a; a | = | l2 info; a/an — e4 | ні | ✅ |
| a19 gaps | is making; watch | = | l2 info #2 | ні | ✅ |
| a20 word | is doing | = (+’s doing; contractions) | l2 info #2; «now» | ні | ✅ |
| a21 pick | doing | = | l2 info #2 | ні | ✅ |
| a22 gaps | is taking; takes; makes | = | l2 info #2 | ні | ✅ |
| a23–a24 choice | doing an experiment; writing about the experiment | = | текст | ні | ✅ |
| a25 multi | 0, 2 | = | текст | ні | ✅ |
| a26 gaps | are making; watch | = | l2 info #2 | ні | ✅ |
| a27 build | We are doing an experiment in science. | = | l2 info #2 | 1 рядок; *Are we…?* відсічено `keepCase` | ✅ |
| a28 gaps | are doing; work; watched | = | l2 info #2; Past Simple — e6s3, l2 final | ні | ✅ |
| a29 gaps | who; which | = | l3 info | that варіантом не дано | ✅ |
| a30 word | which | = (+that) | l3 info | ні | ✅ |
| a31 pick | who | = | l3 info | ні | ✅ |
| a32 multi | who, that | = | l3 info | обидві правильні в ключі | ✅ |
| a33 build | The map which is on the wall shows Ukraine. | = | l3 info | 2 рядки, обидва в `answer`; з who — жодного | ✅ |
| a34 match | classmate/teacher/timetable/map | = | l3 match (інші формулювання) | ні | ✅ |
| a35 word | classmate | = | l3 match; «a person who is in your class» відсікає friend | ні | ✅ |
| a36 gaps | timetable; teacher; classmate | = | l3 match | ні | ✅ |
| a37 gaps | who; which | = | l3 info | ні | ✅ |
| a38 build | Daryna is the girl who loves maps. | = | l3 info, l3 build | 2 рядки в `answer`. Питання *Is Daryna the girl…?* відкинуто, але контекст «writes… for the class website» потребує твердження. Так само в build уроку l3 (verified) | ✅ |
| a39 gaps | who; which; because | = | l3 info, l1 info #2 | ні | ✅ |
| a40 gaps | must; mustn’t | = | l4 info | ні | ✅ |
| a41 pick | musts | = | l4 info («Not: She musts») | ні | ✅ |
| a42 word | must | = | l4 info; «Write must or mustn’t» відсікає have to | ні | ✅ |
| a43 gaps (після правки) | don’t have to; mustn’t | = | l4 info #2 | рамка «choice / rule» відсікає | ✅ (правка 1) |
| a44 multi | 0, 1 | = | l4 info #2 | ні | ✅ |
| a45 pick | must | = | l4 info | ні | ✅ |
| a46 choice | No, you don’t have to. | = | l4 info #2; e6s5l5 | ні | ✅ |
| a47 gaps | mustn’t; don’t have to | = | l4 info #2 + «It’s a rule / your choice» | ні | ✅ |
| a48 build | Do I have to go to the art club? | = | e6s5l5 (Do I have to…?) | 1 рядок. *Must I go…?* відсічено `keepCase` (плитка «must» мала, «Do» велика) | ✅ |
| a49 gaps | should; shouldn’t | = | l5 info | ні | ✅ |
| a50 pick | to | = | l5 info | ні | ✅ |
| a51 gaps | ask; should | = | l5 info | ні | ✅ |
| a52 gaps | must; should | = | l5 info («a rule → must, advice → should») | див. §7 п. 1 | ✅ |
| a53 match | videos at night / maths problems / map / sandwich | = | l5 info | ні | ✅ |
| a54 build | What should I read for the history test? | = | l5 info #2 | 1 рядок | ✅ |
| a55 choice | Should I read this book? | = | l5 info #2 (Can I vs Should I) | ні | ✅ |
| a56 gaps | should; shouldn’t | = | l5 info | ні | ✅ |
| a57 build | You should drink some water after PE. | = | l5 info | 1 рядок; *After PE…* відсічено `keepCase` | ✅ |
| a58 gaps | who; should; go | = | l3, l5 info | ні | ✅ |
| a59 gaps | amazing | = | l6 info, hyp fbText («very, very good») | ні | ✅ |
| a60 sort | good: amazing, exciting, fun · bad: boring | = | l6 info | ні | ✅ |
| a61 pick | amazing, exciting | = | l6 info | ні | ✅ |
| a62–a64 | played the guitar; the end; 0, 3 | = | текст | ні | ✅ |
| a65 gaps | did; was | = | l6 info | ні | ✅ |
| a66 word | made | = | l6 info | ні | ✅ |
| a67 pick | go | = | l6 info | ні | ✅ |
| a68 gaps | were; had; saw; learnt | = | l6 info; learnt — l6 part 3 | learned серед варіантів немає | ✅ |
| a69 match | exciting / video / Last Tuesday / park | = | l6 info; Past Simple questions — e6s3 | ні | ✅ |
| a70 gaps | How; was | = | l6 info, l6 build | ні | ✅ |
| a71 build | How was the experiment in science? | = | l6 info | 1 рядок | ✅ |
| a72 gaps | was; made | = | l6 info | ні | ✅ |
| a73 build | We went to the zoo with our class. | = | l6 info | 2 рядки в `answer` | ✅ |
| a74 gaps | was; went; did; exciting | = | l6 info | ні | ✅ |

**Лексика (D-019).** Скрипт (слова уроків до e6s6 і уроків e6s6 до `lesson` включно) не знайшов поза набором ключів чи дистракторів. Хибні спрацювання — «project» і «group» (у уроці `<u>pro</u>ject` розбито тегом, groups у множині). *drama* (a43 до правки) — лише в `body`, після правки зникло. Kyrylo з'являється в pe6s6 у вправах l1–l2 (a03, a04, a06, a13, a17), а в уроці його вводить лише l3. Ім'я не є відповіддю, тож D-019 це не порушує. Рекомендація, не блокує.

**Копії уроків (n-грами ≥ 6).** a43 повторювала рамку info/gaps l4 («Ms Lysenko talks about two things. 1. … it’s a rule. No …! 2. The … club after school: it’s your choice.»), а другий пропуск — diag-g9 («mustn’t eat in the computer room: it’s a rule»), з тими самими ключами mustn’t / don’t have to. Переписав (правка 1). Перший варіант моєї правки (chess club) збігся з реченням l4 info «You don’t have to go to the chess club», тому замінив на music club. Решта збігів — інструкції («One word in …’s message is wrong», «My best lesson this year was in…» без ключа). a45 починається реченням l4 pick «At my school, we must wear a uniform», але помилка там в іншому слові (must → mustn’t, а не *to*). ✅

**Герої (glossary/eng-heroes.md).** У Тараса є сестра (a14) — Zlata, бандура ✅. У Daryna є сестра ✅. Myroslava й Orest — однокласники Тараса, Lviv ✅. Kyrylo любить history ✅ (FIX verifier-e6s6). Бабуся Kyrylo — нейтрально. У Andrii школа без форми (a46 — café, a44 — art club), суперечностей немає. Bohdan з гітарою — нова деталь, канону не суперечить.

## 5. Педагогіка, BrE, підказки

- `steps` і `hint` написано англійською рівня 6 кл. BrE: maths, favourite, trainers, «in pairs». AmE немає.
- hint: розкриває відповідь лише a11 («Two words have the strong part at the end or in the middle»), і то частково: не каже, які це слова. Лишаю. Решта підказок — правило уроку («Person → ? Thing → ?») або пошук у тексті. ✅
- a11 `body` «I like music because computers are difficult for me.» — логічно дивне речення, але воно лише тло для `stress`. Рекомендація: «I like music because it’s fun, but computers are difficult for me.» Не блокує.

## 6. Авторське право (WebSearch, дослівні запити в лапках)

| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| a62 «We made a song about our school. Bohdan played the guitar» | збігу немає (шкільні пісенні проєкти, без Bohdan) |
| a23 «Orest is doing an experiment with an egg and some water» | збігу немає (сторінки про досліди з яйцем) |

Решта текстів (a24–a25, a63–a64, a74) складена з речень-шаблонів, перевірених вище, і з речень уроку (verified).

## 7. Спірні місця автора

1. **a52 must / should.** Обидва дієслова граматичні, але кожен пропуск має рамку в самому реченні («: it’s a rule.» / «: it’s a good idea.») і в `body`. Правило l5 info («At school: a rule → must, advice → should») і learned «Tell a rule from advice» роблять другий варіант змістово хибним, а не «менш типовим». Переформульовувати не треба. ✅
2. **a10 history** — три склади за CD, два за OALD. Наголос однозначний, див. §2. ✅
3. **a11 because** — у CD і OALD наголос на 2-му складі. ✅
4. **l6 vocab** — див. §1. ✅

## 8. Правки (зроблені в content/eng/pool-g6-e6s6.js)

1. **a43** (копія рамки l4 + diag-g9): `body` → «Andrii tells Kyrylo about two things at their school. 1. The music club on Tuesdays: it’s your choice. 2. Running in the art room: no! It’s a rule.»; `text` → «You {*don’t have to|mustn’t} go to the music club. You {*mustn’t|don’t have to} run in the art room.» (порядок рамок змінено); `steps` оновлено.
2. `status: "verified"`, `meta.factcheck` і шапка посилаються на цей звіт.

Повторно після правок: validate 0/0, personalization-qa без «БРАКУЄ», n-грами a43 (лишилося лише загальне «you don’t have to go to the»), лексичний скрипт — ✅.

Рекомендовано, не блокує: ENGINE (уже в inbox від pe5s10) — `wordVerdict` дає «Almost: check the spelling» на *what* у a30 (ключ which). Це інше слово, а не орфографічна помилка.

## 9. Прогін

- `node tools/validate.mjs --pool pe6s6` — 0 помилок, 0 попереджень.
- `node tools/personalization-qa.mjs --pool pe6s6 --strict` — без «БРАКУЄ».
- Build і плейтест не запускав: паралельна робота, build робить оркестратор.

## 10. Вердикт

Пул pe6s6 — **verified**. Відкритих ❌ і ⚠️ немає. Затвердження (`approved`) — лише вчитель.
