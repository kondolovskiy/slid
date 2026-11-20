/* Слід · Англійська мова, 5 клас — «Festivals and traditions» (e5s8)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), 5–6 кл.: тема «Свята і традиції» — календар свят в Україні та країнах
   виучуваної мови; традиції святкування (с. 20); граматика A2 — dates, ordinal numbers; was/were; Exclamations: What a … (с. 21–22):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e4s8 (Happy New Year!, Christmas 25 December, on/in з датами) і e4s7 (was/were) — reports/verify/plan-eng-g5.md §6.
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, наголос і дати свят — за Cambridge Dictionary, OALD, en/uk.wikipedia (URL — tasks/…/write-eng-g5-e5s8.md, «Нотатки агента»).
   Статус: verified (verifier-e5s8, reports/verify/e5s8.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s8",
  grade: 5,
  weeks: [25, 27],
  title: "Festivals and traditions",
  why: "To talk about festivals in Ukraine and the UK. And to say dates: “the first of January”.",
  requires: ["e4s8l2", "e4s8l3", "e4s7l5"],
  meta: { author: "writer-e5s8", created: "2026-11-19", factcheck: "verifier-e5s8 (reports/verify/e5s8.md)", teacher: null },
  badges: [
    { id: "e5s8boss", name: "Festival calendar", icon: "trophy", desc: "Finish the final lesson “Festivals and traditions”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s8l1",
      title: "First, second, third: ordinal numbers",
      short: "Ordinal numbers",
      icon: "target",
      status: "verified",
      why: "Who is first in the race? Which month is the fifth? Learn the words for it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which month is it?",
          body: `<p class="lead">Emma sends Oksana a puzzle.</p><p><i>Hi Oksana! My birthday is in the fifth month of the year. Can you guess the month?<br>Love, Emma</i></p><p>One, two, three… and first, second, third. What is the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>January, February, March, April, May… Which month is <b>the fifth</b> month?</p>`,
          opts: [
            "March",
            "May",
            "June"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "January is the <b>first</b> month. May is the <b>fifth</b> month. So Emma’s birthday is in May."
        },
        {
          type: "info",
          title: "First, second, third",
          body: `<p>We count: one, two, three.<br>We put in order: <b>first, second, third</b>.</p><ul><li>1 → 1st → <b>first</b></li><li>2 → 2nd → <b>second</b></li><li>3 → 3rd → <b>third</b></li><li>4 → 4th → <b>fourth</b></li><li>5 → 5th → <b>fifth</b></li><li>6 → 6th → <b>sixth</b></li><li>7 → 7th → <b>seventh</b></li><li>8 → 8th → <b>eighth</b></li><li>9 → 9th → <b>ninth</b></li><li>10 → 10th → <b>tenth</b></li></ul><p>Most numbers add <b>-th</b>. These are <b>ordinal numbers</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>It’s sports day at Emma’s school. Here are the results of the race.</p>`,
          text: "Emma is {*second|two}. Her friend Lucy is {*first|one}. Ben is {*third|three}. Amy is {*fifth|five}.",
          hint: "Is it a number for counting or for order?",
          fbOk: "Yes!",
          fbBad: "We put people in order: first, second…",
          fbText: "In a race we say who is <b>first</b>, <b>second</b>, <b>third</b> or <b>fifth</b>. One, two, three are for counting."
        },
        {
          type: "info",
          title: "Twelfth, twentieth, twenty-first",
          body: `<ul><li>11 → 11th → <b>eleventh</b></li><li>12 → 12th → <b>twelfth</b> (not <s>twelveth</s>)</li><li>13 → 13th → thir<u>teenth</u></li><li>20 → 20th → <u>twen</u>tieth</li><li>21 → 21st → twenty-<b>first</b></li><li>22 → 22nd → twenty-<b>second</b></li><li>23 → 23rd → twenty-<b>third</b></li><li>30 → 30th → <u>thir</u>tieth</li><li>31 → 31st → thirty-<b>first</b></li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Write <b>12th</b> as a word.</p>`,
          before: "December is the",
          after: "month of the year.",
          answer: "twelfth",
          hint: "Look at the list: 12 → 12th → …",
          fbOk: "Well done!",
          fbBad: "Check the list: 12th.",
          fbText: "12th is <b>twelfth</b>: twelve → twel<b>f</b>th. December is the twelfth month."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["thir|+teenth", "+thir|ti|eth", "+twen|ti|eth"],
          fbOk: "Exactly.",
          fbBad: "Look at the underlined parts again.",
          fbText: "thir<u>teenth</u>: stress at the end. <u>thir</u>tieth, <u>twen</u>tieth: stress at the start."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Today is my sister’s [nine] birthday. She is the fourth child in our family.",
          hint: "Is it counting or order?",
          fbOk: "Good eye!",
          fbBad: "Check each number word.",
          fbText: "We say <b>my sister’s ninth birthday</b>, not <i>nine birthday</i>. <b>The fourth child</b> is correct."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Emma.</p>`,
          text: "Hi Emma! May is the {*fifth|five} month. So your birthday is in May! My grandma’s birthday is in the {*eleventh|eleven} month, November. It’s on the {*twenty-first|twenty-one} of November.",
          hint: "Look at the lists: 5th, 11th, 21st.",
          fbOk: "Well done!",
          fbBad: "Each gap needs an ordinal number.",
          fbText: "May is the <b>fifth</b> month. November is the <b>eleventh</b> month. 21st is <b>twenty-first</b>."
        }
      ],
      outro: {
        text: "We count with one, two, three. We put things in order with first, second, third.",
        learned: [
          "Say ordinal numbers: first, second, third.",
          "Write 1st, 2nd, 3rd, 12th and 21st as words.",
          "Say which month is the first or the fifth."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s8l2",
      title: "When’s your birthday? Months and dates",
      short: "Dates",
      icon: "cake",
      status: "verified",
      why: "Ask your friends about their birthdays. Read and say dates the British way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How do you say 3 March?",
          body: `<p class="lead">Taras’s class in Lviv makes a birthday calendar.</p><p><b>Ostap:</b> When’s your birthday, Yaryna?<br><b>Yaryna:</b> It’s on 3 March.<br><b>Ostap:</b> My birthday is on 22 July.</p><p>We write <b>3 March</b>. How do we say it?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Yaryna’s birthday is on <b>3 March</b>. How does she say it?</p>`,
          opts: [
            "the three of March",
            "the third of March",
            "the March of three"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Great guess!",
          fbText: "We say <b>the third of March</b>. The next screen shows how."
        },
        {
          type: "info",
          title: "Dates",
          body: `<ul><li>We write: <b>3 March</b> → we say: <b>the third of March</b></li><li>We write: <b>22 July</b> → we say: <b>the twenty-second of July</b></li></ul><p><b>When’s</b> your birthday?<br>– It’s <b>on</b> 3 March.</p><ul><li>a date → <b>on</b> 3 March</li><li>a month → <b>in</b> March</li></ul><p><u>Jan</u>uary, Sep<u>tem</u>ber, Oc<u>to</u>ber, No<u>vem</u>ber: the <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Solomiia’s birthday is on <b>1 June</b>. How does she say it?</p>`,
          opts: [
            "the first of June",
            "the one of June",
            "the June of first"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Look at the rule: the … of …",
          fbText: "1 June is <b>the first of June</b>. We say <i>the</i>, an ordinal number, <i>of</i> and the month."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "My birthday is {*on|in} 9 October. My sister’s birthday is {*in|on} April. Christmas is {*on|in} 25 December.",
          hint: "Is it a date or only a month?",
          fbOk: "Exactly.",
          fbBad: "A date: on. A month: in.",
          fbText: "A date: <b>on</b> 9 October, <b>on</b> 25 December. Only a month: <b>in</b> April."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Ostap’s birthday is on <b>22 July</b>. How does he say it?</p>`,
          before: "It’s on the",
          after: "of July.",
          answer: ["twenty-second", "twenty second"],
          hint: "22 → 22nd → twenty-…",
          fbOk: "Well done!",
          fbBad: "22nd: twenty and second.",
          fbText: "22 July is <b>the twenty-second of July</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+Jan|u|ar|y", "Sep|+tem|ber", "Oc|+to|ber", "No|+vem|ber"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts.",
          fbText: "<u>Jan</u>uary: stress at the start. Sep<u>tem</u>ber, Oc<u>to</u>ber, No<u>vem</u>ber: stress on the second part."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras writes about his birthday: 5 May.</p>`,
          tiles: ["My", "birthday", "is", "on", "the", "fifth", "of", "May"],
          answer: "My birthday is on the fifth of May.",
          keepCase: true,
          hint: "Start with My birthday…",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: on the … of …",
          fbText: "<b>My birthday is on the fifth of May.</b> We write 5 May. We say <b>the fifth of May</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Yaryna writes to Emma.</p>`,
          text: "Hi Emma! When’s your birthday? My birthday is {*on|in} 3 March. That’s {*the third|the three} of March. My brother’s birthday is in {*August|8 August}. It’s on the {*twelfth|twelve} of August.",
          hint: "On + a date, in + a month. Then the ordinal number.",
          fbOk: "Well done!",
          fbBad: "Check the rule: on 3 March, in August.",
          fbText: "<b>on</b> 3 March = <b>the third</b> of March. <b>in August</b>: only a month. 12 August = <b>the twelfth</b> of August."
        }
      ],
      outro: {
        text: "We write 3 March and say “the third of March”. We say on with a date and in with a month.",
        learned: [
          "Ask and answer: When’s your birthday? – It’s on 3 March.",
          "Say dates: the first of June, the twenty-second of July.",
          "Use on with dates and in with months."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s8l3",
      title: "A calendar of festivals: Ukraine and the UK",
      short: "Festivals",
      icon: "flag",
      status: "verified",
      why: "Learn about special days in Ukraine and the UK. Say when they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What special days are there?",
          body: `<p class="lead">Oksana and Emma make a calendar of special days.</p><p><b>Emma:</b> In the UK, we have Bonfire Night in November. People watch fireworks!<br><b>Oksana:</b> In Ukraine, we have St Nicholas Day in December. Children get presents!</p><p>What special days are there in your calendar?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Bonfire Night is in November. What date is it?</p>`,
          opts: [
            "15 November",
            "30 November",
            "5 November"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Bonfire Night is on <b>5 November</b>: the fifth of November. Now look at the calendar."
        },
        {
          type: "info",
          title: "Festivals",
          body: `<p>Christmas, Easter and Bonfire Night are <b><u>fes</u>tivals</b>. A festival is a special day. People <b>celebrate</b> it every year.</p><p>Some special days are <b>public holidays</b>. In the UK, people also say <b>bank holidays</b>. Many people don’t go to work.</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "A calendar of special days",
          body: `<p><b>In Ukraine:</b></p><ul><li>1 January – New Year’s Day</li><li>24 August – Independence Day</li><li>6 December – St Nicholas Day</li><li>25 December – Christmas Day</li></ul><p><b>In the UK:</b></p><ul><li>1 January – New Year’s Day</li><li>5 November – Bonfire Night</li><li>25 December – Christmas Day</li><li>26 December – Boxing Day, a bank holiday</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>When is Independence Day in Ukraine?</p>`,
          opts: [
            "on 6 December",
            "on 24 August",
            "on 5 November"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the calendar for Ukraine.",
          fbText: "Independence Day in Ukraine is on <b>24 August</b>, the twenty-fourth of August. 6 December is St Nicholas Day."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Bonfire Night is on", "St Nicholas Day is on", "Boxing Day is on", "Independence Day is on"],
          right: ["5 November.", "6 December.", "26 December.", "24 August."],
          hint: "Look at the calendar again. Which dates are in December?",
          fbOk: "Well done!",
          fbBad: "Check the calendar for each day.",
          fbText: "Bonfire Night: <b>5 November</b>. St Nicholas Day: <b>6 December</b>. Boxing Day: <b>26 December</b>. Independence Day: <b>24 August</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s sentences is wrong.</p>`,
          text: "Bonfire Night is [in] 5 November. It’s in autumn. We watch fireworks.",
          hint: "A date: on or in?",
          fbOk: "Good eye!",
          fbBad: "Check on and in.",
          fbText: "With a date, we say <b>on</b>: Bonfire Night is <b>on</b> 5 November. <b>In</b> autumn is correct."
        },
        {
          type: "word",
          sk: "cult",
          title: "Write the missing word.",
          body: `<p>Boxing Day is on 26 December.</p>`,
          before: "Boxing Day is the day after",
          after: "Day.",
          answer: "Christmas",
          hint: "What is on 25 December?",
          fbOk: "Yes!",
          fbBad: "Look at the calendar: 25 December.",
          fbText: "25 December is <b>Christmas</b> Day. Boxing Day is the next day, 26 December."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Dear Oksana,<br>Thank you for your Christmas card! Today is Boxing Day. It’s a bank holiday, so Mum and Dad are at home. We’re playing games. When is St Nicholas Day in Ukraine?<br>Love, Emma</i></p><p>Why are Emma’s mum and dad at home?</p>`,
          opts: [
            "It’s Bonfire Night.",
            "They are ill.",
            "It’s a bank holiday."
          ],
          correct: 2,
          fbOk: "Exactly.",
          fbBad: "Read the third sentence again.",
          fbText: "Emma writes: “It’s a <b>bank holiday</b>, so Mum and Dad are at home.” Many people don’t work on a bank holiday."
        }
      ],
      outro: {
        text: "A festival is a special day. People celebrate it every year. Some special days are public holidays or bank holidays.",
        learned: [
          "Name festivals and special days in Ukraine and the UK.",
          "Say when they are: Bonfire Night is on 5 November.",
          "Understand the words festival, public holiday and bank holiday."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s8l4",
      title: "How do you celebrate? Traditions",
      short: "Traditions",
      icon: "star",
      status: "verified",
      why: "Every family has its traditions. Tell your friends what you do on special days.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What do people do on Christmas Eve?",
          body: `<p class="lead">Oksana writes to Emma about Christmas in her village.</p><p><i>On Christmas Eve, my family has a big dinner. There are twelve dishes! My grandma makes kutia. It’s a sweet dish with grain, honey and poppy seeds. After dinner, children sing carols.</i></p><p>What do people do on special days?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>It’s Pancake Day in the UK. What do people do?</p>`,
          opts: [
            "They sing carols.",
            "They make pancakes.",
            "They watch fireworks."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "On <b>Pancake Day</b>, people make and eat <b>pancakes</b>. The name helps!"
        },
        {
          type: "info",
          title: "Traditions",
          body: `<p>A <b>tradition</b> is something people do every year.</p><ul><li>On Christmas Eve, many Ukrainian families <b>have</b> a dinner with twelve dishes.</li><li>Children <b>sing</b> carols.</li><li>On St Nicholas Day, children <b>find</b> presents under their pillows.</li><li>On Bonfire Night, people in the UK <b>watch</b> fireworks.</li><li>On Pancake Day, people <b>make</b> pancakes.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["On Bonfire Night, people", "On Pancake Day, people", "On Christmas Eve, many Ukrainian families", "On St Nicholas Day, children"],
          right: ["watch fireworks.", "make pancakes.", "have a dinner with twelve dishes.", "find presents under their pillows."],
          hint: "Look at the list of traditions again.",
          fbOk: "Yes!",
          fbBad: "Check the list of traditions.",
          fbText: "Bonfire Night: <b>fireworks</b>. Pancake Day: <b>pancakes</b>. Christmas Eve: <b>twelve dishes</b>. St Nicholas Day: <b>presents under pillows</b>."
        },
        {
          type: "info",
          title: "We do it every year",
          body: `<p>For traditions, we use the Present Simple:</p><ul><li>I, you, we, they → <b>sing</b>, <b>don’t sing</b></li><li>he, she, it → <b>sings</b>, <b>doesn’t sing</b></li></ul><p><b>Do</b> you sing carols?<br>– Yes, we <b>do</b>. / No, we <b>don’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about Christmas Eve.</p>`,
          text: "Every year, my grandma {*makes|make} kutia. We {*sing|sings} carols. My brother Dmytro {*doesn’t|don’t} sing. He {*eats|eat} a lot of kutia!",
          hint: "Who is it: he, she or we?",
          fbOk: "Exactly.",
          fbBad: "He and she: -s and doesn’t.",
          fbText: "Grandma is <i>she</i>: she <b>makes</b>. <i>We</i> <b>sing</b>. Dmytro is <i>he</i>: he <b>doesn’t</b> sing, he <b>eats</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma asks: “Do you sing carols at Christmas?”</p><p>Oksana and her friends sing carols. What does Oksana answer?</p>`,
          opts: [
            "Yes, we are.",
            "Yes, we sing.",
            "Yes, we do."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Look at the short answers.",
          fbText: "<b>Do</b> you…? – Yes, we <b>do</b>. <i>Yes, we are</i> answers <i>Are you…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana tells Emma about a tradition.</p>`,
          tiles: ["we", "sing", "carols", "on", "Christmas Eve"],
          answer: ["We sing carols on Christmas Eve.", "On Christmas Eve we sing carols."],
          extra: ["sings"],
          hint: "Who sings? Start with we…",
          fbOk: "Well done!",
          fbBad: "We sing, not we sings.",
          fbText: "<b>We sing carols on Christmas Eve.</b> Or: <b>On Christmas Eve, we sing carols.</b> With <i>we</i>, there is no -s."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>It’s 5 November in the UK. The sky is full of colours.</p>`,
          before: "On Bonfire Night, people watch",
          after: ".",
          answer: ["fireworks", "the fireworks"],
          hint: "Look at the list of traditions: Bonfire Night.",
          fbOk: "Good eye!",
          fbBad: "What do people watch on Bonfire Night?",
          fbText: "On Bonfire Night, people watch <b>fireworks</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Dear Oksana,<br>At Christmas, we decorate a big tree. On Christmas Day, we open our presents in the morning. Then we have Christmas dinner. My dad makes a Christmas pudding. On 26 December, we visit Grandma.<br>Love, Emma</i></p><p>When does Emma’s family open presents?</p>`,
          opts: [
            "on Christmas Eve",
            "on Christmas Day",
            "on Boxing Day"
          ],
          correct: 1,
          fbOk: "Well done!",
          fbBad: "Read the second sentence again.",
          fbText: "Emma writes: “<b>On Christmas Day</b>, we open our presents in the morning.” On 26 December, Boxing Day, they visit Grandma."
        }
      ],
      outro: {
        text: "A tradition is something people do every year. We talk about traditions with the Present Simple.",
        learned: [
          "Say what people do on special days: People watch fireworks.",
          "Tell a friend about Christmas in Ukraine and the UK.",
          "Ask and answer: Do you sing carols? – Yes, we do."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s8l5",
      title: "Our New Year party was great! Was and were",
      short: "Was and were",
      icon: "scroll",
      status: "verified",
      why: "Tell your friends about a party or a festival in the past.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "How was the party?",
          body: `<p class="lead">It’s March. Andrii writes to Emma about New Year.</p><p><i>Hi Emma! Our New Year party was great! My aunt and uncle were at our flat. My cousins were there too. The cake was very big. Where were you on New Year’s Eve?<br>Andrii</i></p><p><b>Was</b>, <b>were</b>: is the party now or in the past?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Today Andrii is at school. On New Year’s Eve, he … at home.</p>`,
          opts: [
            "is",
            "was",
            "were"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "New Year’s Eve is in the past. Andrii is <i>he</i>: he <b>was</b> at home."
        },
        {
          type: "info",
          title: "Was and were",
          body: `<ul><li>Now: I <b>am</b>, he <b>is</b>, we <b>are</b>.</li><li>In the past: I <b>was</b>, he <b>was</b>, we <b>were</b>.</li></ul><ul><li>I, he, she, it → <b>was</b>, <b>wasn’t</b></li><li>you, we, they → <b>were</b>, <b>weren’t</b></li></ul><p>The party <b>was</b> great. My cousins <b>were</b> there. The cake <b>wasn’t</b> small.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Was or were?</p>`,
          bins: ["was", "were"],
          items: [
            ["I", 0],
            ["my aunt", 0],
            ["the party", 0],
            ["we", 1],
            ["my cousins", 1],
            ["the presents", 1]
          ],
          fbOk: "Yes!",
          fbBad: "Is it one or more than one?",
          fbText: "One person or thing, and <i>I</i>: <b>was</b>. <i>We</i>, <i>you</i>, <i>they</i> and more than one: <b>were</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about Christmas in Kharkiv.</p>`,
          text: "On Christmas Eve, we {*were|was} at my grandma’s. The dinner {*was|were} great. There were twelve dishes. The kutia {*wasn’t|weren’t} very sweet. My cousins {*weren’t|wasn’t} there.",
          hint: "Is it we, one thing or more than one?",
          fbOk: "Exactly.",
          fbBad: "Check the list: I, he, she, it or we, they.",
          fbText: "<i>We</i>: <b>were</b>. The dinner, the kutia: one thing – <b>was</b>, <b>wasn’t</b>. My cousins: more than one – <b>weren’t</b>."
        },
        {
          type: "info",
          title: "Was it fun?",
          body: `<p><b>Was</b> it fun?<br>– Yes, it <b>was</b>. / No, it <b>wasn’t</b>.</p><p><b>Were</b> your friends there?<br>– Yes, they <b>were</b>. / No, they <b>weren’t</b>.</p><p><b>Where were</b> you on New Year’s Eve?<br>– I <b>was</b> at home.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma asks: “Was the party fun?”</p><p>Andrii liked the party. What does he answer?</p>`,
          opts: [
            "Yes, it were.",
            "Yes, it is.",
            "Yes, it was."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Look at the short answers.",
          fbText: "<b>Was</b> it…? – Yes, it <b>was</b>. The party was in the past, so not <i>it is</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii asks Emma.</p>`,
          tiles: ["Where", "were", "you", "on", "New Year’s Eve"],
          answer: "Where were you on New Year’s Eve?",
          extra: ["was"],
          keepCase: true,
          hint: "Start with Where…",
          fbOk: "Well done!",
          fbBad: "You: was or were?",
          fbText: "<b>Where were you on New Year’s Eve?</b> With <i>you</i>, we say <b>were</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s answer is wrong.</p>`,
          text: "I was at my grandad’s house. My parents were there too. The fireworks [was] beautiful.",
          hint: "The fireworks: one or more than one?",
          fbOk: "Good eye!",
          fbBad: "Check each was and were.",
          fbText: "<i>The fireworks</i> is more than one: the fireworks <b>were</b> beautiful."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back.</p>`,
          text: "Hi Andrii! On New Year’s Eve, I {*was|were} at my grandad’s house. Tom and Mum {*were|was} there too. {*Was|Were} your party in your flat? Our party {*wasn’t|weren’t} big, but it {*was|were} fun!",
          hint: "I, it: was. Tom and Mum: were.",
          fbOk: "Well done!",
          fbBad: "One person or thing, or more than one?",
          fbText: "I <b>was</b>. Tom and Mum <b>were</b>. <b>Was</b> your party…? Our party <b>wasn’t</b> big, but it <b>was</b> fun."
        }
      ],
      outro: {
        text: "In the past, we say was and were: The party was great. My cousins were there.",
        learned: [
          "Use was, were, wasn’t and weren’t.",
          "Ask and answer: Was it fun? – Yes, it was.",
          "Tell a friend about a party in the past."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s8l6",
      title: "Writing a greetings card",
      short: "Cards",
      icon: "book",
      status: "verified",
      why: "Write a card for a birthday or a festival. Say “What a lovely card!” to a friend.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What does Taras say?",
          body: `<p class="lead">Taras gets a card from his friend Ostap.</p><p><i>Dear Taras,<br>Happy birthday! Have a great party!<br>Best wishes,<br>Ostap</i></p><p>The card has a big cake on it. Taras says: “<b>What a</b> lovely card!”</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras gets a big present. What does he say?</p>`,
          opts: [
            "What a big present!",
            "What big a present!",
            "What a present big!"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>What a big present!</b> The next screen shows the rule."
        },
        {
          type: "info",
          title: "What a lovely card!",
          body: `<p>Something is very nice or very big? Say it like this:</p><ul><li><b>What a</b> lovely card!</li><li><b>What a</b> great party!</li><li><b>What an</b> amazing cake!</li></ul><p><b>What a</b> + lovely / great / big + card / party / cake + <b>!</b></p><p>Before a vowel sound, it’s <b>an</b>: What <b>an</b> amazing cake!</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "What {*a|an} big cake! What {*an|a} amazing tree! What {*a|an} lovely card!",
          hint: "Is the first sound a vowel?",
          fbOk: "Exactly.",
          fbBad: "Big, lovely: a. Amazing: an.",
          fbText: "<b>What a</b> big cake! <b>What an</b> amazing tree: <i>amazing</i> starts with a vowel sound. <b>What a</b> lovely card!"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana looks at the Christmas tree in her village.</p>`,
          tiles: ["what", "a", "beautiful", "Christmas tree"],
          answer: "What a beautiful Christmas tree!",
          extra: ["an"],
          hint: "Start with What a…",
          fbOk: "Yes!",
          fbBad: "Look at the rule: What a + word + thing.",
          fbText: "<b>What a beautiful Christmas tree!</b> <i>Beautiful</i> starts with <i>b</i>, so it’s <b>a</b>, not <i>an</i>."
        },
        {
          type: "info",
          title: "A greetings card",
          body: `<p>We send <b>greetings cards</b> on birthdays and festivals.</p><ul><li>Start: <b>Dear</b> Taras,</li><li>Wish: <b>Happy</b> birthday! <b>Happy</b> New Year! <b>Happy</b> Christmas!</li><li>Message: Have a great day!</li><li>End: <b>Love,</b> or <b>Best wishes,</b> and your name.</li></ul>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Help Yaryna with her card for Emma.</p>`,
          items: [
            "Dear Emma,",
            "Happy New Year!",
            "Have a great year!",
            "Love, Yaryna"
          ],
          shuffle: [2, 0, 3, 1],
          hint: "A card starts with Dear…",
          fbOk: "Well done!",
          fbBad: "Look at the card rules again.",
          fbText: "First <b>Dear Emma</b>. Then the wish: <b>Happy New Year!</b> Then the message. At the end: <b>Love, Yaryna</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Ostap ends his card.</p>`,
          before: "Best",
          after: ", Ostap",
          answer: ["wishes", "regards"],
          hint: "Look at the card rules: the end.",
          fbOk: "Good eye!",
          fbBad: "We end a card with Love or Best …",
          fbText: "A card can end with <b>Best wishes</b> or <b>Love</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s card is wrong.</p>`,
          text: "Dear Bohdan, Happy birthday! What [an] lovely party! Love, Mariia",
          hint: "Lovely: is the first sound a vowel?",
          fbOk: "Good eye!",
          fbBad: "Check a and an.",
          fbText: "<i>Lovely</i> starts with <i>l</i>, not a vowel sound. So it’s <b>What a lovely party!</b>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes a card to Oksana in January.</p>`,
          text: "{*Dear|Love} Oksana,<br>Happy New Year! Thank you for your card. What {*a|an} lovely card! Our New Year party {*was|were} great. My cousins {*were|was} there too.<br>{*Love|Dear}, Emma",
          hint: "Start, end, a or an, was or were.",
          fbOk: "Well done!",
          fbBad: "Check the card rules and was, were.",
          fbText: "A card starts with <b>Dear</b> and ends with <b>Love</b>. <b>What a</b> lovely card! The party <b>was</b>. My cousins <b>were</b>."
        }
      ],
      outro: {
        text: "A greetings card has Dear, a wish, a message and Love or Best wishes. We say What a lovely card!",
        learned: [
          "Write a short card: Dear…, Happy birthday!, Love…",
          "Say What a great party! and What an amazing cake!",
          "Choose the right ending: Love or Best wishes."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s8l7",
      title: "Our festival calendar",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the class calendar?",
          body: `<p class="lead">Taras’s class in Lviv makes a calendar of festivals and birthdays. Emma’s class in England helps.</p><p>Help them with dates, festivals and cards. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "January is the {*first|one} month. March is the {*third|three} month. December is the {*twelfth|twelve} month.",
          pre: "e5s8l1",
          hint: "Counting or order?",
          fbOk: "Yes!",
          fbBad: "Order: first, second, third…",
          fbText: "January is the <b>first</b> month, March is the <b>third</b>, December is the <b>twelfth</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Ostap asks: “When’s your birthday?” Yaryna’s birthday is on 3 March. What does she say?</p>`,
          opts: [
            "It’s on the third of March.",
            "It’s in the third of March.",
            "It’s on the three of March."
          ],
          correct: 0,
          pre: "e5s8l2",
          fbOk: "Right.",
          fbBad: "A date: on. Then an ordinal number.",
          fbText: "With a date, we say <b>on</b>. 3 March is <b>the third of March</b>."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Match the halves.",
          left: ["In Ukraine, Independence Day is on", "In the UK, Bonfire Night is on", "In Ukraine, St Nicholas Day is on"],
          right: ["24 August.", "5 November.", "6 December."],
          pre: "e5s8l3",
          hint: "Which day is in summer?",
          fbOk: "Well done!",
          fbBad: "Remember the calendar of special days.",
          fbText: "Independence Day: <b>24 August</b>. Bonfire Night: <b>5 November</b>. St Nicholas Day: <b>6 December</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about St Nicholas Day.</p>`,
          text: "Every year, my little sister {*finds|find} presents under her pillow. My parents {*don’t|doesn’t} get presents. Emma: {*Do|Does} you sing carols? Taras: Yes, we {*do|are}.",
          pre: "e5s8l4",
          hint: "She: -s. They, you, we: do and don’t.",
          fbOk: "Exactly.",
          fbBad: "Check he, she or we, you.",
          fbText: "My sister is <i>she</i>: she <b>finds</b>. My parents <b>don’t</b> get presents. <b>Do</b> you…? – Yes, we <b>do</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>It’s 27 December. Emma writes about Christmas Day. Write <b>was</b> or <b>were</b>.</p>`,
          before: "My grandparents",
          after: "at our house on Christmas Day. Grandma’s cake was great!",
          answer: "were",
          pre: "e5s8l5",
          hint: "My grandparents: one or more than one? It’s in the past.",
          fbOk: "Good eye!",
          fbBad: "More than one person in the past: …",
          fbText: "My grandparents is more than one person: they <b>were</b> at our house."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 6",
          title: "Complete the sentences.",
          body: `<p>Taras writes a card to Emma.</p>`,
          text: "{*Dear|Love} Emma,<br>Happy Christmas! What {*a|an} big tree in your photo! What {*an|a} amazing cake!<br>{*Best wishes|Dear},<br>Taras",
          pre: "e5s8l6",
          hint: "Start, end, a or an.",
          fbOk: "Well done!",
          fbBad: "Look at the card rules again.",
          fbText: "<b>Dear</b> Emma … <b>What a</b> big tree! <b>What an</b> amazing cake! <b>Best wishes</b>, Taras."
        }
      ],
      outro: {
        text: "Well done! Now you can say dates, talk about festivals and traditions and write a greetings card.",
        learned: [
          "Say dates: the third of March, on 5 November.",
          "Name festivals in Ukraine and the UK and say what people do.",
          "Use was and were about the past.",
          "Write a short greetings card with What a…!"
        ]
      }
    }
  ]
});
