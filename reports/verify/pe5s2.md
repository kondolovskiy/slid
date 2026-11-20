# Верифікація: пул pe5s2 (англійська, 5 кл., розділ e5s2 «School life»)

Верифікатор: verifier-pe5s2 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s2.js` (57 вправ a01–a57) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s2.md. Опора — лише уроки content/eng/g5-e5s2.js (verified, reports/verify/e5s2.md) і 4 кл.

**Вердикт: пул придатний, `verified`.** Блокувальних знахідок немає. Сам вніс 4 дрібні правки (§5): друга правильна відповідь у a11, a16 і a55; слово з двома наголосами в a10. TQ немає. Людині — нічого обов'язкового (див. §7, примітки).

## 1. Прогін

| Перевірка | Результат |
|---|---|
| `node tools/validate.mjs --pool pe5s2` | 0 помилок, 0 попереджень (до правок і після) |
| `node tools/personalization-qa.mjs --pool pe5s2 --strict` | до: лише «ще не verified»; після статусу verified — без зауважень |
| Покриття урок × sk (мій підрахунок у node) | l1 vocab 1,1,2,3; read 1,2,3; phon 1,2,3; write 1,2,3 · l2 vocab 1,2,3; gram 1,2,2,3; phon 1,2,3; read 1,2,3 · l3 gram 1,1,2,2,3; func 1,2,3 · l4 gram 1,1,2,2,3; read 1,2,3 · l5 vocab 1,2,3; gram 1,2,2,3; read 1,2,3 · l6 func 1,1,2,2,3 — кожна пара ≥ 3 вправи з рівнями 1–3; sk збігаються з sk екранів уроків |
| `build`: усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` з app/lang.js (node vm) | a12: «my favourite subject is PE», «PE is my favourite subject»; a19: «Emma plays tennis after school», «after school Emma plays tennis»; a29: «Does Taras play chess»; a37: «Bohdan is never late»; a39: «Oksana never goes to school by bus»; a47: «don’t use your phone»; a56: «Could you repeat that, please». Рушій приймає лише ключі; граматичних порядків поза ключем не знайшов |
| `word`: `wordVerdict` | ключі без кінцевого знака (усі 13); «music.», «Tuesday.», «tuesday», «Pairs» — ok; a28, a33, a48 `contractions` — «does not», «doesn't», «do not» — ok; a16 «o'clock» / «o’clock» — ok |
| `node tools/euphony.mjs --pool pe5s2` | без зауважень |
| `test-answer-ui.py --suite content --pool pe5s2` | не запускав: у контейнері немає Python-модуля playwright (прогін — у CI) |

## 2. Програма й джерело

`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md; `src` — «mpim с. 20 / 21 / 22». Сторінки звірив зі звітом уроку reports/verify/e5s2.md §1 (верифікатор уроку відкривав PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf): с. 20 — «Шкільне життя» й функція уточнення (l1, l2 vocab/phon/read, l4–l5 read, l5 vocab, a55); с. 21 — imperatives, can (permission), could (requests) (l5 gram, a53, a54, a56, a57); с. 22 — Present Simple з прислівниками частоти (l2 gram, l3, l4 gram). ✅

## 3. Форми й норма (словники відкрито в цій сесії, curl)

| Твердження / форма | Джерела | Вердикт |
|---|---|---|
| music — наголос на 1-му | CD «uk ˈmjuː.zɪk» — https://dictionary.cambridge.org/dictionary/english/music; OALD «/ˈmjuːzɪk/» — https://www.oxfordlearnersdictionaries.com/definition/english/music | ✅ |
| science — 1-й | CD «uk ˈsaɪ.əns» — https://dictionary.cambridge.org/dictionary/english/science; OALD «/ˈsaɪəns/» — https://www.oxfordlearnersdictionaries.com/definition/english/science | ✅ |
| timetable — 1-й | CD «uk ˈtaɪmˌteɪ.b(ə)l» — https://dictionary.cambridge.org/dictionary/english/timetable; OALD «/ˈtaɪmteɪbl/» — https://www.oxfordlearnersdictionaries.com/definition/english/timetable_1 | ✅ |
| English — 1-й | CD «uk ˈɪŋ.ɡlɪʃ» — https://dictionary.cambridge.org/dictionary/english/english; OALD «/ˈɪŋɡlɪʃ/» — https://www.oxfordlearnersdictionaries.com/definition/english/english_1 | ✅ |
| history — 1-й (склади — за CD) | CD «uk ˈhɪs.t(ə)r.i» — https://dictionary.cambridge.org/dictionary/english/history; OALD «/ˈhɪstri/» — https://www.oxfordlearnersdictionaries.com/definition/english/history | ✅ |
| Ukrainian — 2-й | CD «uk juːˈkreɪ.ni.ən» — https://dictionary.cambridge.org/dictionary/english/ukrainian; OALD «/juːˈkreɪniən/» — https://www.oxfordlearnersdictionaries.com/definition/english/ukrainian_1 | ✅ |
| breakfast, homework — 1-й | CD «uk ˈbrek.fəst», «uk ˈhəʊm.wɜːk» — https://dictionary.cambridge.org/dictionary/english/breakfast, …/homework; OALD «/ˈbrekfəst/», «/ˈhəʊmwɜːk/» — https://www.oxfordlearnersdictionaries.com/definition/english/breakfast_1, …/homework | ✅ |
| afternoon — головний на 3-му | CD «uk ˌɑːf.təˈnuːn» — https://dictionary.cambridge.org/dictionary/english/afternoon; OALD «/ˌɑːftəˈnuːn/» — https://www.oxfordlearnersdictionaries.com/definition/english/afternoon | ✅ |
| **subject — два наголоси** | CD: іменник «uk ˈsʌb.dʒekt», дієслово «uk səbˈdʒekt» — https://dictionary.cambridge.org/dictionary/english/subject; OALD subject_1 noun «/ˈsʌbdʒɪkt/», subject_3 verb «/səbˈdʒekt/» — https://www.oxfordlearnersdictionaries.com/definition/english/subject_1, …/subject_3 | ❌ для `stress` без контексту → правка a10 (§5) |
| «Yes, you could» як дозвіл — ні (a57) | CD Grammar could «Warning: We don’t use could to give or refuse permission. We use can» — https://dictionary.cambridge.org/grammar/british-grammar/could | ✅ дистрактор однозначно хибний |
| half past seven; «half seven» — BrE розмовне | CD half «A1 (also UK informal half) Half past a particular hour…» — https://dictionary.cambridge.org/dictionary/english/half; OALD half_3 «half past one, two, etc.» — https://www.oxfordlearnersdictionaries.com/definition/english/half_3 | ✅ «half» без past ніде не хибний варіант (a14: «seven {o’clock\|half}» — «seven half» не англійська) |
| «nine am / a.m.» — правильна відповідь у a16 | CD a.m. «School starts at 9 a.m. and finishes at 3.30 p.m.» — https://dictionary.cambridge.org/dictionary/english/am; OALD a.m. «It starts at 10 a.m.» — https://www.oxfordlearnersdictionaries.com/definition/english/a-m; «am» без крапок — у 4 кл. (e4s4 «at 10 am», e4s8 «10 am»; TQ-120) | ❌ другої відповіді не було в ключі → правка a16 |

## 4. Завдання → моя відповідь → опора → вердикт

Розв'язував сам, не дивлячись у ключ, потім звіряв. «= » — збіг з ключем.

| Вправа | Моя відповідь | = | Опора (D-019) | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 match | maths–numbers, music–songs, art–drawing…, PE–sport… | = | l1 info «School subjects» | ні (усі праві перебрано) | ✅ |
| a02 word | music | = | l1 info | ні | ✅ |
| a03 gaps | science, timetable, break | = | l1 info ×2 | ні | ✅ |
| a04 pick | maths, history, PE | = | l1 info; chess — l4 | ні (timetable, break, chess — не предмети) | ✅ |
| a05 gaps | maths, art | = | розклад на екрані | ні | ✅ |
| a06 choice | on Wednesday | = | текст на екрані | ні | ✅ |
| a07 word | Tuesday | = | розклад на екрані (= l1 intro) | ні | ✅ |
| a08 stress | mu, sci | = | l1 info `<u>` | — | ✅ |
| a09 stress | time, Eng, his | = | l1 info `<u>` | — | ✅ |
| a10 stress | krai, Eng, sub(?), mu | = | l1 info `<u>` | **subject — два наголоси (ім./дієсл.)** | ❌ → правка: subject → history; ✅ після |
| a11 gaps | timetable, on | = | l1 info | **«I’ve got a new subject» граматичне й можливе** (контексту, що відсікає, немає) | ❌ → правка: дистрактор subject → break (як у l1 Final); ✅ після |
| a12 build | My favourite subject is PE. / PE is my favourite subject. | = | l1 info; Andrii — PE (l7 T1) | обидва порядки в ключі; «are» — хибне | ✅ |
| a13 gaps | got, maths, music, break | = | розклад на екрані, l1 info | ні | ✅ |
| a14 gaps | o’clock, eight | = | l2 info | ні | ✅ |
| a15 match | 7.00–seven o’clock … 9.30–half past nine | = | l2 info, l7 | ні | ✅ |
| a16 word | o’clock (або am) | ≈ | l2 info; am — 4 кл. | **«nine am» правильне, у ключі не було** | ❌ → правка: answer + "am", "a.m.", рядок у steps; ✅ після |
| a17 gaps | gets, has | = | l2 info | ні | ✅ |
| a18 word | goes | = | l2 info | ні | ✅ |
| a19 build | Emma plays tennis after school. (+ After school…) | = | l2 info; tennis — l2 Final | обидва в ключі | ✅ |
| a20 pick | watchs | = | l2 info (watch → watches) | інших помилок немає | ✅ |
| a21 stress | break, home | = | l2 info `<u>` | — | ✅ |
| a22 stress | noon, break | = | l2 info `<u>` | — | ✅ |
| a23 stress | noon, home, krai, time | = | l1 + l2 info `<u>` | — | ✅ |
| a24 gaps | 7.00, 8.30 | = | текст на екрані + l2 info | ні | ✅ |
| a25 choice | She does her homework. | = | текст на екрані | ні | ✅ |
| a26 word | breakfast | = | текст на екрані | ні | ✅ |
| a27 gaps | Does, does | = | l3 info | ні | ✅ |
| a28 word | doesn’t | = | l3 info | does not — у ключі через contractions | ✅ |
| a29 build | Does Taras play chess? | = | l3 info | лише ключ | ✅ |
| a30 pick | don’t | = | l3 info | ні | ✅ |
| a31 gaps | Does, does, doesn’t, go | = | l3 info ×2 | ні | ✅ |
| a32 match | за займенником | = | l3 info | ні | ✅ |
| a33 word | doesn’t | = | l3 info; Emma — велосипед (канон) | does not — у ключі | ✅ |
| a34 gaps | What time, go, doesn’t | = | l3 build «What time does…»; l3 info | «What does Emma get up» неграматичне | ✅ |
| a35 gaps | always walks, is never | = | l4 info «Where does it go?» | ні (CD Grammar always — у звіті e5s2) | ✅ |
| a36 word | usually | = | l4 info (●●●●○) | ні | ✅ |
| a37 build | Bohdan is never late. | = | l4 info (on time = not late) | лише ключ; «is always late» суперечить body | ✅ |
| a38 pick | walk | = | l2 + l4 info | ні | ✅ |
| a39 build | Oksana never goes to school by bus. | = | l4 info | лише ключ | ✅ |
| a40 choice | never | = | текст на екрані | ні | ✅ |
| a41 gaps | always, often | = | текст на екрані | ні | ✅ |
| a42 word | always | = | l4 #3 (every day → always) | ні | ✅ |
| a43 match | Open your books / Look at the board / Work in pairs / Put your hand up | = | l5 info | «Look at the books.» окремо граматичне, але тоді «Open your» лишається без пари — інше повне зіставлення неможливе | ✅ (примітка) |
| a44 word | pairs | = | l5 info | ні | ✅ |
| a45 gaps | Look at, open, up | = | l5 info | ні | ✅ |
| a46 gaps | Close, Don’t | = | l5 info ×2 | ні | ✅ |
| a47 build | Don’t use your phone! | = | l5 info; use your phone — l5 Final | лише ключ | ✅ |
| a48 word | Don’t | = | l5 info | do not — у ключі; «Never talk…, please» граматичне, але неприродне з please і не навчене як імператив | ✅ (примітка) |
| a49 pick | Reads | = | l5 info (no -s) | ні | ✅ |
| a50 choice | Don’t eat in class. | = | текст на екрані; eat, sandwich — 4 кл. (e4s4, e4s5) | ні | ✅ |
| a51 gaps | twenty, read, in pairs | = | текст на екрані | ні | ✅ |
| a52 word | talk | = | текст на екрані | ні | ✅ |
| a53 gaps | don’t, Could you | = | l6 info | Can I — інше значення | ✅ |
| a54 match | Can I…–Yes, you can; Could you repeat…–Of course. Page twenty.; spell–B-A-G; mean–A short time… | = | l6 info ×2; bag — 4 кл.; break — l1 | ні («Page twenty» — лише до repeat; «Yes, you can» — не на прохання) | ✅ |
| a55 word | spell | = | l6 info «How do you spell» | **«How do you write “board”?» з відповіддю-літерами граматичне й природне** | ❌ → правка: answer ["spell", "write"]; ✅ після |
| a56 build | Could you repeat that, please? | = | l6 info, intro | «Could I repeat that» — граматичне, але суперечить body; «Please could you…» з плиток не складається (плитка «that,» і велика Could) | ✅ (спірне 1 автора — прийнятно) |
| a57 gaps | Can I, can, does | = | l6 info (You want to do it → Can I); CD Grammar could | Could you відсічено body «She wants to open the window» (робить сама) | ✅ (спірне 2 — прийнятно) |

Спірне автора 3 (a48, `before: ""`) — validate не заперечує, рушій приймає «Don’t», «don't», «Do not»: ✅. Спірне 4 (`choice` лише для sk read: a06, a25, a40, a50) — відповідає POOL_TYPES: ✅.

Лексика: усі слова — з уроків e5s2 або 4 кл. (перевіряв grep по content/eng/g4-*.js для eat, sandwich, bag, hot, am). AmE-правопису й лексики немає; at break, maths, timetable, PE, Mum, Ms без крапки — BrE. Літер A, B, C, позиційних посилань, «Listen», IPA, поля `uk` немає. `steps` і `hint` — речення ≤ 8 слів, рівень 5 кл.

## 5. Авторське право (WebSearch з лапками, у сесії)

| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| a24 «I have breakfast at half past seven. Lessons start at half past eight. I go to bed at ten o'clock» | дослівного збігу немає; лише типові тексти daily routine (British Council та ін.) з іншими реченнями |
| a25 «I walk to school with Dmytro. Lessons start at half past eight. After lunch, I do my homework» | збігу немає |
| a26 «I get up at half past six. I have breakfast at seven o'clock. Then Polina and I walk to school» | збігу немає |
| a40 «I always get up at seven. I usually go to school by bus. I am never late» | збігу немає |
| a41 «I always walk to school. I often read at break. I sometimes draw after school» | збігу немає |
| a50 «Come to lessons on time. Put your hand up. Don't eat in class. Work in pairs» | збігу немає; загальні шкільні правила з іншим формулюванням |
| a51 «Open your books at page twenty. Read the text. Don't write in the books. Then work in pairs» | дослівного збігу немає; у підручнику (GI A1+ SB, fliphtml5) — список окремих класних команд «Work in pairs. Open your books at page 11. Don't talk. Read the text.» у іншому порядку й з іншими реченнями — загальномовні формули, не охороняються; фрагмент — це intro e5s2l5 (перевірено у звіті e5s2) з іншим числом |
| a13 «On Friday we've got four lessons. First we've got science and maths. We sing songs in music» | збігу немає |
| a45 «Look at the board, please. Now open your books at page ten» + «puts her hand up» | збігу немає |

## 6. Герої (звір з каноном: reports/verify/e5s2.md §7, уроки e5s2, inbox NOTE)

Нові деталі writer-pe5s2 не суперечать урокам: Bohdan (клас Andrii, автобус, never late — l4, l7 T3; четвер — новий розклад), Zoriana (always walks — l4 #3; з мамою — нове), Daryna (usually walks, reads at break — l4), Emma (велосипед, встає о 7.30, теніс після школи — l2 Final; п'ятниця — нове, science у пн/чт не виключає п'ятниці), Oksana й Dmytro (пішки разом, домашнє після обіду, Dmytro дивиться TV увечері — l2, l3), Mariia (встає о 6.30, з Polina пішки — l2), Taras (шахи — l4, Lviv; встає о 7, лягає о 10 — e4s5 «go to bed late» не суперечить), Andrii (PE — улюблений, l7 T1; встає о 7, сніданок о 7.30 — l2 intro).
Поза цим пулом знайшов розбіжність: **pe5s3 a03 «Mariia gets up at 7 o’clock»** проти e5s2l2 і pe5s2 a26 «I get up at half past six» — рядок CONFLICT в inbox (чужий файл не чіпав).

## 7. Правки (зроблені мною) і примітки

1. **a10** `stress`: «+sub|ject» → «+his|to|ry», steps відповідно (subject у CD і OALD має два наголоси: ім. ˈsʌb-, дієсл. səbˈ-; у вправі без контексту частини мови). Рівень і hint («Three words have the strong part at the start») не змінилися.
2. **a11** gaps: дистрактор «subject» → «break» («I’ve got a new subject» — граматична друга відповідь; так само зроблено в l1 Final).
3. **a16** word: answer + "am", "a.m." («Lessons start at nine am» правильне, am — з 4 кл.); steps: «Nine am is right too.» Перевірено `wordVerdict`: am, a.m., AM — ok; pm — ні.
4. **a55** word: answer ["spell", "write"] («How do you write “board”?» — граматичне, відповідь — літери).
5. Статус пулу → `verified`, `meta.factcheck` → цей звіт.

Примітки (не блокують, людині не обов'язково):
- e5s2l1 #7 `stress` (урок, verified) теж містить «+sub|ject» — за тим самим правилом краще замінити (рядок NOTE в inbox; файл уроку не чіпав).
- a43, a48 — див. таблицю: окремий граматичний варіант є, але повної другої відповіді немає / варіант неприродний; лишаю.

`node tools/validate.mjs --pool pe5s2` після правок — 0 помилок, 0 попереджень. Build не запускав (паралельний запуск).

## 8. Вердикт

| Пул | Вердикт |
|---|---|
| pe5s2 (57 вправ, уроки e5s2l1–l6) | **verified** (після 4 правок) |
