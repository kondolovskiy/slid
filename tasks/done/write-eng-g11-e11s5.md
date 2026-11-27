---
claimed_from: todo
claimed_at: 2026-11-26T10:52:27.704Z
id: write-eng-g11-e11s5
type: write-section
subject: eng
grade: 11
section: e11s5
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e11s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Science and its impact» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Наука і технічний прогрес — галузі науки; вплив науково-технічного прогресу на життя людини і довкілля; розвиток науки і техніки в Україні та за кордоном; обладнання та персонал — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21.
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): modals + passive (с. 25) — повт. should be cooked (e7s2 l4), must be protected (e9s2 l5); нове: can / could / might / will / have to be + третя форма у ствердженні, запереченні й питанні; overview of all tense forms (passive) (с. 25) — повт. Present / Past Simple passive (e6s3l2, e6s7l3, e7s7, e9s6), Present Continuous passive (e8s3 l3); нове: Present Perfect passive, Past Continuous passive, future passive. Огляд активних часів — e11s8.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: by + виконавець — лише коли важливий; get-passive не вводити; can be / could be, must be / has to be — контекст або обидві в ключі. Назва форми seen, built — за TQ-128 (тимчасово «the third form of the verb»; у 11 кл. варіант В — «past participle» — лише після відповіді вчителя). Не дублювати e9s6 (винахідники, «It was invented by…»): тут — галузі науки, лабораторія (researcher, lab assistant, technician), вплив на довкілля. Наука в Україні — вчені, установи (НАН України) — лише з джерела; громадянство й місце народження — точно, без «присвоєння». Функція (с. 23): «висловлювати й аргументувати власну точку зору» — l5. `requires`: e6s3l2, e6s7l3; 7–9 — e7s2 l4, e8s3 l3, e9s6. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s5.js`: `SLID.section("eng", { id: "e11s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e11s5, 2026-11-26. `content/eng/g11-e11s5.js` — draft, 7 уроків (6 + boss `e11s5boss` «Science reporter»), 77 екранів. `validate --section e11s5` — 0 помилок, 0 попереджень. Без dialog (D-056), без звуку, без img. Build не запускав.

**Уроки:** l1 Biology, physics, IT: branches of science (галузі, -ology → -ologist, physicist, chemist у BrE; повт. Present Simple passive) · l2 In the lab (researcher, research assistant, lab technician, carry out; lab coat, safety goggles, gloves, test tube, scales, microscope, sample; повт. Present Simple / Continuous passive) · l3 Passive tenses (повт. Present / Past Simple, Present Continuous; нове — Present Perfect, Past Continuous, future passive, питання) · l4 Modals + passive (can / could / might / will / has to / must be + третя форма, заперечення й питання, mustn’t be ↔ don’t have to be) · l5 Science and the environment (pollution, fossil fuels, renewable energy, the ozone layer, impact; функція — аргументувати: I’m convinced that, The evidence suggests that, Let me give you an example, I see / take your point, but, You have a point, I’m not convinced) · l6 Science in Ukraine and abroad (стаття Andrii, 3 частини, 413 слів — П1407 с. 21: 400–450; пасив у статті; by — лише коли важливо) · l7 boss, 9 завдань.

**requires:** e6s3l2, e6s7l3, e7s2l4, e7s7l2, e7s7l3, e8s3l3, e9s2l5, e9s6l2, e9s6l4, e10s6l6 (усі існують).

**stats:** l6 — «readWordsPerScreen / maxReadWords нетипово для сім'ї» (z ≈ 2.2): це урок читання з повним текстом 11 кл. (400–450 слів за П1407 с. 21, style/eng.md «Тексти для читання», 3 екрани ≤ 190 слів з питанням; maxText 152). Профіль (readWordsPerScreen ≤ 65) дотримано. Решта уроків без прапорців.

**Факти (по два джерела; uac.gov.ua, nas.gov.ua, ukri.org, bas.ac.uk, home.cern, life.pravda, armyinform — з контейнера недоступні):**
- НАН України заснована в Kyiv 1918 (закон 14.11, перші збори 27.11 — у тексті лише рік); перший президент — Володимир Вернадський (1918–1921); Вернадський — «mineralogist» (en.wiki станції): https://en.wikipedia.org/wiki/National_Academy_of_Sciences_of_Ukraine ; https://uk.wikipedia.org/wiki/Національна_академія_наук_України ; https://en.wikipedia.org/wiki/Vernadsky_Research_Base . Громадянство й місце народження Вернадського не називаємо («the scientist»).
- Борис Патон — нар. 1918 у Kyiv (день: uk.wiki 14.11, en.wiki 27.11 — у тексті лише рік), зварювання (welding), президент НАН 1962–2020 (58 років), помер 2020: https://en.wikipedia.org/wiki/Borys_Paton ; https://uk.wikipedia.org/wiki/Патон_Борис_Євгенович . Батько — Євген Патон (uk.wiki «Син Євгена Патона»; en.wiki «His father, Evgeny Paton»); міст Патона через Дніпро в Kyiv відкрито 5.11.1953, названо на його честь: https://en.wikipedia.org/wiki/Paton_Bridge ; https://uk.wikipedia.org/wiki/Міст_Патона .
- Станція «Академік Вернадський»: о. Галіндез біля Антарктичного півострова; британська станція з 1947 (en: «Argentine Islands», з 1977 — Faraday; uk: «заснована в 1947 році як британська станція «Фарадей»» — у тексті «started it in 1947 and later called it Faraday»), передана Україні 1996 (прапор — 6.02.1996; у тексті лише рік), названа на честь першого президента НАН; працює цілий рік (en infobox «All year-round», uk «працює постійно»; зимівників 12 — uk 2019–20, en infobox 2017; en «Staff» каже 5 — у тексті «a small team»); дослідження — метеорологія, озон, біологія, екологія: https://en.wikipedia.org/wiki/Vernadsky_Research_Base ; https://uk.wikipedia.org/wiki/Академік_Вернадський_(антарктична_станція) . **Не вжито (CONFLICT):** uk.wiki — озонову діру 1985 відкрили «саме над станцією «Фарадей»», англомовні джерела (Farman, UKRI у пошуку) — дані станції Halley; зв'язку станції з відкриттям у тексті немає.
- Озон: 1985, Joe Farman, Brian Gardiner, Jonathan Shanklin (British Antarctic Survey), Nature, травень 1985 — https://en.wikipedia.org/wiki/Joseph_Farman ; https://en.wikipedia.org/wiki/Ozone_depletion («first reported in 1985 (Farman et al.)»; CFCs — cooling units, aerosol sprays; відновлення над Антарктидою ≈ 2066 за оцінкою ООН 2023). Монреальський протокол відкрито для підпису 16.09.1987, чинний з 1.01.1989; відновлення — 2040 / 2066: https://en.wikipedia.org/wiki/Montreal_Protocol ; https://uk.wikipedia.org/wiki/Монреальський_протокол . «Every UN member state has joined it» — лише en.wiki, тому вилучено.
- CERN: засновано 1954, біля Geneva на кордоні Франції й Швейцарії; Web винайдено там (Berners-Lee, 1989 — як у e9s6); Україна — асоційований член з 5.10.2016 (у тексті рік): https://en.wikipedia.org/wiki/CERN ; https://uk.wikipedia.org/wiki/Європейська_організація_з_ядерних_досліджень .

**Імена:** Volodymyr Vernadsky, Borys Paton, Yevhen Paton, Akademik Vernadsky. За КМУ55 було б Vernadskyi; «Vernadsky» — офіційна англ. назва станції (uac.gov.ua «Akademik Vernadsky Station», en.wiki) і усталена форма імені в англомовних джерелах — glossary/eng «якщо… пише інакше — її написання». Paton (не Patón): за КМУ55 збігається. Yevhen — за КМУ55 (en.wiki: Evgeny). На рішення верифікатора / TQ, якщо треба Vernadskyi.

**Форми й слова (CD / OALD):** наголос — CD: biology baɪˈɒl.ə.dʒi, chemistry ˈkem.ɪ.stri, astronomy əˈstrɒn.ə.mi, physicist ˈfɪz.ɪ.sɪst, geology dʒiˈɒl.ə.dʒi, ecology iˈkɒl.ə.dʒi, technician tekˈnɪʃ.ən, laboratory UK ləˈbɒr.ə.tər.i (US ˈlæb.rə…), microscope ˈmaɪ.krə.skəʊp, researcher UK rɪˈsɜː.tʃər (US ˈriː… — у stress не брав), academy əˈkæd.ə.mi, pollute pəˈluːt, impact ˈɪm.pækt, goggles ˈɡɒɡ.əlz, sample ˈsɑːm.pəl — https://dictionary.cambridge.org/dictionary/english/<слово>. chemist — UK також фармацевт / chemist’s (CD chemist). scales «[plural] UK (US scale)» (CD scale). lab technician, lab coat — OALD lab_1 (https://www.oxfordlearnersdictionaries.com/definition/english/lab_1); research assistant — OALD assistant_1; **lab assistant** — лише Wiktionary («informal»), у CD/OALD немає → не вжито. carry out an experiment — OALD experiment_1. see someone’s point, I take your point, have a point — CD point (https://dictionary.cambridge.org/dictionary/english/point), OALD point_1; convinced (that) / not convinced — CD, OALD convinced; evidence suggests — CD evidence; do more harm than good — CD harm; impact on — CD impact; weld — CD weld. Пасив: CD Grammar «Passive: forms» (was/were being, have/has been, modal + be) — https://dictionary.cambridge.org/grammar/british-grammar/passive-forms.

**Друга правильна відповідь — як закрито:** у gaps на пасив хибні варіанти лише неграматичні (номер: has/have, was/were; форма: build, test, give, wore; пропущене be: will given, can recycled, must worn); інший граматичний час чи модальне поруч із ключем не стоїть; значення часів — choice (l3 #6), match (l3 #9); mustn’t ↔ don’t have to — sort (l4 #8), word (l4 #9: «Use must» — щоб can’t не був другою відповіддю), boss T6 (choice). build: l2 — два порядки («What machine is this used for?»), l4 — питання й декларативне «This crisp packet can be recycled?» (PITFALL verifier-e7s7), l6 — «In Ukraine science has to be supported.» (кома в плитку не ставиться). l3 build «The robot has been tested yet?» не в ключі — yet у ствердженні неграматичне. Hint у build не дає порядку.

**Опора (D-019):** l1 #8 (Present Simple passive) — правило з e7s7l2 / e6s3l2 (requires), підказка на екрані; l2 #11 build «used for» — e9s6l4; l5 #6 — екран «The ozone story» (#5); l6 #4–6 — відповіді в уривку на тому ж екрані, #7 (головна думка) — після 3-ї частини; boss — лише з уроків (pre).

**Герої (11 кл., 17 років):** нові Dr Shapoval (дослідниця, біолаб університету в Kharkiv), Maksym (її research assistant), Mr Ivanenko (lab technician) — день відкритих дверей Oksana й Mariia; Emma — astronomy, старий телескоп від grandad; Daryna — geology, проєкт «Plastic at our school» (Ms Lysenko, Kyiv); Zoriana — новини robot club, робот 2-ге місце на science fair; Andrii — стаття «Ukrainian science: from Kyiv to Antarctica», Kyrylo допомагає. Рядок NOTE — в inbox.
