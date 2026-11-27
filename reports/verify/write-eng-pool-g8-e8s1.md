# Верифікація: пул pe8s1 «Penfriends and letters» (англійська, 8 кл.)

Верифікатор: verifier-pe7s7-pe8s1 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s1.js` (66 вправ a01–a66) за скілами `content-verify` (§2–§5, «Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g8-e8s1.md. Опора — уроки content/eng/g8-e8s1.js (verified, reports/verify/write-eng-g8-e8s1.md) і раніші уроки e4–e7. Еталони — reports/verify/write-eng-pool-g6-*.md, -g7-*.md.

**Вердикт: пул придатний, `verified`.** Зробив 16 мінімальних замін у 10 вправах. Знахідки такі.
- 4 вправи з лексикою пізніших розділів (D-019): *fashion*, *pop* (a01), *drums* (a18, a22, a42), *collecting* (a26, уперше в l5), *scooter* (a29, немає в уроках).
- 1 часова суперечність у тексті: a29 «yesterday… has been repairing all afternoon».
- 3 hint, що підписували пропуски чи складали відповідь (a11, a14, a55).
- 1 steps, що не відповідав тексту (a23).

Другої правильної відповіді й правильних дистракторів не знайшов. PP / PPC — за TQ-142. TQ не створюю, людині питань немає.

## 1. Програма (`sources`, `src`)
`sources` — `mpim`, `program: true`, без `srcPage` і `adapted`. Сторінки `src` звірено з нотатками автора та звітом уроку e8s1 (MP-IM, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf): с. 28 — читання особистих листів (read); с. 30 — листування (func, write); с. 32 — «Друзі по листуванню» (vocab); с. 35 — Present perfect continuous, tags, reciprocal pronouns (gram). ✅

## 2. Факти й норма: твердження → джерела (відкрито в цій сесії; CD — curl, OALD — curl) → вердикт
Фактів про країни, дат і реальних установ у пулі немає. Герої та їхні країни (Kai — Scotland, Lena — Germany, Ines — Portugal) — вигадані особи, не реальні люди.

| Норма | Джерела | Вердикт |
|---|---|---|
| penfriend — BrE | OALD «penfriend /ˈpenfrend/ (British English) (also pen pal North American English, British English)» — https://www.oxfordlearnersdictionaries.com/definition/english/penfriend; CD «A2 someone who you write friendly letters to regularly, but you have never met» — https://dictionary.cambridge.org/dictionary/english/penfriend | ✅ (у `word` penfriend не є відповіддю) |
| Love — кінцівка листа друзям і родині | CD «used before your name at the end of letters, cards, etc. to friends or family: …Love, Kate» — https://dictionary.cambridge.org/dictionary/english/love | ✅ |
| Best wishes — лист людині, яку знаєш | CD «a polite way of finishing a letter to a person who you know quite well» — https://dictionary.cambridge.org/dictionary/english/best-wishes | ✅ a63: Best wishes у першому листі Lena не суперечить словнику, бо «Love» — лише для близьких; так і в уроці l5 #5 |
| Yours sincerely — офіційний лист | CD «B1 used to end a formal letter…» — https://dictionary.cambridge.org/dictionary/english/yours-sincerely | ✅ a51, a53, a56, a66 |
| Question tags; «I’m…, aren’t I?» | CD Grammar «If the main clause verb is I am, then the negative tag form is aren’t I: Sorry, I’m late again, aren’t I?» — https://dictionary.cambridge.org/grammar/british-grammar/tags | ✅ a42, a45, a49. Хибні теги — лише неможливі форми (doesn’t you, don’t he, does they, isn’t I, is he після doesn’t, doesn’t he після is) |
| each other / one another | CD Grammar «There is very little difference between each other and one another and we can normally use them in the same places» — https://dictionary.cambridge.org/grammar/british-grammar/each-other-one-another | ✅ у `word` a58 обидві форми в ключі |
| PP vs PPC з live / learn / work / play + for / since | TQ-142 (docs/teacher-questions.md): не протиставляти; оцінювати лише «скільки» → PP, know / like / have → PP, «ще триває» → PPC | ✅ Таких протиставлень у пулі немає. a16, a20, a24–a26 протиставляють лише have / has, for / since, been / being і -ing / основу. a32, a34, a40 — «скільки» (four pictures, two races, ten times) і «ще триває» (still in the pool). a31, a33, a40 — know / like без -ing |

## 3. Завдання: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я спершу розв'язав сам, а тоді звірив із ключем. Для всіх 8 `build` перебрав усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` (скрипт `chk.mjs` у scratchpad). Ключі `word` прогнав через `wordVerdict`. Лексику перевірив скриптом `lex.mjs`: усі уроки e4–e7 і уроки e8s1 до уроку вправи включно. Інфлексії відомих дієслів — sitting, acting, repairing, laughing, drawn, sung — приймаю (sit, act, repair, laugh, draw, sing є в e4–e7).

| Вправа | Моя відповідь | Опора | Друга правильна? / зауваження | Вердикт |
|---|---|---|---|---|
| a01 choice | Kai | тексти на екрані | ні | ✅ fashion (e9s3), pop (e8s4) → «interested in animals and photography» (узгоджено з a02) |
| a02 multi, a03 choice | 0, 2; No, because she isn’t into sport | тексти на екрані | ні | ✅ |
| a04 match | за місцем | l1 #4 | кожна відповідь лягає лише до одного питання | ✅ |
| a05 choice, a06 multi | Say no and tell an adult; 0, 2 | l1 #6 | ні | ✅ |
| a07–a09 | Do, Does; does, do, Does; [do] | l1 #5 | ні | ✅ |
| a10 choice | He is trying to find a penfriend | l1 #9 fbText «look for = try to find» | ні | ✅ |
| a11 gaps | looking, interested, into | l1 #2 | ні | ✅ hint «looking …, interested …, into …» перелічував відповіді в порядку пропусків (pitfall 17) → «Look at the word after each gap: for, in or nothing?» |
| a12 word | profile | l1 #2 | ні | ✅ |
| a13 build | I’d like to write about music. | l1 #2, #11 | перебір: лише ключ | ✅ |
| a14 gaps | live, into, looking | l1 #2, #11 | ні; Kateryna — Kharkiv, drama club (канон) | ✅ hint «I + live… I’m looking…» видавав 2 з 3 відповідей → нейтральний |
| a15 gaps | live, interested, interesting, to write | l1 #11 fbText | ні; Dmytro — 10 у 8 кл. (канон) | ✅ |
| a16–a18 | have, has; riding; 2 | l2 #3 | ні | ✅ a18 drums (e8s4) → guitar (канон Tom: барабани й гітара) |
| a19 pick | [has] | l2 #3 | ні | ✅ |
| a20 gaps | since, for, has | l2 #5 | ні | ✅ |
| a21 build | How long has she been playing the piano? | l2 #5–#6 | перебір: лише ключ | ✅ |
| a22 match | за місцем | l2 #5 | займенники you / she / he однозначні | ✅ drums → guitar |
| a23 gaps | How long, For, Have | l2 #5 | ні | ✅ steps «Have you been playing…?» → «…doing your homework?» (як у тексті) |
| a24, a25 gaps | been, going; since, have, Has | l2 #3, #5 | ні; Bohdan — теніс, 14 − 8 = 6 ✅ | ✅ |
| a26 gaps | been, have, buying, have | l2 #3, #5 | collecting — уперше в l5 (collect — лише з e11) | ✅ виправлено → buying / buy |
| a27, a28 choice | practising for a chess competition; four | текст на екрані | ні | ✅ |
| a29 multi | 0, 1 | текст на екрані; l3 #3 | **«When I came home yesterday… He has been repairing… all afternoon» — PPC із вчорашнім моментом суперечить правилу l3 («until now»); scooter немає в уроках** | ✅ виправлено → «Dad’s hands are black! … Dmytro’s bike and my phone!»; опція «hands are clean»; hint і steps. Тато — mechanic (канон) ✅ |
| a30 choice, a31 word | I’ve been running…; known | l3 #3, #5 | a31: «Use the verb know» | ✅ |
| a32–a34 | drawn, drawing; [been liking]; been swimming, won | l3 #5–#6 | TQ-142 дотримано (§2) | ✅ |
| a35 build | What has Tom been doing? | l3 #8 | перебір: лише ключ | ✅ |
| a36 choice, a37 gaps | 1; for, have, working | l3 #8, intro | ні | ✅ |
| a38–a40 gaps | training, helping; been, reading, has; known, practising, sung, has | l3 | ні; Oksana знає Halyna з 6 років, у 8 кл. їй 14 → 8 років ✅ | ✅ |
| a41 gaps | don’t you, doesn’t she | l4 #3 | Mariia — Kharkiv, мама dentist ✅ | ✅ |
| a42 match | за місцем | l4 #3, #5 | теги однозначні за особою й полярністю | ✅ drums → guitar |
| a43 choice, a44 word | does he; are | l4 #5–#6 | ні | ✅ |
| a45 gaps | aren’t I, do they, isn’t he | l4 #5 | ні; батьки Andrii живуть у Kyiv, дідусі — у Chernihiv ✅ | ✅ |
| a46 build | Tom doesn’t play tennis, does he? | l4 #5 | перебір: лише ключ | ✅ |
| a47–a49 gaps | don’t you, doesn’t she; does she, aren’t you, don’t they; isn’t he, doesn’t he, does he, aren’t I | l4 | ні | ✅ |
| a50 match | за місцем | l5 #3 | Subject / Start / Last line / End однозначні | ✅ |
| a51 choice | Yours sincerely, Zofia Nowak | l5 #5 | ні | ✅ |
| a52 gaps | Thanks, hear, Hope | l5 #3 | «Wish to hear from you soon» — не формула листа | ✅ |
| a53 pick | [Yours sincerely] | l5 #5 | «Dear Lena» другові правильне (l5 #3) | ✅ |
| a54 order | 0-1-2-3-4 | l5 #3, #8 | ні | ✅ |
| a55 build | Hope to hear from you soon. | l5 #3 | перебір: рівно 2 порядки, обидва в `answer` | ✅ hint «Hope to … from you.» складав відповідь → «Look at the last line of an email to a friend.» |
| a56 gaps | Hi, for, from, acting, soon, Best wishes | l5 | «hear of you» — інше значення | ✅ |
| a57–a59 | each other, herself; each other / one another; [themselves] | l6 #3; e7s1 reflexive | ні | ✅ |
| a60 build | They have known each other for four years. | l3 #5, l6 #3 | перебір: рівно 3 порядки, усі в `answer` | ✅ |
| a61–a63 | 1; 0, 1; 1 | текст на екрані; l5 #5 | ні | ✅ |
| a64–a66 gaps | for, each other; each other, each other, ourselves; writing, each other, don’t you, Best wishes | l5, l6, l4 | ні | ✅ |

**Покриття** (урок × `sk` → рівні): l1 read/func/gram/vocab/write 1-2-3; l2 gram 1-2-2-3-3, func/write 1-2-3; l3 read 1-2-3, gram 1-2-2-3-3, func/write 1-2-3; l4 gram 1-1-2-2-3-3, write 1-2-3; l5 func 1-2-2-3, write 1-2-3; l6 gram 1-2-3-3, read/write 1-2-3. Збігається з таблицею автора. Boss l7 без вправ.

**Копії уроків** (7-грами, скрипт `ngram.mjs`). Збіги лише у формулах листа (Thanks for your email. It was great to hear from you; Hope to hear from you soon; Sorry I haven’t written for ages), інструкціях і «we know a lot about each other» (a59, pick: інше речення, інша помилка). Речень уроку з тим самим ключем і типом немає.

**Механіка й BrE** (grep). AmE (pen pal, color, mom, vacation), «Listen / You hear», IPA, `uk`, літери A/B/C не знайдено. Ключі `word` без кінцевого `.!?`. `validate --pool pe8s1` — 0/0; `personalization-qa --pool pe8s1` — лише «ще не verified» до зміни статусу; `euphony --pool pe8s1` без зауважень. `test-answer-ui.py` не запускав: немає Python-модуля playwright, прогін — у CI.

## 4. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a02 (профіль Lena) | `"I'm interested in animals, and I've got two horses. I'm also into photography"` | збігу немає |
| a61–a63 (лист Lena) | `"Your English teacher has given my teacher your name"` | збігу немає |

## 5. Педагогіка, вік, безпека, герої
- Онлайн-безпека (a05, a06) відповідає l1 #6. Домашньої адреси й телефону ніхто не пише, зустрічі без батьків подано як небезпечні ✅. Неприйнятного для віку немає.
- **Канон** (glossary/eng-heroes.md). Kateryna — Kharkiv, drama club ✅. Zofia — Poland, сестра грає на піаніно ✅. Daryna — гори восени, сестра ✅. Oksana — тато mechanic, Halyna з шести років ✅. Dmytro — 10 ✅. Tom — гітара ✅. Andrii — Kyiv, дідусі в Chernihiv, шахи з дідом ✅. Mr Price — учитель Emma ✅. Нові імена Kai, Lena, Ines, Mia, Mrs Wood не зайняті іншими героями. Прізвище Zofia Nowak (a51) — нова деталь, NOTE в inbox.

## 6. Правки (зроблені)

| Вправа | Було | Стало | Чому |
|---|---|---|---|
| a01 | Lena: interested in fashion and pop music; steps «Lena is into fashion» | interested in animals and photography; steps відповідно | fashion — з e9s3, pop — з e8s4 (D-019); узгоджено з a02 |
| a11 hint | Look at the profile words: looking …, interested …, into … | Look at the word after each gap: for, in or nothing? | hint перелічував відповіді (pitfall 17) |
| a14 hint | I + live. Into or interested in? I’m looking… | Check the person, the word after each gap and the -ing form. | hint видавав відповіді |
| a18, a22, a42 | the drums | the guitar | drums — з e8s4; канон Tom — гітара |
| a23 steps | Have you been playing…? | Have you been doing your homework? | steps не відповідав тексту |
| a26 | {*collecting\|collect}; steps | {*buying\|buy}; steps | collecting — уперше в l5, collect — з e11 |
| a29 | When I came home yesterday, Dad’s hands were black… my scooter; «Dad’s hands were clean»; hint, steps | Dad’s hands are black!… my phone; «Dad’s hands are clean»; hint, steps | PPC «until now» із вчорашнім моментом — суперечність правилу l3; scooter немає в уроках |
| a55 hint | Hope to … from you. | Look at the last line of an email to a friend. | hint складав відповідь |
| файл | `status: "draft"`, factcheck self | `status: "verified"`, factcheck verifier-pe7s7-pe8s1 | — |

Рекомендовано: нічого блокувального. Людині (вчителю) питань немає, PP / PPC уже винесено в TQ-142. Остаточний статус `approved` ставить лише людина.
