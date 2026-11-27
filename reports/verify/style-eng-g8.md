# Точкова повторна верифікація: style-eng-g8 (англійська, 8 кл.)

Верифікатор: verifier-style-eng-g8, 2026-11-26. Скіл content-verify. Обсяг: перелік reports/style/eng-g8.md §9 + `git diff 5e9f52b HEAD -- content/eng/g8-*.js` (5e9f52b «eng: e8s7 verified — 8 кл. повністю verified»; єдиний коміт між ними, що зачіпає g8, — 000af01 style-eng-g8). dge8 не перевірявся (інший верифікатор).

## Ключі й друга відповідь (diff)
Ключі змінено лише в e8s1l1 #9. В усіх `gaps` diff зачепив лише текст поза дужками (pen friend → penfriend, «school lunches»), `{*…}` не змінено. Інструкції («Complete the sentences.», «Write the missing word: …») ключів не зачіпають.

Перебір усіх упорядкованих підмножин плиток і пасток через `SLID_LANG.check(s, st, "en")` (app/lang.js; власний скрипт у scratchpad):
| build | answer | Прийнято рушієм | Вердикт |
|---|---|---|---|
| e8s1l1 #9 | I’m looking for a penfriend. | лише «I’m looking for a penfriend» | ✅ |
| e8s3l7 T6 | The players said they were tired. | лише це речення | ✅ |
| e8s4l7 T7 | Mariia, who plays the guitar, lives in Kharkiv. | лише це речення | ✅ |

## Перелік §9
| Місце | Розв'язав сам / опора | Вердикт |
|---|---|---|
| e8s1l1 #9 build «a penfriend» | Опора — екран 2 («I’m looking for a penfriend»); пастка «to» хибна; одна відповідь (перебір вище) | ✅ |
| e8s1 назви, значок, `info` l1 #2, `why` | penfriend однаково в 8 кл. (35 входжень e8s1, «pen friend» у g8 — 0) | ✅ |
| e8s1l1 #3 профіль Zofia | Mariia: drawing, comics, art, films. Zofia: draws comics, into art → відповідь Zofia; Noah — football/games, Leo — history/guitar: однозначно хибні. `hint`, `fbBad` не називають імені. Узгоджено з l2 (Zofia малює комікси з 10 років) | ✅ |
| e8s1l3 #3 `info` | Два речення ≤ 12 слів; правило «until now / has just stopped» відповідає OALD Grammar | ✅ |
| e8s1l7 intro | Неоцінюваний; клуб не «started» — узгоджено з 4–7 кл. і e8s2l1 | ✅ |
| e8s2l1 intro | Неоцінюваний; зміст той самий, коротший | ✅ |
| `why` e8s1, e8s2, e8s5 | Зразки фраз граматично правильні: «What have you been doing?», «I enjoy cycling, and I want to try climbing!», «When I got to the library, it had closed.» | ✅ |
| e8s6l3 #4 Andrii / Daryna | Ім'я на сумці → упевненість → must be (екран правила перед ним); can’t be — протилежне, «might Daryna’s» — без be. Andrii і Daryna в одній школі (газета Ms Lysenko, e8s3). «Her name» — Daryna дівчина (e8s8) | ✅ |
| e8s3l6 #8 «for school lunches» | Ключ told (told us); у школи Оксани немає canteen (e8s6l2) — суперечність знято | ✅ |
| e8s6l6 назва «…England…» | Текст порівнює школи Ukraine та England | ✅ |
| e8s3 «+ the third form» (11), requires + e7s7l2, e7s7l3 | Ключі не зачеплено; id існують (validate 0) | ✅ |

## 16 нових `hint` у фіналах
| Завдання | Hint | Чи видає відповідь | Вердикт |
|---|---|---|---|
| e8s2l7 T2 | Can you count sweets? Can you count cola? | Наводить на злічуваність, many/much не називає | ✅ |
| e8s2l7 T3 | Which verbs take -ing, and which take to? | Нагадує правило, жодної форми не дає | ✅ |
| e8s2l7 T6 | 24 members: 12 is half. What is 6? | Арифметична опора; «a quarter» учень виводить сам | ✅ |
| e8s3l7 T3 | Is it happening now, every day or in the past? | Час, а не форма; is repairing лишається пасткою | ✅ |
| e8s3l7 T5 | Said or told: which one needs a person after it? | Правило; місце помилки не вказує | ✅ |
| e8s3l7 T6 | Start with The players said. Then change we and are. | Плиток «are» немає, а з «we» / «they» лишається одна: «change we» прямо розв'язує єдиний вибір завдання (як ❌ e7s4l7 T6 у style-eng-g7) | ❌ → виправлено |
| e8s4l7 T3 | Is Olha a person or a thing? What comes after the gap? | Ключ — who/that, обидва в answer | ✅ |
| e8s4l7 T4 | Count the commas. Which words can we use with commas? | Не називає which | ✅ |
| e8s4l7 T7 | Start with Mariia. The extra information goes between the commas. | Плитки з комами вже на екрані; вибір who / that не розкрито | ✅ |
| e8s6l7 T3 | Is Andrii sure? Is it true or not true? | can’t vs mustn’t не розкрито | ✅ |
| e8s6l7 T6 | No uniform: is it a rule or the pupils’ choice? | Не вказує, яке слово хибне | ✅ |
| e8s8l7 T2 | Is the place inside the other place or outside it? | Правило, форми не дає | ✅ |
| e8s8l7 T5 | Compare 67 and 37 million. Is the difference big or small? | Міркування; «much bigger» не названо | ✅ |
| e8s8l7 T6 | Does Chloe live in Kyiv? Then which form comes after if? | Правило умовного, форми не дає | ✅ |
| e8s8l7 T9 | Compare the sizes of Canada and Ukraine. And which language does Maksym learn? | Не видає, але хибно наводить: very / much вирішує граматика (very не стоїть перед comparative), а не розмір; друга частина не допомагає з the | ⚠️ → виправлено |

Правки (мінімальні, лише `hint`):
1. content/eng/g8-e8s3.js, e8s3l7 T6: → «Start with The players said. You report their words: what changes?»
2. content/eng/g8-e8s8.js, e8s8l7 T9: → «Which word can go before a comparative like bigger? Do we use the before a language?» (термін comparative — у fbBad цього ж екрана й у e8s8l4).

## Словники й джерела (відкриті в цій сесії)
- https://dictionary.cambridge.org/dictionary/english/penfriend — «penfriend noun [ C ] uk … (also pen pal)»
- https://www.oxfordlearnersdictionaries.com/definition/english/pen-pal — «pen pal noun (especially North American English) ( British English also penfriend )»; стаття https://www.oxfordlearnersdictionaries.com/definition/english/penfriend існує (200)
- https://www.oxfordlearnersdictionaries.com/grammar/online-grammar/present-perfect-continuous — «started in the past and continues now or has only just stopped»

## Авторське право (нові фрагменти ≥ 12 слів)
| Фрагмент | Запит | Результат |
|---|---|---|
| e8s1l1 #3 Zofia | "I draw comics every week, and I'm into art" | збігів немає |
| e8s1l7 intro | "Oksana's class and Emma's class are writing to each other now" | збігів немає |
| e8s1l3 #3 | "Use have been + -ing for an activity until now. It can also be an activity that has just stopped" | дослівних збігів немає (лише загальні пояснення правила) |

## Герої 7 ↔ 8 кл.
| Герой | 7 кл. | 8 кл. | Вердикт |
|---|---|---|---|
| Oksana | 13 (e7s4 734) | 14 (e8s6 92) | ✅ +1 |
| Emma | 13 (e7s4 741) | 14 (e8s6 128) | ✅ |
| Tom | 11 (e7s4 96, 741) | 12 (e8s4 «Tom, who is twelve») | ✅ |
| Dmytro | 9 (e7s1 143, 576) | 10 (коментар e8s1) | ✅ |
| Oksana — Emma | «since they were ten» (e7s1 525) | «known … for four years» (e8s1 841) | ✅ 10 → 14 |
| Andrii, Mariia | — | 14 (e8s1 166, 46) | ✅ |
| Школа Оксани | без canteen (e8s6) | e8s3l6 тепер «school lunches»; canteen e8s3l7 T7 — шкільна стаття без прив'язки до Оксани | ✅ |

## Прогін
`node tools/validate.mjs --section e8s1…e8s8` — 0 помилок, 0 попереджень у кожному (після правок). Build, плейтест не запускав (після build оркестратора).

## Рекомендації (не блокують)
- content/eng/g9-e9s1.js рядок 266: «My pen friend Zofia» — одне «pen friend» у 9 кл. всупереч §1 п. 1 звіту style-sync; поза обсягом (g9 не чіпав) — рядок у inbox.

## Вердикт
Правки style-sync прийнято; після 2 виправлень `hint` відкритих ❌/⚠️ немає. Жоден ключ не зламано, другої правильної відповіді не з'явилося. Статуси `verified` e8s1–e8s8 лишаються. Людині: approved — вчитель; penfriend у glossary і 4 кл. — куратору (TERM в inbox від style-sync).
