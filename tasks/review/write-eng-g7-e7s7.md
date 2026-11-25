---
claimed_from: todo
claimed_at: 2026-11-25T12:18:23.883Z
id: write-eng-g7-e7s7
type: write-section
subject: eng
grade: 7
section: e7s7
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e7s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Київ і столиця країни мови» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: основні пам'ятки історії та культури Києва; пам'ятки столиці країни виучуваної мови — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Past Simple passive: negative, questions, by + agent — When was it built? Who was it designed by? It wasn’t destroyed (B1: Passives — Past simple) — розширення e6s7l3 (там лише affirmative); one of the oldest + plural noun (B1: Superlatives — ‘one of the’) — нове; the same as, similar to (B1: Clause — comparatives) — на вибір автора; повторення: Present Simple passive (e6s3l2), the main / the only (e6s7l2).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** **Один розділ на дві теми програми** (Україна — пам'ятки Києва; Країни виучуваної мови — пам'ятки столиці): с. 32 дозволяє поєднувати теми; питання вчителю — TQ-130. Не повторювати e6s7 (Софія, Золоті ворота, Андріївська церква, фунікулер, метро — там уже є) і e6s8 (London: a map; **the Tower of London там уже є — 21 згадка, «built more than 900 years ago»**, тож у l5 — St Paul’s Cathedral, verifier-curate-eng-plan-g7-9): тут музеї, пам'ятники, історія й культура. St Paul’s: старий собор знищила Велика пожежа 1666 р., новий спроєктував Christopher Wren (en.wikipedia St Paul’s Cathedral; London Museum «A history of St Paul’s Cathedral»); роки будівництва в джерелах різні (≈ 1675–1711) — у вправі лише «after the Great Fire of 1666» або століття. Дати — лише з двох джерел; спірні (рік заснування Лаври, «найстаріший») — лише століття або без дати (writer-e6s7). one of the + plural («one of the oldest museums»). Фото: в Україні немає свободи панорами — сучасні пам'ятники й будівлі лише з дозволеною ліцензією (writer-e6s7). `requires`: e6s7l2, e6s7l3, e6s8l2, e6s3l2, e5s10l5, e5s7l6. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s7.js`: `SLID.section("eng", { id: "e7s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e7s7, 2026-11-25.** Файл `content/eng/g7-e7s7.js`, 7 уроків (6 + boss), статус draft, без зображень. `validate --section e7s7` — 0 помилок, 0 попереджень; `stats --subject eng` — див. нижче.

**Уроки:** l1 Museums and monuments in Kyiv (Present Simple passive is/are kept — повторення e6s3l2; monument, statue, painting, artist, collection); l2 It was built by…: who made it? (Past passive + by; architect, design, found → founded); l3 Was it destroyed? When was it rebuilt? (питання, wasn’t / weren’t, short answers; destroy, rebuild); l4 One of the oldest: history and culture in London (one of the + superlative + plural; similar to, the same as); l5 St Paul’s Cathedral: who was it designed by? (Who … by?; dome); l6 A culture trip: Kyiv or London? (читання 2 частини + власний план); l7 boss «Two capitals: a culture quiz», значок e7s7boss.
**requires:** e6s7l2, e6s7l3, e6s8l2, e6s3l2, e5s10l5, e5s7l6 (як у задачі; усі існують).
**Герої:** Andrii (Kyiv, клас Ms Lysenko), однокласниця Daryna; George (London, e6s8: любить British Museum, у Києві не був). Нових героїв немає. Не повторено e6s7 (Golden Gate, фунікулер, метро — лише згадка дати 1960 як дистрактор; Софія — лише «wasn’t destroyed») і e6s8 (Tower, Big Ben, London Eye не згадано).

**Факти (кожен — 2 джерела):**
- Monument to Prince Volodymyr — 1853, Volodymyrska Hill над Дніпром, найстаріший скульптурний пам'ятник Києва: https://en.wikipedia.org/wiki/Monument_to_Prince_Volodymyr; https://uk.wikipedia.org/wiki/Пам'ятник_Володимиру_Великому_(Київ) (+ guide.kyivcity.gov.ua через WebSearch). В уроці — лише «built in 1853», «on a hill over the Dnipro».
- Monument to Bohdan Khmelnytskyi — 1888, Sofiiska Square, між дзвіницями Софії й Михайлівського, «one of the oldest sculptural monuments in Kyiv»: https://en.wikipedia.org/wiki/Bohdan_Khmelnytsky_Monument,_Kyiv; https://uk.wikipedia.org/wiki/Пам'ятник_Богданові_Хмельницькому_(Київ) («відкритий 11 (23) липня 1888»). Написання Khmelnytskyi, Sofiiska — за КМУ № 55 (glossary/eng.md).
- National Museum of Taras Shevchenko (Kyiv) — картини й рисунки Шевченка; картина «Kateryna» (1842) там зберігається: https://en.wikipedia.org/wiki/National_Museum_of_Taras_Shevchenko; https://en.wikipedia.org/wiki/List_of_paintings_and_drawings_by_Taras_Shevchenko; https://www.t-shevchenko.name/en/Painting/1840-42/Catherine.html (інв. Ж-100). Рік картини в уроці не названо.
- Kobzar — збірка віршів Шевченка (перше вид. 1840): https://en.wikipedia.org/wiki/Kobzar_(book); ЕСУ/EoU. Рік в уроці не названо.
- St Andrew’s Church — за проєктом Bartolomeo Rastrelli: https://en.wikipedia.org/wiki/St_Andrew%27s_Church,_Kyiv; https://uk.wikipedia.org/wiki/Андріївська_церква_(Київ) («за проєктом архітектора Франческо Бартоломео Растреллі»). Роки будівництва різняться (1747–1754/1762) — не названо.
- Легенда: Київ заснували Кий, Щек, Хорив і сестра Либідь (Повість минулих літ): https://en.wikipedia.org/wiki/Kyi,_Shchek_and_Khoryv; Encyclopedia of Ukraine «Kyi» (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CY%5CKyi.htm, через WebSearch). В уроці подано як legend. Написання Lybid — КМУ № 55.
- St Michael’s Golden-Domed Monastery: собор збудовано 1108–1113 (12 ст.), знищено радянською владою в 1930-х (1935–1937), відбудовано в 1990-х (1997–1998, собор відкрито 1999): https://en.wikipedia.org/wiki/St._Michael%27s_Golden-Domed_Monastery; https://uk.wikipedia.org/wiki/Михайлівський_Золотоверхий_монастир («У 1930-х роках був зруйнований більшовиками, відтворений у 1997—1998»). В уроці — лише століття й десятиліття.
- St Sophia’s Cathedral не знищено: Софійська комісія ВУАН урятувала собор: https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv («The cathedral was saved from demolition… Sophia Commission»); https://uk.wikipedia.org/wiki/Софійський_собор_(Київ) («Софійська комісія… врятувала собор від знищення більшовиками»). В уроці: «It wasn’t destroyed in the 1930s: scientists saved it.»
- London Underground — найстаріша підземна залізниця світу, відкрита 1863: https://en.wikipedia.org/wiki/London_Underground («opened on 10 January 1863 as the world's first underground passenger railway»); https://www.guinnessworldrecords.com/world-records/first-underground-railway-system; https://ltmuseum.co.uk/visit/museum-guide/worlds-first-underground.
- British Museum — засн. 1753, відкритий 1759, «world's first public national museum»; вхід безкоштовний (як у e6s8): https://en.wikipedia.org/wiki/British_Museum; https://www.britishmuseum.org/about-us/history (через WebSearch). В уроці: «opened in 1759; one of the oldest museums in the world» (обережніше за «first»).
- Globe: перший збудовано 1599, знищено пожежею 29.06.1613; нова реконструкція «Shakespeare’s Globe» відкрита 1997 р. ≈ 230 м від старого місця: https://en.wikipedia.org/wiki/Globe_Theatre; https://en.wikipedia.org/wiki/Shakespeare%27s_Globe; https://shakespearesglobe.com/discover/about-us/globe-theatre (через WebSearch). «looks similar to the first Globe» — реконструкція.
- St Paul’s Cathedral: на Ludgate Hill; старий собор знищила Велика пожежа 1666 р.; новий — Sir Christopher Wren; у Другу світову в собор влучали бомби (10.10.1940, 17.04.1941), але він вистояв: https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral («survived the Blitz although it was struck by bombs»); https://londonmuseum.org.uk/collections/london-stories/a-history-of-st-pauls-cathedral (через WebSearch; хост не резолвиться); https://historicengland.org.uk/whats-new/features/blitz-stories/st-paul-s-cathedral; https://en.wikipedia.org/wiki/St_Paul%27s_Survives. Роки будівництва не названо (лише «after the Great Fire of 1666»).

**Словник (CD, curl https://dictionary.cambridge.org/dictionary/english/<слово>):** monument /ˈmɒn.jə.mənt/ (B2), statue /ˈstætʃ.uː/, collection /kəˈlek.ʃən/, architect /ˈɑː.kɪ.tekt/ (B1), design /dɪˈzaɪn/, destroy /dɪˈstrɔɪ/, rebuild /ˌriːˈbɪld/ — rebuilt, rebuilt; found (B2: «to bring something into existence») — founded; similar /ˈsɪm.ɪ.lər/; legend, culture, history — рівні A2–B2. Наголос у `stress` і `<u>` — за цими транскрипціями. Приклади словника не копіював.

**Опора завдань (D-019):** кожне оцінюване спирається на попередній екран уроку (факти — інфоекрани l1 ек. 5, l2 ек. 4, l3 ек. 6, l4 ек. 5, l5 ек. 3) або на текст на самому екрані (l4 build про пам'ятник Хмельницькому — факти в body; l6 — уривки на екрані). Boss питає лише те, що було в l1–l6 (`pre`). Неочевидне: boss Task 5 (When was the first Globe destroyed?) — факт з l4 ек. 5; l6 match — з уривків l6 ек. 2–3; boss Task 8 «George has visited Kyiv» — хибне з тексту («Come to Kyiv one day!») і канону e6s8.
**Друга правильна відповідь:** у gaps дистрактори — явно хибні форми (wrote, design, from, the same to, similar with, did); «The museum is visited by lots of people» (l1) — by трапляється раніше за l2, але варіант-пастка (visits) однозначно хибний. У l1 word ключ лише «artist» (перед полем «an», тож «painter» неграматичне).

**stats (eng):** l6 — gradedShare 0.78 і readWordsPerScreen «нетипово для сім'ї» (z = 2,1): урок читання (два уривки ≤ 90 слів, у межах профілю 7–9: maxText 87 ≤ 140, gradedShare ≤ 0,9). Решта уроків — без прапорців.
**Відкрите:** без зображень (у Україні немає свободи панорами; фото St Paul’s можна додати окремою задачею images-*). «Find the mistake» — l2, l3. Плейтест не запускав: Python-модуля playwright у контейнері немає. Питань вчителю немає (TQ-135 не знадобився). Build не запускав.
