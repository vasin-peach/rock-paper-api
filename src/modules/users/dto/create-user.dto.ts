import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { permissionEnum } from 'src/shared/enum';

export class CreateUserDto {
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    uniqueItems: true,
    example: '<your_email>',
    nullable: true,
  })
  readonly email?: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
    example: '<your_password>',
    nullable: true,
  })
  readonly password?: string;

  @IsOptional()
  @IsEnum(permissionEnum)
  @ApiProperty({
    example: '<your_permission>',
    nullable: true,
    enum: permissionEnum,
  })
  readonly permission?: permissionEnum;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '<your_name>',
  })
  readonly name: string;
}
