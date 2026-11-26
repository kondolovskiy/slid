/* Слід · Англійська мова, 10 клас — «Weather, nature and natural disasters» (e10s4)
   Програма: П1407 «Іноземні мови. 10–11 класи» (наказ МОН № 1407 від 23.10.2017), спеціалізовані школи, 10 кл., B1 → B2:
   тема «Природа і погода» — природні катаклізми та їх види; вплив погоди на здоров’я та настрій; захист природи (с. 22);
   функції — висловлювати власні припущення, прогнозувати ймовірність подій і наслідків (с. 22); граматика (с. 23):
   going to / will for predictions, Future Continuous, Future Perfect, prepositions in time phrases (by, until, till);
   обсяги — с. 21: https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. Повторення: e5s5l2 (storms), e5s5l5 (will),
   e5s9l3 (going to), e9s2l3 (will / going to), e9s2l4 (Future Continuous). e9s2 (довкілля, Червона книга, eco project) не дублюємо.
   will / be going to: обидва в прогнозі часто правильні (pitfalls-content «Англійська» п. 3, 12) — у вправах вони ніколи не стоять
   один проти одного як «правильний / хибний»; пастки — лише хибні форми. Future Perfect vs will + verb з by: обидва правильні —
   will + verb хибним не дається (l5, multi). till = until — till серед хибних варіантів не з'являється.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Прогнози погоди, план еко-групи, клас Andrii — вигадані.
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нових героїв немає.
   Факти (імена штормів у UK та Ireland, попередження Met Office, повінь 2008 р. на заході України, поради NHS у спеку,
   вітамін D, національні парки UK, Карпатський і Шацький НПП, Світязь) і форми (CD, CD Grammar) — URL у
   tasks/…/write-eng-g10-e10s4.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft. 7 уроків (6 + фінал). Будова — за розділами 9 кл. (e9s2).
   Перевірка: node tools/validate.mjs --section e10s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s4",
  grade: 10,
  weeks: [14, 18],
  title: "Weather, nature and natural disasters",
  why: "To talk about natural disasters and how the weather affects our health and mood. And to make predictions about nature and say how we can protect it.",
  requires: ["e5s5l2", "e5s5l5", "e5s9l3", "e9s2l3", "e9s2l4"],
  meta: { author: "writer-e10s4", created: "2026-11-26", factcheck: null, teacher: null },
  badges: [
    { id: "e10s4boss", name: "Storm watcher", icon: "trophy", desc: "Finish the final lesson “Weather, nature and natural disasters”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s4l1",
      title: "Floods, storms, earthquakes: natural disasters",
      short: "Natural disasters",
      icon: "bolt",
      status: "draft",
      why: "Nature can be dangerous. Learn the words to talk about floods, storms, earthquakes and other natural disasters.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Wild weather",
          body: `<p class="lead">This month, the penfriend club’s topic is “Wild weather”. Ms Kravets asks: “Has the weather ever caused problems where you live?”</p><p><b>Emma:</b> Last winter, a big storm hit our town. Strong winds knocked down two trees in our street.<br><b>Taras:</b> In the Carpathians, heavy rain sometimes causes floods. Mountain rivers can rise very fast.<br><b>Daryna:</b> Our geography club is making a poster about earthquakes and volcanoes.</p><p>Storms, floods, earthquakes: what are they all?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Storms, floods and earthquakes can damage homes, roads and fields. What do we call them?</p>`,
          opts: [
            "natural disasters",
            "weather forecasts",
            "nature reserves"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "They are <b>natural disasters</b>: dangerous events in nature. The next screen has more words."
        },
        {
          type: "info",
          title: "Natural disasters",
          body: `<p>A <b>natural di<u>sas</u>ter</b> is a dangerous event in nature. It can damage homes, roads and fields.</p><ul><li>a <b>flood</b> → water covers land that is usually dry</li><li>a <b>drought</b> → a long time with little or no rain</li><li>a <b><u>wild</u>fire</b> → a big fire in a forest or on dry land</li><li>an <b><u>earth</u>quake</b> → the ground suddenly shakes</li><li>a <b><u>land</u>slide</b> → earth and rocks slide down a hill</li><li>a <b><u>hur</u>ricane</b> → a storm with very strong winds</li><li>an <b><u>av</u>alanche</b> → a lot of snow falls down a mountain</li><li>a <b>vol<u>ca</u>no erupts</b> → hot rock comes out of it</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the words and their meanings.</p>`,
          left: ["a flood", "a drought", "an earthquake", "a landslide", "an avalanche", "a wildfire"],
          right: ["water covers dry land", "a long time with little or no rain", "the ground suddenly shakes", "earth and rocks slide down a hill", "snow falls down a mountain", "a big fire in a forest"],
          hint: "Which ones are about water, snow and fire? Which one is about the ground?",
          fbOk: "Right.",
          fbBad: "Look at the list of words again.",
          fbText: "<b>flood</b> → water on dry land. <b>drought</b> → little or no rain. <b>earthquake</b> → the ground shakes. <b>landslide</b> → earth and rocks slide. <b>avalanche</b> → snow falls. <b>wildfire</b> → a big fire."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>What causes it: the weather, or movements deep inside the Earth?</p>`,
          bins: ["The weather", "Movements inside the Earth"],
          items: [
            ["a hurricane", 0],
            ["a storm", 0],
            ["a flood after heavy rain", 0],
            ["a drought", 0],
            ["an earthquake", 1],
            ["a volcano erupting", 1]
          ],
          hint: "Is it about wind and rain, or does it come from under the ground?",
          fbOk: "Exactly.",
          fbBad: "Think: does it come from the sky or from under the ground?",
          fbText: "Hurricanes, storms, floods after rain and droughts come from the <b>weather</b>. In an earthquake, the ground shakes, and hot rock comes out of a volcano: they start <b>inside the Earth</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Reading: Storms with names",
          title: "Read and choose.",
          body: `<p>Since 2015, the Met Office in the UK and Met Éireann in Ireland have given names to big storms. Every September, they publish a new list of names in alphabetical order. Many of the names come from ideas sent in by the public. Why do it? A storm with a name is easier to remember and talk about. So more people notice the weather warnings and stay safe.</p><p>Why do big storms in the UK and Ireland get names?</p>`,
          opts: [
            "because the storms come from other countries",
            "because the names are always funny",
            "to help people notice the warnings and stay safe"
          ],
          correct: 2,
          hint: "Find the sentence that starts with “So”.",
          fbOk: "Yes!",
          fbBad: "Read the last two sentences again.",
          fbText: "A storm with a name is easier to remember, so more people <b>notice the warnings and stay safe</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Floods in western Ukraine",
          title: "Read and choose.",
          body: `<p>In the Carpathians, mountain rivers can rise very fast after heavy rain. In July 2008, it rained hard for several days in the mountains. The Dniester, the Prut and other rivers rose and flooded towns, villages, roads and fields in western Ukraine. Many bridges were damaged. Rescue workers helped thousands of people leave their homes.</p><p>Which sentence is true?</p>`,
          opts: [
            "The floods happened in eastern Ukraine.",
            "The floods came after several days of heavy rain.",
            "The water didn’t damage any bridges."
          ],
          correct: 1,
          hint: "Find the month, the cause and the part of Ukraine in the text.",
          fbOk: "Good eye!",
          fbBad: "Read the text again: what happened before the floods?",
          fbText: "The floods were in <b>July 2008</b>, after <b>several days of heavy rain</b>. They were in <b>western</b> Ukraine, and many bridges were damaged."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Daryna writes for the geography club poster.</p>`,
          text: "A {*drought|flood|landslide} is a long time with little or no rain. In hot, dry weather, a small fire can turn into a {*wildfire|hurricane|flood}. In the mountains, a lot of snow can cause an {*avalanche|earthquake|drought}, and heavy rain can cause a {*landslide|drought|wildfire}.",
          hint: "No rain for a long time: a …? Snow falls down a mountain: an …?",
          fbOk: "Well done!",
          fbBad: "Check the meanings in the list of words.",
          fbText: "Little or no rain → a <b>drought</b>. A fire in dry land → a <b>wildfire</b>. Snow → an <b>avalanche</b>. Heavy rain on a hill → a <b>landslide</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+earth|quake", "+hur|ri|cane", "vol|+ca|no", "di|+sas|ter", "+av|a|lanche", "+land|slide"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list of words.",
          fbText: "<u>Earth</u>quake, <u>hur</u>ricane, <u>av</u>alanche, <u>land</u>slide: the stress is on the first part. Vol<u>ca</u>no, di<u>sas</u>ter: on the second."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>The fields are dry and brown. It hasn’t rained for three months.</p>`,
          before: "The farmers are worried about the",
          after: ".",
          answer: ["drought", "dry spell", "dry weather", "lack of rain"],
          hint: "A long time with little or no rain: d…",
          fbOk: "Right.",
          fbBad: "Look at the list of words: which disaster is about no rain?",
          fbText: "A long time without rain is a <b>drought</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes her post for the club.</p>`,
          text: "Last winter, a big {*storm|drought|earthquake} hit our town. It even had a name! The wind knocked down trees, and after two days of heavy rain, the river {*flooded|erupted|shook} the fields near my school. Luckily, we don’t get {*earthquakes|floods|storms} in our town: the ground never shakes here.",
          hint: "Strong wind and rain: a …? What does a river do to fields after heavy rain?",
          fbOk: "Brilliant!",
          fbBad: "Check: wind and rain, water on the fields, the ground shakes.",
          fbText: "A big <b>storm</b> hit the town. The river <b>flooded</b> the fields. When the ground shakes, it’s an <b>earthquake</b> – and Emma’s town doesn’t get them."
        }
      ],
      outro: {
        text: "Floods, droughts, earthquakes and avalanches: now you can talk about natural disasters.",
        learned: [
          "Name natural disasters: flood, drought, wildfire, earthquake, landslide, avalanche.",
          "Say what causes some natural disasters.",
          "Read short texts about storms in the UK and floods in Ukraine."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s4l2",
      title: "Look at those clouds! Will or going to?",
      short: "Predictions",
      icon: "eye",
      status: "draft",
      why: "Forecasts and warnings are predictions. Say what is going to happen, what will probably happen and what is likely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Black clouds over the mountain",
          body: `<p class="lead">Taras, his dad and Zlata are hiking in the Carpathians. Taras sends a message to the club.</p><p><i>Look at those black clouds over the mountain! It’s going to rain soon. Dad thinks the storm will probably be short. The forecast says the sky is likely to clear in the evening, so we’ll continue our hike then.</i></p><p>Going to, will probably, likely to: how sure is Taras, and why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The forecast says the sky is <b>likely to</b> clear in the evening.</p><p>What does <i>likely to</i> mean?</p>`,
          opts: [
            "It definitely won’t happen.",
            "It will probably happen.",
            "It happened yesterday."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Likely to</b> means it will <b>probably</b> happen. The next screen explains it."
        },
        {
          type: "info",
          title: "Predictions: going to, will, likely",
          body: `<ul><li><b>be going to</b> + verb → you can see signs now:<br><i>Look at those clouds!</i> It<b>’s going to</b> rain.</li><li><b>will</b> + verb → what you think, know or expect:<br><i>I think</i> the storm <b>will</b> be short.</li><li><b>be likely to</b> + verb → it will probably happen:<br>The sky <b>is likely to</b> clear. Storms <b>are unlikely to</b> last long.</li></ul><p>Often both <i>will</i> and <i>going to</i> are correct.<br><b>It’s likely that</b> + sentence means the same: <i>It’s likely that</i> it will rain.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Why does the speaker think so?</p>`,
          bins: ["I can see signs now", "It’s my opinion"],
          items: [
            ["The river is rising fast. It’s going to flood the road.", 0],
            ["The sky is getting dark. We’re going to get wet.", 0],
            ["Look at all that snow! The buses are going to be late.", 0],
            ["I think winters in Ukraine will be warmer in the future.", 1],
            ["I’m sure the town will repair the bridge soon.", 1],
            ["In my opinion, people will plant more trees in cities.", 1]
          ],
          hint: "Look for I think, I’m sure, In my opinion. What can the speaker see?",
          fbOk: "Right.",
          fbBad: "Can the speaker see something now, or is it what they think?",
          fbText: "The rising river, the dark sky, the snow: the speaker <b>can see signs</b> now. I think, I’m sure, in my opinion: it’s <b>an opinion</b>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Andrii: “I think it ___ snow in Kyiv next week.”</p><p>What can go in the gap?</p>`,
          opts: [
            "likes to",
            "will",
            "is going to",
            "is likely to"
          ],
          correct: [1, 2, 3],
          hint: "Remember: often both will and going to are correct. What does likely mean?",
          fbOk: "Well done!",
          fbBad: "Look at the rules again: three of them are correct.",
          fbText: "It <b>will</b> snow, it’s <b>going to</b> snow and it’s <b>likely to</b> snow are all correct predictions. <i>Like</i> means enjoy, so <i>likes to</i> is wrong here."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana is standing on the bridge in Zelena Dolyna: “The water is almost at the top of the river bank, and it’s still raining. The river is going to flood the fields.”</p><p>Why does she use <i>going to</i>?</p>`,
          opts: [
            "She is talking about her plan for next year.",
            "She is giving her opinion about the far future.",
            "She can see signs now: the high water and the rain."
          ],
          correct: 2,
          hint: "What can Oksana see from the bridge?",
          fbOk: "Exactly.",
          fbBad: "Read what Oksana says about the water and the rain.",
          fbText: "Oksana <b>can see signs</b> now: the water is high and it’s still raining. That’s why <i>be going to</i> is a good choice."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ms Lysenko reads the forecast to the class in Kyiv.</p>`,
          text: "Snow {*is likely to|is likely|likely to} fall tonight. The roads {*are likely to be|are likely be|likely being} icy in the morning. But strong winds {*are unlikely to|are unlikely|unlikely to} cause problems in Kyiv.",
          hint: "be + likely / unlikely + to + verb: all four parts.",
          fbOk: "Yes!",
          fbBad: "Check each gap: is there be, likely and to?",
          fbText: "Snow <b>is likely to</b> fall. The roads <b>are likely to be</b> icy. Strong winds <b>are unlikely to</b> cause problems: be + (un)likely + to + verb."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Write a prediction for the weekend forecast.</p>`,
          tiles: ["temperatures", "are", "likely", "to rise", "this week"],
          extra: ["rises"],
          answer: ["Temperatures are likely to rise this week.", "This week temperatures are likely to rise.", "Temperatures this week are likely to rise."],
          hint: "temperatures + are + likely + to + verb.",
          fbOk: "Exactly.",
          fbBad: "After likely: to + verb, not rises.",
          fbText: "<b>Temperatures are likely to rise this week.</b> The time words can also go at the start."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The forecast says there is only a 10% chance of rain tomorrow.</p>`,
          before: "Rain is",
          after: "to spoil our picnic.",
          answer: ["unlikely", "not likely"],
          hint: "Is 10% a big chance or a small one? Think of the opposite of likely.",
          fbOk: "Right.",
          fbBad: "Look at the rules: are … to + verb.",
          fbText: "A 10% chance → rain is <b>unlikely</b> to spoil the picnic. It probably won’t happen."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to the club again in the evening.</p>`,
          text: "The rain stopped an hour ago, and the sky is clear now. Dad says tomorrow {*is likely to|is likely|likely} be sunny. But look at all those stars! It {*is going to|are going to|going to} be a cold night. I think we {*will|wills|are} need our warm jackets. Zlata says snow {*is unlikely to|is unlikely|unlikely} fall in August!",
          hint: "be likely to + verb. it is going to. will + verb. be unlikely to + verb.",
          fbOk: "Brilliant!",
          fbBad: "Check the forms: is likely to, is going to, will + verb, is unlikely to.",
          fbText: "Tomorrow <b>is likely to</b> be sunny. A clear sky is a sign: it <b>is going to</b> be cold. We <b>will</b> need jackets: his opinion. Snow <b>is unlikely to</b> fall in August."
        }
      ],
      outro: {
        text: "Going to, will, likely and unlikely: now you can make predictions and say why you think so.",
        learned: [
          "Make predictions with be going to when you can see signs now.",
          "Give your opinion about the future with will.",
          "Say how probable something is with be likely to and be unlikely to."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s4l3",
      title: "Weather, health and mood",
      short: "Health and mood",
      icon: "user",
      status: "draft",
      why: "Hot days, grey days, sunny days: the weather changes how we feel. Talk about your health and mood.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How does the weather make you feel?",
          body: `<p class="lead">In July, there’s a heatwave in Kharkiv. Mariia writes to the club.</p><p><b>Mariia:</b> It’s 35 °C today! Hot weather makes me tired, and I’ve got a headache. But sunny autumn mornings always put me in a good mood.<br><b>Emma:</b> Here it’s grey and rainy. I’m feeling a bit under the weather – I think I’ve got a cold.<br><b>Andrii:</b> Grey November days make me gloomy, but snow makes me cheerful!</p><p>How does the weather change how they feel?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “I’m feeling a bit <b>under the weather</b>.”</p><p>What does she mean?</p>`,
          opts: [
            "She is standing outside in the rain.",
            "She feels a bit ill.",
            "She feels very happy."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Under the weather</b> means a bit ill. Emma thinks she has a cold. The next screen has more words."
        },
        {
          type: "info",
          title: "Weather, health and mood",
          body: `<ul><li>a <b><u>heat</u>wave</b> → a time of very hot weather</li><li><b>under the <u>wea</u>ther</b> → a bit ill</li><li>a <b><u>head</u>ache</b> → a pain in your head</li><li><b><u>sun</u>burnt</b> (also <b>sunburned</b>) → with red, painful skin after too much sun</li><li><b><u>gloo</u>my</b> → sad; <b><u>cheer</u>ful</b> → happy</li></ul><p>Hot weather <b>makes me</b> tired. Grey days <b>make me feel</b> sleepy. → make + someone + adjective / feel</p><p>Sunshine <b>puts me in a good mood</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the words and their meanings.</p>`,
          left: ["a heatwave", "under the weather", "a headache", "sunburnt", "gloomy", "cheerful"],
          right: ["a time of very hot weather", "a bit ill", "a pain in your head", "with red skin after too much sun", "sad", "happy"],
          hint: "Which two words are about mood? Which one is about hot weather?",
          fbOk: "Right.",
          fbBad: "Look at the list of words again.",
          fbText: "<b>heatwave</b> → very hot weather. <b>under the weather</b> → a bit ill. <b>headache</b> → a pain in your head. <b>sunburnt</b> → red skin. <b>gloomy</b> → sad. <b>cheerful</b> → happy."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Andrii writes more about the weather and his mood.</p>`,
          text: "Long grey days {*make me feel|make me to feel|make to me feel} sleepy. But a sunny, frosty morning {*puts me in|puts me on|makes me in} a good mood. Last summer, I stayed on the beach too long and got {*sunburnt|cheerful|gloomy}. My skin was red for days!",
          hint: "make + someone + feel. Sunshine puts you … a good mood. Red skin after the sun: …",
          fbOk: "Well done!",
          fbBad: "Check the examples on the list of words.",
          fbText: "Grey days <b>make me feel</b> sleepy: no <i>to</i>. Sunshine <b>puts me in</b> a good mood. Too much sun → <b>sunburnt</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Hot weather and health",
          title: "Choose all the correct answers.",
          body: `<p>Here is some health advice from the UK. In a heatwave, try to stay in the shade, especially between 11 am and 3 pm. This is the hottest part of the day. Drink plenty of water. Wear a hat, light clothes and sun cream. But some sun is good for us: sunlight on our skin helps the body make vitamin D.</p><p>Which ideas does the advice give?</p>`,
          opts: [
            "Wear dark, heavy clothes.",
            "Stay in the shade in the hottest part of the day.",
            "Sunlight is always bad for us.",
            "Drink plenty of water."
          ],
          correct: [1, 3],
          hint: "Find what the advice says about the shade, water and clothes.",
          fbOk: "Good eye!",
          fbBad: "Read the advice again and check each idea.",
          fbText: "Stay in the <b>shade</b> from 11 am to 3 pm and drink <b>plenty of water</b>. Clothes should be <b>light</b>, and some sun is good: it helps the body make vitamin D."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it about health or about mood?</p>`,
          bins: ["Health", "Mood"],
          items: [
            ["a headache", 0],
            ["sunburnt", 0],
            ["under the weather", 0],
            ["gloomy", 1],
            ["cheerful", 1],
            ["in a good mood", 1]
          ],
          hint: "Is it about your body or about your feelings?",
          fbOk: "Exactly.",
          fbBad: "Think: is it a problem with your body, or is it how happy you are?",
          fbText: "A headache, sunburnt skin and feeling under the weather are about <b>health</b>. Gloomy, cheerful and in a good mood are about <b>mood</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Last July, it was 35 °C in Kharkiv every day for a week.</p>`,
          before: "There was a",
          after: "in Kharkiv last July.",
          answer: ["heatwave", "heat wave"],
          hint: "A time of very hot weather: h…",
          fbOk: "Yes!",
          fbBad: "Look at the first word in the list.",
          fbText: "A time of very hot weather is a <b>heatwave</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to the club a week later.</p>`,
          text: "The {*heatwave|headache|drought} in Kharkiv is over at last! For a week, it was 35 °C every day. The heat {*made me|made me to|made to me} feel tired, so I stayed in the {*shade|sunburnt|heatwave} in the afternoons and drank plenty of water. Today it’s 24 °C and sunny, and that always {*puts me in|puts me on|makes me in} a good mood.",
          hint: "Very hot weather for a week: a …? make + someone + feel. Where is it cool on a sunny day?",
          fbOk: "Brilliant!",
          fbBad: "Check: very hot weather, make + feel, a cool place, a good mood.",
          fbText: "The <b>heatwave</b> is over. The heat <b>made me</b> feel tired. She stayed in the <b>shade</b>. Sunny weather <b>puts her in</b> a good mood."
        }
      ],
      outro: {
        text: "Heatwaves, headaches and good moods: now you can say how the weather makes you feel.",
        learned: [
          "Talk about how the weather affects your health and mood.",
          "Use make me feel and put me in a good mood.",
          "Read health advice for hot weather and find the main ideas."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s4l4",
      title: "Temperatures will be falling: forecasts and warnings",
      short: "Forecasts",
      icon: "chart",
      status: "draft",
      why: "Weather forecasts and warnings help us plan and stay safe. Understand them and write your own.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A forecast for the mountains",
          body: `<p class="lead">Taras reads the weather forecast for Lviv region before a trip to the Carpathians.</p><p><i>Tonight, temperatures will be falling fast, and it will be −5 °C by the morning. Tomorrow, strong winds will be blowing in the mountains all day. Snow will start in the afternoon, and in the evening it will be snowing hard. Roads will be icy.</i></p><p>Will be falling, will be blowing: why does the forecast use this form?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Tomorrow, strong winds <b>will be blowing</b> in the mountains all day.”</p><p>What does it mean?</p>`,
          opts: [
            "The wind will start and stop at one moment.",
            "The wind was strong yesterday.",
            "The wind will be strong for the whole day."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The wind will be <b>in progress</b> all day. This is the Future Continuous. The next screen explains it."
        },
        {
          type: "info",
          title: "Forecasts: will and will be + -ing",
          body: `<ul><li><b>will be</b> + verb<b>-ing</b> (the Future Continuous) → in progress at a time or for a long time:<br>Temperatures <b>will be falling</b> tonight. It <b>will be snowing</b> all evening.</li><li><b>will</b> + verb → one event or a fact about the future:<br>Snow <b>will start</b> at 3 pm. It <b>will be</b> −5 °C tomorrow.</li></ul><p>Often both are correct: <i>It will rain all day.</i> = <i>It will be raining all day.</i></p><p>Not: <s>It will raining.</s> <s>It will be rain.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>The weekend forecast for Kharkiv.</p>`,
          text: "On Saturday morning, it {*will be raining|will raining|will be rains} in the city. Temperatures {*will be rising|will rising|are be rising} all day. On Sunday, the sun {*will be shining|will shining|will be shines} from early morning.",
          hint: "will + be + verb-ing: three parts.",
          fbOk: "Right.",
          fbBad: "You need will, be and the -ing form.",
          fbText: "It <b>will be raining</b>, temperatures <b>will be rising</b>, the sun <b>will be shining</b>: will + be + verb-ing."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Reading: Weather warnings in the UK",
          title: "Read and choose.",
          body: `<p>In the UK, the Met Office gives weather warnings in three colours.</p><ul><li><b>Yellow</b>: the weather may cause some problems, for example for travel.</li><li><b>Amber</b>: there is a higher chance that bad weather will change your plans. Be ready.</li><li><b>Red</b>: dangerous weather is expected. Take action to stay safe. Red warnings are rare.</li></ul><p>There is an amber warning for wind in Emma’s town tomorrow. What should her family do?</p>`,
          opts: [
            "Nothing: amber is the lowest level.",
            "Be ready to change their plans.",
            "Take action at once: it is the most dangerous level."
          ],
          correct: 1,
          hint: "Find the line about amber.",
          fbOk: "Yes!",
          fbBad: "Read what the amber warning says.",
          fbText: "An amber warning means bad weather may <b>change your plans</b>, so be ready. Yellow is the lowest level, and red is the most dangerous."
        },
        {
          type: "match",
          sk: "read",
          title: "Match the halves.",
          body: `<p>Match each Met Office warning and what it means.</p>`,
          left: ["a yellow warning", "an amber warning", "a red warning"],
          right: ["some problems, for example for travel", "be ready to change your plans", "dangerous weather: take action to stay safe"],
          hint: "Which colour is the most serious? Which one is the lowest level?",
          fbOk: "Well done!",
          fbBad: "Read the three warnings again.",
          fbText: "Yellow → some problems. Amber → be ready to change your plans. Red → dangerous weather: act to stay safe."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Write a forecast for the Carpathians.</p>`,
          tiles: ["it", "will be", "snowing", "in the mountains", "tomorrow afternoon"],
          extra: ["snows"],
          answer: [
            "It will be snowing in the mountains tomorrow afternoon.",
            "It will be snowing tomorrow afternoon in the mountains.",
            "Tomorrow afternoon it will be snowing in the mountains.",
            "In the mountains it will be snowing tomorrow afternoon.",
            "Tomorrow afternoon in the mountains it will be snowing.",
            "In the mountains tomorrow afternoon it will be snowing."
          ],
          hint: "it + will be + verb-ing, then where and when.",
          fbOk: "Exactly.",
          fbBad: "will be + the -ing form, not snows.",
          fbText: "<b>It will be snowing in the mountains tomorrow afternoon.</b> The place and time words can also go at the start."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Use the Future Continuous of <i>fall</i>.</p>`,
          before: "Tonight, temperatures",
          after: "below zero.",
          answer: ["will be falling", "’ll be falling"],
          contractions: true,
          hint: "will + be + fall + -ing.",
          fbOk: "Right.",
          fbBad: "Three words: will, be and the -ing form.",
          fbText: "Tonight, temperatures <b>will be falling</b> below zero."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of the forecast is wrong.</p>`,
          text: "On Saturday, it [!will be raining] all morning, and strong winds [will blowing] in the afternoon.",
          hint: "will be + verb-ing. Is a word missing?",
          fbOk: "Good eye!",
          fbBad: "The Future Continuous has three parts.",
          fbText: "Correct: strong winds <b>will be blowing</b>. <i>Will be raining</i> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna reads the weather for the school podcast in Kyiv.</p>`,
          text: "Good morning! Today it {*will be snowing|will snowing|will be snows} all morning, so wear your boots! In the afternoon, temperatures {*will be falling|will falling|are be falling}, and there is a warning for ice. The roads {*will be|will being|be} icy, so be careful. Tomorrow the sun {*will be shining|will shining|will be shines} again.",
          hint: "will be + verb-ing. One fact about the roads: will + be.",
          fbOk: "Brilliant!",
          fbBad: "Check each gap: will be + -ing, or will + be.",
          fbText: "It <b>will be snowing</b>, temperatures <b>will be falling</b>, the roads <b>will be</b> icy, the sun <b>will be shining</b>."
        }
      ],
      outro: {
        text: "Will be falling, will be blowing: now you can understand and write a weather forecast.",
        learned: [
          "Use the Future Continuous in forecasts: will be + verb-ing.",
          "Understand weather warnings: yellow, amber and red.",
          "Write a short weather forecast."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s4l5",
      title: "By 2030 we will have…: the Future Perfect",
      short: "Future Perfect",
      icon: "flag",
      status: "draft",
      why: "Plans for nature have deadlines. Say what will be finished by a time in the future.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "A plan for the river",
          body: `<p class="lead">Oksana’s village eco group has a plan for the river in Zelena Dolyna. She writes to the club.</p><p><i>Our plan is big! By the end of April, we will have cleaned the river bank. By June, we will have planted 200 young trees along the river. And by 2030, the trees will have grown tall, and birds will have made nests in them.</i></p><p>Will have cleaned, will have planted: what is this form?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“By June, we <b>will have planted</b> 200 trees.”</p><p>What does it mean?</p>`,
          opts: [
            "They will start planting in June.",
            "The planting will be finished at some time before June.",
            "They planted the trees last year."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In June, the planting will already be <b>finished</b>. This is the Future Perfect. The next screen explains it."
        },
        {
          type: "info",
          title: "The Future Perfect",
          body: `<p>It shows an action that will be finished before a time in the future.</p><ul><li><b>will have</b> + past participle (the third form):<br>By June, we <b>will have planted</b> 200 trees.</li><li><b>won’t have</b> + past participle:<br>The trees <b>won’t have grown</b> tall by next year.</li><li><b>by</b> + time → not later than: <i>by June, by the end of April, by 2030</i></li></ul><p>Often <i>will</i> + verb is correct too: We <b>will plant</b> the trees by June.</p><p>Not: <s>will have plant</s>, <s>will has planted</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about her summer.</p>`,
          text: "By the end of June, I {*will have finished|will have finish|will finished} my exams. By August, Tom {*will have learnt|will has learnt|will have learn} to surf. And by September, we {*won’t have spent|won’t have spend|don’t have spent} all our money, I hope!",
          hint: "will have / won’t have + the third form.",
          fbOk: "Right.",
          fbBad: "Check each gap: have, not has, and the third form of the verb.",
          fbText: "I <b>will have finished</b>, Tom <b>will have learnt</b>, we <b>won’t have spent</b>: will / won’t + have + past participle."
        },
        {
          type: "info",
          title: "By or until?",
          body: `<ul><li><b>by</b> Friday → not later than Friday. The action is finished at some time before then:<br>The workers <b>will have repaired</b> the bridge <b>by</b> Friday.</li><li><b>until</b> Friday → all the time up to Friday, and then it stops:<br>The bridge <b>will be closed until</b> Friday.</li></ul><p><b>till</b> = until, but less formal.</p><p>Not: <s>will have repaired it until Friday</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>After heavy rain, Oksana writes to her friends from Zelena Dolyna.</p>`,
          text: "The road to the town is closed because of the flood. It will stay closed {*until|by} Friday. The workers will have repaired it {*by|until} Friday morning. Our trip to Poltava is on Saturday, so we must wait {*until|by} then.",
          hint: "Does it go on all the time up to Friday, or is it finished before then?",
          fbOk: "Exactly.",
          fbBad: "until → all the time up to; by → not later than.",
          fbText: "It will stay closed <b>until</b> Friday: all the time up to Friday. It will be repaired <b>by</b> Friday morning: not later than. We must wait <b>until</b> then."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>The eco group’s plan:</p><ul><li>April: clean the river bank</li><li>May: plant 200 trees</li><li>June: put up bird boxes</li></ul><p>What will they have done by the end of May?</p>`,
          opts: [
            "They will have put up the bird boxes.",
            "They won’t have done anything yet.",
            "They will have cleaned the river bank and planted the trees."
          ],
          correct: 2,
          hint: "Which months come before the end of May?",
          fbOk: "Yes!",
          fbBad: "Check the plan: what happens in April and in May?",
          fbText: "By the end of May, they <b>will have cleaned</b> the bank (April) and <b>planted</b> the trees (May). The bird boxes come in June."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "We will have plant the trees by June.",
            "We will have planted the trees by June.",
            "We will have planted the trees until June.",
            "We will plant the trees by June."
          ],
          correct: [1, 3],
          hint: "Remember: often will + verb is correct too. Check the third form and by / until.",
          fbOk: "Well done!",
          fbBad: "Look at the two rules again: the Future Perfect and by or until.",
          fbText: "<b>Will have planted … by June</b> and <b>will plant … by June</b> are both correct. <i>Will have plant</i> needs the third form, and a finished action needs <i>by</i>, not <i>until</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana writes about the future of her village.</p>`,
          tiles: ["by 2030", "our village", "will have", "planted", "1,000 trees"],
          extra: ["plant"],
          answer: ["By 2030 our village will have planted 1,000 trees.", "Our village will have planted 1,000 trees by 2030.", "Our village by 2030 will have planted 1,000 trees."],
          hint: "our village + will have + the third form.",
          fbOk: "Exactly.",
          fbBad: "will have + planted, not plant.",
          fbText: "<b>By 2030, our village will have planted 1,000 trees.</b> The time words can also go at the end."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Use the Future Perfect of <i>finish</i>.</p>`,
          before: "Don’t worry! By six o’clock, I",
          after: "my poster.",
          answer: ["will have finished", "’ll have finished", "shall have finished"],
          contractions: true,
          hint: "will + have + the third form of finish.",
          fbOk: "Right.",
          fbBad: "Three words: will, have and the third form.",
          fbText: "By six o’clock, I <b>will have finished</b> (I’ll have finished) my poster."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana finishes her post for the club.</p>`,
          text: "By the end of April, we {*will have cleaned|will have clean|will cleaned} the river bank. We’ll be busy {*until|by} the end of May, because there are 200 trees to plant. By June, the young trees {*will have started|will has started|will have start} to grow. And {*by|until} 2030, I hope, birds will have made nests in them!",
          hint: "will have + the third form. All the time up to: until. Not later than: by.",
          fbOk: "Brilliant!",
          fbBad: "Check the forms and by / until.",
          fbText: "We <b>will have cleaned</b> the bank. Busy <b>until</b> the end of May: all the time. The trees <b>will have started</b> to grow. <b>By</b> 2030: not later than."
        }
      ],
      outro: {
        text: "Will have cleaned, will have planted, by 2030: now you can say what will be finished in the future.",
        learned: [
          "Use the Future Perfect: will have + past participle.",
          "Use by and until with time phrases.",
          "Talk about plans for nature and their deadlines."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s4l6",
      title: "Protecting nature in Ukraine and the UK",
      short: "National parks",
      icon: "leaf",
      status: "draft",
      why: "National parks protect nature for everyone. Read an article about national parks in Ukraine and the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "National parks",
          body: `<p class="lead">Andrii’s class in Kyiv is writing an article for the penfriend club: “National parks in Ukraine and the UK”.</p><p><b>Ms Lysenko:</b> Emma has sent us facts about the UK. Daryna, what about Ukraine?<br><b>Daryna:</b> Ukraine’s first national park is in the Carpathians!<br><b>Andrii:</b> And what exactly is a national park?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What do you think a national park is?</p>`,
          opts: [
            "a large area of nature that is protected and that people can visit",
            "a small park in the centre of the capital",
            "a farm where only animals live"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>national park</b> is a large area of nature, protected by law. People can visit it. The next screen has more words."
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li>a <b>national park</b> → a large area of nature that is protected by law. People can visit it.</li><li>a <b><u>land</u>scape</b> → what you see in an area: hills, forests, lakes</li><li>a <b><u>hab</u>itat</b> → the natural home of an animal or plant</li><li>to <b>create</b> → to make something new. The park <b>was created</b> in 1980.</li><li><b>deep</b> → <b>deeper</b> → the <b><u>deep</u>est</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: National parks, part 1 of 3",
          title: "Read and choose.",
          body: `<p>The UK has 15 national parks: ten in England, three in Wales and two in Scotland. Northern Ireland has none. The first one was the Peak District in England. It became a national park in 1951. The newest one is the South Downs, in the south of England, since 2011. In Wales, there is Eryri, which is also called Snowdonia. National parks in the UK are not empty, wild places. People live, work and farm in them, and there are towns and villages too. In fact, most of the land in the parks belongs to farmers and other owners, not to the state. Every year, lots of visitors come to walk, cycle and enjoy the landscape.</p><p>Which sentence is true?</p>`,
          opts: [
            "The Peak District became the UK’s first national park in 1951.",
            "Nobody lives in the UK’s national parks.",
            "Scotland has more national parks than England."
          ],
          correct: 0,
          hint: "Find the numbers for England and Scotland, and the word “first”.",
          fbOk: "Right.",
          fbBad: "Check each sentence in the text.",
          fbText: "The <b>Peak District</b> was the first, in <b>1951</b>. England has ten parks and Scotland two, and people live and work in the parks."
        },
        {
          type: "multi",
          sk: "cult",
          eyebrow: "Reading: National parks, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p>Ukraine has many national parks too. The first one is the Carpathian National Nature Park. It was created in 1980 in Ivano-Frankivsk region to protect the landscapes of the Carpathian Mountains. In 1983, the Shatsk National Nature Park was created in Volyn region, in the north-west of Ukraine. It is famous for its lakes: there are 23 of them in the park. One of them, Svitiaz, is the deepest lake in Ukraine. In some places, it is more than 58 metres deep. Taras from Lviv visited Svitiaz two summers ago. He still remembers how clear and cool the water was.</p><p>Which sentences are true?</p>`,
          opts: [
            "The Carpathian National Nature Park is the oldest national park in Ukraine.",
            "The Shatsk park is in the east of Ukraine.",
            "Svitiaz is the deepest lake in Ukraine.",
            "Both parks were created in the 1990s."
          ],
          correct: [0, 2],
          hint: "Find the word “first”, the dates and the part of Ukraine.",
          fbOk: "Good eye!",
          fbBad: "Read the text again and check each sentence.",
          fbText: "The Carpathian park is the <b>first</b>, so the oldest (1980). Shatsk is in the <b>north-west</b> (1983). <b>Svitiaz</b> is the deepest lake in Ukraine."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: National parks, part 3 of 3",
          title: "Read and choose.",
          body: `<p>How can young people help national parks? Our class has some ideas. Stay on the paths, so you don’t damage rare plants. Take all your rubbish home. Don’t pick wild flowers, and don’t feed wild animals. Keep your dog on a lead near farm animals and birds. Never start a fire in hot, dry weather: a small fire can quickly become a wildfire. These ideas are simple, but they only work if everyone follows them. So tell your friends and family what you have learnt. By the end of this term, our class will have made a poster with these rules for our school. If every visitor follows them, the parks will still be beautiful when our grandchildren visit them.</p><p>What is the main idea of the whole article?</p>`,
          opts: [
            "There are national parks only in the UK.",
            "National parks protect nature, and every visitor can help them.",
            "Young people must not visit national parks."
          ],
          correct: 1,
          hint: "Think about all three parts: what are they about?",
          fbOk: "Exactly.",
          fbBad: "Parts 1 and 2 are about parks in two countries. What is part 3 about?",
          fbText: "The article is about national parks in <b>the UK and Ukraine</b>, and part 3 says how <b>visitors can help</b>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          body: `<p>Match the national parks and the facts from the article.</p>`,
          left: ["the Peak District", "Eryri", "the Carpathian National Nature Park", "the Shatsk National Nature Park"],
          right: ["the first national park in the UK", "a national park in Wales", "the first national park in Ukraine", "a park with the deepest lake in Ukraine"],
          hint: "Which ones are in the UK? Which park has a lot of lakes?",
          fbOk: "Well done!",
          fbBad: "Read parts 1 and 2 of the article again.",
          fbText: "Peak District → the UK’s first (1951). Eryri → Wales. The Carpathian park → Ukraine’s first (1980). Shatsk → Svitiaz, the deepest lake."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Use the word <i>deep</i>.</p>`,
          before: "Svitiaz is the",
          after: "lake in Ukraine.",
          answer: "deepest",
          hint: "deep → deeper → the …",
          fbOk: "Yes!",
          fbBad: "Look at the list of words for the article.",
          fbText: "deep → deeper → the <b>deepest</b>. No lake in Ukraine is deeper than Svitiaz."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Daryna writes a short note for the article.</p>`,
          text: "National parks protect beautiful {*landscapes|headaches|droughts}: mountains, forests and lakes. They are also the {*habitats|heatwaves|visitors} of many rare animals and plants. The Carpathian National Nature Park {*was created|was create|created} in 1980.",
          hint: "What you see in an area: …? The natural home of an animal: …? was + the third form.",
          fbOk: "Right.",
          fbBad: "Look at the list of words for the article.",
          fbText: "Parks protect <b>landscapes</b> and the <b>habitats</b> of animals and plants. The park <b>was created</b> in 1980: was + past participle."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes the end of the article.</p>`,
          text: "Next summer, my classmates and I {*are going to|is going to|going to} visit the Carpathian National Nature Park: we’ve already bought the train tickets! I think we {*will|wills|are} love the mountains. This time next July, we {*will be walking|will walking|will be walk} along its paths. And by the end of the trip, I {*will have taken|will have take|will taken} hundreds of photos!",
          hint: "are going to. will + verb. will be + -ing. will have + the third form.",
          fbOk: "Brilliant!",
          fbBad: "Check the four future forms from this section.",
          fbText: "They <b>are going to</b> visit: it’s a plan, and they’ve bought the tickets. I think we <b>will</b> love it. This time next July, we <b>will be walking</b>. By the end, I <b>will have taken</b> hundreds of photos."
        }
      ],
      outro: {
        text: "The Peak District, Eryri, the Carpathians and Shatsk: now you can talk about national parks in Ukraine and the UK.",
        learned: [
          "Read an article about national parks in Ukraine and the UK.",
          "Use the words landscape, habitat and national park.",
          "Say how visitors can protect nature."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s4l7",
      title: "Wild weather week at the penfriend club",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e10s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the “Wild weather” page?",
          body: `<p class="lead">The penfriend club is making a web page: “Wild weather”. Ms Kravets needs your help.</p><p>Check the posts. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "A long time with little or no rain is a {*drought|flood|landslide}. When the ground suddenly shakes, it’s an {*earthquake|avalanche|drought}. A lot of snow falling down a mountain is an {*avalanche|earthquake|heatwave}.",
          pre: "e10s4l1",
          fbOk: "Right.",
          fbBad: "No rain, the ground shakes, snow falls down.",
          fbText: "No rain → a <b>drought</b>. The ground shakes → an <b>earthquake</b>. Snow falls down a mountain → an <b>avalanche</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Emma’s post is about storm names. Why do the Met Office and Met Éireann give names to big storms?</p>`,
          opts: [
            "to help people notice the warnings and stay safe",
            "because the storms come from other countries",
            "because the names are always funny"
          ],
          correct: 0,
          pre: "e10s4l1",
          fbOk: "Yes!",
          fbBad: "Is a storm with a name easier or harder to remember?",
          fbText: "A storm with a name is easier to remember, so more people <b>notice the warnings and stay safe</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Complete the sentences.",
          text: "Taras: Look at those black clouds! It {*is going to|are going to|going to} rain. The forecast says the storm {*is likely to|is likely|likely to} end soon, and more rain {*is unlikely to|is unlikely|unlikely to} fall tonight.",
          pre: "e10s4l2",
          fbOk: "Exactly.",
          fbBad: "is going to; be (un)likely to + verb.",
          fbText: "It <b>is going to</b> rain: he can see the clouds. The storm <b>is likely to</b> end. More rain <b>is unlikely to</b> fall."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “I’ve got a headache and a sore throat. I’m feeling a bit under the weather.”</p><p>How does Mariia feel?</p>`,
          opts: [
            "very cheerful",
            "too hot",
            "a bit ill"
          ],
          correct: 2,
          pre: "e10s4l3",
          fbOk: "Right.",
          fbBad: "Remember Emma’s cold in lesson 3.",
          fbText: "<b>Under the weather</b> means a bit ill: Mariia has a headache and a sore throat."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing words.",
          body: `<p>Use the Future Continuous of <i>blow</i>.</p>`,
          before: "Tomorrow, strong winds",
          after: "in the mountains all day.",
          answer: ["will be blowing", "’ll be blowing"],
          contractions: true,
          pre: "e10s4l4",
          fbOk: "Well done!",
          fbBad: "will + be + verb-ing.",
          fbText: "Tomorrow, strong winds <b>will be blowing</b> all day: will be + verb-ing."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>The Met Office has given a red warning for wind. What does it mean?</p>`,
          opts: [
            "The weather may cause a few small problems.",
            "Dangerous weather is expected: take action to stay safe.",
            "The weather will be warm and sunny."
          ],
          correct: 1,
          pre: "e10s4l4",
          fbOk: "Yes!",
          fbBad: "Is red the lowest or the most serious level?",
          fbText: "Red is the most serious warning: <b>dangerous weather</b> is expected, so take action to stay safe."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Complete the sentences.",
          text: "Oksana: By June, we {*will have planted|will have plant|will planted} 200 trees. The road to the river is closed {*until|by} Monday, so we can’t start before then. But we {*will have cleaned|will has cleaned|will have clean} the river bank by the end of April.",
          pre: "e10s4l5",
          fbOk: "Exactly.",
          fbBad: "will have + the third form; until → all the time up to.",
          fbText: "We <b>will have planted</b> the trees. The road is closed <b>until</b> Monday: all the time up to Monday. We <b>will have cleaned</b> the bank by the end of April."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 8",
          title: "Choose the correct answer.",
          body: `<p>Daryna’s post is about Ukraine. Which is Ukraine’s first national park?</p>`,
          opts: [
            "the Peak District",
            "the Shatsk National Nature Park",
            "the Carpathian National Nature Park"
          ],
          correct: 2,
          pre: "e10s4l6",
          fbOk: "Right.",
          fbBad: "Which park was created in 1980?",
          fbText: "The <b>Carpathian National Nature Park</b> (1980) is Ukraine’s first. Shatsk came in 1983, and the Peak District is in England."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about natural disasters, the weather and your mood, forecasts, plans for the future and national parks.",
        learned: [
          "Talk about natural disasters and how the weather affects health and mood.",
          "Make predictions with be going to, will and be likely to.",
          "Use the Future Continuous and the Future Perfect with by and until.",
          "Read about national parks in Ukraine and the UK."
        ]
      }
    }
  ]
});
