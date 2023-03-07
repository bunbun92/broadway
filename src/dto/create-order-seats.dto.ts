import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderSeatsDto {
  @IsArray()
  readonly seats: Array<string>;
}
