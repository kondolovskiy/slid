---
claimed_from: todo
claimed_at: 2026-11-27T10:10:23.235Z
id: write-eng-pool-g7-e7s7
type: write-pool
subject: eng
grade: 7
section: e7s7
status: review
claimed_by: writer-pe7s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Kyiv and London: history and culture» (Англійська мова, 7 клас, e7s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s7.js`: `SLID.pool("eng", { id: "pe7s7", section: "e7s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s7l1` — Museums and monuments in Kyiv
- `e7s7l2` — It was built by…: who made it?
- `e7s7l3` — Was it destroyed? When was it rebuilt?
- `e7s7l4` — One of the oldest: history and culture in London
- `e7s7l5` — St Paul’s Cathedral: who was it designed by?
- `e7s7l6` — A culture trip: Kyiv or London?

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s7` і `node tools/personalization-qa.mjs --pool pe7s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
_writer-pe7s7 (агент writer-pe7s7-pe8s1), 2026-11-27._ Файл `content/eng/pool-g7-e7s7.js`, пул `pe7s7`, 85 вправ (a01–a85), `status: "draft"`.
`validate --pool pe7s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s7 --strict` — лише «ще не verified».

| Урок | Вправ | sk (рівні) | Типи |
|---|---|---|---|
| e7s7l1 | 15 | read 1-2-3, vocab 1-2-3, gram 1-2-3, write 1-2-3, phon 1-2-3 | choice, multi, match, word, gaps, pick, stress |
| e7s7l2 | 13 | gram 1-2-2-3, cult 1-2-3, vocab 1-2-3, write 1-2-3 | gaps, choice, build, pick, multi, match, word |
| e7s7l3 | 12 | read 1-2-3, gram 1-1-2-2-3-3, cult 1-2-3 | choice, multi, gaps, word, build, pick |
| e7s7l4 | 15 | read 1-2-3, gram 1-1-2-2-2-3, phon 1-2-3, write 1-2-3 | choice, multi, gaps, word, build, pick, stress |
| e7s7l5 | 15 | read 1-2-3, gram 1-1-2-2-3-3, cult 1-2-3, vocab 1-2-3 | choice, multi, word, gaps, build, pick, match |
| e7s7l6 | 15 | read 1-2-3, func 1-2-3, cult 1-2-3, gram 1-2-3, write 1-2-3 | choice, multi, order, match, gaps, word |

- **Джерело:** МП-ІМ (PDF відкрито, pdftotext): с. 32 — «Україна / Країни виучуваної мови — основні пам'ятки історії та культури (Києва / столиці)»; с. 34 — Superlatives ‘one of the’, Clause — the same … as, similar to; с. 35 — Passives: Past simple, Present simple. `src` read/vocab/cult/func — с. 32, one of / similar to — с. 34, пасив — с. 35.
- **Факти:** лише з уроків e7s7 (перелік у шапці файлу). Нових фактів про реальні місця немає; вигадані — шкільний музей, будинки на вулиці Bohdan, церкви в селі бабусі Daryna, міст, бібліотека, картини тітки Iryna (канон: Iryna — artist). a79 «destroyed by fire» — лише перший Globe (1613) і старий St Paul’s (1666).
- **Друга правильна відповідь:** «was found» не взято дистрактором до founded (pitfalls-eng, writer-e11s5); у word з found — «Use the verb found»; a06 — `paintings` / `pictures`; a37 — `contractions: true`; build-пасив a18 — ствердження й питання в ключі; wh-build (a34, a61) — `keepCase: true`, один порядок (як в уроці); a47 — два порядки (обставина на початку). similar to / the same as не протиставлено в одному пропуску — дистрактори лише similar with / the same to.
- **Копії уроків:** 6-грами проти всіх g*-*.js і diag-*.js eng (скрипт у scratchpad). Збіги лишились лише в інструкціях, `steps` і фактових фразах (the National Museum of Taras Shevchenko, the oldest underground railway in the world); речень уроку з тим самим ключем немає (a12, a21, a54, a55, a81, a82, a85 переписано).
- **Наголос (CD):** statue ˈstætʃ.uː, collection kəˈlek.ʃən, painting ˈpeɪn.tɪŋ, monument ˈmɒn.jə.mənt, artist ˈɑː.tɪst, architect ˈɑː.kɪ.tekt, design dɪˈzaɪn, destroy dɪˈstrɔɪ, similar ˈsɪm.ɪ.lər; rebuild ˌriːˈbɪld → rebuilt (у stress не брано: другорядний наголос). https://dictionary.cambridge.org/dictionary/english/{statue,collection,painting,monument,artist,architect,design,destroy,similar,rebuild,found,dome}
- **Верифікатору:** перевірити a23 (match: design ↔ «make a plan for a new bridge», architect ↔ «She plans new houses and schools»), a40/a31 (висновок «будівля, яку бачимо сьогодні»), a76 («найкраща порада» — лише British Museum free), a72 (Kyrylo’s cousin — новий епізод).
