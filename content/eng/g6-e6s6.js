/* Слід · Англійська мова, 6 клас — «School life: subjects and lessons» (e6s6)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 6 кл., тема «Шкільне життя»:
   улюблені навчальні предмети, види діяльності на уроках (с. 20, розд. 4.2.2); функції «аргументувати точку зору», «висловлювати
   враження, почуття» (с. 21); граматика A2 — Must (obligation, rules), Should (advice, questions), Clauses: relative — defining
   with who, which, that (с. 21–22, розд. 4.4): https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично: предмети й розклад (e5s2l1), дії на уроці й правила-імперативи (e5s2l5), Can I…? (e5s2l6); Present Continuous (e4s6),
   Past Simple (e5s9, e6s3) — у підсумковому уроці. Не повторює e5s2l7 (порівняння шкіл): фінальний урок — враження.
   Герої — серія 4–5 кл., на два роки старші: Andrii (Kyiv), Ms Lysenko — його вчителька англійської; Bohdan, Daryna, Zoriana — його клас;
   Kyrylo — новий учень цього класу (новий герой); Emma — школа в Англії з формою; Taras і Yaryna — Lviv. Зовнішність героїв не описано (канон — e6s1).
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g6-e6s6.md, «Нотатки агента»).
   Статус: verified (verifier-e6s6, reports/verify/e6s6.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s6",
  grade: 6,
  weeks: [24, 27],
  title: "School life: subjects and lessons",
  why: "To talk about your favourite subjects and what you do in lessons. And to talk about school rules and give advice.",
  requires: ["e5s2l1", "e5s2l5", "e5s2l6", "e6s5l5"],
  meta: { author: "writer-e6s6", created: "2026-11-20", factcheck: "verifier-e6s6 (reports/verify/e6s6.md)", teacher: null },
  badges: [
    { id: "e6s6boss", name: "School magazine editor", icon: "trophy", desc: "Finish the final lesson “School life: subjects and lessons”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s6l1",
      title: "My favourite subject and why",
      short: "Favourite subjects",
      icon: "star",
      status: "verified",
      why: "Say which subjects you like. And say why: because it’s fun or useful.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which subject is the best?",
          body: `<p class="lead">Ms Lysenko asks Andrii’s class: “What’s your favourite subject and why?”</p><p><b>Daryna:</b> <i>Geography, because I love maps and mountains.</i><br><b>Bohdan:</b> <i>Maths. It’s useful every day.</i><br><b>Zoriana:</b> <i>IT, because computers are fun.</i></p><p>How do they say why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna loves maps. What do you learn about in geography?</p>`,
          opts: [
            "numbers and problems",
            "countries, rivers and mountains",
            "songs and music"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In <b>geography</b>, you learn about countries, rivers and mountains. The next screen shows more subjects."
        },
        {
          type: "info",
          title: "Two new subjects",
          body: `<p>You know maths, history, science, art, music and PE. Here are two more:</p><ul><li><b>ge<u>og</u>raphy</b> – maps, countries, rivers and mountains</li><li><b>IT</b> – computers</li></ul><p>Maths is <b><u>use</u>ful</b>: it helps you every day.<br>Some problems are <b><u>dif</u>ficult</b>: not easy.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In geography, we", "In IT, we", "In music, we", "In history, we"],
          right: ["look at maps of rivers and mountains.", "work on computers.", "sing songs.", "read about people long ago."],
          hint: "Which subject is about maps? Which one is about computers?",
          fbOk: "Yes!",
          fbBad: "Look at the list of subjects again.",
          fbText: "<b>Geography</b> – maps. <b>IT</b> – computers. <b>Music</b> – songs. <b>History</b> – people long ago."
        },
        {
          type: "info",
          title: "Why? Because…",
          body: `<p><b>Why</b> do you like maths?<br>– <b>Because</b> it’s useful.</p><p>I like art <b>because</b> it’s fun.</p><ul><li>It’s fun / interesting / useful / easy.</li><li>It’s boring / difficult.</li><li>I’m good at it.</li></ul><p><b>because</b> + the reason</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Zoriana writes about her subjects.</p>`,
          text: "My favourite subject is IT {*because|but} computers are fun. I don’t like history because it’s {*boring|interesting} for me. But I like maths. It’s {*useful|boring}!",
          hint: "She doesn’t like history. Is it boring or interesting for her?",
          fbOk: "Exactly.",
          fbBad: "Read each sentence again: does she like the subject?",
          fbText: "IT is her favourite <b>because</b> computers are fun. She doesn’t like history: it’s <b>boring</b> for her. She likes maths: it’s <b>useful</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma asks Bohdan about maths.</p>`,
          tiles: ["Why", "do", "you", "like", "maths"],
          extra: ["does"],
          keepCase: true,
          answer: "Why do you like maths?",
          hint: "Start with Why. Then do + you + verb.",
          fbOk: "Well done!",
          fbBad: "With you: do, not does.",
          fbText: "<b>Why do you like maths?</b> – Because it’s useful."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma asks Andrii: “Why do you like PE?”</p>`,
          before: "Andrii:",
          after: "it’s fun and I love football.",
          answer: "because",
          hint: "Why…? – B… it’s fun.",
          fbOk: "Good eye!",
          fbBad: "How do we answer a Why question?",
          fbText: "Why…? – <b>Because</b> it’s fun."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["ge|+og|ra|phy", "+use|ful", "+dif|fi|cult"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts on the screen with new subjects.",
          fbText: "ge<u>og</u>raphy, <u>use</u>ful, <u>dif</u>ficult. In geography, the strong part is the second one."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "Hi Andrii! My favourite subject is science {*because|but} it’s interesting. I {*don’t|doesn’t} like maths because it’s {*difficult|useful} for me. Why {*do|does} you like PE? Emma",
          hint: "Emma doesn’t like maths. Why not?",
          fbOk: "Well done!",
          fbBad: "Does Emma like maths? Is it you or he?",
          fbText: "Science is interesting, so she likes it: <b>because</b>. With I: <b>don’t</b>. She doesn’t like maths: it’s <b>difficult</b> for her. With you: <b>do</b>."
        }
      ],
      outro: {
        text: "Say why you like a subject with because: I like art because it’s fun.",
        learned: [
          "Name school subjects: geography and IT.",
          "Say why you like a subject.",
          "Ask: Why do you like maths?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s6l2",
      title: "Projects, tests, experiments: what we do in lessons",
      short: "In lessons",
      icon: "bulb",
      status: "verified",
      why: "Lessons are not only books. Talk about what you do in your lessons.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What is Yaryna doing?",
          body: `<p class="lead">Taras from Lviv takes photos in his lessons.</p><p><i>Photo 1: Science. Yaryna is doing an experiment with water and salt.</i><br><i>Photo 2: Art. We’re making a poster about Lviv.</i><br><i>Photo 3: Maths. We’re doing a test. Shh!</i></p><p>Experiment, poster, test: what are these?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Yaryna puts an egg in salty water. Does it go down or stay up? She wants to find out. What is she doing?</p>`,
          opts: [
            "a poster",
            "a song",
            "an experiment"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "She wants to find out something new: it’s an <b>experiment</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "In our lessons",
          body: `<ul><li>do an <b>ex<u>per</u>iment</b> – try something and find out what happens</li><li>do a <b>test</b> – answer questions and show what you know</li><li>do a <b><u>pro</u>ject</b> – work on one topic for a few days</li><li>make a <b><u>pos</u>ter</b> – a big picture with words</li><li><b>work in groups</b> / <b>in pairs</b></li><li>watch a video, read a text</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In science, we do an", "In English, we often work in", "In history, we sometimes watch a", "In maths, we do a"],
          right: ["experiment with water.", "pairs and ask questions.", "video about old Kyiv.", "test every Friday."],
          hint: "Look at the small words: an or a?",
          fbOk: "Right.",
          fbBad: "Check the last word of each half: an, a or in?",
          fbText: "Do an <b>experiment</b>. Work in <b>pairs</b>. Watch a <b>video</b>. Do a <b>test</b>."
        },
        {
          type: "info",
          title: "Now or every week?",
          body: `<p>Look at Taras’s photos:</p><ul><li>now → <b>be + -ing</b>: Yaryna <b>is doing</b> an experiment. We<b>’re making</b> a poster.</li><li>every week, usually → Present Simple: We <b>do</b> a test every Friday. We usually <b>work</b> in groups.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his photos.</p>`,
          text: "Look! Yaryna {*is doing|does} an experiment now. In science, we usually {*work|are working} in groups. Every Friday we {*do|doing} a test in maths.",
          hint: "Look for now, usually and every Friday.",
          fbOk: "Exactly.",
          fbBad: "Is it happening now or every week?",
          fbText: "Look! … now → <b>is doing</b>. Usually → <b>work</b>. Every Friday → <b>do</b>. <i>We doing</i> isn’t correct: we need <b>do</b> or <b>are doing</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>This is a photo from our IT lesson. We’re making a short video about Lviv. Yaryna is writing the text, and I’m taking the photos. Taras</i></p><p>What is Taras doing?</p>`,
          opts: [
            "He’s writing the text.",
            "He’s taking the photos.",
            "He’s doing a test."
          ],
          correct: 1,
          hint: "Find the word I in the text.",
          fbOk: "Right.",
          fbBad: "Who is writing the text: Taras or Yaryna?",
          fbText: "Taras writes: “<b>I’m taking the photos</b>.” Yaryna is writing the text."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Look at this photo! Yaryna is [do] an experiment and we are watching.",
          hint: "Now: be + -ing. Check each verb.",
          fbOk: "Good eye!",
          fbBad: "Look at the verb after is.",
          fbText: "Now: <b>is doing</b>, not <i>is do</i>. <b>We are watching</b> is correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>In science, Bohdan puts a plant in a dark room. Can it grow without light? He wants to find out.</p>`,
          before: "He’s doing an",
          after: ".",
          answer: "experiment",
          hint: "Try something and find out what happens: an e…",
          fbOk: "Well done!",
          fbBad: "Look at the list on the screen “In our lessons”.",
          fbText: "Try something and find out what happens: an <b>experiment</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Andrii.</p>`,
          text: "Hi Andrii! This week in IT we {*are making|makes} a video about Lviv. I {*am taking|takes} the photos. In science we often {*do|does} experiments. Yesterday we {*did|do} a test in maths. It was easy! Taras",
          hint: "Who is it: we or I? Is it now, often or yesterday?",
          fbOk: "Well done!",
          fbBad: "Check who: we, I. Check when: this week, often, yesterday.",
          fbText: "We <b>are making</b> (this week). I <b>am taking</b>. We often <b>do</b>. Yesterday → Past Simple: <b>did</b>."
        }
      ],
      outro: {
        text: "In lessons we do experiments, tests and projects, make posters and work in groups.",
        learned: [
          "Name things you do in lessons.",
          "Say what is happening in a lesson now.",
          "Say what you usually do in lessons."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s6l3",
      title: "A subject that I love, a teacher who helps",
      short: "Who, which, that",
      icon: "users",
      status: "verified",
      why: "Say which person or thing you mean. Use who, which and that.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who is who in Andrii’s class?",
          body: `<p class="lead">Kyrylo is new in Andrii’s class. Andrii helps him.</p><p><b>Andrii:</b> Ms Lysenko is the teacher <b>who</b> teaches us English. Bohdan is the boy <b>who</b> loves maths. Geography is the subject <b>which</b> Daryna loves. And IT is the lesson <b>that</b> Zoriana likes best.</p><p>Who, which, that: when do we use them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo wants to say something about Bohdan. Which sentence is correct?</p>`,
          opts: [
            "Bohdan is the boy which loves maths.",
            "Bohdan is the boy who loves maths.",
            "Bohdan is the boy what loves maths."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Bohdan is a person, so we say <b>the boy who</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "who, which, that",
          body: `<ul><li>people → <b>who</b>: the teacher <b>who</b> helps me</li><li>things → <b>which</b>: the subject <b>which</b> I love</li><li>people and things → <b>that</b>: the boy <b>that</b> loves maths, the book <b>that</b> we read</li></ul><p>These words say <i>which</i> person or thing.</p><p>Not: <s>the boy what loves maths</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii tells Kyrylo about his class.</p>`,
          text: "Ms Lysenko is the teacher {*who|which} helps us with English. Geography is the subject {*which|who} Daryna loves. Bohdan is the boy {*who|which} is never late. This is the book {*which|who} we read in class.",
          hint: "Is it a person or a thing?",
          fbOk: "Exactly.",
          fbBad: "People → who. Things → which.",
          fbText: "Ms Lysenko and Bohdan are people: <b>who</b>. Geography and the book are things: <b>which</b>. <b>That</b> is also correct in all four sentences."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A teacher is a person who", "A classmate is a person who", "A timetable is a list which", "A map is a picture which"],
          right: ["teaches children a subject.", "is in the same class as you.", "shows your lessons and days.", "shows countries, rivers and towns."],
          hint: "Who → a person. Which → a thing.",
          fbOk: "Yes!",
          fbBad: "Look at who and which. Is it about a person or a thing?",
          fbText: "A <b>teacher</b> teaches. A <b>classmate</b> is in your class. A <b>timetable</b> shows your lessons. A <b>map</b> shows countries and rivers."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii tells Kyrylo about Ms Lysenko.</p>`,
          tiles: ["Ms Lysenko", "is", "the teacher", "who", "helps", "me"],
          extra: ["which"],
          answer: ["Ms Lysenko is the teacher who helps me.", "The teacher who helps me is Ms Lysenko."],
          hint: "Ms Lysenko is a person: who or which?",
          fbOk: "Well done!",
          fbBad: "Ms Lysenko is a person. Which word do we need?",
          fbText: "<b>Ms Lysenko is the teacher who helps me.</b> She is a person, so we use <b>who</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Kyrylo asks: “Who is Bohdan?”</p>`,
          before: "Bohdan is the boy",
          after: "loves maths.",
          answer: ["who", "that"],
          hint: "Bohdan is a person.",
          fbOk: "Good eye!",
          fbBad: "Is Bohdan a person or a thing?",
          fbText: "Bohdan is a person: the boy <b>who</b> loves maths. <b>That</b> is correct too."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Zoriana’s message is wrong.</p>`,
          text: "Kyrylo is the new boy [which] is in our class. He likes the subjects that are fun.",
          hint: "Kyrylo is a person.",
          fbOk: "Right.",
          fbBad: "Look at the word after the new boy.",
          fbText: "Kyrylo is a person: the new boy <b>who</b> (or <b>that</b>) is in our class. <b>The subjects that are fun</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about Kyrylo for the class website.</p>`,
          text: "Kyrylo is the new boy {*who|which} sits next to Zoriana. History is the subject {*which|who} he likes best, {*because|but} he loves old stories. Ms Lysenko is the teacher {*who|which} helps him with English.",
          hint: "Person → who. Thing → which.",
          fbOk: "Well done!",
          fbBad: "Is it a person or a thing? And why does he like history?",
          fbText: "Kyrylo and Ms Lysenko are people: <b>who</b>. History is a thing: <b>which</b>. He likes it <b>because</b> he loves old stories."
        }
      ],
      outro: {
        text: "People → who. Things → which. That is for people and things.",
        learned: [
          "Use who for people and which for things.",
          "Use that for people and things.",
          "Say which person or thing you mean."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s6l4",
      title: "School rules: you must, you mustn’t",
      short: "Must, mustn’t",
      icon: "shield",
      status: "verified",
      why: "Every school has rules. Say what you must and mustn’t do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What are the rules?",
          body: `<p class="lead">Emma writes to Andrii about her school in England.</p><p><i>At my school, we must wear a uniform. We must be on time. We mustn’t use our phones in lessons. What are the rules at your school?</i></p><p>Must, mustn’t: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“We mustn’t use our phones in lessons.” What does it mean?</p>`,
          opts: [
            "Phones in lessons: yes, please!",
            "Phones in lessons: it’s your choice.",
            "Phones in lessons: no!"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Mustn’t</b> means: don’t do it, it’s a rule. Look at the next screen."
        },
        {
          type: "info",
          title: "must and mustn’t",
          body: `<p>A <b>rule</b> tells you what to do at school.</p><ul><li>It’s a rule. Do it! → You <b>must</b> wear a uniform.</li><li>It’s a rule. Don’t do it! → You <b>mustn’t</b> run in the classroom.</li></ul><p>mustn’t = must not</p><p>must + verb: no <i>to</i>, no <i>-s</i>.<br>Not: <s>She musts wear</s>, <s>must to wear</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Here are the rules at Emma’s school.</p>`,
          text: "You {*must|mustn’t} be on time for lessons. You {*mustn’t|must} eat in the classroom. You {*must|mustn’t} listen to the teacher. You {*mustn’t|must} shout in lessons.",
          hint: "Is it a good thing to do at school?",
          fbOk: "Exactly.",
          fbBad: "Do it → must. Don’t do it → mustn’t.",
          fbText: "Do it: you <b>must</b> be on time and <b>must</b> listen. Don’t do it: you <b>mustn’t</b> eat in the classroom or shout."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "At my school, we must [to] wear a uniform. We mustn’t use our phones in lessons.",
          hint: "Look at the rule: must + verb.",
          fbOk: "Good eye!",
          fbBad: "What comes after must?",
          fbText: "After must, there is no <i>to</i>: we <b>must wear</b> a uniform."
        },
        {
          type: "info",
          title: "mustn’t or don’t have to?",
          body: `<p><b>Emma:</b> We must wear a uniform.<br><b>Andrii:</b> We <b>don’t have to</b> wear a uniform. We can wear our own clothes.</p><ul><li><b>mustn’t</b> → Don’t do it. It’s a rule.</li><li><b>don’t have to</b> → You can do it or not. It’s your choice.</li></ul><p>You <b>mustn’t</b> use your phone in lessons.<br>You <b>don’t have to</b> go to the chess club.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s school hasn’t got a uniform. The children can wear their own clothes. Which sentence is true?</p>`,
          opts: [
            "They don’t have to wear a uniform.",
            "They mustn’t wear their own clothes.",
            "They must wear a uniform."
          ],
          correct: 0,
          hint: "Is it a rule or their choice?",
          fbOk: "Right.",
          fbBad: "Can they wear their own clothes?",
          fbText: "There is no uniform. It’s their choice: they <b>don’t have to</b> wear a uniform."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ms Lysenko talks about two things.</p><p>1. Phones in lessons: it’s a rule. No phones!<br>2. The English club after school: it’s your choice.</p>`,
          text: "You {*mustn’t|don’t have to} use your phone in lessons. You {*don’t have to|mustn’t} go to the English club, but it’s fun!",
          hint: "A rule → mustn’t. Your choice → don’t have to.",
          fbOk: "Well done!",
          fbBad: "Which one is a rule? Which one is your choice?",
          fbText: "Phones: it’s a rule, so you <b>mustn’t</b>. The club: it’s your choice, so you <b>don’t have to</b> go."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>A rule at Emma’s school: no phones on the desk in lessons! Write <i>must</i> or <i>mustn’t</i>.</p>`,
          before: "You",
          after: "use your phone in lessons.",
          answer: "mustn’t",
          contractions: true,
          hint: "No phones! Do it or don’t do it?",
          fbOk: "Yes!",
          fbBad: "It’s a rule: don’t do it.",
          fbText: "Don’t do it, it’s a rule: you <b>mustn’t</b> (must not) use your phone."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Kyrylo asks Andrii about the school rules.</p>`,
          text: "Kyrylo: Is there a uniform at this school? Andrii: No, there isn’t. You {*don’t have to|mustn’t} wear a uniform. But you {*mustn’t|don’t have to} be late: it’s a rule! And you {*must|mustn’t} do your homework every day.",
          hint: "No uniform: is it a rule or your choice?",
          fbOk: "Well done!",
          fbBad: "Rule: must or mustn’t. Choice: don’t have to.",
          fbText: "No uniform → you <b>don’t have to</b> wear one. Late? It’s a rule: you <b>mustn’t</b> be late. Homework → you <b>must</b> do it."
        }
      ],
      outro: {
        text: "Must → it’s a rule, do it. Mustn’t → it’s a rule, don’t do it. Don’t have to → it’s your choice.",
        learned: [
          "Talk about school rules with must and mustn’t.",
          "Say what you don’t have to do.",
          "Write must + verb without to."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s6l5",
      title: "You should ask for help: advice",
      short: "Should",
      icon: "bulb",
      status: "verified",
      why: "Friends help with good ideas. Give advice and ask for it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What should Kyrylo do?",
          body: `<p class="lead">Kyrylo writes to Andrii in the evening.</p><p><b>Kyrylo:</b> I’m new, and maths is difficult for me. What should I do?<br><b>Andrii:</b> You should ask Bohdan. He’s good at maths. And you shouldn’t worry!</p><p>Should, shouldn’t: is it a rule or a good idea?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii says: “You should ask Bohdan.” What is it?</p>`,
          opts: [
            "a school rule",
            "a good idea for Kyrylo",
            "a question"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s a good idea from a friend. Look at the next screen."
        },
        {
          type: "info",
          title: "should and shouldn’t",
          body: `<ul><li>A good idea → You <b>should</b> ask for help.</li><li>A bad idea → You <b>shouldn’t</b> worry.</li></ul><p>should + verb: no <i>to</i>, no <i>-s</i>.</p><p>Good ideas for a friend are <b>advice</b>.<br>At school: a rule → <b>must</b>, advice → <b>should</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Bohdan gives Kyrylo advice about maths.</p>`,
          text: "You {*should|shouldn’t} do your maths homework every day. You {*shouldn’t|should} go to bed late before a test. You {*should|shouldn’t} ask questions in the lesson.",
          hint: "Is it a good idea or a bad idea?",
          fbOk: "Exactly.",
          fbBad: "Good idea → should. Bad idea → shouldn’t.",
          fbText: "Good ideas: you <b>should</b> do your homework and <b>should</b> ask questions. Bad idea: you <b>shouldn’t</b> go to bed late before a test."
        },
        {
          type: "info",
          title: "Should I…?",
          body: `<p>Ask for advice:</p><ul><li><b>Should I</b> ask the teacher?<br>– Yes, you <b>should</b>. / No, you <b>shouldn’t</b>.</li><li><b>What should I</b> do?</li></ul><p>Remember: <b>Can I</b> sit here? → you want to do something.<br><b>Should I</b> ask? → you want advice.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Kyrylo asks Andrii for advice.</p>`,
          tiles: ["Should", "I", "ask", "Ms Lysenko", "for help"],
          extra: ["asks"],
          keepCase: true,
          answer: "Should I ask Ms Lysenko for help?",
          hint: "A question for advice starts with Should I…",
          fbOk: "Well done!",
          fbBad: "After should: no -s.",
          fbText: "<b>Should I ask Ms Lysenko for help?</b> After <b>should</b>, it’s <b>ask</b>, not <i>asks</i>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Can I sit here?", "Should I ask the teacher?", "What should I do before a test?", "Could you help me with my homework?"],
          right: ["Sorry, Zoriana sits here.", "Yes, you should. She can help you.", "You should go to bed early.", "Of course! Which problem is it?"],
          hint: "Look at the first words: Can I, Should I, What should I, Could you.",
          fbOk: "Right.",
          fbBad: "Which answers give advice? Which one is about a seat?",
          fbText: "<b>Can I sit here?</b> – about a seat. <b>Should I…?</b> – Yes, you <b>should</b>. <b>What should I do?</b> – advice. <b>Could you help me?</b> – Of course!"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the chat is wrong.</p>`,
          text: "Kyrylo: Should I [asks] Bohdan about maths? Andrii: Yes, you should. He is good at it.",
          hint: "Look at the verb after should.",
          fbOk: "Good eye!",
          fbBad: "After should: no -s.",
          fbText: "<b>Should I ask</b>, not <i>asks</i>. <b>Yes, you should</b> is correct."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo is always tired at school. He goes to bed very late. What is good advice?</p>`,
          opts: [
            "You should go to bed later.",
            "You shouldn’t sleep at night.",
            "You should go to bed earlier."
          ],
          correct: 2,
          hint: "He goes to bed very late. Is that a good idea?",
          fbOk: "Yes!",
          fbBad: "Why is Kyrylo tired?",
          fbText: "He goes to bed too late, so the good advice is: <b>You should go to bed earlier.</b>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Kyrylo.</p>`,
          text: "Hi Kyrylo! Here is my advice. You {*should|shouldn’t} ask Bohdan about maths. He’s the boy {*who|which} is good at it. You {*shouldn’t|should} worry about English: Ms Lysenko is very kind. See you tomorrow! Andrii",
          hint: "Good idea → should. Bad idea → shouldn’t.",
          fbOk: "Well done!",
          fbBad: "Is it a good idea or a bad idea? Is Bohdan a person?",
          fbText: "Asking Bohdan is a good idea: <b>should</b>. Bohdan is a person: <b>who</b>. Worrying is a bad idea: <b>shouldn’t</b>."
        }
      ],
      outro: {
        text: "Should → a good idea. Shouldn’t → a bad idea. Ask for advice: Should I…? What should I do?",
        learned: [
          "Give advice with should and shouldn’t.",
          "Ask for advice: What should I do?",
          "Tell a rule from advice: must or should."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s6l6",
      title: "The best lesson of the year",
      short: "Best lesson",
      icon: "star",
      status: "verified",
      why: "Some lessons you never forget. Say what happened and how you felt.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What was your best lesson?",
          body: `<p class="lead">Ms Lysenko asks the class to write about the best lesson of the year.</p><p><b>Daryna:</b> <i>My best lesson was in geography. It was amazing!</i><br><b>Bohdan:</b> <i>I loved our science experiment.</i></p><p>How do we say what happened and how it was?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna says: “It was amazing!” Did she like the lesson?</p>`,
          opts: [
            "No, not at all.",
            "It was OK.",
            "Yes, a lot."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Amazing</b> means very, very good. Look at the next screen."
        },
        {
          type: "info",
          title: "It was amazing!",
          body: `<p>Past Simple:</p><ul><li>was, were: It <b>was</b> fun. We <b>were</b> happy.</li><li>-ed: work → <b>worked</b>, love → <b>loved</b></li><li>do → <b>did</b>, make → <b>made</b>, have → <b>had</b>, go → <b>went</b>, see → <b>saw</b></li></ul><p>How was it?</p><ul><li>Good: It was <b>a<u>maz</u>ing</b> / exciting / fun.</li><li>Bad: It was boring.</li></ul><p><b>What was the best part?</b></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Daryna’s best lesson, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>My best lesson this year was in geography. It was in March. We worked in groups. Every group had a big map of Ukraine and one river. My group had the Dnipro. We found Kyiv on it. Then we drew the river in blue.</i></p><p>What did every group have?</p>`,
          opts: [
            "a computer and a video",
            "a map of Ukraine and a river",
            "a test and a book"
          ],
          correct: 1,
          hint: "Find the word had.",
          fbOk: "Right.",
          fbBad: "Read the sentence with Every group.",
          fbText: "Daryna writes: “Every group <b>had a big map of Ukraine and one river</b>.”"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Daryna’s best lesson, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>Then every group made a poster about its river. We wrote facts and found photos. At the end, each group told the class about its river. I was a bit worried, but it went well. Our teacher said: “Great work!”</i></p><p>What did the groups do?</p>`,
          opts: [
            "They made a poster.",
            "They told the class about a river.",
            "They did a test.",
            "They watched a film."
          ],
          correct: [0, 1],
          hint: "Find made and told.",
          fbOk: "Well done!",
          fbBad: "Did they do a test? Read the text again.",
          fbText: "The groups <b>made a poster</b> and <b>told the class</b> about their river. There was no test and no film."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Daryna’s best lesson, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Why was it the best lesson? Because we didn’t just listen. We did things together, and I learnt a lot about my country. The best part was our poster. It was amazing!</i></p><p>Why was it the best lesson for Daryna?</p>`,
          opts: [
            "The lesson was very short.",
            "There was no homework.",
            "The class did things together."
          ],
          correct: 2,
          hint: "Find the word Because.",
          fbOk: "Exactly.",
          fbBad: "Read the sentence after Why was it the best lesson?",
          fbText: "Daryna writes: “<b>We did things together</b>, and I learnt a lot about my country.”"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple.",
          body: `<p>Andrii writes about his best PE lesson.</p>`,
          text: "Last May we {*played|play} football in the rain. I {*had|have} a lot of fun that day. After the lesson we {*went|go} home wet but happy. It {*was|were} the best lesson of the year!",
          hint: "Last May, that day: it’s the past.",
          fbOk: "Yes!",
          fbBad: "Look at the list: have → had, go → went.",
          fbText: "Last May → past: <b>played</b>, <b>had</b>, <b>went</b>. It → <b>was</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the Past Simple of <i>do</i>.</p>`,
          before: "Yesterday we",
          after: "an experiment in science.",
          answer: "did",
          hint: "Look at the list: do → …",
          fbOk: "Good eye!",
          fbBad: "do → d…",
          fbText: "do → <b>did</b>: Yesterday we <b>did</b> an experiment."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ms Lysenko asks Daryna about the lesson.</p>`,
          tiles: ["What", "was", "the best part", "of the lesson"],
          extra: ["were"],
          keepCase: true,
          answer: "What was the best part of the lesson?",
          hint: "Start with What. One part: was or were?",
          fbOk: "Well done!",
          fbBad: "The best part is one thing: was, not were.",
          fbText: "<b>What was the best part of the lesson?</b> – Our poster!"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Kyrylo writes about his best lesson.</p>`,
          text: "My best lesson this year {*was|were} in history. In April, we {*went|go} to a museum in Kyiv. We {*saw|see} old maps and coins there. It was {*amazing|boring}, and I loved it!",
          hint: "It’s about the past. And he loved it: was it amazing or boring?",
          fbOk: "Well done!",
          fbBad: "Past Simple: go → went, see → saw.",
          fbText: "Past Simple: <b>was</b>, <b>went</b>, <b>saw</b>. He loved it, so it was <b>amazing</b>."
        }
      ],
      outro: {
        text: "Say what happened with the Past Simple. Say how it was: It was amazing!",
        learned: [
          "Tell a friend about a lesson in the past.",
          "Say how a lesson was: amazing, fun or boring.",
          "Ask: What was the best part?"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s6l7",
      title: "Our school magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the school magazine?",
          body: `<p class="lead">Andrii’s class in Kyiv makes an English school magazine.</p><p>Ms Lysenko needs your help. Read the pages and check them. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Page 1: Our favourite subjects.</p>`,
          text: "Daryna: I love geography {*because|but} I like maps. Bohdan: My favourite subject is maths. It’s {*useful|boring} every day. Zoriana: I don’t like history. It’s {*boring|interesting} for me.",
          pre: "e6s6l1",
          hint: "Does each person like the subject?",
          fbOk: "Yes!",
          fbBad: "Read each sentence again: do they like it?",
          fbText: "Daryna loves geography <b>because</b> she likes maps. Maths is Bohdan’s favourite: it’s <b>useful</b>. Zoriana doesn’t like history: it’s <b>boring</b> for her."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Page 2: a science lesson. What is Bohdan doing now?</p>`,
          opts: [
            "Bohdan do an experiment.",
            "Bohdan is doing an experiment.",
            "Bohdan doing an experiment."
          ],
          correct: 1,
          pre: "e6s6l2",
          hint: "Now: be + -ing.",
          fbOk: "Right.",
          fbBad: "Now: is + doing.",
          fbText: "Now: <b>Bohdan is doing an experiment.</b>"
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Page 3: our new classmate. Write one word.</p>`,
          before: "History is the subject",
          after: "Kyrylo likes best.",
          answer: ["which", "that"],
          pre: "e6s6l3",
          hint: "History is a thing, not a person.",
          fbOk: "Good eye!",
          fbBad: "Is history a person or a thing?",
          fbText: "History is a thing: the subject <b>which</b> (or <b>that</b>) Kyrylo likes best."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Page 4: rules in the school library.</p>`,
          text: "You {*must|mustn’t} be quiet in the library. You {*mustn’t|must} eat near the books. You {*must|mustn’t} give the books back on time.",
          pre: "e6s6l4",
          hint: "Do it → must. Don’t do it → mustn’t.",
          fbOk: "Exactly.",
          fbBad: "Is it a good thing to do in a library?",
          fbText: "You <b>must</b> be quiet and <b>must</b> give the books back. You <b>mustn’t</b> eat near the books."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Page 4: the photo club is on Fridays. It’s fun, but it’s your choice. What does the page say?</p>`,
          opts: [
            "You mustn’t go to the photo club.",
            "You must go to the photo club.",
            "You don’t have to go to the photo club."
          ],
          correct: 2,
          pre: "e6s6l4",
          hint: "Is it a rule or your choice?",
          fbOk: "Well done!",
          fbBad: "It’s your choice. Which words mean that?",
          fbText: "Your choice → <b>don’t have to</b>. Mustn’t means it’s a rule: don’t do it."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Page 5: advice for new pupils. Andrii gives advice.</p>`,
          tiles: ["You", "should", "ask", "your teacher", "for help"],
          extra: ["asks"],
          keepCase: true,
          answer: "You should ask your teacher for help.",
          pre: "e6s6l5",
          hint: "Start with You. After should: no -s.",
          fbOk: "Well done!",
          fbBad: "After should: ask, not asks.",
          fbText: "<b>You should ask your teacher for help.</b> should + verb, no -s."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 7",
          title: "Complete the sentences with the Past Simple.",
          body: `<p>Page 6: the best lesson of the year.</p>`,
          text: "Last week we {*made|make} a video in IT. Zoriana {*had|has} the camera that day. We {*went|go} outside and filmed our school. It {*was|were} so exciting!",
          pre: "e6s6l6",
          hint: "Last week: it’s the past. make → made, have → had, go → went.",
          fbOk: "Well done!",
          fbBad: "Look for Last week: use the Past Simple.",
          fbText: "Last week → Past Simple: <b>made</b>, <b>had</b>, <b>went</b>. It → <b>was</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about your subjects, your lessons, school rules and the best lesson of the year.",
        learned: [
          "Say why you like a subject.",
          "Talk about rules with must, mustn’t and don’t have to.",
          "Give advice with should.",
          "Say how a lesson was: It was amazing!"
        ]
      }
    }
  ]
});
