/* Слід · Англійська мова, 7 клас — «Health and medicine» (e7s3)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 7 кл., тема «Охорона здоров'я»:
   відвідування лікаря; медичні заклади, захворювання, симптоми, ліки (с. 32, розд. 5.2.1); функція «просити про допомогу» (с. 32);
   інформація на упаковках лікарських засобів (с. 28); граматика B1 — Present Perfect (recent past), Past Simple vs Present Perfect,
   Ought (advice), Pronouns — indefinite (с. 34–35, розд. 5.4.1): https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично: What’s the matter? (e4s5l4), At the doctor’s (e4s5l5), have to (e6s5l5), should (e6s6l5), Present Perfect vs Past Simple (e6s7l5);
   just — e7s1l2, for / since — e7s1l4: тут лише повторення з посиланням (requires; verifier-e7s3).
   Не повторює e4s5l4–l5: тут медичні заклади, нові симптоми, травми, ліки й етикетка.
   Герої — серія 4–6 кл., на три роки старші: Andrii, Sofiia, Kyrylo, Bohdan, Zoriana (Kyiv), Dr Bondar (Kyiv, e4s5l5); Oksana, мама Olena (nurse),
   Dmytro (9), подруга Halyna (Zelena Dolyna), Dr Kovalenko (e4s5l5); Taras і Ostap (Lviv); Mariia (Kharkiv); Emma, Tom (11), дідусь Emma (Англія).
   Етикетка ліків — вигадана, без назв справжніх препаратів; у уроці — «ask a doctor or a chemist».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів і наголос — за Cambridge Dictionary (URL — tasks/…/write-eng-g7-e7s3.md, «Нотатки агента»).
   Статус: verified (verifier-e7s3, 2026-11-25; звіт reports/verify/write-eng-g7-e7s3.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s3",
  grade: 7,
  weeks: [11, 15],
  title: "Health and medicine",
  why: "To talk about illnesses, symptoms and medicines. And to ask for help and give advice.",
  requires: ["e4s5l4", "e4s5l5", "e6s6l5", "e6s5l5", "e6s7l5", "e7s1l2", "e7s1l4"],
  meta: { author: "writer-e7s3", created: "2026-11-25", factcheck: "verifier-e7s3 (reports/verify/write-eng-g7-e7s3.md)", teacher: null },
  badges: [
    { id: "e7s3boss", name: "Health helper", icon: "trophy", desc: "Finish the final lesson “Health and medicine”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s3l1",
      title: "A hospital, a chemist’s, a dentist’s: where to go",
      short: "Where to go",
      icon: "map",
      status: "verified",
      why: "When you feel ill, you need the right place. Learn where to go and how to ask for help.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where do you go when you feel ill?",
          body: `<p class="lead">Andrii’s class in Kyiv is making a page for new pupils: “Where to go when you feel ill”.</p><p><b>Kyrylo:</b> <i>Last year I had toothache. I didn’t know where to go!</i><br><b>Andrii:</b> <i>Let’s write about it, then.</i></p><p>Where can you get help in a town?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo has got toothache. Where should he go?</p>`,
          opts: [
            "to a hospital",
            "to a dentist’s",
            "to a chemist’s"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>dentist</b> looks after teeth. The place is <b>the dentist’s</b>. The next screen shows more places."
        },
        {
          type: "info",
          title: "Where to go",
          body: `<ul><li>the <b><u>den</u>tist’s</b> – for your teeth</li><li>the <b>doctor’s</b> – a doctor sees you there</li><li>the <b><u>chem</u>ist’s</b> – a shop where you buy medicine</li><li>a <b><u>hos</u>pital</b> – a big building with doctors and nurses; very ill people stay there</li><li>an <b><u>am</u>bulance</b> – a car that takes ill people to hospital fast</li></ul><p>British English: go <b>to hospital</b>, be <b>in hospital</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["My tooth hurts.", "I need to buy some medicine.", "I’ve got a sore throat and a temperature.", "A man in the street is very ill. He can’t stand up."],
          right: ["Go to the dentist’s.", "Go to the chemist’s.", "Go to the doctor’s.", "Call an ambulance!"],
          hint: "Which place is a shop? Which place is for teeth?",
          fbOk: "Yes!",
          fbBad: "Look at the list of places again.",
          fbText: "Teeth – <b>the dentist’s</b>. Buy medicine – <b>the chemist’s</b>. A sore throat and a temperature – <b>the doctor’s</b>. Very ill in the street – <b>an ambulance</b>."
        },
        {
          type: "info",
          title: "Can you help me, please?",
          body: `<p>Ask for help politely:</p><ul><li>Excuse me, <b>can you help me</b>, please?</li><li><b>Could you call</b> an ambulance, please?</li><li>Where is <b>the nearest</b> chemist’s?</li><li>I’ve got an <b>ap<u>point</u>ment</b> at ten. (a time to see the doctor or the dentist)</li></ul><p>In Ukraine, call <b>103</b> for an ambulance. In the UK, call <b>999</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Kyrylo is in the street in Kyiv. He needs to buy some medicine for his mum.</p>`,
          text: "Kyrylo: Excuse me, {*can|do} you help me, please? Where is the nearest {*chemist’s|dentist’s}? Woman: It’s next to the bank, on the left. Kyrylo: Thank you very much!",
          hint: "Kyrylo needs medicine. Where can he buy it?",
          fbOk: "Exactly.",
          fbBad: "How do we ask for help? Which place sells medicine?",
          fbText: "Ask politely: <b>Can you help me, please?</b> You buy medicine at <b>the chemist’s</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Zoriana and her dad are in Shevchenko Park in Kyiv. An old man is lying on the ground. He is very ill and can’t get up. Dad phones 103. What does he say?</p>`,
          opts: [
            "Hello! Can I make an appointment for next week?",
            "Hello! We need an ambulance in Shevchenko Park, please.",
            "Hello! Where is the nearest chemist’s?"
          ],
          correct: 1,
          hint: "The man is very ill. What does he need fast?",
          fbOk: "Right.",
          fbBad: "Is next week fast enough?",
          fbText: "A very ill person needs help fast: <b>We need an ambulance</b>. In Ukraine, the number is <b>103</b>."
        },
        {
          type: "word",
          sk: "cult",
          title: "Write the missing word.",
          body: `<p>Write the number.</p>`,
          before: "In Ukraine, call",
          after: "for an ambulance.",
          answer: "103",
          hint: "Look at the screen “Can you help me, please?”",
          fbOk: "Good eye!",
          fbBad: "999 is for the UK. What about Ukraine?",
          fbText: "In Ukraine: <b>103</b> for an ambulance. In the UK: 999."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+hos|pi|tal", "+am|bu|lance", "ap|+point|ment"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts on the screens with new words.",
          fbText: "<u>hos</u>pital, <u>am</u>bulance, ap<u>point</u>ment. In appointment, the strong part is the second one."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Where can you buy medicine?</p>`,
          before: "You can buy medicine at the",
          after: ".",
          answer: ["chemist’s", "chemist", "pharmacy"],
          hint: "It’s a shop. It starts with ch…",
          fbOk: "Well done!",
          fbBad: "It isn’t the dentist’s or the doctor’s. It’s a shop.",
          fbText: "You buy medicine at <b>the chemist’s</b> (you can also say <b>the chemist</b> or <b>the pharmacy</b>)."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii’s class writes the page for new pupils.</p>`,
          text: "Where to go when you feel ill. Toothache? Go to the {*dentist’s|chemist’s}. Need some medicine? Buy it at the {*chemist’s|dentist’s}. A sore throat and a temperature? Make an {*appointment|ambulance} at the doctor’s. Somebody is very ill? Call {*103|999} for an {*ambulance|appointment}.",
          hint: "The page is for pupils in Kyiv. And which word means “a time to see the doctor”?",
          fbOk: "Right.",
          fbBad: "Read each line: teeth, medicine, a time to see the doctor, very ill.",
          fbText: "Teeth – the <b>dentist’s</b>. Medicine – the <b>chemist’s</b>. A time to see the doctor – an <b>appointment</b>. In Kyiv, call <b>103</b> for an <b>ambulance</b>."
        }
      ],
      outro: {
        text: "Now you know where to go: the doctor’s, the dentist’s, the chemist’s or hospital. And you can ask for help politely.",
        learned: [
          "Name places for health: a hospital, a chemist’s, a dentist’s.",
          "Ask for help: Excuse me, can you help me, please?",
          "Say the number for an ambulance in Ukraine."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s3l2",
      title: "I’ve got a sore throat: illnesses and symptoms",
      short: "Symptoms",
      icon: "user",
      status: "verified",
      why: "A doctor needs to know how you feel. Learn to say what is wrong.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What’s wrong with Oksana?",
          body: `<p class="lead">Oksana writes to her friend Halyna in the morning.</p><p><i>Hi Halyna! I can’t come to school today. I’ve got flu. I’ve got a temperature and a bad cough. My head hurts and I feel very tired. I can’t eat anything. Mum is a nurse, so she’s looking after me.</i></p><p>How does Oksana feel?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana has got flu. What is flu?</p>`,
          opts: [
            "an illness, a bit like a very bad cold",
            "a medicine for a cough",
            "a place where you see a doctor"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Flu</b> is an illness. It’s like a very bad cold, often with a temperature."
        },
        {
          type: "info",
          title: "Illnesses and symptoms",
          body: `<p>Illnesses: <b>a cold</b>, <b>flu</b> (I’ve got flu.)</p><p><b><u>Symp</u>toms</b> – signs that you are ill:</p><ul><li><b>a cough</b> – you make a loud noise from your throat</li><li><b><u>ear</u>ache</b> – my ear hurts</li><li><b><u>back</u>ache</b> – my back hurts</li><li>I <b>feel sick</b> – my stomach feels bad</li></ul><p>I’ve got a cold. = I have a cold. Both are correct.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["earache", "backache", "a sore throat", "toothache", "I feel sick."],
          right: ["My ear hurts.", "My back hurts.", "My throat hurts.", "My tooth hurts.", "My stomach feels bad."],
          hint: "Look at the first part of each word: ear, back, tooth.",
          fbOk: "Right.",
          fbBad: "Look at the list of symptoms again.",
          fbText: "<b>ear</b>ache – ear, <b>back</b>ache – back, a sore <b>throat</b> – throat, <b>tooth</b>ache – tooth. I feel sick – my stomach feels bad."
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>Dr Kovalenko asks Oksana: “What are your symptoms?”</p><p><b>Oksana:</b> <i>I’ve got a temperature. I cough all the time, and my ear hurts.</i></p><p>Which symptoms has Oksana got?</p>`,
          opts: [
            "a temperature",
            "a cough",
            "earache",
            "backache"
          ],
          correct: [0, 1, 2],
          hint: "Find three things in Oksana’s answer.",
          fbOk: "Well done!",
          fbBad: "Does Oksana say anything about her back?",
          fbText: "Oksana has got <b>a temperature</b>, <b>a cough</b> (she coughs all the time) and <b>earache</b> (her ear hurts). Her back is OK."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana’s brother Dmytro played football all day yesterday.</p>`,
          text: "Mum: What’s the matter, Dmytro? Dmytro: My ear is OK, but my back hurts. I’ve got {*backache|earache}. And my throat hurts too. I’ve got {*a sore throat|toothache}.",
          hint: "Which parts of Dmytro hurt: his ear, his back, his throat?",
          fbOk: "Exactly.",
          fbBad: "Read again: his ear is OK, but his back and his throat hurt.",
          fbText: "His back hurts: <b>backache</b>. His throat hurts: <b>a sore throat</b>."
        },
        {
          type: "info",
          title: "something, anything, nothing",
          body: `<ul><li>I need <b>something</b> for my cough.</li><li>I can’t eat <b>anything</b>.</li><li>Do you need <b>anything</b>?</li><li><b>nothing</b> = not anything: <b>Nothing</b> hurts now.</li></ul><p>With <i>not</i>, <i>don’t</i>, <i>can’t</i> → <b>anything</b>.<br>Not: <s>I can’t eat nothing.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mum talks to Oksana in the evening.</p>`,
          text: "Mum: Do you want anything to eat? Oksana: No, thanks. I don’t want {*anything|something}. I can’t eat {*anything|nothing} today. But I need {*something|anything} for my cough.",
          hint: "Is there not, don’t or can’t in the sentence?",
          fbOk: "Yes!",
          fbBad: "With don’t and can’t: anything. In a positive sentence: something.",
          fbText: "I don’t want <b>anything</b>. I can’t eat <b>anything</b>. I need <b>something</b> for my cough."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "Halyna, I feel much better today! I’ve still got a cough, but I haven’t got [nothing] else. See you on Monday!",
          hint: "Look for not in the second sentence.",
          fbOk: "Good eye!",
          fbBad: "Look at the word after haven’t got.",
          fbText: "With <i>haven’t</i>: <b>I haven’t got anything else</b>. Or: I’ve got nothing else."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana is well again. Her head, her ear and her throat are OK.</p>`,
          before: "I feel great!",
          after: "hurts now.",
          answer: "nothing",
          hint: "Not anything = …",
          fbOk: "Well done!",
          fbBad: "There is no not here. Not anything = n…",
          fbText: "<b>Nothing</b> hurts now. = Not anything."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Two days later, Oksana writes to Halyna again.</p>`,
          text: "Hi Halyna! I’m much better. I haven’t got a temperature now, but I still cough a lot. I’ve still got a {*cough|backache}. My ear doesn’t hurt, so I haven’t got {*earache|toothache} now. Mum says I don’t need {*anything|something} from the chemist’s. See you soon!",
          hint: "She still coughs. Her ear doesn’t hurt now. And look for don’t.",
          fbOk: "Right.",
          fbBad: "Read each sentence again. Which part of the body is it about?",
          fbText: "She still coughs: a <b>cough</b>. Her ear doesn’t hurt: no <b>earache</b>. With don’t: <b>anything</b>."
        }
      ],
      outro: {
        text: "Say what’s wrong: I’ve got flu, a cough, earache. With not or can’t, say anything: I can’t eat anything.",
        learned: [
          "Name illnesses and symptoms: flu, a cough, earache, backache.",
          "Say how you feel: I feel sick, I feel tired.",
          "Use something, anything and nothing."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s3l3",
      title: "I’ve hurt my knee! What has happened?",
      short: "What has happened?",
      icon: "bolt",
      status: "verified",
      why: "Accidents happen. Say what has just happened and ask for help.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Are you OK, Taras?",
          body: `<p class="lead">Taras and his friend Ostap are riding their bikes in a park in Lviv.</p><p><b>Taras:</b> Ow! I’ve just fallen off my bike!<br><b>Ostap:</b> Oh no! What’s happened? Are you OK?<br><b>Taras:</b> I’ve hurt my knee. And I’ve cut my hand.</p><p>How does Taras give his news?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Taras says: “I’ve just fallen off my bike.” When did it happen?</p>`,
          opts: [
            "a very short time ago",
            "last summer",
            "every day"
          ],
          correct: 0,
          hint: "Remember the lesson “I’ve just washed the dishes”.",
          fbOk: "Yes, you remember!",
          fbBad: "Remember: just = a very short time ago.",
          fbText: "<b>just</b> = a very short time ago. It’s news: it has happened, and it’s important now."
        },
        {
          type: "info",
          title: "News: I’ve hurt my knee",
          body: `<p>Something has happened, and it’s important now:</p><ul><li>I<b>’ve hurt</b> my knee.</li><li>Ostap <b>has called</b> Taras’s dad.</li><li>I<b>’ve just fallen</b> off my bike. (<b>just</b> = a very short time ago – remember “I’ve just washed the dishes”?)</li></ul><p><b>have / has</b> + the third form. This is the Present Perfect.<br><b>What’s happened?</b> = What has happened?</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Accidents: verbs and body parts",
          body: `<ul><li>hurt – hurt – <b>hurt</b></li><li>cut – cut – <b>cut</b></li><li>fall – fell – <b>fallen</b></li><li>break – broke – <b>broken</b></li><li>burn – burnt / burned – <b>burnt / burned</b></li></ul><p>A <b>knee</b> is in the middle of your leg. An <b><u>an</u>kle</b> is between your leg and your foot.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ostap helps Taras.</p>`,
          text: "Ostap: Can you stand up? Taras: Yes, but I’ve {*hurt|hurted} my knee. Ostap: Have you {*broken|broke} your leg? Taras: No, I haven’t. But I’ve {*cut|cutted} my hand.",
          hint: "Look at the list: hurt – hurt – hurt, break – broke – broken.",
          fbOk: "Right.",
          fbBad: "Some third forms don’t end in -ed. Look at the list again.",
          fbText: "I’ve <b>hurt</b>, have you <b>broken</b>, I’ve <b>cut</b>. hurt and cut don’t change; break → <b>broken</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia is making a salad in Kharkiv. Suddenly her finger hurts, and it’s red. What does she say to her mum?</p>`,
          opts: [
            "Mum! I’ve cutted my finger!",
            "Mum! I cut my finger every day!",
            "Mum! I’ve cut my finger!"
          ],
          correct: 2,
          hint: "It’s news. And cut – cut – cut.",
          fbOk: "Yes!",
          fbBad: "Look at the list: cut – cut – cut. No -ed.",
          fbText: "News: <b>I’ve cut my finger!</b> The third form of cut is <b>cut</b>. Every day isn’t right here: it has happened just now."
        },
        {
          type: "info",
          title: "Has he broken his arm?",
          body: `<ul><li>He<b>’s broken</b> his arm. = He <b>has</b> broken his arm.</li><li><b>Has</b> he <b>broken</b> his arm? – Yes, he <b>has</b>. / No, he <b>hasn’t</b>.</li><li><b>Have</b> you <b>hurt</b> your leg? – Yes, I <b>have</b>.</li></ul><p>Ask for help: <b>Can you help me? I’ve hurt my ankle.</b></p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma writes to Andrii: “Tom has had an accident at the skatepark.” Andrii asks a question.</p>`,
          tiles: ["Has", "Tom", "broken", "his arm"],
          extra: ["broke"],
          keepCase: true,
          answer: "Has Tom broken his arm?",
          hint: "A question starts with Has. Then who? Then the third form.",
          fbOk: "Well done!",
          fbBad: "break – broke – broken. After has: broken.",
          fbText: "<b>Has Tom broken his arm?</b> has + <b>broken</b>, not <i>broke</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Emma answers. One word is wrong.</p>`,
          text: "Yes, he has. He has [broke] his arm, and now he is in hospital with Mum.",
          hint: "Look at the word after has.",
          fbOk: "Good eye!",
          fbBad: "has + the third form: break – broke – …",
          fbText: "<b>He has broken his arm</b>: break – broke – <b>broken</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the third form of <i>fall</i>.</p>`,
          before: "Ouch! I’ve just",
          after: "off my bike.",
          answer: "fallen",
          hint: "Look at the list: fall – fell – …",
          fbOk: "Exactly.",
          fbBad: "fell is the Past Simple. The third form is different.",
          fbText: "fall – fell – <b>fallen</b>: I’ve just <b>fallen</b> off my bike."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences with the Present Perfect.",
          body: `<p>Taras writes to Emma in the evening.</p>`,
          text: "Hi Emma! How is Tom? I’ve {*just|ever} fallen off my bike too! I’ve {*hurt|hurts} my knee, but I haven’t {*broken|broke} anything. Ostap {*has|have} called my dad, and he’s coming to take me home.",
          hint: "A very short time ago → just. After have and has → the third form.",
          fbOk: "Well done!",
          fbBad: "Look at the lists: hurt – hurt, break – broken. Ostap: has or have?",
          fbText: "I’ve <b>just</b> fallen. I’ve <b>hurt</b> my knee. I haven’t <b>broken</b> anything. Ostap <b>has</b> called my dad."
        }
      ],
      outro: {
        text: "Give news with the Present Perfect: I’ve hurt my knee. Ask: What’s happened? Has he broken his arm?",
        learned: [
          "Say what has just happened: I’ve just fallen off my bike.",
          "Use the third forms hurt, cut, fallen, broken.",
          "Ask for help after an accident."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s3l4",
      title: "When did it start? The Past Simple or the Present Perfect",
      short: "Since Monday",
      icon: "scale",
      status: "verified",
      why: "A doctor asks when it started and how long you’ve had it. Answer both questions.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How long have you had it?",
          body: `<p class="lead">It’s Thursday. Andrii is at the doctor’s in Kyiv.</p><p><b>Dr Bondar:</b> What’s the matter, Andrii?<br><b>Andrii:</b> I’ve got a bad cough.<br><b>Dr Bondar:</b> When did it start?<br><b>Andrii:</b> It started on Monday, after football in the rain.<br><b>Dr Bondar:</b> So you’ve had it since Monday.</p><p><i>started</i> and <i>’ve had</i>: why two different forms?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>It’s Thursday. Andrii has had a cough since Monday. Has he got the cough now?</p>`,
          opts: [
            "Yes, he still has it.",
            "No, it stopped on Monday.",
            "No, it stopped yesterday."
          ],
          correct: 0,
          hint: "Remember the lesson “We’ve lived here for ten years”.",
          fbOk: "Yes, you remember!",
          fbBad: "Present Perfect + since: it started in the past, and it’s still true now.",
          fbText: "<b>I’ve had it since Monday</b> = it started on Monday, and Andrii still has it now."
        },
        {
          type: "info",
          title: "Remember: since and for",
          body: `<p>You know it from the lesson “We’ve lived here for ten years”.</p><p>I<b>’ve had</b> a cough <b>since</b> Monday. = It started on Monday, and I still have it now.</p><ul><li><b>since</b> + the start: since Monday, since yesterday, since 8 o’clock</li><li><b>for</b> + how long: for three days, for a week</li></ul><p>Ask: <b>How long have you had</b> it?<br>Not: <s>I have a cough since Monday.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii’s family is not well this week.</p>`,
          text: "Andrii: I’ve had this cough {*since|for} Monday. Sofiia: I’ve had a cold {*for|since} two days. Dad: I’ve had backache {*since|for} last week!",
          hint: "Is it the start (Monday) or how long (two days)?",
          fbOk: "Exactly.",
          fbBad: "The start → since. How long → for.",
          fbText: "<b>since</b> Monday, <b>since</b> last week – the start. <b>for</b> two days – how long."
        },
        {
          type: "info",
          title: "Past Simple or Present Perfect?",
          body: `<p>A finished time (<b>When?</b>) → Past Simple:</p><ul><li><b>When did</b> it <b>start</b>? – It <b>started</b> on Monday.</li><li>I <b>saw</b> the doctor yesterday.</li></ul><p>From the past up to now (<b>How long?</b>) → Present Perfect:</p><ul><li><b>How long have</b> you <b>had</b> it? – I<b>’ve had</b> it for three days.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          body: `<p>Emma writes to Andrii.</p>`,
          left: ["When did your cough start?", "How long have you had it?", "Have you seen a doctor?", "Did you go to school yesterday?"],
          right: ["On Monday, after football.", "For three days.", "Yes, I have. I saw Dr Bondar today.", "No, I didn’t. I stayed at home."],
          hint: "When? → a day. How long? → for… Have you…? → Yes, I have.",
          fbOk: "Right.",
          fbBad: "Look at the first words of each question: When, How long, Have you, Did you.",
          fbText: "<b>When did…?</b> – On Monday. <b>How long have…?</b> – For three days. <b>Have you…?</b> – Yes, I have. <b>Did you…?</b> – No, I didn’t."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I have a temperature since yesterday.",
            "I’ve had a temperature since yesterday.",
            "I’ve had a temperature since two days."
          ],
          correct: 1,
          hint: "From the past up to now → have had. And since + the start.",
          fbOk: "Well done!",
          fbBad: "Two days is how long. Which word goes with how long?",
          fbText: "<b>I’ve had a temperature since yesterday.</b> Not <i>I have … since</i>. With two days: <b>for</b> two days."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple or the Present Perfect.",
          body: `<p>Zoriana has got earache and a temperature. She is at the doctor’s now.</p>`,
          text: "Dr Bondar: When {*did|has} the earache start? Zoriana: It {*started|has started} on Saturday. Dr Bondar: And how long {*have you had|did you have} the temperature? Zoriana: I’ve had it {*since|for} yesterday.",
          hint: "When? → Past Simple. How long, up to now? → Present Perfect.",
          fbOk: "Yes!",
          fbBad: "Saturday is a finished time. The temperature is still there now.",
          fbText: "When <b>did</b> it start? It <b>started</b> on Saturday. How long <b>have you had</b> it? Since yesterday – the start: <b>since</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Dr Bondar asks Andrii a question.</p>`,
          tiles: ["How long", "have", "you", "had", "this cough"],
          extra: ["did"],
          keepCase: true,
          answer: "How long have you had this cough?",
          hint: "Start with How long. Then have + you + the third form.",
          fbOk: "Well done!",
          fbBad: "How long, up to now → have you had, not did.",
          fbText: "<b>How long have you had this cough?</b> – Since Monday."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>It’s Tuesday. Bohdan’s sore throat started on Saturday, and his throat still hurts.</p>`,
          before: "Bohdan: I’ve had a sore throat",
          after: "Saturday.",
          answer: "since",
          hint: "Saturday is the start.",
          fbOk: "Good eye!",
          fbBad: "for goes with how long. Which word goes with the start?",
          fbText: "Saturday is the start: <b>since</b> Saturday."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>On Friday, Andrii writes to Emma.</p>`,
          text: "Hi Emma! I {*went|have gone} to the doctor’s yesterday. I’ve had this cough {*since|for} Monday. It {*started|has started} after football in the rain. Dr Bondar says I have to stay at home {*for|since} three days.",
          hint: "Yesterday → Past Simple. Monday → the start. Three days → how long.",
          fbOk: "Exactly.",
          fbBad: "With yesterday and after football: the Past Simple.",
          fbText: "Yesterday: I <b>went</b>. Since Monday up to now: I’ve had it <b>since</b> Monday. It <b>started</b> after football. How long: <b>for</b> three days."
        }
      ],
      outro: {
        text: "When? → the Past Simple: It started on Monday. How long? → the Present Perfect: I’ve had it since Monday.",
        learned: [
          "Answer the doctor: When did it start? How long have you had it?",
          "Use since and for.",
          "Choose the Past Simple or the Present Perfect."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s3l5",
      title: "You ought to stay in bed: advice",
      short: "Ought to",
      icon: "bulb",
      status: "verified",
      why: "Friends give good advice when you are ill. Give advice with ought to and should.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What should Andrii do?",
          body: `<p class="lead">Emma writes to Andrii from England.</p><p><b>Emma:</b> How are you? Are you better?<br><b>Andrii:</b> Not really. I’m still coughing.<br><b>Emma:</b> Poor you! You ought to stay in bed and rest. And you ought not to play football in the rain again!</p><p>What does <i>ought to</i> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma says: “You ought to stay in bed.” What is it?</p>`,
          opts: [
            "advice: a good idea",
            "a school rule",
            "a question"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>advice</b> from a friend, like <b>should</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "ought to = should",
          body: `<p><b>ought to</b> and <b>should</b> give advice. They mean the same:</p><ul><li>You <b>ought to</b> rest. = You <b>should</b> rest.</li><li>You <b>ought not to</b> go out. = You <b>shouldn’t</b> go out.</li></ul><p>ought <b>to</b> + verb. should + verb, no <i>to</i>.<br>Not: <s>You ought rest.</s> <s>You should to rest.</s></p><p>Questions: we usually ask <b>Should I…?</b></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma gives Andrii more advice.</p>`,
          text: "You {*ought to|ought} rest today. You {*should|should to} drink lots of water. And you {*ought not to|don’t ought to} go to school with a temperature.",
          hint: "ought + to + verb. should + verb, no to.",
          fbOk: "Yes!",
          fbBad: "Look at the screen “ought to = should” again.",
          fbText: "You <b>ought to</b> rest. You <b>should</b> drink. Negative: you <b>ought not to</b> go."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Bohdan has got a sore throat and a temperature. Which advice is good?</p>`,
          opts: [
            "You ought to go to football training in the rain.",
            "You ought not to tell your parents.",
            "You ought to rest and drink lots of water."
          ],
          correct: 2,
          hint: "Which idea helps an ill person?",
          fbOk: "Right.",
          fbBad: "Is football in the rain a good idea with a temperature?",
          fbText: "Good advice: <b>You ought to rest and drink lots of water.</b> And always tell your parents when you feel ill."
        },
        {
          type: "info",
          title: "Advice or a rule?",
          body: `<ul><li>Advice (a good idea): <b>should</b>, <b>ought to</b><br>Mum: You <b>ought to</b> go to bed early.</li><li>A rule (you can’t choose): <b>must</b>, <b>have to</b><br>Dr Bondar: You <b>have to</b> stay at home for three days.</li></ul><p>Not necessary → <b>don’t have to</b>: You <b>don’t have to</b> go to school tomorrow.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Is it advice or a rule?</p>`,
          bins: ["Advice", "A rule"],
          items: [
            ["You ought to wear a warm scarf.", 0],
            ["You should go to bed earlier.", 0],
            ["You ought not to eat so many sweets.", 0],
            ["Visitors must wash their hands.", 1],
            ["You mustn’t eat in the library.", 1]
          ],
          hint: "should and ought to → advice. must and mustn’t → a rule.",
          fbOk: "Exactly.",
          fbBad: "Look at the verb in each sentence: ought, should or must?",
          fbText: "<b>ought to</b>, <b>should</b>, <b>ought not to</b> – advice. <b>must</b>, <b>mustn’t</b> – rules."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Andrii’s cough is very bad. Emma gives him advice.</p>`,
          tiles: ["You", "ought", "to", "see", "a doctor"],
          extra: ["sees"],
          keepCase: true,
          answer: "You ought to see a doctor.",
          hint: "Start with You. Then ought + to + verb.",
          fbOk: "Well done!",
          fbBad: "After ought to: see, not sees.",
          fbText: "<b>You ought to see a doctor.</b> ought to + verb, no -s."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Halyna gives Oksana advice. One word is wrong.</p>`,
          text: "You should [to] stay in bed today, and you ought to drink lots of water.",
          hint: "Look at the words after should.",
          fbOk: "Good eye!",
          fbBad: "should + verb: no to.",
          fbText: "<b>You should stay in bed</b> – no <i>to</i> after should. But: you <b>ought to</b> drink."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Dmytro has got a cold. Mum gives him advice.</p>`,
          before: "You",
          after: "not to go out in the cold today.",
          answer: "ought",
          hint: "Which word goes with not to?",
          fbOk: "Right.",
          fbBad: "should has no to. Which word has to?",
          fbText: "You <b>ought</b> not to go out. = You shouldn’t go out."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Now Halyna has got a cold. Oksana writes to her.</p>`,
          text: "Poor you, Halyna! You {*ought to|ought} stay at home today. You {*shouldn’t|should} go out in the cold. You {*should|should to} drink lots of warm tea. And if you have a high temperature, you {*have to|ought} see a doctor. My mum says so!",
          hint: "ought + to. should + verb, no to. Is going out in the cold a good idea?",
          fbOk: "Well done!",
          fbBad: "Check: ought to, should without to.",
          fbText: "You <b>ought to</b> stay at home. You <b>shouldn’t</b> go out in the cold. You <b>should</b> drink warm tea. You <b>have to</b> see a doctor."
        }
      ],
      outro: {
        text: "Give advice with ought to or should: You ought to rest. You shouldn’t go out.",
        learned: [
          "Give advice with ought to and ought not to.",
          "Say the same advice with should.",
          "Tell advice from a rule: should or must."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s3l6",
      title: "Take one tablet twice a day: reading medicine labels",
      short: "Medicine labels",
      icon: "book",
      status: "verified",
      why: "Labels tell you how to take medicine. Learn to read them, and always ask an adult first.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What does the label say?",
          body: `<p class="lead">Emma’s grandad has got a bad cough. The doctor has given him some tablets.</p><p><b>Grandad:</b> I can’t find my glasses, Emma. What does it say on the box?<br><b>Emma:</b> It says: “Take one tablet twice a day.”</p><p>How often does Grandad take a tablet?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Twice a day.” What does it mean?</p>`,
          opts: [
            "one time a day",
            "two times a day",
            "every hour"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>twice</b> = two times. Look at the next screen."
        },
        {
          type: "info",
          title: "How often?",
          body: `<p>A <b><u>tab</u>let</b> – a small, hard piece of medicine.<br>A <b><u>la</u>bel</b> – the words on a box or a bottle.</p><ul><li><b>once</b> a day – 1 time a day</li><li><b>twice</b> a day – 2 times a day</li><li><b>three times</b> a day – 3 times a day</li><li><b>every</b> four hours</li><li><b>after meals</b> – after breakfast, lunch and dinner</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["once a day", "twice a day", "every four hours", "after meals"],
          right: ["1 time a day", "2 times a day", "at 8.00, 12.00, 16.00 and 20.00", "after breakfast, lunch and dinner"],
          hint: "once = 1 time, twice = 2 times.",
          fbOk: "Yes!",
          fbBad: "Look at the screen “How often?” again.",
          fbText: "<b>once</b> – 1 time, <b>twice</b> – 2 times, <b>every four hours</b> – 8.00, 12.00, 16.00, 20.00. <b>after meals</b> – after breakfast, lunch and dinner."
        },
        {
          type: "info",
          title: "Labels tell you what to do",
          body: `<ul><li><b>Take</b> one tablet twice a day.</li><li><b>Do not take</b> more than two tablets a day.</li><li><b>Keep</b> away from children.</li></ul><p>Labels often say <b>Do not</b>, not <i>Don’t</i>.</p><p>Medicine isn’t sweets! <b>Always ask a doctor or a chemist.</b> Children take medicine only with an adult.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: a medicine label",
          title: "Read and choose.",
          body: `<p><i>COUGH TABLETS (not a real medicine)<br>Adults: take one tablet twice a day, after meals, with a glass of water.<br>Do not take more than two tablets a day.<br>Children: ask an adult, a doctor or a chemist.<br>Keep away from children.</i></p><p>When does Grandad take a tablet?</p>`,
          opts: [
            "before meals",
            "only at night",
            "after meals"
          ],
          correct: 2,
          hint: "Find the word meals on the label.",
          fbOk: "Right.",
          fbBad: "Read the line that starts with Adults.",
          fbText: "The label says: take one tablet twice a day, <b>after meals</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: a medicine label",
          title: "Choose all the correct answers.",
          body: `<p><i>COUGH TABLETS (not a real medicine)<br>Adults: take one tablet twice a day, after meals, with a glass of water.<br>Do not take more than two tablets a day.<br>Children: ask an adult, a doctor or a chemist.<br>Keep away from children.</i></p><p>What does the label say?</p>`,
          opts: [
            "Take the tablets with water.",
            "Don’t take more than two tablets a day.",
            "Take three tablets a day.",
            "Children can take the tablets without asking an adult."
          ],
          correct: [0, 1],
          hint: "Check each answer against the label.",
          fbOk: "Well done!",
          fbBad: "How many tablets a day? What about children?",
          fbText: "With <b>a glass of water</b>; <b>not more than two</b> a day. Children have to ask an adult, a doctor or a chemist."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma writes a note for Grandad in big letters.</p>`,
          text: "{*Take|Takes} one tablet after breakfast and one after dinner. {*Do not|Does not} take more than two a day. {*Drink|Drinks} a glass of water with each tablet.",
          hint: "Instructions: the verb without -s.",
          fbOk: "Exactly.",
          fbBad: "Labels and notes use the imperative: Take, Do not, Drink.",
          fbText: "Imperatives: <b>Take</b>, <b>Do not</b> take, <b>Drink</b>. No -s."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Dmytro is nine. He has got a headache. He sees Grandma Hanna’s tablets on the table. What should he do?</p>`,
          opts: [
            "Take two tablets with juice.",
            "Ask Mum or Dad first.",
            "Take one tablet every hour."
          ],
          correct: 1,
          hint: "Who can take medicine alone?",
          fbOk: "Yes!",
          fbBad: "Look at the screen “Labels tell you what to do” again.",
          fbText: "Children take medicine only with an adult: <b>Ask Mum or Dad first.</b>"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>The label says: 2 times a day. Write one word.</p>`,
          before: "Take one tablet",
          after: "a day.",
          answer: "twice",
          hint: "1 time = once. 2 times = …",
          fbOk: "Good eye!",
          fbBad: "Look at the screen “How often?”: tw…",
          fbText: "2 times a day = <b>twice</b> a day."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana on Thursday.</p>`,
          text: "Hi Oksana! Grandad {*has had|has} a bad cough since Sunday. On Monday, the doctor gave him some tablets. He takes one tablet {*twice|two} a day, after meals. The label says: “Do {*not|no} take more than two a day.” He’s better now!",
          hint: "Since Sunday, up to now → has had. 2 times → twice.",
          fbOk: "Well done!",
          fbBad: "Look at the screens “How often?” and “Labels tell you what to do”.",
          fbText: "Up to now: he <b>has had</b> a cough since Sunday. 2 times: <b>twice</b> a day. Labels: <b>Do not</b> take."
        }
      ],
      outro: {
        text: "Labels tell you how often to take medicine: once, twice, after meals. And always ask an adult, a doctor or a chemist first.",
        learned: [
          "Read a medicine label: twice a day, after meals.",
          "Understand instructions on labels: Take, Do not take.",
          "Ask an adult before you take any medicine."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s3l7",
      title: "A health page for new pupils",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e7s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the health page?",
          body: `<p class="lead">Andrii’s class in Kyiv is finishing its English page “Health help for new pupils”.</p><p>Ms Lysenko needs your help. Read each part and check it. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Part 1: Where to go.</p>`,
          text: "Toothache? Go to the {*dentist’s|chemist’s}. Need some medicine? Go to the {*chemist’s|dentist’s}. Somebody is very ill in the street? Call {*103|999} for an ambulance.",
          pre: "e7s3l1",
          hint: "The page is for pupils in Kyiv. Which place is a shop?",
          fbOk: "Yes!",
          fbBad: "Teeth, medicine, an ambulance in Ukraine: check each one.",
          fbText: "Teeth – the <b>dentist’s</b>. Medicine – the <b>chemist’s</b>. In Ukraine, call <b>103</b> for an ambulance."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Match the halves.",
          body: `<p>Part 2: Symptoms.</p>`,
          left: ["earache", "backache", "a sore throat", "I feel sick."],
          right: ["My ear hurts.", "My back hurts.", "My throat hurts.", "My stomach feels bad."],
          pre: "e7s3l2",
          hint: "Look at the first part of each word.",
          fbOk: "Right.",
          fbBad: "ear, back, throat, stomach: which is which?",
          fbText: "<b>ear</b>ache – ear, <b>back</b>ache – back, a sore <b>throat</b> – throat, I feel sick – stomach."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Part 2: Kyrylo has got flu. He isn’t hungry.</p>`,
          before: "I can’t eat",
          after: "today.",
          answer: "anything",
          pre: "e7s3l2",
          hint: "With can’t: …thing.",
          fbOk: "Good eye!",
          fbBad: "With not or can’t: any…",
          fbText: "With can’t: <b>I can’t eat anything.</b>"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Complete the sentences with the Present Perfect.",
          body: `<p>Part 3: Accidents at school.</p>`,
          text: "Kyrylo: Ouch! I’ve {*fallen|fell} down the stairs! Bohdan: What’s happened? Have you {*hurt|hurts} your ankle? Kyrylo: Yes, I {*have|did}. Can you help me?",
          pre: "e7s3l3",
          hint: "have + the third form. The answer to Have you…? is Yes, I …",
          fbOk: "Exactly.",
          fbBad: "fall – fell – fallen. Have you…? – Yes, I have.",
          fbText: "I’ve <b>fallen</b>. Have you <b>hurt</b> your ankle? – Yes, I <b>have</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Part 4: At the doctor’s. Which sentence is correct?</p>`,
          opts: [
            "Bohdan has a cold since Friday.",
            "Bohdan has had a cold since three days.",
            "Bohdan has had a cold since Friday."
          ],
          correct: 2,
          pre: "e7s3l4",
          hint: "Up to now → has had. since + the start.",
          fbOk: "Well done!",
          fbBad: "since + the start: since Friday. And up to now: has had.",
          fbText: "<b>Bohdan has had a cold since Friday.</b> With three days: <b>for</b> three days."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Part 5: Advice. When you have a cold…</p>`,
          tiles: ["You", "ought", "to", "drink", "lots of water"],
          extra: ["drinks"],
          keepCase: true,
          answer: "You ought to drink lots of water.",
          pre: "e7s3l5",
          hint: "Start with You. ought + to + verb.",
          fbOk: "Right.",
          fbBad: "After ought to: drink, not drinks.",
          fbText: "<b>You ought to drink lots of water.</b> = You should drink lots of water."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p>Part 6: A label.</p><p><i>THROAT TABLETS (not a real medicine)<br>Adults: take one tablet three times a day, after meals.<br>Children: ask an adult, a doctor or a chemist.</i></p><p>How many tablets a day can an adult take?</p>`,
          opts: [
            "one",
            "three",
            "two"
          ],
          correct: 1,
          pre: "e7s3l6",
          hint: "Find the words times a day.",
          fbOk: "Yes!",
          fbBad: "One tablet, but how many times a day?",
          fbText: "One tablet <b>three times a day</b> = three tablets a day."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about health: where to go, your symptoms, what has happened, and advice.",
        learned: [
          "Say where to go when you feel ill.",
          "Tell a doctor your symptoms and when they started.",
          "Give advice with ought to and should.",
          "Read a simple medicine label."
        ]
      }
    }
  ]
});
