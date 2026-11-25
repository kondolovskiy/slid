# Верифікація пулу pe4s1 (eng, 4 кл., розділ e4s1)

Верифікатор: verifier-pe4s1, 2026-11-20. Файл: content/eng/pool-g4-e4s1.js (55 вправ a01–a55, уроки e4s1l1–l6). Автор — writer-pe4s1; я цей пул не писав.
Опора — лише уроки content/eng/g4-e4s1.js (verified, reports/verify/e4s1.md).

**Вердикт: придатний → `status: "verified"`.** Помилок у ключах і завдань без опори немає; 2 дрібні правки зроблено, людині рішення не потрібні (TQ не додано).

## 1. Прогони
| Перевірка | Результат |
|---|---|
| `node tools/validate.mjs --pool pe4s1` | 0 помилок, 0 попереджень (до й після правок) |
| `node tools/personalization-qa.mjs --pool pe4s1 --strict` | до правок — лише «ще не verified»; після — без зауважень |
| `node tools/euphony.mjs --subject eng --pool pe4s1` | 0 відхилень |
| `build` — усі перестановки tiles ∪ extra (будь-якої довжини) через `SLID_LANG.check(…, "en")` (node, vm) | a09: «Tom is eight and I am ten», «I am ten and Tom is eight»; a28: «Emma’s mum is an engineer»; a45: «Where does Andrii live?»; a46: «I live in a village near Poltava», «I live near Poltava in a village». Інших зарахованих немає |
| `word` через `SLID_LANG.wordVerdict(…, "en")` | a06 Are/are ✅; a16 haven’t / have not ✅, hasn’t ❌; a21 have got ❌ (OALD: коротка відповідь без got); a15 auntie ✅; a50 ukrainian → «Almost» (keepCase, ціль вправи) |
| Ключі `word` з кінцевим `.!?` | немає (усі 14 `word` перевірено) |
| `python3 tools/test-answer-ui.py --suite content --pool pe4s1` | не запущено: у контейнері немає Python-модуля playwright → CI (job browser) |

## 2. Покриття урок × sk (≥ 3 вправи, рівні 1–3)
Порахував скриптом: для кожного уроку взяв `sk` оцінюваних (не `hyp`) екранів і вправи пулу.
| Урок | sk уроку | Вправи (L1/L2/L3) |
|---|---|---|
| l1 | func, phon, gram | по 1/1/1 на кожен sk |
| l2 | read, vocab, gram, func | по 1/1/1 |
| l3 | vocab, gram, phon | vocab 1/1/1, gram 1/2/1, phon 1/1/1 |
| l4 | read, vocab | по 1/1/1 |
| l5 | write, gram, func | по 1/1/1 |
| l6 | vocab, write, phon | по 1/1/1 |
`sk` поза уроком немає. phon (l1, l3, l6) і read (l2, l4) з уроків покрито.

## 3. `stress`: один наголос у CD і OALD (відкрито в цій сесії, curl)
| Слово | CD (UK) | OALD (BrE) | Поділ у пулі | Вердикт |
|---|---|---|---|---|
| hello | heˈləʊ (також hə-) — https://dictionary.cambridge.org/dictionary/english/hello | /həˈləʊ/ — https://www.oxfordlearnersdictionaries.com/definition/english/hello | hel\|+lo | ✅ |
| goodbye | ɡʊdˈbaɪ — …/english/goodbye | /ˌɡʊdˈbaɪ/ — …/definition/english/goodbye | good\|+bye | ✅ |
| afternoon | ˌɑːf.təˈnuːn — …/english/afternoon | /ˌɑːftəˈnuːn/ — …/definition/english/afternoon | af\|ter\|+noon | ✅ |
| doctor | ˈdɒk.tə — …/english/doctor | /ˈdɒktə(r)/ — …/definition/english/doctor_1 | +doc\|tor | ✅ |
| teacher | ˈtiː.tʃə — …/english/teacher | /ˈtiːtʃə(r)/ — …/definition/english/teacher | +teach\|er | ✅ |
| pilot | ˈpaɪ.lət — …/english/pilot | /ˈpaɪlət/ — …/definition/english/pilot_1 | +pi\|lot | ✅ |
| engineer | ˌen.dʒɪˈnɪə — …/english/engineer | /ˌendʒɪˈnɪə(r)/ — …/definition/english/engineer_1 | en\|gi\|+neer | ✅ |
| driver | ˈdraɪ.və — …/english/driver | /ˈdraɪvə(r)/ — …/definition/english/driver | +driv\|er | ✅ |
| artist | ˈɑː.tɪst — …/english/artist | /ˈɑːtɪst/ — …/definition/english/artist | +art\|ist | ✅ |
| farmer | ˈfɑː.mə — …/english/farmer | /ˈfɑːmə(r)/ — …/definition/english/farmer | +farm\|er | ✅ |
| surname | ˈsɜː.neɪm — …/english/surname | /ˈsɜːneɪm/ — …/definition/english/surname | +sur\|name | ✅ |
| Ukrainian | juːˈkreɪ.ni.ən — …/english/ukrainian | /juːˈkreɪniən/ — …/definition/english/ukrainian | U\|+krai\|ni\|an | ✅ |
| nationality | ˌnæʃ.əˈnæl.ə.ti — …/english/nationality | /ˌnæʃəˈnæləti/ — …/definition/english/nationality | na\|tion\|+al\|i\|ty | ✅ |
Усі 13 слів мають `<u>` в info чи `stress` уроків l1, l3, l6 (опора D-019). IPA лише для звірки — у пул не перенесено.

## 4. Джерело `src` (ТОП 3–4)
PDF відкрито в цій сесії: https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (SHA-1 aa8d161a330bbede5b21484f47be92d12548f785 — збігається з facts/eng.md).
| `src` | Що на сторінці (pdftotext) | Вердикт |
|---|---|---|
| top34 с. 62 | 4-ий клас: «Я, моя родина і друзі — місцепроживання, населені пункти», функції «привітатися, попрощатися, представити себе/когось»; мовний інвентар (3 кл.) — ‘’s’ for possession, ‘a/an’ with jobs | ✅ |
| top34 с. 63 | 4 кл., граматика: Determiner ‘a/an’ with jobs (a22, a25, a28, a29) | ✅ |
| top34 с. 54 | A1: «Пише … своє ім’я, національність, адресу, вік…» (l6) | ✅ |
`sources`: `id: "top34"`, `program: true`, title/url — як у facts/eng.md. `srcPage`/`adapted` немає. to be, have got, live/lives — с. 62 (тема), як пояснено в нотатках автора; прийнятно.

## 5. Завдання → звідки відповідь → вердикт
Розв'язав кожну вправу сам до звірки з ключем. «Друга відповідь» — перевірено для кожного gaps/word/build/match/pick.
| Вправа | Моя відповідь | Опора (урок, екран) | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 | morning | l1 info «Hello and goodbye» (before 12) | ні (9 am) | ✅ |
| a02, a05, a08 | -lo, -bye, -noon | l1 info `<u>`, stress | — | ✅ (a08 steps спрощено) |
| a03 | am / is / are | l1 info «I am, she is, we are» | ні | ✅ |
| a04 | morning / afternoon / evening / night | l1 info (час, «before bed») | «Good night» — лише до bed; «Good evening» — лише 8 pm | ✅ |
| a06 | are | l1 info «Are you ten? – Yes, I am.» | «Aren’t you ten?» граматичне, але заперечних питань уроки не вчать, дитина 4 кл. його не напише — не оцінюю як ❌ | ✅ (зауваження) |
| a07 | evening / night | l1 info, l1 choice 7 pm | ні | ✅ |
| a09 | Tom is eight and I am ten (і навпаки) | l1 info; body (вік) | обидва порядки в ключі; «Is Tom eight and am I ten» — безглузде питання, body «writes about» | ✅ |
| a10 | brother / eight | текст у body | ні | ✅ |
| a11 | aunt, uncle, grandma, grandad, cousin | l2 info «My family» | ні (кожна пара однозначна) | ✅ |
| a12 | has / have | l2 info «I’ve got» | ні | ✅ |
| a13 | have | l2 info short answers | ні | ✅ |
| a14 | sister | body | little sister у ключі | ✅ |
| a15 | aunt | l2 info | auntie/aunty у ключі | ✅ |
| a16 | haven’t | l2 info, l2 choice | have not — contractions | ✅ |
| a17 | 3 пари | l1, l2 info | ні | ✅ |
| a18 | uncle | body + l2 info | ні | ✅ |
| a19 | aunt / cousin / aunt | body + l2 info | ні | ✅ |
| a20 | have (→ has) | l2 info | «Tom and I have got» — правильне | ✅ |
| a21 | have | l2 info | «have got» — ні (OALD, l2 choice) | ✅ |
| a22 | a / an | l3 info «A or an?» | ні | ✅ |
| a23 | 5 пар | l3 info «Jobs» | ні | ✅ |
| a24, a27, a31 | doc-, teach-, pi-, -neer, driv-, art-, farm- | l3 info `<u>` | — | ✅ |
| a25 | an / a / an | l3 info («an English teacher» є в уроці) | ні | ✅ |
| a26 | artist | l3 info; «an» відсікає painter, pilot | ні | ✅ |
| a28 | Emma’s mum is an engineer | l3 info | питальний порядок відсічено «Emma tells» (як e5s5) | ✅ |
| a29 | a (→ an) | l3 info | ні | ✅ |
| a30 | flies planes / works on a farm / works at a school | l3 info | ні | ✅ |
| a32 | city / village | l4 info | ні | ✅ |
| a33 | city / museums | body | ні | ✅ |
| a34 | city | l4 info | town відсікає «very big» | ✅ |
| a35 | Poltava | body («there» = Poltava), l4 final | ні | ✅ |
| a36 | near / city | l4 info «near = not far from» | ні | ✅ |
| a37 | town / cook | body | ні | ✅ |
| a38 | Zelena Dolyna / Ukraine | l5 info «An address» | ні | ✅ |
| a39 | lives / live | l5 info «I live, she lives» | ні | ✅ |
| a40 | address | l5 info | ні | ✅ |
| a41 | Ukraine | l5 info, l5 choice | ні | ✅ |
| a42 | does | l5 info | ні | ✅ |
| a43 | 4 пари | l5 info, l5 order | «It’s 25 Lisova Street» на «Where do you live?» — немає антецедента it; «I live in Kharkiv» — не адреса | ✅ |
| a44 | Taras Koval / Lviv / Ukraine | l5 info, l5 choice | ні | ✅ |
| a45 | Where does Andrii live? | l5 info | ні (перебір) | ✅ |
| a46 | I live in a village near Poltava | l4 info near, l5 info | другий порядок у ключі; «Near Poltava I live…» без коми — не приймаємо (NOTE verifier-e4s6) | ✅ |
| a47 | lviv, koval, ukrainian | l6 info «Capital letters» | «I» уже велика | ✅ |
| a48 | 5 пар | l6 intro, info «A form» | ні | ✅ |
| a49, a52, a55 | sur-, -krai-, -al-, -neer, doc- | l6 info `<u>`, l3 info | — | ✅ |
| a50 | Ukrainian | l6 info | ні (keepCase — ціль вправи) | ✅ (body переписано, правка 1) |
| a51 | England / English / Ukraine / Ukrainian | l6 info | ні | ✅ |
| a53 | i, england, english | l6 info «the word I» | ні | ✅ |
| a54 | age | l6 info «Age – how old you are» | ні | ✅ |

## 6. Мова, рівень, BrE, лексика
- BrE: mum, grandad, auntie/aunty, café, «at 8 pm» (формат TQ-123 «3.30 pm» без крапок). AmE-правопису й лексики немає. A, B, C, IPA, «Listen» — немає. `uk` немає.
- Нові слова поза уроками (скрипт: слова пулу мінус слова розділу): імена канону (Danylo, Odesa); інструкції з glossary/eng.md («Match the halves», «Match the questions and the answers»); у поясненнях — same, most, last, always, remember, countries, goes, tells (tell — у `why` l2); у тексті вправи — лише «ball» (a20, Pre A1, Cambridge YLE Starters) — на відповідь не впливає. ✅
- Довжина речень у поясненнях: кілька речень по 9–11 слів (переважно лапки з текстом); a08 steps спрощено (правка 2). Для 4 кл. зрозуміло, `uk` не потрібне.
- Вправи власні: дослівних копій екранів уроку немає, крім a50 (до правки: та сама умова, що в l6 word, з іншим ім'ям) — переписано.
- Герої — канон (inbox NOTE e4s2, style-eng-g4-5, writer-e6s1): Emma — 10, брат Tom 8, без сестри, тітка Lucy, кузен Jack; дідусь Emma — cook і має дім (e5s8) — «lives there too» (a37) не суперечить; бабуся Andrii «comes to Kyiv» (a07) — узгоджується з дідусем у Chernihiv (e4s7); тітка Oksana в Poltava (l4). Нових героїв немає.

## 7. Авторське право (WebSearch, лапки)
| Фрагмент | Запит | Результат |
|---|---|---|
| a35 «…is small. It has got one shop and lots of fields» | `"is small. It has got one shop and lots of fields"` | дослівного збігу немає |
| a37 «My town is not very big. It has got a park and lots of shops» | `"My town is not very big. It has got a park and lots of shops"` | немає (схожі тексти test-english, LearnEnglish Teens — інші) |
| a53 «Tom and I live in a small town in England. We are English» | так само в лапках | немає |
| a33 «It’s a very big city. It has got lots of museums» | так само | немає |
| a30 «…is a pilot. She flies planes … is a farmer. He works on a farm» | два фрагменти в лапках | дослівного збігу немає (типові ESL-шаблони «He’s a pilot. He flies planes») |
| a11 «My mum’s sister is my aunt / dad’s brother … uncle / uncle’s child … cousin» | три фрагменти в лапках | немає (найближче — «My mother’s sister is my aunt», beespeaker.com — загальновживане визначення) |
✅ блокувальних збігів немає.

## 8. Спірні місця автора
1. a43 — згоден: пари однозначні (див. §5).
2. a46 — другий порядок граматичний, у ключі лишаємо.
3. a54 — регістр не оцінюється (keepCase немає), «Age»/«age» — ok (перевірено wordVerdict).

## 9. Правки
Зроблені (content/eng/pool-g4-e4s1.js):
1. a50 — body/hint/steps переписано: була майже дослівна копія екрана `word` l6 (Oksana → Mariia). Тепер: «Mariia fills in the club form. She lives in Kharkiv, in Ukraine.» + «Write her nationality with a capital letter.»; hint «Mariia is from Ukraine. She’s …». Ключ і id не змінено.
2. a08 steps — «In all three words, the strong part is at the end.» → «All three: the strong part is at the end.» (рівень 4 кл.).
3. `status: "verified"`, `meta.factcheck` → verifier-pe4s1.

Рекомендовані: немає. a06 «Aren’t you ten?» у ключ не додаю — заперечних питань уроки не вчать.
