/* eslint-disable prettier/prettier */

import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';
import { Col } from 'sequelize/types/lib/utils';

@Table( {timestamps: false, paranoid: false})
export class Patient extends Model<Patient>{


    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    BOD: Date;

    @Column
    Age: number;

    @Column
    Gender: string;

    @Column
    Telephone: string;

    @Column
    DrugAllergy: string;

    @Column
    CongenitalDisease: string;

    @Column
    Address: string;

    @Column
    firstNameParent: string;

    @Column
    lastNameParent: string;

    @Column
    Relationship: string;

    @Column
    NumOfTreatments: number;
    
    
}
