---
claimed_from: todo
claimed_at: 2026-11-25T12:07:14.516Z
id: write-eng-g7-e7s4
type: write-section
subject: eng
grade: 7
section: e7s4
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e7s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Кіно і театр» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: відвідування театру, кінотеатру; жанри; елементи інтер'єру театру — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): -ed / -ing adjectives: bored / boring, interested / interesting (**наш**: в інвентарі B1 окремої позиції немає, лексика B1); comparatives with much, a bit, even (B1: Adjectives — comparatives) — розширення e5s5l3–l4; (not) as … as, the same as (B1: Clause — comparatives) — розширення; enough і too + to-infinitive: old enough to watch, too scary to watch (B1: Adjectives — modifying) — розширення e6s2l6; Could: suggestions — We could see a play; Why don’t we…? (B1: Could — suggestions) — нове; повторення: Let’s… (e5s6l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** film і cinema (BrE; movie — AmE, не пастка); box office — CD; **the stalls у CD знайдено лише як «місця в церкві»** — театральне значення без словника не вводити; interval (перерва у виставі) — звірити в CD/OALD перед уживанням. bored / boring: «I was boring» граматично правильне з іншим змістом — контекст має однозначно вимагати -ed. Відгук про фільм — с. 31 («детально передає зміст … фільму і повідомляє про своє ставлення»); не переказувати сюжети фільмів під охороною дослівно; вікові позначки фільмів — лише з джерела. Україна: театри й фільми — факти з двох джерел. Функції: пропонувати, приймати, відхиляти; надавати оцінку; висловлювати враження. `requires`: e5s5l3, e5s5l4, e6s2l6, e6s1l5, e5s6l5, e4s3l5. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s4.js`: `SLID.section("eng", { id: "e7s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e7s4, 2026-11-25. Файл content/eng/g7-e7s4.js, 7 уроків (6 + boss), status draft.
- e7s4l1 «Comedy, cartoon or adventure film? Film genres» (9 екр.); e7s4l2 «At the theatre: the stage, the seats, the box office» (9);
  e7s4l3 «We could see a play! Suggestions» (10); e7s4l4 «Bored or boring? Interested or interesting?» (9);
  e7s4l5 «Much better, a bit longer, not as funny as the book» (11); e7s4l6 «Old enough to watch it? A film review» (10);
  e7s4l7 boss «A weekend of films and plays» (6 завдань, `pre` на l1–l6). Значок e7s4boss «Film critic».
- `requires` (у файлі): e5s5l3, e5s5l4, e6s2l6, e6s1l5, e5s6l5, e4s3l5 — усі існують.
- validate --section e7s4: 0 помилок, 0 попереджень. stats --subject eng: прапорців «нетипово» для e7s4l1–l7 немає.
- Діалоги — репліками в body + gaps / choice (D-056), без type "dialog". Звуку немає, «Listen…» ніде.

**Джерела форм (Cambridge Dictionary, curl 2026-11-25):**
- box office — «the place in a cinema or theatre where tickets are sold» — https://dictionary.cambridge.org/dictionary/english/box-office
- interval — B1, «UK (US intermission) a short period between the parts of a performance» — https://dictionary.cambridge.org/dictionary/english/interval
- stage (THEATRE) A2; curtain (у театрі — «the large screen of heavy material in a theatre»); audience B1 — …/stage, …/curtain, …/audience
- seat, row (B1, «seats in the front row of the theatre») — …/seat, …/row
- comedy B1 /ˈkɒm.ə.di/; cartoon A2 (FILM: «a TV programme or short film») /kɑːˈtuːn/; horror film B1 UK (also mainly US horror movie) /ˈhɒr.ə ˌfɪlm/; documentary B1; science fiction B1 /ˌsaɪ.əns ˈfɪk.ʃən/; adventure A2 /ədˈven.tʃər/; action film «mainly UK» (не вжито) — …/comedy, …/cartoon, …/horror-film, …/documentary, …/science-fiction, …/adventure, …/action-film
- cinema «mainly UK (US usually movie theater)»; film/movie — …/cinema, …/film
- boring A1, bored A1, interested/interesting, excited/exciting, tiring B1, scary B1 — …/boring, …/bored, …/tiring, …/scary
- could (SUGGESTION) B1 «used for making a suggestion» — https://dictionary.cambridge.org/dictionary/english/could; Why don’t we…? — CD Grammar «Suggestions» https://dictionary.cambridge.org/grammar/british-grammar/suggestions
- enough after adjective + to-inf.; too + adj. + to-inf. — https://dictionary.cambridge.org/dictionary/english/enough, CD Grammar «Too» https://dictionary.cambridge.org/grammar/british-grammar/too
- Наголос у stress: +com|e|dy, car|+toon, ad|+ven|ture, +hor|ror, +au|di|ence (/ˈɔː.di.əns/), +in|ter|val (/ˈɪn.tə.vəl/), +cur|tain (/ˈkɜː.tən/) — CD.

**Факт про Україну:** «The Lviv Opera House opened in 1900» (e7s4l2 intro, outro) — en.wikipedia «Lviv Theatre of Opera and Ballet» («opened on 4 October 1900») https://en.wikipedia.org/wiki/Lviv_Theatre_of_Opera_and_Ballet; Center for Urban History, Lviv Interactive «Opera house» (будівля 1897–1900, відкрито 4.10.1900) https://lia.lvivcenter.org/en/objects/opera-house , https://lia.lvivcenter.org/en/events/opening-city-theater . Назву подано як «the Lviv Opera House» (поширена англ. назва; офіційна — Solomiya Krushelnytska Lviv National Academic Theatre of Opera and Ballet).

**Спірне / для верифікатора:**
- the stalls не вжито (CD — лише церква). interval — звірено (CD B1 UK).
- Вікові обмеження — лише вигадані афіші вигаданих фільмів («For people aged 12 and over»), без BBFC/справжніх позначок.
- l1 info згадує AmE *movie* як інформацію («Americans often say movie») — не пастка, не варіант.
- bored / boring: «Andrii was [boring]» (l4 pick) граматично можливе, але контекст «because he doesn’t like cartoons» вимагає -ed; fbText пояснює інший зміст. Те саме в gaps l4 і boss T4 — причина в реченні.
- much / a bit — завжди з числами (хвилини, ціни), щоб не було другої відповіді; «a lot better» як варіант не дано.
- l5 build «The film isn’t as good as the book.»: обмін «The film» ↔ «the book» дає граматичне речення з протилежним змістом — відсікає body («Bohdan liked the book … more»).
- Опори D-019: l2 ticket choice — екран 5 (квиток на екрані); l4 multi — info екр. 3 (interested in, excited about); l6 order — info «How to write a film review» (екр. 7).
- Вік героїв: Oksana 13, Emma 13, Tom 11 (канон: 10 / 10 / 8 у 4 кл.); Sofiia (10) і Zlata — без віку в оцінюваних місцях. Lviv: Taras, Zlata, Ostap — Lviv Opera House; Polina — Kharkiv (подруга Mariia).
- Функції: пропонувати / приймати / відхиляти — l3; оцінка й враження — l4, l6 (відгук).
