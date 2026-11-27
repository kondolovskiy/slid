/* Слід · Англійська мова, 9 клас — «Who am I? Personality and life story» (e9s1)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Особистість і автобіографія» — особисті дані;
   індивідуальність людини; формування особистості; автобіографія (PDF с. 33, розд. 5.2.3); функції — надавати інформацію
   й уточнювати (с. 33); граматика B1 (с. 34–35): used to vs would для повторюваних дій у минулому (would для звичок — наш вибір),
   future in the past (was going to, would — нове), compound adjectives of personality (розширення e8s4l5); повторення —
   used to (e7s5l3), could (e6s4l3), narrative tenses (e8s5); розподіл — content/eng/plan.js, reports/verify/plan-eng-g7-8-9.md,
   reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Анкета й автобіографія — лише вигаданих героїв: учень своїх персональних даних не вводить (AGENTS.md §4 п. 12).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); новий — Stepan Lytvyn
   (член penfriend club, народився в Dnipro).
   Форми, наголос і значення — CD, CD Grammar (used to, would, future in the past); URL — tasks/…/write-eng-g9-e9s1.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s1, 2026-11-25). 7 уроків (6 + фінал). Будова — за розділами 7–8 кл. (e7s5, e8s2).
   Перевірка: node tools/validate.mjs --section e9s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s1",
  grade: 9,
  weeks: [1, 4],
  title: "Who am I? Personality and life story",
  why: "To fill in forms and talk about your personality. And to write about your life and how you have changed.",
  requires: ["e4s1l6", "e5s1l1", "e5s8l2", "e6s1l4", "e6s1l6", "e6s4l3", "e7s5l3", "e8s4l5", "e8s5l4", "e8s5l5"],
  meta: { author: "writer-e9s1", created: "2026-11-25", factcheck: "verifier-e9s1, 2026-11-25 (reports/verify/write-eng-g9-e9s1.md)", teacher: null },
  badges: [
    { id: "e9s1boss", name: "Life story editor", icon: "trophy", desc: "Finish the final lesson “Who am I? Personality and life story”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s1l1",
      title: "Name, date of birth, nationality: filling in a form",
      short: "A form",
      icon: "user",
      status: "verified",
      why: "Schools, clubs and camps ask for personal information. Fill in a form and check information politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "A new member",
          body: `<p class="lead">A new member joins Ms Kravets’s penfriend club. He fills in the club form.</p><ul><li>First name: <b>Stepan</b></li><li>Surname: <b>Lytvyn</b></li><li>Date of birth: <b>14 March</b></li><li>Place of birth: <b>Dnipro, Ukraine</b></li><li>Nationality: <b>Ukrainian</b></li><li>Languages: <b>Ukrainian, English</b></li></ul><p>Which line tells you where Stepan was born?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Stepan’s form says: “Place of birth: Dnipro, Ukraine.”</p><p>What does it mean?</p>`,
          opts: [
            "Stepan wants to visit Dnipro.",
            "Stepan’s school is in Dnipro.",
            "Stepan was born in Dnipro."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Place of birth</b> is the town or city where you were born. Stepan was born in Dnipro. Does he live there now? The form doesn’t say!"
        },
        {
          type: "info",
          title: "Personal information",
          body: `<p>A form asks for personal infor<u>ma</u>tion:</p><ul><li><b>date of birth</b> → the day you were born: 14 March</li><li><b>place of birth</b> → the town or city where you were born</li><li><b>nation<u>al</u>ity</b> → Ukrainian, British</li><li><b><u>sur</u>name</b> → your family name</li></ul><p>Write a date like this: <b>14 March</b> (day, then month). Say: <i>the fourteenth of March</i>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the questions and the answers.",
          body: `<p>Which line of the form answers each question?</p>`,
          left: ["When were you born?", "Where were you born?", "What’s your family name?", "What nationality are you?"],
          right: ["date of birth", "place of birth", "surname", "nationality"],
          hint: "When → a date. Where → a place.",
          fbOk: "Right.",
          fbBad: "Look at the list of form words again.",
          fbText: "When were you born? → <b>date of birth</b>. Where? → <b>place of birth</b>. Family name → <b>surname</b>. Ukrainian, British → <b>nationality</b>."
        },
        {
          type: "info",
          title: "Born on, born in",
          body: `<p>We say <b>was / were born</b>: it happened in the past.</p><ul><li><b>on</b> + a date: born <b>on</b> 14 March</li><li><b>in</b> + a month, a year or a place: born <b>in</b> March, <b>in</b> Dnipro; my grandad was born <b>in</b> 1960</li></ul><p>When <b>were</b> you born? – I <b>was</b> born on 14 March.<br>Not: <s>I am born in Dnipro.</s> <s>I born in March.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Stepan {*was|is|has} born {*in|on|at} Dnipro. His birthday is in March: he was born {*on|in|at} 14 March. Emma {*was|is|were} born in May. Where {*were|did|was} you born?",
          hint: "A date → on. A place or a month → in. Born is about the past.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: was born, on + a date, in + a place.",
          fbText: "Stepan <b>was</b> born <b>in</b> Dnipro, <b>on</b> 14 March. Emma <b>was</b> born in May. Where <b>were</b> you born?"
        },
        {
          type: "info",
          title: "Checking information",
          body: `<p>When you aren’t sure, check:</p><ul><li>Could you <b>spell</b> that, please? – L-Y-T-V-Y-N.</li><li>Sorry, <b>did you say</b> the fourth or the fourteenth?</li><li>So you were born in Dnipro, <b>right</b>?</li></ul><p>It’s polite, and the form has no mistakes.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Ms Kravets:</b> What’s your surname, Stepan?<br><b>Stepan:</b> Lytvyn.<br><b>Ms Kravets:</b> …</p><p>Ms Kravets doesn’t know how to write it. What does she say?</p>`,
          opts: [
            "How do you spell?",
            "Could you spell that, please?",
            "Can you say me your surname?"
          ],
          correct: 1,
          hint: "Look at the phrases for checking.",
          fbOk: "Yes!",
          fbBad: "One answer is a full, polite question.",
          fbText: "<b>Could you spell that, please?</b> We need <i>that</i> or <i>it</i> after <i>spell</i>. And we say <i>tell me</i>, not <s>say me</s>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Emma fills in the same form. She’s from England, and England is part of the UK.</p>`,
          before: "Nationality:",
          answer: ["British", "English"],
          keepCase: true,
          hint: "From the UK → … From England → …",
          fbOk: "Well done!",
          fbBad: "A nationality starts with a capital letter.",
          fbText: "Emma is <b>British</b> (from the UK). She’s <b>English</b> too (from England). Both are correct."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["na|tion|+al|i|ty", "in|for|+ma|tion", "+sur|name"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "nation<u>al</u>ity, infor<u>ma</u>tion, <u>sur</u>name."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Stepan writes his first message to the club.</p>`,
          text: "Hi everyone! My first name is Stepan, and my {*surname|nationality|date of birth} is Lytvyn. I {*was|am|have} born in Dnipro {*on|in|at} 14 March. I’m {*Ukrainian|Ukraine|Dnipro}, and I speak Ukrainian and English. Some English names are hard for me, so could you {*spell|spelling|spells} your names, please?",
          hint: "Lytvyn is a family name. A date → on.",
          fbOk: "Well done!",
          fbBad: "Check the form words and the rule for born.",
          fbText: "Lytvyn is his <b>surname</b>. I <b>was</b> born <b>on</b> 14 March. I’m <b>Ukrainian</b>: a nationality. Could you <b>spell</b> your names, please?"
        }
      ],
      outro: {
        text: "Now you can read and fill in a form and check information politely.",
        learned: [
          "Understand a form: date of birth, place of birth, nationality.",
          "Say when and where someone was born: born on, born in.",
          "Check information: Could you spell that, please?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s1l2",
      title: "Easy-going or hard-working? Personality",
      short: "Personality",
      icon: "star",
      status: "verified",
      why: "Kind and funny are not enough. Learn more words to describe a person’s personality.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Describe a friend",
          body: `<p class="lead">Ms Kravets asks the club: “Describe a friend in two or three words.”</p><p><b>Oksana:</b> Halyna is easy-going. She never gets angry. She’s hard-working too: she paints for hours.<br><b>Andrii:</b> Bohdan is self-confident. He’s never shy in front of the class.<br><b>Mariia:</b> Roksolana is open-minded. She always listens to new ideas.</p><p>What is special about these words?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “Halyna is easy-going. She never gets angry.”</p><p>What is Halyna like?</p>`,
          opts: [
            "She is always busy.",
            "She is shy and quiet.",
            "She is relaxed and calm."
          ],
          correct: 2,
          hint: "She never gets angry. So she is …",
          fbOk: "Right.",
          fbBad: "Read Oksana’s words again.",
          fbText: "Halyna never gets angry: she is relaxed and calm. That’s <b>easy-going</b>."
        },
        {
          type: "info",
          title: "Two words, one adjective",
          body: `<p>Remember <i>world-famous</i>? Some personality words have two parts too:</p><ul><li><b>easy-<u>go</u>ing</b> → relaxed, doesn’t get angry or worried easily</li><li><b>hard-<u>work</u>ing</b> → works a lot and works carefully</li><li><b>self-<u>con</u>fident</b> → believes in himself or herself</li><li><b>open-<u>mind</u>ed</b> → happy to listen to new ideas</li><li><b>bad-<u>tem</u>pered</b> → gets angry quickly</li><li><b>kind-<u>heart</u>ed</b> → very kind, cares about others</li></ul><p>Your <b>person<u>al</u>ity</b> (or <b><u>char</u>acter</b>) is the kind of person you are.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["bad-tempered", "self-confident", "open-minded", "hard-working"],
          right: ["gets angry quickly", "isn’t afraid to speak in front of people", "is happy to listen to new ideas", "works a lot"],
          hint: "Angry? Not afraid? New ideas? A lot of work?",
          fbOk: "Well done!",
          fbBad: "Look at the descriptions in the rules.",
          fbText: "<b>bad-tempered</b> → gets angry quickly; <b>self-confident</b> → not afraid to speak; <b>open-minded</b> → listens to new ideas; <b>hard-working</b> → works a lot."
        },
        {
          type: "info",
          title: "Opposites",
          body: `<ul><li>hard-working ↔ <b>lazy</b></li><li>self-confident ↔ <b>shy</b></li><li>easy-going ↔ <b>bad-tempered</b></li></ul><p>Use them after <i>be</i> or before a noun: She’s <b>hard-working</b>. She’s a <b>hard-working</b> girl.</p><p>Keep the hyphen (-). Before a vowel sound, use <b>an</b>: <b>an</b> easy-going boy, <b>an</b> open-minded teacher.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Ostap trains every day and never misses a lesson. He’s very {*hard-working|lazy|bad-tempered}. Zlata used to be shy, but now she plays the bandura in concerts. She’s {*self-confident|bad-tempered|lazy} now. Tom gets angry when he loses a game. He’s a bit {*bad-tempered|easy-going|open-minded}. Kyrylo is {*an|a} open-minded boy.",
          hint: "Read what each person does. Then think: a or an before a vowel sound?",
          fbOk: "Exactly.",
          fbBad: "Look at the descriptions and the opposites.",
          fbText: "Ostap works a lot: <b>hard-working</b>. Zlata isn’t shy now: <b>self-confident</b>. Tom gets angry quickly: <b>bad-tempered</b>. <b>An</b> open-minded boy: <i>open</i> starts with a vowel sound."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Ostap is the opposite of shy. He loves speaking in front of the class.</p>`,
          before: "He’s very",
          answer: ["self-confident", "confident", "outgoing", "sociable"],
          hint: "The opposite of shy has two parts and a hyphen.",
          fbOk: "Yes!",
          fbBad: "Look at the opposites: shy ↔ …",
          fbText: "The opposite of shy is <b>self-confident</b>. Ostap is very self-confident."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s sentence is wrong.</p>`,
          text: "Halyna never gets angry. She is very [bad-tempered] and kind-hearted.",
          hint: "Halyna never gets angry. Which word means the opposite?",
          fbOk: "Good eye!",
          fbBad: "Read the first sentence again.",
          fbText: "Halyna never gets angry, so she isn’t <i>bad-tempered</i>. She is <b>easy-going</b> and kind-hearted."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["per|son|+al|i|ty", "+char|ac|ter", "+la|zy", "+hon|est"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "person<u>al</u>ity, <u>char</u>acter, <u>la</u>zy, <u>hon</u>est."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>My penfriend Zofia is open-minded: she loves learning about new countries. She’s hard-working too. She draws comics every evening, and they are really good. And she’s easy-going. Last month I forgot to write back for three weeks, but she wasn’t angry at all! – Mariia</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Zofia got angry with Mariia.",
            "Zofia likes learning about other countries.",
            "Zofia is lazy."
          ],
          correct: 1,
          hint: "Find open-minded in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the first sentence again.",
          fbText: "Zofia is <b>open-minded</b>: she loves learning about new countries. She’s <b>hard-working</b>, not lazy, and <b>easy-going</b>: she wasn’t angry."
        }
      ],
      outro: {
        text: "Easy-going, hard-working, self-confident: two words with a hyphen can describe a whole personality.",
        learned: [
          "Describe personality: easy-going, hard-working, self-confident.",
          "Use opposites: lazy ↔ hard-working, shy ↔ self-confident.",
          "Use a or an before compound adjectives."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s1l3",
      title: "What shapes us? Family, friends and choices",
      short: "What shapes us",
      icon: "users",
      status: "verified",
      why: "Family, friends and our own choices make us who we are. Talk about the people and things that changed you.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who shaped you?",
          body: `<p class="lead">Ms Lysenko gives Andrii’s class an essay question.</p><p>“Who or what shaped your personality?”</p><p><b>Andrii:</b> My grandad Vasyl taught me to play chess when I was five. Chess made me patient.<br><b>Daryna:</b> Hiking with my mum made me self-confident. And it was my own choice!<br><b>Kyrylo:</b> My history teacher is my role model. I want to be like him.</p><p>Who or what changed them: people or things they did?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo: “My history teacher is my role model. I want to be like him.”</p><p>What is a role model?</p>`,
          opts: [
            "a person who teaches history",
            "a person you want to be like",
            "a model of a famous building"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>role model</b> is a person you want to be like. Kyrylo wants to be like his teacher. More on the next screen."
        },
        {
          type: "info",
          title: "What shapes us",
          body: `<ul><li><b>shape</b> → make you the person you are: Chess shaped me.</li><li><b><u>in</u>fluence</b> → a person or thing that changes you: Grandad was a big influence on me.</li><li><b>a <u>role</u> model</b> → a person you want to be like</li><li><b><u>pa</u>tient</b> → can wait calmly</li><li><b>make a choice</b> → choose</li></ul><p><b>teach</b> someone <b>to</b> + verb: He taught me <b>to play</b> chess.<br><b>make</b> someone + adjective or verb (no <i>to</i>): Chess made me <b>patient</b>. Mum made me <b>tidy</b> my room.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Grandad taught me", "Chess made me", "My mum is my", "Hiking was a big"],
          right: ["to play chess.", "patient.", "role model.", "influence on me."],
          hint: "taught me to…, made me + adjective, a role model, an influence on…",
          fbOk: "Right.",
          fbBad: "Look at the patterns in the rules.",
          fbText: "Grandad taught me <b>to play chess</b>. Chess made me <b>patient</b>. My mum is my <b>role model</b>. Hiking was a big <b>influence on me</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Myroslava from Lviv writes about the high jumper Yaroslava Mahuchikh.</p>`,
          text: "Yaroslava Mahuchikh is my {*role model|choice|patient}: I want to be like her. My coach taught me {*to jump|jumped|jumps} higher. Training every day made me {*hard-working|to work|works}. Athletics was my own {*choice|role model|influence on}: nobody told me to do it.",
          hint: "taught me + to + verb. made me + adjective.",
          fbOk: "Well done!",
          fbBad: "Look at the patterns: teach someone to…, make someone + adjective.",
          fbText: "My <b>role model</b>: I want to be like her. Taught me <b>to jump</b>. Made me <b>hard-working</b>: make + adjective. My own <b>choice</b>: I chose it."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>In chess, you sometimes wait for a long time. Andrii learnt to wait calmly.</p>`,
          before: "Chess made Andrii",
          answer: ["patient", "calm", "calmer", "relaxed"],
          hint: "Someone who can wait calmly is …",
          fbOk: "Yes!",
          fbBad: "Look at the rules: can wait calmly →",
          fbText: "Chess made Andrii <b>patient</b>: now he can wait calmly."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii writes about his grandad.</p>`,
          tiles: ["My grandad", "taught", "me", "to play", "chess"],
          answer: "My grandad taught me to play chess.",
          extra: ["teached"],
          hint: "teach → taught. Then me + to + verb.",
          fbOk: "Exactly.",
          fbBad: "Teach is irregular: teach → taught.",
          fbText: "<b>My grandad taught me to play chess.</b> Teach → <b>taught</b>, then someone + <b>to</b> + verb."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s sentence is wrong.</p>`,
          text: "My mum made me [to] walk ten kilometres, and I was proud of myself.",
          hint: "make someone + verb: is there to?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule for make.",
          fbText: "After <b>make</b> someone, there is no <i>to</i>: My mum <b>made me walk</b> ten kilometres. But: She taught me <b>to</b> walk."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>My mum works in a hospital in Poltava. She is a nurse. She’s hard-working and kind-hearted: she always has time for her patients. When I was little, she taught me to help people. She is my role model. But my karate was my own choice, and karate made me self-confident. – Oksana</i></p><p>What does Oksana say?</p>`,
          opts: [
            "Her mum taught her to help people.",
            "Her mum made her do karate.",
            "Karate made her bad-tempered."
          ],
          correct: 0,
          hint: "Find taught in the text.",
          fbOk: "Well done!",
          fbBad: "Read the sentences about Mum and about karate again.",
          fbText: "Oksana’s mum <b>taught her to help</b> people, and she is her <b>role model</b>. Karate was Oksana’s <b>own choice</b>, and it made her <b>self-confident</b>."
        }
      ],
      outro: {
        text: "Family, friends, role models and our own choices shape our personality.",
        learned: [
          "Talk about influences: a role model, a big influence on me.",
          "Use teach someone to… and make someone + adjective or verb.",
          "Say what shaped your personality."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s1l4",
      title: "When I was little, I used to… and I would…",
      short: "Used to, would",
      icon: "scroll",
      status: "verified",
      why: "Stories about childhood are full of habits. Use used to and would to tell them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Summers in Chernihiv",
          body: `<p class="lead">Andrii writes about his childhood for Ms Lysenko’s class.</p><p><i>When I was little, I used to spend every summer with my grandparents in Chernihiv. Grandad Vasyl and I would go fishing early in the morning. Grandma Nina would make cherry varenyky for lunch. I used to have a small red bike, and I would ride it round the garden all day.</i></p><p>Would: is it about the future here?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Grandad Vasyl and I would go fishing early in the morning.”</p><p>When did they go fishing?</p>`,
          opts: [
            "only once in the past",
            "next summer",
            "many times in the past"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Here <b>would</b> is about the past: they went fishing <b>again and again</b>, every summer. Look at the next screen."
        },
        {
          type: "info",
          title: "Used to and would",
          body: `<p>Both are for things we did again and again in the past:</p><ul><li>We <b>used to go</b> fishing. = We <b>would go</b> fishing.</li><li><b>would</b> + verb → only actions: go, make, ride, play</li><li><b>used to</b> + verb → actions and states: be, have, live, like</li></ul><p>I <b>used to have</b> a red bike. Not: <s>I would have a red bike.</s></p><p>Often <i>used to</i> comes first, then <i>would</i>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>When I was little, I … Can you use would?</p>`,
          bins: ["used to or would", "only used to"],
          items: [
            ["go fishing every morning", 0],
            ["make pancakes on Sundays", 0],
            ["ride my bike all day", 0],
            ["have a small red bike", 1],
            ["live near the river", 1],
            ["be scared of the dark", 1]
          ],
          hint: "Is it an action (something you do) or a state (something you have, are)?",
          fbOk: "Well done!",
          fbBad: "Would is only for actions. Have, live and be are states.",
          fbText: "Actions (<b>go, make, ride</b>) → used to or would. States (<b>have, live, be</b>) → only <b>used to</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "When Emma was little, she {*used to|use to|was used to} be scared of dogs. Every Saturday, her grandad {*would|used|use} cook a big lunch. She {*didn’t use to|didn’t use|wouldn’t used to} like vegetables, but she loved his roast potatoes.",
          hint: "Be scared is a state. After didn’t: use to.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: used to + verb, would + verb, didn’t use to.",
          fbText: "She <b>used to</b> be scared (a state). Her grandad <b>would</b> cook (an action). She <b>didn’t use to</b> like vegetables: after <i>didn’t</i>, write <i>use to</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Grandma Nina made cherry varenyky every Sunday when Andrii was little.</p>`,
          before: "Every Sunday, Grandma Nina",
          after: "make cherry varenyky.",
          answer: ["would", "used to"],
          hint: "Making varenyky is an action, again and again.",
          fbOk: "Yes!",
          fbBad: "An action again and again in the past: … + make.",
          fbText: "Every Sunday, Grandma Nina <b>would</b> make cherry varenyky. <b>Used to</b> is correct too: it’s an action."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes about his summers with Grandad.</p>`,
          tiles: ["we", "would", "go", "fishing", "every", "morning"],
          answer: ["We would go fishing every morning.", "Every morning we would go fishing."],
          extra: ["went"],
          hint: "would + verb.",
          fbOk: "Well done!",
          fbBad: "After would: go, not went.",
          fbText: "<b>We would go fishing every morning.</b> You can also start with <i>Every morning</i>. After <b>would</b>, use the verb without changes."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "When I was little, my grandma [would] live next door. I would visit her every evening.",
          hint: "Live next door: is it an action or a state?",
          fbOk: "Good eye!",
          fbBad: "Would is only for actions.",
          fbText: "Living next door is a state, so: my grandma <b>used to live</b> next door. <i>I would visit her</i> is correct: it’s an action."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>When Tom and I were little, we used to spend Saturdays at Grandad’s house. He would cook a big lunch, and we would help him. Tom used to be very messy: he would drop potatoes on the floor! After lunch, Grandad would play his old classical music records. – Emma</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Emma used to cook lunch for Grandad.",
            "Grandad used to cook lunch on Saturdays.",
            "Tom used to be very tidy."
          ],
          correct: 1,
          hint: "Who would cook a big lunch?",
          fbOk: "Right.",
          fbBad: "Read the second sentence again.",
          fbText: "Grandad <b>would cook</b> a big lunch on Saturdays, and Emma and Tom <b>would help</b> him. Tom <b>used to be</b> messy, not tidy."
        }
      ],
      outro: {
        text: "Used to and would tell what you did again and again in the past. Would is only for actions.",
        learned: [
          "Talk about childhood habits with used to and would.",
          "Use only used to for states: be, have, live.",
          "Tell a short story about your childhood."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s1l5",
      title: "I knew I was going to be a…: the future in the past",
      short: "Future in the past",
      icon: "path",
      status: "verified",
      why: "Sometimes our plans change. Say what you were going to do and what you thought would happen.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What did you want to be?",
          body: `<p class="lead">Ms Kravets has a question for the club.</p><p>“When you were little, what did you think you would be?”</p><p><b>Mariia:</b> When I was seven, I thought I would be an artist. I was right: I draw comics now!<br><b>Taras:</b> I was going to be a footballer. But then I got a camera, and now I love photography.<br><b>Tom:</b> I always knew I was going to be a drummer. I still want to be one!</p><p>Is Taras a footballer now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras: “I was going to be a footballer.”</p><p>What does he mean?</p>`,
          opts: [
            "He had this plan in the past, but it changed.",
            "He is a footballer now.",
            "He wants to be a footballer next year."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Was going to</b> is a plan in the past. Taras’s plan changed: now he loves photography."
        },
        {
          type: "info",
          title: "The future in the past",
          body: `<p>Sometimes we look at the future from a moment in the past.</p><ul><li><b>was / were going to</b> + verb → a plan then: I <b>was going to</b> be a footballer.</li><li><b>would</b> + verb, often after <i>knew, thought, was sure</i>: I <b>thought</b> I <b>would</b> be an artist.</li></ul><p>will → <b>would</b>; am going to → <b>was going to</b>. This is <b>the future in the past</b>.</p><p>Often the plan changed: I was going to…, <b>but</b>…</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Taras thought the race {*would|will|would to} be easy, but it was really hard. We {*were|was|are} going to go camping last weekend, but it rained. Mariia was sure her comic {*would|will|wills} win the competition, and it did!",
          hint: "The story is in the past: will → would. We → were.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: will → would, am going to → was going to.",
          fbText: "He thought the race <b>would</b> be easy (not <i>will</i>: it’s the past). We <b>were</b> going to go camping. She was sure it <b>would</b> win."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Before the final, Vlad knew it. And his team won!</p><p>Before the final, Vlad knew his team …</p>`,
          opts: [
            "will win.",
            "would win.",
            "would won.",
            "was going to win."
          ],
          correct: [1, 3],
          hint: "A story in the past: will → …, is going to → …",
          fbOk: "Exactly.",
          fbBad: "Two answers are correct. Which forms are past?",
          fbText: "Vlad knew his team <b>would win</b> or <b>was going to win</b>: both are the future in the past. Not <s>will win</s> (the story is past), not <s>would won</s>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “When I was little, I was going to be a nurse, like Mum. Now I think I’ll be a vet.”</p><p>Which sentence is true?</p>`,
          opts: [
            "Oksana is a nurse now.",
            "Oksana’s mum is a vet.",
            "Oksana had a different plan when she was little."
          ],
          correct: 2,
          hint: "Was going to: a plan then. Now?",
          fbOk: "Right.",
          fbBad: "Was going to is about a plan in the past.",
          fbText: "When Oksana was little, she <b>was going to be</b> a nurse. Her plan changed: now she thinks she’ll be a vet. Her mum is a nurse."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Tom took an umbrella to school, but it was sunny all day.</p>`,
          tiles: ["I", "thought", "it", "would", "rain"],
          answer: "I thought it would rain.",
          extra: ["will"],
          hint: "I thought … : will → would.",
          fbOk: "Yes!",
          fbBad: "After thought, in a past story: would.",
          fbText: "<b>I thought it would rain.</b> He thought it in the past, so <b>would</b>, not <i>will</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Complete the sentence with the future in the past.",
          body: `<p>Dmytro talks about his plans when he was eight.</p>`,
          before: "When I was eight, I knew I",
          after: "be a drummer.",
          answer: ["would", "was going to"],
          hint: "will → … , or am going to → …",
          fbOk: "Well done!",
          fbBad: "Look at the rule: will → would.",
          fbText: "I knew I <b>would</b> be a drummer. <b>Was going to</b> is correct too."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s sentence is wrong.</p>`,
          text: "Last year, I thought our class [will] win the school quiz, and we did!",
          hint: "The quiz is in the past.",
          fbOk: "Good eye!",
          fbBad: "Thought is past: will → ?",
          fbText: "I thought our class <b>would</b> win. The quiz was last year, so <i>will</i> becomes <b>would</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zlata writes about her music school in Lviv.</p>`,
          text: "When I started music school, I thought the bandura {*would|will|is going to} be easy. It wasn’t! After a month, I {*was going to|am going to|will} give up, but my teacher helped me. She said I {*would|will|would to} love it one day. She was right: now I play in concerts!",
          hint: "Zlata looks back from the past: will → would, am going to → was going to.",
          fbOk: "Well done!",
          fbBad: "Everything happened in the past. Look at the rule again.",
          fbText: "I thought it <b>would</b> be easy. I <b>was going to</b> give up (a plan that changed). She said I <b>would</b> love it."
        }
      ],
      outro: {
        text: "Was going to and would look at the future from the past. Often, the plan changed.",
        learned: [
          "Talk about past plans: I was going to…, but…",
          "Use would after knew, thought, was sure.",
          "Change will to would in a story about the past."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s1l6",
      title: "My life story: a short autobiography",
      short: "Autobiography",
      icon: "book",
      status: "verified",
      why: "An autobiography tells the story of your life. Read one and learn how to build it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Oksana’s life story",
          body: `<p class="lead">Ms Marchenko gives Oksana’s class a project: “Write a short autobiography.” Oksana sends hers to Emma.</p><p><b>Emma:</b> An autobiography? What’s that?<br><b>Oksana:</b> Read it, and you’ll see!</p><p>What do you think an autobiography is?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana writes about her own life. What is an autobiography?</p>`,
          opts: [
            "a story about a famous person by another writer",
            "a list of your hobbies",
            "the story of your life, written by you"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>autobiography</b> is the story of your life, written by you. The next screen shows how to build one."
        },
        {
          type: "info",
          title: "An autobiography",
          body: `<p>An <b>autobi<u>og</u>raphy</b> is the story of your life, written by you.</p><ul><li>Start: when and where you were <b>born</b>.</li><li>Childhood: <b>used to</b>, <b>would</b>.</li><li>Important events: Past Simple, Past Continuous (<i>while I was training</i>), Past Perfect (<i>I had trained</i>).</li><li>End: now and your plans.</li></ul><p>Time words: <b>when I was nine</b>, <b>two years ago</b>, <b>since then</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Oksana’s life story, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>I was born in Poltava, in the hospital where my mum works as a nurse. My family lives in Zelena Dolyna, a village near Poltava. Since I was three, my grandparents have lived with us. When I was four, my brother Dmytro was born. I used to be quite shy, and I would hide behind Mum when visitors came.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Oksana is four years older than Dmytro.",
            "Oksana was born in Zelena Dolyna.",
            "Oksana’s grandparents have always lived with her."
          ],
          correct: 0,
          hint: "When was Dmytro born?",
          fbOk: "Right.",
          fbBad: "Read about Dmytro and about the grandparents again.",
          fbText: "Dmytro was born when Oksana was <b>four</b>, so she is four years older. She was born in <b>Poltava</b>. Her grandparents have lived with them <b>since she was three</b>, not always."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Reading: Oksana’s life story, part 2 of 3",
          title: "Complete the sentences.",
          text: "<i>On each of my birthdays, Grandad Mykola plants a tree in our garden. There are fifteen now! When I was nine, I started karate. At my first competition, I {*was|were|have been} very nervous. I {*had trained|have trained|train} for months, but I {*lost|lose|was losing} my first fight in a minute. I {*was going to|am going to|will} give up, but my coach said, “Losing is part of learning.”</i>",
          hint: "Training happened before the competition. A plan in the past: was going to.",
          fbOk: "Well done!",
          fbBad: "It’s a story about the past. Which happened first?",
          fbText: "I <b>was</b> nervous. I <b>had trained</b> for months: that happened earlier. I <b>lost</b> in a minute. I <b>was going to</b> give up: a plan that changed."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Oksana’s life story, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>I didn’t give up. Two years ago, while I was training for a big competition in Poltava, I hurt my arm. I thought I would miss the competition, but my arm got better just in time. I came second! Now I’m fifteen. When I was little, I was going to be a nurse, like Mum. Now I think I’ll be a vet. But I know one thing: I want to help, like Mum and Grandad.</i></p><p>What is true?</p>`,
          opts: [
            "Oksana hurt her arm while she was training.",
            "Oksana missed the competition in Poltava.",
            "Oksana came second in Poltava.",
            "Oksana gave up karate."
          ],
          correct: [0, 2],
          hint: "Find while, thought and came in the text.",
          fbOk: "Exactly.",
          fbBad: "Two sentences are true. Read about her arm again.",
          fbText: "She hurt her arm <b>while she was training</b>. She <b>thought</b> she would miss the competition, but she didn’t: she <b>came second</b>. She didn’t give up."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Start with While.</p>`,
          tiles: ["While", "I", "was", "training,", "I", "hurt", "my arm"],
          answer: "While I was training, I hurt my arm.",
          extra: ["were"],
          keepCase: true,
          hint: "While + the longer action (was + -ing), then the short one.",
          fbOk: "Well done!",
          fbBad: "I → was, not were.",
          fbText: "<b>While I was training, I hurt my arm.</b> The long action: Past Continuous. The short action: Past Simple. After the while part, use a comma."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s sentence is wrong.</p>`,
          text: "I was very tired at the competition because I [have] trained all morning.",
          hint: "Training happened before the competition, in the past.",
          fbOk: "Good eye!",
          fbBad: "Earlier past: had + the third form.",
          fbText: "Earlier in the past: I <b>had</b> trained all morning (Past Perfect)."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana was shy when she was little. Every time visitors came, she hid behind Mum.</p>`,
          before: "When visitors came, I",
          after: "hide behind Mum.",
          answer: ["would", "used to"],
          hint: "It happened again and again in the past. Hiding is an action.",
          fbOk: "Yes!",
          fbBad: "An action again and again in the past: … + hide.",
          fbText: "When visitors came, I <b>would</b> hide behind Mum. <b>Used to</b> is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma starts her autobiography.</p>`,
          text: "I {*was|am|have} born in May, in a small town in England. When I was six, I joined a swimming club. While I {*was swimming|were swimming|am swimming} in my first race, I lost my goggles! I {*had practised|have practised|practise} for weeks, so I was very upset. I {*was going to|am going to|will} give up, but Mum said I {*would|will|would to} love swimming one day. She was right.",
          hint: "It’s all in the past. Which happened first: the practice or the race?",
          fbOk: "Well done!",
          fbBad: "Look at the plan of an autobiography and the tenses in it.",
          fbText: "I <b>was</b> born. While I <b>was swimming</b> (a long action), I lost my goggles. I <b>had practised</b> earlier. I <b>was going to</b> give up. Mum said I <b>would</b> love it."
        }
      ],
      outro: {
        text: "An autobiography starts with your birth and ends with now and your plans. Past tenses tell the story.",
        learned: [
          "Read a short autobiography and find the main events.",
          "Use past tenses to tell a life story.",
          "Plan an autobiography: birth, childhood, events, now."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s1l7",
      title: "The club book: our life stories",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the club book?",
          body: `<p class="lead">Ms Kravets is making a club book. Every member writes about themselves.</p><p>She needs your help. Check the pages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Stepan was born {*on|in|at} 14 March. He was born {*in|on|at} Dnipro. His {*nationality|surname|date of birth} is Ukrainian.",
          pre: "e9s1l1",
          hint: "A date → on. A place → in.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: on + a date, in + a place.",
          fbText: "Born <b>on</b> 14 March, born <b>in</b> Dnipro. Ukrainian is his <b>nationality</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Stepan says his birthday is on the fourteenth. Ms Kravets isn’t sure: the fourth or the fourteenth?</p><p>What does she say?</p>`,
          opts: [
            "Could you spell that, please?",
            "So you were born in Dnipro, right?",
            "Sorry, did you say the fourth or the fourteenth?"
          ],
          correct: 2,
          pre: "e9s1l1",
          fbOk: "Right.",
          fbBad: "She isn’t sure about a number, not a name or a place.",
          fbText: "<b>Sorry, did you say the fourth or the fourteenth?</b> We ask <i>Could you spell that?</i> about names."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo reads history books for hours and never misses a lesson.</p><p>What is he like?</p>`,
          opts: [
            "lazy",
            "hard-working",
            "bad-tempered"
          ],
          correct: 1,
          pre: "e9s1l2",
          hint: "Does Kyrylo work a lot or a little?",
          fbOk: "Exactly.",
          fbBad: "He works a lot. Which word means that?",
          fbText: "He works a lot: <b>hard-working</b>. The opposite is <i>lazy</i>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Find the mistake.",
          body: `<p>One word on Daryna’s page is wrong.</p>`,
          text: "My mum is my role model. She made me [to] love the mountains.",
          pre: "e9s1l3",
          fbOk: "Good eye!",
          fbBad: "make someone + verb: is there to?",
          fbText: "After <b>make</b> someone, there is no <i>to</i>: She <b>made me love</b> the mountains."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose all the correct answers.",
          body: `<p>Taras writes about his childhood in Lviv.</p><p>When I was little, I …</p>`,
          opts: [
            "would have a red camera.",
            "used to take photos of our cat.",
            "use to take photos of our cat.",
            "would take photos of our cat."
          ],
          correct: [1, 3],
          pre: "e9s1l4",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. Would is only for actions.",
          fbText: "Taking photos is an action: <b>used to take</b> and <b>would take</b>. Having a camera is a state: only <i>used to have</i>. And no <s>use to</s> without <i>did</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Mariia thought the comic competition {*would|will|is going to} be easy, but it was hard. She {*was going to|is going to|will} give up, but she finished her comic in time.",
          pre: "e9s1l5",
          hint: "It all happened in the past.",
          fbOk: "Right.",
          fbBad: "In a past story: will → would, is going to → was going to.",
          fbText: "She thought it <b>would</b> be easy. She <b>was going to</b> give up, but she didn’t."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 7",
          title: "Put the words in order.",
          body: `<p>Start with While.</p>`,
          tiles: ["While", "she", "was", "swimming,", "Emma", "lost", "her goggles"],
          answer: ["While she was swimming, Emma lost her goggles.", "While Emma was swimming, she lost her goggles."],
          extra: ["were"],
          keepCase: true,
          pre: "e9s1l6",
          hint: "Which action is long, and which is short?",
          fbOk: "Yes!",
          fbBad: "While + was + -ing, then the short action.",
          fbText: "<b>While she was swimming, Emma lost her goggles.</b> Long action: Past Continuous. Short action: Past Simple."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 8",
          title: "Read and choose.",
          body: `<p><i>I was born in Lviv. When I was little, I used to be shy, and I would hide my face in every photo. Now I’m the photographer for our school newspaper! – Taras</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Taras used to be shy.",
            "Taras was born in Kyiv.",
            "Taras is still very shy in photos."
          ],
          correct: 0,
          pre: "e9s1l6",
          fbOk: "Well done!",
          fbBad: "Find used to in the text.",
          fbText: "Taras <b>used to be</b> shy, and he <b>would hide</b> his face. He was born in <b>Lviv</b>. Now he takes photos for the school newspaper."
        }
      ],
      outro: {
        text: "Well done! Now you can fill in a form, describe personality and tell a life story.",
        learned: [
          "Fill in a form and check information.",
          "Describe personality with compound adjectives.",
          "Use used to, would and the future in the past.",
          "Read and plan a short autobiography."
        ]
      }
    }
  ]
});
