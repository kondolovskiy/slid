/* Слід · Англійська мова, 4 клас — «Shops and shopping» (e4s4)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Відпочинок і дозвілля — магазини і покупки» (PDF с. 63);
   функції — вибачитися, подякувати, попрощатися (с. 62), ставити запитання і відповідати на них (с. 63);
   граматика — «‘how’ questions for … quantity» (how much / how many), «‘would like to’ + infinitive» (с. 63):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g4-e4s4.md, «Нотатки агента»).
   Статус: verified (verifier-e4s4, reports/verify/e4s4.md; approved — лише вчитель). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s4",
  grade: 4,
  weeks: [14, 17],
  title: "Shops and shopping",
  why: "To buy things in a shop. And to ask about prices and say what you would like.",
  meta: { author: "writer-e4s4", created: "2026-11-19", factcheck: "verifier-e4s4 (reports/verify/e4s4.md)", teacher: null },
  requires: ["e4s1l1"],
  badges: [
    { id: "e4s4boss", name: "Smart shopper", icon: "trophy", desc: "Finish the final lesson “Shops and shopping”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s4l1",
      title: "Shops in my town",
      short: "Shops",
      icon: "city",
      status: "verified",
      why: "Where can you buy bread, books or toys? Learn the names of shops.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What can you buy here?",
          body: `<p class="lead">Andrii writes to Emma about his street in Kyiv.</p><p><i>There are lots of shops in my street. There is a bakery, a bookshop and a big supermarket. My favourite shop is the toy shop!</i></p><p>What can you buy in each shop?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s mum wants bread. Where does she go?</p>`,
          opts: [
            "to the bookshop",
            "to the bakery",
            "to the toy shop"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "You can buy bread at the <b>bakery</b>. The next screen shows more shops."
        },
        {
          type: "info",
          title: "Shops",
          body: `<ul><li>a <b><u>su</u>permarket</b> – food, drinks and lots more</li><li>a <b><u>ba</u>kery</b> – bread and cakes</li><li>a <b><u>book</u>shop</b> – books</li><li>a <b>toy shop</b> – toys and games</li><li>a <b>shoe shop</b> – shoes</li><li>a <b>sweet shop</b> – sweets</li><li>a <b><u>mar</u>ket</b> – fruit and vegetables, often outside</li></ul><p>You can buy bread at the <b>bakery</b>.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s sister Sofiia wants new shoes. Where does she go?</p>`,
          opts: [
            "to the sweet shop",
            "to the bakery",
            "to the shoe shop"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "What can you buy at each shop?",
          fbText: "You can buy shoes at the <b>shoe shop</b>. The sweet shop has sweets. The bakery has bread and cakes."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Where can you buy it?</p>`,
          bins: ["the bakery", "the bookshop", "the toy shop"],
          items: [
            ["bread", 0],
            ["cakes", 0],
            ["books", 1],
            ["a ball", 2],
            ["a doll", 2]
          ],
          hint: "Look at the list of shops again.",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "The bakery: <b>bread</b> and <b>cakes</b>. The bookshop: <b>books</b>. The toy shop: toys and games, like <b>a ball</b> and <b>a doll</b>."
        },
        {
          type: "multi",
          sk: "vocab",
          title: "Choose all the correct answers.",
          body: `<p>You can buy food here. Which shops are they?</p>`,
          opts: [
            "the supermarket",
            "the bookshop",
            "the bakery",
            "the shoe shop",
            "the market"
          ],
          correct: [0, 2, 4],
          hint: "Bread, fruit and vegetables are food.",
          fbOk: "Well done!",
          fbBad: "Can you eat books or shoes?",
          fbText: "Food is at the <b>supermarket</b>, the <b>bakery</b> and the <b>market</b>. The bookshop has books. The shoe shop has shoes."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s a small shop. You can buy only bread and cakes here.</p>`,
          before: "It’s a",
          after: ".",
          answer: ["bakery", "baker’s"],
          hint: "Look at the list: bread and cakes.",
          fbOk: "Exactly.",
          fbBad: "Where can you buy bread?",
          fbText: "Bread and cakes: it’s a <b>bakery</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "On Saturday, I go shopping with Mum. I want a new ball. We go to the {*toy shop|bakery|bookshop}. Mum wants bread and cakes. We go to the {*bakery|shoe shop|toy shop}. Then I buy a book at the {*bookshop|sweet shop|market}.",
          hint: "What can you buy in each shop?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of shops again.",
          fbText: "A ball is a toy: the <b>toy shop</b>. Bread and cakes: the <b>bakery</b>. A book: the <b>bookshop</b>."
        }
      ],
      outro: {
        text: "There are lots of shops: a bakery, a bookshop, a toy shop, a supermarket and a market.",
        learned: [
          "Name shops: a bakery, a bookshop, a supermarket.",
          "Say what you can buy in each shop.",
          "Read a short message about shops."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s4l2",
      title: "In a shopping centre: signs and floors",
      short: "Signs",
      icon: "map",
      status: "verified",
      why: "A shopping centre is big. Signs and floors help you find a shop.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Where is the toy shop?",
          body: `<p class="lead">Emma lives in a small town in England. Today she and her dad go to a shopping centre in the city.</p><p>There are lots of shops on different floors. There are lots of signs too: OPEN, PUSH, EXIT, LIFT.</p><p>How can Emma find the toy shop?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In Britain, you walk in from the street. Which floor is it?</p>`,
          opts: [
            "the first floor",
            "the second floor",
            "the ground floor"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "In Britain, you walk in from the street on the <b>ground floor</b>. The first floor is one floor up."
        },
        {
          type: "info",
          title: "Floors",
          body: `<p>In Britain:</p><ul><li>the <b>second floor</b> – two floors up</li><li>the <b>first floor</b> – one floor up</li><li>the <b>ground floor</b> – you walk in from the street</li></ul><p>The toy shop is <b>on</b> the second floor.</p><p>Go up in the <b>lift</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Ground floor:</b> supermarket<br><b>First floor:</b> bookshop, shoe shop<br><b>Second floor:</b> toy shop, café</p><p>Where is the bookshop?</p>`,
          opts: [
            "on the first floor",
            "on the ground floor",
            "on the second floor"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Find the bookshop on the plan.",
          fbText: "The plan says: <b>First floor</b> – bookshop. It’s one floor up from the ground floor."
        },
        {
          type: "gaps",
          sk: "read",
          title: "Fill in the gaps.",
          body: `<p><b>Ground floor:</b> supermarket<br><b>First floor:</b> bookshop, shoe shop<br><b>Second floor:</b> toy shop, café</p>`,
          text: "The supermarket is on the {*ground|first|second} floor. The café is on the {first|*second|ground} floor. The shoe shop is on the {*first|second|ground} floor.",
          hint: "Find each shop on the plan.",
          fbOk: "Exactly.",
          fbBad: "Look at the plan again.",
          fbText: "Supermarket: the <b>ground</b> floor. Café: the <b>second</b> floor. Shoe shop: the <b>first</b> floor."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "Dad, the bookshop is on the first floor. The toy shop is [in] the second floor.",
          hint: "Look at the floors list: The toy shop is … the second floor.",
          fbOk: "Good eye!",
          fbBad: "Check the small words before the floors.",
          fbText: "We say <b>on</b> the first floor, <b>on</b> the second floor. Not <s>in the second floor</s>."
        },
        {
          type: "info",
          title: "Signs",
          body: `<ul><li><b>OPEN</b> – you can go in</li><li><b>CLOSED</b> – you can’t go in</li><li><b>PUSH</b> – push the door</li><li><b>PULL</b> – pull the door</li><li><b>EXIT</b> – go out here</li><li><b>LIFT</b> – go up or down here</li></ul><p>A <b>sign</b> tells you what to do.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Emma wants to go out of the shopping centre. Which sign does she look for?</p>`,
          opts: [
            "LIFT",
            "EXIT",
            "PULL"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Which sign says “go out here”?",
          fbText: "<b>EXIT</b> means “go out here”. LIFT is for going up or down. PULL is on a door."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>The bookshop opens at 10 am. It’s 9 am now. You can’t go in.</p>`,
          before: "The sign on the door says",
          after: ".",
          answer: ["closed", "shut"],
          hint: "Look at the signs: you can’t go in.",
          fbOk: "Well done!",
          fbBad: "Is the bookshop open now?",
          fbText: "At 9 am the bookshop is not open. The sign says <b>CLOSED</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Emma writes to her dad.</p><p><i>Dad, I’m in the toy shop. It’s two floors up from the ground floor. Let’s meet at the café. It’s on the same floor as the toy shop.</i></p><p>Where is the café?</p>`,
          opts: [
            "on the ground floor",
            "on the first floor",
            "on the second floor"
          ],
          correct: 2,
          hint: "Two floors up: which floor is it?",
          fbOk: "Good eye!",
          fbBad: "Look at the floors list again.",
          fbText: "Two floors up is the <b>second floor</b>. The café is on the same floor as the toy shop."
        }
      ],
      outro: {
        text: "In Britain, you walk in from the street on the ground floor. Signs like EXIT and CLOSED help you in a shopping centre.",
        learned: [
          "Say where a shop is: on the first floor.",
          "Understand signs: OPEN, CLOSED, PUSH, PULL, EXIT, LIFT.",
          "Read a plan of a shopping centre."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s4l3",
      title: "How many? How much?",
      short: "How many?",
      icon: "plus",
      status: "verified",
      why: "Before you go shopping, ask: how many eggs, how much milk?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "How many apples? How much milk?",
          body: `<p class="lead">Emma and her mum make a shopping list.</p><p><b>Mum:</b> How many apples do we need?<br><b>Emma:</b> Six apples.<br><b>Mum:</b> And how much milk have we got?<br><b>Emma:</b> Not much!</p><p>Why <b>many</b> with apples, but <b>much</b> with milk?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma asks about eggs. Which question is correct?</p>`,
          opts: [
            "How much eggs do we need?",
            "How many eggs do we need?",
            "How eggs do we need?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>How many eggs</b>. Why <b>many</b>? Look at the next screen."
        },
        {
          type: "info",
          title: "How many or how much?",
          body: `<p>We can count apples: one apple, two apple<b>s</b>.<br>We can’t count milk.</p><ul><li>apples, eggs, bananas → How <b>many</b> apples?</li><li>milk, water, bread, rice → How <b>much</b> milk?</li></ul><p>After <b>how many</b> – a word with <b>-s</b>: How many egg<b>s</b>?</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Is it “How many…?” or “How much…?”</p>`,
          bins: ["How many…?", "How much…?"],
          items: [
            ["oranges", 0],
            ["eggs", 0],
            ["carrots", 0],
            ["milk", 1],
            ["water", 1],
            ["bread", 1]
          ],
          hint: "Can you count it: one, two, three?",
          fbOk: "Yes!",
          fbBad: "Can you count it?",
          fbText: "We can count <b>oranges</b>, <b>eggs</b> and <b>carrots</b>: How many? We can’t count <b>milk</b>, <b>water</b> and <b>bread</b>: How much?"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "How {*many|much} eggs do we need? – Ten. How {many|*much} rice have we got? – Not much. How {*many|much} bananas do we need? – Four.",
          hint: "Can you count it? Is there an -s?",
          fbOk: "Exactly.",
          fbBad: "Check: eggs and bananas, or rice?",
          fbText: "Eggs and bananas: we can count them. So it’s <b>How many</b>. Rice: we can’t count it. So it’s <b>How much</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mum asks about rice. Which question is correct?</p>`,
          opts: [
            "How much rice have we got?",
            "How many rice have we got?",
            "How much rices have we got?"
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Can you count rice?",
          fbText: "We can’t count rice. So it’s <b>How much rice</b>. There is no -s: not <i>rices</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s list is wrong.</p>`,
          text: "How [much] bananas do we need? How much milk do we need? How many eggs have we got?",
          hint: "Check each how much and how many.",
          fbOk: "Good eye!",
          fbBad: "Can you count bananas?",
          fbText: "We can count bananas: it’s <b>How many bananas</b>. <b>How much milk</b> and <b>How many eggs</b> are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          tiles: ["how", "many", "apples", "do", "we", "need"],
          answer: "How many apples do we need?",
          extra: ["much"],
          hint: "Start with How. Can you count apples?",
          fbOk: "Well done!",
          fbText: "<b>How many apples do we need?</b> We can count apples, so it’s <b>many</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma is at the supermarket. She writes to her mum.</p>`,
          text: "Emma: Mum, how {*many|much} oranges do we need? Mum: Five, please. Emma: And how {many|*much} bread? Mum: Not much. Emma: How {many|*much} water have we got at home? Mum: Not much! Buy water too, please.",
          hint: "Oranges: one, two, three… Bread and water?",
          fbOk: "Well done!",
          fbBad: "Can you count it?",
          fbText: "Oranges: we can count them, so <b>How many</b>. Bread and water: we can’t count them, so <b>How much</b>."
        }
      ],
      outro: {
        text: "Things we can count: How many apples? Things we can’t count: How much milk?",
        learned: [
          "Ask How many…? about things you can count.",
          "Ask How much…? about milk, water, bread and rice.",
          "Make a shopping list with questions."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s4l4",
      title: "Prices: how much is it?",
      short: "Prices",
      icon: "scale",
      status: "verified",
      why: "In a shop, you ask about the price. Ask and answer in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How much is it?",
          body: `<p class="lead">Emma is at the market in her town. Andrii is at a market in Kyiv.</p><p><b>Emma:</b> How much is the ball?<br><b>Man:</b> It’s £4.</p><p><b>Andrii:</b> How much are the bananas?<br><b>Woman:</b> They’re ₴60.</p><p>What are £ and ₴? And why <b>is</b> and <b>are</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii wants two pens. Which question is correct?</p>`,
          opts: [
            "How much is the pens?",
            "How many is the pens?",
            "How much are the pens?"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>How much are the pens?</b> The pens are two things. Look at the next screens."
        },
        {
          type: "info",
          title: "Money",
          body: `<p>In Britain, people pay in <b>pounds</b> (£) and <b>pence</b> (p).<br>£1 = 100p.</p><p>In Ukraine, people pay in <b>hryvnias</b> (₴).</p><ul><li>£5 – five pounds</li><li>50p – fifty pence</li><li>₴15 – fif<u>teen</u> hryvnias</li><li>₴50 – <u>fif</u>ty hryvnias</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["fif|+teen", "+fif|ty", "thir|+teen", "+thir|ty"],
          hint: "Fifteen and fifty: look at the underlined parts.",
          fbOk: "Well done!",
          fbBad: "Look at fifteen and fifty again.",
          fbText: "fif<u>teen</u>, thir<u>teen</u>: the strong part is at the end. <u>fif</u>ty, <u>thir</u>ty: the strong part is at the start."
        },
        {
          type: "info",
          title: "How much is it?",
          body: `<ul><li>one thing → How much <b>is</b> the ball? – <b>It’s</b> £4.</li><li>two or more → How much <b>are</b> the bananas? – <b>They’re</b> ₴60.</li></ul><p>Ask about a price: <b>How much…?</b></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "How much {*is|are} the doll? – {*It’s|They’re} £7. How much {is|*are} the apples? – {It’s|*They’re} £2.",
          hint: "Is it one thing or two?",
          fbOk: "Exactly.",
          fbBad: "One doll, but lots of apples.",
          fbText: "One doll: How much <b>is</b>…? – <b>It’s</b>… Apples are lots of things: How much <b>are</b>…? – <b>They’re</b>…"
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma asks about a book.</p>`,
          before: "How",
          after: "is the book? – It’s £6.",
          answer: "much",
          hint: "Is it a price or a number of things?",
          fbOk: "Yes!",
          fbBad: "We ask about a price: How … is it?",
          fbText: "Ask about a price: How <b>much</b> is it?"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Pen</b> – £1<br><b>Notebook</b> – £2</p><p>Emma buys a pen and a notebook. How much are they?</p>`,
          opts: [
            "£2",
            "£3",
            "£1"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "£1 and £2: how much is it?",
          fbText: "£1 and £2 is <b>£3</b>: three pounds."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Andrii is at a market in Kyiv.</p><p><b>Apples</b> – ₴40<br><b>Bananas</b> – ₴60<br><b>Bread</b> – ₴25</p><p><b>Andrii:</b> How much are the apples?<br><b>Woman:</b> They’re ₴40.<br><b>Andrii:</b> And how much is the bread?</p><p>What does the woman say?</p>`,
          opts: [
            "They’re ₴25.",
            "It’s ₴60.",
            "It’s ₴25."
          ],
          correct: 2,
          hint: "Find the bread on the list. Is it one thing?",
          fbOk: "Good eye!",
          fbBad: "Look at the list and at it’s or they’re.",
          fbText: "Bread is ₴25. Andrii asks <i>How much <b>is</b>…?</i> So the answer is <b>It’s ₴25.</b> ₴60 is for the bananas."
        }
      ],
      outro: {
        text: "Ask: “How much is it?” or “How much are they?” In Britain, people pay in pounds; in Ukraine, in hryvnias.",
        learned: [
          "Ask about prices: How much is it? How much are they?",
          "Answer: It’s £4. They’re ₴60.",
          "Read prices in pounds, pence and hryvnias."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s4l5",
      title: "I’d like… I’d like to buy…",
      short: "I’d like",
      icon: "cake",
      status: "verified",
      why: "In a shop, say what you want. Do it politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What would Tom like?",
          body: `<p class="lead">Tom lives in a town in England. Today he is at the bakery.</p><p><b>Assistant:</b> Hello! Can I help you?<br><b>Tom:</b> Yes, please. I’d like a cheese sandwich. And I’d like to buy a cake for my mum.</p><p>What does <b>I’d like</b> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Tom says: “I’d like a cake.” What does he mean?</p>`,
          opts: [
            "I want a cake, please.",
            "I like cakes every day.",
            "I’ve got a cake."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "<b>I’d like a cake</b> means “I want a cake, please”. It’s polite."
        },
        {
          type: "info",
          title: "I’d like",
          body: `<p><b>I’d like</b> = I would like = I want. It’s polite.</p><ul><li>I’d like <b>a</b> cake, please.</li><li>I’d like <b>to buy</b> a present.</li><li><b>Would you like</b> a bag? – Yes, please. / No, thank you.</li></ul><p>I <b>like</b> cakes. → every day<br>I<b>’d like</b> a cake. → now</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Tom is in a shop. He wants a pen now. What does he say?</p>`,
          opts: [
            "I like a pen, please.",
            "I’d like a pen, please.",
            "I’m like a pen, please."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "He wants it now. Look at the examples again.",
          fbText: "He wants a pen now, so he says <b>I’d like a pen, please.</b> <i>I like</i> is for every day."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Tom is in the bookshop.</p>`,
          text: "Assistant: Can I help you? Tom: Yes, please. I’d like {*to buy|buy|buying} a book about animals. Assistant: Here it is. {*Would|Are|Is} you like a bag? Tom: Yes, {*please|I like}.",
          hint: "Look at the examples: I’d like to…, Would you like…?",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "I’d like <b>to buy</b> a book. <b>Would</b> you like a bag? – Yes, <b>please</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The assistant has got a bag for Tom.</p>`,
          before: "Assistant:",
          after: "you like a bag?",
          answer: "would",
          hint: "Look at the examples: … you like a bag?",
          fbOk: "Well done!",
          fbBad: "Look at the examples again.",
          fbText: "<b>Would</b> you like a bag? It’s polite. Answer: Yes, please. / No, thank you."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Tom wants a present for his sister.</p>`,
          tiles: ["I’d", "like", "to", "buy", "a", "present"],
          answer: "I’d like to buy a present.",
          extra: ["buying"],
          hint: "Start with I’d like.",
          fbOk: "Good eye!",
          fbText: "<b>I’d like to buy a present.</b> After <i>I’d like</i> we say <b>to buy</b>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Tom and his dad are at a café.</p>`,
          text: "Assistant: Hello! What {*would|are|is} you like? Tom: I’d {*like|likes} a cheese sandwich, please. Dad: And I’d like {*to buy|buy} a cake for Mum. Assistant: {*Would|Are} you like a bag for the cake? Dad: No, {*thank you|I like}.",
          hint: "Look at the examples: Would you like…? I’d like to…",
          fbOk: "Well done!",
          fbBad: "Look at the examples again.",
          fbText: "What <b>would</b> you like? I’d <b>like</b> a sandwich. I’d like <b>to buy</b> a cake. <b>Would</b> you like a bag? – No, <b>thank you</b>."
        }
      ],
      outro: {
        text: "I’d like means I want. It’s polite. After I’d like we can say to buy.",
        learned: [
          "Say what you want: I’d like a cake, please.",
          "Use I’d like to buy…",
          "Answer Would you like…? – Yes, please. / No, thank you."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s4l6",
      title: "Buying a present: a dialogue",
      short: "A present",
      icon: "star",
      status: "verified",
      why: "Buy a present in English. Say thank you, sorry and goodbye.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What can Oksana buy for Grandma?",
          body: `<p class="lead">It’s Grandma’s birthday on Sunday. Oksana has got ₴200.</p><p>She is in the bookshop at the shopping centre in Poltava.</p><p>What can she buy?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana gives money to the assistant. What does she say?</p>`,
          opts: [
            "Can I help you?",
            "Here you are.",
            "Have a nice day!"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We give something and say <b>Here you are.</b> Look for it in the dialogue."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: in the bookshop, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>Assistant:</b> Good afternoon! Can I help you?<br><b>Oksana:</b> Yes, please. I’d like to buy a present for my grandma.<br><b>Assistant:</b> Look at this book about flowers.<br><b>Oksana:</b> How much is it?<br><b>Assistant:</b> It’s ₴250.<br><b>Oksana:</b> Oh, sorry. I’ve only got ₴200.</p><p>Why does Oksana say sorry?</p>`,
          opts: [
            "She doesn’t like the book.",
            "The book is ₴250. She’s got ₴200.",
            "The bookshop is closed."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the price and Oksana’s money.",
          fbText: "The book is <b>₴250</b>. Oksana has got only <b>₴200</b>. She says sorry to the assistant."
        },
        {
          type: "info",
          title: "Polite words",
          body: `<ul><li><b>Thank you!</b> <b>Thanks!</b></li><li><b>Sorry.</b></li><li><b>Goodbye!</b> <b>Have a nice day!</b></li><li>An <b>assistant</b> works in a shop: <b>Can I help you?</b></li><li>You give money: <b>Here you are.</b></li></ul><p>Strong parts: <u>sor</u>ry, as<u>sis</u>tant, <u>pre</u>sent.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: in the bookshop, part 2 of 2",
          title: "Read and choose.",
          body: `<p><b>Assistant:</b> That’s OK. Look at this birthday card with flowers. It’s ₴60.<br><b>Oksana:</b> Great! I’d like the card, please. Here you are.<br><b>Assistant:</b> Thank you. Would you like a bag?<br><b>Oksana:</b> No, thank you. Goodbye!<br><b>Assistant:</b> Have a nice day!</p><p>What does Oksana buy?</p>`,
          opts: [
            "a book",
            "a bag",
            "a birthday card"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Read what Oksana says: “I’d like…”",
          fbText: "Oksana says: “I’d like <b>the card</b>, please.” She doesn’t want a bag."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The assistant gives Oksana the card. Oksana is happy. What does she say?</p>`,
          opts: [
            "Thank you!",
            "I’m sorry.",
            "Can I help you?"
          ],
          correct: 0,
          hint: "Look at the polite words.",
          fbOk: "Exactly.",
          fbBad: "Is Oksana sorry?",
          fbText: "Someone gives you something: say <b>Thank you!</b> <i>Can I help you?</i> is for the assistant."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sor|ry", "as|+sis|tant", "+pre|sent"],
          fbOk: "Well done!",
          fbBad: "Look at the strong parts again.",
          fbText: "<u>sor</u>ry, <u>pre</u>sent: the strong part is at the start. as<u>sis</u>tant: the strong part is in the middle."
        },
        {
          type: "order",
          sk: "func",
          title: "Put the sentences in order.",
          body: `<p>Mariia is at a bakery in Kharkiv.</p>`,
          items: [
            "Assistant: Hello! Can I help you?",
            "Mariia: Yes, please. I’d like a chocolate cake. How much is it?",
            "Assistant: It’s ₴150.",
            "Mariia: Here you are. Thank you!",
            "Assistant: Thank you! Goodbye!"
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Start with hello. The price comes after the question.",
          fbOk: "Good eye!",
          fbBad: "Find the question for each answer.",
          fbText: "Hello first. Then Mariia asks the price. She gives the money. Goodbye at the end."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana’s brother Dmytro is in the toy shop.</p>`,
          text: "Assistant: Good morning! Can I help you? Dmytro: Yes, please. I’d like {*to buy|buy} a ball. How much {*is|are} it? Assistant: It’s ₴120. Dmytro: Here you are. Assistant: {*Thank you|Sorry}! Would you like a bag? Dmytro: No, {*thank you|sorry}. {*Goodbye|Hello}!",
          hint: "Look at the polite words. How does a dialogue end?",
          fbOk: "Well done!",
          fbBad: "Look at the polite words again.",
          fbText: "I’d like <b>to buy</b>. One ball: How much <b>is</b> it? Dmytro gives money: <b>Thank you!</b> No, <b>thank you</b>. At the end: <b>Goodbye!</b>"
        }
      ],
      outro: {
        text: "In a shop, we say what we would like, ask the price, and say thank you and goodbye. Sorry helps too.",
        learned: [
          "Buy something in a shop in English.",
          "Say thank you, sorry and goodbye.",
          "Read a short dialogue in a shop."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s4l7",
      title: "Shopping day",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras go shopping?",
          body: `<p class="lead">Taras lives in Lviv. Today he goes shopping. He wants presents for his family.</p><p>Help Taras and his pen friend Emma. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Taras wants sweets for his little sister. Where does he go?</p>`,
          opts: [
            "to the shoe shop",
            "to the sweet shop",
            "to the bookshop"
          ],
          correct: 1,
          pre: "e4s4l1",
          fbOk: "Right.",
          fbBad: "Where can you buy sweets?",
          fbText: "You can buy sweets at the <b>sweet shop</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 2",
          title: "Read and choose.",
          body: `<p><b>Ground floor:</b> café, supermarket<br><b>First floor:</b> sweet shop, bookshop<br><b>Second floor:</b> toy shop</p><p>This is a shopping centre in England. Emma is in the café. The toy shop is two floors up. Which floor is it?</p>`,
          opts: [
            "the second floor",
            "the first floor",
            "the ground floor"
          ],
          correct: 0,
          pre: "e4s4l2",
          hint: "Find the café on the plan.",
          fbOk: "Yes!",
          fbBad: "Look at the plan again.",
          fbText: "The café is on the ground floor. Two floors up is the <b>second floor</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Taras buys food for a picnic at the supermarket.</p>`,
          text: "How {*many|much} sandwiches do we need? How {many|*much} water have we got? How {*many|much} apples are there?",
          pre: "e4s4l3",
          hint: "Can you count it?",
          fbOk: "Exactly.",
          fbBad: "Can you count water?",
          fbText: "We can count sandwiches and apples: <b>How many</b>. We can’t count water: <b>How much</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras is in the toy shop.</p>`,
          text: "How much {*are|is} the cars? – {*They’re|It’s} ₴90. How much {*is|are} the doll? – {*It’s|They’re} ₴200.",
          pre: "e4s4l4",
          hint: "One thing or two?",
          fbOk: "Well done!",
          fbBad: "Cars: one or lots?",
          fbText: "Lots of cars: How much <b>are</b>…? – <b>They’re</b>… One doll: How much <b>is</b>…? – <b>It’s</b>…"
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Taras wants a card for his mum.</p>`,
          tiles: ["I’d", "like", "to", "buy", "a", "card"],
          answer: "I’d like to buy a card.",
          extra: ["buys"],
          pre: "e4s4l5",
          fbOk: "Good eye!",
          fbText: "<b>I’d like to buy a card.</b> After <i>I’d like</i> – <b>to buy</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Taras has got ₴100. The ball is ₴150. What does he say?</p>`,
          opts: [
            "Thank you! Here you are.",
            "Would you like a bag?",
            "Sorry, I’ve only got ₴100."
          ],
          correct: 2,
          pre: "e4s4l6",
          fbOk: "Right.",
          fbBad: "Has Taras got ₴150?",
          fbText: "The ball is ₴150, but Taras has got only ₴100. He says <b>Sorry</b>, like Oksana in the bookshop."
        }
      ],
      outro: {
        text: "Well done! Now you can find a shop, ask about prices and buy things politely.",
        learned: [
          "Name shops and find them on different floors.",
          "Ask How many…? and How much…?",
          "Say what you would like: I’d like to buy…",
          "Say thank you, sorry and goodbye in a shop."
        ]
      }
    }
  ]
});
