import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly userType: number;
}
