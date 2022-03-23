import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { EmployeeModel } from 'src/models/employee-model';
import { EmployeeService } from 'src/employee/employee.service';
import {EmployeeInput} from "../models/employee-input";

@Resolver(of =>EmployeeModel)
export class EmployeeResolver {
    constructor(
        @Inject(EmployeeService) private employeeService: EmployeeService,

    ) { }
    @Mutation(returns => EmployeeModel)
    async createEmployee(@Args('input') input: EmployeeInput): Promise<EmployeeModel> {
        return this.employeeService.create(input);
    }

    @Mutation(returns => EmployeeModel)
    async createArgsEmployee(@Args('employeeNo') employeeNo:number,@Args('firstName') firstName:string,
                             @Args('lastName') lastName:string,@Args('dob')dob:Date): Promise<EmployeeModel> {
        let employee:EmployeeInput={
            "employeeNo":employeeNo,
            "firstName":firstName,
            "lastName":lastName,
            "dob":dob
        }

        return this.employeeService.create(employee);
    }
    @Query(returns => EmployeeModel)
    async employee(@Args('employeeNo') employeeNo: string): Promise<EmployeeModel> {
        return await this.employeeService.findOne(employeeNo);
    }

    @Query(returns => [EmployeeModel])
    async employees(): Promise<EmployeeModel[]> {
        return await this.employeeService.findAll();
    }
}
