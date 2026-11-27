---
claimed_from: todo
claimed_at: 2026-11-27T10:42:04.539Z
id: write-eng-pool-g9-e9s6
type: write-pool
subject: eng
grade: 9
section: e9s6
status: review
claimed_by: writer-pe9s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Science and inventions» (Англійська мова, 9 клас, e9s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s6.js`: `SLID.pool("eng", { id: "pe9s6", section: "e9s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s6l1` — Famous scientists and inventors
- `e9s6l2` — Who invented it? It was invented by…
- `e9s6l3` — From the telephone to the smartphone
- `e9s6l4` — How is it made? How is it used?
- `e9s6l5` — Smart devices in our homes
- `e9s6l6` — My favourite device: a short description

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s6` і `node tools/personalization-qa.mjs --pool pe9s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe9s6, 2026-11-27. Файл `content/eng/pool-g9-e9s6.js` (pe9s6, draft), 75 вправ. `validate --pool pe9s6` — 0/0; `personalization-qa --pool pe9s6 --strict` — лише «ще не verified».

| Урок | Вправ | sk (к-сть) | Рівні 1/2/3 | Типи |
|---|---|---|---|---|
| l1 | 14 | vocab 5, read 3, phon 3, write 3 | 5/5/4 | gaps, choice, word, pick, multi, stress |
| l2 | 12 | vocab 3, gram 6, write 3 | 4/4/4 | choice, sort, pick, gaps, word, build |
| l3 | 12 | read 3, gram 6, write 3 | 4/4/4 | choice, multi, order, gaps, build, pick |
| l4 | 15 | read 3, gram 6, vocab 3, write 3 | 5/5/5 | choice, gaps, sort, build, pick, match, word |
| l5 | 13 | vocab 4, read 3, phon 3, write 3 | 5/4/4 | gaps, match, word, pick, choice, multi, stress |
| l6 | 9 | read 3, write 3, gram 3 | 3/3/3 | choice, multi, sort, order, gaps, build |

Джерело — МП-ІМ (той самий PDF, SHA-1 43925b25…, колонтитули): с. 31 — «Пише короткий, простий опис знайомого прилада чи продукту» (l6); с. 33 — «Наука і технічний прогрес» (l1, l3 read, l4 read/vocab, l5); с. 34 — «Modality: Can: general truths and tendencies» (l3 gram/write, l5 write); с. 35 — «Passives: Passive forms: Infinitive, Past simple, Present continuous, Present simple» (l2, l4 gram/write, l6 gram).
Наголос — CD (curl у цій сесії): thermometer /θəˈmɒm.ɪ.tər/, telescope /ˈtel.ɪ.skəʊp/, patent /ˈpeɪ.tənt/, device /dɪˈvaɪs/, battery /ˈbæt.ər.i/, charger /ˈtʃɑː.dʒər/, smartphone /ˈsmɑːt.fəʊn/, microscope /ˈmaɪ.krə.skəʊp/, computer /kəmˈpjuː.tər/; scientist, inventor, invention, discovery, experiment, engineer, science, famous — підкреслені в уроках (e9s6l1, e4s1, e5s2, e5s7).
Факти — лише з уроків e9s6 (перелік у шапці файлу). Sikorsky: в уроці — «moved to the USA and designed helicopters there»; твердження «будував гелікоптери в Києві» (із завдання оркестратора) в уроці немає — у пулі не вжито й хибним не зроблено (a14: «In the USA, he designed new helicopters»).
Перевірки скриптами: усі `solution` зараховуються; build a21, a45 (keepCase, один ключ), a33, a75 (без keepCase, усі порядки в ключі) — повний перебір; лексика проти g4–e9s5 і e9s6 до свого уроку — лишились helicopter (однина від helicopters), charge (charged — l3), plugged (plug in — l5), recharge (лише друга відповідь a56); 6-грами — збіги лише з фактами уроку (Bell / Cooper / Curie) не в ключі, рамки a18, a23, a55 замінено.
Рішення: ергативні melt / cool / mix / heat активом хибними не робив; «could» як хибний варіант лише з маркером минулого (Twenty years ago, When Grandad was young) або у формі «could to»; by — лише a20 (умова: «wants to say who»); has been + V3 в уроках немає — не вжито.
Сумнівне для верифікатора: a08 (висновок «перша премія — 1903» з «first woman in 1903» + «two Nobel Prizes»); a20 «These helicopters were designed.» граматичне, хибне лише за метою; a41 — пояснення «чому нагрівають перед формуванням» (опора — melt у l4); a74 «used to take» — в ключі лише цей варіант пропуску (to taking — хибний).
