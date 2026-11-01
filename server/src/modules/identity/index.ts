// Публічний API модуля identity. Інші модулі імпортують лише звідси (test/architecture.spec.ts).
export { IdentityModule } from './identity.module';
export { IDENTITY, IdentityPort } from './identity.port';
export { LearnerGuard, LearnerId } from './learner.guard';
export { identityMigrations } from './migrations';
