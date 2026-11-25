/* Слід · Англійська мова, 6 клас — «Food traditions and dishes» (e6s3)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), тема «Харчування» — традиції харчування; назви страв
   (с. 20, розд. 4.2.2); граматика A2 — Past simple: affirmative, negative, questions; Passives: Present simple affirmative;
   Adverbs: sequencing (с. 21–22, розд. 4.4); читання A2 — меню, прості рецепти (с. 16):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e4s7l5 (went, swam, ate, saw), e5s9l5 (Past Simple -ed), e5s8l5 (was / were),
   e5s3l6 (borscht, varenyky, recipe) — reports/verify/plan-eng-g6.md §6.
   Герої — серія 4–5 кл., на два роки старші: Taras і його друг Ostap (Lviv), Oksana і бабуся Hanna (Zelena Dolyna),
   Andrii, сестра Sofiia, бабуся Nina й дідусь Vasyl (Kyiv, Chernihiv), Mariia (Kharkiv), Emma і Tom (England).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги, рецепти й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос і факти про страви — Cambridge Dictionary, OALD, en/uk.wikipedia, Wiktionary
   (URL — tasks/…/write-eng-g6-e6s3.md, «Нотатки агента»). borscht — як у e5s3 (CD, OALD, назва елемента ЮНЕСКО 2022).
   Статус: verified (verifier-e6s3, reports/verify/e6s3.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s3",
  grade: 6,
  weeks: [9, 13],
  title: "Food traditions and dishes",
  why: "To name dishes and say what is in them. And to talk about food traditions and meals you had.",
  requires: ["e4s7l5", "e5s9l5", "e5s8l5", "e5s3l6"],
  meta: { author: "writer-e6s3", created: "2026-11-20", factcheck: "verifier-e6s3 (reports/verify/e6s3.md)", teacher: null },
  badges: [
    { id: "e6s3boss", name: "Young chef", icon: "trophy", desc: "Finish the final lesson “Food traditions and dishes”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s3l1",
      title: "What’s on the menu? Names of dishes",
      short: "Menu",
      icon: "pot",
      status: "verified",
      why: "Read a menu in a café. Say what you’d like for each part of the meal.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What’s on the menu?",
          body: `<p class="lead">Taras and his friend Ostap are at a café in Lviv. They read the menu.</p><p><b>Café Kalyna – Menu</b></p><ul><li><b>Starters:</b> tomato soup, mushroom salad</li><li><b>Main courses:</b> roast chicken with potatoes, fried fish with rice, deruny with sour cream</li><li><b>Desserts:</b> chocolate cake, ice cream, syrnyky with jam</li></ul><p><b>Ostap:</b> I’m really hungry! I’d like a starter and a main course.<br><b>Taras:</b> I’m not hungry. I’d just like a dessert.</p><p>What are starters, main courses and desserts?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras wants something sweet. Which part of the menu does he read?</p>`,
          opts: [
            "Starters",
            "Main courses",
            "Desserts"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Desserts are sweet: chocolate cake, ice cream. The next screen shows all the parts of a menu."
        },
        {
          type: "info",
          title: "Starter, main course, dessert",
          body: `<ul><li>a <b><u>star</u>ter</b> → a small dish before the main course: soup, <u>sal</u>ad</li><li>a <b>main course</b> → the big dish: roast chicken, fish with rice</li><li>a <b>des<u>sert</u></b> → a sweet dish at the end: cake, ice cream</li></ul><p>A <b><u>men</u>u</b> has these parts. <u>Mush</u>room soup is a starter.</p><p>The <u>underlined</u> part is strong. <i>Dessert</i> has two letters <i>s</i>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it a dessert or not?</p>`,
          bins: ["Starters and main courses", "Desserts"],
          items: [
            ["tomato soup", 0],
            ["mushroom salad", 0],
            ["roast chicken", 0],
            ["fried fish with rice", 0],
            ["chocolate cake", 1],
            ["ice cream", 1],
            ["syrnyky with jam", 1],
            ["pancakes with sugar", 1]
          ],
          hint: "Is it sweet?",
          fbOk: "Yes!",
          fbBad: "A dessert is sweet. Is jam sweet?",
          fbText: "Cake, ice cream, syrnyky with jam and pancakes with sugar are sweet: they’re <b>desserts</b>. Soup and salad are starters. Chicken and fish are main courses."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Ostap: “I’m very hungry. I’d like a big dish: chicken with potatoes.”</p><p>Which part of the menu is it?</p>`,
          opts: [
            "a starter",
            "a main course",
            "a dessert"
          ],
          correct: 1,
          hint: "Is it small, big or sweet?",
          fbOk: "Right.",
          fbBad: "Look at the menu parts again.",
          fbText: "A big dish of chicken with potatoes is a <b>main course</b>. A starter is small. A dessert is sweet."
        },
        {
          type: "info",
          title: "Fried, boiled, roast",
          body: `<p>How is the food cooked?</p><ul><li><b>fried</b> → in hot oil in a pan: fried fish</li><li><b>boiled</b> → in very hot water: boiled eggs</li><li><b>roast</b> → in the <b><u>ov</u>en</b> (a hot box for cooking): roast chicken</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Ostap’s mum cooks lunch.</p>`,
          text: "She cooks eggs in very hot water. They’re {*boiled|fried|roast} eggs. She cooks fish in hot oil in a pan. It’s {*fried|boiled|roast} fish. She cooks a chicken in the oven. It’s {*roast|boiled|fried} chicken.",
          hint: "Where is it cooked: in water, in oil or in the oven?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: water, oil, oven.",
          fbText: "In very hot water → <b>boiled</b> eggs. In hot oil → <b>fried</b> fish. In the oven → <b>roast</b> chicken."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+men|u", "+sal|ad", "+mush|room", "des|+sert"],
          hint: "Look at the underlined parts on the screen “Starter, main course, dessert”.",
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>men</u>u, <u>sal</u>ad, <u>mush</u>room: the first part is strong. des<u>sert</u>: the second part is strong."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Taras doesn’t want soup or chicken. He wants something sweet at the end of the meal.</p>`,
          before: "He’d like a",
          after: ": ice cream, please.",
          answer: ["dessert", "pudding", "sweet"],
          hint: "Look at the menu parts. Which part is sweet?",
          fbOk: "Yes!",
          fbBad: "A sweet dish at the end of a meal is a …",
          fbText: "A <b>dessert</b> is a sweet dish at the end of a meal. Two letters <i>s</i>: des<b>s</b>ert. In the UK, people also say <i>pudding</i>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p><b>Menu:</b> tomato soup · fried fish with rice · chocolate cake</p><p>Ostap and Taras order at Café Kalyna.</p>`,
          text: "Waiter: What would you like? Ostap: For my {*starter|dessert}, I’d like the tomato soup, please. Then, for my {*main course|starter}, I’d like the {*fried|boiled} fish with rice. Taras: Just a {*dessert|main course} for me: chocolate cake, please.",
          hint: "Soup comes first. Cake is sweet. Look at the menu.",
          fbOk: "Well done!",
          fbBad: "Look at the menu and the menu parts again.",
          fbText: "Soup is a <b>starter</b>. Fish with rice is a <b>main course</b>, and the menu says <b>fried</b> fish. Chocolate cake is a <b>dessert</b>."
        }
      ],
      outro: {
        text: "A menu has starters, main courses and desserts. Food can be fried, boiled or roast.",
        learned: [
          "Name the parts of a menu: starter, main course, dessert.",
          "Say how food is cooked: fried, boiled, roast.",
          "Order a meal in a café."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s3l2",
      title: "What’s in it? It’s made with…",
      short: "Made with",
      icon: "scale",
      status: "verified",
      why: "Tell a friend what is in a dish. Use is made with and are made with.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What are deruny made with?",
          body: `<p class="lead">Oksana sends Emma a photo from home in Zelena Dolyna.</p><p><i>Look! These are Grandma Hanna’s deruny. Deruny are potato pancakes. They’re made with potatoes, an egg and a little flour. They’re eaten with sour cream. Yum!</i></p><p><b>Emma:</b> They look great! And what are syrnyky made with?</p><p>What does <b>made with</b> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “Deruny are made with potatoes.” What does it mean?</p>`,
          opts: [
            "There are potatoes in deruny.",
            "There are deruny in potatoes.",
            "Deruny make potatoes."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Grandma cooks deruny with potatoes. So there are potatoes in deruny. The next screen shows the rule."
        },
        {
          type: "info",
          title: "It’s made with…",
          body: `<p>Grandma <b>makes</b> deruny with potatoes. →<br>Deruny <b>are made</b> with potatoes.</p><ul><li>one dish → <b>is</b> + made: Borscht <b>is made</b> with beetroot.</li><li>two or more → <b>are</b> + made: Deruny <b>are made</b> with potatoes.</li><li>cook → <b>is cooked</b>, serve (= give food) → <b>is served</b>, eat → <b>is eaten</b></li></ul><p>This is the <b>Present Simple passive</b>. It tells us about the food, not the cook.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about Ukrainian dishes.</p>`,
          text: "Borscht {*is|are} made with beetroot. Deruny {*are|is} made with potatoes. Varenyky {*are|is} made with potato or cheese. Porridge {*is|are} made with oats.",
          hint: "One dish or more than one: borscht or deruny?",
          fbOk: "Exactly.",
          fbBad: "One → is made. Two or more → are made.",
          fbText: "Borscht and porridge: one dish → <b>is</b> made. Deruny and varenyky: more than one → <b>are</b> made."
        },
        {
          type: "info",
          title: "What’s in it?",
          body: `<p><b>Ukraine</b></p><ul><li><b>syrnyky</b> → made with <b>cottage cheese</b> (soft white cheese), eggs, flour and sugar</li><li><b>holubtsi</b> → made with <b>cabbage</b> (a big green vegetable), rice and meat</li></ul><p><b>The UK</b></p><ul><li><b>scones</b> → small round cakes, made with flour, milk and butter; eaten with jam and cream</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Deruny are made with", "Syrnyky are made with", "Holubtsi are made with", "Scones are eaten with"],
          right: ["potatoes.", "cottage cheese.", "cabbage, rice and meat.", "jam and cream."],
          hint: "Look at Oksana’s photo message and the list of dishes.",
          fbOk: "Well done!",
          fbBad: "Look at the list of dishes again.",
          fbText: "Deruny → <b>potatoes</b>. Syrnyky → <b>cottage cheese</b>. Holubtsi → <b>cabbage, rice and meat</b>. Scones are eaten with <b>jam and cream</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma writes about her favourite cake. Which sentence is correct?</p>`,
          opts: [
            "It’s made with chocolate.",
            "It made with chocolate.",
            "It’s make with chocolate."
          ],
          correct: 0,
          hint: "Look at the rule: is + made.",
          fbOk: "Right.",
          fbBad: "We need two words: is + made.",
          fbText: "<b>It’s made</b> = it <b>is made</b>. We need <i>is</i>, and <i>made</i>, not <i>make</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "Holubtsi [is] made with cabbage, rice and meat. Borscht is served with sour cream.",
          hint: "Holubtsi: one dish or more than one?",
          fbOk: "Good eye!",
          fbBad: "Check each is and are.",
          fbText: "Holubtsi are more than one, so they <b>are</b> made with cabbage, rice and meat. <b>Borscht is served</b> is correct: borscht is one dish."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>eat → ?</p>`,
          before: "In Oksana’s family, syrnyky are often",
          after: "for breakfast.",
          answer: "eaten",
          hint: "Look at the rule: eat → is …",
          fbOk: "Yes!",
          fbBad: "Look at the rule again: eat → …",
          fbText: "eat → <b>eaten</b>: In Oksana’s family, syrnyky are often <b>eaten</b> for breakfast."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma asks: “What do you eat with borscht?” Oksana answers.</p>`,
          tiles: ["Borscht", "is", "served", "with", "sour cream"],
          answer: "Borscht is served with sour cream.",
          extra: ["serves"],
          keepCase: true,
          hint: "Start with Borscht. Then is + served.",
          fbOk: "Right.",
          fbBad: "Look at the rule: is + served.",
          fbText: "<b>Borscht is served with sour cream.</b> One dish: <b>is</b> + served."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Oksana.</p>`,
          text: "Thank you for the photo! In the UK, we often have scones. They {*are|is} made with flour, milk and butter. They are {*eaten|ate|eat} with jam and cream. My mum’s apple cake {*is|are} made with apples, of course!",
          hint: "Scones: more than one. The cake: one.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: is or are + made, eaten.",
          fbText: "Scones → they <b>are</b> made. are + <b>eaten</b> (not <i>ate</i>). The apple cake: one → <b>is</b> made."
        }
      ],
      outro: {
        text: "Say what is in a dish: Borscht is made with beetroot. Deruny are made with potatoes.",
        learned: [
          "Say what a dish is made with.",
          "Use is made, are made, is served and is eaten.",
          "Name dishes from Ukraine and the UK: syrnyky, holubtsi, scones."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s3l3",
      title: "First, then, after that: a simple recipe",
      short: "Recipe",
      icon: "check",
      status: "verified",
      why: "Read and write a simple recipe. Show the steps with first, then, after that and finally.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How do you make syrnyky?",
          body: `<p class="lead">Oksana writes Grandma Hanna’s recipe for Emma.</p><p><b>Syrnyky</b><br>You need: cottage cheese, two eggs, some sugar, some flour.</p><p><i>First, put the cottage cheese in a bowl. Then add the eggs and the sugar. After that, add the flour and mix. Finally, make small round cakes and fry them. Ask an adult to help you!</i></p><p>First, then, after that, finally: why are these words in a recipe?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What does <b>finally</b> mean in Oksana’s recipe?</p>`,
          opts: [
            "the last step",
            "the first step",
            "the next step"
          ],
          correct: 0,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "<b>Finally</b> shows the last step: fry the syrnyky. Look at the next screen."
        },
        {
          type: "info",
          title: "First, then, after that, finally",
          body: `<p>A <b><u>re</u>cipe</b> tells you how to cook a dish, step by step.</p><ul><li><b>First,</b> → step 1</li><li><b>Then</b> / <b>After that,</b> → the next step</li><li><b>Finally,</b> → the last step</li></ul><p>Recipe verbs have no <i>you</i> and no <i>-s</i>: <b>Put</b> the cheese in a bowl. <b>Add</b> the eggs. <b>Mix</b>. <b>Fry</b> (= cook in hot oil).</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>What means the same as <b>then</b>?</p>`,
          opts: [
            "after that",
            "first",
            "finally"
          ],
          correct: 0,
          hint: "Which words show the next step?",
          fbOk: "Right.",
          fbBad: "Look at the list again.",
          fbText: "<b>Then</b> and <b>after that</b> both show the next step. <i>First</i> is step 1. <i>Finally</i> is the last step."
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>Emma’s recipe: a fruit salad.</p>`,
          items: [
            "First, wash two apples.",
            "Then cut the apples and a banana into small pieces.",
            "After that, put the pieces in a bowl.",
            "Finally, add some sugar and mix."
          ],
          shuffle: [2, 0, 3, 1],
          hint: "Find First and Finally. When do you have the pieces?",
          fbOk: "Good eye!",
          fbBad: "Look at the words First and Finally.",
          fbText: "<b>First</b>, wash the apples. <b>Then</b> cut the fruit into pieces. <b>After that</b>, put the pieces in a bowl. <b>Finally</b>, add sugar and mix."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes his recipe for a cheese sandwich.</p>`,
          text: "{*First|Finally}, put some butter on two pieces of bread. {*Then|First} add some cheese and a tomato. {*Finally|First}, put the second piece of bread on top. Your sandwich is ready!",
          hint: "Which step is the first? Which is the last?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: step 1, the next step, the last step.",
          fbText: "Step 1: <b>First</b>. The next step: <b>Then</b>. The last step: <b>Finally</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Ostap’s recipe is wrong.</p>`,
          text: "First, put the flour in a bowl. Then [adds] the milk and the eggs. Finally, mix it all.",
          hint: "Recipe verbs: with -s or without?",
          fbOk: "Good eye!",
          fbBad: "Check each verb: put, adds, mix.",
          fbText: "Recipe verbs have no <i>-s</i>: Then <b>add</b> the milk and the eggs. <b>Put</b> and <b>mix</b> are correct."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Step 4 is the last step in Oksana’s recipe.</p>`,
          before: "Step 4:",
          after: ", fry the syrnyky.",
          answer: ["finally", "lastly"],
          hint: "Which word shows the last step?",
          fbOk: "Right.",
          fbBad: "Look at the list: the last step.",
          fbText: "<b>Finally</b> shows the last step: <b>Finally</b>, fry the syrnyky."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes Oksana’s recipe in her notebook.</p>`,
          text: "{*First|Finally}, put the cottage cheese in a bowl. Then {*add|adds} the eggs and the sugar. After that, add the flour and {*mix|mixes}. {*Finally|First}, fry the syrnyky in a hot pan. At Oksana’s house, syrnyky {*are|is} eaten with sour cream or jam.",
          hint: "Step 1 and the last step. Recipe verbs: no -s.",
          fbOk: "Well done!",
          fbBad: "Look at the list and the recipe verbs again.",
          fbText: "<b>First</b> → step 1, <b>Finally</b> → the last step. Recipe verbs: <b>add</b>, <b>mix</b>, no <i>-s</i>. Syrnyky: more than one → <b>are</b> eaten."
        }
      ],
      outro: {
        text: "A recipe shows the steps: first, then, after that, finally. Recipe verbs have no you: Put, add, mix.",
        learned: [
          "Read a simple recipe.",
          "Show the order with first, then, after that and finally.",
          "Write recipe steps: Add the eggs. Mix."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s3l4",
      title: "We ate pancakes: irregular verbs",
      short: "Irregular verbs",
      icon: "star",
      status: "verified",
      why: "Tell a friend about a meal in the past. Learn the past of buy, make, eat and drink.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What did Andrii and his dad make?",
          body: `<p class="lead">Andrii writes to Emma about his Saturday.</p><p><i>Hi Emma! Last Saturday, Dad and I made pancakes. First, we went to the shop and bought some eggs. Then we made the pancakes. My sister Sofiia came into the kitchen. She ate five pancakes! I drank a big glass of milk. We had a great breakfast.<br>Andrii</i></p><p>Made, bought, came, ate: are they like <i>played</i> and <i>visited</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Today Andrii buys eggs. Last Saturday, he …</p>`,
          opts: [
            "buyed eggs.",
            "bought eggs.",
            "buys eggs."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Last Saturday, he <b>bought</b> eggs. <i>Buy</i> has a special past form. Look at the next screen."
        },
        {
          type: "info",
          title: "Irregular verbs",
          body: `<p>Regular verbs: + <b>-ed</b>. play → play<b>ed</b>, cook → cook<b>ed</b></p><p>Irregular verbs have special past forms. Learn them!</p><ul><li>buy → <b>bought</b>, come → <b>came</b></li><li>drink → <b>drank</b>, eat → <b>ate</b></li><li>have → <b>had</b>, make → <b>made</b></li><li>go → <b>went</b>, see → <b>saw</b></li></ul><p>I, you, he, she, we, they: the same form. She <b>ate</b>. We <b>ate</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Is it a regular or an irregular past form?</p>`,
          bins: ["Regular: -ed", "Irregular"],
          items: [
            ["cooked", 0],
            ["played", 0],
            ["visited", 0],
            ["tried", 0],
            ["bought", 1],
            ["drank", 1],
            ["came", 1],
            ["made", 1]
          ],
          hint: "Does it end in -ed?",
          fbOk: "Yes!",
          fbBad: "Look at the endings: -ed or a special form?",
          fbText: "<b>Cooked, played, visited, tried</b> end in -ed: regular. <b>Bought, drank, came, made</b> are special forms: irregular."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about last Sunday.</p>`,
          text: "Last Sunday, we {*went|goed} to Chernihiv. Grandma Nina {*made|maked} borscht. Grandad Vasyl {*bought|buyed} a cake. We {*had|haved} a big lunch.",
          hint: "Look at the list of irregular verbs.",
          fbOk: "Exactly.",
          fbBad: "These verbs are irregular. No -ed!",
          fbText: "go → <b>went</b>, make → <b>made</b>, buy → <b>bought</b>, have → <b>had</b>. Irregular verbs have no -ed."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>drink → ?</p>`,
          before: "Yesterday Sofiia",
          after: "two glasses of apple juice.",
          answer: "drank",
          hint: "Look at the list: drink → …",
          fbOk: "Well done!",
          fbBad: "Yesterday: what is the past of drink?",
          fbText: "drink → <b>drank</b>: Yesterday Sofiia <b>drank</b> two glasses of apple juice."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "We eated pancakes yesterday.",
            "We eat pancakes yesterday.",
            "We ate pancakes yesterday."
          ],
          correct: 2,
          hint: "Yesterday: the past. Is eat regular?",
          fbOk: "Right.",
          fbBad: "Eat is irregular. Look at the list.",
          fbText: "Yesterday is in the past. eat → <b>ate</b>: We <b>ate</b> pancakes yesterday. <i>Eated</i> is not a word."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s message is wrong.</p>`,
          text: "Yesterday I [eated] five pancakes! Then I drank some tea and went to the park.",
          hint: "Check each verb. Which one is irregular?",
          fbOk: "Good eye!",
          fbBad: "Check eat, drink and go.",
          fbText: "eat → <b>ate</b>: Yesterday I <b>ate</b> five pancakes. <b>Drank</b> and <b>went</b> are correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes about last Saturday.</p>`,
          tiles: ["we", "had", "pancakes", "for breakfast"],
          answer: ["We had pancakes for breakfast.", "For breakfast we had pancakes."],
          extra: ["have"],
          hint: "Last Saturday: have or had?",
          fbOk: "Right.",
          fbBad: "Last Saturday is in the past: have → had.",
          fbText: "<b>We had pancakes for breakfast.</b> Last Saturday: the past of <i>have</i> is <b>had</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes back to Andrii.</p>`,
          text: "Hi Andrii! Last Saturday, I {*went|go} to the market with Mum. We {*bought|buyed} some apples. Then Mum {*made|make} an apple cake, and Tom {*ate|eat} three pieces! Love, Emma",
          hint: "Last Saturday: use the past. These verbs are irregular.",
          fbOk: "Well done!",
          fbBad: "Look at the list of irregular verbs again.",
          fbText: "Last Saturday: <b>went</b>, <b>bought</b>, <b>made</b>, <b>ate</b>. Irregular verbs have special forms."
        }
      ],
      outro: {
        text: "Some verbs have special past forms: buy → bought, eat → ate, drink → drank, make → made.",
        learned: [
          "Use irregular past forms: bought, came, drank, ate, had, made.",
          "Tell a friend about a meal in the past.",
          "Find mistakes like eated and buyed."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s3l5",
      title: "Did you try it? I didn’t like it: questions and negatives",
      short: "Did, didn’t",
      icon: "voice",
      status: "verified",
      why: "Ask a friend about food they tried. Say what you didn’t eat or like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Did Emma try borscht?",
          body: `<p class="lead">Last December, Emma’s class visited Kyiv. Andrii asks Emma about the food.</p><p><b>Andrii:</b> Did you try Ukrainian food in Kyiv?<br><b>Emma:</b> Yes, I did! I tried borscht and varenyky.<br><b>Andrii:</b> Did you like the borscht?<br><b>Emma:</b> No, I didn’t. But I loved the varenyky!<br><b>Andrii:</b> Did you try deruny?<br><b>Emma:</b> No, I didn’t try them.</p><p>Look at <b>did</b> and <b>didn’t</b>. What comes after them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma didn’t … deruny in Kyiv.</p>`,
          opts: [
            "tried",
            "try",
            "tries"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Emma didn’t <b>try</b> deruny. After <i>didn’t</i>, we say <b>try</b>, not <i>tried</i>."
        },
        {
          type: "info",
          title: "Did you…? I didn’t…",
          body: `<ul><li>(?) <b>Did</b> you <b>try</b> borscht? – Yes, I <b>did</b>. / No, I <b>didn’t</b>.</li><li>(−) I <b>didn’t like</b> it. (didn’t = did not)</li><li>What <b>did</b> you <b>eat</b>? – I <b>ate</b> varenyky.</li></ul><p>After <b>did</b> and <b>didn’t</b>: <b>try</b>, not <s>tried</s>; <b>eat</b>, not <s>ate</s>.</p><p><b>try</b> food → eat it for the first time</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii asks Emma more questions.</p>`,
          text: "{*Did|Do} you go to a café in Kyiv last December? – Yes, I {*did|do}. What did you {*eat|ate} there? – Varenyky. Did your friends {*like|liked} the café? – Yes, they did.",
          hint: "Last December: did. After did: like or liked?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: after did, no past form.",
          fbText: "Last December: <b>Did</b> you go…? – Yes, I <b>did</b>. After <i>did</i>: What did you <b>eat</b>? Did your friends <b>like</b>…?"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii: “Did Emma like the varenyky?”</p><p>Emma loved them. What is the answer?</p>`,
          opts: [
            "Yes, she liked.",
            "Yes, she does.",
            "Yes, she did."
          ],
          correct: 2,
          hint: "Did she…? – Yes, she …",
          fbOk: "Right.",
          fbBad: "Look at the short answers in the rule.",
          fbText: "<b>Did</b> she like…? – Yes, she <b>did</b>. <i>Yes, she does</i> answers <i>Does she…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii wants to know about deruny. He asks Emma.</p>`,
          tiles: ["Did", "you", "try", "deruny", "in Kyiv"],
          answer: "Did you try deruny in Kyiv?",
          extra: ["tried"],
          keepCase: true,
          hint: "Start with Did. After did: try or tried?",
          fbOk: "Well done!",
          fbBad: "After did, we say try, not tried.",
          fbText: "<b>Did you try deruny in Kyiv?</b> After <i>did</i>: <b>try</b>, not <i>tried</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma: “Syrnyky? I don’t know them!”</p>`,
          before: "Andrii: Did you try syrnyky in Kyiv? Emma: No, I",
          after: ".",
          answer: "didn’t",
          contractions: true,
          hint: "Did you…? – No, I …",
          fbOk: "Yes!",
          fbBad: "Look at the short answers: No, I …",
          fbText: "<b>Did</b> you try…? – No, I <b>didn’t</b>. (= did not)"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "Last December, I didn’t [tried] deruny. But I tried varenyky, and I loved them!",
          hint: "Look at the word after didn’t.",
          fbOk: "Good eye!",
          fbBad: "After didn’t: try or tried?",
          fbText: "After <i>didn’t</i>: I didn’t <b>try</b> deruny. <b>I tried varenyky</b> is correct: there is no <i>did</i>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "Did you like the soup?",
            "Did you liked the soup?",
            "I didn’t eat fish.",
            "I didn’t ate fish.",
            "What did you drink?"
          ],
          correct: [0, 2, 4],
          hint: "After did and didn’t: like, eat, drink.",
          fbOk: "Exactly.",
          fbBad: "Check the verb after did and didn’t.",
          fbText: "Correct: Did you <b>like</b>…? I didn’t <b>eat</b>… What did you <b>drink</b>? Not: <s>Did you liked</s>, <s>I didn’t ate</s>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "Hi Andrii! {*Did|Do} you make pancakes again last weekend? Did Sofiia {*eat|ate} five pancakes again? Last weekend, I {*didn’t|don’t} cook. My dad cooked fish. I {*didn’t|doesn’t} like it, but I loved the potatoes! Love, Emma",
          hint: "Last weekend: did, didn’t. After did: eat or ate?",
          fbOk: "Well done!",
          fbBad: "Look at the rule: did, didn’t + verb.",
          fbText: "Last weekend: <b>Did</b> you make…? Did Sofiia <b>eat</b>…? I <b>didn’t</b> cook. I <b>didn’t</b> like it."
        }
      ],
      outro: {
        text: "Ask: Did you try it? – Yes, I did. / No, I didn’t. Say: I didn’t like it.",
        learned: [
          "Ask about the past: Did you try…?",
          "Answer: Yes, I did. / No, I didn’t.",
          "Say what you didn’t do: I didn’t eat fish."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s3l6",
      title: "Food traditions in Ukraine and the UK",
      short: "Traditions",
      icon: "globe",
      status: "verified",
      why: "Read about food traditions in Ukraine and the UK. Tell a friend about them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Bread and salt or afternoon tea?",
          body: `<p class="lead">Mariia in Kharkiv and Emma in England make a page for their school clubs: “Food traditions in Ukraine and the UK”.</p><p>What food traditions do you know?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In Ukraine, people sometimes welcome important guests with food. What food?</p>`,
          opts: [
            "bread and salt",
            "ice cream",
            "fish and chips"
          ],
          correct: 0,
          fbTitle: "Let’s read.",
          fbOk: "Good guess!",
          fbText: "Important guests are sometimes welcomed with <b>bread and salt</b>. Read more on the next screens."
        },
        {
          type: "info",
          title: "Words for traditions",
          body: `<ul><li>a <b>tra<u>di</u>tion</b> → something people do for a long time</li><li>a <b>guest</b> → a person who visits your home</li><li><b><u>wel</u>come</b> a guest → say hello and be nice to a guest</li><li>a <b>rushnyk</b> → a special long Ukrainian towel</li><li><b>afternoon tea</b> → a small meal in the afternoon</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food traditions, part 1 of 3",
          title: "Read and choose.",
          body: `<p><b>Ukraine: bread and salt</b></p><p><i>In Ukraine, important guests are sometimes welcomed with bread and salt. The bread is put on a rushnyk. A guest takes a piece of bread with a little salt and eats it.</i></p><p>What does a guest do with the bread?</p>`,
          opts: [
            "eats a piece with a little salt",
            "puts it in a bowl",
            "eats it with jam"
          ],
          correct: 0,
          hint: "Find “A guest takes” in the text.",
          fbOk: "Right.",
          fbBad: "Read the last sentence again.",
          fbText: "A guest takes a piece of bread with a little salt and <b>eats it</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food traditions, part 2 of 3",
          title: "Read and choose.",
          body: `<p><b>Ukraine: borscht</b></p><p><i>Borscht is a famous Ukrainian soup. It is made with beetroot and other vegetables. In 2022, UNESCO put Ukrainian borscht cooking on a special list. It is a list of traditions in danger. They need help.</i></p><p>When did UNESCO put borscht cooking on the list?</p>`,
          opts: [
            "in 2012",
            "in 2022",
            "in 1922"
          ],
          correct: 1,
          hint: "Find the year in the text.",
          fbOk: "Yes!",
          fbBad: "Read the text again. Find a year.",
          fbText: "<b>In 2022</b>, UNESCO put Ukrainian borscht cooking on a special list of traditions in danger."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Food traditions, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><b>The UK: Sunday roast and afternoon tea</b></p><p><i>A Sunday roast is a traditional British meal. It is eaten on Sundays. It is roast meat with potatoes and vegetables. Afternoon tea is a small meal in the afternoon. People drink tea and eat sandwiches, scones and cakes. Scones are eaten with jam and cream.</i></p><p>What is eaten at afternoon tea?</p>`,
          opts: [
            "sandwiches",
            "roast meat",
            "scones",
            "cakes",
            "borscht"
          ],
          correct: [0, 2, 3],
          hint: "Find “afternoon tea” in the text.",
          fbOk: "Well done!",
          fbBad: "Roast meat is for a Sunday roast. Read about afternoon tea again.",
          fbText: "At afternoon tea, people eat <b>sandwiches</b>, <b>scones</b> and <b>cakes</b>. Roast meat is a Sunday roast."
        },
        {
          type: "info",
          title: "Mariia and Emma’s page",
          body: `<p><b>Ukraine</b></p><ul><li><b>bread and salt</b> → for important guests; the bread is put on a rushnyk</li><li><b>borscht</b> → on a UNESCO list since 2022</li></ul><p><b>The UK</b></p><ul><li><b>a Sunday roast</b> → eaten on Sundays: roast meat, potatoes, vegetables</li><li><b>afternoon tea</b> → tea, sandwiches, scones and cakes; scones are eaten with jam and cream</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: [
            "Important guests are welcomed with",
            "The bread is put on",
            "A Sunday roast is eaten on",
            "Scones are eaten with"
          ],
          right: [
            "bread and salt.",
            "a rushnyk.",
            "Sundays.",
            "jam and cream."
          ],
          hint: "Look at Mariia and Emma’s page again.",
          fbOk: "Yes!",
          fbBad: "Look at the page: Ukraine, then the UK.",
          fbText: "Guests are welcomed with <b>bread and salt</b>. The bread is put on <b>a rushnyk</b>. A Sunday roast is eaten on <b>Sundays</b>. Scones are eaten with <b>jam and cream</b>."
        },
        {
          type: "word",
          sk: "cult",
          title: "Write the missing word.",
          body: `<p>A Ukrainian tradition for important guests.</p>`,
          before: "Important guests are welcomed with bread and",
          after: ".",
          answer: "salt",
          hint: "Look at the page: Ukraine.",
          fbOk: "Right.",
          fbBad: "Bread and … : look at the page again.",
          fbText: "Important guests are welcomed with bread and <b>salt</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her Sunday.</p>`,
          text: "Last Sunday, we {*had|have} a Sunday roast at Grandad’s house. A Sunday roast {*is|are} cooked in the oven. Later that day, we {*ate|eat} scones with jam and cream. In the UK, scones {*are|is} eaten at afternoon tea.",
          hint: "Last Sunday: the past. A Sunday roast: one. Scones: more than one.",
          fbOk: "Well done!",
          fbBad: "Last Sunday is in the past. Is it one thing or more?",
          fbText: "Last Sunday: we <b>had</b>, we <b>ate</b>. A Sunday roast: one meal → <b>is</b> cooked. Scones <b>are</b> eaten at afternoon tea."
        }
      ],
      outro: {
        text: "In Ukraine, important guests are welcomed with bread and salt. In the UK, people have a Sunday roast and afternoon tea.",
        learned: [
          "Read a short text about food traditions.",
          "Talk about traditions in Ukraine and the UK.",
          "Use the passive: Scones are eaten with jam and cream."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s3l7",
      title: "Lunch for Grandma and Grandad",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Andrii cook?",
          body: `<p class="lead">Andrii’s grandparents, Nina and Vasyl, visit from Chernihiv. Andrii, Sofiia and Dad cook lunch for them in Kyiv.</p><p>Help Andrii. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s menu: tomato soup, deruny with sour cream, ice cream.</p><p>Which dish is the dessert?</p>`,
          opts: [
            "ice cream",
            "tomato soup",
            "deruny with sour cream"
          ],
          correct: 0,
          pre: "e6s3l1",
          fbOk: "Right.",
          fbBad: "A dessert is sweet.",
          fbText: "<b>Ice cream</b> is sweet: it’s the dessert. Tomato soup is the starter. Deruny are the main course."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Sofiia tells Grandma about the lunch.</p>`,
          text: "Deruny {*are|is} made with potatoes. They are {*eaten|ate} with sour cream. Tomato soup {*is|are} made with tomatoes.",
          pre: "e6s3l2",
          hint: "One dish or more than one? After are: eaten or ate?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: is / are + made, eaten.",
          fbText: "Deruny: more than one → <b>are</b> made. are + <b>eaten</b>. Tomato soup: one → <b>is</b> made."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 3",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a recipe for the dessert.</p>`,
          text: "{*First|Finally}, wash some apples. {*Then|First} cut them into small pieces. {*Finally|First}, put the pieces on the ice cream.",
          pre: "e6s3l3",
          hint: "Step 1, the next step, the last step.",
          fbOk: "Well done!",
          fbBad: "Which word shows step 1? The last step?",
          fbText: "Step 1: <b>First</b>. The next step: <b>Then</b>. The last step: <b>Finally</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>make → ?</p>`,
          before: "This morning, Andrii and Dad",
          after: "deruny for the grandparents.",
          answer: "made",
          pre: "e6s3l4",
          fbOk: "Yes!",
          fbBad: "Make is irregular. Look at the list in Lesson 4.",
          fbText: "make → <b>made</b>: This morning, Andrii and Dad <b>made</b> deruny."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>After lunch, Andrii asks Grandma Nina about the deruny.</p>`,
          tiles: ["Did", "you", "like", "the deruny"],
          answer: "Did you like the deruny?",
          extra: ["liked"],
          keepCase: true,
          pre: "e6s3l5",
          fbOk: "Good eye!",
          fbBad: "After did: like or liked?",
          fbText: "<b>Did you like the deruny?</b> After <i>did</i>: <b>like</b>, not <i>liked</i>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Grandad Vasyl tells Sofiia about Ukrainian traditions.</p><p>How are important guests sometimes welcomed in Ukraine?</p>`,
          opts: [
            "with scones and jam",
            "with a Sunday roast",
            "with bread and salt"
          ],
          correct: 2,
          pre: "e6s3l6",
          fbOk: "Right.",
          fbBad: "Remember Mariia and Emma’s page: Ukraine.",
          fbText: "In Ukraine, important guests are sometimes welcomed with <b>bread and salt</b>. Scones and a Sunday roast are British traditions."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about dishes, recipes, meals in the past and food traditions.",
        learned: [
          "Name dishes and say what they are made with.",
          "Write a simple recipe with first, then and finally.",
          "Talk about a meal in the past: We ate… Did you try…?",
          "Tell a friend about food traditions in Ukraine and the UK."
        ]
      }
    }
  ]
});
