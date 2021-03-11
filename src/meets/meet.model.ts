/* eslint-disable prettier/prettier */
import { AllowNull,  BelongsTo,  Column,  ForeignKey,  Model, Table, AutoIncrement } from 'sequelize-typescript';
import { User } from '../users/user.model';
@Table
export class Meet extends Model<Meet> {

  // @AutoIncrement
  // @Column
  // MeetId: number;

  @Column
  ClinicNumber: string;

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
}