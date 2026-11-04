import { BadRequestException } from '@nestjs/common';
import { Json } from './progress.store';

export const MAX_PROGRESS_BYTES = 256 * 1024;
/** rev — integer Postgres (≤ 2^31 − 1), а сервер записує rev + 1. */
export const MAX_REV = 2 ** 31 - 2;

/** Стан slid.v1 вкладений на кілька рівнів; без межі рекурсивні обходи переповнюють стек (→ 500). */
export const MAX_DEPTH = 64;

export function parseProgressInput(body: unknown): { rev: number; data: Json } {
  const { rev, data } = (body ?? {}) as { rev?: unknown; data?: unknown };
  if (!Number.isInteger(rev) || (rev as number) < 0 || (rev as number) > MAX_REV) throw new BadRequestException(`rev: ціле 0…${MAX_REV}`);
  if (typeof data !== 'object' || data === null || Array.isArray(data)) throw new BadRequestException('data: обʼєкт');
  checkTree(data, 1); // до JSON.stringify: той теж рекурсивний
  if (Buffer.byteLength(JSON.stringify(data)) > MAX_PROGRESS_BYTES) throw new BadRequestException('data: завеликий');
  return { rev: rev as number, data: data as Json };
}

/** Вкладеність ≤ MAX_DEPTH і жодного U+0000: Postgres jsonb не приймає його ні в ключах, ні в рядках. */
function checkTree(v: unknown, depth: number): void {
  if (typeof v === 'string') {
    if (v.includes('\0')) throw new BadRequestException('data: символ \\u0000 не підтримується');
    return;
  }
  if (typeof v !== 'object' || v === null) return;
  if (depth > MAX_DEPTH) throw new BadRequestException(`data: вкладеність понад ${MAX_DEPTH}`);
  for (const [k, x] of Object.entries(v)) {
    checkTree(k, depth);
    checkTree(x, depth + 1);
  }
}
