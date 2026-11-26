# Верифікація e9s3 «Fashion and clothes» (eng, 9 кл.)

verifier-e9s3, 2026-11-26. Скіл content-verify (розділ «Англійська»). Файл: content/eng/g9-e9s3.js. Задача: tasks/review/write-eng-g9-e9s3.md.

**Вердикт:** усі 7 уроків (e9s3l1–l7) — `verified`. Зроблено 2 правки (обидві в l6). Відкритих ❌ і ⚠️ немає. Людині: плейтест у браузері (у контейнері немає Python-модуля playwright, тож він лише в CI).

## 1. Факти
| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| «Vyshyvanka Day is in May» (l1 info «Never out of fashion») | en.wikipedia: «It is celebrated the third Thursday of May» (наступна дата — 21 May 2026) — https://en.wikipedia.org/wiki/Vyshyvanka_Day; Ukrinform (видача WebSearch): «the third Thursday of May, when Ukraine traditionally celebrates Vyshyvanka Day… not an official holiday» — https://www.ukrinform.net/rubric-society/3864324-ukraine-celebrates-vyshyvanka-day.html, https://www.ukrinform.net/rubric-society/3993135-ukraine-celebrating-vyshyvanka-day-today.html; uk.wikipedia: «Дата проведення — щороку в третій четвер травня» — https://uk.wikipedia.org/wiki/Всесвітній_день_вишиванки | ✅ («in May» правильно; третій четвер у тексті не подано, і це не помилка) |
| Вишиванка — «a Ukrainian embroidered shirt» | ті самі джерела (en/uk.wikipedia, Ukrinform: «a day dedicated to the traditional embroidered shirt») | ✅ |
| Історії героїв (фото 1983, вишиванка 1981, фото мами Emma 1995, clothes swap 12 December) | вигадка; дат реальних подій немає | ✅ |

WebFetch не відкрив сторінок ukrinform.net, kpi.ua і lrv.lt (ENOTFOUND, домени поза дозволеними для сесії), тож Ukrinform я бачив лише у видачі WebSearch.

## 2. Форми й норма (словники)
| Форма | Джерело, дослівно | Вердикт |
|---|---|---|
| order: opinion → size → … age → colour → … material | CD Grammar: «1 opinion… 2 size… 5 age… 6 colour… 7 origin 8 material» — https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order | ✅ (урок бере підмножину в тому самому порядку) |
| so + adj, such + noun phrase; «a so…» — ні | CD: «We use such + noun phrase and so + adjective… Not: This is a so wonderful kitchen!» — https://dictionary.cambridge.org/grammar/british-grammar/such-or-so; «It was so dark (that)…», «We don’t use so before an adjective + a noun» — https://dictionary.cambridge.org/grammar/british-grammar/so | ✅ |
| as if = as though; like + clause informal | CD: «As if is more common than as though»; «In informal English, like can be used in a similar way to as if» — https://dictionary.cambridge.org/grammar/british-grammar/as-if-as-though-and-like; «look like + noun phrase… look as if/as though + clause» — https://dictionary.cambridge.org/grammar/british-grammar/look | ✅ (у файлі like + речення ніде не хибний варіант) |
| hoodie (also hoody) | CD: «informal (also hoody)… a sweatshirt… that has a hood» — https://dictionary.cambridge.org/dictionary/english/hoodie; Wiktionary: «{{alt|en|hoody}}» — https://en.wiktionary.org/wiki/hoodie | ✅ (ключ l2 #8 з sweatshirt виправданий) |
| jumper (BrE) | CD: «jumper noun [C] uk» — https://dictionary.cambridge.org/dictionary/english/jumper; OALD jumper_1: «(British English) a piece of clothing for the upper part of the body…» — https://www.oxfordlearnersdictionaries.com/definition/english/jumper_1 | ✅ |
| trainers (BrE; AmE sneakers) | CD: «UK (UK also training shoe); (US sneaker)» — https://dictionary.cambridge.org/dictionary/english/trainer; OALD: «(both British English) (North American English sneaker, gym shoe)» — https://www.oxfordlearnersdictionaries.com/definition/english/trainer | ✅ |
| woollen | CD: «UK (US usually woolen)» — https://dictionary.cambridge.org/dictionary/english/woollen; OALD woollen_1: «(British English) (North American English woolen)» | ✅ |
| tracksuit | CD: «tracksuit noun [C] UK» — https://dictionary.cambridge.org/dictionary/english/tracksuit; OALD https://www.oxfordlearnersdictionaries.com/definition/english/tracksuit | ✅ |
| in / out of fashion; old-fashioned «not modern» | CD: «Long hair is back in fashion», «Fur coats have gone out of fashion» — https://dictionary.cambridge.org/dictionary/english/fashion; CD old-fashioned «B1 not modern» — https://dictionary.cambridge.org/dictionary/english/old-fashioned; OALD «not modern; no longer fashionable» — https://www.oxfordlearnersdictionaries.com/definition/english/old-fashioned | ✅ |
| наголос: <u>fash</u>ion(able), em<u>broi</u>dered, second-<u>hand</u> | CD /ˈfæʃ.ən.ə.bəl/, /ɪmˈbrɔɪ.dər/ (https://dictionary.cambridge.org/dictionary/english/embroidered), /ˌsek.əndˈhænd/ (https://dictionary.cambridge.org/dictionary/english/second-hand); OALD /ˈfæʃnəbl/, /ɪmˈbrɔɪdə(r)/ | ✅ |
| checked, spotted, baggy, sweatshirt, lost property (UK) | CD checked «pattern of squares»; spotted «a regular pattern of small dots (= small round marks)»; baggy «hanging loosely»; sweatshirt «usually made of thick cotton»; lost property «noun [U] UK» — https://dictionary.cambridge.org/dictionary/english/{checked,spotted,baggy,sweatshirt,lost-property}; OALD spotted «a pattern» | ✅ |
| partly (нова правка) | CD «B1 to some degree, but not completely» — https://dictionary.cambridge.org/dictionary/english/partly | ✅ рівень 9 кл. |

BrE: AmE-правопису й лексики немає (sneakers / pants — лише як довідка в l2); є trousers, at the weekend, PE, penfriend, favourite, 12 December. IPA немає, аудіювання не імітується, літер A/B/C і позиційних посилань немає.

## 3–4. Завдання: моє розв'язання і опора (D-019)
Кожне завдання я розв'язав до того, як подивився в `correct` / `answer`; мої відповіді збіглися з ключем скрізь, крім l6 word (нижче). Hyp-екрани (`hyp: true`) перед теорією: l1 #2, l2 #2, l3 #2, l4 #2, l5 #2, l6 #2 — ✅.

| Завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 match, gaps ×2, word «in» | info «Fashion words» (#3) + контекст (lots of / nobody / not modern) | ✅ |
| l1 choice вишиванка | сам текст («never out of fashion») | ✅ |
| l1 stress | підкреслення в info #3, #6 | ✅ |
| l2 match, sort, gaps ×2, word | info «Everyday clothes», «Patterns and fit» | ✅ (match: друге доречне зіставлення я шукав для кожного лівого й не знайшов) |
| l2 build | обидва порядки в answer; «a baggy jumper and striped jeans» граматичне, але його відсікає body (лінії на светрі, дуже великі джинси) | ✅ |
| l3 match, choice, gaps ×2, build, pick, word «old» | info «What is it made of?», «Size, colour, material», «Opinion and age»; у word body питає саме про вік, «an» відкидає new | ✅ |
| l4 match, choice, gaps ×3, pick, build | info «So + adjective + that», «Such (a)…», «Too, enough and so»; too … that, so … to, so + a + noun — однозначно хибні | ✅ |
| l5 gaps ×3, choice, pick, word (if/though), build | info «As if, as though», «Look, look like, look as if» | ✅ |
| l6 choice ×2 (читання) | сам текст | ✅ |
| l6 sort agree / don’t agree | info «Giving your opinion» | ❌ → виправлено (п. 1 нижче) |
| l6 gaps, build, word | info «Giving your opinion»; текст ч. 1–2 | word ❌ → виправлено (п. 2); решта ✅ |
| l6 Final gaps | текст (Daryna — second-hand), l4 (such a), info l6 | ✅ |
| l7 T1–T8 (boss) | l1–l6 (`pre` правильні); у T8 body сам каже «doesn’t agree, but… polite», тож ключ однозначний | ✅ |

Поза ключем у build через нормалізацію рушія (app/lang.js `buildOk`: зібране речення порівнюється лише з `answer`) правильних порядків я не знайшов. Розглянув ще й такі:
- l4 #11: «It was so warm a jumper that…». Тут береться пастка «so», а плитка «such» лишається невикористаною; конструкція книжна, рівень вище B1. Не ❌.
- l4 #11, l6 #9 (`keepCase`): питальні порядки відсікає саме `keepCase`.

## 5. Педагогіка й вік
Кожен урок починається з проблеми; теорія йде після здогадки, «чому» пояснено; підказки відповіді не видають. Оцінок тіла й зовнішності немає: «What a big jumper!», «You look smart!» — про одяг. Брендів немає. l6 вчить говорити про ідею, а не про людину. Пояснення в межах ≤ 12 слів на речення (6–9 кл.), нових термінів ≤ 2 на урок. Діалоги подано репліками в body, без типу `dialog` (D-056) ✅.

## Авторське право (≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «My old trainers were so comfortable that I wore them for three years» | точного збігу немає |
| «Very cheap clothes often don’t last long. In my opinion, it’s better to buy less» | точного збігу немає |
| «It’s a long black woollen coat with big pockets» | точного збігу немає (лише картки товарів) |
✅

## 7. Правки (зроблені)
1. **l6 sort (двозначність).** «That’s true, but…» буквально означає згоду з фактом. Тож репліка «That’s true, but nobody has to take anything» у кошику «don’t agree» двозначна (Бохдан погоджується, що декому це неприємно), і «Maybe you’re right, but…» так само. Тому зроблено три кошики: agree / partly agree / don’t agree; обидві фрази тепер у «partly agree». Info «Giving your opinion» тепер каже: «you partly agree, but you’ve got a different idea → That’s true, but … / Maybe you’re right, but … It’s a polite way to disagree.» Під це оновлено body, hint і fbText сорту. Boss T8 («doesn’t agree, but… polite») узгоджується з цим без змін.
2. **l6 word «Zoriana ___ with Kyrylo.»** Часу ніщо не задає, тож «agreed» — друга правильна відповідь. Тепер `answer: ["agrees", "agreed"]`, а fbText додає «Agreed is correct too.»
3. Статус 7 уроків `verified`; `meta.factcheck` заповнено.

## Рекомендації (не блокують)
- stats: e9s3l1 longWordShare z = 2.7 («нетипово для сім'ї»). Довгі слова — тема уроку (fashionable, old-fashioned, embroidered, vyshyvanka), і показник у межах профілю 7–9 кл. Виправляти не треба.

## Прогін
- `node tools/validate.mjs --section e9s3` — 0 помилок, 0 попереджень (після правок).
- `node tools/stats.mjs --subject eng` — лише рядок про l1, вище.
- `python3 tools/playtest.py --section e9s3` у контейнері не запускався (`ModuleNotFoundError: playwright`), лишається для CI (job browser).
