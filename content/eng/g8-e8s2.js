/* Слід · Англійська мова, 8 клас — «Healthy living and free time» (e8s2)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 8 кл.: тема «Стиль життя» — здоровий спосіб життя;
   активний відпочинок; повсякденні дії; види дозвілля (PDF с. 32, розд. 5.2.2); функції — коментувати статистичні дані
   (с. 33), аргументувати вибір; граматика B1 (с. 34–35, розд. 5.4.1): Verbs — patterns (-ing / to-infinitive), Verbs — phrasal,
   Determiners — quantity, modifying ‘enough’; повторення — much / many / a lot of (e5s3l4), too + adjective (e6s2l6),
   should (e6s6l5), like / love + -ing (e5s6l2), purpose to (e6s2l2); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Опитування класу — вигадані числа вигаданого класу (не статистика).
   Герої — серія 4–7 кл., на чотири роки старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нових героїв немає.
   Твердження про здоров'я (сон 8–10 год для 13–18 років — AASM, CDC; ≥ 60 хв активності на день для 5–17 років — WHO) і форми
   (CD, CD Grammar) — URL у tasks/…/write-eng-g8-e8s2.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e8s2). 7 уроків (6 + фінал). Будова — за розділами 6–7 кл. (e6s2, e7s5).
   Перевірка: node tools/validate.mjs --section e8s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s2",
  grade: 8,
  weeks: [5, 8],
  title: "Healthy living and free time",
  why: "To talk about healthy living, active free time and everyday habits. And to say: “I enjoy cycling, and I want to try climbing!”",
  requires: ["e4s5l2", "e5s3l4", "e5s6l1", "e5s6l2", "e6s2l2", "e6s2l6", "e6s6l5", "e7s4l6"],
  meta: { author: "writer-e8s2", created: "2026-11-25", factcheck: "verifier-e8s2, 2026-11-25 (reports/verify/write-eng-g8-e8s2.md)", teacher: null },
  badges: [
    { id: "e8s2boss", name: "Healthy week editor", icon: "trophy", desc: "Finish the final lesson “Healthy living and free time”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s2l1",
      title: "Sleep, food and exercise: a healthy lifestyle",
      short: "Healthy lifestyle",
      icon: "leaf",
      status: "verified",
      why: "Sleep, food and exercise make a big difference. Talk about healthy habits and give advice.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "How healthy is your day?",
          body: `<p class="lead">The penfriend club’s topic is healthy living. Ms Kravets asks: “How healthy is your day?”</p><p><b>Mariia:</b> I run in the park every morning, and I eat a lot of fruit. But I often stay up late and go to bed after midnight.<br><b>Andrii:</b> I sleep nine hours a night. But I play chess for hours, and I don’t move much.<br><b>Emma:</b> I swim four times a week. But I love crisps and eat them every day!</p><p>What isn’t healthy in their days?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii sleeps nine hours a night. How much sleep do teenagers need?</p>`,
          opts: [
            "five or six hours a night",
            "eight to ten hours a night",
            "twelve to fourteen hours a night"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Doctors say that teenagers need <b>8–10 hours</b> of sleep a night. So Andrii’s nine hours are fine. The next screen has more."
        },
        {
          type: "info",
          title: "A healthy lifestyle",
          body: `<p>Your <b><u>life</u>style</b> is the way you live: how you sleep, eat and move.</p><ul><li><b>sleep</b> → teenagers need 8–10 hours a night. Don’t <b>stay up late</b> (= go to bed very late).</li><li><b><u>ex</u>ercise</b> → be <b>active</b> for at least 60 minutes a day.</li><li><b>food</b> → eat fruit and vegetables. Don’t eat a lot of <b>junk food</b>: crisps, sweets, burgers.</li></ul><p>Food and sleep give you <b><u>en</u>ergy</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it a healthy habit or not?</p>`,
          bins: ["Healthy", "Not healthy"],
          items: [
            ["sleep nine hours a night", 0],
            ["be active for an hour a day", 0],
            ["eat fruit after lunch", 0],
            ["stay up late every night", 1],
            ["eat crisps every day", 1],
            ["sit at the computer all evening", 1]
          ],
          hint: "Look at the rules for sleep, exercise and food.",
          fbOk: "Right.",
          fbBad: "Check each habit: is it good for your body?",
          fbText: "Sleep, exercise and fruit are <b>healthy</b>. Staying up late, junk food every day and sitting all evening are <b>not healthy</b>."
        },
        {
          type: "info",
          title: "Advice: should and shouldn’t",
          body: `<p>Do you remember <b>should</b>? We use it to give advice.</p><ul><li>You <b>should</b> go to bed earlier.</li><li>You <b>shouldn’t</b> eat crisps every day.</li></ul><p>should / shouldn’t + verb. No <i>to</i>, no <i>-s</i>.<br>Not: <s>You should to sleep more.</s> <s>He shoulds…</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Ms Kravets gives advice to the club.</p>`,
          text: "Mariia, you {*should|shouldn’t} go to bed earlier. Andrii, you {*should|shouldn’t} move more. Maybe go for a walk after chess? Emma, you {*shouldn’t|should} eat crisps every day. And everybody {*should|shoulds|should to} drink a lot of water!",
          hint: "Is it good for them or not? Good → should. Bad → shouldn’t.",
          fbOk: "Exactly.",
          fbBad: "Think: is it a good idea for this person?",
          fbText: "Mariia stays up late, so she <b>should</b> go to bed earlier. Andrii doesn’t move much, so he <b>should</b> move more. Emma <b>shouldn’t</b> eat crisps every day. Everybody <b>should</b> drink water: no <i>-s</i>, no <i>to</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia goes to bed after midnight and gets up at six. She is always tired.</p>`,
          before: "Teenagers need eight to ten hours of",
          after: "a night.",
          answer: "sleep",
          hint: "Mariia is tired. What doesn’t she get enough of at night?",
          fbOk: "Yes!",
          fbBad: "Look at the first line of the rules.",
          fbText: "Teenagers need 8–10 hours of <b>sleep</b> a night. Mariia sleeps only about six hours."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+life|style", "+ex|er|cise", "+health|y", "+en|er|gy"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "<u>life</u>style, <u>ex</u>ercise, <u>health</u>y, <u>en</u>ergy: the stress is on the first part."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes her plan for a healthier week.</p>`,
          text: "From Monday, I’m going to go to bed at ten. Teenagers need eight to ten hours of {*sleep|exercise|energy}. I already run every morning, so I’m quite {*active|lazy|slow}. But I eat a lot of cake, and cake is {*junk food|exercise|energy}. I {*shouldn’t|should|don’t should} eat it every evening!",
          hint: "What do you need eight to ten hours of? Running every morning: are you active or lazy?",
          fbOk: "Brilliant!",
          fbBad: "Check the words in the rules: sleep, active, junk food.",
          fbText: "Teenagers need 8–10 hours of <b>sleep</b>. Mariia runs every day, so she is <b>active</b>. Cake is <b>junk food</b>, and junk food every evening isn’t healthy: I <b>shouldn’t</b> eat it."
        }
      ],
      outro: {
        text: "Sleep, food and exercise are all part of a healthy lifestyle. Now you can give good advice too!",
        learned: [
          "Talk about a healthy lifestyle: sleep, food and exercise.",
          "Say how much sleep and exercise teenagers need.",
          "Give advice with should and shouldn’t."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s2l2",
      title: "Too much sugar, not enough sleep",
      short: "Too much, not enough",
      icon: "scale",
      status: "verified",
      why: "Sometimes we have too much of a thing, and sometimes not enough. Learn to say it correctly.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Why was Taras so slow?",
          body: `<p class="lead">Taras was very slow at athletics training today. Mr Hnatiuk asks him about yesterday.</p><p><b>Taras:</b> I had three cans of cola and two bars of chocolate. And I played video games until one o’clock, so I slept only six hours.<br><b>Mr Hnatiuk:</b> I see. You had <b>too much</b> sugar and <b>not enough</b> sleep!</p><p>Too much, not enough: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mr Hnatiuk: “You had <b>too much</b> sugar.”</p><p>What does he mean?</p>`,
          opts: [
            "Taras had a little sugar, and that’s fine.",
            "Taras had a lot of sugar, and that’s fine.",
            "Taras had more sugar than is good for him."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Too much</b> means more than is good: it’s a problem. The next screen explains it."
        },
        {
          type: "info",
          title: "Too much, too many, not enough",
          body: `<p>Remember: How <b>much</b> water? How <b>many</b> apples? Too means it’s a problem: <i>too big</i>.</p><ul><li><b>too much</b> + uncountable: too much sugar, too much cola</li><li><b>too many</b> + plural: too many sweets, too many games</li><li><b>not enough</b> + both: not enough sleep, not enough vegetables</li></ul><p>With a noun, <b>enough</b> comes first: I didn’t get <b>enough sleep</b>. (With an adjective, it comes after: <i>old enough</i>.)</p><p>Not: <s>too much sweets</s>, <s>get sleep enough</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about yesterday.</p>`,
          text: "I ate too {*many|much} sweets. I drank too {*much|many} cola. I played too {*many|much} video games. And I didn’t get {*enough sleep|sleep enough}.",
          hint: "Can you count sweets? Can you count cola?",
          fbOk: "Right.",
          fbBad: "Plural → too many. Uncountable → too much.",
          fbText: "Too <b>many</b> sweets and games: you can count them. Too <b>much</b> cola: uncountable. <b>Enough</b> comes before the noun: enough sleep."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Dmytro ate five pancakes. Now he feels ill. What does Mum say?</p>`,
          opts: [
            "You ate too many pancakes.",
            "You ate too much pancakes.",
            "You didn’t eat pancakes enough."
          ],
          correct: 0,
          hint: "Pancakes: one pancake, two pancakes. Countable or not?",
          fbOk: "Yes!",
          fbBad: "Can you count pancakes?",
          fbText: "Pancakes are countable, so: too <b>many</b> pancakes. Five pancakes is a problem, not “not enough”."
        },
        {
          type: "match",
          sk: "read",
          title: "Match the halves.",
          left: ["There are too many cars in the street,", "I’ve got too much homework,", "We haven’t got enough chairs,", "I didn’t drink enough water,"],
          right: ["so the air isn’t clean.", "so I can’t go out tonight.", "so two people have to stand.", "so I was thirsty after the race."],
          hint: "Which problem makes you thirsty? Which one is about sitting?",
          fbOk: "Right.",
          fbBad: "Think: what happens because of each problem?",
          fbText: "Too many cars → the air isn’t clean. Too much homework → no time to go out. Not enough chairs → people stand. Not enough water → thirsty."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "I eat too [much] crisps and I don’t drink enough water. I should eat more fruit.",
          hint: "Crisps: one crisp, two crisps. Countable or not?",
          fbOk: "Good eye!",
          fbBad: "Look at the word before crisps.",
          fbText: "Crisps are plural, so: too <b>many</b> crisps. Enough water is correct: <i>enough</i> comes before the noun."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Bohdan plays computer games for five hours every day.</p>`,
          before: "Mum: “You spend too",
          after: "time on your computer!”",
          answer: "much",
          hint: "Time is uncountable. Too … time?",
          fbOk: "Exactly.",
          fbBad: "Uncountable → too much or too many?",
          fbText: "Time is uncountable, so: too <b>much</b> time. Five hours a day at the computer is a problem."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Mr Hnatiuk.</p>`,
          text: "Sorry I was slow today! Yesterday I drank too {*much|many} cola and ate too {*many|much} sweets. I didn’t get {*enough|too many} sleep, and I didn’t drink {*enough|too many} water. Tonight I’m going to bed at ten. See you on Thursday!",
          hint: "Cola → uncountable. Sweets → plural. Sleep and water: he needed more.",
          fbOk: "Well done!",
          fbBad: "Count: sweets → many. Cola → much. Not enough + noun.",
          fbText: "Too <b>much</b> cola, too <b>many</b> sweets. He didn’t get <b>enough</b> sleep and didn’t drink <b>enough</b> water."
        }
      ],
      outro: {
        text: "Too much sugar, too many sweets, not enough sleep: now you can talk about problems with quantity.",
        learned: [
          "Use too much with uncountable nouns and too many with plurals.",
          "Say what is not enough: I didn’t get enough sleep.",
          "Put enough before a noun."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s2l3",
      title: "I enjoy cycling, I want to try climbing: -ing or to?",
      short: "-ing or to?",
      icon: "star",
      status: "verified",
      why: "After some verbs we use -ing, and after others we use to. Talk about hobbies and plans without mistakes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Something new for Oksana",
          body: `<p class="lead">Oksana writes to the penfriend club.</p><p>I enjoy playing the piano, and I love doing karate. But last month I decided to try something new: climbing! There’s a climbing wall at a new sports centre near us. I want to get better at it, and I hope to go there every Saturday. I avoid going on Sundays: there are too many people.</p><p>Look at the verbs: enjoy <b>playing</b>, decided <b>to try</b>. Why -ing in one and to in the other?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "Oksana hopes {*to go|going} to the climbing wall every Saturday.",
          fbTitle: "Let’s find out.",
          fbText: "After <b>hope</b> we use <b>to</b> + verb: she hopes <b>to go</b>. The next screen shows which verbs take -ing and which take to."
        },
        {
          type: "info",
          title: "Verb + -ing or verb + to?",
          body: `<ul><li><b>enjoy, avoid, finish</b> + <b>-ing</b>:<br>I enjoy <b>playing</b>. I avoid <b>going</b> on Sundays.</li><li><b>want, decide, hope</b> + <b>to</b> + verb:<br>I want <b>to get</b> better. I hope <b>to go</b>.</li><li><b>like, love, hate, start</b> + both:<br>I love <b>doing</b> karate. = I love <b>to do</b> karate.</li></ul><p>Not: <s>I enjoy to play.</s> <s>I want playing.</s></p><p><b>avoid</b> = try not to do something</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Which verbs take -ing? Which take to? Which take both?</p>`,
          bins: ["+ -ing", "+ to", "both"],
          items: [
            ["enjoy", 0],
            ["avoid", 0],
            ["finish", 0],
            ["want", 1],
            ["decide", 1],
            ["hope", 1],
            ["love", 2],
            ["start", 2]
          ],
          hint: "Remember Oksana: I enjoy playing, I decided to try, I love doing karate.",
          fbOk: "Right.",
          fbBad: "Look at the three groups in the rules again.",
          fbText: "<b>enjoy, avoid, finish</b> + -ing. <b>want, decide, hope</b> + to. <b>love, start</b>: both are correct."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his week.</p>`,
          text: "I really enjoy {*playing|to play} chess. On Monday, I finished {*reading|to read} a book about famous players. Now I want {*to play|playing} in a big tournament. I decided {*to practise|practising} every day, and I hope {*to win|winning} a medal!",
          hint: "enjoy, finish → -ing. want, decide, hope → to.",
          fbOk: "Exactly.",
          fbBad: "Which verb comes before the gap? Check the rules.",
          fbText: "enjoy <b>playing</b>, finished <b>reading</b>: -ing. want <b>to play</b>, decided <b>to practise</b>, hope <b>to win</b>: to + verb."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “I love ___ in the park in the morning.”</p><p>Which word can go in the gap?</p>`,
          opts: [
            "only running",
            "only to run",
            "both: running and to run"
          ],
          correct: 2,
          hint: "Love is in the third group of the rules.",
          fbOk: "Well done!",
          fbBad: "Look at like, love, hate, start in the rules.",
          fbText: "After <b>love</b>, both are correct: I love <b>running</b>. = I love <b>to run</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Kyrylo’s message is wrong.</p>`,
          text: "I enjoy reading about history. This year I want to visit old castles, and I hope [visiting] Kamianets-Podilskyi in May.",
          hint: "Look at the verbs after want and hope.",
          fbOk: "Good eye!",
          fbBad: "Hope + -ing or hope + to?",
          fbText: "After <b>hope</b>: to + verb. I hope <b>to visit</b> Kamianets-Podilskyi. Enjoy <b>reading</b> and want <b>to visit</b> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>do</i>.</p>`,
          before: "Bohdan finished",
          after: "his homework at eight and then went to tennis.",
          answer: "doing",
          hint: "finish + -ing or to?",
          fbOk: "Yes!",
          fbBad: "finish is in the -ing group.",
          fbText: "After <b>finish</b>: -ing. Bohdan finished <b>doing</b> his homework."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her summer plans.</p>`,
          text: "This summer we’re going to the seaside in Cornwall. I enjoy {*swimming|to swim} in the sea, but I want {*to try|trying} something new. So I decided {*to learn|learning} to surf! Tom is a bit scared of big waves, so he avoids {*going|to go} into deep water.",
          hint: "enjoy, avoid → -ing. want, decide → to.",
          fbOk: "Well done!",
          fbBad: "Which group is the verb before each gap in?",
          fbText: "enjoy <b>swimming</b>, avoids <b>going</b>: -ing. want <b>to try</b>, decided <b>to learn</b>: to + verb."
        }
      ],
      outro: {
        text: "Enjoy doing, want to do, love doing or love to do: now you know which form comes next.",
        learned: [
          "Use -ing after enjoy, avoid and finish.",
          "Use to + verb after want, decide and hope.",
          "Know that after like, love, hate and start both forms are correct."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s2l4",
      title: "Take up a sport, give up fast food: phrasal verbs",
      short: "Phrasal verbs",
      icon: "bolt",
      status: "verified",
      why: "Two short words can make a new meaning. Talk about your daily routine and new habits.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "New habits",
          body: `<p class="lead">The penfriend club writes about new healthy habits.</p><p><b>Andrii:</b> I want to <b>take up</b> a new sport. Maybe tennis, like Bohdan!<br><b>Emma:</b> I’m going to <b>give up</b> fizzy drinks. Water is better.<br><b>Mariia:</b> On school days I <b>get up</b> at six and run in the park.<br><b>Taras:</b> I <b>work out</b> with my club twice a week.</p><p>Take up, give up, get up, work out: two words, one new meaning. What do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “I’m going to <b>give up</b> fizzy drinks.”</p><p>What is Emma going to do?</p>`,
          opts: [
            "stop drinking them",
            "give them to a friend",
            "drink more of them"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Give up</b> means stop doing or having something. Emma is going to stop drinking fizzy drinks."
        },
        {
          type: "info",
          title: "Phrasal verbs",
          body: `<p>A <b>phrasal verb</b> = verb + a small word (<i>up, out</i>). Together they have a new meaning.</p><ul><li><b>take up</b> a sport, a hobby → start doing it</li><li><b>give up</b> sweets → stop having them<br><b>give up</b> + -ing: I gave up <b>eating</b> sweets.</li><li><b>get up</b> → get out of bed</li><li><b>work out</b> → do exercise to get fit and strong</li></ul><p>Past: take → <b>took</b> up, give → <b>gave</b> up, get → <b>got</b> up, <b>worked</b> out.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["take up", "give up", "get up", "work out"],
          right: ["start a new sport or hobby", "stop doing or having something", "get out of bed", "do exercise to get fit"],
          hint: "Start or stop? Bed or exercise?",
          fbOk: "Right.",
          fbBad: "Look at the list of phrasal verbs again.",
          fbText: "<b>take up</b> → start, <b>give up</b> → stop, <b>get up</b> → get out of bed, <b>work out</b> → do exercise."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her family.</p>`,
          text: "Dmytro {*took up|gave up} football last year, and now he plays every weekend. Mum {*gave up|took up} sugar in her tea: now she drinks it without sugar. On school days, we all {*get up|work out} at seven, and Dmytro is always the last one out of bed. Dad {*works out|gets up} at home with a video in the evenings.",
          hint: "Football now every weekend: did he start or stop? Tea without sugar: start or stop?",
          fbOk: "Exactly.",
          fbBad: "Read each sentence to the end: it tells you the meaning.",
          fbText: "Dmytro <b>took up</b> football: he started it. Mum <b>gave up</b> sugar: she stopped. We <b>get up</b> at seven. Dad <b>works out</b>: he does exercise."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Roksolana used to skate. Then she started gymnastics. What did she do last year?</p>`,
          opts: [
            "She gived up skating and took up gymnastics.",
            "She gave up skating and took up gymnastics.",
            "She gave up skating and taked up gymnastics."
          ],
          correct: 1,
          hint: "give → gave, take → took.",
          fbOk: "Yes!",
          fbBad: "Check the past forms: give and take are irregular.",
          fbText: "Give → <b>gave</b> up, take → <b>took</b> up. <i>Gived</i> and <i>taked</i> are not words."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>Kyrylo wants to stop drinking fizzy drinks. One word in his message is wrong.</p>`,
          text: "From today, I am going to give [out] fizzy drinks. I want to get fit, so I work out every evening.",
          hint: "Stop having something: give … ?",
          fbOk: "Good eye!",
          fbBad: "Which phrasal verb means stop?",
          fbText: "Stop having something → <b>give up</b>: I am going to give <b>up</b> fizzy drinks. <i>Work out</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras started athletics last year. Now he trains twice a week.</p>`,
          before: "Taras",
          after: "up athletics last year.",
          answer: "took",
          hint: "Start a sport → take up. Past of take?",
          fbOk: "Well done!",
          fbBad: "Take up in the past: t…",
          fbText: "Start a sport → <b>take up</b>. In the past: Taras <b>took</b> up athletics."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to the club one month later.</p>`,
          text: "Good news! I {*gave up|took up|got up} fizzy drinks a month ago, and I feel great. Now I {*get up|give up|take up} half an hour earlier and go for a run before school. Tom wants to get stronger, so he {*works out|gets up|takes up} with me at the weekend. Maybe I’ll {*take up|give up|work out} tennis in the summer: Oliver says he can teach me!",
          hint: "Stop → give up. Out of bed → get up. Exercise → work out. Start a sport → take up.",
          fbOk: "Brilliant!",
          fbBad: "Check the meaning: start, stop, bed or exercise?",
          fbText: "I <b>gave up</b> fizzy drinks (stopped). I <b>get up</b> earlier (out of bed). Tom <b>works out</b> (does exercise). <b>Take up</b> tennis = start it."
        }
      ],
      outro: {
        text: "Take up, give up, get up, work out: small words, big changes in your day!",
        learned: [
          "Use the phrasal verbs take up, give up, get up and work out.",
          "Talk about new habits: I gave up fizzy drinks.",
          "Use the past forms took up, gave up, got up and worked out."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s2l5",
      title: "Hiking, camping, cycling: active weekends",
      short: "Active weekends",
      icon: "map",
      status: "verified",
      why: "An active weekend outside is good for you. Talk about outdoor activities and what you need for them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What did you do at the weekend?",
          body: `<p class="lead">On Monday, the penfriend club shares weekend news.</p><p><b>Taras:</b> Dad, Zlata and I went hiking in the Carpathians. We climbed Hoverla, the highest mountain in Ukraine! At night, we went camping near a river.<br><b>Emma:</b> We went cycling along the river with Mum. Then Tom and I went kayaking.<br><b>Daryna:</b> Lucky you! I love hiking too, but I only go in the autumn.</p><p>Hiking, camping, cycling: which verb comes before them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras went <b>camping</b> near a river. Where did he sleep?</p>`,
          opts: [
            "in a hotel",
            "in a tent",
            "at home"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "When you go <b>camping</b>, you sleep in a <b>tent</b>. Read more on the next screen."
        },
        {
          type: "info",
          title: "Go + -ing: outdoor activities",
          body: `<p>For many activities, we say <b>go</b> + <b>-ing</b>:</p><ul><li>go <b>hiking</b> → walk a long way in the mountains or the countryside</li><li>go <b>camping</b> → sleep in a <b>tent</b></li><li>go <b>cycling</b>, go <b>kayaking</b>, go <b>skiing</b>, go <b>climbing</b></li></ul><p>Things you need: a <b>rucksack</b>, a <b>map</b>, a <b>sleeping bag</b>, a <b>helmet</b>.</p><p>Not: <s>go to hiking</s>, <s>do camping</s>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["You go camping,", "You go cycling,", "You go hiking,", "You go skiing,"],
          right: ["so you need a tent and a sleeping bag.", "so you need a bike and a helmet.", "so you need good boots and a map.", "so you need skis and warm clothes."],
          hint: "Where do you sleep when you go camping? What do you ride?",
          fbOk: "Right.",
          fbBad: "Think: what do you need for each activity?",
          fbText: "Camping → a <b>tent</b> and a <b>sleeping bag</b>. Cycling → a bike and a <b>helmet</b>. Hiking → boots and a <b>map</b>. Skiing → skis and warm clothes."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna writes to Taras.</p>`,
          text: "Your weekend sounds amazing! Last autumn my mum and I {*went|did|played} hiking near Yaremche. We didn’t go {*camping|camp|to camping}: we stayed in a small hotel. Next year I want to go {*climbing|climb|to climbing} in the mountains!",
          hint: "go + -ing: go hiking, go camping.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: go + -ing, no <i>to</i>.",
          fbText: "We <b>went</b> hiking: go + -ing. We didn’t go <b>camping</b>. I want to go <b>climbing</b>: no <i>to</i> before the -ing word."
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>Mr Hnatiuk gives the club advice for hiking:</p><p><i>Check the weather first. Take enough water and some food. Wear good boots. Don’t go alone, and tell someone where you are going.</i></p><p>Which sentences follow his advice?</p>`,
          opts: [
            "Lesia checks the weather before she goes.",
            "Ilona goes hiking alone and tells nobody.",
            "Myroslava takes two bottles of water.",
            "Taras goes hiking in his old flip-flops."
          ],
          correct: [0, 2],
          hint: "Find the advice about the weather, water, boots and going alone.",
          fbOk: "Good eye!",
          fbBad: "Read the advice again and check each person.",
          fbText: "Lesia <b>checks the weather</b> and Myroslava <b>takes enough water</b>. Ilona goes alone and tells nobody, and Taras doesn’t wear good boots."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Taras and Zlata love skis and snow. They go to the Carpathians every winter.</p>`,
          before: "Every winter, Taras and Zlata go",
          after: "in the Carpathians.",
          answer: "skiing",
          hint: "go + -ing. What do you do with skis?",
          fbOk: "Yes!",
          fbBad: "go + an activity with -ing: ski…",
          fbText: "Skis and snow → they go <b>skiing</b>: go + -ing."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her weekend.</p>`,
          text: "On Saturday we went {*cycling|to cycling|cycle} along the river. I always wear a {*helmet|tent|map} on my bike. On Sunday, Tom and I went {*kayaking|kayak|to kayaking}. It was great! Next month we’re going to sleep in a tent for two nights: we’re going {*camping|camp|to camping}! I need a new {*sleeping bag|helmet|map} to sleep in.",
          hint: "go + -ing. What do you wear on your head on a bike? What do you sleep in when you go camping?",
          fbOk: "Brilliant!",
          fbBad: "Check: go + -ing, and the things you need.",
          fbText: "We went <b>cycling</b> and <b>kayaking</b>: go + -ing. On a bike, you wear a <b>helmet</b>. A tent → go <b>camping</b>, and you sleep in a <b>sleeping bag</b>."
        }
      ],
      outro: {
        text: "Hiking in the Carpathians or cycling along a river: an active weekend is a healthy weekend!",
        learned: [
          "Talk about outdoor activities with go + -ing: go hiking, go camping.",
          "Name things you need: a tent, a helmet, a sleeping bag.",
          "Read simple advice and check who follows it."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s2l6",
      title: "How do we spend our free time? A class survey",
      short: "Class survey",
      icon: "chart",
      status: "verified",
      why: "A survey shows what people really do. Learn to talk about numbers in your class.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What does our class do?",
          body: `<p class="lead">Andrii’s class in Kyiv did a <b>survey</b>: they asked all 24 pupils the same question.</p><p><i>“What do you do in your free time on most days?”</i> Pupils could choose more than one answer.</p><p>Andrii is writing about the results for the school website. How can he talk about the numbers?</p>`,
          lab: {
            kind: "chart",
            horizontal: true,
            mono: true,
            max: 24,
            bars: [
              { label: "watch videos", v: 18 },
              { label: "meet friends", v: 15 },
              { label: "do sport", v: 12 },
              { label: "play video games", v: 10 },
              { label: "read books", v: 6 },
              { label: "play music", v: 3 }
            ],
            alt: "Results of the survey, 24 pupils: watch videos 18, meet friends 15, do sport 12, play video games 10, read books 6, play music 3"
          },
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>18 out of 24 pupils watch videos. What can Andrii say?</p>`,
          opts: [
            "All of us watch videos.",
            "A few of us watch videos.",
            "Most of us watch videos."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "18 out of 24 is more than half, so: <b>most of us</b>. The next screen shows more words for numbers."
        },
        {
          type: "info",
          title: "Talking about results",
          body: `<p>In a class of 24 pupils:</p><ul><li>24 out of 24 → <b>all of us</b></li><li>more than 12 → <b>most of us</b></li><li>12 out of 24 → <b>half of us</b></li><li>6 out of 24 → <b>a quarter of us</b></li><li>2 or 3 → <b>only a few of us</b></li><li>0 → <b>nobody</b></li></ul><p><b>The most popular</b> activity is watching videos.<br><b>More</b> of us meet friends <b>than</b> play video games.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Look at the survey: watch videos 18, do sport 12, read books 6, play music 3 (24 pupils).</p>`,
          text: "{*Most|Half|A few} of us watch videos. {*Half|Most|A quarter} of us do sport. {*A quarter|Half|Most} of us read books. Only {*a few|most|half} of us play music.",
          hint: "24 pupils: 12 is half, 6 is a quarter. What is more than half?",
          fbOk: "Exactly.",
          fbBad: "Compare each number with 24. Look at the list on the last screen.",
          fbText: "18 → <b>most</b> (more than half). 12 → <b>half</b>. 6 → <b>a quarter</b>. 3 → only <b>a few</b>."
        },
        {
          type: "multi",
          sk: "func",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are true about Andrii’s class?</p>`,
          lab: {
            kind: "chart",
            horizontal: true,
            mono: true,
            max: 24,
            bars: [
              { label: "watch videos", v: 18 },
              { label: "meet friends", v: 15 },
              { label: "do sport", v: 12 },
              { label: "play video games", v: 10 },
              { label: "read books", v: 6 },
              { label: "play music", v: 3 }
            ],
            alt: "Results of the survey, 24 pupils: watch videos 18, meet friends 15, do sport 12, play video games 10, read books 6, play music 3"
          },
          opts: [
            "Playing video games is the most popular activity.",
            "More of us meet friends than play video games.",
            "Nobody plays music.",
            "More of us do sport than read books."
          ],
          correct: [1, 3],
          hint: "Compare the numbers: 15 and 10, 12 and 6. Is 3 the same as 0?",
          fbOk: "Good eye!",
          fbBad: "Check each number on the chart.",
          fbText: "Meet friends 15, video games 10: <b>true</b>. Sport 12, books 6: <b>true</b>. The most popular is watching videos, not games. Three pupils play music, so it isn’t “nobody”."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Zoriana asked the same question in her art club. 20 people answered. 10 of them draw comics at home.</p><p>What can she say?</p>`,
          opts: [
            "Half of us draw comics at home.",
            "Nobody draws comics at home.",
            "A quarter of us draw comics at home."
          ],
          correct: 0,
          hint: "10 out of 20: what part is it?",
          fbOk: "Right.",
          fbBad: "Is 10 out of 20 more than half, half or less?",
          fbText: "10 out of 20 is <b>half</b>: half of us draw comics."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>18 pupils watch videos. That’s more than any other activity in the survey.</p>`,
          before: "Watching videos is the most",
          after: "activity in our class.",
          answer: ["popular", "common"],
          hint: "Look at the rules: the most … activity.",
          fbOk: "Well done!",
          fbBad: "The activity that most people do is the most p…",
          fbText: "The activity with the biggest number is <b>the most popular</b> activity."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about the survey for the school website.</p>`,
          text: "We asked 24 pupils about their free time. {*Most|Nobody|A quarter} of us watch videos, and half of us do sport. Meeting friends is more {*popular|popularer|the most popular} than playing video games. But only {*a quarter|most|half} of us read books. I think we spend too {*much|many} time on screens, and we don’t read {*enough|too} books.",
          hint: "18 out of 24? 6 out of 24? Time is uncountable. Enough + noun.",
          fbOk: "Brilliant!",
          fbBad: "Check the numbers, then think about too much and enough.",
          fbText: "18 → <b>most</b> of us. Meeting friends is more <b>popular</b> (more + adjective). 6 → <b>a quarter</b>. Too <b>much</b> time: uncountable. We don’t read <b>enough</b> books."
        }
      ],
      outro: {
        text: "Most of us, half of us, only a few of us: now you can talk about the results of a survey.",
        learned: [
          "Read a chart about free time activities.",
          "Talk about numbers: most of us, half of us, a quarter of us, nobody.",
          "Say which activity is the most popular and give your opinion."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s2l7",
      title: "Healthy week at the penfriend club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the Healthy week page?",
          body: `<p class="lead">The penfriend club is making a web page: “Healthy week”. Ms Kravets needs your help.</p><p>Check the posts and tips. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Tip 1 for teenagers: “Get enough sleep.” How much sleep do teenagers need?</p>`,
          opts: [
            "five or six hours a night",
            "twelve to fourteen hours a night",
            "eight to ten hours a night"
          ],
          correct: 2,
          pre: "e8s2l1",
          fbOk: "Right.",
          fbBad: "Remember Andrii: his nine hours were fine.",
          fbText: "Teenagers need <b>8–10 hours</b> of sleep a night."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Tip 2: Don’t eat too {*many|much} sweets or drink too {*much|many} cola. And eat {*enough|too many} fruit and vegetables!",
          pre: "e8s2l2",
          hint: "Can you count sweets? Can you count cola?",
          fbOk: "Yes!",
          fbBad: "Sweets → plural. Cola → uncountable.",
          fbText: "Too <b>many</b> sweets, too <b>much</b> cola. Eat <b>enough</b> fruit: enough before the noun."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          text: "Mariia: I enjoy {*running|to run} in the park. This year I want {*to take|taking} part in a race, and I hope {*to finish|finishing} in the top ten!",
          pre: "e8s2l3",
          hint: "Which verbs take -ing, and which take to?",
          fbOk: "Exactly.",
          fbBad: "enjoy → -ing. want, hope → to.",
          fbText: "enjoy <b>running</b>: -ing. want <b>to take</b> part, hope <b>to finish</b>: to + verb."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>Tom: “I started swimming last year. Now I’m in a swimming club!”</p>`,
          before: "Tom",
          after: "up swimming last year.",
          answer: "took",
          pre: "e8s2l4",
          fbOk: "Well done!",
          fbBad: "Start a sport → take up. Past?",
          fbText: "Start a sport → take up. In the past: Tom <b>took</b> up swimming."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s post is wrong.</p>`,
          text: "Last weekend we went [to] hiking in the Carpathians. At night we went camping, and I slept in a tent.",
          pre: "e8s2l5",
          fbOk: "Good eye!",
          fbBad: "go + -ing: do we need a word between them?",
          fbText: "go + -ing, no <i>to</i>: we went <b>hiking</b>. <i>Went camping</i> is correct."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Ms Kravets asked 24 club members: “Do you walk to school?” 6 of them said yes.</p><p>What can she write?</p>`,
          opts: [
            "Most of our members walk to school.",
            "A quarter of our members walk to school.",
            "Half of our members walk to school."
          ],
          correct: 1,
          pre: "e8s2l6",
          hint: "24 members: 12 is half. What is 6?",
          fbOk: "Yes!",
          fbBad: "6 out of 24: half or a quarter?",
          fbText: "6 out of 24 is <b>a quarter</b>. Half would be 12."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about healthy living, your hobbies and plans, active weekends and a class survey.",
        learned: [
          "Talk about a healthy lifestyle with too much, too many and enough.",
          "Use -ing or to after enjoy, want, hope and other verbs.",
          "Use the phrasal verbs take up, give up, get up and work out.",
          "Comment on survey results: most of us, a quarter of us."
        ]
      }
    }
  ]
});
