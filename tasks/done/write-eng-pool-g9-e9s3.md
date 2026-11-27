---
claimed_from: todo
claimed_at: 2026-11-27T10:36:27.757Z
id: write-eng-pool-g9-e9s3
type: write-pool
subject: eng
grade: 9
section: e9s3
status: done
claimed_by: writer-pe9s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Fashion and clothes» (Англійська мова, 9 клас, e9s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s3.js`: `SLID.pool("eng", { id: "pe9s3", section: "e9s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s3l1` — Fashion then and now
- `e9s3l2` — Hoodies, trainers and jeans: clothes words
- `e9s3l3` — A long black woollen coat: the order of adjectives
- `e9s3l4` — So comfortable that…, such a nice jacket that…
- `e9s3l5` — You look as if you’re going to a party
- `e9s3l6` — Buy less, wear longer: my opinion about fashion

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s3` і `node tools/personalization-qa.mjs --pool pe9s3` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe9s3, 2026-11-27.** Файл `content/eng/pool-g9-e9s3.js`, `status: "draft"`, 64 вправи (a01–a64). validate --pool pe9s3 — 0/0; personalization-qa — лише «ще не verified».

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e9s3l1 | vocab 3, read 3, phon 3, write 3 (по 1/2/3) | gaps, word, pick, choice, multi, stress |
| e9s3l2 | vocab 6 (1,1,2,2,3,3), write 3 | choice, gaps, word, pick, sort, build |
| e9s3l3 | vocab 3, gram 6, write 3 | gaps, word, multi, choice, build, pick |
| e9s3l4 | gram 6, write 3 | choice, gaps, word, pick, build |
| e9s3l5 | gram 6, read 3, write 3 | gaps, word, choice, pick, build, multi |
| e9s3l6 | read 3, func 4, write 3 | choice, multi, gaps, word, sort |

- `src`: МП-ІМ (SHA-1 43925b25…, PDF завантажено в цій сесії): с. 33 — «Одяг: Мода, Елементи одягу», функція «висловлювати власне ставлення…» (l1, l2, l6); с. 34 — Combining adjectives, Clause «so … that, as if, as though, like», Modifying enough / too (l3–l5).
- Перевірки скриптами (scratchpad pool-e9s3-e9s4/bin): `SLID_LANG.check(solution)` — усі ✅; build — перебір усіх перестановок і підмножин з extra, приймаються лише ключі (a19 — 2 порядки, a27, a39 keepCase, a48); лексика проти g4–g8, e9s1–e9s2 і уроків e9s3 до `lesson` — поза уроками лише belt (є «belts» в l3), brought (bring); 6-грами проти content/eng — лишились тільки шаблонні інструкції й конструкція «looks as if he’s going to».
- Наголос (CD, curl у цій сесії, https://dictionary.cambridge.org/dictionary/english/<word>): fashion, fashionable ˈfæʃ…; old-fashioned ˌəʊldˈfæʃ.ənd; embroidered ɪmˈbrɔɪ.dəd; umbrella ʌmˈbrel.ə; uniform ˈjuː.nɪ.fɔːm; trousers ˈtraʊ.zəz; jacket ˈdʒæk.ɪt — усі підкреслені `<u>` в уроках; у кожному наборі є інший наголошений склад. old-fashioned записано `old-|+fash|ioned` (validate без зауважень).
- Друга відповідь: wool / woollen (a29 — обидва), if / though (a44), striped / stripy (a15, CD stripy UK), opinion / view (a59, CD «in my view»); like + речення ніде не хибне; as if / as though в одному пропуску не протиставлено; «That’s right, but» прибрано з дистракторів a64.
- Сумнівне для верифікатора: a12 (vyshyvanka «looks really fashionable» — опора на «never out of fashion», l1); a20/a21 hint — навігаційні; a42 Zoriana — бабуся без канону (лише «Grandma»).
