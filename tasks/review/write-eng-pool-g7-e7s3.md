---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.751Z
id: write-eng-pool-g7-e7s3
type: write-pool
subject: eng
grade: 7
section: e7s3
status: review
claimed_by: writer-pe7s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Health and medicine» (Англійська мова, 7 клас, e7s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s3.js`: `SLID.pool("eng", { id: "pe7s3", section: "e7s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s3l1` — A hospital, a chemist’s, a dentist’s: where to go
- `e7s3l2` — I’ve got a sore throat: illnesses and symptoms
- `e7s3l3` — I’ve hurt my knee! What has happened?
- `e7s3l4` — When did it start? The Past Simple or the Present Perfect
- `e7s3l5` — You ought to stay in bed: advice
- `e7s3l6` — Take one tablet twice a day: reading medicine labels

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s3` і `node tools/personalization-qa.mjs --pool pe7s3` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe7s3, 2026-11-27. Файл `content/eng/pool-g7-e7s3.js`, пул `pe7s3`, 80 вправ a01–a80, `status: "draft"`. `validate --pool pe7s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s3` — лише «ще не verified». Build не запускав (паралельний запуск). Браузерні прогони (test-answer-ui --pool) не запускав — для CI/оркестратора.

**Покриття (урок → кількість / пари sk з рівнями / типи); boss e7s3l7 без вправ:**
| урок | вправ | sk: рівні | типи |
|---|---|---|---|
| e7s3l1 | 16 | vocab 1,1,2,3; func 1,2,3; cult 1,2,3; phon 1,2,3; write 1,2,3 | gaps 6, match 1, word 2, choice 2, build 1, stress 3, order 1 |
| e7s3l2 | 15 | vocab 1,1,2,3; read 1,2,3; gram 1,1,2,3,3; write 1,2,3 | gaps 7, choice 2, match 1, multi 2, word 2, pick 1 |
| e7s3l3 | 9 | gram 1,1,2,2,3,3; write 1,2,3 | gaps 5, word 2, build 1, pick 1 |
| e7s3l4 | 12 | gram 1,1,2,2,3,3; func 1,2,3; write 1,2,3 | gaps 6, word 1, choice 2, build 2, match 1 |
| e7s3l5 | 12 | gram 1,1,2,2,3; func 1,2,2,3; write 1,2,3 | gaps 6, word 1, pick 1, build 1, choice 2, sort 1 |
| e7s3l6 | 16 | vocab 1,1,2,3; read 1,2,3; gram 1,2,3; func 1,2,3; write 1,2,3 | match 1, word 1, gaps 6, choice 4, multi 1, pick 1, build 1, sort 1 |
Матриця урок × sk — з `sk` оцінюваних не-hyp екранів кожного уроку (звірено вручну).

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, завантажено й звірено pdftotext у цій сесії): с. 32 — «Охорона здоров'я: відвідування лікаря; назви медичних закладів, захворювань та їх симптомів, лікарських засобів», функція «просити про допомогу» (l1, l2 vocab/read/write, l4 func); с. 28 — «добирає важливу інформацію на упаковках про … вживання лікарських засобів» (l6); с. 34 — Could, Ought: advice (l5); с. 35 — Present perfect simple (recent past, duration with since), Past simple, Pronouns — indefinite (l2 gram, l3, l4 gram/write).

**Словники (curl 2026-11-27):** наголос — CD UK + OALD: chemist /ˈkem.ɪst/ (OALD chemist_1 /ˈkemɪst/), dentist /ˈden.tɪst/ (OALD /ˈdentɪst/), appointment /əˈpɔɪnt.mənt/, ambulance /ˈæm.bjə.ləns/, hospital /ˈhɒs.pɪ.təl/ — https://dictionary.cambridge.org/dictionary/english/<слово>, https://www.oxfordlearnersdictionaries.com/definition/english/<слово>. Усі п'ять підкреслені в info e7s3l1. burn — «burnt or burned» (CD burn) → a37 обидві в ключі. ought to / should, something / anything — за CD Grammar, як у нотатках write-eng-g7-e7s3 (ought to і should ніде не конкурують; something/anything у питаннях не оцінюю).

**Друга правильна відповідь — як відсічено:**
- ought to / should: в одному пропуску ніколи; хибні — ought без to, should to, don’t ought to.
- Present Perfect / Past Simple: хибний PP лише з явним finished time (yesterday, on Thursday, last Friday) або PS з since; «had it for a week» не дано хибним без «since» / «now» (a43 — since, a51 — now).
- something/anything/nothing: хибні — подвійне заперечення (can’t … nothing), anything у ствердженні / підметі («anything else hurts»).
- mustn’t / don’t have to (a61) — умова каже «it isn’t necessary»; have to / ought (a64) — «it’s a rule».
- word: a09 — ключ 103 і 112 (112 — загальний номер в Україні, facts write-eng-g7-e7s3); a33 «I’ve ___ my leg» — умова «the third form of break» (інакше hurt); a37 — burnt / burned; a42 for, a54 to, a25 anything, a28 nothing («Does anything hurt? – No, ___ hurts» — пастка anything), a66 once («Write one word»).
- build — усі перестановки всіх підмножин плиток з extra перебрано `SLID_LANG.check` (app/lang.js у node vm): a06, a34, a46, a49, a56 (325–1 956), a74 (13 699) — рушій приймає лише ключ. Ключі word — без кінцевого знака.
- Кожна gaps/pick/stress/word/build/match: `SLID_LANG.solution` → `check` = true; choice/multi/sort/order — розв'язано вручну.
- Копії уроків: 6-грами пулу проти всіх content/eng/*.js (скрипт) — збіги з ключем прибрано; лишились формули етикеток («a doctor or a chemist», «not a real medicine»), «you ought to go to bed», «is it advice or a rule».
- Лексика: слова кожної вправи звірено скриптом з g4–g6, e7s1–e7s2 і уроками e7s3 до `lesson` включно (suddenly, tips, hear, tonight, wait прибрано).

**Медичне:** етикетки a69–a71 вигадані («– not a real medicine»), без назв препаратів; дозування — лише «For adults», діти — «never without an adult. Talk to a doctor or a chemist first.»; a71, a75, a76, a77 — дитина питає дорослого. Поради l5 — побутові (rest, warm tea, sleep, stay at home). a68 — читання етикетки дорослого (every four hours → 12.00), як match уроку.

**Герої (нові дрібниці, NOTE в inbox):** Sofiia порізала палець на art lesson, Kyrylo вдарив коліно в PE (a32), Kyrylo впав у PE і вдарив щиколотку (a39, як boss); Ostap упав з велосипеда, вдарив щиколотку, ногу не зламав (a35, a36, a63); Polina — sore throat з понеділка, 4 дні (a42, a51), застуда (a62); бабуся Nina — backache (a41), Sofiia з бабусею в Chernihiv (a06); тато Andrii — backache з вівторка (a80, узгоджено з e7s3l4 «Dad: backache»); Grandma Hanna — застуда, таблетка раз на день (a79); Halyna з мамою в Poltava, у мами toothache (a07); Kyrylo — дідусь, мама з sore throat (a04, a14); Mariia — впала в парку (a38).

**Спірне для верифікатора:**
1. a09 — 112 у ключі (в уроці не вивчався; дитина його навряд чи напише, але він правильний).
2. a16 — `order` для sk write (діалог прохання про допомогу); порядок однозначний репліками.
3. a61 mustn’t vs don’t have to і a63/a64 shouldn’t/should — дистрактор граматичний, але суперечить умові («isn’t necessary», «with a bad ankle»), як в уроці e7s3l5 final.
4. a12/a13 — stress з одним словом іншого наголосу (appointment); інші l1-слова наголошені на 1-му.
