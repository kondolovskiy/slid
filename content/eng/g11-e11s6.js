/* Слід · Англійська мова, 11 клас — «Travel and tourism» (e11s6)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B2), 11 кл.: тема «Подорож» —
   подорож Україною та країнами виучуваної мови; види туризму (с. 23–24); граматика (с. 25): linking words for chronological
   sequence; beforehand, afterwards — повторення first, then, after that, finally (e6s3l3, e9s9l5), нове: at first, eventually,
   in the end, at the end of, meanwhile (l5), beforehand, afterwards, later (l6); prepositional vs phrasal verbs
   (separable / inseparable) — розширення e10s8l3–l4 (місце додатка, TQ-140): travel verbs (l3), separable, inseparable,
   three-part (l4). Обсяги — с. 21 (текст для читання 400–450 слів: l2 і l6, по три екрани ≤ 190 слів):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. e6s5 (підготовка до подорожі) і e9s8 (міста:
   Lviv, Odesa, Kharkiv, Chernihiv, Edinburgh, Dublin…) не дублюємо: місця — Chernivtsi, Sofiyivka (Uman), Lake Synevyr,
   Lake District. Безпека: без закликів їхати в небезпечні регіони, цивільних рейсів з України немає (EASA CZIB 2022-01) —
   Andrii їде потягом до Poland і летить звідти; у статті l2 — порада перевіряти безпеку перед поїздкою.
   Друга правильна відповідь: after як прислівник можливий (CD Grammar «After, afterwards») — тож bare after ніде не є
   хибним варіантом у позиції прислівника; хибні — afterwards / beforehand + іменник, beforehand / afterwards за змістом;
   at the end без of теж буває правильним — хибним лише «in the end of»; first ↔ at first — за CD Grammar «First, firstly
   or at first?» (у переліку кроків — First, у контрасті — At first, Firstly у контрасті хибне); afterward (AmE) — у ключі
   `word`; separable — обидва порядки з іменником у `build`; get off у значенні «вирушати» (CD) — не в `word`.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–10 кл., на сім років старші, ніж у 4 кл.: Oksana, Andrii, Mariia, Taras, Emma — 17.
   Нова: Mrs Popovych (власниця гостьового будинку в селі біля Lake Synevyr). Поїздка Andrii до Emma — серпень минулого року.
   Факти (Резиденція митрополитів у Chernivtsi, Sofiyivka, Synevyr, Lake District, Scafell Pike, Windermere) — з двох
   джерел; URL — tasks/…/write-eng-g11-e11s6.md. Форми й наголос — Cambridge Dictionary (CD), CD Grammar, OALD.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s6, 2026-11-26; reports/verify/write-eng-g11-e11s6.md). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s4).
   Перевірка: node tools/validate.mjs --section e11s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s6",
  grade: 11,
  weeks: [23, 26],
  title: "Travel and tourism",
  why: "To talk about travelling around Ukraine and English-speaking countries and about kinds of tourism. And to tell the story of a trip in the right order.",
  requires: ["e6s3l3", "e6s5l1", "e9s9l5", "e10s4l6", "e10s8l3", "e10s8l4"],
  meta: { author: "writer-e11s6", created: "2026-11-26", factcheck: "verifier-e11s6, 2026-11-26 (reports/verify/write-eng-g11-e11s6.md)", teacher: null },
  badges: [
    { id: "e11s6boss", name: "Seasoned Traveller", icon: "trophy", desc: "Finish the final lesson “Travel and tourism”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s6l1",
      title: "Kinds of tourism: active, cultural, green",
      short: "Kinds of tourism",
      icon: "globe",
      status: "verified",
      why: "Some people travel for adventure, some for history and some for nature. Learn to name different kinds of tourism.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What kind of holiday do you enjoy?",
          body: `<p class="lead">This month, the penfriend club’s topic is “Holidays with a difference”. Ms Kravets asks: “What kind of holiday do you enjoy?”</p><p><b>Taras:</b> Hiking and rafting in the Carpathians. I can’t sit still on holiday!<br><b>Emma:</b> Castles, museums and old towns. I love history.<br><b>Oksana:</b> Every summer, families from big cities come to stay on farms near our village.<br><b>Mariia:</b> I’d like a trip that doesn’t harm nature.</p><p>Four people, four kinds of tourism. What are they called?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras goes hiking and rafting in the mountains. What kind of tourism is it?</p>`,
          opts: [
            "active tourism",
            "cultural tourism",
            "rural tourism"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>active tourism</b>: a holiday with sport and adventure. The next screen has more words."
        },
        {
          type: "info",
          title: "Kinds of tourism",
          body: `<ul><li><b><u>ac</u>tive tourism</b> → sport and adventure: hiking, cycling, rafting, climbing</li><li><b><u>cul</u>tural tourism</b> → history and art: museums, castles, festivals, <u>sight</u>seeing</li><li><b><u>e</u>cotourism</b> (also <b>green tourism</b>) → visiting nature without damaging it, and helping local people</li><li><b><u>ru</u>ral tourism</b> → a holiday in the countryside, often on a farm</li><li>a <b><u>guest</u>house</b> → a small, cheap hotel</li><li><b>accommo<u>da</u>tion</b> → a place to stay</li><li>a <b>desti<u>na</u>tion</b> → the place where you are going</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the words and their meanings.</p>`,
          left: ["active tourism", "cultural tourism", "ecotourism", "rural tourism", "a guesthouse"],
          right: ["hiking and rafting in the mountains", "visiting museums and old castles", "travelling in a way that protects nature", "staying on a farm in the countryside", "a small, cheap hotel"],
          hint: "Which one is about sport? Which one is about history?",
          fbOk: "Right.",
          fbBad: "Look at the list of words again.",
          fbText: "<b>Active</b> → sport and adventure. <b>Cultural</b> → museums and castles. <b>Ecotourism</b> → protecting nature. <b>Rural</b> → a farm in the countryside. A <b>guesthouse</b> → a small, cheap hotel."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it active tourism or cultural tourism?</p>`,
          bins: ["Active tourism", "Cultural tourism"],
          items: [
            ["climbing in the mountains", 0],
            ["cycling along the coast", 0],
            ["rafting on a river", 0],
            ["a guided tour of a castle", 1],
            ["a music festival", 1],
            ["a visit to an art gallery", 1]
          ],
          hint: "Is it sport, or is it history and art?",
          fbOk: "Exactly.",
          fbBad: "Think: do you move a lot, or do you look at art and history?",
          fbText: "Climbing, cycling and rafting are <b>active tourism</b>. A castle tour, a festival and an art gallery are <b>cultural tourism</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: What makes a trip green?",
          title: "Read and choose.",
          body: `<p>Mariia found some tips for ecotourism. Choose a small local guesthouse, not a huge hotel. Buy food from local farmers and markets, so your money helps the people who live there. Travel by train or bus when you can. In a national park, stay on the paths and take all your rubbish home. And remember: you are a guest in someone else’s home.</p><p>Which tip does Mariia give?</p>`,
          opts: [
            "Stay in a huge hotel far from the village.",
            "Buy food from local farmers.",
            "Always travel by car."
          ],
          correct: 1,
          hint: "Find what the text says about food, rubbish and hotels.",
          fbOk: "Good eye!",
          fbBad: "Read the tips again: what does Mariia say about food?",
          fbText: "Mariia says: buy food from <b>local farmers</b>, so your money helps local people. She suggests a small guesthouse, not a huge hotel, and the train or bus, not the car."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her village, Zelena Dolyna.</p>`,
          text: "Every summer, families from Poltava and Kyiv come to our village. They like {*rural|cultural|active} tourism: a quiet holiday in the countryside. My neighbours have a small {*guesthouse|destination|festival} with four rooms. Our village isn’t a famous {*destination|accommodation|guesthouse}, but the guests love it.",
          hint: "A holiday in the countryside: … tourism. A small, cheap hotel: a … The place where you are going: a …",
          fbOk: "Well done!",
          fbBad: "Check the meanings in the list of words.",
          fbText: "A holiday in the countryside → <b>rural</b> tourism. A small hotel → a <b>guesthouse</b>. A place people travel to → a <b>destination</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["des|ti|+na|tion", "ac|com|mo|+da|tion", "+cul|tur|al", "+guest|house", "+sight|see|ing", "+ru|ral"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list of words.",
          fbText: "Desti<u>na</u>tion, accommo<u>da</u>tion: the stress is on <i>-na-</i> and <i>-da-</i>, before <i>-tion</i>. <u>Cul</u>tural, <u>guest</u>house, <u>sight</u>seeing, <u>ru</u>ral: on the first part."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia wants a holiday in nature that doesn’t damage it and that helps local people.</p>`,
          before: "Mariia is interested in",
          after: ".",
          answer: ["ecotourism", "eco-tourism", "green tourism"],
          hint: "Look at the list of words: which kind of tourism protects nature?",
          fbOk: "Right.",
          fbBad: "It’s one word from the list. It starts with e…",
          fbText: "A holiday that protects nature and helps local people is <b>ecotourism</b> (or <b>green tourism</b>)."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes her post for the club.</p>`,
          text: "I usually prefer {*cultural|active|rural} tourism: museums, castles and old towns. But next summer, I want to try {*active|cultural|rural} tourism: hiking and cycling in the hills! We’ll stay in a small {*guesthouse|destination|festival} and buy food from local farmers. That’s {*greener|more cultural|busier} than a big hotel, isn’t it?",
          hint: "History and art: … Sport and adventure: … Which way of travelling protects nature?",
          fbOk: "Brilliant!",
          fbBad: "Check: history, sport, a small hotel, and protecting nature.",
          fbText: "Museums and castles → <b>cultural</b>. Hiking and cycling → <b>active</b>. A small hotel → a <b>guesthouse</b>. Local food and a small guesthouse are <b>greener</b>: better for nature."
        }
      ],
      outro: {
        text: "Active, cultural, rural and ecotourism: now you can talk about different kinds of tourism.",
        learned: [
          "Name kinds of tourism: active, cultural, rural, ecotourism.",
          "Use the words guesthouse, accommodation and destination.",
          "Read tips for a green trip and find the main ideas."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s6l2",
      title: "Travelling around Ukraine: places to visit",
      short: "Around Ukraine",
      icon: "map",
      status: "verified",
      why: "Ukraine has old cities, beautiful parks and mountain lakes. Read an article about three places to visit.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Three places for the website",
          body: `<p class="lead">Andrii’s class in Kyiv is writing an article for the “Two countries” website: “Travelling around Ukraine”.</p><p><b>Ms Lysenko:</b> Emma’s class wants to know where to go in Ukraine. Any ideas?<br><b>Daryna:</b> Let’s choose three places: a city, a park and a lake.<br><b>Andrii:</b> And let’s add some safety advice. Every trip needs a good plan.</p><p>Which places would you choose?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which is the largest lake in the Ukrainian Carpathians?</p>`,
          opts: [
            "Lake Synevyr",
            "Lake Svitiaz",
            "Windermere"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>Lake Synevyr</b>. Svitiaz is the deepest lake in Ukraine, but it isn’t in the mountains. Windermere is in England. Read the article to find out more."
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li>a <b>World <u>Her</u>itage Site</b> → a place on the UNESCO list of important places in the world</li><li>a <b><u>res</u>idence</b> → the home of an important person</li><li>to <b>be named after</b> someone → to get their name: <i>The park is named after Sofia.</i></li><li>a <b><u>wa</u>terfall</b> → water falling from rocks</li><li>a <b><u>grot</u>to</b> → a small cave</li><li>a <b>trail</b> → a path through the countryside or a forest</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Reading: Travelling around Ukraine, part 1 of 3",
          title: "Read and choose.",
          body: `<p><b>A city: Chernivtsi.</b> Chernivtsi, in the west of Ukraine, is a city of old streets, cafés and beautiful buildings. Its most famous sight is the Residence of Bukovinian and Dalmatian Metropolitans. Metropolitans were church leaders, and this was their home. The buildings were built between 1864 and 1882, and they were designed by the Czech architect Josef Hlávka. In 2011, UNESCO added the residence to its World Heritage List. But today, church leaders don’t live there: the buildings are part of Chernivtsi University. So every day, students go to their lectures in a World Heritage Site!</p><p>What is the residence today?</p>`,
          opts: [
            "a hotel for tourists",
            "a home for church leaders",
            "part of a university"
          ],
          correct: 2,
          hint: "Find the sentence that starts with “But today”.",
          fbOk: "Right.",
          fbBad: "Read the sentence about today again.",
          fbText: "Today, the buildings are <b>part of Chernivtsi University</b>. Church leaders lived there in the past."
        },
        {
          type: "multi",
          sk: "cult",
          eyebrow: "Reading: Travelling around Ukraine, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><b>A park: Sofiyivka.</b> In the centre of Ukraine, in the city of Uman, there is Sofiyivka Park. Count Stanisław Potocki, a rich Polish nobleman, started to create it in 1796. He named the park after his wife, Sofia. It is a landscape park: people made the ponds, the paths and even the rocks, but everything looks natural. As you walk around, you come across waterfalls, fountains, grottoes and old statues. Today, Sofiyivka is also a national dendrological park, where scientists grow and study trees and plants. Bring comfortable shoes: you will walk a lot!</p><p>Which sentences are true?</p>`,
          opts: [
            "Potocki named the park after his wife.",
            "The park is in the far west of Ukraine.",
            "Visitors can see waterfalls and grottoes.",
            "The rocks and ponds in the park are completely natural."
          ],
          correct: [0, 2],
          hint: "Find the name Sofia, the part of Ukraine and the words “people made”.",
          fbOk: "Good eye!",
          fbBad: "Read the text again and check each sentence.",
          fbText: "Potocki named the park after his wife, <b>Sofia</b>, and visitors see <b>waterfalls and grottoes</b>. The park is in the <b>centre</b> of Ukraine, and people made the rocks and ponds."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Travelling around Ukraine, part 3 of 3",
          title: "Read and choose.",
          body: `<p><b>A lake: Synevyr.</b> For green tourism, go to Zakarpattia, in the far west of Ukraine. High in the mountains, among forests, lies Lake Synevyr, the largest lake in the Ukrainian Carpathians. It is part of Synevyr National Nature Park. There are hiking trails around the lake, and visitors often stay in guesthouses in the villages nearby. Please follow the park rules: stay on the trails, take your rubbish home and don’t feed wild animals. And one more piece of advice for any trip in Ukraine today. Before you travel, check the latest safety advice. Find out where the nearest shelter is.</p><p>What is the main idea of the whole article?</p>`,
          opts: [
            "Only Chernivtsi is worth visiting.",
            "Ukraine has great places for cultural and green tourism, and every trip needs a safe plan.",
            "Ukraine has no national parks."
          ],
          correct: 1,
          hint: "Think about all three parts: a city, a park, a lake and the advice.",
          fbOk: "Exactly.",
          fbBad: "Parts 1 and 2 are about a city and a park. What is part 3 about?",
          fbText: "The article shows a <b>city, a park and a lake</b> in Ukraine, and it ends with <b>safety advice</b> for every trip."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          body: `<p>Match the names and the facts from the article.</p>`,
          left: ["the Residence in Chernivtsi", "Sofiyivka Park", "Lake Synevyr", "Josef Hlávka"],
          right: ["a World Heritage Site since 2011", "named after the wife of a count", "the largest lake in the Ukrainian Carpathians", "the architect of the residence"],
          hint: "Which one is a person? Which one is in the mountains?",
          fbOk: "Well done!",
          fbBad: "Read the three parts of the article again.",
          fbText: "The Residence → UNESCO since 2011. Sofiyivka → named after Sofia, the wife of Count Potocki. Synevyr → the largest lake in the Ukrainian Carpathians. Hlávka → the architect."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Daryna writes a fact box for the article.</p>`,
          text: "The residence in Chernivtsi {*was built|built|was build} between 1864 and 1882. Sofiyivka Park {*is named after|names after|is name after} Sofia Potocka. Around Lake Synevyr, there are many hiking {*trails|grottoes|residences}.",
          hint: "was + the third form. is + named + after. A path through a forest: a …",
          fbOk: "Yes!",
          fbBad: "Check the passive forms and the list of words.",
          fbText: "The residence <b>was built</b>: was + the third form. The park <b>is named after</b> Sofia. Paths through the forest → <b>trails</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>In Sofiyivka Park, there are several small caves.</p>`,
          before: "A small cave is called a",
          after: ".",
          answer: "grotto",
          hint: "Look at the list of words for the article.",
          fbOk: "Right.",
          fbBad: "It’s a word from the list. It starts with g…",
          fbText: "A small cave is a <b>grotto</b>. Sofiyivka has several of them."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Andrii writes the last line of the article.</p>`,
          tiles: ["before", "your trip", "check", "the latest", "safety advice"],
          extra: ["checks"],
          answer: ["Before your trip check the latest safety advice.", "Check the latest safety advice before your trip."],
          hint: "An instruction starts with a verb. Or start with the time words.",
          fbOk: "Exactly.",
          fbBad: "An instruction: check, not checks.",
          fbText: "<b>Check the latest safety advice before your trip.</b> The time words can also go at the start."
        }
      ],
      outro: {
        text: "Chernivtsi, Sofiyivka and Lake Synevyr: now you can tell people about places to visit in Ukraine.",
        learned: [
          "Read an article about places to visit in Ukraine.",
          "Use the words World Heritage Site, residence, grotto and trail.",
          "Give safety advice for a trip."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s6l3",
      title: "Check in, look around, get on: travel verbs",
      short: "Travel verbs",
      icon: "path",
      status: "verified",
      why: "Every journey has its own verbs: set off, get on, check in. Learn the phrasal verbs you need when you travel.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "A weekend near Lake Synevyr",
          body: `<p class="lead">Taras and Ostap went on a trip to Zakarpattia. Taras writes to the penfriend club.</p><p><i>We <b>set off</b> from Lviv at six in the morning. Ostap’s mum <b>saw us off</b> at the station. We <b>got on</b> the train and slept all the way! Then we took a bus. In the afternoon, Mrs Popovych, the owner of our guesthouse, <b>picked us up</b> at the bus stop. We <b>checked in</b>, left our bags and <b>looked around</b> the village.</i></p><p>Set off, see off, pick up: what do they mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Ostap’s mum <b>saw us off</b> at the station.”</p><p>What did she do?</p>`,
          opts: [
            "She went to the station to say goodbye.",
            "She didn’t see them at the station.",
            "She met them when they came back."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "To <b>see someone off</b> is to go to the station or airport to say goodbye. The next screen has more travel verbs."
        },
        {
          type: "info",
          title: "Travel verbs",
          body: `<ul><li><b>set off</b> → start a journey</li><li><b>see</b> someone <b>off</b> → go to the station to say goodbye</li><li><b>get on</b> / <b>get off</b> → a train, a bus, a plane</li><li><b>get in</b> (<b>into</b>) / <b>get out of</b> → a car, a taxi</li><li><b>pick</b> someone <b>up</b> → collect someone, often by car</li><li><b>drop</b> someone <b>off</b> → take someone somewhere by car and leave them there</li><li><b>check in</b> → arrive at a hotel and give your name</li><li><b>check out</b> → pay and leave a hotel</li><li><b>look around</b> a place (also <b>look round</b>) → visit it and look at things there</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the verbs and their meanings.</p>`,
          left: ["set off", "see someone off", "pick someone up", "check out", "look around a place"],
          right: ["start a journey", "say goodbye at the station", "collect someone by car", "pay and leave a hotel", "visit a place and look at things there"],
          hint: "Which one is about a hotel? Which one is about saying goodbye?",
          fbOk: "Right.",
          fbBad: "Look at the list of travel verbs again.",
          fbText: "<b>Set off</b> → start a journey. <b>See off</b> → say goodbye. <b>Pick up</b> → collect. <b>Check out</b> → pay and leave. <b>Look around</b> → visit and look at things."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Ostap writes about the journey home.</p>`,
          text: "At the bus stop, we got {*on|in|out} the bus to the station. In the town, we got {*off|out|into} it and walked to the station. Our train was late, so Dad came to the station by car. We got {*into|on|off} the car, and he drove us home. At home, we got {*out of|off|on} the car with all our bags.",
          hint: "A bus or a train: get on / get off. A car: get into / get out of.",
          fbOk: "Well done!",
          fbBad: "Is it a bus or a car? Look at the list again.",
          fbText: "A bus: get <b>on</b>, get <b>off</b>. A car: get <b>into</b>, get <b>out of</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Taras’s message is wrong.</p>`,
          text: "Ostap’s mum [!saw us off] at the station, and we [got in the train] at ten past six. In the evening, we [!checked in] at the guesthouse.",
          hint: "Is it a car or a train?",
          fbOk: "Good eye!",
          fbBad: "Check the verb with the train.",
          fbText: "Correct: we <b>got on</b> the train. We get in a car or a taxi. <i>Saw us off</i> and <i>checked in</i> are correct."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Taras writes again on Sunday.</p><p><i>This morning, we checked out of the guesthouse after breakfast. Mrs Popovych was going to the market in the town, so she dropped us off at the bus stop on her way. Ostap said, “We should come back in winter!” I agree: Lake Synevyr in the snow must be amazing.</i></p><p>Who took Taras and Ostap to the bus stop?</p>`,
          opts: [
            "Ostap’s mum",
            "a taxi driver",
            "Mrs Popovych"
          ],
          correct: 2,
          hint: "What does drop someone off mean?",
          fbOk: "Yes!",
          fbBad: "Read the second sentence again.",
          fbText: "<b>Mrs Popovych</b> dropped them off: she took them to the bus stop in her car and then drove to the market."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Taras about her plans.</p>`,
          text: "My penfriend Andrii is coming to England in August! Dad will {*pick him up|see him off|check him in} at the airport. On the first day, we’ll {*look around|set off|get off} London. Then on Saturday, we’ll {*set off|look around|drop off} for the Lake District early in the morning.",
          hint: "Collect someone at the airport. Visit a place. Start a journey.",
          fbOk: "Exactly.",
          fbBad: "Look at the meanings in the list of travel verbs.",
          fbText: "Dad will <b>pick him up</b>: collect him. They’ll <b>look around</b> London: visit it. They’ll <b>set off</b>: start the journey."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>A notice in a guesthouse.</p>`,
          before: "Before you leave, please pay at reception and",
          after: "out by 11 am.",
          answer: "check",
          hint: "Pay and leave a hotel: … out.",
          fbOk: "Right.",
          fbBad: "Look at the two verbs about hotels in the list.",
          fbText: "Please <b>check out</b> by 11 am: pay and leave the guesthouse."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras finishes his post for the club.</p>`,
          text: "We {*set off|picked up|checked out} from Lviv very early. Ostap’s mum {*saw us off|picked us up|checked us in} at the station. In the afternoon, Mrs Popovych {*picked us up|saw us off|got us on} at the bus stop. We {*checked in|checked out|got off} at her guesthouse and then {*looked around|set off|dropped off} the village. On Sunday, we {*got on|got into|got out of} the train home, tired but happy.",
          hint: "Start a journey; say goodbye; collect; arrive at a hotel; visit; a train.",
          fbOk: "Brilliant!",
          fbBad: "Check each verb in the list of travel verbs.",
          fbText: "They <b>set off</b>, Ostap’s mum <b>saw them off</b>, Mrs Popovych <b>picked them up</b>, they <b>checked in</b>, <b>looked around</b> the village and <b>got on</b> the train home."
        }
      ],
      outro: {
        text: "Set off, get on, check in, look around: now you have the verbs to describe a journey.",
        learned: [
          "Use travel verbs: set off, see off, pick up, drop off, check in, check out.",
          "Choose get on / get off for a train or bus and get into / get out of for a car.",
          "Describe a journey in a short message."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s6l4",
      title: "Pick it up, look after it: phrasal or prepositional?",
      short: "Pick it up, look after it",
      icon: "target",
      status: "verified",
      why: "Pick him up, but look after him: the object doesn’t always go in the same place. Learn which verbs can be separated.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who will pick him up?",
          body: `<p class="lead">Andrii is getting ready for his trip to England. He gets messages from Emma and from his mum.</p><p><b>Emma:</b> Dad will pick you up at the airport. Don’t worry, he’ll find you!<br><b>Mum:</b> I’ll see you off at the station. And Sofiia will look after your plants.<br><b>Andrii:</b> Thanks! I’m really looking forward to it.</p><p>Pick <b>you</b> up, but look after <b>your plants</b>: why does the object go in different places?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s plants need water every day. Which is correct?</p>`,
          opts: [
            "Sofiia will look after them.",
            "Sofiia will look them after.",
            "Both are correct."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Only <b>look after them</b> is correct. But with <i>pick up</i>, the pronoun goes in the middle: <i>pick you up</i>. The next screens explain why."
        },
        {
          type: "info",
          title: "Separable verbs: pick it up",
          body: `<p>Some phrasal verbs are <b>separable</b>: the object can go between the verb and the small word.</p><ul><li>a <b>noun</b> → before or after the small word:<br>pick <b>up</b> Andrii = pick Andrii <b>up</b> · look <b>up</b> the word = look the word <b>up</b></li><li>a <b>pronoun</b> (it, them, him, me) → always in the middle:<br>pick <b>him</b> up · look <b>it</b> up · see <b>me</b> off · drop <b>us</b> off</li></ul><p>Not: <s>pick up him</s>, <s>look up it</s></p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma tells her mum the plan. There is more than one correct order.</p>`,
          tiles: ["Dad", "will", "pick", "up", "Andrii", "at the airport"],
          extra: ["picks"],
          answer: [
            "Dad will pick up Andrii at the airport.",
            "Dad will pick Andrii up at the airport.",
            "At the airport Dad will pick up Andrii.",
            "At the airport Dad will pick Andrii up."
          ],
          hint: "With a noun, up can go before or after it.",
          fbOk: "Yes!",
          fbBad: "will + pick, not picks.",
          fbText: "<b>Dad will pick up Andrii</b> = <b>Dad will pick Andrii up</b>. With a noun, both orders are correct."
        },
        {
          type: "info",
          title: "Inseparable verbs: look after it",
          body: `<p>Other verbs are <b>inseparable</b>. They are <b>prepositional verbs</b>: a verb + a preposition. The object always goes <b>after</b> the preposition – a noun or a pronoun.</p><ul><li>look <b>after</b> the plants → look after <b>them</b></li><li>get <b>on</b> / get <b>off</b> the train → get on <b>it</b></li><li>look <b>around</b> the castle → look around <b>it</b></li><li>come <b>across</b> something → find it by chance</li></ul><p>Not: <s>look them after</s>, <s>get it on</s> (for a train)</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Where does a pronoun go?</p>`,
          bins: ["In the middle: pick it up", "After: look after it"],
          items: [
            ["pick up", 0],
            ["see off", 0],
            ["look up (a word)", 0],
            ["look after", 1],
            ["get on (a train)", 1],
            ["look around (a place)", 1]
          ],
          hint: "Try each verb with it: pick it up or pick up it?",
          fbOk: "Well done!",
          fbBad: "Separable verbs: the pronoun in the middle. Prepositional verbs: after.",
          fbText: "Separable: <b>pick it up</b>, <b>see me off</b>, <b>look it up</b>. Inseparable: <b>look after it</b>, <b>get on it</b>, <b>look around it</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii makes a plan for the day he leaves.</p>`,
          text: "Sofiia will look {*after them|them after} while I’m away. Mum will see {*me off|off me} at the station. When the train comes, I’ll get {*on it|it on} quickly. In London, Emma’s dad will pick {*me up|up me}.",
          hint: "Separable: the pronoun goes in the middle. Prepositional: the pronoun goes after.",
          fbOk: "Exactly.",
          fbBad: "Check each verb: is it separable or not?",
          fbText: "Look <b>after them</b>, get <b>on it</b>: prepositional verbs, the pronoun goes after. See <b>me off</b>, pick <b>me up</b>: separable, the pronoun goes in the middle."
        },
        {
          type: "info",
          title: "Three-part verbs: look forward to it",
          body: `<p>Some verbs have <b>three parts</b>: a verb + a small word + a preposition. They are inseparable too: the object goes at the end.</p><ul><li><b>look forward to</b> → feel happy about something in the future:<br>I’m looking forward to <b>the trip</b> / to <b>it</b> / to <b>seeing</b> you.</li><li><b>run out of</b> → have no more of something:<br>We <b>ran out of</b> water.</li><li><b>get on with</b> → have a good relationship with someone</li></ul><p>After <i>look forward to</i>: a noun or verb<b>-ing</b>. Not: <s>looking forward to see you</s></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii writes to Emma the night before the trip.</p><p>Which sentence is correct?</p>`,
          opts: [
            "I’m looking forward to see you.",
            "I’m looking forward it to.",
            "I’m looking forward to seeing you."
          ],
          correct: 2,
          hint: "After look forward to: a noun, a pronoun or verb-ing.",
          fbOk: "Right.",
          fbBad: "Which form comes after to? Where does the object go?",
          fbText: "Looking forward <b>to seeing</b> you is correct. After <i>look forward to</i>, use verb-ing, and the object goes at the end: <i>looking forward to it</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii and Emma’s family went on a long walk in the hills.</p>`,
          before: "We ran",
          after: "of water, so we bought some in a village shop.",
          answer: "out",
          hint: "Have no more of something: run … of.",
          fbOk: "Well done!",
          fbBad: "Look at the box on three-part verbs.",
          fbText: "We <b>ran out of</b> water: we had no more water."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s message is wrong.</p>`,
          text: "I didn’t know one word, so I [looked up it] in a dictionary. Emma’s dad [!picked me up] at the airport, and her mum [!looked after me] all week.",
          hint: "Is look up separable? Where does it go?",
          fbOk: "Good eye!",
          fbBad: "Find a pronoun in the wrong place.",
          fbText: "Correct: I <b>looked it up</b>. <i>Look up</i> is separable, so the pronoun goes in the middle. <i>Picked me up</i> and <i>looked after me</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma a week before the trip.</p>`,
          text: "I’m really looking forward {*to seeing|to see|seeing} you! Mum will see {*me off|off me} at the station in Kyiv. Could your dad pick {*me up|up me} at the airport? I wanted to know how long the train journey is, so I looked {*it up|up it} online. And don’t worry about my plants: Sofiia will look {*after them|them after}.",
          hint: "look forward to + -ing. Separable: the pronoun in the middle. Prepositional: after.",
          fbOk: "Brilliant!",
          fbBad: "Check where each pronoun goes.",
          fbText: "Looking forward <b>to seeing</b> you. See <b>me off</b>, pick <b>me up</b>, looked <b>it up</b>: separable. Look <b>after them</b>: prepositional."
        }
      ],
      outro: {
        text: "Pick it up, look after it, look forward to it: now you know where the object goes.",
        learned: [
          "Put a pronoun in the middle of a separable phrasal verb: pick him up.",
          "Put the object after a prepositional verb: look after them, get on it.",
          "Use three-part verbs: look forward to + -ing, run out of."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s6l5",
      title: "At first, then, eventually: the order of events",
      short: "The order of events",
      icon: "line",
      status: "verified",
      why: "A good story about a trip tells the events in the right order. Learn the words that show what happened when.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "The trip that went wrong",
          body: `<p class="lead">Oksana’s class from the lyceum in Poltava went on a trip to Sofiyivka Park. She writes to the penfriend club.</p><p><i><b>At first</b>, everything went wrong. The bus was late, and <b>then</b> it broke down near a small village. <b>Meanwhile</b>, it started to rain. We waited by the road for two hours, but <b>eventually</b> another bus came. <b>In the end</b>, it was the best trip of the year!</i></p><p>At first, meanwhile, eventually: what do these words tell us?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“We waited for two hours, but <b>eventually</b> another bus came.”</p><p>What does <i>eventually</i> mean?</p>`,
          opts: [
            "after a long time",
            "maybe, possibly",
            "at the same time"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Eventually</b> means ‘in the end, after a long time or a lot of problems’. It doesn’t mean ‘maybe’. The next screen explains it."
        },
        {
          type: "info",
          title: "The order of events",
          body: `<ul><li><b>First,</b> … → the first step: <i>First, we bought our tickets.</i></li><li><b>Then</b> / <b>After that,</b> / <b>Next,</b> … → the next step</li><li><b>At first</b> → at the beginning, before a change: <i>At first I was bored, but then I loved it.</i></li><li><b>Meanwhile</b> → at the same time, while something else is happening</li><li><b>Eventually</b> → after a long time or a lot of problems (not ‘maybe’)</li><li><b>Finally,</b> → the last step</li></ul><p>e<u>ven</u>tually, <u>mean</u>while</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana: “___ I didn’t want to go on the trip, but now I’m really glad I went.”</p><p>Which word goes in the gap?</p>`,
          opts: [
            "Firstly,",
            "At first,",
            "Meanwhile,"
          ],
          correct: 1,
          hint: "Is it a list of steps, or a change from the beginning to now?",
          fbOk: "Exactly.",
          fbBad: "Look at the line about at first in the box.",
          fbText: "<b>At first</b> means ‘at the beginning’, before a change: she didn’t want to go, but now she’s glad. <i>Firstly</i> starts a list of steps or points."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana’s teacher writes the plan for the trip.</p>`,
          text: "{*First|At first|Meanwhile}, meet at the lyceum at seven o’clock. {*Then|At first|Eventually} get on the bus and find your seat. {*Finally|At first|Meanwhile}, when we come back in the evening, wait for your parents in the lyceum.",
          hint: "This is a list of steps: the first one, the next one, the last one.",
          fbOk: "Right.",
          fbBad: "Steps in a plan: First, Then, Finally.",
          fbText: "A plan of steps: <b>First</b>, <b>Then</b>, <b>Finally</b>. <i>At first</i> isn’t used for steps: it shows a change."
        },
        {
          type: "info",
          title: "In the end or at the end of?",
          body: `<ul><li><b>in the end</b> → finally, after a lot of problems, changes or discussion:<br>We missed the bus and waited for hours. <b>In the end</b>, we took a taxi.</li><li><b>at the end of</b> + noun → at the time when something finishes:<br><b>at the end of</b> the day · <b>at the end of</b> the trip</li></ul><p>Not: <s>in the end of the trip</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Oksana writes more about the trip.</p>`,
          text: "{*At|In} the end of the day, we were tired but happy. We wanted to see all the waterfalls and all the grottoes, but there wasn’t time for both. We talked about it for ages, and in the {*end|ending|last} we chose the grottoes. {*Meanwhile|Firstly|Eventually}, our teacher was buying tickets for everyone.",
          hint: "at the end of + noun. in the end = finally. At the same time: …",
          fbOk: "Yes!",
          fbBad: "Look at the two boxes again.",
          fbText: "<b>At</b> the end of the day: at + the end of + noun. In the <b>end</b>: finally, after a long discussion. <b>Meanwhile</b>: at the same time."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "We waited for hours, but eventually the bus came.",
            "I’ll eventually come to your party, but I’m not sure yet.",
            "At first, the trip was boring, but then it was great.",
            "In the end of the day, we went home."
          ],
          correct: [0, 2],
          hint: "Does eventually mean ‘maybe’? Which phrase needs at … of?",
          fbOk: "Well done!",
          fbBad: "Two sentences are correct. Check eventually and the end.",
          fbText: "<b>Eventually</b> = after a long time, so the bus came. It doesn’t mean ‘maybe’: say <i>Maybe I’ll come…</i>. <b>At first</b> shows a change. It’s <b>at</b> the end of the day, not <i>in</i>."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Put Oksana’s story in order.</p>`,
          items: [
            "At first, everything went wrong: the bus was late.",
            "Then it broke down near a small village.",
            "Meanwhile, as we waited by the road, our teacher phoned for another bus.",
            "Eventually, after two hours, the new bus came.",
            "In the end, we had a wonderful day in Sofiyivka Park."
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "At first… → Then… → Meanwhile… → Eventually… → In the end…",
          fbOk: "Good eye!",
          fbBad: "Follow the words: at first → then → meanwhile → eventually → in the end.",
          fbText: "<b>At first</b> the bus was late. <b>Then</b> it broke down. <b>Meanwhile</b>, the teacher phoned. <b>Eventually</b> a new bus came. <b>In the end</b>, it was a wonderful day."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write one word from the lesson. It means ‘after a long time or a lot of problems’.</p>`,
          before: "We waited for three hours, but",
          after: "a new bus arrived.",
          answer: ["eventually", "finally", "at last", "in the end", "later"],
          hint: "It doesn’t mean ‘maybe’.",
          fbOk: "Well done!",
          fbBad: "Look at the box on the order of events. The word starts with e…",
          fbText: "After a long wait, <b>eventually</b> a new bus arrived. <i>Finally</i> is correct here too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana finishes her post.</p>`,
          text: "{*At first|Firstly|Finally}, I thought the trip was a disaster. But after a long wait, the new bus {*eventually|meanwhile|at first} came. In Sofiyivka, we walked past waterfalls and old statues. {*Meanwhile|Firstly}, our teacher took hundreds of photos. {*At|In} the end of the trip, we all sang on the bus home!",
          hint: "A change: … After a long time: … At the same time: … at the end of + noun.",
          fbOk: "Brilliant!",
          fbBad: "Check each word in the two boxes.",
          fbText: "<b>At first</b>: before a change. <b>Eventually</b>: after a long wait. <b>Meanwhile</b>: at the same time. <b>At</b> the end of the trip."
        }
      ],
      outro: {
        text: "At first, then, meanwhile, eventually, in the end: now you can tell a story in the right order.",
        learned: [
          "Show the order of events: first, then, after that, finally.",
          "Use at first, meanwhile and eventually correctly.",
          "Choose between in the end and at the end of."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s6l6",
      title: "Beforehand and afterwards: a trip abroad",
      short: "A trip abroad",
      icon: "flag",
      status: "verified",
      why: "What did you do before a trip, and what happened after it? Read about a trip to England and use beforehand and afterwards.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "My first trip abroad",
          body: `<p class="lead">Last August, Andrii visited Emma in England. Now he’s writing about it for the “Two countries” website.</p><p><i>Beforehand, I was really nervous: it was my first trip abroad on my own. Afterwards, I couldn’t stop talking about it!</i></p><p>Beforehand, afterwards: when did these things happen?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“<b>Beforehand</b>, I was really nervous.”</p><p>When was Andrii nervous?</p>`,
          opts: [
            "after the trip",
            "before the trip",
            "only on the plane"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Beforehand</b> means ‘before an event’: he was nervous before the trip. The next screen explains it."
        },
        {
          type: "info",
          title: "Beforehand, afterwards, later",
          body: `<ul><li><b>be<u>fore</u>hand</b> → before an event. No noun after it:<br>I was nervous <b>beforehand</b>.</li><li><b><u>af</u>terwards</b> → after an event. No noun after it:<br>We had dinner <b>afterwards</b>. (<i>afterward</i> – American English)</li><li><b>before</b> / <b>after</b> + noun or sentence:<br><b>after</b> the climb · <b>before</b> we left</li><li><b>later</b> → after some time: <i>three days later</i></li></ul><p>Not: <s>afterwards the climb</s>, <s>beforehand the trip</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about getting ready for the trip.</p>`,
          text: "{*Before|Beforehand} the trip, I read a lot about the Lake District. We booked the plane tickets four months {*beforehand|afterwards}, so they weren’t expensive. {*After|Afterwards} my first day in England, I felt much better.",
          hint: "Is there a noun after the gap? If yes: before or after.",
          fbOk: "Right.",
          fbBad: "Beforehand and afterwards don’t have a noun after them.",
          fbText: "<b>Before</b> the trip, <b>After</b> my first day: + noun. Four months <b>beforehand</b>: earlier, before the trip – so the tickets were cheap."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My first trip abroad, part 1 of 3",
          title: "Read and choose.",
          body: `<p>Last August, I visited Emma, my penfriend, in England. It was my first trip abroad on my own. Beforehand, I was really nervous. I made a list of everything I needed and checked my passport three times! Mum saw me off at the station in Kyiv. I took a night train to Poland, and from there I flew to London. On the train, I met a friendly family from Lviv, so the journey went quickly. We shared our sandwiches and played cards until late at night. Emma’s dad picked me up at the airport. At first, everything felt strange: the cars drove on the left, and I didn’t always understand people’s accents. But eventually I got used to it. Afterwards, Emma told me that I had looked completely lost at the airport!</p><p>How did Andrii get to London?</p>`,
          opts: [
            "He took a train to Poland and then a plane.",
            "He flew from Kyiv to London.",
            "Emma’s dad drove him from Kyiv."
          ],
          correct: 0,
          hint: "Find the sentence about the night train.",
          fbOk: "Yes!",
          fbBad: "Read the sentence that starts with “I took”.",
          fbText: "He took a <b>night train to Poland</b> and <b>flew</b> to London from there. Emma’s dad picked him up at the airport in London."
        },
        {
          type: "multi",
          sk: "cult",
          eyebrow: "Reading: My first trip abroad, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p>On Saturday, Emma’s family and I set off for the Lake District, in the north-west of England. It is the largest national park in England, and since 2017 it has been a UNESCO World Heritage Site. We stayed in a small guesthouse near Windermere, the largest lake in England. On Sunday, we climbed Scafell Pike, England’s highest mountain (978 metres). The UK’s highest, Ben Nevis, is in Scotland. Beforehand, Emma’s dad checked the weather forecast, because the weather in the mountains can change quickly. The path was steep and rocky, and Emma’s brother Tom complained all the way up. At first, we couldn’t see anything because of the clouds. But in the end, the sky cleared, and the view from the top was amazing. Afterwards, we were tired and hungry, so we had a huge dinner at the guesthouse.</p><p>Which sentences are true?</p>`,
          opts: [
            "The Lake District is the largest national park in England.",
            "Scafell Pike is the highest mountain in the UK.",
            "Emma’s dad checked the forecast before the climb.",
            "The sky was clear all day."
          ],
          correct: [0, 2],
          hint: "Check the words England and UK. Find the word “Beforehand”.",
          fbOk: "Good eye!",
          fbBad: "Read the text again and check each sentence.",
          fbText: "The Lake District is England’s <b>largest national park</b>, and the forecast was checked <b>beforehand</b>. Scafell Pike is the highest mountain in <b>England</b>, not the UK, and at first there were clouds."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My first trip abroad, part 3 of 3",
          title: "Read and choose.",
          body: `<p>Last summer, I made two big trips. In July, I went to the Carpathians with my class, and in August I went to England. Both places have mountains, lakes and hiking trails, and in both places visitors stay on the paths and take their rubbish home. But they feel different. In the Carpathians, we stayed in a wooden guesthouse and ate banosh. In the Lake District, I tried fish and chips for the first time. In both places, I took hundreds of photos. Three weeks later, I was back at school and missed both places. So here is my advice: plan your trip beforehand, but don’t plan every minute. And afterwards, write about it. That’s the best way to remember it! Emma wants to visit Kyiv one day, and I’m already looking forward to showing her around.</p><p>What is the main idea of the whole text?</p>`,
          opts: [
            "Andrii didn’t enjoy his trip to England.",
            "A first trip abroad can feel strange at first, but it can be a wonderful experience.",
            "Travelling abroad on your own is always easy."
          ],
          correct: 1,
          hint: "Think about all three parts: how did Andrii feel before, during and after the trip?",
          fbOk: "Exactly.",
          fbBad: "Part 1 says it felt strange at first. How does Andrii feel about the trip in part 3?",
          fbText: "At first, everything felt <b>strange</b>, but Andrii loved the trip and <b>missed</b> England when he was back home."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write one word from the lesson. It means ‘before an event’, but it isn’t <i>before</i>.</p>`,
          before: "Before a climb, always check the forecast",
          after: ".",
          answer: ["beforehand", "first", "in advance"],
          hint: "Look at the box on beforehand and afterwards.",
          fbOk: "Well done!",
          fbBad: "One word from the box. It starts with before…",
          fbText: "Check the forecast <b>beforehand</b>: before the climb. <i>In advance</i> and <i>first</i> are correct too."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s text is wrong.</p>`,
          text: "[Afterwards the climb] we were very tired, so we [!had a huge dinner] and [!went to bed early].",
          hint: "Is there a noun after the word?",
          fbOk: "Good eye!",
          fbBad: "Find a word that can’t have a noun after it.",
          fbText: "Correct: <b>After the climb</b>, we were very tired. <i>Afterwards</i> has no noun after it: <i>We had dinner afterwards.</i>"
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Andrii writes one more sentence about the climb.</p>`,
          tiles: ["afterwards", "we", "had", "a huge dinner", "at the guesthouse"],
          answer: [
            "Afterwards we had a huge dinner at the guesthouse.",
            "We had a huge dinner at the guesthouse afterwards.",
            "We had a huge dinner afterwards at the guesthouse.",
            "At the guesthouse we had a huge dinner afterwards.",
            "Afterwards at the guesthouse we had a huge dinner.",
            "At the guesthouse afterwards we had a huge dinner."
          ],
          hint: "we + had + a huge dinner. Afterwards can go at the start or at the end.",
          fbOk: "Brilliant!",
          fbBad: "Start with we had, or with afterwards.",
          fbText: "<b>Afterwards, we had a huge dinner at the guesthouse.</b> Afterwards can also go at the end: <i>We had a huge dinner at the guesthouse afterwards.</i>"
        }
      ],
      outro: {
        text: "Beforehand, afterwards, after the climb, three weeks later: now you can tell the story of a trip abroad.",
        learned: [
          "Use beforehand and afterwards without a noun, and before and after with a noun.",
          "Read a story about a trip to England and the Lake District.",
          "Tell the story of a trip in the right order."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s6l7",
      title: "Travel week at the penfriend club",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the “Travel” page?",
          body: `<p class="lead">The penfriend club is making a web page: “Travel stories”. Ms Kravets needs your help.</p><p>Check the posts. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Taras loves hiking and rafting: that’s {*active|cultural|rural} tourism. Emma prefers museums and castles: {*cultural|active|rural} tourism. Oksana’s neighbours have a small {*guesthouse|destination|grotto} for guests from the city.",
          pre: "e11s6l1",
          hint: "Which gap is about a place to stay? And which kind of tourism is about history and art, and which is about sport and adventure?",
          fbOk: "Right.",
          fbBad: "Sport, history and art, a small hotel.",
          fbText: "Sport and adventure → <b>active</b>. Museums and castles → <b>cultural</b>. A small, cheap hotel → a <b>guesthouse</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s class wrote about the Residence of Bukovinian and Dalmatian Metropolitans in Chernivtsi. What is it today?</p>`,
          opts: [
            "a home for church leaders",
            "a hotel for tourists",
            "part of Chernivtsi University"
          ],
          correct: 2,
          pre: "e11s6l2",
          fbOk: "Yes!",
          fbBad: "Who goes to lectures there every day?",
          fbText: "Today, the residence is <b>part of Chernivtsi University</b>, and it has been a UNESCO World Heritage Site since 2011."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Which place is the largest lake in the Ukrainian Carpathians?</p>`,
          opts: [
            "Lake Synevyr",
            "Windermere",
            "Sofiyivka"
          ],
          correct: 0,
          pre: "e11s6l2",
          fbOk: "Exactly.",
          fbBad: "Which place is in Zakarpattia?",
          fbText: "<b>Lake Synevyr</b>, in Zakarpattia. Windermere is in England, and Sofiyivka is a park in Uman."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 4",
          title: "Complete the sentences.",
          text: "Taras: We {*set off|picked up|looked around} from Lviv at six. At the station, we got {*on|in|out of} the train. Later, Mrs Popovych {*picked us up|saw us off|checked us out} at the bus stop, and we {*checked in|checked out|set off} at her guesthouse.",
          pre: "e11s6l3",
          fbOk: "Well done!",
          fbBad: "Start a journey; a train; collect; arrive at a hotel.",
          fbText: "They <b>set off</b>, got <b>on</b> the train, Mrs Popovych <b>picked them up</b>, and they <b>checked in</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "Andrii: Emma’s dad picked {*me up|up me} at the airport. Sofiia looked {*after my plants|my plants after} while I was away. I didn’t know one word, so I looked {*it up|up it} online.",
          pre: "e11s6l4",
          hint: "Is each verb separable or prepositional? Then check where the pronoun or the object goes.",
          fbOk: "Right.",
          fbBad: "Separable: a pronoun in the middle. Prepositional: the object after.",
          fbText: "Picked <b>me up</b>, looked <b>it up</b>: separable, the pronoun goes in the middle. Looked <b>after my plants</b>: prepositional, the object goes after."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Write the missing word.",
          body: `<p>Use <i>see</i>.</p>`,
          before: "Emma: I’m looking forward to",
          after: "you in August!",
          answer: "seeing",
          pre: "e11s6l4",
          fbOk: "Yes!",
          fbBad: "After look forward to: verb + -ing.",
          fbText: "I’m looking forward to <b>seeing</b> you: look forward to + verb-ing."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Complete the sentences.",
          text: "Oksana: {*At first|Firstly|Finally}, the trip was a disaster: our bus broke down. {*Meanwhile|Firstly}, it started to rain. But after two hours, another bus {*eventually|meanwhile|at first} came. {*At|In} the end of the day, we were all happy.",
          pre: "e11s6l5",
          hint: "Which word means after a long time, which means at the same time, and which shows a change? And which preposition goes with the end of?",
          fbOk: "Exactly.",
          fbBad: "A change; at the same time; after a long time; at the end of + noun.",
          fbText: "<b>At first</b>: before a change. <b>Meanwhile</b>: at the same time. <b>Eventually</b>: after a long time. <b>At</b> the end of the day."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Fill in the gaps.",
          text: "Andrii: Emma’s dad checked the forecast {*beforehand|afterwards}, because the weather in the mountains can change quickly. {*After|Afterwards} the climb, we were very hungry. We had a huge dinner, and {*afterwards|beforehand} we went to bed early.",
          pre: "e11s6l6",
          fbOk: "Well done!",
          fbBad: "With a noun: after. Without a noun: beforehand or afterwards.",
          fbText: "He checked the forecast <b>beforehand</b>: before the climb. <b>After</b> the climb: + noun. <b>Afterwards</b> they went to bed: after dinner."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 9",
          title: "Choose the correct answer.",
          body: `<p>Which sentence about the Lake District is true?</p>`,
          opts: [
            "It is in Wales.",
            "It is the largest national park in England.",
            "Its highest mountain is Ben Nevis."
          ],
          correct: 1,
          pre: "e11s6l6",
          fbOk: "Right.",
          fbBad: "Remember part 2 of Andrii’s story.",
          fbText: "The Lake District is the <b>largest national park in England</b>. Its highest mountain is Scafell Pike, England’s highest."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about kinds of tourism and places to visit, use travel verbs and tell the story of a trip in the right order.",
        learned: [
          "Talk about kinds of tourism and places to visit in Ukraine and England.",
          "Use travel verbs and put the object in the right place.",
          "Tell a story in order with at first, meanwhile, eventually and in the end.",
          "Use beforehand, afterwards, before and after."
        ]
      }
    }
  ]
});
