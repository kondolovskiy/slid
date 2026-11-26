---
claimed_from: todo
claimed_at: 2026-11-25T12:48:59.705Z
id: write-eng-g9-e9s8
type: write-section
subject: eng
grade: 9
section: e9s8
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e9s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Міста України і країн мови» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: великі міста; визначні місця й історичні пам'ятки — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Third Conditional: if + Past Perfect, would have (B1: Conditional — ‘would have’ + ‘if’ + past perfect, imagined past, often with regret) — нове; should have: regret (B1: Should — regret) — на вибір автора; повторення: one of the + superlative (e7s7), where (e9s5), Second Conditional (e8s8).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** «If I would have…» — помилка; ’d = had і would в одному реченні («If we’d left, we’d have…») — пояснити. Міста України — Lviv, Odesa, Kharkiv, Dnipro, Chernihiv (КМУ № 55); міста країн мови — Edinburgh, Manchester, Dublin, New York, Toronto, Sydney (на вибір), не London (e6s8, e7s7); факти, дати, статус ЮНЕСКО — з двох джерел. Руйнування війни — без деталей і не як матеріал вправи. `requires`: e6s7l2, e6s7l3, e6s8l2, e6s8l4, e5s7l6; після появи e8s5 — Past Perfect, e8s8 — Second Conditional (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s8.js`: `SLID.section("eng", { id: "e9s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s8, 2026-11-26.** `content/eng/g9-e9s8.js` — 7 уроків (6 + boss e9s8l7, значок e9s8boss), status draft. validate --section e9s8: 0 помилок, 0 попереджень. build-вправи перебрано всіма перестановками через SLID_LANG.check (scratchpad): приймаються лише порядки з `answer`, пастки `extra` не зараховуються; l4 — два порядки (every week в кінці / перед I would).

**Уроки:** l1 Big cities of Ukraine (Kharkiv, Lviv, Odesa; the largest / the second-largest / one of the + plural) · l2 Old towns and historic monuments (Rynok Square, Town Hall, Transfiguration Cathedral, Potemkin Stairs, Odesa Opera House, Derzhprom; Past Simple passive) · l3 Big cities in English-speaking countries (Edinburgh, Dublin, Sydney, Toronto, New York; capital ≠ largest) · l4 Which city would you like to live in? (First vs Second Conditional, reasons, could) · l5 Third Conditional (if + had + 3rd form, would have; ’d = had / would; кома після if-частини) · l6 A city guide (Lviv, Taras → Isla; on foot, start in, don’t miss, worth + -ing; Third Conditional у пораді) · l7 boss (9 завдань, pre на кожен урок).

**requires:** e5s7l6, e6s7l2, e6s7l3, e6s8l2, e6s8l4 (з задачі), e7s6l3 (First Conditional), e7s7l2 (passive by), e7s7l4 (one of the), e8s5l4 (Past Perfect), e8s8l5, e8s8l6 (Second Conditional). e9s5 (where) ще немає — where лише в текстах, не оцінюється; оркестратору додати після появи e9s5. should have (regret) — не взято (на вибір автора).

**Факти (кожен — 2 джерела; whc.unesco.org з контейнера не резолвиться, офіційні сайти sydneyoperahouse/nps/cntower/tcd/edinburghcastle — curl 000):**
- Kharkiv — the second-largest city in Ukraine, after Kyiv: https://en.wikipedia.org/wiki/Kharkiv ; https://uk.wikipedia.org/wiki/Харків («Друге за кількістю мешканців»).
- Lviv: historic centre on UNESCO list since 1998: https://en.wikipedia.org/wiki/Lviv ; https://uk.wikipedia.org/wiki/Історичний_центр_Львова (рішення 2 грудня 1998).
- Lviv: Rynok (Market) Square in the city centre, Town Hall in the centre of the square; tower open to visitors: https://en.wikipedia.org/wiki/Lviv , https://en.wikipedia.org/wiki/Lviv_Town_Hall («Since 2000, the Town Hall and its tower is open»); https://uk.wikipedia.org/wiki/Площа_Ринок_(Львів) («ратуша в центрі»), https://uk.wikipedia.org/wiki/Львівська_ратуша (оглядовий майданчик).
- Lviv Opera House on Svobody Avenue (28), opened 1900 (1900 — уже в e7s4): https://en.wikipedia.org/wiki/Lviv_Theatre_of_Opera_and_Ballet ; https://uk.wikipedia.org/wiki/Львівський_національний_академічний_театр_опери_та_балету_імені_Соломії_Крушельницької . «Svobody Avenue, the main street» — en Lviv («Svobody Prospekt which is Lviv's central street»); у uk-статті театру цього немає — **звірити верифікатору** (друге джерело для «main street»).
- Odesa — big port on the Black Sea: https://en.wikipedia.org/wiki/Odesa ; https://uk.wikipedia.org/wiki/Одеса («Найбільший морський торговий порт держави»). Дату заснування (1794 vs 1415) не беру — спірна.
- Odesa historic centre added to UNESCO list in 2023 (без «in Danger» — війна не згадується): https://en.wikipedia.org/wiki/Historic_Centre_of_Odesa ; https://uk.wikipedia.org/wiki/Історичний_центр_Одеси .
- Potemkin Stairs built 1837–1841, 192 steps: https://en.wikipedia.org/wiki/Potemkin_Stairs ; https://uk.wikipedia.org/wiki/Потьомкінські_сходи .
- Odesa Opera House built 1887, architects Fellner and Helmer: https://en.wikipedia.org/wiki/Odesa ; https://uk.wikipedia.org/wiki/Одеський_національний_академічний_театр_опери_та_балету .
- Chernihiv Transfiguration Cathedral started in the 1030s, one of the oldest churches in Ukraine: https://en.wikipedia.org/wiki/Chernihiv ; https://uk.wikipedia.org/wiki/Спасо-Преображенський_собор_(Чернігів) («найдавнішим собором України» разом із Софією Київською).
- Derzhprom built 1925–1928: https://en.wikipedia.org/wiki/Derzhprom ; https://uk.wikipedia.org/wiki/Держпром .
- Edinburgh Old and New Towns — UNESCO 1995; Castle on Castle Rock: https://en.wikipedia.org/wiki/Edinburgh , https://en.wikipedia.org/wiki/Edinburgh_Castle ; https://uk.wikipedia.org/wiki/Единбург , https://uk.wikipedia.org/wiki/Единбурзький_замок .
- Dublin on the River Liffey; Trinity College founded 1592 («oldest» не вжито): https://en.wikipedia.org/wiki/Dublin , https://en.wikipedia.org/wiki/Trinity_College_Dublin ; https://uk.wikipedia.org/wiki/Дублін , https://uk.wikipedia.org/wiki/Триніті-коледж_(Дублін) .
- Sydney Opera House opened 1973, Danish architect Jørn Utzon, UNESCO 2007: https://en.wikipedia.org/wiki/Sydney_Opera_House ; https://uk.wikipedia.org/wiki/Сіднейський_оперний_театр . «Sydney — largest city in Australia» НЕ вжито: en — most populous, uk — друге після Мельбурна (CONFLICT, не вирішую).
- Toronto — largest city in Canada; CN Tower finished 1976: https://en.wikipedia.org/wiki/Toronto , https://en.wikipedia.org/wiki/CN_Tower ; https://uk.wikipedia.org/wiki/Торонто , https://uk.wikipedia.org/wiki/Сі-Ен_Тауер .
- Statue of Liberty — gift from the people of France, since 1886 (dedicated 28 Oct 1886): https://en.wikipedia.org/wiki/Statue_of_Liberty ; https://uk.wikipedia.org/wiki/Статуя_Свободи .

**Форми й словник:** CD Grammar «Conditionals: if» (third conditional: if + past perfect, would/could/might/should have; «Not: If he would have stayed») — https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if ; кома після підрядного, що стоїть першим — CD Grammar «Punctuation» https://dictionary.cambridge.org/grammar/british-grammar/punctuation ; get — past participle got (US usually gotten) https://dictionary.cambridge.org/dictionary/english/get ; found (B2, «to bring something into existence») — пояснено в l3 https://dictionary.cambridge.org/dictionary/english/found ; worth doing (B1) https://dictionary.cambridge.org/dictionary/english/worth ; наголос: cathedral kəˈθiː.drəl, architect ˈɑː.kɪ.tekt, historic hɪˈstɒr.ɪk, harbour, port (B1), landmark (C1 — не вжито), heritage (C2 — лише в назві списку, з поясненням) — https://dictionary.cambridge.org/dictionary/english/<word>; monument — як у e7s7. Приклади CD не копійовано (у CD «If they had left earlier, they would have arrived on time» — у нас інша ситуація: потяг до Glasgow, «wouldn’t have missed the train»).

**Пастки, враховані:** could have / might have ніде не дистрактори (хибні — would без have, will have, would have в if-частині, Present/Past Simple); was/were поруч не стоять (l4 — лише were проти is); build — усі порядки в `answer`, кома в плитці if-частини відсікає порядок «головне + if».

**Опора (D-019):** l1 екр. 2 — intro (Mariia); l2 екр. 2 — міркування (1030s → майже 1000 років); l3 sort — intro (Ottawa, Toronto) + info «Edinburgh and Dublin», «Sydney, Toronto…»; Kyiv/Kharkiv — l1; l4 gaps «Golden Gate» — Київ з e6s7; l6 order — уривки 1–2.

**stats:** e9s8l3 longWordShare 0.158 (у межах профілю ≤ 0.18; «нетипово для сім'ї» z=2.3) — власні назви (Edinburgh, Australia, Toronto, UNESCO, Liberty, Transfiguration); e9s8l6 gradedShare 0.78 і readWordsPerScreen 48 — у межах профілю 7–9 (≤ 0.9, ≤ 50), z≈2.1 через два уривки тексту для читання; лишаю до style-sync.

**Нові деталі героїв:** Emma з мамою на Великдень у гостях в Isla (Edinburgh), не купили квитків у замок, пропустили потяг до Glasgow; Oksana в Odesa в липні — дощовий день удома з дядьком Іваном (його старі фото Одеси), не взяла камеру на Потьомкінські сходи; Taras — путівник Lviv для Isla, піднімався на вежу ратуші; кузина Тараса Marta торік не потрапила на балет (не купила квитків онлайн); Halyna хотіла б жити в Lviv; Liam не хотів би жити у великому місті; Isla планує поїздку до Ukraine «next summer».
