/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient.model';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';


@Module({
    imports: [SequelizeModule.forFeature([Patient])],
    providers: [PatientsService],
    controllers: [PatientsController],
})
export class PatientsModule{}