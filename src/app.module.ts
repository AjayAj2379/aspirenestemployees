import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import {MongooseModule} from "@nestjs/mongoose";

import { TaskModule } from './task/task.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/employeemgmtdb'),TaskModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
