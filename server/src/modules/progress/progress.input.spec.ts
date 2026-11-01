import { BadRequestException } from '@nestjs/common';
import { parseProgressInput, MAX_PROGRESS_BYTES, MAX_REV } from './progress.input';

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
});
