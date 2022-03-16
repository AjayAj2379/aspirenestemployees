import {ApiProperty, ApiResponseProperty} from "@nestjs/swagger";
import * as Mongoose from "mongoose";
import {EmployeeDTO} from "./employeedto";
import {ValidateNested} from "class-validator";
import {Type} from "class-transformer";





export class TaskDTO{
    @ApiProperty()
    taskId:number;
    @ApiProperty()
    taskName:string;
    @ApiProperty()
    deadline:Date;
    @ApiProperty()
    //@ValidateNested({ each: true })
    //@Type(() => EmployeeDTO)
    employees:EmployeeDTO[];
}
