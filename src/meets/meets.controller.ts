import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMeetDto } from './dto/create-meet.dto';
import { Meet } from './meet.model';
import { MeetsService } from './meets.service';

@Controller('meets')
export class MeetsController {
  constructor(private readonly meetsService: MeetsService) {}

  @Post()
  create(@Body() createMeetDto: CreateMeetDto): Promise<Meet> {
    return this.meetsService.create(createMeetDto);
  }

  @Get()
  findAll(): Promise<Meet[]> {
    return this.meetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Meet> {
    return this.meetsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.meetsService.remove(id);
  }
}