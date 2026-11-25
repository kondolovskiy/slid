import assert from "node:assert/strict";
// Слід · тести текстових метрик (tools/lib.mjs): речення, слова, текст екрана. Запуск: node tools/test-metrics.mjs
import { sentences, screenAllText, screenReadText, words, lessonMetrics, plain, mplain, syllables, metricKeys, profileFor, METRIC_KEYS, subjectStats } from "./lib.mjs";
import { ENG_LESSON } from "./fixtures/eng-lesson.mjs";

for (const abbreviation of ["р.", "рр.", "ст.", "тис.", "млн.", "н. е.", "див."]) {
  assert.equal(sentences(`У 1922 ${abbreviation} почалася подія. Потім інша.`).length, 2, abbreviation);
  assert.equal(sentences(`Завершилося у 1922 ${abbreviation} Наступна подія.`).length, 2, abbreviation + " at end");
}
assert.equal(sentences("Див. 12 прикладів. Готово!").length, 2);
assert.equal(sentences("Що сталося? Подія завершилася… Далі буде.").length, 3);
const screen = { type:"choice", title:"Обери назву", body:"<p>Прочитай умову.</p>", opts:["Перша довга назва", "Друга назва"], items:[["Назва предмета", 0]] };
assert.deepEqual(sentences(screenAllText(screen)).map(x => words(x).length), [2, 2, 3, 2, 2]);
assert.equal(lessonMetrics({screens:[screen]}).sentenceWords, 2.2);

// engine-lang-p3
const sw = t => sentences(mplain(t)).map(x => words(x).length);
// п. 12: комбінований наголос U+0301 — частина слова
assert.deepEqual(words("листопа́д і [йа́ма]"), ["листопа́д", "і", "йа́ма"]);
// п. 17: тег усередині слова — не межа слова
assert.equal(plain("Слово велос<b>и</b>пед, д<b><i>и</i></b>плом і <b>сад</b> тут."), "Слово велосипед, диплом і сад тут.");
assert.equal(words(plain("велос<b>и</b>пед")).length, 1);
// п. 11: алфавіт не склеюється з наступним реченням і не рахується довгим реченням; пункти <li> без крапки — окремі речення
assert.deepEqual(sw("<p>А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ю Я</p><p>Це абетка.</p>"), [3]);
assert.deepEqual(sw("<p>Запам'ятай:</p><ul><li>перший пункт</li><li>другий пункт;</li><li>третій.</li></ul>"), [1, 2, 2, 1]);
assert.deepEqual(sw("Голосні а, о, у, е, и, і — шість звуків."), [3]);
assert.equal(mplain("Маємо $a$, $b$, $c$, $d$."), "Маємо Ф, Ф, Ф, Ф.");   // формули (Ф) — не перелік літер
assert.deepEqual(sw("Я і ти. А він?"), [3, 2]);   // поодинокі однолітерні слова лишаються
// п. 13: транскрипції й переліки звуків не рахуються
assert.deepEqual(sw("Слово [йа́ма] має звуки [й], [а], [м], [а]."), [3]);
// п. 14: «?» усередині <i> — не кінець речення; питальне речення курсивом — кінець
assert.deepEqual(sw("Іменник відповідає на питання <i>хто? що?</i> і називає предмет."), [9]);
assert.deepEqual(sw("Ставимо питання (<i>коли?</i>) до обставини."), [5]);
assert.deepEqual(sw("Він спитав: <i>Хто прийшов?</i> Ніхто не відповів."), [4, 3]);
// tools-lang-p4, P3-1: «?» усередині курсиву не ділить речення лише після короткого питання (≤ 2 слова); приклади-речення в одному курсиві — окремі
assert.deepEqual(sw("Приклади: <i>Де ти був? Я шукав.</i>"), [4, 2]);
assert.deepEqual(sw("Питання <i>з ким? про що?</i> ставимо до додатка."), [8]);
assert.deepEqual(sw("Приклад: <i>Чи <b>прийде</b> брат завтра? Так, прийде.</i>"), [5, 2]);
// мовна вправа: «?» з курсиву в readText не розриває речення
assert.equal(words(screenReadText({ type: "info", title: "Питання", body: "Питання <i>хто? що?</i> ставимо до іменника." })).length, 7);
// tools-math-ister-p3 п. 17 (рев'ю engine-lang-p3): грецькі назви площин і рядок однолітерних слів — текст, не перелік літер;
// вставка упорядника [їм] у «цитаті» — слово, транскрипція в цитаті ([й], [с:ади́ти]) — ні
assert.equal(mplain("Площини α, β і γ паралельні."), "Площини α, β і γ паралельні.");
assert.equal(mplain("Він прийшов, а й у в нас."), "Він прийшов, а й у в нас.");
assert.equal(mplain("Голосні а, о, у, е, и, і."), "Голосні.");
assert.equal(mplain("Пише: «дали [їм] хліба»."), "Пише: «дали їм хліба».");
assert.equal(mplain("Слово [їм] і [йа́ма]."), "Слово і.");
assert.equal(words(mplain("Тренер: «Треба [с:ади́ти], звук [й]».")).length, 3);
// tools-content-checks-p3 п. 3: хронологія — дата на початку рядка веде подію («1958 р. Мао…», «1958 р. — Мао…»), крапка скорочення не кінець речення
assert.equal(sentences("1958 р. Мао прийшов до влади. 1959 р. — Мао пішов. 1914–1918 рр. Перша світова. XV ст. Козацтво виникло.").length, 4);
assert.equal(sentences("1958 р. — Мао.").length, 1);
assert.equal(sentences("Подія була у 1958 р. Далі вони пішли.").length, 2, "дата в кінці речення, не на початку");
assert.equal(sentences("Це було. 1958 р. Далі.").length, 2, "після крапки дата й подія — одне речення");

// engine-eng-stats (docs/design/english.md §6.1, D-055): англійські склади й речення — лише для lang "en"; українські метрики не змінюються
let n = 46;
const ok = (a, b, m) => { assert.deepEqual(a, b, m); n++; };
const EN_SYL = { cat: 1, the: 1, she: 1, be: 1, are: 1, I: 1, year: 1, your: 1, "don't": 1, make: 1, makes: 1, smile: 1, there: 1, played: 1, lives: 1, goes: 1, school: 1,
  ago: 2, table: 2, tables: 2, people: 2, wanted: 2, needed: 2, boxes: 2, places: 2, studies: 2, Ukraine: 2, nation: 2, language: 2, yellow: 2, English: 2,
  beautiful: 3, family: 3, computer: 3, radio: 3, piano: 3, usual: 3, favourite: 3, January: 4, biology: 4, international: 5 };
for (const [w, k] of Object.entries(EN_SYL)) ok(syllables(w, "en"), k, `en ${w}`);
ok(syllables("2026", "en"), 0, "число — не слово зі складами");
ok(syllables("beautiful"), 5, "без lang — як раніше: голосні поодинці");
ok(syllables("листопад"), 3); ok(syllables("листопад", "en"), 3, "кирилиця в eng — за голосними, як раніше");
const sn = (t, lang) => sentences(t, lang).length;
ok(sn("Mr. Brown lives in London. He has a dog.", "en"), 2, "Mr.");
ok(sn("Mrs. Green and Dr. Smith are here. Ms. Lee is not.", "en"), 2, "Mrs. Dr. Ms.");
ok(sn("I like fruit, e.g. apples and pears. Do you?", "en"), 2, "e.g.");
ok(sn("Wear something warm, i.e. a coat. OK?", "en"), 2, "i.e.");
ok(sn("Big cities, e.g. London and Kyiv, are busy. Small towns are quiet.", "en"), 2, "e.g. перед великою літерою");
ok(sn("Ask the teacher, i.e. Mrs Green. She knows.", "en"), 2, "i.e. перед великою літерою");
ok(sn("Bring pens, pencils, etc. and a ruler. Thanks!", "en"), 2, "etc. усередині речення");
ok(sn("We have pens, pencils, etc. Then we go.", "en"), 2, "etc. у кінці речення");
ok(sn("School starts at 8 a.m. and ends at 3 p.m. Then I go home.", "en"), 2, "a.m. / p.m.");
ok(sn("Room No. 5 is open. Come in!", "en"), 2, "No. 5");
ok(sn("J. K. Rowling wrote it. It is good.", "en"), 2, "ініціали");
ok(sn("Tom vs. Ann: who wins? Ann!", "en"), 2, "vs.");
ok(sn("Mr. Brown lives in London. He has a dog."), 3, "без lang — як раніше (українські правила)");
ok(sentences("Він прийшов у 1922 р. Потім інша.", "en").length, sentences("Він прийшов у 1922 р. Потім інша.").length, "українські скорочення в eng не ламаються");
// метрики уроку: lang "en" — англійські склади (довге слово від 3 складів), речення й maxText
const ue = lessonMetrics(ENG_LESSON), en = lessonMetrics(ENG_LESSON, { lang: "en" });
ok(en.maxText, 27, "найдовший текст — body екрана 2, без заголовка");
ok(en.maxReadWords, 30, "maxReadWords — із заголовком, як раніше");
ok(ue.maxText, 27, "maxText не залежить від мови");
ok(lessonMetrics({ screens: [ENG_LESSON.screens[2]] }).maxText, 16, "текст мовної вправи (gaps) — окремий текст, більший за body");
ok(en.wordsTotal, ue.wordsTotal, "слова рахуються однаково");
ok(en.sentenceWords > ue.sentenceWords, true, "Mr., a.m., e.g. не ріжуть речень");
// довгі слова (≥ 3 англійських склади: beautiful, favourite, Olena…) рахуємо незалежно від lessonMetrics
const long3 = words(ENG_LESSON.screens.map(screenAllText).join(" ")).filter(w => syllables(w, "en") >= 3).length;
ok(en.longWordShare, +(long3 / en.wordsTotal).toFixed(3), "довге англійське слово — від 3 складів");
ok(long3 > 0 && en.longWordShare !== ue.longWordShare, true, "поріг і склади для en інші, ніж для української");
// ключі метрик: maxText — лише для предмета з мовою змісту (targetLang); українські предмети — як раніше
ok(METRIC_KEYS, ["screens","gradedShare","readWordsPerScreen","maxReadWords","sentenceWords","longWordShare","typeVariety"]);
ok(metricKeys({ id: "ukr", sections: [] }), METRIC_KEYS);
ok(metricKeys({ id: "eng", targetLang: "en", sections: [] }), [...METRIC_KEYS, "maxText"]);
// профіль: діапазон класів, і точний клас поверх нього (ліміти тексту 5 і 6, 10 і 11 кл. різні — §6.1)
const prof = { _default: { "5-6": { screens: [5, 10] }, "10-11": { screens: [5, 12] } },
  eng: { "5-6": { screens: [4, 9], maxText: [0, 120] }, "5": { maxText: [0, 80] }, "10-11": { maxText: [0, 450] }, "10": { maxText: [0, 400] } } };
ok(profileFor(prof, { id: "eng" }, 5), { screens: [4, 9], maxText: [0, 80] });
ok(profileFor(prof, { id: "eng" }, 6), { screens: [4, 9], maxText: [0, 120] });
ok(profileFor(prof, { id: "eng" }, 10), { maxText: [0, 400] }, "діапазон предмета замінює _default цілком, як раніше");
ok(profileFor(prof, { id: "eng" }, 11), { maxText: [0, 450] });
ok(profileFor(prof, { id: "ukr" }, 6), { screens: [5, 10] }, "немає профілю предмета — _default");
ok(profileFor(prof, { id: "ukr" }, 4), {}, "немає ні того, ні того — порожній");
ok(profileFor({ _default: { "5-6": { screens: [5, 10] } }, x: { "5": { maxText: [0, 80] } } }, { id: "x" }, 5), { screens: [5, 10], maxText: [0, 80] }, "лише клас без діапазону предмета — поверх _default");
// subjectStats (звіт stats.mjs): предмет з targetLang "en" — англійські метрики, maxText у ключах і z-оцінках, профіль точного класу
const sub = (extra, grade = 5) => ({ id: "fx", sections: [{ id: "fx-s1", grade, lessons: [ENG_LESSON, { ...ENG_LESSON, id: "fx-eng2", screens: ENG_LESSON.screens.slice(1) }] }], ...extra });
const se = subjectStats(sub({ targetLang: "en" }), { fx: { "5-6": { sentenceWords: [0, 4] }, "5": { maxText: [0, 20] } } }, { "fx-s1": "content/fx/g5-s1.js" });
ok(se.keys.includes("maxText"), true);
ok(se.rows[0].sentenceWords, en.sentenceWords, "англійські речення");
ok(se.rows[0].longWordShare, en.longWordShare, "англійські склади");
ok(se.rows[0].file, "content/fx/g5-s1.js");
ok(se.rows[0].flags.slice(0, 2), ["sentenceWords=4.3 поза [0; 4]", "maxText=27 поза [0; 20]"], "ключ діапазону й ключ точного класу");
ok(Object.keys(se.bands["5-6:lesson"]).includes("maxText"), true, "maxText — у середніх сім'ї");
const su = subjectStats(sub({}), { fx: { "5": { maxText: [0, 20] } } });
ok(su.keys, METRIC_KEYS, "український предмет — без maxText у ключах");
ok(su.rows[0].sentenceWords, ue.sentenceWords, "без targetLang — українські правила, як раніше");
ok(Object.keys(su.bands["5-6:lesson"]).includes("maxText"), false);
ok(subjectStats({ id: "fx", targetLang: "en", sections: [{ id: "p", grade: 4 }] }).rows, [], "предмет лише з планом — порожній звіт");
console.log(`${n} перевірок текстових метрик пройдено`);
