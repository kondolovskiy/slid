/* Слід · Англійська мова, 6 клас — «Getting ready for a trip» (e6s5)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), тема «Подорож» — транспорт; підготовка до подорожі; проїзні документи
   (с. 20, розд. 4.2.2); функція «розпитувати з метою роз’яснення та уточнення інформації» — діалог у касі (урок 6);
   граматика A2 (с. 21–22): Present Simple for future (timetables), Present Continuous for future arrangements,
   have to (obligation, questions), might (possibility):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично: e4s7l1 (транспорт, by bus), e4s7l6 (I’ll), e5s5l5 (will для прогнозу), e5s9l3–l4 (be going to) —
   will і be going to лише в порівнянні з новими формами (reports/verify/plan-eng-g6.md §5).
   Друга правильна відповідь (CD Grammar «Future: present continuous…», «Future: present simple…», «Be going to»):
   розклад — Present Simple, але й «is leaving»; домовленість — Present Continuous, але й «going to leave» і Present Simple.
   Тому у виборі форми хибні варіанти лише граматично неможливі (leave / leaving, is meet, might to rain),
   а «обидві правильні» — явно, вправою multi (урок 3). Час і розклади в уроках — вигадані, не справжній розклад.
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос і факти — URL у tasks/…/write-eng-g6-e6s5.md, «Нотатки агента».
   Статус: verified (verifier-e6s5, reports/verify/e6s5.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s5",
  grade: 6,
  weeks: [19, 23],
  title: "Getting ready for a trip",
  why: "To talk about transport and travel plans. And to get ready for a trip: tickets, documents and a suitcase.",
  requires: ["e4s7l1", "e4s7l6", "e5s5l4", "e5s5l5", "e5s9l3", "e5s9l4"],
  meta: { author: "writer-e6s5", created: "2026-11-20", factcheck: "verifier-e6s5", teacher: null },
  badges: [
    { id: "e6s5boss", name: "Ready to travel", icon: "trophy", desc: "Finish the final lesson “Getting ready for a trip”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s5l1",
      title: "By train, by plane or by ferry?",
      short: "Transport",
      icon: "map",
      status: "verified",
      why: "Learn new words for transport. Choose the best way to travel.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "How are they going to travel?",
          body: `<p class="lead">The friends chat about the summer.</p><p><b>Emma:</b> We’re going to visit France. We’re going to go by ferry!<br><b>Oksana:</b> We’re going to visit Uncle Ivan in Odesa. It’s a long journey by train.<br><b>Andrii:</b> My grandparents are going to come to Kyiv by coach.</p><p>A ferry, a journey, a coach: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma’s family is going to take their car to France. They want to go across the sea. What is a <b>ferry</b>?</p>`,
          opts: [
            "a big boat for people and cars",
            "a small plane",
            "a fast train"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>ferry</b> is a big boat. It takes people and cars across the sea or a river."
        },
        {
          type: "info",
          title: "Ways to travel",
          body: `<ul><li>a <b><u>fer</u>ry</b> – a big boat for people and cars</li><li>a <b>coach</b> – a comfortable bus for long journeys</li><li>a <b>plane</b> – at an <b><u>air</u>port</b></li><li>a <b>train</b> – at a <b>station</b></li><li>a <b><u>jour</u>ney</b> – you travel from one place to another</li><li><b>cheap</b> – it doesn’t cost a lot; <b>ex<u>pen</u>sive</b> – it costs a lot</li></ul><p>We go <b>by</b> ferry, <b>by</b> coach. Not: <s>by a ferry</s>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: [
            "A ferry is",
            "A coach is",
            "An airport is",
            "A journey is"
          ],
          right: [
            "a big boat for people and cars.",
            "a comfortable bus for long journeys.",
            "a place for planes.",
            "travelling from one place to another."
          ],
          hint: "Which one goes on the sea? Which one is a bus?",
          fbOk: "Well done!",
          fbBad: "Look at the list of words again.",
          fbText: "A <b>ferry</b> is a big boat. A <b>coach</b> is a bus for long journeys. Planes are at an <b>airport</b>. A <b>journey</b> is travelling."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Emma’s mum compares two ways to London.</p><ul><li><b>Train:</b> 1 hour, £20</li><li><b>Coach:</b> 2 hours, £10</li></ul>`,
          text: "The train is {*faster|slower} than the coach. The coach is {*cheaper|more expensive} than the train. The coach journey is {*longer|shorter}.",
          hint: "Which one takes 1 hour? Which one costs £10?",
          fbOk: "Exactly.",
          fbBad: "Look at the hours and the prices again.",
          fbText: "The train takes 1 hour: it’s <b>faster</b>. The coach costs £10: it’s <b>cheaper</b>. Two hours is a <b>longer</b> journey."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana doesn’t go to Odesa by car or by coach. She takes the train.</p>`,
          before: "Every July Oksana goes to Odesa",
          after: "train.",
          answer: "by",
          hint: "by bus, by car, … train",
          fbOk: "Right.",
          fbBad: "Look at the rule: we go … ferry, … coach.",
          fbText: "We say <b>by</b> train, <b>by</b> coach, <b>by</b> ferry. No <i>a</i> or <i>the</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+fer|ry", "+jour|ney", "+air|port", "ex|+pen|sive"],
          hint: "Look at the underlined parts in the list of words.",
          fbOk: "Well done!",
          fbBad: "Look at the strong parts in the list again.",
          fbText: "<u>fer</u>ry, <u>jour</u>ney, <u>air</u>port: the strong part is at the start. ex<u>pen</u>sive: it’s in the middle."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma’s family wants to take their car to France. They want to go across the sea. How can they travel?</p>`,
          opts: [
            "by ferry",
            "by plane",
            "on foot"
          ],
          correct: 0,
          hint: "Which one takes people and cars across the sea?",
          fbOk: "Yes!",
          fbBad: "Can a plane take their car? Can they walk across the sea?",
          fbText: "A <b>ferry</b> takes people and cars across the sea. So they go <b>by ferry</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Taras! My grandparents are coming to Kyiv in July. They live in Chernihiv. Grandad wants to go by car, but Grandma loves the coach. It’s cheaper than the car and very comfortable. So they’re going to come by coach! – Andrii</i></p><p>Why does Grandma love the coach?</p>`,
          opts: [
            "It’s faster than a plane.",
            "It’s cheaper than the car and comfortable.",
            "It goes across the sea."
          ],
          correct: 1,
          hint: "Find Grandma in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Grandma again.",
          fbText: "The coach is <b>cheaper</b> than the car and <b>very comfortable</b>. A ferry goes across the sea, not a coach."
        }
      ],
      outro: {
        text: "Now you know words for transport: a ferry, a coach, a journey. Compare them: faster, cheaper.",
        learned: [
          "Name ways to travel: a ferry, a coach, a plane, a train.",
          "Say how you travel: by ferry, by coach.",
          "Compare ways to travel: The coach is cheaper than the train."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s5l2",
      title: "When does the train leave? Timetables",
      short: "Timetables",
      icon: "chart",
      status: "verified",
      why: "Read a train timetable. Ask and answer: What time does the train leave?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What time is their train?",
          body: `<p class="lead">Mariia and her mum are at the station in Kyiv. They’re going home to Kharkiv.</p><p><b>Trains today</b></p><ul><li>Lviv: leaves 07.10, arrives 12.40, platform 3</li><li>Odesa: leaves 08.25, arrives 15.50, platform 5</li><li>Kharkiv: leaves 09.00, arrives 14.05, platform 2</li></ul><p>What time does their train leave?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>It’s 8.30 now. Mum says: “Our train <b>leaves</b> at nine.” When does it leave?</p>`,
          opts: [
            "now, at 8.30",
            "in thirty minutes",
            "yesterday"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The train <b>leaves</b> at nine: in thirty minutes. It’s about the future, but the verb is in the Present Simple!"
        },
        {
          type: "info",
          title: "Timetables: the Present Simple",
          body: `<p>A <b><u>time</u>table</b> – a list of times for trains, coaches, planes.</p><p>Timetables: the <b>Present Simple</b>, also for the future.</p><ul><li>The train <b>leaves</b> at 09.00.</li><li>It <b>arrives</b> in Kharkiv at 14.05.</li><li>What time <b>does</b> the train <b>leave</b>?</li><li>The coach <b>doesn’t stop</b> here.</li></ul><p>A <b><u>plat</u>form</b> – you get on the train here.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Present Simple.",
          body: `<p>Look at the timetable in Kyiv.</p><ul><li>Lviv: leaves 07.10, arrives 12.40</li><li>Odesa: leaves 08.25, arrives 15.50</li></ul>`,
          text: "The train to Lviv {*leaves|leave|leaving} at 07.10. It {*arrives|arrive|arriving} in Lviv at 12.40. What time {*does|do|is} the train to Odesa leave? It {*leaves|leave} at 08.25.",
          hint: "The train = it. It leaves, it arrives. Questions: does.",
          fbOk: "Yes!",
          fbBad: "The train is it: leave or leaves?",
          fbText: "The train (it) <b>leaves</b>, it <b>arrives</b>. In the question: What time <b>does</b> the train leave?"
        },
        {
          type: "info",
          title: "Saying the time",
          body: `<p>Timetables show 07.10 or 14.05. We often say:</p><ul><li>07.10 → ten <b>past</b> seven</li><li>14.05 → five <b>past</b> two</li><li>10.15 → <b>quarter past</b> ten</li><li>12.40 → twenty <b>to</b> one</li><li>09.00 → nine <b>o’clock</b></li></ul><p>past = after; to = before.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "read",
          title: "Match the questions and the answers.",
          body: `<ul><li>Lviv: leaves 07.10, arrives 12.40, platform 3</li><li>Kharkiv: leaves 09.00, arrives 14.05, platform 2</li></ul>`,
          left: [
            "When does the Lviv train leave?",
            "When does the Lviv train arrive?",
            "When does the Kharkiv train leave?",
            "Which platform is the Kharkiv train on?"
          ],
          right: [
            "At ten past seven.",
            "At twenty to one.",
            "At nine o’clock.",
            "Platform 2."
          ],
          hint: "Find the train in the timetable. Then look at the time list.",
          fbOk: "Well done!",
          fbBad: "Find the train and the time in the timetable.",
          fbText: "Lviv: leaves at <b>ten past seven</b>, arrives at <b>twenty to one</b>. Kharkiv: <b>nine o’clock</b>, <b>platform 2</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Kharkiv: leaves 09.00, arrives 14.05</p><p>Mariia: “When does our train arrive in Kharkiv?”</p>`,
          before: "Mum: It",
          after: "at five past two.",
          answer: "arrives",
          hint: "Look at the question: When does it arrive? Now answer: It …",
          fbOk: "Exactly.",
          fbBad: "Our train = it. Remember -s.",
          fbText: "When <b>does</b> it arrive? – It <b>arrives</b> at five past two. No <i>does</i> in the answer, so: <i>-s</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia wants to know the time of the train to Odesa. What does she ask?</p>`,
          tiles: ["What time", "does", "the train", "to Odesa", "leave"],
          extra: ["leaves"],
          keepCase: true,
          answer: "What time does the train to Odesa leave?",
          hint: "Start with What time. After does: leave or leaves?",
          fbOk: "Right.",
          fbBad: "After does, the verb has no -s.",
          fbText: "<b>What time does the train to Odesa leave?</b> After <i>does</i>: <b>leave</b>, not <i>leaves</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "Our train to Kharkiv [leave] at nine o’clock. It arrives at five past two.",
          hint: "The train is it. Look at the verbs.",
          fbOk: "Good eye!",
          fbBad: "Check the verb after train.",
          fbText: "The train (it) <b>leaves</b> at nine o’clock. <b>It arrives</b> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! Mum and I are at the station in Kyiv. Our train to Kharkiv leaves at nine o’clock from platform 2. It arrives at five past two. Then Dad is taking us home by car. – Mariia</i></p><p>When does Mariia’s train arrive in Kharkiv?</p>`,
          opts: [
            "at nine o’clock",
            "at five past two",
            "at ten past seven"
          ],
          correct: 1,
          hint: "Find the word arrives.",
          fbOk: "Well done!",
          fbBad: "Nine o’clock is when the train leaves.",
          fbText: "The train <b>leaves</b> at nine o’clock and <b>arrives</b> at five past two."
        }
      ],
      outro: {
        text: "Read a timetable. Use the Present Simple: The train leaves at 07.10.",
        learned: [
          "Read a train timetable.",
          "Say when a train leaves and arrives: It leaves at 07.10.",
          "Ask: What time does the train leave?"
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s5l3",
      title: "We’re leaving on Friday: travel plans",
      short: "Travel plans",
      icon: "path",
      status: "verified",
      why: "Talk about your travel plans with a day and a time. Choose between -ing, going to and will.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "When is Oksana leaving?",
          body: `<p class="lead">Oksana writes to Emma.</p><p><i>Hi Emma! We’re going to Odesa again! We’ve got the tickets. We’re leaving on Friday. Uncle Ivan is meeting us at the station. Dmytro is bringing his football. – Oksana</i></p><p>Is Oksana in Odesa now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “Uncle Ivan <b>is meeting</b> us at the station.” When is he meeting them?</p>`,
          opts: [
            "now",
            "on Friday",
            "every day"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "On Friday. The verb is <i>is meeting</i>. It’s about the future: they’ve got a plan."
        },
        {
          type: "info",
          title: "Plans: the Present Continuous",
          body: `<p>We’ve got the tickets. We know the day. Use the <b>Present Continuous</b>: <b>am / is / are + -ing</b>.</p><ul><li>We<b>’re leaving</b> on Friday.</li><li>Uncle Ivan <b>is meeting</b> us at the station.</li><li>Dad <b>isn’t coming</b> with us.</li><li><b>Are</b> you <b>coming</b> too? – Yes, I am.</li></ul><p>Say when: on Friday, tomorrow, next week.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Present Continuous.",
          body: `<p>Oksana writes about Friday.</p>`,
          text: "On Friday we {*are taking|is taking|are take} the train to Odesa. Dad {*isn’t coming|aren’t coming|not coming} with us. Uncle Ivan {*is meeting|are meeting|meeting} us at the station.",
          hint: "We – are, Dad – is, Uncle Ivan – is. Then the verb with -ing.",
          fbOk: "Yes!",
          fbBad: "Check: am, is or are? And the -ing?",
          fbText: "We <b>are taking</b>, Dad <b>isn’t coming</b>, Uncle Ivan <b>is meeting</b>: am / is / are + -ing."
        },
        {
          type: "info",
          title: "-ing, going to, will or a timetable?",
          body: `<ul><li>A plan → <b>-ing</b> or <b>going to</b>. Both are correct: We<b>’re leaving</b> on Friday. = We<b>’re going to leave</b> on Friday.</li><li>A timetable → <b>Present Simple</b>: The train <b>leaves</b> at 10.45.</li><li>You decide now → <b>will</b>: It’s raining! I<b>’ll</b> take an umbrella.</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Oksana has got the tickets. The train is on Friday. What can she say?</p>`,
          opts: [
            "We’re leaving on Friday.",
            "We’re going to leave on Friday.",
            "We leaving on Friday.",
            "We are leave on Friday."
          ],
          correct: [0, 1],
          hint: "Two sentences are correct. Look at the last rule again.",
          fbOk: "Well done!",
          fbBad: "Check: are + -ing, or are going to + verb.",
          fbText: "<b>We’re leaving</b> and <b>We’re going to leave</b> are both correct for a plan. <i>We leaving</i> has no <i>are</i>. <i>We are leave</i> has no <i>-ing</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana and Dmytro are at the station in Odesa. Dmytro: “I’m thirsty!” Uncle Ivan decides now. What does he say?</p>`,
          opts: [
            "I’ll buy you some water.",
            "I buy you some water every day.",
            "I’m buying you some water next week."
          ],
          correct: 0,
          hint: "He decides now. Look at the rule for will.",
          fbOk: "Right.",
          fbBad: "Does Uncle Ivan decide now?",
          fbText: "He decides now: <b>I’ll buy you some water.</b> <i>Next week</i> is too late for a thirsty boy!"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma wants to know the time of Oksana’s train. What does she ask?</p>`,
          tiles: ["What time", "are", "you", "leaving", "on Friday"],
          extra: ["do"],
          keepCase: true,
          answer: ["What time are you leaving on Friday?", "What time on Friday are you leaving?"],
          hint: "Start with What time. Then are and you.",
          fbOk: "Exactly.",
          fbBad: "With -ing, we ask with are, not do.",
          fbText: "<b>What time are you leaving on Friday?</b> The question has <i>are</i> + <i>-ing</i>, not <i>do</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma again.</p>`,
          text: "We {*are leaving|leaving} on Friday. The train {*leaves|leave} at 10.45. Uncle Ivan {*is meeting|meet} us in Odesa. Oh, it’s raining now! I think I {*will take|takes} my raincoat.",
          hint: "A plan: are + -ing. A timetable: leaves. You decide now: will.",
          fbOk: "Well done!",
          fbBad: "Look at the -ing, going to or will rules again.",
          fbText: "A plan: we <b>are leaving</b>, Uncle Ivan <b>is meeting</b>. A timetable: the train <b>leaves</b>. She decides now: I think I <b>will take</b> my raincoat."
        }
      ],
      outro: {
        text: "Got a plan with a day? Say We’re leaving on Friday. A timetable? The train leaves at 10.45.",
        learned: [
          "Talk about travel plans: We’re leaving on Friday.",
          "Ask: What time are you leaving?",
          "Choose -ing, going to, will or the Present Simple for the future."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s5l4",
      title: "Packing a suitcase: it might be cold",
      short: "Packing",
      icon: "bulb",
      status: "verified",
      why: "Pack for a trip. Say what might happen: It might rain.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What is Taras packing?",
          body: `<p class="lead">Taras’s family is going to the Carpathians for the weekend. Mum is helping Taras.</p><p><b>Mum:</b> Pack your raincoat, Taras. It might rain.<br><b>Taras:</b> But it’s sunny in Lviv!<br><b>Mum:</b> Yes, but it might be cold in the mountains. Take a jumper too.<br><b>Taras:</b> OK. And I’m taking my camera!</p><p>Is Mum sure about the rain?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mum: “It <b>might</b> rain.” What does she mean?</p>`,
          opts: [
            "It’s raining now.",
            "Maybe it will rain. She isn’t sure.",
            "It rains every day."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>It might rain</b> = maybe it will rain. Mum isn’t sure."
        },
        {
          type: "info",
          title: "might = maybe",
          body: `<ul><li>It <b>might rain</b>. = Maybe it will rain.</li><li>It <b>might be</b> cold in the mountains.</li><li>We <b>might not</b> swim. It’s cold.</li></ul><p><b>might</b> + verb: might <b>rain</b>, might <b>be</b>.<br>Not: <s>might to rain</s>, <s>it mights</s>.</p><p>You’re sure → <b>will</b>. You aren’t sure → <b>might</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mum writes a note for Taras.</p>`,
          text: "Take a jumper. It {*might be|might is|mights be} cold at night. Pack your raincoat. It {*might rain|might to rain|might rains}. We {*might not|might no} go swimming.",
          hint: "might + verb. No to, no -s.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: might + verb.",
          fbText: "It <b>might be</b> cold. It <b>might rain</b>. We <b>might not</b> go swimming. After <i>might</i>: no <i>to</i>, no <i>-s</i>."
        },
        {
          type: "info",
          title: "In my suitcase",
          body: `<p><b>pack</b> = put things in a bag or a suitcase</p><ul><li>a <b><u>suit</u>case</b>, a <b><u>ruck</u>sack</b> – bags for a journey</li><li>for the rain: a <b><u>rain</u>coat</b>, an <b>um<u>brel</u>la</b></li><li>for the sun: <b><u>sun</u>glasses</b>, <b>sun cream</b></li><li>for the cold: a <b><u>jum</u>per</b></li><li>a <b><u>tooth</u>brush</b>, a <b>map</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>What do you pack?</p>`,
          bins: ["for the rain", "for the sun"],
          items: [
            ["a raincoat", 0],
            ["sunglasses", 1],
            ["an umbrella", 0],
            ["sun cream", 1]
          ],
          hint: "Which things keep you dry?",
          fbOk: "Exactly.",
          fbBad: "Look at the suitcase list again.",
          fbText: "For the rain: <b>a raincoat</b>, <b>an umbrella</b>. For the sun: <b>sunglasses</b>, <b>sun cream</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>It’s sunny in Lviv. Nobody knows the weather in the mountains tomorrow. What does Mum say?</p>`,
          opts: [
            "It might rain in the mountains tomorrow.",
            "It rains in the mountains now.",
            "It might to rain in the mountains tomorrow."
          ],
          correct: 0,
          hint: "Mum isn’t sure. And remember: might + verb.",
          fbOk: "Right.",
          fbBad: "Is Mum sure? Is it about now?",
          fbText: "Mum isn’t sure: <b>It might rain</b>. <i>It rains now</i> is not about tomorrow. <i>might to rain</i> is wrong."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mum isn’t sure about the weather tomorrow. Maybe it will be sunny, maybe it won’t.</p>`,
          before: "Mum: Pack your sun cream. It",
          after: "be sunny tomorrow.",
          answer: ["might", "may", "could"],
          hint: "Mum isn’t sure. Which word means maybe?",
          fbOk: "Well done!",
          fbBad: "Mum isn’t sure, so it isn’t will.",
          fbText: "Not sure: It <b>might</b> be sunny tomorrow. <i>will</i> is for things you’re sure about."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+suit|case", "um|+brel|la", "+rain|coat", "+jum|per"],
          hint: "Look at the underlined parts in the suitcase list.",
          fbOk: "Good eye!",
          fbBad: "Look at the suitcase list again.",
          fbText: "<u>suit</u>case, <u>rain</u>coat, <u>jum</u>per: the strong part is at the start. um<u>brel</u>la: it’s in the middle."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras tells Andrii about the weather in the mountains. He isn’t sure.</p>`,
          tiles: ["It", "might not", "be", "warm", "in the mountains"],
          extra: ["is"],
          keepCase: true,
          answer: "It might not be warm in the mountains.",
          hint: "Start with It. might not + verb.",
          fbOk: "Exactly.",
          fbBad: "After might not: be, not is.",
          fbText: "<b>It might not be warm in the mountains.</b> After <i>might not</i>: <b>be</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! We’re going to the Carpathians on Saturday. Mum says it might be cold at night, so I’m packing a warm jumper. It might rain too, so my raincoat is in my rucksack. – Taras</i></p><p>Why is Taras packing a jumper?</p>`,
          opts: [
            "It’s raining now.",
            "It might be cold at night.",
            "He’s going to the seaside."
          ],
          correct: 1,
          hint: "Find the word jumper in the text.",
          fbOk: "Yes!",
          fbBad: "Read the sentence about the jumper again.",
          fbText: "<b>It might be cold at night.</b> So Taras is packing a warm jumper. The raincoat is for the rain."
        }
      ],
      outro: {
        text: "Not sure about the weather? Say It might rain. And pack your raincoat!",
        learned: [
          "Name things for a trip: a suitcase, a raincoat, sun cream.",
          "Say what might happen: It might be cold.",
          "Say what might not happen: We might not swim."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s5l5",
      title: "Tickets and passports: you have to show them",
      short: "Have to",
      icon: "shield",
      status: "verified",
      why: "Talk about travel rules: You have to show your passport. Ask: Do I have to…?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What do they have to show?",
          body: `<p class="lead">Emma’s family is going to France by ferry. Mum writes a note.</p><p><i>At the port: we have to be there at eight o’clock. We have to show our passports. Tom has to show his passport too! We don’t have to print the tickets. They’re on my phone.</i></p><p>What do they have to show at the port?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mum: “We <b>have to</b> show our passports.” What does she mean?</p>`,
          opts: [
            "We can show them, but we don’t need to.",
            "It’s a rule. We need to show them.",
            "We haven’t got passports."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>have to</b> = it’s a rule, it’s necessary. They need to show their passports."
        },
        {
          type: "info",
          title: "have to: rules",
          body: `<p>A <b><u>pass</u>port</b> – a document with your photo. You need it for other countries.</p><ul><li>I, you, we, they <b>have to</b> show a passport.</li><li>he, she, it <b>has to</b>: Tom <b>has to</b> show his passport.</li><li><b>don’t / doesn’t have to</b> = it isn’t necessary: We <b>don’t have to</b> print the tickets.</li></ul><p>have to + verb: has to <b>show</b>. Not: <s>has to shows</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>At the port.</p>`,
          text: "Emma {*has to|have to|has} show her passport. Her parents {*have to|has to} show their passports too. They {*don’t have to|doesn’t have to} print the tickets.",
          hint: "Emma – she – has to. Her parents – they – have to.",
          fbOk: "Yes!",
          fbBad: "One person or two? has to or have to?",
          fbText: "Emma (she) <b>has to</b>. Her parents (they) <b>have to</b>. They <b>don’t have to</b> print the tickets."
        },
        {
          type: "info",
          title: "Do I have to…?",
          body: `<ul><li><b>Do</b> I <b>have to</b> show my ticket? – Yes, you <b>do</b>. / No, you <b>don’t</b>.</li><li><b>Does</b> Tom <b>have to</b> show his passport? – Yes, he <b>does</b>. / No, he <b>doesn’t</b>.</li><li>What <b>do</b> we <b>have to</b> take?</li></ul><p>In the question: <b>do / does</b> + have to.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Tom asks Dad at the port.</p>`,
          text: "Tom: {*Do|Does|Am} I have to show my passport? Dad: Yes, you {*do|are|have}. Tom: {*Does|Do} Emma have to show her passport too? Dad: Yes, she {*does|do}.",
          hint: "I – do, Emma – does. Short answers: Yes, you do. Yes, she does.",
          fbOk: "Exactly.",
          fbBad: "Look at the questions with have to again.",
          fbText: "<b>Do</b> I have to…? – Yes, you <b>do</b>. <b>Does</b> Emma have to…? – Yes, she <b>does</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Tom: “Do we have to print the tickets?”<br>Dad: “No. The tickets are on Mum’s phone.”</p>`,
          before: "Dad: We",
          after: "have to print the tickets.",
          answer: ["don’t", "won’t"],
          contractions: true,
          hint: "It isn’t necessary. We … have to.",
          fbOk: "Well done!",
          fbBad: "The tickets are on the phone. Do they need paper?",
          fbText: "It isn’t necessary: we <b>don’t</b> have to print the tickets. They’re on Mum’s phone."
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the words.",
          body: `<p>Taras is taking the train from Lviv to Kyiv. Is it a rule?</p>`,
          bins: ["He has to", "He doesn’t have to"],
          items: [
            ["buy a ticket", 0],
            ["show his ticket", 0],
            ["sit next to the window", 1],
            ["wear a jumper", 1]
          ],
          hint: "Can you travel by train without a ticket?",
          fbOk: "Right.",
          fbBad: "What is a rule on every train?",
          fbText: "Everybody <b>has to</b> buy a ticket and show it on the train. He <b>doesn’t have to</b> sit next to the window or wear a jumper."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "We are at the port. Dad has to show the tickets. Emma [have] to show her passport.",
          hint: "Emma is she.",
          fbOk: "Good eye!",
          fbBad: "Check the sentence about Emma.",
          fbText: "Emma (she) <b>has to</b> show her passport. <b>Dad has to</b> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Oksana! We’re at the port in Dover now. First we have to show our passports. Tom has to show his passport too. He’s very proud! We don’t have to print our tickets. They’re on Mum’s phone. – Emma</i></p><p>Why don’t they have to print their tickets?</p>`,
          opts: [
            "They haven’t got tickets.",
            "The tickets are on Mum’s phone.",
            "Tom has got the tickets."
          ],
          correct: 1,
          hint: "Find the word print in the text.",
          fbOk: "Well done!",
          fbBad: "Read the last two sentences again.",
          fbText: "The tickets are <b>on Mum’s phone</b>. So they <b>don’t have to</b> print them."
        }
      ],
      outro: {
        text: "A rule? Say You have to show your passport. Not necessary? You don’t have to print the ticket.",
        learned: [
          "Talk about travel rules: You have to show your passport.",
          "Say what isn’t necessary: We don’t have to print the tickets.",
          "Ask: Do I have to…? – Yes, you do."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s5l6",
      title: "Buying a train ticket at the station",
      short: "Buying a ticket",
      icon: "voice",
      status: "verified",
      why: "Buy a train ticket. Ask again when you don’t understand.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Single or return?",
          body: `<p class="lead">Emma and her mum are at the ticket office in their town. They’re going to London on Saturday and coming back on Sunday.</p><p><b>Emma:</b> Hello. Two tickets to London, please.<br><b>Man:</b> Single or return?<br><b>Emma:</b> Um…</p><p>What does Emma need?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma and Mum are going to London and coming back. Which ticket do they need?</p>`,
          opts: [
            "a single",
            "a return",
            "a timetable"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "They’re going there and coming back: they need a <b>return</b> ticket."
        },
        {
          type: "info",
          title: "At the ticket office",
          body: `<ul><li>the <b>ticket office</b> – you buy tickets here</li><li>a <b>single</b> (ticket) – you go there. You don’t come back.</li><li>a <b>re<u>turn</u></b> (ticket) – you go there and come back.</li><li><b>change</b> trains – get off one train and get on another</li></ul><p>Two <b>returns</b> to London, please.<br>Do we <b>have to change</b> trains? – No, you don’t.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: [
            "Single or return?",
            "What time does the next train leave?",
            "Which platform does it leave from?",
            "Do we have to change trains?"
          ],
          right: [
            "Return, please.",
            "At quarter past ten.",
            "Platform 2.",
            "No, you don’t."
          ],
          hint: "What time – a time. Which platform – a number. Do we…? – a short answer.",
          fbOk: "Well done!",
          fbBad: "Look at the question words again.",
          fbText: "Single or return? – <b>Return, please.</b> What time? – <b>At quarter past ten.</b> Which platform? – <b>Platform 2.</b> Do we have to…? – <b>No, you don’t.</b>"
        },
        {
          type: "info",
          title: "Sorry, could you say that again?",
          body: `<p>Didn’t understand? Ask again politely:</p><ul><li><b>Sorry, could you say that again, please?</b></li><li><b>Sorry, what time</b> does it leave?</li><li><b>Sorry, which platform?</b></li></ul><p>Then check: Platform 2? – Yes, platform 2.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The station is very noisy. The man says the time. Emma doesn’t understand it. What does she say?</p>`,
          opts: [
            "Sorry, what time does the train leave?",
            "Single or return?",
            "Two returns to London, please."
          ],
          correct: 0,
          hint: "Emma doesn’t understand the time. She asks again.",
          fbOk: "Right.",
          fbBad: "Who asks “Single or return?” – Emma or the man?",
          fbText: "Emma asks again about the time: <b>Sorry, what time does the train leave?</b> The man asks <i>Single or return?</i>"
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma doesn’t understand the man. She wants him to say it one more time.</p>`,
          before: "Emma: Sorry, could you say that",
          after: ", please?",
          answer: "again",
          hint: "Could you say it one more time?",
          fbOk: "Exactly.",
          fbBad: "Look at the polite questions again.",
          fbText: "<b>Sorry, could you say that again, please?</b> It’s polite."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma wants to know: one train to London or two? What does she ask?</p>`,
          tiles: ["Do", "we", "have to", "change", "trains"],
          extra: ["Does"],
          keepCase: true,
          answer: "Do we have to change trains?",
          hint: "Start with Do. We – do or does?",
          fbOk: "Well done!",
          fbBad: "We: do or does?",
          fbText: "<b>Do we have to change trains?</b> With <i>we</i>: <b>do</b>."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          text: "Emma: Hello. Two {*returns|return} to London, please. We’re coming back on Sunday. Man: That’s £36, please. Emma: What time {*does|is} the next train leave? Man: At 10.15, from platform 2. Emma: Sorry, could you say that {*again|repeat}, please?",
          hint: "Two tickets: return or returns? Questions about a timetable: does.",
          fbOk: "Yes!",
          fbBad: "Look at the ticket office words again.",
          fbText: "Two <b>returns</b>. What time <b>does</b> the train leave? Could you say that <b>again</b>, please?"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><b>Emma:</b> What time does the next train leave?<br><b>Man:</b> At 10.15, from platform 2.<br><b>Emma:</b> Sorry, could you say that again, please?<br><b>Man:</b> Quarter past ten. Platform 2.<br><b>Emma:</b> Do we have to change trains?<br><b>Man:</b> No, you don’t. Have a good journey!</p><p>Which sentence is true?</p>`,
          opts: [
            "The train leaves from platform 10.",
            "Emma and her mum have to change trains.",
            "The train leaves at quarter past ten."
          ],
          correct: 2,
          hint: "Find the time and the platform.",
          fbOk: "Good eye!",
          fbBad: "Read what the man says again.",
          fbText: "The train leaves at <b>quarter past ten</b> (10.15) from platform 2. They <b>don’t have to</b> change trains."
        }
      ],
      outro: {
        text: "Now you can buy a ticket: Two returns, please. And you can ask again politely.",
        learned: [
          "Buy a train ticket: a single or a return.",
          "Ask about the train: What time does it leave? Which platform?",
          "Ask again politely: Sorry, could you say that again, please?"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s5l7",
      title: "Ready for the journey",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Andrii?",
          body: `<p class="lead">It’s October. Andrii and his family are visiting his grandparents in Chernihiv next weekend.</p><p>Help Andrii get ready: transport, the timetable, plans, packing, rules and tickets. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Write the missing word.",
          body: `<p>Andrii and Sofiia aren’t going to Chernihiv by train. Sofiia doesn’t know the word for their transport. Andrii explains.</p>`,
          before: "Andrii: A big, comfortable bus for long journeys is a",
          after: ".",
          answer: "coach",
          pre: "e6s5l1",
          hint: "A comfortable bus for long journeys is a …",
          fbOk: "Right.",
          fbBad: "Look at the words for transport again.",
          fbText: "A big, comfortable bus for long journeys is a <b>coach</b>. They go <b>by coach</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Complete the sentences with the Present Simple.",
          body: `<p><b>Kyiv – Chernihiv:</b> leaves 16.30, arrives 18.40</p>`,
          text: "The coach {*leaves|leave|leaving} at 16.30. What time {*does|do} it arrive? It {*arrives|arrive} at 18.40.",
          pre: "e6s5l2",
          hint: "The coach is it. Questions: does.",
          fbOk: "Yes!",
          fbBad: "The coach = it: leaves, arrives, does.",
          fbText: "The coach (it) <b>leaves</b>. What time <b>does</b> it arrive? It <b>arrives</b> at 18.40."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose all the correct answers.",
          body: `<p>Andrii’s dad has got the tickets for Saturday. What can Andrii say?</p>`,
          opts: [
            "We’re visiting Grandma on Saturday.",
            "We’re going to visit Grandma on Saturday.",
            "We visiting Grandma on Saturday.",
            "We are visit Grandma on Saturday."
          ],
          correct: [0, 1],
          pre: "e6s5l3",
          hint: "Two sentences are correct: -ing and going to.",
          fbOk: "Exactly.",
          fbBad: "Check: are + -ing, or are going to + verb.",
          fbText: "For a plan, <b>We’re visiting</b> and <b>We’re going to visit</b> are both correct. The other two sentences have mistakes."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Mum isn’t sure about the weather in Chernihiv.</p>`,
          text: "Take your umbrella. It {*might rain|might rains|might to rain} on Saturday. It {*might be|might is} cold, so pack a jumper.",
          pre: "e6s5l4",
          hint: "might + verb. No to, no -s.",
          fbOk: "Well done!",
          fbBad: "After might: rain, be.",
          fbText: "It <b>might rain</b>. It <b>might be</b> cold. After <i>might</i>: no <i>to</i>, no <i>-s</i>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>Sofiia: “Does Dad have to show the tickets on the coach?”</p>`,
          before: "Andrii: Yes, he",
          after: ".",
          answer: "does",
          pre: "e6s5l5",
          hint: "Does he have to…? – Yes, he …",
          fbOk: "Good eye!",
          fbBad: "Look at the short answers with have to.",
          fbText: "<b>Does</b> he have to…? – Yes, he <b>does</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Andrii is at the ticket office. The woman speaks very fast. Andrii doesn’t understand. What does he say?</p>`,
          opts: [
            "Sorry, could you say that again, please?",
            "Single or return?",
            "Have a good journey!"
          ],
          correct: 0,
          pre: "e6s5l6",
          hint: "He wants the woman to say it one more time.",
          fbOk: "Right.",
          fbBad: "Andrii doesn’t understand. What does he ask?",
          fbText: "<b>Sorry, could you say that again, please?</b> It’s a polite way to ask again."
        }
      ],
      outro: {
        text: "Well done! You can plan a trip, pack and buy a ticket.",
        learned: [
          "Talk about transport and a timetable: The coach leaves at 16.30.",
          "Talk about travel plans: We’re visiting Grandma on Saturday.",
          "Say what might happen and what you have to do.",
          "Buy a ticket and ask again politely."
        ]
      }
    }
  ]
});
