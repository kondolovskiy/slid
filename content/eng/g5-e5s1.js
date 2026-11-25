/* Слід · Англійська мова, 5 клас — «Me, my family and friends» (e5s1)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Я, моя родина, мої друзі» — родинні зв'язки, професії батьків, друзі та їхні уподобання (с. 20, розд. 4.2.1);
   функції — описувати, розповідати, характеризувати; граматика A2 — Pronouns: possessive, Determiners: demonstratives,
   Interrogatives (Yes/No, Wh-) (с. 21–22, розд. 4.4); to be, have got, possessive ’s, a/an with jobs — повторення 4 кл. (content/eng/plan.js):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на e4s1 (reports/verify/plan-eng-g5.md §6). Герої й місця — як у 4 кл. (Oksana — село Zelena Dolyna біля Полтави,
   Andrii — Kyiv, Mariia — Kharkiv, Taras — Lviv, Emma — town in England; Halyna — подруга Оксани з e4s8).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g5-e5s1.md, «Нотатки агента»).
   Статус: verified (verifier-e5s1, reports/verify/e5s1.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s1",
  grade: 5,
  weeks: [1, 4],
  title: "Me, my family and friends",
  why: "To talk about your family and your friends. And to say what your parents do.",
  requires: ["e4s1l1", "e4s1l2", "e4s1l3"],
  meta: { author: "writer-e5s1", created: "2026-11-19", factcheck: "verifier-e5s1 (reports/verify/e5s1.md)", teacher: null },
  badges: [
    { id: "e5s1boss", name: "Family album", icon: "trophy", desc: "Finish the final lesson “Me, my family and friends”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s1l1",
      title: "My family tree: who is who?",
      short: "Family tree",
      icon: "users",
      status: "verified",
      why: "Families can be big. Learn new words for your family tree.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who is in Oksana’s family tree?",
          body: `<p class="lead">Here is Oksana’s family tree for her English class.</p><p><b>Grandparents:</b> Mykola and Hanna<br><b>Their children:</b> Petro and Nadiia<br><b>Petro’s wife:</b> Olena<br><b>Petro and Olena’s children:</b> Oksana and Dmytro</p><p>Grandparents, children, wife: who is who?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Petro is Hanna’s child. He is a boy.</p><p>Petro is Hanna’s …</p>`,
          opts: [
            "daughter",
            "son",
            "husband"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "A boy is his mum’s <b>son</b>. A girl is her mum’s <b>daughter</b>. The next screen has more family words."
        },
        {
          type: "info",
          title: "Family words",
          body: `<ul><li><b>parents</b> → mum and dad</li><li><b>grandparents</b> → grandma and grandad</li><li><b>children</b> → a <b>son</b> (a boy), a <b>daughter</b> (a girl)</li><li><b>husband</b> and <b>wife</b> → Petro and Olena</li><li>Hanna’s <b>grandson</b> → Dmytro<br>Hanna’s <b>granddaughter</b> → Oksana</li></ul><p>The <u>underlined</u> part is strong: <u>par</u>ents, <u>daugh</u>ter, <u>hus</u>band.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Olena is Oksana’s mum.</p><p>Oksana is Olena’s …</p>`,
          opts: [
            "son",
            "wife",
            "daughter"
          ],
          correct: 2,
          hint: "Is Oksana a boy or a girl?",
          fbOk: "Right.",
          fbBad: "Look at the list: children.",
          fbText: "Oksana is a girl. She is Olena’s <b>daughter</b>. Dmytro is a boy. He is Olena’s <b>son</b>."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Mum and Dad are my", "Grandma and Grandad are my", "Dad’s sister is my", "Mum is Dad’s", "Dad is Mum’s"],
          right: ["parents", "grandparents", "aunt", "wife", "husband"],
          hint: "A husband is a man. A wife is a woman.",
          fbOk: "Well done!",
          fbBad: "Look at the family words again.",
          fbText: "Mum and Dad are your <b>parents</b>. Grandma and Grandad are your <b>grandparents</b>. Dad’s sister is your <b>aunt</b>. Mum is Dad’s <b>wife</b>. Dad is Mum’s <b>husband</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Mykola and Hanna → their children: Petro and Nadiia.<br>Petro and Olena → their children: Oksana and Dmytro.</p>`,
          text: "Hanna is Oksana’s {*grandma|aunt|mum}. Petro is Hanna’s {*son|daughter|husband}. Nadiia is Mykola’s {*daughter|wife|son}. Oksana and Dmytro are Petro’s {*children|parents|grandparents}.",
          hint: "Find each name in the tree.",
          fbOk: "Exactly.",
          fbBad: "Who are Hanna’s children?",
          fbText: "Hanna is Dad’s mum. She is Oksana’s <b>grandma</b>. Petro is her <b>son</b>. Nadiia is a girl: Mykola’s <b>daughter</b>. Oksana and Dmytro are Petro’s <b>children</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Hanna is Dmytro’s grandma.</p>`,
          before: "Dmytro is Hanna’s",
          after: ".",
          answer: ["grandson", "grandchild"],
          hint: "Dmytro is a boy. Look at the list.",
          fbOk: "Yes!",
          fbBad: "A boy and his grandma: he is her …",
          fbText: "Dmytro is a boy. He is Hanna’s <b>grandson</b>. Oksana is her granddaughter."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about his mum’s family.</p>`,
          text: "My mum’s mum and dad live in Chernihiv. They are my {*grandparents|parents|cousins}. Grandma Nina is a teacher. Her {*husband|wife|son}, Grandad Vasyl, is a driver. My mum is their {*daughter|son|wife}. I am their {*grandson|granddaughter|son}.",
          hint: "Andrii is a boy. His mum is a woman.",
          fbOk: "Well done!",
          fbBad: "Who is Andrii for his grandma?",
          fbText: "Mum’s mum and dad are your <b>grandparents</b>. Grandad Vasyl is Grandma Nina’s <b>husband</b>. Mum is their <b>daughter</b>. Andrii is a boy. He is their <b>grandson</b>."
        }
      ],
      outro: {
        text: "Family words help you talk about your family tree: parents, children, husband and wife.",
        learned: [
          "Name people in a family tree: parents, grandparents, children.",
          "Say who is who: Petro is Hanna’s son.",
          "Use son, daughter, husband, wife, grandson and granddaughter."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s1l2",
      title: "Have you got any brothers or sisters?",
      short: "Have got",
      icon: "voice",
      status: "verified",
      why: "New friends ask about your family. Ask and answer with have got.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Who has got a big family?",
          body: `<p class="lead">It’s September at the English club. Ms Kravets says: “Tell us about your family!”</p><p><b>Taras:</b> I’ve got two brothers and a little sister, Zlata.<br><b>Mariia:</b> I haven’t got any brothers or sisters. I’m an only child.<br><b>Andrii:</b> I’ve got a sister, Sofiia, and five cousins!</p><p>What is an only child?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Mariia: “I haven’t got any brothers or sisters. I’m an only child.”</p><p>What is an only child?</p>`,
          opts: [
            "a child with one sister",
            "a child with no brothers or sisters",
            "a child with lots of cousins"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read Mariia’s words again.",
          fbText: "Mariia hasn’t got any brothers or sisters. So she is <b>an only child</b>."
        },
        {
          type: "info",
          title: "Have you got any…?",
          body: `<p><b>Have</b> you <b>got any</b> brothers? – Yes, I <b>have</b>. I’ve got two.<br><b>Has</b> she <b>got any</b> sisters? – No, she <b>hasn’t</b>.</p><ul><li><b>a</b> + one: <b>a</b> sister</li><li><b>any</b> + two or more: <b>any</b> sisters</li><li><b>any</b> → in questions and with <b>not</b></li></ul><p><b>How many</b> cousins <b>have</b> you <b>got</b>? – Five.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Have|Has} you got any cousins? – Yes, I {*have|has}. {*Has|Have} Mariia got {*a|any} dog? – No, she {*hasn’t|haven’t}. She hasn’t got {*any|a} pets.",
          hint: "One or more? Then choose a or any.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: one → a, more → any.",
          fbText: "<b>Have</b> you got…? – Yes, I <b>have</b>. Mariia is <b>she</b>: <b>Has</b> she got <b>a</b> dog? – No, she <b>hasn’t</b>. Pets are more than one: <b>any</b> pets."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Taras: “I’ve got two brothers and a little sister, Zlata.”</p><p>Emma asks: “Has Taras got any brothers?”</p>`,
          opts: [
            "Yes, he have.",
            "Yes, he is.",
            "Yes, he has."
          ],
          correct: 2,
          hint: "Taras is he. Has he got…?",
          fbOk: "Right.",
          fbBad: "Look at the short answers again.",
          fbText: "<b>Has</b> he got…? – Yes, he <b>has</b>. <i>Yes, he is</i> answers <i>Is he…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras asks Emma about her cousins. Emma answers: “Yes, I have. I’ve got one cousin, Jack.”</p>`,
          tiles: ["Have", "you", "got", "any", "cousins"],
          answer: "Have you got any cousins?",
          extra: ["has"],
          keepCase: true,
          hint: "A question starts with Have.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Have you got any…?",
          fbText: "<b>Have you got any cousins?</b> With <b>you</b>, it’s <b>have</b>, not <i>has</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia hasn’t got any brothers or sisters.</p>`,
          before: "She’s an only",
          after: ".",
          answer: "child",
          fbOk: "Good eye!",
          fbBad: "No brothers or sisters: an only …",
          fbText: "Mariia has got no brothers or sisters. She is an only <b>child</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Zlata’s message is wrong.</p>`,
          text: "I’m Zlata. Taras is my brother. He [have] got a big bike. We’ve got a dog and a cat.",
          hint: "Check have and has. Who is it?",
          fbOk: "Good eye!",
          fbBad: "Check each have and has.",
          fbText: "Taras is <b>he</b>. He <b>has</b> got a bike. <b>We’ve got</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to the club.</p>`,
          text: "I’ve got a brother, Dmytro. I haven’t got {*any|a} sisters. My dad {*has|have} got a sister, Aunt Nadiia. She {*has|have} got a son, Denys. He is my cousin. How many cousins {*have|has} you got?",
          hint: "Sisters: one or more? Dad and Aunt Nadiia: he and she.",
          fbOk: "Well done!",
          fbBad: "Check: he, she → has; you → have.",
          fbText: "I haven’t got <b>any</b> sisters. My dad <b>has</b> got a sister. She <b>has</b> got a son. How many cousins <b>have</b> you got?"
        }
      ],
      outro: {
        text: "Ask “Have you got any…?” and “How many… have you got?” An only child hasn’t got any brothers or sisters.",
        learned: [
          "Ask about brothers, sisters and cousins.",
          "Use a and any with have got.",
          "Answer: Yes, I have. / No, she hasn’t."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s1l3",
      title: "Whose is it? My, your, his, her",
      short: "My, his, her",
      icon: "check",
      status: "verified",
      why: "Is it your bag or his bag? Learn to say whose things they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Whose phone is it?",
          body: `<p class="lead">It’s Sunday morning at Oksana’s house. There are lots of things on the table.</p><p><b>Mum:</b> Whose is this red phone?<br><b>Dmytro:</b> It’s Dad’s. It’s his phone.<br><b>Mum:</b> And whose is the blue bag?<br><b>Oksana:</b> It’s my bag, Mum!</p><p>Look at <b>his</b> and <b>my</b>. When do we say them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Grandma has got a green cup. Which sentence is correct?</p>`,
          opts: [
            "It’s his cup.",
            "It’s she cup.",
            "It’s her cup."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Grandma is <b>she</b>, so it’s <b>her</b> cup. Dad is <b>he</b>, so it’s <b>his</b> phone."
        },
        {
          type: "info",
          title: "My, your, his, her",
          body: `<ul><li>I → <b>my</b>: It’s <b>my</b> bag.</li><li>you → <b>your</b>: Is it <b>your</b> bag?</li><li>he → <b>his</b>: Dad → <b>his</b> phone</li><li>she → <b>her</b>: Grandma → <b>her</b> cup</li></ul><p><b>Whose</b> is it? – It’s Dad’s. = It’s <b>his</b> phone.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Dmytro has got a ball. It’s {*his|her|my} ball. Oksana has got a blue bag. It’s {*her|his|your} bag. Mum: Oksana, is this {*your|his|her} pen? Oksana: Yes, it’s {*my|your|her} pen.",
          hint: "Who is it: he, she, you or I?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: he → his, she → her.",
          fbText: "Dmytro is <b>he</b>: <b>his</b> ball. Oksana is <b>she</b>: <b>her</b> bag. Mum talks to Oksana: <b>your</b> pen. Oksana talks about herself: <b>my</b> pen."
        },
        {
          type: "info",
          title: "Its, our, their",
          body: `<ul><li>it → <b>its</b>: The cat is in <b>its</b> bed.</li><li>we → <b>our</b>: <b>our</b> house</li><li>they → <b>their</b>: Mykola and Hanna → <b>their</b> garden</li></ul><p><b>its</b> = the cat’s. <b>it’s</b> = it is.<br>Not: <s>The cat is in it’s bed.</s></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["I’ve got a bike. It’s", "Mum has got a bike. It’s", "Dad has got a bike. It’s", "We’ve got a bike. It’s", "My cousins have got a bike. It’s"],
          right: ["my bike.", "her bike.", "his bike.", "our bike.", "their bike."],
          hint: "I → my, we → our, they → their. Mum is she.",
          fbOk: "Well done!",
          fbBad: "Look at the lists again.",
          fbText: "I → <b>my</b> bike. Mum → <b>her</b> bike. Dad → <b>his</b> bike. We → <b>our</b> bike. My cousins → <b>their</b> bike."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mum finds a bag in the kitchen. She asks the children.</p>`,
          tiles: ["Whose", "bag", "is", "it"],
          answer: "Whose bag is it?",
          extra: ["Who"],
          keepCase: true,
          hint: "Start with Whose.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: Whose is it?",
          fbText: "<b>Whose bag is it?</b> – It’s Oksana’s. We ask about things with <b>whose</b>, not <i>who</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Dmytro’s message is wrong.</p>`,
          text: "This is Grandad Mykola. [Her] car is red. His dogs are black and white. Their names are Bim and Sirko.",
          hint: "Grandad is he. Check each word: his, her, their.",
          fbOk: "Good eye!",
          fbBad: "Grandad: he or she?",
          fbText: "Grandad is <b>he</b>, so it’s <b>his</b> car. <b>His</b> dogs and <b>their</b> names are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana and Dmytro have got a cat. Whose cat is it?</p>`,
          before: "It’s",
          after: "cat. Its name is Murka.",
          answer: "their",
          hint: "Oksana and Dmytro: they → …",
          fbOk: "Well done!",
          fbBad: "Oksana and Dmytro are they.",
          fbText: "Oksana and Dmytro are <b>they</b>. It’s <b>their</b> cat. The cat’s name: <b>its</b> name."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her family.</p>`,
          text: "Hi! I’m Emma. {*My|Me} mum’s name is Sarah. {*Her|His} car is blue. Tom and I have got a cat. {*Its|It’s} name is Snowy. {*Our|Their} cat sleeps on my bed. Is {*your|you} cat white too?",
          hint: "Tom and I = we. The cat = it.",
          fbOk: "Good eye!",
          fbBad: "Check the lists: we → our, it → its.",
          fbText: "<b>My</b> mum. Mum is she: <b>her</b> car. The cat is it: <b>its</b> name (no ’). Tom and I are we: <b>our</b> cat. Emma asks you: <b>your</b> cat."
        }
      ],
      outro: {
        text: "Ask: “Whose is it?” Answer with my, your, his, her, its, our or their.",
        learned: [
          "Ask “Whose is it?” and answer.",
          "Use my, your, his, her, its, our and their.",
          "Write its and it’s correctly."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s1l4",
      title: "This, that, these, those: a family photo",
      short: "This, that",
      icon: "eye",
      status: "verified",
      why: "Show your family photos to a friend. Say who is near and who is not.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "This or that?",
          body: `<p class="lead">Oksana’s friend Halyna is at Oksana’s house. Oksana has got a photo album in her hands.</p><p><b>Oksana:</b> This is my grandma. She’s young here! And these are my cousins.<br><b>Halyna</b> <i>(at the window)</i>: Who’s that man in the garden?<br><b>Oksana:</b> That’s Grandad. And those are his dogs.</p><p>This or that? These or those? What is different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana says “this” about the photo, but “that” about Grandad. Why?</p>`,
          opts: [
            "The photo is small. Grandad is big.",
            "The photo is near her. Grandad isn’t.",
            "Grandad is a man."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The photo is in Oksana’s hands: <b>this</b>. Grandad is in the garden. He isn’t near: <b>that</b>."
        },
        {
          type: "info",
          title: "This, that, these, those",
          body: `<ul><li>near me, one → <b>this</b>: <b>This is</b> my grandma.</li><li>near me, two or more → <b>these</b>: <b>These are</b> my cousins.</li><li>not near, one → <b>that</b>: <b>That’s</b> Grandad.</li><li>not near, two or more → <b>those</b>: <b>Those are</b> his dogs.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana shows Halyna her photo album. Then they look out of the window.</p>`,
          text: "{*This|These} is my grandma. {*These|This} are my cousins. {*Those|That} are Grandad’s dogs. {*That|Those} is his car.",
          hint: "One or two? Look at is and are.",
          fbOk: "Exactly.",
          fbBad: "Is it one or more than one?",
          fbText: "One grandma: <b>this is</b>. Two cousins: <b>these are</b>. Two dogs, not near: <b>those are</b>. One car, not near: <b>that is</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana and Halyna are at the window. Two horses are in the field. They are far away. What does Halyna say?</p>`,
          opts: [
            "Look at these horses!",
            "Look at that horses!",
            "Look at those horses!"
          ],
          correct: 2,
          hint: "Near or far? One or two?",
          fbOk: "Right.",
          fbBad: "The horses are far away. And there are two.",
          fbText: "Two horses, far away: <b>those</b> horses. <i>These</i> is for things near you. <i>That</i> is for one thing."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Halyna sees some people in the street. They aren’t near the window. She asks Oksana.</p>`,
          tiles: ["Who", "are", "those", "people"],
          answer: "Who are those people?",
          extra: ["is"],
          keepCase: true,
          hint: "Start with Who. People: is or are?",
          fbOk: "Well done!",
          fbBad: "People are more than one: are.",
          fbText: "<b>Who are those people?</b> People: more than one → <b>are</b>. Not near → <b>those</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana has got two photos in her hands.</p>`,
          before: "Look!",
          after: "are my grandparents.",
          answer: "these",
          hint: "Near or far? One or two?",
          fbOk: "Yes!",
          fbBad: "The photos are near Oksana. And there are two.",
          fbText: "The photos are in her hands: near. There are two: <b>These</b> are my grandparents."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her photo album.</p>`,
          text: "Look at {*this|these} old photo. {*These|This} are my grandparents, Mykola and Hanna. They are young here! And who is {*that|those} boy in the tree? It’s my dad, Petro!",
          hint: "Photo, boy: one. Grandparents: two.",
          fbOk: "Well done!",
          fbBad: "One or two? Then is or are.",
          fbText: "One photo: <b>this</b> photo. Two grandparents: <b>these are</b>. One boy: <b>that</b> boy."
        }
      ],
      outro: {
        text: "This and these are near you. That and those are not near you.",
        learned: [
          "Use this and these for people and things near you.",
          "Use that and those for people and things not near you.",
          "Talk about a family photo."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s1l5",
      title: "What do your parents do? Jobs",
      short: "Jobs",
      icon: "user",
      status: "verified",
      why: "People often ask: “What does your mum do?” Learn to answer.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What does Oksana’s mum do?",
          body: `<p class="lead">At the English club, Ms Kravets asks: “What do your parents do?”</p><p><b>Oksana:</b> My mum is a nurse. She works in a hospital in Poltava. My dad is a mechanic. He repairs cars.<br><b>Mariia:</b> My mum is a dentist. My dad is a police officer.</p><p>What do nurses and mechanics do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “My dad is a mechanic. He repairs cars.”</p><p>What does a mechanic do?</p>`,
          opts: [
            "repairs cars",
            "works in a shop",
            "takes photos"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Oksana’s words again.",
          fbText: "Oksana says: “He <b>repairs cars</b>.” That is a mechanic’s job."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma wants to know the job of Oksana’s dad. What does she ask?</p>`,
          opts: [
            "What is your dad doing?",
            "What does your dad do?",
            "Where is your dad?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>What does your dad do?</b> asks about a job. <i>What is your dad doing?</i> asks about now."
        },
        {
          type: "info",
          title: "Jobs",
          body: `<ul><li>a <b>nurse</b> – looks after sick people</li><li>a <b><u>den</u>tist</b> – looks after your teeth</li><li>a <b>me<u>chan</u>ic</b> – repairs cars</li><li>a <b>po<u>lice</u> officer</b> – keeps people safe</li><li>a <b><u>shop</u> assistant</b> – works in a shop</li><li>a <b>pho<u>tog</u>rapher</b> – takes photos</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Mr Rudenko works in a shop. He sells clothes. What is his job?</p>`,
          opts: [
            "He’s a mechanic.",
            "He’s a shop assistant.",
            "He’s a dentist."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Where does Mr Rudenko work?",
          fbText: "Mr Rudenko works in a shop. He’s a <b>shop assistant</b>. A mechanic repairs cars. A dentist looks after teeth."
        },
        {
          type: "info",
          title: "What does she do?",
          body: `<p><b>What does</b> your mum <b>do</b>? – She’s <b>a</b> nurse.<br>= What is her job?</p><ul><li>he, she → <b>-s</b>: She <b>works</b> in a hospital. He <b>repairs</b> cars.</li><li>a job → <b>a</b> or <b>an</b>: <b>a</b> nurse, <b>an</b> engineer</li></ul><p>Not: <s>She’s nurse.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "What {*does|do} your dad do? – He’s {*a|an} mechanic. He {*repairs|repair} cars. What {*do|does} your parents do? – They’re {*nurses|nurse}.",
          hint: "Dad is he. Parents are they.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: he, she → -s.",
          fbText: "What <b>does</b> your dad do? – He’s <b>a</b> mechanic. He <b>repairs</b> cars. Parents are they: What <b>do</b> they do? – They’re <b>nurses</b>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["What does your mum do?", "Where does she work?", "Has she got a car?", "Is your dad a dentist?", "Does he like his job?"],
          right: ["She’s a nurse.", "In a hospital.", "Yes, she has.", "No, he isn’t.", "Yes, he does."],
          hint: "Look at the first word of each question.",
          fbOk: "Well done!",
          fbBad: "Has…? – she has. Is…? – he isn’t. Does…? – he does.",
          fbText: "What does she do? – <b>She’s a nurse.</b> Where? – <b>In a hospital.</b> Has she got…? – <b>Yes, she has.</b> Is he…? – <b>No, he isn’t.</b> Does he…? – <b>Yes, he does.</b>"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["me|+chan|ic", "+den|tist", "po|+lice", "pho|+tog|ra|pher"],
          fbOk: "Yes!",
          fbBad: "Look at the job list again.",
          fbText: "me<u>chan</u>ic, po<u>lice</u>, pho<u>tog</u>rapher: the second part is strong. <u>den</u>tist: the first part."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Ms Tkachuk looks after children’s teeth.</p>`,
          before: "She’s a",
          after: ".",
          answer: "dentist",
          hint: "Look at the job list: teeth.",
          fbOk: "Well done!",
          fbBad: "Who looks after your teeth?",
          fbText: "A <b>dentist</b> looks after your teeth."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Mariia writes to Emma.</p><p><i>My mum is a dentist. She works in Kharkiv. My dad is a police officer. He keeps people safe. My uncle Oleh is a photographer. He takes photos of animals. What do your parents do?</i></p><p>Who takes photos?</p>`,
          opts: [
            "Mariia’s dad",
            "Mariia’s mum",
            "Mariia’s uncle"
          ],
          correct: 2,
          hint: "Find the photographer in the text.",
          fbOk: "Good eye!",
          fbBad: "Who is a photographer?",
          fbText: "Uncle Oleh is a <b>photographer</b>. He takes photos of animals. Mariia’s mum is a dentist. Her dad is a police officer."
        }
      ],
      outro: {
        text: "Ask: “What does your mum do?” Answer with a or an and a job: She’s a nurse.",
        learned: [
          "Name jobs: a nurse, a dentist, a mechanic.",
          "Ask and answer: What does your dad do?",
          "Say what people do at work: He repairs cars."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s1l6",
      title: "My best friend: what does she like?",
      short: "Best friend",
      icon: "star",
      status: "verified",
      why: "Tell people about your best friend. Say what your friend likes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Who is Halyna?",
          body: `<p class="lead">Oksana writes a post for the English club.</p><p><i>My best friend is Halyna. She lives in my village. She’s funny and kind. She likes drawing and riding her bike. She doesn’t like football. What about your best friend?</i></p><p>What does Halyna like?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “Halyna likes drawing and riding her bike. She doesn’t like football.”</p><p>What does Halyna like?</p>`,
          opts: [
            "football",
            "drawing and riding her bike",
            "football and drawing"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read Oksana’s post again.",
          fbText: "Halyna <b>likes</b> drawing and riding her bike. She <b>doesn’t like</b> football."
        },
        {
          type: "info",
          title: "She likes, she doesn’t like",
          body: `<p>I <b>like</b> drawing. → She <b>likes</b> drawing.<br>I <b>don’t like</b> football. → She <b>doesn’t like</b> football.</p><p><b>Does</b> she <b>like</b> music? – Yes, she <b>does</b>. / No, she <b>doesn’t</b>.<br><b>What does</b> she <b>like</b>? – She likes reading.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Halyna {*likes|like} drawing. She {*doesn’t|don’t} like football. {*Does|Do} she like music? – Yes, she {*does|do}.",
          hint: "Halyna is she. Look at the rule.",
          fbOk: "Exactly.",
          fbBad: "With she: likes, doesn’t, does.",
          fbText: "Halyna is <b>she</b>: she <b>likes</b>, she <b>doesn’t</b> like. <b>Does</b> she like…? – Yes, she <b>does</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks Oksana about Halyna.</p>`,
          tiles: ["What", "does", "your", "best friend", "like"],
          answer: "What does your best friend like?",
          extra: ["likes"],
          keepCase: true,
          hint: "Start with What. After does: like or likes?",
          fbOk: "Well done!",
          fbBad: "After does, we say like, not likes.",
          fbText: "<b>What does your best friend like?</b> After <b>does</b>: <b>like</b>, without -s."
        },
        {
          type: "info",
          title: "What is she like?",
          body: `<p><b>What does</b> she <b>like</b>? → her hobbies<br>– She <b>likes</b> drawing.</p><p><b>What is</b> she <b>like</b>? → the person<br>– She’s kind and funny.</p><ul><li><b><u>friend</u>ly</b> – nice to new people</li><li><b><u>qui</u>et</b> – doesn’t talk a lot</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma asks Oksana: “What is Halyna like?”</p>`,
          opts: [
            "She likes drawing.",
            "Yes, she does.",
            "She’s kind and funny."
          ],
          correct: 2,
          hint: "Hobbies or the person: what does Emma ask?",
          fbOk: "Right.",
          fbBad: "What is she like? → the person.",
          fbText: "<b>What is she like?</b> asks about the person: <b>She’s kind and funny.</b> <i>She likes drawing</i> answers <i>What does she like?</i>"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii’s best friend is Yaroslav. Yaroslav likes chess.</p>`,
          before: "Does Yaroslav like chess? – Yes, he",
          after: ".",
          answer: "does",
          hint: "Does he…? – Yes, he …",
          fbOk: "Good eye!",
          fbBad: "Look at the short answers in the rule.",
          fbText: "<b>Does</b> he like…? – Yes, he <b>does</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final · part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>My best friend is Yaroslav. We are in the same class at school in Kyiv. Yaroslav is very friendly and funny. He has got two brothers and a little sister. His mum is a photographer, and his dad is a bus driver. – Andrii</i></p><p>Has Yaroslav got any sisters?</p>`,
          opts: [
            "Yes, he has. He’s got one sister.",
            "No, he hasn’t.",
            "Yes, he has. He’s got two sisters."
          ],
          correct: 0,
          hint: "Find “sister” in the text.",
          fbOk: "Yes!",
          fbBad: "Read about his brothers and sister again.",
          fbText: "He has got <b>two brothers and a little sister</b>. That’s one sister."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final · part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Yaroslav likes reading and playing chess. He doesn’t like football, but he likes basketball. At the weekend we go cycling in the park. At school Yaroslav is quiet. In the park he isn’t quiet at all! What is your best friend like?</i></p><p>What does Yaroslav like?</p>`,
          opts: [
            "reading",
            "football",
            "playing chess",
            "basketball"
          ],
          correct: [0, 2, 3],
          hint: "Find likes and doesn’t like in the text.",
          fbOk: "Well done!",
          fbBad: "Does Yaroslav like football?",
          fbText: "Yaroslav <b>likes</b> reading, playing chess and basketball. He <b>doesn’t like</b> football."
        }
      ],
      outro: {
        text: "Say what your friend likes and doesn’t like. Ask: “What does she like?” and “What is she like?”",
        learned: [
          "Say what a friend likes and doesn’t like.",
          "Ask: Does he like…? – Yes, he does.",
          "Ask and answer: What is she like?",
          "Read a short text about a best friend."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s1l7",
      title: "Our family album",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check Taras’s album page?",
          body: `<p class="lead">Taras from Lviv sends the English club a page from his family album.</p><p>Ms Kravets needs your help. Read about Taras’s family and friends. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Taras: “Uncle Roman is my dad’s brother. His wife is Aunt Liudmyla. Their daughter, Marta, is my cousin.”</p>`,
          text: "Roman is Liudmyla’s {*husband|wife|son}. Marta is Roman’s {*daughter|son|wife}. Roman and Liudmyla are Marta’s {*parents|grandparents|children}.",
          pre: "e5s1l1",
          hint: "Marta is a girl. Roman and Liudmyla are her mum and dad.",
          fbOk: "Yes!",
          fbBad: "Look at Taras’s words again.",
          fbText: "Liudmyla is Roman’s wife. Roman is her <b>husband</b>. Marta is a girl: Roman’s <b>daughter</b>. Her mum and dad are her <b>parents</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Write the missing word.",
          body: `<p>Taras: “I’ve got two brothers and a little sister, Zlata. She hasn’t got a bike.”</p>`,
          before: "Has Zlata got a bike? – No, she",
          after: ".",
          answer: "hasn’t",
          contractions: true,
          pre: "e5s1l2",
          fbOk: "Well done!",
          fbBad: "Has she got…? – No, she …",
          fbText: "<b>Has</b> she got a bike? – No, she <b>hasn’t</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his mum.</p>`,
          text: "My mum is an artist. {*Her|His} pictures are about Lviv. Zlata and I like {*our|their} mum’s pictures. Our cat sleeps in {*its|it’s} box near the pictures.",
          pre: "e5s1l3",
          hint: "Mum is she. Zlata and I = we. The cat = it.",
          fbOk: "Exactly.",
          fbBad: "Check: she → her, we → our, it → its.",
          fbText: "Mum is she: <b>her</b> pictures. Zlata and I are we: <b>our</b> mum. The cat is it: <b>its</b> box, without ’."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Taras has got a photo in his hands. His grandma and grandad are in it. What does he say?</p>`,
          opts: [
            "This are my grandparents.",
            "These are my grandparents.",
            "Those is my grandparents."
          ],
          correct: 1,
          pre: "e5s1l4",
          fbOk: "Right.",
          fbBad: "Near or far? One or two?",
          fbText: "The photo is near Taras. There are two people: <b>These are</b> my grandparents."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Aunt Liudmyla is a dentist. Emma wants to know about her job. She asks Taras.</p>`,
          tiles: ["What", "does", "your", "aunt", "do"],
          answer: "What does your aunt do?",
          extra: ["is"],
          keepCase: true,
          pre: "e5s1l5",
          hint: "Start with What. A job: What does… do?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: What does… do?",
          fbText: "<b>What does your aunt do?</b> – She’s a dentist."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his best friend, Ostap.</p>`,
          text: "Ostap {*likes|like} drawing. {*Does|Do} he like football? – No, he {*doesn’t|don’t}. What is Ostap {*like|likes}? – He’s friendly and funny.",
          pre: "e5s1l6",
          hint: "Ostap is he. After does: like.",
          fbOk: "Well done!",
          fbBad: "With he: likes, does, doesn’t.",
          fbText: "Ostap <b>likes</b> drawing. <b>Does</b> he like…? – No, he <b>doesn’t</b>. <b>What is he like?</b> asks about the person."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about your family, your parents’ jobs and your best friend.",
        learned: [
          "Say who is who in a family tree.",
          "Ask and answer with have got, this, that and whose.",
          "Talk about jobs: What does your mum do?",
          "Say what a friend likes and is like."
        ]
      }
    }
  ]
});
