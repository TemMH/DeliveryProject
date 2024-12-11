import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD:back/auth-service/src/main.ts
  await app.listen(3002);
=======
  await app.listen(3000);
>>>>>>> main:src/back/auth-service/src/main.ts
}
bootstrap();
