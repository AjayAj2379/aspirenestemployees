import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { EmployeeModel } from 'src/models/employee-model';
import { EmployeeService } from 'src/employee/employee.service';

@Resolver(of =>EmployeeModel)
export class EmployeeResolver {
    constructor(
        @Inject(EmployeeService) private employeeService: EmployeeService,

    ) { }
    @Query(returns => EmployeeModel)
    async employee(@Args('employeeNo') employeeNo: string): Promise<EmployeeModel> {
        return await this.employeeService.findOne(employeeNo);
    }

    @Query(returns => [EmployeeModel])
    async employees(): Promise<EmployeeModel[]> {
        return await this.employeeService.findAll();
    }
}
