import {Args, Context, Mutation, Resolver, Subscription} from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '../pubSub/pubSub.module';
import {EmployeeModel} from "../models/employee-model";
import {EmployeeService} from "../employee/employee.service";
import {EmployeeInput} from "../models/employee-input";
import {EmployeeDTO} from "../models/employeedto";

const Employee_ADDED_EVENT = 'employeeAdded';

@Resolver(() =>EmployeeModel)
export class EmployeesPubSubResolver {
    constructor(
        private employeeService:EmployeeService,
        @Inject(PUB_SUB) private pubSub: RedisPubSub
    ) {}

   // @Subscription(() => EmployeeModel)
    @Subscription((returns) => EmployeeModel)
    employeeAdded() {
        return this.pubSub.asyncIterator(Employee_ADDED_EVENT);
    }

    @Mutation(() => EmployeeModel)
   // @UseGuards(GraphqlJwtAuthGuard)
    async createEmployee(
        @Args('input') employeeInput: EmployeeInput,
        @Context() context: { req:EmployeeInput },
    ) {
        const newEmployee = await this.employeeService.create(employeeInput);
        this.pubSub.publish(Employee_ADDED_EVENT, { employeeAdded: newEmployee });
        return newEmployee;
    }
}
