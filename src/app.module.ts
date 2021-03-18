/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { MeetsModule } from './meets/meets.module';
import { PatientsModule } from './patients/patients.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Demo',
      autoLoadModels: true,
      synchronize: true,
    }),
    // eslint-disable-next-line prettier/prettier
    MeetsModule,  PatientsModule, UsersModule,
  ],
})
export class AppModule { }