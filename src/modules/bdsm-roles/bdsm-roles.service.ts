import { Injectable } from '@nestjs/common';
import { CreateBdsmRoleDto } from './dto/create-bdsm-role.dto';
import { UpdateBdsmRoleDto } from './dto/update-bdsm-role.dto';

@Injectable()
export class BdsmRolesService {
  create(createBdsmRoleDto: CreateBdsmRoleDto) {
    return 'This action adds a new bdsmRole';
  }

  findAll() {
    return `This action returns all bdsmRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bdsmRole`;
  }

  update(id: number, updateBdsmRoleDto: UpdateBdsmRoleDto) {
    return `This action updates a #${id} bdsmRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} bdsmRole`;
  }
}
