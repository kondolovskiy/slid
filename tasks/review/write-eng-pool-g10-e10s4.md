---
claimed_from: todo
claimed_at: 2026-11-27T11:55:45.674Z
id: write-eng-pool-g10-e10s4
type: write-pool
subject: eng
grade: 10
section: e10s4
status: review
claimed_by: writer-pe10s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Weather, nature and natural disasters» (Англійська мова, 10 клас, e10s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s4.js`: `SLID.pool("eng", { id: "pe10s4", section: "e10s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s4l1` — Floods, storms, earthquakes: natural disasters
- `e10s4l2` — Look at those clouds! Will or going to?
- `e10s4l3` — Weather, health and mood
- `e10s4l4` — Temperatures will be falling: forecasts and warnings
- `e10s4l5` — By 2030 we will have…: the Future Perfect
- `e10s4l6` — Protecting nature in Ukraine and the UK

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s4` і `node tools/personalization-qa.mjs --pool pe10s4` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s4 (writer-pe10s3-pe10s4), 2026-11-27.** Файл `content/eng/pool-g10-e10s4.js` (pe10s4, 73 вправи a01–a73, `status: "draft"`). `validate --pool pe10s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s4 --strict` — лише «ще не verified». Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт). `test-answer-ui.py --suite content --pool pe10s4` не запускав: Python-модуля playwright у контейнері немає (CI). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build: a22 — 1 порядок, a39 — 3, a47 — 6, a59 — 2 (усі прийняті рушієм — у ключі; без keepCase). У ключах `word` кінцевого `.!?` немає.

| Урок | Вправи | sk → кількість (рівні 1–3 у кожній парі) | Типи |
|---|---|---|---|
| e10s4l1 | a01–a15 (15) | vocab 3, cult 3, read 3, phon 3, write 3 | match, gaps, word, choice, multi, stress |
| e10s4l2 | a16–a24 (9) | gram 6, write 3 | gaps, choice, sort, multi, pick, build |
| e10s4l3 | a25–a33 (9) | vocab 3, read 3, write 3 | gaps, word, choice, multi |
| e10s4l4 | a34–a48 (15) | gram 6, cult 3, read 3, write 3 | gaps, word, pick, multi, build, choice |
| e10s4l5 | a49–a61 (13) | gram 7, read 3, write 3 | gaps, choice, pick, multi, word, build |
| e10s4l6 | a62–a73 (12) | vocab 3, read 3, cult 3, write 3 | match, gaps, word, choice, multi |

**Джерело:** П1407, PDF https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (md5 f8f54184…, `pdftotext`, друкований номер = PDF): с. 22 — 10 кл., тема «Природа і погода» (природні катаклізми та їх види; вплив погоди на здоров’я та настрій; захист природи) і функція «висловлювати власні припущення, прогнозувати ймовірність подій і наслідків» → vocab, cult, read, phon, write l1, l3, l6 і read l4–l5; с. 23 — «Going to / will for predictions», «Future Continuous», «Future Perfect», «prepositions in time phrases, e.g.: before, for, since, till, until, by» → gram l2, l4, l5 і write l2, l4, l5, a73.

**Рішення щодо пасток:**
- will / be going to ніде не протиставлено: у gaps — лише хибні форми (going to, are going to з it / they, wills, is + V); multi a20 — will, are going to, are likely to правильні разом; pick a21 — хибне «They is going to».
- Future Continuous: will + verb ніде не хибне (multi a37 — will be blowing і will blow обидва правильні); пастки — will + -ing без be, will be + V.
- Future Perfect: will + verb з by не хибне (multi a54 — «I will read the book by Monday» правильне); пастки — will has, will have + V, readed, don’t have + V3, until з завершеною дією.
- by / until: till ніде не з'являється; until — «увесь час до», by — «не пізніше» (як в уроці).
- heatwave: у пулі лише в gaps / text як правильне слово уроку; `word` на heatwave немає (heat wave — у ключі уроку). sunburnt + sunburned — у ключі a26.
- `word` a03: erupted + exploded (обидва граматичні й правдиві).
- Факти — лише з уроків: storm names (з 2015, Met Office і Met Éireann, список щовересня, абеткою, ідеї від public, легше запам'ятати → помічають попередження); липень 2008 (Dniester, Prut, кілька днів дощу, мости); поради в спеку (тінь, вода, капелюх); Met Office yellow / amber / red (red — rare); UK 15 парків (10 / 3 / 2, NI — немає), Peak District з фермами й селами, земля — фермерам та іншим власникам; Карпатський НПП 1980, Шацький 1983 (Volyn, north-west, 23 озера), Світязь — найглибше. Вигадані прогнози — без реальних дат і закладів.
- 6-грами (скрипт проти g4–g11): прибрано збіги з тим самим ключем («I’m a bit under the weather», «in the evening it will be snowing hard», «will be blowing in the mountains», «it will be raining all morning», «This time next July, we will be …», «always put me in a good mood»). Лишились інструкції, назва warning-рівня й рамка «What will they have done by the end of …» з іншим ключем (a57 — won’t have made).
- Лексика (скрипт проти g4–g9, e10s1–e10s3 і уроків e10s4 до `lesson`): прибрано slid, onto, cracking, drunk, reach, collect, shore. Лишились прийняті варіанти `word` (exploded), форми відомих слів (shortest, lower, blow, belong).
- stress — лише слова з `<u>` в e10s4l1 (wildfire, volcano, hurricane, disaster, landslide, avalanche, earthquake); у кожному наборі — різні наголошені склади; у l3 оцінюваного phon немає.

**Нові дрібні деталі героїв (NOTE в inbox):** Owen (Wales) — шторм на узбережжі біля його дому; Tom любить вітер і дощ, не любить спеку; Daryna — застуда в листопаді, смішні повідомлення сестри; Kyrylo — сонячний опік після пляжу; Bohdan — субота: теніс, допомога дідусеві в саду; Zoriana — пише першу гру в coding club; Andrii — шаховий турнір; Taras збирає на нову камеру, ходив на Світязь з татом, наступного липня — тиждень там із Zlata й татом; Emma з сім'єю була в Peak District; Oksana — повінь навесні біля села, посуха влітку, автобус до Poltava після ремонту мосту; Dmytro робить шпаківні.

**Словники (форма, наголос; curl у цій сесії):** CD https://dictionary.cambridge.org/dictionary/english/<word>: wildfire «/ˈwaɪld.faɪər/», volcano «/vɒlˈkeɪ.nəʊ/», hurricane «/ˈhʌr.ɪ.kən/» (US /ˈhʌr.ɪ.keɪn/ — наголос той самий), disaster «/dɪˈzɑː.stər/», landslide «/ˈlænd.slaɪd/», avalanche «/ˈæv.əl.ɑːntʃ/», earthquake «/ˈɜːθ.kweɪk/», landscape «/ˈlænd.skeɪp/», habitat «/ˈhæb.ɪ.tæt/», heatwave «/ˈhiːtˌweɪv/». Граматика — як в уроці (CD Grammar «Will», «Be going to», «Future continuous», «Future perfect», «By», «Until»; URL — tasks/…/write-eng-g10-e10s4.md).
