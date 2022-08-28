import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Patch,
  Post,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({
  path: 'users',
  version: VERSION_NEUTRAL,
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('action')
  action() {
    const actions = ['rock', 'paper', 'scissors'];
    const result = actions[Math.floor(Math.random() * actions.length)];
    return {
      statusCode: HttpStatus.OK,
      message: ['GET_ACTION_SUCCESS'],
      data: result,
    };
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(name, updateUserDto);
  }
}
