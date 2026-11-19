/* Слід · Англійська мова, 5 клас — «Clothes» (e5s4)
   Програма: МП-ІМ (Модельна навчальна програма «Іноземна мова. 5–9 класи», наказ МОН № 795 від 12.07.2021):
   тема «Одяг — види одягу; сезонний одяг» (с. 20); функції — описувати, порівнювати, аргументувати свій вибір (с. 20);
   граматика A2 (с. 21–22) — Present Continuous, Present Simple vs Present Continuous, Nouns: Plurals (trousers, jeans, a pair of):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — content/eng/plan.js, reports/verify/plan-eng-g5.md. Концентрично спирається на e4s6 (Present Continuous)
   і e4s8 (I play, I’m playing); «аргументувати свій вибір» — через because (Р1 верифікатора плану).
   Увесь зміст — англійською, британська норма (D-054): jumper, trousers, trainers. Тексти, діалоги, герої й малюнки — власні
   (docs/design/english.md §8); герої — з розділів 4 кл. Форми, наголос і позначки UK/US — за Cambridge Dictionary і OALD;
   День вишиванки — en/uk.wikipedia, zn.ua (URL — tasks/…/write-eng-g5-e5s4.md, «Нотатки агента»).
   Малюнки img/eng/e5s4/*.svg — власні (writer-e5s4), без стороннього матеріалу.
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s4",
  grade: 5,
  weeks: [13, 15],
  title: "Clothes",
  why: "To talk about clothes for every season. And to say what people are wearing now.",
  requires: ["e4s6l2", "e4s6l3", "e4s8l5", "e5s2l2", "e5s2l3"],
  meta: { author: "writer-e5s4", created: "2026-11-19", factcheck: null, teacher: null },
  credits: [
    ["Clothes drawings for the section “Clothes” (img/eng/e5s4/*.svg)", "Slid (writer-e5s4)", "own work, no third-party material", "https://github.com/kondolovskiy/slid"]
  ],
  badges: [
    { id: "e5s4boss", name: "Style expert", icon: "trophy", desc: "Finish the final lesson “Clothes”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s4l1",
      title: "Clothes: a jumper, a skirt, a coat",
      short: "Clothes",
      icon: "user",
      status: "draft",
      why: "Name your clothes in English. Then help a friend choose clothes for a trip.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What does Emma need?",
          body: `<p class="lead">Emma’s class has a school trip to Kyiv in December. Emma writes to Oksana.</p><p><b>Emma:</b> Hi, Oksana! What clothes do I need for Kyiv?<br><b>Oksana:</b> It’s cold here in December. You need a warm coat, a jumper, a hat and a scarf!</p><p>What are these clothes?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana writes: “You need a warm coat.” When do people wear a coat?</p>`,
          opts: [
            "on a hot day",
            "on a cold day",
            "in a swimming pool"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A coat is warm. We wear it <b>on a cold day</b>. The next screen shows more clothes."
        },
        {
          type: "info",
          title: "Clothes",
          img: "img/eng/e5s4/clothes-1.svg",
          fit: true,
          cap: "A T-shirt, a jumper, a skirt, a dress, a coat, a jacket, a hat and a scarf.",
          body: `<p>We <b>wear</b> clothes. Look at the pictures.</p><ul><li>cold days → a <b><u>jum</u>per</b>, a <b>coat</b>, a <b>hat</b>, a <b>scarf</b></li><li>a <b>T-shirt</b> → for hot days</li><li>a <b><u>jack</u>et</b> → shorter than a coat</li><li>a <b>dress</b>, a <b>skirt</b> → girls and women wear them</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the pictures.",
          left: ["a jumper", "a skirt", "a coat", "a hat", "a scarf"],
          right: [
            { img: "img/eng/e5s4/jumper.svg", alt: "a red jumper" },
            { img: "img/eng/e5s4/skirt.svg", alt: "a purple skirt" },
            { img: "img/eng/e5s4/coat.svg", alt: "a brown coat" },
            { img: "img/eng/e5s4/hat.svg", alt: "a blue hat" },
            { img: "img/eng/e5s4/scarf.svg", alt: "a green scarf" }
          ],
          hint: "Look at the red pairs again. Find each picture on the list screen.",
          fbOk: "Yes!",
          fbBad: "Look at the pictures on the list again.",
          fbText: "A <b>jumper</b> is red, the <b>skirt</b> is purple, the <b>coat</b> is long and brown. The <b>hat</b> is blue, the <b>scarf</b> is green."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>It’s July. It’s very hot. Sofiia goes to the park. What does she wear?</p>`,
          opts: [
            "a coat",
            "a scarf",
            "a dress"
          ],
          correct: 2,
          hint: "Is it a hot day or a cold day?",
          fbOk: "Right.",
          fbBad: "It’s very hot. Look at the list again.",
          fbText: "On a hot day, Sofiia wears a <b>dress</b>. A coat and a scarf are for cold days."
        },
        {
          type: "info",
          title: "I wear, she wears",
          body: `<p>In winter, I <b>wear</b> a coat.<br>My sister <b>wears</b> a red hat.</p><ul><li>I, you, we, they → <b>wear</b></li><li>he, she → <b>wears</b></li></ul><p><b>Do</b> you <b>wear</b> a scarf? – Yes, I <b>do</b>. / No, I <b>don’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "In winter, I {*wear|wears} a warm coat. My sister {wear|*wears} a red hat. My brothers {*wear|wears} jackets. {*Do|Does} you wear a scarf?",
          hint: "Who is it: I, she or they?",
          fbOk: "Exactly.",
          fbBad: "Check the list: I, he, she, they.",
          fbText: "<b>I wear</b>. My sister is <b>she</b>: she <b>wears</b>. My brothers are <b>they</b>: they <b>wear</b>. <b>Do</b> you wear…?"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s red and warm. Andrii wears it over his T-shirt at home on cold days.</p>`,
          before: "It’s a",
          after: ".",
          answer: ["jumper", "sweater", "pullover", "cardigan", "hoodie"],
          hint: "Look at the pictures: it’s red.",
          fbOk: "Well done!",
          fbBad: "It’s warm and you wear it over a T-shirt.",
          fbText: "It’s a <b>jumper</b>. A coat is warm too, but you don’t wear it at home."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "In winter, I wear a coat and a hat. My brother Dmytro [wear] a blue jumper. We wear scarves too.",
          hint: "Dmytro is he. Check the verbs.",
          fbOk: "Good eye!",
          fbBad: "Check each verb: I, he, we.",
          fbText: "Dmytro is <b>he</b>: he <b>wears</b> a blue jumper. <i>I wear</i> and <i>we wear</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes back to Emma.</p>`,
          text: "It’s very cold in Kyiv in December. Bring a warm {*coat|T-shirt} and a warm {*jumper|T-shirt}. In the street, I {*wear|wears} a hat and a {*scarf|T-shirt} too. {*Do|Does} you wear a hat in England?",
          hint: "Is it a hot day or a cold day?",
          fbOk: "Well done!",
          fbBad: "December in Kyiv is cold. Read the message again.",
          fbText: "Cold days: a warm <b>coat</b>, a <b>jumper</b>, a hat and a <b>scarf</b>. <b>I wear</b>. <b>Do</b> you wear…?"
        }
      ],
      outro: {
        text: "Now you can name clothes: a jumper, a skirt, a coat. We say I wear, she wears.",
        learned: [
          "Name clothes: a T-shirt, a jumper, a coat, a scarf.",
          "Say which clothes are for hot and cold days.",
          "Use wear and wears."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s4l2",
      title: "Trousers, jeans, shorts: a pair of…",
      short: "A pair of",
      icon: "users",
      status: "draft",
      why: "Some clothes words are always plural. Talk about them the right way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Why “trousers are”?",
          body: `<p class="lead">Andrii and his mum are at a clothes shop in Kyiv.</p><p><b>Mum:</b> Your old trousers are short now. Let’s find new trousers.<br><b>Andrii:</b> OK! And I need a pair of trainers too. My old trainers are small.</p><p>Look: <b>trousers are</b>, not <i>trousers is</i>. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii has got new jeans. Which sentence is correct?</p>`,
          opts: [
            "My new jeans are blue.",
            "My new jeans is blue.",
            "My new a jeans is blue."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>jeans are</b>. Why? The next screen shows it."
        },
        {
          type: "info",
          title: "Trousers are, a pair of trousers",
          img: "img/eng/e5s4/clothes-2.svg",
          fit: true,
          cap: "Trousers, jeans, shorts, socks, trainers, boots and gloves.",
          body: `<p>Trousers have got two legs. So we say:</p><ul><li><u>trou</u>sers, jeans, shorts → <b>are</b>, <b>they</b></li><li>Not <s>a trousers</s>. Say <b>a pair of</b> trousers.</li><li>We wear two socks, two <u>train</u>ers, two boots, two gloves → <b>a pair of</b> socks</li><li>two <b>pairs</b> of gloves</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the pictures.",
          left: ["trousers", "shorts", "socks", "trainers", "gloves"],
          right: [
            { img: "img/eng/e5s4/trousers.svg", alt: "grey trousers" },
            { img: "img/eng/e5s4/shorts.svg", alt: "green shorts" },
            { img: "img/eng/e5s4/socks.svg", alt: "white socks" },
            { img: "img/eng/e5s4/trainers.svg", alt: "blue trainers" },
            { img: "img/eng/e5s4/gloves.svg", alt: "orange gloves" }
          ],
          hint: "Look at the red pairs. Which clothes are for your hands? Which are for your feet?",
          fbOk: "Yes!",
          fbBad: "Look at the pictures on the list again.",
          fbText: "<b>Trousers</b> are long, <b>shorts</b> are short. <b>Socks</b> and <b>trainers</b> are for your feet. <b>Gloves</b> are for your hands."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "My new jeans {*are|is} blue. This T-shirt {are|*is} white. Where {*are|is} my shorts? I need {*a pair of|a} socks.",
          hint: "Jeans and shorts: is it is or are?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again: jeans, shorts → are.",
          fbText: "<b>Jeans are</b>, <b>shorts are</b>. A T-shirt is one thing: <b>it is</b>. Socks: <b>a pair of</b> socks."
        },
        {
          type: "info",
          title: "One boot, two boots",
          body: `<ul><li>shoe → shoe<b>s</b>, sock → sock<b>s</b></li><li>dress → dress<b>es</b></li><li>foot → <b>feet</b></li><li>child → <b>children</b></li><li>man → <b>men</b>, woman → <b>women</b></li></ul><p>Shoes are for your <b>feet</b>. Gloves are for your hands.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Dmytro has got new boots. They’re on his…</p>`,
          before: "One foot, two",
          after: ".",
          answer: "feet",
          hint: "foot → … Look at the list.",
          fbOk: "Well done!",
          fbBad: "It isn’t foots. Look at the list again.",
          fbText: "foot → <b>feet</b>. We don’t add <i>-s</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia has got four gloves: two red and two green.</p>`,
          opts: [
            "She’s got two pair of gloves.",
            "She’s got two pairs of glove.",
            "She’s got two pairs of gloves."
          ],
          correct: 2,
          hint: "Look at the list: two … of gloves.",
          fbOk: "Right.",
          fbBad: "Two pairs or two pair?",
          fbText: "One pair of gloves, <b>two pairs of gloves</b>. We add <i>-s</i> to <i>pair</i> and to <i>glove</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+trou|sers", "+train|ers", "+jum|per", "+jack|et"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>trou</u>sers, <u>train</u>ers, <u>jum</u>per, <u>jack</u>et: the strong part is at the start."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "Hi Emma! I’ve got new clothes! My new jeans {*are|is} dark blue. My old trousers {*are|is} short now. I’ve also got two {*pairs|pair} of socks and {*a pair of|a} trainers. My {*feet|foots} are happy!",
          hint: "Jeans, trousers: is or are? One foot, two …",
          fbOk: "Well done!",
          fbBad: "Check the list: are, pairs, feet.",
          fbText: "<b>Jeans are</b>, <b>trousers are</b>. <b>Two pairs</b> of socks, <b>a pair of</b> trainers. foot → <b>feet</b>."
        }
      ],
      outro: {
        text: "Trousers, jeans and shorts are plural: My jeans are blue. We say a pair of socks.",
        learned: [
          "Name clothes: trousers, jeans, shorts, socks, trainers, gloves.",
          "Say: My jeans are new. I need a pair of trainers.",
          "Use plurals: dresses, feet, children."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s4l3",
      title: "What are you wearing today?",
      short: "Wearing now",
      icon: "eye",
      status: "draft",
      why: "Tell a friend what you are wearing now. Ask about their clothes too.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Which one is Oksana?",
          body: `<p class="lead">Oksana sends Emma a photo from her school concert.</p><p><b>Oksana:</b> Can you find me in the photo?<br><b>Emma:</b> Are you wearing a blue dress?<br><b>Oksana:</b> No, I’m not. I’m wearing a white shirt and a red skirt.<br><b>Emma:</b> I can see you now!</p><p>How do they talk about clothes in the photo?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “I’m wearing a red skirt.” Is it every day or now?</p>`,
          opts: [
            "every day",
            "now",
            "every Monday"
          ],
          correct: 1,
          hint: "am, is, are + -ing: every day or now?",
          fbOk: "Yes!",
          fbBad: "Remember: am, is, are + -ing.",
          fbText: "<b>I’m wearing</b> = am + <i>-ing</i>. It’s about <b>now</b>, in the photo."
        },
        {
          type: "info",
          title: "I’m wearing, I’m not wearing",
          body: `<ul><li>I<b>’m wearing</b> a skirt. I<b>’m not wearing</b> a dress.</li><li>He<b>’s wearing</b> a hat. He <b>isn’t wearing</b> a cap.</li><li>They<b>’re wearing</b> boots. They <b>aren’t wearing</b> trainers.</li></ul><p><b>Are</b> you <b>wearing</b> jeans? – Yes, I <b>am</b>. / No, I<b>’m not</b>.<br><b>What is</b> he <b>wearing</b>? – A coat.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Look at Taras in the park!</p>`,
          text: "Taras {*is wearing|are wearing|wearing} a green jacket. He {*isn’t|aren’t} wearing a hat. His sisters {is wearing|*are wearing} red coats. I {*’m not|isn’t} wearing a coat.",
          hint: "Who is it: he, they or I?",
          fbOk: "Exactly.",
          fbBad: "Check am, is and are.",
          fbText: "Taras is <b>he</b>: he <b>is wearing</b>, he <b>isn’t</b> wearing. His sisters are <b>they</b>: they <b>are wearing</b>. With <b>I</b>: I<b>’m not</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Are you wearing your new trainers, Andrii?”</p><p>Andrii is wearing his old boots. What does he say?</p>`,
          opts: [
            "No, I’m not.",
            "No, I don’t.",
            "No, I isn’t."
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Look at the short answers in the list.",
          fbText: "<b>Are you wearing…?</b> – <b>No, I’m not.</b> <i>No, I don’t</i> answers <i>Do you wear…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana wants to know about Dmytro’s clothes. Make her question.</p>`,
          tiles: ["Is", "Dmytro", "wearing", "his", "new hat"],
          keepCase: true,
          answer: "Is Dmytro wearing his new hat?",
          extra: ["wear"],
          hint: "In a question, what comes first?",
          fbOk: "Well done!",
          fbBad: "Is it a question? Check the first word.",
          fbText: "In a question, <b>is</b> comes first: <b>Is Dmytro wearing his new hat?</b>"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>It’s hot today. Taras is wearing a T-shirt and shorts.</p>`,
          before: "He",
          after: "wearing a coat.",
          answer: ["isn’t", "is not"],
          contractions: true,
          hint: "Is it a hot day? Then add not.",
          fbOk: "Well done!",
          fbBad: "Taras is wearing shorts. Is he wearing a coat?",
          fbText: "It’s hot, so he <b>isn’t</b> wearing a coat. <i>isn’t</i> = <i>is not</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "Hi Emma! I’m in the park with Dmytro. I’m wearing a warm jacket. Dmytro [are] wearing his new hat.",
          hint: "Dmytro is he. Check am, is and are.",
          fbOk: "Good eye!",
          fbBad: "Check each am, is and are.",
          fbText: "Dmytro is <b>he</b>: Dmytro <b>is</b> wearing his new hat. <i>I’m wearing</i> is correct."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma and Oksana chat.</p>`,
          text: "<b>Emma:</b> What {*are|is} you wearing today?<br><b>Oksana:</b> I {*’m wearing|wear|wearing} my new jumper.<br><b>Emma:</b> {*Are|Is} you wearing your blue jeans?<br><b>Oksana:</b> No, I {*’m not|don’t|isn’t}. I’m wearing a skirt.",
          hint: "Who is it: you or I? Then check am, is, are.",
          fbOk: "Good eye!",
          fbBad: "Look at the list: questions and short answers.",
          fbText: "<b>What are you wearing?</b> – <b>I’m wearing</b> my new jumper. <b>Are you wearing…?</b> – <b>No, I’m not.</b>"
        }
      ],
      outro: {
        text: "To talk about clothes now, we say I’m wearing… We ask: What are you wearing?",
        learned: [
          "Say what you are wearing now: I’m wearing a jumper.",
          "Say what you aren’t wearing: He isn’t wearing a hat.",
          "Ask: What are you wearing? Are you wearing jeans?"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s4l4",
      title: "Clothes for every season",
      short: "Seasons",
      icon: "leaf",
      status: "draft",
      why: "Choose the right clothes for the weather. And say why you wear them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Why boots and gloves?",
          body: `<p class="lead">Mariia from Kharkiv and Emma from England chat about winter.</p><p><b>Mariia:</b> In winter, I wear boots and gloves because it’s cold and snowy. And you?<br><b>Emma:</b> I usually wear a raincoat because it’s rainy here.</p><p>How do they say <b>why</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Mariia: “In winter, I wear boots and gloves because it’s cold and snowy.”</p><p>Why does Mariia wear boots?</p>`,
          opts: [
            "because it’s hot",
            "because she’s at home",
            "because it’s cold and snowy"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Find the word because in Mariia’s message.",
          fbText: "After <b>because</b>, Mariia says why: <b>it’s cold and snowy</b>."
        },
        {
          type: "info",
          title: "Why? – Because…",
          body: `<p><b>Why</b> do you wear gloves? – <b>Because</b> it’s cold.</p><p>I wear a cap <b>because</b> it’s sunny.</p><ul><li><u>win</u>ter → a coat, boots, gloves, a hat</li><li><u>sum</u>mer → a T-shirt, shorts, <u>san</u>dals, a cap</li><li>a <u>rain</u>coat → a coat for rainy days</li><li><u>san</u>dals → summer shoes</li><li>a cap → a summer hat</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it for winter or for summer?</p>`,
          bins: ["Winter", "Summer"],
          items: [
            ["boots", 0],
            ["gloves", 0],
            ["a warm coat", 0],
            ["sandals", 1],
            ["shorts", 1],
            ["a cap", 1]
          ],
          hint: "Look at the list: winter and summer.",
          fbOk: "Right.",
          fbBad: "Look at the winter and summer lists again.",
          fbText: "Winter: <b>boots</b>, <b>gloves</b>, <b>a warm coat</b>. Summer: <b>sandals</b>, <b>shorts</b>, <b>a cap</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "In winter, I wear boots because it’s {*snowy|sunny|hot}. In summer, I wear a cap because it’s {*sunny|rainy|snowy}. In autumn, I wear a raincoat because it’s {*rainy|hot|sunny}.",
          hint: "Boots → snow. A cap → sun. A raincoat → rain.",
          fbOk: "Exactly.",
          fbBad: "Why do we wear these clothes? Look at the list.",
          fbText: "Boots: it’s <b>snowy</b>. A cap: it’s <b>sunny</b>. A raincoat: it’s <b>rainy</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Write one word.</p>`,
          before: "A coat for rainy days is a",
          after: ".",
          answer: ["raincoat", "rain coat", "mac", "mackintosh"],
          hint: "rain + coat = …",
          fbOk: "Well done!",
          fbBad: "rain + coat: one word.",
          fbText: "rain + coat = <b>raincoat</b>, one word."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “Why do you wear a hat and gloves in winter, Dmytro?”</p>`,
          opts: [
            "Because it’s hot.",
            "Because it’s cold.",
            "Yes, I do."
          ],
          correct: 1,
          hint: "A question with why needs because.",
          fbOk: "Well done!",
          fbBad: "Why? – Because… Is winter hot?",
          fbText: "<b>Why…?</b> – <b>Because it’s cold.</b> <i>Yes, I do</i> answers <i>Do you…?</i>"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+san|dals", "+rain|coat", "+win|ter", "+sum|mer"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>san</u>dals, <u>rain</u>coat, <u>win</u>ter, <u>sum</u>mer: the strong part is at the start."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Emma.</p>`,
          text: "In winter, it’s cold and snowy in Kharkiv. I wear warm {*boots|sandals} and {*gloves|shorts} because it’s {*cold|hot}. In summer, I wear a {*cap|scarf} {*because|but} it’s sunny.",
          hint: "Winter or summer? Then: why?",
          fbOk: "Good eye!",
          fbBad: "Read the message again: it’s cold and snowy.",
          fbText: "Winter: warm <b>boots</b> and <b>gloves</b> because it’s <b>cold</b>. Summer: a <b>cap</b> <b>because</b> it’s sunny."
        }
      ],
      outro: {
        text: "We wear different clothes in winter and summer. We say why with because.",
        learned: [
          "Name clothes for winter and summer: boots, gloves, sandals, a cap.",
          "Say why: I wear gloves because it’s cold.",
          "Answer a why question: Because it’s rainy."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s4l5",
      title: "I usually wear…, but today I’m wearing…",
      short: "Usually or now",
      icon: "scale",
      status: "draft",
      why: "Say what you usually wear. And say what you are wearing now, and why.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Why a white shirt?",
          body: `<p class="lead">Andrii writes to Emma.</p><p><i>I usually wear jeans and a T-shirt to school. But today I’m wearing a white shirt and black trousers because we’ve got a school concert!</i></p><p>Look: <b>I usually wear</b>, but <b>today I’m wearing</b>. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Fill in the gaps.",
          text: "Every Sunday, Taras {*wears|is wearing} his football boots. Look! Now he {wears|*is wearing} his new trainers.",
          hint: "Every Sunday or now?",
          fbOk: "Yes!",
          fbBad: "Find every Sunday, Look! and now.",
          fbText: "<b>Every Sunday</b>: he <b>wears</b>. <b>Look! Now</b>: he <b>is wearing</b>."
        },
        {
          type: "info",
          title: "I usually wear, I’m wearing now",
          body: `<p><b>usually, often, every day, on Mondays:</b><br>I <b>wear</b> jeans. She <b>wears</b> jeans.</p><p><b>now, at the moment, Look!:</b><br>I<b>’m wearing</b> a skirt. She<b>’s wearing</b> a skirt.</p><p>I <b>usually wear</b> jeans, <b>but</b> today I<b>’m wearing</b> a skirt <b>because</b> it’s hot.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Is it usually or now?</p>`,
          bins: ["Usually", "Now"],
          items: [
            ["I wear a jumper on Mondays.", 0],
            ["Mum usually wears a red coat.", 0],
            ["We often wear caps in summer.", 0],
            ["Look! Dmytro is wearing Dad’s hat.", 1],
            ["I’m wearing my new boots at the moment.", 1],
            ["Oksana is wearing a scarf now.", 1]
          ],
          hint: "Find am, is, are + -ing.",
          fbOk: "Yes!",
          fbBad: "Look for the words usually, often, now, Look!",
          fbText: "Usually: <b>I wear</b>, <b>Mum usually wears</b>, <b>we often wear</b>. Now: <b>is wearing</b>, <b>’m wearing</b>, <b>is wearing</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Mariia usually {*wears|is wearing} trainers. Now she {wears|*is wearing} boots because it’s snowy. On Fridays, Taras {*wears|is wearing} a cap. Look! He {wears|*is wearing} a warm hat at the moment.",
          hint: "Find usually, on Fridays, now, Look! and at the moment.",
          fbOk: "Exactly.",
          fbBad: "Usually or now? Check the words.",
          fbText: "<b>Usually</b>, <b>on Fridays</b>: she <b>wears</b>, he <b>wears</b>. <b>Now</b>, <b>Look!</b>, <b>at the moment</b>: she <b>is wearing</b>, he <b>is wearing</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma usually wears a skirt to school. But today it’s cold and windy. What does Emma say?</p>`,
          opts: [
            "Now I’m wearing trousers because it’s hot.",
            "I usually wear trousers because it’s cold.",
            "Now I’m wearing trousers because it’s cold."
          ],
          correct: 2,
          hint: "Is it about now? And why does she wear trousers?",
          fbOk: "Right.",
          fbBad: "It’s about now. And it’s cold today.",
          fbText: "Today is different: <b>Now I’m wearing trousers</b>. Why? <b>Because it’s cold.</b> Emma usually wears a skirt, not trousers."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s message is wrong.</p>`,
          text: "My brother Andrii usually wears a jacket. Look! Now he [wears] a warm coat because it’s cold.",
          hint: "Find the word now. Then check the verb.",
          fbOk: "Good eye!",
          fbBad: "Look! … now: am, is, are + -ing.",
          fbText: "<b>Look! Now</b>: he <b>is wearing</b> a warm coat. <i>He usually wears a jacket</i> is correct: it’s about usually."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>It’s cold today. What is Oksana wearing now?</p>`,
          tiles: ["now", "Oksana", "is wearing", "a warm scarf"],
          answer: ["Oksana is wearing a warm scarf now.", "Now Oksana is wearing a warm scarf."],
          extra: ["wears"],
          hint: "Now: is + -ing.",
          fbOk: "Well done!",
          fbBad: "It’s now. Use is wearing.",
          fbText: "<b>Oksana is wearing a warm scarf now.</b> We can also say <b>Now Oksana is wearing a warm scarf.</b> <i>Wears</i> is for usually."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the correct form of <b>wear</b>.</p>`,
          before: "Every summer, Taras",
          after: "a cap.",
          answer: "wears",
          hint: "Every summer: usually or now? Taras is he.",
          fbOk: "Well done!",
          fbBad: "Every summer = usually. He …",
          fbText: "<b>Every summer</b> is about usually. Taras is <b>he</b>: he <b>wears</b> a cap."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "Hi Oksana! I usually {*wear|am wearing} a skirt to school. But it’s very cold today, so now I {wear|*am wearing} trousers and a warm jumper. Look at the photo! My brother Tom {wears|*is wearing} his new boots. He {*wears|is wearing} trainers every day.",
          hint: "Usually and every day → wear. Now and Look! → am, is + -ing.",
          fbOk: "Well done!",
          fbBad: "Find usually, now, Look! and every day.",
          fbText: "<b>Usually</b>: I <b>wear</b>. <b>Now</b>: I <b>am wearing</b>. <b>Look at the photo!</b>: Tom <b>is wearing</b>. <b>Every day</b>: he <b>wears</b>."
        }
      ],
      outro: {
        text: "Usually: I wear jeans. Now: I’m wearing a skirt. We say why with because.",
        learned: [
          "Say what you usually wear: I usually wear jeans.",
          "Say what you are wearing now: Today I’m wearing a skirt.",
          "Say why: …because it’s cold."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s4l6",
      title: "School uniform: do you wear one?",
      short: "Uniform",
      icon: "book",
      status: "draft",
      why: "Talk about school clothes in England and Ukraine. And say what you like to wear and why.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What do they wear to school?",
          body: `<p class="lead">Emma and Andrii chat about school clothes.</p><p><b>Emma:</b> At my school in England, we wear a uniform: a white shirt, a grey jumper and a blue tie. Do you wear a uniform, Andrii?<br><b>Andrii:</b> No, I don’t. We wear our own clothes. But on Vyshyvanka Day, I wear a vyshyvanka!</p><p>What is a uniform? And what is a vyshyvanka?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii wears a vyshyvanka on Vyshyvanka Day. What is a vyshyvanka?</p>`,
          opts: [
            "a Ukrainian shirt",
            "a winter coat",
            "a school bag"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A vyshyvanka is <b>a Ukrainian shirt</b>. The next screens show it."
        },
        {
          type: "info",
          title: "A uniform and a vyshyvanka",
          img: "img/eng/e5s4/school.svg",
          fit: true,
          cap: "A school uniform: a grey jumper, a white shirt and a blue tie. And a vyshyvanka.",
          body: `<p>A <b><u>u</u>niform</b> = the same school clothes for everyone.</p><ul><li>a <b>shirt</b>, a <b>tie</b>, a <b>jumper</b></li><li>A <b>vyshyvanka</b> is a Ukrainian shirt. It has got red and black patterns.</li><li><b>Vyshyvanka Day</b> is in May. Lots of Ukrainians wear it on this day.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “At my school in England, we wear a uniform: a white shirt, a grey jumper and a blue tie.”</p><p>What colour is Emma’s tie?</p>`,
          opts: [
            "grey",
            "blue",
            "white"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Find the word tie in Emma’s words.",
          fbText: "Emma writes: “a <b>blue tie</b>”. Her jumper is grey, and her shirt is white."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Do you wear a uniform, Andrii?”</p><p>Andrii doesn’t wear a uniform. What does he say?</p>`,
          opts: [
            "No, I’m not.",
            "No, I doesn’t.",
            "No, I don’t."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Do you…? – No, I …",
          fbText: "<b>Do you wear…?</b> – <b>No, I don’t.</b> <i>No, I’m not</i> answers <i>Are you wearing…?</i>"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>At Emma’s school, all the children wear the same clothes.</p>`,
          before: "Emma wears a school",
          after: ".",
          answer: "uniform",
          hint: "The same school clothes for everyone.",
          fbOk: "Well done!",
          fbBad: "Look at the list: the same clothes for everyone.",
          fbText: "The same school clothes for everyone: a school <b>uniform</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>It’s Vyshyvanka Day in May.</p>`,
          text: "Andrii usually {*wears|is wearing} a T-shirt to school. But at the moment, he {wears|*is wearing} a vyshyvanka. He likes it {*because|but} it’s beautiful.",
          hint: "Usually or at the moment? Then: why?",
          fbOk: "Exactly.",
          fbBad: "Find usually and at the moment.",
          fbText: "<b>Usually</b>: he <b>wears</b> a T-shirt. <b>At the moment</b>: he <b>is wearing</b> a vyshyvanka. Why does he like it? <b>Because</b> it’s beautiful."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+u|ni|form", "+trou|sers", "+san|dals", "+jack|et"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>u</u>niform, <u>trou</u>sers, <u>san</u>dals, <u>jack</u>et: the strong part is at the start."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "At my school, we {*don’t|doesn’t} wear a uniform. I usually {*wear|am wearing} jeans and a jumper. I like my own clothes {*because|but} they’re comfortable. On Vyshyvanka Day, I {*wear|wears} a vyshyvanka.",
          hint: "We → don’t. Usually → wear. Why? → because.",
          fbOk: "Good eye!",
          fbBad: "Check we, usually and why.",
          fbText: "We <b>don’t</b> wear a uniform. <b>Usually</b>: I <b>wear</b>. Why? <b>Because</b> they’re comfortable. <b>I wear</b> a vyshyvanka."
        }
      ],
      outro: {
        text: "Some children wear a uniform to school. On Vyshyvanka Day, lots of Ukrainians wear a vyshyvanka.",
        learned: [
          "Name school clothes: a uniform, a shirt, a tie.",
          "Ask and answer: Do you wear a uniform? – No, I don’t.",
          "Say what you like to wear and why."
        ]
      }
    },

    /* ───────────── Урок 7: фінал розділу ───────────── */
    {
      id: "e5s4l7",
      title: "Clothes for a trip",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e5s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Emma in Kyiv?",
          body: `<p class="lead">It’s December. Emma is in Kyiv with her class! It’s cold and snowy.</p><p>Help Emma with her clothes and her messages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the words and the pictures.",
          left: ["a coat", "a dress", "a T-shirt", "a scarf"],
          right: [
            { img: "img/eng/e5s4/coat.svg", alt: "a brown coat" },
            { img: "img/eng/e5s4/dress.svg", alt: "a pink dress" },
            { img: "img/eng/e5s4/tshirt.svg", alt: "a yellow T-shirt" },
            { img: "img/eng/e5s4/scarf.svg", alt: "a green scarf" }
          ],
          pre: "e5s4l1",
          hint: "Look at the red pairs again. Which one is long and warm?",
          fbOk: "Yes!",
          fbBad: "Remember the pictures from Lesson 1.",
          fbText: "The <b>coat</b> is long and brown, the <b>dress</b> is pink, the <b>T-shirt</b> is yellow, the <b>scarf</b> is green."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "My new jeans {*are|is} warm. I’ve got two {*pairs|pair} of gloves. My {*feet|foots} are cold, so I need {*a pair of|a} warm socks.",
          pre: "e5s4l2",
          hint: "Jeans: is or are? One foot, two …",
          fbOk: "Right.",
          fbBad: "Remember: jeans are, two pairs, feet.",
          fbText: "<b>Jeans are</b>. <b>Two pairs</b> of gloves. foot → <b>feet</b>. <b>A pair of</b> socks."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “What are you wearing now, Emma?”</p>`,
          opts: [
            "I wear a red coat every day.",
            "I’m wearing a red coat and a hat.",
            "Yes, I am."
          ],
          correct: 1,
          pre: "e5s4l3",
          fbOk: "Exactly.",
          fbBad: "The question is about now.",
          fbText: "<b>What are you wearing now?</b> – <b>I’m wearing…</b> <i>Every day</i> is not about now. <i>Yes, I am</i> answers <i>Are you…?</i>"
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Write the word.",
          body: `<p>It’s snowy. Emma’s hands are cold. She needs warm…</p>`,
          before: "Emma wears a pair of",
          after: "on her hands.",
          answer: ["gloves", "mittens"],
          pre: "e5s4l4",
          hint: "Clothes for your hands in winter.",
          fbOk: "Well done!",
          fbBad: "Look at Lesson 4: a coat, boots, …, a hat.",
          fbText: "In winter, we wear <b>gloves</b> on our hands."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Emma writes to her mum.</p>`,
          text: "At home, I usually {*wear|am wearing} a skirt. But now I {wear|*am wearing} jeans {*because|but} it’s cold.",
          pre: "e5s4l5",
          hint: "Usually or now? Then: why?",
          fbOk: "Well done!",
          fbBad: "Find usually and now.",
          fbText: "<b>Usually</b>: I <b>wear</b>. <b>Now</b>: I <b>am wearing</b>. Why? <b>Because</b> it’s cold."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 6",
          title: "Complete the sentences.",
          body: `<p>Emma and Oksana chat.</p>`,
          text: "<b>Emma:</b> Do you wear a uniform, Oksana?<br><b>Oksana:</b> No, I {*don’t|’m not}. But on Vyshyvanka Day, I {*wear|wears} a vyshyvanka. It’s a Ukrainian {*shirt|coat}.",
          pre: "e5s4l6",
          hint: "Do you…? – No, I … Then: I wear or I wears?",
          fbOk: "Good eye!",
          fbBad: "Remember Lesson 6.",
          fbText: "<b>Do you…?</b> – <b>No, I don’t.</b> <b>I wear</b> a vyshyvanka. A vyshyvanka is a Ukrainian <b>shirt</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about clothes for every season and say what people are wearing now.",
        learned: [
          "Name clothes for every season.",
          "Use trousers are and a pair of.",
          "Say what you usually wear and what you are wearing now.",
          "Say why you choose your clothes: because it’s cold."
        ]
      }
    }
  ]
});
