import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { PgProgressStore, PROGRESS_STORE } from './progress.store';

@Module({
  imports: [IdentityModule],
  controllers: [ProgressController],
  providers: [ProgressService, { provide: PROGRESS_STORE, useClass: PgProgressStore }],
})
export class ProgressModule {}
