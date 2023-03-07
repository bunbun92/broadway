import { Test, TestingModule } from '@nestjs/testing';
import { OrderSeatsController } from './order-seats.controller';

describe('OrderSeatsController', () => {
  let controller: OrderSeatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderSeatsController],
    }).compile();

    controller = module.get<OrderSeatsController>(OrderSeatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
