/** Публічний контракт модуля identity. Споживачі залежать лише від нього; адаптер — in-process або HTTP/gRPC-клієнт. */
export const IDENTITY = Symbol('IdentityPort');
export interface IdentityPort {
  /** id учня за токеном або null. */
  authenticate(token: string | undefined): Promise<string | null>;
}
