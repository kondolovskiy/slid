/* Слід · Англійська мова, 7 клас — «In the kitchen: cooking and laying the table» (e7s2)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 7 кл., тема «Харчування»:
   приготування їжі; сервірування столу; кухонні прилади, посуд; способи обробки продуктів (с. 32, розд. 5.2.1);
   граматика B1 — Passives: infinitive; Determiners: another, the other; Quantity: uncountable nouns; Imperatives: do for emphasis
   and invitation, let me (с. 34–35, розд. 5.4.1): https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e6s3l2 (is made with, Present Simple passive), e6s3l3 (рецепт, імперативи), e5s3l2 (countable /
   uncountable), e5s3l4 (how much / how many), e5s3l5 (Would you like…?), e6s6l5 (should) — reports/verify/plan-eng-g7-8-9.md §6.
   Не повторює страви й рецепт e6s3: тут прилади, способи обробки, кількість, інструкції на упаковці, сервірування, гості.
   Герої — серія 4–6 кл., на три роки старші, ніж у 4 кл.: Andrii, сестра Sofiia, тато (Kyiv, квартира); Oksana і бабуся Hanna
   (Zelena Dolyna, будинок), подруга Оксани Halyna; Emma, брат Tom, мама Sarah (England); Taras і молодша сестра Zlata (Lviv);
   Mariia (Kharkiv, єдина дитина) — бабуся Марії й дядько Ihor (нові, без імені бабусі).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги, інструкції на упаковці й герої — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — Cambridge Dictionary, OALD, Cambridge Grammar; факти (paska, Pancake Day) — URL у
   tasks/…/write-eng-g7-e7s2.md, «Нотатки агента». lay the table (OALD lay_1) і set the table (CD) — обидва в ключі.
   Статус: verified (verifier-e7s2, reports/verify/write-eng-g7-e7s2.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s2",
  grade: 7,
  weeks: [6, 10],
  title: "In the kitchen: cooking and laying the table",
  why: "To talk about kitchen things and different ways of cooking. And to lay the table and invite guests to eat.",
  requires: ["e6s3l2", "e6s3l3", "e5s3l2", "e5s3l4", "e5s3l5", "e6s6l5"],
  meta: { author: "writer-e7s2", created: "2026-11-25", factcheck: "verifier-e7s2 (reports/verify/write-eng-g7-e7s2.md)", teacher: null },
  badges: [
    { id: "e7s2boss", name: "Kitchen star", icon: "trophy", desc: "Finish the final lesson “In the kitchen: cooking and laying the table”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s2l1",
      title: "Pots, pans and plates: kitchen things",
      short: "Kitchen things",
      icon: "pot",
      status: "verified",
      why: "Name the things in a kitchen. Say what each thing is for.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where’s the frying pan?",
          body: `<p class="lead">Andrii’s family has got a new kitchen in their flat in Kyiv. Andrii writes to Emma.</p><p><i>Hi Emma! Our new kitchen is great. There’s a big cooker with an oven. All the pots and pans are in the cupboard. This morning, Dad couldn’t find the frying pan. Sofiia found it in the oven!</i></p><p>A cooker, a kettle, a frying pan: what are they for?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Dad wants to fry some eggs. What does he need?</p>`,
          opts: [
            "a kettle",
            "a frying pan",
            "a cupboard"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "You fry eggs in a <b>frying pan</b>. The next screen shows more kitchen things."
        },
        {
          type: "info",
          title: "Things for cooking",
          body: `<ul><li>a <b><u>cook</u>er</b> → you cook on it; the <b><u>ov</u>en</b> is part of it</li><li>a <b><u>fry</u>ing pan</b> → a flat pan for frying</li><li>a <b><u>sauce</u>pan</b> → a deep pan for boiling and soup</li><li>a <b><u>ket</u>tle</b> → you boil water for tea in it</li></ul><p><b>pots and pans</b> → saucepans, frying pans and other things for cooking</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii’s dad cooks breakfast and lunch.</p>`,
          text: "Dad fries two eggs in a {*frying pan|saucepan|kettle}. He boils water for tea in the {*kettle|frying pan|cupboard}. Then he makes soup in a big {*saucepan|kettle|frying pan}. The roast chicken is in the {*oven|kettle|saucepan}.",
          hint: "Look at the list. Which thing is for frying, for tea, for soup?",
          fbOk: "Exactly.",
          fbBad: "Look at the list of things for cooking again.",
          fbText: "Fry eggs → a <b>frying pan</b>. Water for tea → the <b>kettle</b>. Soup → a <b>saucepan</b>. Roast chicken is cooked in the <b>oven</b>."
        },
        {
          type: "info",
          title: "More kitchen things",
          body: `<ul><li>a <b><u>cup</u>board</b> → you keep cups and bowls in it</li><li>a <b>sink</b> → you wash cups and bowls in it</li><li>a <b><u>mi</u>crowave</b> → it heats food very quickly</li><li>a <b>fridge</b> → it keeps food cold</li></ul><p>In <i>cupboard</i>, we don’t say the <i>p</i>.</p><p>In the UK, people say <b>cooker</b>. In the USA, people often say <b>stove</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: [
            "A kettle is for",
            "A frying pan is for",
            "A saucepan is for",
            "A cupboard is for",
            "A sink is for",
            "A microwave is for"
          ],
          right: [
            "boiling water for tea.",
            "frying eggs and fish.",
            "making soup.",
            "keeping cups and bowls.",
            "washing cups and bowls.",
            "heating food very quickly."
          ],
          hint: "Look at the two lists again.",
          fbOk: "Well done!",
          fbBad: "What do you do with each thing?",
          fbText: "A kettle → <b>boiling water for tea</b>. A frying pan → <b>frying</b>. A saucepan → <b>soup</b>. A cupboard → <b>keeping</b> cups. A sink → <b>washing</b> cups. A microwave → <b>heating food quickly</b>."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the words that are things for cooking.",
          body: `<p>Sofiia makes pancakes. Find three things for cooking.</p>`,
          text: "Sofiia opened the [!kitchen cupboard] and took out a [saucepan] and a [frying pan]. Then she turned on the [cooker].",
          hint: "Which things can you cook in or on? You keep things in a cupboard.",
          fbOk: "Good eye!",
          fbBad: "A cupboard is for keeping things. What can you cook with?",
          fbText: "You cook with a <b>saucepan</b>, a <b>frying pan</b> and a <b>cooker</b>. A kitchen cupboard is for keeping things, not for cooking."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s a deep pan with a handle. You make soup in it.</p>`,
          before: "Dad makes borscht in a big",
          after: ".",
          answer: ["saucepan", "pot", "pan"],
          hint: "Look at the list: a deep pan for boiling and soup.",
          fbOk: "Yes!",
          fbBad: "Look at the list of things for cooking: a deep pan…",
          fbText: "A deep pan for soup is a <b>saucepan</b>: <u>sauce</u>pan, one word. A big <b>pot</b> or <b>pan</b> is also right."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma asks about the new kitchen. Andrii answers.</p>`,
          text: "We cook on a big {*cooker|cupboard}, and the {*oven|sink} is part of it. Dad fries pancakes in a {*frying pan|kettle}. Mum boils water for tea in the {*kettle|cupboard}. After dinner, I wash the cups in the {*sink|oven} and put them in the {*cupboard|saucepan}.",
          hint: "What do you cook on? Where do you wash cups? Where do you keep them?",
          fbOk: "Well done!",
          fbBad: "Look at the two lists of kitchen things again.",
          fbText: "We cook on a <b>cooker</b>; the <b>oven</b> is part of it. Pancakes → a <b>frying pan</b>. Tea → the <b>kettle</b>. Wash cups in the <b>sink</b>, keep them in the <b>cupboard</b>."
        }
      ],
      outro: {
        text: "A kitchen has a cooker, an oven, a kettle, a sink and cupboards. You fry in a frying pan and make soup in a saucepan.",
        learned: [
          "Name kitchen things: cooker, saucepan, frying pan, kettle, cupboard, sink.",
          "Say what each thing is for: A kettle is for boiling water.",
          "Describe your kitchen to a friend."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s2l2",
      title: "Boil, fry or bake? Ways of cooking",
      short: "Ways of cooking",
      icon: "flame",
      status: "verified",
      why: "Say how food is cooked and prepared. Use boil, fry, bake, roast, peel, chop and slice.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What is Grandma baking?",
          body: `<p class="lead">It’s a few days before Easter. Oksana helps Grandma Hanna in the kitchen in Zelena Dolyna.</p><p><b>Grandma:</b> I’m baking paska. It’s a sweet Easter bread. In Ukraine, many families bake paska for Easter.<br><b>Oksana:</b> What can I do?<br><b>Grandma:</b> Peel the potatoes, please. Then boil them. Later, we’ll roast a chicken and fry some fish.</p><p>Bake, boil, roast, fry: how are they different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Grandma puts the paska in the oven. What is she doing?</p>`,
          opts: [
            "She’s boiling it.",
            "She’s frying it.",
            "She’s baking it."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Bread and cakes are cooked in the oven: we <b>bake</b> them. Look at the next screen."
        },
        {
          type: "info",
          title: "Ways of cooking",
          body: `<ul><li><b>boil</b> → cook in very hot water: boil eggs, potatoes</li><li><b>fry</b> → cook in hot oil in a frying pan: fry fish</li><li><b>bake</b> → cook bread or cakes in the oven</li><li><b>roast</b> → cook meat in the oven, with a little oil</li></ul><p>fry → she fr<b>ies</b>, she fr<b>ied</b></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Grandma and Oksana are cooking.</p>`,
          text: "Grandma puts the potatoes in a saucepan of water. She {*boils|fries|bakes} them. Oksana puts some oil in a frying pan. She {*fries|boils|bakes} the fish. Paska is a sweet bread. Grandma {*bakes|boils|fries} it in the oven.",
          hint: "Where is it cooked: in water, in oil or in the oven?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: water, oil, oven.",
          fbText: "In water → <b>boils</b>. In hot oil → <b>fries</b>. Bread in the oven → <b>bakes</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Grandma cooks a chicken in the oven with a little oil. What does she do?</p>`,
          opts: [
            "She boils it.",
            "She roasts it.",
            "She fries it."
          ],
          correct: 1,
          hint: "Meat in the oven with a little oil: which verb?",
          fbOk: "Right.",
          fbBad: "Look at the list again: meat in the oven.",
          fbText: "Meat in the oven with a little oil → she <b>roasts</b> it. We boil food in water and fry it in a frying pan."
        },
        {
          type: "info",
          title: "Before cooking",
          body: `<ul><li><b>peel</b> → take the skin off: peel potatoes, apples</li><li><b>chop</b> → cut into small pieces: chop carrots</li><li><b>slice</b> → cut into thin, flat pieces: slice bread, cheese</li></ul><p>You know these recipe verbs too: <b>add</b>, <b>mix</b>, <b>cut</b>, <b>put</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: [
            "Peel the apples:",
            "Chop the carrots:",
            "Slice the bread:",
            "Boil the eggs:",
            "Bake the cake:"
          ],
          right: [
            "take the skin off.",
            "cut them into small pieces.",
            "cut it into thin, flat pieces.",
            "cook them in very hot water.",
            "cook it in the oven."
          ],
          hint: "Look at the two lists: Ways of cooking and Before cooking.",
          fbOk: "Well done!",
          fbBad: "Check each verb in the lists again.",
          fbText: "<b>Peel</b> → take the skin off. <b>Chop</b> → small pieces. <b>Slice</b> → thin, flat pieces. <b>Boil</b> → very hot water. <b>Bake</b> → in the oven."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "Yesterday Grandma [fryed] some fish for lunch. I peeled the potatoes and boiled them.",
          hint: "Look at the list: fry → she …",
          fbOk: "Good eye!",
          fbBad: "Check each verb: fry, peel, boil.",
          fbText: "fry → <b>fried</b>: Grandma <b>fried</b> some fish. <i>Peeled</i> and <i>boiled</i> are correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Grandma wants Oksana to take the skin off the apples.</p>`,
          before: "Grandma: Oksana, please",
          after: "the apples.",
          answer: "peel",
          hint: "Look at the list “Before cooking”: take the skin off.",
          fbOk: "Yes!",
          fbBad: "Take the skin off → …",
          fbText: "Take the skin off → <b>peel</b>: Oksana, please <b>peel</b> the apples."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>After Easter, Oksana writes to Emma.</p>`,
          text: "Hi Emma! Easter was great. On Thursday, Grandma {*baked|boiled} paska. It’s a sweet Easter bread. On Sunday, we {*roasted|boiled} a chicken in the oven. I {*peeled|baked} the potatoes, and then Grandma boiled them. She {*fried|baked} some fish in a frying pan. Love, Oksana",
          hint: "Bread in the oven, meat in the oven, take the skin off, fish in a frying pan.",
          fbOk: "Well done!",
          fbBad: "Look at the two lists again.",
          fbText: "Bread → <b>baked</b>. A chicken in the oven → <b>roasted</b>. Take the skin off potatoes → <b>peeled</b>. Fish in a frying pan → <b>fried</b>."
        }
      ],
      outro: {
        text: "We boil food in water, fry it in oil, bake bread and roast meat in the oven. Before cooking, we peel, chop and slice.",
        learned: [
          "Say how food is cooked: boil, fry, bake, roast.",
          "Say how food is prepared: peel, chop, slice.",
          "Write about cooking for a holiday: Grandma baked paska."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s2l3",
      title: "A slice of bread, a little salt: how much?",
      short: "How much?",
      icon: "scale",
      status: "verified",
      why: "Talk about small amounts of food. Use a little, a few, a bit of, a slice of and a piece of.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How many pancakes can Tom have?",
          body: `<p class="lead">It’s Pancake Day in England. In the UK, people traditionally eat pancakes on this day. Emma, her brother Tom and their mum, Sarah, are making pancakes.</p><p><b>Mum:</b> We need flour, a few eggs, some milk and a little salt.<br><b>Emma:</b> How much milk do we need?<br><b>Mum:</b> Just a glass.<br><b>Tom:</b> How many pancakes can I have?<br><b>Mum:</b> A few, with a bit of lemon!</p><p>Why <b>a few</b> eggs, but <b>a little</b> salt?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mum needs some sugar, but not much. What does she say?</p>`,
          opts: [
            "a few sugar",
            "many sugar",
            "a little sugar"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Sugar is uncountable, like salt: <b>a little</b> sugar. Look at the next screen."
        },
        {
          type: "info",
          title: "A little, a few, a bit of",
          body: `<ul><li>uncountable (milk, salt, butter) → <b>a little</b>: a little salt</li><li>countable, plural (eggs, pancakes) → <b>a few</b>: a few eggs</li><li><b>a bit of</b> = a little, in conversation: a bit of lemon</li></ul><p>Ask: How <b>much</b> milk? How <b>many</b> eggs?</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma reads Mum’s recipe.</p>`,
          text: "Add {*a little|a few} milk. Add {*a few|a little} eggs. Put {*a little|a few} butter in the frying pan. How {*much|many} flour do we need? How {*many|much} pancakes can we make?",
          hint: "Can you count it? Eggs and pancakes: yes. Milk, butter, flour: no.",
          fbOk: "Exactly.",
          fbBad: "Uncountable → a little, much. Countable → a few, many.",
          fbText: "Milk, butter, flour: uncountable → <b>a little</b>, How <b>much</b>. Eggs, pancakes: countable → <b>a few</b>, How <b>many</b>."
        },
        {
          type: "info",
          title: "A slice of bread",
          body: `<p>We don’t say <s>a bread</s> or <s>a cheese</s> for a small part. We say:</p><ul><li>a <b>slice of</b> bread, cheese, cake → a thin, flat piece</li><li>a <b>piece of</b> bread, cheese, cake → any piece</li><li>a <b>glass of</b> milk, a <b>cup of</b> tea</li></ul><p>two <b>slices of</b> bread, three <b>pieces of</b> cake</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Tom wants some bread with his soup. What does he say?</p>`,
          opts: [
            "Can I have a bread, please?",
            "Can I have a slice of bread, please?",
            "Can I have a few bread, please?"
          ],
          correct: 1,
          hint: "Bread is uncountable. Look at the screen “A slice of bread”.",
          fbOk: "Right.",
          fbBad: "Can you count bread? Look at the rule again.",
          fbText: "<b>A slice of bread</b>. We don’t say <i>a bread</i>, and <i>a few</i> is for countable things."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks Mum about the milk.</p>`,
          tiles: ["How", "much", "milk", "do", "we", "need?"],
          answer: "How much milk do we need?",
          extra: ["many"],
          keepCase: true,
          hint: "Start with How. Milk: much or many?",
          fbOk: "Well done!",
          fbBad: "Milk is uncountable: How much…?",
          fbText: "<b>How much milk do we need?</b> Milk is uncountable, so we ask <b>How much</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Emma’s message is wrong.</p>`,
          text: "Tom ate four pancakes. He put [a few] sugar and [!a bit of] lemon on them.",
          hint: "Sugar: can you count it?",
          fbOk: "Good eye!",
          fbBad: "Look at sugar. Is it countable?",
          fbText: "Sugar is uncountable: <b>a little</b> sugar, not <i>a few</i> sugar. <b>A bit of</b> lemon is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>There are only two eggs in the fridge.</p>`,
          before: "Mum: How",
          after: "eggs have we got? Emma: Only two.",
          answer: "many",
          hint: "Eggs: countable or uncountable?",
          fbOk: "Yes!",
          fbBad: "Eggs are countable: How … eggs?",
          fbText: "Eggs are countable: How <b>many</b> eggs have we got?"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "Hi Oksana! Today is Pancake Day. Mum and I made pancakes with {*a little|a few} milk and {*a few|a little} eggs. Tom ate four pancakes with {*a bit of|a few} lemon. Then he wanted {*a slice|a few} of cake too! How {*many|much} pancakes can you eat? Love, Emma",
          hint: "Milk: uncountable. Eggs and pancakes: countable. Cake: a … of cake.",
          fbOk: "Well done!",
          fbBad: "Can you count it? Look at the rules again.",
          fbText: "Milk → <b>a little</b>. Eggs → <b>a few</b>. Lemon → <b>a bit of</b>. Cake → <b>a slice</b> of cake. Pancakes → How <b>many</b>."
        }
      ],
      outro: {
        text: "Uncountable: a little salt, a bit of lemon, How much milk? Countable: a few eggs, How many pancakes?",
        learned: [
          "Use a little and a bit of with uncountable nouns.",
          "Use a few with countable nouns.",
          "Ask How much…? and How many…?",
          "Say a slice of bread, a piece of cake."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s2l4",
      title: "It should be cooked for ten minutes: recipes",
      short: "Should be cooked",
      icon: "check",
      status: "verified",
      why: "Read cooking instructions on a packet. Use can be, should be and must be with the third form.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How long should they be boiled?",
          body: `<p class="lead">Taras and his little sister Zlata are at home in Lviv. They want frozen varenyky for lunch. Taras reads the packet.</p><p><b>Varenyky with potato</b><br><i>Keep in the freezer. Put the varenyky in a saucepan of boiling water. They should be boiled for 5–7 minutes. They can also be fried. They should be eaten hot, with sour cream.</i></p><p>Look: <b>should be boiled</b>, <b>can be fried</b>. Who cooks?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The packet says: “They should be boiled for 5–7 minutes.” What does it mean?</p>`,
          opts: [
            "The varenyky should boil you for 5–7 minutes.",
            "You should boil the varenyky for 5–7 minutes.",
            "You shouldn’t boil the varenyky."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>They should be boiled</b> = you should boil them. The packet talks about the varenyky, not about you."
        },
        {
          type: "info",
          title: "Should be boiled",
          body: `<p>You <b>should boil</b> them. → They <b>should be boiled</b>.</p><p><b>can</b> / <b>should</b> / <b>must</b> + <b>be</b> + the third form:</p><ul><li>They <b>can be fried</b>.</li><li>Varenyky <b>should be eaten</b> hot.</li><li>Ice cream <b>must be kept</b> in the freezer.</li></ul><p>This is the <b>passive</b>. Packets and recipes use it a lot.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Zlata reads more packets in the kitchen.</p>`,
          text: "Pasta should {*be boiled|boiled|be boil} for ten minutes. These fish fingers can {*be fried|fried|be fry} in a frying pan. Butter must {*be kept|kept|be keep} in the fridge.",
          hint: "can / should / must + be + the third form.",
          fbOk: "Exactly.",
          fbBad: "We need two words: be + boiled, be + fried…",
          fbText: "should <b>be boiled</b>, can <b>be fried</b>, must <b>be kept</b>: modal verb + <b>be</b> + the third form."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Keep in the freezer. Put the varenyky in a saucepan of boiling water. They should be boiled for 5–7 minutes. They can also be fried. They should be eaten hot, with sour cream.</i></p><p>Zlata asks: “How long should the varenyky be boiled?”</p>`,
          opts: [
            "for an hour",
            "for 20 minutes",
            "for 5–7 minutes"
          ],
          correct: 2,
          hint: "Find “should be boiled” on the packet.",
          fbOk: "Right.",
          fbBad: "Read the packet again. Find a number.",
          fbText: "The packet says: “They should be boiled <b>for 5–7 minutes</b>.”"
        },
        {
          type: "info",
          title: "Third forms",
          body: `<ul><li>boil → <b>boiled</b>, fry → <b>fried</b>, bake → <b>baked</b>, roast → <b>roasted</b>, serve → <b>served</b></li><li>eat → <b>eaten</b>, keep → <b>kept</b>, cut → <b>cut</b>, put → <b>put</b></li></ul><p>The cake should be <b>baked</b> for 30 minutes.<br>The bread can be <b>cut</b> into slices.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word on a pizza box is wrong.</p>`,
          text: "This pizza should be [bake] for 15 minutes. It can be eaten hot or cold.",
          hint: "should be + the third form. Check each verb.",
          fbOk: "Good eye!",
          fbBad: "Look at the word after should be.",
          fbText: "should be + the third form: should be <b>baked</b>. <i>Can be eaten</i> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras writes a note for the pizza box: “Eat it hot!” He wants to say it like on a packet.</p>`,
          tiles: ["It", "should", "be", "eaten", "hot"],
          answer: "It should be eaten hot.",
          extra: ["ate"],
          keepCase: true,
          hint: "Start with It. Then should + be + the third form.",
          fbOk: "Well done!",
          fbBad: "Look at the list: eat → eaten.",
          fbText: "<b>It should be eaten hot.</b> should + be + <b>eaten</b> (not <i>ate</i>)."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>cut → ?</p>`,
          before: "The bread should be",
          after: "into thin slices.",
          answer: ["cut", "sliced"],
          hint: "Look at the list of third forms: cut → …",
          fbOk: "Yes!",
          fbBad: "cut → cut: the same form.",
          fbText: "cut → <b>cut</b>: The bread should be <b>cut</b> into thin slices. <i>Sliced</i> is also right."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Andrii.</p>`,
          text: "Hi Andrii! Today I cooked lunch for Zlata. The packet said: “Varenyky should {*be boiled|boiled|be boil} for 5–7 minutes.” So I boiled them for six minutes. It also said: “They can {*be eaten|be ate|eaten} with sour cream.” Zlata ate ten varenyky! Mum says frozen varenyky must {*be kept|kept|be keep} in the freezer. Taras",
          hint: "should / can / must + be + the third form.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: be + the third form.",
          fbText: "should <b>be boiled</b>, can <b>be eaten</b> (not <i>ate</i>), must <b>be kept</b>."
        }
      ],
      outro: {
        text: "Packets and recipes say: It should be boiled. It can be fried. It must be kept in the fridge.",
        learned: [
          "Read cooking instructions on a packet.",
          "Use can be, should be and must be + the third form.",
          "Use the third forms: boiled, fried, baked, eaten, kept, cut."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s2l5",
      title: "Laying the table: another plate, the other fork",
      short: "Laying the table",
      icon: "home",
      status: "verified",
      why: "Lay the table for a family dinner. Use another and the other.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Another plate or the other plate?",
          body: `<p class="lead">It’s Grandma’s birthday. Mariia’s family is having dinner at home in Kharkiv.</p><p><b>Mum:</b> Mariia, can you lay the table, please? Put a plate, a knife and a fork for each person.<br><b>Mariia:</b> OK. There are six plates on the table.<br><b>Mum:</b> Uncle Ihor is coming too. We need another plate.<br><b>Mariia:</b> I’ve got two napkins here. One is for Grandma. And the other napkin?<br><b>Mum:</b> It’s for Uncle Ihor.</p><p>What’s the difference: <b>another</b> plate, <b>the other</b> napkin?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Seven people are coming, but there are only six plates on the table. What does Mariia need?</p>`,
          opts: [
            "the another plate",
            "another plate",
            "another plates"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "One more plate → <b>another plate</b>. The rule is on the next screens."
        },
        {
          type: "info",
          title: "Laying the table",
          body: `<ul><li><b>lay the table</b> → put plates, knives and forks on the table before a meal (we also say <b>set the table</b>)</li><li>a <b>plate</b>, a <b>knife</b> (two <b>knives</b>), a <b>fork</b>, a <b>spoon</b>, a <b>glass</b></li><li>a <b><u>nap</u>kin</b> → a piece of paper or cloth; you clean your mouth with it</li><li>a <b><u>ta</u>blecloth</b> → a big cloth on the table</li></ul><p>lay → laid: Yesterday I <b>laid</b> the table.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Where are these things before dinner?</p>`,
          bins: ["On the table", "In the kitchen, for cooking"],
          items: [
            ["a plate", 0],
            ["a fork", 0],
            ["a napkin", 0],
            ["a tablecloth", 0],
            ["a saucepan", 1],
            ["a frying pan", 1],
            ["a kettle", 1],
            ["a cooker", 1]
          ],
          hint: "Do you eat with it, or do you cook with it?",
          fbOk: "Yes!",
          fbBad: "Look at the lists from Lesson 1 and this lesson.",
          fbText: "On the table: a <b>plate</b>, a <b>fork</b>, a <b>napkin</b>, a <b>tablecloth</b>. For cooking: a saucepan, a frying pan, a kettle, a cooker."
        },
        {
          type: "info",
          title: "Another, the other",
          body: `<ul><li><b>another</b> + one thing → one more: We need <b>another</b> plate.</li><li><b>another</b> → a different one: This fork is dirty. Can I have <b>another</b> one?</li><li><b>the other</b> → the second of two: I’ve got two napkins. One is for Grandma, and <b>the other</b> is for Uncle Ihor.</li></ul><p><b>another</b> = an + other, one word. Not: <s>another plates</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia lays the table.</p>`,
          text: "There are two glasses next to Grandma’s plate. One is for juice, and {*the other|another} is for water. Uncle Ihor is coming too, so we need {*another|the other} chair. Mariia drops a fork. There are a lot of forks in the cupboard, so Mum gives her {*another|the other} one.",
          hint: "Two things: one… and the other. One more or a different one: another.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: the second of two, or one more?",
          fbText: "Two glasses: one… and <b>the other</b>. One more chair → <b>another</b> chair. A lot of forks, a different one → <b>another</b> one."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "We need another knives.",
            "We need the another knife.",
            "We need another knife."
          ],
          correct: 2,
          hint: "another: one thing or more? One word or two?",
          fbOk: "Right.",
          fbBad: "Look at the rule: another + one thing.",
          fbText: "<b>Another</b> + one thing: another <b>knife</b>. Not <i>another knives</i>, not <i>the another</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Dinner is at six. Mum wants plates, knives and forks on the table.</p>`,
          before: "Mum: Mariia, can you",
          after: "the table, please?",
          answer: ["lay", "set"],
          hint: "Look at the screen “Laying the table”.",
          fbOk: "Yes!",
          fbBad: "Put plates and forks on the table before a meal: … the table.",
          fbText: "<b>Lay the table</b> = put plates, knives and forks on the table. <b>Set the table</b> is also right."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "I put two plates in front of Grandma. One is for soup, and [another] is for the main course.",
          hint: "Two plates: one… and …",
          fbOk: "Good eye!",
          fbBad: "Two things: the second one is … ",
          fbText: "Two plates: one… and <b>the other</b>. <i>Another</i> means one more or a different one."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Taras.</p>`,
          text: "Hi Taras! Yesterday was Grandma’s birthday. I {*laid|lay} the table for seven people. First, I put a {*tablecloth|napkin} over the whole table. Then I put a {*napkin|tablecloth} next to each plate. Uncle Ihor came with his friend, so we needed {*another|the other} chair. I had two presents for Grandma. She opened one before dinner and {*the other|another} after dinner. Mariia",
          hint: "Yesterday: lay → … A big cloth for the table. Two presents: one… and …",
          fbOk: "Well done!",
          fbBad: "Look at the two rules again.",
          fbText: "lay → <b>laid</b>. A big cloth → a <b>tablecloth</b>; next to each plate → a <b>napkin</b>. One more chair → <b>another</b>. Two presents: one… and <b>the other</b>."
        }
      ],
      outro: {
        text: "Lay the table: plates, knives, forks, glasses and napkins. Another = one more. The other = the second of two.",
        learned: [
          "Name things on the table: plate, knife, fork, spoon, napkin.",
          "Ask someone to lay the table.",
          "Use another and the other."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s2l6",
      title: "Do have some more! Guests at the table",
      short: "Guests",
      icon: "users",
      status: "verified",
      why: "Invite guests to eat and offer help. Say yes or no politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Why does Grandma say “do”?",
          body: `<p class="lead">Oksana brings her friend Halyna to Grandma Hanna’s house for lunch.</p><p><b>Grandma:</b> Hello, Halyna! Do come in. Do sit down.<br><b>Halyna:</b> Thank you. Let me help you with the plates.<br><b>Grandma:</b> Thank you! Help yourself to varenyky.<br><i>Later…</i><br><b>Grandma:</b> Do have some more!<br><b>Halyna:</b> No, thank you. They were delicious, but I’m full.</p><p><b>Do</b> come in, <b>let me</b> help: what do these words do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Why does Grandma say “<b>Do</b> have some more!”, not just “Have some more!”?</p>`,
          opts: [
            "To ask a question.",
            "To talk about the past.",
            "To be warm and friendly."
          ],
          correct: 2,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "<b>Do</b> before an imperative makes an invitation warmer and stronger. Look at the next screen."
        },
        {
          type: "info",
          title: "Do have some more! Let me help.",
          body: `<ul><li>imperative: <b>Have</b> some more. <b>Sit</b> down.</li><li><b>do</b> + imperative → a warm, strong invitation: <b>Do</b> have some more! <b>Do</b> come in.</li><li><b>Let me</b> + verb → offer to help: <b>Let me</b> help you. <b>Let me</b> wash the cups.</li><li><b>Help yourself</b> (to the cake)! → take the food you want.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Grandma Hanna welcomes Halyna.</p>`,
          text: "Grandma: {*Do|Does|Did} come in, Halyna! {*Do|Does|Doing} sit down. Halyna: Thank you. {*Let me|Let I|Do me} help you with the plates. Grandma: Thank you! Help {*yourself|you|myself} to some tea.",
          hint: "do + imperative. Let + me. Help + …self.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: Do come in. Let me help. Help yourself.",
          fbText: "<b>Do</b> come in. <b>Do</b> sit down. <b>Let me</b> help (not <i>Let I</i>). Help <b>yourself</b> to some tea."
        },
        {
          type: "info",
          title: "Yes, please. No, thank you.",
          body: `<ul><li>Offer: <b>Would you like</b> some more? / <b>Do</b> have some more!</li><li>Say yes: <b>Yes, please. That would be lovely.</b></li><li>Say no politely: <b>No, thank you. I’m full.</b> (= I can’t eat any more.)</li><li><b>de<u>li</u>cious</b> → very, very tasty: It was delicious!</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Grandma: “Do have some more varenyky!”</p><p>Halyna can’t eat any more. What does she say?</p>`,
          opts: [
            "No. I don’t want your varenyky.",
            "No, thank you. They were delicious, but I’m full.",
            "Yes, please. I’m full."
          ],
          correct: 1,
          hint: "Say no, but be polite and friendly.",
          fbOk: "Right.",
          fbBad: "Is it polite? Does it say no?",
          fbText: "<b>No, thank you. They were delicious, but I’m full.</b> It says no and it’s polite. <i>I don’t want your varenyky</i> is not polite."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: [
            "Would you like some more tea?",
            "Do have another slice of cake!",
            "Let me help you with the plates.",
            "Do sit down!"
          ],
          right: [
            "Yes, please. With a little milk.",
            "Thanks! Just one more slice.",
            "Thank you. They go in the cupboard.",
            "Thank you. Where can I sit?"
          ],
          hint: "Look for the same thing: tea, slice, plates, sit.",
          fbOk: "Well done!",
          fbBad: "Check the pairs: tea, cake, plates, a chair.",
          fbText: "Tea → <b>with a little milk</b>. Cake → <b>one more slice</b>. Plates → <b>they go in the cupboard</b>. Sit down → <b>Where can I sit?</b>"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>After lunch, Halyna wants to help Grandma.</p>`,
          tiles: ["Let", "me", "wash", "the cups"],
          answer: "Let me wash the cups.",
          extra: ["I"],
          keepCase: true,
          hint: "Start with Let. Let + me + verb.",
          fbOk: "Good eye!",
          fbBad: "Let + me, not Let + I.",
          fbText: "<b>Let me wash the cups.</b> We say <b>Let me</b>, not <i>Let I</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["de|+li|cious", "+nap|kin", "+sauce|pan", "+cup|board"],
          hint: "Look at the underlined parts in this lesson and Lessons 1 and 5.",
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "de<u>li</u>cious: the second part is strong. <u>nap</u>kin, <u>sauce</u>pan, <u>cup</u>board: the first part is strong."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>After lunch at Grandma Hanna’s house.</p>`,
          text: "Grandma: {*Do|Does|Did} have some more borscht, Halyna! Halyna: No, thank you. It was {*delicious|full}, but I’m {*full|delicious}. {*Let me|Let I} wash the cups. Grandma: Thank you, that’s very kind. Oksana, help {*yourself|you} to some cake!",
          hint: "Invitation: do + imperative. Offer help: Let me…",
          fbOk: "Well done!",
          fbBad: "Look at the two rules in this lesson again.",
          fbText: "<b>Do</b> have some more! It was <b>delicious</b>, but I’m <b>full</b>. <b>Let me</b> wash the cups. Help <b>yourself</b>!"
        }
      ],
      outro: {
        text: "Invite guests: Do come in! Do have some more! Offer help: Let me help you. Say no politely: No, thank you. I’m full.",
        learned: [
          "Invite guests with do: Do sit down!",
          "Offer help with let me: Let me help you.",
          "Accept and refuse food politely."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s2l7",
      title: "Dinner at Taras’s flat",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e7s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras cook?",
          body: `<p class="lead">Taras’s family in Lviv invites Grandma to dinner. Taras and Zlata cook and lay the table.</p><p>Help them. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Taras wants to boil water for tea. What does he use?</p>`,
          opts: [
            "a frying pan",
            "a cupboard",
            "a kettle"
          ],
          correct: 2,
          pre: "e7s2l1",
          fbOk: "Right.",
          fbBad: "Which thing is for boiling water?",
          fbText: "A <b>kettle</b> is for boiling water for tea. A frying pan is for frying. A cupboard is for keeping things."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Taras and Zlata cook dinner.</p>`,
          text: "Taras {*peels|bakes} the potatoes. Then he {*boils|bakes} them in a saucepan of water. Zlata {*fries|boils} some fish in hot oil.",
          pre: "e7s2l2",
          hint: "Take the skin off; very hot water; hot oil.",
          fbOk: "Exactly.",
          fbBad: "Water, oil, oven: which verb?",
          fbText: "Take the skin off → <b>peels</b>. In water → <b>boils</b>. In hot oil → <b>fries</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Zlata reads a recipe for pancakes.</p>`,
          text: "We need {*a few|a little} eggs and {*a little|a few} butter. How {*much|many} milk have we got?",
          pre: "e7s2l3",
          hint: "Can you count it?",
          fbOk: "Well done!",
          fbBad: "Countable → a few. Uncountable → a little, much.",
          fbText: "Eggs: countable → <b>a few</b>. Butter: uncountable → <b>a little</b>. Milk: uncountable → How <b>much</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>Taras reads a packet of varenyky to Zlata.</p>`,
          tiles: ["they", "should", "be", "boiled", "for five minutes"],
          answer: ["They should be boiled for five minutes.", "For five minutes they should be boiled."],
          extra: ["boil"],
          pre: "e7s2l4",
          fbOk: "Good eye!",
          fbBad: "should + be + the third form.",
          fbText: "<b>They should be boiled for five minutes.</b> should + <b>be</b> + <b>boiled</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Mum asks Taras to help.</p>`,
          text: "Mum: Taras, please {*lay|lie} the table. Taras: OK. Oh, this plate is dirty. There are a lot of plates in the cupboard. I’ll take {*another|the other} one.",
          pre: "e7s2l5",
          hint: "… the table. A lot of plates: one more or the second of two?",
          fbOk: "Right.",
          fbBad: "Look at the rules in Lesson 5.",
          fbText: "<b>Lay</b> the table. A lot of plates, a different one → <b>another</b> one."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Grandma arrives. Taras’s mum invites her to the table. What does she say?</p>`,
          opts: [
            "Do sit down, please!",
            "Does sit down, please!",
            "Did sit down, please!"
          ],
          correct: 0,
          pre: "e7s2l6",
          fbOk: "Yes!",
          fbBad: "do + imperative: a warm invitation.",
          fbText: "<b>Do sit down!</b> <i>Do</i> + imperative makes the invitation warm and strong."
        },
        {
          type: "word",
          sk: "func",
          eyebrow: "Task 7",
          title: "Write the missing word.",
          body: `<p>Zlata: “Do have some more cake, Grandma!” Grandma can’t eat any more.</p>`,
          before: "Grandma: No, thank you. It was delicious, but I’m",
          after: ".",
          answer: ["full", "full up"],
          pre: "e7s2l6",
          fbOk: "Well done!",
          fbBad: "I can’t eat any more = I’m …",
          fbText: "<b>I’m full</b> = I can’t eat any more. It’s a polite way to say no."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about kitchen things and cooking, read a packet, lay the table and invite guests.",
        learned: [
          "Name kitchen things and ways of cooking.",
          "Use a little, a few, How much…? and How many…?",
          "Read instructions: It should be boiled.",
          "Lay the table and invite guests: another plate, Do sit down!"
        ]
      }
    }
  ]
});
