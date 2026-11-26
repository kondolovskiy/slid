/* Слід · Англійська мова, 9 клас — «Youth culture and clubs» (e9s5)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Молодіжна культура» — течії молодіжної
   культури; молодіжні організації; клуби за інтересами (PDF с. 33, розд. 5.2.3); функції — приймати чи відхиляти
   пропозицію, аргументувати вибір (с. 33); граматика B1 (с. 34–35): Relative — with ‘whose’, ‘where’, ‘why’, ‘when’ (нове);
   повторення — who / which / that (e6s6l3, e8s4l3), non-defining з комами (e8s4l4); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   where vs which (a club where we meet / a club which meets) — за наступними словами; in which для 9 кл. не вчимо.
   Молодіжні організації — лише перевірені факти (Plast: 1911 і 12.04.1912 — обидві дати з поясненням; the Scouts — 1907,
   Brownsea Island; DofE — 1956, 14–24, Bronze/Silver/Gold), без політики; течії — без оцінок і стереотипів.
   URL — tasks/…/write-eng-g9-e9s5.md, «Нотатки агента».
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (Oksana 15, Emma 15, Tom 13). Нове: Ostap (друг Taras, Lviv) —
   член Пласту; Emma — Bronze DofE; Tom — скейтер (skatepark, де він зламав руку — e7s3); Mariia — клуб коміксів у Kharkiv;
   Taras і Myroslava відкривають фотоклуб у School 5 (Lviv, Mr Pavliuk — e8s3); Marko — кузен Ostap (12).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Форми, наголос і значення — CD, CD Grammar (relative pronouns, whose, when).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s5, 2026-11-26). 7 уроків (6 + фінал). Будова — за e8s4.
   Перевірка: node tools/validate.mjs --section e9s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s5",
  grade: 9,
  weeks: [17, 20],
  title: "Youth culture and clubs",
  why: "To talk about youth culture, youth organisations and clubs. And to give more information about people, places and times.",
  requires: ["e6s6l3", "e5s1l3", "e5s7l1", "e5s6l1", "e5s6l5", "e7s6l1", "e8s4l3", "e8s4l4"],
  meta: { author: "writer-e9s5", created: "2026-11-25", factcheck: "verifier-e9s5, 2026-11-26 (reports/verify/write-eng-g9-e9s5.md)", teacher: null },
  badges: [
    { id: "e9s5boss", name: "Club captain", icon: "trophy", desc: "Finish the final lesson “Youth culture and clubs”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s5l1",
      title: "Music, style and hobbies: youth culture",
      short: "Youth culture",
      icon: "voice",
      status: "verified",
      why: "Teenagers have different music, clothes and hobbies. Learn the words and say what you are into.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What are you into?",
          body: `<p class="lead">Andrii’s school newspaper asks teenagers online: “What are you into?”</p><p><b>Bohdan (Kyiv):</b> I’m into rap. I write my own songs about our city.<br><b>Zoriana (Kyiv):</b> I’m a gamer. I play online games with friends from other countries.<br><b>Mariia (Kharkiv):</b> I draw comics and share them online.<br><b>Tom (England):</b> I’m a skater. I hang out at the skatepark at the weekend.<br><b>Emma (England):</b> I love vintage clothes: old clothes with a lot of style.</p><p>Music, games, clothes, sport: what are you into?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Tom says, “I’m into skateboarding.” What does he mean?</p>`,
          opts: [
            "He is in a skateboarding shop.",
            "He likes skateboarding a lot.",
            "He doesn’t like skateboarding."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I’m into skateboarding</b> = I like it a lot. It’s informal: we say it to friends. The next screen has more words."
        },
        {
          type: "info",
          title: "Youth culture",
          body: `<p><b>Youth <u>cul</u>ture</b> → the music, clothes and hobbies of young people. Every <u>teen</u>ager is different!</p><ul><li>I’m <b>into</b> rap. → I like it a lot.</li><li>a <b>fan</b> → a person who loves a singer, a team or a game</li><li><b>hang out</b> → spend time with friends</li><li>a <b>trend</b> → something popular right now</li></ul>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Zoriana plays online games every day. She likes them a lot.</p>`,
          before: "Zoriana is really",
          after: "online games.",
          answer: ["into"],
          hint: "I like rap a lot. → I’m … rap.",
          fbOk: "Well done!",
          fbBad: "Look at the list: I’m … rap.",
          fbText: "Zoriana is really <b>into</b> online games: she likes them a lot."
        },
        {
          type: "info",
          title: "Gamers, skaters, vloggers",
          body: `<ul><li>a <b>gamer</b> → a person who plays com<u>pu</u>ter games</li><li>a <b>skater</b> → a person who rides a skateboard</li><li>a <b><u>vlog</u>ger</b> → a person who makes videos for the internet</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a gamer", "a skater", "a vlogger", "a trend", "hang out"],
          right: ["a person who plays computer games", "a person who rides a skateboard", "a person who makes videos for the internet", "something popular right now", "spend time with friends"],
          hint: "Which one is about videos? Which one is about time with friends?",
          fbOk: "Well done!",
          fbBad: "Look at the lists “Youth culture” and “Gamers, skaters, vloggers” again.",
          fbText: "A <b>gamer</b> plays computer games. A <b>skater</b> rides a skateboard. A <b>vlogger</b> makes videos. A <b>trend</b> is popular right now. <b>Hang out</b> = spend time with friends."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+teen|ag|er", "+cul|ture", "com|+pu|ter", "+vlog|ger"],
          hint: "Look at the underlined parts on the lists “Youth culture” and “Gamers, skaters, vloggers”.",
          fbOk: "Yes!",
          fbBad: "In one word, the strong part isn’t at the start.",
          fbText: "<u>teen</u>ager, <u>cul</u>ture, <u>vlog</u>ger: the first part is strong. com<u>pu</u>ter: the second part is strong."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Daryna makes short videos about Ukrainian folk songs. She puts a new video online every week. What is she?</p>`,
          opts: [
            "a skater",
            "a gamer",
            "a vlogger"
          ],
          correct: 2,
          hint: "Who makes videos for the internet?",
          fbOk: "Right.",
          fbBad: "Look at the list: videos for the internet.",
          fbText: "Daryna makes videos for the internet, so she’s a <b>vlogger</b>. A skater rides a skateboard. A gamer plays computer games."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "At the weekend, I usually hang [in] with my friends at the skatepark. We’re all into skateboarding.",
          hint: "Spend time with friends: hang …?",
          fbOk: "Good eye!",
          fbBad: "Look at the first sentence. Which little word is wrong?",
          fbText: "Not <s>hang in</s>, but <b>hang out</b> with my friends. <b>We’re all into skateboarding</b> is correct."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "I’m really {*into|in} vintage clothes. On Saturdays, I {*hang out|hang on} with my friends in second-hand shops. My brother Tom is a {*skater|gamer}: he spends hours at the skatepark. Is vintage a big {*trend|fan} in Ukraine too?",
          hint: "I like it a lot. Spend time with friends. The skatepark. Popular right now.",
          fbOk: "Exactly.",
          fbBad: "Look at the lists “Youth culture” and “Gamers, skaters, vloggers” again.",
          fbText: "I’m <b>into</b> = I like a lot. <b>Hang out</b> = spend time with friends. The skatepark → a <b>skater</b>. Popular right now → a <b>trend</b>. A fan is a person."
        }
      ],
      outro: {
        text: "Gamers, skaters, vloggers, fans: every teenager is into something different.",
        learned: [
          "Name parts of youth culture: a gamer, a skater, a vlogger, a trend.",
          "Say what you like: I’m into rap.",
          "Say how you spend time: I hang out with my friends."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s5l2",
      title: "Plast and the Scouts: youth organisations",
      short: "Youth organisations",
      icon: "path",
      status: "verified",
      why: "Learn about Plast, the Scouts and the Duke of Edinburgh’s Award. And talk about camps, hikes and volunteers.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Camps, hikes and awards",
          body: `<p class="lead">Taras writes to Emma.</p><p><i>My friend Ostap is a member of Plast. In July, he went to a summer camp in the mountains. They went hiking and slept in tents. Are there clubs like that in England?</i></p><p class="lead">Emma answers.</p><p><i>Yes! Lots of my friends are Scouts. And I’m doing my Bronze DofE. Next month, my group is going on an expedition!</i></p><p>Plast, the Scouts, the DofE: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ostap goes to camps and goes hiking with Plast. What is Plast?</p>`,
          opts: [
            "a Ukrainian Scout organisation",
            "a sports shop in Lviv",
            "a music school"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Plast is the <b>Scout organisation of Ukraine</b>. You can read about it in two screens."
        },
        {
          type: "info",
          title: "Youth organisations",
          body: `<ul><li>a youth <b>organi<u>sa</u>tion</b> → a big group for young people, with groups in many towns</li><li>a <b><u>mem</u>ber</b> → a person in a club; <b>join</b> → become a member</li><li>a <b>camp</b> → a place where you stay in tents</li><li><b>go hiking</b> → go for a long walk in the mountains</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Youth organisations, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Plast is the Scout organisation of Ukraine. It started in Lviv more than 100 years ago. Some books give the year 1911: the first groups met then. Others give 12 April 1912: that was the official start. The name comes from the plastuny, Cossack scouts long ago. Today, Plast members go to camps and go hiking.</i></p><p>Why do books give two different years?</p>`,
          opts: [
            "Plast started in two different cities.",
            "Nobody knows when Plast started.",
            "The first groups met in 1911, and the official start was in 1912."
          ],
          correct: 2,
          hint: "Look at the sentences with 1911 and 1912.",
          fbOk: "Right.",
          fbBad: "What happened in 1911? And in 1912?",
          fbText: "In <b>1911</b>, the first groups met in Lviv. <b>12 April 1912</b> was the official start. So we can say: Plast started <b>more than 100 years ago</b>."
        },
        {
          type: "info",
          title: "Volunteers and awards",
          body: `<ul><li>a <b>volun<u>teer</u></b> → a person who helps without pay; to <b>volunteer</b></li><li>a <b>leader</b> → an adult who leads a group</li><li>an <b>award</b> → a prize for good work</li><li>an <b>expe<u>di</u>tion</b> → a long trip with a team</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Youth organisations, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>The Scouts started in England. In 1907, Robert Baden-Powell took about twenty boys to a camp on Brownsea Island. Soon there were Scouts in many countries. In the UK, lots of teenagers also do the Duke of Edinburgh’s Award (DofE). It started in the UK in 1956. Young people from 14 to 24 can take part. There are three levels: Bronze, Silver and Gold. You volunteer, do a sport, learn a new skill and go on an expedition.</i></p><p>Emma is fifteen. Can she do the DofE?</p>`,
          opts: [
            "No, because it’s only for adults.",
            "Yes, because it’s for young people from 14 to 24.",
            "No, because it started in 1956."
          ],
          correct: 1,
          hint: "Find the ages in the text.",
          fbOk: "Yes!",
          fbBad: "Look for the numbers 14 and 24.",
          fbText: "The DofE is for young people <b>from 14 to 24</b>. Emma is fifteen, so she can take part. She’s doing the first level, <b>Bronze</b>."
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are true? Remember the two parts of the text.</p>`,
          opts: [
            "Plast started in Lviv.",
            "Baden-Powell’s first Scout camp was in 1907.",
            "The DofE has four levels.",
            "Plast is more than 100 years old.",
            "The DofE started in Ukraine."
          ],
          correct: [0, 1, 3],
          hint: "Check the cities, the years and the levels.",
          fbOk: "Well done!",
          fbBad: "Bronze, Silver, Gold: how many levels? Where did the DofE start?",
          fbText: "True: Plast started <b>in Lviv</b> more than 100 years ago, and the first Scout camp was <b>in 1907</b>. The DofE has <b>three</b> levels, and it started <b>in the UK</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras tells Ostap about the text. Remember who, which and that.</p>`,
          text: "Baden-Powell was the man {*who|which} started the Scouts. Plast is an organisation {*which|who} started in Lviv. Bronze is the level {*that|who} comes first in the DofE.",
          hint: "Is it a person or a thing?",
          fbOk: "Exactly.",
          fbBad: "People → who. Things → which or that.",
          fbText: "Baden-Powell is a person: <b>who</b>. Plast and Bronze are things: <b>which</b> or <b>that</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+mem|ber", "vol|un|+teer", "ex|pe|+di|tion", "or|gan|i|+sa|tion"],
          hint: "Look at the underlined parts on the lists “Youth organisations” and “Volunteers and awards”.",
          fbOk: "Good eye!",
          fbBad: "Only one of these words has the strong part at the start.",
          fbText: "<u>mem</u>ber: the first part. volun<u>teer</u>: the last part. expe<u>di</u>tion, organi<u>sa</u>tion: the part before <i>-tion</i> is strong."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Ostap helps old people in his street on Saturdays. Nobody pays him.</p>`,
          before: "Ostap is a",
          after: ".",
          answer: ["volunteer"],
          hint: "A person who helps without pay is a …",
          fbOk: "Well done!",
          fbBad: "Look at the list: a person who helps without pay.",
          fbText: "Ostap helps people without pay, so he’s a <b>volunteer</b>."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes more about her DofE.</p>`,
          text: "I’m a {*member|leader} of the DofE group at my school. Our {*leader|member} is Mr Price, our teacher. Every Saturday, I {*volunteer|join} at the library: I help little children with reading. Next month, our group is going on an {*expedition|award}: two days on foot, with tents!",
          hint: "Emma is in the group. Mr Price is an adult. She helps without pay. A long trip.",
          fbOk: "Well done!",
          fbBad: "Look at the lists “Youth organisations” and “Volunteers and awards” again.",
          fbText: "Emma is a <b>member</b>. Mr Price, an adult, is the <b>leader</b>. She helps without pay: she <b>volunteers</b>. A long trip with a team → an <b>expedition</b>. An award is a prize."
        }
      ],
      outro: {
        text: "Plast started in Lviv more than 100 years ago, the Scouts started in England in 1907, and the DofE in 1956.",
        learned: [
          "Talk about youth organisations: Plast, the Scouts, the DofE.",
          "Use words for clubs: a member, a leader, a camp, an expedition.",
          "Say what volunteers do."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s5l3",
      title: "A club where…, a day when…: relative clauses",
      short: "Where, when",
      icon: "map",
      status: "verified",
      why: "Say more about places and times. Use where and when, and choose between where and which.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "The place where it all started",
          body: `<p class="lead">Tom sends Andrii a photo.</p><p><i>This is the skatepark where I hang out with my friends. Two years ago, I broke my arm here, but I’m OK now! Saturday is the day when we all meet. Summer is the time when the park is full.</i></p><p>Look at <i>where</i> and <i>when</i>. Which word is about a place? Which is about a time?</p>`,
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
            "This is the skatepark where I hang out.",
            "This is the skatepark when I hang out.",
            "This is the skatepark who I hang out."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>This is the skatepark where I hang out.</b> A skatepark is a place, so we use <i>where</i>. Look at the next screen."
        },
        {
          type: "info",
          title: "Where and when",
          body: `<ul><li>a place + <b>where</b> + a sentence: the skatepark <b>where</b> I hang out (= I hang out <i>there</i>)</li><li>a time + <b>when</b> + a sentence: the day <b>when</b> we meet (= we meet <i>on that day</i>)</li></ul><p>Can you say <i>there</i>? → <b>where</b>. Can you say <i>then</i> or <i>on that day</i>? → <b>when</b>.</p><p>After a time, you can also say <b>that</b> or leave the word out: the day (that) we meet.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about the Scouts and Plast.</p>`,
          text: "Brownsea Island is the place {*where|when} the first Scout camp was. 1907 is the year {*when|where} it happened. Lviv is the city {*where|when} Plast started.",
          hint: "Is it a place or a time?",
          fbOk: "Exactly.",
          fbBad: "Place → where. Time → when.",
          fbText: "Brownsea Island and Lviv are places: <b>where</b>. 1907 is a time: <b>when</b>."
        },
        {
          type: "info",
          title: "Where or which?",
          body: `<p>Places are things too. Look at the words after the gap.</p><ul><li>a club <b>where we meet</b> → a person + a verb (we meet <i>there</i>)</li><li>a club <b>which meets</b> on Fridays → a verb comes next</li><li>a town <b>which I love</b> → I love <i>the town</i>, not <s>I love there</s></li></ul><p>Both words can be correct. Check the words after them.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Ostap writes about Plast. Which sentence is correct?</p>`,
          opts: [
            "Plast has a camp where is in the mountains.",
            "Plast has a camp which we sleep in tents.",
            "Plast has a camp which is in the mountains."
          ],
          correct: 2,
          hint: "Look at the words after where and which. Is there a verb or a person?",
          fbOk: "Right.",
          fbBad: "Where + a person + a verb. Which + a verb.",
          fbText: "<b>a camp which is in the mountains</b>: a verb comes next, so <i>which</i>. We can say <i>a camp <b>where</b> we sleep in tents</i> (we sleep <i>there</i>), but not <s>which we sleep</s>."
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the phrases.",
          body: `<p>Which word goes in the gap?</p>`,
          bins: ["where", "which"],
          items: [
            ["the park ___ we skate", 0],
            ["the park ___ is near my school", 1],
            ["the camp ___ we slept in tents", 0],
            ["the club ___ meets on Fridays", 1],
            ["the city ___ Plast started", 0],
            ["the city ___ I love most", 1]
          ],
          hint: "Can you say there? We skate there. I love there?",
          fbOk: "Well done!",
          fbBad: "A verb next → which. A person + a verb, and you can say there → where.",
          fbText: "<b>where</b>: we skate there, we slept there, Plast started there. <b>which</b>: the park is near my school, the club meets, I love the city (not <s>I love there</s>)."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras shows Emma a photo from Ostap.</p>`,
          tiles: ["this", "is", "the camp", "where", "Ostap", "stayed", "in July"],
          extra: ["when"],
          answer: ["This is the camp where Ostap stayed in July.", "The camp where Ostap stayed in July is this.", "Is this the camp where Ostap stayed in July?", "Is the camp where Ostap stayed in July this?"],
          hint: "Start with This is the camp…",
          fbOk: "Good eye!",
          fbBad: "A camp is a place: where or when?",
          fbText: "<b>This is the camp where Ostap stayed in July.</b> A camp is a place, and Ostap stayed <i>there</i>: <b>where</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "Wednesday is the day [where] our DofE group meets. We meet in the library, where I volunteer.",
          hint: "Wednesday is a time. Which word do we use for times?",
          fbOk: "Good eye!",
          fbBad: "Look at the first sentence: Wednesday is a day, not a place.",
          fbText: "Not <s>the day where</s>, but <b>the day when</b> our group meets. <b>The library, where I volunteer</b> is correct: the library is a place."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Tom writes about his first skateboard.</p>`,
          before: "My tenth birthday was the day",
          after: "I got my first skateboard.",
          answer: ["when", "that"],
          hint: "A birthday is a time. And a person + a verb come next.",
          fbOk: "Well done!",
          fbBad: "A time + a sentence: which word?",
          fbText: "A birthday is a time: the day <b>when</b> (or <b>that</b>) I got my first skateboard."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her school club.</p>`,
          text: "Zelena Dolyna is the village {*where|when} I live. Our school has an eco club {*which|where} meets every Friday. Friday is the day {*when|where} we plan our projects. Last spring, we planted trees in the school garden {*where|which} the little children play.",
          hint: "Place or time? And what comes next: a verb, or a person + a verb?",
          fbOk: "Exactly.",
          fbBad: "Place + a person + a verb → where. A verb next → which. Time → when.",
          fbText: "I live <i>there</i>: <b>where</b>. <i>meets</i> is a verb: <b>which</b>. Friday is a time: <b>when</b>. The children play <i>there</i>: <b>where</b>."
        }
      ],
      outro: {
        text: "The skatepark where I hang out, the day when we meet: where for places, when for times.",
        learned: [
          "Use where for places: the camp where we stayed.",
          "Use when for times: the day when we meet.",
          "Choose where or which: a club where we meet, a club which meets on Fridays."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s5l4",
      title: "A friend whose hobby is…: whose",
      short: "Whose",
      icon: "users",
      status: "verified",
      why: "Say whose things you mean in one sentence. And don’t mix up whose and who’s.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A friend whose comics are funny",
          body: `<p class="lead">Mariia writes to Zofia.</p><p><i>I’ve joined a comics club in Kharkiv! It’s a club whose members draw comics together. Polina is the friend whose comics I like most: they’re about a superhero dog. Is your sister the girl whose concert photos you sent me?</i></p><p>Look at <i>whose</i>. What does it mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><i>Polina is the friend <b>whose</b> comics I like most.</i> What does <i>whose</i> mean here?</p>`,
          opts: [
            "who is",
            "her (Polina’s)",
            "where"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<i>whose comics</i> = <b>her</b> comics, Polina’s comics. Look at the next screen."
        },
        {
          type: "info",
          title: "Whose",
          body: `<p><b>whose</b> = his, her, its or their.</p><ul><li>Polina is a friend. <b>Her</b> comics are funny. → Polina is the friend <b>whose comics</b> are funny.</li><li>It’s a club. <b>Its</b> members draw comics. → a club <b>whose members</b> draw comics</li></ul><p>After <i>whose</i> comes a noun. Use it for people and things.</p><p>Don’t mix it up with <s>who’s</s>: who’s = who is.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his friends.</p>`,
          text: "Liam is the boy {*whose|who’s} cousin plays chess. Daryna is the girl {*who|whose} loves geography. Ostap is the friend {*whose|who} photos from the camp are great.",
          hint: "Is there a noun after the gap: cousin, photos? Or a verb?",
          fbOk: "Exactly.",
          fbBad: "Whose + a noun. Who + a verb.",
          fbText: "<b>whose cousin</b> = his cousin. <b>whose photos</b> = his photos. Daryna <b>who loves</b>: a verb comes next, so <i>who</i>. Who’s = who is."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Make one sentence: <i>I know a boy. His mum is a Plast leader.</i></p>`,
          opts: [
            "I know a boy who his mum is a Plast leader.",
            "I know a boy whose mum is a Plast leader.",
            "I know a boy whose his mum is a Plast leader."
          ],
          correct: 1,
          hint: "Whose = his. Do we need his too?",
          fbOk: "Right.",
          fbBad: "Whose already means his.",
          fbText: "<b>I know a boy whose mum is a Plast leader.</b> <i>Whose</i> means <i>his</i>, so we don’t say <s>whose his</s> or <s>who his</s>."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["Lviv is the city", "1912 is the year", "Baden-Powell is the man", "Plast is an organisation"],
          right: ["where Plast started.", "when Plast had its official start.", "who took about twenty boys to a camp in 1907.", "which has members in other countries too."],
          hint: "A place, a time, a person or a thing?",
          fbOk: "Well done!",
          fbBad: "Place → where. Time → when. A person → who. A thing + a verb → which.",
          fbText: "Lviv: <b>where</b>. 1912: <b>when</b>. Baden-Powell is a person: <b>who</b> took the boys to a camp. Plast is a thing: <b>which</b> has members."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii tells Bohdan about Emma.</p>`,
          tiles: ["Emma", "is", "the girl", "whose", "brother", "skates"],
          extra: ["who’s"],
          answer: ["Emma is the girl whose brother skates.", "The girl whose brother skates is Emma.", "Is Emma the girl whose brother skates?", "Is the girl whose brother skates Emma?"],
          hint: "Start with Emma is the girl…",
          fbOk: "Good eye!",
          fbBad: "Her brother: whose or who’s?",
          fbText: "<b>Emma is the girl whose brother skates.</b> <i>Whose brother</i> = her brother. Who’s = who is."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "Polina is the friend [who’s] comics I like most. She’s the best artist in our club.",
          hint: "Her comics: which word?",
          fbOk: "Good eye!",
          fbBad: "Look at the first sentence. Who’s = who is.",
          fbText: "Not <s>who’s comics</s>, but <b>whose comics</b> (her comics). <b>She’s the best artist</b> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana’s school has a band. Its guitarist is only twelve.</p>`,
          before: "Our school has a band",
          after: "guitarist is only twelve.",
          answer: ["whose"],
          hint: "Its guitarist → … guitarist.",
          fbOk: "Well done!",
          fbBad: "A noun comes next: guitarist. Its = …",
          fbText: "Its guitarist → a band <b>whose</b> guitarist is only twelve. We use <i>whose</i> for things too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes on the club blog.</p>`,
          text: "Polina, {*whose|who} comics are very funny, is my best friend. Our club meets in a café {*where|which} we can draw for hours. Thursday is the day {*when|where} we meet. Zofia, {*who|whose} lives in Poland, reads our comics online.",
          hint: "A noun next → whose. A verb next → who. Place → where. Time → when.",
          fbOk: "Well done!",
          fbBad: "Look at the next word after each gap.",
          fbText: "Polina, <b>whose</b> comics (her comics). A café: we draw <i>there</i> → <b>where</b>. Thursday is a time: <b>when</b>. Zofia, <b>who</b> lives: a verb comes next."
        }
      ],
      outro: {
        text: "A friend whose comics are funny, a club whose members draw: whose means his, her, its or their.",
        learned: [
          "Use whose + a noun: the friend whose comics I like.",
          "Use whose for people and things.",
          "Don’t mix up whose and who’s."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s5l5",
      title: "Why do teenagers join clubs? The reason why…",
      short: "The reason why",
      icon: "bulb",
      status: "verified",
      why: "Give reasons for your choice. And say yes or no to an invitation politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Why do teenagers join clubs?",
          body: `<p class="lead">Andrii’s school newspaper asked 100 pupils: “Why did you join a club?”</p><ul><li>to make new friends – 41</li><li>to learn a new skill – 27</li><li>to have fun after lessons – 20</li><li>my friends are members – 12</li></ul><p><b>Bohdan:</b> The reason why I joined the rap club is simple: I love writing.<br><b>Daryna:</b> My friends are in the geography club. That’s why I joined.</p><p>And you? Why would you join a club?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Look at the survey again.</p><ul><li>to make new friends – 41</li><li>to learn a new skill – 27</li><li>to have fun after lessons – 20</li><li>my friends are members – 12</li></ul><p>What is the most popular reason?</p>`,
          opts: [
            "to learn a new skill",
            "to have fun after lessons",
            "to make new friends"
          ],
          correct: 2,
          hint: "Which number is the biggest?",
          fbOk: "Right.",
          fbBad: "Find the biggest number.",
          fbText: "41 pupils out of 100 joined a club <b>to make new friends</b>. That’s the most popular reason."
        },
        {
          type: "info",
          title: "The reason why…",
          body: `<ul><li>The reason <b>why</b> I joined the club is that I love writing.</li><li>Hiking is the reason <b>why</b> Ostap joined Plast.</li><li>My friends are in the club. <b>That’s why</b> I joined.</li></ul><p>You can also say <i>the reason that I joined</i> or just <i>the reason I joined</i>.</p><p>Not: <s>the reason because</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his friends.</p>`,
          text: "The reason {*why|because} Emma does the DofE is that she loves hiking. Tom loves skateboarding. {*That’s why|Because} he goes to the skatepark every weekend.",
          hint: "The reason … ; … I joined.",
          fbOk: "Exactly.",
          fbBad: "We don’t say the reason because. And Because… needs a second part.",
          fbText: "<b>The reason why</b> Emma does the DofE… <b>That’s why</b> he goes to the skatepark: it means “so”."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s post is wrong.</p>`,
          text: "The reason [because] I joined the chess club is that I love chess. My grandad taught me to play.",
          hint: "The reason … I joined.",
          fbOk: "Good eye!",
          fbBad: "Look at the words after the reason.",
          fbText: "Not <s>the reason because</s>, but <b>the reason why</b> (or <i>that</i>) I joined. The second sentence is correct."
        },
        {
          type: "info",
          title: "Choose, then say yes or no",
          body: `<p>Say what you choose and why:</p><ul><li>I’d choose the photo club <b>because</b> I love taking photos.</li><li><b>The main reason is that</b> my friends are there.</li></ul><p>Say yes: <b>I’d love to!</b> / <b>Sounds great!</b></p><p>Say no politely, and give a reason: <b>Thanks for asking, but I’m afraid I can’t.</b> I’ve got a match on Friday.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Taras:</b> Ostap, do you want to come to the new photo club with me on Friday?<br><b>Ostap:</b> …</p><p>Ostap has got a Plast meeting on Friday. What does he say?</p>`,
          opts: [
            "Thanks for asking, but I’m afraid I can’t. I’ve got a Plast meeting on Friday.",
            "No. I don’t want.",
            "I’d love to! See you on Friday."
          ],
          correct: 0,
          hint: "Ostap can’t go. How do we say no politely?",
          fbOk: "Yes!",
          fbBad: "Ostap is busy. And we say no politely, with a reason.",
          fbText: "<b>Thanks for asking, but I’m afraid I can’t.</b> + the reason: a Plast meeting. <i>I’d love to</i> is yes. <s>I don’t want</s> isn’t polite, and it needs <i>to</i>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Emma:</b> Tom, do you want to come hiking with my DofE group on Saturday?<br><b>Tom:</b> …</p><p>Tom loves the idea. What does he say?</p>`,
          opts: [
            "I’m afraid I can’t.",
            "Sounds great! What time?",
            "That’s why I can."
          ],
          correct: 1,
          hint: "Tom says yes.",
          fbOk: "Right.",
          fbBad: "Which answer says yes?",
          fbText: "<b>Sounds great!</b> says yes. <i>I’m afraid I can’t</i> says no."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras: I love taking photos.</p>`,
          tiles: ["that’s", "why", "I", "joined", "the", "photo club"],
          extra: ["because"],
          answer: "That’s why I joined the photo club.",
          hint: "Start with That’s why…",
          fbOk: "Well done!",
          fbBad: "That’s … I joined: which word?",
          fbText: "<b>That’s why I joined the photo club.</b> <i>That’s why</i> = so. We don’t need <i>because</i> here."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii explains his choice.</p>`,
          before: "The reason",
          after: "I joined the chess club is that I love chess.",
          answer: ["why", "that"],
          hint: "Look at the list “The reason why…”.",
          fbOk: "Well done!",
          fbBad: "Not because. The reason …",
          fbText: "<b>The reason why</b> (or <b>that</b>) I joined the chess club is that I love chess."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma invites Oksana to England in June. Oksana answers.</p>`,
          text: "Thanks for asking! I’d {*love|loving} to come to England. But I’m {*afraid|happy} I can’t come in June. The reason {*why|because} I can’t come is simple: every June, we visit my uncle Ivan in Odesa. {*That’s why|Because} August is better for me.",
          hint: "Oksana says no politely and gives a reason.",
          fbOk: "Exactly.",
          fbBad: "I’d love to… I’m afraid I can’t… The reason why… That’s why…",
          fbText: "<b>I’d love to</b> come. <b>I’m afraid</b> I can’t. <b>The reason why</b> I can’t come… <b>That’s why</b> August is better."
        }
      ],
      outro: {
        text: "The reason why I joined is that I love writing. That’s why I go every week!",
        learned: [
          "Give reasons: the reason why…, that’s why…",
          "Say why you choose something: I’d choose… because…",
          "Say yes or no to an invitation politely."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s5l6",
      title: "Join our club! A poster and an online invitation",
      short: "Poster and invitation",
      icon: "star",
      status: "verified",
      why: "Read a club poster and an invitation. And learn how to invite friends and answer.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A new club in Lviv",
          body: `<p class="lead">Taras and Myroslava are starting a photo club at their school in Lviv. They’re making a poster.</p><p>What does a good club poster say? When? Where? Who? What do members do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "write",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras wants a short start for the poster. Which start is the best?</p>`,
          opts: [
            "Our club is a club. It is at school.",
            "This is a poster about a club which is new.",
            "Do you love taking photos? Join us!"
          ],
          correct: 2,
          fbTitle: "Let’s see the poster.",
          fbOk: "Good guess!",
          fbText: "A good start is short and speaks to the reader: <b>Do you love taking photos?</b> A question makes people read on. Look at Taras’s poster."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Join our club!, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>LVIV TEEN PHOTO CLUB</b><br>Do you love taking photos? Join the club where photos tell stories!<br><b>When:</b> every Friday, 4–6 pm<br><b>Where:</b> School 5 library (Mr Pavliuk’s room)<br><b>Who:</b> teenagers aged 13–17. Beginners are welcome!<br><b>What we do:</b> photo walks in the old town, a competition and an exhibition (a show of our photos) in May<br><b>Price:</b> free. Bring your phone or camera.</p><p>Ostap is a beginner. He hasn’t got a camera. Can he join?</p>`,
          opts: [
            "No: the club is only for good photographers.",
            "Yes: beginners are welcome, and he can bring his phone.",
            "No: he needs a camera."
          ],
          correct: 1,
          hint: "Look at the lines Who and Price.",
          fbOk: "Right.",
          fbBad: "Read the lines Who and Price again.",
          fbText: "<b>Beginners are welcome!</b> and <b>Bring your phone or camera.</b> So Ostap can join with his phone."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Join our club!, part 2 of 2",
          title: "Read and choose.",
          body: `<p class="lead">Taras writes to Ostap.</p><p><i>Hi Ostap! Do you remember your photos from the Plast camp? They were brilliant. That’s why I’m writing. Myroslava and I are starting a photo club at School 5. Our first meeting is on Friday at 4 pm. It’s the day when we plan our first photo walk. Would you like to come? Bring your camp photos! – Taras</i></p><p>Why is Taras writing to Ostap?</p>`,
          opts: [
            "Ostap’s camp photos were brilliant, and Taras wants him in the club.",
            "Ostap is the leader of the club.",
            "Ostap has got a new camera."
          ],
          correct: 0,
          hint: "Find That’s why… What comes before it?",
          fbOk: "Yes!",
          fbBad: "Look at the sentences before That’s why I’m writing.",
          fbText: "Ostap’s photos from the Plast camp were brilliant. <b>That’s why</b> Taras is writing: he wants Ostap in the club."
        },
        {
          type: "info",
          title: "Writing an invitation",
          body: `<ul><li>Start: <b>Hi Ostap!</b> (a friend) / <b>Dear Ms Kvitka,</b> (a teacher)</li><li>Say what and when: We’re starting a photo club. The first meeting is on Friday.</li><li>Invite: <b>Would you like to come?</b> / <b>Why don’t you join us?</b></li><li>Answer: <b>I’d love to!</b> or <b>Thanks, but I’m afraid I can’t…</b></li></ul><p>On a poster: short lines with When? Where? Who?</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "read",
          title: "Match the halves.",
          body: `<p>Myroslava makes a short version of the poster for the school website. Remember the poster.</p>`,
          left: ["When:", "Where:", "Who:", "Price:"],
          right: ["every Friday, 4–6 pm", "School 5 library", "teenagers aged 13–17", "free"],
          hint: "A time, a place, people, money.",
          fbOk: "Exactly.",
          fbBad: "When → a time. Where → a place. Who → people. Price → money.",
          fbText: "<b>When:</b> every Friday, 4–6 pm. <b>Where:</b> School 5 library. <b>Who:</b> teenagers aged 13–17. <b>Price:</b> free."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Myroslava invites her friend Ivanka to the club.</p>`,
          before: "Would you",
          after: "to come to our first meeting?",
          answer: ["like", "love", "care", "want"],
          hint: "Look at the list: Would you … to come?",
          fbOk: "Well done!",
          fbBad: "A polite invitation: Would you … to come?",
          fbText: "<b>Would you like to come?</b> is a polite invitation. The answer can be <i>I’d love to!</i>"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Ostap’s cousin Marko is twelve. He loves taking photos and wants to join the Lviv Teen Photo Club. Remember the poster.</p><p>What does Taras say?</p>`,
          opts: [
            "Sure! Beginners are welcome.",
            "Sorry, you need a camera.",
            "Sorry, Marko. The club is for teenagers aged 13–17."
          ],
          correct: 2,
          hint: "Remember the line Who on the poster.",
          fbOk: "Right.",
          fbBad: "Marko is twelve. Who can join the club?",
          fbText: "The poster says: <b>teenagers aged 13–17</b>. Marko is twelve, so he can’t join yet. He doesn’t need a camera: a phone is OK."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word on Myroslava’s new poster is wrong.</p>`,
          text: "Come to the old town, [which] we take photos every Friday. Beginners are welcome!",
          hint: "We take photos there: which word?",
          fbOk: "Good eye!",
          fbBad: "We take photos there. Is it which or where?",
          fbText: "We take photos <i>there</i>, so: the old town, <b>where</b> we take photos. <b>Beginners are welcome!</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Ostap answers Taras.</p>`,
          text: "Hi Taras! Thanks {*for|about} the invitation. I’d {*love|loving} to come! Friday is the day {*when|where} I’m free. Can I bring Ivanka? She’s the girl {*who|whose} took the best photos at our camp. And the reason {*why|because} I like your club is simple: Lviv is beautiful!",
          hint: "Thanks for… I’d love to… A time? A verb or a noun next?",
          fbOk: "Well done!",
          fbBad: "Thanks for. Friday is a time. A verb next (took) → who.",
          fbText: "Thanks <b>for</b> the invitation. I’d <b>love</b> to come. Friday is a time: <b>when</b>. The girl <b>who</b> took: a verb comes next. <b>The reason why</b>…"
        }
      ],
      outro: {
        text: "When? Where? Who? A good poster answers these questions. And a good invitation asks: Would you like to come?",
        learned: [
          "Find information on a club poster.",
          "Invite a friend: Would you like to come?",
          "Answer an invitation: I’d love to! / I’m afraid I can’t."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s5l7",
      title: "The club fair",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help at the club fair?",
          body: `<p class="lead">Andrii’s school in Kyiv has a club fair: every club has a table, and pupils choose a club.</p><p>Help Andrii and his friends talk about clubs, invite new members and answer them. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo plays computer games with friends every evening. What is he?</p>`,
          opts: [
            "a skater",
            "a gamer",
            "a vlogger"
          ],
          correct: 1,
          pre: "e9s5l1",
          fbOk: "Right.",
          fbBad: "Who plays computer games?",
          fbText: "A <b>gamer</b> plays computer games. A skater rides a skateboard. A vlogger makes videos."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Which organisation started in Lviv more than 100 years ago?</p>`,
          opts: [
            "the DofE",
            "the Scouts in England",
            "Plast"
          ],
          correct: 2,
          pre: "e9s5l2",
          fbOk: "Yes!",
          fbBad: "Which one is the Scout organisation of Ukraine?",
          fbText: "<b>Plast</b> started in Lviv: the first groups met in 1911, and the official start was on 12 April 1912. The Scouts started in England in 1907, the DofE in 1956."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Ostap tells pupils about Plast at the fair.</p>`,
          text: "At a Plast {*camp|award}, members sleep in tents. We go {*hiking|volunteer} in the mountains. Our {*leader|member} is an adult who leads the group.",
          pre: "e9s5l2",
          fbOk: "Exactly.",
          fbBad: "A place with tents. A long walk. An adult who leads a group.",
          fbText: "A place with tents → a <b>camp</b>. A long walk in the mountains → go <b>hiking</b>. An adult who leads a group → a <b>leader</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about the fair.</p>`,
          text: "The fair is in the hall {*where|which} we have concerts. The chess club has a table {*which|where} is near the door. Saturday is the day {*when|where} the fair opens.",
          pre: "e9s5l3",
          fbOk: "Well done!",
          fbBad: "Place + a person + a verb → where. A verb next → which. Time → when.",
          fbText: "We have concerts <i>there</i>: <b>where</b>. <i>is</i> is a verb: <b>which</b>. Saturday is a time: <b>when</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Daryna talks about Bohdan. Which sentence is correct?</p>`,
          opts: [
            "Bohdan is the boy whose songs are about Kyiv.",
            "Bohdan is the boy who’s songs are about Kyiv.",
            "Bohdan is the boy whose his songs are about Kyiv."
          ],
          correct: 0,
          pre: "e9s5l4",
          fbOk: "Right.",
          fbBad: "His songs → … songs. Who’s = who is.",
          fbText: "<b>whose songs</b> = his songs. <i>Who’s</i> means <i>who is</i>, and we don’t say <s>whose his</s>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Find the mistake.",
          body: `<p>One word in Kateryna’s message is wrong.</p>`,
          text: "I love acting. That’s [because] I joined the drama club. Our first show is in May.",
          pre: "e9s5l5",
          fbOk: "Good eye!",
          fbBad: "I love acting, so I joined. That’s …",
          fbText: "Not <s>That’s because</s>, but <b>That’s why</b> I joined the drama club: <i>that’s why</i> = so."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 7",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Zoriana:</b> Andrii, would you like to come to our robot club on Tuesday?<br><b>Andrii:</b> …</p><p>Andrii has got a chess lesson on Tuesday. What does he say?</p>`,
          opts: [
            "Sounds great! See you on Tuesday.",
            "No, I don’t like you.",
            "Thanks for asking, but I’m afraid I can’t. I’ve got a chess lesson."
          ],
          correct: 2,
          pre: "e9s5l5",
          fbOk: "Yes!",
          fbBad: "Andrii is busy. Say no politely, with a reason.",
          fbText: "<b>Thanks for asking, but I’m afraid I can’t.</b> + the reason. <i>Sounds great!</i> says yes."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 8",
          title: "Put the words in order.",
          body: `<p>Andrii invites a new pupil to the chess club.</p>`,
          tiles: ["would", "you", "like", "to come", "to our club"],
          extra: ["liking"],
          answer: ["Would you like to come to our club?", "You would like to come to our club."],
          pre: "e9s5l6",
          fbOk: "Well done!",
          fbBad: "A polite invitation: Would you like…?",
          fbText: "<b>Would you like to come to our club?</b> It’s a polite invitation."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 9",
          title: "Complete the sentences.",
          body: `<p>After the fair, Andrii writes for the school newspaper.</p>`,
          text: "The club fair was the day {*when|where} 60 pupils joined new clubs. The chess club, {*which|where} meets on Mondays, has six new members. Kyrylo is the boy {*whose|who’s} history quiz was the most popular. The reason {*why|because} the fair was great is simple: everybody found a club!",
          pre: "e9s5l4",
          fbOk: "Exactly.",
          fbBad: "Time → when. A verb next → which. His quiz → whose. The reason …",
          fbText: "A time: <b>when</b>. <i>meets</i> is a verb: <b>which</b>. His quiz: <b>whose</b>. <b>The reason why</b> the fair was great…"
        }
      ],
      outro: {
        text: "Clubs, camps and reasons: now you can talk about youth culture and give reasons for your choices.",
        learned: [
          "Talk about youth culture and youth organisations.",
          "Use where, when, whose and why in one sentence.",
          "Invite a friend and answer politely."
        ]
      }
    }
  ]
});
