---
claimed_from: todo
claimed_at: 2026-11-27T12:02:17.529Z
id: write-eng-pool-g10-e10s7
type: write-pool
subject: eng
grade: 10
section: e10s7
status: done
claimed_by: writer-pe10s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Ukraine and English-speaking countries» (Англійська мова, 10 клас, e10s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s7.js`: `SLID.pool("eng", { id: "pe10s7", section: "e10s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s7l1` — How Ukraine is organised: regions and the capital
- `e10s7l2` — Who makes the laws? Parliament, president, government
- `e10s7l3` — How the UK is governed
- `e10s7l4` — Natural resources: so rich that…
- `e10s7l5` — Due to, owing to, therefore: reasons and results
- `e10s7l6` — Public holidays in Ukraine and the UK

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s7` і `node tools/personalization-qa.mjs --pool pe10s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s7, 2026-11-27.** Файл `content/eng/pool-g10-e10s7.js` (id `pe10s7`, `status: "draft"`), 77 вправ a01–a77, boss e10s7l7 без вправ. Кожна пара (урок, sk) з оцінюваних екранів — ≥ 3 вправи з рівнями 1–3 (e10s7l4 `cult` — лише hyp-здогадка, пари немає). `node tools/validate.mjs --pool pe10s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s7 --strict` — лише «ще не verified»; `euphony --pool pe10s7` — без зауважень.

| Урок | Вправ | Рівні 1 / 2 / 3 | Типи | sk |
|---|---|---|---|---|
| e10s7l1 | 15 | 5 / 5 / 5 | gaps 4, word 1, match 1, multi 1, pick 1, choice 3, stress 3, build 1 | vocab 3, cult 3, func 3, phon 3, write 3 |
| e10s7l2 | 12 | 4 / 4 / 4 | choice 2, multi 1, match 1, gaps 6, pick 1, build 1 | cult 3, vocab 3, gram 3, write 3 |
| e10s7l3 | 12 | 4 / 4 / 4 | choice 2, match 1, multi 1, pick 1, gaps 5, word 1, build 1 | cult 6, vocab 3, write 3 |
| e10s7l4 | 12 | 4 / 4 / 4 | match 1, gaps 5, pick 2, choice 2, word 1, build 1 | vocab 3, gram 6, write 3 |
| e10s7l5 | 12 | 3 / 5 / 4 | gaps 4, choice 3, multi 1, sort 1, pick 1, build 2 | gram 8, write 4 |
| e10s7l6 | 14 | 5 / 4 / 5 | match 2, choice 2, multi 1, pick 1, gaps 6, word 1, build 1 | cult 5, gram 3, vocab 3, write 3 |

**Джерело:** `p1407`, `program: true` — П1407 (facts/eng.md «Джерела»), с. 22 — функція «аналізувати причини і наслідки» (func l1), с. 23 — теми «Україна» / «Країни виучуваної мови» (устрій, ресурси, свята) і граматика (so … that, so / therefore, due to, owing to, so, because) — решта вправ.
**Факти** — лише з уроків e10s7 (verified; URL — нотатки write-eng-g10-e10s7): Конституція ст. 133–134, Крим — temporarily occupied / integral part, ГА ООН 68/262; Rada 450, 5 років, призначення прем'єра; UK — King Charles III, Commons 650, Lords, парламенти Edinburgh / Cardiff / Belfast; USA — Congress; ресурси (chornozem, Kryvyi Rih, Donbas, North Sea, 2015, wind farms); КЗпП ст. 73 (TQ-141 — «public holidays», без вихідних), зміни липня 2023; bank holidays 8 / 9 / 10, St Andrew’s Day — Шотландія, St Patrick’s — Північна Ірландія. Нових фактів немає; оцінок політиків і імен посадовців немає.
**Словники (curl у цій сесії):** наголос — CD https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: republic rɪˈpʌb.lɪk, capital ˈkæp.ɪ.təl (OALD capital_1), autonomous ɔːˈtɒn.ə.məs, constitution ˌkɒn.stɪˈtʃuː.ʃən, occupy ˈɒk.jə.paɪ (occupied — та сама основа) — по одному наголосу в CD і OALD; integral (два варіанти в CD) і oblast у stress не взято. Решта форм і сполук (due to / owing to / because of + noun, therefore, so / such … that, declare, honour, elect / pass / appoint / adopt) — як звірив verifier-e10s7 (reports/verify/write-eng-g10-e10s7.md).
**Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e10s7-e10s8/bin/`): `chk.mjs` — `SLID_LANG.check(solution)` для всіх мовних вправ і повний перебір порядків build (a14, a26, a38, a50, a61, a62, a76 — зараховано лише порядки з ключа); `lex.mjs` — слова поза g4–e10s7 до уроку вправи: лише форми (exporter, resource) і `proclaimed` як друга відповідь у ключі a73; `ngram.mjs` (6-грами проти g*-*.js) — після правок збігаються лише шаблонні інструкції й рамки «X writes…».
**Сумнівні місця для верифікатора:** a73 `word` — ключ declared + proclaimed (proclaimed поза уроками, але правильна); a38 build «The MPs are elected but the members of the House of Lords are not» — «Start with The MPs» відсікає зворотний (фактично хибний) порядок; a61 — фронтальне «Due to the bad weather the concert…» без коми в ключі (як e10s8l5 build); a48 — правильний варіант «so big you can’t see the end» (that опущено — урок, екран 5); a77 — so / because за напрямком причина → наслідок.

**verifier-pe10s7, 2026-11-27.** Вердикт: verified, 6 правок (a69 банки в St Andrew’s Day — ❌ факт; a77 «nine because St Andrew’s» — ⚠️ факт; a63 рамка фіналу l5; a62 «Start with Oksana»; a48 hint; статус). Звіт — reports/verify/write-eng-pool-g10-e10s7.md. validate 0/0.
