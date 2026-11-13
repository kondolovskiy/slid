# Верифікація refine-hist-g6s8-cov — g6s8-l4 «Хліба й видовищ»

Верифікатор: verifier-refine-hist-g6s8-cov, 2026-11-12. Скіл content-verify. Автора не бачив.
Обсяг: `content/hist/g6-g6s8.js` — лише g6s8-l4: е5 (+ речення про туніку), новий е9 «Хто живе під дахом?», outro, learned; credits + `img/hist/g6s8/ostia-insula.jpg`.

## Межі змін (git)
`git diff 5365537 HEAD -- content/hist/g6-g6s8.js` має 6 фрагментів: заголовний коментар, credits, статус l4, е5, е9 (новий), outro/learned. g6s8-l3 (рядки 324–460, на нього спирається dgh6) та решта екранів l4 **не змінено**. Нових id немає, фінал l7 не змінено.

## 1. Факти
| # | Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|---|
| 1 | Заможні мали власний будинок із двориком; більшість жителів Риму жила в інсулах | https://en.wikipedia.org/wiki/Insula_(building) («Insulae housed most of the urban citizen population») ; https://www.romansinfocus.com/sites/www.romansinfocus.com/files/insulae%20transcript.pdf (Warwick, д-р Е. Хуссейн: «only the top 3%… domus»; «They lived primarily in apartment buildings called insulae») | ✅ |
| 2 | Житло винаймали; угорі — найдешевше, для найбідніших | en.wiki Insula («uppermost floors… the cheapest to rent») ; Warwick («those living at the top, would've been the poorest») | ✅ |
| 3 | Унизу інсул — крамниці | en.wiki Insula («ground-level floor… tabernae, shops») ; https://www.historyhit.com/how-similar-was-life-in-ancient-rome-to-modern-cities/ («The ground floor of these were often shops») | ✅ |
| 4 | Кухні мали не всі → готову їжу купували в харчевнях | https://en.wikipedia.org/wiki/Thermopolium («mainly used by those who did not have their own kitchens… often inhabitants of insulae») ; HistoryHit (бідні в інсулах «did not have their own kitchens», термополій — їжа на ходу). en.wiki Insula: великі інсули Остії могли мати кухні нагорі → формулювання «не всі» / «часто» коректне | ✅ |
| 5 | Прості люди їли кашу, хліб, горох, овочі; м'ясо — розкіш | https://en.wikipedia.org/wiki/Ancient_Roman_cuisine (puls; «darkest bread for the poor»; dried peas; «Butcher's meat was an uncommon luxury») ; https://www.historyhit.com/what-did-the-romans-eat-food-and-drink-in-ancient-times/ («staple porridge… puls… vegetables»; «Dried peas were a mainstay of poorer diets»; «any farmed meat was a luxury») | ✅ |
| 6 | Під тогою носили туніку — просту сорочку | https://en.wikipedia.org/wiki/Toga («worn over a tunic») ; https://www.historyhit.com/togas-and-tunics-what-did-ancient-romans-wear/ («The basic garment for both men and women was the tunicas») | ✅ |
| 7 | `cap`: Остія — портове місто Стародавнього Риму; на фото — вулиця, цегляні будинки на кілька поверхів | Warwick («here in Ostia, the harbour town of Rome») ; https://commons.wikimedia.org/wiki/File:Ostia_Antica-strada01-modified.jpg («An insula… Ostia Antica», категорія Via di Diana) ; фото переглянуто: вулиця, цегляні стіни з арками, рештки 2–3 поверхів | ✅ |

Ліцензія фото: CC BY 2.0 (Commons, Flickr review 21.04.2007), автор iessi (Flickr), 08.10.2006; версія «-modified» ретушована на Commons (прибрано людей). CC BY вимагає вказати зміни → у credits додано «ретушовано на Вікісховищі (прибрано людей)». Дату «early 2nd c. AD» (одне джерело) у `cap` не взято — правильно.

## 2–4. Завдання l4 (розв'язано без `correct`)
| Екран | Моя відповідь | `correct` | Звідки відповідь (D-019) | Вердикт |
|---|---|---|---|---|
| е2 hyp | — | hyp | здогадка, не оцінюється | ✅ (не змінено) |
| е4 келих | 2 | 2 | сам екран (імена на посуді) | ✅ (не змінено) |
| е6 форум | 0 | 0 | е5 + урок 1 | ✅ (не змінено) |
| е7 терми | 0 | 0 | body екрана + міркування | ✅ (не змінено) |
| е8 Боскореале | 1 | 1 | body (попіл 79 р.) | ✅ (не змінено) |
| **е9 Луцій під дахом** | 2 | 2 | body е9: «угорі — найдешевше житло для найбідніших» відкидає в. 0; «м'ясо було розкішшю» + бідність відкидає в. 1 (і власна кухня в бідняка під дахом малоймовірна); «кухні мали не всі, тож готову їжу купували в харчевнях» прямо підтримує в. 2. Формулювання «найімовірніше» знімає вимогу універсальності — двозначності немає | ✅ |
| е10 sort | форум 0,0; терми 1,1; Колізей 2 | збігається | е3, е5, е7 | ✅ (не змінено) |

Опора «кухні мали не всі» достатня: учень не мусить знати, що саме в мансардах не було кухонь, — правильний варіант єдиний, що не суперечить body, а обидва хибні суперечать йому прямо. Hint «для кого було житло вгорі» відкидає в. 0 прямо, в. 1 — лише через ще один крок (м'ясо — розкіш / кухня), тож не видає відповідь. fbText не вводить нових фактів (лише «часто», узгоджене з джерелами). `cap` відповіді не видає.
Позиції правильних в l4: 2, 0, 0, 1, 2 — не однакові, поспіль не повторюються.

## 5. Педагогіка й вік
Е9 — застосування після теорії в тому ж body (info+питання), без лякаючого змісту. Нові терміни: інсула, туніка (≤ 3). Learned «Порівнювати житло та їжу заможних і бідних римлян» має опору в е9. Outro узгоджене.

## 6. Прогін
- `node tools/validate.mjs --section g6s8` — 0 помилок, 0 попереджень (після правок).
- `node tools/validate.mjs --diag dgh6` — 0 / 0.
- `node tools/stats.mjs --subject hist` — g6s8-l4: 10 екранів, частка завдань 0.6, maxReadWords 60, без прапорців.
- `node tools/euphony.mjs --subject hist --section g6s8` — у новому тексті було 1 відхилення (learned «житло й їжу», правило з позначкою validate) → виправлено; решта відхилень у l4 (екрани 4, 7, `why`) — давні, у незмінених рядках, не чіпав.
- playtest — не запускався (Python-playwright у контейнері відсутній; CI job `browser`).

## 7. Правки (зроблені, 3)
1. outro: «а жили більшість із них» → «а жила більшість із них» (узгодження з «більшість», як і в е9 «більшість… винаймала»).
2. learned: «житло й їжу» → «житло та їжу» (милозвучність, й перед ї).
3. credits фото: додано «ретушовано на Вікісховищі (прибрано людей)» (вимога CC BY позначати зміни).
Також: g6s8-l4 → `status: "verified"`, заголовний коментар оновлено.

Рекомендовано (не блокує): давні відхилення euphony l4 е4 «з самого» → «із самого», е7 «помитися й поговорити» — на розсуд style-sync.

## Вердикт
**g6s8-l4 — verified.** Інші уроки розділу не змінювалися, лишаються verified. Нічого для людини, крім звичайного `approved`.
