import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    // Fastify adapter for use Fastify ecosystem along with the NestJs
    new FastifyAdapter({
      // Enable logger in terminal always that you send request
      logger: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
