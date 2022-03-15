import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';

import {MongooseModule} from "@nestjs/mongoose";
import {TaskService} from "./task/task.service";
import {Task, TaskSchema} from "./schemas/task-schema";


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/employeedb'),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  controllers: [AppController, TaskController],
  providers: [AppService,TaskService],
})
export class AppModule {}
