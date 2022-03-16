import { Module } from '@nestjs/common';


import {MongooseModule} from "@nestjs/mongoose";

import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { EmployeeModule } from './employee/employee.module';
import { GraphqlModule } from './graphql/graphql.module';
import { TaskModule } from './task/task.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/employeemgmtdb'), TaskModule,EmployeeModule,GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
