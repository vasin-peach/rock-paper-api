import { PartialType } from '@nestjs/mapped-types';
import { CreateBdsmRoleDto } from './create-bdsm-role.dto';

export class UpdateBdsmRoleDto extends PartialType(CreateBdsmRoleDto) {}
