import { Test, TestingModule } from '@nestjs/testing';
import { BdsmRolesController } from './bdsm-roles.controller';
import { BdsmRolesService } from './bdsm-roles.service';

describe('BdsmRolesController', () => {
  let controller: BdsmRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BdsmRolesController],
      providers: [BdsmRolesService],
    }).compile();

    controller = module.get<BdsmRolesController>(BdsmRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
