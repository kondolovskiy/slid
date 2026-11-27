/* Слід · Англійська мова, 8 клас — «Penfriends and letters» (e8s1)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   8 кл., тема «Я і мої друзі» — друзі по листуванню; кореспонденція (с. 32, розд. 5.2.2); листування — функції
   «онлайн-взаємодія», особисті листи (с. 28, 30); граматика B1 (с. 34–35): Present Perfect Continuous (affirmative,
   questions, How long…?), Present Perfect Continuous vs Present Perfect (розширення e7s1), question tags з Present
   Simple (tag questions), each other (reciprocal pronouns).
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md; рядки plan — content/eng/plan.js (e8s1).
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на чотири роки старші, ніж у 4 кл.: Oksana (14) — Zelena Dolyna,
   брат Dmytro (10), подруга Halyna, піаніно й карате; Emma (14, Англія) — плаває, брат Tom (12) ходить у swimming club, кішка Snowy;
   Oksana й Emma знайомі з 10 років (онлайн-чат англійського клубу, e4s1); Andrii (14, Kyiv) — шахи, science fiction,
   сестра Sofiia, бабуся й дідусь у Chernihiv; Liam (Dublin) — друг Andrii за листуванням з 5 кл. (e5s10);
   Mariia (14, Kharkiv) — малює, мама dentist. Нові: Zofia (14, Poland) — подруга Mariia за листуванням; Noah (Wales) і Leo
   (England) — лише профілі; Mr Price — учитель Emma.
   Листування вигадане: без адрес, телефонів і соцмереж; правило безпеки — не давати незнайомим адресу (МП-ІМ с. 30).
   Форми й рівні слів — CD / OALD (URL — tasks/…/write-eng-g8-e8s1.md, «Нотатки агента»).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e8s1). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e8s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s1",
  grade: 8,
  weeks: [1, 4],
  title: "Penfriends and letters",
  why: "To write to a penfriend and answer letters and emails. And to ask a friend: “What have you been doing?”",
  requires: ["e6s7l4", "e5s2l3", "e5s8l6", "e4s8l6", "e7s1l2", "e7s1l3", "e7s1l4", "e7s1l5"],
  meta: { author: "writer-e8s1", created: "2026-11-25", factcheck: "verifier-e8s1 (reports/verify/write-eng-g8-e8s1.md)", teacher: null },
  badges: [
    { id: "e8s1boss", name: "Penfriend", icon: "trophy", desc: "Finish the final lesson “Our penfriend club”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s1l1",
      title: "Looking for a penfriend: a profile",
      short: "Profiles",
      icon: "users",
      status: "verified",
      why: "A penfriend helps you practise English. Learn to read and write a short profile.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who can be Mariia’s penfriend?",
          body: `<p class="lead">Mariia’s school in Kharkiv has a penfriend page. Pupils from different countries write short profiles there.</p><p><i>Hi! I’m Mariia. I’m 14, and I live in Ukraine. I love drawing, and I’m into comics. I’m looking for a penfriend. I’d like to write about art and films.</i></p><p>What would Mariia like to write about?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "A penfriend and a profile",
          body: `<p>A <b>penfriend</b> lives in another town or country. You write letters or emails to them, but you usually haven’t met.</p><ul><li>a <b><u>pro</u>file</b> – a short text about you: name, age, country, hobbies</li><li>I’m <b>into</b> comics. = I like comics a lot.</li><li>I’m <b>interested in</b> music.</li><li>I’m <b>looking for</b> a penfriend.</li><li>I’d <b>like to</b> write about films.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i><b>Zofia, 14, Poland:</b> I draw comics every week, and I’m into art. I’d like to write about films and books.<br><b>Noah, 13, Wales:</b> I’m into football and computer games. I’d like to write about sport.<br><b>Leo, 15, England:</b> I’m interested in history. I play the guitar in a band.</i></p><p>Mariia is into comics and art. Who is the best penfriend for her?</p>`,
          opts: [
            "Noah",
            "Zofia",
            "Leo"
          ],
          correct: 1,
          hint: "Find the words comics and art.",
          fbOk: "Yes!",
          fbBad: "Who is into comics and art?",
          fbText: "<b>Zofia</b> draws comics and is into art, like Mariia. Noah is into football, and Leo is interested in history."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          body: `<p>Mariia asks Zofia about herself.</p>`,
          left: ["Where are you from?", "How old are you?", "What are you into?", "What would you like to write about?"],
          right: ["I’m from Poland.", "I’m fourteen.", "I’m into drawing.", "I’d like to write about films."],
          hint: "Which answer has a number? Which answer has into?",
          fbOk: "Good eye!",
          fbBad: "Look at the question words: where, how old, what.",
          fbText: "Where…? – I’m <b>from</b> Poland. How old…? – I’m <b>fourteen</b>. What are you <b>into</b>? – I’m <b>into</b> drawing. What would you <b>like to</b> write about? – I’d <b>like to</b> write about films."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes more questions to Zofia.</p>`,
          text: "{*Do|Does} you draw every day? What {*do|does} you like to draw? {*Does|Do} your sister draw too? What music {*does|do} your best friend like?",
          hint: "You → do. Your sister, your best friend → he or she → does.",
          fbOk: "Exactly.",
          fbBad: "Who is it: you or she?",
          fbText: "<b>Do</b> you…? What <b>do</b> you…? <b>Does</b> your sister (she)…? What music <b>does</b> your best friend (he or she) like?"
        },
        {
          type: "info",
          title: "Stay safe online",
          body: `<p>On a penfriend page, write only your first name, your age, your country and your hobbies.</p><ul><li>Don’t write your home address or phone number.</li><li>Don’t send photos to people you don’t know.</li><li>Don’t meet an online friend without your parents.</li><li>Is something strange? Tell an adult.</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "func",
          title: "Choose all the correct answers.",
          body: `<p>Mariia is writing her profile. What can she write on the penfriend page?</p>`,
          opts: [
            "her first name",
            "her home address",
            "her age",
            "her phone number",
            "her hobbies"
          ],
          correct: [0, 2, 4],
          hint: "Look at the rules: what is safe to write?",
          fbOk: "Well done!",
          fbBad: "Never write your address or phone number.",
          fbText: "Safe: your <b>first name</b>, your <b>age</b>, your country and your <b>hobbies</b>. Not safe: your home address and your phone number."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Noah: “I’m into computer games.” What does it mean?</p>`,
          opts: [
            "He likes computer games a lot.",
            "He doesn’t like computer games.",
            "He has never played computer games."
          ],
          correct: 0,
          hint: "Look at the words on the penfriend screen.",
          fbOk: "Right.",
          fbBad: "I’m into comics = I like comics a lot.",
          fbText: "<b>I’m into</b> computer games = I like them a lot. It’s informal, so it’s good for a profile or an email to a friend."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes a profile too.</p>`,
          tiles: ["I’m", "looking", "for", "a penfriend"],
          answer: "I’m looking for a penfriend.",
          extra: ["to"],
          hint: "I’m looking … a penfriend.",
          fbOk: "Well done!",
          fbBad: "Look at the profile words: I’m looking … a penfriend.",
          fbText: "<b>I’m looking for a penfriend.</b> <b>look for</b> = try to find."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii likes chess and science fiction a lot.</p>`,
          before: "I’m",
          after: "chess and science fiction.",
          answer: ["into", "interested in", "keen on", "mad about", "crazy about", "fond of"],
          hint: "I like it a lot = I’m … it.",
          fbOk: "Exactly.",
          fbBad: "Look at the profile words: I’m … comics.",
          fbText: "I’m <b>into</b> chess and science fiction. You can also say: I’m <b>interested in</b> chess."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii’s profile for the penfriend page.</p>`,
          text: "Hi! I’m Andrii. I’m 14, and I {*live|lives} in Ukraine. I’m {*into|in} chess. I’m also {*interested|interesting} in science fiction. I’m {*looking|look} for a penfriend. I’d like {*to write|write} about books and films.",
          hint: "Look at the profile words: into, interested in, looking for, would like to.",
          fbOk: "Well done!",
          fbBad: "Check: I’m into…, I’m interested in…, I’d like to…",
          fbText: "I <b>live</b>. I’m <b>into</b> chess. I’m <b>interested</b> in science fiction (a person is interested, a book is interesting). I’m <b>looking</b> for. I’d like <b>to write</b>."
        }
      ],
      outro: {
        text: "A profile says who you are and what you are into. Online, write only your first name, age, country and hobbies.",
        learned: [
          "Read penfriend profiles and choose a penfriend.",
          "Write a short profile: I’m into…, I’d like to write about…",
          "Say what is safe to write online."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s1l2",
      title: "I’ve been learning English for five years",
      short: "Have been doing",
      icon: "book",
      status: "verified",
      why: "Penfriends often ask how long you have been doing things. Learn to answer with have been + -ing.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Zofia’s first email",
          body: `<p class="lead">Mariia has got an email from Zofia.</p><p><i>Hi Mariia! Thanks for your message. I’m from Poland. I’ve been learning English for five years, and I’ve been drawing comics since I was ten. At the moment, I’m drawing a comic about a cat detective. What about you? Zofia</i></p><p>Is Zofia still learning English?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zofia: “I’ve been learning English for five years.” Does she learn English now?</p>`,
          opts: [
            "No, she stopped five years ago.",
            "Yes, she started in the past and still learns it.",
            "No, she started yesterday."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Zofia started five years ago, and she’s <b>still learning</b> now. That’s why she says <b>I’ve been learning</b>."
        },
        {
          type: "info",
          title: "have been + -ing",
          body: `<p>Zofia started five years ago, and she’s still learning:<br>I<b>’ve been learning</b> English <b>for</b> five years.</p><ul><li>I / you / we / they <b>have been</b> + -ing:<br>We<b>’ve been waiting</b> for an hour.</li><li>he / she / it <b>has been</b> + -ing:<br>She<b>’s been drawing</b> since she was ten.</li></ul><p>This is the <b>Present Perfect Continuous</b>: an action from the past until now.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia answers Zofia.</p>`,
          text: "I {*have|has} been drawing since I was six. My dad {*has|have} been {*working|work} in Kharkiv for twenty years. We {*have|has} been living in our flat since I was little.",
          hint: "I, we → have been. My dad is he → has been. After been: -ing.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: have or has, then been + -ing.",
          fbText: "I <b>have</b> been drawing. My dad (he) <b>has</b> been <b>working</b>. We <b>have</b> been living. After <b>been</b>, the verb has <b>-ing</b>."
        },
        {
          type: "info",
          title: "How long have you been…?",
          body: `<ul><li><b>How long have</b> you <b>been learning</b> English?<br>– <b>For</b> five years.</li><li><b>How long has</b> she <b>been drawing</b> comics?<br>– <b>Since</b> she was ten.</li><li><b>Have</b> you <b>been waiting</b> long?<br>– Yes, I <b>have</b>. / No, I <b>haven’t</b>.</li></ul><p><b>for</b> + how long, <b>since</b> + when it started – as in the Present Perfect.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zofia asks Mariia about her drawing.</p>`,
          tiles: ["How long", "have", "you", "been", "drawing"],
          answer: "How long have you been drawing?",
          extra: ["draw"],
          keepCase: true,
          hint: "Start with How long. Then have, you and been + -ing.",
          fbOk: "Well done!",
          fbBad: "After been, the verb has -ing.",
          fbText: "<b>How long have you been drawing?</b> In a question, <b>have</b> comes before <b>you</b>. After <b>been</b>: <b>drawing</b>, not <i>draw</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia’s mum is a dentist. She started work at eight o’clock. It’s twelve now, and she is still at work.</p>`,
          before: "Mum has",
          after: "working since eight o’clock.",
          answer: "been",
          hint: "has + … + -ing.",
          fbOk: "Right.",
          fbBad: "Look at the rule: has been + -ing.",
          fbText: "Mum has <b>been</b> working since eight o’clock. She started in the past, and she’s still working now."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia asks: “How long have you been learning English?” Which answer is correct?</p>`,
          opts: [
            "I’m learning English for five years.",
            "I’ve been learn English for five years.",
            "I’ve been learning English for five years."
          ],
          correct: 2,
          hint: "From the past until now: have been + -ing.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: have been + -ing.",
          fbText: "<b>I’ve been learning English for five years.</b> <i>I’m learning</i> is only about now; with <b>for five years</b>, say <b>I’ve been learning</b>. After <b>been</b>: <b>learning</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Zofia’s email is wrong.</p>`,
          text: "My sister has been [play] the piano for three years. I have been learning English since I was nine. We have been living in our house for a long time.",
          hint: "Check the words after been.",
          fbOk: "Good eye!",
          fbBad: "After been, the verb has -ing.",
          fbText: "My sister has been <b>playing</b> the piano: after <b>been</b>, use <b>-ing</b>. <b>has been learning</b> and <b>have been living</b> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes back to Zofia.</p>`,
          text: "Hi Zofia! Your cat detective is great! I’ve {*been|being} drawing comics for two years. My friends {*have|has} been reading them since last spring. I’ve been {*learning|learn} English since I was six. {*Have|Has} you been learning other languages too? Mariia",
          hint: "have / has + been + -ing. My friends are they.",
          fbOk: "Well done!",
          fbBad: "Check: I’ve been, my friends have been, been + -ing.",
          fbText: "I’ve <b>been</b> drawing. My friends (they) <b>have</b> been reading. I’ve been <b>learning</b>. <b>Have</b> you been learning…? – a question starts with <b>have</b>."
        }
      ],
      outro: {
        text: "Use have been + -ing for an action from the past until now. Ask “How long have you been…?” and answer with for or since.",
        learned: [
          "Say what you have been doing for a long time: I’ve been learning English for five years.",
          "Ask: How long have you been learning English?",
          "Use have been and has been + -ing."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s1l3",
      title: "What have you been doing? News in an email",
      short: "News",
      icon: "spiral",
      status: "verified",
      why: "Friends often ask for your news. Learn to say what you have been doing and what you have done.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Why is Emma so tired?",
          body: `<p class="lead">Oksana gets an email from Emma.</p><p><i>Hi Oksana! Sorry I haven’t written for ages. I’ve been training for a big swimming competition. I’ve been swimming every morning before school, so I’m always tired! I’ve swum in two races this month, and I won one of them! What have you been doing? Love, Emma</i></p><p>What has Emma been doing?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>I’ve been training for a big swimming competition. I’ve been swimming every morning before school, so I’m always tired!</i></p><p>Why is Emma always tired?</p>`,
          opts: [
            "She has been ill.",
            "She has been doing a lot of homework.",
            "She has been swimming every morning."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Find the word tired. What does Emma do every morning?",
          fbText: "Emma has <b>been swimming</b> every morning before school, so she’s tired. She hasn’t been ill."
        },
        {
          type: "info",
          title: "What have you been doing?",
          body: `<p>Use <b>have been + -ing</b> for an activity until now. It can also be an activity that has just stopped. Often you can see the result:</p><ul><li>Why are you so tired? – I<b>’ve been training</b>.</li><li>Your hands are blue! – I<b>’ve been painting</b>.</li><li>What <b>have</b> you <b>been doing</b>? – I<b>’ve been studying</b> for a test.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Dmytro comes home. His clothes are wet and dirty. Mum asks: “What have you been doing?”</p><p>What does Dmytro say?</p>`,
          opts: [
            "I’ve been playing football in the rain.",
            "I’m play football in the rain.",
            "I’ve been play football in the rain."
          ],
          correct: 0,
          hint: "Mum asks: What have you been doing? Answer with the same form.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: have been + -ing.",
          fbText: "<b>I’ve been playing football in the rain.</b> The game has just finished, and Mum can see the result: wet, dirty clothes."
        },
        {
          type: "info",
          title: "How long or how many?",
          body: `<ul><li>How long? The activity → <b>have been + -ing</b>:<br>I<b>’ve been writing</b> emails all morning.</li><li>How many? The result → <b>have + the third form</b>:<br>I<b>’ve written</b> three emails.</li><li>know, like, have (= own) → no -ing:<br>I<b>’ve known</b> Emma for four years. Not: <s>I’ve been knowing</s>.</li></ul><p>With live, learn and work, both are often correct: I<b>’ve lived</b> / I<b>’ve been living</b> here for ten years.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma tells Oksana about her month.</p>`,
          text: "I’ve {*swum|been swimming} in two races this month. I’ve {*known|been knowing} my coach for three years. Tom is still reading his book about sharks. He’s {*been reading|read} it since breakfast. He has {*read|been reading} three books this month!",
          hint: "How many? → the third form. Still doing it? → been + -ing. Know → no -ing.",
          fbOk: "Well done!",
          fbBad: "Is there a number? Is Tom still reading?",
          fbText: "Two races, three books – how many → I’ve <b>swum</b>, he has <b>read</b>. <b>know</b> has no -ing → I’ve <b>known</b>. Tom is still reading → he’s <b>been reading</b> it since breakfast."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s answer is wrong.</p>`,
          text: "Hi Emma! I’ve been [knowing] Halyna since we were six. We’ve been practising for the school concert all week. I’ve learnt two new songs on the piano!",
          hint: "Which verb never has -ing in this form?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: know, like, have → no -ing.",
          fbText: "I’ve <b>known</b> Halyna since we were six: <b>know</b> has no -ing here. <b>We’ve been practising</b> and <b>I’ve learnt</b> are correct."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Oksana asks Emma for her news.</p>`,
          tiles: ["What", "have", "you", "been", "doing"],
          answer: "What have you been doing?",
          extra: ["did"],
          keepCase: true,
          hint: "Start with What. Then have, you, been + -ing.",
          fbOk: "Well done!",
          fbBad: "What + have + you + been + -ing?",
          fbText: "<b>What have you been doing?</b> – a good question for a friend’s news."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma: “Tom, your hands are blue!” Tom’s bike is blue now too.</p>`,
          before: "Tom: I’ve been",
          after: "my bike.",
          answer: "painting",
          hint: "What makes hands and a bike blue?",
          fbOk: "Right.",
          fbBad: "Write the -ing form of a verb.",
          fbText: "I’ve been <b>painting</b> my bike. We can see the result: blue hands and a blue bike."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Emma.</p>`,
          text: "Hi Emma! Well done in your race! I’ve been {*practising|practise} the piano all week, and my fingers are tired. I’ve {*learnt|been learning} two new songs. Dmytro has {*been watching|watching} cartoons since lunch – he’s still on the sofa! What {*has|have} Tom been doing? Love, Oksana",
          hint: "been + -ing. How many songs? → the third form. Tom is he.",
          fbOk: "Good eye!",
          fbBad: "Check: been + -ing, has for he, two songs → the third form.",
          fbText: "I’ve been <b>practising</b>. Two songs – how many → I’ve <b>learnt</b>. Dmytro has <b>been watching</b>: he’s still watching. What <b>has</b> Tom (he) been doing?"
        }
      ],
      outro: {
        text: "I’ve been writing emails all morning – how long. I’ve written three emails – how many.",
        learned: [
          "Ask a friend: What have you been doing?",
          "Say what you have been doing: I’ve been training.",
          "Choose: I’ve been writing (how long) or I’ve written two emails (how many).",
          "Use know and like without -ing: I’ve known her for years."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s1l4",
      title: "You like music, don’t you? Question tags",
      short: "Question tags",
      icon: "voice",
      status: "verified",
      why: "Sometimes you think something is true, but you want to check. Learn to ask with don’t you? and isn’t he?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Liam checks",
          body: `<p class="lead">Andrii has been writing to Liam in Dublin for three years. Today they’re chatting online.</p><p><b>Liam:</b> My cousin Sean is coming to Kyiv next month. You live in Kyiv, don’t you?<br><b>Andrii:</b> Yes, I do! I can show him the city.<br><b>Liam:</b> Great! Sean plays chess. You play chess too, don’t you?<br><b>Andrii:</b> Yes, every Sunday!</p><p>Does Liam know where Andrii lives?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Liam: “You play chess too, <b>don’t you</b>?” Why does he add <i>don’t you</i>?</p>`,
          opts: [
            "He doesn’t know anything about Andrii.",
            "He is angry with Andrii.",
            "He thinks it’s true and wants to check."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Liam thinks Andrii plays chess. <b>don’t you?</b> at the end checks it. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Question tags",
          body: `<p>A <b>question tag</b> is a short question at the end of a sentence. You think it’s true, and you check.</p><ul><li>You <b>live</b> in Kyiv, <b>don’t you</b>?</li><li>He <b>plays</b> chess, <b>doesn’t he</b>?</li><li>They <b>like</b> sport, <b>don’t they</b>?</li></ul><p>A positive sentence → a negative tag: <b>don’t</b> or <b>doesn’t</b> + the same person.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Liam asks Andrii more questions.</p>`,
          text: "You go to a chess club, {*don’t you|doesn’t you}? Your sister Sofiia loves Café Smachno, {*doesn’t she|don’t she}? Your grandparents live in Chernihiv, {*don’t they|doesn’t they}?",
          hint: "You, they → don’t. Sofiia is she → doesn’t.",
          fbOk: "Exactly.",
          fbBad: "Who is it: you, she or they?",
          fbText: "You go → <b>don’t you</b>? Sofiia loves → <b>doesn’t she</b>? Your grandparents live → <b>don’t they</b>?"
        },
        {
          type: "info",
          title: "Negative sentences and be",
          body: `<ul><li>A negative sentence → a positive tag:<br>You <b>don’t</b> like horror films, <b>do you</b>?<br>She <b>doesn’t</b> eat meat, <b>does she</b>?</li><li>With <b>be</b>: You<b>’re</b> fourteen, <b>aren’t you</b>? He <b>isn’t</b> here, <b>is he</b>?</li><li>With <b>I am</b>, the tag is <b>aren’t I</b>:<br>I<b>’m</b> late, <b>aren’t I</b>? Not: <s>isn’t I</s>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii writes: “Your cousin doesn’t speak Ukrainian, ___?”</p>`,
          opts: [
            "is he",
            "does he",
            "does she"
          ],
          correct: 1,
          hint: "A negative sentence → a positive tag. Who is the cousin: he or she?",
          fbOk: "Right.",
          fbBad: "doesn’t speak → does + he.",
          fbText: "Sean <b>doesn’t</b> speak → <b>does he</b>? The verb is <i>speak</i>, not <i>be</i>, so the tag is not <i>is he</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Liam thinks Andrii is fourteen. He checks.</p>`,
          tiles: ["You’re", "fourteen,", "aren’t", "you"],
          answer: "You’re fourteen, aren’t you?",
          extra: ["isn’t"],
          hint: "You’re → aren’t you?",
          fbOk: "Well done!",
          fbBad: "You are → aren’t you?",
          fbText: "<b>You’re fourteen, aren’t you?</b> With <i>you are</i>, the tag is <b>aren’t you</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Liam’s message is wrong.</p>`,
          text: "Your city is very big, isn’t it? You often go to the park, [doesn’t] you? I’m late with my answer, aren’t I? Sorry!",
          hint: "Check each tag: who is it?",
          fbOk: "Good eye!",
          fbBad: "You go → … you?",
          fbText: "You go to the park, <b>don’t</b> you? <i>Doesn’t</i> is for he, she and it. <b>isn’t it</b> and <b>aren’t I</b> are correct."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["Andrii lives in Kyiv,", "You don’t like horror films,", "I’m your best friend,", "Sean isn’t fourteen,"],
          right: ["doesn’t he?", "do you?", "aren’t I?", "is he?"],
          hint: "Positive sentence → negative tag. Negative sentence → positive tag.",
          fbOk: "Well done!",
          fbBad: "Look at the verb: do, does or be?",
          fbText: "Andrii lives → <b>doesn’t he</b>? You don’t like → <b>do you</b>? I’m → <b>aren’t I</b>? Sean isn’t → <b>is he</b>?"
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Liam thinks Andrii likes science fiction. He checks.</p>`,
          before: "You like science fiction,",
          after: "you?",
          answer: "don’t",
          hint: "You like → … you?",
          fbOk: "Exactly.",
          fbBad: "A positive sentence → a negative tag.",
          fbText: "You like science fiction, <b>don’t</b> you? Positive sentence, negative tag."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii answers Liam.</p>`,
          text: "Hi Liam! Yes, I play chess every Sunday. Sean plays chess too, {*doesn’t he|don’t he}? He {*doesn’t|don’t} speak Ukrainian, {*does he|is he}? No problem – we can speak English. I’m a good guide, {*aren’t I|isn’t I}? Write soon! Andrii",
          hint: "Sean is he. I’m → aren’t I?",
          fbOk: "Well done!",
          fbBad: "Check: he → doesn’t / does; I’m → aren’t I.",
          fbText: "Sean plays → <b>doesn’t he</b>? He <b>doesn’t</b> speak → <b>does he</b>? I’m → <b>aren’t I</b>?"
        }
      ],
      outro: {
        text: "Add a short question tag to check something: You live in Kyiv, don’t you? I’m late, aren’t I?",
        learned: [
          "Check information with question tags: You live in Kyiv, don’t you?",
          "Use a negative tag after a positive sentence and a positive tag after a negative sentence.",
          "Say: I’m late, aren’t I?"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s1l5",
      title: "Dear…, Best wishes: writing an email",
      short: "Emails",
      icon: "scroll",
      status: "verified",
      why: "A good email is easy to read. Learn how to start and finish an email to a friend.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "How does Oksana write to Emma?",
          body: `<p class="lead">Oksana writes an email to Emma.</p><p><i>Subject: My news!<br><br>Hi Emma,<br>Thanks for your email. It was great to hear from you!<br>Our class has been collecting books for the school library, and I’ve been helping. We’ve got 200 books now!<br>How was your race? Write soon!<br>Love,<br>Oksana</i></p><p>How does Oksana start her email? How does she finish it?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which ending is good for an email to a friend?</p>`,
          opts: [
            "Love, Oksana",
            "Yours sincerely, Oksana Melnyk",
            "Goodbye, Oksana"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "To a friend, write <b>Love,</b> or <b>Best wishes,</b> and your first name. <i>Yours sincerely</i> is for a formal letter. The next screen shows the parts of an email."
        },
        {
          type: "info",
          title: "The parts of an email to a friend",
          body: `<ul><li><b>Subject</b>: a few words about the email – My news!</li><li><b>Start</b>: Hi Emma, / Dear Emma,</li><li><b>First line</b>: Thanks for your email. / It was great to hear from you.</li><li><b>Your news</b> and <b>questions</b></li><li><b>Last line</b>: Write soon! / Hope to hear from you soon.</li><li><b>End</b>: Love, / Best wishes, / Take care,<br>and your first name</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["Start an email:", "Say thank you:", "Ask for an answer:", "Finish an email:"],
          right: ["Hi Zofia,", "Thanks for your email.", "Write soon!", "Best wishes, Mariia"],
          hint: "Which one has a name at the start? Which one has a name at the end?",
          fbOk: "Good eye!",
          fbBad: "Look at the parts of an email again.",
          fbText: "Start: <b>Hi Zofia,</b> Thank you: <b>Thanks for your email.</b> Ask for an answer: <b>Write soon!</b> Finish: <b>Best wishes, Mariia</b>."
        },
        {
          type: "info",
          title: "To a friend or to a stranger?",
          body: `<ul><li>To a friend: <b>Hi Liam,</b> … <b>Love,</b> / <b>Best wishes,</b> Andrii</li><li><b>Love</b> – for family and close friends.</li><li>A formal letter to a person, for example a head teacher: <b>Dear Mr Hughes,</b> … <b>Yours sincerely,</b> Mariia Koval</li></ul><p>In a formal letter, write your first name and your surname.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Oksana is writing an email to her best friend Halyna. How does she finish it?</p>`,
          opts: [
            "Yours sincerely, Oksana Melnyk",
            "Dear Sir, Oksana",
            "Love, Oksana"
          ],
          correct: 2,
          hint: "Halyna is a close friend.",
          fbOk: "Yes!",
          fbBad: "Is it a formal letter or an email to a friend?",
          fbText: "To a close friend: <b>Love, Oksana</b>. <i>Yours sincerely</i> is for a formal letter. <i>Dear Sir</i> is a start, not an end."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Liam writes to Andrii.</p>`,
          text: "Hi Andrii, Thanks {*for|to} your email. It was great to {*hear|listen} from you! Sean is very excited about Kyiv. Write {*soon|early}! {*Best wishes|Yours sincerely}, Liam",
          hint: "Look at the parts of an email: first line, last line, end.",
          fbOk: "Exactly.",
          fbBad: "Thanks for…, hear from you, Write soon!",
          fbText: "Thanks <b>for</b> your email. It was great to <b>hear</b> from you. Write <b>soon</b>! <b>Best wishes</b> – for a friend."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Mariia writes to Zofia.</p>`,
          items: [
            "Hi Zofia,",
            "Thanks for your email. It was great to hear from you!",
            "I’ve been drawing a new comic all week.",
            "Write soon!",
            "Best wishes, Mariia"
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Start with the name. Then say thanks, give your news, ask for an answer and end.",
          fbOk: "Well done!",
          fbBad: "Look at the parts of an email again.",
          fbText: "Start: <b>Hi Zofia,</b> Then thanks for the email and the news. Ask for an answer: <b>Write soon!</b> End: <b>Best wishes, Mariia</b>."
        },
        {
          type: "pick",
          sk: "func",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s next email is wrong.</p>`,
          text: "Hi Zofia, Thanks [to] your email. I’ve been reading your comic all evening. It’s brilliant! Write soon! Best wishes, Mariia",
          hint: "Check the first line.",
          fbOk: "Good eye!",
          fbBad: "Thanks … your email.",
          fbText: "Thanks <b>for</b> your email. The other parts are correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii starts his email to Liam.</p>`,
          tiles: ["It", "was", "great", "to hear", "from", "you"],
          answer: "It was great to hear from you.",
          extra: ["listen"],
          hint: "It was great to … from you.",
          fbOk: "Well done!",
          fbBad: "We say hear from someone.",
          fbText: "<b>It was great to hear from you.</b> <b>hear from</b> = get a letter or an email from someone."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Zofia again.</p>`,
          text: "Hi Zofia, {*Thanks|Thank} for your email. I’ve been {*drawing|draw} a new comic. You draw cats, {*don’t you|doesn’t you}? I can’t send you my home address, but my teacher says we can put our comics on the school page. Write {*soon|early}! {*Best wishes|Yours sincerely}, Mariia",
          hint: "Look at the parts of an email. You draw → … you?",
          fbOk: "Brilliant!",
          fbBad: "Check: Thanks for…, been + -ing, Write soon!, Best wishes.",
          fbText: "<b>Thanks</b> for your email. I’ve been <b>drawing</b>. You draw → <b>don’t you</b>? Write <b>soon</b>! <b>Best wishes</b> – for a friend. Mariia doesn’t send her address: that’s safe."
        }
      ],
      outro: {
        text: "Start an email to a friend with Hi or Dear and the name. Finish with Write soon! and Love or Best wishes.",
        learned: [
          "Start and finish an email to a friend.",
          "Use Thanks for your email and It was great to hear from you.",
          "Choose Love, Best wishes or Yours sincerely."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s1l6",
      title: "We write to each other: a letter from England",
      short: "Each other",
      icon: "globe",
      status: "verified",
      why: "Friends often do things together. Learn to say each other, and read a long letter from a penfriend.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A real letter!",
          body: `<p class="lead">A real paper letter has come for Oksana from England.</p><p><i>Dear Oksana,<br>This is my first real letter to you! We’ve been writing emails to each other for four years. But a paper letter is special, isn’t it?</i></p><p>Who has written the letter?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “We’ve been writing emails to <b>each other</b> for four years.” What does it mean?</p>`,
          opts: [
            "Emma writes to Oksana, and Oksana writes to Emma.",
            "Emma writes emails to herself.",
            "Emma and Oksana write emails to Tom."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Emma writes to Oksana, and Oksana writes to Emma: they write to <b>each other</b>."
        },
        {
          type: "info",
          title: "each other or themselves?",
          body: `<ul><li>Emma writes to Oksana. Oksana writes to Emma.<br>→ They write to <b>each other</b>.</li><li>Mariia and Zofia have never met, but they know a lot about <b>each other</b>.</li><li>Compare: Oksana and Dmytro made the cake <b>themselves</b>. (Nobody helped them.)</li></ul><p><b>each other</b> – A does it to B, and B does it to A.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Andrii and Liam have never met, but they write to {*each other|themselves} every week. Emma helps Tom with his homework, and Tom helps Emma with her bike. They help {*each other|themselves}. Dmytro and Oksana tidied the room {*themselves|each other} – Mum didn’t help.",
          hint: "A to B and B to A → each other. Nobody helped → themselves.",
          fbOk: "Exactly.",
          fbBad: "Does A do it to B and B to A?",
          fbText: "Andrii writes to Liam, Liam writes to Andrii → <b>each other</b>. Tom and Emma help <b>each other</b>. Nobody helped Dmytro and Oksana → <b>themselves</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: a letter from England, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Dear Oksana,<br>This is my first real letter to you! Our teacher, Mr Price, has asked us to write letters by post this term. We’ve been writing emails to each other for four years, but a paper letter is special, isn’t it?<br>I’ve been very busy. I’ve been training for a big race in November. My coach says I’ve been swimming much faster since the summer. Tom has been going to a swimming club for a year now. He isn’t afraid of water any more!</i></p><p>Why is Emma writing a paper letter?</p>`,
          opts: [
            "Her teacher has asked the class to write letters by post.",
            "Her computer isn’t working.",
            "Oksana has asked her for a letter."
          ],
          correct: 0,
          hint: "Find Mr Price in the letter.",
          fbOk: "Right.",
          fbBad: "What has Mr Price asked?",
          fbText: "Mr Price, Emma’s teacher, <b>has asked the class to write letters by post</b> this term."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: a letter from England, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Last week, I told my class about Ukraine. I showed them your photos of Zelena Dolyna and your pysanky. Now my friends want penfriends in Ukraine too! Can your class write to us? Mr Price says the two classes can write to each other through our schools, so we don’t need home addresses. I’ve put a photo of Snowy in the envelope.<br>Write back soon!<br>Love,<br>Emma</i></p><p>What is true?</p>`,
          opts: [
            "Emma’s friends want penfriends in Ukraine.",
            "Emma needs Oksana’s home address.",
            "Emma has put a photo of Snowy in the envelope.",
            "Emma is going to send a photo next week."
          ],
          correct: [0, 2],
          hint: "Find Snowy and home addresses in the letter.",
          fbOk: "Well done!",
          fbBad: "Read about the addresses and the photo again.",
          fbText: "Emma’s friends <b>want penfriends in Ukraine</b>, and Emma <b>has put a photo of Snowy</b> in the envelope. The classes write through the schools, so they don’t need home addresses."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Emma’s class is going to write to Oksana’s class. Oksana’s class is going to write to Emma’s class.</p>`,
          before: "The two classes are going to write to",
          after: "through their schools.",
          answer: ["each other", "one another"],
          hint: "A writes to B, and B writes to A.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: A to B and B to A.",
          fbText: "The two classes are going to write to <b>each other</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message to Halyna is wrong.</p>`,
          text: "Emma and I have known [themselves] for four years. We often send each other photos. Now our classes are going to write to each other too!",
          hint: "Emma knows Oksana, and Oksana knows Emma.",
          fbOk: "Good eye!",
          fbBad: "A knows B, and B knows A → …",
          fbText: "Emma and I have known <b>each other</b> for four years. <b>send each other photos</b> and <b>write to each other</b> are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia tells Andrii about Zofia.</p>`,
          tiles: ["We", "know", "a lot", "about", "each other"],
          answer: "We know a lot about each other.",
          extra: ["themselves"],
          hint: "Start with We. A knows about B, and B knows about A.",
          fbOk: "Well done!",
          fbBad: "Mariia knows about Zofia, and Zofia knows about Mariia.",
          fbText: "<b>We know a lot about each other.</b> Mariia knows about Zofia, and Zofia knows about Mariia."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes back to Emma.</p>`,
          text: "Dear Emma, Thank you {*for|to} your letter! Snowy looks so sweet in the photo. My class wants to write to your class, so we can all write to {*each other|ourselves}. Dmytro has {*been asking|asking} about Tom all morning. Write back soon! {*Love|Yours sincerely}, Oksana",
          hint: "Our class to your class, your class to our class → … Emma is a close friend.",
          fbOk: "Brilliant!",
          fbBad: "Check: thank you for, each other, has been + -ing, Love.",
          fbText: "Thank you <b>for</b> your letter. We can all write to <b>each other</b>. Dmytro has <b>been asking</b>. <b>Love</b> – for a close friend."
        }
      ],
      outro: {
        text: "They write to each other: A writes to B, and B writes to A. They did it themselves: nobody helped them.",
        learned: [
          "Use each other: We write to each other.",
          "Choose each other or themselves.",
          "Read a letter from a penfriend and find details."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s1l7",
      title: "Our penfriend club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the penfriend club?",
          body: `<p class="lead">Oksana’s class and Emma’s class are writing to each other now. Mariia, Andrii and their friends from the penfriend club are writing too.</p><p>Help them with their profiles, emails and letters. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Dmytro wants to write a profile for the club page. What can he write there?</p>`,
          opts: [
            "his hobbies",
            "his phone number",
            "his home address"
          ],
          correct: 0,
          pre: "e8s1l1",
          fbOk: "Yes!",
          fbBad: "What is safe to write online?",
          fbText: "Safe: his first name, age, country and <b>hobbies</b>. Never his phone number or home address."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Zofia writes to the club.</p>`,
          text: "I {*have|has} been learning English for five years. My sister {*has|have} been {*playing|play} the piano since she was eight.",
          pre: "e8s1l2",
          hint: "I → have been. My sister is she → has been. Then -ing.",
          fbOk: "Exactly.",
          fbBad: "have / has + been + -ing.",
          fbText: "I <b>have</b> been learning. My sister <b>has</b> been <b>playing</b>."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 3",
          title: "Put the words in order.",
          body: `<p>Emma asks a new penfriend from Ukraine.</p>`,
          tiles: ["How long", "have", "you", "been", "learning", "English"],
          answer: "How long have you been learning English?",
          extra: ["learn"],
          keepCase: true,
          pre: "e8s1l2",
          fbOk: "Well done!",
          fbBad: "How long + have + you + been + -ing?",
          fbText: "<b>How long have you been learning English?</b> After <b>been</b>: <b>learning</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Tom’s hands are green. Emma asks: “What have you been doing?” What does Tom say?</p>`,
          opts: [
            "I’ve painting my room.",
            "I’ve been paint my room.",
            "I’ve been painting my room."
          ],
          correct: 2,
          pre: "e8s1l3",
          fbOk: "Right.",
          fbBad: "have been + -ing.",
          fbText: "<b>I’ve been painting my room.</b> Emma can see the result: green hands."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about Liam.</p>`,
          text: "I’ve {*known|been knowing} Liam for three years. I’ve {*sent|been sending} him about a hundred emails!",
          pre: "e8s1l3",
          hint: "know → no -ing. How many emails?",
          fbOk: "Good eye!",
          fbBad: "know has no -ing. How many → the third form.",
          fbText: "I’ve <b>known</b>: <b>know</b> has no -ing. About a hundred emails – how many → I’ve <b>sent</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Liam checks some facts.</p>`,
          text: "Andrii lives in Kyiv, {*doesn’t he|don’t he}? You aren’t busy, {*are you|aren’t you}? I’m your best penfriend, {*aren’t I|isn’t I}?",
          pre: "e8s1l4",
          hint: "Positive → negative tag. Negative → positive tag. I’m → aren’t I?",
          fbOk: "Exactly.",
          fbBad: "Look at the verb and the person.",
          fbText: "Andrii lives → <b>doesn’t he</b>? You aren’t → <b>are you</b>? I’m → <b>aren’t I</b>?"
        },
        {
          type: "match",
          sk: "func",
          eyebrow: "Task 7",
          title: "Match the halves.",
          left: ["Start an email:", "Say thank you:", "Ask for an answer:", "Finish an email:"],
          right: ["Dear Liam,", "Thanks for your email.", "Hope to hear from you soon.", "Take care, Andrii"],
          pre: "e8s1l5",
          fbOk: "Well done!",
          fbBad: "Which one has a name at the start? Which one has a name at the end?",
          fbText: "Start: <b>Dear Liam,</b> Thank you: <b>Thanks for your email.</b> Ask for an answer: <b>Hope to hear from you soon.</b> Finish: <b>Take care, Andrii</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Write the missing words.",
          body: `<p>Mariia sends Zofia her comics, and Zofia sends Mariia her comics.</p>`,
          before: "Mariia and Zofia often send",
          after: "comics.",
          answer: ["each other", "one another"],
          pre: "e8s1l6",
          fbOk: "Exactly.",
          fbBad: "A sends to B, and B sends to A.",
          fbText: "They often send <b>each other</b> comics."
        }
      ],
      outro: {
        text: "Well done! Now you can write to a penfriend: start and finish an email, say what you have been doing and check things with question tags.",
        learned: [
          "Write a profile and an email to a penfriend.",
          "Use the Present Perfect Continuous: I’ve been learning English for five years.",
          "Check information with question tags.",
          "Use each other."
        ]
      }
    }
  ]
});
