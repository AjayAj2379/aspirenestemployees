import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Task, TaskSchema} from "../schemas/task-schema";
import {TaskController} from "./task.controller";
import {TaskService} from "./task.service";
import {Employee, EmployeeSchema} from "../schemas/employee-schema";
import {DateScalar} from "../../commons/date.scalar";
import {TaskResolver} from "../resolvers/task-resolver";
import {EmployeeModel} from "../models/employee-model";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
        ],
    controllers:[TaskController],
    providers:[TaskService,DateScalar,TaskResolver]
})
export class TaskModule {


}
