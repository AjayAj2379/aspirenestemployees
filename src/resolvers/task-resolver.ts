import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import {TaskModel} from "../models/task-model";
import { TaskService } from 'src/task/task.service';


@Resolver(of =>TaskModel)
export class TaskResolver {
    constructor(
        @Inject(TaskService) private taskService: TaskService,

    ) { }


    @Query(returns => TaskModel)
    async task(@Args('taskId') taskId: string): Promise<TaskModel> {
        return await this.taskService.findOne(taskId);
    }

    @Query(returns => [TaskModel])
    async tasks(): Promise<TaskModel[]> {
        return await this.taskService.findAll();
    }
}
