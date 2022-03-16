import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';


import {Employee} from "./employee-schema";
import Mongoose from "mongoose";




export type TaskDocument = Task & Document;

@Schema()
export class Task{


    @Prop()
    taskId: number;

    @Prop()
    taskName: string;

    @Prop()
    deadline: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
    employees:Employee[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
