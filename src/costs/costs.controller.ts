/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Cost } from './cost.model';
import { CostsService } from './costs.service';
import { CreateCostDto } from './dto/create-cost.dto';

@Controller('costs')
export class CostsController {

    constructor(private readonly costsService: CostsService) { }

    @Post()
    create(@Body() createCostDto: CreateCostDto): Promise<Cost> {
        return this.costsService.create(createCostDto);
    }

    @Get()
    findAll(): Promise<Cost[]> {
        return this.costsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Cost> {
        return this.costsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.costsService.remove(id);
    }
}