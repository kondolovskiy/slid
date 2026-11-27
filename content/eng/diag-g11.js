/* Слід · Англійська мова, 11 клас — тест рівня «What do you know?» (dge11)
   Статус: verified (verifier-write-eng-diag-g11, 2026-11-27; reports/verify/write-eng-diag-g11.md) — автор writer-write-eng-diag-g11, 2026-11-27.
   10 тем-передумов (уроки 10 кл. і наскрізна граматика й лексика 5–9 кл., по 2 завдання: базове → складніше)
   + 8 тем 11 класу (по 1 завданню на розділ e11s1–e11s8) = 28 завдань.
   Передумови — уроки, на які посилаються requires розділів 11 кл. (файли content/eng/g11-*.js);
   `for` кожної теми — розділи, у requires яких є уроки теми.
   Теми cur — один урок розділу (без boss); граматика й лексика — лише з цих уроків і уроків 4–10 кл.
   Рівень — B2 наприкінці 11 кл. (програма «Іноземні мови. 10–11 класи», наказ МОН № 1407, 2017, спеціалізовані школи;
   facts/eng.md «Джерела»; рішення людини 2026-11-19).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні,
   звірені скриптом n-грам з уроками g4-*…g11-* і тестами dge4–dge10 (нотатки задачі write-eng-diag-g11).
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 11 класу (cur).
   id тесту dge11 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge11
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge11",
  grade: 11,
  title: "What do you know?",
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "verified",
  meta: { author: "writer-write-eng-diag-g11", created: "2026-11-27", factcheck: "verifier-write-eng-diag-g11, 2026-11-27 (reports/verify/write-eng-diag-g11.md)", teacher: null },
  topics: [
    // передумови: уроки 10 кл. і наскрізна граматика й лексика 5–9 кл. (requires розділів 11 кл.)
    { id: "pers", title: "Reliable, loyal, stubborn", kind: "pre", lessons: ["e10s1l1"], for: ["e11s1", "e11s4"] },
    { id: "repst", title: "She said she was…, he asked if…", kind: "pre", lessons: ["e8s3l4", "e9s4l4"], for: ["e11s1"] },
    { id: "quant", title: "How much, too many, not enough", kind: "pre", lessons: ["e5s3l4", "e8s2l2"], for: ["e11s2"] },
    { id: "qtag", title: "You’re ready, aren’t you?", kind: "pre", lessons: ["e8s1l4"], for: ["e11s3"] },
    { id: "ingadj", title: "Bored or boring?", kind: "pre", lessons: ["e7s4l4"], for: ["e11s4"] },
    { id: "pass", title: "It is being built, it must be done", kind: "pre", lessons: ["e8s3l3", "e9s2l5"], for: ["e11s5"] },
    { id: "phrv", title: "Hand it in, apply for it", kind: "pre", lessons: ["e10s8l3", "e10s8l4"], for: ["e11s6"] },
    { id: "rel", title: "My aunt, whose son…", kind: "pre", lessons: ["e8s4l4", "e9s5l4"], for: ["e11s7"] },
    { id: "fut", title: "It’s going to…, it will have started", kind: "pre", lessons: ["e10s4l2", "e10s4l5"], for: ["e11s8"] },
    { id: "ppc", title: "We had been living there for years", kind: "pre", lessons: ["e10s5l4"], for: ["e11s8"] },
    // теми 11 класу: по одному уроку на розділ (без boss)
    { id: "cur-e11s1", title: "Admitted, explained, suggested", kind: "cur", lessons: ["e11s1l4"] },
    { id: "cur-e11s2", title: "A few or few? Very little", kind: "cur", lessons: ["e11s2l3"] },
    { id: "cur-e11s3", title: "Aren’t I? Shall we?", kind: "cur", lessons: ["e11s3l4"] },
    { id: "cur-e11s4", title: "Dangerous, invisible, priceless", kind: "cur", lessons: ["e11s4l4"] },
    { id: "cur-e11s5", title: "It has been built, it will be done", kind: "cur", lessons: ["e11s5l3"] },
    { id: "cur-e11s6", title: "At first, eventually, at the end of", kind: "cur", lessons: ["e11s6l5"] },
    { id: "cur-e11s7", title: "…, which surprised everyone", kind: "cur", lessons: ["e11s7l5"] },
    { id: "cur-e11s8", title: "If I pass, if I passed, if I had passed", kind: "cur", lessons: ["e11s8l3"] }
  ],
  items: [
    /* ── базові завдання передумов ── */
    {
      topic: "pers",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>When Nazar’s little brother is ill, Nazar reads to him and makes him tea. Nazar always thinks about how other people feel.</p><p>He’s ___.</p>",
      opts: ["considerate", "stubborn", "selfish"],
      correct: 0
    },
    {
      topic: "repst",
      lesson: "e8s3l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Last spring, Olesia said, “I’m learning to play the drums.” A month later, she stopped.</p><p>Olesia said she ___ to play the drums.</p>",
      opts: ["were learning", "was learning", "is learn"],
      correct: 1
    },
    {
      topic: "quant",
      lesson: "e5s3l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ivanka wants to bake a cake. She asks her dad:</p><p>“How ___ flour is there in the cupboard?”</p>",
      opts: ["many", "a lot of", "much"],
      correct: 2
    },
    {
      topic: "qtag",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Lunch is ready, but Roksolana isn’t eating. Her mum checks:</p><p>“You aren’t hungry, ___?”</p>",
      opts: ["are you", "aren’t you", "do you"],
      correct: 0
    },
    {
      topic: "ingadj",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>The museum tour lasted four hours, and we had to stand all the time.</p><p>It was really ___.</p>",
      opts: ["tired", "tiring", "bored"],
      correct: 1
    },
    {
      topic: "pass",
      lesson: "e8s3l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>A notice on the door of the swimming pool:</p><p>Closed today. The water in the pool ___ changed.</p>",
      opts: ["is being", "are being", "is been"],
      correct: 0
    },
    {
      topic: "phrv",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Ustyna doesn’t know what time the castle museum opens on Sundays. She’ll check online to ___.</p>",
      opts: ["hand in", "turn down", "find out"],
      correct: 2
    },
    {
      topic: "rel",
      lesson: "e8s4l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Which sentence is correct?</p>",
      opts: ["My grandma, that lives in Uzhhorod, grows tomatoes.", "My grandma, which lives in Uzhhorod, grows tomatoes.", "My grandma, who lives in Uzhhorod, grows tomatoes."],
      correct: 2
    },
    {
      topic: "fut",
      lesson: "e10s4l2",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Which prediction is based on something you can see at the moment?</p>",
      opts: ["“I think people will live on Mars one day.”", "“Look at that queue! We’re going to wait for ages.”", "“In my opinion, trains will be faster in 2040.”"],
      correct: 1
    },
    {
      topic: "ppc",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>It rained all afternoon, so the children stayed in their tent and played cards.</p><p>When the rain finally stopped, they ___ cards in the tent since lunch.</p>",
      opts: ["have been playing", "had been playing", "had been play"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 11 класу ── */
    {
      topic: "pers",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Roman writes about his volleyball team.</p>",
      text: "Vitalii never changes his mind, even when he’s clearly wrong. He’s so {*stubborn|sensitive|generous}. Petro is different: one wrong word about his hair, and he gets upset. He’s very {*sensitive|stubborn|selfish}. But my favourite is Yuliia. Last season we lost almost every match, but she came to every training session and supported us. She’s really {*loyal|moody|selfish}.",
    },
    {
      topic: "cur-e11s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The class is planning a trip to a museum.</p><p><b>Danylo:</b> I forgot to book the bus. Sorry, it’s my fault.<br><b>Ms Sydorenko, the class teacher:</b> The museum doesn’t open on Mondays, so we can’t go then.<br><b>Iryna:</b> Why don’t we go on Tuesday instead?</p>",
      text: "Danylo {*admitted|denied|promised} that he had forgotten to book the bus. Ms Sydorenko explained {*to the class|the class} that the museum didn’t open on Mondays. Iryna suggested {*going|to go|us to go} on Tuesday instead."
    },
    {
      topic: "repst",
      lesson: "e9s4l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Last month, a basketball coach asked Ilko three questions.</p><p>“Do you play any other sports?”<br>“How many times a week do you train?”<br>“Why are you late?”</p>",
      text: "The coach asked {*if I played|if did I play|that I played} any other sports. Then he asked how many times a week {*I trained|did I train|trained I}. He also wanted to know why {*I was|was I|I am} late."
    },
    {
      topic: "quant",
      lesson: "e8s2l2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Kira describes the school trip to Chernihiv.</p>",
      text: "The trip was fun, but there were some problems. We took too {*many|much} bags, so the bus was full. There was too {*much|many} noise at the hostel, so nobody slept well. And the café near the hostel didn’t have {*enough|too much} tables for all of us."
    },
    {
      topic: "cur-e11s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Nastia writes about her new school.</p>",
      text: "The school has {*a few|few} clubs after lessons, so it was easy to find one for me. But there’s {*very little|very few|a few} time between lessons, so I’m always running. And {*few|a few} pupils use the library because it’s so small and dark."
    },
    {
      topic: "qtag",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oleh talks to Bozhena, a new girl at his school.</p>",
      text: "You’re in the school choir, {*aren’t you|don’t you|isn’t you}? The next concert isn’t on Friday, {*is it|does it|isn’t it}? And your dad plays the violin, {*doesn’t he|don’t he|isn’t he}?"
    },
    {
      topic: "cur-e11s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Hlib and Marta are at the cinema.</p>",
      text: "Hlib: You’ve already seen this film, {*haven’t you|didn’t you|don’t you}? Marta: Yes, twice! Let’s buy some popcorn first, {*shall we|don’t we|will we}? Hlib: OK. I’m next in the queue, {*aren’t I|isn’t I|am not I}?"
    },
    {
      topic: "ingadj",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Nadiia writes about her weekend.</p>",
      text: "I’m very {*interested|interesting} in old cars, so on Saturday I went to a car show in Lutsk. I had been {*excited|exciting} about it all week. But the show was small, and after an hour my friend Yarema said, “This is {*boring|bored}. Let’s get some ice cream.”"
    },
    {
      topic: "cur-e11s4",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Larysa writes about a surprise in her uncle’s garage.</p>",
      text: "Last spring, my uncle found an old painting in his garage. There was broken glass all around it, and broken glass is {*dangerous|dangerive|dangeric}, so he wore gloves. Under the dust, the artist’s name was almost {*invisible|disvisible|imvisible}. An expert from the local museum was amazed. She said the painting was {*priceless|worthless|priceful} and should hang in a museum."
    },
    {
      topic: "pass",
      lesson: "e9s2l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The rules of the school library.</p>",
      text: "Books {*must be returned|must return|must been returned} within two weeks. Phones {*must not be used|must not use|must not be using} in the reading room. Old magazines {*can be taken|can taken|can be took} home for free."
    },
    {
      topic: "cur-e11s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>News from the school art competition.</p>",
      text: "So far, more than two hundred pictures {*have been painted|has been painted|have been paint} for the competition. Last Monday, while the pictures {*were being moved|was being moved|were being move} to the school hall, one of them fell, but luckily it didn’t break. The best pictures {*will be shown|will shown|will be show} at the town library in May."
    },
    {
      topic: "phrv",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mr Savchuk gave Vlad’s class their essays back and asked them to correct the mistakes.</p>",
      text: "I corrected my essay on Sunday and handed {*it in|in it} on Monday. Then I couldn’t find my history notes anywhere. I looked {*for them|them for} all evening and finally found them in my bag. My sister saw an advert for a summer job at the zoo and applied {*for it|it for} the same day."
    },
    {
      topic: "cur-e11s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Marichka writes about her first trip abroad.</p>",
      text: "{*At first|Eventually|Meanwhile}, I was afraid to speak English, but after a few days it became easier. One evening, we got lost in Dublin. We asked three people for directions, and {*eventually|at first|meanwhile} we found our hotel. We went home {*at the end of|in the end of|in the end} the week, tired but happy."
    },
    {
      topic: "rel",
      lesson: "e9s5l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Vira writes about her neighbours.</p>",
      text: "Our new neighbour is a woman {*whose|who’s|who} son repairs bikes for the whole street. Her husband, {*who|that|whose} works at the hospital, gets up at five every morning. Their old car, {*which|that|who} is bright yellow, is famous in our street."
    },
    {
      topic: "cur-e11s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>News on the website of a school in Rivne.</p>",
      text: "Our debate team won the national final, {*which|what|that} surprised everyone. The prize is a trip to a competition in Ireland, {*which means|what means|who means} that the team needs passports. Two members haven’t got passports yet, {*which is why|what is why|who is why} they are applying for them this week."
    },
    {
      topic: "fut",
      lesson: "e10s4l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Matvii’s football practice ends at 6.30 pm, and he gets to the concert hall at about 6.45 pm. His sister’s school concert is from 6 pm to 7.30 pm. She sings her two songs at 6.10 and 6.20 pm.</p>",
      text: "When Matvii arrives, the concert {*will have started|will have start|will started}. But it {*won’t have finished|won’t have finish|don’t have finished}. Sadly, his sister {*will have sung|will have sang|will sang} both of her songs by then."
    },
    {
      topic: "ppc",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Ilona’s family moved from Sumy to Dnipro in 2024. Ilona writes about the day they left.</p>",
      text: "We {*had been living|have been living|had been live} in the same flat for twelve years, so it was hard to leave. My little brother was crying when the taxi came, because he {*had been saying|has been saying|had been say} goodbye to his friends all morning. And I {*had known|had been knowing} my best friend Zhenia since we were five."
    },
    {
      topic: "cur-e11s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Marta writes to her cousin in the summer.</p>",
      text: "Last month, I sent my form for the climbing camp two days late. If I had sent it in time, I {*would have gone|would go|will go} to the camp last week. Now I’m helping at my aunt’s café instead. If I didn’t have this job, I {*would be|will be|am} bored at home. And my aunt says that if I work hard all month, she {*will pay|would pay|would have paid} for my climbing lessons in September."
    }
  ]
});
