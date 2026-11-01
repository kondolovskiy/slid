import { BadRequestException } from '@nestjs/common';
import { Json } from './progress.store';

export const MAX_PROGRESS_BYTES = 256 * 1024;
/** rev — integer Postgres (≤ 2^31 − 1), а сервер записує rev + 1. */
export const MAX_REV = 2 ** 31 - 2;

export function parseProgressInput(body: unknown): { rev: number; data: Json } {
  const { rev, data } = (body ?? {}) as { rev?: unknown; data?: unknown };
  if (!Number.isInteger(rev) || (rev as number) < 0 || (rev as number) > MAX_REV) throw new BadRequestException(`rev: ціле 0…${MAX_REV}`);
  if (typeof data !== 'object' || data === null || Array.isArray(data)) throw new BadRequestException('data: обʼєкт');
  const json = JSON.stringify(data);
  if (Buffer.byteLength(json) > MAX_PROGRESS_BYTES) throw new BadRequestException('data: завеликий');
  if (hasNul(data)) throw new BadRequestException('data: символ \\u0000 не підтримується');
  return { rev: rev as number, data: data as Json };
}

/** Postgres jsonb не приймає символ U+0000 ні в ключах, ні в рядках. */
const hasNul = (v: unknown): boolean =>
  typeof v === 'string' ? v.includes('\0')
    : typeof v === 'object' && v !== null && Object.entries(v).some(([k, x]) => k.includes('\0') || hasNul(x));
