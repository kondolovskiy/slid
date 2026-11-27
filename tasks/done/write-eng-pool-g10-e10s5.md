---
claimed_from: todo
claimed_at: 2026-11-27T12:02:17.466Z
id: write-eng-pool-g10-e10s5
type: write-pool
subject: eng
grade: 10
section: e10s5
status: done
claimed_by: writer-pe10s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Painting and Ukrainian artists» (Англійська мова, 10 клас, e10s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s5.js`: `SLID.pool("eng", { id: "pe10s5", section: "e10s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s5l1` — Portrait, landscape, still life: genres of painting
- `e10s5l2` — Famous artists and their paintings
- `e10s5l3` — Ukrainian artists and their works
- `e10s5l4` — She had been painting for years: the Past Perfect Continuous
- `e10s5l5` — A visit to a museum, an exhibition or a gallery
- `e10s5l6` — My favourite painting: describing a picture

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s5` і `node tools/personalization-qa.mjs --pool pe10s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe10s5, 2026-11-27. Файл `content/eng/pool-g10-e10s5.js` — **69 вправ**, `status: "draft"`. `node tools/validate.mjs --pool pe10s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s5 --strict` — лише «ще не verified»; euphony — без зауважень. test-answer-ui не запускався (Python-модуля playwright у контейнері немає — CI).

| Урок | Вправ | Рівні | sk (кількість) | Типи |
|---|---|---|---|---|
| e10s5l1 | 9 | 1, 2, 3 | vocab 3, phon 3, read 3 | match, gaps, word, stress, choice, multi |
| e10s5l2 | 15 | 1, 2, 3 | cult 3, read 3, gram 3, vocab 3, write 3 | choice, match, multi, gaps, word, pick, build |
| e10s5l3 | 15 | 1, 2, 3 | read 3, vocab 3, cult 3, gram 3, write 3 | choice, multi, gaps, match, word, pick, build |
| e10s5l4 | 9 | 1, 2, 3 | gram 6, write 3 | gaps, build, multi, pick, word |
| e10s5l5 | 9 | 1, 2, 3 | vocab 3, read 3, write 3 | match, gaps, choice, multi, order, build |
| e10s5l6 | 12 | 1, 2, 3 | vocab 3, gram 3, write 3, func 3 | gaps, choice, pick, word, build, sort |

- **Джерело:** `p1407` (title/url — facts/eng.md «Джерела»), `program: true`; `src` — «p1407 с. 22» (тема, лексика, функції), «p1407 с. 23» (граматика: PPC, пасив). Назва програми в `title` різниться між пулами 10 кл. різних авторів (pe10s2, pe10s4) — пропозиція уніфікувати в inbox.
- **Past Perfect Continuous:** з for + дієсловом дії обидві форми — у ключі (a45 multi: had been waiting + had waited); ніде had + V3 не стоїть хибним поруч із for / since + дієсловом дії; кількість (four apples, twenty paintings) — лише simple (a43, a48); стан (know, like) — лише simple (a44, a48); was + -ing з for … up to a moment — хибний, як в уроці l4 (a42).
- **Факти** — лише з уроків l2, l3 (Turner, Constable, 1821, 1839, голосування 2005, £20 з 2020, National Gallery — belong to / are kept; Bilokur — Bohdanivka, Myrhorod, Poltava 1940, квіти; Prymachenko — D-057, Bolotnia, blue bull; Murashko — Kyiv 1875, Munich, Paris, Carousel, Girl in a Red Hat у NAMU). Музеї й виставки героїв — без назв, вигаданих правил реальним закладам немає.
- **stress:** лише слова, підкреслені в l1 (artist, painter, seascape, paintbrush, watercolours, landscape, exhibition); у кожному наборі exhibition — наголос на 3-му складі. abstract і self-portrait не брав (abstract — прикм. / дієсл. різний наголос; дефіс у складах).
- **build:** допоміжні дієслова злиті з присудком у плитках (had been, are kept, was a famous, is painting, was worth it), щоб не складалось питання; другі порядки (обставина на початку) — у ключі.
- **Перевірка лексики й копій:** власний скрипт (scratchpad) — слова поза уроками g4–e10s4 і e10s5 до уроку вправи та 6-грами проти g4–g11: слова з пізніших уроків розділу прибрано (Sam, Megan у l2/l4 → Oliver, Ruby; sunflowers у l4; moon, smiling); 6-грами — лише рамки інструкцій, правила в `steps` і факти; рамок уроків з тим самим ключем немає.
- **Словники (форми, наголос):** CD https://dictionary.cambridge.org/dictionary/english/watercolour (ˈwɔː.təˌkʌl.ər), /paintbrush (ˈpeɪnt.brʌʃ), /seascape (ˈsiː.skeɪp), /artist (ˈɑː.tɪst), /painter (ˈpeɪn.tər), /still-life («plural still lifes»); portrait, landscape, canvas, exhibition — reports/verify/write-eng-g10-e10s5.md (CD); PP / PPC — CD Grammar «Past perfect simple or past perfect continuous?» (там само).
- Нові дрібниці героїв (NOTE в inbox): Mr Hill відомий смішними історіями про художників; дідусь Emma знає гіда музею в їхньому місті зі школи; Polina й Artem — у художньому клубі Mariia; Oksana цієї зими малює перший пейзаж.
