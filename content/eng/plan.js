/* Слід · план предмета «Англійська мова»
   Розділи без уроків: назва, «навіщо», тижні, перелік тем. Файл розділу з тим самим id замінює запис.
   Увесь зміст — англійською, британська норма (D-055); цей коментар — українською.
   4 клас — за Типовою освітньою програмою 3–4 кл. (під керівництвом О. Я. Савченко, 2018), іншомовна галузь,
   «Англійська мова», «4-ий клас»: теми й функції — PDF с. 62–63, граматика — с. 63, інвентар 3 кл. (повторення) — с. 62,
   рівень A1 на кінець 4 кл. — с. 40, дескриптори A1 — с. 50–55:
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Програма ліцею вимагає ТОП Шияна (№ 1273); її тексту немає — «роби поки без цього» (D-055, доповнення п. 7).
   Порядок тем програма не задає («рамкова», с. 60); розподіл граматики між розділами — наш, концентричний.
   35 тижнів, ≈ 6 уроків на розділ (D-055, доповнення п. 2). Звірка: reports/verify/plan-eng-g4.md.
   5 клас — за модельною програмою «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   теми, підтеми й функції 5 кл. — с. 20 (розд. 4.2.1), граматика A2 — с. 21–22 (розд. 4.4), результати на кінець 6 кл. — с. 15–19:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Програма рамкова (с. 20): порядок тем і поєднання — вибір учителя; розподіл граматики A2 між 5 і 6 кл. і розділами — наш, концентричний
   (спирається на 4 кл. e4s1–e4s8). requires не ставимо: уроків 4 кл. ще немає (reports/verify/plan-eng-g5.md §6). Звірка: plan-eng-g5.md.
   6 клас — та сама програма МП-ІМ: теми, підтеми й функції 6 кл. — с. 20–21 (розд. 4.2.2), граматика A2 — с. 21–22 (розд. 4.4, спільна для 5–6 кл.).
   Розподіл граматики між розділами — наш, концентричний: лише те, чого ще не було в e4s*–e5s*, або розширення вже пройденого.
   requires — у файлах розділів, не тут (запис плану успадковує файл розділу); зв'язки на уроки 4–5 кл. — reports/verify/plan-eng-g6.md §6.
   Назви уроків 4–5 кл. нижче синхронізовано з verified-розділами (2026-11-20); джерело назви — файл розділу. Звірка 6 кл.: plan-eng-g6.md.
   10–11 клас — за програмою «Іноземні мови. 10–11 класи» (наказ МОН № 1407 від 23.10.2017), розділ для спеціалізованих шкіл
   з поглибленим вивченням (B2, D-055 п. 5): обсяги — с. 21; 10 кл. (англійська) — теми й функції с. 22, лексика с. 22–23, граматика с. 23;
   11 кл. — теми й функції с. 23, лексика с. 24, граматика с. 25:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Програма рамкова (с. 22): порядок тем — вибір учителя, теми можна поєднувати (Україна + країни, шкільне життя + професії).
   Розподіл граматики між розділами — наш, концентричний (повторення 7–9 кл. позначено у звіті). requires — у файлах розділів.
   Звірка: reports/verify/plan-eng-g10-11.md.
   Перевірка: node tools/validate.mjs && node tools/stats.mjs
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s1",
  grade: 4,
  weeks: [1, 5],
  title: "Me, my family and friends: where we live",
  why: "To tell people about your family and friends. And to say where you live: in a city, a town or a village.",
  plan: [
    "Hello again!",
    "My family: who is who?",
    "Jobs: a doctor, an engineer",
    "Cities, towns and villages",
    "Where do you live?",
    "About me: a form"
  ]
});

SLID.section("eng", {
  id: "e4s2",
  grade: 4,
  weeks: [6, 9],
  title: "My home",
  why: "To describe your home and your room. And to say where things are.",
  plan: [
    "Homes: a house or a flat?",
    "Rooms: there is, there are",
    "Furniture in my room",
    "Where is the cat? In, on, under, next to",
    "Is there a lamp? Are there any books?",
    "My dream room: reading and writing"
  ]
});

SLID.section("eng", {
  id: "e4s3",
  grade: 4,
  weeks: [10, 13],
  title: "Free time: sport and heroes",
  why: "To talk about sport and your free time. And to tell a friend about your favourite hero.",
  plan: [
    "Sports: play, go and do",
    "How often? Always, usually, sometimes, never",
    "My week: on Mondays, at the weekend",
    "And, but, or: what I like",
    "Favourite heroes from books and films",
    "A post about my hobby"
  ]
});

SLID.section("eng", {
  id: "e4s4",
  grade: 4,
  weeks: [14, 17],
  title: "Shops and shopping",
  why: "To buy things in a shop. And to ask about prices and say what you would like.",
  plan: [
    "Shops in my town",
    "In a shopping centre: signs and floors",
    "How many? How much?",
    "Prices: how much is it?",
    "I’d like… I’d like to buy…",
    "Buying a present: a dialogue"
  ]
});

SLID.section("eng", {
  id: "e4s5",
  grade: 4,
  weeks: [18, 21],
  title: "Health and hygiene",
  why: "To say how you feel. And to know what helps you stay clean and well.",
  plan: [
    "Keeping clean: wash your hands!",
    "Stay healthy every day",
    "How do you feel?",
    "What’s the matter?",
    "At the doctor’s",
    "Why? Because…"
  ]
});

SLID.section("eng", {
  id: "e4s6",
  grade: 4,
  weeks: [22, 26],
  title: "Nature and weather",
  why: "To talk about the weather and nature. And to say what is happening now.",
  plan: [
    "Seasons and weather",
    "It’s raining now! What’s happening?",
    "Is it snowing? Questions about now",
    "Nature in Ukraine and the UK",
    "Bigger, colder, faster: comparing things",
    "Let’s help nature!"
  ]
});

SLID.section("eng", {
  id: "e4s7",
  grade: 4,
  weeks: [27, 31],
  title: "Holidays and travel",
  why: "To talk about trips and transport. And to tell people about your holiday plans.",
  plan: [
    "By bus, by train, on foot",
    "Which way? Up, down, across, along",
    "Capital cities: Kyiv, London and more",
    "The biggest and the longest",
    "A postcard from my holiday",
    "Plans for the summer: I think I’ll …"
  ]
});

SLID.section("eng", {
  id: "e4s8",
  grade: 4,
  weeks: [32, 35],
  title: "Celebrations and school events",
  why: "To invite friends to a party and talk about school events. And to say “Happy New Year!” or “Happy birthday!”",
  plan: [
    "A party at a café",
    "Invitations: when and what time?",
    "Happy New Year! Celebrations in Ukraine and the UK",
    "School events: a concert, a sports day, a fair",
    "Every day or now? I play, I’m playing",
    "Notes and messages to friends"
  ]
});

SLID.section("eng", {
  id: "e5s1",
  grade: 5,
  weeks: [1, 4],
  title: "Me, my family and friends",
  why: "To talk about your family and your friends. And to say what your parents do.",
  plan: [
    "My family tree: who is who?",
    "Have you got any brothers or sisters?",
    "Whose is it? My, your, his, her",
    "This, that, these, those: a family photo",
    "What do your parents do? Jobs",
    "My best friend: what does she like?"
  ]
});

SLID.section("eng", {
  id: "e5s2",
  grade: 5,
  weeks: [5, 8],
  title: "School life",
  why: "To talk about your school day and your timetable. And to understand your teacher in your English lessons.",
  plan: [
    "My timetable: subjects and days",
    "My school day: I get up at seven",
    "Does she walk to school? Questions and negatives",
    "She’s always on time: always, usually, never",
    "Open your books! Classroom activities",
    "Can I…? Could you repeat that, please?"
  ]
});

SLID.section("eng", {
  id: "e5s3",
  grade: 5,
  weeks: [9, 12],
  title: "Food and drink",
  why: "To talk about the food you like. And to offer food to a friend and say “Yes, please” or “No, thank you”.",
  plan: [
    "Food and drink: my favourite meals",
    "An apple or some bread? Countable and uncountable",
    "Is there any milk? Some and any",
    "How much? How many? A lot of",
    "Would you like some juice? Offers",
    "Dishes from Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e5s4",
  grade: 5,
  weeks: [13, 15],
  title: "Clothes",
  why: "To talk about clothes for every season. And to say what people are wearing now.",
  plan: [
    "Clothes: a jumper, a skirt, a coat",
    "Trousers, jeans, shorts: a pair of…",
    "What are you wearing today?",
    "Clothes for every season",
    "I usually wear…, but today I’m wearing…",
    "School uniform: do you wear one?"
  ]
});

SLID.section("eng", {
  id: "e5s5",
  grade: 5,
  weeks: [16, 18],
  title: "Weather: rain, sun and storms",
  why: "To talk about the weather and compare days and seasons. And to understand a weather forecast.",
  plan: [
    "What’s the weather like today?",
    "Storms, fog and rainbows",
    "Hotter, colder, wetter: comparing the weather",
    "More beautiful, better, worse",
    "Tomorrow it will be sunny: a weather forecast",
    "Seasons in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e5s6",
  grade: 5,
  weeks: [19, 21],
  title: "Free time, hobbies and holidays",
  why: "To talk about your hobbies and what you can do well. And to make plans with a friend: say yes or say no politely.",
  plan: [
    "Free time: at home and outside",
    "I love drawing, I don’t like running",
    "Swimming is fun! My hobby",
    "I can swim well, but I can’t skate",
    "Let’s go! Saying yes or no",
    "School holidays: what do you like doing?"
  ]
});

SLID.section("eng", {
  id: "e5s7",
  grade: 5,
  weeks: [22, 24],
  title: "My town or village",
  why: "To say what there is in your town or village. And to ask the way and give directions.",
  plan: [
    "Places in town: a library, a bank, a park",
    "Is there a cinema? There is, there are",
    "Next to, opposite, between: where is it?",
    "Excuse me, where is the bus stop?",
    "A walk around the town with a map",
    "My town: history and culture"
  ]
});

SLID.section("eng", {
  id: "e5s8",
  grade: 5,
  weeks: [25, 27],
  title: "Festivals and traditions",
  why: "To talk about festivals in Ukraine and the UK. And to say dates: “the first of January”.",
  plan: [
    "First, second, third: ordinal numbers",
    "When’s your birthday? Months and dates",
    "A calendar of festivals: Ukraine and the UK",
    "How do you celebrate? Traditions",
    "Our New Year party was great! Was and were",
    "Writing a greetings card"
  ]
});

SLID.section("eng", {
  id: "e5s9",
  grade: 5,
  weeks: [28, 31],
  title: "Travel: places to see",
  why: "To talk about trips and places you want to visit. And to tell people about your plans and your last trip.",
  plan: [
    "Where would you like to go?",
    "At the seaside or in the mountains?",
    "I’m going to visit my grandma: plans",
    "Are you going to travel this summer? Questions",
    "We visited Lviv: the Past Simple",
    "My travel diary"
  ]
});

SLID.section("eng", {
  id: "e5s10",
  grade: 5,
  weeks: [32, 35],
  title: "Ukraine and English-speaking countries",
  why: "To tell people about Ukraine. And to learn about the countries where people speak English.",
  plan: [
    "Ukraine on the map",
    "Where do people speak English?",
    "The UK: England, Scotland, Wales and Northern Ireland",
    "Bigger or smaller? Comparing countries",
    "The longest river, the highest mountain",
    "Facts about my country"
  ]
});

SLID.section("eng", {
  id: "e6s1",
  grade: 6,
  weeks: [1, 4],
  title: "Describing people",
  why: "To say what people look like. And to say what they are like: kind, friendly or shy.",
  plan: [
    "What does he look like? Tall or short?",
    "Long dark hair and big blue eyes",
    "A girl with glasses, a man with a beard",
    "What is she like? Kind, friendly, shy",
    "He looks happy! Very, quite, really",
    "She looks like her mum, but she’s like her dad"
  ]
});

SLID.section("eng", {
  id: "e6s2",
  grade: 6,
  weeks: [5, 8],
  title: "Shopping and money",
  why: "To talk about shops and the things they sell. And to ask about prices and buy things politely.",
  plan: [
    "At the chemist’s, at the newsagent’s: types of shops",
    "Why do you go there? To buy some bread",
    "A few, both, all, no: a shopping list",
    "Paying and getting change: pounds and hryvnias",
    "Can I help you? In a clothes shop",
    "It’s too big! Too small, too expensive"
  ]
});

SLID.section("eng", {
  id: "e6s3",
  grade: 6,
  weeks: [9, 13],
  title: "Food traditions and dishes",
  why: "To name dishes and say what is in them. And to talk about food traditions and meals you had.",
  plan: [
    "What’s on the menu? Names of dishes",
    "What’s in it? It’s made with…",
    "First, then, after that: a simple recipe",
    "We ate pancakes: irregular verbs",
    "Did you try it? I didn’t like it: questions and negatives",
    "Food traditions in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e6s4",
  grade: 6,
  weeks: [14, 18],
  title: "Sport",
  why: "To talk about different sports and say which ones you prefer. And to tell people what happened in a match.",
  plan: [
    "Football, judo, swimming: kinds of sport",
    "Which sport do you prefer and why?",
    "I could swim when I was five",
    "What were you doing at six o’clock? The Past Continuous",
    "I was running when it started to rain",
    "What a match! Sports news"
  ]
});

SLID.section("eng", {
  id: "e6s5",
  grade: 6,
  weeks: [19, 23],
  title: "Getting ready for a trip",
  why: "To talk about transport and travel plans. And to get ready for a trip: tickets, documents and a suitcase.",
  plan: [
    "By train, by plane or by ferry?",
    "When does the train leave? Timetables",
    "We’re leaving on Friday: travel plans",
    "Packing a suitcase: it might be cold",
    "Tickets and passports: you have to show them",
    "Buying a train ticket at the station"
  ]
});

SLID.section("eng", {
  id: "e6s6",
  grade: 6,
  weeks: [24, 27],
  title: "School life: subjects and lessons",
  why: "To talk about your favourite subjects and what you do in lessons. And to talk about school rules and give advice.",
  plan: [
    "My favourite subject and why",
    "Projects, tests, experiments: what we do in lessons",
    "A subject that I love, a teacher who helps",
    "School rules: you must, you mustn’t",
    "You should ask for help: advice",
    "The best lesson of the year"
  ]
});

SLID.section("eng", {
  id: "e6s7",
  grade: 6,
  weeks: [28, 31],
  title: "Kyiv, the capital of Ukraine",
  why: "To tell people about Kyiv and its famous places. And to talk about places you have visited.",
  plan: [
    "Kyiv on the map: a city on the Dnipro",
    "The main street, the main square: sightseeing in Kyiv",
    "When was it built? Old buildings in Kyiv",
    "Have you ever been to Kyiv?",
    "I’ve visited…, I’ve never seen…: my experiences",
    "A day in Kyiv: a page for visitors"
  ]
});

SLID.section("eng", {
  id: "e6s8",
  grade: 6,
  weeks: [32, 35],
  title: "London, the capital of the UK",
  why: "To tell people about London and its famous places. And to tell a friend what other people said.",
  plan: [
    "London: a city on the Thames",
    "Famous places in London: a map",
    "If it rains, go to a museum!",
    "Kyiv and London: two capitals",
    "Emma told me about London: said and told",
    "A post from London: what I liked most"
  ]
});

/* 7–9 класи — модельна програма МП-ІМ (наказ МОН № 795 від 12.07.2021), рівень B1 на кінець 9 кл. (с. 3):
   теми, підтеми й функції — с. 32 (5.2.1, 7 кл.; 5.2.2, 8 кл.) і с. 33 (5.2.2 закінчення; 5.2.3, 9 кл.), граматика B1 — с. 34–35 (5.4.1),
   результати на кінець 9 кл. — с. 27–31. Програма рамкова (с. 27, 32): порядок тем — вибір учителя, теми можна поєднувати
   (тому Київ і столиця країни мови в 7 кл. — один розділ e7s7). Розподіл граматики B1 між 7, 8 і 9 кл. і розділами — наш, концентричний:
   нове — лише те, чого не було в e4s*–e6s*, або розширення вже пройденого. requires — у файлах розділів, не тут.
   Звірка: reports/verify/plan-eng-g7-8-9.md. */
SLID.section("eng", {
  id: "e7s1",
  grade: 7,
  weeks: [1, 5],
  title: "Family life: housework and traditions",
  why: "To talk about housework and who does what at home. And to talk about family traditions and say: “I’ve just washed the dishes!”",
  plan: [
    "Housework: who does what at home?",
    "I’ve just washed the dishes: just and already",
    "Have you tidied your room yet?",
    "We’ve lived here for ten years: for and since",
    "We made it ourselves: myself, yourself, ourselves",
    "Family traditions and celebrations"
  ]
});

SLID.section("eng", {
  id: "e7s2",
  grade: 7,
  weeks: [6, 10],
  title: "In the kitchen: cooking and laying the table",
  why: "To talk about kitchen things and different ways of cooking. And to lay the table and invite guests to eat.",
  plan: [
    "Pots, pans and plates: kitchen things",
    "Boil, fry or bake? Ways of cooking",
    "A slice of bread, a little salt: how much?",
    "It should be cooked for ten minutes: recipes",
    "Laying the table: another plate, the other fork",
    "Do have some more! Guests at the table"
  ]
});

SLID.section("eng", {
  id: "e7s3",
  grade: 7,
  weeks: [11, 15],
  title: "Health and medicine",
  why: "To talk about illnesses, symptoms and medicines. And to ask for help and give advice.",
  plan: [
    "A hospital, a chemist’s, a dentist’s: where to go",
    "I’ve got a sore throat: illnesses and symptoms",
    "I’ve hurt my knee! What has happened?",
    "When did it start? The Past Simple or the Present Perfect",
    "You ought to stay in bed: advice",
    "Take one tablet twice a day: reading medicine labels"
  ]
});

SLID.section("eng", {
  id: "e7s4",
  grade: 7,
  weeks: [16, 20],
  title: "Cinema and theatre",
  why: "To talk about films, plays and their genres. And to give your opinion about a film or a play.",
  plan: [
    "Comedy, cartoon or adventure film? Film genres",
    "At the theatre: the stage, the seats, the box office",
    "We could see a play! Suggestions",
    "Bored or boring? Interested or interesting?",
    "Much better, a bit longer, not as funny as the book",
    "Old enough to watch it? A film review"
  ]
});

SLID.section("eng", {
  id: "e7s5",
  grade: 7,
  weeks: [21, 25],
  title: "Sport: competitions and clubs",
  why: "To talk about sports competitions, clubs and famous athletes. And to tell a story about a match or a race.",
  plan: [
    "A race, a match, a tournament: competitions",
    "Joining a club: which club is right for you?",
    "I used to play football, but now I swim",
    "While we were playing, it started to snow",
    "The first Ukrainian to win: famous athletes",
    "The day we won: a story about a competition"
  ]
});

SLID.section("eng", {
  id: "e7s6",
  grade: 7,
  weeks: [26, 30],
  title: "School life after lessons",
  why: "To talk about after-school clubs, school events and traditions. And to make plans for a school event.",
  plan: [
    "After-school clubs: what do you do after lessons?",
    "First bell, last bell: school traditions",
    "If we win, we’ll play in the final: the First Conditional",
    "Unless it rains… As soon as we finish…",
    "Shall we make a poster? Planning a school event",
    "Our school festival: an invitation"
  ]
});

SLID.section("eng", {
  id: "e7s7",
  grade: 7,
  weeks: [31, 35],
  title: "Kyiv and London: history and culture",
  why: "To talk about museums, monuments and old buildings in Kyiv and London. And to say who built them and when.",
  plan: [
    "Museums and monuments in Kyiv",
    "It was built by…: who made it?",
    "Was it destroyed? When was it rebuilt?",
    "One of the oldest: history and culture in London",
    "St Paul’s Cathedral: who was it designed by?",
    "A culture trip: Kyiv or London?"
  ]
});

SLID.section("eng", {
  id: "e8s1",
  grade: 8,
  weeks: [1, 4],
  title: "Pen friends and letters",
  why: "To write to a pen friend and answer letters and emails. And to talk about what you have been doing.",
  plan: [
    "Looking for a pen friend: a profile",
    "I’ve been learning English for five years",
    "What have you been doing? News in an email",
    "You like music, don’t you? Question tags",
    "Dear…, Best wishes: writing an email",
    "We write to each other: a letter from England"
  ]
});

SLID.section("eng", {
  id: "e8s2",
  grade: 8,
  weeks: [5, 8],
  title: "Healthy living and free time",
  why: "To talk about healthy living, active free time and everyday habits. And to say what you enjoy doing and what you want to try.",
  plan: [
    "Sleep, food and exercise: a healthy lifestyle",
    "Too much sugar, not enough sleep",
    "I enjoy cycling, I want to try climbing: -ing or to?",
    "Take up a sport, give up fast food: phrasal verbs",
    "Hiking, camping, cycling: active weekends",
    "How do we spend our free time? A class survey"
  ]
});

SLID.section("eng", {
  id: "e8s3",
  grade: 8,
  weeks: [9, 13],
  title: "The media: the internet and the press",
  why: "To talk about newspapers, magazines and news websites. And to report what other people said.",
  plan: [
    "Newspapers, magazines and news websites",
    "Is it true? Reading the news online",
    "A new park is being built: news reports",
    "She said she was tired: reported statements",
    "He told us that…: reporting the news",
    "Our school newspaper: a short article"
  ]
});

SLID.section("eng", {
  id: "e8s4",
  grade: 8,
  weeks: [14, 17],
  title: "Music",
  why: "To talk about music styles, instruments and musicians. And to describe a concert and say what you liked about it.",
  plan: [
    "Pop, rock, folk or classical? Music styles",
    "The bandura, the violin, the drums: instruments",
    "A singer who writes her own songs: who, which, that",
    "My favourite band, which…: extra information",
    "World-famous musicians and composers",
    "At a concert: an online review"
  ]
});

SLID.section("eng", {
  id: "e8s5",
  grade: 8,
  weeks: [18, 22],
  title: "Books and libraries",
  why: "To talk about books, writers and literary genres. And to tell a story about what had happened.",
  plan: [
    "Fantasy, poetry or a detective story? Genres",
    "At the library: borrowing books and other services",
    "A writer, a poet, a hero: my favourite book",
    "When I got to the library, it had closed: the Past Perfect",
    "It was raining, and she had lost her key: telling a story",
    "A book I recommend: a book review"
  ]
});

SLID.section("eng", {
  id: "e8s6",
  grade: 8,
  weeks: [23, 26],
  title: "Schools in Ukraine and abroad",
  why: "To talk about types of schools, school buildings and rules. And to make guesses about things you see in photos.",
  plan: [
    "Primary, secondary or boarding school? Types of schools",
    "A science lab, a gym, a canteen: school rooms",
    "It must be a school in England: guessing",
    "May I leave early? Are we allowed to…?",
    "You mustn’t or you don’t have to? School rules",
    "Schools in Ukraine and the UK: what’s different?"
  ]
});

SLID.section("eng", {
  id: "e8s7",
  grade: 8,
  weeks: [27, 30],
  title: "Ukraine: land, climate and people",
  why: "To talk about where Ukraine is, its climate and its people. And to use numbers and statistics.",
  plan: [
    "Where is Ukraine? Borders and neighbours",
    "The Carpathians, the Black Sea, the Dnipro: the or no article?",
    "Hot summers, cold winters: the climate of Ukraine",
    "Millions, per cent and half: numbers and statistics",
    "Who lives in Ukraine? People and nationalities",
    "Ukraine in numbers: a short report"
  ]
});

SLID.section("eng", {
  id: "e8s8",
  grade: 8,
  weeks: [31, 35],
  title: "English-speaking countries: land, climate and people",
  why: "To talk about where English-speaking countries are, their climate and their people. And to imagine life in another country.",
  plan: [
    "The UK, Ireland, Canada, Australia: where are they?",
    "Rainy, dry or snowy? Climate around the world",
    "British, Irish, Canadian: people and nationalities",
    "Much bigger, a bit smaller: comparing countries",
    "If I lived in Canada, I would…",
    "If you could visit one country, which would you choose?"
  ]
});

SLID.section("eng", {
  id: "e9s1",
  grade: 9,
  weeks: [1, 4],
  title: "Who am I? Personality and life story",
  why: "To fill in forms and talk about your personality. And to write about your life and how you have changed.",
  plan: [
    "Name, date of birth, nationality: filling in a form",
    "Easy-going or hard-working? Personality",
    "What shapes us? Family, friends and choices",
    "When I was little, I used to… and I would…",
    "I knew I was going to be a…: the future in the past",
    "My life story: a short autobiography"
  ]
});

SLID.section("eng", {
  id: "e9s2",
  grade: 9,
  weeks: [5, 8],
  title: "The environment",
  why: "To talk about the environment, plants and animals. And to make predictions about the future of our planet.",
  plan: [
    "Air, water and land: our environment",
    "Rare plants and animals of Ukraine",
    "It’s going to be a hot summer: predictions",
    "In 2050 we will be living…: the Future Continuous",
    "Forests must be protected: what can we do?",
    "An eco project for our school"
  ]
});

SLID.section("eng", {
  id: "e9s3",
  grade: 9,
  weeks: [9, 12],
  title: "Fashion and clothes",
  why: "To talk about fashion and describe clothes in detail. And to say what you think about fashion and style.",
  plan: [
    "Fashion then and now",
    "Hoodies, trainers and jeans: clothes words",
    "A long black woollen coat: the order of adjectives",
    "So comfortable that…, such a nice jacket that…",
    "You look as if you’re going to a party",
    "Buy less, wear longer: my opinion about fashion"
  ]
});

SLID.section("eng", {
  id: "e9s4",
  grade: 9,
  weeks: [13, 16],
  title: "The media: the internet, TV and radio",
  why: "To talk about TV, radio and communicating online. And to report questions and requests.",
  plan: [
    "TV, radio and podcasts: what do you like?",
    "My favourite programme: a quiz or a talk show?",
    "Chatting online: safe and polite",
    "She asked if I liked…: reported questions",
    "He told us to switch off our phones: reported requests",
    "I wonder what…: comments and online posts"
  ]
});

SLID.section("eng", {
  id: "e9s5",
  grade: 9,
  weeks: [17, 20],
  title: "Youth culture and clubs",
  why: "To talk about youth culture, youth organisations and clubs. And to give more information about people, places and times.",
  plan: [
    "Music, style and hobbies: youth culture",
    "Plast and the Scouts: youth organisations",
    "A club where…, a day when…: relative clauses",
    "A friend whose hobby is…: whose",
    "Why do teenagers join clubs? The reason why…",
    "Join our club! A poster and an online invitation"
  ]
});

SLID.section("eng", {
  id: "e9s6",
  grade: 9,
  weeks: [21, 24],
  title: "Science and inventions",
  why: "To talk about famous scientists, inventions and modern devices. And to say who invented things and how they are used.",
  plan: [
    "Famous scientists and inventors",
    "Who invented it? It was invented by…",
    "From the telephone to the smartphone",
    "How is it made? How is it used?",
    "Smart devices in our homes",
    "My favourite device: a short description"
  ]
});

SLID.section("eng", {
  id: "e9s7",
  grade: 9,
  weeks: [25, 28],
  title: "Jobs and careers",
  why: "To talk about jobs, abilities and professional qualities. And to make polite requests and talk about your future job.",
  plan: [
    "Jobs and what people do at work",
    "Good at maths, interested in people: abilities",
    "A good nurse should be patient: qualities",
    "Which job is right for me? Asking for advice",
    "I would like to…: applying for a summer course",
    "My future job: I’ll be able to…"
  ]
});

SLID.section("eng", {
  id: "e9s8",
  grade: 9,
  weeks: [29, 32],
  title: "Cities of Ukraine and English-speaking countries",
  why: "To talk about big cities, famous places and historic monuments. And to imagine how things could have been different.",
  plan: [
    "Big cities of Ukraine: Lviv, Odesa, Kharkiv",
    "Old towns and historic monuments",
    "Big cities in English-speaking countries",
    "Which city would you like to live in?",
    "If we had left earlier…: the Third Conditional",
    "A city guide for a friend from abroad"
  ]
});

SLID.section("eng", {
  id: "e9s9",
  grade: 9,
  weeks: [33, 35],
  title: "Let’s discuss: agreeing and disagreeing",
  why: "To give your opinion and join a discussion politely. And to agree, disagree and link your ideas.",
  plan: [
    "I think…, In my opinion…: giving opinions",
    "I agree, but…: agreeing and disagreeing politely",
    "Sorry to interrupt, but…: joining a discussion",
    "Although, however, so: linking ideas",
    "First, also, finally: putting your ideas in order",
    "Paper books or e-books? A class debate"
  ]
});

SLID.section("eng", {
  id: "e10s1",
  grade: 10,
  weeks: [1, 4],
  title: "Relationships and conflicts",
  why: "To describe people’s personalities and the relationships between them. And to talk about how friends help each other and solve conflicts.",
  plan: [
    "What kind of person are you? Personality",
    "Friends, classmates, neighbours: kinds of relationships",
    "By the time I came, they had left: the Past Perfect again",
    "As soon as, after, before: time clauses",
    "A friend in need: helping each other",
    "Can I say something? Solving a conflict"
  ]
});

SLID.section("eng", {
  id: "e10s2",
  grade: 10,
  weeks: [5, 9],
  title: "Sport, health and leisure",
  why: "To talk about the role of sport in society and in your life and about big sports events. And to explain how sport helps you stay healthy.",
  plan: [
    "Why do people love sport?",
    "Risk losing, refuse to give up: verb patterns",
    "Big sports events in Ukraine and the world",
    "Stop, remember, try: a change in meaning",
    "Avoid injuries, keep moving: sport and health",
    "Is sport good for everyone? Giving your opinion"
  ]
});

SLID.section("eng", {
  id: "e10s3",
  grade: 10,
  weeks: [10, 13],
  title: "Food and habits",
  why: "To talk about national dishes, tastes and healthy food. And to talk about habits, good and bad, in the past and now.",
  plan: [
    "National dishes of Ukraine and the UK",
    "Sweet, spicy or sour? Tastes and preferences",
    "I used to love sweets, Grandma would bake: states and actions",
    "Healthy food: what is good for you?",
    "Bad habits and how to break them",
    "I’m used to it: getting used to new food"
  ]
});

SLID.section("eng", {
  id: "e10s4",
  grade: 10,
  weeks: [14, 18],
  title: "Weather, nature and natural disasters",
  why: "To talk about natural disasters and how the weather affects our health and mood. And to make predictions about nature and say how we can protect it.",
  plan: [
    "Floods, storms, earthquakes: natural disasters",
    "Look at those clouds! Will or going to?",
    "Weather, health and mood",
    "Temperatures will be falling: forecasts and warnings",
    "By 2050 we will have…: the Future Perfect",
    "Protecting nature in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e10s5",
  grade: 10,
  weeks: [19, 22],
  title: "Painting and Ukrainian artists",
  why: "To talk about genres of painting and famous artists and their works. And to tell the story of an artist’s life and describe a visit to a gallery.",
  plan: [
    "Portrait, landscape, still life: genres of painting",
    "Famous artists and their paintings",
    "Ukrainian artists and their works",
    "She had been painting for years: the Past Perfect Continuous",
    "A visit to a museum, an exhibition or a gallery",
    "My favourite painting: describing a picture"
  ]
});

SLID.section("eng", {
  id: "e10s6",
  grade: 10,
  weeks: [23, 26],
  title: "Science and technology",
  why: "To talk about computers and modern ways to communicate and get information. And to discuss how science and technology change society.",
  plan: [
    "Computer equipment: what do you use?",
    "Messages, calls and news: modern communication",
    "If the battery dies…: real conditions",
    "If I could invent anything…: unreal conditions",
    "If I were you, I’d…: giving advice",
    "How science changes society: for and against"
  ]
});

SLID.section("eng", {
  id: "e10s7",
  grade: 10,
  weeks: [27, 31],
  title: "Ukraine and English-speaking countries",
  why: "To talk about how Ukraine and the UK are governed, their natural resources and their public holidays. And to explain reasons and results.",
  plan: [
    "How Ukraine is organised: regions and the capital",
    "Who makes the laws? Parliament, president, government",
    "How the UK is governed",
    "Natural resources: so rich that…",
    "Due to, owing to, therefore: reasons and results",
    "Public holidays in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e10s8",
  grade: 10,
  weeks: [32, 35],
  title: "Education and careers",
  why: "To talk about schools, colleges and universities in Ukraine and abroad. And to talk about modern jobs and how to get ready for them.",
  plan: [
    "Lyceum, college, university: where to study",
    "After school: studying in Ukraine and abroad",
    "Apply for, fill in, find out: phrasal and prepositional verbs",
    "Fill it in: where the object goes",
    "By Friday or until Friday? Time phrases",
    "Modern jobs and the skills they need"
  ]
});

SLID.section("eng", {
  id: "e11s1",
  grade: 11,
  weeks: [1, 5],
  title: "Rights, responsibilities and tolerance",
  why: "To talk about young people’s rights and responsibilities, good manners and helping others. And to report what other people said.",
  plan: [
    "Young people’s rights and responsibilities",
    "Good manners: how we behave and communicate",
    "The day before, the next day: reported speech",
    "She admitted that…, he promised that…: reporting verbs",
    "Tolerance, kindness and charity",
    "Housework: is it fair? A family discussion"
  ]
});

SLID.section("eng", {
  id: "e11s2",
  grade: 11,
  weeks: [6, 9],
  title: "Food and recipes",
  why: "To talk about food, drinks and snacks, healthy eating and your priorities. And to read and write recipes with exact amounts.",
  plan: [
    "Meals, snacks and drinks",
    "Plenty of, hardly any: quantifiers",
    "A few or few? A little or little?",
    "Healthy and unhealthy food: what are your priorities?",
    "Most of us, none of them: quantifiers with of",
    "A family recipe, step by step"
  ]
});

SLID.section("eng", {
  id: "e11s3",
  grade: 11,
  weeks: [10, 13],
  title: "Leisure: clubs, film, TV and the internet",
  why: "To talk about clubs, films, plays, TV programmes and life online. And to review a film or a show and keep a conversation going.",
  plan: [
    "Clubs for every interest",
    "Cinema, theatre, TV or the internet?",
    "A well-known actor, a two-hour film: compound adjectives",
    "It was great, wasn’t it? Question tags",
    "My favourite film or show: a review",
    "Really? Did you? Showing interest"
  ]
});

SLID.section("eng", {
  id: "e11s4",
  grade: 11,
  weeks: [14, 17],
  title: "Art and festivals",
  why: "To talk about kinds and genres of art, galleries, concert halls and festivals. And to describe the emotions that art makes you feel.",
  plan: [
    "Kinds and genres of art",
    "Learning from art: museums, galleries and theatres",
    "Amazing or amazed? Art and emotions",
    "Unusual, colourful, priceless: building adjectives",
    "Festivals in Ukraine and the UK",
    "A festival review: how it made me feel"
  ]
});

SLID.section("eng", {
  id: "e11s5",
  grade: 11,
  weeks: [18, 22],
  title: "Science and its impact",
  why: "To talk about branches of science and how science and technology affect people and the environment. And to describe research in Ukraine and abroad.",
  plan: [
    "Biology, physics, IT: branches of science",
    "In the lab: equipment and the people who work there",
    "It has been discovered, it is being tested: the passive",
    "It can be recycled, it must be tested: modals and the passive",
    "Science and the environment: good or bad?",
    "Science in Ukraine and abroad"
  ]
});

SLID.section("eng", {
  id: "e11s6",
  grade: 11,
  weeks: [23, 26],
  title: "Travel and tourism",
  why: "To talk about travelling around Ukraine and English-speaking countries and about kinds of tourism. And to tell the story of a trip in the right order.",
  plan: [
    "Kinds of tourism: active, cultural, green",
    "Travelling around Ukraine: places to visit",
    "Check in, look around, get on: travel verbs",
    "Pick it up, look after it: phrasal or prepositional?",
    "At first, then, eventually: the order of events",
    "Beforehand and afterwards: a trip abroad"
  ]
});

SLID.section("eng", {
  id: "e11s7",
  grade: 11,
  weeks: [27, 31],
  title: "Ukraine in the world",
  why: "To talk about Ukraine and international organisations, laws, rights and etiquette. And to tell people about important events and outstanding people of English-speaking countries.",
  plan: [
    "Ukraine, the EU, the UN and the Council of Europe",
    "Laws and rights: what the law says",
    "Is it polite? Etiquette in different countries",
    "Who or whom? Relative pronouns: an overview",
    "We won, which surprised everyone: comments with which",
    "Ukraine and English-speaking countries: events and people"
  ]
});

SLID.section("eng", {
  id: "e11s8",
  grade: 11,
  weeks: [32, 35],
  title: "Exams, careers and plans",
  why: "To talk about final exams, studying after school and international programmes. And to choose a career and share your plans and wishes.",
  plan: [
    "Final exams: getting ready",
    "International programmes and exchanges",
    "If I pass, if I passed, if I had passed: conditionals",
    "Choosing a career: what suits you?",
    "Prestigious jobs in Ukraine and abroad",
    "Goodbye, school! Friends, plans and wishes"
  ]
});
