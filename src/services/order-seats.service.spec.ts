import { Test, TestingModule } from '@nestjs/testing';
import { OrderSeatsService } from './order-seats.service';

describe('OrderSeatsService', () => {
  let service: OrderSeatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderSeatsService],
    }).compile();

    service = module.get<OrderSeatsService>(OrderSeatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
