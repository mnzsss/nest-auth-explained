import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PasswordProvider } from './providers/password';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [PrismaService, UsersService, PasswordProvider],
})
export class AppModule {}
