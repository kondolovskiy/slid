---
claimed_from: todo
claimed_at: 2026-11-26T10:37:10.553Z
id: write-eng-g11-e11s2
type: write-section
subject: eng
grade: 11
section: e11s2
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e11s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Food and recipes» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Харчування — їжа, напої й закуски; корисна та шкідлива їжа; пріоритети в харчуванні; рецепти страв — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21.
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): overview of all quantifiers with countable/uncountable nouns (с. 25) — повт. some / any / much / many / a lot of (e5s3l2–l4), a few / both / all / no (e6s2l3), a slice of, a little (e7s2 l3), too much / not enough (e8s2 l2); нове для B2: plenty of, hardly any, a great deal of, a large number of; few / a few, little / a little — різниця значень; each / every, either / neither; most / none / all of + the / us / them.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: a lot of / lots of / plenty of — часто рівнозначні; few ≠ a few — контекст має показувати значення; none of + множина — дієслово в однині чи множині (CD Grammar «None») — ключ обидва; each / every — часто обидва. Рецепт — imperatives і послідовність уже є (e6s3l3, e7s2 l4): тут — точні кількості в метричній системі (grams, a tablespoon, a pinch of — звірити в CD). Харчування — без медичних порад; «пріоритети» — власний вибір з аргументом. Не дублювати e10s3 (страви, смаки, звички). Україна — родинний рецепт. Функція (с. 23): «порівнювати (звичаї, традиції, стилі життя)» — l4. `requires`: e5s3l2–l4, e6s2l3, e6s3l3; 7–9 — e7s2 l3, e8s2 l2. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s2.js`: `SLID.section("eng", { id: "e11s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->

**writer-e11s2, 2026-11-26.** `content/eng/g11-e11s2.js` — draft, 7 уроків (6 + фінал e11s2l7, значок e11s2boss «Cookbook editor»). `node tools/validate.mjs --section e11s2` — 0 помилок, 0 попереджень. Build не запускав.

**Уроки:** l1 Meals, snacks and drinks (brunch, packed lunch, snack, elevenses, takeaway, ready meal, tea як вечеря в BrE; still / sparkling, smoothie, herbal tea, filling / light, starving; читання «A day of food» 3 уривки ≈ 310 слів: Emma, Oksana, Andrii) · l2 Plenty of, hardly any (повт. much / many / a lot of / lots of; нове plenty of, hardly any, a great deal of, a large number of) · l3 A few or few? A little or little? (+ very few / only a few / very little) · l4 Healthy and unhealthy food: priorities (nutritious, junk food, seasonal, affordable, convenient, priority; top priority, comes first, matters more to me than; порівняння whereas / while — функція П1407 с. 23; both / either / neither + of) · l5 Most of us, none of them (most / all / none + of the / my / us / them; most people без of; none of + однина чи множина; each / each of / every, every one of, almost every) · l6 A family recipe (g, ml, tbsp, tsp, a pinch / clove / handful / bunch of; knead, crush, brush, cover; **повний текст для читання 11 кл. — 402 слова в трьох уривках** 145 / 138 / 124 слова з питанням ≤ 150 — pampushky бабусі Hanna) · l7 boss (9 завдань, кожне з `pre`).

**requires** (у файлі; усі уроки існують): e5s3l2, e5s3l3, e5s3l4, e6s2l3, e6s3l3, e7s2l3, e7s2l4, e8s2l2, e9s9l3 (either … or). Задача казала «7–9 кл. ще немає» — уже є, тож додав сам.

**Без дубля e10s3 / e7s2 / e6s3:** немає borscht як теми (лише гарнір до pampushky), syrnyky, varenyky, deruny, banosh, haggis, chicken Kyiv, Sunday roast, scones, pancakes; лексика харчування e10s3l4 (protein, fibre…) не повторена — у l4 інші слова (nutritious, seasonal, affordable, convenient). Без медичних порад і дієт: «priorities» — власний вибір, опитування `poll` без правильної відповіді (e11s2l4 екран 2).

**Друга правильна відповідь (перевірено):** a lot of / lots of / plenty of разом — лише в `multi` (l2 екр. 7: три правильні), не в одному пропуску gaps; many в стверджувальному реченні («we’ve got many eggs» граматичне) хибним варіантом не дано (l2 екр. 4: lots of | much). none of + дієслово — обидва в ключі (l5 екр. 6: eats / eat обидва правильні). each / every в одному пропуску не протиставлені; у word l5 екр. 9 ключ none / not one; l2 екр. 10 — hardly / scarcely / barely; l4 екр. 11 — neither (none для двох — CD Grammar Neither «Not: None of us…»). build l4 екр. 10 — три порядки (Taste matters more to me than price / Taste matters to me more than price / To me taste matters more than price); build l5 екр. 8 — пастка every (every of us — хибне, CD «Each or every?»). few ↔ a few, little ↔ a little — значення задає контекст («almost always empty», «so I added», «Do you want one?»). Розв'язки всіх мовних вправ прогнано через `SLID_LANG.check` (scratchpad chk.mjs) — true.

**Чесне завдання — опори:** l1 екр. 9–12 ← екр. 3–4 (info); l2 екр. 6–11 ← екр. 5; l3 екр. 4 ← екр. 3, екр. 6–9 ← екр. 3, 5; l4 екр. 8–12 ← екр. 6–7 (whereas, both / either / neither), екр. 4–5 ← екр. 3; l5 екр. 4 ← 3, екр. 6–9 ← 5; l6 екр. 4 ← 3, екр. 10–12 ← уривки екр. 7–8; hyp: l1 екр. 2, l2 екр. 2, l3 екр. 2, l5 екр. 2, l6 екр. 2.

**Джерела форм і значень (curl, CD / CD Grammar):**
- few / a few, little / a little; little, few «used in formal contexts» — https://dictionary.cambridge.org/grammar/british-grammar/little-a-little-few-a-few
- plenty of + countable і uncountable, «Not: plenty time» — https://dictionary.cambridge.org/grammar/british-grammar/plenty
- a great deal of (+ uncountable), a large number of (+ plural) — formal — https://dictionary.cambridge.org/grammar/british-grammar/lots-a-lot-plenty
- hardly any = very little / very few, «Not: hardly no one» — https://dictionary.cambridge.org/grammar/british-grammar/hardly
- none of + дієслово однина (formal) / множина (informal); для двох — neither — https://dictionary.cambridge.org/grammar/british-grammar/none
- neither of + однина (formal) / множина (informal) — https://dictionary.cambridge.org/grammar/british-grammar/neither
- each / each of + singular verb — https://dictionary.cambridge.org/grammar/british-grammar/each ; each vs every, almost every (not almost each), every one of (not every of) — https://dictionary.cambridge.org/grammar/british-grammar/each-or-every
- most of + the / my; «Not: Most of rivers» — https://dictionary.cambridge.org/grammar/british-grammar/most
- словник CD: pinch, tablespoon («15 millilitres»), teaspoon (≈ 4.93 ml → «about 5 ml»), clove, handful, bunch, gram, millilitre «UK (US milliliter)», knead, crush, dough, yeast, plain flour, baking tray, packed lunch, brunch, takeaway, ready meal, elevenses, tea («a meal that is eaten in the early evening and is usually cooked»), supper, sparkling, still («A still drink is one that is not fizzy»), smoothie, filling (adj.), fizzy, snack, nutritious, priority, seasonal, convenient, affordable, homemade «(also home-made)», junk food, flapjack (UK: sweet chewy cake from oats; US — pancake), crumpet, kefir — https://dictionary.cambridge.org/dictionary/english/<слово>
- наголос (`stress`, `<u>`) — UK-вимова CD: takeaway ˈteɪk.ə.weɪ, elevenses ɪˈlev.ən.zɪz, smoothie ˈsmuː.ði, sparkling ˈspɑː.klɪŋ, nutritious njuːˈtrɪʃ.əs, affordable əˈfɔː.də.bəl, convenient kənˈviː.ni.ənt, priority praɪˈɒr.ə.ti, tablespoon ˈteɪ.bəl.spuːn, millilitre ˈmɪl.ɪˌliː.tər.

**Факти (по два джерела):**
- Pampushky — невеликі булочки з дріжджового тіста; солоні — з часниковою заправою, до борщу; бувають і солодкі (з варенням) — https://en.wikipedia.org/wiki/Pampushka ; https://www.nigella.com/recipes/guests/olia-hercules-ukrainian-garlic-bread-pampushky (WebSearch). Рецепт у l6 — родинний, вигаданий (типові пропорції: 500 g борошна, 7 g дріжджів, 300 ml рідини, 200 °C).
- «Ukraine is one of the world’s biggest producers of sunflower oil» (l6 екр. 8, словами бабусі) — USDA FAS: Ukraine — третина світового виробництва (2022) https://www.fas.usda.gov/sites/default/files/2022-04/Ukraine-Factsheet-April2022.pdf ; https://www.fas.usda.gov/sites/default/files/2022-03/Ukraine-Ag-Production-Trade.pdf ; ukragroconsult (2025/26: Росія вперше обігнала Україну з експорту, Україна — друга) https://ukragroconsult.com/en/news/ukraine-loses-global-lead-in-sunflower-oil-exports-for-the-first-time-in-20-seasons/ . Тому — «one of the biggest producers», не «the biggest exporter».

**Герої (11 кл.: на рік старші, ніж у 10 кл.):** Oksana, Emma, Andrii, Mariia, Taras — 17, Tom — 15, Dmytro — 13. Узгоджено: у школі Oksana немає canteen (style-eng-g8), у школі Andrii canteen є; у Emma є тато, вечерю (tea) готує мама; Grandma Hanna — власний будинок у Zelena Dolyna; Taras — тато, Zlata, квартира в Lviv. Нового імені немає (Mariia’s head teacher — без імені).

**stats:** прапорці «нетипово для сім'ї» лише в уроках читання — e11s2l1 (readWordsPerScreen z=2) і e11s2l6 (readWordsPerScreen z=2,5, maxReadWords) — повний текст П1407 для 11 кл.; усі значення в межах профілю eng 10-11 (validate без попереджень). Як STYLE writer-e10s3: калібрувати після сім'ї 11 кл.

**Сумнівне / для верифікатора:** (1) elevenses — UK informal, лише в info, не оцінюється. (2) «Few / little on their own sound quite formal» (l3 екр. 5) — за CD Grammar «They are used in formal contexts». (3) word l6 екр. 11 — ключ також AmE «milliliters» (рушій може й сам нормалізувати; TQ-125). (4) l1 «Fizzy drinks are too sweet for me» поруч із sparkling water — у BrE fizzy drinks = солодкі газовані напої (CD fizzy «having a lot of bubbles»; OALD fizzy drink) — на розсуд верифікатора. (5) Ms Kravets — редакторка онлайн-кулінарної книжки клубу (як журнал у e10s3).

**verifier-e11s2, 2026-11-26.** Verified (7 уроків). Правки: l4 екр. 10 build + 3 порядки («Taste matters more than price to me» та ін.); l1 екр. 3 elevenses — «(UK, informal, a bit old-fashioned)». validate 0/0. Звіт: reports/verify/write-eng-g11-e11s2.md.
