/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cost } from './cost.model';
import { CreateCostDto } from './dto/create-cost.dto';

@Injectable()
export class CostsService {
    constructor(
        @InjectModel(Cost)
        private readonly costModel: typeof Cost,
    ) { }


    create(createCostDto: CreateCostDto): Promise<Cost> {
        const cost = new Cost();

        cost.Date = createCostDto.Date;
        cost.CostOfDoctor = createCostDto.CostOfDoctor;
        cost.CostOfMedicine = createCostDto.CostOfMedicine;
        cost.CostOfPsychologist = createCostDto.CostOfPsychologist;
        cost.CostOfPractitioner = createCostDto.CostOfPractitioner;
        cost.CostOfOccupationaltherapist = createCostDto.CostOfOccupationaltherapist;
        cost.CostOfTeacher = createCostDto.CostOfTeacher;
        cost.BankTransfer = createCostDto.BankTransfer;
        cost.Cash = createCostDto.Cash;
        cost.Total = createCostDto.Total;

        return cost.save();
    }

    async findAll(): Promise<Cost[]> {
        return this.costModel.findAll();
    }

    findOne(id: string): Promise<Cost> {
        return this.costModel.findOne({
           
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        this.getDelete(id);
        await user.destroy();
    }

    getDelete(id): string {
        return 'Delete success!! ' + id;
    }


}