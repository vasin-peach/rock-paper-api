import { Module } from '@nestjs/common';
import { BdsmRolesService } from './bdsm-roles.service';
import { BdsmRolesController } from './bdsm-roles.controller';

@Module({
  controllers: [BdsmRolesController],
  providers: [BdsmRolesService]
})
export class BdsmRolesModule {}
