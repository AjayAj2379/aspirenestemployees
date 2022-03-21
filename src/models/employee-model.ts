import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import {TaskModel} from "./task-model";

@ObjectType()
@Entity()
export class EmployeeModel {


    @Field()
   // @PrimaryGeneratedColumn("identity")
    employeeNo: number;
    @Field()
    @Column({ length: 100, nullable: false })
    firstName: string;
    @Field()
    @Column({ length: 100, nullable: false })
    lastName: string;
    @Field()
    @Column()
    dob: Date;
  //  @Field()
  //  @Column()
    //task:TaskModel;
}
