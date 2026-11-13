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

export const GRADED = ["choice","multi","sort","slider","order","align","shade","numline","number","fracin","lab","answer","gaps","pick","stress","word","split"];
export const TYPES = ["intro","info","explore", ...GRADED];
// предмети, де кожен урок має справжнє img (D-027, D-044): validate (помилка) і шаблон задачі автора в make-tasks.mjs
export const IMG_REQUIRED = { hist: "error", world: "error" };
// розділи без пулу тренування (engine-pool-lang): розвиток мовлення «Пишемо самі…» (u5s11, u6s14, u7s13, u8s14) — письмо автоматично
// не перевірити. Спільне для make-tasks.mjs (задач не створює) і personalization-qa.mjs (пул такого розділу — помилка). За назвою, щоб
// правило діяло й на розділи 9–11 класів; перевірювані уроки там (ділові папери: реквізити) — окремим рішенням пізніше
export const NO_POOL_SECTION = /^Пишемо самі/;
/** Контекст learn.validate для тесту рівня предмета: усі розділи (і лише з планом), уроки-боси — поза списком уроків розділу.
    Одне джерело для validate.mjs і personalization-qa.mjs (рев'ю tools-diag-nonmath-p3, P3-2). */
export function diagCtx(c) {
  const lessons = new Map(), sections = new Map();
  for (const sec of c.sections) { sections.set(sec.id, { grade: sec.grade, lessons: (sec.lessons || []).filter(l => !l.boss).map(l => l.id) }); (sec.lessons || []).forEach(l => lessons.set(l.id, { grade: sec.grade })); }
  return { lessons, sections, skills: c.skills };
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
export const syllables = w => (w.match(VOW) || []).length;
export function sentences(t) {
  // Protect abbreviation periods only when the following text continues the sentence.
  const text = String(t).replace(/(?<![\p{L}])н\.(?=\s*е\.)/gu, "н\uE000")
    .replace(/(?<![\p{L}])(?:е\.|рр?\.|ст\.|тис\.|млн\.|[Дд]ив\.)\s*(?=[\p{Ll}\d])/gu,
    m => m.replace(/\./g, "\uE000"));
  return text.split(/(?<=[.!?…])\s+/).map(x => x.replace(/\uE000/g, ".").trim()).filter(x => words(x).length > 0);
}

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

/** Метрики уроку для синхронізації стилю й складності. */
export function lessonMetrics(l) {
  const all = l.screens.map(screenAllText).join(" ");
  const w = words(all), sents = sentences(all);
  const long = w.filter(x => syllables(x) >= 5).length;
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
    sentenceWords: +(w.length / Math.max(1, sents.length)).toFixed(1),
    longWordShare: +(long / Math.max(1, w.length)).toFixed(3),
    hints: l.screens.filter(s => s.hint).length,
    typeVariety: Object.keys(types).filter(t => GRADED.includes(t)).length,
    types
  };
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
export function figCues(s, prev = null) {
  if (!s) return null;
  const raw = [s.title, s.body, s.q].filter(x => typeof x === "string").join(" ");   // text — речення мовної вправи, не умова
  const text = raw.replace(/<[^>]+>/g, " ");
  const prose = text.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " Ф ");
  const ill = hasIllustration(s), prevIll = hasIllustration(prev);
  const ref = prose.match(FIG_REF)?.[0]?.trim();
  const pts = figPoints(text), geo = FIG_GEO.test(prose) && pts.size >= 3;
  const graph = FIG_MAKE.test(prose) ? null : prose.match(FIG_GRAPH)?.[0]?.trim();
  const level = ref ? "ref" : geo ? "geo" : graph ? "graph" : null;
  if (!level) return null;
  // intro — сюжетний вступ («На кресленні двору…»): validate про нього не попереджає, fig-audit показує окремою групою (рев'ю P3-2)
  // text — сирий TeX без тегів, а не plain() з «Ф» (рев'ю P3-4): для ручного перегляду формули потрібні
  return { level, intro: s.type === "intro", ill, prevIll, ref: ref || null, points: [...pts].join(""), graph: graph || null,
    text: text.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().slice(0, 200) };
}
