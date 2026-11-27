---
claimed_from: todo
claimed_at: 2026-11-27T10:18:15.785Z
id: write-eng-pool-g8-e8s4
type: write-pool
subject: eng
grade: 8
section: e8s4
status: done
claimed_by: writer-pe8s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Music» (Англійська мова, 8 клас, e8s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s4.js`: `SLID.pool("eng", { id: "pe8s4", section: "e8s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s4l1` — Pop, rock, folk or classical? Music styles
- `e8s4l2` — The bandura, the violin, the drums: instruments
- `e8s4l3` — A singer who writes her own songs: who, which, that
- `e8s4l4` — My favourite band, which…: extra information
- `e8s4l5` — World-famous musicians and composers
- `e8s4l6` — At a concert: an online review

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --pool pe8s4` і `node tools/personalization-qa.mjs --pool pe8s4` — 0 помилок; `status: "draft"`.
- [x] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s4, 2026-11-27.** Файл `content/eng/pool-g8-e8s4.js` (pe8s4, 70 вправ a01–a70, `status: "draft"`). `validate --pool pe8s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s4` — лише «ще не verified». test-answer-ui не запускав (Python-playwright у контейнері немає); `build` a21, a30, a40, a56 — перебір усіх перестановок і підмножин через `SLID_LANG.check`: зараховуються лише порядки з `answer` (a30 — обидва порядки, як в уроці).

| Урок | Вправ | Рівні 1/2/3 | sk (≥ 3 на пару) | Типи |
|---|---|---|---|---|
| e8s4l1 | 11 | 4 / 4 / 3 | vocab 5, phon 3, read 3 | gaps 3, choice 2, word, match, stress 3, multi |
| e8s4l2 | 14 | 5 / 5 / 4 | vocab 4, phon 3, gram 4, read 3 | gaps 4, match, word, stress 3, pick 2, build, choice, multi |
| e8s4l3 | 10 | 3 / 4 / 3 | gram 7, write 3 | gaps 5, choice, multi, word, build, pick |
| e8s4l4 | 10 | 3 / 4 / 3 | gram 7, write 3 | gaps 5, word, choice, sort, build, pick |
| e8s4l5 | 14 | 5 / 5 / 4 | vocab 4, read 3, gram 4, write 3 | gaps 6, match, word 2, choice 2, multi, pick, build |
| e8s4l6 | 11 | 4 / 4 / 3 | func 5, read 3, write 3 | sort, gaps 3, word, choice 3, multi, order 2 |

- `src`: лексика, читання, функції, l2 gram (play the) — mpim с. 32 (тема «Музика», враження); l3–l5 gram і write — с. 35 (Relative — defining / non-defining, Compound adjectives).
- **Relative clauses:** у defining-пропусках дистрактор — лише which для людей / who для речей або форма без особи (which like); that ніде не хибний (who / that, which / that — обидва правильні). Group nouns (band, Kashtan, Kalush Orchestra, choir): who ніде не хибний варіант — у non-defining для Kashtan пастка лише that (a45), Kalush Orchestra — лише в тексті (a52). Вилучення займенника (a28, a30, a32, a34, a35) — лише перед новою особою (I, Mila, Zlata, Uncle Oleh).
- **play the + інструмент:** дистрактор лише «on the» (a19–a22); «play drums» без артикля не протиставляється (у BrE можливе).
- **Факти** — лише з уроку e8s4l5: Lysenko 1842–1912, школа в Kyiv 1904; Shchedryk, версія Leontovych, хор у New York 1922, Carol of the Bells; The Beatles — Liverpool, 1960–1970; Kalush Orchestra — folk + rap, Eurovision 2022. Нових фактів немає. Тексти пісень не цитуються; звуку немає.
- **Лексика (D-019):** перебір проти уроків до свого і g4–g8-e8s3 (lex.mjs): radio, sticks, careful, stood прибрано; queue, lasted — лише в l6 (є в l6). 6-грами: збіги лише в рамках інструкцій і коментарях; a11, a57, a65 переписано.
- Наголос — CD: https://dictionary.cambridge.org/dictionary/english/music, https://dictionary.cambridge.org/dictionary/english/classical, https://dictionary.cambridge.org/dictionary/english/concert, https://dictionary.cambridge.org/dictionary/english/popular, https://dictionary.cambridge.org/dictionary/english/guitar, https://dictionary.cambridge.org/dictionary/english/guitarist, https://dictionary.cambridge.org/dictionary/english/violin, https://dictionary.cambridge.org/dictionary/english/violinist, https://dictionary.cambridge.org/dictionary/english/musician, https://dictionary.cambridge.org/dictionary/english/orchestra, https://dictionary.cambridge.org/dictionary/english/drummer, https://dictionary.cambridge.org/dictionary/english/piano (piˈæn.əʊ, UK = US), https://dictionary.cambridge.org/dictionary/english/cartoon. **pianist не брав** (CD UK ˈpiː.ən.ɪst, US також piˈæn.ɪst). У l1 (усі слова уроку — 1-й склад) додано car<u>toon</u> (e7s4), re<u>por</u>ter, maga<u>zine</u> (e8s3).
- Герої — за glossary/eng-heroes.md і шапкою e8s4: Mila Lastivka (не Kvitka), Kashtan / Olha, Zlata (бандура), Tom (12, барабани й гітара), Oksana (піаніно), Polina (гітара), Mariia (гітара від Uncle Oleh), Zoriana (скрипка), Emma’s grandad (cook, класична музика), Bohdan (rap), Daryna (folk), Kyrylo (jazz). Нові дрібниці: Lesia — подруга Zlata, піаніно (a23); шкільний гурт Тараса (Orest, Myroslava, Yaryna, Vlad — a24); Daryna співає в шкільному гурті (a42).
- Опора неочевидна: a68, a70 (order) — порядок «best part → only problem → advice» за екранами l6 (info «Saying what you think», order #7).
