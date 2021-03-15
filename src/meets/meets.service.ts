/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMeetDto } from './dto/create-meet.dto';
import { Meet } from './meet.model';

@Injectable()
export class MeetsService {
  constructor(
    @InjectModel(Meet)
    private readonly meetModel: typeof Meet,
  ) {}

  create(createMeetDto: CreateMeetDto): Promise<Meet> {
    const meet = new Meet();

    // meet.ClinicNumber = createMeetDto.ClinicNumber;
    meet.Detail = createMeetDto.Detail;
    meet.Topic = createMeetDto.Topic;
    meet.Date = createMeetDto.Date;
    meet.TimeStart = createMeetDto.TimeStart;
    meet.TimeEnd = createMeetDto.TimeEnd;
    meet.DoctorId = createMeetDto.DoctorId;
    


    return meet.save();
  }

  async findAll(): Promise<Meet[]> {
    return this.meetModel.findAll();
  }

  

  findOne(id: string): Promise<Meet> {
    return this.meetModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}