import { Module } from '@nestjs/common';
import { IdentityController } from './identity.controller';
import { IDENTITY } from './identity.port';
import { IdentityService } from './identity.service';
import { LearnerGuard } from './learner.guard';
import { LEARNER_STORE, PgLearnerStore } from './learner.store';

@Module({
  controllers: [IdentityController],
  providers: [
    IdentityService,
    LearnerGuard,
    { provide: LEARNER_STORE, useClass: PgLearnerStore },
    { provide: IDENTITY, useExisting: IdentityService }, // in-process адаптер порту
  ],
  exports: [IDENTITY, LearnerGuard],
})
export class IdentityModule {}
