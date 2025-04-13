import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './auth/guards/jwt.guard';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const jwtGuard = app.get(JwtGuard);
  app.useGlobalGuards(jwtGuard);

  await app.listen(process.env.NEST_PORT ?? 3000);
}

bootstrap().catch((err) => {
  console.error('Error bootstrapping app', err);
});
