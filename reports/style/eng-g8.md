# Синхронізація стилю: англійська 8 кл. (style-eng-g8)

Дата: 2026-11-26 · скіл `style-sync` · розділи e8s1–e8s8 (усі `verified`; статус і id не змінено).
Перевірка: `node tools/validate.mjs --section e8s1…e8s8` — 0 помилок і 0 попереджень у кожному; `node tools/stats.mjs --subject eng` → reports/style-eng.md. Build не запускався (це робить оркестратор). Змінено лише content/eng/g8-e8s1…e8s8.js; g7, g9, diag, plan.js, style/, decisions.md не чіпав.
Еталон процесу — reports/style/eng-g7.md.

## 1. Що змінено

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | Написання pen friend / penfriend | У предметі 4–9 кл. (e4s2–e9s2, а також e8s2, e8s3, e8s6) — **penfriend** (OALD BrE «also penfriend»), «the penfriend club». Тому в 8 кл. одне написання: усі «pen friend(s)» → «penfriend(s)» у e8s1 (назва розділу «Penfriends and letters», `why`, назви уроків l1 і l7, `info`, значок «Penfriend», текст, **build l1 #9: плитка й ключ «a penfriend»**) і в e8s8 (l1 #10, l6 #9: текст пропусків, ключі не зачеплено). 4 кл. не правив | e8s1, e8s8 |
| 2 | `why` розділу показує граматику до уроку (правило style-eng-g6 §3) | e8s1: «…And to talk about what you have been doing.» → «…And to ask a friend: “What have you been doing?”»; e8s2: «And to say what you enjoy doing and what you want to try.» → «And to say: “I enjoy cycling, and I want to try climbing!”» (enjoy + -ing у 4–7 кл. не траплялося); e8s5: «And to tell a story about what had happened.» → «And to tell a story: “When I got to the library, it had closed.”». Решта п'ять `why` — без нової граматики | e8s1, e8s2, e8s5 |
| 3 | e8s1l1 #3: профіль Zofia дослівно повторював профіль Mariia | «I draw comics every week, and I’m into art. I’d like to write about films and books.»; `hint` «Find the words comics and art.», `fbBad`, `fbText`. Питання, варіанти й `correct` ті самі. Узгоджено з e8s1l2 (Zofia малює комікси) | e8s1l1 #3 |
| 4 | e8s1l3 #3: речення на 14 слів | «…for an activity until now. It can also be an activity that has just stopped. Often you can see the result:» | e8s1l3 #3 |
| 5 | Фінал e8s1l7: «Oksana’s class and Emma’s class have started a pen friend club» — клуб існує з 4 кл. (Ms Kravets) | «Oksana’s class and Emma’s class are writing to each other now. Mariia, Andrii and their friends from the penfriend club are writing too.» (продовження e8s1l6: класи листуються через школи) | e8s1l7 intro |
| 6 | Інтро e8s2l1 — прапорець stats (maxReadWords 93 / maxText 88) | Скорочено вступ і питання: «The penfriend club’s topic is healthy living. Ms Kravets asks: …», «What isn’t healthy in their days?». Тепер 87 / 82 — прапорця немає | e8s2l1 #1 |
| 7 | Герої: у школи Оксани немає canteen (e8s6l2, l6), а в e8s3l6 #8 яблука «for the school canteen» | «…the apples were for school lunches» (ключ — told, не змінено) | e8s3l6 #8 |
| 8 | Герої: e8s6l3 #4 — Freya (школа-інтернат в Англії) знаходить у бібліотеці сумку Oksana (Україна) | «Andrii finds a bag in the school library. Daryna’s name is on it.» (одна школа в Kyiv, e8s3); варіанти, `hint`, `fbText` — Daryna, Andrii. `correct` той самий (must be) | e8s6l3 #4 |
| 9 | Назва уроку e8s6l6 «…Ukraine and the UK…», а весь текст — про England (школи Шотландії й інші) | «Schools in Ukraine and England: what’s different?» (як назва проєкту в уроці) | e8s6l6 |
| 10 | Термін: «+ third form» без артикля в e8s3 при «+ the third form» у 7 кл., e8s1, e8s5 | 11 замін «+ third form» → «+ the third form» (`info`, `hint`, `fbBad`, `fbText`; ключі не зачеплено) | e8s3 l3, l6, l7 |
| 11 | requires e8s3 (NOTE verifier-e7s7): у e8s3l3 є «was built» і питання пасиву | + «e7s7l2», «e7s7l3» | e8s3 (розділ) |
| 12 | Шаблонні інструкції | «Complete the review.» (e8s4l6 #9), «Complete the dialogue.» (e8s8l6 #4) → «Complete the sentences.» (як у 7 кл.); «Write might or could.» → «Write the missing word: might or could.» (e8s6l3 #9), «Write much or a bit.» → «Write the missing word: much or a bit.» (e8s8l4 #7) — шаблон + тема, як у «Write the missing word: be allowed to.» | 4 екрани |
| 13 | Однакові `fbOk` у сусідніх оцінюваних екранах | 15 повторів «Well done!» / «Good eye!» поспіль → Brilliant! / Exactly. / Right. / Yes! | e8s1 l5, l6 (2), l7; e8s2 l1, l2; e8s4 l2–l6; e8s5l2; e8s7 l1, l3, l4, l6 |
| 14 | Фінали без підказок на складних завданнях (e8s2l7 — 0 з 6, e8s4l7 — 0 з 7, e8s8l7 — 0 з 9, e8s3l7 і e8s6l7 — по 1; у 7 кл. — 3–8) | 16 нових `hint` (навідне питання, не відповідь): e8s2l7 T2, T3, T6; e8s3l7 T3, T5, T6; e8s4l7 T3, T4, T7; e8s6l7 T3, T6; e8s8l7 T2, T5, T6, T9. Тепер у фіналах 8 кл. від 3 підказок | 5 фіналів |

## 2. `build`
Змінено лише один `build` — e8s1l1 #9 (плитка «a penfriend»). Перебір усіх упорядкованих підмножин плиток і пасток через `SLID_LANG.check(s, st, "en")` (app/lang.js) дав 1 прийняте речення — «I’m looking for a penfriend.». Скрипт лежить у scratchpad, у репозиторій не потрапляє.

## 3. Герої 8 кл. — одна картина (звірено з 7 кл.)
- **Вік (+1 до 7 кл.):** Oksana 14, Dmytro 10, Emma 14, Andrii 14, Mariia 14, Tom 12 (e8s1, e8s4: «Tom, who is twelve»). Суперечностей немає. Zofia 14, Freya 14, Denys 16 — нові.
- **Школа Оксани:** гімназія Years 1–9 (e8s6l1, «is a gymnasium now» — правка verifier-e8s6); у 7 кл. там ще були випускники Year 11 (e7s6). Пояснення «now» є. У 8 кл. Year 10–11 у її школі ніде не згадано. Немає canteen (обід у school hall) — тепер так само і в e8s3l6 (§1 п. 7). Немає форми — e8s6l5, l6.
- **Tom:** swimming club «for a year now» (e8s1l6), «started swimming last year» (e8s2l7) — збігається з 7 кл. (e7s5l3, e7s6l1). Барабани й гітара в шкільному гурті (e8s4); трохи боїться великих хвиль (e8s2l3) — «isn’t afraid of water any more» (e8s1l6) цьому не суперечить.
- **Taras:** athletics з Mr Hnatiuk (e8s2l2 = e7s5l2); фотограф School 5 News (e8s3), відгуки для шкільного журналу (e8s5) — та сама школа в Lviv; Hoverla з татом і Zlata — на вихідних (e8s2l5) і в серпні (e8s7l2). Це два різні походи, суперечності немає.
- **Andrii:** шахи (турнір, e8s6l4; онлайн-клуб з Chloe, e8s8); газета Ms Lysenko (e8s3, e8s7); Liam — penfriend з 5 кл. («for three years», e8s1l4 — 5 → 8 кл.); кузен Maksym (Ottawa, e8s8).
- **Mariia:** гітара від дядька Oleh (e8s4), комікси й Zofia (e8s1), оповідання на конкурс (e8s5), лягає пізно (e8s2) — суперечностей немає.
- **Нові імена 8 кл.:** Zofia, Sean, Noah, Leo, Mr Price, Mr Hughes (e8s1); Ms Kvitka, Mr Pavliuk (e8s3); Mila Lastivka, Olha, Polina (e8s4); Ms Shevchuk, Mrs Clarke (e8s5); Freya, Denys (e8s6); Chloe, Maksym, Isla, Owen, Lily (e8s8). Повторів прізвищ немає (Kvitka — лише Ms Kvitka, e8s4 перейменовано).
- **Уніформа Emma** — white shirt, grey jumper, blue tie: e8s6l3 і l6 = e5s4.

## 4. Терміни й нотація
- **email** без дефіса — скрізь (e-mail — 0). **the internet** з малої — скрізь (Internet — 0). **per cent** — норма; «percent is OK, too» лише в e8s7l4 `info` і в ключі `word` e8s7l4 #11 (D-055: варіант AmE приймається).
- **the third form** — тепер однаково (§1 п. 10). «Present Perfect Continuous», «Past Perfect», «Second Conditional» — назви з glossary.
- «students» (e8s3l6, e8s6l1 для sixth form, e8s8l3 «students from other countries») поряд із «pupils» — обидва слова BrE, ужито доречно (pupils — шкільні діти в England, students — sixth form, ліцей, зустріч клубу). Не правив.

## 5. Повтори граматики між розділами
- should (e8s2l1) — «Do you remember should?» ✓; too much / many (e8s2l2) — «Remember: How much…?» ✓; who / which / that (e8s4l3) — «Remember: people → who / that» (e7s4l4 у requires) ✓; said / told (e8s3l5) — «Remember?» ✓; Past Continuous (e8s5l5) — «Remember “I was running when…”» ✓; First, Then (e8s5l6) — «Remember … from recipes» ✓; comparatives + much / a bit (e8s8l4) — уже з e7s4l5 (у requires). Подано як «Remember», ОК.
- Пасив: e8s3l3 — Present Continuous passive нове; is made / was built — «Is built, was built, is being built» з requires (тепер + e7s7l2, l3).

## 6. Прапорці stats «нетипово для сім'ї» (після правок — 12 уроків 8 кл.)
e8s1l6, e8s2l5, e8s2l6, e8s3l1, e8s3l6, e8s4l2, e8s5l7, e8s6l6, e8s7l5, e8s7l6, e8s8l3, e8s8l4. Жоден не виходить за профіль «7-9» (validate — 0 попереджень). Причини: уроки читання (лист e8s1l6 maxText 92; проєкт e8s6l6 і звіт e8s7l6 — gradedShare 0,8); longWordShare у словникових уроках назв (newspaper, magazine, journalist; guitarist, violinist; nationality, Australian — 0,15–0,18 при межі 0,18); 8 екранів у e8s2l5, e8s2l6, e8s3l6 (межа 6–12); фінал e8s5l7 з довгими умовами (rwps 37). Правок за прапорцями не робив. Прапорець e8s2l1 знято (§1 п. 6).

## 7. Складність: 7 → 8 кл. (звичайні уроки / фінали, сер. ± sd; min–max)

| Метрика | 7 кл. (n = 42 / 7) | 8 кл. (n = 48 / 8) | «7-9» |
|---|---|---|---|
| screens | 10,1 ± 0,8 / 8,1 | 9,9 ± 0,9; 8–12 / 8,5 | 6–12 |
| gradedShare | 0,64 ± 0,07 / 0,88 | 0,64 ± 0,06; 0,55–0,80 / 0,88 | 0,5–0,9 |
| readWordsPerScreen | 37 ± 5; 27–48 / 27 | 38 ± 4; 29–48 / 27 | 6–50 |
| maxReadWords | 70 ± 11 / 43 | 73 ± 10; 54–95 / 44 | ≤ 150 |
| maxText | 65 ± 11 / 35 | 68 ± 10; 49–92 / 36 | ≤ 140 |
| sentenceWords | 6,2 ± 0,7 / 5,4 | 6,4 ± 0,6; 5,1–7,6 / 5,9 | 3,5–12 |
| longWordShare | 0,06 ± 0,03; max 0,124 | 0,08 ± 0,04; max 0,179 | ≤ 0,18 |
| typeVariety | 5,1 ± 0,7 | 5,4 ± 0,5; 4–6 | 2–6 |

Зростання плавне, стрибків немає. Профіль «7-9» **не змінювати**. Найближче до меж: longWordShare (e8s3l1 0,179 при межі 0,18 — словник уроку, евристика складів рахує newspaper / website як «довгі») і readWordsPerScreen (max 48 при межі 50). У 9 кл. ці дві метрики варто стежити; зараз змін не пропоную (рядок STYLE в inbox).

## 8. Тексти читання й TQ-126
Цілі тексти 8 кл.: лист Emma (e8s1l6) ≈ 140, стаття Myroslava (e8s3l6) ≈ 135, відгук Mariia (e8s4l6) ≈ 105, відгук Taras (e8s5l6) ≈ 220, проєкт шкіл (e8s6l6) ≈ 230, звіт (e8s7l6) ≈ 130. Пропозиція TQ-126 для 8 кл. — 230–300: досягає лише e8s6l6. Не подовжував, бо це зміна змісту verified-уроків; після відповіді вчителя — задачі `refine-eng-*`.

## 9. Для точкової повторної верифікації
Ключі змінено лише в п. 1.
1. **e8s1l1 #9** (build): плитка й ключ «a penfriend» (перебір — 1 прийняте речення); **e8s1** загалом — написання penfriend у назві розділу, назвах l1 і l7, значку, `info` l1 #2.
2. **e8s1l1 #3**: новий профіль Zofia, `hint`, `fbBad`, `fbText` — перевірити, що відповідь Zofia однозначна (Noah — football, Leo — history).
3. **e8s6l3 #4**: Andrii / Daryna замість Freya / Oksana; `correct` той самий.
4. **e8s3l6 #8**: «for school lunches».
5. **16 нових `hint`** у фіналах (e8s2l7 T2, T3, T6; e8s3l7 T3, T5, T6; e8s4l7 T3, T4, T7; e8s6l7 T3, T6; e8s8l7 T2, T5, T6, T9) — перевірити, що відповіді не видають.
6. `why` розділів e8s1, e8s2, e8s5; інтро e8s1l7, e8s2l1; e8s1l3 #3 (два речення); назва e8s6l6; e8s3 «+ the third form» і `requires` + e7s7l2, e7s7l3.
Без впливу на зміст: 4 назви інструкцій (§1 п. 12), 15 `fbOk`.

## 10. Не зроблено / наступні кроки
- content/eng/plan.js — синхронізувати куратору плану: `why` e8s1, e8s2, e8s5; назва e8s1 «Penfriends and letters» і урок «Looking for a penfriend: a profile»; назва e8s6l6 «Schools in Ukraine and England: what’s different?» (рядок STYLE в inbox).
- glossary/eng.md: penfriend як норма предмета (TERM в inbox).
- Подовження текстів читання — після TQ-126.
- Плейтест змінених розділів (e8s1–e8s8) — після build оркестратора.
