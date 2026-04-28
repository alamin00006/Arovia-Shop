import 'reflect-metadata';
import { createApp } from './app';

async function bootstrap() {
  const app = await createApp();
  const port = Number(process.env.PORT || 5000);
  await app.listen(port);
  console.log(`Server listening on ${port}`);
}

bootstrap();
