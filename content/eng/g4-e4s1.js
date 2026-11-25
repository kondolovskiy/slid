/* Слід · Англійська мова, 4 клас — «Me, my family and friends: where we live» (e4s1)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Я, моя родина і друзі — місцепроживання,
   населені пункти» (PDF с. 62); граматика — ’s, a/an with jobs (інвентар 3 кл., с. 62; a/an with jobs — і 4 кл., с. 63); to be, have got — повторення за content/eng/plan.js;
   функції — привітатися, попрощатися, представити себе (с. 62–63); бланк з ім'ям, адресою, віком, національністю (A1, с. 54):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g4-e4s1.md, «Нотатки агента»).
   Статус: verified (verifier-e4s1, reports/verify/e4s1.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s1",
  grade: 4,
  weeks: [1, 5],
  title: "Me, my family and friends: where we live",
  why: "To tell people about your family and friends. And to say where you live: in a city, a town or a village.",
  meta: { author: "writer-e4s1", created: "2026-11-19", factcheck: "verifier-e4s1 (reports/verify/e4s1.md)", teacher: null },
  badges: [
    { id: "e4s1boss", name: "Penfriend club", icon: "trophy", desc: "Finish the final lesson “Me, my family and friends: where we live”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s1l1",
      title: "Hello again!",
      short: "Greetings",
      icon: "voice",
      status: "verified",
      why: "You meet new people every day. Say hello and goodbye the right way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who is new in the chat?",
          body: `<p class="lead">It’s September. Oksana’s English club has an online chat. It’s with a school in England.</p><p><b>Ms Kravets:</b> Good afternoon, everyone!<br><b>Emma:</b> Hi! I’m Emma. I’m ten. I’m from England.<br><b>Oksana:</b> Hello, Emma! I’m Oksana. Nice to meet you!</p><p>How do the children say hello?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>It’s 3 pm. Oksana meets her teacher. What does she say?</p>`,
          opts: [
            "Good morning!",
            "Good afternoon!",
            "Good night!"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "At 3 pm we say <b>Good afternoon!</b> The next screen shows each greeting."
        },
        {
          type: "info",
          title: "Hello and goodbye",
          body: `<p><b>Hello:</b></p><ul><li>Hello! Hi!</li><li>Good morning! <i>(before 12 o’clock)</i></li><li>Good afternoon! <i>(from 12 to 6 pm)</i></li><li>Good evening! <i>(after 6 pm)</i></li></ul><p><b>Goodbye:</b></p><ul><li>Goodbye! Bye! See you!</li><li>Good night! <i>(before bed)</i></li></ul><p>Meet a new friend? Say <b>Nice to meet you!</b></p><p>The <u>underlined</u> part is strong: hel<u>lo</u>, good<u>bye</u>, after<u>noon</u>. It is <b>stressed</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the words.",
          body: `<p>Is it hello or goodbye?</p>`,
          bins: ["Hello", "Goodbye"],
          items: [
            ["Hi!", 0],
            ["Good morning!", 0],
            ["Good evening!", 0],
            ["Bye!", 1],
            ["See you!", 1],
            ["Good night!", 1]
          ],
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "Hello words: <b>Hi</b>, <b>Good morning</b>, <b>Good evening</b>. Goodbye words: <b>Bye</b>, <b>See you</b>, <b>Good night</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>It’s 7 pm. Grandma comes to visit. What do you say?</p>`,
          opts: [
            "Good night, Grandma!",
            "Good evening, Grandma!",
            "Good morning, Grandma!"
          ],
          correct: 1,
          hint: "Is Grandma coming or going?",
          fbOk: "Right.",
          fbBad: "Look at the time: 7 pm.",
          fbText: "At 7 pm we say <b>Good evening!</b> Grandma is coming, so we say hello. <b>Good night!</b> is for goodbye."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["hel|+lo", "good|+bye", "af|ter|+noon"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "hel<u>lo</u>, good<u>bye</u>, after<u>noon</u>. The strong part is at the end."
        },
        {
          type: "info",
          title: "I am, she is, we are",
          body: `<p><b>I am</b> Oksana. <b>She is</b> Emma. <b>We are</b> friends.</p><p>We often write the short form:</p><ul><li>I am → <b>I’m</b></li><li>you are → <b>you’re</b></li><li>he is, she is, it is → <b>he’s, she’s, it’s</b></li><li>we are, they are → <b>we’re, they’re</b></li></ul><p><b>Are you</b> ten? – Yes, I <b>am</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes to the chat.</p>`,
          text: "Hi! I {*am|is|are} Andrii. I {*am|is|are} from Kyiv. My sister Sofiia {am|*is|are} seven. We {am|is|*are} in the English club.",
          hint: "Who is it: I, she or we?",
          fbOk: "Exactly.",
          fbBad: "Check the list: I, she, we.",
          fbText: "<b>I am</b> Andrii. Sofiia is one girl: <b>she is</b> seven. Andrii and Sofiia are two: <b>we are</b>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>It’s 4 pm. Emma writes to Oksana.</p>`,
          text: "Good {*afternoon|morning|evening}, Oksana! I {*am|is|are} Emma. My brother Tom {am|*is|are} eight. We {am|is|*are} from a small town. {*Bye|Hi}!",
          hint: "4 pm: is it morning, afternoon or evening?",
          fbOk: "Good eye!",
          fbBad: "Read the message again.",
          fbText: "At 4 pm, it’s <b>Good afternoon</b>. <b>I am</b> Emma. Tom <b>is</b> eight. <b>We are</b> from a town. A message ends with <b>Bye!</b>"
        }
      ],
      outro: {
        text: "We say hello and goodbye in different ways. I’m, she’s and we’re help us talk about people.",
        learned: [
          "Say hello and goodbye at different times of the day.",
          "Say who you are: I’m Oksana. I’m ten.",
          "Use am, is and are."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s1l2",
      title: "My family: who is who?",
      short: "Family",
      icon: "users",
      status: "verified",
      why: "Tell a new friend about your family. Ask about their family too.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Who is Dmytro?",
          body: `<p class="lead">Oksana writes to Emma about her family.</p><p><i>This is my family. I’ve got a brother, Dmytro. He’s six. I haven’t got a sister. My mum’s name is Olena. My grandma and grandad live with us. Have you got a brother?</i></p><p>Who is who in Oksana’s family?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “I’ve got a brother, Dmytro. He’s six.”</p><p>Who is Dmytro?</p>`,
          opts: [
            "Oksana’s dad",
            "Oksana’s friend",
            "Oksana’s brother"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Read Oksana’s words again.",
          fbText: "Oksana writes: “I’ve got a <b>brother</b>, Dmytro.” He’s six. He is not her dad."
        },
        {
          type: "info",
          title: "My family",
          body: `<p>Oksana’s <b>mum</b> is Olena. Her <b>dad</b> is Petro. Dmytro is her <b>brother</b>.</p><ul><li><b>grandma</b> – mum’s or dad’s mum</li><li><b>grandad</b> – mum’s or dad’s dad</li><li><b>aunt</b> – mum’s or dad’s sister</li><li><b>uncle</b> – mum’s or dad’s brother</li><li><b>cousin</b> – your aunt’s or uncle’s child</li></ul><p><b>’s</b>: <b>Oksana’s</b> brother, <b>mum’s</b> sister.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Ivan is Olena’s brother. Olena is Oksana’s mum.</p><p>Who is Ivan for Oksana?</p>`,
          opts: [
            "her cousin",
            "her uncle",
            "her grandad"
          ],
          correct: 1,
          hint: "Find “mum’s brother” in the list.",
          fbOk: "Right.",
          fbBad: "Ivan is mum’s brother.",
          fbText: "Mum’s brother is your <b>uncle</b>. A cousin is your uncle’s child. A grandad is mum’s or dad’s dad."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Nadiia is Petro’s sister. Petro is Oksana’s dad.</p>`,
          before: "Nadiia is Oksana’s",
          after: ".",
          answer: ["aunt", "auntie", "aunty"],
          hint: "Dad’s sister is your …",
          fbOk: "Well done!",
          fbBad: "Look at the list: dad’s sister.",
          fbText: "Dad’s sister is your <b>aunt</b>. Dad’s brother is your uncle."
        },
        {
          type: "info",
          title: "I’ve got a brother",
          body: `<p><b>I’ve got</b> a brother. <b>She’s got</b> a cat.</p><ul><li>I, you, we, they → <b>have got</b> = <b>’ve got</b></li><li>he, she, it → <b>has got</b> = <b>’s got</b></li><li>not → <b>haven’t got</b>, <b>hasn’t got</b></li></ul><p><b>Have</b> you <b>got</b> a sister?<br>– Yes, I <b>have</b>. / No, I <b>haven’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Dmytro {*has|have} got a red bike. Oksana and Dmytro {has|*have} got two cousins. {*Have|Has} you got a dog? – No, I {*haven’t|hasn’t}.",
          hint: "Who is it: he, they or you?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: he or they?",
          fbText: "Dmytro is <b>he</b>: he <b>has</b> got. Oksana and Dmytro are <b>they</b>: they <b>have</b> got. With <b>you</b> and <b>I</b>: <b>Have</b> you got…? – No, I <b>haven’t</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Have you got a sister?”</p><p>Oksana hasn’t got a sister. What does she write?</p>`,
          opts: [
            "No, I haven’t.",
            "No, I haven’t got.",
            "No, I’m not."
          ],
          correct: 0,
          fbOk: "Good eye!",
          fbBad: "Look at the short answers again.",
          fbText: "The short answer is <b>No, I haven’t.</b> There is no <i>got</i> at the end. <i>No, I’m not</i> answers <i>Are you…?</i>"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back.</p>`,
          text: "I {*have|has} got a big family. My mum’s sister is my {*aunt|uncle|cousin}, Lucy. She {have|*has} got a little boy, Jack. Jack is my {*cousin|brother|uncle}. My grandad {have|*has} got a dog.",
          hint: "Jack is Aunt Lucy’s child. Look at the list.",
          fbOk: "Well done!",
          fbBad: "Who is your aunt’s child?",
          fbText: "Mum’s sister is your <b>aunt</b>. Your aunt’s child is your <b>cousin</b>. <b>I have</b> got. <b>She has</b> got. My grandad <b>has</b> got."
        }
      ],
      outro: {
        text: "Family words help us talk about our family. We say I’ve got and she’s got.",
        learned: [
          "Say who is who in a family.",
          "Use ’s: Oksana’s brother, mum’s sister.",
          "Use have got and has got.",
          "Answer: Yes, I have. / No, I haven’t."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s1l3",
      title: "Jobs: a doctor, an engineer",
      short: "Jobs",
      icon: "user",
      status: "verified",
      why: "Everyone in your family has a job. Tell your friends about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What do they do?",
          body: `<p class="lead">Andrii writes to Emma about his family.</p><p><i>My mum is a doctor. She works in a hospital. My dad is an engineer. He builds bridges. And my grandma is a teacher.</i></p><p>Look: <b>a</b> doctor, but <b>an</b> engineer. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s aunt paints pictures. Which sentence is correct?</p>`,
          opts: [
            "She is an artist.",
            "She is a artist.",
            "She is artist."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>an artist</b>. Why <b>an</b>? You can find out soon."
        },
        {
          type: "info",
          title: "Jobs",
          body: `<ul><li>a <b><u>doc</u>tor</b> – works in a hospital</li><li>a <b><u>teach</u>er</b> – works at a school</li><li>a <b><u>farm</u>er</b> – works on a farm</li><li>a <b><u>driv</u>er</b> – drives a bus</li><li>a <b>cook</b> – cooks food</li><li>a <b><u>pi</u>lot</b> – flies planes</li><li>an <b>engi<u>neer</u></b> – builds bridges and machines</li><li>an <b><u>art</u>ist</b> – paints pictures</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mr Koval works on a farm. What is his job?</p>`,
          opts: [
            "He’s a driver.",
            "He’s a cook.",
            "He’s a farmer."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Where does Mr Koval work?",
          fbText: "A <b>farmer</b> works on a farm. A driver drives a bus. A cook cooks food."
        },
        {
          type: "info",
          title: "A or an?",
          body: `<ul><li><b>a</b> doctor, <b>a</b> teacher, <b>a</b> pilot</li><li><b>an</b> engineer, <b>an</b> artist, <b>an</b> English teacher</li></ul><p>The sounds <i>a, e, i, o, u</i> are <b>vowels</b>. Before a vowel sound, we say <b>an</b>.</p><p>With jobs, we say <b>a</b> or <b>an</b>.<br>She is <b>a</b> doctor. Not: <s>She is doctor.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "My grandma is {*a|an} teacher. My uncle is {a|*an} engineer. Aunt Iryna is {a|*an} artist. Her friend is {*a|an} pilot.",
          hint: "What sound starts the job word? Is it a vowel?",
          fbOk: "Exactly.",
          fbBad: "Is the first sound a vowel?",
          fbText: "<b>Engineer</b> and <b>artist</b> start with a vowel sound. So we say <b>an</b>. <b>Teacher</b> and <b>pilot</b> start with <i>t</i> and <i>p</i>. So we say <b>a</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+doc|tor", "en|gi|+neer", "+art|ist", "+farm|er"],
          fbOk: "Yes!",
          fbBad: "Look at the job list again.",
          fbText: "<u>doc</u>tor, <u>art</u>ist, <u>farm</u>er: stress at the start. engi<u>neer</u>: stress at the end."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mrs Hrytsenko flies planes.</p>`,
          before: "She is a",
          after: ".",
          answer: "pilot",
          hint: "Look at the job list: who flies planes?",
          fbOk: "Well done!",
          fbBad: "Who flies planes?",
          fbText: "A <b>pilot</b> flies planes."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "My uncle is [an] farmer. My mum is a doctor. My aunt is an artist.",
          hint: "Check a and an. What sound starts each job?",
          fbOk: "Good eye!",
          fbBad: "Check each a and an.",
          fbText: "<b>Farmer</b> starts with <i>f</i>, not a vowel. So it’s <b>a farmer</b>. <b>An artist</b> is correct."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her family.</p>`,
          text: "My mum is {*an|a} engineer. She builds machines. My dad works on a farm. He is {*a farmer|an farmer|a pilot}. My grandad cooks food in a café. He is {*a cook|an cook|a driver}.",
          fbOk: "Exactly.",
          fbBad: "Check the job and a or an.",
          fbText: "<b>An engineer</b>: a vowel sound. Dad works on a farm: <b>a farmer</b>. Grandad cooks food: <b>a cook</b>."
        }
      ],
      outro: {
        text: "With jobs we say a or an: a doctor, an engineer. Before a vowel sound, it’s an.",
        learned: [
          "Name jobs: a doctor, a teacher, an engineer.",
          "Say what people do: She works in a hospital.",
          "Use a and an with jobs."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s1l4",
      title: "Cities, towns and villages",
      short: "Places",
      icon: "city",
      status: "verified",
      why: "Do you live in a city, a town or a village? Tell your friends about your place.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Where do they live?",
          body: `<p class="lead">Three penfriends write about their homes.</p><p><b>Andrii:</b> I live in Kyiv. It’s a very big city.<br><b>Emma:</b> I live in a small town in England.<br><b>Oksana:</b> I live in a village near Poltava. It’s small and green.</p><p>City, town or village: what is different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which place is small: a city, a town or a village?</p>`,
          opts: [
            "a city",
            "a town",
            "a village"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "A <b>village</b> is small. A town is not very big. A city is very big."
        },
        {
          type: "info",
          title: "A village, a town, a city",
          body: `<ul><li>a <b>village</b> – small: houses, fields and farms</li><li>a <b>town</b> – not very big: streets, shops, a park</li><li>a <b>city</b> – very big: lots of streets, buses and museums</li></ul><p>Kyiv, Lviv and London are cities.</p><p><b>near</b> Poltava = not far from Poltava</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Yurii: “My home is in a small place. There are fields and farms. There is one shop.”</p><p>Where does Yurii live?</p>`,
          opts: [
            "in a city",
            "in a village",
            "in a town"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Small, with fields and farms: what is it?",
          fbText: "Small, with fields and farms: it’s a <b>village</b>. A city is very big."
        },
        {
          type: "multi",
          sk: "vocab",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are about a city?</p>`,
          opts: [
            "It’s very big.",
            "It’s got fields and farms.",
            "It’s got lots of streets and buses.",
            "It’s very small."
          ],
          correct: [0, 2],
          hint: "What is a city like? Look at the list.",
          fbOk: "Well done!",
          fbBad: "Is a city big or small?",
          fbText: "A city is <b>very big</b>. It has got <b>lots of streets and buses</b>. Fields and farms are in a village."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Kyiv is a very big {*city|village}. Lviv is a {*city|village} too. It has got lots of streets and museums. Oksana’s {*village|city} has got one shop and lots of fields.",
          fbOk: "Exactly.",
          fbBad: "Big with museums, or small with fields?",
          fbText: "Kyiv and Lviv are very big. They have got museums. They are <b>cities</b>. One shop and fields: it’s a <b>village</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s small. It has got houses, fields and farms.</p>`,
          before: "It’s a",
          after: ".",
          answer: "village",
          hint: "Look at the list: small, with fields.",
          fbOk: "Yes!",
          fbBad: "Is it big or small?",
          fbText: "Small, with houses, fields and farms: a <b>village</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I live in a village near Poltava. Poltava is a city. It’s not far from my village. My aunt lives there. On Saturdays we go to Poltava by bus.</i></p><p>Where does Oksana’s aunt live?</p>`,
          opts: [
            "in Poltava",
            "in Oksana’s village",
            "in Kyiv"
          ],
          correct: 0,
          hint: "Where is “there”? Look at the sentence before.",
          fbOk: "Good eye!",
          fbBad: "Read about Poltava again.",
          fbText: "“Poltava is a city… My aunt lives <b>there</b>.” <i>There</i> means in Poltava. Oksana lives in a village <b>near</b> Poltava."
        }
      ],
      outro: {
        text: "A village is small, a town is not very big, and a city is very big.",
        learned: [
          "Name places: a city, a town, a village.",
          "Say what a place has got: fields, shops, museums.",
          "Read a short text about a place."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s1l5",
      title: "Where do you live?",
      short: "Addresses",
      icon: "home",
      status: "verified",
      why: "Your friend wants to send you a postcard. Tell them where you live.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Where can Emma send a postcard?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>Hi Oksana! I want to send you a postcard. Where do you live? What’s your address?</i></p><p><b>Oksana:</b> <i>I live in Zelena Dolyna. It’s a village near Poltava.</i></p><p>How do we write an address in English?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "write",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Where is the country in an English address?</p>`,
          opts: [
            "at the start",
            "in the middle",
            "at the end"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The country is <b>at the end</b>. Look at Oksana’s address on the next screen."
        },
        {
          type: "info",
          title: "An address",
          body: `<p>Emma writes on the postcard:</p><p><b>Oksana Melnyk</b><br>7 Sadova Street<br>Zelena Dolyna<br>Poltava region<br>Ukraine</p><p>Name → number and street → village, town or city → region → country.</p><p><b>What’s your address?</b><br>– It’s 7 Sadova Street, Zelena Dolyna.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "write",
          title: "Choose the correct answer.",
          body: `<p>Which address is in the right order?</p>`,
          opts: [
            "Ukraine, Kyiv, 25 Lisova Street, Andrii Tkachenko",
            "Andrii Tkachenko, Kyiv, Ukraine, 25 Lisova Street",
            "Andrii Tkachenko, 25 Lisova Street, Kyiv, Ukraine"
          ],
          correct: 2,
          hint: "What comes after the name? And what is at the end?",
          fbOk: "Right.",
          fbBad: "Look at Oksana’s address again.",
          fbText: "First the name. Then the number and the street. Then the city. The country is at the end."
        },
        {
          type: "info",
          title: "I live, she lives",
          body: `<p>I <b>live</b> in Kyiv. Emma <b>lives</b> in England.</p><ul><li>I, you, we, they → <b>live</b></li><li>he, she → <b>lives</b></li></ul><p><b>Where do</b> you live? – I live in Lviv.<br><b>Where does</b> she live? – She lives in a town.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Andrii {*lives|live} in Kyiv. I {*live|lives} in a village. Where {*does|do} Emma live? She {*lives|live} in a town in England. Where {*do|does} you live?",
          hint: "Is it he or she? Then add -s.",
          fbOk: "Exactly.",
          fbBad: "Look at the list: I or she?",
          fbText: "<b>He</b>, <b>she</b>: Andrii <b>lives</b>. <b>Where does</b> Emma live? <b>I</b>, <b>you</b>: I <b>live</b>. <b>Where do</b> you live?"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Where does Mariia live?</p>`,
          opts: [
            "She live in Kharkiv.",
            "She lives in Kharkiv.",
            "She is live in Kharkiv."
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Look at the list: he, she.",
          fbText: "With <b>she</b> we add <b>-s</b>: she <b>lives</b>. We don’t put <i>is</i> before <i>live</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma asks Andrii.</p>`,
          before: "What’s your",
          after: "? – It’s 25 Lisova Street, Kyiv.",
          answer: "address",
          fbOk: "Well done!",
          fbBad: "A number and a street: what is it?",
          fbText: "Number, street, city: it’s an <b>address</b>."
        },
        {
          type: "order",
          sk: "func",
          eyebrow: "Final",
          title: "Put the sentences in order.",
          body: `<p>Tom and Mariia chat for the first time.</p>`,
          items: [
            "Tom: Hi! I’m Tom. What’s your name?",
            "Mariia: I’m Mariia. Nice to meet you!",
            "Tom: Nice to meet you too! Where do you live?",
            "Mariia: I live in Kharkiv. And you?",
            "Tom: I live in a town in England."
          ],
          shuffle: [3, 0, 4, 1, 2],
          hint: "Start with hello. A question comes before its answer.",
          fbOk: "Good eye!",
          fbBad: "Find the question for each answer.",
          fbText: "Tom says hello and asks her name. Mariia says “Nice to meet you!” Tom asks: “Where do you live?” Mariia answers. Then she asks Tom."
        }
      ],
      outro: {
        text: "Ask: “Where do you live? What’s your address?” In an address, the country is at the end.",
        learned: [
          "Ask and say where people live.",
          "Use live and lives.",
          "Write an address in the right order."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s1l6",
      title: "About me: a form",
      short: "A form",
      icon: "book",
      status: "verified",
      why: "Clubs, schools and libraries ask you to fill in a form. Do it in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Can you fill in a form?",
          body: `<p class="lead">The penfriend club has a form for new members. Andrii fills it in.</p><p>First name: <b>Andrii</b><br>Surname: <b>Tkachenko</b><br>Age: <b>10</b><br>Nationality: <b>Ukrainian</b><br>Address: <b>25 Lisova Street, Kyiv, Ukraine</b></p><p>What does each line mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "write",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii Tkachenko: which is his surname?</p>`,
          opts: [
            "Andrii",
            "Tkachenko",
            "Kyiv"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "His surname is <b>Tkachenko</b>. It’s his family name. Andrii is his first name."
        },
        {
          type: "info",
          title: "A form",
          body: `<ul><li><b>First name</b> – your name: Andrii</li><li><b><u>Sur</u>name</b> – your family name: Tkachenko</li><li><b>Age</b> – how old you are: 10</li><li><b>Nation<u>al</u>ity</b> – Ukrainian</li><li><b>Address</b> – number, street, city, country</li></ul><p>I’m from <b>Ukraine</b>. I’m <b>U<u>krai</u>nian</b>.<br>Emma is from <b>England</b>. She’s <b>English</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Emma is from England. What is her nationality?</p>`,
          opts: [
            "England",
            "English",
            "Ukrainian"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the list again.",
          fbText: "Emma is from <b>England</b>, so she is <b>English</b>. Oksana is from Ukraine, so she is Ukrainian."
        },
        {
          type: "info",
          title: "Capital letters",
          body: `<p>These words start with a <b>capital letter</b>:</p><ul><li>names: <b>O</b>ksana <b>M</b>elnyk</li><li>places: <b>K</b>yiv, <b>P</b>oltava, <b>U</b>kraine</li><li>nationalities: <b>U</b>krainian, <b>E</b>nglish</li><li>the word <b>I</b>: Emma and <b>I</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "write",
          title: "Find the words that need a capital letter.",
          text: "Hi! My name is [mariia] [koval]. I live in [kharkiv]. It is a big city. I am [ukrainian].",
          hint: "Find a name, a place and a nationality.",
          fbOk: "Well done!",
          fbBad: "Check names, places and nationalities.",
          fbText: "<b>Mariia Koval</b> is a name. <b>Kharkiv</b> is a place. <b>Ukrainian</b> is a nationality. They need a capital letter. <i>city</i> does not."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sur|name", "U|+krai|ni|an", "na|tion|+al|i|ty"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>Sur</u>name, U<u>krai</u>nian, nation<u>al</u>ity: the <u>underlined</u> part is strong."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the word.",
          body: `<p>Oksana is from Ukraine. Write her nationality with a capital letter.</p>`,
          before: "Nationality:",
          answer: "Ukrainian",
          keepCase: true,
          hint: "From Ukraine: I’m …",
          fbOk: "Exactly.",
          fbBad: "Check the capital letter and the spelling.",
          fbText: "From Ukraine: <b>Ukrainian</b>. Nationalities start with a capital letter."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to the club.</p>`,
          text: "My {*first name|surname} is Oksana. My {first name|*surname} is Melnyk. I’m from {*Ukraine|Ukrainian}. I’m {Ukraine|*Ukrainian}. I live in a {*village|city} near Poltava.",
          hint: "Which is the family name? Which is the country?",
          fbOk: "Well done!",
          fbBad: "Look at the form list again.",
          fbText: "Oksana is her <b>first name</b>. Melnyk is her <b>surname</b>. I’m from <b>Ukraine</b> (a country). I’m <b>Ukrainian</b> (a nationality). Oksana lives in a <b>village</b>."
        }
      ],
      outro: {
        text: "A form asks for your first name, surname, age, nationality and address. Names, places and nationalities start with a capital letter.",
        learned: [
          "Fill in a form about yourself.",
          "Say your nationality: I’m Ukrainian.",
          "Write names, places and nationalities with a capital letter."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s1l7",
      title: "Welcome to the club!",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the penfriend club?",
          body: `<p class="lead">Today you help Ms Kravets at the penfriend club.</p><p>A new member, Taras, writes to the club. Read his messages and check his form. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>It’s 7 pm. Taras joins the chat.</p>`,
          text: "Taras: Good {*evening|night}, everyone! I {*am|is|are} Taras. Ms Kravets: Hi, Taras! {*Are|Is|Am} you from Lviv? Taras: Yes, I {*am|is|are}.",
          pre: "e4s1l1",
          hint: "Taras says hello at 7 pm. Is it hello or goodbye?",
          fbOk: "Yes!",
          fbBad: "Check the time and the greetings list.",
          fbText: "At 7 pm, say hello with <b>Good evening!</b> Good night is for goodbye. <b>I am</b> Taras. <b>Are you</b> from Lviv? – Yes, I <b>am</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Write the word.",
          body: `<p>Taras: “Roman is my dad’s brother. He has got a little girl, Marta.”</p>`,
          before: "Marta is Taras’s",
          after: ".",
          answer: "cousin",
          pre: "e4s1l2",
          hint: "Roman is Taras’s uncle. Who is your uncle’s child?",
          fbOk: "Well done!",
          fbBad: "Who is your uncle’s child?",
          fbText: "Dad’s brother is your uncle. Your uncle’s child is your <b>cousin</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his family.</p>`,
          text: "My mum is {*an|a} artist. She paints pictures. My dad works in a hospital. He is {*a doctor|an doctor|a pilot}.",
          pre: "e4s1l3",
          fbOk: "Exactly.",
          fbBad: "Check the job and a or an.",
          fbText: "<b>An artist</b>: a vowel sound at the start. Dad works in a hospital: <b>a doctor</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 4",
          title: "Read and choose.",
          body: `<p>Taras: “I live in Lviv. It’s very big. It has got lots of streets, buses and museums.”</p><p>What is Lviv?</p>`,
          opts: [
            "a village",
            "a town",
            "a city"
          ],
          correct: 2,
          pre: "e4s1l4",
          fbOk: "Right.",
          fbBad: "Very big with lots of streets: what is it?",
          fbText: "Very big, with lots of streets and museums: a <b>city</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>Taras asks about Emma.</p>`,
          before: "Where does Emma live? – She",
          after: "in a town in England.",
          answer: "lives",
          pre: "e4s1l5",
          fbOk: "Good eye!",
          fbBad: "With she, what do we add?",
          fbText: "With <b>she</b>, add <b>-s</b>: she <b>lives</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Check Taras’s form.</p>`,
          text: "{*First name|Surname|Address}: Taras. {*Surname|First name|Age}: Koval. {*Nationality|Surname|Address}: Ukrainian. {*Address|Age|Nationality}: 12 Zelena Street, Lviv, Ukraine.",
          pre: "e4s1l6",
          hint: "Ukrainian is not a name. What is it?",
          fbOk: "Well done!",
          fbBad: "Check each line again.",
          fbText: "Taras is his <b>first name</b>. Koval is his <b>surname</b>. Ukrainian is a <b>nationality</b>. Number, street, city: an <b>address</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can say hello, talk about your family and say where you live.",
        learned: [
          "Say hello and say who you are.",
          "Talk about your family and their jobs.",
          "Say where you live and write your address.",
          "Fill in a form with capital letters."
        ]
      }
    }
  ]
});
