/* Слід · Англійська мова, 6 клас — «Describing people» (e6s1)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Я, моя родина, мої друзі» — зовнішність; риси характеру (с. 20, розд. 4.2.2); функції — описувати, характеризувати;
   граматика A2 (с. 21–22, розд. 4.4): Adjectives — with ‘be’ and linking verbs (look + adjective), modifying with degree adverbs
   (very, quite, really); Nouns — noun phrases with adjectives (long dark hair); Preposition — with / without; Clauses — comparative:
   be like + noun. What is she like? — розширення e5s1l6 (content/eng/plan.js, reports/verify/plan-eng-g6.md):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Порядок прикметників — лише мінімум «довжина/розмір → колір» (plan-eng-g6 §4 п. 2). too — у e6s2.
   Герої — та сама серія, що в 4–5 кл., на два роки старші. Зовнішність героїв уперше задано тут (канон — NOTE (герої) у inbox,
   задача write-eng-g6-e6s1). Нові герої: Orest (новий однокласник Тараса, Lviv), Roksolana (нова однокласниця Mariia, Kharkiv),
   Ruby (нова подруга Emma, England).
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги, герої й малюнки — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g6-e6s1.md, «Нотатки агента»).
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s1",
  grade: 6,
  weeks: [1, 4],
  title: "Describing people",
  why: "To say what people look like. And to say what they are like: kind, friendly or shy.",
  requires: ["e5s1l6"],
  meta: { author: "writer-e6s1", created: "2026-11-20", factcheck: "self", teacher: null },
  credits: [
    ["Portraits and hair drawings for the section “Describing people” (img/eng/e6s1/*.svg)", "Slid (writer-e6s1)", "own work, no third-party material", "https://github.com/kondolovskiy/slid"]
  ],
  badges: [
    { id: "e6s1boss", name: "People reporter", icon: "trophy", desc: "Finish the final lesson “Describing people”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s1l1",
      title: "What does he look like? Tall or short?",
      short: "Look like",
      icon: "user",
      status: "draft",
      why: "Friends often ask about new people. Say what a person looks like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who is the new boy?",
          body: `<p class="lead">It’s September. Taras writes to the English club.</p><p><b>Taras:</b> There’s a new boy in my class. His name is Orest.<br><b>Mariia:</b> What does he look like?<br><b>Taras:</b> He’s tall. He’s got short dark hair and brown eyes.</p><p>What does Mariia want to know?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia asks: “What does he look like?”</p><p>What does she want to know?</p>`,
          opts: [
            "what Orest likes",
            "Orest’s hair, eyes and how tall he is",
            "where Orest lives"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>What does he look like?</b> asks about his hair, his eyes, tall or short. <i>What does he like?</i> asks about his hobbies."
        },
        {
          type: "info",
          title: "What does he look like?",
          body: `<p><b>What does</b> he <b>look like</b>? → hair, eyes, tall or short</p><ul><li>He’s <b>tall</b>. ↔ He’s <b>short</b>.</li><li>She’s got <b>long</b> hair. ↔ He’s got <b>short</b> hair.</li><li>She’s got <b>blue</b> / <b>brown</b> / <b>green</b> eyes.</li></ul><p><b>What does</b> he <b>like</b>? → his hobbies. It’s a different question!</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Emma is the tallest girl in her class.</p><p>What does Emma look like?</p>`,
          opts: [
            "She’s short.",
            "She’s tall.",
            "She likes swimming."
          ],
          correct: 1,
          hint: "The tallest girl: tall or short?",
          fbOk: "Right.",
          fbBad: "Emma is the tallest girl in her class.",
          fbText: "Emma is the tallest girl, so <b>she’s tall</b>. <i>She likes swimming</i> answers <i>What does she like?</i>"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia asks Taras about Orest again.</p>`,
          text: "Mariia: What {*does|do} Orest look {*like|likes}? Taras: He’s {*tall|long}. He’s got short dark {*hair|eyes} and brown eyes.",
          hint: "Orest is he. After does: like or likes?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: What does he look like?",
          fbText: "What <b>does</b> Orest look <b>like</b>? After <i>does</i>, no -s. A person is <b>tall</b>, not <i>long</i>. Hair is short, so: short dark <b>hair</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma wants to know about Orest’s hair and eyes. She asks Taras.</p>`,
          tiles: ["What", "does", "Orest", "look", "like"],
          answer: "What does Orest look like?",
          extra: ["looks"],
          keepCase: true,
          hint: "Start with What. After does: look or looks?",
          fbOk: "Well done!",
          fbBad: "Look at the rule: What does he look like?",
          fbText: "<b>What does Orest look like?</b> After <b>does</b>: <b>look</b>, without -s."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Taras isn’t tall.</p>`,
          before: "He’s",
          after: ".",
          answer: ["short", "small", "little"],
          hint: "What is the opposite of tall?",
          fbOk: "Yes!",
          fbBad: "Not tall: he’s …",
          fbText: "Taras isn’t tall. He’s <b>short</b>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["What does she look like?", "What does she like?", "Is she tall?", "Has she got blue eyes?", "Where does she live?"],
          right: ["She’s got long hair.", "She likes music.", "No, she isn’t.", "Yes, she has.", "In Kharkiv."],
          hint: "Look at the first word of each question.",
          fbOk: "Well done!",
          fbBad: "Is…? – she isn’t. Has…? – she has. Look like and like are different.",
          fbText: "Look like? – <b>She’s got long hair.</b> Like? – <b>She likes music.</b> Is she…? – <b>No, she isn’t.</b> Has she got…? – <b>Yes, she has.</b> Where? – <b>In Kharkiv.</b>"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Emma writes to the club.</p><p><i>My brother Tom and I don’t look the same. I’m tall, and I’ve got long hair and blue eyes. Tom isn’t very tall. He’s got short brown hair and brown eyes.</i></p><p>What does Tom look like?</p>`,
          opts: [
            "He isn’t very tall. He’s got short brown hair.",
            "He’s tall. He’s got blue eyes.",
            "He’s got long hair and blue eyes."
          ],
          correct: 0,
          hint: "Find Tom in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Tom again. Emma is the tall one.",
          fbText: "Tom <b>isn’t very tall</b>. He’s got <b>short brown hair</b> and brown eyes. Emma is tall, with long hair and blue eyes."
        }
      ],
      outro: {
        text: "Ask “What does he look like?” Answer with tall or short, hair and eyes.",
        learned: [
          "Ask: What does she look like?",
          "Say if a person is tall or short.",
          "Say what hair and eyes a person has got."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s1l2",
      title: "Long dark hair and big blue eyes",
      short: "Hair and eyes",
      icon: "eye",
      status: "draft",
      why: "Describe hair and eyes in the right order: long dark hair, big blue eyes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What does Ruby look like?",
          body: `<p class="lead">Emma writes to Oksana about her new friend.</p><p><i>There’s a new girl in my class. Her name is Ruby. She’s got long red hair and big green eyes. She’s really nice!</i></p><p>Long red hair or red long hair? Which word comes first?</p>`,
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
            "She’s got red long hair.",
            "She’s got long red hair.",
            "She’s got hair long red."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>long red hair</b>: first how long, then the colour. The next screen shows the rule."
        },
        {
          type: "info",
          title: "How long? Then the colour",
          body: `<p>First <b>how long</b> or <b>how big</b>. Then the <b>colour</b>. Then <b>hair</b> or <b>eyes</b>.</p><ul><li><b>long</b> + <b>dark</b> → long dark hair</li><li><b>short</b> + <b>fair</b> → short fair hair</li><li><b>big</b> + <b>blue</b> → big blue eyes</li></ul><p><b>fair</b> hair → very light, yellow or gold<br><b>dark</b> hair → black or dark brown</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Straight or curly?",
          img: "img/eng/e6s1/hair.svg",
          fit: true,
          cap: "Two kinds of long dark hair",
          body: `<ul><li><b>straight</b> hair → like a line</li><li><b><u>cur</u>ly</b> hair → lots of small circles</li></ul><p><b>hair</b> → no -s: She’s got long <b>hair</b>.<br>Not: <s>She’s got long hairs.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about Ruby’s family.</p>`,
          text: "Ruby has got {*long red|red long} hair and {*big green|green big} eyes. Her mum has got {*short dark|dark short} {*hair|hairs}.",
          hint: "How long or how big comes first. Then the colour.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: how long, then the colour.",
          fbText: "<b>long red</b> hair, <b>big green</b> eyes, <b>short dark</b> hair: first how long or big, then the colour. <b>hair</b> has no -s."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras writes about his cousin Marta. Her hair is long and fair.</p>`,
          tiles: ["Marta", "has got", "long", "fair", "hair"],
          answer: "Marta has got long fair hair.",
          extra: ["hairs"],
          hint: "How long comes first. Then the colour.",
          fbOk: "Well done!",
          fbBad: "Long, then fair. And hair has no -s.",
          fbText: "<b>Marta has got long fair hair.</b> First how long, then the colour. <i>Hairs</i> is not correct here."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "My little sister Zlata has got long curly [hairs] and big green eyes.",
          hint: "Check each word: hair or eyes?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: hair has no -s.",
          fbText: "We say long curly <b>hair</b>, without -s. <b>Eyes</b> is correct: two eyes."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii’s eyes are the colour of the sky on a sunny day.</p>`,
          before: "He’s got big",
          after: "eyes.",
          answer: ["blue", "light blue"],
          hint: "What colour is the sky on a sunny day?",
          fbOk: "Yes!",
          fbBad: "The sky on a sunny day is …",
          fbText: "The sky on a sunny day is blue. Andrii has got big <b>blue</b> eyes."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p>Emma writes to the club.</p><p><i>Ruby isn’t very tall. She’s got long straight red hair and big green eyes. Her brother is tall. He’s got short curly red hair. Their mum has got short dark hair and brown eyes.</i></p><p>What is true?</p>`,
          opts: [
            "Ruby has got green eyes.",
            "Ruby has got curly hair.",
            "Ruby’s brother is tall.",
            "Ruby’s mum has got red hair."
          ],
          correct: [0, 2],
          hint: "Find Ruby, her brother and her mum in the text.",
          fbOk: "Well done!",
          fbBad: "Read about Ruby’s hair and her mum’s hair again.",
          fbText: "Ruby has got <b>big green eyes</b> and straight hair. Her brother <b>is tall</b> and has got curly hair. Their mum has got dark hair, not red."
        }
      ],
      outro: {
        text: "First how long or big, then the colour: long dark hair, big blue eyes. Hair has no -s.",
        learned: [
          "Describe hair: long, short, straight, curly, dark, fair.",
          "Put words in the right order: long dark hair.",
          "Read a short description of a person."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s1l3",
      title: "A girl with glasses, a man with a beard",
      short: "With, without",
      icon: "users",
      status: "draft",
      why: "Who is who in a photo? Find people with with and without.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who is the man with the beard?",
          body: `<p class="lead">Oksana shows the English club a family photo.</p><p><b>Andrii:</b> Who’s the man with the grey beard?<br><b>Oksana:</b> That’s my grandad, Mykola.<br><b>Andrii:</b> And who’s the boy without a hat?<br><b>Oksana:</b> That’s my brother, Dmytro. He’s eight.</p><p>What do <b>with</b> and <b>without</b> mean here?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The man with the grey beard” – what does it mean?</p>`,
          opts: [
            "The man has got a grey beard.",
            "The man hasn’t got a beard.",
            "The man is next to a beard."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>with</b> a beard → he <b>has got</b> a beard. <b>without</b> a hat → he <b>hasn’t got</b> a hat."
        },
        {
          type: "info",
          title: "With and without",
          img: "img/eng/e6s1/grandad.svg",
          fit: true,
          cap: "Grandad Mykola",
          body: `<ul><li>a man <b>with</b> a <b>beard</b> → he has got a beard</li><li>a boy <b>without</b> a hat → he hasn’t got a hat</li><li>a girl <b>with</b> <b>glasses</b>, a woman <b>with</b> long hair</li></ul><p><b>glasses</b> → always with -es and no a.<br>Not: <s>a girl with a glasses</s></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the pictures.",
          left: ["a girl with long dark hair", "a boy with glasses", "a man with a beard", "a girl with curly hair", "a girl with long fair hair"],
          right: [
            { img: "img/eng/e6s1/oksana.svg", alt: "Oksana: long straight dark hair, brown eyes" },
            { img: "img/eng/e6s1/andrii.svg", alt: "Andrii: short fair hair, glasses" },
            { img: "img/eng/e6s1/grandad.svg", alt: "Grandad Mykola: grey hair, grey beard" },
            { img: "img/eng/e6s1/mariia.svg", alt: "Mariia: short curly brown hair" },
            { img: "img/eng/e6s1/emma.svg", alt: "Emma: long straight fair hair" }
          ],
          hint: "Look at the hair first: long or short, dark or fair, straight or curly.",
          fbOk: "Well done!",
          fbBad: "Check the hair colour and the glasses again.",
          fbText: "Oksana: long dark hair. Andrii: <b>glasses</b>. Grandad: a <b>beard</b>. Mariia: <b>curly</b> hair. Emma: long <b>fair</b> hair."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Grandad has got a grey beard. Dmytro hasn’t got a hat. Andrii has got glasses.</p>`,
          text: "Grandad Mykola is the man {*with|without} a grey beard. Dmytro is the boy {*without|with} a hat. Andrii is the boy {*with|without} glasses.",
          hint: "Has got → with. Hasn’t got → without.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: has got → with, hasn’t got → without.",
          fbText: "Grandad has got a beard: <b>with</b>. Dmytro hasn’t got a hat: <b>without</b>. Andrii has got glasses: <b>with</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii has got glasses. Emma asks: “Which boy is Andrii?”</p>`,
          opts: [
            "He’s the boy with a glasses.",
            "He’s the boy with glasses.",
            "He’s the boy without glasses."
          ],
          correct: 1,
          hint: "Glasses: a or no a?",
          fbOk: "Right.",
          fbBad: "Look at the rule: glasses, no a.",
          fbText: "He’s the boy <b>with glasses</b>. <i>Glasses</i> has no <i>a</i>. Andrii has got glasses, so not <i>without</i>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma looks at a photo of Andrii’s class. A boy has got glasses. What’s his name?</p>`,
          tiles: ["Who", "is", "the boy", "with", "glasses"],
          answer: "Who is the boy with glasses?",
          extra: ["a"],
          keepCase: true,
          hint: "Start with Who. Glasses: a or no a?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: with glasses, without a.",
          fbText: "<b>Who is the boy with glasses?</b> We say <b>with glasses</b>, not <i>with a glasses</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Grandad Mykola has got a beard. Oksana’s dad hasn’t got a beard.</p>`,
          before: "Oksana’s dad is a man",
          after: "a beard.",
          answer: "without",
          hint: "He hasn’t got a beard: with or without?",
          fbOk: "Good eye!",
          fbBad: "Hasn’t got → …",
          fbText: "Dad hasn’t got a beard. He’s a man <b>without</b> a beard."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p>Andrii writes about his school in Kyiv.</p><p><i>Our English teacher is Ms Lysenko. She’s tall, with short grey hair and glasses. Our PE teacher is young. He hasn’t got glasses. He’s got a black beard.</i></p><p>What is true?</p>`,
          opts: [
            "Ms Lysenko has got glasses.",
            "Ms Lysenko has got long hair.",
            "The PE teacher has got a beard.",
            "The PE teacher has got glasses."
          ],
          correct: [0, 2],
          hint: "Find with and without in the text.",
          fbOk: "Well done!",
          fbBad: "Read about the hair, the glasses and the beard again.",
          fbText: "Ms Lysenko is tall, <b>with</b> short grey hair and <b>glasses</b>. The PE teacher is a man <b>without</b> glasses. He’s got a black <b>beard</b>."
        }
      ],
      outro: {
        text: "With = has got. Without = hasn’t got. A girl with glasses, a man without a beard.",
        learned: [
          "Describe people with with and without.",
          "Use glasses and beard correctly.",
          "Find people in a picture from a description."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s1l4",
      title: "What is she like? Kind, friendly, shy",
      short: "Character",
      icon: "star",
      status: "draft",
      why: "People are kind, funny or shy. Learn words to describe a person’s character.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What is Roksolana like?",
          body: `<p class="lead">Mariia writes to the English club.</p><p><b>Mariia:</b> There’s a new girl in my class in Kharkiv. Her name is Roksolana.<br><b>Andrii:</b> What is she like?<br><b>Mariia:</b> She’s friendly and very clever. And she’s polite: she always says please and thank you.</p><p>What does Andrii want to know?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Mariia: “She’s friendly and very clever. And she’s polite.”</p><p>What is Roksolana like?</p>`,
          opts: [
            "She’s friendly and clever.",
            "She’s lazy and shy.",
            "She’s funny and lazy."
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Mariia’s words again.",
          fbText: "Mariia says Roksolana is <b>friendly</b>, <b>clever</b> and <b>polite</b>. That’s her character."
        },
        {
          type: "info",
          title: "Character words",
          body: `<ul><li><b>kind</b> → helps people</li><li><b>po<u>lite</u></b> → says please and thank you</li><li><b><u>clev</u>er</b> → learns new things quickly</li><li><b><u>la</u>zy</b> → doesn’t want to work</li><li><b>shy</b> → doesn’t like talking to new people</li><li><b><u>hon</u>est</b> → always tells the truth: <b>an</b> honest girl</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A polite person", "An honest person", "A shy person", "A lazy person", "A clever person"],
          right: ["says please and thank you.", "always tells the truth.", "doesn’t like talking to new people.", "doesn’t want to work.", "learns new things quickly."],
          hint: "Look at the character words again.",
          fbOk: "Well done!",
          fbBad: "Check the list of character words.",
          fbText: "<b>Polite</b> – please and thank you. <b>Honest</b> – tells the truth. <b>Shy</b> – doesn’t like talking to new people. <b>Lazy</b> – doesn’t want to work. <b>Clever</b> – learns quickly."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["po|+lite", "+hon|est", "+clev|er", "+la|zy"],
          fbOk: "Yes!",
          fbBad: "Look at the character words again.",
          fbText: "po<u>lite</u>: the second part is strong. <u>hon</u>est, <u>clev</u>er, <u>la</u>zy: the first part."
        },
        {
          type: "info",
          title: "Appearance and character",
          body: `<p><b>What does</b> she <b>look like</b>? → her <b>appearance</b><br>– She’s tall. She’s got long dark hair.</p><p><b>What is</b> she <b>like</b>? → usually her <b>character</b><br>– She’s kind and honest.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it about appearance or character?</p>`,
          bins: ["Appearance", "Character"],
          items: [
            ["tall", 0],
            ["curly hair", 0],
            ["glasses", 0],
            ["blue eyes", 0],
            ["kind", 1],
            ["shy", 1],
            ["honest", 1],
            ["lazy", 1]
          ],
          hint: "Can you see it in a photo?",
          fbOk: "Exactly.",
          fbBad: "Appearance: you can see it. Character: how a person is with people.",
          fbText: "Tall, curly hair, glasses, blue eyes – <b>appearance</b>. Kind, shy, honest, lazy – <b>character</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii asks Mariia: “What does Roksolana look like?”</p>`,
          opts: [
            "She’s very polite and clever.",
            "She likes maths.",
            "She’s got long dark hair and blue eyes."
          ],
          correct: 2,
          hint: "Look like: appearance or character?",
          fbOk: "Right.",
          fbBad: "What does she look like? → appearance.",
          fbText: "<b>What does she look like?</b> asks about appearance: <b>long dark hair and blue eyes</b>. <i>Polite and clever</i> is her character."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia always tells the truth.</p>`,
          before: "She’s an",
          after: "girl.",
          answer: "honest",
          hint: "Always tells the truth → …",
          fbOk: "Good eye!",
          fbBad: "Look at the character words: the truth.",
          fbText: "A person who always tells the truth is <b>honest</b>: an honest girl."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes about her friend Danylo.</p>`,
          text: "My friend Danylo is {*shy|lazy}: he doesn’t like talking to new people. But he isn’t {*lazy|honest}: he always does his homework. He’s {*honest|lazy} too: he always tells the truth.",
          hint: "Read the end of each sentence. It explains the word.",
          fbOk: "Well done!",
          fbBad: "Look at the character words again.",
          fbText: "Doesn’t like talking to new people → <b>shy</b>. Always does his homework → he isn’t <b>lazy</b>. Always tells the truth → <b>honest</b>."
        }
      ],
      outro: {
        text: "Ask “What is she like?” about a person’s character: kind, polite, clever, shy, honest.",
        learned: [
          "Name character words: kind, polite, clever, lazy, shy, honest.",
          "Ask and answer: What is she like?",
          "Tell appearance and character apart."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s1l5",
      title: "He looks happy! Very, quite, really",
      short: "Look happy",
      icon: "bulb",
      status: "draft",
      why: "Look at a face and say how a person feels. Say how much with very, quite and really.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "How do they look?",
          body: `<p class="lead">Andrii sends photos from his grandparents’ house in Chernihiv.</p><p><i>Photo 1: Grandad Vasyl looks really happy. He’s winning at chess!<br>Photo 2: Sofiia looks quite tired.<br>Photo 3: Grandma Nina looks very surprised. Look, it’s a cake for her!</i></p><p>We can’t ask them. But we can see their faces.</p>`,
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
            "Grandad looks happy.",
            "Grandad looks like happy.",
            "Grandad looks happily."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "After <b>look</b> we put a word like <b>happy</b> or <b>tired</b>: Grandad <b>looks happy</b>. No <i>like</i>, no <i>-ly</i>."
        },
        {
          type: "info",
          title: "Look + happy, tired, sad",
          body: `<p>We see a face and say how a person feels.</p><ul><li>He <b>looks happy</b>. She <b>looks tired</b>.</li><li><b>look like</b> + a person: She <b>looks like</b> her mum.</li></ul><p>Not: <s>He looks like happy.</s> <s>He looks happily.</s></p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "How do they feel?",
          body: `<ul><li><b><u>an</u>gry</b> → a red face: “Stop it!”</li><li><b>sur<u>prised</u></b> → big eyes: “Oh! Really?”</li><li><b><u>wor</u>ried</b> → thinks: “Is everything OK?”</li><li><b>bored</b> → thinks: “There’s nothing to do.”</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>What do they say? How do they look?</p>`,
          left: ["“Where’s my cat? Is she OK?”", "“There’s nothing on TV. There’s nothing to do.”", "“Oh! A cake? For me?”", "“Who has got my phone? Give it back now!”", "“I want to go to bed.”"],
          right: ["She looks worried.", "He looks bored.", "Grandma looks surprised.", "Dad looks angry.", "Sofiia looks tired."],
          hint: "Look at the feeling words again.",
          fbOk: "Well done!",
          fbBad: "Read each person’s words again.",
          fbText: "Is my cat OK? → <b>worried</b>. Nothing to do → <b>bored</b>. Oh! For me? → <b>surprised</b>. Give it back now! → <b>angry</b>. I want to go to bed → <b>tired</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about Sofiia and Grandad.</p>`,
          text: "Sofiia {*looks|looks like} tired here. She {*looks like|looks} our mum: they’ve both got fair hair and blue eyes. Grandad {*looks|looks like} really happy.",
          hint: "Tired, happy → look. A person → look like.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: look + happy, look like + a person.",
          fbText: "She <b>looks tired</b>. She <b>looks like</b> our mum: a person. Grandad <b>looks</b> really <b>happy</b>."
        },
        {
          type: "info",
          title: "Very, quite, really",
          body: `<ul><li><b>quite</b> tired → a little tired, but not very</li><li><b>very</b> tired = <b>really</b> tired</li></ul><p>Sofiia looks <b>quite</b> tired. She can play one more game.<br>Dad looks <b>very</b> tired. He wants to sleep now.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma is a little tired, but not very. She can watch one more film.</p><p>How does Emma look?</p>`,
          opts: [
            "She looks very tired.",
            "She looks quite tired.",
            "She looks really tired."
          ],
          correct: 1,
          hint: "A little, but not very: which word?",
          fbOk: "Right.",
          fbBad: "Look at the rule: quite = a little, but not very.",
          fbText: "A little tired, but not very → <b>quite tired</b>. <i>Very</i> and <i>really</i> mean more."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Tom says: “There’s nothing to do here. Nothing!”</p>`,
          before: "Tom looks really",
          after: ".",
          answer: "bored",
          hint: "Nothing to do: how does Tom feel?",
          fbOk: "Yes!",
          fbBad: "Look at the feeling words: nothing to do.",
          fbText: "Nothing to do → Tom looks really <b>bored</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Dad is on the sofa. His eyes are closed. Sofiia says to Andrii:</p>`,
          tiles: ["Dad", "looks", "very", "tired"],
          answer: "Dad looks very tired.",
          extra: ["like"],
          hint: "Who? Then looks. Then very + tired.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: look + tired, no like.",
          fbText: "<b>Dad looks very tired.</b> After <b>looks</b>: <b>very tired</b>, without <i>like</i>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Final",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Grandma Nina looks very [happily] in this photo. Sofiia looks quite tired, but she’s happy too.",
          hint: "Check the word after very.",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: look + happy, not -ly.",
          fbText: "Grandma looks very <b>happy</b>, not <i>happily</i>. <b>Looks quite tired</b> is correct."
        }
      ],
      outro: {
        text: "Say how people look: She looks happy. He looks quite tired. They look really surprised.",
        learned: [
          "Say how a person looks: He looks angry.",
          "Use look and look like correctly.",
          "Use very, quite and really: quite means a little."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s1l6",
      title: "She looks like her mum, but she’s like her dad",
      short: "Look like, be like",
      icon: "users",
      status: "draft",
      why: "Who do you look like in your family? And who are you like? Say it in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Who is Zlata like?",
          body: `<p class="lead">Taras writes about his little sister.</p><p><i>This is Zlata. She looks like our mum: she’s got curly dark hair and green eyes. But she’s like our dad: she’s quiet and very honest.</i></p><p>Looks like and is like: what is different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Taras: “She looks like our mum: she’s got curly dark hair and green eyes.”</p><p>Who has got curly dark hair and green eyes?</p>`,
          opts: [
            "Zlata and her mum",
            "Zlata and her dad",
            "Taras and his dad"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Taras’s words again.",
          fbText: "Zlata <b>looks like</b> her mum: they’ve both got curly dark hair and green eyes."
        },
        {
          type: "info",
          title: "Look like, be like",
          body: `<ul><li><b>look like</b> + a person → the same face, hair or eyes<br>Zlata <b>looks like</b> her mum.</li><li><b>be like</b> + a person → often the same character<br>Zlata <b>is like</b> her dad: they’re both quiet.</li></ul><p>Who do you <b>look like</b>? Who <b>are</b> you <b>like</b>?</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Dmytro is funny and kind. His dad is funny and kind too.</p><p>Dmytro … his dad.</p>`,
          opts: [
            "looks like",
            "is like",
            "looks"
          ],
          correct: 1,
          hint: "Funny and kind: the face or the character?",
          fbOk: "Right.",
          fbBad: "Funny and kind is character. Look at the rule.",
          fbText: "Funny and kind is character, so Dmytro <b>is like</b> his dad. <i>Looks like</i> is about the face and hair."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her family.</p>`,
          text: "I {*look like|look} my mum: we’ve both got long dark hair and brown eyes. But I {*am like|look like} my dad: we’re both funny. Dmytro {*looks|looks like} happy in every photo!",
          hint: "Hair and eyes → look like. Funny → be like. Happy → look.",
          fbOk: "Exactly.",
          fbBad: "A person → look like. A word like happy → look.",
          fbText: "I <b>look like</b> my mum: hair and eyes. I <b>am like</b> my dad: we’re both funny. Dmytro <b>looks happy</b>: no <i>like</i> before happy."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma asks Oksana about her family photo. She wants to know about Oksana’s face and hair.</p>`,
          tiles: ["Who", "do", "you", "look like"],
          answer: "Who do you look like?",
          extra: ["does"],
          keepCase: true,
          hint: "Start with Who. You: do or does?",
          fbOk: "Well done!",
          fbBad: "With you: do, not does.",
          fbText: "<b>Who do you look like?</b> With <b>you</b>: <b>do</b>. – I look like my mum."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Zlata is quiet and honest. Her dad is quiet and honest too. Say it with one word.</p>`,
          before: "Zlata is",
          after: "her dad.",
          answer: "like",
          hint: "Look at the rule: be + … + a person.",
          fbOk: "Good eye!",
          fbBad: "The same character: Zlata is … her dad.",
          fbText: "Zlata <b>is like</b> her dad: they’re both quiet and honest."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final · part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Orest. I’m new in Taras’s class in Lviv. I’m tall, and I’ve got short curly dark hair and brown eyes. People say I look like my dad. We’ve both got curly hair!</i></p><p>Who does Orest look like?</p>`,
          opts: [
            "his mum",
            "Taras",
            "his dad"
          ],
          correct: 2,
          hint: "Find look like in the text.",
          fbOk: "Yes!",
          fbBad: "Read the end of the text again.",
          fbText: "Orest <b>looks like his dad</b>: they’ve both got curly hair."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final · part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>But I’m not like my dad. He talks a lot, and he’s very funny. I’m quite shy. I’m like my grandma: we both love books, and we’re both quiet. What about you? Who are you like?</i></p><p>What is true about Orest?</p>`,
          opts: [
            "He’s quite shy.",
            "He talks a lot.",
            "He’s like his grandma.",
            "He looks like his grandma."
          ],
          correct: [0, 2],
          hint: "Find shy and like my grandma in the text.",
          fbOk: "Well done!",
          fbBad: "Who talks a lot: Orest or his dad?",
          fbText: "Orest is <b>quite shy</b>. He <b>is like his grandma</b>: they both love books. His dad talks a lot. The text doesn’t say Orest looks like his grandma."
        }
      ],
      outro: {
        text: "Look like: the same face and hair. Be like: often the same character.",
        learned: [
          "Say who you look like: I look like my mum.",
          "Say who you are like: I’m like my dad.",
          "Read a description of a person and find the details."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s1l7",
      title: "People from the English club",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e6s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the club page?",
          body: `<p class="lead">Ms Kravets makes a page about the English club: “Who are we?”</p><p>Read about the people and help her. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Emma asks Taras: “What does your cousin Marta look like?”</p>`,
          opts: [
            "She likes drawing and music.",
            "She lives in Lviv.",
            "She’s quite tall, and she’s got long fair hair."
          ],
          correct: 2,
          pre: "e6s1l1",
          fbOk: "Right.",
          fbBad: "Look like: hair, eyes, tall or short.",
          fbText: "<b>What does she look like?</b> → <b>She’s quite tall, and she’s got long fair hair.</b> <i>She likes drawing</i> answers <i>What does she like?</i>"
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Put the words in order.",
          body: `<p>Mariia writes about Roksolana’s eyes. They are big and blue.</p>`,
          tiles: ["Roksolana", "has got", "big", "blue", "eyes"],
          answer: "Roksolana has got big blue eyes.",
          extra: ["eye"],
          pre: "e6s1l2",
          fbOk: "Well done!",
          fbBad: "How big comes first. Then the colour.",
          fbText: "<b>Roksolana has got big blue eyes.</b> First how big, then the colour."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Andrii has got glasses. Taras hasn’t got glasses.</p>`,
          text: "In the club photo, Andrii is the boy {*with|without} {*glasses|a glasses}. Taras is the boy {*without|with} glasses.",
          pre: "e6s1l3",
          fbOk: "Exactly.",
          fbBad: "Has got → with. Hasn’t got → without. Glasses: no a.",
          fbText: "Andrii is the boy <b>with glasses</b>, no <i>a</i>. Taras hasn’t got glasses: <b>without</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Orest doesn’t like talking to new people. He always tells the truth.</p><p>What is Orest like?</p>`,
          opts: [
            "He’s lazy and funny.",
            "He’s shy and honest.",
            "He’s polite and lazy."
          ],
          correct: 1,
          pre: "e6s1l4",
          fbOk: "Good eye!",
          fbBad: "Look at the character words again.",
          fbText: "Doesn’t like talking to new people → <b>shy</b>. Always tells the truth → <b>honest</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Ms Kravets writes about the photos. Emma is a little tired, but not very.</p>`,
          text: "Emma {*looks|looks like} {*quite|very} tired. Mariia looks really {*happy|happily}.",
          pre: "e6s1l5",
          fbOk: "Well done!",
          fbBad: "Look + tired. Quite = a little, but not very.",
          fbText: "Emma <b>looks quite tired</b>: a little, but not very. Mariia looks really <b>happy</b>, without -ly."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Mariia and her dad both love funny stories. They’re both friendly too.</p><p>Mariia … her dad.</p>`,
          opts: [
            "is like",
            "looks",
            "look like"
          ],
          correct: 0,
          pre: "e6s1l6",
          fbOk: "Yes!",
          fbBad: "Funny and friendly is character.",
          fbText: "The same character → Mariia <b>is like</b> her dad. <i>Look like</i> is about the face and hair, and Mariia is <i>she</i>: <i>looks</i>."
        }
      ],
      outro: {
        text: "Well done! Now you can say what people look like and what they are like.",
        learned: [
          "Describe a person’s appearance: tall, long dark hair, glasses.",
          "Describe a person’s character: kind, shy, honest.",
          "Say how people look: very, quite, really.",
          "Use look like and be like."
        ]
      }
    }
  ]
});
