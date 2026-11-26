# Синхронізація стилю: англійська 10 кл. (style-eng-g10)

Дата: 2026-11-26 · скіл `style-sync` · розділи e10s1–e10s8 (усі `verified`; статус і id не змінено).
База diff: HEAD 02f2e1d (правки не закомічені; `git diff HEAD -- content/eng/g10-*.js`). Змінено лише content/eng/g10-e10s1…e10s8.js. g11, dge10, plan.js, style/, decisions.md не чіпав.
Перевірка: `node tools/validate.mjs --section e10s1…e10s8` — 0 помилок у кожному; 1 попередження (e10s4l6 readWordsPerScreen 67 > 65, див. §1 п. 1 і §6). `node tools/stats.mjs --subject eng` → reports/style-eng.md. Build не запускав.
Еталон процесу — reports/style/eng-g9.md.

## 1. Що змінено

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | Обсяг текстів читання 10 кл. — 350–400 слів (П1407 с. 21). Лічба лише уривків, без питань: e10s2l3 234, e10s3l1 310, e10s4l6 334 (решта: e10s1l7 352, e10s5l5 352, e10s6l6 368, e10s7l7 350, e10s8l2 371) | Дописано речення **без нових фактів** (думки й побут героїв), кожне в кінці уривка: **e10s2l3** (автор Kyrylo): ч. 1 «In our flat, the whole family watches it on TV. Everyone cheers when the Ukrainian team appears, and my little sister always waves a small flag. For me, that moment shows what the Games are about: people from many countries in one place.»; ч. 2 «When I read about this team, I understood what team spirit really means. The athletes supported each other, they refused to give up, and they made the whole country proud. For me, their story is the best part of this article.»; ч. 3 «I was too young to remember Euro 2012, but my dad still often talks about the exciting final in Kyiv. And Kharlan is my sister’s role model: she started fencing lessons because of her.» → **352**. **e10s3l1**: ч. 1 (Taras) «It was so filling that I didn’t want anything else for the rest of the day!»; ч. 2 (Emma) «Last year, Isla sent me a photo of the haggis on her family’s table. I’d love to try it one day!»; ч. 3 (Emma) «Now I always look for the new spelling on the pack, and I tell my friends why it matters.» → **366**. **e10s4l6**: ч. 2 «Next summer, he wants to go back there with his little sister, Zlata.» (Zlata — сестра Тараса, e5s1); ч. 3 «Small actions like these really make a difference.» → **355**. maxText після правок ≤ 137 (межа 190). Ключі й варіанти не змінено | e10s2l3 #4–#6, e10s3l1 #3–#5, e10s4l6 #4–#5 |
| 2 | Герої: Kateryna — подруга Mariia в Kharkiv (e4s8, style-eng-g4-5; так само e10s2l6 і e11s3), а в e10s8l4 вона в класі Andrii (табір Ms Lysenko) | → **Daryna** (однокласниця Andrii, Kyiv): l4 `word` body «Ms Lysenko gives Daryna the camp form», фінал уроку «Daryna lost her form». Ключі (it in / it out, for it) не зачеплено | e10s8l4 |
| 3 | Герої: Nazar — хлопець із села Оксани (e4s6, ровесник Оксани), а в e10s8l2 Nazar — друг 18-річного Denys, складав НМТ | → новий **Ruslan** (у предметі не траплявся): текст ч. 1, `hint`, `fbText`. Правильний варіант «Denys’s friend took the NMT outside Ukraine» — без імені, не змінено | e10s8l2 #4 |
| 4 | Герої: прізвище Tkachuk уже є (Ms Tkachuk — стоматологиня, e5s1); новій героїні його не даємо (як Hnatiuk → Hnatyshyn у verifier-e10s8) | Iryna Tkachuk → **Iryna Kostenko** (Kostenko в предметі не траплялося): intro l6, підпис цитати l6, коментар у шапці файлу | e10s8l6 |
| 5 | Bohdan у e10s8l6: «I’m thinking of becoming a wind turbine technician», а у фіналі T9 — «…an app developer» | Усі три варіанти T9 і `fbText` → «a wind turbine technician». `correct: 2` той самий; граматична пастка (thinking to / of become / of becoming) та сама | e10s8l7 T9 |
| 6 | День народження Ostap — 22 July (e5s8), а в e10s1l3 (тижні 1–4, вересень) лист Тараса «Yesterday was Ostap’s birthday party.» (STYLE verifier-e10s1) | → «In July, Ostap had a birthday party. That day, my athletics training finished at seven…». Решта уроку (шкали часу, ключі) не залежить від «yesterday» | e10s1l3 #0 |
| 7 | «Ostap sees his old neighbour, Mr Lukashuk» (l5) — двозначно (колишній?); у тексті l5 «our neighbour Mr Lukashuk» | → «Ostap sees his neighbour Mr Lukashuk» | e10s1l5 |
| 8 | Термін: «past participle» у e10s4 (4 з 5 місць), у 7–9 кл. — «the third form» (у e9s2l5 — один місток «past participle (the third form)») | Місток «will have + past participle (the third form)» у `info` l5 лишив; решта → «the third form»: `info` l5 (won’t have), `fbText` l5, outro `learned` l5, `fbText` l6 (was + the third form). Ключів немає | e10s4 l5, l6 |
| 9 | Фінали без підказок: e10s2l7, e10s3l7, e10s4l7, e10s5l7, e10s8l7 — 0 (e10s1l7 — 5, e10s6l7 — 9, e10s7l7 — 10; у 9 кл. після синхронізації — від 3) | 15 нових `hint` (по 3 у кожному з п'яти фіналів; навідне питання чи правило, не відповідь) — повний текст у §2 | 5 фіналів |
| 10 | Однакові `fbOk` у сусідніх екранах (16 повторів «Well done!» / «Good eye!» / «Right.» / «Exactly.») | → «Brilliant!» (15) / «Correct!» (1) — слова з набору 7–9 кл. Повторів поспіль тепер немає | e10s1l2, e10s2 l1, l5, e10s3 l2, l3, l6, e10s5 l3, l7, e10s6 l4, l5, e10s7 l1, l2, l6, l7, e10s8 l4, l5 |

Без правок (перевірено): шаблонні інструкції 10 кл. збігаються з 7–9 кл. (Complete the sentences. / Fill in the gaps. / Read and choose. / Find the mistake. / Match the halves. …); `why` розділів — без нової граматики; назви розділів і `why` збігаються з plan.js; назви уроків — крім e10s4l5 (§8).

## 2. Нові `hint` (повний текст, для верифікатора)
| Завдання | Hint |
|---|---|
| e10s2l7 T2 (keeps training / refused to give up / managed to finish) | Look at the verb before each gap: keep, refuse, manage. Which pattern goes with each one? |
| e10s2l7 T4 (remember to bring / forget watching / stopped to buy) | In each sentence, is it a job to do, a memory or the reason for stopping? |
| e10s2l7 T7 (Kharlan won two medals in Paris) | How many medals did Kharlan win in Paris? And how many does she have in total? |
| e10s3l7 T2 (prefer … to; would rather have) | Remember the patterns: prefer A … B, and would rather + which form of the verb? |
| e10s3l7 T4 (multi used to / would) | Find the states and the actions. Which of them can go with would? |
| e10s3l7 T9 (used to / is getting used to / used to having) | In each sentence, is it a past state, something that is becoming normal or something that is normal now? (порядок навмисно не той, що в пропусках) |
| e10s4l7 T3 (is going to / is likely to / is unlikely to) | Can Taras see the clouds? And what comes after be likely and be unlikely? |
| e10s4l7 T7 (will have planted / until / will have cleaned) | Will the action be finished before the time, or will it go on all the time up to it? |
| e10s4l7 T8 (the Carpathian National Nature Park) | Remember the dates in the article about national parks. |
| e10s5l7 T3 (was painted / famous for) | Did the painting do the action? And which preposition goes with famous? |
| e10s5l7 T5 (multi had painted / had been painting) | Is the story about now or about the past? Which forms can show how long, up to a moment? |
| e10s5l7 T6 (had painted / had known) | Is it a finished result or an action that went on? Is know an action or a state? |
| e10s8l7 T4 (apply to / for, find out, hand in) | Is it a place or the thing you want? Then remember the phrasal verbs for information and forms. |
| e10s8l7 T5 (multi: fill the form in, fill it in, looking for it) | Is it a phrasal verb or a verb with a preposition? Then check where the pronoun goes. |
| e10s8l7 T7 (until / by / since) | Does it continue, is it a deadline or is it a starting point? |

Жоден не стоїть у `pick` (пастка verifier-style-eng-g9) і не є питанням «так / ні», що відкидає один дистрактор.

## 3. Герої 10 кл. — одна картина (звірено з 4–9 кл.)
- **Вік (+1 до 9 кл.):** Oksana, Emma, Andrii, Mariia, Taras — 16; Tom 14; Dmytro 12 (e10s8 «My brother Dmytro is 12»); Marko (кузен Ostap) 13 — у e10s2 і e10s6 «little cousin», без суперечностей; Arsen 17, Denys 18, Leah 19. Emma — Year 11 (GCSE), Taras — Year 10.
- **Oksana:** з 10 кл. — ліцей у Poltava (e10s8; план із e8s6, e9s7l6); сільська еко-група в Zelena Dolyna (e10s4) — не шкільна, суперечності немає; щолипня в Odesa (e10s5 = e5s6, e9s5, e9s8); карате (перша медаль у десять, e10s2) не суперечить «karate з дев'яти» (e9s1); мрія — ветеринарна медицина (e10s8 = vet, e9s1, e9s7).
- **Taras:** Lviv, School 5, athletics (e10s1, e10s2), фото; сестра Zlata (e5s1 = e10s1, e10s4); Світязь «two summers ago» (e10s4 = e8s7). Taras і спорт у 4–6 кл. — відкрито, як у NOTE style-sync g7.
- **Ostap:** Lviv, Plast, Bright Radio; день народження в липні (§1 п. 6); Mr Lukashuk — сусід (§1 п. 7).
- **Andrii:** клас Ms Lysenko в Kyiv (Daryna, Zoriana, Kyrylo, Bohdan); Bohdan — друг з початкової школи (e10s1), хоче стати wind turbine technician (e10s8, §1 п. 5).
- **Mariia:** Kharkiv; Kateryna й Artem — її знайомі в Kharkiv (e10s2l6, e11s3); Kateryna з класу Andrii прибрано (§1 п. 2).
- **Emma:** England; Isla (Edinburgh), Orysia (з 10 кл., її клас), Mr Hill, Sam, Megan (e10s5) — нові, імена не повторюються.
- **Нові 10 кл. (у 4–9 кл. не трапляються):** Artem, Ivanna, Mr Lukashuk (e10s1), Orysia (e10s3), Mr Hill, Priya, Sam, Megan (e10s5), Arsen, Leah, Iryna Kostenko, Viktor Hnatyshyn, Ruslan (e10s8). Artem є і в g11 (e11s3, e11s4) — та сама людина (Kharkiv), узгоджено.
- **Лишається відкритим (не правив):** Leah — «Emma’s cousin», а в e5s1 Emma каже «I’ve got one cousin, Jack». Проте вже в 5 кл. (листівка до Нового року) Emma пише «My cousins were there too», тож суперечність давня (4–5 кл.), і Leah її не створює. Для людини чи куратора героїв — рядок в inbox.

## 4. Терміни й нотація
- **the third form** — однаково з 7–9 кл. (§1 п. 8); один місток «past participle (the third form)» (e10s4l5), як e9s2l5.
- **email** без дефіса, **the internet** з малої (e10s6, e10s8) — однаково; e-mail, Internet — 0. **penfriend** — скрізь; «pen friend», «pen pal» — 0. chat show / talk show у 10 кл. не трапляються.
- **Mariia Prymachenko** — 14 разів, однаково (e10s5; «Maria» — 0). Рішення про правило «КМУ № 55 і для історичних осіб» — TERM verifier-e10s5, уже в inbox.
- «Kiev» — один раз, у лапках як старе написання на упаковках (e10s3l1, свідомо).
- programme (TV, e10s5) / program (комп'ютерна, e10s6) — BrE.

## 5. Прапорці stats «нетипово для сім'ї» (після правок — 7 уроків 10 кл.)
e10s1l7, e10s3l1, e10s4l6, e10s5l5, e10s8l2 (rwps 63–67, maxText до 183) — уроки читання й фінал з повним текстом 350–400 слів; e10s7l1 (longWordShare 0,158: republic, autonomous, constitution) і e10s7l7 (12 екранів, sentenceWords 8,3) — у межах профілю. За профіль виходить лише **e10s4l6 readWordsPerScreen 67 > 65** — після доведення тексту до 355 слів (§1 п. 1): 10 екранів, із них три уривки по 113–128 слів. Скоротити без втрати обсягу можна лише перевірений текст інших екранів — не робив; пропозиція до профілю — §6.
Сім'я «10-11» у stats змішує 10 кл. (48 уроків) і неповний 11 кл. (36), тому z-оцінки зсунуті; ENGINE-пропозиція (z у межах класу або лише при |z| ≥ 3) — та сама, що в style-eng-g6/g7.

## 6. Складність: 7 → 8 → 9 → 10 кл. і перше калібрування профілю «10-11»
Звичайні уроки / фінали; сер. ± sd, min–max (після правок).

| Метрика | 8 кл. (48 / 8) | 9 кл. (54 / 9) | 10 кл. (48 / 8) | 11 кл. зараз (36 / 6) | «10-11» зараз | Пропозиція |
|---|---|---|---|---|---|---|
| screens | 9,9 ± 0,9 / 8,5 | 10,4 ± 0,8 / 8,9 | 11,1 ± 0,7; 9–12 / 9,9 | 11,2; 10–12 / 10 | 6–12 | без змін |
| gradedShare | 0,65 / 0,88 | 0,66 / 0,89 | 0,65 ± 0,06; 0,55–0,82 / 0,89 | 0,64; 0,50–0,83 / 0,90 | 0,5–0,9 | без змін |
| readWordsPerScreen | 38 ± 4; 29–48 | 39 ± 5; 30–49 | 44 ± 8; 35–67 (читання 60–67) / 34 | 47 ± 9; 36–65 | 8–65 | **8–70** |
| maxReadWords | 73 ± 10 | 73 ± 10 | 92 ± 20; 64–140 / 73 (до 186) | 100 ± 26; до 166 | ≤ 200 | без змін |
| maxText | 68 ± 10 | 68 ± 10 | 88 ± 21; 60–137 / 68 (до 183) | 96 ± 27; до 161 | ≤ 190 | без змін |
| sentenceWords | 6,4 ± 0,6 | 6,5 ± 0,6 | 7,4 ± 0,7; 6,0–8,5 / 7,0 | 7,5; 5,0–8,8 | 4–16 | 4–13 (на розсуд) |
| longWordShare | 0,080; max 0,179 | 0,082; max 0,175 | 0,076; max 0,158 | 0,093; max 0,19 | ≤ 0,24 | ≤ 0,22 (на розсуд) |
| typeVariety | 5,4 | 5,5 | 5,7; 5–6 / 4,9 | 5,8 | 2–6 | без змін |

- Перехід 9 → 10 кл. — свідомий стрибок програми (B1 → B2, тексти 260–350 → 350–400 слів, П1407 с. 21): rwps +5, maxText +20, sentenceWords +0,9, screens +0,7. Між розділами 10 кл. — рівно, стрибків немає (rwps звичайних уроків 35–49, уроків читання 60–67).
- **Профіль змінювати лише рішенням у decisions.md.** Пропозиції (рядок STYLE в inbox): `eng."10-11".readWordsPerScreen` [8, 65] → [8, 70] — урок читання з текстом 350–400 слів у трьох уривках на 10–11 екранах дає 60–67, а для 11 кл. (400–450) буде більше; sentenceWords 16 і longWordShare 0,24 мають великий запас (факт 8,8 і 0,19), їх можна звузити до 13 і 0,22, але краще після 11 кл. Решта — без змін; повторне калібрування — style-eng-g11.

## 7. Для точкової повторної верифікації
Ключі (`correct`, `{*…}`, `answer`, `tiles`, `extra`) не змінено ніде. Змінено варіанти одного завдання (e10s8l7 T9 — лише назва професії).
1. **e10s2l3** — три доповнені уривки (§1 п. 1): у варіантах не з'явилося другої правильної відповіді (ч. 1: «opening ceremony is at the end» лишається хибним; ч. 2: «Ukraine came first» хибне; ч. 3 і питання про весь текст — без змін). Нові речення без дат і чисел; «role model», «team spirit», «refuse to give up» — лексика розділу.
2. **e10s3l1** — три доповнені уривки (варіанти: banosh; Burns’s birthday; butter / spelling 2022 — не зачеплено).
3. **e10s4l6** — два речення (Zlata, «Small actions…»); варіанти ч. 2 і ч. 3 не зачеплено.
4. **e10s8**: l2 Nazar → Ruslan (текст, hint, fbText); l4 Kateryna → Daryna; l6 Iryna Tkachuk → Iryna Kostenko; **l7 T9** — «a wind turbine technician» у трьох варіантах і fbText (`correct: 2`).
5. **e10s1l3 #0** — «In July, Ostap had a birthday party. That day, …»; **e10s1l5** — «his neighbour Mr Lukashuk».
6. **e10s4** — 4 заміни «past participle» → «the third form» (`info` l5, `fbText` l5, `learned` l5, `fbText` l6).
7. **15 нових `hint`** (§2) — перевірити, що відповіді не видають (особливо e10s2l7 T7, e10s3l7 T4, e10s5l7 T3, e10s8l7 T7).
Без впливу на зміст: 16 замін `fbOk`.

## 8. Не зроблено / наступні кроки
- content/eng/plan.js — куратору плану: e10s4 урок 5 у плані «By 2050 we will have…: the Future Perfect», у файлі «By 2030 we will have…» (у тексті уроку — «by 2030»). Рядок STYLE в inbox.
- Профіль «10-11» — §6, рядок STYLE в inbox (decisions.md — людина чи куратор).
- Leah / «one cousin, Jack» — для куратора героїв (§3).
- Автору dge10 (паралельно): Kateryna — Kharkiv, не клас Andrii; Bohdan — wind turbine technician; «the third form» — рядок в inbox.
- Плейтест e10s1–e10s8 — після build оркестратора (у контейнері немає Python-модуля playwright — лише CI).
