/* Слід · Англійська мова, 7 клас — «Cinema and theatre» (e7s4)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Кіно і театр» — відвідування театру, кінотеатру; жанри; елементи інтер'єру театру (с. 32, розд. 5.2.1);
   функції — пропонувати, приймати, відхиляти; надавати оцінку; висловлювати враження; відгук про фільм (с. 31);
   граматика B1 (с. 34–35, розд. 5.4.1): Adjectives — comparatives with much, a bit, even; modifying: enough, too + to-infinitive;
   Clause — comparatives: (not) as … as, the same as; Could — suggestions; -ed / -ing adjectives — наш вибір (лексика B1);
   повторення — Let’s… (e5s6l5), too + adjective (e6s2l6), comparatives (e5s5l3–l4):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   План — content/eng/plan.js (reports/verify/plan-eng-g7-8-9.md, curate-eng-plan-g7-9.md).
   Герої — та сама серія, що в 4–6 кл., на три роки старші, ніж у 4 кл. (Oksana — 13). Oksana і брат Dmytro — Zelena Dolyna
   (кінотеатру немає — e5s7), Andrii і Sofiia — Kyiv, друг Bohdan; Mariia — Kharkiv, подруга Polina; Taras — Lviv, сестра Zlata,
   друг Ostap; Emma і брат Tom — England. Нових героїв немає. Фільми й вистави в розділі вигадані (назви, сюжети, вікові
   обмеження) — справжніх вікових позначок не подаємо (задача, «Специфіка»).
   Україна: Lviv Opera House (Львівська опера), відкрита 1900 р. — два джерела в нотатках задачі.
   Звуку немає (D-055 п. 4); діалоги — репліками в body + gaps / choice (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос — Cambridge Dictionary (URL — tasks/…/write-eng-g7-e7s4.md, «Нотатки агента»).
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s4",
  grade: 7,
  weeks: [16, 20],
  title: "Cinema and theatre",
  why: "To talk about films, plays and their genres. And to give your opinion about a film or a play.",
  requires: ["e5s5l3", "e5s5l4", "e6s2l6", "e6s1l5", "e5s6l5", "e4s3l5"],
  meta: { author: "writer-e7s4", created: "2026-11-25", factcheck: null, teacher: null },
  badges: [
    { id: "e7s4boss", name: "Film critic", icon: "trophy", desc: "Finish the final lesson “Cinema and theatre”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s4l1",
      title: "Comedy, cartoon or adventure film? Film genres",
      short: "Film genres",
      icon: "play",
      status: "draft",
      why: "There are many kinds of films. Learn their names and choose a film you like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What shall we watch?",
          body: `<p class="lead">Andrii and Sofiia are at a cinema in Kyiv. They read the list of films.</p><p><i>Captain Cat – a cartoon.<br>Lost in the Jungle – an adventure film.<br>Robots on Mars – a science fiction film.<br>The Silent House – a horror film.<br>Grandma’s Big Day – a comedy.<br>Ocean Life – a documentary.</i></p><p><b>Andrii:</b> What kind of films do you like?<br><b>Sofiia:</b> I want to laugh today.<br><b>Andrii:</b> And I love adventure films!</p><p>Comedy, cartoon, documentary: what do these words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Sofiia wants to laugh. Which film is the best for her?</p>`,
          opts: [
            "the horror film",
            "the comedy",
            "the documentary"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>comedy</b> is a funny film. A horror film is scary. The next screen has more kinds of films."
        },
        {
          type: "info",
          title: "Kinds of films",
          body: `<ul><li>a <b><u>com</u>edy</b> → it’s funny, you laugh a lot</li><li>a <b>car<u>toon</u></b> → the people and animals are drawings</li><li>an <b>ad<u>ven</u>ture film</b> → heroes go on a dangerous journey</li><li>a <b>science <u>fic</u>tion film</b> → space, robots, the future</li><li>a <b><u>hor</u>ror film</b> → it’s very scary</li><li>a <b>docu<u>men</u>tary</b> → real facts about real life</li></ul><p>In British English, we say <b>film</b> and <b>cinema</b>. Americans often say <i>movie</i>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a comedy", "a horror film", "a science fiction film", "a documentary", "a cartoon"],
          right: ["It’s funny. You laugh a lot.", "It’s very scary.", "It’s about space, robots or the future.", "It gives real facts about animals or history.", "The people and animals in it are drawings."],
          hint: "Which film is funny? Which one is scary?",
          fbOk: "Well done!",
          fbBad: "Look at the list of films again.",
          fbText: "A <b>comedy</b> is funny. A <b>horror film</b> is scary. A <b>science fiction film</b> is about space or the future. A <b>documentary</b> gives real facts. In a <b>cartoon</b>, the people and animals are drawings."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+com|e|dy", "car|+toon", "ad|+ven|ture", "+hor|ror"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the list of films.",
          fbText: "<u>com</u>edy, <u>hor</u>ror: the first part is strong. car<u>toon</u>: the last part. ad<u>ven</u>ture: the middle part."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Tom is eleven. He loves space and robots. Which film is the best for him?</p>`,
          opts: [
            "a science fiction film",
            "a documentary about birds",
            "a comedy about a family"
          ],
          correct: 0,
          hint: "Space and robots: which kind of film?",
          fbOk: "Right.",
          fbBad: "Which kind of film is about space and robots?",
          fbText: "Space and robots → a <b>science fiction film</b>. A documentary gives real facts, and a comedy is funny."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the words that are kinds of films.",
          body: `<p>Emma writes to Mariia.</p>`,
          text: "On Friday, Tom and I went to the cinema. We saw a [comedy] about a dog. Tom loves [cartoons], but I like [documentaries] about animals.",
          hint: "There are three kinds of films in the message.",
          fbOk: "Good eye!",
          fbBad: "Cinema, dog and animals are not kinds of films.",
          fbText: "The kinds of films: a <b>comedy</b>, <b>cartoons</b> and <b>documentaries</b>. The cinema is a place, not a kind of film."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>This film isn’t a story. It shows real people and real animals. It gives you facts.</p>`,
          before: "It’s a",
          after: ".",
          answer: "documentary",
          hint: "Look at the list: real facts about real life.",
          fbOk: "Well done!",
          fbBad: "Which kind of film gives real facts?",
          fbText: "Real facts about real life → a <b>documentary</b>."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "There is no cinema in Zelena Dolyna, so we go to Poltava. My little brother Dmytro loves {*cartoons|documentaries} with talking animals. Dad likes {*documentaries|comedies}, because he loves real facts about history. I never watch {*horror films|comedies}: they’re too scary for me!",
          hint: "Talking animals, real facts, too scary: which kinds of films?",
          fbOk: "Exactly.",
          fbBad: "Look at the clues: talking animals, real facts, too scary.",
          fbText: "Animals can’t talk in real life, so Dmytro loves <b>cartoons</b>. Real facts about history → <b>documentaries</b>. Too scary → <b>horror films</b>."
        }
      ],
      outro: {
        text: "Comedy, cartoon, documentary: now you can name kinds of films. In British English, we go to the cinema to see a film.",
        learned: [
          "Name kinds of films: a comedy, a cartoon, a documentary.",
          "Ask: What kind of films do you like?",
          "Choose a film for a friend."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s4l2",
      title: "At the theatre: the stage, the seats, the box office",
      short: "At the theatre",
      icon: "star",
      status: "draft",
      why: "A theatre has its own words. Learn them and find your seat.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Where is Taras going on Saturday?",
          body: `<p class="lead">Taras writes to Emma from Lviv.</p><p><i>On Saturday, I’m going to the Lviv Opera House with my sister Zlata. We’re going to see a ballet! The building is really beautiful. It opened in 1900. I bought our tickets at the box office yesterday. Our seats are in Row 3, so we can see the stage very well.</i></p><p>Box office, row, stage: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras bought the tickets at the <b>box office</b>. What is a box office?</p>`,
          opts: [
            "the place where the dancers dance",
            "a small box for your ticket",
            "the place where people buy tickets"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The <b>box office</b> is the place in a theatre or a cinema where people buy tickets."
        },
        {
          type: "info",
          title: "In a theatre",
          body: `<ul><li>the <b>stage</b> → the actors and dancers are on it</li><li>the <b><u>au</u>dience</b> → the people who watch</li><li>a <b>seat</b> in a <b>row</b> → Row 3, Seat 12</li><li>the <b><u>box</u> office</b> → you buy tickets there</li><li>the <b><u>cur</u>tain</b> → it opens at the start of a play</li><li>the <b><u>in</u>terval</b> → a short break in the middle of a play</li></ul><p>A <b>play</b> is a story. Actors perform it on a stage.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["You buy tickets at the", "The actors are on the", "The people who watch are the", "Before the play, you can’t see the stage behind the", "In the middle of the play, there is a short break: the"],
          right: ["box office.", "stage.", "audience.", "curtain.", "interval."],
          hint: "Tickets → where? A short break → what?",
          fbOk: "Well done!",
          fbBad: "Look at the theatre words again.",
          fbText: "Tickets → the <b>box office</b>. Actors → the <b>stage</b>. People who watch → the <b>audience</b>. Behind the <b>curtain</b> you can’t see the stage. A short break → the <b>interval</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Taras’s ticket says:</p><p><i>Lviv Opera House · Ballet · Saturday, 6.30 pm · Row 3 · Seat 12</i></p><p>Zlata sits next to Taras. What can her seat be?</p>`,
          opts: [
            "Row 13, Seat 3",
            "Row 3, Seat 13",
            "Row 12, Seat 3"
          ],
          correct: 1,
          hint: "Next to Taras: the same row.",
          fbOk: "Right.",
          fbBad: "Zlata and Taras are in the same row.",
          fbText: "Next to Taras means the same row: <b>Row 3</b>. Seat 13 is next to Seat 12."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+au|di|ence", "+in|ter|val", "+cur|tain"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the theatre words.",
          fbText: "<u>au</u>dience, <u>in</u>terval, <u>cur</u>tain: the first part is strong in all three words."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>The play starts in five minutes. The audience can’t see the actors yet.</p>`,
          before: "The",
          after: "is still closed.",
          answer: "curtain",
          hint: "What opens at the start of a play?",
          fbOk: "Good eye!",
          fbBad: "Look at the theatre words: what opens at the start?",
          fbText: "The <b>curtain</b> is closed. When the play starts, it opens."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about her evening in England.</p>`,
          text: "Yesterday, Mum and I went to the theatre. We bought our tickets at the {*box office|interval}. Our {*seats|stages} were in Row 2, very near the stage. In the {*interval|curtain}, we had ice cream. At the end, the whole {*audience|stage} clapped for a long time.",
          hint: "Where do you buy tickets? When is there a short break?",
          fbOk: "Exactly.",
          fbBad: "Look at the theatre words again.",
          fbText: "Tickets → the <b>box office</b>. Row 2 → our <b>seats</b>. A short break → the <b>interval</b>. People who watch → the <b>audience</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Taras writes after the ballet.</p><p><i>The ballet was amazing! The Lviv Opera House is even more beautiful inside. Our seats were great. In the interval, Zlata and I took photos of the building. Then the curtain opened again, and the dancers came back on stage.</i></p><p>What did Taras and Zlata do in the interval?</p>`,
          opts: [
            "They danced on the stage.",
            "They bought tickets at the box office.",
            "They took photos of the building."
          ],
          correct: 2,
          hint: "Find the word interval in the text.",
          fbOk: "Well done!",
          fbBad: "Read the sentence with interval again.",
          fbText: "In the <b>interval</b>, they <b>took photos of the building</b>. The dancers were on the stage, not Taras and Zlata."
        }
      ],
      outro: {
        text: "The stage, the audience, the box office, the interval: now you can talk about a visit to the theatre. The Lviv Opera House opened in 1900.",
        learned: [
          "Name the parts of a theatre: the stage, the curtain, the box office.",
          "Find your row and seat on a ticket.",
          "Tell a friend about a visit to the theatre."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s4l3",
      title: "We could see a play! Suggestions",
      short: "Suggestions",
      icon: "users",
      status: "draft",
      why: "Make plans with friends: give an idea, say yes or say no politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What shall we do on Saturday?",
          body: `<p class="lead">Mariia chats with her friend Polina in Kharkiv.</p><p><b>Polina:</b> What shall we do on Saturday?<br><b>Mariia:</b> We could see a play at the theatre.<br><b>Polina:</b> Hmm, I’m not sure. Plays are a bit long for me. Why don’t we go to the cinema?<br><b>Mariia:</b> That sounds great! There’s a new comedy.<br><b>Polina:</b> OK, let’s buy the tickets now.</p><p>We could…, Why don’t we…?: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia says: “We could see a play.” What does she mean?</p>`,
          opts: [
            "She can see the stage very well.",
            "She has got an idea: a play.",
            "She saw a play last week."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>We could</b> + verb gives an idea for you and your friend. It’s a <b>suggestion</b>."
        },
        {
          type: "info",
          title: "Making suggestions",
          body: `<p>Three ways to give an idea:</p><ul><li><b>Let’s</b> go to the cinema!</li><li><b>We could</b> see a play.</li><li><b>Why don’t we</b> watch a cartoon?</li></ul><p>After all three: the verb with no <i>to</i>.<br>Not: <s>We could to see</s>, <s>Why don’t we going</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "We could {*see|to see|seeing} a cartoon on Sunday. Why don’t we {*go|to go|going} to the theatre? Let’s {*buy|to buy|buying} the tickets online.",
          hint: "After We could, Why don’t we and Let’s: the verb with no to.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: no to, no -ing.",
          fbText: "We could <b>see</b>. Why don’t we <b>go</b>? Let’s <b>buy</b>. After all three, we use the verb with no <i>to</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii gives Bohdan an idea for Friday evening.</p>`,
          tiles: ["Why", "don’t", "we", "watch", "a comedy?"],
          answer: "Why don’t we watch a comedy?",
          extra: ["to"],
          keepCase: true,
          hint: "Start with Why. Do you need to?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: Why don’t we + verb.",
          fbText: "<b>Why don’t we watch a comedy?</b> After <i>Why don’t we</i>, the verb comes with no <i>to</i>."
        },
        {
          type: "info",
          title: "Saying yes or no",
          body: `<p><b>Yes:</b></p><ul><li>Good idea!</li><li>That sounds great!</li><li>OK, why not?</li></ul><p><b>No:</b> be polite, say why and give a new idea.</p><ul><li>Sorry, I can’t. I’m busy on Saturday.</li><li>I’m not sure. Horror films are too scary for me. We could see a comedy.</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the answers.",
          body: `<p>Is it yes or no?</p>`,
          bins: ["Yes", "No"],
          items: [
            ["That sounds great!", 0],
            ["OK, why not?", 0],
            ["Good idea! Let’s meet at five.", 0],
            ["Sorry, I can’t. I’m busy on Saturday.", 1],
            ["I’m not sure. Plays are too long for me.", 1],
            ["Sorry, I don’t like cartoons. Why don’t we see a comedy?", 1]
          ],
          fbOk: "Well done!",
          fbBad: "Look for sorry and I’m not sure.",
          fbText: "Yes: <b>That sounds great!</b>, <b>OK, why not?</b>, <b>Good idea!</b> No: <b>Sorry, I can’t</b> and <b>I’m not sure</b>, then a reason or a new idea."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Bohdan:</b> Why don’t we go to the cinema on Sunday?</p><p>Andrii wants to go. But on Sunday morning, he has got a chess lesson. What does he say?</p>`,
          opts: [
            "Good idea! We could go on Sunday morning.",
            "Sorry, I can’t. I don’t go to the cinema.",
            "Good idea! But I’m busy in the morning. We could go in the afternoon."
          ],
          correct: 2,
          hint: "Andrii wants to go. When is he busy?",
          fbOk: "Right.",
          fbBad: "Andrii says yes, but not in the morning.",
          fbText: "Andrii wants to go, so he says <b>Good idea!</b> He is busy in the morning, so he gives a new idea: <b>We could go in the afternoon.</b>"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Polina’s message is wrong.</p>`,
          text: "Why don’t we [to] watch a film tonight? We could see the new comedy at seven.",
          hint: "Look at the words after Why don’t we.",
          fbOk: "Good eye!",
          fbBad: "After Why don’t we: the verb with no to.",
          fbText: "Not <s>Why don’t we to watch</s>, but <b>Why don’t we watch</b> a film? <b>We could see</b> is correct."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the dialogue.",
          body: `<p>Sofiia and Andrii are making plans in Kyiv.</p>`,
          text: "Sofiia: What shall we do this evening? Andrii: Why don’t we {*watch|to watch} the new science fiction film? Sofiia: {*I’m not sure|That sounds great}. Robots are a bit boring for me. We {*could|could to} see a play instead. Andrii: OK, {*why not|I’m busy}? Let’s go to the theatre!",
          hint: "Sofiia doesn’t like robots. Then Andrii says yes.",
          fbOk: "Well done!",
          fbBad: "Read the dialogue again: does Sofiia like the idea? Does Andrii?",
          fbText: "Why don’t we <b>watch</b>…? Sofiia doesn’t like robots: <b>I’m not sure</b>. We <b>could</b> see a play. Andrii says yes: <b>OK, why not?</b>"
        }
      ],
      outro: {
        text: "Let’s…, We could…, Why don’t we…? – three ways to give an idea. Say yes, or say no politely and give a new idea.",
        learned: [
          "Make suggestions: We could see a play. Why don’t we go to the cinema?",
          "Say yes: That sounds great! OK, why not?",
          "Say no politely and give a new idea."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s4l4",
      title: "Bored or boring? Interested or interesting?",
      short: "Bored or boring?",
      icon: "bulb",
      status: "draft",
      why: "Say how a film or a play was. And say how you felt.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who was bored?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>Yesterday, Tom and I watched a documentary about the sea. I thought it was really interesting. But Tom was bored. After ten minutes, he said: “This film is boring! I want an adventure film!”</i></p><p>Bored or boring: which word is about Tom? Which word is about the film?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence tells us how Tom felt?</p>`,
          opts: [
            "Tom was bored.",
            "The film was boring."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Tom was bored</b> tells us how Tom felt. <b>The film was boring</b> tells us what the film was like."
        },
        {
          type: "info",
          title: "-ed or -ing?",
          body: `<ul><li><b>-ing</b> → what a film, a book or a play is like:<br>The film was <b>boring</b>. The book is <b>interesting</b>.</li><li><b>-ed</b> → how a person feels:<br>Tom was <b>bored</b>. I’m <b>interested in</b> films.</li></ul><p>bored – boring, interested – interesting, excited – exciting, tired – tiring</p><p><i>interested <b>in</b></i>, <i>excited <b>about</b></i>: I’m excited about the trip.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes more about Tom.</p>`,
          text: "The documentary was really {*interesting|interested}. But Tom was {*bored|boring}, because there was no action in it. Is he {*interested|interesting} in sea animals? Not really. He likes adventure films. They’re more {*exciting|excited} for him.",
          hint: "Is it about a person’s feelings or about a film?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: -ing for a film, -ed for how a person feels.",
          fbText: "The documentary was <b>interesting</b>. Tom felt <b>bored</b>, because the film had no action. <b>Interested in</b> sea animals: how he feels. Adventure films are <b>exciting</b>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "I’m interested in cartoons.",
            "The film was very bored.",
            "We were excited about the trip to the theatre.",
            "The play was three hours long. It was tiring.",
            "Sofiia is interesting in science fiction."
          ],
          correct: [0, 2, 3],
          hint: "-ing for a film or a play, -ed for a person’s feelings. Look at in and about too.",
          fbOk: "Well done!",
          fbBad: "Is each sentence about a person’s feelings or about a film?",
          fbText: "Correct: <b>interested in</b>, <b>excited about</b>, a long play was <b>tiring</b>. Not <s>very bored</s> for a film: the film was <b>very boring</b>. Not <s>interesting in</s>: Sofiia is <b>interested in</b> science fiction."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii watches every film about space. He reads books about robots too.</p>`,
          before: "Andrii is very",
          after: "in science fiction.",
          answer: "interested",
          hint: "It’s about Andrii’s feelings. Look at the word in after the gap.",
          fbOk: "Good eye!",
          fbBad: "A person + in: -ed or -ing?",
          fbText: "A person’s feelings + <b>in</b>: Andrii is very <b>interested</b> in science fiction."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s message is wrong.</p>`,
          text: "The new cartoon was so funny! But Andrii was [boring], because he doesn’t like cartoons.",
          hint: "How did Andrii feel?",
          fbOk: "Right.",
          fbBad: "Is the sentence about the cartoon or about Andrii’s feelings?",
          fbText: "Andrii didn’t like the cartoon, so he <b>was bored</b>. <i>Andrii was boring</i> means people didn’t like Andrii!"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana tells Emma about her plans.</p>`,
          tiles: ["I’m", "really", "excited", "about", "the play"],
          answer: "I’m really excited about the play.",
          extra: ["exciting"],
          keepCase: true,
          hint: "Start with I’m. How does Oksana feel?",
          fbOk: "Yes!",
          fbBad: "Oksana’s feelings: -ed or -ing?",
          fbText: "<b>I’m really excited about the play.</b> It’s about Oksana’s feelings, so it’s <b>excited</b>, with <b>about</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana writes about Sunday.</p><p><i>Last Sunday, we went to a theatre in Poltava. The play was for children. It was about a brave girl and a dragon. I was a bit bored at the start, but then the story got really exciting! Dmytro wasn’t bored at all. He clapped all the time. On the bus home, we were very tired, but happy.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Dmytro was bored.",
            "The start of the play was boring for Oksana.",
            "The end of the play was boring."
          ],
          correct: 1,
          hint: "Find the words bored and exciting in the text.",
          fbOk: "Well done!",
          fbBad: "Read about the start and the end of the play again.",
          fbText: "Oksana was a bit <b>bored at the start</b>, so the start was boring for her. Then the story got <b>exciting</b>. Dmytro <b>wasn’t bored</b> at all."
        }
      ],
      outro: {
        text: "-ing tells us what a film or a play is like: boring, exciting. -ed tells us how a person feels: bored, excited.",
        learned: [
          "Say what a film is like: It was boring. It was exciting.",
          "Say how you felt: I was bored. I’m interested in films.",
          "Choose -ed or -ing in a sentence."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s4l5",
      title: "Much better, a bit longer, not as funny as the book",
      short: "Much better",
      icon: "scale",
      status: "draft",
      why: "Compare a film and a book, or two films. Say how big the difference is.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Is the film better than the book?",
          body: `<p class="lead">Andrii and Bohdan come out of a cinema in Kyiv.</p><p><b>Bohdan:</b> The film was great!<br><b>Andrii:</b> It was good, but the book is much better.<br><b>Bohdan:</b> The first film was two hours. This one was two hours and ten minutes.<br><b>Andrii:</b> Yes, it was a bit longer. And it wasn’t as funny as the book.</p><p>Much better, a bit longer: what do <b>much</b> and <b>a bit</b> tell us?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Film A is 90 minutes long. Film B is 95 minutes long.</p><p>Film B is ___ longer than film A.</p>`,
          opts: [
            "a bit",
            "much"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Five minutes is a small difference: film B is <b>a bit</b> longer."
        },
        {
          type: "info",
          title: "Much, a bit, even",
          body: `<ul><li><b>much</b> + comparative → a big difference:<br>90 minutes → 180 minutes: <b>much longer</b></li><li><b>a bit</b> + comparative → a small difference:<br>90 minutes → 95 minutes: <b>a bit longer</b></li><li><b>even</b> + comparative → both are good, but the second one is better:<br>The book is good. The film is <b>even better</b>!</li></ul><p>Not: <s>very better</s>, <s>very longer</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Tickets at a cinema in Kyiv: a cartoon – ₴150, a comedy – ₴160, a 3D adventure film – ₴400.</p>`,
          text: "A ticket for the comedy is {*a bit|much} more expensive than a ticket for the cartoon. A ticket for the adventure film is {*much|a bit} more expensive than a ticket for the comedy. The cartoon is {*much|very} cheaper than the adventure film.",
          hint: "Compare the prices: ₴150 and ₴160, ₴160 and ₴400.",
          fbOk: "Exactly.",
          fbBad: "Is the difference big or small? And remember: not very + comparative.",
          fbText: "₴10 is a small difference: <b>a bit</b> more expensive. ₴240 is a big difference: <b>much</b> more expensive. We say <b>much cheaper</b>, not <s>very cheaper</s>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia liked the first Captain Cat cartoon. She liked the second one more!</p><p>The first cartoon was good. The second one was ___ better!</p>`,
          opts: [
            "very",
            "even",
            "too"
          ],
          correct: 1,
          hint: "Both are good, but the second one is better.",
          fbOk: "Right.",
          fbBad: "Look at the rule: both are good, the second one is better.",
          fbText: "Both cartoons were good, and the second one was better: <b>even better</b>. We can’t say <s>very better</s> or <s>too better</s>."
        },
        {
          type: "info",
          title: "As … as, the same as",
          body: `<ul><li><b>as</b> + adjective + <b>as</b> → the same:<br>The cartoon is <b>as long as</b> the comedy. (90 minutes and 90 minutes)</li><li><b>not as</b> + adjective + <b>as</b> → less:<br>The film <b>isn’t as funny as</b> the book. = The book is funnier.</li><li><b>the same as</b>:<br>The ending of the film is <b>the same as</b> the ending of the book.</li></ul><p>Not: <s>the same like</s>, <s>as funny than</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The cartoon is as long {*as|than} the documentary: both are 90 minutes. The film isn’t {*as|more} exciting as the book. A ticket for Sofiia costs the same {*as|like} a ticket for Andrii.",
          hint: "as … as, the same as.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: as … as, the same as.",
          fbText: "as long <b>as</b>, isn’t <b>as</b> exciting as, the same <b>as</b>. We don’t say <s>as long than</s> or <s>the same like</s>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Bohdan liked the book about Captain Cat more than the film.</p>`,
          tiles: ["The film", "isn’t", "as", "good", "as", "the book"],
          answer: "The film isn’t as good as the book.",
          extra: ["than"],
          hint: "Which is better for Bohdan: the book or the film?",
          fbOk: "Yes!",
          fbBad: "Bohdan liked the book more. So the film isn’t as good as…",
          fbText: "<b>The film isn’t as good as the book.</b> = The book is better. We use <b>as … as</b>, not <i>than</i>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p><i>Captain Cat (cartoon): 85 minutes, ₴150<br>Robots on Mars (science fiction): 130 minutes, ₴150</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Captain Cat is as long as Robots on Mars.",
            "Robots on Mars is much more expensive than Captain Cat.",
            "Robots on Mars is much longer than Captain Cat."
          ],
          correct: 2,
          hint: "Compare the minutes and the prices.",
          fbOk: "Right.",
          fbBad: "Compare 85 and 130 minutes. Compare the prices too.",
          fbText: "130 minutes and 85 minutes: a big difference, so Robots on Mars is <b>much longer</b>. The tickets cost <b>the same</b>: ₴150."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>A ticket for the cartoon is ₴150. A ticket for the comedy is ₴150 too.</p>`,
          before: "A ticket for the comedy costs the same",
          after: "a ticket for the cartoon.",
          answer: "as",
          hint: "the same … ?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: the same …",
          fbText: "Both tickets are ₴150: the comedy costs <b>the same as</b> the cartoon."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Taras about Captain Cat.</p>`,
          text: "I read the book first, and then I saw the film. The book is 100 pages, but the film is three hours! It’s {*much|very} longer than I thought. The film is good, but the book is {*even|very} better. The film isn’t as funny {*as|than} the book. But the ending is the {*same|as} as in the book, and I love it!",
          hint: "Three hours is a lot. The film is good, but the book is better.",
          fbOk: "Well done!",
          fbBad: "Look at the rules: much, even, as … as, the same as.",
          fbText: "Three hours: <b>much</b> longer. The film is good, the book is <b>even</b> better. isn’t as funny <b>as</b>. The ending is the <b>same</b> as in the book."
        }
      ],
      outro: {
        text: "Much longer, a bit longer, even better: show how big the difference is. Not as funny as, the same as: compare two things.",
        learned: [
          "Compare with much, a bit and even: much better, a bit longer.",
          "Use as … as and not as … as.",
          "Say what is the same: the same as."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s4l6",
      title: "Old enough to watch it? A film review",
      short: "Film review",
      icon: "book",
      status: "draft",
      why: "Say who a film is good for. Then write a short review of a film.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Can Dmytro come too?",
          body: `<p class="lead">Oksana wants to see a new adventure film in Poltava. The poster says: <i>For people aged 12 and over.</i></p><p><b>Dmytro:</b> Can I come too?<br><b>Oksana:</b> Sorry, you aren’t old enough to watch it. And some parts are too scary to watch at your age.<br><b>Dmytro:</b> Oh no!<br><b>Oksana:</b> Why don’t we watch a cartoon at home on Sunday?</p><p>Old enough, too scary to watch: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Dmytro <b>isn’t old enough</b> to watch the film. What does it mean?</p>`,
          opts: [
            "He is older than Oksana.",
            "He is too young for the film.",
            "He doesn’t like adventure films."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Not old enough</b> = too young. The film is for people aged 12 and over, and Dmytro is younger."
        },
        {
          type: "info",
          title: "Enough and too + to",
          body: `<ul><li>adjective + <b>enough to</b> + verb → it’s OK:<br>Oksana is 13. She is <b>old enough to watch</b> it.</li><li><b>not</b> + adjective + <b>enough to</b> → it’s a problem:<br>Dmytro <b>isn’t old enough to watch</b> it.</li><li><b>too</b> + adjective + <b>to</b> + verb → it’s a problem:<br>The film is <b>too scary to watch</b> at his age.</li></ul><p><b>enough</b> comes after the adjective. Not: <s>enough old</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma is 13, and Tom is 11. The film is for people aged 12 and over. It ends at 11 pm.</p>`,
          text: "Emma is {*old enough|enough old} to watch the film. But Tom is {*too|enough} young to watch it. And at 11 pm, he is too tired {*to watch|watching} a long film.",
          hint: "enough after the adjective; too + adjective + to + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: old enough, too young to…",
          fbText: "Emma is <b>old enough</b> to watch it. Tom is <b>too</b> young to watch it. At 11 pm, he is too tired <b>to watch</b> a long film."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Tom is eleven. The film is for people aged 12 and over. Mum explains.</p>`,
          tiles: ["You", "aren’t", "old", "enough", "to watch", "it"],
          answer: "You aren’t old enough to watch it.",
          extra: ["too"],
          keepCase: true,
          hint: "Start with You aren’t. Where does enough go?",
          fbOk: "Yes!",
          fbBad: "enough comes after the adjective: old enough.",
          fbText: "<b>You aren’t old enough to watch it.</b> <i>enough</i> comes after <i>old</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Taras is in Row 20. The stage is very far, and Taras can’t see the dancers well. What does he say?</p>`,
          opts: [
            "My seat is near enough to the stage to see the dancers well.",
            "My seat is too near the stage to see the dancers well.",
            "My seat is too far from the stage to see the dancers well."
          ],
          correct: 2,
          hint: "Is Row 20 near or far? Is it a problem?",
          fbOk: "Right.",
          fbBad: "Can Taras see the dancers well?",
          fbText: "The seat is far, and that’s a problem: <b>too far from the stage to see</b> the dancers well."
        },
        {
          type: "info",
          title: "How to write a film review",
          body: `<ol><li>The name and the kind of film: <i>Ocean Friends is a cartoon.</i></li><li>What it’s about: <i>It’s about a little fish and her friends.</i></li><li>What you liked: <i>The story is exciting.</i></li><li>Who it is good for: <i>It isn’t too scary, so it’s fine for young children.</i></li><li>Your mark: <i>4 out of 5.</i></li></ol>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Mariia’s review of a cartoon.</p>`,
          items: [
            "Snow Fox is a cartoon.",
            "It’s about a fox who lives in the mountains.",
            "The story is exciting, and the music is beautiful.",
            "It isn’t too scary, so it’s great for families.",
            "My mark: 5 out of 5."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Look at the plan of a review: name, what it’s about, what you liked, who it’s for, your mark.",
          fbOk: "Well done!",
          fbBad: "Start with the name and the kind of film. End with your mark.",
          fbText: "Name and kind of film → what it’s about → what Mariia liked → who it’s for → her mark."
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>Bohdan writes a review.</p><p><i>Lost in the Jungle is an adventure film. It’s about a boy and his dog. They get lost in the jungle and look for the way home. I was a bit bored at the start, but the middle part is really exciting. Some parts are quite scary, so I think it’s too scary for young children. It isn’t as funny as a comedy, but the dog is great! My mark: 4 out of 5.</i></p><p>What is true?</p>`,
          opts: [
            "Bohdan was bored all the time.",
            "The middle part of the film is exciting.",
            "The film is good for young children.",
            "Bohdan gives the film 4 out of 5."
          ],
          correct: [1, 3],
          hint: "Find bored, exciting, young children and the mark in the text.",
          fbOk: "Well done!",
          fbBad: "Read about the start, the middle part and young children again.",
          fbText: "Bohdan was bored only <b>at the start</b>. The middle part is <b>exciting</b>. It’s <b>too scary for young children</b>. His mark is <b>4 out of 5</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the review.",
          body: `<p>Taras writes a review for his little sister’s class blog.</p>`,
          text: "Captain Cat is a {*cartoon|documentary} about a cat who flies a plane. It’s for children, but I wasn’t {*bored|boring} at all. It’s funny and really {*exciting|excited}. It isn’t scary, so my little sister Zlata is old {*enough|too} to watch it. She loved it! My mark: 5 out of 5.",
          hint: "A cat who flies a plane: is it real life? How did Taras feel?",
          fbOk: "Well done!",
          fbBad: "Check: kind of film, -ed or -ing, enough.",
          fbText: "A cat who flies a plane → a <b>cartoon</b>. Taras’s feelings: I wasn’t <b>bored</b>. The film is <b>exciting</b>. Zlata is old <b>enough</b> to watch it."
        }
      ],
      outro: {
        text: "Old enough to watch, too scary to watch: say who a film is good for. Then write a short review with your mark.",
        learned: [
          "Use enough and too + to: old enough to watch, too scary to watch.",
          "Write a short film review in five steps.",
          "Give your opinion and a mark."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s4l7",
      title: "A weekend of films and plays",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e7s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras and Ostap plan a weekend?",
          body: `<p class="lead">Taras and his friend Ostap want to go to the cinema and the theatre in Lviv this weekend.</p><p>Help them choose, buy tickets and write a review. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Ostap wants real facts about animals in the Carpathians. Which film is the best for him?</p>`,
          opts: [
            "a horror film",
            "a comedy",
            "a documentary"
          ],
          correct: 2,
          pre: "e7s4l1",
          fbOk: "Right.",
          fbBad: "Which kind of film gives real facts?",
          fbText: "Real facts about real life → a <b>documentary</b>. A horror film is scary, and a comedy is funny."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Ostap:</b> Why don’t we see a play at the theatre on Saturday?</p><p>Taras likes the idea. What does he say?</p>`,
          opts: [
            "Sorry, I can’t. I’m busy on Saturday.",
            "That sounds great! We could meet at five.",
            "I’m not sure. Plays are too long for me."
          ],
          correct: 1,
          pre: "e7s4l3",
          fbOk: "Yes!",
          fbBad: "Taras likes the idea. Which answer says yes?",
          fbText: "Taras says yes: <b>That sounds great!</b> And he gives an idea: <b>We could meet at five.</b>"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about Saturday at the theatre.</p>`,
          text: "We bought our tickets at the {*box office|stage}. Our seats were in Row 4, near the {*stage|interval}. In the {*interval|audience}, we had some juice.",
          pre: "e7s4l2",
          fbOk: "Exactly.",
          fbBad: "Tickets → where? A short break → what?",
          fbText: "Tickets → the <b>box office</b>. Actors are on the <b>stage</b>. A short break → the <b>interval</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Ostap writes about the play.</p>`,
          text: "The play was really {*interesting|interested}. I wasn’t {*bored|boring} at all. Taras is very {*interested|interesting} in theatre now.",
          pre: "e7s4l4",
          fbOk: "Well done!",
          fbBad: "-ing for a play, -ed for how a person feels.",
          fbText: "The play was <b>interesting</b>. Ostap’s feelings: I wasn’t <b>bored</b>. Taras is <b>interested in</b> theatre."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>On Sunday, they saw a film. The first part was 100 minutes long. This new part is 105 minutes.</p>`,
          text: "The new part is {*a bit|much} longer than the first part. The first part was good, but the new one is {*even|very} better. The new part isn’t {*as|than} funny as the first part, but it’s more exciting.",
          pre: "e7s4l5",
          fbOk: "Exactly.",
          fbBad: "Five minutes: a big or a small difference? Look at the rules: even, as … as.",
          fbText: "Five minutes: <b>a bit</b> longer. Both are good: <b>even</b> better. isn’t <b>as</b> funny as."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Zlata, Taras’s little sister, wants to see the film too. But it’s for people aged 12 and over. Taras explains.</p>`,
          tiles: ["You", "aren’t", "old", "enough", "to see", "it"],
          answer: "You aren’t old enough to see it.",
          extra: ["too"],
          keepCase: true,
          pre: "e7s4l6",
          fbOk: "Good eye!",
          fbBad: "enough comes after the adjective.",
          fbText: "<b>You aren’t old enough to see it.</b> <i>enough</i> comes after <i>old</i>."
        }
      ],
      outro: {
        text: "Well done! Now you can choose a film, plan a trip to the theatre with a friend and say what you think about a film.",
        learned: [
          "Name kinds of films and the parts of a theatre.",
          "Make suggestions and answer them politely.",
          "Compare films and books: much better, not as funny as.",
          "Write a short film review."
        ]
      }
    }
  ]
});
