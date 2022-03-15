import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/employeedb')],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
