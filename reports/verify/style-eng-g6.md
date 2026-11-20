# Верифікація: style-eng-g6 (вирівнювання стилю англійської 6 кл.)

Дата: 2026-11-20 · верифікатор `verifier-style-eng-g6` (свіжий контекст, правок стиліста не робив) · скіл `content-verify`, розділ «Англійська».
Предмет перевірки: коміт 898b947 (content/eng/g6-e6s1…e6s8.js, 31 рядок), звіт reports/style/eng-g6.md (§9 — перелік для повторної верифікації).

**Вердикт: прийнято з однією дрібною правкою (hint T5 у e6s1l7).** Ключі не змінено, другої правильної відповіді не виникло, нових фактів немає; усі 8 розділів лишаються `verified`.

## 1. Обсяг diff проти заявленого
`git show 898b947 -- content/` збігається з §1 звіту стиліста рядок у рядок: e6s1 (+3 `hint`), e6s2 (1 `fbOk`), e6s3 (intro, Task 4 `before`/`after`/`fbText`), e6s4 (1 `fbOk`; Tom → Oliver в екрані 9 l6), e6s5 (Final l1, 2 `fbOk`, назва екрана l6, intro l7), e6s6 (3 `fbOk`), e6s7 (`why` розділу, 3 `fbOk`), e6s8 (1 `fbOk`). Поза заявленим нічого не змінено; `correct`/`answer`/`tiles`/`extra` не зачеплено. Жоден `build` не змінювався, крім доданого `hint` у e6s1l7 Task 2.

## 2. Завдання → звідки відповідь → вердикт

| Де | Розв'язок верифікатора (до ключа) | Опора (D-019) | Друга правильна відповідь? | Вердикт |
|---|---|---|---|---|
| e6s4l6 екр. 9 (Sports day 2/2), choice | «He fell.» (ключ 2 — збіг) | текст на екрані: «He was running very fast when he fell» | ні: «won» заперечено «He didn’t win», «went home» — «got up and ran again» | ✅ |
| e6s5l1 Final, choice «Why does Grandma love the coach?» | «It’s cheaper than the car and comfortable.» (ключ 1) | текст на екрані; «in July» на питання не впливає | ні | ✅ |
| e6s5l7 (intro «It’s October.») → Task 1–6 | coach; leaves/does/arrives; [0,1]; might rain/might be; does; «Sorry, could you say that again…» — усі збіглися з ключами | e6s5l1–l6 (`pre`) | ні: маркер «It’s October» нічого не додає до Task 3 (обидві форми плану вже в ключі [0,1]) і Task 4 (варіанти лише форми після might) | ✅ |
| e6s3l7 Task 4 `word` «This morning, Andrii and Dad ___ deruny for the grandparents.» | made | e6s3l4: інфо «make → made», «Dad and I made pancakes», outro l4 | *cooked* граматично можливе, але `body` «make → ?» його відсікає (як і до правки). *make* з підметом у множині тепер граматично-формально можливе, але «This morning» (маркер минулого за PITFALL verifier-e5s9) і «make → ?» (треба форма) його відсікають. *have made* — два слова й Present Perfect ще не вивчено (e6s7). Ключ без кінцевого `.!?` | ✅ |
| e6s1l7 Task 2 `build` (+hint) | Roksolana has got big blue eyes. | e6s1l2 (розмір → колір) | перебір через app/lang.js (`SLID_LANG.check(s, st, "en")`, усі впорядковані підмножини tiles + extra): приймається рівно 1 речення = `answer`; пастка «eye» не зараховується | ✅ |
| e6s1l7 Task 5 `gaps` (+hint) | looks / quite / happy | e6s1l5: info «Look + happy, tired, sad», «Very, quite, really» | ні | ✅ після правки hint (§3) |
| e6s1l7 Task 6 `choice` (+hint) | is like | e6s1l6 | ні («looks her dad», «Mariia look like» — хибні) | ✅ |
| e6s5l6 «Complete the dialogue.» → «Complete the sentences.» | returns / does / again | e6s5l6 | — (змінено лише назву) | ✅ |

## 3. Підказки фіналу e6s1 (style/eng.md: `hint` — навідне питання чи перший крок, не відповідь)
- T2 «What comes first: how big or the colour?» — навідне питання, відповіді не називає. ✅
- T6 «Funny stories, friendly: is it the face or the character?» — навідне питання; відповідь треба ще вивести (character → is like). ✅
- T5 «Look + an adjective (tired, happy): no like, no -ly.» — **⚠️ видавала відповідь**: прямо відкидає дистрактори двох із трьох пропусків (*looks like*, *happily*), тобто розв'язує завдання, а не навідно питає; до того ж «adjective» — термін, якого в e6s1l5 немає (там «a word like happy or tired»). **Виправлено:** «Tired, happy: a person or a feeling? And how tired is Emma?» — навідні питання за info e6s1l5 («look like + a person», «How do they feel?», «quite = a little, but not very»), відповідь не називає.

## 4. Герої й сюжет
- **Tom → Oliver (e6s4l6):** Oliver уже канонічний — «Oliver from Emma’s class» (e6s4l2, build), «Oliver writes to Andrii… My sister prefers swimming» (e6s4l2 Final), коментар-заголовок файлу «Oliver (однокласник Emma в Англії)». «Her classmate Oliver» узгоджене; ім'я лишилося лише в e6s4 (`grep Oliver content/eng/*.js`). Слово *classmate* — CD «A2 someone who is in the same class as you at school» (https://dictionary.cambridge.org/dictionary/english/classmate), OALD «a person who is or was in the same class as you at school or college» (https://www.oxfordlearnersdictionaries.com/definition/english/classmate). *sports day* — OALD «(British English) (North American English field day)» (https://www.oxfordlearnersdictionaries.com/definition/english/sports-day); CD-стаття є (https://dictionary.cambridge.org/dictionary/english/sports-day). Підстава правки (Tom 10 — primary, Emma 12 — secondary) підтверджена: перехід до secondary — Year 7, близько 11 років (https://getintoteaching.education.gov.uk/life-as-a-teacher/age-groups-and-specialisms/age-groups-you-could-teach, https://www.lancaster.ac.uk/fass/projects/lever/PROJECTS/ages-years.htm — результати WebSearch). Tom у решті e6s4 (l3 катається, не плаває; l5 «Tom came in») — поза sports day, конфлікту немає.
- **e6s5:** l1 «in July» узгоджено з intro l1 («The friends chat about the summer») і з Oksana «Every July… Odesa»; boss «It’s October… next weekend» узгоджено з Task 4 («It might be cold, so pack a jumper»). Дві поїздки розведено в часі. ✅
- **e6s3l7:** «Andrii, Sofiia and Dad cook lunch» узгоджено з e6s3l3 «Ask an adult to help you!» і e6s3l4 «Dad and I made pancakes». «for the grandparents» замість «his grandparents» — щоб не було двозначності з Dad; природно. ✅
- Побіжно (не з diff, до правки стиліста, не блокує): e6s5l7 Task 3 «Andrii’s dad has got the tickets for Saturday», а Task 6 «Andrii is at the ticket office… What does he say?» — сюжетно можна прочитати як інше питання в касі; на розсуд при наступному `refine-eng-*`.

## 5. `why` e6s7 і `fbOk`
- `why`: «To tell people about Kyiv and its famous places. And to ask a friend: “Have you ever been to Kyiv?”» — нова граматика лише цитатою-зразком (як e5s8, e4s8), зразок = назва e6s7l4 і рядок `learned` l4; лапки “ ” за TQ-119. ✅ plan.js e6s7 `why` розходиться — синхронізація куратору (рядок STYLE стиліста).
- 11 `fbOk`: скрипт по всіх уроках e6s1–e6s8 — у жодному уроці немає двох однакових `fbOk` поспіль (з `hyp` і без). Усі значення — з переліку style/eng.md («Yes!», «Right.», «Exactly.», «Well done!», «Good eye!»). ✅

## 6. Авторське право (нові англійські фрагменти ≥ 12 слів)

| Фрагмент | Запит (WebSearch, лапки) | Результат |
|---|---|---|
| e6s4l6 «…was in a race too. He was running very fast when he fell…» | "was in a race too. He was running very fast when he fell" | збігів немає (новини про падіння бігунів) |
| e6s5l7 intro | "Andrii and his family are visiting his grandparents in Chernihiv next weekend" | збігів немає |
| e6s5l1 Final | "My grandparents are coming to Kyiv in July. They live in Chernihiv" | збігів немає (rome2rio, omio) |
| e6s7 `why` | "To tell people about Kyiv and its famous places" | збігів немає (путівники) |

## 7. Інше з чекліста «Англійська»
Нові рядки: без AmE-правопису й лексики, без IPA, без «Listen», без позиційних посилань і літер в `opts`, без кирилиці. Рівень мови `hint` і `why` — у межах 6 кл. (речення ≤ 12 слів, нових термінів немає).

## 8. Прогін
- `node tools/validate.mjs --section e6s1…e6s8` (після правки) — 0 помилок, 0 попереджень у кожному.
- Перебір `build` e6s1l7 через app/lang.js — у scratchpad сесії (не в репозиторії).
- `python3 tools/playtest.py` — у контейнері немає Python-модуля playwright; плейтест e6s1, e6s3, e6s4, e6s5, e6s7 — у CI / після build оркестратора.

## 9. Правки
- Зроблено (1): content/eng/g6-e6s1.js, e6s1l7 Task 5 `hint` → «Tired, happy: a person or a feeling? And how tired is Emma?».
- Рекомендовано (не блокує): e6s5l7 Task 3 / Task 6 — квитки вже в тата vs Андрій у касі (до правки стиліста).

## 10. Вердикт по розділах
e6s1–e6s8 — `verified` (статус не змінювався; відкритих ❌ і ⚠️ немає). `approved` — лише вчитель.
