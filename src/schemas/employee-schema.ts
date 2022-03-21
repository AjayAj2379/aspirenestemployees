import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
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

    @Prop( {type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
    task:Task;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
