---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.746Z
id: write-eng-g6-e6s4
type: write-section
subject: eng
grade: 6
section: e6s4
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: review
claimed_by: writer-e6s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Спорт» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: види спорту; спортивні уподобання — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Past Continuous: affirmative, negative, questions; background events, events in progress (A2: інвентар с. 22 називає лише affirmative; negative і questions — через Clauses: Negative declarative, Interrogatives, с. 21 — лише короткі, What were you doing…?); Past Simple with when (A2: with ‘when’ in subordinate clauses); Could: abilities (I could swim when I was five); повторення — play / go / do + sport (e4s3l1), can (e5s6l4), Exclamations: What a… (e5s8).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** BrE: sport у загальному значенні (не sports), але sports news, sports day; football pitch — B2 (CD), у назвах не виносити. Past Continuous vs Past Simple: «when» з короткою дією — Past Simple; другу правильну відповідь (while / when, обидва часи в одному реченні) відсікати контекстом. «What were you doing at six o’clock?» — час без am/pm, якщо контекст однозначний. Спортсмени України — лише з двох джерел; без результатів «на сьогодні». Герої: Emma плаває, Tom катається, але не плаває (e5s6); Andrii — шахи. `requires`: e4s3l1, e5s6l4, e4s6l2 (Present Continuous — форма -ing), e5s4l3 (What are you wearing? — питання be + -ing); після e6s3 — урок Past Simple irregular з e6s3 (оркестратор). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s4.js`: `SLID.section("eng", { id: "e6s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
writer-e6s4, 2026-11-20. Файл `content/eng/g6-e6s4.js`, 7 уроків (6 + фінал), status draft, `meta.factcheck: null`.

**Уроки:** e6s4l1 «Football, judo, swimming: kinds of sport» (9 екр.) · e6s4l2 «Which sport do you prefer and why?» (10) · e6s4l3 «I could swim when I was five» (9) · e6s4l4 «What were you doing at six o’clock? The Past Continuous» (10) · e6s4l5 «I was running when it started to rain» (9) · e6s4l6 «What a match! Sports news» (9) · e6s4l7 boss «Our sports page» (7, `pre` на l1–l6). Бейдж e6s4boss «Sports reporter».

**`requires`:** e4s3l1 (play / go / do), e4s6l2 (am / is / are + -ing), e5s4l3 (питання be + -ing), e5s6l4 (can), e6s3l4 (Past Simple irregular — id існує, validate зелений), а також e5s8l5 (was / were — основа Past Continuous) і e5s8l6 (What a…! / What an…!) — їх додав понад задачу: обидва вжито прямо (l4, l6). Якщо оркестратор проти — прибрати.

**Перевірка:** `node tools/validate.mjs --section e6s4` — 0 помилок, 0 попереджень. `stats --subject eng`: прапорці «нетипово для сім'ї» — l5 sentenceWords (6.4, z=2.4) і l6 readWordsPerScreen / maxReadWords / maxText (найдовший екран 71 слово). Усе в межах профілю «5-6» (sentenceWords ≤ 10, maxText ≤ 110); сім'я eng поки з уроків 4–5 кл. (як у writer-e6s2). l6 — урок читання (новини, sports day), довші тексти — за style/eng.md «Тексти для читання». Калібрувати в style-sync 6 кл.

**Розв'язання (D-019, друга відповідь):**
- Кожне `build` перебрано в node через `SLID_LANG.check(s, st, "en")` (усі перестановки плиток з будь-якою підмножиною `extra`): у всіх шести рушій приймає лише ключ. Інших граматичних порядків немає: питання — з великою першою плиткою і `keepCase` (перестановки на кшталт «At six o’clock What were…» відпадають за регістром); l6 «The fans were singing when Ostap fell» — плитка «The fans» з великої + `keepCase`, тож «Ostap fell when the fans…» / «When Ostap fell, the fans…» скласти неможливо.
- `word`: ключі без кінцевого знака; прогнано `wordVerdict`: couldn’t = could not, wasn’t = was not (`contractions: true`). Де в пропуск лягали б інші слова — інструкція в `body` («Use play, go or do», «Write when or while», «Use win or lose»). l1 — умова без дієслова, що лягає в пропуск (PITFALL writer-e5s6): «Vlad’s favourite sport is judo. He ___ judo».
- Past Simple vs Past Continuous (l5 S4, boss T5): у `body` — шкала часу з позначками long / short («karate from 5 to 6 (long)», «opens the door at 5.30 (short)»), тож «Oksana did karate when…» (почала о 5.30) і «when Dmytro was opening» (не коротка дія) суперечать умові. when / while — лише перед короткою дією в Past Simple (там while неправильне); перед Past Continuous (де when і while обидва правильні, CD Grammar «While and when») пропусків немає.
- l4: у вправах на was / were + -ing варіантів Past Simple немає («At six o’clock, Emma swam» граматичне — уникнуто).
- Could: лише загальне вміння в минулому («when I was five»), без одиничних досягнень (CD Grammar «Could»: «We don’t usually use could to talk about single events…»).
- «do sport» — CD sport: «do/play sport», тож у l1 Final варіанти {*do|go|make} (play не пасткою); в info — «We do or play sport».
- Неправильні форми в оцінюваних завданнях: came, saw — e6s3l4 (come → came, see → saw); won, lost, fell — подано в info l6 («win → won, lose → lost, fall → fell») перед вправами.
- Опори: l3 S2 — з цитати на екрані; l6 S2 — e5s8l6 (What a…!); l6 multi/choice — уривки на тому самому екрані; l6 Final — факт про Магучіх уперше в тексті вправи (не оцінюється: оцінюються won / a / does).

**Словники (curl, 2026-11-20):**
- CD рівні: volleyball A2, skiing A2, athletics B1 «UK (US track and field)», gymnastics B1, match A2 «mainly UK (US usually game)», team A2, win A2, lose A2, prefer A2, while A2, dangerous A2, healthy A2, exciting A1, boring A1, safe A1, kick A1, fall A2, hit A2, shout A2, fan A2, race A2, ice A2, online A2, meeting A2; не беру: pitch B2 «UK (US field)», stadium B2, medal B2, cheer B2, referee B2, clap B1, score B1, relaxing B1, background B2 — https://dictionary.cambridge.org/dictionary/english/<слово>
- sports day — CD «noun [C] UK»; OALD «(British English) (North American English field day)», b1 — https://dictionary.cambridge.org/dictionary/english/sports-day, https://www.oxfordlearnersdictionaries.com/definition/english/sports-day
- sports centre — CD A2 «UK (US sports center)»; hockey — CD «UK (US field hockey)» (тому hockey в розділ не взяв).
- sport — CD «do/play sport»; OALD sport_1 «(British English) Do you do any sport?» — https://dictionary.cambridge.org/dictionary/english/sport, https://www.oxfordlearnersdictionaries.com/definition/english/sport_1
- prefer — CD «prefer something to something», «[+ -ing verb]» — https://dictionary.cambridge.org/dictionary/english/prefer
- Наголос і склади (CD UK): ˈvɒl.i.bɔːl, æθˈlet.ɪks, dʒɪmˈnæs.tɪks, ˈskiː.ɪŋ, prɪˈfɜːr, ɪkˈsaɪ.tɪŋ, ˈdɪf.ɪ.kəlt, ˈdeɪn.dʒər.əs.
- CD Grammar: Past continuous (was / were + -ing; background event + past simple main event) — https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working; While and when (when + single completed event in the middle of a longer activity; while — longer events) — https://dictionary.cambridge.org/grammar/british-grammar/while-and-when; Could (past ability; не для одиничних досягнень) — https://dictionary.cambridge.org/grammar/british-grammar/could

**Факти:**
- Yaroslava Mahuchikh (Ярослава Магучіх) — з Дніпра; у серпні 2024 (4 серпня) виграла стрибки у висоту на Олімпійських іграх у Парижі. Джерела: en.wikipedia Yaroslava_Mahuchikh (raw, відкрито curl: birth_place Dnipro(petrovsk); Gold 2024 Paris High jump) — https://en.wikipedia.org/wiki/Yaroslava_Mahuchikh; World Athletics report 04 Aug 2024 — https://worldathletics.org/news/report/paris-2024-olympics-report-women-high-jump і AP (abcnews / voanews) — лише через WebSearch (хости не резолвляться з контейнера: worldathletics.org, voanews.com, olympics.com, bbc.co.uk, theguardian.com). Без результатів «на сьогодні», без висоти й рекорду.
- Sports day у школах UK — OALD / CD (вище): «a special day at school when there are no classes…». У тексті — «There are usually no lessons» (WebSearch: не в усіх школах на цілий день).

**Герої:** зовнішності не описую. Канон дотримано: Emma плаває (у шкільній команді з плавання — новий факт), не катається; Tom катається, не плаває (e5s6); Oksana — karate, брат Dmytro; Andrii — Kyiv, шахи (почав у 5 років — новий факт), друзі Yaroslav (basketball, не любить football), Bohdan (tennis), сестра Sofiia; Mariia — Kharkiv, плаває (e4s3l6), малює; не вміла їздити на велосипеді в 4 роки (новий); Taras — Lviv, фотографує, сестра Zlata, друг Ostap (football у шкільній команді — новий). Нові: **Myroslava** (Lviv, однокласниця Taras, athletics, кумир — Магучіх), **Vlad** (Lviv, volleyball і judo, знайомий Myroslava), **Oliver** (однокласник Emma в Англії, тенісист, має сестру). Tom — на sports day у школі Emma (одна школа — новий факт). Ms Kravets — вчителька penfriend / English club (e5s1, e5s6).

**Авторське право:** WebSearch точних фрагментів ≥ 12 слів — «was running with the ball when he fell … got up and kicked the ball into the goal», «When I was seven, I could run fast, but I couldn’t jump very high», «He was running very fast when he fell. Everyone was quiet», «I was running past them when the ball hit my arm», «Sports day is a special day at school in the UK. There are no lessons» — збігів немає.

**Спірне / верифікатору:**
- l5 S4 і boss T5: відсікання другої відповіді тримається на позначках long / short у `body`; перевір, чи досить.
- l3 S5 «Yes, I can.» як хибний варіант на «Could you … when you were six?» — Andrii і зараз уміє, але відповідь не на те питання.
- l5 pick: «I was drawing in the park while it started to rain» — помилка за CD Grammar (while — для тривалих дій).
- l1 hyp: athletics (B1) вводиться здогадкою й поясненням; high jump / long jump — лише в fbText здогадки й у текстах (не оцінюються).
- `requires` + e5s8l5, e5s8l6 — понад задачу.
