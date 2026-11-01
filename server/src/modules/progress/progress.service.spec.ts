import { ProgressService } from './progress.service';
import { MemoryProgressStore } from './progress.store';

describe('ProgressService', () => {
  const L = 'learner-1';
  let progress: ProgressService;
  beforeEach(() => { progress = new ProgressService(new MemoryProgressStore()); });

  it('новий учень має порожній прогрес з rev 0', async () => {
    await expect(progress.get(L)).resolves.toEqual({ rev: 0, data: null });
  });

  it('перший запис з rev 0 дає rev 1, далі rev зростає', async () => {
    await expect(progress.put(L, 0, { xp: 10 })).resolves.toEqual({ ok: true, doc: { rev: 1, data: { xp: 10 } } });
    await expect(progress.put(L, 1, { xp: 20 })).resolves.toEqual({ ok: true, doc: { rev: 2, data: { xp: 20 } } });
    await expect(progress.get(L)).resolves.toEqual({ rev: 2, data: { xp: 20 } });
  });

  it('застарілий rev — конфлікт з поточною версією, дані не перезаписано', async () => {
    await progress.put(L, 0, { xp: 10 });
    await expect(progress.put(L, 0, { xp: 99 })).resolves.toEqual({ ok: false, doc: { rev: 1, data: { xp: 10 } } });
    await expect(progress.put(L, 5, { xp: 99 })).resolves.toEqual({ ok: false, doc: { rev: 1, data: { xp: 10 } } });
    await expect(progress.get(L)).resolves.toEqual({ rev: 1, data: { xp: 10 } });
  });

  it('rev > 0 для учня без прогресу — конфлікт', async () => {
    await expect(progress.put(L, 3, { xp: 1 })).resolves.toEqual({ ok: false, doc: { rev: 0, data: null } });
  });

  it('не зберігає імʼя дитини (персональні дані)', async () => {
    const r = await progress.put(L, 0, { name: 'Оля', xp: 5 });
    expect(r.doc.data).toEqual({ xp: 5 });
  });

  it('прогрес учнів ізольований', async () => {
    await progress.put(L, 0, { xp: 10 });
    await expect(progress.get('learner-2')).resolves.toEqual({ rev: 0, data: null });
  });
});
