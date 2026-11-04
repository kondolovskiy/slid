import { BadRequestException } from '@nestjs/common';
import { parseProgressInput, MAX_DEPTH, MAX_PROGRESS_BYTES, MAX_REV } from './progress.input';

/** n вкладених контейнерів: data = {a: {a: …}} або {a: [[…]]}. */
const nest = (n: number, arr = false) => {
  let v: unknown = arr ? [] : {};
  for (let i = 2; i < n; i++) v = arr ? [v] : { a: v };
  return { a: v };
};

describe('parseProgressInput', () => {
  it('приймає {rev, data}', () => {
    expect(parseProgressInput({ rev: 2, data: { xp: 1 } })).toEqual({ rev: 2, data: { xp: 1 } });
  });

  it.each([
    ['без тіла', undefined],
    ['rev не число', { rev: '1', data: {} }],
    ['rev від\'ємний', { rev: -1, data: {} }],
    ['rev дробовий', { rev: 1.5, data: {} }],
    ['data — масив', { rev: 0, data: [] }],
    ['data — null', { rev: 0, data: null }],
    ['data — рядок', { rev: 0, data: 'x' }],
    ['rev поза integer Postgres', { rev: 2147483647, data: {} }],
    ['rev 1e300', { rev: 1e300, data: {} }],
    ['\\u0000 у рядку (jsonb не приймає)', { rev: 0, data: { s: 'a\u0000b' } }],
    ['\\u0000 у ключі', { rev: 0, data: { ['a\u0000']: 1 } }],
  ])('відкидає: %s', (_, body) => {
    expect(() => parseProgressInput(body)).toThrow(BadRequestException);
  });

  it('приймає текст «\\u0000» з бекслешем і вкладені обʼєкти', () => {
    expect(parseProgressInput({ rev: 0, data: { s: '\\u0000', a: [{ b: 'ok' }] } }).data).toEqual({ s: '\\u0000', a: [{ b: 'ok' }] });
  });

  it('відкидає \\u0000 глибоко у вкладеному масиві', () => {
    expect(() => parseProgressInput({ rev: 0, data: { a: [{ b: 'x\u0000' }] } })).toThrow(BadRequestException);
  });

  it('приймає найбільший допустимий rev', () => {
    expect(parseProgressInput({ rev: MAX_REV, data: {} }).rev).toBe(MAX_REV);
  });

  it('відкидає завеликий прогрес', () => {
    const data = { blob: 'x'.repeat(MAX_PROGRESS_BYTES) };
    expect(() => parseProgressInput({ rev: 0, data })).toThrow(BadRequestException);
  });

  it('приймає вкладеність до MAX_DEPTH', () => {
    expect(MAX_DEPTH).toBeGreaterThanOrEqual(32);
    expect(() => parseProgressInput({ rev: 0, data: nest(MAX_DEPTH) })).not.toThrow();
    expect(() => parseProgressInput({ rev: 0, data: nest(MAX_DEPTH, true) })).not.toThrow();
  });

  it.each([
    ['обʼєкти, MAX_DEPTH + 1', () => nest(MAX_DEPTH + 1)],
    ['масиви, MAX_DEPTH + 1', () => nest(MAX_DEPTH + 1, true)],
    ['масиви, 100 000 (стек)', () => nest(100_000, true)],
    ['обʼєкти, 100 000 (стек)', () => nest(100_000)],
  ])('відкидає глибоку вкладеність як 400, а не переповнення стека: %s', (_, data) => {
    expect(() => parseProgressInput({ rev: 0, data: data() })).toThrow(BadRequestException);
  });
});
