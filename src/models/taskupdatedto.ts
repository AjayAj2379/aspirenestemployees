import {ApiProperty} from "@nestjs/swagger";

export class UpdateTaskDTO{
    @ApiProperty()
    taskName:string;
}
