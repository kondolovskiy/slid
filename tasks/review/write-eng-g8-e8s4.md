---
claimed_from: todo
claimed_at: 2026-11-25T12:23:27.935Z
id: write-eng-g8-e8s4
type: write-section
subject: eng
grade: 8
section: e8s4
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e8s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Музика» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: улюблені музичні стилі; жанри, інструменти; музиканти, композитори, виконавці; відвідування концерту — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): defining relative clauses: who, which, that і без займенника — the song I like (B1: Relative — defining) — розширення e6s6l3; non-defining relative clauses з комами: who, which (B1: Relative — non-defining; відкладене з 6 кл.) — нове; compound adjectives: world-famous, well-known (B1: Compound adjectives) — нове.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** that у non-defining не вживається → ключ лише who / which; у defining who / that і which / that — обидва в ключі (plan-eng-g6 §5). bandura — звірити в CD/OALD (якщо немає — з картинкою й поясненням). Композитори й виконавці (Lysenko, Leontovych, британські гурти) — факти з двох джерел; тексти пісень під охороною не цитувати (pitfalls п. 8); фото — ліцензії. Не повторювати e4s8l4 «a concert»: тут стилі, жанри, інструменти, музиканти, відгук про концерт (функція: висловлювати враження, с. 32). `requires`: e6s6l3, e4s8l4, e5s6l2. Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s4.js`: `SLID.section("eng", { id: "e8s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e8s4, 2026-11-25.** `content/eng/g8-e8s4.js` — draft, 7 уроків (6 + boss), `validate --section e8s4`: 0 помилок, 0 попереджень. Build не запускав.

**Уроки:** l1 Music styles (pop, rock, rap, jazz, folk, classical; classical ≠ classic) · l2 Instruments (the guitar/piano/violin/drums/bandura → guitarist, pianist, violinist, drummer, bandura player; play the, не play on the; musician, orchestra) · l3 defining: who/which/that + пропуск займенника (правило «наступне слово — нова особа/річ → можна пропустити; дієслово → не можна») · l4 non-defining: коми, who/which, не that, не пропускаємо · l5 compound adjectives (world-famous, well-known, open-air, old-fashioned, two-hour, 14-year-old) + факти про музикантів · l6 відгук про концерт (The best part was…, The only problem was…, I’d recommend…; -ed/-ing з e7s4l4) · l7 boss (7 завдань, `pre` на кожен урок).
`requires`: e6s6l3, e4s8l4, e5s6l2 (із задачі) + e7s4l4 (-ed/-ing у l6) і e7s4l6 (план відгуку). Без type "dialog" (D-056); звуку немає — музику ніде не «слухаємо».

**Словник (Cambridge, curl):**
- bandura — є в CD: «a musical instrument with many strings from Ukraine» — https://dictionary.cambridge.org/dictionary/english/bandura (наголос ban<u>du</u>ra — bænˈduː.rə). bandurist у CD немає → «a bandura player».
- composer B2, choir B2 (обидва введено поясненням в l5 info до оцінювання, Р1 curate-eng-plan-g7-9), musician B1, orchestra B1, guitarist B1, violin A2, drum A2, concert A2, crowd A2, recommend B1, amazing B1, well-known A2 — https://dictionary.cambridge.org/dictionary/english/<слово>.
- world-famous «known about by many people from most parts of the world»; open-air «open-air concert»; old-fashioned B1 «not modern» — CD (ті самі URL).
- Дефіс у compound adjective перед іменником і з числами (a well-known singer; a twelve-hour flight) — CD Grammar «Compounds»: https://dictionary.cambridge.org/grammar/british-grammar/compounds . Після дієслова CD пише well known без дефіса — у розділі предикативного well-known немає (лише атрибутивно; world-famous після be — словникова одиниця з дефісом).
- Коми в non-defining, that не вживається, у defining коми немає; пропуск займенника, коли він — додаток — CD Grammar: https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-defining-and-non-defining
- classic ≠ classical — CD Grammar «Classic or classical?» (на сторінці https://dictionary.cambridge.org/dictionary/english/classical).
- Наголос (stress): music, classical, concert, popular — 1-й склад; guitar, violin — останній; musician — 2-й; orchestra — 1-й (IPA CD).

**Факти (кожен — 2 джерела):**
- Микола Лисенко (1842–1912), український композитор; 1904 — відкрив музичну школу в Києві; опери й обробки народних пісень — https://en.wikipedia.org/wiki/Mykola_Lysenko ; https://www.encyclopediaofukraine.com/pages%5CL%5CY%5CLysenkoMykola.htm ; https://www.encyclopediaofukraine.com/pages%5CL%5CY%5CLysenkoMusicandDramaSchool.htm (через WebSearch; сам EoU з контейнера недоступний).
- Микола Леонтович (нар. 1877), композитор, «His music was inspired by … Mykola Lysenko» (у тексті — «liked Lysenko’s music»), хорова обробка «Щедрика»; Carnegie Hall, Нью-Йорк, 5.10.1922 — Український національний хор; англ. «Carol of the Bells» (слова Вільговського, 1936; тексту не цитуємо) — https://en.wikipedia.org/wiki/Mykola_Leontovych ; https://carnegiehall.org/explore/articles/2022/11/29/carol-of-the-bells ; https://kyivindependent.com/from-a-ukrainian-village-to-home-alone-carol-of-the-bells ; реєстр hist-3 №377.
- The Beatles — англійський рок-гурт з Liverpool, 1960–1970 — https://en.wikipedia.org/wiki/The_Beatles ; https://www.britannica.com/topic/the-Beatles (через WebSearch, 403 з контейнера).
- Kalush Orchestra — український гурт, поєднує фолк і реп; переміг на Євробаченні 2022 з піснею «Stefania» — https://en.wikipedia.org/wiki/Kalush_Orchestra ; https://eurovision.tv/story/eurovision-2022-winners-press-conference ; https://www.npr.org/2022/05/13/1098810226/eurovision-ukraine-kalush-orchestra
- Бандура — український щипковий інструмент з багатьма струнами — CD bandura ; https://en.wikipedia.org/wiki/Bandura
- Lviv — захід України, Lviv Opera House (з e7s4); Kharkiv — схід України (загальновідоме, як у 5–7 кл.).
Вигадані: співачка Mila Kvitka і пісня Blue Sky; гурт Kashtan (Kyiv, з 2020, співачка Olha, барабанщик 17 р.). Тексти пісень не цитовано — лише назви (Shchedryk, Carol of the Bells, Stefania).

**Друга правильна відповідь — що зроблено:** усі build перебрано повним перебором через `SLID_LANG.check` (l3 — 2 порядки в ключі; l4, l5, l7 — по одному, пастка that/who не зараховується). word: l1 переписано («This kind of music is called ___ music.» — бо «old songs» давало другу відповідь), l2 pianist + musician, l3 which/that, l4 who (that з комами — ні), l7 who/that. Band як антецедент: у gaps лише which / that (who для гурту в BrE теж можливе — тому who як варіант не дається). sort l4 — лише речення з власними назвами (Tom, Lviv, Oksana) проти «the girl who…», «musicians who…», «the song that…», щоб не було двозначності («my grandad» міг би бути defining).

**Опора (D-019):** l1 choice «Emma’s grandad» ← info «Kinds of music»; l5 читання (Lysenko 1904, Beatles, Kalush) — факт на тому ж екрані; boss T5 (Beatles — Liverpool, Lysenko — школа 1904) ← l5 екрани «Reading part 1/2»; boss T2 (bandura, orchestra) ← l2 info.

**stats:** e8s4l2 longWordShare 0.171 — «нетипово для сім'ї» (z=3.1), але в межах профілю 7–9 кл. (≤ 0,18): тема — назви інструментів і музикантів (guitarist, violinist, musician, orchestra, instrument, bandura). Решта уроків без прапорців.

**Сумнівне / для верифікатора:** (1) правило пропуску займенника в l3 спрощене до «наступне слово» (B1-евристика; випадки на кшталт «the song that is…» узгоджуються). (2) «in English it’s called Carol of the Bells» — англійська пісня має слова Вільговського; у тексті — «people know the music as»/«it’s called», без тверджень про авторство слів. (3) «Mila Kvitka», «Kashtan», «Olha» — вигадані; перевірити, що немає відомих однойменних виконавців, які заплутають.
