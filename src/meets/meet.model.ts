/* eslint-disable prettier/prettier */
import {   BelongsTo,  Column,  ForeignKey,  Model, Table,  } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Patient } from '../patients/patient.model';
@Table
export class Meet extends Model<Meet> {

  // @AutoIncrement
  // @Column
  // MeetId: number;



  @Column
  Detail: string;

  @Column
  Topic: string;

  @Column
  Date: Date;

  @Column
  TimeStart: Date;

  @Column
  TimeEnd: Date;



  @Column({ defaultValue: true })
  isActive: boolean;


  @ForeignKey( ()=> User)
  @Column
  DoctorId: number;

  @BelongsTo( ()=> Meet, 'DoctorId')
  meet:Meet;


  @ForeignKey( ()=> Patient)
  @Column
  ClinicNumber: number;

  @BelongsTo( ()=> Meet, 'ClinicNumber')
  patient:Patient;


}