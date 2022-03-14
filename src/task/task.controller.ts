import {Body, Controller, Get, Post} from '@nestjs/common';
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
    @Post()
    addTask(@Body() task:Task){
         this.taskService.addTask(task);
       }

}
