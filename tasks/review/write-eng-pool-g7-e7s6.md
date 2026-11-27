---
claimed_from: todo
claimed_at: 2026-11-27T10:10:23.193Z
id: write-eng-pool-g7-e7s6
type: write-pool
subject: eng
grade: 7
section: e7s6
status: review
claimed_by: writer-pe7s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «School life after lessons» (Англійська мова, 7 клас, e7s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s6.js`: `SLID.pool("eng", { id: "pe7s6", section: "e7s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s6l1` — After-school clubs
- `e7s6l2` — First bell, last bell: school traditions
- `e7s6l3` — If we win, we’ll play in the final: the First Conditional
- `e7s6l4` — Unless it rains… As soon as we finish…
- `e7s6l5` — Shall we make a poster? Planning a school event
- `e7s6l6` — Our school festival: an invitation

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s6` і `node tools/personalization-qa.mjs --pool pe7s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe7s6, 2026-11-27. Файл `content/eng/pool-g7-e7s6.js`, пул `pe7s6`, 65 вправ a01–a65, `status: "draft"`. `validate --pool pe7s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s6` — лише «ще не verified». Build не запускав (паралельний запуск); браузерні прогони — CI/оркестратор.

**Покриття (урок → кількість / пари sk з рівнями / типи); boss e7s6l7 без вправ.** Матриця урок × sk — з `sk` оцінюваних не-hyp екранів (звірено вручну).
| урок | вправ | sk: рівні | типи |
|---|---|---|---|
| e7s6l1 | 11 | vocab 1,1,2,3; read 1,2,3; gram 1,2,2,3 | match 1, gaps 4, word 1, choice 3, multi 1, pick 1 |
| e7s6l2 | 10 | cult 1,2,2,3; read 1,2,3; phon 1,2,3 | choice 2, gaps 3, match 1, multi 1, stress 3 |
| e7s6l3 | 11 | gram 1,1,2,2,2,3,3; write 1,2,2,3 | gaps 4, match 1, word 2, build 2, pick 1, choice 1 |
| e7s6l4 | 12 | gram 1,1,2,2,3,3; write 1,2,3; read 1,2,3 | gaps 4, choice 3, word 1, pick 1, build 2, multi 1 |
| e7s6l5 | 9 | func 1,2,2,3,3; gram 1,2,2,3 | match 1, choice 2, gaps 3, order 1, build 1, pick 1 |
| e7s6l6 | 12 | read 1,2,3; func 1,2,3; phon 1,2,3; write 1,2,3 | choice 2, multi 2, gaps 4, stress 3, build 1 |

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, pdftotext у цій сесії): с. 32 — 7 кл., «Шкільне життя: позакласні заходи, шкільні свята і традиції», функції «пропонувати, приймати, відхиляти пропозицію», «обмінюватись думками» — l1 vocab/read, l2, l4 read, l6 read/func/phon; с. 34 — «Conditional: ‘if’ + Present simple to introduce a possible future condition; … ‘unless’ + Present…», «Present continuous: future arrangements», «Present simple with ‘as soon as’» — l1 gram, l3, l4 gram/write, l6 write; с. 35 — «Shall: plans and intentions, seeking advice» — l5.

**Словники (curl 2026-11-27, CD UK):** наголос tradition /trəˈdɪʃ.ən/, September /sepˈtem.bər/, teacher /ˈtiː.tʃər/, invitation /ˌɪn.vɪˈteɪ.ʃən/, festival /ˈfes.tɪ.vəl/, poster /ˈpəʊ.stər/, competition /ˌkɒm.pəˈtɪʃ.ən/, member /ˈmem.bər/ — https://dictionary.cambridge.org/dictionary/english/<слово>; поділ на склади — як в уроці (e7s6l2, e7s6l6). OALD не відкривав.

**Друга правильна відповідь — як відсічено:**
- First Conditional: пропуск — у if-частині (will + V хибне); у головному реченні дистрактори — лише минулий час / -ing / don’t be (не Present Simple, не might / can); `word` — лише if-частина (a24 rains, a30 has). a26 pick «If it [will rain]» — will після if з безособовим it (без прочитання «willingness»).
- unless: дистрактор «doesn’t rain / isn’t» лише як подвійне заперечення; `word` a36 з інструкцією «one word instead of if … not» (until / before / if не зараховуються).
- as soon as / when: хибні — will + V і минулий час.
- Shall: лише gaps / build / pick з пасткою Let’s / to / -ing (Can / Should у пропусках немає); build a51 — `keepCase` + «Shall» (інакше «I shall make some sandwiches»).
- Present Simple / Continuous (l1): дистрактори — неправильні форми (meet / meeting, are going / going); вибір PS ↔ PC лише в choice a10 і pick a11 (помилка — форма «play», будь-яке виправлення — plays / is playing).
- Відповіді на пропозиції: «No, thanks» ↔ «Sorry, I can’t» в одному пропуску не протиставлено (обидва природні на suggestion).
- build — перебір `SLID_LANG.check`: a25, a40, a41, a51 (325), a31, a64 (1 956) — приймається лише ключ; фронтальні if / as soon as / unless — кома в плитці («miss the bus,», «we finish,», «it rains,»), тож порядок «головне + підрядне» не складається (pitfall verifier-e7s6 Р-1).
- Кожна gaps/pick/stress/word/build/match: `solution` → `check` = true; choice/multi/order — вручну.
- Копії уроків: 6-грами проти всіх content/eng/*.js — збіги лише з формулами інструкцій, «write the verb rain in the correct form» (e6s8), «I think the concert will be» (e8s3), «is for the school library» (e4s8). Рамку уроку «Mariia wants to ___ the art club» і «I’ll send you photos as soon as I get home» не повторено.
- Лексика — скриптом проти g4–g6, e7s1–e7s5 і уроків e7s6 до `lesson` (прибрано holding, smiling, catch, rang / carried — a18 у Present Continuous).

**Факти:** лише з e7s6l2 — First Bell 1 September (початок навчального року; квіти вчителям), Last Bell наприкінці травня (school leavers Year 11, дівчинка з Year 1 дзвонить, випускник несе її на плечах, потім іспити); sports day (перегони, egg-and-spoon race), school fair (stalls, cakes, old toys).

**Герої (нові дрібниці, NOTE в inbox):** Liza — drama club щовівторка (a03; у boss e7s6 — урок фортепіано); Kateryna (Kharkiv) — drama club, Mariia з Polina й Kateryna в art club (a09); Emma — photography club по середах (як e7s6l1), вечірка drama club (a07), концерт у London і потяг (a38); Tom — «very slow» в egg-and-spoon race (a17), застуда перед перегонами з плавання (a44); Daryna — dance lesson (a56); Kyrylo — тітка (a56); Zoriana — мама підвозить (a56); Grandma Hanna — торт для ярмарку фестивалю (a65); Grandad Mykola — яблука (a37), день народження (a49).

**Спірне для верифікатора:**
1. a26 — «If it will rain» як помилка: CD Grammar допускає will в if-частині для волі / наполягання; з it (погода) такого прочитання немає.
2. a28 — правило коми (if-частина друга — без коми) з e7s6l3 info; варіант з комою оцінено хибним разом з «if she will miss».
3. a18 — Last Bell у теперішньому часі («Today is the Last Bell…»), щоб не вводити rang / carried.
