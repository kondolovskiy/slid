# Верифікація: пул pe6s8 (англійська, 6 кл., розділ e6s8 «London, the capital of the UK»)

Верифікатор: verifier-pe6s7-pe6s8, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s8.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s8.md. Опора: уроки `content/eng/g6-e6s8.js` (verified, reports/verify/e6s8.md). Еталон оформлення: reports/verify/pe5s8.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і вправ без опори немає. Зробив 2 правки: a15 (хибна «помилка» щодо факту) і a57 (другий граматичний порядок). Нових TQ немає.

## 1. Програма, `src`
PDF МП-ІМ я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 — як у facts/eng.md) і прочитав `pdftotext`. Що на сторінках дослівно: с. 21 — «Країни виучуваної мови — Столиця», «порівнювати», «враження, почуття та емоції», «Comparatives and superlatives», «Conditional: ‘if’ + Present simple; real conditions»; с. 22 — «Present perfect simple: … experiences up to now», «Passives — Past simple affirmative», «Reported statements with ‘say’ and ‘tell’». `src` вправ (с. 21 — cult, vocab, read, if, порівняння; с. 22 — Present Perfect / Past Simple, passive, say / tell) відповідають цим сторінкам ✅. `sources`: `mpim`, `program: true`; `srcPage` і `adapted` немає ✅.

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| London — the capital of the UK and of England, the biggest city in the UK (a01–a03, a07, a09) | https://en.wikipedia.org/wiki/London «the capital and largest city of England and the United Kingdom»; урок e6s8l1 (verified) | ✅ |
| About 9 million people live in London (a02, a03, a35, a36, a41) | https://en.wikipedia.org/wiki/London «9.14 million people in 2025» (в уроці — 2024, «about 9 million») | ✅ |
| About 3 million people live in Kyiv (a35, a36, a38, a41, a42) | https://en.wikipedia.org/wiki/Kyiv «2,952,301» (2022) | ✅ |
| Cardiff — the capital of Wales (a03, лише в `steps` / дистрактор) | урок e5s10 (verified) «Cardiff is the capital of Wales» — опора є | ✅ |
| The Thames — 346 km; the Dnipro — about 2,200 km (a36, a37, a40) | https://en.wikipedia.org/wiki/River_Thames «215 mi (346 km)»; https://en.wikipedia.org/wiki/Dnieper «Approximately 2,200 km» | ✅ |
| Big Ben — a bell; the tower’s real name is the Elizabeth Tower; finished in 1859 (a13–a16, a18, a19) | https://en.wikipedia.org/wiki/Big_Ben «nickname for the Great Bell», «Elizabeth Tower», «completed… 1859»; WebSearch: UK Parliament PDF https://webtest.parliament.uk/globalassets/documents/commons-information-office/big-ben.pdf (clock started 31 May 1859) | ✅ |
| London Eye — a very big wheel, 135 metres; people first went on it in 2000; opposite Big Ben on the other side of the Thames (a13, a18–a24) | https://en.wikipedia.org/wiki/London_Eye «135 metres», «opened to the general public on 9 March 2000», «on the South Bank»; WebSearch: Britannica https://www.britannica.com/place/London-Eye (135 m, перший пасажир 9 March 2000), londoneye.com «directly opposite the Houses of Parliament and Big Ben» | ✅ |
| Tower of London — a very old castle, built more than 900 years ago (a15, a16–a18, a22, a32, a52) | https://en.wikipedia.org/wiki/Tower_of_London (White Tower — 1078; «Royal Palace and Fortress»); WebSearch: Historic England https://historicengland.org.uk/listing/the-list/list-entry/1260258 (c. 1078–1100) | ✅; **але** офіційно це й «Royal Palace», тож «a very old palace» не хибне → a15 виправлено (§5) |
| Buckingham Palace — the King’s palace (a13, a19, a29) | урок e6s8l2 (verified, reports/verify/e6s8.md) | ✅ |
| British Museum — north of the river, far from it; free (a24, a30, a48) | урок e6s8l2 (мапа), l3 (verified) | ✅ |
| London Underground — 1863, the oldest underground in the world; Kyiv Metro — 1960 (a34, a36, a39, a42) | https://en.wikipedia.org/wiki/London_Underground «opened in 1863», «world's first underground passenger railway»; WebSearch: TfL https://tfl.gov.uk/info-for/media/press-releases/2023/january/happy-birthday-london-underground-the-tube-celebrates-160-years-of-serving-the-capital; https://en.wikipedia.org/wiki/Kyiv_Metro «6 November 1960» | ✅ |

Герої — канон (glossary/eng-heroes.md): Tom — молодший брат Emma; Oliver і Ruby — однокласники Emma; Andrii був у London у 4 кл., тобто «two years ago». Суперечностей з уроками немає.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Метод — як у pe6s7: `SLID_LANG.check(…, "en")`, для `build` — усі перестановки всіх підмножин tiles + extra (скрипт у scratchpad `verify-pe6s7-8/chk.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | England; Thames | = | l1 info #3 | ні | ✅ |
| a02 choice | London | = | l1 info #3 | ні | ✅ |
| a03 multi | [0,1] | = | l1 info #3; e5s10 (Cardiff) | ні | ✅ |
| a04 gaps | been; haven’t | = | l1 info #5 | ні | ✅ |
| a05 word | went | = | l1 info #5 (on Friday) | «Use the verb go» | ✅ |
| a06 pick | [have walked] | = | l1 info #5 | I’ve been… three times — правильне | ✅ |
| a07 gaps | capital; tourists | = | l1 info #3 | ні | ✅ |
| a08 word | tourists | = (+ visitors) | l1 info #3; e6s7l2 | people відсікає умова | ✅ |
| a09 match | capital–main city; biggest–bigger than all; Thames–through London; tourists–people | = | l1 #3; e6s7l1–l2 (main, through) | інших доречних пар немає | ✅ |
| a10 choice | George’s dad | = | текст | ні | ✅ |
| a11 gaps | has been; first | = | текст | ні | ✅ |
| a12 multi | [0,1] | = | текст | ні | ✅ |
| a13 gaps | bell; palace | = | l2 info #3 | ні | ✅ |
| a14 choice | the Elizabeth Tower | = | l2 info #3 | ні | ✅ |
| a15 pick | (було [palace]) | — | l2 info #3 | **«The Tower of London is a very old palace» фактично не хибне** (офіційна назва — Royal Palace and Fortress) | ❌ → виправлено: «a very [new] castle» (§5) |
| a16 gaps | was; was built | = | l2 info #6 | ні | ✅ |
| a17 word | older | = | l2 info #6; l2 #7 | «Use the word old» | ✅ |
| a18 gaps | newer; in; the oldest | = | l2 info #6; e5s10l5 | ні | ✅ |
| a19 match | bell / wheel / castle / palace | = | l2 info #3 | бієкція («the King’s» → лише palace) | ✅ |
| a20 gaps | next to; opposite | = | l2 #5 (body: next to, opposite) | ні | ✅ |
| a21 word | opposite | = | l2 #5 | «the word that means on the other side» | ✅ |
| a22 choice | to the Tower of London | = | текст | ні | ✅ |
| a23 gaps | has been; 135 | = | текст | ні | ✅ |
| a24 multi | [0,2] | = | текст | ні | ✅ |
| a25 gaps | like; is | = | l3 info #3 | ні | ✅ |
| a26 word | wants | = | l3 info #6 | ні | ✅ |
| a27 gaps | plays; come | = | l3 info #6 | ні | ✅ |
| a28 choice | If you like dinosaurs, visit… | = | l3 info #3 | ні | ✅ (речення-модель уроку, але інший формат) |
| a29 match | jumper / Buckingham Palace / sandwich / NHM | = | l3 #4, l2 #3 | інших доречних пар немає | ✅ |
| a30 build | If it rains, go to the British Museum. | = | l3 info #3 | лише ключ (кома в плитці відсікає інверсію) | ✅ |
| a31 gaps | want; go | = | l3 info #3 | ні | ✅ |
| a32 build | If you like old castles, visit the Tower of London. | = | l3 info #3 | лише ключ | ✅ |
| a33 gaps | are; is; walk; go | = | l3 info #3 | ні | ✅ |
| a34 gaps | 1863; 1960 | = | l4 info #3 | ні | ✅ |
| a35 choice | about 3 million | = | l4 info #3 | ні | ✅ |
| a36 multi | [0,2] | = | l4 info #3 | ні | ✅ |
| a37 gaps | bigger; longer | = | l4 info #3; e5s10l4 | ні | ✅ |
| a38 word | smaller | = | l4 info #3 | «Use the word small» | ✅ |
| a39 pick | [more old] | = | l4 build | ні | ✅ |
| a40 gaps | on; shorter | = | l4 info #3; l1 | ні | ✅ |
| a41 build | London is bigger than Kyiv. | = | l4 info #3 | «Kyiv is bigger than London» хибне за фактом і відсікається «Start with London» | ✅ |
| a42 gaps | smaller; newer; Have | = | l4 info #3; l1 | ні | ✅ |
| a43 gaps | told; said | = | l5 info #3 | ні | ✅ |
| a44 word | said | = | l5 info #3 | «Write said or told» | ✅ |
| a45 choice | …his favourite museum… | = | l5 info #5 | «my» хибне щодо цитати в body (як l5 #6 уроку) | ✅ |
| a46 pick | [told] | = | l5 info #3 | ні | ✅ |
| a47 gaps | told; said | = | l5 info #3 | ні | ✅ |
| a48 build | George told me that he loved the British Museum. | = | l5 info #3, #5 | лише ключ | ✅ |
| a49 gaps | told; said; his | = | l5 info #3, #5 | ні | ✅ |
| a50 choice | that it was near the Thames | = | текст | ні | ✅ |
| a51 gaps | London; dinosaurs | = | текст | ні | ✅ |
| a52 multi | [0,1] | = | текст | ні | ✅ |
| a53 choice | the London Eye | = | текст | ні | ✅ |
| a54 gaps | a bit afraid; amazing | = | текст | ні | ✅ |
| a55 multi | [0,2] | = | текст | ні | ✅ |
| a56 gaps | was; was | = | l6 info #5 | ні | ✅ |
| a57 build | What did you like most? | = | l6 info #5 | **«What did you most like?»** — граматичний порядок, у ключі не було | ⚠️ → виправлено (§5) |
| a58 gaps | is; went; like | = | l6, l1 info #5, l3 | ні | ✅ |
| a59 gaps | amazing; a bit | = | l6 info #5 | «a lot afraid» неграматичне | ✅ |
| a60 match | most? / amazing! / afraid. / was the Tower of London. | = | l6 info #5 | бієкція | ✅ |
| a61 word | most | = (+ best) | l6 info #5, l6 word | ні | ✅ |

**Покриття:** 6 уроків, 61 вправа. Кожна пара (урок, sk) має ≥ 3 вправи рівнів 1–3. `sk` кожної вправи є серед `sk` екранів її уроку (cult l1 — з hyp-екрана; personalization-qa його рахує). Boss l7 без вправ ✅. `personalization-qa --pool pe6s8` — 0 помилок.

## 4. Форми, BrE, лексика, авторське право
- **Словники (curl у цій сесії):** CD jumper — «A2 UK a piece of clothing with long sleeves…» (https://dictionary.cambridge.org/dictionary/english/jumper), BrE ✅. CD opposite — «(FACING)» (https://dictionary.cambridge.org/dictionary/english/opposite) ✅. Правильні форми older, newer, smaller, shorter, bigger, went, said, told — у тих самих статтях CD і в уроці. `stress` у пулі немає.
- **BrE:** favourite, metres, Mum, jumper, café. AmE немає. Літер A/B/C, позиційних посилань, «Listen» та IPA немає ✅. `hint` відповіді не розкривають (a02 «About 9 million people live there» лише відсилає до факту уроку, міста не називає).
- **if:** хибний will стоїть лише в if-частині, головне речення — імператив або Present Simple ✅ (як в уроці; first conditional — 7 кл.). **say / tell:** хибні варіанти — лише said ↔ told і займенники, backshift не протиставлено ✅.
- **Авторське право:** WebSearch з лапками для найдовших фрагментів. «Big Ben is next to the river. The London Eye is opposite it, on the other side of the Thames» (a24) і «Two years ago, I went to London with my family. We went on a big red bus» (a53) дослівних збігів не дали ✅.

## 5. Правки (зроблені)
1. **a15** (❌ → ✅): у `text` замість «a very old [palace]» тепер «a very [new] castle». Старий варіант вчив дитину, що «palace» про Tower of London — помилка, хоча офіційна назва — «His Majesty's Royal Palace and Fortress of the Tower of London» (en.wikipedia, вище). Нова «помилка» однозначна з l2 info #6 («built more than 900 years ago»). Оновив `hint` («When was the Tower of London built: more than 900 years ago or in 2000?») і `steps`. id і рівень не змінив.
2. **a57** (⚠️ → ✅): `answer` тепер `["What did you like most?", "What did you most like?"]`, рушій приймає обидва (перевірено).
3. `status: "verified"`, `meta.factcheck` — посилання на цей звіт.

**Рекомендація без правки (не блокує):** a28 повторює модельне речення l3 info #3, але як `choice`. Можна замінити на інший інтерес (напр., «If you like old things, visit the British Museum.»), коли автор пулу повернеться до файла.

## 6. Прогін
- `node tools/validate.mjs --pool pe6s8` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe6s8` — без помилок.
- `python3 tools/test-answer-ui.py --suite content --pool pe6s8` не запускав: у контейнері немає Python-модуля playwright, тож прогін лишається CI. Перевірку `check` для всіх вправ я зробив скриптом на app/lang.js.

**Вердикт по пулу: verified.**
