/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    // user.DoctorId = createUserDto.DoctorId;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.Email = createUserDto.Email;
    user.Telephone = createUserDto.Telephone;
    user.Position = createUserDto.Position;
    user.Username = createUserDto.Username;
    user.Password = createUserDto.Password;
    
    

    

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
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

//  User.findOne({ include: [Meet] }).then((user) => {
//    user.meets.forEach((meets) => console.log(`Meets ${meets.ClinicNumber}`))
//  })
 
}