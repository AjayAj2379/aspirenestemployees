import {ApiProperty} from "@nestjs/swagger";

export class TaskDTO{
    @ApiProperty()
    taskId:number;
    @ApiProperty()
    taskName:string;
    @ApiProperty()
    deadline:Date;
}
