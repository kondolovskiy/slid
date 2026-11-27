# Верифікація e7s2 «In the kitchen: cooking and laying the table» (eng, 7 кл.)

Верифікатор: verifier-e7s2, 2026-11-25. Скіл content-verify (+ розділ «Англійська»). Файл: `content/eng/g7-e7s2.js`.
Прогін: `validate --section e7s2` — 0 помилок, 0 попереджень (до і після правок); `stats --subject eng` — у e7s2 прапорців «нетипово для сім'ї» немає. Плейтест не запускався: у контейнері немає Python-модуля playwright (AGENTS.md §3) — лише CI.

**Вердикт: усі 7 уроків → `verified`.** Правок у змісті — 4 (усі — друга правильна відповідь), плюс статус і meta.factcheck. Людині — лише необов'язкове (нижче).

## 1. Факти й форми

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Paska — солодкий великодній хліб; в Україні багато родин печуть паску на Великдень (l2) | https://en.wikipedia.org/wiki/Paska_(bread) («traditional Ukrainian Easter bread», infobox «Sweet bread»); WebSearch з allowed_domains kyivpost.com / kyivindependent.com / ukraine.ua: «mildly sweet bread made from milk, butter, eggs, flour, yeast, and sugar», «Families typically bake it in the days before Easter», Kyiv Post 2016 (Klitschko: «my mother bakes Easter bread») — https://archive.kyivpost.com/lifestyle/how-ukraines-famous-will-celebrate-easter-412907.html, https://ukraine.ua/news/ukrainian-easter-cake/. Напряму (WebFetch) kyivpost / ukraine.ua / kyivindependent не відкриваються — хости поза мережею сесії; є лише сніпети пошуку | ✅ (застереження щодо доступу нижче) |
| «On Thursday, Grandma baked paska» — деталь сюжету (Чистий четвер) | WebSearch: Українська правда, 2010 (https://life.pravda.com.ua/culture/2010/04/1/45354/) — тісто місили «зранку Чистого четверга» | ✅ як деталь сюжету |
| Pancake Day — UK; люди традиційно їдять млинці (l3) | CD «UK informal… (also Shrove Tuesday)» https://dictionary.cambridge.org/dictionary/english/pancake-day; OALD «the day before the beginning of Lent, when people traditionally eat pancakes» https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day | ✅ |
| lay the table — BrE; set the table — синонім | OALD lay_1 «lay something (British English)… synonym set to lay the table», «past simple laid» https://www.oxfordlearnersdictionaries.com/definition/english/lay_1; CD «B1 (UK also lay the table)» https://dictionary.cambridge.org/dictionary/english/set-the-table | ✅ |
| cooker — UK; stove — US (l1 info) | CD cooker (UK) https://dictionary.cambridge.org/dictionary/english/cooker; OALD https://www.oxfordlearnersdictionaries.com/definition/english/cooker | ✅ |
| fish fingers — BrE | OALD «(British English) (North American English fish stick)» https://www.oxfordlearnersdictionaries.com/definition/english/fish-finger; CD «(US fish stick)» https://dictionary.cambridge.org/dictionary/english/fish-finger | ✅ |
| pan = загальний посуд для готування (підстава правки 1) | OALD pan_1 «a container, usually made of metal, with a handle or handles, used for cooking food in»; CD pan «a metal container that is round and often has a long handle and a lid, used for cooking things on top of a cooker» | ✅ |
| full / full up — «having had enough to eat» (підстава правки 5) | OALD full_1 «(British English also full up) having had enough to eat» https://www.oxfordlearnersdictionaries.com/definition/english/full_1; CD full (writer) | ✅ |
| Наголос `<u>` і `stress`: <u>cook</u>er, <u>ov</u>en, <u>fry</u>ing pan, <u>sauce</u>pan, <u>ket</u>tle, <u>cup</u>board, <u>mi</u>crowave, <u>nap</u>kin, <u>ta</u>blecloth, de<u>li</u>cious | CD (curl): /ˈkʊk.ər/, /ˈfraɪ.ɪŋ ˌpæn/, /ˈsɔː.spən/, /ˈket.əl/, /ˈkʌb.əd/, /ˈmaɪ.krə.weɪv/, /ˈnæp.kɪn/, /ˈteɪ.bəl.klɒθ/, /dɪˈlɪʃ.əs/; OALD: /ˈkʊkə(r)/, /ˈkʌbəd/, /ˈnæpkɪn/, /ˈsɔːspən/, /ˈketl/, /dɪˈlɪʃəs/ | ✅ |
| fry → fried; lay → laid; eat → eaten; keep → kept; cut → cut | OALD lay_1 (laid); решта — словникові форми в нотатках автора, звірено вибірково | ✅ |

BrE: grep на -ize, color, apartment, stove (лише в info як US-слово), cookie, candy, Listen / You hear, IPA, позиційні посилання — нічого. Kyiv, Lviv, Kharkiv — за глосарієм.

## 2. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Результат |
|---|---|
| “This morning, Dad couldn’t find the frying pan” (l1 intro) | збігів немає |
| “Peel the potatoes, please. Then boil them. Later, we’ll roast a chicken” (l2) | збігів немає |
| “We need flour, a few eggs, some milk and a little salt” (l3) | збігів немає |
| “Put the varenyky in a saucepan of boiling water. They should be boiled for 5–7 minutes” (l4) | збігів немає (лише рецепти з тим самим часом варіння) |
| “I’ve got two napkins here. One is for Grandma” (l5) | збігів немає |
| “Do have some more” + “They were delicious, but I’m full” (l6) | збігів немає |

## 3–4. Завдання: розв'язок і опора (D-019)

| Завдання | Мій розв'язок = ключ | Звідки відповідь | Вердикт |
|---|---|---|---|
| l1 choice-hyp frying pan | так | здогадка (`hyp`) | ✅ |
| l1 gaps (frying pan, kettle, saucepan, oven) | так | info «Things for cooking»; roast chicken in the oven — e6s3l2 info | ✅ |
| l1 match 6 пар | так; другої пари немає (kettle ≠ soup) | обидва info | ✅ |
| l1 pick (saucepan, frying pan, cooker; хибне kitchen cupboard) | так | info «More kitchen things» (cupboard — keep) | ✅ |
| l1 word «in a big ___» | saucepan / pot / **pan** | info | ❌→✅ правка 1 |
| l1 gaps final | так | обидва info | ✅ |
| l2 choice-hyp baking | так | `hyp` | ✅ |
| l2 gaps boils / fries / bakes | так | info «Ways of cooking» | ✅ |
| l2 choice roasts | так | info | ✅ |
| l2 match peel…bake | так; займенники them/it відсікають другі пари | обидва info | ✅ |
| l2 pick [fryed] | так | info «fry → fried» | ✅ |
| l2 word peel | так | info «Before cooking» | ✅ |
| l2 gaps final | «I **baked** the potatoes» — граматично й змістово правильно, контекст не відсікав | info | ❌→✅ правка 2 |
| l3 choice-hyp a little sugar | так | `hyp` | ✅ |
| l3 gaps a little / a few / much / many | так | info | ✅ |
| l3 choice slice of bread | так | info «A slice of bread» | ✅ |
| l3 build How much milk do we need? | так, порядок один | info | ✅ |
| l3 pick [a few] sugar | так | info | ✅ |
| l3 word many | так | info | ✅ |
| l3 gaps final | так | обидва info | ✅ |
| l4 choice-hyp | так | `hyp` | ✅ |
| l4 gaps be boiled / be fried / be kept | так (голої основи серед варіантів немає) | info «Should be boiled» | ✅ |
| l4 choice read 5–7 minutes | так | текст на екрані | ✅ |
| l4 pick [bake] | так | info «Past participles» | ✅ |
| l4 build It should be eaten hot. | так, порядок один | info | ✅ |
| l4 word cut / sliced | так | info | ✅ |
| l4 gaps final | так | info | ✅ |
| l5 choice-hyp another plate | так | `hyp` | ✅ |
| l5 sort | так | l1 + info l5 | ✅ |
| l5 gaps the other / another / another | так (two glasses; a lot of forks) | info «Another, the other» | ✅ |
| l5 choice another knife | так | info | ✅ |
| l5 word lay / set | так, обидва в ключі | info | ✅ |
| l5 pick [another] → the other | так | info | ✅ |
| l5 gaps final | «First, I put a **napkin** on the table» — граматично можливо | info | ⚠️→✅ правка 3 |
| l6 choice-hyp warm and friendly | так | `hyp` | ✅ |
| l6 gaps Do / Do / Let me / yourself | так | info | ✅ |
| l6 choice polite refusal | так | info «Yes, please. No, thank you.» | ✅ |
| l6 match 4 пари | так, другої пари немає | info + зміст | ✅ |
| l6 build Let me wash the cups. | так | info | ✅ |
| l6 stress delicious / napkin / saucepan / cupboard | так | `<u>` в l1, l5, l6; CD/OALD | ✅ |
| l6 gaps final | так | info | ✅ |
| l7 T1 kettle | так | l1 | ✅ |
| l7 T2 peels / boils / fries | так («bakes… then boils them in water» — безглуздо, відсікається) | l2 | ✅ |
| l7 T3 a few / a little / much | так | l3 | ✅ |
| l7 T4 build (2 порядки в ключі) | так | l4 | ✅ |
| l7 T5 lay / another | так | l5 | ✅ |
| l7 T6 Do sit down | так | l6 | ✅ |
| l7 T7 word «I’m ___.» | full / **full up** (OALD BrE) | l6 info | ⚠️→✅ правка 5 |

Ключі `word` без кінцевого `.!?` — перевірено. Пасток з AmE-правописом у `build.extra` немає.

## 5. Педагогіка й рівень
Кожен урок: проблема в intro → здогадка `hyp` → теорія → вправи → фінальне письмо. Пояснення коротке, «чому» є (sugar is uncountable; the second of two). Нові B2-слова (peel, chop, napkin, tablecloth, full) пояснено до першого завдання. Неприйнятного змісту немає. Діалоги без `type: "dialog"` — рішення D-056, не знахідка.

## 6. Правки (зроблені)
1. l1 `word`: ключ `["saucepan", "pot", "pan"]`; fbText «A big pot or pan is also right.» (OALD pan_1, CD pan).
2. l2 фінальний `gaps`: «I {*peeled|baked} the potatoes, and then Grandma boiled them. She {*fried|baked} some fish…» — «baked the potatoes» тепер відсікається; hint доповнено «take the skin off».
3. l5 фінальний `gaps`: «put a {*tablecloth|napkin} over the whole table» — napkin більше не підходить.
4. l7 T7 `word`: ключ `["full", "full up"]` (OALD full_1 «British English also full up»).
5. Статус усіх 7 уроків `draft` → `verified`; `meta.factcheck` заповнено.

## 7. Рекомендовано (не блокує)
- l5 info «Laying the table»: пункт lay the table — 18 слів у рядку (норма 6–9 кл. ≤ 12): можна розбити «→ put plates, knives and forks on the table before a meal. We also say **set the table**.»
- l6 build fbOk «Good eye!» — для впорядкування доречніше «Well done!» (дрібниця).
- Paska: другий незалежний джерельний текст (kyivpost / ukraine.ua) у цій сесії доступний лише як сніпет WebSearch — хости не в мережі сесії; людина може відкрити https://ukraine.ua/news/ukrainian-easter-cake/ при апруві.

## Вердикт по уроках
e7s2l1–l7 — `verified`. Для людини: лише необов'язкові пункти §7; `approved` — за вчителем.
