import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {TaskService} from "./task.service";

import {ApiParam, ApiTags} from "@nestjs/swagger";
import {TaskDTO} from "../models/taskdto";
import {UpdateTaskDTO} from "../models/taskupdatedto";
@ApiTags("tasks")
@Controller('tasks')
export class TaskController {

constructor(private readonly taskService:TaskService) {
}

    @Get()
    async index() {
        return await this.taskService.findAll();
    }
    //@ApiParam({name:'ObjectId',required:true,description:'ID'})
    @Get(':id')
    async find(@Param('id') id:string) {
        return await this.taskService.findOne(id);
    }

    @Get('/filterByName/:taskName')
    async findByTaskName(@Param('taskName') taskName:string) {
    console.log(taskName);
     return await this.taskService.findByName(taskName);
    }
    @Post()
    //@UsePipes(new JoiValidationPipe(UserSchema))
    async create(@Body() taskDTO:TaskDTO) {
        //console.log(taskDTO);
        await this.taskService.create(taskDTO);
    }
   // @ApiParam({name:'ObjectId',required:true,description:'ID'})
    @Put(':id')
    async update(@Param('id') id:string, @Body() updateDTO: UpdateTaskDTO) {
        return await this.taskService.update(id, updateDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.taskService.delete(id);
    }


}
/*
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
    @ApiParam({name:'taskName',required:true,description:'only alphabets'})
    findQueryData(@Query('taskName') taskName){
        console.log(taskName)
        return this.taskService.findName(taskName);
    }

    @Post()
    addTask(@Body() taskv1:Task){
         this.taskService.addTask(taskv1);
       }
 */
