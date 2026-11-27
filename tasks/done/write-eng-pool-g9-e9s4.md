---
claimed_from: todo
claimed_at: 2026-11-27T10:36:27.797Z
id: write-eng-pool-g9-e9s4
type: write-pool
subject: eng
grade: 9
section: e9s4
status: done
claimed_by: writer-pe9s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «The media: the internet, TV and radio» (Англійська мова, 9 клас, e9s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s4.js`: `SLID.pool("eng", { id: "pe9s4", section: "e9s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s4l1` — TV, radio and podcasts: what do you like?
- `e9s4l2` — My favourite programme: a quiz or a chat show?
- `e9s4l3` — Chatting online: safe and polite
- `e9s4l4` — She asked if I liked…: reported questions
- `e9s4l5` — He told us to switch off our phones: reported requests
- `e9s4l6` — I wonder what…: comments and online posts

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s4` і `node tools/personalization-qa.mjs --pool pe9s4` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe9s4, 2026-11-27.** Файл `content/eng/pool-g9-e9s4.js`, `status: "draft"`, 60 вправ (a01–a60). validate --pool pe9s4 — 0/0; personalization-qa — лише «ще не verified».

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e9s4l1 | vocab 5 (1,1,2,2,3), phon 3, write 3 | gaps, match, word, pick, stress |
| e9s4l2 | gram 5, read 3, write 3 | gaps, choice, build, pick, multi |
| e9s4l3 | vocab 3, func 3, write 3 | gaps, word, pick, choice, multi |
| e9s4l4 | gram 6, write 3 | gaps, word, choice, pick, multi, build |
| e9s4l5 | gram 6, write 3 | gaps, match, word, choice, build |
| e9s4l6 | gram 5, read 3, write 3 | choice, gaps, build, pick, multi |

- `src`: МП-ІМ с. 33 — «Засоби масової інформації: Інтернет, телебачення і радіо; Спілкування у мережі; Улюблена радіо-телепередача» (l1, l2 read/write, l3); с. 35 — «Present simple … with reporting and speech act verbs» (l2 gram), «Reported ‘yes/no’ and ‘wh-’ questions», «Reported thought with ‘wonder’», «Reported requests and commands» (l4–l6).
- Пастки: if / whether — ніде в одному пропуску, у word (a33) обидва; TQ-144 — теперішня форма (і will після wondered) ніде не хибна, дистрактори лише неможливі (did / do, інверсія, said us, don’t після told, to not + -ing); told / asked + to не протиставлено; who + be — лише у вигляді, де порядок задано текстом (a58); chat show не протиставлено talk show; presenter / host (a03), reports / reported (a24).
- Перевірки скриптами — як у pe9s3: solution ✅, build (a14, a37, a45 keepCase, a52) — лише ключі; лексика поза уроками — лише форми -ing у дистракторах, spent, recorded, імена (Artem — однокласник Mariia, канон); 6-грами — шаблонні інструкції.
- Наголос (CD, curl у цій сесії): podcast ˈpɒd.kɑːst, presenter prɪˈzen.tə, programme ˈprəʊ.ɡræm, documentary ˌdɒk.jəˈmen.t…, channel ˈtʃæn.əl, episode ˈep.ɪ.səʊd, detective dɪˈtek.tɪv, forecast ˈfɔː.kɑːst, computer kəmˈpjuː.tə; magazine не взято (UK/US різний наголос).
- Передачі — лише вигадані з уроків (Quiz Time, Music Chat, Lviv Today, School 5 Radio, Bright Radio) і безіменні; «Music Box» тощо не вжито.
