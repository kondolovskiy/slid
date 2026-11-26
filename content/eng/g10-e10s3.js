/* Слід · Англійська мова, 10 клас — «Food and habits» (e10s3)
   Програма: П1407 («Іноземні мови. 10–11 класи», наказ МОН № 1407 від 23.10.2017), спеціалізовані школи, B2:
   10 кл., тема «Харчування» — національні страви України та країн, мова яких вивчається; смаки, уподобання;
   здорова та корисна їжа; шкідливі звички (с. 22; лексика с. 22–23); функція «давати поради, реагувати на поради
   інших» (с. 22) — l5; граматика (с. 23): use(d) to / would + infinitive for past routines and habits — повторення
   e7s5l3, e9s1l4, нове для B2: would лише для дій, не для станів; Past Simple для одноразової події; didn’t use to;
   be / get used to + -ing — наш контраст (l6); обсяги — с. 21 (читання 350–400 слів — l1, три уривки ≤ 180 слів):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. Страви — розширення e5s3l6 і e6s3l6 без дубля
   (тут — banosh, haggis, chicken Kyiv; borscht — UNESCO 2022, як у e6s3l6). Шкідливі звички — побутові (нігті, сніданок,
   перекуси, телефон уночі), без речовин і медичних тверджень. Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Oksana, Emma,
   Andrii, Mariia — 16, Dmytro — 12, Tom — 14; нова — Orysia (переїхала з Vinnytsia до Англії, клас Emma).
   Форми й значення — CD, CD Grammar («Used to», «Would», «Prefer», «Would rather»), OALD habit; факти — по два джерела;
   URL — tasks/…/write-eng-g10-e10s3.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s3, 2026-11-26). 7 уроків (6 + фінал). Будова — за розділами 9 кл. (e9s1).
   Перевірка: node tools/validate.mjs --section e10s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s3",
  grade: 10,
  weeks: [10, 13],
  title: "Food and habits",
  why: "To talk about national dishes, tastes and healthy food. And to talk about habits, good and bad, in the past and now.",
  requires: ["e5s3l6", "e6s3l4", "e6s3l6", "e7s5l3", "e8s2l1", "e8s2l4", "e9s1l4"],
  meta: { author: "writer-e10s3", created: "2026-11-26", factcheck: "verifier-e10s3, 2026-11-26 (reports/verify/write-eng-g10-e10s3.md)", teacher: null },
  badges: [
    { id: "e10s3boss", name: "Food magazine editor", icon: "trophy", desc: "Finish the final lesson “Food and habits”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s3l1",
      title: "National dishes of Ukraine and the UK",
      short: "National dishes",
      icon: "globe",
      status: "verified",
      why: "Many dishes have a story behind them. Read about national and regional dishes from Ukraine and the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Food with a story",
          body: `<p class="lead">Ms Kravets’s penfriend club is making a magazine. This month’s topic is “Food with a story”.</p><p><b>Taras:</b> I’m writing about borscht and a dish I tried in the Carpathians.<br><b>Emma:</b> I’m writing about haggis. And about a dish with a Ukrainian name that you can find in almost every British supermarket!</p><p>Which dish could that be?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “This dish is named after Ukraine’s capital. It’s chicken with butter inside.”</p><p>What is it called?</p>`,
          opts: [
            "Kyiv cake",
            "chicken Kyiv",
            "Kyiv salad"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>chicken Kyiv</b>: a piece of chicken with butter inside, covered in breadcrumbs. Emma’s article tells its story."
        },
        {
          type: "info",
          title: "Talking about dishes",
          body: `<ul><li>a <b><u>na</u>tional dish</b> → a dish that is typical of a whole country</li><li>a <b><u>re</u>gional dish</b> → a dish that is typical of one part of a country</li><li><b><u>sa</u>voury</b> → salty or spicy, not sweet</li><li>an <b>in<u>gre</u>dient</b> → one of the foods you use to make a dish</li><li><b>be served with</b> → be eaten together with: Borscht is served with sour cream.</li><li><b>be named after</b> → get its name from a person or a place</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food with a story, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i><b>Two Ukrainian dishes</b> – by Taras<br>Ask ten Ukrainian families how they make borscht, and you’ll get ten different recipes. Some cook it with beef, some with chicken, and some make it with no meat at all. But almost everyone adds beetroot, and it’s usually served with sour cream. In 2022, UNESCO added the culture of Ukrainian borscht cooking to its list of heritage that needs urgent protection.<br>Last summer in the Carpathians, I tried a regional dish called banosh. It’s a Hutsul dish: cornmeal cooked in sour cream and served with brynza, a salty sheep’s cheese. Our guide told us that shepherds used to cook it over a fire in the mountains. It was so filling that I didn’t want anything else for the rest of the day!</i></p><p>Which dish is typical of one part of Ukraine?</p>`,
          opts: [
            "borscht",
            "brynza",
            "banosh"
          ],
          correct: 2,
          hint: "Which dish did Taras try in the Carpathians?",
          fbOk: "Right.",
          fbBad: "Read the second half of Taras’s text again.",
          fbText: "<b>Banosh</b> is a regional dish: it comes from the Carpathians. Borscht is cooked all over Ukraine, and brynza is a cheese, not a dish."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Food with a story, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i><b>A night for haggis</b> – by Emma<br>My friend Isla lives in Edinburgh, and every year on 25 January her family has a Burns supper. Burns Night celebrates the birthday of Robert Burns, Scotland’s national poet. The main dish is haggis, which many people call Scotland’s national dish. It’s a savoury pudding made from parts of a sheep, such as the heart and the liver, with oats, onions and spices. Isla says it tastes much better than it sounds! It’s served with mashed swede and potatoes, called “neeps and tatties” in Scotland. Before they eat the haggis, someone reads Burns’s poem about it. Last year, Isla sent me a photo of the haggis on her family’s table. I’d love to try it one day!</i></p><p>Why do people in Scotland have a Burns supper on 25 January?</p>`,
          opts: [
            "It’s the day haggis was first cooked.",
            "It’s Robert Burns’s birthday.",
            "It’s Isla’s birthday."
          ],
          correct: 1,
          hint: "What does Burns Night celebrate?",
          fbOk: "Exactly.",
          fbBad: "Look at the second sentence.",
          fbText: "Burns Night celebrates the <b>birthday of Robert Burns</b>, Scotland’s national poet. The text doesn’t say when haggis was first cooked."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Food with a story, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i><b>A Ukrainian name in British shops</b> – by Emma<br>When I was little, my mum would buy chicken Kyiv every Friday. It’s a piece of chicken with butter inside, covered in breadcrumbs and then fried or baked. The dish is named after Ukraine’s capital, but nobody knows for sure where it was first cooked. In 1979, the shop Marks &amp; Spencer started selling chilled chicken Kyiv, and it soon became very popular. For many years, British packs used the old spelling, “Kiev”. In 2022, the supermarket Sainsbury’s changed it to “Kyiv”, the spelling that comes from Ukrainian. Now I always look for the new spelling on the pack, and I tell my friends why it matters.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "We know that the dish was first cooked in Kyiv.",
            "Chicken Kyiv has butter inside.",
            "Marks & Spencer stopped selling it in 1979.",
            "In 2022, a supermarket changed the spelling on its packs."
          ],
          correct: [1, 3],
          hint: "Check each sentence against the text. What happened in 1979?",
          fbOk: "Well done!",
          fbBad: "Two sentences are true. Read about 1979 and 2022 again.",
          fbText: "Chicken Kyiv has <b>butter inside</b>. In 2022, Sainsbury’s <b>changed the spelling</b> to “Kyiv”. In 1979, Marks &amp; Spencer <i>started</i> selling it. And nobody knows for sure where it was first cooked."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Banosh is a regional dish", "Borscht is usually served", "Chicken Kyiv is named", "Haggis is a savoury"],
          right: ["from the Carpathians.", "with sour cream.", "after Ukraine’s capital.", "pudding from Scotland."],
          hint: "Which half goes after served? And after named?",
          fbOk: "Good eye!",
          fbBad: "Remember: served with, named after.",
          fbText: "Banosh is a regional dish <b>from the Carpathians</b>. Borscht is served <b>with sour cream</b>. Chicken Kyiv is named <b>after Ukraine’s capital</b>. Haggis is a savoury <b>pudding from Scotland</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Banosh is cooked {*in|on|at} sour cream. Haggis is served {*with|by|for} neeps and tatties. Chicken Kyiv is named {*after|from|by} a city. Cornmeal is the main {*ingredient|recipe|dish} of banosh.",
          hint: "One of the foods in a dish is an …",
          fbOk: "Yes!",
          fbBad: "Look at the words in the box on dishes again.",
          fbText: "Cooked <b>in</b> sour cream (not <s>on</s>). Served <b>with</b> neeps and tatties. Named <b>after</b> a city. Cornmeal is the main <b>ingredient</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Pancakes can be sweet, with jam or honey. Or they can be salty, with cheese and mushrooms.</p>`,
          before: "Not sweet, but salty: pancakes with cheese and mushrooms are",
          after: "pancakes.",
          answer: ["savoury", "salty"],
          hint: "A word from the lesson: salty or spicy, not sweet.",
          fbOk: "Well done!",
          fbBad: "Look at the word that means ‘not sweet’.",
          fbText: "They’re <b>savoury</b> pancakes: not sweet. <i>Salty</i> is correct too, but <i>savoury</i> is the word for the whole group of not-sweet dishes."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["in|+gre|di|ent", "+sa|vour|y", "+re|gion|al", "+na|tion|al"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the box on dishes.",
          fbText: "in<u>gre</u>dient, <u>sa</u>voury, <u>re</u>gional, <u>na</u>tional."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes a caption for his photo in the magazine.</p>`,
          text: "This is banosh, my favourite {*regional|sweet|ready} dish from the Carpathians. It’s cooked in sour cream and served {*with|of|to} brynza. But Ukraine’s most famous dish is borscht. In 2022, the culture of borscht cooking {*was added|is added|has added} to a UNESCO list.",
          hint: "Banosh comes from one part of Ukraine. 2022 is in the past.",
          fbOk: "Well done!",
          fbBad: "Check: one part of a country, served …, and the past.",
          fbText: "Banosh is a <b>regional</b> dish. It’s served <b>with</b> brynza. In 2022, borscht cooking <b>was added</b> to a UNESCO list (the passive, past)."
        }
      ],
      outro: {
        text: "Now you can read and write about national and regional dishes and the stories behind them.",
        learned: [
          "Describe dishes: national, regional, savoury, served with.",
          "Read a magazine article about food in Ukraine and the UK.",
          "Say what a dish is named after and what is in it."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s3l2",
      title: "Sweet, spicy or sour? Tastes and preferences",
      short: "Tastes",
      icon: "pot",
      status: "verified",
      why: "Everybody likes different tastes. Describe tastes and say what you prefer.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What kind of eater are you?",
          body: `<p class="lead">The club magazine has a quiz: “What kind of eater are you?” Some members answer.</p><p><b>Dmytro:</b> I’ve got a real sweet tooth. I could eat honey cake every day!<br><b>Mariia:</b> I love spicy food. The hotter, the better!<br><b>Tom:</b> I’m a bit of a fussy eater. I won’t eat anything green.<br><b>Andrii:</b> I prefer savoury snacks to sweet ones. I’d rather have crisps than chocolate.</p><p>Which answer is most like yours?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Read and choose.",
          body: `<p>Dmytro: “I’ve got a real sweet tooth. I could eat honey cake every day!”</p><p>What does Dmytro mean?</p>`,
          opts: [
            "He has a bad tooth.",
            "He loves sweet food.",
            "He doesn’t eat sugar."
          ],
          correct: 1,
          hint: "What could he eat every day?",
          fbOk: "Right.",
          fbBad: "Read the second sentence again.",
          fbText: "If you have a <b>sweet tooth</b>, you love sweet food, like Dmytro and his honey cake. It’s not about real teeth!"
        },
        {
          type: "info",
          title: "Tastes",
          body: `<ul><li><b>sweet</b> → like honey · <b>salty</b> → like crisps</li><li><b>sour</b> → like a lemon · <b><u>bit</u>ter</b> → like dark coffee with no sugar</li><li><b><u>spi</u>cy</b> → with hot spices, like chilli</li><li><b>bland</b> → with almost no taste</li><li><b><u>crun</u>chy</b> → makes a noise when you bite it: apples, crisps</li><li><b><u>crea</u>my</b> → soft and smooth, like yoghurt</li></ul><p>A <b>sweet tooth</b> → you love sweet food. A <b><u>fus</u>sy</b> eater → doesn’t like many kinds of food.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["sour", "bitter", "spicy", "bland"],
          right: ["like a lemon", "like dark coffee with no sugar", "with hot chilli in it", "with almost no taste"],
          hint: "Start with the easy ones: lemon, chilli.",
          fbOk: "Well done!",
          fbBad: "Look at the box on tastes again.",
          fbText: "<b>Sour</b> → like a lemon. <b>Bitter</b> → like dark coffee with no sugar. <b>Spicy</b> → with chilli. <b>Bland</b> → with almost no taste."
        },
        {
          type: "info",
          title: "Saying what you prefer",
          body: `<ul><li>I <b>prefer</b> savoury snacks <b>to</b> sweet ones. Not: <s>prefer … than</s></li><li>I prefer <b>to eat</b> at home. = I prefer <b>eating</b> at home. (both are correct)</li><li>I<b>’d rather have</b> crisps <b>than</b> chocolate. → <b>would rather</b> + verb, no <i>to</i></li><li>I’m (not) <b>keen on</b> spicy food. I <b>can’t stand</b> sour things. (= I really don’t like them)</li></ul><p>After <i>prefer</i> we use <b>to</b>; after <i>would rather</i> we use <b>than</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Andrii prefers crisps {*to|than|from} chocolate. He’d rather {*have|to have|having} a sandwich than a cake. Mariia is keen {*on|of|at} spicy food. She thinks food with almost no taste is {*bland|bitter|crunchy}.",
          hint: "prefer A … B; would rather + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rules: prefer … to, would rather + verb, keen on.",
          fbText: "Prefers crisps <b>to</b> chocolate. He’d rather <b>have</b> (no <i>to</i>). Keen <b>on</b> spicy food. Food with almost no taste is <b>bland</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s quiz answer is wrong.</p>`,
          text: "I’m a fussy eater. I prefer pasta [than] rice, and I’d rather eat at home than in a café.",
          hint: "Which word comes after prefer A?",
          fbOk: "Good eye!",
          fbBad: "Than is fine after would rather. And after prefer?",
          fbText: "I prefer pasta <b>to</b> rice. After <i>would rather</i>, <b>than</b> is correct: I’d rather eat at home than in a café."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma loves fruit and doesn’t eat many sweets. What does she say?</p>`,
          tiles: ["I’d", "rather", "have", "fruit", "than", "sweets"],
          answer: "I’d rather have fruit than sweets.",
          extra: ["to"],
          hint: "would rather + verb + A + than + B.",
          fbOk: "Yes!",
          fbBad: "Is there to after would rather?",
          fbText: "<b>I’d rather have fruit than sweets.</b> After <i>would rather</i>, the verb has no <i>to</i>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Ms Kravets:</b> Would you like some lemon cake, Mariia?<br><b>Mariia:</b> …</p><p>Mariia isn’t keen on sour things. What is the most polite answer?</p>`,
          opts: [
            "No, thanks. I’d rather have a piece of honey cake, if that’s OK.",
            "No. I can’t stand lemons.",
            "I prefer not lemon cake."
          ],
          correct: 0,
          hint: "Polite answers often have thanks and a nice offer of another choice.",
          fbOk: "Exactly.",
          fbBad: "One answer is correct but not polite, and one is not correct English.",
          fbText: "<b>No, thanks. I’d rather have …</b> is polite. <i>I can’t stand lemons</i> is correct English but sounds rude to the person offering. <s>I prefer not lemon cake</s> is wrong: <i>I’d prefer not to have</i> lemon cake."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana: “I love deruny, and I like syrnyky too. But deruny are my favourite!”</p>`,
          before: "Oksana prefers deruny",
          after: "syrnyky.",
          answer: ["to", "over"],
          hint: "prefer A … B.",
          fbOk: "Well done!",
          fbBad: "Not than: look at the rule for prefer.",
          fbText: "Oksana prefers deruny <b>to</b> syrnyky. We usually say <b>prefer A to B</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia sends her quiz answer to the magazine.</p>`,
          text: "I’m definitely not a fussy eater! I love spicy food, and I’d rather {*try|to try|trying} a new dish than eat the same thing every day. I prefer savoury food {*to|than|as} sweet food. But I can’t {*stand|prefer|rather} bitter tastes, like dark coffee.",
          hint: "would rather + verb; prefer A to B; can’t … = really don’t like.",
          fbOk: "Brilliant!",
          fbBad: "Check the rules for would rather, prefer and can’t stand.",
          fbText: "I’d rather <b>try</b> a new dish. I prefer savoury food <b>to</b> sweet food. I can’t <b>stand</b> bitter tastes."
        }
      ],
      outro: {
        text: "Sweet, sour, bitter or spicy: now you can describe tastes and say what you prefer.",
        learned: [
          "Describe tastes: sour, bitter, spicy, bland, crunchy.",
          "Say what you prefer: prefer A to B, would rather … than.",
          "Answer an offer of food politely."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s3l3",
      title: "I used to love sweets, Grandma would bake: states and actions",
      short: "Used to, would",
      icon: "scroll",
      status: "verified",
      why: "You already know used to and would. Learn when would is impossible and when you need the Past Simple.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Grandma Hanna’s kitchen",
          body: `<p class="lead">For the club magazine, Oksana asks Grandma Hanna about food when she was a girl.</p><p><i>“When I was your age, we didn’t use to buy much food in shops. We used to have a cow and lots of hens. Every Saturday, my mother would bake bread in the big stove, and I would help her. I used to love the smell! Once, in 1975, I baked the bread on my own. It was a disaster!”</i></p><p>Grandma uses used to, would and the Past Simple. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Grandma says: “I used to love the smell!”</p><p>Can she say “I would love the smell” about her childhood?</p>`,
          opts: [
            "Yes, it means the same.",
            "No, because love is a state, not an action.",
            "No, because would is only for the future."
          ],
          correct: 1,
          hint: "Would for past habits: actions or states?",
          fbOk: "Yes!",
          fbBad: "Would can be about the past too. But not with every verb.",
          fbText: "<b>Love</b> is a state, not an action, so only <b>used to love</b>. <i>Would</i> can be about the past, but only for actions: <i>my mother would bake bread</i>."
        },
        {
          type: "info",
          title: "Actions and states",
          body: `<p>Both <b>used to</b> and <b>would</b> are for things that happened again and again in the past.</p><ul><li>Actions → <b>used to</b> or <b>would</b>: My mother <b>used to bake</b> / <b>would bake</b> bread.</li><li>States → only <b>used to</b>: love, like, hate, know, be, live, have (= own). We <b>used to have</b> a cow. Not: <s>We would have a cow.</s></li><li>Negatives and questions: <b>didn’t use to</b>, <b>Did</b> you <b>use to</b>…? (no <i>-d</i>)</li></ul><p>Often <i>used to</i> starts the story, and <i>would</i> continues it.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>When Grandma Hanna was a girl, she … Can you use would?</p>`,
          bins: ["used to or would", "only used to"],
          items: [
            ["bake bread every Saturday", 0],
            ["help in the garden", 0],
            ["have breakfast at six", 0],
            ["have a cow", 1],
            ["love the smell of bread", 1],
            ["know every hen by name", 1]
          ],
          hint: "Is it something you do (an action) or something you have, feel or know (a state)?",
          fbOk: "Well done!",
          fbBad: "Look at have: is it about eating or about owning?",
          fbText: "Actions → <b>used to</b> or <b>would</b>: bake, help, <b>have breakfast</b> (= eat it). States → only <b>used to</b>: <b>have a cow</b> (= own it), love, know."
        },
        {
          type: "info",
          title: "One time or many times?",
          body: `<p><b>Used to</b> and <b>would</b> are for habits. For one event, or when you say <b>how many times</b>, use the <b>Past Simple</b>:</p><ul><li>Every Saturday, my mother <b>would bake</b> bread. (a habit)</li><li><b>Once</b>, in 1975, I <b>baked</b> the bread on my own. (one time)</li><li>I <b>went</b> to Poltava three times that summer. Not: <s>I used to go to Poltava three times.</s></li><li>But a habit is fine: I <b>used to go</b> swimming three times a week.</li></ul><p>The Past Simple is fine for habits too: <i>Every Saturday, she baked bread.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "When Grandma Hanna was a girl, her family {*used to|would|was used to} live in a small house near a river. In summer, she {*would|was used to|use to} swim there every evening. In 1976, she {*won|used to win|would win} a swimming race in Poltava.",
          hint: "Live: action or state? Won a race in 1976: how many times?",
          fbOk: "Exactly.",
          fbBad: "State → used to. Habit → would. One event → Past Simple.",
          fbText: "Her family <b>used to live</b> there (a state, so not <i>would</i>). She <b>would swim</b> every evening (an action, again and again). In 1976, she <b>won</b> a race: one event, so the Past Simple."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Oksana writes about her own childhood.</p><p>When I was little, I …</p>`,
          opts: [
            "didn’t use to like beetroot.",
            "would be scared of Grandma’s hens.",
            "would hide behind Grandad when the hens came.",
            "used to feed the hens every morning.",
            "would have a pet rabbit."
          ],
          correct: [0, 2, 3],
          hint: "Find the states first: be scared, have a pet.",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Would is only for actions.",
          fbText: "<b>didn’t use to like</b> (a state with <i>used to</i>), <b>would hide</b> and <b>used to feed</b> (actions). <i>Be scared</i> and <i>have a pet</i> are states: only <i>used to be scared</i>, <i>used to have</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "As a child, I [would] know all the cake shops in Chernihiv. My grandad would take me there on Sundays.",
          hint: "Know: is it an action or a state?",
          fbOk: "Good eye!",
          fbBad: "Would is only for actions. Find a state.",
          fbText: "<b>Know</b> is a state, so: I <b>used to know</b> all the cake shops. <i>My grandad would take me</i> is correct: it’s an action."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana asks Grandad Mykola a question for the magazine.</p>`,
          tiles: ["did", "you", "use", "to", "eat", "a lot of", "sweets?"],
          answer: "Did you use to eat a lot of sweets?",
          extra: ["would"],
          hint: "Did + you + use to + verb.",
          fbOk: "Right.",
          fbBad: "In a question: Did … use to …?",
          fbText: "<b>Did you use to eat a lot of sweets?</b> After <i>did</i>, write <b>use to</b>, with no <i>-d</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>“My grandmother used to live with us. She was strict, but she had a real sweet tooth. On winter evenings, she would make uzvar, a drink from dried apples and pears, and we would drink it hot with honey. Once, for my birthday, she gave me a whole jar of honey. I finished it in a week!” – Grandma Hanna</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Grandma Hanna got a jar of honey every birthday.",
            "Grandma Hanna’s grandmother didn’t like sweet food.",
            "Grandma Hanna’s grandmother would make uzvar on winter evenings."
          ],
          correct: 2,
          hint: "Once = one time. Would = again and again.",
          fbOk: "Brilliant!",
          fbBad: "Look at would and at once in the text.",
          fbText: "Her grandmother <b>would make uzvar</b> on winter evenings: a habit. The honey was <b>once</b>, one birthday. And she had a sweet tooth, so she liked sweet food."
        }
      ],
      outro: {
        text: "Used to for actions and states, would only for actions, the Past Simple for one event.",
        learned: [
          "Use would only for past actions, not for states.",
          "Use the Past Simple for one event in the past.",
          "Ask and answer with did you use to and didn’t use to."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s3l4",
      title: "Healthy food: what is good for you?",
      short: "Healthy food",
      icon: "leaf",
      status: "verified",
      why: "Food gives you energy and helps you stay healthy. Talk about what is in food and why your body needs it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Five a day",
          body: `<p class="lead">There’s a new poster in the canteen at Emma’s school.</p><p><b>5 A Day!</b><br>Eat at least five portions of fruit and vegetables every day.<br>One adult portion is 80 g: for example, one apple or three big spoons of peas.<br>Fresh, frozen and tinned fruit and vegetables all count.<br>Potatoes don’t count!</p><p>Why don’t potatoes count, do you think?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The poster says: “Potatoes don’t count!”</p><p>Why not?</p>`,
          opts: [
            "They are always fried.",
            "They are mainly starch, like bread and pasta.",
            "They have no vitamins."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The NHS, the UK’s health service, says potatoes are mainly <b>starch</b>, like bread and pasta. Potatoes are still good food, but they don’t count as a portion of fruit and vegetables."
        },
        {
          type: "info",
          title: "What’s in your food?",
          body: `<ul><li><b><u>pro</u>tein</b> → helps your body grow and repair itself: fish, eggs, beans, meat</li><li><b>carbo<u>hy</u>drates</b> (carbs) → give you energy: bread, pasta, rice, potatoes</li><li><b><u>fi</u>bre</b> → keeps your digestion healthy: wholegrain bread, fruit, vegetables</li><li><b><u>vi</u>tamins</b> → help you stay healthy: fruit, vegetables</li></ul><p>A <b><u>bal</u>anced diet</b> has the right amount of each. <b>Processed</b> food, like crisps or burgers, is often high in fat, salt or sugar.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>What do these foods mainly give you?</p>`,
          bins: ["protein", "carbohydrates"],
          items: [
            ["eggs", 0],
            ["fish", 0],
            ["chicken", 0],
            ["pasta", 1],
            ["rice", 1],
            ["bread", 1]
          ],
          hint: "Which foods help you grow? Which give you energy?",
          fbOk: "Right.",
          fbBad: "Look at the examples in the box again.",
          fbText: "<b>Protein</b>: eggs, fish, chicken. <b>Carbohydrates</b>: pasta, rice, bread."
        },
        {
          type: "info",
          title: "High in, rich in, good for",
          body: `<ul><li>Lentils are <b>high in</b> protein. = They have a lot of protein.</li><li>Oranges are <b>rich in</b> vitamin C. = They have a lot of it.</li><li>This yoghurt is <b>low in</b> sugar. = It has only a little sugar.</li><li>Vegetables are <b>good for</b> you. Too many sweets are <b>bad for</b> your teeth.</li></ul><p>After high, rich and low → <b>in</b>. After good and bad → <b>for</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Wholegrain bread is high {*in|of|with} fibre. Oranges are rich {*in|of|on} vitamin C. Too many sweets are bad {*for|to|at} your teeth. Fish and eggs give you a lot of {*protein|fibre|sugar}.",
          hint: "high, rich → … ; bad → …",
          fbOk: "Yes!",
          fbBad: "Look at the last line of the box.",
          fbText: "High <b>in</b> fibre, rich <b>in</b> vitamin C, bad <b>for</b> your teeth. Fish and eggs give you <b>protein</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i><b>Healthy eating tips</b><br>Start the day with breakfast: wholegrain cereal with milk and fruit gives you energy for the morning. Choose water or milk instead of fizzy drinks, which are often very high in sugar. A glass of fruit juice counts as one of your five a day, but only one glass counts, however much you drink. Try to eat fish twice a week. And don’t worry about one burger: a balanced diet is about what you eat every day.</i></p><p>Which tip is in the text?</p>`,
          opts: [
            "Drink as much fruit juice as you like.",
            "Never eat burgers.",
            "Eat fish about twice a week."
          ],
          correct: 2,
          hint: "Read about juice and about fish again.",
          fbOk: "Exactly.",
          fbBad: "Check each tip against the text.",
          fbText: "The text says: <b>try to eat fish twice a week</b>. Only one glass of juice counts, and one burger is not a problem."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Lentils, beans, fish and eggs help your body grow and repair itself.</p>`,
          before: "They help your body grow because they are high in",
          after: ".",
          answer: "protein",
          hint: "Look at the box: what helps your body grow?",
          fbOk: "Well done!",
          fbBad: "Look at the first line in the box on food.",
          fbText: "They’re high in <b>protein</b>: it helps your body grow and repair itself."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A balanced diet has", "Processed food is often", "Fibre keeps", "Carbohydrates give you"],
          right: ["the right amount of each kind of food.", "high in salt, fat or sugar.", "your digestion healthy.", "energy."],
          hint: "Start with Fibre keeps …",
          fbOk: "Good eye!",
          fbBad: "Look at the box on food again.",
          fbText: "A balanced diet has <b>the right amount of each kind of food</b>. Processed food is often <b>high in salt, fat or sugar</b>. Fibre keeps <b>your digestion healthy</b>. Carbohydrates give you <b>energy</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+pro|tein", "car|bo|+hy|drate", "+vi|ta|min", "+bal|anced"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the box on food.",
          fbText: "<u>pro</u>tein, carbo<u>hy</u>drate, <u>vi</u>tamin, <u>bal</u>anced."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her family’s dinner.</p>`,
          text: "Tonight Mum cooked fish with rice and vegetables from our garden. The fish is high {*in|of|for} protein, and the rice gives us {*energy|vitamin C}. The vegetables are rich in vitamins, so they’re good {*for|to|in} us. Dad says crisps are a {*processed|balanced|wholegrain} food, so we only have them at parties.",
          hint: "high in, good for. Crisps are often high in salt and fat.",
          fbOk: "Well done!",
          fbBad: "Check the boxes on food and on high in, good for.",
          fbText: "High <b>in</b> protein. Rice is a carbohydrate, so it gives us <b>energy</b>. Good <b>for</b> us. Crisps are a <b>processed</b> food."
        }
      ],
      outro: {
        text: "Protein, carbs, fibre and vitamins: now you can talk about what is in food and why we need it.",
        learned: [
          "Name what is in food: protein, carbohydrates, fibre, vitamins.",
          "Use high in, rich in, low in, good for.",
          "Read healthy eating tips and a food poster."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s3l5",
      title: "Bad habits and how to break them",
      short: "Habits and advice",
      icon: "target",
      status: "verified",
      why: "Everybody has a habit they want to change. Give advice and react to other people’s advice.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Help, I can’t stop!",
          body: `<p class="lead">The club magazine has an advice page. Three members ask for help.</p><p><b>Kyrylo:</b> I bite my nails when I’m nervous, especially before tests. How can I stop?<br><b>Zoriana:</b> I always skip breakfast because I get up too late. By eleven, I’m really hungry and in a bad mood.<br><b>Andrii:</b> I snack on crisps while I’m doing my homework. I don’t even notice it!</p><p>What advice would you give them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo wants to stop biting his nails. He wants to … the habit.</p><p>Which verb means ‘stop a habit’?</p>`,
          opts: [
            "make",
            "break",
            "take"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We <b>break</b> a habit: we stop it. <i>Make a habit of something</i> means the opposite: start doing it often."
        },
        {
          type: "info",
          title: "Talking about habits",
          body: `<ul><li><b>get into</b> the habit of + -ing → start doing something regularly</li><li><b>break</b> a habit → stop doing it</li><li><b>give up</b> + noun / -ing → stop completely: give up fizzy drinks</li><li><b>cut down on</b> + noun → have less of it: cut down on crisps</li><li><b>skip</b> a meal → not eat it</li><li><b>snack on</b> something → eat small amounts between meals</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Zoriana wants to get {*into|to|on} the habit of eating breakfast. Andrii is trying to cut down {*on|of|from} crisps. Kyrylo wants to {*break|make|do} his habit of biting his nails.",
          hint: "get … the habit; cut down … something; … a habit = stop it.",
          fbOk: "Yes!",
          fbBad: "Look at the box on habits again.",
          fbText: "Get <b>into</b> the habit. Cut down <b>on</b> crisps. <b>Break</b> a habit."
        },
        {
          type: "info",
          title: "Giving advice and reacting",
          body: `<p><b>Giving advice</b></p><ul><li>You <b>should</b> / You <b>could</b> go to bed earlier.</li><li><b>Why don’t you</b> keep some fruit on your desk?</li><li><b>Have you tried</b> chewing gum? (tried + <b>-ing</b>)</li><li>It <b>might be a good idea to</b> get up ten minutes earlier.</li></ul><p><b>Reacting</b></p><ul><li>That’s a great idea – I’ll give it a try!</li><li>Thanks, but I’ve already tried that.</li><li>I’m not sure that would work for me.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Zoriana:</b> I always skip breakfast. I’m never hungry at seven.<br><b>Mariia:</b> …</p><p>Mariia gives advice. What does she say?</p>`,
          opts: [
            "Why you don’t take a banana to school?",
            "You should to take a banana to school.",
            "Why don’t you take a banana and a sandwich to school?"
          ],
          correct: 2,
          hint: "Look at the word order in Why don’t you…?",
          fbOk: "Right.",
          fbBad: "Only one answer is correct English.",
          fbText: "<b>Why don’t you take …?</b> is the correct question. After <i>should</i>, there is no <i>to</i>: <i>You should take</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Kyrylo, have you tried {*keeping|keep|kept} your hands busy? Maybe you could {*hold|holding|to hold} a small ball in your pocket. Andrii, why don’t you {*put|putting|to put} the crisps in another room?",
          hint: "Have you tried + …? could and why don’t you + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the box on advice again.",
          fbText: "Have you tried <b>keeping</b>? (tried + -ing). You could <b>hold</b>. Why don’t you <b>put</b>? (verb with no <i>to</i>)."
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Zoriana tells Andrii: “Why don’t you have some apple slices instead of crisps?” How can Andrii react?</p>`,
          bins: ["yes to the advice", "no to the advice"],
          items: [
            ["That’s a great idea – I’ll give it a try!", 0],
            ["Good idea! I’ll start tomorrow.", 0],
            ["Thanks, I’ll try that tonight.", 0],
            ["Thanks, but I’ve already tried that.", 1],
            ["I’m not sure that would work for me.", 1],
            ["Hmm, I don’t think that’s for me.", 1]
          ],
          hint: "Find the words but and not sure.",
          fbOk: "Well done!",
          fbBad: "Some answers say thanks, but then say no.",
          fbText: "Yes: <b>I’ll give it a try</b>, <b>I’ll start tomorrow</b>, <b>I’ll try that tonight</b>. No, politely: <b>I’ve already tried that</b>, <b>I’m not sure that would work</b>, <b>I don’t think that’s for me</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras checks his phone until midnight. Mariia asks him a question.</p>`,
          tiles: ["have", "you", "tried", "going", "to bed", "earlier?"],
          answer: "Have you tried going to bed earlier?",
          extra: ["go"],
          hint: "Have + you + tried + -ing?",
          fbOk: "Yes!",
          fbBad: "After tried: go or going?",
          fbText: "<b>Have you tried going to bed earlier?</b> After <i>Have you tried</i>, use <b>-ing</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s reply is wrong.</p>`,
          text: "Thanks for the advice! I’ve tried [leave] my phone in the kitchen at night, and it really works.",
          hint: "I’ve tried + …?",
          fbOk: "Good eye!",
          fbBad: "Look at the verb after tried.",
          fbText: "I’ve tried <b>leaving</b> my phone in the kitchen: after <i>tried</i>, we use <b>-ing</b> here."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i><b>Re: I bite my nails!</b><br>Hi Kyrylo! I used to bite my nails too, so I know how you feel. Here’s what helped me. First, I noticed when I did it: usually when I was bored or nervous. Then I tried keeping my hands busy. I’d hold a little ball in my pocket and squeeze it. It might also be a good idea to keep your nails short. And don’t be too hard on yourself if you forget. It took me about two months to break the habit! – Daryna</i></p><p>Which piece of advice does Daryna give?</p>`,
          opts: [
            "Stop worrying about tests.",
            "Keep your nails short.",
            "Ask your parents to help you."
          ],
          correct: 1,
          hint: "Find It might also be a good idea to…",
          fbOk: "Right.",
          fbBad: "Read the advice phrases in the text again.",
          fbText: "Daryna says: <b>It might also be a good idea to keep your nails short.</b> She also tried keeping her hands busy."
        }
      ],
      outro: {
        text: "Now you can talk about habits, give advice and react to advice politely.",
        learned: [
          "Talk about habits: break a habit, give up, cut down on.",
          "Give advice: Why don’t you…? Have you tried + -ing?",
          "React to advice: I’ll give it a try. I’ve already tried that."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s3l6",
      title: "I’m used to it: getting used to new food",
      short: "Be used to",
      icon: "path",
      status: "verified",
      why: "In a new place, food and habits feel strange at first. Say what is normal for you and what is still new.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "New place, new food",
          body: `<p class="lead">Orysia moved from Vinnytsia to England with her mum last year. Now she’s in Emma’s class. She writes for the club magazine.</p><p><i>At first, everything was strange. I wasn’t used to having lunch at school at half past twelve. At home, we used to have soup for lunch, but here most of my friends have sandwiches. Now I’m getting used to it – and I’ve taught Emma to make syrnyky!</i></p><p>Used to, be used to, get used to: do they mean the same?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Orysia: “I wasn’t used to having lunch at school at half past twelve.”</p><p>What does she mean?</p>`,
          opts: [
            "It was new and strange for her.",
            "She often had lunch at school in Vinnytsia.",
            "She didn’t want to have lunch."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I wasn’t used to it</b> = it was new and strange for me. It’s different from <i>used to</i> + verb, a past habit."
        },
        {
          type: "info",
          title: "Used to, be used to, get used to",
          body: `<ul><li><b>used to</b> + verb → a past habit or state: We <b>used to have</b> soup for lunch. (not now)</li><li><b>be used to</b> + noun / -ing → it’s normal for me, not strange: I’m <b>used to</b> sandwiches now. I’m <b>used to having</b> lunch at school.</li><li><b>get used to</b> + noun / -ing → it’s becoming normal: I’m <b>getting used to</b> the food.</li></ul><p>In <i>be / get used to</i>, <i>to</i> goes with a noun or -ing: <b>used to having</b>, not <s>used to have</s>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Tom: “I used to hate syrnyky.”</p><p>What does Tom mean?</p>`,
          opts: [
            "Syrnyky are normal for him now.",
            "He hated them in the past, but he doesn’t now.",
            "He hates them, but he’s getting used to them."
          ],
          correct: 1,
          hint: "used to + verb: past or present?",
          fbOk: "Exactly.",
          fbBad: "Used to + verb is about the past.",
          fbText: "<b>I used to hate</b> = I hated them in the past, but not now. <i>I’m used to syrnyky</i> would mean they are normal for him."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "In Vinnytsia, Orysia {*used to|is used to|was used to} walk to school. Now she takes a bus, and she isn’t used to {*getting|get|got} up so early. But she’s getting used to {*eating|eat|ate} beans on toast!",
          hint: "A past habit → used to + verb. be / get used to → + -ing.",
          fbOk: "Yes!",
          fbBad: "Look at the box again: used to + verb, be used to + -ing.",
          fbText: "She <b>used to walk</b> to school (a past habit). She isn’t used to <b>getting</b> up early. She’s getting used to <b>eating</b> beans on toast."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma tried borscht at Orysia’s flat in September. Now she eats it every week, and it isn’t new for her any more.</p>`,
          before: "Borscht is normal for Emma now. She’s",
          after: "to it.",
          answer: ["used", "accustomed"],
          hint: "be … to + noun.",
          fbOk: "Well done!",
          fbBad: "be … to it = it’s normal for you.",
          fbText: "She’s <b>used to</b> it: borscht is normal for her now. <i>Accustomed to</i> means the same, but it’s more formal."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Orysia talks about her first months in England.</p>`,
          opts: [
            "I’m used to drink tea with milk now.",
            "I’m getting used to the rain.",
            "I used to eat varenyky every week in Vinnytsia.",
            "I get used to speak English all day.",
            "I’m not used to having dinner so early."
          ],
          correct: [1, 2, 4],
          hint: "After be / get used to: a noun or -ing.",
          fbOk: "Brilliant!",
          fbBad: "Three answers are correct. Check the verb after be used to and get used to.",
          fbText: "Correct: <b>getting used to the rain</b>, <b>used to eat</b> (a past habit), <b>not used to having</b>. We say <i>I’m used to drinking</i> and <i>I’m getting used to speaking</i>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>In England, cars drive on the left. Orysia writes about her mum.</p>`,
          tiles: ["my mum", "isn’t", "used", "to", "driving", "on the left."],
          answer: "My mum isn’t used to driving on the left.",
          extra: ["drive"],
          hint: "be used to + -ing.",
          fbOk: "Right.",
          fbBad: "After be used to: drive or driving?",
          fbText: "<b>My mum isn’t used to driving on the left.</b> After <i>be used to</i>, use a noun or <b>-ing</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Orysia’s message is wrong.</p>`,
          text: "In Vinnytsia, my grandma used to cook borscht every Sunday. Here, I’m slowly getting used to [cook] it myself.",
          hint: "getting used to + …?",
          fbOk: "Good eye!",
          fbBad: "Look at the verb after getting used to.",
          fbText: "I’m getting used to <b>cooking</b> it myself. <i>My grandma used to cook</i> is correct: it’s a past habit."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>When Orysia joined our class, she wasn’t used to our school lunches at all. She used to bring her own food: syrnyky, an apple and a flask of tea. At first, people would ask, “What are those?” Now half the class is used to her syrnyky, and we’re always asking for one! Last month she taught me to make them. My first ones were a disaster, but I’m getting used to cooking them. – Emma</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Orysia never brought her own food to school.",
            "Emma’s first syrnyky were perfect.",
            "Many of Orysia’s classmates know and like her syrnyky now."
          ],
          correct: 2,
          hint: "What is half the class used to now?",
          fbOk: "Right.",
          fbBad: "Read the middle of Emma’s text again.",
          fbText: "Now half the class <b>is used to</b> her syrnyky and asks for them. Orysia <b>used to bring</b> her own food, and Emma’s first syrnyky were a disaster."
        }
      ],
      outro: {
        text: "Used to is about the past. Be used to and get used to are about what feels normal.",
        learned: [
          "Use be used to + noun or -ing for what is normal for you.",
          "Use get used to for something that is becoming normal.",
          "Tell used to + verb from be used to + -ing."
        ]
      }
    },

    /* ───────────── Урок 7 (фінал) ───────────── */
    {
      id: "e10s3l7",
      title: "Our food magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you edit the food magazine?",
          body: `<p class="lead">The club’s food magazine is almost ready. Ms Kravets needs an editor to check the pages.</p><p>You need everything from this section: dishes, tastes, habits and advice.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Taras’s page: “It’s a regional dish from the Carpathians: cornmeal cooked in sour cream and served with brynza.”</p><p>Which dish is it?</p>`,
          opts: [
            "borscht",
            "banosh",
            "haggis"
          ],
          correct: 1,
          pre: "e10s3l1",
          fbOk: "Yes!",
          fbBad: "Cornmeal and brynza: which dish did Taras try in the mountains?",
          fbText: "It’s <b>banosh</b>, a Hutsul dish from the Carpathians. Haggis is from Scotland, and borscht is cooked all over Ukraine."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Tom prefers pasta {*to|than} rice. He’d rather {*have|to have} soup than salad.",
          pre: "e10s3l2",
          hint: "Remember the patterns: prefer A … B, and would rather + which form of the verb?",
          fbOk: "Exactly.",
          fbBad: "prefer A to B; would rather + verb.",
          fbText: "Prefers pasta <b>to</b> rice. He’d rather <b>have</b> soup (no <i>to</i>)."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Mariia’s page: “This soup has almost no taste. Can I have some chilli, please?”</p><p>What is the soup like?</p>`,
          opts: [
            "bland",
            "spicy",
            "crunchy"
          ],
          correct: 0,
          pre: "e10s3l2",
          fbOk: "Well done!",
          fbBad: "Almost no taste: which word means that?",
          fbText: "Food with almost no taste is <b>bland</b>. With chilli, it will be <i>spicy</i>."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose all the correct answers.",
          body: `<p>Grandma Hanna’s page: When I was a girl, I …</p>`,
          opts: [
            "would be very shy.",
            "used to love my grandmother’s uzvar.",
            "would help my mother in the kitchen.",
            "would know every hen by name."
          ],
          correct: [1, 2],
          pre: "e10s3l3",
          hint: "Find the states and the actions. Which of them can go with would?",
          fbOk: "Yes!",
          fbBad: "Two answers are correct. Would is only for actions.",
          fbText: "<b>used to love</b> (a state with <i>used to</i>) and <b>would help</b> (an action). <i>Be shy</i> and <i>know</i> are states: only <i>used to be</i>, <i>used to know</i>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Grandma Hanna won a swimming race once, in 1976. Which sentence is correct?</p>`,
          opts: [
            "She would win a swimming race in 1976.",
            "She used to win a swimming race in 1976.",
            "She won a swimming race in 1976."
          ],
          correct: 2,
          pre: "e10s3l3",
          fbOk: "Right.",
          fbBad: "One event: which tense?",
          fbText: "One event in the past → the Past Simple: <b>She won</b> a swimming race in 1976."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Write the missing word.",
          body: `<p>Oksana’s page: Fish and eggs help your body grow and repair itself.</p>`,
          before: "Fish and eggs are high in",
          after: ".",
          answer: "protein",
          pre: "e10s3l4",
          fbOk: "Well done!",
          fbBad: "What helps your body grow?",
          fbText: "Fish and eggs are high in <b>protein</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 7",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Bohdan:</b> I play games on my phone until midnight, and I’m always tired.<br><b>Andrii:</b> …</p><p>Andrii gives advice. What does he say?</p>`,
          opts: [
            "Have you tried switch off your phone at ten?",
            "Have you tried switching off your phone at ten?",
            "Why you don’t switch off your phone at ten?"
          ],
          correct: 1,
          pre: "e10s3l5",
          fbOk: "Exactly.",
          fbBad: "Have you tried + … ? And check the word order in Why don’t you…?",
          fbText: "<b>Have you tried switching off …?</b> After <i>tried</i>, use -ing. The question is <i>Why don’t you switch off…?</i>"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 8",
          title: "Fill in the gaps.",
          text: "Andrii is cutting down {*on|of} crisps. Zoriana is getting {*into|to} the habit of eating breakfast. Kyrylo has finally {*broken|made} his habit of biting his nails.",
          pre: "e10s3l5",
          fbOk: "Well done!",
          fbBad: "cut down …, get … the habit, … a habit = stop it.",
          fbText: "Cut down <b>on</b>, get <b>into</b> the habit, <b>broken</b> a habit (break – broke – broken)."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 9",
          title: "Fill in the gaps.",
          text: "Orysia {*used to|is used to} live in Vinnytsia. Now she {*is getting used to|used to} the rain in England. She isn’t used to {*having|have} dinner so early.",
          pre: "e10s3l6",
          hint: "In each sentence, is it something that is becoming normal, a past state or something that is normal now?",
          fbOk: "Yes!",
          fbBad: "A past state → used to + verb. Becoming normal → getting used to. be used to + -ing.",
          fbText: "She <b>used to live</b> in Vinnytsia (the past). She <b>is getting used to</b> the rain. She isn’t used to <b>having</b> dinner so early."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about food, tastes and habits, give advice and say what you’re used to.",
        learned: [
          "Describe national dishes and tastes.",
          "Use used to, would and the Past Simple for the past.",
          "Talk about healthy food, habits and advice.",
          "Use be used to and get used to + -ing."
        ]
      }
    }
  ]
});
