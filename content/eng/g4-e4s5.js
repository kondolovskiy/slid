/* Слід · Англійська мова, 4 клас — «Health and hygiene» (e4s5)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Людина — гігієна, стан здоров'я»;
   функції — «розуміти та виконувати прості вказівки/інструкції/команди», «виражати настрій» (PDF с. 63);
   граматика — «‘because’ for causes and reasons» (с. 63); have got — повторення (e4s1l2); imperatives — як функція «вказівки» (с. 63);
   irregular plurals (children, teeth, feet) — наскрізно (reports/verify/plan-eng-g4.md):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Поради про гігієну й здоров'я — лише загальновідомі (мити руки, чистити зуби, пити воду, спати); без медичних порад.
   Форми й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g4-e4s5.md, «Нотатки агента»).
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s5",
  grade: 4,
  weeks: [18, 21],
  title: "Health and hygiene",
  why: "To say how you feel. And to know what helps you stay clean and well.",
  requires: ["e4s1l2"],
  meta: { author: "writer-e4s5", created: "2026-11-19", factcheck: "self", teacher: null },
  badges: [
    { id: "e4s5boss", name: "Health hero", icon: "trophy", desc: "Finish the final lesson “Health and hygiene”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s5l1",
      title: "Keeping clean: wash your hands!",
      short: "Keeping clean",
      icon: "shield",
      status: "draft",
      why: "Clean hands and teeth help you stay well. Learn to say what to do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What does the poster say?",
          body: `<p class="lead">It’s Health Week at Andrii’s school in Kyiv. There is a new poster in his classroom.</p><p><b>KEEP CLEAN!</b><br>Wash your hands with soap and water.<br>Dry your hands with a towel.<br>Brush your teeth in the morning and in the evening.<br>Don’t eat with dirty hands!</p><p>What does the poster tell us to do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii wants to brush his teeth. What does he need?</p>`,
          opts: [
            "a towel",
            "a toothbrush",
            "a comb"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "He needs a <b>toothbrush</b>: tooth + brush. The next screen shows more things."
        },
        {
          type: "info",
          title: "Things for keeping clean",
          body: `<ul><li><b>soap</b> and water – wash your hands</li><li>a <b>towel</b> – dry your hands</li><li>a <b><u>tooth</u>brush</b> and <b><u>tooth</u>paste</b> – brush your teeth</li><li>a <b>comb</b> – comb your hair</li><li>a <b>shower</b> – have a shower</li></ul><p>one <b>tooth</b> → two <b>teeth</b></p><p><b>clean</b> ↔ <b>dirty</b></p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Wash your hands with {*soap|a comb}. Dry your hands with a {*towel|toothbrush}. Brush your teeth with a {*toothbrush|towel}. Comb your hair with a {*comb|towel}.",
          hint: "What do you do with each thing? Look at the list.",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "<b>Soap</b> – wash your hands. A <b>towel</b> – dry them. A <b>toothbrush</b> – brush your teeth. A <b>comb</b> – comb your hair."
        },
        {
          type: "info",
          title: "Wash! Brush! Don’t eat!",
          body: `<p>The poster tells us what to do:</p><ul><li><b>Wash</b> your hands.</li><li><b>Brush</b> your teeth.</li></ul><p>Start with the <b>verb</b>. No <i>you</i>, no <i>-s</i>.</p><p>What not to do: <b>Don’t</b> + verb.</p><ul><li><b>Don’t eat</b> with dirty hands.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Oksana’s brother Dmytro has got dirty hands. It’s time for lunch. What does Mum say?</p>`,
          opts: [
            "Brush your teeth, please!",
            "Don’t wash your hands!",
            "Wash your hands, please!"
          ],
          correct: 2,
          hint: "Dirty hands before lunch: what do they need?",
          fbOk: "Right.",
          fbBad: "Look at Dmytro’s hands.",
          fbText: "Dirty hands need soap and water: <b>Wash your hands!</b> His teeth are not the problem."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Make a line for the poster.</p>`,
          tiles: ["your", "wash", "hands", "with", "soap"],
          extra: ["washes"],
          answer: "Wash your hands with soap.",
          hint: "Start with the verb.",
          fbOk: "Well done!",
          fbBad: "What is the first word?",
          fbText: "<b>Wash</b> your hands with soap. The verb comes first. We don’t say <i>washes</i> here."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Andrii’s sister Sofiia makes a poster. One word is wrong.</p>`,
          text: "Brush your [tooths] every morning. Wash your hands before lunch.",
          hint: "One tooth, two …?",
          fbOk: "Good eye!",
          fbBad: "Look at the list: one tooth, two …?",
          fbText: "One <b>tooth</b>, two <b>teeth</b>. We say: Brush your <b>teeth</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Andrii washes his hands. Now he wants to dry them.</p>`,
          before: "He needs a",
          after: ".",
          answer: "towel",
          hint: "Look at the list: dry your hands.",
          fbOk: "Yes!",
          fbBad: "What do you dry your hands with?",
          fbText: "We dry our hands with a <b>towel</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii makes a poster for little children.</p>`,
          text: "{*Wash|Washes} your hands before lunch. {*Don’t|Doesn’t} eat with dirty hands. Brush your {*teeth|tooths} in the morning and in the evening. Dry your hands with a {*towel|comb}.",
          hint: "Start with the verb. What not to do: Don’t + verb.",
          fbOk: "Well done!",
          fbBad: "Check the verb at the start.",
          fbText: "Start with the verb: <b>Wash</b>, not <i>Washes</i>. What not to do: <b>Don’t</b> eat. One tooth, two <b>teeth</b>. Dry your hands with a <b>towel</b>."
        }
      ],
      outro: {
        text: "To say what to do, start with the verb: Wash your hands! To say what not to do, use Don’t.",
        learned: [
          "Name things for keeping clean: soap, a towel, a toothbrush.",
          "Say what to do: Wash your hands!",
          "Say what not to do: Don’t eat with dirty hands.",
          "Use one tooth, two teeth."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s5l2",
      title: "Stay healthy every day",
      short: "Healthy days",
      icon: "leaf",
      status: "draft",
      why: "Your body needs good food, water, sleep and play. Learn what helps.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What does Emma’s class do?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>We’ve got a Health Week too! Every day we eat fruit and vegetables. We drink water, not cola. We play outside after lunch. Children need lots of sleep, so I go to bed at nine.</i></p><p>What helps us stay healthy?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “We drink water, not cola.”</p><p>What does Emma’s class drink?</p>`,
          opts: [
            "water",
            "cola",
            "juice"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Emma’s words again.",
          fbText: "Emma writes: “We drink <b>water</b>, not cola.” There is no juice in her message."
        },
        {
          type: "info",
          title: "Healthy every day",
          body: `<p><b><u>health</u>y</b> = good for your body</p><p><b>Do</b> it every day:</p><ul><li>eat fruit and vegetables</li><li>drink water</li><li>play outside and do sport</li><li>go to bed early</li></ul><p><b>Don’t</b> do it:</p><ul><li>eat lots of sweets</li><li>play com<u>pu</u>ter games all day</li><li>go to bed late</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it healthy or not?</p>`,
          bins: ["Healthy", "Not healthy"],
          items: [
            ["drink water", 0],
            ["eat vegetables", 0],
            ["play outside", 0],
            ["eat lots of sweets", 1],
            ["go to bed very late", 1],
            ["play computer games all day", 1]
          ],
          hint: "Is it good for your body?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "Healthy: <b>water</b>, <b>vegetables</b>, <b>playing outside</b>. Not healthy: <b>lots of sweets</b>, <b>bed very late</b>, <b>games all day</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Sofiia wants sweets for breakfast. What does Mum say?</p>`,
          opts: [
            "Eat lots of sweets, Sofiia!",
            "Don’t eat sweets for breakfast, Sofiia.",
            "Doesn’t eat sweets for breakfast, Sofiia."
          ],
          correct: 1,
          hint: "Mum says no. Remember: Don’t + verb.",
          fbOk: "Right.",
          fbBad: "Are sweets for breakfast healthy?",
          fbText: "Sweets for breakfast are not healthy. Mum says <b>Don’t eat</b> sweets. We don’t say <i>Doesn’t eat</i> here."
        },
        {
          type: "info",
          title: "One child, two children",
          body: `<p>Emma writes: “<b>Children</b> need lots of sleep.”</p><ul><li>one <b>child</b> → two <b><u>chil</u>dren</b></li><li>one <b>tooth</b> → two <b>teeth</b></li><li>one <b>foot</b> → two <b>feet</b></li></ul><p>No <i>-s</i> here! Not: <s>childs</s>, <s>tooths</s>, <s>foots</s>.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "After lunch, the {*children|childs} in Emma’s class play football outside. In the evening, they have a shower and wash their {*feet|foots}. Then they brush their {*teeth|tooths}.",
          hint: "One child, two …? Look at the list.",
          fbOk: "Good eye!",
          fbBad: "These words don’t take -s.",
          fbText: "One child, two <b>children</b>. One foot, two <b>feet</b>. One tooth, two <b>teeth</b>. No <i>-s</i>!"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+health|y", "com|+pu|ter", "+chil|dren"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>health</u>y, com<u>pu</u>ter, <u>chil</u>dren: the underlined part is strong."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          before: "one child, three",
          answer: "children",
          hint: "Look at the list. No -s!",
          fbOk: "Well done!",
          fbBad: "Is it childs? Look at the list.",
          fbText: "One <b>child</b>, three <b>children</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes back to Emma about her healthy week.</p>`,
          text: "Every day I {*eat|eats} fruit and vegetables. I {*drink|drinks} water. My brother and I play outside with other {*children|childs}. I go to bed {*early|late}. {*Don’t|Doesn’t} eat lots of sweets, Emma!",
          hint: "It’s a healthy week. Is it early or late?",
          fbOk: "Well done!",
          fbBad: "What is healthy? Look at the list.",
          fbText: "<b>I eat</b>, <b>I drink</b> – no <i>-s</i> with <i>I</i>. Two <b>children</b>. Healthy: go to bed <b>early</b>. <b>Don’t</b> eat lots of sweets."
        }
      ],
      outro: {
        text: "Healthy things are good for your body: fruit, water, sport and sleep. One child, two children!",
        learned: [
          "Say what is healthy: eat fruit, drink water.",
          "Say what not to do: Don’t eat lots of sweets.",
          "Use children, teeth and feet."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s5l3",
      title: "How do you feel?",
      short: "Feelings",
      icon: "user",
      status: "draft",
      why: "Friends ask: “How are you?” Say how you feel today.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How is Oksana today?",
          body: `<p class="lead">Oksana and Emma chat after school.</p><p><b>Emma:</b> Hi, Oksana! How are you today?<br><b>Oksana:</b> I’m tired. I’ve got lots of homework. And you?<br><b>Emma:</b> I’m happy! It’s my birthday!</p><p>How do the girls feel?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii has no breakfast. Now it’s twelve o’clock. How does he feel?</p>`,
          opts: [
            "happy",
            "thirsty",
            "hungry"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "He’s <b>hungry</b>: he wants to eat. The next screen shows more words."
        },
        {
          type: "info",
          title: "How do you feel?",
          body: `<ul><li><b><u>hap</u>py</b> – It’s my birthday!</li><li><b>sad</b> – I can’t find my cat.</li><li><b>tired</b> – I want to sleep.</li><li><b><u>hun</u>gry</b> – I want to eat.</li><li><b><u>thirs</u>ty</b> – I want to drink.</li><li><b>ill</b> – I’m not well.</li></ul><p><b>How are you?</b> <b>How do you feel?</b><br>– I’m fine, thanks. / I feel tired.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Mariia: “I want a glass of water.”</p><p>How does Mariia feel?</p>`,
          opts: [
            "She’s hungry.",
            "She’s tired.",
            "She’s thirsty."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Mariia wants water. Look at the list.",
          fbText: "She wants to drink, so she’s <b>thirsty</b>. Hungry – you want to eat. Tired – you want to sleep."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Dmytro wants to sleep. He’s {*tired|hungry}. Sofiia wants a sandwich. She’s {*hungry|thirsty}. Taras can’t find his dog. He’s {*sad|happy}.",
          hint: "What does each child want? Look at the list.",
          fbOk: "Exactly.",
          fbBad: "Check the list: sleep, eat, can’t find.",
          fbText: "Wants to sleep: <b>tired</b>. Wants to eat: <b>hungry</b>. Can’t find his dog: <b>sad</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+hap|py", "+hun|gry", "+thirs|ty"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>hap</u>py, <u>hun</u>gry, <u>thirs</u>ty: the strong part is at the start."
        },
        {
          type: "info",
          title: "I feel, she feels",
          body: `<p>I <b>feel</b> tired. Emma <b>feels</b> happy.</p><ul><li>I, you, we, they → <b>feel</b></li><li>he, she → <b>feels</b></li></ul><p><b>How do</b> you feel? – I feel fine.<br><b>How does</b> she feel? – She feels sad.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ask Andrii a question.</p>`,
          tiles: ["you", "how", "feel", "do"],
          extra: ["does"],
          answer: "How do you feel?",
          hint: "Start with How. Is it you or she?",
          fbOk: "Yes!",
          fbBad: "With you, is it do or does?",
          fbText: "<b>How do you feel?</b> With <i>you</i>, we say <b>do</b>. With <i>she</i>: How <b>does</b> she feel?"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii: “I want to eat a big sandwich!”</p>`,
          before: "He’s",
          after: ".",
          answer: "hungry",
          hint: "He wants to eat. Look at the list.",
          fbOk: "Good eye!",
          fbBad: "He wants to eat: what is he?",
          fbText: "You want to eat: you’re <b>hungry</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "How {*do|does} you feel today, Andrii? I {*feel|feels} fine. My brother Tom {feel|*feels} {*ill|happy}. He isn’t well, so he stays at home.",
          hint: "Who is it: you, I or he?",
          fbOk: "Well done!",
          fbBad: "Check the list: I or he?",
          fbText: "How <b>do</b> you feel? I <b>feel</b>. Tom is <i>he</i>: he <b>feels</b>. He isn’t well: he’s <b>ill</b>."
        }
      ],
      outro: {
        text: "Say how you feel: I’m happy. I feel tired. Ask: How are you? How do you feel?",
        learned: [
          "Say how you feel: happy, sad, tired, hungry, thirsty, ill.",
          "Ask: How are you? How do you feel?",
          "Use feel and feels."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s5l4",
      title: "What’s the matter?",
      short: "Feeling ill",
      icon: "flame",
      status: "draft",
      why: "You feel ill. Say what is wrong.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Where is Andrii?",
          body: `<p class="lead">It’s Monday. Andrii isn’t at school. Emma writes to him.</p><p><b>Emma:</b> Where are you, Andrii? What’s the matter?<br><b>Andrii:</b> I’m at home. I’ve got a cold and a sore throat.</p><p>What is wrong with Andrii?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>head + ache = <b>headache</b></p><p>Oksana’s tooth hurts. What has she got?</p>`,
          opts: [
            "a sore throat",
            "toothache",
            "a cold"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "tooth + ache = <b>toothache</b>. Her tooth hurts. The next screen shows more."
        },
        {
          type: "info",
          title: "What’s the matter?",
          body: `<p><b>What’s the matter?</b> – I’ve got…</p><ul><li><b>a <u>head</u>ache</b> – my head hurts</li><li><b><u>tooth</u>ache</b> – my tooth hurts</li><li><b><u>stom</u>ach ache</b> – my stomach hurts</li><li><b>a sore throat</b> – my throat hurts</li><li><b>a cold</b> – I’m ill and my nose is red</li><li><b>a <u>tem</u>perature</b> – I’m very hot</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “My throat hurts.”</p><p>What’s the matter with her?</p>`,
          opts: [
            "She’s got a headache.",
            "She’s got toothache.",
            "She’s got a sore throat."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Look at the list: my throat hurts.",
          fbText: "Her throat hurts: she’s got <b>a sore throat</b>. Headache – the head. Toothache – a tooth."
        },
        {
          type: "info",
          title: "I’ve got a cold",
          body: `<p>We use <b>have got</b>:</p><ul><li>I, you, we, they → <b>’ve got</b>: I’ve got a cold.</li><li>he, she → <b>’s got</b>: She’s got a headache.</li></ul><p><b>Have</b> you <b>got</b> a temperature?<br>– Yes, I <b>have</b>. / No, I <b>haven’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Emma: {*Have|Has} you got a temperature, Andrii? Andrii: No, I {*haven’t|hasn’t}. But my sister Sofiia {*has|have} got a cold too.",
          hint: "Who is it: you, I or she?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: you or she?",
          fbText: "With <b>you</b> and <b>I</b>: <b>Have</b> you got…? – No, I <b>haven’t</b>. Sofiia is <b>she</b>: she <b>has</b> got."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+head|ache", "+tooth|ache", "+stom|ach"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>head</u>ache, <u>tooth</u>ache, <u>stom</u>ach: the strong part is at the start."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Your throat hurts. Say what’s the matter.</p>`,
          tiles: ["a", "I’ve", "sore throat", "got"],
          extra: ["has"],
          answer: "I’ve got a sore throat.",
          hint: "Start with I’ve.",
          fbOk: "Well done!",
          fbBad: "With I, is it have or has?",
          fbText: "<b>I’ve got a sore throat.</b> With <i>I</i>, we say <b>’ve got</b>, not <i>has got</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Dmytro’s head hurts.</p>`,
          before: "He’s got a",
          after: ".",
          answer: "headache",
          hint: "head + ache = …",
          fbOk: "Good eye!",
          fbBad: "His head hurts. Look at the list.",
          fbText: "My head hurts: I’ve got a <b>headache</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma on Tuesday.</p>`,
          text: "Thanks for your message, Emma! I {*have|has} got a sore throat. My head hurts too. I’ve got a {*headache|cold}. My sister Sofiia {*has|have} got {*toothache|a sore throat}. Her tooth hurts.",
          hint: "Head hurts? Tooth hurts? Look at the list.",
          fbOk: "Well done!",
          fbBad: "Read again: what hurts?",
          fbText: "<b>I have</b> got. Head hurts: a <b>headache</b>. Sofiia is <i>she</i>: she <b>has</b> got. Her tooth hurts: <b>toothache</b>."
        }
      ],
      outro: {
        text: "Ask: What’s the matter? Answer: I’ve got a headache. She’s got a cold.",
        learned: [
          "Ask: What’s the matter?",
          "Say what is wrong: I’ve got a headache.",
          "Use have got and has got: She’s got a cold."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s5l5",
      title: "At the doctor’s",
      short: "The doctor",
      icon: "plus",
      status: "draft",
      why: "A doctor asks questions and tells you what to do. Understand the doctor.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What does the doctor say?",
          body: `<p class="lead">Andrii and his mum are at the doctor’s in Kyiv.</p><p><b>Dr Bondar:</b> Hello, Andrii. What’s the matter?<br><b>Andrii:</b> I’ve got a sore throat and a temperature.<br><b>Dr Bondar:</b> Sit down, please. Open your mouth.</p><p>What does the doctor tell Andrii?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What does Dr Bondar say next?</p>`,
          opts: [
            "Go to school and play football.",
            "Eat lots of sweets.",
            "Stay in bed and drink lots of water."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Andrii is ill. The doctor says: <b>Stay in bed. Drink lots of water.</b>"
        },
        {
          type: "info",
          title: "At the doctor’s",
          body: `<p><b>the doctor’s</b> – the place where a doctor works</p><p>Dr Bondar says:</p><ul><li><b>Sit down</b>, please.</li><li><b>Open</b> your mouth.</li><li><b>Stay</b> in bed for two days.</li><li><b>Drink</b> lots of water.</li><li><b>Don’t go</b> to school tomorrow.</li></ul><p>The verb comes first.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Dr Bondar wants to see Andrii’s throat. What does she say?</p>`,
          opts: [
            "Open your mouth, please.",
            "Sit down, please.",
            "Drink lots of water."
          ],
          correct: 0,
          hint: "Where is your throat?",
          fbOk: "Right.",
          fbBad: "How can the doctor see your throat?",
          fbText: "To see the throat, the doctor says <b>Open your mouth</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Andrii’s mum writes the doctor’s words. One word is wrong.</p>`,
          text: "Stay in bed. [Drinks] lots of water. Don’t go to school tomorrow.",
          hint: "Start with the verb. No -s!",
          fbOk: "Good eye!",
          fbBad: "Check each verb at the start.",
          fbText: "Start with the verb, no <i>-s</i>: <b>Drink</b> lots of water."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Dr Bondar: {*Sit|Sits} down, please. {*Open|Opens} your mouth. You’ve got a sore throat. {*Don’t|Doesn’t} go outside today.",
          hint: "The verb comes first. What not to do: Don’t + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "<b>Sit</b> down. <b>Open</b> your mouth. No <i>-s</i>. What not to do: <b>Don’t</b> go."
        },
        {
          type: "order",
          sk: "func",
          title: "Put the sentences in order.",
          body: `<p>Oksana is at the doctor’s in Poltava.</p>`,
          items: [
            "Dr Kovalenko: Hello, Oksana. What’s the matter?",
            "Oksana: My head hurts. I’ve got a headache.",
            "Dr Kovalenko: Have you got a temperature?",
            "Oksana: No, I haven’t.",
            "Dr Kovalenko: Stay at home today and drink lots of water."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Start with hello. A question comes before its answer.",
          fbOk: "Well done!",
          fbBad: "Find the answer to each question.",
          fbText: "The doctor says hello and asks: “What’s the matter?” Oksana answers. Then the doctor asks about a temperature. At the end, she says what to do."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Dr Bondar: “You’re ill. Don’t go to school.”</p>`,
          before: "Stay in",
          after: "for two days.",
          answer: "bed",
          hint: "Look at the doctor’s words in the list.",
          fbOk: "Yes!",
          fbBad: "Where do you sleep?",
          fbText: "The doctor says: <b>Stay in bed</b> for two days."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "I’m at the doctor’s with Mum. The doctor says: “{*Stay|Stays} in bed. {*Drink|Drinks} lots of water. {*Don’t|Doesn’t} go to school for two days.” So I can read my books in bed!",
          hint: "The doctor’s words start with the verb.",
          fbOk: "Well done!",
          fbBad: "Check the verb at the start.",
          fbText: "The doctor’s words start with the verb: <b>Stay</b>, <b>Drink</b>. What not to do: <b>Don’t</b> go."
        }
      ],
      outro: {
        text: "At the doctor’s, the doctor asks: What’s the matter? Then the doctor says what to do: Stay in bed. Drink lots of water.",
        learned: [
          "Answer the doctor’s questions.",
          "Understand what to do: Open your mouth. Stay in bed.",
          "Put a short dialogue in order."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s5l6",
      title: "Why? Because…",
      short: "Because",
      icon: "bulb",
      status: "draft",
      why: "People often ask “Why?”. Say why with because.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Why is Taras tired?",
          body: `<p class="lead">The friends chat on Friday.</p><p><b>Emma:</b> Why are you tired, Taras?<br><b>Taras:</b> Because I go to bed late. I read books in bed!<br><b>Andrii:</b> I’m happy because I’m well again.</p><p>How do we say why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “Why are you thirsty?”</p><p>Which word starts the answer?</p>`,
          opts: [
            "Because",
            "And",
            "But"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We answer <b>Why?</b> with <b>Because</b>: Because it’s very hot."
        },
        {
          type: "info",
          title: "Why? Because…",
          body: `<p><b>Why</b> are you tired?<br>– <b>Because</b> I go to bed late.</p><p>I drink water <b>because</b> I’m thirsty.</p><p><b>because</b> tells us why.</p><p>be<u>cause</u> – the <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Why do we wash our hands before lunch?</p>`,
          opts: [
            "Because we’re tired.",
            "Because it’s Monday.",
            "Because they can be dirty."
          ],
          correct: 2,
          hint: "Think about the “Keep clean” poster.",
          fbOk: "Right.",
          fbBad: "What is the problem with hands?",
          fbText: "Hands <b>can be dirty</b>. So we wash them before lunch. Tired and Monday are not the answer."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Why|Where} are you sad, Taras? – {*Because|And} my dog is ill. Mariia drinks water {*because|but} she’s thirsty.",
          hint: "Which word asks why? Which word says why?",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "<b>Why</b> asks. <b>Because</b> answers: Because my dog is ill. She drinks water <b>because</b> she’s thirsty."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana: “Why is Dmytro hungry?”</p>`,
          tiles: ["he", "because", "football", "plays"],
          extra: ["play"],
          answer: "Because he plays football.",
          hint: "Start with Because. Dmytro is he.",
          fbOk: "Well done!",
          fbBad: "With he, is it play or plays?",
          fbText: "<b>Because he plays football.</b> With <i>he</i>, the verb takes <b>-s</b>: plays."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii asks Emma.</p>`,
          before: "Why are you thirsty? –",
          after: "it’s very hot today.",
          answer: "because",
          hint: "How do we answer Why?",
          fbOk: "Yes!",
          fbBad: "Look at the examples again.",
          fbText: "We answer <b>Why?</b> with <b>Because</b>: Because it’s very hot today."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “Why is Andrii at home on Monday?”</p>`,
          opts: [
            "Because he’s got a cold.",
            "Because he’s happy.",
            "Because he’s at school."
          ],
          correct: 0,
          fbOk: "Good eye!",
          fbBad: "Is Andrii well or ill?",
          fbText: "Andrii is ill. He stays at home <b>because he’s got a cold</b>. He isn’t at school."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma and Andrii chat on Friday.</p>`,
          text: "Emma: {*Why|Where} are you happy, Andrii? Andrii: {*Because|But} I’m well again! I go to school today. I eat fruit every day {*because|why} it’s healthy.",
          hint: "Which word asks? Which word says why?",
          fbOk: "Well done!",
          fbBad: "Look at the examples again.",
          fbText: "<b>Why</b> asks. <b>Because</b> answers: Because I’m well again. I eat fruit <b>because</b> it’s healthy."
        }
      ],
      outro: {
        text: "Ask “Why?”. Answer “Because…”: I’m tired because I go to bed late.",
        learned: [
          "Ask why: Why are you tired?",
          "Answer with because: Because I go to bed late.",
          "Use because in a sentence: I drink water because I’m thirsty."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s5l7",
      title: "Health Day at school",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e4s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help on Health Day?",
          body: `<p class="lead">It’s Health Day at Andrii’s school in Kyiv. The school nurse, Ms Savchuk, needs help.</p><p>Read the posters and the messages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Help Ms Savchuk with a poster.</p>`,
          text: "{*Wash|Washes} your hands with {*soap|a comb}. Brush your {*teeth|tooths} every morning and every evening. {*Don’t|Doesn’t} eat with dirty hands.",
          pre: "e4s5l1",
          hint: "Start with the verb. One tooth, two …?",
          fbOk: "Yes!",
          fbBad: "Check the verb at the start.",
          fbText: "<b>Wash</b> your hands with <b>soap</b>. Brush your <b>teeth</b>. <b>Don’t</b> eat with dirty hands."
        },
        {
          type: "sort",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Sort the words.",
          body: `<p>Is it healthy or not?</p>`,
          bins: ["Healthy", "Not healthy"],
          items: [
            ["eat fruit", 0],
            ["go to bed early", 0],
            ["eat lots of sweets", 1],
            ["play computer games all day", 1]
          ],
          pre: "e4s5l2",
          fbOk: "Exactly.",
          fbBad: "Is it good for your body?",
          fbText: "Healthy: <b>fruit</b> and <b>bed early</b>. Not healthy: <b>lots of sweets</b> and <b>games all day</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Sofiia: “I want to drink some water.”</p>`,
          before: "She’s",
          after: ".",
          answer: "thirsty",
          pre: "e4s5l3",
          hint: "She wants to drink.",
          fbOk: "Well done!",
          fbBad: "She wants to drink: what is she?",
          fbText: "You want to drink: you’re <b>thirsty</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Bohdan from Andrii’s class writes to Ms Savchuk.</p>`,
          text: "My throat hurts. I’ve got a {*sore throat|headache}. My brother {*has|have} got a {*temperature|toothache}. He’s very hot.",
          pre: "e4s5l4",
          fbOk: "Right.",
          fbBad: "What hurts? Is it he or they?",
          fbText: "Throat hurts: a <b>sore throat</b>. Brother is <i>he</i>: he <b>has</b> got. Very hot: a <b>temperature</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Dr Bondar: “You’ve got a cold.” What does she say next?</p>`,
          opts: [
            "Go to school and play football.",
            "Stay at home and drink lots of water.",
            "Eat lots of sweets."
          ],
          correct: 1,
          pre: "e4s5l5",
          fbOk: "Good eye!",
          fbBad: "You’re ill. What helps?",
          fbText: "With a cold, the doctor says: <b>Stay at home and drink lots of water.</b>"
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Ms Savchuk: “Why do we eat fruit?”</p>`,
          tiles: ["is", "because", "healthy", "fruit"],
          extra: ["are"],
          answer: "Because fruit is healthy.",
          pre: "e4s5l6",
          hint: "Start with Because.",
          fbOk: "Yes!",
          fbBad: "How do we answer Why?",
          fbText: "We answer <b>Why?</b> with <b>Because</b>: Because fruit is healthy."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about keeping clean, feelings and health.",
        learned: [
          "Say what to do and what not to do.",
          "Say how you feel and what the matter is.",
          "Understand the doctor’s words.",
          "Say why with because."
        ]
      }
    }
  ]
});
