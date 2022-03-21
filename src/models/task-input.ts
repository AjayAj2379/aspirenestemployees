import { InputType, Field, Int } from '@nestjs/graphql';
import {EmployeeInput} from "./employee-input";

@InputType()
export class TaskInput {
    @Field()
    readonly taskId: number;
    @Field()
    readonly taskName: string;
    @Field()
    readonly deadline: Date;
    @Field(returns => [EmployeeInput])
    readonly employees: [EmployeeInput];
}
