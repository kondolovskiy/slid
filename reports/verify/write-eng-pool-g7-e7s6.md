# Верифікація: пул pe7s6 (англійська, 7 кл., розділ e7s6 «School life after lessons»)

Верифікатор: verifier-pe7s5-pe7s6, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s6.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g7-e7s6.md. Опора — уроки `content/eng/g7-e7s6.js` (усі verified, reports/verify/write-eng-g7-e7s6.md) і попередні розділи. Еталони — reports/verify/write-eng-pool-g6-*.md, -g7-e7s1…s4.md.

**Вердикт: пул придатний, `status: "verified"`.** Ключі 65/65 збіглися з моїми розв'язками. Знайшов і виправив 1 граматично правильний дистрактор (a08), 1 копію фінального екрана уроку (a32) і 1 неграматичне для класу слово в дистракторі (a65). Усього правок 5, з них одна — статус. Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md. `srcPage` і `adapted` немає ✅. Сторінки звірено з PDF МП-ІМ (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf): с. 32 — «Шкільне життя» і функції; с. 34 — conditional / unless / as soon as / Present Continuous for arrangements; с. 35 — Shall. `src` вправ відповідають: l1 vocab/read, l2, l4 read, l6 read/func/phon — с. 32; l1 gram, l3, l4 gram/write, l6 write — с. 34; l5 — с. 35 ✅.

## 2. Факти
Реальні факти є лише про First Bell, Last Bell, sports day і school fair (a12–a18). Усі взято з e7s6l2, верифікованого з двома джерелами (reports/verify/write-eng-g7-e7s6.md).

| Твердження | Опора в уроці | Вердикт |
|---|---|---|
| Навчальний рік в Україні починається 1 вересня, First Bell | e7s6l2 info #3 | ✅ |
| Квіти вчителям на First Bell | e7s6l2 #4 («lots of children bring flowers») | ✅ (a13 «In many schools, pupils give flowers» — та сама думка) |
| Last Bell наприкінці травня, school leavers Year 11, дівчинка з Year 1 дзвонить, випускник несе її на плечах, потім іспити | e7s6l2 #5 | ✅ (a15 «take their exams» = «have their exams») |
| Sports day — перегони, egg-and-spoon race; school fair — stalls, cakes, old toys | e7s6l2 #6 | ✅ |

Герої відповідають канону glossary/eng-heroes.md: Andrii — шаховий клуб (Mondays — l1); Sofiia — його сестра; Daryna, Kyrylo, Zoriana, Ms Lysenko — клас Andrii, Kyiv; Halyna — малює, подруга Оксани; Kateryna — drama, Kharkiv; Polina — подруга Mariia; Emma — swimming club по понеділках і photography по середах (як e7s6l1); Tom — swimming club; Dmytro — школа Оксани; Grandad Mykola, Grandma Hanna — бабуся й дідусь Оксани; Liza — із фіналу e7s6 ✅. Подорож Emma потягом з London реальності не суперечить (pitfalls п. 21) ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Перевіряв так само, як у pe7s5: `SLID_LANG.solution` → `check(…, "en")` для gaps / pick / stress / word / match / build. Для build перебрав усі перестановки всіх підмножин (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe7s5-6/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?` ✅.

| Вправа | Моя відповідь | Опора | Друга правильна / дистрактори | Вердикт |
|---|---|---|---|---|
| a01 match | art / science / drama / chess | l1 #3, #4 | ні | ✅ |
| a02 gaps | member; act | l1 #3 | ні | ✅ |
| a03 word | member | l1 #3 | ні | ✅ |
| a04 gaps | members; meet; lessons | l1 #3 | join / become — неграматичні без додатка | ✅ |
| a05 choice | on Fridays | текст | ні | ✅ |
| a06 choice | the art club | текст + l1 #3 | ні | ✅ |
| a07 multi | [0,2] | текст + l1 #6 | ні | ✅ |
| a08 gaps | meets; goes | l1 #6 | **«The science club meet» — у BrE збірний іменник з дієсловом у множині правильний** (pitfalls п. 15, «Our team win») | ❌→✅ дистрактор meet → «to meet» |
| a09 gaps | is going; are meeting | l1 #6 | ні | ✅ |
| a10 choice | I’m going to the drama club on Tuesday. | l1 #6 | інші два — розклад / факт, не план | ✅ |
| a11 pick | [play] | l1 #6 | — | ✅ |
| a12 choice | on 1 September | l2 #3 | ні | ✅ |
| a13 gaps | First Bell; flowers | l2 #3, #4 | ні | ✅ |
| a14 match | 4 пари | l2 #3, #5, #6 | перебрав — ні | ✅ |
| a15 gaps | Year 1; shoulders; exams | l2 #5 | holidays — хибне за текстом уроку | ✅ |
| a16 choice | the new pupils in Year 1 | текст | ні | ✅ |
| a17 gaps | Friday; after lunch; finished | текст | ні | ✅ |
| a18 multi | [0,2] | текст | ні | ✅ (carrying — від carries, l2 #5) |
| a19–a21 stress | tra<u>di</u>tion, Sep<u>tem</u>ber, <u>teach</u>er, compe<u>ti</u>tion, <u>mem</u>ber | l2 #3 `<u>`, e7s5 | у кожному наборі наголос на різних складах | ✅ |
| a22 gaps | gets; will walk; is; will play | l3 #3 | у головному реченні дистрактор — лише Past Simple | ✅ |
| a23 match | 4 пари | l3 #3, #4 | біекцію інакше не складеш | ✅ |
| a24 word | rains | l3 #3 | ні | ✅ |
| a25 build | If we miss the bus, we’ll be late. | l3 build | 325 — лише ключ (кома в плитці) | ✅ |
| a26 pick | [will rain] | l3 #3 «Not: If we will win» | див. нижче | ✅ |
| a27 gaps | lose; won’t | l3 #3, #6 | don’t be / didn’t be — неграматичні | ⚠️→✅ «we won’t be sad» — ключ і рамка фіналу l3 → «be angry. We’ll train more.» |
| a28 choice | Sofiia will be late if she misses the bus. | l3 #6 (кома) | хибні мають will після if | ✅ |
| a29 gaps | finish; will play | l3 #3 | ні | ✅ |
| a30 word | has | l3 #3 | ні | ✅ |
| a31 build | What will you do if you win? | l3 #6 | 1 956 — лише ключ; «If you win what…» без коми — неправильне за l3 #6 | ✅ |
| a32 gaps | (нова) wins; will be; doesn’t win; won’t; come | l3 #3, #6 | ні | ⚠️→✅ було копією фінального екрана l3 («Our chess club has a big match… If we win, we will play in the final… If we lose… won’t be sad») — переписано |
| a33 gaps | rains; is | l4 #3 | doesn’t rain / isn’t — подвійне заперечення, l4 #3 «Not: unless it doesn’t rain» | ✅ |
| a34 gaps | get; arrives | l4 #6 | ні | ✅ |
| a35 choice | Unless you leave now, you’ll be late. | l4 #3 | ні | ✅ |
| a36 word | unless | l4 #3, word | until / before — інша думка, інструкція відсікає | ✅ |
| a37 pick | [isn’t] | l4 #3 | — | ✅ |
| a38 gaps | finishes; is; get | l4 #3, #6 | ні | ✅ |
| a39 gaps | finishes; rains | l4 #3, #6 | ні | ✅ |
| a40 build | As soon as we finish, we’ll have a picnic. | l4 #6 | 325 — лише ключ | ✅ |
| a41 build | Unless it rains, we’ll walk to school. | l4 #3 | 325 — лише ключ | ✅ |
| a42 choice | as soon as the fair finishes | текст | ні | ✅ |
| a43 choice | in the park | текст + l4 #3 | ні | ✅ |
| a44 multi | [0,2] | текст + l4 | ні | ✅ |
| a45 match | 3 пари | l5 #3, #5 | біекцію інакше не складеш | ✅ (carry — від carries, l2) |
| a46 choice | Shall I make the invitation? | l5 #3 | Shall we — пропозиція разом, не послуга | ✅ |
| a47 gaps | Shall; please | l5 #3, #5 | ні | ✅ |
| a48 choice | No, thanks. I can do it. | l5 #5 | ні | ✅ |
| a49 order | What shall we… → Shall we… → Good idea! Shall I… → Yes, please. | l5 #3, #5 | однозначно | ✅ |
| a50 gaps | open; go | l5 #3 | ні | ✅ |
| a51 build | Shall I make some sandwiches? | l5 #3 | 325 — лише ключ (keepCase + «Shall») | ✅ |
| a52 pick | [to] | l5 #3 | — | ✅ |
| a53 gaps | Shall; Let’s; shall | l5 #3, фінал l5 | «Let’s we», «Shall invite» — неграматичні | ✅ |
| a54 choice | at 12 pm | текст | ні | ✅ |
| a55 multi | [0,1] | текст | ні | ✅ |
| a56 multi | [1,2] | текст | «Daryna will come at 5 pm» — хибне (після 5.30) | ✅ |
| a57 gaps | think; agree | l6 #5 | ні | ✅ |
| a58 choice | I don’t think it will rain. | l6 #5 | ні | ✅ |
| a59 gaps | What; agree; don’t think; sure | l6 #5 | «How do you think» — неграматичне в цьому значенні | ✅ |
| a60–a62 stress | invi<u>ta</u>tion, <u>fes</u>tival, <u>pos</u>ter, tra<u>di</u>tion, Sep<u>tem</u>ber | l6 #3, l2 #3 | у кожному наборі є invi<u>ta</u>tion | ✅ |
| a63 gaps | will be; rains | l6 #3 | ні | ✅ |
| a64 build | If it rains, the picnic will be in the school hall. | l6 #3 | 1 956 — лише ключ | ✅ |
| a65 gaps | invitation; will come; will bring; will be; get | l6, l4 #6 | ні | ⚠️→✅ дистрактор «brought» (немає в уроках g4–e7s6) → «brings» |

**a26 «If it [will rain]».** Помилка однозначна. CD Grammar, Conditionals: if: «Warning: We use the modal verb in the main clause, not in the conditional clause… Not: If a lawyer will read the document…» (https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if). Conditionals: typical errors: «We don’t use will and would in the conditional clause… Not: If you will book before April 30th…» (https://dictionary.cambridge.org/grammar/british-grammar/conditionals-typical-errors). Will в if-частині буває правильним, коли означає волю чи ввічливе прохання («If you’ll just tell Julie that her next client is here», https://dictionary.cambridge.org/grammar/british-grammar/if). З безособовим it про погоду такого прочитання немає. Урок прямо вчить «After if, don’t use will» (l3 #3) ✅.

**a28, кома.** CD Conditionals: «I’ll go to Bristol tomorrow if the weather is good. (conditional clause second; a comma is not normally used…)» (https://dictionary.cambridge.org/grammar/british-grammar/conditionals). Варіант із комою хибний і без того: у ньому «if she will miss» ✅.

**Нова a32** (Mariia → Kateryna): «My picture is in a drawing competition on Friday. If it {*wins|will win|won}, it {*will be|was|being} on the wall of the school hall. If it {*doesn’t win|won’t win|didn’t win}, I {*won’t|don’t|didn’t} be sad. I’ll draw a new one! Will you {*come|came|coming} to see it?» Друга правильна відсутня. У головному реченні дистрактори — лише Past Simple / -ing / «don’t be», без модальних (CD: у main clause допустимі «shall/should/will/would/can/could/may/might»). Лексика — з g4–e7s6 (скрипт). Mariia малює, Kateryna — її подруга (канон). Lvl 3, sk write, hint і steps оновлено.

**Покриття:** 6 уроків, 65 вправ. Кожна пара (урок, sk) має ≥ 3 вправи рівнів 1–3, у вправ рівнів 2–3 є `hint`, boss l7 без вправ ✅. `personalization-qa --pool pe7s6` — без помилок.

## 4. Форми, BrE, лексика, авторське право
- **Наголос (curl у цій сесії).** CD UK (https://dictionary.cambridge.org/dictionary/english/<word>): tradition «/trəˈdɪʃ.ən/», september «/sepˈtem.bər/», teacher «/ˈtiː.tʃər/», member «/ˈmem.bər/», festival «/ˈfes.tɪ.vəl/», invitation «/ˌɪn.vɪˈteɪ.ʃən/», poster «/ˈpəʊ.stər/», competition «/ˌkɒm.pəˈtɪʃ.ən/». OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<word>): «/trəˈdɪʃn/», «/sepˈtembə(r)/», «/ˈtiːtʃə(r)/», «/ˈmembə(r)/», «/ˈfestɪvl/», «/ˌɪnvɪˈteɪʃn/», «/ˈpəʊstə(r)/», «/ˌkɒmpəˈtɪʃn/». Ключі збігаються ✅.
- **unless:** CD Conditionals: other expressions: «Unless means something similar to ‘if … not’… we use the present simple in the unless-clause» (https://dictionary.cambridge.org/grammar/british-grammar/conditionals-other-expressions-unless-should-as-long-as) ✅.
- **Лексика:** звірив скриптом з g4–g6, e7s1–e7s5 і e7s6 до `lesson` включно. Лишилися Liza (ім'я), carrying / carry (від carries, l2) і quizzes (від quiz, l5) — прийнятно ✅.
- **BrE:** school leavers, Year 1 / Year 11, 3.30 pm, holidays у значенні «канікули». AmE, IPA, A/B/C і «Listen» немає ✅.
- **Копії уроків:** 6-грами проти g4–g11. Після правок збігаються лише формули інструкцій і факти l2 (a13, a15 — відтворення змісту уроку, cult). Рамки «Our chess club has a big match» і «won’t be sad» прибрано ✅.
- **Авторське право:** WebSearch з лапками нічого не знайшов: «Our sports day was on Friday. In the morning, we had running races» (a17), «A girl from Year 1 is ringing the bell, and a tall school leaver is carrying her» (a18) ✅.

## 5. Правки (зроблені)
1. a08 — дистрактор «meet» → «to meet» (у BrE «The club meet» правильне).
2. a27 — «be sad. We’ll try again next year.» → «be angry. We’ll train more.», steps (рамка фіналу l3).
3. a32 — новий текст замість копії фінального екрана l3 (pitfalls п. 18).
4. a65 — дистрактор «brought» → «brings» (pitfalls п. 20).
5. `status: "verified"`, `meta.factcheck` і шапка — посилання на цей звіт.

## 6. Прогін
`node tools/validate.mjs --pool pe7s6` — 0 помилок, 0 попереджень. `node tools/personalization-qa.mjs --pool pe7s6` — без помилок. Перебір `check` після правок: усі `solution` зараховуються, build приймає лише ключі. Браузерний `test-answer-ui.py --pool` — у CI.

**Вердикт по пулу: verified.**
