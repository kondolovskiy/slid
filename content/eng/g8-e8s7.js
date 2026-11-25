/* Слід · Англійська мова, 8 клас — «Ukraine: land, climate and people» (e8s7)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   8 кл., тема «Україна» — географічне положення; клімат; населення; національності (с. 32, розд. 5.2.2);
   функція «коментувати статистичні дані» (с. 33); граматика B1 (с. 34–35): articles with geographical names
   (the + rivers, seas, mountain ranges; no article + countries, cities, lakes, single mountains — B1: Articles — no article);
   numbers and statistics (millions, per cent, half, a third — наш, під функцію с. 33); most of / some of / none of
   (B1: Pronouns — quantity); population як collective noun — лише згадка, без оцінювання (BrE is / are).
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md; рядки plan — content/eng/plan.js (e8s7).
   Не повторює e5s10l1, l5, l6 (мапа, the longest river, facts): тут сусіди, артиклі з назвами, клімат, статистика, населення.
   Населення — TQ-129, тимчасово: лише перепис 2001 р. з роком і джерелом у тексті, без оцінок після 2022 р.
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на чотири роки старші, ніж у 4 кл.: Andrii (14, Kyiv) — шкільна газета,
   клас 24 учні (e8s2); Emma (14, Англія) — клас робить проєкт «Countries of Europe» (листування шкіл, e8s1); Taras (Lviv) —
   Hoverla з татом і Zlata (e8s2); Daryna (Kyiv) — любить geography (e6s6); Mariia — Kharkiv; Oksana — Zelena Dolyna.
   Числа й факти — по два відкриті джерела (URL — tasks/…/write-eng-g8-e8s7.md, «Нотатки агента»).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e8s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s7",
  grade: 8,
  weeks: [27, 30],
  title: "Ukraine: land, climate and people",
  why: "To talk about where Ukraine is, its climate and its people. And to use numbers and statistics.",
  requires: ["e5s10l1", "e5s10l5", "e5s10l6", "e5s5l6", "e4s6l4"],
  meta: { author: "writer-e8s7", created: "2026-11-25", factcheck: null, teacher: null },
  badges: [
    { id: "e8s7boss", name: "Ukraine expert", icon: "trophy", desc: "Finish the final lesson “Ukraine: the class project”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s7l1",
      title: "Where is Ukraine? Borders and neighbours",
      short: "Neighbours",
      icon: "map",
      status: "draft",
      why: "People often ask where Ukraine is. Learn to name its neighbours and say where they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where exactly is Ukraine?",
          body: `<p class="lead">Emma’s class is making a big map for their project “Countries of Europe”. Emma writes to Andrii.</p><p><i>Hi Andrii! My part of the map is Ukraine. Where exactly is it? Which countries are your neighbours? – Emma</i></p><p>How many neighbours has Ukraine got?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>How many countries are next to Ukraine?</p>`,
          opts: [
            "four",
            "seven",
            "eleven"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Ukraine has <b>seven</b> neighbours. The next screen shows them all."
        },
        {
          type: "info",
          title: "Ukraine and its neighbours",
          body: `<p>Ukraine is in <b>Eastern Europe</b>. In the south, it is on the Black Sea and the Sea of Azov.</p><p>Ukraine <b><u>bor</u>ders</b> seven countries:</p><ul><li>to the north – <b>Belarus</b></li><li>to the west – <b>Poland</b>, <b>Slovakia</b>, <b>Hungary</b></li><li>to the south-west – <b>Romania</b>, <b>Moldova</b></li><li>to the east – <b>Russia</b></li></ul><p>to <b>border</b> a country = to be next to it</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Belarus is", "Russia is", "Poland is", "Moldova is"],
          right: ["to the north of Ukraine.", "to the east of Ukraine.", "to the west of Ukraine.", "to the south-west of Ukraine."],
          hint: "Look at the list of neighbours again. Start with Belarus.",
          fbOk: "Good eye!",
          fbBad: "Check the list: north, west, south-west, east.",
          fbText: "Belarus – to the <b>north</b>. Russia – to the <b>east</b>. Poland – to the <b>west</b>. Moldova – to the <b>south-west</b>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Emma is drawing the west part of her map. Which country is to the west of Ukraine?</p>`,
          opts: [
            "Belarus",
            "Slovakia",
            "Russia"
          ],
          correct: 1,
          hint: "Find the line “to the west” in the list.",
          fbOk: "Right.",
          fbBad: "Belarus is to the north. Russia is to the east.",
          fbText: "To the west: Poland, <b>Slovakia</b> and Hungary. Belarus is to the north, and Russia is to the east."
        },
        {
          type: "info",
          title: "In the west or to the west?",
          body: `<ul><li>Lviv is <b>in the west of</b> Ukraine. → Lviv is inside Ukraine.</li><li>Poland is <b>to the west of</b> Ukraine. → Poland is outside Ukraine.</li><li>Odesa is <b>on</b> the Black Sea. → a city next to a sea or a river: <b>on</b></li></ul><p>Say <b>the</b> before north, south, east and west: in <b>the</b> north, to <b>the</b> east.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about Ukraine for Emma’s map.</p>`,
          text: "Taras lives in Lviv. Lviv is {*in|to} the west of Ukraine. Poland is {*to|in} the west of Ukraine. Mariia’s city, Kharkiv, is {*in|to} the north-east of Ukraine. Odesa is {*on|in} the Black Sea.",
          hint: "Is the place inside Ukraine or outside it?",
          fbOk: "Exactly.",
          fbBad: "Inside Ukraine – in. Outside Ukraine – to.",
          fbText: "Lviv and Kharkiv are inside Ukraine → <b>in</b> the west, <b>in</b> the north-east. Poland is outside → <b>to</b> the west. A city next to a sea → <b>on</b> the Black Sea."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s note is wrong.</p>`,
          text: "Ukraine is in Eastern Europe. Belarus is [in] the north of Ukraine, and Hungary is to the west.",
          hint: "Is Belarus inside Ukraine?",
          fbOk: "Good eye!",
          fbBad: "Look at the words before the north.",
          fbText: "Belarus is outside Ukraine, so: Belarus is <b>to</b> the north of Ukraine."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Belarus, Poland, Slovakia, Hungary, Romania, Moldova and Russia are next to Ukraine.</p>`,
          before: "Ukraine",
          after: "seven countries.",
          answer: ["borders", "neighbours"],
          hint: "Find the verb in the box “Ukraine and its neighbours”.",
          fbOk: "Well done!",
          fbBad: "Ukraine … seven countries = it is next to them.",
          fbText: "Ukraine <b>borders</b> seven countries. To <b>border</b> a country = to be next to it."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma asks: “Where is Belarus?” Andrii answers. Start with <i>Belarus</i>.</p>`,
          tiles: ["Belarus", "is", "to the north", "of Ukraine"],
          answer: "Belarus is to the north of Ukraine.",
          extra: ["in the north"],
          hint: "Belarus is outside Ukraine: in or to?",
          fbOk: "Well done!",
          fbBad: "Belarus is outside Ukraine.",
          fbText: "<b>Belarus is to the north of Ukraine.</b> It is outside Ukraine, so we say <b>to</b> the north."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii answers Emma.</p>`,
          text: "Hi Emma! Ukraine is in Eastern {*Europe|European}. It borders seven {*countries|country}. Belarus is to the north, and Romania and Moldova are to the {*south-west|north-west}. In the south, Ukraine is {*on|in} the Black Sea and the Sea of Azov. Good luck with your map! – Andrii",
          hint: "Look at the list of neighbours. Then think: a sea – in or on?",
          fbOk: "Well done!",
          fbBad: "Check the list of neighbours again.",
          fbText: "In Eastern <b>Europe</b>. Seven <b>countries</b> – more than one. Romania and Moldova are to the <b>south-west</b>. Ukraine is <b>on</b> the Black Sea."
        }
      ],
      outro: {
        text: "Ukraine is in Eastern Europe. It borders seven countries: Belarus is to the north of Ukraine, and Lviv is in the west of Ukraine.",
        learned: [
          "Name the seven neighbours of Ukraine.",
          "Say where a country is: to the north of Ukraine.",
          "Use in the west of and to the west of correctly.",
          "Use the verb border."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s7l2",
      title: "The Carpathians, the Black Sea, the Dnipro: the or no article?",
      short: "Articles: places",
      icon: "river",
      status: "draft",
      why: "Some place names have the, and some don’t. Learn which ones need the.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Why the Carpathians, but Hoverla?",
          body: `<p class="lead">Taras sends Emma photos from the summer.</p><ul><li>Photo 1: Hiking in <b>the</b> Carpathians with Dad and Zlata.</li><li>Photo 2: We’re on top of Hoverla!</li><li>Photo 3: Zlata swimming in Lake Svitiaz.</li><li>Photo 4: A boat on <b>the</b> Dnipro in Kyiv.</li></ul><p>Why do we say <i>the Carpathians</i>, but just <i>Hoverla</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Last summer, Taras and Zlata went to Odesa. Which sentence is correct?</p>`,
          opts: [
            "We swam in Black Sea.",
            "We swam in the Black Sea.",
            "We swam in a Black Sea."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Seas have <b>the</b>: <b>the Black Sea</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Place names: the or no article?",
          body: `<p><b>the</b> +</p><ul><li>rivers: <b>the</b> Dnipro, <b>the</b> Danube</li><li>seas: <b>the</b> Black Sea, <b>the</b> Sea of Azov</li><li>mountain ranges (a group of mountains): <b>the</b> Carpathians</li></ul><p><b>no article</b> +</p><ul><li>countries: Ukraine, Poland</li><li>cities: Kyiv, Lviv</li><li>lakes: Lake Svitiaz</li><li>one mountain: Hoverla</li></ul><p>But: <b>the</b> UK, <b>the</b> USA.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Which names need <i>the</i>?</p>`,
          bins: ["the", "no article"],
          items: [
            ["Danube", 0],
            ["Black Sea", 0],
            ["Carpathians", 0],
            ["Poland", 1],
            ["Lviv", 1],
            ["Lake Svitiaz", 1],
            ["Hoverla", 1]
          ],
          hint: "Is it a river, a sea or a group of mountains? Then it needs the.",
          fbOk: "Well done!",
          fbBad: "Rivers, seas and mountain ranges – the. Countries, cities, lakes, one mountain – no article.",
          fbText: "<b>the</b> Danube (a river), <b>the</b> Black Sea (a sea), <b>the</b> Carpathians (a mountain range). No article: Poland, Lviv, Lake Svitiaz, Hoverla."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his summer.</p>`,
          text: "In August, we went to {*the Carpathians|Carpathians}. We climbed {*Hoverla|the Hoverla}. Then we drove north to {*Lake Svitiaz|the Lake Svitiaz} and swam every day.",
          hint: "A group of mountains, one mountain, a lake: which one needs the?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: only rivers, seas and mountain ranges have the.",
          fbText: "<b>the Carpathians</b> – a mountain range. <b>Hoverla</b> – one mountain, no article. <b>Lake Svitiaz</b> – a lake, no article."
        },
        {
          type: "info",
          title: "Dnipro or the Dnipro?",
          body: `<p>Two places have the same name:</p><ul><li><b>the Dnipro</b> – a river. Kyiv is on <b>the</b> Dnipro.</li><li><b>Dnipro</b> – a big city on this river.</li></ul><p>The article tells you: a river or a city.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna makes a quiz for the geography club.</p>`,
          text: "1. Kyiv is on {*the Dnipro|Dnipro}. 2. The city of {*Dnipro|the Dnipro} is on the same river. 3. {*The Danube|Danube} flows into the Black Sea.",
          hint: "A river or a city?",
          fbOk: "Right.",
          fbBad: "Rivers have the. Cities have no article.",
          fbText: "Kyiv is on <b>the Dnipro</b> (the river). The city of <b>Dnipro</b> – no article. <b>The Danube</b> – a river."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Emma writes to Taras. One word is wrong.</p>`,
          text: "Your photos are great! Next summer, I want to visit [the] Ukraine and see the Carpathians.",
          hint: "Look at the country.",
          fbOk: "Good eye!",
          fbBad: "Countries have no article.",
          fbText: "Ukraine is a country: <b>visit Ukraine</b>, without <i>the</i>. <i>The Carpathians</i> is correct: it’s a mountain range."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras and Zlata were in Odesa in July.</p>`,
          before: "Every morning, we swam in",
          after: "Black Sea.",
          answer: "the",
          hint: "Is it a sea, a lake or a city?",
          fbOk: "Yes!",
          fbBad: "Seas need an article.",
          fbText: "Seas have <b>the</b>: we swam in <b>the</b> Black Sea."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "The Hoverla is in the Carpathians.",
            "Hoverla is in Carpathians.",
            "Hoverla is in the Carpathians."
          ],
          correct: 2,
          hint: "One mountain or a group of mountains?",
          fbOk: "Exactly.",
          fbBad: "Hoverla is one mountain. The Carpathians are a mountain range.",
          fbText: "<b>Hoverla is in the Carpathians.</b> One mountain – no article. A mountain range – <b>the</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes the labels for her map of Ukraine.</p>`,
          text: "The capital is {*Kyiv|the Kyiv}. It’s on {*the Dnipro|Dnipro}. The highest mountain is {*Hoverla|the Hoverla}, in the Carpathians. In the south-west, {*the Danube|Danube} is on the border with Romania. And in the west of the map, here is {*the UK|UK} – my country!",
          hint: "City, river, one mountain, river, the UK: which ones need the?",
          fbOk: "Well done!",
          fbBad: "Check the rule: rivers – the; cities and one mountain – no article.",
          fbText: "<b>Kyiv</b> – a city. <b>the Dnipro</b> and <b>the Danube</b> – rivers. <b>Hoverla</b> – one mountain. <b>the UK</b> – a special country name with <i>the</i>."
        }
      ],
      outro: {
        text: "Rivers, seas and mountain ranges have the: the Dnipro, the Black Sea, the Carpathians. Countries, cities, lakes and one mountain have no article: Ukraine, Kyiv, Lake Svitiaz, Hoverla.",
        learned: [
          "Use the with rivers, seas and mountain ranges.",
          "Use no article with countries, cities, lakes and one mountain.",
          "Remember the UK and the USA.",
          "Tell the Dnipro (a river) from Dnipro (a city)."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s7l3",
      title: "Hot summers, cold winters: the climate of Ukraine",
      short: "Climate",
      icon: "leaf",
      status: "draft",
      why: "The weather changes every day, but the climate doesn’t. Learn to talk about the climate of Ukraine.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Is it cold everywhere today?",
          body: `<p class="lead">It’s a January morning. The friends chat about the weather.</p><p><b>Emma:</b> It’s 5 degrees and raining here. What about you?<br><b>Taras:</b> It’s snowing in Lviv! Minus three.<br><b>Mariia:</b> Minus eight in Kharkiv, but it’s sunny.<br><b>Oksana:</b> Minus six in our village. Dmytro is making a snowman!</p><p>Where is it the coldest today?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Taras: Minus three. Mariia: Minus eight. Oksana: Minus six.</i></p><p>Where is it the coldest this morning?</p>`,
          opts: [
            "in Lviv",
            "in Oksana’s village",
            "in Kharkiv"
          ],
          correct: 2,
          hint: "Which number is the lowest: minus three, six or eight?",
          fbOk: "Yes!",
          fbBad: "Minus eight is colder than minus three.",
          fbText: "Minus eight is the lowest temperature, so it’s the coldest <b>in Kharkiv</b>."
        },
        {
          type: "info",
          title: "Weather or climate?",
          body: `<ul><li><b><u>wea</u>ther</b> – what it is like today or this week: It’s snowing in Lviv today.</li><li><b><u>cli</u>mate</b> – the usual weather in a place for many years: In Ukraine, winters are usually cold.</li></ul><p>Most of Ukraine has a <b>con<u>ti</u>nental</b> climate: warm or hot summers and cold winters.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is about the climate?</p>`,
          opts: [
            "In Ukraine, summers are usually warm or hot.",
            "It’s raining in Lviv this morning.",
            "It was sunny in Kharkiv yesterday."
          ],
          correct: 0,
          hint: "Climate is the usual weather for many years.",
          fbOk: "Right.",
          fbBad: "Today or yesterday – that’s the weather.",
          fbText: "<b>Usually</b> warm or hot summers – that’s the climate. Rain this morning and sun yesterday – that’s the weather."
        },
        {
          type: "info",
          title: "The climate of Ukraine",
          body: `<ul><li>Most of Ukraine: a continental climate – warm or hot summers, cold winters.</li><li>The south, near the Black Sea: winters are <b>milder</b>. <b>mild</b> = not very cold.</li><li>The southern coast of Crimea: a <b>Mediterranean</b> climate, with mild winters.</li><li>The west, especially the Carpathians: the most rain and snow – it is <b>wet</b>.</li><li>The south and the south-east: the least rain – it is <b>dry</b>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A mild winter is", "A continental climate has", "A dry place gets", "A wet place gets"],
          right: ["not very cold.", "hot summers and cold winters.", "little rain.", "a lot of rain."],
          hint: "Which word means not very cold?",
          fbOk: "Good eye!",
          fbBad: "Look at the climate box again.",
          fbText: "<b>Mild</b> – not very cold. <b>Continental</b> – hot summers and cold winters. <b>Dry</b> – little rain. <b>Wet</b> – a lot of rain."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna compares the regions for the geography club.</p>`,
          text: "The Carpathians get {*more|less} rain and snow than the south. Winters in Odesa are usually {*milder|colder} than in Kharkiv. The south-east is {*drier|wetter} than the west.",
          hint: "Odesa is in the south, on the Black Sea. Where is the most rain?",
          fbOk: "Exactly.",
          fbBad: "Check the climate box: wet west, dry south and south-east, mild south.",
          fbText: "The Carpathians get <b>more</b> rain and snow. Odesa is in the south, so its winters are <b>milder</b>. The south-east is <b>drier</b> than the west."
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences about Ukraine are true?</p>`,
          opts: [
            "Most of Ukraine has a continental climate.",
            "The south and the south-east get the most rain.",
            "The southern coast of Crimea has mild winters.",
            "Winters in most of Ukraine are mild."
          ],
          correct: [0, 2],
          hint: "Read the climate box again: where is it wet, and where is it mild?",
          fbOk: "Right.",
          fbBad: "The west gets the most rain. In most of Ukraine, winters are cold.",
          fbText: "Most of Ukraine has a <b>continental</b> climate, with <b>cold</b> winters. The southern coast of Crimea has <b>mild</b> winters. The <b>west</b> gets the most rain."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Daryna writes on her poster: “On the Black Sea coast, winters are not very cold.”</p>`,
          before: "Winters on the Black Sea coast are",
          after: ".",
          answer: ["mild", "milder", "warmer"],
          hint: "The word from the lesson means not very cold.",
          fbOk: "Well done!",
          fbBad: "Look at the climate box: … = not very cold.",
          fbText: "<b>Mild</b> = not very cold. In the south, winters are <b>milder</b> than in the north."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Daryna writes about the west of Ukraine.</p>`,
          tiles: ["the Carpathians", "get", "the most", "rain and snow"],
          answer: "The Carpathians get the most rain and snow.",
          extra: ["gets"],
          hint: "The Carpathians are many mountains: get or gets?",
          fbOk: "Well done!",
          fbBad: "The Carpathians – they: get, not gets.",
          fbText: "<b>The Carpathians get the most rain and snow.</b> The Carpathians are plural, so the verb is <b>get</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna’s poster “The climate of Ukraine”.</p>`,
          text: "Most of Ukraine has a {*continental|Mediterranean} climate. Summers are warm or hot, and winters are {*cold|mild}. Near the Black Sea, winters are {*milder|colder}. The southern coast of Crimea has a {*Mediterranean|continental} climate. The {*west|south} gets the most rain and snow.",
          hint: "Read the climate box again, line by line.",
          fbOk: "Well done!",
          fbBad: "Continental for most of Ukraine, Mediterranean for the coast of Crimea.",
          fbText: "Most of Ukraine – <b>continental</b>, with <b>cold</b> winters. Near the Black Sea, winters are <b>milder</b>. The coast of Crimea – <b>Mediterranean</b>. The <b>west</b> is the wettest."
        }
      ],
      outro: {
        text: "Weather is what it is like today; climate is the usual weather for many years. Most of Ukraine has a continental climate: warm or hot summers and cold winters.",
        learned: [
          "Tell weather from climate.",
          "Describe the climate of Ukraine: continental, mild, wet, dry.",
          "Compare the regions: The south is drier than the west."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s7l4",
      title: "Millions, per cent and half: numbers and statistics",
      short: "Statistics",
      icon: "chart",
      status: "draft",
      why: "Reports and the news are full of numbers. Learn to read big numbers and talk about statistics.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How can Andrii say it?",
          body: `<p class="lead">Andrii asks the 24 pupils in his class: “Have you ever been to these places?”</p><ul><li>the Black Sea – 18 pupils</li><li>the Carpathians – 12 pupils</li><li>Hoverla – 8 pupils</li><li>Lake Svitiaz – 6 pupils</li><li>the Danube – 0 pupils</li></ul><p>He wants to write about it for the school newspaper. How can he say 18 out of 24 in words?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>18 of the 24 pupils have been to the Black Sea. Which words are true?</p>`,
          opts: [
            "none of the class",
            "a third of the class",
            "most of the class"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "18 of 24 is more than half, so it’s <b>most of</b> the class. The next screens show how to talk about parts."
        },
        {
          type: "info",
          title: "Half, a third, per cent",
          body: `<ul><li>12 of 24 = <b>half</b> the class = 50 <b>per cent</b> (50%)</li><li>8 of 24 = <b>a third</b> of the class</li><li>6 of 24 = <b>a quarter</b> of the class = 25 per cent</li><li>18 of 24 = <b>three quarters</b> of the class = 75 per cent</li></ul><p><b>per <u>cent</u></b> – two words in British English (<i>percent</i> is OK, too). No -s: 50 per cent.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["half", "a quarter", "three quarters", "a third"],
          right: ["50 per cent", "25 per cent", "75 per cent", "about 33 per cent"],
          hint: "Half of 100 is 50. What is a quarter of 100?",
          fbOk: "Good eye!",
          fbBad: "Look at the class numbers again: 12, 6, 18 and 8 of 24.",
          fbText: "<b>Half</b> = 50 per cent. <b>A quarter</b> = 25 per cent. <b>Three quarters</b> = 75 per cent. <b>A third</b> = about 33 per cent."
        },
        {
          type: "info",
          title: "Most of, some of, none of",
          body: `<ul><li><b>most of</b> = more than half: <b>Most of</b> us have been to the Black Sea.</li><li><b>some of</b> = a part, not all: <b>Some of</b> us have climbed Hoverla.</li><li><b>none of</b> = not one: <b>None of</b> us have been to the Danube.</li></ul><p>After <i>of</i>, say <b>the</b> + noun or <b>us / them</b>: most of <b>the</b> pupils, most of <b>them</b>.<br>Not: <s>most of pupils</s> (but: most pupils).</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Black Sea – 18, Lake Svitiaz – 6, the Danube – 0 (of 24 pupils).</p>`,
          text: "{*Most of|Most} the pupils have been to the Black Sea. {*Some|None} of them have been to Lake Svitiaz. {*None|Most} of them have been to the Danube.",
          hint: "Look at the numbers: 18, 6 and 0 of 24.",
          fbOk: "Yes!",
          fbBad: "18 – more than half. 6 – a part. 0 – not one.",
          fbText: "18 of 24 → <b>Most of</b> the pupils. 6 → <b>Some</b> of them. 0 → <b>None</b> of them. Not <s>Most the pupils</s>: say <b>most of the</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s first sentence is wrong.</p>`,
          text: "Most [of] pupils in our class have been to the Black Sea.",
          hint: "Is there the after of?",
          fbOk: "Good eye!",
          fbBad: "most of + the + noun, or most + noun.",
          fbText: "Say <b>Most pupils</b> or <b>Most of the pupils</b>. Not <s>most of pupils</s>."
        },
        {
          type: "info",
          title: "Big numbers",
          body: `<ul><li>603,628 km² – six hundred and three thousand, six hundred and twenty-eight square kilometres. This is the area of Ukraine.</li><li>48.5 million – forty-eight <b>point</b> five million</li></ul><p>In English, a comma separates thousands (2,500). A point shows a part (2.5).</p><p><b>million</b> after a number – no -s: two <b>million</b> people. But: <b>millions of</b> people.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>How do you say <b>48.5 million</b>?</p>`,
          opts: [
            "forty-eight comma five millions",
            "forty-eight point five million",
            "forty-eight point five millions"
          ],
          correct: 1,
          hint: "Is it a comma or a point? Is there an -s after a number?",
          fbOk: "Right.",
          fbBad: "Say point, and no -s after a number.",
          fbText: "<b>forty-eight point five million</b>. In English, it’s a <b>point</b>, and <i>million</i> after a number has no -s."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>According to the 2001 census, 32,574,500 of the 48,457,100 people in Ukraine lived in towns and cities. That is 67.2 per cent.</p>`,
          text: "In 2001, about 48.5 {*million|millions} people lived in Ukraine. About 67 {*per cent|per cents} of them lived in towns and cities. That is about two {*thirds|third}.",
          hint: "After a number: million or millions? per cent or per cents?",
          fbOk: "Exactly.",
          fbBad: "No -s on million and per cent after a number.",
          fbText: "48.5 <b>million</b>, 67 <b>per cent</b> – no -s. But <b>two thirds</b> – more than one third, so -s."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>12 of the 24 pupils have been to the Carpathians.</p>`,
          after: "the class have been to the Carpathians.",
          answer: ["half", "half of", "50 per cent of", "50 percent of", "fifty per cent of", "fifty percent of", "50% of"],
          hint: "12 of 24: what part of the class is it?",
          fbOk: "Well done!",
          fbBad: "12 is a part of 24. Look at the box “Half, a third, per cent”.",
          fbText: "12 of 24 = <b>half</b> the class = 50 per cent."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii’s article for the school newspaper. (There are 24 pupils in the class.)</p>`,
          text: "We asked 24 pupils about places in Ukraine. Three {*quarters|quarter} of them have been to the Black Sea. {*Half|A third} the class have been to the Carpathians, and {*a third|a quarter} have climbed Hoverla. Only 25 {*per cent|per cents} have swum in Lake Svitiaz. {*None|Some} of us have been to the Danube.",
          hint: "18, 12, 8, 6 and 0 of 24: look at the box “Half, a third, per cent”.",
          fbOk: "Well done!",
          fbBad: "Check: 18 – three quarters, 12 – half, 8 – a third, 0 – none.",
          fbText: "18 → three <b>quarters</b>. 12 → <b>half</b>. 8 → <b>a third</b>. 6 → 25 <b>per cent</b>. 0 → <b>none</b> of us."
        }
      ],
      outro: {
        text: "Half, a third, a quarter, 75 per cent, most of, some of, none of: now you can talk about numbers and statistics.",
        learned: [
          "Say parts: half, a third, a quarter, three quarters.",
          "Use per cent and million without -s after a number.",
          "Use most of, some of and none of with the, us or them.",
          "Read big numbers like 603,628 and 48.5 million."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s7l5",
      title: "Who lives in Ukraine? People and nationalities",
      short: "Nationalities",
      icon: "users",
      status: "draft",
      why: "Many nationalities live in Ukraine. Learn their names and how to talk about them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Is everyone in Ukraine Ukrainian?",
          body: `<p class="lead">Emma has a question for Andrii.</p><p><b>Emma:</b> In my class, there are families from many countries. Is it the same in Ukraine?<br><b>Andrii:</b> Yes! Our teacher showed us the results of the 2001 census. People of more than 130 nationalities lived in Ukraine.<br><b>Emma:</b> Wow! What’s a census?</p><p>What do you think a census is?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The results of the 2001 census: people of more than 130 nationalities.” What is a census?</p>`,
          opts: [
            "a big map of a country",
            "a holiday for all nationalities",
            "a time when a country counts all its people"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "A <b><u>cen</u>sus</b> is when a country counts all its people. The census of 2001 is the last census in Ukraine."
        },
        {
          type: "info",
          title: "The 2001 census: nationalities",
          body: `<p>According to the 2001 census:</p><ul><li>People of <b>more than 130</b> nationalities lived in Ukraine.</li><li><b>Ukrainians</b> – 77.8 per cent: more than three quarters.</li><li><b>Russians</b> – 17.3 per cent.</li><li>Belarusians, Moldovans, Crimean Tatars, Bulgarians, Hungarians, Romanians, Poles, Jews and others – less than 1 per cent each.</li><li>67.5 per cent said Ukrainian was their <b>native language</b>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>What does the 2001 census say?</p>`,
          opts: [
            "Half of the people were Russians.",
            "Most of the people were Hungarians.",
            "More than three quarters of the people were Ukrainians."
          ],
          correct: 2,
          hint: "Find the numbers in the census box: 77.8 and 17.3.",
          fbOk: "Right.",
          fbBad: "Russians – 17.3 per cent. Hungarians – less than 1 per cent.",
          fbText: "Ukrainians – 77.8 per cent, <b>more than three quarters</b>. Russians – 17.3 per cent, not half. Hungarians – less than 1 per cent."
        },
        {
          type: "info",
          title: "Countries and nationalities",
          body: `<ul><li>U<u>kraine</u> → U<u>krai</u>nian → Ukrainians</li><li>Poland → Polish → Poles</li><li><u>Hun</u>gary → Hungarian → Hungarians</li><li>Bulgaria → Bulgarian → Bulgarians</li><li>Bela<u>rus</u> → Belarusian → Belarusians</li></ul><p>Nationality words always start with a capital letter: <b>H</b>ungarian.</p><p>Also: popu<u>la</u>tion – all the people in a place; nation<u>al</u>ity.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Poland", "Hungary", "Bulgaria", "Belarus"],
          right: ["Polish", "Hungarian", "Bulgarian", "Belarusian"],
          hint: "Look at the beginning of each word.",
          fbOk: "Good eye!",
          fbBad: "Look at the box “Countries and nationalities”.",
          fbText: "Poland → <b>Polish</b>. Hungary → <b>Hungarian</b>. Bulgaria → <b>Bulgarian</b>. Belarus → <b>Belarusian</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["U|+krai|ni|an", "+Hun|ga|ry", "Bel|a|+rus", "pop|u|+la|tion"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the box.",
          fbText: "U<u>krai</u>nian, <u>Hun</u>gary, Bela<u>rus</u>, popu<u>la</u>tion."
        },
        {
          type: "info",
          title: "Where do they live?",
          body: `<ul><li>Many <b>Hungarians</b> live in Zakarpattia, in the west, near Hungary.</li><li>Many <b>Bulgarians</b> live in the south, in the Odesa region.</li><li>Many <b>Crimean Tatars</b> live in Crimea.</li></ul><p><b>people</b> is plural: People <b>live</b> … (not <s>lives</s>).<br>The <b>population</b> = all the people: The population of Ukraine was about 48.5 million in 2001.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes for Emma’s class.</p>`,
          text: "Many {*Hungarians|Hungary} live in Zakarpattia, {*in|to} the west of Ukraine. Many {*Bulgarians|Bulgaria} live in the south. In 2001, most people in Ukraine {*were|was} Ukrainians.",
          hint: "People or a country? And people is plural.",
          fbOk: "Exactly.",
          fbBad: "Hungary is a country. The people are Hungarians.",
          fbText: "Many <b>Hungarians</b>, many <b>Bulgarians</b> – people. Zakarpattia is inside Ukraine → <b>in</b> the west. People is plural → most people <b>were</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s sentence is wrong.</p>`,
          text: "In 2001, 77.8 per cent of the people in Ukraine [was] Ukrainians.",
          hint: "Look at the verb. Is people singular or plural?",
          fbOk: "Good eye!",
          fbBad: "People is plural.",
          fbText: "<b>77.8 per cent of the people were Ukrainians.</b> The verb goes with <i>people</i>, and <i>people</i> is plural."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Andrii writes the main fact about the 2001 census.</p>`,
          tiles: ["more than", "three quarters", "of the people", "were", "Ukrainians"],
          answer: ["More than three quarters of the people were Ukrainians.", "Ukrainians were more than three quarters of the people."],
          extra: ["was"],
          hint: "People is plural: were or was?",
          fbOk: "Well done!",
          fbBad: "People is plural: were or was?",
          fbText: "<b>More than three quarters of the people were Ukrainians.</b> 77.8 per cent is more than 75 per cent."
        }
      ],
      outro: {
        text: "According to the 2001 census, people of more than 130 nationalities lived in Ukraine. More than three quarters of them were Ukrainians.",
        learned: [
          "Name nationalities: Ukrainian, Polish, Hungarian, Bulgarian.",
          "Say what a census is.",
          "Talk about the nationalities of Ukraine with numbers.",
          "Use people as a plural noun."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s7l6",
      title: "Ukraine in numbers: a short report",
      short: "Report",
      icon: "scroll",
      status: "draft",
      why: "A good report has facts, numbers and sources. Learn to read and write a short report.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Andrii’s report",
          body: `<p class="lead">Emma’s class project “Countries of Europe” needs a short report about Ukraine. Andrii writes it.</p><p>His teacher, Ms Lysenko, says: “A good report gives facts and numbers. For every number, say the year and the source.”</p><p>Why do we need the year?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukraine in numbers, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Ukraine is in Eastern Europe. Its area is 603,628 km². It borders seven countries, and in the south it is on the Black Sea and the Sea of Azov. The longest river is the Dnipro. The highest mountain is Hoverla (2,061 m), in the Carpathians. Most of Ukraine has a continental climate, with warm or hot summers and cold winters.</i></p><p>What is 603,628 km²?</p>`,
          opts: [
            "the area of Ukraine",
            "the population of Ukraine",
            "the height of Hoverla"
          ],
          correct: 0,
          hint: "km² is for land, not people.",
          fbOk: "Yes!",
          fbBad: "Read the second sentence again.",
          fbText: "<b>The area of Ukraine</b> is 603,628 km². Hoverla is 2,061 m high."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Ukraine in numbers, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Ukraine’s last census was in 2001. According to the census, about 48.5 million people lived in Ukraine then. About two thirds of them lived in towns and cities. People of more than 130 nationalities lived in Ukraine. More than three quarters of the people were Ukrainians. For 67.5 per cent, Ukrainian was their native language.</i></p><p>What does Andrii say?</p>`,
          opts: [
            "Most people lived in villages.",
            "The numbers are from 2001.",
            "Ukrainian was the native language of more than half of the people.",
            "There were about 48.5 million people in 2021."
          ],
          correct: [1, 2],
          hint: "Look for the year and for the words two thirds.",
          fbOk: "Right.",
          fbBad: "Two thirds lived in towns and cities. The year is 2001.",
          fbText: "The numbers are from <b>2001</b>. Two thirds lived in <b>towns and cities</b>, not villages. 67.5 per cent is <b>more than half</b>."
        },
        {
          type: "info",
          title: "Words for a report",
          body: `<ul><li>Give the source: <b>According to</b> the 2001 census, …</li><li>Give the year: <b>In 2001</b>, about 48.5 million people lived in Ukraine.</li><li>Round numbers: <b>about</b> 48.5 million, <b>more than</b> 130, <b>less than</b> 1 per cent.</li></ul><p>Numbers change. Without a year, the reader can’t check a number.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Census 2001: Ukrainians – 77.8%, Hungarians – 0.3%, more than 130 nationalities.</p>`,
          text: "{*According to|According} the 2001 census, Ukrainians were {*more than|less than} three quarters of the people. Hungarians were {*less than|more than} 1 per cent.",
          hint: "Compare: 77.8 and 75; 0.3 and 1.",
          fbOk: "Well done!",
          fbBad: "Is 77.8 bigger than 75? Is 0.3 bigger than 1?",
          fbText: "<b>According to</b> – with <i>to</i>. 77.8 per cent is <b>more than</b> three quarters (75). 0.3 per cent is <b>less than</b> 1 per cent."
        },
        {
          type: "choice",
          sk: "write",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is best for a report?</p>`,
          opts: [
            "About 48.5 millions people live in Ukraine.",
            "Ukraine has got a lot of people.",
            "In 2001, about 48.5 million people lived in Ukraine."
          ],
          correct: 2,
          hint: "A good report gives the year and the right form of million.",
          fbOk: "Exactly.",
          fbBad: "Look at the box “Words for a report”.",
          fbText: "<b>In 2001, about 48.5 million people lived in Ukraine.</b> It gives the year and a number. <i>A lot of people</i> has no number, and <s>48.5 millions</s> is wrong."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s first draft is wrong.</p>`,
          text: "Ukraine is in Eastern Europe. It borders seven [country], and it is on the Black Sea.",
          hint: "Seven – one or more than one?",
          fbOk: "Good eye!",
          fbBad: "Seven is more than one.",
          fbText: "It borders seven <b>countries</b>: more than one, so -ies."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Andrii gives the source of his number.</p>`,
          before: "According to the",
          after: "census, about 48.5 million people lived in Ukraine.",
          answer: ["2001"],
          hint: "When was the last census?",
          fbOk: "Yes!",
          fbBad: "Find the year of the census in the report.",
          fbText: "According to the <b>2001</b> census. The last census in Ukraine was in 2001."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes about towns and villages in 2001.</p>`,
          tiles: ["about", "two thirds", "of the people", "lived", "in towns and cities"],
          answer: "About two thirds of the people lived in towns and cities.",
          extra: ["two third"],
          hint: "Start with About. Two thirds – is there an -s?",
          fbOk: "Well done!",
          fbBad: "More than one third: thirds.",
          fbText: "<b>About two thirds of the people lived in towns and cities.</b> Two <b>thirds</b> – with -s."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii finishes his report.</p>`,
          text: "Ukraine is a big country in Eastern Europe. {*Most of|Most} its land has a continental climate. {*The Carpathians|Carpathians} get the most rain and snow. According to the 2001 census, people of more {*than|that} 130 nationalities lived in {*Ukraine|the Ukraine}, and about 48.5 {*million|millions} people lived there.",
          hint: "Check: most of, the with mountain ranges, more than, no article with countries.",
          fbOk: "Well done!",
          fbBad: "Look at the lessons about articles and numbers again.",
          fbText: "<b>Most of</b> its land. <b>The Carpathians</b> – a mountain range. More <b>than</b> 130. <b>Ukraine</b> – no article. 48.5 <b>million</b> – no -s."
        }
      ],
      outro: {
        text: "A good report gives facts, numbers, the year and the source: “According to the 2001 census, …”.",
        learned: [
          "Read a short report with facts and numbers.",
          "Give the source and the year: According to the 2001 census, …",
          "Use about, more than and less than with numbers.",
          "Write sentences for a report about Ukraine."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s7l7",
      title: "Ukraine: the class project",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e8s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Emma’s class?",
          body: `<p class="lead">Emma’s class is finishing the project “Countries of Europe”. Their page about Ukraine needs help.</p><p>Check their map, their climate notes and their numbers. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about Ukraine’s neighbours.</p>`,
          text: "Ukraine borders seven countries. Hungary is {*to|in} the west of Ukraine. Lviv is {*in|to} the west of Ukraine. Belarus is to the {*north|south}.",
          pre: "e8s7l1",
          hint: "Inside Ukraine or outside it?",
          fbOk: "Yes!",
          fbBad: "Inside – in. Outside – to.",
          fbText: "Hungary is outside → <b>to</b> the west. Lviv is inside → <b>in</b> the west. Belarus is to the <b>north</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Which label is correct?</p>`,
          opts: [
            "Lake Svitiaz is in the north-west of the Ukraine.",
            "The Dnipro flows into the Black Sea.",
            "Dnipro flows into Black Sea."
          ],
          correct: 1,
          pre: "e8s7l2",
          fbOk: "Right.",
          fbBad: "Rivers and seas – the. Countries – no article.",
          fbText: "<b>The Dnipro flows into the Black Sea.</b> A river and a sea need <b>the</b>. A country has no article: <s>the Ukraine</s> → Ukraine."
        },
        {
          type: "sort",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Sort the words.",
          body: `<p>Which names need <i>the</i>?</p>`,
          bins: ["the", "no article"],
          items: [
            ["Sea of Azov", 0],
            ["Carpathians", 0],
            ["UK", 0],
            ["Kharkiv", 1],
            ["Hoverla", 1],
            ["Hungary", 1]
          ],
          pre: "e8s7l2",
          fbOk: "Well done!",
          fbBad: "Seas, mountain ranges and the UK – the.",
          fbText: "<b>the</b> Sea of Azov, <b>the</b> Carpathians, <b>the</b> UK. No article: Kharkiv, Hoverla, Hungary."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Which climate note is true?</p>`,
          opts: [
            "The south-east is the wettest part of Ukraine.",
            "The southern coast of Crimea has a continental climate.",
            "Winters near the Black Sea are milder than in the north."
          ],
          correct: 2,
          pre: "e8s7l3",
          fbOk: "Exactly.",
          fbBad: "The west is the wettest. The coast of Crimea is Mediterranean.",
          fbText: "Near the Black Sea, winters are <b>milder</b>. The <b>west</b> is the wettest, and the coast of Crimea has a <b>Mediterranean</b> climate."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Emma’s class: 30 pupils. Been to Ukraine: 0. Want to visit Ukraine: 20. Know where Kyiv is: 15.</p>`,
          text: "{*None|Some} of us have been to Ukraine. {*Most|None} of us want to visit it. {*Half|A third} the class know where Kyiv is.",
          pre: "e8s7l4",
          hint: "0, 20 and 15 of 30.",
          fbOk: "Yes!",
          fbBad: "0 – none. 20 of 30 – more than half. 15 of 30 – half.",
          fbText: "0 → <b>None</b> of us. 20 of 30 → <b>Most</b> of us. 15 of 30 → <b>Half</b> the class."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Six of the 24 pupils have been to Lake Svitiaz. How much is it?</p>`,
          opts: [
            "25 per cent",
            "25 per cents",
            "a third"
          ],
          correct: 0,
          pre: "e8s7l4",
          fbOk: "Right.",
          fbBad: "6 of 24 is a quarter. Per cent has no -s.",
          fbText: "6 of 24 = a quarter = <b>25 per cent</b>. <i>Per cent</i> has no -s. A third of 24 is 8."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 7",
          title: "Write the missing word.",
          body: `<p>Write the word for the people from Hungary.</p>`,
          before: "Many",
          after: "live in Zakarpattia, in the west of Ukraine.",
          answer: ["Hungarians"],
          pre: "e8s7l5",
          hint: "Hungary → … (people)",
          fbOk: "Well done!",
          fbBad: "The people from Hungary are …",
          fbText: "Many <b>Hungarians</b> live in Zakarpattia, in the west, near Hungary."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Find the mistake.",
          body: `<p>One word in the class report is wrong.</p>`,
          text: "According to the 2001 census, about 48.5 [millions] people lived in Ukraine.",
          pre: "e8s7l4",
          fbOk: "Good eye!",
          fbBad: "Look at the word after 48.5.",
          fbText: "After a number, <i>million</i> has no -s: about 48.5 <b>million</b> people."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 9",
          title: "Put the words in order.",
          body: `<p>Emma writes the last sentence of the report. Start with <i>According to</i>.</p>`,
          tiles: ["According to", "the 2001 census,", "people of", "more than 130 nationalities", "lived", "in Ukraine"],
          answer: "According to the 2001 census, people of more than 130 nationalities lived in Ukraine.",
          extra: ["lives"],
          pre: "e8s7l6",
          hint: "Give the source first. People is plural: lived or lives?",
          fbOk: "Well done!",
          fbBad: "Start with the source: According to …",
          fbText: "<b>According to the 2001 census, people of more than 130 nationalities lived in Ukraine.</b> First the source, then the fact. The census is from 2001, so the verb is in the past: <b>lived</b>."
        }
      ],
      outro: {
        text: "You can now say where Ukraine is, describe its climate and talk about its people with numbers and sources.",
        learned: [
          "Describe where Ukraine is and name its neighbours.",
          "Use the or no article with place names.",
          "Describe the climate of Ukraine.",
          "Talk about statistics: half, a third, per cent, most of, none of."
        ]
      }
    }
  ]
});
