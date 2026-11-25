/* Слід · Англійська мова, 6 клас — «Sport» (e6s4)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 6 кл.: тема «Спорт» — види спорту, спортивні уподобання
   (PDF с. 20, розд. 4.2.2); функції — висловлювати враження й емоції, аргументувати вибір (с. 20–21); граматика A2 —
   Past Continuous (affirmative, background events, events in progress), Past Simple with ‘when’ in subordinate clauses,
   Could: abilities (с. 21–22, розд. 4.4; розподіл — content/eng/plan.js, reports/verify/plan-eng-g6.md):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично: play / go / do (e4s3l1), can (e5s6l4), am / is / are + -ing (e4s6l2, e5s4l3), was / were (e5s8l5),
   What a…! (e5s8l6), Past Simple irregular (e6s3l4) — `requires` за plan-eng-g6.md §6 і задачею.
   Герої — серія 4–5 кл., на два роки старші (memory/short/inbox.md, NOTE (герої)); зовнішність героїв не описуємо (канон — e6s1).
   Нові герої: Myroslava і Vlad (Lviv, знайомі Тараса), Oliver (однокласник Emma в Англії).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — за Cambridge Dictionary, Cambridge Grammar і OALD (URL — tasks/…/write-eng-g6-e6s4.md, «Нотатки агента»).
   Статус: verified (reports/verify/e6s4.md). 7 уроків (6 + фінал). Будова — за еталонами e4s1, e5s1.
   Перевірка: node tools/validate.mjs --section e6s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s4",
  grade: 6,
  weeks: [14, 18],
  title: "Sport",
  why: "To talk about different sports and say which ones you prefer. And to tell people what happened in a match.",
  requires: ["e4s3l1", "e4s6l2", "e5s4l3", "e5s6l4", "e5s8l5", "e5s8l6", "e6s3l4"],
  meta: { author: "writer-e6s4", created: "2026-11-20", factcheck: "verifier-e6s4 (reports/verify/e6s4.md)", teacher: null },
  badges: [
    { id: "e6s4boss", name: "Sports reporter", icon: "trophy", desc: "Finish the final lesson “Sport”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s4l1",
      title: "Football, judo, swimming: kinds of sport",
      short: "Kinds of sport",
      icon: "target",
      status: "verified",
      why: "Everyone has a favourite sport. Learn the names of sports and the verbs for them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What sport do you do?",
          body: `<p class="lead">The penfriend club has a new question: “What sport do you do?”</p><p><b>Andrii:</b> I play football with my friends on Saturdays.<br><b>Emma:</b> I go swimming. I’m in the school swimming team!<br><b>Oksana:</b> I do karate.<br><b>Taras:</b> I don’t do much sport. I take photos! My classmate Myroslava does athletics.</p><p>Play, go or do: do you remember the rule?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Myroslava does <b>athletics</b>. What is it?</p>`,
          opts: [
            "running and jumping",
            "a game with a ball",
            "a sport on ice"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Athletics</b> is running and jumping: races, the high jump and the long jump. The next screen has more sports."
        },
        {
          type: "info",
          title: "Play, go or do?",
          body: `<ul><li><b>play</b> + a game with a ball → play football, play <u>vol</u>leyball, play tennis</li><li><b>go</b> + <b>-ing</b> → go swimming, go <u>ski</u>ing, go skating</li><li><b>do</b> + other sports → do karate, do judo, do gym<u>nas</u>tics, do ath<u>let</u>ics</li></ul><p><b>sport</b> = all sports: I love sport. We <b>do</b> or <b>play</b> sport.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Play, go or do?</p>`,
          bins: ["play", "go", "do"],
          items: [
            ["volleyball", 0],
            ["tennis", 0],
            ["skiing", 1],
            ["swimming", 1],
            ["judo", 2],
            ["athletics", 2]
          ],
          hint: "Is it a game with a ball? Does it end in -ing?",
          fbOk: "Yes!",
          fbBad: "Look at the rule again: ball, -ing, other sports.",
          fbText: "A game with a ball: <b>play</b> volleyball, <b>play</b> tennis. With -ing: <b>go</b> skiing, <b>go</b> swimming. Other sports: <b>do</b> judo, <b>do</b> athletics."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Vlad {*plays|goes|does} volleyball in the park. Myroslava {*does|plays|goes} athletics at school. In winter, Taras and Zlata {*go|play|do} skiing in the Carpathians. Tom {*goes|plays|does} skating every Sunday.",
          hint: "Is it a game with a ball? Is there -ing?",
          fbOk: "Exactly.",
          fbBad: "Volleyball is a game with a ball. Skiing and skating end in -ing.",
          fbText: "<b>Plays</b> volleyball: a game with a ball. <b>Does</b> athletics: another sport. <b>Go</b> skiing and <b>goes</b> skating: -ing words."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+vol|ley|ball", "ath|+let|ics", "gym|+nas|tics", "+ski|ing"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rule.",
          fbText: "<u>vol</u>leyball, ath<u>let</u>ics, gym<u>nas</u>tics, <u>ski</u>ing."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["You go skiing", "You go skating", "You go swimming", "In athletics, you"],
          right: ["on snow.", "on ice.", "in water.", "run and jump."],
          hint: "Where is the snow? Where is the ice?",
          fbOk: "Good eye!",
          fbBad: "Think: what do you need for this sport?",
          fbText: "You go <b>skiing</b> on snow and <b>skating</b> on ice. You go <b>swimming</b> in water. In <b>athletics</b>, you run and jump."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Use <b>play</b>, <b>go</b> or <b>do</b>.</p>`,
          before: "Vlad’s favourite sport is judo. He",
          after: "judo after school.",
          answer: "does",
          hint: "Is judo a game with a ball? Vlad is he.",
          fbOk: "Right.",
          fbBad: "Judo isn’t a game with a ball. And Vlad is he.",
          fbText: "Judo is in the list with <b>do</b>. Vlad is he, so it’s <b>does</b>: He <b>does</b> judo."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma about sport in his class.</p>`,
          text: "In my class, lots of people {*do|go|make} sport. Ostap {*plays|does|goes} football in the school team. Myroslava does {*athletics|tennis|swimming}: she runs and jumps. I don’t do much sport, but I {*take|make|do} photos of my friends!",
          hint: "Sport in general: do or play sport. Photos: take photos.",
          fbOk: "Well done!",
          fbBad: "Check the rule: play + a ball game, do + other sports.",
          fbText: "We <b>do</b> sport. Ostap <b>plays</b> football: a game with a ball. Running and jumping is <b>athletics</b>. And we <b>take</b> photos."
        }
      ],
      outro: {
        text: "Play a game with a ball, go + -ing, do other sports. In British English we say: I love sport.",
        learned: [
          "Name kinds of sport: volleyball, skiing, athletics.",
          "Use play, go and do with sports.",
          "Find the strong part in volleyball and athletics."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s4l2",
      title: "Which sport do you prefer and why?",
      short: "Prefer",
      icon: "scale",
      status: "verified",
      why: "Friends often ask about your favourite sport. Say which one you prefer and why.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Football or tennis?",
          body: `<p class="lead">Andrii asks his friends and Emma: “Which sport do you prefer? Why?”</p><p><b>Bohdan:</b> I prefer tennis to football. Tennis is more exciting.<br><b>Yaroslav:</b> I prefer basketball. Football is boring for me.<br><b>Emma:</b> I prefer swimming to running because it’s healthy and fun.</p><p>What does <i>prefer</i> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Bohdan: “I prefer tennis to football.”</p><p>What does he mean?</p>`,
          opts: [
            "He likes football more.",
            "He likes tennis more.",
            "He doesn’t like tennis."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Prefer</b> means “like more”. Bohdan likes tennis more than football."
        },
        {
          type: "info",
          title: "I prefer tennis",
          body: `<ul><li>I <b>prefer</b> tennis. = I like tennis more.</li><li>I <b>prefer</b> tennis <b>to</b> football.</li><li>I <b>prefer</b> swimm<b>ing</b> <b>to</b> runn<b>ing</b>.</li><li>He <b>prefers</b> judo. (he, she → <b>-s</b>)</li></ul><p><b>Which</b> sport do you <b>prefer</b>? – I prefer judo.</p><p>pre<u>fer</u>: the strong part is at the end.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Bohdan prefers tennis {*to|than} football. Emma {*prefers|prefer} swimming to running. Which sport {*do|does} you prefer? I prefer {*skiing|ski} to skating.",
          hint: "After prefer: … to …. With he or she: -s.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: prefer A to B.",
          fbText: "Prefer tennis <b>to</b> football, not <i>than</i>. Emma is she: <b>prefers</b>. With you: <b>do</b> you prefer? A verb after prefer: <b>skiing</b>."
        },
        {
          type: "info",
          title: "Why? Because…",
          body: `<p>– Why do you prefer swimming?<br>– <b>Because</b> it’s healthy.</p><ul><li><b>exciting</b> ↔ <b>boring</b></li><li><b>easy</b> ↔ <b>difficult</b></li><li><b>dangerous</b> ↔ <b>safe</b></li><li><b>healthy</b> → good for you</li></ul><p>ex<u>cit</u>ing, <u>dif</u>ficult, <u>dan</u>gerous</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Football isn’t boring. It’s", "Judo isn’t easy. It’s", "Swimming with Dad isn’t dangerous. It’s"],
          right: ["exciting.", "difficult.", "safe."],
          hint: "Find the opposite: boring ↔ …?",
          fbOk: "Yes!",
          fbBad: "Look at the pairs in the list: boring ↔ exciting.",
          fbText: "Not boring → <b>exciting</b>. Not easy → <b>difficult</b>. Not dangerous → <b>safe</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Oliver from Emma’s class asks Andrii about sport.</p>`,
          tiles: ["Which", "sport", "do", "you", "prefer"],
          answer: "Which sport do you prefer?",
          extra: ["does"],
          keepCase: true,
          hint: "Start with Which sport. With you: do or does?",
          fbOk: "Well done!",
          fbBad: "With you, it’s do: Which sport do you…?",
          fbText: "<b>Which sport do you prefer?</b> With <b>you</b>, it’s <b>do</b>, not <i>does</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["pre|+fer", "ex|+cit|ing", "+dif|fi|cult", "+dan|ger|ous"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts again.",
          fbText: "pre<u>fer</u>, ex<u>cit</u>ing, <u>dif</u>ficult, <u>dan</u>gerous."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Vlad: “I prefer volleyball to tennis. I love playing in a team.”</p>`,
          before: "Vlad",
          after: "volleyball to tennis.",
          answer: "prefers",
          hint: "Vlad is he. What do we add to the verb?",
          fbOk: "Right.",
          fbBad: "He, she → -s: he prefers.",
          fbText: "Vlad is he, so the verb has <b>-s</b>: Vlad <b>prefers</b> volleyball to tennis."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oliver writes to Andrii.</p>`,
          text: "Hi Andrii! I play football too, but I {*prefer|prefers} tennis. I prefer tennis {*to|than} football {*because|but} it’s more exciting for me. My sister {*prefers|prefer} swimming. Which sport {*does|do} your sister prefer?",
          hint: "I → prefer, my sister → prefers. Why? → because.",
          fbOk: "Well done!",
          fbBad: "Check: prefer A to B; he or she → -s.",
          fbText: "I <b>prefer</b> tennis <b>to</b> football <b>because</b> it’s more exciting. My sister <b>prefers</b> swimming. With your sister, it’s <b>does</b>: Which sport <b>does</b> your sister prefer?"
        }
      ],
      outro: {
        text: "Say which sport you prefer and give a reason with because.",
        learned: [
          "Say which sport you prefer: I prefer tennis to football.",
          "Ask: Which sport do you prefer?",
          "Give a reason with because: it’s exciting, healthy, safe."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s4l3",
      title: "I could swim when I was five",
      short: "Could",
      icon: "star",
      status: "verified",
      why: "You can do lots of things now. Say what you could and couldn’t do when you were little.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What could they do?",
          body: `<p class="lead">Emma writes a post for the penfriend club.</p><p><i>I could swim when I was five. Now I’m in the school swimming team! My brother Tom couldn’t swim then, and he can’t swim now. But he could skate when he was six.</i></p><p>Can and could: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “I could swim when I was five.”</p><p>Is it about now or about the past?</p>`,
          opts: [
            "now",
            "next year",
            "the past: when Emma was five"
          ],
          correct: 2,
          hint: "Find when in Emma’s words.",
          fbOk: "Yes!",
          fbBad: "Was Emma five yesterday, or long ago?",
          fbText: "<b>When I was five</b> is the past. So Emma says <b>could</b>, not <i>can</i>."
        },
        {
          type: "info",
          title: "Can and could",
          body: `<p>Now: Tom <b>can</b> skate.<br>The past: Tom <b>could</b> skate when he was six.</p><ul><li><b>could</b> + verb: could <b>swim</b>, could <b>ride</b></li><li>not → <b>couldn’t</b> (could not)</li><li>no -s: She could <b>swim</b>.</li></ul><p><b>Could</b> you swim when you were five? – Yes, I <b>could</b>. / No, I <b>couldn’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Now Tom {*can|could} skate very well. He {*could|can} skate when he was six, too. Emma {*couldn’t|can’t} skate when she was six. And she {*can’t|couldn’t} skate now.",
          hint: "Now → can. When he was six → could.",
          fbOk: "Exactly.",
          fbBad: "Find the words now and when he was six.",
          fbText: "<b>Now</b>: Tom <b>can</b> skate, Emma <b>can’t</b>. <b>When they were six</b>: Tom <b>could</b> skate, Emma <b>couldn’t</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii started playing chess when he was five.</p><p>Oksana: “Could you play chess when you were six, Andrii?”</p>`,
          opts: [
            "Yes, I could.",
            "Yes, I can.",
            "Yes, I did could."
          ],
          correct: 0,
          hint: "Could you…? – Yes, I …",
          fbOk: "Right.",
          fbBad: "The question is about the past: Could you…?",
          fbText: "<b>Could</b> you…? – Yes, I <b>could</b>. We don’t use did with could."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana asks Mariia about swimming.</p>`,
          tiles: ["Could", "you", "swim", "when", "you", "were", "five"],
          answer: "Could you swim when you were five?",
          extra: ["Can", "was"],
          keepCase: true,
          hint: "Start with Could. You → were.",
          fbOk: "Well done!",
          fbBad: "The past: Could you…? With you: were.",
          fbText: "<b>Could you swim when you were five?</b> It’s the past: <b>could</b>, not <i>can</i>. With <b>you</b>: <b>were</b>, not <i>was</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia: “When I was four, I couldn’t ride a bike. Now I can!”</p>`,
          before: "Could Mariia ride a bike when she was four? – No, she",
          after: ".",
          answer: "couldn’t",
          contractions: true,
          hint: "Could she…? – No, she …",
          fbOk: "Good eye!",
          fbBad: "It’s the past. Look at the short answers in the rule.",
          fbText: "<b>Could</b> she…? – No, she <b>couldn’t</b>. Now she <b>can</b> ride a bike."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Vlad’s message is wrong.</p>`,
          text: "When I was six, I [can] ride a bike, but I couldn’t swim. Now I can do both!",
          hint: "Which part is about the past?",
          fbOk: "Right.",
          fbBad: "When I was six is the past.",
          fbText: "<b>When I was six</b> is the past: I <b>could</b> ride a bike. <b>Now I can</b> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Myroslava from Lviv. I do athletics. When I was seven, I could run fast, but I couldn’t jump very high. Now I can do the high jump well. My hero is Yaroslava Mahuchikh. She can jump really high!</i></p><p>Which sentence is true?</p>`,
          opts: [
            "When she was seven, Myroslava couldn’t run fast.",
            "When she was seven, Myroslava couldn’t jump very high.",
            "Now Myroslava can’t do the high jump."
          ],
          correct: 1,
          hint: "Find could and couldn’t in the text.",
          fbOk: "Yes!",
          fbBad: "Read the sentence about seven again.",
          fbText: "At seven, she <b>could</b> run fast, but she <b>couldn’t</b> jump very high. Now she <b>can</b> do the high jump."
        }
      ],
      outro: {
        text: "Use can for now and could for the past: I could swim when I was five.",
        learned: [
          "Say what you could and couldn’t do: I could swim when I was five.",
          "Ask: Could you…when you were six? – Yes, I could.",
          "Choose can for now and could for the past."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s4l4",
      title: "What were you doing at six o’clock? The Past Continuous",
      short: "Past Continuous",
      icon: "eye",
      status: "verified",
      why: "Sometimes people ask where you were. Say what you were doing at a time in the past.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Where was everyone?",
          body: `<p class="lead">Yesterday at six o’clock, the club had an online meeting. Only Ms Kravets came! Today she asks: “What were you doing at six o’clock?”</p><p><b>Andrii:</b> I was playing chess with Yaroslav.<br><b>Oksana:</b> I was doing karate.<br><b>Mariia:</b> I was drawing.<br><b>Taras:</b> I was taking photos at a football match.</p><p>Was playing, was doing: what do they show?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii: “I was playing chess at six o’clock.”</p><p>When did the game start?</p>`,
          opts: [
            "at ten past six",
            "before six",
            "the next day"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "At six, Andrii was in the middle of the game. So it started <b>before six</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "The Past Continuous",
          body: `<p>At six o’clock, Andrii <b>was playing</b> chess. He was in the middle of the game.</p><ul><li>I, he, she, it → <b>was</b> + -ing</li><li>you, we, they → <b>were</b> + -ing</li><li>not → <b>wasn’t</b> / <b>weren’t</b> + -ing</li></ul><p>Now: I <b>am</b> playing. At six yesterday: I <b>was</b> playing.<br>This is the Past Continuous.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Continuous.",
          text: "At six o’clock yesterday, Oksana {*was|were} doing karate. Taras and Ostap {*were|was} taking photos. Mariia {*was drawing|was draw|were drawing} a picture. Dmytro {*wasn’t|weren’t} sleeping. He was watching cartoons.",
          hint: "One person → was. Two people → were.",
          fbOk: "Exactly.",
          fbBad: "Check: one person or two? And don’t forget -ing.",
          fbText: "Oksana <b>was</b> doing. Taras and Ostap are they: they <b>were</b> taking. Mariia <b>was drawing</b>: was + -ing. Dmytro <b>wasn’t</b> sleeping."
        },
        {
          type: "info",
          title: "Questions and short answers",
          body: `<p><b>What were</b> you <b>doing</b> at six o’clock?<br>– I was drawing.</p><p><b>Was</b> she <b>swimming</b>? – Yes, she <b>was</b>. / No, she <b>wasn’t</b>.</p><p><b>Were</b> they <b>playing</b>? – Yes, they <b>were</b>. / No, they <b>weren’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Ms Kravets: “Were you doing karate at six, Oksana?”</p>`,
          opts: [
            "Yes, I did.",
            "Yes, I were.",
            "Yes, I was."
          ],
          correct: 2,
          hint: "Were you…? With I: was or were?",
          fbOk: "Right.",
          fbBad: "Look at the short answers: I → was.",
          fbText: "Were you…? – Yes, I <b>was</b>. With <b>I</b>, it’s <b>was</b>. <i>Yes, I did</i> answers <i>Did you…?</i>"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ms Kravets asks Taras about yesterday evening.</p>`,
          tiles: ["What", "were", "you", "doing", "at", "six o’clock"],
          answer: "What were you doing at six o’clock?",
          extra: ["was"],
          keepCase: true,
          hint: "Start with What. With you: were.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: What were you doing…?",
          fbText: "<b>What were you doing at six o’clock?</b> With <b>you</b>, it’s <b>were</b>, not <i>was</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>At six o’clock, Mariia was at home. She was drawing a picture.</p>`,
          before: "She",
          after: "playing tennis at six o’clock.",
          answer: "wasn’t",
          contractions: true,
          hint: "Was Mariia playing tennis? Use not.",
          fbOk: "Yes!",
          fbBad: "Mariia was at home, so it’s a not sentence.",
          fbText: "Mariia was drawing at home. She <b>wasn’t</b> playing tennis."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Vlad’s message is wrong.</p>`,
          text: "At six o’clock yesterday, my friends and I [was] playing volleyball in the park. It wasn’t raining.",
          hint: "My friends and I = we.",
          fbOk: "Good eye!",
          fbBad: "Who was playing? One person or more?",
          fbText: "My friends and I = we: we <b>were</b> playing. <b>It wasn’t raining</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma about Saturday.</p>`,
          text: "At four o’clock on Saturday, Yaroslav and I {*were|was} playing basketball in the park. It {*was raining|were raining|was rain}, but we were happy. What {*were|was} you doing on Saturday afternoon, Emma? {*Were|Was} you swimming?",
          hint: "Yaroslav and I = we. It → was. You → were.",
          fbOk: "Well done!",
          fbBad: "Check: we and you → were; it → was + -ing.",
          fbText: "Yaroslav and I <b>were</b> playing. It <b>was raining</b>. What <b>were</b> you doing? <b>Were</b> you swimming?"
        }
      ],
      outro: {
        text: "The Past Continuous shows an action in the middle: At six o’clock, I was playing chess.",
        learned: [
          "Say what you were doing at a time in the past: I was playing chess.",
          "Use was and were + -ing, wasn’t and weren’t.",
          "Ask: What were you doing at six o’clock?"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s4l5",
      title: "I was running when it started to rain",
      short: "When and while",
      icon: "path",
      status: "verified",
      why: "Stories have long actions and short ones. Join them with when and while.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What happened at the match?",
          body: `<p class="lead">Taras sends Emma a photo from a school football match in Lviv.</p><p><i>Look at Ostap! He was running with the ball when it started to rain. Then he fell! But he got up and kicked the ball into the goal. We won!</i></p><p>Which action was long? Which one was short?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ostap was running with the ball when it started to rain.</p><p>What started first?</p>`,
          opts: [
            "Ostap’s running",
            "the rain",
            "They started at the same time."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "Ostap was already running. Then the rain started: a short action in the middle of a long one."
        },
        {
          type: "info",
          title: "Long action, short action",
          body: `<p>Ostap <b>was running</b> <b>when</b> it <b>started</b> to rain.</p><ul><li>long action → Past Continuous: <b>was running</b></li><li>short action → Past Simple: <b>started</b></li><li><b>when</b> + short action: <b>when</b> it started</li><li><b>while</b> + long action: <b>while</b> he was running</li></ul><p><b>While</b> Ostap was running, it started to rain.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p><b>Oksana:</b> karate from 5 to 6 (long). <b>Dmytro:</b> opens the door at 5.30 (short).<br><b>Andrii:</b> chess from 4 to 5 (long). <b>Sofiia:</b> comes in at 4.15 (short).</p>`,
          text: "Oksana {*was doing|did} karate when Dmytro {*opened|was opening} the door. Andrii {*was playing|played} chess when Sofiia {*came|was coming} in.",
          hint: "Long action → was + -ing. Short action → the Past Simple.",
          fbOk: "Exactly.",
          fbBad: "Which action was long? Which one was short?",
          fbText: "Karate and chess were long: Oksana <b>was doing</b>, Andrii <b>was playing</b>. Dmytro and Sofiia did short actions: <b>opened</b>, <b>came</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Vlad was riding his bike in the park. He saw Myroslava.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Vlad was riding his bike while he saw Myroslava.",
            "Vlad was riding his bike when he saw Myroslava.",
            "Vlad rode his bike when he was seeing Myroslava."
          ],
          correct: 1,
          hint: "He saw her: a short action. When or while?",
          fbOk: "Right.",
          fbBad: "While goes with a long action. Saw is short.",
          fbText: "Riding was long, seeing was short: Vlad <b>was riding</b> his bike <b>when</b> he <b>saw</b> Myroslava."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ms Kravets asks Ostap about the match.</p>`,
          tiles: ["What", "were", "you", "doing", "when", "it", "started", "to rain"],
          answer: "What were you doing when it started to rain?",
          extra: ["was"],
          keepCase: true,
          hint: "Start with What were you doing… Then when.",
          fbOk: "Well done!",
          fbBad: "Ask about the long action first: What were you doing…?",
          fbText: "<b>What were you doing when it started to rain?</b> The long action: <b>were doing</b>. The short one: <b>started</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write <b>when</b> or <b>while</b>.</p>`,
          before: "Emma was swimming in the pool",
          after: "Tom came in.",
          answer: "when",
          hint: "Tom came in: a long action or a short one?",
          fbOk: "Yes!",
          fbBad: "Came in is a short action.",
          fbText: "Tom <b>came in</b> is a short action, so we say <b>when</b>: Emma was swimming <b>when</b> Tom came in."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "I was drawing in the park [while] it started to rain. I ran home.",
          hint: "It started to rain: long or short?",
          fbOk: "Good eye!",
          fbBad: "Check when and while.",
          fbText: "It <b>started</b> to rain is a short action, so it’s <b>when</b> it started to rain. <b>While</b> goes with a long action: while I was drawing."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>On Sunday, I was running in the park. Vlad and his friends were playing volleyball near me. I was running past them when the ball hit my arm! Vlad said sorry, and I said, “No problem!” Then I played volleyball with them.</i> – Myroslava</p><p>What were Vlad and his friends doing when the ball hit Myroslava?</p>`,
          opts: [
            "They were running in the park.",
            "They were saying sorry.",
            "They were playing volleyball."
          ],
          correct: 2,
          hint: "Find Vlad and his friends in the text.",
          fbOk: "Well done!",
          fbBad: "Read the second sentence again.",
          fbText: "Vlad and his friends <b>were playing volleyball</b>: the long action. The ball <b>hit</b> Myroslava’s arm: the short action."
        }
      ],
      outro: {
        text: "A long action and a short one: I was running when it started to rain.",
        learned: [
          "Use the Past Continuous for a long action and the Past Simple for a short one.",
          "Join them with when and while: I was running when it started to rain.",
          "Ask: What were you doing when…?"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s4l6",
      title: "What a match! Sports news",
      short: "Sports news",
      icon: "book",
      status: "verified",
      why: "Sports news is fun to read. Read short news stories and say “What a match!”",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What’s in the school sports news?",
          body: `<p class="lead">Taras’s school in Lviv has a sports news page. Here is a story about Friday’s match.</p><p><i>What a match! On Friday our football team played against School 12. It was raining, and our fans were singing. Ostap was running with the ball when he fell. But he got up and kicked the ball into the goal. What a goal! We won 1–0!</i></p><p>How does the story show it was exciting?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>The story says: “What a match!” and “What a goal!”</p><p>Why does the writer say this?</p>`,
          opts: [
            "The match was boring.",
            "The match was very exciting.",
            "The writer didn’t see the match."
          ],
          correct: 1,
          hint: "When do we say What a…!?",
          fbOk: "Yes!",
          fbBad: "What a…! shows strong feelings.",
          fbText: "We say <b>What a…!</b> when something is very good or very big. The match was very <b>exciting</b>."
        },
        {
          type: "info",
          title: "Writing sports news",
          body: `<ul><li>what happened → Past Simple: we <b>played</b>, he <b>fell</b>, we <b>won</b></li><li>what was happening at that time → Past Continuous: it <b>was raining</b>, the fans <b>were singing</b></li><li>feelings → <b>What a</b> goal! <b>What an</b> exciting match!</li></ul><p>win → <b>won</b>, lose → <b>lost</b>, fall → <b>fell</b>: We won 1–0. They lost.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "What {*a|an} great goal! What {*an|a} exciting match! Yesterday, our team {*won|win} 3–2, and the other team {*lost|lose}.",
          hint: "Exciting starts with a vowel sound. The match was yesterday.",
          fbOk: "Exactly.",
          fbBad: "Great → a, exciting → an. And it’s the past: won, lost.",
          fbText: "<b>What a</b> great goal! <b>What an</b> exciting match: <i>exciting</i> starts with a vowel sound. In the past: we <b>won</b>, they <b>lost</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras writes about the match: it was raining, the fans were singing, and Ostap fell.</p>`,
          tiles: ["The fans", "were", "singing", "when", "Ostap", "fell"],
          answer: "The fans were singing when Ostap fell.",
          extra: ["was"],
          keepCase: true,
          hint: "Start with The fans. Which action was long?",
          fbOk: "Good eye!",
          fbBad: "The fans = they: were + -ing.",
          fbText: "<b>The fans were singing when Ostap fell.</b> Singing was long: <b>were singing</b>. Ostap fell: a short action."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use <b>win</b> or <b>lose</b> in the Past Simple.</p>`,
          before: "Our team was better. We",
          after: "the match 2–0!",
          answer: "won",
          hint: "The team was better. Did they win or lose?",
          fbOk: "Right.",
          fbBad: "Win → won, lose → lost.",
          fbText: "The team was better, so they won: win → <b>won</b>. We <b>won</b> the match 2–0!"
        },
        {
          type: "multi",
          sk: "cult",
          eyebrow: "Reading: Sports day, part 1 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Sports day is a special day at school in the UK. There are usually no lessons. Children run races, jump and play games outside. This year, sports day at Emma’s school was in June. It was hot. Parents were watching and shouting, “Go, go, go!”</i></p><p>What do children do on sports day?</p>`,
          opts: [
            "They have lessons.",
            "They run races.",
            "They play games outside.",
            "They watch TV."
          ],
          correct: [1, 2],
          hint: "Find what children do in the text.",
          fbOk: "Well done!",
          fbBad: "Read again: are there any lessons?",
          fbText: "On sports day there are usually <b>no lessons</b>. Children <b>run races</b>, jump and <b>play games outside</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Sports day, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>Emma won the girls’ running race! Her classmate Oliver was in a race too. He was running very fast when he fell. Everyone was quiet. Then Oliver got up and ran again. He didn’t win, but everyone shouted, “Well done, Oliver!” What a day!</i></p><p>What happened when Oliver was running?</p>`,
          opts: [
            "He won the race.",
            "He stopped and went home.",
            "He fell."
          ],
          correct: 2,
          hint: "Find Oliver was running in the text.",
          fbOk: "Yes!",
          fbBad: "Read about Oliver again.",
          fbText: "Oliver <b>was running</b> very fast <b>when</b> he <b>fell</b>. Then he got up and ran again. He didn’t win."
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Sports news from Ukraine.</p>`,
          text: "Yaroslava Mahuchikh is from Dnipro. She does athletics. In August 2024, she {*won|win|wins} the high jump at the Olympic Games in Paris. What {*a|an} great day for Ukraine! Myroslava from Lviv {*does|plays|goes} athletics too. Yaroslava Mahuchikh is her hero.",
          hint: "2024 is the past. Great → a. Athletics → do.",
          fbOk: "Well done!",
          fbBad: "Check: the past → won; great → a; athletics → do.",
          fbText: "In 2024 she <b>won</b>: the past. <b>What a</b> great day! Myroslava <b>does</b> athletics: do + other sports, like judo and karate."
        }
      ],
      outro: {
        text: "Sports news tells what happened and what was happening at that time. And it says: What a match!",
        learned: [
          "Read short sports news and say what happened.",
          "Use won and lost, the Past Simple and the Past Continuous in a story.",
          "Say how you feel: What a goal! What an exciting match!"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s4l7",
      title: "Our sports page",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the club’s sports page?",
          body: `<p class="lead">Ms Kravets is making a sports page for the penfriend club.</p><p>She needs your help. Check the sentences about the club’s sport. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Mariia {*goes|plays|does} swimming on Tuesdays. Bohdan {*plays|goes|does} tennis. Oksana {*does|plays|goes} karate.",
          pre: "e6s4l1",
          hint: "A game with a ball, an -ing word or another sport?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: play, go, do.",
          fbText: "<b>Goes</b> swimming: -ing. <b>Plays</b> tennis: a game with a ball. <b>Does</b> karate: another sport."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Bohdan: “I prefer tennis … football.”</p>`,
          opts: [
            "than",
            "to",
            "from"
          ],
          correct: 1,
          pre: "e6s4l2",
          fbOk: "Right.",
          fbBad: "Prefer A … B?",
          fbText: "We say: I prefer tennis <b>to</b> football."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Tom: “When I was six, I could skate, but I couldn’t swim.”</p>`,
          before: "Could Tom swim when he was six? – No, he",
          after: ".",
          answer: "couldn’t",
          contractions: true,
          pre: "e6s4l3",
          fbOk: "Well done!",
          fbBad: "Could he…? – No, he …",
          fbText: "<b>Could</b> he swim? – No, he <b>couldn’t</b>. But he could skate."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>Ms Kravets asks Andrii about yesterday evening.</p>`,
          tiles: ["Were", "you", "playing", "chess", "at six o’clock"],
          answer: "Were you playing chess at six o’clock?",
          extra: ["Was"],
          keepCase: true,
          pre: "e6s4l4",
          fbOk: "Good eye!",
          fbBad: "A question: Were you…?",
          fbText: "<b>Were you playing chess at six o’clock?</b> With <b>you</b>: <b>were</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Complete the sentences.",
          body: `<p><b>Emma:</b> swimming from 3 to 4 (long). <b>Tom:</b> comes in at 3.30 (short).</p>`,
          text: "Emma {*was swimming|swam} {*when|while} Tom {*came|was coming} in.",
          pre: "e6s4l5",
          hint: "Long action → was + -ing. Short action → when + the Past Simple.",
          fbOk: "Exactly.",
          fbBad: "Which action was long?",
          fbText: "Swimming was long: Emma <b>was swimming</b>. Tom’s action was short: <b>when</b> Tom <b>came</b> in."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>The match was great. What do you say?</p>`,
          opts: [
            "What a exciting match!",
            "What exciting match!",
            "What an exciting match!"
          ],
          correct: 2,
          pre: "e6s4l6",
          fbOk: "Yes!",
          fbBad: "What + a or an + adjective + noun.",
          fbText: "<b>What an exciting match!</b> <i>Exciting</i> starts with a vowel sound, so it’s <b>an</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about sport, what you could do and what you were doing.",
        learned: [
          "Talk about sports with play, go and do.",
          "Say which sport you prefer and why.",
          "Use could, the Past Continuous and when in a story.",
          "Read sports news and say: What a match!"
        ]
      }
    }
  ]
});
