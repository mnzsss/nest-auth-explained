import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

@Injectable()
export class PasswordProvider {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, SALT_OR_ROUNDS);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash);
  }
}
