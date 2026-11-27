# Верифікація e10s5 «Painting and Ukrainian artists» (eng, 10 кл.)

Верифікатор: verifier-e10s5, 2026-11-26. Скіл `content-verify` (з розділом «Англійська»). Файл: `content/eng/g10-e10s5.js`, 7 уроків (6 + boss), 77 екранів.
Кожне завдання я розв'язав сам, не дивлячись на ключ, і звірив із `correct`/`answer`. Порядки `build` перебрав скриптом через `SLID_LANG.check` (scratchpad). Форми `word` перевірив тим самим способом.

**Вердикт: усі 7 уроків → `verified`.** Мої правки: 3 (нижче). Відкритих ❌ і ⚠️ немає.

## 1. Факти

WebFetch не резолвить nationalgallery.org.uk, langeek.co чи englishgrammar.org. Через curl відкриваються лише en.wikipedia і uk.wikipedia (wikitext, `action=raw`). Інші джерела я відкривав через WebSearch: результати пошуку з фрагментами сторінок за URL.

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Turner 1775–1851, «loved light, the sea and the sky» | https://en.wikipedia.org/wiki/J._M._W._Turner (23.04.1775) ; WebSearch: https://www.theartnewspaper.com/2025/04/30/turner-vs-constable-is-time-for-art-historians-to-choose («Turner (1775-1851) … Constable (1776-1837)»), https://www.britannica.com/biography/J-M-W-Turner | ✅ |
| Constable 1776–1837, пейзажі англійської сільської місцевості | https://en.wikipedia.org/wiki/John_Constable (11.06.1776 – 31.03.1837) ; WebSearch: https://www.tate.org.uk/art/artists/john-constable-108, theartnewspaper (вище) | ✅ |
| The Fighting Temeraire: уперше показана в 1839 році; маленький паровий буксир тягне старий військовий корабель Темзою востаннє; захід сонця | https://en.wikipedia.org/wiki/The_Fighting_Temeraire (написана 1838, RA 1839; steam tug; Thames; setting sun) ; WebSearch: https://www.nationalgallery.org.uk/paintings/joseph-mallord-william-turner-the-fighting-temeraire (NG524, датована 1839, буксирують Темзою до Rotherhithe), https://www.lancaster.ac.uk/fass/ruskin/empi/notes/gsoil03.htm («exhibited Royal Academy 1839») | ✅ |
| The Hay Wain, 1821; віз (wain) у річці; «nearly two metres wide»; на виставці в Лондоні 1821 року ніхто не купив; згодом золота медаль у Парижі | https://en.wikipedia.org/wiki/The_Hay_Wain (130.2 × 185.4 см; RA 1821 «failed to find a buyer»; Salon 1824, золота медаль Карла X; «wood wain or large farm waggon … across the river») ; WebSearch: https://nationalgallery.org.uk/paintings/NG1207 (1821, 130.2 × 185.4), https://nationalgallery.org.uk/paintings/catalogues/egerton-2000/the-hay-wain (RA 1821; Salon 1824), https://www.nationalgallery.org.uk/media/31362/notes_constable-hay-wain.pdf (Gold Medal, Paris Salon 1824) | ✅ |
| Обидві картини — у National Gallery, London | ті самі сторінки NG (NG524, NG1207) | ✅ (примітка: WebSearch показує на сторінці NG524 «not on display». Картина в колекції NG, тож твердження «are in / are kept» правдиве. Візит у l5 вигаданий) |
| 2005, радіопрограма BBC: 1 — Fighting Temeraire, 2 — Hay Wain | https://en.wikipedia.org/wiki/Greatest_Painting_in_Britain_Vote ; WebSearch: https://www.currybet.net/cbet_blog/2005/09/turner-prize---the-greatest-pa.php , https://www.codart.nl/other/two-paintings-from-the-netherlands-in-top-ten-of-radio-4-greatest-painting-in-britain-vote/ | ✅ |
| Turner на £20 від Bank of England; з 2020 року на банкноті його обличчя і The Fighting Temeraire | https://en.wikipedia.org/wiki/The_Fighting_Temeraire («In 2020 … £20 banknote, along with … self-portrait») ; WebSearch: https://www.bankofengland.co.uk/news/2020/february/turner-20-enters-circulation (в обігу з 20.02.2020), https://www.bankofengland.co.uk/news/2019/october/the-new-20-note-unveiled | ✅ |
| wain — старе слово для воза | https://en.wikipedia.org/wiki/The_Hay_Wain ; https://en.wiktionary.org/wiki/wain («archaic or literary: A wagon; a four-wheeled cart») | ✅ |
| Bilokur 1900–1961, Bohdanivka (тепер Київщина), народна художниця | https://en.wikipedia.org/wiki/Kateryna_Bilokur ; https://uk.wikipedia.org/wiki/Білокур_Катерина_Василівна (Богданівка, Бориспільський р-н; 1961) ; WebSearch: https://www.kyivpost.com/amp/post/40905 , https://artsandculture.google.com/story/xAVxymTeeUHXRA | ✅ |
| Батьки не хотіли, щоб вона малювала; школа в Миргороді її не прийняла; самоука; відома квітами | en.wiki (те саме: «parents frowned upon this hobby»; Myrhorod 1922–23 «wasn't accepted»; «flowers … brought her general recognition») ; uk.wiki ; WebSearch kyivpost (self-taught; «turned away from art school») | ✅ |
| Весна 1940: пісня по радіо, лист Оксані Петрусенко з малюнком на шматку полотна; співачка показала його друзям; того самого року перша виставка в Полтаві, 11 картин | en.wiki («spring of 1940 … radio … Oksana Petrusenko … drawing of a viburnum on a piece of canvas … consulting with her friends»; «In 1940 an exhibition of 11 paintings … Poltava») ; uk.wiki («персональна виставка» 1940, Полтава) ; WebSearch: kyivpost («first solo show, with 11 canvases … Poltava in 1940») | ✅ |
| Prymachenko 1909–1997, Bolotnia, самоука, народна художниця; фантастичні тварини, квіти, синій бик; натхнення — природа й казки | https://en.wikipedia.org/wiki/Maria_Prymachenko (12.01.1909 – 18.08.1997; Self-taught; «Blue bull» 1947; «natural world and … fairy-tales») ; https://uk.wikipedia.org/wiki/Примаченко_Марія_Оксентіївна («прожила все життя в селі Болотня на Київщині») ; WebSearch: https://www.theartnewspaper.com/2022/02/28/ukraine-museum-burns-down-in-russian-invasion-destroying-25-works-by-folk-artist-maria-prymachenko | ✅ після правки 1 (було «Bolotnia, near Kyiv» — ⚠️: село за ~30 км від Чорнобиля) |
| Лютий 2022, повномасштабне вторгнення: згорів музей в Іванкові, де були її роботи | en.wiki, uk.wiki (27.02.2022, Іванківський історико-краєзнавчий музей) ; WebSearch: https://news.artnet.com/art-world/maria-prymachenko-ukraine-russia-2078634 , https://www.pravda.com.ua/eng/news/2022/02/28/7326669/ | ✅ (число врятованих робіт розділ не називає, і це правильно) |
| Murashko 1875–1919, народився в Києві; навчався й працював у Петербурзі, Мюнхені, Парижі; портретист | https://en.wikipedia.org/wiki/Oleksandr_Murashko (Kyiv; Academy 1894; Ažbe у Мюнхені; Франція) ; https://uk.wikipedia.org/wiki/Мурашко_Олександр_Олександрович (Київ; Париж і Мюнхен 1901–1903) ; WebSearch: https://arthive.com/oleksandrmurashko (1875−1919) | ✅ |
| Girl in a Red Hat (1902–1903) — Національний художній музей України, Київ | en.wiki (1902–03) ; WebSearch: https://eclecticlight.co/2023/02/22/ukrainian-painters-oleksandr-murashko/ (NAMU) , https://artsandculture.google.com/asset/girl-in-a-red-hat-oleksandr-murashko/rAEcWQLIHfkPPA (Location: NAMU) | ✅ |
| Carousel (1906) отримала золоту медаль на виставці в Мюнхені | uk.wiki («Карусель» (1906) … Мюнхенська міжнародна виставка … золота медаль) ; en.wiki (медаль у Мюнхені 1909) ; WebSearch: https://en.uartlib.org/?p=10805 | ✅ (року медалі розділ не називає, тож розбіжність 1906/1909 його не зачіпає) |

**Імена.** Kateryna Bilokur і Oleksandr Murashko пишуться за таблицею КМУ № 55 ✅. Примаченко: українською «Марія Примаченко» (uk.wiki, «також Приймаченко»). glossary/eng.md «Імена» каже: імена пишемо за таблицею, виняток — лише власне написання людини. Отже, глосарій тут не мовчить, і правильно «Mariia Prymachenko» (Марія → Mariia, Примаченко → Prymachenko). Усталене англійське написання «Maria» (en.wikipedia) тепер згадано одним реченням на екрані l3 «Mariia Prymachenko (1909–1997)», щоб учень знайшов її в англомовних джерелах (правка 2). Пропозиція уточнити глосарій щодо таких конфліктів — рядок TERM в inbox.

## 2. Друга правильна відповідь і розв'язки (усі завдання)

| Урок · завдання | Мій розв'язок = ключ? | Друга відповідь / дистрактори | Вердикт |
|---|---|---|---|
| l1 match жанрів | так | seascape (море) і landscape (річка, дерева) не перетинаються; abstract — лише кола й лінії | ✅ |
| l1 choice self-portrait | так | варіанта portrait немає | ✅ |
| l1 stress | так | CD: ˈpɔː.trət, ˈlænd.skeɪp, ˈkæn.vəs, ˌek.sɪˈbɪʃ.ən | ✅ |
| l1 gaps oil / watercolours; pick portrait; word still; final gaps | так | word «still» без кінцевого знака; CD «plural still lifes» | ✅ |
| l2 choice; gaps passive (was show, was give — неправильні форми); match дат; pick famous for | так | — | ✅ |
| l2 build | так | перебір: правильні лише 3 порядки, і всі 3 є в `answer` | ✅ |
| l2 final gaps (masterpieces / voted) | так | «were voted» неправильне за змістом | ✅ |
| l3 choice; gaps; pick (London); match 4×4; word herself; final (teached, abstract, masterpiece, of) | так | match: кожна права частина підходить лише до однієї лівої | ✅ |
| l4 gaps (has been drawing, had been work) | так | — | ✅ |
| l4 build | так | перебір: «I had been waiting for an hour.» і «For an hour I had been waiting.» — обидва в `answer` | ✅ |
| l4 choice «was painting for three hours» | так | Хибний у цьому контексті: «When Oksana came … for three hours» питає, скільки тривала дія до моменту в минулому. Для цього вживаємо Past Perfect Continuous, не Past Continuous: OALD Grammar (https://www.oxfordlearnersdictionaries.com/grammar/online-grammar/past-perfect-simple-and-past-perfect-continuous: «to talk about actions that continued for a period of time before another action … focus on the duration»; «She had already been working for two hours by the time we got there»), CD Grammar Past perfect continuous (https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-continuous-i-had-been-working). Past Continuous (CD https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working) — дія «in progress around a particular time», без тривалості до моменту. Варіанта «had painted» серед відповідей немає, тож другої правильної відповіді немає. Правило є на екрані 5 перед завданням | ✅ |
| l4 multi (had been painting + had painted, for many years) | так | CD «Past perfect simple or continuous» (https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-or-past-perfect-continuous: «I'd waited an hour» / «I'd been waiting an hour» — обидва) | ✅ |
| l4 gaps (twelve pictures → had painted; know → had known; have been drawing) | так | CD: know без -ing; кількість → simple | ✅ |
| l4 pick (had been knowing) | так | «met Ostap», «went round» правильні | ✅ |
| l4 final (had been painting; had been living, у fbText — «had lived також правильно», серед варіантів його немає; eleven … all of them → had painted) | так | — | ✅ |
| l5 match табличок; word queue (у ключі й line, TQ-125); gaps | так | CD queue: «mainly UK (US usually line)» | ✅ |
| l5 читання, 3 частини (choice, multi, choice); order | так | відповідь на тому самому екрані; хибні твердження в multi спростовує текст («half an hour», «sketchbooks») | ✅ |
| l5 final gaps | так | перед пропуском стояло «an»: артикль видавав відповідь (exhibition проти gift shop). Виправлено (правка 3) | ✅ після правки |
| l6 gaps (in / on / in; is / are / is sitting / looking); pick (are); sort; word is crossing / ’s crossing (`contractions: true`, прямий апостроф теж зараховано) | так | — | ✅ |
| l6 build | так | 2 порядки, обидва в `answer` | ✅ |
| l6 final gaps | так | — | ✅ |
| boss T1–T4, T6, T7, T9 | так | — | ✅ |
| boss T5 multi (had painted + had been painting; was painting хибний) | так | як у l4: CD приймає simple («I'd waited an hour») і continuous. was painting відкидає правило з l4, екран 5 | ✅ |
| boss T8 build | так | 2 порядки, обидва в `answer` | ✅ |

## 3. Опора (D-019)

| Завдання | Звідки відповідь |
|---|---|
| l1–l6, перший `choice` кожного уроку | `hyp: true`: здогадка перед теорією |
| l1 match, self-portrait, pick, word, final | екран 3 «Genres of painting» |
| l1 stress, gaps | підкреслення на екранах 3 і 6; екран 6 «Paints and brushes» |
| l2 choice Hay Wain, match дат | екран 3 «Turner and Constable» |
| l2 gaps і build у пасиві | екран 5 (was + третя форма); shown і given — у `hint` (повторення e7s7l2) |
| l2 pick, final (masterpieces) | екран 7 «Famous for…» |
| l3 choice why, final | екран 3 (Bilokur); taught — hyp і екран 3 |
| l3 gaps, word herself | екран 5 (Prymachenko); hyp |
| l3 pick, match | екрани 3, 5, 7; Constable — l2 |
| l4 усі завдання | екрани 3, 6, 8 (had been + -ing; was чи had been; had painted чи had been painting, дієслова стану) |
| l5 match, word, gaps, final | екран 3 «At the gallery»; had been waiting — l4 |
| l5 читання й order | той самий екран тексту |
| l6 усі завдання | екрани 3 і 5 |
| boss T1–T9 | `pre` на уроки l1–l6; нового в boss немає |

Завдань без опори немає.

## 4. Англійська: норма, рівень, авторське право

- BrE: centre, colours, watercolours, penfriend (CD UK), queue, «show visitors round», «went round» ✅. AmE немає (line — лише в ключі `word` і в поясненні «Americans usually say line»).
- Немає IPA, «Listen», літер A/B/C, позиційних посилань ✅. `uk` немає (10 кл.) ✅. Діалогів типу dialog немає: листи й повідомлення в `body` (D-056) ✅.
- Рівень пояснень відповідає B1→B2; речення в теорії короткі ✅.
- Війна (музей в Іванкові) — одне фактичне речення без жорстоких подробиць; так само подано в e10s2 ✅.
- `requires`: e4s8l5, e5s7l2, e6s4l4, e7s7l1, e7s7l2, e8s5l4, e8s5l5 — існують, теми збігаються. **e10s1l3** — «By the time I came, they had left: the Past Perfect again» (content/eng/g10-e10s1.js, рядок 336) ✅. Файл e10s1 я не змінював. Past Perfect Continuous не з'являється в жодному іншому розділі eng: його справді пояснюють з нуля ✅.
- Авторське право (WebSearch з лапками):

| Фрагмент | Результат |
|---|---|
| “I had seen The Hay Wain in books many times, but I wasn’t ready for its size” | збігів немає |
| “The old ship looks like a ghost, and the sky looks as if it’s on fire” | збігів немає |
| “A painting in a book is just a picture. In a gallery, it’s an experience” | збігів немає |
| “We had been looking forward to this trip for weeks, and on Thursday it finally happened” | збігів немає |

## 5. Прогін
- `node tools/validate.mjs --section e10s5`: 0 помилок, 0 попереджень (після правок).
- `node tools/euphony.mjs --section e10s5`: 0 відхилень.
- `node tools/stats.mjs --subject eng`: прапорець на l3 (longWordShare z=2.4, через власні імена) і на l5 (обсяг читання; урок читання B2, ≤ 190 слів на екран, профіль дозволяє). Пояснення автора приймаю.
- `playtest.py`: у контейнері немає Python-модуля playwright, тож прогін лише в CI (job browser).

## 6. Правки (зроблені)
1. l3, екран «Mariia Prymachenko»: «Bolotnia, near Kyiv» → «Bolotnia, in the Kyiv region» (фактична точність).
2. Ім'я «Maria Prymachenko» → «Mariia Prymachenko», 11 місць: заголовок, тексти, match, gaps. Так велить glossary/eng.md «Імена». На екрані l3 додано речення «In many English books, her name is written *Maria*.» Коментар у шапці файлу оновлено.
3. l5 final gaps: «went to an {*exhibition|gift shop}» → «went to {*an exhibition|a gift shop}». Артикль більше не видає відповідь.
Також: `status: "verified"` у 7 уроках, `meta.factcheck`, рядок «Статус» у шапці.

## 7. Рекомендовано (не блокує)
- l2 final «Both of these masterpieces hang in the National Gallery»: сторінка NG524 у пошуку зараз показує «not on display». Якщо куратор хоче точності щодо експозиції, «hang» → «are». У постері героя це припустимо.
- Зображення творів (Commons, PD): пропозиція автора images-eng-e10s5 — в inbox.

## Вердикт по уроках
e10s5l1, l2, l3, l4, l5, l6, l7 — **verified**. Людині (вчителю): лише `approved` і, за бажання, рішення щодо написання Mariia/Maria для історичних осіб (TERM в inbox).
