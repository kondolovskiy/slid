import { Inject, Injectable } from '@nestjs/common';
import { sql } from 'kysely';
import { DB, Db } from '../../db/database';

export type Json = Record<string, unknown>;
export interface ProgressDoc { rev: number; data: Json | null }

export const PROGRESS_STORE = Symbol('ProgressStore');
export interface ProgressStore {
  get(learnerId: string): Promise<ProgressDoc>;
  /** Атомарно записує, якщо поточна версія = rev; повертає нову версію або null (конфлікт). */
  compareAndSet(learnerId: string, rev: number, data: Json): Promise<number | null>;
}

const EMPTY: ProgressDoc = { rev: 0, data: null };

@Injectable()
export class PgProgressStore implements ProgressStore {
  constructor(@Inject(DB) private readonly db: Db) {}
  private get t() { return this.db.withSchema('progress'); }

  async get(learnerId: string) {
    const row = await this.t.selectFrom('docs').select(['rev', 'data']).where('learner_id', '=', learnerId).executeTakeFirst();
    return row ? { rev: row.rev, data: row.data } : EMPTY;
  }

  async compareAndSet(learnerId: string, rev: number, data: Json) {
    const json = JSON.stringify(data);
    const row = rev === 0
      ? await this.t.insertInto('docs').values({ learner_id: learnerId, rev: 1, data: json })
          .onConflict((oc) => oc.column('learner_id').doNothing()).returning('rev').executeTakeFirst()
      : await this.t.updateTable('docs').set({ rev: rev + 1, data: json, updated_at: sql`now()` })
          .where('learner_id', '=', learnerId).where('rev', '=', rev).returning('rev').executeTakeFirst();
    return row?.rev ?? null;
  }
}

export class MemoryProgressStore implements ProgressStore {
  private readonly docs = new Map<string, ProgressDoc>();
  async get(learnerId: string) { return this.docs.get(learnerId) ?? EMPTY; }
  async compareAndSet(learnerId: string, rev: number, data: Json) {
    if ((await this.get(learnerId)).rev !== rev) return null;
    this.docs.set(learnerId, { rev: rev + 1, data: structuredClone(data) });
    return rev + 1;
  }
}
