# Верифікація: пул pe7s4 (англійська, 7 кл., розділ e7s4 «Cinema and theatre»)

Верифікатор: verifier-pe7s3-pe7s4, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s4.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g7-e7s4.md. Опора: уроки `content/eng/g7-e7s4.js` (verified, reports/verify/write-eng-g7-e7s4.md). Еталон оформлення: reports/verify/write-eng-pool-g6-e6s7.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, вправ без опори й збігів з опублікованими текстами я не знайшов. Реальних фактів у пулі немає: фільми, театр і вікові позначки вигадані. Зробив 2 правки (a19, a20). Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7) і прочитав `pdftotext`:
- с. 31: «Детально передає зміст книги або фільму і…»;
- с. 32: «Кіно і театр — Відвідування театру, кінотеатру», «Елементи інтер’єру театру», «пропонувати, приймати…»;
- с. 34: «Comparatives: with ‘(so) much’, ‘a (little) bit’, … ‘even’», «than, as … as, … the same … as», «Modifying: … ‘enough’, … ‘too’ + ‘to’-infinitive», «Could: … suggestions».

`src` відповідають сторінкам: l1–l2 і l3 func — с. 32, l3 gram і l5 — с. 34, l6 gram — с. 34, l6 write/read — с. 31 ✅. l4 (-ed/-ing) позначено «с. 32». Це тема з лексикою вражень, окремого рядка граматики для неї в програмі немає, як і в уроці (нотатки автора). Не блокує.

## 2. Факти
Реальних дат, чисел, імен і назв немає. Space Cats, The Old Castle (2), Carpathian Animals, Ice Bridge, The Clever Cat, City Theatre — вигадані. Ocean Friends, Captain Cat, Robots on Mars — з уроку. Ціни й вікові позначки умовні. Lviv Opera House у пулі не згадано. Герої узгоджені з каноном glossary/eng-heroes.md: Bohdan — теніс; Dmytro — 9 (e7s1); Zlata — молодша сестра Тараса; Polina — Kharkiv, подруга Mariia ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `gaps`, `pick`, `stress`, `word`, `match`: `SLID_LANG.solution` зараховується через `check(…, "en")`. `build`: я перебрав `SLID_LANG.check` по всіх перестановках усіх підмножин tiles + extra (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe7s3-4/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | comedy; documentary | = | l1 info #2 | ні | ✅ |
| a02 match | 4 пари | = | l1 #2 | перебрав усі праві — ні | ✅ |
| a03 word | comedy | = | l1 #2 | cartoon відсічено «no drawings» | ✅ |
| a04 pick | [comedy], [cartoon], [documentary] | = | l1 #2, l1 pick | ні | ✅ |
| a05 word | science fiction | + sci-fi | l1 #2 | sci-fi у ключі (CD «short form of science fiction») | ✅ |
| a06–a08 stress | <u>com</u>edy, car<u>toon</u>, ad<u>ven</u>ture, <u>fic</u>tion, <u>hor</u>ror | = | l1 #2 `<u>` | — | ✅ (словники — §4) |
| a09 choice | a cartoon | = | текст | ні | ✅ |
| a10 multi | [0,2] | = | текст | ні | ✅ |
| a11 choice | Carpathian Animals | = | текст | ні | ✅ |
| a12 gaps | box office; seat | = | l2 info #2 | ні | ✅ |
| a13 match | 4 пари | = | l2 #2 | перебрав — ні | ✅ |
| a14 word | stage | = | l2 #2 | ні | ✅ |
| a15 gaps | box office; seats; curtain; interval | = | l2 #2 | ні | ✅ |
| a16 choice | Sunday at 5.00 pm | = | квиток | ні | ✅ |
| a17 choice | Row 7, Seat 4 | = | квиток, l2 choice | ні | ✅ |
| a18 multi | [1,2] | = | текст | ні | ✅ |
| a19 stress | <u>cur</u>tain, <u>au</u>dience | = | l2 #2 `<u>` | — | ⚠️ у наборі всі слова з першим наголошеним складом (pitfalls-content.md п. 19) → додав car<u>toon</u> (l1) |
| a20 stress | <u>in</u>terval, <u>cur</u>tain | = | l2 #2 | — | ⚠️ те саме → додав ad<u>ven</u>ture (l1), hint узгоджено |
| a21 stress | <u>in</u>terval, car<u>toon</u>, <u>au</u>dience, ad<u>ven</u>ture | = | l2 #2, l1 #2 | — | ✅ (слова l1 — з раніше пройденого уроку, п. 20 дозволяє) |
| a22 gaps | watch; meet | = | l3 info #2 | ні | ✅ |
| a23 word | go | = | l3 #2 | «Use one verb: go, see or buy» відсікає come | ✅ |
| a24 build | Why don’t we buy the tickets online? | = | l3 #2, l3 build | 13 699 — лише ключ | ✅ |
| a25 pick | [watching] | = | l3 #2 | ні | ✅ |
| a26 gaps | go; see; ask | = | l3 #2 | ні | ✅ |
| a27 pick | [to], [going] | = | l3 #2 | ні | ✅ |
| a28 sort | 3 yes / 2 no | = | l3 #5 | ні | ✅ |
| a29 choice | I’m not sure… Why don’t we see a comedy? | = | l3 #5 | ні | ✅ |
| a30 gaps | Let’s; Sorry, I can’t | = | l3 #2, #5 | «Let go» неграматичне в цьому значенні | ✅ |
| a31 order | question → idea → no + idea → yes | = | l3 intro, #5 | порядок однозначний | ✅ |
| a32 gaps | boring; bored | = | l4 #2 | «felt boring» — хибне за контекстом (почуття), як в уроці | ✅ |
| a33 word | excited | = | l4 #2 | «Write excited or exciting» | ✅ |
| a34 multi | [0,2,4] | = | l4 #2 | ні | ✅ |
| a35 pick | [boring] | = | l4 #2, l4 pick | ні | ✅ |
| a36 build | Are you interested in cartoons? | = | l4 #2 | 1956 — лише ключ | ✅ |
| a37 gaps | excited; about; interested; in | = | l4 #2 | ні | ✅ |
| a38 choice | Andrii | = | текст | ні | ✅ |
| a39 choice | Mariia was interested in the documentary. | = | текст + l4 #2 | ні | ✅ |
| a40 multi | [0,1] | = | текст | ні | ✅ |
| a41 gaps | much; a bit | = | l5 #2 | ні | ✅ |
| a42 word | as | = | l5 #5 | ні | ✅ |
| a43 gaps | even; as | = | l5 #2, #5 | ні | ✅ |
| a44 build | This play isn’t as long as the ballet. | = | l5 #5, l5 build | 13 699 — лише ключ (keepCase відсікає «the ballet isn’t…») | ✅ |
| a45 gaps | a bit; much; as | = | l5 #2, #5 | ні | ✅ |
| a46 pick | [very] | = | l5 #2 | ні | ✅ |
| a47 choice | …as long as… | = | l5 #5 | ні | ✅ |
| a48 choice | The Old Castle is a bit longer… | = | l5 #2 | «a bit more expensive» хибне (₴150 → ₴300) | ✅ |
| a49 multi | [0,2,3] | = | l5 | ні | ✅ |
| a50 gaps | much; a bit | = | l5 #2 | even серед варіантів немає | ✅ |
| a51 gaps | as; even; the same as | = | l5 | ні | ✅ |
| a52 gaps | even; much; as; as; the same | = | l5 | ні | ✅ |
| a53 gaps | old enough; too | = | l6 #2 | ні | ✅ |
| a54 word | enough | = | l6 #2 | ні | ✅ |
| a55 build | Dmytro is too young to see the film. | = | l6 #2 | 13 699 — лише ключ | ✅ |
| a56 choice | Zlata isn’t old enough to stay up late. | = | l6 #2 | ні | ✅ |
| a57 gaps | near enough; to see; too | = | l6 #2, l6 choice | ні | ✅ |
| a58 order | name → about → liked → who for → mark | = | l6 #6 | план однозначний | ✅ |
| a59 gaps | documentary; interesting; too | = | l1, l4, l6 | ні | ✅ |
| a60 gaps | horror film; much; enough; as; exciting | = | l1, l5, l6, l4 | ні | ✅ |
| a61 choice | young children | = | текст | ні | ✅ |
| a62 multi | [0,3] | = | текст | ні | ✅ |
| a63 choice | Yes, he’s old enough to see it. | = | текст, l6 #2 | ні | ✅ |

**Покриття:** 6 уроків, 63 вправи. Кожна пара (урок, sk) з оцінюваних не-hyp екранів має ≥ 3 вправи рівнів 1–3 (перевірив скриптом). `sk` кожної вправи є серед `sk` її уроку. У кожної вправи lvl 2–3 є `hint`. Boss l7 без вправ ✅.

## 4. Форми, BrE, лексика, авторське право
- **Наголос, curl у цій сесії.** CD (https://dictionary.cambridge.org/dictionary/english/<word>): comedy «/ˈkɒm.ə.di/», cartoon «/kɑːˈtuːn/», adventure «/ədˈven.tʃər/», fiction «/ˈfɪk.ʃən/», horror «/ˈhɒr.ər/», curtain «/ˈkɜː.tən/», audience «/ˈɔː.di.əns/», interval «/ˈɪn.tə.vəl/». OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<word>): «/ˈkɒmədi/», «/kɑːˈtuːn/», «/ədˈventʃə(r)/», «/ˈfɪkʃn/», «/ˈhɒrə(r)/», «/ˈkɜːtn/», «/ˈɔːdiəns/», «/ˈɪntəvl/». Збігаються з ключами ✅.
- **sci-fi:** CD «short form of science fiction» (https://dictionary.cambridge.org/dictionary/english/sci-fi) ✅.
- **Лексика:** я звірив скриптом з g4–g6, e7s1–e7s3 і e7s4 до `lesson` включно. Позначено лише robot, а в l1 є robots ✅.
- **BrE:** film, cinema, theatre, «at the weekend» не вжито. movie, AmE-правопису й IPA немає. A/B/C і «Listen» немає ✅.
- **Вік і зміст:** horror лише називають як жанр, сцен страху немає. Вікові позначки вигадані ✅.
- **Копії уроків:** я перевірив 6-грами проти всіх g4–g11. Збіги лише у формулах («the film is for people aged…», «My mark: … out of 5», «Why don’t we…»). Рамки з тим самим ключем не повторюються ✅.
- **Авторське право:** WebSearch з лапками — «But the play was long, and Zlata got tired in the second part» (a40). Збігів немає ✅. Інші тексти коротші й складені з шаблонних фраз героїв.

## 5. Правки (зроблені)
1. **a19:** words → `["+cur|tain", "+au|di|ence", "car|+toon"]`, steps доповнено.
2. **a20:** words → `["+in|ter|val", "ad|+ven|ture", "+cur|tain"]`. Hint тепер «…at the start, in the middle or at the end?», steps доповнено.
   Причина для обох — pitfalls-content.md п. 19: у наборі має бути хоч одне слово з іншим наголошеним складом. Без нього вправу розв'язує правило «завжди перший склад».
3. `status: "verified"`, `meta.factcheck` — посилання на цей звіт.

**Рекомендація без правки:** у verified-уроці e7s4l2 stress (екран #5) теж усі три слова з першим наголошеним складом. Урок — не мій файл. Рядок у inbox для стилю.

## 6. Прогін
- `node tools/validate.mjs --pool pe7s4` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe7s4` — без помилок.
- Після правок повторив перебір `check`: усі `solution` зараховуються, build приймає лише ключі.
- Браузерний прогін `test-answer-ui.py --pool` лишається CI.

**Вердикт по пулу: verified.**
