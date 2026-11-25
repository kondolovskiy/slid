/* Слід · Англійська мова, 4 клас — «Free time: sport and heroes» (e4s3)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Відпочинок і дозвілля — спорт,
   улюблені дитячі герої» (PDF с. 63); граматика — adverbs and adverbials of frequency, S + V + O, but/and/or (с. 62–63);
   функції — висловлювати уподобання (с. 63); онлайн-допис про хобі (A1, с. 54):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8);
   Kotyhoroshko (українська народна казка) і Robin Hood (англійські народні оповіді) — суспільне надбання.
   Форми, сполуки й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g4-e4s3.md, «Нотатки агента»).
   Статус: verified (reports/verify/e4s3.md). 7 уроків (6 + фінал). Будова — за еталоном e4s1.
   Перевірка: node tools/validate.mjs --section e4s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s3",
  grade: 4,
  weeks: [10, 13],
  title: "Free time: sport and heroes",
  why: "To talk about sport and your free time. And to tell a friend about your favourite hero.",
  requires: ["e4s1l5"],
  meta: { author: "writer-e4s3", created: "2026-11-19", factcheck: "verifier-e4s3 (reports/verify/e4s3.md)", teacher: null },
  badges: [
    { id: "e4s3boss", name: "Sports day star", icon: "trophy", desc: "Finish the final lesson “Free time: sport and heroes”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s3l1",
      title: "Sports: play, go and do",
      short: "Sports",
      icon: "target",
      status: "verified",
      why: "Tell your friends about your sport. Say it the right way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What sport do they do?",
          body: `<p class="lead">Today the penfriend club chat is about sport.</p><p><b>Andrii:</b> I play football.<br><b>Emma:</b> I go swimming.<br><b>Oksana:</b> I do karate.</p><p>Play, go or do: when do we say each word?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s friend Bohdan likes tennis. What does he say?</p>`,
          opts: [
            "I play tennis.",
            "I go tennis.",
            "I do tennis."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>play tennis</b>. Tennis is a game with a ball. The next screen shows play, go and do."
        },
        {
          type: "info",
          title: "Play, go, do",
          body: `<ul><li><b>play</b> + a game with a ball → play football, play tennis, play basketball</li><li><b>go</b> + <b>-ing</b> → go swimming, go cycling, go skating</li><li><b>do</b> + other sports → do karate, do judo, do gymnastics</li></ul><p>The <u>underlined</u> part is strong: <u>ten</u>nis, <u>bas</u>ketball, gym<u>nas</u>tics, ka<u>ra</u>te.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Do we say play, go or do?</p>`,
          bins: ["play", "go", "do"],
          items: [
            ["football", 0],
            ["basketball", 0],
            ["swimming", 1],
            ["cycling", 1],
            ["karate", 2],
            ["gymnastics", 2]
          ],
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "Games with a ball: <b>play</b> football, <b>play</b> basketball. Words with -ing: <b>go</b> swimming, <b>go</b> cycling. Other sports: <b>do</b> karate, <b>do</b> gymnastics."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mariia rides her bike in the park with her dad. What does she say?</p>`,
          opts: [
            "I play cycling.",
            "I go cycling.",
            "I do cycling."
          ],
          correct: 1,
          hint: "Cycling ends in -ing. Look at the list.",
          fbOk: "Right.",
          fbBad: "Cycling ends in -ing.",
          fbText: "<b>Cycling</b> ends in <b>-ing</b>, so we say <b>go cycling</b>. We play games with a ball."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Dmytro writes to the chat.</p>`,
          text: "I {*play|go|do} basketball. My cousins {play|*go|do} swimming. My dad and I {play|go|*do} judo.",
          hint: "Is it a game with a ball? Does it end in -ing?",
          fbOk: "Exactly.",
          fbBad: "Check the list: play, go or do?",
          fbText: "Basketball is a game with a ball: <b>play</b>. Swimming ends in -ing: <b>go</b>. Judo is another sport: <b>do</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+ten|nis", "+bas|ket|ball", "gym|+nas|tics", "ka|+ra|te"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>ten</u>nis, <u>bas</u>ketball: stress at the start. gym<u>nas</u>tics, ka<u>ra</u>te: stress in the middle."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "I [play] karate with my brother. We go swimming too. My friends play tennis.",
          hint: "Check play, go and do with each sport.",
          fbOk: "Good eye!",
          fbBad: "Is karate a game with a ball?",
          fbText: "Karate is not a game with a ball. So it’s <b>do karate</b>. <b>Go swimming</b> and <b>play tennis</b> are correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana loves water. She is in the pool every day. What is her sport?</p>`,
          before: "Oksana: “I go",
          after: "every day.”",
          answer: "swimming",
          hint: "Look at the list: go + -ing.",
          fbOk: "Yes!",
          fbBad: "What do we do in a pool?",
          fbText: "In the pool, we swim. So Oksana says: “I go <b>swimming</b>.”"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about his sport.</p>`,
          text: "I love sport! I {*play|go|do} football with my friends. In winter, we {play|*go|do} skating. My sister and I {play|go|*do} gymnastics.",
          fbOk: "Well done!",
          fbBad: "Read the list again.",
          fbText: "Football is a game with a ball: <b>play</b>. Skating ends in -ing: <b>go</b>. Gymnastics is another sport: <b>do</b>."
        }
      ],
      outro: {
        text: "We play games with a ball. We go swimming and cycling. We do karate and judo.",
        learned: [
          "Name sports: football, swimming, karate.",
          "Use play, go and do with sports.",
          "Say what sport you do."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s3l2",
      title: "How often? Always, usually, sometimes, never",
      short: "How often?",
      icon: "chart",
      status: "verified",
      why: "How often do you do sport? Tell your friends.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How often does Emma swim?",
          body: `<p class="lead">Emma writes about her sport.</p><p><i>I always go swimming on Saturdays. I usually play tennis after school. I sometimes go cycling. I never play basketball.</i></p><p>Always, usually, sometimes, never: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma goes swimming every Saturday. Which word is right?</p>`,
          opts: [
            "always",
            "sometimes",
            "never"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "Every Saturday, so Emma <b>always</b> goes swimming on Saturdays. Look at the next screen."
        },
        {
          type: "info",
          title: "How often?",
          body: `<ul><li><b>always</b> ●●●●●</li><li><b>usually</b> ●●●●○</li><li><b>often</b> ●●●○○</li><li><b>sometimes</b> ●●○○○</li><li><b>never</b> ○○○○○</li></ul><p><b>always</b> = every time. <b>never</b> = not one time.</p><p>The <u>underlined</u> part is strong: <u>al</u>ways, <u>u</u>sually, <u>some</u>times, <u>nev</u>er.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Dmytro doesn’t like water. He doesn’t go swimming.</p>`,
          opts: [
            "He always goes swimming.",
            "He usually goes swimming.",
            "He never goes swimming."
          ],
          correct: 2,
          hint: "Does he swim at all? Look at the dots.",
          fbOk: "Right.",
          fbBad: "Dmytro doesn’t go swimming.",
          fbText: "Not one time: <b>never</b>. Dmytro <b>never</b> goes swimming."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Yurii writes about his week.</p>`,
          text: "I play football every day. I {*always|never|sometimes} play football. I haven’t got a bike. I {always|*never|usually} go cycling.",
          hint: "Every day: how many dots? No bike: how many dots?",
          fbOk: "Exactly.",
          fbBad: "Look at the dots again.",
          fbText: "Every day is every time: <b>always</b>. No bike, so not one time: <b>never</b>."
        },
        {
          type: "info",
          title: "Where does it go?",
          body: `<p>I <b>always</b> play tennis.<br>She <b>never</b> goes cycling.<br>We <b>usually</b> do judo.</p><ul><li>always, never… → before <b>play</b>, <b>go</b>, <b>do</b></li><li>play, go, do – these are <b>verbs</b>.</li><li>but after <b>am</b>, <b>is</b>, <b>are</b>: I am <b>always</b> happy.</li></ul><p>Not: <s>I play always tennis.</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I play always football.",
            "I always play football.",
            "Always I play football."
          ],
          correct: 1,
          fbOk: "Good eye!",
          fbBad: "Where does always go?",
          fbText: "<b>Always</b> goes before <b>play</b>: I <b>always play</b> football. It doesn’t go at the start."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Dmytro doesn’t like tennis. He doesn’t play it.</p>`,
          tiles: ["Dmytro", "never", "plays", "tennis"],
          extra: ["play"],
          answer: "Dmytro never plays tennis.",
          hint: "Never goes before plays.",
          fbOk: "Well done!",
          fbBad: "Where does never go?",
          fbText: "<b>Dmytro never plays tennis.</b> Never goes before the verb. Dmytro is <b>he</b>, so it’s <b>plays</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+al|ways", "+u|su|al|ly", "+some|times", "+nev|er"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>al</u>ways, <u>u</u>sually, <u>some</u>times, <u>nev</u>er: the strong part is at the start."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "I go swimming every Saturday. I {*always|never} go swimming on Saturdays. I don’t like basketball. I {usually|*never} play it. After school, I {*usually play|play usually} tennis.",
          hint: "Every Saturday: how often? And where does usually go?",
          fbOk: "Well done!",
          fbBad: "Check the dots and the word order.",
          fbText: "Every Saturday: <b>always</b>. She doesn’t like basketball: <b>never</b>. Usually goes before the verb: I <b>usually play</b> tennis."
        }
      ],
      outro: {
        text: "Always, usually, often, sometimes and never say how often. They go before play, go and do.",
        learned: [
          "Say how often: always, usually, sometimes, never.",
          "Put always or never before the verb.",
          "Talk about your sport every week."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s3l3",
      title: "My week: on Mondays, at the weekend",
      short: "My week",
      icon: "path",
      status: "verified",
      why: "Tell a friend about your week. When do you do sport?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "When is Andrii free?",
          body: `<p class="lead">Emma wants to chat with Andrii. When is he free?</p><p><b>Andrii:</b> <i>I play football on Mondays and Wednesdays. I go swimming on Fridays. At the weekend, I go cycling with my dad.</i></p><p>On, at, every: when do we use them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma writes: “I go cycling … the weekend.” Which word is right?</p>`,
          opts: [
            "in",
            "at",
            "to"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>at the weekend</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "When?",
          body: `<ul><li><b>on</b> + a day → on Monday, on Fridays</li><li><b>at</b> → <b>at the weekend</b> (Saturday and Sunday)</li><li><b>every</b> → every day, every week</li><li><b>after</b> → after school</li></ul><p><b>on Mondays</b> = every Monday</p><p><u>Mon</u>day, <u>Sat</u>urday, week<u>end</u>: the <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her week.</p>`,
          text: "I do karate {*on|at|in} Tuesdays. I go swimming {*every|at} day. I go skating with Dmytro {*at|in} the weekend.",
          hint: "A day: on. Saturday and Sunday: at the …",
          fbOk: "Exactly.",
          fbBad: "Check the list: on, at, every.",
          fbText: "A day: <b>on</b> Tuesdays. <b>Every</b> day. Saturday and Sunday: <b>at</b> the weekend."
        },
        {
          type: "info",
          title: "He plays, she goes",
          body: `<p>I <b>live</b> in Kyiv. Emma <b>lives</b> in England. Sport words work the same way:</p><ul><li>I play → he, she <b>plays</b></li><li>I go → he, she <b>goes</b></li><li>I do → he, she <b>does</b></li></ul><p>Andrii <b>plays</b> football. Emma <b>goes</b> swimming. Oksana <b>does</b> karate.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana does karate every Tuesday. Which sentence is correct?</p>`,
          opts: [
            "She does karate on Tuesdays.",
            "She does karate at Tuesdays.",
            "She do karate on Tuesdays."
          ],
          correct: 0,
          hint: "Is it on or at with a day? Is it do or does with she?",
          fbOk: "Right.",
          fbBad: "Check the day and the verb.",
          fbText: "A day: <b>on</b> Tuesdays. With <b>she</b>: <b>does</b>. So: She <b>does</b> karate <b>on</b> Tuesdays."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about her friends.</p>`,
          text: "Andrii {*plays|play} football on Mondays. Mariia {*goes|go} skating at the weekend. Oksana {*does|do} karate. My friends and I {*go|goes} cycling after school.",
          hint: "Is it he, she or we?",
          fbOk: "Good eye!",
          fbBad: "Look at the list: he, she or we?",
          fbText: "He, she: Andrii <b>plays</b>, Mariia <b>goes</b>, Oksana <b>does</b>. My friends and I are <b>we</b>: we <b>go</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia: “I go cycling on Sundays.” Now write about Mariia.</p>`,
          before: "Mariia",
          after: "cycling on Sundays.",
          answer: "goes",
          hint: "I go → she …",
          fbOk: "Well done!",
          fbBad: "With she, go changes.",
          fbText: "I go → she <b>goes</b>. Mariia <b>goes</b> cycling on Sundays."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+Mon|day", "+Sat|ur|day", "week|+end"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>Mon</u>day, <u>Sat</u>urday: stress at the start. week<u>end</u>: stress at the end."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! I’m busy on Mondays and Wednesdays. I play football after school. On Fridays I go swimming. At the weekend I go cycling with my dad. But I’m free on Tuesdays and Thursdays!</i></p><p>When can Emma chat with Andrii?</p>`,
          opts: [
            "on Fridays",
            "at the weekend",
            "on Tuesdays"
          ],
          correct: 2,
          hint: "Find the word free.",
          fbOk: "Good eye!",
          fbBad: "When is Andrii free?",
          fbText: "Andrii writes: “I’m <b>free on Tuesdays and Thursdays</b>.” On Fridays he goes swimming. At the weekend he goes cycling."
        }
      ],
      outro: {
        text: "We say on Mondays, at the weekend and every day. With he and she: plays, goes, does.",
        learned: [
          "Say when: on Mondays, at the weekend, every day.",
          "Use plays, goes and does.",
          "Read about a friend’s week."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s3l4",
      title: "And, but, or: what I like",
      short: "And, but, or",
      icon: "bulb",
      status: "verified",
      why: "Tell your friends what you like and what you don’t like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Does Oksana like tennis?",
          body: `<p class="lead">Oksana writes to Emma.</p><p><i>I like karate and swimming. I like football, but I don’t like tennis. What about you? Do you like tennis or basketball?</i></p><p>And, but, or: what does each word do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma likes tennis. She doesn’t like basketball. What does she write?</p>`,
          opts: [
            "I like tennis, but I don’t like basketball.",
            "I like tennis or I don’t like basketball.",
            "I like tennis and I like basketball."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "Tennis – yes, basketball – no. The two things are different. So we say <b>but</b>. See the next screen."
        },
        {
          type: "info",
          title: "And, but, or",
          body: `<ul><li><b>and</b> – the same: I like football <b>and</b> tennis.</li><li><b>but</b> – different: I like football, <b>but</b> I don’t like tennis.</li><li><b>or</b> – choose one: Do you like football <b>or</b> tennis?</li></ul><p>I <b>like</b> swimming. I <b>don’t like</b> judo.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii asks Emma: “Which sport do you like: football … tennis?”</p><p>Which word is missing?</p>`,
          opts: [
            "and",
            "but",
            "or"
          ],
          correct: 2,
          hint: "Emma can choose one sport.",
          fbOk: "Right.",
          fbBad: "Emma chooses one. Look at the list.",
          fbText: "Emma can choose one sport, so we say <b>or</b>: football <b>or</b> tennis?"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her brother.</p>`,
          text: "Dmytro likes football {*and|but} cycling. He likes skating, {*but|or} he doesn’t like swimming. Do you like judo {*or|but} karate?",
          hint: "The same, different or choose one?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: and, but, or.",
          fbText: "He likes both: football <b>and</b> cycling. Skating – yes, swimming – no: <b>but</b>. A question, choose one: judo <b>or</b> karate?"
        },
        {
          type: "sort",
          sk: "read",
          title: "Sort the words.",
          body: `<p><b>Kateryna:</b> <i>I like football and cycling. I don’t like judo. I like skating, but I don’t like tennis.</i></p><p>Does Kateryna like it?</p>`,
          bins: ["She likes it", "She doesn’t like it"],
          items: [
            ["football", 0],
            ["cycling", 0],
            ["skating", 0],
            ["judo", 1],
            ["tennis", 1]
          ],
          fbOk: "Well done!",
          fbBad: "Read Kateryna’s words again.",
          fbText: "Kateryna likes <b>football</b>, <b>cycling</b> and <b>skating</b>. She doesn’t like <b>judo</b>. She doesn’t like <b>tennis</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana likes karate. She doesn’t like basketball. What does she write?</p>`,
          tiles: ["I", "like", "karate,", "but", "I", "don’t", "like", "basketball"],
          extra: ["or"],
          answer: "I like karate, but I don’t like basketball.",
          hint: "First say what she likes. Then but.",
          fbOk: "Yes!",
          fbBad: "Karate – yes, basketball – no.",
          fbText: "<b>I like karate, but I don’t like basketball.</b> The two things are different. So we say <b>but</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Kateryna likes cycling. She doesn’t like tennis.</p>`,
          before: "I like cycling,",
          after: "I don’t like tennis.",
          answer: ["but", "yet", "though", "although"],
          fbOk: "Good eye!",
          fbBad: "Cycling – yes, tennis – no.",
          fbText: "Two different things: <b>but</b>. I like cycling, <b>but</b> I don’t like tennis."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back to Oksana.</p>`,
          text: "I go swimming on Mondays {*and|but} I play tennis on Fridays. I like tennis, {*but|or} I don’t like football. What about you? Do you like swimming {*or|but} cycling?",
          hint: "Find a question. Then find yes and no.",
          fbOk: "Well done!",
          fbBad: "The same, different or choose one?",
          fbText: "Two sports she does: <b>and</b>. Tennis – yes, football – no: <b>but</b>. A question, choose one: swimming <b>or</b> cycling?"
        }
      ],
      outro: {
        text: "And joins the same things. But joins different things. Or asks you to choose.",
        learned: [
          "Say what you like and don’t like.",
          "Join ideas with and, but and or.",
          "Ask: Do you like football or tennis?"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s3l5",
      title: "Favourite heroes from books and films",
      short: "Heroes",
      icon: "shield",
      status: "verified",
      why: "Who is your favourite hero? Tell your friends about him or her.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Who is your favourite hero?",
          body: `<p class="lead">Ms Kravets asks the club: “Who is your favourite hero?”</p><p><b>Oksana:</b> My favourite hero is Kotyhoroshko. He’s from a Ukrainian fairy tale. He’s very strong!<br><b>Emma:</b> My favourite hero is Robin Hood. He’s from old English stories and films. He helps poor people.</p><p>What are heroes like?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Robin Hood helps poor people. What is he like?</p>`,
          opts: [
            "funny",
            "kind",
            "slow"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "People who help are <b>kind</b>. Robin Hood is kind. See the next screen."
        },
        {
          type: "info",
          title: "What are heroes like?",
          body: `<ul><li><b>strong</b> – can lift big things</li><li><b>brave</b> – is not afraid</li><li><b>clever</b> – knows a lot</li><li><b>kind</b> – helps people</li><li><b>funny</b> – makes you laugh</li></ul><p><b>My favourite hero is</b> Robin Hood. <b>He is</b> kind.</p><p><u>fa</u>vourite, <u>he</u>ro, <u>clev</u>er, <u>fun</u>ny: the <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Andrii draws pictures. His hero is Super Kit, a cat. Super Kit is not afraid of big dogs.</p><p>What is Super Kit like?</p>`,
          opts: [
            "brave",
            "funny",
            "clever"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Is Super Kit afraid?",
          fbText: "Super Kit is not afraid. So he is <b>brave</b>."
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>Look at the club chat again. Which sentences are about Robin Hood?</p>`,
          opts: [
            "He is from a Ukrainian fairy tale.",
            "He helps poor people.",
            "He is a cat.",
            "He is from old English stories and films."
          ],
          correct: [1, 3],
          hint: "Read Emma’s words.",
          fbOk: "Well done!",
          fbBad: "Who is from a Ukrainian fairy tale?",
          fbText: "Robin Hood is from <b>old English stories and films</b>. He <b>helps poor people</b>. Kotyhoroshko is from a Ukrainian fairy tale. Super Kit is a cat."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>The children write about their heroes.</p>`,
          text: "Polina’s hero is a girl. She is not afraid. She is {*brave|funny|kind}. Dmytro’s hero makes him laugh. He is {brave|*funny|kind}. Yurii’s hero helps old people. He is {brave|funny|*kind}.",
          hint: "Look at the list of hero words.",
          fbOk: "Exactly.",
          fbBad: "Check the list again.",
          fbText: "Not afraid: <b>brave</b>. Makes you laugh: <b>funny</b>. Helps people: <b>kind</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Polly is a girl from Emma’s favourite book. She knows a lot.</p>`,
          before: "Polly is",
          after: ".",
          answer: ["clever", "smart", "intelligent", "bright", "wise"],
          hint: "Look at the list: who knows a lot?",
          fbOk: "Yes!",
          fbBad: "Who knows a lot?",
          fbText: "Somebody who knows a lot is <b>clever</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+fa|vour|ite", "+he|ro", "+clev|er", "+fun|ny"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>fa</u>vourite, <u>he</u>ro, <u>clev</u>er, <u>fun</u>ny: the strong part is at the start."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about Super Kit.</p>`,
          text: "My {*favourite|favourites} hero is Super Kit. He {*is|are} a cat from my pictures. He is not afraid of dogs. He is very {*brave|funny|clever}. He helps old people in my town. He is {strong|*kind|funny} too.",
          hint: "Not afraid: …? Helps people: …?",
          fbOk: "Well done!",
          fbBad: "Read the list of hero words.",
          fbText: "My <b>favourite</b> hero. Super Kit is <b>he</b>: he <b>is</b>. Not afraid: <b>brave</b>. Helps people: <b>kind</b>."
        }
      ],
      outro: {
        text: "Heroes can be strong, brave, clever, kind or funny. Say: My favourite hero is…",
        learned: [
          "Name your favourite hero.",
          "Say what a hero is like: brave, kind, clever.",
          "Read about heroes from stories and films."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s3l6",
      title: "A post about my hobby",
      short: "My hobby",
      icon: "book",
      status: "verified",
      why: "Read a friend’s post about her hobby. Then write about your hobby.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What is Mariia’s hobby?",
          body: `<p class="lead">Mariia from Kharkiv writes a post for the penfriend club.</p><p>A post is a message on a website. Read Mariia’s post in three parts.</p><p>What is her hobby? How often does she do it?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Mariia’s post, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Mariia. I’m ten, and I live in Kharkiv. My hobby is swimming. I go swimming on Mondays, Wednesdays and Fridays. My swimming teacher is Ms Bondar. She is very kind. I always go with my friend Polina.</i></p><p>When does Mariia go swimming?</p>`,
          opts: [
            "every day",
            "on Mondays, Wednesdays and Fridays",
            "at the weekend"
          ],
          correct: 1,
          hint: "Find the word swimming in the post.",
          fbOk: "Right.",
          fbBad: "Read about Mariia’s days again.",
          fbText: "Mariia writes: “I go swimming <b>on Mondays, Wednesdays and Fridays</b>.” Not every day."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Mariia’s post, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>I like swimming, but I don’t like cold water! At the weekend I usually go cycling with my dad. I sometimes play tennis, but I never play football.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Mariia doesn’t like cold water.",
            "Mariia often plays football.",
            "Mariia usually goes cycling at the weekend.",
            "Mariia never plays tennis."
          ],
          correct: [0, 2],
          hint: "Find never and sometimes in the post.",
          fbOk: "Well done!",
          fbBad: "Read about football and tennis again.",
          fbText: "Mariia doesn’t like <b>cold water</b>. She <b>usually goes cycling at the weekend</b>. She <b>never</b> plays football. She <b>sometimes</b> plays tennis."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Mariia’s post, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>My favourite hero is Kotyhoroshko. He is strong and brave. What about you? What is your hobby? How often do you do it? Write to me!</i></p><p>What is Mariia’s post about?</p>`,
          opts: [
            "her hobby",
            "her family",
            "her school"
          ],
          correct: 0,
          fbOk: "Exactly.",
          fbBad: "What does Mariia write about in each part?",
          fbText: "Mariia writes about swimming, cycling and tennis. She asks about your hobby. The post is about <b>her hobby</b>."
        },
        {
          type: "info",
          title: "A post about a hobby",
          body: `<ul><li>Hello → Hi! I’m Mariia.</li><li>Your hobby → My hobby is swimming.</li><li>How often → I go swimming on Mondays.</li><li>Like, don’t like → I like swimming, but I don’t like cold water.</li><li>A question → What is your hobby?</li></ul>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write a question for the end of your post.</p>`,
          tiles: ["Do", "you", "like", "swimming", "or", "cycling"],
          extra: ["but"],
          keepCase: true,
          answer: ["Do you like swimming or cycling?", "Do you like cycling or swimming?"],
          hint: "A question starts with Do.",
          fbOk: "Yes!",
          fbBad: "Start with Do you…?",
          fbText: "<b>Do you like swimming or cycling?</b> The friend can choose one, so we say <b>or</b>."
        },
        {
          type: "gaps",
          sk: "write",
          title: "Complete the sentences.",
          body: `<p>Oksana writes her post.</p>`,
          text: "My hobby is karate. I {*do|play|go} karate {*on|at} Tuesdays {*and|but} Thursdays. I like karate, {*but|or} I don’t like judo.",
          hint: "Karate: play, go or do? Days: on or at?",
          fbOk: "Good eye!",
          fbBad: "Check play, go, do and on, at.",
          fbText: "<b>Do</b> karate. A day: <b>on</b> Tuesdays. Two days, the same: <b>and</b>. Karate – yes, judo – no: <b>but</b>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Mariia asks at the end of her post.</p>`,
          before: "What is your hobby? How",
          after: "do you do it?",
          answer: "often",
          hint: "Look at part 3 of the post.",
          fbOk: "Well done!",
          fbBad: "How … ? Always, usually, sometimes.",
          fbText: "<b>How often</b> do you do it? The answer: always, usually, sometimes, never, on Mondays…"
        },
        {
          type: "order",
          sk: "write",
          eyebrow: "Final",
          title: "Put the sentences in order.",
          body: `<p>Andrii writes a post about his hobby.</p>`,
          items: [
            "Hi! I’m Andrii from Kyiv.",
            "My hobby is football.",
            "I play it on Mondays and Wednesdays.",
            "What is your hobby? Write to me!"
          ],
          shuffle: [2, 0, 3, 1],
          hint: "Start with hello. What is “it”?",
          fbOk: "Exactly.",
          fbBad: "Look at the plan of a post.",
          fbText: "First hello. Then the hobby: football. Then how often: “I play <b>it</b>” – it is football. A question is at the end."
        }
      ],
      outro: {
        text: "A post about a hobby says hello, names the hobby and says how often. It ends with a question.",
        learned: [
          "Read a short post about a hobby.",
          "Put the parts of a post in order.",
          "Ask: How often do you do it?"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s3l7",
      title: "Sports day at the club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help at sports day?",
          body: `<p class="lead">Today is sports day at the penfriend club. Ms Kravets has a quiz.</p><p>Taras writes about his sport and his hero. Help him. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Ms Kravets writes about the children.</p>`,
          text: "Taras {*plays|goes|does} basketball. Emma {plays|*goes|does} swimming. Oksana {plays|goes|*does} karate.",
          pre: "e4s3l1",
          hint: "A game with a ball? A word with -ing?",
          fbOk: "Yes!",
          fbBad: "Check play, go and do.",
          fbText: "Basketball is a game with a ball: <b>plays</b>. Swimming: <b>goes</b>. Karate: <b>does</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Put the words in order.",
          body: `<p>Yurii plays football every day.</p>`,
          tiles: ["Yurii", "always", "plays", "football"],
          extra: ["play"],
          answer: "Yurii always plays football.",
          pre: "e4s3l2",
          hint: "Where does always go?",
          fbOk: "Well done!",
          fbBad: "Always goes before the verb.",
          fbText: "Every day: <b>always</b>. It goes before the verb: <b>Yurii always plays football.</b>"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Taras: “I go cycling with my dad every Saturday and Sunday.”</p><p>Which sentence is correct?</p>`,
          opts: [
            "He goes cycling on Mondays.",
            "He goes cycling at the weekend.",
            "He go cycling at the weekend."
          ],
          correct: 1,
          pre: "e4s3l3",
          fbOk: "Right.",
          fbBad: "Saturday and Sunday: what is it?",
          fbText: "Saturday and Sunday: <b>at the weekend</b>. With he: <b>goes</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about sport.</p>`,
          text: "I like basketball {*and|but} football. I like tennis, {*but|or} I don’t like judo. Do you like football {*or|but} basketball?",
          pre: "e4s3l4",
          fbOk: "Exactly.",
          fbBad: "The same, different or choose one?",
          fbText: "The same: <b>and</b>. Yes and no: <b>but</b>. A question, choose one: <b>or</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 5",
          title: "Write the word.",
          body: `<p>Taras’s favourite hero is not afraid of anything.</p>`,
          before: "His hero is very",
          after: ".",
          answer: ["brave", "fearless", "courageous", "bold", "daring"],
          pre: "e4s3l5",
          hint: "Look at the hero words: not afraid.",
          fbOk: "Good eye!",
          fbBad: "What do we say about a hero who is not afraid?",
          fbText: "A hero who is not afraid is <b>brave</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 6",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Taras. My hobby is basketball. I play it on Tuesdays and Fridays. I like basketball, but I don’t like swimming. What is your hobby?</i></p><p>How often does Taras play basketball?</p>`,
          opts: [
            "on Tuesdays and Fridays",
            "every day",
            "never"
          ],
          correct: 0,
          pre: "e4s3l6",
          fbOk: "Well done!",
          fbBad: "Find the days in the post.",
          fbText: "Taras writes: “I play it <b>on Tuesdays and Fridays</b>.” It is basketball."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about sport, say how often and describe your favourite hero.",
        learned: [
          "Use play, go and do with sports.",
          "Say how often and when you do sport.",
          "Say what you like with and, but and or.",
          "Describe your favourite hero."
        ]
      }
    }
  ]
});
