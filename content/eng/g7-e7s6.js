/* Слід · Англійська мова, 7 клас — «School life after lessons» (e7s6)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 7 кл.:
   тема «Шкільне життя» — позакласні заходи; шкільні свята і традиції (с. 32, розд. 5.2.1); функції — пропонувати,
   приймати, відхиляти; обмінюватися думками (с. 32); граматика B1 (с. 34–35, розд. 5.4.1): Conditional — possible future
   (First Conditional: if + Present Simple, will); unless; Future — Present Simple after as soon as / when; Shall — plans,
   seeking advice (Shall I…? / What shall we do?). Повторення: Shall we…? (e5s6l5), if + Present Simple з імперативом (e6s8l3),
   will (e5s5l5), be going to (e5s9l3), Present Continuous for arrangements (e6s5l3), шкільні події (e4s8l4):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md (П7); рядки plan — content/eng/plan.js (e7s6).
   Не повторює e4s8l4 (concert, sports day, fair — що це) і e6s6 (уроки, правила): тут клуби після уроків, свята, планування події.
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на три роки старші, ніж у 4 кл.: Andrii (Kyiv) — шаховий клуб,
   друг Bohdan, сестра Sofiia, дідусь і бабуся в Chernihiv; Mariia (Kharkiv) малює; Oksana (13) — Zelena Dolyna, подруга Halyna,
   дідусь Mykola, брат Dmytro (9); Emma (13, Англія) — плаває, брат Tom (11) — swimming club (e7s5). Нова: Ms Marchenko — класна
   керівниця Оксани (Zelena Dolyna).
   Факти про Перший і Останній дзвоник, sports day, school fair — по два джерела, URL — tasks/…/write-eng-g7-e7s6.md, «Нотатки агента».
   Звуку немає (D-055 п. 4); діалоги — репліками в body + gaps / choice / match (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e7s6, 2026-11-25). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s6",
  grade: 7,
  weeks: [26, 30],
  title: "School life after lessons",
  why: "To talk about after-school clubs, school events and traditions. And to make plans for a school event.",
  requires: ["e6s8l3", "e5s5l5", "e5s9l3", "e6s5l3", "e4s8l4", "e6s6l4", "e5s6l5"],
  meta: { author: "writer-e7s6", created: "2026-11-25", factcheck: "verifier-e7s6 (reports/verify/write-eng-g7-e7s6.md)", teacher: null },
  badges: [
    { id: "e7s6boss", name: "Event planner", icon: "trophy", desc: "Finish the final lesson “School life after lessons”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s6l1",
      title: "After-school clubs",
      short: "Clubs",
      icon: "users",
      status: "verified",
      why: "Most schools have clubs after lessons. Find out what pupils do there and say when a club meets.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What do you do after lessons?",
          body: `<p class="lead">Andrii and Bohdan read a notice at their school in Kyiv.</p><p><b>After-school clubs</b></p><ul><li>Chess club – Mondays and Wednesdays, 3.30–5 pm, Room 12</li><li>Drama club – Tuesdays, 3.30–5.30 pm, the school hall</li><li>Art club – Thursdays, 3.30–5 pm, Room 7</li><li>Science club – Fridays, 3.30–4.30 pm, Room 21</li></ul><p>Join a club! Talk to your class teacher.</p><p>Which club would you like to join?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is an <b>after-school club</b>?</p>`,
          opts: [
            "a club for teachers before lessons",
            "a club for pupils after lessons",
            "a lesson at the weekend"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>after-school club</b> meets at school, after lessons. The next screen shows more."
        },
        {
          type: "info",
          title: "Clubs after lessons",
          body: `<ul><li>an <b>after-school club</b> – pupils meet after lessons and do things they like</li><li>a <b>member</b> – a person in a club</li><li><b>join</b> a club – become a member</li><li>The club <b>meets</b> on Mondays.</li></ul><p>In a <b>drama club</b>, pupils act in plays. In an <b>art club</b>, they draw and paint. In a <b>science club</b>, they do experiments.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In the drama club,", "In the art club,", "In the science club,", "In the chess club,"],
          right: ["pupils act in plays.", "pupils draw and paint.", "pupils do experiments.", "pupils play chess."],
          hint: "Look at the list of clubs again. What do pupils do in each club?",
          fbOk: "Well done!",
          fbBad: "Check the clubs again: plays, pictures, experiments or chess?",
          fbText: "Drama – <b>plays</b>. Art – <b>drawing and painting</b>. Science – <b>experiments</b>. Chess club – <b>chess</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<ul><li>Chess club – Mondays and Wednesdays</li><li>Drama club – Tuesdays</li><li>Art club – Thursdays</li><li>Science club – Fridays</li></ul><p>Bohdan is free only on Tuesdays after lessons. Which club can he join?</p>`,
          opts: [
            "the chess club",
            "the art club",
            "the drama club"
          ],
          correct: 2,
          hint: "Find Tuesday in the notice.",
          fbOk: "Right.",
          fbBad: "Which club meets on Tuesdays?",
          fbText: "The <b>drama club</b> meets on Tuesdays. The chess club meets on Mondays and Wednesdays, and the art club on Thursdays."
        },
        {
          type: "info",
          title: "Every week or this week?",
          body: `<ul><li>The chess club <b>meets</b> on Mondays. → every week, a timetable: the Present Simple</li><li>I<b>’m going</b> to the drama club on Tuesday. → my plan for this week: the Present Continuous</li></ul><p>Remember: <i>We’re leaving on Friday.</i> – a plan with a day or a time.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "The art club {*meets|is meeting} on Thursdays. Andrii {*plays|is playing} chess every Monday. This Tuesday Bohdan {*is going|goes} to the drama club for the first time.",
          hint: "Every week or a plan for this week?",
          fbOk: "Exactly.",
          fbBad: "Look for the time words: on Thursdays, every Monday, this Tuesday.",
          fbText: "Every week – the Present Simple: the art club <b>meets</b>, Andrii <b>plays</b>. A plan for this week – the Present Continuous: Bohdan <b>is going</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia from Kharkiv loves drawing. She wants to become a member of the art club at her school.</p>`,
          before: "Mariia wants to",
          after: "the art club.",
          answer: ["join", "attend"],
          hint: "Become a member of a club = … a club.",
          fbOk: "Yes!",
          fbBad: "Look at the screen with new words. Become a member = …",
          fbText: "To become a member of a club = to <b>join</b> a club. Mariia wants to <b>join</b> the art club."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! I’m a member of two after-school clubs. On Mondays I go to the swimming club with Tom. On Wednesdays I go to the photography club. And this Friday I’m going to the drama club for the first time! Are you still in the chess club? – Emma</i></p><p>What is Emma doing this Friday?</p>`,
          opts: [
            "She’s going to the drama club.",
            "She’s going to the photography club.",
            "She’s swimming with Tom."
          ],
          correct: 0,
          hint: "Find “this Friday” in the message.",
          fbOk: "Good eye!",
          fbBad: "Read the sentence with “this Friday” again.",
          fbText: "Emma writes: “This Friday <b>I’m going to the drama club</b> for the first time!” She swims on Mondays and goes to the photography club on Wednesdays."
        }
      ],
      outro: {
        text: "Clubs meet after lessons. Say when a club meets with the Present Simple and talk about your plans with the Present Continuous.",
        learned: [
          "Name after-school clubs and say what pupils do there.",
          "Say when a club meets: The chess club meets on Mondays.",
          "Talk about your plans: I’m going to the drama club on Tuesday."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s6l2",
      title: "First bell, last bell: school traditions",
      short: "Traditions",
      icon: "star",
      status: "verified",
      why: "Every school has special days. Read about school traditions in Ukraine and in the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Is the first day special?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><b>Emma:</b> Is the first day of school special in Ukraine?<br><b>Oksana:</b> Yes, it is! We’ve got the First Bell. And at the end of the year we’ve got the Last Bell.<br><b>Emma:</b> What are they?</p><p>What special school days do you know?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In Ukraine, what happens on 1 September?</p>`,
          opts: [
            "The summer holidays start.",
            "Pupils get their marks for the year.",
            "The school year starts."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In Ukraine, <b>the school year starts</b> on 1 September. The next screen shows more."
        },
        {
          type: "info",
          title: "School traditions in Ukraine",
          body: `<p>A <b>tra<u>di</u>tion</b> is something people do every year, for a long time.</p><ul><li>The school year starts on 1 Sep<u>tem</u>ber. Schools have a special day: <b>the First Bell</b>.</li><li>At the end of May, schools have <b>the Last Bell</b>. It’s a special day for <b>school leavers</b> – pupils who are finishing school.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Our school traditions, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>On 1 September we have the First Bell. All the pupils and teachers meet outside the school. In our school, lots of children bring flowers for their teachers. The new pupils in Year 1 are a bit nervous, but happy. This year my brother Dmytro took flowers for his teacher. Then the first bell rings, and we go to our first lessons. – Oksana</i></p><p>What do lots of children in Oksana’s school bring on 1 September?</p>`,
          opts: [
            "a little bell",
            "flowers for their teachers",
            "presents for Year 1"
          ],
          correct: 1,
          hint: "Find the word “bring” in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence with “bring” again.",
          fbText: "Oksana writes: “Lots of children <b>bring flowers for their teachers</b>.” The bell rings at the end, before the first lessons."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Reading: Our school traditions, part 2 of 2",
          title: "Complete the sentences.",
          body: `<p><i>At the end of May we have the Last Bell. It’s a big day for the school leavers in Year 11. Then a little girl from Year 1 rings a bell. Often a school leaver carries her on his shoulders! After the Last Bell, the school leavers have their exams. – Oksana</i></p>`,
          text: "The Last Bell is at the end of {*May|September}. It’s a big day for the {*school leavers|new pupils}. A little girl from {*Year 1|Year 11} rings the bell.",
          hint: "Find “the end of”, “a big day” and “rings” in the text.",
          fbOk: "Well done!",
          fbBad: "Read the text again. Who rings the bell?",
          fbText: "The Last Bell is at the end of <b>May</b>. It’s a big day for the <b>school leavers</b> in Year 11. A little girl from <b>Year 1</b> rings the bell."
        },
        {
          type: "info",
          title: "School traditions in the UK",
          body: `<p>Emma writes about her school in England.</p><ul><li><b>Sports day</b> – pupils run races against each other. In an <b>egg-and-spoon race</b>, you run with an egg on a spoon!</li><li>A <b>school fair</b> – there are <b>stalls</b> (tables where people sell things) with cakes, games and old toys. The money is for the school.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["On 1 September, schools in Ukraine have", "At the end of May, schools in Ukraine have", "On sports day, pupils", "At a school fair, people"],
          right: ["the First Bell.", "the Last Bell.", "run races.", "buy cakes at the stalls."],
          hint: "Look at the two screens about traditions again.",
          fbOk: "Exactly.",
          fbBad: "When is the First Bell? When is the Last Bell?",
          fbText: "1 September – <b>the First Bell</b>. The end of May – <b>the Last Bell</b>. Sports day – pupils <b>run races</b>. A school fair – people <b>buy cakes</b> at the stalls."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["tra|+di|tion", "Sep|+tem|ber", "+teach|er"],
          hint: "Look at the underlined parts on the screen about traditions in Ukraine.",
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again: tradition, September.",
          fbText: "tra<u>di</u>tion, Sep<u>tem</u>ber, <u>teach</u>er. In tradition and September, the strong part is the second one."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Thanks, Oksana! We don’t have a First Bell or a Last Bell. But we have a sports day every year. Last year I won the egg-and-spoon race! Tom didn’t win, but he loved it. Our school fair is on Saturday. I’m making cakes for our class stall. – Emma</i></p><p>What is Emma doing for the school fair?</p>`,
          opts: [
            "She’s running an egg-and-spoon race.",
            "She’s ringing a bell.",
            "She’s making cakes for the class stall."
          ],
          correct: 2,
          hint: "Find “school fair” in the message.",
          fbOk: "Well done!",
          fbBad: "Read the sentences about the school fair again.",
          fbText: "Emma writes: “Our school fair is on Saturday. <b>I’m making cakes</b> for our class stall.” She won the egg-and-spoon race last year, on sports day."
        }
      ],
      outro: {
        text: "In Ukraine, schools have the First Bell on 1 September and the Last Bell at the end of May. Many schools in the UK have a sports day and a school fair.",
        learned: [
          "Read about school traditions in Ukraine and the UK.",
          "Say what happens at the First Bell and the Last Bell.",
          "Name school events: sports day, a school fair, a stall."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s6l3",
      title: "If we win, we’ll play in the final: the First Conditional",
      short: "If we win…",
      icon: "target",
      status: "verified",
      why: "Talk about things that can happen in the future and what will happen then.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What will happen if they win?",
          body: `<p class="lead">Andrii’s chess club is in a tournament for schools in Kyiv.</p><p><b>Andrii:</b> We’ve got a big match on Saturday!<br><b>Bohdan:</b> Good luck! What happens if you win?<br><b>Andrii:</b> If we win, we’ll play in the final in May.<br><b>Bohdan:</b> And if you lose?<br><b>Andrii:</b> If we lose, we won’t play in the final. But we’ll try again next year!</p><p>How do we talk about a possible future?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "If we will win, we’ll play in the final.",
            "If we win, we’ll play in the final.",
            "If we win, we played in the final."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>If we win, we’ll play</b> in the final. The next screen shows the rule."
        },
        {
          type: "info",
          title: "The First Conditional",
          body: `<p><b>If</b> + Present Simple, … <b>will</b> + verb</p><ul><li>If we <b>win</b>, we<b>’ll play</b> in the final.</li><li>If we <b>lose</b>, we <b>won’t play</b> in the final.</li></ul><p>It’s a possible future: maybe we’ll win, maybe not.</p><p>After <i>if</i>, don’t use <i>will</i>. Not: <s>If we will win</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "If Andrii {*wins|will win} on Saturday, he {*will play|played} in the final. If it {*rains|will rain} tomorrow, we {*will stay|stayed} at home.",
          hint: "After if: the Present Simple. In the other part: will + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: if + Present Simple, will + verb.",
          fbText: "If Andrii <b>wins</b>, he <b>will play</b>. If it <b>rains</b>, we <b>will stay</b>. After <i>if</i> – the Present Simple, no <i>will</i>."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["If we win the match,", "If you help me with maths,", "If it rains on Saturday,", "If Sofiia misses the bus,"],
          right: ["we’ll play in the final.", "I’ll help you too.", "we’ll need umbrellas.", "she’ll be late for school."],
          hint: "Read each half. Which end makes sense?",
          fbOk: "Well done!",
          fbBad: "Who misses the bus? What happens then?",
          fbText: "Win the match – <b>play in the final</b>. Help me – <b>I’ll help you too</b>. Rain – <b>umbrellas</b>. Miss the bus – <b>be late for school</b>."
        },
        {
          type: "info",
          title: "won’t, questions and the comma",
          body: `<ul><li><b>won’t</b> = will not: If we lose, we <b>won’t</b> play in the final.</li><li>A question: What <b>will</b> you do if you win? – If we win, we’ll have a party!</li></ul><p>The <i>if</i> part can come second. Then we don’t use a comma: We’ll play in the final <b>if</b> we win.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Bohdan’s message is wrong.</p>`,
          text: "Good luck on Saturday! If you [will win], I’ll buy you an ice cream. [!I’ll come] to the final too!",
          hint: "Find the part with if. What comes after if?",
          fbOk: "Good eye!",
          fbBad: "After if: the Present Simple, no will.",
          fbText: "After <i>if</i> we don’t use <i>will</i>: If you <b>win</b>, I’ll buy you an ice cream. <i>I’ll come</i> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write Andrii’s answer to Bohdan. Start with <b>if</b>.</p>`,
          tiles: ["if we", "lose,", "we won’t", "play", "in the final"],
          extra: ["will lose,"],
          answer: "If we lose, we won’t play in the final.",
          hint: "Start with if. Where is the comma?",
          fbOk: "Yes!",
          fbBad: "After if: the Present Simple, no will.",
          fbText: "<b>If we lose, we won’t play in the final.</b> After <i>if</i> we say <i>lose</i>, not <i>will lose</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the verb <b>be</b> in the correct form.</p>`,
          before: "If it",
          after: "sunny tomorrow, we’ll play outside.",
          answer: "is",
          contractions: true,
          hint: "After if: the Present Simple. it → …",
          fbOk: "Well done!",
          fbBad: "After if, don’t use will. it … sunny?",
          fbText: "After <i>if</i>, use the Present Simple: If it <b>is</b> sunny tomorrow, we’ll play outside."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Taras in Lviv.</p>`,
          text: "Our chess club has a big match on Saturday. If we {*win|will win}, we {*will play|played} in the final in May. If we {*lose|will lose}, we {*won’t|don’t} be sad. We’ll try again next year!",
          hint: "Use the rule: if + Present Simple, will / won’t + verb.",
          fbOk: "Right.",
          fbBad: "Check: after if – no will. In the other part – will or won’t.",
          fbText: "If we <b>win</b>, we <b>will play</b>. If we <b>lose</b>, we <b>won’t</b> be sad."
        }
      ],
      outro: {
        text: "If + Present Simple, will + verb: If we win, we’ll play in the final. This is the First Conditional.",
        learned: [
          "Talk about a possible future: If we win, we’ll play in the final.",
          "Use the Present Simple after if, not will.",
          "Use won’t: If we lose, we won’t play."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s6l4",
      title: "Unless it rains… As soon as we finish…",
      short: "Unless, as soon as",
      icon: "bulb",
      status: "verified",
      why: "Say what will happen if something doesn’t happen. And say what you’ll do right after something.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Will it rain on sports day?",
          body: `<p class="lead">Emma sends Oksana a notice from her school in England.</p><p><b>Sports day – Friday, 1.30 pm, on the school field</b></p><p>We’ll have sports day on Friday unless it rains. If it rains, we’ll have it on Monday. Bring water and a hat. As soon as the races finish, there will be ice cream for everyone!</p><p>What do <i>unless</i> and <i>as soon as</i> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“We’ll have sports day on Friday <b>unless</b> it rains.” What does it mean?</p>`,
          opts: [
            "We’ll have it on Friday only if it rains.",
            "We won’t have it on Friday.",
            "We’ll have it on Friday if it doesn’t rain."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>unless</b> = <b>if … not</b>: we’ll have it on Friday <b>if it doesn’t rain</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "unless = if … not",
          body: `<ul><li>We’ll have sports day <b>unless</b> it <b>rains</b>.<br>= We’ll have sports day <b>if</b> it <b>doesn’t rain</b>.</li></ul><p>After <i>unless</i>, use the Present Simple, like after <i>if</i>. No <i>will</i>!</p><p><i>unless</i> already means <i>if … not</i>. Not: <s>unless it doesn’t rain</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "We’ll walk to the park unless it {*rains|doesn’t rain|will rain}. Tom will swim in the race unless he {*is|isn’t} ill.",
          hint: "unless = if … not. So after unless, don’t add not.",
          fbOk: "Exactly.",
          fbBad: "Say it with if … not: if it doesn’t rain = unless it …",
          fbText: "Unless it <b>rains</b> = if it doesn’t rain. Unless he <b>is</b> ill = if he isn’t ill."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>“You can’t go on the school trip <b>unless</b> you bring a letter from your parents.”</p><p>Which sentence means the same?</p>`,
          opts: [
            "If you bring a letter, you can’t go on the trip.",
            "If you don’t bring a letter, you can’t go on the trip.",
            "You can go on the trip, but don’t bring a letter."
          ],
          correct: 1,
          hint: "Change unless to if … not.",
          fbOk: "Right.",
          fbBad: "unless = if … not. Unless you bring = if you don’t bring.",
          fbText: "Unless you bring a letter = <b>if you don’t bring a letter</b>, you can’t go on the trip."
        },
        {
          type: "info",
          title: "as soon as, when",
          body: `<p>Talking about the future:</p><ul><li><b>As soon as</b> the races <b>finish</b>, there’ll be ice cream. (= right after the races)</li><li>I’ll text you <b>when</b> I <b>get</b> home.</li></ul><p>After <i>as soon as</i> and <i>when</i>, use the Present Simple, like after <i>if</i>. Not: <s>as soon as I will get home</s>.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma promises to send Oksana photos from sports day. Start with <b>I’ll</b>.</p>`,
          tiles: ["I’ll send", "you photos", "as soon as", "I get", "home"],
          extra: ["I will get"],
          answer: "I’ll send you photos as soon as I get home.",
          hint: "After as soon as: the Present Simple.",
          fbOk: "Well done!",
          fbBad: "After as soon as, don’t use will.",
          fbText: "<b>I’ll send you photos as soon as I get home.</b> After <i>as soon as</i> we say <i>I get</i>, not <i>I will get</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Emma talks to her mum on Friday morning.</p>`,
          text: "Mum: Text me as soon as sports day {*finishes|will finish}. Emma: OK. I’ll text you when I {*leave|will leave} school. But we’ll be late unless we {*go|don’t go} now!",
          hint: "After as soon as, when and unless: the Present Simple. And unless = if … not.",
          fbOk: "Yes!",
          fbBad: "Check the rule: no will after as soon as and when; no not after unless.",
          fbText: "As soon as sports day <b>finishes</b>. When I <b>leave</b> school. We’ll be late unless we <b>go</b> now (= if we don’t go now)."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Tom says: “I’ll run in the race if it doesn’t rain.”</p><p>Say it with one word instead of <i>if … not</i>.</p>`,
          before: "I’ll run in the race",
          after: "it rains.",
          answer: "unless",
          hint: "Which word means if … not?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: … = if … not.",
          fbText: "<b>unless</b> = if … not: I’ll run in the race <b>unless</b> it rains."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Oksana! Sports day is tomorrow. We’ll have it unless it rains, but the forecast says it’ll be sunny. Tom is going to run in the egg-and-spoon race. I’ll text you as soon as the races finish. Then we’ll have ice cream! – Emma</i></p><p>When will Emma text Oksana?</p>`,
          opts: [
            "before the races",
            "only if it rains",
            "as soon as the races finish"
          ],
          correct: 2,
          hint: "Find “I’ll text you” in the message.",
          fbOk: "Well done!",
          fbBad: "Read the sentence with “text” again.",
          fbText: "Emma writes: “I’ll text you <b>as soon as the races finish</b>.” After <i>as soon as</i> – the Present Simple: <i>finish</i>."
        }
      ],
      outro: {
        text: "unless = if … not. After if, unless, when and as soon as, use the Present Simple for the future.",
        learned: [
          "Use unless: We’ll have sports day unless it rains.",
          "Say what will happen right after something: as soon as, when.",
          "Use the Present Simple after unless, when and as soon as."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s6l5",
      title: "Shall we make a poster? Planning a school event",
      short: "Shall I…?",
      icon: "voice",
      status: "verified",
      why: "Make plans with your friends. Offer help, ask for ideas and say yes or no politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What shall we do?",
          body: `<p class="lead">Oksana’s class in Zelena Dolyna is planning a school festival for 29 May.</p><p><b>Ms Marchenko:</b> Our festival is on 29 May. What shall we do?<br><b>Oksana:</b> Shall we have a concert?<br><b>Halyna:</b> Good idea! Shall I make a poster?<br><b>Ms Marchenko:</b> Yes, please, Halyna. Thank you!</p><p>How do they ask for ideas, make suggestions and offer help?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Halyna says: “<b>Shall I</b> make a poster?” What does she mean?</p>`,
          opts: [
            "She wants to make a poster for the class.",
            "She asks Ms Marchenko to make a poster.",
            "She doesn’t want to make a poster."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Shall I…?</b> is an offer: Halyna <b>wants to make a poster</b> for the class. The next screen shows more."
        },
        {
          type: "info",
          title: "Shall I…? Shall we…? What shall we do?",
          body: `<ul><li><b>Shall I</b> make a poster? → an offer: I can do it for you.</li><li><b>Shall we</b> have a concert? → a suggestion: let’s do it together. (You know this one!)</li><li><b>What shall we</b> do? → asking for ideas or advice.</li></ul><p>Use <i>shall</i> with <i>I</i> and <i>we</i>. After it – a verb without <i>to</i>: Shall I <b>help</b>?</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Shall we {*have|to have|having} a cake stall? Shall I {*bring|to bring|brings} some chairs from the classroom? What shall we {*do|doing} if it rains?",
          hint: "After shall: a verb without to and without -s or -ing.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: Shall I help? – a verb without to.",
          fbText: "Shall we <b>have</b>… Shall I <b>bring</b>… What shall we <b>do</b>… After <i>shall</i> – a verb without <i>to</i>."
        },
        {
          type: "info",
          title: "Saying yes and no",
          body: `<p>To an offer (<i>Shall I…?</i>):</p><ul><li>Yes, please. Thank you!</li><li>No, thanks. I can do it.</li></ul><p>To a suggestion (<i>Shall we…?</i>):</p><ul><li>Good idea! / Great!</li><li>Sorry, I can’t. I’m busy on Saturday.</li><li>I’m not sure. Let’s have a quiz.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Shall I bring some chairs?", "Shall we have a concert?", "What shall we do if it rains?", "Shall I help you with the poster?"],
          right: ["Yes, please. We need ten chairs.", "Good idea! I can sing.", "We can have the festival in the school hall.", "No, thanks. I’ve almost finished it."],
          hint: "An offer, a suggestion or asking for ideas? Read the answers carefully.",
          fbOk: "Well done!",
          fbBad: "Which answer talks about chairs? Which one is about rain?",
          fbText: "Chairs – <b>Yes, please. We need ten chairs.</b> A concert – <b>Good idea! I can sing.</b> Rain – <b>the school hall</b>. The poster – <b>No, thanks. I’ve almost finished it.</b>"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “Shall I make some cakes for the stall?”</p><p>Ms Marchenko needs cakes for the stall. What does she say?</p>`,
          opts: [
            "No, thanks. I can do it.",
            "Yes, please. Thank you, Oksana!",
            "Sorry, I can’t. I’m busy."
          ],
          correct: 1,
          hint: "Ms Marchenko needs cakes. Is it yes or no?",
          fbOk: "Right.",
          fbBad: "Ms Marchenko needs cakes, so she says yes. How do we say yes to an offer?",
          fbText: "To say yes to an offer: <b>Yes, please. Thank you!</b> <i>Sorry, I can’t</i> is an answer to a suggestion, not to an offer."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Oksana asks her friends for ideas.</p>`,
          tiles: ["What", "shall", "we", "do", "at the festival?"],
          extra: ["to"],
          answer: "What shall we do at the festival?",
          keepCase: true,
          hint: "Start with What. Then shall + we + verb.",
          fbOk: "Yes!",
          fbBad: "After shall we: a verb without to.",
          fbText: "<b>What shall we do at the festival?</b> – asking for ideas. After <i>shall we</i> – <i>do</i>, not <i>to do</i>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Halyna and Oksana plan the festival.</p>`,
          text: "Halyna: The festival is on 29 May. What {*shall|let’s} we do? Oksana: {*Shall|Let’s} we have a cake stall? Halyna: Good idea! {*Shall|Let’s} I make a poster for it? Oksana: Yes, {*please|I shall}! I’ll make the cakes.",
          hint: "Asking for ideas, a suggestion, an offer: shall. Saying yes to an offer: Yes, …",
          fbOk: "Well done!",
          fbBad: "Look at the screen with Shall I…? and Shall we…? again.",
          fbText: "What <b>shall</b> we do? <b>Shall</b> we have a cake stall? <b>Shall</b> I make a poster? – Yes, <b>please</b>! We say <i>Let’s have…</i>, but not <i>Let’s we</i> or <i>Let’s I</i>."
        }
      ],
      outro: {
        text: "Shall I…? – an offer. Shall we…? – a suggestion. What shall we do? – asking for ideas.",
        learned: [
          "Offer help: Shall I make a poster?",
          "Ask for ideas: What shall we do?",
          "Say yes or no to an offer or a suggestion."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s6l6",
      title: "Our school festival: an invitation",
      short: "Invitation",
      icon: "scroll",
      status: "verified",
      why: "Read an invitation to a school event and answer it. And say what you think.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Can you come to our festival?",
          body: `<p class="lead">Halyna makes an invitation for the school festival.</p><p><b>Zelena Dolyna School Festival</b></p><ul><li>When: 29 May, 11 am – 3 pm</li><li>Where: the school playground</li><li>What: a concert, a cake stall, games and a sports quiz</li></ul><p>If it rains, the festival will be in the school hall. The money from the cake stall is for new library books. Everyone is welcome!</p><p>What does an invitation tell you?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What does every invitation need?</p>`,
          opts: [
            "the weather forecast",
            "when and where",
            "a list of all the guests"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Every invitation says <b>when and where</b>. The next screen shows more."
        },
        {
          type: "info",
          title: "An invitation",
          body: `<p>An <b>invi<u>ta</u>tion</b> says:</p><ul><li>What is it? – a <b><u>fes</u>tival</b>, a party, a concert</li><li>When? – the date and the time</li><li>Where? – the place</li></ul><p>A <b><u>pos</u>ter</b> on the wall can be an invitation too. In an invitation we often use <i>if</i> and <i>will</i>: If it rains, the festival will be in the school hall.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Zelena Dolyna School Festival</b></p><ul><li>When: 29 May, 11 am – 3 pm</li><li>Where: the school playground</li></ul><p>If it rains, the festival will be in the school hall. The money from the cake stall is for new library books.</p><p>Where will the festival be if it rains?</p>`,
          opts: [
            "in the school hall",
            "in the school playground",
            "in the library"
          ],
          correct: 0,
          hint: "Find “if it rains” in the invitation.",
          fbOk: "Right.",
          fbBad: "Read the sentence with “if it rains” again.",
          fbText: "“If it rains, the festival will be <b>in the school hall</b>.” The playground is the place if the weather is good. The money is for library books."
        },
        {
          type: "info",
          title: "What do you think?",
          body: `<ul><li>Your opinion: <b>I think</b> the concert will be great. <b>I don’t think</b> it will rain.</li><li>Asking: <b>What do you think?</b></li><li>Yes: <b>I agree.</b> / You’re right.</li><li>No: <b>I’m not sure.</b> / <b>I don’t agree.</b></li></ul><p>Not: <s>I am agree</s>. We say: I agree.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Halyna shows Oksana the invitation.</p>`,
          text: "Halyna: What do you {*think|agree}? Is it OK? Oksana: I {*think|am think} it’s great! But I {*don’t think|think not} people can read the small letters. Halyna: You’re right. I {*agree|am agree}. I’ll make them bigger.",
          hint: "Look at the screen “What do you think?” again.",
          fbOk: "Exactly.",
          fbBad: "Check: I think…, I don’t think…, I agree.",
          fbText: "What do you <b>think</b>? I <b>think</b> it’s great. I <b>don’t think</b> people can read… I <b>agree</b> – without <i>am</i>."
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>People answer the invitation.</p><p><i><b>Halyna’s mum:</b> Thanks for the invitation! I’ll make a big cake for the stall.<br><b>Grandad Mykola:</b> I’ll come if my back is OK.<br><b>Andrii (Kyiv):</b> Sorry, I can’t come. We’re visiting my grandparents in Chernihiv that weekend. Good luck!</i></p><p>What is true?</p>`,
          opts: [
            "Halyna’s mum will make a cake.",
            "Andrii will come to the festival.",
            "Grandad Mykola will come if his back is OK.",
            "Andrii is visiting his grandparents that weekend."
          ],
          correct: [0, 2, 3],
          hint: "Read each answer. Who says yes? Who says sorry?",
          fbOk: "Good eye!",
          fbBad: "Read Andrii’s answer again. Can he come?",
          fbText: "Halyna’s mum <b>will make a cake</b>. Grandad Mykola <b>will come if his back is OK</b>. Andrii can’t come: he’s <b>visiting his grandparents</b> in Chernihiv."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["in|vi|+ta|tion", "+fes|ti|val", "+pos|ter"],
          hint: "Look at the underlined parts on the screen “An invitation”.",
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "invi<u>ta</u>tion, <u>fes</u>tival, <u>pos</u>ter. In invitation, the strong part is the third one."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma about the festival.</p>`,
          text: "Our school festival is on 29 May! There {*will be|was} a concert and a cake stall. If it {*rains|will rain}, we’ll have it in the school hall. I {*think|thinking} it will be great. I {*will send|sent} you photos as soon as it {*finishes|will finish}.",
          hint: "The festival is in the future. After if and as soon as: the Present Simple.",
          fbOk: "Well done!",
          fbBad: "Check: will for the future, the Present Simple after if and as soon as, I think for your opinion.",
          fbText: "There <b>will be</b> a concert. If it <b>rains</b>… I <b>think</b> it will be great. I <b>will send</b> you photos as soon as it <b>finishes</b>."
        }
      ],
      outro: {
        text: "An invitation says what, when and where. Say what you think: I think…, I don’t think…, I agree.",
        learned: [
          "Read an invitation and find when and where.",
          "Read answers to an invitation: who can come?",
          "Give your opinion and agree: I think…, I agree."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s6l7",
      title: "School life after lessons",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e7s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the school festival?",
          body: `<p class="lead">Oksana’s school festival is next week. There’s a lot to do!</p><p>Help Oksana, Halyna and their friends. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<ul><li>Chess club – Mondays and Wednesdays</li><li>Drama club – Tuesdays</li><li>Art club – Thursdays</li><li>Science club – Fridays</li></ul><p>Bohdan wants to do experiments after lessons. Which club can he join?</p>`,
          opts: [
            "the drama club",
            "the science club",
            "the art club"
          ],
          correct: 1,
          pre: "e7s6l1",
          hint: "In which club do pupils do experiments?",
          fbOk: "Right.",
          fbBad: "Drama – plays, art – pictures. And experiments?",
          fbText: "In the <b>science club</b>, pupils do experiments. It meets on Fridays."
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "On 1 September, schools in Ukraine have the {*First Bell|Last Bell}. At the end of May, the school leavers have the {*Last Bell|First Bell}. On sports day in the UK, pupils {*run races|sell cakes}.",
          pre: "e7s6l2",
          hint: "When does the school year start? When does it finish?",
          fbOk: "Yes!",
          fbBad: "Check the traditions again: 1 September, the end of May, sports day.",
          fbText: "1 September – <b>the First Bell</b>. The end of May – <b>the Last Bell</b>. On sports day, pupils <b>run races</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Write the verb <b>win</b> in the correct form.</p>`,
          before: "If Halyna",
          after: "the quiz, she’ll get a prize.",
          answer: "wins",
          pre: "e7s6l3",
          hint: "After if: the Present Simple. Halyna = she → …",
          fbOk: "Well done!",
          fbBad: "After if, don’t use will. And Halyna = she, so add -s.",
          fbText: "After <i>if</i> – the Present Simple: If Halyna <b>wins</b> the quiz, she’ll get a prize."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Which sentence means: “We’ll have the festival in the playground if it doesn’t rain”?</p>`,
          opts: [
            "We’ll have the festival in the playground unless it doesn’t rain.",
            "We’ll have the festival in the playground unless it rains.",
            "We won’t have the festival in the playground unless it rains."
          ],
          correct: 1,
          pre: "e7s6l4",
          hint: "unless = if … not.",
          fbOk: "Exactly.",
          fbBad: "unless already means if … not. Don’t add not.",
          fbText: "If it doesn’t rain = <b>unless it rains</b>. Not: <i>unless it doesn’t rain</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "Halyna: I’ll put up the posters as soon as I {*get|will get} to school. Oksana: Great! I’ll call you when the cakes {*are|will be} ready.",
          pre: "e7s6l4",
          hint: "After as soon as and when: the Present Simple.",
          fbOk: "Good eye!",
          fbBad: "No will after as soon as and when.",
          fbText: "As soon as I <b>get</b> to school. When the cakes <b>are</b> ready. After <i>as soon as</i> and <i>when</i> – the Present Simple."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Dmytro: “Shall I bring some chairs from the classroom?”</p><p>Ms Marchenko has got enough chairs. What does she say?</p>`,
          opts: [
            "No, thanks. We’ve got enough chairs.",
            "Yes, please. Thank you, Dmytro!",
            "Good idea! Let’s have a concert."
          ],
          correct: 0,
          pre: "e7s6l5",
          hint: "Ms Marchenko doesn’t need chairs. Is it yes or no?",
          fbOk: "Well done!",
          fbBad: "She doesn’t need chairs. How do we say no to an offer?",
          fbText: "To say no to an offer: <b>No, thanks.</b> Ms Marchenko has got enough chairs."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>Thanks for the invitation! I can’t come in the morning because I’ve got a piano lesson. But I’ll come as soon as it finishes, at about one o’clock. I think the sports quiz will be fun! – Liza</i></p><p>When will Liza come to the festival?</p>`,
          opts: [
            "in the morning",
            "She won’t come.",
            "after her piano lesson"
          ],
          correct: 2,
          pre: "e7s6l6",
          hint: "Find “as soon as” in Liza’s answer.",
          fbOk: "Right.",
          fbBad: "Read the sentence with “as soon as” again.",
          fbText: "Liza will come <b>as soon as</b> her piano lesson finishes, at about one o’clock. She can’t come in the morning."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about clubs and school traditions and plan a school event.",
        learned: [
          "Talk about after-school clubs and school traditions.",
          "Use the First Conditional, unless and as soon as.",
          "Offer help and ask for ideas with shall.",
          "Read an invitation and give your opinion."
        ]
      }
    }
  ]
});
