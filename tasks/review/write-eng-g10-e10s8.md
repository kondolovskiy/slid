---
claimed_from: todo
claimed_at: 2026-11-26T10:35:00.132Z
id: write-eng-g10-e10s8
type: write-section
subject: eng
grade: 10
section: e10s8
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Education and careers» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Шкільне життя — заклади освіти; освіта в Україні та за кордоном; Робота і професії — сучасні професії — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 23), граматика — с. 23, обсяги — с. 21 (теми поєднано: с. 22 «Шкільне життя + Робота і професії»).
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): phrasal and prepositional verbs: position of indirect object (с. 23) — наше трактування: місце додатка в дієслові з часткою (fill in the form / fill the form in / fill it in) — TQ-140; повт. phrasal verbs (e8s2 l4); повний поділ separable / inseparable — e11s6; prepositions in time phrases: before, for, since, till, until, by (с. 23) — повт. for / since (e7s1 l4); нове: by vs until / till.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: fill in the form / fill the form in — обидва порядки (CD fill-in) — у `build` обидва; займенник — лише між дієсловом і часткою (fill it in); till / until — обидва (till — розмовне). BrE: fill in — головна форма; fill out теж BrE (OALD fill-in: «(especially British English) (also fill something out British and North American English)»; CD fill-in: «(also fill something out)») — fill out не позначати помилкою, CV (US résumé — звірити), university. Назви закладів освіти України англійською (lyceum, college, university) — за джерелом (FACT). Не дублювати e8s6 (типи шкіл, правила) і e9s7 (професії, якості): тут — освіта після школи й сучасні професії; e11s8 l2 (міжнародні програми) — не дублювати. `requires`: e6s6l1–l2; 7–9 — e7s1 l4 (for / since), e8s2 l4 (phrasal verbs), e9s7. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s8.js`: `SLID.section("eng", { id: "e10s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e10s8, 2026-11-26.** `content/eng/g10-e10s8.js` — 7 уроків (6 + фінал), status draft. validate --section e10s8: 0 помилок, 0 попереджень. Кожне `build` перебрано через `SLID_LANG.check` з усіма підмножинами й перестановками плиток (з `extra`): приймаються лише порядки з `answer`.

**Уроки:** l1 Lyceum, college, university (заклади освіти; graduate; реформа 2027) · l2 After school: Ukraine and abroad (читання 372 слова в трьох уривках 124 / 133 / 133 слова з питанням ≤ 190; НМТ, A levels, UCAS, apprenticeship, освіта до 18 в Англії) · l3 phrasal (fill in / fill out, hand in, find out, put off, sign up for, turn down) і prepositional verbs (apply for / apply to, prepare for, look for, depend on) · l4 місце додатка (TQ-140): fill in the form = fill the form in, fill it in; apply for it · l5 for / since, by / until / till / before (дедлайн ↔ стан, що триває) · l6 сучасні професії, навички, «обговорювати перспективи» (П1407 с. 22: thinking of + -ing, good prospects, a growing demand for) · l7 boss (9 завдань).

**requires** у файлі: e6s6l1, e6s6l2, e7s1l4, e8s2l4, e9s7l1, e9s7l5 (id звірено, уроки існують).

**Факти (по два джерела):**
- НМТ — вступне випробування на бакалаврат з 2022, комп'ютерне, у тимчасових екзаменаційних центрах, зокрема за кордоном (Польща та ін.); 2026 — 3 обов'язкові (українська, математика, історія України) + 1 на вибір (зокрема англійська) — https://uk.wikipedia.org/wiki/Національний_мультипредметний_тест ; https://testportal.gov.ua/en/university-entrance-exams-in-2026-(university-admission-campaign-2026)/ (через WebSearch, хост з контейнера недоступний) ; https://luguniv.edu.ua/en/announcements/format-nmt-2026-ostatochno-zatverdzhenyy ; офіційна англ. назва «National Multi-subject Test» — testportal (заголовки сторінок). Формат 2027 може змінитися (законопроєкт 15254-1 — https://sud.ua/en/news/laws/362823-…), тому в тексті — «In 2026, it had four subjects».
- Ліцей: з 1.09.2027 учні, що вступають до 10 кл., — 3 роки профільної (10–12), 12-річна школа; перший випуск 2030 — https://www.kmu.gov.ua/news/yak-zminytsia-starsha-shkola-z-2027-roku-use-pro-vybir-profiliv-i-novi-mozhlyvosti-dlia-uchniv ; https://eurydice.iea.gov.ua/en/the-national-education-system-of-ukraine/14-ongoing-reforms-and-policy-developments/14-2-national-reforms-in-school-education/ ; ЗУ «Про ПЗСО» ст. 4, прикінцеві положення — https://osvita.ua/legislation/law/2232/ (як у verified e8s6). Dmytro (12) → вступить до 10 кл. після 2027.
- Коледж (фахова передвища): вступ після 9 кл. (з одночасним здобуттям профільної середньої) або після 11 кл. — https://eurydice.eacea.ec.europa.eu/eurypedia/ukraine/organisation-professional-pre-higher-education ; https://unn.ua/en/news/college-admission-after-9th-grade-when-results-will-be-announced-and-admission-conditions ; https://uk.wikipedia.org/wiki/Коледж
- Бакалавр в Україні — зазвичай 4 роки — https://en.wikipedia.org/wiki/Education_in_Ukraine («bachelor's degree (4 years)») ; https://uk.wikipedia.org/wiki/Бакалавр (Болонська система 3–4 роки; ЗУ «Про вищу освіту» 180–240 ECTS) — тому «usually».
- England / Wales / NI — бакалавр зазвичай 3 роки, Scotland — 4 (honours) — https://en.wikipedia.org/wiki/Bachelor%27s_degree ; https://en.wikipedia.org/wiki/Education_in_Scotland («degrees are normally four years long») ; https://www.ucas.com/international/international-advisers/supporting-international-students/the-uk-degree-system («3 years (full-time) in most of the UK, except for in Scotland where it takes 4 years»; через WebSearch, ucas.com з контейнера 403).
- Англія: можна піти зі школи в 16, але освіта чи навчання до 18 (sixth form, college, apprenticeship) — https://www.gov.uk/know-when-you-can-leave-school (через WebSearch) ; https://educationhub.blog.gov.uk/2023/04/24/school-leaving-age-can-you-leave-school-at-16-and-what-are-your-options/
- A levels — зазвичай 2 роки, 3 предмети — https://en.wikipedia.org/wiki/A-level ; CD «A level» (public exam in England and Wales, at about 18).
- UCAS — служба вступу до університетів UK — https://en.wikipedia.org/wiki/UCAS ; CD/OALD «UCAS».
- Apprenticeship — працює, отримує зарплату й навчається (≥ 20 % часу) — https://www.gov.uk/become-apprentice (через WebSearch) ; CD apprentice («someone who works for an employer for an agreed period … learning skills»).

**Словники (OALD / CD):** fill in «(especially British English) (also fill something out British and North American English)» — OALD fill-in, тому fill out у ключі (l3 multi, l3 word, l4 word); hand something in — OALD hand-in (BrE also give in — не пастка, у варіантах немає); find out something — OALD find_1 (лише «find out something», тож у вправах на місце додатка find out не брав); turn sb/sth down, put sth off, set up — OALD/CD; get in | get into — «to be admitted to a school, university» (OALD get-in); graduate — OALD graduate_2: def. 1 «to get a degree… from a university», «graduate from high school» — NAmE; колокації «(British English) leave/finish/drop out of school» — звідси правило в l1; stay on — OALD stay-on; sign up — CD B1; apply for / apply to — CD apply; prospects — CD B2; UX = user experience — CD ux. Наголос (OALD/CD UK): university ˌjuːnɪˈvɜːsəti, qualification ˌkwɒlɪfɪˈkeɪʃn, graduate ˈɡrædʒuət, college ˈkɒlɪdʒ, lyceum laɪˈsiːəm, bachelor ˈbætʃələ(r), apprentice(ship) əˈprent-, qualified ˈkwɒlɪfaɪd, technician tekˈnɪʃn, developer dɪˈveləpə(r), analyst ˈænəlɪst, designer dɪˈzaɪnə(r), turbine ˈtɜːbaɪn, **cybersecurity ˈsaɪbəsɪkjʊərəti (наголос на 1-му складі)** — у `stress` не брав.

**Друга правильна відповідь — як закрито:** fill in / fill out — ніколи не стоять поруч як правильний і хибний; у `word` обидва в ключі. by / until — лише дія з дедлайном (send, hand in, answer) ↔ стан, що триває (be open, go on); before і till у ті самі пропуски не давав (pitfall writer-e10s1, writer-e10s4); till = until показано правильним (l5 choice). `build` з іменником — обидва порядки (l4, boss T6); з by Friday — обидва (l5). apply for (річ) / apply to (місце): «apply for a place on the coding course», «apply to two universities». at university без the (gaps не питають артикль). graduate — лише з university.

**Опори (D-019):** l1 gaps і final ← info «Where to study» + «Talking about studying»; l1 Dmytro ← на тому ж екрані; l2 match / gaps / word / final ← три уривки статті (екрани 3–5); l5 choice 2 ← постер intro + цитата на екрані (until вже з e10s1l3 / e10s4); l3 word ← рядок про форми в info; boss — лише з уроків розділу (pre).

**stats:** l2 (урок читання з повним обсягом П1407) — gradedShare, readWordsPerScreen, maxReadWords, maxText «нетипово для сім'ї» (z ≈ 2.4–2.6); validate — без попереджень (readWordsPerScreen 63 у межах [8; 65] після доданого `stress`). Так само, як e10s3l1 (STYLE writer-e10s3): сім'я 10 кл. мала, калібрувати в style-sync. Решта уроків — без прапорців.

**Спірне / верифікатору:** (1) Leah — 19, apprentice після sixth form; висота турбіни 80 м — деталь героїні, не факт про галузь. (2) «In 2026, [the NMT] had four subjects» — формат 2027 може змінитися (законопроєкт про 3 предмети), тож прив'язано до 2026. (3) Ms Lysenko — «English summer camp» для класу Andrii (нова подія). (4) l1 «After Year 9, you finish your school subjects there too» — спрощення «здобувають профільну середню одночасно з фаховою» (Eurydice, MON emergency). (5) Плейтест не запускав (python playwright немає) — лише CI.
