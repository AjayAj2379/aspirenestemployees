import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {Task} from "../schemas/task-schema";
import {TaskDTO} from "./taskdto";

export class EmployeeDTO{
    @ApiProperty()
    employeeNo:number;
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    lastName:string;
    @ApiProperty()
    dob:Date;
  //  @ApiPropertyOptional({default: null, required: false})
    //@ApiProperty()
   // task:TaskDTO;
}
