/* eslint-disable prettier/prettier */
import { Column, HasMany, Model, Table } from 'sequelize-typescript';



@Table({ timestamps: false, paranoid: false })
export class Cost extends Model {

    @Column
    Date: Date;

    @Column
    CostOfDoctor: number;

    @Column
    CostOfMedicine: number;

    @Column
    CostOfPsychologist: number;

    @Column
    CostOfPractitioner: number;

    @Column
    CostOfOccupationaltherapist: number;

    @Column
    CostOfTeacher: number;

    @Column
    BankTransfer: number;

    @Column
    Cash: number;

    @Column
    Total: number;

    @Column({ defaultValue: true })
    isActive: boolean;




}