import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderSeatsDto } from './create-order-seats.dto';

export class UpdateOrderSeatsDto extends PartialType(CreateOrderSeatsDto) {}
