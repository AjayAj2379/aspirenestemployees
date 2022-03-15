import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";

import { Model } from 'mongoose';
import {Task, TaskDocument} from "../schemas/task-schema";
import {TaskDTO} from "../models/taskdto";
import {UpdateTaskDTO} from "../models/taskupdatedto";


@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name) private readonly model: Model<TaskDocument>,
    ) {}
//select all
    async findAll(): Promise<Task[]> {
        return await this.model.find().exec();
    }

    //select with where
    async findOne(taskId: number): Promise<Task> {
        return await this.model.findById(taskId).exec();
    }
//insert query
    async create(taskDTO: TaskDTO): Promise<Task> {
        return await new this.model({
            ...taskDTO,
            createdAt: new Date(),
        }).save();
    }
//update
    async update(taskId: number, updateTaskDto: UpdateTaskDTO): Promise<Task> {
        return await this.model.findByIdAndUpdate(taskId, updateTaskDto).exec();
    }
//delete
    async delete(taskId: number): Promise<Task> {
        return await this.model.findByIdAndDelete(taskId).exec();
    }


}
