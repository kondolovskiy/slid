import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { RATE_LIMIT_STORAGE, RateLimitStorage } from '../../ops';
import { GOOGLE_VERIFIER, GoogleAuthVerifier } from './google.verifier';
import { IdentityController } from './identity.controller';
import { IDENTITY } from './identity.port';
import { IDENTITY_OPTIONS, IdentityService } from './identity.service';
import { LearnerGuard } from './learner.guard';
import { LEARNER_STORE, PgLearnerStore } from './learner.store';

const list = (v: string | undefined) => (v ?? '').split(',').map((s) => s.trim()).filter(Boolean);

@Module({
  // Ліміт на IP: щедрий, бо клас школи виходить в інтернет з однієї адреси; код привʼязки — суворіше (контролер).
  // Сховище лічильників — порт RATE_LIMIT_STORAGE (src/ops): спільне сховище замість памʼяті процесу — заміна адаптера там.
  imports: [ThrottlerModule.forRootAsync({
    inject: [RATE_LIMIT_STORAGE],
    useFactory: (storage: RateLimitStorage) => ({ throttlers: [{ ttl: 60_000, limit: 120 }], storage }),
  })],
  controllers: [IdentityController],
  providers: [
    IdentityService,
    LearnerGuard,
    { provide: LEARNER_STORE, useClass: PgLearnerStore },
    { provide: GOOGLE_VERIFIER, useFactory: () => new GoogleAuthVerifier(process.env.GOOGLE_CLIENT_ID) },
    { provide: IDENTITY_OPTIONS, useFactory: () => ({ googleDomains: list(process.env.GOOGLE_DOMAINS) }) },
    { provide: IDENTITY, useExisting: IdentityService }, // in-process адаптер порту
  ],
  exports: [IDENTITY, LearnerGuard],
})
export class IdentityModule {}
