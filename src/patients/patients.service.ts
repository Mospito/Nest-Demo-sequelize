/* eslint-disable prettier/prettier */


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { userInfo } from 'os';
import { CreatePatientsDto } from './dto/create-patients.dto';

import { Patient } from './patient.model';

@Injectable()
export class PatientsService {
    constructor(
        @InjectModel(Patient)
        private readonly patientModel: typeof Patient,
    ){}

    create(createPatientsDto: CreatePatientsDto): Promise<Patient>{

        const patient = new Patient();

        patient.firstName = createPatientsDto.firstName;
        patient.lastName = createPatientsDto.lastName;
        patient.BOD = createPatientsDto.BOD;
        patient.Age = createPatientsDto.Age;
        patient.Gender = createPatientsDto.Gender;
        patient.Telephone = createPatientsDto.Telephone;
        patient.DrugAllergy = createPatientsDto.DrugAllergy;
        patient.CongenitalDisease = createPatientsDto.CongenitalDisease;
        patient.Address = createPatientsDto.Address;
        patient.firstNameParent = createPatientsDto.firstNameParent;
        patient.lastNameParent = createPatientsDto.lastNameParent;
        patient.Relationship = createPatientsDto.Relationship;
        patient.NumOfTreatments = createPatientsDto.NumOfTreatments;

        return patient.save();

    }

    async findAll(): Promise<Patient[]>{
        return this.patientModel.findAll();
    }

    findOne(id: string): Promise<Patient>{
        return this.patientModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void>{
        const patient = await this.findOne(id);
        this.getDelete(id);
        await patient.destroy();
        
    }


    getDelete(id): string{
        return 'Delete Succerss!! ' + id;
    }

}
