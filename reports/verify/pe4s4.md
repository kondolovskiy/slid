# Верифікація: пул pe4s4 (англійська, 4 кл., розділ e4s4 «Shops and shopping»)

Верифікатор: verifier-pe4s4 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s4.js` (коміт fcfeb89) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Опора — уроки `content/eng/g4-e4s4.js` (verified) і reports/verify/e4s4.md.

**Вердикт: пул придатний, `status: "verified"`.** 50 вправ розв'язано; неправильних ключів, правильних дистракторів і завдань без опори немає. Зроблено 3 дрібні правки (§5). Нових питань учителю немає.

## 1. Механіка й покриття
- `node tools/validate.mjs --pool pe4s4` — 0 помилок, 0 попереджень (до й після правок).
- `node tools/personalization-qa.mjs --pool pe4s4 --strict` — після `verified` зауважень немає; кожна пара урок × `sk` (l1 vocab; l2 vocab/read/gram; l3 gram; l4 gram/phon/func/read; l5 func/gram/write; l6 func/read/phon) — ≥ 3 вправи рівнів 1, 2, 3. `sk` вправ збігаються з `sk` екранів уроків.
- `sources`: один запис `top34`, `program: true`, URL ТОП 3–4 (як у facts/eng.md); `src` — «top34 с. 52 / 62 / 63», сторінки збігаються з reports/verify/e4s4.md §1.
- `build` — **усі** впорядковані підмножини плиток разом з `extra` через `SLID_LANG.check(…, "en")` (app/lang.js у node vm):

| Вправа | Плитки (з extra) | Перебрано | Рушій приймає | Інший граматичний порядок? |
|---|---|---|---|---|
| a18 | How much rice do we need + many | 13 699 | лише «How much rice do we need» | ехо-питання «we need how much rice» відсічено `keepCase` (How з великої) |
| a29 | How much are the sweets + is | 1 956 | лише ключ | «the sweets are How much» — ні (keepCase) |
| a39 | I’d like a pen, please + likes | 1 956 | лише ключ | кома в плитці «pen,» відсікає «please» на початку |
| a40 | I’d like to buy a birthday card + buys | 13 699 | лише ключ | ні |
| a41 | Would you like a bag + Are | 1 956 | лише ключ | «you would like a bag» відсічено keepCase і умовою «What does the assistant ask?» |
| a44 | Sorry, I’ve only got ₴100 (без extra) | 325 | обидва ключі (only got / got only) | «Sorry, only I’ve got» — інший зміст, не приймається — правильно |

Пастки `extra` — інші граматичні форми, не регістр і не AmE-правопис.
- Ключі `word` без кінцевого `.!?` (перевірено всі 13; «yes.»-проблеми немає): відповідь з крапкою чи великою літерою зараховується.

## 2. Норми й наголос (словники відкрито в цій сесії, curl)
CD: https://dictionary.cambridge.org/dictionary/english/<слово> (UK); OALD: https://www.oxfordlearnersdictionaries.com/definition/english/<слово> (BrE).

| Слово (вправа) | Ключ | CD (UK) | OALD (BrE) | Вердикт |
|---|---|---|---|---|
| sixteen / sixty (a24) | six<u>teen</u> / <u>six</u>ty | ˌsɪkˈstiːn / ˈsɪk.sti | /ˌsɪksˈtiːn/ / /ˈsɪksti/ | ✅ |
| fourteen / forty (a25) | four<u>teen</u> / <u>for</u>ty | ˌfɔːˈtiːn / ˈfɔː.ti | /ˌfɔːˈtiːn/ / /ˈfɔːti/ | ✅ |
| nineteen / ninety (a25) | nine<u>teen</u> / <u>nine</u>ty | ˌnaɪnˈtiːn / ˈnaɪn.ti | /ˌnaɪnˈtiːn/ / /ˈnaɪnti/ | ✅ |
| seventeen / seventy (a26) | seven<u>teen</u> / <u>sev</u>enty | ˌsev.ənˈtiːn / ˈsev.ən.ti | /ˌsevnˈtiːn/ / /ˈsevnti/ | ✅ (OALD — 2 склади з складотворчим n; поділ на 3 — за CD, на наголос не впливає) |
| eighteen / eighty (a26) | eigh<u>teen</u> / <u>eigh</u>ty | ˌeɪˈtiːn / ˈeɪ.ti | /ˌeɪˈtiːn/ / /ˈeɪti/ | ✅ |
| fifteen (a50) | fif<u>teen</u> | ˌfɪfˈtiːn | /ˌfɪfˈtiːn/ | ✅ |
| sorry (a48, a49) | <u>sor</u>ry | ˈsɒr.i | /ˈsɒri/ | ✅ |
| present, ім. (a48, a50) | <u>pre</u>sent | ˈprez.ənt (ім.; дієсл. prɪˈzent) | present_1 /ˈpreznt/ | ✅ контекст «a present» — іменник |
| assistant (a49, a50) | as<u>sis</u>tant | əˈsɪs.tənt | /əˈsɪstənt/ | ✅ |
| bakery (a49) | <u>ba</u>kery | ˈbeɪ.kər.i | /ˈbeɪkəri/ | ✅ |
| supermarket (a50) | <u>su</u>permarket | ˈsuː.pəˌmɑː.kɪt | /ˈsuːpəmɑːkɪt/ | ✅ |
| bookstore (a03, правка 1) | — | «noun [C] mainly US … (also mainly UK bookshop)» | — | AmE-синонім → у ключ за TQ-122 «як зараз» |

Решта норм (поверхи BrE, on the … floor, how much/many з [U]/[C], would like + to, Here you are, Have a nice day, lift, closed) — ті самі, що звірено в reports/verify/e4s4.md §2 з URL; у пулі нових форм немає. Злічуваність: у how much / how many — лише carrots, oranges, sandwiches, bananas, eggs, sweets, pens, apples [C] і milk, water, bread, rice [U]; juice, cheese, cake, chocolate і неправильної множини немає (NOTE verifier-e4s4).

## 3. Завдання: моя відповідь → опора (D-019) → друга правильна → вердикт

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | sweet shop; bakery | = | l1 info #3 | supermarket серед варіантів немає | ✅ |
| a02 match | bakery–bread and cakes, bookshop–books, shoe shop–shoes, toy shop–toys and games | = | l1 info #3 | кожне ліве перебрав з усіма правими — інших пар немає | ✅ |
| a03 word | bookshop | bookshop / book shop (+ bookstore) | l1 info #3; «buy» відсікає library | bookstore (AmE) — додано (правка 1) | ✅ |
| a04 pick | bakery, supermarket | = | l1 info #3 + l1 multi #6 (food: supermarket, bakery, market) | ні | ✅ |
| a05 gaps | toy shop; market; shoe shop | = | l1 info #3 | ні | ✅ |
| a06 word | ground | = | l2 info #3 («In Britain» на екрані) | first (AmE) відсічено «In Britain» | ✅ |
| a07 match | OPEN–can go in, CLOSED–can’t, EXIT–go out, LIFT–up/down, PULL–pull | = | l2 info #7 | ні | ✅ |
| a08 gaps | CLOSED; lift; pulls | = | l2 info #3, #7; word #9 | ні | ✅ |
| a09 gaps | ground; second | = | план на екрані | ні | ✅ |
| a10 word | first | first / 1st | план + l2 info #3 | ні | ✅ |
| a11 gaps | toy shop; supermarket | = | план + «one floor up/down» (l2 info #3) | з варіантів лише один на кожному поверсі | ✅ |
| a12 gaps | on; on | = | l2 info #3, pick #6 | ні | ✅ |
| a13 pick | [in] | = | l2 pick #6 | ні | ✅ |
| a14 word | on | = | l2 info #3 | ні | ✅ |
| a15 gaps | many; much | = | l3 info #3, sort #4 (carrots) | ні | ✅ |
| a16 word | much | = | l3 info #3 | ні | ✅ |
| a17 pick | [many] bread | = | l3 info #3 | ні | ✅ |
| a18 build | How much rice do we need? | = | l3 info #3, build #8 | див. §1 | ✅ |
| a19 gaps | many; much; many | = | l3 info #3; boss T3 | ні | ✅ |
| a20 word | many | = | l3 info #3 | ні | ✅ |
| a21 gaps | is; It’s | = | l4 info #5 | ні | ✅ |
| a22 word | are | = | l4 info #5; «They’re» в умові | ні | ✅ |
| a23 pick | [is] | = | l4 info #5 | ні | ✅ |
| a24 stress | six<u>teen</u>, <u>six</u>ty | = | l4 info #3 (fif<u>teen</u>/<u>fif</u>ty) + l4 stress #4 fbText («-teen … at the end, -ty … at the start») — правило, яке 9-річна дитина переносить на 16/60 | — | ✅ (додано hint, правка 3) |
| a25 stress | four<u>teen</u>, <u>for</u>ty, nine<u>teen</u>, <u>nine</u>ty | = | те саме правило; hint його називає | — | ✅ |
| a26 stress | seven<u>teen</u>, <u>sev</u>enty, eigh<u>teen</u>, <u>eigh</u>ty | = | те саме правило | — | ✅ |
| a27 word | much | = | l4 word #7; «price» відсікає old/big | ні | ✅ |
| a28 gaps | much; It’s; are; They’re | = | l4 info #5 | ні | ✅ |
| a29 build | How much are the sweets? | = | l4 info #5 | див. §1 | ✅ |
| a30 word | 7 / seven | = | цінник на екрані | ні | ✅ |
| a31 gaps | ₴25; ₴60 | = | цінник на екрані | ні | ✅ |
| a32 word | 10 / ten | = | цінник + додавання (l4 #8) | ні | ✅ |
| a33 gaps | I’d like; please | = | l5 info #3 | «Yes, I do» — пастка (PITFALL writer-e5s3), «thank you» не варіант | ✅ |
| a34 word | would | = | l5 Final («What would you like?») | «do» — граматичне, але відповідь-замовлення «A cheese sandwich, please» відсікає | ✅ |
| a35 gaps | No, thank you; Yes, please | = | l5 info #3; «has got a big bag», «I’d like a birthday card» | ні | ✅ |
| a36 gaps | to buy; to buy | = | l5 info #3 | ні | ✅ |
| a37 pick | [buys] | = | l5 info #3 | ні | ✅ |
| a38 word | to | = | l5 info #3 | ні | ✅ |
| a39 build | I’d like a pen, please. | = | l5 choice #4 | див. §1 | ✅ |
| a40 build | I’d like to buy a birthday card. | = | l5 info #3, build #7 | див. §1 | ✅ |
| a41 build | Would you like a bag? | = | l5 info #3 | див. §1 | ✅ |
| a42 gaps | Can I help you; Here you are | = | l6 info #4 | ні | ✅ |
| a43 gaps | Thank you; Goodbye; Have a nice day | = | l6 info #4 | ні | ✅ |
| a44 build | Sorry, I’ve only got ₴100. | обидва місця only | l6 #3, boss T6 | див. §1 | ✅ |
| a45 gaps | friend; ₴300 | = | текст на екрані | ні | ✅ |
| a46 word | game | = | текст на екрані | **bag** — Mariia теж бере пакет («What does Mariia buy?») → уточнено питання (правка 2) | ✅ після правки |
| a47 gaps | wants; ₴50 | = | текст + віднімання | ні | ✅ |
| a48 stress | <u>sor</u>ry, <u>pre</u>sent | = | l6 info #4 `<u>` | — | ✅ |
| a49 stress | as<u>sis</u>tant, <u>ba</u>kery, <u>sor</u>ry | = | l6 info #4; bakery — l1 info #3 `<u>` (урок раніше в розділі) | — | ✅ |
| a50 stress | <u>pre</u>sent, as<u>sis</u>tant, <u>su</u>permarket, fif<u>teen</u> | = | l6 info #4, l1 info #3, l4 info #3 — усі підкреслені раніше | — | ✅ |

**Спірні місця автора:** 1) `stress` для phon — приймаю (CONTENT_SCHEMA §10 дозволяє, без нього пари не покрити). 2) слова з l1/l4 у l6 phon — приймаю: усі вони підкреслені в `info` попередніх уроків розділу (PITFALL verifier-e5s2 не порушено). 3) -teen/-ty з правила — приймаю: правило сформульоване в уроці (fbText l4 #4), словники підтверджують кожне слово (§2). 4) `keepCase` у a18/a29/a41 — приймаю, як l3 #8 уроку. 5) a11, a47 — рівень 3 доречний.

**Лексика:** усе з уроків e4s4 або Pre-A1/попередніх розділів (horses, cars, Grandma, picnic, notebook, game, chocolate cake). AmE-лексики й правопису, IPA, «Listen», літер A/B/C у тексті немає. Герої — за каноном (Andrii і Sofiia — Kyiv; Emma, Tom — Англія; Oksana, Dmytro — Poltava; Mariia — Kharkiv, подарунок для friend; Taras — Lviv без рідних у тексті); суперечностей з NOTE (герої) в inbox немає. Поверхи — лише в британській сцені.

## 4. Авторське право (WebSearch, дослівно в лапках)

| Фрагмент | Результат |
|---|---|
| a05 «Dmytro wants a new ball, so we go to the toy shop» | збігу немає |
| a08 «Tom wants the toy shop on the second floor. They go up in the lift» | збігу немає |
| a19 «How many sandwiches do we need for the picnic» + «how much water have we got» | збігу немає |
| a45 «It’s my friend’s birthday. I’d like to buy a present» + «Sorry, I’ve only got» | збігу немає |
| a42 «Good morning! Can I help you? Yes, please. I’d like a book about cars» | збігу немає |
| a46/a47 «This game is» + «Great! I’d like the game, please. Here you are» | збігу немає |

## 5. Правки (зроблені мною в content/eng/pool-g4-e4s4.js)
1. **a03:** до ключа додано «bookstore» (CD: «mainly US … also mainly UK bookshop»; TQ-122 «як зараз» — AmE-слово не карати; сцена в Kharkiv, британського контексту немає).
2. **a46:** друга правильна відповідь «bag» (Mariia на «Would you like a bag?» каже «Yes, please»). Додано рядок «Mariia wants a present for her friend.», питання → «What present does Mariia buy?». Ключ «game» без змін; «bag» рушій не зараховує.
3. **a24 (lvl 1):** додано `hint` «Sixteen is like fifteen. Sixty is like fifty.» — місток до підкреслених в уроці слів.
4. Статус `draft` → `verified`, `meta.factcheck`, рядок «Статус» у шапці.

Рекомендовано (не блокує): у a47 `steps` «₴200 – ₴150» — тире як знак мінус; на style-sync можна замінити на «−».

## 6. Вердикт
Пул pe4s4 — ✅ **verified** (уроки l1–l6). Плейтест і test-answer-ui не запускав (без build під паралельним запуском; Python playwright у контейнері відсутній) — після build оркестратором: `python3 tools/test-answer-ui.py --suite content --pool pe4s4`.
