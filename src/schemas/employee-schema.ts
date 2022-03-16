import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {Task} from "./task-schema";

export type EmployeeDocument = Employee & Document;



@Schema()
export class Employee{
    //  @Prop({ required: true })


    @Prop()
    employeeNo: number;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    dob: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
