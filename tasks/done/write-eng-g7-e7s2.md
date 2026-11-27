---
claimed_from: todo
claimed_at: 2026-11-25T12:07:14.450Z
id: write-eng-g7-e7s2
type: write-section
subject: eng
grade: 7
section: e7s2
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e7s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Кухня: готуємо й накриваємо на стіл» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: приготування їжі; сервірування столу; кухонні прилади, посуд; способи обробки продуктів — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Passives: infinitive after modals — It should be cooked…, It can be fried (B1: Passives — infinitive) — нове; another / the other (B1: Determiners — articles) — нове; quantity with uncountable nouns: a little, a bit of, a slice / a piece of, How much…? (B1: Quantity) — розширення e5s3l2–l4; imperatives: do for emphasis and invitation (Do have some more!), let me (B1: Imperatives) — нове; повторення: sequencing і imperatives у рецепті (e6s3l3), It’s made with… (e6s3l2), Would you like…? (e5s3l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** lay the table (BrE, OALD lay_1) і set the table (CD: B1, «UK also lay the table») — обидва правильні → обидва в ключі; a little (uncountable) vs a few (countable); another + однина, the other — друге з двох. Посуд і прилади — BrE за CD/OALD (cooker, frying pan — CD B1; AmE stove — не пастка, TQ-125). Не повторювати рецепт і страви e6s3 (там уже «First, then, after that», «made with»): тут способи обробки (boil, fry, bake, roast), прилади, сервірування, запрошення до столу (функція: пропонувати, приймати, відхиляти). `requires`: e6s3l2, e6s3l3, e5s3l2, e5s3l4, e5s3l5, e6s6l5. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s2.js`: `SLID.section("eng", { id: "e7s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e7s2, 2026-11-25.** Файл `content/eng/g7-e7s2.js`, статус draft. `validate --section e7s2`: 0 помилок, 0 попереджень. stats: жодного прапорця «нетипово для сім'ї» (l1 після скорочення intro — readWordsPerScreen 43).

**Уроки (6 + фінал):** e7s2l1 «Pots, pans and plates: kitchen things» (Andrii, Kyiv) · e7s2l2 «Boil, fry or bake? Ways of cooking» (Oksana, Grandma Hanna; paska) · e7s2l3 «A slice of bread, a little salt: how much?» (Emma, Tom, Sarah; Pancake Day) · e7s2l4 «It should be cooked for ten minutes: recipes» (Taras, Zlata; упаковка вареників, Lviv) · e7s2l5 «Laying the table: another plate, the other fork» (Mariia, Kharkiv; нові — бабуся Марії без імені, дядько Ihor) · e7s2l6 «Do have some more! Guests at the table» (Grandma Hanna, Oksana, Halyna) · e7s2l7 boss «Dinner at Taras’s flat», значок e7s2boss. `requires`: e6s3l2, e6s3l3, e5s3l2, e5s3l4, e5s3l5, e6s6l5. Тип `dialog` не вжито (D-056): репліки в body + gaps/choice/match.

**Форми й рівні (CD — https://dictionary.cambridge.org/dictionary/english/<слово>, curl):** cooker A2 (stove — «mainly US (UK usually cooker)»; тому stove — лише в info як US-слово, не пастка); frying pan B1; saucepan B1 (/ˈsɔː.spən/); kettle B1; cupboard A2 (/ˈkʌb.əd/); microwave (/ˈmaɪ.krə.weɪv/); oven B1; fridge A2; sink A2; bake A2; roast A2; fry B1; peel B2; chop B2; slice A2 (ім.), B2 (дієсл.); napkin B2 (/ˈnæp.kɪn/); tablecloth B2; delicious B1 (/dɪˈlɪʃ.əs/); lovely A2; frozen B1; boiling B2; packet B1; freezer B1; help yourself B1 (CD help); full «having eaten so much food that you cannot eat any more» B2 (CD full); a bit of A2 (CD bit); cutlery — C2, тому не вжито. B2-слова (peel, chop, napkin, tablecloth, full) подано з поясненням до першого завдання (Р1 верифікатора плану).
**OALD:** lay_1 «lay the table (British English)», лay → laid, laid — https://www.oxfordlearnersdictionaries.com/definition/english/lay_1; roast → roasted (https://…/roast_1); keep → kept (…/keep_1); fry → fried (…/fry_1). set the table — CD «B1 (UK also lay the table)» https://dictionary.cambridge.org/dictionary/english/set-the-table → у word e7s2l5 ключ ["lay","set"].
**Граматика (Cambridge Grammar):** another — «one more… or an alternative or different», лише з одниною; the other + однина — «the second of two» (https://dictionary.cambridge.org/grammar/british-grammar/other-others-the-other-or-another); a little + uncountable, a few + plural countable (…/little-a-little-few-a-few); a bit of — «informal alternative to some, or a piece of» (…/a-bit); let me — «direct… suggestion or offer» (…/let-let-s); emphatic do з імперативом (…/do — уже звірено в curate-eng-plan-g7-9); passive «modal simple: can/will/might be + -ed» (…/passive-forms).
**Факти:** (1) paska — «traditional Ukrainian Easter bread», печуть удома — https://en.wikipedia.org/wiki/Paska_(bread); https://archive.kyivpost.com/lifestyle/easter-cake-has-truly-risen-2-8345.html (через WebSearch). У уроці: «Paska is a sweet Easter bread. In Ukraine, many families bake paska for Easter.» «On Thursday, Grandma baked paska» — традиція пекти в четвер (сніпети WebSearch; як деталь сюжету, не як факт). (2) Pancake Day — CD «UK informal (also Shrove Tuesday)» https://dictionary.cambridge.org/dictionary/english/pancake-day; OALD «the day before the beginning of Lent, when people traditionally eat pancakes» https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day. У уроці: «In the UK, people traditionally eat pancakes on this day.» Дату не даю.

**Друга правильна відповідь — що зроблено:** у gaps з модальним пасивом немає голої основи (boil, cook, fry — ергативні: «They should boil for five minutes» граматичне), лише `boiled` / `be boil`; slice / piece ніколи не стоять поруч як варіанти; another / the other — контекст «a lot of forks in the cupboard» або «two glasses»; lay / set — обидва в ключі word; у boss build — обидва порядки («For five minutes they should be boiled»); у word l1 — saucepan і pot; word l4 — cut і sliced.

**Спірне для верифікатора:** (а) e7s2l1 pick — хибна група «kitchen cupboard» серед «things for cooking» (cooker — теж «for cooking»; ок?). (б) e7s2l5 sort «a fork» → «On the table» (виделкою й готують — але бін «for cooking» має лише посуд з l1). (в) e7s2l4 «fish fingers» — BrE (US fish sticks), не оцінюється. (г) Сервірування «fork on the left» не вводив як факт про країну — у тексті лише «a plate, a knife and a fork for each person».
