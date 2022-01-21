import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

// Set prefix route for this group.
// Ex.: for get profile /users/8126321
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // Create user -> POST /users
  @Post()
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<User> {
    return this.usersService.createUser(userData);
  }

  // Get user Profile -> GET /users/:id
  @Get('/:id')
  async profile(@Param('id') id: number): Promise<User> {
    return this.usersService.user({ id: Number(id) });
  }
}
