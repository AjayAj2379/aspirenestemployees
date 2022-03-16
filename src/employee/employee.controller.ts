import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {EmployeeService} from "./employee.service";
import {EmployeeDTO} from "../models/employeedto";
import {UpdateEmployeeDTO} from "../models/employeeupdatedto";


@Controller('employee')
export class EmployeeController {


    constructor(private readonly employeeService:EmployeeService) {
    }

    @Get()
    async index() {
        return await this.employeeService.findAll();
    }
    //@ApiParam({name:'ObjectId',required:true,description:'ID'})
    @Get(':employeeNo')
    async find(@Param('employeeNo') employeeNo:string) {
        return await this.employeeService.findOne(employeeNo);
    }

    @Get('/filterByName/:firstName')
    async findByFirstName(@Param('firstName') firstName:string) {
        console.log(firstName);
        return await this.employeeService.findByName(firstName);
    }
    @Post()
    //@UsePipes(new JoiValidationPipe(UserSchema))
    async create(@Body() employeeDTO:EmployeeDTO) {
        console.log(employeeDTO);
        return await this.employeeService.create(employeeDTO);
    }
    // @ApiParam({name:'ObjectId',required:true,description:'ID'})
    @Put(':employeeNo')
    async update(@Param('employeeNo') employeeNo:string, @Body() updateDTO: UpdateEmployeeDTO) {
        return await this.employeeService.update(employeeNo, updateDTO);
    }

    @Delete(':employeeNo')
    async delete(@Param('employeeNo') employeeNo: string) {
        return await this.employeeService.delete(employeeNo);
    }
}
