---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.468Z
id: write-eng-diag-g5
type: write-diag
subject: eng
grade: 5
section: dge5
depends_on: [write-eng-g5-e5s1, write-eng-g5-e5s2, write-eng-g5-e5s3, write-eng-g5-e5s4, write-eng-g5-e5s5, write-eng-g5-e5s6, write-eng-g5-e5s7, write-eng-g5-e5s8, write-eng-g5-e5s9, write-eng-g5-e5s10, engine-eng-diag-pool, write-eng-diag-g4]
status: done
claimed_by: writer-dge5
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 5 клас» (dge5)

**Брати лише тоді, коли всі розділи 5 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g5.js.

## Результат
`content/eng/diag-g5.js`: `SLID.diag("eng", { id: "dge5", grade: 5, … })`. **id `dge5` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 4 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 5 кл. (e5s1, e5s2, e5s3, e5s4, e5s5, e5s6, e5s7, e5s8, e5s9, e5s10).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge5` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-dge5, 2026-11-20)
**Файл:** content/eng/diag-g5.js, `SLID.diag("eng", { id: "dge5" })`, status draft. 10 pre × 2 + 10 cur × 1 = 30 завдань (10 choice, 20 gaps по 3 пропуски). `node tools/validate.mjs --diag dge5` — 0 помилок, 0 попереджень. Браузерних прогонів не було (Python-playwright у контейнері немає).

**pre — уроки 4 кл. з `requires` розділів 5 кл. (reports/verify/plan-eng-g5.md §6), без baseline:**

| Тема | lessons | for |
|---|---|---|
| have (have/has got, короткі відповіді) | e4s1l2 | e5s1 |
| freq (always/never: значення й місце, після be) | e4s3l2 | e5s2 |
| sport (play/go/do + -s) | e4s3l1 | e5s6 |
| much (how many/how much) | e4s4l3 | e5s3 |
| someany (some/any, Is there/Are there + short answers) | e4s2l5 | e5s3, e5s7 |
| cont (Present Continuous; every day vs now) | e4s6l2 (базове), e4s8l5 (складніше) — поле `lesson` | e5s4 |
| comp (-er than; bigger, hotter, windier) | e4s6l5 | e5s5, e5s10 |
| when (on/at/in: день, година, місяць) | e4s8l2 | e5s8, e5s2 |
| past (went, swam, was/were) | e4s7l5 | e5s8, e5s9 |
| will (I think I’ll + verb, won’t, I’ll help) | e4s7l6 | e5s9, e5s5 |

**cur (один урок на розділ, без boss; пропуски покривають learned уроку):** e5s1l3 (his/their/its vs it’s), e5s2l3 (Does…? doesn’t + без -s), e5s3l4 (a lot of / not much / not many), e5s4l2 (trousers are, two pairs of, a pair of), e5s5l4 (more beautiful, worse, better), e5s6l2 (love/don’t like за шкалою ●○○ + -ing з подвоєнням), e5s7l3 (between/opposite/next to за мапою img/eng/e5s7/town-map.svg — credits у e5s7, CC0), e5s8l2 (on + дата, the fifth of, in + місяць), e5s9l3 (am/is/aren’t going to), e5s10l5 (the biggest, one of the most beautiful, the best).
Свідомо не взято: «the highest mountain {in|of} Ukraine» — «of» хоч і хибне за уроком, у вжитку трапляється (спірно для тесту без фідбеку), тому третій пропуск — the best / the goodest.

**Розв'язано двічі:** (1) механічно — scratchpad sol.mjs перебирає всі комбінації варіантів кожного gaps через `SLID_LANG.check`: рівно одна зараховується в усіх 20; (2) вручну — кожен дистрактор перевірено на другу нормативну відповідь (PITFALL inbox): some/any не в питанні (writer-pe4s2); was/were і swam — з Yesterday (verifier-e5s8, verifier-e5s9); is/are без переліків (verifier-e5s7); will — лише won’t/willn’t і I’ll/I’m, be going to не варіант (дистрактори не є другою правильною формою); superlative з іменником (writer-pe4s7); «one of the more beautiful» не дистрактор (verifier-e5s10); варіантів, що починаються з апострофа, немає (verifier-e5s4); this/that не брав (writer-e5s1); dinner не брав (verifier-e5s3). build/match/word не використано — ризик другого порядку (питальна інверсія, PITFALL writer-e4s8/e5s6/verifier-e5s3) не потрібен у тесті рівня.
Спірні дистрактори на розсуд верифікатора: «two pair of trainers» (розмовне, за уроком e5s4l2 хибне), «There aren’t some chairs» (за правилом e4s2l5), «He sometimes does cycling» (за правилом e4s3l1 — go + -ing), «Now I go to school by bus» (за e4s8l5 — now → Present Continuous).

**Герої — за канонами inbox:** Bohdan — теніс по суботах, автобусом до школи (клас Andrii); Sofiia — gymnastics on Saturdays; Ostap — football on Mondays, cycling з Taras; Oksana — karate, кузен Denys, без сестри; Petro — червоний телефон, кішка Murka (e5s1l3); Taras — день народження 5 May (e5s8l2), сестра Zlata, кузина Marta; Emma — день народження в травні, плаває; Mariia — до школи з Polina. Нове дрібне: Taras з Zlata наступного тижня їдуть потягом до Kyiv; Taras листівка з Carpathians (купався в річці).

## Нотатки верифікатора (verifier-dge5, 2026-11-20)
**Вердикт: verified** (reports/verify/dge5.md). Блокувальних знахідок немає. Усі 30 завдань я розв'язав сам: 10 choice збіглися з ключем; 20 gaps перебрано через `SLID_LANG.check` у node, у кожному зараховано рівно одну комбінацію, і вона збігається з моїм розв'язком.
- Спірні дистрактори автора — усі хибні за BrE і за уроком: «two pair of» (OALD pair_1: informal NAmE, «not considered correct in written English»), «There aren’t some» (CD Grammar some/any), «does cycling» (OALD cycling: «to go cycling»; do — лише з «a lot of»), «Now I go» (контекст «today it’s snowing», CD Grammar present continuous).
- Taras 5 May — канон (e5s8l2 build + pool-g5-e5s8). «My birthday is on 9 October» у e5s8l2 — анонімний gaps без мовця.
- Правки: `will.for` e5s5 прибрано (e4s7l6 немає в requires e5s5); status/meta/коментар. Зміст завдань не змінено, `rev` не потрібен.
- `node tools/validate.mjs --diag dge5` — 0 помилок, 0 попереджень.
