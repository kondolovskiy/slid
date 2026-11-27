# Верифікація: пул pe6s7 (англійська, 6 кл., розділ e6s7 «Kyiv, the capital of Ukraine»)

Верифікатор: verifier-pe6s7-pe6s8, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s7.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s7.md. Опора: уроки `content/eng/g6-e6s7.js` (verified, reports/verify/e6s7.md). Еталон оформлення: reports/verify/pe5s8.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, вправ без опори, хибних фактів і збігів з опублікованими текстами я не знайшов. Зробив 2 правки (a45, a59). Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. Сторінки (с. 20 — функції, с. 21 — тема «Україна — Київ», limiting adjectives, superlatives, determiners; с. 22 — Passives Past simple, Present perfect experiences, Past simple) PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 — як у facts/eng.md) і прочитав `pdftotext`. Що на сторінках дослівно: с. 20 — «описувати, розповідати», «запитувати та надавати»; с. 21 — «Україна — Київ, визначні місця», «Position: limiting adjectives (main, only)», «Comparatives and superlatives», «Articles: the + specifying adjectives, the + superlatives»; с. 22 — «Passives — Past simple affirmative», «Present perfect simple: … experiences up to now». Посилання `src` на с. 20 (func), с. 21 (vocab, read, cult, phon, gram l1–l2) і с. 22 (gram, write l3–l6) відповідають цим сторінкам ✅.

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| Kyiv на обох берегах Dnipro; стара частина — на західному березі, на пагорбах (a08–a12) | en.wikipedia «straddles both banks of the Dnieper», «western part… on wooded hills»: https://en.wikipedia.org/wiki/Kyiv; Dnieper «Kyiv… Dnieper in Kyiv»: https://en.wikipedia.org/wiki/Dnieper | ✅ |
| Kyiv — the biggest city in Ukraine (a12) | https://en.wikipedia.org/wiki/Kyiv (2 952 301, 2022 — найбільше місто); урок e6s7l1 (verified) | ✅ |
| Khreshchatyk — the main street; Independence Square on Khreshchatyk, the central square (a13, a20–a22, a53) | https://en.wikipedia.org/wiki/Kyiv «the main street of the city»; https://en.wikipedia.org/wiki/Maidan_Nezalezhnosti «located on Khreshchatyk Street», «the central town square of Kyiv» | ✅ |
| St Sophia’s Cathedral — 11th century, «about a thousand years old» (a28–a30, a33, a54) | https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv «built in Europe during the 11th century»; reports/verify/e6s7.md | ✅ |
| St Andrew’s Church — 18th century (a28–a30) | https://en.wikipedia.org/wiki/St_Andrew%27s_Church,_Kyiv «built between 1747 and 1754»; reports/verify/e6s7.md | ✅ |
| Kyiv Funicular — opened 1905 (a27, a28, a30, a32, a33) | https://en.wikipedia.org/wiki/Kyiv_Funicular «first opened to the public on 20 May… 1905»; https://uk.wikipedia.org/wiki/Київський_фунікулер «урочисто було відкрито 7 (20) травня 1905 року» | ✅ |
| Kyiv Metro — opened 1960 (a26, a28, a31, a33, a34, a53) | https://en.wikipedia.org/wiki/Kyiv_Metro «opened on 6 November 1960»; https://uk.wikipedia.org/wiki/Київський_метрополітен «6 листопада 1960 року» | ✅ |
| Golden Gate: today’s gate built again in 1982 (a54, a56, a58, a59) | https://en.wikipedia.org/wiki/Golden_Gate,_Kyiv «rebuilt… completely» 1982, «the main gate»; WebSearch «Golden Gate Kyiv 1982» (wikiwand, structurae) | ✅ |
| London is on the Thames (a04) | https://en.wikipedia.org/wiki/River_Thames (London серед міст на річці); урок e4s6 | ✅ |
| «Lots of new bridges were built over the Dnipro» (a31) | загальне твердження без дати; мости через Дніпро в Києві — https://en.wikipedia.org/wiki/Kyiv | ✅ |
| «Take the metro to Khreshchatyk» (a53) | станція «Khreshchatyk» — https://en.wikipedia.org/wiki/Kyiv_Metro (лінія M1) | ✅ |

Інші твердження стосуються героїв (вигадані, узгоджені з каноном glossary/eng-heroes.md: Taras у Kyiv улітку з татом, Emma в Kyiv узимку, у Emma брат Tom). Суперечностей не знайшов.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `gaps`/`pick`/`stress`: `SLID_LANG.solution` зараховується. `word`: кожен ключ зараховується, кінцевого `.!?` немає. `build`: `SLID_LANG.check(…, "en")` по всіх перестановках усіх підмножин tiles + extra (node + vm + app/lang.js; скрипт у scratchpad `verify-pe6s7-8/chk.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | bridge; hills | = | l1 info #3 | ні | ✅ |
| a02 word | side | = (+ bank) | l1 info #3 | bank у ключі; part — неприродно | ✅ |
| a03 pick | [over] | = | l1 info #3 (through / over) | «over it» про мости правильне | ✅ |
| a04 gaps | in; the Thames | = | l1 info #3 (the Thames) | ні | ✅ |
| a05 word | the | = | l1 info #3 | «Write a or the» відсікає інше | ✅ |
| a06 pick | [the] Ukraine | = | l1 info #3 | ні | ✅ |
| a07 choice | a bridge | = | текст | ні | ✅ |
| a08 gaps | west; over | = | текст + l1 #3 | ні | ✅ |
| a09 multi | [0,1] | = | текст («other side») + l1 #3 (west) | ні | ✅ |
| a10 gaps | on; through | = | l1 info #3 | ні | ✅ |
| a11 build | Kyiv is on both sides of the Dnipro. | = | l1 info #3 | приймається лише ключ | ✅ |
| a12 gaps | the biggest; The Dnipro; west | = | l1 #3, l1 фінал; e5s10l5 | ні | ✅ |
| a13 gaps | the only; the most beautiful | = | l2 info #5; e5s10l5 (requires) | ні | ✅ |
| a14 build | Our school is on the main street. | = | l2 info #5 | лише ключ | ✅ |
| a15 choice | It’s the only map in the classroom. | = | l2 info #5 | ні | ✅ |
| a16–a18 stress | <u>sight</u>seeing, <u>vis</u>itor(s), ca<u>the</u>dral(s), mu<u>se</u>um(s) | = | l2 info #3 `<u>`; множина наголосу не змінює | — | ✅ (словники — §4) |
| a19 choice | near Independence Square | = | текст | ні | ✅ |
| a20 gaps | visitors; Independence Square | = | текст | ні | ✅ |
| a21 multi | [0,1] | = | текст | ні | ✅ |
| a22 gaps | the main; visitors | = | l2 info #3, #5 | ні | ✅ |
| a23 word | visitors | = (+ tourists) | l2 info #3 | people відсікає умова «the word for people who…» | ✅ |
| a24 build | It’s the only museum in my town. | = | l2 info #5 | лише ключ | ✅ |
| a25 gaps | were; was | = | l3 info #3 | ні | ✅ |
| a26 word | opened | = | l3 info #3 | «Use the verb open» | ✅ |
| a27 pick | [was] | = | l3 info #3 | ні | ✅ |
| a28 gaps | 11th; 1960 | = | l3 info #4 | ні | ✅ |
| a29 choice | St Sophia’s Cathedral | = | l3 info #4 | ні | ✅ |
| a30 multi | [0,1] | = | l3 info #4 | ні | ✅ |
| a31 gaps | was; were | = | l3 info #3 | ні | ✅ |
| a32 build | The Kyiv Funicular was opened in 1905. | = | l3 info #3–4 | лише ключ; «in the 1905» не приймається | ✅ |
| a33 gaps | was; were; in | = | l3 info #3–4 | ні | ✅ |
| a34 choice | It was opened in 1960. | = | l3 info #3–4 | ні | ✅ |
| a35 gaps | has; have | = | l4 info #3 | ні | ✅ |
| a36 word | never | = (+ not) | l4 info #3 | not у ключі | ✅ |
| a37 build | Has Emma ever been to Kyiv? | = | l4 info #3, l4 build | лише ключ | ✅ |
| a38 choice | Yes, he has. | = | l4 info #3, l4 #5 | ні | ✅ |
| a39 match | I haven’t / he has / she hasn’t / they have | = | l4 info #3 | бієкція за займенником | ✅ |
| a40 gaps | Have; have; Has; hasn’t | = | l4 info #3, l4 #5 | ні | ✅ |
| a41 choice | Ostap’s dad | = | текст | ні | ✅ |
| a42 gaps | has; hasn’t | = | текст | ні | ✅ |
| a43 multi | [0,2] | = | текст | ні | ✅ |
| a44 gaps | seen; visited | = | l5 info #3 | ні | ✅ |
| a45 word | eaten | = | l5 info #3 | «Use the verb eat» | ✅ після правки borscht (§5) |
| a46 gaps | been; went | = | l5 info #5 | ні | ✅ |
| a47 pick | [have been] | = | l5 info #5 | I’ve visited (без часу) правильне | ✅ |
| a48 build | I’ve never seen the Dnipro. | = | l5 info #3, l5 build | лише ключ | ✅ |
| a49 choice | last Saturday | = | текст | ні | ✅ |
| a50 gaps | has seen; has never been | = | текст | ні | ✅ |
| a51 multi | [0,2] | = | текст | ні | ✅ |
| a52 choice | in a café near Independence Square | = | текст | ні | ✅ |
| a53 gaps | by metro; in a café | = | текст («Take the metro») | ні | ✅ |
| a54 multi | [0,2] | = | текст; newer — e5s10l4 | ні | ✅ |
| a55 gaps | been; looked | = | l5 info #3, #5 | ні | ✅ |
| a56 word | built | = | l3 info #3, l6 #1 | ні | ✅ |
| a57 gaps | seen; was; looked | = | l5, l3 | ні | ✅ |
| a58 gaps | seen; was | = | l5 info #3, l6 #1 | ні | ✅ |
| a59 build | The Golden Gate was built again in 1982. | = (+ in 1982 again) | l6 #1 | **«…was again built in 1982»** — граматичний порядок (again у середній позиції), у ключі не було | ⚠️ → виправлено (§5) |
| a60 choice | Yes, I have. I went on it last year. | = | l4 info #3, l5 info #5 | ні | ✅ |

**Покриття:** 6 уроків, 60 вправ. Кожна пара (урок, sk) має ≥ 3 вправи рівнів 1–3. `sk` кожної вправи є серед `sk` екранів її уроку (l1 read/gram/vocab/write; l2 read/gram/phon/write; l3 gram/cult/write; l4 read/gram/func; l5 read/gram; l6 read/write/gram). Boss l7 без вправ ✅. `personalization-qa --pool pe6s7` — 0 помилок.

## 4. Форми, BrE, лексика, авторське право

- **Наголос (a16–a18), відкрито curl у цій сесії:** CD sightseeing «ˈsaɪtˌsiː.ɪŋ», visitor «ˈvɪz.ɪ.tər», cathedral «kəˈθiː.drəl», museum «mjuːˈziː.əm» (https://dictionary.cambridge.org/dictionary/english/<word>); OALD «/ˈsaɪtsiːɪŋ/», «/ˈvɪzɪtə(r)/», «/kəˈθiːdrəl/», «/mjuˈziːəm/» (https://www.oxfordlearnersdictionaries.com/definition/english/<word>). Множина наголосу не змінює ✅.
- **BrE:** favourite, café, metres, Mum. AmE-правопису й AmE-лексики немає. Літер A/B/C, позиційних посилань, «Listen» та IPA немає ✅.
- **Лексика й граматика** — з e6s7 і попередніх розділів (bookshop, cousin, window, photos — 4–5 кл.; the most beautiful, newer — e5s10l4–l5). Нового правила пул не вчить. `hint` відповіді не розкривають.
- **Авторське право:** WebSearch з лапками для найдовших фрагментів. «They go sightseeing on Khreshchatyk and visit the cathedrals and museums» (a20) і «Today’s gate was built again in 1982. Then walk to St Sophia’s Cathedral» (a54) дослівних збігів не дали: видача — лише путівники з іншим текстом. Решта текстів коротші або складені з шаблонних фраз героїв ✅.
- **Копії речень уроку з тим самим ключем:** a26 («The Kyiv Metro was opened in 1960») — у пулі це `word`, а в уроці `build`, тобто інший формат. Решту рамок автор переписав. Блокувального нічого немає.

## 5. Правки (зроблені)
1. **a45:** `borshch` → `borscht` в `after` і `steps`. glossary/eng.md: «borscht — у тексті» (CD, OALD); borshch допустимий лише в ключі `word`. ⚠️ → ✅.
2. **a59:** до `answer` додав «The Golden Gate was again built in 1982.». Тепер рушій приймає всі три граматичні порядки (перевірено `SLID_LANG.check`). ⚠️ → ✅.
3. `status: "verified"`, `meta.factcheck` — посилання на цей звіт.

**Рекомендації без правки:** немає.

## 6. Прогін
- `node tools/validate.mjs --pool pe6s7` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe6s7` — без помилок.
- `python3 tools/test-answer-ui.py --suite content --pool pe6s7` не запускав: у контейнері немає Python-модуля playwright, тож прогін лишається CI (job browser). Ту саму перевірку `check` для всіх вправ я зробив скриптом на app/lang.js.

**Вердикт по пулу: verified.**
