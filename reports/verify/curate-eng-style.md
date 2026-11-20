# Верифікація: curate-eng-style (style/eng.md, style/eng-banned.txt, профіль `eng`)

Верифікатор: verifier-curate-eng-style, 2026-11-19. Перевірено коміт 41438f2 (і супровідний b5d69dd). Автора задачі (style-eng) не бачив; усі джерела відкрито в цій сесії (curl, pdftotext).

**Вердикт: прийнято з правками** (6 дрібних правок у style/ зроблено, 1 змістове питання — TQ-123). Блокувальних знахідок немає.

## 1. Числа програм (відкрито в сесії; SHA-1 збігаються з нотатками автора)

| Твердження в style/eng.md | Джерело (відкрито) | Вердикт |
|---|---|---|
| 4 кл.: читання 100–150 слів (3 кл. 80–100), письмо 40–50, діалог 5 реплік, монолог 5–6 речень | ТОП 3–4, PDF с. 60 (= друкована 60), «Орієнтовні параметри навчально-пізнавальних досягнень учнів» — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (SHA-1 aa8d161a…) | ✅ |
| 10 кл. 350–400, 11 кл. 400–450 слів; письмо 150–180 / 180–200; діалог 9 реплік; «Ці параметри стосуються лише оцінювання і не слугують основними орієнтирами у навчанні» | П1407, PDF с. 21 (розділ спеціалізованих шкіл, заголовок с. 16; B2 — с. 4, 17) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (SHA-1 38df1f7f…). Для довідки: рівень стандарту (с. 41) — 250–300 / 300–350, друга мова (с. 60) — 200–250 | ✅ |
| МП-ІМ чисел обсягу тексту не має; дескриптори A2 / B1 (цитати «Розуміє короткі прості тексти на знайомі теми конкретного типу…», «прості рецепти», «короткі розповіді та описи життя людей…», «Читає із достатнім рівнем розуміння прості тексти…», «брошури, короткі офіційні документи») | МП-ІМ — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…): у тексті «слів» лише раз (фонологія); цитати — **с. 16** (A2, читання) і **с. 28** (B1, читання); с. 15 і 27 — слухання | ✅; сторінки уточнено (правка 4) |
| 5–9 кл. 130–180 / 160–220 / 200–260 / 230–300 / 260–350 | — (позначено як пропозицію: рівномірно від 150 до 350) | змістове питання → **TQ-123** |
| ТОП 3–4: граматика 3–4 кл. засвоюється імпліцитно, зразками (с. 61) | той самий PDF, с. 61; граматика 4 кл. — с. 63 (Present Continuous, Future Simple, comparatives…) | ✅ узгоджено з «правило — зразком» |

## 2. eng-banned.txt — словник і хибні збіги

Перевірка регекспом `parseBanned` (tools/content-checks.mjs робочого дерева, як його застосовує validate). Мої речення — у scratchpad, не в репозиторії.

| Група | Джерело (curl у сесії) | Вердикт |
|---|---|---|
| explain me | OALD explain: «You cannot say ‘explain me, him, her, etc.’» — https://www.oxfordlearnersdictionaries.com/definition/english/explain | ✅ |
| discuss about | OALD discuss: «People sometimes say ‘discuss about something’. However, this is still considered incorrect…» — …/definition/english/discuss | ✅ |
| want that … | OALD want_1: «Notice that you cannot say ‘want that…’» — …/want_1 | ✅ |
| say me | OALD say_1, «Which Word? say / tell»: «Say never has a person as the object» — …/say_1 | ✅ |
| borrow me | OALD borrow, «borrow / lend… You borrow something from somebody» — …/borrow | ✅ |
| make a photo | OALD photo: «I'll take a photo of you», Patterns «to take a photo» — …/photo | ✅ (відомий хибний збіг «make a photo album» — позначено в шапці) |
| do a mistake | OALD mistake_1: «It's easy to make a mistake» — …/mistake_1 | ✅; «do mistakes» звужено (правка 1) |
| make homework | OALD homework: «I always do my homework on the bus», [uncountable] — …/homework | ✅; звужено (правка 2) |
| make sport | OALD sport_1: «(British English) Do you do any sport?» — …/sport_1 | ✅ |
| make a party | OALD party_1: «to have/throw/give a party» — …/party_1 | норма ✅, але хибний збіг типовий («make a party hat / invitation» у темі «Birthday») → **вилучено** в eng.md «Заборонене» (правка 3) |
| depend from, listen music, in the internet, wait you, the same like, in the end of, open/close the light, how is your name | OALD depend, listen_1 («to listen to music»), internet («on the internet»), wait_1 («Wait for me!»), same_1 («the same as mine»), end_1 («at the end of the week»), light_1 («to turn/switch the lights on/off»), name_1 («What's your name?») | ✅ («in the internet age» — відомий хибний збіг, у шапці) |
| according to me | Cambridge Grammar «According to»: «Not: According to me…» — https://dictionary.cambridge.org/grammar/british-grammar/according-to | ✅ |
| i very like … | Коментар посилався на CG «Very», але там «very» не вживається з **пасивними -ed** (very liked) — не про «I very like». Правильне джерело — OALD very_1, Grammar Point: «Very is used with adjectives, past participles used as adjectives, and adverbs» — …/very_1 | ⚠️ джерело неточне → виправлено (правка 5); фрази ✅ |
| more better, most biggest … | CG «Comparison: adjectives»: «Not: … a more better life», «Not: … the most biggest» — https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-and-most | ✅ |
| homeworks, informations, advices, furnitures, childrens | OALD homework, information, advice, furniture — [uncountable]; child — «(plural children)» | ✅ («children's» не ловиться — апостроф) |
| on the weekend, on weekends | OALD weekend: «on the weekend (especially North American English)»; CD weekend: «at weekends UK (US on (the) weekends)» — https://dictionary.cambridge.org/dictionary/english/weekend | ✅ |
| happy holidays | OALD holiday_1: «holidays [plural]… (North American English) the time from late November to early January… Happy Holidays!» | ✅ |
| color, center, theater, gray, neighbor, favorite, traveled/traveling, math | CD colour «UK (US color)», centre «UK (US center)», theatre «UK (US theater)», grey «mainly UK (US usually gray)», neighbour «UK (US neighbor)», favourite «UK (US favorite)», travel «-ll- or US usually -l-», maths «UK», math «US» — https://dictionary.cambridge.org/dictionary/english/<слово> | ✅ |
| the ukraine, kiev, odessa, lvov, kharkov | Wiktionary Kyiv, usage notes: «Style guides updated since 2005 recommend using the spelling Kyiv» — https://en.wiktionary.org/wiki/Kyiv; Ukraine — https://en.wiktionary.org/wiki/Ukraine; facts/eng.md №13 (вторинне, КМУ55) | ✅ (хибні збіги «the Ukraine war», «Chicken Kiev» — у шапці) |
| listen and …, you will hear, imagine you hear | D-054 п. 4 (звуку немає), glossary/eng.md «Загальне» | ✅ (рішення, не словник) |
| порожні звороти ШІ | стиль, відповідник banned-phrases.txt | ✅ |

**Хибні збіги до правок** (з 60 правильних речень — 18 збігів), головні: «Why/How do mistakes happen?», «Games make homework fun», «It makes homework easier», «Does music make my homework easier?», «Let's make a party hat», «We make a party invitation», «Make a photo album», «in the internet age», «Chicken Kiev», «You will hear from me». Нотатка автора «0 хибних збігів на 17 реченнях» — вибірка без каузативного *make* і питань з *do*.
**Після правок:** лишилися лише рідкісні й позначені в шапці файлу (make a photo album/collage, in the internet age, Chicken Kiev, you will hear from, most best-selling, did a mistake happen). 33 помилкові речення — усі спіймано (зокрема «I always do mistakes», «She makes homework after school»).

## 3. style/eng.md проти D-054, дизайну й common.md

| Вимога | style/eng.md | Вердикт |
|---|---|---|
| Усе англійською, укр. — лише хром (D-054 п. 1; дизайн §2) | «Мова змісту», перелік полів збігається з §2 | ✅ |
| BrE; AmE у відповіді — `ok` з приміткою, ключ британський (доповнення п. 1) | так; заборона «AmE = неправильний варіант»; лексика — TQ-122; збігається з CONTENT_SCHEMA §4.1 і app/lang.js `SPELL` | ✅ |
| Без IPA (доповнення п. 3) | «Без IPA», наголос `<u>` / `stress` | ✅ |
| `uk` лише 4–5 кл., неоцінювані екрани теорії, за показаною потребою (доповнення п. 5) | так + ≤ 40 слів і посилання на звіт у нотатках | ✅ (≤ 40 — розумне уточнення) |
| Без звуку, без імітації аудіювання (п. 4; дизайн §5.3) | «Звуку немає», у `learned` — без умінь на слух; фрази — у eng-banned | ✅ |
| A, B, C ставить рушій (п. 3) | так | ✅ |
| Мова пояснень 4–5 ≤ 8, 6–9 ≤ 12, 10–11 ясно (дизайн §6.1; pitfalls «Англійська» п. 5) | так; граматика пояснень 4 кл. — + there is / are, can (у ТОП 3–4 с. 61 є there is/are) | ✅ |
| Чесне завдання (D-019) | окремий розділ для мови: слова й дистрактори зі знайомих, питання до уривка на тому ж екрані | ✅ |
| Шаблонні інструкції (Choose / Match / Put the words in order / Complete) | таблиця; без «Click/Tap», без позиційних посилань | ✅; **розбіжність з glossary/eng.md** («Type the word», «Click on the words that…») — glossary сам каже, що style/eng.md має пріоритет; синхронізація — рядком у inbox |
| Україна в кожному розділі; еталони e4s1, e5s1 | так | ✅ |
| common.md: «2–5 завдань» | eng: «3–6 завдань», а «Решта common.md (будова уроку…) — діє» | ⚠️ суперечність без позначки → рядок у таблиці «Що змінюється» (правка 6) |
| Ділення тексту на екрани: 6 кл. 160–220 слів / уривок ≤ 100 | «2» екрани | ⚠️ арифметика: 220 / 100 → 3; виправлено на 2–3 (правка 4) |

Супровідний коміт b5d69dd змінив docs/design/english.md §6.1 (позначка «таблиця застаріла» з посиланням на style/eng.md) — поза трьома файлами задачі, але це лише перехресне посилання, зміст дизайну не переписано. Пояснення розбіжності 50 → 60 слів у 4 кл. (maxText рахує й питання; 400–450 — обсяг програми, а не екран) переконливе.

## 4. Профіль `eng`

- `profileFor` (tools/lib.mjs:170): власний діапазон предмета замінює `_default` цілком; ключ «5» накладається лише на 5 кл. (`String(grade) !== band`); `_comment` усередині `eng` ніколи не читається як діапазон. Перевірено в сесії: 4 → «4»; 5 → «5-6» + «5» (screens 6–11, maxText ≤ 85, sentenceWords 2,5–8); 6 → «5-6»; 7, 9 → «7-9»; 10, 11 → «10-11». math / ukr / hist / world — без змін (diff профілю — лише додавання `eng`).
- Власний зразок A1-уроку (8 екранів, уривок 9 речень + питання): screens 8, gradedShare 0,63, readWordsPerScreen 16, maxReadWords 50, maxText 47, sentenceWords 3,2, longWordShare 0,051, typeVariety 3 — усе в межах 4 кл. Межі для A1–B2 розумні як початкові; калібрування — style-eng-g4-5 (так і записано).
- `node tools/validate.mjs --quiet` — 0 помилок, 230 попереджень (до й після правок; reports/validate.json відновлено до стану до запуску — файл чужий); `node tools/test-metrics.mjs` — 133 пройдено; `node tools/test-content-checks.mjs` — 144 пройдено.

## 5. Правки (зроблено)
1. eng-banned: «do mistakes» → лише з підметом (I / we / you / they) і з always / often / sometimes.
2. eng-banned: «make homework / makes homework / make the / my / your homework» → лише з підметом (I, we, you, they, he, she; my / our / your / their).
3. eng-banned: «make a party» вилучено; у style/eng.md «Заборонене» — «make a party → have a party» серед кальок, яких список не ловить, з поясненням звуження п. 1–2.
4. style/eng.md, таблиця текстів: МП-ІМ с. 16 / с. 28 (читання) замість с. 15–16 / 27–28; 6 кл. — 2–3 екрани; позначка TQ-123 на пропозиціях 5–9 кл.
5. eng-banned: джерело для «i very like» — OALD very_1 Grammar Point (замість хибно процитованого CG «Very»).
6. style/eng.md «Що змінюється порівняно з common.md»: рядок «2–5 завдань → 3–6».
Шапка eng-banned: перелік відомих рідкісних хибних збігів і що з ними робити.

## 6. Рекомендовано (не зроблено)
- Після злиття engine-eng-validate (синтаксис «фраза → як краще» у parseBanned) — додати виправлення до рядків eng-banned (зараз виправлення лише в коментарях).
- Куратор: синхронізувати таблицю інструкцій у glossary/eng.md зі style/eng.md (`word` — «Write the word.», `pick` — без «Click on…»).
- TQ-123 — відповідь учителя; до того діють пропозиції.

## 7. Що потребує людини
- **TQ-123** (docs/teacher-questions.md): обсяг тексту для читання 5–9 кл. і межі екрана. Тимчасово — значення style/eng.md.
- Зміна профілю `eng` — рядок DECISION уже в inbox (style-eng), переносить куратор.
