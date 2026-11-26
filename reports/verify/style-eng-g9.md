# Точкова повторна верифікація: style-eng-g9 (англійська, 9 кл.)

Верифікатор: verifier-style-eng-g9, 2026-11-26. Скіл content-verify. Обсяг: перелік reports/style/eng-g9.md §7 + `git diff f22e20e HEAD -- content/eng/g9-*.js` (f22e20e «eng: e9s9 verified — 9 кл. повністю verified»; g9 у цьому проміжку зачіпає лише 493eabc style-eng-g9). dge9 і 10 кл. не перевірялися, бо їх перевіряє інший верифікатор. Еталон: reports/verify/style-eng-g8.md.

## Ключі й друга відповідь (diff)
- Звірено рядок за рядком. `correct`, `{*…}`, `answer`, `tiles`, `extra` не змінено ніде. Змінено один дистрактор: e9s4l1 #6 `{*weather forecast|chat show|quiz show}`. Варіант «chat show» однозначно хибний, бо тато перед роботою в саду дивиться прогноз погоди.
- e9s6, e9s8: скрипт порівняв diff після нормалізації «+ the third form» → «+ third form». Інших змін, крім 41 заміни (body теорії, hint, fbBad, fbText), 5 `fbOk`, 4 `hint` і `why` e9s8, немає. Жодна заміна не стоїть у ключі.
- e9s5l5 #11: змінився лише місяць поза дужками (June → July ×3). Ключі love / afraid / why / That’s why однозначні. «August is better» лишається логічним.
- e9s3l7 T8: нова умова «agrees only partly». Правильна лише «That’s true, but…»: «I agree with you» і «I think you’re right» означають повну згоду. Друга правильна відповідь не з'явилася.
- e9s4l5 #5: «What did Mr Moroz say?». Пари однозначні за дієсловом (switch off / take / clap / wait). Слова «Switch off your phones», «Could you clap…» і «Don’t take photos» Mr Moroz справді говорить на екранах 1 і 3 уроку. «Wait for me, please» — переказ його «Please wait here after the show», ключа це не зачіпає.

## Перелік §7
| Місце | Розв'язав сам / опора | Вердикт |
|---|---|---|
| e9s4l1 `info` #5 chat show (also talk show) | Збігається з OALD і CD (нижче) | ✅ |
| e9s4l1 #6 дистрактор chat show | Опора — `info` #5: прогноз погоди = weather forecast; chat show хибний | ✅ |
| e9s4l2 назва, #1, #4, #7, #11 (chat show у тексті) | Поза ключами; Music Chat — програма, де ведучий говорить із гостями, отже chat show відповідає визначенню | ✅ |
| e9s4l5 #5 Mr Moroz | Мовця тепер названо правильно (вступ уроку: studio manager Mr Moroz) | ✅ |
| e9s3l6 `info` #4, `fbText` sort #7, outro | «partly agree … a polite way to give a different idea» — кошики agree / partly agree / don’t agree не змінено; узгоджено з e9s9l2 («That’s true, but… – partly agree») і e9s9l7 T3, T8 | ✅ |
| e9s3l7 T8 | Відповідь — «That’s true, but new clothes cost a lot of money.»; опора — e9s3l6 `info` | ✅ |
| e9s5l5 #11 July | Узгоджено з e5s6 («In July, we go to Odesa. My uncle Ivan lives there») і e9s8 | ✅ |
| e9s8 `why` | «If we had booked tickets, we would have seen the castle!» — граматично правильний Third Conditional, речення з e9s8l5; нова граматика лише цитатою | ✅ |
| e9s1l2 #10 penfriend | Поза ключем; «pen friend» у g9 — 0 | ✅ |

## 21 новий `hint` у фіналах
| Завдання | Hint | Чи видає відповідь | Вердикт |
|---|---|---|---|
| e9s1l7 T3 | Does Kyrylo work a lot or a little? | Підказує значення; слово hard-working учень знаходить сам | ✅ |
| e9s1l7 T7 | Which action is long, and which is short? | Правило; порядку плиток не дає | ✅ |
| e9s2l7 T3 | Look at the % after each sentence. Can Mariia see the clouds? | **Наводить на хибну відповідь.** У розділі (e9s2l3 #402) і в ключі % стоїть **перед** реченням, до якого належить: (100%) → definitely, (25%) → probably won’t. За підказкою «after each sentence» 25% належить до «We will … stay at home», і учень вибирає probably | ❌ → виправлено |
| e9s2l7 T4 | Is it a finished action or an action in progress at that moment? | Час (Future Continuous) уже названо в умові; форму не дає | ✅ |
| e9s2l7 T5 (pick) | must not be + which form of the verb? | У `pick` кнопка — кожне слово, а після «must not be» стоїть одне слово — pick. Підказка показує місце помилки, тобто саму відповідь (критерій g8: «не вказує, яке слово хибне») | ❌ → виправлено |
| e9s3l7 T5 | What comes after each gap: an adjective alone or an adjective + a noun? One thing or more? | Правило so / such / such a; жодного пропуску не розв'язує | ✅ |
| e9s3l7 T8 | How do we partly agree? Remember the rule “Giving your opinion”. | Відсилає до правила; фрази не називає | ✅ |
| e9s4l7 T4 (build) | A reported question has the word order of a statement. | Правило; пастку did учень відкидає сам | ✅ |
| e9s4l7 T7 | After I wonder what…, is the word order like a question or like a statement? | Правило; хибне «what think our listeners» не є ні тим, ні тим, тож вибір лишається за учнем | ✅ |
| e9s5l7 T4 | Look before and after each gap: a place, a thing or a time? A person or a verb next? | Загальне правило для всіх пропусків | ✅ |
| e9s5l7 T6 (pick) | Is acting the reason or the result? | Підказує логіку, а не слово; кнопки — усі слова | ✅ |
| e9s5l7 T9 | Which gap is about a reason, a thing, a time or someone’s things? | Порядок не збігається з порядком пропусків; правило | ✅ |
| e9s6l7 T5 (multi) | Check two things in each sentence: be after can, and the third form. | Критерії; варіантів не називає | ✅ |
| e9s7l7 T2 | Which verb form comes after a preposition? And which preposition goes with keen? | Не називає -ing / on | ✅ |
| e9s7l7 T4 (sort) | Is it a good idea, something you must do, or something you don’t need to do? | Перекладає назви кошиків; модальних не зіставляє | ✅ |
| e9s7l7 T6 (pick) | Check the verbs after will. | «will» є в обох групах-кнопках ([will can], [!will be able to]), тож вибір не розкрито | ✅ |
| e9s8l7 T2 | 1998: a point in time or a period? One of the… → one city or many? | Міркування, як «Can you count sweets?» у g8 | ✅ |
| e9s8l7 T6 | Does Isla really live in Lviv? Is the trip to Ukraine a real plan? | Міркування, як «Does Chloe live in Kyiv?» у g8 | ✅ |
| e9s8l7 T9 | Which form comes after worth? And can would go after if? | Пропуск має два варіанти (had booked / would have booked), а питання «так / ні» прямо відкидає дистрактор, тобто розв'язує пропуск | ⚠️ → виправлено |
| e9s9l7 T2 | Is Andrii right about Taras? | Міркування; слово Actually не названо | ✅ |
| e9s9l7 T6 | Look at the commas and the full stops. Which gap starts a new sentence? Which one shows a result? | Правило пунктуації; слів не дає. Перший пропуск теж на початку речення, але fbBad («a new sentence + comma») це знімає | ✅ |

Правки (мінімальні, лише `hint`):
1. content/eng/g9-e9s2.js, e9s2l7 T3: → «Each % is for the next sentence. Can Mariia see the clouds?»
2. content/eng/g9-e9s2.js, e9s2l7 T5: → «Passive: be + which form of the verb? Check every verb.» (у реченні два пасиви, тож місце помилки не видно)
3. content/eng/g9-e9s8.js, e9s8l7 T9: → «Which form comes after worth? And which form comes after if when we imagine the past?»

## Словники (відкриті в цій сесії, curl)
- https://www.oxfordlearnersdictionaries.com/definition/english/chat-show — «chat show … (British English) (also talk show North American English, British English)»
- https://www.oxfordlearnersdictionaries.com/definition/english/talk-show — «talk show … (British English also chat show)»
- https://dictionary.cambridge.org/dictionary/english/chat-show — «chat show noun [ C ] UK … ( US also UK talk show )»
- https://dictionary.cambridge.org/dictionary/english/penfriend — «penfriend noun [ C ] uk»

Отже, «chat show (also talk show)» — правильна BrE-подача. Нових фактів (дат, чисел, назв) правки не внесли.

## Авторське право (нові фрагменти ≥ 12 слів)
| Фрагмент | Запит | Результат |
|---|---|---|
| e9s8 `why` | "If we had booked tickets, we would have seen the castle" | збігів немає |
| e9s3l7 T5 hint | "What comes after each gap: an adjective alone or an adjective + a noun" | збігів немає |
Решта нових рядків коротші за 12 слів або це заміни одного слова в уже перевірених текстах.

## Герої 8 ↔ 9 кл.
| Герой | 8 кл. | 9 кл. | Вердикт |
|---|---|---|---|
| Oksana | 14 (e8s6) | 15 (e9s1 «Now I’m fifteen»; e9s3, e9s5) | ✅ +1 |
| Emma | 14 (e8s6) | 15 (e9s5 «Emma is fifteen») | ✅ |
| Tom | 12 (e8s4 «Tom, who is twelve») | 13 (коментарі e9s3, e9s5) | ✅ |
| Dmytro | 10 | 11; e9s1 «Oksana is four years older than Dmytro» (15 − 11) | ✅ |
| Andrii, Mariia | 14 (e8s1) | 15 за серією; суперечностей у g9 не знайдено | ✅ |
| Uncle Ivan, Odesa | e5s6: July | e9s5l5 #11 July (було June), e9s8 | ✅ після правки style-sync |
| Marko | — | 12 (e9s5), новий | ✅ |
| Taras і спорт | 4–6 кл. vs 7+ кл. | відкрито з style-sync g7 | для людини |

## Прогін
`node tools/validate.mjs --section e9s1…e9s9`: 0 помилок і 0 попереджень у кожному (після правок). Build, commit і плейтест не робив: у контейнері немає Python-модуля playwright, плейтест — після build оркестратора, у CI.

## Вердикт
style-eng-g9 **прийнято** після трьох правок `hint`. Ключі цілі, другої правильної відповіді немає. Статус уроків (`verified`) не змінено. Людині: Taras і спорт (давнє відкрите питання, без змін).
