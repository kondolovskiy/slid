---
claimed_from: todo
claimed_at: 2026-11-27T07:37:47.278Z
id: write-eng-diag-g11
type: write-diag
subject: eng
grade: 11
section: dge11
depends_on: [write-eng-g11-e11s1, write-eng-g11-e11s2, write-eng-g11-e11s3, write-eng-g11-e11s4, write-eng-g11-e11s5, write-eng-g11-e11s6, write-eng-g11-e11s7, write-eng-g11-e11s8, engine-eng-diag-pool, write-eng-diag-g10]
status: done
claimed_by: writer-write-eng-diag-g11
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 11 клас» (dge11)

**Брати лише тоді, коли всі розділи 11 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g11.js.

## Результат
`content/eng/diag-g11.js`: `SLID.diag("eng", { id: "dge11", grade: 11, … })`. **id `dge11` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 10 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 11 кл. (e11s1, e11s2, e11s3, e11s4, e11s5, e11s6, e11s7, e11s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B2 (наприкінці 11 кл., рішення людини 2026-11-19).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge11` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки автора (writer-write-eng-diag-g11, 2026-11-27)
**Файл:** content/eng/diag-g11.js — 10 тем pre × 2 + 8 тем cur × 1 = 28 завдань (10 choice, 18 gaps ≤ 3 пропуски). `validate --diag dge11` — 0 помилок, 0 попереджень; euphony — 0. Python-playwright у контейнері немає — `test-answer-ui.py --suite content --diag dge11` лише в CI.

**Вибір тем.** pre — уроки з requires розділів 11 кл.: pers e10s1l1 (→ e11s1, e11s4); repst e8s3l4 / e9s4l4 (→ e11s1); quant e5s3l4 / e8s2l2 (→ e11s2); qtag e8s1l4 (→ e11s3); ingadj e7s4l4 (→ e11s4); pass e8s3l3 / e9s2l5 (→ e11s5); phrv e10s8l4 (→ e11s6); rel e8s4l4 / e9s5l4 (→ e11s7); fut e10s4l2 / e10s4l5 (→ e11s8); ppc e10s5l4 (→ e11s8). cur — граматичне ядро розділу: e11s1l4 (reporting verbs), e11s2l3 (a few / few, very little), e11s3l4 (особливі tags), e11s4l4 (суфікси й префікси, priceless), e11s5l3 (has been / was being / will be + 3-тя форма), e11s6l5 (at first / eventually / at the end of), e11s7l5 (коментар з which), e11s8l3 (три умовні поруч).
Свідомо не брав: e11s6l4 як cur (майже повтор e10s8l4 = pre phrv), cond 1/2/3 як pre (тоді збігся б із cur e11s8l3), e11s7l4 whom (ближче до pre rel).

**Звідки правило (урок → екран).** pers — e10s1l1 ек. 3; repst — e8s3l4 ек. 3, 6 (досі правда — тут відсічено: «A month later, she stopped»), e9s4l4 ек. 3, 5; quant — e5s3l4 ек. 3, e8s2l2 ек. 3; qtag — e8s1l4 ек. 3, 5; ingadj — e7s4l4 ек. 3; pass — e8s3l3 ек. 3, e9s2l5 ек. 3; phrv — e10s8l4 ек. 3, 7 (apply for — e10s8l3 ек. 6); rel — e8s4l4 ек. 3, e9s5l4 ек. 3; fut — e10s4l2 ек. 3, e10s4l5 ек. 3 (sing – sang – sung — третя форма); ppc — e10s5l4 ек. 3, 8 (know без -ing); cur — екрани info відповідних уроків (e11s1l4 ек. 3, 6, 7; e11s2l3 ек. 3, 5; e11s3l4 ек. 3, 6; e11s4l4 ек. 3, 6, 8; e11s5l3 ек. 3, 4, 7; e11s6l5 ек. 3, 6; e11s7l5 ек. 3, 7; e11s8l3 ек. 3, 5).

**Друга правильна відповідь — перевірено (розв'язано двічі).** repst №2: «is learning» немає серед варіантів і відсічено контекстом; №13: питання «Why are you late?» — вже неправда, тож «I am late» хибне; whether не варіант. qtag №4, №16: echo-tags («You’re…, are you?», «plays…, does he?») навмисно не варіанти. №17: «am I not» не варіант (є лише неграматичне «am not I»). fut №9: will не протиставлено going to в одному реченні — питання поняттєве (ознаки зараз). №26: «won’t finish» не варіант. cur-e11s8 №28: третій тип прив’язано до «last Friday», тож змішаний умовний («would get» зараз) не виникає; «would have» без had — неграматичне. cur-e11s7 №25: після коми «that» — як у e11s7l5 ек. 5 (той самий набір which/what/that), далі what/who means — неграматичні. cur-e11s6 №23: «finally» / «in the end» не варіанти в пропуску 2. Дистрактори cur-e11s4 (dangerive, dangeric, disvisible, imvisible, priceful) — не слова (суфікси й префікси з e11s4l4 ек. 3, 6, 8; «There is no word priceful» — e11s4l4 ек. 3).

**Підказки в body.** cur-e11s1: репліку вчительки подано без ремарки «(to the class)», щоб body не показував ключ «to the class»; phrv: «in the end» прибрано з тексту (він — дистрактор cur-e11s6).

**Копії й n-грами.** Скрипт 5-грам (нижній регістр, ключі gaps розгорнуто) проти content/eng/g4-*…g11-*.js і diag-g4…g10: після правок лишилися лише службові «how many times a week» (e7s5l2), «at the end of the» (e10s2l3). Виправлено збіги: «speaker can see signs now» (e10s4l2), «the museum is closed on Mondays» (e8s3l2), «explained to us that the» (e11s1l4), «how often do you train» (e7s5l2), «about her class trip to» (dge8, e6s8l5), «last Saturday I went to» (e11s7l3), «At first I was nervous about» (e11s8l2), «writes all their songs» (e8s4l4 — та сама рамка «співак гурту, who…»), «ride to the lake with» (dge8). Рамки уроків свідомо обійдено: e10s5l4 ек. 7 (X started at…, Y came at…, ті самі три варіанти), e8s3l3 ек. 6, e5s3l4 ек. 5, e10s8l4 ек. 8 і 11 (lost form → looking for it; turned it down), e11s5l4, екран «mustn’t be or doesn’t have to be?» (food mustn’t be brought), dge10 №7 (are going to / going to / is going to), dge10 №15 (had been working + скільки + all morning).

**Факти.** Реальних закладів, маршрутів і дат немає: міста (Uzhhorod, Chernihiv, Lutsk, Sumy, Dnipro, Rivne, Dublin) — лише як місце дії вигаданих героїв, без тверджень про них. Імена — за КМУ № 55 (Roksolana, Matvii, Yevhen, Liliia, Hlib, Zhenia).

**Словники.** Окремих звірок не знадобилося: усі форми й сполуки — з екранів правил уроків (вище); неправильні дієслова sing – sang – sung, put – put – put, take – took – taken — ті, що в уроках 10–11 кл.
