---
claimed_from: todo
claimed_at: 2026-11-27T11:55:45.605Z
id: write-eng-pool-g10-e10s2
type: write-pool
subject: eng
grade: 10
section: e10s2
status: done
claimed_by: writer-pe10s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Sport, health and leisure» (Англійська мова, 10 клас, e10s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s2.js`: `SLID.pool("eng", { id: "pe10s2", section: "e10s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s2l1` — Why do people love sport?
- `e10s2l2` — Risk losing, refuse to give up: verb patterns
- `e10s2l3` — Big sports events in Ukraine and the world
- `e10s2l4` — Stop, remember, try: a change in meaning
- `e10s2l5` — Avoid injuries, keep moving: sport and health
- `e10s2l6` — Is sport good for everyone? Giving your opinion

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s2` і `node tools/personalization-qa.mjs --pool pe10s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s2, 2026-11-27.** Файл `content/eng/pool-g10-e10s2.js` (pe10s2, 70 вправ a01–a70, `status: "draft"`). `validate --pool pe10s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s2 --strict` — лише «ще не verified». Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт; e10s2l3 `cult` — з екрана-здогадки, тренується фактами уроку). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build a70 приймає лише ключ. `test-answer-ui.py --suite content` не запускав (CI).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e10s2l1 | vocab 3, phon 3, read 3, write 3 (1,2,3) | match, gaps, word, stress, choice, multi |
| e10s2l2 | gram 5 (1,2,2,3,3), write 3 (1,2,3) | gaps, sort, word, pick, choice |
| e10s2l3 | cult 3, read 3, vocab 3, phon 3, write 3 (1,2,3) | choice, multi, match, gaps, word, stress |
| e10s2l4 | gram 5 (1,2,2,3,3), write 3 (1,2,3) | gaps, choice, pick |
| e10s2l5 | vocab 3, read 3, gram 3, phon 3, func 3, write 3 (1,2,3) | match, gaps, word, choice, multi, pick, stress |
| e10s2l6 | func 3, read 3, write 3 (1,2,3) | choice, gaps, pick, multi, word, build |

**Джерело:** П1407, PDF https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (SHA-1 38df1f7f…; `pdftotext` с. 22–23 у цій сесії): с. 22 — «Спорт і дозвілля» (роль спорту, спортивні події, здоров’я та спорт), функція «аргументувати свою точку зору» → l1, l3, l5 (крім gram), l6; с. 23 — «verbs taking gerund», «verb + ’-ing’ vs. + ’to’ infinitive» → l2, l4, l5 gram.

**Рішення щодо пасток:**
- like / love / hate / prefer / start / begin / continue ніде не протиставлені: sort a14 — лише -ing-only і to-only дієслова; a17 — «started running» і «started to run» обидва правильні, хибне лише «kept to run».
- can’t stand — без варіанта to (a20: losing / lose). try — лише вибором значення (a38). regret + to — лише формальна новина (a40). stop / remember / forget — контекст однозначний (a36, a37, a39, a41–a43).
- host / take place / be held: took place і were held ніде не стоять поруч як «правильний / хибний» (a28, a33–a35); a29 — «Use the verb hold» → were held.
- `word`: a03 — spectators, fans; a69 — instance, example.
- Факти — лише з уроку (Athens 1896, Stoke Mandeville 1948 / Rome 1960, Beijing 2022 і «only the host country won more», Euro 2012 — Ukraine і Poland, фінал у Kyiv, Spain — Italy; WHO — «good for young people’s mental health»; NHS — «can help to prevent injuries», a49 перевіряє саме «can help»). Kharlan у пулі не згадано. Порад медичного змісту немає: правила — слова Mr Hnatiuk з уроку (warm up, cool down, don’t train when injured).
- 6-грами: прибрано копії з тим самим ключем («helps me keep fit», «also helps me deal with stress», «I enjoy running in the park» (g8), «Matches took place in eight stadiums», «In my view, every school should»). Лишились формулювання фактів WHO / NHS і Paralympics (так треба: факт — як в уроці) і рамки.
- Лексика (скрипт проти g4–g9, e10s1 і e10s2 до `lesson`): прибрано shakes, hitting, court, beat, doer, exact. Stress — лише слова з `<u>` в info свого уроку (l1: discipline, spectator, athlete, competition; l3: Olympic, Paralympic, ceremony, stadium; l5: injury, recover, exercise, energy) — по 4 слова на урок, тож набори рівнів частково повторюються.

**Нові дрібні деталі героїв (NOTE в inbox):** Amelia почала плавати через хвилювання перед іспитами; літній футбольний матч Zelena Dolyna проти сусіднього села (грає Grandad Mykola); Andrii грає в шахи онлайн з людьми з десяти країн, турнір у його школі; Kyrylo — у волейбольній команді тренує стрибки; Bohdan — травма руки (урок: «can’t play tennis for three weeks»), хоче грати на міському турнірі; Ostap — бабуся / мама не може купити скельне взуття, допоміг дідусь; Tom у вісім боявся води; Mariia і Polina малюють прапори для шкільної олімпіади; Taras повісив фото паралімпійської збірної в клубі; Emma — травма руки від плавання, два тижні відпочинку; Oksana — grandma Hanna «has never done sport»; Halyna — подруга Oksana.

**Словники (форма, наголос):** CD https://dictionary.cambridge.org/dictionary/english/<word>: discipline «ˈdɪs.ə.plɪn», spectator «spekˈteɪ.tər», athlete «ˈæθ.liːt», competition «ˌkɒm.pəˈtɪʃ.ən», Olympic «əˈlɪm.pɪk», Paralympic «ˌpær.əˈlɪm.pɪk», ceremony «ˈser.ɪ.mə.ni» (US ˈser.ə.moʊ.ni — наголос той самий), stadium «ˈsteɪ.di.əm», injury «ˈɪn.dʒər.i», recover «rɪˈkʌv.ər», exercise «ˈek.sə.saɪz», energy «ˈen.ə.dʒi»; afford — «can afford to». Verb patterns — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing (як в уроці).

**verifier-pe10s2, 2026-11-27.** Незалежна перевірка: усі вправи розв'язано до ключа, розбіжностей немає; 11 правок (перелік — reports/verify/write-eng-pool-g10-e10s2.md §7). `status: "verified"`, validate --pool pe10s2 — 0/0, personalization-qa --strict — зауважень немає. Вердикт: verified.
