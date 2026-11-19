---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.966Z
id: write-eng-g5-e5s10
type: write-section
subject: eng
grade: 5
section: e5s10
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s10
created: 2026-11-19
source: design-eng
---
# Написати розділ «Україна і країни виучуваної мови» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: загальні відомості про Україну; загальні відомості про країни виучуваної мови — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): comparatives and superlatives; the + superlatives. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** склад Великої Британії — England, Scotland, Wales and Northern Ireland; як називати частини (country / nation / province) — лише за офіційним джерелом у facts/eng.md. `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

- **Специфіка (verifier plan-eng-g5):** «fact file» немає в CD/OALD — краще «Facts about my country» (Р3).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s10.js`: `SLID.section("eng", { id: "e5s10", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s10` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
writer-e5s10, 2026-11-19. Файл: content/eng/g5-e5s10.js, 7 уроків (6 + boss), status draft. img/ не створював (match — лише текстові пари).

**Уроки:**
1. e5s10l1 «Ukraine on the map» — choice(hyp), choice, match, gaps, word, choice(read). north/south/east/west, north-east, in the west of, on + river/sea.
2. e5s10l2 «Where do people speak English?» — choice(hyp), match, gaps, stress, word(keepCase), pick, choice(read). Країни ↔ столиці, nationalities, Ukraine без the.
3. e5s10l3 «The UK: England, Scotland, Wales and Northern Ireland» — choice(hyp), multi, gaps, choice, word, pick, choice(read). Склад UK — лише перелік (facts К1), столиці, English ≠ British.
4. e5s10l4 «Bigger or smaller? Comparing countries» — choice(hyp), gaps, choice, word, build, gaps(Final). -er / more + than, better / worse, because.
5. e5s10l5 «The longest river, the highest mountain» — choice(hyp), gaps, choice, word, pick, build, gaps(Final). the -est / the most / the best, in + place (не of), one of the + -est + plural.
6. e5s10l6 «Facts about my country» (у plan.js — «A fact file about my country»; за Р3 plan-eng-g5 «fact file» немає в CD/OALD) — текст 3 уривки (choice, multi, choice), info because, choice, gaps, build, gaps(Final).
7. e5s10l7 boss «Our world quiz» — gaps, match, choice, word, gaps, choice (pre: l1…l6).

**requires:** e4s7l3 (столиці), e4s7l4 (the biggest), e4s6l4 (Hoverla, Ben Nevis, Dnipro, Thames), e4s6l5 (comparatives) — за plan-eng-g5 §6. **e5s5 (comparatives 5 кл.) ще немає** — оркестратору додати в requires урок e5s5 «Hotter, colder…» / «More beautiful, better, worse», коли з'явиться (plan-eng-g5 §6: e5s10 → e5s5).

**Факти (два джерела):**
- Kyiv — capital, on the Dnipro; Hoverla 2,061 m, найвища в Україні; the Dnipro — найдовша річка в Україні; Ben Nevis 1,345 m — найвища в UK; London — найбільше місто UK; Kyiv — найбільше місто України; площі Ukraine ≈ 600,000 km², UK ≈ 240,000 km²; Hoverla in the Carpathians — уже verified (reports/verify/e4s6.md, e4s7.md; inbox verifier-e4s6/e4s7).
- Ukraine — «one of the biggest countries in Europe»: en.wikipedia «the second-largest country in Europe after Russia» — https://en.wikipedia.org/wiki/Ukraine; uk.wikipedia «Найбільша за площею країна серед повністю розташованих у Європі» — https://uk.wikipedia.org/wiki/Україна. Офіційна мова — Ukrainian: en.wikipedia (там само); uk.wikipedia infobox official_languages = українська.
- Прапор синій і жовтий: en.wikipedia «horizontal bands of blue and yellow» — https://en.wikipedia.org/wiki/Flag_of_Ukraine; uk.wikipedia «Синьо-жовтий біколор» — https://uk.wikipedia.org/wiki/Прапор_України.
- Lviv — in the west: en.wikipedia «largest city in the western part of the country» — https://en.wikipedia.org/wiki/Lviv; uk.wikipedia «місто на заході України» — https://uk.wikipedia.org/wiki/Львів.
- Kharkiv — in the north-east: en.wikipedia «in the northeast of the country» — https://en.wikipedia.org/wiki/Kharkiv; uk.wikipedia «на північному сході України» — https://uk.wikipedia.org/wiki/Харків.
- Odesa — in the south-west, on the Black Sea: en.wikipedia «in the south-west of the country, on the northwestern shore of the Black Sea» — https://en.wikipedia.org/wiki/Odesa; uk.wikipedia «на узбережжі Чорного моря» — https://uk.wikipedia.org/wiki/Одеса; CD «the Black Sea port of Odesa» — https://dictionary.cambridge.org/dictionary/english/odesa. **«south-west» — лише en.wikipedia** (uk.wikipedia напрямку в анотації не дає); оцінюється лише «on the Black Sea» (l1 match, Final, boss T1), south-west — лише в info.
- Chernihiv — in the north: en.wikipedia «a city … in northern Ukraine» — https://en.wikipedia.org/wiki/Chernihiv; **друге джерело не відкрив** (uk.wikipedia: анотація без напрямку; ЕСУ не шукав) — потребує перевірки верифікатором (l1 match, word).
- Ukraine on the Black Sea and the Sea of Azov in the south: en.wikipedia Ukraine; uk.wikipedia Україна «На півдні омивається Чорним та Азовським морями».
- Столиці: Dublin — CD «the capital city of Ireland» https://dictionary.cambridge.org/dictionary/english/dublin + en.wikipedia https://en.wikipedia.org/wiki/Dublin; Wellington — CD «the capital city of New Zealand» https://dictionary.cambridge.org/dictionary/english/wellington + en.wikipedia https://en.wikipedia.org/wiki/Wellington; Edinburgh — CD «the capital city of Scotland» https://dictionary.cambridge.org/dictionary/english/edinburgh + en.wikipedia; Cardiff — CD «the capital city of Wales» https://dictionary.cambridge.org/dictionary/english/cardiff + en.wikipedia «capital and largest city of Wales»; Belfast — en.wikipedia «the capital, largest city and main port of Northern Ireland» https://en.wikipedia.org/wiki/Belfast + uk.wikipedia «столиця та найбільше місто Північної Ірландії» https://uk.wikipedia.org/wiki/Белфаст (у CD статті немає); London — capital of England and the UK (CD united-kingdom / london, e4s7). Washington, DC, Ottawa, Canberra — verified (e4s7).
- Склад UK: CD «the island country in Europe that consists of England, Scotland, Wales, and Northern Ireland» — https://dictionary.cambridge.org/dictionary/english/united-kingdom (facts К1). Родового слова (country / nation) у тексті немає. Примітка: CD England / Scotland / Wales — «a country that is part of the United Kingdom», для Northern Ireland такого визначення немає — тому й не узагальнюю.
- Англійська — у UK, Ireland, the USA, Canada, Australia, New Zealand: en.wikipedia English-speaking world («core Anglosphere … the USA, the UK, Canada, Australia and New Zealand»; Irish English) — https://en.wikipedia.org/wiki/English-speaking_world; Ireland — official languages Irish, English (en.wikipedia Republic of Ireland, infobox) — https://en.wikipedia.org/wiki/Republic_of_Ireland. Canada — English and French: en.wikipedia infobox https://en.wikipedia.org/wiki/Canada + uk.wikipedia infobox «англійська мова, французька мова» https://uk.wikipedia.org/wiki/Канада.

**Форми й норма:**
- English ≠ British: OALD english_2 «the English refer only to people from England… The adjective for people from the United Kingdom is British» — https://www.oxfordlearnersdictionaries.com/definition/english/english_2. Welsh — CD «relating to Wales, its people, or its language» https://dictionary.cambridge.org/dictionary/english/welsh; Scottish — CD https://dictionary.cambridge.org/dictionary/english/scottish. Northern Ireland: nationality-слова не даю (Irish / British / Northern Irish — чутливо).
- north-east, south-west (з дефісом), «in the west of the country» (A1): OALD north-east_3, west_1 — https://www.oxfordlearnersdictionaries.com/definition/english/north-east_3, https://www.oxfordlearnersdictionaries.com/definition/english/west_1.
- Superlatives: CD Grammar «Comparison: adjectives» — «Not: … the most biggest», «good, better, best», «bad, worse, worst», -ful / 3+ складів → more / most, «We don’t normally use of before a singular name of a place… Not: the oldest building of the city», «one of the biggest in Turkey» — https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-and-most. «the» перед superlative без іменника можна опустити (там само) — тому всі пропуски з the мають іменник після (river, city, mountain).
- Наголос (CD UK): U<u>kraine</u>, U<u>krai</u>nian /juːˈkreɪ.ni.ən/, <u>Brit</u>ish, <u>I</u>rish /ˈaɪə.rɪʃ/, A<u>mer</u>ican, Ca<u>na</u>dian, Aus<u>tra</u>lian, <u>Eng</u>land, <u>Scot</u>land, <u>Ed</u>inburgh /ˈed.ɪn.bər.ə/, <u>Car</u>diff, <u>Dub</u>lin, <u>Wel</u>lington — https://dictionary.cambridge.org/dictionary/english/<слово>. Друге джерело (OALD/Wiktionary) для назв не звіряв. Belfast — UK-наголос у словниках двоякий, тож без `<u>`.

**Перевірка відповідей:** build і word прогнано через app/lang.js (vm; скрипт у scratchpad): l4 build — приймає лише 3 порядки з answer (хибне «Ukraine is smaller than the UK» відсікає умова «Make a true sentence»); l5 build — 6 порядків; l6 build — 4. word: keepCase у l2 (australian → неправильно, fbBad про велику літеру); l5 — highest / tallest; l3 «He’s ___ and British.» відсікає British. Друга правильна: l2 pick «[the Ukraine]» (група), хибна група [!the UK].

**Спірне / для верифікатора:**
- Chernihiv «in the north» — одне джерело (див. вище).
- l4 build: питальні порядки прийнято, а хибне розповідне — ні (умова «true sentence»).
- l4 Final: «Summer is better for a visit because there is no school!» — думка героїні, не факт.
- l1 info: стрілки ↑ ↓ → ← (U+2191…) замість карти: власної карти України немає; validate не попереджає.
- stats: e5s10l2 longWordShare 0.201 (назви національностей — Ukrainian, American, Canadian, Australian — сам предмет уроку; як e4s7l3); e5s10l6 gradedShare / readWordsPerScreen — «нетипово для сім'ї» (урок читання: текст на 3 екрани), у межах профілю.
- Назва l6 відрізняється від plan.js («A fact file about my country») — куратору плану синхронізувати.
