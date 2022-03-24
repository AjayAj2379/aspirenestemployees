import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Task, TaskSchema} from "../schemas/task-schema";
import {Employee, EmployeeSchema} from "../schemas/employee-schema";
import {EmployeeController} from "./employee.controller";
import {EmployeeService} from "./employee.service";
import {DateScalar} from "../../commons/date.scalar";
import {EmployeeResolver} from "../resolvers/employee-resolver";
import {EmployeesPubSubResolver} from "../resolvers/EmployeePubSubResolver";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService,DateScalar,EmployeeResolver,EmployeesPubSubResolver]
})
export class EmployeeModule {}
