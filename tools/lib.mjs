// Слід · спільні функції для інструментів: завантаження контенту поза браузером, текстові метрики.
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
import { ROOT, manifest } from "./build.mjs";
export { ROOT };

/** Ранній вихід із кодом без обрізання виводу (tools-euphony-json-pipe): у pipe process.stdout асинхронний, і process.exit()
 *  одразу після великого console.log / stdout.write обриває його на 64 КБ. Порожній запис із колбеком виконується після всіх
 *  попередніх, тож чекаємо обидва потоки й лише тоді виходимо. Наприкінці скрипта досить process.exitCode = code. */
export async function exitFlushed(code = 0) {
  ignoreEpipe();
  process.exitCode = code;
  await Promise.all([process.stdout, process.stderr].map(s => new Promise(res => s.write("", res))));
  process.exit(code);
}

/** Читач закрив pipe рано (`| head`): прямий process.stdout.write без обробника дає «Unhandled 'error' event» (EPIPE) і код 1
 *  (рев'ю tools-euphony-json-pipe P2-1; console.log помилки потоку й так ковтає). EPIPE — тихо, код виходу лишається; решта помилок — як були. */
export function ignoreEpipe() {
  for (const s of [process.stdout, process.stderr]) if (!s.listeners("error").includes(onStdError)) s.on("error", onStdError);
}
function onStdError(e) { if (e?.code !== "EPIPE") throw e; }

/** Завантажує весь контент так само, як браузер, і повертає { subjects, soon, files }. root — інше дерево (типово — репозиторій). */
export function loadContent(root = ROOT) {
  const ctx = { console }; vm.createContext(ctx); ctx.window = ctx;
  const files = manifest(root).filter(f => f !== "app/app.js");
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); }
    catch (e) { throw new Error(`Помилка у ${f}: ${e.message}`); }
  }
  // звідки прийшов кожен розділ — щоб повідомлення вказували на файл
  const origin = {}, graphOrigin = {}, poolOrigin = {}, diagOrigin = {};   // graphOrigin: предмет → файл SLID.graph (CONTENT_SCHEMA §11); poolOrigin / diagOrigin: пул / тест → файл
  for (const f of files.filter(f => f.startsWith("content/") && !f.startsWith("content/subjects"))) {
    const src = fs.readFileSync(path.join(root, f), "utf8");
    for (const m of src.matchAll(/SLID\.section\(\s*"[^"]+",\s*\{\s*id:\s*"([^"]+)"/g)) origin[m[1]] = f;
    for (const m of src.matchAll(/SLID\.graph\(\s*["']([^"']+)["']/g)) graphOrigin[m[1]] = f;
    for (const m of src.matchAll(/SLID\.diag\(\s*["'][^"']+["'],\s*\{\s*["']?id["']?:\s*["']([^"']+)["']/g)) diagOrigin[m[1]] = f;
    for (const m of src.matchAll(/SLID\.pool\(\s*["'][^"']+["'],\s*\{\s*["']?id["']?:\s*["']([^"']+)["']/g)) poolOrigin[m[1]] = f;
  }
  ctx.SLID.finalize();
  return { subjects: ctx.SLID_SUBJECTS, soon: ctx.SLID_SOON, files, origin, graphOrigin, poolOrigin, diagOrigin, graphs: ctx.SLID.graphs || [], lab: ctx.SLID_LAB, learn: ctx.SLID_LEARN, math: ctx.SLID_MATH, lang: ctx.SLID_LANG };
}

/* Мова змісту предмета (engine-eng-lang-attr, D-054): правило одне — SLID.subjectLang з app/registry.js (рушій ставить за ним lang
   на зміст плеєра). validate, stats і content-checks вимикають українські правила для предмета з subjectLang(c) !== "" (engine-eng-validate,
   engine-eng-stats). subj — об'єкт предмета (з loadContent) або meta з SLID.subject; рядок-id тут не розпізнати (немає змісту) — "". */
let REG = null;
const registry = () => { if (!REG) { const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "app/registry.js"), "utf8"), ctx); REG = ctx.SLID; } return REG; };
export const TARGET_LANGS = Object.freeze([...registry().TARGET_LANGS]);
export const subjectLang = subj => subj && typeof subj === "object" ? registry().subjectLang(subj) : "";
export const isEnglishSubject = subj => subjectLang(subj) === "en";

export const GRADED = ["choice","multi","sort","slider","order","align","shade","numline","number","fracin","lab","answer","gaps","pick","stress","word","split"];
export const TYPES = ["intro","info","explore", ...GRADED];
// предмети, де кожен урок має справжнє img (D-027, D-044): validate (помилка) і шаблон задачі автора в make-tasks.mjs
export const IMG_REQUIRED = { hist: "error", world: "error" };
// розділи без пулу тренування (engine-pool-lang): розвиток мовлення «Пишемо самі…» (u5s11, u6s14, u7s13, u8s14) — письмо автоматично
// не перевірити. Спільне для make-tasks.mjs (задач не створює) і personalization-qa.mjs (пул такого розділу — помилка). За назвою, щоб
// правило діяло й на розділи 9–11 класів; перевірювані уроки там (ділові папери: реквізити) — окремим рішенням пізніше
export const NO_POOL_SECTION = /^Пишемо самі/;
/** Розділ без пулу тренування: поле розділу noPool: true (engine-eng-tools; предмет, де «Пишемо самі» в назві немає, — eng; можна й у plan.js:
    реєстр зливає запис плану з файлом розділу) або назва «Пишемо самі…» (NO_POOL_SECTION). make-tasks і personalization-qa — лише через неї. */
export const noPool = sec => !!sec && (sec.noPool === true || NO_POOL_SECTION.test(sec.title || ""));
/** Контекст learn.validate для тесту рівня предмета: усі розділи (і лише з планом), уроки-боси — поза списком уроків розділу.
    Одне джерело для validate.mjs і personalization-qa.mjs (рев'ю tools-diag-nonmath-p3, P3-2).
    all — усі предмети: allLessons (id → {grade, subject}) лише інших предметів, для see baseline-теми (engine-1117-followups п. 3;
    dgw7 era → урок «Історії»). Свій предмет туди не потрапляє — свої уроки learn.validate бере з lessons (рев'ю engine-diag-baseline-plan-1117 P3-2). */
export function diagCtx(c, all = []) {
  const lessons = new Map(), sections = new Map(), allLessons = new Map();
  for (const sec of c.sections) { sections.set(sec.id, { grade: sec.grade, lessons: (sec.lessons || []).filter(l => !l.boss).map(l => l.id) }); (sec.lessons || []).forEach(l => lessons.set(l.id, { grade: sec.grade })); }
  for (const o of all) if (o.id !== c.id) for (const sec of o.sections || []) for (const l of sec.lessons || []) if (!allLessons.has(l.id)) allLessons.set(l.id, { grade: sec.grade, subject: o.id });
  return { lessons, sections, skills: c.skills, allLessons };
}

/** Прибирає HTML і формули, повертає чистий текст.
    engine-lang-p3: тег між літерами без пробілу (велос<b>и</b>пед) — частина слова, а не межа (п. 17); кожен пункт списку <li> — окреме речення,
    навіть без крапки чи з «;» у кінці (п. 11); «?» усередині <i>/<em> (переліки питань «хто? що? де?») — не кінець речення (п. 14): після нього
    невидимий U+2060, і sentences() там не ділить (лише після питання з ≤ 2 слів, tools-lang-p4); останній «?» перед </i> — кінець речення, лише якщо далі велика літера чи кінець тексту. */
const INWORD_TAGS = /(?<=[\p{L}\p{M}'’ʼ])(?:<\/?(?:b|i|u|em|strong|mark|span)\b[^>]*>)+(?=[\p{L}\p{M}])/gu;
// tools-lang-p4 (P3-1): лише після короткого питання (≤ 2 слова від початку курсиву чи попереднього . ! ? …) — «хто? що?», «з ким? про що?»;
// довше питання (<i>Де ти був? Я шукав.</i>) — кінець речення, приклади-речення в одному курсиві не склеюються.
// Відоме обмеження (рев'ю tools-lang-p4, P3-2; лише метрики): питання з 3+ слів у переліку («<i>з якою метою? чому?</i>») ділить речення,
// а діалог із коротких питань («<i>Хто там? Я. Що робиш? Читаю.</i>») частково склеюється
const shortQ = seg => (seg.replace(/<[^>]*>/g, " ").match(/[\p{L}\p{M}\p{N}'’ʼ-]+/gu) || []).length <= 2;
const italicQ = t => t.replace(/(<(i|em)\b[^>]*>)([\s\S]*?)(?=<\/\2>)/gi, (m, a, tag, body) =>
  a + body.replace(/[^.!?…]*\?/g, (seg, off, str) => /\S/.test(str.slice(off + seg.length)) && shortQ(seg) ? seg + "\u2060" : seg))
  .replace(/\?(\s*<\/(?:i|em|I|EM)>\s*)(?=[\p{Ll},;:—–)»\d])/gu, "?\u2060$1");
export function plain(s = "") {
  return italicQ(String(s)).replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " Ф ").replace(INWORD_TAGS, "")
    .replace(/<\/?li\b[^>]*>/gi, "\uE004").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ")
    .replace(/(?:\s*[,;:]?\s*\uE004)+\s*/g, (m, k, src) => k === 0 || /[.!?…]$/.test(src.slice(0, k).trimEnd()) ? " " : ". ")   // межа пункту — кінець речення, якщо його ще немає
    .replace(/\s+/g, " ").trim();
}
/** Текст для метрик стилю (stats, профіль validate, довгі речення): plain() без транскрипцій [йа́ма] і переліків звуків [а], [о]
    (п. 13) та без рядків з одиночних літер — алфавіт «А Б В … Я», переліки «а, о, у, е» (п. 11; «Ф» — формула, її не чіпаємо). */
// tools-math-ister-p3 п. 17 (рев'ю engine-lang-p3): грецькі літери — назви площин і кутів («площини α, β і γ»), не перелік літер;
// рядок лише з однолітерних слів української («а й у», «і в») — текст, а не перелік
const LETTER_RUN = /(?:(?<![\p{L}\p{M}\p{N}'’ʼ-])(?!Ф(?![\p{L}]))(?!\p{Script=Greek})\p{L}\p{M}?(?![\p{L}\p{M}\p{N}'’ʼ-])[\s,;/·–—-]*){4,}/gu;
const ONE_WORDS = new Set(["а", "в", "є", "з", "й", "і", "о", "у"]);
const letterRun = m => (m.match(/\p{L}/gu) || []).every(ch => ONE_WORDS.has(ch.toLocaleLowerCase("uk"))) ? m : " ";
// [йа́ма], [а], [ш′] — транскрипції (прибираємо); [їм], [про неї] у «цитаті» — вставка упорядника (hist), її читають: лишаємо слова.
// Вставка — лише в «…», без знаків транскрипції (наголос, ′, ', :) і довша за 1 літеру: «Звук [й]», «Треба [с:ади́ти]» — транскрипції
const bracket = (m, x, off, src) => { const h = src.slice(0, off);
  return (h.match(/«/g) || []).length > (h.match(/»/g) || []).length && !/[\u0301′'’ʼ:ː]/.test(x) && (x.match(/\p{L}/gu) || []).length > 1 ? x : " "; };
export function mplain(s = "") {
  return plain(s).replace(/\[([^\[\]]{1,40})\]/g, bracket).replace(LETTER_RUN, letterRun).replace(/\s+([,.;:!?…])/g, "$1").replace(/(?:[,;:]\s*)+(?=[,;.!?…]|$)/g, "").replace(/\s+/g, " ").trim();
}
const VOW = /[аеєиіїоуюяaeiouy]/gi;
// \p{M}: комбінований наголос U+0301 — частина слова («листопа́д» — одне слово, п. 12)
export const words = t => (t.match(/[\p{L}\p{M}\p{N}'’ʼ-]+/gu) || []);
/** Склади слова. Типово (українська) — кількість голосних. lang "en" (предмет з targetLang "en", engine-eng-stats) — групи голосних
    латиницею з поправками: німе кінцеве -e (make, smile; але table, people — склад -le), -ed без t/d перед ним (played, але wanted),
    -es без шиплячого перед ним (makes, але boxes, places, tables), u після q/g — не склад (language),
    зяяння ia/io/iu/uo/ua — два склади (radio, piano, usual), крім -tion/-sion/-cial… (nation, special). Евристика для метрик стилю,
    не словник: idea, quiet, something, hundred, recipe рахує на склад менше чи більше. Слово без латинських літер — як типово. */
export const syllables = (w, lang = "") => lang === "en" && /[a-z]/i.test(w) ? enSyllables(w) : (w.match(VOW) || []).length;
function enSyllables(w) {
  let x = w.toLowerCase().replace(/[^a-z]/g, "");   // she, be, are — нуль груп після німого -e → 1 (Math.max нижче)
  if (/[^aeiouy]ed$/.test(x) && !/[td]ed$/.test(x)) x = x.slice(0, -2);
  else if (/[^aeiouy]es$/.test(x) && !/(?:[sxz]|[cs]h|[cg]|[^aeiouy]l)es$/.test(x)) x = x.slice(0, -2);
  else if (/[^aeiouy]e$/.test(x) && !/[^aeiouy]le$/.test(x)) x = x.slice(0, -1);
  const groups = (x.match(/[aeiouy]+/g) || []).length;
  const hiatus = (x.match(/(?<![qg])u[ao]|(?<![cstx])i[aou]/g) || []).length;
  return Math.max(1, groups + hiatus);
}
/** Межі речень. lang "en" — англійські скорочення (enAbbr) замість українських. */
export function sentences(t, lang = "") {
  if (lang === "en") return splitSentences(enAbbr(String(t)));
  // Protect abbreviation periods only when the following text continues the sentence.
  const text = String(t).replace(/(?<![\p{L}])н\.(?=\s*е\.)/gu, "н\uE000")
    .replace(/(?<![\p{L}])(?:е\.|рр?\.|ст\.|тис\.|млн\.|[Дд]ив\.)\s*(?=[\p{Ll}\d])/gu,
    m => m.replace(/\./g, "\uE000"))
    // хронології (tools-content-checks-p3 п. 3): «1958 р. Мао…», «1958 р. — Мао…» — дата на початку рядка веде подію, її крапка не кінець речення
    // (раніше кожна дата давала хибне «коротке речення»). Скорочення перед тире — завжди; перед великою літерою — лише коли дата відкриває речення
    .replace(/(?<![\p{L}])(?:рр?|ст)\.(?=\s*[—–])/gu, m => m.replace(/\./g, "\uE000"))
    .replace(/(^|[.!?…]\s+)((?:\d{1,4}(?:\s*[–-]\s*\d{1,4})?|[IVXХ]{1,6})\s*(?:рр?|ст)\.)(?=\s*\p{Lu})/gu, (m, a, b) => a + b.replace(/\./g, "\uE000"));
  return splitSentences(text);
}
const splitSentences = text => text.split(/(?<=[.!?…])\s+/).map(x => x.replace(/\uE000/g, ".").trim()).filter(x => words(x).length > 0);
/* Англійські скорочення (engine-eng-stats): крапка, що не кінець речення, стає \uE000. Звертання (Mr., Mrs., Ms., Dr., Prof., St., Mt., Jr., Sr.),
   e.g., i.e., vs., cf., viz. — завжди; No. — перед числом; etc., a.m., p.m. і скорочення з крапками (U.S.) — якщо далі не велика літера
   («…at 3 p.m. Then I go» — два речення); ініціали — ланцюжок із 2+ («J. K. Rowling», «J.K. Rowling»).
   Відомі межі: один ініціал («J. Smith») ділить речення; «U.K.» перед ім'ям чи «J.K.» перед малою літерою — як вище. Британська норма — Mr, UK без крапок. */
const protect = m => m.replace(/\./g, "\uE000");
const enAbbr = t => t
  .replace(/(?<![\p{L}])(?:Mrs?|Ms|Dr|Prof|St|Mt|Jr|Sr|e\.g|i\.e|vs|cf|viz)\.(?=\s)/gu, protect)
  .replace(/(?<![\p{L}])No\.(?=\s*\d)/gu, protect)
  .replace(/(?<![\p{L}])(?:\p{Lu}\.\s?){2,}(?=\p{Lu}\p{Ll})/gu, protect)
  .replace(/(?<![\p{L}])(?:etc\.|(?:[A-Za-z]\.){2,})(?=\s)(?!\s+\p{Lu})/gu, protect);

/** Текст, який дитина читає на екрані (без варіантів відповідей і фідбеку). */
// текст мовної вправи (pick/gaps/stress/split) дитина читає так само, як body: SLID_LANG.readText (app/lang.js) — DRY з рушієм
let LANG_READ = null;
function langText(s) {
  if (!["gaps", "pick", "stress", "split"].includes(s?.type)) return "";
  if (!LANG_READ) { const ctx = {}; ctx.window = ctx; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/lang.js"), "utf8"), ctx); LANG_READ = ctx.SLID_LANG.readText; }
  return LANG_READ(s);
}
export function screenReadText(s) { return mplain([s.title, s.body, langText(s)].filter(Boolean).join(" ")); }
/** Увесь текст екрана, включно з варіантами й поясненнями. */
export function screenAllText(s) {
  const parts = [s.title, s.body, s.fbText, s.fbOk, s.fbBad, s.hint, ...(s.opts || []), langText(s), ...(s.items || []).map(i => Array.isArray(i) ? i[0] : i)];
  return parts.filter(Boolean).map(mplain).filter(Boolean).map(t => /[.!?…]$/.test(t) ? t : t + ".").join(" ");
}

/** Метрики, які stats.mjs зводить у звіт і z-оцінки «сім'ї». maxText — лише для предмета з мовою змісту (targetLang, D-054):
    найдовший текст для читання на екрані, ліміти — style/<предмет>.md (docs/design/english.md §6.1). Українські предмети — як раніше. */
export const METRIC_KEYS = Object.freeze(["screens","gradedShare","readWordsPerScreen","maxReadWords","sentenceWords","longWordShare","typeVariety"]);
export const metricKeys = subj => subjectLang(subj) ? [...METRIC_KEYS, "maxText"] : [...METRIC_KEYS];
/** Профіль складності уроку (style/profiles.json): діапазон класів предмета («4», «5-6», «7-9», «10-11»), інакше _default того ж діапазону;
    поверх нього — ключі точного класу предмета («5», «10»…), бо ліміти тексту в межах діапазону різні (engine-eng-stats). Спільне для stats і validate. */
export function profileFor(profiles, subj, grade) {
  const own = profiles?.[subj?.id] || {}, band = gradeBand(grade);
  return { ...(own[band] || profiles?._default?.[band] || {}), ...(String(grade) !== band ? own[String(grade)] : {}) };
}
// довге слово: українська — від 5 складів; англійська — від 3 (поріг «складного слова» індексу Ганнінга, engine-eng-stats)
const LONG_SYLLABLES = { en: 3 };

/** Метрики уроку для синхронізації стилю й складності. lang — мова змісту предмета (subjectLang): "en" — англійські склади й речення. */
export function lessonMetrics(l, { lang = "" } = {}) {
  const all = l.screens.map(screenAllText).join(" ");
  const w = words(all), sents = sentences(all, lang);
  const long = w.filter(x => syllables(x, lang) >= (LONG_SYLLABLES[lang] || 5)).length;
  const graded = l.screens.filter(s => GRADED.includes(s.type) && !s.poll && !s.hyp);
  const types = {}; l.screens.forEach(s => types[s.type] = (types[s.type] || 0) + 1);
  const readWordsPerScreen = l.screens.map(s => words(screenReadText(s)).length);
  return {
    screens: l.screens.length,
    graded: graded.length,
    gradedShare: +(graded.length / l.screens.length).toFixed(2),
    infoShare: +((types.info || 0) / l.screens.length).toFixed(2),
    wordsTotal: w.length,
    readWordsPerScreen: Math.round(readWordsPerScreen.reduce((a, b) => a + b, 0) / l.screens.length),
    maxReadWords: Math.max(...readWordsPerScreen),
    // найдовший окремий текст екрана без заголовка: body або текст мовної вправи (gaps, pick… — SLID_LANG.readText)
    maxText: Math.max(0, ...l.screens.flatMap(s => [s.body, langText(s)].map(t => words(mplain(t || "")).length))),
    sentenceWords: +(w.length / Math.max(1, sents.length)).toFixed(1),
    longWordShare: +(long / Math.max(1, w.length)).toFixed(3),
    hints: l.screens.filter(s => s.hint).length,
    typeVariety: Object.keys(types).filter(t => GRADED.includes(t)).length,
    types
  };
}

/** Звіт stats.mjs для одного предмета: рядки уроків із метриками, z-оцінки «сім'ї» (предмет + діапазон класів + урок/фінал),
    прапорці профілю. Мова змісту (targetLang, D-054): "en" — англійські склади, речення й поріг довгого слова, ще й maxText (engine-eng-stats).
    origin — id розділу → файл (з loadContent). Повертає { bands, rows, keys }. */
export function subjectStats(c, profiles = {}, origin = {}) {
  const rows = [], KEYS = metricKeys(c), lang = subjectLang(c), bands = {};
  for (const sec of c.sections.filter(s => s.lessons)) for (const l of sec.lessons)
    rows.push({ subject: c.id, grade: sec.grade, band: gradeBand(sec.grade), section: sec.id, file: origin[sec.id], lesson: l.id, title: l.title, boss: !!l.boss, status: l.status, ...lessonMetrics(l, { lang }) });
  // статистика «сім'ї» (предмет + діапазон класів) для z-оцінок
  const fam = {};
  for (const r of rows) (fam[`${r.band}:${r.boss ? "boss" : "lesson"}`] ||= []).push(r);
  for (const [band, rs] of Object.entries(fam)) for (const k of KEYS) {
    const v = rs.map(r => r[k]), m = v.reduce((a, b) => a + b, 0) / v.length;
    const sd = Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length);
    const effectiveSd = Math.max(sd, Math.abs(m) * 0.1, Number.EPSILON);
    rs.forEach(r => (r.z ||= {})[k] = +((r[k] - m) / effectiveSd).toFixed(1));
    bands[band] = { ...(bands[band] || {}), [k]: { mean: +m.toFixed(2), sd: +sd.toFixed(2), effectiveSd: +effectiveSd.toFixed(3) } };
  }
  // відхилення від профілю
  for (const r of rows) {
    const p = profileFor(profiles, c, r.grade);
    r.flags = [];
    for (const [k, [lo, hi]] of Object.entries(p)) if (r[k] !== undefined && (r[k] < lo || r[k] > hi)) r.flags.push(`${k}=${r[k]} поза [${lo}; ${hi}]`);
    for (const k of KEYS) if (Math.abs(r.z?.[k] ?? 0) >= 2) r.flags.push(`${k} нетипово для сім'ї (z=${r.z[k]})`);
  }
  return { bands, rows, keys: KEYS };
}

export function gradeBand(g) { return g <= 4 ? "4" : g <= 6 ? "5-6" : g <= 9 ? "7-9" : "10-11"; }
export function readJSON(p) { return JSON.parse(fs.readFileSync(path.join(ROOT, p), "utf8")); }

/* Рисунок, якого бракує (tools-math-fig-audit): евристики за текстом умови (title, body, q — без варіантів і пояснень).
   level: "ref" — умова прямо посилається на рисунок/креслення/графік/діаграму («схема» не рахується: у мові це текстові схеми речень) («на рисунку», «за графіком»);
          "geo" — геометрична задача з ≥ 3 позначеннями точок у формулах ($ABC$, $\angle A$, $BB_1$);
          "graph" — згадка графіка, координатної площини чи діаграми без прямого посилання.
   Ілюстрація екрана — fig, img, svg або lab. prevIll — попередній екран уроку має ілюстрацію («рядок під рисунком» про модель вище).
   Спільне для tools/fig-audit.mjs і правила validate (попередження лише для "ref"). */
// «на графіку функції $y = …$», «дотична до графіка», «площа під графіком» — поняття, а не посилання на рисунок: графік рахуємо,
// лише коли за ним не йде формула (Ф), «функції», «рівняння» тощо («за графіком знайди», «на графіку видно»)
// Графік-розклад — лише за явним контекстом («за графіком руху автобусів», «графіком чергувань / уроків / занять / прийому»);
// «за графіком руху велосипедиста», «графіком зміни температури», «графіком роботи насоса» — читання графіка, ref (рев'ю tools-math-ister-p3 P1-1)
export const FIG_REF = /(?:^|[^\p{L}])(?:на|за|з|під|над|до)\s+(?:цьому\s+|цим\s+|даному\s+)?(?:рисун(?:ку|ком|ка|ок)|малюн(?:ку|ком|ка|ок)|кресленн(?:і|ям|я)|діаграм(?:і|ою|и|у))(?![\p{L}])|(?:^|[^\p{L}])(?:на|за|з)\s+графі?к(?:у|ом|а)(?![\p{L}])(?!\s*,?\s*(?:Ф|функці|рівнянн|залежн|многочлен|ціє|цьог|похідн|первісн|якщо|тоді|руху\s+(?:поїздів|потягів|автобусів|тролейбусів|трамваїв|маршруток|електричок|транспорту)|чергувань|уроків|занять|прийому))|(?:рисун|малюн)\S*\s+(?:нижче|вище|поруч)|(?:^|[^\p{L}])рис\.\s*\d|зображен\S*\s+на\s(?!(?:передньому|задньому|другому|першому)\s+плані|тлі)|(?:див\.|подивись на|розглянь)\s+(?:рисун|малюн|кресл|графік|діаграм)/iu;
const FIG_GEO = /трикутник|чотирикутник|паралелограм|трапеці|ромб|прямокутник|квадрат|кут(?:[аиіуо]|ом|ів)?(?![\p{L}])|бісектрис|медіан|висот[аиуіо]|серединн|перпендикуляр|паралельн|мимобіжн|коло|кола|колі|хорд|дотичн|вписан|описан|призм|пірамід|куб(?:[аіу]|ом)?(?![\p{L}])|паралелепіпед|тетраедр|цилінд|конус|відріз|промен|площин/iu;
// згадка (група graph у fig-audit, validate мовчить): графік, площина, діаграма, а також «на плані», «на схемі» — часто сюжет
// («на плані міста», масштаб 1 : 1000) чи мовна схема речення, тож лише кандидати для ручного перегляду (рев'ю tools-math-fig-audit P3-2)
const FIG_GRAPH = /графік|координатн\S*\s+площин|діаграм|(?:^|[^\p{L}])(?:на|за)\s+(?:план[іу]|схем(?:і|ою|у))(?![\p{L}])/iu;
// графік чи діаграму треба побудувати, а не прочитати: «побудуй графік», «дані показують круговою діаграмою», «Іра малює діаграму» —
// рисунок не потрібен (рев'ю tools-math-fig-audit: хибні pg6m3 f04, f06–f08)
// «показують / покажуть діаграмою» — лише орудний чи знахідний діаграми («Що показує графік?» — читання, лишається згадкою; рев'ю P3-1).
// Лише для згадки (graph): пряме посилання «На діаграмі стовпчик…» лишається ref, навіть якщо діаграму перед тим будували
const FIG_MAKE = /(?:побуд|будуй|будує|будуют|намал|малю|зобраз|накресл|склад)\p{L}*\s+(?:\p{L}+\s+){0,2}(?:графік|діаграм)|(?:показу|покаж)\p{L}*\s+(?:\p{L}+\s+)?діаграм(?:ою|у)(?![\p{L}])/iu;
export const hasIllustration = s => !!(s && (s.fig || s.img || s.svg || s.lab));
// Величини, а не точки (рев'ю tools-math-fig-audit P3-3: «$V = S * H$», «$πR^2H$», «$2πRH$» давали точки S, H, R, P):
// одна велика літера в добутку (·, *, \cdot, \times), у степені ($R^2$) чи після π — величина на всьому екрані.
// Позначення з кількох літер ($AB \cdot CD$, $AB^2$) лишаються точками.
// Літера після кута чи трикутника («$\angle A = 2 \cdot \angle B$») — точка, не величина; і літера, що десь на екрані входить у позначення
// з кількох літер ($ABC$), — теж точка (рев'ю tools-math-ister-p3 P2-1). ∠ — маркер \angle / \triangle / ∠ / △ (команди нижче стають пробілом)
const FIG_QTY = [/π\s*([A-Z]+)/g, /(?<!∠\s*)(?<![A-Za-z'′])([A-Z])(?=\s*(?:\^|\*))/g, /\*\s*([A-Z])(?![A-Za-z_'′])/g];
export function figPoints(text) {
  const P = new Set(), Q = new Set(), MULTI = new Set();
  for (const m of String(text).matchAll(/\$([^$]+)\$/g)) {
    const f = m[1].replace(/\\(?:text|mathrm|operatorname)\s*\{[^{}]*\}/g, " ").replace(/\\(?:cdot|times)(?![a-zA-Z])|·/g, " * ").replace(/\\pi(?![a-zA-Z])/g, "π").replace(/\\(?:angle|triangle|measuredangle)(?![a-zA-Z])|[∠△]/g, " ∠").replace(/\\[a-zA-Z]+/g, " ")
      .replace(/(?<![A-Za-z])[DE]\s*\(\s*[a-z]\s*\)/g, " ")                 // D(f), E(f) — області, не точки
      .replace(/(?<![A-Za-z])[SVRPQ]\s*(?=[=_(]|$|\s*[<>≤≥])/g, " ");      // S =, V =, P =, R = — величини, не точки
    for (const re of FIG_QTY) for (const q of f.matchAll(re)) for (const ch of q[1]) Q.add(ch);
    for (const w of f.matchAll(/(?<![A-Za-z])[A-Z](?:[A-Z]|_\{?\d\}?|'|′)*(?![a-z])/g)) { const L = w[0].match(/[A-Z]/g), afterPi = /π\s*$/.test(f.slice(0, w.index));   // «2πRH» — добуток величин, не позначення
      for (const ch of L) { P.add(ch); if (L.length > 1 && !afterPi) MULTI.add(ch); } }
  }
  for (const q of Q) if (!MULTI.has(q)) P.delete(q);
  return P;
}
// engine-eng-tools: зміст англійською (subjectLang "en") — англійські сигнали; українські на англійському тексті не спрацювали б (тихо вимкнено).
// ref — «look at / in / on / under / use / study / read the (this, these…) [одне слово] picture / photo / map / chart…», «the picture below»,
// «picture 2»; graph — згадка map / diagram / chart / graph; FIG_MAKE_EN — намалювати чи скласти самому, не згадка.
// «Look at the end of the word», «Draw a picture», «I like taking photos» — не посилання. geo (геометрія українською) для en вимкнено.
const EN_FIG = "(?:pictures?|photos?|photographs?|images?|illustrations?|drawings?|maps?|diagrams?|charts?|graphs?|posters?|cartoons?)";
const FIG_REF_EN = new RegExp(`\\b(?:look\\s+at|see|in|on|under|use|study|read)\\s+(?:the|this|these|that|those)\\s+(?:[a-z]+\\s+)?${EN_FIG}\\b|\\b${EN_FIG}\\s+(?:below|above|on\\s+the\\s+(?:left|right))\\b|\\b(?:picture|photo|fig\\.?|figure)\\s+\\d`, "i");
const FIG_GRAPH_EN = /\b(?:maps?|diagrams?|charts?|graphs?)\b/i;
const FIG_MAKE_EN = /\b(?:draw|make|create|design)\s+(?:[a-z]+\s+){0,3}(?:maps?|diagrams?|charts?|graphs?|pictures?)\b/i;
/** lang — мова змісту предмета (subjectLang): "" — українські сигнали, "en" — англійські. */
export function figCues(s, prev = null, lang = "") {
  if (!s) return null;
  const raw = [s.title, s.body, s.q].filter(x => typeof x === "string").join(" ");   // text — речення мовної вправи, не умова
  const text = raw.replace(/<[^>]+>/g, " ");
  const prose = text.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " Ф ");
  const ill = hasIllustration(s), prevIll = hasIllustration(prev);
  const en = lang === "en";
  const ref = prose.match(en ? FIG_REF_EN : FIG_REF)?.[0]?.trim();
  const pts = figPoints(text), geo = !en && FIG_GEO.test(prose) && pts.size >= 3;
  const graph = (en ? FIG_MAKE_EN : FIG_MAKE).test(prose) ? null : prose.match(en ? FIG_GRAPH_EN : FIG_GRAPH)?.[0]?.trim();
  const level = ref ? "ref" : geo ? "geo" : graph ? "graph" : null;
  if (!level) return null;
  // intro — сюжетний вступ («На кресленні двору…»): validate про нього не попереджає, fig-audit показує окремою групою (рев'ю P3-2)
  // text — сирий TeX без тегів, а не plain() з «Ф» (рев'ю P3-4): для ручного перегляду формули потрібні
  return { level, intro: s.type === "intro", ill, prevIll, ref: ref || null, points: [...pts].join(""), graph: graph || null,
    text: text.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().slice(0, 200) };
}
