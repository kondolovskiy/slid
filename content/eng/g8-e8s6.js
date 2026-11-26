/* Слід · Англійська мова, 8 клас — «Schools in Ukraine and abroad» (e8s6)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 8 кл.: тема «Шкільне життя» — школи в Україні та за
   кордоном; типи шкіл, приміщення, обладнання; правила поведінки (PDF с. 32, розд. 5.2.2); граматика B1 (с. 34–35):
   Must — deductions, Could / Might — possibility (нове); May, Could — permission, be allowed to (наш; розширення
   e5s2l6); Must — obligation: mustn’t vs don’t have to (розширення e6s6l4, e6s5l5); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Заперечна дедукція — can’t be, не mustn’t be (CD Grammar «Must»). Дозвіл дають can / may, не could (CD Grammar
   «Can, could or may?»). must / have to у правилах — обидва правильні, тож їх не протиставляємо.
   Факти про школи (Закон «Про повну загальну середню освіту» ст. 4, 10, 35; Закон «Про освіту» ст. 12; CD; en.wikipedia
   «Education in England») — URL у tasks/…/write-eng-g8-e8s6.md, «Нотатки агента».
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Не повторює e5s2l7 «Letters from two schools».
   Герої — серія 4–7 кл., на чотири роки старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Oksana (14) —
   Zelena Dolyna, без форми; Emma — школа в Англії, форма (white shirt, grey jumper, blue tie); Andrii — Kyiv, без
   форми, Ms Lysenko; нові: Freya (14, boarding school в Англії), Denys (кузен Оксани, 16, ліцей у Poltava).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e8s6). 7 уроків (6 + фінал). Будова — за розділами 6 кл. (verified) і 7 кл. (e7s5).
   Перевірка: node tools/validate.mjs --section e8s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s6",
  grade: 8,
  weeks: [23, 26],
  title: "Schools in Ukraine and abroad",
  why: "To talk about types of schools, school buildings and rules. And to make guesses about things you see in photos.",
  requires: ["e6s6l4", "e6s5l5", "e6s5l4", "e5s2l6", "e5s2l7"],
  meta: { author: "writer-e8s6", created: "2026-11-25", factcheck: "verifier-e8s6 (reports/verify/write-eng-g8-e8s6.md)", teacher: null },
  badges: [
    { id: "e8s6boss", name: "School explorer", icon: "trophy", desc: "Finish the final lesson “Schools in Ukraine and abroad”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s6l1",
      title: "Primary, secondary or boarding school? Types of schools",
      short: "Types of schools",
      icon: "city",
      status: "verified",
      why: "Schools are different in different countries. Learn the names of types of schools in England and Ukraine.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What kind of school?",
          body: `<p class="lead">Ms Kravets asks the penfriend club: “What kind of school do you go to?”</p><p><b>Freya:</b> I go to a boarding school in England. I live there in term time and go home for the holidays.<br><b>Emma:</b> I go to a secondary school in my town. I go home every day after school.<br><b>Oksana:</b> My school in Zelena Dolyna is a gymnasium now.<br><b>Denys:</b> I’m Oksana’s cousin. I’m 16, and I study at a lyceum in Poltava.</p><p>Boarding school, gymnasium, lyceum: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Freya lives at her school in term time. She goes home for the holidays.</p><p>What is a <b>boarding school</b>?</p>`,
          opts: [
            "a school for very young children",
            "a school where pupils live and study",
            "a school only for sport"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "At a <b>boarding school</b>, pupils live and study. Freya sleeps there in term time. The next screen has more types of schools."
        },
        {
          type: "info",
          title: "Schools in England",
          body: `<ul><li><b>primary school</b> → for children aged 5 to 11</li><li><b>secondary school</b> → from the age of 11</li><li><b>GCSEs</b> → exams at about 16</li><li><b>the sixth form</b> → for students aged 16 to 18</li><li><b>boarding school</b> → pupils live and study there</li></ul><p>a <b>pupil</b> = a child at school</p><p><u>pri</u>mary, <u>pu</u>pil</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Primary school is for", "At a boarding school,", "The sixth form is for", "At about 16, pupils"],
          right: ["children aged 5 to 11.", "pupils live and study.", "students aged 16 to 18.", "take their GCSE exams."],
          hint: "Which one is about ages 5 to 11? Which one is about exams?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of schools in England again.",
          fbText: "<b>Primary school</b>: ages 5 to 11. At a <b>boarding school</b>, pupils live and study. The <b>sixth form</b>: ages 16 to 18. At about 16, pupils take their <b>GCSEs</b>."
        },
        {
          type: "info",
          title: "Schools in Ukraine",
          body: `<p>Children start school at six. The school year starts on 1 September.</p><ul><li><b>primary school</b> → Years 1 to 4</li><li><b>gymnasium</b> → Years 5 to 9</li><li><b>lyceum</b> → the last years of school. Students choose a <b>profile</b>: the subjects for their future.</li></ul><p>A gymnasium can have a primary school too.</p><p>gym<u>na</u>sium, ly<u>ce</u>um</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Fill in the gaps.",
          body: `<p>Oksana is 14. She is in Year 8 at her school in Zelena Dolyna. Her cousin Denys is 16.</p>`,
          text: "Oksana’s school is a {*gymnasium|lyceum|boarding school}: it’s for Years 5 to 9. It has a {*primary|sixth form|boarding} school too, for Years 1 to 4. Denys studies at a {*lyceum|gymnasium|primary school} in Poltava. He has chosen a {*profile|pupil|uniform}: the subjects for his future.",
          hint: "Years 5 to 9 → ? The last years of school → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the list of schools in Ukraine again.",
          fbText: "Years 5 to 9: a <b>gymnasium</b>. Years 1 to 4: <b>primary</b> school. Denys is in the last years of school, so he’s at a <b>lyceum</b>. He has chosen a <b>profile</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Freya: “I’m 14. In two years, I’m going to take my GCSE exams. After that, I want to stay at my school for the sixth form.”</p><p>How old will Freya be when she takes her GCSEs?</p>`,
          opts: [
            "about 11",
            "about 18",
            "about 16"
          ],
          correct: 2,
          hint: "She’s 14 now. Add two years.",
          fbOk: "Right.",
          fbBad: "14 + 2 = ?",
          fbText: "Freya is 14. In two years, she will be <b>about 16</b>: that’s the age for GCSEs. Then she wants to stay for the sixth form."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["ly|+ce|um", "gym|+na|si|um", "+pu|pil", "+pri|ma|ry"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the lists.",
          fbText: "ly<u>ce</u>um, gym<u>na</u>sium, <u>pu</u>pil, <u>pri</u>mary."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma is 14. She goes home every day after school.</p>`,
          before: "Emma isn’t at primary school now. She goes to a",
          after: "school.",
          answer: ["secondary", "day", "high", "state", "comprehensive", "grammar"],
          hint: "Primary school is for ages 5 to 11. After 11 → ?",
          fbOk: "Yes!",
          fbBad: "Emma is 14. Look at the list of schools in England.",
          fbText: "From the age of 11, pupils in England go to <b>secondary</b> school. Emma goes home every day, so it isn’t a boarding school."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Freya.</p>`,
          text: "Hi Freya! In Ukraine, we start school at {*six|five|eleven}. Primary school is from Year 1 to Year {*4|9|11}. Now I’m at a {*gymnasium|lyceum|boarding school} in my village. After Year 9, I want to go to a {*lyceum|primary school|sixth form} in Poltava, like my cousin Denys. Is it fun to live at your school?",
          hint: "Look at the list of schools in Ukraine. Where does Denys study?",
          fbOk: "Well done!",
          fbBad: "Check: the age to start school, the years of primary school, Oksana’s school and Denys’s school.",
          fbText: "We start school at <b>six</b>. Primary school: Years 1 to <b>4</b>. Oksana is at a <b>gymnasium</b>. Denys studies at a <b>lyceum</b>, and Oksana wants to go there too."
        }
      ],
      outro: {
        text: "Primary school, secondary school, boarding school, gymnasium, lyceum: now you can name types of schools in England and Ukraine.",
        learned: [
          "Name types of schools: primary, secondary, boarding school.",
          "Explain what a gymnasium and a lyceum are in Ukraine.",
          "Say at what age children go to different schools."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s6l2",
      title: "A science lab, a gym, a canteen: school rooms",
      short: "School rooms",
      icon: "map",
      status: "verified",
      why: "Every school has special rooms. Say what they are and what you do there.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "A tour of Emma’s school",
          body: `<p class="lead">Emma writes a short tour of her school for the penfriend club.</p><p><i>Welcome to my school! We have lunch in the canteen. It’s next to the school hall. Our science lab is new: it has got ten microscopes! The library is my favourite place. It’s very quiet. Teachers have their break in the staffroom. Pupils can’t go in there.</i></p><p>Where do pupils have lunch? Where do they look through microscopes?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Our science lab has got ten microscopes.”</p><p>What is a <b>science lab</b>?</p>`,
          opts: [
            "a room for lunch",
            "a room for teachers only",
            "a room for experiments in science"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>science lab</b> (laboratory) is a room for experiments. The next screen has more school rooms."
        },
        {
          type: "info",
          title: "Rooms at school",
          body: `<ul><li>the <b>canteen</b> → pupils have lunch</li><li>the <b>science lab</b> → pupils do experiments</li><li>the <b>library</b> → pupils read and borrow books</li><li>the <b>gym</b> → pupils do PE</li><li>the <b>school hall</b> → big meetings and concerts</li><li>the <b>staffroom</b> → only for teachers</li></ul><p>can<u>teen</u></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In the canteen,", "In the science lab,", "In the library,", "In the gym,"],
          right: ["pupils have lunch.", "pupils do experiments.", "pupils borrow books.", "pupils do PE."],
          hint: "Where do you eat? Where do you run and jump?",
          fbOk: "Right.",
          fbBad: "Look at the list of rooms again.",
          fbText: "Lunch → the <b>canteen</b>. Experiments → the <b>science lab</b>. Books → the <b>library</b>. PE → the <b>gym</b>."
        },
        {
          type: "info",
          title: "School equipment",
          body: `<p><b>equipment</b> = the things you need for a job or a lesson</p><ul><li>in the science lab: <b>microscopes</b></li><li>in the classroom: an interactive whiteboard and a <b>projector</b></li><li>in the corridor: <b>lockers</b> for your things</li></ul><p><b>equipment</b> has no -s: a lot of new equipment.</p><p>e<u>quip</u>ment, <u>mi</u>croscope, pro<u>jec</u>tor</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it a room or equipment?</p>`,
          bins: ["a room", "equipment"],
          items: [
            ["a canteen", 0],
            ["a microscope", 1],
            ["a staffroom", 0],
            ["a projector", 1],
            ["a library", 0],
            ["a locker", 1]
          ],
          hint: "Can you walk into it?",
          fbOk: "Exactly.",
          fbBad: "Rooms are places. Equipment is things.",
          fbText: "Rooms: <b>a canteen</b>, <b>a staffroom</b>, <b>a library</b>. Equipment: <b>a microscope</b>, <b>a projector</b>, <b>a locker</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his school in Kyiv.</p>`,
          text: "We have lunch in the {*canteen|staffroom|library}. In the {*science lab|canteen|staffroom}, we look at leaves through microscopes. Our teachers have meetings in the {*staffroom|gym|canteen}. On Fridays, we do PE in the {*gym|library|science lab}.",
          hint: "Lunch, microscopes, teachers, PE: which rooms?",
          fbOk: "Well done!",
          fbBad: "Look at the list of rooms again.",
          fbText: "Lunch: the <b>canteen</b>. Microscopes: the <b>science lab</b>. Teachers: the <b>staffroom</b>. PE: the <b>gym</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["can|+teen", "e|+quip|ment", "+mi|cro|scope", "pro|+jec|tor"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the lists.",
          fbText: "can<u>teen</u>, e<u>quip</u>ment, <u>mi</u>croscope, pro<u>jec</u>tor."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii loves books. At lunchtime, he reads there, and he borrows a new book every week.</p>`,
          before: "Andrii often goes to the school",
          after: ".",
          answer: "library",
          hint: "Where can you borrow books?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of rooms: books.",
          fbText: "You read and borrow books in the <b>library</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Freya.</p>`,
          text: "Hi Freya! Yes, our school has got a small science lab with new {*equipment|equipments|staffroom}. We haven’t got a {*canteen|microscope|locker}, so we have lunch in the school hall. There are lockers in the {*corridor|projector|lunch}. My favourite room is the {*gym|staffroom|microscope}: I love PE!",
          hint: "Equipment has no -s. Where are the lockers?",
          fbOk: "Well done!",
          fbBad: "Check: equipment, no -s; rooms are places, equipment is things.",
          fbText: "New <b>equipment</b>, no -s. They haven’t got a <b>canteen</b>, so they eat in the hall. Lockers are in the <b>corridor</b>. Oksana loves PE, so her favourite room is the <b>gym</b>."
        }
      ],
      outro: {
        text: "Canteen, science lab, library, gym, staffroom: now you can name the rooms at your school and the equipment in them.",
        learned: [
          "Name school rooms: a canteen, a science lab, a staffroom.",
          "Say what pupils do in each room.",
          "Talk about school equipment: equipment has no -s."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s6l3",
      title: "It must be a school in England: guessing",
      short: "Must, might, can’t",
      icon: "eye",
      status: "verified",
      why: "Sometimes you aren’t sure about something. Learn to make good guesses about photos and things you see.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Which one is my school?",
          body: `<p class="lead">Emma sends three photos to the penfriend club. “Guess! Which one is my school?”</p><p><b>Photo A:</b> pupils in white shirts, grey jumpers and blue ties.<br><b>Photo B:</b> pupils in their own clothes. The posters are in Ukrainian.<br><b>Photo C:</b> pupils in green jumpers.</p><p><b>Andrii:</b> Photo B can’t be your school. The posters are in Ukrainian!<br><b>Oksana:</b> Photo A might be your school. Your tie is blue.<br><b>Taras:</b> Look, there’s Emma at the front! Photo A must be your school.</p><p>Who is sure? Who isn’t sure?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras: “Photo A must be your school.”</p><p>Is Taras sure?</p>`,
          opts: [
            "Yes, he’s sure.",
            "No, it’s only maybe.",
            "He’s sure it isn’t Emma’s school."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Taras can see Emma in the photo, so he’s sure: it <b>must be</b> her school. Oksana isn’t sure: it <b>might be</b>."
        },
        {
          type: "info",
          title: "Guessing: must, might, can’t",
          body: `<ul><li>I’m sure it’s true → It <b>must be</b> Emma’s school.</li><li>Maybe it’s true → It <b>might be</b> / It <b>could be</b> Emma’s school.</li><li>I’m sure it isn’t true → It <b>can’t be</b> Emma’s school.</li></ul><p>must, might, could, can’t + verb: no <i>to</i>, no <i>-s</i>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii finds a bag in the school library. Daryna’s name is on it.</p><p>What does Andrii say?</p>`,
          opts: [
            "It can’t be Daryna’s bag.",
            "It might Daryna’s bag.",
            "It must be Daryna’s bag."
          ],
          correct: 2,
          hint: "Her name is on it. Is Andrii sure?",
          fbOk: "Right.",
          fbBad: "The name is on the bag. Sure or not sure?",
          fbText: "Daryna’s name is on the bag, so Andrii is sure: it <b>must be</b> Daryna’s bag. <i>It might Daryna’s bag</i> has no verb: <b>might be</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with must, might or can’t.",
          body: `<p>Andrii is at school at 12.30.</p>`,
          text: "The canteen is full, and it smells of pizza. Andrii is sure: it {*must|might|can’t} be lunchtime. The staffroom door is closed. Andrii isn’t sure: the PE teacher {*might|must|can’t} be in there. Bohdan is ill at home today. Andrii is sure: the boy in the gym {*can’t|must|might} be Bohdan.",
          hint: "Sure it’s true → must. Not sure → might. Sure it isn’t true → can’t.",
          fbOk: "Exactly.",
          fbBad: "Is Andrii sure or not sure? True or not true?",
          fbText: "Sure it’s true: it <b>must</b> be lunchtime. Not sure: the teacher <b>might</b> be there. Bohdan is at home, so the boy <b>can’t</b> be Bohdan."
        },
        {
          type: "info",
          title: "can’t be, not mustn’t be",
          body: `<ul><li><b>mustn’t</b> is for rules: You <b>mustn’t</b> run in the corridor.</li><li>For guesses, use <b>can’t</b>: It <b>can’t be</b> Bohdan. He’s at home.</li></ul><p>Not: <s>It mustn’t be Bohdan.</s></p><p><b>might</b> and <b>could</b> mean the same here: maybe.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Bohdan is ill at home today, so the boy in the gym [mustn’t] be Bohdan.",
          hint: "Is it a rule or a guess?",
          fbOk: "Good eye!",
          fbBad: "Mustn’t is for rules. What do we use for guesses?",
          fbText: "It’s a guess, not a rule: the boy <b>can’t</b> be Bohdan. <i>Mustn’t</i> is for rules."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia finds a phone in the classroom. It has a blue case. Two girls in her class have blue cases: Polina and Roksolana.</p><p>What does Mariia say?</p>`,
          opts: [
            "It must be Polina’s phone.",
            "It might be Polina’s phone.",
            "It can’t be Polina’s phone."
          ],
          correct: 1,
          hint: "Two girls have blue cases. Can Mariia be sure?",
          fbOk: "Yes!",
          fbBad: "It could be Polina’s or Roksolana’s phone.",
          fbText: "Two girls have blue cases, so Mariia isn’t sure: it <b>might be</b> Polina’s phone. It might be Roksolana’s too."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: might or could.",
          body: `<p>Freya sees a photo of a girl with a karate medal. Oksana does karate, but the photo is small. Freya isn’t sure.</p>`,
          before: "It",
          after: "be Oksana.",
          answer: ["might", "could", "may"],
          hint: "Not sure → maybe.",
          fbOk: "Well done!",
          fbBad: "Freya isn’t sure. Which word means maybe?",
          fbText: "Freya isn’t sure, so it <b>might</b> (or <b>could</b>) be Oksana."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma looks at Photo C. The pupils have green jumpers. Emma is sure it isn’t her school.</p>`,
          tiles: ["It", "can’t", "be", "my school"],
          answer: "It can’t be my school.",
          extra: ["mustn’t"],
          keepCase: true,
          hint: "Sure it isn’t true → can’t.",
          fbOk: "Right.",
          fbBad: "Mustn’t is for rules, not guesses.",
          fbText: "<b>It can’t be my school.</b> Emma is sure it isn’t true, so it’s <b>can’t</b>, not <i>mustn’t</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Look at this old school photo from Grandma Hanna! The children are sitting at wooden desks. On the board, there’s a date: 1 September 1972. The girl at the front has got long dark hair. She looks just like Aunt Nadiia, so she must be Grandma! The boy next to her might be Grandad Mykola, but I’m not sure. – Oksana</i></p><p>What is Oksana sure about?</p>`,
          opts: [
            "The girl at the front is Grandma Hanna.",
            "The boy is Grandad Mykola.",
            "The photo is from 2022."
          ],
          correct: 0,
          hint: "Find must and might in the text.",
          fbOk: "Well done!",
          fbBad: "Must → sure. Might → not sure.",
          fbText: "The girl <b>must be</b> Grandma: Oksana is sure. The boy <b>might be</b> Grandad: she isn’t sure. The date on the board is 1972."
        }
      ],
      outro: {
        text: "Sure → must. Maybe → might or could. Sure it isn’t true → can’t.",
        learned: [
          "Make guesses with must, might and could.",
          "Say what can’t be true: It can’t be Bohdan.",
          "Use mustn’t for rules and can’t for guesses."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s6l4",
      title: "May I leave early? Are we allowed to…?",
      short: "Permission",
      icon: "voice",
      status: "verified",
      why: "Ask for permission politely. And talk about what you are allowed to do at school.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Can I? May I?",
          body: `<p class="lead">It’s Friday at Andrii’s school in Kyiv.</p><p><b>Andrii:</b> Excuse me, Ms Lysenko. May I leave early today? I’ve got a chess tournament at four.<br><b>Ms Lysenko:</b> Yes, of course. Good luck!<br><b>Zoriana:</b> Could I use the computers in the library after lessons?<br><b>Ms Lysenko:</b> Yes, you can. Pupils are allowed to use them until five.<br><b>Bohdan:</b> Are we allowed to eat there?<br><b>Ms Lysenko:</b> No, you aren’t.</p><p>May I…? Are we allowed to…? What do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii asks his teacher: “May I leave early today?”</p><p>Why does he say <i>May I</i>, not <i>Can I</i>?</p>`,
          opts: [
            "It’s very polite.",
            "It’s about the past.",
            "It’s a school rule."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>May I…?</b> is very polite. We often use it with teachers. The next screen shows how to ask and answer."
        },
        {
          type: "info",
          title: "Asking for permission",
          body: `<ul><li><b>Can I</b> sit here? → friendly</li><li><b>Could I</b> sit here? → polite</li><li><b>May I</b> sit here? → very polite</li></ul><p>Answers: Yes, of course. / Yes, you <b>can</b>. / Sorry, you <b>can’t</b>.</p><p>We give permission with <b>can</b>, not <i>could</i>. Not: <s>Yes, you could.</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The head teacher is in her office. Freya wants to come in. She wants to be very polite.</p><p>What does she say?</p>`,
          opts: [
            "Can I come in?",
            "May I come in, please?",
            "I come in, yes?"
          ],
          correct: 1,
          pre: "e5s2l6",
          hint: "Which one is very polite?",
          fbOk: "Right.",
          fbBad: "Can I is friendly. Which question is very polite?",
          fbText: "<b>May I come in, please?</b> is very polite. <i>Can I…?</i> is fine with friends. <i>I come in, yes?</i> isn’t a correct question."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["May I open the window?", "Could I borrow your ruler?", "Can I go to the library?", "Could you repeat that, please?"],
          right: ["Yes, of course. It’s very hot in here.", "Sorry, I haven’t got one.", "Yes, you can. It’s open until five.", "Of course. Page 34."],
          hint: "Which answer is about a hot room? Which one gives a page?",
          fbOk: "Well done!",
          fbBad: "Read the answers again. Which thing are they about?",
          fbText: "The window → it’s <b>hot</b>. A ruler → <b>I haven’t got one</b>. The library → <b>it’s open until five</b>. Repeat → <b>Page 34</b>."
        },
        {
          type: "info",
          title: "be allowed to",
          body: `<ul><li>We <b>are allowed to</b> use the computers. → It’s OK.</li><li>We <b>aren’t allowed to</b> eat in the library. → It’s a rule. Don’t do it!</li><li><b>Are</b> we <b>allowed to</b> eat there? – Yes, you <b>are</b>. / No, you <b>aren’t</b>.</li></ul><p>am / is / are + <b>allowed to</b> + verb</p><p>al<u>lowed</u></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with be allowed to.",
          body: `<p>A notice in the school library in Kyiv:</p><p><b>Yes:</b> read and borrow books, use the computers.<br><b>No:</b> food and drink, phone calls.</p>`,
          text: "Pupils {*are|is|be} allowed to borrow books. They are allowed {*to use|use|using} the computers. They {*aren’t|are|isn’t} allowed to eat in the library. Are we allowed to make phone calls? – No, we {*aren’t|don’t|isn’t}.",
          hint: "Pupils, they, we → are. After allowed: to + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: are + allowed to + verb.",
          fbText: "Pupils <b>are</b> allowed to borrow books and allowed <b>to use</b> the computers. Food is a no: they <b>aren’t</b> allowed to eat. Phone calls: no, we <b>aren’t</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: be allowed to.",
          body: `<p>A notice in the gym: “No outdoor shoes!” Bohdan asks Ms Lysenko about it.</p>`,
          before: "Are we",
          after: "to wear our outdoor shoes in the gym?",
          answer: ["allowed", "permitted"],
          hint: "Are we … to + verb?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: Are we … to…?",
          fbText: "<b>Are we allowed to</b> wear our outdoor shoes in the gym? – No, you aren’t."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zoriana asks Ms Lysenko a question about the library.</p>`,
          tiles: ["Are", "we", "allowed", "to", "use", "the computers"],
          answer: "Are we allowed to use the computers?",
          extra: ["allow"],
          keepCase: true,
          hint: "Start with Are we. Then allowed to + verb.",
          fbOk: "Good eye!",
          fbBad: "After are: allowed, with -ed.",
          fbText: "<b>Are we allowed to use the computers?</b> Are + we + <b>allowed to</b> + verb."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s message is wrong.</p>`,
          text: "At our school, we aren’t [allow] to use our phones in lessons. But we can use them at lunchtime.",
          hint: "be + … to + verb.",
          fbOk: "Right.",
          fbBad: "Look at the rule: aren’t allowed to.",
          fbText: "We aren’t <b>allowed</b> to use our phones: be + <b>allowed</b> to. <i>We can use them</i> is correct."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma chats with Freya about her boarding school.</p>`,
          text: "Emma: {*Are|Do|Is} you allowed to go into town at the weekend? Freya: Yes, we {*are|do|can’t}, but only with a teacher. And we aren’t allowed {*to have|have|having} our phones after 9 pm. Emma: {*May|Am|Does} I visit you at your school one day? Freya: Yes, of course!",
          hint: "Are you allowed…? – Yes, we are. Which question asks for permission?",
          fbOk: "Well done!",
          fbBad: "Check: Are + allowed to; the short answer; a very polite question.",
          fbText: "<b>Are</b> you allowed…? – Yes, we <b>are</b>. Aren’t allowed <b>to have</b>. <b>May</b> I visit you? – Yes, of course!"
        }
      ],
      outro: {
        text: "Ask for permission with Can I…?, Could I…? or May I…?. Talk about school rules with be allowed to.",
        learned: [
          "Ask for permission politely: May I…? Could I…?",
          "Give or refuse permission: Yes, you can. Sorry, you can’t.",
          "Talk about rules with be allowed to: We aren’t allowed to eat here."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s6l5",
      title: "You mustn’t or you don’t have to? School rules",
      short: "Mustn’t, don’t have to",
      icon: "shield",
      status: "verified",
      why: "Some things are rules, and some things are your choice. Learn to say which is which.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Two schools, two lists",
          body: `<p class="lead">Freya and Andrii compare the rules at their schools.</p><p><b>Freya:</b> At my boarding school, we have to wear a uniform. We mustn’t leave the school without a teacher. But we don’t have to make our own meals.<br><b>Andrii:</b> At my school in Kyiv, we don’t have to wear a uniform. We mustn’t be late. We don’t have to stay for lunch: some pupils go home.</p><p>Mustn’t and don’t have to: are they the same?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii: “We don’t have to stay for lunch.”</p><p>What does it mean?</p>`,
          opts: [
            "Pupils aren’t allowed to stay for lunch.",
            "Pupils can stay or go home: it’s their choice.",
            "Pupils must stay for lunch."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Don’t have to</b> means it isn’t necessary. Pupils can stay or go home: it’s their choice."
        },
        {
          type: "info",
          title: "Rules and choices",
          body: `<ul><li><b>must</b> / <b>have to</b> → It’s a rule. Do it!</li><li><b>mustn’t</b> = <b>aren’t allowed to</b> → It’s a rule. Don’t do it!</li><li><b>don’t have to</b> → It isn’t necessary. It’s your choice.</li></ul><p>You <b>mustn’t</b> run in the corridor.<br>You <b>don’t have to</b> come to the club.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Rules at Freya’s boarding school:</p><p>Phones after 9 pm: no! (a rule)<br>Sports clubs at the weekend: your choice.<br>Lights off at 10 pm: a rule.<br>Uniform at the weekend: not necessary.</p>`,
          text: "We {*mustn’t|don’t have to} use our phones after 9 pm. We {*don’t have to|mustn’t} go to the sports clubs at the weekend. We {*have to|don’t have to} turn off the lights at 10 pm. At the weekend, we {*don’t have to|mustn’t} wear our uniform.",
          hint: "A rule → mustn’t or have to. Your choice → don’t have to.",
          fbOk: "Exactly.",
          fbBad: "Is it a rule or a choice?",
          fbText: "Phones: a rule, so we <b>mustn’t</b>. Clubs: a choice, so we <b>don’t have to</b>. Lights: a rule, so we <b>have to</b>. Uniform at the weekend: not necessary, so we <b>don’t have to</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>At Andrii’s school, lunch in the canteen isn’t necessary. Some pupils go home for lunch.</p><p>Which sentence is true?</p>`,
          opts: [
            "Pupils mustn’t eat in the canteen.",
            "Pupils aren’t allowed to go home for lunch.",
            "Pupils don’t have to eat in the canteen."
          ],
          correct: 2,
          hint: "Is it a rule or a choice?",
          fbOk: "Right.",
          fbBad: "Some pupils go home, and some eat in the canteen.",
          fbText: "It isn’t necessary: pupils <b>don’t have to</b> eat in the canteen. <i>Mustn’t</i> would mean they can’t eat there."
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Rules at Andrii’s school: No running in the corridors. No phones in lessons. No food in the library. There is no uniform. Clubs are your choice.</p>`,
          bins: ["You mustn’t…", "You don’t have to…"],
          items: [
            ["run in the corridors", 0],
            ["wear a uniform", 1],
            ["use your phone in lessons", 0],
            ["go to the chess club", 1],
            ["eat in the library", 0],
            ["join a club", 1]
          ],
          hint: "No… → it’s a rule. Your choice → ?",
          fbOk: "Well done!",
          fbBad: "Which ones are on the list with No?",
          fbText: "Rules: you <b>mustn’t</b> run, use your phone in lessons or eat in the library. Your choice: you <b>don’t have to</b> wear a uniform, go to the chess club or join a club."
        },
        {
          type: "info",
          title: "Questions and the past",
          body: `<ul><li><b>Do</b> you <b>have to</b> wear a uniform? – Yes, we <b>do</b>. / No, we <b>don’t</b>.</li><li><b>Does</b> Freya <b>have to</b> wear one? – Yes, she <b>does</b>.</li><li>The past: <b>had to</b>. When I was eleven, I <b>had to</b> wear a red jumper.</li></ul><p><i>Must</i> has no past form. Use <b>had to</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma asks Andrii about uniforms.</p>`,
          text: "Emma: {*Do|Are|Must} you have to wear a uniform, Andrii? Andrii: No, we {*don’t|aren’t|mustn’t}. Does Freya have to wear one? Emma: Yes, she {*does|has|is}. When she was eleven, at her old school, she {*had to|has to|must} wear a red jumper.",
          hint: "Questions: Do… have to? The past: had to.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Do you have to…? – No, we don’t. Past → had to.",
          fbText: "<b>Do</b> you have to…? – No, we <b>don’t</b>. Does Freya…? – Yes, she <b>does</b>. When she was eleven: the past, so <b>had to</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: don’t have to.",
          body: `<p>At Andrii’s school, there’s no uniform. It isn’t a rule, and Andrii wears jeans.</p>`,
          before: "Andrii doesn’t",
          after: "to wear a uniform.",
          answer: ["have", "need"],
          hint: "It isn’t necessary: doesn’t … to.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: don’t have to → it isn’t necessary.",
          fbText: "It isn’t necessary: Andrii doesn’t <b>have</b> to wear a uniform. (Doesn’t <b>need</b> to is correct too.)"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One phrase in the school notice is wrong.</p>`,
          text: "Running is dangerous. It’s a rule: pupils [don’t have to] run [!in the corridors].",
          hint: "Is it a rule or a choice?",
          fbOk: "Good eye!",
          fbBad: "It’s a rule. Don’t do it!",
          fbText: "It’s a rule, so pupils <b>mustn’t</b> run in the corridors. <i>Don’t have to</i> means it’s your choice."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her school in Zelena Dolyna.</p><p>No uniform. No phones in lessons (a rule). Be on time (a rule). After-school clubs: your choice.</p>`,
          text: "At my school, we {*don’t have to|mustn’t} wear a uniform. We {*mustn’t|don’t have to} use our phones in lessons. We {*have to|don’t have to} be on time. We {*don’t have to|mustn’t} go to the after-school clubs, but I love the English club!",
          hint: "No uniform → not necessary. Phones → a rule.",
          fbOk: "Well done!",
          fbBad: "Check each line: a rule or a choice?",
          fbText: "No uniform: we <b>don’t have to</b> wear one. Phones: we <b>mustn’t</b>. On time: we <b>have to</b> be. Clubs: we <b>don’t have to</b> go."
        }
      ],
      outro: {
        text: "Mustn’t → a rule: don’t do it. Don’t have to → it isn’t necessary: it’s your choice.",
        learned: [
          "Say what you mustn’t do and what you don’t have to do.",
          "Ask about rules: Do you have to…? – No, we don’t.",
          "Talk about past rules with had to."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s6l6",
      title: "Schools in Ukraine and England: what’s different?",
      short: "Two countries",
      icon: "scale",
      status: "verified",
      why: "Read a project about schools in two countries. Say what is the same and what is different.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A project for the club",
          body: `<p class="lead">Oksana and Emma make a project for the penfriend club. It’s called “Schools in Ukraine and England: what’s different?”</p><p>They write about types of schools, school life and what they think.</p><p>What is the same in your country and in England? What is different?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Schools in Ukraine and England, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>In both countries, children go to primary school first. In Ukraine, children start school at six, and primary school is four years long. In England, primary school is for children aged five to eleven. Then pupils in England go to secondary school. At about sixteen, they take their GCSE exams. Some pupils stay at school for the sixth form. In Ukraine, pupils go to a gymnasium from Year 5 to Year 9. After that, they can go to a lyceum.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "In Ukraine, primary school is four years long.",
            "In England, primary school starts at six.",
            "In Ukraine, pupils take GCSE exams."
          ],
          correct: 0,
          hint: "Find four years in the text.",
          fbOk: "Yes!",
          fbBad: "Read the second sentence again.",
          fbText: "In Ukraine, primary school is <b>four years long</b>. In England, it starts at five. GCSEs are exams in England."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Schools in Ukraine and England, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>School life is different too. Emma has to wear a uniform: a white shirt, a grey jumper and a blue tie. Oksana doesn’t have to wear one. She can wear her own clothes, and on Vyshyvanka Day she wears her vyshyvanka. In both schools, pupils aren’t allowed to use their phones in lessons. Emma has lunch in the canteen every day. Oksana’s school hasn’t got a canteen, so pupils have lunch in the school hall.</i></p><p>What is the same at both schools?</p>`,
          opts: [
            "Pupils aren’t allowed to use their phones in lessons.",
            "Pupils have to wear a uniform.",
            "Pupils have lunch in a canteen.",
            "Pupils have lunch at school."
          ],
          correct: [0, 3],
          hint: "Find in both schools. Where do pupils have lunch?",
          fbOk: "Well done!",
          fbBad: "Read about phones and lunch again.",
          fbText: "In both schools, pupils <b>aren’t allowed to use their phones</b> in lessons, and they <b>have lunch at school</b>: Emma in the canteen, Oksana in the school hall. Only Emma has to wear a uniform."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Schools in Ukraine and England, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>What do we think? Emma: “I like my uniform. In the morning, I don’t have to choose my clothes! But I’d like to wear my own jumper sometimes.” Oksana: “In Ukraine, the school year starts on 1 September with the First Bell. I love that day. I’d like to visit Emma’s school one day. It might be fun to wear a tie for a week!”</i></p><p>What does Emma like about her uniform?</p>`,
          opts: [
            "She can wear her own jumper.",
            "She doesn’t have to choose her clothes in the morning.",
            "It’s very colourful."
          ],
          correct: 1,
          hint: "Find I like my uniform in the text.",
          fbOk: "Right.",
          fbBad: "Read what Emma says after I like my uniform.",
          fbText: "Emma likes her uniform because she <b>doesn’t have to choose her clothes</b> in the morning. She’d like to wear her own jumper sometimes."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole project “Schools in Ukraine and England: what’s different?”</p><p>What is it about?</p>`,
          opts: [
            "why school uniforms are bad",
            "how to become a teacher in England",
            "what is the same and what is different at schools in two countries"
          ],
          correct: 2,
          hint: "Look at the title of the project.",
          fbOk: "Exactly.",
          fbBad: "The title asks: what’s different?",
          fbText: "The project compares schools in <b>two countries</b>: types of schools, uniforms, phones, lunch and the school year."
        },
        {
          type: "info",
          title: "Comparing two things",
          body: `<ul><li><b>both</b>: In <b>both</b> countries, children go to primary school.</li><li><b>but</b>: Emma has to wear a uniform, <b>but</b> Oksana doesn’t.</li><li><b>the same as</b>: My timetable is <b>the same as</b> yours.</li><li><b>different from</b>: My school is <b>different from</b> Emma’s school.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Fill in the gaps.",
          text: "In {*both|same|the both} countries, children start with primary school. Emma has to wear a uniform, {*but|because|so} Oksana doesn’t. Andrii’s school year starts on 1 September, the {*same|both|different} as Oksana’s.",
          hint: "Two countries → both. Two different things → but.",
          fbOk: "Well done!",
          fbBad: "Look at the list: both, but, the same as.",
          fbText: "In <b>both</b> countries. Emma has to, <b>but</b> Oksana doesn’t. The <b>same</b> as Oksana’s: both start on 1 September."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write about uniforms. Start with Emma.</p>`,
          tiles: ["Emma", "has to", "wear a uniform,", "but", "Oksana", "doesn’t"],
          answer: "Emma has to wear a uniform, but Oksana doesn’t.",
          extra: ["don’t"],
          hint: "Emma has to… , but …",
          fbOk: "Good eye!",
          fbBad: "Oksana is she: doesn’t.",
          fbText: "<b>Emma has to wear a uniform, but Oksana doesn’t.</b> With Oksana (she): <b>doesn’t</b>."
        },
        {
          type: "word",
          sk: "read",
          title: "Write the missing word.",
          body: `<p>Look at part 1 of the project again: GCSE exams.</p>`,
          before: "In England, pupils take their GCSE exams at about",
          after: ".",
          answer: ["sixteen", "16"],
          hint: "Find GCSE in part 1.",
          fbOk: "Right.",
          fbBad: "At about … they take their GCSE exams.",
          fbText: "At about <b>sixteen</b>, pupils in England take their GCSE exams."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii adds a part about his school in Kyiv.</p>`,
          text: "My school in Kyiv is {*different from|the same as} Emma’s school: we {*don’t have to|mustn’t} wear a uniform. In {*both|same} our schools, we {*aren’t|don’t} allowed to use our phones in lessons. Our school has a canteen, {*but|because} some pupils go home for lunch.",
          hint: "There is no uniform in Andrii’s school. Phones → a rule in both schools.",
          fbOk: "Well done!",
          fbBad: "Check: different or the same? A rule or a choice?",
          fbText: "Andrii’s school is <b>different from</b> Emma’s: they <b>don’t have to</b> wear a uniform. In <b>both</b> schools, pupils <b>aren’t</b> allowed to use phones. There is a canteen, <b>but</b> some pupils go home."
        }
      ],
      outro: {
        text: "Both, but, the same as, different from: now you can compare schools in two countries.",
        learned: [
          "Read a project about schools in Ukraine and England.",
          "Compare two things with both, but and the same as.",
          "Say what you like about your school and why."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s6l7",
      title: "A guide for new pupils",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the guide?",
          body: `<p class="lead">The penfriend club is writing a guide for new pupils: “Schools in Ukraine and abroad”.</p><p>Ms Kravets needs your help. Check the sentences. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "In England, primary school is for children aged {*5|6|16} to 11. At a {*boarding school|gymnasium|primary school}, pupils live and study. In Ukraine, a {*gymnasium|lyceum|sixth form} is for Years 5 to 9.",
          pre: "e8s6l1",
          hint: "Ages 5 to 11; live and study; Years 5 to 9.",
          fbOk: "Yes!",
          fbBad: "Look at the types of schools again.",
          fbText: "Primary school in England: ages <b>5</b> to 11. A <b>boarding school</b>: pupils live and study. A <b>gymnasium</b>: Years 5 to 9."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Match the halves.",
          left: ["In the canteen,", "In the science lab,", "In the library,", "In the staffroom,"],
          right: ["pupils have lunch.", "pupils do experiments.", "pupils borrow books.", "teachers have a break."],
          pre: "e8s6l2",
          fbOk: "Right.",
          fbBad: "Which room is only for teachers?",
          fbText: "Lunch: the <b>canteen</b>. Experiments: the <b>science lab</b>. Books: the <b>library</b>. Teachers: the <b>staffroom</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Ms Lysenko is in Lviv this week. Andrii is sure she isn’t at school today.</p><p>What does he say?</p>`,
          opts: [
            "She mustn’t be at school today.",
            "She might be at school today.",
            "She can’t be at school today."
          ],
          correct: 2,
          pre: "e8s6l3",
          hint: "Is Andrii sure? Is it true or not true?",
          fbOk: "Well done!",
          fbBad: "Sure it isn’t true → ?",
          fbText: "Andrii is sure it isn’t true: she <b>can’t be</b> at school. <i>Mustn’t</i> is for rules."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Ask for permission politely. Then ask about a rule.</p>`,
          text: "{*May|Am|Does} I open the window, please? – Yes, of course. Are we allowed {*to eat|eat|eating} in the library? – No, you {*aren’t|don’t|isn’t}.",
          pre: "e8s6l4",
          fbOk: "Exactly.",
          fbBad: "Ask for permission politely. Then: allowed to + verb.",
          fbText: "<b>May</b> I open the window? Are we allowed <b>to eat</b>…? – No, you <b>aren’t</b>."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>A new pupil asks about the school rules.</p>`,
          tiles: ["Are", "we", "allowed", "to", "leave", "early"],
          answer: "Are we allowed to leave early?",
          extra: ["allow"],
          keepCase: true,
          pre: "e8s6l4",
          fbOk: "Good eye!",
          fbBad: "Are we + allowed to + verb?",
          fbText: "<b>Are we allowed to leave early?</b> Are + we + <b>allowed to</b> + verb."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Find the mistake.",
          body: `<p>One phrase in the guide is wrong.</p>`,
          text: "There’s no uniform at Andrii’s school, so pupils [mustn’t] wear [!a uniform]. They can wear their own clothes.",
          pre: "e8s6l5",
          hint: "No uniform: is it a rule or the pupils’ choice?",
          fbOk: "Right.",
          fbBad: "Is it a rule or their choice?",
          fbText: "It’s their choice: pupils <b>don’t have to</b> wear a uniform. <i>Mustn’t</i> would mean a uniform is not allowed."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>In both schools, pupils aren’t allowed to use their phones in lessons. Emma has to wear a uniform, but Oksana doesn’t.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Only Emma has to wear a uniform.",
            "Both girls have to wear a uniform.",
            "Pupils can use their phones in lessons."
          ],
          correct: 0,
          pre: "e8s6l6",
          fbOk: "Well done!",
          fbBad: "Read the second sentence again: but.",
          fbText: "Emma has to wear a uniform, <b>but</b> Oksana doesn’t: <b>only Emma</b>. Phones aren’t allowed in lessons at both schools."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about schools in Ukraine and England, school rooms and rules, and make good guesses.",
        learned: [
          "Name types of schools and school rooms.",
          "Make guesses with must, might and can’t.",
          "Ask for permission and talk about rules: be allowed to, mustn’t, don’t have to.",
          "Compare schools in two countries."
        ]
      }
    }
  ]
});
