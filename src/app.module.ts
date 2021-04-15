/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { MeetsModule } from './meets/meets.module';
import { PatientsModule } from './patients/patients.module';
import { CostsModule } from './costs/costs.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '178.128.90.50',
      port: 6603,
      username: 'root',
      password: 'helloworld',
      database: 'Demo',
      autoLoadModels: true,
      synchronize: true,
    }),
    // eslint-disable-next-line prettier/prettier
    MeetsModule,  PatientsModule, UsersModule, CostsModule,
  ],
})
export class AppModule { }