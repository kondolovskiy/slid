/* Слід · Англійська мова, 8 клас — «English-speaking countries: land, climate and people» (e8s8)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   8 кл., тема «Країни виучуваної мови» — географічне положення; клімат; населення; національності (с. 32, розд. 5.2.2);
   функції — порівнювати, коментувати статистичні дані, аргументувати вибір (с. 31, 33);
   граматика (с. 34–35; розподіл — reports/verify/plan-eng-g7-8-9.md, curate-eng-plan-g7-9.md): Second Conditional —
   if + Past Simple (B1: Past simple — imagined situations after ‘if’), would (Would — imagined situations, позиція A2, с. 22),
   main clause with ‘could’ + ‘if’ + past simple (B1); назва «Second Conditional» — glossary/eng.md;
   повторення — comparatives with much, a bit (e7s4l5) на статистиці; nationalities — лексика.
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Не повторює e5s10l2–l4 (столиці, склад UK, -er than): тут положення, клімат, населення, слова для людей і уявні ситуації.
   Україна — e8s7 (паралельний розділ); тут — лише порівняння й герої.
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на чотири роки старші, ніж у 4 кл.: Andrii (14, Kyiv) — шахи,
   двоюрідний брат Maksym живе в Ottawa (e4s7), друг за листуванням Liam (Dublin, e5s10, e8s1); Emma (14, England), подруга
   Isla (Edinburgh, e5s10); Owen — Welsh (e5s10); Chloe — Australia, Canberra (e5s10, pe5s10); Oksana (14) — Zelena Dolyna
   біля Poltava, піаніно; Mariia — Kharkiv; Taras — Lviv; клас Andrii — Ms Lysenko, Daryna, Bohdan, Zoriana. Нова — Lily
   (Wellington, лише в l3). Нове про героїв: Chloe — подруга Andrii з онлайн-шахового клубу; Maksym — Ukrainian, у школі в Ottawa
   говорить англійською й вчить французьку; клас Oksana — онлайн-зустріч англійського клубу з Liam, Isla, Owen, Chloe, Maksym.
   Погода в повідомленнях героїв (l2) — вигадана; клімат і числа про країни — з джерел (tasks/…/write-eng-g8-e8s8.md, «Нотатки агента»).
   Звуку немає (D-055 п. 4); діалоги — репліками в body + gaps / choice (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e8s8). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e8s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s8",
  grade: 8,
  weeks: [31, 35],
  title: "English-speaking countries: land, climate and people",
  why: "To talk about where English-speaking countries are, their climate and their people. And to imagine life in another country.",
  requires: ["e5s10l2", "e5s10l3", "e5s10l4", "e6s8l3", "e5s9l1", "e7s4l5"],
  meta: { author: "writer-e8s8", created: "2026-11-25", factcheck: "verifier-e8s8 (reports/verify/write-eng-g8-e8s8.md)", teacher: null },
  badges: [
    { id: "e8s8boss", name: "World explorer", icon: "trophy", desc: "Finish the final lesson “Around the English-speaking world”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s8l1",
      title: "The UK, Ireland, Canada, Australia: where are they?",
      short: "Where are they?",
      icon: "globe",
      status: "verified",
      why: "English-speaking countries are on different continents. Learn to say where they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where do Andrii’s friends live?",
          body: `<p class="lead">Andrii has a world map in his room in Kyiv. He marks his friends on it.</p><p><i>Liam – Dublin, Ireland.<br>My cousin Maksym – Ottawa, Canada.<br>Chloe from my online chess club – Canberra, Australia.<br>Emma – a town in England.</i></p><p><b>Andrii:</b> My friends are so far away! Ireland is on an island, Canada is in North America, and Australia… is it a country or a continent?</p><p>Island, continent, ocean: how do we say where a country is?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Australia is a country. What else is it?</p>`,
          opts: [
            "a continent",
            "an island in Europe",
            "a part of the UK"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Australia is a country <b>and</b> a continent. The next screen tells you more."
        },
        {
          type: "info",
          title: "Continents, islands and oceans",
          body: `<ul><li>a <b><u>con</u>tinent</b> → a very big piece of land: Europe, North America</li><li>an <b><u>is</u>land</b> → land with sea all around it</li><li>an <b>ocean</b> → a very big sea: the Atlantic, the Pacific</li></ul><ul><li>the UK → on islands in the north-west of Europe</li><li>Ireland → on the island of Ireland, west of Great Britain</li><li><u>Can</u>ada → in North America, north of the USA</li><li>Aus<u>tra</u>lia → a country and a continent</li><li>New Zealand → two big islands in the Pacific, east of Australia</li><li>Ukraine → in Eastern Europe</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Canada", "Australia", "New Zealand", "Ireland", "Ukraine"],
          right: ["is in North America, north of the USA.", "is a country and a continent.", "has two big islands in the Pacific.", "is on an island west of Great Britain.", "is in Eastern Europe."],
          hint: "Which country is in North America? Which one is also a continent?",
          fbOk: "Well done!",
          fbBad: "Look at the list of countries again.",
          fbText: "<b>Canada</b> is in North America. <b>Australia</b> is a country and a continent. <b>New Zealand</b> has two big islands. <b>Ireland</b> is west of Great Britain. <b>Ukraine</b> is in Eastern Europe."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+Can|a|da", "Aus|+tra|li|a", "+con|ti|nent", "+is|land"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts on the screen “Continents, islands and oceans”.",
          fbText: "<u>Can</u>ada, <u>con</u>tinent, <u>is</u>land: the first part is strong. Aus<u>tra</u>lia: the second part. The <i>s</i> in <i>island</i> is silent."
        },
        {
          type: "info",
          title: "In the north of or north of?",
          body: `<ul><li><b>in the north of</b> + a place → inside it:<br>Kharkiv is <b>in the north-east of</b> Ukraine.<br>Lviv is <b>in the west of</b> Ukraine.</li><li><b>north of</b> + a place → outside it:<br>Canada is <b>north of</b> the USA.<br>Ireland is <b>west of</b> Great Britain.</li></ul><p>The same with south, east and west.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Lviv is {*in the west of|west of} Ukraine. Canada is {*north of|in the north of} the USA. New Zealand is {*east of|in the east of} Australia.",
          hint: "Is the place inside the other place or outside it?",
          fbOk: "Exactly.",
          fbBad: "Inside → in the west of. Outside → west of.",
          fbText: "Lviv is a city in Ukraine: <b>in the west of</b> Ukraine. Canada and New Zealand are different countries: <b>north of</b> the USA, <b>east of</b> Australia."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Maksym writes: “Canada goes from the Atlantic Ocean in the east to the Pacific Ocean in the west.”</p><p>So the Pacific Ocean is ___ Canada.</p>`,
          opts: [
            "west of",
            "in the west of",
            "east of"
          ],
          correct: 0,
          hint: "Is the ocean inside Canada or outside it? Is it in the east or in the west?",
          fbOk: "Right.",
          fbBad: "The ocean is not inside Canada. And Maksym says: the Pacific is in the west.",
          fbText: "The ocean is outside Canada, so <b>west of</b> Canada. <i>In the west of</i> means inside the country."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Liam writes to Andrii.</p>`,
          text: "I live in Dublin. Ireland is in the north-west of Europe. It is [in the west of] Great Britain. Your country, Ukraine, is [!in Eastern Europe].",
          hint: "Is Ireland a part of Great Britain?",
          fbOk: "Good eye!",
          fbBad: "Ireland is a different island. Is it inside Great Britain?",
          fbText: "Ireland is not inside Great Britain, so: Ireland is <b>west of</b> Great Britain. Ukraine is <b>in</b> Eastern Europe: that’s correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Chloe.</p>`,
          text: "My cousin Maksym lives in Ottawa. Canada is {*north of|in the north of} the USA. My penfriend Liam lives in Ireland. It’s on an {*island|ocean}, west of Great Britain. And you live in Australia. It’s a country and a {*continent|city}!",
          hint: "Canada and the USA are two countries. What is land with sea all around it?",
          fbOk: "Well done!",
          fbBad: "Look at the rules: north of, island, continent.",
          fbText: "Canada is <b>north of</b> the USA: two countries. Ireland is on an <b>island</b>. Australia is a country and a <b>continent</b>."
        }
      ],
      outro: {
        text: "Continent, island, ocean, north of: now you can say where English-speaking countries are.",
        learned: [
          "Say where English-speaking countries are.",
          "Use north of and in the north of.",
          "Name continents, islands and oceans."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s8l2",
      title: "Rainy, dry or snowy? Climate around the world",
      short: "Climate",
      icon: "leaf",
      status: "verified",
      why: "Every country has its own climate. Learn to describe it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What’s the weather like there?",
          body: `<p class="lead">It’s December. Andrii writes to his friends: “It’s −5 °C in Kyiv today! What’s the weather like there?”</p><p><b>Maksym (Ottawa):</b> Snow everywhere! It’s −15 °C.<br><b>Liam (Dublin):</b> Rainy and grey, but not cold: 7 °C.<br><b>Chloe (Canberra):</b> It’s summer here! 30 °C and sunny.</p><p>Why is it summer in Australia in December?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Why is it summer in Canberra in December?</p>`,
          opts: [
            "It’s always summer in Australia.",
            "Australia is far in the south. The seasons are the opposite.",
            "Chloe is joking."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Australia is far in the south of the world. When it’s winter in Ukraine, it’s <b>summer</b> in Australia."
        },
        {
          type: "info",
          title: "Weather and climate",
          body: `<ul><li><b>weather</b> → what it’s like today or tomorrow:<br>It’s raining today.</li><li><b><u>cli</u>mate</b> → what the weather is usually like, year after year:<br>Ireland has a mild climate.</li></ul><ul><li><b>mild</b> → not very cold and not very hot</li><li><b>wet</b> → with a lot of rain</li><li><b>dry</b> → with very little rain</li><li><b>snowy</b> → with a lot of snow</li><li>a <b><u>des</u>ert</b> → a big place with sand or rocks and almost no rain</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["mild", "wet", "dry", "snowy", "a desert"],
          right: ["not very cold and not very hot", "with a lot of rain", "with very little rain", "with a lot of snow", "a big place with sand or rocks"],
          hint: "Which word means a lot of rain? Which one is a place?",
          fbOk: "Well done!",
          fbBad: "Look at the list of words again.",
          fbText: "<b>mild</b> – not very cold, not very hot; <b>wet</b> – a lot of rain; <b>dry</b> – very little rain; <b>snowy</b> – a lot of snow; <b>a desert</b> – a big place with sand or rocks."
        },
        {
          type: "info",
          title: "Climates of English-speaking countries",
          body: `<ul><li><b>The UK</b>: mild. The west is wetter than the east.</li><li><b>Ireland</b>: mild and wet. Winters aren’t very cold, and summers aren’t very hot.</li><li><b>Canada</b>: in many parts, winters are very cold and snowy.</li><li><b>Australia</b>: a very dry continent. A large part of it is desert. Summer is in December, January and February.</li><li><b>New Zealand</b>: mild.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is true?</p>`,
          opts: [
            "In many parts of Canada, winters are mild.",
            "The east of the UK is wetter than the west.",
            "A large part of Australia is desert."
          ],
          correct: 2,
          hint: "Look at the climates of the countries again.",
          fbOk: "Right.",
          fbBad: "Check Canada and the UK on the screen before.",
          fbText: "A large part of Australia is <b>desert</b>. Winters in many parts of Canada are very cold, not mild. In the UK, the <b>west</b> is wetter than the east."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the sentences.",
          body: `<p>Is it about the weather or about the climate?</p>`,
          bins: ["Weather (now, today)", "Climate (usually)"],
          items: [
            ["It’s raining now.", 0],
            ["Take an umbrella today!", 0],
            ["It’s 30 °C and sunny this afternoon.", 0],
            ["In many parts of Canada, winters are very cold.", 1],
            ["Ireland has a mild, wet climate.", 1],
            ["In Australia, summer is in December, January and February.", 1]
          ],
          hint: "Look for today, now and this afternoon.",
          fbOk: "Well done!",
          fbBad: "Weather is about now or today. Climate is about what is usual.",
          fbText: "<b>Weather</b>: now, today, this afternoon. <b>Climate</b>: what is usual, year after year – cold winters in Canada, a mild climate in Ireland, summer in December in Australia."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s a big place with sand or rocks. There is almost no rain there. A large part of Australia is one.</p>`,
          before: "It’s a",
          after: ".",
          answer: "desert",
          hint: "Look at the screen “Weather and climate”.",
          fbOk: "Exactly.",
          fbBad: "Sand, rocks and almost no rain: what is it?",
          fbText: "A big, very dry place with sand or rocks → a <b>desert</b>. Be careful: <i>dessert</i> with <i>ss</i> is sweet food after dinner."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana about England.</p>`,
          text: "Our weather changes a lot. In the morning it’s sunny, and then it rains! But our climate is {*mild|snowy}: winters aren’t very cold, and summers aren’t very hot. My friend Owen lives in Wales, in the west of Great Britain. It’s {*wetter|drier} there than in the east of England. Our new neighbours are from Australia. At home, they had summer in {*December|July}!",
          hint: "Look at the climates of the UK and Australia.",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Climates of English-speaking countries”.",
          fbText: "Not very cold, not very hot → <b>mild</b>. In the UK, the west is <b>wetter</b> than the east. In Australia, summer is in <b>December</b>, January and February."
        }
      ],
      outro: {
        text: "Mild, wet, dry, snowy: now you can describe the climate of a country. And you know when it’s summer in Australia!",
        learned: [
          "Describe a climate: mild, wet, dry, snowy.",
          "Say the difference between weather and climate.",
          "Say how the seasons are different in Australia."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s8l3",
      title: "British, Irish, Canadian: people and nationalities",
      short: "Nationalities",
      icon: "users",
      status: "verified",
      why: "We have special words for people from each country. Learn to use them correctly.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who is who on the video call?",
          body: `<p class="lead">Oksana’s English club has a video call with students from other countries.</p><p><i>Liam is Irish. Isla and Owen are British: Isla is Scottish, and Owen is Welsh. Chloe is Australian. Maksym is Ukrainian, but he lives in Canada. Some of his friends at school are Canadians. So many words: the Irish, the British, Canadians…</i></p><p>How do we talk about people from a country?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>All the people from Ireland: what do we call them?</p>`,
          opts: [
            "the Irishes",
            "the Irelands",
            "the Irish"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>the Irish</b>, with no <i>-s</i>: like <i>the British</i> and <i>the Welsh</i>. The next screen shows more."
        },
        {
          type: "info",
          title: "Nationality words",
          body: `<p>country → adjective → one person → all the people</p><ul><li>Canada → Canadian → <b>a Canadian</b> → <b>Canadians</b></li><li>Australia → Australian → <b>an Australian</b> → <b>Australians</b></li><li>Ukraine → Ukrainian → <b>a Ukrainian</b> → <b>Ukrainians</b></li></ul><p>Words with <i>-ish</i> and <i>-sh</i> are different:</p><ul><li>the UK → British → <b>a British man / woman</b> → <b>the British</b></li><li>Ireland → Irish → <b>an Irishman / Irishwoman</b> → <b>the Irish</b></li><li>Wales → Welsh → <b>a Welshman / Welshwoman</b> → <b>the Welsh</b></li></ul><p>New Zealand → <b>a New Zealander</b> → <b>New Zealanders</b></p><p>Not: <s>an Irish</s>, <s>the Britishes</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Two {*Canadians|Canadian} and three {*Australians|Australian} are in the online club. Liam is {*an Irish boy|an Irish}. Owen is from Cardiff. He’s {*Welsh|a Welsh}.",
          hint: "One person or many people? An adjective needs a noun after it.",
          fbOk: "Exactly.",
          fbBad: "Look at the table: a Canadian, Canadians; Irish and Welsh have no a without a noun.",
          fbText: "Two <b>Canadians</b>, three <b>Australians</b> – people, so with <i>-s</i>. Liam is <b>an Irish boy</b> (not <s>an Irish</s>). Owen is <b>Welsh</b> (not <s>a Welsh</s>)."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Liam is an Irish.",
            "Chloe is Australian.",
            "Isla is a British."
          ],
          correct: 1,
          hint: "Which words have no a without a noun?",
          fbOk: "Right.",
          fbBad: "Look at the -ish words in the table.",
          fbText: "<b>Chloe is Australian.</b> Or: Chloe is an Australian. But Irish and British need a noun after a: an Irish boy, a British girl. Or just: Liam is Irish. Isla is British."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Lily is from Wellington, the capital of New Zealand. Write the word with a capital letter.</p>`,
          before: "She’s a New",
          after: ".",
          answer: "Zealander",
          keepCase: true,
          hint: "Look at the last line of the table.",
          fbOk: "Well done!",
          fbBad: "Check the spelling and the capital letter.",
          fbText: "A person from New Zealand is <b>a New Zealander</b>. Nationality words start with a capital letter."
        },
        {
          type: "info",
          title: "Languages",
          body: `<p>The name of a language is often the same as the adjective: French, Irish, Ukrainian.</p><ul><li>Canada has two official languages: <b>English</b> and <b>French</b>.</li><li>Ireland has two official languages: <b>Irish</b> and <b>English</b>.</li></ul><p>No <i>the</i> before a language: She speaks French.</p><p>Not: <s>She speaks the French.</s></p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are true?</p>`,
          opts: [
            "Canada has two official languages.",
            "French is an official language in Canada.",
            "Ireland has only one official language.",
            "Irish is an official language in Ireland."
          ],
          correct: [0, 1, 3],
          hint: "Look at the screen “Languages”.",
          fbOk: "Well done!",
          fbBad: "How many official languages does Ireland have?",
          fbText: "Canada: <b>English and French</b>. Ireland has two official languages too: <b>Irish and English</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Maksym writes to Oksana’s club.</p>`,
          text: "I’m Ukrainian, but I live in Ottawa. At school, I speak English and I’m learning [the French]. My best friend is [!a Canadian].",
          hint: "Do we use the before a language?",
          fbOk: "Good eye!",
          fbBad: "Look at the screen “Languages” again.",
          fbText: "No <i>the</i> before a language: I’m learning <b>French</b>. <i>My best friend is a Canadian</i> is correct: one person from Canada."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about the video call.</p>`,
          text: "Yesterday we talked to students from four countries. Liam is {*Irish|Ireland}. He speaks English and learns {*Irish|the Irish} at school. Chloe is {*an Australian|an Australia} girl from Canberra. Maksym is {*Ukrainian|Ukraine}, but he lives in Canada. In Canada, English and {*French|Irish} are official languages.",
          hint: "A country or a nationality word? Which languages are official in Canada?",
          fbOk: "Well done!",
          fbBad: "Look at the tables: country → adjective; languages without the.",
          fbText: "Liam is <b>Irish</b> and learns <b>Irish</b> (no <i>the</i>). Chloe is <b>an Australian</b> girl. Maksym is <b>Ukrainian</b>. Canada’s official languages are English and <b>French</b>."
        }
      ],
      outro: {
        text: "A Canadian, Canadians, the British, the Irish: now you can talk about people from different countries.",
        learned: [
          "Use nationality words: Canadian, a Canadian, Canadians.",
          "Talk about the British and the Irish.",
          "Say which languages people speak in a country."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s8l4",
      title: "Much bigger, a bit smaller: comparing countries",
      short: "Comparing countries",
      icon: "scale",
      status: "verified",
      why: "Numbers tell us a lot about a country. Compare countries with much and a bit.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Is Canada bigger than Ukraine?",
          body: `<p class="lead">Andrii and Maksym make a fact file for their English lessons.</p><p><b>Area</b></p><ul><li>Canada: almost 10 million km².</li><li>Ukraine: about 600,000 km².</li><li>The UK: about 240,000 km².</li><li>Ireland: about 70,000 km².</li></ul><p><b>Population</b></p><ul><li>The UK: about 67 million (2021).</li><li>Canada: about 37 million (2021).</li><li>Ireland: about 5.1 million (2022).</li><li>New Zealand: about 5 million (2023).</li></ul><p><b>Maksym:</b> Canada is much bigger than Ukraine!<br><b>Andrii:</b> Yes, but look at the population of the UK.</p><p>Is a big country always a country with a lot of people?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Canada is much bigger than the UK. Where do more people live?</p>`,
          opts: [
            "in the UK",
            "in Canada",
            "the same in both countries"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "The UK: about 67 million people. Canada: about 37 million. The UK is much smaller, but its population is <b>much bigger</b>."
        },
        {
          type: "info",
          title: "Much, a bit + comparative",
          body: `<ul><li>a big difference → <b>much</b> + comparative:<br>Canada is <b>much bigger</b> than the UK.<br>(almost 10 million km² and about 240,000 km²)</li><li>a small difference → <b>a bit</b> + comparative:<br>The population of Ireland is <b>a bit bigger</b> than the population of New Zealand.<br>(about 5.1 million and about 5 million)</li></ul><p>We can also say <b>a lot bigger</b>.</p><p>Not: <s>very bigger</s>, <s>more bigger</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Area: Ukraine – about 600,000 km², the UK – about 240,000 km², Ireland – about 70,000 km².</p>`,
          text: "Ukraine is {*much|a bit} bigger than the UK. Ireland is {*much|a bit} smaller than the UK. The UK is {*much|very} smaller than Ukraine.",
          hint: "Compare the numbers. Is the difference big or small?",
          fbOk: "Exactly.",
          fbBad: "600,000 and 240,000: is it a small difference? And remember: not very + comparative.",
          fbText: "All the differences are big: Ukraine is <b>much</b> bigger than the UK, Ireland is <b>much</b> smaller. We don’t say <s>very smaller</s>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Population: Ireland (2022) – about 5.1 million, New Zealand (2023) – about 5 million.</p><p>Which sentence is true?</p>`,
          opts: [
            "The population of Ireland is a bit bigger than the population of New Zealand.",
            "The population of Ireland is much bigger than the population of New Zealand.",
            "The population of New Zealand is a bit bigger than the population of Ireland."
          ],
          correct: 0,
          hint: "Which number is bigger? Is the difference big or small?",
          fbOk: "Right.",
          fbBad: "5.1 million and 5 million: which is bigger, and by how much?",
          fbText: "5.1 million is only a little more than 5 million: Ireland’s population is <b>a bit bigger</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Canada: almost 10 million km². The UK: about 240,000 km². Make a true sentence. Start with Canada.</p>`,
          tiles: ["Canada", "is", "much", "bigger", "than", "the UK"],
          answer: "Canada is much bigger than the UK.",
          extra: ["more"],
          hint: "Canada is … bigger than …",
          fbOk: "Well done!",
          fbBad: "Start with Canada. Much comes before bigger.",
          fbText: "<b>Canada is much bigger than the UK.</b> Not <s>more bigger</s>: <i>bigger</i> already means more big."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: much or a bit.",
          body: `<p>Area: Australia – about 7.7 million km², Ukraine – about 600,000 km².</p>`,
          before: "Australia is",
          after: "bigger than Ukraine.",
          answer: "much",
          hint: "Compare 7.7 million and 600,000.",
          fbOk: "Good eye!",
          fbBad: "Is the difference big or small?",
          fbText: "7.7 million and 600,000: a very big difference. Australia is <b>much</b> bigger than Ukraine."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Maksym writes about the fact file.</p>`,
          text: "Canada is [!much bigger] than the UK, but the population of the UK is [more bigger].",
          hint: "Look at the rule: much or a bit + comparative.",
          fbOk: "Yes!",
          fbBad: "Which words do we never use together?",
          fbText: "Not <s>more bigger</s>: the population of the UK is <b>much bigger</b> (67 million and 37 million). <i>Much bigger</i> about Canada is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a short report for his English class.</p>`,
          text: "The area of Canada is almost 10 million km². It’s {*much|a bit} bigger than Ukraine. But the population of Canada is much {*smaller|small} than the population of the UK. In 2021, about 37 million people lived in Canada and about 67 million lived in the UK. Ireland has about 5.1 million people, and New Zealand has about 5 million. So the population of Ireland is {*a bit|much} bigger.",
          hint: "Compare the numbers in the fact file.",
          fbOk: "Well done!",
          fbBad: "A big difference → much. A small difference → a bit. And after much we need a comparative.",
          fbText: "Canada is <b>much</b> bigger than Ukraine. Its population is much <b>smaller</b> than the UK’s. Ireland’s population is <b>a bit</b> bigger than New Zealand’s (about 5 million)."
        }
      ],
      outro: {
        text: "Much bigger, a bit bigger: now you can compare countries and their populations with numbers.",
        learned: [
          "Compare countries with much and a bit: much bigger, a bit smaller.",
          "Read and compare facts about area and population.",
          "Write a short report with numbers."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s8l5",
      title: "If I lived in Canada, I would…",
      short: "If I lived…",
      icon: "bulb",
      status: "verified",
      why: "Sometimes we imagine a different life. Learn to talk about imagined situations.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What if Andrii lived in Canada?",
          body: `<p class="lead">Andrii has a video call with his cousin Maksym.</p><p><b>Maksym:</b> If you come to Ottawa next summer, we’ll go kayaking!<br><b>Andrii:</b> I can’t. We’re going to Chernihiv. But I often dream about Canada. If I lived in Ottawa, I would go skating every day in winter!<br><b>Maksym:</b> And if you were here, we would play chess every evening.</p><p>If I lived, I would: is it real or imagined?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><b>Andrii:</b> If I lived in Ottawa, I would go skating every day.</p><p>Does Andrii live in Ottawa?</p>`,
          opts: [
            "Yes, he lives in Ottawa now.",
            "No, he lives in Kyiv. He imagines it.",
            "Not now, but he is moving there next year."
          ],
          correct: 1,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "Andrii lives in Kyiv. <b>If I lived…, I would…</b> is about an imagined situation, not a real one."
        },
        {
          type: "info",
          title: "The Second Conditional",
          body: `<p>We use it for a situation that isn’t real now:</p><ul><li><b>if</b> + Past Simple → <b>would</b> + verb</li><li>If I <b>lived</b> in Canada, I <b>would go</b> skating every day.</li><li>If Andrii <b>had</b> more money, he <b>would visit</b> Australia.</li></ul><p>Here the Past Simple isn’t about the past. It means “not real”.</p><p>Short form: I would → I<b>’d</b>.</p><p>Not: <s>If I would live</s> in Canada.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "If I {*lived|would live} in Dublin, I {*would see|will see} Liam every weekend. If Maksym {*had|would have} more time, he {*would visit|visits} Kyiv more often.",
          hint: "After if: the Past Simple. In the other part: would + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: if + Past Simple → would + verb.",
          fbText: "If I <b>lived</b>…, I <b>would see</b>… If Maksym <b>had</b>…, he <b>would visit</b>… No <i>would</i> after <i>if</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma lives in England. She imagines life in Australia.</p>`,
          opts: [
            "If Emma would live in Australia, she would swim in the sea at Christmas.",
            "If Emma lived in Australia, she will swim in the sea at Christmas.",
            "If Emma lived in Australia, she would swim in the sea at Christmas."
          ],
          correct: 2,
          hint: "Find the Past Simple after if and would in the other part.",
          fbOk: "Right.",
          fbBad: "After if – the Past Simple. In the other part – would.",
          fbText: "<b>If Emma lived in Australia, she would swim…</b> Christmas is in summer there! Not <s>if she would live</s>, not <s>lived… will</s>."
        },
        {
          type: "info",
          title: "If I were…",
          body: `<p>With <i>be</i>, we often use <b>were</b> for all people:</p><ul><li>If I <b>were</b> in Canada, I would go skating.</li><li>If Liam <b>were</b> here, we would play chess.</li></ul><p>In everyday English, people also say <b>was</b>: If I <b>was</b> in Canada… Both are correct. <b>Were</b> is more usual in writing.</p><p>Not: <s>If I would be</s> in Canada.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras is at home in Lviv. He imagines a holiday in New Zealand. Use the verb <i>be</i>.</p>`,
          before: "If I",
          after: "in New Zealand, I would climb a mountain.",
          answer: ["were", "was"],
          hint: "If + be in the Past Simple…",
          fbOk: "Well done!",
          fbBad: "After if, use the Past Simple of be.",
          fbText: "If I <b>were</b> in New Zealand… <b>Was</b> is correct too, but <b>were</b> is more usual in writing."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Mariia imagines life in Ireland. Start with If.</p>`,
          tiles: ["If", "I", "lived", "in Ireland,", "I’d", "learn", "Irish"],
          answer: "If I lived in Ireland, I’d learn Irish.",
          extra: ["live"],
          keepCase: true,
          hint: "If + I + Past Simple…, I’d + verb.",
          fbOk: "Yes!",
          fbBad: "After if – the Past Simple: lived, not live.",
          fbText: "<b>If I lived in Ireland, I’d learn Irish.</b> I’d = I would. After <i>if</i>: <b>lived</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Andrii writes to Liam.</p>`,
          text: "If I [would live] in Dublin, I [!would go] to school with you.",
          hint: "Where do we use would: after if or in the other part?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: no would after if.",
          fbText: "If I <b>lived</b> in Dublin, I would go to school with you. No <i>would</i> after <i>if</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about an imagined life.</p>`,
          text: "I live in a village near Poltava. But sometimes I imagine a different life. If I {*lived|live} in England, I {*would go|went} to school with Emma. If Emma {*were|is} here, we would walk around our village together. And if we {*had|would have} a lot of money, we would travel around the world!",
          hint: "After if: the Past Simple. In the other part: would + verb.",
          fbOk: "Well done!",
          fbBad: "Look at the rules: if + Past Simple, would + verb, if + were.",
          fbText: "If I <b>lived</b>…, I <b>would go</b>… If Emma <b>were</b> here… If we <b>had</b>… These situations are imagined, not real."
        }
      ],
      outro: {
        text: "If I lived in Canada, I would…: now you can talk about an imagined life.",
        learned: [
          "Talk about imagined situations: If I lived…, I would…",
          "Use were or was after if: If I were in Canada…",
          "Don’t use would after if."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s8l6",
      title: "If you could visit one country, which would you choose?",
      short: "Which would you choose?",
      icon: "map",
      status: "verified",
      why: "Ask friends about their dreams. Choose a country and give your reasons.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Which country would you choose?",
          body: `<p class="lead">Ms Lysenko asks Andrii’s class in Kyiv: “If you could visit one English-speaking country, which would you choose? Why?”</p><p><b>Daryna:</b> I’d choose New Zealand. If I went there, I could climb mountains.<br><b>Bohdan:</b> I’d choose Canada because I love snow. I could go skiing every day.<br><b>Zoriana:</b> Australia! If I were there in December, I could have a summer Christmas.</p><p>Would or could: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><b>Daryna:</b> If I went to New Zealand, I could climb mountains.</p><p>What does <i>could</i> mean here?</p>`,
          opts: [
            "I would be able to climb mountains.",
            "I climbed mountains in the past.",
            "I must climb mountains."
          ],
          correct: 0,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "Here <b>could</b> = would be able to. It’s about an imagined situation."
        },
        {
          type: "info",
          title: "Questions, could and short answers",
          body: `<ul><li>Questions:<br><b>What would you do</b> if you lived in Canada?<br><b>Which country would you choose</b>?</li><li>Short answers:<br>Would you go there? – Yes, I <b>would</b>. / No, I <b>wouldn’t</b>.</li><li><b>could</b> = would be able to:<br>If I lived in Australia, I <b>could</b> swim in the sea in December.</li><li><b>if</b> + <b>could</b>:<br>If I <b>could</b> visit one country, I’d choose Canada.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          text: "Bohdan: If you {*could|would} visit any country, which one {*would|did} you choose? Daryna: I’d choose New Zealand. Bohdan: Would you go alone? Daryna: No, I {*wouldn’t|didn’t}. I’d go with my mum.",
          hint: "No would after if. The question and the short answer use the same verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rules: if + could; which one would you…? – No, I wouldn’t.",
          fbText: "If you <b>could</b> visit…, which one <b>would</b> you choose? Would you go alone? – No, I <b>wouldn’t</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Maksym asks Andrii about an imagined life in Canada. Start with What.</p>`,
          tiles: ["What", "would", "you", "do", "if", "you", "lived", "in Canada"],
          answer: "What would you do if you lived in Canada?",
          extra: ["will"],
          keepCase: true,
          hint: "What + would + you + do… if + you + Past Simple…",
          fbOk: "Well done!",
          fbBad: "After What comes would, then you and do.",
          fbText: "<b>What would you do if you lived in Canada?</b> In the question, <b>would</b> comes before <b>you</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Liam:</b> If you could visit Ireland, what would you do first?</p><p>What does Andrii say?</p>`,
          opts: [
            "I’d go to Dublin and visit you!",
            "Yes, I would.",
            "I went to Dublin last summer."
          ],
          correct: 0,
          hint: "Liam asks What…? Which answer tells him what Andrii would do?",
          fbOk: "Yes!",
          fbBad: "A What question needs more than Yes or No. And Andrii imagines a visit.",
          fbText: "<b>I’d go to Dublin and visit you!</b> Liam asks <i>What would you do?</i>, so we answer with I’d + verb. <i>Yes, I would</i> answers a yes/no question."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "If I could choose, I’d go to Canada.",
            "If I could live anywhere, I would live near the sea.",
            "If I would have more time, I would travel.",
            "Which country would you choose?",
            "What you would do in Australia?"
          ],
          correct: [0, 1, 3],
          hint: "Look for would after if. Check the word order in the questions.",
          fbOk: "Well done!",
          fbBad: "Find would after if. And in a question, would comes before you.",
          fbText: "Correct: <b>If I could choose, I’d go…</b>, <b>If I could live anywhere, I would live…</b>, <b>Which country would you choose?</b> Not <s>If I would have</s>: If I <b>had</b> more time. Not <s>What you would do</s>: What <b>would you</b> do?"
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p><b>Zoriana:</b> Would you like to live in Australia?<br><b>Bohdan:</b> No, I ___. I love snow!</p>`,
          before: "No, I",
          after: ". I love snow!",
          answer: ["wouldn’t", "would not"],
          contractions: true,
          hint: "Would you…? – No, I …",
          fbOk: "Right.",
          fbBad: "The short answer uses the same verb as the question: would.",
          fbText: "Would you like…? – No, I <b>wouldn’t</b>. Bohdan loves snow, so he says no."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes an answer to Ms Lysenko’s question.</p>`,
          text: "If I could visit one English-speaking country, I {*would|will} choose Ireland. I would stay with my penfriend Liam in Dublin. If we {*had|would have} more time, we {*could|can} go to the west coast. It’s much {*wetter|wet} there than in Dublin, so I would take an umbrella!",
          hint: "If + Past Simple, would or could + verb. After much: a comparative.",
          fbOk: "Well done!",
          fbBad: "Look at the rules: if + Past Simple; would or could in the other part; much + comparative.",
          fbText: "I <b>would</b> choose Ireland. If we <b>had</b> more time, we <b>could</b> go to the west coast. The west of Ireland is much <b>wetter</b> than Dublin."
        }
      ],
      outro: {
        text: "What would you do? Which would you choose? Now you can talk about your dreams and give your reasons.",
        learned: [
          "Ask and answer: What would you do if…?",
          "Use could: If I lived in Australia, I could…",
          "Choose a country and give your reasons."
        ]
      }
    },

    /* ───────────── Урок 7: фінал розділу ───────────── */
    {
      id: "e8s8l7",
      title: "Around the English-speaking world",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the club quiz?",
          body: `<p class="lead">Oksana’s English club and Liam’s class in Dublin are making a quiz about English-speaking countries.</p><p>Help them write the questions and the answers. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Which country is in North America, north of the USA?</p>`,
          opts: [
            "Australia",
            "Canada",
            "Ireland"
          ],
          correct: 1,
          pre: "e8s8l1",
          fbOk: "Right.",
          fbBad: "Which country is in North America?",
          fbText: "<b>Canada</b> is in North America, north of the USA. Australia is a continent, and Ireland is in Europe."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Kharkiv is {*in the north-east of|north-east of} Ukraine. Ireland is {*west of|in the west of} Great Britain. New Zealand has two big {*islands|continents} in the Pacific.",
          pre: "e8s8l1",
          hint: "Is the place inside the other place or outside it?",
          fbOk: "Exactly.",
          fbBad: "Inside → in the north-east of. Outside → west of.",
          fbText: "Kharkiv is a city in Ukraine: <b>in the north-east of</b> Ukraine. Ireland isn’t inside Great Britain: <b>west of</b> Great Britain. New Zealand has two big <b>islands</b>."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Match the halves.",
          left: ["In Canada,", "In Australia,", "In the UK,", "A desert"],
          right: ["winters are very cold and snowy in many parts.", "summer is in December, January and February.", "the west is wetter than the east.", "is a big place with sand or rocks and almost no rain."],
          pre: "e8s8l2",
          fbOk: "Well done!",
          fbBad: "Which country has summer in December? Which one has very cold winters?",
          fbText: "<b>Canada</b> – very cold, snowy winters in many parts. <b>Australia</b> – summer in December. <b>The UK</b> – the west is wetter than the east. <b>A desert</b> – sand or rocks and almost no rain."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>Liam, his family and all the other people from Ireland. Write the word with a capital letter.</p>`,
          before: "They are the",
          after: ".",
          answer: "Irish",
          keepCase: true,
          pre: "e8s8l3",
          fbOk: "Yes!",
          fbBad: "Check the capital letter. The Irish, like the British, has no -s.",
          fbText: "All the people from Ireland are <b>the Irish</b>: no <i>-s</i>, with a capital letter."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Population in 2021: the UK – about 67 million, Canada – about 37 million.</p><p>Which sentence is true?</p>`,
          opts: [
            "The population of Canada is a bit bigger than the population of the UK.",
            "The population of the UK is a bit smaller than the population of Canada.",
            "The population of the UK is much bigger than the population of Canada."
          ],
          correct: 2,
          pre: "e8s8l4",
          hint: "Compare 67 and 37 million. Is the difference big or small?",
          fbOk: "Right.",
          fbBad: "Which number is bigger: 67 million or 37 million? Is the difference big or small?",
          fbText: "67 million and 37 million: a big difference. The population of the UK is <b>much bigger</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Chloe lives in Canberra. She imagines life in Kyiv.</p>`,
          text: "If I {*lived|would live} in Kyiv, I {*would learn|will learn} Ukrainian. If I {*had|have} more free time, I would practise every day.",
          pre: "e8s8l5",
          hint: "Does Chloe live in Kyiv? Then which form comes after if?",
          fbOk: "Well done!",
          fbBad: "After if: the Past Simple. In the other part: would + verb.",
          fbText: "If I <b>lived</b>…, I <b>would learn</b>… If I <b>had</b>… No <i>would</i> after <i>if</i>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Write the missing word.",
          body: `<p>Liam is at home in Dublin. Andrii is in Kyiv. Use the verb <i>be</i>.</p>`,
          before: "Andrii: If Liam",
          after: "here, we would play chess.",
          answer: ["were", "was"],
          pre: "e8s8l5",
          fbOk: "Good eye!",
          fbBad: "After if, use the Past Simple of be.",
          fbText: "If Liam <b>were</b> here… <b>Was</b> is correct too, but <b>were</b> is more usual in writing."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 8",
          title: "Put the words in order.",
          body: `<p>Write the first question for the quiz. Start with Which.</p>`,
          tiles: ["Which", "country", "would", "you", "choose"],
          answer: "Which country would you choose?",
          extra: ["chose"],
          keepCase: true,
          pre: "e8s8l6",
          fbOk: "Yes!",
          fbBad: "After would: the verb without -ed.",
          fbText: "<b>Which country would you choose?</b> would + you + choose."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 9",
          title: "Complete the sentences.",
          body: `<p>Oksana answers the quiz question.</p>`,
          text: "If I could visit one country, I’d choose Canada. It’s {*much|very} bigger than Ukraine, and my friend Maksym lives there. If I {*were|would be} in Ottawa in winter, I {*could|can} go skating every day. Maksym speaks English, and he’s learning {*French|the French} at school.",
          pre: "e8s8l6",
          hint: "Compare the sizes of Canada and Ukraine. And which language does Maksym learn?",
          fbOk: "Well done!",
          fbBad: "Remember: much + comparative; if + were; could + verb; no the before a language.",
          fbText: "<b>Much</b> bigger. If I <b>were</b> in Ottawa, I <b>could</b> go skating. He’s learning <b>French</b> – no <i>the</i>."
        }
      ],
      outro: {
        text: "You can say where English-speaking countries are, describe their climate and compare them. And you can imagine a life in another country!",
        learned: [
          "Describe where a country is and what its climate is like.",
          "Compare countries with much and a bit.",
          "Talk about imagined situations: If I lived…, I would…"
        ]
      }
    }
  ]
});
