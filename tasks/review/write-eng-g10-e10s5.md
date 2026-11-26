---
claimed_from: todo
claimed_at: 2026-11-26T10:18:11.883Z
id: write-eng-g10-e10s5
type: write-section
subject: eng
grade: 10
section: e10s5
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Painting and Ukrainian artists» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Живопис — жанри живопису; відомі художники та їхні твори; відвідування музею, виставки або галереї; українські митці — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): Past Perfect Continuous (с. 23) — нове в нашому плані (в інвентарі B1 МП-ІМ с. 35 позиція є, у плані 7–9 кл. її немає — пояснювати з нуля): had been + -ing, тривалість до моменту в минулому (for, since); контраст з Past Perfect (e10s1) і Past Continuous (e6s4l4); опис картини — there is / are, Present Continuous, in the foreground / in the background (повт. форм, нова лексика).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: had been painting / had painted for years — часто обидві граматичні; результат з кількістю («had painted 20 pictures») — лише simple; дієслова стану — лише simple (CD Grammar «Past perfect continuous») — контекст однозначний або обидві в ключі. Факти про художників (дати, назви творів, музеї) — з джерела (сайт музею, en/uk.wikipedia — FACT); імена українців — glossary/eng.md «Імена» (КМУ № 55 або написання, усталене в джерелі — з URL). Зображення творів — лише відкрита ліцензія (PD, Вікісховище) з `cap` і `credits` (AGENTS.md §4 п. 9; docs/IMAGES.md; скіл hist-images). e11s4 l2 (мистецькі заклади для самоосвіти) не дублювати: тут — конкретний візит. Функції (с. 22): «описувати події в їхній логічній послідовності, висловлюючи власну точку зору» — l4, l6. `requires`: e6s4l4 (Past Continuous); e10s1 (Past Perfect, id — після написання). Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s5.js`: `SLID.section("eng", { id: "e10s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e10s5, 2026-11-26.** Файл `content/eng/g10-e10s5.js`, статус draft, 7 уроків (6 + boss), 77 екранів.
`node tools/validate.mjs --section e10s5` — 0 помилок, 0 попереджень. `node tools/euphony.mjs --section e10s5` — чисто. Build не запускав.

**Уроки:** l1 Genres (portrait, self-portrait, landscape, seascape, still life, abstract; oil paints, watercolours, canvas, exhibition) ·
l2 Turner і Constable (Past Simple passive «was painted by» — повт. e7s7l2; famous for, masterpiece) · l3 Bilokur, Prymachenko,
Murashko (folk artist, self-taught, taught herself) · l4 Past Perfect Continuous (з нуля: had been + -ing, for/since; контраст
з Past Continuous і Past Perfect; дієслова стану) · l5 візит до National Gallery (знаки, guided tour, queue; текст 352 слова на
3 екрани: 126 / 115 / 111; функція «послідовність подій + власна думка» — order + choice «In my opinion») · l6 опис картини
(in the foreground / background, on the left, there is / are + Present Continuous, opinion — sort) · l7 boss, 9 завдань.

**requires:** e4s8l5 (Present Simple / Continuous), e5s7l2 (there is / are), e6s4l4 (Past Continuous), e7s7l1 (museums,
painting, collection), e7s7l2 (passive «It was built by»), e8s5l4 (Past Perfect), e8s5l5 (narrative tenses), **e10s1l3**
(Past Perfect again — файл e10s1 існує як draft паралельного автора; якщо id зміниться — виправити тут).

**Друга правильна відповідь (перевірено двічі):** had painted / had been painting з for + дієслово дії — обидва в ключі (l4 #9 multi,
boss T5 multi) і ніде «had painted» не стоїть хибним при for + тривалість; кількість («twelve pictures», «three pictures», «eleven
paintings … all of them») — лише had painted; know — лише had known (CD Grammar). Хибні варіанти — has been + -ing (теперішнє),
was painting + for N hours up to a moment, неправильні форми (had been paint, was show, teached). «on show» = on display — тому
дистрактор до on display — «touch». «showed» (неперехідне «бути виставленим», OALD) не беру хибним — дистрактор «was show».
Build — усі перестановки перебрано через `SLID_LANG.check` (скрипт у scratchpad): правильні лише порядки з `answer`.
word l5 «queue» — у ключі й AmE «line» (TQ-125). Self-portrait: варіант «portrait» ніде не стоїть поруч (portrait технічно теж
правильний). Seascape і landscape ніде не стоять разом у виборі.

**Стиль і stats:** l3 — longWordShare z=2.5 (власні назви: Prymachenko, Bilokur, Bohdanivka, Murashko, Ukrainian) — не виправляв;
typeVariety після заміни choice → pick = 5. l5 — readWordsPerScreen / maxReadWords / maxText «нетипово для сім'ї»: урок
читання з повним текстом 10 кл. (350–400 слів, П1407 с. 21) на 3 екрани ≤ 140 слів (межа профілю 190) — так задумано;
сім'я 10 кл. ще мала. Решта уроків без прапорців.

**Факти (≥ 2 джерела кожен):**
- Kateryna Bilokur: 7.12.1900, Bohdanivka (Полтавська губ.; тепер Бориспільський р-н Київської обл.), † 1961 (9 чи 10 червня — розбіжність, дату дня не беру); батьки не хотіли, щоб малювала; Миргородський технікум художньої кераміки не прийняв (1922–1923); весна 1940 — пісня по радіо, лист Оксані Петрусенко з малюнком на полотні; Петрусенко порадилась із друзями (Касіян, Тичина); 1940 — персональна виставка в Полтаві, 11 картин; найкраща колекція — Національний музей українського народного декоративного мистецтва (Kyiv). https://en.wikipedia.org/wiki/Kateryna_Bilokur , https://uk.wikipedia.org/wiki/Білокур_Катерина_Василівна
- Maria Prymachenko: 12.01.1909 н. ст. (30.12.1908 ст. ст. — той самий день), Bolotnia (Kyiv Oblast), † 18.08.1997; самоука, наївне / народне мистецтво; фантастичні тварини, квіти, натхнення — природа й народні казки (Blue Bull, 1947 — марка 2020); лютий 2022 — згорів Іванківський історико-краєзнавчий музей з її роботами (скільки врятовано — розбіжність, не пишу). https://en.wikipedia.org/wiki/Maria_Prymachenko , https://news.artnet.com/art-world/maria-prymachenko-ukraine-russia-2078634 , https://blogs.bl.uk/european/2018/02/maria-prymachenkos-fantastic-world-of-flowers-and-animals.html , https://www.encyclopediaofukraine.com/pages%5CP%5CR%5CPryimachenkoMariia.htm (WebSearch). Написання Maria — усталене англійське (en.wikipedia, Google Arts & Culture https://artsandculture.google.com/story/0AVxtPNdOnSXQA); КМУ № 55 дало б Mariia. Слова Пікассо — легенда, не беру.
- Oleksandr Murashko: 7.09.1875 Kyiv – 14.06.1919 Kyiv; навчався в Петербурзі (Академія мистецтв, 1894), Мюнхені (Ažbe), Париж; Girl in a Red Hat (1902–1903) — Національний художній музей України; Carousel (1906) — золота медаль у Мюнхені (рік медалі: en.wiki 1909, uk.wiki без року — рік не пишу), куплена для Будапешта. https://en.wikipedia.org/wiki/Oleksandr_Murashko , https://uk.wikipedia.org/wiki/Мурашко_Олександр_Олександрович , https://artsandculture.google.com/asset/girl-in-a-red-hat-oleksandr-murashko/rAEcWQLIHfkPPA , https://eclecticlight.co/2023/02/22/ukrainian-painters-oleksandr-murashko/
- John Constable 11.06.1776 – 31.03.1837; The Hay Wain, 1821, National Gallery NG1207, 130.2 × 185.4 см («nearly two metres wide»), хура в річці Stour (центр), у 1821 у Royal Academy не продали, золота медаль у Парижі (Salon 1824 / січень 1825 — тому «Later, in Paris»). https://en.wikipedia.org/wiki/The_Hay_Wain , https://www.nationalgallery.org.uk/paintings/NG1207 , https://www.nationalgallery.org.uk/about-us/press-and-media/press-releases-archive/discover-constable-and-the-hay-wain-2024
- J. M. W. Turner 23.04.1775 – 19.12.1851; The Fighting Temeraire — написана 1838, уперше показана в RA 1839 (NG датує 1839), NG524; парова буксирна шхуна тягне старий лінійний корабель Темзою на злам, захід сонця. https://en.wikipedia.org/wiki/The_Fighting_Temeraire , https://www.nationalgallery.org.uk/paintings/joseph-mallord-william-turner-the-fighting-temeraire
- 2005, BBC Radio 4 Today + National Gallery, «Greatest Painting in Britain»: 1 — The Fighting Temeraire, 2 — The Hay Wain. https://en.wikipedia.org/wiki/Greatest_Painting_in_Britain_Vote , https://www.currybet.net/cbet_blog/2005/09/turner-prize---the-greatest-pa.php , https://www.codart.nl/other/two-paintings-from-the-netherlands-in-top-ten-of-radio-4-greatest-painting-in-britain-vote/
- £20 Bank of England з Turner (автопортрет) і The Fighting Temeraire — в обігу з 20.02.2020. https://www.bankofengland.co.uk/news/2020/february/turner-20-enters-circulation , https://en.wikipedia.org/wiki/The_Fighting_Temeraire
- wain = старе слово для воза: https://en.wikipedia.org/wiki/The_Hay_Wain («a wood wain or large farm waggon»), https://en.wiktionary.org/wiki/wain

**Словники (curl CD):** наголос — portrait, landscape, abstract, gallery, exhibition (ˌek.sɪˈbɪʃ.ən → 3-й склад), masterpiece, watercolour, foreground, background, seascape, self-portrait (ˌselfˈpɔː.treɪt), canvas, museum, sculpture, artist, still life (ˌstɪl ˈlaɪf, plural still lifes), inspire — https://dictionary.cambridge.org/dictionary/english/<слово>. Рівні CD: landscape, gallery, exhibition, sculpture, guide B1; portrait, abstract, background, inspire B2; masterpiece C2 (з поясненням на екрані). Граматика: https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-continuous-i-had-been-working , https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-or-past-perfect-continuous

**Опори D-019 (неочевидні):** l2 #7 match дат — екран 3; l3 #9 match — екрани 3, 5, 7 (+ Constable з l2); l4 #9 multi (обидві форми) — екран 8; l5 #7–9 читання — відповідь на тому самому екрані; boss T1–T9 — `pre` на урок. «Sam … had been yawning» — частина 2, на тому ж екрані.

**Спірне / для верифікатора:** (1) «was painting for three hours» як хибний варіант (l4 #7, boss T5) — стандартне протиставлення, але перевірити; (2) l4 build — у ключі й «For an hour I had been waiting.» (граматично, хоч і книжно); (3) `Maria Prymachenko` vs КМУ № 55 «Mariia» — поруч герой Mariia (Kharkiv), обидва написання на одних екранах l3; (4) вигадані: картини Halyna, Mariia, Daryna; виставка фолк-арту в Poltava (l5 Final); Mr Hill, Priya, Sam, Megan.
Зображень немає (D-027 для eng не діє); пропозиція images-eng-e10s5 — в inbox.
