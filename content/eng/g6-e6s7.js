/* Слід · Англійська мова, 6 клас — «Kyiv, the capital of Ukraine» (e6s7)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Україна» — Київ, визначні місця (с. 20, розд. 4.2.2); функції — описувати, запитувати та надавати інформацію;
   граматика A2 (с. 21–22): Present Perfect — experiences up to now, ever / never, been to; Passives — Past Simple affirmative
   (It was built in…; «When was it built?» — лише питання-опора, дитина пише відповідь); the + limiting adjectives (the main…,
   the only…); superlatives — повторення e5s10l5. https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g6.md §2, §6; рядки plan — content/eng/plan.js (e6s7).
   Герої — канон серії (memory/short/inbox.md NOTE (герої)): Andrii, сестра Sofiia, однокласники Bohdan, Daryna, Zoriana — Kyiv;
   Emma — Англія, клас їздив до Києва взимку (e5s4); Taras — Lviv, був у Києві з татом улітку (e4s7), друг Ostap.
   Нова героїня — Amelia, подруга Emma зі спортивного клубу плавання (Англія), уперше їде до Києва в травні.
   Факти про Київ — щонайменше два відкриті джерела кожен (ЕСУ, en/uk.wikipedia; URL — tasks/…/write-eng-g6-e6s7.md, «Нотатки агента»);
   дати будівництва — лише встановлені (століття там, де точний рік спірний).
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (reports/verify/e6s7.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s7",
  grade: 6,
  weeks: [28, 31],
  title: "Kyiv, the capital of Ukraine",
  why: "To tell people about Kyiv and its famous places. And to ask a friend: “Have you ever been to Kyiv?”",
  requires: ["e4s7l3", "e5s10l1", "e5s10l5", "e5s7l6", "e6s3l4", "e6s3l5"],
  meta: { author: "writer-e6s7", created: "2026-11-20", factcheck: "verifier-e6s7 (reports/verify/e6s7.md)", teacher: null },
  badges: [
    { id: "e6s7boss", name: "Kyiv guide", icon: "trophy", desc: "Finish the final lesson “Kyiv, the capital of Ukraine”" }
  ],
  credits: [
    ["St Sophia’s Cathedral, Kyiv, view from the south (img/eng/e6s7/sofia.jpg)", "Galvm", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Kyiv-Saint_Sophia_Cathedral-south_view.jpg"],
    ["St Andrew’s Church, Kyiv, 13 July 2019 (img/eng/e6s7/st-andrews-church.jpg)", "Maksym Kozlenko", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:2019-07-13_St._Andrew%27s_Church,_Kyiv,_Ukraine_1.jpg"]
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s7l1",
      title: "Kyiv on the map: a city on the Dnipro",
      short: "On the map",
      icon: "map",
      status: "verified",
      why: "Visitors often ask where Kyiv is. Learn to describe the city on the map.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where is Kyiv?",
          body: `<p class="lead">Emma’s friend Amelia lives in England. In May, she’s going to visit Kyiv with her parents. Emma asks Andrii to help.</p><p><i>Hi Amelia! Kyiv is the capital of Ukraine. It’s on the Dnipro. The river goes through the city, so Kyiv is on both sides of it. The old part of the city is on the west side, on hills. There are bridges over the river. – Andrii</i></p><p>Why are there bridges in Kyiv?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Andrii: “The river goes through the city, so Kyiv is on both sides of it.”</p><p>Why are there bridges in Kyiv?</p>`,
          opts: [
            "Kyiv is on both sides of the river.",
            "Kyiv is on the west side only.",
            "There are no hills in Kyiv."
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Andrii’s message again.",
          fbText: "The Dnipro goes <b>through</b> Kyiv. The city is <b>on both sides</b> of the river, so people need bridges."
        },
        {
          type: "info",
          title: "A city on a river",
          body: `<ul><li>Kyiv is <b>on</b> the Dnipro. (a city <b>on</b> a river)</li><li>The Dnipro goes <b>through</b> Kyiv.</li><li>Kyiv is on <b>both sides</b> of the river: the <b>west</b> side and the <b>east</b> side.</li><li>A <b>bridge</b> goes <b>over</b> a river.</li><li>The old part of Kyiv is <b>on hills</b>.</li></ul><p>Rivers: <b>the</b> Dnipro, <b>the</b> Thames.<br>Cities and countries: Kyiv, Ukraine – no <i>the</i>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Kyiv is {*in|on} Ukraine. It’s {*on|in} the Dnipro. {*The Dnipro|Dnipro} goes through the city. Kyiv is on both {*sides|side} of the river.",
          hint: "Rivers have the. Cities and countries don’t.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule again: rivers have the.",
          fbText: "Kyiv is <b>in</b> Ukraine. A city is <b>on</b> a river: on <b>the</b> Dnipro. The river has <b>the</b>. Two sides: <b>both sides</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "The Kyiv is on the Dnipro.",
            "Kyiv is on Dnipro.",
            "Kyiv is on the Dnipro."
          ],
          correct: 2,
          hint: "Which word has the: the city or the river?",
          fbOk: "Right.",
          fbBad: "A river has the. A city doesn’t.",
          fbText: "<b>Kyiv is on the Dnipro.</b> The river has <b>the</b>: <b>the</b> Dnipro. The city has no <i>the</i>: Kyiv."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Cars, buses and people go over the river here.</p>`,
          before: "It’s a",
          after: "over the Dnipro.",
          answer: "bridge",
          hint: "Look at the rule: a … goes over a river.",
          fbOk: "Well done!",
          fbBad: "What goes over a river?",
          fbText: "A <b>bridge</b> goes over a river. People, cars and buses go from one side to the other."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Kyiv is the capital", "The Dnipro goes", "The old part of Kyiv is", "There are bridges"],
          right: ["of Ukraine.", "through the city.", "on hills.", "over the river."],
          hint: "What goes over a river? What goes through a city?",
          fbOk: "Good eye!",
          fbBad: "Read Andrii’s message again.",
          fbText: "Kyiv is the capital <b>of Ukraine</b>. The Dnipro goes <b>through the city</b>. The old part of Kyiv is <b>on hills</b>. There are bridges <b>over the river</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes more to Amelia.</p>`,
          text: "Kyiv is the {*biggest|bigger} city in Ukraine. It’s {*on|at} the Dnipro. The old part of Kyiv is on the {*west|east} side of the river. Come and see it!",
          hint: "Which side of the river is the old part on?",
          fbOk: "Well done!",
          fbBad: "Read the first message again: the old part is on the … side.",
          fbText: "Kyiv is <b>the biggest</b> city in Ukraine. It’s <b>on</b> the Dnipro. The old part of the city is on the <b>west</b> side."
        }
      ],
      outro: {
        text: "Kyiv is on the Dnipro. The river goes through the city, and Kyiv is on both sides of it.",
        learned: [
          "Say where Kyiv is: on the Dnipro, on both sides of the river.",
          "Use the with rivers: the Dnipro.",
          "Use the words bridge, side and hill."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s7l2",
      title: "The main street, the main square: sightseeing in Kyiv",
      short: "Sightseeing",
      icon: "city",
      status: "verified",
      why: "Visitors want to see the main places. Learn to name them and say what is special.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What is Khreshchatyk?",
          body: `<p class="lead">Andrii and his classmates make a list of places for Amelia.</p><p><b>Bohdan:</b> Khreshchatyk is the main street of Kyiv.<br><b>Daryna:</b> Maidan Nezalezhnosti is on Khreshchatyk. It’s Independence Square, the central square of the city.<br><b>Zoriana:</b> And Kyiv is one of the oldest cities in Eastern Europe!</p><p>What is the main street of Kyiv?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Bohdan: “Khreshchatyk is the main street of Kyiv.”<br>Daryna: “Maidan Nezalezhnosti is on Khreshchatyk.”</p><p>What is Khreshchatyk?</p>`,
          opts: [
            "the central square of Kyiv",
            "the main street of Kyiv",
            "an old church"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read Bohdan’s words again.",
          fbText: "Khreshchatyk is <b>the main street</b> of Kyiv. Maidan Nezalezhnosti, Independence Square, is <b>on</b> Khreshchatyk."
        },
        {
          type: "info",
          title: "Sightseeing words",
          body: `<ul><li><b><u>sight</u>seeing</b> – visiting famous places</li><li>a <b><u>vis</u>itor</b> – a person who comes to see a place</li><li>a <b>ca<u>the</u>dral</b> – a big, important church</li><li>a <b>square</b> – an open place in a city, with buildings around it</li><li>a <b>mu<u>se</u>um</b> – you can see old and interesting things there</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyiv has got lots of streets. Khreshchatyk is the most important one. Which sentence is correct?</p>`,
          opts: [
            "It’s main street.",
            "It’s main the street.",
            "It’s the main street."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>It’s the main street.</b> There is only one most important street, so we say <b>the</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "The main, the only, the oldest",
          body: `<ul><li>the most important → <b>the main</b>: Khreshchatyk is <b>the main</b> street of Kyiv.</li><li>one, no others → <b>the only</b>: Zelena Dolyna has got one shop. It’s <b>the only</b> shop in the village.</li><li>older than the others → <b>the oldest</b>: Kyiv is one of <b>the oldest</b> cities in Eastern Europe.</li></ul><p>We usually say <b>the</b> before them.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Khreshchatyk is {*the main|main} street of Kyiv. Maidan Nezalezhnosti is {*the central|central} square. Zelena Dolyna has got one bus stop. It’s {*the only|only} bus stop in the village. Kyiv is one of {*the oldest|oldest} cities in Eastern Europe.",
          hint: "Main, only, oldest: what do we usually say before them?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: the main, the only, the oldest.",
          fbText: "<b>The main</b> street, <b>the central</b> square, <b>the only</b> bus stop, one of <b>the oldest</b> cities: we say <b>the</b> before them."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Old Kyiv had walls and gates. The Golden Gate was the most important gate.</p><p>The Golden Gate was … gate of old Kyiv.</p>`,
          opts: [
            "the main",
            "main",
            "main the"
          ],
          correct: 0,
          hint: "The most important one: … main.",
          fbOk: "Right.",
          fbBad: "Look at the rule: the most important → the main.",
          fbText: "The most important gate: <b>the main</b> gate. <b>The</b> comes before <b>main</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sight|see|ing", "+vis|i|tor", "ca|+the|dral", "mu|+se|um"],
          fbOk: "Yes!",
          fbBad: "Look at the sightseeing words again.",
          fbText: "<u>sight</u>seeing, <u>vis</u>itor: the first part is strong. ca<u>the</u>dral, mu<u>se</u>um: the second part."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>There is one café in Andrii’s street. There are no other cafés there.</p>`,
          before: "So it’s the",
          after: "café in his street.",
          answer: ["only", "one"],
          hint: "One café, no others: the …",
          fbOk: "Well done!",
          fbBad: "Look at the rule: one, no others → the …",
          fbText: "One café and no others: it’s <b>the only</b> café in his street."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes to Amelia.</p>`,
          text: "Hi Amelia! I’m Daryna. I live in Kyiv. Khreshchatyk is {*the main|main} street of the city. Independence Square is {*on|at} Khreshchatyk. My school is {*the only|only} school in our street. Kyiv is one of {*the oldest|oldest} cities in Eastern Europe. See you in May!",
          hint: "Main, only, oldest: say the. A place in a street: on Khreshchatyk.",
          fbOk: "Good eye!",
          fbBad: "Check: the main, the only, the oldest.",
          fbText: "<b>The main</b> street. Independence Square is <b>on</b> Khreshchatyk. <b>The only</b> school. One of <b>the oldest</b> cities."
        }
      ],
      outro: {
        text: "Say “the main street”, “the only shop” and “one of the oldest cities”. Khreshchatyk is the main street of Kyiv.",
        learned: [
          "Name famous places in Kyiv: Khreshchatyk, Independence Square.",
          "Use the main, the only and the oldest.",
          "Use sightseeing words: visitor, cathedral, square, museum."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s7l3",
      title: "When was it built? Old buildings in Kyiv",
      short: "It was built",
      icon: "scroll",
      status: "verified",
      why: "Visitors often ask how old a building is. Learn to answer: It was built in…",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "When was it built?",
          img: "img/eng/e6s7/sofia.jpg",
          cap: "St Sophia’s Cathedral in Kyiv, view from the south",
          body: `<p class="lead">Amelia finds a photo on the internet and sends it to Andrii.</p><p><b>Amelia:</b> Is this St Sophia’s Cathedral? It looks very old! When was it built?<br><b>Andrii:</b> Yes, it is! It was built in the 11th century. That’s about a thousand years ago!</p><p>What does “It was built” mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The cathedral was built in the 11th century.” What does it mean?</p>`,
          opts: [
            "The cathedral built lots of houses.",
            "People built the cathedral in the 11th century.",
            "People are building the cathedral now."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "People <b>built</b> the cathedral. We say <b>it was built</b>, because the cathedral is more important here than the people."
        },
        {
          type: "info",
          title: "It was built in…",
          body: `<p>People built the cathedral in the 11th century.<br>→ The cathedral <b>was built</b> in the 11th century.</p><ul><li>one → <b>was</b> + built: It <b>was built</b>…</li><li>two or more → <b>were</b> + built: They <b>were built</b>…</li><li>open → It <b>was opened</b> in 1905.</li></ul><p>A question: <b>When was it built?</b> – It was built in…</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Old places in Kyiv",
          body: `<ul><li>St Sophia’s Cathedral – built in the 11th century</li><li>St Andrew’s Church – built in the 18th century</li><li>the Kyiv Funicular – opened in 1905</li><li>the Kyiv Metro – opened in 1960</li></ul><p>1001–1100 → <b>the 11th century</b><br>1701–1800 → <b>the 18th century</b></p><p>Say <b>in the</b> 11th century, but <b>in</b> 1905.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "St Sophia’s Cathedral {*was|were} built in the 11th century. St Andrew’s Church {*was|were} built {*in the|in} 18th century. The two churches {*were|was} built a long time ago.",
          hint: "One building or two? A century or a year?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: one → was, two or more → were.",
          fbText: "One cathedral: it <b>was</b> built. One church: it <b>was</b> built <b>in the</b> 18th century. Two churches: they <b>were</b> built."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["St Sophia’s Cathedral was built", "St Andrew’s Church was built", "The Kyiv Funicular was opened", "The Kyiv Metro was opened"],
          right: ["in the 11th century.", "in the 18th century.", "in 1905.", "in 1960."],
          hint: "Remember the list of old places in Kyiv.",
          fbOk: "Well done!",
          fbBad: "The cathedral is the oldest. The metro is the newest.",
          fbText: "St Sophia’s Cathedral: <b>the 11th century</b>. St Andrew’s Church: <b>the 18th century</b>. The funicular: <b>1905</b>. The metro: <b>1960</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Amelia: “When was St Andrew’s Church built?”</p><p>What does Andrii say?</p>`,
          opts: [
            "It built in the 18th century.",
            "It was build in the 18th century.",
            "It was built in the 18th century."
          ],
          correct: 2,
          hint: "was + build or built?",
          fbOk: "Right.",
          fbBad: "Look at the rule: was + built.",
          fbText: "<b>It was built</b> in the 18th century. Not <i>It built</i>: the church didn’t build anything. Not <i>was build</i>: after <b>was</b>, say <b>built</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii tells Amelia about the metro.</p>`,
          tiles: ["The Kyiv Metro", "was", "opened", "in 1960"],
          answer: "The Kyiv Metro was opened in 1960.",
          extra: ["were"],
          keepCase: true,
          hint: "Start with The Kyiv Metro. One metro: was or were?",
          fbOk: "Well done!",
          fbBad: "One metro: was + opened.",
          fbText: "<b>The Kyiv Metro was opened in 1960.</b> One metro → <b>was</b>, not <i>were</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s message is wrong.</p>`,
          text: "The Kyiv Funicular was opened in 1905. It goes up and down a hill. St Sophia’s Cathedral was [build] in the 11th century.",
          hint: "Check each word after was.",
          fbOk: "Good eye!",
          fbBad: "Look at the words after was.",
          fbText: "After <b>was</b>, say <b>built</b>, not <i>build</i>: It was <b>built</b> in the 11th century. <b>was opened</b> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>St Sophia’s Cathedral and St Andrew’s Church are very old.</p>`,
          before: "They",
          after: "built a long time ago.",
          answer: "were",
          hint: "Two churches: was or were?",
          fbOk: "Yes!",
          fbBad: "Two or more → …",
          fbText: "Two churches are <b>they</b>: they <b>were</b> built a long time ago."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about Andriivskyi Descent.</p>`,
          text: "Andriivskyi Descent is an old street. It goes down a hill to Podil. St Andrew’s Church is at the top. It {*was|were} {*built|build} in the 18th century. You can go up again on the funicular. It {*was|is} opened in 1905.",
          hint: "One church: was or were? 1905 is in the past.",
          fbOk: "Well done!",
          fbBad: "Check: was + built, was + opened.",
          fbText: "The church <b>was built</b> in the 18th century. The funicular <b>was opened</b> in 1905: the year is in the past, so <b>was</b>."
        }
      ],
      outro: {
        text: "Say when a building was built: “It was built in the 11th century.” “They were built a long time ago.”",
        learned: [
          "Understand the question “When was it built?”.",
          "Answer: It was built in… / It was opened in….",
          "Use was and were with built and opened.",
          "Say centuries: in the 11th century, in the 18th century."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s7l4",
      title: "Have you ever been to Kyiv?",
      short: "Been to",
      icon: "globe",
      status: "verified",
      why: "Friends often ask about places you know. Learn to ask: Have you ever been to…?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who has been to Kyiv?",
          body: `<p class="lead">Emma and Amelia chat after swimming.</p><p><b>Emma:</b> Amelia, have you ever been to Ukraine?<br><b>Amelia:</b> No, I haven’t. I’ve never been there. Have you?<br><b>Emma:</b> Yes, I have! I’ve been to Kyiv with my class. It was great!</p><p>“Have you ever been…?” What does it mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Amelia: “I’ve never been to Ukraine.”<br>Emma: “I’ve been to Kyiv with my class.”</p><p>Who has been to Kyiv?</p>`,
          opts: [
            "Amelia",
            "Emma",
            "Emma and Amelia"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Who says “I’ve never been”?",
          fbText: "Emma <b>has been</b> to Kyiv. Amelia <b>has never been</b> to Ukraine."
        },
        {
          type: "info",
          title: "Have you ever been to…?",
          body: `<p>I<b>’ve been to</b> Kyiv. = I went there one time or more. When? It isn’t important.</p><ul><li>I, you, we, they → <b>have been</b></li><li>he, she, it → <b>has been</b></li><li><b>Have</b> you <b>ever been</b> to Kyiv? – Yes, I <b>have</b>. / No, I <b>haven’t</b>.</li><li><b>never</b> = not at any time: I’ve <b>never been</b> there.</li></ul><p>This is the <b>Present Perfect</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Have|Has} you ever been to Lviv? – Yes, I {*have|has}. {*Has|Have} Amelia ever been to Ukraine? – No, she {*hasn’t|haven’t}. She has {*never|ever} been there.",
          hint: "I, you → have. Amelia is she → has.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: he, she → has.",
          fbText: "<b>Have</b> you…? – Yes, I <b>have</b>. Amelia is she: <b>Has</b> she…? – No, she <b>hasn’t</b>. She has <b>never</b> been there: not at any time."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Bohdan asks Emma: “Have you ever been to Kyiv?”</p><p>What does Emma say?</p>`,
          opts: [
            "Yes, I have.",
            "Yes, I did.",
            "Yes, I am."
          ],
          correct: 0,
          hint: "The question starts with Have.",
          fbOk: "Right.",
          fbBad: "Have you…? – Yes, I …",
          fbText: "<b>Have</b> you ever been…? – Yes, I <b>have</b>. <i>Yes, I did</i> answers <i>Did you…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ms Lysenko asks the class about London.</p>`,
          tiles: ["Have", "you", "ever", "been", "to London"],
          answer: "Have you ever been to London?",
          extra: ["went"],
          keepCase: true,
          hint: "Start with Have. Then you, ever and been.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Have you ever been to…?",
          fbText: "<b>Have you ever been to London?</b> After <b>have</b>, say <b>been</b>, not <i>went</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Amelia has never been to Ukraine. She writes to Andrii:</p>`,
          before: "I’ve",
          after: "been to Ukraine. Kyiv will be my first visit!",
          answer: ["never", "not"],
          hint: "Not at any time: …",
          fbOk: "Yes!",
          fbBad: "Amelia has … been to Ukraine.",
          fbText: "I’ve <b>never</b> been to Ukraine: not at any time. Kyiv will be her first visit."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Amelia’s message is wrong.</p>`,
          text: "I’ve never [be] to Ukraine. But Emma has been to Kyiv. She says it’s beautiful.",
          hint: "Check the words after have and has.",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: have + been.",
          fbText: "I’ve never <b>been</b> to Ukraine. After <b>have</b>, say <b>been</b>, not <i>be</i>. Emma <b>has been</b> is correct."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii chats with Taras from Lviv.</p>`,
          text: "Andrii: {*Have|Has} you ever been to Kyiv, Taras? Taras: Yes, I {*have|has}. I’ve {*been|be} there with my dad. Andrii: Has Ostap ever been here? Taras: No, he {*hasn’t|haven’t}. He’s {*never|ever} been to Kyiv.",
          hint: "You → have. Ostap is he → has.",
          fbOk: "Well done!",
          fbBad: "Check: you → have, he → has, have + been, never.",
          fbText: "<b>Have</b> you ever been…? – Yes, I <b>have</b>. I’ve <b>been</b> there. Has Ostap ever been…? – No, he <b>hasn’t</b>. He’s <b>never</b> been: not at any time."
        }
      ],
      outro: {
        text: "Ask “Have you ever been to…?” and answer “Yes, I have.” or “No, I haven’t. I’ve never been there.”",
        learned: [
          "Ask: Have you ever been to Kyiv?",
          "Answer: Yes, I have. / No, I haven’t.",
          "Use have been, has been and never been."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s7l5",
      title: "I’ve visited…, I’ve never seen…: my experiences",
      short: "Experiences",
      icon: "star",
      status: "verified",
      why: "Tell friends about places you have visited and things you have seen. Then say when.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What have they done in Kyiv?",
          body: `<p class="lead">Andrii’s friends and his sister Sofiia write to Amelia about Kyiv.</p><p><b>Bohdan:</b> I’ve visited St Sophia’s Cathedral. I went there with my class last year.<br><b>Zoriana:</b> I’ve seen the Dnipro from the funicular. It’s beautiful!<br><b>Sofiia:</b> I’ve never seen the Golden Gate. Let’s go there, Andrii!</p><p>When did Bohdan go to the cathedral?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Bohdan: “I’ve visited St Sophia’s Cathedral. I went there with my class last year.”</p><p>When did Bohdan visit the cathedral?</p>`,
          opts: [
            "never",
            "lots of times",
            "last year"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Find the word went in Bohdan’s message.",
          fbText: "Bohdan <b>has visited</b> the cathedral. He <b>went</b> there <b>last year</b>."
        },
        {
          type: "info",
          title: "I’ve visited, I’ve seen",
          body: `<p><b>have / has</b> + the third form of the verb:</p><ul><li>regular verbs → <b>-ed</b>: visit → I’ve <b>visited</b>, try → I’ve <b>tried</b></li><li>irregular verbs → learn them: see – saw – <b>seen</b>, eat – ate – <b>eaten</b>, be – was / were – <b>been</b></li></ul><p>Have you ever <b>eaten</b> varenyky? – Yes, I have!<br>I’ve never <b>seen</b> the Golden Gate.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "I’ve {*seen|saw} the Dnipro from a bridge. Bohdan has {*visited|visit} lots of museums. Have you ever {*eaten|ate} varenyky? Amelia has never {*tried|try} Ukrainian food.",
          hint: "After have and has: the third form. see → seen, eat → eaten.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: have + seen, eaten, visited.",
          fbText: "I’ve <b>seen</b>. Bohdan has <b>visited</b>. Have you ever <b>eaten</b>…? Amelia has never <b>tried</b>. <i>saw</i> and <i>ate</i> are the Past Simple."
        },
        {
          type: "info",
          title: "Present Perfect or Past Simple?",
          body: `<p>No time, or <b>ever</b> / <b>never</b> → Present Perfect:<br>I<b>’ve been</b> to Lviv.</p><p>A finished time (<b>yesterday, last year, in 2025, two days ago</b>) → Past Simple:<br>I <b>went</b> there <b>last summer</b>.</p><p>Not: <s>I’ve been to Lviv last summer.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Zoriana chats with Daryna.</p>`,
          text: "Zoriana: Have you ever {*been|went} to Lviv, Daryna? Daryna: Yes, I have. I {*went|have been} there last summer. Zoriana: {*Did|Have} you see the old town? Daryna: Yes, I did! And yesterday I {*visited|have visited} St Sophia’s Cathedral here in Kyiv.",
          hint: "Ever → Present Perfect. Last summer, yesterday → Past Simple.",
          fbOk: "Well done!",
          fbBad: "Find the time words: ever, last summer, yesterday.",
          fbText: "Have you <b>ever been</b>…? – Present Perfect. I <b>went</b> there <b>last summer</b>. <b>Did</b> you see…? – Yes, I did. <b>Yesterday</b> I <b>visited</b>. A finished time → Past Simple."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I saw the Golden Gate last week.",
            "I’ve seen the Golden Gate last week.",
            "I’ve see the Golden Gate."
          ],
          correct: 0,
          hint: "Last week: a finished time.",
          fbOk: "Right.",
          fbBad: "Last week → Past Simple.",
          fbText: "<b>Last week</b> is a finished time, so: I <b>saw</b> the Golden Gate last week. After <b>have</b>, say <b>seen</b>, not <i>see</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Sofiia wants to see the Golden Gate. She tells Andrii why.</p>`,
          tiles: ["I’ve", "never", "seen", "the Golden Gate"],
          answer: "I’ve never seen the Golden Gate.",
          extra: ["saw"],
          keepCase: true,
          hint: "Start with I’ve. Where does never go?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: I’ve never + seen.",
          fbText: "<b>I’ve never seen the Golden Gate.</b> <b>never</b> goes after <b>I’ve</b>. After <b>have</b>, say <b>seen</b>, not <i>saw</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>see</i>.</p>`,
          before: "Have you ever",
          after: "the Dnipro from the funicular?",
          answer: "seen",
          hint: "see → saw → …",
          fbOk: "Well done!",
          fbBad: "After have, use the third form of see.",
          fbText: "see → saw → <b>seen</b>. Have you ever <b>seen</b> the Dnipro from the funicular?"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p><i>Hi Amelia! I’m Zoriana. I’ve been to lots of places in Kyiv. I’ve visited the Golden Gate, and I’ve seen the Dnipro from the funicular. Last Sunday I went to St Andrew’s Church with my grandma. But I’ve never been to London! Have you ever eaten varenyky?</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Zoriana has visited the Golden Gate.",
            "Zoriana has been to London.",
            "Zoriana went to St Andrew’s Church last Sunday.",
            "Zoriana has never seen the Dnipro."
          ],
          correct: [0, 2],
          hint: "Find have, has, never and went in the text.",
          fbOk: "Yes!",
          fbBad: "Has Zoriana ever been to London?",
          fbText: "Zoriana <b>has visited</b> the Golden Gate. She <b>went</b> to St Andrew’s Church <b>last Sunday</b>. She has <b>never</b> been to London. She <b>has seen</b> the Dnipro from the funicular."
        }
      ],
      outro: {
        text: "Talk about your experiences with the Present Perfect: I’ve visited…, I’ve never seen…. Say when with the Past Simple: I went there last year.",
        learned: [
          "Use visited, tried, been, seen and eaten after have and has.",
          "Say what you have never done.",
          "Choose the Present Perfect or the Past Simple: ever or last year?"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s7l6",
      title: "A day in Kyiv: a page for visitors",
      short: "A day in Kyiv",
      icon: "path",
      status: "verified",
      why: "Visitors like a plan for the day. Read a page about Kyiv and answer a visitor.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What can you see in one day?",
          body: `<p class="lead">Andrii and his classmates make a page for visitors, “A day in Kyiv”. They send it to Amelia.</p><p>Read the page in three parts. Then help Amelia write back.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day in Kyiv, part 1 of 3",
          title: "Read and choose.",
          img: "img/eng/e6s7/sofia.jpg",
          cap: "St Sophia’s Cathedral, Kyiv",
          body: `<p><i><b>Morning.</b> Start your day at St Sophia’s Cathedral. It was built in the 11th century, so it’s about a thousand years old! Then walk to the Golden Gate. It was the main gate of old Kyiv. The old gate was built in the 11th century too. The gate you can see today was built again in 1982.</i></p><p>When was the Golden Gate built again?</p>`,
          opts: [
            "in the 11th century",
            "in 1982",
            "in 1905"
          ],
          correct: 1,
          hint: "Find the word again in the text.",
          fbOk: "Yes!",
          fbBad: "Read the last sentence again.",
          fbText: "The old gate was built in the 11th century. The gate you can see today was <b>built again in 1982</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: A day in Kyiv, part 2 of 3",
          title: "Choose all the correct answers.",
          img: "img/eng/e6s7/st-andrews-church.jpg",
          cap: "St Andrew’s Church, Kyiv",
          body: `<p><i><b>Afternoon.</b> After lunch, walk down Andriivskyi Descent. It’s an old street, and it goes down a hill. St Andrew’s Church is at the top of the street. It was built in the 18th century. At the bottom of the street, you are in Podil. Then go up the hill again on the funicular. It was opened in 1905!</i></p><p>Which sentences are true?</p>`,
          opts: [
            "St Andrew’s Church is at the top of the street.",
            "The funicular was opened in the 18th century.",
            "Andriivskyi Descent goes down to Podil.",
            "Podil is at the top of the hill."
          ],
          correct: [0, 2],
          hint: "Find top and bottom in the text.",
          fbOk: "Good eye!",
          fbBad: "Where is Podil: at the top or at the bottom?",
          fbText: "St Andrew’s Church is <b>at the top</b>. The street goes <b>down to Podil</b>, at the bottom. The church was built in the 18th century, and the funicular was opened in 1905."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day in Kyiv, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i><b>Evening.</b> In the evening, go to Khreshchatyk, the main street of Kyiv. Walk to Maidan Nezalezhnosti, Independence Square. It’s on Khreshchatyk. Have dinner in a café near the square. Have you ever seen Kyiv in the evening? It’s beautiful! – Andrii, Bohdan, Daryna and Zoriana</i></p><p>Where is Independence Square?</p>`,
          opts: [
            "in Podil",
            "next to St Andrew’s Church",
            "on Khreshchatyk"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Read the third sentence again.",
          fbText: "Maidan Nezalezhnosti, Independence Square, is <b>on Khreshchatyk</b>, the main street."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about all three parts of “A day in Kyiv”.</p><p>Who is the page for?</p>`,
          opts: [
            "for visitors with one day in Kyiv",
            "for people who live in Podil",
            "for a history test at school"
          ],
          correct: 0,
          fbOk: "Exactly.",
          fbBad: "Look at the name of the page: A day in Kyiv.",
          fbText: "The page is a plan for <b>visitors</b>: morning, afternoon and evening in Kyiv."
        },
        {
          type: "gaps",
          sk: "write",
          title: "Complete the sentences.",
          body: `<p>Amelia writes back to Andrii.</p>`,
          text: "Thanks for your page, Andrii! I’ve never {*been|be} to Ukraine. Last night I {*read|have read} it with my parents. Which place {*was|were} built first? I think it’s St Sophia’s Cathedral. And is Khreshchatyk {*the main|main} street? See you in May!",
          hint: "Never → have + been. Last night: a finished time. One place → was.",
          fbOk: "Well done!",
          fbBad: "Check the time words: never, last night.",
          fbText: "I’ve never <b>been</b>. <b>Last night</b> I <b>read</b> it: a finished time → Past Simple. One place: it <b>was</b> built. <b>The main</b> street."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Amelia asks Andrii a question about the river.</p>`,
          tiles: ["Have", "you", "ever", "seen", "the Dnipro", "from a bridge"],
          answer: "Have you ever seen the Dnipro from a bridge?",
          extra: ["saw"],
          keepCase: true,
          hint: "Start with Have. After ever: the third form of see.",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: Have you ever + seen…?",
          fbText: "<b>Have you ever seen the Dnipro from a bridge?</b> After <b>have</b>, say <b>seen</b>, not <i>saw</i>."
        },
        {
          type: "word",
          sk: "write",
          eyebrow: "Final",
          title: "Write the missing word.",
          body: `<p>Amelia asks: “Which place was built first?” Andrii answers.</p>`,
          before: "Yes, it’s St Sophia’s Cathedral. It was built in the 11th",
          after: ".",
          answer: "century",
          hint: "The 11th … – the years 1001–1100.",
          fbOk: "Yes!",
          fbBad: "1001–1100 is the 11th …",
          fbText: "St Sophia’s Cathedral was built in the 11th <b>century</b>. It’s older than St Andrew’s Church, the funicular and the metro."
        }
      ],
      outro: {
        text: "You can read a page for visitors and answer questions about Kyiv: what to see and when it was built.",
        learned: [
          "Read a page for visitors in three parts.",
          "Find facts in a text: when it was built, where it is.",
          "Answer a visitor’s questions about Kyiv."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s7l7",
      title: "Kyiv for visitors",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Amelia in Kyiv?",
          body: `<p class="lead">It’s May. Amelia is in Kyiv with her parents! Andrii shows them the city.</p><p>Help Amelia with her messages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Amelia writes to Emma.</p>`,
          text: "Kyiv is {*on|in} the Dnipro. {*The Dnipro|Dnipro} goes through the city. Kyiv is on both {*sides|side} of the river.",
          pre: "e6s7l1",
          hint: "A city on a river. Rivers have the.",
          fbOk: "Yes!",
          fbBad: "Check: on a river, the with rivers.",
          fbText: "Kyiv is <b>on</b> the Dnipro. <b>The</b> Dnipro: rivers have <b>the</b>. Kyiv is on both <b>sides</b> of the river."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Amelia’s dad asks: “Which street is the most important in Kyiv?”</p><p>What does Andrii say?</p>`,
          opts: [
            "Khreshchatyk is main street.",
            "Khreshchatyk is the main street.",
            "Khreshchatyk is the only street."
          ],
          correct: 1,
          pre: "e6s7l2",
          fbOk: "Right.",
          fbBad: "The most important → the …",
          fbText: "The most important street: <b>the main</b> street. Kyiv has got lots of streets, so Khreshchatyk isn’t <i>the only</i> street."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          img: "img/eng/e6s7/st-andrews-church.jpg",
          cap: "St Andrew’s Church, Kyiv",
          body: `<p>Amelia: “When was St Andrew’s Church built?”</p>`,
          before: "It was",
          after: "in the 18th century.",
          answer: "built",
          pre: "e6s7l3",
          fbOk: "Well done!",
          fbBad: "was + the third form of build.",
          fbText: "It <b>was built</b> in the 18th century. build → built."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Andrii talks to Amelia’s mum.</p>`,
          text: "Andrii: {*Have|Has} you ever been to Kyiv before? Amelia’s mum: No, I {*haven’t|didn’t}. I’ve {*never|ever} been to Ukraine.",
          pre: "e6s7l4",
          hint: "Have you…? – No, I …",
          fbOk: "Exactly.",
          fbBad: "Look at the short answers: Have you…? – No, I haven’t.",
          fbText: "<b>Have</b> you ever been…? – No, I <b>haven’t</b>. I’ve <b>never</b> been to Ukraine: not at any time."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Amelia writes to Emma.</p>`,
          text: "Yesterday we {*visited|have visited} St Sophia’s Cathedral. I’ve {*seen|saw} lots of old churches in England, but this one is the most beautiful! Have you ever {*eaten|ate} varenyky? I tried them last night.",
          pre: "e6s7l5",
          hint: "Yesterday → Past Simple. After have: seen, eaten.",
          fbOk: "Well done!",
          fbBad: "Find the time words: yesterday, ever.",
          fbText: "<b>Yesterday</b> we <b>visited</b>: a finished time. I’ve <b>seen</b>, have you ever <b>eaten</b>: have + the third form."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 6",
          title: "Read and choose.",
          body: `<p><i>Today we walked down Andriivskyi Descent to Podil. Then we went up the hill again on the funicular. It was opened in 1905! In the evening we went to Khreshchatyk. – Amelia</i></p><p>How did Amelia go up the hill?</p>`,
          opts: [
            "on the funicular",
            "on foot",
            "by metro"
          ],
          correct: 0,
          pre: "e6s7l6",
          hint: "Find up the hill in the text.",
          fbOk: "Good eye!",
          fbBad: "Read the second sentence again.",
          fbText: "Amelia walked <b>down</b> Andriivskyi Descent. Then she went <b>up the hill on the funicular</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Put the words in order.",
          body: `<p>Amelia tells her mum about St Sophia’s Cathedral.</p>`,
          tiles: ["It", "was", "built", "in the 11th century"],
          answer: "It was built in the 11th century.",
          extra: ["were"],
          keepCase: true,
          pre: "e6s7l3",
          hint: "Start with It. One cathedral: was or were?",
          fbOk: "Well done!",
          fbBad: "One cathedral → was + built.",
          fbText: "<b>It was built in the 11th century.</b> One cathedral → <b>was</b>, not <i>were</i>."
        }
      ],
      outro: {
        text: "Well done! Now you can tell visitors about Kyiv, its famous places and when they were built. And you can talk about places you have visited.",
        learned: [
          "Say where Kyiv is and name its main places.",
          "Say when a building was built.",
          "Ask and answer: Have you ever been to…?",
          "Choose the Present Perfect or the Past Simple."
        ]
      }
    }
  ]
});
