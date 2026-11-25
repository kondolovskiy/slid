---
claimed_from: todo
claimed_at: 2026-11-25T12:19:49.228Z
id: write-eng-g8-e8s1
type: write-section
subject: eng
grade: 8
section: e8s1
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e8s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Друзі за листуванням» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: друзі по листуванню; кореспонденція — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Present Perfect Continuous: affirmative, questions, How long have you been…? (B1) — нове; Present Perfect Continuous vs Present Perfect — розширення e7s1; question tags with Present Simple: You like music, don’t you? (B1: Present simple — tag questions) — нове; each other (B1: Pronouns — reciprocal) — нове; неформальний лист і email: звертання, закінчення (B1, с. 30 «Листування»).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** I’ve been learning / I’ve learnt (learned) з for / since — часто обидва правильні (pitfalls-content «Англійська» п. 3) → контекст «скільки разів / результат» або обидва в ключі; tag після I am — aren’t I. pen friend — BrE (CD pen pal: «UK pen friend»); email чи e-mail — одне написання на предмет (звірити CD/OALD, записати TERM в inbox). Листування — вигадане, без справжніх адрес, телефонів і соцмереж; безпека: не давати незнайомим адресу (функція «онлайн-взаємодія», с. 30). `requires`: e6s7l4, e5s2l3, e5s8l6, e4s8l6; після появи e7s1 — уроки for / since і just / yet (оркестратор). Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s1.js`: `SLID.section("eng", { id: "e8s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e8s1, 2026-11-25. Файл `content/eng/g8-e8s1.js` — draft, 7 уроків (6 + boss), `validate --section e8s1` — 0 помилок, 0 попереджень. Build не запускав. Без `dialog` (D-056), без звуку, без `uk`, без зображень.

**Уроки:** e8s1l1 «Looking for a pen friend: a profile» (11 екр.); e8s1l2 «I’ve been learning English for five years» (10); e8s1l3 «What have you been doing? News in an email» (10); e8s1l4 «You like music, don’t you? Question tags» (11); e8s1l5 «Dear…, Best wishes: writing an email» (11); e8s1l6 «We write to each other: a letter from England» (10, читання листа в 2 частинах); e8s1l7 «Our pen friend club» (boss, 9, значок e8s1boss «Pen friend»). Назви = рядки plan.js.

**requires:** e6s7l4, e5s2l3, e5s8l6, e4s8l6 (із задачі) + e7s1l2, e7s1l3, e7s1l4, e7s1l5 (just / yet, for / since, reflexive — e7s1 уже існує, draft; оркестратору звірити, якщо e7s1 змінить id).

**Джерела форм і вжитку (curl, 2026-11-25):**
- email «(also e-mail)», A1 — CD https://dictionary.cambridge.org/dictionary/english/email; OALD «email (also e-mail)» https://www.oxfordlearnersdictionaries.com/definition/english/email_1 → у розділі лише **email** (TERM в inbox).
- pen friend — CD pen pal «(UK pen friend)», A2 https://dictionary.cambridge.org/dictionary/english/pen-pal.
- each other — pronoun A2 https://dictionary.cambridge.org/dictionary/english/each-other; one another — у ключі `word` поруч з each other.
- Present Perfect Continuous: форма have / has + been + -ing; recent past з видимим результатом; how long; https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-continuous-i-have-been-working
- PP vs PPC: «Sometimes we can use either form… I’ve lived here for 20 years / I’ve been living here»; know, like, understand без continuous — https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-or-present-perfect-continuous
- Question tags: «If the main clause verb is I am, then the negative tag form is aren’t I»; тип 1 — positive + negative / negative + positive; є й тип «affirmative + affirmative» (You’re a designer, are you?) — тому хибні варіанти тегів лише граматично неможливі (doesn’t you, isn’t I, is he після doesn’t), а не «do you» після позитивного речення — https://dictionary.cambridge.org/grammar/british-grammar/question-tags
- be into (enthusiasm, strong interest) — CD «into» https://dictionary.cambridge.org/dictionary/english/into; hear from B1 https://dictionary.cambridge.org/dictionary/english/hear-from
- Закінчення листів: Best wishes — «a polite way of finishing a letter to a person who you know quite well» https://dictionary.cambridge.org/dictionary/english/best-wishes; Love — «at the end of letters… to friends or family» https://dictionary.cambridge.org/dictionary/english/love; Yours sincerely B1 — formal letter https://dictionary.cambridge.org/dictionary/english/yours-sincerely; Dear A1 https://dictionary.cambridge.org/dictionary/english/dear; take care «(informal) used when saying goodbye» — OALD care_1 https://www.oxfordlearnersdictionaries.com/definition/english/care_1
- Наголос: profile — <u>pro</u>file (CD ˈprəʊ.faɪl) https://dictionary.cambridge.org/dictionary/english/profile. profile — B2 (curate-eng-plan-g7-9 Р1) → введено з поясненням на екрані 2 l1.
- practise (BrE дієслово), learnt — у варіантах лише learnt / been learning (learned не пропонується, тож другої відповіді немає).

**Фактів про країни немає** (лише назви: Poland, Wales, England, Dublin). Правила безпеки онлайн (l1 екр. 6) — загальні поради, без посилань на організації. Україна: Kharkiv, Kyiv, Chernihiv, Zelena Dolyna, pysanky (з e7s1l6).

**Друга правильна відповідь — як відсічено:**
- PP / PPC з live / learn / work + for / since не протиставляю (l3 екр. 5 прямо каже, що обидва правильні); оцінюю лише: кількість → PP (two races, three books, two songs, a hundred emails), know → лише PP, «still reading / still on the sofa» → PPC; хибні варіанти PPC — неправильні форми (been learn, being, watching без been, I’m learning з for). TQ-142 — підхід учителю.
- Теги: див. вище (без «do you» / «don’t you» як хибного варіанта до позитивного / заперечного речення того ж допоміжного).
- each other / themselves / ourselves: контекст однозначний («A to B and B to A», «Mum didn’t help»); пастка `build` — themselves (з We неграматичне).
- `build` I’m looking for a pen friend: пастка «to» (не «at», бо «looking at» граматичне).
- Закінчення листа: Love / Best wishes ніде не протиставлено одне одному; хибні — Yours sincerely (формальне), Goodbye, Dear Sir.

**Опори (D-019):** l1 екр. 3 — профілі на екрані; екр. 8 (be into) → екр. 2; l2 екр. 4 → екр. 3; l3 екр. 6–7 → екр. 5 (know → no -ing); l4 екр. 6 (negative → positive tag) → екр. 5; l5 екр. 6 (Yours sincerely для формального) → екр. 5; l5 екр. 7 (hear from, Write soon) → екр. 3; l6 екр. 5–6 — відповідь у тому ж уривку; boss — лише з уроків (`pre`).

**Герої (нове):** Oksana 14, Dmytro 10, Andrii 14, Tom ходить у swimming club уже рік; Zofia (14, Poland) — подруга Mariia за листуванням, малює комікси (cat detective), вчить англійську 5 років, має сестру-піаністку; Liam (Dublin) пише Andrii три роки, його кузен Sean їде до Kyiv і грає в шахи; Mr Price — учитель Emma; Mr Hughes — лише приклад формального листа; Noah (13, Wales), Leo (15, England) — лише профілі; клас Оксани збирає книжки для шкільної бібліотеки; клас Emma і клас Оксани листуються через школи (без домашніх адрес).

**stats:** e8s1l6 — maxText / maxReadWords / sentenceWords «нетипово для сім'ї» (z ≈ 2,1–2,3): урок читання, лист Emma ≈ 170 слів на 2 екрани (уривок + питання ≤ 95 слів, у межах профілю 7–9 кл. 140; обсяг тексту 8 кл. — style/eng.md 230–300), сім'я 8 кл. поки з одного розділу. Інші уроки — без прапорців.

**Плейтест-питання:** чи зрозуміле правило l3 екр. 5 «How long or how many?» без перекладу; чи не задовгий лист у l6.
