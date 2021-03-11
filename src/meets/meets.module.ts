/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meet } from './meet.model';
import { MeetsController } from './meets.controller';
import { MeetsService } from './meets.service';

@Module({
  imports: [SequelizeModule.forFeature([Meet])],
  providers: [MeetsService],
  controllers: [MeetsController],
})
export class MeetsModule {}