import { createApp } from './app';

createApp().then((app) => app.listen(Number(process.env.PORT ?? 3000)));
