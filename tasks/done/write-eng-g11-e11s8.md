---
claimed_from: todo
claimed_at: 2026-11-26T10:58:33.399Z
id: write-eng-g11-e11s8
type: write-section
subject: eng
grade: 11
section: e11s8
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e11s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Exams, careers and plans» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Шкільне життя — стосунки з товаришами; випускні іспити; перспектива на майбутнє навчання; міжнародні освітні програми; Робота і професії — профорієнтація; престижні професії в Україні та за кордоном; плани на майбутнє — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21 (теми поєднано: с. 22).
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): first, second and third conditional (с. 25) — повт. e10s6, e7s6, e8s8, e9s8 l5 (third); нове для B2: три умовні поруч, вибір за реальністю й часом; overview of all tense forms (active) (с. 25) — огляд часів (пасив — e11s5); I hope… / I’d love to… / I wish + Past Simple — (наш) для функції «висловлювати побажання» (с. 23), граматикою в програмі не названо.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: will в if-частині — не ключ (окреме значення «willingness» не вводити); mixed conditionals і wish + would — не вводити (немає в інвентарі). Випускні іспити: НМТ — офіційна англійська назва й правила — з джерела з датою (testportal.gov.ua / УЦОЯО, FACT), загально. Міжнародні програми — без реклами (програму Cambridge ліцею не рекламувати); e10s8 l2 (освіта за кордоном) не дублювати — тут іспити й програми обміну. Профорієнтація — розширення e9s7 (не дублювати якості й поради): тут престижні професії й плани. Функції (с. 23): «висловлювати побажання», «підводити підсумки обговорення», «завершувати розмову» — l6, `dialog`. Обсяги 11 кл.: читання 400–450 слів, письмо 180–200 (с. 21). `requires`: e10s6 (id — після написання); 7–9 — e9s7, e9s8 l5. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s8.js`: `SLID.section("eng", { id: "e11s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e11s8, 2026-11-26.** Файл `content/eng/g11-e11s8.js`, status draft, 7 уроків (6 + boss `e11s8l7`, значок `e11s8boss`). `validate --section e11s8` — 0 помилок, 0 попереджень; euphony — без знахідок. Build не запускав.

**Уроки:** l1 Final exams (лексика підготовки + огляд теперішніх і минулих часів, факт про НМТ); l2 International programmes and exchanges (урок читання: 3 уривки 159/133/134 слова, разом 426 з підписами авторів (≈ 414 без них) — П1407 с. 21: 400–450); l3 conditionals (три типи поруч, вибір за часом і реальністю, would/could/might, could have / might have); l4 Choosing a career (careers adviser, strengths, suit, make up your mind, open day, work experience + огляд майбутніх форм у двох info); l5 Prestigious jobs (prestigious, respected, well paid / well-paid, in demand, highly skilled, competitive, responsibility; порівняння; факт про тривалість медичної освіти); l6 Goodbye, school! (I hope / I’d love to / I wish + Past Simple, could; to sum up / all in all / so we all agree; Anyway, I’d better go / Take care); l7 boss (6 завдань на всі уроки з `pre` + оповідання «The train to Kharkiv», 3 уривки ≈ 320 слів + головна думка).

**requires:** e7s6l3, e8s1l2, e8s5l4, e8s8l5, e9s2l4, e9s7l4, e9s8l5, e10s2l6, e10s4l2, e10s4l5, e10s5l4, e10s6l4, e10s6l5, e10s8l2, e10s8l6 — усі id існують (звірено з файлами; e10s8 — ще draft).

**Друга правильна відповідь (як уникнуто):** у gaps на часи другу можливу форму не дано варіантом (немає «have revised» поруч із «’ve been revising», «is making» поруч із «is going to», «finished by then» поруч із «had finished»; «will finish by July» не позначено помилкою — e10s4l5 каже, що will теж можливе); will / going to / Present Continuous — у multi (l4 екран 6, обидві правильні); would / could / might — multi (l3, boss Task 3); hope + Present Simple / will — у gaps дано лише «have» без «will have»; «I hope you had…» відсічено «next week»; I wish I was / were — не оцінюється. Кожне оцінюване завдання розв’язав двічі.

**Опори (D-019):** l1 екран 6 (НМТ) — факт на самому екрані; l2 читання — відповідь у тому ж уривку, головна думка — після 3-го; l2 gaps фактів — з уривків 1–3; l5 екран 5 — факт на екрані (повідомлення Emma); l5 hyp — опитування вигадане, ніде не оцінюється; boss — лише матеріал розділу.

**Факти (по 2 джерела):**
1. НМТ (National Multi-subject Test) — з 2022; 2022 — три предмети (українська, математика, історія України); 2026 — чотири (3 обов’язкові + 1 на вибір); формат 2027+ не затверджено → у тексті «The rules can change… check the official website». https://uk.wikipedia.org/wiki/Національний_мультипредметний_тест ; https://testportal.gov.ua/en/university-entrance-exams-in-2026-(university-admission-campaign-2026)/ ; https://luguniv.edu.ua/en/announcements/format-nmt-2026-ostatochno-zatverdzhenyy ; про 2027 — https://osvita.ua/test/97833/
2. Erasmus+ — «the EU’s programme to support education, training, youth and sport in Europe»; Erasmus започатковано 1987 (рішення Ради 15.06.1987). https://erasmus-plus.ec.europa.eu/about-erasmus ; https://www.consilium.europa.eu/en/policies/erasmus-plus-programme/ ; https://en.wikipedia.org/wiki/Erasmus_Programme
3. Україна — partner country, не асоційована; мобільність студентів (International Credit Mobility) — лише за міжінституційною угодою; кредити, здобуті за кордоном, зараховують у ступінь. https://erasmusplus.org.ua/wp-content/uploads/2023/01/overview-2021-2026_eng_short_april_eng.pdf ; https://erasmus-networks.ec.europa.eu/enfp/group/editorial/topic/erasmus-action-international-credit-mobility ; https://www.eeas.europa.eu/delegations/ukraine/ukrainian-universities-won-over-2-400-new-international-mobility-projects-within-eu%E2%80%99s-erasmus_en
4. UK: після Brexit (рішення грудня 2020) вийшла з Erasmus+, Turing scheme з 2021; грудень 2025 — домовленість про повернення в Erasmus+ у 2027 (Wikipedia: з 1.01.2027; інші — навчальний рік 2027–28, тож у тексті лише «in 2027»). https://www.gov.uk/government/news/uk-and-eu-finalise-agreement-to-bring-uk-into-erasmus-in-2027 ; https://www.irishtimes.com/world/uk/2025/12/17/uk-to-rejoin-eus-erasmus-student-exchange-programme ; https://en.wikipedia.org/wiki/Turing_scheme ; https://www.daad.de/en/press-releases/2026/vereinigtes-koenigreich-kehrt-2027-zu-erasmus-zurueck/
5. eTwinning — онлайн-платформа для шкільних проєктів у Європі (з 2005); Україна бере участь (eTwinning Plus з 2013, національна конференція eTwinning Ukraine 2026). https://en.wikipedia.org/wiki/ETwinning ; https://britishcouncil.org.ua/en/european-commission%E2%80%99s-etwinningplus-programme ; https://erasmusplus.org.ua/en/news/participation-in-the-annual-national-conference-etwinning-ukraine-results-of-2025-and-prospects-and-objectives-for-2026-17-01-2026-kyiv/
6. Медицина: Україна — 222 «Медицина», магістр, 6 років на основі повної загальної середньої освіти, далі інтернатура; UK — ступінь з медицини зазвичай 5 років (у деяких — 6), далі Foundation Programme у лікарні (тривалість у тексті не названо). https://www.bsmu.edu.ua/wp-content/uploads/2024/12/opp_mediczina-2024.pdf ; https://www.education.ua/news/2024/03/21/medytsyna-vse-pro-spetsialnist-222/ ; https://ncl.ac.uk/careers/explore-your-options/further-study/medical/finding-a-course/ ; https://www.exeter.ac.uk/study/undergraduate/courses/medicine/
Мережа: WebFetch не резолвить eeas.europa.eu, euronews.com; curl до leeds.ac.uk, erasmusplus.org.ua, school-education.ec.europa.eu — 000. Ці URL узято з результатів WebSearch (сніпети), не відкрито; кожен факт має щонайменше одне відкрите джерело (Wikipedia raw через curl) + сніпет офіційного.

**Словник (CD, curl):** revise «UK (US review)… in preparation for an exam» (B1) — https://dictionary.cambridge.org/dictionary/english/revise ; sit «B2 [T] UK to take an exam» — …/sit ; mock «an exam taken at school for practice» (не вжито) — …/mock ; retake, deadline (B2), score; prestigious C1 /presˈtɪdʒ.əs/ — …/prestigious (слово теми, пояснено в l5 info); career /kəˈrɪər/; exchange /ɪksˈtʃeɪndʒ/; scholarship (не вжито); respected /rɪˈspek.tɪd/; deadline /ˈded.laɪn/; well paid — заголовне «well paid», перед іменником «well-paid» (приклад CD); in demand; suit «B2 to be right for a particular person»; strength «C1 a good characteristic»; weakness B2; make up your mind B1; work experience «mainly UK» — …/work-experience ; careers adviser (приклад у статті adviser); open day; gap year (не вжито); host family; competitive B2; salary B1; keep in touch B1, lose touch B2 (не вжито). CD Grammar «Wish» — «We use hope, not wish, when we want something to happen in the future… Not: I wish the weather’s fine tomorrow» — https://dictionary.cambridge.org/grammar/british-grammar/wish . Наголос responsibility, salary, abroad, partner — за звичною вимовою (CD не відкривав окремо) — верифікатору звірити.

**stats:** прапорці лише в l2 (урок читання з повним обсягом 11 кл.: readWordsPerScreen z=2, maxReadWords/maxText z=2.8; maxText 166 ≤ 190) — як e10s3l1, e10s8l2 (STYLE writer-e10s3); решта уроків без прапорців.

**Спірне / верифікатору:**
- Oksana: e9s7 / e10s8 — vet; e11s4 (draft) — «хоче вивчати історію мистецтва». У l4 і boss це узгоджено: вагалася, обрала veterinary medicine в Kharkiv, мистецтво — хобі. Якщо e11s4 зміниться — перевірити l4 і boss.
- Taras — journalism у Lviv (e9s7: journalist; e10s8: хотів фотографію) — сумісно.
- Kharkiv (open day, клініка ветфакультету) — вигадана подія, без назви університету.
- l1 NMT: «In 2026, it had four» — без чисел балів; «170 points» у практичному тесті (шкала НМТ 100–200) — вигадане.
- l5 опитування класу Andrii — вигадане й так позначено в тексті («only one class survey, not a survey of the whole country»).
- Функції l6 — через choice/match/gaps (D-056, без dialog).
