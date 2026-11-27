# Верифікація e11s1 «Rights, responsibilities and tolerance» (eng, 11 кл., B2)

Верифікатор: verifier-e11s1, 2026-11-26. Скіл content-verify (+ «Англійська»). Файл: `content/eng/g11-e11s1.js`.
Прогін: `validate --section e11s1` — 0 помилок, 0 попереджень (до і після правок); `stats --subject eng` — у e11s1 прапорців «нетипово для сім'ї» немає (reports/style-eng.md, рядки e11s1l1–l7); `playtest.py` — не запущено: Python-модуля playwright у контейнері немає (AGENTS.md §3) — прогін у CI (job browser).

## Вердикт
**Розділ verified** (усі 7 уроків). Критичних ❌ немає. Правок — 2 (мінімальні, неоцінювані тексти) + статуси.

## 1. Факти
| Твердження (екран) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Конвенцію ООН про права дитини ухвалено 1989 (l1 intro) | https://zakon.rada.gov.ua/laws/show/995_021/print («Конвенція… від 20.11.1989»); https://en.wikipedia.org/wiki/Convention_on_the_Rights_of_the_Child («adopted… 20 November 1989») | ✅ |
| Україна ратифікувала 1991 (l1 intro) | https://zakon.rada.gov.ua/laws/show/995_021/print («Конвенцію ратифіковано Постановою ВР № 789-XII від 27.02.91»); https://uk.wikipedia.org/wiki/Конвенція_ООН_про_права_дитини (Постанова № 789-XII, 1991; у статті дві дати лютого — у тексті уроку лише рік) ; facts/hist.md №26 (verified) | ✅ |
| Дитина — кожен до 18 (l1 intro) | Rada print, ст. 1 («до досягнення 18-річного віку, якщо… не досягає повноліття раніше»); en.wikipedia (там само) | ✅ (спрощення допустиме) |
| Права на освіту, відпочинок і гру, висловлювати думку (l1 intro, sort) | Rada print: ст. 28 «визнають право дитини на освіту», ст. 31 «право… на відпочинок і дозвілля, право брати участь в іграх», ст. 12 «вільно висловлювати ці погляди з усіх питань, що торкаються дитини»; uk.wikipedia (ст. 12–17, 28–31) | ✅ |
| International Volunteer Day — 5 December, ООН, 1985 (l5 фінал) | https://en.wikipedia.org/wiki/International_Volunteer_Day (A/RES/40/212, 17 December 1985, 5 December); WebSearch «International Volunteer Day 5 December General Assembly resolution 40/212 17 December 1985» → запис ООН https://digitallibrary.un.org/record/113305?ln=en (A/RES/40/212, 17.12.1985; хост з контейнера не резолвиться — лише сніпет пошуку) | ✅ |
| …в Україні відзначають (l5 фінал) | WebSearch «Міжнародний день волонтера 5 грудня Україна…» / «Указ Президента… День волонтера» → https://www.president.gov.ua/news/u-mizhnarodnij-den-volontera-prezident-nagorodiv-vidznakoyu-101813 (нагородження «у Міжнародний день волонтера», 5.12.2025), https://www.ukrinform.ua/rubric-society/3795855-v-ukraini-vidznacaut-miznarodnij-den-volonteriv.html (сніпети; хости не резолвляться) | ✅ |

unicef.org, ohchr.org, un.org, kmu.gov.ua, ukrinform.ua, president.gov.ua з контейнера недоступні (ENOTFOUND / 403) — первинні сторінки ООН відкрити не вдалося; для 1985 і «відзначають в Україні» друге джерело — результати WebSearch.

## 2. Форми й норма (словники, відкриті curl)
| Форма | Джерело | Позначка |
|---|---|---|
| responsible, responsibility, education, respect — наголос | CD /dictionary/english/responsible, /responsibility, /education | rɪˈspɒn.sə.bəl; rɪˌspɒn.sɪˈbɪl.ə.ti; ˌedʒ.ʊˈkeɪ.ʃən ✅ |
| charity, volunteer, donate, tolerance | CD /charity, /volunteer, /donate, /tolerance | ˈtʃær.ə.ti; ˌvɒl.ənˈtɪər; UK dəʊˈneɪt (US ˈdoʊ.neɪt); ˈtɒl.ər.əns ✅ |
| jump the queue | CD /jump-the-queue | «idiom UK usually disapproving» ✅ |
| washing-up | CD /washing-up | «noun [U] UK … do the washing-up» ✅ |
| rota | CD /rota «mainly UK»; OALD /rota «(British English)» ✅ |
| take turns | OALD /turn_2 «take turns … (British English also take it in turns)»; CD /turn «take turns (UK also take it in turns)» ✅ |
| fair enough | CD /fair-enough «UK informal … B2» ✅ |
| fair share | CD /fair-share «do my fair share of the work» ✅ |
| for one thing | CD /for-one-thing «one reason is» ✅ |
| get back to something | OALD /get-back-to «get back to something — to re[turn to a subject]» ✅ |
| hang the washing out | OALD /washing_1 «hang the washing out (= hang it outside to dry)» ✅ (у тексті «hang out the washing» — розділювана форма) |
| vacuum (verb) | CD /vacuum «verb … (UK also hoover)» ✅ |
| laundry, do the laundry | CD /laundry «B2 … do your laundry» ✅ |
| eye contact, behaviour, fundraiser, people in need | CD /eye-contact, /behaviour «UK (US behavior)», /fundraiser, /in-need ✅ |
| take responsibility for | OALD /responsibility «Will you take responsibility for arranging the food?» ✅ |
| headteacher / head teacher | CD /head-teacher → headteacher «UK» ✅ (двослівне написання допустиме) |
| staffroom | CD /staffroom, OALD /staffroom — одним словом; у розділі «staff room» → **виправлено** (як у e8s6) |
| suggest + -ing / that (should); Not: suggested me to apply, suggested to wait | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/suggest ✅ |
| explain to; Not: explain me | CD Grammar …/explain ✅ |
| backshift; No backshift | CD Grammar …/reported-speech-indirect-speech ✅ |
| Would you mind + -ing; Do you mind if I sit here?; «No, not at all» | CD Grammar …/mind ✅ |

BrE: AmE-правопису й лексики не знайдено (organisation, behaviour, apologised, rubbish, Mum, canteen, at the weekend). IPA, «Listen», літер A/B/C, позиційних посилань — немає. `uk` немає (11 кл.).

## 3–4. Завдання: розв'язок і опора (D-019)
Розв'язано всі оцінювані завдання до перегляду ключа; усі збіглися з ключем. hyp-екрани (l1 #2, l2 #2, l3 #2, l4 #2, l5 #2) — не оцінюються.

| Урок · екран | Звідки відповідь | Друга правильна? | Вердикт |
|---|---|---|---|
| l1 sort | #3 (right / responsibility), hint «You can / You should» | — | ✅ |
| l1 gaps right to / to say / responsible for | #3 | «the right of» — ні | ✅ |
| l1 choice up to you | #6 | — | ✅ |
| l1 word took responsibility / the blame | #6; обидві в ключі | «full responsibility» — двослівне, неприродно для пропуску | ✅ |
| l1 pick right [for] | #3 | — | ✅ |
| l1 stress | #3 `<u>`; CD | — | ✅ |
| l1 фінал read | текст на екрані | — | ✅ |
| l2 sort, gaps manners/behaves/queue | #3 | — | ✅ |
| l2 choice «No, not at all.» | #6 | «Of course not» не серед варіантів | ✅ |
| l2 build Would you mind moving your bag? | #6 | один порядок | ✅ |
| l2 pick [to open] | #6 | — | ✅ |
| l2 word sit / sit down | #6 (приклад) | обидві в ключі | ✅ |
| l2 фінал gaps | #3, #6 | — | ✅ |
| l3 gaps had worked / would / were | #3 | без backshift — «has worked», «will», «are» не дано; хибні неграматичні (she have, will be show, volunteers is/was) — TQ-144 дотримано | ✅ |
| l3 multi had come + came | #5 | have come the day before, had came — неграматичні | ✅ |
| l3 match time words | #7 | друга пара — немає | ✅ |
| l3 gaps the next day / then / there | #7 | — | ✅ |
| l3 build | #7; обидва порядки з «the next day» в ключі; «The next day she said…» — інший зміст і не «Start with She said» | ✅ |
| l3 pick [yesterday] | #7 | — | ✅ |
| l3 фінал gaps | #3, #7, intro (Tomorrow…) | хибні — неграматичні | ✅ |
| l4 match | #3 | — | ✅ |
| l4 gaps admitted / denied / complained | #3 + цитати | — | ✅ |
| l4 multi suggested selling / that they should sell | #6–7; CD Grammar | suggest that + базова форма / Past Simple не перевіряються | ✅ |
| l4 choice explained to us | #7 | — | ✅ |
| l4 build insisted that | #6; обидва порядки в ключі | — | ✅ |
| l4 word denied | #3 | — | ✅ |
| l4 фінал gaps | #3, #6–7 | promise / agree / deny не пастка | ✅ |
| l5 match, gaps for/to/volunteered/make | #3 | — | ✅ |
| l5 gaps kindness / Tolerance / judge | #6 | — | ✅ |
| l5 read Yehor | текст | — | ✅ |
| l5 word tolerance | #6 | toleration — іменник від tolerate, не від tolerant | ✅ |
| l5 stress | #3, #6; CD | — | ✅ |
| l5 фінал IVD | текст на екрані | — | ✅ |
| l6 read reasons | intro + екран | — | ✅ |
| l6 gaps For one thing / For another / That’s why | #3 | — | ✅ |
| l6 match | #5 | друга пара — немає | ✅ |
| l6 gaps turns/share/vacuum/out | #7 | — | ✅ |
| l6 choice, word back | #5 | — | ✅ |
| l6 build I suggest taking turns… | l4 #6, #5 | один порядок; «to take turns» — хибне | ✅ |
| l6 фінал gaps explained / insisted / was / agreed / share | l4 (значення дієслів), intro (Dmytro: «I water the plants too!»), #7 | «agreed to» — правильний, «denied to» — хибний | ✅ |
| l7 Task 1–5 | l1–l6 | — | ✅ |
| l7 Reading 1–3 + main idea | текст на екранах; заголовок Zoriana | — | ✅ |

## 5. Педагогіка, рівень, авторське право
- Структура уроків: проблема → здогадка → теорія → завдання; пояснення англійською в межах B2 (речення ≤ 20 слів, info ≤ 80 слів). Діалоги — репліками в `body` (D-056), ≤ 9 реплік (l6 intro — 9). Тема підозри у крадіжці (фінал) — м'яка, з розв'язкою «не суди поспіхом»; юридичних порад немає.
- `requires` (e6s8l5, e7s1l1, e8s3l4, e8s3l5, e9s4l4, e9s4l5, e9s9l3, e10s1l1, e10s1l6) — усі id існують у content/eng/; «Remember tolerant?» ← e10s1l1, «Can I add something?» ← e9s9l3, blame / misunderstanding ← e10s1l6.
- Авторське право (WebSearch з лапками, збігів немає):

| Фрагмент | Результат |
|---|---|
| “If I have the right to learn, I also have to respect other students' right to learn” | збігів немає |
| “Sorry to bother you, but would you mind closing the window? It's cold” | збігів немає |
| “When Yehor joined our class in September, some people judged him too quickly” | збігів немає |
| “For one thing, I've done the washing-up every evening for four years” | збігів немає |
| “Then a little boy dropped a glass of juice on the table” | збігів немає |
| “phones stay in our bags during lessons, but we can use them in the breaks” | збігів немає |
| “I saw the box on an empty table, so I brought it here for safety” | збігів немає |
| “I started this shelter five years ago. We have found homes for 300 dogs” | збігів немає |
| «Do you mind if I sit here?» (6 слів) | приклад CD Grammar «Mind» — стокова фраза < 12 слів, не знахідка |

## 7. Правки
Зроблені:
1. l7 Task 2: «On Saturday, Bohdan said: … I will sell them here tomorrow» → «On Friday, …» — ярмарок у суботу (l5 intro, Reading part 1), тож «tomorrow» у суботу суперечило сюжету; ключ не змінився.
2. l7 Reading part 3: «staff room» → «staffroom» (CD, OALD; так само в e8s6).
3. Статуси всіх 7 уроків → `verified`; `meta.factcheck` і коментар заголовка оновлено.

Рекомендовані (не блокують): l3 #2 (hyp) — «have found» як хибний варіант формально допустимий без backshift (TQ-144), але екран не оцінюється й питає, що саме написала Zoriana (у статті intro — «had found»); можна в `fbText` додати «(or have found, if it’s still true)».

Потребує людини: нічого нового; TQ-144 (backshift необов'язковий) — уже в docs/teacher-questions.md; `approved` — учитель.
