/* Слід · Англійська мова, 10 клас — «Science and technology» (e10s6)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B1 → B2), 10 кл.: тема «Наука і
   технічний прогрес» — комп’ютерне обладнання; сучасні засоби комунікації та інформації; вплив науки на розвиток
   суспільства; технології (с. 22); функції — давати поради, реагувати на поради інших; обговорювати перспективи;
   аргументувати свою точку зору (с. 22); граматика (с. 23): first and second conditionals — повторення e6s8l3, e7s6l3–l4,
   e8s8l5–l6; нове для B2: контраст реальної й уявної умови, will / might / could / can / імператив у головному реченні,
   unless — для реальних умов (CD Grammar «Unless»; правило «не для протилежного реальності» в оцінюваних завданнях не перевіряємо — reports/verify/write-eng-g10-e10s6.md), If I were you, I’d… для поради. Розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g10-11.md: https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Друга правильна відповідь (plan-eng-g10-11): If I were / If I was — обидва в ключі `word` (OALD if_1: «If I was in
   charge… (rather formal) If I were…»), у `gaps` was поруч із were не стоїть; will / might / could у головному реченні
   ніколи не протиставлені в одному пропуску — значення перевіряє `choice` чи `sort`; would у first conditional хибним
   варіантом не дається (буває ввічливе «If you need help, I would…») — пастки лише will після if, will у second conditional,
   хибні форми; «I shouldn’t … if I were you» (BrE) — у ключі поруч із wouldn’t.
   e9s6 (винахідники, пасив, пристрої вдома, історія телефона) не дублюємо: тут — обладнання, комунікація, вплив на
   суспільство. Бренди не названо; Diia — державний застосунок (факт — дві джерела, нотатки задачі).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Зображень немає.
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Oksana, Andrii, Mariia,
   Taras, Emma — 16. Нових героїв немає.
   Форми, наголос і значення — Cambridge Dictionary (CD), CD Grammar, OALD; URL — tasks/…/write-eng-g10-e10s6.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s6, 2026-11-26). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s1–e10s3).
   Перевірка: node tools/validate.mjs --section e10s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s6",
  grade: 10,
  weeks: [23, 26],
  title: "Science and technology",
  why: "To talk about computers and modern ways to communicate and get information. And to discuss how science and technology change society.",
  requires: ["e6s8l3", "e7s6l3", "e7s6l4", "e8s8l5", "e8s8l6", "e9s6l3", "e9s6l5", "e10s2l6", "e10s3l5"],
  meta: { author: "writer-e10s6", created: "2026-11-26", factcheck: null, teacher: null },
  badges: [
    { id: "e10s6boss", name: "Tech thinker", icon: "trophy", desc: "Finish the final lesson “Science and technology”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s6l1",
      title: "Computer equipment: what do you use?",
      short: "Computers",
      icon: "bolt",
      status: "verified",
      why: "Desktop or laptop? Webcam or microphone? Learn the words you need to talk about computers and what they do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Desktop or laptop?",
          body: `<p class="lead">Zoriana has finally saved enough money for her own computer. She writes to Andrii.</p><p><b>Zoriana:</b> Help! Should I buy a desktop or a laptop? For my coding course I need a good keyboard and a big screen. But I also want to take my computer to robot club on Tuesdays.<br><b>Andrii:</b> Then get a laptop. At home you can connect it to a bigger screen. Does it have a webcam?<br><b>Zoriana:</b> Yes, and a microphone, so I can join online lessons.<br><b>Andrii:</b> Great. And buy a USB stick for your robot club files.</p><p>Which computer does Andrii think is better for Zoriana?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana: “Should I buy a <b>desktop</b> or a laptop?”</p><p>What is a desktop?</p>`,
          opts: [
            "a computer that stays on a desk",
            "a small computer that you carry in a bag",
            "a computer inside a smartphone"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>desktop</b> (computer) stays on a desk. A <b>laptop</b> is small, so you can carry it. That’s why Andrii thinks a laptop is better for robot club."
        },
        {
          type: "info",
          title: "Computer equipment",
          body: `<ul><li>a <b><u>desk</u>top</b> (computer) → stays on a desk; the screen and keyboard are separate</li><li>a <b><u>lap</u>top</b> → a small computer you can carry</li><li>a <b>screen</b>, a <b><u>key</u>board</b>, a <b>mouse</b></li><li>a <b><u>web</u>cam</b> → a small camera for video calls</li><li>a <b><u>mi</u>crophone</b> → you speak into it, and the computer records your voice</li><li>a <b><u>prin</u>ter</b> → puts your work on paper</li><li>a <b>USB stick</b> → a small device that keeps files</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a webcam", "a printer", "a USB stick", "a laptop"],
          right: ["lets people see you in a video call", "puts your work on paper", "keeps files, and you can carry it in your pocket", "a computer that you can take to robot club"],
          hint: "Which one is a camera? Which one is a whole computer?",
          fbOk: "Right.",
          fbBad: "Look at the list of computer equipment again.",
          fbText: "a <b>webcam</b> – a camera for video calls; a <b>printer</b> – paper; a <b>USB stick</b> – keeps files; a <b>laptop</b> – a computer you can carry."
        },
        {
          type: "info",
          title: "Hardware and software",
          body: `<ul><li><b><u>hard</u>ware</b> → the parts of a computer you can touch: the screen, the keyboard</li><li><b><u>soft</u>ware</b> → the programs and apps on a computer</li></ul><p>What we do with software and files:</p><ul><li><b>install</b> an app → put it on your computer or phone</li><li><b>update</b> software → get the newest version</li><li><b>save</b> a file → keep your work on the computer</li><li><b>back up</b> files → make an extra copy</li><li>a computer <b>crashes</b> → it suddenly stops working</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it hardware or software?</p>`,
          bins: ["Hardware", "Software"],
          items: [
            ["a keyboard", 0],
            ["a printer", 0],
            ["a webcam", 0],
            ["a coding app", 1],
            ["a computer game", 1],
            ["a computer program", 1]
          ],
          hint: "Can you touch it with your hands?",
          fbOk: "Exactly.",
          fbBad: "Hardware → you can touch it. Software → programs and apps.",
          fbText: "You can touch a <b>keyboard</b>, a <b>printer</b> and a <b>webcam</b>: they are hardware. <b>Apps</b>, <b>games</b> and <b>programs</b> are software."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Yesterday my laptop suddenly {*crashed|installed|printed}, and I lost my homework. Now I always {*back up|crash|install} my files on a USB stick. Zoriana {*installed|crashed|printed} a new coding app on her laptop last night.",
          hint: "Which verb means ‘suddenly stops working’? Which one means ‘make an extra copy’?",
          fbOk: "Well done!",
          fbBad: "Look at the verbs in “Hardware and software” again.",
          fbText: "My laptop <b>crashed</b> → it suddenly stopped working. I <b>back up</b> my files → I make an extra copy. Zoriana <b>installed</b> an app → she put it on her laptop."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["com|+pu|ter", "+mi|cro|phone", "in|+stall", "+soft|ware"],
          fbOk: "Good eye!",
          fbBad: "Say the words slowly. Which part is strong?",
          fbText: "com<u>pu</u>ter, <u>mi</u>crophone, in<u>stall</u>, <u>soft</u>ware."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p><b>Zoriana:</b> My old computer has no camera, and next week I have a video call with my coding teacher.</p><p>What does she need?</p>`,
          opts: [
            "a webcam",
            "a printer",
            "a USB stick"
          ],
          correct: 0,
          hint: "Which device is a camera?",
          fbOk: "Yes!",
          fbBad: "She needs a camera for a video call.",
          fbText: "A <b>webcam</b> is a small camera for video calls. A printer puts work on paper, and a USB stick keeps files."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii’s computer suddenly stopped working in the middle of a game. Use a verb from “Hardware and software”.</p>`,
          before: "Oh no! My computer has",
          after: "again!",
          answer: "crashed",
          hint: "A computer suddenly stops working → it …",
          fbOk: "Well done!",
          fbBad: "Look at the last verb in “Hardware and software”.",
          fbText: "My computer has <b>crashed</b> → it has suddenly stopped working. Remember to back up your files!"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I’ve got my laptop! It’s light, so I can carry it to robot club. It has a webcam and a microphone, so I can join my online coding lessons from anywhere. At home I connect it to a bigger screen and a keyboard, and it feels like a desktop. Yesterday I installed three coding apps. My only problem: I still haven’t backed up my files. – Zoriana</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Zoriana bought a desktop because it is light.",
            "Zoriana has already made a copy of her files.",
            "At home, Zoriana uses her laptop with a bigger screen."
          ],
          correct: 2,
          hint: "Find At home in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the sentence that starts with At home.",
          fbText: "At home she connects her laptop to a <b>bigger screen</b> and a keyboard. She bought a <b>laptop</b>, and she <b>still hasn’t backed up</b> her files."
        }
      ],
      outro: {
        text: "Desktop, laptop, webcam, back up, crash: now you can talk about computers and what they do.",
        learned: [
          "Name computer equipment: a laptop, a keyboard, a webcam, a printer.",
          "Explain the difference between hardware and software.",
          "Say what you do with files: install, update, save, back up."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s6l2",
      title: "Messages, calls and news: modern communication",
      short: "Communication",
      icon: "voice",
      status: "verified",
      why: "Text, call or email? And where does your news come from? Talk about modern ways to keep in touch and to get information.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How do you keep in touch?",
          body: `<p class="lead">Grandma Hanna asks Oksana about modern communication.</p><p><b>Grandma:</b> When I was your age, we wrote letters. How do you keep in touch with Emma?<br><b>Oksana:</b> We send text messages and voice messages almost every day. On Sundays we have a video call. And the penfriend club has a group chat.<br><b>Grandma:</b> And where do you get your news?<br><b>Oksana:</b> From news websites. But first I always check the source. There’s a lot of fake news online.</p><p>Which ways to keep in touch does Oksana use?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana sends Emma <b>voice messages</b>. What is a voice message?</p>`,
          opts: [
            "a message that you write with a keyboard",
            "a message where you record your voice and send it",
            "a letter that you send by post"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In a <b>voice message</b>, you record your voice, and your friend plays it later. More words are on the next screen."
        },
        {
          type: "info",
          title: "Keeping in touch",
          body: `<ul><li>a <b>text message</b> → a short written message on a phone</li><li>a <b>voice message</b> → you record your voice and send it</li><li>a <b>video call</b> → you talk and see each other</li><li>a <b>group chat</b> → a chat for many people</li><li>an <b>email</b> → more formal: to a teacher, a school, a company</li><li><b>social media</b> → websites and apps where people <b>post</b> photos and comments</li><li>a <b>notification</b> → a short message from an app: something new has happened</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["You want to see your cousin while you talk:", "You’re writing to your teacher about a project:", "You want to tell the whole class about a change in the timetable:", "Your hands are busy, so you record what you want to say:"],
          right: ["make a video call.", "send an email.", "write in the class group chat.", "send a voice message."],
          hint: "Which one is more formal? Which one lets you see a person?",
          fbOk: "Well done!",
          fbBad: "Look at “Keeping in touch” again.",
          fbText: "See your cousin → a <b>video call</b>. Your teacher → a more formal <b>email</b>. The whole class → the <b>group chat</b>. Busy hands → a <b>voice message</b>."
        },
        {
          type: "info",
          title: "News and information",
          body: `<ul><li>a <b>news website</b> → a website with news</li><li>a <b>source</b> → where information comes from</li><li>a <b>reliable source</b> → you can trust it</li><li><b>fake news</b> → false stories that look like real news</li><li><b>go viral</b> → spread very fast online: The video went viral.</li><li><b>check the facts</b> → find out if something is true</li></ul><p>We say <b>on the internet</b> and <b>online</b>: I read it on the internet. I read it online.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "func",
          title: "Choose all the correct answers.",
          body: `<p>Daryna sees a story online: “Schools will close for a month!” How can she check if it’s fake news?</p>`,
          opts: [
            "Look for the same story on two or three reliable news websites.",
            "Check who wrote the story and when.",
            "Share it with everyone first and check later.",
            "Believe it because many people have shared it.",
            "Look at the school’s own website."
          ],
          correct: [0, 1, 4],
          hint: "Which answers help her find out if the story is true?",
          fbOk: "Exactly.",
          fbBad: "Sharing a story doesn’t make it true.",
          fbText: "Check <b>reliable sources</b>, <b>who wrote it and when</b>, and the <b>school’s own website</b>. Fake news often goes viral because people share it before they check the facts."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "The video of Tom’s dancing dog went {*viral|fake|reliable}: two million people watched it in one day. Before you share a story, check the {*source|notification|webcam}. My phone shows a {*notification|source|keyboard} every time someone writes in the group chat.",
          hint: "spread very fast → go …; where information comes from → …; a short message from an app → …",
          fbOk: "Yes!",
          fbBad: "Look at the two lists of words again.",
          fbText: "The video went <b>viral</b> → it spread very fast. Check the <b>source</b> → where the story comes from. A <b>notification</b> → a short message from an app."
        },
        {
          type: "info",
          title: "Ukraine: a government app",
          body: `<p>In February 2020, Ukraine launched <b>Diia</b>, a government app and website.</p><ul><li>People can keep <b>digital documents</b> in it, for example an ID card.</li><li>They can use many government services online.</li><li>Since 2021, a digital passport in the app has been equal to an ordinary one inside Ukraine. You can’t use it to cross a border.</li></ul><p><u>dig</u>ital</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Grandma Hanna: “What can people do with Diia?”</p>`,
          opts: [
            "keep digital documents and use government services online",
            "make video calls to any country for free",
            "cross a border with a digital passport"
          ],
          correct: 0,
          hint: "Read the information about Diia again.",
          fbOk: "Right.",
          fbBad: "Diia is a government app. What does it do?",
          fbText: "In <b>Diia</b>, people keep <b>digital documents</b> and use <b>government services online</b>. A digital passport in the app is equal to an ordinary one inside Ukraine, but not for crossing a border."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "I found this story [in] the internet, but I can’t find it on any [!news] website. I think it’s fake [!news].",
          hint: "Look at the small words before internet and website.",
          fbOk: "Good eye!",
          fbBad: "Which preposition goes with the internet?",
          fbText: "We say <b>on</b> the internet, like <b>on</b> a website. <i>Fake news</i> and <i>news website</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Grandma Hanna.</p>`,
          text: "Grandma, I’ll show you how to make a {*video call|text message} on Sunday, so you can see Emma’s face while you talk. And please don’t believe every story you read {*online|in online}. Some stories are {*fake news|reliable sources}. Always check the {*source|notification} first!",
          hint: "see Emma’s face → …; false stories → …",
          fbOk: "Brilliant!",
          fbBad: "Which way of keeping in touch lets you see a person?",
          fbText: "A <b>video call</b> → you see each other. We read stories <b>online</b> (no <i>in</i>). False stories → <b>fake news</b>. Check the <b>source</b> → where it comes from."
        }
      ],
      outro: {
        text: "Text, voice message, video call, reliable source: now you can talk about how we keep in touch and get news today.",
        learned: [
          "Name modern ways to keep in touch: a voice message, a video call, a group chat.",
          "Choose the best way to contact someone.",
          "Talk about news online: a reliable source, fake news, go viral."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s6l3",
      title: "If the battery dies…: real conditions",
      short: "Real conditions",
      icon: "bulb",
      status: "verified",
      why: "Plans can go wrong. Talk about what will, might or can happen if they do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What if there’s no signal?",
          body: `<p class="lead">Ostap is going on a hike in the Carpathians with his Plast group. His mum is worried.</p><p><b>Mum:</b> What will you do if your phone battery dies?<br><b>Ostap:</b> If my battery dies, I’ll use Taras’s phone. He’s coming too.<br><b>Mum:</b> And will you call me from the top?<br><b>Ostap:</b> If there’s a signal, I might send you a photo. But I’m not sure: there’s often no signal in the mountains.<br><b>Mum:</b> OK. If you get cold, put on your jumper!<br><b>Ostap:</b> Don’t worry. Unless it rains, we’ll be back by six.</p><p>Is Ostap sure he’ll send a photo?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ostap: “If there’s a signal, I <b>might</b> send you a photo.”</p><p>What does he mean?</p>`,
          opts: [
            "He will certainly send a photo.",
            "Maybe he will send a photo, maybe not.",
            "He has already sent a photo."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>might</b> → maybe. Ostap isn’t sure: there’s often no signal in the mountains."
        },
        {
          type: "info",
          title: "Real conditions: the First Conditional again",
          body: `<p>A real, possible situation in the future:</p><ul><li><b>if</b> + Present Simple → <b>will</b> / <b>won’t</b> + verb</li><li>If my battery <b>dies</b>, I<b>’ll use</b> Taras’s phone.</li><li>If it <b>rains</b>, we <b>won’t climb</b> to the top.</li></ul><p>No <i>will</i> after <i>if</i>. Not: <s>If my battery will die</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "If my phone {*dies|will die|died}, I’ll use Taras’s phone. If we {*get|will get|got} lost, we {*will look|looked|would looked} at the map. If the path {*is|will be|was} wet, we’ll walk slowly.",
          hint: "After if: the Present Simple. In the other part: will + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: if + Present Simple, will + verb.",
          fbText: "If my phone <b>dies</b>…; if we <b>get</b> lost, we <b>will look</b>…; if the path <b>is</b> wet… After <i>if</i> – the Present Simple, no <i>will</i>."
        },
        {
          type: "info",
          title: "will, might, could, can",
          body: `<p>The <i>if</i> part is the same. The other part can change:</p><ul><li>sure → <b>will</b>: If it rains, we<b>’ll stay</b> in the hut.</li><li>not sure, maybe → <b>might</b> / <b>could</b>: If there’s a signal, I <b>might send</b> you a photo.</li><li>it’s possible or allowed → <b>can</b>: If you finish early, you <b>can call</b> me.</li><li>advice or an instruction → the verb alone: If you get cold, <b>put on</b> your jumper.</li></ul><p>No <i>to</i> after might, could and can.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Is the speaker sure or not sure about the result?</p>`,
          bins: ["Sure", "Not sure"],
          items: [
            ["If it snows, we’ll stay in the hut.", 0],
            ["If the battery dies, I won’t be able to call.", 0],
            ["If we’re tired, we might stop for lunch.", 1],
            ["If there’s a signal, I could send a video.", 1],
            ["If we finish early, we might swim in the lake.", 1],
            ["If we leave at seven, we’ll be at the top by ten.", 0]
          ],
          hint: "Find will, won’t, might and could in the sentences.",
          fbOk: "Well done!",
          fbBad: "will / won’t → sure. might / could → maybe.",
          fbText: "<b>will</b> and <b>won’t</b> → the speaker is sure. <b>might</b> and <b>could</b> → maybe, the speaker isn’t sure."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mum writes: “If the weather is bad, the group <b>might</b> come home early.”</p><p>Which sentence means the same?</p>`,
          opts: [
            "If the weather is bad, it’s possible that the group will come home early.",
            "If the weather is bad, the group will certainly come home early.",
            "The group came home early because of the bad weather."
          ],
          correct: 0,
          hint: "might → sure or maybe?",
          fbOk: "Right.",
          fbBad: "might means maybe, not certainly.",
          fbText: "<b>might</b> → it’s possible, maybe. With <i>will</i>, Mum would be sure. The weather hasn’t been bad yet: this is the future."
        },
        {
          type: "info",
          title: "unless again",
          body: `<p><b>unless</b> = except if → it often means <b>if … not</b>:</p><ul><li><b>Unless</b> it <b>rains</b>, we’ll be back by six.<br>= If it <b>doesn’t rain</b>, we’ll be back by six.</li></ul><p>After <i>unless</i>, use the Present Simple, like after <i>if</i>. No <i>will</i>, and no <i>not</i>: <i>unless</i> already means “if … not”.</p><p>Not: <s>unless it will rain</s>, <s>unless it doesn’t rain</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "We’ll reach the top by noon unless it {*rains|doesn’t rain|will rain}. Your phone won’t last all day unless you {*switch|don’t switch|will switch} off the Wi-Fi.",
          hint: "unless = if … not. So after unless, don’t add not.",
          fbOk: "Yes!",
          fbBad: "Say it with if … not: if it doesn’t rain = unless it …",
          fbText: "Unless it <b>rains</b> = if it doesn’t rain. Unless you <b>switch</b> off the Wi-Fi = if you don’t switch it off."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Taras’s message is wrong.</p>`,
          text: "If it [will be] sunny tomorrow, we [!might go] to the lake. If you want, you [!can come] with us.",
          hint: "Find the parts with if. What comes after if?",
          fbOk: "Good eye!",
          fbBad: "After if: the Present Simple, no will.",
          fbText: "If it <b>is</b> sunny tomorrow… After <i>if</i>, no <i>will</i>. <i>We might go</i> and <i>you can come</i> are correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Ostap gives his little cousin Marko an instruction. Start with <b>if</b>.</p>`,
          tiles: ["if", "your battery", "is low,", "switch off", "the Wi-Fi"],
          extra: ["will be low,"],
          answer: "If your battery is low, switch off the Wi-Fi.",
          hint: "if + Present Simple, then the verb alone for an instruction.",
          fbOk: "Well done!",
          fbBad: "After if: the Present Simple, no will.",
          fbText: "<b>If your battery is low, switch off the Wi-Fi.</b> An instruction → the verb alone: <i>switch off</i>. After <i>if</i>: <i>is</i>, not <i>will be</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Ostap writes to his mum from the hut.</p>`,
          text: "We’re at the hut, and everyone is fine! There’s no signal here, so this message might arrive late. Tomorrow we’re going to the lake. If it {*is|will be} warm, we {*might|might to} swim. Unless it {*rains|doesn’t rain}, I’ll take lots of photos. If you {*want|will want}, I {*can|can to} show them to you on Sunday.",
          hint: "After if and unless: the Present Simple. No to after might and can.",
          fbOk: "Brilliant!",
          fbBad: "Check: after if and unless – no will. After might and can – no to.",
          fbText: "If it <b>is</b> warm, we <b>might</b> swim. Unless it <b>rains</b> = if it doesn’t rain. If you <b>want</b>, I <b>can</b> show them."
        }
      ],
      outro: {
        text: "If my battery dies, I’ll…; if there’s a signal, I might…: now you can talk about real situations and their possible results.",
        learned: [
          "Talk about real situations in the future: If it rains, we’ll stay in the hut.",
          "Show how sure you are: will, might, could, can.",
          "Give instructions with if: If you get cold, put on your jumper.",
          "Use unless: Unless it rains, we’ll be back by six."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s6l4",
      title: "If I could invent anything…: unreal conditions",
      short: "Unreal conditions",
      icon: "bulb",
      status: "verified",
      why: "Some ideas are real plans, and some are only dreams. Learn to show the difference.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A dream or a plan?",
          body: `<p class="lead">Ms Lysenko has a question for Andrii’s class in Kyiv. “If you could invent anything, what would you invent?”</p><p><b>Daryna:</b> If I could invent anything, I’d invent a phone that never needs charging. Then I wouldn’t need a charger.<br><b>Bohdan:</b> I’d invent a robot teacher. If it explained maths to me, I might finally understand it!<br><b>Zoriana:</b> My idea isn’t a dream. I’m making an app for our robot club. If it works, I’ll show it at the science fair in May.</p><p>Whose idea is a real plan?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><b>Daryna:</b> If I could invent anything, I’d invent a phone that never needs charging.</p><p><b>Zoriana:</b> If it works, I’ll show it at the science fair.</p><p>Which sentence is about a real, possible situation?</p>`,
          opts: [
            "Daryna’s sentence",
            "Zoriana’s sentence",
            "both sentences"
          ],
          correct: 1,
          fbTitle: "Let’s see.",
          fbOk: "Good guess!",
          fbText: "Zoriana is really making an app: <b>If it works, I’ll show it</b> is a real, possible situation. Daryna’s phone is a dream: <b>If I could…, I’d…</b>."
        },
        {
          type: "info",
          title: "Real or imagined?",
          body: `<ul><li>Real, possible → <b>if</b> + Present Simple, <b>will</b> + verb:<br>If my app <b>works</b>, I<b>’ll show</b> it at the fair.</li><li>Imagined, unlikely or impossible now → <b>if</b> + Past Simple, <b>would</b> + verb:<br>If I <b>had</b> a robot, it <b>would tidy</b> my room.</li></ul><p>In the Second Conditional, the Past Simple isn’t about the past. It means “not real”. Compare:</p><ul><li>Mum has promised me a laptop: If I <b>get</b> it, I<b>’ll install</b> a coding app.</li><li>I have no money for a laptop: If I <b>had</b> one, I<b>’d install</b> a coding app.</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Is it a real, possible situation or an imagined one?</p>`,
          bins: ["Real, possible", "Imagined"],
          items: [
            ["If my app works, I’ll show it at the fair.", 0],
            ["If it rains tomorrow, we’ll stay inside.", 0],
            ["If you need help, call me.", 0],
            ["If I had a robot, it would tidy my room.", 1],
            ["If I were a famous inventor, I’d share my ideas with everyone.", 1],
            ["If phones could fly, we’d never lose them.", 1]
          ],
          hint: "Look at the verbs: Present Simple and will, or Past Simple and would?",
          fbOk: "Exactly.",
          fbBad: "if + Present Simple → real. if + Past Simple, would → imagined.",
          fbText: "Real: <b>works … ’ll show</b>, <b>rains … ’ll stay</b>, <b>need … call</b>. Imagined: <b>had … would tidy</b>, <b>were … ’d share</b>, <b>could fly … ’d never lose</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Andrii’s parents have promised him a new phone for his birthday. If he {*gets|got} it, he’ll give his old phone to his sister Sofiia. Bohdan has no money for a robot. If he {*had|has} a robot, it would do his chores. If I knew how to code, I {*would make|will make} my own game.",
          hint: "Is it a real plan or a dream? Look at will or would in the other part.",
          fbOk: "Well done!",
          fbBad: "Real → if + Present Simple, will. Imagined → if + Past Simple, would.",
          fbText: "A real promise: If he <b>gets</b> it, he’ll… A dream: If he <b>had</b> a robot, it would… If I knew…, I <b>would make</b>… – no <i>will</i> with an imagined situation."
        },
        {
          type: "info",
          title: "would, could, might",
          body: `<p>In an imagined situation, the result part can also change:</p><ul><li><b>would</b> → the result: If I had a robot, it <b>would tidy</b> my room.</li><li><b>could</b> = would be able to: If I had a 3D printer, I <b>could make</b> my own phone case.</li><li><b>might</b> = would perhaps: If schools had robot teachers, pupils <b>might learn</b> faster.</li></ul><p>In the <i>if</i> part: <b>If I could</b> + verb = if I were able to: If I <b>could invent</b> anything, I’d…</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Bohdan: “If I had more free time, I <b>might</b> learn to code.”</p><p>What does he mean?</p>`,
          opts: [
            "He hasn’t got much free time. With more time, perhaps he would learn to code.",
            "He has a lot of free time, so he is learning to code.",
            "He will certainly learn to code next year."
          ],
          correct: 0,
          hint: "had → real or imagined? might → sure or perhaps?",
          fbOk: "Right.",
          fbBad: "If I had… is imagined: he hasn’t got much time. might = would perhaps.",
          fbText: "<b>If I had more free time</b> → he hasn’t got it. <b>might learn</b> = perhaps he would learn. He isn’t sure."
        },
        {
          type: "info",
          title: "Imagined: if … not",
          body: `<p>Zoriana has a laptop. She imagines life without it:</p><ul><li>If I <b>didn’t have</b> a laptop, I couldn’t do my coding course.</li></ul><p>For the opposite of real life, use <b>if</b> + the Past Simple with <b>not</b>: <i>didn’t have</i>, <i>weren’t</i>. No <i>would</i> in the <i>if</i> part. Not: <s>If I wouldn’t have a laptop</s>.</p><p><b>unless</b> (“except if”) is best for real, possible situations: I’ll use the school computer <b>unless</b> my laptop is ready.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Daryna has a phone, and she uses it all the time. She imagines a day without it.</p>`,
          opts: [
            "If I wouldn’t have my phone, I’d feel lost.",
            "If I don’t have my phone, I’d feel lost.",
            "If I didn’t have my phone, I’d feel lost."
          ],
          correct: 2,
          hint: "It’s imagined: the opposite of real life. Which form comes after if?",
          fbOk: "Yes!",
          fbBad: "Daryna has a phone. This day is imagined.",
          fbText: "<b>If I didn’t have my phone, I’d feel lost.</b> Imagined → if + Past Simple. No <i>would</i> in the <i>if</i> part, and no Present Simple with <i>I’d</i>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write Andrii’s answer to Ms Lysenko. Start with <b>if</b>.</p>`,
          tiles: ["if", "I", "could", "invent anything,", "I’d", "make", "a flying bike"],
          extra: ["can"],
          answer: "If I could invent anything, I’d make a flying bike.",
          hint: "If I could + verb…, I’d + verb.",
          fbOk: "Well done!",
          fbBad: "It’s imagined: could, not can.",
          fbText: "<b>If I could invent anything, I’d make a flying bike.</b> Imagined → <i>could</i>, and <i>I’d</i> = I would."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Kyrylo loves history, but he imagines a different life. Use the verb <i>be</i>.</p>`,
          before: "If I",
          after: "a scientist, I’d work on clean energy.",
          answer: ["were", "was"],
          hint: "Imagined → if + the Past Simple of be.",
          fbOk: "Well done!",
          fbBad: "After if in an imagined situation: the Past Simple of be.",
          fbText: "If I <b>were</b> a scientist… <b>Was</b> is correct too in everyday English, but <b>were</b> is more usual in writing."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes about her idea for the class blog.</p>`,
          text: "If I {*could|can} invent anything, I’d make a phone that never needs charging. If phones never {*needed|need} charging, people wouldn’t need chargers, and we {*might|might to} save a lot of electricity. That’s only a dream, of course. But my real project for the science fair is almost ready. If it {*works|worked}, I’ll show it to the class next week.",
          hint: "A dream → Past Simple and would. A real plan → Present Simple and will.",
          fbOk: "Brilliant!",
          fbBad: "Which part is a dream, and which is a real plan?",
          fbText: "Dream: If I <b>could</b>…, if phones <b>needed</b>… (with <i>wouldn’t</i> in the other part), we <b>might</b> save… Real plan: If it <b>works</b>, I’ll show it."
        }
      ],
      outro: {
        text: "If it works, I’ll…; if I could invent anything, I’d…: now you can tell a real plan from a dream.",
        learned: [
          "Tell real situations from imagined ones: If it works, I’ll… / If I had…, I’d…",
          "Use could and might in imagined results.",
          "Imagine the opposite of real life: If I didn’t have…, I’d…"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s6l5",
      title: "If I were you, I’d…: giving advice",
      short: "Giving advice",
      icon: "users",
      status: "verified",
      why: "Friends often ask for help with tech problems. Learn to give advice with If I were you and to react to advice.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Tech problems?",
          body: `<p class="lead">The penfriend club has a group chat called “Tech help”.</p><p><b>Mariia:</b> My phone is full! I can’t take any more photos.<br><b>Emma:</b> If I were you, I’d back up your photos and delete the old videos.<br><b>Bohdan:</b> I play games on my phone till midnight, and I’m always tired.<br><b>Taras:</b> I used to do that too. If I were you, I’d leave the phone in the kitchen at night.<br><b>Daryna:</b> I got a strange message: “Your account is blocked. Send us your password.”<br><b>Andrii:</b> I wouldn’t answer if I were you. It’s a scam!</p><p>What are Emma, Taras and Andrii doing?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras: “<b>If I were you</b>, I’d leave the phone in the kitchen at night.”</p><p>Why does Taras say this?</p>`,
          opts: [
            "to give Bohdan advice",
            "to tell a story about the past",
            "to ask Bohdan for help"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Taras imagines he is in Bohdan’s situation and says what he would do. <b>If I were you, I’d…</b> gives advice."
        },
        {
          type: "info",
          title: "If I were you, I’d…",
          body: `<ul><li>Advice → <b>If I were you, I’d</b> + verb:<br>If I were you, I’d back up your photos.</li><li>Negative advice → <b>I wouldn’t</b> + verb:<br>If I were you, I <b>wouldn’t</b> answer.</li><li>The <i>if</i> part can come second, with no comma:<br>I wouldn’t answer <b>if I were you</b>.</li></ul><p>In everyday speech, some people say <i>If I was you</i>, but <b>were</b> is the usual form, especially in writing.</p><p>Not: <s>If I would be you</s>, <s>If I were you, I’ll…</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Mariia, if I {*were|would be|am} you, I {*would delete|will delete|deleted} the old videos. Daryna, I {*wouldn’t|won’t|don’t} open that link if I were you.",
          hint: "If I + the Past Simple of be, then would or wouldn’t + verb.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: If I were you, I’d… / I wouldn’t…",
          fbText: "If I <b>were</b> you, I <b>would delete</b>… I <b>wouldn’t</b> open that link if I were you. It’s imagined, so no <i>will</i>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the problems and the advice.",
          left: ["My phone is full.", "I’m always tired in the morning.", "Someone wants my password.", "I always lose my homework when my laptop crashes."],
          right: ["If I were you, I’d delete the old videos.", "I’d leave the phone in the kitchen at night if I were you.", "I wouldn’t answer if I were you.", "If I were you, I’d back up your files every day."],
          hint: "Which advice helps with sleep? Which one is about a strange message?",
          fbOk: "Well done!",
          fbBad: "Read each problem. Which advice helps with it?",
          fbText: "Full phone → <b>delete the old videos</b>. Tired → <b>phone in the kitchen</b>. Password → <b>don’t answer</b>. Lost homework → <b>back up</b> files."
        },
        {
          type: "info",
          title: "Asking for advice and reacting",
          body: `<p><b>Asking</b></p><ul><li><b>What would you do if you were me?</b></li><li>What should I do? Do you think I should…?</li></ul><p><b>Reacting: yes</b></p><ul><li>That makes sense. / Good idea, I’ll try that.</li><li>I hadn’t thought of that! → a new idea for me</li></ul><p><b>Reacting: no, politely</b></p><ul><li>Thanks, but I’ve already tried that.</li><li>I’m not sure that would work for me.</li></ul>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Mariia asks Emma for more advice.</p>`,
          tiles: ["What", "would", "you", "do", "if", "you", "were", "me?"],
          extra: ["will"],
          keepCase: true,
          answer: "What would you do if you were me?",
          hint: "What + would + you + do…? Then the if part.",
          fbOk: "Yes!",
          fbBad: "It’s imagined: would, not will.",
          fbText: "<b>What would you do if you were me?</b> Imagined → <i>would</i> and <i>were</i>."
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Emma: “If I were you, I’d delete the old videos.” How can Mariia react?</p>`,
          bins: ["yes to the advice", "no to the advice"],
          items: [
            ["That makes sense.", 0],
            ["Good idea, I’ll try that.", 0],
            ["I hadn’t thought of that!", 0],
            ["Thanks, but I’ve already tried that.", 1],
            ["I’m not sure that would work for me.", 1]
          ],
          hint: "Find the words but and not sure.",
          fbOk: "Right.",
          fbBad: "Some answers say thanks, but then say no.",
          fbText: "Yes: <b>That makes sense</b>, <b>I’ll try that</b>, <b>I hadn’t thought of that</b>. No, politely: <b>I’ve already tried that</b>, <b>I’m not sure that would work</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Bohdan:</b> I’m always tired. What would you do if you were me?<br><b>Taras:</b> …<br><b>Bohdan:</b> That makes sense. I’ll try it tonight.</p><p>What does Taras say?</p>`,
          opts: [
            "If I am you, I’ll switch off my phone at ten.",
            "If I were you, I’d switch off my phone at ten.",
            "If I were you, I switched off my phone at ten."
          ],
          correct: 1,
          hint: "If I were you + I’d + verb.",
          fbOk: "Exactly.",
          fbBad: "Only one answer has were and would.",
          fbText: "<b>If I were you, I’d switch off my phone at ten.</b> Not <s>If I am you, I’ll</s>, not <s>I switched</s>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii gives Daryna negative advice.</p>`,
          before: "It’s a scam. I",
          after: "send them your password if I were you.",
          answer: ["wouldn’t", "would not", "shouldn’t", "should not"],
          contractions: true,
          hint: "Negative advice with if I were you: I … + verb.",
          fbOk: "Well done!",
          fbBad: "Look at “If I were you, I’d…” again: the negative form.",
          fbText: "I <b>wouldn’t</b> send them your password if I were you. In British English, <i>I shouldn’t … if I were you</i> is correct too. Never send your password to anyone!"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Mariia in the “Tech help” chat.</p>`,
          text: "Mariia, if I {*were|would be} you, I’d back up your photos first. Then I {*would delete|will delete} the old videos. I {*wouldn’t|won’t} buy a new phone if I were you: yours is only two years old. What would you do if you {*were|are} me?",
          hint: "If I were you, I’d… / I wouldn’t… In the question: if you … me?",
          fbOk: "Well done!",
          fbBad: "It’s imagined advice: were and would, no will.",
          fbText: "If I <b>were</b> you, I’d…; I <b>would delete</b>…; I <b>wouldn’t</b> buy…; What would you do if you <b>were</b> me? No <i>would</i> in the if part, no <i>will</i> in the other part."
        }
      ],
      outro: {
        text: "If I were you, I’d…; That makes sense: now you can give advice and react to it.",
        learned: [
          "Give advice: If I were you, I’d… / I wouldn’t… if I were you.",
          "Ask for advice: What would you do if you were me?",
          "React to advice: That makes sense. / Thanks, but I’ve already tried that."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s6l6",
      title: "How science changes society: for and against",
      short: "For and against",
      icon: "scale",
      status: "verified",
      why: "Technology brings good and bad things. Read an essay for and against, and learn to argue your point of view.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Better or worse?",
          body: `<p class="lead">The penfriend club has an essay competition: “Has technology made our lives better? Give reasons for and against.”</p><p>Oksana writes an essay. She wants to show both sides and then give her own view.</p><p>Before you read: which words help a writer show the good and the bad sides?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “The main <b>advantage</b> of technology is that it connects people.”</p><p>What is an advantage?</p>`,
          opts: [
            "a good side of something",
            "a bad side of something",
            "a new machine"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>advantage</b> is a good side. Its opposite is a <b>disadvantage</b>: a bad side."
        },
        {
          type: "info",
          title: "Words for and against",
          body: `<ul><li>an <b>ad<u>van</u>tage</b> ↔ a <b>dis</b>ad<u>van</u>tage</li><li>a <b><u>ben</u>efit</b> → a good result: Another benefit is that…</li><li><b>The main advantage is that</b> … → the most important good point</li><li><b>One disadvantage is that</b> … → a bad point</li><li><b>Some people argue that</b> … → other people’s opinion with reasons</li><li><b>It depends on</b> … → the answer isn’t the same in every situation</li></ul><p>Remember: in my view, on the other hand, what’s more, to sum up.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["Some people argue that…", "The main advantage is that…", "One disadvantage is that…", "It depends on…"],
          right: ["gives other people’s opinion", "gives the most important good point", "gives a bad point", "says the answer isn’t the same in every situation"],
          hint: "Which phrase is about other people? Which one is about a bad side?",
          fbOk: "Well done!",
          fbBad: "Look at “Words for and against” again.",
          fbText: "<b>Some people argue that</b> – other people’s opinion. <b>The main advantage</b> – the most important good point. <b>One disadvantage</b> – a bad point. <b>It depends on</b> – not the same in every situation."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Has technology made our lives better? Part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>Has technology made our lives better? Some people argue that phones and computers make us lonely and lazy. In my view, the advantages are bigger than the disadvantages, but only if we use technology wisely.</i></p><p><i>The main advantage is that technology connects people. I live in a village near Poltava, and my friend Emma lives in England. Many years ago, friends like us could only write letters. Now we send each other voice messages almost every day, and on Sundays we have a video call. Even my grandma Hanna learnt to make video calls last year. Now she often talks to her old school friends. Technology also helps us learn: I can watch a science video or ask my teacher a question in the class chat.</i></p><p>What is the main advantage of technology for Oksana?</p>`,
          opts: [
            "It makes people lazy.",
            "It helps people write better letters.",
            "It helps people keep in touch."
          ],
          correct: 2,
          hint: "Find The main advantage is that… in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence that starts with The main advantage.",
          fbText: "For Oksana, technology <b>connects people</b>: she keeps in touch with Emma, and Grandma talks to her friends. <i>Lazy</i> is what <b>some people argue</b>, not Oksana’s view."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Has technology made our lives better? Part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>Another benefit is that technology makes many things faster and easier. In 2020, Ukraine launched Diia, a government app and website. Now people can keep digital documents in it and use many services online. In villages like mine, this can save a lot of time: you don’t always need to travel to the city. Doctors can also talk to patients in a video call.</i></p><p><i>On the other hand, technology has some serious disadvantages. Many teenagers spend hours on social media, and they don’t get enough sleep. Fake news can go viral in minutes, and some people believe everything they read online. Some people also share too much personal information online. What’s more, if a phone crashes or the battery dies, some of us don’t know what to do!</i></p><p>Which disadvantages does Oksana give?</p>`,
          opts: [
            "Some teenagers don’t sleep enough.",
            "Fake news can spread very fast.",
            "People in villages have to travel to the city more.",
            "Some people can’t manage without a working phone."
          ],
          correct: [0, 1, 3],
          hint: "Read the second paragraph, after On the other hand.",
          fbOk: "Exactly.",
          fbBad: "Diia is a benefit: people travel less, not more.",
          fbText: "The disadvantages: teenagers <b>don’t get enough sleep</b>, fake news <b>goes viral</b>, and some people <b>don’t know what to do</b> without their phone. With Diia, people in villages travel <b>less</b>: that’s a benefit."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Has technology made our lives better? Part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>So what should we do? If I were a head teacher, I’d teach every pupil how to check sources and spot fake news. And if families switched off their phones for an hour every evening, they might sleep better and talk to each other more.</i></p><p><i>In the future, technology is likely to change our lives even more. Robots will probably do many boring jobs, and doctors might use smart machines to find illnesses earlier. But we will have to learn new skills to work with these machines. To sum up, technology itself isn’t good or bad. It depends on how we use it. If we use it wisely, it will make our lives better.</i></p><p>What would Oksana do if she were a head teacher?</p>`,
          opts: [
            "She would switch off all the phones at school.",
            "She would teach pupils to check sources.",
            "She would buy robots for the school."
          ],
          correct: 1,
          hint: "Find If I were a head teacher in the text.",
          fbOk: "Well done!",
          fbBad: "Read the second sentence again.",
          fbText: "<b>If I were a head teacher, I’d teach every pupil how to check sources</b> and spot fake news. Switching off phones is her idea for families, not for school."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Think about all three parts of Oksana’s essay. What is her main idea?</p>`,
          opts: [
            "Technology isn’t good or bad: it depends on how we use it.",
            "Technology makes people lonely, so we should use it less.",
            "In the future, robots will do all our jobs."
          ],
          correct: 0,
          hint: "Look at the end of the essay, after To sum up.",
          fbOk: "Exactly.",
          fbBad: "What does Oksana say after To sum up?",
          fbText: "Oksana shows both sides and finishes: <b>it depends on how we use it</b>. Lonely is what some people argue; robots are only one idea about the future."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about online lessons.</p>`,
          text: "The main {*advantage|disadvantage} of online lessons is that you can study from home. One {*disadvantage|advantage} is that you can’t see your friends. {*Some people argue|It depends on} that online lessons are boring. In my view, it {*depends|argues} on the teacher.",
          hint: "A good side or a bad side? Other people’s opinion → …",
          fbOk: "Yes!",
          fbBad: "Studying from home is good; not seeing friends is bad.",
          fbText: "The main <b>advantage</b> – study from home. One <b>disadvantage</b> – no friends. <b>Some people argue</b> that… – other people’s view. It <b>depends</b> on the teacher."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Daryna writes a short essay: “Are smartphones good for teenagers?”</p>`,
          items: [
            "Some people argue that smartphones are bad for teenagers, but in my view they are useful.",
            "The main advantage is that you can keep in touch with your family.",
            "Another benefit is that you can find information quickly.",
            "On the other hand, many teenagers spend too much time on their phones.",
            "To sum up, smartphones are good for teenagers if they use them wisely."
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "Some people argue… → The main advantage… → Another benefit… → On the other hand… → To sum up…",
          fbOk: "Well done!",
          fbBad: "Start with the question and your view. The good sides, then the bad side, then the end.",
          fbText: "Your view → <b>the main advantage</b> → <b>another benefit</b> → <b>on the other hand</b> (a bad side) → <b>to sum up</b>."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Start your own essay with the most important good point.</p>`,
          tiles: ["the main", "advantage", "is", "that", "technology", "connects", "people"],
          extra: ["connect"],
          answer: ["The main advantage is that technology connects people.", "That technology connects people is the main advantage."],
          hint: "The main advantage is that + who or what + verb.",
          fbOk: "Brilliant!",
          fbBad: "technology → one thing, so the verb has -s.",
          fbText: "<b>The main advantage is that technology connects people.</b> <i>Technology</i> is one thing, so: <i>connects</i>."
        }
      ],
      outro: {
        text: "The main advantage is that…; on the other hand…; it depends on…: now you can look at both sides of technology and argue your view.",
        learned: [
          "Read an essay for and against and find its main idea.",
          "Talk about advantages, disadvantages and benefits.",
          "Argue your view: Some people argue that…, In my view…, It depends on…",
          "Talk about the future: is likely to, will probably, might."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s6l7",
      title: "Tech Week: the club magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the magazine?",
          body: `<p class="lead">The penfriend club is making a magazine for Tech Week: “Science and technology”.</p><p>Check the pages before they go online. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the words and the descriptions.",
          left: ["a webcam", "a printer", "software", "back up"],
          right: ["a small camera for video calls", "puts your work on paper", "the programs and apps on a computer", "make an extra copy of your files"],
          pre: "e10s6l1",
          hint: "Which one is a verb? Which one can’t you touch?",
          fbOk: "Right.",
          fbBad: "Which one is a camera? Which one is about paper?",
          fbText: "a <b>webcam</b> – a camera; a <b>printer</b> – paper; <b>software</b> – programs and apps; <b>back up</b> – an extra copy."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Before you share a story, check the {*source|webcam|notification}. Some false stories go {*viral|reliable|fake} in minutes. When I’m writing to my teacher about a project, I send {*an email|a voice message|a group chat}.",
          pre: "e10s6l2",
          hint: "where information comes from → …; more formal → …",
          fbOk: "Yes!",
          fbBad: "Look at the words for news and for keeping in touch.",
          fbText: "Check the <b>source</b>. Stories go <b>viral</b> → spread very fast. To a teacher → a more formal <b>email</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>What is Diia?</p>`,
          opts: [
            "a Ukrainian government app and website",
            "a social media website for teenagers",
            "a news website from the UK"
          ],
          correct: 0,
          pre: "e10s6l2",
          hint: "Remember what Grandma Hanna asked about.",
          fbOk: "Exactly.",
          fbBad: "Who launched Diia in 2020?",
          fbText: "<b>Diia</b> is a Ukrainian <b>government app and website</b>, launched in 2020. People keep digital documents in it and use services online."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "If the Wi-Fi at school {*doesn’t work|don’t work|didn’t work}, we’ll make the magazine at Andrii’s flat. We’ll finish it on Friday unless the laptop {*crashes|doesn’t crash|will crash}.",
          pre: "e10s6l3",
          hint: "After if and unless: the Present Simple. unless = if … not.",
          fbOk: "Well done!",
          fbBad: "Wi-Fi is one thing, so: doesn’t. No will after unless, and no not after unless.",
          fbText: "If the Wi-Fi <b>doesn’t work</b>, we’ll… Unless the laptop <b>crashes</b> = if it doesn’t crash."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Which sentence shows that Taras isn’t sure?</p>`,
          opts: [
            "If I finish my photos, I’ll send them tonight.",
            "If I finish my photos, I might send them tonight.",
            "I sent my photos last night."
          ],
          correct: 1,
          pre: "e10s6l3",
          hint: "Which word means maybe?",
          fbOk: "Right.",
          fbBad: "will → sure; might → maybe.",
          fbText: "<b>I might send</b> → maybe, Taras isn’t sure. <i>I’ll send</i> → he is sure."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Zoriana’s app is almost ready. If it {*works|worked}, she’ll show it at the science fair. Daryna’s phone that never needs charging is only a dream. If phones never {*needed|need} charging, we wouldn’t need chargers. If Bohdan had a robot, it {*would|will} do his homework.",
          pre: "e10s6l4",
          hint: "A real plan → Present Simple and will. A dream → Past Simple and would.",
          fbOk: "Exactly.",
          fbBad: "Which one is a real plan, and which one is a dream?",
          fbText: "Real: If it <b>works</b>, she’ll show it. Dreams: If phones never <b>needed</b> charging…; If Bohdan had a robot, it <b>would</b> do…"
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Find the mistake.",
          body: `<p>Bohdan has a phone. One part of his sentence for the magazine is wrong.</p>`,
          text: "If I [wouldn’t have] a phone, I [!would read] more books.",
          pre: "e10s6l4",
          hint: "Bohdan has a phone. This is imagined. What comes after if?",
          fbOk: "Good eye!",
          fbBad: "In the if part of an imagined situation: the Past Simple, no would.",
          fbText: "<b>If I didn’t have</b> a phone, I would read more books. In the <i>if</i> part: the Past Simple, no <i>would</i>."
        },
        {
          type: "word",
          sk: "func",
          eyebrow: "Task 8",
          title: "Write the missing word.",
          body: `<p>Mariia writes to the “Tech help” page.</p>`,
          before: "If I",
          after: "you, I’d back up your photos every week.",
          answer: ["were", "was"],
          pre: "e10s6l5",
          hint: "If I … you, I’d… – the verb be.",
          fbOk: "Well done!",
          fbBad: "Look at the phrase for advice: If I … you, I’d…",
          fbText: "<b>If I were you</b>, I’d… gives advice. Some people say <i>was</i> in everyday speech, but <b>were</b> is the usual form."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 9",
          title: "Read and choose.",
          body: `<p><i>Some people argue that robots will take our jobs. In my view, that isn’t the whole story. One disadvantage is that some jobs will disappear. On the other hand, new jobs will appear: someone has to build and repair the robots. To sum up, it depends on how well schools prepare us. – Zoriana</i></p><p>What is Zoriana’s view?</p>`,
          opts: [
            "Robots will take everyone’s job.",
            "Nobody will need to repair robots.",
            "Some jobs will disappear, but new jobs will appear too."
          ],
          correct: 2,
          pre: "e10s6l6",
          hint: "Find One disadvantage and On the other hand.",
          fbOk: "Brilliant!",
          fbBad: "Read the sentences after In my view.",
          fbText: "Zoriana shows both sides: some jobs <b>will disappear</b>, but <b>new jobs will appear</b>. That robots will take our jobs is what <b>some people argue</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about computers and modern communication, real and imagined situations, give advice and argue your view about technology.",
        learned: [
          "Talk about computer equipment and modern ways to communicate.",
          "Use real and imagined conditions with will, might, could and would.",
          "Give advice with If I were you, I’d…",
          "Argue for and against: the main advantage, on the other hand, it depends on."
        ]
      }
    }
  ]
});
