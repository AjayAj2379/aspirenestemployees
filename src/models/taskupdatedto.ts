import {ApiProperty} from "@nestjs/swagger";
import { EmployeeDTO } from "./employeedto";

export class UpdateTaskDTO{
   // @ApiProperty()
    //task:string;
    @ApiProperty()
    //@ValidateNested({ each: true })
    //@Type(() => EmployeeDTO)
    employees:EmployeeDTO[];

}
