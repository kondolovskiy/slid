# Верифікація: пул pe8s6 (англійська, 8 кл., розділ e8s6 «Schools in Ukraine and abroad»)

Верифікатор: verifier-pe8s5-pe8s6, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s6.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s6.md. Опора: уроки `content/eng/g8-e8s6.js` (verified) і попередні розділи g4–g8-e8s5. Еталони: reports/verify/write-eng-pool-g6-*.md, -g7-*.md, -g8-e8s2.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів, протиставлень might / could / may і must / have to у пулі немає; збігів з опублікованими текстами я не знайшов. Зробив 10 правок у 9 вправах: 2 суперечності канону героїв (a02, a35), 1 варіант «nobody in the photo» без фото (a37), порядок слів у тексті (a37, a38), 4 підказки, що видають відповідь (a44, a48, a49, a54), 1 умова «one word» для пропущеного слова (a50). Людині: нічого блокувального.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. PDF МП-ІМ (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`):
- с. 32: «порівнювати…» (функція) і «Шкільне життя — Позакласні заходи» (рядок 7 кл.);
- с. 33: «Шкільне життя — Школи в Україні та за кордоном…» → l1, l2, l6;
- с. 34: «Could: ability, permission, possibility…», «May: permission», «Might: … possibility», «Must: deductions and conclusions, … obligation» → l3–l5.
Усі `src` відповідають сторінкам ✅. Розбіжність шапки уроку («PDF с. 32») — NOTE автора в inbox, не мій файл.

## 2. Факти (лише з verified-уроку l1, l6 #2)

| Твердження (вправи) | Джерела, відкриті в цій сесії (WebSearch) | Вердикт |
|---|---|---|
| England: primary — ages 5 to 11; secondary — from 11 (a01, a02, a06, a07, a09, a17) | https://coventry.gov.uk/keystages ; https://www.brighton-hove.gov.uk/schools-and-learning/school-information-and-support/how-school-system-works («aged 5 to 11… Reception and school years 1 to 6») | ✅ |
| GCSEs — at about 16; sixth form — 16 to 18 (a05, a07–a09, a16, a17) | https://nces.ed.gov/pubs2016/2016100/app_a18-1.asp («GCSEs, typically at age 16»); https://www.brighton-hove.gov.uk/schools-and-learning/school-information-and-support/how-school-system-works («sixth form… aged 16 to 18 (school years 12 and 13)») | ✅ |
| Ukraine: primary Years 1–4, gymnasium Years 5–9, lyceum — останні роки з profile; школа з 6 років (a01, a04–a09, a12, a18) | https://eurydice.eacea.ec.europa.eu/eurypedia/ukraine/organisation-single-structure-education ; https://eurydice.eacea.ec.europa.eu/eurypedia/ukraine/overview ; https://enic.in.ua/index.php/en/educationl-system/secondary-education («usually start school at the age of six») | ✅ |
| Ukraine: навчальний рік — з 1 September (a08) | https://eurydice.eacea.ec.europa.eu/eurypedia/ukraine/organisation-academic-year («The school year in GSEIs… begins on 1 September»); https://www.kmu.gov.ua/en/news/uriad-vyznachyv-osoblyvosti-navchalnoho-roku-2026-2027-start-1-veresnia-finish-za-rishenniam-zakladiv-osvity | ✅ |

Інших фактів пул не додає: дати й числа поза уроком — лише дрібниці вигаданих героїв (школу Emma відкрито 2005, фото 1990 — сюжет a39).

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Кожну вправу я розв'язав сам і звірив з ключем. `SLID_LANG.check(…, solution, "en")` — усі `solution` зараховуються; `build` — перебір усіх перестановок підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s5-6/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | 4 пари | = | l1 #3, #5 | ні | ✅ |
| a02 gaps | secondary; boarding school | = | l1 #3 | «My penfriend Freya» — Emma й Freya обидві в Англії, у каноні penfriend Freya — Oksana (e10s8) | ⚠️ → «Freya from the penfriend club» |
| a03 word | boarding | = | l1 #3 | ні | ✅ |
| a04 pick | gymnasium, lyceum, boarding school | = | l1 #1, #3, #5 | ні | ✅ |
| a05 gaps | lyceum; profile; sixth form | = | l1 #5, #7 | ні | ✅ |
| a06 choice | at six | = | l1 #5 | ні | ✅ |
| a07 sort | 3 / 3 | = | l1 #3, #5 | ні | ✅ |
| a08 gaps | GCSEs; 4; 1 September | = | l1 #3, #5 | ні | ✅ |
| a09 multi | [0,1] | = | l1 #3, #5 | ні | ✅ |
| a10 choice | at her school | = | текст | ні | ✅ |
| a11 choice | He wants to study computers… | = | текст | ні | ✅ |
| a12 multi | [0,1] | = | текст + l1 #5 (primary Years 1–4; gymnasium can have a primary school) | ні | ✅ |
| a13 stress | ly<u>ce</u>um, <u>pu</u>pil | = | l1 `<u>` | ні | ✅ |
| a14 stress | gymnasium, primary, lyceum | = | l1 `<u>` | ні | ✅ |
| a15 stress | + librarian | = | l1; librarian — e8s5l2 `<u>` | ні | ✅ |
| a16 gaps | boarding school; GCSEs | = | l1 #3 | ні | ✅ |
| a17 gaps | secondary; primary; GCSEs | = | l1 #3 | ні | ✅ |
| a18 gaps | six; 8; gymnasium; lyceum; profile | = | l1 #5, #6 | ні | ✅ |
| a19 gaps | science lab; canteen | = | l2 #3, #5 | ні | ✅ |
| a20 match | 4 пари | = | l2 #3 | перебрав праві — других пар немає | ✅ |
| a21 word | staffroom | staffroom, staff room | l2 #3 | CD «UK staffroom» | ✅ |
| a22 sort | 3 / 3 | = | l2 #5, #6 | ні | ✅ |
| a23 gaps | equipment; microscopes; projector | = | l2 #5 | ні | ✅ |
| a24 pick | equipments | = | l2 #5 | ні | ✅ |
| a25 stress | can<u>teen</u>, <u>mi</u>croscope | = | l2 `<u>` | ні | ✅ |
| a26 stress | equipment, projector, microscope | = | l2 `<u>` | ні | ✅ |
| a27 stress | + pupil | = | l1, l2 `<u>` | три позиції наголосу | ✅ |
| a28 gaps | gym; library | = | l2 #3 | ні | ✅ |
| a29 gaps | projector; lockers; school hall | = | l2 #3, #5 | ні | ✅ |
| a30 gaps | equipment; staffroom; corridor; canteen | = | l2 #3, #5 | ні | ✅ |
| a31 gaps | must | = | l3 #3 | ні | ✅ |
| a32 choice | It can’t be Oksana. | = | l3 #3, #6 | ні | ✅ |
| a33 gaps | can’t; might; must | = | l3 #3 | could / may не серед варіантів | ✅ |
| a34 word | must | must, has to | l3 #3 | ні | ✅ |
| a35 pick | to | = | l3 #3 | «Ms Kravets writes» про коридор зі шкільною парасолькою Mr Ellis (вчитель у школі Freya в Англії) — Ms Kravets веде онлайн-клуб | ⚠️ → «Freya writes a message to her friends» |
| a36 build | The boy in the photo can’t be Oksana’s brother. | = | l3 #3, #6 | 1956 — лише ключ | ✅ |
| a37 choice | the boy at the computer | = | текст + l3 #3 | варіант «nobody in the photo», а в тексті вікно, не фото; «a boy at the computer in a green jumper» — двозначний порядок | ⚠️ → «nobody»; «a boy in a green jumper at the computer» |
| a38 choice | He can’t see her face. | = | текст | той самий текст (порядок слів виправлено) | ✅ |
| a39 multi | [0,1] | = | текст + l3 #3 | ні | ✅ |
| a40 choice | May I…? | = | l4 #3 | Can I — правильне, але не «very polite» (умова) | ✅ |
| a41 match | 4 пари | = | l4 #3, #5 | перебрав праві: «Sorry, I haven’t got it with me» — лише phone | ✅ |
| a42 pick | could | = | l4 #3 «Not: Yes, you could.» | ні | ✅ |
| a43 gaps | May; can | = | l4 #3 | ні | ✅ |
| a44 gaps | Could; Sorry, you can’t; May | = | l4 #3 | hint перелічував «Can I, Could I or May I» — розв'язував 1-й і 3-й пропуски | ⚠️ → hint на екран |
| a45 gaps | are; aren’t | = | l4 #6 | ні | ✅ |
| a46 choice | aren’t allowed | = | l4 #6 | ні | ✅ |
| a47 word | allowed | allowed, permitted | l4 #6 | ні | ✅ |
| a48 build | We aren’t allowed to run in the corridors. | = | l4 #6 | 13699 — лише ключ; hint «We + aren’t + allowed to + verb» задавав увесь порядок і пастку allow | ⚠️ → hint на екран |
| a49 gaps | Is; is; isn’t | = | l4 #6 | hint «is / isn’t» видавав усі три пропуски | ⚠️ → «Tom → he. Which verb comes before allowed to?» |
| a50 pick | have (→ to have) | = | l4 #6 | помилка — пропущене to, а умова «One word is wrong» | ⚠️ → «One part is wrong.» |
| a51 gaps | mustn’t; don’t have to | = | l5 #3 | ні | ✅ |
| a52 choice | don’t have to | = | l5 #3 | ні | ✅ |
| a53 sort | 3 / 3 | = | l5 #3, #6 | «not necessary» замість «No uniform» — не двозначне | ✅ |
| a54 gaps | Does; does; had to | = | l5 #7 | hint «Does…?» видавав 1-й пропуск | ⚠️ → hint на екран «Questions and the past» |
| a55 pick | mustn’t | = | l5 #3 | ні | ✅ |
| a56 word | don’t have to | don’t have to, don’t need to, needn’t (+contractions) | l5 #3, #9 | ні | ✅ |
| a57 pick | must → had to | = | l5 #7 | ні | ✅ |
| a58 gaps | have to; mustn’t | = | l5 #3; уніформа Emma — l6 #3 | ні | ✅ |
| a59 gaps | have to; don’t have to; mustn’t | = | l5 #3 | ні | ✅ |
| a60 gaps | had to; have to; don’t have to; Do | = | l5 #3, #7 | Freya в 11 — інша школа (канон: червоний джемпер); brown shoes — доповнення, не суперечність | ✅ |
| a61 choice | Andrii | = | текст | ні | ✅ |
| a62 multi | [0,2] | = | текст | ні | ✅ |
| a63 choice | Andrii doesn’t have to wear a uniform on any day. | = | текст + l5 #3 | ні | ✅ |
| a64 gaps | both; but | = | l6 #6 | ні | ✅ |
| a65 gaps | the same as; different from; Both | = | l6 #6 | ні | ✅ |
| a66 build | Freya lives at her school, but Andrii goes home every day. | = | l6 #6, #8 | 1956 — лише ключ («Start with Freya») | ✅ |
| a67 gaps | different from; the same as | = | l6 #6 | ні | ✅ |

**Покриття:** 6 уроків, 67 вправ, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку; у вправ lvl 2–3 є `hint`. Модальні: дедукція — лише must / might / can’t у різних пропусках; дозвіл — «Yes, you could» хибне за l4 #3; дистрактори до Can / Could / May — неграматичні (Am, Does) ✅. needn’t / don’t need to — лише в ключі a56 ✅. Класи — «Year N» з великої ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос** (curl у цій сесії; CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>): lyceum — CD «laɪˈsiː.əm», Wiktionary https://en.wiktionary.org/wiki/lyceum «/laɪˈsiːəm/» (OALD статті немає); gymnasium — «dʒɪmˈneɪ.zi.əm», «/dʒɪmˈneɪziəm/»; pupil — «ˈpjuː.pəl», «/ˈpjuːpl/»; primary — «ˈpraɪ.mər.i», «/ˈpraɪməri/»; librarian — «laɪˈbreə.ri.ən», «/laɪˈbreəriən/»; canteen — «kænˈtiːn», «/kænˈtiːn/»; equipment — «ɪˈkwɪp.mənt», «/ɪˈkwɪpmənt/»; microscope — «ˈmaɪ.krə.skəʊp», «/ˈmaɪkrəskəʊp/»; projector — «prəˈdʒek.tər», «/prəˈdʒektə(r)/»; staffroom — CD «ˈstɑːf.ruːm», OALD «/ˈstɑːfruːm/». Усі ключі `stress` правильні; кожне слово підкреслене `<u>` в уроках до своєї вправи.
- **Лексика** (`bin/lex.mjs` проти g4–g8-e8s5 і e8s6 до `lesson`): нових слів, від яких залежить ключ, немає ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a02 (penfriend Freya в Emma), a35 (Ms Kravets у коридорі школи Freya). Решта узгоджена: Oksana 14, Year 8, гімназія без форми й canteen; Dmytro 10, Year 4 у тій самій школі; Denys 16, ліцей у Poltava (profile maths and IT узгоджується з computer science); Emma й Tom (12) — одна secondary з формою (white shirt, blue tie); Andrii — без форми, Sofiia — молодша сестра; Kateryna, Polina — Kharkiv; Bohdan — теніс; Freya — boarding school, місто лише з учителем, телефони до 9 pm. Нові дрібниці (Mr Ellis, школа Emma 2005, Kyrylo — green jumper) — NOTE автора й мій в inbox.
- **BrE, без звуку:** term time, Year 8, first floor, jumper, Mum; AmE, IPA, A/B/C, «Listen» немає ✅.
- **Копії уроків** (`bin/ngram.mjs`): лише рамки інструкцій і факти інфо-екранів у новому формулюванні ✅.
- **Авторське право** (WebSearch з лапками, збігів немає):

| Фрагмент | Запит | Результат |
|---|---|---|
| a10 «In term time, I sleep in a big room with three other girls» | у лапках | збігу немає (блоги студентів про гуртожитки) |
| a61 «Freya lives at her school in term time, but Andrii goes home every day» | у лапках | збігу немає |

## 5. Правки (зроблені)
1. a02 body «her brother and her penfriend» → «her brother and Freya from the penfriend club»; «My penfriend Freya» → «Freya».
2. a35 «Ms Kravets writes a message» → «Freya writes a message to her friends».
3. a37, a38 «a boy at the computer in a green jumper» → «a boy in a green jumper at the computer»; a37 варіант «nobody in the photo» → «nobody».
4. a44 hint → «Look at the screen “Asking for permission”: the questions and the answers.»
5. a48 hint → «Look at the screen “be allowed to”.»
6. a49 hint → «Tom → he. Which verb comes before allowed to?»
7. a50 body «One word is wrong.» → «One part is wrong.»
8. a54 hint → «Look at the screen “Questions and the past”.»
9. `status: "verified"`, `meta.factcheck`, шапка.

## 6. Прогін
- `node tools/validate.mjs --pool pe8s6` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe8s6` — без помилок (6 уроків, 67 вправ).
- `node tools/euphony.mjs --pool pe8s6` — 0 відхилень.
- Повторний перебір `check` після правок: усі `solution` зараховуються, build приймає лише ключі.
- Браузерний прогін (`test-answer-ui.py`) — у CI.

**Вердикт по пулу: verified.**
