import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import {Employee} from "../schemas/employee-schema";
import {EmployeeModel} from "./employee-model";

@ObjectType()
@Entity()
export class TaskModel {
    @Field()
        // @PrimaryGeneratedColumn("identity")
    taskId: number;
    @Field()
    @Column({ length: 100, nullable: false })
    taskName: string;

    @Field()
    @Column()
    deadline: Date;
    @Field(() => [EmployeeModel])
    @Column()
    employees: EmployeeModel[];

}
