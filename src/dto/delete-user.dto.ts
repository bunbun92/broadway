import { IsNumber } from 'class-validator';

export class DeleteUserDto {
  @IsNumber()
  readonly id: number;
}
