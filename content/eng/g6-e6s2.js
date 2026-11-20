/* Слід · Англійська мова, 6 клас — «Shopping and money» (e6s2)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Покупки» — відвідування магазинів, види магазинів, асортимент товарів, гроші (с. 20, розд. 4.2.2);
   функції — запитувати й надавати інформацію, пропонувати, приймати й відхиляти пропозицію, аргументувати вибір (с. 20);
   граматика A2 — Quantity: a few, both, all, no; Adjectives: modifying with ‘too’; Clauses: purpose (to-infinitive) (с. 21–22);
   повторення — how much / how many (e4s4l3, e5s3l4), Can I…? / Could I…? (e5s2l6), I’d like (e4s4l5):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e4s4 (ціни — e4s4l4; тут — разом, change, coin / note) (reports/verify/plan-eng-g6.md, curate-eng-plan-g6.md).
   Герої — та сама серія, що в 4–5 кл. (Mariia — Kharkiv, Oksana і брат Dmytro — Zelena Dolyna біля Poltava, Andrii і Sofiia — Kyiv,
   Taras — Lviv, Emma, її мама Sarah і брат Tom — town in England). Нові: Harry (продавець у newsagent’s, Англія), Matvii (хлопець у Kyiv).
   Зовнішність героїв не описано (канон — автор e6s1).
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос і факти про гроші — Cambridge Dictionary, OALD, джерела в tasks/…/write-eng-g6-e6s2.md, «Нотатки агента».
   Статус: verified (verifier-e6s2, reports/verify/e6s2.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s2",
  grade: 6,
  weeks: [5, 8],
  title: "Shopping and money",
  why: "To talk about shops and the things they sell. And to ask about prices and buy things politely.",
  requires: ["e4s4l1", "e4s4l4", "e4s4l5", "e5s3l4", "e5s2l6"],
  meta: { author: "writer-e6s2", created: "2026-11-20", factcheck: "verifier-e6s2 (reports/verify/e6s2.md)", teacher: null },
  badges: [
    { id: "e6s2boss", name: "Shopping expert", icon: "trophy", desc: "Finish the final lesson “Shopping and money”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s2l1",
      title: "At the chemist’s, at the newsagent’s: types of shops",
      short: "Types of shops",
      icon: "city",
      status: "verified",
      why: "Some shops sell only one kind of thing. Learn their British names.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where can you buy medicine?",
          body: `<p class="lead">Mariia writes to Emma from Kharkiv.</p><p><i>There are lots of shops in my street: a big supermarket, a chemist’s and a baker’s. In Oksana’s village, there is only one shop! What shops are there in your town?</i></p><p>Emma answers: <i>Near my house, there is a newsagent’s, a chemist’s and a butcher’s.</i></p><p>What do these shops sell?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma has got a cold. She needs some medicine. Where does she go?</p>`,
          opts: [
            "the butcher’s",
            "the chemist’s",
            "the newsagent’s"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "You buy medicine at the <b>chemist’s</b>. The next screen has more shops."
        },
        {
          type: "info",
          title: "Types of shops",
          body: `<ul><li>the <b><u>chem</u>ist’s</b> → medicine, toothpaste</li><li>the <b><u>news</u>agent’s</b> → newspapers, maga<u>zines</u>, sweets</li><li>the <b><u>butch</u>er’s</b> → meat, sausages</li><li>the <b><u>bak</u>er’s</b> = the bakery → bread, cakes</li><li>the <b><u>green</u>grocer’s</b> → fruit, vegetables</li></ul><p>We say <b>the chemist’s</b> or <b>the chemist</b>. Both are OK.</p><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["You buy medicine at the", "You buy newspapers at the", "You buy meat at the", "You buy bread at the", "You buy apples at the"],
          right: ["chemist’s.", "newsagent’s.", "butcher’s.", "baker’s.", "greengrocer’s."],
          hint: "Apples are fruit. Sausages are meat.",
          fbOk: "Well done!",
          fbBad: "Look at the shops again: what does each one sell?",
          fbText: "Medicine → the <b>chemist’s</b>. Newspapers → the <b>newsagent’s</b>. Meat → the <b>butcher’s</b>. Bread → the <b>baker’s</b>. Fruit → the <b>greengrocer’s</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mariia wants a magazine about art. Where does she go?</p>`,
          opts: [
            "the butcher’s",
            "the greengrocer’s",
            "the newsagent’s"
          ],
          correct: 2,
          hint: "Newspapers and magazines: which shop?",
          fbOk: "Right.",
          fbBad: "Which shop sells magazines?",
          fbText: "Magazines → the <b>newsagent’s</b>. The butcher’s sells meat, and the greengrocer’s sells fruit."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+chem|ist", "+news|a|gent", "mag|a|+zine", "+green|gro|cer"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the list of shops.",
          fbText: "<u>chem</u>ist, <u>news</u>agent, <u>green</u>grocer: the first part is strong. maga<u>zine</u>: the last part is strong."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the words that mean a shop.",
          body: `<p>Emma writes about her Saturday.</p>`,
          text: "On Saturday, I go to the [baker’s] for bread. Then I buy a magazine at the [newsagent’s]. Mum gets some toothpaste at the [chemist’s].",
          hint: "There are three shops in the text.",
          fbOk: "Good eye!",
          fbBad: "Bread, a magazine and toothpaste are things. Find the shops.",
          fbText: "The shops: the <b>baker’s</b>, the <b>newsagent’s</b> and the <b>chemist’s</b>. Bread, a magazine and toothpaste are things you buy there."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>It’s a small shop. It sells only meat and sausages.</p>`,
          before: "It’s the",
          after: ".",
          answer: ["butcher’s", "butcher", "butcher’s shop"],
          keys: ["’"],
          hint: "Look at the list of shops: meat.",
          fbOk: "Well done!",
          fbBad: "Which shop sells meat?",
          fbText: "Meat and sausages: the <b>butcher’s</b>. You can say <b>the butcher</b> too."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "In Zelena Dolyna, there is only one shop. It sells bread, milk and sweets, but it doesn’t sell toothpaste. We buy it at the {*chemist’s|butcher’s|newsagent’s} in Poltava. Grandad buys meat at the {*butcher’s|chemist’s|greengrocer’s} there too. And Mum gets apples and pears at the {*greengrocer’s|newsagent’s|baker’s}.",
          hint: "Toothpaste, meat, apples: which shop sells each thing?",
          fbOk: "Exactly.",
          fbBad: "Look at the things: toothpaste, meat, apples and pears.",
          fbText: "Toothpaste → the <b>chemist’s</b>. Meat → the <b>butcher’s</b>. Fruit → the <b>greengrocer’s</b>."
        }
      ],
      outro: {
        text: "In Britain, people often say shop names with ’s: the chemist’s, the newsagent’s, the butcher’s.",
        learned: [
          "Name shops: the chemist’s, the newsagent’s, the butcher’s.",
          "Say what you can buy in each shop.",
          "Find the strong part in shop words."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s2l2",
      title: "Why do you go there? To buy some bread",
      short: "To buy…",
      icon: "target",
      status: "verified",
      why: "People often ask why you are going somewhere. Answer with to and a verb.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Why is Mariia going out?",
          body: `<p class="lead">It’s Saturday morning in Kharkiv.</p><p><b>Mum:</b> Where are you going, Mariia?<br><b>Mariia:</b> To the newsagent’s.<br><b>Mum:</b> Why?<br><b>Mariia:</b> To buy a magazine about art.<br><b>Mum:</b> Can you go to the baker’s too, to get some bread?<br><b>Mariia:</b> OK, Mum!</p><p>Why? – <b>To buy</b>… How do we say why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Dad asks Mariia: “Why are you going to the chemist’s?” What does she say?</p>`,
          opts: [
            "For buy some toothpaste.",
            "To buy some toothpaste.",
            "Buy some toothpaste."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We answer <i>Why?</i> with <b>to</b> + verb: <b>To buy</b> some toothpaste."
        },
        {
          type: "info",
          title: "Why? To buy…",
          body: `<p><b>Why</b> are you going to the baker’s?<br>– <b>To buy</b> some bread.</p><p>I’m going to the baker’s <b>to buy</b> some bread.<br>Dad goes to the newsagent’s <b>to get</b> a newspaper.</p><ul><li>why → <b>to</b> + verb: to buy, to get, to see</li><li>Not: <s>for buy</s>, <s>for to buy</s></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii and Sofiia are going shopping in Kyiv.</p>`,
          text: "Andrii goes to the greengrocer’s {*to buy|for buy|buy} some apples. Sofiia goes to the chemist’s {*to get|for get|get} some toothpaste. Why are they going to the baker’s? – {*To buy|For buy|Buy} a cake for Mum.",
          hint: "Why? → to + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: to + verb, not for + verb.",
          fbText: "Andrii goes there <b>to buy</b> some apples. Sofiia goes there <b>to get</b> some toothpaste. Why? – <b>To buy</b> a cake."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["I’m going to the baker’s", "I’m going to the butcher’s", "I’m going to the chemist’s", "I’m going to the newsagent’s", "I’m going to the greengrocer’s"],
          right: ["to buy some bread.", "to buy some sausages.", "to get some medicine.", "to buy a magazine.", "to get some potatoes."],
          hint: "What does each shop sell?",
          fbOk: "Well done!",
          fbBad: "Look at the things: bread, sausages, medicine, a magazine, potatoes.",
          fbText: "The baker’s → <b>to buy some bread</b>. The butcher’s → <b>to buy some sausages</b>. The chemist’s → <b>to get some medicine</b>. The newsagent’s → <b>to buy a magazine</b>. The greengrocer’s → <b>to get some potatoes</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma tells Tom where she is going and why.</p>`,
          tiles: ["I’m going", "to the newsagent’s", "to buy", "a magazine"],
          answer: "I’m going to the newsagent’s to buy a magazine.",
          extra: ["buys"],
          hint: "Where first, then why.",
          fbOk: "Yes!",
          fbBad: "Where is Emma going? Then: why?",
          fbText: "<b>I’m going to the newsagent’s to buy a magazine.</b> Where → to the newsagent’s. Why → to buy a magazine."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras’s dad needs some sausages for dinner.</p>`,
          before: "He is going to the butcher’s",
          after: "buy some sausages.",
          answer: "to",
          hint: "Why is he going? … + verb.",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: why → … + verb.",
          fbText: "He is going there <b>to</b> buy some sausages: <b>to</b> + verb tells us why."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Today I’m going to the bookshop [for] buy a book about Lviv. Then I’m going to the baker’s to get some cakes.",
          hint: "Check the words before buy and get.",
          fbOk: "Right.",
          fbBad: "Look at the rule: to + verb.",
          fbText: "Not <s>for buy</s>, but <b>to buy</b>: I’m going to the bookshop <b>to buy</b> a book. <b>To get</b> some cakes is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana writes to Emma.</p><p><i>There is only one shop in my village. I go there every day to buy bread and milk. But on Saturday, we’re going to Poltava. Mum needs some medicine, and Dmytro needs new shoes for school. So we’re going to the chemist’s and to a shoe shop.</i></p><p>Why are they going to Poltava?</p>`,
          opts: [
            "to buy bread and milk",
            "to see their friends",
            "to buy medicine and shoes"
          ],
          correct: 2,
          hint: "Find Poltava in the text. What do Mum and Dmytro need?",
          fbOk: "Well done!",
          fbBad: "Read about Saturday again.",
          fbText: "They’re going to Poltava <b>to buy medicine and shoes</b>. Oksana buys bread and milk at the village shop."
        }
      ],
      outro: {
        text: "Why? – To buy some bread. Use to + verb to say why you go somewhere.",
        learned: [
          "Say why you go to a shop: to buy, to get.",
          "Answer the question Why…? with To + verb.",
          "Use to before a verb, not for."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s2l3",
      title: "A few, both, all, no: a shopping list",
      short: "A few, both, no",
      icon: "scale",
      status: "verified",
      why: "Make a shopping list. Say what you have got and what you need.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What’s on Sofiia’s list?",
          body: `<p class="lead">Andrii and Sofiia look in the kitchen at their flat in Kyiv.</p><p><b>Sofiia:</b> There’s no bread, and we’ve only got a few apples.<br><b>Andrii:</b> Let’s go to the baker’s and the greengrocer’s. Both shops are near our flat.<br><b>Sofiia:</b> OK. All the shops in our street close at nine today.</p><p>No bread, a few apples, both shops: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Sofiia says: “There’s no bread.” What does she mean?</p>`,
          opts: [
            "There isn’t any bread.",
            "There is a lot of bread.",
            "There is some bread."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>No bread</b> = there isn’t <b>any</b> bread. They need to go to the baker’s."
        },
        {
          type: "info",
          title: "No and a few",
          body: `<ul><li><b>no</b> + noun = not any:<br>There’s <b>no</b> bread. = There <b>isn’t any</b> bread.<br>We’ve got <b>no</b> eggs. = We <b>haven’t got any</b> eggs.</li><li><b>a few</b> + plural noun: <b>a few</b> apples = some apples, but not many</li></ul><p>Not: <s>There isn’t no bread.</s> <s>a few milk</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "There’s {*no|any} milk in the fridge. We haven’t got {*any|no} eggs. We’ve got {*a few|much} bananas. We need {*a few|a} potatoes too.",
          hint: "Look at the verb: is it with not or without not?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: no = not any. A few + plural.",
          fbText: "There’s <b>no</b> milk. We haven’t got <b>any</b> eggs: <i>not</i> is already there. Bananas and potatoes are plural: <b>a few</b> bananas, <b>a few</b> potatoes."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii looks in the fridge. There isn’t any cheese.</p>`,
          before: "There’s",
          after: "cheese.",
          answer: "no",
          hint: "There isn’t any = there’s …",
          fbOk: "Yes!",
          fbBad: "Look at the rule: not any = …",
          fbText: "There isn’t any cheese. = There’s <b>no</b> cheese."
        },
        {
          type: "info",
          title: "Both and all",
          body: `<ul><li>two → <b>both</b>:<br>The baker’s and the greengrocer’s are near. <b>Both</b> shops are small. = <b>Both of them</b> are small.</li><li>three or more → <b>all</b>:<br>There are ten shops in our street. <b>All</b> the shops close at nine.</li></ul><p>Not: <s>the both shops</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Sofiia sees two T-shirts. One is red, and one is green. She likes the red one and the green one. What does she say?</p>`,
          opts: [
            "I like all T-shirts.",
            "I like both T-shirts.",
            "I like no T-shirts."
          ],
          correct: 1,
          hint: "How many T-shirts are there?",
          fbOk: "Right.",
          fbBad: "Two T-shirts: both or all?",
          fbText: "Two T-shirts, and she likes them: <b>both</b> T-shirts. <i>All</i> is for three or more."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Sofiia writes to Mum about the kitchen.</p>`,
          tiles: ["We’ve got", "no", "bread", "and", "a few", "apples"],
          answer: ["We’ve got no bread and a few apples.", "We’ve got a few apples and no bread."],
          extra: ["any"],
          hint: "No + bread. A few + apples.",
          fbOk: "Well done!",
          fbBad: "Which goes with bread: no or a few?",
          fbText: "<b>We’ve got no bread and a few apples.</b> We can’t count bread: <b>no</b> bread. Apples are plural: <b>a few</b> apples."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Sofiia’s list is wrong.</p>`,
          text: "Our list: [a few] bread, [!a few] bananas, [!no] eggs, some cheese.",
          hint: "Which of the things can we count?",
          fbOk: "Good eye!",
          fbBad: "Can we count bread?",
          fbText: "We can’t count bread. Not <s>a few bread</s>, but <b>some</b> bread. <b>A few</b> bananas and <b>no</b> eggs are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "There are five shops in our street in Kyiv. {*All|Both} the shops are small. The baker’s and the greengrocer’s are next to our flat. I go to {*both|all} of them every day. Today there’s {*no|any} bread at home, so we’re going to the baker’s. We need {*a few|much} cakes too.",
          hint: "Five shops or two shops? Cakes: can we count them?",
          fbOk: "Well done!",
          fbBad: "Two → both. Three or more → all.",
          fbText: "Five shops: <b>all</b> the shops. Two shops: <b>both</b> of them. There’s <b>no</b> bread = there isn’t any bread. Cakes are plural: <b>a few</b> cakes."
        }
      ],
      outro: {
        text: "No bread = not any bread. A few apples = some apples, but not many. Both = two; all = three or more.",
        learned: [
          "Say what you haven’t got with no: There’s no milk.",
          "Use a few with plural nouns: a few apples.",
          "Use both for two things and all for three or more."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s2l4",
      title: "Paying and getting change: pounds and hryvnias",
      short: "Change",
      icon: "plus",
      status: "verified",
      why: "In a shop, you pay and get your change. Say prices and count your change.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What is change?",
          body: `<p class="lead">Emma is at the newsagent’s in her town. Harry is the assistant.</p><p><b>Emma:</b> How much is this magazine?<br><b>Harry:</b> It’s three pounds fifty.<br><b>Emma:</b> And this pen?<br><b>Harry:</b> Eighty pence. That’s four pounds thirty, please.<br><b>Emma:</b> Here’s a five-pound note.<br><b>Harry:</b> Thanks. And here’s your change: seventy pence.</p><p>What is change?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma gives Harry £5. The magazine and the pen are £4.30. Harry gives Emma 70p.</p><p>What is change?</p>`,
          opts: [
            "the price of a magazine",
            "the money you get back",
            "a coin from Ukraine"
          ],
          correct: 1,
          hint: "Emma gives £5. What does Harry give her?",
          fbOk: "Yes!",
          fbBad: "Who gives the 70p, and who gets it?",
          fbText: "Emma pays £5, but the things are only £4.30. Harry gives her 70p back. That’s her <b>change</b>."
        },
        {
          type: "info",
          title: "Coins, notes and change",
          body: `<ul><li>a <b>coin</b>: 50p, a £1 coin, a £2 coin</li><li>a <b>note</b>: a £5 note, a £10 note</li><li><b>change</b> → the money you get back</li></ul><p>Say prices like this:<br>£3.50 → three pounds fifty<br>80p → eighty pence</p><p>In Ukraine: a ₴10 coin, a ₴100 note.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>A sandwich is £2.40. How do we say the price?</p>`,
          opts: [
            "two forty pounds",
            "two pence forty",
            "two pounds forty"
          ],
          correct: 2,
          hint: "£3.50 → three pounds fifty.",
          fbOk: "Right.",
          fbBad: "Look at the example: £3.50.",
          fbText: "£2.40 → <b>two pounds forty</b>: first the pounds, then the pence."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Mariia is at the baker’s in Kharkiv. The bread is ₴35. The cake is ₴40. She pays with a ₴100 note.</p><p>How much change does she get?</p>`,
          opts: [
            "₴75",
            "₴25",
            "₴65"
          ],
          correct: 1,
          hint: "First ₴35 + ₴40. Then ₴100 – that.",
          fbOk: "Well done!",
          fbBad: "How much are the bread and the cake together?",
          fbText: "The bread and the cake are ₴75. Mariia pays ₴100. Her <b>change</b> is ₴100 – ₴75 = <b>₴25</b>."
        },
        {
          type: "info",
          title: "How much does it cost?",
          body: `<p><b>How much is</b> it? = <b>How much does</b> it <b>cost</b>?<br><b>How much are</b> they? = <b>How much do</b> they <b>cost</b>?</p><p>– It <b>costs</b> £2. They <b>cost</b> £5.</p><p>The assistant says: <b>That’s</b> £4.30, please. … <b>Here’s your change.</b></p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Andrii is in a sports shop in Kyiv. He wants to know the price of a football.</p>`,
          tiles: ["How", "much", "does", "the football", "cost"],
          answer: "How much does the football cost?",
          extra: ["costs"],
          keepCase: true,
          hint: "Start with How much. After does: cost or costs?",
          fbOk: "Good eye!",
          fbBad: "After does, we say cost, without -s.",
          fbText: "<b>How much does the football cost?</b> After <b>does</b>: <b>cost</b>, without -s."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Taras is at a bookshop in Lviv.</p>`,
          text: "Taras: How much {*does|do} this book cost?<br>Assistant: It {*costs|cost} ₴180.<br>Taras: Here’s a ₴200 note.<br>Assistant: Thank you. Here’s your {*change|price|cost}: ₴20.",
          hint: "This book = it. And what do you get back?",
          fbOk: "Exactly.",
          fbBad: "It → does, costs. The money you get back → …",
          fbText: "How much <b>does</b> this book cost? – It <b>costs</b> ₴180. Taras pays ₴200 and gets ₴20 back: his <b>change</b>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>A pen is 60p. Tom pays with a £1 coin. £1 = 100p.</p>`,
          before: "Tom’s change is",
          after: "p.",
          answer: ["40", "forty"],
          hint: "100p – 60p = ?",
          fbOk: "Yes!",
          fbBad: "Tom pays 100p. The pen is 60p.",
          fbText: "£1 = 100p. 100p – 60p = <b>40p</b>. That’s Tom’s change: forty pence."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana writes to Emma.</p><p><i>Today Dmytro and I are at the shop in our village. Dmytro wants some juice and an ice cream. The juice is ₴45, and the ice cream is ₴35. He pays with a ₴100 note. Then he gets his change and buys some sweets with it!</i></p><p>How much change does Dmytro get?</p>`,
          opts: [
            "₴80",
            "₴55",
            "₴20"
          ],
          correct: 2,
          hint: "₴45 + ₴35 = ? Then ₴100 – that.",
          fbOk: "Well done!",
          fbBad: "How much are the juice and the ice cream together?",
          fbText: "The juice and the ice cream are ₴80. Dmytro pays ₴100. His <b>change</b> is <b>₴20</b>."
        }
      ],
      outro: {
        text: "You pay, and then you get your change. Say prices like this: £3.50 is three pounds fifty.",
        learned: [
          "Say prices like £3.50: three pounds fifty.",
          "Ask: How much does it cost?",
          "Count your change and understand “Here’s your change”."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s2l5",
      title: "Can I help you? In a clothes shop",
      short: "In a clothes shop",
      icon: "voice",
      status: "verified",
      why: "Shop assistants offer help. Say yes or no politely and ask to try clothes on.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Can I help you?",
          body: `<p class="lead">Emma and her mum are in a clothes shop in town.</p><p><b>Assistant:</b> Hello! Can I help you?<br><b>Emma:</b> No, thanks. I’m just looking.</p><p><i>Ten minutes later…</i><br><b>Emma:</b> Excuse me. Could I try on this jumper, please?<br><b>Assistant:</b> Of course. The changing rooms are over there.</p><p>When do we say “I’m just looking”?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read and choose.",
          body: `<p>The assistant asks Tom: “Can I help you?” Tom doesn’t need help now. What does he say?</p>`,
          opts: [
            "Yes, I can.",
            "No, I can’t.",
            "No, thanks. I’m just looking."
          ],
          correct: 2,
          hint: "Look at Emma’s answer to the assistant.",
          fbOk: "Yes!",
          fbBad: "What does Emma say to the assistant?",
          fbText: "<b>No, thanks. I’m just looking.</b> = I don’t need help now. <i>Yes, I can</i> answers <i>Can you…?</i>"
        },
        {
          type: "info",
          title: "In a shop",
          body: `<ul><li>The assistant offers help: <b>Can I help you?</b></li><li>Yes → <b>Yes, please. I’m looking for</b> a jumper.</li><li>No → <b>No, thanks. I’m just looking.</b></li><li><b>Could I try</b> it <b>on</b>, please? (try on = put on in a shop: is it OK for you?)</li><li><b>Have you got</b> it <b>in</b> blue?</li><li>a <b><u>chang</u>ing room</b> → a small room for trying on clothes</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Can I help you?", "Could I try it on, please?", "Have you got it in green?", "How much is it?", "Would you like a bag?"],
          right: ["Yes, please. I’m looking for a jacket.", "Of course. The changing rooms are over there.", "Sorry, only in red and blue.", "It’s £25.", "Yes, please. A small one."],
          hint: "Try on → the changing rooms. Green → a colour.",
          fbOk: "Well done!",
          fbBad: "Look at the key words: help, try on, green, how much, a bag.",
          fbText: "Can I help you? – <b>Yes, please. I’m looking for a jacket.</b> Could I try it on? – <b>Of course.</b> Green? – <b>Sorry, only in red and blue.</b> How much? – <b>It’s £25.</b> A bag? – <b>Yes, please. A small one.</b>"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Tom is in a sports shop.</p>`,
          text: "Assistant: Can I help you?<br>Tom: No, thanks. I’m just {*looking|watching|seeing}.<br><i>Five minutes later…</i><br>Tom: Excuse me. {*Could|Would} I try on these trainers, please?<br>Assistant: Of course. Here you {*are|is}.",
          hint: "Look at the phrases in the list: I’m just…, Could I…?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again: I’m just looking. Could I…?",
          fbText: "No, thanks. I’m just <b>looking</b>. <b>Could</b> I try on these trainers, please? Here you <b>are</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma likes a jacket in the shop. She wants to put it on and see. What does she ask?</p>`,
          opts: [
            "Could you try it on, please?",
            "Could I try it on, please?",
            "Would you like a jacket?"
          ],
          correct: 1,
          hint: "Who puts on the jacket: Emma or the assistant?",
          fbOk: "Right.",
          fbBad: "Emma wants to do it: Could I…?",
          fbText: "Emma wants to put it on: <b>Could I try it on, please?</b> <i>Could you…?</i> asks the assistant to do it."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Andrii is in a clothes shop in Kyiv. He likes a jacket. He asks the assistant.</p>`,
          tiles: ["Could", "I", "try", "on", "this", "jacket"],
          answer: ["Could I try on this jacket?", "Could I try this jacket on?"],
          extra: ["tries"],
          keepCase: true,
          hint: "Start with Could I.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Could I try…?",
          fbText: "<b>Could I try on this jacket?</b> or <b>Could I try this jacket on?</b> Both are correct. After <b>Could I</b>: <b>try</b>, without -s."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Mariia is in a shop in Kharkiv. The assistant asks: “Can I help you?” Mariia doesn’t need help now.</p>`,
          before: "No, thanks. I’m just",
          after: ".",
          answer: "looking",
          hint: "No, thanks. I’m just …",
          fbOk: "Good eye!",
          fbBad: "Look at Emma’s answer in the shop.",
          fbText: "<b>No, thanks. I’m just looking.</b> It’s a polite way to say no."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Oksana is in a clothes shop in Poltava.</p><p><b>Assistant:</b> Good morning! Can I help you?<br><b>Oksana:</b> Yes, please. I’m looking for a jumper for my brother.<br><b>Assistant:</b> Is this one OK? It’s ₴450.<br><b>Oksana:</b> Yes, it’s nice. Have you got it in green?<br><b>Assistant:</b> Yes, here you are.</p><p>Who is the jumper for?</p>`,
          opts: [
            "Oksana’s brother",
            "Oksana’s mum",
            "Oksana’s friend"
          ],
          correct: 0,
          hint: "Find “I’m looking for” in the dialogue.",
          fbOk: "Well done!",
          fbBad: "Read what Oksana says about her brother.",
          fbText: "Oksana says: “I’m looking for a jumper <b>for my brother</b>.” Her brother is Dmytro."
        }
      ],
      outro: {
        text: "Answer “Can I help you?” with “Yes, please” or “No, thanks. I’m just looking.” Ask: “Could I try it on?”",
        learned: [
          "Say yes or no when an assistant offers help.",
          "Ask politely: Could I try it on, please?",
          "Ask about colours: Have you got it in green?"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s2l6",
      title: "It’s too big! Too small, too expensive",
      short: "Too big",
      icon: "eye",
      status: "verified",
      why: "Sometimes clothes aren’t right for you. Say what the problem is and choose.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What’s wrong with the jumper?",
          body: `<p class="lead">Emma tries on the jumper in the changing room.</p><p><b>Emma:</b> Mum, it’s too big!<br><b>Mum:</b> Let’s look for a smaller one. Here. This one is £35.<br><b>Emma:</b> Oh no, that’s too expensive. I’ve only got £20.<br><b>Mum:</b> Look, this blue T-shirt is £12.<br><b>Emma:</b> I’ll take the T-shirt, because it’s cheap and I love blue!</p><p>Too big, too expensive: what does <b>too</b> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma says: “It’s too big!” What does she mean?</p>`,
          opts: [
            "It’s big, and it’s OK for her.",
            "It’s big, and that’s a problem.",
            "It’s small, and that’s a problem."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Too big</b> = bigger than you need. It’s a problem: Emma can’t wear it."
        },
        {
          type: "info",
          title: "Too + adjective",
          body: `<p>The jumper is <b>very</b> big. → It’s big, but maybe it’s OK.<br>The jumper is <b>too</b> big. → It’s a problem. Emma can’t wear it.</p><ul><li><b>too</b> + adjective: too big, too small, too long, too ex<u>pen</u>sive</li><li>It’s <b>too</b> expensive. I can’t buy it.</li><li>Not: <s>It’s to big.</s></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Matvii is in a shoe shop in Kyiv. He needs size 38. He has got ₴1,500.</p>`,
          text: "The white trainers are size 40. They’re too {*big|small}. The black boots are size 36. They’re too {*small|big}. The red trainers are size 38, but they’re ₴2,500. They’re too {*expensive|cheap}.",
          hint: "Compare each size with 38. Compare the price with ₴1,500.",
          fbOk: "Exactly.",
          fbBad: "Is 40 more or less than 38? Is ₴2,500 more or less than ₴1,500?",
          fbText: "Size 40 is more than 38: <b>too big</b>. Size 36 is less: <b>too small</b>. ₴2,500 is more than Matvii has got: <b>too expensive</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma has got £20. The jacket is £50. What does she say?</p>`,
          opts: [
            "It’s too expensive. I can’t buy it.",
            "It’s too cheap. I can’t buy it.",
            "It’s very cheap. I can buy it."
          ],
          correct: 0,
          hint: "Is £50 more or less than £20?",
          fbOk: "Right.",
          fbBad: "Can Emma pay £50 with £20?",
          fbText: "£50 is more than Emma has got. It’s a problem: <b>It’s too expensive. I can’t buy it.</b>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Matvii tells his mum about the white trainers.</p>`,
          tiles: ["These", "trainers", "are", "too", "big"],
          answer: "These trainers are too big.",
          extra: ["to"],
          keepCase: true,
          hint: "Start with These. Too or to?",
          fbOk: "Yes!",
          fbBad: "Too + adjective: too big.",
          fbText: "<b>These trainers are too big.</b> We write <b>too</b> with two o’s before an adjective."
        },
        {
          type: "info",
          title: "I’ll take it, because…",
          body: `<p>Choose and say why:</p><ul><li><b>I’ll take</b> the blue one, <b>because</b> it’s cheap.</li><li><b>I’ll take</b> these trainers, <b>because</b> they aren’t too big.</li></ul><p>I’ll = I will. You decide now.<br><b>the blue one</b> = the blue T-shirt</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Mariia likes two T-shirts. The red one is ₴300. The green one is ₴600. She has got ₴400. What does she say?</p>`,
          opts: [
            "I’ll take the green one, because it’s cheap.",
            "I’ll take the red one, because the green one is too expensive.",
            "I’ll take the green one, because the red one is too expensive."
          ],
          correct: 1,
          hint: "Which T-shirt can Mariia buy with ₴400?",
          fbOk: "Well done!",
          fbBad: "Is ₴600 more or less than ₴400?",
          fbText: "Mariia has got ₴400. The green one is ₴600: <b>too expensive</b>. So she says: <b>I’ll take the red one, because the green one is too expensive.</b>"
        },
        {
          type: "pick",
          sk: "write",
          title: "Find the mistake.",
          body: `<p>One word in Matvii’s message is wrong.</p>`,
          text: "Mum, these boots are [to] small for me. Let’s ask for a bigger pair.",
          hint: "Look at the word before small.",
          fbOk: "Good eye!",
          fbBad: "Too or to before an adjective?",
          fbText: "Before an adjective, we write <b>too</b>: these boots are <b>too</b> small."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma from Poltava. She has got ₴2,000 for a winter coat.</p>`,
          text: "Today I’m in Poltava with Mum. We’re looking for a winter coat for me. The red coat is {*too|to} long. I can’t walk in it! The green coat is ₴4,000. It’s too {*expensive|cheap} for us. The blue coat is ₴1,800, and it isn’t too long. I’ll take {*the blue one|the red one}, because it’s warm and nice!",
          hint: "Which coat isn’t too long and isn’t too expensive?",
          fbOk: "Well done!",
          fbBad: "Look at the problem with each coat.",
          fbText: "The red coat is <b>too</b> long. The green coat is ₴4,000: <b>too expensive</b>. The blue coat is OK, so Oksana says: I’ll take <b>the blue one</b>."
        }
      ],
      outro: {
        text: "Too big, too small, too expensive: too means it’s a problem. Choose and say why: I’ll take the blue one, because…",
        learned: [
          "Say what is wrong: It’s too big.",
          "See the difference between very big and too big.",
          "Choose and say why: I’ll take the blue one, because it’s cheap."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s2l7",
      title: "A shopping day in Lviv",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e6s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras go shopping?",
          body: `<p class="lead">Taras and his friend Ostap go shopping in Lviv on Saturday.</p><p>Help them in the shops. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Taras needs some medicine for his little sister, Zlata. Where does he go?</p>`,
          opts: [
            "the newsagent’s",
            "the butcher’s",
            "the chemist’s"
          ],
          correct: 2,
          pre: "e6s2l1",
          fbOk: "Right.",
          fbBad: "Which shop sells medicine?",
          fbText: "You buy medicine at the <b>chemist’s</b>. The newsagent’s sells newspapers. The butcher’s sells meat."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Write the missing word.",
          body: `<p>Ostap wants a magazine about football.</p>`,
          before: "Ostap is going to the newsagent’s",
          after: "buy a magazine.",
          answer: "to",
          pre: "e6s2l2",
          fbOk: "Well done!",
          fbBad: "Why is he going? … + verb.",
          fbText: "Ostap is going there <b>to</b> buy a magazine: <b>to</b> + verb."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Taras writes a shopping list.</p>`,
          text: "There’s {*no|any} milk at home. We need {*a few|much} eggs. The baker’s and the butcher’s are near my house. {*Both|All} of them are open today.",
          pre: "e6s2l3",
          hint: "No = not any. Two shops → …",
          fbOk: "Exactly.",
          fbBad: "Check: no = not any, a few + plural, two → both.",
          fbText: "There’s <b>no</b> milk. We need <b>a few</b> eggs. Two shops: <b>both</b> of them."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>At the bookshop, the book is ₴150 and the card is ₴40. Taras pays with a ₴200 note. How much change does he get?</p>`,
          opts: [
            "₴10",
            "₴190",
            "₴50"
          ],
          correct: 0,
          pre: "e6s2l4",
          fbOk: "Yes!",
          fbBad: "₴150 + ₴40 = ? Then ₴200 – that.",
          fbText: "The book and the card are ₴190. Taras pays ₴200. His <b>change</b> is <b>₴10</b>."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Taras likes a jacket in a clothes shop. He asks the assistant.</p>`,
          tiles: ["Could", "I", "try", "it", "on"],
          answer: "Could I try it on?",
          extra: ["tries"],
          keepCase: true,
          pre: "e6s2l5",
          hint: "Start with Could I. Where does it go?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: Could I try it on?",
          fbText: "<b>Could I try it on?</b> With <b>it</b>, we say try <b>it</b> on."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Taras has got ₴1,000.</p>`,
          text: "The green jacket is too {*small|big}. It’s Zlata’s size! Taras can’t put it on. The black jacket is ₴2,000. It’s too {*expensive|cheap} for him. The blue jacket is ₴900. He says: “I’ll take the blue one, {*because|but} it isn’t too expensive.”",
          pre: "e6s2l6",
          hint: "Zlata is his little sister: is the jacket big or small? ₴2,000 or ₴1,000?",
          fbOk: "Well done!",
          fbBad: "Look at the problem with each jacket.",
          fbText: "He can’t put it on: it’s <b>too small</b>. ₴2,000 is more than ₴1,000: <b>too expensive</b>. I’ll take it, <b>because</b> it isn’t too expensive."
        }
      ],
      outro: {
        text: "Well done! Now you can find the right shop, pay and count your change, and buy clothes politely.",
        learned: [
          "Name shops and say why you go there.",
          "Make a shopping list with no, a few, both and all.",
          "Pay, count your change and ask: Could I try it on?",
          "Say what is wrong: It’s too expensive."
        ]
      }
    }
  ]
});
