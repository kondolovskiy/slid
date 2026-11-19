/* Слід · Англійська мова, 4 клас — «Celebrations and school events» (e4s8)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: теми «Свята та традиції — святкування в кафе»,
   «Шкільне життя — шкільні події» (PDF с. 62–63); граматика — would like (повторення e4s4), Present Simple vs Present Continuous
   на рівні зразків, how-questions for time (с. 63); функції — вітати зі святом, подякувати, вибачитися, попрощатися (с. 62–63);
   запрошення в певне місце й час (A1, с. 51); записки (A1, с. 54):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, наголос і дати свят — за Cambridge Dictionary, OALD і джерелами з tasks/…/write-eng-g4-e4s8.md, «Нотатки агента».
   Статус: verified (verifier-e4s8, reports/verify/e4s8.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s8",
  grade: 4,
  weeks: [32, 35],
  title: "Celebrations and school events",
  why: "To invite friends to a party and talk about school events. And to say “Happy New Year!” or “Happy birthday!”",
  requires: ["e4s1l1", "e4s1l5", "e4s4l5", "e4s6l2", "e4s6l3"],
  meta: { author: "writer-e4s8", created: "2026-11-19", factcheck: "verifier-e4s8 (reports/verify/e4s8.md)", teacher: null },
  badges: [
    { id: "e4s8boss", name: "Party planner", icon: "trophy", desc: "Finish the final lesson “Celebrations and school events”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s8l1",
      title: "A party at a café",
      short: "At a café",
      icon: "pizza",
      status: "verified",
      why: "You go to a café with your friends. Order food and be polite.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What would you like?",
          body: `<p class="lead">It’s Mariia’s birthday. Her friends are at a café in Kharkiv.</p><p><b>Waiter:</b> Hello! What would you like?<br><b>Mariia:</b> I’d like a pizza, please.<br><b>Bohdan:</b> Can I have an orange juice, please?<br><b>Waiter:</b> Here you are.<br><b>Bohdan:</b> Thank you!</p><p>How do the children ask for food?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The waiter asks Kateryna: “What would you like?” What is polite?</p>`,
          opts: [
            "I want a sandwich!",
            "I’d like a sandwich, please.",
            "Sandwich!"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I’d like…, please</b> is polite. The next screen shows how to order."
        },
        {
          type: "info",
          title: "I’d like…, please",
          body: `<p><b>I’d like</b> a pizza, <b>please</b>.<br><b>Can I have</b> an orange juice, <b>please</b>?</p><ul><li>I would like → <b>I’d like</b></li></ul><p>The waiter asks:<br><b>What would you like?</b><br><b>Would you like</b> some cake?<br>– <b>Yes, please.</b> / <b>No, thank you.</b></p><p><b>I like</b> pizza = every day. <b>I’d like</b> a pizza = now, please.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Kateryna wants an ice cream now. What does she say to the waiter?</p>`,
          opts: [
            "I like an ice cream, please.",
            "I’m like an ice cream, please.",
            "I’d like an ice cream, please."
          ],
          correct: 2,
          hint: "She orders now. Find I’d like in the rule.",
          fbOk: "Right.",
          fbBad: "Look at the rule again: I like or I’d like?",
          fbText: "We order with <b>I’d like</b> = I would like. <i>I like</i> is about every day. There is no <i>I’m like</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Bohdan orders food.</p>`,
          text: "Waiter: What {*would|do} you like? Bohdan: {*I’d like|I like} a cheese sandwich, please. Waiter: Would you like some juice? Bohdan: {*Yes, please.|Yes, I like.}",
          hint: "Look at the questions and answers in the rule.",
          fbOk: "Exactly.",
          fbBad: "Check the rule: What would you like?",
          fbText: "The waiter asks: <b>What would you like?</b> Bohdan orders: <b>I’d like</b> a sandwich, please. The answer is <b>Yes, please.</b>"
        },
        {
          type: "info",
          title: "Thank you, sorry, goodbye",
          body: `<ul><li>The waiter brings your food. → <b>Thank you!</b></li><li>You are late. → <b>Sorry!</b> <b>Sorry</b> I’m late!</li><li>You go home. → <b>Goodbye!</b> <b>See you!</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the words.",
          body: `<p>What do you say: thank you or sorry?</p>`,
          bins: ["Thank you!", "Sorry!"],
          items: [
            ["The waiter brings your pizza.", 0],
            ["Your friend gives you a present.", 0],
            ["Your friend says: “Happy birthday!”", 0],
            ["You are late for the party.", 1],
            ["You drop your friend’s cake.", 1],
            ["Your juice is on your friend’s bag.", 1]
          ],
          fbOk: "Yes!",
          fbBad: "Is it good for you or bad for your friend?",
          fbText: "Someone does something nice for you: <b>Thank you!</b> You do something bad: <b>Sorry!</b>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia asks her friends.</p>`,
          tiles: ["Would", "you", "like", "some", "cake"],
          answer: "Would you like some cake?",
          extra: ["are"],
          keepCase: true,
          hint: "Start with the waiter’s question: Would you…",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Would you like…?",
          fbText: "The question is <b>Would you like some cake?</b> We don’t say <i>are</i> here."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>The party ends at 6 pm.</p>`,
          text: "Waiter: Here’s your cake. Mariia: {*Thank you|Sorry}! Kateryna: Oh no, my juice is on your bag! {*Sorry|Thank you}! Mariia: It’s OK. Bohdan: It’s 6 pm. {*Goodbye|Good morning}, everyone! {*See you|Here you are}!",
          hint: "Who does something nice? Who does something bad?",
          fbOk: "Good eye!",
          fbBad: "Look at the thank you, sorry, goodbye list.",
          fbText: "The waiter brings cake: <b>Thank you!</b> Juice on a bag: <b>Sorry!</b> Bohdan goes home: <b>Goodbye! See you!</b>"
        }
      ],
      outro: {
        text: "In a café, we say I’d like…, please. We say thank you, sorry and goodbye.",
        learned: [
          "Order food: I’d like a pizza, please.",
          "Answer: Yes, please. / No, thank you.",
          "Say thank you, sorry and goodbye."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s8l2",
      title: "Invitations: when and what time?",
      short: "Invitations",
      icon: "cake",
      status: "verified",
      why: "A friend has a party. Find out when and where it is.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "When is the party?",
          body: `<p class="lead">Mariia sends an invitation to her friends.</p><p><i>Come to my birthday party!<br>When: on Saturday<br>Time: at 3 pm<br>Where: at Café Sonechko<br>Love, Mariia</i></p><p>How do we ask about a party?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "Bohdan’s party is {in|*on|at} Sunday.",
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>on</b> Sunday. With days, we say <b>on</b>. The next screen shows more."
        },
        {
          type: "info",
          title: "When? What time? Where?",
          body: `<p><b>When</b> is the party? – <b>On</b> Saturday.<br><b>What time</b> is the party? – <b>At</b> 3 pm.<br><b>Where</b> is the party? – <b>At</b> the café.</p><ul><li>days → <b>on</b> Saturday, <b>on</b> Monday</li><li>time → <b>at</b> 3 pm, <b>at</b> 5 o’clock</li><li>months → <b>in</b> May, <b>in</b> December</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The school concert is {*on|in|at} Friday. It starts {*at|on|in} 5 pm. Bohdan’s birthday is {*in|on|at} June.",
          hint: "Is it a day, a time or a month?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: days, time, months.",
          fbText: "Friday is a day: <b>on</b> Friday. 5 pm is a time: <b>at</b> 5 pm. June is a month: <b>in</b> June."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Kateryna asks: “What time is the party?” What does Mariia say?</p>`,
          opts: [
            "On Saturday.",
            "At 3 pm.",
            "At the café."
          ],
          correct: 1,
          hint: "What time? We need a time.",
          fbOk: "Right.",
          fbBad: "Is “Saturday” a time?",
          fbText: "<b>What time…?</b> – <b>At 3 pm.</b> <i>On Saturday</i> answers <b>When…?</b> <i>At the café</i> answers <b>Where…?</b>"
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Bohdan asks Mariia about the party.</p>`,
          before: "What",
          after: "is the party? – At 3 pm.",
          answer: "time",
          hint: "The answer is “At 3 pm”.",
          fbOk: "Well done!",
          fbBad: "Look at the answer: At 3 pm.",
          fbText: "<b>What time</b> is the party? – At 3 pm."
        },
        {
          type: "info",
          title: "Can you come?",
          body: `<p><b>Can you come</b> to my party?<br>– <b>Yes, I can.</b> Thank you!<br>– <b>Sorry, I can’t.</b> I’m ill.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Kateryna asks Mariia about the party.</p>`,
          tiles: ["time", "is", "what", "the", "party"],
          answer: "What time is the party?",
          extra: ["does"],
          hint: "Start with What time…",
          fbOk: "Yes!",
          fbBad: "Look at the questions in the rule.",
          fbText: "<b>What time is the party?</b> We don’t need <i>does</i> with <i>is</i>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p><i>Hi Kateryna! My brother’s birthday party is on Sunday. It’s at 4 pm at our flat. Can you come? Bohdan</i></p>`,
          text: "Kateryna: Thank you, Bohdan! {*Yes, I can.|Yes, I am.} What time is the party? Bohdan: {*At|On|In} 4 pm. Kateryna: See you {*on|at|in} Sunday!",
          hint: "Can you come? – Yes, I … . Then: a time or a day?",
          fbOk: "Well done!",
          fbBad: "Read the rules again: Can you come? At or on?",
          fbText: "<b>Can</b> you come? – <b>Yes, I can.</b> 4 pm is a time: <b>at</b> 4 pm. Sunday is a day: <b>on</b> Sunday."
        }
      ],
      outro: {
        text: "We ask: When? What time? Where? We say on Saturday, at 3 pm, in May.",
        learned: [
          "Ask about a party: When is it? What time is it?",
          "Use on, at and in with days, time and months.",
          "Answer an invitation: Yes, I can. / Sorry, I can’t."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s8l3",
      title: "Happy New Year! Celebrations in Ukraine and the UK",
      short: "Celebrations",
      icon: "star",
      status: "verified",
      why: "Say the right words on a special day. Write a card to a friend.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What do friends write in December?",
          body: `<p class="lead">It’s December. Oksana and Emma send cards.</p><p><b>Oksana:</b> <i>Happy Christmas, Emma! In Ukraine, Christmas is on 25 December.</i><br><b>Emma:</b> <i>Happy Christmas, Oksana! It’s on 25 December in England too. And Happy New Year!</i></p><p>What do people say on special days?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Today Halyna is ten. What does Oksana write?</p>`,
          opts: [
            "Happy birthday!",
            "Happy Christmas!",
            "Happy New Year!"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "On your birthday, friends say <b>Happy birthday!</b> The next screen shows each special day."
        },
        {
          type: "info",
          title: "Special days",
          body: `<ul><li><b>Happy <u>birth</u>day!</b> – on your birthday</li><li><b>Happy New Year!</b> – on 1 January</li><li><b>Happy <u>Christ</u>mas!</b> – on 25 De<u>cem</u>ber</li></ul><p>In Ukraine, Christmas is on <b>25 December</b>. It’s on 25 December in the UK too.</p><p>We send <b>cards</b> on these days.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>When is Christmas in Ukraine?</p>`,
          opts: [
            "on 1 January",
            "on 25 December",
            "on 31 December"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the list of special days.",
          fbText: "In Ukraine, Christmas is on <b>25 December</b>. New Year is on 1 January."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          text: "It’s 1 January. Happy {*New Year|birthday}! Olha is seven today. Happy {*birthday|Christmas}, Olha! It’s 25 December. Happy {*Christmas|New Year}!",
          hint: "Look at the date. Then find it in the list.",
          fbOk: "Exactly.",
          fbBad: "Check each date in the list.",
          fbText: "1 January: <b>Happy New Year!</b> Olha is seven today: <b>Happy birthday!</b> 25 December: <b>Happy Christmas!</b>"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+birth|day", "De|+cem|ber", "+Christ|mas"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>birth</u>day, De<u>cem</u>ber, <u>Christ</u>mas: the underlined part is strong."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the word.",
          body: `<p>Today is Kateryna’s birthday. She is ten. Write on her card.</p>`,
          before: "Happy",
          after: "!",
          answer: "birthday",
          hint: "What do we say on your birthday?",
          fbOk: "Yes!",
          fbBad: "Look at the list of special days.",
          fbText: "On your birthday, friends write <b>Happy birthday!</b>"
        },
        {
          type: "pick",
          sk: "func",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s card is wrong.</p>`,
          text: "Dear Mariia, it’s your birthday today. Happy [Christmas]! Have a great party! Love, Bohdan",
          hint: "What day is it today?",
          fbOk: "Good eye!",
          fbBad: "Is it Christmas or Mariia’s birthday?",
          fbText: "It’s Mariia’s <b>birthday</b>, so we write <b>Happy birthday!</b> <i>Happy Christmas!</i> is for 25 December."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Dear Oksana,<br>Happy New Year! My family has a big dinner at Christmas. My grandma makes a chocolate cake. What do you do at Christmas?<br>Love, Emma</i></p><p>Who makes a cake?</p>`,
          opts: [
            "Emma’s mum",
            "Oksana",
            "Emma’s grandma"
          ],
          correct: 2,
          hint: "Find the word “cake” in the card.",
          fbOk: "Good eye!",
          fbBad: "Read the card again: who makes a cake?",
          fbText: "Emma writes: “My <b>grandma</b> makes a chocolate cake.”"
        }
      ],
      outro: {
        text: "We say Happy birthday!, Happy New Year! and Happy Christmas! In Ukraine, Christmas is on 25 December.",
        learned: [
          "Say the right words on a special day.",
          "Say when New Year and Christmas are.",
          "Write a short card to a friend."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s8l4",
      title: "School events: a concert, a sports day, a fair",
      short: "School events",
      icon: "users",
      status: "verified",
      why: "Your school has lots of events. Read about them and take part.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What’s on at school?",
          body: `<p class="lead">Andrii’s school in Kyiv has a notice for May.</p><p><b>School events</b></p><ul><li>Concert – Friday, 5 pm, in the school hall.</li><li>Sports day – Wednesday, 10 am, on the school field.</li><li>School fair – Saturday, 11 am, in the playground.</li></ul><p>What do children do at each event?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Where do children run and jump?</p>`,
          opts: [
            "at a concert",
            "at a sports day",
            "at a fair"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Children run and jump at a <b>sports day</b>. The next screen shows each event."
        },
        {
          type: "info",
          title: "School events",
          body: `<ul><li>a <b><u>con</u>cert</b> – children sing, dance and play music.</li><li>a <b>sports day</b> – children run, jump and play games.</li><li>a <b>fair</b> – people sell cakes, toys and books. Other people buy them.</li></ul><p>The money from a school fair is for the school.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Sofiia sings a song. Her friends dance. Mums and dads watch. What is it?</p>`,
          opts: [
            "a school concert",
            "a school fair",
            "a sports day"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Children sing and dance. Look at the list.",
          fbText: "Children sing and dance at a <b>concert</b>. At a fair, people sell and buy things."
        },
        {
          type: "multi",
          sk: "vocab",
          title: "Choose all the correct answers.",
          body: `<p>What do people do at a school fair?</p>`,
          opts: [
            "They run and jump.",
            "They sell cakes.",
            "They have maths lessons.",
            "They buy toys."
          ],
          correct: [1, 3],
          hint: "Look at the list: a fair.",
          fbOk: "Well done!",
          fbBad: "At a fair, people sell and buy.",
          fbText: "At a fair, people <b>sell cakes</b> and <b>buy toys</b>. Children run and jump at a sports day."
        },
        {
          type: "gaps",
          sk: "read",
          title: "Fill in the gaps.",
          body: `<ul><li>Concert – Friday, 5 pm, in the school hall.</li><li>Sports day – Wednesday, 10 am, on the school field.</li><li>School fair – Saturday, 11 am, in the playground.</li></ul>`,
          text: "The concert is on {*Friday|Saturday}. It starts at {*5 pm|10 am}. The sports day is on {*Wednesday|Friday}. The fair is in the {*playground|school hall}.",
          hint: "Find each event in the notice.",
          fbOk: "Exactly.",
          fbBad: "Read the notice again.",
          fbText: "Concert: <b>Friday</b>, <b>5 pm</b>. Sports day: <b>Wednesday</b>. Fair: in the <b>playground</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Children run, jump and play games on the school field.</p>`,
          before: "It’s a",
          after: "day.",
          answer: "sports",
          hint: "Look at the list of events.",
          fbOk: "Yes!",
          fbBad: "Look at the list: … day.",
          fbText: "Run, jump and play games: it’s a <b>sports day</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! Every year our school has a fair in May. My mum makes cakes, and I sell them. My sister Sofiia sells her old toys. The money is for the school library.</i></p><p>What does Sofiia sell?</p>`,
          opts: [
            "cakes",
            "her old toys",
            "books"
          ],
          correct: 1,
          hint: "Find the name Sofiia in the message.",
          fbOk: "Good eye!",
          fbBad: "Read about Sofiia again.",
          fbText: "Andrii writes: “My sister Sofiia sells <b>her old toys</b>.” Andrii sells the cakes."
        }
      ],
      outro: {
        text: "At a concert, children sing and dance. At a sports day, they run and jump. At a fair, people sell and buy things.",
        learned: [
          "Name school events: a concert, a sports day, a fair.",
          "Say what people do at each event.",
          "Read a school notice: when and where."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s8l5",
      title: "Every day or now? I play, I’m playing",
      short: "Now or every day",
      icon: "play",
      status: "verified",
      why: "Say what you do every day. And say what you are doing now.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Why is Andrii in the school hall?",
          body: `<p class="lead">Andrii sends a message to Emma.</p><p><i>I usually play football after school. But now I’m not on the school field. I’m in the school hall. I’m singing! We’re getting ready for the concert.</i></p><p>Look: <b>I play</b>, but <b>I’m singing</b>. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "Look! Mariia {sings|*is singing} a song now.",
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "It’s happening <b>now</b>, so we say <b>is singing</b>. The next screen shows why."
        },
        {
          type: "info",
          title: "I play, I’m playing",
          body: `<p><b>Every day, usually, on Fridays:</b><br>I <b>play</b> football. She <b>plays</b> football.</p><p><b>Now, Look!:</b><br>I<b>’m playing</b>. She<b>’s playing</b>. They<b>’re playing</b>.</p><ul><li>am, is, are + <b>-ing</b></li><li>sing → sing<b>ing</b>, dance → danc<b>ing</b>, run → run<b>ning</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Is it every day or now?</p>`,
          bins: ["Every day", "Now"],
          items: [
            ["I go to school at 8 am.", 0],
            ["Tom plays football on Fridays.", 0],
            ["We usually have lunch at 1 pm.", 0],
            ["Look! Sofiia is dancing.", 1],
            ["I’m writing a message now.", 1],
            ["Mum is making a cake now.", 1]
          ],
          hint: "Find am, is, are + -ing.",
          fbOk: "Yes!",
          fbBad: "Look for am, is, are + -ing.",
          fbText: "Every day: <b>I go</b>, <b>Tom plays</b>, <b>we usually have</b>. Now: <b>is dancing</b>, <b>’m writing</b>, <b>is making</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Every Saturday, Bohdan {*plays|is playing} chess. Look! Now he {plays|*is playing} football. His sisters usually {*go|are going} to the park. Now they {go|*are going} home.",
          hint: "Find the words every, usually, now and Look!",
          fbOk: "Exactly.",
          fbBad: "Every day or now? Check the words.",
          fbText: "<b>Every Saturday</b>, <b>usually</b>: he <b>plays</b>, they <b>go</b>. <b>Look! Now</b>: he <b>is playing</b>, they <b>are going</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>It’s 5 pm. Emma’s mum asks: “Where is Emma now?”</p>`,
          opts: [
            "She’s reading in her room.",
            "She reads in her room.",
            "She read in her room."
          ],
          correct: 0,
          hint: "The question has the word “now”.",
          fbOk: "Right.",
          fbBad: "It’s happening now. Look at the rule.",
          fbText: "Now: <b>She’s reading</b> = she is reading. <i>She reads</i> is about every day."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s message is wrong.</p>`,
          text: "Look! Andrii [sings] in the school hall now. He usually plays football after school.",
          hint: "Find the word now. Then check the verb.",
          fbOk: "Good eye!",
          fbBad: "Look! … now: am, is, are + -ing.",
          fbText: "<b>Look!</b> and <b>now</b>: Andrii <b>is singing</b>. <i>He usually plays</i> is correct: it’s about every day."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Look at Sofiia at the school concert! What is she doing now?</p>`,
          tiles: ["is", "Sofiia", "dancing", "now"],
          answer: ["Sofiia is dancing now.", "Now Sofiia is dancing.", "Sofiia is now dancing."],
          extra: ["dances"],
          hint: "Now: is + -ing.",
          fbOk: "Well done!",
          fbBad: "It’s now. Use is + dancing.",
          fbText: "<b>Sofiia is dancing now.</b> We can also say <b>Now Sofiia is dancing.</b> or <b>Sofiia is now dancing.</b> <i>Dances</i> is for every day."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Bohdan writes to Mariia.</p>`,
          text: "Hi Mariia! I usually {*go|am going} to the park on Sundays. But today it’s our school fair. Now I {sell|*am selling} cakes with my mum. Look at the photo! My dad {*is dancing|dances} with my sister!",
          hint: "Usually = every day. Now and Look! = now.",
          fbOk: "Well done!",
          fbBad: "Find usually, now and Look!",
          fbText: "<b>Usually</b>: I <b>go</b>. <b>Now</b>: I <b>am selling</b>. <b>Look at the photo!</b>: my dad <b>is dancing</b>."
        }
      ],
      outro: {
        text: "Every day, we say I play. Now, we say I’m playing.",
        learned: [
          "Say what you do every day: I play football.",
          "Say what you are doing now: I’m playing football.",
          "Use the words every day, usually, now and Look!"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s8l6",
      title: "Notes and messages to friends",
      short: "Notes",
      icon: "scroll",
      status: "verified",
      why: "Your family is not at home? Leave a short note.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Where is Oksana?",
          body: `<p class="lead">Mum comes home. There is a note on the table.</p><p><i>Mum,<br>I’m at Halyna’s house. We’re making a birthday card for Dmytro. Back at 6 pm.<br>Love, Oksana</i></p><p>What does a short note tell you?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana’s note: “Back at 6 pm.”</p><p>When is Oksana back home?</p>`,
          opts: [
            "at 6 pm",
            "at Halyna’s house",
            "on Saturday"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Read the note again: Back at …",
          fbText: "<b>Back at 6 pm</b> = Oksana is back home at 6 pm. <i>At Halyna’s house</i> says where she is now."
        },
        {
          type: "info",
          title: "A short note",
          body: `<ul><li>Who is it for? → <b>Mum,</b></li><li>Where are you? → <b>I’m at</b> the shop.</li><li>When are you back? → <b>Back at</b> 5 pm.</li><li>Your name → <b>Love, Oksana</b></li></ul><p>A note is short: <b>Back at 6.</b></p>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Oksana writes a note to Dad.</p>`,
          items: [
            "Dad,",
            "I’m at the shop with Dmytro.",
            "Back at 5 pm.",
            "Love, Oksana"
          ],
          shuffle: [2, 0, 3, 1],
          hint: "Who is it for? Where are you? When are you back? Your name.",
          fbOk: "Good eye!",
          fbBad: "Look at the order in the rule.",
          fbText: "First, who it is for: <b>Dad,</b> Then where you are, and when you are back. Your name is at the end."
        },
        {
          type: "info",
          title: "Thank you, sorry, see you",
          body: `<p><b>Thank you for</b> the party! It was great.<br><b>Thank you for</b> the card!</p><p><b>Sorry, I can’t come</b> to the concert. I’m ill.</p><p><b>See you</b> on Monday! <b>See you</b> next week!</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Kateryna writes to Mariia after the party.</p>`,
          before: "Thank you",
          after: "the great party!",
          answer: "for",
          hint: "Look at the rule: Thank you … the card!",
          fbOk: "Well done!",
          fbBad: "Thank you … the party: which small word?",
          fbText: "<b>Thank you for</b> the party!"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Fill in the gaps.",
          body: `<p>Maksym can’t come to Andrii’s school concert.</p>`,
          text: "Hi Andrii! {*Sorry|Thank you}, I can’t come to the concert. I’m ill. {*See you|Back at} next week! Maksym",
          hint: "Maksym can’t come. What does he say?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: Sorry, I can’t come…",
          fbText: "<b>Sorry, I can’t come</b> to the concert. <b>See you</b> next week!"
        },
        {
          type: "choice",
          sk: "write",
          title: "Choose the correct answer.",
          body: `<p>Bohdan is at the park. He is back home at 7 pm. Which note is right?</p>`,
          opts: [
            "Mum, I’m at the park. Back at 7 am. Bohdan",
            "Mum, I’m at the shop. Back at 7 pm. Bohdan",
            "Mum, I’m at the park. Back at 7 pm. Bohdan"
          ],
          correct: 2,
          hint: "Check two things: where and what time.",
          fbOk: "Yes!",
          fbBad: "Where is Bohdan? What time is he back?",
          fbText: "Bohdan is <b>at the park</b>. He is <b>back at 7 pm</b>. 7 am is in the morning."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "Dear Oksana,<br>{*Thank you|Sorry} for the Christmas card! It’s lovely. Now I {*am writing|write} this message in my room. My brother {*is playing|plays} with our cat now.<br>Love, Emma",
          hint: "Find the word now. And look at the thank you rule.",
          fbOk: "Well done!",
          fbBad: "Thank you or sorry? Every day or now?",
          fbText: "<b>Thank you for</b> the card! <b>Now</b>: I <b>am writing</b>, my brother <b>is playing</b>."
        }
      ],
      outro: {
        text: "A note says where you are and when you are back. We write: Thank you for…, Sorry, I can’t…, See you…",
        learned: [
          "Write a short note: I’m at the shop. Back at 5 pm.",
          "Say thank you and sorry in a message.",
          "Say see you: See you next week!"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s8l7",
      title: "Party time!",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Andrii with the class party?",
          body: `<p class="lead">It’s the end of the school year. Andrii’s class has a party at a café in Kyiv.</p><p>Help Andrii at the café, with the invitations and with his messages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Andrii is at the café.</p>`,
          text: "Waiter: What would you like? Andrii: {*I’d like|I like} a pizza, please. Waiter: Would you like some juice? Andrii: {*No, thank you.|No, I like.} Waiter: Here’s your pizza. Andrii: {*Thank you!|Sorry!}",
          pre: "e4s8l1",
          hint: "He orders now. Then the waiter brings food.",
          fbOk: "Yes!",
          fbBad: "Check the café rules: I’d like…, please.",
          fbText: "We order with <b>I’d like</b>. The answer is <b>No, thank you.</b> The waiter brings food: <b>Thank you!</b>"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Maksym asks: “What time is the party?” Which answer is right?</p>`,
          opts: [
            "On Friday.",
            "At 2 pm.",
            "In June."
          ],
          correct: 1,
          pre: "e4s8l2",
          fbOk: "Right.",
          fbBad: "What time? We need a time.",
          fbText: "<b>What time…?</b> – <b>At 2 pm.</b> <i>On Friday</i> and <i>in June</i> answer <b>When…?</b>"
        },
        {
          type: "word",
          sk: "func",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>It’s 1 January. Andrii writes to Emma.</p>`,
          before: "Happy New",
          after: "!",
          answer: "Year",
          pre: "e4s8l3",
          hint: "What do we say on 1 January?",
          fbOk: "Well done!",
          fbBad: "1 January: Happy New …",
          fbText: "On 1 January, we say <b>Happy New Year!</b>"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>People sell cakes and toys. Other people buy them. The money is for the school. What is it?</p>`,
          opts: [
            "a sports day",
            "a concert",
            "a school fair"
          ],
          correct: 2,
          pre: "e4s8l4",
          fbOk: "Exactly.",
          fbBad: "People sell and buy. What event is it?",
          fbText: "People sell and buy things at a <b>school fair</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about the party.</p>`,
          text: "Every Friday, I {*play|am playing} football. But today it’s our class party. Look! Now I {dance|*am dancing} with my friends.",
          pre: "e4s8l5",
          hint: "Every Friday or now?",
          fbOk: "Good eye!",
          fbBad: "Find every Friday, Look! and now.",
          fbText: "<b>Every Friday</b>: I <b>play</b>. <b>Look! Now</b>: I <b>am dancing</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 6",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a note for his mum.</p>`,
          text: "Mum,<br>I’m {*at|on} the café with my class. Back {*at|on} 8 pm.<br>{*Love|Sorry}, Andrii",
          pre: "e4s8l6",
          hint: "Where are you? When are you back? Then your name.",
          fbOk: "Well done!",
          fbBad: "Look at the note rules again.",
          fbText: "<b>I’m at</b> the café. <b>Back at</b> 8 pm. At the end: <b>Love, Andrii</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can order food, ask about a party and write notes and cards.",
        learned: [
          "Order food and say thank you and sorry.",
          "Ask when and what time a party is.",
          "Say Happy birthday!, Happy New Year! and Happy Christmas!",
          "Say what you do every day and what you are doing now."
        ]
      }
    }
  ]
});
