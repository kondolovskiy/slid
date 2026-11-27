# Верифікація: пул pe9s3 (англійська, 9 кл., розділ e9s3 «Fashion and clothes»)

Верифікатор: verifier-pe9s3-pe9s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g9-e9s3.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s3.md. Опора: уроки `content/eng/g9-e9s3.js` (verified) і попередні розділи g4–g8, e9s1–e9s2. Еталони: reports/verify/write-eng-pool-g8-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і других правильних відповідей я не знайшов. Зробив 7 правок у 7 вправах: 1 суперечність канону героїв (a63), 3 копії рамок уроків (a38, a54, частково a41), 1 слабка опора (a12), 1 повторений контекст уроку (a31), 1 невідповідність body і тексту (a58). Після правок лексику перевірив ще раз: нових слів поза уроками немає. Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI: Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF завантажив у цій сесії: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`). Сторінки звірив за колонтитулами:
- с. 33, розд. 5.2.3 «9-ий клас»: «Одяг — Мода, Елементи одягу», функція «висловлювати власне ставлення до вчинків, думок, позицій інших людей» → l1, l2, l6 (`mpim с. 33`) ✅; l3 vocab (матеріали) — теж «Елементи одягу» ✅;
- с. 34, 5.4 «граматика (рівень B1)»: «Adjectives — Combining adjectives», «Modifying: … ‘enough’, … ‘too’ + ‘to’-infinitive», «Clause — Comparatives: … so … that, as if, as though, like» → l3 gram і write, l4, l5 (`mpim с. 34`) ✅.

## 2. Факти

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Vyshyvanka Day — у травні (a06 body і steps, a57) | https://en.wikipedia.org/wiki/Vyshyvanka_Day (third Thursday of May); https://www.ukrinform.net/rubric-society/3864324-ukraine-celebrates-vyshyvanka-day.html | ✅ |
| Решта (роки фото, ціни, клуби, події) вигадані й не є ключем; героїв звірено з glossary/eng-heroes.md (§4) | — | ✅ |

## 3. Форми й наголос (словники, відкриті в цій сесії через curl)
- `stress` a07–a09: Cambridge https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>. Наголошений склад у UK і US однаковий: fashion ˈfæʃ.ən / OALD ˈfæʃn; fashionable ˈfæʃ.ən.ə.bəl / ˈfæʃnəbl; old-fashioned ˌəʊldˈfæʃ.ənd / ˌəʊld ˈfæʃnd (основний наголос на *fash*, тож `old-|+fash|ioned` правильно); embroidered ɪmˈbrɔɪ.dəd / OALD embroider ɪmˈbrɔɪdə(r); umbrella ʌmˈbrel.ə (UK = US); uniform ˈjuː.nɪ.fɔːm, US ˈjuː.nə.fɔːrm / OALD uniform_1; jacket ˈdʒæk.ɪt; trousers ˈtraʊ.zəz ✅. Кожне слово раніше було підкреслене `<u>`: fashion, fashionable, old-fashioned, embroidered — e9s3l1; umbrella — e6s5; uniform, jacket, trousers — e5s4 ✅. У кожному наборі є слово з іншим наголошеним складом ✅.
- stripy (a15): OALD stripy «(both British English, informal)» (https://www.oxfordlearnersdictionaries.com/definition/english/stripy), стаття CD stripy є ✅. in my view (a59): CD view «In my view, her criticisms…», OALD view_1 «In my view it was a waste of time» ✅. so … that: CD Grammar «So» (https://dictionary.cambridge.org/grammar/british-grammar/so) — «He’s so lazy that he never helps» ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build` перевіряв перебором усіх перестановок усіх підмножин tiles + extra (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s3-4/bin/chk.mjs`). Зараховуються лише ключі: a19 (2 порядки), a27, a39, a48. Кінцевого `.!?` у ключах `word` немає. Лексику перевіряв скриптом `lex.mjs` проти g4–g8, e9s1–e9s2 і уроків e9s3 до поточного: поза уроками лише stripy (лише в ключі, як друга відповідь), belt (є «belts», l3), brought (bring). Слів з пізніших уроків розділу немає. 6-грами проти g*-файлів (`ngram.mjs`) дали лише шаблонні інструкції.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | old-fashioned | = | l1 #3 | ні | ✅ |
| a02 word | out | = | l1 #3, outro «go out of fashion» | hint — навігація | ✅ |
| a03 pick | [fashionable] | = | l1 #3 | ні | ✅ |
| a04 choice | out of fashion | = | l1 #3 | ні | ✅ |
| a05 multi | [0,2] | = | l1 #3 | ні | ✅ |
| a06 choice | never go out of fashion | = | l1 #6, #7 | ні | ✅ |
| a07–a09 stress | за словником | = | §3 | hint a08/a09 загальні («Is the strong part always at the start?», аналогія з fashion) — стратегія, не відповідь | ✅ |
| a10 gaps | style; in fashion | = | l1 #3 | ні | ✅ |
| a11 gaps | in fashion; out of fashion | = | l1 #3 | ні | ✅ |
| a12 gaps (спірна) | old-fashioned; fashionable; fashionable; style | = | l1 #3, #6, #7 | Сумнів автора підтверджую частково. Умова «her friends love it» не відсікає *old-fashioned*: старомодну річ теж можна любити | ⚠️ → «lots of her friends wear one too» (визначення l1 «popular now: lots of people wear»); steps |
| a13 choice | a checked shirt | = | l2 #5 | ні | ✅ |
| a14 gaps | tracksuit; trainers | = | l2 #3 | ні | ✅ |
| a15 word | striped / stripy | = | l2 #5 | обидві в ключі | ✅ |
| a16 gaps | tight; loose; plain | = | l2 #5 | baggy не серед варіантів другого пропуску | ✅ |
| a17 pick | [spotted] | = | l2 #5 | ні | ✅ |
| a18 sort | 3/2/2 | = | l2 #3, #5 | ні | ✅ |
| a19 build | обидва порядки | = | l2 #5, #9 | перебір: лише 2 ключі | ✅ |
| a20 gaps (спірна, hint) | jumper; loose; trainers | = | l2 #3, #5 | hint — навігація до двох екранів, нічого не підписує | ✅ |
| a21 gaps (спірна, hint) | tracksuit; trainers; hoodie; tight | = | l2 #3, #5 | hint ставить питання, але не називає відповідь. Taras і athletics club — канон | ✅ |
| a22 gaps | denim; wool; leather | = | l3 #3 | ні | ✅ |
| a23 word | denim | = | l3 #3 | «Write the material» відсікає blue | ✅ |
| a24 multi | [0,1] | = | l3 #3 | ні | ✅ |
| a25 choice | a long green woollen scarf | = | l3 #6 | ні | ✅ |
| a26 gaps | a big blue; new red | = | l3 #6, #9 | ні | ✅ |
| a27 build | I bought a nice new cotton hoodie. | = | l3 #9 | перебір: лише ключ | ✅ |
| a28 pick | [a woollen blue scarf] | = | l3 #6 | ні | ✅ |
| a29 word | woollen / wool | = | l3 #3 | обидві в ключі | ✅ |
| a30 gaps | a beautiful long cotton; big old leather; a lovely small denim | = | l3 #9 | ні | ✅ |
| a31 gaps | a small green; a white cotton | = | l3 #6 | контекст повторював l3 intro («left … at the sports centre», лист), а спортцентру в Zelena Dolyna немає (канон) | ⚠️ → «on the bus to Poltava», «writes an email to the bus station» |
| a32 gaps | a cool black denim; big new; a long grey woollen | = | l3 #9 | ні | ✅ |
| a33 gaps | a big blue cotton; a nice old leather; a short black woollen | = | l3 #9 | Tom — swimming club з 7 кл. (канон) | ✅ |
| a34 choice | such a warm coat | = | l4 #6 | ні | ✅ |
| a35 gaps | so; such | = | l4 #4, #6 | ні | ✅ |
| a36 word | such | = | l4 #6 | ні | ✅ |
| a37 pick | [so cheap jumpers] | = | l4 #6 | ні | ✅ |
| a38 gaps | too; so; warm enough; such a | = | l4 #6, #10 | копія рамки l4 #11 («These boots are too small to wear. They’re so small that my feet hurt… isn’t warm enough for winter»): ті самі варіанти, порядок і відповіді (pitfalls п. 18). Hint повторював правила в порядку пропусків (п. 17) | ⚠️ → новий текст (boots too small to put on / Grandad’s coat so long that I can’t walk in it / warm enough · enough warm / such a cool jacket); hint — навігація; steps |
| a39 build | The boots were so comfortable that she walked in them all day. | = | l4 #3 | перебір: лише ключ | ✅ |
| a40 gaps | so; such a | = | l4 #3, #6 | ні | ✅ |
| a41 gaps | so; such; too | = | l4 #3, #6, #10 | кінцівка «too expensive… to buy three, so I bought one pair» майже дослівно повторює фінал l4 | ⚠️ → «too expensive for me to buy, so I didn’t buy any» |
| a42 gaps (спірна) | such a; too; so; such | = | l4 #6, #10 | друга правильна: «too bright that», «so lovely things» неграматичні. Бабуся Zoriana в каноні не згадана, суперечності немає | ✅ |
| a43 gaps | cold; like | = | l5 #5 | ні | ✅ |
| a44 word | if / though | = | l5 #3 | обидва в ключі | ✅ |
| a45 choice | as if he’s going camping | = | l5 #3 | ні | ✅ |
| a46 pick | [looks like] (happy) | = | l5 #5 | ні | ✅ |
| a47 gaps | worried; like; as if | = | l5 #5 | ні | ✅ |
| a48 build | Emma looks as if she’s going to the pool. | = | l5 #3 | перебір: лише ключ | ✅ |
| a49 choice | concert | = | l5 #3 | Zlata і бандура — канон | ✅ |
| a50 multi | [0,1] | = | l5 #3 | ні | ✅ |
| a51 choice | smart clothes | = | l5 #3, фінал l5 «You look smart» | ні | ✅ |
| a52 gaps | as if; smart | = | l5 #3, #5 | ні | ✅ |
| a53 gaps | as though; like; happy | = | l5 #3, #5 | ні | ✅ |
| a54 gaps | (нова) like; hungry; as though; such a | = | l5 #5, l4 #6 | копія рамки фіналу l5 (Emma → Oksana; «came … in his football things. He looked as if… looked like… Mum said “You look …!” It was such a … day»): ті самі набори варіантів і порядок. Hint підписував пропуски в порядку (п. 17) | ⚠️ → новий текст про день народження Halyna (kitchen looked like a café / looked hungry / looked as though he wanted… / such a lovely party); «such lovely cake» (незлічуване) свідомо не взято; hint, steps |
| a55 choice | They’re great… | = | l6 #3 | ні | ✅ |
| a56 multi | [0,2] | = | l6 #3, #4 | ні | ✅ |
| a57 choice | Zoriana | = | l6 #4, #7 | ні | ✅ |
| a58 gaps | In; agree | = | l6 #4 | body «opinion about second-hand clothes», а текст — про wide jeans | ⚠️ → «about wide jeans» |
| a59 word | opinion / view | = | l6 #4 | обидва в ключі | ✅ |
| a60 sort | 2/2/1 | = | l6 #4 | ні | ✅ |
| a61 choice | Maybe you’re right, but… | = | l6 #4 | ні | ✅ |
| a62 gaps | second-hand; lasted | = | l6 #3 | ні | ✅ |
| a63 gaps | clothes swap; because; agree | = | l6 #3, #4 | ❌ канон: у l6 #6 Bohdan каже «In my opinion, a swap is fun», а тут «he says swaps are boring». «Class swap last Friday» суперечить «Our first clothes swap is on 12 December in the school hall» | → «the school clothes swap», «in the school hall», «My sister Sofiia doesn’t agree with me: she says…» |
| a64 gaps | In; last; such a; true | = | l6 #3, #4, l4 #6 | «That’s right, but» серед варіантів немає | ✅ |

## 5. Інше
- **Канон героїв:** Grandad Mykola, Grandma Hanna, Halyna (Oksana); Zlata і бандура, Mr Hnatiuk, athletics (Taras); Emma і swimming, Grandad-cook (a47); Sofiia — сестра Andrii; Daryna і сестра; Bohdan, Zoriana, Kyrylo, Daryna, Ms Lysenko — клас Andrii. Поза a63 суперечностей немає. Нових імен немає.
- **BrE:** jumper, trainers, trousers, flat, rucksack, changing room, wardrobe ✅. AmE-написання хибним варіантом ніде не стоїть ✅.
- **like + речення** ніде не хибне. as if і as though ніде не протиставлені в одному пропуску ✅. Прикметники однієї групи й візерунки поруч із кольором у вправах на порядок не трапляються ✅.
- **Без IPA, звуку, «Listen»** ✅. Літер A/B/C і позиційних посилань в `opts` немає ✅. Оцінок зовнішності й тіла немає (у a54 «looked hungry» — про стан, не про зовнішність) ✅.
- **Авторське право** (WebSearch із лапками, найдовші фрагменти):

| Фрагмент | Запит | Результат |
|---|---|---|
| a05 «In 2001, all her friends wore dresses like that» | `"In 2001, all her friends wore dresses like that"` | збігів немає |
| a56 «I wear my clothes for a long time. My jacket lasted four years» | `"I wear my clothes for a long time. My jacket lasted four years"` | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe9s3` — 0 помилок, 0 попереджень (до і після правок). `node tools/personalization-qa.mjs --pool pe9s3`: 6 уроків, 64 вправи, кожна пара (урок, sk) ≥ 3, рівні 1–3. До зміни статусу був лише пункт «ще не verified». `node tools/euphony.mjs --pool pe9s3` — без зауважень. `python3 tools/test-answer-ui.py --suite content --pool pe9s3` — у контейнері немає модуля playwright, прогін буде в CI (job browser).

## 7. Правки (зроблені)
a12, a31, a38 (текст, hint, steps), a41, a54 (текст, hint, steps), a58, a63 і шапка й `status`/`factcheck`. id вправ не змінювались.

**Вердикт: pe9s3 — verified.** Відкритих ❌ і ⚠️ немає.
