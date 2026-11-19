/* Слід · Англійська мова, 4 клас — «My home» (e4s2)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Помешкання — види помешкань, умеблювання» (PDF с. 62);
   функція «називати/описувати когось/щось» (с. 62–63); описує предмет чи малюнок (A1, с. 55); граматика — there is(n’t)/are(n’t),
   basic prepositions of place, ‘some’ and ‘any’ in questions and negative statements, irregular plural (інвентар 3 кл., с. 62 — повторення за content/eng/plan.js):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8); герої й місця — як у e4s1.
   Форми й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g4-e4s2.md, «Нотатки агента»).
   Статус: verified (verifier-e4s2, 2026-11-19, reports/verify/e4s2.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s2",
  grade: 4,
  weeks: [6, 9],
  title: "My home",
  why: "To describe your home and your room. And to say where things are.",
  requires: ["e4s1l2", "e4s1l4", "e4s1l5"],
  meta: { author: "writer-e4s2", created: "2026-11-19", factcheck: "verifier-e4s2 (reports/verify/e4s2.md)", teacher: null },
  badges: [
    { id: "e4s2boss", name: "Home designer", icon: "trophy", desc: "Finish the final lesson “My home”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s2l1",
      title: "Homes: a house or a flat?",
      short: "Homes",
      icon: "home",
      status: "verified",
      why: "Some people live in a house. Some people live in a flat. Talk about your home.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where do the pen friends live?",
          body: `<p class="lead">The pen friends write about their homes.</p><p><b>Andrii:</b> I live in a flat in Kyiv. It’s in a big block of flats.<br><b>Emma:</b> I live in a house. It’s got a garden.<br><b>Oksana:</b> My home is a house too. It’s in Zelena Dolyna.</p><p>A house or a flat: what is different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s building is very tall. Lots of families live in it. What is it?</p>`,
          opts: [
            "a house",
            "a block of flats",
            "a garden"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "It’s a <b>block of flats</b>. Each family has got a <b>flat</b> in it. The next screen shows more words."
        },
        {
          type: "info",
          title: "A house and a flat",
          body: `<ul><li>a <b>house</b> – a home for one family</li><li>a <b>flat</b> – a home in a big building</li><li>a <b>block of flats</b> – lots of flats in one building</li><li>a <b>lift</b> – it goes up and down</li><li><b>stairs</b> – you walk up them</li><li>a <b><u>bal</u>cony</b> – a small place outside a flat</li><li>a <b><u>gar</u>den</b> – grass, flowers and trees</li></ul><p>The underlined part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Emma: “Only my family lives in our building. It’s got a big garden.”</p><p>What is Emma’s home?</p>`,
          opts: [
            "a flat",
            "a house",
            "a block of flats"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "One family and a garden: what is it?",
          fbText: "A home for one family, with a garden: it’s a <b>house</b>. Lots of families live in a block of flats."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s flat is very high up. He doesn’t want to walk. What does he take?</p>`,
          opts: [
            "the stairs",
            "the garden",
            "the lift"
          ],
          correct: 2,
          hint: "What goes up and down?",
          fbOk: "Right.",
          fbBad: "Andrii doesn’t want to walk.",
          fbText: "The <b>lift</b> goes up and down. On the <b>stairs</b>, you walk."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "I live in a {*flat|house} in a block of flats. We take the {*lift|garden}. Our flat {*has|have} got a balcony. Grandma’s home isn’t in a block of flats. She has got a {*house|flat} with a big garden.",
          hint: "Which home is in a block of flats?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "A home in a block of flats is a <b>flat</b>. We take the <b>lift</b>. Our flat <b>has</b> got a balcony. Grandma’s home isn’t in a block of flats: it’s a <b>house</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+gar|den", "+bal|co|ny"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>gar</u>den, <u>bal</u>cony: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana’s house hasn’t got a lift.</p>`,
          before: "She walks up the",
          after: ".",
          answer: "stairs",
          hint: "No lift? Then you walk.",
          fbOk: "Exactly.",
          fbBad: "Look at the list: you walk up them.",
          fbText: "There’s no lift, so Oksana walks up the <b>stairs</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p>Oksana writes:</p><p><i>I live in a house. We’ve got a big garden. Our house hasn’t got a lift. It’s got stairs. Andrii’s flat has got a balcony.</i></p><p>What has Oksana’s home got?</p>`,
          opts: [
            "a garden",
            "a lift",
            "stairs",
            "a balcony"
          ],
          correct: [0, 2],
          hint: "Read about Oksana’s house. The balcony is in Andrii’s flat.",
          fbOk: "Good eye!",
          fbBad: "Read Oksana’s text again.",
          fbText: "Oksana’s house has got <b>a garden</b> and <b>stairs</b>. It hasn’t got a lift. The balcony is in Andrii’s flat."
        }
      ],
      outro: {
        text: "A house is a home for one family. A flat is a home in a block of flats.",
        learned: [
          "Say where you live: in a house or in a flat.",
          "Name parts of a home: a garden, a balcony, a lift.",
          "Use has got to talk about a home."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s2l2",
      title: "Rooms: there is, there are",
      short: "Rooms",
      icon: "map",
      status: "verified",
      why: "Show a friend your home. Say what rooms it has got.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What rooms are in Andrii’s flat?",
          body: `<p class="lead">Andrii writes to Emma about his flat.</p><p><i>There is a kitchen. There is a living room. There are two bedrooms: one for Mum and Dad, and one for Sofiia and me. There is a bathroom too.</i></p><p>Look: there <b>is</b> a kitchen, but there <b>are</b> two bedrooms. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma’s house has got three bedrooms. Which sentence is correct?</p>`,
          opts: [
            "There is three bedrooms.",
            "There are three bedrooms.",
            "There are three bedroom."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>There are three bedrooms.</b> Why <b>are</b>? You can find out soon."
        },
        {
          type: "info",
          title: "Rooms",
          body: `<ul><li>a <b><u>kitch</u>en</b> – we cook and eat here</li><li>a <b><u>liv</u>ing room</b> – we sit, talk and watch TV</li><li>a <b><u>bed</u>room</b> – we sleep here</li><li>a <b><u>bath</u>room</b> – we wash here</li><li>a <b>hall</b> – we come into the flat here</li></ul><p>The underlined part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Grandma cooks dinner. Where is she?</p>`,
          opts: [
            "in the bedroom",
            "in the bathroom",
            "in the kitchen"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Where do we cook?",
          fbText: "We cook in the <b>kitchen</b>. We sleep in the bedroom. We wash in the bathroom."
        },
        {
          type: "info",
          title: "There is, there are",
          body: `<p>There <b>is</b> a kitchen. <i>(one)</i><br>There <b>are</b> two bedrooms. <i>(two, three…)</i></p><ul><li>one → <b>there is</b> = <b>there’s</b></li><li>two or more → <b>there are</b></li></ul><p>Not: <s>There is two bedrooms.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about her house.</p>`,
          text: "There {*are|is} three bedrooms in our house. There {*is|are} a big kitchen. There {*is|are} one bathroom. There {*are|is} lots of flowers in the garden.",
          hint: "Is it one thing, or two or more?",
          fbOk: "Exactly.",
          fbBad: "One thing or more? Look at the list.",
          fbText: "Three bedrooms, lots of flowers: <b>there are</b>. One kitchen, one bathroom: <b>there is</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "I live in a flat in Kharkiv. There is a big living room. There [is] two bedrooms. There is a small kitchen.",
          hint: "Find two or more things. Is it is or are?",
          fbOk: "Good eye!",
          fbBad: "Check each is. One thing or more?",
          fbText: "Two bedrooms are more than one. So it’s <b>there are</b> two bedrooms. One living room, one kitchen: <b>there is</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes about his flat.</p>`,
          tiles: ["there", "are", "two", "bedrooms", "in", "my", "flat"],
          answer: ["There are two bedrooms in my flat.", "In my flat there are two bedrooms."],
          extra: ["is"],
          hint: "Two bedrooms: is or are?",
          fbOk: "Well done!",
          fbBad: "Start with There or In my flat.",
          fbText: "<b>There are</b> two bedrooms in my flat. Two bedrooms: <b>are</b>, not <i>is</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>We cook and eat in this room.</p>`,
          before: "It’s the",
          after: ".",
          answer: "kitchen",
          fbOk: "Yes!",
          fbBad: "Look at the list of rooms.",
          fbText: "We cook and eat in the <b>kitchen</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her house.</p>`,
          text: "Our house is small. There {*is|are} a big kitchen. Grandma cooks in the {*kitchen|bedroom}. There {*are|is} two bedrooms. There {*is|are} one bathroom. We wash in the {*bathroom|living room}.",
          hint: "One thing or two? Where do we cook and wash?",
          fbOk: "Well done!",
          fbBad: "Read the text again. One or two?",
          fbText: "One kitchen, one bathroom: <b>there is</b>. Two bedrooms: <b>there are</b>. We cook in the <b>kitchen</b> and wash in the <b>bathroom</b>."
        }
      ],
      outro: {
        text: "For one thing, we say there is. For two or more, we say there are.",
        learned: [
          "Name the rooms in a home.",
          "Use there is and there are.",
          "Write about your home."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s2l3",
      title: "Furniture in my room",
      short: "Furniture",
      icon: "bulb",
      status: "verified",
      why: "Tell a friend what is in your room.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What’s in Mariia’s room?",
          body: `<p class="lead">Mariia writes to the pen-friend club about her room.</p><p><i>This is my room. There’s a bed. There’s a desk with a chair. My clothes are in a big wardrobe. There are two shelves for books. I love my yellow lamp!</i></p><p>What do we call these things?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>A bed, a desk and a chair. What is one word for all of them?</p>`,
          opts: [
            "furniture",
            "rooms",
            "clothes"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "A bed, a desk and a chair are <b>furniture</b>. The next screen shows more furniture."
        },
        {
          type: "info",
          title: "Furniture",
          body: `<p>These things are <b><u>fur</u>niture</b>:</p><ul><li>a <b>bed</b> – you sleep in it</li><li>a <b>desk</b> – you do homework at it</li><li>a <b>chair</b> – you sit on it</li><li>a <b><u>ward</u>robe</b> – your clothes are in it</li><li>a <b>shelf</b> – your books are on it</li></ul><p>Also in a room:</p><ul><li>a <b>lamp</b> – it gives light</li><li>a <b><u>car</u>pet</b> – it’s on the floor</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Andrii reads in bed at night. What does he need?</p>`,
          opts: [
            "a carpet",
            "a wardrobe",
            "a lamp"
          ],
          correct: 2,
          hint: "At night it’s dark. What gives light?",
          fbOk: "Right.",
          fbBad: "Look at the list: what gives light?",
          fbText: "A <b>lamp</b> gives light. A carpet is on the floor. Clothes are in a wardrobe."
        },
        {
          type: "info",
          title: "One shelf, two shelves",
          body: `<ul><li>a bed → two bed<b>s</b></li><li>a lamp → three lamp<b>s</b></li><li>a shel<b>f</b> → two shel<b>ves</b></li></ul><p>We say <b>furniture</b>. Not: <s>a furniture</s>, <s>furnitures</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his room.</p>`,
          text: "There {*are|is} two {*beds|bed} in my room: for me and for Sofiia. There {*is|are} one desk. There are three {*shelves|shelfs} on the wall.",
          hint: "One or two? Look at the list: shelf, shelves.",
          fbOk: "Exactly.",
          fbBad: "Is it one thing, or two or more?",
          fbText: "Two <b>beds</b>: <b>there are</b>. One desk: <b>there is</b>. One shelf, three <b>shelves</b>: <i>f</i> changes to <i>ves</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+fur|ni|ture", "+ward|robe", "+car|pet"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>fur</u>niture, <u>ward</u>robe, <u>car</u>pet: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii does his homework at it.</p>`,
          before: "It’s a",
          after: ".",
          answer: ["desk", "table"],
          hint: "Look at the list: homework.",
          fbOk: "Well done!",
          fbBad: "Where do you do homework?",
          fbText: "You do homework at a <b>desk</b>."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it a room or furniture?</p>`,
          bins: ["Rooms", "Furniture"],
          items: [
            ["kitchen", 0],
            ["bedroom", 0],
            ["hall", 0],
            ["wardrobe", 1],
            ["desk", 1],
            ["bed", 1]
          ],
          fbOk: "Good eye!",
          fbBad: "Can you walk into it? Then it’s a room.",
          fbText: "Rooms: <b>kitchen</b>, <b>bedroom</b>, <b>hall</b>. Furniture: <b>wardrobe</b>, <b>desk</b>, <b>bed</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her room.</p>`,
          text: "My room is small. There {*is|are} a bed. My clothes are in the {*wardrobe|lamp}. There are lots of books on my two {*shelves|shelfs}. At night I read with my {*lamp|carpet}.",
          hint: "Where are clothes? What gives light?",
          fbOk: "Well done!",
          fbBad: "Look at the furniture list again.",
          fbText: "One bed: <b>there is</b>. Clothes are in the <b>wardrobe</b>. Two <b>shelves</b>, not <i>shelfs</i>. A <b>lamp</b> gives light."
        }
      ],
      outro: {
        text: "A bed, a desk and a wardrobe are furniture. One shelf, two shelves.",
        learned: [
          "Name furniture in a room.",
          "Say what furniture is for: You sleep in a bed.",
          "Use plurals: beds, lamps, shelves."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s2l4",
      title: "Where is the cat? In, on, under, next to",
      short: "Where is it?",
      icon: "target",
      status: "verified",
      why: "Things get lost at home. Say where they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Where is Murka?",
          body: `<p class="lead">Oksana can’t find her cat, Murka.</p><p><b>Oksana:</b> Murka isn’t on my bed. She isn’t in the wardrobe. Where is she?<br><b>Dmytro:</b> Look! She’s under the bed!</p><p>How do we say where things are?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Murka sits very near the sofa. Where is she?</p>`,
          opts: [
            "next to the sofa",
            "in the sofa",
            "under the sofa"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Very near: Murka is <b>next to</b> the sofa. The next screen shows more words."
        },
        {
          type: "info",
          title: "In, on, under, next to",
          body: `<ul><li>The clothes are <b>in</b> the wardrobe.</li><li>The lamp is <b>on</b> the desk.</li><li>The cat is <b>under</b> the bed.</li><li>The chair is <b>next to</b> the desk. It’s very near.</li></ul><p><b>on</b> ↔ <b>under</b>: The book is <b>on</b> the table. The bag is <b>under</b> the table.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the words that say where things are.",
          body: `<p>Dmytro writes about his room. Find three words.</p>`,
          text: "My ball is [under] the bed. My toys are [in] a big box. The box is [on] the carpet.",
          hint: "Look at the list: in, on, under.",
          fbOk: "Well done!",
          fbBad: "Look at the examples again.",
          fbText: "<b>under</b> the bed, <b>in</b> a big box, <b>on</b> the carpet: these words say where things are."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “Murka likes the box under my desk. She sleeps in it.”</p><p>Where does Murka sleep?</p>`,
          opts: [
            "on the desk",
            "in the box",
            "next to the bed"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read Oksana’s words again.",
          fbText: "Murka sleeps <b>in</b> the box. The box is <b>under</b> the desk."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about his room.</p>`,
          text: "The carpet is {*on|under} the floor. My clothes are {*in|under} the wardrobe. The chair is {*next to|in} the desk. My football is {*under|on} the bed. It’s dark there.",
          hint: "Where is it dark: on the bed or under it?",
          fbOk: "Exactly.",
          fbBad: "Look at the examples again.",
          fbText: "The carpet is <b>on</b> the floor. Clothes are <b>in</b> the wardrobe. The chair is <b>next to</b> the desk. It’s dark <b>under</b> the bed."
        },
        {
          type: "info",
          title: "Where is…? Where are…?",
          body: `<p><b>Where is</b> the cat? – <b>It’s</b> under the bed.<br><b>Where are</b> my books? – <b>They’re</b> on the shelf.</p><ul><li>one → where <b>is</b>, <b>it’s</b></li><li>two or more → where <b>are</b>, <b>they’re</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Where {*is|are} my lamp? – {*It’s|They’re} on the desk. Where {*are|is} my books? – {*They’re|It’s} on the shelf.",
          hint: "One lamp, but two or more books.",
          fbOk: "Right.",
          fbBad: "Is it one thing, or two or more?",
          fbText: "One lamp: <b>Where is</b>…? – <b>It’s</b>… Books are more than one: <b>Where are</b>…? – <b>They’re</b>…"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana can’t find her books. She asks Dmytro.</p>`,
          tiles: ["where", "are", "my", "books"],
          answer: "Where are my books?",
          extra: ["is"],
          fbOk: "Well done!",
          fbBad: "Books: one or more? Start with Where.",
          fbText: "<b>Where are</b> my books? Books are more than one, so it’s <b>are</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><b>Dmytro:</b> I can’t find my ball. It isn’t in the box. It isn’t on the sofa.<br><b>Oksana:</b> Look! It’s under the chair, next to the window.</p><p>Where is Dmytro’s ball?</p>`,
          opts: [
            "in the box",
            "on the sofa",
            "under the chair"
          ],
          correct: 2,
          hint: "Read what Oksana says.",
          fbOk: "Good eye!",
          fbBad: "The ball isn’t in the box. It isn’t on the sofa.",
          fbText: "Oksana says: “It’s <b>under the chair</b>.” The chair is <b>next to</b> the window."
        }
      ],
      outro: {
        text: "In, on, under and next to say where things are. Where is the cat? It’s under the bed.",
        learned: [
          "Say where things are: in, on, under, next to.",
          "Ask: Where is…? Where are…?",
          "Answer: It’s on the desk. They’re on the shelf."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s2l5",
      title: "Is there a lamp? Are there any books?",
      short: "Questions",
      icon: "eye",
      status: "verified",
      why: "Ask a friend about their room. Answer their questions.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What’s in Oksana’s room?",
          body: `<p class="lead">Emma asks Oksana about her room.</p><p><b>Emma:</b> Is there a computer in your room?<br><b>Oksana:</b> No, there isn’t.<br><b>Emma:</b> Are there any posters on the walls?<br><b>Oksana:</b> Yes, there are. There are two posters of horses.</p><p>How do we ask about a room?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma asks about Andrii’s room. Which question is correct?</p>`,
          opts: [
            "There a desk is in your room?",
            "Is there a desk in your room?",
            "Are there a desk in your room?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "The question is <b>Is there a desk in your room?</b> <i>Is</i> comes first. The next screen shows how."
        },
        {
          type: "info",
          title: "Is there…? Are there…?",
          body: `<ul><li><b>Is there</b> a lamp?<br>– Yes, there <b>is</b>. / No, there <b>isn’t</b>.</li><li><b>Are there any</b> books?<br>– Yes, there <b>are</b>. / No, there <b>aren’t</b>.</li></ul><p>Not: <s>Yes, there’s.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Is|Are} there a sofa in your room? – No, there {*isn’t|aren’t}. {*Are|Is} there any posters? – Yes, there {*are|is}.",
          hint: "One sofa, but two or more posters.",
          fbOk: "Exactly.",
          fbBad: "One thing or more? Look at the list.",
          fbText: "One sofa: <b>Is there</b>…? – No, there <b>isn’t</b>. Posters are more than one: <b>Are there</b>…? – Yes, there <b>are</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Andrii hasn’t got a TV in his room.</p><p>Emma: “Is there a TV in your room?” What does Andrii say?</p>`,
          opts: [
            "No, there isn’t.",
            "No, there aren’t.",
            "Yes, there is."
          ],
          correct: 0,
          fbOk: "Right.",
          fbBad: "Has Andrii got a TV? One TV or more?",
          fbText: "Andrii hasn’t got a TV, so it’s <b>No</b>. One TV: <b>No, there isn’t.</b>"
        },
        {
          type: "info",
          title: "Some and any",
          body: `<ul><li>There are <b>some</b> books on the shelf.</li><li>There aren’t <b>any</b> toys on the floor.</li><li>Are there <b>any</b> posters?</li></ul><p><b>some</b> → in yes sentences<br><b>any</b> → with <b>not</b> and in questions</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her room.</p>`,
          text: "There are {*some|any} books on my desk. There aren’t {*any|some} toys on the floor. There are {*some|any} pictures on the wall.",
          hint: "Look for not in the sentence.",
          fbOk: "Well done!",
          fbBad: "Look at the list: some or any?",
          fbText: "There are <b>some</b> books, <b>some</b> pictures: yes sentences. There <b>aren’t any</b> toys: with <i>not</i>, we say <b>any</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks Andrii a question.</p>`,
          tiles: ["are", "there", "any", "posters", "in", "your", "room"],
          answer: ["Are there any posters in your room?", "In your room are there any posters?"],
          extra: ["is"],
          hint: "A question: which word comes first?",
          fbOk: "Good eye!",
          fbBad: "In a question, are comes first.",
          fbText: "<b>Are there any</b> posters in your room? In a question, <b>are</b> comes before <b>there</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma: “Are there any shelves in your room?”</p><p>Andrii has got three shelves.</p>`,
          before: "Yes, there",
          after: ".",
          answer: "are",
          fbOk: "Yes!",
          fbBad: "Shelves: one or more?",
          fbText: "Three shelves are more than one: <b>Yes, there are.</b>"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras asks Mariia about her room.</p>`,
          text: "Taras: {*Is|Are} there a desk in your room? Mariia: Yes, there {*is|are}. Taras: Are there {*any|a} toys on the floor? Mariia: No, there {*aren’t|isn’t}. My room is very clean!",
          hint: "One desk, but two or more toys.",
          fbOk: "Well done!",
          fbBad: "Check the list: is or are?",
          fbText: "One desk: <b>Is there</b>…? – Yes, there <b>is</b>. Toys are more than one: <b>Are there any</b>…? – No, there <b>aren’t</b>."
        }
      ],
      outro: {
        text: "Ask: Is there a lamp? Are there any books? Answer: Yes, there is. No, there aren’t.",
        learned: [
          "Ask about a room: Is there…? Are there any…?",
          "Give short answers: Yes, there is. No, there aren’t.",
          "Use some and any."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s2l6",
      title: "My dream room: reading and writing",
      short: "Dream room",
      icon: "book",
      status: "verified",
      why: "Read about a dream room. Then write about your dream room.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What’s in Andrii’s dream room?",
          body: `<p class="lead">The pen-friend club has a new task: “My dream room”.</p><p>A dream room is the room you want. Andrii writes a post about his dream room.</p><p>What is in it? Read and find out.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Andrii’s dream room, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>I live in a flat in Kyiv. My room is small. My sister Sofiia sleeps there too. There are two beds and a desk. My room hasn’t got a balcony.</i></p><p>Who sleeps in Andrii’s room?</p>`,
          opts: [
            "Andrii and Sofiia",
            "Andrii and Emma",
            "only Andrii"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read about Sofiia again.",
          fbText: "“My sister Sofiia sleeps there too.” So <b>Andrii and Sofiia</b> sleep in the room."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Andrii’s dream room, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>My dream room is big. It’s got a big window and a balcony. There’s a desk next to the window. There’s a computer on the desk. There are lots of shelves for my books.</i></p><p>Which sentences are about the dream room?</p>`,
          opts: [
            "The room is big.",
            "The desk is next to the window.",
            "The desk is under the window.",
            "There aren’t any shelves."
          ],
          correct: [0, 1],
          hint: "Find the desk in the text. Where is it?",
          fbOk: "Good eye!",
          fbBad: "Read part 2 again.",
          fbText: "The room is <b>big</b>. The desk is <b>next to</b> the window, not under it. There are <b>lots of shelves</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Andrii’s dream room, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>There’s a big red sofa. There’s a soft carpet on the floor. Under the sofa, there’s a box for my games. Is there a TV? No, there isn’t. I’ve got lots of books! What’s in your dream room?</i></p><p>Where is the box?</p>`,
          opts: [
            "on the sofa",
            "under the sofa",
            "next to the TV"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Read about the sofa again.",
          fbText: "“<b>Under the sofa</b>, there’s a box.” There isn’t a TV in the dream room."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>You read all three parts. What is Andrii’s post about?</p>`,
          opts: [
            "his school",
            "Emma’s house",
            "the room he wants"
          ],
          correct: 2,
          fbOk: "Exactly.",
          fbBad: "What is a dream room?",
          fbText: "A dream room is the room you want. Andrii’s post is about <b>the room he wants</b>."
        },
        {
          type: "info",
          title: "Write about your room",
          body: `<p>A plan for your post:</p><ul><li>Where do you live? – I live in a flat.</li><li>What is in the room? – There is… There are…</li><li>Where are things? – in, on, under, next to</li><li>What isn’t there? – There aren’t any…</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her dream room.</p>`,
          text: "My dream room is big. There {*is|are} a big bed. There {*are|is} two windows. My clothes are {*in|on} a big wardrobe. There aren’t {*any|some} posters. There {*isn’t|aren’t} a TV.",
          hint: "One thing or more? Look for not.",
          fbOk: "Exactly.",
          fbBad: "Look at the plan again.",
          fbText: "One bed: <b>there is</b>. Two windows: <b>there are</b>. Clothes are <b>in</b> a wardrobe. With <i>not</i>: <b>aren’t any</b> posters, <b>isn’t</b> a TV."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana writes about her dream room.</p>`,
          tiles: ["there", "aren’t", "any", "chairs", "in", "my", "room"],
          answer: ["There aren’t any chairs in my room.", "In my room there aren’t any chairs."],
          extra: ["some"],
          hint: "With not, is it some or any?",
          fbOk: "Well done!",
          fbBad: "Start with There or In my room.",
          fbText: "<b>There aren’t any</b> chairs in my room. With <i>not</i>, we say <b>any</b>."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Mariia writes about her dream room.</p>`,
          before: "There",
          after: "lots of shelves in my dream room.",
          answer: "are",
          hint: "Lots of shelves: one or more?",
          fbOk: "Yes!",
          fbBad: "Shelves: one or more?",
          fbText: "Lots of shelves are more than one: <b>There are</b> lots of shelves."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes her post: “My dream room”.</p>`,
          text: "My dream room {*is|are} very big. There {*is|are} a big window. There are {*some|any} plants on the balcony. My bed is {*next to|in} the wardrobe. There {*aren’t|isn’t} any chairs. I sit on a big carpet!",
          hint: "One thing or more? Some or any?",
          fbOk: "Well done!",
          fbBad: "Look at the plan again.",
          fbText: "My room <b>is</b> big. One window: <b>there is</b>. Plants: a yes sentence, so <b>some</b>. The bed is <b>next to</b> the wardrobe. Chairs are more than one: there <b>aren’t</b> any chairs."
        }
      ],
      outro: {
        text: "Read a post about a dream room. Then write about your room with there is and there are.",
        learned: [
          "Read a short post about a room.",
          "Write sentences about your dream room.",
          "Use there is, there are, some and any."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s2l7",
      title: "Welcome to my new home!",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras?",
          body: `<p class="lead">Taras’s family has got a new flat in Lviv. Taras writes to the pen-friend club about it.</p><p>Read his messages and help him. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Read and choose.",
          body: `<p>Taras: “Our new flat is very high up. We take the lift. Lots of families live in our building.”</p><p>What is Taras’s building?</p>`,
          opts: [
            "a house with a garden",
            "a block of flats",
            "a village"
          ],
          correct: 1,
          pre: "e4s2l1",
          fbOk: "Right.",
          fbBad: "Lots of families and a lift: what is it?",
          fbText: "Lots of families live in a <b>block of flats</b>. A house is a home for one family."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about the rooms.</p>`,
          text: "There {*are|is} three bedrooms. There {*is|are} a big kitchen. We cook and eat in the {*kitchen|bathroom}.",
          pre: "e4s2l2",
          hint: "One thing or more? Where do we cook?",
          fbOk: "Exactly.",
          fbBad: "Check: one thing, or two or more?",
          fbText: "Three bedrooms: <b>there are</b>. One kitchen: <b>there is</b>. We cook and eat in the <b>kitchen</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Write the word.",
          body: `<p>Taras: “I’ve got lots of books. One shelf is too small.”</p>`,
          before: "My books are on three",
          after: ".",
          answer: "shelves",
          pre: "e4s2l3",
          hint: "One shelf, two …",
          fbOk: "Well done!",
          fbBad: "Remember: one shelf, two shelves.",
          fbText: "One shelf, three <b>shelves</b>: <i>f</i> changes to <i>ves</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his room.</p>`,
          text: "My cat Bars is {*under|on} the bed. It’s dark there. The carpet is {*on|under} the floor. My chair is {*next to|in} the desk.",
          pre: "e4s2l4",
          hint: "Where is it dark?",
          fbOk: "Good eye!",
          fbBad: "Look at the examples: in, on, under, next to.",
          fbText: "It’s dark <b>under</b> the bed. The carpet is <b>on</b> the floor. The chair is <b>next to</b> the desk."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “Are there any posters in your new room?”</p><p>Taras has got two posters. What does he say?</p>`,
          opts: [
            "Yes, there are.",
            "Yes, there is.",
            "Yes, there’s."
          ],
          correct: 0,
          pre: "e4s2l5",
          fbOk: "Yes!",
          fbBad: "Two posters: is or are?",
          fbText: "Two posters are more than one: <b>Yes, there are.</b> We don’t say <i>Yes, there’s</i>."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Taras writes about his dream room.</p>`,
          tiles: ["there", "is", "a", "sofa", "in", "my", "dream room"],
          answer: ["There is a sofa in my dream room.", "In my dream room there is a sofa."],
          extra: ["are"],
          pre: "e4s2l6",
          fbOk: "Well done!",
          fbBad: "One sofa: is or are?",
          fbText: "<b>There is</b> a sofa in my dream room. One sofa: <b>is</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can describe your home and your room and say where things are.",
        learned: [
          "Talk about a house or a flat.",
          "Use there is and there are with rooms and furniture.",
          "Say where things are: in, on, under, next to.",
          "Ask and answer: Is there…? Are there any…?"
        ]
      }
    }
  ]
});
