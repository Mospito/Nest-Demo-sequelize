/* eslint-disable prettier/prettier */
import { BelongsTo, Column, ForeignKey, Model, Table, } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Patient } from '../patients/patient.model';
@Table
export class Meet extends Model{

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

  @ForeignKey(() => Patient)
  @Column
  PatientId: number;

  @BelongsTo(() => Patient, { targetKey: 'id', foreignKey: 'PatientId', as: 'bar' })
  patient: Patient;


  @ForeignKey(() => User)
  @Column
  DoctorId: number;

  @BelongsTo(() => User, { targetKey: 'id', foreignKey: 'DoctorId', as: 'foo' })
  meet: Meet;

  // @BelongsTo( ()=> Meet, 'DoctorId')
  // meet:Meet;


  


}