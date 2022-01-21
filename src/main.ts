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

  // For use Docker you need set 0.0.0.0 for access app from others apps
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
