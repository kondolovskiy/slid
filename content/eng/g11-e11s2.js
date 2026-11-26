/* Слід · Англійська мова, 11 клас — «Food and recipes» (e11s2)
   Програма: П1407 («Іноземні мови. 10–11 класи», наказ МОН № 1407 від 23.10.2017), спеціалізовані школи, B2:
   11 кл., тема «Харчування» — їжа, напої й закуски; корисна та шкідлива їжа; пріоритети в харчуванні; рецепти страв
   (с. 23; лексика с. 24); функція «порівнювати (звичаї, традиції, стилі життя)» (с. 23) — l4; граматика (с. 25):
   overview of all quantifiers with countable/uncountable nouns — повторення some / any / much / many / a lot of
   (e5s3l2–l4), a few / both / all / no (e6s2l3), a slice of, a little (e7s2l3), too much / not enough (e8s2l2),
   either … or (e9s9l3); нове для B2: plenty of, hardly any, a great deal of, a large number of (l2); few / a few,
   little / a little (l3); both / either / neither (l4); most / none / all of + the / us / them, each / every (l5);
   точні кількості в рецепті: g, ml, tbsp, tsp, a pinch / clove / handful / bunch of (l6; imperatives — e6s3l3, e7s2l4).
   Обсяги — с. 21 (читання 400–450 слів — l6, три уривки ≤ 190 слів):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. Без дубля e10s3 і e7s2: тут — прийоми їжі й
   напої (packed lunch, brunch, takeaway, ready meal, tea як вечеря в BrE), flapjacks, pampushky (родинний рецепт).
   Харчування — без медичних порад і дієт: «пріоритети» — власний вибір з аргументом.
   Герої — серія 4–10 кл., на рік старші, ніж у 10 кл.: Oksana, Emma, Andrii, Mariia, Taras — 17, Dmytro — 13, Tom — 15.
   Форми й значення — CD, CD Grammar («Few, a few», «Plenty», «None», «Each», «Each or every?», «Neither», «Most»,
   «Lots, a lot, plenty», «Hardly»); факти — по два джерела; URL — tasks/…/write-eng-g11-e11s2.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Статус: verified (verifier-e11s2, 2026-11-26; reports/verify/write-eng-g11-e11s2.md); автор — writer-e11s2. 7 уроків (6 + фінал). Будова — за e10s3.
   Перевірка: node tools/validate.mjs --section e11s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s2",
  grade: 11,
  weeks: [6, 9],
  title: "Food and recipes",
  why: "To talk about food, drinks and snacks, healthy eating and your priorities. And to read and write recipes with exact amounts.",
  requires: ["e5s3l2", "e5s3l3", "e5s3l4", "e6s2l3", "e6s3l3", "e7s2l3", "e7s2l4", "e8s2l2", "e9s9l3"],
  meta: { author: "writer-e11s2", created: "2026-11-26", factcheck: "verifier-e11s2, 2026-11-26 (reports/verify/write-eng-g11-e11s2.md)", teacher: null },
  badges: [
    { id: "e11s2boss", name: "Cookbook editor", icon: "pot", desc: "Finish the final lesson “Food and recipes”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s2l1",
      title: "Meals, snacks and drinks",
      short: "Meals and drinks",
      icon: "pot",
      status: "verified",
      why: "People eat at different times and call their meals different names. Talk about meals, snacks and drinks.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Is tea a drink or a meal?",
          body: `<p class="lead">Ms Kravets’s penfriend club is making an online cookbook. First, the members write about a normal day of food.</p><p><b>Emma:</b> In our house, tea is at six o’clock, and Mum usually cooks it.<br><b>Oksana:</b> Wait, you cook tea? I just make it in a cup!<br><b>Emma:</b> Ha! Not that kind of tea.</p><p>What does Emma mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>At six in the evening, Emma’s mum asks: “Who’s hungry? Tea’s ready!”</p><p>What is ready?</p>`,
          opts: [
            "a cup of tea for everyone",
            "the evening meal",
            "a cake for Emma’s birthday"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In many British homes, <b>tea</b> is also the name of a meal: a cooked meal in the early evening, or a small meal with cake in the afternoon. The next screen has more meal words."
        },
        {
          type: "info",
          title: "Meals and snacks",
          body: `<ul><li><b>brunch</b> → a late breakfast and an early lunch in one meal</li><li>a <b>packed lunch</b> → food you take with you to school or work</li><li>a <b>snack</b> → a small amount of food between meals</li><li>e<u>lev</u>enses (UK, informal, a bit old-fashioned) → a drink and a snack in the middle of the morning</li><li>a <b><u>take</u>away</b> → a meal you buy at a restaurant and eat at home</li><li>a <b>ready meal</b> → a meal from a supermarket that you only heat</li><li><b>tea</b> (UK) → an early evening meal, or a small meal with cake in the afternoon</li></ul>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Drinks, and how food feels",
          body: `<ul><li><b>still</b> water → with no bubbles · <b><u>spar</u>kling</b> water → with bubbles</li><li>a <b><u>smoo</u>thie</b> → a thick, cold drink made from fruit, often with yoghurt</li><li><b>herbal tea</b> → tea made from plants and flowers, like mint</li><li><b>filling</b> → you feel full after only a little of it: Porridge is very filling.</li><li><b>light</b> → small and not filling: a light lunch</li><li><b>I’m starving!</b> → I’m very hungry.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["brunch", "a packed lunch", "a takeaway", "a ready meal"],
          right: ["a late breakfast and an early lunch in one", "food you take to school in a box", "a meal from a restaurant that you eat at home", "a supermarket meal that you only heat"],
          hint: "Which one do you buy at a restaurant? Which one at a supermarket?",
          fbOk: "Well done!",
          fbBad: "Look at the box on meals and snacks again.",
          fbText: "<b>Brunch</b> → breakfast and lunch in one. A <b>packed lunch</b> → food you take with you. A <b>takeaway</b> → from a restaurant, eaten at home. A <b>ready meal</b> → from a supermarket, you only heat it."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day of food, part 1 of 3",
          title: "Read and choose.",
          body: `<p><b>Emma, 17, England</b></p><p><i>On school days, I don’t have time for a big breakfast. I just have a bowl of cereal and a glass of milk. At lunchtime, I eat a packed lunch: usually a cheese sandwich, an apple and a flapjack, a sweet, chewy bar made from oats. I make them on Sundays. After swimming, I’m always starving, so I have a snack: a banana or a hot crumpet with butter. In our house, tea is the evening meal. We have it at six, and Mum usually cooks. On Fridays, nobody wants to cook, so we get a takeaway.</i></p><p>What does Emma’s family do on Fridays?</p>`,
          opts: [
            "They have tea at a café.",
            "Emma cooks a ready meal for everyone.",
            "They buy a meal from a restaurant and eat it at home."
          ],
          correct: 2,
          hint: "Read the last sentence. What is a takeaway?",
          fbOk: "Right.",
          fbBad: "Look at the last sentence and at the box on meals.",
          fbText: "On Fridays, they <b>get a takeaway</b>: a meal from a restaurant that they eat at home. Usually, Emma’s mum cooks tea."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: A day of food, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><b>Oksana, 17, Zelena Dolyna, Ukraine</b></p><p><i>On school days, our breakfast is filling: buckwheat porridge with milk, or eggs and bread. There’s no canteen at our school, so I take a packed lunch too: usually a sandwich, a cucumber from our garden and some homemade biscuits. Our main meal is dinner, at about seven, when everyone is home. Mum often makes soup with vegetables from the garden. On Sundays, we have dinner at Grandma Hanna’s house. Before bed, my brother Dmytro snacks on sunflower seeds while he does his homework.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Oksana’s school has a canteen.",
            "Oksana takes food from home for lunch.",
            "Dinner is the main meal in Oksana’s family.",
            "Dmytro eats crisps before bed."
          ],
          correct: [1, 2],
          hint: "Two sentences are true. Check what Oksana says about school and about dinner.",
          fbOk: "Well done!",
          fbBad: "Check each sentence against the text.",
          fbText: "Oksana takes a <b>packed lunch</b>, because there’s no canteen at her school. <b>Dinner</b> is the main meal. Dmytro snacks on sunflower seeds, not crisps."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day of food, part 3 of 3",
          title: "Read and choose.",
          body: `<p><b>Andrii, 17, Kyiv</b></p><p><i>I’m not a morning person, so I often skip breakfast and buy a pastry on the way to school. I know it’s not the best start! At lunchtime, I have soup and a sandwich in the school canteen. At the weekend, my friends and I sometimes meet for brunch at a café near the river. I usually order eggs on toast and a smoothie. On weekdays, dinner at home is often quick: Mum works late, so she buys ready meals, and we heat them up. I drink a lot of sparkling water. Fizzy drinks are too sweet for me.</i></p><p>Why does Andrii’s family often have ready meals?</p>`,
          opts: [
            "Andrii doesn’t like his mum’s cooking.",
            "His mum works late on weekdays.",
            "Ready meals are cheaper than takeaways."
          ],
          correct: 1,
          hint: "Find the word so in the sentence about dinner.",
          fbOk: "Exactly.",
          fbBad: "Read the sentence about dinner on weekdays again.",
          fbText: "Andrii’s mum <b>works late</b>, so she buys ready meals. The text says nothing about prices."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "I had a big lunch, so I only want a {*light|filling|starving} dinner. Would you like still or {*sparkling|herbal|filling} water? This porridge is really {*filling|light|still}: after one bowl, I’m full until lunch.",
          hint: "Small and not filling is … . Water with bubbles is … .",
          fbOk: "Yes!",
          fbBad: "Look at the box on drinks again.",
          fbText: "A <b>light</b> dinner: small. Still or <b>sparkling</b> water: with no bubbles or with bubbles. Porridge is <b>filling</b>: you’re full after one bowl."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>On Sundays, Andrii gets up late. At eleven, he has eggs on toast. It’s his breakfast and his lunch in one meal.</p>`,
          before: "Andrii’s Sunday meal at eleven is",
          after: ".",
          answer: "brunch",
          hint: "A late breakfast and an early lunch: one word.",
          fbOk: "Well done!",
          fbBad: "Look at the first line in the box on meals.",
          fbText: "It’s <b>brunch</b>: breakfast and lunch in one meal, in the late morning."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+take|a|way", "e|+lev|en|ses", "+smoo|thie", "+spar|kling"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the boxes on meals and drinks.",
          fbText: "<u>take</u>away, e<u>lev</u>enses, <u>smoo</u>thie, <u>spar</u>kling."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes about his day of food for the cookbook.</p>`,
          text: "After training, I’m always {*starving|light}, so I have a big breakfast. For lunch, I take a {*packed lunch|takeaway} from home. In the evening, Dad, Zlata and I sometimes get a {*takeaway|packed lunch} from the pizza place near our flat. I try not to drink fizzy drinks now: I prefer {*sparkling|filling} water.",
          hint: "Food from home → … . A meal from a restaurant, eaten at home → … .",
          fbOk: "Well done!",
          fbBad: "Check the words in the boxes on meals and drinks.",
          fbText: "I’m always <b>starving</b> (very hungry). A <b>packed lunch</b> from home. A <b>takeaway</b> from the pizza place. <b>Sparkling</b> water."
        }
      ],
      outro: {
        text: "Brunch, packed lunch, takeaway or tea: now you can talk about meals, snacks and drinks in Ukraine and the UK.",
        learned: [
          "Name meals and snacks: brunch, a packed lunch, a takeaway, a ready meal.",
          "Describe drinks and food: still, sparkling, filling, light.",
          "Read about a normal day of food in Ukraine and the UK."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s2l2",
      title: "Plenty of, hardly any: quantifiers",
      short: "Plenty of, hardly any",
      icon: "scale",
      status: "verified",
      why: "Before you cook, you check what you have. Say there is more than enough of something, or almost none.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Kitchen check",
          body: `<p class="lead">On Saturday, Mariia’s class is having a cooking evening at her school in Kharkiv. Mariia checks the kitchen and sends a message.</p><p><i>Good news: we’ve got plenty of flour and lots of eggs, so we don’t need to buy any. Bad news: there’s hardly any sugar, and there are hardly any apples left. Can someone bring some?</i></p><p>Plenty of, hardly any: is that a lot or almost nothing?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia: “There’s hardly any sugar.”</p><p>What does she mean?</p>`,
          opts: [
            "There’s almost no sugar.",
            "There’s a lot of sugar.",
            "There’s no sugar at all."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Hardly any</b> = almost no. There’s a little sugar, but not enough. That’s why Mariia asks someone to bring some."
        },
        {
          type: "info",
          title: "Remember: much, many, a lot of",
          body: `<ul><li><b>much</b> + uncountable: How <b>much</b> sugar? There isn’t <b>much</b> milk.</li><li><b>many</b> + plural: How <b>many</b> eggs? We haven’t got <b>many</b> apples.</li><li><b>a lot of</b> / <b>lots of</b> + both: We’ve got <b>lots of</b> eggs and <b>a lot of</b> flour.</li></ul><p>We use <i>much</i> and <i>many</i> mostly in questions and negatives. In positive sentences, we usually say <b>a lot of</b> or <b>lots of</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Fill in the gaps.",
          text: "How {*much|many} sugar do we need? We haven’t got {*many|much} apples. But we’ve got {*lots of|much} eggs.",
          hint: "Can you count it? Sugar: no. Apples and eggs: yes.",
          fbOk: "Exactly.",
          fbBad: "Uncountable → much. Plural → many. Positive sentence → lots of.",
          fbText: "How <b>much</b> sugar (uncountable)? We haven’t got <b>many</b> apples (plural). We’ve got <b>lots of</b> eggs: <i>much</i> doesn’t go with plural nouns."
        },
        {
          type: "info",
          title: "Plenty of, hardly any",
          body: `<ul><li><b>plenty of</b> + uncountable or plural → a lot, more than enough: We’ve got <b>plenty of</b> flour. There are <b>plenty of</b> eggs.</li><li><b>hardly any</b> + uncountable or plural → almost no: There’s <b>hardly any</b> sugar. There are <b>hardly any</b> apples.</li><li>In formal writing: <b>a great deal of</b> + uncountable (a great deal of time), <b>a large number of</b> + plural (a large number of people).</li></ul><p>Not: <s>plenty flour</s>, <s>hardly no apples</s>, <s>a great deal of people</s>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Which nouns can go after these words?</p>`,
          bins: ["+ uncountable", "+ plural", "+ both"],
          items: [
            ["a great deal of", 0],
            ["much", 0],
            ["a large number of", 1],
            ["many", 1],
            ["plenty of", 2],
            ["hardly any", 2],
            ["lots of", 2]
          ],
          hint: "Think of sugar and eggs. Which words go with both?",
          fbOk: "Well done!",
          fbBad: "Look at the two boxes again: much, many, plenty of, hardly any.",
          fbText: "Uncountable: <b>much</b>, <b>a great deal of</b> (sugar, time). Plural: <b>many</b>, <b>a large number of</b> (eggs, people). Both: <b>plenty of</b>, <b>hardly any</b>, <b>lots of</b>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Mariia doesn’t need to buy eggs. Which words can go in the gap?</p><p>We’ve got … eggs.</p>`,
          opts: [
            "plenty of",
            "lots of",
            "a lot of",
            "hardly any",
            "much"
          ],
          correct: [0, 1, 2],
          hint: "She doesn’t need to buy eggs: are there a lot or almost none?",
          fbOk: "Yes!",
          fbBad: "Three answers are correct. Check the meaning and the noun: eggs are plural.",
          fbText: "<b>Plenty of</b>, <b>lots of</b> and <b>a lot of</b> eggs all mean there are enough. <i>Hardly any</i> eggs = almost none, so she would need to buy some. <i>Much</i> doesn’t go with plural nouns."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia’s head teacher writes a report for the school website. It’s formal.</p><p>“… people came to our cooking evening.”</p>`,
          opts: [
            "A great deal of",
            "A large number of",
            "Much"
          ],
          correct: 1,
          hint: "People: uncountable or plural?",
          fbOk: "Right.",
          fbBad: "People is a plural noun.",
          fbText: "<b>A large number of</b> + plural: a large number of people. <i>A great deal of</i> and <i>much</i> go with uncountable nouns: a great deal of time."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "Don’t worry, we’ve got [plenty] time before the guests arrive. But there are [!hardly any] apples, so I’ll buy some.",
          hint: "Plenty … time: is a word missing?",
          fbOk: "Good eye!",
          fbBad: "Hardly any apples is correct. Look at the first sentence.",
          fbText: "We’ve got <b>plenty of</b> time. Before a noun, we always say <i>plenty of</i>. <i>Hardly any apples</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>There are only two tomatoes in the fridge, and Mariia needs ten.</p>`,
          before: "There are",
          after: "any tomatoes left.",
          answer: ["hardly", "scarcely", "barely"],
          hint: "Almost no tomatoes = … any tomatoes.",
          fbOk: "Well done!",
          fbBad: "Two tomatoes are almost none. Look at the box on plenty of and hardly any.",
          fbText: "There are <b>hardly</b> any tomatoes left: almost none. (<i>Scarcely any</i> and <i>barely any</i> mean the same, but they are less common.)"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes about the cooking evening for the club cookbook.</p>`,
          text: "Our cooking evening was a big success! We made {*plenty of|hardly any} food, so nobody went home hungry. {*A large number of|A great deal of} parents came too. There was {*hardly any|plenty of} time left at the end, so we’re cleaning the kitchen tomorrow.",
          hint: "Nobody was hungry. And why are they cleaning tomorrow?",
          fbOk: "Well done!",
          fbBad: "Check the meaning: more than enough or almost none? And parents: plural.",
          fbText: "<b>Plenty of</b> food: nobody was hungry. <b>A large number of</b> parents (plural). <b>Hardly any</b> time left, so they’re cleaning tomorrow."
        }
      ],
      outro: {
        text: "Plenty of = more than enough, hardly any = almost none. And in formal writing: a great deal of, a large number of.",
        learned: [
          "Use plenty of and hardly any with uncountable and plural nouns.",
          "Use a great deal of and a large number of in formal writing.",
          "Choose between much, many, a lot of and lots of."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s2l3",
      title: "A few or few? A little or little?",
      short: "Few or a few?",
      icon: "eye",
      status: "verified",
      why: "One small word, a, can change the meaning. Say if there is some of something or not enough.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Where shall we have lunch?",
          body: `<p class="lead">After school in Kyiv, Andrii and his friends want lunch. Daryna sends a message.</p><p><i>The new café on our street is nice, but few people go there – the food is bland and expensive. The bakery near the park is better. It has a few tables outside, and it’s cheap. I’ve got a little money left this week, so I’m in!</i></p><p>Few or a few, little or a little: is there a difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “Few people go to the new café.”</p><p>Is this good news for the café?</p>`,
          opts: [
            "Yes: some people go there, and that’s enough.",
            "No: not many people go there.",
            "It means that exactly three people go there."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Few</b> people = not many people, not enough for the café. <i>A few</i> tables at the bakery = some tables. The next screen shows the difference."
        },
        {
          type: "info",
          title: "A few or few?",
          body: `<ul><li><b>a few</b> + plural, <b>a little</b> + uncountable → some: not a lot, but enough. The bakery has <b>a few</b> tables outside. I’ve got <b>a little</b> money. (good news)</li><li><b>few</b> + plural, <b>little</b> + uncountable → not many, not much, often not enough. <b>Few</b> people go to the café. There’s <b>little</b> choice. (bad news)</li></ul><p>Only one small word, <i>a</i>, is different, but the meaning changes!</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The soup was a bit bland, so I added {*a little|little} salt. {*Few|A few} people eat at that café: it’s almost always empty. I’ve made {*a few|few} sandwiches for the trip. Do you want one?",
          hint: "Is it good news (some) or bad news (not enough)?",
          fbOk: "Yes!",
          fbBad: "Some → a few, a little. Not enough → few, little.",
          fbText: "I added <b>a little</b> salt: some salt, for more taste. <b>Few</b> people eat there: it’s almost empty. I’ve made <b>a few</b> sandwiches: some, so there’s one for you."
        },
        {
          type: "info",
          title: "Very few, only a little",
          body: `<p><b>Few</b> and <b>little</b> on their own sound quite formal. In conversation, we often say:</p><ul><li><b>very few</b> / <b>only a few</b> + plural: <b>Only a few</b> people go there.</li><li><b>very little</b> / <b>only a little</b> + uncountable: There’s <b>very little</b> milk left.</li><li><b>not many</b> / <b>not much</b>: There aren’t <b>many</b> people.</li></ul><p>All of them mean ‘less than you want’.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences say that the new café is <b>not</b> popular?</p>`,
          opts: [
            "Few people go there.",
            "Very few people go there.",
            "Only a few people go there.",
            "Plenty of people go there.",
            "A large number of people go there."
          ],
          correct: [0, 1, 2],
          hint: "Find the words that mean ‘not many’.",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Only a few means the same as few.",
          fbText: "<b>Few</b>, <b>very few</b> and <b>only a few</b> people = not many. <i>Plenty of</i> and <i>a large number of</i> mean a lot."
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          bins: ["good news: some", "bad news: not enough"],
          items: [
            ["I’ve got a few friends in my new class.", 0],
            ["We’ve got a little time before the film.", 0],
            ["There’s a little cake left for you.", 0],
            ["I’ve got few friends in my new class.", 1],
            ["We’ve got very little time.", 1],
            ["Only a few pupils came to the party.", 1]
          ],
          hint: "Look for a. And remember: very and only make it ‘not enough’.",
          fbOk: "Right.",
          fbBad: "A few, a little → some. Few, very little, only a few → not enough.",
          fbText: "Good news: <b>a few</b> friends, <b>a little</b> time, <b>a little</b> cake. Bad news: <b>few</b> friends, <b>very little</b> time, <b>only a few</b> pupils."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Bohdan’s message is wrong.</p>`,
          text: "We’ve got [a little] eggs and [!a few] tomatoes, so let’s make an omelette.",
          hint: "Eggs: countable or uncountable?",
          fbOk: "Good eye!",
          fbBad: "A few tomatoes is correct. Look at eggs.",
          fbText: "Eggs are countable, so: <b>a few</b> eggs. <i>A little</i> goes with uncountable nouns: a little milk."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The shop in Grandma Hanna’s village sells hardly any fresh fruit, so she grows her own. Write <i>few</i> or <i>little</i>.</p>`,
          before: "The village shop sells very",
          after: "fresh fruit.",
          answer: "little",
          hint: "Fruit here is uncountable, like milk.",
          fbOk: "Well done!",
          fbBad: "Fruit: can you count it here? There’s no -s.",
          fbText: "Very <b>little</b> fresh fruit: <i>fruit</i> here is uncountable, so <i>little</i>, not <i>few</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><b>Lunch near school: a review</b> – by Daryna</p><p><i>The new café on our street looks great, but few pupils eat there. The portions are small, and there’s little choice for vegetarians: just one salad. The bakery near the park is different. It has only a few tables, so come early! There are plenty of sandwiches and pies, and they’re cheap. I had a little soup and a cheese pie for 120 hryvnias. If you have very little money, it’s the place to go.</i></p><p>What does Daryna say about the new café?</p>`,
          opts: [
            "There isn’t much food there for vegetarians.",
            "It’s very popular with pupils.",
            "It has plenty of choice."
          ],
          correct: 0,
          hint: "Find little choice in the text.",
          fbOk: "Right.",
          fbBad: "Read about the café again: few pupils, little choice.",
          fbText: "There’s <b>little choice</b> for vegetarians: not enough, just one salad. And <b>few</b> pupils eat there, so it isn’t popular."
        }
      ],
      outro: {
        text: "A few and a little: some. Few and little: not enough. One small word makes the difference.",
        learned: [
          "Tell a few from few, and a little from little.",
          "Use very few, only a few and very little in conversation.",
          "Read a short review and understand what is good and bad."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s2l4",
      title: "Healthy and unhealthy food: what are your priorities?",
      short: "Food priorities",
      icon: "leaf",
      status: "verified",
      why: "Everyone chooses food in a different way. Explain what comes first for you and compare two lifestyles.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What comes first?",
          body: `<p class="lead">The club has an online meeting. Ms Kravets asks: “When you choose food, what comes first? Taste, price, health or time?”</p><p><b>Emma:</b> For me, time comes first. I train every evening, so I need quick meals.<br><b>Oksana:</b> My top priority is fresh food. We grow our own vegetables, and I’d rather eat what grows in that season.<br><b>Andrii:</b> Honestly? Taste matters more to me than anything else!</p><p>And you? What comes first for you?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          poll: "e11s2_priority",
          eyebrow: "What do you think?",
          title: "What do you think?",
          body: `<p>When you choose food, what comes first for you?</p>`,
          opts: [
            "taste",
            "price",
            "health",
            "time"
          ],
          fbTitle: "Thanks for your answer!",
          fbText: "There’s no wrong answer: people have different priorities. In this lesson, you’ll learn to explain yours and compare it with other people’s."
        },
        {
          type: "info",
          title: "Words for food choices",
          body: `<ul><li><b>nu<u>tri</u>tious</b> → full of things your body needs</li><li><b>junk food</b> → quick and easy, but high in fat, sugar or salt</li><li><b><u>sea</u>sonal</b> → grown at its natural time of the year: seasonal fruit</li><li><b>af<u>ford</u>able</b> → not expensive</li><li><b>con<u>ve</u>nient</b> → easy and quick to use, saves time</li><li>a <b>pri<u>or</u>ity</b> → something more important than other things</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["nutritious", "seasonal", "affordable", "convenient"],
          right: ["full of things your body needs", "grown at its natural time of the year", "not expensive", "easy and quick to use"],
          hint: "Start with the word that is about money.",
          fbOk: "Good eye!",
          fbBad: "Look at the box on food choices again.",
          fbText: "<b>Nutritious</b> → full of things your body needs. <b>Seasonal</b> → grown at its natural time. <b>Affordable</b> → not expensive. <b>Convenient</b> → easy and quick."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["nu|+tri|tious", "af|+ford|a|ble", "con|+ve|ni|ent", "pri|+or|i|ty"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the box on food choices.",
          fbText: "nu<u>tri</u>tious, af<u>ford</u>able, con<u>ve</u>nient, pri<u>or</u>ity."
        },
        {
          type: "info",
          title: "Priorities and comparing",
          body: `<ul><li>My <b>top priority</b> is fresh food. / For me, time <b>comes first</b>.</li><li>Taste <b>matters more to me than</b> price.</li><li>Oksana’s family grows vegetables, <b>whereas</b> Emma’s family buys them.</li><li><b>While</b> Emma needs quick meals, Oksana has more time to cook.</li></ul><p><i>Whereas</i> and <i>while</i> join two different facts: X, but Y.</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Both, either, neither: two things",
          body: `<ul><li><b>both</b> + plural → the two: <b>Both</b> families cook at the weekend.</li><li><b>either</b> + singular → one or the other, it doesn’t matter: You can use <b>either</b> recipe.</li><li><b>neither</b> + singular → not one and not the other: <b>Neither</b> café is cheap.</li><li>With <b>of</b> + the / my / us / them: <b>Neither of us</b> likes junk food. <b>Both of them</b> cook.</li></ul><p>You already know <i>either … or</i>: either tea or juice.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana’s and Emma’s families don’t eat much junk food.</p>`,
          text: "{*Neither|Both|Either} family eats junk food every day. You can make {*either|both|neither} recipe: they’re both easy. {*Both|Either|Neither} cafés near our school are expensive.",
          hint: "Look at the noun after the gap: one or more than one?",
          fbOk: "Exactly.",
          fbBad: "both + plural; either, neither + singular. And check the meaning.",
          fbText: "<b>Neither</b> family eats junk food every day (not one, not the other). You can make <b>either</b> recipe: it doesn’t matter which. <b>Both</b> cafés: plural."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>In Oksana’s family, most vegetables come from the garden, whereas Emma’s family buys them at the supermarket. Both families cook at the weekend. On weekdays, Emma’s family often has quick meals, while Oksana’s family usually has soup and a hot dinner. Neither family has a takeaway more than once a week.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Both families grow their own vegetables.",
            "Neither family cooks at the weekend.",
            "Neither family has a takeaway every day."
          ],
          correct: 2,
          hint: "Read the last sentence again. Once a week: is that every day?",
          fbOk: "Well done!",
          fbBad: "Check whereas in the first sentence and both in the second.",
          fbText: "Neither family has a takeaway more than once a week, so <b>neither has one every day</b>. Only Oksana’s family grows vegetables, and both families cook at the weekend."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>For Andrii, taste is more important than price. What does he say?</p>`,
          tiles: ["taste", "matters", "more", "to me", "than", "price"],
          answer: ["Taste matters more to me than price.", "Taste matters more than price to me.", "Taste matters to me more than price.", "To me taste matters more than price.", "Taste to me matters more than price.", "More than price taste matters to me."],
          extra: ["that"],
          hint: "X matters more to me … Y.",
          fbOk: "Yes!",
          fbBad: "Compare with than, not that.",
          fbText: "<b>Taste matters more to me than price.</b> After <i>more</i>, we compare with <b>than</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma doesn’t like fizzy drinks, and Oksana doesn’t like them either.</p>`,
          before: "",
          after: "of them likes fizzy drinks.",
          answer: "neither",
          hint: "Two people, and not one of them likes the drinks.",
          fbOk: "Well done!",
          fbBad: "Two people: not Emma and not Oksana.",
          fbText: "<b>Neither</b> of them likes fizzy drinks: not Emma and not Oksana. For two people, we say <i>neither</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes a paragraph for the cookbook: “Our priorities”.</p>`,
          text: "My top {*priority|habit} is fresh, seasonal food, {*whereas|because} Emma’s is time: she trains every evening. {*Neither|Both} of us likes junk food very much. In summer, the vegetables at our market are very {*affordable|convenient}: they cost very little.",
          hint: "Two different facts → whereas. Likes: one or two? They cost very little → … .",
          fbOk: "Well done!",
          fbBad: "Check the boxes on priorities, comparing and two things.",
          fbText: "My top <b>priority</b>. <b>Whereas</b> joins two different facts. <b>Neither</b> of us likes (singular verb). The vegetables are <b>affordable</b>: not expensive."
        }
      ],
      outro: {
        text: "Taste, price, health or time: now you can explain your food priorities and compare two lifestyles.",
        learned: [
          "Explain priorities: my top priority is…, X matters more to me than Y.",
          "Compare lifestyles with whereas and while.",
          "Use both, either and neither for two things."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s2l5",
      title: "Most of us, none of them: quantifiers with of",
      short: "Most of us",
      icon: "chart",
      status: "verified",
      why: "Surveys are full of most of, all of and none of. Talk about groups of people and things.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "The breakfast survey",
          body: `<p class="lead">The club asked all 20 members about breakfast. Tom, Emma’s brother, makes a poster with the results.</p><p><b>Breakfast survey: 20 members</b><br>Most of us (16) have breakfast every day.<br>All of us drink something in the morning.<br>None of us eats breakfast in a café on school days.<br>Each of us named one favourite breakfast.</p><p>Most of us, all of us, none of us: why <i>of</i>?</p>`,
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
            "Most of people have breakfast.",
            "Most the people have breakfast.",
            "Most people have breakfast."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Most people</b>: no <i>of</i> when there is no <i>the</i>, <i>my</i> or <i>us</i>. But <b>most of the</b> people, <b>most of us</b>."
        },
        {
          type: "info",
          title: "Most, all, none + of",
          body: `<ul><li><b>most / all / none + of</b> + the, my, these + noun: <b>most of the</b> members, <b>none of my</b> friends</li><li><b>+ of</b> + us, you, them: <b>most of us</b>, <b>all of them</b>, <b>none of us</b></li><li>No <i>the</i>, <i>my</i>…? No <i>of</i>: <b>Most people</b> like toast. Not: <s>most of people</s></li><li><b>all the</b> members = <b>all of the</b> members (both are correct), but only <b>all of us</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Most|Most of} people in our village grow vegetables. {*Most of|Most} my friends take a packed lunch to school. {*None of|None} them buys lunch in a café. All {*of us|us} had a snack after school.",
          hint: "Is there the, my, us or them after the gap?",
          fbOk: "Yes!",
          fbBad: "Before my, us, them → of. Before a noun with no the → no of.",
          fbText: "<b>Most</b> people (no <i>of</i>). <b>Most of</b> my friends. <b>None of</b> them. All <b>of us</b>."
        },
        {
          type: "info",
          title: "None of us, each of us, every member",
          body: `<ul><li><b>none of</b> + plural → the verb can be singular or plural: None of us <b>eats</b> / <b>eat</b> in a café. (Singular is more formal.)</li><li><b>each</b> + singular noun, <b>each of</b> + the / us / them: <b>Each</b> member, <b>each of us</b> named a breakfast.</li><li><b>every</b> + singular noun, for three or more: <b>Every</b> member answered. Often, <i>each</i> and <i>every</i> are both possible.</li><li>Not: <s>every of us</s> → <b>every one of us</b>. Not: <s>almost each</s> → <b>almost every</b>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "None of my friends eats meat.",
            "None of my friends eat meat.",
            "Every of us has a phone.",
            "Each of us has a phone.",
            "Almost each pupil answered."
          ],
          correct: [0, 1, 3],
          hint: "After none of, the verb can be singular or plural. And can every go before of?",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Check every and almost.",
          fbText: "<b>None of my friends eats / eat</b> are both correct. <b>Each of us</b> has a phone. But: <i>every one of us</i>, <i>almost every pupil</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Tom’s poster is wrong.</p>`,
          text: "[Most of] people in our club have breakfast at home, and [!most of] my friends bring a snack too.",
          hint: "Is there the, my or us after most of?",
          fbOk: "Good eye!",
          fbBad: "Most of my friends is correct: there is my.",
          fbText: "<b>Most people</b> in our club: no <i>of</i> before a noun with no <i>the</i> or <i>my</i>. <i>Most of my friends</i> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Each member of the club chose one favourite snack. Tom writes it in the survey results.</p>`,
          tiles: ["each", "of", "us", "chose", "one", "favourite", "snack"],
          answer: "Each of us chose one favourite snack.",
          extra: ["every"],
          hint: "Each of + us + verb.",
          fbOk: "Right.",
          fbBad: "We can say each of us, but not every of us.",
          fbText: "<b>Each of us chose one favourite snack.</b> With <i>every</i>, we would need <i>every one of us</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>There are 15 members in our club, and nobody drinks coffee in the morning.</p>`,
          before: "",
          after: "of us drinks coffee in the morning.",
          answer: ["none", "not one"],
          hint: "Not one of us, not any of us: one word.",
          fbOk: "Well done!",
          fbBad: "Nobody drinks coffee. Look at the box on none of.",
          fbText: "<b>None</b> of us drinks coffee: not one person in the club."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><b>What we eat for breakfast</b> – by Tom</p><p><i>We asked all 20 members of the club. Most of us have breakfast at home every day, but four of us often skip it. All of us drink something: most of the Ukrainian members drink tea, while most of the British members drink juice or milk. None of us eats breakfast in a café on school days. Each of us named one favourite breakfast: eggs came first, and toast came second.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "All of the members have breakfast every day.",
            "None of the members has breakfast in a café on school days.",
            "Most of the British members drink tea."
          ],
          correct: 1,
          hint: "Four members often skip breakfast. Who drinks tea?",
          fbOk: "Right.",
          fbBad: "Read the text again: four of us, most of the British members.",
          fbText: "<b>None of us eats breakfast in a café</b> on school days. Four members often skip breakfast, and most of the British members drink juice or milk."
        }
      ],
      outro: {
        text: "Most people, but most of us. None of us, each of us, every member: now you can talk about groups.",
        learned: [
          "Use most, all and none with of before the, my, us and them.",
          "Use each, each of and every with a singular noun.",
          "Read and write the results of a class survey."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s2l6",
      title: "A family recipe, step by step",
      short: "A family recipe",
      icon: "cake",
      status: "verified",
      why: "Family recipes often live only in someone’s head. Read and write a recipe with exact amounts.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A handful of this, a bit of that",
          body: `<p class="lead">Oksana wants Grandma’s recipe for the club cookbook. But there’s a problem.</p><p><b>Oksana:</b> Grandma, how much flour do you use?<br><b>Grandma Hanna:</b> Oh, about three handfuls. And a pinch of salt. And milk… until it feels right!<br><b>Oksana:</b> That won’t work in a cookbook!</p><p>How do you write a recipe that anyone can follow?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Grandma Hanna: “Add a pinch of salt.”</p><p>How much salt is a pinch?</p>`,
          opts: [
            "as much as you can hold between your finger and thumb",
            "a full cup",
            "half a kilogram"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>pinch</b> is a very small amount: as much as you can hold between your finger and thumb. The next screen has more words for amounts."
        },
        {
          type: "info",
          title: "Exact amounts",
          body: `<ul><li><b>g</b> = grams: 500 g of flour · <b>ml</b> = <u>mil</u>lilitres: 300 ml of milk</li><li><b>tbsp</b> = a <b><u>ta</u>blespoon</b> (15 ml) · <b>tsp</b> = a <b><u>tea</u>spoon</b> (about 5 ml)</li><li>a <b>pinch of</b> salt → as much as you can hold between your finger and thumb</li><li>a <b>clove of</b> garlic → one small part of a garlic bulb</li><li>a <b>handful of</b> → as much as you can hold in one hand</li><li>a <b>bunch of</b> dill → a few stems held together</li></ul><p>In recipes, we often leave out <i>of</i>: 500 g flour, 2 tbsp oil.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["tbsp", "tsp", "g", "ml"],
          right: ["tablespoon", "teaspoon", "grams", "millilitres"],
          hint: "Start with g and ml. Which spoon is bigger?",
          fbOk: "Yes!",
          fbBad: "Look at the box on exact amounts again.",
          fbText: "<b>tbsp</b> = tablespoon (15 ml), <b>tsp</b> = teaspoon (about 5 ml), <b>g</b> = grams, <b>ml</b> = millilitres."
        },
        {
          type: "info",
          title: "Recipe verbs",
          body: `<ul><li><b>knead</b> the dough → press and fold it with your hands again and again</li><li><b>crush</b> garlic → press it hard so it breaks into tiny pieces</li><li><b>brush</b> with oil → put oil on with a small brush</li><li><b>cover</b> the bowl → put something over it</li><li>leave it <b>until</b> it’s twice as big → wait for that moment</li></ul><p>Recipes use imperatives: <i>Mix</i>, <i>Add</i>, <i>Bake</i>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Grandma’s recipe, part 1 of 3",
          title: "Read and choose.",
          body: `<p><b>Grandma Hanna’s pampushky</b> – by Oksana</p><p><i>In our family, Sunday dinner at Grandma Hanna’s house always starts with borscht. Next to it, there’s a plate of hot pampushky. Pampushky are small, soft buns made from yeast dough. Grandma brushes them with garlic oil, so the whole house smells of garlic. Some families make sweet pampushky with jam, but ours are always savoury. My little brother Dmytro once ate six of them before the borscht was even on the table!<br>Grandma learnt the recipe from her mother when she was about ten. She has never written it down. “A bit of this, a handful of that,” she says. So last Sunday, I stood next to her with a notebook and some kitchen scales, and I weighed everything before it went into the bowl. Grandma laughed, but she waited while I wrote down every number.</i></p><p>Why did Oksana weigh everything?</p>`,
          opts: [
            "Grandma wanted to sell the pampushky.",
            "The recipe in Grandma’s old book was wrong.",
            "Grandma has never written the recipe down."
          ],
          correct: 2,
          hint: "What does the text say about writing the recipe down?",
          fbOk: "Right.",
          fbBad: "Read the second half of the text again.",
          fbText: "Grandma has <b>never written the recipe down</b>: she uses “a bit of this, a handful of that”. So Oksana weighed everything to get exact amounts."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Grandma’s recipe, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><b>You will need</b> (for 12 pampushky):</p><ul><li>500 g plain flour, 7 g dried yeast</li><li>1 tsp sugar, 1 tsp salt</li><li>300 ml warm milk, 2 tbsp sunflower oil</li></ul><p><b>For the garlic oil:</b> 4 cloves of garlic, a pinch of salt, 3 tbsp sunflower oil, a small bunch of dill.</p><p><b>Method</b></p><p><i>1. Mix the yeast and the sugar with the warm milk. Leave it for ten minutes.<br>2. Add the flour, the salt and the oil. Knead the dough for about ten minutes, until it’s smooth.<br>3. Cover the bowl with a tea towel and leave it in a warm place for an hour, until the dough is twice as big.</i></p><p><i><b>Grandma’s tip:</b> the milk must be warm, not hot. She checks it with her finger. “Hot milk kills the yeast,” she says, “and then the dough won’t rise.”</i></p><p>Which sentences are true?</p>`,
          opts: [
            "You need two tablespoons of oil for the dough.",
            "You need a pinch of sugar for the dough.",
            "The dough needs an hour in a warm place.",
            "You knead the dough for an hour."
          ],
          correct: [0, 2],
          hint: "Two sentences are true. Check the list, then steps 2 and 3.",
          fbOk: "Well done!",
          fbBad: "Look carefully at the amounts and the times.",
          fbText: "The dough needs <b>2 tbsp</b> of oil and <b>an hour</b> in a warm place. You need 1 tsp of sugar, not a pinch, and you knead the dough for about ten minutes."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Grandma’s recipe, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>4. Make twelve small balls and put them close together on a baking tray. Leave them for 20 minutes.<br>5. Bake them at 200 °C for about 20 minutes, until they’re golden.<br>6. While they’re baking, crush the garlic with a pinch of salt, chop the dill and mix both with the oil.<br>7. Brush the hot pampushky with the garlic oil and serve them with borscht. Any garlic oil left? It’s great on fresh bread too.<br><b>Oksana’s note:</b> Grandma always uses sunflower oil. She says that Ukraine is one of the world’s biggest producers of it. When I asked her why she never measures anything, she smiled: “After all these years, my hands remember.” And the leftovers? There are never any!</i></p><p>When do you make the garlic oil?</p>`,
          opts: [
            "before you make the dough",
            "while the pampushky are in the oven",
            "the next day"
          ],
          correct: 1,
          hint: "Read step 6.",
          fbOk: "Exactly.",
          fbBad: "Find the word while in the steps.",
          fbText: "Step 6: <b>while they’re baking</b>, you make the garlic oil. Then you brush the hot pampushky with it."
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>Grandma Hanna’s pampushky: the main steps.</p>`,
          items: [
            "Mix the yeast and the sugar with the warm milk.",
            "Knead the dough until it’s smooth.",
            "Leave the dough in a warm place for an hour.",
            "Bake the pampushky until they’re golden.",
            "Brush them with the garlic oil."
          ],
          shuffle: [3, 1, 4, 0, 2],
          hint: "You can’t knead the dough before you have it. And you brush them when they’re hot.",
          fbOk: "Good eye!",
          fbBad: "Look at the recipe again: dough first, oven, then oil.",
          fbText: "<b>Mix</b> the yeast with the milk, <b>knead</b> the dough, <b>leave</b> it for an hour, <b>bake</b> the pampushky, <b>brush</b> them with garlic oil."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Complete the recipe for the garlic oil from the text.</p>`,
          text: "Crush four {*cloves|pinches|bunches} of garlic with a {*pinch|clove|handful} of salt. Chop a small {*bunch|clove|pinch} of dill. Add three {*tablespoons|cloves|pinches} of sunflower oil.",
          hint: "Garlic → cloves. Dill → a bunch. Salt in this recipe → a very small amount.",
          fbOk: "Yes!",
          fbBad: "Look at the list for the garlic oil in part 2.",
          fbText: "Four <b>cloves</b> of garlic, a <b>pinch</b> of salt, a small <b>bunch</b> of dill, three <b>tablespoons</b> of oil."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>The recipe says: 300 ml warm milk. Write the full word for <i>ml</i>.</p>`,
          before: "300",
          after: "of warm milk",
          answer: ["millilitres", "milliliters"],
          hint: "It’s in the box on exact amounts.",
          fbOk: "Well done!",
          fbBad: "Check the spelling in the box on exact amounts.",
          fbText: "300 <b>millilitres</b> of warm milk. In British English, it ends in <i>-litres</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana sends the recipe to Emma.</p>`,
          text: "Hi Emma! Here’s Grandma’s recipe. You’ll need 500 {*grams|millilitres} of plain flour and 300 {*millilitres|grams} of warm milk. Knead the dough until it’s {*smooth|golden}, then leave it in a warm place for an hour. Don’t forget a {*pinch|bunch} of salt in the garlic oil! Love, Oksana",
          hint: "Flour → you weigh it. Milk → you measure it. When is it golden?",
          fbOk: "Well done!",
          fbBad: "Check the recipe: amounts and step 2.",
          fbText: "500 <b>grams</b> of flour, 300 <b>millilitres</b> of milk. Knead the dough until it’s <b>smooth</b>: the pampushky are golden after baking. A <b>pinch</b> of salt."
        }
      ],
      outro: {
        text: "Grams, millilitres, a pinch, a clove: now you can read and write a recipe that anyone can follow.",
        learned: [
          "Read a recipe with exact amounts: g, ml, tbsp, tsp.",
          "Use a pinch of, a clove of, a handful of and a bunch of.",
          "Follow and explain the steps of a family recipe."
        ]
      }
    },

    /* ───────────── Урок 7 (фінал) ───────────── */
    {
      id: "e11s2l7",
      title: "Our club cookbook",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you edit the cookbook?",
          body: `<p class="lead">The club cookbook is almost ready. Ms Kravets needs an editor to check the pages before they go online.</p><p>You need everything from this section: meals and drinks, quantifiers, priorities and recipes.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Emma’s page: “On Fridays, nobody wants to cook, so we get a …”</p>`,
          opts: [
            "packed lunch",
            "takeaway",
            "brunch"
          ],
          correct: 1,
          pre: "e11s2l1",
          fbOk: "Yes!",
          fbBad: "A meal from a restaurant that you eat at home: what is it called?",
          fbText: "A <b>takeaway</b>: a meal from a restaurant that you eat at home. A packed lunch is food you take with you."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "We’ve got {*plenty of|hardly any} bread, so we don’t need to buy any. There’s {*hardly any|plenty of} milk left: can you get some?",
          pre: "e11s2l2",
          fbOk: "Exactly.",
          fbBad: "More than enough or almost none?",
          fbText: "<b>Plenty of</b> bread: more than enough. <b>Hardly any</b> milk: almost none, so they need some."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Ms Kravets’s introduction is formal: “… time went into this cookbook.”</p>`,
          opts: [
            "A large number of",
            "Many",
            "A great deal of"
          ],
          correct: 2,
          pre: "e11s2l2",
          fbOk: "Well done!",
          fbBad: "Time is uncountable here.",
          fbText: "<b>A great deal of</b> + uncountable: a great deal of time. <i>A large number of</i> and <i>many</i> go with plural nouns."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Daryna’s page: “The new café is almost always empty.” Which sentence means the same?</p>`,
          opts: [
            "A few people go there, and they love it.",
            "Plenty of people go there.",
            "Few people go there."
          ],
          correct: 2,
          pre: "e11s2l3",
          fbOk: "Right.",
          fbBad: "Almost empty: not many people.",
          fbText: "<b>Few</b> people = not many, so the café is almost empty. <i>A few</i> people means some people."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "There’s {*a little|a few} soup left. Do you want some? {*Few|A few} pupils like the new café, so it’s nearly always empty.",
          pre: "e11s2l3",
          fbOk: "Yes!",
          fbBad: "Soup: uncountable. Nearly always empty: some or not enough?",
          fbText: "<b>A little</b> soup: some, for you. <b>Few</b> pupils: not many, so the café is empty."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Emma and Oksana don’t drink cola. {*Neither|Both} of them likes fizzy drinks. We can cook on Saturday or Sunday: {*either|both} day is fine.",
          pre: "e11s2l4",
          fbOk: "Exactly.",
          fbBad: "Not one and not the other → … . One or the other → … .",
          fbText: "<b>Neither</b> of them likes fizzy drinks. <b>Either</b> day is fine: Saturday or Sunday, it doesn’t matter."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>Oksana’s page: “Strawberries grow here in June, so we eat them in June.” Strawberries in June are …</p>`,
          opts: [
            "seasonal",
            "junk food",
            "convenient"
          ],
          correct: 0,
          pre: "e11s2l4",
          fbOk: "Well done!",
          fbBad: "Grown at its natural time of the year: which word?",
          fbText: "<b>Seasonal</b> fruit grows at its natural time of the year. <i>Convenient</i> means easy and quick."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Choose all the correct answers.",
          body: `<p>Tom’s survey page. Which sentences are correct?</p>`,
          opts: [
            "Most people like toast.",
            "Most of people like toast.",
            "None of us eats in a café.",
            "Every of us has a favourite snack."
          ],
          correct: [0, 2],
          pre: "e11s2l5",
          fbOk: "Yes!",
          fbBad: "Two answers are correct. Check of after most and every.",
          fbText: "<b>Most people</b> (no <i>of</i> without <i>the</i>). <b>None of us eats</b> is correct. But: <i>every one of us</i>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 9",
          title: "Fill in the gaps.",
          text: "Crush two {*cloves|bunches} of garlic. Add a {*pinch|clove} of salt and three {*tablespoons|bunches} of oil.",
          pre: "e11s2l6",
          fbOk: "Well done!",
          fbBad: "Garlic → … ; a very small amount of salt → … ; oil → spoons.",
          fbText: "Two <b>cloves</b> of garlic, a <b>pinch</b> of salt, three <b>tablespoons</b> of oil."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about meals and priorities, use quantifiers and write a recipe with exact amounts.",
        learned: [
          "Talk about meals, snacks and drinks.",
          "Use quantifiers: plenty of, hardly any, few, a few, most of, none of.",
          "Explain your food priorities and compare lifestyles.",
          "Read and write a recipe with exact amounts."
        ]
      }
    }
  ]
});
