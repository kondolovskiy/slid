/* Слід · Англійська мова, 9 клас — тест рівня «What do you know?» (dge9)
   Статус: draft — автор writer-write-eng-diag-g9, 2026-11-26.
   10 тем-передумов (уроки 8 кл. і наскрізна граматика 7 кл., по 2 завдання: базове → складніше)
   + 9 тем 9 класу (по 1 завданню на розділ e9s1–e9s9) = 29 завдань.
   Передумови — уроки, на які посилаються requires розділів 9 кл. (файли content/eng/g9-*.js; reports/verify/plan-eng-g7-8-9.md §2, §6);
   `for` кожної теми збігається з requires відповідних розділів.
   Теми cur — один урок розділу (без boss); граматика й лексика — лише з цих уроків і уроків 4–8 кл.
   Рівень — B1 наприкінці 9 кл. (модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., 2021; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні,
   звірені скриптом n-грам з уроками g4-*…g9-* (дослівних 5-грам немає; нотатки задачі write-eng-diag-g9).
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 9 класу (cur).
   id тесту dge9 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge9
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge9",
  grade: 9,
  title: "What do you know?",
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "draft",
  meta: { author: "writer-write-eng-diag-g9", created: "2026-11-26", factcheck: null, teacher: null },
  topics: [
    // передумови: уроки 8 кл. і наскрізна граматика 7 кл. (requires розділів 9 кл.)
    { id: "usedto", title: "I used to…, did you use to…?", kind: "pre", lessons: ["e7s5l3"], for: ["e9s1"] },
    { id: "pastperf", title: "It had already left", kind: "pre", lessons: ["e8s5l4", "e8s5l5"], for: ["e9s1", "e9s8"] },
    { id: "compadj", title: "World-famous, a two-hour concert", kind: "pre", lessons: ["e8s4l5"], for: ["e9s1"] },
    { id: "said", title: "She said…, he told us that…", kind: "pre", lessons: ["e8s3l4", "e8s3l5"], for: ["e9s4"] },
    { id: "rel", title: "The film we watched, Dnipro, which…", kind: "pre", lessons: ["e8s4l3", "e8s4l4"], for: ["e9s5"] },
    { id: "pass", title: "It should be done, it is being built", kind: "pre", lessons: ["e7s2l4", "e8s3l3"], for: ["e9s2", "e9s6"] },
    { id: "ingto", title: "I enjoy cooking, I hope to win", kind: "pre", lessons: ["e8s2l3"], for: ["e9s7"] },
    { id: "must", title: "Mustn’t, don’t have to, had to", kind: "pre", lessons: ["e8s6l5"], for: ["e9s7"] },
    { id: "cond2", title: "If I lived…, I would…", kind: "pre", lessons: ["e8s8l5", "e8s8l6"], for: ["e9s8"] },
    { id: "enough", title: "Tall enough, too expensive", kind: "pre", lessons: ["e7s4l6"], for: ["e9s3"] },
    // теми 9 класу: по одному уроку на розділ (без boss)
    { id: "cur-e9s1", title: "I was going to…, I thought it would…", kind: "cur", lessons: ["e9s1l5"] },
    { id: "cur-e9s2", title: "At ten, I’ll be working", kind: "cur", lessons: ["e9s2l4"] },
    { id: "cur-e9s3", title: "So warm that…, such a nice coat that…", kind: "cur", lessons: ["e9s3l4"] },
    { id: "cur-e9s4", title: "She asked where I lived", kind: "cur", lessons: ["e9s4l4"] },
    { id: "cur-e9s5", title: "A friend whose hobby is…", kind: "cur", lessons: ["e9s5l4"] },
    { id: "cur-e9s6", title: "How is it made? It is used for…", kind: "cur", lessons: ["e9s6l4"] },
    { id: "cur-e9s7", title: "Good at drawing, keen on cooking", kind: "cur", lessons: ["e9s7l2"] },
    { id: "cur-e9s8", title: "If I had known, I would have…", kind: "cur", lessons: ["e9s8l5"] },
    { id: "cur-e9s9", title: "Although, however, so", kind: "cur", lessons: ["e9s9l4"] }
  ],
  items: [
    /* ── базові завдання передумов ── */
    {
      topic: "usedto",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ten years ago, there was a small cinema in Roksolana’s street. Now there’s a supermarket.</p><p>There ___ be a cinema in Roksolana’s street.</p>",
      opts: ["used to", "use to", "uses to"],
      correct: 0
    },
    {
      topic: "pastperf",
      lesson: "e8s5l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Vlad wanted to give his old bike to his cousin Nadiia. But she didn’t need it: she ___ a new one the week before.</p>",
      opts: ["has bought", "had buy", "had bought"],
      correct: 2
    },
    {
      topic: "compadj",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Everybody in Ukraine knows this singer, and people in many other countries know her too.</p><p>She’s a ___ singer.</p>",
      opts: ["world-famous", "old-fashioned", "open-air"],
      correct: 0
    },
    {
      topic: "said",
      lesson: "e8s3l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Last month, Isla said: “We don’t have a pet.” Now they have a cat.</p><p>Isla said they ___ a pet.</p>",
      opts: ["don’t have", "doesn’t have", "didn’t have"],
      correct: 2
    },
    {
      topic: "rel",
      lesson: "e8s4l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>In which sentence can we leave out <b>that</b>?</p>",
      opts: ["The boy that won the race is my cousin.", "The film that we watched on Friday was long.", "The bus that goes to the airport is green."],
      correct: 1
    },
    {
      topic: "pass",
      lesson: "e7s2l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>A card on Zoriana’s new plant says: “Water it once a week.”</p><p>The plant should ___ once a week.</p>",
      opts: ["be watered", "watered", "water"],
      correct: 0
    },
    {
      topic: "ingto",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Nadiia doesn’t like busy places, so she ___ going to the shops on Saturdays.</p>",
      opts: ["wants", "avoids", "hopes"],
      correct: 1
    },
    {
      topic: "must",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>A notice at the zoo in Kharkiv: “On Sundays, the zoo is free for everyone.”</p><p>On Sundays, visitors ___ pay.</p>",
      opts: ["mustn’t", "have to", "don’t have to"],
      correct: 2
    },
    {
      topic: "cond2",
      lesson: "e8s8l5",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Stepan lives in Dnipro, far from the mountains. He imagines a different life.</p><p>If Stepan lived in the Carpathians, he ___ skiing every weekend.</p>",
      opts: ["will go", "would go", "goes"],
      correct: 1
    },
    {
      topic: "enough",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The top shelf in the library is two metres high. Vlad is 1.50 metres tall, and he can’t get his book.</p><p>Vlad isn’t ___ to get the book from the top shelf.</p>",
      opts: ["tall enough", "enough tall", "too tall"],
      correct: 0
    },

    /* ── складніші завдання передумов і теми 9 класу ── */
    {
      topic: "usedto",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana asks Grandma Hanna about her school days in Zelena Dolyna.</p>",
      text: "Oksana: Did you {*use|used} to walk to school, Grandma? Grandma: Yes, every morning. Our village {*didn’t use|didn’t used} to have a school bus. But I {*used|use} to love that long walk in spring."
    },
    {
      topic: "cur-e9s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Last summer, Vlad’s family wanted to go to the sea. Then Vlad’s dad got ill, so they stayed at home.</p>",
      text: "We {*were going to|are going to|will} travel to Odesa in July. Dad was sure he {*would|will} feel better soon, but he didn’t. Mum thought the holidays {*would|will} be boring. In fact, they were great fun!"
    },
    {
      topic: "pastperf",
      lesson: "e8s5l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>A winter evening in Dnipro:<br>9.00–10.00 pm – snow is falling (long).<br>9.40 pm – the last bus leaves.<br>9.45 pm – Stepan gets to the bus stop.<br>10.30 pm – Stepan gets home on foot.</p>",
      text: "Snow {*was falling|had fallen} when Stepan got to the bus stop. The last bus {*had left|was leaving|has left} five minutes before. So he {*walked|had walked} home through the snow."
    },
    {
      topic: "cur-e9s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Stepan’s plan for Saturday:<br>10 am – 12 pm: cleaning the park with the eco club.<br>1 pm – 3 pm: planting trees by the river.</p>",
      text: "At eleven on Saturday, Stepan {*will be cleaning|will cleaning|will be clean} the park. At two, he {*will be planting|is be planting|will planting} trees by the river. He {*won’t be sitting|won’t sitting|won’t be sit} at home all day!"
    },
    {
      topic: "compadj",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Daryna writes about a summer trip.</p>",
      text: "Last July, we went on a {*five-day|five-days} trip to the Carpathians. Every evening, there was an {*open-air|old-fashioned} cinema in the village square, so we sat outside under the stars. Everyone in our town knows my uncle Petro, but people in other cities don’t. He’s a {*well-known|world-famous} doctor, and he came with us."
    },
    {
      topic: "cur-e9s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Zlata writes about her autumn clothes.</p>",
      text: "The weather in Lviv was {*so|such|such a} rainy last week that I bought a raincoat. It’s {*such a|so|such} light coat that I can put it in my school bag. And Mum bought me {*such|such a|so} warm socks that my feet are never cold now."
    },
    {
      topic: "said",
      lesson: "e8s3l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>After the basketball game, Kyrylo talked to the coach. Then the coach talked to the team.</p>",
      text: "Kyrylo {*told|said} the coach that {*his|my} knee hurt. Later, the coach {*said|told} that Kyrylo couldn’t play on Saturday."
    },
    {
      topic: "cur-e9s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>At a summer camp, the leader asked Daryna three questions: “Where do you live?” “Can you swim?” “What are you reading at the moment?”</p>",
      text: "The leader asked Daryna where {*she lived|did she live|lived she}. She asked {*if|that} Daryna could swim. Then she asked what {*Daryna was reading|was Daryna reading}."
    },
    {
      topic: "rel",
      lesson: "e8s4l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Stepan writes about his grandad’s bike.</p>",
      text: "My grandad, {*who|that} was born in 1950, still goes everywhere by bike. The bike {*he rides|he rides it} is older than my dad! He keeps it in the garden, {*which|who} is behind our house."
    },
    {
      topic: "cur-e9s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Stepan writes about the photography club in Dnipro.</p>",
      text: "Mr Koval, {*whose|who’s} photos are in lots of magazines, is our leader. Vlad, {*who|whose} started the club two years ago, helps new members. We meet in an old building {*whose|who’s} windows look over the river."
    },
    {
      topic: "pass",
      lesson: "e8s3l3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Zoriana’s post. The work at her school in Kyiv is happening right now.</p>",
      text: "Solar panels {*are being put|are putting|is being put} on the roof of our school. The old gym {*is being cleaned|is cleaning|are being cleaned}. And new bins for paper and plastic {*are being brought|are bringing|is being brought} to every classroom."
    },
    {
      topic: "cur-e9s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Zoriana writes about a small paper workshop in Kyiv.</p>",
      text: "First, old newspapers {*are cut|are cutting|is cut} into small pieces. Then water {*is added|are added|adds}. The new paper {*is used|uses|are used} for greetings cards."
    },
    {
      topic: "ingto",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Vlad writes about his healthy year.</p>",
      text: "In January, I decided {*to eat|eating} less sugar. Now I avoid {*buying|to buy} sweets at the shop. And I really enjoy {*cooking|to cook} soup with my dad."
    },
    {
      topic: "cur-e9s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Polina writes about the job she wants.</p>",
      text: "I’m keen {*on|in} {*designing|to design} clothes, and I’d like to work in fashion. I’m bad {*at|of} cooking, so I won’t be a chef!"
    },
    {
      topic: "must",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Two years ago, Daryna moved from Lutsk to Kyiv. She compares her old and new schools.</p>",
      text: "At my old school in Lutsk, we {*had to|must|have to} wear a white shirt every day. At my new school, pupils {*don’t have to|mustn’t} do homework at weekends: it’s their choice. But they {*mustn’t|don’t have to} eat in the computer room: it’s a rule."
    },
    {
      topic: "cur-e9s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Last Saturday, Bohdan didn’t charge his phone. He got lost in the park and couldn’t call his mum. He was late for dinner.</p>",
      text: "If Bohdan {*had charged|would have charged|charged} his phone, he {*would have called|would call|will call} his mum. And if he {*hadn’t got|wouldn’t have got|didn’t get} lost, he wouldn’t have been late for dinner."
    },
    {
      topic: "cond2",
      lesson: "e8s8l6",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Andrii and Isla imagine a trip.</p>",
      text: "Andrii: Where {*would you go|you would go|will you go} first if you won a trip to Ukraine? Isla: To Kyiv! If the trip were longer, I {*could|can} see Odesa too. Andrii: Would you visit my school? Isla: Yes, I {*would|did}!"
    },
    {
      topic: "enough",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Ostap is choosing a coat in a shop. He has ₴2,000.</p>",
      text: "The green coat is {*too|enough} expensive for Ostap: it costs ₴4,000. The grey coat is cheap, but it isn’t {*big enough|enough big} for him. The black one is perfect: it’s light enough {*to wear|wearing} in spring."
    },
    {
      topic: "cur-e9s9",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Kyrylo writes about his history test.</p>",
      text: "{*Although|However|So} the test was hard, I got a good mark. I had studied a lot, {*so|because|although} I felt calm. The questions were long. {*However|Although|Because}, there was enough time."
    }
  ]
});
