import {ApiProperty} from "@nestjs/swagger";

export class UpdateEmployeeDTO{
    @ApiProperty()
    firstName:string;

}
