import { Controller, Get, Param } from '@nestjs/common';
import { OrderSeatsService } from './order-seats.service';

@Controller('order-seats')
export class OrderSeatsController {
  constructor(private readonly orderSeatsService: OrderSeatsService) {}

  @Get('/:contentId')
  async getAContent(@Param('contendId') contentId: number) {
    console.log('controller' + contentId);

    const content = await this.orderSeatsService.getAContent(contentId);

    return content;
  }
}
