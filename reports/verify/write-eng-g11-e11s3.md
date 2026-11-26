# Верифікація e11s3 «Leisure: clubs, film, TV and the internet» (eng, 11 кл., B2)

verifier-e11s3, 2026-11-26. Скіл content-verify (розділ «Англійська»). Файл: content/eng/g11-e11s3.js; задача tasks/review/write-eng-g11-e11s3.md.
Мережа сесії: WebFetch і curl відкривають лише *.wikipedia.org, dictionary.cambridge.org, oxfordlearnersdictionaries.com; dovzhenkocentre.org, suspilne.media, detector.media, bbc.com, gazeta.ua, odessa-journal.com, imdb.com, britannica.com — ENOTFOUND / 403 проксі. Сторінки поза Вікіпедією взято з видачі WebSearch (як у write-eng-g10-e10s*), URL нижче — з цих видач.

## 1. Факти

| Твердження (де) | Джерела (відкрито в сесії) | Вердикт |
|---|---|---|
| 2021, Довженко-Центр (Kyiv) за опитуванням кінофахівців склав список 100 найкращих українських фільмів (l3 intro, l3 #5, boss T3) | https://en.wikipedia.org/wiki/List_of_the_100_best_films_in_the_history_of_Ukrainian_cinema («selected in June 2021 by the National Oleksandr Dovzhenko Film Centre… through a poll taken of representatives of the national and international film community»; WebFetch); WebSearch: https://ukurier.gov.ua/uk/news/v-ukrayini-vpershe-sklali-rejting-100-najkrashih-f/ , https://suspilne.media/culture/142099-100-najkrasih-filmiv-v-istorii-ukrainskogo-kino-rejting-dovzenko-centru/ (презентація 24 червня на Книжковому Арсеналі, опитування Довженко-Центру й Спілки кінокритиків, понад 70 фахівців) | ✅ |
| №1 — «Shadows of Forgotten Ancestors», №2 — «Earth» (там само) | en.wikipedia List (№1, №2); https://en.wikipedia.org/wiki/Earth_(1930_film) («#2 … behind only Shadows of Forgotten Ancestors»); https://uk.wikipedia.org/wiki/Тіні_забутих_предків_(фільм) (перше місце в списку); WebSearch: https://donttakefake.com/en/the-100-best-ukrainian-films-in-the-history-of-cinema-were-named-we-present-to-you-the-top-ten , https://odessa-journal.com/public/top-100-rating-of-the-best-films-in-the-history-of-ukrainian-cinema | ✅ |
| «Shadows…» (1965) | en.wikipedia Shadows_of_Forgotten_Ancestors (прем'єра 22.03.1965, Мар-дель-Плата; прокат УРСР 4.09.1965); uk.wikipedia: рік виробництва 1964, вихід 4.09.1965 | ✅ (1965 — рік виходу; деякі джерела дають 1964 — для людини, не блокує) |
| «Shadows…» — award-winning; за твором Mykhailo Kotsiubynskyi («a book») | en.wikipedia (Mar del Plata 1965 Southern Cross; Thessaloniki 1966 Golden Medal; «based on Kotsiubynsky's 1911 novel»); uk.wikipedia (повість Коцюбинського; ті самі нагороди) | ✅ |
| Знімали в Kryvorivnia, a village in the Carpathians (l3 фінал) | en.wikipedia: «location shooting of the village scenes took place in the Carpathian village of Kryvorivnia», павільйони — на кіностудії Довженка; uk.wikipedia: Криворівня й околиці, Жаб'є | ⚠️ «It was filmed in Kryvorivnia» сильніше за джерела → **виправлено**: «Many scenes were filmed in Kryvorivnia» |
| «Earth» (1930) — silent film by Oleksandr Dovzhenko | en.wikipedia Earth_(1930_film) («Silent film», director Alexander Dovzhenko); en.wikipedia List | ✅ |
| Kamianets-Podilskyi — «a city with an old castle above a river» (l5 ч. 1) | https://en.wikipedia.org/wiki/Kamianets-Podilskyi_Castle («surrounded by the Smotrych River canyon»; Old Castle); https://uk.wikipedia.org/wiki/Кам'янець-Подільська_фортеця (острів у каньйоні Смотрича) | ✅ |
| Вигадані: The Lost Bell of Kamianets, The Pyrizhok Café, Moorland Detectives, Quiz Time | подано як вигадані (огляд героя, без вікових позначок і спойлерів) | ✅ |
| Імена за КМУ № 55: Oleksandr Dovzhenko, Mykhailo Kotsiubynskyi, Kamianets-Podilskyi, Kryvorivnia, Kyiv | glossary/eng.md | ✅ |

## 2. Форми й норма (словники, curl у сесії)

| Форма | Джерело, дослівно | Вердикт |
|---|---|---|
| I’m … aren’t I? | https://dictionary.cambridge.org/grammar/british-grammar/question-tags «If the main clause verb is I am, then the negative tag form is aren’t I» | ✅ |
| Let’s … shall we? | там само: «After the imperative with let’s, we can use shall in the tag» | ✅ |
| imperative + tag | там само: «most commonly will but we can also use would, could, can and won’t» — у кожній вправі серед варіантів лише will (поряд do / are) | ✅ |
| reply questions | https://dictionary.cambridge.org/grammar/british-grammar/questions-follow-up-questions «Follow-up questions are sometimes called reply questions… formed using the auxiliary verb or modal verb» | ✅ |
| a two-hour film (однина, дефіс перед іменником) | https://dictionary.cambridge.org/grammar/british-grammar/compounds «compound adjectives containing numbers appear before a noun… a twelve-hour flight» | ✅ |
| well known після be | https://dictionary.cambridge.org/dictionary/english/well-known «well known adjective… Her views on the subject are already well known» | ✅ |
| chat show (also talk show) | https://dictionary.cambridge.org/dictionary/english/chat-show «chat show noun UK (US also UK talk show)» | ✅ |
| binge-watch, gripping, like-minded | CD: «to watch several episodes … one after another»; «so interesting or exciting that it holds your attention»; «share the same opinions, ideas, or interests» | ✅ |
| sign on for (дистрактор l1 #5) | https://dictionary.cambridge.org/dictionary/english/sign-on «(AGREE TO HELP) mainly US (UK sign up) to agree…» — AmE-друга відповідь у пропуску «sign {up\|in\|on} for a free trial» | ❌ → **виправлено**: дистрактор on → out |
| наголос membership, community, moderator, newcomer | CD: ˈmem.bə.ʃɪp, kəˈmjuː.nə.ti, ˈmɒd.ər.eɪ.tər, ˈnjuːˌkʌm.ər — збігається з `stress` і `<u>` | ✅ |
| BrE | programme, theatre, favourite, colourful, grandad, the internet (мала), film/cinema; AmE-правопису й лексики немає (grep); «listen» лише в «a good listener» | ✅ |

## 3. Завдання → відповідь (розв'язано самостійно) і опора (D-019)

| Урок / екран | Моя відповідь = ключ | Опора | Вердикт |
|---|---|---|---|
| l1 #2 choice like-minded | так | hyp: true | ✅ |
| l1 #4 match, #5 gaps, #10 gaps | так; другої пари в match немає | ек. 3 «Club words» | ✅ (#5 — дистрактор on виправлено) |
| l1 #6 choice rules | rule 2 | правила на екрані | ✅ |
| l1 #7 word sign, #8 stress, #9 pick join [to] | так | ек. 3 | ✅ |
| l2 #2 hyp, #4 match (documentary ← e7s4l1), #5 gaps, #9 word subtitles | так | ек. 3; requires e7s4l1 | ✅ |
| l2 #7 sort | так | ек. 3 + e7s4l2 (interval, box office — є у файлі) | ✅ |
| l2 #8 choice, #10 build, #11 gaps | так; build — єдиний граматичний порядок | ек. 6 «For and against»; текст на екрані | ✅ |
| l3 #2 hyp; #4 match; #5 cult; #6 gaps; #8 choice; #9 multi; #10 word minute; #11 pick; #12 gaps | так | ек. 1, 3, 7; #5 — дані на екрані | ✅ |
| l4 #2 hyp; #4 gaps; #5 should; #7 request; #8 match; #9 word haven’t; #10 pick; #11 build; #12 gaps | так; поляризованих дублів і другого модального серед варіантів немає | ек. 3, 6 | ✅ |
| l5 #2 spoiler | так | l1 ек. 3 | ✅ |
| l5 #4 match; #5–#8 читання; #10 order; #11–#12 gaps | так | ек. 3 «Review language», текст | ✅ |
| l5 #9 word give | «award / rate it four stars» теж граматичні | — | ⚠️ → **виправлено**: інструкція «Complete the last sentence of Taras’s review.» (ключ — слово з тексту) |
| l6 #2 hyp; #4 gaps (was → Were you ← l4 «You were…, weren’t you?» + «same auxiliary»); #6 match; #7 choice; #8 word can’t; #9 pick; #11 gaps | так | ек. 3, 5; l4 ек. 3 | ✅ |
| l6 #10 build | ключ мав і «What was it like? Did you?» — неприродно (reply question стоїть одразу після репліки) і суперечить hint; порядок складається з плиток | — | ❌ → **виправлено**: у `answer` лише «Did you? What was it like?», інструкція «First reply with a reply question, then ask a follow-up question.» відсікає інший порядок; інших граматичних порядків із плиток немає (extra «Were» — хибне до went) |
| boss T1–T7, T9 | так | pre: l1–l6 | ✅ |
| boss T8 word didn’t | друге речення «We streamed it at home.» давало «Did you?» як відповідь на нього | — | ⚠️ → **виправлено**: друге речення прибрано, fbBad «Emma’s sentence is negative» |

## 4. Авторське право (≥ 12 слів, WebSearch у лапках)

| Фрагмент | Результат |
|---|---|
| «the camera flies over the castle walls and the narrow streets» (l5) | збігів немає |
| «One advantage of streaming is that you can pause the film» (l2) | збігів немає |
| «I've just signed up for the school film club. Every Friday we watch a film» (l1) | збігів немає |
| «The special effects aren't perfect, but they don't spoil the story» (l5) | збігів немає |
| «hundreds of years ago, the city's biggest bell disappeared, and nobody knows where» (l5) | збігів немає |
| «A girl from my karate club plays the main character» (l6) | збігів немає |
| Близькі до прикладів CD короткі речення: «I’m late again, aren’t I?» (CD «Sorry, I’m late again, aren’t I») і «I can’t stand horror films» → «Can’t you?» (CD «I can’t watch horror movies. B: Can’t you?») | < 12 слів, але pitfalls-content п. 8 (приклади словників не копіювати) → **виправлено**: «I’m in the next scene,» і «I can’t stand musicals.» |

## 5. Педагогіка, рівень, формат
- Будова: проблема (intro) → hyp → теорія → вправи → фінал у кожному уроці; boss — `pre` на кожен урок, питає лише пройдене. Діалоги — репліками в body (D-056), ≤ 9 реплік. Без звуку й імітації аудіювання, без IPA, без літер A/B/C у варіантах, `uk` немає (11 кл.).
- Мова пояснень — B2, речення короткі; складніших за правило пояснень немає.
- Тексти для читання l5: 3 екрани (≤ 190 слів кожен) — у межах П1407 с. 21.
- stats: l4, l6 sentenceWords z −2,8 / −3,2 (короткі теги — предмет уроку), l5 — урок читання (повний текст); пояснення автора прийнято.
- l3 фінал: «three-part film evening… Each evening ends» — нелогічно → **виправлено** «Each part ends».
- requires: e7s4l1, e7s4l2, e7s4l6 (g7-e7s4.js), e8s1l4 (g8-e8s1.js), e9s4l2 (g9-e9s4.js), e9s5l6 (g9-e9s5.js) — усі існують; відповідають plan-eng-g10-11 §6 (+ e9s5l6 для клубів).

## 6. Прогін
- `node tools/validate.mjs --section e11s3` — 0 помилок, 0 попереджень (після правок).
- `node tools/stats.mjs --subject eng` — див. §5.
- `python3 tools/playtest.py --section e11s3` — **не запущено**: у контейнері немає Python-модуля playwright; потрібен прогін у CI (job browser).

## 7. Правки (усі зроблено, мінімальні) — 8 змістових (п. 1–7) + статус
1. l1 #5: дистрактор `on` → `out` (sign on — AmE-друга відповідь, CD).
2. l3 #12: «It was filmed in Kryvorivnia» → «Many scenes were filmed in Kryvorivnia»; «Each evening ends» → «Each part ends».
3. l4 #8 match: «I’m late again,» → «I’m in the next scene,» (приклад CD).
4. l5 #9 word: інструкція «Complete the last sentence of Taras’s review.» (award / rate).
5. l6 #8 word: «horror films» → «musicals» (body і fbText; приклад CD).
6. l6 #10 build: прибрано «What was it like? Did you?» з `answer`, інструкція задає порядок.
7. boss T8: прибрано «We streamed it at home.», fbBad уточнено.
8. status усіх 7 уроків → `verified`; meta.factcheck заповнено; коментар файлу оновлено.

## Вердикт
Усі 7 уроків (e11s3l1–l7) — **verified**: відкритих ❌ і ⚠️ немає. Для людини: (а) рейтинг Довженко-Центру підтверджено Вікіпедією (en, uk) і сторінками з видачі WebSearch — першоджерело dovzhenkocentre.org із сесії недоступне; (б) плейтест — у CI; (в) рік «Shadows…» 1965 (вихід) vs 1964 (виробництво) — за бажанням учителя.
