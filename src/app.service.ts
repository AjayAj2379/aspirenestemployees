import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  employees:string[]=["Chris","Ali","Dheeraj"]

  fetchEmployees(): string[] {
    return this.employees;
  }
}
