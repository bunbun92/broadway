import { IsNumber, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly password: string;
}
