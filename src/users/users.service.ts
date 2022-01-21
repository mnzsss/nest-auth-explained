import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { PasswordProvider } from 'src/providers/password';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordProvider: PasswordProvider,
  ) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });

    delete user.password;

    return user;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const passwordHashed = await this.passwordProvider.hashPassword(
      data.password,
    );

    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: passwordHashed,
      },
    });

    delete user.password;

    return user;
  }
}
