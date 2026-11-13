---
id: tools-content-checks-p3
type: tools
subject: all
status: todo
claimed_by:
created: 2026-11-12
---
# P3 перевірок змісту з пакета 10–12.11

Скіл engine-change; незалежне рев'ю D-026. Не блокує. Зібрано з inbox (ENGINE / PITFALL / IDEA):

1. validate: латиниця всередині кириличного слова (w10s6 «Іпóліто» — латинська ó як знак наголосу; verifier-w10s6).
2. validate: попередження, коли всі правильні choice уроку на одній позиції або multi з однаковим ключем поспіль (w8s5l7, w7s3, w7s4 — правильні на 0 / [0,1]; D-016; рушій choice/multi не перемішує).
3. stats: `sentences()` у tools/lib.mjs ріже речення після «р.» перед великою літерою чи «—» («1958 р. Мао…») — хибні «короткі речення» в хронологіях (w-write-world-w11s5).
4. euphony: `--section ID` без `--subject` шукає розділ лише в ukr і дає код 2 — визначати предмет за id (w-write-world-w10s6).
5. validate «sk уроку поза першими 4 пулу» (з handoff 10.11).
6. learn.js buildPlan: `next` baseline-теми — завжди перший урок розділу (indep, rights → g5s7l1, хоча опора в l3/l6/l7) — урок, що найкраще відповідає темі (verifier-refine-hist-diag-g5-g6-cov).
7. ENGINE (дизайн): поле міжпредметного `link` на урок іншого предмета (зараз лише текстом; writer-hist-g7s6) — разом з ідеєю `see: [{subject, lesson}]` з handoff 10.11.
8. P3 рев'ю tools-diag-nonmath-p3: тест на U+200C/U+200D у split, боси в diagCtx, власні назви в `<b>` у правилі «в-слово-на-початку».
