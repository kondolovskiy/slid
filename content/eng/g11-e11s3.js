/* Слід · Англійська мова, 11 клас — «Leisure: clubs, film, TV and the internet» (e11s3)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, 11 кл., B2): тема «Дозвілля» —
   клуби за інтересами; кіно, театр, телебачення, Інтернет; улюблена вистава/фільм; характеристика фільму/вистави/телепрограми
   (с. 23–24; фестивалі — у e11s4); функція — демонструвати зацікавленість у предметі розмови (с. 23; l4, l6);
   граматика (с. 25): compound adjectives — нове в нашому плані; question tags (all tenses) — повт. e8s1l4 (Present Simple,
   be, aren’t I), нове: усі часи й модальні, Let’s … shall we?, imperative + will you?, there is → isn’t there?;
   reply questions — (наш), для функції; обсяги B2 (с. 21): https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md (§6: requires e7s4, e8s1 l4, e9s4 l2).
   Повторення: жанри (e7s4l1), театр — stage, interval, box office (e7s4l2), відгук (e7s4l6), question tags (e8s1l4),
   chat show (e9s4l2), клуби (e9s5l6). Не дублюємо: тут — клуби й онлайн-спільноти на B2, огляд на B2 (будова, plot, cast).
   Форми — CD Grammar «Tags» (https://dictionary.cambridge.org/grammar/british-grammar/question-tags), «Compounds»
   (https://dictionary.cambridge.org/grammar/british-grammar/compounds: «a twelve-hour flight»; дефіс перед іменником),
   «Questions: follow-up questions» (reply questions). Пастки: тип 2 тегів «positive + positive» (She plays the piano, does she?)
   граматичний → хибні варіанти лише з неправильним допоміжним дієсловом чи займенником, не лише з іншою полярністю;
   imperative + will / can / could / would you — кілька правильних → у вправах лише одна з них серед варіантів;
   «am I not» (формальне) — не хибний варіант; collective nouns (team, club) — без тегів і reply questions (BrE it / they);
   well known після be — без дефіса (CD well known), award-winning, long-running, record-breaking — [before noun] (CD).
   Україна: рейтинг Довженко-Центру 2021 (Тіні забутих предків — 1-ше, Земля — 2-ге), Криворівня — джерела в нотатках задачі.
   Фільми й серіали героїв (The Lost Bell of Kamianets, The Pyrizhok Café, Moorland Detectives) — вигадані, без вікових позначок і спойлерів.
   Герої — серія 4–10 кл., на рік старші, ніж у 10 кл. (17 років; Tom 15, Dmytro 13); нові — лише персонажі вигаданого фільму.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Зображень немає.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s3). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s2, e10s5).
   Перевірка: node tools/validate.mjs --section e11s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s3",
  grade: 11,
  weeks: [10, 13],
  title: "Leisure: clubs, film, TV and the internet",
  why: "To talk about clubs, films, plays, TV programmes and life online. And to review a film or a show and keep a conversation going.",
  requires: ["e7s4l1", "e7s4l2", "e7s4l6", "e8s1l4", "e9s4l2", "e9s5l6"],
  meta: { author: "writer-e11s3", created: "2026-11-26", factcheck: "verifier-e11s3, 2026-11-26 (reports/verify/write-eng-g11-e11s3.md)", teacher: null },
  badges: [
    { id: "e11s3boss", name: "Film club critic", icon: "trophy", desc: "Finish the final lesson “Leisure: clubs, film, TV and the internet”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s3l1",
      title: "Clubs for every interest",
      short: "Clubs",
      icon: "users",
      status: "verified",
      why: "Clubs and online communities bring like-minded people together. Learn to describe a club and its rules.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which club are you in this year?",
          body: `<p class="lead">The penfriend club newsletter asks: “Which club are you in this year?”</p><p><b>Kateryna (Kharkiv):</b> I’m in a drama club. We meet twice a week, and newcomers are always welcome.<br><b>Andrii (Kyiv):</b> I’m a member of an online chess community. We play, chat and share our best games. A moderator makes sure that everyone follows the rules.<br><b>Emma (England):</b> I’ve just signed up for the school film club. Every Friday we watch a film and discuss it with like-minded people.</p><p>Which of these clubs would you join? Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “We discuss films with <b>like-minded</b> people.”</p><p>Who are like-minded people?</p>`,
          opts: [
            "people who are older than you",
            "people who share your interests and ideas",
            "people who never agree with you"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Like-minded</b> people have the same interests and ideas as you. The next screen has more words about clubs."
        },
        {
          type: "info",
          title: "Club words",
          body: `<ul><li>a <b>member</b> → a person in a club; <b>membership</b> → being a member</li><li><b>join</b> a club (no preposition) = <b>sign up for</b> a club</li><li>a <b>newcomer</b> → a new member</li><li><b>like-minded</b> people → people with the same interests and ideas</li><li>an <b>online community</b> → people who share an interest on the internet</li><li>a <b>moderator</b> → a person who makes sure people follow the rules online</li><li><b>meet up</b> → meet in person</li><li>a <b>spoiler</b> → information that tells you what happens in a film or series before you see it</li></ul><p><u>mem</u>bership, com<u>mu</u>nity, <u>mod</u>erator, <u>new</u>comer</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A newcomer is", "A moderator is", "A spoiler is", "Like-minded people are"],
          right: ["a new member of a club.", "a person who makes sure people follow the rules online.", "information about what happens in a film before you see it.", "people with the same interests and ideas."],
          hint: "Which one is about rules? Which one is about a film?",
          fbOk: "Right.",
          fbBad: "Look at the list “Club words” again.",
          fbText: "A <b>newcomer</b> is a new member. A <b>moderator</b> checks the rules online. A <b>spoiler</b> tells you what happens. <b>Like-minded</b> people share your interests."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Kateryna describes her drama club.</p>`,
          text: "Our drama club {*meets|joins|signs} every Tuesday and Thursday at the youth centre. There are twenty {*members|moderators|spoilers} now, and five of them are {*newcomers|spoilers|moderators} who joined in September. If you want to join, sign {*up|in|out} for a free trial on our page.",
          hint: "A new member is a … . To become a member, you sign … for a club.",
          fbOk: "Exactly.",
          fbBad: "Check each word in the list “Club words”.",
          fbText: "The club <b>meets</b>; twenty <b>members</b>; five <b>newcomers</b> joined in September; sign <b>up</b> for a free trial."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Lviv Teen Photo Club – online rules<br>1. Be respectful: talk about the photography, not the person.<br>2. Photos and photography only, please.<br>3. Never share your address or phone number.<br>4. Newcomers: say hello in the Welcome chat!<br>– Taras and Myroslava, moderators</i></p><p>Ostap posted a link to a football match in the group. Which rule did he break?</p>`,
          opts: [
            "Be respectful.",
            "Never share your address or phone number.",
            "Photos and photography only."
          ],
          correct: 2,
          hint: "Is a football match about photography?",
          fbOk: "Well done!",
          fbBad: "Read rule 2 again.",
          fbText: "A football match has nothing to do with photography, so Ostap broke the rule <b>Photos and photography only</b>. He wasn’t rude, and he didn’t share an address."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>A poster at Emma’s school.</p>`,
          before: "Want to join the film club? Please",
          after: "up for it on the school website by Friday.",
          answer: "sign",
          hint: "To become a member of a club: … up for it.",
          fbOk: "Yes!",
          fbBad: "Look at the list: join a club = … up for a club.",
          fbText: "Please <b>sign up</b> for it: <i>sign up for</i> a club means join it."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+mem|ber|ship", "com|+mu|ni|ty", "+mod|er|a|tor", "+new|com|er"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "<u>mem</u>bership, com<u>mu</u>nity, <u>mod</u>erator, <u>new</u>comer."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s post is wrong.</p>`,
          text: "Last month I joined [to] the school film club. We watch a film every Friday and then discuss it with like-minded people.",
          hint: "Check the verbs and the small words after them.",
          fbOk: "Brilliant!",
          fbBad: "We say join a club, with no small word after join.",
          fbText: "We say <b>join a club</b>, not <s>join to a club</s>: I joined the school film club. Or: I signed up <b>for</b> the club."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to new members of the photo club.</p>`,
          text: "Welcome to the Lviv Teen Photo Club! We are an online {*community|moderator|spoiler} of forty teenagers who love photography. Once a month we {*meet up|sign up|join} in a park and take photos together. Newcomers often feel shy, but don’t worry: we’re all {*like-minded|newcomer|moderator} people here. Myroslava and I are the {*moderators|newcomers|spoilers}, so we check every post.",
          hint: "people who share an interest online → an online …; meet in person → …; we check every post → we are the … .",
          fbOk: "Well done!",
          fbBad: "Check the phrases: online community, meet up, like-minded, moderators.",
          fbText: "An online <b>community</b>; we <b>meet up</b> in a park; <b>like-minded</b> people; the <b>moderators</b> check every post."
        }
      ],
      outro: {
        text: "Members, newcomers, moderators: now you can describe a club and an online community.",
        learned: [
          "Describe a club: members, newcomers, meet up, sign up for.",
          "Say join a club, with no preposition.",
          "Understand the rules of an online community."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s3l2",
      title: "Cinema, theatre, TV or the internet?",
      short: "Ways to watch",
      icon: "play",
      status: "verified",
      why: "There are many ways to watch a story: on a stage, on a big screen or on your laptop. Compare them and say which you prefer.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How do you watch?",
          body: `<p class="lead">Emma’s film club wants to know how the penfriend club watches films and shows.</p><p><b>Oksana:</b> There’s no cinema in Zelena Dolyna, so I stream films on my laptop. I watch British films with English subtitles – it helps my English.<br><b>Emma:</b> I love binge-watching a good series. Last weekend I watched all eight episodes in two days!<br><b>Andrii:</b> For me, live theatre is the best. The actors are right there on stage.<br><b>Bohdan:</b> I still watch TV with my family: quiz shows and chat shows.</p><p>Who prefers the internet? Who prefers live shows?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “I love <b>binge-watching</b> a good series.”</p><p>What does she do?</p>`,
          opts: [
            "She watches a film at the cinema.",
            "She watches only the first episode.",
            "She watches many episodes one after another."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "To <b>binge-watch</b> is to watch many episodes one after another, like Emma: eight episodes in two days."
        },
        {
          type: "info",
          title: "Screens and stages",
          body: `<ul><li>a <b>series</b> (plural: series) → a set of programmes with the same characters</li><li>an <b>episode</b> → one part of a series</li><li><b>binge-watch</b> → watch many episodes one after another</li><li><b>stream</b> a film → watch it on the internet; a <b>streaming service</b></li><li><b>subtitles</b> → words at the bottom of the screen</li><li>a <b>chat show</b> (also <i>talk show</i>) → famous guests answer questions</li><li>a <b>soap opera</b> → a long series about the lives and problems of a group of people</li><li>a <b>sitcom</b> → a funny series about the same people in everyday situations</li><li><b>live</b> → happening now, in front of you</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A chat show is", "A soap opera is", "A sitcom is", "A documentary is"],
          right: ["a programme where famous guests answer questions.", "a long series about the lives and problems of a group of people.", "a funny series about the same people in everyday situations.", "a film or programme with real facts about real life."],
          hint: "Which one is funny? Which one has guests? Which one is about real facts?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Screens and stages” again.",
          fbText: "A <b>chat show</b> – guests answer questions. A <b>soap opera</b> – a long series about people’s lives. A <b>sitcom</b> – a funny series. A <b>documentary</b> – real facts."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about her weekend.</p>`,
          text: "Last weekend I {*binge-watched|subtitled|performed} a detective series: all eight {*episodes|subtitles|chat shows} in two days! I watched it on a streaming {*service|episode|stage}. My brother Tom prefers {*live|binge|soap} football on TV: he says it’s more exciting when nobody knows the result.",
          hint: "watch many episodes one after another → …; one part of a series → …; happening now → … .",
          fbOk: "Right.",
          fbBad: "Check each word in the list “Screens and stages”.",
          fbText: "I <b>binge-watched</b> a series; eight <b>episodes</b>; a streaming <b>service</b>; <b>live</b> football – it’s happening now."
        },
        {
          type: "info",
          title: "For and against",
          body: `<p>When you compare two ways of watching, you can say:</p><ul><li><b>One advantage of</b> streaming <b>is that</b> you can pause the film.</li><li><b>The main disadvantage of</b> the cinema <b>is that</b> tickets are expensive.</li><li>At the theatre, the actors are live, <b>whereas</b> on TV they are recorded.</li></ul><p><b>whereas</b> = and in contrast. Use it to compare two different things.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Where can you do it: at the theatre or when you stream at home?</p>`,
          bins: ["at the theatre", "streaming at home"],
          items: [
            ["watch live actors on stage", 0],
            ["have a break in the interval", 0],
            ["buy tickets at the box office", 0],
            ["pause whenever you want", 1],
            ["choose subtitles in another language", 1],
            ["binge-watch a whole series", 1]
          ],
          hint: "Remember the theatre words: the stage, the interval, the box office.",
          fbOk: "Well done!",
          fbBad: "Where is the stage? Where can you pause?",
          fbText: "At the theatre: <b>live actors, the interval, the box office</b>. At home: <b>pause, subtitles, binge-watch</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>For me, streaming has two big advantages. First, there’s no cinema in our village. Second, I can watch British films with English subtitles and learn new words. The only disadvantage is that my laptop screen is small, whereas a cinema screen is huge. – Oksana</i></p><p>What is the disadvantage of streaming for Oksana?</p>`,
          opts: [
            "Her screen is small.",
            "There’s no cinema in her village.",
            "She can’t find English subtitles."
          ],
          correct: 0,
          hint: "Find the word disadvantage in her post.",
          fbOk: "Right.",
          fbBad: "Read the last sentence again.",
          fbText: "The disadvantage is that her <b>laptop screen is small</b>. No cinema in the village is the reason why she streams films."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana watches British films. The English words are at the bottom of the screen.</p>`,
          before: "She watches them with English",
          after: ".",
          answer: "subtitles",
          hint: "The words at the bottom of the screen are … .",
          fbOk: "Yes!",
          fbBad: "Look at the list “Screens and stages”: words at the bottom of the screen.",
          fbText: "Words at the bottom of the screen are <b>subtitles</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Andrii explains why he likes the theatre.</p>`,
          tiles: ["One advantage of", "the theatre", "is that", "the actors", "are live"],
          answer: "One advantage of the theatre is that the actors are live.",
          extra: ["whereas"],
          hint: "One advantage of + what? + is that + what?",
          fbOk: "Well done!",
          fbBad: "Start with One advantage of …",
          fbText: "<b>One advantage of the theatre is that the actors are live.</b> One advantage of + noun + is that + sentence."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii answers the film club’s question.</p>`,
          text: "Last month our class saw a play at a theatre in Kyiv. One {*advantage|episode|series} of live theatre is {*that|whereas|what} the actors are right there on stage. On TV, everything is recorded, {*whereas|that|because} at the theatre anything can happen! The main {*disadvantage|advantage|episode} is that tickets aren’t cheap, so we don’t go very often.",
          hint: "One advantage … is that …; compare two things → …; tickets aren’t cheap – is that good or bad?",
          fbOk: "Brilliant!",
          fbBad: "Look at the screen “For and against” again.",
          fbText: "One <b>advantage</b> of live theatre <b>is that</b>…; on TV everything is recorded, <b>whereas</b> at the theatre…; the main <b>disadvantage</b> is that tickets aren’t cheap."
        }
      ],
      outro: {
        text: "Stream, binge-watch, live: now you can compare the cinema, the theatre, TV and the internet.",
        learned: [
          "Use series, episode, subtitles, chat show, soap opera and sitcom.",
          "Say what is good and bad: One advantage of … is that …",
          "Compare two things with whereas."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s3l3",
      title: "A well-known actor, a two-hour film: compound adjectives",
      short: "Compound adjectives",
      icon: "star",
      status: "verified",
      why: "Two words can work together as one adjective: a well-known director, a two-hour film. Learn to use them and write them correctly.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "The 100 best Ukrainian films",
          body: `<p class="lead">Kyrylo writes on his school history club page.</p><p>In 2021, the Dovzhenko Centre in Kyiv asked film experts to choose the 100 best Ukrainian films. Number one was <i>Shadows of Forgotten Ancestors</i> (1965), an <b>award-winning</b> film based on a book by Mykhailo Kotsiubynskyi. Number two was <i>Earth</i> (1930), a silent film by the <b>well-known</b> director Oleksandr Dovzhenko. Our club is planning a <b>two-hour</b> film evening.</p><p>Look at the words in bold. What do they have in common?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "After school, the club had a {*two-hour|two-hours} meeting.",
          fbTitle: "Let’s find out.",
          fbText: "We say a <b>two-hour</b> meeting: in an adjective like this, the noun is singular. The next screen explains why."
        },
        {
          type: "info",
          title: "Compound adjectives",
          body: `<p>A <b>compound adjective</b> is two or more words that work as one adjective. Before a noun, we join them with a hyphen.</p><ul><li>a <b>well-known</b> director → many people know him</li><li>a <b>world-famous</b> actor → known all over the world</li><li>an <b>award-winning</b> film → it has won prizes</li><li>a <b>long-running</b> show → it has been on TV for years</li><li>a <b>thought-provoking</b> film → it makes you think a lot</li><li>an <b>action-packed</b> film → full of exciting events</li><li>a <b>two-hour</b> film, a <b>three-part</b> series</li></ul><p>With a number, the noun is <b>singular</b>: a two-<b>hour</b> film. Not: <s>a two-hours film</s>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["a film that has won prizes", "a show that has been on TV for years", "a film that makes you think a lot", "a film full of exciting events", "an actor known all over the world"],
          right: ["an award-winning film", "a long-running show", "a thought-provoking film", "an action-packed film", "a world-famous actor"],
          hint: "Look for the meaning in each word: winning, running, thought, action, world.",
          fbOk: "Right.",
          fbBad: "Look at the list “Compound adjectives” again.",
          fbText: "Prizes → <b>award-winning</b>; on TV for years → <b>long-running</b>; makes you think → <b>thought-provoking</b>; exciting events → <b>action-packed</b>; all over the world → <b>world-famous</b>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p><i>In 2021, film experts chose the 100 best Ukrainian films for the Dovzhenko Centre. Number one was Shadows of Forgotten Ancestors (1965). Number two was Earth (1930), a silent film by Oleksandr Dovzhenko.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Earth is older than Shadows of Forgotten Ancestors.",
            "Earth was number one on the list.",
            "The experts chose the 50 best Ukrainian films."
          ],
          correct: 0,
          hint: "Look at the years in brackets and at the numbers.",
          fbOk: "Brilliant!",
          fbBad: "Compare the years: 1930 and 1965.",
          fbText: "<i>Earth</i> (1930) is 35 years older than <i>Shadows of Forgotten Ancestors</i> (1965). <i>Shadows</i> was number one, and the list has 100 films."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Kyrylo’s club makes plans.</p>`,
          text: "We’re going to watch a {*ninety-minute|ninety-minutes} documentary about Dovzhenko. In spring, we’re planning a {*three-day|three-days} trip to the Carpathians. Our history teacher is going to give a {*ten-minute|ten-minutes} talk before the film.",
          hint: "Number + noun before another noun: is the noun singular or plural?",
          fbOk: "Exactly.",
          fbBad: "With a number, the noun in the adjective is singular: a two-hour film.",
          fbText: "A <b>ninety-minute</b> documentary, a <b>three-day</b> trip, a <b>ten-minute</b> talk: singular noun, with hyphens."
        },
        {
          type: "info",
          title: "Before a noun or after a verb?",
          body: `<ul><li>Before a noun → hyphen: He’s a <b>well-known</b> director.</li><li>After <i>be</i> → usually no hyphen: The director is <b>well known</b>.</li><li>A number after a verb → plural noun, no hyphen: The film is <b>two hours</b> long. The series has <b>three parts</b>.</li><li><b>award-winning, long-running</b> → usually only before a noun: an award-winning film.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>The film lasts two hours. Which sentence is correct?</p>`,
          opts: [
            "It’s two-hour long.",
            "It’s a two-hours film.",
            "It’s a two-hour film."
          ],
          correct: 2,
          hint: "Before a noun: singular noun and a hyphen.",
          fbOk: "Well done!",
          fbBad: "Before the noun film, use the singular: two-hour.",
          fbText: "<b>It’s a two-hour film.</b> Or, after a verb: <i>It’s two hours long.</i>"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "Dovzhenko was a well-known director.",
            "We watched a two-hours film.",
            "The documentary is ninety minutes long.",
            "Shadows of Forgotten Ancestors is an award-winning film."
          ],
          correct: [0, 2, 3],
          hint: "Check the number + noun in each sentence: before a noun, singular; after a verb, plural.",
          fbOk: "Good eye!",
          fbBad: "Only one sentence has a mistake. Check the numbers.",
          fbText: "<b>a well-known director</b>, <b>ninety minutes long</b> and <b>an award-winning film</b> are correct. We say <b>a two-hour film</b>, not <s>a two-hours film</s>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The talk lasts twenty minutes.</p>`,
          before: "It’s a twenty-",
          after: "talk.",
          answer: "minute",
          hint: "Number + noun before a noun: singular or plural?",
          fbOk: "Yes!",
          fbBad: "Before a noun, the noun in the adjective is singular.",
          fbText: "It’s a twenty-<b>minute</b> talk: singular, because it comes before the noun <i>talk</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Kateryna’s post is wrong.</p>`,
          text: "Last night our drama club saw a well-known play at the theatre. It was a [three-hours] performance with a twenty-minute interval, but nobody got bored.",
          hint: "Check each compound adjective: is it written correctly?",
          fbOk: "Good eye!",
          fbBad: "Look at the compound adjectives with numbers.",
          fbText: "It was a <b>three-hour</b> performance: before a noun, the noun is singular. <i>Well-known</i> and <i>twenty-minute</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Kyrylo writes about the film evening.</p>`,
          text: "Our history club is planning a {*three-part|three-parts} film evening about Ukrainian cinema. Part one is <i>Earth</i>, a silent film by the {*well-known|well-knowing} director Oleksandr Dovzhenko. Part two is <i>Shadows of Forgotten Ancestors</i>, an {*award-winning|award-won} film based on a book by Mykhailo Kotsiubynskyi. Many scenes were filmed in Kryvorivnia, a village in the Carpathians. Each part ends with a {*ten-minute|ten-minutes} discussion.",
          hint: "Number + noun → singular. well-…, award-… : look at the list.",
          fbOk: "Brilliant!",
          fbBad: "Check the forms in the list “Compound adjectives”.",
          fbText: "A <b>three-part</b> film evening, the <b>well-known</b> director, an <b>award-winning</b> film, a <b>ten-minute</b> discussion."
        }
      ],
      outro: {
        text: "A well-known director, an award-winning film, a two-hour evening: now you can describe films with compound adjectives.",
        learned: [
          "Use compound adjectives: well-known, award-winning, long-running, thought-provoking.",
          "Write a number + singular noun before a noun: a two-hour film.",
          "Name two famous Ukrainian films: Earth and Shadows of Forgotten Ancestors."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s3l4",
      title: "It was great, wasn’t it? Question tags",
      short: "Question tags",
      icon: "voice",
      status: "verified",
      why: "Question tags help you check something and invite the other person to talk. Use them with all tenses, modal verbs and Let’s.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "After the show",
          body: `<p class="lead">Mariia meets Kateryna after the drama club’s first performance of a new play.</p><p><b>Mariia:</b> That was amazing! You were nervous before the show, <b>weren’t you</b>?<br><b>Kateryna:</b> Very! We’ve been rehearsing for three months, but I still forgot one line.<br><b>Mariia:</b> Nobody noticed. The audience loved it, <b>didn’t they</b>?<br><b>Kateryna:</b> I hope so. You’ll come again on Saturday, <b>won’t you</b>?<br><b>Mariia:</b> Of course! Let’s get a pizza now, <b>shall we</b>?</p><p>Look at the tags in bold. Why are they all different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "The costumes looked great, {*didn’t they|weren’t they|don’t they}?",
          fbTitle: "Let’s find out.",
          fbText: "<i>looked</i> is the Past Simple with no auxiliary verb, so the tag uses <b>did</b>: <b>didn’t they</b>? The next screen shows the rule."
        },
        {
          type: "info",
          title: "Tags in all tenses",
          body: `<p>Take the auxiliary or modal verb from the sentence and add a pronoun:</p><ul><li>You <b>were</b> nervous, <b>weren’t</b> you?</li><li>They<b>’ve</b> been rehearsing, <b>haven’t</b> they?</li><li>You<b>’ll</b> come on Saturday, <b>won’t</b> you?</li><li>She <b>can</b> sing, <b>can’t</b> she?</li><li>No auxiliary? Use <b>do / does / did</b>: The audience <b>loved</b> it, <b>didn’t</b> they?</li></ul><p>To check what you think is true: positive sentence → negative tag; negative sentence → positive tag: He <b>hasn’t</b> seen it, <b>has</b> he?</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Kateryna and Mariia talk about the show.</p>`,
          text: "We’ve been rehearsing since September, {*haven’t we|didn’t we|aren’t we}? Artem will film Saturday’s show, {*won’t he|doesn’t he|isn’t he}? We can’t forget our lines again, {*can we|do we|are we}? The lights went off in the second act, {*didn’t they|weren’t they|haven’t they}?",
          hint: "Find the auxiliary or modal verb: ’ve, will, can. No auxiliary? Use did.",
          fbOk: "Exactly.",
          fbBad: "Which verb is in the sentence: have, will, can – or none?",
          fbText: "We’<b>ve</b> been → <b>haven’t we</b>? Artem <b>will</b> → <b>won’t he</b>? We <b>can’t</b> → <b>can we</b>? The lights <b>went</b> (Past Simple) → <b>didn’t they</b>?"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “We should buy tickets for Saturday now, ___?”</p>`,
          opts: [
            "don’t we",
            "shouldn’t we",
            "won’t we"
          ],
          correct: 1,
          hint: "Which modal verb is in the sentence?",
          fbOk: "Right.",
          fbBad: "The tag takes the same modal verb as the sentence.",
          fbText: "We <b>should</b> buy → <b>shouldn’t we</b>? A modal verb in the sentence → the same modal verb in the tag."
        },
        {
          type: "info",
          title: "Special tags",
          body: `<ul><li><b>I’m</b> … → <b>aren’t I</b>? I’m right, aren’t I? Not: <s>isn’t I</s>.</li><li><b>Let’s</b> … → <b>shall we</b>? Let’s get a pizza, shall we?</li><li>A request or an order → usually <b>will you</b>? Don’t tell me the ending, will you? (<i>can you</i> and <i>could you</i> are possible too.)</li><li><b>There’s</b> … → <b>isn’t there</b>? There’s a show on Sunday, isn’t there?</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Kateryna: “Don’t tell Artem about my mistake, ___?”</p>`,
          opts: [
            "will you",
            "do you",
            "are you"
          ],
          correct: 0,
          hint: "Is the sentence a request? Look at the screen “Special tags”.",
          fbOk: "Well done!",
          fbBad: "After a request like Don’t tell…, the tag is usually will you.",
          fbText: "<i>Don’t tell…</i> is a request, so the tag is <b>will you</b>? (<i>can you</i> is possible too.)"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["Let’s sit in the front row,", "I’m in the next scene,", "There’s a show on Sunday,", "Kateryna has seen the film,", "You won’t forget your lines,"],
          right: ["shall we?", "aren’t I?", "isn’t there?", "hasn’t she?", "will you?"],
          hint: "Let’s → ? I’m → ? There’s → ? Then look at has and won’t.",
          fbOk: "Good eye!",
          fbBad: "Look at the first word or the verb of each sentence.",
          fbText: "Let’s → <b>shall we</b>? I’m → <b>aren’t I</b>? There’s → <b>isn’t there</b>? Kateryna has → <b>hasn’t she</b>? You won’t → <b>will you</b>?"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia thinks Artem has been to this theatre before. She checks.</p>`,
          before: "You’ve been here before,",
          after: "you?",
          answer: "haven’t",
          hint: "You’ve = you have. Positive sentence → negative tag.",
          fbOk: "Yes!",
          fbBad: "Which auxiliary is in You’ve?",
          fbText: "You’<b>ve</b> been here before, <b>haven’t</b> you? The tag takes <i>have</i> from the sentence."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "I’m in the front row tonight, [isn’t] I? And Artem filmed the last show, didn’t he?",
          hint: "Check each tag: does it match the verb and the person?",
          fbOk: "Good eye!",
          fbBad: "I’m → … I?",
          fbText: "With <i>I’m</i>, the tag is <b>aren’t I</b>: I’m in the front row, <b>aren’t</b> I? <i>Didn’t he</i> is correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia has an idea.</p>`,
          tiles: ["Let’s", "watch", "the video", "of the show,", "shall", "we"],
          answer: "Let’s watch the video of the show, shall we?",
          extra: ["don’t"],
          hint: "Let’s … → which tag?",
          fbOk: "Exactly.",
          fbBad: "After Let’s, the tag is shall we.",
          fbText: "<b>Let’s watch the video of the show, shall we?</b> Let’s → <b>shall we</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Kateryna after the second show.</p>`,
          text: "Hi Kateryna! Saturday’s show was even better, {*wasn’t it|didn’t it|isn’t it}? Your grandma came too, {*didn’t she|wasn’t she|doesn’t she}? I’m your biggest fan, {*aren’t I|isn’t I|don’t I}? Let’s celebrate on Sunday, {*shall we|don’t we|aren’t we}? And send me the photos, {*will you|do you|are you}?",
          hint: "was → ? came (Past Simple) → ? I’m → ? Let’s → ? A request → ?",
          fbOk: "Well done!",
          fbBad: "Check the special tags: I’m, Let’s and a request.",
          fbText: "was → <b>wasn’t it</b>? came → <b>didn’t she</b>? I’m → <b>aren’t I</b>? Let’s → <b>shall we</b>? A request → <b>will you</b>?"
        }
      ],
      outro: {
        text: "You were nervous, weren’t you? Let’s go, shall we? Now you can check information and invite people to talk.",
        learned: [
          "Make question tags in all tenses and with modal verbs.",
          "Use aren’t I, Let’s … shall we? and will you? after a request.",
          "Use question tags to check something and keep a conversation going."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s3l5",
      title: "My favourite film or show: a review",
      short: "A review",
      icon: "scroll",
      status: "verified",
      why: "A good review helps people choose a film without spoiling it. Read a review and learn how to write one.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What makes a good review?",
          body: `<p class="lead">Taras writes film reviews for his school film club blog in Lviv. Today the club is discussing what a good review should have.</p><p><b>Myroslava:</b> The name of the film, what kind of film it is and where it’s set.<br><b>Ostap:</b> What’s good and what’s bad about it.<br><b>Taras:</b> A recommendation. And no spoilers, please!</p><p>What else would you add?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Taras: “No spoilers, please!” What does he mean?</p>`,
          opts: [
            "A review shouldn’t tell you how the film ends.",
            "A review should be very short.",
            "A review shouldn’t talk about the actors."
          ],
          correct: 0,
          hint: "Remember the club words: what is a spoiler?",
          fbOk: "Right.",
          fbBad: "A spoiler tells you what happens before you see the film.",
          fbText: "A <b>spoiler</b> tells you what happens in a film before you see it. A good review doesn’t give away the ending."
        },
        {
          type: "info",
          title: "Review language",
          body: `<ul><li><b>It’s set in</b> Lviv. → the story happens there</li><li><b>It stars</b> … → the main actors are …; the <b>cast</b> → all the actors</li><li>The <b>plot</b> is about … → the story</li><li>the <b>soundtrack</b> → the music of the film</li><li>the <b>special effects</b> → images made by computers or artists</li><li><b>gripping</b> → so exciting that you can’t stop watching</li><li><b>predictable</b> → you know what will happen next</li><li><b>I’d recommend it to</b> … · <b>I’d give it</b> four stars out of five.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["The plot is", "The cast is", "The soundtrack is", "The special effects are"],
          right: ["the story of a film.", "all the actors in a film.", "the music of a film.", "images made by computers or artists."],
          hint: "Which one is about music? Which one is about actors?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Review language” again.",
          fbText: "The <b>plot</b> – the story. The <b>cast</b> – the actors. The <b>soundtrack</b> – the music. The <b>special effects</b> – images made by computers or artists."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The Lost Bell of Kamianets, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>The Lost Bell of Kamianets</i> is a new Ukrainian adventure film, and it’s the best family film I’ve seen this year. It’s set in Kamianets-Podilskyi, a city with an old castle above a river. The two-hour film stars two young actors from Kyiv, and the rest of the cast are well-known theatre actors. The director made two documentaries before this film, and he shot most of the scenes in real places, not in a studio.<br>The plot is about Olesia and her younger brother Yarema, who spend the summer with their grandad. One rainy evening, they find an old map in his attic. Grandad tells them a legend: hundreds of years ago, the city’s biggest bell disappeared, and nobody knows where. The map seems to show the way to it. So the brother and sister decide to look for the lost bell themselves.</p><p>Which sentence is true?</p>`,
          opts: [
            "The film is set in Kyiv.",
            "The main actors are from Kamianets-Podilskyi.",
            "The film lasts two hours."
          ],
          correct: 2,
          hint: "Find Kyiv in the text. Who is from Kyiv: the city in the film or the actors?",
          fbOk: "Well done!",
          fbBad: "Read the sentence about the young actors again.",
          fbText: "It’s a <b>two-hour</b> film, so it lasts two hours. It’s set in Kamianets-Podilskyi, and the young actors are from Kyiv."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: The Lost Bell of Kamianets, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p>What I liked most is the way the film shows the city. The camera flies over the castle walls and the narrow streets, and you feel as if you are walking there yourself. The soundtrack is excellent too: it mixes old folk songs with modern music. The young actors are natural and funny, especially when the brother and sister argue. The special effects aren’t perfect, but they don’t spoil the story. Some scenes are funny, others are a little scary, but nothing is too frightening for younger viewers.<br>The only weak point is the middle of the film. For about twenty minutes, the children just walk from one place to another, and the plot becomes slow and a bit predictable. I think the film would be even better if it were ten minutes shorter. Luckily, the last part is gripping. I won’t tell you what happens – no spoilers! – but nobody in the cinema looked at their phone.</p><p>What does Taras like?</p>`,
          opts: [
            "the way the film shows the city",
            "the middle of the film",
            "the soundtrack",
            "the young actors"
          ],
          correct: [0, 2, 3],
          hint: "Find the weak point. Is it something he likes?",
          fbOk: "Good eye!",
          fbBad: "Read the sentence that starts with The only weak point.",
          fbText: "Taras likes <b>the way the film shows the city</b>, <b>the soundtrack</b> and <b>the young actors</b>. The middle of the film is the weak point: slow and a bit predictable."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The Lost Bell of Kamianets, part 3 of 3",
          title: "Read and choose.",
          body: `<p>Overall, <i>The Lost Bell of Kamianets</i> is a beautiful and exciting film about family, friendship and the history of our country. It isn’t a thought-provoking drama, and it doesn’t try to be one. It’s a warm adventure story that the whole family can enjoy together. The film is in Ukrainian, and there are English subtitles for viewers from other countries. The ending leaves a few questions open, so I hope there will be a second film. I’d recommend it to anyone who likes adventure films, old legends and beautiful places. If you have younger brothers or sisters, take them with you: they’ll love the brother and sister in the film. And after watching it, you might want to visit Kamianets-Podilskyi yourself! I’d give it four stars out of five.</p><p>Who does Taras recommend the film to?</p>`,
          opts: [
            "only people who love thought-provoking dramas",
            "people who like adventure films and old legends",
            "people who don’t like family films"
          ],
          correct: 1,
          hint: "Find the words I’d recommend it to.",
          fbOk: "Right.",
          fbBad: "Read the sentence that starts with I’d recommend it.",
          fbText: "Taras recommends it to <b>anyone who likes adventure films, old legends and beautiful places</b>. He says it isn’t a thought-provoking drama."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole review. Which sentence describes it best?</p>`,
          opts: [
            "A perfect film with no weak points.",
            "A boring film with a great soundtrack.",
            "A good family adventure with a slow middle part."
          ],
          correct: 2,
          hint: "Taras gives it four stars out of five. Does it have a weak point?",
          fbOk: "Exactly.",
          fbBad: "Remember part 2: the only weak point.",
          fbText: "Taras likes the film a lot, but the middle is slow. So: <b>a good family adventure with a slow middle part</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Complete the last sentence of Taras’s review.</p>`,
          before: "I’d",
          after: "it four stars out of five.",
          answer: "give",
          hint: "Look at the last sentence of the review.",
          fbOk: "Yes!",
          fbBad: "Look at the list “Review language”: I’d … it four stars.",
          fbText: "<b>I’d give it</b> four stars out of five."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Oksana writes a short review of a sitcom.</p>`,
          items: [
            "The Pyrizhok Café is a Ukrainian sitcom, and it’s set in a small café in Kyiv.",
            "The plot is about a family who run the café and their funny customers.",
            "What I liked most is the cast: every actor is brilliant.",
            "The only weak point is that some jokes are a bit predictable.",
            "I’d recommend it to anyone who needs a good laugh, and I’d give it four stars out of five."
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "Name and kind of show → the plot → what I liked → the weak point → recommendation.",
          fbOk: "Well done!",
          fbBad: "Follow the plan: name, plot, good point, weak point, recommendation.",
          fbText: "A review goes like this: the name and kind of show, <b>the plot</b>, <b>what I liked most</b>, <b>the only weak point</b> and <b>I’d recommend it to…</b>"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ostap starts his review.</p>`,
          text: "The film is set {*in|on|at} a small village in the Carpathians, and it {*stars|plays|sets} two young actors from Lviv.",
          hint: "Look at the list “Review language”: It’s set … ; It … (the main actors).",
          fbOk: "Good eye!",
          fbBad: "Which preposition do we use with set and a place?",
          fbText: "We say <b>set in</b> a place: The film is set <b>in</b> a small village. It <b>stars</b> two young actors: they are the main actors."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma reviews her favourite series.</p>`,
          text: "<i>Moorland Detectives</i> is a long-running detective series. It’s set {*in|on|at} a small town in Yorkshire, and it {*stars|plays|sets} two well-known actors. The {*plot|cast|soundtrack} of the new series is about a missing painting. The music is great: I’ve downloaded the {*soundtrack|plot|cast}. The only weak point is that the ending of each episode is a bit {*predictable|gripping|award-winning}. Still, I’d {*recommend|give|star} it to anyone who likes mysteries.",
          hint: "set … a place; the story → …; the music → …; a weak point → good or bad word?",
          fbOk: "Brilliant!",
          fbBad: "Look at the list “Review language” again.",
          fbText: "Set <b>in</b> a town; it <b>stars</b> two actors; the <b>plot</b> is about…; the <b>soundtrack</b>; a weak point → <b>predictable</b>; I’d <b>recommend</b> it to…"
        }
      ],
      outro: {
        text: "Set in, stars, the plot, the soundtrack, four stars out of five: now you can read and plan a review without spoilers.",
        learned: [
          "Understand a film review and find its good and weak points.",
          "Use review language: It’s set in…, It stars…, The plot is about…",
          "Plan a review: name, plot, good points, weak points, recommendation."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s3l6",
      title: "Really? Did you? Showing interest",
      short: "Showing interest",
      icon: "bulb",
      status: "verified",
      why: "A good listener shows interest and asks more. Learn reply questions like Did you? and Can’t you? and keep a conversation going.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Did you?",
          body: `<p class="lead">Oksana and Emma are chatting online on Sunday evening.</p><p><b>Oksana:</b> I went to the theatre in Poltava yesterday!<br><b>Emma:</b> <b>Did you?</b> What did you see?<br><b>Oksana:</b> A comedy. A girl from my karate club plays the main character.<br><b>Emma:</b> <b>Does she?</b> That sounds amazing! How long has she been acting?<br><b>Oksana:</b> Since she was twelve. But I can’t act at all.<br><b>Emma:</b> <b>Can’t you?</b> I don’t believe you!</p><p>Emma doesn’t really need an answer to <i>Did you?</i> Why does she ask it?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “I went to the theatre yesterday!” Emma: “<b>Did you?</b>”</p><p>Why does Emma say it?</p>`,
          opts: [
            "She doesn’t believe Oksana.",
            "She didn’t understand the message.",
            "She wants to show that she is interested."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Did you?</b> shows that Emma is listening and interested. It’s called a reply question. The next screen shows how to make one."
        },
        {
          type: "info",
          title: "Reply questions",
          body: `<p>A <b>reply question</b> shows that you are listening and interested. Use the same auxiliary or modal verb and a pronoun:</p><ul><li>I <b>went</b> to the theatre. → <b>Did you?</b></li><li>She <b>plays</b> the main character. → <b>Does she?</b></li><li>We<b>’ve</b> got tickets! → <b>Have you?</b></li><li>I <b>can’t</b> act. → <b>Can’t you?</b></li></ul><p>Positive sentence → positive reply question. Negative sentence → negative reply question. Then keep talking: <i>Did you? What did you see?</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Bohdan tells Andrii his news.</p>`,
          text: "<b>Bohdan:</b> I was on Quiz Time again last week!<br><b>Andrii:</b> {*Were you|Did you|Have you}? How did it go?<br><b>Bohdan:</b> I won a T-shirt again. But I can’t take part next year.<br><b>Andrii:</b> {*Can’t you|Don’t you|Aren’t you}? Why not?<br><b>Bohdan:</b> The show is for under-18s, and I’ll be eighteen.<br><b>Andrii:</b> {*Will you|Are you|Do you}? Already?",
          hint: "Find the verb in each of Bohdan’s lines: was, can’t, will (’ll).",
          fbOk: "Exactly.",
          fbBad: "Use the same verb as Bohdan: was → were you, can’t → can’t you, ’ll → will you.",
          fbText: "I <b>was</b> → <b>Were you?</b> I <b>can’t</b> → <b>Can’t you?</b> I<b>’ll</b> be → <b>Will you?</b>"
        },
        {
          type: "info",
          title: "Keep the conversation going",
          body: `<ul><li>Show interest: <b>Really?</b> <b>That sounds amazing!</b> <b>Lucky you!</b></li><li>Ask a follow-up question: <b>What was it like?</b> <b>Who with?</b> <b>How did it go?</b></li><li>Show you understand bad news: <b>Oh no! What a shame.</b> <b>I know what you mean.</b></li></ul><p>A good listener reacts and then asks more: <i>Have you? Lucky you! What was it like?</i></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["I’ve never seen a play.", "My sister works at a cinema.", "We didn’t get tickets.", "I’ll be on TV tomorrow!"],
          right: ["Haven’t you? You should go!", "Does she? That sounds fun!", "Didn’t you? What a shame!", "Will you? Which programme?"],
          hint: "Find the verb: ’ve never, works, didn’t, ’ll.",
          fbOk: "Well done!",
          fbBad: "The reply question takes the same verb: have, does, did or will.",
          fbText: "I’<b>ve</b> never → <b>Haven’t you?</b> She <b>works</b> → <b>Does she?</b> We <b>didn’t</b> → <b>Didn’t you?</b> I’<b>ll</b> → <b>Will you?</b>"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read and choose.",
          body: `<p><b>Andrii:</b> I’ve just finished the new series that everyone is talking about.<br><b>Daryna:</b> ___</p><p>Which reply shows interest and keeps the conversation going?</p>`,
          opts: [
            "Have you? OK.",
            "Did you? I see.",
            "Have you? What did you think of it?"
          ],
          correct: 2,
          hint: "Two things: the right verb (’ve → have) and a follow-up question.",
          fbOk: "Right.",
          fbBad: "Which reply has the right verb and asks more?",
          fbText: "<b>Have you? What did you think of it?</b> – the right verb (’ve → have) and a follow-up question. <i>OK</i> and <i>I see</i> stop the conversation."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p><b>Daryna:</b> I can’t stand musicals.</p>`,
          before: "Andrii:",
          after: "you? Why not?",
          answer: "can’t",
          hint: "Daryna’s sentence is negative. Which verb is in it?",
          fbOk: "Yes!",
          fbBad: "Use the same verb as Daryna: can’t.",
          fbText: "I <b>can’t</b> stand musicals. → <b>Can’t you?</b> Negative sentence → negative reply question."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the chat is wrong.</p>`,
          text: "Emma: My brother Tom has joined a film club. Oksana: [Did] he? Which films do they watch?",
          hint: "Read both lines. Do the verbs match?",
          fbOk: "Good eye!",
          fbBad: "Tom has joined → … he?",
          fbText: "Tom <b>has</b> joined → <b>Has</b> he? The reply question takes the same auxiliary: <i>has</i>, not <i>did</i>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Oksana: “I went to the cinema with Halyna yesterday.” First reply with a reply question, then ask a follow-up question.</p>`,
          tiles: ["Did", "you?", "What", "was", "it", "like?"],
          answer: "Did you? What was it like?",
          extra: ["Were"],
          hint: "First a reply question with did, then What was it like?",
          fbOk: "Exactly.",
          fbBad: "I went → Did you?",
          fbText: "<b>Did you? What was it like?</b> First show interest, then ask more."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana has news for Emma.</p>`,
          text: "<b>Oksana:</b> I’ve won the English essay competition in our region!<br><b>Emma:</b> {*Have you|Did you|Are you}? Congratulations! What did you write about?<br><b>Oksana:</b> Ukrainian films. I wrote about <i>Shadows of Forgotten Ancestors</i>.<br><b>Emma:</b> I haven’t seen it.<br><b>Oksana:</b> {*Haven’t you|Didn’t you|Aren’t you}? You should watch it!<br><b>Emma:</b> But I don’t usually like old films.<br><b>Oksana:</b> {*Don’t you|Aren’t you|Haven’t you}? This one is different – it’s so colourful!<br><b>Emma:</b> OK, I’ll watch it at the weekend.<br><b>Oksana:</b> {*Will you|Do you|Are you}? Great! Tell me what you think.",
          hint: "’ve won → ? haven’t → ? don’t → ? ’ll → ?",
          fbOk: "Brilliant!",
          fbBad: "Use the same verb as the last sentence: have, haven’t, don’t, will.",
          fbText: "I’<b>ve</b> won → <b>Have you?</b> I <b>haven’t</b> → <b>Haven’t you?</b> I <b>don’t</b> → <b>Don’t you?</b> I’<b>ll</b> → <b>Will you?</b>"
        }
      ],
      outro: {
        text: "Did you? Can’t you? What was it like? Now you can show interest and keep a conversation going.",
        learned: [
          "Make reply questions with the same auxiliary or modal verb: Did you? Can’t you?",
          "Show interest and ask follow-up questions: What was it like?",
          "React to good and bad news: Lucky you! What a shame."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s3l7",
      title: "Film club night",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the film club?",
          body: `<p class="lead">The penfriend club is having an online film night: “Clubs, film, TV and the internet”.</p><p>Help the moderators check the posts and chats. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the halves.",
          left: ["a newcomer", "a moderator", "a spoiler", "an online community"],
          right: ["a new member of a club", "a person who makes sure people follow the rules online", "information about what happens in a film before you see it", "people who share an interest on the internet"],
          pre: "e11s3l1",
          fbOk: "Right.",
          fbBad: "Who is new? Who checks the rules?",
          fbText: "A <b>newcomer</b> – a new member; a <b>moderator</b> – checks the rules; a <b>spoiler</b> – tells you what happens; an <b>online community</b> – people who share an interest online."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Tonight we’re watching the first {*episode|subtitle|stage} of a new series. It’s in English, but you can switch on Ukrainian {*subtitles|episodes|soaps}. Please don’t {*binge-watch|sign up|meet up} the whole series before next week!",
          pre: "e11s3l2",
          hint: "Which word is for the words at the bottom of the screen, which is for one part of a series, and which is for watching a lot at once?",
          fbOk: "Yes!",
          fbBad: "One part of a series → ? Words at the bottom of the screen → ?",
          fbText: "The first <b>episode</b>; Ukrainian <b>subtitles</b>; don’t <b>binge-watch</b> the whole series."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Which film was number one on the Dovzhenko Centre’s list of the 100 best Ukrainian films in 2021?</p>`,
          opts: [
            "Earth",
            "Shadows of Forgotten Ancestors",
            "The Lost Bell of Kamianets"
          ],
          correct: 1,
          pre: "e11s3l3",
          fbOk: "Exactly.",
          fbBad: "Remember Kyrylo’s post: Earth was number two.",
          fbText: "Number one was <b>Shadows of Forgotten Ancestors</b> (1965). <i>Earth</i> (1930) by Oleksandr Dovzhenko was number two."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "Tonight’s film is a {*two-hour|two-hours} comedy with a {*ten-minute|ten-minutes} break in the middle. The director is {*well known|well-knowing} in Ukraine.",
          pre: "e11s3l3",
          hint: "What comes after each gap: a noun or no noun? Remember the rules for compounds with numbers and for adjectives after be.",
          fbOk: "Well done!",
          fbBad: "Number + noun before a noun → singular. After be → well known.",
          fbText: "A <b>two-hour</b> comedy, a <b>ten-minute</b> break; after <i>is</i> – <b>well known</b>, usually without a hyphen."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "You’ve all got the link, {*haven’t you|didn’t you|aren’t you}? Let’s start at seven, {*shall we|don’t we|aren’t we}? Andrii couldn’t come last time, {*could he|did he|was he}? Turn off your microphones, {*will you|do you|are you}?",
          pre: "e11s3l4",
          hint: "What do we add after a request, and what after Let’s? In the other sentences, find the auxiliary or the modal verb.",
          fbOk: "Exactly.",
          fbBad: "Same auxiliary or modal; Let’s → shall we; a request → will you.",
          fbText: "You’<b>ve</b> got → <b>haven’t you</b>? Let’s → <b>shall we</b>? Andrii <b>couldn’t</b> → <b>could he</b>? A request → <b>will you</b>?"
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Find the mistake.",
          body: `<p>One word in the chat is wrong.</p>`,
          text: "I’m the first one here, [isn’t] I? The others will come soon, won’t they?",
          pre: "e11s3l4",
          fbOk: "Good eye!",
          fbBad: "I’m → … I?",
          fbText: "I’m the first one here, <b>aren’t</b> I? <i>Won’t they</i> is correct."
        },
        {
          type: "choice",
          sk: "write",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>Taras is checking a new review for the blog. Which sentence is a spoiler?</p>`,
          opts: [
            "It’s set in a small town in the mountains.",
            "I’d give it four stars out of five.",
            "In the last scene, we learn that the detective’s best friend is the thief."
          ],
          correct: 2,
          pre: "e11s3l5",
          fbOk: "Right.",
          fbBad: "Which sentence tells you how the story ends?",
          fbText: "<b>In the last scene, we learn…</b> tells you the ending, so it’s a spoiler. The setting and the mark are fine in a review."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Write the missing word.",
          body: `<p><b>Emma:</b> We didn’t watch the film at the cinema.</p>`,
          before: "Oksana:",
          after: "you? Why not?",
          answer: "didn’t",
          pre: "e11s3l6",
          fbOk: "Yes!",
          fbBad: "Emma’s sentence is negative: We didn’t…",
          fbText: "We <b>didn’t</b> watch → <b>Didn’t you?</b> Negative sentence → negative reply question."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 9",
          title: "Read and choose.",
          body: `<p><b>Daryna:</b> I’ve joined a theatre club in Kyiv!<br><b>Andrii:</b> ___</p><p>Which reply shows interest and keeps the conversation going?</p>`,
          opts: [
            "Have you? Lucky you! What are you going to perform?",
            "Did you? OK.",
            "Have you? I see."
          ],
          correct: 0,
          pre: "e11s3l6",
          fbOk: "Well done!",
          fbBad: "Which reply has the right verb and a follow-up question?",
          fbText: "<b>Have you? Lucky you! What are you going to perform?</b> – the right verb (’ve → have), interest and a follow-up question."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about clubs, films, TV and the internet, review a film and keep a conversation going.",
        learned: [
          "Describe clubs and online communities.",
          "Compare the cinema, the theatre, TV and the internet.",
          "Use compound adjectives and question tags in all tenses.",
          "Review a film without spoilers and show interest with reply questions."
        ]
      }
    }
  ]
});
