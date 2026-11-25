# Верифікація e8s5 «Books and libraries» (eng, 8 кл.)

Верифікатор: verifier-e8s5, 2026-11-25. Скіл content-verify (+ розділ «Англійська»). Файл: content/eng/g8-e8s5.js. Задача: write-eng-g8-e8s5.
Вердикт: **усі 7 уроків → verified** після 7 мінімальних правок (4 критичні, 3 дрібні). `validate --section e8s5`: 0 помилок, 0 попереджень. stats: усі уроки в межах профілю 7–9; у boss l7 readWordsPerScreen «нетипово для сім'ї» (z=2.5): це відомий артефакт фіналу, у межах профілю. Плейтест не запускався, бо в контейнері немає Python-модуля playwright; його проганяє CI job `browser`.

## 1. Факти

| Твердження (екран) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Taras Shevchenko (1814–1861), poet and artist (l3 «Ukrainian writers», word) | https://en.wikipedia.org/wiki/Taras_Shevchenko (raw: birth 9.03.1814, death 10.03.1861); https://www.britannica.com/biography/Taras-Hryhorovych-Shevchenko (WebSearch: 1814; Імператорська академія мистецтв, учень Брюллова) | ✅ |
| *Kobzar* — book of poems, came out in 1840 (l3) | https://en.wikipedia.org/wiki/Kobzar_(poetry_collection) («1840 Ukrainian-language poetry collection», St Petersburg); https://www.britannica.com/topic/Kobzar (WebSearch: «Kobzar (1840)») | ✅ |
| Lesia Ukrainka (1871–1913), poet (l3) | https://en.wikipedia.org/wiki/Lesya_Ukrainka (raw: 25.02.1871 – 1.08.1913); https://www.britannica.com/print/article/613095 (WebSearch: Feb. 25 NS 1871; d. Aug 1 NS 1913) | ✅ |
| *The Forest Song*: play about Mavka, written in 1911 (l3, l3 final, boss T3) | https://en.wikipedia.org/wiki/The_Forest_Song (raw: «poetic play… written in 1911 in Kutaisi»); https://l-ukrainka.name/en/Dramas/LisovaPisnja.html та https://grinchenko-inform.kubg.edu.ua/forest-song-by-lesya-ukrainka/ (WebSearch: written 1911). «a magic girl of the forest» — спрощення для «мавка» (лісова німфа), прийнятне | ✅ |
| Ivan Franko (1856–1916), writer and poet; *Fox Mykyta* — story in verse about a clever fox (l3) | https://en.wikipedia.org/wiki/Ivan_Franko (raw: 27.08.1856 – 28.05.1916); https://cdr.creighton.edu/items/ecb25105-a36b-4d06-8b0b-ebad20daaab1 і https://en.wikipedia.com/wiki/Mykyta_the_Fox (WebSearch: «satirical fairy tale poem Lys Mykyta», хитрий лис). Рік у тексті не вжито, бо джерела розходяться (1890 / 1896) | ✅ |
| Arthur Conan Doyle (1859–1930), Scottish writer, Sherlock Holmes detective stories (l3, boss) | https://en.wikipedia.org/wiki/Arthur_Conan_Doyle (raw: b. Edinburgh 22.05.1859, d. 7.07.1930); https://www.britannica.com/biography/Arthur-Conan-Doyle (WebSearch: «Scottish writer best known for his creation of the detective Sherlock Holmes») | ✅ |
| Lewis Carroll, English writer; *Alice’s Adventures in Wonderland* (novel), 1865 (l3) | https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland (raw: «1865 English children's novel», November 1865); https://britannica.com/biography/Lewis-Carroll (WebSearch: English novelist; Alice 1865) | ✅ |
| Kotyhoroshko — Ukrainian fairy tale; very strong boy; fights a dragon (змій), frees his brothers and sister (l6 order) | https://en.wikipedia.org/wiki/Kotyhoroshko (raw: «freed his own brothers and sisters from the captivity of a serpent»; змій полонив сестру, потім шістьох братів); https://osvita.ua/school/literature/l/70735/list-2.html (варіант А. Лотоцького: «визволить і сестру, і братів») | ✅ |
| Написання імен: Taras Shevchenko, Lesia Ukrainka, Ivan Franko | memory/long/glossary/eng.md (рядок 103: «за таблицею»; КМУ № 55: Леся → Lesia) | ✅ |

**Вигадана книжка.** «The Lighthouse Riddle» / Vira Morska: WebSearch `"Lighthouse Riddle" book`, `"The Lighthouse Riddle" Orca…`, `"Vira Morska" author` — збігів немає. Найближчі: *Storm Tide* (Kari Jones, Orca 2011, https://www.orcabook.com/Storm-Tide-P2845) і *The Lighthouse Mystery* (Boxcar Children, Nancy Drew): назви й сюжет інші. Заміна не потрібна.

**TQ-146 (пропозиція автора) не створюю.** Відгук на вигадану книжку як текст для читання — звичайна практика (так само вигадані фільми в e7s4 і гурт Kashtan в e8s4, які вже verified). Справжні письменники й твори є лише в l3, з перевіреними фактами. Варіант «справжня книжка» додав би ризик фактів і авторського права, а користі не дав би. Мовне питання тут не стоїть.

## 2. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| l6 відгук, ч. 1 | "Every summer, she stays with her grandad. He looks after an old lighthouse by the sea" | дослівного збігу немає |
| l6 відгук, ч. 2 | "Yeva decides to find out who has taken the map" | немає |
| l6 відгук, ч. 3 | "the story is exciting, and I couldn't stop reading" "the beginning is a bit slow" | немає |
| l5 оповідання Mariia | "It was raining hard, and the streets were empty" "walking home from the library" | немає |
| l5 order | "In the end, Lina got home at eight, wet but happy" | немає |
| l4 intro (рядок плану) | "When we got to the library, it had closed" | немає |
| l1 match | "Once upon a time, a poor girl lived with her old grandmother" | немає |

## 3. Форми й норма (словники, відкриті в цій сесії)

| Що | Джерело 1 | Джерело 2 | Вердикт |
|---|---|---|---|
| Наголос: novel, detective, fantasy, poetry, library, librarian, borrow, fiction, character | CD UK: /ˈnɒv.əl/, /dɪˈtek.tɪv/, /ˈfæn.tə.si/, /ˈpəʊ.ɪ.tri/, /ˈlaɪ.brər.i/, /laɪˈbreə.ri.ən/, /ˈbɒr.əʊ/, /ˈfɪk.ʃən/, /ˈkær.ək.tər/ (https://dictionary.cambridge.org/dictionary/english/<word>) | en.wiktionary (action=raw): ті самі наголошені склади | ✅ `<u>` і `stress` збігаються |
| recommend + -ing, не «recommend to do» | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/recommend: «Do not say ‘recommend to do something’, say recommend doing something» | — | ✅ |
| borrow / lend | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/borrow-or-lend: «Can I borrow your dictionary? Not: Can I lend your dictionary?» | — | ✅ |
| Past Perfect vs Past Simple | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-or-past-simple («When she had read all the greetings cards, she made…» — емфаза; Past Simple теж можливий) | — | ✅ Past Simple ніде не поданий як хибний варіант |
| end = кінець історії | CD https://dictionary.cambridge.org/dictionary/english/end: «A1 [C] the final part of something such as a period of time, activity, or story» | CD ending «noun [C] (STORY)» | ❌ → виправлено (див. §5, п. 6) |
| fantasy — [C or U] | CD https://dictionary.cambridge.org/dictionary/english/fantasy («fantasy noun (IMAGINED SITUATION)», C or U) | — | ⚠️ → «a fantasy» додано в ключ |

BrE: у тексті немає AmE-правопису й лексики (grep color/favorite/theater/mom/apartment/-ize: 0). Також немає IPA, «Listen» / «You hear» і `uk`, діалогів типу `dialog` немає (D-056). Час подано як «3.00 pm» (TQ-123).

## 4. Завдання → опора (D-019) → моя відповідь

| Урок, завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 hyp (Fantasy) | здогадка; теорію дає наступний екран | ✅ |
| l1 match жанр ↔ початок | info «Types of books» (ключові слова). Перебрав усі праві: «dragons» міг би підійти й до fairy tale, але «Once upon a time» лише одне, тож повне зіставлення однозначне | ✅ |
| l1 gaps novel / poems / short story | info «A novel, a short story, a poem» | ✅ |
| l1 choice science fiction | info «Types of books» | ✅ |
| l1 stress | `<u>` на екранах l1 | ✅ |
| l1 word fantasy | info; «This book is a fantasy.» теж правильно | ⚠️ → виправлено |
| l1 final gaps | info l1 | ✅ |
| l2 Remember (borrow = take home, bring back) | e5s7l1 («borrow = take and bring back later»; назва уроку в hint збігається) | ✅ |
| l2 gaps borrow / lend / borrowed | info «borrow or lend?» | ✅ |
| l2 pick [lend] | те саме | ✅ |
| l2 match потреби ↔ послуги | info «What can you do at a library?». «I need a book about the history of Poltava» ↔ «Borrow it with your library card» — друга доречна пара | ❌ → виправлено |
| l2 sort fiction / non-fiction | info (fiction / non-fiction) | ✅ |
| l2 word librarian | info | ✅ |
| l2 final gaps | l2 | ✅ |
| l3 hyp Kobzar | здогадка; факт — на наступному екрані | ✅ |
| l3 match письменник ↔ твір | info «Ukrainian writers» | ✅ |
| l3 choice Sherlock → detective stories | info «British writers» | ✅ |
| l3 gaps written / about / character / because | info «Talking about a book» | ✅ |
| l3 build «It was written by Lesia Ukrainka.» | info; інших порядків немає; «wrote» не вкладається, бо треба використати всі плитки | ✅ |
| l3 word poet | info. «writer» теж правдиве й граматичне («a Ukrainian writer and artist»), підказка «p…» прихована в hint | ⚠️ → виправлено (уточнено умову) |
| l3 final gaps (Lesia Ukrainka, 1911, character, because) | info «Ukrainian writers», «British writers» | ✅ |
| l4 hyp (The library closed) | здогадка (час є в intro) | ✅ |
| l4 gaps had / taken / had gone | шкала часу на екрані + info | ✅ |
| l4 choice had gone home | шкала часу + info «Third forms» | ✅ |
| l4 build «She had forgotten her library card.» | info «hadn’t and Had…?» (той самий приклад) + «Third forms» | ✅ |
| l4 pick [went] | info | ✅ |
| l4 word left | info «Third forms». Зразок «Oh no! I had left it on the bus!» — пряма мова в момент відкриття: природно «I’ve left / I left», Past Perfect тут неприродний | ⚠️ → виправлено |
| l4 final gaps had borrowed / had read / had taken | info. Дистрактори — Present Perfect, Past Simple не запропоновано | ✅ |
| l5 hyp (It was raining hard) | здогадка | ✅ |
| l5 sort background / main / earlier | info «Three past forms» | ✅ |
| l5 gaps з мітками | мітки (background) / (main event) / (earlier event) + info | ✅ |
| l5 order First → In the end | info «Telling a story in order»; за змістом порядок теж однозначний | ✅ |
| l5 choice why had lost | info | ✅ |
| l5 pick [has] | info l4–l5 | ✅ |
| l5 final gaps | info l5. «In the end» — останнє речення; was / were — узгодження | ✅ |
| l6 choice ×2, multi | уривки відгуку на тому ж екрані; multi [0,1,2], «four stars» відсікає п’ятий | ✅ |
| l6 order Zlata | info «A book review: the plan» | ✅ |
| l6 pick «I recommend [to] read it» | info «recommend». Помилкова вся конструкція «to read»: прибравши «to», маємо «recommend read». Учень, що торкнувся «read», теж правий, а інструкція «One word is wrong» неправдива | ❌ → виправлено |
| l6 word ending | уривок 2. «end» (CD: the final part of… story) — друга правильна відповідь, і fbBad «e…» її не відсікає | ❌ → виправлено |
| l6 build «I recommend this play to anyone who likes poetry.» | info «recommend». Інші порядки неприродні; пастка «read» | ✅ |
| boss T1 match | l1 | ✅ |
| boss T2 gaps | l2 | ✅ |
| boss T3 choice | l3 | ✅ |
| boss T4 had closed / hadn’t read | l4 (дистрактори — Present Perfect) | ✅ |
| boss T5 forgotten | l4 «Third forms» | ✅ |
| boss T6 gaps з мітками | l5 | ✅ |
| boss T7 pick | l6. Та сама проблема, що в l6 pick | ❌ → виправлено |

Рівень 8 кл.: речення пояснень ≤ 12 слів. Нових граматичних термінів — 1 на урок (Past Perfect; у l5 — назви трьох форм, з них дві знайомі з e6s4). «It was written by» подано як готовий вислів, без теорії пасиву. Екран l3 «Ukrainian writers»: 59 слів разом з роками (межа style/eng.md для 6–9 кл. ≤ 60), профіль не порушено. Розбивати не став: це перелік фактів, а не правило. Педагогіка: проблема → здогадка → теорія → вправи в кожному уроці; фінал перевіряє лише пройдене. Лякаючого змісту немає: «some parts are scary» про казку — доречно.

## 5. Правки (зроблені, мінімальні)
1. l1 word: `answer: ["fantasy", "a fantasy"]`.
2. l2 match (❌): лівий 4 тепер «Where can I find books about the history of Poltava?». Пара «Borrow it…» (однина) до нього більше не підходить.
3. l3 word poet: до умови додано «Write the word for a person who writes poems.», щоб відсікти «writer».
4. l4 word left: «Oh no! I had ___ it on the bus!» → «He had ___ it on the bus.» (+ «Where was it?» в умові; оновлено fbText).
5. l6 pick (❌): `I recommend [to read] it` — одна кнопка-група; хибна група `[!robots on Mars]` (CONTENT_SCHEMA §4.1); «One word is wrong» → «One part is wrong».
6. l6 word (❌): `answer: ["ending", "end"]`; fbText «(or the end)».
7. boss T7 pick (❌): так само, як п. 5, з хибною групою `[!detective story]`.
Також: status усіх 7 уроків → `verified`; meta.factcheck і коментар «Статус» оновлено.

Рекомендації без правок: немає.

## 6. Вердикт по уроках
l1–l7 — **verified** (жодного ❌ чи ⚠️ не лишилося відкритим). `approved` — лише людина.
Людині: нічого блокувального. TQ-146 не створено (пояснення в §1).
