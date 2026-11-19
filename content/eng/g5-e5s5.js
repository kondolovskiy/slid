/* Слід · Англійська мова, 5 клас — «Weather: rain, sun and storms» (e5s5)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Природа» — погода, природні явища (с. 20, розд. 4.2.1); граматика A2 — comparatives (form, use + than),
   Future with will (с. 21–22, розд. 4.4); функції — порівнювати, описувати (с. 20):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g5.md (§5 п. 4–5: can — в e5s6; will для прогнозу — наш концентричний вибір,
   «predictions» у програмі — при be going to; тому be going to не стоїть варіантом у жодному завданні, а де дитина може вписати його сама — він у ключі).
   Спирається на e4s6 (погода, comparatives): requires — reports/verify/plan-eng-g5.md §6.
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8); герої й місця — з 4 кл.
   Факти про клімат України й Великої Британії — лише якісні (без точних середніх: джерела розходяться), з двох джерел;
   форми й наголос — Cambridge Dictionary, OALD, Cambridge Grammar (URL — tasks/…/write-eng-g5-e5s5.md, «Нотатки агента»).
   Малюнки img/eng/e5s5/*.svg — власні (writer-e5s5), CC0.
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s5",
  grade: 5,
  weeks: [16, 18],
  title: "Weather: rain, sun and storms",
  why: "To talk about the weather and compare days and seasons. And to understand a weather forecast.",
  requires: ["e4s6l1", "e4s6l5"],
  meta: { author: "writer-e5s5", created: "2026-11-19", factcheck: "self", teacher: null },
  badges: [
    { id: "e5s5boss", name: "Weather watcher", icon: "trophy", desc: "Finish the final lesson “Weather: rain, sun and storms”" }
  ],
  credits: [
    ["Weather pictures: a storm, fog, a rainbow, snow (img/eng/e5s5)", "Slid authors (writer-e5s5)", "CC0", "https://github.com/kondolovskiy/slid"]
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s5l1",
      title: "What’s the weather like today?",
      short: "Weather today",
      icon: "eye",
      status: "draft",
      why: "Your friend asks about the weather. Tell them about it and the temperature.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What’s the weather like in Kyiv?",
          body: `<p class="lead">It’s December. Emma writes to Andrii from England.</p><p><b>Emma:</b> Hi, Andrii! What’s the weather like in Kyiv today?<br><b>Andrii:</b> It’s cold and cloudy. It’s minus two degrees! And in England?<br><b>Emma:</b> It’s raining here. It’s five degrees.</p><p>How do we talk about the temperature?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii writes: “It’s minus two degrees.” What is the temperature?</p>`,
          opts: [
            "−2 °C",
            "2 °C",
            "12 °C"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Minus two degrees</b> is −2 °C. It’s colder than 0 °C. The next screen shows more."
        },
        {
          type: "info",
          title: "It’s five degrees",
          body: `<p><b>What’s the <u>weath</u>er like?</b><br>– <b>It’s</b> cloudy. <b>It’s</b> raining.</p><p><b>What’s the <u>tem</u>perature?</b></p><ul><li>5 °C → <b>It’s</b> five <b>de<u>grees</u></b>.</li><li>−2 °C → <b>It’s</b> <b><u>mi</u>nus</b> two <b>degrees</b>.</li></ul><p>Start with <b>It’s</b>. Two, five, ten → <b>degrees</b>.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana and Taras chat.</p>`,
          text: "<b>Oksana:</b> What’s the weather like in Lviv, Taras?<br><b>Taras:</b> {*It’s|Is|It} windy, and {*it’s|is|it} raining.<br><b>Oksana:</b> What’s the temperature?<br><b>Taras:</b> It’s six {*degrees|degree}.",
          hint: "How do we start a sentence about the weather?",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "We start with <b>It’s</b>: <b>It’s</b> windy, and <b>it’s</b> raining. Six → six <b>degrees</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mariia looks at her phone: <b>−4 °C</b>.</p><p>What’s the temperature in Kharkiv?</p>`,
          opts: [
            "It’s four degrees.",
            "It’s minus four degree.",
            "It’s minus four degrees."
          ],
          correct: 2,
          hint: "Is it more or less than 0 °C?",
          fbOk: "Right.",
          fbBad: "Look at the sign before 4.",
          fbText: "−4 °C is <b>minus four degrees</b>. Four → four <b>degrees</b>."
        },
        {
          type: "info",
          title: "Hot, warm, cool, cold",
          body: `<ul><li>30 °C – It’s <b>hot</b>.</li><li>20 °C – It’s <b>warm</b>.</li><li>10 °C – It’s <b>cool</b>.</li><li>0 °C – It’s <b>cold</b>.</li></ul><p>A lot of rain? The streets are <b>wet</b>.<br>No rain? The streets are <b>dry</b>.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii’s phone says: <b>8 °C</b>.</p>`,
          before: "It’s eight",
          after: "today.",
          answer: "degrees",
          hint: "Two, five, ten → …",
          fbOk: "Well done!",
          fbBad: "Look at the example: five …",
          fbText: "8 °C: it’s eight <b>degrees</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Hi Emma! [Is] very windy in Kyiv today. It’s five degrees, and the streets are wet.",
          hint: "How do we start a sentence about the weather?",
          fbOk: "Good eye!",
          fbBad: "Check the start of each sentence.",
          fbText: "We say <b>It’s</b> very windy. <i>Is very windy</i> has no <i>it</i>. <b>It’s five degrees</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "Hi Andrii! Here in England, {*it’s|is|it} cool today. It’s ten {*degrees|degree}. There is a lot of rain, so the streets are {*wet|dry}. What’s the {*temperature|degree} in Kyiv?",
          hint: "A lot of rain: wet or dry?",
          fbOk: "Well done!",
          fbBad: "Read Emma’s message again.",
          fbText: "<b>It’s</b> cool. Ten → ten <b>degrees</b>. A lot of rain: the streets are <b>wet</b>. We ask: What’s the <b>temperature</b>?"
        }
      ],
      outro: {
        text: "We say: It’s windy. It’s five degrees. We ask: What’s the temperature?",
        learned: [
          "Say what the weather is like: It’s cool and wet.",
          "Say the temperature: It’s minus two degrees.",
          "Ask: What’s the temperature?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s5l2",
      title: "Storms, fog and rainbows",
      short: "Storms and fog",
      icon: "bolt",
      status: "draft",
      why: "Storms, fog, rainbows: name them and say what you can see.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What can Oksana see?",
          body: `<p class="lead">It’s summer in Oksana’s village. She writes to Emma.</p><p><i>There’s a big storm today! It’s very windy. Now the rain is stopping, and the sun is shining. Look! There’s a rainbow in the sky!</i></p><p>What is a rainbow?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>When can you see a rainbow?</p>`,
          opts: [
            "at night",
            "when it’s raining and the sun is shining",
            "when it’s snowing"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Interesting!",
          fbText: "We see a rainbow <b>when it’s raining and the sun is shining</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "Storms, fog and rainbows",
          img: "img/eng/e5s5/phenomena.svg",
          cap: "Four kinds of weather",
          body: `<ul><li>a <b>storm</b> – strong wind and rain → It’s <b><u>storm</u>y</b>.</li><li><b><u>thun</u>der</b> – the big noise in a storm</li><li><b><u>light</u>ning</b> – bright light in a storm</li><li><b>fog</b> – you can’t see far → It’s <b><u>fog</u>gy</b>.</li><li>a <b><u>rain</u>bow</b> – seven colours in the sky</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the pictures.",
          left: ["a storm", "fog", "a rainbow", "snow"],
          right: [
            { img: "img/eng/e5s5/storm.svg", alt: "dark clouds, rain and lightning" },
            { img: "img/eng/e5s5/fog.svg", alt: "trees in grey fog" },
            { img: "img/eng/e5s5/rainbow.svg", alt: "seven colours in the sky" },
            { img: "img/eng/e5s5/snow.svg", alt: "snowflakes and snow on the ground" }
          ],
          hint: "Lightning is in a storm. You can’t see far in fog.",
          fbOk: "Yes!",
          fbText: "A storm: dark clouds, rain and lightning. Fog: you can’t see the trees well. A rainbow: seven colours. Snow: white and cold."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "There’s a lot of fog. It’s {*foggy|stormy|sunny}. There’s a storm with thunder. It’s {*stormy|foggy|snowy}. There’s a lot of snow. It’s {*snowy|foggy|stormy}.",
          hint: "fog → …, storm → …, snow → …",
          fbOk: "Exactly.",
          fbBad: "Find each word in the list.",
          fbText: "fog → <b>foggy</b>, storm → <b>stormy</b>, snow → <b>snowy</b>. We add <b>-y</b>; fog → fo<b>gg</b>y."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana writes: “It’s very foggy in my village today.”</p><p>What is true?</p>`,
          opts: [
            "Oksana can’t see far.",
            "There are seven colours in the sky.",
            "It’s very hot and dry."
          ],
          correct: 0,
          hint: "Fog: what can’t you do?",
          fbOk: "Right.",
          fbBad: "Look at the list: fog – you can’t …",
          fbText: "In fog, <b>you can’t see far</b>. Seven colours in the sky is a rainbow."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+rain|bow", "+thun|der", "+light|ning", "+fog|gy"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>rain</u>bow, <u>thun</u>der, <u>light</u>ning, <u>fog</u>gy: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Red, orange, yellow, green, blue… Seven colours in the sky after the rain!</p>`,
          before: "Look! It’s a",
          after: ".",
          answer: "rainbow",
          hint: "Seven colours: look at the list.",
          fbOk: "Right.",
          fbBad: "rain + …?",
          fbText: "Seven colours in the sky: it’s a <b>rainbow</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana writes to Emma on Saturday.</p><p><b>8 am:</b> <i>It’s foggy. I can’t see the river.</i><br><b>3 pm:</b> <i>Now there’s a storm! There’s thunder and lightning. My cat is under the bed.</i></p><p>What’s the weather like at 3 pm?</p>`,
          opts: [
            "It’s foggy.",
            "It’s snowy.",
            "It’s stormy."
          ],
          correct: 2,
          hint: "Read the message at 3 pm.",
          fbOk: "Good eye!",
          fbBad: "Read the 3 pm message again.",
          fbText: "At 3 pm, “there’s a storm”: it’s <b>stormy</b>. It’s foggy at 8 am."
        }
      ],
      outro: {
        text: "A storm has thunder and lightning. In fog, you can’t see far. A rainbow has seven colours.",
        learned: [
          "Name kinds of weather: a storm, fog, a rainbow.",
          "Say: It’s stormy. It’s foggy.",
          "Read a short message about the weather."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s5l3",
      title: "Hotter, colder, wetter: comparing the weather",
      short: "Comparing",
      icon: "scale",
      status: "draft",
      why: "Which city is warmer today? Compare the weather in two places.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Which town is warmer today?",
          body: `<p class="lead">Mariia from Kharkiv and Emma from England chat.</p><p><b>Mariia:</b> It’s minus five degrees in Kharkiv today!<br><b>Emma:</b> Brr! Here it’s seven degrees. It’s warmer than in Kharkiv. But it’s wetter: it’s raining again!</p><p>How do we compare the weather?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Today it’s −5 °C in Kharkiv. In Emma’s town, it’s 7 °C.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Kharkiv is warmer than Emma’s town today.",
            "Kharkiv is colder than Emma’s town today.",
            "Kharkiv is cold than Emma’s town today."
          ],
          correct: 1,
          pre: "e4s6l5",
          hint: "Which is colder: −5 °C or 7 °C?",
          fbOk: "Yes!",
          fbBad: "Look at the numbers. Then add -er.",
          fbText: "−5 °C is colder than 7 °C. So <b>Kharkiv is colder than</b> Emma’s town. Before <i>than</i>, we add <b>-er</b>."
        },
        {
          type: "info",
          title: "Colder, nicer, hotter, sunnier",
          body: `<ul><li>cold → <b>colder</b>, warm → <b>warmer</b> <i>(-er)</i></li><li>nice → <b>nicer</b> <i>(-r)</i></li><li>hot → <b>hotter</b>, wet → <b>wetter</b> <i>(tt)</i></li><li>sunny → <b>sunnier</b>, windy → <b>windier</b> <i>(y → i)</i></li></ul><p>Today Kharkiv is <b>colder than</b> Emma’s town.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Today it’s 30 °C in Odesa and 24 °C in Lviv. It’s raining in Lviv.</p>`,
          text: "Odesa is {*hotter|hoter|hot} than Lviv today. Lviv is {*cooler|cool} than Odesa. Lviv is {*wetter|weter|wet} than Odesa today.",
          hint: "Look at the list: hot → …, wet → …",
          fbOk: "Exactly.",
          fbBad: "Check the spelling in the list.",
          fbText: "hot → <b>hotter</b>, wet → <b>wetter</b>: two <i>t</i>. cool → <b>cooler</b>. Each one has <b>than</b> after it."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use <b>sunny</b>. Kyiv: sun all day. Lviv: clouds all day.</p>`,
          before: "Kyiv is",
          after: "than Lviv today.",
          answer: "sunnier",
          hint: "sunny ends in y. Look at the list.",
          fbOk: "Well done!",
          fbBad: "What happens to the y?",
          fbText: "sunny → <b>sunnier</b>: y → i, then <b>-er</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Today Lviv is very windy. In Kyiv, there is no wind. Taras tells Andrii about it.</p>`,
          tiles: ["Lviv", "is", "windier", "than", "Kyiv"],
          answer: "Lviv is windier than Kyiv.",
          extra: ["windy"],
          hint: "Which city is windy today? Start with it.",
          fbOk: "Exactly.",
          fbBad: "Taras doesn’t ask a question. Which city has a lot of wind?",
          fbText: "<b>Lviv is windier than Kyiv.</b> windy → <b>windier</b> (y → i). We say <i>windier than</i>, not <i>windy than</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "Today Odesa is [hoter] than Kharkiv. It’s sunnier too.",
          hint: "Check the words with -er.",
          fbOk: "Good eye!",
          fbBad: "Look at hot → … in the list.",
          fbText: "hot → <b>hotter</b>: two <i>t</i>. <b>Sunnier</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Emma.</p>`,
          text: "Hi Emma! It’s minus five here in Kharkiv. It’s {*colder|cold} than in your town. But Kharkiv is {*sunnier|sunnyer|sunny} than your town: there are no clouds. Your town is {*wetter|weter|wet} than Kharkiv: it’s raining there!",
          hint: "Before than, add -er. Check sunny and wet.",
          fbOk: "Well done!",
          fbBad: "Look at the list again.",
          fbText: "cold → <b>colder</b>. sunny → <b>sunnier</b> (y → i). wet → <b>wetter</b> (tt). Each one has <b>than</b> after it."
        }
      ],
      outro: {
        text: "To compare the weather, add -er and say than: Lviv is windier than Kyiv.",
        learned: [
          "Compare the weather in two places: colder than, warmer than.",
          "Spell hotter, wetter and sunnier.",
          "Write a message that compares two towns."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s5l4",
      title: "More beautiful, better, worse",
      short: "Better, worse",
      icon: "star",
      status: "draft",
      why: "Which season is better for you? Compare with long words and with good and bad.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Which season is better?",
          body: `<p class="lead">Andrii and Taras chat about seasons.</p><p><b>Andrii:</b> I think winter is better than summer. I love snow!<br><b>Taras:</b> No way! Summer is more beautiful. And winter weather is worse: it’s cold and dark.</p><p>What do <i>better</i>, <i>worse</i> and <i>more beautiful</i> mean?</p>`,
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
            "Autumn is beautifuller than winter.",
            "Autumn is beautiful than winter.",
            "Autumn is more beautiful than winter."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>more beautiful than</b>. The next screen shows why."
        },
        {
          type: "info",
          title: "More beautiful than",
          body: `<p>Long words: <b>more</b> + word + <b>than</b>.</p><ul><li><u>beau</u>tiful → <b>more beautiful</b></li><li><u>in</u>teresting → <b>more interesting</b></li><li><u>dan</u>gerous → <b>more dangerous</b></li></ul><p>Lightning is <b>more dangerous than</b> rain.</p><p>Short words: <b>-er</b>. cold → colder.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Taras thinks summer is {*more interesting|interestinger} than winter. Lightning is {*more dangerous|dangerouser} than rain. In Kyiv, January is {*colder|more colder} than March.",
          hint: "Is it a long word or a short word?",
          fbOk: "Exactly.",
          fbBad: "Long word: more. Short word: -er.",
          fbText: "Long words: <b>more interesting</b>, <b>more dangerous</b>. Short word: cold → <b>colder</b>. We don’t use <i>more</i> and <i>-er</i> together."
        },
        {
          type: "info",
          title: "Better and worse",
          body: `<ul><li>good → <b>better</b></li><li>bad → <b>worse</b></li></ul><p>Sun is <b>better</b> for a picnic <b>than</b> rain.<br>A storm is <b>worse than</b> a little rain.</p><p>No <i>-er</i> and no <i>more</i> here.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Sun or rain: which is good for a picnic?</p><p>Which sentence is correct?</p>`,
          opts: [
            "Sun is gooder for a picnic than rain.",
            "Sun is better for a picnic than rain.",
            "Sun is more good for a picnic than rain."
          ],
          correct: 1,
          hint: "good → …? Look at the list.",
          fbOk: "Right.",
          fbBad: "Look at the list: good → …",
          fbText: "good → <b>better</b>. No <i>-er</i> and no <i>more</i>: Sun is <b>better</b> for a picnic than rain."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use <b>bad</b>. Monday: a little rain. Tuesday: a big storm.</p>`,
          before: "The weather on Tuesday is",
          after: "than on Monday.",
          answer: "worse",
          hint: "bad → …? Look at the list.",
          fbOk: "Well done!",
          fbBad: "bad → …? Not -er.",
          fbText: "bad → <b>worse</b>. A big storm is worse than a little rain."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Summer is my favourite season. It’s [gooder] than winter. The days are longer and warmer.",
          hint: "Check good → … in the list.",
          fbOk: "Good eye!",
          fbBad: "Look at the list: good → …",
          fbText: "good → <b>better</b>: It’s <b>better</b> than winter. <b>Longer</b> and <b>warmer</b> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii and Taras chat again.</p>`,
          text: "<b>Andrii:</b> Winter is {*better|more good|gooder} than summer. I love snow!<br><b>Taras:</b> No way! Summer is {*more beautiful|beautifuller}. Winter weather is {*worse|badder}: it’s cold and dark.<br><b>Andrii:</b> But snow is {*more interesting|interestinger} than rain!",
          hint: "good → …, bad → …; long words: more.",
          fbOk: "Well done!",
          fbBad: "Look at the two lists again.",
          fbText: "good → <b>better</b>, bad → <b>worse</b>. Long words: <b>more beautiful</b>, <b>more interesting</b>."
        }
      ],
      outro: {
        text: "Long words: more beautiful than. And good → better, bad → worse.",
        learned: [
          "Compare with long words: more beautiful, more dangerous.",
          "Use better and worse.",
          "Say which season you like and why."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s5l5",
      title: "Tomorrow it will be sunny: a weather forecast",
      short: "Forecast",
      icon: "chart",
      status: "draft",
      why: "Read a weather forecast. Then you know what the weather will be like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Will it rain at the weekend?",
          body: `<p class="lead">It’s Friday evening. Andrii reads the weather forecast for Kyiv on his phone.</p><p><i><b>Saturday:</b> It will be cloudy. It will rain in the afternoon.<br><b>Sunday:</b> It will be sunny and warm. It won’t rain.</i></p><p><b>Andrii:</b> Sofiia, let’s go to the park on Sunday!</p><p>How do we talk about the weather tomorrow?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The forecast says: “It will rain on Saturday.” When will it rain?</p>`,
          opts: [
            "now",
            "on Saturday",
            "every Saturday"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It will rain <b>on Saturday</b>. <b>will</b> is about the future."
        },
        {
          type: "info",
          title: "It will be sunny",
          body: `<p>A <b>weather <u>fore</u>cast</b> says what the weather will be like.</p><ul><li>It <b>will</b> rain. = It<b>’ll</b> rain.</li><li>It <b>will be</b> sunny.</li><li>It <b>won’t</b> snow. = It <b>will not</b> snow.</li></ul><p><b>will</b> + rain, be, snow. No <i>-s</i>: It will rain.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Read the forecast for Lviv.</p>`,
          text: "Tomorrow it {*will be|will is|is be} sunny. It {*won’t|will not to|don’t} rain. In the evening, it {*will be|be|will} cold.",
          hint: "will + be, rain, snow.",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "It <b>will be</b> sunny. It <b>won’t</b> rain. It <b>will be</b> cold. After <i>will</i>: <b>be</b>, <b>rain</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>The forecast says: snow tomorrow. Andrii tells Sofiia about it.</p>`,
          tiles: ["it", "will", "snow", "tomorrow"],
          answer: ["It will snow tomorrow.", "Tomorrow it will snow."],
          extra: ["snows"],
          hint: "Andrii doesn’t ask a question. will + snow.",
          fbOk: "Well done!",
          fbBad: "It isn’t a question. And no -s after will.",
          fbText: "<b>It will snow tomorrow.</b> Or: <b>Tomorrow it will snow.</b> After <i>will</i>, we say <b>snow</b>, not <i>snows</i>."
        },
        {
          type: "info",
          title: "Will it rain?",
          body: `<p><b>Will</b> it rain tomorrow?<br>– Yes, it <b>will</b>. / No, it <b>won’t</b>.</p><p><b>What will</b> the weather <b>be like</b> tomorrow?<br>– It<b>’ll be</b> windy.</p><p>I think it<b>’ll be</b> sunny. = I think it <b>will be</b> sunny.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Sofiia: “Will it rain on Sunday?”</p><p>The forecast says: “Sunday: sunny and warm.”</p><p>What does Andrii say?</p>`,
          opts: [
            "No, it won’t.",
            "No, it isn’t.",
            "Yes, it will."
          ],
          correct: 0,
          hint: "Sunny and warm: will it rain?",
          fbOk: "Right.",
          fbBad: "Look at the short answers again.",
          fbText: "The forecast says sunny, so it won’t rain. <b>Will</b> it rain? – No, it <b>won’t</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The forecast: “Tomorrow: cloudy, 5 °C, no snow.”</p>`,
          before: "Will it snow tomorrow? – No, it",
          after: ".",
          answer: ["won’t", "isn’t going to"],
          contractions: true,
          keys: ["’"],
          hint: "Look at the short answers: Yes, it will. / No, it …",
          fbOk: "Well done!",
          fbBad: "No snow. Look at the short answers.",
          fbText: "No snow: <b>No, it won’t.</b> (won’t = will not)"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the forecast is wrong.</p>`,
          text: "Saturday: it will be windy. Sunday: it will [rains] in the morning.",
          hint: "What comes after will?",
          fbOk: "Good eye!",
          fbBad: "Check the word after each will.",
          fbText: "After <i>will</i>, no <i>-s</i>: it will <b>rain</b>. <b>It will be windy</b> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Read the weather forecast for Saturday.</p><p><i><b>Lviv:</b> It will be foggy in the morning. Then it will be sunny, 10 °C.<br><b>Odesa:</b> It will be sunny and warm, 15 °C. It won’t rain.<br><b>Kyiv:</b> It will be cloudy and cool, 8 °C. It will rain in the evening.</i></p><p>Where will it rain on Saturday?</p>`,
          opts: [
            "in Lviv",
            "in Odesa",
            "in Kyiv"
          ],
          correct: 2,
          hint: "Find the word rain in the forecast.",
          fbOk: "Well done!",
          fbBad: "Read the forecast for each city again.",
          fbText: "Kyiv: “It <b>will rain</b> in the evening.” Odesa: “It won’t rain.” Lviv will be foggy, then sunny."
        }
      ],
      outro: {
        text: "A weather forecast uses will: It will be sunny. It won’t rain.",
        learned: [
          "Read a weather forecast.",
          "Say what the weather will be like: It will be windy.",
          "Ask and answer: Will it rain? – No, it won’t."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s5l6",
      title: "Seasons in Ukraine and the UK",
      short: "Seasons",
      icon: "globe",
      status: "draft",
      why: "Winter in Kyiv and winter in London are different. Read and compare.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Is winter the same everywhere?",
          body: `<p class="lead">The pen-friend club makes a new page: “Seasons in Ukraine and the UK”.</p><p>Andrii writes about Ukraine. Emma writes about England.</p><p>Is winter in Kyiv like winter in London?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Where is winter usually colder?</p>`,
          opts: [
            "in Kyiv",
            "in London"
          ],
          correct: 0,
          fbTitle: "Let’s read and see.",
          fbOk: "Interesting!",
          fbText: "In winter, <b>Kyiv</b> is usually colder than London. Read Andrii’s and Emma’s texts."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Seasons, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>Andrii:</b> <i>Ukraine has four seasons. In Kyiv, winters are cold, and there is usually snow. Spring is warmer. Summer is warm, and sometimes it’s hot. Autumn is cooler than summer. The south of Ukraine is warmer than the north. In the Carpathian Mountains, there is a lot of rain and snow.</i></p><p>What is winter in Kyiv like?</p>`,
          opts: [
            "It’s warm and sunny.",
            "It’s cold, and there is usually snow.",
            "There is never snow."
          ],
          correct: 1,
          hint: "Find the word winters in Andrii’s text.",
          fbOk: "Yes!",
          fbBad: "Read the second sentence again.",
          fbText: "Andrii writes: “In Kyiv, winters are <b>cold</b>, and there is <b>usually snow</b>.”"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Seasons, part 2 of 2",
          title: "Read and choose.",
          body: `<p><b>Emma:</b> <i>In England, winters aren’t very cold. It’s usually cloudy, wet and windy. It doesn’t often snow in London. In the UK, it rains in all seasons. Summers are warm, but they aren’t very hot. In winter, London is usually warmer than Kyiv.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "In winter, Kyiv is usually warmer than London.",
            "In London, it snows a lot every winter.",
            "In the UK, it rains in all seasons."
          ],
          correct: 2,
          hint: "Read each sentence and find it in Emma’s text.",
          fbOk: "Right.",
          fbBad: "Read Emma’s text again.",
          fbText: "Emma writes: “In the UK, <b>it rains in all seasons</b>.” London is usually warmer than Kyiv in winter, so Kyiv is colder. It doesn’t often snow in London."
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Fill in the gaps.",
          body: `<p>Andrii and Emma make a table.</p><ul><li><b>Kyiv, winter:</b> cold, usually snow</li><li><b>London, winter:</b> not very cold, often wet and windy</li></ul>`,
          text: "In winter, Kyiv is usually {*colder|warmer} than London. London is {*warmer|colder} than Kyiv, but it’s often {*wet|dry} and windy.",
          hint: "Look at the table: cold or not very cold?",
          fbOk: "Exactly.",
          fbBad: "Read the table again.",
          fbText: "Kyiv is cold, London is not very cold: Kyiv is <b>colder</b>, London is <b>warmer</b>. London is often <b>wet</b> and windy."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["It rains", "Summers are warm,", "Autumn is cooler", "There is a lot of"],
          right: ["in all seasons.", "but they aren’t very hot.", "than summer.", "rain and snow."],
          hint: "Which half has than? Which half goes after a lot of?",
          fbOk: "Yes!",
          fbText: "It rains <b>in all seasons</b>. Summers are warm, <b>but they aren’t very hot</b>. Autumn is cooler <b>than summer</b>. There is a lot of <b>rain and snow</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma writes: “In winter, London is usually warmer than Kyiv.”</p><p>Andrii says it about Kyiv.</p>`,
          tiles: ["Kyiv", "is", "colder", "than", "London"],
          answer: "Kyiv is colder than London.",
          extra: ["warmer"],
          hint: "London is warmer. So Kyiv is …",
          fbOk: "Exactly.",
          fbBad: "It isn’t a question. Start with Kyiv: warmer or colder?",
          fbText: "London is warmer, so <b>Kyiv is colder than London</b> in winter."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The south of Ukraine is warmer than the north.</p>`,
          before: "So the north of Ukraine is",
          after: "than the south.",
          answer: ["colder", "cooler"],
          hint: "warmer ↔ …",
          fbOk: "Well done!",
          fbBad: "The south is warmer. And the north?",
          fbText: "The south is warmer, so the north is <b>colder</b>. cold → colder."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes the end of the page.</p>`,
          text: "In winter, Kyiv is usually {*colder|cold} than London. The south of Ukraine is {*warmer|warm} than the north. In the UK, it {*rains|rain} in all seasons. Which season is {*better|gooder} for you?",
          hint: "Before than: -er or better. it → rains.",
          fbOk: "Well done!",
          fbBad: "Check the words before than.",
          fbText: "<b>colder</b>, <b>warmer</b>: add -er before <i>than</i>. good → <b>better</b>. With <i>it</i>: it <b>rains</b>."
        }
      ],
      outro: {
        text: "In winter, Kyiv is usually colder than London. In the UK, it rains in all seasons.",
        learned: [
          "Read short texts about seasons in Ukraine and the UK.",
          "Compare the weather in Kyiv and London.",
          "Write about the seasons where you live."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s5l7",
      title: "Our weather page",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e5s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the weather page?",
          body: `<p class="lead">The pen-friend club has a weather page. Ms Kravets needs your help.</p><p>Read the posts and check them. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes from Kharkiv.</p>`,
          text: "What’s the weather like today? {*It’s|Is|It} cold and cloudy. It’s minus three {*degrees|degree}.",
          pre: "e5s5l1",
          hint: "How do we start a sentence about the weather?",
          fbOk: "Yes!",
          fbBad: "Check the start and the temperature.",
          fbText: "<b>It’s</b> cold and cloudy. Three → minus three <b>degrees</b>."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Match the words and the pictures.",
          left: ["stormy", "foggy", "snowy"],
          right: [
            { img: "img/eng/e5s5/storm.svg", alt: "dark clouds, rain and lightning" },
            { img: "img/eng/e5s5/fog.svg", alt: "trees in grey fog" },
            { img: "img/eng/e5s5/snow.svg", alt: "snowflakes and snow on the ground" }
          ],
          pre: "e5s5l2",
          hint: "storm → stormy, fog → foggy, snow → snowy.",
          fbOk: "Well done!",
          fbText: "Lightning and rain: it’s <b>stormy</b>. You can’t see far: it’s <b>foggy</b>. White snow: it’s <b>snowy</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Put the words in order.",
          body: `<p>Today it’s 28 °C in Odesa and 22 °C in Lviv. Oksana tells Emma about it.</p>`,
          tiles: ["Odesa", "is", "hotter", "than", "Lviv"],
          answer: "Odesa is hotter than Lviv.",
          extra: ["hot"],
          pre: "e5s5l3",
          hint: "Which city is hot today? Start with it.",
          fbOk: "Exactly.",
          fbBad: "It isn’t a question. Which number is bigger: 28 or 22?",
          fbText: "28 °C is hotter than 22 °C: <b>Odesa is hotter than Lviv.</b> hot → <b>hotter</b>, two <i>t</i>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Rain is badder for a picnic than sun.",
            "Rain is more bad for a picnic than sun.",
            "Rain is worse for a picnic than sun."
          ],
          correct: 2,
          pre: "e5s5l4",
          fbOk: "Right.",
          fbBad: "bad → …? No -er, no more.",
          fbText: "bad → <b>worse</b>: Rain is <b>worse</b> for a picnic than sun."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>The forecast: “Tomorrow: windy, 12 °C.”</p>`,
          before: "Will it be windy tomorrow? – Yes, it",
          after: ".",
          answer: "will",
          pre: "e5s5l5",
          hint: "Will it…? – Yes, it …",
          fbOk: "Well done!",
          fbBad: "Look at the question: Will it…?",
          fbText: "<b>Will</b> it be windy? – Yes, it <b>will</b>. The forecast says windy."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is true?</p>`,
          opts: [
            "In winter, Kyiv is usually colder than London.",
            "In winter, London is usually colder than Kyiv.",
            "In the UK, it never rains in summer."
          ],
          correct: 0,
          pre: "e5s5l6",
          fbOk: "Good eye!",
          fbBad: "Think about Andrii’s and Emma’s texts.",
          fbText: "<b>In winter, Kyiv is usually colder than London.</b> In the UK, it rains in all seasons."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about the weather, compare it and read a weather forecast.",
        learned: [
          "Say the weather and the temperature.",
          "Name storms, fog and rainbows.",
          "Compare the weather: colder, more beautiful, better.",
          "Read a forecast and say what the weather will be like."
        ]
      }
    }
  ]
});
