/* Слід · Англійська мова, 9 клас — «The environment» (e9s2)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Природа
   і погода» — навколишнє середовище; охорона довкілля; рослинний і тваринний світ (PDF с. 33, розд. 5.2.3); функції —
   висловлювати переконання, аргументувати думку, організувати захід (с. 33); граматика B1 (с. 34–35, розд. 5.4.1):
   Future Continuous (affirmative, negative), will / be going to — predictions, Adverbs — certainty; повторення — passive
   infinitive (e7s2l4), might (e6s5l4), will (e5s5l5), going to (e5s9l3), природа (e4s6l4, e4s6l6); розподіл —
   content/eng/plan.js, reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Опитування класу й знаки на стежці — вигадані.
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нових героїв немає.
   will / be going to: обидва в прогнозі часто правильні (pitfalls-content «Англійська» п. 12) — у вправах вони ніколи не стоять
   один проти одного як «правильний / хибний»; пастки — лише хибні форми. Future Continuous: will + інфінітив не дається хибним.
   Факти (Червона книга України, зубр, рись, лелека чорний, підсніжник, Карпатський біосферний заповідник, руда білка у Великій
   Британії) і форми (CD, CD Grammar, British Council) — URL у tasks/…/write-eng-g9-e9s2.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft (writer-e9s2). 7 уроків (6 + фінал). Будова — за розділами 7–8 кл. (e7s2, e8s2, e8s3).
   Перевірка: node tools/validate.mjs --section e9s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s2",
  grade: 9,
  weeks: [5, 8],
  title: "The environment",
  why: "To talk about the environment, plants and animals. And to make predictions about the future of our planet.",
  requires: ["e4s6l4", "e4s6l6", "e5s5l5", "e5s9l3", "e6s5l4", "e7s2l4"],
  meta: { author: "writer-e9s2", created: "2026-11-25", factcheck: null, teacher: null },
  badges: [
    { id: "e9s2boss", name: "Planet reporter", icon: "trophy", desc: "Finish the final lesson “The environment”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s2l1",
      title: "Air, water and land: our environment",
      short: "Environment",
      icon: "globe",
      status: "draft",
      why: "Clean air, water and land are important for everyone. Learn the words to talk about the environment.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What’s it like where you live?",
          body: `<p class="lead">This term, the penfriend club’s topic is “Our planet”. Ms Kravets asks: “What’s the environment like where you live?”</p><p><b>Oksana:</b> In our village, the air is clean. But people sometimes leave rubbish by the river.<br><b>Andrii:</b> In Kyiv, there’s a lot of traffic, so the air isn’t always clean.<br><b>Emma:</b> Our town has a new recycling centre. We take old paper, bottles and cans there.</p><p>What problems and good ideas do they talk about?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Cars make the air in Kyiv dirty. What do we call dirty air, water or land?</p>`,
          opts: [
            "pollution",
            "recycling",
            "wildlife"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Dirty air, water or land is <b>pollution</b>. The next screen has more words."
        },
        {
          type: "info",
          title: "The environment",
          body: `<p>The <b>en<u>vi</u>ronment</b> is the air, water and land around us. People, animals and plants live in it.</p><ul><li><b>pol<u>lu</u>tion</b> → dirty air, water or land. Cars <b>pollute</b> the air.</li><li><b>rubbish</b> → things we throw away</li><li><b>re<u>cy</u>cle</b> → make old things into new ones. Take them to a <b>recycling centre</b>.</li><li><b>pro<u>tect</u></b> → keep safe</li><li><b><u>wild</u>life</b> → wild animals and plants</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the words and their meanings.</p>`,
          left: ["pollution", "rubbish", "recycle", "protect", "wildlife"],
          right: ["dirty air, water or land", "things we throw away", "make old things into new ones", "keep safe", "wild animals and plants"],
          hint: "Which one is about animals? Which one means “keep safe”?",
          fbOk: "Right.",
          fbBad: "Look at the list of words again.",
          fbText: "<b>pollution</b> → dirty air, water or land. <b>rubbish</b> → things we throw away. <b>recycle</b> → make old things into new ones. <b>protect</b> → keep safe. <b>wildlife</b> → wild animals and plants."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it good or bad for the environment?</p>`,
          bins: ["Good", "Bad"],
          items: [
            ["recycle old paper and glass", 0],
            ["plant trees in the park", 0],
            ["turn off the lights", 0],
            ["leave rubbish by the river", 1],
            ["pollute the air", 1],
            ["throw plastic bags into the sea", 1]
          ],
          hint: "Does it keep the air, water and land clean?",
          fbOk: "Exactly.",
          fbBad: "Think: does it help nature or make it dirty?",
          fbText: "Recycling, planting trees and turning off the lights <b>help</b> the environment. Rubbish by the river, air pollution and plastic in the sea are <b>bad</b> for it."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Oksana writes more about her village.</p>`,
          text: "Every spring, our class picks up {*rubbish|wildlife|pollution} by the river. Old plastic bottles {*pollute|protect|recycle} the water, and that’s bad for fish and birds. We take the bottles to a {*recycling|pollution|wildlife} centre in town.",
          hint: "What do people leave by the river? What do old bottles do to the water?",
          fbOk: "Well done!",
          fbBad: "Check the meanings in the list of words.",
          fbText: "They pick up <b>rubbish</b>. Plastic bottles <b>pollute</b> the water: they make it dirty. Old bottles go to a <b>recycling</b> centre."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Use the word <i>pollute</i>. Make a noun.</p>`,
          before: "Dirty air, water and land: this is",
          after: ".",
          answer: "pollution",
          hint: "pollute → pollu… Look at the first word in the list.",
          fbOk: "Yes!",
          fbBad: "The noun ends in -tion.",
          fbText: "pollute (verb) → <b>pollution</b> (noun): dirty air, water or land."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["en|+vi|ron|ment", "pol|+lu|tion", "re|+cy|cle", "pro|+tect", "+wild|life"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list of words.",
          fbText: "en<u>vi</u>ronment, pol<u>lu</u>tion, re<u>cy</u>cle, pro<u>tect</u>: the stress is on the second part. <u>Wild</u>life: on the first."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about Kyiv for the club.</p>`,
          text: "In Kyiv, there are a lot of cars, so air {*pollution|wildlife|recycling} is a problem. But there are many parks too. They are home to birds, squirrels and other {*wildlife|rubbish|pollution}. Our family {*recycles|pollutes|throws} paper and plastic: we put them in special bins near our building. We all want to {*protect|pollute|throw away} our city’s environment.",
          hint: "Cars make the air dirty: air …? Birds and squirrels: wild animals = …?",
          fbOk: "Brilliant!",
          fbBad: "Check: dirty air, wild animals, make old things new, keep safe.",
          fbText: "Air <b>pollution</b> is a problem. Birds and squirrels are <b>wildlife</b>. The family <b>recycles</b> paper and plastic. They want to <b>protect</b> the environment: keep it safe."
        }
      ],
      outro: {
        text: "Air, water and land: now you can talk about the environment where you live.",
        learned: [
          "Talk about the environment: air, water and land.",
          "Use the words pollution, rubbish, recycle, protect and wildlife.",
          "Say what is good or bad for the environment."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s2l2",
      title: "Rare plants and animals of Ukraine",
      short: "Rare species",
      icon: "leaf",
      status: "draft",
      why: "Some animals and plants in Ukraine are rare. Learn about them and how people protect them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "A wild cat in the Carpathians?",
          body: `<p class="lead">Taras writes to the penfriend club after a hiking trip.</p><p>This summer, our group went hiking in the Carpathians. Our guide told us about the lynx, a wild cat. Lynxes are rare, and they are in the <b>Red Book of Ukraine</b>.</p><p>What is the Red Book?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What do you think the Red Book of Ukraine is?</p>`,
          opts: [
            "a list of the most popular pets in Ukraine",
            "a list of rare animals and plants that need protection",
            "a book of old Ukrainian recipes"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The Red Book of Ukraine is an official list of <b>rare</b> animals and plants. The next screen explains it."
        },
        {
          type: "info",
          title: "The Red Book of Ukraine",
          body: `<p>The <b>Red Book of Ukraine</b> is an official list of rare animals and plants. They are <b>protected</b> by law.</p><ul><li><b>rare</b> → there aren’t many of them</li><li>a <b>species</b> → one kind of animal or plant. The lynx is a species of wild cat.</li><li>a <b>nature reserve</b> → a place where animals and plants are protected</li></ul><p>One species, two species: the same word!</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Rare animals of Ukraine, part 1 of 2",
          title: "Read and choose.",
          body: `<p>The <b>European bison</b> is the largest land animal in Europe. Hundreds of years ago, bison disappeared from Ukraine. Now some live in national parks here again. The <b>Eurasian lynx</b> is a wild cat with a short tail. It lives in forests in the Carpathians and in Polissia. Both species are in the Red Book of Ukraine.</p><p>Which sentence is true?</p>`,
          opts: [
            "Bison have always lived in Ukraine.",
            "The lynx is a wild cat with a long tail.",
            "No land animal in Europe is bigger than the European bison."
          ],
          correct: 2,
          hint: "Find the words “the largest land animal”.",
          fbOk: "Right.",
          fbBad: "Check each sentence in the text.",
          fbText: "The bison is <b>the largest land animal in Europe</b>, so no land animal is bigger. Bison disappeared from Ukraine and came back, and the lynx has a <b>short</b> tail."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Rare animals of Ukraine, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p>The <b>black stork</b> is not like the white stork: it is very shy. It builds its nest in big trees in quiet forests. The <b>brown bear</b> lives in the forests of the Carpathians. The <b>snowdrop</b> is a small white flower. It comes out in early spring. All three are in the Red Book of Ukraine, so don’t pick snowdrops!</p><p>Which sentences are true?</p>`,
          opts: [
            "The black stork is a shy bird.",
            "The black stork builds its nest on houses in towns.",
            "Snowdrops come out in early spring.",
            "Snowdrops are not protected in Ukraine."
          ],
          correct: [0, 2],
          hint: "Find what the text says about the stork’s nest and about snowdrops.",
          fbOk: "Good eye!",
          fbBad: "Read the text again and check each sentence.",
          fbText: "The black stork is <b>shy</b> and nests in quiet forests, not in towns. Snowdrops come out in <b>early spring</b>, and they are in the Red Book, so they are protected."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the species and the descriptions.</p>`,
          left: ["the European bison", "the Eurasian lynx", "the black stork", "the snowdrop"],
          right: ["the largest land animal in Europe", "a wild cat with a short tail", "a shy bird that nests in quiet forests", "a small white flower in early spring"],
          hint: "Which one is a bird? Which one is a cat?",
          fbOk: "Well done!",
          fbBad: "Read the two parts of the text again.",
          fbText: "Bison → the largest land animal. Lynx → a wild cat with a short tail. Black stork → a shy bird. Snowdrop → a small white flower."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Kyrylo writes about a book he is reading.</p>`,
          text: "My new book is about {*rare|common|popular} animals: there aren’t many of them. The black stork is one {*species|reserve|wildlife} of stork, and the white stork is another. Many rare animals live in nature {*reserves|pollution|recycling}. There they are {*protected|polluted|recycled} by law.",
          hint: "There aren’t many of them: … animals. A place where animals are protected: a nature …",
          fbOk: "Exactly.",
          fbBad: "Look at the list of words about the Red Book.",
          fbText: "<b>Rare</b> → there aren’t many. The black stork is one <b>species</b>. Animals live in nature <b>reserves</b>, where they are <b>protected</b>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p>Emma writes from England:</p><p><i>In the UK, red squirrels are rare. Most of them live in Scotland. Grey squirrels are much more common. In my town, I only see grey ones!</i></p><p>Where do most red squirrels in the UK live?</p>`,
          opts: [
            "in Scotland",
            "in England",
            "in Wales"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Emma’s second sentence again.",
          fbText: "Most red squirrels in the UK live in <b>Scotland</b>. In Emma’s town in England, there are only grey squirrels."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>There are a lot of grey squirrels in the UK, but not many red ones.</p>`,
          before: "Grey squirrels are common, but red squirrels are",
          after: ".",
          answer: ["rare", "uncommon", "endangered"],
          hint: "The opposite of common: r…",
          fbOk: "Well done!",
          fbBad: "There aren’t many of them. Look at the list of words about the Red Book.",
          fbText: "Not many → <b>rare</b>. Common and rare are opposites."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes for his school newspaper.</p>`,
          text: "This summer, I learnt a lot about {*rare|common|popular} animals in the Carpathians. The lynx is a {*species|reserve|rubbish} of wild cat, and it lives in quiet forests. Lynxes and brown bears are {*protected|polluted|recycled} by law. I didn’t see a lynx, but I took a photo of a black stork. It’s a very {*shy|noisy|common} bird, so I was lucky!",
          hint: "What does the Red Book do for animals? What did you read about the black stork?",
          fbOk: "Brilliant!",
          fbBad: "Check the words about the Red Book and the text about the stork.",
          fbText: "<b>Rare</b> animals; the lynx is a <b>species</b> of wild cat; they are <b>protected</b> by law. The black stork is <b>shy</b>, so a photo of it is lucky."
        }
      ],
      outro: {
        text: "Bison, lynxes, black storks and snowdrops: now you know some rare species of Ukraine.",
        learned: [
          "Say what the Red Book of Ukraine is.",
          "Name some rare animals and plants of Ukraine.",
          "Read a short text about rare species and find facts in it."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s2l3",
      title: "It’s going to be a hot summer: predictions",
      short: "Predictions",
      icon: "eye",
      status: "draft",
      why: "We often talk about what will happen. Make predictions and say how sure you are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How sure are you?",
          body: `<p class="lead">It’s a very hot day in May. Mariia writes to the club from Kharkiv.</p><p><b>Mariia:</b> Look at my photo of the park! The grass is already brown, and there’s no rain in the forecast. It’s going to be a hot summer!<br><b>Emma:</b> I think it’ll be hot here too. People will probably spend a lot of time at the seaside.<br><b>Andrii:</b> Perhaps it won’t be so bad. It might rain in June.</p><p>Going to, will, probably, might: how sure are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia: “Look at the brown grass! It’s <b>going to</b> be a hot summer.”</p><p>Why does she use <i>going to</i>?</p>`,
          opts: [
            "She is talking about the past.",
            "She can see signs of it now.",
            "She is giving an order."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Mariia can <b>see signs</b> now: the grass is brown and there’s no rain. The next screen explains will and going to."
        },
        {
          type: "info",
          title: "Predictions: will and going to",
          body: `<p>Both talk about the future.</p><ul><li><b>will</b> + verb → what you think or know:<br><i>I think</i> it<b>’ll be</b> hot. People <b>will</b> go to the seaside.</li><li><b>be going to</b> + verb → you can see signs now:<br><i>Look at the brown grass!</i> It<b>’s going to be</b> a hot summer.</li></ul><p>Often both are correct:<br>I think it <b>will</b> rain. = I think it<b>’s going to</b> rain.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Why does the speaker think so?</p>`,
          bins: ["I can see signs now", "It’s my opinion"],
          items: [
            ["Look at those black clouds! It’s going to rain.", 0],
            ["Look! That boy is going to drop his crisp packet.", 0],
            ["The bus is full. We aren’t going to get on it.", 0],
            ["I think people will use more bikes in the future.", 1],
            ["In my opinion, our city will be greener in 2050.", 1],
            ["I’m sure you’ll love the nature reserve.", 1]
          ],
          hint: "Look for Look!, I think, In my opinion, I’m sure.",
          fbOk: "Right.",
          fbBad: "Can the speaker see something now, or is it what they think?",
          fbText: "Black clouds, the boy with the packet, the full bus: we <b>can see signs</b> now. I think, in my opinion, I’m sure: it’s <b>an opinion</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana and Dmytro are walking by the river.</p>`,
          text: "Oksana: Look at that boy! He {*is going to|are going to|going to} drop his crisp packet. Hey, use the bin, please! Dmytro: Look at the sky! It {*is going to|are going to|going to} rain. Oksana: You’re right. I think we {*will|wills|will to} get wet!",
          hint: "be going to: he is going to, it is going to. will + verb: no -s, no to.",
          fbOk: "Exactly.",
          fbBad: "Do you need is or are? And after will: just the verb.",
          fbText: "He <b>is going to</b> drop it; it <b>is going to</b> rain: be + going to + verb. We <b>will</b> get wet: will + verb, no <i>-s</i>, no <i>to</i>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Andrii: “I think it ___ sunny tomorrow.”</p><p>What can go in the gap?</p>`,
          opts: [
            "will be",
            "is being",
            "is going to be",
            "be going to"
          ],
          correct: [0, 2],
          hint: "Remember: often both are correct.",
          fbOk: "Well done!",
          fbBad: "Look at the rules again: are will and going to often both correct?",
          fbText: "With <i>I think</i>, both are correct: it <b>will be</b> sunny = it’s <b>going to be</b> sunny. <i>Be going to</i> needs <i>is</i> before it."
        },
        {
          type: "info",
          title: "How sure are you?",
          body: `<ul><li>100% → It <b>will definitely</b> rain.</li><li>75% → It <b>will probably</b> rain.</li><li>50% → <b>Perhaps</b> it will rain. = It <b>might</b> rain.</li><li>25% → It <b>probably won’t</b> rain.</li><li>0% → It <b>definitely won’t</b> rain.</li></ul><p>will + probably / definitely, but probably / definitely + won’t.<br>Not: <s>It won’t probably rain.</s></p><p><b>Perhaps</b> often comes at the start.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about the class tree-planting day. How sure is she?</p>`,
          text: "(100%) We will {*definitely|probably|perhaps} plant trees on Saturday. (75%) Ms Marchenko will {*probably|definitely} bring some spades. (50%) {*Perhaps|Definitely} Dmytro will come too. (25%) It {*probably won’t|won’t probably} rain.",
          hint: "Look at the numbers and the list: 100%, 75%, 50%, 25%.",
          fbOk: "Yes!",
          fbBad: "Match each number with a word from the list.",
          fbText: "100% → will <b>definitely</b>. 75% → will <b>probably</b>. 50% → <b>Perhaps</b> he will come. 25% → it <b>probably won’t</b> rain: probably goes before won’t."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Emma writes about her summer. One part is wrong.</p>`,
          text: "I think next summer [!will probably] be hot. We [won’t probably] go to Cornwall again, but perhaps we’ll go to Wales.",
          hint: "Look at probably and won’t. Which comes first?",
          fbOk: "Good eye!",
          fbBad: "Check the rule: probably / definitely + won’t.",
          fbText: "Correct: we <b>probably won’t</b> go. Probably comes before won’t. <i>Will probably be</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Daryna is 75% sure about the weather in the mountains.</p>`,
          before: "It will",
          after: "be cold in the Carpathians in October.",
          answer: "probably",
          hint: "75% → will …",
          fbOk: "Right.",
          fbBad: "Look at the list: 75% is will p…",
          fbText: "75% → It will <b>probably</b> be cold."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes her post for the club.</p>`,
          text: "It’s only May, but look at the park: the grass is already brown! It {*is going to|are going to|going to} be a very hot summer. I think people {*will|wills|are} need a lot of water for their gardens. My family {*probably won’t|won’t probably} go to the sea this year. Perhaps we {*will|wills|are} visit my uncle Oleh instead.",
          hint: "be going to: it is going to. will + verb. probably + won’t.",
          fbOk: "Brilliant!",
          fbBad: "Check the forms: is going to, will + verb, probably won’t.",
          fbText: "It <b>is going to</b> be hot: she can see signs. People <b>will</b> need water: her opinion. We <b>probably won’t</b> go: probably before won’t. Perhaps we <b>will</b> visit Uncle Oleh."
        }
      ],
      outro: {
        text: "Will, going to, probably, perhaps: now you can talk about the future and say how sure you are.",
        learned: [
          "Make predictions with will and be going to.",
          "Use be going to when you can see signs now.",
          "Say how sure you are: definitely, probably, perhaps, might."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s2l4",
      title: "In 2050 we will be living…: the Future Continuous",
      short: "Future Continuous",
      icon: "bulb",
      status: "draft",
      why: "Imagine your life in the future. Say what will be happening at a time in the future.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Kyiv in 2050",
          body: `<p class="lead">Zoriana writes for the club: “Kyiv in 2050”.</p><p>In 2050, electric buses will be carrying people around the city. People won’t be driving old petrol cars. Solar panels (they make electricity from the sun) will be working on lots of roofs. And me? I’ll be working with robots!</p><p>But this time next year, I’ll be preparing for my exams.</p><p>Will be carrying, won’t be driving: what is this form?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii: “At ten o’clock tomorrow, I’ll be sitting in a maths lesson.”</p><p>What does he mean?</p>`,
          opts: [
            "At ten, the lesson will already be happening.",
            "He sat in a maths lesson yesterday.",
            "He will start and finish the lesson at ten."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "At ten, Andrii will be <b>in the middle of</b> the lesson. This is the <b>Future Continuous</b>. The next screen explains it."
        },
        {
          type: "info",
          title: "The Future Continuous",
          body: `<p>It shows an action that will be in progress at a time in the future.</p><ul><li><b>will be</b> + verb<b>-ing</b>:<br>This time tomorrow, I<b>’ll be flying</b> to London.</li><li><b>won’t be</b> + verb<b>-ing</b>:<br>In 2050, people <b>won’t be using</b> plastic bags.</li></ul><p>Time words: <i>this time tomorrow, this time next year, at 8 pm on Saturday, in 2050</i></p><p>Not: <s>I will flying.</s> <s>I will be fly.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about next weekend.</p>`,
          text: "This time next Saturday, we {*will be travelling|will travelling|will be travel} to Chernihiv. At six in the evening, Grandma {*will be cooking|will cooking|will be cook} dinner. And on Sunday morning, Grandad and I {*will be fishing|will fishing|are be fishing} in the river.",
          hint: "will be + verb + -ing.",
          fbOk: "Right.",
          fbBad: "You need three parts: will + be + -ing.",
          fbText: "We <b>will be travelling</b>, Grandma <b>will be cooking</b>, we <b>will be fishing</b>: will + be + verb-ing."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma’s plan for Saturday:</p><ul><li>9–11 am: swimming club.</li><li>12–2 pm: lunch at Grandad’s.</li><li>3–5 pm: photography club.</li><li>6–8 pm: Liliia’s birthday party.</li></ul><p>What will Emma be doing at 4 pm on Saturday?</p>`,
          opts: [
            "She’ll be swimming.",
            "She’ll be taking photos at her club.",
            "She’ll be having lunch at Grandad’s."
          ],
          correct: 1,
          hint: "Find 4 pm in the plan: which line is it in?",
          fbOk: "Yes!",
          fbBad: "4 pm is between 3 and 5 pm.",
          fbText: "From 3 to 5 pm, Emma is at the photography club, so at 4 pm she’<b>ll be taking</b> photos."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Zoriana writes more about 2050.</p>`,
          text: "In 2050, people {*won’t be driving|won’t driving|won’t be drive} petrol cars. Shops {*won’t be selling|don’t be selling|won’t selling} plastic bags. And children {*won’t be learning|won’t learning|aren’t be learning} only from paper books.",
          hint: "won’t be + verb + -ing.",
          fbOk: "Well done!",
          fbBad: "The negative: won’t + be + -ing.",
          fbText: "People <b>won’t be driving</b>, shops <b>won’t be selling</b>, children <b>won’t be learning</b>: won’t be + verb-ing."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "This time next year, I will be [play] the drums in a new band, and Emma will be studying for her exams.",
          hint: "will be + verb + -ing. Check each verb after will be.",
          fbOk: "Good eye!",
          fbBad: "After will be, the verb needs -ing.",
          fbText: "Correct: I will be <b>playing</b> the drums. <i>Will be studying</i> is correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Zoriana’s school has a plan for next year.</p>`,
          tiles: ["this time next year", "our school", "will be", "using", "solar panels"],
          extra: ["use"],
          answer: ["This time next year our school will be using solar panels.", "Our school will be using solar panels this time next year."],
          hint: "our school + will be + -ing.",
          fbOk: "Exactly.",
          fbBad: "will be + the -ing form, not use.",
          fbText: "<b>This time next year, our school will be using solar panels.</b> The time words can also go at the end."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Use the Future Continuous of <i>sleep</i>.</p>`,
          before: "Please don’t call me at midnight. I",
          after: "!",
          answer: ["will be sleeping", "’ll be sleeping"],
          contractions: true,
          hint: "will + be + sleep + -ing.",
          fbOk: "Right.",
          fbBad: "Three words: will, be and the -ing form.",
          fbText: "At midnight, I <b>will be sleeping</b> (I’ll be sleeping)."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana finishes her text “Kyiv in 2050”.</p>`,
          text: "In 2050, electric buses {*will be carrying|will carrying|will be carry} people around Kyiv. People {*won’t be driving|won’t driving|don’t be driving} old petrol cars, so the air will be cleaner. Solar panels on lots of roofs {*will be making|will making|will be make} electricity. And me? I {*will be working|will working|will be work} with robots!",
          hint: "will be + -ing. Negative: won’t be + -ing.",
          fbOk: "Brilliant!",
          fbBad: "Check each gap: will be or won’t be + verb-ing.",
          fbText: "Buses <b>will be carrying</b>, people <b>won’t be driving</b>, panels <b>will be making</b>, I <b>will be working</b>: will / won’t + be + verb-ing."
        }
      ],
      outro: {
        text: "This time next year, in 2050: now you can say what will be happening in the future.",
        learned: [
          "Use the Future Continuous: will be + verb-ing.",
          "Say what won’t be happening: won’t be + verb-ing.",
          "Talk about life in the future: In 2050, people will be…"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s2l5",
      title: "Forests must be protected: what can we do?",
      short: "Must be protected",
      icon: "shield",
      status: "draft",
      why: "Rules for nature often use must be, can be and should be. Read signs and say what must be done.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "A sign on the path",
          body: `<p class="lead">Daryna and her mum are hiking in the Carpathians. At the start of the path, there’s a sign.</p><p><i><b>Welcome to the forest!</b><br>Rubbish must be taken home.<br>Flowers must not be picked.<br>Dogs must be kept on a lead.<br>Animals must not be fed.</i></p><p>Must be taken, must not be picked: why do signs use this form?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The sign says: “Rubbish must be taken home.”</p><p>Who must take it home?</p>`,
          opts: [
            "only the forest workers",
            "nobody",
            "everybody who comes here"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The rule is for <b>everybody</b>. The sign doesn’t say who, because the action is important. The next screen explains it."
        },
        {
          type: "info",
          title: "Must be done: rules and signs",
          body: `<p>Remember: <b>can / should / must</b> + <b>be</b> + past participle.</p><ul><li>You must take rubbish home. → Rubbish <b>must be taken</b> home.</li><li>Don’t pick flowers. → Flowers <b>must not be picked</b>.</li><li>Plastic <b>can be recycled</b>. Trees <b>should be planted</b>.</li></ul><p>Signs and rules use this form: the action is important, not the person.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "read",
          title: "Match the halves.",
          body: `<p>Match each sign and what it means.</p>`,
          left: ["Rubbish must be taken home.", "Flowers must not be picked.", "Dogs must be kept on a lead.", "Animals must not be fed."],
          right: ["Don’t leave bottles and bags here.", "Leave the flowers where they grow.", "Hold your dog on a lead.", "Don’t give food to the animals."],
          hint: "Which sign is about food? Which one is about bottles and bags?",
          fbOk: "Right.",
          fbBad: "Read each sign again: what must people do or not do?",
          fbText: "Take rubbish home → don’t leave bottles here. Don’t pick flowers → leave them. Keep dogs on a lead → hold your dog. Don’t feed animals → don’t give them food."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia takes photos of signs in a park in Kharkiv.</p>`,
          text: "Bikes {*must be left|must left|must be leave} outside the gate. Dogs {*must be kept|must kept|must be keep} on a lead. Glass and plastic {*can be recycled|can recycled|can be recycle} in the green bins.",
          hint: "must / can + be + past participle.",
          fbOk: "Exactly.",
          fbBad: "You need be and the past participle: left, kept, recycled.",
          fbText: "Bikes <b>must be left</b>, dogs <b>must be kept</b>, glass <b>can be recycled</b>: modal + be + past participle."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A forest that must be protected",
          title: "Read and choose.",
          body: `<p>The <b>Carpathian Biosphere Reserve</b> is in Zakarpattia, in the west of Ukraine. A big part of it is old <b>beech</b> forest (beech is a kind of tree). Since 2007, these forests have been on the UNESCO World Heritage List, together with old beech forests in other European countries. Brown bears and lynxes live in the reserve.</p><p>Which sentence is true?</p>`,
          opts: [
            "The reserve is in the east of Ukraine.",
            "Its beech forests are on the UNESCO World Heritage List.",
            "There are no wild animals in the reserve."
          ],
          correct: 1,
          hint: "Find the word UNESCO in the text.",
          fbOk: "Well done!",
          fbBad: "Read the text again: where is the reserve, and what lives there?",
          fbText: "The beech forests are on the <b>UNESCO World Heritage List</b>. The reserve is in the <b>west</b>, and bears and lynxes live there."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Before a class walk in the forest, Ms Marchenko reminds everybody about the rules.</p>`,
          text: "The forest {*must be protected|must protected|must be protect}. All rubbish {*should be put|should put|should be putting} in your bag. Snowdrops are rare, so they {*must not be picked|must not picked|must not be pick}.",
          hint: "modal + be + past participle. The past participle of put is put.",
          fbOk: "Yes!",
          fbBad: "Check each gap: is there be, and is the verb a past participle?",
          fbText: "The forest <b>must be protected</b>. Rubbish <b>should be put</b> in your bag. Snowdrops <b>must not be picked</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Change the rule “Don’t feed the ducks” for a sign.</p>`,
          before: "The ducks must not be",
          after: ".",
          answer: "fed",
          hint: "feed – fed – fed.",
          fbOk: "Right.",
          fbBad: "You need the past participle of feed.",
          fbText: "feed → <b>fed</b>. The ducks must not be <b>fed</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word on the school recycling poster is wrong.</p>`,
          text: "Glass bottles can be [recycle] many times. Old clothes can be given to other people.",
          hint: "can be + past participle. Check the verbs after can be.",
          fbOk: "Good eye!",
          fbBad: "After can be, we need the past participle.",
          fbText: "Correct: glass bottles can be <b>recycled</b>. <i>Can be given</i> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes about her hike.</p>`,
          text: "There was a sign at the start of our path. Rubbish {*must be taken|must take|must be take} home, and flowers {*must not be picked|must not pick|must not be pick}. Dogs {*must be kept|must keep|must kept} on a lead. I think these rules {*should be followed|should follow|should be follow} everywhere, not only in the Carpathians!",
          hint: "must / should + be + past participle.",
          fbOk: "Brilliant!",
          fbBad: "Each gap needs be + past participle.",
          fbText: "Rubbish <b>must be taken</b> home, flowers <b>must not be picked</b>, dogs <b>must be kept</b> on a lead, rules <b>should be followed</b>."
        }
      ],
      outro: {
        text: "Must be taken, must not be picked, can be recycled: now you can read rules for nature and write your own.",
        learned: [
          "Understand signs and rules with must be, can be and should be + past participle.",
          "Say what must be done to protect nature.",
          "Read a short text about a nature reserve in Ukraine."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s2l6",
      title: "An eco project for our school",
      short: "Eco project",
      icon: "users",
      status: "draft",
      why: "A good idea needs good reasons. Say what you believe, give reasons and plan an eco event.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Clean River Day",
          body: `<p class="lead">Oksana’s school eco club is planning an event in Zelena Dolyna.</p><p><b>Oksana:</b> Let’s have a Clean River Day in April! I’m sure lots of people will come, because everybody loves our river.<br><b>Halyna:</b> Great idea! I’ll make a poster.<br><b>Dmytro:</b> Can I come too? I’ll bring some bags.<br><b>Ms Marchenko:</b> Good! We’ll need gloves too. Who’s going to bring them?</p><p>How do they give reasons and make a plan?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana wants everyone to come. What is the best thing to say?</p>`,
          opts: [
            "I don’t know. Maybe.",
            "I’m sure it will help our village, because there’s a lot of rubbish by the river.",
            "It isn’t important."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Say what you <b>believe</b> (I’m sure…) and give a <b>reason</b> (because…). The next screen shows more phrases."
        },
        {
          type: "info",
          title: "Opinions, reasons and plans",
          body: `<ul><li>Say what you believe:<br><b>I’m sure</b> (that)…, <b>I strongly believe</b> (that)…, <b>In my opinion</b>,…</li><li>Give a reason:<br>…, <b>because</b> + reason.<br>Reason. <b>That’s why</b>…</li><li>Plan an event:<br><b>Let’s</b>…, <b>We’ll need</b>…, <b>Who’s going to</b>…?, <b>I’ll</b>…</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "func",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences give a reason?</p>`,
          opts: [
            "We should recycle paper because it saves trees.",
            "Let’s meet at the bridge at ten.",
            "People leave rubbish in the park. That’s why we need more bins.",
            "I’ll make a poster."
          ],
          correct: [0, 2],
          hint: "Look for because and That’s why.",
          fbOk: "Good eye!",
          fbBad: "Which sentences answer the question “Why?”",
          fbText: "<b>because</b> it saves trees, <b>That’s why</b> we need more bins: these give reasons. Let’s meet… and I’ll make… are plans."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Oksana talks to the eco club.</p>`,
          text: "{*I’m sure|I’m not sure} our Clean River Day will help the village, {*because|so} there’s a lot of plastic in the river. Fish and birds need clean water. {*That’s why|Because} we must do something now!",
          hint: "Oksana believes in her idea. Which word gives the reason? Which phrase comes after the reason?",
          fbOk: "Exactly.",
          fbBad: "Read the whole speech: is Oksana sure? Where is the reason?",
          fbText: "<b>I’m sure</b>: she believes it. <b>because</b> + reason: there’s plastic in the river. Reason first, then <b>That’s why</b> we must do something."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The eco club asked 30 pupils: “Which eco event do you want?” Every pupil chose one.</p><p>What can Oksana say?</p>`,
          lab: {
            kind: "chart",
            horizontal: true,
            mono: true,
            max: 30,
            bars: [
              { label: "Clean River Day", v: 16 },
              { label: "a school garden", v: 8 },
              { label: "recycling bins in every classroom", v: 6 }
            ],
            alt: "Results of the vote, 30 pupils: Clean River Day 16, a school garden 8, recycling bins in every classroom 6"
          },
          opts: [
            "Most of us want a school garden.",
            "Nobody wants recycling bins.",
            "The most popular idea is Clean River Day."
          ],
          correct: 2,
          hint: "Which bar is the longest?",
          fbOk: "Right.",
          fbBad: "Compare the numbers on the chart.",
          fbText: "16 out of 30 chose Clean River Day: it is <b>the most popular</b> idea. Only 8 want a garden, and 6 pupils want recycling bins."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>The club makes a plan.</p>`,
          text: "Ms Marchenko: {*Let’s|Let} meet at the bridge at ten. We’ll {*need|needs} gloves and bags. Who {*is going to|are going to} bring the gloves? Dmytro: Me! {*I’ll bring|I bring will} them.",
          hint: "Let’s + verb. Who + is. I’ll + verb.",
          fbOk: "Well done!",
          fbBad: "Check: Let’s, we’ll need, who is going to, I’ll + verb.",
          fbText: "<b>Let’s</b> meet. We’ll <b>need</b> gloves. Who <b>is going to</b> bring them? I<b>’ll bring</b> them."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Halyna gives her opinion.</p>`,
          tiles: ["I", "strongly believe", "that", "every school", "should have", "recycling bins"],
          extra: ["believes"],
          answer: "I strongly believe that every school should have recycling bins.",
          hint: "Start with I + strongly believe + that…",
          fbOk: "Yes!",
          fbBad: "I + strongly believe (not believes) + that + the idea.",
          fbText: "<b>I strongly believe that every school should have recycling bins.</b> After I: believe, not believes."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Halyna gives a reason.</p>`,
          before: "We should turn off the lights",
          after: "it saves energy.",
          answer: ["because", "as", "since"],
          hint: "Which word gives a reason? It answers the question “Why?”",
          fbOk: "Right.",
          fbBad: "Look at the phrases for giving a reason.",
          fbText: "We should turn off the lights <b>because</b> it saves energy: because + reason."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Halyna’s poster for the village.</p>`,
          text: "CLEAN RIVER DAY! Our river {*must be cleaned|must clean|must be clean}: it’s home to fish, frogs and birds. {*Let’s|Let} do it together! On Saturday, we {*will be working|will working|will be work} by the bridge from 10 am to 1 pm. We’re going to give everyone gloves and bags. Please come and help. {*I’m sure|I’m not sure} you’ll enjoy it!",
          hint: "must be + past participle. Let’s + verb. will be + -ing. Halyna believes in the event.",
          fbOk: "Brilliant!",
          fbBad: "Check the forms: must be cleaned, Let’s, will be working, I’m sure.",
          fbText: "The river <b>must be cleaned</b>. <b>Let’s</b> do it together. We <b>will be working</b> from 10 to 1. <b>I’m sure</b> you’ll enjoy it."
        }
      ],
      outro: {
        text: "I’m sure, because, that’s why, let’s: now you can give your opinion and plan an eco event.",
        learned: [
          "Say what you believe: I’m sure…, I strongly believe…",
          "Give reasons with because and that’s why.",
          "Plan an eco event with your class."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s2l7",
      title: "Our planet week at the penfriend club",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e9s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the “Our planet” page?",
          body: `<p class="lead">The penfriend club is making a web page: “Our planet”. Ms Kravets needs your help.</p><p>Check the posts. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Cars and factories {*pollute|protect|recycle} the air. Old paper and glass can be made into new things: we {*recycle|pollute|protect} them. Wild animals and plants are called {*wildlife|rubbish|pollution}.",
          pre: "e9s2l1",
          fbOk: "Right.",
          fbBad: "Dirty air, old things into new ones, wild animals and plants.",
          fbText: "Cars <b>pollute</b> the air. We <b>recycle</b> paper and glass. Wild animals and plants are <b>wildlife</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo’s post is about the Red Book of Ukraine. What is it?</p>`,
          opts: [
            "an official list of rare animals and plants",
            "a list of the biggest cities in Ukraine",
            "a book about the history of Ukraine"
          ],
          correct: 0,
          pre: "e9s2l2",
          fbOk: "Yes!",
          fbBad: "Remember the lynx and the bison: why are they in it?",
          fbText: "The Red Book of Ukraine is an official list of <b>rare animals and plants</b>. They are protected by law."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Complete the sentences.",
          text: "Mariia: Look at those dark clouds! It {*is going to|are going to|going to} rain. (100%) We will {*definitely|probably} stay at home this afternoon. (25%) It {*probably won’t|won’t probably} be sunny later.",
          pre: "e9s2l3",
          fbOk: "Exactly.",
          fbBad: "is going to; 100% → definitely; probably + won’t.",
          fbText: "It <b>is going to</b> rain: she can see the clouds. 100% → will <b>definitely</b>. 25% → it <b>probably won’t</b> be sunny."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing words.",
          body: `<p>Use the Future Continuous of <i>fly</i>.</p>`,
          before: "This time tomorrow, Emma and Tom",
          after: "to Kyiv.",
          answer: ["will be flying", "’ll be flying"],
          contractions: true,
          pre: "e9s2l4",
          fbOk: "Well done!",
          fbBad: "will + be + verb-ing.",
          fbText: "This time tomorrow, they <b>will be flying</b> to Kyiv: will be + verb-ing."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Find the mistake.",
          body: `<p>One word on Daryna’s photo of a sign is wrong.</p>`,
          text: "Flowers must not be [pick]. Rubbish must be taken home.",
          pre: "e9s2l5",
          fbOk: "Good eye!",
          fbBad: "must not be + past participle.",
          fbText: "Correct: flowers must not be <b>picked</b>. <i>Must be taken</i> is correct."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Andrii wants to start a recycling project at his school. Which sentence gives his opinion and a reason?</p>`,
          opts: [
            "Let’s meet on Monday.",
            "I strongly believe we need recycling bins, because we throw away a lot of paper.",
            "Who’s going to make a poster?"
          ],
          correct: 1,
          pre: "e9s2l6",
          fbOk: "Right.",
          fbBad: "Look for a phrase like I’m sure or I strongly believe, and because.",
          fbText: "<b>I strongly believe</b> = his opinion. <b>because</b> + reason. The other two sentences are plans."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about the environment, rare species, predictions and the future, rules for nature and an eco project.",
        learned: [
          "Talk about the environment and rare species of Ukraine.",
          "Make predictions with will, be going to, probably and definitely.",
          "Use the Future Continuous and must be + past participle.",
          "Give your opinion with reasons and plan an eco event."
        ]
      }
    }
  ]
});
