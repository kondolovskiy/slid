# Синхронізація стилю: англійська 9 кл. (style-eng-g9)

Дата: 2026-11-26 · скіл `style-sync` · розділи e9s1–e9s9 (усі `verified`; статус і id не змінено).
Перевірка: `node tools/validate.mjs --section e9s1…e9s9` — 0 помилок і 0 попереджень у кожному; `node tools/stats.mjs --subject eng` → reports/style-eng.md. Build не запускався (його запускає оркестратор). Змінено лише content/eng/g9-e9s1…e9s9.js. g8, g10, diag-g9, plan.js, style/, decisions.md не чіпав.
Еталон процесу — reports/style/eng-g8.md.

## 1. Що змінено

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | «pen friend» (NOTE verifier-style-eng-g8) | «My pen friend Zofia» → «My penfriend Zofia» (текст читання, поза ключами). Тепер «pen friend» у 9 кл. не трапляється жодного разу | e9s1l2 #10 |
| 2 | chat show / talk show (TERM writer-e9s4: chat show — BrE, talk show — «US also UK») | `info`: «a **chat show** (also **talk show**)»; у текстах e9s4 «a talk show» → «a chat show» (l2 #1, #4, #7, #11; ключі не зачеплено); дистрактор gaps l1 #6 «talk show» → «chat show» (лишається хибним: тато дивиться прогноз погоди); назва уроку l2 → «My favourite programme: a quiz or a chat show?» | e9s4 l1, l2 |
| 3 | e9s4l5 #5: «What did the presenter of Quiz Time say?», а ці слова («Switch off your phones», «Could you clap…») у вступі уроку говорить менеджер студії Mr Moroz | → «What did Mr Moroz say? Match his words and the report.» Пари, ключі й фідбек ті самі | e9s4l5 #5 |
| 4 | «partly agree» по-різному в e9s3 і e9s9: e9s3 подає «That’s true, but…» як «a polite way to disagree» / «polite disagreement», e9s9 (і верифікатор e9s9) — окремий рівень «partly agree» | e9s3l6 `info` і `fbText` sort: «a polite way to give a different idea»; outro `learned`: «Partly agree politely: That’s true, but…»; e9s3l7 T8 умова «Zoriana agrees only partly, and she wants to be polite», `fbBad`, `fbText` «partly agree: a polite way to give a different idea» + новий `hint`. `correct` той самий. Кошики e9s3l6 («agree / partly agree / don’t agree») не змінено: e9s3 вчить «I don’t agree with…», «disagree» з'являється в e9s9 | e9s3 l6, l7 |
| 5 | Термін: «+ third form» без артикля (e9s6 — 23, e9s8 — 25), у 7–8 кл. і e9s1/e9s2 — «+ the third form» (style-eng-g8 §1 п. 10) | 48 замін «+ third form» → «+ the third form» (`info`, `hint`, `fbBad`, `fbText`, outro `learned`; жодного ключа). «has no third form», «a third form» лишив | e9s6, e9s8 |
| 6 | `why` розділу показував нову граматику до уроку: e9s8 «…imagine how things could have been different» (could have + 3-тя форма ніде раніше не вчили) | → «And to imagine a different past: “If we had booked tickets, we would have seen the castle!”» (нова граматика лише цитатою, речення з e9s8l5). Решта вісім `why` без нової граматики | e9s8 |
| 7 | Герої: Оксана в Одесі в дядька Івана — «every June» (e9s5l5 #11), а в e5s6 і e9s8l5 — у липні | e9s5l5 #11: «Emma invites Oksana to England in July», «I can’t come in July», «every July, we visit my uncle Ivan». Ключі (love, afraid, why, That’s why) не зачеплено; «August is better» лишається логічним | e9s5l5 #11 |
| 8 | Фінали без підказок (e9s2l7, e9s5l7, e9s7l7, e9s8l7 — 0; e9s3l7, e9s4l7, e9s9l7 — 1; e9s1l7, e9s6l7 — 2; у 8 кл. після синхронізації — від 3) | 21 новий `hint` (навідне питання або правило, а не відповідь): e9s1l7 T3, T7; e9s2l7 T3, T4, T5; e9s3l7 T5, T8; e9s4l7 T4, T7; e9s5l7 T4, T6, T9; e9s6l7 T5; e9s7l7 T2, T4, T6; e9s8l7 T2, T6, T9; e9s9l7 T2, T6. Тепер у кожному фіналі 9 кл. від 3 підказок (e9s1l7 — 4) | 9 фіналів |
| 9 | Однакові `fbOk` у сусідніх оцінюваних екранах | 21 повтор «Well done!» / «Good eye!» поспіль → Brilliant! / Exactly. / Right. / Yes! / Correct! (слова з набору 7–8 кл.). Тепер повторів поспіль немає | e9s3 l2, l3, l6; e9s4 l4, l5; e9s5 l1–l5; e9s6l3; e9s7l6; e9s8 l1, l3, l4, l7; e9s9 l1, l2, l3, l6 |

Шаблони інструкцій 9 кл. («Complete the sentences.», «Fill in the gaps.», «Write the missing word.», «Complete the sentences with should.» тощо) збігаються з 7–8 кл. Тут правок не потрібно.

## 2. Нові `hint` (повний текст, для верифікатора)
| Завдання | Hint |
|---|---|
| e9s1l7 T3 (lazy / hard-working) | Does Kyrylo work a lot or a little? |
| e9s1l7 T7 (build, While…) | Which action is long, and which is short? |
| e9s2l7 T3 (going to / definitely / probably) | Look at the % after each sentence. Can Mariia see the clouds? |
| e9s2l7 T4 (word, Future Continuous) | Is it a finished action or an action in progress at that moment? |
| e9s2l7 T5 (pick, must not be pick) | must not be + which form of the verb? |
| e9s3l7 T5 (so / such / such a) | What comes after each gap: an adjective alone or an adjective + a noun? One thing or more? |
| e9s3l7 T8 (That’s true, but…) | How do we partly agree? Remember the rule “Giving your opinion”. |
| e9s4l7 T4 (build, reported question) | A reported question has the word order of a statement. |
| e9s4l7 T7 (I wonder what…) | After I wonder what…, is the word order like a question or like a statement? |
| e9s5l7 T4 (where / which / when) | Look before and after each gap: a place, a thing or a time? A person or a verb next? |
| e9s5l7 T6 (pick, That’s because) | Is acting the reason or the result? |
| e9s5l7 T9 (when / which / whose / why) | Which gap is about a reason, a thing, a time or someone’s things? (порядок навмисно не збігається з порядком пропусків) |
| e9s6l7 T5 (multi, can be + 3-тя форма) | Check two things in each sentence: be after can, and the third form. |
| e9s7l7 T2 (good at / interested in / keen on) | Which verb form comes after a preposition? And which preposition goes with keen? |
| e9s7l7 T4 (sort: advice / necessary / not necessary) | Is it a good idea, something you must do, or something you don’t need to do? |
| e9s7l7 T6 (pick, will can) | Check the verbs after will. |
| e9s8l7 T2 (since / cities / on) | 1998: a point in time or a period? One of the… → one city or many? |
| e9s8l7 T6 (Second Conditional vs First) | Does Isla really live in Lviv? Is the trip to Ukraine a real plan? |
| e9s8l7 T9 (on foot / worth climbing / had booked) | Which form comes after worth? And can would go after if? |
| e9s9l7 T2 (Actually) | Is Andrii right about Taras? |
| e9s9l7 T6 (Although / However / so) | Look at the commas and the full stops. Which gap starts a new sentence? Which one shows a result? |

## 3. Герої 9 кл. — одна картина (звірено з 7–8 кл.)
- **Вік (+1 до 8 кл.):** Oksana 15 (e9s1, e9s3, e9s5), Emma 15 (e9s5, DofE «from 14»), Tom 13, Dmytro 11. Суперечностей немає. Marko 12 (кузен Ostap, e9s5) — новий.
- **Сім'я Оксани:** мама Olena — медсестра в лікарні в Poltava (e5s1 = e9s7, Hlib — її колега; Оксана народилася в Poltava, e9s1), тато Petro (e4s1; сад, e9s3), бабуся Hanna й дідусь Mykola (e4s1 = e9s1, e9s3, e9s6), кузен Denys — ліцей у Poltava (e8s6 = e9s7l6), дядько Ivan в Odesa — щолипня (e5s6, e9s8; тепер і e9s5, §1 п. 7). Школа — гімназія до Year 9 (e8s6); у e9s7l6 «After Year 9, I’d like to go to a lyceum in Poltava» — узгоджено. Карате з дев'яти (e9s1) не суперечить «I do karate» у 4–6 кл. Мрія — vet (e9s1, e9s7), у дитинстві — nurse «like my mum» (e9s1 = e9s7).
- **Andrii:** бабуся Nina й дідусь Vasyl у Chernihiv (e5 = e9s1), шахи від дідуся; Science Week і газета Ms Lysenko (e9s3, e9s6); подкаст із Daryna (e9s4); e-book reader від бабусі (e9s6).
- **Emma:** містечко в England, swimming club з шести (e9s1) = «could swim when I was five… school swimming team» (6–7 кл.); Mr Price — її вчитель (e8s1) і лідер DofE (e9s5); форма в школі (e5s4, e8s6 = e9s3).
- **Tom:** барабани й гурт (e8s4 = e9s1, e9s2, e9s3), скейтборд (e9s5).
- **Taras:** Lviv, School 5 (Ms Kvitka — директорка, e8s3; шкільне радіо Bright Radio — назву обрано в e9s4l6, далі в e9s9 — узгоджено), фото для шкільної газети (e9s1l7 = e8s3), athletics (e9s3 = e8s2), часто тренується сам (e9s9). Кузина Marta (e4s1, e5s1 = e9s7, e9s8).
- **Mariia:** Kharkiv, penfriend Zofia (Poland), комікси (e8s1 = e9s1, e9s4, e9s5, e9s9), uncle Oleh (e8s4 = e9s2, e9s6), бігає сама в парку (e7s5 = e9s9).
- **Нові 9 кл.:** Stepan Lytvyn (e9s1), Mr Moroz (e9s4), Ivanka, Marko (e9s5), Hlib, Ms Bilyk, Ms Datsenko (e9s7). Імена не повторюються. У e9s7l4 #1 «My uncle» Bohdan — дядько хлопця Bohdan без імені, не новий герой.
- **Лишається відкритим (не правив):** Taras і спорт — у 4–6 кл. «I don’t do much sport. I take photos!», з 7 кл. athletics (NOTE style-sync g7). 9 кл. продовжує лінію 7–8 кл. Для людини чи куратора — без змін.

## 4. Терміни й нотація
- **penfriend** — одне написання (§1 п. 1). **email** без дефіса, **the internet** з малої — скрізь (e-mail, Internet — 0). **programme** (TV), **program** (комп'ютерна, e9s6l5, e9s7l1) — норма BrE.
- **the third form** — тепер однаково з 7–8 кл. (§1 п. 5); у e9s2l5 «past participle (the third form)» — правка верифікатора, лишив.
- **chat show** — основне слово, talk show — «also» (§1 п. 2).
- **partly agree** — однаково в e9s3 і e9s9 (§1 п. 4); «don’t agree» (e9s3) і «disagree» (e9s9) — свідома послідовність лексики, не різнобій.
- e-book reader (e9s6l6, Andrii) і e-reader (e9s9, Bohdan) — обидва слова є в CD. Не правив, бо вжито в різних розділах і про різних героїв.
- `requires`: e9s1 + e8s5l4, e8s5l5; e9s8 + e9s5l3; e9s9 + e9s2l6, e9s3l6, e9s4l6, e9s8l4 — уже додано верифікаторами, id існують (validate 0).

## 5. Прапорці stats «нетипово для сім'ї» (після правок — 13 уроків 9 кл.)
e9s1l2, e9s2l2, e9s3l1, e9s4l2, e9s6l1, e9s6l2, e9s6l6, e9s7l6, e9s8l3, e9s8l6, e9s9l1, e9s9l6, e9s9l7. Жоден не виходить за профіль «7-9» (validate — 0 попереджень). Причини:
- longWordShare 0,14–0,18 (e9s1l2, e9s3l1, e9s6l1, e9s6l2, e9s8l3, e9s9l1) — словникові уроки (personality, fashionable, scientist, inventor, Australia, opinion). Max 0,175 (e9s6l2) при межі 0,18.
- readWordsPerScreen 48–49 (e9s2l2, e9s4l2, e9s8l6) при межі 50 — уроки читання. sentenceWords 7,8–7,9 (e9s2l2, e9s7l6) — тексти читання.
- gradedShare 0,78–0,8 (e9s6l6, e9s8l6, e9s9l6) — уроки письма й читання з короткою теорією. maxText 55 у фіналі e9s9l7 — діалог дебатів.
Правок за прапорцями не робив: зміст verified-уроків і норма для B1.

## 6. Складність: 7 → 8 → 9 кл. (звичайні уроки / фінали; сер. ± sd, min–max)

| Метрика | 7 кл. (42 / 7) | 8 кл. (48 / 8) | 9 кл. (54 / 9) | «7-9» |
|---|---|---|---|---|
| screens | 10,1 ± 0,8 / 8,1 | 9,9 ± 0,9 / 8,5 | 10,4 ± 0,8; 9–12 / 8,9 | 6–12 |
| gradedShare | 0,64 / 0,88 | 0,65 / 0,88 | 0,66 ± 0,06; 0,55–0,80 / 0,89 | 0,5–0,9 |
| readWordsPerScreen | 37 ± 5; 27–48 / 27 | 38 ± 5; 29–48 / 27 | 39 ± 5; 30–49 / 26 | 6–50 |
| maxReadWords | 70 ± 11 / 43 | 73 ± 10 / 44 | 73 ± 10; 54–89 / 45 | ≤ 150 |
| maxText | 66 ± 11 / 35 | 68 ± 10 / 36 | 68 ± 10; 51–86 / 39 | ≤ 140 |
| sentenceWords | 6,2 ± 0,7 / 5,4 | 6,4 ± 0,6 / 5,9 | 6,5 ± 0,6; 5,4–7,9 / 6,0 | 3,5–12 |
| longWordShare | 0,063; max 0,124 | 0,080; max 0,179 | 0,082; max 0,175 | ≤ 0,18 |
| typeVariety | 5,1 | 5,4 | 5,5 ± 0,5; 5–6 | 2–6 |

Зростання плавне, стрибків немає. Профіль «7-9» **не змінювати**. Дві метрики стабільно під стелею (readWordsPerScreen max 49/50, longWordShare max 0,175/0,18), але середні ростуть ледь помітно, тож рішення про профіль варто відкласти до 10 кл. (профіль «10-11»). Рядок STYLE в inbox.

## 7. Для точкової повторної верифікації
Ключі (`correct`, `{*…}`, `answer`) не змінено ніде. Змінено один дистрактор (e9s4l1 #6).
1. **e9s4**: chat show — `info` l1 #5, дистрактор gaps l1 #6 «chat show», тексти l2 #1, #4, #7, #11, назва l2; **e9s4l5 #5** — Mr Moroz замість presenter.
2. **e9s3l6** `info` #4, `fbText` sort #7, outro; **e9s3l7 T8** — нова умова «agrees only partly», `hint`, `fbBad`, `fbText` (`correct` той самий, друга відповідь не з'явилася: «I agree with you» і «I think you’re right» — згода на 100 %).
3. **e9s5l5 #11**: July замість June (ключі ті самі).
4. **e9s8** `why`; **e9s1l2 #10** penfriend.
5. **21 новий `hint`** у фіналах (§2) — перевірити, що відповіді не видають (особливо e9s2l7 T4, e9s3l7 T5, e9s5l7 T9, e9s7l7 T6).
Без впливу на зміст: 48 замін «+ the third form» (e9s6, e9s8), 21 `fbOk`.

## 8. Не зроблено / наступні кроки
- content/eng/plan.js — куратору плану: назва e9s4l2 «My favourite programme: a quiz or a chat show?» (рядок 747), `why` e9s8 (рядок 808). Рядок STYLE в inbox.
- glossary/eng.md: chat show (BrE) / talk show — TERM writer-e9s4 уже в inbox. Автору dge9 — chat show, якщо тест рівня торкається e9s4 (рядок в inbox).
- Плейтест e9s1–e9s9 — після build оркестратора (у контейнері немає Python-модуля playwright — лише CI).
