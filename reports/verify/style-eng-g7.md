# Точкова повторна верифікація: style-eng-g7 (англійська, 7 кл.)

Верифікатор: verifier-style-eng-g7, 2026-11-25. Скіл content-verify. Обсяг: лише перелік reports/style/eng-g7.md §9 + diff `b68f92f^..b68f92f` у content/eng/g7-*.js (після b68f92f g7-файли не змінювались; базою є «eng: e7s1 verified» b88b1b0 та відповідні verified-коміти e7s2–e7s7).

## Diff style-sync: ключі, друга відповідь, hint
| Місце | Зміна | Розв'язав сам / опора | Вердикт |
|---|---|---|---|
| e7s6l2 #9 (Final, choice) | Текст Emma: «girls’ running race», Oliver замість Tom | Відповідь «She’s making cakes for the class stall.» — дослівно в тексті («I’m making cakes for our class stall»). Дистрактор «running an egg-and-spoon race» хибний: зараз (Present Continuous) Emma пече; гонка — минулого року й не egg-and-spoon. Oliver — однокласник Emma з e6s4 (рядок 222, 771: «Emma won the girls’ running race», «He didn’t win») — узгоджено | ✅ |
| e7s5l4 #8 (build) | answer звужено до «Were you playing when it started to snow?»; body «Start with Were.» | Плитки без коми; рушій (app/lang.js buildOk) порівнює речення з ключем, кома неможлива → «When it started to snow were you playing» без коми не є нормою; з «Start with Were» єдиний порядок з усіх 7 плиток. Пастка `was` дає хибне речення | ✅ |
| e7s4l7 T4 hint | «Is it about the play or about how a person feels?» | Наводить на правило -ing/-ed, жодного з трьох слів не називає | ✅ |
| e7s4l7 T5 hint | «100 and 105 minutes: is it a big difference or a small one?» | Питання-міркування до пропуску 1; «a bit» не названо; even/as не зачеплено | ✅ |
| e7s4l7 T6 hint (build) | «Start with You aren’t. Then the adjective.» | Єдине, що перевіряє завдання, — місце enough після прикметника; «Then the adjective» прямо ставить old перед enough → підказка видає відповідь | ❌ → виправлено: «Start with You aren’t. Where does enough go: before or after the adjective?» |
| e7s4l7 intro | «…write about the play and the film» | Неоцінюваний; відповідає T4–T6 | ✅ |
| e7s5l7 T3 hint (word) | «Does Taras watch races on TV now, or did he do it in the past?» | Наводить на значення used to, слово «used» не називає | ✅ |
| e7s5l7 T4 hint (pick) | «Check each verb with its subject: we, our fans, it.» | Не вказує, яке слово хибне (три кандидати) | ✅ |
| e7s5l3 #9, e7s5l6 #8, e7s5l7 T3 (word) | назва «Write the missing word with used to.» | Ключ `used` (рядок без `.!?`); назва відсікає інші дієслова (liked, wanted) — одна відповідь | ✅ |
| e7s2l4, e7s2l7 | «past participle» → «the third form» (13 місць, «Third forms») | Залишків «participle» у g6/g7 немає; термін «the third form» уведено в e6s7 (рядок 578) і e7s1l2 — опора є. Ключі не змінено | ✅ |
| e7s1 `why` | «…and say: “I’ve just washed the dishes!”» | Зразок фрази, як у `why` 6 кл. («long dark hair, big blue eyes»). BrE: CD dish — «wash the dishes / Have you washed the dishes?»; OALD dish_1 — «I’ll do the dishes (= wash them)» | ✅ |
| e7s5l4 #3 info | «Remember: while + a long action.» | while подано в e6s4l5 (рядок 577), урок має `pre: e6s4l5` — «Remember» доречне | ✅ |
| fbOk (8), назви екранів e7s4l3 #7, #10, e7s4l6 #10 | зміна слів | Ключі не зачеплено; «Sort the sentences.» — елементи справді речення | ✅ |

Словники (відкриті в цій сесії, curl):
- https://dictionary.cambridge.org/dictionary/english/dish — «wash the dishes Have you washed the dishes?»
- https://www.oxfordlearnersdictionaries.com/definition/english/dish_1 — «I’ll do the dishes (= wash them)»
- https://dictionary.cambridge.org/dictionary/english/egg-and-spoon-race — стаття «egg-and-spoon race» існує

## Авторське право (нові фрагменти ≥ 12 слів)
| Фрагмент | Запит | Результат |
|---|---|---|
| e7s4l7 intro | "Help them choose, buy tickets and write about the play and the film" | збігів немає |
| e7s6l2 #9 | "Last year I won the girls' running race" "Oliver didn't win" | збігів немає |

## Герої: вік 6 → 7 кл.
| Герой | 6 кл. | 7 кл. | Вердикт |
|---|---|---|---|
| Dmytro | 8 (e6s1, рядок 302) | 9 (e7s1 143, 576; e7s3 853) | ✅ +1 |
| Tom | 10 (e6s8, рядок 124) | 11 (e7s4 96, 741, 752; коментарі e7s1, e7s3, e7s6) | ✅ +1 |
| Emma, Oksana | вік не названо | 13 (e7s4 734, 741) | ✅ без суперечності |
| Oliver | однокласник Emma (e6s4) | однокласник Emma (e7s5, e7s6) | ✅ |

## Прогін
`node tools/validate.mjs --section e7s1…e7s7` — 0 помилок, 0 попереджень (після правки). Build, плейтест — не запускав (браузерні прогони — після build оркестратора).

## Правки
1. content/eng/g7-e7s4.js, e7s4l7 Task 6 `hint`: «Start with You aren’t. Then the adjective.» → «Start with You aren’t. Where does enough go: before or after the adjective?» (підказка видавала відповідь).

## Вердикт
Правки style-sync прийнято; після 1 виправлення відкритих ❌/⚠️ немає. Статуси `verified` e7s1–e7s7 лишаються. Людині: approved — вчитель; Taras і спорт у 4–5 кл. (NOTE style-sync) — куратору героїв; `why` e7s1 у plan.js — куратору плану.
