# Синхронізація стилю: англійська 7 кл. (style-eng-g7)

Дата: 2026-11-25 · скіл `style-sync` · розділи e7s1–e7s7 (усі `verified`; статус не змінено, id не змінено).
Перевірка: `node tools/validate.mjs --section e7s1…e7s7` — 0 помилок, 0 попереджень у кожному; повний `node tools/validate.mjs` — 0 помилок (попередження — чужі розділи);
`node tools/stats.mjs --subject eng` → reports/style-eng.md. Build не запускався (оркестратор). Змінено лише content/eng/g7-e7s1…e7s6.js (e7s7 — без змін); g8/g9, diag-g7, plan.js, style/, decisions.md не чіпав.

## 1. Що змінено (6 розділів)

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | Герої: Emma пише, що минулого року на sports day «I won the egg-and-spoon race! Tom didn’t win» — суперечить 6 кл. (e6s4l6: Emma виграла girls’ running race; Tom (10) — ще primary school, тому біг Oliver, style-eng-g6 §1) | «Last year I won the **girls’ running race**! **Oliver** didn’t win, but he loved it.»; `fbText` так само. Питання (school fair → cakes), `correct` і варіанти не змінено | e7s6l2, екран 9 |
| 2 | `why` розділу показує граматику до уроку (правило style-eng-g6 §3) | e7s1: «…and things you have just done.» → «…and say: “I’ve just washed the dishes!”» (Present Perfect + just — новий у e7s1l2; зразок = назва уроку). Решта `why` 7 кл. — без нової граматики (e7s7 «who built them and when» — Past Simple активний) | e7s1 (розділ) |
| 3 | Термін: «past participle» (лише e7s2l4, l7) при «the third form» у e7s1, e7s3, 6 кл. і TERM style-eng-g6 («past participle» не вживаємо до TQ-128) | 13 замін «past participle(s)» → «the third form(s)» у `info`, `hint`, `fbBad`, `fbText`, `why`, `learned`; назва екрана «Past participles» → «Third forms». Тепер у 7 кл. один термін | e7s2l4, e7s2l7 T4 `fbBad` |
| 4 | Повтор граматики як нової: while + long action уже в e6s4l5 (`info` «while + long action», requires e7s5 → e6s4l5) | Перший рядок `info`: «While + a long action:» → «Remember: while + a long action.» (нове в уроці — long + long) | e7s5l4, екран 3 |
| 5 | Кома після фронтального підрядного в `build` (PITFALL verifier-e7s6) | Єдиний `build` 7 кл., що приймав фронтальне підрядне без коми: другий ключ «When it started to snow were you playing?» прибрано, у `body` — «Start with **Were**.» (як e7s6l3 «Start with if», e7s6l4 «Start with I’ll»). Тепер у 7 кл.: фронтальне підрядне — лише з комою в плитці (e7s6l3 «lose,»), інакше «Start with …» і один ключ | e7s5l4, екран 8 |
| 6 | Шаблонні інструкції | `word` ×3 «Complete the sentence with used to.» → «Write the missing word with used to.» (тема в назві лишається: без неї ключ `used` має другі відповіді liked / began, PITFALL verifier-e7s5); «Complete the dialogue.», «Complete the review.» → «Complete the sentences.» (як e6s5l6); `sort` «Sort the answers.» → «Sort the sentences.» (як e7s3l5) | e7s5l3 #9, e7s5l6 #8, e7s5l7 T3; e7s4l3 #10, e7s4l6 #10; e7s4l3 #7 |
| 7 | `fbOk` однакові в сусідніх оцінюваних екранах | 8 повторів «Well done!» поспіль → Yes! / Exactly. / Right. / Good eye! | e7s1l1 (2), e7s1l4, e7s1l6, e7s3l1, e7s3l2, e7s4l6 (2) |
| 8 | Фінали без підказок на складних завданнях (e7s4l7 — 0 з 6, e7s5l7 — 1 з 7; решта фіналів 7 кл. 3–8) | e7s4l7: `hint` T4 «Is it about the play or about how a person feels?», T5 «100 and 105 minutes: is it a big difference or a small one?», T6 «Start with You aren’t. Then the adjective.»; e7s5l7: T3 «Does Taras watch races on TV now, or did he do it in the past?», T4 «Check each verb with its subject: we, our fans, it.» | e7s4l7, e7s5l7 |
| 9 | Вступ фіналу e7s4l7 обіцяв «write a review», а завдання на відгук немає | «…buy tickets and write about the play and the film.» (T4 — Ostap про виставу, T5 — про фільм) | e7s4l7 intro |

## 2. `build`: перебір перестановок
Усі 32 `build` 7 кл. перебрано (node + vm + app/lang.js `SLID_LANG.check(s, st, "en")`): усі впорядковані підмножини `tiles` + `extra` будь-якої довжини. Пастки `extra` не зараховуються ніде; кількість прийнятих речень = кількості `answer` у кожному з 32 (і в зміненому e7s5l4 #8). Скрипт — у scratchpad, не в репозиторії.

## 3. Герої 7 кл. — одна картина (звірено з 4–6 кл.)
- **Вік — на три роки старші, ніж у 4 кл.:** Oksana 13 (4 кл. — 10), Dmytro 9 (4 кл. — 6; «started school when he was six»), Emma 13 (6 кл. — 12), Tom 11 (6 кл. — 10). Суперечності «Tom 11 у e7s4 vs Tom 10 у 6 кл.» немає — це наступний рік.
- **Tom і школа Emma:** у 7 кл. Tom (11) — у школі Emma (у England secondary з 11, Year 7): swimming club з Emma (e7s6l1), sports day (e7s6l4). Минулий sports day (6 кл.) — без Tom (виправлено, §1 п. 1). Tom: раніше боявся води, тепер swimming club (e7s5l3; узгоджено з e5s6l4, e6s4l3 «can’t swim»); зламав руку на skatepark (e7s3).
- **Taras:** «doesn’t do much sport» (e7s5l2) — як у e6s4l1 («I don’t do much sport, but I take photos»); з 7 кл. — Lviv Junior Athletics Club (Mon/Thu, coach Mr Hnatiuk), Myroslava там само (e6s4l1 — athletics). Розбіжність лишається лише з 4–5 кл. (e4s3l7 basketball Tue/Fri, e5s6l2 «plays football every day») — поза 7 кл., див. §8.
- **Andrii:** шахи з 5 років (e7s1l4 = e6s4); раніше грав лише з дідусем, тепер у клубі (e7s5l3); шкільний chess club Mon/Wed (e7s6l1), турнір шкіл Києва (e7s6); chess lesson у неділю зранку (e7s4l3) — це урок, не клуб, суперечності немає. Дідусь і бабуся — Chernihiv (e7s1, e7s6 = e6s5).
- Решта узгоджено: Oksana — karate (2-ге місце, Poltava); Mariia (Kharkiv) — тепер бігає (раніше не любила); Ruby — однокласниця Emma (e6s1l2), тепер плаває в команді Emma; Oliver — однокласник Emma, теніс; Vlad, Ostap, Myroslava, Lesia, Ilona — Lviv; Halyna — Zelena Dolyna; нові: Mr Hnatiuk, Lesia, Ilona (e7s5), Ms Marchenko, Liza (e7s6), uncle Ihor (e7s2).
- Дрібне (без правок): прізвище Bondar — Ms Bondar, тренерка Mariia з плавання (e4s3l6, Kharkiv) і Dr Bondar (e7s3, Kyiv) — різні люди; новим героям Bondar не давати.

## 4. Повтори граматики між розділами
- just / already, for / since: нове — e7s1l2, l4; e7s3l3–l4 — «Remember?» з requires (verifier-e7s3). ОК.
- Shall we: e5s6l5 → e7s6l5 «(You know this one!)», нове — Shall I (offer), What shall we (verifier-e7s6). ОК.
- used to: у 4–6 кл. немає ніде — нове лише в e7s5l3. ОК.
- while + Past Continuous: e6s4l5 → e7s5l4 тепер «Remember» (§1 п. 4).
- Пасив: e6s3l2 (is made), e6s7l3 (was built) → e7s2l4 (модальний пасив — новий), e7s7l1 «like “Borscht is made with beetroot”», e7s7l2 + by, e7s7l3 питання й заперечення. Повтор позначено, нове — лише розширення. ОК.
- comparatives: e7s4l5 — лише much / a bit / even / as … as (нові), порівняльний ступінь — з requires.
- Лексика клубу (join a club, member): e7s5l2 і e7s6l1 — обидва `info`. e7s6 не має e7s5 у requires, тож екран самодостатній; правок не робив (лексичне повторення, не нова граматика).

## 5. Перевірено без змін
- Інструкції: після правок поза шаблоном лишилися «Match the words and the descriptions.» (e7s4l1, `match` без картинок), «Sort the sentences.» (2 екрани `sort` речень), «Read the dialogue and choose the best answer.» (3 `choice` з реплікою; типу `dialog` немає, D-056), «Write the missing word: was or were + not.» — це шаблон + тема; пропозиція доповнити таблицю — §7.
- Кирилиці, IPA, Click / Tap, позиційних посилань, імітації аудіювання немає. «Find the mistake» — у кожному розділі (1–4).
- Кома після фронтального підрядного в текстах і `info` — є скрізь (сканом речень на If / When / While / Unless / As soon as / Because).
- Складність плавна (звичайні уроки, сер. ± sd): readWordsPerScreen 6 кл. 33 ± 4 → 7 кл. 37 ± 5 → 8 кл. (draft + verified) 38 ± 4; maxText 54 → 65 → 68; sentenceWords 5,6 → 6,1 → 6,4; screens 9,6 → 10,1 → 9,9; gradedShare 0,66 → 0,64 → 0,64; typeVariety 5,1 → 5,1 → 5,4. Фінали: readWordsPerScreen 24 → 27 → 27. Стрибків немає.

## 6. Прапорці stats «нетипово для сім'ї»
Після правок — 17 уроків 7 кл.: e7s1l1, e7s1l5, e7s1l6, e7s2l6, e7s4l5, e7s4l7, e7s5l2, e7s5l5, e7s5l6, e7s6l1, e7s6l2, e7s6l4, e7s6l5, e7s6l6, e7s6l7, e7s7l4, e7s7l6. Жоден не виходить за профіль «7-9» (validate — 0 попереджень).
Причини: жанр — уроки читання й тексти-оголошення (e7s1l6, e7s5l6, e7s6l2, e7s7l6: readWordsPerScreen 39–49, gradedShare до 0,8), розклад клубів (e7s5l2, maxText 88), фінал e7s4l7 з довгими варіантами (35 слів/екран); короткий граматичний урок e7s1l5 (рефлексиви, z = −2,4 — нижній край, у межах); typeVariety 4 в e7s6 (l1, l2, l4–l7) — у межах профілю (2–6) і style/eng.md (≥ 2 типи), «Find the mistake» у розділі є. Правок за прапорцями не робив.

## 7. Пропозиція профілю `eng` «7-9» (рядки STYLE; style/profiles.json не змінено)
Факт 7 кл. (звичайні уроки n = 42 / фінали n = 7):

| Метрика | 7 кл. факт (сер. ± sd; min–max) | фінали | діє («7-9») | Пропозиція |
|---|---|---|---|---|
| screens | 10,1 ± 0,8; 9–11 | 7–9 | 6–12 | без змін |
| gradedShare | 0,64 ± 0,07; 0,55–0,80 | 0,86–0,89 | 0,5–0,9 | без змін |
| readWordsPerScreen | 37 ± 5; 27–48 | 23–35 | 6–50 | без змін зараз; **6–55**, лише якщо TQ-126 (200–260 слів у 7 кл.) прийнято — урок читання на 8–9 екранах тоді ≈ 52–55 |
| maxReadWords | 70 ± 11; 49–92 | 31–60 | ≤ 150 | без змін |
| maxText | 65 ± 11; 46–88 | 25–45 | ≤ 140 | без змін (уривок ≤ 130 за style/eng.md) |
| sentenceWords | 6,1 ± 0,7; 4,9–7,7 | 5,0–5,8 | 3,5–12 | без змін |
| longWordShare | 0,06 ± 0,03; max 0,124 | max 0,092 | ≤ 0,18 | без змін |
| typeVariety | 5,1 ± 0,7; 4–6 | 3–6 | 2–6 | без змін |

Висновок: 7 кл. (і 8 кл. зі зведених даних) лежить усередині «7-9» з запасом, окрім readWordsPerScreen (max 48–49 при межі 50). Ключ класу «7» не потрібен.
ENGINE (повтор з style-eng-g4-5, style-eng-g6): z-оцінку «нетипово для сім'ї» рахувати в межах класу або не показувати при |z| < 3, коли метрика в межах профілю — 17 прапорців 7 кл. без потреби в правках.
Шаблони (style/eng.md, таблиця інструкцій): додати `sort` «Sort the sentences.», `match` «Match the words and the descriptions.» і для `choice` з реплікою «Read the dialogue and choose the best answer.» (поки типу `dialog` немає, D-056).

## 8. Тексти читання й TQ-126
Цілий текст (курсив у всіх частинах): e7s1l6 122 (+ відповідь Emma 59), e7s3l6 76 (етикетка), e7s5l6 144, e7s6l2 116, e7s7l6 153. Пропозиція TQ-126 для 7 кл. — 200–260 — не досягнута жодним (6 кл. — 70–160). Не подовжував: це зміна змісту verified-уроків; після відповіді вчителя — задачі `refine-eng-*` (а readWordsPerScreen для них — §7).

## 9. Для точкової повторної верифікації
Ключі відповідей не змінено, крім п. 2 нижче (звужено).
1. **e7s6l2 #9** (Final, Reading): текст Emma — «girls’ running race», «Oliver didn’t win»; `fbText`. Питання й `correct` ті самі; перевірити, що дистрактор «She’s running an egg-and-spoon race.» лишається хибним (egg-and-spoon — з `info` #6).
2. **e7s5l4 #8** (build): прибрано другий ключ «When it started to snow were you playing?»; у `body` «Start with Were.»; перебір — 1 прийняте речення.
3. **e7s4l7**: три нові `hint` (T4, T5, T6) і новий текст intro; **e7s5l7**: два нові `hint` (T3, T4) — перевірити, що не видають відповідь.
4. **e7s2l4, e7s2l7**: термін «the third form» замість «past participle» (13 місць, назва екрана «Third forms»).
5. **e7s5l3 #9, e7s5l6 #8, e7s5l7 T3**: нова назва «Write the missing word with used to.» (тема збережена — ключ однозначний).
6. **e7s1** `why` розділу; **e7s5l4 #3** «Remember: while + a long action.»
Без впливу на зміст: назви екранів e7s4l3 #7, #10, e7s4l6 #10; 8 `fbOk`.

## 10. Не зроблено / наступні кроки
- content/eng/plan.js — `why` e7s1 синхронізувати (куратор плану).
- Taras і спорт у 4–5 кл. (basketball, «football every day») проти e6s4l1 / e7s5l2 («doesn’t do much sport») — поза 7 кл.; рішення — куратору героїв (NOTE в inbox).
- Подовження текстів читання — після TQ-126.
- Плейтест змінених розділів (e7s1–e7s6) — після build оркестратора.
