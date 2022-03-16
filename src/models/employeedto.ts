import {ApiProperty} from "@nestjs/swagger";

export class EmployeeDTO{
    @ApiProperty()
    employeeNo:number;
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    lastName:string;
    @ApiProperty()
    dob:Date;
}
