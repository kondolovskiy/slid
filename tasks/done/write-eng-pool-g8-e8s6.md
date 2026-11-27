---
claimed_from: todo
claimed_at: 2026-11-27T10:18:15.851Z
id: write-eng-pool-g8-e8s6
type: write-pool
subject: eng
grade: 8
section: e8s6
status: done
claimed_by: writer-pe8s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Schools in Ukraine and abroad» (Англійська мова, 8 клас, e8s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s6.js`: `SLID.pool("eng", { id: "pe8s6", section: "e8s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s6l1` — Primary, secondary or boarding school? Types of schools
- `e8s6l2` — A science lab, a gym, a canteen: school rooms
- `e8s6l3` — It must be a school in England: guessing
- `e8s6l4` — May I leave early? Are we allowed to…?
- `e8s6l5` — You mustn’t or you don’t have to? School rules
- `e8s6l6` — Schools in Ukraine and England: what’s different?

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s6` і `node tools/personalization-qa.mjs --pool pe8s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s6, 2026-11-27.** Файл `content/eng/pool-g8-e8s6.js` (pe8s6, 67 вправ a01–a67, `status: "draft"`). `validate --pool pe8s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s6 --strict` — лише «ще не verified»; euphony — чисто. Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (перевірено скриптом).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e8s6l1 | vocab 5 (1,1,2,2,3), cult 4 (1,2,2,3), read 3 (1,2,3), phon 3 (1,2,3), write 3 (1,2,3) | match, gaps, word, pick, choice, sort, multi, stress |
| e8s6l2 | vocab 6 (1,1,2,2,3,3), phon 3 (1,2,3), write 3 (1,2,3) | gaps, match, word, sort, pick, stress |
| e8s6l3 | gram 6 (1,1,2,2,3,3), read 3 (1,2,3) | gaps, choice, word, pick, build, multi |
| e8s6l4 | func 5 (1,1,2,2,3), gram 6 (1,1,2,2,3,3) | choice, match, pick, gaps, word, build |
| e8s6l5 | gram 7 (1,1,2,2,2,3,3), write 3 (1,2,3) | gaps, choice, sort, pick, word |
| e8s6l6 | read 3 (1,2,3), write 4 (1,2,3,3) | choice, multi, gaps, build |

**Джерело:** МП-ІМ, 8 кл.: «Шкільне життя — школи в Україні та за кордоном; типи шкіл, приміщення…; правила поведінки» — **с. 33** (звірено `pdftotext` за колонтитулом; на с. 32 «Шкільне життя» — рядок 7 кл. «Позакласні заходи»; шапка уроку e8s6 каже «PDF с. 32» — NOTE в inbox); функція «порівнювати» — с. 32; граматика — с. 34 (Could — permission, possibility; May — permission; Might; Must — deductions, obligation). `src`: l1, l2, l6 — с. 33; l3–l5 — с. 34.

**Рішення щодо пасток:**
- might / could / may — ніде не в одному пропуску (у gaps і choice лише одне з них поруч із must / can’t); must / have to — не протиставлені (a34 word: must і has to в ключі).
- Дозвіл: «Yes, you could» — хибне за уроком (a42, a43, a44); дистрактори до Can / Could / May — лише неграматичні (Am / Does I…), не «Must I…?» і не «Do I…?».
- don’t have to: a56 word — don’t have to / don’t need to / needn’t (+ contractions); sort a53 — «Uniform on Sports Day: not necessary», не «No uniform» (двозначно як заборона).
- state / comprehensive / grammar school — у пулі немає `word` з одним «secondary» (пропуск з варіантами — лише gaps із primary як дистрактором). Класи — «Year N».
- Факти — лише з e8s6l1. Нові дрібниці героїв: Denys — profile maths and IT; Dmytro — Year 4 у школі Оксани (10 років, Years 1–9 — канон); Tom у primary носив green jumper; Freya — колись brown shoes, тепер tie; Emma: школу відкрито 2005 (a39); Mr Ellis — новий учитель у школі Freya.
- Фото без зображення: a34, a37, a38 переписано без «photo» (validate попереджав); a36, a39 — «photo» як в уроці l3 (validate не попереджає).
- 6-грами: прибрано речення уроків з тим самим ключем; лишились факти з інфо-екранів у новому формулюванні й рамки інструкцій.

**Словники (наголос, правопис):** CD — https://dictionary.cambridge.org/dictionary/english/lyceum (laɪˈsiː.əm), …/gymnasium (dʒɪmˈneɪ.zi.əm), …/pupil, …/primary, …/canteen (kænˈtiːn), …/equipment, …/microscope, …/projector, …/librarian (laɪˈbreə.ri.ən), …/staffroom (UK staffroom; у ключі й «staff room»).
