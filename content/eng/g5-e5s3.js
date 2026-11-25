/* Слід · Англійська мова, 5 клас — «Food and drink» (e5s3)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), тема «Харчування» — продукти харчування; улюблені страви;
   страви в Україні та країнах виучуваної мови (с. 20, розд. 4.2.1); граматика — Nouns: uncountables; some/any, much, many, a lot of;
   Would: questions with like (с. 21–22, розд. 4.4); читання A2 — меню, прості рецепти (с. 16):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на 4 кл.: how much / how many, I’d like (e4s4), some / any (e4s2), кафе (e4s8) — reports/verify/plan-eng-g5.md §6.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги, рецепт і герої — власні (docs/design/english.md §8).
   Форми, злічуваність і факти — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g5-e5s3.md, «Нотатки агента»).
   borscht — за CD і OALD (і назвою елемента ЮНЕСКО 2022); у ключі `word` — ще borshch (КМУ № 55) і borsch (OALD: British English also).
   Статус: verified (verifier-e5s3, reports/verify/e5s3.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s3",
  grade: 5,
  weeks: [9, 12],
  title: "Food and drink",
  why: "To talk about the food you like. And to offer food to a friend and say “Yes, please” or “No, thank you”.",
  meta: { author: "writer-e5s3", created: "2026-11-19", factcheck: "verifier-e5s3 (reports/verify/e5s3.md)", teacher: null },
  requires: ["e4s4l3", "e4s4l5", "e4s2l5", "e4s8l1"],
  badges: [
    { id: "e5s3boss", name: "Food fair star", icon: "trophy", desc: "Finish the final lesson “Food and drink”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s3l1",
      title: "Food and drink: my favourite meals",
      short: "Meals",
      icon: "pot",
      status: "verified",
      why: "What do you have for breakfast? Talk about your meals and your favourite food.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What does Taras have for breakfast?",
          body: `<p class="lead">Taras lives in Lviv. He writes to his penfriend Emma in England.</p><p><i>For breakfast, I have eggs and bread. At school, I have soup for lunch. My favourite meal is dinner. Mum often makes varenyky. They’re a Ukrainian dish with potato inside. Yum! What about you?</i></p><p>What do you have for breakfast?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras has breakfast. When is it?</p>`,
          opts: [
            "in the morning",
            "in the afternoon",
            "in the evening"
          ],
          correct: 0,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "Breakfast is in the <b>morning</b>. The next screen shows all the meals."
        },
        {
          type: "info",
          title: "Meals, food and drinks",
          body: `<ul><li><b><u>break</u>fast</b> → in the morning</li><li><b>lunch</b> → in the middle of the day</li><li><b><u>din</u>ner</b> → in the evening</li></ul><p><b>Food:</b> bread, eggs, cheese, fish, soup, po<u>ta</u>toes, to<u>ma</u>toes</p><p><b>Drinks:</b> milk, water, juice, tea</p><p>For breakfast, I <b>have</b> eggs. (I eat eggs.)<br>My <b><u>fa</u>vourite</b> meal is dinner.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it food or a drink?</p>`,
          bins: ["Food", "Drinks"],
          items: [
            ["bread", 0],
            ["eggs", 0],
            ["cheese", 0],
            ["potatoes", 0],
            ["milk", 1],
            ["juice", 1],
            ["tea", 1],
            ["water", 1]
          ],
          hint: "Do you eat it or drink it?",
          fbOk: "Yes!",
          fbBad: "Do you eat it or drink it?",
          fbText: "We eat <b>bread</b>, <b>eggs</b>, <b>cheese</b> and <b>potatoes</b>. We drink <b>milk</b>, <b>juice</b>, <b>tea</b> and <b>water</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Emma has eggs at 8 o’clock in the morning. Which meal is it?</p>`,
          opts: [
            "lunch",
            "breakfast",
            "dinner"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the meals again. Which one is in the morning?",
          fbText: "In the morning, we have <b>breakfast</b>. Lunch is in the middle of the day. Dinner is in the evening."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+break|fast", "+din|ner", "po|+ta|to", "to|+ma|to"],
          hint: "Look at the underlined parts on the list of meals and food.",
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>break</u>fast, <u>din</u>ner – the first part is strong. po<u>ta</u>to, to<u>ma</u>to – the middle part is strong."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: [
            "What do you have for breakfast?",
            "What’s your favourite drink?",
            "When do you have lunch?",
            "Do you like fish?"
          ],
          right: [
            "I have eggs and bread.",
            "It’s orange juice.",
            "At one o’clock.",
            "No, I don’t."
          ],
          hint: "Look at the question words: What, When, Do.",
          fbOk: "Yes!",
          fbText: "<b>What</b> do you have for breakfast? – I have eggs and bread. <b>What’s</b> your favourite drink? – It’s orange juice. <b>When</b>…? – At one o’clock. <b>Do</b> you like…? – No, I don’t."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about her food.</p>`,
          text: "My favourite {*meal|drink} is lunch. For breakfast, I {*have|has} bread and cheese. My favourite {*drink|meal} is milk.",
          hint: "Is lunch a meal or a drink? Is milk a meal or a drink?",
          fbOk: "Exactly.",
          fbBad: "Lunch and milk: which is a meal?",
          fbText: "Lunch is a <b>meal</b>. Milk is a <b>drink</b>. I <b>have</b> bread – not <i>I has</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Emma writes about her morning.</p>`,
          before: "At 8 o’clock in the morning, I have",
          after: ": eggs and milk.",
          answer: "breakfast",
          hint: "Which meal is in the morning?",
          fbOk: "Well done!",
          fbBad: "Which meal is in the morning?",
          fbText: "In the morning, we have <b>breakfast</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Taras.</p>`,
          text: "Hi Taras! I {*have|has} eggs for {*breakfast|dinner} in the morning. At one o’clock at school, I have sandwiches for {*lunch|breakfast}. My favourite {*drink|meal} is apple juice. What’s your favourite drink? Love, Emma",
          hint: "Look at the times: in the morning, at one o’clock.",
          fbOk: "Well done!",
          fbBad: "Look at the times again.",
          fbText: "I <b>have</b> eggs for <b>breakfast</b> in the morning. At one o’clock, I have sandwiches for <b>lunch</b>. Apple juice is a <b>drink</b>."
        }
      ],
      outro: {
        text: "Breakfast, lunch and dinner are meals. Say: For breakfast, I have… My favourite meal is…",
        learned: [
          "Name meals, food and drinks.",
          "Say what you have for breakfast, lunch and dinner.",
          "Ask and answer about your favourite food and drink."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s3l2",
      title: "An apple or some bread? Countable and uncountable",
      short: "Count it",
      icon: "scale",
      status: "verified",
      why: "Can you count it? Learn when to say a, an or some.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Six eggs and some bread",
          body: `<p class="lead">Oksana helps her grandma in Zelena Dolyna. This is Grandma’s shopping list.</p><p><i>six eggs<br>three apples<br>some bread<br>some milk<br>some rice</i></p><p>Why <b>six eggs</b>, but <b>some bread</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Grandma wants bread. Which is correct?</p>`,
          opts: [
            "a bread",
            "two breads",
            "some bread"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>some bread</b>. Why? Look at the next screen."
        },
        {
          type: "info",
          title: "Can you count it?",
          body: `<p>We can count eggs: one egg, two egg<b>s</b>. We can’t count bread, milk or rice.</p><ul><li>We can count it → <b>countable</b>:<br><b>a</b> sandwich, <b>an</b> apple, three apple<b>s</b></li><li>We can’t count it → <b>uncountable</b>:<br><b>some</b> bread, <b>some</b> milk, <b>some</b> rice</li></ul><p>Not: <s>a bread</s>, <s>rices</s>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Can you count it?</p>`,
          bins: ["Countable", "Uncountable"],
          items: [
            ["sandwiches", 0],
            ["eggs", 0],
            ["apples", 0],
            ["bananas", 0],
            ["bread", 1],
            ["milk", 1],
            ["rice", 1],
            ["water", 1]
          ],
          hint: "Can you say one, two, three?",
          fbOk: "Yes!",
          fbBad: "Can you say two of it?",
          fbText: "Two sandwiches, six eggs, three apples, four bananas: they’re <b>countable</b>. Bread, milk, rice and water are <b>uncountable</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana and Grandma have lunch.</p>`,
          text: "Oksana has got {*an|a} apple and {*a|some} sandwich. Grandma has got {*some|a} bread and {*some|an} rice.",
          hint: "Can you count it? Is it one thing?",
          fbOk: "Exactly.",
          fbBad: "Can you count it?",
          fbText: "One apple, one sandwich: <b>an</b> apple, <b>a</b> sandwich. Bread and rice: we can’t count them, so <b>some</b> bread, <b>some</b> rice."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which shopping list is correct?</p>`,
          opts: [
            "two apple, some milks, a sandwich",
            "two apples, some milk, a sandwich",
            "two apples, a milk, some sandwich"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Check each word: can you count it?",
          fbText: "Two apple<b>s</b> – with -s. <b>Some milk</b> – no -s, we can’t count milk. <b>A sandwich</b> – one thing."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Two words in Grandma’s note are wrong.</p>`,
          text: "Oksana, please buy [a] bread, some milk, six eggs and some [rices].",
          hint: "Can you count bread? Can you count rice?",
          fbOk: "Good eye!",
          fbBad: "Look at bread and rice.",
          fbText: "We can’t count bread and rice. So it’s <b>some bread</b>, not <s>a bread</s>, and <b>some rice</b>, not <s>rices</s>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana writes to Grandma.</p>`,
          tiles: ["we", "need", "some", "rice", "and", "an", "apple"],
          answer: ["We need some rice and an apple.", "We need an apple and some rice."],
          extra: ["a"],
          hint: "Start with We need. Rice: can you count it?",
          fbOk: "Well done!",
          fbText: "<b>We need some rice and an apple.</b> Rice: <b>some</b>. One apple: <b>an</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the word.",
          body: `<p>Oksana buys vegetables for Grandma.</p>`,
          before: "one potato → three",
          answer: "potatoes",
          hint: "Potato is countable. How do we write three of them?",
          fbOk: "Yes!",
          fbBad: "Remember the food list: bread, eggs, cheese, po…",
          fbText: "One potato, three <b>potatoes</b> – with <b>-es</b>, like tomato → tomatoes."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana is at the shop. She writes to Grandma.</p>`,
          text: "Hi Grandma! I’m at the shop. I’ve got {*some|a} bread, {*some|a} milk and six {*eggs|egg}. I’ve also got {*an|a} apple for you. Love, Oksana",
          hint: "Can you count it? One thing or more?",
          fbOk: "Well done!",
          fbBad: "Can you count bread and milk?",
          fbText: "<b>Some</b> bread, <b>some</b> milk: uncountable. Six egg<b>s</b>: countable, with -s. <b>An</b> apple: one apple."
        }
      ],
      outro: {
        text: "Countable: an apple, three apples. Uncountable: some bread, some milk.",
        learned: [
          "Say which food is countable and which is uncountable.",
          "Use a, an and some with food.",
          "Write a shopping list."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s3l3",
      title: "Is there any milk? Some and any",
      short: "Some, any",
      icon: "eye",
      status: "verified",
      why: "Check the kitchen before you cook. Ask: Is there any milk?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Pancakes for breakfast?",
          body: `<p class="lead">It’s Saturday. Andrii and his dad want to make pancakes. They need flour, milk and eggs.</p><p><b>Dad:</b> Is there any milk?<br><b>Andrii:</b> Yes, there is some milk in the fridge.<br><b>Dad:</b> Are there any eggs?<br><b>Andrii:</b> No, there aren’t any eggs.<br><b>Dad:</b> Let’s go to the shop!</p><p>When do they say <b>some</b>? When do they say <b>any</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>There is no bread in the kitchen. What does Dad say?</p>`,
          opts: [
            "There is any bread.",
            "There isn’t any bread.",
            "There isn’t some bread."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Dad says: <b>There isn’t any bread.</b> With <i>not</i>, we say <b>any</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "Some and any",
          body: `<ul><li>(+) There is <b>some</b> milk.<br>There are <b>some</b> eggs.</li><li>(−) There isn’t <b>any</b> milk.<br>We haven’t got <b>any</b> eggs.</li><li>(?) Is there <b>any</b> milk?<br>Have you got <b>any</b> eggs?</li></ul><p>milk, flour → there <b>is</b> (uncountable)<br>eggs, apples → there <b>are</b> (countable, with -s)</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii looks in the kitchen.</p>`,
          text: "There is {*some|any} flour. There aren’t {*any|some} eggs. {*Is|Are} there any milk? There {*are|is} some apples.",
          hint: "Is it a (+) or a (−) sentence? Can you count it?",
          fbOk: "Exactly.",
          fbBad: "Look at the table again: (+), (−) or (?)?",
          fbText: "There is <b>some</b> flour (+). There aren’t <b>any</b> eggs (−). <b>Is</b> there any milk? – milk is uncountable. There <b>are</b> some apples – apples are countable."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii looks in the fridge. There is no water. What does he say?</p>`,
          opts: [
            "There isn’t any water.",
            "There aren’t any water.",
            "There isn’t some water."
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Water: is or are? With not: some or any?",
          fbText: "Water is uncountable: there <b>is</b>. With <i>not</i>, we say <b>any</b>: <b>There isn’t any water.</b>"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "There are any apples.",
            "There is some milk.",
            "There isn’t some bread.",
            "Is there any flour?",
            "There aren’t any eggs."
          ],
          correct: [1, 3, 4],
          hint: "(+) some, (−) any, (?) any.",
          fbOk: "Well done!",
          fbBad: "Check: (+), (−) or (?)?",
          fbText: "Correct: There is <b>some</b> milk. Is there <b>any</b> flour? There aren’t <b>any</b> eggs. Not: <s>There are any apples</s> – it’s (+), so <b>some</b>. Not: <s>There isn’t some bread</s> – it’s (−), so <b>any</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word is wrong.</p>`,
          text: "Dad: We haven’t got [some] eggs. Andrii: But we have got some milk.",
          hint: "Find the (−) sentence.",
          fbOk: "Good eye!",
          fbBad: "Which sentence has not?",
          fbText: "With <i>not</i>, we say <b>any</b>: We haven’t got <b>any</b> eggs. <b>We have got some milk</b> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Dad looks in the fridge. There are no eggs.</p>`,
          tiles: ["we", "haven’t", "got", "any", "eggs"],
          answer: ["We haven’t got any eggs.", "Haven’t we got any eggs?"],
          extra: ["some"],
          hint: "Start with We. It’s a (−) sentence.",
          fbOk: "Good eye!",
          fbText: "<b>We haven’t got any eggs.</b> With <i>not</i>, we say <b>any</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii and Dad are at the shop. Andrii writes to Mum.</p>`,
          text: "Hi Mum! We haven’t got {*any|some} eggs at home, so we’re at the shop. Is there {*any|a} flour? There {*is|are} some milk in the fridge, so we don’t need milk. Love, Andrii",
          hint: "(−) any, (?) any. Milk: is or are?",
          fbOk: "Well done!",
          fbBad: "Look at the table again.",
          fbText: "We haven’t got <b>any</b> eggs (−). Is there <b>any</b> flour? (?) – flour is uncountable, not <i>a flour</i>. There <b>is</b> some milk – milk is uncountable."
        }
      ],
      outro: {
        text: "(+) There is some milk. (−) There isn’t any milk. (?) Is there any milk?",
        learned: [
          "Use some in (+) sentences.",
          "Use any in (−) sentences and questions.",
          "Ask what food there is in the kitchen."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s3l4",
      title: "How much? How many? A lot of",
      short: "A lot of",
      icon: "chart",
      status: "verified",
      why: "Ask about food for a picnic: how much, how many? Answer: a lot of, not much, not many.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A picnic in the park",
          body: `<p class="lead">Mariia’s class has a picnic in a park in Kharkiv. Mariia writes to Taras.</p><p><i>We’ve got a lot of sandwiches and a lot of apples. We’ve got a lot of water too. But there isn’t much bread, and there aren’t many bananas.</i></p><p>Look: <b>a lot of</b> sandwiches, <b>a lot of</b> water. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>There are twenty apples! Which is correct?</p>`,
          opts: [
            "There are much apples.",
            "There is a lot of apple.",
            "There are a lot of apples."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>There are a lot of apples.</b> The next screen shows why."
        },
        {
          type: "info",
          title: "A lot of, much, many",
          body: `<ul><li>Countable: How <b>many</b> apples?<br>→ <b>a lot of</b> apples / <b>not many</b> apples</li><li>Uncountable: How <b>much</b> water?<br>→ <b>a lot of</b> water / <b>not much</b> water</li></ul><p>(+) We’ve got <b>a lot of</b> apples.<br>(−) We haven’t got <b>many</b> apples.<br>(−) There isn’t <b>much</b> water.</p><p><b>a lot of</b> → countable and uncountable</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia and her teacher check the picnic food.</p>`,
          text: "How {*many|much} sandwiches have we got? How {*much|many} water is there? There isn’t {*much|many} bread. There aren’t {*many|much} bananas.",
          hint: "Can you count it?",
          fbOk: "Exactly.",
          fbBad: "Sandwiches and bananas, or water and bread?",
          fbText: "Sandwiches and bananas – countable: <b>many</b>. Water and bread – uncountable: <b>much</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>There are only two bananas. What does Mariia say?</p>`,
          opts: [
            "We’ve got a lot of bananas.",
            "We haven’t got many bananas.",
            "We haven’t got much bananas."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Two bananas: a lot or not many? Bananas: much or many?",
          fbText: "Two bananas is not a lot. Bananas are countable, so <b>We haven’t got many bananas.</b>"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word is wrong.</p>`,
          text: "There are a lot of apples. There isn’t [many] bread. How many sandwiches have we got?",
          hint: "Check each much and many.",
          fbOk: "Good eye!",
          fbBad: "Can you count bread?",
          fbText: "Bread is uncountable: There isn’t <b>much</b> bread. <b>A lot of apples</b> and <b>How many sandwiches</b> are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia asks her teacher about water.</p>`,
          tiles: ["How", "much", "water", "have", "we", "got"],
          answer: "How much water have we got?",
          extra: ["many"],
          keepCase: true,
          hint: "Start with How. Can you count water?",
          fbOk: "Well done!",
          fbBad: "Water is uncountable: much or many?",
          fbText: "<b>How much water have we got?</b> Water is uncountable, so it’s <b>much</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia’s teacher wants to make pancakes. She asks about eggs.</p>`,
          before: "How",
          after: "eggs do we need?",
          answer: "many",
          hint: "Can you count eggs?",
          fbOk: "Yes!",
          fbBad: "Eggs are countable. Look at the table again.",
          fbText: "Eggs are countable: How <b>many</b> eggs do we need?"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Taras at the picnic.</p>`,
          text: "Hi Taras! Our picnic is great. We’ve got {*a lot of|much} sandwiches. But there isn’t {*much|many} bread now, and there aren’t {*many|much} apples. How {*much|many} water have you got at your picnic? Love, Mariia",
          hint: "(+) a lot of. (−) and (?): can you count it?",
          fbOk: "Well done!",
          fbBad: "Can you count it?",
          fbText: "We’ve got <b>a lot of</b> sandwiches (+). There isn’t <b>much</b> bread, there aren’t <b>many</b> apples. How <b>much</b> water? – water is uncountable."
        }
      ],
      outro: {
        text: "How many apples? How much water? A lot of apples, a lot of water. Not many apples, not much water.",
        learned: [
          "Ask How much…? and How many…?",
          "Say a lot of in (+) sentences.",
          "Say not much and not many in (−) sentences."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s3l5",
      title: "Would you like some juice? Offers",
      short: "Offers",
      icon: "users",
      status: "verified",
      why: "Offer food to a friend. Say “Yes, please” or “No, thank you”.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Would you like some juice?",
          body: `<p class="lead">Ostap visits his friend Taras at home in Lviv. Taras’s mum is in the kitchen.</p><p><b>Mum:</b> Would you like some juice, Ostap?<br><b>Ostap:</b> Yes, please!<br><b>Mum:</b> Would you like a sandwich?<br><b>Ostap:</b> No, thank you. I’m not hungry.</p><p>How does Mum offer food? How does Ostap answer?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mum offers tea to Ostap. What does she say?</p>`,
          opts: [
            "Do you like some tea?",
            "Would you like some tea?",
            "You like some tea?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Mum says: <b>Would you like some tea?</b> It’s polite. Look at the next screen."
        },
        {
          type: "info",
          title: "Offers",
          body: `<p>Offer food or drinks: <b>Would you like</b>…?</p><ul><li>Would you like <b>some</b> juice? (uncountable)</li><li>Would you like <b>a</b> biscuit? / <b>an</b> apple? (one thing)</li></ul><p>Answer: <b>Yes, please.</b> / <b>No, thank you.</b></p><p>In offers, we usually say <b>some</b>.</p><p><b>Do you like</b> fish? → always, every day<br><b>Would you like</b> some fish? → now</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Ostap is hungry. Taras’s mum has got sandwiches. What does she say?</p>`,
          opts: [
            "Would you like a sandwich?",
            "Do you like a sandwich?",
            "Would you like some sandwich?"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "She offers food now. And a sandwich: one thing.",
          fbText: "To offer food now, we say <b>Would you like</b>…? A sandwich is countable: <b>a</b> sandwich. <i>Do you like…?</i> asks about every day."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Taras’s mum offers food to Ostap.</p>`,
          text: "Mum: Would you like {*some|a} bread? Ostap: Yes, {*please|I do}. Mum: Would you like {*a|some} sandwich too? Ostap: No, {*thank you|I don’t}. I’m not hungry now.",
          hint: "Look at the answers on the screen: Yes, please. / No, thank you.",
          fbOk: "Exactly.",
          fbBad: "Look at the screen with offers again.",
          fbText: "Bread is uncountable: <b>some</b> bread. A sandwich: one thing, <b>a</b> sandwich. Answer an offer: <b>Yes, please.</b> / <b>No, thank you.</b> <i>Yes, I do</i> answers <i>Do you like…?</i>"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: [
            "Would you like a biscuit?",
            "Do you like fish?",
            "What would you like?",
            "Are you hungry?"
          ],
          right: [
            "Yes, please. I love biscuits!",
            "No, I don’t.",
            "I’d like some soup, please.",
            "Yes, I am."
          ],
          hint: "Look at the first word of each question.",
          fbOk: "Well done!",
          fbText: "<b>Would</b> you like a biscuit? – Yes, please. <b>Do</b> you like fish? – No, I don’t. <b>What</b> would you like? – I’d like some soup. <b>Are</b> you hungry? – Yes, I am."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Ostap is at Taras’s home. Mum offers a biscuit.</p>`,
          before: "Mum:",
          after: "you like a biscuit?",
          answer: "would",
          hint: "It’s an offer. Look at the screen with offers.",
          fbOk: "Yes!",
          fbBad: "Look at the screen with offers again.",
          fbText: "<b>Would</b> you like a biscuit? This is an offer. <i>Do you like…?</i> asks about every day."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras offers tea to Ostap.</p>`,
          tiles: ["Would", "you", "like", "some", "tea"],
          answer: "Would you like some tea?",
          extra: ["likes"],
          keepCase: true,
          hint: "Start with the offer: Would you…",
          fbOk: "Good eye!",
          fbBad: "Look at the offers again: Would you like…?",
          fbText: "<b>Would you like some tea?</b> After <i>Would you</i>, we say <b>like</b>, not <i>likes</i>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p><b>Café Smachno, Kyiv</b><br>Borscht – ₴80<br>Varenyky – ₴90<br>Pancakes – ₴70<br>Tea – ₴30</p><p>Sofiia is at the café with her dad.</p>`,
          text: "Waiter: Hello! What {*would|do} you like? Sofiia: I’d like some varenyky, please. Waiter: Would you like {*some|a} pancakes too? Sofiia: No, {*thank you|I don’t}. Waiter: Would you like some tea? Sofiia: Yes, {*please|I do}.",
          hint: "Look at the offers and the answers again.",
          fbOk: "Well done!",
          fbBad: "Look at the screen with offers again.",
          fbText: "What <b>would</b> you like? Would you like <b>some</b> pancakes? – not <i>a pancakes</i>. Answer an offer: <b>No, thank you.</b> / <b>Yes, please.</b>"
        }
      ],
      outro: {
        text: "Offer: Would you like some juice? Would you like a biscuit? Answer: Yes, please. / No, thank you.",
        learned: [
          "Offer food and drinks: Would you like…?",
          "Say Yes, please or No, thank you.",
          "Order food in a café: I’d like…, please."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s3l6",
      title: "Dishes from Ukraine and the UK",
      short: "Dishes",
      icon: "globe",
      status: "verified",
      why: "Read about famous dishes from Ukraine and the UK. And read a simple recipe.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Borscht or fish and chips?",
          body: `<p class="lead">Taras and Emma make a poster for their schools: “Food in Ukraine and the UK”.</p><p>What do people eat in Ukraine? What do people eat in the UK?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Borscht is a famous Ukrainian dish. What is it?</p>`,
          opts: [
            "a drink",
            "a soup",
            "a cake"
          ],
          correct: 1,
          fbTitle: "Let’s read.",
          fbOk: "Good guess!",
          fbText: "Borscht is a <b>soup</b>. Read more on the next screens."
        },
        {
          type: "info",
          title: "Words for food and cooking",
          body: `<ul><li>a <b>dish</b> – food you cook: borscht, pancakes</li><li>a <b><u>re</u>cipe</b> – how to cook a dish</li><li><b><u>beet</u>root</b> – a dark red vegetable</li><li><b>oats</b> – we make porridge with them</li><li><b>mix</b>, <b>add</b>, <b>cook</b> – what you do in a recipe</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food in Ukraine and the UK, part 1 of 3",
          title: "Read and choose.",
          body: `<p><b>Ukraine</b></p><p><i>Borscht is a famous Ukrainian dish. It is a soup with beetroot. Varenyky are a Ukrainian dish too. Inside, there is potato or cheese.</i></p><p>What is in borscht?</p>`,
          opts: [
            "fish",
            "oats",
            "beetroot"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Find borscht in the text.",
          fbText: "Borscht is a soup with <b>beetroot</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food in Ukraine and the UK, part 2 of 3",
          title: "Read and choose.",
          body: `<p><b>The UK</b></p><p><i>Fish and chips is a popular dish in the UK. Chips are long, thin pieces of potato. People often buy fish and chips at a shop and eat it at home. Porridge is a hot breakfast. People make it with oats and milk or water.</i></p><p>When do people eat porridge?</p>`,
          opts: [
            "for breakfast",
            "for dinner",
            "at a picnic"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Find porridge in the text.",
          fbText: "Porridge is a hot <b>breakfast</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Food in Ukraine and the UK, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><b>Pancake Day</b></p><p><i>On Pancake Day, people in the UK make pancakes. This is Emma’s recipe.<br>You need: a cup of flour, two eggs, a cup of milk.<br>1. Put the flour in a bowl.<br>2. Add the eggs and the milk. Mix.<br>3. Cook the pancakes in a hot pan. Ask an adult to help you!</i></p><p>What do you need for Emma’s pancakes?</p>`,
          opts: [
            "flour",
            "fish",
            "eggs",
            "rice",
            "milk"
          ],
          correct: [0, 2, 4],
          hint: "Read the “You need” part.",
          fbOk: "Well done!",
          fbBad: "Read the “You need” part again.",
          fbText: "Emma needs <b>flour</b>, <b>eggs</b> and <b>milk</b>. There is no fish or rice in the recipe."
        },
        {
          type: "info",
          title: "Taras and Emma’s poster",
          body: `<p><b>Ukraine</b></p><ul><li><b>borscht</b> → a soup with beetroot</li><li><b>varenyky</b> → potato or cheese inside</li></ul><p><b>The UK</b></p><ul><li><b>fish and chips</b> → a popular dish</li><li><b>porridge</b> → oats and milk or water</li><li><b>Pancake Day</b> → pancakes</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: [
            "Borscht is a soup with",
            "Inside varenyky, there is",
            "People make porridge with",
            "On Pancake Day, people make"
          ],
          right: [
            "beetroot.",
            "potato or cheese.",
            "oats and milk or water.",
            "pancakes."
          ],
          hint: "Look at the poster again: Ukraine, the UK, Pancake Day.",
          fbOk: "Yes!",
          fbText: "Borscht is a soup with <b>beetroot</b>. Inside varenyky, there is <b>potato or cheese</b>. Porridge: <b>oats and milk or water</b>. On Pancake Day, people make <b>pancakes</b>."
        },
        {
          type: "word",
          sk: "cult",
          title: "Write the word.",
          body: `<p>It’s a famous Ukrainian soup with beetroot.</p>`,
          before: "It’s",
          answer: ["borscht", "borshch", "borsch"],
          hint: "Look at the poster: Ukraine.",
          fbOk: "Well done!",
          fbBad: "Look at the poster again.",
          fbText: "<b>Borscht</b> is a famous Ukrainian soup with beetroot."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes for the poster.</p>`,
          text: "My favourite Ukrainian dish is borscht. It’s a {*soup|drink} with beetroot. For Pancake Day, Emma needs {*some|a} flour, two {*eggs|egg} and {*some|a} milk. {*Would|Do} you like some pancakes?",
          hint: "Flour and milk: can you count them? The last sentence is an offer.",
          fbOk: "Well done!",
          fbBad: "Look at the text and the recipe again.",
          fbText: "Borscht is a <b>soup</b>. <b>Some</b> flour, <b>some</b> milk: uncountable. Two egg<b>s</b>: countable. <b>Would</b> you like some pancakes? – an offer."
        }
      ],
      outro: {
        text: "Borscht and varenyky are Ukrainian dishes. Fish and chips and porridge are popular in the UK.",
        learned: [
          "Name famous dishes from Ukraine and the UK.",
          "Read a short text about food.",
          "Read a simple recipe."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s3l7",
      title: "Food fair",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help at the food fair?",
          body: `<p class="lead">Taras’s school in Lviv has a food fair. Pupils cook dishes from Ukraine and the UK.</p><p>Help Taras and his friends. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>The fair starts at nine o’clock in the morning. Before the fair, Taras has eggs and bread at home. Which meal is it?</p>`,
          opts: [
            "lunch",
            "dinner",
            "breakfast"
          ],
          correct: 2,
          pre: "e5s3l1",
          fbOk: "Right.",
          fbBad: "Which meal is in the morning?",
          fbText: "In the morning, we have <b>breakfast</b>. Lunch is in the middle of the day. Dinner is in the evening."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Taras writes a list for the fair.</p>`,
          text: "We need {*some|a} rice, {*a|some} sandwich for Ostap and three {*bananas|banana}.",
          pre: "e5s3l2",
          hint: "Can you count it?",
          fbOk: "Exactly.",
          fbBad: "Rice: can you count it?",
          fbText: "Rice is uncountable: <b>some</b> rice. One sandwich: <b>a</b> sandwich. Three banana<b>s</b>: with -s."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>There is no milk at the fair. What does Taras say?</p>`,
          opts: [
            "There isn’t some milk.",
            "There isn’t any milk.",
            "There aren’t any milk."
          ],
          correct: 1,
          pre: "e5s3l3",
          fbOk: "Yes!",
          fbBad: "With not: some or any? Milk: is or are?",
          fbText: "Milk is uncountable: there <b>is</b>. With <i>not</i>: <b>any</b>. <b>There isn’t any milk.</b>"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras and his teacher make pancakes.</p>`,
          text: "How {*many|much} pancakes do we need? – A lot! We’ve got {*a lot of|much} eggs, but we haven’t got {*much|many} flour.",
          pre: "e5s3l4",
          hint: "Can you count it? Is it (+) or (−)?",
          fbOk: "Well done!",
          fbBad: "Pancakes and eggs, or flour?",
          fbText: "Pancakes are countable: How <b>many</b>? (+): We’ve got <b>a lot of</b> eggs. Flour is uncountable: we haven’t got <b>much</b> flour."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Taras offers borscht to a teacher.</p>`,
          tiles: ["Would", "you", "like", "some", "borscht"],
          answer: "Would you like some borscht?",
          extra: ["likes"],
          keepCase: true,
          pre: "e5s3l5",
          fbOk: "Good eye!",
          fbBad: "Start with the offer: Would you…",
          fbText: "<b>Would you like some borscht?</b> It’s a polite offer."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Taras’s mum makes varenyky for the fair. What is inside?</p>`,
          opts: [
            "potato or cheese",
            "beetroot",
            "oats"
          ],
          correct: 0,
          pre: "e5s3l6",
          fbOk: "Right.",
          fbBad: "Remember the text about Ukraine.",
          fbText: "Inside varenyky, there is <b>potato or cheese</b>. Beetroot is in borscht. Oats are in porridge."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about food, ask how much and how many, and offer food politely.",
        learned: [
          "Name meals, food and dishes from Ukraine and the UK.",
          "Use a, an, some, any, much, many and a lot of.",
          "Offer food: Would you like…? – Yes, please. / No, thank you."
        ]
      }
    }
  ]
});
