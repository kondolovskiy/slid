---
claimed_from: todo
claimed_at: 2026-11-25T12:54:58.096Z
id: write-eng-g9-e9s9
type: write-section
subject: eng
grade: 9
section: e9s9
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e9s9
created: 2026-11-19
source: design-eng
---
# Написати розділ «Дискусія: згода й незгода» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: мовленнєві функції 9 кл.: вести дискусію, висловлювати переконання, згоду чи незгоду (на матеріалі тем класу) — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): discourse markers: first, also, in addition, however, finally (B1: Discourse markers in writing — sequencing, adding, contrasting) — нове; although, so, so that (B1: Subordinated — contrast, result, purpose) — нове; both … and, either … or (B1: Conjunctions — coordinating) — нове; personally, honestly, actually (B1: Adverbs — attitude and viewpoint) — нове.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Розділ не має окремої теми програми: це мовленнєві функції 9 кл. — вести дискусію, привертаючи увагу співрозмовника; висловлювати переконання, думки, згоду чи незгоду (с. 33) — на матеріалі тем e9s1–e9s8. Формули — природні BrE зі словника (I see your point, but…); **firstly — B2 у CD → First**; however (despite this) — A2 у CD; although vs but — кома й порядок. Теми дебатів — нейтральні, без політики й релігії. `requires`: e4s3l4, e4s5l6, e6s4l2; після появи e9s1–e9s8 — 1–2 уроки на теми дебатів (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s9.js`: `SLID.section("eng", { id: "e9s9", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s9` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s9, 2026-11-26.** content/eng/g9-e9s9.js — 7 уроків (6 + boss `e9s9boss` «Great debater»), draft. validate --section e9s9: 0 помилок, 0 попереджень. stats: e9s9l6 gradedShare z = 2,4 (урок читання + вправи, 0,8 — у межах профілю 7–9), e9s9l7 maxText z = 2,3 (T8 — уривок дискусії, ≈ 55 слів, у межах ≤ 140); прапорців «поза профілем» немає.

Уроки: l1 opinions + personally / honestly / actually (penfriend club: city or village); l2 agree / partly agree / disagree (Bright Radio, Lviv); l3 joining a discussion + both … and / either … or (eco club, Zelena Dolyna); l4 although / but / however, because / so / so that (comic club Mariia–Zofia); l5 First / Also / In addition / However / Finally (статті Andrii, Kyrylo, Daryna, Zoriana; Kyiv); l6 дебати «Paper books or e-books?» (клас Ms Lysenko, 3 уривки); l7 boss — онлайн-дебати «Team sport or sport alone?».

Джерела форм (CD, curl): up to a point — B2 «partly» https://dictionary.cambridge.org/dictionary/english/up-to-a-point ; couldn’t agree more https://dictionary.cambridge.org/dictionary/english/couldn-t-agree-more ; see someone’s point / take your point https://dictionary.cambridge.org/dictionary/english/point ; personally — B1 «used when you give your opinion» https://dictionary.cambridge.org/dictionary/english/personally ; actually — B1 surprise, «correcting what someone else has said» https://dictionary.cambridge.org/dictionary/english/actually ; so that — «We often leave out that after so in informal situations» https://dictionary.cambridge.org/grammar/british-grammar/so-that ; although — підрядне потребує головного https://dictionary.cambridge.org/grammar/british-grammar/although-or-though ; both … and, either … or — https://dictionary.cambridge.org/grammar/british-grammar/both , https://dictionary.cambridge.org/grammar/british-grammar/either-or ; firstly B2, however A2, although B1 — reports/verify/plan-eng-g7-8-9.md. Наголос personally, honestly, actually (1-й склад), opinion (2-й), interrupt (3-й), addition (2-й), finally (1-й) — CD UK; верифікатору звірити поділ на склади в `stress` l1.

Фактів про країни немає: усе — думки героїв (Daryna «often finds cheaper e-books» — її досвід, не загальне твердження).

Спірне / на перевірку:
- «That’s true, but…» тут — **часткова згода** (кошик «partly agree», l2 sort, l6 sort, boss T3), за PITFALL оркестратора. У e9s3l6 sort ця фраза — у кошику «don’t agree» (polite disagreement), у e9s3l7 T8 — «polite disagreement». Суперечність між розділами — inbox CONFLICT; мій розділ не протиставляє partly agree і disagree для цієї фрази в одному завданні.
- so / so that для мети — не протиставлено (CD: that можна опустити); so лише як результат проти because. therefore не вводив.
- although / but / however у пропусках розведено пунктуацією: Although + кома в середині речення; However — нове речення + кома; but — після коми, проти because / or (не проти although, бо «…, although…» граматичне).
- Also і In addition ніколи не стоять в одному пропуску; order (l5, boss T7) — лише один «adding» маркер, тож порядок єдиний.
- build з both … and (l3, boss T5) — 4 порядки в `answer` (Both X and Y / Both Y and X / X and Y both / Y and X both).
- choice l1 і boss T2: «Personally, there’s a cinema…» хибне, бо personally — для думки, а не факту (CD personally); верифікатору оцінити, чи не надто тонко.
- requires — лише з плану (e4s3l4, e4s5l6, e6s4l2). Сцени спираються на e9s2 (eco club Zelena Dolyna), e9s4 (Bright Radio, comic club Mariia), e9s3 (I think / In my opinion, e9s3l6) — оркестратору додати уроки e9s1–e9s8 за plan-eng-g7-8-9 §6.

Опори D-019: l6 sort (екран 6) спирається на уривки 2–3 і нове info «The debate: who said what?»; boss T8 — уривок на тому ж екрані.

**verifier-e9s9, 2026-11-26.** Verified, 4 правки (reports/verify/write-eng-g9-e9s9.md): l5 gaps дистрактор However → Although (друга правильна); l3 match + «You have finished.»; l2 learned узгоджено з info; requires + e9s2l6, e9s3l6, e9s4l6, e9s8l4. validate 0/0; плейтест — лише CI.
