import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersController: UsersController;
  const TypeOrmTestingModule = () => [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [...TypeOrmTestingModule()],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /* ---------------------------------- Case ---------------------------------- */

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  // create: success
  it('should return return data correctly when user created', async () => {
    const payload = { name: 'dummy' };
    const result = {
      statusCode: HttpStatus.CREATED,
      message: ['CREATE_USER_SUCCESS'],
      data: {
        name: 'dummy',
        id: 'b93e69c8-4e1b-466b-967f-6817a3c3193b',
        score: 0,
      },
    };

    jest.spyOn(usersService, 'create').mockImplementation(async () => result);
    console.log(await usersController.create(payload));
    expect(await usersController.create(payload)).toBe(result);
  });

  // create: duplicate --> nahh

  // update: success
  it('should return return data correctly when user created', async () => {
    const payload = { score: 1 };
    const result = {
      statusCode: HttpStatus.OK,
      message: ['UPDATE_USER_SUCCESS'],
      data: {
        generatedMaps: [],
        raw: [],
        affected: 1,
      },
    };

    jest.spyOn(usersService, 'update').mockImplementation(async () => result);
    expect(await usersController.update('dummy', payload)).toBe(result);
  });
});
