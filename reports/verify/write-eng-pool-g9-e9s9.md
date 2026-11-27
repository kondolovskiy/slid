# Верифікація: пул pe9s9 (англійська, 9 кл., розділ e9s9 «Let’s discuss: agreeing and disagreeing»)

Верифікатор: verifier-pe9s9, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s9.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s9.md. Опора: уроки `content/eng/g9-e9s9.js` (verified) і розділи g4–e9s8. Еталони: reports/verify/write-eng-pool-g9-e9s2.md, -g8-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 5 правок у 4 вправах і шапці: 1 граматичний порядок плиток поза ключем (a36), 1 канон героїв (a11), 2 слова поза уроками (a08 hint, a15), статус і шапка. Нових TQ немає, людині рішати нічого не треба.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. Сторінки за нотатками автора й шапкою розділу: с. 33 — функції «вести дискусію», «висловлювати … згоду або незгоду» (l1–l3 func/write, l6 read/func/write); с. 34 — subordinated clauses (reason, purpose, result, contrast), either … or, both … and (l3 gram, l4, l6 gram); с. 35 — discourse markers, attitude adverbs (a04 actually, stress, a40 however, a46, l5, a63–a64). Усі `src` відповідають темам вправ ✅.

## 2. Факти
Нових фактичних тверджень немає: усе — думки й плани героїв. Перевірено канон героїв (memory/long/glossary/eng-heroes.md):
- Oksana — канон «щороку в липні в Odesa, у серпні — Carpathians». У a11 «in summer, we swim in the river every day!» цьому суперечить → «we often swim in the river» ⚠️ → виправлено. Річка в Zelena Dolyna — канон ✅.
- Mariia — мама є, братів і сестер у пулі немає ✅. Zofia (Poland), Polina, Roksolana (Kharkiv) ✅. «Zofia’s grandma» (a43) — нова дрібна деталь, канону не суперечить.
- Kyiv: Bohdan — e-books, Zoriana — paper books і coding (IT), Kyrylo — history, Daryna, Ms Lysenko ✅. Lviv: Ostap, Myroslava, Taras, Ms Kvitka, Bright Radio ✅ (Taras у пулі без спорту — розбіжність канону лишається відкритою, не зачеплено). Zelena Dolyna: Oksana, Halyna, Dmytro, Ms Marchenko, eco club ✅.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки плиток разом з `extra` (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s9/bin/chk.mjs`): після правки a36 кожен зарахований порядок — граматичний, і кожен граматичний — у ключі.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | In; opinion | = | l1 info «Giving your opinion» | — | ✅ |
| a02 choice | What do you think…? | = | l1 info | — | ✅ |
| a03 pick | [opinion] | = | l1 info | — | ✅ |
| a04 gaps | Actually | = | l1 info 2, choice #9 | Honestly не дистрактор ✅ | ✅ |
| a05 gaps | don’t think; sure; opinion | = | l1 info | — | ✅ |
| a06 stress | per, pin | = | l1 `<u>` | — | ✅ |
| a07 stress | hon, pin, ac | = | l1 `<u>` | — | ✅ |
| a08 stress | per, al, se, cin, ac | = | l1; person`<u>`al`</u>`ity (e9s1), mu`<u>`se`</u>`um (e5s7, e5s9, e6s7), `<u>`cin`</u>`ema (e5s7) | hint «look alike» — alike в уроках немає | ⚠️ → «look almost the same» |
| a09 gaps | In; think; think | = | l1 | — | ✅ |
| a10 build | In my opinion, village life is the best choice for a family. | = | l1 | інші порядки ламають кому плитки | ✅ |
| a11 gaps | because; don’t think; Actually; your | = | l1 | канон Oksana (§2) | ⚠️ → «we often swim» |
| a12 sort | 2/2/2 | = | l2 info, sort | «I see your point, but…» не вжито ✅ | ✅ |
| a13 choice | I couldn’t agree more! | = | l2 info | — | ✅ |
| a14 match | 3 пари | = | l2 info | перебрав усі праві | ✅ |
| a15 choice | I see your point, Ostap, but I’m afraid I disagree. | = | l2 info, build | «silly» — поза уроками | ⚠️ → «a bad idea» |
| a16 word | point | = | l2 | — | ✅ |
| a17 gaps | agree; agree | = | l2 | — | ✅ |
| a18 choice | I agree with you, Taras. | = | l2 | — | ✅ |
| a19 pick | [to] | = | l2 gaps «agree with» | — | ✅ |
| a20 gaps | about; with | = | l2 info, gaps | — | ✅ |
| a21 gaps | agrees; doesn’t agree; more | = | l2 | — | ✅ |
| a22 gaps | agrees; more | = | l2 | — | ✅ |
| a23 build | That’s true, but the breaks are too short. | = | l2 | 1 порядок | ✅ |
| a24 gaps | couldn’t; true; point; afraid | = | l2 | — | ✅ |
| a25 choice | Excuse me, can I say something? | = | l3 info | ключ інший, ніж у choice уроку | ✅ |
| a26 match | 4 пари | = | l3 info | перебрав усі праві | ✅ |
| a27 gaps | interrupt; add; ahead | = | l3 | — | ✅ |
| a28 multi | [0,1] | = | l3 info | — | ✅ |
| a29 choice | Do you agree, Halyna? | = | l3 info | — | ✅ |
| a30 gaps | Both; either | = | l3 info 2 | — | ✅ |
| a31 word | or | = | l3 | — | ✅ |
| a32 build | 2 порядки | = | l3 | «Oksana and Dmytro both are…» складається, у ключі немає — і правильно: CD «Not: They both were very nice» | ✅ |
| a33 pick | [and] | = | l3 | — | ✅ |
| a34 choice | Both … want | = | l3 | — | ✅ |
| a35 gaps | say; agree | = | l3 info | — | ✅ |
| a36 build | 2 порядки | = | l3 info 2 | плитки «we can» + «either» складали «Either we can clean the bus stop or plant flowers» — не в ключі; CD: either … or з’єднує однаковий граматичний тип (клауза ≠ дієслівна група), уроки ставлять either лише після підмета → не додаю в ключ, а зливаю плитку | ❌ → «we can either» |
| a37 gaps | interrupt; finish; either; both; were | = | l3 | — | ✅ |
| a38 gaps | because; so | = | l4 info 2 | — | ✅ |
| a39 choice | so that | = | l4 info 2 | so — не варіант ✅ | ✅ |
| a40 gaps | Although; However | = | l4 info 1 | пунктуація розводить | ✅ |
| a41 pick | [but] | = | l4 info 1 | — | ✅ |
| a42 choice | Although …, but … | = | l4 info 1 | два правильні речення справді правильні | ✅ |
| a43 gaps | so that; because; so | = | l4 | — | ✅ |
| a44 gaps | so; Although | = | l4 | — | ✅ |
| a45 build | Although the tickets are expensive, Mariia wants to go. | = | l4 | зворотний порядок кінчається комою плитки | ✅ |
| a46 gaps | so; Although; However; so that | = | l4 | — | ✅ |
| a47 choice | Finally | = | l5 info | — | ✅ |
| a48 gaps | First; Also | = | l5 | — | ✅ |
| a49 sort | 2/2/1/1 | = | l5 info (Firstly — «also Firstly») | — | ✅ |
| a50 order | Title → First → Also → Finally | = | l5 | — | ✅ |
| a51 gaps | First; In addition; However | = | l5 | — | ✅ |
| a52 pick | [However] | = | l5 | — | ✅ |
| a53 choice | Paper books are better for the library. | = | текст + l2 | — | ✅ |
| a54 multi | [0,2] | = | текст + l2, l3 | хибні твердження справді хибні | ✅ |
| a55 choice | Andrii partly agrees… | = | текст + l2 | — | ✅ |
| a56 choice | I couldn’t agree more, Bohdan. | = | l2 | — | ✅ |
| a57 sort | 2/2/2 | = | l2, l6 sort | — | ✅ |
| a58 gaps | true; interrupt; more | = | l2, l3 | — | ✅ |
| a59 gaps | Both; either | = | l3, l6 | — | ✅ |
| a60 build | Although paper books are heavy, Zoriana loves them. | = | l4, l6 | — | ✅ |
| a61 gaps | Although; so; Both; read | = | l3, l4, l6 | — | ✅ |
| a62 gaps | agree; point | = | l2 | — | ✅ |
| a63 order | Title → First → However → Finally | = | l5 | — | ✅ |
| a64 gaps | In; First; Also; However; Although | = | l1, l4, l5 | «Finally» у 4-му пропуску не підходить: після нього ще речення, а hint і l5 Final — «the other side» → However | ✅ |

**Друга правильна відповідь:** so / so that, Also / In addition, but / although після коми ніде не стоять в одному пропуску ✅. Хибні варіанти — неграматичні форми або інша функція з уроку ✅. AmE-варіантів як хибних немає ✅. `word` — без кінцевого `.!?` ✅. **Hint** ніде не видає ключ і не відкидає дистрактор за учня ✅. Правдивих тверджень у ролі «помилки» немає ✅. Покриття: 64 вправи, 6 уроків, у кожної вправи рівня 2–3 є `hint`; `sk` — з екранів уроків.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: personally «ˈpɜː.sən.əl.i», honestly «ˈɒn.ɪst.li», actually «ˈæk.tʃu.ə.li», opinion «əˈpɪn.jən», personality «ˌpɜː.sənˈæl.ə.ti», museum «mjuːˈziː.əm», cinema «ˈsɪn.ə.mɑː / ˈsɪn.ə.mə». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: personally «/ˈpɜːsənəli/», honestly «/ˈɒnɪstli/», actually «/ˈæktʃuəli/», opinion «/əˈpɪnjən/», personality «/ˌpɜːsəˈnæləti/», museum «/mjuˈziːəm/», cinema «/ˈsɪnəmə/». Усі ключі `stress` збігаються; кожне слово має `<u>` в уроках (§3, a08) ✅.
- **Вирази:** up to a point — CD https://dictionary.cambridge.org/dictionary/english/up-to-a-point «B2 partly, or to a limited degree»; couldn’t agree more — CD https://dictionary.cambridge.org/dictionary/english/agree «couldn't agree more/less idiom»; both — CD https://dictionary.cambridge.org/grammar/british-grammar/both «after be as a main verb … Not: They both were very nice» (a32); either … or — CD https://dictionary.cambridge.org/grammar/british-grammar/either-or «We use either… or… to connect items which are the same grammatical type» (a36).
- **Лексика** (скрипт `bin/lex.mjs` проти g4–e9s8 і e9s9 до `lesson` вправи): поза уроками лишилися лише alike (a08 hint) і silly (a15) — виправлено. Слів з пізніших уроків розділу немає ✅.
- **BrE, без звуку:** grandads, Mum; AmE, IPA, A/B/C, «Listen» як аудіювання немає ✅. `keepCase` не вжито, плитки, що можуть стояти першими, — з малої ✅.
- **Копії рамок уроків** (6-грами, `bin/ngram.mjs`): збігаються лише формули уроку (Sorry to interrupt, but can I…, I couldn’t agree more, Agree, partly agree or disagree?) і шаблонні інструкції; вправ уроку з тим самим ключем немає ✅.
- **Авторське право** (WebSearch у лапках):

| Фрагмент | Запит | Результат |
|---|---|---|
| a53 «Paper books are better for a library: everybody can borrow them…» | "Paper books are better for a library: everybody can borrow them" | збігу немає |
| a55 «However, I think we should ask the students too: they’re the readers!» | "However, I think we should ask the students too: they're the readers" | збігу немає |
| a43 «Mariia is learning some Polish so that she can talk to Zofia’s grandma» | "Mariia is learning some Polish so that she can talk to" | збігу немає |

## 5. Правки (зроблені)
1. a36: плитки «we can», «either» → одна плитка «we can either» (не складається непаралельне «Either we can … or plant flowers»); ключ не змінено.
2. a11: «in summer, we swim in the river every day!» → «in summer, we often swim in the river!» (канон Oksana: липень — Odesa, серпень — Carpathians).
3. a15: «That’s a silly idea.» → «That’s a bad idea.» (silly — поза уроками).
4. a08 hint: «look alike» → «look almost the same».
5. `status: "verified"`, `meta.factcheck`, шапка (статус, примітка про a36).

`node tools/validate.mjs --pool pe9s9` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s9` — без помилок; `euphony --pool pe9s9` — без зауважень.
