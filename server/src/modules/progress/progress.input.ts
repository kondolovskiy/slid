import { BadRequestException } from '@nestjs/common';
import { Json } from './progress.store';

export const MAX_PROGRESS_BYTES = 256 * 1024;

export function parseProgressInput(body: unknown): { rev: number; data: Json } {
  const { rev, data } = (body ?? {}) as { rev?: unknown; data?: unknown };
  if (!Number.isInteger(rev) || (rev as number) < 0) throw new BadRequestException('rev: ціле число ≥ 0');
  if (typeof data !== 'object' || data === null || Array.isArray(data)) throw new BadRequestException('data: обʼєкт');
  if (Buffer.byteLength(JSON.stringify(data)) > MAX_PROGRESS_BYTES) throw new BadRequestException('data: завеликий');
  return { rev: rev as number, data: data as Json };
}
