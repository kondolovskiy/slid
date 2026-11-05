import { RateLimitStorage, MemoryRateLimitStorage } from './rate-limit';

/**
 * Контракт порту сховища лімітів (той самий, що ThrottlerStorage з @nestjs/throttler).
 * Майбутній спільний адаптер (Postgres чи Redis) проганяє цей самий набір — e2e на справжньому сховищі.
 */
export function rateLimitStorageContract(name: string, make: () => RateLimitStorage) {
  describe(`${name}: контракт сховища лімітів`, () => {
    const TTL = 60_000;
    let storage: RateLimitStorage;
    beforeEach(() => { jest.useFakeTimers({ now: 1_000_000 }); storage = make(); });
    afterEach(() => jest.useRealTimers());

    it('рахує звернення за ключем; понад ліміт — блок', async () => {
      for (let i = 1; i <= 3; i++) expect(await storage.increment('k', TTL, 3, TTL, 'default')).toMatchObject({ totalHits: i, isBlocked: false });
      expect(await storage.increment('k', TTL, 3, TTL, 'default')).toMatchObject({ isBlocked: true });
    });

    // ThrottlerGuard вкладає в ключ і клас/обробник, і IP, і назву ліміту — тож незалежність = незалежність ключів.
    it('ключі незалежні', async () => {
      for (let i = 0; i < 4; i++) await storage.increment('a', TTL, 3, TTL, 'default');
      expect(await storage.increment('b', TTL, 3, TTL, 'default')).toMatchObject({ totalHits: 1, isBlocked: false });
    });

    it('після вікна й блоку — знову дозволено', async () => {
      for (let i = 0; i < 4; i++) await storage.increment('k', TTL, 3, TTL, 'default');
      jest.advanceTimersByTime(TTL + 1);
      expect(await storage.increment('k', TTL, 3, TTL, 'default')).toMatchObject({ isBlocked: false });
    });
  });
}

rateLimitStorageContract('MemoryRateLimitStorage', () => new MemoryRateLimitStorage());
