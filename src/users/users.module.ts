import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PasswordProvider } from 'src/providers/password';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [PasswordProvider, UsersService, PrismaService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
