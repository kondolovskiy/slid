import { readdirSync, readFileSync, statSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';

// Межі модулів: модуль (і решта коду) бачить модуль лише через його index.ts (публічний API: модуль + порти + міграції),
// а SQL пише лише у власну схему Postgres. Так модуль можна винести в сервіс разом зі схемою, замінивши адаптер порту.
const SRC = join(__dirname, '..', 'src');
const MODULES = join(SRC, 'modules');
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? files(join(dir, f)) : [join(dir, f)]));
const moduleOf = (p: string) => relative(MODULES, p).split(sep); // ['..', …] — поза modules/

/** Усі відносні специфікатори: import … from, import '…', export … from, import(…), require(…); будь-які лапки. */
export const relativeImports = (code: string) =>
  [...code.matchAll(/(?:\bfrom|\bimport|\brequire)\s*\(?\s*(['"`])(\.[^'"`]*)\1/g)].map((m) => m[2]);

/** Аргументи withSchema(…) як написано в коді: дозволено лише рядковий літерал (змінну тест перевірити не може). */
export const withSchemaArgs = (code: string) => [...code.matchAll(/withSchema\(\s*([^)]*?)\s*\)/g)].map((m) => m[1]);
const literal = (arg: string) => /^(['"`])([a-z_]\w*)\1$/.exec(arg)?.[2];

/**
 * Код без коментарів `//…` і `/*…*\/` (рядки й шаблони лишаються як є). Інакше непарний апостроф у коментарі
 * (`// don't`, `// п'ять`) зсуває пари лапок, і рядки після нього перевірка не бачить (рев'ю server-hardening P2-1).
 * Обмеження: регулярний вираз-літерал з лапкою чи `//` і вкладені шаблони в `${…}` не розбираються — у коді модулів їх немає.
 */
export const stripComments = (code: string) => {
  let out = '';
  for (let i = 0; i < code.length;) {
    const c = code[i];
    if (c === "'" || c === '"' || c === '`') {
      let j = i + 1;
      while (j < code.length && code[j] !== c) j += code[j] === '\\' ? 2 : 1;
      out += code.slice(i, j + 1);
      i = j + 1;
    } else if (code.startsWith('//', i)) {
      const end = code.indexOf('\n', i);
      i = end < 0 ? code.length : end;
    } else if (code.startsWith('/*', i)) {
      const end = code.indexOf('*/', i + 2);
      out += ' ';
      i = end < 0 ? code.length : end + 2;
    } else {
      out += c;
      i++;
    }
  }
  return out;
};

/**
 * Схеми, названі в рядках коду у формі «схема.обʼєкт» (selectFrom('identity.learners'), references('x.y.id'),
 * сирий sql`… from identity.learners …`, `"identity"."learners"` тощо). Шукаємо лише імена схем модулів, щоб не плутати з 'таблиця.колонка'.
 */
export const schemaRefs = (code: string, schemas: string[]) => {
  const strings = [...stripComments(code).matchAll(/(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g)].map((m) => m[2]);
  // Квотовані ідентифікатори теж: sql`… from "identity"."learners"` (P3-1).
  const re = new RegExp(`(?<![\\w.])"?(${schemas.join('|')})"?\\."?[a-z_]\\w*`, 'g');
  return strings.flatMap((s) => [...s.matchAll(re)].map((m) => m[1]));
};

describe('межі модулів', () => {
  const sources = files(SRC).filter((f) => f.endsWith('.ts'));

  it('знаходить модулі й файли (не порожній прогін)', () => {
    expect(readdirSync(MODULES).length).toBeGreaterThanOrEqual(2);
    expect(sources.length).toBeGreaterThanOrEqual(10);
  });

  it('розпізнає всі форми імпорту', () => {
    const code = `import a from "../x/a"; import '../x/b'; export * from '../x/c'; const d = require('../x/d'); await import(\`../x/e\`);`;
    expect(relativeImports(code)).toEqual(['../x/a', '../x/b', '../x/c', '../x/d', '../x/e']);
  });

  it.each(sources.map((f) => [relative(SRC, f), f]))('%s імпортує чужі модулі лише через index', (_, file) => {
    const [own] = moduleOf(file);
    for (const spec of relativeImports(readFileSync(file, 'utf8'))) {
      const [mod, ...rest] = moduleOf(resolve(dirname(file), spec));
      if (mod === '..' || mod === own) continue;
      expect(`${spec} → ${rest.join('/') || 'index'}`).toMatch(/→ index$/);
    }
  });

  const modules = readdirSync(MODULES);

  it('коментарі з непарним апострофом не ховають звернення до схем (P2-1)', () => {
    const code = `// don't touch\n/* п'ять */ db.selectFrom('identity.learners'); const u = 'http://x/y'; // it's\n'progress.docs'`;
    expect(stripComments(code)).toBe(`\n  db.selectFrom('identity.learners'); const u = 'http://x/y'; \n'progress.docs'`);
    expect(schemaRefs(code, modules)).toEqual(['identity', 'progress']);
    expect(schemaRefs("const s = `a // b ${x} /* c */`; f('identity.learners')", modules)).toEqual(['identity']);
  });

  it('квотовані ідентифікатори в сирому SQL (P3-1)', () => {
    const code = 'sql`select * from "identity"."learners" join identity."tokens" on true`; sql`from "progress".docs`; \'"x"."identity"\'';
    expect(schemaRefs(code, modules)).toEqual(['identity', 'identity', 'progress']);
  });

  it('розпізнає звернення до схем і форми withSchema', () => {
    const code = `db.selectFrom('identity.learners'); t.insertInto("progress.docs"); x.innerJoin(\`identity.tokens as t\`, 't.id', 'docs.id');
      c.references('identity.learners.id'); sql\`select * from identity.learners\`; db.withSchema(SCHEMA); db.withSchema('identity');
      selectFrom('docs.id'); const identity = { learners: 1 }; identity.learners; 'myidentity.x'`;
    expect(schemaRefs(code, modules)).toEqual(['identity', 'progress', 'identity', 'identity', 'identity']);
    expect(withSchemaArgs(code).map(literal)).toEqual([undefined, 'identity']);
  });

  it.each(sources.filter((f) => moduleOf(f)[0] !== '..').map((f) => [relative(SRC, f), f]))(
    '%s пише SQL лише у схему свого модуля', (_, file) => {
      const [own] = moduleOf(file);
      const code = stripComments(readFileSync(file, 'utf8'));
      for (const arg of withSchemaArgs(code)) expect(`withSchema(${arg}) → ${literal(arg)}`).toBe(`withSchema(${arg}) → ${own}`);
      for (const schema of schemaRefs(code, modules)) expect(`${schema}.…`).toBe(`${own}.…`);
    });
});
