/* Слід · Англійська мова, 10 клас — тест рівня «What do you know?» (dge10)
   Статус: draft — автор writer-write-eng-diag-g10, 2026-11-26.
   10 тем-передумов (уроки 9 кл. і наскрізна граматика й лексика 6–8 кл., по 2 завдання: базове → складніше)
   + 8 тем 10 класу (по 1 завданню на розділ e10s1–e10s8) = 28 завдань.
   Передумови — уроки, на які посилаються requires розділів 10 кл. (файли content/eng/g10-*.js);
   `for` кожної теми збігається з requires відповідних розділів.
   Теми cur — один урок розділу (без boss); граматика й лексика — лише з цих уроків і уроків 4–9 кл.
   Рівень — B1+ → B2 (B2 — наприкінці 11 кл.; програма «Іноземні мови. 10–11 класи», наказ МОН № 1407, 2017; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні,
   звірені скриптом n-грам з уроками g4-*…g10-* і тестами dge4–dge9 (дослівних 5-грам немає; нотатки задачі write-eng-diag-g10).
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 10 класу (cur).
   id тесту dge10 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge10
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge10",
  grade: 10,
  title: "What do you know?",
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "draft",
  meta: { author: "writer-write-eng-diag-g10", created: "2026-11-26", factcheck: "self", teacher: null },
  topics: [
    // передумови: уроки 9 кл. і наскрізна граматика й лексика 6–8 кл. (requires розділів 10 кл.)
    { id: "pers", title: "Honest, easy-going, open-minded", kind: "pre", lessons: ["e6s1l4", "e9s1l2"], for: ["e10s1"] },
    { id: "pastperf", title: "The match had finished", kind: "pre", lessons: ["e8s5l4", "e8s5l5"], for: ["e10s1", "e10s5"] },
    { id: "pastcont", title: "I was reading when the phone rang", kind: "pre", lessons: ["e6s4l4", "e6s4l5"], for: ["e10s1", "e10s5"] },
    { id: "usedto", title: "He used to…, he would…", kind: "pre", lessons: ["e7s5l3", "e9s1l4"], for: ["e10s3"] },
    { id: "ingto", title: "Finish doing, decide to do", kind: "pre", lessons: ["e8s2l3"], for: ["e10s2"] },
    { id: "phrv", title: "Take up, give up, work out", kind: "pre", lessons: ["e8s2l4"], for: ["e10s2", "e10s3", "e10s8"] },
    { id: "fut", title: "It’s going to…, I’ll be flying", kind: "pre", lessons: ["e9s2l3", "e9s2l4"], for: ["e10s4"] },
    { id: "cond", title: "If it rains, we’ll…, if I had…, I’d…", kind: "pre", lessons: ["e7s6l3", "e8s8l5"], for: ["e10s6"] },
    { id: "link", title: "So cold that…, although, however", kind: "pre", lessons: ["e9s3l4", "e9s9l4"], for: ["e10s7"] },
    { id: "pass", title: "It was made by…", kind: "pre", lessons: ["e7s7l2"], for: ["e10s5"] },
    // теми 10 класу: по одному уроку на розділ (без boss)
    { id: "cur-e10s1", title: "Before, as soon as, until", kind: "cur", lessons: ["e10s1l4"] },
    { id: "cur-e10s2", title: "Stop to rest, remember racing", kind: "cur", lessons: ["e10s2l4"] },
    { id: "cur-e10s3", title: "Used to, be used to, get used to", kind: "cur", lessons: ["e10s3l6"] },
    { id: "cur-e10s4", title: "By May, they will have built…", kind: "cur", lessons: ["e10s4l5"] },
    { id: "cur-e10s5", title: "He had been working for hours", kind: "cur", lessons: ["e10s5l4"] },
    { id: "cur-e10s6", title: "If I were you, I’d…", kind: "cur", lessons: ["e10s6l5"] },
    { id: "cur-e10s7", title: "Owing to, therefore, so that", kind: "cur", lessons: ["e10s7l5"] },
    { id: "cur-e10s8", title: "Put it off, prepare for it", kind: "cur", lessons: ["e10s8l4"] }
  ],
  items: [
    /* ── базові завдання передумов ── */
    {
      topic: "pers",
      lesson: "e6s1l4",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Sofiia always tells the truth, even when it’s difficult.</p><p>She’s ___.</p>",
      opts: ["lazy", "honest", "shy"],
      correct: 1
    },
    {
      topic: "pastperf",
      lesson: "e8s5l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The match finished at 5.00 pm. Ostap turned on the TV at 5.10 pm.</p><p>When Ostap turned on the TV, the match ___.</p>",
      opts: ["has finished", "finishes", "had finished"],
      correct: 2
    },
    {
      topic: "pastcont",
      lesson: "e6s4l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>At eight o’clock yesterday evening, Taras and his dad ___ a film.</p>",
      opts: ["were watching", "was watching", "are watching"],
      correct: 0
    },
    {
      topic: "usedto",
      lesson: "e7s5l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ten years ago, Halyna had long hair. Now her hair is short.</p><p>Which sentence is true?</p>",
      opts: ["Halyna use to have short hair.", "Halyna used to have long hair.", "Halyna used to have short hair."],
      correct: 1
    },
    {
      topic: "ingto",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Bohdan has decided ___ volleyball this year.</p>",
      opts: ["trying", "try", "to try"],
      correct: 2
    },
    {
      topic: "phrv",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Ilona wanted to be healthier, so last month she ___ crisps. Now she eats apples instead.</p>",
      opts: ["gave up", "took up", "worked out"],
      correct: 0
    },
    {
      topic: "fut",
      lesson: "e9s2l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ostap is carrying six cups of tea, and his hands are shaking.</p><p>Look out! The cups ___ fall!</p>",
      opts: ["going to", "are going to", "is going to"],
      correct: 1
    },
    {
      topic: "cond",
      lesson: "e7s6l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>If Kateryna ___ the 7.10 bus, she’ll get to school early.</p>",
      opts: ["will catch", "caught", "catches"],
      correct: 2
    },
    {
      topic: "link",
      lesson: "e9s3l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The lake was ___ that nobody wanted to swim.</p>",
      opts: ["so cold", "such cold", "so a cold"],
      correct: 0
    },
    {
      topic: "pass",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Look at this cake! It ___ by my little brother this morning.</p>",
      opts: ["made", "was made", "was make"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 10 класу ── */
    {
      topic: "pers",
      lesson: "e9s1l2",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Mariia writes about her new classmate Vadym.</p>",
      text: "Vadym always wants to try food from other countries, and he’s happy to hear other people’s ideas. He’s {*open-minded|bad-tempered|lazy}. Last week our team lost the quiz, but he just laughed and said, “Next time!” He’s really {*easy-going|bad-tempered}. And he speaks in front of the whole school without feeling nervous: he’s very {*self-confident|shy|lazy}."
    },
    {
      topic: "cur-e10s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Lesia’s evening:<br>5.30 pm – dinner.<br>6.00 pm – she starts her history project.<br>9.00 pm – the project is ready.<br>9.01 pm – she emails it to her teacher.<br>9.30 pm – she goes to bed.</p>",
      text: "Lesia had dinner {*before|after|as soon as} she started her project. She emailed it to her teacher {*as soon as|until|before} it was ready. She stayed up {*until|before|as soon as} half past nine, and then she went to bed."
    },
    {
      topic: "pastperf",
      lesson: "e8s5l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mykyta writes about last Saturday.</p>",
      text: "It {*was raining|is raining|had rain} when I got up on Saturday. I looked for my umbrella, but I couldn’t find it: my sister {*had taken|has taken|takes} it to her friend’s house the day before. So I {*put on|had put on|have put on} my raincoat and ran to the bus stop."
    },
    {
      topic: "pastcont",
      lesson: "e6s4l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Last Sunday, Mariia was in the garden from two to four. At three, her phone rang.</p>",
      text: "Mariia {*was reading|were reading|was read} a book in the garden when her phone {*rang|ringed|was ring}. While she {*was talking|were talking|was talk} to her friend, it started to rain."
    },
    {
      topic: "cur-e10s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Yurii started repairing his grandad’s old bike at 10 am. At 2 pm, his friend Danylo came round.</p>",
      text: "When Danylo came, Yurii {*had been working|has been working|was working} in the garage for four hours. By then, he {*had repaired|had been repairing} three things: the seat, the lights and the bell. His hands were black because he {*had been cleaning|has been cleaning|had been clean} the wheels all morning."
    },
    {
      topic: "pass",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Grandma shows Kateryna two old portraits.</p>",
      text: "These two portraits {*were painted|was painted|painted} by Grandma’s mother, Motria. She {*finished|was finished} them in 1965. Grandma’s house {*was built|built|were built} by Motria’s brother."
    },
    {
      topic: "ingto",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Ostap writes about his Tuesday evening.</p>",
      text: "After I finished {*doing|to do} my homework, I wanted {*to go|going} for a run in the park. I hope {*to take|taking} part in the city race next spring."
    },
    {
      topic: "cur-e10s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Matvii writes about his first ski trip in the Carpathians.</p>",
      text: "On the way up the mountain, we were tired, so we stopped {*to rest|resting} for a few minutes. I’ll always remember {*racing|to race} my dad down the hill on the last day. But I forgot {*to put on|putting on} sun cream, and my nose went bright red!"
    },
    {
      topic: "phrv",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes about his new habits.</p>",
      text: "Last autumn, I {*took up|gave up} basketball, and now I go to training after school. At the same time, I {*gave up|took up} chocolate bars: I don’t eat them now. On rainy days, I {*work out|get up} in the school gym."
    },
    {
      topic: "usedto",
      lesson: "e9s1l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his grandad. Grandad doesn’t work now.</p>",
      text: "My grandad {*used to|would} be a bus driver in Lviv. Every Friday, he {*would|will} bring us sweets from the bus station. He {*used to|would} know every street in the city."
    },
    {
      topic: "cur-e10s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Ben moved from Leeds to Lviv with his parents last autumn.</p>",
      text: "In Leeds, Ben {*used to|was used to} cycle everywhere. In Lviv, he takes a tram, and at first he {*wasn’t used to|didn’t use to} travelling in such busy trams. But now he’s {*getting used to|get used to} it."
    },
    {
      topic: "fut",
      lesson: "e9s2l4",
      type: "build",
      sk: "gram",
      title: "Put the words in order.",
      body: "<p>Yaryna’s train to Lviv leaves at 8 am on Friday and arrives at 12 pm. She writes to Emma: “Sorry, I can’t chat at ten on Friday: …”</p>",
      tiles: ["I’ll", "be", "sitting", "on the train", "then"],
      extra: ["sit"],
      answer: ["I’ll be sitting on the train then.", "Then I’ll be sitting on the train."]
    },
    {
      topic: "cur-e10s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about the new playground in Zelena Dolyna.<br>March – 28 April: workers are building it.<br>1 May: it opens.</p>",
      text: "The workers {*will have built|will be built|have built} the new playground by 28 April. Nobody can play there {*until|by} 1 May. By September, lots of children {*will have played|will have play|will played} on it."
    },
    {
      topic: "cond",
      lesson: "e8s8l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Stepan’s flat is on the ninth floor, and there’s no garden. He would love a dog.</p>",
      text: "If Stepan {*had|has|would have} a garden, his parents {*would let|will let|let} him get a dog. He {*would take|takes|took} it for a walk every morning."
    },
    {
      topic: "cur-e10s6",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Kyrylo’s tablet is very slow. He asks his sister Yaryna for advice.</p>",
      text: "Kyrylo: My tablet is really slow. What should I do? Yaryna: I’d ask Dad to look at it if I {*were|am|will be} you. And I {*wouldn’t|won’t|didn’t} play games on it till midnight. Kyrylo: That {*makes|does|gives} sense. Thanks!"
    },
    {
      topic: "link",
      lesson: "e9s9l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mariia writes about her summer visits.</p>",
      text: "{*Although|However|Because} Lviv is far from Kharkiv, I visit my cousin there every summer. The journey takes almost a day. {*However|Although|So}, I never get bored on the train."
    },
    {
      topic: "cur-e10s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about a snowy day in her village.</p>",
      text: "The village library is closed today {*owing to|because} the heavy snow. The roads are icy. {*Therefore|Because|Although}, the bus from the town isn’t running. Volunteers are cleaning the path {*so that|due to} readers can come in tomorrow."
    },
    {
      topic: "cur-e10s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Zoriana wants to go on a coding course in the summer.</p>",
      text: "Zoriana got the application form on Monday, and she didn’t put {*it off|off it}: she sent her answers the same evening. Now there’s an online test for new pupils, and she’s preparing {*for it|it for}. Her friend Daryna wants to join the course too. She’ll fill {*in her form|in it} after dinner."
    }
  ]
});
