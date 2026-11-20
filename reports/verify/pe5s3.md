# Верифікація: пул pe5s3 «Food and drink» (англійська, 5 кл.)

Верифікатор: verifier-pe5s3 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s3.js` (52 вправи a01–a52) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s3.md. Опора — уроки content/eng/g5-e5s3.js (verified) і reports/verify/e5s3.md.

**Вердикт: пул придатний, `verified`.** Блокувальних знахідок немає. Одна дрібна правка: hint a48. TQ не додаю.

## 1. Програма (`sources`, `src`)
МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Завантажив у цій сесії й прогнав `pdftotext` по сторінках:

| `src` | Що на сторінці (дослівно) | Вправи | Вердикт |
|---|---|---|---|
| mpim с. 20 | «Харчування — Продукти харчування», «Традиції харчування»; функції «запитувати та надавати…», «пропонувати, приймати…» | l1, l5 func, l6 cult/write | ✅ |
| mpim с. 21 | «Quantity: all, both, a few, some, any, no, a lot of, much, many» | l3, l4 | ✅ |
| mpim с. 22 | «Would: questions with ‘like’…», «Uncountables» | l2, l5 gram/write | ✅ |
| mpim с. 16 | «…каталогах, меню», «Розуміє прості рецепти…» | l6 read | ✅ |

У джерелі стоїть `program: true`, у вправах немає `srcPage` і `adapted`.

## 2. Факти й форми: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження в пулі | Джерела | Вердикт |
|---|---|---|
| Borscht is a soup with beetroot (a47, a48, a51, a46 «the Ukrainian soup») | CD «a type of soup made from beetroot» — https://dictionary.cambridge.org/dictionary/english/borscht; OALD «a soup made from beetroot…, originally from Ukraine» — https://www.oxfordlearnersdictionaries.com/definition/english/borscht | ✅ |
| Porridge is a hot breakfast; oats and milk or water (a48, a49, a45) | CD «made from oats boiled in milk or water, eaten hot for breakfast» — https://dictionary.cambridge.org/dictionary/english/porridge; OALD «boiling oats in milk or water, eaten hot, especially for breakfast» — https://www.oxfordlearnersdictionaries.com/definition/english/porridge | ✅ |
| Chips are long, thin pieces of potato (a48) | CD chip «UK (US French fry) a long, thin piece of potato that is fried» — https://dictionary.cambridge.org/dictionary/english/chip; OALD chip_1 «(British English)… a long, thin piece of potato fried in oil or fat» — https://www.oxfordlearnersdictionaries.com/definition/english/chip_1 | ✅ |
| Varenyky: potato or cheese inside (a48); з сиром (a44, вигадана сцена) | Wiktionary «Boiled dumplings stuffed with potato, cheese, or other filling» — https://en.wiktionary.org/wiki/varenyky (curl); en.wikipedia «most often only consisting of potato», «potato–cheese» — https://en.wikipedia.org/wiki/Varenyky (WebFetch) | ✅ |
| Pancakes: flour, milk, eggs (a52); Pancake Day у UK | урок l6 ч. 3; звіт e5s3 §2 (CD, OALD pancake-day) | ✅ — лише з розділу |
| Злічуваність: rice, flour, bread, milk, water [U]; sandwich, pancake, biscuit [C] | CD grammar codes (curl, `gc dgc`): rice U, flour U, bread U, milk U, water U, sandwich C, pancake C, biscuit C — https://dictionary.cambridge.org/dictionary/english/<word>; OALD — reports/verify/e5s3.md §2 | ✅ Пастки a/some і much/many — лише на чистих [C]/[U]. banana в CD має [C] і [U], тож у пулі вона стоїть лише в множині (bananas) з many/any. Це однозначно |

Нових фактів поза розділом немає. a44 (Оксана з бабусею Hanna по неділях ліплять вареники з сиром) і a45 (рецепт porridge від Emma) — вигадані сюжетні деталі, не факти про країни. facts/eng.md про їжу нічого не містить, тож факти взято лише з розділу (l6).

### Наголос (`stress` a05–a07): один головний наголос у CD UK і OALD

| Слово | CD UK (https://dictionary.cambridge.org/dictionary/english/<w>) | OALD (https://www.oxfordlearnersdictionaries.com/definition/english/<w>_1) | Ключ | Вердикт |
|---|---|---|---|---|
| breakfast | ˈbrek.fəst | ˈbrekfəst | +break\|fast | ✅ |
| dinner | ˈdɪn.ər | ˈdɪnə(r) | +din\|ner | ✅ |
| potato | pəˈteɪ.təʊ | pəˈteɪtəʊ | po\|+ta\|to | ✅ |
| tomato | təˈmɑː.təʊ | təˈmɑːtəʊ | to\|+ma\|to | ✅ |
| favourite | ˈfeɪ.vər.ɪt | ˈfeɪvərɪt | +fa\|vour\|ite | ✅ |

Усі п'ять слів підкреслені (`<u>`) в l1 info, тож опора є.

## 3. Завдання: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я спершу розв'язав сам, а тоді звірив із ключем. Для всіх 12 `build` перебрав усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` з app/lang.js (node, vm; скрипт у scratchpad). Ключі `word` прогнав через `wordVerdict(…, "en")`.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 gaps | morning, evening | l1 info | ні: dinner стоїть лише поруч з evening/morning, lunch немає | ✅ (спірне 3) |
| a02 pick | tea, milk | l1 info, sort | ні | ✅ |
| a03 word | breakfast | l1 info, #9 | ні; «Breakfast.» ok, «brekfast» → Almost (не зараховано) | ✅ |
| a04 gaps | breakfast, dinner, drink, meal | l1 info, #8 | ні | ✅ (спірне 3) |
| a05–a07 stress | див. §2 | l1 info `<u>`, #6 | — | ✅ (спірне 1) |
| a08 match | Q↔A за місцем | l1 #7 | кожне ліве перебрав з усіма правими: друга пара немає («When…? – At 7» — єдина година) | ✅ |
| a09 gaps | What, When | l1 #7 | «When do you have for breakfast», «What do you have lunch» — неграматичні | ✅ |
| a10 build | What do you have for breakfast? | l1 #7 | перебір: лише ключ | ✅ |
| a11 gaps | have, breakfast | l1 info, Final | ні | ✅ |
| a12 build | My favourite meal is breakfast. | l1 info | «Breakfast is my favourite meal» keepCase не приймає; у body сказано «Start with My.» (PITFALL writer-pe5s3, verifier-e6s8) | ✅ (спірне 4) |
| a13 gaps | breakfast, drink, have | l1 info, Final | ні | ✅ |
| a14 gaps | some, a | l2 info | «some sandwich» — не норма для однини злічуваного | ✅ |
| a15 pick | [a] rice, [breads] | l2 info «Not: a bread, rices», #7 | ні | ✅ |
| a16 gaps | some, an, sandwiches, some | l2 info, #5 | ні (apple — лише вибір a/an) | ✅ |
| a17 word | sandwiches | l2 sort, info | ні | ✅ |
| a18 word | tomatoes | l1 info, l2 #9 fbText | ні; «tomatos» → Almost (не зараховано) | ✅ |
| a19 build | We need some milk and two sandwiches. | l2 #8 | перебір: рівно 2 порядки, обидва в `answer` | ✅ |
| a20 gaps | some, any | l3 info | ні | ✅ |
| a21 pick | [some] | l3 info, #7 | ні | ✅ |
| a22 gaps | Is, Are | l3 info «milk, flour → is» | some/any у питанні не оцінюється (PITFALL writer-pe4s2) | ✅ |
| a23 gaps | any, is, are, any | l3 info | ні | ✅ |
| a24–a26 build | There is some milk. / There aren’t any eggs. / We haven’t got any flour. | l3 info | перебір: лише ключ; keepCase відсікає інверсію «Haven’t we…», «Is there…» | ✅ |
| a27 gaps | many, much | l4 info | ні | ✅ |
| a28 gaps | much, many | l4 info, #4 | ні (pancakes — з l3) | ✅ |
| a29 word | much | l4 info | «a lot of» не зараховується й у питанні неприродне | ✅ |
| a30 pick | [much] | l4 info, #6 | ні | ✅ |
| a31 gaps | a lot of, much, many, much | l4 info, Final | «much pancakes» у (+) хибне | ✅ |
| a32, a33 build | How many sandwiches have we got? / There isn’t much bread. | l4 info, #7 | перебір: лише ключ | ✅ |
| a34 gaps | a lot of, much, many, many | l4 Final | ні | ✅ |
| a35 gaps | please, thank you | l5 info, #5 | пастки «I do / I don’t», не «thank you» | ✅ |
| a36 match | 3 пари | l5 #6 | перебір правих: друга доречна пара немає | ✅ |
| a37 gaps | would, a, No, thank you, Yes, please | l5 info, Final | «What do you like?» відсікає відповідь «I’d like…»; «No, I don’t» — контекст «isn’t very hungry» | ✅ |
| a38 word | would | l5 info, #7 | «Do you like some water?» — не пропозиція (l5 hyp) | ✅ «Would» ok |
| a39 gaps | some, a | l5 info | rice [U] — CD | ✅ (спірне 5) |
| a40 pick | [Do] | l5 info, hyp | виправити можна лише Do → Would: «Yes, please» і «some» відсікають «Do you like» | ✅ |
| a41–a43 build | Would you like some water? / I’d like some soup, please. / Would you like a sandwich or an apple? | l5 info, #8, Final | перебір: a41, a42 — лише ключ; a43 — рівно 2 порядки, обидва в `answer` | ✅ |
| a44 choice | cheese | текст на екрані | одна правильна | ✅ |
| a45 multi | oats, milk, a banana | рецепт на екрані «You need» | flour, eggs відсутні в рецепті | ✅ |
| a46 choice | ₴110 | меню на екрані (як l5 Final); soup = borscht (l6) | 80 + 30 = 110. Дистрактори: 120 = varenyky + tea, 100 = pancakes + tea. Суп у меню один, напій теж один | ✅ (спірне 2) |
| a47 gaps | soup, beetroot | l6 ч. 1, poster | ні | ✅ |
| a48 match | 4 половини | l6 ч. 1–2, poster | «Varenyky have long, thin pieces of potato» граматичне, але хибне за l6; інших доречних пар немає | ✅ hint виправлено (§5) |
| a49 word | porridge | l6 ч. 2, poster | ні | ✅ |
| a50 gaps | Would, please | l5 info | ні | ✅ |
| a51 build | Borscht is a soup with beetroot. | l6 ч. 1 | перебір: лише ключ | ✅ |
| a52 gaps | some, some, eggs, Would | l6 Final, рецепт | ні | ✅ |

**Лексика не виходить за уроки** (PITFALL verifier-pe4s8). Слова поза розділом звірив grep'ом з уроками e4s*, e5s1, e5s2 і з уроками e5s3 до уроку вправи. cook (a29) — e4s1, e4s2, e5s3l3; message (a21, a30) — e4s1…e5s2; pay (a46) — e4s4; gets up (a03) — e5s2; kitchen — e4s2, e5s1; fridge — e5s3l3; vegetables — e4s4, e5s3l2; hungry — e4s5, e5s3l5; Sundays — e4s3, e4s8; adult, pan, inside, poster — e5s3l6 або раніше. Пізніша лексика у вправах раніших уроків не трапляється.

**Покриття** (урок × `sk` з оцінюваних неhyp-екранів уроку, рівні). Скриптом по файлах розділу й пулу:
l1 vocab 4 (1,1,2,3), phon 3, func 3, write 3; l2 gram 3, write 3; l3 gram 4 (1,2,2,3), write 3; l4 gram 5, write 3; l5 func 3, gram 3, write 3; l6 read 3, cult 3, write 3. Кожна пара має ≥ 3 вправи рівнів 1–3. Зайвих `sk` немає. Boss l7 лишається без вправ, як в інших пулах. `node tools/personalization-qa.mjs --pool pe5s3 --strict` до зміни статусу давав лише «ще не verified».

**Механіка й BrE (grep по файлу).** Ключі `word` без кінцевого `.!?`: breakfast, sandwiches, tomatoes, much, would, porridge. Не знайдено: AmE (color, favorite, cookie, fries, candy, apartment), «Listen / You hear», IPA `/…/`, `uk`, літер A/B/C і позиційних посилань. Типи — у POOL_TYPES: gaps 20, build 12, word 6, pick 5, match 3, stress 3, choice 2, multi 1. Автор у нотатках пише «build 11, word 7»: це дрібна неточність підрахунку, на зміст вона не впливає.

**Герої — канон.** Taras, Ostap, Taras’s mum (Lviv); Andrii, Sofiia, Dad, Mum (Kyiv, Café Smachno); Oksana, Grandma Hanna, Dmytro — брат Оксани (Zelena Dolyna; e5s1, verifier-e5s3); Mariia (Kharkiv; листується з Emma — e5s1, e5s4, e5s5); Emma (England). Dmytro лише в ролі брата Оксани (a44).

**Спірні місця автора 1–5.**
1. `stress` для phon і choice/multi для read: типи є в POOL_TYPES, validate без зауважень. Приймаю.
2. a46: арифметика однозначна, рівень 3 доречний. Приймаю.
3. a01/a04 «dinner in the evening»: основне значення за CD («usually… in the evening»). Поруч із lunch чи полуднем dinner не стоїть. Приймаю.
4. a12: «Start with My.» у body. Приймаю (той самий підхід, що в PITFALL verifier-e6s8).
5. a39: rice [U] за CD. Приймаю.

## 4. Педагогіка й рівень
`steps` і `hint` короткі (≤ 8–10 слів), у шаблонних формулах уроку: «Can you count it?», «(+) some, (−) any», «the first part is strong». `uk` не потрібне. Рівні наростають: 1 — два пропуски чи 4 плитки; 3 — лист чи діалог з 3–4 пропусками або читання з арифметикою. Підказки ставлять навідні питання й відповіді не видають. Неприйнятного для віку змісту немає. У рецепті є «Ask an adult to help you!».

## 5. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a45 рецепт | `"Put the oats and the milk in a pan" "Add the banana"` | збігу немає (лише загальні рецепти вівсянки) |
| a52 | `"On Pancake Day, I make pancakes. I need some flour, some milk and two eggs"` | збігу немає |
| a34 | `"I'm at a picnic with my class. We've got a lot of sandwiches"` | збігу немає |
| a31 | `"there isn't much milk now, and there aren't many eggs"` | збігу немає |
| a13 | `"At 7 o'clock in the morning, I have breakfast: eggs and bread. My favourite drink is tea"` | збігу немає (схожі учнівські тексти, дослівного збігу немає) |
| a44 | `"On Sundays, Oksana and Grandma Hanna make varenyky. They put cheese inside"` | збігу немає |
| a04 | `"I get up at 7 o'clock and I have breakfast with" "In the evening, we have dinner at home"` | збігу немає (коментарі learnenglish.britishcouncil.org з іншим текстом) |
| a43 | `"Would you like a sandwich or an apple" "Yes, please"` | збігу немає |

Решта фрагментів коротші за 12 слів або повторюють власні речення розділу, які вже перевірив verifier-e5s3.

## 6. Правки (зроблені)
1. **a48 `hint`:** «Remember the poster: Ukraine and the UK.» → «Remember the texts and the poster: Ukraine and the UK.» Причина: половини «a hot breakfast» і «long, thin pieces of potato» є лише в тексті l6 ч. 2, на poster їх немає. Колишня підказка вела не туди.
2. `status: "verified"`, `meta.factcheck`, рядок «Статус» у шапці.

Після правок `node tools/validate.mjs --pool pe5s3` дає 0 помилок і 0 попереджень. Браузерний `test-answer-ui --suite content --pool pe5s3` і плейтест не запускав: пулу ще немає в manifest (build робить оркестратор), Python-модуля playwright у контейнері немає. Обидва прогони — після build, у CI.

## 7. Рекомендовано (не блокує)
- Після build: `python3 tools/test-answer-ui.py --suite content --pool pe5s3`.
- a52 майже повторює l6 Final (рецепт Emma). Для тренування це прийнятно. Якщо style-sync захоче різноманіття, можна взяти інші кількості.

## Вердикт
**pe5s3 → `verified`** (52 вправи, уроки e5s3l1–l6). Відкритих ❌ і ⚠️ немає. `approved` ставить лише людина.
