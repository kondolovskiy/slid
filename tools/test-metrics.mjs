import assert from "node:assert/strict";
// Слід · тести текстових метрик (tools/lib.mjs): речення, слова, текст екрана. Запуск: node tools/test-metrics.mjs
import { sentences, screenAllText, screenReadText, words, lessonMetrics, plain, mplain } from "./lib.mjs";

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
console.log("36 перевірок текстових метрик пройдено");
