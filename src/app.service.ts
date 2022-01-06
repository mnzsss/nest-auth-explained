import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Default service that return a Hello World string
  getHello(): string {
    return 'Hello World!';
  }
}
