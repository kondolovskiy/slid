import { GoogleAccount, GoogleVerifier } from './google.verifier';
import { IdentityService, PAIRING_TTL_MS } from './identity.service';
import { MemoryLearnerStore } from './learner.store';

/** Фейк Google: id_token виду "sub@hd" або "sub@" (особистий акаунт без hd); інше — невалідний. */
const fakeGoogle: GoogleVerifier = {
  async verify(idToken) {
    const m = /^(\w+)@([\w.]*)$/.exec(idToken);
    return m ? ({ sub: m[1], hd: m[2] || undefined } as GoogleAccount) : null;
  },
};

describe('IdentityService', () => {
  let store: MemoryLearnerStore;
  let identity: IdentityService;
  beforeEach(() => {
    store = new MemoryLearnerStore();
    identity = new IdentityService(store, fakeGoogle, { googleDomains: ['school.ua'] });
  });

  describe('анонімний учень', () => {
    it('реєструється й автентифікується токеном', async () => {
      const { id, token } = await identity.register();
      expect(token.length).toBeGreaterThanOrEqual(40);
      await expect(identity.authenticate(token)).resolves.toBe(id);
    });

    it('сирий токен не зберігається', async () => {
      const { token } = await identity.register();
      expect(JSON.stringify(store.dump())).not.toContain(token);
    });

    it('чужий, порожній і відсутній токен — null', async () => {
      await identity.register();
      for (const t of ['nope', '', undefined]) await expect(identity.authenticate(t)).resolves.toBeNull();
    });

    it('різні учні — різні id і токени', async () => {
      const a = await identity.register();
      const b = await identity.register();
      expect(a.id).not.toBe(b.id);
      expect(a.token).not.toBe(b.token);
    });

    it('me: анонімний — без школи', async () => {
      const { id } = await identity.register();
      await expect(identity.me(id)).resolves.toEqual({ id, school: null });
    });
  });

  describe('вхід шкільним Google-акаунтом', () => {
    it('новий акаунт школи — новий учень; повторний вхід — той самий учень, новий токен', async () => {
      const first = await identity.signInWithGoogle('u1@school.ua');
      const second = await identity.signInWithGoogle('u1@school.ua');
      expect(second!.id).toBe(first!.id);
      expect(second!.token).not.toBe(first!.token);
      await expect(identity.authenticate(first!.token)).resolves.toBe(first!.id); // обидва пристрої працюють
      await expect(identity.authenticate(second!.token)).resolves.toBe(first!.id);
      await expect(identity.me(first!.id)).resolves.toEqual({ id: first!.id, school: 'school.ua' });
    });

    it('не зберігає email чи імʼя — лише sub і домен', async () => {
      await identity.signInWithGoogle('u1@school.ua');
      expect(JSON.stringify(store.dump())).not.toMatch(/@/);
    });

    it.each([
      ['особистий акаунт (без hd)', 'u1@'],
      ['чужий домен', 'u1@other.ua'],
      ['невалідний токен', '%%%'],
    ])('відмова: %s', async (_, idToken) => {
      await expect(identity.signInWithGoogle(idToken)).resolves.toBeNull();
    });

    it('анонімний учень на пристрої привʼязується до акаунта лише явно (link) — прогрес лишається той самий', async () => {
      const anon = await identity.register();
      const res = await identity.signInWithGoogle('u1@school.ua', anon.token, true);
      expect(res!.id).toBe(anon.id);
    });

    it('без явного link чужий токен на спільному ПК не привʼязується — новий учень', async () => {
      const anon = await identity.register();
      const res = await identity.signInWithGoogle('u1@school.ua', anon.token);
      expect(res!.id).not.toBe(anon.id);
      await expect(identity.me(anon.id)).resolves.toEqual({ id: anon.id, school: null });
    });

    it('домени порівнюються без урахування регістру', async () => {
      const mixed = new IdentityService(store, fakeGoogle, { googleDomains: ['School.UA'] });
      await expect(mixed.signInWithGoogle('u1@school.ua')).resolves.not.toBeNull();
    });

    it('акаунт уже має учня — повертаємо його, анонімного не чіпаємо', async () => {
      const owner = await identity.signInWithGoogle('u1@school.ua');
      const anon = await identity.register();
      const res = await identity.signInWithGoogle('u1@school.ua', anon.token, true);
      expect(res!.id).toBe(owner!.id);
      await expect(identity.me(anon.id)).resolves.toEqual({ id: anon.id, school: null });
    });

    it('учня з іншим акаунтом не перепривʼязуємо', async () => {
      const a = await identity.signInWithGoogle('u1@school.ua');
      const b = await identity.signInWithGoogle('u2@school.ua', a!.token, true);
      expect(b!.id).not.toBe(a!.id);
    });

    it('без дозволених доменів вхід вимкнено', async () => {
      const off = new IdentityService(store, fakeGoogle, { googleDomains: [] });
      await expect(off.signInWithGoogle('u1@school.ua')).resolves.toBeNull();
    });
  });

  describe('код привʼязки пристрою', () => {
    afterEach(() => jest.useRealTimers());

    it('код — 6 символів без схожих (0/O, 1/I/L); новий пристрій отримує того самого учня', async () => {
      const me = await identity.register();
      const { code, expiresAt } = await identity.createPairingCode(me.id);
      expect(code).toMatch(/^[A-HJKMNP-Z2-9]{6}$/);
      expect(new Date(expiresAt).getTime() - Date.now()).toBeGreaterThan(PAIRING_TTL_MS - 5000);
      const other = await identity.claimPairingCode(code);
      expect(other!.id).toBe(me.id);
      expect(other!.token).not.toBe(me.token);
      await expect(identity.authenticate(other!.token)).resolves.toBe(me.id);
    });

    it('код одноразовий', async () => {
      const { code } = await identity.createPairingCode((await identity.register()).id);
      await identity.claimPairingCode(code);
      await expect(identity.claimPairingCode(code)).resolves.toBeNull();
    });

    it('код можна вводити малими літерами, з пробілами й дефісом', async () => {
      const me = await identity.register();
      const { code } = await identity.createPairingCode(me.id);
      const typed = ` ${code.slice(0, 3).toLowerCase()}-${code.slice(3)} `;
      await expect(identity.claimPairingCode(typed)).resolves.toMatchObject({ id: me.id });
    });

    it('прострочений код не працює', async () => {
      jest.useFakeTimers({ doNotFake: ['nextTick', 'setImmediate', 'queueMicrotask'] });
      const { code } = await identity.createPairingCode((await identity.register()).id);
      jest.setSystemTime(Date.now() + PAIRING_TTL_MS + 1);
      await expect(identity.claimPairingCode(code)).resolves.toBeNull();
    });

    it('невідомий і порожній код — null', async () => {
      for (const c of ['ABCDEF', '', undefined]) await expect(identity.claimPairingCode(c)).resolves.toBeNull();
    });
  });
});
