import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //dependency injection
  constructor(private readonly appService: AppService) {}

  @Get("/home")
  getEmployees(): string[] {
    return this.appService.fetchEmployees();
  }
}
