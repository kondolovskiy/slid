/* Слід · Англійська мова, 9 клас — «Let’s discuss: agreeing and disagreeing» (e9s9)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: мовленнєві функції — вести дискусію, привертаючи
   увагу співрозмовника; висловлювати переконання, думки, згоду чи незгоду (PDF с. 33, розд. 5.2.3) — на матеріалі тем
   класу (e9s1–e9s8); граматика B1 (с. 34–35): discourse markers (sequencing, adding, contrasting); although, so, so that
   (subordinated: contrast, result, purpose); both … and, either … or; attitude adverbs (personally, honestly, actually);
   повторення — and, but, or (e4s3l4), Why? Because… (e4s5l6), prefer … because (e6s4l2); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Словник і граматика — Cambridge Dictionary (CD): up to a point (B2, «partly»), couldn’t agree more, see / take
   someone’s point, personally (B1, «used when you give your opinion»), actually (B1, surprise; correcting), firstly (B2 →
   у розділі First, Firstly лише згадано), so that — «We often leave out that after so in informal situations»
   (https://dictionary.cambridge.org/grammar/british-grammar/so-that), although — підрядне речення потребує головного
   (https://dictionary.cambridge.org/grammar/british-grammar/although-or-though).
   Пастки другої правильної відповіді: «That’s true, but…» — часткова згода (окремий кошик «partly agree», не «agree» і
   не «don’t agree»); so / so that для мети — обидва правильні (CD), тож у пропусках не протиставляються; therefore не
   вводиться й не є пасткою; although / but / however — у пропусках їх розводить пунктуація (кома в тексті, нове
   речення), але but і although після коми в одному пропуску не стоять; Also / In addition — ніколи не в одному пропуску;
   either … or — лише після підмета (We can either…), без узгодження дієслова; both … and — у build усі порядки в ключі.
   Теми дискусій — нейтральні (місто чи село, музика на перервах, еко-день, клуби, шахи, книжки), без політики й релігії.
   Нових фактичних тверджень немає: усе — думки героїв. Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл. (memory/short/inbox.md, NOTE (герої)), 15 років; Dmytro 11. Нових героїв немає.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s9). 7 уроків (6 + фінал). Будова — за e9s4 (verified).
   Перевірка: node tools/validate.mjs --section e9s9 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s9",
  grade: 9,
  weeks: [33, 35],
  title: "Let’s discuss: agreeing and disagreeing",
  why: "To give your opinion and join a discussion politely. And to agree, disagree and link your ideas.",
  requires: ["e4s3l4", "e4s5l6", "e6s4l2", "e9s2l6", "e9s3l6", "e9s4l6", "e9s8l4"],
  meta: { author: "writer-e9s9", created: "2026-11-26", factcheck: "verifier-e9s9 (reports/verify/write-eng-g9-e9s9.md)", teacher: null },
  badges: [
    { id: "e9s9boss", name: "Great debater", icon: "trophy", desc: "Finish the final lesson “Let’s discuss: agreeing and disagreeing”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s9l1",
      title: "I think…, In my opinion…: giving opinions",
      short: "Opinions",
      icon: "voice",
      status: "verified",
      why: "Say what you think and ask other people for their opinion.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "A city or a village?",
          body: `<p class="lead">The penfriend club asks: “A city or a village: where is it better to live?”</p><p><b>Oksana:</b> Personally, I love village life. It’s quiet.<br><b>Andrii:</b> In my opinion, a city is more interesting: there are museums and clubs.<br><b>Taras:</b> Honestly, I’m not sure. I love Lviv and the mountains.<br><b>Emma:</b> I think a small town is best. Actually, my town has a cinema too!</p><p>How do they show it’s their opinion?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana starts with <b>Personally</b>: <i>Personally, I love village life.</i> Why?</p>`,
          opts: [
            "to show it’s her own opinion: other people may think differently",
            "to say it’s a fact for everyone",
            "to say she’s talking to one person"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Personally</b> shows it’s Oksana’s own opinion. Other people may not agree. The next screen has more ways to give your opinion."
        },
        {
          type: "info",
          title: "Giving your opinion",
          body: `<ul><li><b>I think</b> (that) … / <b>I don’t think</b> …</li><li><b>In my opinion</b>, …</li><li><b>Personally</b>, I … → it’s my opinion, maybe not yours</li><li><b>I’m sure</b> (that) … → I have no doubt</li><li>ask → <b>What do you think?</b> / <b>What’s your opinion?</b></li><li>say why → … <b>because</b> …</li></ul><p>Not: <s>I am thinking a city is better.</s> → I think a city is better.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Andrii answers Emma in the penfriend club.</p>`,
          text: "I {*think|thinks|am thinking} a city is more interesting. {*In|On|At} my opinion, Kyiv has great museums. I’m {*sure|agree|opinion} you’d love them. What {*do|are|does} you think, Emma?",
          hint: "I … ; … my opinion; I’m … (that); What … you think?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Giving your opinion” again.",
          fbText: "I <b>think</b> (not <s>am thinking</s>), <b>in</b> my opinion, I’m <b>sure</b>, What <b>do</b> you think?"
        },
        {
          type: "pick",
          sk: "func",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s post is wrong.</p>`,
          text: "[On] my opinion, a village is the [!best] place for a dog. What do you [!think] about it?",
          hint: "Look at the start: … my opinion.",
          fbOk: "Good eye!",
          fbBad: "Which word goes before my opinion?",
          fbText: "Say: <b>In</b> my opinion, a village is the best place for a dog. Not <s>On my opinion</s>."
        },
        {
          type: "info",
          title: "Personally, honestly, actually",
          body: `<ul><li><b>Personally</b>, … → this is my opinion: <i>Personally, I prefer villages.</i></li><li><b>Honestly</b>, … → I’m telling you the truth: <i>Honestly, I’m not sure.</i></li><li><b>Actually</b>, … → in fact; often a surprise or “that’s not right”:<br><i>“Your town has nothing!” – “Actually, it has a cinema.”</i></li></ul><p><u>per</u>sonally, <u>hon</u>estly, <u>ac</u>tually</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["Personally, …", "Honestly, …", "Actually, …"],
          right: ["This is my opinion; you may think differently.", "I’m telling you the truth.", "In fact – maybe it’s a surprise for you."],
          hint: "Which word has person in it? Which word has honest in it?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Personally, honestly, actually” again.",
          fbText: "<b>Personally</b> – my opinion. <b>Honestly</b> – the truth. <b>Actually</b> – in fact, often a surprise."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+per|son|al|ly", "+hon|est|ly", "+ac|tu|al|ly", "o|+pin|ion"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "<u>per</u>sonally, <u>hon</u>estly, <u>ac</u>tually, o<u>pin</u>ion."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Andrii:</b> Your town is very small, Emma. There’s nothing to do there!</p><p>Emma thinks that isn’t right. What does she say?</p>`,
          opts: [
            "Personally, there’s a cinema and a sports centre.",
            "Actually, there’s a cinema and a sports centre.",
            "Honestly, I agree: there’s nothing to do."
          ],
          correct: 1,
          hint: "Which word means “in fact – that’s not right”?",
          fbOk: "Right.",
          fbBad: "Emma doesn’t agree, and she gives a fact.",
          fbText: "<b>Actually</b> – in fact, that’s not right. <i>Personally</i> is for opinions, not facts. With <i>I agree</i>, Emma agrees, but she doesn’t."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Andrii wants to know what Emma thinks.</p>`,
          before: "What’s your",
          after: ", Emma?",
          answer: ["opinion", "view"],
          hint: "In my … , a city is more interesting.",
          fbOk: "Well done!",
          fbBad: "Find it in the list: What’s your …?",
          fbText: "<b>What’s your opinion?</b> = What do you think? <i>View</i> is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers the posts.</p>`,
          text: "Andrii, I see why you love Kyiv. {*In|On|At} my opinion, cities are exciting. But I {*don’t think|am not thinking|not think} I could live there: it’s too noisy for me. {*Actually|Because|What}, Zelena Dolyna isn’t boring at all: we’ve got a river, a school and two farms! What do you {*think|opinion|agree}, Mariia?",
          hint: "… my opinion; I don’t …; in fact → ?; What do you …?",
          fbOk: "Brilliant!",
          fbBad: "Check: I don’t think…, and the word for “in fact”.",
          fbText: "<b>In</b> my opinion, I <b>don’t think</b>, <b>Actually</b> (in fact), What do you <b>think</b>?"
        }
      ],
      outro: {
        text: "I think…, In my opinion…, Personally…: now you can give your opinion and ask for other people’s.",
        learned: [
          "Give your opinion: I think…, In my opinion…, Personally…",
          "Ask for an opinion: What do you think? What’s your opinion?",
          "Use honestly and actually: Actually, my town has a cinema."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s9l2",
      title: "I agree, but…: agreeing and disagreeing politely",
      short: "Agree, disagree",
      icon: "scale",
      status: "verified",
      why: "Agree, partly agree and disagree politely. Talk about the idea, not the person.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Music in every break?",
          body: `<p class="lead">Taras’s school in Lviv has its own radio: Bright Radio. In the group chat, students discuss an idea.</p><p><b>Ostap:</b> I think Bright Radio should play music in every break.<br><b>Myroslava:</b> I couldn’t agree more! Music makes breaks more fun.<br><b>Taras:</b> That’s true, but some students want to read or talk quietly in the break.<br><b>Ms Kvitka:</b> I see your point, Taras. Let’s ask everyone.</p><p>Does Taras agree with Ostap?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras says: <i>That’s true, but some students want to read or talk quietly.</i> What does he mean?</p>`,
          opts: [
            "He agrees with all of Ostap’s idea.",
            "He agrees with part of it, but he has a different idea too.",
            "He doesn’t understand Ostap."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>That’s true, but…</b>: Taras agrees that music is fun, <b>but</b> he adds a different idea. He agrees with part of it. The next screen shows more phrases."
        },
        {
          type: "info",
          title: "Agree, partly agree, disagree",
          body: `<ul><li>agree → <b>I agree</b> (with you). <b>I couldn’t agree more!</b> (= I agree 100%) <b>Absolutely!</b></li><li>partly agree → <b>That’s true, but</b> … <b>I see your point, but</b> … <b>I agree up to a point.</b> (= partly)</li><li>disagree politely → <b>I’m not sure about that.</b> <b>I’m afraid I disagree.</b></li></ul><p>Not: <s>I am agree.</s> → I agree.</p><p>Talk about the idea, not the person.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Agree, partly agree or disagree?</p>`,
          bins: ["agree", "partly agree", "disagree"],
          items: [
            ["I couldn’t agree more!", 0],
            ["Absolutely!", 0],
            ["That’s true, but the music is too loud.", 1],
            ["I agree up to a point.", 1],
            ["I’m afraid I disagree.", 2],
            ["I’m not sure about that.", 2]
          ],
          hint: "Up to a point = partly. A sentence with but often says: yes, and another idea.",
          fbOk: "Well done!",
          fbBad: "Look at the list “Agree, partly agree, disagree” again.",
          fbText: "Agree: <i>I couldn’t agree more!</i>, <i>Absolutely!</i> Partly: <i>That’s true, but…</i>, <i>I agree up to a point.</i> Disagree: <i>I’m afraid I disagree.</i>, <i>I’m not sure about that.</i>"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Students write in the Bright Radio chat.</p>`,
          text: "I agree {*with|to|on} Myroslava: music is fun. But I {*don’t agree|am not agree|not agree} with Ostap about every break. I couldn’t agree {*more|better|much} with Taras: we need some quiet breaks. And I agree up to a {*point|place|time}: two music breaks a day are fine.",
          hint: "agree … a person; I don’t …; I couldn’t agree …; up to a …",
          fbOk: "Right.",
          fbBad: "Agree is a verb: I agree, I don’t agree – no am.",
          fbText: "agree <b>with</b> a person; I <b>don’t agree</b>; I couldn’t agree <b>more</b>; up to a <b>point</b> (= partly)."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Ostap:</b> Music in every break is a great idea!</p><p>You like music, but you think it’s too loud for every break. What do you say?</p>`,
          opts: [
            "I couldn’t agree more!",
            "Absolutely! Every break!",
            "That’s true, but it’s too loud for every break."
          ],
          correct: 2,
          hint: "You agree with part of the idea. Which phrase is for that?",
          fbOk: "Exactly.",
          fbBad: "You don’t agree 100%: you agree only partly.",
          fbText: "<b>That’s true, but…</b> – you partly agree and add your idea. <i>I couldn’t agree more!</i> and <i>Absolutely!</i> mean you agree 100%."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Myroslava’s message is wrong.</p>`,
          text: "I [am] agree with Ostap, but the music [!should] be a bit [!quieter].",
          hint: "Agree is a verb. Do we need be before it?",
          fbOk: "Good eye!",
          fbBad: "Look at the words before agree.",
          fbText: "Say: I <b>agree</b> with Ostap. Not <s>I am agree</s>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ms Kvitka understands Taras’s idea, but she doesn’t agree.</p>`,
          tiles: ["I", "see", "your point,", "but", "I", "don’t agree"],
          extra: ["am"],
          answer: "I see your point, but I don’t agree.",
          hint: "I see … , but I …",
          fbOk: "Yes!",
          fbBad: "No am: I don’t agree.",
          fbText: "<b>I see your point, but I don’t agree.</b> A polite way to say no: first show you understand."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p><b>Ostap:</b> Let’s play Ukrainian songs on Fridays!<br><b>Myroslava:</b> Yes! I agree 100%.</p>`,
          before: "Myroslava: I couldn’t agree",
          after: "!",
          answer: "more",
          hint: "I agree 100% = I couldn’t agree …",
          fbOk: "Well done!",
          fbBad: "Find the phrase for “I agree 100%” in the list.",
          fbText: "<b>I couldn’t agree more!</b> = I agree 100%."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Myroslava writes for School 5 News.</p>`,
          text: "Should Bright Radio play music in every break? Ostap thinks it should, and I {*agree|am agree|agreeing} with him. Taras agrees {*up to a point|very much|at all}: he says, “That’s {*true|truth|truly}, but some students want a quiet break.” Some teachers aren’t sure {*about|at|to} it. So now we play music in two breaks a day, and the other breaks are quiet.",
          hint: "I … with him; Taras agrees only partly; That’s …, but…; not sure … it.",
          fbOk: "Exactly.",
          fbBad: "Check: Taras agrees only partly. And I agree – no am.",
          fbText: "I <b>agree</b>; Taras agrees <b>up to a point</b> (partly); That’s <b>true</b>, but…; not sure <b>about</b> it."
        }
      ],
      outro: {
        text: "Agree, partly agree or disagree – politely: talk about the idea, not the person.",
        learned: [
          "Agree: I agree. I couldn’t agree more!",
          "Partly agree: That’s true, but… I agree up to a point.",
          "Disagree politely: I’m not sure about that. I’m afraid I disagree."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s9l3",
      title: "Sorry to interrupt, but…: joining a discussion",
      short: "Join in",
      icon: "users",
      status: "verified",
      why: "Join a discussion politely, ask others what they think and talk about two ideas with both … and, either … or.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What shall we do in June?",
          body: `<p class="lead">Zelena Dolyna, the eco club. Ms Marchenko asks: “What shall we do in June?”</p><p><b>Halyna:</b> We can either plant trees near the bridge or clean the river bank…<br><b>Oksana:</b> Sorry to interrupt, but can I say something? Let’s do both! <br><b>Halyna:</b> Good idea! Both Dmytro and I can bring bags.<br><b>Ms Marchenko:</b> What do you think, Dmytro?<br><b>Dmytro:</b> I agree. Can I add something? Let’s take photos.</p><p>How does Oksana join the discussion?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Halyna is talking, but Oksana wants to say something. What is polite?</p>`,
          opts: [
            "Stop talking! I want to speak.",
            "Be quiet, Halyna.",
            "Sorry to interrupt, but can I say something?"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Sorry to interrupt, but…</b> is polite: you say sorry first. The next screen has more phrases for a discussion."
        },
        {
          type: "info",
          title: "Joining a discussion",
          body: `<ul><li>you want to speak → <b>Excuse me, can I say something?</b> / <b>Sorry to interrupt, but</b> … / <b>Can I add something?</b></li><li>you ask a quiet person → <b>What do you think, Dmytro?</b> / <b>Do you agree, Halyna?</b></li><li>you haven’t finished → <b>Let me finish, please.</b></li><li>someone else can speak → <b>Sure, go ahead.</b></li></ul><p>to inter<u>rupt</u> → to start talking when another person is talking</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: [
            "You want to speak, but someone is talking:",
            "Your friend is quiet. You want her opinion:",
            "Someone starts talking, but you haven’t finished:",
            "You have finished. A friend asks, “Can I add something?”"
          ],
          right: [
            "Sorry to interrupt, but…",
            "What do you think, Halyna?",
            "Let me finish, please.",
            "Sure, go ahead."
          ],
          hint: "Which phrase gives your turn to another person? Which one keeps it?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Joining a discussion” again.",
          fbText: "Sorry to interrupt → you want to speak. What do you think? → ask a quiet friend. Let me finish → you haven’t finished. Go ahead → your friend can speak."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>You have finished your idea.</p><p><b>Halyna:</b> Can I add something?</p><p>What do you say?</p>`,
          opts: [
            "Let me finish, please.",
            "Sure, go ahead.",
            "Sorry to interrupt, but…"
          ],
          correct: 1,
          hint: "You have finished. Can Halyna speak now?",
          fbOk: "Right.",
          fbBad: "You have finished, so Halyna can speak.",
          fbText: "<b>Sure, go ahead.</b> You have finished, so you give Halyna her turn. <i>Let me finish</i> is for when you haven’t finished."
        },
        {
          type: "info",
          title: "Both … and, either … or",
          body: `<ul><li><b>both</b> X <b>and</b> Y → the two: <i><b>Both</b> Dmytro <b>and</b> I can bring bags.</i></li><li><b>either</b> X <b>or</b> Y → one of the two: <i>We can <b>either</b> plant trees <b>or</b> clean the river bank.</i></li></ul><p>both → and; either → or</p><p>Both Dmytro and Halyna <b>are</b> in the club: two people → are.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ms Marchenko writes to the eco club.</p>`,
          text: "{*Both|Either} Halyna and Dmytro want to help in June. We can meet either on Saturday {*or|and} on Sunday. We can {*either|both} start at nine or at ten. Both Oksana and Halyna {*are|is} going to take photos.",
          hint: "both → and; either → or; two people → are.",
          fbOk: "Exactly.",
          fbBad: "Check the pairs: both … and, either … or.",
          fbText: "<b>Both</b> … and (the two); either … <b>or</b>; <b>either</b> … or (one of the two); both Oksana and Halyna <b>are</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Halyna and Dmytro have the same idea: they want to make posters.</p>`,
          tiles: ["both", "Halyna", "and", "Dmytro", "want", "to make posters"],
          extra: ["wants"],
          answer: [
            "Both Halyna and Dmytro want to make posters.",
            "Both Dmytro and Halyna want to make posters.",
            "Halyna and Dmytro both want to make posters.",
            "Dmytro and Halyna both want to make posters."
          ],
          hint: "Both + two names + want…",
          fbOk: "Yes!",
          fbBad: "Two people → want, not wants.",
          fbText: "<b>Both Halyna and Dmytro want to make posters.</b> Two people → <i>want</i>. <i>Halyna and Dmytro both want…</i> is correct too."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Dmytro can’t come on both days. He can come on one of them.</p>`,
          before: "I can come either on Saturday",
          after: "on Sunday.",
          answer: "or",
          hint: "either … ?",
          fbOk: "Well done!",
          fbBad: "One of the two: either … ?",
          fbText: "either on Saturday <b>or</b> on Sunday: one of the two days."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about the meeting for the school website.</p>`,
          text: "At our last eco club meeting, Halyna said we could {*either|both} plant trees or clean the river bank. I said, “Sorry to {*interrupt|interrupting|interrupts}, but let’s do both!” Ms Marchenko asked Dmytro, “What do you {*think|opinion|agree}?” {*Both|Either} Dmytro and Halyna are bringing bags.",
          hint: "either … or; Sorry to + verb; What do you …?; both … and.",
          fbOk: "Right.",
          fbBad: "Check the pairs: either … or, both … and.",
          fbText: "<b>either</b> … or; Sorry to <b>interrupt</b>; What do you <b>think</b>?; <b>Both</b> Dmytro and Halyna."
        }
      ],
      outro: {
        text: "Sorry to interrupt, but…, What do you think?, Go ahead: now you can join a discussion and give others a turn.",
        learned: [
          "Join a discussion politely: Sorry to interrupt, but…",
          "Ask others and give them a turn: What do you think? Go ahead.",
          "Talk about two ideas: both … and, either … or."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s9l4",
      title: "Although, however, so: linking ideas",
      short: "Linking ideas",
      icon: "path",
      status: "verified",
      why: "Link your ideas: show a contrast, a result and a purpose.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Friends in different countries",
          body: `<p class="lead">Mariia writes about her online comic club.</p><p><i>Our comic club meets online every Friday. Although we live in different countries, we talk every week. However, I’ve never met Zofia in person. She lives in Poland, so we can’t meet easily. I’m saving money so that I can visit her next summer!</i></p><p>Although, however, so, so that: what do these words do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><i><b>Although</b> we live in different countries, we talk every week.</i></p><p>What does <b>although</b> show?</p>`,
          opts: [
            "the reason for something",
            "two different ideas: the second one is a bit of a surprise",
            "the result of something"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Different countries – and still they talk every week! <b>Although</b> shows a contrast, like <i>but</i>. The next screen shows how to use it."
        },
        {
          type: "info",
          title: "Although, but, however",
          body: `<p>Three ways to show a contrast:</p><ul><li><b>Although</b> it’s far, we talk every week.<br>We talk every week <b>although</b> it’s far.</li><li>It’s far, <b>but</b> we talk every week.</li><li>It’s far. <b>However</b>, we talk every week.</li></ul><p>Although: two parts in one sentence. However: often a new sentence + a comma.</p><p>Not: <s>Although it’s far, but we talk…</s> – only one of them.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Look at the commas and full stops.</p>`,
          text: "{*Although|However|But} Zofia lives in Poland, we talk every Friday. The club meets online. {*However|Although|Because}, we’d love to meet in person one day. It’s a long way, {*but|because|or} we chat every day.",
          hint: "Although + idea, + idea. A new sentence + comma → ? Idea, … idea.",
          fbOk: "Right.",
          fbBad: "Look at the rule “Although, but, however” again.",
          fbText: "<b>Although</b> Zofia lives in Poland, we talk… (two parts, one sentence). New sentence: <b>However</b>, we’d love… It’s a long way, <b>but</b> we chat every day."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Although the club is online, but it’s great fun.",
            "However the club is online, it’s great fun.",
            "Although the club is online, it’s great fun."
          ],
          correct: 2,
          hint: "Although or but – not both.",
          fbOk: "Good eye!",
          fbBad: "Only one contrast word in one sentence.",
          fbText: "<b>Although the club is online, it’s great fun.</b> No <i>but</i> after an although part. <i>However</i> usually starts a new sentence: <i>The club is online. However, it’s great fun.</i>"
        },
        {
          type: "info",
          title: "Because, so, so that",
          body: `<ul><li><b>because</b> → the reason: <i>We can’t meet easily <b>because</b> Zofia lives in Poland.</i></li><li><b>so</b> → the result: <i>Zofia lives in Poland, <b>so</b> we can’t meet easily.</i></li><li><b>so that</b> → the purpose (why you do it): <i>I’m saving money <b>so that</b> I can visit her.</i></li></ul><p>In a chat, people often say just <i>so</i> for a purpose: <i>…so I can visit her.</i></p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Reason, result or purpose?</p>`,
          bins: ["reason", "result", "purpose"],
          items: [
            ["I love the club because my friends are there.", 0],
            ["We can’t meet because she lives far away.", 0],
            ["Zofia draws very well, so she draws the pictures.", 1],
            ["The meeting was late, so I was tired the next day.", 1],
            ["I write in English so that everyone can read my comic.", 2],
            ["I’m saving money so that I can visit Zofia.", 2]
          ],
          hint: "because → reason; so → result; so that → purpose.",
          fbOk: "Well done!",
          fbBad: "Look at the rule “Because, so, so that” again.",
          fbText: "<b>because</b> + the reason; <b>so</b> + the result; <b>so that</b> + the purpose (why you do it)."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Reason or result?</p>`,
          text: "Zofia’s English is very good, {*so|because|although} she helps me with the words. I love Fridays {*because|so|however} we have our club meeting. Polina was ill last week, {*so|because|although} she missed the meeting.",
          hint: "The reason → because. The result → so.",
          fbOk: "Exactly.",
          fbBad: "Ask: is the second part the reason or the result?",
          fbText: "Her English is good, <b>so</b> she helps (result). I love Fridays <b>because</b> we meet (reason). Polina was ill, <b>so</b> she missed it (result)."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Roksolana’s message is wrong.</p>`,
          text: "The meeting [!finished] very late, [because] I was [!tired] the next day.",
          hint: "Being tired is the result of the late meeting.",
          fbOk: "Good eye!",
          fbBad: "Is the second part the reason or the result?",
          fbText: "Say: The meeting finished very late, <b>so</b> I was tired the next day. Being tired is the result."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia and Polina went to a comic shop in Kharkiv on a rainy day.</p>`,
          tiles: ["although", "it was raining,", "we", "went", "to the comic shop"],
          extra: ["but"],
          answer: "Although it was raining, we went to the comic shop.",
          hint: "Although + idea + comma, then the second idea.",
          fbOk: "Yes!",
          fbBad: "No but after an although part.",
          fbText: "<b>Although it was raining, we went to the comic shop.</b> Only one contrast word: no <i>but</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes to Zofia.</p>`,
          text: "Hi Zofia! {*Although|However|So} we’ve only met online, you’re one of my best friends. I’m saving money {*so that|although|but} I can visit you next summer. My parents say it’s a long trip. {*However|Although|Because}, they think it’s a great idea! The tickets are expensive, {*so|because|although} I’m going to save every month.",
          hint: "Although + idea, + idea; the purpose → ?; a new sentence + comma → ?; the result → ?",
          fbOk: "Well done!",
          fbBad: "Check: contrast, purpose or result?",
          fbText: "<b>Although</b> we’ve only met online, …; <b>so that</b> I can visit (purpose); <b>However</b>, they think… (new sentence); expensive, <b>so</b> I’m going to save (result)."
        }
      ],
      outro: {
        text: "Although, but, however for a contrast; because, so, so that for a reason, a result and a purpose.",
        learned: [
          "Show a contrast: Although it’s far, we talk every week.",
          "Start a new sentence with However and a comma.",
          "Give a reason, a result and a purpose: because, so, so that."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s9l5",
      title: "First, also, finally: putting your ideas in order",
      short: "In order",
      icon: "target",
      status: "verified",
      why: "Put your ideas in order so the reader can follow them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Why should you try chess?",
          body: `<p class="lead">Andrii writes for the school newspaper in Kyiv.</p><p><i><b>Why you should try chess</b><br>First, chess teaches you to think before you act. Also, it’s cheap: you only need a board and pieces. In addition, you can play online with people from other countries. However, some people think chess is boring. Actually, a good game is really exciting! Finally, a chess club is a great place to make friends.</i></p><p>Why does Andrii use First, Also and Finally?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "write",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii starts his ideas with <b>First</b>, <b>Also</b>, <b>In addition</b> and <b>Finally</b>. Why?</p>`,
          opts: [
            "to show that it all happened in the past",
            "to help the reader follow his ideas",
            "to ask the reader questions"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "These words put the ideas <b>in order</b>: the first idea, one more idea, the last idea. The reader can follow them easily."
        },
        {
          type: "info",
          title: "Putting your ideas in order",
          body: `<ul><li>the first idea → <b>First</b>, … (also <i>Firstly</i>, …)</li><li>one more idea → <b>Also</b>, … / <b>In addition</b>, …</li><li>the other side → <b>However</b>, …</li><li>the last idea → <b>Finally</b>, …</li></ul><p>After these words, use a comma.</p><p>in ad<u>di</u>tion, <u>fi</u>nally</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "write",
          title: "Match the halves.",
          left: ["First, …", "In addition, …", "However, …", "Finally, …"],
          right: ["the first idea", "one more idea", "the other side", "the last idea"],
          hint: "Which word is for the end? Which one shows the other side?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Putting your ideas in order” again.",
          fbText: "<b>First</b> – the first idea; <b>In addition</b> – one more; <b>However</b> – the other side; <b>Finally</b> – the last idea."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Kyrylo writes about his favourite subject.</p>`,
          items: [
            "Why I love history",
            "First, history helps us understand the world today.",
            "In addition, it’s full of amazing stories about real people.",
            "Finally, my history teacher makes every lesson interesting.",
            "So try a history podcast – you might love it too!"
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "The title goes first. Then First, In addition, Finally. What does So start?",
          fbOk: "Exactly.",
          fbBad: "Follow the words: First → In addition → Finally.",
          fbText: "Title → <b>First</b> → <b>In addition</b> → <b>Finally</b> → <i>So try…</i> – the end of the text."
        },
        {
          type: "gaps",
          sk: "write",
          title: "Fill in the gaps.",
          body: `<p>Daryna writes about the school podcast.</p>`,
          text: "Why do I love our podcast? {*First|Finally|However}, it’s fun to make. {*Also|However|Finally}, I learn a lot from our guests. {*However|First|Finally}, it takes a lot of time. {*Finally|First|Although}, I love working with Andrii: he’s a great team player!",
          hint: "The first idea → ? One more → ? The other side → ? The last idea → ?",
          fbOk: "Right.",
          fbBad: "Which idea is the other side: something not so good?",
          fbText: "<b>First</b>, fun; <b>Also</b>, she learns a lot; <b>However</b>, it takes time (the other side); <b>Finally</b>, the last idea."
        },
        {
          type: "choice",
          sk: "write",
          title: "Choose the correct answer.",
          body: `<p>Bohdan says chess is boring. Andrii wants to show the other side in his article.</p><p>“___, some people think chess is boring.”</p>`,
          opts: [
            "In addition",
            "However",
            "First"
          ],
          correct: 1,
          hint: "The other side → ?",
          fbOk: "Yes!",
          fbBad: "This idea is not like the ideas before it.",
          fbText: "<b>However</b> shows the other side. <i>In addition</i> adds one more idea of the same kind."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Andrii adds one more idea.</p>`,
          before: "In",
          after: ", you can play online with people from other countries.",
          answer: "addition",
          hint: "In a…, = Also,",
          fbOk: "Well done!",
          fbBad: "One more idea: In …,",
          fbText: "<b>In addition</b>, … = Also, … – one more idea."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Andrii writes his last idea.</p>`,
          tiles: ["finally,", "a chess club", "is", "a great place", "to make friends"],
          extra: ["first,"],
          answer: "Finally, a chess club is a great place to make friends.",
          hint: "The last idea starts with …",
          fbOk: "Yes!",
          fbBad: "It’s the last idea, not the first.",
          fbText: "<b>Finally, a chess club is a great place to make friends.</b> The last idea → Finally."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana writes a comment on Andrii’s article.</p>`,
          text: "Great article, Andrii! {*First|Finally|However}, I love your title. {*Also|Although|However}, your examples are very clear. {*However|Finally|First}, I don’t agree that every game is exciting: some games are very long! Finally, thanks for the tip about online clubs.",
          hint: "The first idea → ? One more → ? The other side → ?",
          fbOk: "Well done!",
          fbBad: "Which sentence shows the other side?",
          fbText: "<b>First</b>, the title; <b>Also</b>, the examples; <b>However</b>, she doesn’t agree (the other side)."
        }
      ],
      outro: {
        text: "First, also, in addition, however, finally: your reader can follow your ideas.",
        learned: [
          "Put ideas in order: First, … Also, … Finally, …",
          "Add one more idea: In addition, …",
          "Show the other side: However, …"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s9l6",
      title: "Paper books or e-books? A class debate",
      short: "A debate",
      icon: "book",
      status: "verified",
      why: "Read a class debate and use everything from this section.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Paper books or e-books?",
          body: `<p class="lead">Ms Lysenko’s class in Kyiv has a debate. Each student gives an opinion, and the others agree or disagree.</p><p>What do you prefer: paper books or e-books? Read the debate and find out what Andrii’s classmates think.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Paper or screen?, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i><b>Ms Lysenko:</b> Today’s question is: paper books or e-books? Bohdan, you start.<br><b>Bohdan:</b> Personally, I prefer e-books. First, an e-reader is light: I’ve got about 200 books on mine, and it’s lighter than one big paper book! Also, you can make the letters bigger. Honestly, my school bag is heavy enough.</i></p><p>Why does Bohdan prefer e-books?</p>`,
          opts: [
            "They’re cheaper than paper books.",
            "His teacher told him to read them.",
            "They’re light, and you can make the letters bigger."
          ],
          correct: 2,
          hint: "Find First and Also in Bohdan’s part.",
          fbOk: "Right.",
          fbBad: "Read Bohdan’s ideas after First and Also.",
          fbText: "First: an e-reader is <b>light</b>. Also: you can make <b>the letters bigger</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Paper or screen?, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i><b>Zoriana:</b> Sorry to interrupt, but can I say something? I see your point, Bohdan, but I agree only up to a point. Although e-readers are light, they need a battery. A paper book never needs charging. In addition, I love the feel of paper.<br><b>Daryna:</b> That’s true, but I often find cheaper e-books, so I can buy more books.</i></p><p>What do we learn?</p>`,
          opts: [
            "Zoriana partly agrees with Bohdan.",
            "Zoriana says paper books need a battery.",
            "Daryna can buy more books because she often finds cheaper e-books.",
            "Daryna never reads e-books."
          ],
          correct: [0, 2],
          hint: "What does “up to a point” mean? What is the result for Daryna (so…)?",
          fbOk: "Well done!",
          fbBad: "Read again: what needs a battery? What does Daryna buy?",
          fbText: "Zoriana agrees <b>up to a point</b> (partly). E-readers need a battery, not paper books. Daryna finds cheaper e-books, <b>so</b> she can buy more books."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Paper or screen?, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i><b>Kyrylo:</b> Actually, I read both. I read history books on paper, and I read e-books on the bus. We can either choose one or enjoy both!<br><b>Andrii:</b> I couldn’t agree more, Kyrylo. Both paper books and e-books are great, so why choose?<br><b>Ms Lysenko:</b> Thank you all! Now let’s vote.</i></p><p>What does Kyrylo think?</p>`,
          opts: [
            "Paper books are boring.",
            "You don’t need to choose: both kinds of books are good.",
            "He only reads paper books."
          ],
          correct: 1,
          hint: "Find “I read both” in Kyrylo’s part.",
          fbOk: "Exactly.",
          fbBad: "Does Kyrylo read one kind of book or two?",
          fbText: "Kyrylo reads <b>both</b>: paper books and e-books. Andrii agrees 100%: <i>I couldn’t agree more.</i>"
        },
        {
          type: "info",
          title: "The debate: who said what?",
          body: `<ul><li><b>Bohdan</b> → e-books: light, bigger letters</li><li><b>Zoriana</b> → partly agrees; e-readers need a battery</li><li><b>Daryna</b> → partly agrees; cheaper e-books, so more books</li><li><b>Kyrylo</b> → both kinds</li><li><b>Andrii</b> → agrees with Kyrylo 100%</li></ul><p>Now use their phrases.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Phrases from the debate: what does each one do?</p>`,
          bins: ["joins the discussion", "partly agrees", "agrees 100%"],
          items: [
            ["Sorry to interrupt, but can I say something?", 0],
            ["I agree only up to a point.", 1],
            ["That’s true, but I often find cheaper e-books.", 1],
            ["I couldn’t agree more, Kyrylo.", 2]
          ],
          hint: "Up to a point = partly. 100% = I couldn’t agree more.",
          fbOk: "Good eye!",
          fbBad: "Look at lessons 2 and 3: which phrase is for what?",
          fbText: "<i>Sorry to interrupt…</i> joins the discussion. <i>Up to a point</i> and <i>That’s true, but…</i> – partly agree. <i>I couldn’t agree more</i> – 100%."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Write Zoriana’s idea.</p>`,
          tiles: ["although", "e-readers are light,", "they", "need", "a battery"],
          extra: ["but"],
          answer: "Although e-readers are light, they need a battery.",
          hint: "Although + idea + comma, then the second idea.",
          fbOk: "Yes!",
          fbBad: "Although or but – not both.",
          fbText: "<b>Although e-readers are light, they need a battery.</b> No <i>but</i> after an although part."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>After the debate, the students write their ideas on the board.</p>`,
          text: "{*Both|Either} paper books and e-books have good points. You can {*either|both} read on paper or on a screen. {*Although|However|So} e-books are light, some people prefer paper. My bag is heavy, {*so|because|although} I read e-books at school.",
          hint: "both … and; either … or; Although + idea, + idea; the result → ?",
          fbOk: "Right.",
          fbBad: "Check the pairs and the commas.",
          fbText: "<b>Both</b> … and; <b>either</b> … or; <b>Although</b> e-books are light, …; heavy, <b>so</b> I read e-books (result)."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Bohdan answers Zoriana politely: he understands her idea, but he still prefers e-books.</p>`,
          before: "I see your",
          after: ", but my e-reader’s battery lasts for weeks.",
          answer: "point",
          hint: "I see your …, but…",
          fbOk: "Well done!",
          fbBad: "Find it in Zoriana’s words: I see your …, Bohdan.",
          fbText: "<b>I see your point, but…</b> – I understand you, but I have a different idea."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about the debate for the school newspaper.</p>`,
          text: "Our class debate was great. {*First|Finally|However}, Bohdan talked about e-books: they’re light. Zoriana agreed only up to a {*point|place|part}. She said, “{*Although|However|So} e-readers are light, they need a battery.” Daryna often finds cheaper e-books, {*so|because|although} she can buy more books. {*Finally|First|Although}, Kyrylo said we can enjoy {*both|either|or} kinds.",
          hint: "First → … → Finally; up to a …; Although + idea, + idea; the result → ?; the two kinds → ?",
          fbOk: "Yes!",
          fbBad: "Check the order words and the result word.",
          fbText: "<b>First</b>, Bohdan…; up to a <b>point</b>; <b>Although</b> e-readers are light, …; cheaper, <b>so</b> she can buy more; <b>Finally</b>, Kyrylo…; enjoy <b>both</b> kinds."
        }
      ],
      outro: {
        text: "A good debate: give your opinion, listen to others, agree or partly agree, and link your ideas.",
        learned: [
          "Follow a discussion and say who thinks what.",
          "Partly agree: I see your point, but… I agree up to a point.",
          "Link ideas in a debate: although, so, both … and, First…, Finally…"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s9l7",
      title: "Our debate club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s9boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the debate club?",
          body: `<p class="lead">The penfriend club is starting an online debate club. Here’s the first question: “Team sport or sport alone?”</p><p>Help the members give their opinions, agree and disagree, join in and link their ideas. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Emma starts the debate.</p>`,
          text: "{*In|On|At} my opinion, team sport is more fun. I {*think|am thinking|thinks} you learn to help each other. What {*do|are|does} you think, Taras?",
          pre: "e9s9l1",
          hint: "… my opinion; I …; What … you think?",
          fbOk: "Yes!",
          fbBad: "Look at the phrases for giving an opinion.",
          fbText: "<b>In</b> my opinion; I <b>think</b> (not <s>am thinking</s>); What <b>do</b> you think?"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 2",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Andrii:</b> Taras, you never do sport alone, do you?</p><p>Taras often trains alone. What does he say?</p>`,
          opts: [
            "Actually, I often train alone.",
            "Personally, I often train alone.",
            "Honestly, I agree with you."
          ],
          correct: 0,
          pre: "e9s9l1",
          hint: "Is Andrii right about Taras?",
          fbOk: "Right.",
          fbBad: "Taras says “that’s not right” and gives a fact.",
          fbText: "<b>Actually</b> – in fact, that’s not right. <i>Personally</i> is for opinions; with <i>I agree</i>, Taras agrees, but he doesn’t."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 3",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Emma:</b> Team sport is always better!</p><p>Oksana thinks team sport is fun, but she loves karate too, and in karate you often fight alone. What does she say?</p>`,
          opts: [
            "I couldn’t agree more!",
            "That’s true, but karate is great too.",
            "I am agree with you."
          ],
          correct: 1,
          pre: "e9s9l2",
          fbOk: "Well done!",
          fbBad: "Oksana agrees only partly.",
          fbText: "<b>That’s true, but…</b> – partly agree. <i>I couldn’t agree more</i> is 100%. Not <s>I am agree</s>."
        },
        {
          type: "match",
          sk: "func",
          eyebrow: "Task 4",
          title: "Match the halves.",
          left: [
            "Mariia wants to speak, but Emma is talking:",
            "Andrii hasn’t finished, but Taras starts talking:",
            "Oksana wants to know what quiet Zofia thinks:"
          ],
          right: [
            "Sorry to interrupt, but…",
            "Let me finish, please.",
            "What do you think, Zofia?"
          ],
          pre: "e9s9l3",
          fbOk: "Good eye!",
          fbBad: "Which phrase keeps your turn? Which one asks a quiet person?",
          fbText: "Sorry to interrupt → Mariia wants to speak. Let me finish → Andrii hasn’t finished. What do you think? → ask Zofia."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Oksana and Halyna both like team sport.</p>`,
          tiles: ["both", "Oksana", "and", "Halyna", "like", "team sport"],
          extra: ["likes"],
          answer: [
            "Both Oksana and Halyna like team sport.",
            "Both Halyna and Oksana like team sport.",
            "Oksana and Halyna both like team sport.",
            "Halyna and Oksana both like team sport."
          ],
          pre: "e9s9l3",
          fbOk: "Yes!",
          fbBad: "Two people → like, not likes.",
          fbText: "<b>Both Oksana and Halyna like team sport.</b> Two people → <i>like</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Taras writes his opinion.</p>`,
          text: "{*Although|However|But} I like football, I prefer running. I run alone. {*However|Although|Because}, I sometimes train with my club. I want to get faster, {*so|because|although} I train three times a week.",
          pre: "e9s9l4",
          hint: "Look at the commas and the full stops. Which gap starts a new sentence? Which one shows a result?",
          fbOk: "Exactly.",
          fbBad: "Although + idea, + idea; a new sentence + comma; the result → ?",
          fbText: "<b>Although</b> I like football, …; new sentence: <b>However</b>, …; I want to get faster, <b>so</b> I train (result)."
        },
        {
          type: "order",
          sk: "write",
          eyebrow: "Task 7",
          title: "Put the sentences in order.",
          body: `<p>Emma writes her ideas for the debate.</p>`,
          items: [
            "Why I love team sport",
            "First, you’re never alone: your team helps you.",
            "Also, you make lots of friends.",
            "Finally, it’s fun to win together!"
          ],
          shuffle: [2, 0, 3, 1],
          pre: "e9s9l5",
          fbOk: "Well done!",
          fbBad: "Title → First → Also → Finally.",
          fbText: "Title → <b>First</b> → <b>Also</b> → <b>Finally</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 8",
          title: "Read and choose.",
          body: `<p><i><b>Mariia:</b> I see your point, Emma, but I agree only up to a point. Team sport is fun. However, I like running alone in the park: it’s quiet, so I can think.<br><b>Tom:</b> Sorry to interrupt, but can I add something? I play in a band, and that’s a team too!</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Mariia agrees with Emma 100%.",
            "Tom doesn’t want to say anything.",
            "Mariia partly agrees with Emma."
          ],
          correct: 2,
          pre: "e9s9l6",
          fbOk: "Right.",
          fbBad: "What does “up to a point” mean?",
          fbText: "Mariia agrees <b>up to a point</b> – partly. Tom joins in: <i>Sorry to interrupt, but can I add something?</i>"
        }
      ],
      outro: {
        text: "Well done! Now you can join a discussion, give your opinion, agree or disagree politely and link your ideas.",
        learned: [
          "Give your opinion: In my opinion…, Personally…, Actually…",
          "Agree, partly agree and disagree politely.",
          "Join a discussion: Sorry to interrupt, but… What do you think?",
          "Link and order ideas: although, however, so, so that, First…, Finally…"
        ]
      }
    }
  ]
});
