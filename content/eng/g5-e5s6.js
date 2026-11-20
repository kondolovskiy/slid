/* Слід · Англійська мова, 5 клас — «Free time, hobbies and holidays» (e5s6)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 5 кл.: тема «Відпочинок і дозвілля» — види відпочинку та занять,
   захоплення, канікули (PDF с. 20, розд. 4.2.1); граматика — like/love/hate + -ing, can (ability), Let’s / Shall we (suggestions)
   (с. 21–22, розд. 4.4; розподіл — content/eng/plan.js, reports/verify/plan-eng-g5.md):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e4s3 (play / go / do, like / don’t like) — `requires` за plan-eng-g5.md §6.
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми й наголос — за Cambridge Dictionary, Cambridge Grammar і OALD (URL — tasks/…/write-eng-g5-e5s6.md, «Нотатки агента»).
   Статус: verified (verifier-e5s6, reports/verify/e5s6.md). 7 уроків (6 + фінал). Будова — за еталоном e4s1.
   Перевірка: node tools/validate.mjs --section e5s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s6",
  grade: 5,
  weeks: [19, 21],
  title: "Free time, hobbies and holidays",
  why: "To talk about your hobbies and what you can do well. And to make plans with a friend: say yes or say no politely.",
  requires: ["e4s3l1", "e4s3l4"],
  meta: { author: "writer-e5s6", created: "2026-11-19", factcheck: "verifier-e5s6 (reports/verify/e5s6.md)", teacher: null },
  badges: [
    { id: "e5s6boss", name: "Hobby club star", icon: "trophy", desc: "Finish the final lesson “Free time, hobbies and holidays”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s6l1",
      title: "Free time: at home and outside",
      short: "Free time",
      icon: "home",
      status: "verified",
      why: "What do you do after school? Tell your friends about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What do they do after school?",
          body: `<p class="lead">The pen-friend club asks: “What do you do in your free time?”</p><p><b>Andrii:</b> I read books and play chess at home.<br><b>Emma:</b> I go for a walk with my dog.<br><b>Mariia:</b> I play the guitar.<br><b>Oksana:</b> I ride my bike in the village.</p><p>At home or outside: where do they do it?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma goes for a walk with her dog. Where is she?</p>`,
          opts: [
            "at home",
            "outside",
            "at school"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A walk is <b>outside</b>: in the park or in the street. The next screen shows more free-time words."
        },
        {
          type: "info",
          title: "Free time",
          body: `<p><b>Free time</b> is time with no lessons.</p><p><b>At home:</b></p><ul><li>read books</li><li>watch TV, watch car<u>toon</u>s</li><li>play com<u>pu</u>ter games, play chess</li><li>play the gui<u>tar</u>, play the pi<u>an</u>o</li><li>draw pictures</li></ul><p><b>Outside:</b></p><ul><li>go for a walk</li><li>ride a bike</li><li>play football</li><li>meet friends</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Where do we usually do it?</p>`,
          bins: ["At home", "Outside"],
          items: [
            ["watch TV", 0],
            ["play computer games", 0],
            ["play the piano", 0],
            ["go for a walk", 1],
            ["ride a bike", 1],
            ["play football", 1]
          ],
          fbOk: "Yes!",
          fbBad: "Look at the lists again.",
          fbText: "At home: <b>watch TV</b>, <b>play computer games</b>, <b>play the piano</b>. Outside: <b>go for a walk</b>, <b>ride a bike</b>, <b>play football</b>."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["I read", "I watch", "I ride", "I go for", "I play"],
          right: ["a book in bed.", "cartoons on TV.", "my bike in the park.", "a walk with my dog.", "the guitar."],
          hint: "What do you do with a book? And with a bike?",
          fbOk: "Well done!",
          fbBad: "Check the wrong pairs. Look at the lists again.",
          fbText: "I <b>read</b> a book. I <b>watch</b> cartoons. I <b>ride</b> my bike. I <b>go for</b> a walk. I <b>play</b> the guitar."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his free time.</p>`,
          text: "After school, I {*read|ride} books. I {*play|go} computer games. On Saturdays, I {*go|play} for a walk with my dad. We {*ride|read} our bikes in the park.",
          hint: "Books: read or ride? A walk: go or play?",
          fbOk: "Exactly.",
          fbBad: "Look at the lists again.",
          fbText: "We <b>read</b> books and <b>play</b> computer games. We <b>go</b> for a walk. We <b>ride</b> bikes."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["com|+pu|ter", "gui|+tar", "pi|+an|o", "car|+toon"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "com<u>pu</u>ter, gui<u>tar</u>, pi<u>an</u>o, car<u>toon</u>. The strong part is not at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>What does Dmytro do every evening? Use a verb from the list.</p>`,
          before: "He",
          after: "cartoons on TV.",
          answer: "watches",
          hint: "Look at the list: … TV, … cartoons. Dmytro is he.",
          fbOk: "Yes!",
          fbBad: "What do we do with TV? Add -es for he.",
          fbText: "We <b>watch</b> TV. Dmytro is <b>he</b>, so it’s <b>watches</b>: He <b>watches</b> cartoons on TV."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I’m Andrii. I live in Kyiv. In my free time, I play chess with my grandad at home. At the weekend, we go for a walk in the park. I ride my bike there.</i></p><p>What does Andrii do outside?</p>`,
          opts: [
            "He plays chess.",
            "He plays computer games.",
            "He rides his bike."
          ],
          correct: 2,
          hint: "Where is the park: at home or outside?",
          fbOk: "Good eye!",
          fbBad: "Read about the park again.",
          fbText: "Andrii plays chess <b>at home</b>. In the park, he <b>rides his bike</b>. The park is outside."
        }
      ],
      outro: {
        text: "In our free time we read, watch TV and play games at home. Outside, we go for a walk and ride a bike.",
        learned: [
          "Name things to do in your free time.",
          "Say what you do at home and outside.",
          "Use read, watch, play, ride and go for a walk."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s6l2",
      title: "I love drawing, I don’t like running",
      short: "Like, love, hate",
      icon: "star",
      status: "verified",
      why: "Tell your friends what you love and what you hate.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What does Mariia love?",
          body: `<p class="lead">Mariia writes to the pen-friend club.</p><p><i>I love drawing! I like reading too. I don’t like running. And I hate getting up early on Saturdays!</i></p><p>Love, like, don’t like, hate: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia hates getting up early. What does it mean?</p>`,
          opts: [
            "She doesn’t like it at all.",
            "She likes it a lot.",
            "She likes it a little."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "<b>Hate</b> is very strong. Mariia <b>doesn’t like</b> getting up early <b>at all</b>. See the next screen."
        },
        {
          type: "info",
          title: "Love, like, don’t like, hate",
          body: `<ul><li><b>love</b> ●●● – I love drawing.</li><li><b>like</b> ●●○ – I like reading.</li><li><b>don’t like</b> ●○○ – I don’t like running.</li><li><b>hate</b> ○○○ – I hate getting up early.</li></ul><p>After love, like and hate: a verb + <b>-ing</b>.</p><p><b>Do you like</b> dancing? – Yes, I <b>do</b>. / No, I <b>don’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Taras likes football a lot. He plays it every day. What does he say?</p>`,
          opts: [
            "I hate playing football.",
            "I don’t like playing football.",
            "I love playing football."
          ],
          correct: 2,
          hint: "A lot: how many dots?",
          fbOk: "Right.",
          fbBad: "Taras likes football a lot.",
          fbText: "A lot, every day: <b>I love playing football.</b> Love is ●●●."
        },
        {
          type: "info",
          title: "Writing -ing",
          body: `<ul><li>draw → draw<b>ing</b>, read → read<b>ing</b></li><li>dance → danc<b>ing</b>, ride → rid<b>ing</b> <i>(no e)</i></li><li>swim → swim<b>ming</b>, run → run<b>ning</b> <i>(mm, nn)</i></li></ul><p>I love <b>dancing</b>. He hates <b>running</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes to Mariia.</p>`,
          text: "I love {*drawing|draw} pictures too! My brother likes {*riding|rideing} his bike. We don’t like {*running|runing}. Do you like {*swimming|swiming}?",
          hint: "Look at the -ing list: ride, run, swim.",
          fbOk: "Exactly.",
          fbBad: "Check the -ing list again.",
          fbText: "Love + -ing: <b>drawing</b>. Ride has no e: <b>riding</b>. Run and swim: <b>running</b>, <b>swimming</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Use the verb <b>dance</b>.</p>`,
          before: "Oksana loves",
          after: "at parties.",
          answer: ["dancing", "to dance"],
          hint: "Love + -ing. Dance has an e at the end.",
          fbOk: "Well done!",
          fbBad: "Look at the -ing list: dance → …",
          fbText: "Dance → <b>dancing</b>, no e. Oksana loves <b>dancing</b> at parties."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Dmytro’s sister hates running. What does he say?</p>`,
          tiles: ["my sister", "doesn’t", "like", "running"],
          extra: ["likes", "run"],
          answer: "My sister doesn’t like running.",
          hint: "Start with my sister. Then doesn’t.",
          fbOk: "Yes!",
          fbBad: "After doesn’t: like, not likes.",
          fbText: "<b>My sister doesn’t like running.</b> After doesn’t: <b>like</b>. After like: <b>running</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Dmytro’s message is wrong.</p>`,
          text: "I love [play] football. I like reading books. I hate swimming.",
          hint: "After love, we need -ing.",
          fbOk: "Good eye!",
          fbBad: "Check the word after love.",
          fbText: "After love: verb + -ing. So it’s <b>I love playing football</b>. <b>Reading</b> and <b>swimming</b> are correct."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back to Mariia.</p>`,
          text: "I draw every day. I {*love|hate} drawing! Running is boring. I {like|*don’t like} it. I’m always tired in the morning. I {*hate|love} getting up early! Do you like {*dancing|dance}?",
          hint: "Every day: love or hate? Boring: like or don’t like?",
          fbOk: "Well done!",
          fbBad: "Read each sentence before the gap.",
          fbText: "Every day: <b>love</b>. Boring: <b>don’t like</b>. Tired in the morning: <b>hate</b> getting up early. Do you like <b>dancing</b>?"
        }
      ],
      outro: {
        text: "Love, like, don’t like and hate show how we feel. After them, use a verb + -ing.",
        learned: [
          "Say what you love, like, don’t like and hate.",
          "Use love, like and hate + -ing: I love drawing.",
          "Write -ing words: swimming, dancing, riding."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s6l3",
      title: "Swimming is fun! My hobby",
      short: "My hobby",
      icon: "eye",
      status: "verified",
      why: "Everyone has got a hobby. Tell your friends about yours.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What is Taras’s hobby?",
          body: `<p class="lead">Taras lives in Lviv. He writes a post for the club.</p><p><i>Taking photos is my hobby. I take photos of old streets in Lviv. It’s fun!</i></p><p>Look: <b>Taking photos is</b> my hobby. Why is there -ing?</p>`,
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
            "Swimming is fun.",
            "Swim is fun.",
            "Swims is fun."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>Swimming is fun.</b> Why -ing? See the next screen."
        },
        {
          type: "info",
          title: "Swimming is fun",
          body: `<p><b>Swimming</b> is fun. <b>Drawing</b> is my hobby. My hobby is <b>reading</b>.</p><ul><li>An -ing word can be a thing: <b>swimming</b>, <b>dancing</b>.</li><li>It is one thing → <b>is</b>: Dancing <b>is</b> fun.</li><li>We <b>take</b> photos: Taking photos is fun.</li></ul><p><b>What’s your <u>hob</u>by?</b> – My hobby is <b>playing chess</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Reading|Read} is my hobby. {*Dancing|Dance} {*is|are} fun. My hobby {*is|are} playing chess.",
          hint: "Find the -ing word. One thing: is or are?",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "<b>Reading</b> is my hobby. <b>Dancing is</b> fun: it is one thing. My hobby <b>is</b> playing chess."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii: “I play chess every day. I love it!”</p><p>What is Andrii’s hobby?</p>`,
          opts: [
            "His hobby is play chess.",
            "His hobby is playing chess.",
            "His hobby is reading."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Andrii plays chess. And we need -ing.",
          fbText: "Andrii loves chess. His hobby is <b>playing chess</b>. After <i>is</i>, we say <b>playing</b>, not <i>play</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Taras’s hobby, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Taras. I live in Lviv. My hobby is taking photos. I’ve got an old camera. It was my grandad’s camera. I take photos of old streets, cats and people. Taking photos is fun!</i></p><p>What does Taras take photos of?</p>`,
          opts: [
            "football and tennis",
            "the sea and the mountains",
            "old streets, cats and people"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Find “I take photos of…”.",
          fbText: "Taras writes: “I take photos of <b>old streets, cats and people</b>.”"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Taras’s hobby, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>On Saturdays, I go for a walk with my camera. I don’t like taking photos in the rain. But I love taking photos in the snow! In summer, I want to take photos of the Carpathians.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Taras goes for a walk with his camera on Saturdays.",
            "Taras loves taking photos in the rain.",
            "Taras loves taking photos in the snow.",
            "Taras takes photos only at home."
          ],
          correct: [0, 2],
          hint: "Find rain and snow in the text.",
          fbOk: "Well done!",
          fbBad: "Read about the rain and the snow again.",
          fbText: "On Saturdays, he goes for a <b>walk with his camera</b>. He <b>doesn’t like</b> the rain, but he <b>loves</b> the snow. He takes photos outside."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras tells Emma about his hobby.</p>`,
          tiles: ["Taras", "takes", "photos", "of old streets"],
          extra: ["makes", "take"],
          answer: "Taras takes photos of old streets.",
          hint: "Who? Then what does he do?",
          fbOk: "Yes!",
          fbBad: "We take photos. Taras is he.",
          fbText: "<b>Taras takes photos of old streets.</b> We say <b>take</b> photos. Taras is <b>he</b>, so it’s <b>takes</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia draws every day. It’s her hobby. Write the -ing word.</p>`,
          before: "Her hobby is",
          after: ".",
          answer: "drawing",
          hint: "draw + -ing",
          fbOk: "Well done!",
          fbBad: "What does Mariia do every day?",
          fbText: "Mariia draws, so her hobby is <b>drawing</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her hobby.</p>`,
          text: "My hobby {*is|are} karate. {*Doing|Do} karate is fun! I {*love|hate} it. My brother’s hobby is {*playing|play} computer games.",
          hint: "One thing: is or are? And look for -ing.",
          fbOk: "Good eye!",
          fbBad: "Look at the examples on the rule screen.",
          fbText: "My hobby <b>is</b> karate. <b>Doing</b> karate is fun, so Oksana <b>loves</b> it. Her brother’s hobby is <b>playing</b> computer games."
        }
      ],
      outro: {
        text: "An -ing word can be a thing: Swimming is fun. My hobby is taking photos.",
        learned: [
          "Say what your hobby is: My hobby is taking photos.",
          "Use -ing words as things: Swimming is fun.",
          "Read a short post about a hobby."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s6l4",
      title: "I can swim well, but I can’t skate",
      short: "Can, can’t",
      icon: "target",
      status: "verified",
      why: "Say what you can do well. And say what you can’t do yet.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who can skate?",
          body: `<p class="lead">The club has a sports day on Saturday. Ms Kravets asks: “What can you do?”</p><p><b>Emma:</b> I can swim well, but I can’t skate.<br><b>Andrii:</b> I can play chess very well!<br><b>Oksana:</b> I can do karate.</p><p>What can they do? What can’t they do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “I can swim well, but I can’t skate.”</p><p>Can Emma skate?</p>`,
          opts: [
            "No, she can’t.",
            "Yes, she can.",
            "Yes, she does."
          ],
          correct: 0,
          hint: "Find skate in Emma’s words.",
          fbOk: "Right.",
          fbBad: "Emma says: “I can’t skate.”",
          fbText: "Emma <b>can’t</b> skate. So the answer is <b>No, she can’t.</b> She can swim well."
        },
        {
          type: "info",
          title: "Can and can’t",
          body: `<p>I <b>can</b> swim. She <b>can</b> swim. They <b>can</b> swim.</p><ul><li>can + verb: can <b>swim</b>, can <b>skate</b></li><li>no -s: She can <b>swim</b>. Not: <s>She can swims.</s></li><li>not → <b>can’t</b> (cannot)</li></ul><p><b>Can</b> you skate? – Yes, I <b>can</b>. / No, I <b>can’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Look at the list. Yes = can. No = can’t.</p><ul><li>Mariia: draw – yes, skate – no</li><li>Taras: ride a bike – yes, play the piano – no</li></ul>`,
          text: "Mariia {*can|can’t} draw. She {can|*can’t} skate. Taras {*can|can’t} ride a bike. He {can|*can’t} play the piano.",
          hint: "Yes or no? Look at the list.",
          fbOk: "Exactly.",
          fbBad: "Check each yes and no.",
          fbText: "Yes: Mariia <b>can</b> draw. Taras <b>can</b> ride a bike. No: Mariia <b>can’t</b> skate. Taras <b>can’t</b> play the piano."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "He can plays the guitar.",
            "He can play the guitar.",
            "He can to play the guitar."
          ],
          correct: 1,
          fbOk: "Good eye!",
          fbBad: "Look at the rule: can + verb.",
          fbText: "After <b>can</b>: just the verb. <b>He can play</b> the guitar. No -s, no <i>to</i>."
        },
        {
          type: "info",
          title: "How well?",
          body: `<ul><li>I can swim <b>very well</b>. ●●●</li><li>I can swim <b>well</b>. ●●○</li><li>I can’t swim <b>very well</b>. ●○○</li><li>I <b>can’t</b> swim. ○○○</li></ul><p><b>Well</b> goes at the end: I can play chess <b>well</b>.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma swims very well. She can’t skate. What does she write?</p>`,
          tiles: ["I", "can", "swim", "very well,", "but", "I", "can’t", "skate"],
          extra: ["swims"],
          answer: "I can swim very well, but I can’t skate.",
          hint: "First say what Emma can do. Then but.",
          fbOk: "Well done!",
          fbBad: "After can: swim, not swims.",
          fbText: "<b>I can swim very well, but I can’t skate.</b> After can: <b>swim</b>. Very well goes after the verb. Yes and no: <b>but</b>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Oksana: “Can you skate, Emma?”</p>`,
          before: "Emma: “No, I",
          after: ". But I can swim well.”",
          answer: "can’t",
          contractions: true,
          hint: "Emma can’t skate. What is the short answer?",
          fbOk: "Yes!",
          fbBad: "Look at the short answers: No, I …",
          fbText: "Can you…? – No, I <b>can’t</b>. Emma can’t skate."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "My cousin can [skates] very well. She can’t play the piano. Can you skate?",
          hint: "Check the verb after can.",
          fbOk: "Good eye!",
          fbBad: "After can, no -s.",
          fbText: "After <b>can</b>, no -s: my cousin <b>can skate</b>. <b>Can’t play</b> and <b>Can you skate?</b> are correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Oksana! I can swim very well. I go swimming every Saturday. I can ride a bike, but I can’t skate. My brother Tom can skate very well. But he can’t swim!</i></p><p>Who can skate?</p>`,
          opts: [
            "Emma",
            "Emma and Tom",
            "Tom"
          ],
          correct: 2,
          hint: "Find skate two times in the message.",
          fbOk: "Well done!",
          fbBad: "Read about Emma and about Tom again.",
          fbText: "Emma <b>can’t</b> skate. Tom <b>can</b> skate very well. So it’s <b>Tom</b>."
        }
      ],
      outro: {
        text: "Use can and can’t to say what you can do. After can: just the verb, no -s and no to.",
        learned: [
          "Say what you can and can’t do.",
          "Ask: Can you skate? Answer: Yes, I can. / No, I can’t.",
          "Say how well: I can swim very well."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s6l5",
      title: "Let’s go! Saying yes or no",
      short: "Let’s…",
      icon: "users",
      status: "verified",
      why: "Make plans with a friend. Say yes or say no politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What can we do on Saturday?",
          body: `<p class="lead">Andrii chats with his friend Bohdan from Kyiv.</p><p><b>Andrii:</b> Let’s go to the park tomorrow!<br><b>Bohdan:</b> Good idea! Shall we meet at ten?<br><b>Andrii:</b> Sorry, I can’t. I’ve got an English lesson. Let’s meet at twelve.</p><p>How do they say yes? How do they say no?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii: “Let’s play football!” Bohdan wants to play. What does he say?</p>`,
          opts: [
            "Good idea!",
            "Sorry, I can’t.",
            "No, I don’t."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Bohdan says yes: <b>Good idea!</b> <i>Sorry, I can’t</i> says no."
        },
        {
          type: "info",
          title: "Let’s…",
          body: `<p><b>Let’s</b> go to the park! <b>Let’s</b> play chess!</p><ul><li>Let’s = you and I, together.</li><li>Let’s + verb: Let’s <b>go</b>. Not: <s>Let’s to go.</s></li><li>A question: <b>Shall we</b> go to the park?</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Let’s {*play|playing|to play} chess! Let’s {*go|going|goes} for a walk. {*Shall|Let’s} we meet at three?",
          hint: "After Let’s: just the verb. A question with we: Shall we…?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule again.",
          fbText: "Let’s + verb: Let’s <b>play</b>, Let’s <b>go</b>. A question: <b>Shall</b> we meet at three?"
        },
        {
          type: "info",
          title: "Saying yes or no",
          body: `<p><b>Yes:</b></p><ul><li>Good idea!</li><li>Great! / OK!</li></ul><p><b>No:</b> say sorry and say why.</p><ul><li>Sorry, I can’t. I’m busy.</li><li>Sorry, I can’t. I’ve got a lot of homework.</li></ul><p>You can say: Let’s go <b>tomorrow</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the words.",
          body: `<p>Is it yes or no?</p>`,
          bins: ["Yes", "No"],
          items: [
            ["Good idea!", 0],
            ["Great!", 0],
            ["OK, let’s go!", 0],
            ["Sorry, I can’t.", 1],
            ["Sorry, I’m busy.", 1],
            ["Sorry, I’ve got a lot of homework.", 1]
          ],
          fbOk: "Yes!",
          fbBad: "Look for sorry.",
          fbText: "Yes: <b>Good idea!</b>, <b>Great!</b>, <b>OK, let’s go!</b> No: we say <b>Sorry</b> and say why."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Let’s play football!", "Shall we watch a film?", "Can you come at five?", "Do you like dancing?", "What’s your hobby?"],
          right: ["Good idea! I’ve got a ball.", "Yes, let’s! I love films.", "Sorry, I can’t come at five. Let’s meet at six.", "Yes, I do. I love it!", "Drawing. I draw every day."],
          hint: "Look for the same words: ball, films, five and six.",
          fbOk: "Well done!",
          fbBad: "Check the wrong pairs again.",
          fbText: "Football → <b>a ball</b>. A film → <b>I love films</b>. At five? → <b>Let’s meet at six</b>. Do you…? → <b>Yes, I do</b>. Your hobby → <b>Drawing</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Bohdan: “Let’s go to the park!”</p><p>Andrii can’t go. He’s got an English lesson. What does he say?</p>`,
          opts: [
            "No!",
            "Sorry, I can’t. I’ve got an English lesson.",
            "Good idea! I’ve got an English lesson."
          ],
          correct: 1,
          hint: "How do we say no? Say sorry and say why.",
          fbOk: "Right.",
          fbBad: "Andrii can’t go. Say sorry and say why.",
          fbText: "To say no: <b>Sorry, I can’t.</b> Then say why: <b>I’ve got an English lesson.</b> Just <i>No!</i> is not polite."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>It’s sunny. Emma wants to go to the park with Tom.</p>`,
          before: "Emma: “",
          after: "go to the park!” Tom: “Good idea!”",
          answer: "Let’s",
          contractions: true,
          hint: "You and I, together: …",
          fbOk: "Well done!",
          fbBad: "Look at the rule: … go to the park!",
          fbText: "<b>Let’s</b> go to the park! Let’s = you and I, together."
        },
        {
          type: "order",
          sk: "func",
          eyebrow: "Final",
          title: "Put the sentences in order.",
          body: `<p>Oksana and Dmytro make a plan for Sunday.</p>`,
          items: [
            "Oksana: Let’s go to the river on Sunday!",
            "Dmytro: Sorry, I don’t like swimming. Let’s ride our bikes.",
            "Oksana: Good idea! Shall we go at ten?",
            "Dmytro: OK! See you at ten."
          ],
          shuffle: [2, 0, 3, 1],
          hint: "Start with Let’s… Each answer comes after its question.",
          fbOk: "Good eye!",
          fbBad: "Find the answer to each question.",
          fbText: "Oksana says: “Let’s go to the river!” Dmytro says no and says why. Then he has a new idea. Oksana says yes and asks: “Shall we go at ten?”"
        }
      ],
      outro: {
        text: "We make plans with Let’s… and Shall we…? We say yes with Good idea! To say no, we say sorry and say why.",
        learned: [
          "Make a plan: Let’s go to the park!",
          "Ask: Shall we meet at ten?",
          "Say yes: Good idea! Say no: Sorry, I can’t…"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s6l6",
      title: "School holidays: what do you like doing?",
      short: "Holidays",
      icon: "map",
      status: "verified",
      why: "The holidays are a great time. Tell your friends what you like doing.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What do they do in the holidays?",
          body: `<p class="lead">The summer holidays are coming! The club asks: “What do you like doing in the holidays?”</p><p><b>Oksana:</b> I like going to the Black Sea.<br><b>Emma:</b> I love going camping.<br><b>Andrii:</b> I like playing chess in the park.</p><p>What do you like doing in the holidays?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What do children do in the school holidays?</p>`,
          opts: [
            "They don’t go to school.",
            "They go to school every day.",
            "They have got a lot of lessons."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In the school <b>holidays</b>, there is no school. See the next screen."
        },
        {
          type: "info",
          title: "In the holidays",
          body: `<ul><li><b><u>hol</u>idays</b> = time with no school</li><li>in the <b>summer</b> holidays, in the <b>winter</b> holidays</li><li>go + -ing: go <b><u>camp</u>ing</b>, go <b>fishing</b>, go <b>skating</b></li></ul><p><b>What do you like doing</b> in the holidays?<br>– I like <b>going</b> to the sea.</p><p>The <u>underlined</u> part is strong. Remember: gui<u>tar</u>, week<u>end</u>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma: “What do you like doing in the holidays?”</p>`,
          opts: [
            "I like go to the mountains.",
            "Yes, I like.",
            "I like going to the mountains."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "After like: verb + -ing.",
          fbText: "After <b>like</b>: verb + -ing. <b>I like going</b> to the mountains. <i>Yes, I like</i> doesn’t answer the question."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Oksana’s summer, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! I love the summer holidays! In June, we go to Odesa. My uncle Ivan lives there, near the Black Sea. I go swimming in the sea every day. My brother Dmytro doesn’t like swimming. He likes playing football on the beach.</i></p><p>What does Dmytro like doing in Odesa?</p>`,
          opts: [
            "swimming in the sea",
            "playing football on the beach",
            "playing chess"
          ],
          correct: 1,
          hint: "Find Dmytro in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Dmytro again.",
          fbText: "Dmytro <b>doesn’t like</b> swimming. He likes <b>playing football on the beach</b>. Oksana goes swimming."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Oksana’s summer, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>In August, we go to the Carpathians. We go camping with Dad. In the evening, we sit by the fire. Dad plays the guitar and we sing. I don’t like getting up early. But in the mountains, I love it!</i></p><p>Which sentences are true?</p>`,
          opts: [
            "They go camping in the Carpathians.",
            "Oksana’s dad plays the guitar.",
            "Oksana hates getting up early in the mountains.",
            "They go camping in June."
          ],
          correct: [0, 1],
          hint: "Check the month and the mountains.",
          fbOk: "Well done!",
          fbBad: "Read the text again: August, the guitar, the mountains.",
          fbText: "In <b>August</b>, they go <b>camping in the Carpathians</b>. <b>Dad plays the guitar.</b> In the mountains, Oksana <b>loves</b> getting up early."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about the winter holidays.</p>`,
          text: "In the winter holidays, I like {*skating|skate}. We {*go|play} skating on the lake. My cousin {*likes|like} playing in the snow.",
          hint: "After like: -ing. Skating: go or play?",
          fbOk: "Exactly.",
          fbBad: "Check like + -ing and go + -ing.",
          fbText: "I like <b>skating</b>. We <b>go</b> skating: go + -ing. My cousin is <b>she</b>, so it’s <b>likes</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+hol|i|day", "+camp|ing", "gui|+tar", "week|+end"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>hol</u>iday, <u>camp</u>ing: the strong part is at the start. gui<u>tar</u>, week<u>end</u>: it’s at the end."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma asks Oksana. Use the verb <b>do</b>.</p>`,
          before: "Emma: “What do you like",
          after: "in the holidays?” Oksana: “I like swimming.”",
          answer: ["doing", "to do"],
          hint: "Look at the question on the rule screen.",
          fbOk: "Well done!",
          fbBad: "What do you like … ? Do + -ing.",
          fbText: "<b>What do you like doing</b> in the holidays? Like + -ing: <b>doing</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back to Oksana.</p>`,
          text: "Our summer holidays are great too! I {*love|hate} going to the seaside. It’s my favourite place. I can swim {*well|good}. My brother Tom {*likes|like} fishing with Grandad. {*Let’s|Shall} write again soon!",
          hint: "Favourite place: love or hate? How well can Emma swim?",
          fbOk: "Good eye!",
          fbBad: "Look at the rules from this section.",
          fbText: "Her favourite place: she <b>loves</b> it. I can swim <b>well</b>. Tom is <b>he</b>: he <b>likes</b> fishing. <b>Let’s</b> write again soon!"
        }
      ],
      outro: {
        text: "In the holidays there is no school. Ask your friends: “What do you like doing in the holidays?”",
        learned: [
          "Talk about the school holidays.",
          "Ask and answer: What do you like doing?",
          "Read a post about the holidays."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s6l7",
      title: "Hobby day at the club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help on hobby day?",
          body: `<p class="lead">Today is hobby day at the pen-friend club. You help Ms Kravets.</p><p>A new member, Khrystyna, writes to the club. Read her messages and help her. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Khrystyna writes about her free time.</p>`,
          text: "In my free time, I {*read|ride} books and I {*play|go} chess. On Sundays, I {*go|play} for a walk with my dog.",
          pre: "e5s6l1",
          hint: "Books, chess, a walk: which verb goes with each?",
          fbOk: "Yes!",
          fbBad: "Check the free-time lists.",
          fbText: "We <b>read</b> books, <b>play</b> chess and <b>go</b> for a walk."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Khrystyna writes what she likes.</p>`,
          text: "I love {*dancing|danceing}. I don’t like {*running|run}. My sister hates {*swimming|swiming}.",
          pre: "e5s6l2",
          hint: "Love, like, hate + -ing. Check the spelling.",
          fbOk: "Exactly.",
          fbBad: "Look at the -ing list: dance, run, swim.",
          fbText: "Dance → <b>dancing</b> (no e). Don’t like + <b>running</b>. Swim → <b>swimming</b> (mm)."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Khrystyna takes photos every day. What does she write?</p>`,
          opts: [
            "My hobby is taking photos.",
            "My hobby is take photos.",
            "My hobby are taking photos."
          ],
          correct: 0,
          pre: "e5s6l3",
          fbOk: "Right.",
          fbBad: "One hobby: is. And we need -ing.",
          fbText: "My hobby <b>is taking</b> photos: one thing, so <b>is</b>, and an -ing word."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>Khrystyna dances well. She can’t skate. What does she write?</p>`,
          tiles: ["I", "can", "dance", "well,", "but", "I", "can’t", "skate"],
          extra: ["skates"],
          answer: "I can dance well, but I can’t skate.",
          pre: "e5s6l4",
          hint: "First say what she can do. Then but.",
          fbOk: "Well done!",
          fbBad: "After can’t: skate, not skates.",
          fbText: "<b>I can dance well, but I can’t skate.</b> After can and can’t: just the verb. Well goes after the verb."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>A friend writes: “Let’s go to the cinema on Saturday!”</p><p>Khrystyna has got a dance lesson on Saturday. What does she say?</p>`,
          opts: [
            "Good idea! See you on Saturday.",
            "Sorry, I can’t. I’ve got a dance lesson.",
            "Let’s going to the cinema."
          ],
          correct: 1,
          pre: "e5s6l5",
          fbOk: "Good eye!",
          fbBad: "She can’t go. Say sorry and say why.",
          fbText: "Khrystyna can’t go. She says <b>Sorry, I can’t.</b> Then she says why: <b>I’ve got a dance lesson.</b>"
        },
        {
          type: "match",
          sk: "func",
          eyebrow: "Task 6",
          title: "Match the questions and the answers.",
          left: ["Let’s go swimming!", "Can you skate?", "What’s your hobby?", "Do you like dancing?"],
          right: ["Good idea! I love the water.", "No, I can’t.", "Taking photos.", "Yes, I do."],
          pre: "e5s6l5",
          hint: "Can you…? – … I can. Do you…? – … I do.",
          fbOk: "Yes!",
          fbBad: "Check the wrong pairs again.",
          fbText: "Let’s… → <b>Good idea!</b> Can you…? → <b>No, I can’t.</b> Your hobby → <b>Taking photos.</b> Do you…? → <b>Yes, I do.</b>"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>In the summer holidays, I go to my grandma’s village. I like fishing with my grandad. I don’t like getting up early, but fishing is fun!</i></p><p>What does Khrystyna like doing in the holidays?</p>`,
          opts: [
            "skating",
            "playing chess",
            "fishing"
          ],
          correct: 2,
          pre: "e5s6l6",
          fbOk: "Well done!",
          fbBad: "Read the text again: I like…",
          fbText: "Khrystyna writes: “I like <b>fishing</b> with my grandad.”"
        }
      ],
      outro: {
        text: "Well done! Now you can talk about your free time, your hobby and the holidays. And you can make plans with friends.",
        learned: [
          "Say what you do in your free time.",
          "Say what you love, like and hate doing.",
          "Say what you can and can’t do.",
          "Make plans: Let’s… / Shall we…?"
        ]
      }
    }
  ]
});
