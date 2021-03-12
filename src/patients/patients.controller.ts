/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PatientsService } from './patients.service';
import { CreatePatientsDto } from './dto/create-patients.dto';
import { Patient } from "./patient.model";

@Controller('patients')
export class PatientsController {

    constructor(private readonly patientsService: PatientsService ){}

    @Post()
    create(@Body() createPatientsDto: CreatePatientsDto): Promise<Patient>{
        return this.patientsService.create(createPatientsDto);
    }


    @Get()
    findAll(): Promise<Patient[]>{

        return this.patientsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Patient>{
        return this.patientsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void>{
        return this.patientsService.remove(id);
    }
}


