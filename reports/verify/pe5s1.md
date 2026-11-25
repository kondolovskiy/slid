# Верифікація: пул pe5s1 (англійська, 5 кл., розділ e5s1 «Me, my family and friends»)

Верифікатор: verifier-pe5s1 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s1.js` (57 вправ a01–a57) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s1.md. Опора — лише уроки content/eng/g5-e5s1.js (verified) і 4 кл. (e4s*), reports/verify/e5s1.md.

**Вердикт: пул придатний, `status: "verified"`.** Я зробив 2 дрібні правки: у двох вправах була лексика з пізнішого уроку чи з поза уроків (§5). Неправильних ключів і других правильних відповідей немає. Питань учителю немає (TQ не додано).

## 1. Програма (`src`) — відкрито в цій сесії

| Що | Джерело | Вердикт |
|---|---|---|
| с. 20: тема «Я, моя родина, мої друзі». Підтеми «Мої родинні зв'язки», «Професії батьків», «Мої друзі та їхні уподобання». Функції «описувати, розповідати, характеризувати» | МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf — PDF завантажено заново, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 (= facts/eng.md), `pdftotext -f 20 -l 20` | ✅ `mpim с. 20` — vocab, read, write, phon |
| с. 21: «Clauses — Comparative: be like + noun or pronoun»; «Interrogatives: affirmative (Yes/No), affirmative (Wh-), negative»; «Demonstratives: this, that, these, those»; «Quantity: … some, any …» | той самий PDF, с. 21 | ✅ `mpim с. 21` — l2 gram, l4, func l5/l6 |
| с. 22: «Present simple: affirmative, negative, questions»; «Pronouns: Demonstrative, indefinite, possessive, quantity» | той самий PDF, с. 22 | ✅ `mpim с. 22` — l3, l5 gram, l6 gram |
| `sources`: `program: true`, сигла `mpim`, title/url — як у facts/eng.md | validate | ✅ |

## 2. Форми й наголос (словники відкрито в цій сесії, curl)

| Слово (`stress`) | CD (UK) | OALD (BrE) | Вердикт |
|---|---|---|---|
| dentist (a45, a46) | /ˈden.tɪst/ — https://dictionary.cambridge.org/dictionary/english/dentist | /ˈdentɪst/ — https://www.oxfordlearnersdictionaries.com/definition/english/dentist | ✅ +den\|tist, один наголос |
| mechanic (a45, a47) | /məˈkæn.ɪk/ — https://dictionary.cambridge.org/dictionary/english/mechanic | /məˈkænɪk/ — https://www.oxfordlearnersdictionaries.com/definition/english/mechanic | ✅ me\|+chan\|ic |
| police (a46, a47) | /pəˈliːs/ — https://dictionary.cambridge.org/dictionary/english/police | /pəˈliːs/ — https://www.oxfordlearnersdictionaries.com/definition/english/police | ✅ po\|+lice |
| photographer (a46, a47) | /fəˈtɒɡ.rə.fər/ — https://dictionary.cambridge.org/dictionary/english/photographer | /fəˈtɒɡrəfə(r)/ — https://www.oxfordlearnersdictionaries.com/definition/english/photographer | ✅ pho\|+tog\|ra\|pher |
| husband (a47) | /ˈhʌz.bənd/ — https://dictionary.cambridge.org/dictionary/english/husband | /ˈhʌzbənd/ — https://www.oxfordlearnersdictionaries.com/definition/english/husband | ✅ +hus\|band |
| daughter (a47) | /ˈdɔː.tər/ — https://dictionary.cambridge.org/dictionary/english/daughter | /ˈdɔːtə(r)/ — https://www.oxfordlearnersdictionaries.com/definition/english/daughter | ✅ +daugh\|ter |

Усі шість слів мають у CD і OALD один наголос, і всі підкреслені (`<u>`) в info уроків: l1 #3 — daughter, husband; l5 #4 — dentist, mechanic, police, photographer.
Решту норм (grandchild, only child, whose, its/it’s, this/that/these/those, короткі відповіді have got, What is she like?) звірив у CD і OALD верифікатор розділу (reports/verify/e5s1.md §2). Нових форм пул не вводить.

## 3. Завдання: моє розв'язання → опора (D-019) → друга відповідь → вердикт

Кожну вправу я розв'язав сам до того, як дивився на ключ. **`build`:** через `SLID_LANG.check(…, "en")` з app/lang.js (node vm) перебрав усі впорядковані підмножини `tiles ∪ extra`, разом 16 630 станів. **`word`:** перевірив `wordVerdict` на ключі й на кандидатів у другу відповідь. **gaps/pick/stress/match:** `check(solution)` — ок для всіх.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 gaps | daughter, son | l1 info #3 | ні | ✅ |
| a02 match | son, daughter, husband, wife | l1 info #3 | перебрав усі праві: ні | ✅ |
| a03 word | granddaughter | l1 info #3; body | grandchild — у ключі (OALD a1); grandson → ні | ✅ |
| a04 match | husband, wife, grandson, granddaughter | l1 info #3; body | ні | ✅ |
| a05 gaps | aunt, son, grandson | l1 match #5 (aunt), info #3; дерево в body | cousin — ні (Nadiia — сестра тата) | ✅ |
| a06 word | grandparents | l1 info #3 | «grandma and grandad» в обох порядках — у ключі; grandmother/grandfather в уроках не було | ✅ |
| a07 choice (read) | two | текст на екрані | ні | ✅ |
| a08 gaps (read) | sister, cousins, sister | текст на екрані | ні | ✅ |
| a09 multi (read) | 0, 2 | текст на екрані; would like — e4s4 | «She’s got a dog» — ні («I’d like a dog») | ✅ |
| a10 gaps | has, have | l2 info #3 | ні | ✅ |
| a11 gaps | a, any | l2 info #3 | «any sister» з одниною — ні | ✅ |
| a12 word | have | l2 info #3 | «have got» → ні (коротка відповідь без got, CD «Have got and have») | ✅ |
| a13 build | Has Mariia got any pets? | l2 info #3, #6 | рушій приймає лише ключ | ✅ |
| a14 pick | [a] sisters | l2 info #3 | «a brother», «any brothers» — правильні | ✅ |
| a15 word | child | l2 intro, #2, #7 | daughter → ні | ✅ |
| a16 gaps | cousin, aunt | l1, l2 intro; cousin, aunt — e4s1 | ні | ✅ |
| a17 match | an only child, cousin, uncle, grandma | l2 #2; uncle, cousin — e4s1 | перебрав усі праві: ні | ✅ |
| a18 gaps (write) | have, have | l2 info #3 | ні | ✅ |
| a19 word (write) | any | l2 info #3 | some у запереченні — ні; some/any у питанні не оцінюється (PITFALL writer-pe4s2) | ✅ |
| a20 gaps (write) | has, have, Have | l2 info #3, #9 | ні | ✅ |
| a21 gaps | his, her | l3 info #3 | ні | ✅ |
| a22 match | my, his, her, our, their | l3 info #3, #5 | ні | ✅ |
| a23 word | their | l3 info #5 | «Whose cat is it?» відсікає a/the (PITFALL verifier-e5s1); a, the, they → ні | ✅ |
| a24 build | Whose phone is this? | l3 intro («Whose is this red phone?»), info #3 | «Whose is this phone?» — у ключі; рушій приймає обидва й нічого більше | ✅ |
| a25 pick | [It’s] name → Its | l3 info #5 | друге It’s (= it is) — правильне | ✅ |
| a26 gaps | my, His, their, your | l3 info #3, #5 | «our jobs» — ні (Mariia не працює) | ✅ після правки 1 (§5) |
| a27 gaps | This, These | l4 info #3; in her hands | варіанти різняться лише числом | ✅ |
| a28 gaps | That, Those | l4 info #3; aren’t near | лише число | ✅ |
| a29 gaps | This, That | l4 info #3; in her hand / isn’t near | лише відстань | ✅ |
| a30 build | Are those your parents? | l4 info #3 | лише ключ; розповідне «Those are…» відсікає keepCase | ✅ |
| a31 pick | [That] horses | l4 info #3, #5 | That dog — правильне | ✅ після правки 2 (§5) |
| a32 word | these | l4 info #3, #7 | «Write this, that, these or those» відсікає my/the; those → «Almost» (ENGINE, відомо) | ✅ |
| a33 match | 1:1 як в info l5 #4 | l5 info #4 | dentist ↔ sick people — ні (спірне 4, §4) | ✅ |
| a34 gaps | dentist, police officer | l5 info #4 | ні | ✅ |
| a35 word | photographer | l5 info #4, Final | ні | ✅ |
| a36 gaps | works, a | l5 info #6 | ні | ✅ |
| a37 word | does | l5 info #6 | do → ні | ✅ |
| a38 gaps | an, paints, do | l5 info #6; engineer, artist — e4s1 | ні | ✅ |
| a39 gaps (func) | does | l5 #3, info #6 | «What is your mum do» — ні | ✅ |
| a40 match (func) | police officer / In Kharkiv / No, he isn’t / Yes, he does | l5 match #8 | перебрав усі пари: ні | ✅ |
| a41 build (func) | What does your mum do? | l5 #3 (контраст «asks about now»), info #6 | «What is your mum doing?» складається з пасток, але не питає про роботу (спірне 1, §4) | ✅ |
| a42 choice (read) | Andrii’s grandad | текст на екрані | ні | ✅ |
| a43 gaps (read) | photographer, dad | текст на екрані | ні | ✅ |
| a44 multi (read) | 0, 2 | текст на екрані | ні | ✅ |
| a45–a47 stress (phon) | як ключ | `<u>` у l5 #4 і l1 #3; словники §2 | один наголос | ✅ (спірне 3, §4) |
| a48 gaps | likes, doesn’t | l6 info #3 | ні | ✅ |
| a49 word | doesn’t | l6 info #3 | does not, doesn't — ок (`contractions`) | ✅ |
| a50 build | Does Yaroslav like basketball? | l6 info #3, #5 | лише ключ | ✅ |
| a51 pick | [don’t] | l6 info #3 | Does…? – Yes, she does — правильне | ✅ |
| a52 match (func) | likes drawing / funny and kind / No, she doesn’t | l6 info #6 | ні | ✅ |
| a53 gaps (func) | like | l6 info #6 | ні | ✅ |
| a54 gaps (func) | is, does | l6 info #6; відповіді на екрані | ні | ✅ |
| a55 choice (read) | drawing | текст на екрані | ні | ✅ |
| a56 gaps (read) | likes, doesn’t like, village | текст на екрані | ні | ✅ |
| a57 multi (read) | 1, 2 | текст на екрані | ні | ✅ |

**`build`, усі підмножини:** a13 — 1956 станів, a24 — 325, a30 — 325, a41 — 13 699, a50 — 325. Рушій приймає лише рядки з `answer` (у a24 обидва ключі). Неповних рядків і інших порядків не приймає.
**Ключі `word` без кінцевого `.!?`:** a03, a06, a12, a15, a19, a23, a32, a35, a37, a49 — ✅.
**choice/multi для read:** у choice одна правильна, у multi правильні — лише твердження з тексту ✅.
**Покриття урок × sk** (рахував скриптом з екранів уроку; `personalization-qa --pool pe5s1 --strict` — без «БРАКУЄ» після статусу). Пари урок × sk і кількість вправ на рівнях 1–3: l1 vocab — 6. l2 read — 3, gram — 5, vocab — 3, write — 3. l3 gram — 6. l4 gram — 6. l5 read, vocab, gram, func, phon — по 3. l6 read — 3, gram — 4, func — 3. У кожній парі ≥ 3 вправи й усі рівні 1–3. Вправ із `sk`, якого немає на оцінюваних екранах свого уроку, немає.

## 4. Спірні місця автора 1–4

1. **a41** — пастки is/doing складають «What is your mum doing?». Речення граматичне, але умова каже «wants to know the job». Саме цей контраст l5 #3 пояснює у `fbText` («asks about now»), а `hint` питає «A job or now?». **Не друга відповідь — лишаю.** Рушій її не приймає, тож дитина дістане «неправильно» з поясненням у `steps`.
2. **a32** — «those» на ключ «these» дає «Almost: check the spelling.». Вада рушія, вже записана (ENGINE verifier-e5s1, engine-eng-rule-tables п. 2), ключ правильний. **Не блокує.**
3. **a47** — husband і daughter з l1 у вправі l5 phon. Слова підкреслені в l1 #3, а це раніший урок того ж розділу (PITFALL verifier-pe4s8 забороняє лише пізніші уроки). **Прийнятно.**
4. **a33** — «A dentist ↔ looks after sick people» не є правильною парою: визначення l5 #4 розводять nurse (sick people) і dentist (teeth). **Друга пара — ні.**

## 5. Правки (зроблено в content/eng/pool-g5-e5s1.js)

1. **a26 (урок l3):** «His job is to keep people safe … What do your parents do?» — це лексика й питання уроку l5, а вправа належить l3 (PITFALL verifier-pe4s8). Тепер: «This is {*my|me} dad. {*His|Her} car is black. Mum and Dad like {*their|our} jobs. Have {*your|you} parents got a car?» (have got — l2, job — e4s1). Ключі ті самі (my, His, their, your), у `steps` замість «his job» тепер «his car».
2. **a31 (урок l4):** слова *cow* немає в жодному уроці (e4s*, e5s1), а дитина мусить знати, що «That cow» — однина, бо інакше не визнає його правильним. Тепер «Two horses and a dog … That dog is black and white», `hint` і `steps` вирівняно. Ключ той самий ([That] horses).
3. **Статус:** `draft` → `verified`, `meta.factcheck: "verifier-pe5s1 (reports/verify/pe5s1.md)"`.

Після правок: `node tools/validate.mjs --pool pe5s1` — **0 помилок, 0 попереджень**. `personalization-qa --pool pe5s1 --strict` — без «БРАКУЄ». Перебір `build` і `check(solution)` повторив — ок.

## 6. BrE, рівень, без звуку, герої, авторське право

- **BrE:** mum, grandad, grandma, shop assistant, at the window; AmE-правопису й лексики немає (grep color/mom/favorite/apartment). Апостроф ’, прямих `'` немає. IPA, «Listen», літер A/B/C в `opts` і позиційних посилань немає. Кирилиця — лише в коментарях і `src`.
- **Рівень 5 кл.:** `steps` і `hint` — короткі речення зразком і «→», як в уроках. `uk` немає (у пулі це помилка validate).
- **Герої — канон:** Taras — two brothers and a little sister Zlata, собака й кішка (e5s1 l2, inbox verifier-e5s1). Mariia — only child, без тварин, мама dentist, тато police officer, дядько Oleh photographer. Andrii — сестра Sofiia, п'ять кузенів, тато engineer (e4s1), Nina teacher і Vasyl driver (e5s1 l1). Yaroslav — два брати й сестра, chess, basketball, не football, quiet (e5s1 l6). Halyna — drawing, music, не football (l6). Ostap — friendly and funny, drawing (boss T6). Liudmyla — dentist, дружина Roman (boss T1, T5). Emma — Tom, кішка Snowy (білу — l3 Final). Суперечностей немає.
  Нові дрібні деталі: Mariia «would like a dog» (a09); тато Mariia працює в Kharkiv і любить роботу (a40); Liudmyla «looks after children’s teeth» (a44). Ще одна: **Aunt Iryna — тітка Andrii, «paints pictures» (a42)**. У e4s1 #329 Iryna — artist у реченні без названого мовця, разом із «my grandma is a teacher», тож прив'язка до Andrii правдоподібна, але нова — у NOTE.
- **Авторське право (WebSearch з лапками):**

| Фрагмент | Запит | Результат |
|---|---|---|
| a09 Mariia | `"I haven't got any brothers or sisters. I'm an only child. I haven't got any pets, but I'd like a dog"` | збігу немає (есе про єдиних дітей) |
| a57 Yaroslav | `"He has got two brothers and a little sister. He likes reading and chess"` | збігу немає |
| a56 Halyna | `"Halyna is my best friend. She lives in my village. She likes music and drawing"` | збігу немає (British Council «My best friend» — інші тексти учнів) |
| a44 Taras | `"My mum is an artist. She paints pictures of" "is a dentist. She looks after children's teeth"` | збігу немає |
| a07 Taras | `"I've got two brothers and a little sister" "We've got a dog and a cat"` | збігу немає (дописи учнів British Council — інші) |
| a25 Emma | `"We've got a white cat. Its name is Snowy. It's very funny"` | збігу немає |
| a14 Oksana | `"I've got a brother, Dmytro. I haven't got a sisters. Have you got any brothers"` | збігу немає |
| a42 Andrii | `"My dad is an engineer. My grandma Nina is a teacher. My grandad Vasyl is a driver"` | збігу немає |

## 7. Не запускалось
`python3 tools/test-answer-ui.py --suite content --pool pe5s1` — Python-модуля playwright у контейнері немає (AGENTS.md §3). Цей прогін іде в CI, job `browser`.

## 8. Вердикт
**pe5s1 — `verified`.** Зроблено 2 правки змісту і статус. Відкритих ❌ і ⚠️ немає. Людині: питань немає; `approved` ставить лише вчитель.
