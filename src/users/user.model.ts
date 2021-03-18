/* eslint-disable prettier/prettier */
import {  Column,   HasMany, Model,  Table } from 'sequelize-typescript';
import { Meet } from '../meets/meet.model'

@Table({ timestamps: false, paranoid: false })
export class User extends Model {


  
  // @PrimaryKey
  // @AutoIncrement
  // @Column
  // DoctorId: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  Email: string;

  @Column
  Telephone: string;

  @Column
  Position: string;

  @Column
  Username: string;

  @Column
  Password: string;

 

  @Column({ defaultValue: true })
  isActive: boolean;

 
  @HasMany( ()=> Meet)
  meets : Meet[];
}