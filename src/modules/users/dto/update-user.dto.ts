import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly score?: number;
}
