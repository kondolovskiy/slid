---
claimed_from: todo
claimed_at: 2026-11-26T10:52:27.745Z
id: write-eng-g11-e11s6
type: write-section
subject: eng
grade: 11
section: e11s6
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e11s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Travel and tourism» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Подорож — подорож Україною та країнами виучуваної мови; види туризму — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21.
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): common linking words for chronological sequence; advanced adverbials of time: beforehand, afterwards (с. 25) — повт. first, then, after that, finally (e6s3l3, e9s9 l5); нове: at first, eventually, in the end, meanwhile, beforehand, afterwards; prepositional vs. phrasal verbs (separable/inseparable) (с. 25) — розширення e10s8 (місце додатка): look after it, get on the bus, look forward to + -ing (у дизайні §4.7 не розподілено; поставлено сюди — звіт §4 п. 5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: at first ≠ first (CD Grammar «At first or first?»), in the end ≠ at the end, eventually ≠ укр. «евентуально» (false friend); afterwards (BrE) — afterward (AmE): звірити, чи рушій приймає як правопис (CONTENT_SCHEMA §4.1), інакше обидва в ключі; separable — обидва порядки з іменником у `build`; three-part verbs — inseparable. Види туризму (active, cultural, green / eco-, rural) — за словником. Україна: Карпати, Львів, Одеса тощо — факти з джерела; без закликів їхати в небезпечні регіони. Не дублювати e6s5 (підготовка до подорожі) і e9s8 (міста). `requires`: e6s3l3, e6s5l1; e10s8 (id — після написання); 7–9 — e9s9 l5. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s6.js`: `SLID.section("eng", { id: "e11s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e11s6, 2026-11-26.** `content/eng/g11-e11s6.js` — draft, 7 уроків (6 + boss `e11s6l7`, значок `e11s6boss` «Seasoned Traveller»). `validate --section e11s6` — 0 помилок, 0 попереджень; stats — прапорців для e11s6 немає (l5 typeVariety виправлено додатковим multi). Build не запускав. Playtest — лише CI (Python-playwright у контейнері немає — не перевіряв). Усі `build` перебрано через `SLID_LANG.check` (усі перестановки з extra): приймаються лише порядки з `answer`.

**Уроки:** l1 Kinds of tourism (active, cultural, ecotourism / green, rural; guesthouse, accommodation, destination); l2 Travelling around Ukraine — читання 3 екрани (≈ 290 слів: Chernivtsi, Sofiyivka, Synevyr + порада безпеки); l3 travel verbs (set off, see off, get on/off, get into / out of, pick up, drop off, check in/out, look around); l4 separable (pick it up, look it up, see me off) vs inseparable prepositional (look after it, get on it, look around it) і three-part (look forward to + -ing, run out of, get on with); l5 First / At first, then, meanwhile, eventually, finally, in the end / at the end of; l6 beforehand, afterwards, before/after + noun, later — читання 3 екрани (≈ 400 слів, обсяг П1407 с. 21); l7 boss (9 завдань, `pre` на всі уроки).
**requires:** e6s3l3, e6s5l1, e9s9l5, e10s4l6, e10s8l3, e10s8l4 (усі існують; e10s8 — draft).

**Форми й граматика (CD / CD Grammar):**
- Prepositional vs phrasal: CD Grammar «Phrasal verbs and multi-word verbs» — get on, get off, look after, look forward to — prepositional (object after); phrasal — noun before/after particle, pronoun before particle; phrasal-prepositional (three parts: catch up with, get on with, look forward to, put up with) — https://dictionary.cambridge.org/grammar/british-grammar/phrasal-verbs-and-multi-word-verbs
- Заголовки CD (позиція додатка): pick someone/something up, drop someone/something off, see someone off, look something up, look after someone/something, look around (somewhere/something) (UK also look round), get on (something) «to go onto a bus, train, aircraft, or boat» (A2), get off (something), come across something, look forward to something [+ -ing], run out (of) — https://dictionary.cambridge.org/dictionary/english/pick-up , …/drop-off , …/see-off , …/look-up , …/look-after , …/look-around , …/get-on , …/get-off , …/come-across , …/look-forward-to , …/run-out , …/check-in (report your arrival at an airport or hotel), …/check-out (leave a hotel after paying), …/set-off (start on a trip).
- CD get off також «to leave a place, usually in order to start a journey» — тож `word` на set off не робив (друга відповідь); у gaps «got off from Lviv» — хибний варіант (з from неприродно).
- At first vs first: CD Grammar «First, firstly or at first?» — «At first means ‘at the beginning’… when we make contrasts»; «Not: At first, the sodium chloride…» (кроки — First) — https://dictionary.cambridge.org/grammar/british-grammar/first-firstly-or-at-first
- Eventually: CD Grammar «Eventually» — «in the end… after a long time… Eventually does not mean ‘perhaps/possibly’» — https://dictionary.cambridge.org/grammar/british-grammar/eventually ; CD eventually B2.
- In the end: CD Grammar «Finally, at last, lastly or in the end?» — https://dictionary.cambridge.org/grammar/british-grammar/finally-at-last-lastly-or-in-the-end ; CD in the end B1; at the end of — CD end. «in the end of» — style/eng-banned.txt (лише в хибних варіантах).
- After / afterwards: CD Grammar «After, afterwards» — after як прислівник можливий («afterwards is more common») → bare after ніде не є хибним у позиції прислівника; хибне лише «afterwards + noun» — https://dictionary.cambridge.org/grammar/british-grammar/after-afterwards ; CD afterwards «mainly UK (US usually afterward)», beforehand «earlier (than a particular time)», meanwhile B1. **afterward у SPELL app/lang.js немає** → у `word` з afterwards (якщо буде) треба класти обидва; у цьому розділі `word` на afterwards немає (l6 `word` — beforehand / in advance / first).
- Лексика: ecotourism, agritourism, sightseeing (A2), guesthouse «mainly UK a small, cheap hotel», accommodation (B1, mainly UK uncountable), destination (B1), grotto «a small cave», trail (B2), waterfall (B1), residence — CD https://dictionary.cambridge.org/dictionary/english/<слово>; OALD ecotourism. «green tourism» у словниках окремо немає — подано як синонім ecotourism (композиційно, CD green «relating to the protection of the environment»); **сумнівне**: в Україні «зелений туризм» часто = сільський; тут rural tourism — окремо.
- Наголос (`stress`, `<u>`): des|ti|+na|tion, ac|com|mo|+da|tion, +cul|tur|al, +guest|house, +sight|see|ing, +ru|ral, e+ven|tu|al|ly, +mean|while, be+fore|hand, +af|ter|wards, +her|i|tage, +res|i|dence, +wa|ter|fall, +grot|to — за транскрипціями CD.

**Факти (≥ 2 джерела; FACT в inbox):**
- Residence of Bukovinian and Dalmatian Metropolitans (Chernivtsi): збудовано 1864–1882, архітектор Josef Hlávka (чеський), UNESCO 2011, нині — Chernivtsi University — https://en.wikipedia.org/wiki/Residence_of_Bukovinian_and_Dalmatian_Metropolitans ; https://www.chnu.edu.ua/en/culture/university-and-unesco/unesco-world-heritage/ ; https://risu.org.ua/en/index/all_news/culture/inheritance/43090/ (whc.unesco.org з контейнера не резолвиться).
- Sofiyivka (Uman): почав створювати Count Stanisław Szczęsny Potocki у 1796 р., названо на честь дружини Софії; ставки, водоспади, гроти, скелі зроблено штучно; національний дендрологічний парк — https://en.wikipedia.org/wiki/Sofiyivka_Park ; https://www.encyclopediaofukraine.com/pages%5CS%5CO%5CSofiivkaPark.htm (через пошук; хост з контейнера не резолвиться) ; https://discover.ua/en/locations/nacionalniy-dendrologichniy-park-sofiyivka . Дата дарування (1800 / 1802) у джерелах різна — не вживав; «Acheron» (підземна річка) — другим джерелом не підтверджено, не вживав.
- Lake Synevyr: найбільше озеро Українських Карпат, Закарпаття, НПП «Синевир» — https://en.wikipedia.org/wiki/Lake_Synevyr ; https://tsn.ua/osoblyva_ukraina/sinevir-naykrasivishe-ozero-ukrayini-306026.html ; https://zaxid.net/ozero_sinevir_n1374219 . Висота (989 / 998 м), площа й рік парку (1974 / 1989) у джерелах різняться — не вживав.
- Lake District: найбільший національний парк Англії, UNESCO 2017 (cultural landscape), Scafell Pike — найвища гора Англії, 978 м, Windermere — найбільше озеро Англії — https://en.wikipedia.org/wiki/Lake_District ; https://en.wikipedia.org/wiki/Scafell_Pike ; https://www.lakedistrict.gov.uk/learning/factsandfigures (через пошук; хост не резолвиться) ; https://getoutside.ordnancesurvey.co.uk/nationalparks/lake-district-national-park
- Безпека: цивільних рейсів з України немає (EASA CZIB 2022-01, inbox verifier-e9s7) — Andrii їде потягом до Poland і летить звідти; аеропорти — лише в UK; у статті l2 порада перевірити безпеку й знати найближче укриття; заклику їхати в небезпечні регіони немає (місця — західна й центральна Україна).

**Опора завдань (D-019):** boss Task 9 — дистрактор Ben Nevis знайомий з попередніх класів (e5–e9), правильне — з l6 ек. 5; l2 hyp — Svitiaz з e10s4l6; l1 reading — відповідь на тому ж екрані. l5 `word` — у ключі eventually, finally, at last, in the end, later (усі граматичні). l6 `word` — beforehand, in advance, first.

**Спірне / для верифікатора:** (1) «green tourism» = ecotourism (див. вище); (2) at the end без of іноді правильне — хибним дано лише «In the end of»; (3) «get on with» у l4 лише в поясненні, не оцінюється; (4) l2 текст ≈ 290 слів (обсяг 400–450 — у l6); (5) «Mrs Popovych» — нова героїня.
