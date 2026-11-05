# Слід · бекенд

NestJS + PostgreSQL, модульний моноліт. Архітектура й правила — [docs/BACKEND.md](../docs/BACKEND.md).

```bash
npm install
npm run check                                   # типи + модульні тести + межі модулів (без БД)
DATABASE_URL=postgres://… npm run test:e2e      # e2e на справжньому Postgres (обовʼязково)
npm run build && DATABASE_URL=… npm run migrate # міграції всіх модулів
DATABASE_URL=… PORT=3000 CORS_ORIGINS=https://… GOOGLE_CLIENT_ID=… GOOGLE_DOMAINS=school.ua ADMIN_TOKEN=… npm start
```

Локальний Postgres: `docker run -d -p 5432:5432 -e POSTGRES_USER=slid -e POSTGRES_PASSWORD=slid -e POSTGRES_DB=slid postgres:16`.
