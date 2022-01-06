import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// By default this route run in /
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Default route for run the app service
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
