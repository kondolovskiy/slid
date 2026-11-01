import { BadRequestException } from '@nestjs/common';
import { parseProgressInput, MAX_PROGRESS_BYTES } from './progress.input';

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
  ])('відкидає: %s', (_, body) => {
    expect(() => parseProgressInput(body)).toThrow(BadRequestException);
  });

  it('відкидає завеликий прогрес', () => {
    const data = { blob: 'x'.repeat(MAX_PROGRESS_BYTES) };
    expect(() => parseProgressInput({ rev: 0, data })).toThrow(BadRequestException);
  });
});
