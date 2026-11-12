# Верифікація: revise-hist-s3-cov (content/hist/g5-s3.js — s3l6, s3l7, h35)

Верифікатор: verifier-revise-hist-s3-cov, 2026-11-12. Скіл content-verify. Автора не бачив; розв'язував сам до перегляду `correct`.

## Межі змін (git diff 5365537..HEAD + робоче дерево)
- Змінено лише: credits (+2), нові уроки s3l6, s3l7, h35 (intro, `pre` у завданнях 1–5, нові завдання 6–7, learned +1, status).
- h31–h34 — без змін. Відповіді фіналу 1–5 (121; кнопки/кошики) — без змін.
- dgh5: теми `rights`, `check`, `cur-s3` (h34) не змінено. Єдина зміна в diag-g5.js — поле `for` (+g5s7) з іншої задачі (refine-hist-diag-g5-g6-cov), не цієї.
- Правило 12: жодного поля чи завдання, де дитина вводить дані про себе (лише choice/multi/sort про вигадані ситуації). ✅

## Факти
| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Конституція, ст. 28: «Кожен має право на повагу до його гідності» (дослівно) | https://ccu.gov.ua/sites/default/files/konstytuciya_ukrayiny_0.pdf (офіційний PDF КСУ, текстовий шар) ; https://uk.wikisource.org/wiki/Конституція_України | ✅ дослівно |
| Ст. 24: заборона привілеїв чи обмежень за ознаками раси, кольору шкіри, переконань, статі, походження, мовними… (у тексті — переказ, не цитата) | ті самі два | ✅ |
| ЗДПЛ ухвалена ООН 10.12.1948; ст. 1 «Всі люди народжуються вільними і рівними у своїй гідності та правах» (дослівно) | https://www.un.org/en/about-us/universal-declaration-of-human-rights ; https://npm.ombudsman.gov.ua/wp-content/uploads/2026/02/zagalna-deklaracziya-prav-lyudyny.pdf ; https://uk.wikisource.org/wiki/Загальна_декларація_прав_людини | ✅ |
| Е. Рузвельт — голова Комісії ООН з прав людини (1946–1951/52; фото листопада 1949 — у межах каденції) | https://erpapers.columbian.gwu.edu/node/1028 ; https://www.nps.gov/elro/learn/historyculture/udhr.htm ; https://fdr.blogs.archives.gov/2012/03/08/found-in-the-archives-27/ («the Commission's chair: Eleanor Roosevelt») ; https://en.wikipedia.org/wiki/Eleanor_Roosevelt | ✅ |
| Фото: ЗДПЛ іспанською, Lake Success, листопад 1949, FDR Library | https://commons.wikimedia.org/wiki/File:EleanorRooseveltHumanRights.png ; NARA NAID 195981 (catalog.archives.gov API: «useRestriction: Unrestricted», 1949-11) ; FDR blog (вище) | ✅ |
| 116 111 — з мобільного; анонімно (0 800 500 225 — з мобільного й стаціонарного; «безкоштовно» і графік не подано — правильно) | https://la-strada.org.ua/garyachi-liniyi ; https://www.unicef.org/ukraine/stories/hot-lines | ✅ (назву лінії виправлено — див. правки) |
| Булінг: повторюваність (систематичність); сторони — кривдник, потерпілий, спостерігачі; буває онлайн; сварка ≠ булінг | https://legalaid.wiki/index.php/Протидія_булінгу_в_дитячому_середовищі ; https://www.hsa.org.ua/blog/iak-rozpiznati-buling-v-zakladi-osviti-kliucovi-oznaki-i-xarakterni-proiavi-ckuvannia | ✅ |
| Мова ворожнечі — висловлювання, що принижують людину через особисті ознаки (мова, релігія, стать…) | CM/Rec(2022)16, п. 2 — https://www.inach.net/wp-content/uploads/PTT-Rec-Combating-Hate-Speech-for-INACH-20-Annaversary-3.11.2022-2776-4074-8550.1.pptx-1.pdf ; https://uk.wikipedia.org/wiki/Мова_ворожнечі | ✅ (спрощення для 5 кл.) |
| Moon Hoax: серпень 1835 (з 25.08), нью-йоркська «The Sun», Гершель (мис Доброї Надії), посилання на «Edinburgh Journal of Science», єдинороги, бізони, крилаті люди | https://en.wikipedia.org/wiki/Great_Moon_Hoax ; https://www.history.com/this-day-in-history/august-25/the-great-moon-hoax ; https://hoaxes.org/archive/permalink/the_great_moon_hoax | ✅ |
| Журнал «вже кілька років не виходив» | hoaxes.org: припинився 1833 (≈2 роки); history.com: «years earlier» | ⚠️ → виправлено на «вже не виходив» |
| «16 вересня 1835 р. газета сама визнала, що статті вигадані» (fbText s3l7 е4) | en.wiki і history.com — так; hoaxes.org цитує саму «The Sun» 16.09.1835: «…confess the whole to be a hoax; but this we can by no means do» — відмова | ❌ суперечливо → прибрано, замінено на «Згодом стало відомо: усе це вигадка» |
| Літографія «Lunar animals and other objects…», 1835, Benjamin H. Day, LoC LCCN 2003665049, PD (до 1931) | https://commons.wikimedia.org/wiki/File:Great_Moon_Hoax_-_Day_4.jpg ; en.wiki Great_Moon_Hoax (літографія в «The Sun») ; loc.gov — 403 | ✅ |
| Львів 1356, рід → громада, Конвенція 1989 | facts/hist №27, №347; h31, h32 | ✅ (реєстр) |

## Зображення (D-027)
- `img/hist/s3/udhr-1949.jpg` — переглянув: Е. Рузвельт з плакатом «Declaración Universal de Derechos del Hombre». PD (NARA Unrestricted; Commons PD-USGov). ✅
- `img/hist/s3/moon-hoax-1835.jpg` — переглянув: правий фрагмент (водоспад, єдинороги, бізони, птахи; крилаті фігурки вгорі ліворуч дрібні, без деталей). Оголених фігур не видно. PD. ✅ `cap` і `credits` є.

## Завдання (розв'язано самостійно)
| Завдання | Моя відповідь = correct | Опора | Вердикт |
|---|---|---|---|
| s3l6 е2 (hyp) | 1 | здогадка | ✅ |
| s3l6 е4 sort | 0,1,0,1,0 | е3 (гідність, дискримінація, листування) | ✅ |
| s3l6 е6 choice | 2 | е5 (повторюється) | ✅ |
| s3l6 е7 multi | [0,2,3] | е5 абз. 3 | ✅ |
| s3l6 е9 choice | 1 | е8 «Кому сказати», «не ябедництво» | ✅ |
| s3l6 е10 choice | 0 | е5 + е8 (спостерігач) | ✅ |
| s3l7 е2 (hyp) | 0 | здогадка | ✅ |
| s3l7 е4 multi | [0,2,3] | е3 сигнали + факти в тілі е4 | ✅ (hint переписано) |
| s3l7 е5 sort | 0,1,0,1 | е3 + міркування | ✅ (hint переписано) |
| s3l7 е7 sort | 0,1,0,1 | е6; h31, h32, s3l6 е1 | ❌ було: «Київ… (кінець XV ст.)» як «подія» при hint «Чи можна назвати один рік?» — пастка; → «ООН ухвалила Конвенцію про права дитини (1989 р.)» (h32) |
| s3l7 е8 choice | 1 | е3 | ✅ |
| h35 з. 1–5 | 121; 1-ше…; без змін | h34, h32, h33 | ✅ (не змінено) |
| h35 з. 6 multi | [0,2] | s3l6 е3, е5 | ✅ |
| h35 з. 7 choice | 2 | s3l7 е3 | ✅ |

Позиції правильних різні (s3l6: 1, 2, 1, 0; s3l7: 0, 1; boss 6–7: [0,2], 2). Підказки не відкидають усіх хибних варіантів (після правок).

## Терміни (style/hist.md: 5 кл. ≤ 3)
s3l6 — гідність, дискримінація, булінг (жирні, у learned). «Мова ворожнечі» — пасивно: не жирна, не в learned. ✅
s3l7 — дезінформація, маніпуляція, процес. ✅

## Правки (зроблено, 10)
1. s3l6 е8: «Національна дитяча «гаряча» лінія» → «Національна гаряча лінія для дітей та молоді» (назва на la-strada.org.ua).
2. s3l7 е4 body: «вже кілька років не виходив» → «вже не виходив».
3. s3l7 е4 fbText: прибрано «16 вересня 1835 р. газета сама визнала…» → «Згодом стало відомо: усе це вигадка».
4. s3l7 е4 hint: не перелічує рівно три правильні сигнали → «Що з'ясувалося про джерело й ученого?».
5. s3l7 е5 hint: не цитує слова з карток («шок», «терміново») → «Чи відомо, хто й коли це написав? Чи тисне повідомлення на почуття?».
6. s3l7 е7: картку Києва (кін. XV ст.) замінено на Конвенцію 1989 р. (h32).
7. s3l7 е7 fbText: «Ухвалення документа чи отримання права» → «Ухвалення документів».
8–10. h35 милозвучність: «голосування й перевірку» → «та перевірку»; «приниження й обмеження» → «та обмеження»; «Які з цих» → «Які із цих».
11. Статуси s3l6, s3l7, h35 → verified; коментар у шапці файлу.

## Прогони
- `node tools/validate.mjs --section s3` — 0/0; `--diag dgh5` — 0/0.
- `node tools/euphony.mjs --subject hist --section s3` — у s3l6, s3l7 і нових завданнях h35 відхилень 0; лишились старі зауваги h31–h35 (з. 3, 4), не цієї задачі.
- `node tools/stats.mjs --subject hist` — s3l6 0.5, s3l7 0.5, h35 0.88, прапорців немає.
- Плейтест не запускав (Python-playwright у контейнері немає) — CI job browser.

## Вердикт
s3l6 ✅ verified · s3l7 ✅ verified (після правок) · h35 ✅ verified. Розділ придатний; задача → done.

Рекомендації (людині, не блокує): build — нові файли img/hist/s3/*.jpg (оркестратор).
