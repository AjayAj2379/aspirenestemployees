import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class EmployeeInput {
    @Field()
    readonly employeeNo: number;
    @Field()
    readonly firstName: string;
    @Field()
    readonly lastName: string;
    @Field()
    readonly dob: Date
}
