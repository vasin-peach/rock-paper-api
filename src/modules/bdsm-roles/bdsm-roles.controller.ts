import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BdsmRolesService } from './bdsm-roles.service';
import { CreateBdsmRoleDto } from './dto/create-bdsm-role.dto';
import { UpdateBdsmRoleDto } from './dto/update-bdsm-role.dto';

@Controller('bdsm-roles')
export class BdsmRolesController {
  constructor(private readonly bdsmRolesService: BdsmRolesService) {}

  @Post()
  create(@Body() createBdsmRoleDto: CreateBdsmRoleDto) {
    return this.bdsmRolesService.create(createBdsmRoleDto);
  }

  @Get()
  findAll() {
    return this.bdsmRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bdsmRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBdsmRoleDto: UpdateBdsmRoleDto) {
    return this.bdsmRolesService.update(+id, updateBdsmRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdsmRolesService.remove(+id);
  }
}
