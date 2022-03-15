import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {TaskService} from "./task.service";
import {Task} from "../models/task-entity";
import {ApiParam, ApiTags} from "@nestjs/swagger";
@ApiTags("tasks")
@Controller('tasks')
export class TaskController {
   //dependency injection
    constructor(private taskService:TaskService){

    }
    @Get("/")
    getTasks(): Task[]{
        return this.taskService.sendTasks();
    }

    @Get(':id')
    @ApiParam({name:'id',required:true,description:'positive number'})
    find(@Param('id') _taskId):Task {
        return this.taskService.findOne(_taskId);
    }
    @Get("/filter?")
    @ApiParam({name:'name',required:true,description:'only alphabets'})
    findQueryData(@Query('name') taskName):Task {
        console.log(taskName)
        return this.taskService.findName(taskName);
    }

    @Post()
    addTask(@Body() task:Task){
         this.taskService.addTask(task);
       }

}
