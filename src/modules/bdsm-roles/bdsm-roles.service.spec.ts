import { Test, TestingModule } from '@nestjs/testing';
import { BdsmRolesService } from './bdsm-roles.service';

describe('BdsmRolesService', () => {
  let service: BdsmRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BdsmRolesService],
    }).compile();

    service = module.get<BdsmRolesService>(BdsmRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
