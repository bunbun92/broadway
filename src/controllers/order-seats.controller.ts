import { Controller } from '@nestjs/common';
import { OrderSeatsService } from '../services/order-seats.service';

@Controller('order-seats')
export class OrderSeatsController {
  constructor(private readonly orderSeatsService: OrderSeatsService) {}
}
