# Верифікація: revise-hist-g6s7-cov (g6s7: новий урок g6s7l8, фінал g6s7-l7, eyebrow g6s7-l6)

Верифікатор: verifier-revise-hist-g6s7-cov, 2026-11-12. Скіл `content-verify`. Автора не бачив; усі джерела нижче відкрито в цій сесії.

## Обсяг і diff
- `git diff 5365537 HEAD -- content/hist/g6-g6s7.js` (5365537 — стан до задачі; чернетку й остаточні правки автора закомітили чужі коміти cae0bb9 / 9e21b6e / fea77f0, jpg — 5f5ec14). Змінено:
  - новий урок `g6s7l8` між l5 і l6; 2 рядки `credits`;
  - `g6s7-l6`: **лише** eyebrow «Урок 6» → «Урок 7» (статус verified лишаю: зміна косметична, зміст не зачеплено);
  - `g6s7-l7`: `pre` у 7 завданнях, нове Завдання 6, Олександр → Завдання 7 (fbBad «Згадай урок 7»), fbText Завдання 2 «й» → «та». Решту завдань, ключі й відповіді не змінено.
- dgh6: єдине посилання на розділ — тема `g6-demo` → `g6s7-l3`; l3 не змінено. `validate --diag dgh6` — 0/0.
- Узгодження з g6s10 (verified): школу (троє вчителів, «педагог») вчить g6s10l4, тут — одне речення про дівчат і хлопців. Еллінізм не додано. Дублю немає.

## Факти
| Твердження (екран) | Джерела, відкриті в сесії | Вердикт |
|---|---|---|
| Будинки з цегли, сушеної на сонці (не випаленої); кімнати навколо внутрішнього двору; на вулицю — мало отворів (ек. 5) | https://en.wikipedia.org/wiki/Ancient_Greek_architecture (sun-dried clay brick, inward-facing houses, courtyard) ; https://www.historyhit.com/what-were-houses-like-in-ancient-greece/ (mud bricks, central courtyard, small high windows) | ✅ |
| Злодій — «той, хто прокопує стіну» (τοιχωρύχος), бо цегляні стіни (ек. 5) | LSJ: https://atlas.perseus.tufts.edu/dictionaries/entry/urn:cite2:scaife-viewer:dictionaries.v1:lsj-n104200 («one who digs through the wall», burglar) ; Olson, FrC 8.2: https://digi.hadw-bw.de/view/frc8_2/0339 (wall-digger → burglar, бо mud-brick) | ✅ |
| Їжа: ячмінь (каша, хліб), пшеничний хліб, оливки, сир, овочі, фіги, олія; вино з водою, нерозведене — небезпечне; м'ясо рідко, переважно на святах-жертвоприношеннях (ек. 6) | https://en.wikipedia.org/wiki/Ancient_Greek_cuisine ; https://www.historyhit.com/what-did-the-ancient-greeks-eat-and-drink/ | ✅ |
| Хітон — сорочка з полотна, скріплена на плечах; гіматій — вовняний плащ поверх (ек. 3) | https://en.wikipedia.org/wiki/Clothing_in_ancient_Greece ; https://www.historyskills.com/classroom/ancient-history/ancient-greek-clothing | ✅ |
| Одяг пряли й ткали вдома господиня, дочки, рабині; дівчата вчилися цього вдома, до школи не ходили; хлопці — до вчителів (ек. 3) | https://en.wikipedia.org/wiki/Education_in_ancient_Greece ; Muller, ANU: https://press-files.anu.edu.au/downloads/press/n1672/pdf/ch04.pdf («In the home, girls learned to work wool and to weave»; дружина наглядає за рабинями, що тчуть, Xen. Oec. 7.20–23) ; https://en.wikipedia.org/wiki/Slavery_in_ancient_Greece (female slaves — textile making) | ✅ |
| Раб — власність господаря, його могли продати або відпустити (ек. 8) | https://en.wikipedia.org/wiki/Slavery_in_ancient_Greece ; https://www.historyskills.com/classroom/ancient-history/ancient-greek-slavery | ✅ |
| Джерела рабів: полонені, жертви піратів, діти рабів; багато — з-поза Греції, зокрема з Причорномор'я (ек. 8, фінал З6) | Wikipedia (війна, піратство, торгівля; Тракія, Скіфія, ринки Візантій, Танаїс) ; historyskills (війна, пірати біля Чорного моря, статус дитини за матір'ю) ; https://fhw.gr/chronos/05/en/economy/220slavemarket.html (Тракія, Пафлагонія; полонені 376 р.) | ✅ |
| Праця рабів: дім, майстерні, поля, срібні копальні (Лавріон) (ек. 8) | Wikipedia ; https://fhw.gr/chronos/05/en/economy/220slavemarket.html («in the fields, in workshops, and in the silver mines at Laurion») | ✅ |
| Солон заборонив продаж афінян за борги, 594 р. до н. е. (ек. 8, 10, фінал З6) | facts/hist-2 №328 (verified) ; Wikipedia (seisachtheia) ; historyskills («Before 594 BCE… Solon's reforms ended this») | ✅ |
| Чужинці в Афінах — вільні, без права голосу (фінал З6 fbText) | урок l3 ек. 3; Wikipedia (metics: free, without citizen rights) ; historyskills (metics without political rights) | ✅ |

## Зображення
| Файл | Перевірка | Вердикт |
|---|---|---|
| `lekythos-loom.jpg`, `lekythos-spinning.jpg` | Met API https://collectionapi.metmuseum.org/public/collection/v1/objects/253348 : 31.11.10, Amasis Painter, ca. 550–530 BCE, Greek, Attic, `isPublicDomain: true` (CC0). Опис сцен — AMICA https://amica.davidrumsey.com/amico196588-105574.html (дві жінки біля вертикального верстата; чотири прядуть; готову тканину складають). Переглянув файли: на першому — верстат із тягарцями й дві ткалі; на другому — праворуч прядіння (кужіль, веретено, кошик вовни), ліворуч дві жінки складають тканину, поруч табурет зі складеним полотном. `cap` точний. | ✅ (дрібна правка `cap`: «Афіни» → «Аттика», як у музею) |
| `stele-servant.jpg` | Met API https://collectionapi.metmuseum.org/public/collection/v1/objects/253505 : 36.11.1, «Marble grave stele of a young woman and servant», Attic, ca. 400–390 BCE, `isPublicDomain: true`. Друге джерело (через пошук) — опис Met: дівчинка тримає скриньку для прикрас, «можливо молодша сестра або рабиня». Переглянув: дівчинка тримає скриньку, напису на видимій частині немає. Формулювання завдання «а чи рабиня — невідомо» відповідає музейному тлумаченню. | ✅ |
Сторінки metmuseum.org через WebFetch — 429 (відома пастка), тому опис — з API, AMICA і результатів пошуку.

## Завдання (розв'язав сам до перегляду ключів)
| Екран | Моя відповідь | Ключ | Звідки відповідь (D-019) | Вердикт |
|---|---|---|---|---|
| l8 ек. 2 (hyp) | — | без оцінки | здогадка, відповідь на ек. 3 | ✅ |
| l8 ек. 4 order | пряди → тчи → зніми → носи | так | ек. 3 + причинова логіка, видно на фото | ✅ |
| l8 ек. 5 choice | «Глиняну стіну можна було продовбати» (1) | 1 | текст самого екрана | ✅ |
| l8 ек. 7 multi | каша з олією, хліб-сир-оливки [1,3] | [1,3] | ек. 6 | ✅ |
| l8 ек. 9 choice | «подає скриньку, а чи рабиня — невідомо» (2) | 2 | фото + міркування; ек. 8. `cap` відповіді не видає | ✅ |
| l8 ек. 10 multi | [1,2,4] | [1,2,4] | ек. 3, 5, 6, 8 | ✅ після правки fbBad |
| l7 З6 choice | «Купували полонених…» (2) | 2 | l8 ек. 8; «всі чужинці» відкидає l3 ек. 3 (чужинці й раби — окремо) і слово «всі» | ✅ |
| l7 З1–З5, З7 | не змінені (лише `pre`) | — | як у reports/verify/g6s7.md | ✅ |
Позиції правильних: у l8 choice — 1, 2; multi — [1,3], [1,2,4]. Фінал choice — 2, 1, 2, 0 (4 choice на 3 варіанти, повтор неминучий, З1 і З6 не сусідні).

## Правки (зроблені)
1. l8 ек. 10, `fbBad`: «Перевір рядки про м'ясо й борги.» → «Звір кожен рядок з екранами уроку.» — стара підказка перед повторною спробою називала обидва хибні рядки з п'яти, тож друга спроба ставала механічною.
2. l8 ек. 1, `cap`: «Афіни» → «Аттика» (Met: Greek, Attic).
3. Статуси `g6s7l8` і `g6s7-l7` → `verified`; коментар-шапку оновлено.

## Педагогіка, стиль
- Проблема (розпис) → здогадка → теорія → застосування; є `src` і `crit`; 5 з 10 екранів оцінювані, 4 типи, 1 hint. Нових термінів 3 (хітон, гіматій, раб) — норма 5–6 кл.
- Рабство й становище жінок — нейтрально, без оцінних слів і насильства.
- stats: g6s7l8 — 10 екранів, 0.5 завдань, maxRead 60, прапорців немає; g6s7-l7 — без прапорців.
- `validate --section g6s7` — 0/0; `validate --diag dgh6` — 0/0; `euphony --section g6s7` — 0 знахідок у g6s7l8 і g6s7-l7 (старі знахідки в l2, l4, l5 — поза задачею).
- playtest: Python-модуля playwright у контейнері немає — прогін за CI (job `browser`).

## Вердикт
- **g6s7l8 — verified.** **g6s7-l7 — verified.** g6s7-l6 — verified (лише eyebrow). Решта уроків не змінювались.
- Задача → done. Людині: нічого блокувального; `approved` — за вчителем.
