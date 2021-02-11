import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  DoctorId: string;

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
}