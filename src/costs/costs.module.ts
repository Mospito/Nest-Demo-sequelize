/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cost } from './cost.model';
import { CostsController } from './costs.controller';
import { CostsService } from './costs.service'

@Module({
    imports: [SequelizeModule.forFeature([Cost])],
    providers: [CostsService],
    controllers: [CostsController],
})

export class CostsModule { }