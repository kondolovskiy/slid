# Верифікація: пул pe11s2 (англійська, 11 кл., розділ e11s2 «Food and recipes»)

Верифікатор: verifier-pe11s2, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g11-e11s2.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s2.md. Опора: уроки `content/eng/g11-e11s2.js` (verified) і розділи g4–g10. Формат звіту — як reports/verify/write-eng-pool-g10-e10s1.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 21 правку у 18 вправах (+ статус і шапка):
- 2 рамки уроку з тим самим ключем (pitfall 18): a40 — речення l4 #12 «In summer, the vegetables at our market are very affordable: they cost very little» з тим самим affordable / convenient; a67 — крок 3 рецепта l6 «Cover the bowl with a tea towel and leave it in a warm place». Обидва переписано;
- 1 hint, що стверджує неточне правило (a45: «Look at the verb after each gap: love or is?» — наче *love* відкидає *Neither of them*, а за CD Grammar «in informal speaking, people often use plural verbs» після neither of): hint замінено змістовим;
- 15 підказок, що підписували пропуски в порядку відповідей, називали пару чи місце помилки або давали порядок плиток (a05, a14, a15, a20, a22, a24, a25, a31, a39, a40, a46, a51, a52, a60, a73);
- a22 `word`: до ключа plenty / a lot / lots / a great deal / loads додано «a large amount» («There’s a large amount of flour» граматично правильне).

Людині рішати нічого не треба.

Спосіб: спершу розв'язав усі 73 вправи за «учнівським» дампом без ключів (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s1-pe11s2/bin/dump.mjs`), потім звірив з ключем. Розбіжностей немає.

## 1. Програма, `src`
PDF П1407 відкрив у цій сесії (curl https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf; SHA-1 38df1f7ff398f0921f2852bc77fd374c77e1c0ff), `pdftotext`, колонтитули:
- с. 23 (11 кл., функції): «порівнювати (звичаї, традиції, стилі життя тощо)» → l4 func/write ✅;
- с. 24 (лексика «Харчування»): «їжа, напої й закуски», «корисна та шкідлива їжа», «пріоритети в харчуванні», «рецепти страв» → l1, l3 read, l4 vocab/phon/read, l6 ✅;
- с. 25 (граматика, Determiner): «overview of all quantifiers with countable/uncountable nouns» → l2, l3 gram, l4 gram (both / either / neither), l5 ✅. l5 read (опитування з most of / none of) — с. 25 прийнятно ✅.

## 2. Факти
Фактів про реальний світ (дат, чисел, установ) у пулі немає: рецепт флапджеків Emma — власний, 180 °C / ≈ 25 хв — правдоподібні для випічки. Соняшникова олія й «Ukraine is one of the world’s biggest producers» у пул не взято.

**Канон героїв** (memory/long/glossary/eng-heroes.md; 11 кл.: 17 років, Tom 15, Dmytro 13): Emma 17 і Tom 15, мама Sarah, Emma пече флапджеки щонеділі, дідусь Emma — cook (a08, a15, a49, a51, a68–a70, a73) ✅; Orysia — перший тиждень в Англії (a03) ✅; Mariia — єдина дитина, Kharkiv (a07, a33) ✅; Bohdan, Andrii, Daryna (сестра), Kyrylo — Kyiv (a09, a34, a45, a48) ✅; Taras і Zlata — Lviv (a25, a32) ✅; Polina — Kharkiv (a14) ✅; Ms Kravets — клуб і кулінарна книжка (a37, a64) ✅. Нові дрібниці (у Tom обід у canteen, мама Bohdan працює допізна по середах, у класі Andrii 24 учні) канону не суперечать.

## 3. Словники
Наголос — CD https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>, curl у цій сесії:

| Слово | CD (UK; US) | OALD (BrE; NAmE) | `<u>` в уроках | Вердикт |
|---|---|---|---|---|
| takeaway | ˈteɪk.ə.weɪ | /ˈteɪkəweɪ/ | e11s2l1 | ✅ |
| elevenses | ɪˈlev.ən.zɪz; əˈlev.ən.zɪz | /ɪˈlevnzɪz/ | e11s2l1 | ✅ |
| smoothie | ˈsmuː.ði | /ˈsmuːði/ | e11s2l1 | ✅ |
| sparkling | ˈspɑː.klɪŋ; ˈspɑːr.klɪŋ | /ˈspɑːklɪŋ/; /ˈspɑːrklɪŋ/ | e11s2l1 | ✅ |
| breakfast | ˈbrek.fəst | /ˈbrekfəst/ | e5s2, e5s3 | ✅ |
| delicious | dɪˈlɪʃ.əs | /dɪˈlɪʃəs/ | e7s2 | ✅ |
| seasonal | ˈsiː.zən.əl | /ˈsiːzənl/ | e11s2l4 | ✅ |
| nutritious | njuːˈtrɪʃ.əs; nuːˈtrɪʃ.əs | /njuˈtrɪʃəs/ | e11s2l4 | ✅ |
| affordable | əˈfɔː.də.bəl; əˈfɔːr.də.bəl | /əˈfɔːdəbl/ | e11s2l4 | ✅ |
| convenient | kənˈviː.ni.ənt | /kənˈviːniənt/ | e11s2l4 | ✅ |
| priority | praɪˈɒr.ə.ti; praɪˈɔːr.ə.t̬i | /praɪˈɒrəti/ | e11s2l4 | ✅ |
| lifestyle | ˈlaɪf.staɪl | /ˈlaɪfstaɪl/ | e8s2 | ✅ |

У кожному наборі є слово з іншим наголошеним складом ✅.

Граматика (CD Grammar, curl у цій сесії):
- https://dictionary.cambridge.org/grammar/british-grammar/few-little-a-few-a-little — «a little money… some, a small amount», «little money… not much/almost nothing», few — «not many/almost none» → ключі a26–a34 ✅.
- https://dictionary.cambridge.org/grammar/british-grammar/none — «singular verb when it is the subject. However, in informal speaking, people often use plural verbs» → none of + однина і множина — обидві правильні в a57 ✅, ніде не протиставлені ✅.
- https://dictionary.cambridge.org/grammar/british-grammar/neither — «In formal styles, we use neither of with a singular verb… in informal speaking, people often use plural verbs» → у a45 «Neither of them love pizza» не хибне граматично, відсікає його лише зміст («Andrii and Bohdan love pizza») ✅; hint, що спирався на форму дієслова, виправлено.
- each / every: хибні лише «Every of us» (a56, a61) і «almost each» (a56, a58, a61) — як у l5 info 5 ✅; all the = all of the — обидва в ключі a57 ✅.
- a lot of / lots of / plenty of ніде не стоять в одному пропуску ✅; much у ствердженні ніде не хибне — хибні лише much + множина / many + незлічуване ✅.
- millilitres / milliliters — обидва в ключі a72 (AmE-правопис у `word`) ✅; a66 tablespoons ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. `build` — перебір усіх перестановок з `extra` (`…/bin/chk.mjs`): a51 (keepCase) — лише «Emma bakes every Sunday, whereas Tom never bakes»; a60 — лише «Most of us walk to school» ✅. Лексика (`lex2.mjs`, проти g4–g10 і e11s2 до `lesson`): поза уроками лише *loads* (прийнятний ключ a22, не в умові). N-грами (7): після правок a40 і a67 лишилися шаблонні заголовки й визначення з info.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 choice | the evening meal | = | l1 info 3 (tea UK) | — | ✅ |
| a02 multi | [0,1] | = | l1 info 3 | — | ✅ |
| a03 choice | a cooked evening meal | = | l1 info 3 | — | ✅ |
| a04 gaps | starving; packed lunch | = | l1 info 3, 4 | — | ✅ |
| a05 match | 4 пари | = | l1 info 4 | hint «Which one has bubbles?» називав пару | ⚠️ → hint виправлено |
| a06 pick | [ready meal] | = | l1 info 3 | — | ✅ |
| a07 choice | at eleven | = | текст | — | ✅ |
| a08 multi | [0,2] | = | текст | — | ✅ |
| a09 choice | not filling enough | = | текст; l1 info 4 | — | ✅ |
| a10–a12 stress | take, lev / smoo, lev, spar / take, spar, lev, break, li | = | `<u>` (§3) | — | ✅ |
| a13 gaps | brunch; still | = | l1 info 3, 4 | — | ✅ |
| a14 gaps | light; herbal; ready meal | = | l1 info 3, 4 | hint — визначення в порядку пропусків | ⚠️ → hint виправлено |
| a15 gaps | packed lunch; starving; ready meals; tea | = | l1 info 3, 4 | hint у порядку пропусків | ⚠️ → hint виправлено |
| a16, a17 gaps | plenty of; hardly any / many; much | = | l2 info 3, 5 | — | ✅ |
| a18 choice | a large number of | = | l2 info 5 | — | ✅ |
| a19 multi | [0,1] | = | l2 info 5 | — | ✅ |
| a20 pick | [a large number of] (time) | = | l2 info 5 | hint «Time: …?» вказував місце помилки | ⚠️ → hint виправлено |
| a21 gaps | hardly any; a large number of; a great deal of | = | l2 info 5 | — | ✅ |
| a22 word | plenty / a lot / lots / a great deal / a large amount | plenty, a lot, lots, a great deal, loads | l2 info 3, 5 | «a large amount» поза ключем; hint «More than enough: … of» = визначення plenty | ⚠️ → додано в ключ, hint виправлено |
| a23 gaps | plenty of; hardly any | = | l2 info 5 | — | ✅ |
| a24 gaps | A large number of; a great deal of | = | l2 info 5 | hint підписував обидва пропуски | ⚠️ → hint виправлено |
| a25 gaps | much; many; plenty of; hardly any | = | l2 info 3, 5 | hint підписував пропуски | ⚠️ → hint виправлено |
| a26 gaps | a little; a few | = | l3 info 3 | — | ✅ |
| a27 choice | Not many people came | = | l3 info 3 | — | ✅ |
| a28 gaps | very little; a few | = | l3 info 3, 5 | «Be quick!» відсікає a little | ✅ |
| a29 sort | 3 / 3 | = | l3 info 3, 5 | — | ✅ |
| a30 multi | [0,1] | = | l3 info 3, 5 | — | ✅ |
| a31 pick | [a few] (money) | = | l3 info 3 | hint «Money: …?» вказував місце помилки | ⚠️ → hint виправлено |
| a32 choice | only a few tables | = | текст | — | ✅ |
| a33 multi | [0,2] | = | текст | — | ✅ |
| a34 choice | not enough milk | = | текст | — | ✅ |
| a35 choice | For me, price comes first | = | l4 info 6 | — | ✅ |
| a36 gaps | priority; comes; than | = | l4 info 6 | — | ✅ |
| a37 choice | Price matters more to me than taste | = | l4 info 6 | — | ✅ |
| a38 gaps | seasonal; convenient | = | l4 info 3 | — | ✅ |
| a39 match | 4 пари | = | l4 info 3 | hint «Which one is about money?» називав пару | ⚠️ → hint виправлено |
| a40 pick | [convenient] | = | l4 info 3 | копія рамки l4 #12 з тим самим ключем; hint вказував місце | ⚠️ → речення переписано («In autumn, the apples at the market in Poltava… a big bag doesn’t cost much»), hint виправлено |
| a41–a43 stress | sea, tri / ford, sea, or / ve, sea, or, life, tri | = | `<u>` (§3) | — | ✅ |
| a44 gaps | Both; either | = | l4 info 7 | — | ✅ |
| a45 gaps | Both; Neither | = | l4 info 7 + текст | hint спирався на форму дієслова (див. §3) | ⚠️ → hint змістовий |
| a46 multi | [0,1,4] | = | l4 info 7 | hint переказував усе правило | ⚠️ → hint виправлено |
| a47 choice | Taras’s family | = | текст | — | ✅ |
| a48 multi | [0,2] | = | текст | — | ✅ |
| a49 choice | Both of them choose a banana | = | текст | — | ✅ |
| a50 gaps | comes; than | = | l4 info 6 | — | ✅ |
| a51 build | Emma bakes every Sunday, whereas Tom never bakes. | = | l4 info 6 | перебір; hint давав порядок | ⚠️ → hint виправлено |
| a52 gaps | priority; whereas; Neither; convenient | = | l4 info 3, 6, 7 | hint у порядку пропусків | ⚠️ → hint виправлено |
| a53 gaps | Most of; of them | = | l5 info 3 | — | ✅ |
| a54 choice | Most of my friends… | = | l5 info 3 | — | ✅ |
| a55 word | one | = | l5 info 5 («every one of us») | — | ✅ |
| a56 gaps | Each; every | = | l5 info 5 | — | ✅ |
| a57 multi | [0,1,2,3] | = | l5 info 3, 5 | — | ✅ |
| a58 pick | [each] | = | l5 info 5 | — | ✅ |
| a59 gaps | Most of; None of | = | l5 info 3 | — | ✅ |
| a60 build | Most of us walk to school. | = | l5 info 3 | перебір; hint «most + of + us…» давав порядок | ⚠️ → hint виправлено |
| a61 gaps | all; Most; Each; every | = | l5 info 3, 5 | — | ✅ |
| a62 choice | nobody | = | текст | — | ✅ |
| a63 multi | [0,2] | = | текст | — | ✅ |
| a64 choice | Some members didn’t answer | = | текст | — | ✅ |
| a65 match | 4 пари | = | l6 info 3 | перебрав усі праві | ✅ |
| a66 word | tablespoons | = | l6 info 3 | — | ✅ |
| a67 pick | [Brush] | = | l6 info 5 | речення = крок 3 рецепта уроку (ключ cover) | ⚠️ → «[Brush] the bowl with a big plate and leave it for an hour» |
| a68 choice | 125 grams | = | текст | — | ✅ |
| a69 order | як у тексті | = | текст | — | ✅ |
| a70 multi | [0,2] | = | текст; l6 info 3 | — | ✅ |
| a71 gaps | handful; cloves | = | l6 info 3 | — | ✅ |
| a72 word | millilitres / milliliters | = | l6 info 3 | — | ✅ |
| a73 gaps | grams; tablespoons; pinch; golden | = | l6 info 3; l6 #8 («until they’re golden») | hint підписував усі 4 пропуски й посилався на рецепт, якого на екрані немає | ⚠️ → hint виправлено |

Педагогіка: рівні 1–3 на кожну пару (урок, sk); cult (l1) — 3 вправи на рамці «Meals and snacks» (tea, elevenses) — опора є в info 3 ✅. Мова пояснень — рівень 11 кл. BrE: takeaway, crisps, canteen, biscuits, flat, at the weekend, millilitres, yoghurt ✅. Без звуку й IPA ✅. Авторське право: WebSearch з лапками — «Heat the butter, the sugar and the honey in a pan until the butter is soft», «They only needed five minutes, but they weren't very filling. An hour later, we were all starving again» — збігів немає ✅.

## 5. Правки (зроблені)
1. a40: нове речення-рамка + steps + hint.
2. a67: нове речення + steps.
3. a22: + «a large amount» у ключ; hint.
4. Hint: a05, a14, a15, a20, a24, a25, a31, a39, a45, a46, a51, a52, a60, a73.
5. `status: "verified"`, `meta.factcheck`, шапка.

Прогін: `node tools/validate.mjs --pool pe11s2` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe11s2` — 6 уроків, 73 вправи. `test-answer-ui.py` — модуля playwright немає, лише CI.

## 6. Вердикт
Уроки e11s2l1–e11s2l6: ✅. Пул pe11s2 — **verified**. Відкритих ❌ і ⚠️ немає.
