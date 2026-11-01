import { Inject, Injectable } from '@nestjs/common';
import { Json, PROGRESS_STORE, ProgressDoc, ProgressStore } from './progress.store';

export type PutResult = { ok: true; doc: ProgressDoc } | { ok: false; doc: ProgressDoc };

/**
 * Прогрес — версійований документ учня (оптимістичне блокування).
 * Сервер не зливає стани: при конфлікті віддає поточну версію, клієнт зливає й повторює запис.
 * Логіка злиття живе поруч зі станом — у фронтенді (app/), де відома його семантика.
 */
@Injectable()
export class ProgressService {
  constructor(@Inject(PROGRESS_STORE) private readonly store: ProgressStore) {}

  get(learnerId: string) { return this.store.get(learnerId); }

  async put(learnerId: string, rev: number, data: Json): Promise<PutResult> {
    const { name, ...clean } = data; // імʼя дитини лишається на пристрої
    const next = await this.store.compareAndSet(learnerId, rev, clean);
    return next === null
      ? { ok: false, doc: await this.store.get(learnerId) }
      : { ok: true, doc: { rev: next, data: clean } };
  }
}
