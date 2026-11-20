/* Слід · Англійська мова, 5 клас — «Travel: places to see» (e5s9)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), тема «Подорож» — улюблені напрямки подорожі (с. 20, розд. 4.2.1);
   граматика A2 (с. 21–22): Future with be going to (plans, intentions, questions); Past Simple affirmative, regular verbs (-ed);
   функція «аргументувати свій вибір» — через because (reports/verify/plan-eng-g5.md, Р1):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично від 4 кл.: e4s7 (I think I’ll…, листівка з Past Simple, транспорт), e4s4l5 (I’d like), e4s5l6 (because).
   be going to — уже складений план (є квитки, план записано); will — рішення в мить мовлення (CD Grammar «Be going to», «Will»).
   will ніде не стоїть хибним варіантом поруч із be going to: варіанти відрізняються формою (am / is / are, visit / visits).
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, наголос і факти — URL у tasks/…/write-eng-g5-e5s9.md, «Нотатки агента».
   Статус: verified (verifier-e5s9, reports/verify/e5s9.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s9 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s9",
  grade: 5,
  weeks: [28, 31],
  title: "Travel: places to see",
  why: "To talk about trips and places you want to visit. And to tell people about your plans and your last trip.",
  requires: ["e4s4l5", "e4s5l6", "e4s7l1", "e4s7l3", "e4s7l5", "e4s7l6", "e5s8l5"],
  meta: { author: "writer-e5s9", created: "2026-11-19", factcheck: "verifier-e5s9 (reports/verify/e5s9.md)", teacher: null },
  badges: [
    { id: "e5s9boss", name: "Young explorer", icon: "trophy", desc: "Finish the final lesson “Travel: places to see”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s9l1",
      title: "Where would you like to go?",
      short: "Places to go",
      icon: "map",
      status: "verified",
      why: "Talk about places you’d like to visit. Say why you’d like to go there.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where would they like to go?",
          body: `<p class="lead">The friends chat about the summer holidays.</p><p><b>Oksana:</b> I’d like to go to Odesa again because I love the sea.<br><b>Taras:</b> I’d like to go to the Carpathians because I love mountains.<br><b>Emma:</b> I’d like to visit Kyiv because my penfriend lives there.</p><p>Which word tells us why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “I’d like to go to Odesa.” What does she mean?</p>`,
          opts: [
            "She is in Odesa now.",
            "She wants to go to Odesa.",
            "She goes to Odesa every day."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I’d like to go</b> = I want to go. It’s polite. The next screens show more."
        },
        {
          type: "info",
          title: "Places in Ukraine",
          body: `<ul><li><b>Odesa</b> – a city on the Black Sea</li><li><b>the Carpathians</b> – mountains. Hoverla is there.</li><li><b>Lviv</b> – a city with an old town</li><li><b>Kamianets-Podilskyi</b> – a city with an old castle</li><li><b>Kyiv</b> – the capital. It’s on the Dnipro.</li></ul>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "I’d like to … because …",
          body: `<p>Where <b>would you like to</b> go?</p><ul><li>I<b>’d like to</b> go to Odesa.</li><li>I<b>’d like to</b> visit Lviv.</li><li>She<b>’d like to</b> see the Dnipro.</li></ul><p>I’d like = I want. Then: <b>to</b> + verb.</p><p>Not: <s>I’d like go</s>.</p><p>Why? Say <b>because</b>: I’d like to go to Odesa <b>because</b> I love the sea.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "I’d like {*to go|go|going} to Lviv {*because|but} I love old towns. Mariia would like {*to see|see|seeing} the Black Sea.",
          hint: "After would like: to + verb.",
          fbOk: "Yes!",
          fbBad: "Look at the rule again.",
          fbText: "I’d like <b>to go</b>, she’d like <b>to see</b>. Why? <b>Because</b> I love old towns."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii: “Where would you like to go, Sofiia?”</p><p>What does Sofiia say?</p>`,
          opts: [
            "I’d like go to Kamianets-Podilskyi.",
            "I’d like going to Kamianets-Podilskyi.",
            "I’d like to go to Kamianets-Podilskyi."
          ],
          correct: 2,
          hint: "I’d like + to + verb.",
          fbOk: "Right.",
          fbBad: "Where is the word to?",
          fbText: "We say <b>I’d like to go</b>. Not <i>like go</i>, not <i>like going</i>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          body: `<p>Why would they like to go there?</p>`,
          left: [
            "I’d like to go to Odesa",
            "I’d like to go to the Carpathians",
            "I’d like to visit Kamianets-Podilskyi",
            "I’d like to visit London"
          ],
          right: [
            "because I love the sea.",
            "because I love mountains.",
            "because I’d like to see an old castle.",
            "because I’d like to speak English."
          ],
          hint: "Look at the places in Ukraine again. Which city has an old castle?",
          fbOk: "Well done!",
          fbBad: "Which place has the sea? Which has mountains?",
          fbText: "Odesa is on the Black Sea. The Carpathians are mountains. Kamianets-Podilskyi has an old castle. People speak English in London."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma: “Why would you like to go to Odesa?”</p>`,
          before: "Oksana:",
          after: "I love the sea.",
          answer: "because",
          hint: "Which word tells us why?",
          fbOk: "Exactly.",
          fbBad: "Emma asks why. How does the answer start?",
          fbText: "Why? – <b>Because</b> I love the sea."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! In the summer I’d like to visit Lviv because I love old towns. My cousin Maksym would like to go to Odesa because he loves the sea. – Andrii</i></p><p>Why would Maksym like to go to Odesa?</p>`,
          opts: [
            "because he loves old towns",
            "because he loves the sea",
            "because he loves mountains"
          ],
          correct: 1,
          hint: "Find Maksym in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Maksym again.",
          fbText: "Maksym loves the sea. So he’d like to go to Odesa. Andrii loves old towns."
        }
      ],
      outro: {
        text: "Say I’d like to + verb. Say why with because.",
        learned: [
          "Name places to visit in Ukraine: Odesa, Lviv, the Carpathians.",
          "Say where you’d like to go: I’d like to visit Lviv.",
          "Say why: … because I love the sea."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s9l2",
      title: "At the seaside or in the mountains?",
      short: "Seaside or mountains",
      icon: "leaf",
      status: "verified",
      why: "Choose a place for a holiday. Say what you can do there.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "The sea or the mountains?",
          body: `<p class="lead">Mariia’s family chooses a summer holiday.</p><p><b>Dad:</b> Let’s go to the seaside! We can swim in the sea and play on the beach.<br><b>Mum:</b> I love the mountains. We can walk in the forest and climb a mountain.<br><b>Mariia:</b> I can’t choose!</p><p>What can you do at the seaside? And in the mountains?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The <b>seaside</b> is …</p>`,
          opts: [
            "a place next to the sea.",
            "a place in the mountains.",
            "a big city."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The <b>seaside</b> is next to the sea. People go there on holiday."
        },
        {
          type: "info",
          title: "Where can you go?",
          body: `<p>A <u>hol</u>iday …</p><ul><li><b>at the <u>sea</u>side</b>: swim in the sea, play <b>on</b> the beach</li><li><b>in the mountains</b>: walk in the forest, climb a mountain</li><li><b>in the <u>coun</u>tryside</b>: ride a bike, see animals on a farm</li><li><b>in a big city</b>: visit a <b>mu<u>se</u>um</b>, take photos</li></ul><p>Not: <s>on the seaside</s>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Where can you do it?</p>`,
          bins: ["at the seaside", "in the mountains"],
          items: [
            ["swim in the sea", 0],
            ["climb a mountain", 1],
            ["play on the beach", 0],
            ["see Hoverla", 1]
          ],
          hint: "Hoverla is in the Carpathians. Is it near the sea?",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "At the seaside: <b>swim in the sea</b>, <b>play on the beach</b>. In the mountains: <b>climb a mountain</b>, <b>see Hoverla</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna writes about her aunt.</p>`,
          text: "My aunt lives in Odesa, {*at|on} the seaside. I like playing {*on|in} the beach. We swim {*in|on} the sea. In winter we go {*to|in} the mountains.",
          hint: "At the seaside, on the beach, in the sea.",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "<b>At</b> the seaside, <b>on</b> the beach, <b>in</b> the sea. We go <b>to</b> the mountains."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Taras loves walking and climbing. He doesn’t like swimming.</p><p>What does Taras say?</p>`,
          opts: [
            "I’d like to go to the seaside because I love swimming.",
            "I’d like to go to the mountains because I love swimming.",
            "I’d like to go to the mountains because I love climbing."
          ],
          correct: 2,
          hint: "What does Taras love?",
          fbOk: "Right.",
          fbBad: "Taras doesn’t like swimming.",
          fbText: "Taras loves climbing: <b>the mountains, because I love climbing</b>. He doesn’t like swimming."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sea|side", "+coun|try|side", "mu|+se|um", "+hol|i|day"],
          fbOk: "Well done!",
          fbBad: "Look at the strong parts in the list.",
          fbText: "<u>sea</u>side, <u>coun</u>tryside, <u>hol</u>iday: the strong part is at the start. mu<u>se</u>um: it’s the middle part."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s message is wrong.</p>`,
          text: "My aunt lives [on] the seaside. Every day we swim in the sea.",
          hint: "Look at the rule: … the seaside.",
          fbOk: "Good eye!",
          fbBad: "Check the word before the seaside.",
          fbText: "We say <b>at</b> the seaside, not <i>on</i> the seaside. <i>In the sea</i> is correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Dad: “We can swim in the sea and play on the beach.”</p>`,
          before: "Let’s go to the",
          after: "!",
          answer: ["seaside", "beach", "sea", "coast", "seashore"],
          hint: "It’s a place next to the sea.",
          fbOk: "Yes!",
          fbBad: "Where can you swim in the sea?",
          fbText: "Let’s go to the <b>seaside</b>! You can swim there and play on the beach."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I live in a village. I love the countryside. I ride my bike and see cows on the farm. But my friend Andrii loves big cities. He’d like to visit museums in London. – Oksana</i></p><p>Where would Andrii like to go?</p>`,
          opts: [
            "to a big city",
            "to the countryside",
            "to the seaside"
          ],
          correct: 0,
          hint: "Find Andrii in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Andrii again.",
          fbText: "Andrii loves big cities. He’d like to visit museums in <b>London</b>. Oksana loves the countryside."
        }
      ],
      outro: {
        text: "At the seaside, in the mountains, in the countryside: say where you can go and what you can do.",
        learned: [
          "Name places for a holiday: the seaside, the mountains, the countryside.",
          "Say what you can do there.",
          "Choose a place and say why."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s9l3",
      title: "I’m going to visit my grandma: plans",
      short: "Plans",
      icon: "target",
      status: "verified",
      why: "You’ve got a plan for the holidays. Tell your friends about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What is Andrii’s plan?",
          body: `<p class="lead">Andrii writes to Emma.</p><p><i>Hi Emma! Next week I’m going to visit my grandma in Chernihiv. We’ve got the train tickets! I’m going to help Grandma in the garden. Dad isn’t going to come. He’s working. – Andrii</i></p><p><i>I’m going to visit</i>: is it about now or about the future?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“I’m going to visit my grandma.” When is the visit?</p>`,
          opts: [
            "now",
            "in the future",
            "last week"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s about the future: <b>next week</b>. Andrii has got a plan and the tickets."
        },
        {
          type: "info",
          title: "Plans: going to",
          body: `<p>You’ve got a plan. Say <b>going to</b>.</p><ul><li>I <b>am</b> (I’m) going to visit Grandma.</li><li>He, she <b>is</b> going to visit Grandma.</li><li>We, you, they <b>are</b> going to visit Grandma.</li><li>not: I’m <b>not</b> going to, he <b>isn’t</b> going to, they <b>aren’t</b> going to</li></ul><p>going to + verb: going to <b>visit</b>. Not: <s>going to visits</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna writes about her plan.</p>`,
          text: "I {*am|is|are} going to visit my aunt. My sister {*is|am|are} going to stay at home. We {*are|is} going to {*take|takes|taking} the train.",
          hint: "I – am, she – is, we – are.",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "I <b>am</b>, my sister (she) <b>is</b>, we <b>are</b> going to. After going to: <b>take</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii’s plan for Saturday: <i>help Grandma in the garden</i>.</p>`,
          before: "On Saturday Andrii",
          after: "going to help his grandma.",
          answer: "is",
          hint: "Andrii = he. He … going to.",
          fbOk: "Well done!",
          fbBad: "He: am, is or are?",
          fbText: "Andrii (he) <b>is</b> going to help his grandma."
        },
        {
          type: "info",
          title: "A plan or a decision now?",
          body: `<ul><li>A plan: We’ve got the tickets. We<b>’re going to</b> visit Lviv.</li><li>You decide now: It’s hot! I<b>’ll</b> open the window.</li></ul><p>A plan → <b>going to</b>.<br>You decide now → <b>I’ll</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii is at Grandma’s house. Grandma: “Oh, my bag is very heavy!” Andrii decides now. What does he say?</p>`,
          opts: [
            "I’ll help you!",
            "I help you every day.",
            "I’m going to help you next month."
          ],
          correct: 0,
          hint: "He decides now. Look at the rule.",
          fbOk: "Right.",
          fbBad: "Does Andrii decide now?",
          fbText: "Andrii decides now: <b>I’ll help you!</b> <i>Next month</i> is not now."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana has got the tickets. What is her family’s plan?</p>`,
          tiles: ["we’re", "going to", "visit", "Odesa", "in July"],
          extra: ["visits"],
          answer: ["We’re going to visit Odesa in July.", "In July we’re going to visit Odesa."],
          hint: "Start with we’re.",
          fbOk: "Exactly.",
          fbBad: "After going to: visit or visits?",
          fbText: "<b>We’re going to visit Odesa in July.</b> After <i>going to</i>, there is no <i>-s</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "We’ve got the tickets! Next week my mum and I [is] going to visit Kyiv.",
          hint: "My mum and I = we.",
          fbOk: "Good eye!",
          fbBad: "Who is going? One person or two?",
          fbText: "My mum and I = we. We <b>are</b> going to visit Kyiv."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Emma about her summer plan.</p>`,
          text: "Hi Emma! We’ve got the tickets! In August we {*are|is|am} going to visit the Carpathians. My dad {*is|are} going to take his bike. I’m {*not|no} going to take my tablet. We’re going to {*walk|walks|walking} in the mountains.",
          hint: "We – are, he – is. After going to: a verb without -s.",
          fbOk: "Well done!",
          fbBad: "Look at the going to list again.",
          fbText: "We <b>are</b> going to. My dad (he) <b>is</b> going to. I’m <b>not</b> going to. Going to <b>walk</b>."
        }
      ],
      outro: {
        text: "Got a plan? Say I’m going to + verb. You decide now? Say I’ll.",
        learned: [
          "Talk about your plans: I’m going to visit my grandma.",
          "Use am, is and are with going to.",
          "Say what you aren’t going to do."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s9l4",
      title: "Are you going to travel this summer? Questions",
      short: "Questions",
      icon: "voice",
      status: "verified",
      why: "Ask your friends about their plans. Answer their questions.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What does Emma ask?",
          body: `<p class="lead">Emma and Andrii chat.</p><p><b>Emma:</b> Are you going to travel this summer?<br><b>Andrii:</b> Yes, I am. I’m going to visit Taras in Lviv.<br><b>Emma:</b> How are you going to get there?<br><b>Andrii:</b> By train. We’ve got the tickets.</p><p>How do we ask about plans?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>You ask Taras about his plan. What do you say?</p>`,
          opts: [
            "You are going to swim?",
            "Are you going to swim?",
            "Do you going to swim?"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In a question, <b>are</b> comes first: <b>Are you going to swim?</b>"
        },
        {
          type: "info",
          title: "Are you going to …?",
          body: `<ul><li><b>Are</b> you going to travel? – Yes, I <b>am</b>. / No, I<b>’m not</b>.</li><li><b>Is</b> she going to come? – Yes, she <b>is</b>. / No, she <b>isn’t</b>.</li><li><b>Are</b> they going to stay? – Yes, they <b>are</b>. / No, they <b>aren’t</b>.</li></ul><p>Put <b>am, is, are</b> first.</p><p><b>Where</b>, <b>when</b>, <b>how</b>: <b>Where</b> are you going to stay?</p><p>Not: <s>Yes, I’m.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Emma: {*Are|Is|Do} you going to visit Lviv? Andrii: Yes, I {*am|do|are}. Emma: {*Is|Are} Taras going to meet you? Andrii: Yes, he {*is|does}.",
          hint: "Questions with going to: am, is, are. Not do.",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "<b>Are</b> you going to …? – Yes, I <b>am</b>. <b>Is</b> Taras going to …? – Yes, he <b>is</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Taras: “Is your dad going to come too?” Andrii’s dad has got a ticket too.</p><p>What does Andrii say?</p>`,
          opts: [
            "Yes, he’s.",
            "Yes, he is.",
            "Yes, he does."
          ],
          correct: 1,
          hint: "Is your dad …? – Yes, he …",
          fbOk: "Right.",
          fbBad: "Look at the short answers again.",
          fbText: "<b>Is</b> he …? – <b>Yes, he is.</b> At the end, we don’t say <i>he’s</i>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: [
            "Where are you going to stay?",
            "When are you going to go?",
            "How are you going to get there?",
            "Who are you going to go with?"
          ],
          right: [
            "At Taras’s flat.",
            "On Friday.",
            "By train.",
            "With my dad."
          ],
          hint: "Where – a place. When – a day. How – transport. Who – a person.",
          fbOk: "Well done!",
          fbBad: "Look at the question words again.",
          fbText: "Where? – <b>At Taras’s flat.</b> When? – <b>On Friday.</b> How? – <b>By train.</b> Who with? – <b>With my dad.</b>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ask Oksana about her summer.</p>`,
          tiles: ["Are", "you", "going to", "travel", "this summer"],
          extra: ["Do"],
          keepCase: true,
          answer: "Are you going to travel this summer?",
          hint: "Start with Are.",
          fbOk: "Exactly.",
          fbBad: "Start the question with am, is or are.",
          fbText: "<b>Are you going to travel this summer?</b> Not <i>Do you going</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Taras: “Are you going to bring your bike?”</p><p>Andrii’s plan: <i>bring my bike</i>.</p>`,
          before: "Andrii: Yes, I",
          after: ".",
          answer: "am",
          hint: "Are you …? – Yes, I …",
          fbOk: "Well done!",
          fbBad: "Look at the short answers again.",
          fbText: "Are you going to …? – Yes, I <b>am</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! Great news! My mum and I are going to meet you at the station. Then we’re going to walk around the old town. Are you going to bring your camera? – Taras</i></p><p>Who is going to meet Andrii?</p>`,
          opts: [
            "Taras and his dad",
            "Emma and Tom",
            "Taras and his mum"
          ],
          correct: 2,
          hint: "Find “meet you” in the text.",
          fbOk: "Good eye!",
          fbBad: "Read the first part again.",
          fbText: "“<b>My mum and I</b> are going to meet you”: Taras and his mum."
        }
      ],
      outro: {
        text: "Put am, is or are first: Are you going to travel? Answer: Yes, I am. No, I’m not.",
        learned: [
          "Ask about plans: Are you going to travel this summer?",
          "Answer: Yes, I am. No, I’m not.",
          "Ask where, when and how."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s9l5",
      title: "We visited Lviv: the Past Simple",
      short: "The Past Simple",
      icon: "book",
      status: "verified",
      why: "Tell your friends about your last trip.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What did Mariia do?",
          body: `<p class="lead">Mariia writes in her diary.</p><p><i>Last week we visited Lviv. We stayed in a small hotel. We walked around the old town. We looked at old churches. In the evening we listened to music in the street. I loved Lviv!</i></p><p>Visited, stayed, walked: what is the same?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Today Mariia walks in the park. Yesterday she …</p>`,
          opts: [
            "walks in the park.",
            "walking in the park.",
            "walked in the park."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Yesterday she <b>walked</b>. For the past, we add <b>-ed</b>."
        },
        {
          type: "info",
          title: "The Past Simple: -ed",
          body: `<p>Yesterday, last week, last summer → <b>-ed</b>.</p><ul><li>visit → visit<b>ed</b>, walk → walk<b>ed</b></li><li>stay → stay<b>ed</b>, play → play<b>ed</b></li><li>love → love<b>d</b>, like → like<b>d</b> (<i>e</i> at the end: add <b>d</b>)</li></ul><p>I, he, she, we, they: the same. She visit<b>ed</b>. They visit<b>ed</b>.</p><p>This is the <b>Past Simple</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna writes about her trip.</p>`,
          text: "Last summer we {*visited|visit|visitted} Lviv. We {*stayed|staied} in a small hotel. I {*liked|likeed} the big park.",
          hint: "Last summer: add -ed. Like ends in e: add d.",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "visit → <b>visited</b>, stay → <b>stayed</b>, like → <b>liked</b> (only <i>d</i>)."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>play → ?</p>`,
          before: "Yesterday we",
          after: "football in the park.",
          answer: "played",
          hint: "Yesterday: play + -ed.",
          fbOk: "Well done!",
          fbBad: "Look at the list: play → …",
          fbText: "play → <b>played</b>: Yesterday we <b>played</b> football."
        },
        {
          type: "info",
          title: "Spelling and sound",
          body: `<ul><li>stud<b>y</b> → stud<b>ied</b>, tr<b>y</b> → tr<b>ied</b></li><li>but pl<b>ay</b> → play<b>ed</b>, st<b>ay</b> → stay<b>ed</b></li><li>sto<b>p</b> → sto<b>pped</b>, pla<b>n</b> → pla<b>nned</b></li><li>travel → trave<b>lled</b> (in British English)</li></ul><p>After a <i>t</i> or <i>d</i> sound, <i>-ed</i> is an extra part: visit → vis-it-<b>ed</b>, want → want-<b>ed</b>.</p><p>Walked, played: no extra part.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "phon",
          title: "Choose the correct answer.",
          body: `<p>Which word has an extra part with <i>-ed</i>, like <i>vis-it-ed</i>?</p>`,
          opts: [
            "played",
            "walked",
            "wanted"
          ],
          correct: 2,
          hint: "Which verb ends in a t sound?",
          fbOk: "Right.",
          fbBad: "Look at the sound rule again.",
          fbText: "Want ends in <i>t</i>: <b>want-ed</b> has an extra part. Played and walked don’t."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>stop → ?</p>`,
          before: "Last week our bus",
          after: "near the old town.",
          answer: "stopped",
          hint: "Look at the list: stop → …",
          fbOk: "Yes!",
          fbBad: "Check the spelling: two letters p.",
          fbText: "stop → <b>stopped</b>: we write <i>p</i> two times."
        },
        {
          type: "pick",
          sk: "write",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s message is wrong.</p>`,
          text: "Last week we travelled to Odesa. We [stoped] near the sea and visited a museum.",
          hint: "Check the spelling of each verb.",
          fbOk: "Good eye!",
          fbBad: "Which verb needs two letters p?",
          fbText: "stop → <b>stopped</b>. <i>Travelled</i> and <i>visited</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes in her diary.</p>`,
          text: "Last Saturday we {*travelled|travel} to Kamianets-Podilskyi by bus. We {*visited|visit} the old castle. Then we {*walked|walk} in the park and {*played|plaied} games. I {*loved|loveed} it!",
          hint: "Last Saturday: use the past.",
          fbOk: "Well done!",
          fbBad: "Look at the spelling list again.",
          fbText: "Last Saturday: <b>travelled</b> (two letters <i>l</i>), <b>visited</b>, <b>walked</b>, <b>played</b>, <b>loved</b>."
        }
      ],
      outro: {
        text: "For the past, add -ed: visited, stayed, loved. Remember: studied, stopped, travelled.",
        learned: [
          "Say what you did: We visited Lviv.",
          "Spell the Past Simple: studied, stopped, travelled.",
          "Find the -ed with an extra part: visited, wanted."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s9l6",
      title: "My travel diary",
      short: "Travel diary",
      icon: "scroll",
      status: "verified",
      why: "Read a travel diary. Write about your trip and your plans.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What did Taras do?",
          body: `<p class="lead">Taras is on holiday in the Carpathians with his dad.</p><p>Every evening he writes in his travel diary. What did they do? What are they going to do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "A travel diary",
          body: `<ul><li>the day: <b>Day 1</b></li><li>where you are: We’re in the Carpathians.</li><li>what you did: We <b>walked</b> in the forest.</li><li>how it was: It <b>was</b> great!</li><li>your plan: Tomorrow we’re <b>going to</b> climb Hoverla.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Taras’s travel diary, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>Day 1. We travelled to the Carpathians by train. Dad and I stayed in a small wooden house in the forest. In the evening we cooked dinner outside. The air was cold, but the stars were beautiful!</i></p><p>Taras and his dad stayed …</p>`,
          opts: [
            "in a big hotel.",
            "in a small wooden house.",
            "in a flat in the city."
          ],
          correct: 1,
          hint: "Find “stayed” in the text.",
          fbOk: "Right.",
          fbBad: "Read the second sentence again.",
          fbText: "They stayed <b>in a small wooden house</b> in the forest."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Taras’s travel diary, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>Day 2. We walked in the forest all day. We stopped near a river and played in the water. I was tired, but happy. Tomorrow we’re going to climb Hoverla! It’s the highest mountain in Ukraine.</i></p><p>What is true about Day 2?</p>`,
          opts: [
            "They walked in the forest.",
            "They climbed Hoverla.",
            "They stopped near a river.",
            "Taras was tired."
          ],
          correct: [0, 2, 3],
          hint: "Hoverla: did they climb it, or is it a plan?",
          fbOk: "Good eye!",
          fbBad: "Read the text again. What is a plan for tomorrow?",
          fbText: "On Day 2 they <b>walked</b> and <b>stopped</b> near a river. Taras <b>was tired</b>. Hoverla is a plan: <i>Tomorrow we’re going to climb</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Taras’s travel diary, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Day 3. We climbed Hoverla! We started early in the morning. It was hard, but at the top we looked at the mountains all around us. I loved it! Next summer we’re going to visit the Black Sea.</i></p><p>What are they going to do next summer?</p>`,
          opts: [
            "climb Hoverla",
            "stay in the forest",
            "visit the Black Sea"
          ],
          correct: 2,
          hint: "Find “next summer” in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence again.",
          fbText: "Next summer they’re <b>going to visit the Black Sea</b>. They climbed Hoverla on Day 3."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Daryna writes in her travel diary.</p>`,
          items: [
            "Day 1. We’re at the seaside in Odesa.",
            "We travelled here by train.",
            "Then we walked to the beach.",
            "The sea was warm!",
            "Tomorrow we’re going to visit a museum."
          ],
          shuffle: [3, 0, 4, 1, 2],
          hint: "Start with the day. End with the plan.",
          fbOk: "Well done!",
          fbBad: "Look at the diary plan again.",
          fbText: "First the day and the place. Then what they did: the train, the beach. <i>The sea was warm</i> is about the beach. At the end: the plan for <b>tomorrow</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>climb → ?</p>`,
          before: "Day 3. This morning we",
          after: "Hoverla! It was hard.",
          answer: "climbed",
          hint: "It’s in the past: climb + -ed.",
          fbOk: "Yes!",
          fbBad: "They did it this morning. Use the Past Simple.",
          fbText: "climb → <b>climbed</b>: This morning we <b>climbed</b> Hoverla!"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Write the plan in your diary.</p>`,
          tiles: ["tomorrow", "we’re", "going to", "climb", "Hoverla"],
          extra: ["climbed"],
          answer: ["Tomorrow we’re going to climb Hoverla.", "We’re going to climb Hoverla tomorrow."],
          hint: "It’s a plan: we’re going to + verb.",
          fbOk: "Exactly.",
          fbBad: "Tomorrow is a plan. Climb or climbed?",
          fbText: "<b>Tomorrow we’re going to climb Hoverla.</b> It’s a plan, so not <i>climbed</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii’s cousin Maksym writes in his travel diary.</p>`,
          text: "Day 2. We’re in Kyiv. Yesterday we {*visited|visit|are going to visit} a big museum. It {*was|were} very interesting. This morning we {*walked|walk} along the Dnipro. Tomorrow we {*are going to|are going|going to} visit Chernihiv.",
          hint: "Yesterday and this morning: the past. Tomorrow: a plan.",
          fbOk: "Well done!",
          fbBad: "Past or plan? Look at the diary plan.",
          fbText: "Yesterday: <b>visited</b>. It <b>was</b>. This morning: <b>walked</b>. Tomorrow: we <b>are going to</b> visit."
        }
      ],
      outro: {
        text: "A travel diary tells us what you did and what you’re going to do.",
        learned: [
          "Read a travel diary.",
          "Write about a trip: We travelled, we stayed, we climbed.",
          "Write a plan: Tomorrow we’re going to …"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s9l7",
      title: "Emma’s trip to Ukraine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s9boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Emma with her trip?",
          body: `<p class="lead">Emma and her family are going to visit Ukraine.</p><p>Read her messages and help her. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "I’d like {*to visit|visit|visiting} Kyiv {*because|but} you live there!",
          pre: "e5s9l1",
          hint: "I’d like + to + verb. Why? …",
          fbOk: "Yes!",
          fbBad: "Look at the I’d like rule again.",
          fbText: "I’d like <b>to visit</b> Kyiv <b>because</b> you live there."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Emma loves swimming and playing on the beach. Which place is the best for her?</p>`,
          opts: [
            "the Carpathians, in the mountains",
            "Odesa, at the seaside",
            "Kamianets-Podilskyi, with its old castle"
          ],
          correct: 1,
          pre: "e5s9l2",
          hint: "Where can you swim in the sea?",
          fbOk: "Right.",
          fbBad: "Where is the beach?",
          fbText: "Odesa is on the Black Sea. Emma can swim <b>at the seaside</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Emma’s plan: <i>swim in the sea every day</i>.</p>`,
          before: "Emma",
          after: "going to swim in the sea every day.",
          answer: "is",
          pre: "e5s9l3",
          hint: "Emma = she. She … going to.",
          fbOk: "Well done!",
          fbBad: "She: am, is or are?",
          fbText: "Emma (she) <b>is</b> going to swim in the sea."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Andrii: “Are you going to visit Lviv too?” Emma has got a train ticket to Lviv.</p><p>What does Emma say?</p>`,
          opts: [
            "Yes, I am.",
            "Yes, I’m.",
            "Yes, I do."
          ],
          correct: 0,
          pre: "e5s9l4",
          hint: "Are you …? – Yes, I …",
          fbOk: "Exactly.",
          fbBad: "Look at the short answers again.",
          fbText: "<b>Are</b> you going to …? – <b>Yes, I am.</b> Not <i>Yes, I’m</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her day in Odesa.</p>`,
          text: "Yesterday we {*visited|visit} a museum in Odesa. We {*walked|walk} along the beach. Tom {*stopped|stoped} to look at the boats.",
          pre: "e5s9l5",
          hint: "Yesterday: use the past. Check the spelling.",
          fbOk: "Good eye!",
          fbBad: "Look at the -ed rules again.",
          fbText: "Yesterday: <b>visited</b>, <b>walked</b>. Stop → <b>stopped</b>: two letters <i>p</i>."
        },
        {
          type: "word",
          sk: "write",
          eyebrow: "Task 6",
          title: "Write the missing word.",
          body: `<p>study → ?</p>`,
          before: "Yesterday I",
          after: "new Ukrainian words.",
          answer: "studied",
          pre: "e5s9l5",
          hint: "Study ends in y. Look at the spelling list.",
          fbOk: "Well done!",
          fbBad: "Check the spelling: y → …",
          fbText: "study → <b>studied</b>: <i>y</i> becomes <i>ied</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>Day 3. Yesterday we walked around Odesa. Today we played on the beach and swam in the sea. Tomorrow we’re going to travel to Kyiv. – Emma</i></p><p>What are they going to do tomorrow?</p>`,
          opts: [
            "walk around Odesa",
            "play on the beach",
            "travel to Kyiv"
          ],
          correct: 2,
          pre: "e5s9l6",
          hint: "Find “tomorrow” in the diary.",
          fbOk: "Right.",
          fbBad: "Read the last sentence again.",
          fbText: "Tomorrow they’re <b>going to travel to Kyiv</b>. They walked around Odesa yesterday."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about places, plans and trips.",
        learned: [
          "Say where you’d like to go and why.",
          "Talk about your plans with going to.",
          "Tell people about a trip with the Past Simple.",
          "Read a travel diary."
        ]
      }
    }
  ]
});
