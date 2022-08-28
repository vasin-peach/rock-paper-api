import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /* --------------------------------- Create --------------------------------- */
  async create(createUserDto: CreateUserDto) {
    await this.usersRepository
      .findOne({
        where: { name: createUserDto.name },
      })
      .then((exist) => {
        if (exist) throw new BadRequestException('CREATE_USER_DUPLICATE');
      });

    const user = this.usersRepository.create(createUserDto);
    const data = await this.usersRepository.save(user);

    return {
      statusCode: HttpStatus.CREATED,
      message: ['CREATE_USER_SUCCESS'],
      data,
    };
  }

  /* --------------------------------- Update --------------------------------- */
  async update(name: string, updateUserDto: UpdateUserDto) {
    const data = await this.usersRepository.update(
      { name },
      {
        score: updateUserDto.score,
      },
    );

    return {
      statusCode: HttpStatus.OK,
      message: ['UPDATE_USER_SUCCESS'],
      data,
    };
  }
}
