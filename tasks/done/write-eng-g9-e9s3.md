---
claimed_from: todo
claimed_at: 2026-11-25T12:39:12.715Z
id: write-eng-g9-e9s3
type: write-section
subject: eng
grade: 9
section: e9s3
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e9s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Мода» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: мода; елементи одягу — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): order of adjectives: opinion – size – age – colour – material (B1: Combining adjectives) — нове (у 6 кл. — лише мінімум, plan-eng-g6 §4 п. 2); so + adjective + that, such (a) + adjective + noun + that (B1: Clause — so … that) — нове; as if / as though, look like (B1: Clause — as if, like) — нове; повторення: too / enough (e6s2l6, e7s4).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Порядок прикметників — за CD Grammar «Adjectives: order»; у завданні 2–3 прикметники, бо для частини поєднань прийнятні кілька порядків. trainers (BrE; AmE sneakers — не пастка), jumper (BrE), hoodie — звірити в CD/OALD; бренди не називати. Мода — функція «висловлювати власне ставлення до вчинків, думок, позицій інших людей» (с. 33); без оцінок зовнішності героїв. Не повторювати e5s4 (назви одягу): тут мода, опис у деталях, ставлення. `requires`: e5s4l1, e5s4l5, e6s1l2, e6s1l5, e6s2l6. Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s3.js`: `SLID.section("eng", { id: "e9s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e9s3, 2026-11-25. Файл `content/eng/g9-e9s3.js`: 7 уроків (6 + фінал), усі `draft`. validate --section e9s3 — 0 помилок, 0 попереджень.

**Уроки:** l1 Fashion then and now (in / out of fashion, fashionable, old-fashioned, style; вишиванка, embroidered); l2 Hoodies, trainers and jeans: clothes words (hoodie, sweatshirt, tracksuit, trainers, jumper = sweater; striped / checked / spotted / plain; baggy / loose / tight; AmE sneakers, pants — лише довідкою); l3 A long black woollen coat: the order of adjectives (матеріали cotton / wool / woollen / leather / denim; size → colour → material, потім opinion → size → age → colour → material); l4 So comfortable that…, such a nice jacket that… (+ повторення too … to / not … enough); l5 You look as if you’re going to a party (look + adj / look like + noun / as if, as though + речення); l6 Buy less, wear longer: my opinion about fashion (читання у 2 екрани, I think / In my opinion / I agree with / That’s true, but… / Maybe you’re right, but…); l7 boss «The school clothes swap» (8 завдань, pre на l1–l6).

**requires:** e5s4l1, e5s4l5, e6s1l2, e6s1l5, e6s2l6 (із задачі) + e7s4l6 (too / enough to — l4 екран 9–10; урок існує, verified).

**Джерела (форми, граматика, наголос):**
- CD Grammar «Adjectives: order» (opinion → size → physical quality → shape → age → colour → origin → material…) — https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order. Беремо лише opinion / size / age / colour / material, у завданні 2–3 прикметники різних груп; не поєднуємо прикметники однієї групи, візерунок + колір і origin (там прийнятні кілька порядків, CD «adjectives joined by and»).
- CD Grammar «Such or so?» (so + adj, such + noun phrase; «so a…» / «a such…» — помилки) — https://dictionary.cambridge.org/grammar/british-grammar/such-or-so; «So» (so … that, that можна опустити — сказано в info l4) — https://dictionary.cambridge.org/grammar/british-grammar/so; «Such» (such … that) — https://dictionary.cambridge.org/grammar/british-grammar/such
- CD Grammar «As if, as though and like» (as if = as though; informal like + clause теж уживане) — https://dictionary.cambridge.org/grammar/british-grammar/as-if-as-though-and-like; «Look» (look + adj, look like + noun phrase, look as if / as though + clause) — https://dictionary.cambridge.org/grammar/british-grammar/look. Тому like перед реченням ніде не хибний варіант; хибні — «as» / «if» / «though» поодинці, «as if» перед іменником, «like» перед прикметником; в info l5 сказано, що *You look like you’re cold* теж кажуть.
- CD Grammar «Too» (too + adj + to-inf) — https://dictionary.cambridge.org/grammar/british-grammar/too
- CD: hoodie (informal, also hoody; «a sweatshirt … that has a hood» → у ключі l2 #8 і sweatshirt) https://dictionary.cambridge.org/dictionary/english/hoodie; jumper (UK) https://dictionary.cambridge.org/dictionary/english/jumper; sweater («UK also jumper» — sweater теж BrE, не пастка) https://dictionary.cambridge.org/dictionary/english/sweater; woollen («UK (US usually woolen)», /ˈwʊl.ən/) https://dictionary.cambridge.org/dictionary/english/woollen; wool (атрибутивно «wool cardigan» → a wool scarf = a woollen scarf) https://dictionary.cambridge.org/dictionary/english/wool; cotton /ˈkɒt.ən/, denim /ˈden.ɪm/, leather /ˈleð.ər/; tracksuit («UK (US sweats)», /ˈtræk.suːt/) https://dictionary.cambridge.org/dictionary/english/tracksuit; fashion (in fashion, out of fashion; /ˈfæʃ.ən/) https://dictionary.cambridge.org/dictionary/english/fashion; fashionable /ˈfæʃ.ən.ə.bəl/; old-fashioned /ˌəʊldˈfæʃ.ənd/; striped, spotted, checked, plain, baggy; embroider /ɪmˈbrɔɪ.dər/ https://dictionary.cambridge.org/dictionary/english/embroider; lost property (UK) https://dictionary.cambridge.org/dictionary/english/lost-property; sweatshirt /ˈswet.ʃɜːt/, hoodie /ˈhʊd.i/.
- OALD: trainer «(both British English) (North American English sneaker…)» https://www.oxfordlearnersdictionaries.com/definition/english/trainer; tight_1 (clothes: fitting closely) https://www.oxfordlearnersdictionaries.com/definition/english/tight_1; loose_1 (clothes: not fitting closely, opposite tight) https://www.oxfordlearnersdictionaries.com/definition/english/loose_1; second-hand_2 («not new; owned by somebody else before», /ˌsekənd ˈhænd/ → second-<u>hand</u>) https://www.oxfordlearnersdictionaries.com/definition/english/second-hand_2. OALD статті hoodie немає — звірено лише в CD.

**Факти:** вишиванка й «Vyshyvanka Day is in May» — як у verified e5s4l6 (екран 3); додатково: en.wikipedia Vyshyvanka Day («celebrated the third Thursday of May»), uk.wikipedia «Всесвітній день вишиванки» («щороку в третій четвер травня»). Третій четвер у тексті не подано — лише «in May». Інших фактів про країни немає; історії героїв (фото бабусі 1983, вишиванка 1981, фото мами Emma 1995) — вигадка, узгоджена з e8s6 (шкільне фото Hanna 1972).

**Друга правильна відповідь (перевірено):** усі `build` перебрано всіма перестановками всіх підмножин плиток з `extra` через `SLID_LANG.check(s, st, "en")` (скрипт — scratchpad write-eng-g9-e9s3/bin/run.mjs): l2 #9 — обидва порядки (jumper / jeans) у `answer`; l4 #11 і l6 #9 — `keepCase: true` (відсікає питальні «Was it…?» / «Don’t I…?»); пастки `extra` (an, so, looks, am) не утворюють граматичного речення. `word`: l2 #8 — hoodie / hoody / sweatshirt / hooded top; l5 #9 і boss T6 — if / though; l3 #11 — body питає саме слово віку («Which word tells us its age?»), бо «an expensive…» граматичне. so … that: хибні варіанти — such / such a / too перед прикметником без іменника (too … that — неграматичне). l1 gaps: in fashion / out of fashion / old-fashioned ніколи не обидва доречні в одному пропуску (контекст «lots of people wear» / «nobody wears» / «isn’t modern»). l6 gaps: «I buy clothes {when|what|who}» — замість because / but / so, бо «so» давало б граматичне речення.

**Сумнівне / для верифікатора:**
- l3: «a big grey woollen scarf», «a nice new leather wallet», «a lovely old woollen scarf» — за CD order однозначні; але old у значенні «давній, знайомий» (an old friend) інколи стоїть ближче до іменника — у завданнях old лише про вік речі.
- l4 match (#4) перевіряє зміст результату, а не форму so / such — so / such перевіряють #6–#8 і #10–#12.
- l6: sort «That’s true, but…» / «Maybe you’re right, but…» → «don’t agree» — так подано в info #4 («you don’t agree, but you’re polite»); верифікатору — чи не двозначно.
- l5 фінал: «You look smart!» — оцінка одягу (не тіла), мама до Тома; оцінок зовнішності героїв немає.
- stats: e9s3l1 longWordShare 0.169 (z = 2.8 «нетипово для сім'ї») — у межах профілю 7–9 (≤ 0,18): fashionable, old-fashioned, embroidered, vyshyvanka — тема уроку; евристика складів рахує їх «довгими».
- Звуку немає; поле `uk` не додано (9 кл.).
