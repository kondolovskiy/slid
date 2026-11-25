---
claimed_from: todo
claimed_at: 2026-11-25T12:26:17.215Z
id: write-eng-g8-e8s6
type: write-section
subject: eng
grade: 8
section: e8s6
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e8s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Школи в Україні й за кордоном» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: школи в Україні та за кордоном; типи шкіл, приміщення, обладнання; правила поведінки — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): must / might / could / can’t: deductions — It must be…, It can’t be… (B1: Must — deductions; Could, Might — possibility) — нове; permission: May I…? Could I…? be allowed to (B1: May, Could — permission; be allowed to — **наш**, в інвентарі прямо немає) — розширення e5s2l6; mustn’t vs don’t have to (B1: Must — obligation) — розширення e6s6l4, e6s5l5.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Заперечна дедукція — can’t be, не mustn’t be; must / might — залежить від упевненості: контекст має давати однозначну підставу. must / have to у правилах — обидва (plan-eng-g6). canteen — BrE (CD: B1, mainly UK). Типи шкіл: UK (primary, secondary, boarding school) і Україна (гімназія, ліцей — **lyceum у CD лише як історичне в США**: дати пояснення англійською; звірити англомовні назви з джерелом МОН чи en.wikipedia). Не повторювати e5s2l7 «Letters from two schools». `requires`: e6s6l4, e6s5l5, e6s5l4, e5s2l6, e5s2l7. Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s6.js`: `SLID.section("eng", { id: "e8s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e8s6, 2026-11-25.** Файл `content/eng/g8-e8s6.js`, 7 уроків (6 + boss), status draft. `validate --section e8s6`: 0 помилок, 0 попереджень.

**Уроки:** l1 «Primary, secondary or boarding school? Types of schools» (10 екр.); l2 «A science lab, a gym, a canteen: school rooms» (10); l3 «It must be a school in England: guessing» (11); l4 «May I leave early? Are we allowed to…?» (11); l5 «You mustn’t or you don’t have to? School rules» (11); l6 «Schools in Ukraine and the UK: what’s different?» (10; текст-проєкт на 3 екрани + питання про весь текст); l7 boss «A guide for new pupils» (8, Task 1–7 з `pre`). `requires`: e6s6l4, e6s5l5, e6s5l4, e5s2l6, e5s2l7.

**Факти (кожен — 2 джерела):**
- Україна: початкова школа — 4 роки, базова середня — 5, профільна — 3 (Закон «Про повну загальну середню освіту» ст. 4 ч. 2 — https://osvita.ua/legislation/law/2232/; uk.wikipedia «Гімназія» (5–9 кл., 5 років), «Ліцей» (профільна, 10–12) — https://uk.wikipedia.org/wiki/Гімназія, https://uk.wikipedia.org/wiki/Ліцей; en.wikipedia «Education in Ukraine»: «Elementary schooling lasts for 4 years» — https://en.wikipedia.org/wiki/Education_in_Ukraine). Типи закладів: початкова школа / гімназія / ліцей, початкова школа може бути підрозділом гімназії (той самий закон, ст. 35). Повністю 3 роки профільної — з 1.09.2027 (той самий закон, прикінцеві положення), тож у тексті «lyceum → the last years of school», без «Years 10–12».
- Школа з 6 років: Закон «Про освіту» ст. 12 ч. 4 «як правило, з шести років» — https://osvita.ua/legislation/law/2231/; en.wikipedia «Education in Ukraine»: «As a rule, schooling begins at the age of 6».
- Навчальний рік з 1 вересня (День знань): Закон «Про ПЗСО» ст. 10 ч. 3 — https://osvita.ua/legislation/law/2232/; en.wikipedia «Education in Ukraine» (Knowledge Day on 1 September); First Bell — як у e7s6.
- Англія: primary 5–11, secondary з 11, GCSE близько 16, sixth form 16–18 — CD primary school / secondary school / GCSE / sixth form (https://dictionary.cambridge.org/dictionary/english/primary-school, …/secondary-school, …/gcse, …/sixth-form) і en.wikipedia «Education in England» (Key Stages 5–11, 11–16; GCSE end of Year 11; sixth form Years 12–13) — https://en.wikipedia.org/wiki/Education_in_England. boarding school — CD «a school where students live and study» (https://dictionary.cambridge.org/dictionary/english/boarding-school).
- Слова: canteen — CD B1, mainly UK; lyceum — CD «the name for a type of secondary school in several countries»; gymnasium — CD (і «gym», і школа в Німеччині тощо), тому в l1 пояснено значення; staffroom, locker, interactive whiteboard, head teacher / headteacher, allow, pupil, term — CD. Наголос (CD UK): kænˈtiːn, ɪˈkwɪp.mənt, ˈmaɪ.krə.skəʊp, prəˈdʒek.tə, laɪˈsiː.əm, dʒɪmˈneɪ.zi.əm, ˈpjuː.pəl, ˈpraɪ.mər.i; laboratory і library (BrE/AmE різні, склади) у `stress` не брав.
- Граматика: CD Grammar «Must» (deduction; can’t — заперечна дедукція; had to — минуле; don’t have to / needn’t / don’t need to — відсутність обов'язку) — https://dictionary.cambridge.org/grammar/british-grammar/must; «Can, could or may?» (could / may — weak possibility; дозвіл просять can / could / may, дають can / may, **не could**) — https://dictionary.cambridge.org/grammar/british-grammar/permission; «Might» — https://dictionary.cambridge.org/grammar/british-grammar/might.

**Друга правильна відповідь — що відсічено:** might / could / may в одному пропуску не даю (у `word` l3 ключ might, could, may); у gaps на дедукцію — мітки «Andrii is sure / isn’t sure»; must vs have to не протиставляю (обидва для правил); needn’t / don’t need to не даю дистрактором, у `word` l5 ключ have, need; `word` l4 «Are we ___ to…» — allowed, permitted; `word` l1 — secondary, day, high (AmE-лексика, але й назви англ. шкіл); boss Task 4 і l4 final — дистрактори Am / Does (не Must / Do / Should / Could); build l6 «Emma has to…, but Oksana doesn’t» — «Start with Emma.» у body; build l3 і l4 — велика перша плитка + keepCase.

**Опора (D-019), неочевидне:** l1 екр. 7 (вік GCSE) — 14 + 2 з умови й info екр. 3; l3 екр. 11 — must/might у тексті; l6 екр. 10 (`word` 16) — частина 1 тексту (екр. 2); boss T1 — l1 екр. 3, 5.

**Герої (нове):** Freya (14, boarding school в Англії; живе там у term time; вихідні — у місто лише з учителем; телефони заборонені після 9 pm; світло о 10 pm; у 11 — інша школа, червоний джемпер); Denys (кузен Оксани, син Nadiia) — 16, ліцей у Poltava; школа Оксани — гімназія з початковою школою, без форми, без canteen (обід у school hall), шафки в коридорі, англійський клуб; у школі Andrii (Kyiv) — canteen, PE у gym по п'ятницях, частина учнів обідає вдома; у школі Emma — canteen поруч із school hall, нова science lab з десятьма мікроскопами; head teacher школи Freya — жінка. Шкільне фото бабусі Hanna 1972 р. (місто не назване — не суперечить «50 років у Zelena Dolyna»).

**stats:** l6 — gradedShare 0.8, readWordsPerScreen, sentenceWords «нетипово для сім'ї» (z 2–2.4), у межах профілю: урок читання з текстом на 3 екрани, як e4s2l6; решта уроків без прапорців. l2 спершу мав 8 типів (поза профілем) — прибрано pick і build.

**Спірне / вчителю:** TQ-147 (пропозиція, inbox) — як називати класи українських шкіл англійською: «Year 8» (BrE, як тут) чи «Grade 8 / Form 8», і чи давати ліцей як «the last years of school» без чисел до повного переходу на 10–12 (1.09.2027).
