import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { MeetsModule } from './meets/meets.module';

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
    UsersModule,MeetsModule,
  ],
})
export class AppModule {}