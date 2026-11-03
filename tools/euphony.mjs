// Слід · милозвучність у/в, і/й, з/із/зі в авторському тексті (Український правопис 2019, § 23–25; engine-lang-p3 п. 15).
// Лише ПОПЕРЕДЖЕННЯ validate (предмети з EUPHONY у validate.mjs). Правопис допускає відхилення (ритм, вподобання автора — примітки
// до § 23–25), тож перевірка навмисно вузька: позначає лише явні випадки, а сумнівні пропускає.
// Не перевіряє: приклади й цитати (<i>…</i>, «…»), закреслене (<s>…</s>), транскрипції […], формули; «і» між голосним і приголосним
// (зіставлення понять, § 24 п. 3.1, механічно не розпізнати); «з» після голосного перед з, с, ц, ж, ч, ш (відкрите питання людині,
// handoff ukr 6 кл. п. 8); префікси у-/в- (залежать від слова).
// Джерело: https://slovnyk.ua/pravopys.php?prav_par=23 (24, 25). Тести: node tools/test-euphony.mjs
const VOW = "аеєиіїоуюя", YOT = "яюєї";
const isV = ch => !!ch && VOW.includes(ch);
const HOLE = " ◊ ";   // «◊» — вилучений фрагмент: не слово, сусідні правила не спрацьовують
const MENTION = /^(?:у|в|і|й|з|із|зі|зо|чи|або|та)$/iu;
// слово перед назвою літери: «перед в пишемо», «прийменник з часто…» (два прийменники поспіль не бувають)
const MENTION_PREV = /^(?:перед|після|між|літер[аиуі]?|букв[аиуі]?|звук[аиу]?|прийменник[аиу]?|сполучник[аиу]?|частк[аиу]|префікс[аиу]?)$/iu;
const BEFORE_U =/^(?:[вф]|льв|зв|св|дв|тв|гв|хв)/;   // § 23 п. 1.5: «у» незалежно від попереднього слова

/** Текст для перевірки: без прикладів, цитат, закресленого, транскрипцій і формул; межа блоку — новий рядок (початок речення) */
export function prepare(html) {
  return String(html ?? "")
    .replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, HOLE)
    .replace(/<(s|del|i|em|code)\b[^>]*>[\s\S]*?<\/\1>/gi, HOLE)
    .replace(/«[^«»]*»/g, HOLE).replace(/\[[^\]]*\]/g, HOLE)
    .replace(/<\/?(?:p|li|ul|ol|div|h[1-6]|tr|td|th|table|blockquote)\b[^>]*>|<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&[a-z]+;|&#\d+;/gi, HOLE);
}

/** Що стоїть перед словом: S — початок речення, P — пауза (, ; : — – ( …), V / C — слово на голосний / приголосний; null — невідомо */
function prevCtx(before, cap) {
  const b = before.replace(/[ \t]+$/, ""), last = b.at(-1);
  if (!b || last === "\n") return { p: cap ? "S" : null };
  if (/[.!?]$/.test(b)) return { p: cap ? "S" : null };   // мала літера після крапки — скорочення («1990 р. в місті», § 23 п. 2.5)
  if (last === "…") return { p: cap ? "S" : "P" };
  if (/[,;:—–(]$/.test(b)) return { p: "P" };
  const ch = last.toLowerCase();
  if (/\p{L}/u.test(ch)) return { p: isV(ch) ? "V" : "C", end: ch };
  return { p: null };
}

/** Знахідки: [{ found: «брат в школі», want: «у», rule: «§ 23 п. 1.1 …» }] */
export function euphony(html) {
  const text = prepare(html), out = [];
  for (const m of text.matchAll(/(?<![\p{L}\p{M}'’ʼ-])(у|в|і|й|з|із|зі)(?![\p{L}\p{M}'’ʼ-])/giu)) {
    const raw = m[1], w = raw.toLowerCase(), cap = raw !== w;
    const { p, end } = prevCtx(text.slice(0, m.index), cap);
    if (!p || (cap && p !== "S")) continue;   // велика літера всередині речення — ініціал, римська цифра, назва
    const nm = text.slice(m.index + raw.length).match(/^ ([\p{L}][\p{L}\p{M}'’ʼ-]*)/u);
    if (!nm || /^\p{Lu}{2,}/u.test(nm[1])) continue;   // далі не слово (цифра, знак, вилучений приклад) або абревіатура (§ 23 п. 2.4)
    const n = nm[1].toLowerCase(), n0 = n[0], nYot = YOT.includes(n0), nV = isV(n0) && !nYot, nC = !isV(n0);
    // назва самої літери чи прийменника, а не вжиток: «Обери у чи в», «Після й і…», «з, із чи зі»
    const pw = (text.slice(0, m.index).match(/([\p{L}]+)[ ,]*$/u) || [])[1] || "";
    if (MENTION.test(n) || MENTION.test(pw) || MENTION_PREV.test(pw)) continue;
    const single = n.length === 1 || isV(n[1]) || "ь'’ʼ".includes(n[1]);
    let want = null, rule = null;
    const hit = (x, r) => { want = x; rule = r; };
    switch (w) {
      case "в":
        if (BEFORE_U.test(n)) hit("у", "§ 23 п. 1.5: перед в, ф, льв, св, тв, дв, гв, хв — «у»");
        else if (p === "C" && nC) hit("у", "§ 23 п. 1.1: між приголосними — «у»");
        else if (p === "P" && nC) hit("у", "§ 23 п. 1.6: після паузи перед приголосним — «у»");
        break;
      case "у":
        if (BEFORE_U.test(n)) break;
        if (nV && p === "V") hit("в", "§ 23 п. 2.1: між голосними — «в»");
        else if (nV && p === "S") hit("в", "§ 23 п. 2.2: на початку речення перед голосним — «в»");
        else if (nV && p === "C") hit("в", "§ 23 п. 2.3: після приголосного перед голосним — «в»");
        else if (nC && p === "V") hit("в", "§ 23 п. 2.6: після голосного перед приголосним — «в»");
        break;
      case "й":
        if (p === "S") hit("і", "§ 24 п. 1.3: на початку речення — «і»");
        else if (end && "йяюєї".includes(end)) hit("і", "§ 24 п. 4: після й, я, ю, є, ї — «і» або «та»");
        else if (nYot || n0 === "й") hit("і", "§ 24 п. 3.2: перед й, є, ї, ю, я — «і»");
        else if (p === "C" && nC) hit("і", "§ 24 п. 1.1: між приголосними — «і»");
        else if (p === "P" && nC) hit("і", "§ 24 п. 1.2: після паузи перед приголосним — «і»");
        break;
      case "і":
        if (p === "V" && !YOT.includes(end) && nV) hit("й", "§ 24 п. 2.1: між голосними — «й» (якщо це не зіставлення понять, § 24 п. 3.1)");
        break;
      case "з":
        if (n === "мною") hit("зі", "§ 25 п. 3: «зі (зо) мною»");
        else if (n0 === "щ" || (/^[зсш]/.test(n) && !single)) hit("зі", "§ 25 п. 2: перед збігом приголосних (з, с, ш, щ + приголосний) — «зі» (або «із»)");
        else if (/^[зсцжчш]/.test(n) && single && p !== "V") hit("із", "§ 25 п. 2: перед одиничними з, с, ц, ж, ч, ш — «із»");
        break;
      case "із": case "зі":
        if (nV || nYot) hit("з", "§ 25 п. 1.1: перед голосним — «з»");
        break;
    }
    if (want) out.push({ found: `${(text.slice(0, m.index).match(/[\p{L}\p{M}'’ʼ-]+[ ]?$/u) || [""])[0]}${raw} ${nm[1]}`, want: cap ? want[0].toUpperCase() + want.slice(1) : want, rule });
  }
  return out;
}
