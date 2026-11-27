# Верифікація e8s1 «Pen friends and letters» (eng, 8 кл.)

Верифікатор: verifier-e8s1, 2026-11-25. Файл: content/eng/g8-e8s1.js. Задача: tasks/review/write-eng-g8-e8s1.md.
Скіл: content-verify (§2–§7 + «Англійська»). Усі джерела нижче відкрито в цій сесії (curl через проксі до CD / OALD / Wikipedia; WebSearch). learnenglish.britishcouncil.org з контейнера не резолвиться (curl 000, WebFetch ENOTFOUND) — цитати з нього взято з видачі WebSearch.

**Вердикт: усі 7 уроків (e8s1l1–l7) → `verified`.** Зроблено 2 правки (обидві ❌ «друга правильна відповідь»). Відкритих ❌ і ⚠️ немає. `validate --section e8s1` — 0 помилок, 0 попереджень. Плейтест не запускався: у контейнері немає Python-модуля playwright — браузерний прогін лише в CI (job browser).

## 1. Факти

Фактів про країни, дат і чисел, що потребують джерела, у розділі немає (лише назви Poland, Wales, England, Dublin, Kyiv, Kharkiv, Chernihiv — написання за glossary/eng.md). Правила безпеки онлайн (l1 екр. 6) — загальні поради, відповідають МП-ІМ с. 30 («онлайн-взаємодія»), без посилань на організації.

| Твердження | Джерела | Вердикт |
|---|---|---|
| Канон героїв: Oksana Melnyk, Mariia Koval (прізвища) | content/eng/g4-e4s1.js (рядки 547, 707) | ✅ |
| Oksana знає Emma з 10 років → «for four years» у 14 | e7s1 «Oksana’s known Emma for three years» (13 р.); inbox NOTE (герої) | ✅ |
| Liam — друг Andrii за листуванням з 5 кл. → «three years» | inbox NOTE; e5s10 | ✅ |
| Sofiia — сестра Andrii, Café Smachno (Kyiv); бабуся й дідусь Andrii у Chernihiv; мама Mariia — dentist; Halyna — найкраща подруга Oksana | inbox NOTE (герої) writer-e5s3, writer-e5s1 | ✅ |
| Tom (12) ходить у swimming club рік — раніше не плавав (e5s6, e5s9) | inbox NOTE verifier-e5s9; e7s3 Tom (11) | ✅ розвиток героя, не суперечність («He isn’t afraid of water any more») |

## 2. Форми, норма (словники)

| Форма / вжиток | Джерела (URL, дослівна позначка) | Вердикт |
|---|---|---|
| pen friend (BrE) | CD pen pal «( UK pen friend )» — https://dictionary.cambridge.org/dictionary/english/pen-pal; OALD pen pal «(British English also penfriend)» — https://www.oxfordlearnersdictionaries.com/definition/english/pen-pal | ✅ (див. §5 — у e4s1 «penfriend») |
| email (одне написання) | CD «email noun ( also e-mail )» — https://dictionary.cambridge.org/dictionary/english/email; OALD «email noun (also e-mail)» — https://www.oxfordlearnersdictionaries.com/definition/english/email_1 | ✅ |
| Present Perfect Continuous: have / has been + -ing; recent past activity | CD Grammar «We use the present perfect continuous to talk about a finished activity in the recent past… focuses on the activity» — https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-continuous-i-have-been-working | ✅ |
| PP vs PPC: «Sometimes we can use either form… I’ve lived here for 20 years. I’ve been living here for 20 years»; completed event → simple, ongoing → continuous | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-or-present-perfect-continuous | ✅ (l3 екр. 5 так і каже) |
| know без continuous: «We don’t use the continuous form with verbs of mental process (know, like, understand, believe)… Not: They haven’t been knowing» | CD Grammar (той самий URL) | ✅ |
| how many → simple, how long → continuous: «questions beginning ‘How much…’ and ‘How many…’ naturally elicit this form»; таблиця «She’s read ten books this summer» (says how many) / «She’s been reading that book all day» (says how long) | British Council LearnEnglish — https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous і коментарі вчителів (https://learnenglish.britishcouncil.org/comment/187933), через WebSearch | ✅ |
| Question tags: «If the main clause verb is I am, then the negative tag form is aren’t I: Sorry, I’m late again, aren’t I?»; є й позитивний тег до позитивного речення («You’re a graphic designer, are you?») | CD Grammar — https://dictionary.cambridge.org/grammar/british-grammar/question-tags | ✅ (хибні теги в розділі — лише граматично неможливі) |
| Balanced tags (positive → negative, negative → positive); «Clever, aren’t I?» (England) | en.wikipedia Tag question — https://en.wikipedia.org/wiki/Tag_question | ✅ |
| each other «A2 used to show that each person in a group of two or more people does something to the others», «( also one another )» | CD — https://dictionary.cambridge.org/dictionary/english/each-other; OALD «to show that each member of a group does something to or for the other members… one another» — https://www.oxfordlearnersdictionaries.com/definition/english/each-other | ✅ (one another у ключах `word`) |
| be into = «B1 enthusiastic about or interested in» | CD into (INTEREST) — https://dictionary.cambridge.org/dictionary/english/into; OALD «be into something (informal) to be interested in» — https://www.oxfordlearnersdictionaries.com/definition/english/into | ✅ |
| Best wishes — «a polite way of finishing a letter to a person who you know quite well» | CD — https://dictionary.cambridge.org/dictionary/english/best-wishes; OALD wish «With best wishes … (= for example, at the end of a letter)» — https://www.oxfordlearnersdictionaries.com/definition/english/wish_2 | ✅ |
| Love — «A2 [U] informal (also love from)… used before your name at the end of letters» | CD — https://dictionary.cambridge.org/dictionary/english/love; OALD «love from / (lots of) love (from) (informal) used at the end of a letter» — https://www.oxfordlearnersdictionaries.com/definition/english/love_1 | ✅ |
| Yours sincerely — «B1 used to end a formal letter»; «Yours sincerely/faithfully (British English)» | CD — https://dictionary.cambridge.org/dictionary/english/yours-sincerely; OALD yours — https://www.oxfordlearnersdictionaries.com/definition/english/yours | ✅ |
| Take care — «(informal) used when saying goodbye» | OALD care_1 — https://www.oxfordlearnersdictionaries.com/definition/english/care_1 | ✅ (одне джерело, але це не факт, а формула, і її протиставлення в розділі немає) |
| hear from — «a letter, email, or phone call from that person» | CD — https://dictionary.cambridge.org/dictionary/english/hear-from; OALD hear (phrasal verb hear from somebody) — https://www.oxfordlearnersdictionaries.com/definition/english/hear | ✅ |
| <u>pro</u>file | CD «/ˈprəʊ.faɪl/» — https://dictionary.cambridge.org/dictionary/english/profile; OALD «/ˈprəʊfaɪl/» — https://www.oxfordlearnersdictionaries.com/definition/english/profile_1 | ✅ |
| practise (BrE дієслово) | CD «practise verb UK ( US practice )» — https://dictionary.cambridge.org/dictionary/english/practise; OALD «practise (British English) (North American English practice)» — https://www.oxfordlearnersdictionaries.com/definition/english/practise | ✅ |
| learnt | CD «learned or UK also learnt» — https://dictionary.cambridge.org/dictionary/english/learn; OALD «(especially British English) past participle learnt» — https://www.oxfordlearnersdictionaries.com/definition/english/learn | ✅ (learned ніде не хибний варіант) |
| swum | CD «past participle swum» — https://dictionary.cambridge.org/dictionary/english/swim | ✅ (форма є в intro l3) |
| family + plural verb у BrE (для правки 1) | CD family «A new family has/have moved» — https://dictionary.cambridge.org/dictionary/english/family; OALD family «[countable + singular or plural verb]» — https://www.oxfordlearnersdictionaries.com/definition/english/family_1 | ❌ → виправлено (§4) |
| keen on (UK), mad about (mainly UK informal, B1), crazy about, fond of (B1) (для правки 2) | CD keen «She’s keen on (playing) tennis… UK» — https://dictionary.cambridge.org/dictionary/english/keen; OALD keen «He’s particularly keen on football» — https://www.oxfordlearnersdictionaries.com/definition/english/keen_1; CD mad «be mad about someone/something B1 mainly UK informal» — https://dictionary.cambridge.org/dictionary/english/mad; CD crazy «be crazy about someone/something» — https://dictionary.cambridge.org/dictionary/english/crazy; CD fond «be fond of… B1 to like someone or something very much» — https://dictionary.cambridge.org/dictionary/english/fond | ❌ → виправлено (§4) |

BrE у тексті: AmE-правопису й лексики не знайдено (practise, learnt, Mr без крапки, flat, «has got», «by post», «head teacher»). Без IPA, без «Listen / You hear», без літер A/B/C в `opts`, без позиційних посилань, без `uk` (8 кл.). Діалог Liam–Andrii (l4 intro) — репліками в `body` без типу `dialog` — відповідає D-056 (inbox 2026-11-25, orchestrator).

## 3. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Результат |
|---|---|
| «Sorry I haven’t written for ages. I’ve been training for a big swimming competition» | дослівних збігів немає |
| «I’ve been learning English for five years, and I’ve been drawing comics since I was ten» | немає |
| «We’ve been writing emails to each other for four years, but a paper letter is special» | немає |
| «has been collecting books for the school library, and I’ve been helping» | немає |
| «has asked us to write letters by post this term» | немає |
| «A pen friend lives in another town or country. You write letters or emails to them» | немає (найближче — British Council «Do you have a penfriend who you write emails or letters to?», інше речення) |
| «My coach says I’ve been swimming much faster since the summer» | немає |
| «I’ve been practising the piano all week, and my fingers are tired» | немає |
| «the two classes can write to each other through our schools» | немає |

## 4. Відповіді й опора (D-019)

Кожне завдання розв’язано до перегляду `correct`/`answer`; збіг з ключем, крім двох знахідок нижче.

| Завдання | Моя відповідь / звідки (опора) | Вердикт |
|---|---|---|
| l1 #3 choice: найкращий друг для Mariia | Zofia — профілі на екрані (drawing, comics) | ✅ |
| l1 #4 match (4 пари) | перебрано всі праві для кожного лівого — друга доречна пара відсутня; питальні слова + екр. 2 | ✅ |
| l1 #5 gaps Do/do/Does/**does** | Present Simple (5 кл.). **Було «Where {does\|do} your family live?» — «do your family» граматичне в BrE (CD «has/have», OALD «singular or plural verb»), а стояло хибним варіантом** | ❌ → виправлено: «What music {does\|do} your best friend like?», hint і fbText оновлено (без «де живе» — щоб не суперечити наступному екрану про безпеку) |
| l1 #7 multi: first name, age, hobbies | екр. 6 | ✅ |
| l1 #8 choice: into = like a lot | екр. 2 | ✅ |
| l1 #9 build «I’m looking for a pen friend.» | єдиний порядок; пастка «to» неграматична; екр. 2 | ✅ |
| l1 #10 word «I’m ___ chess…» | into / interested in (екр. 2). **Не прийнято keen on, mad about, crazy about, fond of — природні BrE-відповіді на «likes … a lot»** | ❌ → виправлено: додано в `answer` |
| l1 #11 gaps live, into, interested, looking, to write | екр. 2; хибні варіанти неграматичні | ✅ |
| l2 #2 hyp | здогадка перед теорією | ✅ |
| l2 #4 gaps have, has, working, have | екр. 3 | ✅ |
| l2 #6 build «How long have you been drawing?» | екр. 5; єдиний порядок (keepCase) | ✅ |
| l2 #7 word been | екр. 3 | ✅ |
| l2 #8 choice «I’ve been learning…» | екр. 3, 5; хибні — неграматичні | ✅ |
| l2 #9 pick [play] | екр. 3 «been + -ing» | ✅ |
| l2 #10 gaps been, have, learning, Have | екр. 3, 5 | ✅ |
| l3 #2 choice: swimming every morning | уривок на екрані | ✅ |
| l3 #4 choice «I’ve been playing football in the rain.» | екр. 3 | ✅ |
| l3 #6 gaps swum, known, been reading, read | екр. 5 (how many → третя форма; know → без -ing; still reading → -ing); swum — в intro | ✅ (TQ-142: пари live/learn/work + for/since не протиставлено) |
| l3 #7 pick [knowing] | екр. 5 | ✅ |
| l3 #8 build «What have you been doing?» | екр. 3; пастка did неграматична | ✅ |
| l3 #9 word painting | екр. 3 (Your hands are blue! – I’ve been painting) + опис на екрані | ✅ |
| l3 #10 gaps practising, learnt, been watching, has | екр. 3, 5; learned не запропоновано — другої відповіді немає | ✅ |
| l4 #2 hyp | здогадка | ✅ |
| l4 #4 gaps don’t you, doesn’t she, don’t they | екр. 3 | ✅ |
| l4 #6 choice does he | екр. 5; cousin = Sean (intro) | ✅ |
| l4 #7 build «You’re fourteen, aren’t you?» | екр. 5; пастка isn’t | ✅ |
| l4 #8 pick [doesn’t] | екр. 3 | ✅ |
| l4 #9 match (4 пари) | перебрано всі праві: кожен тег підходить лише одному реченню | ✅ |
| l4 #10 word don’t | екр. 3; «do you» (тег тієї ж полярності) відсікає контекст «thinks… He checks» (CD: такий тег — реакція на нову інформацію) | ✅ |
| l4 #11 gaps doesn’t he, doesn’t, does he, aren’t I | екр. 3, 5 | ✅ |
| l5 #2 hyp | здогадка | ✅ |
| l5 #4 match | екр. 3; друга пара відсутня | ✅ |
| l5 #6 choice Love, Oksana | екр. 5 (Love — close friends; Yours sincerely — formal); Best wishes не серед варіантів | ✅ |
| l5 #7 gaps for, hear, soon, Best wishes | екр. 3, 5 | ✅ |
| l5 #8 order | екр. 3 — порядок частин однозначний | ✅ |
| l5 #9 pick [to] | екр. 3 | ✅ |
| l5 #10 build «It was great to hear from you.» | екр. 3; єдиний порядок; пастка listen | ✅ |
| l5 #11 gaps Thanks, drawing, don’t you, soon, Best wishes | l2, l4, l5 екр. 3, 5 | ✅ |
| l6 #2 hyp | здогадка | ✅ |
| l6 #4 gaps each other, each other, themselves | екр. 3 + e7s1l5 (reflexive, у requires) | ✅ |
| l6 #5 choice: Mr Price asked | уривок на екрані | ✅ |
| l6 #6 multi [0, 2] | уривок на екрані | ✅ |
| l6 #7 word each other / one another | екр. 3 | ✅ |
| l6 #8 pick [themselves] | екр. 3 | ✅ |
| l6 #9 build «We know a lot about each other.» | екр. 3; пастка themselves неграматична з We | ✅ |
| l6 #10 gaps for, each other, been asking, Love | l2, l5, l6 | ✅ |
| l7 T1–T8 | усі мають `pre` на урок, де вивчено; відповіді збіглись з ключем | ✅ |

`requires` e7s1l2–l5 звірено з verified content/eng/g7-e7s1.js: l2 — just (+ already), l3 — yet / already, l4 — for / since з Present Perfect («How long have you lived here?»), l5 — reflexive pronouns (myself… themselves). Саме на це спираються e8s1l2 екр. 5 («as in the Present Perfect») і l6 (each other vs themselves). ✅ Решта (e6s7l4, e5s2l3, e5s8l6, e4s8l6) існують, validate зелений.

## 5. Педагогіка, рівень, стиль

- Структура кожного уроку: проблема (intro) → здогадка `hyp` (l2, l4, l5, l6) → теорія → вправи → фінальне завдання. Підказки не видають відповідь. Чутливих тем немає; безпека онлайн подана спокійно, з дією «Tell an adult».
- Рівень пояснень (style/eng.md, 6–9 кл.: речення ≤ 12 слів, ≤ 2 нових терміни): терміни — Present Perfect Continuous, question tag. `stats --subject eng`: l1–l5, l7 без прапорців; l6 — maxReadWords / maxText «нетипово для сім'ї» (z ≈ 2,3–2,4) — урок читання, уривок 95 слів, у межах профілю (пояснення автора прийнято; сім'я 8 кл. ще не відкалібрована).
- TQ-142 (PP vs PPC) — підхід автора збігається з варіантом «Як зараз»; нового TQ не потрібно.

**Рекомендації (не блокують, правок не робив):**
1. l1 #3: профіль Zofia дослівно повторює профіль Mariia з intro («I love drawing, and I’m into comics. I’d like to write about art and films.») — завдання тривіальне й трохи дивне; варто перефразувати (наприклад, «I draw every day and read a lot of comics»).
2. l3 екр. 3: «Use have been + -ing for an activity until now or a short time ago.» — 14 слів (> 12); можна розбити на два речення.
3. Написання: e4s1 — «penfriend» (OALD), e8s1 — «pen friend» (CD). Обидва словникові; одне написання на предмет — рішення куратора (TERM в inbox).

## 6. Правки (зроблені)

1. e8s1l1 екр. 5 (gaps): «Where {*does|do} your family live?» → «What music {*does|do} your best friend like?»; hint і fbText — відповідно. Причина: «do your family» правильне в BrE.
2. e8s1l1 екр. 10 (word): `answer` + «keen on», «mad about», «crazy about», «fond of». Причина: друга правильна відповідь.
3. `status: "verified"` для e8s1l1–l7, `meta.factcheck` — посилання на цей звіт; коментар заголовка оновлено.

## 7. Вердикт по уроках

| Урок | Вердикт |
|---|---|
| e8s1l1 | verified (після 2 правок) |
| e8s1l2 | verified |
| e8s1l3 | verified |
| e8s1l4 | verified |
| e8s1l5 | verified |
| e8s1l6 | verified |
| e8s1l7 (boss) | verified |

Людині: `approved` — лише вчитель англійської; TQ-142 (PP vs PPC у 8 кл.) показати вчителю; написання penfriend / pen friend — куратору.
