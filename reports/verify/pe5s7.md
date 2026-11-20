# Верифікація пулу pe5s7 (eng, 5 кл., розділ e5s7 «My town or village»)

Верифікатор: verifier-pe5s7, 2026-11-20. Пул не писав. Файл: `content/eng/pool-g5-e5s7.js` (64 вправи a01–a64).
Прочитано: скіли `content-verify` (§2–§7, «Англійська»), `math-pool-diag` (§2б, §2в); CONTENT_SCHEMA §10; `POOL_TYPES` (app/learn.js:2009–2011); уроки `content/eng/g5-e5s7.js` (verified); reports/verify/e5s7.md; style/eng.md, glossary/eng.md, facts/eng.md, pitfalls-content «Англійська»; рядки eng PITFALL і NOTE (герої) у memory/short/inbox.md.

**Вердикт: пул придатний, `status: "verified"`.** Зроблено 3 правки (§5), відкритих ❌ і ⚠️ немає. Людині: нічого блокувального; спостереження для учителя — §6.

## 1. Механіка й схема
- `node tools/validate.mjs --pool pe5s7`: 0 помилок, 0 попереджень (і до правок, і після них).
- Типи — лише з `POOL_TYPES`: gaps 19, word 9, choice 9, match 7, stress 6, pick 5, build 5, multi 4. `choice`/`multi` трапляються лише в `sk` read і cult. `sources` — одне джерело `mpim` з `program: true`; `src` = «mpim с. N».
- Матрицю урок × `sk` звірено вручну (personalization-qa її для пулу eng не перевіряє, пише лише «без матриці… ≥ 3 вправ»). `sk` екранів уроку → вправи (рівні):

| урок | sk екранів | вправ і рівні |
|---|---|---|
| l1 | vocab, phon | vocab 5 (1,1,2,2,3); phon 3 (1,2,3) |
| l2 | gram, func | gram 6 (1,1,2,2,3,3); func 3 (1,2,3) |
| l3 | vocab, gram, read | vocab 4 (1,1,2,3); gram 4 (1,2,2,3); read 3 (1,2,3) |
| l4 | func, gram, read | func 6 (1,1,2,2,3,3); gram 3 (1,2,3); read 3 (1,2,3) |
| l5 | read, func, vocab | read 3; func 3; vocab 3 — у кожному 1,2,3 |
| l6 | vocab, read, cult, phon, write | у кожному по 3 вправи рівнів 1,2,3 |
| l7 (boss) | — | вправ немає, так і задумано |

Кожна пара має ≥ 3 вправи рівнів 1–3; `sk` вправи завжди є серед `sk` екранів її уроку. id a01–a64 унікальні.

## 2. Факти (лише з розділу; джерела відкрито в цій сесії)
| твердження (вправи) | джерела | вердикт |
|---|---|---|
| Kotliarevskyi — письменник з Poltava, жив там (a53, a56, a58) | https://en.wikipedia.org/wiki/Ivan_Kotliarevsky («born in Poltava… died in Poltava»); https://uk.wikipedia.org/wiki/Котляревський_Іван_Петрович (народився й помер у Полтаві) | ✅ |
| Перші частини «Енеїди» — 1798 (a51, a52, a55, a57, a58) | en.wikipedia (там само: «first three parts… 1798 in Saint Petersburg»); uk.wikipedia (перше видання 1798 р., три частини); ЕСУ https://esu.com.ua/article-887900 («Енеида на малоросійскій языкъ перелицїованная», Санкт-Петербургъ, 1798) | ✅ |
| З «Енеїди» починається нова українська література (a55) | en.wikipedia: «usually regarded as the starting point of modern Ukrainian literature»; uk.wikipedia: «першого твору нової української літератури» | ✅ |
| У Полтаві є музей Котляревського (a54, a57, a58, a64) | en.wikipedia: «In 1952, the Kotliarevsky Museum was opened in Poltava»; ЕСУ article-887900 (Полтавський літературно-меморіальний музей) | ✅ |
| «more than 200 years ago» (a55) | 2026 − 1798 = 228; у розділі — l6 fbText «That’s more than 200 years ago!» | ✅ |
| Eneida — poem, funny, in Ukrainian (a56, a57) | формулювання розділу; джерела — reports/verify/e5s7.md §2 (en.wikipedia Eneida «burlesque poem in the Ukrainian language») | ✅ |

Нових фактів поза розділом у пулі немає.

## 3. Словники (`stress`, a06–a08, a59–a61; curl у цій сесії)
| слово | CD UK — https://dictionary.cambridge.org/dictionary/english/<слово> | OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<слово> | `+` у пулі |
|---|---|---|---|
| library | ˈlaɪ.br… | /ˈlaɪbrəri/, /ˈlaɪbri/ | +li ✅ |
| museum | mjuːˈziː.əm | /mjuˈziːəm/ | +se ✅ |
| cinema | ˈsɪn.ə.mɑː, ˈsɪn.ə.mə | /ˈsɪnəmə/, /ˈsɪnəmɑː/ | +cin ✅ |
| station | ˈsteɪ.ʃ… | /ˈsteɪʃn/ | +sta ✅ |
| history | ˈhɪs.t… | /ˈhɪstri/ | +his ✅ |
| famous | ˈfeɪ.məs | /ˈfeɪməs/ | +fa ✅ |
| writer | ˈraɪ.tə | /ˈraɪtə(r)/ | +wri ✅ |
| poem | ˈpəʊ.ɪm | /ˈpəʊɪm/, /ˈpəʊəm/ | +po ✅ |
| between | bɪˈtwiːn | /bɪˈtwiːn/ | +tween ✅ |

У кожного слова один наголос. Усі слова підкреслені `<u>` в info свого уроку (l1, l3, l6). Склади поділено так само, як в уроці. Варіанти library/history з двох складів (OALD) на вибір складу не впливають: наголос на першому.
Для a46: OALD right_2 (adverb): «+ adv./prep. all the way; completely: They drove right up to the door.» — https://www.oxfordlearnersdictionaries.com/definition/english/right_2 (див. правку 2).

## 4. Відповіді й опора (D-019)
Кожну вправу я розв'язав сам, поки не дивився на ключ. Маршрути звірено з `img/eng/e5s7/town-map.svg`: знімок у headless Chromium плюс координати. Північний бік High Street із заходу: Café, Bank, Library, Post office, Cinema. Південний: Park (під café і bank), Museum (під library), Station Road (під post office) до Station, School (під cinema).
`build` перевірено повним перебором: усі підмножини плиток разом з `extra` у всіх порядках через `SLID_LANG.check(s, st, "en")` з `app/lang.js` (скрипт у scratchpad). Кожен порядок, що вживає всі `tiles`, я переглянув очима. `word` прогнано через `wordVerdict`.

| вправи | розв'язок і звідки відповідь | вердикт |
|---|---|---|
| a01–a05 (l1 vocab) | список місць в info l1; a05 — library/bookshop: hyp l1 і fbText «At a bookshop, you buy books»; a03 — ключ station / train station / railway station, «the station» відсікає `before` | ✅ |
| a06–a08 (l1 phon) | `<u>` в info l1; CD/OALD (§3) | ✅ |
| a09–a14 (l2 gram) | info l2 (one → is, two or more → are, aren’t any, How many… are there); переліку «There is a X and a Y» немає (PITFALL verifier-e5s7); a12 перебір: лише ключ («Are there in your village any museums» — не норма); a14 — «are not» зараховується (`contractions`) | ✅ |
| a15–a17 (l2 func) | короткі відповіді в info l2; a17 match: «Is there a museum? – Yes, there is» відсікає `body`, «How many…? – No…» неграматичне | ✅ |
| a18–a21 (l3 vocab) | info l3 + мапа: library opposite museum, cinema next to post office, cinema opposite school, park next to museum, library between bank і post office, café opposite park | ✅ |
| a22–a24 (l3 gram) | info l3 «Where is…? – It’s…»; a23 — school opposite cinema (мапа); a24 — обидва порядки «library and cinema» у ключі, решта перестановок неграматичні | ✅ |
| a25 (l3 gram) | «It’s» / «It is»; «The museum is» — теж правильна відповідь на «Where is the museum?», у ключі її не було | ❌ → правка 1 |
| a26–a28 (l3 read) | мапа: opposite museum = library; next to cinema = post office (school — навпроти); a28 — правдиві 0 і 1, bank навпроти park, cinema не між post office і bank | ✅ |
| a29–a34 (l4 func) | info l4 (стрілки, along/across, on the left, Excuse me, how do I get to…?); a31 — along «to the end» / across «to the other side» (PITFALL verifier-e4s7); a32 — перебір дає лише ключ. «turn left at the church and Go…» відсікає `keepCase`, як l5 build у розділі. «Go left along this street and turn at the church» — неповна вказівка (turn без напрямку), не відповідь; a33 — пари однозначні (Is it far? / Is there…?); a34 — «straight left», «Turn ahead», «where do I get to» неграматичні; «straight on» ніде не хибний | ✅ |
| a35–a37 (l4 gram) | info l4 «Start with the verb: Go…, Turn…»; a37 — «Oksana goes… every day» спирається на 3-тю особу з e4s3 (always goes, never goes): 4 кл., раніше за розділ; спірне місце автора 1 — опора є | ✅ |
| a38–a40 (l4 read) | відповідь у тексті на екрані; a40 — правдиві 0 і 2 | ✅ |
| a41–a43 (l5 read) | мапа + info l5 («your left and right»); a43: зі Station Road ліворуч = на захід, museum, потім park ліворуч, library/bank праворуч | ✅ |
| a44–a46 (l5 func) | info l5 (go past = don’t stop, along, across); a45: праворуч = на схід, school праворуч; через High Street — cinema next to post office; a46: до park — ліворуч; пастка `right` давала другу правильну відповідь | ❌ → правка 2 |
| a47–a49 (l5 vocab) | мапа: library → навпроти museum; cinema ↔ school, café ↔ park; post office → навпроти Station Road → кінець — station | ✅ |
| a50–a52 (l6 vocab) | info l6 (history, famous, writer, poem, old ↔ new); 1798 — текст l6 | ✅ |
| a53–a54 (l6 read) | текст на екрані вправи | ✅ |
| a55 (l6 read) | варіант «…are more than 200 years old»: «years old» ні в уроках 4–5 кл., ні в e5s7 (grep g4-*, g5-e5s1…7); у розділі є лише «more than 200 years ago» (l6 fbText). Висновок правильний, але рамка ширша за урок | ⚠️ → правка 3 |
| a56–a58 (l6 cult) | l6 part 1/2 і outro; a58 «He lived in Poltava» — дослівно з part 1 | ✅ |
| a59–a61 (l6 phon) | `<u>` в info l6 і l3 (between); CD/OALD | ✅ |
| a62–a64 (l6 write) | info l6 («There is an old church in my village», «famous for»); a63 — перебір дає лише ключ («There is in my village an old church» — не норма); a64 — «famous for» з info, «in Ukrainian» з part 1; спірне місце автора 3 — це outro l6 | ✅ |

Лексику вправ і рамок перевірено grep по g4-*.js і g5-e5s1…7. bookshop, parcel, borrow, brings it back, visitor, tourist, same side, middle, past, Don’t stop, end, with your finger, literature, year (e4s8), plural (e4s2, e5s4), question word (e5s3, у значенні What/When/Do), means (e4s1) — усі вже були. «years old» — ні (правка 3).
Ключі `word` без кінцевого `.!?` (a03, a10, a14, a16, a20, a25, a30, a47, a49). Регістр перевірено: «Station», «station.» зараховуються, «the station» ні.
Літер A/B/C і позиційних посилань немає; Listen / IPA / AmE-правопису й лексики немає (grep). BrE: centre, café, films, bookshop, parcel, railway station, «in my street».
Герої — канон inbox: Zelena Dolyna (церква, пошта, один магазин, автобусна зупинка, дві ферми; немає museum і cinema), Andrii і Sofiia — Kyiv, Tom — Англія, Taras — Lviv, Mariia — без міста. Суперечностей немає.
Спірні місця автора: 1 (a37) — ✅; 2 (a55) — правка 3; 3 (a64) — ✅; 4 (a32) — ✅, `keepCase` відсікає зворотний порядок; 5 (a45) — ✅, маршрут однозначний.

## 5. Правки (зроблено)
1. **a25** — `answer: "It’s"` → `["It’s", "The museum is"]`. «The museum is opposite the library.» — правильна відповідь, а «Write the missing word» її не відсікає. Рушій тепер зараховує It’s / It is / The museum is / The museum’s.
2. **a46** — `extra: ["right"]` → `["goes"]`. З пасткою «right» складалося «Go right along Station Road and turn left.»: right = «all the way» (OALD right_2, §3), правильне речення, яке рушій відхилив би. З «goes» перебір приймає лише ключ. Ліво чи право дитина все одно вибирає (куди поставити «left»), підказка лишилась.
3. **a55** — варіант 0 «The first parts of Eneida are more than 200 years old.» → «1798 is more than 200 years ago.». Так формулює розділ (l6 fbText) і вже кажуть `hint` і `steps` вправи. Індекси `correct` не змінилися.
4. Статус пулу `draft` → `verified`, `meta.factcheck` і шапку файлу оновлено.

Після правок: validate — 0/0; перебір `build` повторено, ключі ті самі.

## 6. Для людини (не блокує)
- `test-answer-ui.py --suite content --pool pe5s7` і плейтест не запускав: у контейнері немає Python-модуля playwright, а build робить оркестратор. Прогнати в CI.
- a32/a46 спираються на конвенцію «перша плитка з великої + `keepCase`» (як l2/l3/l5 build розділу). Чи дитині вистачає цього сигналу, покаже плейтест.

## 7. Авторське право (WebSearch, дослівно в лапках)
| фрагмент | запит | результат |
|---|---|---|
| a38 Mariia | "Turn left at the bank. The park is on the right, next to the cinema" | збігів немає |
| a39 Taras | "Turn right at the café. Then go across the road. The museum is on the left, opposite the park" | збігів немає |
| a40 Andrii | "Go along this street to the end. Turn left at the school. Then go across the road" | збігів немає (загальні worksheets про напрямки) |
| a04 Emma | "On Saturday I go to the library. I borrow two books there" | збігів немає |
| a54 | "There is a museum about Ivan Kotliarevskyi in Poltava. People come to see his books" | збігів немає |
| a45 | "Go along Station Road to High Street. Turn right and walk to the school" | збігів немає |

## 8. Вердикт
Пул pe5s7 — **verified**. Відкритих ❌ і ⚠️ немає. Правок 3: a25, a46, a55. TQ не потрібні.
