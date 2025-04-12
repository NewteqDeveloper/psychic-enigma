import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NEST_PORT ?? 3000);
}

bootstrap().catch((err) => {
  console.error('Error bootstrapping app', err);
});
