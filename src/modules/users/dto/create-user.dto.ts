import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { permissionEnum } from 'src/shared/enum';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    uniqueItems: true,
    example: '<your_email>',
    nullable: true,
  })
  readonly email?: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '<your_password>',
    nullable: true,
  })
  readonly password?: string;

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
