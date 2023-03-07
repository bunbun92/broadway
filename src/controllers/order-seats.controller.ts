import { Controller, Get, Param } from '@nestjs/common';
import { OrderSeatsService } from '../services/order-seats.service';

@Controller('order-seats')
export class OrderSeatsController {
  constructor(private readonly orderSeatsService: OrderSeatsService) {}

  @Get('/:contentId')
  async getAContent(@Param('contentId') contentId: number) {
    const content = await this.orderSeatsService.getAContent(contentId);

    return content;
  }

  @Get('/:contentId/timeSale')
  async checkTimeSale(@Param('contentId') contentId: number) {
    const content = await this.orderSeatsService.checkTimeSale(contentId);

    return content;
  }
}
