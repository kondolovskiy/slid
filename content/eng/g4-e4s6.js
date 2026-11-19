/* Слід · Англійська мова, 4 клас — «Nature and weather» (e4s6)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Природа і навколишнє середовище України
   та країн виучуваної мови — довкілля, природні явища» (PDF с. 62–63); граматика 4 кл. — Present Continuous, comparatives,
   how-questions for size and measurement (How long…? How high…? How big…?) (с. 63):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Розподіл граматики — content/eng/plan.js, reports/verify/plan-eng-g4.md. Present Simple vs Present Continuous — у e4s8; тут лише Present Continuous.
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8); герої — з e4s1.
   Факти (річки, гори, площі, зима в Києві й Лондоні), форми й наголос — за en.wikipedia, ЕСУ, Cambridge Dictionary, OALD
   (URL — tasks/…/write-eng-g4-e4s6.md, «Нотатки агента»).
   Статус: verified (verifier-e4s6, reports/verify/e4s6.md); approved — лише вчитель. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s6",
  grade: 4,
  weeks: [22, 26],
  title: "Nature and weather",
  why: "To talk about the weather and nature. And to say what is happening now.",
  requires: ["e4s1l1", "e4s5l1"],
  meta: { author: "writer-e4s6", created: "2026-11-19", factcheck: "verifier-e4s6 (reports/verify/e4s6.md)", teacher: null },
  badges: [
    { id: "e4s6boss", name: "Weather reporter", icon: "trophy", desc: "Finish the final lesson “Nature and weather”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s6l1",
      title: "Seasons and weather",
      short: "Weather",
      icon: "leaf",
      status: "verified",
      why: "Your friend lives far away. Ask about the weather there and tell them about yours.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What’s the weather like?",
          body: `<p class="lead">It’s January. Oksana and Emma chat online.</p><p><b>Emma:</b> Hi, Oksana! What’s the weather like in your village?<br><b>Oksana:</b> It’s very cold. It’s snowy! And in England?<br><b>Emma:</b> It’s cold too, but it isn’t snowy. It’s cloudy.</p><p>How do we talk about the weather?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>It’s January. It’s cold and snowy. What season is it?</p>`,
          opts: [
            "spring",
            "winter",
            "summer"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "January is in <b>winter</b>. The next screen shows all four seasons."
        },
        {
          type: "info",
          title: "Four seasons",
          body: `<ul><li><b><u>win</u>ter</b> – December, January, February</li><li><b>spring</b> – March, April, May</li><li><b><u>sum</u>mer</b> – June, July, August</li><li><b><u>au</u>tumn</b> – September, October, November</li></ul><p>In Ukraine, winters are cold and summers are warm.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Which season is it?</p>`,
          bins: ["winter", "spring", "summer", "autumn"],
          items: [
            ["December", 0],
            ["February", 0],
            ["March", 1],
            ["May", 1],
            ["June", 2],
            ["August", 2],
            ["October", 3],
            ["November", 3]
          ],
          hint: "Look at the list of seasons again.",
          fbOk: "Yes!",
          fbBad: "Check the months in the list.",
          fbText: "Winter: December, January, February. Spring: March, April, May. Summer: June, July, August. Autumn: September, October, November."
        },
        {
          type: "info",
          title: "What’s the weather like?",
          body: `<p><b>What’s the <u>weath</u>er like?</b><br>– It’s <b>sunny</b>.</p><ul><li>sun → <b>sunny</b></li><li>rain → <b>rainy</b></li><li>snow → <b>snowy</b></li><li>wind → <b>windy</b></li><li>cloud → <b>cloudy</b></li></ul><p>It’s <b>hot</b>, <b>warm</b> or <b>cold</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "There is a lot of snow. It’s {*snowy|sunny|windy}. The sun is hot. It’s {*sunny|cloudy|snowy}. There is a lot of rain. It’s {*rainy|sunny|snowy}.",
          hint: "Look at the list: snow → …, sun → …, rain → …",
          fbOk: "Exactly.",
          fbBad: "Find each word in the list.",
          fbText: "snow → <b>snowy</b>, sun → <b>sunny</b>, rain → <b>rainy</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+win|ter", "+sum|mer", "+au|tumn", "+weath|er"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>win</u>ter, <u>sum</u>mer, <u>au</u>tumn, <u>weath</u>er: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>There is a lot of wind today.</p>`,
          before: "It’s",
          after: ".",
          answer: "windy",
          hint: "Look at the list: wind → …",
          fbOk: "Right.",
          fbBad: "wind → …?",
          fbText: "wind → <b>windy</b>. A lot of wind: it’s windy."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "It’s October. In England, it’s {*autumn|summer|winter}. Today there is a lot of wind. It’s {*windy|sunny|snowy}. It isn’t warm. It’s {*cold|hot}.",
          hint: "October: which season is it?",
          fbOk: "Good eye!",
          fbBad: "Read the message again.",
          fbText: "October is in <b>autumn</b>. A lot of wind: it’s <b>windy</b>. It isn’t warm, so it’s <b>cold</b>."
        }
      ],
      outro: {
        text: "There are four seasons: winter, spring, summer and autumn. We ask: “What’s the weather like?”",
        learned: [
          "Name the four seasons and their months.",
          "Say what the weather is like: It’s sunny.",
          "Ask: What’s the weather like?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s6l2",
      title: "It’s raining now! What’s happening?",
      short: "Now",
      icon: "eye",
      status: "verified",
      why: "Look out of the window. Tell your friend what is happening now.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What’s happening in Kyiv?",
          body: `<p class="lead">It’s Saturday. Andrii writes to Emma from Kyiv.</p><p><i>Hi Emma! I’m at the window. It’s raining. People are running to the bus. My cat is sleeping on the sofa.</i></p><p>When is all this happening?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii writes: “It’s raining.” When is it raining?</p>`,
          opts: [
            "now",
            "every day",
            "every Sunday"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "It’s raining <b>now</b>. The next screen shows how we talk about now."
        },
        {
          type: "info",
          title: "It’s raining now",
          body: `<p>Look! It<b>’s raining</b>. The cat <b>is sleeping</b>.</p><ul><li>I → <b>am</b> reading</li><li>he, she, it → <b>is</b> reading</li><li>you, we, they → <b>are</b> reading</li></ul><p><b>am / is / are + -ing</b> = now.<br>This is the Present Continuous.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Look! It {am|*is|are} snowing. The children {am|is|*are} playing. I {*am|is|are} looking at them.",
          hint: "Who is it: it, they or I?",
          fbOk: "Exactly.",
          fbBad: "Check the list: it, they, I.",
          fbText: "<b>It is</b> snowing. The children are <b>they</b>: they <b>are</b> playing. <b>I am</b> looking."
        },
        {
          type: "info",
          title: "Raining, shining, running",
          body: `<ul><li>rain → <b>raining</b>, play → <b>playing</b></li><li>shine → <b>shining</b>, make → <b>making</b> <i>(no e)</i></li><li>run → <b>running</b>, swim → <b>swimming</b> <i>(nn, mm)</i></li></ul><p><b>not</b>: It <b>isn’t</b> raining. They <b>aren’t</b> playing.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the <b>-ing</b> form: shine → ?</p>`,
          before: "Look! The sun is",
          after: ".",
          answer: "shining",
          hint: "shine ends in e. Look at the list.",
          fbOk: "Well done!",
          fbBad: "What happens to the e?",
          fbText: "shine → <b>shining</b>. We take away the <i>e</i> and add <b>-ing</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>What are the children doing now?</p>`,
          opts: [
            "The children is playing.",
            "The children are playing.",
            "The children playing."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "One child or many children?",
          fbText: "The children are <b>they</b>: they <b>are playing</b>. We need <i>are</i> and <i>-ing</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Look! It is snowing. The birds [is] singing. My dog is running in the garden.",
          hint: "Check is and are. One bird or many birds?",
          fbOk: "Good eye!",
          fbBad: "Check each is.",
          fbText: "Birds are <b>they</b>: the birds <b>are</b> singing. <b>It is</b> snowing and my dog <b>is</b> running are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "Hi Emma! It’s Saturday. It {*is|are|am} raining in Kyiv now. Mum {*is reading|are reading|reading} a book. Sofiia {*is playing|are playing|playing} with the cat. And I {*am writing|is writing|writing} to you!",
          hint: "Who is it: it, she or I? Then add -ing.",
          fbOk: "Well done!",
          fbBad: "Check am, is and are.",
          fbText: "<b>It is</b> raining. Mum <b>is reading</b>. Sofiia <b>is playing</b>. <b>I am writing</b>. Each one has am, is or are and -ing."
        }
      ],
      outro: {
        text: "To talk about now, we say am, is or are + -ing: It’s raining.",
        learned: [
          "Say what is happening now: It’s raining.",
          "Use am, is and are with -ing.",
          "Write -ing forms: shining, running."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s6l3",
      title: "Is it snowing? Questions about now",
      short: "Questions",
      icon: "voice",
      status: "verified",
      why: "Ask your friend what is happening now. Answer their questions too.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Is it snowing in the village?",
          body: `<p class="lead">Emma and Oksana chat again.</p><p><b>Emma:</b> Is it snowing in your village?<br><b>Oksana:</b> Yes, it is! What are you doing?<br><b>Emma:</b> I’m making a cake with Mum. And you?<br><b>Oksana:</b> I’m drawing a snowman.</p><p>How do they ask about now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which one is a question?</p>`,
          opts: [
            "It is raining?",
            "Is it raining?",
            "It raining is?"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In a question, <b>is</b> comes first: <b>Is it raining?</b>"
        },
        {
          type: "info",
          title: "Is it snowing?",
          body: `<p><b>Is</b> it snowing? – Yes, it <b>is</b>. / No, it <b>isn’t</b>.<br><b>Are</b> you reading? – Yes, I <b>am</b>. / No, I<b>’m not</b>.<br><b>Are</b> they playing? – Yes, they <b>are</b>. / No, they <b>aren’t</b>.</p><p>In a question, <b>is</b> or <b>are</b> comes first.</p><p><b>What are</b> you <b>doing</b>? – I’m drawing.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Are you drawing?”</p><p>Oksana is drawing. What does she say?</p>`,
          opts: [
            "Yes, I’m.",
            "Yes, I are.",
            "Yes, I am."
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Look at the short answers again.",
          fbText: "The short answer is <b>Yes, I am.</b> At the end, we don’t write <i>I’m</i>. <i>I are</i> is not correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii asks Taras about the weather in Lviv. Make his question.</p>`,
          tiles: ["is", "raining", "it", "in Lviv"],
          answer: "Is it raining in Lviv?",
          extra: ["are"],
          hint: "In a question, what comes first?",
          fbOk: "Exactly.",
          fbBad: "Is it a question? Check the first word.",
          fbText: "In a question, <b>is</b> comes first: <b>Is it raining in Lviv?</b> We say <i>it is</i>, not <i>it are</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Is Sofiia sleeping? – No, she {*isn’t|aren’t}. Are the boys playing football? – Yes, they {*are|is}. Are you reading? – No, {*I’m not|I isn’t|I aren’t}.",
          hint: "Look at the question. Is it is or are?",
          fbOk: "Right.",
          fbBad: "Look at the short answers again.",
          fbText: "Sofiia is <b>she</b>: No, she <b>isn’t</b>. The boys are <b>they</b>: Yes, they <b>are</b>. With <b>I</b>: No, <b>I’m not</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana asks Emma.</p>`,
          before: "What",
          after: "you doing? – I’m making a cake.",
          answer: "are",
          hint: "you → am, is or are?",
          fbOk: "Well done!",
          fbBad: "Look at the question in the list.",
          fbText: "<b>What are you doing?</b> With <i>you</i>, we say <b>are</b>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii and Taras chat.</p>`,
          text: "<b>Andrii:</b> Hi, Taras! {*Is|Are} it raining in Lviv?<br><b>Taras:</b> No, it {*isn’t|aren’t}. It’s sunny.<br><b>Andrii:</b> What {*are|is} you doing?<br><b>Taras:</b> I {*am|is|are} riding my bike in the park.",
          hint: "Who is it: it, you or I?",
          fbOk: "Good eye!",
          fbBad: "Check is, are and am.",
          fbText: "<b>Is it</b> raining? – No, it <b>isn’t</b>. <b>What are you</b> doing? – <b>I am</b> riding my bike."
        }
      ],
      outro: {
        text: "In a question about now, is or are comes first: Is it snowing? What are you doing?",
        learned: [
          "Ask about now: Is it snowing?",
          "Answer: Yes, it is. / No, it isn’t.",
          "Ask: What are you doing?"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s6l4",
      title: "Nature in Ukraine and the UK",
      short: "Nature",
      icon: "river",
      status: "verified",
      why: "Ukraine has got mountains, rivers and the sea. Tell a friend about them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What is nature like in Ukraine?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>There is a river in my town. Near my town, there are big forests. What is nature like in Ukraine?</i></p><p><b>Oksana:</b> <i>Ukraine is big! There are mountains, rivers, forests and the sea.</i></p><p>What can you find in nature?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "Nature",
          body: `<p><b><u>na</u>ture</b>: mountains, rivers, forests, the sea</p><ul><li>a <b><u>moun</u>tain</b> – very high: Hoverla</li><li>a <b><u>riv</u>er</b>: the Dnipro, the Thames</li><li>a <b><u>for</u>est</b> – lots of trees</li><li>the <b>sea</b>: the Black Sea</li></ul><p>Rivers and seas have <b>the</b>: <b>the</b> Dnipro.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>There are lots of trees here.</p>`,
          before: "It’s a",
          after: ".",
          answer: ["forest", "wood"],
          hint: "Look at the list: lots of trees.",
          fbOk: "Right.",
          fbBad: "Lots of trees: look at the list.",
          fbText: "Lots of trees: it’s a <b>forest</b>. A river is water. A mountain is very high."
        },
        {
          type: "info",
          title: "Ukraine and the UK",
          body: `<ul><li><b>the Dnipro</b> (Ukraine) – a river, about 2,200 km long</li><li><b>the Thames</b> (England) – a river, 346 km long</li><li><b>Hoverla</b> (Ukraine) – a mountain, 2,061 m high</li><li><b>Ben Nevis</b> (Scotland) – a mountain, 1,345 m high</li></ul><p>Kyiv is on the Dnipro. London is on the Thames.</p><p><b>km</b> = kilometres, <b>m</b> = metres</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Look at the list again. Where is Ben Nevis?</p>`,
          opts: [
            "in Ukraine",
            "in London",
            "in Scotland"
          ],
          correct: 2,
          hint: "Find Ben Nevis in the list.",
          fbOk: "Good eye!",
          fbBad: "Look at the list again. Where is Ben Nevis?",
          fbText: "Ben Nevis is a mountain in <b>Scotland</b>. Hoverla is a mountain in Ukraine."
        },
        {
          type: "info",
          title: "How long? How high? How big?",
          body: `<ul><li>a river → <b>How long</b> is the Dnipro?<br>– It’s about 2,200 km <b>long</b>.</li><li>a mountain → <b>How high</b> is Hoverla?<br>– It’s 2,061 m <b>high</b>.</li><li>a country → <b>How big</b> is Ukraine?<br>– It’s about 600,000 km².</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "How {*long|high} is the Thames? – It’s 346 km {*long|high}. How {*high|long} is Ben Nevis? – It’s 1,345 m {*high|long}.",
          hint: "Is it a river or a mountain?",
          fbOk: "Exactly.",
          fbBad: "A river is long. A mountain is high.",
          fbText: "The Thames is a river: <b>How long</b> is it? – 346 km <b>long</b>. Ben Nevis is a mountain: <b>How high</b> is it? – 1,345 m <b>high</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+na|ture", "+moun|tain", "+riv|er", "+for|est"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>na</u>ture, <u>moun</u>tain, <u>riv</u>er, <u>for</u>est: the strong part is at the start."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana writes.</p><p><i>In summer, my family goes to the Carpathians. There are high mountains and big forests. We climb Hoverla. It’s 2,061 m high. In winter, there is a lot of snow there.</i></p><p>What is there in the Carpathians?</p>`,
          opts: [
            "mountains and forests",
            "the sea and a big city",
            "the Dnipro and Kyiv"
          ],
          correct: 0,
          fbOk: "Well done!",
          fbBad: "Read Oksana’s text again.",
          fbText: "Oksana writes: “There are high <b>mountains</b> and big <b>forests</b>.” Hoverla is a mountain in the Carpathians."
        }
      ],
      outro: {
        text: "Ukraine has got mountains, rivers, forests and the sea. We ask: How long? How high? How big?",
        learned: [
          "Name things in nature: a mountain, a river, a forest.",
          "Ask: How long is the river? How high is the mountain?",
          "Read facts about nature in Ukraine and the UK."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s6l5",
      title: "Bigger, colder, faster: comparing things",
      short: "Comparing",
      icon: "scale",
      status: "verified",
      why: "Which river is longer? Which city is colder? Compare two things.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Which river is longer?",
          body: `<p class="lead">Emma and Andrii talk about rivers.</p><p><b>Emma:</b> The Thames is a long river. It’s 346 km long!<br><b>Andrii:</b> The Dnipro is about 2,200 km long. It’s longer than the Thames!</p><p>What does <i>longer than</i> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Hoverla: 2,061 m. Ben Nevis: 1,345 m.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Hoverla is higher than Ben Nevis.",
            "Hoverla is high than Ben Nevis.",
            "Hoverla is more high Ben Nevis."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>higher than</b>. The next screen shows how."
        },
        {
          type: "info",
          title: "Longer than",
          body: `<ul><li>long → <b>longer</b></li><li>high → <b>higher</b></li><li>cold → <b>colder</b></li><li>fast → <b>faster</b></li></ul><p>The Dnipro is <b>longer than</b> the Thames.<br>A car is <b>faster than</b> a bike.</p><p>Add <b>-er</b>. Then say <b>than</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Hoverla is {*higher|high} than Ben Nevis. A car is {*faster|fast} than a bike. Winter is {*colder|cold} than summer.",
          hint: "Before than, add -er.",
          fbOk: "Exactly.",
          fbBad: "What do we add before than?",
          fbText: "Before <b>than</b>, add <b>-er</b>: <b>higher</b>, <b>faster</b>, <b>colder</b>."
        },
        {
          type: "info",
          title: "Bigger, sunnier",
          body: `<ul><li>big → <b>bigger</b>, hot → <b>hotter</b> <i>(gg, tt)</i></li><li>sunny → <b>sunnier</b>, windy → <b>windier</b> <i>(y → i)</i></li></ul><p><b>How big</b> is Ukraine? – About 600,000 km².<br>The UK is about 240,000 km².<br>Ukraine is <b>bigger than</b> the UK.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Today it’s 30 °C in Kyiv. In London, it’s 22 °C.</p><p>Which sentence is correct?</p>`,
          opts: [
            "London is hotter than Kyiv today.",
            "Kyiv is hoter than London today.",
            "Kyiv is hotter than London today."
          ],
          correct: 2,
          hint: "Which is hot: 30 °C or 22 °C? How do we write hot + -er?",
          fbOk: "Right.",
          fbBad: "Look at the numbers and the list.",
          fbText: "30 °C is hotter than 22 °C. hot → <b>hotter</b>: two <i>t</i>. So <b>Kyiv is hotter than London today.</b>"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>It’s January. Today it’s −3 °C in Kyiv. In London, it’s 5 °C.</p>`,
          before: "Kyiv is",
          after: "than London today.",
          answer: ["colder", "cooler"],
          hint: "cold → …",
          fbOk: "Well done!",
          fbBad: "Which city is cold today?",
          fbText: "−3 °C is colder than 5 °C. cold → <b>colder</b>: Kyiv is colder than London today."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Ukraine is [biger] than the UK. The Dnipro is longer than the Thames.",
          hint: "Check the words with -er.",
          fbOk: "Good eye!",
          fbBad: "Look at big → … in the list.",
          fbText: "big → <b>bigger</b>: two <i>g</i>. <b>Longer</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma about Ukraine and the UK.</p>`,
          text: "The Dnipro is {*longer|long} than the Thames. Hoverla is {*higher|high} than Ben Nevis. Ukraine is {*bigger|biger|big} than the UK. In winter, Kyiv is usually {*colder|cold} than London.",
          hint: "Before than, add -er. Check big.",
          fbOk: "Well done!",
          fbBad: "Look at the two lists again.",
          fbText: "<b>longer</b>, <b>higher</b>, <b>colder</b>: add -er. big → <b>bigger</b>: two <i>g</i>. Each one has <b>than</b> after it."
        }
      ],
      outro: {
        text: "To compare two things, add -er and say than: The Dnipro is longer than the Thames.",
        learned: [
          "Compare two things: longer than, bigger than.",
          "Spell bigger, hotter and sunnier.",
          "Ask: How big is it?"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s6l6",
      title: "Let’s help nature!",
      short: "Help nature",
      icon: "globe",
      status: "verified",
      why: "Nature needs our help. Learn what to do and what not to do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What is Oksana’s school doing?",
          body: `<p class="lead">It’s Saturday in Oksana’s village. Her school is in the park.</p><p><i>Look at us, Emma! We’re helping nature. Nazar is planting a tree. Dmytro and I are picking up rubbish.</i></p><p>How can you help nature?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What helps nature?</p>`,
          opts: [
            "Leave rubbish in the forest.",
            "Turn on all the lights.",
            "Plant a tree."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "<b>Plant a tree.</b> Trees help nature. Rubbish in the forest is bad for nature."
        },
        {
          type: "info",
          title: "Help nature!",
          body: `<p>Do it:</p><ul><li><b>Plant</b> trees.</li><li><b>Put</b> rubbish in the bin.</li><li><b>Turn off</b> the tap and the lights.</li><li><b>Feed</b> the birds in winter.</li></ul><p>Don’t do it:</p><ul><li><b>Don’t leave</b> rubbish in the forest.</li><li><b>Don’t pick</b> flowers in the park.</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it good or bad for nature?</p>`,
          bins: ["Good for nature", "Bad for nature"],
          items: [
            ["Plant trees.", 0],
            ["Put rubbish in the bin.", 0],
            ["Turn off the tap.", 0],
            ["Leave rubbish in the forest.", 1],
            ["Pick flowers in the park.", 1],
            ["Leave the lights on.", 1]
          ],
          hint: "Look at the list: do it or don’t do it?",
          fbOk: "Yes!",
          fbBad: "Check the list again.",
          fbText: "Good: plant trees, put rubbish in the bin, turn off the tap. Bad: rubbish in the forest, picking flowers, lights on."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Put|Don’t put} rubbish in the bin. {*Don’t leave|Leave} rubbish in the forest. {*Turn off|Don’t turn off} the lights. {*Don’t pick|Pick} flowers in the park.",
          hint: "Is it good or bad for nature?",
          fbOk: "Right.",
          fbBad: "Look at the list: do it or don’t do it?",
          fbText: "Good for nature: <b>Put</b> rubbish in the bin, <b>Turn off</b> the lights. Bad for nature: <b>Don’t leave</b> rubbish, <b>Don’t pick</b> flowers."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the <b>-ing</b> form: feed → ?</p>`,
          before: "Look! Dmytro is",
          after: "the birds.",
          answer: "feeding",
          hint: "feed + -ing",
          fbOk: "Well done!",
          fbBad: "Add -ing to feed.",
          fbText: "feed → <b>feeding</b>. Dmytro <b>is feeding</b> the birds now."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks: “What are you doing?” Oksana answers.</p>`,
          tiles: ["we", "are", "cleaning", "the park"],
          answer: "We are cleaning the park.",
          extra: ["is"],
          hint: "Start with we. Then are and -ing.",
          fbOk: "Exactly.",
          fbBad: "Oksana answers. It’s not a question.",
          fbText: "<b>We are cleaning the park.</b> With <i>we</i>, we say <b>are</b>, not <i>is</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana’s school makes a poster.</p><p><i>Help nature! Plant trees. Feed the birds in winter. Turn off the tap. Don’t leave rubbish in the forest. Look: our school is cleaning the park today!</i></p><p>What is the school doing today?</p>`,
          opts: [
            "planting flowers",
            "cleaning the park",
            "feeding the birds"
          ],
          correct: 1,
          fbOk: "Good eye!",
          fbBad: "Read the end of the poster again.",
          fbText: "The poster says: “Our school <b>is cleaning the park</b> today!” The poster says: feed the birds in winter."
        }
      ],
      outro: {
        text: "We can help nature: plant trees, put rubbish in the bin, turn off the tap.",
        learned: [
          "Say how to help nature: Plant trees.",
          "Say what not to do: Don’t leave rubbish.",
          "Say what people are doing now to help nature."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s6l7",
      title: "Our nature and weather page",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the weather page?",
          body: `<p class="lead">The pen-friend club has a new page: “Nature and weather”. Ms Kravets needs your help.</p><p>Read the posts and check them. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Taras writes from Lviv.</p>`,
          text: "It’s July. It’s {*summer|winter|autumn}. There is no rain today. The sun is hot. It’s {*sunny|snowy|cloudy}.",
          pre: "e4s6l1",
          hint: "July: which season is it?",
          fbOk: "Yes!",
          fbBad: "Check the seasons and the weather words.",
          fbText: "July is in <b>summer</b>. The sun is hot: it’s <b>sunny</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Write the missing word.",
          body: `<p>Taras writes about his friends at the river. Write the <b>-ing</b> form: swim → ?</p>`,
          before: "Look! My friends are",
          after: "in the river.",
          answer: "swimming",
          pre: "e4s6l2",
          hint: "swim: look at run → running.",
          fbOk: "Well done!",
          fbBad: "How many m?",
          fbText: "swim → <b>swimming</b>: two <i>m</i>, like run → running."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Put the words in order.",
          body: `<p>Emma asks Oksana a question about her brother.</p>`,
          tiles: ["is", "Dmytro", "playing", "in the garden"],
          answer: "Is Dmytro playing in the garden?",
          extra: ["are"],
          pre: "e4s6l3",
          hint: "It’s a question. What comes first?",
          fbOk: "Exactly.",
          fbBad: "Check the first word of the question.",
          fbText: "In a question, <b>is</b> comes first: <b>Is Dmytro playing in the garden?</b> Dmytro is <i>he</i>, so it’s <b>is</b>, not <i>are</i>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about nature in Ukraine.</p>`,
          text: "The Dnipro is a {*river|mountain|forest}. How {*long|high} is it? – It’s about 2,200 km long. Hoverla is a {*mountain|river|forest}. How {*high|long} is it? – It’s 2,061 m high.",
          pre: "e4s6l4",
          hint: "A river is long. A mountain is high.",
          fbOk: "Right.",
          fbBad: "Is it a river or a mountain?",
          fbText: "The Dnipro is a <b>river</b>: <b>How long</b> is it? Hoverla is a <b>mountain</b>: <b>How high</b> is it?"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Ben Nevis is 1,345 m high. Hoverla is 2,061 m high.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Ben Nevis is higher than Hoverla.",
            "Hoverla is higher than Ben Nevis.",
            "Hoverla is high than Ben Nevis."
          ],
          correct: 1,
          pre: "e4s6l5",
          fbOk: "Good eye!",
          fbBad: "Which number is bigger? Then check -er.",
          fbText: "2,061 m is more than 1,345 m. So <b>Hoverla is higher than Ben Nevis.</b> Before <i>than</i>, we add <b>-er</b>."
        },
        {
          type: "multi",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Choose all the correct answers.",
          body: `<p>What helps nature?</p>`,
          opts: [
            "Plant trees.",
            "Leave rubbish in the forest.",
            "Turn off the tap.",
            "Pick flowers in the park."
          ],
          correct: [0, 2],
          pre: "e4s6l6",
          fbOk: "Well done!",
          fbBad: "Is it good or bad for nature?",
          fbText: "<b>Plant trees</b> and <b>turn off the tap</b>: they help nature. Don’t leave rubbish in the forest. Don’t pick flowers in the park."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about the weather and nature and say what is happening now.",
        learned: [
          "Talk about seasons and the weather.",
          "Say and ask what is happening now.",
          "Compare rivers, mountains and countries.",
          "Say how to help nature."
        ]
      }
    }
  ]
});
