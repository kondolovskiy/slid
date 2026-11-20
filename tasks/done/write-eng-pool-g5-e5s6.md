---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.695Z
id: write-eng-pool-g5-e5s6
type: write-pool
subject: eng
grade: 5
section: e5s6
depends_on: [write-eng-g5-e5s6, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe5s6
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Відпочинок і дозвілля» (Англійська мова, 5 клас) — pe5s6

**Брати, коли розділ `e5s6` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s6.js`: `SLID.pool("eng", { id: "pe5s6", section: "e5s6", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s6` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s6, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s6.js`, пул `pe5s6`, 65 вправ a01–a65, статус draft. `node tools/validate.mjs --pool pe5s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s6 --strict` — лише «ще не verified»; `euphony --pool pe5s6` — чисто. Build не запускав (паралельний запуск). Браузерні прогони (test-answer-ui --pool) — не запускав (паралельне навантаження), лишаються для CI/оркестратора.

**Покриття (урок × sk, рівні 1–3 у кожній парі):** l1 vocab 4, phon 3, read 3; l2 vocab 3, write 4, gram 3; l3 gram 4, read 3, write 3; l4 gram 5, func 3, read 3; l5 gram 5, func 4; l6 vocab 3, gram 3, read 3, phon 3, write 3. Boss l7 без вправ. Типи: gaps 26, word 11, build 7, pick 5, match 5, stress 6 (phon), choice 5 і multi 4 (лише read, на коротких текстах).

**Джерело:** `mpim` (program: true), МП-ІМ 5–9 кл., PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, як у reports/verify/e5s6.md §1; сторінки звірено pdftotext у цій сесії): с. 20 — «Відпочинок і дозвілля» (види відпочинку, захоплення, канікули) і «пропонувати, приймати, відхиляти пропозицію» — l1, l2 vocab, l3 read/write, l5 func, l6 vocab/read/phon/write; с. 19 — «розповідає про те, що вміє робити добре й не дуже» — l4 can; с. 21 — Imperatives… suggestions (Let’s), Adverbs: Modifiers… manner — l5 Let’s, l4 a34/a35/a41 (very well / well); с. 22 — Shall: offers and suggestions (a45, a46), ‘ing’ forms of verbs as nouns (l2 write/gram, l3 gram, l6 gram).

**Словники (curl 2026-11-20):** наголос CD UK і OALD BrE збігаються, один головний наголос: computer kəmˈpjuː.tər, guitar ɡɪˈtɑːr, piano piˈæn.əʊ, cartoon kɑːˈtuːn, hobby ˈhɒb.i, holiday ˈhɒl.ə.deɪ, camping ˈkæm.pɪŋ — https://dictionary.cambridge.org/dictionary/english/<слово>, https://www.oxfordlearnersdictionaries.com/definition/english/<слово>. Усі сім підкреслені в уроках (l1 info; hobby — l3 info; l6 info). weekend (l6) **не брав**: BrE ˌwiːkˈend, AmE ˈwiːk.end — наголос залежить від норми. like/love/hate + to-інфінітив — за FACT writer-e5s6 / verifier-e5s6 (CD Grammar love, OALD love_2, hate_1).

**Друга правильна відповідь — як відсічено:**
- like/love/hate + to: to-інфінітив ніде не хибний варіант; у `word` a15, a16, a55 — у ключі («to run», «to ride», «to go»). Голу форму, що є ще й іменником (dance, fish, swim як «a swim»), хибним варіантом після like/love не давав; пастки -ing — правописні (swiming, rideing, danceing не брав).
- play (the) guitar — артикль ніде не оцінюється (лише в незмінному тексті й фіксованій плитці a34).
- `word` без дієслова, що лягає в пропуск (PITFALL verifier-e5s6): a03 — «Use one verb: read, play or ride» (інакше like/love chess); a52 — «Use one word: camping, fishing or skating»; a30 — «Use the verb do» (інакше practising/learning karate); a23, a55, a65 — дієслово задано.
- Shall у `word` не давав: «Can we / Should we meet…?» — друга відповідь; Shall — лише в gaps (a46) і build (a45, keepCase, велика «Shall» — відсікає «we shall play chess»).
- a43 Let’s: contractions true («Let us» теж зараховується — так само в уроці l5 #9).
- `build` — усі перестановки всіх підмножин плиток з extra перебрано через `SLID_LANG.check` (node, app/lang.js): a19, a24, a29, a45 (по 1 956), a34 (986 409), a56 (13 699), a64 (325) — рушій приймає лише ключі. Два порядки в ключі: a24 і a29 («My hobby is X» / «X is my hobby»), a64 (обставина часу на початку без коми — PITFALL writer-pe4s3). keepCase + велика перша плитка — a19 (заперечне питання «Doesn’t Dmytro like…»), a45, a56. a34 — «I can’t play chess very well, but I can play the guitar» складається з плиток, але суперечить умові (PITFALL verifier-e5s6: відсічено умовою; кома в плитці «very well,»).
- Ключі `word` — без кінцевого знака. Кожну вправу розв'язано: `SLID_LANG.solution` → `check` = true для всіх gaps/word/pick/build/match/stress; choice/multi — вручну.

**Герої — канон (нових немає):** Emma (собака, плаває дуже добре, не катається; з Tom катаються на велосипеді), Tom (катається, не плаває, рибалить з Grandad), Andrii (шахи з дідом удома, Chernihiv — бабуся й дідусь), Bohdan (теніс, велосипед — без футболу: pe4s3 «не любить football»), Mariia (малює, гітара, подруга Polina; без братів і сестер), Taras (фото, Lviv; лише кузина Marta, без братів і сестер у тексті), Oksana (карате, Odesa в липні, Carpathians у серпні), Dmytro (брат Oksana, не любить плавання, комп'ютерні ігри), Ms Kravets.
Нові дрібні деталі (NOTE): Oksana — karate on Mondays and Fridays (a27); Mariia не катається, гітара «not very well» (a41); Andrii з дідом рибалить у Chernihiv улітку (a57); Taras узимку в бабусиному селі катається з Marta (a59); Andrii не грає на гітарі й не катається (a31, a34).

**Спірне для верифікатора:**
1. a65 «I go ___ in the sea» — ключ лише swimming; «go to swim» (мета) теоретично граматичне, але неприродне — не додавав.
2. a50 — варіант «No!» граматичний, але неввічливий; умова «She says no politely» (як l5 #7 уроку).
3. a51/a53 — skating «on the river / on the lake» узимку; camping vs skating розрізняє сніг і серпень.
4. a12, a13, a35 — шкала ●●●/●●○/●○○/○○○ (як в уроках l2, l4) задає єдину відповідь love/like/don’t like/hate і very well/well/can’t.
5. a33 «Ms Kravets’s note» — присвійне з ’s після s (BrE прийнятне, CD Grammar); можна замінити на «the club note».

## Нотатки верифікатора (verifier-pe5s6, 2026-11-20)
**Вердикт: verified** — reports/verify/pe5s6.md. Кожну з 65 вправ розв'язано; build — усі перестановки підмножин плиток з extra через app/lang.js (рушій приймає лише ключі); word — wordVerdict на варіантах; матриця урок × sk звірена вручну (≥ 3, рівні 1–3); наголос 7 слів — CD UK + OALD BrE (curl); 11 запитів WebSearch на фрагменти — збігів немає.
Правки (9, ключі не змінено): a10 football → tennis (Bohdan не любить футбол, pool-g4-e4s3 a38, e6s4); a27 Mondays → Tuesdays (канон e4s3l3 «every Tuesday»); a43 — новий контекст (був копією l5 #9); a48 eleven → twelve (лексика); a49 skating → for a walk (Emma не катається); a51 Mariia → Taras (a41 «can’t skate»); a23, a30 «Write the -ing word.» (відсікає «hobby is to take/do»); статус verified.
Спірні автора 1–5: усі прийнято (a65 — CD Grammar «Go»: загальне заняття → go + -ing).
