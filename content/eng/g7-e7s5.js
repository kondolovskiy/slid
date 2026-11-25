/* Слід · Англійська мова, 7 клас — «Sport: competitions and clubs» (e7s5)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 7 кл.: тема «Спорт» — види спорту, спортивні змагання,
   відомі спортсмени, клуби й секції (PDF с. 32, розд. 5.2.1); функції — надавати оцінку (с. 33); граматика B1 (с. 34–35,
   розд. 5.4.1): Used to (no longer true), Past continuous (negative, questions, reason), Superlatives with noun and
   to-infinitive; повторення — Past Simple irregular (e6s3l4), could (e6s4l3); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md (Р3: while і питання з Past Continuous —
   розширення e6s4l4–l5, а не нове):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Види спорту (e6s4l1) не повторюємо: тут змагання, клуби, спортсмени. Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–6 кл., на три роки старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нові: Mr Hnatiuk (тренер
   Lviv Junior Athletics Club), Lesia й Ilona (бігуньї клубу, Lviv).
   Факти про спортсменів (Baiul, Bubka, Mahuchikh, Bannister) — з двох джерел, URL — tasks/…/write-eng-g7-e7s5.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e7s5). 7 уроків (6 + фінал). Будова — за еталонами e4s1, e5s1 і розділами 6 кл. (e6s4).
   Перевірка: node tools/validate.mjs --section e7s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s5",
  grade: 7,
  weeks: [21, 25],
  title: "Sport: competitions and clubs",
  why: "To talk about sports competitions, clubs and famous athletes. And to tell a story about a match or a race.",
  requires: ["e5s10l5", "e6s3l4", "e6s4l1", "e6s4l3", "e6s4l4", "e6s4l5"],
  meta: { author: "writer-e7s5", created: "2026-11-25", factcheck: "verifier-e7s5, 2026-11-25 (reports/verify/write-eng-g7-e7s5.md)", teacher: null },
  badges: [
    { id: "e7s5boss", name: "Club reporter", icon: "trophy", desc: "Finish the final lesson “Sport: competitions and clubs”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s5l1",
      title: "A race, a match, a tournament: competitions",
      short: "Competitions",
      icon: "target",
      status: "verified",
      why: "There are lots of different sports competitions. Learn their names and talk about places and medals.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Competition time!",
          body: `<p class="lead">This week, the penfriend club has sports news from everyone.</p><p><b>Myroslava:</b> Next Saturday I’ve got a race in Lviv. It’s 800 metres.<br><b>Vlad:</b> Our volleyball team is in a tournament. Eight schools are playing, and the winner gets a cup!<br><b>Ostap:</b> We’ve got a football match against School 12 on Friday.<br><b>Emma:</b> The swimming championship for schools in our town is in March.</p><p>A race, a match, a tournament: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Vlad’s team is in a <b>tournament</b>. Eight schools are playing.</p><p>What is a tournament?</p>`,
          opts: [
            "one game between two teams",
            "a race in a swimming pool",
            "lots of games, and one team wins in the end"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>tournament</b> has lots of games. In the end, one team wins. The next screen has more competitions."
        },
        {
          type: "info",
          title: "Competitions",
          body: `<ul><li>a <b>race</b> → Who is the fastest? A running race, a swimming race.</li><li>a <b>match</b> → one game: two teams or two players.</li><li>a <b>tournament</b> → lots of matches and one winner.</li><li>a <b>championship</b> → a competition to find the best: the <b>champion</b>.</li><li>the <b>final</b> → the last match or race.</li></ul><p>They are all <b>competitions</b>.</p><p>compe<u>ti</u>tion, <u>tour</u>nament, <u>cham</u>pion</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In a running race,", "In a tennis match,", "In a tournament,", "In the football final,"],
          right: ["the fastest runner wins.", "two players play against each other.", "lots of teams play lots of matches.", "the two best teams play for the cup."],
          hint: "Which one has players, not teams? Which one is the last match?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of competitions again.",
          fbText: "In a <b>race</b>, the fastest wins. In a tennis <b>match</b>, two players play. A <b>tournament</b> has lots of matches. In the <b>final</b>, the two best teams play."
        },
        {
          type: "info",
          title: "Places and medals",
          body: `<p>Myroslava <b>took part in</b> a race. She <b>came second</b>.</p><ul><li>come <b>first</b> → a <b>gold</b> medal: the winner</li><li>come <b>second</b> → a <b>silver</b> medal</li><li>come <b>third</b> → a <b>bronze</b> medal</li></ul><p><b>take part in</b> = be in a competition (take → <b>took</b>)</p><p><u>me</u>dal, <u>sil</u>ver</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Results of the 800 metres in Lviv: 1. Ilona, 2. Myroslava, 3. Lesia.</p>`,
          text: "Ilona came {*first|one|the one} and got a {*gold|silver|bronze} medal. Myroslava came {*second|two|the two}. She got a {*silver|gold|bronze} medal. Lesia came third: she got a {*bronze|gold|silver} medal.",
          hint: "First → gold. Second → ?",
          fbOk: "Exactly.",
          fbBad: "We say came first, came second. Then look at the medals.",
          fbText: "Ilona came <b>first</b>: a <b>gold</b> medal. Myroslava came <b>second</b>: a <b>silver</b> medal. Lesia came third: a <b>bronze</b> medal."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["com|pe|+ti|tion", "+tour|na|ment", "+cham|pi|on", "+me|dal"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "compe<u>ti</u>tion, <u>tour</u>nament, <u>cham</u>pion, <u>me</u>dal."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “I took part in the swimming championship for schools. I came third in my race!”</p><p>Which medal did Emma get?</p>`,
          opts: [
            "gold",
            "bronze",
            "silver"
          ],
          correct: 1,
          hint: "Find came third in Emma’s words.",
          fbOk: "Right.",
          fbBad: "Third place: which medal is it?",
          fbText: "Emma came <b>third</b>, so she got a <b>bronze</b> medal."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Vlad’s team won five matches. Then they played the last match of the tournament.</p>`,
          before: "The last match of a tournament is the",
          after: ".",
          answer: "final",
          hint: "Look at the list of competitions: the last match or race.",
          fbOk: "Yes!",
          fbBad: "Find the last match in the list.",
          fbText: "The last match or race is the <b>final</b>. Vlad’s team played in the final."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Myroslava writes to Emma after her race.</p>`,
          text: "Hi Emma! On Saturday I took {*part|place|a part} in a race in Lviv. It was 800 metres. I came {*second|silver|two}, so I got a {*silver|gold|bronze} medal! In May, our team is going to a {*championship|match|tournament} in Kyiv. The best runners from all over Ukraine are going to be there!",
          hint: "Take part in a competition. Second → which medal? Runners don’t play matches.",
          fbOk: "Well done!",
          fbBad: "Check: take part in; came second; a competition for the best runners.",
          fbText: "I took <b>part</b> in a race. I came <b>second</b>: a <b>silver</b> medal. A competition to find the best runners is a <b>championship</b>. Matches and tournaments are for games."
        }
      ],
      outro: {
        text: "Races, matches, tournaments and championships are all competitions. Come first and get a gold medal!",
        learned: [
          "Name competitions: a race, a match, a tournament, a championship.",
          "Say which place someone came: She came second.",
          "Talk about medals: gold, silver and bronze."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s5l2",
      title: "Joining a club: which club is right for you?",
      short: "Clubs",
      icon: "users",
      status: "verified",
      why: "Do you want to start a new sport? Read about clubs and ask the right questions.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Which club for Taras?",
          body: `<p class="lead">Taras doesn’t do much sport. But this year he wants to try! He finds three posts on a website for young people in Lviv.</p><p><i><b>Lviv Junior Athletics Club.</b> Running and jumping for ages 11–15. Beginners are welcome! Training: Mondays and Thursdays, 5–7 pm. Coach: Mr Hnatiuk. Bring trainers and water.</i></p><p><i><b>Lions Volleyball Club.</b> For good players only, no beginners. Training: three times a week.</i></p><p><i><b>Judo Club.</b> Beginners are welcome! Training: Tuesdays and Saturdays.</i></p><p>Taras is free on Mondays and Thursdays. Which club is right for him?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Beginners are welcome!”</p><p>Who is a <b>beginner</b>?</p>`,
          opts: [
            "a person who is new to a sport",
            "a very good player",
            "the person who helps a team"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>beginner</b> is new to a sport. Taras is a beginner in athletics."
        },
        {
          type: "info",
          title: "At a sports club",
          body: `<ul><li><b>join</b> a club → become a <b>member</b></li><li>a <b>coach</b> → helps a player or a team get better</li><li><b>train</b> → practise a sport: We train on Mondays.</li><li><b>training</b>: Training is at 5 pm.</li><li>once, <b>twice</b>, three times a week</li></ul><p>be<u>gin</u>ner, <u>mem</u>ber</p><p>In British English: I love <b>sport</b>. I’m in a <b>sports</b> club.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Taras is a beginner. He is free on Mondays and Thursdays.</p><p><b>Athletics:</b> beginners are welcome; Mondays and Thursdays.<br><b>Volleyball:</b> no beginners; three times a week.<br><b>Judo:</b> beginners are welcome; Tuesdays and Saturdays.</p><p>Which club is right for Taras?</p>`,
          opts: [
            "the volleyball club",
            "the judo club",
            "the athletics club"
          ],
          correct: 2,
          hint: "Check two things: beginners and days.",
          fbOk: "Yes!",
          fbBad: "Can beginners join? Is Taras free on those days?",
          fbText: "The volleyball club has no beginners. Judo is on Tuesdays and Saturdays. So the <b>athletics club</b> is right for Taras."
        },
        {
          type: "info",
          title: "Asking about a club",
          body: `<p>How often do you <b>train</b>? – <b>Twice</b> a week.<br>When is <b>training</b>? – On Mondays and Thursdays.<br>How much does it <b>cost</b>? – It’s free.<br>What do I need to <b>bring</b>? – Trainers and water.<br><b>Can</b> beginners <b>join</b>? – Yes, they can.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Taras writes questions for Mr Hnatiuk. He wants to know: How many times a week? How much money? Can beginners join? What things?</p>`,
          text: "How {*often|much|many} do you train? How {*much|often|many} does it cost? {*Can|Are|Is} beginners join the club? What do I need to {*bring|join|cost}?",
          hint: "How often → days in a week. How much → money.",
          fbOk: "Exactly.",
          fbBad: "Look at the questions on the last screen.",
          fbText: "How <b>often</b> do you train? How <b>much</b> does it cost? <b>Can</b> beginners join? What do I need to <b>bring</b>?"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["How often do you train?", "How much does it cost?", "Who is the coach?", "What do I need to bring?"],
          right: ["Twice a week.", "It’s free.", "Mr Hnatiuk.", "Trainers and water."],
          hint: "How often → how many times. How much → money.",
          fbOk: "Right.",
          fbBad: "Which question is about money? Which one is about a person?",
          fbText: "How often? – <b>Twice a week.</b> How much? – <b>It’s free.</b> Who? – <b>Mr Hnatiuk.</b> What do I need to bring? – <b>Trainers and water.</b>"
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras writes to Mr Hnatiuk.</p>`,
          tiles: ["I’d", "like", "to", "join", "your", "athletics club"],
          answer: "I’d like to join your athletics club.",
          extra: ["joining"],
          keepCase: true,
          hint: "Start with I’d like. Then to + verb.",
          fbOk: "Well done!",
          fbBad: "After I’d like: to + verb.",
          fbText: "<b>I’d like to join your athletics club.</b> After <i>I’d like</i>: <b>to join</b>, not <i>joining</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Taras joined the athletics club. Now he trains there twice a week.</p>`,
          before: "Taras is a new",
          after: "of the athletics club.",
          answer: "member",
          hint: "Join a club → become a …",
          fbOk: "Good eye!",
          fbBad: "Look at the first line of the club words.",
          fbText: "When you join a club, you become a <b>member</b>. Taras is a new member of the club."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Hello! I want to join [to] your club. I’m a beginner. How often do you train?",
          hint: "Look at join. Do we need a word after it?",
          fbOk: "Right.",
          fbBad: "Read the club words again: join a club.",
          fbText: "We say <b>join a club</b>, without <i>to</i>: I want to join your club."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma.</p>`,
          text: "Guess what? I {*joined|joined to|join to} the athletics club! I’m a beginner, but the {*coach|member|beginner}, Mr Hnatiuk, is very kind. We {*train|training|trains} twice a week. Myroslava is a {*member|members|join} too, so I’m not alone.",
          hint: "Who helps the runners? Myroslava is in the club too.",
          fbOk: "Well done!",
          fbBad: "Check: join a club, no to. Who helps the team?",
          fbText: "I <b>joined</b> the club: no <i>to</i>. Mr Hnatiuk is the <b>coach</b>. We <b>train</b> twice a week. Myroslava is a <b>member</b> of the club too."
        }
      ],
      outro: {
        text: "Join a club, meet the coach and train with your team. Now you can ask the right questions!",
        learned: [
          "Read posts about sports clubs and choose one.",
          "Ask about a club: How often do you train? How much does it cost?",
          "Use join, member, coach and train."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s5l3",
      title: "I used to play football, but now I swim",
      short: "Used to",
      icon: "scale",
      status: "verified",
      why: "People and their hobbies change. Say what you did in the past but don’t do now.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Then and now",
          body: `<p class="lead">Ms Kravets asks the penfriend club: “Is your sport different now?”</p><p><b>Ruby:</b> I used to play football, but now I swim in Emma’s team.<br><b>Tom:</b> I used to be scared of water. Now I go to a swimming club!<br><b>Mariia:</b> I didn’t use to like running. Now I run in the park every morning.<br><b>Andrii:</b> I used to play chess only with my grandad. Now I’m a member of a chess club.</p><p>Used to: is it about now or about the past?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Tom: “I used to be scared of water.”</p><p>Is Tom scared of water now?</p>`,
          opts: [
            "Yes, he is.",
            "No, he isn’t.",
            "He was never scared of water."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Used to</b> is about the past. It was true then, but it isn’t true now. Now Tom goes to a swimming club!"
        },
        {
          type: "info",
          title: "Used to",
          body: `<p>Ruby <b>used to play</b> football. (She played football in the past.)<br>Now she swims. (She doesn’t play football now.)</p><ul><li><b>used to</b> + verb: used to <b>play</b>, used to <b>be</b></li><li>the same for I, you, he, she, we, they: She <b>used to</b> play.</li><li>only about the past. Not: <s>I use to play</s>.</li></ul><p>This is <b>used to</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with used to.",
          text: "Andrii {*used to|use to} play chess only with his grandad. Tom {*used to|uses to} be scared of water. Ruby {*used to|was used to} play football. Now she {*swims|used to swim} in a team.",
          hint: "Used to is the same for everyone. Now → the Present Simple.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: used to + verb, only about the past.",
          fbText: "Andrii, Tom and Ruby: <b>used to</b> + verb. No <i>-s</i>, no <i>was</i>. The last sentence is about now: she <b>swims</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oliver: “I used to play football every Saturday. Now I play tennis on Saturdays.”</p><p>Does Oliver play football every Saturday now?</p>`,
          opts: [
            "Yes, he does.",
            "No, he doesn’t.",
            "Yes, and he plays tennis on Sundays."
          ],
          correct: 1,
          hint: "Used to: is it true now?",
          fbOk: "Right.",
          fbBad: "Used to is about the past, not now.",
          fbText: "Oliver <b>used to</b> play football every Saturday. It isn’t true now: now he plays tennis on Saturdays."
        },
        {
          type: "info",
          title: "Not and questions",
          body: `<ul><li>not → <b>didn’t use to</b> (no -d!): I didn’t use to like running.</li><li>? → <b>Did</b> you <b>use to</b> …? Did you use to play football?</li><li>– Yes, I <b>did</b>. / No, I <b>didn’t</b>.</li></ul><p>After <b>did</b> and <b>didn’t</b>, write <b>use to</b>, like <i>did you play</i>, not <i>did you played</i>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Mariia didn’t {*use|used|uses} to like running. {*Did|Was|Used} you use to play football, Ruby? – Yes, I {*did|used|was}. I {*didn’t|wasn’t|don’t} use to swim, but now I love it!",
          hint: "Not and questions need did. After did: use to.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: didn’t use to, Did you use to…? – Yes, I did.",
          fbText: "Didn’t <b>use</b> to, without -d. <b>Did</b> you use to…? – Yes, I <b>did</b>. I <b>didn’t</b> use to swim: it’s the past."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ms Kravets asks Andrii about chess.</p>`,
          tiles: ["Did", "you", "use", "to", "play", "chess", "with", "your grandad"],
          answer: "Did you use to play chess with your grandad?",
          extra: ["Were"],
          keepCase: true,
          hint: "Start with Did you. Then use to + verb.",
          fbOk: "Good eye!",
          fbBad: "Questions with used to start with Did.",
          fbText: "<b>Did you use to play chess with your grandad?</b> A question with <b>Did</b>, then <b>use to</b> + verb."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word with used to.",
          body: `<p>Andrii: “I played chess only with my grandad. Now I play in a club.”</p>`,
          before: "Andrii",
          after: "to play chess only with his grandad.",
          answer: "used",
          hint: "It was true in the past, but it isn’t true now.",
          fbOk: "Yes!",
          fbBad: "Andrii doesn’t do it now. … to + verb.",
          fbText: "Andrii <b>used</b> to play chess only with his grandad. Now he plays in a club."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Roksolana’s message is wrong.</p>`,
          text: "When I was little, I [use] to go skating every winter. Now I do gymnastics.",
          hint: "There is no did in the sentence.",
          fbOk: "Right.",
          fbBad: "Look at the rule: used to + verb.",
          fbText: "There is no <i>did</i>, so it’s <b>used</b> to: I <b>used to</b> go skating every winter."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>When I was seven, I couldn’t run fast, and I didn’t use to like sport. I used to sit at home and draw. Then Myroslava took me to the athletics club. Now I train twice a week, and I can run 800 metres! – Lesia</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Lesia used to run 800 metres.",
            "Lesia didn’t use to draw.",
            "Lesia used to draw at home a lot."
          ],
          correct: 2,
          hint: "Find used to and didn’t use to in the text.",
          fbOk: "Well done!",
          fbBad: "Read the first two sentences again.",
          fbText: "Lesia <b>used to</b> sit at home and draw. She <b>couldn’t</b> run fast then. Now she <b>can</b> run 800 metres."
        }
      ],
      outro: {
        text: "Used to is for things that were true in the past, but aren’t true now.",
        learned: [
          "Say what you used to do: I used to play football.",
          "Use didn’t use to and Did you use to…?",
          "Tell how your hobbies changed: then and now."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s5l4",
      title: "While we were playing, it started to snow",
      short: "While",
      icon: "eye",
      status: "verified",
      why: "A good story says what was happening and what happened. Use while, not and questions in the Past Continuous.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A match in the snow",
          body: `<p class="lead">Ostap writes to Emma about his last football match in Lviv.</p><p><i>It was a cold day in November. While we were playing, it started to snow. While the fans were singing, our coach was shouting at us. But I wasn’t listening to him! I didn’t hear him because the fans were singing so loudly.</i></p><p>Which actions happened at the same time?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>While we were playing, it started to snow.</p><p>Which action was short?</p>`,
          opts: [
            "we were playing",
            "it started to snow",
            "Both actions were long."
          ],
          correct: 1,
          pre: "e6s4l5",
          hint: "Long action → was or were + -ing.",
          fbOk: "Right.",
          fbBad: "Which action is in the Past Simple?",
          fbText: "<b>We were playing</b> is long: were + -ing. <b>It started</b> to snow is short: the Past Simple."
        },
        {
          type: "info",
          title: "While: long actions",
          body: `<p>Remember: <b>while</b> + a long action.</p><ul><li>long + short: <b>While</b> we <b>were playing</b>, it <b>started</b> to snow.</li><li>long + long: <b>While</b> the fans <b>were singing</b>, the coach <b>was shouting</b>.</li></ul><p>Long + long = two actions at the same time. Both are in the Past Continuous.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Continuous.",
          body: `<p>Saturday, from 3 to 4 pm: Ostap – playing football. Taras – taking photos. Zlata – drinking hot tea.</p>`,
          text: "While Ostap {*was playing|were playing|was play} football, Taras {*was taking|were taking|was take} photos. Zlata {*was drinking|were drinking|drinking} hot tea.",
          hint: "One person → was + -ing.",
          fbOk: "Exactly.",
          fbBad: "Check: was or were? And don’t forget -ing.",
          fbText: "Three long actions at the same time: Ostap <b>was playing</b>, Taras <b>was taking</b> photos, Zlata <b>was drinking</b> tea."
        },
        {
          type: "info",
          title: "Not, questions and because",
          body: `<ul><li>not: I <b>wasn’t listening</b>. They <b>weren’t playing</b>.</li><li>?: <b>Were</b> you <b>playing</b> when it started to snow? – Yes, we <b>were</b>.</li><li>why?: I didn’t hear the coach <b>because</b> the fans <b>were singing</b>.</li></ul><p><b>Because</b> + the Past Continuous says why something happened.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The coach: “Why didn’t you see the ball, Ostap?”</p>`,
          opts: [
            "Because I were looking at the fans.",
            "Because I was look at the fans.",
            "Because I was looking at the fans."
          ],
          correct: 2,
          hint: "I → was + -ing.",
          fbOk: "Yes!",
          fbBad: "Check two things: was or were, and -ing.",
          fbText: "<b>Because I was looking at the fans.</b> With I: <b>was</b>. And the verb has <b>-ing</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: was or were + not.",
          body: `<p>The coach asked Ostap a question. Ostap didn’t hear it.</p>`,
          before: "Sorry, I",
          after: "listening.",
          answer: "wasn’t",
          contractions: true,
          hint: "Ostap didn’t hear. Use not.",
          fbOk: "Right.",
          fbBad: "I → was. And it’s a not sentence.",
          fbText: "Ostap didn’t hear the question: Sorry, I <b>wasn’t</b> listening."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma asks Ostap about the match. Start with <b>Were</b>.</p>`,
          tiles: ["were", "you", "playing", "when", "it", "started", "to snow"],
          answer: "Were you playing when it started to snow?",
          extra: ["was"],
          hint: "Start with Were you. Then when.",
          fbOk: "Well done!",
          fbBad: "A question: Were you + -ing?",
          fbText: "<b>Were you playing when it started to snow?</b> With <b>you</b>: <b>were</b>. The short action: <b>started</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Vlad’s message is wrong.</p>`,
          text: "While Myroslava and I [was] talking, the coach called our names. We didn’t hear him!",
          hint: "Myroslava and I = we.",
          fbOk: "Good eye!",
          fbBad: "Who was talking? One person or two?",
          fbText: "Myroslava and I = we: <b>were</b> talking. <b>We didn’t hear him</b> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Last Sunday, I took part in a karate competition in Poltava. While I was waiting for my turn, my dad was talking to my coach. I was listening to music, so I didn’t hear my name! My coach was shouting, “Oksana! It’s you!” In the end, I came second.</i></p><p>Why didn’t Oksana hear her name?</p>`,
          opts: [
            "Because she was listening to music.",
            "Because her dad was shouting.",
            "Because she was fighting."
          ],
          correct: 0,
          hint: "Find what Oksana was doing.",
          fbOk: "Well done!",
          fbBad: "Read the third sentence again.",
          fbText: "Oksana <b>was listening</b> to music, so she didn’t hear her name. Her coach <b>was shouting</b>, not her dad."
        }
      ],
      outro: {
        text: "While joins long actions: While we were playing, it started to snow. While the fans were singing, the coach was shouting.",
        learned: [
          "Use while for long actions at the same time.",
          "Say what wasn’t happening: I wasn’t listening.",
          "Ask and answer: Were you playing when…? – Yes, we were.",
          "Say why with because + the Past Continuous."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s5l5",
      title: "The first Ukrainian to win: famous athletes",
      short: "The first to…",
      icon: "star",
      status: "verified",
      why: "Some athletes did something before anyone else. Say who was the first to do it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Our sports heroes",
          body: `<p class="lead">Myroslava is making a poster for her school: “Our sports heroes”.</p><p><i><b>Oksana Baiul</b> did figure skating. In 1994, at the Winter Olympics in Lillehammer, she won a gold medal. She was the first athlete to win Olympic gold for independent Ukraine.</i></p><p><i><b>Serhii Bubka</b> did the pole vault: you jump over a high bar with a long pole. In 1985, he was the first person to jump six metres.</i></p><p>The first athlete to win: what does it mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana Baiul was the first athlete to win Olympic gold for independent Ukraine.</p><p>What does it mean?</p>`,
          opts: [
            "She won the first race of the Olympics.",
            "Before her, nobody won Olympic gold for independent Ukraine.",
            "She won gold first, and then silver."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Before Baiul, nobody won Olympic gold for independent Ukraine. She was <b>the first athlete to win</b> it."
        },
        {
          type: "info",
          title: "The first … to + verb",
          body: `<p>Bubka was <b>the first person to jump</b> six metres.<br>= Nobody jumped six metres before him.</p><ul><li><b>the first</b> + person + <b>to</b> + verb</li><li><b>the youngest</b> runner <b>to</b> finish (like <i>the longest river</i>)</li><li><b>the only</b> girl <b>to</b> win</li></ul><p>After <b>to</b>: the verb, no -ed: <b>to win</b>, not <s>to won</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Lesia was the youngest girl {*to take|took|takes} part in the race. Vlad was the only player {*to score|scored|scores} three points. Ostap was the first boy in his class {*to join|joined|join} a football club.",
          hint: "The youngest, the only, the first + noun + to + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: to + verb, no -ed.",
          fbText: "The youngest girl <b>to take</b> part, the only player <b>to score</b>, the first boy <b>to join</b>: to + verb."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p>Emma adds a British hero to the poster.</p><p><i><b>Roger Bannister</b> was a runner from England. On 6 May 1954, in Oxford, he ran a mile (about 1,600 metres) in 3 minutes 59.4 seconds. He was the first person to run a mile in under four minutes.</i></p><p>What was Roger Bannister the first person to do?</p>`,
          opts: [
            "to jump over a high bar with a pole",
            "to win a gold medal in figure skating",
            "to run a mile in under four minutes"
          ],
          correct: 2,
          hint: "Find the first person to in the text.",
          fbOk: "Right.",
          fbBad: "Read the last sentence about Bannister again.",
          fbText: "Bannister was <b>the first person to run</b> a mile in under four minutes. Bubka did the pole vault, and Baiul did figure skating."
        },
        {
          type: "info",
          title: "Stories about athletes",
          body: `<p>Stories about athletes are in the Past Simple.</p><ul><li>win → <b>won</b>, run → <b>ran</b></li><li>become → <b>became</b>: She became a champion.</li><li>break → <b>broke</b>: She broke the world record.</li></ul><p>a <b>world record</b> = the best result in the world</p><p><u>ath</u>lete, O<u>lym</u>pic, <u>he</u>ro</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple.",
          body: `<p>Yaroslava Mahuchikh from Dnipro does the high jump.</p>`,
          text: "In July 2024, in Paris, Yaroslava Mahuchikh {*broke|breaked|break} the world record: she jumped 2.10 metres. She was the first woman {*to jump|jumped|jumping} so high. In August, she {*won|winned|wins} the Olympic gold medal. She {*became|becomed|become} the Olympic champion.",
          hint: "Break, win and become are irregular. After the first woman: to + verb.",
          fbOk: "Well done!",
          fbBad: "Look at the list: break → broke, win → won, become → became.",
          fbText: "She <b>broke</b> the world record, <b>won</b> gold and <b>became</b> the champion. She was the first woman <b>to jump</b> so high."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+ath|lete", "O|+lym|pic", "+he|ro", "+cham|pi|on"],
          fbOk: "Good eye!",
          fbBad: "Say the words slowly. Which part is strong?",
          fbText: "<u>ath</u>lete, O<u>lym</u>pic, <u>he</u>ro, <u>cham</u>pion."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write about Roger Bannister.</p>`,
          tiles: ["He", "was", "the first", "person", "to run", "a mile", "in under", "four minutes"],
          answer: "He was the first person to run a mile in under four minutes.",
          extra: ["ran"],
          keepCase: true,
          hint: "He was the first person… Then to + verb.",
          fbOk: "Yes!",
          fbBad: "After the first person: to + verb.",
          fbText: "<b>He was the first person to run a mile in under four minutes.</b> After <i>the first person</i>: <b>to run</b>, not <i>ran</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Ten girls ran the race, and they all finished. Lesia is eleven, and she came third. All the other runners are twelve or thirteen.</p>`,
          before: "Lesia was the",
          after: "runner to finish the race.",
          answer: ["youngest", "third"],
          hint: "Young → the …est, like the longest river.",
          fbOk: "Right.",
          fbBad: "Lesia is younger than everyone. Young → ?",
          fbText: "Lesia is younger than all the others, so she was <b>the youngest</b> runner to finish the race. (She came third, so <b>the third</b> runner to finish is true too.)"
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Myroslava finishes her poster.</p>`,
          text: "Oksana Baiul was the first athlete {*to win|won|winning} Olympic gold for independent Ukraine. Serhii Bubka {*was|were|did} the first person to jump six metres. Yaroslava Mahuchikh {*broke|break|broken} the world record in 2024. One day, I want to be the first girl from our club {*to win|win|won} a medal at the Olympics!",
          hint: "The first + noun + to + verb. 2024 is the past.",
          fbOk: "Well done!",
          fbBad: "Check: to + verb after the first athlete; break → broke.",
          fbText: "The first athlete <b>to win</b>; Bubka <b>was</b> the first; Mahuchikh <b>broke</b> the world record; the first girl <b>to win</b> a medal."
        }
      ],
      outro: {
        text: "The first person to jump six metres, the first athlete to win: the first + noun + to + verb.",
        learned: [
          "Say who was the first to do something: the first person to run…",
          "Use the youngest and the only + noun + to + verb.",
          "Tell about Ukrainian and British athletes in the Past Simple."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s5l6",
      title: "The day we won: a story about a competition",
      short: "A sports story",
      icon: "book",
      status: "verified",
      why: "Everyone loves a good sports story. Read one, then say what you think about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Your best day in sport",
          body: `<p class="lead">Taras’s school in Lviv has a sports page. This month’s question is: “What was your best day in sport?”</p><p>Vlad sends a story. It’s called “The day we won”.</p><p>What makes a good sports story?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The day we won, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Our volleyball team used to lose to School 3. Every year, we played against them in the tournament, and every year they won. This year, we met them again in the final. It was a cold Saturday in March, and the hall was full. While we were warming up, our fans were singing. I was very nervous. Our coach said, “Don’t think about last year. Just play!”</i></p><p>Why was this final special for Vlad’s team?</p>`,
          opts: [
            "It was their first tournament.",
            "They used to lose to School 3 every year.",
            "Their coach was new."
          ],
          correct: 1,
          hint: "Find used to in the text.",
          fbOk: "Yes!",
          fbBad: "Read the first two sentences again.",
          fbText: "Vlad’s team <b>used to lose</b> to School 3. Every year, School 3 won. So this final was special."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: The day we won, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>School 3 won the first set (a part of the match), and we won the second. In the last set, the score was 14–13 to us. Suddenly, Taras shouted, “Go, Vlad!” I jumped and hit the ball as hard as I could. They didn’t get it! We won 15–13. We were the first team from our school to win the cup. I think it was the best day of my life. School 3 played really well too.</i></p><p>What does Vlad think?</p>`,
          opts: [
            "It was the best day of his life.",
            "The match was boring.",
            "School 3 played really well.",
            "His team played badly."
          ],
          correct: [0, 2],
          hint: "Find I think in the text. What does Vlad say about School 3?",
          fbOk: "Well done!",
          fbBad: "Read the last two sentences again.",
          fbText: "Vlad thinks it was <b>the best day of his life</b>. He also says <b>School 3 played really well</b> too."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole story “The day we won”.</p><p>What is it about?</p>`,
          opts: [
            "how a team lost every match",
            "how to play volleyball",
            "how Vlad’s team won the final at last"
          ],
          correct: 2,
          hint: "Look at the title of the story.",
          fbOk: "Right.",
          fbBad: "Did Vlad’s team win or lose this year?",
          fbText: "The team used to lose, but this year they <b>won the final</b>. That’s why the story is called “The day we won”."
        },
        {
          type: "info",
          title: "A good sports story",
          body: `<ul><li><b>Start:</b> when, where, the weather → the Past Continuous: <i>It was raining. The fans were singing.</i></li><li><b>What happened</b> → the Past Simple with <i>Then</i>, <i>Suddenly</i>, <i>In the end</i>: <i>In the end, we won!</i></li><li><b>Your opinion:</b> <i>I think we played really well. It was the best day of my life!</i></li></ul>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Put Vlad’s story in order.</p>`,
          items: [
            "It was a cold Saturday in March.",
            "While we were warming up, our fans were singing.",
            "In the last set, the score was 14–13.",
            "Suddenly, Taras shouted, “Go, Vlad!”",
            "In the end, we won 15–13."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "A story starts with when and where. It finishes with In the end.",
          fbOk: "Good eye!",
          fbBad: "Start with the day and the weather.",
          fbText: "Start: the day and the weather. Then the fans before the game, the score 14–13 and Taras’s shout. <b>In the end</b>, they won."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["It was the best day", "We were the first team", "While we were warming up,", "I jumped and hit the ball"],
          right: ["of my life!", "from our school to win the cup.", "our fans were singing.", "as hard as I could."],
          hint: "The first team… to + verb. While + a long action.",
          fbOk: "Yes!",
          fbBad: "Read Vlad’s story again.",
          fbText: "The best day <b>of my life</b>. The first team from our school <b>to win</b> the cup. While we were warming up, our fans <b>were singing</b>. I hit the ball <b>as hard as I could</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word with used to.",
          body: `<p>Every year, Vlad’s team lost to School 3. This year they won!</p>`,
          before: "Vlad’s team",
          after: "to lose to School 3, but this year they won.",
          answer: "used",
          hint: "It was true in the past, but it isn’t true now.",
          fbOk: "Right.",
          fbBad: "… to + verb: about the past, not now.",
          fbText: "Vlad’s team <b>used</b> to lose. Now it isn’t true: this year they won!"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a story for the penfriend club.</p>`,
          text: "Last weekend, I {*took|take|taked} part in a chess tournament in Kyiv. While I {*was playing|were playing|was play} my last game, my grandad {*was watching|were watching|was watch} me. In the end, I won! I was the youngest player {*to win|won|winning} a game against a champion. I {*think|thinks|thinking} it was the best day ever.",
          hint: "Take → took. Long actions: was + -ing. The youngest player… to + verb.",
          fbOk: "Well done!",
          fbBad: "Check: took; was + -ing for I and he; to + verb.",
          fbText: "I <b>took</b> part. While I <b>was playing</b>, my grandad <b>was watching</b>. The youngest player <b>to win</b>. I <b>think</b> it was the best day ever."
        }
      ],
      outro: {
        text: "A good sports story starts with the scene, says what happened and ends with your opinion.",
        learned: [
          "Read a sports story and say what happened.",
          "Start a story with the Past Continuous and tell the action in the Past Simple.",
          "Say what you think: It was the best day of my life."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s5l7",
      title: "Our club newsletter",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e7s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the club newsletter?",
          body: `<p class="lead">Mr Hnatiuk is writing a newsletter for the Lviv Junior Athletics Club.</p><p>He needs your help. Check the sentences. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Ilona came {*first|one|the one} in the 400 metres. She got a {*gold|silver|bronze} medal. Lesia came third: she got a {*bronze|gold|silver} medal.",
          pre: "e7s5l1",
          hint: "First → gold, third → bronze.",
          fbOk: "Yes!",
          fbBad: "Look at the places and the medals.",
          fbText: "Ilona came <b>first</b>: a <b>gold</b> medal. Third place: a <b>bronze</b> medal."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>A new boy wants to know: do the runners train once, twice or three times a week?</p><p>What does he ask?</p>`,
          opts: [
            "How much does it cost?",
            "How often do you train?",
            "Who is the coach?"
          ],
          correct: 1,
          pre: "e7s5l2",
          fbOk: "Right.",
          fbBad: "Once, twice: how … ?",
          fbText: "<b>How often</b> do you train? – Twice a week. <i>How much</i> is about money."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word with used to.",
          body: `<p>Taras watched races on TV. Now he runs in them!</p>`,
          before: "Taras",
          after: "to watch races on TV. Now he runs in them!",
          answer: "used",
          pre: "e7s5l3",
          hint: "Does Taras watch races on TV now, or did he do it in the past?",
          fbOk: "Well done!",
          fbBad: "True in the past, not now: … to + verb.",
          fbText: "Taras <b>used</b> to watch races. Now he runs in them."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Find the mistake.",
          body: `<p>One word in the newsletter is wrong.</p>`,
          text: "While we [was] warming up, our fans were singing. It wasn’t raining.",
          pre: "e7s5l4",
          hint: "Check each verb with its subject: we, our fans, it.",
          fbOk: "Good eye!",
          fbBad: "We → was or were?",
          fbText: "We <b>were</b> warming up. <b>Our fans were singing</b> and <b>It wasn’t raining</b> are correct."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Mr Hnatiuk asks Lesia about the race.</p>`,
          tiles: ["Were", "you", "listening", "to", "the coach"],
          answer: "Were you listening to the coach?",
          extra: ["Was"],
          keepCase: true,
          pre: "e7s5l4",
          fbOk: "Yes!",
          fbBad: "A question with you: Were you + -ing?",
          fbText: "<b>Were you listening to the coach?</b> With <b>you</b>: <b>were</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "In 1954, Roger Bannister {*ran|run|runned} a mile in under four minutes. He was the first person {*to do|did|doing} it.",
          pre: "e7s5l5",
          fbOk: "Exactly.",
          fbBad: "Run → ? After the first person: to + verb.",
          fbText: "Run → <b>ran</b>. He was the first person <b>to do</b> it."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>We lost the final 1–2, but I think we played really well. It was a great day!</i></p><p>What does the writer think?</p>`,
          opts: [
            "It was a bad day.",
            "The team won the final.",
            "The team played well."
          ],
          correct: 2,
          pre: "e7s5l6",
          fbOk: "Right.",
          fbBad: "Find I think in the text.",
          fbText: "The team lost, but the writer thinks they <b>played really well</b>. It was a great day."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about competitions, clubs and famous athletes, and tell a sports story.",
        learned: [
          "Talk about races, matches, tournaments and medals.",
          "Ask about a sports club and join it.",
          "Use used to, while and the first … to + verb.",
          "Read a sports story and give your opinion."
        ]
      }
    }
  ]
});
