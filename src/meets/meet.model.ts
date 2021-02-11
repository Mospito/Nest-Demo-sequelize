import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Meet extends Model<Meet> {

  // @Column
  // DoctorId: string;

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
}