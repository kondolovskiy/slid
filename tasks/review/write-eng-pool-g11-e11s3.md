---
claimed_from: todo
claimed_at: 2026-11-27T12:09:38.481Z
id: write-eng-pool-g11-e11s3
type: write-pool
subject: eng
grade: 11
section: e11s3
status: review
claimed_by: writer-pe11s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Leisure: clubs, film, TV and the internet» (Англійська мова, 11 клас, e11s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s3.js`: `SLID.pool("eng", { id: "pe11s3", section: "e11s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s3l1` — Clubs for every interest
- `e11s3l2` — Cinema, theatre, TV or the internet?
- `e11s3l3` — A well-known actor, a two-hour film: compound adjectives
- `e11s3l4` — It was great, wasn’t it? Question tags
- `e11s3l5` — My favourite film or show: a review
- `e11s3l6` — Really? Did you? Showing interest

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s3` і `node tools/personalization-qa.mjs --pool pe11s3` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s3 (агент writer-pe11s3-pe11s4), 2026-11-27.** Файл `content/eng/pool-g11-e11s3.js`, пул `pe11s3`, 76 вправ (a01–a76), `status: "draft"`.
`node tools/validate.mjs --pool pe11s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s3 --strict` — 6 уроків, 76 вправ, прогалина лише «ще не verified»; `euphony --pool` — без зауважень. `SLID_LANG.check(solution)` зараховує всі ключі; перебір build (a15, a26, a42, a51 — усі перестановки всіх підмножин tiles + extra) — зараховується лише ключ. `test-answer-ui.py` — модуля playwright у контейнері немає, прогін у CI.

| Урок | Вправ | sk → рівні | Типи |
|---|---|---|---|
| e11s3l1 | 17 | vocab 1,1,2,2,3 · read 1,2,3 · phon 1,2,3 · gram 1,2,3 · write 1,2,3 | match, choice, word, gaps, pick, multi, stress, build |
| e11s3l2 | 13 | vocab 1,2,2,3 · read 1,2,3 · func 1,2,3 · write 1,2,3 | match, word, gaps, pick, choice, multi, build |
| e11s3l3 | 14 | vocab 1,2,3 · gram 1,2,2,3,3 · cult 1,2,3 · write 1,2,3 | choice, gaps, word, pick, multi, build |
| e11s3l4 | 9 | gram 1,1,2,2,3,3 · write 1,2,3 | gaps, choice, match, pick, build |
| e11s3l5 | 13 | vocab 1,2,2,3 · read 1,2,3 · write 1,2,3 · gram 1,2,3 | match, gaps, word, pick, choice, multi, order |
| e11s3l6 | 10 | gram 1,2,2,3 · func 1,2,3 · write 1,2,3 | gaps, match, word, pick, choice |

- **src** (PDF П1407 завантажено в цій сесії, `pdftotext -layout`, друкована сторінка = сторінка PDF): `p1407 с. 24` — лексика «Дозвілля» (клуби за інтересами; кіно, театр, телебачення, Інтернет; улюблена вистава / фільм; характеристика фільму / вистави / телепрограми): l1, l2 (крім func), l3 vocab/cult, l5; `p1407 с. 25` — compound adjectives (l3 gram/write), question tags (l4); `p1407 с. 23` — функції «порівнювати» (l2 func) і «демонструвати зацікавленість у предметі розмови» (l6). join / sign up for (l1 gram) — лексика клубів, с. 24.
- **Пастки другої правильної:** question tags — хибні лише неможливі форми (інше допоміжне, займенник); після наказу серед варіантів лише will you (can / could / won’t you ніде немає); am I not не хибне; a50 «I’m not late, am I?» (aren’t I — лише для позитивного речення); a53 «There aren’t any posts, are there?». Reply questions — хибні з іншим допоміжним при тій самій полярності; a70 «has never» → Hasn’t she? (як l6 match «I’ve never seen a play → Haven’t you?»). sign up for: хибний лише «of» (sign up to / with / in у BrE можливі — CD sign up «I've signed up to make the sandwiches»; не вжито); sign on не вжито. well known після be — без дефіса, well-known після be ніде не хибне (хибні well-knowing, good-known). a33 «It’s an ___ film»: артикль an відсікає prize-winning. a56 cast — у body «Write the word for all the actors» (відсікає acting). whereas: a27 — хибні речення без контрасту (причина, той самий зміст) — за правилом уроку «whereas = and in contrast»; because / so ніде не хибні.
- **Факти — лише з уроку l3:** рейтинг Довженко-Центру 2021 (100 best Ukrainian films; Shadows — 1-ше, Earth (1930, silent, Dovzhenko) — 2-ге) — a39, a40; Kryvorivnia «many scenes» — a41. Kotsiubynsky у пулі не згадано (D-057: примітка вже в уроці). Вигадані назви — лише з уроків: The Pyrizhok Café (a58), Lviv Teen Photo Club. Реальним закладам нічого не приписано.
- **Канон героїв:** Kateryna й Artem (Kharkiv, драмгурток), Taras і Myroslava — модератори фотоклубу (40 членів, зустріч у парку щомісяця), Emma і film club (Liliia, Oliver, Ruby — однокласники), Tom і live football, Daryna — theatre club у Kyiv, сестра; Andrii і Sofiia, Maksym (Ottawa), Bohdan (родина дивиться quiz show), Zoriana (computer club), Yehor (малює), Polina (Kharkiv), Ostap, Orest, Zlata, Halyna, Grandma Hanna. Нових імен немає. Дрібні нові деталі (NOTE в inbox): Yehor хоче в шкільний art club і пише в онлайн-спільноті художників (a12, a16); Ostap і Orest — у Lviv Teen Photo Club (a13); Liliia й Oliver — у film club Emma (a03, a14); Zoriana — computer club (a04).
- **Наголос (stress):** лише слова з `<u>` в уроках, один наголос у CD (UK = US): membership ˈmem.bə.ʃɪp, community kəˈmjuː.nə.ti, moderator ˈmɒd.ər.eɪ.tər, newcomer ˈnjuːˌkʌm.ər (e11s3l1); member ˈmem.bər (e9s5), documentary ˌdɒk.jəˈmen.tər.i (e7s4, e9s4).
- **Словники (curl у цій сесії):** https://dictionary.cambridge.org/dictionary/english/<word> — membership, community, moderator, newcomer, member, documentary (вимова); …/sign-up («sign up for: She's signed up for evening classes»); …/well-known, …/long-running, …/award-winning; CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/question-tags, …/compounds (як в уроці).
- **Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s3-e11s4/bin/`): lex.mjs — поза уроками лише форми-дистрактори (subtitle, thought-provoked, is starred) і pausing (від pause); ngram.mjs (6-грами проти g*.js) — лише шаблонні заголовки, означення зі списків і формули рецензії; рамки уроків з тим самим ключем переписано (a06, a07, a17, a29, a30, a44, a64, a65, a74).
- **Для верифікатора:** a27 (whereas без контрасту — хибне за змістом правила), a70 (has never → Hasn’t), a50 (am I), a32 (контекст відсікає world-famous / action-packed), a04 / a16 / a17 (дистрактори-дієслова spoil / welcome).

- [x] validate і personalization-qa — 0 помилок; `status: "draft"`.
- [x] Нотатки, словники; рядок в inbox.
- [x] → `tasks/review/`.
