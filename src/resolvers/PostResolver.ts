import { Resolver, Subscription } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '../pubSub/pubSub.module';
import {EmployeeModel} from "../models/employee-model";
import {EmployeeService} from "../employee/employee.service";

const Employee_ADDED_EVENT = 'employeeAdded';

@Resolver(() => EmployeeModel)
export class EmployeesResolver {
    constructor(
        private employeeService:EmployeeService,
        @Inject(PUB_SUB) private pubSub: RedisPubSub
    ) {}

    @Subscription(() => EmployeeModel)
    postAdded() {
        return this.pubSub.asyncIterator(Employee_ADDED_EVENT);
    }

    // ...
}
