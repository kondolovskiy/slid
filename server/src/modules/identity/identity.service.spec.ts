import { IdentityService } from './identity.service';
import { MemoryLearnerStore } from './learner.store';

describe('IdentityService', () => {
  let store: MemoryLearnerStore;
  let identity: IdentityService;
  beforeEach(() => {
    store = new MemoryLearnerStore();
    identity = new IdentityService(store);
  });

  it('реєструє анонімного учня й автентифікує його токеном', async () => {
    const { id, token } = await identity.register();
    expect(token.length).toBeGreaterThanOrEqual(40);
    await expect(identity.authenticate(token)).resolves.toBe(id);
  });

  it('не зберігає сирий токен', async () => {
    const { token } = await identity.register();
    expect(JSON.stringify([...store.rows])).not.toContain(token);
  });

  it('відкидає чужий, порожній і відсутній токен', async () => {
    await identity.register();
    await expect(identity.authenticate('nope')).resolves.toBeNull();
    await expect(identity.authenticate('')).resolves.toBeNull();
    await expect(identity.authenticate(undefined)).resolves.toBeNull();
  });

  it('видає різні токени різним учням', async () => {
    const a = await identity.register();
    const b = await identity.register();
    expect(a.id).not.toBe(b.id);
    expect(a.token).not.toBe(b.token);
  });
});
