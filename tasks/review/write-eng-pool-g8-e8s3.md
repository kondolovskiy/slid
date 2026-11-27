---
claimed_from: todo
claimed_at: 2026-11-27T10:18:15.749Z
id: write-eng-pool-g8-e8s3
type: write-pool
subject: eng
grade: 8
section: e8s3
status: review
claimed_by: writer-pe8s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «The media: the internet and the press» (Англійська мова, 8 клас, e8s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s3.js`: `SLID.pool("eng", { id: "pe8s3", section: "e8s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s3l1` — Newspapers, magazines and news websites
- `e8s3l2` — Is it true? Reading the news online
- `e8s3l3` — A new park is being built: news reports
- `e8s3l4` — She said she was tired: reported statements
- `e8s3l5` — He told us that…: reporting the news
- `e8s3l6` — Our school newspaper: a short article

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --pool pe8s3` і `node tools/personalization-qa.mjs --pool pe8s3` — 0 помилок; `status: "draft"`.
- [x] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s3, 2026-11-27.** Файл `content/eng/pool-g8-e8s3.js` (pe8s3, 63 вправи a01–a63, `status: "draft"`). `validate --pool pe8s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s3` — лише «ще не verified». test-answer-ui не запускав (Python-playwright у контейнері немає) — `build`: перебір усіх перестановок і підмножин tiles + extra через `SLID_LANG.check` (скрипт verifier-pe7s3-4/bin/chk.mjs, копія в scratchpad pool-e8s3-e8s4/bin): a26, a49, a50, a51 — зараховується лише ключ.

| Урок | Вправ | Рівні 1/2/3 | sk (≥ 3 на пару) | Типи |
|---|---|---|---|---|
| e8s3l1 | 10 | 4 / 3 / 3 | vocab 4, phon 3, write 3 | gaps 4, match, word, pick, stress 3 |
| e8s3l2 | 11 | 4 / 4 / 3 | read 5, vocab 3, write 3 | choice 2, sort, multi 2, gaps 4, word, match |
| e8s3l3 | 11 | 3 / 5 / 3 | gram 8, write 3 | gaps 5, choice 2, word, pick 2, build |
| e8s3l4 | 10 | 3 / 3 / 4 | gram 7, write 3 | match, gaps 5, word 2, pick, multi |
| e8s3l5 | 12 | 4 / 5 / 3 | gram 6, write 3, read 3 | gaps 3, word, choice 3, pick, build 3, multi |
| e8s3l6 | 9 | 3 / 3 / 3 | read 3, write 3, gram 3 | choice 2, multi, order 2, gaps 2, word, pick |

- `src`: l1 і l6 write — mpim с. 32 (ЗМІ); l2, l5 read, l6 read — с. 28 (B1-читання: факти, відповідність статті темі); l3–l6 gram, l3–l5 write — с. 35 (Passives — Present continuous, Reported statements). Сторінки — з шапки уроку й facts/eng-3 №195.
- **TQ-144:** форма без backshift ніде не хибний варіант, якщо сказане може бути досі правдою. Дистрактори в l4/l5 — лише граматично хибні (were з he/she, can’t to, he don’t, couldn’t to, am з she); у `word` a35 і a38 контекст показує, що сказане вже неправда (торт готовий; Sofiia тепер любить рибу); a37 multi — «досі правда», обидві форми (lived / lives) у ключі. У a42 «doesn’t» прибрано з варіантів (досі правда можлива).
- **Пасив:** у кожному пропуску з was built / is built / is being built є маркер часу (in 1975, at the moment, every day, in 1960, now); is / are — за числом.
- **Лексика (D-019):** перебір слів пулу проти уроків розділу до свого уроку і g4–g8-e8s2 (скрипт lex.mjs): слова з пізніших уроків прибрано (students у l2–l5, librarian і Mr Pavliuk у l5, canteen у l6, probably, dinosaur, clue). Лишились: shark (у e8s1 — sharks), journalists’ (присвійна форма).
- **6-грами** проти g4–g11 (ngram.mjs): збіги лише в рамках інструкцій («Fill in the gaps», «Put the words in order»); речення з ключем, близькі до уроку (a13, a19–a21, a32, a48, a52–a57, a59, a61), переписано.
- Наголос — CD (UK і US однакові): https://dictionary.cambridge.org/dictionary/english/newspaper, https://dictionary.cambridge.org/dictionary/english/magazine (ˌmæɡ.əˈziːn), https://dictionary.cambridge.org/dictionary/english/website, https://dictionary.cambridge.org/dictionary/english/headline, https://dictionary.cambridge.org/dictionary/english/reporter, https://dictionary.cambridge.org/dictionary/english/article, https://dictionary.cambridge.org/dictionary/english/journalist, https://dictionary.cambridge.org/dictionary/english/opinion. Склади — як в уроці (`ma|ga|+zine`, `re|+por|ter`). У кожному наборі stress є re<u>por</u>ter або maga<u>zine</u> (не всі на 1-му складі).
- Герої — за glossary/eng-heroes.md: Taras (School 5 News, фотограф), Myroslava, Orest, Yaryna (Lviv), Ostap (друг, не однокласник — лише в a15, a44 без школи), Ms Kvitka (head teacher); Andrii, Bohdan (теніс, не football), Daryna, Zoriana (IT), Kyrylo (history, Kyiv), Ms Lysenko, Sofiia; Oksana, Dmytro, Halyna; Mariia, Polina; Emma, Tom, Ruby, Oliver. Нові дрібниці: шкільна газета в школі Emma (a42), шкільний сад School 5 (a59), IT room у школі Andrii (a55–a57).
- Опора неочевидна: a60 (order, 6 речень) — порядок «start → people’s words» за екраном l6 «A good news article»; «there» і «She also said» фіксують решту.
