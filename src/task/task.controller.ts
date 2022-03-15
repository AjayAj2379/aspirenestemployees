import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {TaskService} from "./task.service";
import {Task} from "../models/task-entity";

@Controller('task')
export class TaskController {
   //dependency injection
    constructor(private taskService:TaskService){

    }
    @Get("/")
    getTasks(): Task[]{
        return this.taskService.sendTasks();
    }

    @Get(':id')
    find(@Query('id') id):Task {
        return this.taskService.findOne(id);
    }
    @Get("/filter?")
    findQueryData(@Query('id') id: number):Task {
        console.log(id)
        return this.taskService.findOne(id);
    }

    @Post()
    addTask(@Body() task:Task){
         this.taskService.addTask(task);
       }

}
