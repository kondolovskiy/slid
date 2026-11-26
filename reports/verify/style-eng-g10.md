# Точкова повторна верифікація: style-eng-g10 (англійська, 10 кл.)

Верифікатор: verifier-style-eng-g10, 2026-11-26. Скіл content-verify. Обсяг: перелік reports/style/eng-g10.md §7 і `git diff 02f2e1d HEAD -- content/eng/g10-*.js` (у проміжку g10 зачіпає лише 492bf08 style-eng-g10). 11 кл., dge10 і g9 не перевірялися: першими двома займаються інші агенти, а g9 поза обсягом. Еталон: reports/verify/style-eng-g9.md.

## Ключі й друга відповідь (diff)
- Механічна звірка (скрипт): для кожного з g10-e10s1…e10s8 набір рядків `correct:`, `answer:`, `tiles:`, `extra:` і всіх `{*…}` до і після правок однаковий (md5 збігається у 8 файлах з 8). Ключі не змінено ніде.
- `opts` змінено лише в одному завданні, e10s8l7 T9 (нижче). Решта diff: 3 текстові вставки в уривки читання, 15 нових `hint`, 16 замін `fbOk`, заміни імен і терміна. Ключів жодна з цих правок не зачіпає.

## Перелік §7
| Місце | Розв'язав сам / опора | Вердикт |
|---|---|---|
| e10s2l3 ч. 1 (+3 речення Kyrylo: родина дивиться церемонію, сестра з прапорцем) | Відповідь — «London was the first city… three times» (речення в тексті). «opening ceremony is at the end» лишається хибним: «at the very start» є в тексті, а нове речення про церемонію цього не змінює. Нових дат і чисел немає | ✅ |
| e10s2l3 ч. 2 (+3 речення: team spirit, refused to give up) | Правильні [0,1,2]. «Ukraine came first» хибне («Only China… won more»). Слова «made the whole country proud» не роблять Україну першою | ✅ |
| e10s2l3 ч. 3 (+2 речення: тато про фінал, сестра і фехтування) | Правильна «Euro 2012 took place in two countries». Italy / six medals in Paris лишаються хибними. Kyrylo в 2026 — 16 (серія), у липні 2012 йому було 2, тож «too young to remember» узгоджено. Сестра Kyrylo в предметі раніше не траплялася, суперечності немає | ✅ |
| e10s3l1 ч. 1–3 (+1 речення в кожній) | Відповіді banosh; Burns’s birthday; [1,3] butter + 2022. Нові речення — враження Taras / Emma, без дат, назв і чисел. Жоден хибний варіант не став правильним | ✅ |
| e10s4l6 ч. 2 («Next summer… with his little sister, Zlata») | Zlata — молодша сестра Taras: e5s1 «a little sister, Zlata», e10s1, e10s4l1. Правильні [0,2]; варіанти не зачеплено | ✅ |
| e10s4l6 ч. 3 («Small actions like these really make a difference.») | Основна думка — «National parks protect nature, and every visitor can help them». Нове речення її підсилює і другої правильної відповіді не створює | ✅ |
| e10s8l2 Nazar → Ruslan (текст, hint, fbText) | Правильний варіант без імені («Denys’s friend took the NMT outside Ukraine»). У предметі Ruslan більше ніде не трапляється (grep) | ✅ |
| e10s8l4 Kateryna → Daryna (body `word`, фінал уроку) | Daryna — однокласниця Andrii (e10s1, e10s7, e11s1). Kateryna в e10s8 тепер не трапляється. Ключі it in / it out, for it ті самі | ✅ |
| e10s8l6 Iryna Tkachuk → Iryna Kostenko | Tkachuk лишилося тільки в e5s1 (Ms Tkachuk). Kostenko — лише в e10s8 | ✅ |
| **e10s8l7 T9** (варіанти → «a wind turbine technician») | Сам: «I’m thinking of becoming…» (thinking of + -ing). Опора: e10s8l6 `info` («thinking of + -ing») і діалог «Bohdan: I’m thinking of becoming a wind turbine technician». Тепер T9 узгоджено з l6. Хибні «thinking to become» і «thinking of become» однозначно хибні. `correct: 2` | ✅ |
| e10s1l3 #0 «In July, Ostap had a birthday party. That day, …» | Узгоджено з e5s8 (22 July). Шкали часу й ключі уроку від «yesterday» не залежали (у l3 «yesterday» більше не трапляється) | ✅ |
| e10s1l5 «his neighbour Mr Lukashuk» | Узгоджено з текстом l5 «our neighbour Mr Lukashuk» і з коментарем у шапці | ✅ |
| e10s4 l5–l6, «past participle» → «the third form» (4 місця) | Місток «will have + past participle (the third form)» лишився в `info` l5. Ключів немає. Примітка: у 9 кл. e9s2 «past participle» лишається 15 разів (після містка в `info`), тож твердження звіту style «у 7–9 кл. — the third form» неточне. Для g10 правка все одно відповідає більшості (10 файлів 7–9 кл. з «the third form»). Рядок в inbox | ✅ |
| 16 замін `fbOk` → «Brilliant!» / «Correct!» | На зміст не впливають | ✅ |

## 15 нових `hint` у фіналах
Критерії ті самі, що в style-eng-g8/g9: підказка не називає відповіді; не стоїть у `pick`; не є питанням «так / ні», яке саме відкидає дистрактор; і (з g9, e9s5l7 T9) якщо вона перелічує категорії, то не в порядку пропусків, бо інакше кожному пропуску видано готову мітку.

| Завдання | Hint | Чи видає відповідь | Вердикт |
|---|---|---|---|
| e10s2l7 T2 | Look at the verb before each gap: keep, refuse, manage. Which pattern goes with each one? | Називає дієслова, які вже є в тексті. Модель (-ing / to) учень добирає сам | ✅ |
| e10s2l7 T4 | In each sentence, is it a job to do, a memory or the reason for stopping? | Категорії йдуть **в порядку пропусків** (job → remember to bring, memory → forget watching, reason → stopped to buy), тож кожен пропуск дістає готову мітку. Учневі лишається тільки пригадати «job → to» | ⚠️ → виправлено |
| e10s2l7 T7 | How many medals did Kharlan win in Paris? And how many does she have in total? | Числа не називає. Розрізняє «у Парижі» й «загалом», але відповідь учень бере з уривка на екрані | ✅ |
| e10s3l7 T2 | Remember the patterns: prefer A … B, and would rather + which form of the verb? | Прийменника (to) не дає, форми теж: «…» на місці прийменника | ✅ |
| e10s3l7 T4 (multi) | Find the states and the actions. Which of them can go with would? | Правило; варіантів не називає | ✅ |
| e10s3l7 T9 | In each sentence, is it a past state, something that is becoming normal or something that is normal now? | Звіт style стверджує, що «порядок навмисно не той», але це **неправда**: past state → used to live, becoming normal → is getting used to, normal now → be used to. Порядок збігається з пропусками, тобто мітки готові | ⚠️ → виправлено |
| e10s4l7 T3 | Can Taras see the clouds? And what comes after be likely and be unlikely? | Те саме, що прийняте в g9 «Can Mariia see the clouds?». Форми (to + verb) не дає | ✅ |
| e10s4l7 T7 | Will the action be finished before the time, or will it go on all the time up to it? | Протиставлення by / until як правило, слів не називає. Учень сам вирішує, що «road is closed» — стан, який триває | ✅ |
| e10s4l7 T8 | Remember the dates in the article about national parks. | Відсилає до тексту e10s4l6; дати не названо | ✅ |
| e10s5l7 T3 | Did the painting do the action? And which preposition goes with famous? | Логіка пасиву, як у fbBad. Форму was painted і прийменник for не названо | ✅ |
| e10s5l7 T5 (multi) | Is the story about now or about the past? Which forms can show how long, up to a moment? | Критерії; варіантів не називає. «forms» у множині не підказує, скільки відповідей, бо `fbBad` усе одно каже «Two answers» | ✅ |
| e10s5l7 T6 | Is it a finished result or an action that went on? Is know an action or a state? | Питання про значення. Висновок «стан → без -ing» учень робить сам за правилом e10s5l4 | ✅ |
| e10s8l7 T4 | Is it a place or the thing you want? Then remember the phrasal verbs for information and forms. | Правило apply to / for, частки out / in не названо | ✅ |
| e10s8l7 T5 (multi) | Is it a phrasal verb or a verb with a preposition? Then check where the pronoun goes. | Правило; варіантів не називає | ✅ |
| e10s8l7 T7 | Does it continue, is it a deadline or is it a starting point? | Категорії йдуть **в порядку пропусків** (until / by / since), тобто це фактично fbBad, показаний до відповіді | ⚠️ → виправлено |

Правки (мінімальні, лише порядок категорій у `hint`; ключі, fbBad і fbText не чіпав):
1. content/eng/g10-e10s2.js, e10s2l7 T4 → «In each sentence, is it a memory, a job to do or the reason for stopping?»
2. content/eng/g10-e10s3.js, e10s3l7 T9 → «In each sentence, is it something that is becoming normal, a past state or something that is normal now?»
3. content/eng/g10-e10s8.js, e10s8l7 T7 → «Is it a starting point or a deadline, or does it continue?»

## Факти
Нові речення в уривках не містять дат, чисел, назв подій чи імен реальних осіб. Додано лише враження й побут вигаданих героїв, а наявні факти (Athens 1896, London ×3, Stoke Mandeville, Beijing 2022, Euro 2012, Kharlan, haggis, chicken Kyiv, Shatsk / Svitiaz) не змінено. Їх уже перевірили verifier-e10s2, e10s3 і e10s4. Таблиці фактів для цієї задачі немає. Перевірено, що нові речення не суперечать старим: «the exciting final in Kyiv» — оцінка тата, а не факт; фінал у Kyiv є в тексті.

## Словники (відкриті в цій сесії, curl)
- filling (adj., про їжу): https://www.oxfordlearnersdictionaries.com/definition/english/filling_2 — «making your stomach feel full»; https://dictionary.cambridge.org/dictionary/english/filling — «If food is filling, you feel…»
- role model: https://www.oxfordlearnersdictionaries.com/definition/english/role-model — «a person that people admire and try to copy»; https://dictionary.cambridge.org/dictionary/english/role-model — «a person who someone admires and whose behaviour they try to copy»
- team spirit: https://www.oxfordlearnersdictionaries.com/definition/english/team-spirit — «the quality of being willing to work together with other people as part of a team»; https://dictionary.cambridge.org/dictionary/english/team-spirit — «a feeling of belonging together that the members of a group have towards others in the group»
- make a difference: https://www.oxfordlearnersdictionaries.com/definition/english/difference — «make a, no, some, etc. difference (to somebody/to something/in something) to have an effect…»; https://dictionary.cambridge.org/dictionary/english/difference — idiom «make a difference»
- think of doing: https://www.oxfordlearnersdictionaries.com/definition/english/think-of — «think of doing something»; https://dictionary.cambridge.org/dictionary/english/think-of — «to consider doing something … think about/of doing something She's thinking of changing…»

## Авторське право (нові фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Запит | Результат |
|---|---|---|
| e10s2l3 ч. 1 | "Everyone cheers when the Ukrainian team appears, and my little sister always waves a small flag" | збігів немає |
| e10s2l3 ч. 1 | "For me, that moment shows what the Games are about: people from many countries in one place" | збігів немає |
| e10s2l3 ч. 2 | "When I read about this team, I understood what team spirit really means" | збігів немає |
| e10s2l3 ч. 3 | "I was too young to remember Euro 2012, but my dad still often talks about" | збігів немає |
| e10s3l1 ч. 1 | "It was so filling that I didn't want anything else for the rest of the day" | збігів немає |
| e10s3l1 ч. 2 | "Last year, Isla sent me a photo of the haggis on her family's table" | збігів немає |
| e10s3l1 ч. 3 | "Now I always look for the new spelling on the pack, and I tell my friends why it matters" | збігів немає |
| e10s2l7 T2 hint | "Look at the verb before each gap: keep, refuse, manage. Which pattern goes with each one" | збігів немає |
Решта нових рядків коротша за 12 слів або це загальні формули правил.

## Герої 10 кл. ↔ 4–9 кл.
| Герой | Звірено | Вердикт |
|---|---|---|
| Ostap, день народження | e5s8 22 July ↔ e10s1l3 «In July» | ✅ |
| Zlata — молодша сестра Taras | e5s1 ↔ e10s1, e10s4, e11s1, e11s2 | ✅ |
| Daryna, Bohdan, Kyrylo — клас Andrii / Ms Lysenko | e10s1, e10s7, e10s8, e11s1 | ✅ |
| Kateryna — Kharkiv (Mariia) | з e10s8 прибрано. У e10s2l7 T2 («Kateryna managed to finish her first 5 km race») вона стоїть поруч із Daryna й Bohdan, але школа там не названа, тож суперечності немає | ✅ |
| Nazar (село Оксани) | у e10s8 не трапляється | ✅ |
| Tkachuk | лише e5s1 | ✅ |
| Leah / «one cousin, Jack» (e5s1), Taras і спорт | давні розбіжності, у цій задачі не створені | для людини / куратора героїв |

## Прогін
`node tools/validate.mjs --section e10s1…e10s8` (після моїх правок): 0 помилок у кожному розділі. Є 1 попередження: e10s4l6 readWordsPerScreen 67 > 65, наслідок обсягу тексту 355 слів (П1407: 350–400). Це питання калібрування профілю `eng."10-11"` (пропозиція 65 → 70 — рядок STYLE в inbox від style-eng-g10), а не дефект змісту. Рішення — у decisions.md, людина чи куратор. Build, commit і плейтест не робив: у контейнері немає Python-модуля playwright, плейтест — після build оркестратора.

## Вердикт
**Прийнято.** Знайдено 3 ⚠️ (порядок категорій у hint), усі виправлено. Ключі цілі, другої правильної відповіді немає, нових фактів немає. Усі уроки e10s1–e10s8 лишаються `verified`.
Потребує людини: (1) профіль «10-11» readWordsPerScreen 65 → 70 (decisions.md); (2) давні розбіжності героїв Leah / Jack і Taras / спорт; (3) e9s2 «past participle» проти «the third form» в інших файлах 7–9 кл. (рядок в inbox).
