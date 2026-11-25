---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.718Z
id: write-eng-g6-e6s3
type: write-section
subject: eng
grade: 6
section: e6s3
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Харчування: традиції й страви» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: традиції харчування; назви страв — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Past Simple: irregular verbs, negative, questions (A2; розширення e4s7l5 — went, swam, ate, saw як окремі слова в листівці — і e5s9l5 — regular affirmative, -ed); Passives: Present Simple affirmative (It’s made with…, They’re made with…); adverbs of sequence: first, then, after that, finally (рецепт; імперативи — повторення e5s2l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** Неправильні форми — лише за CD/OALD (ate, made, had, went, took…; learnt / learned — обидві). made with / from / of — кілька правильних прийменників: у `gaps` контекст однозначний або всі в ключі. borshch / borscht — нерозв'язаний TERM (glossary/eng.md «Не вирішено»): вибери з джерелом, рядок TERM. Рецепт — програма с. 16 (простий рецепт з малюнками). Традиції — Україна й Велика Британія; факти — з facts/eng.md чи двох джерел. recipe — B1 (CD): вводити з картинкою. Герої: бабуся й дідусь Оксани (Mykola, Hanna) живуть з нею; Ostap — друг Тараса (Lviv, e5s1, e5s3). `requires`: e4s7l5, e5s9l5, e5s8l5, e5s3l6. Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s3.js`: `SLID.section("eng", { id: "e6s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e6s3, 2026-11-20.** Файл `content/eng/g6-e6s3.js`, 7 уроків (6 + boss), усі `draft`. `requires`: e4s7l5, e5s9l5, e5s8l5, e5s3l6.

**Уроки:** l1 What’s on the menu? Names of dishes (starter / main course / dessert; fried, boiled, roast; кафе в Lviv — Taras і Ostap) · l2 What’s in it? It’s made with… (Present Simple passive: is / are made, served, eaten; deruny, syrnyky, holubtsi, scones) · l3 First, then, after that: a simple recipe (sequencing + imperatives; рецепт сирників бабусі Hanna) · l4 We ate pancakes: irregular verbs (bought, came, drank, ate, had, made + повтор went, saw; Andrii, Sofiia) · l5 Did you try it? I didn’t like it (did / didn’t, short answers; Emma про шкільну поїздку до Kyiv минулого грудня — e5s4) · l6 Food traditions in Ukraine and the UK (читання 3 частини ≈ 120 слів + сторінка-підсумок перед match) · l7 boss «Lunch for Grandma and Grandad» (Andrii і Sofiia готують для Nina й Vasyl з Chernihiv; Task 1–6 з `pre` l1…l6).

**Не повторює e5s3:** borscht/varenyky/fish and chips/porridge/Pancake Day лише згадано як відоме (borscht — новий факт ЮНЕСКО, l2 gaps «is made with beetroot», «Varenyky are made with potato or cheese» — з e5s3l6). Нові страви: deruny, syrnyky, holubtsi, scones, Sunday roast, afternoon tea. Слово recipe — уже з e5s3l6 info, тут ще раз визначене (l3 info).

**Перевірки:** `node tools/validate.mjs --section e6s3` — 0 помилок, 0 попереджень. Кожне оцінюване завдання розв'язано двічі (вперед і від ключа). **build:** усі 4 завдання перебрано через `SLID_LANG.check` у node (vm): усі підмножини й перестановки плиток з `extra` (1956 / 325 порядків) — приймаються лише ключі: l2 «Borscht is served with sour cream» (keepCase, питання «Is borscht…» відсічено), l4 «We had pancakes for breakfast.» / «For breakfast we had pancakes.» (обидва в `answer`; пастка have — теперішній, відсічено «about last Saturday»), l5 «Did you try deruny in Kyiv?», l7 «Did you like the deruny?» (keepCase). **word:** ключі без кінцевого знака; `wordVerdict` — «DESSERT», «salt.» → ok; l5 didn’t з `contractions: true` (did not → ok; «didnt» без апострофа — рушій не приймає, як hasn’t у e5s1).
`node tools/stats.mjs --subject eng`: прапорці «нетипово для сім'ї» у l1, l3, l4 (maxText 73 / 66 / 65), l6 (readWordsPerScreen, sentenceWords 6.5), l7 (longWordShare 0.115). Сім'я — увесь предмет, де переважають 4–5 кл.; усі значення в межах профілю `eng` «5-6» (maxText ≤ 110, sentenceWords 3–10, longWordShare ≤ 0.14). Інші розділи 6 кл. (e6s4…e6s6) мають ті самі прапорці — для style-sync 6 кл.

**Друга правильна відповідь — як відсічено:**
- Past Simple: у кожному реченні gaps/word на минулий час — маркер (Last Saturday / Sunday / December / weekend, Yesterday, This morning) або хибні варіанти — неіснуючі форми (goed, maked, buyed). l6 Final «Later that day, we {ate|eat}» — після «Last Sunday».
- `word` «verb → ?» (l2 eat → eaten, l4 drink → drank, l7 make → made): граматично в пропуск лягають і інші дієслова (served, had, cooked) — тримаюся прецеденту e4s7l5 «swim → ?» і e5s9l5 «play → ?» (інструкція в `body` задає дієслово). Верифікатору — оцінити.
- l1 word dessert: у ключі ще pudding і sweet (CD dessert: «UK informal pudding; UK sweet»).
- l3 word «Step 4: ___, fry the syrnyky»: ключ finally, lastly (CD lastly).
- then / after that взаємозамінні → у gaps варіанти без «After that», порядок `order` задано змістом (pieces існують лише після cut).
- made with / from / of: прийменник ніде не оцінюється — лише is / are + made і форма eaten.
- dinner (PITFALL verifier-e5s3): питань «який прийом їжі» немає; «big lunch» у l4 не оцінюється.
- AmE-лексика: appetizer (AmE для starter) — starter у `word` не питаю.

**Форми й рівні (CD, curl 2026-11-20):** menu A2, main course A2, dessert A2 («UK informal pudding; UK sweet»), salad A2, mushroom A2, fried A2, boiled A2, roast A2, bowl A2, serve A2 («to provide food or drinks»), guest A2, towel A2, cream A2, onion A2, finally A2, try A2 («attempt») / B1 («test… to see what it is like» — у l5 info пояснено: try food → eat it for the first time), cabbage B1, recipe B1, fry B1, pan B1, oven B1, pie B1, tradition B2 (OALD a2 — inbox FACT verifier-curate-eng-plan-g6), welcome B1, lastly B2 — B1+ визначено на info (cabbage, fry, oven, recipe, tradition, welcome, rushnyk, cottage cheese, sour cream). starter — OALD «(especially British English) (North American English usually appetizer) a small dish of food that is served before the main course» https://www.oxfordlearnersdictionaries.com/definition/english/starter; CD starter «a small dish served as the first part of a meal». URL-шаблон: https://dictionary.cambridge.org/dictionary/english/<word>.
Неправильні дієслова (CD, past tense): eat → ate, drink → drank, make → made, have → had, buy → bought, come → came, give → gave (не вжито) — https://dictionary.cambridge.org/dictionary/english/eat, …/drink, …/make, …/have, …/buy, …/come. Past participle eaten — CD eat.
Наголос (CD IPA): menu /ˈmen.juː/, dessert /dɪˈzɜːt/, salad /ˈsæl.əd/, mushroom /ˈmʌʃ.ruːm/, starter /ˈstɑː.tər/, recipe /ˈres.ɪ.pi/ — `stress` l1: +men|u, +sal|ad, +mush|room, des|+sert (підкреслено в info l1 до вправи).
yoghurt / yogurt — обидва британські (OALD yogurt «British English also yoghurt»), тому слово не вжито.

**Факти (≥ 2 відкриті джерела):**
- Deruny — potato pancakes з тертої картоплі, яйця, борошна (цибуля — за бажанням), подають зі сметаною: https://en.wikipedia.org/wiki/Potato_pancake (redirect з Deruny); https://uk.wikipedia.org/wiki/Деруни (компоненти: терта картопля, цибуля, борошно, яйця; сметана).
- Holubtsi — капустяне листя, рис і м'ясо: https://en.wikipedia.org/wiki/Cabbage_roll (розд. Ukraine: «rice-meat mixture… most common preparation today»); https://uk.wikipedia.org/wiki/Голубці (капуста, фарш, рисова крупа).
- Syrnyky — з сиру (tvorog / cottage cheese), яєць, борошна, цукру; смажать; подають зі сметаною чи варенням: https://en.wikipedia.org/wiki/Syrniki; https://uk.wikipedia.org/wiki/Сирник («виготовляється із домашнього сиру»; цукор, яйця). «Для сніданку» — лише en.wikipedia → в уроці подано як звичай родини Оксани («In Oksana’s family…»), не загальний факт; «зі сметаною чи варенням» у l3 — теж «At Oksana’s house».
- Borscht подають зі сметаною: https://en.wikipedia.org/wiki/Borscht («most often served with smetana»); https://uk.wikipedia.org/wiki/Борщ («Його часто подають зі сметаною»). Борщ з буряком та іншими овочами — там само.
- UNESCO 2022: «Culture of Ukrainian borscht cooking» внесено до Списку нематеріальної культурної спадщини, що потребує термінової охорони (5.EXT.COM, липень 2022): https://en.wikipedia.org/wiki/Borscht; https://ich.unesco.org/en/RL/culture-of-ukrainian-borscht-cooking-01852 і https://ich.unesco.org/en/decisions/5.EXT.COM/5 (лише через WebSearch — ich.unesco.org, npr/gpb/kpbs з сесії не резолвляться; той самий спосіб прийняв verifier-e5s3). У тексті: «UNESCO put Ukrainian borscht cooking on a special list. It is a list of traditions in danger.»
- Хліб-сіль: важливих гостей зустрічають хлібом і сіллю, хліб — на рушнику, гість з'їдає шматок із сіллю: https://en.wikipedia.org/wiki/Bread_and_salt (East Slavs: korovai on a rushnyk; фото-підписи з Kyiv); https://uk.wikipedia.org/wiki/Хліб-сіль («коровай хліба й сіль… на знак великої поваги»; «з'їсти шматок з сіллю»). rushnyk — транслітерація КМУ № 55 (рушник).
- Sunday roast — традиційна британська страва, їдять у неділю: печене м'ясо, картопля, овочі: https://en.wikipedia.org/wiki/Sunday_roast («A range of vegetables can be served»); https://en.wiktionary.org/wiki/Sunday_roast і https://en.wiktionary.org/wiki/Sunday_dinner («roast meat and vegetables… on a Sunday»); OALD roast_2 («the Sunday roast») — https://www.oxfordlearnersdictionaries.com/definition/english/roast_2.
- Afternoon tea — невеликий прийом їжі по обіді: чай, сандвічі, сконі, тістечка: OALD https://www.oxfordlearnersdictionaries.com/definition/english/afternoon-tea («usually consisting of tea with sandwiches, scones and cakes»); CD https://dictionary.cambridge.org/dictionary/english/afternoon-tea; https://en.wikipedia.org/wiki/Tea_(meal).
- Scones — невеликі круглі; борошно, молоко, вершкове масло; їдять з джемом і вершками: CD scone («made from flour, milk or cream, and a little fat») https://dictionary.cambridge.org/dictionary/english/scone; OALD scone_1 («small, round cake… eaten with butter, jam and cream») https://www.oxfordlearnersdictionaries.com/definition/english/scone_1; https://en.wikipedia.org/wiki/Scone (self-raising flour, milk, sugar, butter).
Недоступні з сесії: historicengland.org.uk, historic-uk.com, tastingtable.com, splendidtable.org, acnuk.org, gpb.org, ich.unesco.org (WebFetch ENOTFOUND; curl — порожньо).

**Авторське право:** WebSearch з лапками, 6 фрагментів ≥ 12 слів (рецепт сирників l1–l3, лист Андрія l4, Sunday roast, хліб-сіль, afternoon tea, deruny l2) — збігів немає.

**Герої (inbox NOTE, e5s1–e5s9):** Taras і друг Ostap — Lviv; Oksana з бабусею Hanna — Zelena Dolyna (Mykola й Hanna живуть з ними); Andrii, сестра Sofiia, бабуся Nina й дідусь Vasyl з Chernihiv; Emma — Англія, Tom (у e5s1 «Tom and I have got a cat», e5s8 «Tom and Mum»), дідусь (e5s8 «my grandad’s house»); Mariia — Kharkiv. Зовнішності героїв не описую. Нових героїв немає. Mum Ostap (без імені) — l1 gaps. Нове: Andrii з татом пекли млинці «last Saturday» (l4); Emma минулого грудня в Kyiv куштувала borscht (не сподобався) і varenyky (сподобались), deruny й syrnyky не куштувала (l5); у Emma недільний ростбіф у дідуся (l6).

**Спірне:**
1. l5 Emma «didn’t like the borscht» — смак героїні, не оцінка страви; якщо стиліст вважає небажаним — замінити на іншу страву.
2. «For breakfast we had pancakes» без коми — прийнято другим порядком build (плитки коми не мають); кома після короткої обставини необов'язкова.
3. L6 Final змішує розповідь у Past Simple і загальні факти в Present Simple passive («A Sunday roast is cooked in the oven») — свідомо: два часи розділу в одному тексті.
4. `why` розділу з «meals you had» — STYLE verifier-curate-eng-plan-g6 (вирішити для класу в style-sync 6 кл.).
5. Назва boss «Lunch for Grandma and Grandad» — не з плану (у плані boss немає).

**TERM:** borscht — як у e5s3 (CD, OALD, назва елемента ЮНЕСКО); у ключах `word` цього розділу слова borscht немає.

**verifier-e6s3, 2026-11-20.** Вердикт: **verified** (усі 7 уроків). Звіт — reports/verify/e6s3.md. Факти (deruny, syrnyky, holubtsi, borscht + сметана, ЮНЕСКО 2022, хліб-сіль, Sunday roast, afternoon tea, scones) мають по ≥ 2 відкриті джерела. Форми й наголос звірено з CD і OALD. Кожне завдання я розв'язав сам. `build` перебрав через `SLID_LANG.check`: другої правильної відповіді немає. D-019 виконано. Збігів з опублікованими текстами немає (12 запитів). Правки (8 дрібних): `<u>after</u>noon tea` → без підкреслення (наголос на *noon* / *tea*, CD, OALD); `hint` stress l1; «English clubs» → «school clubs» (l6 intro); 5 однакових `fbOk` на сусідніх екранах; статуси й `meta.factcheck`. Спірне 1–3 і 5 приймаю, 4 — для style-sync 6 кл. TQ немає. Уточнення до inbox NOTE автора: Nina й Vasyl — батьки мами Andrii (e5s1 «Mum’s mum and dad»).
