# Верифікація: пул pe11s5 (англійська, 11 кл., розділ e11s5 «Science and its impact»)

Верифікатор: verifier-pe11s5-pe11s6, 2026-11-27. Цей пул я не писав. Перевірено `content/eng/pool-g11-e11s5.js` (68 вправ, a01–a68) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s5.md. Опора: уроки `content/eng/g11-e11s5.js` (verified) і попередні розділи. Канон героїв: memory/long/glossary/eng-heroes.md (11 кл., вік 17).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і других правильних відповідей я не знайшов. Зробив 4 правки:
- a52: підказка посилалася на слово, якого немає в тексті (aunt);
- a46, a47, a56: рамку з фіналу або оцінюваного екрана уроку повторено з тим самим ключем.

Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI: Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources` містить лише `p1407`, `program: true`, а title і url такі самі, як у facts/eng.md. `srcPage` і `adapted` немає ✅. Сторінки я звірив за PDF, відкритим у цій сесії (https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf, pdftotext):
- с. 23 — функції 11 кл., «Наука і технічний прогрес», «…точку зору»;
- с. 24 — лексика: «галузі науки», «вплив науково-технічного прогресу…», «розвиток науки і техніки в Україні та за кордоном»;
- с. 25 — граматика: «modals + passive», «overview of all tense forms (active/passive)».

У вправах l1, l2, l5 і l6 лексика й читання мають с. 24, функція l5 — с. 23, граматика й письмо на passive — с. 25 ✅.

## 2. Факти (лише ті, що вже є в e11s5l5 і e11s5l6)

| Твердження (вправи) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Академію наук засновано в Kyiv 1918 р., перший президент — Volodymyr Vernadsky (a57, a59, a63, a66) | https://en.wikipedia.org/wiki/National_Academy_of_Sciences_of_Ukraine (curl raw: 1918-11-27 / 1918-11-14); https://www.nas.gov.ua/en/about-nas/history-nas і https://mathshistory.st-andrews.ac.uk/Societies/Ukrainian_Academy (WebSearch: «elected V I Vernadsky… as its first President») | ✅ |
| Borys Paton народився в Kyiv 1918 р.; welding; президент 1962–2020, тобто 58 років (a57, a59, a61, a66) | https://en.wikipedia.org/wiki/Borys_Paton (curl raw: «born on 27 November 1918 in Kyiv», «appointed to this post in 1962 and held it until his death»); https://www.kyivpost.com/ukraine-politics/borys-paton-patriarch-of-ukrainian-science-dies-at-101.html , https://paton.org.ua/en/?p=3947 (WebSearch) | ✅ |
| Yevhen Paton — батько; міст через Dnipro в Kyiv, відкритий 1953 р., названо на його честь (a59, a60) | https://en.wikipedia.org/wiki/Paton_Bridge (curl raw: open 1953-11-05); https://www.kyivpost.com/post/47868 , https://en.wikipedia.org/wiki/Evgeny_Paton (WebSearch) | ✅ |
| Станція Akademik Vernadsky: Galindez Island; збудували британці; з 1947 р.; Faraday; передано Україні 1996 р.; працює цілий рік (a58, a59, a63, a64) | https://en.wikipedia.org/wiki/Vernadsky_Research_Base (curl raw: «established in 1947 as Faraday Station… transferred to Ukraine in 1996», Galindez Island); https://uac.gov.ua/en/vernadsky-station-en/station-history-en/ (WebSearch: 6 лютого 1996) | ✅ |
| CERN засновано 1954 р. біля Geneva; Web винайдено там 1989 р.; Україна — асоційований член з 2016 р. (a59, a63) | https://en.wikipedia.org/wiki/CERN (curl raw: 1954-09-29, «5 October 2016» для Ukraine); https://press.cern/news/news/cern/ukraine-becomes-associate-member-cern , https://mon.gov.ua/en/ministry/activity/international-cooperation/international-scientific-projects/european-organization-for-nuclear-research-cern (WebSearch) | ✅ |
| Озон: проблему знайшли науковці в 1980-х (1985); гази з холодильників і спреїв; угода 1987 р.; відновлення ≈ 2066 (a51, a53) | https://en.wikipedia.org/wiki/Ozone_depletion (curl raw: «first reported in 1985 (Farman et al.)», «around 2066 over Antarctica»); https://en.wikipedia.org/wiki/Montreal_Protocol (16 September 1987); https://news.un.org/en/story/2023/01/1132277 , https://www.ukri.org/news-and-events/responding-to-climate-change/topical-stories/the-story-behind-the-discovery-of-the-ozone-hole (WebSearch) | ✅ |
| Оцінні думки героїв (a53, a62, a65, a68): «results are shared with scientists abroad», «science has to be supported» | загальні твердження, як у статті Andrii (l6 #5); нових фактів про установи немає | ✅ |

## 3. Форми й наголос (словники відкрито в цій сесії через curl)
Джерела: CD https://dictionary.cambridge.org/dictionary/english/<word> (UK / US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word> (BrE / NAmE).
- geology dʒiˈɒl.ə.dʒi | dʒiˈɑː.lə.dʒi · /dʒiˈɒlədʒi/
- chemist ˈkem.ɪst · /ˈkemɪst/
- biologist baɪˈɒl.ə.dʒɪst · /baɪˈɒlədʒɪst/
- physics ˈfɪz.ɪks · /ˈfɪzɪks/
- astronomer əˈstrɒn.ə.mər · /əˈstrɒnəmə(r)/
- geologist dʒiˈɒl.ə.dʒɪst · /dʒiˈɒlədʒɪst/
- ecology iˈkɒl.ə.dʒi · /iˈkɒlədʒi/
- physicist ˈfɪz.ɪ.sɪst · /ˈfɪzɪsɪst/
- microscope ˈmaɪ.krə.skəʊp · /ˈmaɪkrəskəʊp/
- technician tekˈnɪʃ.ən · /tekˈnɪʃn/
- sample ˈsɑːm.pəl | ˈsæm.pəl · /ˈsɑːmpl/
- goggles ˈɡɒɡ.əlz · /ˈɡɒɡlz/

Наголошений склад у UK і US однаковий ✅. Усі слова підкреслені `<u>` в e11s5l1 (#3, #5) або e11s5l2 (#5, #7) ✅. У кожному наборі a05–a07 і a17–a19 є слова з різними наголошеними складами ✅. Слова researcher і laboratory (UK ≠ US) у `stress` не взято ✅.

Інші форми:
- **scales:** CD «scales [plural] UK (US scale)… Are your scales accurate?», тобто «these scales are» (a23, a25) ✅;
- **chemist’s:** CD «UK… a shop where you can buy medicines» (a04) ✅;
- **learnt** (a28) — BrE ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Кожну вправу я розв'язав сам до того, як дивитися ключ. Скрипт `SLID_LANG.check(…, solution, "en")` зараховує всі ключі. У `word` кінцевого `.!?` немає.

`build` я перевірив двома способами. Перший — перебір усіх перестановок tiles + extra через рушій (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s5-pe11s6/bin/chk.mjs`). Другий — повний список перестановок самих tiles, який я переглянув очима (`…/bin/perms.mjs`):
- a24, a33, a42 — один граматичний порядок (keepCase + `?` на останній плитці);
- a55 — один порядок, бо «a point,» з комою не може стояти в кінці;
- a67 — два порядки, обидва в ключі.

**Passive: час і by.** У кожному `gaps` хибні лише неграматичні форми: is + множина, has been + V1, will given, was founding, putted, borned, can’t to be. Іншого граматичного часу поруч із ключем немає: was made / has been made / is made як варіанти не стоять. У `word` час задано умовою: a09 Present Simple, a22 Present Continuous, a34 Past Continuous, a64 Present Perfect. Тому іншу форму часу контекст відсікає. by-фраза є лише в a08 («by the students»). Вона граматично правильна, і її не оцінюють. equipment і research — незлічувані (is), за l2 і l6 ✅.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | chemist–substances, ecologist–environment, computer scientist–computers, astronomer–space | = | l1 #3, #5 | інших пар немає | ✅ |
| a02 word | physicist | = | l1 #5 | ні | ✅ |
| a03 pick | [geology], [astronomy] | = | l1 #5, pick l1 #9 | ні | ✅ |
| a04 choice | shop that sells medicines | = | l1 #5 (примітка про chemist’s) | after school + cold відсікає урок | ✅ |
| a05–a07 stress | за словником | = | §3 | hint — стратегія | ✅ |
| a08 gaps | are written; is tested | = | l1 #8 | ні | ✅ |
| a09 word | are watched | = | l1 #8, умова «Present Simple passive of watch» | ні | ✅ |
| a10 pick | [is studied] | = | l1 #8 | ні | ✅ |
| a11–a13 | computer science / [0,2] / a geologist | = | текст; l1 #3, #5 | Daryna — каміння (канон l1) | ✅ |
| a14 match | gloves–hands, goggles–eyes, scales–heavy, test tube–liquid | = | l2 #5 | інших пар немає | ✅ |
| a15 word | microscope | = | l2 #5 | ні | ✅ |
| a16 choice | the lab technician | = | l2 #3 | ні | ✅ |
| a17–a19 stress | за словником | = | §3 | ні | ✅ |
| a20, a21 gaps | are washed; is cleaned / are being tested; written; is kept | = | l2 #9 | ні | ✅ |
| a22 word | are being kept | = | l2 #9 | ні | ✅ |
| a23 choice | What are these scales used for? | = | l2 #11 | ні | ✅ |
| a24 build | What is a test tube used for? | = | l2 #11 | перебір: один порядок | ✅ |
| a25 gaps | are; are used | = | l2 #5, #11 | ні | ✅ |
| a26 gaps | coat; gloves | = | l2 #5 | ні | ✅ |
| a27 order | Hi → First → Then → Finally → Love | = | e6s3l3, e9s9l5; l2 #1 | ні | ✅ |
| a28 gaps | are carried out; is checked; goggles; assistant | = | l2 #3, #5, #9 | ні | ✅ |
| a29 gaps | has been made; have been bought | = | l3 #4 | ні | ✅ |
| a30 choice | in progress at that moment | = | l3 #7 | ні | ✅ |
| a31 gaps | was being painted; was moved | = | l3 #3, #7 | ні | ✅ |
| a32 match | за змістом | = | l3 #3, #4, #7 | «hasn’t started yet» — лише will be | ✅ |
| a33 build | Will the photos be shown on the website? | = | l3 #4 | перебір: один порядок | ✅ |
| a34 word | was being checked | = | l3 #7 | ні | ✅ |
| a35 pick | [was being tested] | = | l3 #7 | ні | ✅ |
| a36–a38 gaps | has been finished; will be tested / was being painted; has been painted; is being charged; will be put / have been sent; was being checked; will be given; will be put | = | l3 #3, #4, #7; put — l4 #8 | have been sent — приклад з info l3 #4, не з оцінюваного екрана | ✅ |
| a39 gaps | can’t be thrown; have to be taken | = | l4 #3 | ні | ✅ |
| a40 sort | 2/2/2 | = | l4 #7 (must be / have to be → necessary) | ні | ✅ |
| a41 word | can’t / cannot | = | l4 #5, `contractions` | умова «Use can» відсікає mustn’t | ✅ |
| a42 build | Do the bottles have to be washed first? | = | l4 #5 | перебір: один порядок | ✅ |
| a43 choice | not allowed | = | l4 #7 | ні | ✅ |
| a44 pick | [can’t to be recycled] | = | l4 #3 | ні | ✅ |
| a45 gaps | can be recycled; must be put | = | l4 #3 | ні | ✅ |
| a46 gaps | could be given; might be repaired; don’t have to be thrown; will be bought | = | l4 #3, #5 | «Plastic bags {don’t have to be thrown} away» — дослівно фінал l4 з тим самим ключем | ⚠️ → «Old newspapers…», hint і steps виправлено |
| a47 gaps | Can; can’t be; have to be; won’t be | = | l4 #5 | «but crisp packets {can’t be} recycled» — рамка фіналу l4 | ⚠️ → «but old batteries…», steps виправлено |
| a48 gaps | renewable energy; fossil fuels | = | l5 #3 | ні | ✅ |
| a49 match | за списком | = | l5 #3 | інших пар немає | ✅ |
| a50 gaps | pollute; pollution | = | l5 #3 | ні | ✅ |
| a51 choice | an agreement was signed | = | l5 #5 | ні | ✅ |
| a52 multi | [0,2] | = | текст | hint «Find… aunt in the text»: у тексті uncle Oleh, тож підказка вела в нікуди | ⚠️ → «uncle» |
| a53 choice | how people use science | = | текст; l5 #7 | ні | ✅ |
| a54 choice | I’m convinced that… | = | l5 #7 | ні | ✅ |
| a55 build | You have a point, but electric cars cost a lot. | = | l5 #7 | перебір: один порядок | ✅ |
| a56 gaps | see; convinced; suggests; give | = | l5 #7 | «The evidence {suggests} that science can» — 6-грама з оцінюваного екрана l5 #10 з тим самим ключем | ⚠️ → «…that research helps us find answers» |
| a57–a59 | Vernadsky / Akademik Vernadsky; Faraday; 1996 / [0,2,4] | = | l6 #3, #4, #5 | ні | ✅ |
| a60–a62 | bridge / [0,2] / supported | = | текст; l6 #3 | ні | ✅ |
| a63 gaps | was founded; was named | = | l6 #4, #5, #9 | ні | ✅ |
| a64 word | has been carried out | = | l6 #3 (carried out), #9 | ні | ✅ |
| a65 pick | [are carried out] | = | l6 #3, #10 | ні | ✅ |
| a66 gaps | was founded; was born | = | l6 #3 | ні | ✅ |
| a67 build | 2 порядки | = | l6 #5, #9 | перебір: лише ключі | ✅ |
| a68 gaps | has to be supported; is needed; could be sent; must be kept | = | l4 #3; l6 #9 | ні | ✅ |

**Рамки уроків (6-грами пулу проти e11s5, скрипт `…/bin/ngram.mjs`).** Після правок з тим самим ключем повторюються лише:
- речення фактів (first president, founded in 1918, the same year);
- стала фраза «Let me give you an example»;
- приклад з info l3 #4 (have been sent).

## 5. Інше
- **Канон героїв:** Oksana, Mariia (Kharkiv; дядько Oleh є в каноні), Emma (astronomer, телескоп дідуся), Daryna, Zoriana (IT), Andrii, Kyrylo, Bohdan, Taras, Ms Lysenko, Dr Shapoval, Pavlo, Mr Ivanenko — усі за eng-heroes.md. Суперечностей немає. Нові дрібні деталі (колекція каміння Daryna, електромобіль дядька Oleh) — уже в NOTE автора в inbox.
- **BrE:** programme, at the weekend, learnt, chemist’s, petrol ✅. AmE-форм хибними варіантами немає ✅.
- **Чого немає:** IPA, звуку, «Listen», літер A/B/C, позиційних посилань ✅. Підказки не видають відповідь ✅. Пояснення — на рівні B2 ✅.
- **Уроки** (не мій файл, не правив): проблем, що потребують FIX, у e11s5 не знайшов.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a52 «the air on busy streets is often dirty, because there are so many cars» | `"the air on busy streets is often dirty, because there are so many cars"` | збігів немає |
| a13 «At the weekend, I go to the hills with a big bag. I bring home pieces of rock» | `"At the weekend, I go to the hills with a big bag. I bring home pieces of rock"` | збігів немає |

## 6. Прогін
- `node tools/validate.mjs --pool pe11s5` — 0 помилок, 0 попереджень (після правок і зміни статусу).
- `node tools/personalization-qa.mjs --pool pe11s5 --strict` — 6 уроків, 68 вправ, у кожному уроці ≥ 3 вправи рівнів 1–3.
- `node tools/euphony.mjs --pool pe11s5` — без відхилень.
- `test-answer-ui.py` у контейнері не запускається (немає модуля playwright), прогін буде в CI.

## 7. Правки (зроблені)
- a46: текст, hint, steps;
- a47: текст, steps;
- a52: hint;
- a56: текст;
- шапка, `status`, `meta.factcheck`.

id вправ не змінювались.

**Вердикт: pe11s5 — verified.** Відкритих ❌ і ⚠️ немає.
