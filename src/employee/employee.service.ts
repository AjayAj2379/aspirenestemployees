import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";

import {Model} from "mongoose";
import {Employee, EmployeeDocument} from "../schemas/employee-schema";
import {EmployeeDTO} from "../models/employeedto";
import {UpdateEmployeeDTO} from "../models/employeeupdatedto";
import mongoose from 'mongoose';


@Injectable()
export class EmployeeService {

    constructor(
        @InjectModel(Employee.name) private readonly model: Model<EmployeeDocument>,

    ) {}
//select all
    async findAll(): Promise<Employee[]> {
        return await this.model.find().exec();
    }

    //select with where
    async findOne(employeeNo:string): Promise<Employee> {
       var id= new mongoose.Types.ObjectId(employeeNo)
        return await this.model.findById(id).exec();
        //return await this.model.find({employeeNo:employeeNo}).exec();
    }

    async findByName(firstName:string): Promise<Employee[]> {
       console.log(firstName);
        return await this.model.find({firstName:firstName}).exec();
    }
//insert query
    async create(employeeDTO: EmployeeDTO): Promise<Employee> {
        return await new this.model({
            ...employeeDTO,
            createdAt: new Date(),
        }).save();
    }
//update
    async update(employeeNo, updateEmployeeDto: UpdateEmployeeDTO): Promise<Employee> {
        var id= new mongoose.Types.ObjectId(employeeNo)
        return await this.model.findByIdAndUpdate(id, updateEmployeeDto).exec();
    }
//delete
    async delete(id: string): Promise<Employee> {
        var data= new mongoose.Types.ObjectId(id)
        return await this.model.findByIdAndDelete(data).exec();
    }
}
