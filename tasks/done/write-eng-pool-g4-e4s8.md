---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.270Z
id: write-eng-pool-g4-e4s8
type: write-pool
subject: eng
grade: 4
section: e4s8
depends_on: [write-eng-g4-e4s8, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe4s8
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Celebrations and school events» (Англійська мова, 4 клас) — pe4s8

**Брати, коли розділ `e4s8` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s8.js`: `SLID.pool("eng", { id: "pe4s8", section: "e4s8", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s8` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s8, 2026-11-20)
**Файл:** content/eng/pool-g4-e4s8.js — 52 вправи (a01–a52), boss e4s8l7 без вправ. `validate --pool pe4s8` — 0 помилок, 0 попереджень; personalization-qa `--strict` — лише «ще не verified».

**Покриття урок × sk (≥ 3, рівні 1–3 на урок):**
- l1: gram a01 gaps, a02 word, a03 build, a04 pick; func a05 gaps, a06 match, a07 gaps, a08 pick.
- l2: gram a09, a10 gaps, a11 build, a12 pick; func a13 word, a14 match, a15, a16 gaps.
- l3: func a17 word, a18 gaps, a19 pick; cult a20 gaps, a21 match, a22 gaps; phon a23–a25 stress; read a26, a27 gaps, a28 pick, a50 choice.
- l4: vocab a29 gaps, a30 match, a31 word, a32 pick, a33 gaps; read a34, a35 gaps, a36 pick, a51 choice.
- l5: gram a37 gaps, a38 word, a39 word, a40 build, a41 pick, a42 gaps.
- l6: read a43 gaps, a44 pick, a45 gaps, a52 multi; write a46 word, a47 gaps, a48 build, a49 pick.

**Джерело:** `top34` (program: true) — ТОП 3–4, PDF https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf: с. 63 — теми «святкування в кафе», «шкільні події», would like, Present Continuous, how-questions for time (l1–l5); с. 54 — записки (l6). Сторінки — за facts/eng.md і reports/verify/e4s8.md §1.

**Перевірка (node, vm, app/lang.js):** `SLID_LANG.check(solution)` — ok для всіх gaps/pick/stress/match; `build` a03, a11, a40, a48 — перебрано всі впорядковані підмножини tiles+extra: зараховується рівно ключ. Розповідний відповідник питання відсічено великою першою плиткою + keepCase (a03 «Would», a11 «When»); a03 пастку «do» замінено на «are» («Do you like an ice cream?» граматичне), body — «offers». a40 «They play football» з пастки — хибне за «Look!». `word`: a02 would (should/do — ні), a13 Where, a17 Christmas, a31 fair/fete/fête, a38 making, a39 cooks, a46 for; кінцевого знака в ключах немає.

**Словники:** наголос — CD і OALD (UK і US однакові): computer /kəmˈpjuː.tə/ (https://dictionary.cambridge.org/dictionary/english/computer, https://www.oxfordlearnersdictionaries.com/definition/english/computer), happy /ˈhæp.i/, Saturday /ˈsæt.ə.deɪ/ (CD і OALD так само); birthday, December, Christmas — reports/verify/e4s8.md. weekend відкинуто: UK /ˌwiːkˈend/, US /ˈwiːk.end/ (CD weekend) — неоднозначний. fete — CD «UK (also fête)» (https://dictionary.cambridge.org/dictionary/english/fete) → у ключі a31 як друга BrE-відповідь.

**Свідомо відсічені другі відповіді:** a14 без рядка «When…?» («When is the concert? – At 5 pm» теж правильне); a16 — «When» не пропоновано там, де відповідь — година; a06 — без «Goodbye!» (дякувати, ідучи з вечірки, теж доречно); пули без 7 January (див. inbox writer-e4s8 FACT). Дати — «25 December», «1 January» (BrE). «What is the party time?» не виникає: у build немає what time.

**Герої (лише канон):** Mariia, Kateryna, Danylo (Kharkiv; день народження Danylo — June, вечірка брата — Sunday 4 pm); Andrii, Sofiia, Bohdan (Kyiv); Zoriana (однокласниця Andrii, e5s2); Oksana, Dmytro, Halyna (Halyna десять у грудні — a21, a28); Emma, Tom, бабуся Emma (робить chocolate cake — як у l3). Maksym не брав (в e4s7 — кузен в Ottawa).

**Спірне для верифікатора:** a01 варіант «What are you like?» — граматичний як ідіома, але не репліка офіціанта; a37 «Every morning, Emma is reading» — хибне за правилом уроку; a39 «cook» не з уроку дослівно, але відома дієслівна база Present Simple 3-ї особи (e4s1–e4s2); a35 — оголошення школи Emma (свої дні, не перетинається з Andrii/Mariia).

## Нотатки верифікатора (verifier-pe4s8, 2026-11-20)
**Вердикт: verified** — reports/verify/pe4s8.md. Розв'язав усі 52 вправи. Перевірка через app/lang.js у node: build — усі впорядковані підмножини tiles+extra (зараховується рівно ключ), word — варіанти через wordVerdict. validate --pool pe4s8 — 0/0, personalization-qa --pool pe4s8 --strict — чисто.
**Правки (4 змістові, id не змінено):** a09 — «school fair» → «party» (fair з'являється лише в l4); a11 — «school fair» → «school concert» (те саме); a31 — body «about a school event» (без цього «school shop» — друга відповідь); a51 — sports day Monday → Wednesday (як l4 intro). Ще перенесено коментарі уроків 4/5 і поставлено статус.
**Спірне автора:** a01 «What are you like?» — ✅, у репліці офіціанта не підходить; a37 — ✅, хибне за правилом уроку (як boss T5); a39 cook — ✅, слово є в e4s1 («A cook cooks food»); a06 match — ✅, усі праві перебрано, другої пари немає.
**Джерела:** CD/OALD — наголос birthday, December, Christmas, happy, Saturday, computer; fete (CD «UK (also fête)», OALD «(also fair) (both British English)»); ice cream [C or U]. Різдво 25 грудня — en.wikipedia (Christmas in Ukraine, Public holidays in Ukraine) + WebSearch (Irish Times, Religion News). URL — у звіті.
**Після build:** test-answer-ui --suite content --pool pe4s8 і плейтест (у контейнері немає Python-playwright).
