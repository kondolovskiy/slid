/* Слід · Англійська мова, 9 клас — «Fashion and clothes» (e9s3)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Одяг» — мода; елементи одягу (с. 33, розд. 5.2.3); функція — висловлювати власне ставлення до вчинків, думок,
   позицій інших людей (с. 33); граматика B1 (с. 34–35): Adjectives — combining (order of adjectives);
   Clause — so … that, such (a) … that; as if / as though, like; повторення — too / enough (e6s2l6, e7s4l6),
   long dark hair (e6s1l2), look + adjective, look like (e6s1l5, e6s1l6):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   План — content/eng/plan.js (reports/verify/plan-eng-g7-8-9.md, curate-eng-plan-g7-9.md).
   Порядок прикметників — CD Grammar «Adjectives: order» (opinion → size → age → colour → material); у завданні лише
   2–3 прикметники різних груп; прикметники однієї групи, візерунки (striped, checked) поруч із кольором і origin
   не поєднуємо, бо там прийнятні кілька порядків. so … that — that можна опустити (CD Grammar «So»);
   like + речення в розмовній мові теж правильне (CD Grammar «As if, as though and like»), тож like перед реченням
   ніде не подано хибним варіантом. AmE (sneakers, pants) — лише довідкою (l2). Без оцінок зовнішності й тіла:
   говоримо про одяг, стиль і думки.
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (Oksana — 15, Dmytro — 11, Tom — 13); нових героїв немає.
   Україна: вишиванка й День вишиванки в травні (як у e5s4l6), Kyiv, Lviv, Kharkiv, Zelena Dolyna.
   Звуку немає (D-055 п. 4); діалоги — репліками в body + gaps / choice (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос — Cambridge Dictionary й OALD (URL — tasks/…/write-eng-g9-e9s3.md, «Нотатки агента»).
   Статус: verified (verifier-e9s3). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e9s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s3",
  grade: 9,
  weeks: [9, 12],
  title: "Fashion and clothes",
  why: "To talk about fashion and describe clothes in detail. And to say what you think about fashion and style.",
  requires: ["e5s4l1", "e5s4l5", "e6s1l2", "e6s1l5", "e6s2l6", "e7s4l6"],
  meta: { author: "writer-e9s3", created: "2026-11-25", factcheck: "verifier-e9s3 (reports/verify/write-eng-g9-e9s3.md)", teacher: null },
  badges: [
    { id: "e9s3boss", name: "Style expert", icon: "trophy", desc: "Finish the final lesson “Fashion and clothes”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s3l1",
      title: "Fashion then and now",
      short: "Fashion",
      icon: "scroll",
      status: "verified",
      why: "Fashion changes all the time. Learn the words to talk about fashion then and now.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Grandma’s jumper?",
          body: `<p class="lead">Oksana and Grandma Hanna are looking at old family photos.</p><p><b>Oksana:</b> Grandma, is this you? What a big jumper!<br><b>Hanna:</b> Yes, that’s me in 1983. All my friends wore big jumpers then.<br><b>Oksana:</b> But big jumpers are in fashion now! Lots of girls in my class wear them.<br><b>Hanna:</b> So my old jumper is fashionable again? Fashion goes round and round!</p><p>In fashion, fashionable: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Big jumpers are <b>in fashion</b> now.” What does it mean?</p>`,
          opts: [
            "Nobody wears them now.",
            "Lots of people wear them now.",
            "They’re very cheap now."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>In fashion</b> = popular now: lots of people wear them. The next screen has more fashion words."
        },
        {
          type: "info",
          title: "Fashion words",
          body: `<ul><li><b>fashion</b> → a style of clothes that is popular at a time</li><li><b>in fashion</b> = <b>fashionable</b> → popular now</li><li><b>out of fashion</b> → not popular now</li><li><b>old-fashioned</b> → not modern: it looks like the past</li><li>your <b>style</b> → the way you dress: <i>Big jumpers are my style.</i></li></ul><p><u>fash</u>ion, <u>fash</u>ionable, old-<u>fash</u>ioned</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Big jumpers are in fashion:", "Long skirts like Grandma’s are out of fashion:", "Grandad’s radio is old-fashioned:", "Oksana’s style is"],
          right: ["lots of girls wear them now.", "nobody wears them now.", "it’s from 1975, and it isn’t modern.", "the way she dresses."],
          hint: "In fashion – lots of people or nobody? One radio – it or them?",
          fbOk: "Good eye!",
          fbBad: "Look at the fashion words again: popular now, not popular now, not modern.",
          fbText: "<b>In fashion</b>: lots of girls wear them. <b>Out of fashion</b>: nobody wears them. The radio is <b>old-fashioned</b>: it isn’t modern. Your <b>style</b> is the way you dress."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes to Emma about Grandma’s photos.</p>`,
          text: "Grandma’s jumper from 1983 is {*in fashion|out of fashion|old-fashioned} again: lots of girls wear big jumpers now. But her long brown skirt is {*out of fashion|in fashion|fashionable}: nobody wears skirts like that now. And Grandad’s radio looks very {*old-fashioned|fashionable|in fashion}: it isn’t modern at all.",
          hint: "Lots of people wear it → ? Nobody wears it → ? Not modern → ?",
          fbOk: "Exactly.",
          fbBad: "Popular now, not popular now or not modern? Look at the fashion words.",
          fbText: "Lots of girls wear them: <b>in fashion</b>. Nobody wears them: <b>out of fashion</b>. Not modern: <b>old-fashioned</b>."
        },
        {
          type: "info",
          title: "Never out of fashion",
          body: `<p>Some clothes are never out of fashion. A <b>vyshyvanka</b> is a Ukrainian <b>embroidered</b> shirt.</p><ul><li><b>embroidered</b> → with a pattern of coloured thread on it, often made by hand</li><li>Vyshyvanka Day is in May. Lots of Ukrainians wear a vyshyvanka on this day.</li></ul><p>em<u>broi</u>dered</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Grandma Hanna tells Oksana about her vyshyvanka.</p><p><i>My mum made this vyshyvanka for me in 1981. Then I wore it with a long skirt. Now you wear it with jeans and trainers. Clothes change, but a vyshyvanka is never out of fashion.</i></p><p>What does Grandma think?</p>`,
          opts: [
            "A vyshyvanka is old-fashioned now.",
            "A vyshyvanka doesn’t look good with jeans.",
            "A vyshyvanka is always in fashion."
          ],
          correct: 2,
          hint: "Read the last sentence again.",
          fbOk: "Right.",
          fbBad: "Never out of fashion = always … ?",
          fbText: "Grandma says a vyshyvanka is <b>never out of fashion</b>: it’s always in fashion. She’s happy that Oksana wears it with jeans."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+fash|ion", "+fash|ion|a|ble", "em|+broi|dered"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "<u>fash</u>ion, <u>fash</u>ionable, em<u>broi</u>dered."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>This year, lots of people wear wide trousers. They’re popular now.</p>`,
          before: "Wide trousers are",
          after: "fashion this year.",
          answer: "in",
          hint: "Popular now → … fashion.",
          fbOk: "Yes!",
          fbBad: "Popular now: in fashion or out of fashion?",
          fbText: "Popular now: wide trousers are <b>in</b> fashion."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Oksana.</p>`,
          text: "Hi Oksana! Mum showed me her photos from 1995. All her friends wore very wide jeans: they were {*in fashion|out of fashion|old-fashioned} then. Later, for years, nobody wore jeans like that: they were {*out of fashion|in fashion|fashionable}. Now wide jeans are back, and I wear Mum’s old ones! But her pink jacket looks {*old-fashioned|fashionable|in fashion} now, so I don’t wear it. It isn’t my {*style|fashion|fashionable}.",
          hint: "All her friends wore them → ? Nobody wore them → ? Not modern → ?",
          fbOk: "Well done!",
          fbBad: "Check: popular, not popular or not modern? And the way you dress → ?",
          fbText: "All her friends wore them: <b>in fashion</b>. Nobody wore them: <b>out of fashion</b>. The jacket isn’t modern: <b>old-fashioned</b>. The way you dress: your <b>style</b>."
        }
      ],
      outro: {
        text: "Fashion changes: clothes go out of fashion and come back again. Some clothes, like a vyshyvanka, are never out of fashion.",
        learned: [
          "Talk about fashion: in fashion, out of fashion, old-fashioned.",
          "Say what your style is.",
          "Compare clothes then and now."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s3l2",
      title: "Hoodies, trainers and jeans: clothes words",
      short: "Clothes words",
      icon: "user",
      status: "verified",
      why: "Describe your everyday clothes in detail: a checked shirt, baggy jeans, white trainers.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What do you wear to school?",
          body: `<p class="lead">Emma and Andrii chat about clothes.</p><p><b>Emma:</b> What do you wear to school?<br><b>Andrii:</b> Usually a grey hoodie, black jeans and trainers. Today I’m wearing a checked shirt.<br><b>Emma:</b> Lucky you! I wear a uniform. But at the weekend, I wear a striped jumper and baggy jeans.<br><b>Andrii:</b> Baggy jeans are my style too!</p><p>A hoodie, a checked shirt, baggy jeans: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii often wears a <b>hoodie</b>. What is it?</p>`,
          opts: [
            "a pair of sports shoes",
            "a warm winter hat",
            "a warm top with a hood for your head"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>hoodie</b> is a warm top with a <b>hood</b>: you can put it over your head. The next screen has more clothes words."
        },
        {
          type: "info",
          title: "Everyday clothes",
          body: `<ul><li>a <b><u>hood</u>ie</b> → a warm cotton top with a hood for your head</li><li>a <b><u>sweat</u>shirt</b> → a warm cotton top, often without a hood</li><li>a <b><u>track</u>suit</b> → trousers and a top for sport</li><li><b><u>trai</u>ners</b> → sports shoes, for sport or every day</li><li>a <b>jumper</b> = a <b>sweater</b> → a warm top for cold days</li></ul><p>In American English: <i>sneakers</i> = trainers, <i>pants</i> = trousers. We use British English.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A hoodie is", "A tracksuit is", "Trainers are", "A jumper is"],
          right: ["a top with a hood.", "trousers and a top for sport.", "sports shoes.", "the same as a sweater."],
          hint: "Which one has got a hood? Which one is for your feet?",
          fbOk: "Good eye!",
          fbBad: "Look at the list “Everyday clothes” again.",
          fbText: "A <b>hoodie</b> has a hood. A <b>tracksuit</b> is trousers and a top for sport. <b>Trainers</b> are sports shoes. A <b>jumper</b> is the same as a sweater."
        },
        {
          type: "info",
          title: "Patterns and fit",
          body: `<p><b>Pattern</b> → what is on it:</p><ul><li><b>striped</b> → with lines: a striped scarf</li><li><b>checked</b> → with squares: a checked shirt</li><li><b>spotted</b> → with spots (small circles): a spotted dress</li><li><b>plain</b> → one colour, no pattern</li></ul><p><b>Fit</b> → how big it is on you:</p><ul><li><b>baggy</b> → very big and loose: baggy jeans</li><li><b>loose</b> → not close to your body</li><li><b>tight</b> → small and close to your body</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it about the pattern or the fit?</p>`,
          bins: ["pattern", "fit"],
          items: [
            ["striped", 0],
            ["checked", 0],
            ["spotted", 0],
            ["plain", 0],
            ["baggy", 1],
            ["loose", 1],
            ["tight", 1]
          ],
          hint: "Pattern – what is on it. Fit – how big it is on you.",
          fbOk: "Exactly.",
          fbBad: "Lines, squares, spots, one colour → pattern. Big or small on you → fit.",
          fbText: "Pattern: <b>striped</b>, <b>checked</b>, <b>spotted</b>, <b>plain</b>. Fit: <b>baggy</b>, <b>loose</b>, <b>tight</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii describes his clothes today.</p>`,
          text: "I’m wearing a {*checked|striped|spotted} shirt: it has got squares on it. My jeans aren’t tight, they’re {*baggy|plain|striped}. My hoodie is {*plain|spotted|checked}: it’s just grey, with no pattern. And I’m wearing white {*trainers|tracksuit|hoodie}: they’re great for walking.",
          hint: "Squares → ? Not tight → ? No pattern → ? Shoes → ?",
          fbOk: "Right.",
          fbBad: "Look at the patterns and the fit again.",
          fbText: "Squares: <b>checked</b>. Not tight: <b>baggy</b>. No pattern: <b>plain</b>. Shoes: <b>trainers</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Ostap’s new top is warm and grey. It has a hood for his head.</p>`,
          before: "It’s a",
          after: ".",
          answer: ["hoodie", "hoody", "sweatshirt", "hooded top"],
          hint: "A top with a hood → ?",
          fbOk: "Yes!",
          fbBad: "Look at the list “Everyday clothes”: which top has a hood?",
          fbText: "A warm top with a hood is a <b>hoodie</b>. <i>Hoody</i> is the same word. A hoodie is a kind of sweatshirt, so <i>sweatshirt</i> is correct too."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma’s jumper has got lines on it. Her jeans are very big. What does she say?</p>`,
          tiles: ["I’m", "wearing", "a", "striped", "jumper", "and", "baggy", "jeans"],
          answer: ["I’m wearing a striped jumper and baggy jeans.", "I’m wearing baggy jeans and a striped jumper."],
          hint: "I’m wearing + a striped … and baggy …",
          fbOk: "Well done!",
          fbBad: "Lines → a striped jumper. Very big → baggy jeans.",
          fbText: "<b>I’m wearing a striped jumper and baggy jeans.</b> You can also start with the jeans: <i>I’m wearing baggy jeans and a striped jumper.</i>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her weekend clothes.</p>`,
          text: "At school, I wear a uniform. But at the weekend, I wear my own clothes. My favourite is a {*striped|checked|plain} jumper with blue and white lines. I wear it with {*baggy|tight|spotted} jeans: they’re big and comfortable. On my feet, I wear white {*trainers|hoodies|tracksuits}. For PE, I wear trousers and a top for sport: my {*tracksuit|hoodie|jumper}.",
          hint: "Lines → ? Big → ? Shoes → ? Trousers and a top for sport → ?",
          fbOk: "Brilliant!",
          fbBad: "Check: lines or squares? Big or small? Shoes or tops?",
          fbText: "Lines: a <b>striped</b> jumper. Big: <b>baggy</b> jeans. Shoes: <b>trainers</b>. Trousers and a top for sport: a <b>tracksuit</b>."
        }
      ],
      outro: {
        text: "Hoodies, trainers, baggy jeans: now you can describe the clothes you wear every day.",
        learned: [
          "Name everyday clothes: a hoodie, a sweatshirt, a tracksuit, trainers.",
          "Describe patterns: striped, checked, spotted, plain.",
          "Say how clothes fit: baggy, loose, tight."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s3l3",
      title: "A long black woollen coat: the order of adjectives",
      short: "Adjective order",
      icon: "path",
      status: "verified",
      why: "Sometimes we put two or three adjectives before a noun. Learn the right order: a long black woollen coat.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Which coat is yours?",
          body: `<p class="lead">Mariia left her coat at the sports centre in Kharkiv. She writes to the lost property office.</p><p><i>Hello! I lost my coat on Saturday. It’s a long black woollen coat with big pockets. Have you got it? – Mariia</i></p><p>Long, black, woollen: why are they in this order?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which one sounds right?</p>`,
          opts: [
            "a woollen black long coat",
            "a long black woollen coat",
            "a black woollen long coat"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>a long black woollen coat</b>: first how long, then the colour, then what it’s made of. The next screens explain."
        },
        {
          type: "info",
          title: "What is it made of?",
          body: `<ul><li><b><u>cot</u>ton</b> → from a plant: T-shirts, hoodies</li><li><b>wool</b> → from sheep: warm jumpers, scarves</li><li><b><u>leath</u>er</b> → from animal skin: shoes, bags, belts</li><li><b><u>den</u>im</b> → strong blue cotton: jeans, jackets</li></ul><p>a <b>wool</b> scarf = a <b><u>wool</u>len</b> scarf. Both are correct.</p><p>These words are <b>materials</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Leather comes", "Wool comes", "Cotton comes", "Denim is"],
          right: ["from animal skin.", "from sheep.", "from a plant.", "strong blue cotton for jeans."],
          hint: "Sheep, a plant, animal skin: which material?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of materials again.",
          fbText: "<b>Leather</b> – from animal skin. <b>Wool</b> – from sheep. <b>Cotton</b> – from a plant. <b>Denim</b> – strong blue cotton."
        },
        {
          type: "info",
          title: "Size, colour, material",
          body: `<p>You know this: <b>long dark</b> hair – first size, then colour.</p><p>With three adjectives:</p><ul><li><b>size → colour → material</b> + noun</li><li>a <b>long black woollen</b> coat</li><li>a <b>small brown leather</b> bag</li><li><b>big white cotton</b> T-shirts</li></ul><p>The material comes just before the noun. Not: <s>a woollen black coat</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia’s bag is small. It’s red. It’s made of leather.</p>`,
          opts: [
            "a small red leather bag",
            "a red small leather bag",
            "a leather small red bag"
          ],
          correct: 0,
          hint: "Size → colour → material.",
          fbOk: "Right.",
          fbBad: "First size, then colour, then material.",
          fbText: "Size (<i>small</i>) → colour (<i>red</i>) → material (<i>leather</i>): <b>a small red leather bag</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>The lost property office answers Mariia.</p>`,
          text: "We’ve got {*a big grey woollen|a grey big woollen|a woollen big grey} scarf, {*a short blue denim|a denim short blue|a blue short denim} jacket and {*a small white cotton|a cotton small white|a white small cotton} hat. But we haven’t got a long black coat.",
          hint: "Size → colour → material → noun.",
          fbOk: "Exactly.",
          fbBad: "Which word is the size? Put it first. The material goes just before the noun.",
          fbText: "<b>a big grey woollen</b> scarf, <b>a short blue denim</b> jacket, <b>a small white cotton</b> hat: size → colour → material."
        },
        {
          type: "info",
          title: "Opinion and age",
          body: `<p>Two more groups:</p><ul><li><b>opinion</b> (what you think) comes first: nice, lovely, cool, beautiful</li><li><b>age</b> comes after size: old, new</li></ul><p><b>opinion → size → age → colour → material</b> + noun.</p><ul><li>a <b>lovely old</b> jumper</li><li>a <b>nice new red</b> hoodie</li><li>a <b>big old leather</b> bag</li></ul><p>Two or three adjectives are enough. Five sound strange!</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia tells Polina about a present from her grandma: a scarf. Mariia loves it. It isn’t new, and it’s made of wool.</p>`,
          tiles: ["Grandma", "gave", "me", "a", "lovely", "old", "woollen", "scarf"],
          extra: ["an"],
          answer: "Grandma gave me a lovely old woollen scarf.",
          hint: "Opinion → age → material → noun.",
          fbOk: "Yes!",
          fbBad: "Opinion first (lovely), then age (old), then material (woollen).",
          fbText: "<b>Grandma gave me a lovely old woollen scarf.</b> Opinion → age → material → noun."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Mariia’s message is wrong.</p>`,
          text: "Today I’m wearing [!a long black woollen coat], [!new brown leather boots] and [a woollen red scarf].",
          hint: "Colour or material: which comes just before the noun?",
          fbOk: "Good eye!",
          fbBad: "Check each part: size → age → colour → material.",
          fbText: "Not <i>a woollen red scarf</i>: the material comes just before the noun – <b>a red woollen scarf</b>. <i>A long black woollen coat</i> and <i>new brown leather boots</i> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras’s bag is brown and made of leather. He bought it five years ago. Which word tells us its age?</p>`,
          before: "Taras has got an",
          after: "brown leather bag.",
          answer: "old",
          hint: "Five years ago → is it new? Age comes before colour.",
          fbOk: "Well done!",
          fbBad: "It isn’t new. Which age word goes after “an”?",
          fbText: "Age → colour → material: an <b>old</b> brown leather bag."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to the lost property office again.</p>`,
          text: "Thank you for your email! The scarf, the jacket and the hat aren’t mine. My coat is {*a long black woollen|a black long woollen|a woollen long black} coat with big pockets. In one pocket, there’s {*a small blue cotton|a cotton small blue|a blue cotton small} bag with my keys. My friend Polina found {*a nice new leather|a leather nice new|a new nice leather} wallet in the changing room. Is it someone’s?",
          hint: "Opinion → size → age → colour → material → noun.",
          fbOk: "Exactly.",
          fbBad: "Check each gap: which group comes first?",
          fbText: "<b>a long black woollen</b> coat (size → colour → material), <b>a small blue cotton</b> bag (size → colour → material), <b>a nice new leather</b> wallet (opinion → age → material)."
        }
      ],
      outro: {
        text: "Opinion, size, age, colour, material, noun: a lovely old woollen scarf.",
        learned: [
          "Name materials: cotton, wool, leather, denim.",
          "Put two or three adjectives in the right order.",
          "Describe a lost thing in detail."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s3l4",
      title: "So comfortable that…, such a nice jacket that…",
      short: "So, such",
      icon: "star",
      status: "verified",
      why: "Say what happened because something was very good or very bad: They were so comfortable that I wore them every day.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Three years in one pair of trainers",
          body: `<p class="lead">Taras writes to the penfriend club.</p><p><i>My old trainers were so comfortable that I wore them for three years! Now they’re too small. Yesterday I bought new ones. They’re such nice trainers that my sister Zlata wants the same pair.</i></p><p>So comfortable that…, such nice trainers that…: when do we use <b>so</b>, and when <b>such</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which one is correct?</p>`,
          opts: [
            "It’s so a nice jacket.",
            "It’s a so nice jacket.",
            "It’s such a nice jacket."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>such a</b> + adjective + noun: <b>such a nice jacket</b>. The next screens explain so and such."
        },
        {
          type: "info",
          title: "So + adjective + that",
          body: `<p><b>so</b> + adjective + <b>that</b> … → the result</p><ul><li>The trainers were <b>so comfortable that</b> I wore them every day.</li><li>The jumper was <b>so warm that</b> I didn’t need a coat.</li></ul><p>We can drop <b>that</b>: <i>It was so warm I didn’t need a coat.</i></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          body: `<p>Taras writes about Saturday.</p>`,
          left: ["The shop was so busy", "The jeans were so cheap", "The T-shirt was so small", "The jacket was so warm"],
          right: ["that we left after five minutes.", "that I bought two pairs.", "that I gave it to Zlata.", "that I didn’t need a coat."],
          hint: "What happened because of it? Cheap → buy more. Small → give it to someone else.",
          fbOk: "Exactly.",
          fbBad: "Read each pair: is it a good result?",
          fbText: "so busy <b>that</b> we left, so cheap <b>that</b> I bought two pairs, so small <b>that</b> I gave it to Zlata, so warm <b>that</b> I didn’t need a coat. so + adjective + that + result."
        },
        {
          type: "info",
          title: "Such (a) + adjective + noun",
          body: `<ul><li><b>such a</b> + adjective + one thing:<br>It’s <b>such a nice jacket that</b> I want it too.</li><li><b>such</b> + adjective + two or more:<br>They’re <b>such nice trainers that</b> Zlata wants the same pair.</li></ul><p><b>so</b> + adjective: so nice<br><b>such</b> + noun: such a nice jacket, such nice trainers</p><p>Not: <s>so a nice jacket</s>, <s>a such nice jacket</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Ostap’s new jacket is very warm. He wears it all the time.</p>`,
          opts: [
            "It’s so warm jacket that he wears it all the time.",
            "It’s such a warm jacket that he wears it all the time.",
            "It’s a such warm jacket that he wears it all the time."
          ],
          correct: 1,
          hint: "Is there a noun after the adjective?",
          fbOk: "Right.",
          fbBad: "Adjective + noun (warm jacket) → such a.",
          fbText: "There’s a noun: <i>jacket</i>. So: <b>such a warm jacket that</b>. <i>So</i> goes before an adjective with no noun: <i>The jacket is so warm that…</i>"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Zlata writes about her new clothes.</p>`,
          text: "My new dress is {*so|such|such a} comfortable that I wear it every Sunday. It’s {*such a|so|such} lovely dress! My red shoes are {*so|such|such a} bright that everyone sees them from far away. I’ve never had {*such|such a|so} cool shoes before!",
          hint: "Adjective alone → so. Adjective + one thing → such a. Adjective + two or more → such.",
          fbOk: "Well done!",
          fbBad: "Look after the gap: just an adjective? An adjective + noun? One thing or two?",
          fbText: "<b>so</b> comfortable, <b>such a</b> lovely dress (one), <b>so</b> bright, <b>such</b> cool shoes (two or more)."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Ostap’s message is wrong.</p>`,
          text: "It’s [!such a great shop] that I go there every week. The prices are [!so low] that I can buy a lot. The assistants are [so friendly people] that I always say hello.",
          hint: "Is there a noun after the adjective?",
          fbOk: "Good eye!",
          fbBad: "Adjective + noun → such. Adjective alone → so.",
          fbText: "Not <i>so friendly people</i>: there’s a noun, so it’s <b>such friendly people</b>. <i>Such a great shop</i> and <i>so low</i> are correct."
        },
        {
          type: "info",
          title: "Too, enough and so",
          body: `<p>Remember <b>too</b> and <b>enough</b>?</p><ul><li>The jeans are <b>too small to</b> wear. → a problem</li><li>The jacket <b>isn’t warm enough</b> for winter. → a problem</li><li>The jeans are <b>so small that</b> I can’t wear them. → the same idea</li></ul><p><b>too</b> + adjective + <b>to</b> + verb<br><b>so</b> + adjective + <b>that</b> + sentence</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Tom tries on his old winter clothes.</p>`,
          text: "These boots are {*too|so|such} small to wear. They’re {*so|too|such} small that my feet hurt. And this coat isn’t warm {*enough|too|so} for winter.",
          hint: "… to + verb → too. … that + sentence → so. After the adjective → enough.",
          fbOk: "Exactly.",
          fbBad: "Look after the adjective: to wear, that my feet hurt, for winter.",
          fbText: "<b>too</b> small to wear, <b>so</b> small that my feet hurt, isn’t warm <b>enough</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Grandma made Dmytro a very warm jumper. He wore it every day.</p>`,
          tiles: ["It", "was", "such", "a", "warm", "jumper", "that", "he wore it every day"],
          extra: ["so"],
          answer: "It was such a warm jumper that he wore it every day.",
          keepCase: true,
          hint: "It was + such a + adjective + noun + that…",
          fbOk: "Yes!",
          fbBad: "Adjective + noun (warm jumper) → such a, not so.",
          fbText: "<b>It was such a warm jumper that he wore it every day.</b> such a + adjective + noun + that."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes about his new trainers for the athletics club website.</p>`,
          text: "My new trainers are {*so|such|such a} light that I can run really fast. They’re {*such|so|such a} comfortable trainers that I wear them every day. They were {*too|so|such} expensive to buy two pairs, so I bought one pair. It was {*such a|so|such} good choice!",
          hint: "Adjective alone → so. Adjective + noun → such (a). … to + verb → too.",
          fbOk: "Well done!",
          fbBad: "Check each gap: an adjective alone, an adjective + noun, or … to + verb?",
          fbText: "<b>so</b> light that, <b>such</b> comfortable trainers that, <b>too</b> expensive to buy, <b>such a</b> good choice."
        }
      ],
      outro: {
        text: "So + adjective + that; such (a) + adjective + noun + that. Use them to say what happened because of something.",
        learned: [
          "Use so … that: They were so comfortable that I wore them every day.",
          "Use such (a) … that: It was such a warm jumper that he wore it every day.",
          "Choose between so, such, too and enough."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s3l5",
      title: "You look as if you’re going to a party",
      short: "As if",
      icon: "eye",
      status: "verified",
      why: "We often guess from people’s clothes. Learn to say: You look as if you’re going to a party.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Where are you going?",
          body: `<p class="lead">On Saturday evening, Oksana comes into the kitchen in a dress and new shoes.</p><p><b>Dmytro:</b> Wow! You look as if you’re going to a party.<br><b>Oksana:</b> I am! It’s Halyna’s birthday party.<br><b>Dmytro:</b> And Dad looks as though he’s going to work in the garden.<br><b>Dad:</b> I am! Old trousers and boots are perfect for the garden.</p><p>As if, as though: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“You look as if you’re going to a party.” What does Dmytro mean?</p>`,
          opts: [
            "You are at a party now.",
            "You don’t like parties.",
            "Your clothes are like party clothes."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Dmytro sees Oksana’s clothes and guesses: she’s going to a party. The next screen explains <b>as if</b>."
        },
        {
          type: "info",
          title: "As if, as though",
          body: `<p>We see something and guess:</p><ul><li>You <b>look as if</b> you’re going to a party. → your clothes are like party clothes</li><li>Dad <b>looks as though</b> he’s going to work in the garden.</li></ul><p><b>as if</b> = <b>as though</b> + a sentence (subject + verb)</p><p>It <b>looks as if</b> it’s cold outside: Tom is wearing a hat and gloves.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Tom is wearing a coat, a hat and gloves.</p>`,
          text: "It looks {*as if|as|if} it’s cold outside. Tom looks {*as though|though|as} he’s going for a long walk.",
          hint: "Two words before a sentence: as … ?",
          fbOk: "Right.",
          fbBad: "We need two words: as if or as though.",
          fbText: "It looks <b>as if</b> it’s cold. Tom looks <b>as though</b> he’s going for a walk. One word – <i>as</i> or <i>if</i> – isn’t enough."
        },
        {
          type: "info",
          title: "Look, look like, look as if",
          body: `<ul><li>look + adjective: You <b>look cold</b>. Your jacket <b>looks new</b>.</li><li>look <b>like</b> + noun: That jacket <b>looks like</b> a uniform.</li><li>look <b>as if</b> / <b>as though</b> + sentence: You <b>look as if</b> you’re cold.</li></ul><p>In everyday talk, people also say <i>You look like you’re cold.</i> In this lesson, we use <b>as if</b> before a sentence.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii and Sofiia are getting ready for a family dinner.</p>`,
          text: "Sofiia’s new trainers look {*cool|like cool|as if cool}. Andrii’s grey jacket looks {*like|as if|as though} a school uniform. Andrii looks {*as though|as|though} he’s going to a wedding!",
          hint: "Adjective → look. Noun → look like. Sentence → look as if / as though.",
          fbOk: "Exactly.",
          fbBad: "What comes after the gap: an adjective, a noun or a sentence?",
          fbText: "look <b>cool</b> (adjective), looks <b>like</b> a uniform (noun), looks <b>as though</b> he’s going (sentence)."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Mariia is wearing a tracksuit and trainers. She’s got a bottle of water.</p><p>What can you say?</p>`,
          opts: [
            "She looks as if she’s going to a wedding.",
            "She looks as if she’s going for a run.",
            "She looks as if she’s going to bed."
          ],
          correct: 1,
          hint: "Tracksuit, trainers, water: what are they for?",
          fbOk: "Good thinking!",
          fbBad: "A tracksuit is for sport.",
          fbText: "A tracksuit, trainers and water are for sport: she looks <b>as if</b> she’s going for a run."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Dmytro’s message is wrong.</p>`,
          text: "Dad [!looks as though] he’s ready for the garden. Grandma’s scarf [looks as if] a blanket. Mum [!looks] happy.",
          hint: "What comes after each part: an adjective, a noun or a sentence?",
          fbOk: "Good eye!",
          fbBad: "As if + a sentence. Before a noun → like.",
          fbText: "<i>A blanket</i> is a noun, so: Grandma’s scarf <b>looks like</b> a blanket. <i>Looks as though he’s ready</i> and <i>looks happy</i> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Halyna is wearing a raincoat and boots. She’s got an umbrella too.</p>`,
          before: "It looks as",
          after: "it’s going to rain.",
          answer: ["if", "though"],
          hint: "as … + sentence",
          fbOk: "Well done!",
          fbBad: "as + ? + a sentence",
          fbText: "It looks as <b>if</b> it’s going to rain. <i>As though</i> is correct too."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Sofiia sees Andrii in a white shirt and a tie.</p>`,
          tiles: ["You", "look", "as if", "you’re", "going", "to a wedding"],
          extra: ["looks"],
          answer: "You look as if you’re going to a wedding.",
          hint: "You look + as if + a sentence.",
          fbOk: "Yes!",
          fbBad: "You look (not looks) + as if + you’re going…",
          fbText: "<b>You look as if you’re going to a wedding.</b> look + as if + a sentence."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "This morning, Tom came downstairs in a white shirt and a tie. He looked {*as if|as|so} he was going to a job interview! His tie looked {*like|as if|as though} Grandad’s old tie. Mum said, “You look {*smart|like smart|as if smart}!” Then Tom told us: it was the school concert, and his band was playing. It was {*such a|so|such} funny morning!",
          hint: "Sentence → as if. Noun → like. Adjective → look. Adjective + noun → such a.",
          fbOk: "Well done!",
          fbBad: "Check what comes after each gap: a sentence, a noun or an adjective?",
          fbText: "looked <b>as if</b> he was going (sentence), looked <b>like</b> Grandad’s tie (noun), look <b>smart</b> (adjective), <b>such a</b> funny morning (adjective + noun)."
        }
      ],
      outro: {
        text: "Look + adjective, look like + noun, look as if / as though + sentence: say what you guess from people’s clothes.",
        learned: [
          "Guess from clothes: You look as if you’re going to a party.",
          "Choose between look, look like and look as if.",
          "Use as though in the same way as as if."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s3l6",
      title: "Buy less, wear longer: my opinion about fashion",
      short: "My opinion",
      icon: "leaf",
      status: "verified",
      why: "People have different opinions about fashion. Learn to give yours and to agree or disagree politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Is fashion important to you?",
          body: `<p class="lead">Andrii’s school newspaper in Kyiv asks a question: “Is fashion important to you?”</p><p>Some pupils love new styles. Others buy clothes only when they need them. Some buy second-hand clothes.</p><p>What do they think? And how can you say that you agree or disagree?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The headline in Andrii’s newspaper says: <b>Buy less, wear longer</b>. What does it mean?</p>`,
          opts: [
            "Buy lots of clothes and wear them once.",
            "Buy only long clothes.",
            "Buy fewer clothes and wear them for a long time."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Buy less, wear longer</b>: buy fewer clothes and wear them for a long time. The next screen has words for this topic."
        },
        {
          type: "info",
          title: "Clothes and money",
          body: `<ul><li><b>second-hand</b> → not new: someone wore it before</li><li><b>last</b> → stay good for a long time: <i>My boots lasted five years.</i></li><li>a <b>clothes swap</b> → you bring clothes you don’t wear and take other clothes. It’s free!</li></ul><p>second-<u>hand</u></p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Giving your opinion",
          body: `<ul><li><b>I think</b> … / <b>In my opinion</b>, …</li><li>you agree → <b>I agree with</b> Zoriana. <b>I think</b> Bohdan <b>is right</b>.</li><li>you don’t agree → <b>I don’t agree with</b> Bohdan.</li><li>you partly agree, but you’ve got a different idea → <b>That’s true, but</b> … / <b>Maybe you’re right, but</b> … It’s a polite way to give a different idea.</li><li>say why → … <b>because</b> …</li></ul><p>Not: <s>I am agree.</s> → I agree.</p><p>Talk about the idea, not the person.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Fashion and us, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i><b>Zoriana:</b> Not really. I buy clothes only when I need them. Very cheap clothes often don’t last long. In my opinion, it’s better to buy less and wear clothes longer.<br><b>Bohdan:</b> I don’t agree with Zoriana. Fashion is fun! I like trying new styles. But I don’t buy expensive things: I often buy second-hand clothes.<br><b>Daryna:</b> I think Bohdan is right: second-hand shopping is great. Last month, I found such a nice denim jacket that I wear it every day.</i></p><p>What does Bohdan think?</p>`,
          opts: [
            "Fashion is fun, but he doesn’t buy expensive clothes.",
            "Fashion isn’t important at all.",
            "Second-hand clothes are boring."
          ],
          correct: 0,
          hint: "Read Bohdan’s part again.",
          fbOk: "Right.",
          fbBad: "Find “Fashion is fun!” in the text.",
          fbText: "Bohdan says: <i>Fashion is fun!</i> But he doesn’t buy expensive things: he often buys <b>second-hand</b> clothes."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Fashion and us, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i><b>Kyrylo:</b> I agree with Daryna. And I’d like our school to have a clothes swap. You bring a jumper you don’t wear and take a hoodie you like.<br><b>Zoriana:</b> That’s a great idea! But some people don’t like wearing other people’s clothes.<br><b>Bohdan:</b> That’s true, but nobody has to take anything. In my opinion, a swap is fun, and it’s free.<br><b>Ms Lysenko:</b> Thank you all! Our first clothes swap is on 12 December in the school hall.</i></p><p>What is Zoriana worried about?</p>`,
          opts: [
            "A clothes swap is too expensive.",
            "Some people don’t like wearing other people’s clothes.",
            "The school hall is too small."
          ],
          correct: 1,
          hint: "Read Zoriana’s words after “But”.",
          fbOk: "Exactly.",
          fbBad: "Zoriana likes the idea. What does she say after “But”?",
          fbText: "Zoriana likes the idea, <b>but</b> some people don’t like wearing other people’s clothes. Bohdan answers politely: <i>That’s true, but nobody has to take anything.</i>"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Do they agree, partly agree or not agree?</p>`,
          bins: ["agree", "partly agree", "don’t agree"],
          items: [
            ["I agree with Daryna.", 0],
            ["I think Bohdan is right.", 0],
            ["That’s a great idea!", 0],
            ["I don’t agree with Zoriana.", 2],
            ["Maybe you’re right, but I don’t like old clothes.", 1],
            ["That’s true, but nobody has to take anything.", 1]
          ],
          hint: "“That’s true, but…” and “Maybe you’re right, but…” – the person partly agrees, but has a different idea.",
          fbOk: "Well done!",
          fbBad: "Look at the rule “Giving your opinion” again.",
          fbText: "Agree: <i>I agree with…</i>, <i>… is right</i>, <i>That’s a great idea!</i> Partly agree (a polite way to give a different idea): <i>Maybe you’re right, but…</i>, <i>That’s true, but…</i> Don’t agree: <i>I don’t agree with…</i>"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Andrii answers Bohdan in the school chat.</p>`,
          text: "I {*agree|agrees|agreeing} with Kyrylo: a swap is a great idea. {*In|On|At} my opinion, second-hand clothes are fine. Bohdan, maybe you’re {*right|true|agree}, but I don’t think fashion is fun. I buy clothes only {*when|what|who} I need them.",
          hint: "I … with; … my opinion; maybe you’re …",
          fbOk: "Right.",
          fbBad: "Look at the rule “Giving your opinion” again.",
          fbText: "I <b>agree</b> with, <b>in</b> my opinion, maybe you’re <b>right</b>, I buy clothes only <b>when</b> I need them."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zoriana doesn’t agree with Bohdan. Write her words.</p>`,
          tiles: ["I", "don’t", "agree", "with", "Bohdan"],
          extra: ["am"],
          answer: "I don’t agree with Bohdan.",
          keepCase: true,
          hint: "I + don’t + agree + with…",
          fbOk: "Yes!",
          fbBad: "Not “I am agree”: I don’t agree with…",
          fbText: "<b>I don’t agree with Bohdan.</b> Agree is a verb: I agree, I don’t agree – no <i>am</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p><b>Kyrylo:</b> Let’s have a clothes swap!<br><b>Zoriana:</b> That’s a great idea!</p>`,
          before: "Zoriana",
          after: "with Kyrylo.",
          answer: ["agrees", "agreed"],
          hint: "She likes his idea. She … with him.",
          fbOk: "Well done!",
          fbBad: "She likes the idea: she agrees or doesn’t agree?",
          fbText: "Zoriana <b>agrees</b> with Kyrylo: she likes his idea. He, she → agree<b>s</b>. <i>Agreed</i> is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a short article for the school newspaper.</p>`,
          text: "<b>Fashion and us</b><br>Is fashion important to us? Bohdan thinks fashion is fun, but Zoriana doesn’t {*agree|agrees|agreed} with him. Daryna buys {*second-hand|expensive} clothes because they’re cheap. Kyrylo had {*such a|so|such} good idea that everyone liked it: a clothes swap! It’s on 12 December. {*In|On|At} my opinion, a swap is a great way to buy less and wear clothes longer.",
          hint: "doesn’t + ? Cheap clothes → ? Adjective + noun → ? … my opinion.",
          fbOk: "Right.",
          fbBad: "Check: doesn’t + verb, Daryna’s part of the text, such a + adjective + noun.",
          fbText: "doesn’t <b>agree</b>, <b>second-hand</b> clothes, <b>such a</b> good idea, <b>In</b> my opinion."
        }
      ],
      outro: {
        text: "Give your opinion, say why, and agree or disagree politely: talk about the idea, not the person.",
        learned: [
          "Give your opinion: I think…, In my opinion…",
          "Partly agree politely: That’s true, but…",
          "Read people’s opinions about fashion and say who thinks what."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s3l7",
      title: "The school clothes swap",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help at the clothes swap?",
          body: `<p class="lead">It’s 12 December. The clothes swap is in the school hall in Kyiv. Andrii and his friends need help.</p><p>Describe the clothes, choose the right words and give your opinion. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Lots of people wear big jumpers now: they’re {*in fashion|out of fashion|old-fashioned}. Nobody wears Dad’s old shirt: it’s {*out of fashion|in fashion|fashionable}. Daryna’s brown radio from 1980 looks {*old-fashioned|fashionable|in fashion}.",
          pre: "e9s3l1",
          hint: "Popular now → ? Nobody wears it → ? Not modern → ?",
          fbOk: "Yes!",
          fbBad: "Popular now, not popular now or not modern?",
          fbText: "Popular now: <b>in fashion</b>. Nobody wears it: <b>out of fashion</b>. Not modern: <b>old-fashioned</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Bohdan brought a {*checked|spotted|plain} shirt with red and black squares. Zoriana brought a grey {*hoodie|tracksuit|trainers} with a hood. Kyrylo took some jeans, but they were too {*tight|baggy|loose}: they were too small.",
          pre: "e9s3l2",
          fbOk: "Right.",
          fbBad: "Squares → ? A hood → ? Too small → ?",
          fbText: "Squares: <b>checked</b>. A top with a hood: a <b>hoodie</b>. Too small: too <b>tight</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Daryna found a scarf. It’s long and blue. It’s made of wool.</p>`,
          opts: [
            "a blue woollen long scarf",
            "a woollen long blue scarf",
            "a long blue woollen scarf"
          ],
          correct: 2,
          pre: "e9s3l3",
          fbOk: "Exactly.",
          fbBad: "Size → colour → material.",
          fbText: "Size (<i>long</i>) → colour (<i>blue</i>) → material (<i>woollen</i>): <b>a long blue woollen scarf</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>Bohdan loves his jacket. It isn’t new, and it’s made of denim.</p>`,
          tiles: ["Bohdan", "brought", "a", "nice", "old", "denim", "jacket"],
          extra: ["an"],
          answer: "Bohdan brought a nice old denim jacket.",
          pre: "e9s3l3",
          fbOk: "Well done!",
          fbBad: "Opinion → age → material → noun.",
          fbText: "<b>Bohdan brought a nice old denim jacket.</b> Opinion (<i>nice</i>) → age (<i>old</i>) → material (<i>denim</i>)."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "The hall was {*so|such|such a} busy that we couldn’t find a chair. There were {*such|so|such a} nice clothes that I took three things. It was {*such a|so|such} great day!",
          pre: "e9s3l4",
          hint: "What comes after each gap: an adjective alone or an adjective + a noun? One thing or more?",
          fbOk: "Yes!",
          fbBad: "Adjective alone → so. Adjective + noun → such (a).",
          fbText: "<b>so</b> busy that, <b>such</b> nice clothes (two or more things), <b>such a</b> great day (one)."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Write the missing word.",
          body: `<p>Kyrylo is trying on a black jacket, a white shirt and a tie.</p>`,
          before: "Kyrylo looks as",
          after: "he’s going to a wedding.",
          answer: ["if", "though"],
          pre: "e9s3l5",
          fbOk: "Right.",
          fbBad: "as + ? + a sentence",
          fbText: "Kyrylo looks as <b>if</b> he’s going to a wedding. <i>As though</i> is correct too."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Find the mistake.",
          body: `<p>One part of Zoriana’s notes is wrong.</p>`,
          text: "This old hat [looks as if] a flower pot. Andrii [!looks as though] he’s cold. My new hoodie [!looks] great.",
          pre: "e9s3l5",
          fbOk: "Good eye!",
          fbBad: "Before a noun → like.",
          fbText: "<i>A flower pot</i> is a noun, so: the hat <b>looks like</b> a flower pot. <i>Looks as though he’s cold</i> and <i>looks great</i> are correct."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 8",
          title: "Choose the correct answer.",
          body: `<p><b>Bohdan:</b> In my opinion, everyone should buy new clothes every month.</p><p>Zoriana agrees only partly, and she wants to be polite. What does she say?</p>`,
          opts: [
            "I agree with you.",
            "That’s true, but new clothes cost a lot of money.",
            "I think you’re right."
          ],
          correct: 1,
          pre: "e9s3l6",
          hint: "How do we partly agree? Remember the rule “Giving your opinion”.",
          fbOk: "Well done!",
          fbBad: "She agrees only partly, and she’s polite: That’s true, but…",
          fbText: "<b>That’s true, but…</b> – partly agree: a polite way to give a different idea. <i>I agree with you</i> and <i>I think you’re right</i> mean she agrees."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about fashion, describe clothes in detail and give your opinion politely.",
        learned: [
          "Talk about fashion and everyday clothes.",
          "Put adjectives in the right order: a nice old denim jacket.",
          "Use so … that, such (a) … that and as if.",
          "Give your opinion and agree or disagree politely."
        ]
      }
    }
  ]
});
