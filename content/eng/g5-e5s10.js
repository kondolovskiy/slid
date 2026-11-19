/* Слід · Англійська мова, 5 клас — «Ukraine and English-speaking countries» (e5s10)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), 5–6 кл., с. 20 (розд. 4.2.1): «Україна — загальні відомості про Україну»,
   «Країни виучуваної мови — загальні відомості»; функції — порівнювати, описувати місця, аргументувати свій вибір (because);
   граматика A2 (с. 21–22): comparatives (концентрично від e4s6l5), superlatives, the + superlatives (від e4s7l4), one of the + -est:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти й герої — власні (docs/design/english.md §8).
   Склад UK — лише перелік England, Scotland, Wales and Northern Ireland, без родового слова (facts/eng.md К1).
   «Fact file» немає в CD/OALD — урок 6 «Facts about my country» (reports/verify/plan-eng-g5.md Р3).
   Форми, наголос і факти — URL у tasks/…/write-eng-g5-e5s10.md, «Нотатки агента».
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s10 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s10",
  grade: 5,
  weeks: [32, 35],
  title: "Ukraine and English-speaking countries",
  why: "To tell people about Ukraine. And to learn about the countries where people speak English.",
  requires: ["e4s7l3", "e4s7l4", "e4s6l4", "e4s6l5", "e5s5l3", "e5s5l4"],
  meta: { author: "writer-e5s10", created: "2026-11-19", factcheck: "self", teacher: null },
  badges: [
    { id: "e5s10boss", name: "Country expert", icon: "trophy", desc: "Finish the final lesson “Ukraine and English-speaking countries”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s10l1",
      title: "Ukraine on the map",
      short: "Ukraine",
      icon: "map",
      status: "draft",
      why: "Your friends abroad want to know about Ukraine. Show them where the cities are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where is Lviv?",
          body: `<p class="lead">Emma’s class in England is making a map of Ukraine.</p><p><b>Emma:</b> Can you help us? Where is Lviv?<br><b>Taras:</b> Lviv is in the west of Ukraine. I live there!<br><b>Emma:</b> And where is Odesa?</p><p>How do we say where a city is?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Look at a map. Where is the north?</p>`,
          opts: [
            "at the top",
            "at the bottom",
            "on the left"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "On a map, the north is <b>at the top</b>. The next screen shows more."
        },
        {
          type: "info",
          title: "North, south, east, west",
          body: `<p>On a map:</p><ul><li><b>north</b> ↑ – at the top</li><li><b>south</b> ↓ – at the bottom</li><li><b>east</b> → – on the right</li><li><b>west</b> ← – on the left</li></ul><p>north + east = <b>north-east</b><br>south + west = <b>south-west</b></p><p>Lviv is <b>in the west of</b> Ukraine.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Kharkiv is in the north-east. North + east: which is correct?</p>`,
          opts: [
            "at the top, on the right",
            "at the top, on the left",
            "at the bottom, on the right"
          ],
          correct: 0,
          hint: "north + east. Where is the north? Where is the east?",
          fbOk: "Right.",
          fbBad: "Look at the arrows again.",
          fbText: "North is <b>at the top</b>. East is <b>on the right</b>. So north-east is at the top, on the right."
        },
        {
          type: "info",
          title: "Cities of Ukraine",
          body: `<ul><li><b>Kyiv</b> – the capital, on the Dnipro</li><li><b>Lviv</b> – in the west</li><li><b>Chernihiv</b> – in the north</li><li><b>Kharkiv</b> – in the north-east</li><li><b>Odesa</b> – in the south-west, on the Black Sea</li></ul><p>A city is <b>in</b> the west or the north.<br>A city is <b>on</b> a river or a sea.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Lviv is", "Chernihiv is", "Kharkiv is", "Odesa is"],
          right: ["in the west of Ukraine.", "in the north of Ukraine.", "in the north-east of Ukraine.", "on the Black Sea."],
          hint: "Look at the list of cities again.",
          fbOk: "Well done!",
          fbBad: "Check the list: west, north or north-east?",
          fbText: "<b>Lviv</b> – in the west. <b>Chernihiv</b> – in the north. <b>Kharkiv</b> – in the north-east. <b>Odesa</b> – on the Black Sea."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Lviv is {*in|on} the west of Ukraine. Odesa is {*on|in} the Black Sea. Kyiv is {*on|in} the Dnipro. Kharkiv is in the {*north-east|south-west}.",
          hint: "A part of the country: in. A river or a sea: on.",
          fbOk: "Exactly.",
          fbBad: "Is it a part of the country or a river?",
          fbText: "<b>In</b> the west. <b>On</b> the Black Sea, <b>on</b> the Dnipro. Kharkiv is in the <b>north-east</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Chernihiv is at the top of the map of Ukraine.</p>`,
          before: "Chernihiv is in the",
          after: "of Ukraine.",
          answer: "north",
          hint: "What is at the top of a map?",
          fbOk: "Yes!",
          fbBad: "Look at the arrows: what is at the top?",
          fbText: "At the top of a map is the <b>north</b>. Chernihiv is in the north of Ukraine."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! Ukraine is a big country in Europe. The capital is Kyiv. It’s on the Dnipro. I live in Lviv, in the west. My cousin lives in Odesa, on the Black Sea. Our flag is blue and yellow. – Taras</i></p><p>Where does Taras’s cousin live?</p>`,
          opts: [
            "in the west of Ukraine",
            "on the Black Sea",
            "on the Dnipro"
          ],
          correct: 1,
          hint: "Find “my cousin” in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about the cousin again.",
          fbText: "Taras’s cousin lives in Odesa, <b>on the Black Sea</b>. Taras lives in Lviv, in the west. Kyiv is on the Dnipro."
        }
      ],
      outro: {
        text: "On a map, the north is at the top. Lviv is in the west of Ukraine. Odesa is on the Black Sea.",
        learned: [
          "Name the north, the south, the east and the west.",
          "Say where a city is: in the west of Ukraine.",
          "Use on with rivers and seas: on the Dnipro."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s10l2",
      title: "Where do people speak English?",
      short: "English-speaking countries",
      icon: "globe",
      status: "draft",
      why: "People speak English in many countries. Learn their names, capitals and people.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Where are Andrii’s friends from?",
          body: `<p class="lead">Andrii has got friends in different countries.</p><p><i>Emma lives in England. Liam lives in Dublin, in Ireland. My cousin Maksym lives in Ottawa, in Canada. We all write to each other in English!</i></p><p>Where do people speak English?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is the capital of New Zealand?</p>`,
          opts: [
            "Wellington",
            "Sydney",
            "Dublin"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>Wellington</b>. Sydney is a city in Australia. Dublin is the capital of Ireland."
        },
        {
          type: "info",
          title: "English-speaking countries",
          body: `<ul><li><b>the UK</b> → London</li><li><b>Ireland</b> → <u>Dub</u>lin</li><li><b>the USA</b> → Washington, DC</li><li><b>Canada</b> → Ottawa</li><li><b>Australia</b> → Canberra</li><li><b>New Zealand</b> → <u>Wel</u>lington</li></ul><p>People speak English in all these countries. In Canada, they speak French too.</p><p><b>the</b> UK, <b>the</b> USA, but Ukraine, Ireland, Canada – no <i>the</i>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Dublin is in", "Ottawa is in", "Canberra is in", "Wellington is in", "Washington, DC is in"],
          right: ["Ireland.", "Canada.", "Australia.", "New Zealand.", "the USA."],
          hint: "Look at the list of countries and capitals.",
          fbOk: "Right.",
          fbBad: "Check the list again.",
          fbText: "<b>Dublin</b> – Ireland. <b>Ottawa</b> – Canada. <b>Canberra</b> – Australia. <b>Wellington</b> – New Zealand. <b>Washington, DC</b> – the USA."
        },
        {
          type: "info",
          title: "Countries and nationalities",
          body: `<ul><li>Ukraine → <b>U<u>krai</u>nian</b></li><li>the UK → <b><u>Brit</u>ish</b></li><li>Ireland → <b><u>I</u>rish</b></li><li>the USA → <b>A<u>mer</u>ican</b></li><li>Canada → <b>Ca<u>na</u>dian</b></li><li>Australia → <b>Aus<u>tra</u>lian</b></li></ul><p>Andrii is from Ukraine. He’s <b>Ukrainian</b>.</p><p>These words start with a capital letter.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Liam is from Ireland. He’s {*Irish|Ireland}. Grace is from the USA. She’s {*American|the USA}. Andrii and Sofiia are from Ukraine. They’re {*Ukrainian|Ukraine}.",
          hint: "Find the country. Then find its word in the list.",
          fbOk: "Exactly.",
          fbBad: "Look at the list: Ireland → …",
          fbText: "Ireland → <b>Irish</b>. The USA → <b>American</b>. Ukraine → <b>Ukrainian</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["U|+krai|ni|an", "+Brit|ish", "A|+mer|i|can", "Ca|+na|di|an", "+I|rish"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "U<u>krai</u>nian, A<u>mer</u>ican, Ca<u>na</u>dian: the second part is strong. <u>Brit</u>ish, <u>I</u>rish: the first part."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the word.",
          body: `<p>Chloe is from Australia. Write the word with a capital letter.</p>`,
          before: "She’s",
          after: ".",
          answer: "Australian",
          keepCase: true,
          hint: "Australia → …",
          fbOk: "Yes!",
          fbBad: "Check the capital letter and the spelling.",
          fbText: "Australia → <b>Australian</b>. Nationalities start with a capital letter."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s message is wrong.</p>`,
          text: "My friend Emma lives in [!the UK]. I live in [the Ukraine]. Maksym lives in Canada.",
          hint: "Look at the list: which countries have got the?",
          fbOk: "Good eye!",
          fbBad: "Ukraine: the or no the?",
          fbText: "We say <b>Ukraine</b>, without <i>the</i>. <b>The UK</b> is correct. Canada has got no <i>the</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi! I’m Liam. I’m Irish. I live in Dublin, the capital of Ireland. My aunt lives in Wellington. People speak English there too. – Liam</i></p><p>Where does Liam’s aunt live?</p>`,
          opts: [
            "in the capital of Ireland",
            "in the capital of New Zealand",
            "in the capital of Australia"
          ],
          correct: 1,
          hint: "Find Wellington in the list of capitals.",
          fbOk: "Well done!",
          fbBad: "Wellington is the capital of …?",
          fbText: "Liam’s aunt lives in Wellington. It’s the capital of <b>New Zealand</b>. Liam lives in Dublin, the capital of Ireland."
        }
      ],
      outro: {
        text: "People speak English in the UK, Ireland, the USA, Canada, Australia and New Zealand.",
        learned: [
          "Name English-speaking countries and their capitals.",
          "Say nationalities: Ukrainian, British, Irish, American.",
          "Say Ukraine without the, but the UK and the USA."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s10l3",
      title: "The UK: England, Scotland, Wales and Northern Ireland",
      short: "The UK",
      icon: "flag",
      status: "draft",
      why: "England is not the UK. Learn what the UK is and its capital cities.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Is Scotland in the UK?",
          body: `<p class="lead">Emma writes to Andrii.</p><p><b>Emma:</b> My new friend Isla is from Scotland. She lives in Edinburgh.<br><b>Andrii:</b> Is Scotland in England?<br><b>Emma:</b> No, it isn’t! But Scotland and England are both in the UK.</p><p>What is the UK?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is the capital of Scotland?</p>`,
          opts: [
            "Edinburgh",
            "London",
            "Dublin"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>Edinburgh</b>. London is the capital of England and the UK. Dublin is the capital of Ireland."
        },
        {
          type: "info",
          title: "The United Kingdom",
          body: `<p><b>The UK</b> = <b>the United Kingdom</b>.</p><p>The UK is <b>England, Scotland, Wales and Northern Ireland</b>.</p><p>Capital cities:</p><ul><li><u>Eng</u>land → London</li><li><u>Scot</u>land → <u>Ed</u>inburgh</li><li>Wales → <u>Car</u>diff</li><li>Northern Ireland → Belfast</li></ul><p>London is the capital of the UK too.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which are in the UK?</p>`,
          opts: [
            "England",
            "Wales",
            "Australia",
            "Northern Ireland",
            "Canada"
          ],
          correct: [0, 1, 3],
          hint: "Look at the list: the UK is …",
          fbOk: "Well done!",
          fbBad: "Read the list of the UK again.",
          fbText: "The UK is <b>England</b>, Scotland, <b>Wales</b> and <b>Northern Ireland</b>. Australia and Canada aren’t in the UK."
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Fill in the gaps.",
          text: "Edinburgh is the capital of {*Scotland|Wales}. Cardiff is the capital of {*Wales|Scotland}. Belfast is in {*Northern Ireland|England}.",
          hint: "Look at the list of capital cities.",
          fbOk: "Yes!",
          fbBad: "Check the list again.",
          fbText: "<b>Edinburgh</b> – Scotland. <b>Cardiff</b> – Wales. <b>Belfast</b> – Northern Ireland."
        },
        {
          type: "info",
          title: "English, Scottish, Welsh, British",
          body: `<ul><li>England → <b>English</b></li><li>Scotland → <b>Scottish</b></li><li>Wales → <b>Welsh</b></li><li>the UK → <b>British</b></li></ul><p>Isla is from Scotland. She’s <b>Scottish</b>. Scotland is in the UK, so she’s <b>British</b> too.</p><p>She isn’t English. <b>English</b> is only for people from England.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Emma is from England. Which sentence is correct?</p>`,
          opts: [
            "She’s Scottish and British.",
            "She’s English and British.",
            "She’s English, but she isn’t British."
          ],
          correct: 1,
          hint: "Is England in the UK?",
          fbOk: "Right.",
          fbBad: "Look at the list: England → …",
          fbText: "Emma is from England, so she’s <b>English</b>. England is in the UK, so she’s <b>British</b> too."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Owen is from Cardiff. Cardiff is in Wales.</p>`,
          before: "He’s",
          after: "and British.",
          answer: "Welsh",
          hint: "Wales → …",
          fbOk: "Well done!",
          fbBad: "Look at the list: Wales → …",
          fbText: "Wales → <b>Welsh</b>. Owen is Welsh and British."
        },
        {
          type: "pick",
          sk: "cult",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Isla is from Edinburgh. She is [English]. She speaks English and lives in Scotland.",
          hint: "Where is Edinburgh? Who is English?",
          fbOk: "Good eye!",
          fbBad: "Isla is from Scotland. Look at the list.",
          fbText: "Isla is from Scotland, so she’s <b>Scottish</b>, not English. She <b>speaks English</b> – that’s correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! I live in Edinburgh. It’s the capital of Scotland. My grandma lives in Cardiff. In summer, we visit her. – Isla</i></p><p>Where does Isla’s grandma live?</p>`,
          opts: [
            "in the capital of Wales",
            "in the capital of Scotland",
            "in Northern Ireland"
          ],
          correct: 0,
          hint: "Find Cardiff in the list of capital cities.",
          fbOk: "Exactly.",
          fbBad: "Cardiff is the capital of …?",
          fbText: "Isla’s grandma lives in Cardiff. It’s the capital of <b>Wales</b>. Isla lives in Edinburgh, the capital of Scotland."
        }
      ],
      outro: {
        text: "The UK is England, Scotland, Wales and Northern Ireland. People from Scotland are Scottish and British.",
        learned: [
          "Say what the UK is: England, Scotland, Wales and Northern Ireland.",
          "Name the capitals: London, Edinburgh, Cardiff, Belfast.",
          "Use English, Scottish, Welsh and British."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s10l4",
      title: "Bigger or smaller? Comparing countries",
      short: "Comparing",
      icon: "scale",
      status: "draft",
      why: "Which country is bigger? Which mountain is higher? Compare two places.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Is Ukraine bigger than the UK?",
          body: `<p class="lead">Emma and Andrii compare their countries.</p><p><b>Emma:</b> The UK is about 240,000 km². How big is Ukraine?<br><b>Andrii:</b> It’s about 600,000 km². Ukraine is bigger than the UK!<br><b>Emma:</b> Wow! The UK is smaller.</p><p>How do we compare two countries?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana loves the mountains. What does she say?</p>`,
          opts: [
            "The mountains are more beautiful than the sea.",
            "The mountains are beautifuller than the sea.",
            "The mountains are beautiful than the sea."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>more beautiful than</b>. The next screen shows why."
        },
        {
          type: "info",
          title: "Smaller, more famous",
          body: `<ul><li>small → <b>smaller</b></li><li>big → <b>bigger</b></li><li>high → <b>higher</b></li><li>famous → <b>more famous</b></li><li>beautiful → <b>more beautiful</b></li><li>interesting → <b>more interesting</b></li></ul><p>Short word: add <b>-er</b>. Long word: say <b>more</b>.</p><p>Then say <b>than</b>: The UK is <b>smaller than</b> Ukraine.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Hoverla is {*higher|more high} than Ben Nevis. The UK is {*smaller|more small} than Ukraine. Oksana thinks maths is {*more interesting|interestinger} than art.",
          hint: "Is it a short word or a long word?",
          fbOk: "Exactly.",
          fbBad: "Short word: -er. Long word: more.",
          fbText: "High, small – short words: <b>higher</b>, <b>smaller</b>. Interesting – a long word: <b>more interesting</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Ukraine: about 600,000 km². The UK: about 240,000 km².</p><p>Which sentence is correct?</p>`,
          opts: [
            "The UK is bigger than Ukraine.",
            "Ukraine is smaller than the UK.",
            "The UK is smaller than Ukraine."
          ],
          correct: 2,
          hint: "Which number is bigger?",
          fbOk: "Right.",
          fbBad: "Look at the numbers again.",
          fbText: "240,000 is smaller than 600,000. So <b>the UK is smaller than Ukraine</b>."
        },
        {
          type: "info",
          title: "Better and worse",
          body: `<ul><li>good → <b>better</b></li><li>bad → <b>worse</b></li></ul><p>Not: <s>gooder</s>, <s>more good</s>.</p><p>Say why with <b>because</b>:</p><p>For me, summer is <b>better than</b> winter <b>because</b> I love swimming.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii: “My old bike is good. My new bike is very good!” Use <b>good</b>.</p>`,
          before: "My new bike is",
          after: "than my old bike.",
          answer: "better",
          hint: "good → …",
          fbOk: "Well done!",
          fbBad: "Look at the list: good → …",
          fbText: "good → <b>better</b>. Not <i>gooder</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ukraine: about 600,000 km². The UK: about 240,000 km². Make a true sentence.</p>`,
          tiles: ["the UK", "is", "smaller", "than", "Ukraine"],
          extra: ["more"],
          answer: ["The UK is smaller than Ukraine.", "Is the UK smaller than Ukraine?", "Is Ukraine smaller than the UK?"],
          hint: "Start with the UK.",
          fbOk: "Yes!",
          fbBad: "Short word: -er. Do we need more?",
          fbText: "<b>The UK is smaller than Ukraine.</b> Small is a short word: <i>smaller</i>, not <i>more small</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "Ukraine is {*bigger|smaller} than the UK. And Hoverla is {*higher|more high} than Ben Nevis! I think your mountains are {*more beautiful|beautifuller} than our mountains. Summer is {*better|gooder} for a visit because there is no school!",
          hint: "Look at the two lists again.",
          fbOk: "Well done!",
          fbBad: "Short word: -er. Long word: more. Good → …",
          fbText: "Ukraine is <b>bigger</b>. Hoverla is <b>higher</b>. Beautiful is a long word: <b>more beautiful</b>. good → <b>better</b>."
        }
      ],
      outro: {
        text: "To compare two things, say -er or more, and then than: The UK is smaller than Ukraine.",
        learned: [
          "Compare two countries: bigger than, smaller than.",
          "Use more with long words: more beautiful.",
          "Use better and worse.",
          "Say why with because."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s10l5",
      title: "The longest river, the highest mountain",
      short: "The longest",
      icon: "chart",
      status: "draft",
      why: "Which is the biggest city? Which is the most famous place? Make a quiz about Ukraine and the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Can you answer Sofiia’s quiz?",
          body: `<p class="lead">Sofiia makes a quiz for the English club.</p><p><i>1. What is the longest river in Ukraine?<br>2. What is the highest mountain in the UK?<br>3. What is the most famous place in your town?</i></p><p>The longest, the highest, the most famous: how do we make these words?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Sofiia: “For me, Lviv is one of the … cities in Ukraine.”</p>`,
          opts: [
            "most beautiful",
            "beautifulest",
            "more beautiful"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>the most beautiful</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "The longest, the most famous",
          body: `<ul><li>long → longer → <b>the longest</b></li><li>big → bigger → <b>the biggest</b></li><li>famous → more famous → <b>the most famous</b></li><li>good → better → <b>the best</b></li><li>bad → worse → <b>the worst</b></li></ul><p>Always say <b>the</b>. Then say <b>in</b> + place:</p><p>the longest river <b>in</b> Ukraine<br>Not: <s>the longest river of Ukraine</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The Dnipro is {*the longest|longest|the longer} river in Ukraine. Kyiv is the {*biggest|most big} city in Ukraine. For Sofiia, Lviv is one of the {*most famous|famousest} cities in Ukraine.",
          hint: "the + -est or the most?",
          fbOk: "Exactly.",
          fbBad: "Look at the list. Don’t forget the.",
          fbText: "<b>The longest</b> – always with <i>the</i>. Big → <b>the biggest</b>. Famous is a long word: <b>the most famous</b>."
        },
        {
          type: "info",
          title: "Ukraine and the UK",
          body: `<p><b>Ukraine:</b></p><ul><li>the biggest city – Kyiv</li><li>the longest river – the Dnipro</li><li>the highest mountain – Hoverla (2,061 m)</li></ul><p><b>The UK:</b></p><ul><li>the biggest city – London</li><li>the highest mountain – Ben Nevis (1,345 m), in Scotland</li></ul><p>Ukraine is <b>one of the biggest countries</b> in Europe.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Ben Nevis is the highest mountain of the UK.",
            "Ben Nevis is the highest mountain in the UK.",
            "Ben Nevis is the most high mountain in the UK."
          ],
          correct: 1,
          hint: "Look at the rule: in or of + place?",
          fbOk: "Right.",
          fbBad: "Check the rule: -est and in.",
          fbText: "High → <b>the highest</b>. After it, say <b>in</b> + place: <b>in the UK</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Hoverla is 2,061 m high. There is no higher mountain in Ukraine.</p>`,
          before: "Hoverla is the",
          after: "mountain in Ukraine.",
          answer: ["highest", "tallest"],
          hint: "high → higher → the …",
          fbOk: "Well done!",
          fbBad: "Look at the list: high → …",
          fbText: "high → higher → <b>the highest</b>. Hoverla is the highest mountain in Ukraine."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s quiz answer is wrong.</p>`,
          text: "Kyiv is the biggest city [of] Ukraine. It is on the Dnipro.",
          hint: "Look at the rule: the biggest city … Ukraine.",
          fbOk: "Good eye!",
          fbBad: "Check the word before Ukraine.",
          fbText: "After <i>the biggest city</i>, say <b>in</b> + place: the biggest city <b>in</b> Ukraine. Kyiv is on the Dnipro – that’s correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          tiles: ["Ukraine", "is", "one of", "the biggest", "countries", "in Europe"],
          extra: ["country"],
          answer: ["Ukraine is one of the biggest countries in Europe.", "Is Ukraine one of the biggest countries in Europe?", "In Europe Ukraine is one of the biggest countries.", "One of the biggest countries in Europe is Ukraine.", "In Europe one of the biggest countries is Ukraine.", "Is one of the biggest countries in Europe Ukraine?"],
          hint: "Start with Ukraine. one of the + countries.",
          fbOk: "Yes!",
          fbBad: "After one of the biggest: one country or many?",
          fbText: "<b>Ukraine is one of the biggest countries in Europe.</b> After <i>one of the biggest</i>, say <i>countries</i>, not <i>country</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Sofiia writes the quiz answers.</p>`,
          text: "1. The Dnipro is {*the longest|the longer} river {*in|of} Ukraine. 2. Ben Nevis is the {*highest|most high} mountain in the UK. 3. The {*most famous|famousest} place in my town is the old bridge. It’s the {*best|goodest} place for photos!",
          hint: "the + -est, the most, the best. Then in + place.",
          fbOk: "Well done!",
          fbBad: "Check the list and the rule: in + place.",
          fbText: "<b>The longest</b> river <b>in</b> Ukraine. <b>The highest</b> mountain. Famous – <b>the most famous</b>. good → <b>the best</b>."
        }
      ],
      outro: {
        text: "Say the + -est or the most, and then in + place: the longest river in Ukraine.",
        learned: [
          "Say the longest, the most famous, the best.",
          "Say in + place: the highest mountain in the UK.",
          "Say one of the biggest countries.",
          "Name the longest river and the highest mountain in Ukraine."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s10l6",
      title: "Facts about my country",
      short: "My country",
      icon: "book",
      status: "draft",
      why: "Tell a friend from another country about Ukraine. Say why you like a place.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What can you write about Ukraine?",
          body: `<p class="lead">Ms Kravets has got a task for the English club.</p><p><i>Our friends from a school in England want to learn about Ukraine. Please write “Facts about my country”.</i></p><p>Mariia from Kharkiv writes first. What facts can you write about your country?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Facts about my country, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>My country is Ukraine. It’s in Europe. It’s one of the biggest countries in Europe. The capital is Kyiv. It’s the biggest city in Ukraine. People speak Ukrainian. Our flag is blue and yellow.</i></p><p>What is the biggest city in Ukraine?</p>`,
          opts: [
            "Kharkiv",
            "Kyiv",
            "Lviv"
          ],
          correct: 1,
          hint: "Find “the biggest city” in the text.",
          fbOk: "Yes!",
          fbBad: "Read the text again.",
          fbText: "Mariia writes: “The capital is Kyiv. It’s <b>the biggest city</b> in Ukraine.”"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Facts about my country, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>In the south, Ukraine is on the Black Sea. The longest river is the Dnipro. Kyiv is on the Dnipro. The highest mountain is Hoverla. It’s in the Carpathians.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Kyiv is on the Dnipro.",
            "Hoverla is in the Carpathians.",
            "Ukraine is on the Black Sea in the north.",
            "The longest river is the Thames."
          ],
          correct: [0, 1],
          hint: "Read each sentence. Find it in the text.",
          fbOk: "Good eye!",
          fbBad: "Check each sentence in the text.",
          fbText: "<b>Kyiv is on the Dnipro</b> and <b>Hoverla is in the Carpathians</b>. The Black Sea is in the south. The longest river in Ukraine is the Dnipro."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Facts about my country, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>I live in Kharkiv, in the north-east. My favourite place in Ukraine is Odesa because I love the sea. I think Ukraine is one of the most beautiful countries in the world!</i></p><p>Why is Odesa Mariia’s favourite place?</p>`,
          opts: [
            "because she loves the sea",
            "because it’s the capital",
            "because it’s in the north-east"
          ],
          correct: 0,
          hint: "Find “because” in the text.",
          fbOk: "Right.",
          fbBad: "What comes after because?",
          fbText: "Mariia writes: “My favourite place is Odesa <b>because I love the sea</b>.” Kharkiv is in the north-east. Kyiv is the capital."
        },
        {
          type: "info",
          title: "Why? Because …",
          body: `<p>Say your choice. Then say why with <b>because</b>.</p><ul><li>My favourite place is Odesa <b>because</b> I love the sea.</li><li>I want to visit Scotland <b>because</b> I like mountains.</li></ul><p><b>Why</b> do you like Lviv?<br>– <b>Because</b> it’s very old.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii: “I want to visit London.” Emma: “Why?” What does Andrii say?</p>`,
          opts: [
            "So it’s the capital of the UK.",
            "But it’s the capital of the UK.",
            "Because it’s the capital of the UK."
          ],
          correct: 2,
          hint: "Emma asks Why. What word answers Why?",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Why? – …",
          fbText: "We answer <b>Why?</b> with <b>Because …</b>: Because it’s the capital of the UK."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          text: "My favourite city is Lviv {*because|but} it’s very old. I want to visit Scotland {*because|so} I love mountains. I like summer {*because|but} I can swim in the sea.",
          hint: "Each sentence says why. Which word says why?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule again: why → because.",
          fbText: "Each sentence gives a reason: <b>because</b> it’s old, <b>because</b> I love mountains, <b>because</b> I can swim."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          tiles: ["the capital", "of Ukraine", "is", "Kyiv"],
          answer: ["The capital of Ukraine is Kyiv.", "Kyiv is the capital of Ukraine.", "Is the capital of Ukraine Kyiv?", "Is Kyiv the capital of Ukraine?"],
          hint: "Start with Kyiv or with the capital.",
          fbOk: "Yes!",
          fbBad: "Look at Mariia’s text, part 1.",
          fbText: "<b>The capital of Ukraine is Kyiv.</b> Or: <b>Kyiv is the capital of Ukraine.</b>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes “Facts about my country”.</p>`,
          text: "My country is {*Ukraine|the Ukraine}. It’s one of the biggest {*countries|country} in Europe. The capital is Kyiv. It’s {*on|in} the Dnipro. The highest mountain is {*Hoverla|Ben Nevis}. I love Kyiv {*because|but} it’s my home.",
          hint: "Use everything from this section: the, in or on, because.",
          fbOk: "Well done!",
          fbBad: "Read the text again. Check the and on.",
          fbText: "<b>Ukraine</b> – no <i>the</i>. One of the biggest <b>countries</b>. Kyiv is <b>on</b> the Dnipro. The highest mountain is <b>Hoverla</b>. Say why with <b>because</b>."
        }
      ],
      outro: {
        text: "Now you can write facts about Ukraine and say why you like a place.",
        learned: [
          "Read and write short facts about Ukraine.",
          "Say why with because: I love Odesa because I love the sea.",
          "Answer Why? with Because …"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s10l7",
      title: "Our world quiz",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e5s10boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you win the world quiz?",
          body: `<p class="lead">The English club has a world quiz. Andrii, Emma and Liam play together.</p><p>Help them answer. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Lviv is in the {*west|east} of Ukraine. Kharkiv is in the {*north-east|south-west}. Odesa is {*on|in} the Black Sea.",
          pre: "e5s10l1",
          hint: "Think of the map: west is on the left.",
          fbOk: "Yes!",
          fbBad: "Check the list of cities.",
          fbText: "Lviv – in the <b>west</b>. Kharkiv – in the <b>north-east</b>. Odesa is <b>on</b> the Black Sea."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Match the halves.",
          left: ["Ottawa is in", "Dublin is in", "Washington, DC is in", "Kyiv is in"],
          right: ["Canada.", "Ireland.", "the USA.", "Ukraine."],
          pre: "e5s10l2",
          hint: "Remember the capitals list.",
          fbOk: "Right.",
          fbBad: "Check the capitals again.",
          fbText: "<b>Ottawa</b> – Canada. <b>Dublin</b> – Ireland. <b>Washington, DC</b> – the USA. <b>Kyiv</b> – Ukraine."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Isla is from Edinburgh. Which sentence is correct?</p>`,
          opts: [
            "She’s English and British.",
            "She’s Welsh.",
            "She’s Scottish and British."
          ],
          correct: 2,
          pre: "e5s10l3",
          hint: "Edinburgh is the capital of …?",
          fbOk: "Exactly.",
          fbBad: "Where is Edinburgh?",
          fbText: "Edinburgh is in Scotland. Isla is <b>Scottish</b>. Scotland is in the UK, so she’s <b>British</b> too."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>Ukraine: about 600,000 km². The UK: about 240,000 km².</p>`,
          before: "The UK is",
          after: "than Ukraine.",
          answer: "smaller",
          pre: "e5s10l4",
          hint: "small → …",
          fbOk: "Well done!",
          fbBad: "Which number is smaller?",
          fbText: "240,000 is smaller than 600,000. The UK is <b>smaller</b> than Ukraine."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "The Dnipro is {*the longest|the longer} river {*in|of} Ukraine. London is the {*biggest|most big} city in the UK.",
          pre: "e5s10l5",
          hint: "the + -est, then in + place.",
          fbOk: "Good eye!",
          fbBad: "Check the rule: the + -est, in + place.",
          fbText: "<b>The longest</b> river <b>in</b> Ukraine. Big → <b>the biggest</b> city in the UK."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Lviv or Odesa: which city do you want to visit? Why?”</p><p>Andrii loves the sea. What does he say?</p>`,
          opts: [
            "Odesa, because I love the sea.",
            "Odesa, but I love the sea.",
            "Lviv, because I love the sea."
          ],
          correct: 0,
          pre: "e5s10l6",
          hint: "Which city is on the Black Sea? Which word says why?",
          fbOk: "Well done!",
          fbBad: "Where is the sea? How do we say why?",
          fbText: "Odesa is on the Black Sea. So Andrii says: <b>Odesa, because I love the sea.</b>"
        }
      ],
      outro: {
        text: "Well done! Now you can talk about Ukraine and English-speaking countries.",
        learned: [
          "Say where cities in Ukraine are.",
          "Name English-speaking countries, capitals and nationalities.",
          "Compare countries: smaller than, the biggest.",
          "Say why with because."
        ]
      }
    }
  ]
});
